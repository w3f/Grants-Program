# ventur-dapps

- **Team Name:** Popular Coding LLC.
- **Payment Address:** 0x20078c2CC9A0eF5c9BF238190349775d4862221A (usdc) [ens: **popcode.eth**] 
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 3


## Project Overview :page_facing_up:

This application is a follow-up grant to the [Ventur grant application](https://github.com/w3f/Grants-Program/blob/master/applications/ventur.md) which was [pr #1126](https://github.com/w3f/Grants-Program/pull/1126).

### Overview

Under the previous [Ventur grant](https://github.com/w3f/Grants-Program/blob/master/applications/ventur.md), our team developed an MVP of Ventur, creating Substrate modules for RFP, Scheduled Payment, Escrow, and Non-Transferable NFT (NT-NFT) functionality.

This grant builds on top of that work, implementing User Interfaces for 2 core usecases of the NT-NFT pallet.

The 2 dApps we want to target for this grant are:

* Ventur Verified - A dApp for creating, accepting, and managing credentials and certifications.

* Ventur Subscribed - A dApp for creating subscriptions with an interface for subscribing.

Each dApp will be developed as a React application using the substrate frontend template as a starting point.

For the Ventur Subscribed dApp, we will build out an additional subscription substrate pallet which will be coupled with the existing NT-NFT pallet.

These UIs will initially run against the Substrate based Ventur testnet, with the goal to have Ventur secure parachain slots on Kusama (AdVentur) and Polkadot (Ventur).

Our Team is interested in developing these dApps because we believe they are effective use cases for the core Ventur substrate pallets we developed in our first grant. These dApps will serve as both demos of the use cases that Ventur supports, but also as open source templates for any developers interested in building dApps on Ventur. We believe that both dApps showcase a category of apps that developers can customize to create market-specific offerings.

To further facilitate developer adoption and use, we want to create a developer hub for Ventur as part of this grant.  The developer hub will serve as a central portal for linking to resources like the Ventur pallet documentation, our Ventur node repository on GitHub, and to sample UI implementations for Ventur like the Credentialing and Subscription dApps.

In addition to the UI deliverables, this grant will provide an opportunity for our team to further refine the Ventur Substrate pallets, as we find opportunities to improve their usability based on dApp usage.

### Project Details


#### Technology Stack
![Tech Stack](https://github.com/Popular-Coding/ventur-verified/raw/main/media/ventur-stack.png)

#### User Flow Diagrams
**Credentialing**
![Credentialing User Flow Diagram](https://github.com/Popular-Coding/ventur-verified/raw/main/media/ventur-verified-flow.jpg)

#### Mockups/designs of any UI components

##### Credentialing UI
**User Profile - List Credentials**
![Profile - List Credentials](https://github.com/Popular-Coding/ventur-verified/raw/main/media/ui/profile.png)
**Credential Admin - List Credentials**
![Admin - List Credentials](https://github.com/Popular-Coding/ventur-verified/raw/main/media/ui/manage.png)
**Credential Details**
![Credential Details](https://github.com/Popular-Coding/ventur-verified/raw/main/media/ui/badge.png)
**Create Credentials**
![Create Credentials](https://github.com/Popular-Coding/ventur-verified/raw/main/media/ui/create.png)

#### Scope

- The UIs will target compatibility with Firefox and Chrome browsers.  Ensuring compatibility with other browsers is outside the scope of this grant proposal.
- The UIs will optimize for desktop browsers as the target audience.  Mobile should support all functionality, but this grant does not commit to the effective responsive design of the mobile layout.
- The UIs will be integrating with Polkadot.js for wallet integration.  Support for other wallets is outside the scope of this grant proposal.
- The DevHub Site will be hosted on a centralized cloud provider.
- The UIs will be deployable locally, but this grant does not commit to having live hosted versions at time of completion (due to dependency on a live testnet).

### Ecosystem Fit

  

Help us locate your project in the Polkadot/Substrate/Kusama landscape and what problems it tries to solve by answering each of these questions:

- Where and how does your project fit into the ecosystem?  
dApps for a Substrate blockchain that is working towards bringing parachains to Kusama and Polkadot.

- Who is your target audience (parachain/dapp/wallet/UI developers, designers, your own user base, some dapp's userbase, yourself)?  
dApp developers and our own user base

- What need(s) does your project meet?  
Direct - Credentialing, Authentication, Certification and Subscriptions

- Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?  
Projects like Kilt and Litentry have delivered solutions around verified identity.

- If so, how is your project different?  
Our project focuses closely on verified technical credentials and on-chain certification/accredidation and how that enables professional engagement usecases which has not been a key focus for the other projects looking at tieing data to identities.




## Team :busts_in_silhouette:

  

### Team members

  

- Name of team leader  
Patrick Gryczka

- Names of team members  
GinSiu Cheng  
Maciej Zielonka  
Joseph Murawski  

  

### Contact

  

- **Contact Name:** Patrick Gryczka
 
- **Contact Email:** patrick@popularcoding.com

- **Website:** popularcoding.com

  

### Legal Structure

  

- **Registered Address:** 8 The Green STE D Dover, DE 19901

- **Registered Legal Entity:** Popular Coding LLC.

  

### Team's experience

  


The Popular Coding team delivers a combination of enterprise engineering experience, development talent, and operational excellence.  Team members have worked at major tech companies like Microsoft, AWS, and Meta, and cutting-edge startups like Sooryen Technologies and Blue Voyant.

In the Substrate space, the team has built out the core functionality for the Ventur Network, a Substrate based blockchain, and is working to enable Business Processes and Professional Engagement for the Polkadot ecosystem.
​

 
**Patrick Gryczka**
 
Patrick is a Solutions Architect at Amazon Web Services. He designs and implements distributed systems using cloud services and creates prescriptive guidance and best practices for enterprises using AWS. Before joining AWS, Patrick worked at Microsoft, where as a Cloud Solution Architect he worked as a trusted advisor for strategic customers. Working in the enterprise cloud provider space, Patrick has developed core competencies in serverless development, DevOps, and engineering project management.
 
At the start of his career, Patrick worked as a Software Engineer with the consulting startup Sooryen Technologies. He designed and delivered cloud-based analytics and machine learning workloads for e-commerce customers, bringing prediction and recommendation functionalities to production for companies like 1-800-Flowers.  Patrick also worked with the Fennel Labs team on [Supply Mesh](https://devpost.com/software/supply-mesh), a dapp designed for the Hack the Crisis Denmark Hackathon in 2020.  
 
 
 
**GinSiu Cheng**  
 
Gin is a customer success and cloud engineering leader at Microsoft Financial Services with a proven track record in helping customers execute  multi-year cloud transformations for mission-critical applications (totaling $XXX million per year) and deliver on targeted business outcomes. As a senior principal architect, he shapes FSI customers’ cloud adoption strategies and journeys, defines technical architecture and implementation, drives Azure platform improvements and new features with Azure engineering teams, and assembles and leads large scale teams (50+) to tackle the toughest problems.
 
Prior to joining Microsoft, Gin held various roles ranging from cloud practice lead and software engineer at a consulting startup (acquired by Encora) to cybersecurity researcher and data scientist in academic, startup and enterprise settings with demonstrated implementation experience across all major cloud vendors (Azure, AWS and GCP).
 
Areas of expertise: Infrastructure Modernization, Application Development, Site Reliability Engineering, DevOps, Data Engineering and Analytics, and Cybersecurity
 
**Maciej Zielonka**
 
Maciej is a software engineer working for the Messenger organization at Meta, Inc. His product infrastructure team sits at the intersection of backend and frontend needs, providing scalable solutions and APIs for product developers. The team optimizes reliability, performance, and quality of experience for users as it integrates new features into the Messenger infrastructure. Maciej graduated from Yale in May 2021 with a B.S. in Computer Science, where his coursework focused on Machine Learning, Data Science, Operating Systems, and Quantum Computing. His senior project with Brian Scassellati’s Social Robotics Lab developed machine learning models that could classify children’s engagement in an activity or conversation using auditory signals. He was also a member of Code Haven, a student-run organization that taught introductory computer science lessons to public elementary schools in New Haven. During his time at Yale, Maciej interned at Facebook, Inc., where he worked with Facebook’s continuous deployment team,  using the Rust programming language, Maciej built a service capable of deploying Widely Distributed Binaries to Facebook’s development machines. Maciej also interned at Amazon in Wrocław, Poland as a robotics intern, where he actively maintained and repaired Amazon’s automated systems, and contributed new automated solutions to everyday problems at Amazon’s warehouses.
 
**Joseph Murawski**
 
Joseph Murawski is a Cloud Security Engineer working for BlueVoyant.  Joseph brings 15 years of experience in Cyber Security and System Operations Management.  
In his current role, he works in security operations. He designs and implements security solutions in a challenging multi-cloud environment for a world-class security company. 
Previous roles include designing and executing IT systems for multi-billion-dollar construction projects. Technical business liaison, responsible for strategically implementing new technology solutions that improve business efficiency while meeting corporate business goals.


### Team Code Repos

  

- https://github.com/Popular-Coding/ventur

- https://github.com/Popular-Coding/ventur-verified

  

Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine.

  
- https://github.com/Gryczka
- https://github.com/GinSiuCheng
- https://github.com/maciekzielonka
- https://github.com/d-z-o

  

### Team LinkedIn Profiles (if available)

  

- https://www.linkedin.com/in/gryczka/
- https://www.linkedin.com/in/ginsiucheng/
- https://www.linkedin.com/in/maciej-zielonka-b83b7a230/
- https://www.linkedin.com/in/joseph-murawski/

  

## Development Status :open_book:

The Subscription Substrate pallet will be developed as part of the existing [Ventur](https://github.com/Popular-Coding/ventur) repository.  The NT-NFT pallet that this grant's UI work will be interacting with also resides in the Ventur repository, and any updates/refinements to the NT-NFT pallet will be committed to that repository.

The Credentialing dApp currently has a pre-existing repository ([Ventur Verified](https://github.com/Popular-Coding/ventur-verified)) that has mock ups and high level documentation for the dApp, but does not yet have a functional MVP beyond basic connectivity to Ventur from the Substrate Front-End template.


## Development Roadmap :nut_and_bolt:

  

This section should break the development roadmap down into milestones and deliverables. To assist you in defining it, we have created a document with examples for some grant categories [here](../docs/grant_guidelines_per_category.md). Since these will be part of the agreement, it helps to describe _the functionality we should expect in as much detail as possible_, plus how we can verify and test that functionality. Whenever milestones are delivered, we refer to this document to ensure that everything has been delivered as expected.
  

### Overview

  

- **Total Estimated Duration:** 4 months

- **Full-Time Equivalent (FTE):** 4 FTE

- **Total Costs:** 100,000 USD

  

### Milestone 1 - Credentialing UI for NT-NFT Pallet

  

- **Estimated duration:** 1.5 month

- **FTE:** 4

- **Costs:** 35,000 USD

  

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | GPLv3 |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can spin up a Ventur node and the Credentialing React app and send test transactions, which will show how the credentialing functionality works. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1. | React dApp: Credentialing | A React application that will provide a central hub for viewing, managing, and maintaining NT-NFTs as credentials. Admins will be able to assign NT-NFTs, while users will be able to demonstrate their credentials. |
| 1a. | React dApp Functionality: Integration with IPFS | NT-NFT metadata will be stored in IPFS from the front-end. A key feature of our dApp will be the ability to fetch files from and upload them to IPFS when interacting with NT-NFT metadata |
| 1b. | React dApp Functionality: List and View Administrated Credentials | Admins will be able to list all the NT-NFTs they oversee in a central page |
| 1c. | React dApp Functionality: List and View Assigned Credentials | Users will be able to display all the NT-NFTs they own on their profile page |
| 1d. | React dApp Functionality: Create Credentials | Admins will be able to create NT-NFTs from their hub. They'll be able to specify the credential image, name, and description, as well as supplemental metadata such as skills associated with the Credential |
| 1e. | React dApp Functionality: Assign/Accept Credentials | Admins will be able to assign Credentials to users, and users in turn will be able to accept them, confirming ownership of the NT-NFT |
| 1f. | React dApp Functionality: Discard Credentials | To empower users, we'll give them the ability to discard credentials, as well |
| 2. | React dApp: Credential Gating | An example react page that will show how to gate content for viewers with a specific NT-NFT Credential|
  
  

### Milestone 2 - Subscription Pallet and Subscription UI for NT-NFT Pallet

  

- **Estimated Duration:** 2 month

- **FTE:** 4

- **Costs:** 55,000 USD

 | Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | GPLv3 |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can spin up a Ventur node and the Subscription React app and send test transactions, which will show how the subscription functionality works. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1. | Substrate module: Subscription | We will create a Substrate module that allows credentialing managers to set up subscription models for their NT-NFTs. Users subscribing to the NT-NFTs will be able to issue scheduled payments, and in return, credentialing managers will assign NT-NFTs to their subscribers. |
| 2. | React dApp: Subscription | A React application that will serve as a hub for subscribing to NT-NFT providers |
| 2a. | React dApp Functionality: List and View Administrated Subscriptions  | Admins will be able to view and maintain their managed subscriptions |
| 2b. | React dApp Functionality: List and View Subscriptions  | Users will be able to view and maintain which subscriptions they have set up |
| 2c. | React dApp Functionality: Create Subscriptions  | Admins will be able to create subscription models for NT-NFTs |
| 2d. | React dApp Functionality: Subscribe | Users will be able to initiate subscriptions to the credentialing service of their choice |
| 2e. | React dApp Functionality: Cancel Subscription | Users will be able to manage and cancel their subscriptions |
| 3. | React dApp: Subscription Gating | An example react page that will show how to gate content for viewers with a specific NT-NFT Subscription|


### Milestone 3 - MVP Ventur Developer Hub

  

- **Estimated Duration:** .5 months

- **FTE:** 4

- **Costs:** 10,000 USD


| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | GPLv3 |
| **0b.** | Documentation |  We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can spin up a Ventur node and the Credentialing and Subscription React app and send test transactions, which will show how the new functionality works. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an **article**/workshop that explains the features and functionality of both dApps. |
| 1. | Website: Ventur Developer Hub | We will create an open source Developer Hub that will point to Ventur related resources.  Specifically, Ventur pallets, documentation, and example dApps. |

 
  


## Future Plans  

Our Team intends to maintain and extend these apps as dApps for the Ventur Network.


Long term they will serve as both flagship use cases for Ventur, and means of user feedback on our Ventur chain and the functionalities and features of our core Substrate pallets.

For the Ventur developer hub, we intend to maintain it and list additional resources as we develop them.

## Additional Information :heavy_plus_sign:


**How did you hear about the Grants Program?** 
personal recommendation

  

Here you can also add any additional information that you think is relevant to this application but isn't part of it already, such as:

  

- Work you have already done.
	- Ventur Network - https://github.com/Popular-Coding/ventur
	- Ventur Verified dApp (mainly mockups and interface designs so far) - https://github.com/Popular-Coding/ventur-verified

- If there are any other teams who have already contributed (financially) to the project.
	- None

- Previous grants you may have applied for.
	- https://github.com/w3f/Grants-Program/pull/1126
