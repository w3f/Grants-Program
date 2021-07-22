# W3F Open Grant Proposal

* **Project Name:** SubDAO Chrome Extension
* **Team Name:** [SubDAO Labs](https://github.com/subdao-network)
* **Payment Address:**  0x

## Project Overview :page_facing_up:

The previous application [SubDAO Network Application - https://github.com/w3f/Grant-Milestone-Delivery/pull/114]

### Overview

The PolkaSign is a web3.0 app for electronice agreements built on top of Polkadot Ecosystem. Electronice agreement is well-known in web2.0 instead of paper agreements which have been used thousands of years in historical time. With electronice agreements, the commercial activities become much more efficient and have lower cost than ever. The whole human world are benefit of electronice agreements in the past 30 years. While with more and more electornice agreements signed, the more and more issues are exposed. Such as electronice agreements are stored in centralized system, fraud in electronice agreements, and so on. With PolkaSign, anyone can sign an electronice agreement with who ever he/she want. To sign an electronice agreement, you just need upload your agreement document, and sign it in PolkaSign, then share the link to the co-signer. 

The PolkaSign is developed with Substrate Framework based on the SubDAO Network which can be replaced with any Substrate Based Chains, and serves any kind of orgs with electronice agreements. The goal of PolkaSign is to provide electronice agreements in a web 3.0 way, to replace the systems in web 2.0.

### Project Details

PolkaSign combines blockchain and decentralized storage together to provide a reliable electronic agreements platform. With the  decentralized storage system, such as IPFS, Swarm or Crust in Polkadot ecosystem, provides the storage for the agreement files, at current state, only PDF is supported. The information of agreement, including signature, signer, agreement files list etc., is written with smart contract on blockchain. The PolkaSign provides dapp to handle agreement files, co-signer and links, to interact with decentralized storage and smart contracts on blockchain. The smart contracts of PolkaSign is based on ink!, any substrate-based chains can adopt these smart contracts easily. 

### Workflow

Below is the workflow of how to use PolkaSign. Alice want to sign an agreement with Bob, so she creates an electronice agreement with PolkaSign, and the electronice agreement files are stored in decentralized storage system. Then Alice add Bob's wallet address as co-signer, and sign the contract with her private key. After that Alice share the information of agreement with Bob. When Bob launch PolkaSign with his wallet, he will find the very agreement waiting for him to sign. Everything is done when Bob approve and sign the agreement send from Alice in PolkaSign.

![Flow-2021-07-21-2311](/Users/ruix/workfolder/documents/个人资料/项目/SubDAO/PolkaSign项目/Flow-2021-07-21-2311.png)



### Design

The home page shows the list of agreements in different status. The current waiting for signing agreements will be display as default, and you can switch the list by tabs or filter button in the left panel. The agreement file info, the status and progress of agreement are shown in the detail info of each agreement. The draft design of PolkaSign is shown below. 

![Overview-2021-07-21-2052](/Users/ruix/workfolder/documents/个人资料/项目/SubDAO/PolkaSign项目/Overview-2021-07-21-2052.png)



There are only three steps to create an agreement with people. The first step is to upload the agreement files. The files will be signed and stored in decentralized stroage system.

![New-2021-07-21-2052](/Users/ruix/workfolder/documents/个人资料/项目/SubDAO/PolkaSign项目/New-2021-07-21-2052.png)

The second step is to add co-signer. Add any number of co-signers by filling their wallet addresses. The addresses will be checked by PolkaSign JS.

![AddSigner-2021-07-21-2052](/Users/ruix/workfolder/documents/个人资料/项目/SubDAO/PolkaSign项目/AddSigner-2021-07-21-2052.png)

The last step is to review the contract. When everything is ready, sign it with wallet and share the link with co-signers.

![Review-2021-07-21-2052](/Users/ruix/workfolder/documents/个人资料/项目/SubDAO/PolkaSign项目/Review-2021-07-21-2052.png)






### Ecosystem Fit

* Where and how does your project fit into the ecosystem?  
 Tools / Application.

* Who is your target audience (parachain/dapp/wallet/UI developers, designers, your own user base, some dapp's userbase, yourself)?  
Anyone who need sign contract with others, include indivaduals, companies, DAOs and other kind of organization.

* What need(s) does your project meet?  
The project meets the need of signing contract with decentralization, immutability, and transparency. It provides the way for DAOs to sign contracts with DAO members and contributors.

* Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?  
  * If so, how is your project different?  
  * If not, are there similar projects in related ecosystems?  
  
  To sign contract with the help of blockchain technologies is not fresh, there are similar projects in Ethereum ecosystem, such as OpenLaw, EthSign. But there is no similar project in the Polkadot ecosystem yet. PolkaSign is the first one to provide electronice agreements sigining for indivaduals, companies and DAOs.

## Team :busts_in_silhouette:

### Team members

* Qiang - CTO/Project Lead
* Marvin Tong - Product Director
* Dajun - System Architect/Substrate Developer
* John Xie - Full-stack Developer
* Tallone - Full-stack Developer

### Contact

* **Contact Name:** WannaM
* **Contact Email:** subdao.lab@gmail.com
* **Website:** https://subdao.network

### Legal Structure

* **Registered Address:** Intershore Chambers, P.O. Box 4342, Road Town, Tortola, British Virgin Islands
* **Registered Legal Entity:**  SubDAO Labs Ltd.

### Team's experience

The team is the one who applied SubDAO.

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

* https://github.com/subdao-network

### Team LinkedIn Profiles

* [Wang Qiang](https://www.linkedin.com/in/wang-qiang-aa6a2894/)
* [Marvin Tong](https://www.linkedin.com/in/marvintong/)

## Development Status :open_book:

We have already designed some UI/UX as the shown previous section, and the rest works will be done in next two months.

## Development Roadmap :nut_and_bolt:

We planned two major versions. 

Version 1: The goal of first version is to provide a usable PolkaSign, the users can upload PDF agreement files and co-sign with other signers. It contains the features of store agreement files in decentralized storage, sign contract with smart contract, sharing the contracts waiting for sign.

Version 2: The goal of second version is to provide a common PolkaSign for other substrate chains. To co-work with other chains to integrate PolkaSign.

### Overview

In this application, we planned to provide the first version of PolkaSign. The main features are 1) store agreement files in decentralized storage, 2) sign contract with smart contract and 3) sharing the contracts waiting for sign. It will contains smart contract with ink!, web app as client and codes to interact with decentralized storage system. 

* **Total Estimated Duration:** 2 month
* **Full-Time Equivalent (FTE):** 2
* **Total Costs:** 9,000 USD



### Milestone 1  - The first usable version

* **Estimated Duration:** 2 month
* **FTE:**  2 
* **Costs:** 9,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | MIT |
| 0b. | Documentation | We will provide a basic tutorial that explains how to use. |
| 0c. | Testing Guide | We will provide a testing guide on how to test it. |
| 0d. | Article | We will publish an article describing our ideas. |
| 1a. | PolkaSign Client | PolkaSign Client will be implemented as web app. |
| 1b. | PolkaSign Smart Contract | PolkaSign Smart Contract will be implemented with ink!. |
| 2. | Build instruction | We will provide a guide of building PolkaSign from source code. |

## Future Plans

* We will cooperate with other parachains to make PolkaSign widly usable.
* More user cases will be shown on media.
* We will introduce more features for users, like new file types, agreement modifications etc.
* The feedback from communities will be considered as new features in future versions.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** 
We get this information from the w3f website.

* We have made the SubDAO Network, and an open grant has been accepted.
