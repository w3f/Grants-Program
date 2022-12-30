# W3F Grant Proposal



- **Project Name:** MangoSale  Protocol
- **Team Name:** MangoBOX  labs
- **Payment Address:** 0x33e69715988126eB3653bFAfd338320BE9A10cd0(USDC))
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2 



## Project Overview :page_facing_up:

https://github.com/w3f/Grant-Milestone-Delivery/pull/612

Through the joint efforts of all team members, we have completed the development and submission of the first grant and also furthered our understanding of Polkadot ecology and the entire industry.

MangoBOX labs is committed to the development of the DAO fundraising system, in the hope of developing a complete fundraising system. In the first stage, we developed an Ink! version smart contract of MangoBOX protocol based on *Juicebox* , which is a well-known project on Ethereum.

However, in the actual process of development, we found some shortcomings of the Juicebox protocol as well :  tokens can be issued additionally without restrain, the fundraising rounds are difficult to manage, and overall the protocol is relatively complicated to use. These characteristics are not conducive to the large-scale application of a Web3 product.

After multiple rounds of research by our product team, we decided to conduct a more in-depth exploration in the field of DAO fundraising. We specialized in Ink! Smart contract version of MangoSale Protocol. MangoSale Protocol is a license-free protocol designated for project fair launch, which is considered as an open IDO platform. It is not limited to DAOs, but also applicable to various types of individuals or organizations. Compared to Juicebox, it's simpler and fairer to use. Any project party can raise the funds they want in different ways through the MangoSale Protocol.



### Overview

- **If the name of your project is not descriptive, a tag line (one sentence summary).**

MangoSale Protocol is based on Ink! A protocol developed by smart contracts that does not require permission and is used for the fair launch of projects belongs to an open IDO platform. Anyone, any community, and any organization can initiate token auctions and financing without permission, and carry out fair distribution of tokens.

Based on Ink! version smart contracts, MangoSale Protocol is a permissionless , project fair launch oriented protocol that acts as an open IDO platform. Any individual, community or organization can start token auctions and financing without permission and implement token fair distribution. 



 Well-known IDO platforms for inspiring MangoSale Protocol as below : 

​	1. Pinksale： https://www.pinksale.finance/

​	2. Unicrypt: https://unicrypt.network/

​	3. Gempad:   https://gempad.app/




- **A brief description of your project.**

  

  As a permissionless fair distribution protocol, MangoSale Protocol is an open IDO platform which has the main following functions and features:

  

  - Permissionless and decentralized.  Anyone can start the creation and auction of Token through the MangoSale Protocol and raise funds without any threshold or code base.

  - Multi-chain deployment. MangoSale Protocol will be deployed on multiple Ink! smart contracts supported para-chains in the future.  The para-chain project owners can also deploy projects on their own.

  - Coexistence of multiple Web3 tools. MangoSale Protocol will provide at least three Web3 tools:

    1. MangoToken, Token factory can create Tokens with tax function.

    2. The MangoLock time lock function can lock up tokens in periods to realize the linear release of tokens.

    3. MangoAirdrop system. The airdrop system project owner can initiate airdrops for different users, which is conducive to expanding the group of currency holders.

    

  - Coexistence of multiple auction methods. MangoSale Protocol will support three different types of auctions to facilitate the launch of various natured projects, and the project initiators can choose freely according to their actual situation

    1. Launchpad:  Token auction by a fixed price.

    2. Fair Launch:  Token auction in the form of fair launch.

    3. Dutch Auction： Token auction in the form of Dutch Auction.

    

- **An indication of why your team is interested in creating this project.**



At present, there are more and more projects starting and financing in the encrypted world, and there also exist IDO platforms that provide services for various crypto projects. However, many IDO platforms are required to get permit, official review and KYC verifications from official authorities. This greatly hinders the scale of project initiation and sets various preconditions for the initiation of the project, making the process of project initiation tedious and difficult.

