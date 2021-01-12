# Open Grant Proposal

> This document is referenced in the terms and conditions and therefore needs to contain all the required information. Don't remove any of the mandatory parts presented in bold letters or as headlines! See the [Open Grants Program Process](https://github.com/w3f/Open-Grants-Program/blob/master/README_2.md) on how to submit a proposal.

* **Project Name:** RAI Finance Protocol
* **Team Name:** RAI Finance Team
* **Payment Address:** 1FBRbWkQJav7nvrM8qyqPUNAaLrRaq4MCe

*The above combination of your GitHub account submitting the application and payment address will be your unique identifier during the program. Please keep them safe.*

## Project Overview :page_facing_up:

### Overview

RAI Finance is a protocol designed for decentralized cross-chain asset exchange. Decentralized Finance (DeFi) has grown exponentially and transactions, services and usage of DeFi have increased significantly and become more widespread. This can be corroborated by the TVL (Total Value Locked) in DeFi protocols, which went from 1B USD in June to 10B USD in October. 1. While DeFi allows peer-to-peer transactions and the security of non-custodial assets, it does so at the cost of liquidity and a diverse asset selection which is traditionally enjoyed by centralized service providers. RAI Finance introduces this with its layer 2 scalability as a swap protocol, improved automated market making functionality and cross-chain asset support, bringing to DeFi both liquidity and diversity of assets. This will be facilitated via RAI, a native token as the incentive layer for user’s liquidity contribution and governance on protocol architecture iterations.

In order to reach a wider variety of asset types, Rai Finance will be launched on a parachain and integrated into the Polkadot ecosystem. This allows the protocol to increase the number of assets supported by utilizing the cross-chain compatibility of the Polkadot relay chain. Interoperability differentiates RAI Finance from many other popular liquidity protocols running on Ethereum and limited only to ERC20 tokens. Furthermore, as RAI Finance evolves, the smart contract capability of the Polkadot ecosystem allows for the integration of unique assets and non-fungible tokens (NFTs).

### Project Details
* An overview of the technology stack to be used
  * **Blockchain**: Rust/Substrate/Cumulus/EVM/Solidity
  * **Frontend**: TypeScript/React/web3.js/polkadot.js
* Documentation of core components, protocols, architecture etc. to be deployed
  * **White Paper**: https://rai.finance/WP.pdf
* PoC/MVP or other relevant prior work or research on the topic
  * **RAI swap dApp**: https://swap.rai.finance/#/swap
  * **RAI testnet**: https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Ftest-node.rai.finance%2Fws#

### Ecosystem Fit
Rai is inspired by Uniswap protocol, the mainly difference is as followings:
* **Secure Off-chain Transactions**: RAI Finance improves the scalability of automated market making and yield strategies through secure off-chain transactions. By leveraging Zero-knowledge Proofs for trustless computation and cryptographic accumulators for immutable data storage, it is possible to provide a layer 2 solution that supports scalability, transparency, and privacy in transactions.
* **Cross-chain Asset Capability**: In order to reach a wider variety of asset types, Rai Finance will be launched on a parachain and integrated into the Polkadot ecosystem. This allows the protocol to increase the number of assets supported by utilizing the cross-chain compatibility of the Polkadot relay chain.

## Team :busts_in_silhouette:

### Team members
* Name of team leader: 
  * Keonho Lee
* Names of team members: 
  * Keonho Lee
  * Taegyu Lim
  * Myunghoon Kang
  * Deokmun Kim
  * Sandy Liang
  * Minkyu Cho
  * Hans Shi

### Contact
* **Contact Name:** Keonho Lee
* **Contact Email:** keonho@rai.finance
* Website: https://www.rai.finance

### Legal Structure
* **Registered Address:** 1 Irving Place #08-11 The Commerze@Irving Singapore 369546
* **Registered Legal Entity:** RAI TECHNOLOGIES PTE. LTD.

### Team's experience
RAI Finance is led by a group of experts in cryptocurrency, trading and de-centralized finance. We have a technological and strategic partnership with the team who built innovative cryptocurrency trading platforms such as League of Traders2, a social trading platform that allows users to emulate the trading strategies of experienced and high profile traders and DEXEOS3, the first ever DEX (Decentralized Exchange) on EOS. Our goal is to simplify the trading process for retail users and bring new assets and liquidity into the DeFi Ecosystem.

### Team Code Repos
* https://github.com/RaiFinance

### Team LinkedIn Profiles
* https://www.linkedin.com/in/keonho-lee-2741b7b8
* https://www.linkedin.com/in/taegyulim
* https://www.linkedin.com/in/myounghoon-kang-90b110152
* https://www.linkedin.com/in/deokmun-kim-2760b6159

## Development Roadmap :nut_and_bolt:

### Overview
* **Total Estimated Duration:** 1.7 month
* **Full-time equivalent (FTE):** 2.5 FTE
* **Total Costs:** 0.65 BTC

### Milestone 1 — Implement RAI protocol - Part I
* **Estimated Duration:** 0.7 month
* **FTE:** 2 FTE
* **Costs:** 0.25 BTC

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can (for example) spin up one of our Substrate nodes. Once the node is up, it will be possible to send test transactions that will show how the new functionality works. |
| 0c. | Testing Guide | The code will have unit-test coverage (min. 70%) to ensure functionality and robustness. In the guide we will describe how to run these tests | 
| 0d. | Article/Tutorial | We will write an article or tutorial that explains the work done as part of the grant.
| 1. | Secure Off-chain Transactions module | Improves the scalability of automated market making and yield strategies through secure off-chain transactions. |  
| 2. | Docker | We will provide a dockerfile to demonstrate the full functionality of our chain |

### Milestone 2 — Implement RAI protocol - Part II
* **Estimated Duration:** 1 month
* **FTE:** 3 FTE
* **Costs:** 0.4 BTC

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can (for example) spin up one of our Substrate nodes. Once the node is up, it will be possible to send test transactions that will show how the new functionality works. |
| 0c. | Testing Guide | The code will have unit-test coverage (min. 70%) to ensure functionality and robustness. In the guide we will describe how to run these tests | 
| 0d. | Article/Tutorial | We will write an article or tutorial that explains the work done as part of the grant.
| 1. | Automated Market-Making Variability | RAI Finance liquidity pools can manage a variety of automated market-making (AMM) services to provide liquidity to different digital markets, with the ob- jective being to choose automated market-making algorithms to maximize rev- enue for different asset pairs. |  
| 2. | User Defined Trading and Yield Strategies module | The transparency in calculation and privacy of implementation provide the foundation for enabling user-defined yield strategies. |  
| 3. | Docker | We will provide a dockerfile to demonstrate the full functionality of our chain |

## Additional Information :heavy_plus_sign:

Possible additional information to include:
* What work has been done so far? 
  No
* Are there are any teams who have already contributed (financially) to the project? 
  No
* Have you applied for other grants so far? 
  No