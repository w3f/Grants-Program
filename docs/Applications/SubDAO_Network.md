# Open Grant Proposal

* **Project:** SubDAO
* **Proposer:** [SubDAO Labs](https://github.com/subdao-network)
* **Payment Address:**  3FcJjvzazcpgmJkesdAfx333fyCudxuAe7

## Project Overview :page_facing_up:

### Overview

#### Introduction

**SubDAO is a Cross-chain Platform built by SubDAO Labs to link DAO and DApp on Polkadot.**  It will be the infrastructure to maintain DAO and to connect DApp with DAO in the world of Web3.0 powered by Substrate and Polkadot.

The SubDAO will run as a parachain to provide specific services. The various DAO templates and SubDAO Airfone will alleviate the burden on developers to maintain DAOs and to create very DApps linked with DAOs. 

The initial governors of a DAO can easily create a cross-chain DAO by only a few clicks without any tech skills at all. Developers who are willing to build DApps can give the governance to communities by using SubDAO to create the very DAO connected to DApp through SubDAO Airfone.

#### Integration

SubDAO is a customized chain based on the Substrate 2.0 Framework and will run as a parachain on Polkadot. The OCW (Off-chain Worker) provides the ability to access the off-chain world, which would empower the DAOs to access external data rather than only On-chain data, such as the price of stable coins, the contributions on Github, and so on.

#### Team Interest

The initial members of the SubDAO Labs team are big fans of Web3.0 technology. They come from different areas, ranging from full-stack developer, product manager, project management to cryptocurrency early adopters. DAO is the ideal governance model in the mind of the team. Creating and maintain a DAO is not so easy, especially to make a DAO working across different chains. But with the help of Substrate 2.0 and Polkadot, the team thinks it is the time now.

Creating a DAO is not a new thing to the guys involved in the blockchain world, just like shooting a man to the Moon is not news to the fiction novel readers nor people. But the opportunity for everyone to easily travel forth and back between the Moon and the earth is making a big difference! All the team trying to do is to build a cheap, reliable, and fast enough vessel for people to travel between the Moon and the earth even further between Mars and the Earth. The team wants to provide a cheap, reliable, and fast enough way to let everyone being able to create DAOs and DApps across different chains.

### Project Details

#### Architecture

With the state-of-art technology, SubDAO Labs can achieve the goal based on Substrate 2.0 and the Polkadot. The SubDAO project contains SubDAO node, Template Library, SubDAO Guard, Asset Vault, SubDAO Airfone, and Front End.

![img](https://raw.githubusercontent.com/SubDAO-Network/graphics/main/SubDAO%20Architecture.jpg)

* **SubDAO Node** is the customized chain node for the SubDAO network built by Substrate 2.0. It's the fundament of the SubDAO network that contains the basic functionalities as a normal chain node but also provides the ability to fetch external data needed for DAO governance with the OCW (Off-chain Worker) from Substrate 2.0 Framework. 

* **Template Library** is the key component of the SubDAO network. It is comprised of multiple contracts. The main functionalities of **Template Library** are managing and providing various DAO Templates for different types of organizations. Everyone has the right to define new DAO Templates according to their needs, and the SubDAO network provides some default DAO Templates such as Voting Template, Fund Template, VC (Venture Capital) Template and so on. 

* **SubDAO Guard** is the original DAO of the SubDAO network. It provides basic management functionalities. Every member of the SubDAO network can get involved in the SubDAO network governance through SubDAO Guard.

* **Asset Vault** is the smart contract providing the basic features of manage assets for each DAO. Working together with **DAO Template**, the **Asset Vault** manages all kinds of assets, including the assets needed by creating a new DAO, the assets deposited by the governors of a DAO, and other assets.

* **SubDAO Airfone** is the SDK for developers to connect their DApps with the DAOs created by themselves or others. It will be provided as a Javascript library at the beginning, and in other languages later. Developers can use the SubDAO Airfone to interact with the SubDAO network directly or built their DApps with the connection to DAO.

* **Front End** provides Web UI for everyone to interact with the SubDAO network. All the users need to do is open the webpage deployed by the SubDAO Labs team or by users themselves and click the buttons following the manual. **Front End** will provide such functionalities as creating a new DAO, define a new DAO template, withdraw personal assets,  voting in DAO, and so on. Front End will be built with NodeJS.

* **SubDAO Token $SDT** is the native token of the SubDAO Network, and it will play the role of governance and other utilities. **$SDT** is necessary to secure and power the SubDAO Network. The SubDAO Network may hold an IPO and reward community members for helping our auction with **$SDT** tokens during the Parachain Auction.

#### Scenarios

*  **Scenario to Create a New DAO**  
![img](https://raw.githubusercontent.com/SubDAO-Network/graphics/main/flow1.jpg)

As shown above, the steps to create a new DAO are marked. The DAO governor calls the smart contract of the SubDAO Guard to choose a proper DAO template from the DAO Template Library. After the governor fills the basic information required by template such as name, description, the rules of governance, initial members, and so on and deposits the initial fund to the Asset Vault, the SubDAO Guard contract will create the very DAO according to the chosen template and filled information. All extra information, such as images, texts, and files, will be stored in a decentralized storage network like IPFS.

*  **Scenario to Attend a New DAO**  
![img](https://raw.githubusercontent.com/SubDAO-Network/graphics/main/flow2.jpg)

Generally speaking, there are two kinds of ways to interact with DAO contracts. The first way to get involved with a specific DAO is using the **Front End** created by the SubDAO Labs to interact with all the DAOs on the SubDAO Network. The second way is using the **SubDAO Airfone**. The SubDAO Airfone will hide all the details of calling smart contracts for users and is used by DApps since the developers of DApps can customize their scenario according to their needs.


#### The Open SDK

Our ultimate goal is to provide an essential open SDK (**the SubDAO Airfone**) from a high-level perspective together with the above components, fully powering the ecosystem of DAO across chains on Polkadot.  With the functionality of the Open SDK, anyone involved can utilize DAO and DApp.

The benefits of an open SDK are beyond criticism. The Open SDK will be an extension of both the DAO's capabilities and the value of the DApps through the whole Polkadot universe.  We hope to build a framework whereby any Decentralized Autonomous Organizations can live, and any Decentralized Apps can use in the  Polkadot ecosystem.

### Substrate / Polkadot Integration

The whole SubDAO Network builds on top of the Substate 2.0, and the Polkadot ecosystem is essential to what SubDAO Network is trying to achieve. The SubDAO Network will be connected to the Polkadot ecosystem as a parachain, sharing the Polkadot underlying consensus, and protected by the network performance of Polkadot and Substrate. 

The off-chain worker is a new feature in the Substrate Framework that allows the SubDAO Network to interact with off-chain data. 

The node in the SubDAO Network is built with OCW (Off-chain Worker) enabled. The figure below shows how it will work with external data (for example, the contributions on Github).

![img](https://raw.githubusercontent.com/SubDAO-Network/graphics/main/Integration.jpg)

In the figure above, the SubDAO Node includes an OCW pallet that interacts with external HTTP service (Github Http Wrapper). Since the OCW pallet is a general component, most of the processing work of external data is moved out of OCW to decrease the complexity of implementation and give the ability to the DAO governors who wanna use specific data sources for their DAO. The external HTTP service (Github Http Wrapper) will fetch the data such as contributions for a user in a project or repository from Github.com and feed the OCW pallet in the SubDAO Node.

All smart contracts mentioned above will be implemented with **Ink** or **EVM**. Since the SubDAO Node includes **OCW (Off-chain Worker)**, **Ink** is essential due to **Ink** is the only way to interact with pallets currently. Thanks to Ethereum, **Solidity** is widely used over several years, and most of the developers are already familiar with **EVM**.  So in the SubDAO Network, most of the smart contracts will be implemented using **EVM** to decrease the difficulties for new developers on the Polkadot ecosystem.  

![img](https://raw.githubusercontent.com/SubDAO-Network/graphics/main/Pallets.jpg)

As shown above, those contracts interacting with pallets will be implemented with **Ink**, and others will be with **EVM**. Later in future versions, when developers get familiar with **Ink**, the whole project will upgrade to use **Ink** only. 

For **EVM**, we will choose [Frontier](https://github.com/paritytech/frontier) as the evm pallet.

#### The Pallet Implementation

The function provided by the pallet to get off-chain data is `requestOffchainData`.

**1. requestOffchainData**

- `desc:` smart contract requests the off-chain data, the SubDAO network nodes will send data to the SubDAO chain through OCW integrated later.
- `params:` HTTP wrapper URL, JSON params
- `return:` dataId


### Ecosystem Fits

In the area of Decentralized Autonomous Organizations, there are many mature DAOs maintained in different ways with different tools or platforms, such as **Maker**, **The DAO**, and **The LAO**. Also, there are some other tools to help governors building a DAO, such as **Aragon**. Aragon is a project providing tools to create and the governor a DAO, but only available on Ethereum. 

**SubDAO** is quite different and evolved from other DAO related projects. The goal of **SubDAO** is to create a (1) cross-chain platform providing (2) general and customized functionalities to govern a DAO (3) connecting to DApp with the ability to (4) access off-chain external data.

## Team :busts_in_silhouette:

### Team Members

* Qiang - CTO/Project Lead
* Marvin Tong - Product Director
* Dajun - System Architect/Substrate Developer
* John Xie - Full-stack Developer
* Tallone - Full-stack Developer

### Team Website

- https://subdao.network

### Legal Structure

No Legal Entity

### Team Experience

**Qiang**   
   -  Over 13 years of experiences in Software Development   
   -  Chief Solution Architect in Tencent   
   -  Former Team Lead in IBM   
   -  Core Developer of Smart Cloud / HSLT   
   -  Code Contributor of KVM   
   -  Community Contributor in RedHat   

**Marvin Tong**   
   -  Founder and CEO of Phala Network   
   -  Former Product Manager in Tencent   
   -  Former Product Manager in DiDi   

**Dajun**   

   -  Over 12 years of experiences in Development   
   -  Former Senior Software Engineer in Alibaba   
   -  Core Developer of Wetez and StaFi.io   

**John Xie**   

   -  Full-stack Developer   
   -  Over 15 years of experiences in Development and Management   
   -  Has plenty of experience in Software Development and Blockchain Development   
   -  Currently, focus on Cross-chain technologies   

**Tallone**   
   -  Full-stack Developer   
   -  Over 20 years of experiences in Product Development and Management   
   -  Has plenty of experience in Software Architecture   
   -  Currently focused on  Blockchain Development and Cross-chain Technologies   

### Team Code Repos

* SubDAO Labs: https://github.com/subdao-network

### Team Linkedin Profiles

* [Wang Qiang](https://www.linkedin.com/in/wang-qiang-aa6a2894/)
* [Marvin Tong](https://www.linkedin.com/in/marvintong/)

## Development Roadmap :nut_and_bolt:

### Overview

* **Total Estimated Duration:** 2 months
* **Full-time equivalent (FTE):** 4
* **Total Costs:** 0.9 BTC


#### Milestone 1 — Verify Production of Concepts (POC) and Implement Substrate Modules

* **Estimated Duration:** 2 months
* **Full-time Equivalent (FTE)**: 4
* **Costs:** 0.9 BTC 

In the first milestone, the features for the PoC will be implemented and tested by limited users. 

The following features will be included:

* SubDAO Node with OCW to fetch simple data   
* Template Library with basic functionalities   
* SubDAO Guard   
* Default Voting Template   
* Asset Vault   
* Front End   

The implementation of off-chain workers of the Substrate Framework will be built and validated. The designed off-chain data is the contributions on Github.

| **Number** | **Deliverable**         | **Specification**                                            |
| ---------- | ----------------------- | ------------------------------------------------------------ |
| 0a.        | License                 | Apache License 2.0                                           |
| 0b.        | Documentation           | Documents containing the description of whole architecture design for SubDAO Network. |
| 0c.        | Testing Guide           | We will provide a full test suite and guide for the POC.     |
| 1.         | SubDAO Node Repo        | SubDAO Node is built on top of Substrate 2.0 as a customized module written in Rust will use the very consensus protocol. A new pallet using OCW will be implemented to fetch off-chain data as designed to provide such data for DAOs. |
| 2.         | Ink! Contracts          | Contracts will be developed with ink! |
| 2a.        | SubDAO Template Library | The SubDAO Template Library contract maintains SubDAO Templates. All DAOs can be created by using the templates in this library. The default templates will be provided,  and the custom template will be supported in the future version. |
| 2b.        | SubDAO Guard            | Another set of contracts to maintain the SubDAO (the original DAO for the SubDAO Network). Any community member can get involved through SubDAO Guard at any time. |
| 2c.        | SubDAO Voting Template  | The very basic template supported by the SubDAO network, and it's the first template included by the SubDAO template library. |
| 2d.        | SubDAO Asset Vault      | It's the contract to provide assets management functionalities for all DAO. It's the initial vault for SubDAO itself. |
| 3.         | Front End               | The webpage provides all the functionalities for the SubDAO network except the off-chain worker and will be implemented with polkadot.js in NodeJS. |
| 4.         | Docker Image            | The SubDAO Network docker image contains the POC version running anywhere to verify the idea of the SubDAO Network. |
| 5.         | Medium Posts            | Articles will be post on medium to expose this project. |

### Community Engagement

SubDAO's future community engagement strategies include:

* Publish more articles on Medium and other leading media channels to expose our project.  
* Launch an Ecosystem Development Lead Program to recruit and get more contributors involved in our project.  
* Join Polkadot related on-line and off-line events in the Polkadot community to expose our project.  
* Bounty Program for General Community to attract more people into our project.  
* DApp Hackathon to get more DAOs and developers.

## Future Plans

#### Marketing and Community Plans

* The SubDAO Network will run as a parachain of the Polkadot Network.  
* Hire 3-4 more developers in the next two months, and set up our core dev team.  
* Hire 1 marketing adviser to set up our marketing team.  
* Support DAOs for the Polkadot network.  

#### Development Plans

* In phase 1, our goal is to achieve all the designed functions and provide the basic voting for all DAOs.  
* In phase 2, more DAO templates will be implemented, such as the Fund Template and the VC (Venture Capital) Template, and the SubDAO Airfone will be included for developers to connect their DApps with DAOs.
* In phase 3, the SubDAO Network begins to provide services for any kind of DAO with customized DAO templates while we plan to release a new version with low-cost functionalities to the public.
* Finally, our goal is to provide the essential platform with the Open SDK to facilitate the ecosystem on Polkadot.

## Additional Information :heavy_plus_sign:

* Github: https://github.com/subdao-network
