# W3F Open Grant Proposal

* **Project Name:** Bandot Unsecured Lending Protocol
* **Team Name:** Bandot Foundation
* **Payment Address:** 0x062c21d82aF13C6e386cCaDe7865E88F6Bde306E

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

#### Pros and Cons

Pros and Cons from users perspective:

**Borrowers**

Input ksm/dot (for over-collateral) Output bUSD
2 ways to join the party: Credit delegation(mostly for organizations) / KYC application(mostly for individuals) + vote
Can pay back in portion based on daily-charged interest(higher when it’s pass the due date)
KYC application -> vetted -> white list(limited amount?) -> higher loan(good record book)

- Risk
  More fee + lawsuit/liquidation if default
- Benefit
  Utilize the provided liquidity with/without collateral

**Lenders**

- Risk
  Default loans cause money losing
- Benefit
  High APR 10%

**Bandot platform**

Reserve pool, Record book

- Risk
  Bad loans
- Benefit
  Platform fee

**Risk Management**

- Openlaw, a blockchain-based protocol for the creation and execution of legal agreements, use smart contracts and laws to ensure that loans will be repaid on time
- Credit model, KYC,DID,
- Bandot Council, Insurance + Emergency Shutdown

#### Limitations

At current stage, team only implement the funding pool contract and oracle module for the protocol. After investigating OpenLaw integration, team would integrate OpenLaw into the protocol.

**Initial OpenLaw workflow**

The underlaying workflow v0.1:

Work paths: Openlaw(vault) -> Moonbeam(pallet_evm) -> Bandot ink!(chain_extension)

First of all, we need to know how moonbeam bridge works. The whole bridge is composed of bridge contracts, handler contracts and  relayer on both of the source chain and the target chain. The target contracts from both sides will implement the cross chain message passing.

The process works as follow:

* User A deposits bUSD(Bandot stable coin), and gets the pool tokens in return from the pool to represent the deposited assets. The pool tokens can be traded in the second market for the purpose of providing liquidity. User A can also choose to delegate the right to use part of the tokens to the borrowers.
* User B would like to borrow the tokens. After selecting the interest rate, repay time and other parameters in the market, he/she choses A as the lender and clicks “Sign”.
* This “Sign” will activate Openlaw and inform A to sign the contract, which is protected by law.
* Openlaw will create a contract called valut, which is the intermediary contract between A and B to mark the amount of delegated tokens that can be used with the above operation, Bandot will perform the following steps to use the valut.
* Take this valut contract as the target contract in the figure above(From Moonbeam), and implement the contract on Ethereum through Moonbeam. So that there are target contracts in both Moonbeam and Ethereum network. The operations on the target (valut) contract on Moonbeam will be synchronized to Ethereum by the bridge.
* User B calls the borrowing function to borrow the assets. Our bank contract can send cross chain messages to moonbeam through chain extension in Bandot, reducing the amount of available delegated tokens in the valut.
* Then it will trigger the Borrow function on Bandot (as A) to borrow the tokens. Meanwhile, the pool will generate the debt tokens which represent the mount of tokens got lend and give them to A.
* User B pays back to the pool, which will reduce A’s debt tokens.

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
* **Total Costs:** 29k USD

### Milestone 1 — Implement Contract 
* **Estimated Duration:** 1.5 month
* **FTE:**  4
* **Costs:** 17,400 USD

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
* **Costs:** 11,600 USD

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