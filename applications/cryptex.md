# Cryptex

- **Team Name:** Ideal Labs
- **Payment Address:** 0x2CDA3C7D6e21Cc4f43C170c0dFf2e9F3B3B5E889 (USDC)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 3

## Project Overview :page_facing_up:

**Cryptex** is a blockchain that uses the *blind DKG* protocol. This proposal presents the blind DKG protocol, a consensus-backed distributed key generation protocol and a potential architecture to implement it within a substrate based blockchain. First we briefly explain the cryptographic tools and language needed, then we define the main protocol and finally we propose a potential architecture and implementation.

### Overview

Blind DKG is a consensus-backed distributed key generation mechanism. It allows for a verifiable secret sharing scheme with an on-chain proof system to gate access to data. Unlike a traditional VSS scheme, it eliminates the need for a trusted setup by using a distributed key generator, as well as blind selection via a VRF. It allows for a semi-trustless decryption rights delegation (i.e. secret sharing) process. When implemented as part of a decentralized network (such as a blockchain), it enables a system where you can create a distributed secret and derive public keys which can be used to secure data. Additionally, we extend the protocol to enable a 'cryptographic gate' to data access using smart contracts, wherein an owner of some data can define rules to delegate decryption rights. The protocol is:

- **non-interactive**: Alice does not need to interact with Bob in order to delegate decryption rights.
- **no trusted setup**: Alice does not need to trust the set of participants holding the pieces of her secret.
- **consensus agnostic**: The protocol can operate on top on top of any consensus mechanism that allows for at least 3 authorities in the network. 

Motivation:
> Suppose Alice has a document that she wants to make available to anybody who can meet some set of rules, but Alice will not be unavailable later to hand over the document. Alice has a plan though, she splits her data into pieces, or shares, and gives a single piece to anybody who she thinks will be available later and tells each person some condition that someone should prove to get a share. Then, if Bob appears later and can prove that they have met Alice's rules and enough of the people who have shares believe Bob, then they give a copy to Bob and Bob is able to reassamble Alice's document and read her secret.

### Project Details

