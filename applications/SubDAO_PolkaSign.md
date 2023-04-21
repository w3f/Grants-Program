# PolkaSign

* **Team Name:** [SubDAO Labs](https://github.com/subdao-network)
* **Payment Address:**  0x0c105bA504D1905bb47EeA57FA8694893bDEd27f

## Project Overview :page_facing_up:

The previous application [SubDAO Network Application - <https://github.com/w3f/Grants-Program/pull/90>]

### Overview

The PolkaSign is a web3.0 app for electronic agreements built on top of Polkadot Ecosystem. The electronic agreement is well-known in web2.0 instead of paper agreements used thousands of years in historical time. With electronic agreements, commercial activities become much more efficient and have a lower cost than ever. The whole human world is benefiting from electronic agreements in the past 30 years. While with more and more electronic agreements signed, more and more issues are exposed. Such as electronic agreements are stored in a centralized system, fraud in electronic agreements, and so on. With PolkaSign, anyone can sign an electronic agreement with whoever he/she wants. To sign an electronic agreement, you just need to upload your agreement document, and sign it in PolkaSign, then share the link to the co-signer.

The PolkaSign is developed with Substrate Framework based on the SubDAO Network, which can be replaced with any Substrate Based Chains, and serves any kind of orgs with electronic agreements. The goal of PolkaSign is to provide electronic agreements in a web 3.0 way, to replace the systems in web 2.0.

### Project Details

PolkaSign combines blockchain and decentralized storage to provide a reliable electronic agreements platform. With the decentralized storage system, such as IPFS, Swarm, or Crust in Polkadot ecosystem, provides the storage for the agreement files, at the current state, only PDF is supported. The information of agreement, including signature, signer, agreement files list, etc., is written with smart contract on the blockchain. The PolkaSign provides a dapp to handle agreement files, co-signer, and links, to interact with decentralized storage and smart contracts on the blockchain. The smart contracts of PolkaSign are based on ink!, any substrate-based chain can adopt these smart contracts easily.

### Workflow

Below is the workflow of how to use PolkaSign. Alice wants to sign an agreement with Bob, so she creates an electronic agreement with PolkaSign, and the electronic agreement files are stored in the decentralized storage system. Then Alice adds Bob's wallet address as co-signer, and sign the contract with her private key. After that, Alice shares the information of agreement with Bob. When Bob launches PolkaSign with his wallet, he will find the very agreement waiting for him to sign. Everything is done when Bob approves and signs the agreement send from Alice in PolkaSign.

![Flow-2021-07-21-2311](https://raw.githubusercontent.com/WannaM/graphics/main/Flow-2021-07-21-2311.png)

### Design

The home page shows the list of agreements in different statuses. The current waiting for signing agreements will be display as default, and you can switch the list by tabs or filter button in the left panel. The agreement file info, the status, and the progress of the agreement are shown in the detailed info of each agreement. The draft design of PolkaSign is shown below.

![Overview-2021-07-21-2052](https://raw.githubusercontent.com/WannaM/graphics/main/Overview-2021-07-21-2052.png)

There are only three steps to create an agreement with people. The first step is to upload the agreement files. The files will be signed and stored in the decentralized storage system.

![New-2021-07-21-2052](https://raw.githubusercontent.com/WannaM/graphics/main/New-2021-07-21-2052.png)

The second step is to add co-signers. Add any number of co-signers by filling in their wallet addresses. PolkaSign JS will check the addresses.

![AddSigner-2021-07-21-2052](https://raw.githubusercontent.com/WannaM/graphics/main/AddSigner-2021-07-21-2052.png)

The last step is to review the contract. When everything is ready, sign it with your wallet and share the link with co-signers.

![Review-2021-07-21-2052](https://raw.githubusercontent.com/WannaM/graphics/main/Review-2021-07-21-2052.png)

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
  
  To sign a contract with the help of blockchain technologies is not fresh. There are similar projects in the Ethereum ecosystem, such as OpenLaw, EthSign. But there is no similar project in the Polkadot ecosystem yet. PolkaSign is the first one to provide electronic agreement signing for individuals, companies, and DAOs.

## Team :busts_in_silhouette:

### Team members

* Qiang - CTO/Project Lead
* Marvin Tong - Product Director
* Dajun - System Architect/Substrate Developer

### Contact

* **Contact Name:** WannaM
* **Contact Email:** subdao.lab@gmail.com
* **Website:** <https://subdao.network>

### Legal Structure

* **Registered Address:** Intershore Chambers, P.O. Box 4342, Road Town, Tortola, British Virgin Islands
* **Registered Legal Entity:**  SubDAO Labs Ltd.

### Team's experience

The team is the one who applied SubDAO.

**Qiang**

* Over 13 years of experiences in Software Development
* Chief Solution Architect in Tencent
* Former Team Lead in IBM
* Core Developer of Smart Cloud / HSLT
* Code Contributor of KVM
* Community Contributor in RedHat

**Marvin Tong**

* Founder and CEO of Phala Network
* Former Product Manager in Tencent
* Former Product Manager in DiDi

**Dajun**

* Over 12 years of experiences in Development
* Former Senior Software Engineer in Alibaba
* Core Developer of Wetez and StaFi.io

### Team Code Repos

* <https://github.com/subdao-network>

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
* **Total Costs:** 15,000 USD

### Milestone 1  - The first usable version

* **Estimated Duration:** 2 month
* **FTE:**  2
* **Costs:** 15,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | MIT |
| 0b. | Documentation | We will provide a basic tutorial that explains how to use. |
| 0c. | Testing Guide | We will provide a testing guide on how to test it. |
| 0d. | Article | We will publish an article describing our ideas. |
| 1a. | PolkaSign Client | PolkaSign Client will be implemented as web app. |
| 1b. | PolkaSign Smart Contract | PolkaSign Smart Contract will be implemented with ink!. The Unit tests of contracts will be included. |
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
