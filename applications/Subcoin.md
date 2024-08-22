# Subcoin

- **Team Name:** Individual
- **Payment Address:** 12uXLCZZkprwRBhfmhTXdfQE8faQwgNpS76wwmnEbgDwWB9e (USDT)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

### Overview

This project aims to develop a prototype of a Bitcoin full node in Rust using the Substrate framework. The goal is to create a node capable of synchronizing the Bitcoin network from its genesis to the latest tip, utilizing the light state sync strategy provided by Substrate. This feature is currently missing in the existing Bitcoin software.

**Relevance to Substrate & Polkadot**

This project showcases the versatility of Substrate as a leading blockchain development framework. With Substrate, small teams and even individuals can create production-level blockchain software efficiently. Developers within the Substrate/Polkadot ecosystem, particularly those interested in Bitcoin-related applications, stand to benefit from the tools and insights produced by this project. Specifically, the Bitcoin bridge projects can integrate the subcoin-network into their nodes to talk to the Bitcoin network directly instead of relying on the external relayers which are suffered from the single point of failure practically.

**Motivation**

Despite the availability of various Bitcoin client implementations in different languages, there is currently no Substrate-based Bitcoin client. Additionally, majority of the previous attempts to build one in Rust have faced challenges and limitations. One key factor contributing to their shortcomings is the lack of essential libraries like rust-bitcoin and comprehensive blockchain development frameworks like Substrate. However, with the emergence of these tools, there's renewed potential to develop a high-quality, production-ready Rust-based Bitcoin client within the Substrate ecosystem.

I’m personally planning on some ideas on Bitcoin. This project may be a good starting point for exploring innovative ideas and advancements within the Bitcoin ecosystem.

### Project Details

**Key Deliverables**

- crate `pallet-bitcoin`: This crate implements the core logic of Bitcoin protocol, handling the transaction processing and UTXO set management.
- crate `subcoin-runtime`: A lean Bitcoin specialized Substrate runtime integrating only two pallets frame-system and pallet-bitcoin.
- crate `sc-consensus-nakamoto`: This crate offers an import queue for Bitcoin block import and full block verification.
- crate `subcoin-network`: This crate is responsible for basic Bitcoin P2P network functionalities, facilitating initial block download from other nodes.
- crate `subcoin-node`: This crate orchestrates the integration of all components mentioned above, providing a binary `subcoin` for running a fully functional Bitcoin node.

**Non-Goals**

This application does not aim to replicate the full feature set of a comprehensive Bitcoin client like **`bitcoind`**. As such, functionalities such as wallet management, mining, and mempool operations are outside the scope of this project, which are expected to be pursued in the future.

### Ecosystem Fit

The impact of this project extends beyond the Substrate and Polkadot ecosystems, contributing to the diversity of Bitcoin protocol implementation within the broader blockchain landscape.

## Team :busts_in_silhouette:

### Team members

- Name of team leader: Liu-Cheng Xu

### Contact

- **Contact Name:** Liu-Cheng Xu
- **Contact Email:** [xuliuchengxlc@gmail.com](mailto:xuliuchengxlc@gmail.com)
- **Website:** https://github.com/liuchengxu

### Legal Structure

- Individual

### Team's experience

- Liu-Cheng Xu
    
    He is a seasoned protocol-level blockchain engineer with extensive experience with the Substrate framework. He was the core developer and subsequent tech lead of ChainX project from 2018 to 2021. Post-ChainX, he embarked on a venture with the permanent storage project Canyon and received the grant [canyon_network](https://github.com/w3f/Grants-Program/blob/df34fc617c88346411319b4293db5eb9cb2769b9/applications/canyon_network.md) for implementing the Proof Of Access consensus with the Substrate ecosystem. Due to regulatory changes in his country, Canyon was discontinued. He later transitioned to Subspace Labs as the lead protocol engineer, spearheading the execution layer development in Subspace's modular solution from 2021 to 2023.
    

### Team Code Repos

- https://github.com/subcoin-project/subcoin
- https://github.com/liuchengxu

### Team LinkedIn Profiles (if available)

- https://www.linkedin.com/in/liucheng-xu-2a639b116/

## Development Status :open_book:

A preliminary prototype of a Bitcoin node has been developed, featuring the capability to import Bitcoin blocks directly from the `bitcoind` database. A document [Design Notes](https://www.notion.so/915ff68a2b3c43b1ac37048c88d551ed?pvs=21) has been compiled to outline implementation considerations and provide guidance for ongoing development efforts

## Development Roadmap :nut_and_bolt:

### Overview

This project is planned as 3 milestones, completed in three months.

- **Total Estimated Duration:** 3 months
- **Full-Time Equivalent (FTE):** 1
- **Total Costs:** 30,000 USD

### Milestone 1

- **Estimated duration:** 1 month
- **FTE:** 1
- **Costs:** 10,000 USD

| Number | Deliverable | Specification |
| --- | --- | --- |
| 0a. | License | MIT |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can (for example) spin up one of our Substrate nodes, which will show how the new functionality works. |
| 0c. | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1. | `pallet-bitcoin` | This pallet is used to process the Bitcoin transaction and manage the state of the UTXO set. |
| 2. | `subcoin-runtime` | This is a minimal Substrate runtime specialized for Bitcoin, consisting of frame-system and pallet-bitcoin. |
| 3. | `sc-consensus-nakamoto` | This crate provides the function of importing Bitcoin blocks into the node, assuming the blocks have been checked. |
| 4. | `subcoin-node` | This crate will wire up the runtime and a Substate client with necessary components to build a Bitcoin node, which is able to import the Bitcoin blocks from the bitcoind database. |

### Milestone 2

- **Estimated duration:** 1 month
- **FTE:** 1
- **Costs:** 10,000 USD

| Number | Deliverable | Specification |
| --- | --- | --- |
| 0a. | License | MIT |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can (for example) spin up one of our Substrate nodes, which will show how the new functionality works. |
| 0c. | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1. | Block Verification | We will introduce the full bitcoin block verification in the block import pipeline, via libbitcoinconsensus and optional pure Rust implementation. |
| 2. | `bitcoin-network` | We will implement a basic Bitcoin networking, which can connect to other nodes in the Bitcoin peer-to-peer network and do the initial sync by downloading and processing every block in the history. |

### Milestone 3

- **Estimated duration:** 1 month
- **FTE:** 1
- **Costs:** 10,000 USD

| Number | Deliverable | Specification |
| --- | --- | --- |
| 0a. | License | MIT |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can (for example) spin up one of our Substrate nodes, which will show how the new functionality works. |
| 0c. | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. |	Article | We will publish an article that explains what was done/achieved as part of the grant. |
| 1. | Fast sync | A bootstrap node will be deployed to demonstrate that the new subcoin nodes can perform a fast sync from other subcoin nodes using the built-in advanced syncing strategy (e.g., light state sync) in Substrate. |
| 2 | Bitcoin Transaction Broadcasting | We will add an RPC call for broadcasting a Bitcoin transaction to the Bitcoin network from polkadot.js.org. |

## Future Plans

- Enhance support for various aspects of the Bitcoin protocol, including wallet functionalities, mining capabilities, and even the integration of BRC20 indexer.
- Seek funding opportunities to ensure sustainable long-term development and maintenance of the project.
- Foster a contributor-friendly environment and transition towards a community-driven project, encouraging active participation and collaboration from developers and enthusiasts alike.

## Referral Program (optional) :moneybag:

You can find more information about the program [here](https://www.notion.so/README.md#moneybag-referral-program).

- **Referrer:** -
- **Payment Address:** -

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Personal recommendation.
