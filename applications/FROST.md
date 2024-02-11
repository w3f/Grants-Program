# FROST Protocol Implementation

- **Team Name:** Rui Morais
- **Payment Address:** 14bBGQFAgKqdbGVDSWkm6dA8ZQzt9GxGSTALrD8SeafWW9gL (USDC)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 1

## Project Description :page_facing_up:

### Overview

This document outlines the proposal for implementing FROST, a threshold signature protocol based on the Schnorr signature scheme, within the Substrate ecosystem. It provides a more scalable, cheaper, more user-friendly and privacy-preserving alternative to current multisig solutions. This protocol is particularly designed for scenarios with a large number of signers, ensuring both efficiency and signer anonymity.

The current multisig implementation with a threshold $t$ does not scale well with the number of participants because the protocol is done on-chain: a participant that wants to approve a given call needs to sign that call and send it to the network to be validated, having to pay fees for that. When there are sufficient call approvals ($t - 1$), a final call is made by the last participant representing the multisig account. Therefore, you always need to send at least $t$ extrinsics to the network, which is costly. Besides that, the network knows exactly which accounts approved the call, which is not good for privacy.

Our proposal solves those issues because the protocol is done off-chain instead of on-chain. The protocol starts with a Distributed Key Generation, where a secret key is generated that no single participant knows of. Instead, the participants generate shares of that secret key, that they can later use to sign an extrinsic. This is done by using the Pedersen's variation of the Shamir's secret sharing scheme, which allows the participants to verify their shares and does not require a trusted dealer. Our solution is:
- **More scalable and cheaper:** Only a single Schnorr signature is submitted to the network and is independent of the number of signers.
- **More user-friendly:** A participant does not necessarily need to make the existential deposit on its account nor pay to send an extrisinc (the broadcaster account needs to pay for it, but how and if the fee is divided among participants will depend on the use case).
- **More private:** The output Schnorr signature is indistinguishable from any other signature on the network, and the signers are not known because the signing protocol happens off-chain.

### Arquitecture

