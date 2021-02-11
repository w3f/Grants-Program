# Open Grant Proposal

* **Project Name:** Cook Protocol
* **Team Name:** Cook Protocol
* **Payment Address:** 0xf2E9a2bb9291B92dab83Ae4f95d7758b797D7b5C

## Project Overview :page_facing_up: 
Cook Protocol is a trustless, transparent and well-incentivized cross-chain asset management platform that allows investors and fund managers to manage their wealth through highly customized cross-chain investment portfolios. We provide investors with a wide variety of asset management services and fund managers with advanced trading tools and highly liquidized funds, giving these players access to leveraged diversification. We are setting out on the mission to bring finance to the masses and revolutionize the DeFi space by focusing on the 3 pillars of interoperability, useability and capital efficiency to maximize both returns and utility to investors and fund managers.

### Overview
Cook Protocol is a trustless, transparent and well-incentivized cross-chain asset management platform that allows investors and fund managers to manage their wealth through highly customized cross-chain investment portfolios.
We plan to build a project for the Polkadot and Kusama ecosystem. The project will be hosted on the Moonbeam parachain and is an asset management platform that connects with different parachains and applications such as PolkaSwaps on Sora parachain.
The team is very interested in creating this project because we have been crypto investors since 2017 and really want to create a product that we will use ourselves to maximize returns on our own assets. We have been working on an asset management platform for almost 2 years, firstly as a centralized platform and later on  pivoted to a decentralized platform.


