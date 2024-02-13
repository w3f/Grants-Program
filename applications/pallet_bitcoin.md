# pallet-bitcoin

- **Team Name:** Individual
- **Payment Address:** 12uXLCZZkprwRBhfmhTXdfQE8faQwgNpS76wwmnEbgDwWB9e (USDT)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 1

## Project Overview :page_facing_up:

### Overview

This project aims to provide a generic Bitcoin light client implementation in a Substrate pallet. This implementation will store Bitcoin block headers and enable trustless proof of BTC transaction inclusion. The focus is solely on Bitcoin consensus verification, allowing projects to build their specific business logic on top of this library.

**Relevance to Substrate & Polkadot**

This pallet serves as a vital component for any Substrate-based project that requires a Bitcoin light client. The library allows seamless integration, empowering Substrate projects to incorporate on-chain BTC light clients effortlessly. The modular design ensures flexibility, allowing projects to extend the library with their unique business logic.

**Motivation**

The motivation behind this project stems from the observed gap in the Substrate ecosystem. Despite the surge in Bitcoin-related projects in the entire industry, there is a lack of a common-good runtime library for BTC light clients in the Substrate framework. Addressing this gap is crucial for upcoming BTC Layer 2 (L2) projects, making the library a potential cornerstone for Substrate-based BTC L2 infrastructure.

### Project Details

**Key Deliverables**

- crate `primitive-bitcoin`: This crate provides diverse data structures necessary for building a Bitcoin light client concerning the block header verification and payment verification.
- crate `pallet-bitcoin`: This crate implements the core functionality of a Bitcoin light client on top of the primitives provided by `primitive-bitcoin`.
- Integration demonstration. A demonstration showcasing the integration of pallet-bitcoin into a Substrate runtime environment.

The detailed implementation plan is outlined in the [Pallet-Bitcoin Design Document](https://liuchengxu.notion.site/Pallet-Bitcoin-Design-Document-d7f688a550844159a700fe1a00dd4907). This document provides an in-depth overview of the overall design of the Substrate module, outlining key components, functionalities, and architectural considerations. It serves as a foundational resource for guiding the development process and ensuring alignment with project objectives and requirements.

**Non-Goals**

The workflow of integrating a Bitcoin light client into a chain encompasses the operation of a relayer, tasked with monitoring the Bitcoin network, submitting Bitcoin headers and transactions to the Substrate chain, and constructing and broadcasting BTC transactions to the Bitcoin network. While a relayer program is essential for executing the entire workflow, its development requires significant effort and complexity. Therefore, building a proper relayer is considered a non-goal for this project. However, it is recognized as a valuable follow-up task that may be pursued in the future.

### Ecosystem Fit

- The necessity of this project is identified through planning a BTC L2 project using Substrate and recognizing the absence of an off-the-shelf BTC light client pallet. This will be beneficial to any Substrate project requiring an on-chain BTC light client, so that they don't have to reinvent the wheel each time, addressing the need for quick integration of a BTC light client for a Substrate chain.

- In the Substrate ecosystem, existing BTC light client implementations by projects like [interlay: btc-relay](https://github.com/interlay/interbtc/blob/c6e48166edefbe1e5ec79dc8d2e103f8ea2241ac/crates/btc-relay/src/lib.rs) and [ChainX: bitcoin](https://github.com/chainx-org/ChainX/blob/a8cbf0eea85a5ab7027d93b501315721d0a819bc/xpallets/gateway/bitcoin/src/lib.rs) exist. However, these implementations are project-specific and lack the flexibility of being generic libraries, limiting reusability. The proposed library seeks to fill this gap by offering a versatile and extensible solution without imposing specific business assumptions, addressing this limitation.

## Team :busts_in_silhouette:

### Team members

- Name of team leader: Liu-Cheng Xu

### Contact

- **Contact Name:** Liu-Cheng Xu
- **Contact Email:** xuliuchengxlc@gmail.com
- **Website:** https://github.com/liuchengxu

### Legal Structure

- Individual

### Team's experience

- Liu-Cheng Xu

  He is a seasoned protocol-level blockchain engineer with extensive experience with the Substrate framework. He was the core developer and subsequent tech lead of ChainX project from 2018 to 2021. Post-ChainX, he embarked on a venture with the permanent storage project Canyon and received the grant [canyon_network](https://github.com/w3f/Grants-Program/blob/df34fc617c88346411319b4293db5eb9cb2769b9/applications/canyon_network.md) for implementing the Proof Of Access consensus with the Substrate ecosystem. Due to regulatory changes in his country, Canyon was discontinued. He later transitioned to Subspace Labs as the lead protocol engineer, spearheading the execution layer development in Subspace's modular solution from 2021 to 2023.

### Team Code Repos

- https://github.com/liuchengxu/pallet-bitcoin
- https://github.com/liuchengxu

### Team LinkedIn Profiles (if available)

- https://www.linkedin.com/in/liucheng-xu-2a639b116/

## Development Status :open_book:

The team has not yet started implementing the project. There is a drafted [Pallet-Bitcoin Design Document](https://liuchengxu.notion.site/Pallet-Bitcoin-Design-Document-d7f688a550844159a700fe1a00dd4907) for this pallet.

## Development Roadmap :nut_and_bolt:

### Overview

This project is planned as 1 milestone, completed in one month.

- **Total Estimated Duration:** 1 month
- **Full-Time Equivalent (FTE):**  1
- **Total Costs:** 10,000 USD

### Milestone 1

- **Estimated duration:** 1 month
- **FTE:**  1
- **Costs:** 10,000 USD

> :exclamation: **The default deliverables 0a-0d below are mandatory for all milestones**, and deliverable 0e at least for the last one.

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | MIT |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an **article** that explains how to integrate this pallet into a Substate chain and build their custom business logic on top of this library. |
| 1. | Substrate module: pallet-bitcoin | We will create a Substrate module that will implement a Bitcoin light client, offering two key interfaces: `submit_header` for submitting Bitcoin headers and `submit_transaction` for submitting transactions in the confirmed blocks.
| 2. | pallet-bitcoin integration example | An integration example will be crafted to showcase the seamless integration of the pallet-bitcoin into the Substrate node-template runtime. |

## Future Plans

- Transfer the repo to an organization for better collaboration.
- Periodic pallet upgrades according to Substrate updates.
- The basic BTC light client functionalities are quite stable, and minor maintenance costs will be required if no new features are requested once established, the finance support in the future is supposedly unnecessary for this library to be useful in the long run.
- Implement a relayer CLI.
- Integrate this pallet into a Substrate BTC L2 project. The BTC L2 project in planning is still a vapour, this library will be used once it becomes tangible.

## Referral Program (optional) :moneybag:

You can find more information about the program [here](../README.md#moneybag-referral-program).

- **Referrer:** -
- **Payment Address:** -

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Personal recommendation.
