# SEOR code-less smart contract platform

* **Team Name:** SEOR
* **Payment Address:** 0x573e932F79a8846a058032454Ee7Fd7C6df7Dc41
* **Status:** [Terminated](https://github.com/w3f/Grants-Program/pull/205#issuecomment-1168462194)

## Project Overview :page_facing_up: 

### Overview
With the rapid development of public chain technology and ecology, more and more developers, technical communities and companies have begun to pay attention to entering the blockchain field, and try to gain their business through blockchain technology.
However, due to the relatively high technical threshold in the blockchain field, it is difficult for these groups to quickly and truly use blockchain technology to benefit their businesses.

In order to lower the technical threshold and allow more people to participate in the blockchain field, we proposed a low-code multi-chain smart contract development platform.
It is a platform that supports one-click parameterized deployment of standard smart contracts to different target public chains in a code-free manner.
# General Grant Proposal

* **Project:** Seor Network

## Project Overview :page_facing_up: 

### Overview

With the rapid development of public chain technology and ecology, more and more developers, technical communities and companies have begun to pay attention to entering the blockchain field, and try to gain their business through blockchain technology.
However, due to the relatively high technical threshold in the blockchain field, it is difficult for these groups to quickly and truly use blockchain technology to benefit their businesses.

In order to lower the technical threshold and allow more people to participate in the blockchain field, we proposed a low-code multi-chain smart contract development platform.
It is a platform that supports one-click parameterized deployment of standard smart contracts to different target public chains in a code-free manner.

### Project Details 

#### Architecture

The platform includes standard contract sets, on-chain deployers, multi-chain DApp, multi-chain SDK, platform open protocol, etc. The outline of the system architecture is shown below:  

![](https://seor.io/static/arch/overview.jpeg)  
    

* **Standard contract set:**  
A set of pre-defined parameterized standard contracts on the platform. It is implemented in different techniques such as Solidity, ink!, Python to support different public chain technology stacks.  

* **Smart contract deployer:**  
A set of smart contracts that do not belong to different public chains, but the centralized contracts of standard contracts will be deployed on different target chains through the deployer.  

* **Multi-chain DApp:**  
The platform carries all interactions and supports multiple public chains. Users can configure parameters, one-click deployment, and contract interaction through DApp.  

* **Multi-chain SDK:**  
A front-end library that supports the platform's interaction with different public chains, bridges the technical differences of different public chains, provides a unified interaction interface, and allows DApps to switch between different public chains for interaction at any time without recoding.  

* **Open platform:**  
Through standard protocols, other developers are allowed to access the platform, providing more users with multi-chain codeless access capabilities.  


#### Interaction preliminary design  
According to our preliminary assumptions, users can deploy contracts that meet their needs on the designated blockchain system in just two steps.
* Step1 - Through the smart contract market, choose the smart contract that meets the demand
![](https://seor.io/static/arch/market.png)  

* Step2 - Enter the required parameters to deploy
![](https://seor.io/static/arch/deploy.png)  

#### Advantages 

* Blockchain and smart contract technology can be used without contract coding, which reduces the threshold for using blockchain technology.  

* Hold a variety of blockchain technology architectures, without worrying about the underlying implementation, so that users of blockchain technology can focus on the business level.  

* Unify the blockchain access interface, smooth out the technical differences of heterogeneous block links, and implement a set of codes to access public chain systems with different technical architectures.  

#### Overall plan

We expect to implement a codeless smart contract platform that can support multiple chains through four phases.  
* Implement some popular standard parameterized multi-chain contracts, such as ERC20, ERC721, etc. At the same time complete the basic contract deployer, multi-chain support SDK and a multi-chain DApp that allows users to operate.  

* Add some standard parameterized contracts for complex businesses to the contract set, such as DEX business and liquid mining business. At the same time upgrade the supporting SDK and DApp.  

* Carry out business integration within the contract collection to enable some composite businesses to form a more complete business flow, such as one-click completion: ERC20 Token issuance + Token sales + DEX listing + liquidity mining mine. And upgrade the contract deployer, multi-chain DApp and other infrastructure.  

* Support more parallel chains and public chains that support smart contracts, upgrade SDK and DApp, and propose a complete standard access protocol to implement an open platform.

Implementation content of this grant application:
We will use this grant to advance the development of the first and second phases. For details, please refer to the milestone section.

### Ecosystem Fit 
No

## Team :busts_in_silhouette:

### Team members
* Winnie Wen - team leader
* Yingxuan Li - full-stack engineer
* Huaiyu Wang - full-stack engineer

### Team Website	
* https://www.seor.io

### Legal Structure 
* Name: SEALSC FOUNDATION LIMITED
* Address: 2 VENTURE DRIVE, #11-31, VISION EXCHANGE, SINGAPORE 608526
* UEN: 201931689N

### Team's experience
Our team is made up of leaders, core development engineers, and community developers of leading blockchain enterprise and projects Onchain, Ontology, TRON, and Bitkeep. We have rich technical accumulation and in-depth understanding in the blockchain field. We are working on blockchain's standardize and protocolize, and will provide a complete infrastructure solution to enable blockchains to powered various fields.

### Team Code Repos
https://github.com/SealSC

## Development Roadmap :nut_and_bolt: 

### Overview
* **Total Estimated Duration:** 95 days
* **Full-time equivalent (FTE):**  3
* **Total Costs:** 12500 DAI

### Milestone 1 - Multi-chain smart contract set
* **Estimated Duration:** 1 month
* **FTE:**  3
* **Costs:** 5000 DAI

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 1. | License | Apache License 2.0 |
| 2. | Contract set Repository | A git repository containing the source code of 4 contracts: parameterized ERC20, liquidity mining, contract deployer and Uniswap protocol connector. These smart contracts are all developed to realizes parameterized during deployment, not copy the standard contract such as ERC20 directly. All of contracts will be will be implemented using both solidity and ink! technologies. |
| 3. | Testing Guide | All contracts will have a proper unit-test coverage (min 80%) to ensure the robustness and safety of the contract. All of the test cases, test codes and test guide will be add to the repository. |
| 4. | Documentation | Related documents such as interface definitions, usage instructions, deployment tutorials, etc. of the contract set. These documents will be added to the git repository, and a pdf file download link will be provided on the project website. |

### Milestone 2 - Multi-chain SERO-JS-SDK
* **Estimated Duration:** 1 month
* **FTE:**  3
* **Costs:** 5000 DAI

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 1. | License | Apache License 2.0 |
| 2. | SDK code repository | A git repository of SEOR-JS-SDK implemented using TypeScript. The SDK uses a unified interface to support the interaction between front-end DApp and substrate nodes, Ethereum nodes and other blockchain nodes of different architectures, allowing developers to access different chains with minimal changes without modifying the logic.  |
| 3. | Testing Guide | The SDK with have enough unit-test coverage(min 80%) to ensure  functional integrity and robustness. All of the test cases, test codes and test guides will be added to the repository. |
| 4. | Multi-Chain Support | Support interactions with multiple public chains, including Polkadot, Ethereum, Ontology, EOS. At least the following wallets will be supported: [polkadot{.js} extension](https://chrome.google.com/webstore/detail/polkadot%7Bjs%7D-extension/mopnmbcafieddcagagdcbnhejhlodfdd), [MetaMask extension](https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn), [imToken](https://token.im/), [ONTO](https://www.onto.app/). We will provide several web page to proof the chains and wallets was supported by this SDK. |
| 5. | Documentation | The SERO-JS-SDK tutorial and documentation guide users how to quickly get started using it, and provide as detailed use cases as possible. These documents will be added to the git repository, and a pdf file download link will be provided on the project website. |


### Milestone 3 - Multi-chain codeless smart contract platform
* **Estimated Duration:** 1 month
* **FTE:**  2
* **Costs:** 2500 DAI

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 1. | License | Apache License 2.0 |
| 2. | Code-less smart contract platform DApp | A code-less smart contract platform DApp will be deployed under a second-level domain name of this project. The DApp's UI part will be implement by VUE, and it will have a custom designed UI to uniform different chain's interface. The interactive with these chains will be supported by SEOR-JS-SDK. Through this DApp, users can deploy the contract implemented in Milestone 1 without coding to the parachains supporting smart contracts or directly to Ethereum, and contract interaction can be carried out in the platform powered by SEOR-JS-SDK. |
| 3. | Testing Guide | The DApp with have enough unit-test coverage (min 80%)  to ensure  functional integrity and robustness. All of the test cases, test codes and test guides will be added to the repository. |
| 4. | Multi-Chain Support | The DApp will support at least 4 public chains: Polkadot, Ethereum, Ontology and EOS. Users can interactive inside the DApp with those chains through different wallets which supported by SERO-JS-SDK: [polkadot{.js} extension](https://chrome.google.com/webstore/detail/polkadot%7Bjs%7D-extension/mopnmbcafieddcagagdcbnhejhlodfdd), [MetaMask extension](https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn), [imToken](https://token.im/), [ONTO](https://www.onto.app/) |
| 5. | DApp tutorial | Provide a detailed tutorial of DApp so that users can learn about platform functions through this tutorial, and can use the platform for contract deployment and interaction. |

## Future Plans
* Create a free decentralized smart contract market, connecting  developers and the project with development needs.
* Build an open platform that allows third-party developers to access and build codeless DApps.
* Implement a complete set of DApp interactive protocols compatible with heterogeneous chains.
