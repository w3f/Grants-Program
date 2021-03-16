# Open Grant Proposal

* **Project:** Bandot 
* **Team Name:** [Bandot](http://bandot.io/)
* **Payment Address**: 3MJbbeThBc7uXVkhJuq8y6jmX5EVrjBXR2

## Project Description :page_facing_up: 

### Overview

For the growth of the DeFi in the future, we propose a high-liquidity, cross-chain DeFi network in the Polkadot ecosystem, Bandot, which consists of a stable coin module, a DEX with the vAMM module, and an unsecured lending module.

### Project Details

Bandot unsecured lending module is a pool-based strategy lending system. Lenders provide liquidity by depositing
cryptocurrencies (e.g. KSM/DOT/stable coins) in a pool contract. Simultaneously, in the same contract, the pooled funds can be borrowed by credit delegation without collateral. 

Credit delegation allows a depositor to deposit funds in the lending pool to earn interest, and delegate their credit/borrowing power to other users. The enforcement of the loan and its terms are agreed upon between the depositor and borrowers, which can be either off-chain via legal agreements or on-chain via credit evaluation. 

This enables the depositor (delegator) to earn extra yield and the borrowers (delegatees) to access an uncollateralized loan.


#### What we will implement in this grant

We will make the protocol has **Unsecured Lending** functionalities in this grant. 

In the past grant, we have implemented Bandot stable coin and verified its basic functionalities. However, for the growth of the DeFi in the future, we would like to move further to make cross-chain unsecured lending be possible in the Polkadot ecosystem.

Bandot **Unsecured Lending** module consists of the following parts:

* Lending Pool contract, provide the deposit, withdraw, borrow, repay functionalities;
* Tokenization contract, provide interest-bearing tokens and interest-accruing tokens;
* Credit Delegation.

Firstly, we will implement a lending pool contract and a tokenization contract to support deposit and withdraw.

Secondly, we will implement the credit delegation, borrow and repay function.

Finally, we will introduce the credit evaluation module to control the risks of unsecured lending.

In generally, the purpose of this grant is to develop and introduce an unsecured lending module into the Polkadot ecosystem, then verify the cross-chain unsecured lending functionalities.

### Ecosystem Fit

No.

## Team :busts_in_silhouette:

### Team Members

* Vincent Chen, Team Leader

* Lester Li, Blockchain Engineer, Polkadot Ambassador

* Shaoting Lin, Blockchain Engineer

* Leo, Senior Frontend Engineer

* Cora, Community Manager

### Contact

* **Contact Name:** Vincent Chen
* **Contact Email:** vincent@bandot.io

### Team Code Repos

* https://github.com/bandotorg

### Team Website

* http://bandot.io/

### Legal Structure

* **Registered Address**: 3 Fraser Street #05-25 Duo Tower, Singapore 189352
* **Registered Legal Entity:** BANDOT FOUNDATION LTD.

### Team's Experience

The team is made up of many experienced professionals in the blockchain industry.

Vincent Chen is the team leader who entered the blockchain industry and was responsible for government blockchain technology research. He funded Bandot based on Polkadot, and Bandot is a cross-chain unsecured lending aggregation DeFi platform based on Polkadot.

Lester Li is the Polkadot Ambassador who participated in 2019 Wanxiang Blockchain Hackathon, and won the third prize; and participated in the Polkadot technical community as a teaching assistant for Substrate development courses.

Shaoting Lin is a blockchain engineer who is familiar with Substrate and related tools. She is currently the core developer in bandot and responsible for the development of DEX moudle.

Leo is a senior frontend engineer who is familiar with mainstream front-end development framework and engaged in front-end development for 6 years, blockchain industry experience for 2 years, hybrid app development for 2 years. Now he is helping the team build the DApp.

Cora is a community manager who established Bitholder Capital and Great Coin Blockchain Education Institution, providing education of market trading. Now she is responsible for Bandot market operation

## Development Roadmap :nut_and_bolt: 

* **Total Estimated Duration:** 8 weeks
* **Total Costs:** 0.5 BTC

### Milestone 1 - Implementing Deposit and Withdraw

* **Estimated Duration:** 4 weeks 
* **Costs:** 0.25 BTC


| Deliverable | Specification |
| ------------- | ------------- |
| Bandot Lending Pool contract Repository | A git repository containing the lending pool contract source code. The contract will include a general asset and achieve deposit and withdraw functionalities. |
| Bandot Lending Pool DApp | A DApp will allow users could do the deposit and withdraw operation with the deployed contract on the Bandot testnet. |
| Tests | The code will have proper unit-test coverage to ensure functionality and robustness. |

### Milestone 2 - Implementing Borrow and Repay

* **Estimated Duration:** 4 weeks 
* **Costs:** 0.25 BTC


| Deliverable | Specification |
| ------------- | ------------- |
| Bandot Lending Pool contract Repository | A git repository containing the lending pool contract source code. The contract will include a general asset and achieve borrow and repay functionalities. |
| Bandot Lending Pool DApp | A DApp will allow users could do the borrow and repay operation with the deployed contract on the Bandot testnet. |
| Tests | The code will have proper unit-test coverage to ensure functionality and robustness. |

## Futrue Plans

* Introduce the credit evaluation module to control the risks of unsecured lending.

## Additional Information :heavy_plus_sign: 

* We're currently implementing a substrate-based chain.

