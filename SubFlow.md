# SubFlow: Web3 microblogging Smart Service

- **Team Name:** deus4
- **Payment Address:** 11oj3RchYvUPxLdfRoCa1Q6V6kFTfSikVSAcpe56sk8f8z4 POLKADOT
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:


Empowering Connections on the Decentralised Web: SubFlow, Your Smart Social Network.

### Overview

With the growth of the Democratic deficit, the rise of autocracy and the total disability of the overgrown bureaucracy all over the world, the same trends are evident in the structure of the internet and today's social media platforms.

SubFlow aims to develop a decentralised social media platform that empowers users with control over their data and interactions. The protocol will be distinguished from other platforms by its foundation of decentralised ownership and censorship resistance. It will offer a seamless experience for sharing multimedia content, engaging with other users through such interactions as "likes" and comments, and conducting direct token transfers. 

SubFlow will be developed as a set of Smart Services, providing users the ability to interact with other users through communication, as well as interact with other services in the Polkadot ecosystem based on an open API: marketplaces (showcasing, buying, and selling NFTs), DeFi services (buying and exchanging tokens), games (authorisation, messaging), and so on.


### Project Details

The system consists of two parts:

- **The client application (webApp)** provides convenient access to the functionality of the system core for the user.

- **The system core** is a set of smart contracts deployed on the blockchain, which store data and implement rules of user interactions.

The functionality of the system can be divided into three logical user roles:

- Author functionality
- Reader functionality
- System administrator functionality
<br>
<p align="center">
  <img src="https://github.com/deus4/KidsNotes/assets/21257942/17f1a838-787d-4a45-bb61-3fe460d5ad85">
</p>
<br> 
<p align="center">
<code>SubFlow: Use Case Diagram</code>
</p>
<br>

The functionality of the author and system administrator will require user authorisation in the system (administrating functionality will be transferred to the DAO-smart service for community governance in the future).

### Structure 

SubFlow is a fully decentralised application based on SmartSOA (smart service-oriented architecture), it's core smart servies include:
- **DNS** <br>Maps user names to their corresponding addressed for personal Smart Services.
- **Registration Service** <br>Registers new users with DNS and sets up their personalised Smart Services.
- **User Smart Services** <br>Store, manage, and enable user data interaction.

Other Smart Services provide additional functionality, for example:<br>  
- **Advertising Service** <br>Enables advertisers to create and run campaigns on SubFlow, rewarding users who share their content according to set rules.
- **Donation Service** <br>Allows users to financially support content creators they find interesting directly.
- **NFT Markeplace Service** <br>Facilitates the direct sale of NFTs created by authors on SubFlow.
- **Voting Service** <br>Allows users to participate in voting.
<br>
<p align="center">
  <img src="https://github.com/deus4/KidsNotes/assets/21257942/de8c5e64-449d-4bf1-958f-802cd3b64bb3">
</p>
<br>
<p align="center">
<code>SubFlow: Component Diagram</code>
</p>
<br>


### Technology Stack

- ink! Smart Contracts
- Rust
- Substrate
- IPFS
- html/css/js/frameworks for the frontend


### Ecosystem Fit

Decentralised social networks are essential for resisting censorship, especially in regions where internet freedom is threatened. The rising trend of such censorship is alarming. However, SubFlow aims to bolster the potential of the Polkadot ecosystem, enhance user engagement, promote cross-chain interoperability, and uphold privacy and data ownership.<br>

