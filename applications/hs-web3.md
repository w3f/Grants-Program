# Open Grant Proposal

> This document is referenced in the terms and conditions and therefore needs to contain all the required information. Don't remove any of the mandatory parts presented in bold letters or as headlines! See the [Open Grants Program Process](https://github.com/w3f/Open-Grants-Program/blob/master/README_2.md) on how to submit a proposal.

* **Project:** Haskell Web3 library
* **Proposer:** akru
* **Payment Address:** 18QrEJq9f1EL4f3DVsbxYnkJXgbhSF9XJ4 


## Project Description :page_facing_up: 

It's my personal project. It was started as Ethereum client library but recently I guess it could evolve into multi-platform client library including Polkadot / Substrate chains. Haskell is a powerful hight order functional programming language that provide industrial grade code safety because of very strict control of function side effects. For Polkadot ecosystem Haskell developers is couple of high skilled professionals that could make effective services and applications. This project reduce entry threshold and could be a good quick start for haskellers. 

## Team :busts_in_silhouette:

* **Members:** Aleksandr Krupenkin 
* **LinkedIn Profiles:** https://www.linkedin.com/in/krupenkin 
* **Code Repos:** https://github.com/airalab/hs-web3 
* **Website:**	https://hs-web3.readthedocs.io
* **Legal Structure:** individual 
* **Team's Experience:** Haskell Web3 library created on 2016. During development was fully implemented account abstractions, Solidity ABI codecs, JSON-RPC API and ECDSA cryptography.

## Development Roadmap :nut_and_bolt: 

* **Total Estimated Duration:** 16 weeks
* **Full-time equivalent (FTE):** 0.4
* **Total Costs:** 2.5 BTC 

### Milestone 1

* **Estimated Duration:** 3 weeks 
* **FTE:** 0.4 
* **Costs:** 0.5 BTC 


| Number | Deliverable | Specification | 
| ------------- | ------------- | ------------- |
| 1. | Substrate WebSocket RPC | Implement Substrate JSON-RPC methods described [here](https://github.com/paritytech/substrate/tree/master/client/rpc-api/src): `author`, `chain`, `state`, `system`.
| 2. | Substrate RPC documentations | Extend [Haskell Web3 documentation](https://hs-web3.readthedocs.io/) by implemented functions adding `Substrate RPC` section. |  
| 3. | Substrate RPC examples | Write simple examples into [repository](https://github.com/airalab/hs-web3). | 
| 4. | Docker image | Pack milestone results into docker image to make it's evaluation easy. |

### Milestone 2

* **Estimated Duration:** 6 weeks 
* **FTE:** 0.4 
* **Costs:** 1 BTC 

| Number | Deliverable | Specification | 
| ------------- | ------------- | ------------- |
| 1. | Haskell SCALE codec | Implement SCALE codecs for Haskell that required for correct Polkadot / Substrate client implementation. Codec should reference to [official documentation](https://substrate.dev/docs/en/conceptual/core/codec) and [Rust implementation](https://github.com/paritytech/parity-scale-codec). Codec should pass Rust test cases. | 
| 2. | SCALE codec documentation | Document implemented functionality and extend `hs-web3` documentation by adding `SCALE` codec section. | 
| 3. | Codec examples | Add examples of using codec into `hs-web3` repository. |
| 4. | Docker image | Pack milestone results (unit tests) into docker image to make it's evaluation easy. |

### Milestone 3

* **Estimated Duration:** 3 weeks 
* **FTE:** 0.4
* **Costs:** 0.5 BTC 

| Number | Deliverable | Specification | 
| ------------- | ------------- | ------------- |
| 1. | Runtime Metadata parsers | Implement structures and abstractions that helps to parse runtime metadata and make API decoration easy. | 
| 2. | Runtime `query` requests | Implement `read` type requests for the runtime. This methods should help developer to read data from Substrate-based blockchains. |
| 3. | Runtime `query` documentation | Document implemented functionality and extend `hs-web3` documentation by adding `Substrate query` section. | 
| 4. | Runtime interaction examples | Add examples of using API queries into `hs-web3` repository. |
| 5. | Docker image | Pack milestone results (unit tests) into docker image to make it's evaluation easy. |

### Milestone 4

* **Estimated Duration:** 3 weeks 
* **FTE:** 0.4
* **Costs:** 0.5 BTC 

| Number | Deliverable | Specification | 
| ------------- | ------------- | ------------- |
| 1. | Extrinsic abstractions | Implement structures and abstractions that makes extrinsics operations (serialize/deserialize, sign, send). |
| 2. | Extrinsic signers | Use ECDSA and Ed25519 cryptography libraries for signing extrinsics. (Unfortunately Sr25519 unavaliable for Haskell, it could be an idea for another grant.) |
| 3. | Transactions | Using Metadata and Extrinsics to make transactions into Substrate-based blockchains.
| 4. | API `tx` documentation | Document implemented functionality and extend `hs-web3` documentation by adding `Transactions` section. | 
| 5. | Runtime transaction examples | Add examples of using `tx` module into `hs-web3` repository. |
| 6. | Docker image | Pack milestone results (unit tests) into docker image to make it's evaluation easy. |

