# Alternative Polkadot Host Implementation

* **Status:** Open
* **Proposer:** [Noc2](https://github.com/Noc2)

## Project Description :page_facing_up: 

The architecture of Polkadot can be divided into two different parts, the Polkadot runtime and the Polkadot host. The Polkadot runtime is the core state transition logic of the chain and can be upgraded over the course of time and without the need for a hard fork. In comparison, the Polkadot host is the environment in which the runtime executes and is expected to remain stable and mostly static over the lifetime of Polkadot.

The Polkadot host interacts with the Polkadot runtime in limited, and well-specified ways. For this reason, implementation teams can build an alternative implementation of the Polkadot host while treating the Polkadot runtime as a black box. For more details of the interactions between the host and the runtime, please [see the specification](https://github.com/w3f/polkadot-spec/).

**The Web3 Foundation is interested in supporting additional implementations of the Polkadot Host. If you are interested in this RFP, please reach out to spec@web3.foundation.**

Currently the following implementations are under development: 

- [Gossamer: A Go implementation of the Polkadot Host](https://github.com/ChainSafe/gossamer) 
- [Kagome - C++ implementation of Polkadot Host](https://github.com/soramitsu/kagome)
- [Polkadot Node Implementation in Rust](https://github.com/paritytech/polkadot)
- [Smoldot - A Lightweight Substrate and Polkadot client in Rust](https://github.com/paritytech/smoldot)

## Deliverables :nut_and_bolt:

For Polkadot Host Implementations, it’s probably too complex to structure the entire implementation via milestones. Components of the Polkadot host are:

- Networking components such as Libp2p that facilitates network interactions.
- State storage and the storage trie along with the database layer.
- Consensus engine for GRANDPA and BABE.
- Wasm interpreter and virtual machine.
- Low level primitives for a blockchain, such as cryptographic primitives like hash functions.
- Availability & Validity components to support parachains. 