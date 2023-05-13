# Cryptex

- **Team Name:** Ideal Labs
- **Payment Address:** 0x2CDA3C7D6e21Cc4f43C170c0dFf2e9F3B3B5E889 (USDC)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 3

## Project Overview :page_facing_up:

**Cryptex** is a blockchain that uses the *blind DKG* protocol. This proposal presents the blind DKG protocol, a blind distributed key generation protocol and a potential architecture to implement it within a substrate based blockchain. First we briefly explain the cryptographic tools and language needed, then we define the main protocol, blind dkg, and finally we propose an architecture and implementation.

### Overview

A distributed key generator (DKG) is a multi-party computation protocol through which a set of participants can collectively generate a shared public/private keypair. Blind DKG, **blind distributed key generation**, is a type of distributed key generator (DKG) where there is no linkability between any specific member of the network and any contribution to a shared key resulting from a DKG. By adding blindness, blind dkg is able to mitigate and resist many vulnerabilities in other DKG protocols. It is resistant to attack via collusion, Sybil attacks, and malicious coordinator attacks. Each participant in the protocol generates their secret share through a verifiable secret sharing (VSS) mechanism, with the blindness facilitated by a randomly chosen 'coordinator'.

Cryptex is a blockchain that manages the participant and coordinator selection of the blind dkg protocol (elaborated below), enables a way to define conditions to data access, and provides a platform to incentivize participation in the protocol. It is intended to be a decentralized KEM for distributed key creation, encryption/decryption, and signing. The initial use of Cryptex is as a decentralized secret sharing network, wherein users can leverage the Cryptex blockchain to generate keys that can be used to encrypt data, specify conditions for data access (e.g. ownership of a specific asset), and require a threshold of shares in order to decrypt. The owner of a secret key never needs to know the secret, they only need to encrypt with the shared public key and then allow the Cryptex network to provide access to the secret key to other participant's who meet the rules defined by the owner of the key. Because the shareholders are blind, it is difficult (impossible?) for shareholders to be bribed or collude and by using the blockchain they are incentivized to provide shares when the conditions are met.

Motivation:
> Suppose Alice has a document that she wants to make available to anybody who can meet some set of rules, but Alice will not be unavailable later to hand over the document. Alice has a plan though, she splits her data into pieces, or shares, and gives a single piece to anybody who she thinks will be available later and tells each person that if Bob shows up, to tell them their share. Then, each of these people have to make themselves known so that Bob can ask them for a secret. Bob appears, and they each give a copy to Bob and he is able to reassamble Alice's document and read her secret. However, suppose Charlie comes along before Bob and he doesn't want Alice to share her secret. Since Charlie knows who the shareholders are, he can bribe them to not give the key to Bob when he asks, or to get a key himself even though he isn't Bob. If sensitive information is to be secure this way, Alice needs a new plan to make sure Charlie can't do this.

### Project Details

