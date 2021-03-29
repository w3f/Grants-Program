# W3F Open Grant Proposal

* **Project Name:** Bandot Unsecured Lending Protocol
* **Team Name:** Bandot Foundation
* **Payment Address:** 3MJbbeThBc7uXVkhJuq8y6jmX5EVrjBXR2

## Project Overview :page_facing_up: 

### Overview

#### Introduction

The Bandot Unsecured Lending Protocol is different from the over-collateralized lending model, and it provides a credit-delegated loan which aims to provide higher capital efficiency in DeFi ecosystem. 

#### Integration

The Bandot Unsecured Lending Protocol consists of  Unsecured Lending contracts and Unsecured Lending front end. The contracts would be implemented with Substrate Ink! and it could be deployed to all parachains that support WASM contract. Also the front-end will be built with polkadot.js.

#### Team Interest

While much of DeFi’s present success has been built on collateralized lending, the Bandot team think that unsecured lending is rightly seen as the next step for DeFi by those on its cutting edge, and would like to build a unsecured lending protocol which provides an opportunity for lenders to earn long-term, competitive returns.

### Project Details

#### Technology stack

* React JS: the user operation pages developed with React JS which support the operations: deposit, withdraw, credit delegation borrow, and repay;

* Substrate Ink!:  the WASM smart contract developed with Ink! which implement lending pool and oracle;

* Bash: the deployment scripts;

#### Architecture

The Bandot Unsecured Lending Protocol adopts the fund pool model design to provide unsecured lending. It could be run as a para-chain of Polkadot, and also could be deployed as a moudle into other para-chain in Polkadot.

Basically, the entire protocol is consistes of four modules: Funding pool, Oracle, OpenLaw, and Credit market.    

