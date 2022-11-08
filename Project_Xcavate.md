
- **Project Name:** Xcavate
- **Team Name:** Xcavate
- **Payment Address:** 4pjePvJgUZAMKtnSmYJitGacxBRnsKe1GvCb1t6vgg2Kof8o 
- **Level:** 1 = $10000
- **Total Project Cost** $307200


## Project Overview

This is the initial grant application

### Overview

Xcavate will be a first-of-its-kind real-world land & property NFT that can be collateralized to finance development transactions. 
Xcavate facilitates digitizing land and/or property title deeds through minting and bundling of NFTs, which are then linked to verifiable digital identities (DIDs) approved by government entities.
Xcavate is an ecosystem that allows real-world property developers access to finance parcels of physical land with planning permission for development. Once the land is at the final development stage, the developer will create NFTs for the individual properties to be sold/managed by a peer-to-peer marketplace (property owners, investors, trusts etc.). 
The system will significantly reduce the time from real estate planning permission to build start. By simplifying the finance application process and speeding up the release of funds to the developer.. Xcavate not only provides real-world property developers with a way to build quicker but, as a result, enables a more significant number of much-needed houses to be delivered to market. It also provides liquidity to static real-world assets at every stage of the property development process in a fair and risk-averse way. It will enable the real estate to be onboarded cleanly and efficiently, opening up opportunities throughout the broader Dotsama ecosystem.

