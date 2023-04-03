
- **Project Name:** Xcavate
- **Team Name:** Xcavate
- **Payment Address:** 5E28NSFGwYB9C39bYdRAQ79UKRsM6shxkJr3LG4hehycwfJc


## Project Overview

Due to a combination of increased population and changing housing needs, there is global housing crisis. According to the UN, the global population is set to reach over 11.2 billion by the year 2100, therefore 2 billion new homes are required in the next 80 years. 20% of all housing is built by small to medium sized real estate developers but access to finance through traditonal banks and other financial institutions is complex, time consuming and expensive.

Xcavate is looking to solve this issue by developing a completely decentralised lending and NFT protocol to help fund the building of real world real estate assets, as well as transact and manage fractions of each property as a route to a global real estae investor market. Our goal is to create a community of real estate developers, investors and blockchain developers so more houses can be built and invested in to help reach the growing demand.

![](https://www.youtube.com/watch?v=rEex6M9620U&t=1s)

### Overview

Xcavate will be a first-of-its-kind real-world land & property NFT platform that collateralizes real world parcels of land to finance real estate development. 
Xcavate facilitates digitizing land and/or property title deeds through minting and bundling of NFTs, which are then linked to verifiable digital identities (DIDs) approved by government entities.
Xcavate is an ecosystem that allows real-world property developers access to finance parcels of physical land with planning permission for development. Once the land is at the final development stage, the developer will create NFTs for the individual properties to be sold/managed by a peer-to-peer marketplace (property owners, investors, trusts etc.). 
The system will significantly reduce the time from real estate planning permission to build start. By simplifying the finance application process and speeding up the release of funds to the developer. Xcavate not only provides real-world property developers with a way to build quicker but, as a result, enables a more significant number of much-needed houses to be delivered to market. It also provides liquidity to static real-world assets at every stage of the property development process in a fair and risk-averse way. It will enable the real estate to be onboarded cleanly and efficiently, opening up opportunities throughout the broader Dotsama ecosystem.

![](https://www.youtube.com/watch?v=YjVfwjt_m3g)

![](https://www.youtube.com/watch?v=7pD8NVHUBwE)

### Project Details

We will initially build a POC of the real estate developer loan process to prove the concept. Building a simple polkadot.js wallet that allows verification of identity and creation of DIDS (through the KILT protocol). Once land ownership and build value has been identified (using Oracles) then the LAND NFT can be minted and placed in a multi-sig wallet along with the full loan amount (from the community loan pool). Each build tranche of money will be delivered to the real estate developer wallet, once real estate build evidence has been established and verified.

![](https://xcavate.io/W3F/DeveloperLoanProcessPOC.pdf)

Xcavate will adapt and build multiple Pallets to execute the functionalities. We will use the KILT SDK as well as the substrate framework and primary language Rust to create the pallets on the Polkadot ecosystem.
Token Pallet
Decentralized Identity Document pallet
User Management pallet
Loan Management pallet
Transaction management pallet
Staking pallet
Verification pallet

This Architecture diagram shows the visual representation that maps out the physical implementation for components in the Polkadot ecosystem and how the scalability of the platform works. The diagram represents Microservices we are using to execute the functionality. API gateway will split the API calls to the respective microservices. We are using an s3 bucket to store the media files. We are using pallets to execute the functions on the Polkadot ecosystem.

![](https://xcavate.io/W3F/XCAV-WEB-3-Grant-Application-Image-4.jpg)

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

Kilt – SDK
Chainlink
AWS

### Ecosystem Fit

After many months of research, we initially met on a zoom with Ingo from Kilt, discussing our idea and talking through how the Kilt chain can be incorporated into the Xcavate system. A few weeks later, we contacted Acala and met with Robinson, who was very helpful and enthusiastic about us being involved in the ecosystem and our potential partnership. We also reached Centrifuge and spent many weeks looking through their docs with the initial idea of creating a dApp on their chain, but as there were some striking differences in how their chain operated, it was apparent that was not going to be the best fit for our project. Going forward, however, once the real estate has been built, there will be opportunities for us to introduce Centrifuge.

We feel this is a great way to bring land & Property assets into the digital ecosystem to interact with the following potential partners:

**Kilt (Identity & wallet)**
This is a crucial part of the initial process to verify; Real Estate Director, Company & Title Deed and create DID’s, which will be held in a polkadot.js wallet and used throughout the process.
**Chainlink (Oracle)**
To accurately value and risk rate land and the completed real estate, we need to build Oracles that enable off-chain APIs to feed data into an algorithm which delivers the personalized loan APR. In the first phase, we will build a Chainlink Oracle that relies on https://propertydata.co.uk/ for its data.
**Statemint / Acala**
There are many stages of financing that will involve aUSD / USDT / GDPT… from the initial funding pool, a liquidity pool, as well as the need to exchange the locked loan value for each project in GBP stable coins (as our initial market is based in the UK).
**CRUST**
Our POC will use AWS to prove the concept, however going forward we will look to host our dApp and all the land and property related documents on the Crust network.


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
Robin Ejsmond-Frey and NIco Morgan from Parity have been a tremendous help by supporting us with information about the W3F grant application process and recommendations to attend Hackathons and the Polkadot Decoded Event London. As well as as number of forums to help our substrate development knowledge.

We have been taking time to play with Substrate to form initial local nodes. We feel we are now ready to build the initial POC for this project in the Rococco test environmenment.


## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 2 months
- **Full-Time Equivalent (FTE):**  4
- **Total Costs:** 4732 DOT

### Milestone 1 — Initial POC of lending protocol

- **Estimated Duration:** 2 months
- **FTE:**  4
- **Costs:** 4732 DOT

In the first milestone, the features for the PoC will be implemented and tested by limited users.

| Number    | Deliverables | Specification
|:----------|:---------------------------|:------------------------ |
| 0a.	    | License	                            |  Apache 2.0 |
| 0b.	    | Documentation                       |  The documentation will be provided to show the whole achitecture of the Apron Network. |
| 0c.	    | Testing and Testing Guide           |  The testing guide will be provided to test each component.
| 1	      | Xcavate Node Repo             	    |  We will create a customized chain node with Substrate 2.0 Framework. |
| 2       | Xcavate Loan App Repo               | The contracts will be implemented with Ink!, and it will handle all the API services related functions such as 1) Land planning permission, ownership & DIDs 2) Creation and management of multisig wallet 3) Minting and transfer of LAND NFTs 4) Define the APR of loan 5) Monitor and execute real estate build stage checks 5) Deliver tranches of loan amounts to wallets 6) Manage the loan repayment and NFT transfer.
| 3. | Decentralized Developer Loan dApp / Front End Repo | It's a webpage working with Xcavate Network, it's implemented based on polkadot.js as planned. |
| 4. | Docker | We will provide a dockerfile to demonstrate the full functionality of our chain |
| 5. | Tutorial | We will write an tutorial about how to use Apron Network. |
| 6. | Article | We will write an article published on media channels. |
| 7. | DAO | An Xcavate DAO will be created to handle the governance of the Decentralized lending protocol. |

## Future Plans

Once we have built the initial POC, then we will build the POC of the real estate NFT marketplace. Then on to the MVP and GTM. We have already started the white paper as well as developed a pitch deck to demonstrate the potential of the system to; investors, partners and eventually XCAV coin holders. We have started a social media campaign in order to build a community now and through the dApp build & testing stages.


## Additional Information :heavy_plus_sign:

We have applied to be a speaker at the 2023 Polkadot Decoded event. We would talk through how Xcavate supported by the Polkadot community and network, can help to build much needed housing to a global population.
