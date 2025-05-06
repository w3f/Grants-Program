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

Each participant in the threshold signing group will run a dedicated node application. This application will include:

- Core Threshold Signing Protocol: The service will use the Olaf threshold signature protocol, which was implemented in the previous grant.

- Peer-to-peer networking via [`rust-libp2p`](https://github.com/libp2p/rust-libp2p) (Milestone 1):

    - Peer discovery: nodes will identify and discover each other through a Distributed Hash Table (DHT) that maps their Substrate/Polkadot/Kusama public addresses to their peer IDs.

    - Secure communication: [`libp2p_noise`](https://docs.rs/libp2p-noise/latest/libp2p_noise/) provides secure, authenticated channels between participating nodes for exchanging protocol messages.

- Integration of the Olaf protocol with the underlying network (Milestone 2), managing:
    - Distributed Key Generation (DKG) and signing rounds.

    - Local storage of key shares and protocol state.

- A Command Line Interface (Milestone 3) that allow users to:

    - Configure node settings (network addresses and peer IDs).
    
    - Configure protocol settings (threshold and number of participants).
    
    - Execute the Olaf protocol.

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

### Milestone 1 - Development of the Node

- **Estimated duration:** 1 month
- **FTE:** 1
- **Costs:** 10,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | GPLv3 |
| **0b.** | Documentation | We will provide **inline documentation** of the code. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| **1.a** | Development of the Node | Two peers running on different machines are able to discover each other through their Substrate/Kusama/Polkadot address, establish a connection, and exchange messages. |

### Milestone 2 - Integration of Olaf into the Node

- **Estimated duration:** 1 month
- **FTE:** 1
- **Costs:** 10,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | GPLv3 |
| **0b.** | Documentation | We will provide **inline documentation** of the code. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| **1.a** | Integration of Olaf into the Node | Two peers on different machines exchange messages and successfully produce a threshold signature using the Olaf protocol with hardcoded protocol parameters. |

### Milestone 3 - Decentralized Threshold Signature Service CLI

- **Estimated duration:** 1 month
- **FTE:** 1
- **Costs:** 10,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | GPLv3 |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how the service can be used. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| **1.a** | Decentralized Threshold Signature Service CLI | Two peers on different machines exchange messages and produce a threshold signature using the Olaf protocol with protocol parameters defined by user input from the CLI. |

## Future Plans

- Develop a webwallet for the user interface or integrate it in an established webwallet of the ecosystem, if there is interest.
