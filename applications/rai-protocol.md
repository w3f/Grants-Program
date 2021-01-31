# Open Grant Proposal

> This document is referenced in the terms and conditions and therefore needs to contain all the required information. Don't remove any of the mandatory parts presented in bold letters or as headlines! See the [Open Grants Program Process](https://github.com/w3f/Open-Grants-Program/blob/master/README_2.md) on how to submit a proposal.

* **Project Name:** RAI Finance Protocol
* **Team Name:** RAI Finance Team
* **Payment Address:** 1FBRbWkQJav7nvrM8qyqPUNAaLrRaq4MCe

*The above combination of your GitHub account submitting the application and payment address will be your unique identifier during the program. Please keep them safe.*

## Project Overview :page_facing_up:

### Overview

RAI Finance is a Defi protocol designed for decentralized cross-chain asset. Decentralized Finance (DeFi) has grown exponentially and transactions, services and usage of DeFi have increased significantly and become more widespread, while DeFi still suffer from poor user experience compared with CEX products.
RAI Finance introduces a zero knowledge proof layer2 solution to Polkadot ecossystem with the aim to give user a state of the art DeFi experience.

Below is the whole RAI technical stack architecture:

    -------------------------------
    | RAI Defi Apps               |
    -------------------------------
    | Substrate Client library    |  <---- This grant
    -------------------------------
    | Substrate Core              |
    -------------------------------
    | RAI Runtime Modules         |  <---- Part of this grant
    -------------------------------
    | LibProof                    |  <---- This grant
    -------------------------------
    | BulletProofs                |
    -------------------------------


The core integration with substrate is through runtime module which leverage our libProof library to generate and verify proof based on BulletProotfs.
Also there is corresponding substrate client library to interactive with our runtime modules.

The main zero-knowledge proof difference between RaiFinance and other projects is we are going to use Bulletproofs instead of zk-SNARKs e.g Groth16 based proving system. Bulletproofs is a proof system that does not require a trusted setup, and
it is notable for short proofs which are logarithmic in the program size,
and also for the shortest range. We aim to get much better performance as transactions get larger and larger.

## Project Details

We will implement first phase of RAI as three parts:
### LibProof

LibProof aim to implemente a general rust based library for bring Bulletproofs
into substrate runtime. It's like a bridge with wrap function of Bulletproofs.


### RAI Runtime Modules

RAI runtime modules will use LibProof to do confidentail transaction and also
verify the proofs.
For example, to create a verifiable confidential transaction, we'll implement
method like  `::create_transaction`, the resulting transaction can be verified
with `::verify_transaction` method.

### Substrate Client library

polkadot.js based to interactive with ZKP based confidentail transactions
(and also other RAI runtimes).

## Ecosystem Fit

RAI Finance improves the scalability of DeFi projects through secure off-chain transactions. By leveraging Zero-knowledge Proofs for trustless computation and cryptographic accumulators for immutable data storage, it is possible to provide a layer 2 solution that supports scalability, transparency, and privacy in transactions.

The zkps also can be used on social trading feature on Rai Finance to protect strategies of traders(detailed history of transactions) while revealing the overall performance (e.g. profit rate, volatility, etc) of them.

Though RAI will focus on Bulletproofs based proving system, other ZKP based projects can also reuse our LibProof and substrate client library to provide consistant user experience.

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
* **Total Estimated Duration:** 3 month
* **Full-time equivalent (FTE):** 2 FTE
* **Total Costs:** 0.65 BTC

### Milestone 1 — Tweak BulletProofs and Implement LibProof  - Part I
* **Estimated Duration:** 1.5 month
* **FTE:** 2 FTE
* **Costs:** 0.3 BTC

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can (for example) spin up one of our Substrate nodes. Once the node is up, it will be possible to send test transactions that will show how the new functionality works. |
| 0c. | Testing Guide | The code will have unit-test coverage (min. 70%) to ensure functionality and robustness. In the guide we will describe how to run these tests | 
| 0d. | Article/Tutorial | We will write an article or tutorial that explains the work done as part of the grant.
| 1. | Tweak Bulletproofs | Expand current dalek's Bulletproofs implmentation to support  our requirement. |  
| 2. | Implement LibProof | Implement a LibProof for substrate runtime module to use. |  


### Milestone 2 — Implement RAI confidentail transaction runtime modules - Part II
* **Estimated Duration:** 1.5 month
* **FTE:** 2 FTE
* **Costs:** 0.35 BTC

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can (for example) spin up one of our Substrate nodes. Once the node is up, it will be possible to send test transactions that will show how the new functionality works. |
| 0c. | Testing Guide | The code will have unit-test coverage (min. 70%) to ensure functionality and robustness. In the guide we will describe how to run these tests | 
| 0d. | Article/Tutorial | We will write an article or tutorial that explains the work done as part of the grant.
| 1. | RAI runtime module | Implement substrate module which leverage libProof to do transactions. |
| 2. | ZKP client library | Implement substrate client library which can interactive with runtime. |

## Future Plans

- Add more DeFi runtime modules to RAI.
- Make LibProof and ZKP Client more general.

## Additional Information :heavy_plus_sign:

Possible additional information to include:
* What work has been done so far? 
  No
* Are there are any teams who have already contributed (financially) to the project? 
  No
* Have you applied for other grants so far? 
  No
