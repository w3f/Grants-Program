# Open Grant Proposal

* **Project Name:** Cook Protocol
* **Team Name:** Cook Protocol
* **Payment Address:** 0xf2E9a2bb9291B92dab83Ae4f95d7758b797D7b5C

## Project Overview :page_facing_up: 
Cook Protocol is a trustless, transparent and well-incentivized cross-chain asset management platform that allows investors and fund managers to manage their wealth through highly customized cross-chain investment portfolios. We provide investors with a wide variety of asset management services and fund managers with advanced trading tools and highly liquidized funds, giving these players access to leveraged diversification. We are setting out on the mission to bring finance to the masses and revolutionize the DeFi space by focusing on the 3 pillars of interoperability, useability and capital efficiency to maximize both returns and utility to investors and fund managers.

### Overview
Cook Protocol is a trustless, transparent and well-incentivized cross-chain asset management platform that allows investors and fund managers to manage their wealth through highly customized cross-chain investment portfolios.
We plan to build a project for the Polkadot and Kusama ecosystem. The project will be built on Substrate and is an asset management platform that connects with different parachains and applications such as PolkaSwaps on Sora parachain.
The team is very interested in creating this project because we have been crypto investors since 2017 and really want to create a product that we will use ourselves to maximize returns on our own assets. We have been working on an asset management platform for almost 2 years, firstly as a centralized platform and later on  pivoted to a decentralized platform. 


