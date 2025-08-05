# Decentralized Threshold Signature Service Implementation

- **Team Name:** Rui Morais
- **Payment Address:** 
    - FIAT (Sent by email to grants@web3.foundation on 09/08/2024, 16:07 UTC+1)
    - Polkadot: 14bBGQFAgKqdbGVDSWkm6dA8ZQzt9GxGSTALrD8SeafWW9gL
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Description :page_facing_up:

### General Overview

This project is a continuation of [this one](https://github.com/w3f/Grants-Program/pull/2250) and aims to build a decentralized threshold signing service leveraging the Olaf protocol. The service will operate off-chain, providing a secure and cost-effective alternative to on-chain threshold signature mechanisms within the Substrate/Kusama/Polkadot ecosystem.

### Technical Details

Each participant in the threshold signing group will run a browser-based application that performs decentralized key generation and signing operations through the Olaf threshold signature protocol, compiled to WebAssembly (WASM). The networking layer is built using JavaScript and `libp2p` for peer discovery and communication.

#### 🌐 Networking Layer (JavaScript)

##### Transport
- Peers connect to a relay server using WebSockets.

##### Discovery
- When a peer connects, it sends its Substrate/Polkadot/Kusama address to the relay server.
- The relay server assigns the peer a random `libp2p` Peer ID and stores the mapping:  
Address → Peer ID

- Peers can query the relay server with a known blockchain address to obtain the corresponding Peer ID.

##### Direct Peer Communication
- Once a Peer ID is obtained, the peer establishes a WebRTC connection using `libp2p`.
- All protocol messages are exchanged via this secure, direct P2P channel.

#### 🔐 Cryptographic Protocol (Rust → WASM)

The cryptographic logic is written in Rust and compiled to WebAssembly (WASM) for browser use.

##### Core Functionality
- Distributed Key Generation (DKG) to derive a shared threshold public key.
- Threshold Signing for signing Substrate/Kusama/Polkadot extrinsics.

##### State Management
- Key shares and protocol state are stored in browser-local storage (e.g., `IndexedDB`).

### Ecosystem Fit

This project is useful for any Substrate/Kusama/Polkadot based project that wants to use a secure off-chain decentralized threshold signature service that is cheaper than using the theshold signing funcionality of the network directly. 

### Related Projects

The most similar project we found is [this](https://github.com/nulltea/tss-libp2p), but it is out of date and unmantained. 

### Team members

- Rui Morais

### Contact

- **Contact Name:** Rui Morais
- **Contact Email:** ruipedromorais11@gmail.com
- **Github:** https://github.com/fiono11
- **Linkedin:** https://www.linkedin.com/rui-morais

### Team's experience

- Obtained a PhD in Computer Science with the thesis *"Contributions to Permissionless Decentralized Networks for Digital Currencies Based on Delegated Proof of Stake"* (awaiting for the defense).
- Published the following papers:
  - [Echidna: A New Consensus Algorithm for Efficient State Machine Replication](https://ieeexplore.ieee.org/document/10338927) (IEEE BCCA 2023)
  - [Nero: A Deterministic Leaderless Consensus Algorithm for DAG-Based Cryptocurrencies](https://www.mdpi.com/1999-4893/16/1/38) (Algorithms 2022)
  - [A tool for implementing privacy in Nano](https://ieeexplore.ieee.org/document/9126023) (IEEE DAPPS 2020)
  - [Adamastor: a New Low Latency and Scalable Decentralized Anonymous Payment System](https://arxiv.org/abs/2011.14159) (Arxiv)
- Has graduated the PBA Hong Kong cohort. 

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 3 months
- **Full-Time Equivalent (FTE):** 1 FTE
- **Total Costs:** 30,000 USD
- **DOT %:** 50%

### Milestone 1 - Peer Discovery via Blockchain Address

- **Estimated duration:** 1 month
- **FTE:** 1
- **Costs:** 10,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | GPLv3 |
| **0b.** | Documentation | We will provide **inline documentation** of the code. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| **1.a** | Peer Discovery via Blockchain Address | Two browsers connect to a relay server, register with a Substrate/Kusama/Polkadot address, discover each other, and exchange messages directly over WebRTC using `libp2p`. |

### Milestone 2 - Distributed Key Generation 

- **Estimated duration:** 1 month
- **FTE:** 1
- **Costs:** 10,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | GPLv3 |
| **0b.** | Documentation | We will provide **inline documentation** of the code. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| **1.a** | Distributed Key Generation | Two browsers exchange messages and successfully produce a shared threshold public key using the Olaf DKG protocol compiled to WASM. |

### Milestone 3 - Threshold Signature

- **Estimated duration:** 1 month
- **FTE:** 1
- **Costs:** 10,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | GPLv3 |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how the service can be used. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| **0e.** | Article | We will publish an **article**/workshop that explains how the service works under the hood and how it can be used from a user perspective. |
| **1.a** | Threshold Signature | Two browsers exchange messages and produce a valid threshold signature over a given Substrate/Kusama/Polkadot extrinsic using the Olaf protocol compiled to WASM. |

## Future Plans

Build a production-ready, secure Progressive Web App (PWA) that includes:
- Robust asynchronous peer-to-peer communication.
- Support for configurable t-out-of-n threshold schemes.
- Add proof of ownership to prevent address spoofing.
- Implement a network of relay servers to achieve full decentralization.