This section describes in a simplified way how the FROST protocol works and how it will be implemented to be compatible with Substrate. For details about the protocol, consult the original paper (https://eprint.iacr.org/2020/852) and its Rust implementation (https://github.com/ZcashFoundation/frost).

The FROST protocol is composed of two subprotocols:
- The Distributed Key Generation protocol, which generates a pair of keys (secret and public) shared between the participants in the protocol. No entity knows the secret key.
- The Threshold Signing protocol, which generates a Schnorr signature corresponding to the public key generated in the DKG protocol from at least $t$ partial signatures of the participants.

The high level flow of the DKG protocol is the following:
1. One participant sends the message to start the DKG to the server, which includes the addresses of the participants, the threshold $t$ and a commitment random polynomial of degree $t - 1$.
2. The server verifies the message, asks if the other wallets want to participate in the protocol and, if yes, sends the first message to them.
3. The remaining participants choose their own commitment to a random polynomial, which is broadcasted to the others by the server.
4. Each participant sends encrypted secret shares (using a non-interactive Diffie-Hellman key exchange based on the wallets keys) to the other participants through the server, which are points of its own polynomial.
5. Each participant verifies the received secret shares against the corresponding polynomial commitments and computes the final private signing share.
6. Each participant calculates their public verification share and the group's public key. This will be the account used to sign extrinsics.

The high level flow of the Threshold Signing protocol is the following:
1. There is a preprocessing stage where each participant commits to $n$ pairs of nonces and broadcasts them to the remaining participants. Each pair will be used for one signing, so this can be done for each signing, but the preprocessing of multiple pairs ahead of time makes the process more efficient.
2. The Signature Aggregator (SA), which can be any of the participants, constructs the message and an ordered list containing all participant's nonce commitments and broadcasts them to the other participants, that verify them.
3. Each participant computes the partial signature using its private signing share and sends it to the SA.
4. The SA verifies the partial signatures, and uses them to form the final signature.

Bellow there is a figure with the architecture diagram of the protocol with three participants (clients). We will follow this architecture for the initial Proof of Concept implementation, where each wallet will be connected to a central server by a WebSocket, and the server will act as a relayer for the communication between the participants. The project is divided in two phases:
- The first phase is to develop two easy-to-use libraries compatible with Substrate, one for the client in Typescript and another for the server in Rust, that abstract all the complexity of the protocol away and can be easily integrated into other software. 
- The second phase is to use those libraries to implement both the server, in Rust, and the client, which will be a fork of Talisman (https://github.com/TalismanSociety/talisman). The end product will be a functional prototype implementation of the FROST protocol compatible with Substrate ready for the end user. 

<p align="center">
  <img src="https://github.com/Fiono11/grant-/blob/main/diagram3.jpg" alt="Alt text">
</p>

In this first iteration of the protocol both the central server and the Signature Aggregator are central points of failure. If malicious, the central server can abort the execution of the protocol or perform denial-of-service attacks, and the SA has the power to falsely report misbehavior by participants. However, neither of them can learn the private key or cause improper messages to be signed. 

We believe an incremental approach in this project is the most appropriate, since we are implementing a cryptographic protocol. We want to make sure that the underlying core protocol works and is secure first before adding more complexity and potential risks to it.

### Server API (Rust)

This section covers the server-side API for the FROST protocol, focusing on handling client requests and coordinating the Distributed Key Generation (DKG) and Threshold Signing processes.

```rust
pub mod frost_server {
    /// Verifies the initial dkg message of a participant.
    pub fn verify_initial_dkg_message(participant_addresses: Vec<String>, threshold: usize) -> bool; 

    /// Notifies the participants of the Distributed Key Generation process initiated by a client.
    pub fn notify_dkg_participants(poly_commit: Vec<u8>, participants_sockets: Vec<WebSocket>);

    /// Verifies the polynomial commitment of a participant.
    pub fn verify_poly_commit(poly_commit: Vec<u8>) -> bool;

    /// Broadcasts the polynomial commitment from one participant to the others.
    pub fn broadcast_poly_commit(poly_commit: Vec<u8>, participants_sockets: Vec<WebSocket>);

    /// Verifies the encrypted shares of a participant.
    pub fn verify_encrypted_secret_shares(encrypted_shares: Vec<Vec<u8>>) -> bool;

    /// Broadcasts encrypted secret shares among participants.
    pub fn broadcast_encrypted_secret_shares(encrypted_shares: Vec<Vec<u8>>, participants_sockets: Vec<WebSocket>);

    /// Verifies the nonce commitments of a participant.
    pub fn verify_nonce_commitments(nonce_commitments: (Vec<u8>, Vec<u8>)) -> bool;

    /// Broadcasts nonce commitments for the threshold signing process.
    pub fn broadcast_nonce_commitments(nonce_commitments: (Vec<u8>, Vec<u8>), participants_sockets: Vec<WebSocket>);

    /// Verifies the encrypted shares of a participant.
    pub fn verify_partial_signature(partial_signature: Vec<u8>) -> bool;

    /// Broadcasts a partial signature to the Signature Aggregator.
    pub fn broadcast_partial_signature(partial_signature: Vec<u8>, signature_aggregator_socket: WebSocket);
}
```

### Client API (Typescript)

This section outlines the client-side API for the FROST protocol, detailing actions individual participants need to perform during the DKG and Threshold Signing processes.

```typescript
module FrostClient {
    // Initiates the Distributed Key Generation process.
    export function startDKG(participantAddresses: string[], threshold: number, poly_commit: Uint8Array, server: WebSocket): void;

    // Sends participation confirmation and own polynomial commitment to the server.
    export function sendPolynomialCommitment(poly_commit: Uint8Array, server: WebSocket): void;

    // Verifies the polynomial commitment received from the server.
    export function verifyPolyCommit(poly_commit: Uint8Array, participant_id: Id): boolean;

    // Verifies the polynomial commitment received from the server.
    export function verifyPolyCommit(poly_commit: Uint8Array, participant_id: Id): boolean;

    // Sends encrypted secret shares to the server for distribution.
    export function sendEncryptedSecretShares(encrypted_shares: Uint8Array[], server: WebSocket): void;

    // Decrypts the secret share received from the server.
    export function decryptShare(encrypted_share: Uint8Array, participant_id: Id): Uint8Array;

    // Verifies the share received from the server.
    export function verifyShare(share: Uint8Array, participant_id: Id): boolean;

    // Computes and sends the final private signing share to the server.
    export function computeFinalPrivateShare(verifiedShares: Uint8Array[]): Uint8Array;

    // Computes its own public verification share from its own private final share.
    export function computeOwnPublicVerificationShare(private_final_share: Uint8Array): Uint8Array;

    // Computes the public verification share of another participant from its polynomial commitment.
    export function computeOtherPublicVerificationShare(poly_commit: Uint8Array, participant_id: Id): Uint8Array;

    // Computes the group's public key from the polynomial commitments.
    export function computeGroupPublicKey(poly_commits: Uint8Array[]): Uint8Array;

    // Computes the nonce commitments for a given number of signings.
    export function computeNonceCommits(number_of_signings: number): [Uint8Array, Uint8Array][];

    // Commits to pairs of nonces and sends them to the server for a future signing.
    export function sendNoncesCommits(nonces_commits: [Uint8Array, Uint8Array][], server: WebSocket): void;

    // Computes the partial signature using the final private signing share for a given message.
    export function computePartialSignature(message: Uint8Array, final_share: Uint8Array): void;

    // Sends the partial signature to the server.
    export function sendPartialSignature(partial_signature: Uint8Array, server: WebSocket): void;

    // Verifies the partial signature received from the server.
    export function verifyPartialSignature(partial_signature: Uint8Array, message: Uint8Array, participant_id: Id): boolean;

    // The SA computes the final signature from the partial signatures for a given message.
    export function computeFinalSignature(partial_signatures: Uint8Array[], message: Uint8Array): Uint8Array;

    // The SA broadcasts the final signed message to the network.
    export function broadcastFinalMessage(final_signature: Uint8Array, network: WebSocket): void;
}
```

### UI Mockup

Next we show a mockup of what the UI will look like in the final Proof of Concept implementation for creating and transferring from a threshold wallet:

<table align="center">
<tr>
    <td><img src="https://github.com/Fiono11/grant-/blob/main/create.jpg?raw=true" alt="Create Image" style="max-width: 100%;"></td>
    <td><img src="https://github.com/Fiono11/grant-/blob/main/transfer.jpg?raw=true" alt="Transfer Image" style="max-width: 100%;"></td>
</tr>
</table>

### Ecosystem Fit

The goal of the project is to build a working prototype that can be integrated by established wallets of the ecosystem; the goal is not to be another competitor wallet.

This project is useful for any Substrate based project that wants to implement the functionality it provides, but it is specially suited for wallet developers. As an example, during the PBA cohort of Hong Kong, Talisman presented the Signet project ([PR #2051](https://github.com/w3f/Grants-Program/pull/2051)), which includes a multisig wallet specifically tailored for enterprises. The FROST protocol would be the ideal use case for that. In fact, we have talked with @replghost about and he showed interest in this project. Besides that, it can be used as a backend wallet, instead of a front-end user focused wallet, in other applications.

Since the two subprotocols are independent of each other, the DKG protocol can be used as a building block for other projects. As an example, it can be used to implement an anonymous currency based on DPoS that uses threshold decryption to know the total delegated stakes of the delegates without revealing the individual stakes of each account that delegated.

### Related Projects

Within the Substrate / Polkadot / Kusama ecosystem there are three related projects, that we know of:
- The Supersig pallet ([PR #959](https://github.com/w3f/Grants-Program/pull/959)), which improves on the functionality of the original multisig pallet by persisting some state that can be changed (add and remove members from the multisig, delete it, etc). Although an improvement, it does not solve the problem of scalability and privacy.
- A Substrate based project called ChainFlip (https://chainflip.io), which is a service that uses the FROST protocol to swap coins from one chain to another. It is does not provide the FROST functionality as a standalone library to be used in development of other services.
- A Substrate based project that implements Threshold ECDSA Distributed Key Generation Protocol  (https://github.com/webb-tools/dkg-substrate). Besides using another signature scheme (ECDSA), it is not a library that can be easily used by other projects.

Outside the Substrate / Polkadot / Kusama ecosystem, we have found the following:
- ZCash Foundation has recently announced the first stable release of a FROST implementation (https://zfnd.org/frost-reference-implementation-v1-0-0-stable-release/), but has yet to integrate it in its ecosystem.
- There have been attempts in the past to implement off-chain threshold signing schemes to blockchain related projects, specifically by Zengo (https://github.com/ZenGo-X/multi-party-eddsa). However, their implementation is based on an older protocol that is less efficient than the FROST protocol.
- The same company has implemented a multi-signature scheme Proof of Concept in Solana (https://zengo.com/introducing-solanas-first-open-source-threshold-signature-library/), but it is a n-of-n signature scheme, which is a special case of the more flexible and powerful t-of-n scheme (https://eprint.iacr.org/2020/1261.pdf).

Other than that, we have not found any integration of the FROST protocol in a relevant related ecosystem, which shows that a potential integration in the Substrate / Polkadot / Kusama ecosystem would provide a substantial advantage in this field relative to other competitors.

### Team members

- Rui Morais

### Contact

- **Contact Name:** Rui Morais
- **Contact Email:** ruipedromorais11@gmail.com
- **Github:** https://github.com/fiono11
- **Linkedin:** https://www.linkedin.com/rui-morais

### Team's experience

- Recently submitted a PhD thesis in Computer Science entitled *"Contributions to Permissionless Decentralized Networks for Digital Currencies Based on Delegated Proof of Stake"* (awaiting for the defense).
- Published the following papers:
  - [Echidna: A New Consensus Algorithm for Efficient State Machine Replication](https://ieeexplore.ieee.org/document/10338927) (IEEE BCCA 2023)
  - [Nero: A Deterministic Leaderless Consensus Algorithm for DAG-Based Cryptocurrencies](https://www.mdpi.com/1999-4893/16/1/38) (Algorithms 2022)
  - [A tool for implementing privacy in Nano](https://ieeexplore.ieee.org/document/9126023) (IEEE DAPPS 2020)
  - [Adamastor: a New Low Latency and Scalable Decentralized Anonymous Payment System](https://arxiv.org/abs/2011.14159) (Arxiv)
- Has graduated the PBA Hong Kong cohort. 

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 2 month
- **Full-Time Equivalent (FTE):**  1 FTE
- **Total Costs:** 10,000 USD

### Milestone 1 - FROST Protocol Libraries Implementation

- **Estimated duration:** 1 month
- **FTE:** 1
- **Costs:** 5,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | GPLv3 |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can use both libraries to implement the FROST protocol, which will show how the new functionality works. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| **0e.** | Article | We will publish an **article**/workshop that explains how the FROST protocol and the libraries work. |
| **1.a** | Client-side library | We will implement a client-side library for the FROST protocol compatible with Substrate in Typescript. |
| **1.b** | Server-side library | We will implement a server-side library for the FROST protocol compatible with Substrate in Rust. |

### Milestone 2 - Proof of Concept Threshold Signature Implementation

- **Estimated duration:** 1 month
- **FTE:** 1
- **Costs:** 5,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | GPLv3 |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a group of users can generate a shared public key and use the corresponding secret key to sign threshold signatures multiple times without revealing it, which will show how the new functionality works. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| **0e.** | Article | We will publish an **article**/workshop that explains how the Proof of Concept works under the hood and how it can be used from a user perspective. |
| **1.a** | Client Implementation | We will implement a client in Typescript compatible with Substrate as a fork of Talisman (https://github.com/TalismanSociety/talisman) using the client-side library. |
| **1.b** | Server Implementation | We will implement a server in Rust compatible with Substrate using the server-side library. |
| **1.c** | Proof of Concept Threshold Signature Implementation | We will integrate both the client and the server as a Proof of Concept Threshold Signature implementation compatible with Substrate and ready to be utilized by the end user. |

## Future Plans

Future plans may follow one of two directions, depending on the market feedback, and they are not mutually exclusive:
- Decentralize and strengthen the security model of the protocol further. This includes:
  - Removing the central server that acts as the relayer (either by having multiple fallback servers or none at all, using libp2p for peer-to-peer communication*, for example);
  - Not having a single party acting as the Signature Aggregator. This can be useful for applications where the signers do not trust each other.
  - Making the DKG subprotocol robust, removing the need to restart it if a cheater is identified (https://eprint.iacr.org/2021/1658.pdf).
  - Making the signing subprotocol robust and asynchronous, guaranteeing that it always terminates in the presence of at least $t$ honest signers and under bad network conditions (https://eprint.iacr.org/2022/550.pdf).
- Add functionality to the protocol. For example:
  - Add support to ECDSA;
  - Optimize the scheme to be weighted, so that different parties have different amounts of shares (https://trust-machines.github.io/wsts/wsts.pdf);
  - Issuing new shares (https://conduition.io/cryptography/shamir/#Issuing-a-New-Share), which can be used to enroll new members and recover lost shares (removing members is much more difficult since you cannot be sure that someone deleted their shares);
  - Decrease the threshold (https://conduition.io/cryptography/shamir-resharing/).
 
*There is already a spec for establishing direct communication between two private nodes like two browsers (https://github.com/libp2p/specs/blob/master/webrtc/webrtc.md).

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** I heard about it during the PBA Hong Kong cohort.