The SubFlow team has collaborated with [Subsquid](https://www.subsquid.io/) and [SubSocial](https://subsocial.network/) to gain a deeper understanding of the Polkadot ecosystem and determine SubFlow's compatibility within this space. We maintain regular communication with these partners regarding adjustments to the technological structure of the protocol and updates to the Grants Program application. Both Subsquid and SubSocial are essential to SubFlow's developmental roadmap.<br>

In addition to [Subsquid](https://www.subsquid.io/) and [SubSocial](https://subsocial.network/), we've identified other potential collaborators and are eager to begin engaging with them. We're confident that a decentralised future is possible only through the collaboration of decentralised teams and the automation of services. This understanding has driven our commitment to the concept of Smart Services within the Polkadot ecosystem, which is well-known for its autonomy, activity, and support for developers.<br>



## Demo: Web UI ##

<br>
<p align="center">
  <img width="640" height="625" src="https://github.com/w3f/Grants-Program/assets/21257942/8f388f7f-db2a-4751-8ebc-f722893cf900">
</p>

<p align="center">
<code>Feed wall view</code>
</p>
<br>


<p align="center">
  <img width="640" height="470" src="https://github.com/dappforce/subsocial-starter/assets/21257942/24a972b6-75e8-40f2-95d9-4cd3f7b1c85a">
</p>
<p align="center">
<code>User page view</code>
</p>
<br>

<br>
<p align="center">
  <img width="640" height="626" src="https://github.com/dappforce/subsocial-starter/assets/21257942/2a6b67ad-f454-49a8-87c9-78fa3e993d1e">
</p>

<p align="center">
<code>User edit profile view</code>
</p>
<br>

<br>
<p align="center">
  <img width="640" height="423" src="https://github.com/dappforce/subsocial-starter/assets/21257942/eee6a3b3-2763-49a9-816a-c34ade442210">
</p>

<p align="center">
<code>User profile</code>
</p>
<br>

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

- **Sergei Pangin** <br>Skilled and qualified software developer with 20+ years of experience and the practice of software design, project management and team leading,  proficient in financial services development, with in-depth knowledge of IOTA, Ethereum, and Tezos platforms.

- **Slava Puganov** <br> Adaptable Full-Stack developer specialising in front-end and back-end development. Expertise in fintech, cyber security and
software architecture, ensuring robust and secure software solutions.<br>

- **Oliver Fohrmann** <br> Oliver is the team's Rust, ink! and Polkadot development technical advisor.<br> Systems Architect and Engineer with experience in Ethereum, Solana, IOTA and Polkadot. Expertise in cyber security, MedTech and software architecture.<br>

### Team Code Repos

- https://github.com/deus4<br>
- https://github.com/opdev3<br>
- https://github.com/opdev7<br>
- https://github.com/vendev1<br>
- https://github.com/HelixNetwork/pendulum<br>

### Team LinkedIn Profiles

- https://ee.linkedin.com/in/german-korjagin-833ab8236

## Development Roadmap :nut_and_bolt:

The team plans to release the system sequentially in two versions:<br>

- **Beta Release:** Includes implementation of the main functionality of the system for readers, authors, and system administrators, which will allow functionality testing for each user role and obtaining initial feedback from test users.<br>

- **Release Version:** This release will include enhanced functionality from the beta release, with additional features for all user roles. Administrator functionality will be limited in terms of access to user data for the reader and author roles. Full documentation will be provided and the final product will be a fully operational dApp.<br>

### Overview


- **Total Estimated Duration:** 3 months
- **Full-Time Equivalent (FTE):**  3.5 FTE
- **Total Costs:** 30,000 USD


### Milestone 1 — Beta Release

- **Estimated duration:** 2 months
- **FTE:**  4 FTE
- **Costs:** 20,000 USD


| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License |  MIT  |
| 0b. | Documentation |  We will provide the documentation of the code and a basic tutorial, which will show how the functionality works.  |
| 0c. | Testing and Testing Guide | Core functions will be covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 1. | System design | Definition of the various components of the service will interacting with each other, data  storage, and how users will be able to interact with the system. A detailed technical roadmap for how the systems we build. |
| 2. | User registration and user profile | The ability to create and customise a user profile, which is one of the core features of the present and future product roadmap. |
| 3. | Posting functionality | This functionality allows users to write and publish posts. |
| 4. | Interactive posting interactions | Functionaltity for interactions with posts, such as *comments*, *reposts* and *likes*. |
| 5. | System users interaction | Basic functionality for direct interactions between users, such as *search* and *follow*. |

### Milestone 2 — Release Version

- **Estimated duration:** 1 months
- **FTE:**  3 FTE
- **Costs:** 10,000 USD


| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License |  MIT  |
| 0b. | Documentation |  We will provide the documentation of the code and a basic tutorial, which will show how the functionality of the second milestone works.  |
| 0c. | Testing and Testing Guide | Core functions will be covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Article | We will publish an article that explains what was built, what was done/achieved as part of the grant, and team's development plans for the future. |
| 1. | Multimedia posting | Support for images and youtube videos. |
| 2. | Interactive posting interactions II | Adding an author to *favorites*. |
| 3. | Direct token transfer | The functionality which allows users to transfer Polkadot tokens to other users without leaving the service, as well as to send and receive donations in these tokens. |
| 4. | User statistics | Number of posts, replies, likes, followers etc. |
| 5. | Functionality for the administrator | Interface for users authorised as system administrators. Functionality is designed to ensure optimal system operation and provide convenience for other user roles in the system: reader and author. |
| 6. | Website | Domain and a simple UI for users to start using the service. |


## Future Plans

**1. Registration Smart Service (working title - identikit)** <br>
- NFT/SBT user account-profile functionality development;
- Plug-and-play system development for the purpose of integrating different services within the Polkadot ecosystem;
- Separating the functionality into a standalone service (working title - “identikit");
- Creation of API tools for third-party developers to interact with the service;
- Audit of the service;
- Opensource’ing it all.

**2. New SubFlow structure** <br>
- Personal service-contract: 
  - Implementing a separate user-specific smart contract to enable decentralised data processing and ownership. Users will have control over their data and can assign roles to others, customising their service according to their needs.
  - This will enhance security and facilitate future feature development.
- NFT-posting (possibility to mint NFT-post (text, images, etc.)) directly from the user's personal service contract.

**3. New functionality and Integrations** <br>
- New structure will allow development and launch of API for interacting with other blockchain services such as SubSocial and SubSquid (and othrers).
- Extended functionality for token transfers.
- Integration of an already existing service in the Polkadot ecosystem for voting.
- Advertising Smart Service development for the direct interaction between creators and advertisers.
- User interface web updates.
