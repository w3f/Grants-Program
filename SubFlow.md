# SubFlow: Web3 microblogging smart-service

- **Team Name:** deus4
- **Payment Address:** 11oj3RchYvUPxLdfRoCa1Q6V6kFTfSikVSAcpe56sk8f8z4 POLKADOT
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:


Empowering Connections on the Decentralised Web: SubFlow, Your Smart Social Network.

### Overview

SubFlow aims to develop a decentralised social media platform that empowers users with control over their data and interactions. It will offer a seamless experience for sharing multimedia content, engaging with other users through such interactions as "likes" and comments, and conducting direct token transfers. 

SubFlow will be developed as a set of Smart Services, providing users the ability to interact with other users through communication, as well as interact with other services in the Polkadot ecosystem based on an open API: marketplaces (showcasing, buying, and selling NFTs), DeFi services (buying and exchanging tokens), games (authorisation, messaging), and so on.
SubFlow will redefine how users connect, communicate and monetise their content while respecting their privacy and ownership rights. 


### Project Details

The system consists of two parts:

- **The client application (webApp)** provides convenient access to the functionality of the system core for the user.

- **The system core** is a set of smart contracts deployed on the blockchain, which store data and implement rules of user interactions.

The functionality of the system can be divided into three logical user roles:

- Reader functionality
- Author functionality
- System administrator functionality
  

The functionality of the author and system administrator will require user authorisation in the system (administrating functionality will be transferred to the DAO-smart service for community governance in the future).

### Structure 

SubFlow is a fully decentralised application based on SmartSOA (smart service-oriented architecture), it's core smart servies include:
- **DNS** <br>Maps user names to their corresponding addressed for personal smart services.
- **Registration Service** <br>Registers new users with DNS and sets up their personalised smart services.
- **User Smart Services** <br>Store, manage, and enable user data interaction.
<br>  
Other Smart-Services provide additional functionality, for example:
- **Advertising Service** <br>Enables advertisers to create and run campaigns on SubFlow, rewarding users who share their content according to set rules.
- **Donation Service** <br>Allows system users to financially support content creators they find interesting directly.
- **NFT Markeplace Service** <br>Facilitates the direct sale of NFTs creaated by authors on SubFlow.


![v1](https://github.com/w3f/Grants-Program/assets/21257942/77951903-aef0-44bc-a70f-1bb3c3ad2527)

- ink! Smart Contracts
- Substrate
- All code produced will be open-sourced under the MIT license
- There are no plans for issuing a dedicated token at the moment


### Ecosystem Fit

Decentralised social networks are resistant to censorship. As the number of regions where internet censorship is a concern is not decreasing (in fact, we see opposite processes going on), we believe that SubFlow as a product will have a possibility to expand the user base of the Polkadot ecosystem.<br>
In short (kind of), generally speaking, a decentralised free social network is important because it expands the ecosystem's use cases, increases user engagement, highlights cross-chain interoperability, aligns with principles of privacy and data ownership, fosters community and governance, drives innovation in Substrate, and provides a censorship-resistant platform.

## Team :busts_in_silhouette:

### Team members

- Core Team:
    - **German Korjagin**
    - **Sergei Pangin**
    - **Slava Puganov**
- Advisory Board:
    - **Oliver Fohrmann**

### Contact

- **Contact Name:** German Korjagin
- **Contact Email:**  g.ko@deus4.com
- **Company Website:** https://deus4.com

### Legal Structure

- **Registered Address:** Lastekodu 41/1, Tallinn, Estonia 10113
- **Registered Legal Entity:** deus4.com OÜ

### Team's experience

- **German Korjagin** <br>15 years of experience in data science, analytics, software and business development. Expertise in cyber security, digital payments and analytics. Proficient knowledge of blockchains and DAGs.<br>

- **Sergei Pangin** <br>Backend developer from Java's first release (1996). Soon-30 years of experience in legacy software, blockchains and other DLTs like IOTA. Proficient in legacy software and financial services development, with in-depth knowledge of IOTA, Ethereum, and Tezos platforms.

- **Slava Puganov** <br> Adaptable Full-Stack developer specialising in front-end and back-end development. Expertise in fintech, cyber security and
software architecture, ensuring robust and secure software solutions.<br>

- **Oliver Fohrmann** <br> Oliver is the team's Rust, ink! and Polkadto development technical advisor.<br> Blockchain and DAG engineer and developer with experience in Ethereum, IOTA and Polkadot. Expertise in cyber security, MedTech and software architecture.<br>

### Team Code Repos

- https://github.com/deus4<br>
- https://github.com/opdev3<br>
- https://github.com/opdev7<br>
- https://github.com/vendev1<br>

### Team LinkedIn Profiles

- https://ee.linkedin.com/in/german-korjagin-833ab8236

## Development Roadmap :nut_and_bolt:

The team plans to release the system sequentially in two versions:<br>

- **Demo Version (Alpha Release):** includes implementation of the main functionality of the system for readers, authors, and system administrators, which will allow functionality testing for each user role and obtaining initial feedback from test users.<br>

- **Release Version:** includes enhanced functionality from the alpha release and additional features for all user roles. Administrator functionality will be significantly limited in terms of interaction with user data for reader and author roles.<br>

### Overview


- **Total Estimated Duration:** 3 months
- **Full-Time Equivalent (FTE):**  2.5 FTE
- **Total Costs:** 30,000 USD


### Milestone 1 — Release Version

- **Estimated duration:** 3 months
- **FTE:**  2.5 FTE
- **Costs:** 30,000 USD


| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License |  MIT  |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** on a  website that explains how a user can spin up and use the service, which will show how the functionality works. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an **article**/workshop that explains [...] (what was done/achieved as part of the grant). (Content, language and medium should reflect your target audience described above.) |
| 1. | Substrate module: X | We will create a Substrate module that will... (Please list the functionality that will be implemented for the first milestone. You can refer to details provided in previous sections.) |
| 2. | Substrate module: Y | The Y Substrate module will... |
| 3. | Substrate module: Z | The Z Substrate module will... |
| 4. | Substrate chain | Modules X, Y & Z of our custom chain will interact in such a way... (Please describe the deliverable here as detailed as possible) |
| 5. | Library: ABC | We will deliver a JS library that will implement the functionality described under "ABC Library" |
| 6. | Smart contracts: ... | We will deliver a set of ink! smart contracts that will...


## Future Plans

1. **Registration Smart-service (working title - identikit);** <br>
- NFT/SBT user account-profile functionality development;
- Plug-and-play system development for the purpose of integrating different services within the Polkadot ecosystem;
- Separating the functionality into a standalone service (working title - “identikit");
- Creation of API tools for third-party developers to interact with the service;
- Audit of the service;
- Opensource’ing it all.

2. **New SubFlow structure.** <br>
- Personal service-contract: 
  - Implementing a separate user-specific smart contract to enable decentralised data processing and ownership. Users will have control over their data and can assign roles to others, customising their service according to their needs;
  - This will enhance security and facilitate future feature development.
- SubSocial and SubSquid support:
  - Development and launch of API for interacting with other blockchain services such as SubSocial;
  - Providing easy access to data on the blockchain by supporting the SubQuery.

3. **New functionality:** <br>
- NFT-posting (possibility to mint NFT-post (text, images, etc.) directly from the user's personal service contract.
- Extended functionality for token transfers.;
- Advertising smart service development for the direct interaction between creators and advertisers;
- Encrypted direct messaging similar to DMs on Twitter… 
  - …In case of an apocalypse or failure of conventional messenger servers, a user will still be able to send messages through the decentralised Polkadot blockchain :)
- User interface web updates.