### Project Details 
#### Mockups
##### Select a fund
![alt text](https://i.ibb.co/M14zHQN/1.jpg)
##### Check details of a fund
![alt text](https://i.ibb.co/XLPs9vr/2.jpg)
##### Create a fund
![alt text](https://i.ibb.co/xCgLPJ7/3.jpg)

#### Architecture
##### Polkadot and Kusama Ecosystem
![alt text](https://i.ibb.co/NjDgSc4/architecture.png) 

With reasonable initialization fee, fund managers can initialize a fund, configure investment strategies to attract investors. Investors only need to select the appropriate fund and deposit assets into the corresponding fund to get ckToken. They can sell or redeem ckToken anytime. With liquidity and trading tools, fund managers can allocate funds via cross-chain asset exchange with Polkaswap hosted on SORA to maximize everyone’s returns.

#### API specification

**Managing Assets API**  
  
| Function API| Description |
| ----------- | ----------- |
| create_fund(name String, symbol String, description String, fee f64, accepted_tokens vec\<Address\>, fund_type String) -> Result<i64, Error>      | Fund managers can create a fund with different parameters, and the function returns with the newly created fund ID       |
| transact(fund_id i64, parachain_id u32, type u8, payload bytes)      | Fund managers can use the function to allocate funds. fund_id specify the fund to perform transactions, parachian_id specify the target parachain to interact, type specify cross-chain message/instruction type, and payload specify message/instruction parameters.       |
| claim_management_fee(fund_id i64)      | Fund managers can claim already accrued management fees       |
  
**Investing API**

A user’s balance is represented as an amount of fund LP tokens, or ckTokens. A user can mint ckTokens by supplying assets to the fund and redeem the ckTokens for the underlying assets.

| Function API| Description |
| ----------- | ----------- |
| invest_fund(fund_id i64, token Address, investment_amount u32) | Investors can invest in the desired fund, and a ownership token ckToken will be minted and sent to user address |
| withdraw_fund(fund_id i64, withdraw_amount u32)  | Investors can withdraw , it will burn the ckToken and transfer the underlying token back to user address   |

#### Tech Stack
Rust, Substrate, Parachain Development Kits, Typescript, React

### Ecosystem Fit 
There are not many players in the space. The main ones are Set Protocol and Enzyme.Finance. We are different from them. First of all, it is very costly to become a fund manager on Set Protocol or Enzyme.Finance because of the prohibitively high gas fees on Ethereum. On the other hand, we are a cross-chain solution which allows us to tap into the low gas fees alternatives that the other ecosystems offer.
In addition, Set Protocol does not have advanced trading tools and only allows trading pairs. Although Enzyme.Finance has more offering, their UI is not intuitive and their setup process is very cumbersome. We intend to build a very simple and straightforward UI and have more advanced trading tools, such as leverage to allow margin trading. 
In the Polkadot and Kusama ecosystem, currently there is not any asset management market.

## Team :busts_in_silhouette:

### Team members
* Name of team leader: Adrian Peng
* Names of team members:	 Cage Chen, Jikun Liao, KP Peng

### Contact
* **Contact Name:** Adrian Peng
* **Contact Email:** adrian@cook.finance
* **Website:** https://www.cook.finance

### Legal Structure 
* **Registered Address:** 68 Circular Road #02-01, 049422, Singapore
* **Registered Legal Entity:** Cook Protocol Pte. Ltd.

### Team's experience
**Adrian Peng**  
Graduated from UC Berkeley with four years of experience in the blockchain space. Early investor in crypto projects, including Ethereum, Polkadot, and Filecoin. Tech lead at Google and Oracle. Currently managing frontend & backend development while overseeing the overall product roadmap. The languages he uses day to day are Python, Java and Solidity. Expert in AWS and GCP.  
**Cage Chen**  
Top 1% graduate from Carnegie Mellon University and a Silicon Valley engineering veteran. Lead engineer at several top Silicon Valley companies, such as DropBox and C3.AI. Currently serves as tech lead on frontend & backend development. Expert in Java, Python, Typescript development.  
**KP Peng**  
Stanford Engineering School Graduate. Technical product manager from United Technologies Corporation. Fluent in 6 languages. Has successfully delivered multiple large-scale projects using languages and technologies such as C#.Net, Java, SQL Server Integration Service, Microsoft Azure, Python. 4 years of experience in the blockchain space.  
**Jikun Liao**  
Senior software engineer in IoTeX. 8 years of experience in frontend and 2 years of experience in blockchain. Highly skilled in React/Redux/Saga/Hook, HTML/CSS/JavaScript/Typescript, React Native, Node/Express/Mongo, Vue.js/Vuex/Vuetify, Angular/ngrx, Solidity/Truffle/HardHat/Web3 JS/EtherJS.  
**Past blockchain experiences**
IoTex explorer  
https://github.com/liaojikunwork/iotex-explorer  
Cook Leverage uses Uniswap Flashswap and Compound to reach the effect of margin trading to magnify returns:  
https://github.com/CookFinance/cook-leverage  
Price-based and time-based token distribution and liquidity mining:  
https://github.com/CookFinance/cook-distribution-and-reward  

### Team Code Repos
* https://github.com/CookFinance

### Team LinkedIn Profiles
* https://www.linkedin.com/in/adrian-p-6564771b5/
* https://www.linkedin.com/in/cage-chen-17a557107/
* https://www.linkedin.com/in/jikun-liao-794b61162/
* https://www.linkedin.com/in/kunpeng89/

## Development Roadmap :nut_and_bolt: 

### Overview
* **Total Estimated Duration:** 2 months
* **Full-time equivalent (FTE):**  2 FTE
* **Total Costs:** 14k DAI

### Milestone 1 Initialize Parachain & Frontend Implementation
* **Estimated Duration:** 2 weeks
* **FTE:**  2
* **Costs:** 4k DAI

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 / MIT / Unlicense |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can (for example) spin up one of our Substrate nodes. Once the node is up, it will be possible to send test transactions that will show how the new functionality works. |
| 0c. | Testing Guide | The code will have unit-test coverage (min. 70%) to ensure functionality and robustness. In the guide we will describe how to run these tests | 
| 0d. | Article/Tutorial | We will write an article or tutorial that explains the work done as part of the grant. 
| 1. | Frontend | We will implement frontend using React.js so that:  1. Users can connect to the polkadot wallet.  2. The fund manager can initialize a fund, and allocate assets via Polkaswap.  3. The investor can browse the fund list, check the performance details of a fund, and invest in a fund. |  
| 2. | Substrate | Create a placeholder parachain which frontend can interact with. |    
| 3. | Docker | We will provide a dockerfile to demonstrate the full functionality |

### Milestone 2 Fund Investment & Management Implementation
* **Estimated Duration:** 3 weeks
* **FTE:**  2
* **Costs:** 6k DAI

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 / MIT / Unlicense |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can (for example) spin up one of our Substrate nodes. Once the node is up, it will be possible to send test transactions that will show how the new functionality works. |
| 0c. | Testing Guide | The code will have unit-test coverage (min. 70%) to ensure functionality and robustness. In the guide we will describe how to run these tests | 
| 0d. | Article/Tutorial | We will write an article or tutorial that explains the work done as part of the grant. 
| 1. | Fund management | We will implement the API for fund managers to create a fund, manage a fund and claim management fees. |  
| 2. | Fund investment | We will implement the API for investors to invest in a fund to mint ckToken, and burn ckToken to withdraw their investments. |    
| 3. | Docker | We will provide a dockerfile to demonstrate the full functionality |

### Milestone 3 Integration with Polkaswap
* **Estimated Duration:** 2 weeks
* **FTE:**  2
* **Costs:** 4k DAI

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 / MIT / Unlicense |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can (for example) spin up one of our Substrate nodes. Once the node is up, it will be possible to send test transactions that will show how the new functionality works. |
| 0c. | Testing Guide | The code will have unit-test coverage (min. 70%) to ensure functionality and robustness. In the guide we will describe how to run these tests | 
| 0d. | Article/Tutorial | We will write an article or tutorial that explains the work done as part of the grant. 
| 1. | Cross-chain asset exchange | We will exchange assets on Polkaswap using HRMP. This will enable fund managers to allocate assets for the fund. |    
| 2. | Docker | We will provide a dockerfile to demonstrate the full functionality |

## Future Plans
The team intends to build a cross-chain asset management platform that helps investors maximize their returns. Therefore, in the future we plan to create more interfaces with other parachains and dapps in the DeFi ecosystem on Polkadot and Kusama, such as Equilibrium and Centrifuge. And we plan to build a decentralized margin trading tool based on DEX and Lending protocols in Polkadot ecosystem for fund managers to maximize the capital efficiency.
