# W3F Open Grant Proposal

> 🌏 This page is also available in [Chinese (中文)](./application-template-cn.md).
> 
> This document will be part of the terms and conditions of your agreement and therefore needs to contain all the required information about the project. Don't remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with a `>` (such as this one) can be removed.
> 
> See the [Open Grants Program Process](https://github.com/w3f/Open-Grants-Program/#pencil-process) on how to submit a proposal.

* **Project Name:** Acala Starport - Integrating Compound Gateway Money Market to Acala/Polkadot
* **Team Name:** Acala 
* **Payment Address:** `1Q88PtW866r4bfv2eMphobP78QnsDrRKfY`


> ⚠️ *The combination of your GitHub account submitting the application and the payment address above will be your unique identifier during the program. Please keep them safe.*

## Project Overview :page_facing_up: 

### Overview
[Compound](https://compound.finance/) has built a multi-chain money market via [Compound Gateway](https://www.comp.xyz/t/compound-gateway-testnet/1302). Layer-1 chains can build a Starport to integrate with Compound Gateway and its money market services.

Acala as the DeFi hub and parachain in Polkadot is building a Starport to integrate Compound Gateway with Acala and Polkadot
* we will build a Starport pallet to bridge the two, and use XCM as communication protocol
* we will bring the Compound money market services to users on Acala and Polkadot as we will integrate Polkadot{js} extension to the [Compound Cash DApp](https://compound.cash/)
* we will be able to add DOT, DOT derivatives like LDOT (trustless tokenized staked DOT) to Compound money market as new collateral assets
* we will be able to download CASH and other assets from Compound Gateway to Acala/Polkadot, to reduce liquidity fragmentation and increasing DeFi composability
* we believe this is a win-win-win initiative that will bring more users, builders and liquidity from Compound community to Acala and Polkadot

Therefore we look to fund this project partially by a grant from Compound, partially self-funded, and partially by Web3 Foundation. You can find our Compound proposal [here](https://www.comp.xyz/t/acala-x-compound-chain-gateway-to-polkadot/1349/12?u=bettec) and grant approval [here](https://compoundgrants.org/List-of-funded-grants-1fd5701c910d476493cbf1304cb553c8?p=0e4796f83c9442fbacb96216299275d7).


### Project Details 
* Starport pallet on Acala
  * Support lock to upload asset
  * Support execTrxRequest to execute transaction request on [Compound Gateway](https://github.com/compound-finance/gateway)
  * Support invoke to execute notices from Compound Gateway
* Implement Offchain Worker & XCM for cross-chain communication
* End-to-end integration
  * supply (test) price feeds for DOT and LDOT
  * release public testnet
* Front-end Dapp
  * build a PoC front-end to showcase the integration above
  * make Acala Starport information queryable

### Ecosystem Fit 
* We can bring collaboration with solid DeFi innovator and operator like the Compound team closer to the Polkadot ecosystem
* The Starport pallet will be readily available for any Polakdot/Kusama parachains and Substrate based chains
* The DApp we are building will bring Compound userbase into Polkadot, and also allow DOT holders to access Compound Money Market without going off to Ethereum 
* We have worked with the Compound team for quite a while to make this progress and initiative into reality. We're the first to submit a proposal of such kind from the Polkadot ecosystem, but we are aware that [Celo also proposed](https://www.comp.xyz/t/celo-x-compound-finance-compound-chain/1023/2) to integrate with Compound.


#### Technology Stack
* Starport module will be deployed on Acala network [here](https://github.com/AcalaNetwork/Acala)
* We will contribute XCM, offchain worker, RPC etc code to Compound Chain [here](https://github.com/compound-finance/gateway)
* [acala.js](https://github.com/AcalaNetwork/acala.js) will also be updated
* we may use our own [indexer](https://github.com/open-web3-stack/open-web3.js/tree/master/packages/indexer) or [Subquery](https://explorer.subquery.network/subquery/OnFinality-io/acala-subql) 

## Team :busts_in_silhouette:

### Team members
* Bryan Chen (Architect)
* Shaun Wang (Substrate)
* Jianjiang Wang (Substrate Engineer)
* Qiu Hao (Fullstack Engineer)
* Bette Chen (Team Lead)

### Contact
* **Contact Name:** Bette Chen
* **Contact Email:** bette@acala.network
* **Website:** [Acala Website](https://acala.network/) 

### Legal Structure 
* **Registered Address:** 462 Crawford Lane #02-39 Singapore 190462
* **Registered Legal Entity:** ACALA PTE. LTD.

### Team's experience
The team is made of experienced Substrate builders, various members are contributors to substrate, polkadot-js and other core libraries.

Bryan is one of the most active contributors to substrate codebase outside of Parity, a Polkadot community ambassador, and substrate/polkadot lecturer. He's the architect and technical brainpower behind the Laminar & Acala project.

Bette has more than a decade product/program/project management experience with background in Software Engineering and MBA from Otago and Duke. She's in charge of product and operation for Laminar & Acala.

Shaun has been contributing to several Polkadot ecosystem open source libraries, including Substrate, parity-common, type-metadata, etc. He has worked extensively on launching Acala on Rococo testnet, implementing xtokens, helping various teams installing xtokens and successfully completing cross-chain transfers. 

Jianjiang holds a Bachelor's degree in Software Engineering from Sichuan University. He has 4-years of experience in blockchain core development. He was formerly a senior engineer at Meituan, a core developer at Hashgard public chain, and Cosmos contributor. He is Substrate Framework early researcher.

Hao is a senior blockchain full-stack development engineer. He is also a Substrate runtime developer. Formerly Hashgard core developer. He is proficient in distributed financial blockchain development.


### Team Code Repos
* Bryan Chen: https://github.com/xlc
* Bette Chen: https://github.com/bette7
* Shaun Wang: https://github.com/shaopengw
* Jianjiang Wang: https://github.com/wangjj9219
* Hao Qiu: https://github.com/qwer951123

### Team LinkedIn Profiles
* [Bryan Chen](https://www.linkedin.com/in/xiliang-chen-1ba8ba52/)
* [Bette Chen](https://www.linkedin.com/in/bette-chen/)
* [Shaun Wang](https://www.linkedin.com/in/shaopeng-wang/)
* [Jianjiang Wang](https://www.linkedin.com/in/%E5%81%A5%E6%B1%9F-%E7%8E%8B-95859210b/)
* [Yuzhu Liu](https://www.linkedin.com/in/%E7%8E%89%E6%9F%B1-%E5%88%98-b31903191/)

## Development Status :open_book: 
The delivery and design is outlined [here](https://www.comp.xyz/t/acala-x-compound-chain-gateway-to-polkadot/1349)

![Overall solution of Acala Starport](https://drive.google.com/file/d/1Beuup0wGSclj0pn7r_2Xyrl5VJb2Ey62/view?usp=sharing)

## Development Roadmap :nut_and_bolt: 

This section should break the development roadmap down into milestones and deliverables. Since these will be part of the agreement, it helps to describe _the functionality we should expect in as much detail as possible_, plus how we can verify and test that functionality. Whenever milestones are delivered, we refer to this document to ensure that everything has been delivered as expected.

Below we provide an **example roadmap**. In the descriptions, it should be clear how your project is related to Substrate, Kusama or Polkadot. We _recommend_ that the scope of the work can fit within a three-month period and that teams structure their roadmap as 1 milestone ≈ 1 month. 

For each milestone,

* make sure to include a specification of your software. _Treat it as a contract_; the level of detail must be enough to later verify that the software meets the specification.
To assist you in defining it, we have created a document with examples for some grant categories [here](../src/grant_guidelines_per_category.md).
* include the amount of funding requested _per milestone_.
* include documentation (tutorials, API specifications, architecture diagrams, whatever is appropriate) in each milestone. This ensures that the code can be widely used by the community.
* provide a test suite, comprising unit and integration tests, along with a guide on how to set up and run them.
* commit to providing Dockerfiles for the delivery of your project. 
* indicate milestone duration as well as number of full-time employees working on each milestone, and include the approximate number of days along with the cost per day.
* _Deliverables 0a-0d are mandatory_ and shall not be removed, unless you explicitly specify a reason within the PR's `Additional Notes` section (e.g. Milestone X is research oriented and as such there is no code to test).

> :zap: If any of your deliverables is based on somebody else's work, make sure you work and publish _under the terms of the license_ of the respective project and that you **highlight this fact in your milestone documentation** and in the source code if applicable! **Teams that submit others' work without attributing it will be immediately terminated.**

### Overview
The full rough cost of the initiative is USD$111, and we are applying for 1/3 of the amount grant to fund it alongside with Compound and Acala. See more cost estimates [here](https://www.notion.so/acala/Acala-x-Compound-Chain-Gateway-to-Polkadot-582ae935d4524fe9a0db1074e0f60b08#c2097b9a43f44f419599d4e4f9f80629)

* **Total Estimated Duration:** 3 month
* **Full-Time Equivalent (FTE):**  3 FTE
* **Total Costs:** USD$30,000 

### Milestone 1 — Implement Starport Module 
* **Estimated Duration:** 2 month
* **FTE:**  1
* **Costs:** 8,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can (for example) spin up one of our Substrate nodes. Once the node is up, it will be possible to send test transactions that will show how the new functionality works. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. | 
| 1. | Starport module | this will include support lock to upload asset to Compound Gateway, support [execTrxRequest](https://github.com/compound-finance/gateway/blob/43fe0566b180fd5203aefc91bced2dd3d3d4203c/ethereum-client/src/events.rs) to execute transaction request on Compound Chain, support invoke to execute notices from Compound Chain, also add necessary governance features. We will provide relevant pallets and libraries for Gateway to integrate. |  


### Milestone 2 — Implement Offchain Worker & XCM for cross-chain comms

* **Estimated Duration:** 2.5 month
* **FTE:**  1
* **Costs:** 8,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can (for example) spin up one of our Substrate nodes. Once the node is up, it will be possible to send test transactions that will show how the new functionality works. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. | 
| 1. | Substrate PRC | Develop Substrate RPC client for Offchain Worker to send transactions and receive events from and to Acala network | 
| 2. | Basic XCM asset handling in Compound Chain | Implement [XCM](https://github.com/paritytech/xcm-format) for fungible tokens on Compound chain. We will provide relevant pallets and libraries for Gateway to integrate. | 

### Milestone 3 — Integration 

* **Estimated Duration:** 1.5 month
* **FTE:**  1
* **Costs:** 7,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can (for example) spin up one of our Substrate nodes. Once the node is up, it will be possible to send test transactions that will show how the new functionality works. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. | 
| 1. | End-to-end integration | uploading DOT and LDOT from Acala to Compound Chain, collateralize to borrow CASH, then download interest-bearing CASH token to Acala etc. We will provide all relevant pallets and libraries for Gateway to integrate.  | 
| 2. | oracle | Set up test LDOT and DOT price feeds |
| 3. | Release public testnet | |
| 5. | Article/Documentation | will write Article/Documentation to describe how to integrate and use Acala Starport |

### Milestone 4 — PoC UI Integration

* **Estimated Duration:** 1.5 month
* **FTE:**  1.5
* **Costs:** 7,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can (for example) spin up one of our Substrate nodes. Once the node is up, it will be possible to send test transactions that will show how the new functionality works. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. | 
| 1. | PoC Frontend | Enable the end-to-end flow as described in milestone 3-1 | 
| 2. | Query | set up indexer or add new query to Subquery |
| 3. | Public testnet | Release the DApp along with the testnet in Milestone-3 for public testing and feedback |
| 4. | Article/Documentation | Write article/docs to describe how to use Starport on Acala |


## Future Plans

- this is a small step for Acala to realize the vision of multi-chain and liquidity aggregation
- once the technology is being built, the next step is to assess risk profile for DOT and LDOT, we will team up with risk experts like [Gaunlet](https://gauntlet.network/) get them included as new collateral assets
- then we will need to bootstrap liquidity, again potentially a multi-party effort to bootstrap DOT/LDOT liquidity on Compound


## Additional Information :heavy_plus_sign: 

Any additional information that you think is relevant to this application that hasn't already been included.

Possible additional information to include:

* So far Acala has been self-funding this initiative, and we just received a grant worth 1/3 of the cost from Compound Grants Program
