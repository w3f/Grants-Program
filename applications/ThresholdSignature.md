# Threshold Signature Implementation

- **Team Name:** Rui Morais
- **Payment Address:** 
    - FIAT (Sent by email to grants@web3.foundation on 09/08/2024, 16:07 UTC+1)
    - Polkadot: 14bBGQFAgKqdbGVDSWkm6dA8ZQzt9GxGSTALrD8SeafWW9gL
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Description :page_facing_up:

### General Overview

This document outlines the proposal for implementing [Olaf](https://eprint.iacr.org/2023/899), the first FROST based protocol proven secure without relying on the [Algebraic Group Model](https://eprint.iacr.org/2017/620.pdf) (AGM) or an idealized key generation protocol. It is composed of:
- [FROST3](https://eprint.iacr.org/2022/550), the most efficient known variant of [FROST](https://eprint.iacr.org/2020/852), which is a threshold signature protocol based on the [Schnorr signature scheme](https://link.springer.com/article/10.1007/BF00196725) (for simplicity, we refer to FROST3 as FROST in this document, since the core functionality is the same).
- [SimplPedPoP](https://eprint.iacr.org/2023/899), a Distributed Key Generation (DKG) protocol used to generate the group key to sign in FROST. It is a simplification of [PedPoP](https://eprint.iacr.org/2020/852), the DKG used in the original FROST paper, which is the [Pedersen's DKG](https://link.springer.com/content/pdf/10.1007/3-540-46766-1_9.pdf) with Proofs of Possession (PoP) of the generated secret. All of them have as the fundamental building block the [Shamir's secret sharing scheme](https://web.mit.edu/6.857/OldStuff/Fall03/ref/Shamir-HowToShareASecret.pdf).

The goal of this project is to implement a threshold signature protocol that provides a more scalable, cheaper, more user-friendly and privacy-preserving alternative to current multisig solutions used in the Substrate / Polkadot / Kusama ecosystem. This protocol is particularly designed for scenarios with a large number of signers, ensuring both efficiency and signer anonymity.

The current multisig implementation with a threshold $t$ does not scale well with the number of participants because the protocol is done on-chain: a participant that wants to approve a given call needs to sign that call and send it to the network to be validated, having to pay fees for that. When there are sufficient call approvals ($t - 1$), a final call is made by the last participant representing the multisig account. Therefore, you always need to send at least $t$ extrinsics to the network, which is costly. Besides that, the network knows exactly which accounts approved the call, which is not good for privacy.

Our proposal solves those issues because the protocol is done off-chain instead of on-chain. The protocol starts with a Distributed Key Generation, where a secret key is generated that no single participant knows of. Instead, the participants generate shares of that secret key, that they can later use to sign an extrinsic. This is done by using the Pedersen's variation of the Shamir's secret sharing scheme, which allows the participants to verify their shares and does not require a trusted dealer. Our solution is:
- **More scalable and cheaper:** Only a single Schnorr signature is submitted to the network and is independent of the number of signers.
- **More user-friendly:** A participant does not necessarily need to make the existential deposit on its account nor pay to send an extrisinc (the broadcaster account needs to pay for it, but how and if the fee is divided among participants will depend on the use case).
- **More private:** The output Schnorr signature is indistinguishable from any other signature on the network, and the signers are not known because the signing protocol happens off-chain.

### Technical Details

This section describes in a simplified way how the Olaf protocol works, which is based on the FROST protocol. For details about the orignal protocol, consult its [paper](https://eprint.iacr.org/2020/852) and its [Rust implementation](https://github.com/ZcashFoundation/frost).

As previously mentioned, the Olaf protocol is composed of two subprotocols:
- FROST, a Threshold Signing protocol, which generates a Schnorr signature corresponding to the public key generated in the DKG protocol (or with a trusted dealer) from at least $t$ partial signatures of the participants.
- SimplPedPop, a Distributed Key Generation (DKG) protocol that generates a pair of keys (secret and public) shared between the participants such that no entity knows the secret key.

The high level flow of the FROST protocol is the following:
1. There is a preprocessing stage where each participant commits to $n$ pairs of nonces and broadcasts them to the remaining participants. Each pair will be used for one signing, so this can be done for each signing, but the preprocessing of multiple pairs ahead of time makes the process more efficient.
2. The Signature Aggregator (SA) (also called Coordinator or Combiner), which can be any of the participants, broadcasts the message and the product of the nonce commitments to the other participants.
3. Each participant computes the partial signature using its private signing share and sends it to the SA.
4. The SA verifies the partial signatures, and uses them to form the final signature.

The high level flow of the SimplPedPop protocol is the following:
1. Each participant chooses a random polynomial of degree $t-1$ and computes its commitment.
2. Each participant computes a Proof of Possession of the generated secret from the polynomial.
3. Each participant broadcasts its polynomial commitment and the Proof of Possesion to all the other participants.
4. Each participant sends each secret share to the corresponding participant.
5. Each participant verifies the received secret shares against the corresponding polynomial commitments, and the Proofs of Possession.
7. Each participant computes its final private signing share, every participant's public verification share, and the group's public key. This will be the account used to sign extrinsics.
8. Each participant broadcasts a certificate, which is a signed transcript of the protocol execution, and compares it to the certificates of the other participants.

Based on this, we present our proposed design for the implementation in the next subsections.

#### FROST Module (Rust)

Our design is based on the [draft standard](https://www.ietf.org/archive/id/draft-irtf-cfrg-frost-15.html) and the original [Rust implementation](https://github.com/ZcashFoundation/frost), with the optimizations of [FROST2](https://eprint.iacr.org/2021/1375.pdf) and [FROST3](https://eprint.iacr.org/2022/550).

```rust
pub mod frost {
    /// Generates the lagrange coefficient for the i'th participant.
    ///
    /// Implements [`derive_interpolating_value()`] from the spec: https://www.ietf.org/archive/id/draft-irtf-cfrg-frost-15.html#name-polynomials
    fn derive_interpolating_value(signer_id: &Identifier, signing_package: &SigningPackage) -> Result<Scalar, Error>;

    /// Encodes the list of group signing commitments.
    ///
    /// Implements [`encode_group_commitment_list()`] from the spec: https://www.ietf.org/archive/id/draft-irtf-cfrg-frost-15.html#name-list-operations
    fn encode_group_commitment_list(signing_commitments: &BTreeMap<Identifier, SigningCommitments>) -> Vec<u8>;

    /// Extracts identifiers from a commitment list.
    ///
    /// Implements [`participants_from_commitment_list()`] from the spec: https://www.ietf.org/archive/id/draft-irtf-cfrg-frost-15.html#section-4.3-3
    fn participants_from_commitment_list(commitment_list: &[(Identifier, NonceCommitment, NonceCommitment)]) -> Vec<Identifier>;

    /// Extracts a binding factor from a list of binding factors.
    ///
    /// Implements [`binding_factor_for_participant()`] from the spec: https://www.ietf.org/archive/id/draft-irtf-cfrg-frost-15.html#section-4.3-5
    fn binding_factor_for_participant(binding_factor_list: &BindingFactorList, identifier: Identifier) -> Result<BindingFactor, Error>;

    /// Computes binding factors based on the participant commitment list, message to be signed, and group public key.
    ///
    /// Implements [`compute_binding_factor`] from the spec: https://www.ietf.org/archive/id/draft-irtf-cfrg-frost-15.html#section-4.4
    pub(crate) fn compute_binding_factor(signing_package: &SigningPackage, verifying_key: &VerifyingKey, additional_prefix: &[u8]) -> BindingFactorList;

    /// Generates the group commitment which is published as part of the joint Schnorr signature.
    ///
    /// Implements [`compute_group_commitment`] from the spec: https://www.ietf.org/archive/id/draft-irtf-cfrg-frost-15.html#section-4.5
    fn compute_group_commitment(signing_package: &SigningPackage, binding_factor_list: &BindingFactorList) -> Result<GroupCommitment, Error>;

    /// Generates the challenge as is required for Schnorr signatures.
    ///
    /// Implements [`compute_challenge`] from the spec: https://www.ietf.org/archive/id/draft-irtf-cfrg-frost-15.html#name-signature-challenge-computa
    fn compute_challenge(R: &GroupCommitment, verifying_key: &VerifyingKey, msg: &[u8]) -> Challenge;

    /// Generates the signing nonces and commitments to be used in the signing operation.
    ///
    /// Implements [`commit`] from the spec: https://www.ietf.org/archive/id/draft-irtf-cfrg-frost-15.html#name-round-one-commitment
    pub fn commit(secret: &SigningShare) -> (SigningNonces, SigningCommitments);

    /// Receives the message to be signed and a set of signing commitments and a set of randomizing commitments to be used in that signing operation, including that for this participant.
    ///
    /// Implements [`sign`] from the spec: https://www.ietf.org/archive/id/draft-irtf-cfrg-frost-15.html#name-round-two-signature-share-g
    pub fn sign(signing_package: &SigningPackage, signer_nonces: &SigningNonces, key_package: &KeyPackage) -> Result<SignatureShare, Error>;

    /// Aggregates the signature shares to produce a final signature that can be verified with the group public key.
    ///
    /// Implements [`aggregate`] from the spec: https://www.ietf.org/archive/id/draft-irtf-cfrg-frost-15.html#name-signature-share-aggregation
    pub fn aggregate(signing_package: &SigningPackage, signature_shares: &BTreeMap<Identifier, SignatureShare>, pubkeys: &PublicKeyPackage) -> Result<Signature, Error>;

    /// Verifies if a signature share issued by a participant is valid before aggregating it into a final joint signature to publish.
    ///
    /// Implements [`verify_signature_share`] from the spec: https://www.ietf.org/archive/id/draft-irtf-cfrg-frost-15.html#name-signature-share-verification
    pub(crate) fn verify_signature_share(&self, identifier: Identifier, group_commitment_share: &GroupCommitmentShare, verifying_share: &VerifyingShare, lambda_i: Scalar, challenge: &Challenge) -> Result<(), Error>;

    /// An alternative to [`commit`] (not part of the spec) that can be used to pre-process more than 1 nonce for future 1-round FROST signings instead of regular 2-round FROST.
    pub fn preprocess(num_nonces: u8, secret: &SigningShare) -> (Vec<SigningNonces>, Vec<SigningCommitments>);
}
```

#### SimplPedPop Module (Rust)

As of note, an implementation is currently being developed based on [SimplPedPop](https://eprint.iacr.org/2023/899), called [ChillDKG](https://github.com/BlockstreamResearch/bip-frost-dkg), by one of the authors of the paper.

```rust
pub mod simplpedpop {
    /// Generates the SimplPedPop messages to be sent to the coordinator or directly to the other participants.
    pub fn generate_simplpedpop(identifier: Identifier, max_signers: u16, min_signers: u16) -> Result<(SecretPackage, Package), Error>;

    /// Verifies the messages received from all participants and returns the data for the equality check and DKG output.
    pub fn verify_simplpedpop(secret_package: &SecretPackage, packages: &BTreeMap<Identifier, Package) -> Result<(KeyPackage, PublicKeyPackage), Error>;

    /// Generates the challenge for the Proof of Possession of the generated secret.
    fn challenge(identifier: Identifier, verifying_key: &VerifyingKey, R: &RistrettoPoint) -> Option<Challenge>;

    /// Computes the Proof of Possession of the secret coefficients used to generate the public secret sharing commitment.
    pub(crate) fn compute_proof_of_possession(identifier: Identifier, coefficients: &[Scalar], commitment: &VerifiableSecretSharingCommitment) -> Result<Signature, Error>;

    /// Verifies the Proof of Possession of the secret coefficients used to generate the public secret sharing commitment.
    pub(crate) fn verify_proof_of_possession(identifier: Identifier, commitment: &VerifiableSecretSharingCommitment, proof_of_knowledge: Signature) -> Result<(), Error>;

    /// Generates a certificate by signing a transcript with a `SecretKey`.
    pub fn generate_certificate<T: SigningTranscript>(secret_key: &SecretKey, transcript: T) -> Certificate<T>;

    /// Verifies the signature of the certificate and compares its transcript with our own transcript.
    pub fn verify_certificate<T: SigningTranscript>(public_key: &PublicKey, own_transcript: T, certificate: &Certificate<T>) -> bool;
}
```

#### CLI Proof of Concept Threshold Signature Implementation for Polkadot/Kusama (Rust)

The goal of the CLI application is to show how simple and efficient can be to send an extrinsic from a threshold of accounts is targeted to a user that does not need to understand how to protocol works to use it.

The general idea is to have two separate files where the CLI app writes to and reads from automatically, so that the protocol execution is as smooth as possible: 
- One encrypted file with a password, denoted as `[PRIVATE_FILE_PATH]`, that stores the private information of the protocol, such as the secret keys, the polynomial coefficients, the nonces and the secret shares.
- One plaintext file, denoted as `[PUBLIC_FILE_PATH]`, that stores the public information of the protocol, such as the accounts, the number of participants, the threshold, the nonce commitments, the network and the extrinsics.

```
A Proof of Concept for managing a Threshold Signature Scheme (TSS) wallet that uses the Olaf protocol

USAGE:
    olaf-cli <SUBCOMMAND>

OPTIONS:
    -h, --help       Print help information
    -V, --version    Print version information

    set-network
        Description: Sets the network configuration for the CLI tool to interact with.
        Usage: olaf-cli set-network --public-file [PUBLIC_FILE_PATH] 

    get-network
        Description: Retrieves and displays the current network configuration being used by the CLI tool.
        Usage: olaf-cli get-network --public-file [PUBLIC_FILE_PATH] 

    generate-accounts
        Description: Generates the requested number of accounts.
        Usage: olaf-cli generate-accounts --private-file [PRIVATE_FILE_PATH] --public-file [PUBLIC_FILE_PATH] --number-of-accounts  [NUMBER_OF_ACCOUNTS] 

    airdrop
        Description: Requests an airdrop from the provided endpoint to the account.
        Usage: olaf-cli airdrop --account [ACCOUNT_INDEX] --endpoint [ENDPOINT]

    balance
        Description: Requests the balance of the provided account to the endpoint.
        Usage: olaf-cli balance --public-file [PUBLIC_FILE_PATH] --account [ACCOUNT_INDEX] --endpoint [ENDPOINT]

    run-dkg
        Description: Runs the DKG protocol with the provided parameters.
        Usage: olaf-cli run-dkg --private-file [PRIVATE_FILE_PATH] --public-file [PUBLIC_FILE_PATH] --max-signers [ACCOUNT_INDEXES] --min-signers [THRESHOLD] 
    
    preprocess
        Description: Optionally, preprocesses nonces and commitments for signing, primarily used for one-round FROST.
        Usage: olaf-cli preprocess --private-file [PRIVATE_FILE_PATH] --public-file [PUBLIC_FILE_PATH] --number-of-nonces [NUMBER_OF_NONCES] 

    sign
        Description: Generates a signature of the provided payload with the given accounts.
        Usage: olaf-cli sign --private-file [PRIVATE_FILE_PATH] --public-file [PUBLIC_FILE_PATH] --signers [ACCOUNT_INDEXES] --payload [PAYLOAD] 

    broadcast
        Description: The extrinsic is broadcast by the provided account using the specified endpoint.
        Usage: olaf-cli broadcast --public-file [PUBLIC_FILE_PATH] --account [ACCOUNT_INDEX] --extrinsic [EXTRINSIC_INDEX] --endpoint [ENDPOINT]

    help
        Description: Provides detailed help information for the specified subcommand or general help if no subcommand is specified.
        Usage: olaf-cli help [SUBCOMMAND]

```

### Ecosystem Fit

This project is useful for any Substrate based project that wants to implement the functionality that a threshold signature scheme with DKG provides, but it is specially suited for wallet developers. As an example, during the PBA cohort of Hong Kong, Talisman presented the Signet project ([PR #2051](https://github.com/w3f/Grants-Program/pull/2051)), which includes a multisig wallet specifically tailored for enterprises. The Olaf protocol would be the ideal use case for that. In fact, we have talked with @replghost about and he showed interest in this project. Besides that, it can be used as a backend wallet, instead of a front-end user focused wallet, in other applications.

Since the two subprotocols are independent of each other, the DKG protocol can be used as a building block for other primitives and projects. As an example, it can be used to implement [DDH-DVRF](https://eprint.iacr.org/2020/096.pdf), a fully distributed version of the original [DDH-VRF](https://bchainzhang.github.io/files/group.pdf), which was standardized in [RFC 9381](https://datatracker.ietf.org/doc/rfc9381/).

### Related Projects

Within the Substrate / Polkadot / Kusama ecosystem there are three related projects, that we know of:
- The Supersig pallet ([PR #959](https://github.com/w3f/Grants-Program/pull/959)), which improves on the functionality of the original multisig pallet by persisting some state that can be changed (add and remove members from the multisig, delete it, etc). 
- A Substrate based project called [ChainFlip](https://chainflip.io), which is a service that uses the FROST protocol to swap coins from one chain to another. 
- A Substrate based project that implements a [Threshold ECDSA Distributed Key Generation Protocol](https://github.com/webb-tools/dkg-substrate). 

Outside the Substrate / Polkadot / Kusama ecosystem, we have found the following:
- ZCash Foundation has recently announced the first [stable release](https://zfnd.org/frost-reference-implementation-v1-0-0-stable-release/) of a FROST implementation, but has yet to integrate it in its ecosystem.
- There have been attempts in the past to implement off-chain threshold Schnorr signing schemes in blockchain related projects, specifically by [Zengo](https://github.com/ZenGo-X/multi-party-schnorr). However, their implementation is based on an older protocol that is less efficient than the FROST protocol.
- The same company has implemented a multi-signature scheme [Proof of Concept in Solana](https://github.com/ZenGo-X/solana-tss), but it is a n-of-n signature scheme, which is a special case of the more flexible and powerful t-of-n scheme.

Other than that, we have not found any integration of a FROST based protocol in a relevant related ecosystem, which shows that a potential integration in the Substrate / Polkadot / Kusama ecosystem would provide a substantial advantage in this field relative to other competitors.

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

- **Total Estimated Duration:** 1 month
- **Full-Time Equivalent (FTE):**  1 FTE
- **Total Costs:** 15,000 USD

### Milestone 1 - Olaf Library Integration into [Schnorrkel repository](https://github.com/w3f/schnorrkel)

- **Estimated duration:** 0.5 month
- **FTE:** 1
- **Costs:** 10,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | GPLv3 |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can use both libraries to implement the FROST protocol, which will show how the new functionality works. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| **1.a** | Pull Request of a FROST implementation merged into Schnorrkel repository | We will implement the FROST protocol in Rust as described in the previous sections. |
| **1.b** | Pull Request of a SimplPedPop implementation merged into Schnorrkel repository | We will implement the SimplPedPop in Rust protocol as described in the previous sections. |

### Milestone 2 - CLI Proof of Concept Threshold Signature Implementation

- **Estimated duration:** 0.5 month
- **FTE:** 1
- **Costs:** 5,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | GPLv3 |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a group of users can generate a shared public key and use the corresponding secret key to sign threshold signatures multiple times without revealing it, which will show how the new functionality works. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| **0e.** | Article | We will publish an **article**/workshop that explains how the Proof of Concept works under the hood and how it can be used from a user perspective. |
| **1.a** | CLI Proof of Concept Threshold Signature Implementation for Polkadot/Kusama | We will develop a CLI application in Rust that uses the previous libraries as a Proof of Concept Threshold Signature implementation with out-of-band communication between participants, being the end goal to broadcast a valid extrinsic to a Polkadot/Kusama testnet from a shared group key. |

## Future Plans

Future plans may follow one of two directions, depending on the market feedback, and they are not mutually exclusive:
- Decentralize and strengthen the security model of the protocol further. This includes:
  - Not having a single party acting as the Signature Aggregator. This can be useful for applications where the signers do not trust each other.
  - Making the DKG protocol [robust](https://eprint.iacr.org/2021/1658.pdf), removing the need to restart it if a cheater is identified.
  - Making the signing subprotocol [robust and asynchronous](https://eprint.iacr.org/2022/550.pdf), guaranteeing that it always terminates in the presence of at least $t$ honest signers and under bad network conditions.
- Add functionality to the protocol. For example: 
  - Add support to other DKGs;     
  - Add support to ECDSA;
  - Optimize the scheme to be [weighted](https://trust-machines.github.io/wsts/wsts.pdf), so that different parties have different amounts of shares;
  - [Issuing new shares](https://conduition.io/cryptography/shamir/#Issuing-a-New-Share), which can be used to enroll new members and recover lost shares (removing members is much more difficult since you cannot be sure that someone deleted their shares);
  - [Decrease the threshold](https://conduition.io/cryptography/shamir-resharing/).
- Develop a "real world" implementation using the WebRTC protocol for establishing a direct secure communication between web wallets in the browser.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** I heard about it during the PBA Hong Kong cohort.
