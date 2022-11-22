# Spartan: PoC Consensus Module

* **Team:** [Subspace Labs](https://www.subspace.network)
* **Payment Address:**: (DAI) 0xeF9da023c8FAF3F84E6b3F2A2A902B03e7E72E7D

## Project Overview :page_facing_up:

### Overview

#### Tagline: Proof-of-Capacity Consensus for Substrate

The key objective of this grant is to design and build a production ready substrate chain which employs _Spartan_, a simple proof-of-space consensus algorithm. Our long-term goal is to implement [Subspace](https://subspace.network), a new [Proof-of-Capacity (PoC) consensus blockchain](https://drive.google.com/file/d/1v847u_XeVf0SBz7Y7LEMXi72QfqirstL/view), in Substrate through a follow-up general grant. After careful analysis, we have determined that implementing the full plan for Subspace goes well-beyond the scope of an open grant. However, as any proof-of-replication is based on a proof-of-space, we can begin with the simpler task of implementing the more abstract notion of proof-of-capacity consensus. Based on our experience working with Substrate so far, implementing a novel consensus mechanism is non-trivial and requires a deep understanding of the internals of FRAME and Substrate. We would therefore like to take the time to do this right.

#### Relevance to Substrate & Polkadot

With respect to Substrate, existing consensus mechanisms include proof-of-authority (Aura), proof-of-stake (Babe), and proof-of-work (Kulupu). We would like to extend this with two more constructions: proof-of-space (Spartan) and (in a later grant) proof-of-storage (Subspace). Both of these are instances of a more general class of of proof-of-capacity protocols, which seek to replace "one-CPU-one-vote" with "one-disk-one-vote". Upon completion, this grant would serve to further demonstrate the flexibility of Substrate and FRAME for any abstract blockchain. Other teams seeking to implement slot-based PoC blockchains would also be able to re-use the core crates to reduce development time.  Note that any proof-of-replication implies an underlying proof-of-space. We therefore intend to begin with the much simpler task of implementing Subspace as a pure proof-of-space consensus protocol (Spartan) before extending it into a full proof-of-storage (or replication) protocol envisioned in our whitepaper.

#### Team Motivation

Ultimately we want to make it as easy possible for developers to build applications where users can have full control over their data. We believe blockchain-based decentralized applications reflect the best hope for this future, but have been disappointed with the sustainability, scalability, and fairness of existing options. We are building Subspace in an effort to remedy this gap, while making decentralized storage central to the design. With respect to this grant, our goal is to master the internals of Substrate so that we may leverage its rich ecosystem to create a solid foundation for our own chain, while providing an extensible set of interfaces that may be used to build any abstract proof-of-capacity blockchain.

### Project Details

#### Key Deliverables

1. A set of abstract crates for Proof-of-Capacity (PoC) consensus: `sp_consensus_PoC` and `sc_consensus_PoC`.
2. A proof-of-space consensus pallet, `pallet_spartan`, which implements these primitives using `sp_consensus_spartan` and `sc_consensus_spartan`.
3. An implementation of `substrate-node-template` which employs `pallet_spartan` to construct a PoC blockchain client.
4. A decoupled `farmer`, responsible for plotting and evaluating challenges, which connects to the client via the existing RPC.
5. A demonstration of a live test network, consisting of multiple nodes (farmer/client pairs), with variable sized plots and adaptive difficulty.
6. Extensions to `polkadot-js` which display the new relevant consensus information within the block explorer.

These crates and pallets will begin as forks of `sp_consensus_babe`, `sc_consensus_babe`, and `pallet_babe`. Spartan and Babe share the same notion of timeslots and epochs as expressed in Ouroboros Praos. The key differences are that Spartan has no notion of authorities (it is permissionless) while we may largely replace the VRF evaluation & verification with evaluation of the farmer’s plot and verification of the proof-of-space. Spartan and Subspace also have much in common, as they both use the same underlying SLOTH permutation, they have almost identical farmer implementations, and the consensus mechanisms are the same. The key difference is that Spartan is based on permuting a deterministic genesis piece with a nonce, while Subspace is based on permuting the actual blockchain history. This means that we can later extend Spartan consensus into Subspace consensus with minimal rework.

![Imgur](https://i.imgur.com/t9HRGdy.png)

![Imgur](https://i.imgur.com/AFdt7Sb.png)

#### User Interface

The UI will consist of a simple CLI for the farmer and client with relevant extensions to the Polkadot-js GUI.

![Imgur](https://i.imgur.com/jbgTaJQ.png)

##### `Spartan-Farmer`

This has a deliberately simple CLI with two commands: `plot` and `farm`.   The `plot` command allows the user to specify the plot size (in bytes), an optional storage path, and an optional seed for the private key. Plotting time depends on the hardware used but will take roughly 36 hours for a 1 TB plot using a standard quad-core machine. The plotter displays a progress bar showing percent complete and outputs some plotting statistics on completion. Once a plot has been created, the `farm` command may be used to connect to a client with an optional Web Socket address. The farmer will display relevant log messages during operation.

##### `Spartan-Client`

No new commands will be added to the client CLI, though we will add additional logging messages to reflect interaction with the farmer.

##### `Spartan-Browser`

No new commands will be added to the browser-based polkadot-js GUI, though we will modify the display of relevant consensus information.

#### Technology Stack

The farmer will be written in Rust. The CLI will be constructed using `clap`. Connection to the Substrate client will be mediated using `jsonrpsee`. The plot file itself will be written directly to disk using `async-std`. The binary search tree, used for evaluating the plot, will be built using `RocksDB`. All cryptographic primitives (signatures, hash functions, HMACs) will come from Substrate libraries. The SLOTH permutation is based on our own implementation of SLOTH using `rug`. The client will be based on the standard `substrate-node-template`. All consensus pallets will be based on `pallet_babe` and relevant slot based consensus crates. The browser GUI will extended from `polkadot-js` with all modification written in Typescript.

#### Proof-of-Concept (prior work)

An [initial implementation](https://github.com/subspace/subspace-core-rust) of Subspace was previously written in Rust, from scratch, without forking another chain. While we were able to get a rudimentary transactional blockchain working, which used proof-of-storage consensus, it quickly became clear that going from proof-of-concept to production ready (with all relevant tooling) was far beyond the capabilities of our team. We then learned about Substrate and began exploring the feasibility of porting over our work. This resulted in a [smoke test](https://github.com/subspace/substrate-stencil) of sorts, which showed that we could hack `pallet_babe` into `pallet_spartan`, connect to a `spartan-farmer`, and hook into the block production pipeline. The purpose of this grant is to take the lessons learned from writing our own implementation using this quick and dirty hack of babe, to create a production ready set of components which leverage the Rust trait system and the idiomatic FRAME methodology of decoupled crates and pallets, in order to build the foundation for a proof-of-capacity blockchain, which can leverage the full power of Substrate and provide a novel distributed storage solution for the Polkadot ecosystem.

#### Non-Goals

We must be very clear that we are not intending to implement the proof-of-storage consensus, distributed storage layer, or decoupled execution protocol as described in our technical whitepaper. Instead, this is only a stepping stone towards those goals. This will only implement a simple transactional blockchain powered by proof-of-space consensus. While we do intend for this implementation to be secure against all known attacks, we do not plan to launch Spartan as an actual production parachain or independent blockchain. Instead, this will only result in an initial test network for evaluation purposes.

### Ecosystem Fit

#### Background on Subspace

Subspace is a blockchain secured by free disk space. This space is used to store provably-unique replicas of the history of the blockchain itself. This is in contrast to blockchains like Burst, Mass, Chia, and Spacemesh, which employ consensus based on a useless proof-of-space of random data. Similar to Filecoin, we employ a useful proof-of-storage, or a proof-of-replication, but instead of storing off-chain user generated date, the data is the history of the blockchain itself, i.e., the block headers and transaction data, yielding a proof-of-history or a proof-of-archival-storage.

User generated data may still be retained by embedding it within a transaction, providing a permanent and immutable form of distributed storage, in contrast to the temporary and mutable distributed storage provided by Filecoin. This is most similar to the archival storage provided by Arweave. However, we base consensus entirely on disk space while ensuring many unique replicas of the blockchain are stored, whereas Arweave bases consensus on proof-of-work while only ensuring a single copy of the blockchain is retained (in the case of a single large mining pool). Since we can also estimate the amount of space pledged to the network by the average quality of the proofs-of-storage, and we know the size of the blockchain itself, we can then dynamically adjust the transaction fees to reflect the cost of storage. Unlike other networks, this allows for an efficient market for permanent distributed storage based on supply and demand.

Subspace has also been specifically designed to maintain the security, decentralization, and permissionless nature of Nakamoto consensus, as exemplified by blockchains such as Bitcoin and Ethereum. It retains safety and liveness, given that a majority of the space pledged to network is controlled by rational farmers. It also designed to overcome a series of subtle mechanism design challenges unique to proof-of-space/storage blockchains which we refer to as the farmer's dilemma. This allows Subspace to apply a variety of layer one scaling proposals to achieve high transaction throughput and low confirmation latency, without sacrificing the security or decentralization of the network.

#### Relevance to Polkadot

Subspace provides a scalable distributed storage layer for Polkadot, by allowing parachains to have a native, low-cost, and permanent storage option. Within the polkadot ecosystem, we are targeting other parachains and dApp developers on smart contract capable parachains. We are also exploring similar use-cases outside of the Polkadot ecosystem. Subspace can ensure the longevity and availability of data which is too expensive (i.e. by tx costs) to store on the source chain, or would negatively impact the decentralization of the chain (i.e., by increasing blockchain bloat).

We intend to eventually launch Subspace as a parachain on Polkadot. This will allow any other parachains within the Polkadot network to utilize Subspace for permanent distributed storage. In the extreme form, each parachain block could be backed-up on the Subspace network, allowing for higher levels of decentralization and permanent data availability (even if the parachain later ceases to exist). In the average case, a parachain could employ Subspace to retain data which is too large to store internally, either through the native runtime logic or by individual smart contracts. While the same functionality is theoretically possible with networks like Filecoin and Arweave, if Subspace is also a parachain, the cost of cross-chain communication would be much lower.  

Inside the Polkadot ecosystem, Crust Network is the only existing option for off-chain distributed storage. Crust resembles Filecoin in many ways, except that it uses a Trusted Execution Environment (TEE) in places of proofs-of-replication. This limits the storage capacity of the network to providers who have special purpose hardware, making it far less decentralized and more expensive. In contrast, Subspace allows anyone with free disk space and minimal computation to act as a storage provider, allowing it to scale to many orders of magnitude larger network storage capacity. Crust, like Filecoin, also provides temporary and mutable storage, whereas Subspace provides permanent and immutable storage, which is often more suitable for blockchain-based applications and smart contracts.

Outside of the Polkadot ecosystem there are several storage-based networks. At a high level Subspace provides both an alternative consensus mechanism (proofs-of-archival-storage) and a distributed storage network for arbitrary data. In the first case it builds on the work of blockchains such as Burst, Mass, Chia, and Spacemesh, while resolving the incentive challenges related to the farmer’s dilemma (described in our whitepaper), and is therefore much more suitable for scalability. In the second case, it provides a generic platform for distributed storage, similar to Sia, Storj, Filecoin, and Arweave. Our construction is closest to Arweave, but far more incentive-compatible since consensus is based entirely on proofs-of-storage, whereas Arweave is mainly secured by proof-of-work.

## Team :busts_in_silhouette:

### Team members

* Jeremiah Wagstaff (team leader)
* Nazar Mokrynskyi (lead engineer)

### Contact

* **Contact Name:** Jeremiah Wagstaff
* **Contact Email:** [jeremiah@subspace.network](mailto:jeremiah@subspace.network)
* **Website:** [www.subspace.network](https://www.subspace.network)

### Legal Structure

* **Registered Address:** 2320 Bowdoin Street, Palo Alto CA 94306
* **Registered Legal Entity:** Subspace Labs, Inc. (Delaware C-Corp)

### Team's experience

We each have three years experience designing and building blockchains and decentralized protocols at Subspace Labs. We also each have 1.5 years experience working with Rust. We recently completed 18 months of primary research for a National Science Foundation Small Business Innovation Research Grant (NSF-SBIR), which resulted in our technical whitepaper. Nazar is a full-stack engineer with over ten years experience working with PHP and Javascript and has contributed to numerous open-source projects. Jeremiah is an entrepreneur, blockchain researcher, and full-stack developer with over six years experience working in Python and Javascript.

### Team Code Repos

* [Nazar](https://github.com/nazar-pc?tab=repositories)
* [Jeremiah](https://github.com/rg3l3dr?tab=repositories)

### Team LinkedIn Profiles

* [Jeremiah](https://www.linkedin.com/in/jeremiah-wagstaff-483b5057/)
* [Nazar](https://www.linkedin.com/in/nazarpc/)

## Development Status :open_book:

* [Subspace Technical White Paper](https://drive.google.com/file/d/1v847u_XeVf0SBz7Y7LEMXi72QfqirstL/view)
* [subspace-core-rust](https://github.com/subspace/subspace-core-rust): Initial from-scratch, Rust implementation
* [substrate-spartan](https://github.com/subspace/substrate-stencil): Proof-of-Concept for Substrate client forked from Substrate-Stencil
* [spartan-farmer](https://github.com/subspace/spartan-farmer): A bare-bones farmer that connects to the substrate client
* [spartan](https://github.com/subspace/spartan): A shared primitive library for the underlying proof-of-space/replication.

## Development Roadmap :nut_and_bolt:

### Overview

* **Total Estimated Duration:** 12 weeks
* **Full-Time Equivalent (FTE):**  2 FTE
* **Total Costs:** 29,999 DAI

### Milestone 1 — Implement Local Development Chain

* **Estimated Duration:** 4 weeks
* **FTE:**  2
* **Costs:** 10,000 DAI

This milestone will allow for the operation of a local development chain, with a single substrate client connected to a single farmer. The farmer will be entirely decoupled, and connect over the existing RPC, though it will still be written in Rust and re-use shared primitives. The client will employ a set of consensus crates, based on modifications to `pallet_babe` and its dependencies. The blockchain will not have a finality gadget and will only support basic payment transactions.

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can spin up a Spartan farmer and client to create a local development chain. Once the node is up, it should produce blocks when the farmer presents a valid solution. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the documentation and blog post, we will describe how to run these tests. |
| 0d. | Article | We will publish a blog post that explains the architecture of Spartan as it relates to Substrate, how it can be used for any abstract slot-based, proof-of-space consensus protocol, and how to run a local development chain.
| 1. | Design Document | A detailed description of the architecture and interfaces for all FRAME pallets and modules that will be used to implement Spartan|
| 2. | `sp_consensus_PoC` | Abstract Proof-of-Capacity consensus primitives |
| 3. | `sc_consensus_PoC` | Client functionality for abstract Proof-of-Capacity consensus |
| 4. | `sp_consensus_spartan` | Spartan Proof-of-Space consensus primitives |
| 5. | `sc_consensus_spartan` | Client functionality for Spartan Proof-of-Space consensus |
| 6. | `pallet_spartan` | Full implementation of Spartan PoS consensus. This shall integrate with `substrate-node-template` and operate as a `spartan-client`|
| 7. | `spartan_farmer` | A decoupled farmer implementation which can plot, connect to `spartan-client` via RPC, and farm (solve challenges)|
| 8. | `spartan_client` | An implementation of `substrate-node-template` which runs under `pallet_spartan` consensus and connects to the `spartan-farmer`. |
| 9. | Docker | We will provide dockerfiles to demonstrate the full functionality that runs a local development chain with a single farmer. |

### Milestone 2 — Implement Test Network and Browser Client

* **Estimated Duration:** 4 weeks
* **FTE:**  2
* **Costs:** 10,000 DAI

This milestone will extend the local development chain into a test network. Full and light clients will be able to synchronize the chain state. Multiple nodes (client/farmer pairs) will be able to co-farm simultaneously, with an a adaptive work difficulty that adjusts based on the amount of disk space pledged to the network. The status of the network may be monitored from the block explorer within `polkadot-js`.

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License |  Apache 2.0 |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can spin up a Spartan farmer and client, connect to the client via the browser, and create a local test network.|
| 0c. | Testing Guide | Higher level functionality will be covered by integration tests. In the guide, we will describe how to run these tests. |
| 0d. | Article | We will publish a blog post that shows the Spartan testnet is live and how it can be benchmarked via the browser app.
| 1. | Full Client Sync | Client commits and an integration test which shows two full clients can sync with one another |
| 2. | Light Client Sync | Client commits and an integration test which shows a light client may sync with a full client. |
| 3. | Browser Client GUI updates | A set of extensions for Polkadot-JS which render relevant consensus & chain information in the browser. |
| 4. | Dynamic Solution Range | Client commits and an integration test, that demonstrate a dynamic solution range as farmers with different amounts of space join and leave. |
| 5. | Docker | We will provide a dockerfiles to spin up multiple nodes, create a local test network, and run all integration tests. |

### Milestone 3 — Implement Secure Testnet

* **Estimated Duration:** 4 Weeks
* **FTE:**  2
* **Costs:** 9,999 DAI

This milestone will extend naive consensus to be secure against all known attacks, as described in the technical whitepaper. Each attack will be analyzed through a security simulation, which will compare the operation of two nodes with slightly different implementations, or working off different branches of a fork, with different storage capacity.

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License |  Apache 2.0 |
| 0b. | Documentation | Each security simulation will include inline documentation describing the attack and how to interpret the results. |
| 0c. | Testing Guide | A different security simulation will be provided for each attack. In the guide, we will describe how to run these simulations and interpret the results. Note these simulations will not result in an objective test, but will instead show the probability that an attack might succeed or the amount of additional resources required to execute the attack. |
| 0d. | Article | We will publish a blog post that the describes the nature of each attack and how Spartan preforms.
| 1. | Safety test | Demonstrate the ability to retain safety less than 1/2 adversarial fraction of storage.|
| 2. | Liveness test | Demonstrate the ability to retain liveness less than 1/2 adversarial fraction of storage |
| 3. | Equivocation test | Extend and demonstrate that if a farmer equivocates, their plot will be burned. |
| 4. | Sybil resistance test | Extend and demonstrate that sybil plotting consumes more CPU for no advantage. |
| 5. | Compression attack test | Extend and demonstrate that the compression attack requires continuous plotting for a small constant advantage. |
| 6. | Simulation attack test | Extend and demonstrate that simulation provides a negligible advantage. |
| 7. | Docker | We will provide a dockerfiles to run all simulations. |

## Future Plans

### Short-term

* Apply to the Substrate Builders Program.
* Develop a formal proof-of-security for Subspace consensus.
* Close our seed fundraising round and build our our engineering and product teams.
* Begin an outreach program for storage farmers (supply-side) within the Polkadot user ecosystem.
* Begin a customer discovery process for storage use-cases (demand-side) within the Polkadot developer ecosystem.

### Long-term

#### Apply for a series of follow-on open grants to implement the protocol enhancements

* Open Grant 1: Implement the technical whitepaper
  * Spartan -> Subspace Consensus
  * Distributed Storage Network and Client SDK
  * Decoupled Execution Framework
* Open Grant 2: Implement the scalability proposals (based on forthcoming paper)
  * [Prism](https://arxiv.org/abs/1810.08092) Vertical Scaling
  * [Free2Shard](https://arxiv.org/abs/2005.09610) Horizontal Scaling
  * [TaiJi](https://arxiv.org/abs/2011.11097) Permissionless Finality Gadget

#### Continue on the road to mainnet launch

1. Launch a public testnet under Spartan Consensus.
2. Convert to an incentivized testnet under Subspace Consensus.
3. Convert to mainnet, as a Polkadot parachain.
