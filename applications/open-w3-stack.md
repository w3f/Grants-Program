# Open Grant Proposal

> This document is referenced in the terms and conditions and therefore needs to contain all the required information. Don't remove any of the mandatory parts presented in bold letters or as headlines! See the [Open Grants Program Process](https://github.com/w3f/Open-Grants-Program/blob/master/README_2.md) on how to submit a proposal.

* **Project:** Open Web3 Stack
* **Proposer:** bette7
* **Payment Address:** BTC payment address. We don't accept payments for the program in other currencies at this stage. 

*The above combination of your GitHub account and payment address will be your unique identifier during the program. Please keep them safe.*

## Project Description :page_facing_up: 

Please provide the following:
  * A brief description of the project.
  * An indication of why this project is good for the ecosystem.
  * An indication of how you will integrate this project into Substrate / Polkadot.
  * An indication of why your team is interested in creating this project.

Open Web3 Stack is a common-good library to accelerate application development on Substrate. While Substrate provides customizable technical infrastructure for building a blockchain, Open Web3 Stack aims to provide application building blocks that are common for specialist chains. 

When we are building [Laminar](https://github.com/laminar-protocol) - synthetic asset & margin trading chain, and [Acala](https://github.com/AcalaNetwork) - stablecoin & staking derivative chain, we realized they share some common requirements
- compatible and reusable multi-currency support
- oracle infrastructure to provide quality of service e.g. prioritized transaction process and favorable transaction costs, and generic interface for data collection and aggregation
- generic and extensible auction module
- more sophisticated on-chain proposal/motion execution strategies of scheduled update and gradual adjust numeric values e.g. instead of change interest rate from 20% to 5% instantly, do it gradually over a period of time
- misc utilities like FixedU128 and linked item
- a generic monitoring framework for alerts, bots, automations for any Substrate chains
  - network operators can use it to monitor tps, volume, ensure data consistency
  - users can track loan liquidation, margin levels etc
  - arbitrageur can monitor and execute trades based on dex prices, auctions, available liquidations
  - liquidity providers can monitor risk and adjust equity levels
  - ...
- a generic indexer for chain data analysis
- and more...

So we did the work to abstract and generalize all these common goodies, and we've been eating our own dog food so far. We now want to develop it further and open it up for wider communities to use and build upon. Specifically the three areas we are focusing on
- **Open Runtime Module Library (ORML)**
- **Guardian** generic monitoring framework
- **Indexer** javascript library

## Team :busts_in_silhouette:

* **Members:** 
  *  Shaun Wang (Dev)
  *  Jingbo Zhang (Dev)
  *  Ermal Kaleci (Dev)
  *  Tian Nan (Dev)
  *  Bryan Chen (Architect)
  *  Bette Chen (Product Manager)
* **LinkedIn Profiles:** 
  * https://www.linkedin.com/in/shaopeng-wang/
  * https://www.linkedin.com/in/ermal-kaleci-98445287/
  * https://www.linkedin.com/in/bryan-chen-1ba8ba52/
  * https://www.linkedin.com/in/bette-chen/
* **Github Handles:** 
  * https://github.com/orgs/laminar-protocol/people/shaopengw
  * https://github.com/orgs/laminar-protocol/people/zjb0807
  * https://github.com/orgs/laminar-protocol/people/ermalkaleci
  * https://github.com/orgs/laminar-protocol/people/aniiantt
  * https://github.com/orgs/laminar-protocol/people/xlc
  * https://github.com/orgs/laminar-protocol/people/bette7
* **Code Repos:** 
  * https://github.com/open-web3-stack
  * https://github.com/open-web3-stack/open-runtime-module-library
  * https://github.com/open-web3-stack/guardian
  * https://github.com/open-web3-stack/open-web3.js
* **Website:**	We don't have one, yet.
* **Legal Structure:** Laminar New Zealand Ltd. 
* **Team's Experience:** The team is an experienced Substrate builder, various members are contributors to substrate, polkadot-js and other core libraries. 

## Development Roadmap :nut_and_bolt: 
* **Total Estimated Duration:** 4 month
* **Full-time equivalent (FTE):**  2 FTE, the listed developers would put in extra time in addition to their designated development work to extract and generalize these modules and libraries for common use
* **Total Costs:** $30k equivalent BTC - 3.33

### Milestone 1

Please add additional milestones in the same way. If possible, include a tutorial and a docker image for each milestone to make it easier for us to evaluate your software. 
* **Estimated Duration:** 5 weeks 
* **FTE:**  2
* **Costs:** 1.11


| Number | Deliverable | Specification | 
| ------------- | ------------- | ------------- |
| 1. | ORML production ready | Feature complete for traits, pallets and utilities; complete benchmarking, weight annotation, test coverage and code linting |  
| 2.  | Indexer production ready | Feature complete; implement concurrent connectivity with multiple endpoints for better performance and robustness in production env; Hasura GraphQL integration|
| 3.  | Guardian design & PoC | monitoring framework specification, a proof of concept runnable code to demonstrate functionality e.g. by simple configuration can monitor account balance activities | 
| 4.  | Documentation | Documentation, examples and tutorials will be provided for using these libraries | 

**ORML features**
- traits
  - BasicCurrency
  - MultiCurrency
  - Auction
- pallets
  - tokens
  - currencies
  - oracle
  - prices
  - auction
  - vesting
  - gradually-update
  - scheduled-update
- utilities
  - Fixed128 (already merged in Substrate)
  - FixedU128
  - LinkedItem

**Indexer features**
- chain scanner for block monitoring
- block decoder to extract extrinsic and events details 
- data storage in PostgreSQL database

### Milestone 2

* **Estimated Duration:** 5 weeks 
* **FTE:**  2
* **Costs:** 1.11


| Number | Deliverable | Specification | 
| ------------- | ------------- | ------------- |
| 1. | Basic Guardian feature complete | support Substrate generic chain tasks; able to configure by yaml |  
| 2.  | Implementation for Kusama & Acala | Implement Substrate generic tasks e.g. query, implement Acala stablecoin tasks, e.g. monitor loans, various auctions; implement a bot example using task to monitor auction events, bid for auctions etc. |
| 3.  | Documentation | Documentation, examples and tutorials will be provided for using these libraries | 

**Guardian features**
The goal is to **by mere configuration**, we can set up a `Guardian` for a chain of concern, and a number of tasks for monitoring and execution
- tasks might be monitoring margin positions
- with arguments (e.g. monitor EUR and JPY pools)
- with conditions (if collateral < 110%)
- and actions (e.g. post to database service, or execute a script)

See the intended outcome of Guardian [here](https://github.com/open-web3-stack/guardian/issues/1)

### Milestone 3

* **Estimated Duration:** 5 weeks 
* **FTE:**  2
* **Costs:** 1.11


| Number | Deliverable | Specification | 
| ------------- | ------------- | ------------- |
| 1. | Implementation for Acala & Laminar as example & dog food | implement margin and synthetic trading tasks, staking derivative LDOT task, decentralized exchange task |  
| 2.  | Production ready | integration to the Indexer, deployment support for Heroku |
| 3.  | Documentation | Documentation, examples and tutorials will be provided for using these libraries | 

## Additional Information :heavy_plus_sign: 
Any additional information that you think is relevant to this application that hasn't already been included.

Possible additional information to include:
* We have implemented most features in ORML, currently 37 stars, 12 forks, one team we know of using it is DataHigher
* Currently it's all coming out of Laminar's own development cost
* Laminar has received a grant for its synthetic asset and margin trading chain
* Not that we know of at this level of development and abstraction for general purposes
* This project was born out of genuine needs from developing sophisticated specialist Substrate chains like Acala and Laminar. Our intention is to keep this as generic as possible, and make it an open application suite that accelerates the growth of Substrate and Polkadot community. 
 
