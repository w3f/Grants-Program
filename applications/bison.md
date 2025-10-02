**Bison**
================================

- **Team Name:** Tuguldur Baigalmaa
- **Payment Address:** 14AZk92CKjovm4tDvzE9XsjGz3HNeeV2tmnbYitAqyweWoRp (UDSC - Asset Hub), 14AZk92CKjovm4tDvzE9XsjGz3HNeeV2tmnbYitAqyweWoRp (DOT - Polkadot)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2
- **Status**: [Terminated](https://github.com/w3f/Grants-Program/pull/2427#issuecomment-3318583963)

Project Overview :page\_facing\_up:
-----------------------------------

### Overview

**Tagline:** A streamlined developer tool for Solidity smart contract deployment and testing on Polkadot.

**Brief Description:**  
Bison is a developer tool designed to onboard Solidity developers into the Polkadot ecosystem by adapting the **Foundry** suite. The primary focus will be on:

*   **Forge**: A testing framework customized to support Solidity smart contracts on Polkadot, compiling to **WASM** and **PolkaVM** via **Solang** and **Revive** compilers.
*   **Mint**: A new tool using **subxt** to replace Cast, providing an interface for interacting with smart contracts, sending transactions, and querying chain data.

The tool will allow Solidity developers to continue using familiar workflows for building and testing smart contracts, while also handling deployment to Polkadot chains via **pallet-contracts**. Future iterations will expand towards deeper JAM protocol support, but this scope will focus on Polkadot integration.

**Relation to Substrate/Polkadot/Kusama**:  
Bison leverages Polkadot’s Substrate framework for smart contract deployment via **pallet-contracts**. It integrates **subxt** for transaction handling and contract interaction, enabling developers to transition from Ethereum-based tooling to Polkadot seamlessly.

**Why We Are Interested**:  
As one of the teams working on the development of the JAM protocol, our team saw a need for smart contract tooling for PolkaVM targets. 
Although the existing tooling, foundry can be used as-is for EVM compatible parachains that support the RPC endpoints, this is not the case
for future smart contract development that target PolkaVM. Our team is passionate about building tools that ease the transition for Solidity developers to explore Polkadot’s multi-chain ecosystem. By leveraging Foundry and customizing it for Polkadot, we aim to make this process as smooth and familiar as possible for developers.

Project Details
---------------

### Technology Stack:

*   **[Foundry](https://github.com/foundry-rs/foundry)**: Core testing framework for Solidity (customized for building and deploying on Polkadot).
*   **[Solang](https://github.com/hyperledger-solang/solang)**: Solidity to WASM compiler.
*   **[Revive](https://github.com/paritytech/revive/)**: Solidity to PolkaVM compiler.
*   **[subxt](https://github.com/paritytech/subxt)**: Substrate interaction library for **Mint** (replacing Cast).
*   **Rust**: For subxt and Polkadot-specific tooling development.

### Deliverables:

1.  **Customized Foundry Toolchain**:
    *   Integrates Solang and Revive compilers for WASM and PolkaVM.
    *   Deploy contracts using subxt via Polkadot's **pallet-contracts**.
2.  **Mint Tool**:
    *   Replaces Cast with a subxt-powered tool for interacting with smart contracts.
3.  **Documentation Website**:
    *   A website offering detailed documentation, examples, and guides for Solidity developers on Polkadot.

### What the project is _not_:

*   The project does not include JAM protocol integration at this stage.
*   It will not include Anvil or Chisel customization in this phase.

### Ecosystem Fit:

**Target Audience**:  
Solidity developers, dApp developers, smart contract auditors, and Polkadot parachain developers looking for a Solidity-native toolchain for Polkadot.

**Needs Addressed**:  
Bison will address the need for Ethereum developers to interact with Polkadot using familiar tools, facilitating easy migration and development on Polkadot chains.

**Similar Projects**:  
While other projects focus on native smart contract development for Polkadot (like ink!), Bison focuses on **Solidity** developers and provides familiar tooling to interact with the Polkadot ecosystem.

## Team
### Team members

- Name of team leader: Tuguldur Baigalmaa
- Names of team members: Tuguldur Baigalmaa

### Contact

- **Contact Name:** Tuguldur Baigalmaa
- **Contact Email:** tgldr0511@gmail.com
- **Website:** https://philoniare.com/about

### Legal Structure

- **Registered Address:** None
- **Registered Legal Entity:** None

### Team's experience

I have been a web2 developer for 7 years, web3 Rust developer for over 3 years and have developed unique expertise in 
both Python and Rust. I have previously worked on a project to create a wrapper library for subxt and familiar with its
use cases and functionality.

### Team Code Repos

https://github.com/philoniare/pba-final-project

https://github.com/philoniare/subxtpy

### Team LinkedIn Profiles (if available)

- https://linkedin.com/in/tuguldurb

Development Roadmap :nut\_and\_bolt:
------------------------------------

### Overview

*   **Total Estimated Duration:** 3 months
*   **Full-Time Equivalent (FTE):** 2 FTE
*   **Total Costs:** 30,000 USD
*   **DOT %:** 50%

### Milestone 1 — Forge Customization for Polkadot

*   **Estimated duration:** 1 month
*   **FTE:** 1.5
*   **Costs:** 10,000 USD


|  Number | Deliverable                                                                                                                         | Specification                                                                                                                               |
|--------:|-------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------|
| **0a.** | License                                                                                                                             | Apache 2.0                                                                                                                                  |
| **0b.** | Documentation | Provide inline documentation and a tutorial on how to compile Solidity contracts using Solang or Revive for Polkadot.                       |
| **0c.** | Testing and Testing Guide                                                                                                           | Unit tests for Forge’s functionality on Polkadot’s pallet-contracts.                                                                        |
| **0d.** | Docker                                                                                                                              | A Dockerfile for easy setup and testing of the tool.                                                                                        |
|      1. | Forge Customization                                                                                                                 | Customize Forge to compile Solidity contracts to WASM or PolkaVM via Solang or Revive, and deploy using subxt to call the pallet-contracts. |

### Milestone 2 — Mint Tool (Replacing Cast)

*   **Estimated duration:** 1.5 months
*   **FTE:** 1.5
*   **Costs:** 16,000 USD


|  Number | Deliverable               | Specification |
|--------:|---------------------------| ------------- |
| **0a.** | License                   | Apache 2.0 |
| **0b.** | Documentation             | User guide on using Mint (Cast replacement) to interact with Polkadot contracts. |
| **0c.** | Testing and Testing Guide | Tests for Mint’s ability to interact with Polkadot contracts using subxt.|
|      1. | Mint Tool                 | Develop the Mint tool using subxt to replace Cast, supporting contract interaction, transaction sending, and querying chain data. |

### Milestone 3 — Documentation Website

*   **Estimated duration:** 0.5 month
*   **FTE:** 1
*   **Costs:** 4,000 USD

|  Number | Deliverable               | Specification |
|--------:|---------------------------| ------------- |
| **0a.** | License                   | Apache 2.0 |
|      1. | Documentation Website                 | Build a website containing complete guides, tutorials, and example projects for Solidity developers on Polkadot. |

Future Plans
------------

After this phase, the tool will be extended to fully support the JAM protocol, including its in-core execution model. Our goal is to establish Bison as a standard Solidity toolkit for Polkadot and JAM.

Additional Information :heavy\_plus\_sign:
------------------------------------------

We learned about the Web3 Foundation Grants Program through Polkadot developer community discussions and are eager to contribute by building tools that simplify Solidity development for Polkadot chains.