In this context, MangoSale Protocol launched a permissionless IDO fair launch platform. Any individual, community or organization can start Token auctions and financing without permission and implement token fair distribution.

At the same time, all smart contracts of MangoSale Protocol have been designed in advance. Anyone without code knowledge  can complete the issuance and financing of tokens through a fixed template, which greatly simplifies the  start-up process and enables all various projects to be completed as soon as possible.



- **An indication of how your project relates to / integrates into Substrate / Polkadot / Kusama.**

With its continuous expansion and especially the steady progress of parachain auctions, the Polkadot ecosystem has entered a new stage. It no longer only focuses on the construction of the underlying technology, but also has entered the stage of ecological construction in an all-round way. At this time, various types of project owners are required to develop on different parachains. This is also an important reason why we are now developing MangoSale Protocol.

We hope to develop a permissionless project launch and fundraising platform for the overall ecology of Substrate / Polkadot / Kusama, so that all types of projects in different stages can start on their own with the minimal costs and simplest steps and finally raise appropriate funds. This is our hope and vision today.



### Project Details



-  **Documents of the main functions possessed by the MangoSale Protocol**

1. MangoTokenFactory: TokenFactory can not only create standard ERC20 tokens, but also create ERC20 tokens with special functions, i.e, ERC20 tokens with tax functions. Taxation can be divided into different modules, such as marketing wallet and repurchase burning. Project owners can initialize the token factory according to their actual needs.

2. MangoLock: The time lock function is also one of the core functions of the startup project. Through time lock, tokens can be locked in periods to implement the linear release of tokens, which can fully gain the trust of the community and make the project Token issuance mechanism more transparent.

3. MangoAirdrop system: Project initiators can use the airdrop system to launch airdrops for different users in the ecosystem to motivate ecosystem contributors, which will help expand the number of coin holders and benefit more community members;

4. launchpad: Launchpad: Launchpad auctions Token at a fixed price, which is one of the most common auction methods. Launchpad has a soft cap and a hard cap. If the soft cap is not reached, the auction will be cancelled. If the soft cap is reached, the auction will be successful. The maximum fundraising amount is the hard cap value. Token auction price is calculated according to the price set in advance, and the exchange rate is fixed.

5. Fair Launch: Token auctions are conducted in the form of Fair Launch, and the auction price is not fixed. Fair Launch has only a soft cap, and there is no cap on the amount of funds raised. At the same time, the Token auction is not carried out according to a fixed exchange rate but according to the total amount of funds raised at the end of the auction. If the amount of funds raised reaches the soft cap and the fundraising is successful, the total amount of funds raised divided by the total number of tokens provided will be the user's actual purchase exchange rate. The higher the overall funds raised, the higher the user's purchase exchange rate will be.

6. Dutch Auction: Token auctions are conducted in the form of Dutch auction. Dutch auction is a special auction method, also known as "reduced price auction". It refers to an auction in which the bids for the auction target decrease in order from high to low until the first bidder answers (reaches or exceeds the reserve price). Choosing such an auction method can make the auction fairer.



- **MangoSale Protocol Functional Model Architecture Diagram**



