#  Open Grant Proposal

* **Project:** Lloyd Protocol
* **Proposer:** GitHub  `poeticboat`
* **Payment Address:** 36rFSuWVKGk3xt59C3XyArcG8zfknoQ3Xm

## Project Overview :page_facing_up: 

Lloyd Protocol is a decentralized insurance solution that allows the creation of a market for any smart contract, runtime pallet to resist the risk of asset loss.

### Overview
The insurance provided by Lloyd protocol is mainly aimed at DeFi, Dex protocol or smart contract based on it, which covering hacker attacks, vulnerability exploitation etc, compensate for losses caused by hacker attacks, support and promote the development of DeFi, Dex ecosystem.

As a decentralized smart contract, runtime pallet insurance market, Lloyd Protocol allows anyone to create an insurance market based on any smart contract, runtime pallet. The insurance module aims to create a trading market for the risk of contract asset loss .

### Project Details 

The insurance scheme provided by Lloyd Protocol is decentralized and does not require permission, which means that anyone can insure any asset in any capital pool without permission, and all parameters can be set by customization.

For example, when setting up a Lloyd insurance module, a user can specify specific encrypted assets (such as DAI, ETH, or DOT) and the corresponding base pool (loan pool, market pool, mortgage pool, or multi-signature wallet). In addition, the cost models and rules for triggering/evaluating claims need to be customized, and the claims process management can be customized.

Users with insurance requirements can search the insurance module in the Lloyd market to meet their own requirements, and choose the module to cast LLD  token for insurance. If there is no suitable insurance pool, a customized insurance can be created. On the other hand, insurers (Known as insurer Miner in Lloyd system) can choose the insurance pool they are interested in and take liquidation risks to obtain corresponding benefits.

In the event of a security incident, the policyholder can start the claim process by calling the SubmitClaimCompensation  () function, which can be managed by a programmable ink contract, DAO or centralized agent. Claims Assessor needs to assess authenticity and vote on it.

Lloyd Protocol contain those module.

* risk assess module
  * policy-holder project register.
    * a one-week survey
    * project name, project description protect assets trigger payment
  * risk assessor submit project audit results
  * risk assessor  generate a market and pledge tokens.
* risk assessor manager.
  * risk assessor register
    * hackers, developers, auditors, analysts and actuaries
  * dao governance
* insurance market
  * policy-holder buy market
  * pledge tokens to promising project.
  * member rewards.
* claims assess proposals
  * claims proposal  register
  * proposal  governance.
  * fraudulently voted slash

### Ecosystem Fit 
Lloyd Protocol will provide the security guarantee for the forthcoming slot auction, the maximum protection of parachain losses.

## Team :busts_in_silhouette:

### Team members
* Poetic Boat
* DyLei

### Team Website	
* https://github.com/Lloyd-Protocol

### Team's experience
* Poetic Boat,  ethereum developers, start studying rust and Substrate in early 2019, has strong knowledge of DEFI contract insurance.  more than 8 years of experience inlarge-scale computing and algorithm, with many patents such as consensus algorithm and blockchain transaction.
* DyLei  Over 10 years of experiences in Development and Management,real time database products and digital currency transaction platform products expert. Currently focused on Blockchain Development and Cross-chain Technologies.

### Team Code Repos
* https://github.com/Lloyd-Protocol

## Development Roadmap :nut_and_bolt: 

### Overview

* **Total Estimated Duration:** 1 month
* **Full-time equivalent (FTE):**  1.5
* **Total Costs:** 1.4 BTC

### Milestone 1 — Implement risk assess module
* **Estimated Duration:** 3 weeks
* **FTE:**  1.5
* **Costs:** 0.5 BTC

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 license |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how  policy-holder register and risk assessor inspect project and pledge tokens which generate a market, all holders of token can participate market. |
| 0c. | Testing Guide | The code will have proper unit-test to ensure functionality and robustness. we will describe how to run these tests |
| 1. | implement basic risk assess pallet | We will implement a general module in pallet, it contain policy-holder project register, risk assessor may need to listen for registration events, then risk assessor submit project audit result, risk assessor generate a market and pledge the corresponding token according to the audit result. |

### Milestone 2 — Insurance market and claims proposal

* **Estimated Duration:** 8 weeks
* **FTE:**  1.5
* **Costs:** 0.9 BTC

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 license |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains all holders of token can participate market, Insurance market and claims proposal. |
| 0c. | Testing Guide | The code will have proper unit-test to ensure functionality and robustness. we will describe how to run these tests. |
| 1. | risk assessor manager | We will provide a risk assessor for registration and on chain poa audit. |
| 2. | insurance market | It contain policy-holder, risk assessors , members. policy-holder can buy project order, which  will reward risk assessors and members, members need  stake tokens to promising project. it can get rewards. |
| 3. | claims assess proposal | When a security incident occurs, policy-holder need claims proposal, which need members governance. if has member fraudulently voted, it will slash. |
| 4. | tutorial of insurance market | We will provide detailed tutorial how to interact with the protocol |

## Future Plans
Lloyd Protocol will use general stake module manages the capital pool,  more decentralised approach to electing risk assessors and on chain governance manager claim proposal. 

More general risk assessment models and member incentive models will be designed.