![Architecture_image](https://raw.githubusercontent.com/bandotio/unsecured-lending/main/Architecture.png)

* The Funding pool contract is main entry point of the protocol, A asset (e.g. KSM/DOT) holder can firstly deposit asset to funding pool. At the other hand, a borrower could borrow asset from the funding pool. 
* The Oracle module is responsible for getting assets price to adjust the state of funding pool based on the reserve configuration and user configuration.
* OpenLaw is a blockchain-based protocol for the creation and execution of legal agreements. It is definitely a good choice to use smart contracts and laws to ensure that loans are repaid on time.
* The Credit market contract serves to showcase users in the current funding pool who are willing to delegate credit to others. The borrower can choose which one they want to sign agreement base on the delegator offered condition.

#### User Case

![User_Case_image](https://raw.githubusercontent.com/bandotio/unsecured-lending/main/user-case.png)

The image above shows the process of unsecured lending.

1. Alice is the lender with KSM/DOT asset  and she firstly deposits into the pool;

2. The pool will pass the data to credit market;
3. Bob is the borrower which would like to borrow asset from pool without any collateral, and choose Alice to be his delegator;
4. He sign the agreement which base on Alice's lending condition;
5. Then Alice will delegate the amount to Bob;
6. Bob can get his loan from the pool.

#### Limitations

At current stage, team only implement the funding pool contract and oracle module for the protocol. After investigating OpenLaw integration, team would integrate OpenLaw into the protocol.

### Ecosystem Fit 

The Bandot Unsecured Lending Protocol aims to introduce the lending smart contracts into Polkadot ecosystem, which could be used by the DeFi users and be integrated into other parachains as a lending module. 

In Ethereum ecosystem, there is the similar project like AAVE and TrueFi, but none of them can support multi-chain assets such as DOT.

## Team :busts_in_silhouette:

### Team members
* Vincent Chen, Team Leader
* Lester Li, Blockchain Engineer, Polkadot Ambassador
* Shaoting Lin, Blockchain Engineer
* Leo, Senior Frontend Engineer
* Cora, Community Manager
* David Li, Blockchain Engineer

### Contact
* **Contact Name:** Vincent Chen
* **Contact Email:** vincent@bandot.io
* **Website:** https://bandot.io

### Legal Structure 
* **Registered Address**: 3 Fraser Street #05-25 Duo Tower, Singapore 189352
* **Registered Legal Entity:** BANDOT FOUNDATION LTD.

### Team's experience
The team is made up of many experienced professionals in the blockchain industry.

Vincent Chen is the team leader who entered the blockchain industry and was responsible for government blockchain technology research. He funded Bandot based on Polkadot, and Bandot is a cross-chain unsecured lending aggregation DeFi platform based on Polkadot.

Lester Li is the Polkadot Ambassador who participated in 2019 Wanxiang Blockchain Hackathon, and won the third prize; and participated in the Polkadot technical community as a teaching assistant for Substrate development courses.

Shaoting Lin is a blockchain engineer who is familiar with Substrate and related tools. Currently she is the core developer in Bandot and responsible for the development of DEX moudle.

Leo is a senior frontend engineer who is familiar with mainstream front-end development framework and engaged in front-end development for 6 years, blockchain industry experience for 2 years, hybrid app development for 2 years. Currently he is helping the team build the DApp.

Cora is a community manager who established Bitholder Capital and Great Coin Blockchain Education Institution, providing education of market trading. Currently she is responsible for Bandot market operation.

David Li is a blockchain engineer who is a PhD in computer science, participated in many polkadot hackathon, familiar with substrate development.

### Team Code Repos
* https://github.com/bandotio

### Team Member Profiles
* https://github.com/TingALin
* https://github.com/master-davidlee
* https://github.com/lesterli
* https://github.com/cheesekon

## Development Status 📖

We have completed the planning of the product prototype, and the technical architecture, and init a repo to develop unsecured lending contract with Patract [Redspot](https://github.com/patractlabs/redspot) tool. The repo can be viewed at the following link：

https://github.com/bandotio/unsecured-lending

## Development Roadmap :nut_and_bolt: 

### Overview
* **Total Estimated Duration:** 2.5 months
* **Full-Time Equivalent (FTE):**  4 FTE
* **Total Costs:** 0.5 BTC

### Milestone 1 — Implement Contract 
* **Estimated Duration:** 1.5 month
* **FTE:**  4
* **Costs:** 0.3 BTC

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
|    0b. | Documentation         | The documentation will be provided to show the whole achitecture of the Bandot unsecured lending. |
|     1. | Lending pool contract | The contract will be implemented with Ink!, and it will handle all the user operation related functions such as deposit, withdraw, credit delegation borrow, and repay. |
| 2. | Oracle contract | The contract will be implemented with Ink!, and it will handle the asset price. |
| 3. | Oracle module | The module will be implemented with NodeJS, and it will fetch the asset price and be called by oracle contract. |
### Milestone 2 - Implementing DApp

* **Estimated Duration:** 1 month
* **FTE:**  4
* **Costs:** 0.2 BTC

| Number | Deliverable         | Specification                                                |
| -----: | ------------------- | ------------------------------------------------------------ |
|     0. | Article             | We will publish an article that explains the Bandot unsecured lending on media channels. |
|     1. | Contract Repo       | The repo include all contracts which be implemented with Ink!. |
|     2. | DApp Front End Repo | It's a webpage working with the Bandot unsecured lending, it's implemented based on polkadot.js as planned. |
|     3. | Docker              | We will provide a dockerfile to demonstrate the full functionality of our chain |


## Future Plans

After implemented the unsecured lending contract and the team would 

* Deploy it to Rococo network for cross-chain testing;

* Support more fund pools, such as stablecoins in the Polkadot ecosystem;
* Introduce openlaw to realize unsecured lending between individuals;
* Introduce the credit evaluation module to control the risks of unsecured lending.


## Additional Information :heavy_plus_sign: 

* We're currently implementing a substrate-based chain.