To start, we provide a brief overview of secret sharing and distributed key generation. Then, we will use this to explain the core protocol, and finally the implementation details. For additional motivation and deeper details on the cryptographic schemes, we direct the reader to a [substack](https://ideallabs.substack.com/p/blind-dkg-part-1) we wrote that elaborates on the reason that VSS by itself isn't enough for an unstoppable application.

This proposal both extends and reimagines many of the concepts that were part of the [iris](https://github.com/w3f/Grants-Program/blob/master/applications/iris_followup.md) proposal.  

#### Background: Secret Sharing and Distributed Key Generation

##### Secret Sharing

First introduced by [Shamir](https://web.mit.edu/6.857/OldStuff/Fall03/ref/Shamir-HowToShareASecret.pdf), threshold secret sharing is a cryptographic protocol to encrypt a secret so that it can only be recovered if a threshold of participants collaborate. A secret is split into shares and distributed to multiple parties who can reconstruct the secret when at least a threshold of them participate. However, TSS, and its extension VSS (verifiable secret sharing, such as [Feldman's scheme](https://www.cs.umd.edu/~gasarch/TOPICS/secretsharing/feldmanVSS.pdf)), by itself does not allow for an unstoppable system, namely in that it requires a trusted setup for the key generation phase. Additionally, there is not a clear way to make the sharing of a secret both trustless and non-interactive.

##### Distributed Key Generation
A distributed key generation protocol (DKG). It allows for a distributed keypair to be generated among a set of participants in a trustless way. The basis of the scheme is that each participant generates a random secret and uses a VSS scheme to share it with other participants. Together, they can create a distributed public/private keypair. Our scheme, inspired by the [ethDKG scheme](https://eprint.iacr.org/2019/985), is composed of three phases: society formation, disputes, and public key derivation. 

#### Our Proposal

Though a DKG scheme solves the problem of securely generating the keys, it still does not allow for a 'fully decentralizable' protocol. First is the issue of choosing which participants in the network are selected to act as dealers. If this set is centralized or static, then the network is more centralized and less secure. Secondly, assuming that through some mechanism that the set of participants in the DKG are randomly distributed among the available candidates, how can we be sure that the selected participants will be willing to participate in the DKG to begin with? Or if they do, how can we be sure that they will remain online so our secret can be reencrypted later? EthDKG solved this with smart contracts, but contracts provide limited capabilities.

We propose the consensus-backed blind DKG protocol. It enables a *blind* DKG process where participation is incentivized by rewards provided by the network, and shares are secured by the stake of each participant in the DKG protocol. We accomplish the 'blindness' of the protocol through the use of verifiable random functions in conjunction with zk SNARKs. The mechanisms allows for the formation of 'societies' whose members, each a validator, participated in the DKG process together. Our proposed implementation consists of a standalone 'Blind DKG' library that will compile to wasm, two new pallets to enable blind DKG and reencryption, and an SDK to interact with the blockchain, external storage systems, and a DSL to define smart contracts which act as rules which gate access to decryption.

##### What this is not
- The main protocol does not store information about encrypted datasets, it only provides keypairs and key management capabilities. Data encryption and decryption must still be handled outside of the main protocol, and in fact many different encryption schemes could be implemented on top of the derived keys. We will build encryption functionality alongside the core protocol, both from the SDK and the dkg library.
- This protocol is not a decentralized storage solution. The management and storage of data that is encrypted with keys generated this way must still be handled offchain. This protocol will attempt to be storage agnostic.

### Blind DKG Protocol

To begin, we describe the blind DKG algorithm. We interchangeabley use validator and participant in the description below. As previously stated, the sceme below closely follows EthDKG, with the change that blind DKG uses a VRF to choose which nodes are elgibile to participate. 

#### DKG

The core algorithm requires some input, a threshold and share values, to start the dkg. Validators then participate in a 'bidding' phase where they use a VRF to determine if they can participate in the DKG. For those that participate, the ultimate goal is to collectively derive a public key, owned by the caller. The idea is that this set of validators can be tasked with providing the shares that can be assembled to reconstruct the secret key, so that data can be encrypted and decrypted with the resulting keypair. The usage of the VRF forms the basis for the 'blindness' of our construction and also ensures that we are given a unique, (pseudo)randomly sampled public key for each round of blind DKG. At the end of each session, rewards will be calculated and distributed based on validators' participation and performance during the session. The values for $\tau$ and $\epsilon$ are to be determined, but will be well known among all validators.

As an aside: The idea of validators being able to participate in a VSS scheme has been used in [HoneyBadgerBFT](https://eprint.iacr.org/2016/199.pdf) previously, so we may want to explore atomic broadcast in the future. 

1. Some participant issues a request to derive a new secret society by issuing $(t, n, g, h)$, the threshold, number of shares, and group generators, respectively.
2. Each validator calculates the output of a VRF and commits to it. Let $(\pi, d)$ be the VRF output.
3. Using the commonly known values $\tau$ and $\epsilon$, and VRF output $d$, if $|\tau - d| \lt \epsilon$, then the validator can consider itself as a valid and begins to participate in the DKG process by generating a secret share, as well as a secret polynomial, commitment to that poly.
4. Participants publish their proof and vrf output $(\pi, d)$, proving that their VRF output makes them a valid participant in the round of dkg, along with commitments to the polynomial, a calculated public key share $g^{f(0)}$, and a proof of correctness of the public key share calculation. 
5. When another node *publicly* announces its ability to participate and commits to its poly (i.e. step (3)), then encrypt a secret key share for that identity using its published public key and publish it onchain along with its proper commitment. The encryption scheme used here is TBD, though looking at El Gamal.
6. The validators dispute invalid shares. This is elaborated on [here](#disputes-phase).
7. If a threshold of session validators participate honestly, then a public key can be calculated, as discussed [here](#key-derivation)
 

<p align="center">

 <img src="https://github.com/ideal-lab5/Grants-Program/blob/dkg/static/img/spk.png?raw=true" alt="Secret Society high-level overview"/>
</p>

#### Disputes Phase

The disputes phase occurs after each validator submits its encrypted shares and commitments to the network. If an adversary issues an invalid share, then honest participants should issue a dispute against it in order to remove it from the rest of the protocol and to slash that adversary. In order to ensure an adversary cannot falsely dispute the validity of a share, we place the burden of proving invalidity onto the party issuing a dispute. This is accomplished by using zk SNARKs. The phase is as follows:

1. Since each participant of the dkg agrees on the same group generator $g$, when a participants receives a share from another participants it can verify if it is a valid share through a simple calculation. Each validator verifies each share it recieves. If a share is valid, then there is no dispute.
2. If a share is invalid, then prepare a (zk) proof of correctness of their calculation that the share is invalid and publish it.
3. If a threshold $t+1$ of participants verify the proof, then the share is rejected from the protocol. Here, the identity of the validator who provided a bad share can be publicly announced.

At the end of this, if any validator submitted an invalid share we consider them an adversary, and their stake will be slashed.

#### Key Derivation

To derive keys, we use a new group generator $h$ to ensure a uniform distribution of public key shares. We will assume that this value is common knowledge to all participants and provided by the initator of the dkg. Each member of a society generates a public key by calculating $h^s$ for their secret share $s$. Each member also prepares a proof that they calculated their share correctly. For this, we will use a zk proof, possibly using the DLEQ as in EthDKG, or groth16 as in the disputes phase (though DLEQ could be used there as well). When deriving a public key, it can derived so that only shares for which valid proofs were provided are included in the calculation, ensuring it is a valid key.

#### Encryption and Decryption using Derived Keys

Initially, we plan on using El Gamal for encryption and decryption. The encryption scheme will be over the same curve as the DKG, so that during the encryption phase the encrypting party only needs to use the derived public key as any normal public key. To decrypt however, we need to reconstruct the private key. To do so, we need to calculate the sum of the secret shares. This might sound difficult: if only a threshold of participants are available, we still don't have enough information to construct the private key (since it is the sum of ALL shares)! But that's where the magic of the DKG comes in play. Since we used a DKG to generate the keys, the entire secret can be recovered by any threshold of collaborating participants! So as long as a threshold is honest and online, we can always reconstruct the secret key.

<p align="center">
 <img src="https://github.com/ideal-lab5/Grants-Program/blob/dkg/static/img/dkg_enc.png?raw=true" alt="encryption"/>
</p>

#### Non-interactive Secret Sharing

We intend to enable non-interactive secret sharing using rules defined in smart contracts which can delegate decryption rights. The idea we propose is the same as was developed for the [iris](https://github.com/w3f/Grants-Program/blob/master/applications/iris_followup.md) proposal. The general idea is that the owner of some distributed key can define a contract that can verify if any given caller should be authorized to get a calculate a decryption key. If the contract determines they can, then the caller should receive shares from the society. Ideally, we would like to perform this in a cryptographically verifiable way, where we do not need to trust that the society is properly economically incentivized to behave correctly, however that will require more research. For now, we intend to develop simple "rule" contracts which can be aggregated in a "rule executor" contract, which can act as a gate to data. The network will incentivize members of the society to only deliver shares as determined by the contract.

#### Proposed Architecture

##### Libraries/Tech Stack

- Languages: rust, typescript/javascript
- Frameworks/Libs: substrate + tools (e.g. ink!, zombienet, telemetry), arkworks-rs for algebra and zk SNARKs.
- We will use [tarpaulin](https://github.com/xd009642/tarpaulin) for test coverage of our new pallets and dkg library.

##### DKG Library

This is a standalone library that contains the code for the core DKG and VSS protocol. We plan on building this using arkworks-rs. This library will enable the Blind DKG protocol as detailed above. It will provide functionality to:

- generate secret polynomials, calculate shares and commitments
- verify key shares and prepare proofs of correctness of invalidity calculations
- encrypt and decrypt key shares using the curve used by the dkg 
- encrypt plaintext using El Gamal (wasm)
- restructure a secret key and decrypt ciphertext via el gamal (wasm)

We will make the implementation generic, though in practice we will probably use BLS12-377 or BLS12-381. 

The library will also compile to wasm. Additionally, we would like to use the curves defined in the [ark-substrate](https://github.com/paritytech/ark-substrate) library.

##### Pallets

These pallets may rely on other pallets that already exist in FRAME, which we don't mention here. (e.g. Grandpa, Babe, Balance, Timestamp, Assets, Contracts, etc.). The names and structure in the actual implementation may differ.

###### Election Provider

We will implement an election provider, similar to [election-provider-multi-phase](https://github.com/paritytech/substrate/tree/master/frame/election-provider-multi-phase), to facilitate VFR calculation, keygen, and the disputes process. The election provider operates in two phases, a signed phase and an unsigned phase, where the unsigned phase happens offchain and only allows validators to participate. The signed phase ends when the `elect` extrinsic is called. 

```
                                                                    elect()
                 +   <--T::SignedPhase-->  +  <--T::UnsignedPhase-->   +
   +-------------------------------------------------------------------+
    Phase::Off   +       Phase::Signed     +      Phase::Unsigned      +
```
During our signed phase, validators calculate the output of their VRF, secret polynomial, etc, and submit a commitment to it onchain. During the unsigned phase, the disputes process occurs where each participant calculates the validity of shares and prepares proofs of correctness offchain.

The signed phase lasts an entire session, during which requests to generate keys can be submitted, queued, and bid upon by validators. The unsigned phase, where shares are verified and proofs are generated, will run offchain and we do not know how many blocks this will take, though we will assume within some reasonable threshold. If that threshold is surpassed, or if the elect() function fails, then we will delegate to an emergency fallback, where keys that could be created are created and those that could not are refunded.

###### DKG  Pallet

The DKG pallet will be responsible for coordinating and performing rounds of blind DKG. It does this by managing multiple rounds of elections simultaneously.

This pallet will take a lot of inspiration from the substrate [staking pallet](https://github.com/paritytech/substrate/blob/master/frame/staking/README.md). The functionality of this pallet is not consensus-critical and is only available to members of the active validator set. This pallet has two main responsibilities:

1. It allows validators to declare themselves as potential 'custodians' for secret key shares. Based on their stake, each validator is allowed to participate in some to-be-determined maximum number of unique societies at any given time. 
2. It manages and coordinates the phases of multiple elections simultaneously. 

**Config**
- `ElectionProvider`: The election provider as detailed above. The signed phase starts the first block after a request has been issued to start the DKG, followed by the unsigned phas as detailed above.

**Runtime Storage**
Generally, runtime storage in this pallet is used to track the participation of validators in the blind dkg within any session. It also stored information about current and historical elections.
- `ActiveCustodians`: The active validators who have declared themselves as custodians
- `InactiveCustodians`: The inactive validators who have declared themselves as custodians
- `RequeuestQueue`: The queue to which accounts can publich dkg requests
- `ActiveDKG`: Tracks the active rounds of blind dkg (i.e. the election phases)
- `HistoricDKG`: Tracks historic rounds of blind dkg, up to a number of blocks.

**Extrinsics**
Callable by validators 
- `declare(signed_origin)`: A validator can declare itself as a potential custodian
- `revoke(signed_origin)`: Revoke your custodianship and forfeit your keys
- `commit(signed_origin, election_id, vrf_proof, vrf_out, poly_commitment)`: Callable during the signed phase, allows a validator to submit their vrf output, proof, and commitment to a secret polynomial. The election_id will be some type of identifier, tying this to a specific instance of the election.
- `prove_invalidity(unsigned_origin, signed_payload(proof of correctness))`: This function is callable by a validator's offchain worker. It allows a validator to submit the proof of correctness required for the disputes process.
- `publish_shares(signed_origin, map(public_key -> encrypted_share))`: This function lets validators publish shares intended to be decrypted by a particular recipient. Here, we assume that the recipient `public_key` refers to the public key derived by a member of the society.

Public
- `request_dkg(signed_origin, t, n, g, h, reserve_balance)`: request to start the DKG process, essentially synonymous with starting the signed phase of the election. t is the threshold, n is the number of shares, g and h are distinct group generators, and reserve_balance is a locked amount of native tokens the caller has locked to pay for the dkg.

Root
- `set_election_params(signed_origin, params)`: Set any parameters related to the elections as needed.
- `set_max_custodians(signed_origin, u32)`: Set the maximum number of active and inactive custodians

Additionally, this pallet will handle the reward calculation and distribution based on the `reserved_balance` used to request the DKG and the performance of the participants in the DKG. We will implement our pallet so that it is generic in this regard, however, in practice, our reward mechanism will be quite simple. Without going in depth on the inflation and economics of the blockchain, our scheme will *loosely* be as follows:

1. Each validator will be able to charge a transaction fee, probably static across all validators to begin but made more dynamic in the future
2. When the dkg is triggered, the caller reserves $n * fee$ tokens.
3. After a key is derived, each participant receives the $fee$ amount if they participated honestly and contributed to deriving the pubkey.
4. If some validators' shares were rejected through the disputes process, the fee is refunded to the caller. If a threshold of validators issue invalid shares, then then entire reserve balance is returned to the caller.
5. Dishonest participants will have their stake slashed by some percentage of their stake.

###### SNFT Pallet

This pallet enables the onchain representation of public keys derived through blind DKG.

We use an approach similar to a [DID](https://www.w3.org/TR/did-core/) to allow the public keys created as part of the derivation phase of the VSS as unique, ownable, usable onchain entities. We could also consider this as some special kind of NFT, so we call it an SNFT (s for secret). The owner of the public key is able to request a decryption key at any time. Further, this pallet will allow the owner, or an authorized proxy, to temporarily (or permanently) provision access to other addreseses to request key shares from the network (like temorary delegate for a DID).

**Runtime Storage**

- `OwnerOf`: Track the owner of any given public key
- `AttributeOf`: Track the attributes of any given public key
- `DelegatesOf`: Track the delegates of any given public key
- `ProxyOf`: Track the proxy of any given public key

**Extrinsics**
- `create(signed_origin, owner, public_key)`: Should be triggered as output of the DKG's key derivation phase, creating a link between the owner and the derived pubkey.
- `add/revoke_attributes(signed_origin, public_key, attribute)`: add or revoke attributes to an owned public key (e.g. )
- `add/revoke_delegate(signed_origin, public_key, delegate)`: add or revoke a delegate. A delegate is some other account that you can give temporary or permananent access to.
- `add/revoke_proxy(signed_origin, public_key, proxy)`: add or revoke a proxy. A proxy is some other address, usually a smart contract, who the owner will authorize as being able to manage delegated users.
- `execute(signed_origin, public_key, ephem_pubkey)`: Callable by the owner or any active delegate, submits a request to the network to recover secret key shares for the caller. The share will be encrypted using the `ephem_pubkey` and El Gamal.

root
These functions exists since we will use BoundedVecs in our storage maps.
- `set_max_delegates`: Set the maximum number of delegates per key at any time
- `set_max_attributes`: Set the max number of attributes 
- `set_max_pubkeys`: Set the maximum nmumber of public keys that any given account can own

###### SDK

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

From a user-centric perspective, the basic vision for the architecture needed to build a dapp on cryptex might look something like this.

<p align="center">
 <img src="https://github.com/ideal-lab5/Grants-Program/blob/dkg/static/img/high_level_cryptex_user_centered.drawio.png?raw=true" alt="SDK interactions overview"/>
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
  - [EthDKG](https://github.com/PhilippSchindler/EthDKG): Our protocol uses the same DKG scheme as ethDKG, though we use a different SNARK system and have several other distinctions (e.g. consensus-backed security for secret shares).
  - [Share](https://share.formless.xyz/): which appears to use some type of threshold encryption but does not go into major detail (and which has dubious scalability)
  - [Lit Protocol](https://litprotocol.com/): We share many similarities with this protocol as it is built on the same underlying technology, using DKG and TSS. However, lit only enables on layer of TSS, similar to our 'session public key'. Additionally, it does not use zk SNARKs or other privacy preserving tools. I believe that Lit would not scale well, whereas this protocol does. 

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

I am an engineer and math-lover with a passion for exploring new ideas. I studied mathematics at the University of Wisconsin and subsequently went to work at [Fannie Mae](https://en.wikipedia.org/wiki/Fannie_Mae) and then [Capital One](https://en.wikipedia.org/wiki/Capital_One), where I mainly worked on fintech products, like systems for loan servicing and efficient pricing algorithms. For the previous year and a half, I've been working exclusively in the web3 space, including having worked on two web3 foundation grants [here](https://github.com/w3f/Grants-Program/blob/master/applications/iris.md) and [here](https://github.com/w3f/Grants-Program/blob/master/applications/iris_followup.md). Beyond that, I have dabbled in many open source projects as well as have built several of my own, ranging from computer vision, machine learning, to blockchains and IoT.  Most recently, I attended the Polkadot Blockchain Academy in Buenos Aires, and this new proposal is an application of ideas I learned there applied to my previous grant.

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
  - our main dkg protocol is inspired by [EthDKG](https://eprint.iacr.org/2019/985).
  - the idea of the validator set participating in the reencryption of shares is inspired by [Honeybadger BFT](https://eprint.iacr.org/2016/199.pdf). Our network does not achieve atomic broacast at this time, but it is a future avenue we would like to explore. 
  - The VRF we use is the same as in [Babe](https://research.web3.foundation/en/latest/polkadot/block-production/Babe.html).
  - [Some further reading on VSS and DKG protocols](https://eprint.iacr.org/2012/377.pdf)
- links to your research diary, blog posts, articles, forum discussions or open GitHub issues,
  - I have already started a PoC to implement and simulate the blind dkg protocol here: https://github.com/driemworks/dkg
  - I have started on a whitepaper. [The draft can be found here](https://drive.google.com/file/d/1iouXfgJ7mMpwtfJrFTuaNnhy3R8oATPz/view?usp=sharing). We plan to complete it during the duration of this grant.
  - This work builds on the previous work done by Tony in his Iris project (see previous w3f grants).
  - We have started a substack to explain the protocol and document its development. Part 1 is published here: https://ideallabs.substack.com/p/blind-dkg-part-1
  - While doing research for this proposal we uncovered we previously done by [protocol labs](https://research.protocol.ai/blog/2022/a-deep-dive-into-dkg-chain-of-snarks-and-arkworks/) on a deep dive of an implementation of a dkg within a SNARK using arkworks. Though it doesn't mirror our protocol, we see this as evidence for the feasibility of using arkworks for a DKG.
- references to conversations you might have had related to this project with anyone from the Web3 Foundation
  - We have spoken with several individuals involved with the grants program and with square one, specifically Coleman Maher and Nico Morgan, in a non-technical capacity, to discuss the high-level idea and potential. 
  - During an evaluation of the Iris grant, I spoke with the evaluator Diogo and he expressed scepticism around the security of the approach taken in Iris. While attending the PBA, after discussing ideas related to secret sharing schemes with instructors and  engineers from Parity and web3 foundation, I was able to reimagine the secret sharing implemented in Iris and redesign the system in order to fix the vulnerabilities inherent in the approach. I have already shared the draft whitepaper with some folks at web3 as well, though we haven't had a formal review of it.

## Development Roadmap :nut_and_bolt:

The general flow of our milestones are a two-pronged approach. In each milestone, we intend to develop the SDK capabilities as well as Blind DKG libary/runtime in parallel. We will also adhere to strict test coverage (>= 80%) and documentation requirements.

### Overview

- **Total Estimated Duration:** 24 weeks
- **Full-Time Equivalent (FTE):**  2.5 FTE
- **Total Costs:** 72,000 USD

### Milestone 1 — Simplified Blind DKG

- **Estimated duration:** 6 weeks
- **FTE:**  2.5
- **Costs:** 18,000 USD

Goals:
- DKG/VSS Library development and testing
- Simplified blind dkg (assumes all honest participants), including election module and dkg pallet
- Beginnings of SDK: encryption, decryption, IPFS interactions, wasm calls
-- 
- No disputes phase, no zk snarks


| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | GPLv3 |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an **article**/workshop that explains [...] (what was done/achieved as part of the grant). (Content, language and medium should reflect your target audience described above.) |
| 1. | (2 weeks) Library: DKG | We implement and test a DKG protocol implemented with arkworks. The first version of the library will have abilities to generate a key/poly, commit to it, and to encrypt and decrypt secret shares using el gamal. This will be the main library we integrate into our runtime to enable the dkg. We will experiment with a few potential curves, most likely BLS12-381 and BLS12-377. |
| 2. | (3 weeks) Substrate Module: Election Module| We implement a simplified version of blind DKG within a new election module. This simplified version will do nothing during the unsigned (offchain) phase, and for the initial phase we assume all honest participants (so no verification, no disputes) and we do not yet use zk snarks. |
| 3. | (3 weeks) Substrate module: DKG Pallet | We build a simplified version of the [DKG pallet](#dkg-pallet). In this iteration, we do not include the function to issue disputes, only `declare`, `revoke`, `commit`, `publish_shares`, and `request_dkg` functions will be implemented. |
| 4. | (3 weeks but done in parallel) SDK: Storage Interface, Encryption | Setup encryption and decryption capabilities and setup capabilities to interact with IPFS to add/read data. We will use a wasm call to call the dkg library in order to reassemble secret keys and decrypt data. |

### Milestone 2 - Secret Sharing
- **Estimated Duration:** 6 weeks
- **FTE:**  2.5
- **Costs:** 18,000 USD

Goals:
- to enable secret sharing within the network
  - have onchain representation of ownership of public keys
  - be able to delegate decryption rights to other accounts
  - be able to use ownership to request key shares from the society
- at the end of this milestone, we will have a simple version of a secret sharing scheme, without disputes or privacy and without any rule-based access models defined.

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | GPLv3 |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an **article**/workshop that explains [...] (what was done/achieved as part of the grant). (Content, language and medium should reflect your target audience described above.) |
| 1 .| (2 weeks) Substrate Module: SNFT Pallet | We build the [SNFT pallet](#snft-pallet) as detailed above. We integrate this with the DKG pallet in order to create an entry in this pallet when the dkg executes successfully. We also implement functionality to request secret shares from the owning society. | 
| 2. | (2 weeks) Substrate Module: DKG Pallet | We add functionality that allows validators to respond to requests for shares and reencrypt them for an owner or delegate. We will use the same `publish_shares` function that will have been developed as part of M1 in order to encode encrypted shares onchain. |
| 3. | (2 weeks) SDK: VSS Module | We build functionality to decrypt the encrypted shares (this is same encrypted from milestone 1) and to reassemble a secret key from shares in the browser by making a wasm call to the DKG library delivered in the previous milestone. We also develop functionality to interact with the new extrinsics, to request to start the dkg or request reencryption, and to query information related to the blockchain state (i.e. which keys you own). |

### Milestone 3 - zkSNARKs and Disputes
- **Estimated Duration:** 6 weeks
- **FTE:**  2.5
- **Costs:** 18,000 USD

Goals:
- implement the disputes phase
- use zk SNARKs to encode the proof of correctness of disputed shares
- implement economic incentives to participate honestly in DKG (slashing + rewarding)

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | GPLv3 |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an **article**/workshop that explains [...] (what was done/achieved as part of the grant). (Content, language and medium should reflect your target audience described above.) |
| 1. | (3 weeks) Library: DKG | We implement functionality to verify/unverify secret key shares. We will use [groth16](https://github.com/arkworks-rs/groth16) to prepare a zero knowlede proofs of correctness of invalidity calculations. We integrate this within our runtime, as well as functionality to verify proofs. |
| 2. | (3 weeks) Substrate module: Election module and DKG Pallet: Disputes Phase and Slashing | We implement the disputes phase as detailed [here](#disputes-phase). We integrate the changes made as part of (1) in order to verify shares and construct proofs of their invalidity that can be shared with the network. We do this using the arkworks [r1cs library](https://github.com/arkworks-rs/r1cs-std). |
| 3. | (2 weeks) Substrate Module: DKG Pallet: Slashes and Rewards | We implement slash and reward mechanisms at the end of each round of blind DKG. This is intended to incentivize validators to participate in the dkg honestly. | 

### Milestone 4 - DSL, Decryption Delegation, and Demonstration
- **Estimated Duration:** 6 weeks
- **FTE:**  2.5
- **Costs:** 18,000 USD

Goals:
- enable secret sharing in the network by:
  - building onchain ownerhsip model for public key
  - enabling a rule based system to determine if an address can decrypt data
  - develop and test a set of contracts to act as a base rule set
- develop tools to define and deploy these rules using a DSL
- showcase features and capabilities of everything developed thus far by building a dapp

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | GPLv3 |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an **article**/workshop that explains [...] (what was done/achieved as part of the grant). (Content, language and medium should reflect your target audience described above.) |
| 1 .| (1 weeks) Contracts, Assets and Chain Extensions | We add the contracts and assets pallet to our runtime and expose a chain extension to read the state of the asset balance in a contract. This will power our initial use case, where data access is gated by ownership of an asset. Additionally, we build a chain extension that can be called by contracts in order to delegate decryption rights in the SNFT pallet. | 
| 2. | (2 weeks) Contracts | We will work off of the contracts [here](https://github.com/ideal-lab5/contracts) developed as part of Iris. We will developed contracts that: gates data based on specific identieis, based on ownership of an asset, as well as deliver the template/traits needed to implement custom rules. |
| 3. | (3 weeks) SDK: DSL | We design and implement the DSL module of our SDK and enhance the VSS Module in order to ensure smart contract support. This DSL module will allow users to design rules and deploy them as a contract, which can then be associated with their public key via the snft pallet. |
| 4. | (3 weeks) SDK: Generic Secret Sharing Dapp | The final task of the final milestone is to use everything that has been developed thus far and to build a dapp on top of it. Our inital dapp will be a simple secret sharing platform.  We will build an interface that lets users create secrets, store them, define rules for access, share secrets, etc. We want this experience to showcase the full feature set that we have developed. |

## Future Plans

Please include here
- Short term intentions include: completion, review, and publication of our whitepaper, building an online presence, releasing cryptex as a testnet, promoting the protocol and SDK, enhancements and continued development, etc.
- Long Term:
  - We would like to become a parathread or parachain on Polkadot (probably parathread initially), which makes the next point more interesting.
  - We would like to explore the usage of XCM in order to accomplish cross-chain 'data locks', wherein the proof of a condition on chain A (e.g. owning some specific asset on Ajuna) would equate to decyryption rights being granted in Cryptex.
  - We would like to explore enabling a threshold signature scheme using the derived keys.
  - We may investigate using an atomic broadcast approach, as in honeybadger BFT.
  - We would like to explore the usage of witness encryption within a blockchain. Some initial research has been done on this and it is a very promising concept, though a practical implementation would be very difficult at this point.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation Website / Medium / Twitter / Element / Announcement by another team / personal recommendation / etc.
- Tony initially heard about this a year ago via the substrate website. Collectively, we all learned about the grants program at the polkadot blockchain academy.

Here you can also add any additional information that you think is relevant to this application but isn't part of it already, such as:

- As stated previously, Tony has worked on two grants previous to this one. The items in this grant are very much inspired by the Iris grant, however, it is intended to fix all of the vulnerabilities and issues (i.e. lack of scalability) that Iris failed to do.
