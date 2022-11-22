# Dot Marketplace

- **Status:** Open
- **Project Name:** Dot Marketplace
- **Team Name:** Wow Labz  
- **Payment Address:** 0xF13001401396AA866E8012f31fD939C7E83B8601  
- **Level:** 2  

## Project Overview :page_facing_up:

### **Overview**

Dot Marketplace is a general purpose decentralised marketplace created as a Substrate pallet.

- Dot Marketplace can be used by any decentralised project to float tasks and invite their community members to execute them for a reward. Its POC was developed during the Polkadot India buildathon (2021).  
- It would be directly integrated in Polkadot JS Apps where such marketplaces could be used to create bounties and tasks that could be fulfilled by community members.
- The inspiration for Dot Marketplace emerged from our own needs while building Yoda - a protocol that facilitates decentralised app development leveraging open data. Dot Marketplace would be used to create data, services and app marketplaces on Yoda, which would motivate us to maintain this project in the long run.

### **Project Details**

The current scope of work involves two user types: **Customer** and **Service Provider (or Worker)**

- The Customer can post a task and invite bids from Service Providers to fulfill it.
- The Customer needs to deposit the budgeted amount in an escrow for the task to be published.
- The Service Provider needs to deposit some token to participate in a bid. If not shortlisted, this bid amount is returned.
- The Service Provider completes the task and submits it.
- The Customer accepts the work and the escrowed amount is credited to the Service Providers wallet.
- The Customer rates the Service Provider and visa versa.

NOTE: If the Customer doesn't accept the work, a dispute is raised and it gets resolved in a decentralised court (out of current scope) which will be implemented in the next phase.

The following diagrams highlight the workflow:

Customer
:-------------------------:
<img src = "https://user-images.githubusercontent.com/11945179/125753620-e1b094dc-552e-4a4f-9826-23cbefe3a677.png" width="600" />

Service Provider (Worker)
:-------------------------:
<img src = "https://user-images.githubusercontent.com/11945179/125753635-1cc3170e-7a19-410e-a350-93f75a10e93f.png" width="600" />

Dot Marketplace is being built as a Substrate pallet. It would include boilerplate code that parachain teams can customize as per their own requirements. We believe this project has the potential to transform community participation, engagement and governance in decentralized projects.

Dot Marketplace will also include frontend UI built on top of the `substrate-front-end-template`, here is a snapshot of the same

### **Repository Hierarchy**

```
├── Dot Marketplace Network Node [link](https://github.com/WowLabz/tasking_backend)
│   ├── ./node ["Chainspecs for Node"]
│   ├── ./scripts [Packaging & Deployment Scripts]
│   ├── ./pallets/pallet-tasking [Pallets]
│   │     └── ./pallet-tasking 
│   │             └── ./src/lib.rs [Tasking Pallet (being implemented)]
│   └── ./runtime [Runtime Module]
│         └── Included custom Tasking Pallet

```

The current focus is to enhance the existing Substrate pallet and allied code base to get a basic yet functional marketplace up and running:

### **Ecosystem Fit**