![](https://raw.githubusercontent.com/Mangoboxlabs/MangoSale/main/pic/structuraldiagram.png)



- **Mockups/designs of any UI components**



1.**MangoTokenFactory:**



![](https://raw.githubusercontent.com/Mangoboxlabs/MangoSale/main/pic/mangosale-creattoken.png)



![](https://raw.githubusercontent.com/Mangoboxlabs/MangoSale/main/pic/creattoken-admin.png)



2.**MangoLock: **



![](https://raw.githubusercontent.com/Mangoboxlabs/MangoSale/main/pic/mangosale-createlock.png)



![](https://raw.githubusercontent.com/Mangoboxlabs/MangoSale/main/pic/locklist-viewlptoken.png)



![](https://raw.githubusercontent.com/Mangoboxlabs/MangoSale/main/pic/locklist-viewtoken.png)



![](https://raw.githubusercontent.com/Mangoboxlabs/MangoSale/main/pic/mangosale-locklist.png)



3.**MangoAirdrop system:**



![](https://raw.githubusercontent.com/Mangoboxlabs/MangoSale/main/pic/mangosale-airdrop.png)



![](https://raw.githubusercontent.com/Mangoboxlabs/MangoSale/main/pic/mangosale-airdroplist.png)



4.**launchpad: **



![](https://raw.githubusercontent.com/Mangoboxlabs/MangoSale/main/pic/mangosale-launchpad.png)



![](https://raw.githubusercontent.com/Mangoboxlabs/MangoSale/main/pic/launchpad-next.png)



5.**Fair Launch: **



![](https://raw.githubusercontent.com/Mangoboxlabs/MangoSale/main/pic/mangosale-fairlaunchpad.png)



![](https://raw.githubusercontent.com/Mangoboxlabs/MangoSale/main/pic/fairlaunchpad-next.png)



6.**Dutch Auction: **



![](https://raw.githubusercontent.com/Mangoboxlabs/MangoSale/main/pic/mangosale-dutchauction.png)



![](https://raw.githubusercontent.com/Mangoboxlabs/MangoSale/main/pic/dutchauction-next.png)


- **Technology Stack**
  - JavaScript –   the world's most popular programming language. 
  - [Vue](https://vuejs.org/index.html/) – An approachable, performant and versatile framework for building web user interfaces. 
  
  - [PolkaApi](https://github.com/polkadot-js/api) – This library provides a clean wrapper around all the methods exposed by a Polkadot/Substrate network client and defines all the types exposed by a node .
  
  - [ink!](https://github.com/paritytech/ink) – ink! is an eDSL to write smart contracts in Rust for blockchains built on the Substrate framework. ink! contracts are compiled to WebAssembly.
  
  - [cargo-contract](https://github.com/paritytech/cargo-contract) ‒ CLI tool for ink! contracts.
  - [Contracts UI](https://paritytech.github.io/contracts-ui/) ‒ Frontend for contract instantiation and interaction.
  - [Substrate Contracts Node](https://github.com/paritytech/substrate-contracts-node) ‒ Simple Substrate blockchain which includes smart contract functionality.



### Ecosystem Fit



- **Where and how does your project fit into the ecosystem?**

Under the leadership of Web3 and Parity team, after five years of development, the Polkadot ecosystem has entered a formal auction era for parachains, and more and more parachains have entered the operational stage, making Polkadot ecosystem flourish. Meanwhile, it has also entered into a new stage of development which is in great demand for applications on every para-chain to make the whole ecosystem truly prosper and create a Web3 world.

In the world of web3, decentralized governance and transparent fund management are the most basic requirements of ecology, which are also the requirements for every ecological participant. We hope that when MangoSale Protocol is fully created, it can serve various participants in the Polkadot ecosystem and provide a complete set of treasury management solutions.

- **Who is your target audience?**

MangoSale Protocol can create and auction Tokens for different types of combinations and individuals without permission, and finally realize the fundraising.

- **What need(s) does your project meet?**

Whether it's for a project provider or a DAO organization, it is a complex and tedious process to create a treasury and issue tokens to community members and raise funds. The vast majority of the projects failed due to the lack of technical capabilities. MangoSale system allows teams to configure and manage the whole fund-raising process with no need for coding, tackling the complexity of fund-raising from the community by the project providers.

- **Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?**

In the Substrate/Polkadot/Kusama ecosystem,  we have not found any similar product. But there are some project in DAO's frame, such as subDAO and Dorafactory,  that can provide some certain DAO infrastructure products and create all types of DAOs. 

​	More similar projects in Ethereum and BNB ecosystems:

1. Pinksale： https://www.pinksale.finance/
2. Unicrypt: https://unicrypt.network/
3. Gempad:   https://gempad.app/



## Team :busts_in_silhouette:

### Team members

- **Jason Zhao**: Team leader, project architect, PM and technical leader. He has over 15 years of experience in Internet technology as a senior developer. He began to know Bitcoin in 2015 and gradually emerged himself in the R&D of blockchain technology.  He started to notice Polkadot in 2021 and decided to focus on the development of the Polkadot ecosystem.
- **Frank  Yu:** Full stack IT developer,  10 years of experience in IT,  in command of programming languages such as  PHP,Java, C++.  Looked into the study and development of Ethereum in 2018;  Committed to the Polkadot ecosystem in 2021.
- **Owen Hu:** Full stack developer,  smart contract engineer, 8 years of experience in IT development, currently focuses on the R&D of the blockchain technology in Web3.
- **Kevin   Luo:** Full stack developer, front-end engineer, 6 years of IT experience,  currently focuses on the R&D of the blockchain technology.
- **Alex Li:** Senior designer , 10 years of experience in Internet design, maintains a high standard of design and art.

### Contact

- **Contact Name:Jason Zhao** 
- **Contact Email:** MangoBOXLabs@gmail.com
- **Website: mangobox.xyz**

### Legal Structure

- We are preparing to register a legal entity in Hong Kong.

### Team's experience

We are a  Web3 start-up team from Beijing, China with Jason Zhao as our team leader and technical leader. Our team members come from different fields, from architects, product managers to full stack developers. Although we do not have a rich experience in Web3, our team has never been short of strong execution and high technical development capabilities. Our endless enthusiasm for Web3 led us to the start-up wave.  As traditional Web2 practioners, our team has been engaged in the IT development in China for the last decade. As soon as Web3 opened a window to a brand new world, we immediately seized the opportunity.

We found that the crypto industry holds endless opportunities like no other industry can match. The core vision of crypto and Web3 is to provide everyone with a native and open-source digital economy. Web3 is structured on the basis of blockchain, smart contracts and oracles, which holds a great potential to build a brand new and open ecology.

Our team has been devoted to the R&D on the Ethereum ecosystem and not until 2021 when the Polkadot para-chains began to be deployed and applied that we had a better understanding of the ideas, principles and technology of the Polkadot ecosystem. We realized that whether it's from the top-tier ideas or the bottom technical structure, Polkadot represents the future and that's why we decided to commit to the build-up of the Polkadot ecosystem. Now as all para-chain on Polkadot are being operational, there is an emerging demand for DAPP's deployment and bulid-up, which is our unprecedented opportunity.



### Team Code Repos

- https://github.com/Mangoboxlabs

Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine.

- https://github.com/Jasonweb3

- https://github.com/luckelf

- https://github.com/Kevinluoo

  

### Team LinkedIn Profiles (if available)

- none available 


## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:**  2 months
- **Full-Time Equivalent (FTE):**   4 FTE
- **Total Costs:** 26000 USD

### Milestone 1 — Ink!  contract Modules

- **Estimated duration:** 1 month
- **FTE:**  4
- **Costs:** 12,000 USD

| Number | Deliverable                   | Specification                                                |
| -----: | ----------------------------- | ------------------------------------------------------------ |
|    0a. | License                       | Apache 2.0                                                   |
|    0b. | Documentation                 | We will provide a basic **tutorial** that explains how a user can deploy and test our Ink! contract. |
|    0c. | Testing Guide                 | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
|    0d. | Docker              | We will provide a Dockerfile that can be used to test all the functionality delivered with this milestone. |
|    0e. | Article                 | We will publish an **article** that explains how to use our product. |
|     1. |Ink! Contract:TokenFactory         | TokenFactory can create ERC20 tokens with tax functions. |
|     2. |Ink! Contract: MangoLock | MangoLock can realize the lock-up and linear release of Token.. |
|     3. |Ink! Contract: MangoAirdrop | MangoAirdrop can implement different types of token airdrops. |
|     4. | Front-end UI  | We currently use the Vue.js framework for Front-end development . In the first milestone we will develop the front-end UI of these three parts: TokenFactory, MangoLock and MangoAirdrop.We will provide Front-end deployment tutorials for TokenFactory、 MangoLock and MangoAirdrop . |
|     5. | Front-end integration (e2e) test | We will use Cypress.io as an end-to-end testing framework for the  Front-end automated approach test. |



### Milestone 2 — Ink!  contract Modules and  Frontend files

- **Estimated Duration:** 1 month
- **FTE:**  4
- **Costs:** 14,000 USD


| Number | Deliverable         | Specification                                                |
| -----: | ------------------- | ------------------------------------------------------------ |
|    0a. | License             | Apache 2.0                                                   |
|    0b. | Documentation       | We will provide a basic **tutorial** that explains how a user can deploy and test our Ink! contract. |
|    0c. | Testing Guide       | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
|    0d. | Docker              | We will provide a Dockerfile that can be used to test all the functionality delivered with this milestone. |
|    0e. | Article             | We will publish an **article** that explains how to use our product. |
|     1. | Ink! Contract: launchpad | Launchpad can conduct Token auctions at a fixed price. |
|     2. | Ink! Contract: Fair Launch | Fair Launch can conduct Token auctions in the form of fair launch. |
|     3. | Ink! Contract: Dutch Auction | Dutch Auction can conduct Token auctions in the form of Dutch auctions. |
|     4. | Front-end UI  | We currently use the Vue.js framework for Front-end development . In the second milestone we will develop the front-end UI of these three parts: launchpad Auction、 Fair Launch Auction and Dutch Auction. We will provide Front-end deployment tutorials for launchpad Auction 、 FairLaunch Auction and Dutch Auction. |
|     5. | Front-end integration (e2e) test | We will use Cypress.io as an end-to-end testing framework for the  Front-end automated approach test. |


**Introduction to the three auction functions:**

1. launchpad Auction:Launchpad auctions Token at a fixed price, which is one of the most common auction methods. Launchpad has a soft cap and a hard cap. If the soft cap is not reached, the auction will be cancelled. If the soft cap is reached, the auction will be successful. The maximum fundraising amount is the hard cap value. Token auction price is calculated according to the price set in advance, and the exchange rate is fixed.

2. FairLaunch Auction: Token auctions are conducted in the form of Fair Launch, and the auction price is not fixed. Fair Launch has only a soft cap, and there is no cap on the amount of funds raised. At the same time, the Token auction is not carried out according to a fixed exchange rate but according to the total amount of funds raised at the end of the auction. If the amount of funds raised reaches the soft cap and the fundraising is successful, the total amount of funds raised divided by the total number of tokens provided will be the user's actual purchase exchange rate. The higher the overall funds raised, the higher the user's purchase exchange rate will be.

3. Dutch Auction: Token auctions are conducted in the form of Dutch auction. Dutch auction is a special auction method, also known as "reduced price auction". It refers to an auction in which the bids for the auction target decrease in order from high to low until the first bidder answers (reaches or exceeds the reserve price). Choosing such an auction method can make the auction fairer.





## Future Plans

- **how you intend to use, enhance, promote and support your project in the short term, and**

We first hope to develop the smart contract of the product. It will then proceed to deploy on a parachain for initial testing.

- **the team's long-term plans and intentions in relation to it.**

When our product starts testing, we hope to build our global community based on the Polkadot ecosystem, and start to incubate many organizations to start raising funds through our platform.



## Additional Information :heavy_plus_sign:

- **How did you hear about the Grants Program?** 

Web3 Foundation Website.


- **Work you have already done.**

We have deeply researched the function and logic , and we hope to use ink! Smart contracts refactor it.

- **If there are any other teams who have already contributed (financially) to the project.**

NO.

- **Previous grants you may have applied for.**

NO.