To start, we provide a brief overview of secret sharing and distributed key generation. Then, we will use this to explain the core protocol, and finally the implementation details. For additional motivation and deeper details on the cryptographic schemes, we direct the reader to a [substack](https://ideallabs.substack.com/p/blind-dkg-part-1) we wrote that elaborates on the reason that VSS by itself isn't enough for an unstoppable application, as well as a [deep dive into some thoughts](https://substack.com/inbox/post/120522945) that lead to this proposal.

This proposal both extends and reimagines many of the concepts that were part of the [iris](https://github.com/w3f/Grants-Program/blob/master/applications/iris_followup.md) proposal.  

#### Background: Secret Sharing and Distributed Key Generation

##### Secret Sharing

First introduced by [Shamir](https://web.mit.edu/6.857/OldStuff/Fall03/ref/Shamir-HowToShareASecret.pdf), threshold secret sharing is a cryptographic protocol to encrypt a secret so that it can only be recovered if a threshold of participants collaborate. A secret is split into shares and distributed to multiple parties who can reconstruct the secret when at least a threshold of them participate. However, TSS, and its extension VSS (verifiable secret sharing, such as [Feldman's scheme](https://www.cs.umd.edu/~gasarch/TOPICS/secretsharing/feldmanVSS.pdf)), by itself does not allow for an unstoppable system, namely in that it requires a trusted setup for the key generation phase. Additionally, there is not a clear way to make the sharing of a secret both trustless and non-interactive.

##### Distributed Key Generation
A distributed key generation protocol (DKG) is a multi-party computation protocol that allows for a distributed keypair to be generated among a set of participants in a trustless or semi-trustless way. The basis of the scheme is that each participant generates a random secret and uses a VSS scheme to share it with other participants. Together, they can create a distributed public/private keypair. DKGs are nothing new, and have been implemented many times in the past, such as [ethDKG scheme](https://eprint.iacr.org/2019/985) or in distributed networks like [Lit](https://litprotocol.com/). At a high level, one idea for a DKG is that each participant uses Feldman's scheme to create a secret, shares, and commitments, then distributes these amongst each other and collectively form a public and private key. 

#### Our Proposal

We propose a blockchain, Cryptex, which uses Blind DKG (described below), to enable a decentralized KEM. We then define a smart contract based approach to define conditions for data access and a javascript/typescript SDK to provide tools for interacting with Cryptex and rule contracts. We intend to use the blockchain + contracts + SDK to enable dapps with general decentralized secret sharing capabilities (e.g. a fully-decentralized permissioned file system).

Cryptex itself will use a proof of stake consensus mechanism (using BABE + Grandpa).

##### What this is not
- This is not an MPC wallet. The protocol *could* be used to build a custodial wallet, and that is a future use case we want to explore, however, for our initial use case we want to build tools for encryption and secret sharing.
- The main protocol does not store information about encrypted datasets, it only provides keypairs and key management capabilities. Data encryption and decryption must still be handled outside of the main protocol, and in fact many different encryption schemes could be implemented on top of the derived keys. We will build encryption functionality alongside the core protocol, both from the SDK and the dkg library.
- This protocol is not a decentralized storage solution. The management and storage of data that is encrypted with keys generated this way must still be handled offchain. This protocol will attempt to be storage agnostic.

### Blind DKG Protocol

This is a fairly technical and abridged version of the protocol. This is discussed more in depth [here](https://driemworks.substack.com/p/blind-distributed-key-generation). We are working on formalizing this in a paper along with a proper security analysis and proofs.

The goals of the protocol are:
- Participants should be unaware of each others identities and there should be no way to link the secret held by a participant to its commitments or participation.
- We want the resulting group public key to be able to be used for threshold signatures and threshold secret sharing.
- To be able to recover the secret of any participant who has become unresponsive, when at least a threshold wants to recover it. This will be important for the system to be robust (e.g. if nodes become unresponsive you can redistribute a secret).

The protocol is designed to keep the participants and the coordinator in check and incentivizes both to behave honestly. Below, we'll discuss how the protocol can be implemented in a blockchain. At a high-level, it can be initiated by any member of the network. Then, a coordinator is selected from the active validator set. By using a VRF and relying on the coordinator, members of the network are able to blindly particpate in a DKG, forming a shared private/public keypair with out exposing their identities to the network.

1. **Initiation** The protocol is initiated when a user (an arbiter), say $A$, decides on a threshold $t$ and a group size $n$ and publishes $(t, n)$ by sending a signed transaction to the blockchain. The initiator/owner of keys created through the protocol is public information.
2. **Coordinator Selection** The protocol relies on a semi-trusted coordinator who is responsible for ensuring the blindness of the protocol. The active session validator set forms the set of possible coordinators during any given session. Coordinator selection works via a small election, wherein the validator set selects a random leader who will take the role of coordinate. The coordinator randomly generates a new secret key $R$ and public key $Q_c$ and publishes it to the network. It also chooses two numbers randomly, $\tau > 0$ and $\varepsilon > 0$ to form a condition for accepting participants in the next step.
3. **Participant Selection** Once a leader is selected and its identity broadcast to the network, members of the validator set attempt to participate. They each have access to a VRF, which they use to generate a new keypair $(SK^*, PK^*)$ and then to get a new random number and proof $(d, \pi) \leftarrow VRF.Eval(SK^*, x)$ for some randomly selected $x$. If $|\tau - d| < \varepsilon$, then it considers itself selected. It them randomly selects a new secret key $R_i$ and public key $Q_i$, which it blinds using the coordinators public key, and submits a commitment to $d$ along with the proof $\pi$, and it's blind public key $B$.
4. **Blind DKG commitment** The coordinator unblinds each blind commitment $B$ and generates a group key, which is public and from which participants who contributed can derive their own shares and prove participation.
5. **Key Generation** Each participant who believes itself valid (based on VRF output) generates a secret polynomial $f(x)$ and a commitment $F(x)$ (e.g. Pedersen commitment). Then it generates shares and commitments as per the Joint-Feldman approach, encrypting each commitment using the public key $Q_c$ and sending the commitment $F$ publicly (a partially blind messasge). Each message should contain the blinded public key so that the coordinator can verify valid participants.
6. **Swapping** The coordinator generates a random permutation of the set of valid participants. Then for each bundle of shares received, it verifies the blinded public key sent was used in the creation of $S$, if so then it decrypts each share $f(j)$ it recieved, verifies it against $F(j)$. If the share is invalid, then the coordinator removes that participant from the rest of the protocol. Then by using the random permutation it generated it assigns each share to a unique participant. Then it uses each unblinded $Q_i$ to blind the share. Then it publishes the blinded shares by sending a signed transaction containing the blind public key of the participant and the encrypted shares, along with a zero-knowledge proof of correctness that it validated each secret.
7. **Unblinding and Secret Generation** Each participant decrypts the shares it received and verifies that it was done correctly. Since each share is provided by a unique participant, the implication is that if the proof is valid then all shares provided are valid (since the coordinator should have validated them), so if any single one is invalid then the protocol aborts (and the coordinator node can be slashed).
   
**Public key Derivation** To blindly derive a new public key, any coordinator can be used. the coordinator chooses a new group generator $H$ and broadasts it. Each node that knows it participated is incentivized to generate a new public key with their secret share generated in the previous step. They then calculate a zk proof of correctness that they calculated the public key correctly, then blind the new public key and publish it along with the proof. The coordinator then unblinds each key, verifies each proof, and if all valid then it aggregates the unblinded keys to calculate a new group public key, which it then publishes.

At the end of this, the participants have a shared secret/public keypair without ever having communicated, since the coordinator facilitated all communication. The coordinator, while having insight into the identities of the participants, has no insight into the secret that they have generated. Additionally, since the coordinator can identity participants, it provides a nice way to do away with the 'disputes' phase present in many dkg protocols (e.g. what what previously written in this proposal) and to identify malicious participants.

##### Some Notes
- No Disputes: This type of DKG does not require a disputes phase, as other DKGs do, since the coordinator verifies all shares before submitting them to participants. 
- Privacy: The participants in the protocol are able to remain anonymous. This does not extend to the initator of the protocol, however, who will be publicly recorded as owning the derived public key.
- Security: It's designed to resist a variety of attacks, including malicious participants and compromised coordinators. It is also resistant to Sybil attacks since the participants are selected randomly, though this does not imply the underlying consensus (and thus the coordinator) is resistant to Sybil attacks.  It is also resistant to collusion among shareholder, since it is not possible (in most situations) to determine who will be able to participate before the protocol starts. Additionally, after the public key is derived, since there is no publicly verifiable link between public key and participant, it is hard to find nodes to bribe.
- Scalability: The protocol can be scaled to support a large number of participants. Since participants only communicate with the coordinator, there is no overhead where they need to send messages to each other (i.e. one message with 'n' shares to the coordinator v.s. 'n' messages of 1 share published for other participants).
- Vulnerable to side-channel attacks: The protocol is vulnerable to side-channel attacks. For example, since it is somewhat computationally intensive, power consumption could be an indicator of particpation.If there are a lot of requests to decrypt the same keys (this would be even worse for large thresholds), then it maybe possible to figure out who's publishing keys based on energy usage and the signed txs sent as part of the protocol. There are some ways to mitigate this that we'll explore in the future.

#### Non-interactive Secret Sharing

As a note, we would like to revisit this idea with a more elegant solution in the future. The initial version we propose here is not privacy preserving (i.e. it would be publicly recorded that someone requested keys for a public key).

We intend to enable non-interactive secret sharing using rules defined in smart contracts which can delegate decryption rights. The idea we propose is the same as was developed for the [iris](https://github.com/w3f/Grants-Program/blob/master/applications/iris_followup.md) proposal. The general idea is that the owner of some distributed key can define a contract that can verify if any given caller should be authorized to get a calculate a decryption key. If the contract determines they can, then the caller should receive keys. Ideally, we would like to perform this in a cryptographically verifiable way, where we do not need to trust that the society is economically incentivized to behave correctly, however that will require more research. For now, we intend to develop **rules** contracts which can be aggregated in a "rule executor" contract, which can act as a barrier to data. The network will incentivize members of the society to only deliver shares as determined by the authorized address, such as a call from a contract. To accomplish this, the owner of a public key can authorize itself or another address (or set of addresses) to be able to authorize the transfer of reencryption keys.

We do not make any stringent enforcement on how rules and rule executors should work, and they can really take any form. The only stipulation is that the owner of the public key has authorized the address to be able to initiate the distribution of keys to another address.

This first use case we will build on Cryptex is a rule-based secret sharing platform. As part of this, the owner of a public key, derived via blind dkg, gets the hash of their secret (e.g. sha256), encrypts the secret with a shared public key, adds the ciphertext to IPFS, and then publishes the resulting CID and sha256 hash of the plaintext (e.g. to a smart contract that verifies their ownership of the pubkey). This is not the 'rule' contract, but just some dapp running on Iris. Other users can use that dapp to read and interact with the data that was just published. They can then request access by calling a rule executor associated with the public key. If the rule executor contract authorizes it, then it calls the chain (via a chain extension) to encode onchain that anyone with a share of the corresponding secret $S$ should encrypt a share for a participant $P$ and publish it *blindly*. To do this, each $P$ must publish a new public key that it has derived offcahin, this iwll be used to encrypt data. Then, we use an approach which is essentially the same as in the main blind dkg protocol. A coordinator is randomly chosen, each participant prepares their blind public key and publishes a share, encrypted for the coordinator, along with the blind key. The coordinator then unblinds the keys, verifies the shares, aggregates them into a master secret key, then encrypts it for the specified recipient and publishes it. 

#### Proposed Architecture


<p align="center">
 <img src="https://github.com/ideal-lab5/Grants-Program/blob/dkg/static/img/high_level_cryptex_user_centered.drawio.png?raw=true" alt="SDK interactions overview"/>
</p>


##### Libraries/Tech Stack

- Languages: rust, typescript/javascript
- Frameworks/Libs: substrate + tools (e.g. ink!, zombienet, telemetry), arkworks-rs for algebra and zk SNARKs.
- We will use [tarpaulin](https://github.com/xd009642/tarpaulin) for test coverage of our new pallets and dkg library.

##### Testing + Code Quality Approach

We intend to meet a minimum coverage of 80% on all code, as well as document manual test scenarios + zombienet scenarios, and to integrate code coverage and quality tools into our CI pipeline. Here is our testing tools/plans in brief:

- Pallets: For pallets, we will write unit tests, with coverage verified by tarpaulin. We'll also perform benchmarking for each pallet.
- E2E tests: E2E tests for the runtime will be done both manually and with zombienet. We intend to document manual testing steps, expected results, and verification for any reviewers.
- SDK: The sdk will be tested with some unit testing framework.

Code Quality: We haven't determined any code quality tools which we'll use, though we will follow all rust best practices, including ensuring code is properly formatted and passes cargo clippy. All code will be reviewed by the team before being released. We may also rely on the larger "PBA Alumni" community in some regard in order to receive external feedback as well.

Once completed, we will have security audits performed on our codebases as well (and resolve any issues).

##### Blind DKG Library

This is a standalone library that contains the code for the core blind DKG implementation. We plan on building this using arkworks-rs. This library will enable the Blind DKG protocol as detailed above. It will provide functionality to:

- generate secret polynomials, calculate shares and commitments
- verify key shares and prepare proofs of correctness of invalidity calculations
- blind messages, verify blind messages
- encrypt/decrypt using El Gamal (wasm)

The library will also compile to wasm and work with both std and no-std.

##### Pallets

These pallets may rely on other pallets that already exist in FRAME, which we don't mention here. (e.g. Grandpa, Babe, Balance, Timestamp, Assets, Contracts, etc.). The names and structure in the actual implementation may differ.

###### Coordinator Selection

We select a coordinator in the same way that a leader is selected in the consensus mechanism. That is, we select a coordinator using the same mechanism as BABE, via the election-provider-multi-phase module. 

###### DKG Pallet

The DKG pallet facilitates Blind DKG. That is, it contains the extrinsics needed to initate the protocol, submit blinded public keys, submit encrypted shares and commitments, and all other interactions as specified in the protocol. The pallet will allow for shared public key ownership to be validated, as well as contain the extrinsics needed to request decryption keys. The runtime storage of this pallet will store the blind public keys and allow for public verification that keys are correctly calcuated and that the participants were all valid. It will be able to trigger the coordinator selection process, which initates the blind dkg.

##### Authorization Pallet and Contracts

To facilitate the non-interactive secret sharing aspect of the network, we build functionality to allow the owner of a public key created via Blind DKG to specify other addresses as being able to 'authorize' reencryption of data for other parties. To make this a non-interactive process, we will use smart contracts that we refer to as 'rule' contracts. A rule contract is any contract that can call into the blockchain, via a chain extension, which, when authorized by the owner, can initate the reencryption process as discussed above.

To make this work, we will develop an 'authorization' pallet which allows the owner of a pubkey to specify addresses that can authorize data access. The extrinsic to authorize data access will be exposed through a chain extension and callable by contracts.

These contracts have no one-size-fits-all template, but to begin we will define a few nice primitives that could be used to build more complex rules. To start, we will define rule contracts that enable:

- password protected data
- identity-based data access
- data procetected by ownership of an asset

These will be implemented with ink!. In order to make this possible, we also implement a chain extension to authorize an address to decrypt data.

##### SDK

We will build an SDK with the following capabilities to allow developers and protocols to interact with cryptex:
 
  <p align="center">
    <img src="https://github.com/ideal-lab5/Grants-Program/blob/dkg/static/img/Cryptex-SDK.jpg?raw=true" alt="SDK Capabilities"/>
  </p>

  - **Encryption:** provides types and functions to encrypt and decrypt secrets. This functionality will rely on the wasm build of the [blind dkg library](#blind-dkg-library).
  - **VSS Client:** provides types and functions to interact with the protocol, some examples of such interactions are encryption key requests and secret sharing requests. We will build this with either polkadotjs or [Capi](https://github.com/paritytech/capi). It contains the calls needed to interact with the DKG pallet for key generation and the SNFT pallet for reencryption and for delegating decryption rights to other identities. This module also provides support for interacting with smart contracts (maybe with [useink!](https://github.com/paritytech/useink)). We would also like to explore using a light client, and potentially delve into [mobile compatibility](https://github.com/paritytech/trappist-extra).
  - **Rules DSL:** a domain specific language to define/model access rules required to get access to  a shared secret. Once defined, rules are packaged/translated to smart contracts. In future versions we will build a graphic editor to define these rules using our DSL as building block. The following diagram shows a high-level conceptual design of this capability:
  
  <p align="center">
    <img src="https://github.com/ideal-lab5/Grants-Program/blob/dkg/static/img/Cryptex-RulesDSL-final.jpeg?raw=true" alt="SDK Rules DSL Capability"/>
  </p>

  - **Storage:** provides types and functions to save/read/update ciphered documents through different datasource options. The first version will provide IPFS as data storage option but we are going to expand this module in the future to include centralized options as well such S3, Google Drive, between others. We will use a `MultiAddress` to locate data and a `CID` to identify it. The following diagram shows a high-level conceptual design of this capability:
  
  <p align="center">
    <img src="https://github.com/ideal-lab5/Grants-Program/blob/dkg/static/img/Cryptex-Storage-final.jpeg?raw=true" alt="SDK Storage Capability"/>
  </p>

  - **Graphql API:** provides types and functions to fetch data saved on-chain and off-chain related to Blind DKG in a developer friendly way. We may also explore the usage of [subquery](https://subquery.network/). This is not explicitly within the scope of this grant. The following diagram shows a high-level conceptual design of this capability:
  
  <p align="center">
    <img src="https://github.com/ideal-lab5/Grants-Program/blob/dkg/static/img/Cryptex-Graphql.jpeg?raw=true" alt="SDK Graphql Capability"/>
  </p>

Dapps built on the protocol would essentially be 'multiaddress and CID management' contracts which would be responsible for storage and curation of the multiaddresses and CIDs that are encrypted with some given public key. For example, a 'Netflix' dapp might look like some type of decentralized database mapping CIDs to some set of metadata (e.g. title, genre, rating), where the CIDs point to data encrypted with the Netflix public key generated via the DKG. The 'Netflix Rules' contract could be something as simple as checking if the caller owns the official 'Netflix NFT'. Dapps will most likely need to rely on some type of storage beyond what's available in the contract, as contract storage is limited and this data could potentially be huge. We leave the storage solution up to the implementer here via the storage module within the SDK. We intend to make this modular enough for a data owner to use any type of storage they choose, though to begin we limit this to only IPFS.


### Ecosystem Fit

Help us locate your project in the Polkadot/Substrate/Kusama landscape and what problems it tries to solve by answering each of these questions:

- Where and how does your project fit into the ecosystem?
  - Our project is a substrate-based chain that introduces new capabilities to the ecosystem, including using experimental cryptographic tools.
  - Our work will produce tools and knowledge that will be open source and openly available to the developer community.
  - We aim to become a parachain.
- Who is your target audience (parachain/dapp/wallet/UI developers, designers, your own user base, some dapp's userbase, yourself)?
  - **parachain**: ultimately, we strive to become a parachain. By taking advantage of XCM and continuing to evolve the cryptographic mechanisms surrounding delegation of decryption, we believe that very powerful and dynamic paradigms can be unleashed, such as gating access to data based on conditions of any state in any other parachain (e.g. data access via ownership of some specific asset on Statemint).
  - **users**: A long-term target audience will be our own user-base, as well as the user base of other parachains who need to share a secret. 
  - **Developers**: The tools we develop will be open source and available to other developers in the ecosystem. We intend to build a robust toolkit to enable devs to easily build on our new protocol/blockchain.
- What need(s) does your project meet?
  - Our project enables a decentralized an unstoppable secret key custodian. We see this as a foundational layer to building decentralized 'cryptographic data ownership' models, where by having a trustless key custodian, the network allows you to provably 'own' data, by proving that you own the keys to decrypt it. We think that this is a very powerful ownership model that can disrupt how data is secured today.
  - On top of that, the project also allows for a certain degree of governance within the system, and we have plans to add some type of 'decentralized moderation' tools in the future. 
- Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?
  - There are some projects that use threshold encryption:
    - [CESS](https://cess.cloud/)
    - [SkyeKiwi](https://github.com/skyekiwi/skyekiwi-protocol)
    - However, neither project uses a dkg for trustless keygen as we do. Further, SkyeKiwi is dependent on IPFS, which our protocol is not.
  - If so, how is your project different?
  - If not, are there similar projects in related ecosystems?
- We have found projects that are similar in other ecosystems as well:
  - For general "password manager/storage" type applications, we have:
    - [b.lock](https://github.com/BlockProject/b-lock)
    - [DaPassword](https://cardano.ideascale.com/c/idea/332494)
    - [Blockchain password](https://margatroid.github.io/blockchain-password/#/)
    - [You](https://medium.com/airgap-it/you-the-decentralized-password-manager-2f521cced7be)
  - [EthDKG](https://github.com/PhilippSchindler/EthDKG): EthDKG is a DKG protocol on built on ethereum, where its main contribution is the introduction of zk snarks during the disputes process.
  - [Share](https://share.formless.xyz/): which appears to use some type of threshold encryption but does not go into major detail (and which has dubious scalability)
  - [Lit Protocol](https://litprotocol.com/): LIT is a protocol that runs on a distributed network of mostly static nodes who each participate in a DKG to enable TSS *threshold signature scheme/threshold secret sharing. LIT, however, isn't a blockchain and isn't really decentalized, it is 'middleware' as their docs claim. Additionally, the DKG it uses is quite different than the one proposed here.

## Team :busts_in_silhouette:

### Team members

- Tony Riemer
- Carlos Montoya
- Juan Girini

### Contact

- **Contact Name:** Tony Riemer
- **Contact Email:** driemworks@idealabs.network
- **Website:** https://www.idealabs.network/

### Legal Structure

- **Registered Address:** 2451 Crystal Drive, 6th floor, Arlington, VA 22202, USA
- **Registered Legal Entity:** Ideal Labs, LLC

### Team's experience

Please describe the team's relevant experience. If your project involves development work, we would appreciate it if you singled out a few interesting projects or contributions made by team members in the past. 

If anyone on your team has applied for a grant at the Web3 Foundation previously, please list the name of the project and legal entity here.
Tony has worked on two, [here as "iridium"](https://github.com/w3f/Grants-Program/blob/master/applications/iris.md) and [here as "Ideal Labs"](https://github.com/w3f/Grants-Program/blob/master/applications/iris_followup.md).

### Tony Riemer

I am an engineer and math-lover with a passion for exploring new ideas. I studied mathematics at the University of Wisconsin and subsequently went to work at [Fannie Mae](https://en.wikipedia.org/wiki/Fannie_Mae) and then [Capital One](https://en.wikipedia.org/wiki/Capital_One), where I mainly worked on fintech products, like systems for loan servicing and efficient pricing algorithms. For the previous year and a half, I've been working exclusively in the web3 space, including having worked on two web3 foundation grants [here](https://github.com/w3f/Grants-Program/blob/master/applications/iris.md) and [here](https://github.com/w3f/Grants-Program/blob/master/applications/iris_followup.md) and as an independent consultant. Beyond the web3-sphere, I have dabbled in many open source projects as well as have built several of my own, ranging from computer vision, machine learning, to IoT and video games.  Most recently, I attended the Polkadot Blockchain Academy in Buenos Aires, and this new proposal is an application of ideas I learned there applied to my previous grant.

### Carlos Montoya
I have been doing software for more than 20 years, most recently in the startup world. 
- **Blockchain Experience**
Through 2022 I was mainly focused on building smart contracts with solidity, and on taking part in some encode-club bootcamps and ETH Global hackathons. I built several apps, one of them a decentralized job-board protocol called [web3Jobs](https://ethglobal.com/showcase/web3jobsfevm-inz64) ([Repo](https://github.com/encode-g2-project)). In Early 2023 I had the fortune to participate in the Polkadot blockchain academy in Buenos Aires. Cryptex's idea emerged during my time in the academy.
- **Software Engineering Experience**
  Since early 2021 I have been building [TeamClass](https://www.teamclass.com) as CTO and partner. TeamClass is a b2b marketplace for helping companies with their team-building initiatives through virtual events. We bootstrapped TeamClass ourselves and made sales by 3.8M in our first year. Previously, between 2016 and 2020 I was completely focused on building [StellarEmploy](https://www.stellaremploy.com) with my co-founders, where we had the opportunity to participate in NY ERA (Accelerator), and got institutional capital. StellarEmploy's technology was recently acquired by Learning Collider. Finally, between 2004 and 2015, I was CTO and Chief Architect at [MVM Software Engineering](https://www.mvm.com.co/?lang=en), a technology firm with a deep focus on energy solutions. During my time there I had the responsibility of defining the way of doing software for the entire company, leading very skilled people, building complex software products, and managing hundreds of initiatives for helping the company to expand its operations in Colombia, the Dominican Republic, and Mexico. 
- **Carnegie Mellon University** Master of Science Information Technology, 2011 - 2013
- **Tecnológico de Monterrey** Master in Information Technology Management, 2011 - 2013
- **Universidad Pontificia Bolivariana** Innovation and Technology Management, 2009 - 2010
- **Universidad Autónoma de Manizales** Systems Engineer, 1997 - 2002

### Juan Girini

 I am a software engineer with nearly 20 years of experience. Over the years, I have worked in various industries and have gained valuable experience in backend projects for the web2 space. However, my passion for decentralization has led me to focus on web3.

I studied Information Systems Engineering at [Universidad Tecnológica Nacional](https://utn.edu.ar/) in Argentina. In early 2023, I graduated from the Polkadot Blockchain Academy in Buenos Aires. This life-changing experience opened doors for me into the world of Substrate. During my time at the academy, I had the opportunity to meet with Carlos and Tony. Together, we started to conceive this project.

Following my graduation from the academy, I joined Parity as a Core Rust Engineer in the Pallet Contracts team. Some of my previous working experiences are Backend Developer at [Scayle](https://www.scayle.com/); Lead Engineer at [Cohabs](https://www.cohabs.com/); and Head of Development at [Barracuda Digital](https://barracuda.digital/).

### Team Code Repos

- https://github.com/ideal-lab5/cryptex-node
- https://github.com/ideal-lab5/cryptex-sdk
- https://github.com/ideal-lab5/contracts
- https://github.com/ideal-lab5/dkg

Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine.

- https://github.com/driemworks
- https://github.com/carloskiron
- https://github.com/juangirini

### Team LinkedIn Profiles

- https://www.linkedin.com/in/tony-riemer/
- https://www.linkedin.com/in/cmonvel/
- https://www.linkedin.com/in/juan-girini/


## Development Status :open_book:

- academic publications relevant to the problem
  - The VRF we use is the same as in [Babe](https://research.web3.foundation/en/latest/polkadot/block-production/Babe.html).
  - [Some further reading on VSS and DKG protocols](https://eprint.iacr.org/2012/377.pdf)
- links to your research diary, blog posts, articles, forum discussions or open GitHub issues,
  - I have already started a PoC to implement and simulate the blind dkg protocol here: https://github.com/ideal-lab5/dkg
  - In my substack I've published a few things about this, [here](https://driemworks.substack.com/p/blind-distributed-key-generation) and [here](https://ideallabs.substack.com/p/blind-dkg-part-1).
  - This work builds on the previous work done by Tony in his Iris project (see previous w3f grants).
  - While doing research for this proposal we uncovered we previously done by [protocol labs](https://research.protocol.ai/blog/2022/a-deep-dive-into-dkg-chain-of-snarks-and-arkworks/) on a deep dive of an implementation. Though it doesn't mirror our protocol, we see this as evidence for the feasibility of using arkworks for a DKG.
- references to conversations you might have had related to this project with anyone from the Web3 Foundation
  - We have spoken with several individuals involved with the grants program and with square one, specifically Coleman Maher and Nico Morgan, in a non-technical capacity, to discuss the high-level idea and potential. 
  - During an evaluation of the Iris grant, I spoke with the evaluator Diogo and he expressed scepticism around the security of the approach taken in Iris. While attending the PBA, after discussing ideas related to secret sharing schemes with instructors and  engineers from Parity and web3 foundation, I was able to reimagine the secret sharing implemented in Iris and redesign the system in order to fix the vulnerabilities inherent in the approach. I have already shared the draft whitepaper with some folks at web3 as well, though we haven't had a formal review of it.

## Development Roadmap :nut_and_bolt:

The general flow of our milestones are a two-pronged approach. In each milestone, we intend to develop the SDK capabilities as well as Blind DKG libary/runtime in parallel. We will also adhere to strict test coverage (>= 80%) and documentation requirements.

### Overview

- **Total Estimated Duration:** 24 weeks
- **Full-Time Equivalent (FTE):**  2.5 FTE
- **Total Costs:** 72,000 USD

There is a mandatory set of deliverables defined in the template. Since we aim to make similarly defined delvieries for each milestone, we present the list of pre-defined deliverables, expected per milestone, here: 

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | GPLv3 |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| **0e.** | Article | We will publish an **article**/workshop that explains [...] (what was done/achieved as part of the grant). (Content, language and medium should reflect your target audience described above.) |

Note on estimates: 
- the estimates next to each deliverable are really high level, and we are attempting to break tasks down so that things can be worked on in parallel as much as possible. 
- Unless otherwise specified, assume that the estimate includes both any required research, develop, *and* testing.

### Milestone 1 — PoA Blind DKG

- **Estimated duration:** 6 weeks
- **FTE:**  2.5
- **Costs:** 18,000 USD

In the first milestone we will use a proof of authority consensus with a static set of authorities. This makes the network simpler to test and verify while we develop the foundational aspects. 

###### Goals
The goals of this milestone are:
- to implement and test blind dkg in a standalone library
- to implement a modified (simplified) integration of Blind DKG into our runtime. Participation won't be blind but still no link between final pubkey 
- a basic implementation of the SDK; the implementation should let users to initiate the dkg, check public key ownership, and query blockchain runtime storage.

We implement a modified version of blind dkg, without the coordinator selection or the participant selection steps. Since the goal is to ensure that the blind dkg library integrates nicely with substrate, we do not want to overcomplicate things at the outset. In this modified version, only 'Alice' will be able to act as a coordinator. The size and threshold of the shareholder set will be static values for now too. The pallet will have functionality to initate the dkg and to initate the distribution of reencryption keys for the secret, with reencryption only possible when the owner sends a signed tx. Further, in the simplified implementation, we won't use a VRF quite yet and instead all validators participate.

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 1. | (4 weeks) Library: Blind DKG | We implement and test the blind DKG protocol using arkworks. We will make our implementation work on any elliptic curve group implemented with arkworks. |
| 2. | (3 weeks) Substrate module: DKG Pallet | We build a pallet to integrate blind dkg into our runtime as described above. This will also include the calculation of a group public key. We will use a conjunction of runtime storage maps and logic within an on_initialize hook to accomplish this. |
| 3. | (2 weeks, done in parallel) SDK | The SDK should have basic functionality to: request to initate a round of blind dkg and query runtime storage, as well as setup the foundations of the SDK. |

### Milestone 2 - PoA Secret Sharing
- **Estimated Duration:** 6 weeks
- **FTE:**  2.5
- **Costs:** 18,000 USD

At the end of the previous milestone, we have accomplished the abilitiy for Alice to act as a static coordinator for a static set of participants, but we have yet to use those keys for any purpose. In this milestone, we don't yet solve the issue of the static authority set, but we do make the keys usable.

###### Goals
The outcome of milestone 2 is to enable secret sharing within the network. In order to do so, we develop functionality to encrypt, reencrypt, and decrypt data secured using the keys created through the mechanism implemented in milestone 1.

- shared public key derivation
- zk proofs of correctness to verify correctness of shares
- we begin the non-interactive secret sharing implementation by:
  - allowing users to publish a new public key to be used for encryption of secret shares 
  - allowing validators to encrypt shares and submit them onchain
- update the SDK to be able to leverage the secret sharing capabilities

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 1a. | (2 weeks) Substrate Module: DKG Pallet: PK Derivation | We implement the public key derivation process as described above. |
| 1b. | (2 weeks) Substrate Module: DKG Pallet: SK derivation | We implement the blind mechanism for shareholders to submit keys as detailed [above](#non-interactive-secret-sharing). As part of this, we allow users to submit a public key to be used for encryption of their shares. |
| 2. | (2 weeks) Substrate Module: DKG Pallet | We enhance the pallet so that the coordinator (Alice) sends a zk proof of correctness that she validated a share and each participant verifies the proof. |
| 3. | (2 weeks) SDK | We add functionality to fetch public keys and verify their ownership, to encrypt/decrypt data, create and submit new public keys to the network for encryption, and to read a secret from the chain. |


### Milestone 3 - Full Blind DKG Implementation

- **Estimated Duration:** 6 weeks
- **FTE:**  2.5
- **Costs:** 18,000 USD

###### Goals

The goal of this milestone is to complete the implementation of blind dkg to make it truly blind. As part of this, we:
- upgrade to NPoS consensus
- implement coordinator selection
- implement blind participant selection
- slash/reward participants


| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 1. | (1.5 weeks) | We upgrade our blockchain to use nominated proof of stake consensus. | 
| 2. | (3 weeks) Substrate Module: Coordinator Selection | We implement the coordinator selection mechanism, using the same approach used by BABE to select a coordinator (using a VRF). We also integrate this into the DKG pallet to trigger the process via extrinsic call. |
| 3. | (3 weeks) Substrate Module: Participant Selection (with VRF) | We implement the blind participant selection mechanism based on the work in the previous deliverable. Here, each validator submits a VRF and proof as detailed above. We also integrate this into the DKG pallet, so that once a coordinator is selected, the participant selection mechanism starts.  |
| 4. | (2 weeks) Substrate Module: DKG Pallet: Slashes and Rewards | We implement a basic slashing/reward scheme for participants in the DKG in order to incentivize honest participation. | 
| 5. | (2 weeks) SDK | We implement a storage adapapter in the SDK and verify a simple flow that keys can be created, used for encryption, and later on assembled and used for decryption. The reward mechanism will work by the coordinator distributing the reward to each participant. |

### Milestone 4 - Rule contracts
- **Estimated Duration:** 6 weeks
- **FTE:**  2.5
- **Costs:** 18,000 USD

###### Goals
Now that we have a complete implementation of Blind DKG, we will add a 'rule-based' access system on top of it, as defined using smart contracts. The intention is that the owner of data can define a proxy who can authorize data access, and that proxy is a smart cotnract deployed to the chain.
- enabling a rule based system to determine if an address can decrypt data
- develop and test a set of contracts to act as a base rule set
- develop tools to define and deploy these rules using a DSL
- showcase features and capabilities of everything developed thus far by building a dapp

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 1 .| (1.5 weeks) Substrate Module: Authorization Pallet + Chain Ext | We build a new pallet that provides functionality to authorize a proxy to delegate decryption rights to other addresses. Along with this, we build a chain extension that exposes this functionality for use in smart contracts. |
| 2. | (.5 weeks) Substrate Module: DKG Pallet | We modify the DKG pallet so that validators can publish new keys when the contract asks. |
| 2. | (2 weeks) Contracts | We use the chain extension and pallet from the previous deliverable to build several rule-based contracts for data that could be: password-protected, decryption based on identity (not exactly IBE*), and decryption based on ownership of an asset. |
| 3. | (3 weeks) SDK: DSL | We design and implement the DSL module of our SDK and enhance. The DSL module will allow users to design rules and deploy them as a contract, which can then be associated with their public key through the authorization pallet. |
| 4. | (3 weeks) SDK: Generic Secret Sharing Dapp | The final task of the final milestone is to use everything that has been developed thus far and to build a dapp on top of it. Our inital dapp will be a simple secret sharing platform that allows users to use our pre-defined contracts and DSL to build a decentralized, permission file system. We will build an interface that lets users create secrets, store them, define rules for access, share secrets, etc. We want this experience to showcase the full feature set that we have developed. |

## Future Plans

Please include here
- Short term intentions include: completion, review, and publication of our whitepaper, building an online presence, releasing cryptex as a testnet, promoting the protocol and SDK, enhancements and continued development, etc.
- Long Term:
  - We would like to become a parathread or parachain on Polkadot (probably parathread initially), which makes the next point more interesting.
  - We would like to explore the usage of XCM in order to accomplish cross-chain 'data locks', wherein the proof of a condition on chain A (e.g. owning some specific asset on Ajuna) would equate to decyryption rights being granted in Cryptex.
  - We would like to explore enabling a threshold signature scheme using the derived keys.
  - We would like to explore the usage of witness encryption within a blockchain. Some initial research has been done on this and it is a very promising concept, though a practical implementation would be very difficult at this point.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation Website / Medium / Twitter / Element / Announcement by another team / personal recommendation / etc.
- Tony initially heard about this a year ago via the substrate website. Collectively, we all learned about the grants program at the polkadot blockchain academy.

Here you can also add any additional information that you think is relevant to this application but isn't part of it already, such as:

- As stated previously, Tony has worked on two grants previous to this one. The items in this grant are very much inspired by the Iris grant, however, it is intended to fix all of the vulnerabilities and issues (i.e. lack of scalability) that Iris failed to do.
