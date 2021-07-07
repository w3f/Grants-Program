# W3F Open Grant Proposal

* **Project Name:** SubDAO Chrome Extension
* **Team Name:** [SubDAO Labs](https://github.com/subdao-network)
* **Payment Address:**  3FcJjvzazcpgmJkesdAfx333fyCudxuAe7

## Project Overview :page_facing_up:

The previous application [SubDAO Network Application - https://github.com/w3f/Grant-Milestone-Delivery/pull/114]

### Overview

The **SubDAO Chrome Extension** is a chrome extension with wallet, social, and DAO management features based  **SubDAO**. **SubDAO is a Cross-chain Platform built by SubDAO Labs to link DAO and DApp on Polkadot.**  

With **SubDAO Chrome Extension**, every substrate-based chain can have a nice UI wallet integrated rather than a webpage wallet, and the main benefit is every chain can have a DAO management tool already provided to governance the community.  

The **SubDAO Chrome Extension** is ready for all Substrate-based chains, including Polkadot / Kusama. Every chain can use it as an alternative for Polkadot js extension.  

We are the team of SubDAO Labs, and we are trying to build the ecosystem for DAOs. And we found there is lacking wallets for the Polkadot ecosystem, so we begin to build a DAO tool with wallet integrated, which provides a better user experience for users.  

### Project Details

SubDAO Chrome Extension provides several features, such as Polkadot Wallet, Social Network Message, and DAO Management.  
![](https://raw.githubusercontent.com/SubDAO-Network/graphics/main/start.png)

**Polkadot Wallet**   
A wallet is integrated as an extension of chrome, and it provides wallet management.  
![](https://raw.githubusercontent.com/SubDAO-Network/graphics/main/wallet.png)

**Social Network**  
It supports Twitter and Facebook messages. Thanks to [MaskBook](https://mask.io).  
![](https://raw.githubusercontent.com/SubDAO-Network/graphics/main/social.png)

**DAO Management**  
The main goal of creating SubDAO Chrome Extension is to help users to manage their DAOs with a better user experience.  
![](https://raw.githubusercontent.com/SubDAO-Network/graphics/main/DAO.png)


### Ecosystem Fit

* Where and how does your project fit into the ecosystem?  
Wallet / Tools / Infrastructure.

* Who is your target audience (parachain/dapp/wallet/UI developers, designers, your own user base, some dapp's userbase, yourself)?  
This project can provide a wallet for every parachain and dapp. Also, it will provide DAO management features for all DAO members. At last, it will provide social features for everyone who wants to try web 3.0.

* What need(s) does your project meet?  
The project meets at least two needs. The first one is a better wallet as an extension of browsers. The other one is a tool that provides a smooth experience for DAO management.

* Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?  
  * If so, how is your project different?  
  * If not, are there similar projects in related ecosystems?  

There are no similar projects in the Polkadot ecosystem yet, and even we already have several wallets for Polkadot. There is a similar project like Aragon in the Ethereum ecosystem compared to **SubDAO**, but there is no chrome extension with wallet integrated yet. Also, there is Maskbook in the Ehtereum ecosystem that provides features to post encrypted messages on different social networks. The SubDAO Chrome Extension is mainly built for the Polkadot ecosystem and provides wallet, social network, and DAO management features.

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

The DAO-related smart contracts are partially implemented in the SubDAO plan. Those contracts can be found in https://github.com/SubDAO-Network/subDAO-contracts.

We have already designed some UI/UX as the shown previous section, and the full extension relies on the features provided by SubDAO. Milestone 1 of SubDAO is already finished and accepted.

## Development Roadmap :nut_and_bolt:

In the first milestone, we planned to make the SubDAO Chrome Extension be useable for every parachain. The following features will be available:

The wallet Feature provides the wallet-related features for the chains in Substrate / Polkadot / Kusama ecosystem, including mnemonic management, send and receive tokens, etc.

The DAO provides GUI to interact with SubDAO directly in extension without opening any webpage in browser; also, it includes voting now in social network posts.

The Social Network provides the feature to post encrypted messages on Twitter and Facebook. We modify the encryption method from the original idea.

### Overview

* **Total Estimated Duration:** 1 month
* **Full-Time Equivalent (FTE):** 3
* **Total Costs:** 9,000 USD

### Milestone 1  - The first published version

* **Estimated Duration:** 1 month
* **FTE:**  3 
* **Costs:** 9,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | AGPL |
| 0b. | Documentation | We will provide a basic tutorial that explains how a user can install our chrome extension. |
| 0c. | Testing Guide | We will provide a testing guide on how to use our chrome extension |
| 0d. | Article | We will publish an article describing our chrome extension and how to use it. |
| 1. | Source Code | The extension will be implemented in JavaScript. We will provide the source code of this extension which will provide the 1) features for wallet, such as 1.1) mnemonic management, 1.2) adding custom tokens, 1.3) transfer token from one account to another and 1.4) supporting tokens on Polkadot/Kusama, 2) features to 2.1) post encrypted messages on social network such as Facebook and Twitter, 3) features for DAO management, such as 3.1) listing current available DAOs, 3.2) listing my DAOs, 3.3) create vote in my DAOs, 3.4) do voting in my DAOs and 3.5) view vote results in DAOs. |
| 2. | Build instruction | We will provide a doc about building this chrome extension from source code. |

## Future Plans

* We will cooperate with other parachains to make this extension much more friendly to users.
* This extension will be published on Chrome Store to serve as many as possible chains.
* More user cases will be shown on media.
* SubDAO Chrome Extension will be ported to other browsers to bring more users to web3.0.
* We will introduce more features for users, like red-packet, group voting, etc.
* The feedback from communities will be considered as new features in future versions.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** 
We get this information from the w3f website.

* We have made the SubDAO Network, and an open grant has been accepted.
* Thanks to the Maskbook team who builds Mask book.