### Project Details 
#### Mockups
##### Select a fund
![alt text](https://i.ibb.co/YT4x2fn/Frame-1.jpg)
##### Check details of a fund
![alt text](https://i.ibb.co/zhDKvwV/Frame-3.jpg)
##### Create a fund
![alt text](https://i.ibb.co/MkL32Ds/Frame-2.jpg)

#### Architecture
##### Polkadot and Kusama Ecosystem
![alt text](https://i.ibb.co/W2Gygj5/pasted-image-0.png)
##### Cook Protocol
![alt text](https://i.ibb.co/bmBZwms/1.png)
##### Oracle Architecture Design
![alt text](https://i.ibb.co/nCBZsC0/2.png)
#### API specification

A user’s balance is represented as an amount of fund LP tokens, or ckTokens. A user can mint ckTokens by supplying assets to the fund and redeem the ckTokens for the underlying assets.

**Investing ABI**
| Function ABI| Description |
| ----------- | ----------- |
| depositToken(address tokenContract, uint depositAmount)      | Transfers investors’ token assets to the fund address; mints ckTokens to msg.sender       |
| withdraw(uint withdrawFundTokenAmount)   | Transfers ckTokens’ underlying assets to msg.sender; updates msg.sender’s ckTokens balance        |

**Managing Assets ABI**  
When a fund manager initializes an empty fund smart contract on the Cook Protocol, the contract comes with the generic ABI function execute(address target, bytes memory data). The target specifies the address of the target DeFi protocol, and data specifies the function and calldata the user intends to invoke on the target DeFi protocol. This ABI makes it possible for the fund manager to interact with all whitelisted DeFi protocols.  
The accrueManagementFee() function is invoked at every deposit or withdrawal to calculate the management fee accrued from the last marked block to the current block, while also marking a new checkpoint. A fund manager can claim the management fee at any time by invoking the claimManagementFee() function.  
| Function ABI| Description |
| ----------- | ----------- |
| execute(address target, bytes memory data)      | Executes any function of any target smart contract on behalf of the caller       |
| accrueManagementFee()      | Accrues management fees between blocks       |
| claimManagementFee()      | Claims management fees accrued by the fund manager       |

#### Tech Stack
Rust, Solidity, Typescript, React, Javascript, Node, Hardhat, Truffle, Ethers.js

We have worked several initiatives on Ethereum, which can be seen here: https://github.com/CookFinance

### Ecosystem Fit 
There are not many players in the space. The main ones are Set Protocol and Enzyme.Finance. We are different from them. First of all, it is very costly to become a fund manager on Set Protocol or Enzyme.Finance because of the prohibitively high gas fees on Ethereum. On the other hand, we are a cross-chain solution which allows us to tap into the low gas fees alternatives that the other ecosystems offer.  
In addition, Set Protocol does not have advanced trading tools and only allows trading pairs. Although Enzyme.Finance has more offering, their UI is not intuitive and their setup process is very cumbersome. We intend to build a very simple and straightforward UI and have more advanced trading tools, such as leverage to allow margin trading.  
In the Polkadot and Kusama ecosystem, currently there is not any asset management platform.  

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
The team has a combined 30+ years of experience in software engineering and multiple years of domain experience in the blockchain industry. Team members are graduates from Stanford University, UC Berkeley, Carnegie Mellon and senior software engineers from Google, YouTube and DropBox.  
More specifically, one of the projects that we are currently working on is a decentralized margin trading tool called Cook Leverage that uses Uniswap Flashswap and Compound to reach the effect of margin trading to magnify returns. Code can be seen here (not fully tested):  
https://github.com/CookFinance/cook-leverage  
We also worked on a liquidity mining smart contract for Ethereum:  
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
* **Total Estimated Duration:** 3 months
* **Full-time equivalent (FTE):**  2 FTE
* **Total Costs:** 30k DAI

### Milestone 1 Implement Fund Smart Contract for investors
* **Estimated Duration:** 1 month
* **FTE:**  2
* **Costs:** 10k DAI

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 / MIT / Unlicense |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can (for example) spin up one of our Substrate nodes. Once the node is up, it will be possible to send test transactions that will show how the new functionality works. |
| 0c. | Testing Guide | The code will have unit-test coverage (min. 70%) to ensure functionality and robustness. In the guide we will describe how to run these tests | 
| 0d. | Article/Tutorial | We will write an article or tutorial that explains the work done as part of the grant. 
| 1. | Smart Contract: Fund smart contract | We will create a fund smart contract so that investors can deposit their funds to mint ckTokens and redeem ckTokens for underlying assets |  
| 2. | Moonbeam Substrate chain | Deploy Fund smart contract to the Moonbase Alpha chain |    
| 3. | Docker | We will provide a dockerfile to demonstrate the full functionality |

### Milestone 2 Implement Fund Smart Contract for Fund Managers & Interface with Oracles
* **Estimated Duration:** 1 month
* **FTE:**  2
* **Costs:** 10k DAI

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 / MIT / Unlicense |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can (for example) spin up one of our Substrate nodes. Once the node is up, it will be possible to send test transactions that will show how the new functionality works. |
| 0c. | Testing Guide | The code will have unit-test coverage (min. 70%) to ensure functionality and robustness. In the guide we will describe how to run these tests | 
| 0d. | Article/Tutorial | We will write an article or tutorial that explains the work done as part of the grant. 
| 1. | Smart Contract: Fund smart contract | We will add logics to Fund Smart Contract on how to interact with fund managers so that they can allocate funds accordingly, and accrue/claim management fees |  
| 2. | Oracle | We will set up the interface with ChainLink via the custom Client contract on Moonbase Alpha and Band Protocol via on-chain smart contract to get data feeds |    
| 3. | Docker | We will provide a dockerfile to demonstrate the full functionality |

### Milestone 3 Implement Frontend
* **Estimated Duration:** 1 month
* **FTE:**  2
* **Costs:** 10k DAI

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 / MIT / Unlicense |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can (for example) spin up one of our Substrate nodes. Once the node is up, it will be possible to send test transactions that will show how the new functionality works. |
| 0c. | Testing Guide | The code will have unit-test coverage (min. 70%) to ensure functionality and robustness. In the guide we will describe how to run these tests | 
| 0d. | Article/Tutorial | We will write an article or tutorial that explains the work done as part of the grant. 
| 1. | Frontend | We will implement frontend using React & typescript so that investors and fund managers can interact with Cook Protocol via a simple and user-friendly UI |    
| 2. | Docker | We will provide a dockerfile to demonstrate the full functionality |

## Future Plans
The team intends to build a cross-chain asset management platform that helps investors maximize their returns. Therefore, in the future we plan to create more interfaces with other parachains and dapps in the DeFi ecosystem on Polkadot and Kusama, such as Polkaswap, Equilibrium, Centrifuge.
