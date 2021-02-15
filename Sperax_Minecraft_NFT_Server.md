# Open Grant Proposal

> This document is referenced in the terms and conditions and therefore needs to contain all the required information. Don't remove any of the mandatory parts presented in bold letters or as headlines! See the [Open Grants Program Process](https://github.com/w3f/Open-Grants-Program/blob/master/README_2.md) on how to submit a proposal.

> This page is also available in [Chinese (中文)](./application-template-cn.md).

* **Project Name:** Sperax Minecraft NFT Server
* **Team Name:** Sperax
* **Payment Address:** ETH: 0xc28c6970D8A345988e8335b1C229dEA3c802e0a6

*The above combination of your GitHub account submitting the application and payment address will be your unique identifier during the program. Please keep them safe.*

## Project Overview :page_facing_up: 

### Overview

* A Minecraft server world where players can buy and sell virtual land, items and other cosmetic goods, and build a thriving in game economy.
* For the integration We were planning to migrate our smart contracts to the Polkadot ecosystem by building it on the substrate blockchain.
* Our team feels that blockchain tehcnology should be brought to currently popular video games instead of making new ones. We want to create a virtual world where players can truly collaborate and build an economy, and we believe this is possible through a sandbox game like Minecraft.

### Project Details 
Internal Project Proposal/Preliminary Research - https://docs.google.com/document/d/1Kw-vl5FAJaXPxNCw_bjYAEbIy6pwgKa2JZIX2zYb3Go/edit?usp=sharing \
API specifications - https://docs.google.com/document/d/1GaI8-InNprA3cGOjR9ANthVA6d5XNncIm3s0OgIJyig/edit?usp=sharing \
Documentation - https://github.com/Sperax/Minecraft-NFT-Server/tree/main/docs \
Core Tech stack to be used - https://docs.google.com/document/d/1OpFCPa9jO3oIrVMMP2FHLrkqAKF3yP4RDJExHJg2SvM/edit?usp=sharing \
UI Mockup - https://www.figma.com/file/eMVdV9FmhyJx3xiDotbWuu/Minecraft-NFT-Server?node-id=0%3A1

### Ecosystem Fit 
Similar projects include projects such as Decentraland and Enjin. We feel decentraland isn't able to hit mass appeal as it doesn't integrate with a currenly popular game, but instead tries to build its own ecosystem from the ground up. Enjin on the other hand does integrate with other games, however unlike our project they don't have features like NFT DeFi, Project Governance and Staking.

## Team :busts_in_silhouette:

### Team members
* Mihir Wadekar
* Joe Yu
* Preston Ong

### Contact
* **Contact Name:** Mihir Wadekar, Joe Yu
* **Contact Email:** mihir@sperax.io, joe@sperax.io
* https://sperax.io/

### Legal Structure 
* **Registered Address:** 2180 Sand Hill Road Suite 170, Menlo Park, CA, USA, 94025
* **Registered Legal Entity:** Newstyle Entertainment Blockchain Inc.

### Team's experience
The team has experience developing solidity smart contracts for the Ethereum ecosystem. We feel they would have a decent idea of how to go about migrating the contracts to Polkadot as they had worked on building the Ethereum smart contracts fo this project.

### Team Code Repos
* [Sperax-Minecraft-Server](https://github.com/Sperax/Minecraft-NFT-Server)
* [Mihir Wadekar](https://github.com/mw2000/)
* [Preston Ong](https://github.com/preston4896)

### Team LinkedIn Profiles
* https://www.linkedin.com/in/mihirwadekar/
* https://www.linkedin.com/in/zhou-y-400894184/
* https://www.linkedin.com/in/prestonong/

## Development Roadmap :nut_and_bolt: 

### Overview
* **Total Estimated Duration:** 1 month
* **Full-time equivalent (FTE):**  1 FTE
* **Total Costs:** 0.1 BTC

### Milestone 1 — Migrating Ethereum smart contracts to Polkadot
* **Estimated Duration:** 1 month
* **FTE:**  1
* **Costs:** 0.1 BTC

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 / MIT / Unlicense |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can (for example) spin up one of our Substrate nodes. Once the node is up, it will be possible to send test transactions that will show how the new functionality works. |
| 0c. | Testing Guide | The code will have unit-test coverage (min. 70%) to ensure functionality and robustness. In the guide we will describe how to run these tests | 
| 0d. | Article/Tutorial | We will write an article or tutorial that explains the work done as part of the grant. 
| 1. | Token contract: | We will migrate our ERC1155 token contract to Polkadot |  
| 2. | Staking contract: | We will migrate our NFT Staking contract to Polkadot|  
| 3. | Governance contract: | We will migrate our Project Governance contract to Polkadot |  
| 4. | Defi contract: | We will migrate our NFT DeFi contract to Polkadot |  


## Future Plans
We intend to create a community of people who could use this server. A long term vision for this would be similar to the world in the move "Ready Player One".

## Additional Information :heavy_plus_sign: 
Currently we have worked in building all our smart contracts for Ethereum based blockchains. We only need to migrate this to the polkadot ecosystem. We have also applied to the Binance Smart Chain Grant. Currently the team is funded internally by the company itself.