![](https://xcavate.io/wp-content/uploads/2022/11/XCAV-WEB-3-Grant-Application-Image-1.jpg)

![](https://xcavate.io/wp-content/uploads/2022/11/XCAV-WEB-3-Grant-Application-Image-2.jpg)

![](https://xcavate.io/wp-content/uploads/2022/11/XCAV-WEB-3-Grant-Application-Image-3.jpg)

### Project Details

We expect the teams to already have a solid idea about your project's expected final state. Therefore, we ask the teams to submit (where relevant):

We will be using an agile methodology for the development of this project. We will use a design to development process to deliver the best user experience. Followed by an engineer's engagement based on approved designs. We will build an agile board open to W3F and partners for complete project transparency.  This will allow everyone involved to see all milestones, roadblocks and added scope in real-time. We will still have weekly updates internally, but this methodology will enable W3F to be in the know at all times. Our organizational goal is to achieve a simplistic way for everyone involved to be in the know at all times. In addition, we would like to set up and maintain the quality of code and delivery to production processes through GitHub that all involved will have access to review. We understand that in pursuit of these objectives, W3F has their standards, and we will always strive to exceed them as partners. We have chosen the below technology stack and already have a significant amount of experience to deliver this project in these technologies. We have also already spent a reasonable amount of time meeting and learning about our partners and their unique technologies.

Xcavate will develop multiple Pallets to execute the functionalities. We will use the substrate framework and primary language Rust to create the pallets on the Polkadot ecosystem.

Token Pallet
Decentralized Identity Document pallet
User Management pallet
Loan Management pallet
Transaction management pallet
Staking pallet
Verification pallet

This Architecture diagram shows the visual representation that maps out the physical implementation for components in the Polkadot ecosystem and how the scalability of the platform works. The diagram represents Microservices we are using to execute the functionality. API gateway will split the API calls to the respective microservices. We are using an s3 bucket to store the media files. We are using pallets to execute the functions on the Polkadot ecosystem.

![](https://xcavate.io/wp-content/uploads/2022/11/XCAV-WEB-3-Grant-Application-Image-4.jpg)

Token:
XCAV - Platforms Native Token to launch a para chain and participate in a crowd loan/slot auction. XCAV tokens are used to stake within the platform. We will create these tokens with the Transfer, Mint, Burn, Approve, and Allowance functions.
Liquidity Pool:
Xcavate creates a liquidity pool to store staked tokens, staked tokens will be queued and utilized for each loan application. XCAV tokens are swapped as GBPT through XCM and deposited on the Central Loan pool.
Central Loan Pool:
Xcavate Creates a central loan pool to manage Loan amounts and Loan repayment. The central lending pool will act as the heart of the platform to map all the transactions.

### Technology Stack

React.js
Node.js
Express.js
Rust
Substrate Framework
Polkadot

### Third-Party

Kilt – SDK 			Statemint
Chainlink 			Property Data

### Ecosystem Fit

After many months of research, we initially met on a zoom with Ingo from Kilt, discussing our idea and talking through how the Kilt chain can be incorporated into the Xcavate system. A few weeks later, we contacted Acala and met with Robinson, who was very helpful and enthusiastic about us being involved in the ecosystem and our potential partnership. We also reached Centrifuge and spent many weeks looking through their docs with the initial idea of creating a dApp on their chain, but as there were some striking differences in how their chain operated, it was apparent that was not going to be the best fit for our project. Going forward, however, once the real estate has been built, there will be opportunities for us to introduce Centrifuge.

We feel this is a great way to bring land & Property assets into the digital ecosystem to interact with the following potential partners:

**Kilt (Identity & wallet)**
This is a crucial part of the initial process to verify; Real Estate Director, Company & Title Deed and create DID’s, which will be held in a Sporran Wallet and used throughout.
**Chainlink (Oracle)**
To accurately value and risk rate land and the completed real estate, we need to build Oracles that enable off-chain APIs to feed data into an algorithm which delivers the personalized loan APR. In the first phase, we will build a Chainlink Oracle that relies on https://propertydata.co.uk/ for its data.
**Statemint / Acala**
There are many stages of financing that will involve aUSD / USDT / GDPT… from the initial funding pool, a liquidity pool, as well as the need to exchange the locked loan value for each project in GBP stable coins (as our initial market is based in the UK).
**XCM (Crosschain)**
As our user base is only used to the web2.0 space, we will need a seamless front end that hides the complexities of the many transactions below the hood. XCM will be the enabler for this to happen.


## Team :busts_in_silhouette:

### Team members

Richard Houldsworth – CTO 
Alex Ward – COO
Akash Takyar - Management Sponsor
Deepak Shokeen - Chief Engineer
Kapil Saxena - Design Head

### Contact

Richard Houldsworth – +44 7798 666 710 
Alex Ward – +44 7779 885964 
xcavate.io

### Legal Structure

H & W Investments Limited 
17 College Road, Cheshunt EN8 9LS, United Kingdom

### Team's experience

Richard Houldsworth – 10 years in web 2.0 dev space – serial Entrepreneur
Alex Ward – 25 years in the global property market – serial Entrepreneur
Akash Takyar - Akash has a master’s in computer application with a deep understanding of IoT and Blockchain. Akash is a world-renowned expert, blockchain influencer, and technical architect.
Deepak Shokeen - With over 20 years of experience engineering and developing apps. He has a deep understanding of building Cloud, IoT, and Blockchain applications.
Kapil Saxena - Kapil is a design professional with 15+ years of experience in User Experience & User Interface design. Currently, he is leading
the design team at LeewayHertz designing UX and UI for Blockchain Applications, handheld devices, Artificial Intelligence Solutions, and IoT Products.

### Team Code Repos

https://github.com/xcavate2022
https://github.com/LeewayHertz
https://github.com/orgs/XDCFoundation/repositories
https://github.com/XDCFoundation/XDC3Android
https://github.com/XDCFoundation/xdc-testnetwork-leo

### Team LinkedIn Profiles

https://www.linkedin.com/in/richard-houldsworth/ 
https://www.linkedin.com/in/alex-ward-2350a036/
https://www.linkedin.com/company/leewayhertz-technologies/

## Development Status :open_book:

We have been heavily involved in learning all things associated with the Polkadot & Kusama Ecosystem. This has been coupled with the idea of bringing land and property from its current state into the web3 ecosystem. We have been meeting with top-level industry leads, government officials and developers.
Robin Ejsmond-Frey from Parity has been a tremendous help by supporting us with information about the W3F grant application process and recommendations to attend Hackathons and the Polkadot Decoded Event London. This is where we met Tim Dobie from Parity, who would introduce us to James Ruffer and the web3devs team, plus Paul Castillo from Tokensoft.

We have been taking time to play with Substrate to form initial POCs inside the Polkadot system. We feel we are now ready for the core POC for this project.


## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 7 months
- **Full-Time Equivalent (FTE):**  29.5
- **Total Costs:** $307200

### Milestone 1 - Technical & Visual Design and setup

- **Estimated duration:** 1 month
- **FTE:**  3
- **Costs:** 36,000 USD

We will start with the user onboarding process to Xcavate parachain/parathread allowing the design team to create low-fi wireframe mockups using Figma that will then be approved by the team to be updated to hi-def mockups that will be interactive for the team's final feedback. This phase will be constant, but the core of the design deliverables will take 3-4 weeks based on feedback. As each of these designs is approved, we will pass them on to the development team to complete in tandem. We will, however, separate these into another milestone. Also, during this first phase, developers will set up the developer's environment with dev env and third-party sandboxes.

### Milestone 2 — Core build out MVP

- **Estimated Duration:** 1 month
- **FTE:**  4.25
- **Costs:** 48,000 USD

We will take designs from the onboarding portal and use AWS to create a simple and straightforward API aggregation for our partners at KILT. This will allow one signup for all technologies used in our platform. This will include but not be limited to KYC/KYP for us to connect to other partners in the future. Kilt will be the main identity protocol partner used in this project. This will allow us to deliver and move the DIDs/NFTs/Tokens needed to use our solution.

| Number    | Deliverables                          | Specification
|:----------|:--------------------------------------|:---------------
| 0a.	    | License	                            |  Apache 2.0
| 0b.	    | Documentation                         |  Most of the documentation will be provided on GitHub | Enduser.Webportal - Inline documentation of the code, README file with steps ( objective of the project, How to build and run it, Third-party dependencies), Languages used, Template used for frontend, integrations (Middleware, Web3). | Admin.weportal - Inline documentation of the code, README file with steps ( objective of the project, How to build and run it, Third-party dependencies), Languages used, Template used for frontend, integrations( Middleware, Web3) | System.microservices - Inline document of the code, README file with steps, API Documentation, How to test API using postman, Integrations(NoSQL Database, Pallets, How to build and run it), swagger-docs | System.pallets - README file with steps, how to run a substrate Node, How to Run a Validator, Steps to Make Transactions, Verify Transaction on-chain using Explorer, How to build pallet
| 0c.	    | Testing and Testing Guide              |  Deliverables | Unit Test Cases | Test Case Results | Performance Testing | Functional Testing | Steps for How to Run Unit Tests, which will be provided as README file | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.
| 0d.	    | Docker                                 |  We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.
| 0e.	    | Article	                             |  We will create a number of articles and distribute across various platforms
| 1	        | Substrate module: Token pallet	     |  The token module will contain Transfer, Mint, burn, Allowance/Approve, and token specification attributes.
| 2         | Substrate module: DID Pallet  	     |  The DID module will allow the user to store documents on-chain and restrict access to another user.
| 3         | Substrate module: User Pallet  	     |  The User module will allow the user to Onboard and to manage the users on-chain.
| 4         | Substrate module: Loan Management Pallet  |  The Loan Management module will allow the users to manage Loan Requests, and admin to approve, and users to repay the loans
| 5         | Substrate module: Transaction Management Pallet 	     |  The Transaction Management Module will allow users and admin to sign and execute the Transactions (i.e., Receive loan amount, Repay the loan, sign the transaction)
| 6         | Substrate module: Staking pallet  	     |  The Staking module will allow users to stake the tokens and let the user unstake the amount.
| 7         | Substrate module: Verification pallet 	     |  The Verification Module will verify the documents submitted by the Loan requestor through API.
8
Substrate
| 8         | Substrate module: Substrate chain 	     |  Launching its own public network( Parachain ) to participate in a slot auction. | Token pallets, DID pallets, user pallets, Loan management pallets, Transaction management pallets, staking pallets, and verification pallets of our custom chain will interact in such a way, that allows property developers to get loans to build their properties, and users to get rewarded by staking their tokens.
| 9         | DApp: Xcavate  	                     |  We will deliver a working URL for a Decentralized Application that will contain functionality like Loan Management, Staking Management, Transaction Management, and Identity Management, Also we will deliver a set of related GitHub that will support the DApp.
| 10        | Smart contracts  	                     |  We are not developing any smart contracts, we use pallets for every functionality


### Milestone 3 — MVP Backend

- **Estimated Duration:** 1 month
- **FTE:**  4.25
- **Costs:** 48,000 USD

During this process, there will be many backend calls the end user will not see directly per se. In this phase, we will build out the oracles needed to do a few things. These oracles included in the onboarding process will communicate with the APIs for the property values portal, government portal, and chainlink to get the correct planning information, calculations and ratings needed to build the pallet NFT references. The data from these oracles will allow the delivery of funding to the developer at the end of their onboarding process. Also, during this phase, we will implement xCavate parachain where the pallet NFT will be minted. This will be our main push/sprint and will be a week-to-week delivery.

### Milestone 4 — BETA testing 

- **Estimated Duration:** 1 month
- **FTE:**  5.25
- **Costs:** 31,200 USD

We will launch this solution to select alpha/beta users to help us with the launch from dev env to mainnet. During this phase, we will take in feedback from users as well as fix any bugs/issues.

### Milestone 5 — Core build out GTM

- **Estimated Duration:** 1 month
- **FTE:**  4.25
- **Costs:** 48,000 USD

We will develop the property NFT marketplace, focused on tokenizing the property as NFT as well as launching a marketplace to list the property as NFT.

| Number    | Deliverables                          | Specification
|:----------|:--------------------------------------|:---------------
| 0a.	    | License	                            |  Apache 2.0
| 0b.	    | Documentation                         |  Most of the documentation will be provided on GitHub | Enduser.Webportal - Inline documentation of the code, README file with steps ( objective of the project, How to build and run it, Third-party dependencies), Languages used, Template used for frontend, integrations (Middleware, Web3). | Admin.weportal - Inline documentation of the code, README file with steps ( objective of the project, How to build and run it, Third-party dependencies), Languages used, Template used for frontend, integrations( Middleware, Web3) | System.microservices - Inline document of the code, README file with steps, API Documentation, How to test API using postman, Integrations(NoSQL Database, Pallets, How to build and run it), swagger-docs | System.pallets - README file with steps, how to run a substrate Node, How to Run a Validator, Steps to Make Transactions, Verify Transaction on-chain using Explorer, How to build pallet
| 0c.	    | Testing and Testing Guide              |  Deliverables | Unit Test Cases | Test Case Results | Performance Testing | Functional Testing | Steps for How to Run Unit Tests, which will be provided as README file | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.
| 0d.	    | Docker                                 |  We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.
| 0e.	    | Article	                             |  We will create a number of articles and distribute across various platforms
| 1	        | Substrate module: NFT Pallet   	     |  The NFT module will allow the user to mint and store NFT on Blockchain
| 2         | Substrate module: Marketplace pallet 	 |  The NFT module will allow users to trade ( Buy/Sell), transfer ownership, and transfer the NFT.


### Milestone 6 — GTM Backend

- **Estimated Duration:** 1 month
- **FTE:**  4.25
- **Costs:** 48,000 USD

This will be a similar milestone to the MVP but including the property NFT marketplace.

### Milestone 7 — BETA testing 

- **Estimated Duration:** 1 month
- **FTE:**  4.25
- **Costs:** 48,000 USD

We will launch this solution to select alpha/beta users to help us with the launch from dev env to mainnet. During this phase, we will take in feedback from users as well as fix any bugs/issues.  We will also look at scalability. This phase will culminate with the launch of a parachain crowdloan campaign.

## Future Plans

We have started a white paper as well as developed a brochure to show potential partners and eventual XCAV coin investors. We are also starting a social media campaign in order to build a community now and through the Dapp build & testing stages.


## Additional Information :heavy_plus_sign:

We initially heard about the Square One team support from the regular Polkadot videos and updates we have watched on Youtube.
Nicholas Morgan from Parity (and Square One) has been in touch and has offered significant support. As a result, we will be applying for a “Builders for Builders” programme to help mentor the dev team and speed up the development process.