We believe this work could be useful for: [Polkadot](https://polkadot.network/), [Kusama](https://kusama.network/), [Moonbeam](https://moonbeam.network/) and any Polkadot parachains/ parathreads interested in including a marketplace.

- Almost all Parachains/ parathreads would find motivation in encouraging their community members to contribute meaningfully to their roadmap. This can be achieved by utilising a marketplace like Dot Marketplace where technical, marketing or governance centric tasks can be published. And community members are invited to bid for and exectute them.

**List of Competitors**

Any product or services marketplace would qualify, here are some examples from outside the Polkadot/Kusama ecosystem.

1. [Human Protocol](https://www.humanprotocol.org/)
2. [Effect Network](https://effect.ai/)
3. [Ocean Protocol Market](https://market.oceanprotocol.com/)

## **Team** 👥

### **Team members**

- Amit Singh (product manager)
- Roshit Omanakuttan (technical architect)
- Varun Gyanchandani (backend lead)
- Loakesh Indiran (full stack dev)
- Siddharth Teli (backend dev)
- Bharath Kumar (tester)
- Smita Ashok (tech content writer)

### Contact

- **Contact Name:** Amit Singh
- **Contact Email:** amit (dot) singh (@) wowlabz.com
- **Website:** [http://www.wowlabz.com](https://www.wowlabz.com/)
- **Project Website** Dot marketplace website is under construction

### **Legal Structure**

- **Registered Address:** Wow Labz, 2Gethr Cowork, Tower B, Mantri Commercio, Outer Ring Rd, Bellandur, Bengaluru, Karnataka, India 560103
- **Registered Legal Entity:** Wow Internet Labz Private Limited

### **Team's experience**

Dot Marketplace is being built by the team at Wow Labz.
Wow Labz is one of India&#39;s leading turnkey product development companies.
Yoda Protocol has been conceptualised and is being built by the team at Wow Labz. The team has previously built a decentralised storage protocol called Lake Network - [https://lakenetwork.io/](https://lakenetwork.io/) in addition to multiple dApps on Ethereum, Stellar, EOS and Hyperledger.

A list of centralised apps published can be found [here](https://www.wowlabz.com/work/).

### **Team Code Repos**

- [https://github.com/orgs/WowLabz/projects](https://github.com/orgs/WowLabz/projects)
- [https://github.com/WowLabz/tasking\_backend](https://github.com/WowLabz/tasking_backend)
- [https://github.com/WowLabz/tasking\_frontend](https://github.com/WowLabz/tasking_frontend)

### **Team LinkedIn Profiles**

Profiles of the people working actively on Dot Marketplace

- [Amit Singh](https://www.linkedin.com/in/startupamit/)
- [Roshit Omanakuttan](https://www.linkedin.com/in/roshit/)
- [Varun Gyanchandani](https://www.linkedin.com/in/varunsays/)
- [Siddharth Teli](https://www.linkedin.com/in/siddharthteli/)
- [Loakesh Indiran](https://www.linkedin.com/in/loakesh-indiran-8a2282140)
- [Bharath Kumar](https://www.linkedin.com/in/bharath-kumar-h-13a572126/)
- [Smita Ashok](https://www.linkedin.com/in/smita-ashok-823631175/)

## Development Status :open_book:

Dot Marketplace POC was conceptualised and developed during the Polkadot India hackathon. The roadmap listed below comprises of new features that would help take the POC to a minimum viable product (MVP).

- Here's a link to our [Polkadot India Submission Video](https://youtu.be/xQNOkXQdDnQ)
- We are in touch with Marcin and Raul from the Web 3 Grants and Treasuries team respectively

## **Development Roadmap**🔩

The development of Dot Marketplace is already underway.
For the custom pallet (tasking) we are:

1. Using various Substrate provided traits like - `Currency`, `ExistenceRequirement`, `LockIdentifier`, `LockableCurrency`, `ReservableCurrency` and few more;
2. Using the pre-existing pallets like `assets`, `balances` and `staking`;
3. Implementing custom structs like `TaskDetails` and `TransferDetails`. These in turn are used for various functionalities like `create_task`, `bid_task`, `complete_task` and `approve_task`. A special transfer money function is only initiated once the task cycle gets completed and the escrow funds are released to the worker.

All the below mentioned milestones are going to be implemented and this application is going to be fully public.
  
NOTE: A barebones UI would also be provided as a part of this submission to help the developer experience the functionality

![DotMarketplaceU](https://user-images.githubusercontent.com/4363536/129244239-c843d1c7-477f-48b0-8d65-068bd6df9661.gif)

### Overview

- **Total Estimated Duration:** 2 months
- **Full-Time Equivalent (FTE):**  5.9125
- **Total Costs:** 18,920 USD (half of the development fee is financed by Yoda)

### **Milestone 1**

- **Estimated duration:** 2 weeks
- **FTE:**  1
- **PTE:**  4
- **Costs:** 3,220 USD    // rest is funded by Yoda  

The main deliverable for this milestone will be to allow a user to register via a registration form and link her wallet account along with role based switching from Service Provider view to Customer view and visa versa.

| Number        | Deliverable   | Specification  |
| :-------------|:-------------:| :--------------|
| 0a      | License | Apache 2.0         |
| 0b      | [Documentation](https://github.com/WowLabz/tasking_backend) | We will provide both inline documentation of the code and a tutorial that explains how a user can use DOT Marketplace and understand the flow of tasking pallet.         |
| 0c      | Testing Guide | Functions will be covered by unit tests, the documentation will describe how to run these tests. We will also provide scripts to help deploy, run and test the build.  |
| 0d      | Docker Image | Docker image of the build |
| 1      | Registration Module | Form based user registration         |
| 2      | Wallet Linking | Support for user to link their Math wallet, Guarda wallet or Polkadot Js apps with the account.     |
| 3      | Profile Module | Support for role based screens to ease the usability for users  |
| 4      | Frontend App | Supporting frontend UI to test the aforementioned functionality   |

### **Milestone 2**
  
- **Estimated duration:** 3 weeks
- **FTE:**  2
- **PTE:**  4
- **Costs:** 7,440 USD    // rest is funded by Yoda  

In continuation to the previous work, we will be working on a rating system for both Customer and Service Provider. This rating will eventually be the motivating factor for performance in the network. It would also help in designing incentives in future.

| Number        | Deliverable   | Specification  |
| :-------------|:-------------:| :--------------|
| 0a      | License | Apache 2.0         |
| 0b      | [Documentation](https://github.com/WowLabz/tasking_backend) | We will provide both inline documentation of the code and a tutorial that explains how a user can use DOT Marketplace and understand the flow of tasking pallet.         |
| 0c      | Testing Guide | Functions will be covered by unit tests, the documentation will describe how to run these tests. We will also provide scripts to help deploy, run and test the build.  |
| 0d      | Docker Image | Docker image of the build |
| 1      | Rating Module | Support for profile based rating using substrate balances, treasury and staking pallets to be integrated with our custom tasking pallet to weigh the user's performance and rewards based rating system.          |
| 2      | Programmatic Wallet Transfer | Substrate based Smart Contract transfer function for programmatic/automated transfer of tokens from one application/user to the other.         |
| 3      | Asset Restrictions | Support for the locking of assets by time         |
| 4      | Frontend App | Supporting frontend UI to test the aforementioned functionality   |

### **Milestone 3**
  
- **Estimated duration:** 3 weeks
- **FTE:**  2
- **PTE:**  5
- **Costs:** 8,260 USD    // rest is funded by Yoda

The deliverable for this milestone is that we will be providing a multi user scenario to test the functionality and integrate with storage and backend APIs for multipart data to be uploaded and downloaded.

| Number        | Deliverable   | Specification  |
| :-------------|:-------------:| :--------------|
| 0a      | License | Apache 2.0         |
| 0b      | [Documentation](https://github.com/WowLabz/tasking_backend) | Documentation of the entire pallet, a guide for developers forking the project including FAQ
| 0c      | Testing Guide | Functions will be covered by unit tests, the documentation will describe how to run these tests. We will also provide scripts to help deploy, run and test the build.  |
| 0d      | Docker Image | Docker image of the build |
| 1      | Multiuser Module | Support for multiple Substrate seed users to test the functionality and make the task based transactions as per the Status mentioned. Substrate based Lockable currency for reserving user funds and allowing the escrow unlock after the approved status.         |
| 2      | Tagging Module | Support for smart tags with the user profiles for programmatic track/domain alignment in the future        |
| 3      | File Transfer Module  | API connections to cloud storage async upload/download of small files via Rocket      |
| 4      | Frontend App | Supporting frontend UI to test the aforementioned functionality   |
| 5      | Website | Dedicated one page website for Dot Marketplace |  
| 6      | Article | Website article sharing the motivation behind Dot Marketplace and how to make best use of it      |

### **Additional Project Details**

- Technology stack being used
  - Rust, Substrate, React, Python, centralised cloud storage

### **Future Plans**

Future releases of the Dot Marketplace include:

| Phase        | Deliverable   | Specification  |
| :-------------|:-------------:| :--------------|
| 2      | Decentralised Court | A fully decentralised dispute resolution mechanism along with configurable rules for slashing and reputation.          |
| 3      | Milestone based submissions | Making provisions to breakdown a project into multiple configurable milestones to allow parallel or sequential execution        |
| 4     | Decentralised Storage | Integration with IPFS or another decentralised storage platform        |

###

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation Website, Polkadot India Buildathon

- We have been working on this roadmap since we applied for the Web3 grant
