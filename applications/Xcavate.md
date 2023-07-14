# Xcavate

> We are building a real estate centric lending and asset minting protocol.

- **Team Name:** Xcavate
- **Payment Address:** 5E28NSFGwYB9C39bYdRAQ79UKRsM6shxkJr3LG4hehycwfJc
- **Total Costs:** $10000 USDT (Polkadot - Statemint)
- **Level:** 1

## Project Overview

Due to a combination of increased population and changing housing needs, there is global housing crisis. According to the UN, the global population is set to reach over 11.2 billion by the year 2100, therefore 2 billion new homes are required in the next 80 years. 20% of all housing is built by small to medium sized real estate developers but access to finance through traditional banks and other financial institutions is complex, time consuming and expensive.

Xcavate is looking to solve this issue by developing a completely decentralised lending and NFT protocol governed by a DAO to help fund the building of real world real estate assets, as well as transact and manage fractions of each property as a route to a global real estate investor market. Our goal is to create a Decentralised Autonomous Organisation (DAO), which has a core Fellowship of real estate developers, investors and blockchain developers accountable to its wider community, so more houses can be built and invested in to help reach the growing demand.

### Overview

Xcavate will be a first-of-its-kind real-world land & property NFT platform that collateralises real world parcels of land to finance real estate development. 
Xcavate facilitates digitising land and/or property title deeds through minting and bundling of NFTs, which are then linked to verifiable digital identities (DIDs) approved by government entities.
Xcavate is an ecosystem that allows real-world property developers access to finance parcels of physical land with planning permission for development. Once the land is at the final development stage, the developer will create NFTs for the individual properties to be sold/managed by a peer-to-peer marketplace (property owners, investors, trusts etc.). 
The system will significantly reduce the time from real estate planning permission to build start. By simplifying the finance application process and speeding up the release of funds to the developer. Xcavate not only provides real-world property developers with a way to build quicker but, as a result, enables a more significant number of much-needed houses to be delivered to market. It also provides liquidity to static real-world assets at every stage of the property development process in a fair and risk-averse way. It will enable the real estate to be onboarded cleanly and efficiently, opening up opportunities throughout the broader Dotsama ecosystem.

### Project Details

We will initially build a POC of the real estate developer loan process to prove the concept. Building a simple polkadot.js wallet that allows verification of identity and creation of DIDS (through the KILT protocol). Once land ownership and build value has been identified (using Oracles) then the LAND NFT can be minted and placed in a multi-sig wallet along with the full loan amount (from the community loan pool). Each build tranche of money will be delivered to the real estate developer wallet, once real estate build evidence has been established and verified.

![](https://xcavate.io/W3F/DeveloperLoanProcessPOCv2.jpg)

Xcavate will adapt and build multiple Pallets to execute the functionalities. We will use the KILT SDK as well as the substrate framework and primary language Rust to create the pallets on the Polkadot ecosystem.
Token Pallet
Decentralised Identity Document pallet
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

* React.js
* Node.js
* Express.js
* Rust
* Substrate Framework
* Polkadot

### Third-Party

* Kilt – SDK
* Chainlink
* AWS

### Ecosystem Fit

After many months of research, we initially met on a zoom with Ingo from Kilt, discussing our idea and talking through how the Kilt chain can be incorporated into the Xcavate system. A few weeks later, we contacted Acala and met with Robinson, who was very helpful and enthusiastic about us being involved in the ecosystem and our potential partnership. We also reached Centrifuge and spent many weeks looking through their docs with the initial idea of creating a dApp on their chain, but as there were some striking differences in how their chain operated, it was apparent that was not going to be the best fit for our project. Going forward, however, once the real estate has been built, there will be opportunities for us to introduce Centrifuge.

We feel this is a great way to bring land & Property assets into the digital ecosystem to interact with the following potential partners:

**Kilt (Identity & wallet)**
This is a crucial part of the initial process to verify; Real Estate Director, Company & Title Deed and create DID’s, which will be held in a polkadot.js wallet and used throughout the process.
**Statemint / Acala**
There are many stages of financing that will involve aUSD / USDT / GDPT… from the initial funding pool, a liquidity pool, as well as the need to exchange the locked loan value for each project in GBP stable coins (as our initial market is based in the UK).
**CRUST**
Our POC will use AWS to prove the concept, however going forward we will look to host our dApp and all the land and property related documents on the Crust network.
**Subwallet**
Integrate DID's and Real Estae NFTs in to the their wallet to improve the UI/UX


## Team :busts_in_silhouette:

### Team members

* Richard Houldsworth – CTO
* Alex Ward – COO
* Ganish Oli - Substrate Developer
* Rene Hürter - Substrate Developer
* Neeraj Choubisa - Full Stack Developer
* Victor Chukwonoso - UI/UX Designer

### Contact

- **Contact Name:** Richard Houldsworth
- **Contact Email:** richard@xcavate.io
- **Website:** xcavate.io

### Legal Structure

* H & W Investments Limited
* 17 College Road, Cheshunt EN8 9LS, United Kingdom

### Team's experience

Richard Houldsworth – 10 years in web 2.0 dev space – serial Entrepreneur
Alex Ward – 25 years in the global property market – serial Entrepreneur
Ganish Oli - ink! smart contract developer and substrate blockchain developer.
Rene Hürter - I am currently studying to become a blockchain developer. Alchemy University Ethereum Bootcamp 11/2022. Scaling Ethereum 2023 Hackathon 11/03/2023. Consensus 2023 Hackathon (Web3athon 2023) 17/04/2023.
Neeraj Choubisa - A Passionate Full Stack Blockchain Ethereum Based Web Developer, Third-Year student at Indian Institute of Information Technology, Dharwad

### Team Code Repos

https://github.com/xcavateblockchain
https://github.com/xcavate2022
https://github.com/ganesh1233456
https://github.com/Kali-Decoder
https://github.com/RecrafterH

### Team LinkedIn Profiles

https://www.linkedin.com/in/richard-houldsworth/ 
https://www.linkedin.com/in/alex-ward-2350a036/
https://www.linkedin.com/in/ganesh-oli-9285a4163/
https://www.linkedin.com/in/neeraj-choubisa-a4952b202/
https://www.linkedin.com/in/ren%C3%A9-h%C3%BCrter-36084b249

## Development Status :open_book:

We have been heavily involved in learning all things associated with the Polkadot & Kusama Ecosystem. This has been coupled with the idea of bringing land and property from its current state into the web3 ecosystem. We have been meeting with top-level industry leads, government officials and developers.
Robin Ejsmond-Frey and Nico Morgan from Parity have been a tremendous help by supporting us with information about the W3F grant application process and recommendations to attend Hackathons and the Polkadot Decoded Event London. As well as as number of forums to help our substrate development knowledge.

We have been taking time to play with Substrate to form initial local nodes. We feel we are now ready to build the initial POC for this project in the Rococco test environmenment.


## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 2 months
- **Full-Time Equivalent (FTE):**  4
- **Total Costs:** $10000 USDT

### Milestone 1 — Initial POC of lending protocol

- **Estimated Duration:** 2 months
- **FTE:**  4
- **Costs:** $10000 USDT

We will build on the excellent work we have achieved developing the Real Estate NFT marketplace for the hackerearth.com hackerthon. 

In the first milestone, the features for the PoC will be implemented and tested by limited users. We will adapt FRAME pallets to create a unique structure of a central community loan pool that acts as a risk reducer to allow individual loan stakers to lock and unlock native XCAV coins quickly and easily, rather than being committed to the full term of a particular loan. This will provide an attractive low risk investment opportunity and increase community confidence in the network while eliminating any delay in providing the funds to the real estate development project, once all the necessary checks have been completed. This loan pool structure could be applied to many different chains in future projects. The execution of various stages of the dApp specific logic will built using ink! smart contracts.

| Number    | Deliverables | Specification
|:----------|:---------------------------|:------------------------ |
| 0a.	    | License	                            |  Apache 2.0 |
| 0b.	    | Documentation                     |  The documentation will be provided to show the whole architecture of the Xcavate Network. |
| 0c.	    | Testing and Testing Guide            |  The testing guide will be provided to test each component. |
| 0d. | Docker | We will provide a dockerfile to demonstrate the full functionality of our chain |
| 0e. | Tutorial | We will write a tutorial about how to use Xcavate Network. |
| 0f. | Article | We will write an article published on media channels. |
| 1	    | Xcavate Node Repo             	    |  We will create a customized chain node with Substrate 2.0 Framework. |
| 2     | Xcavate Loan App Repo               | All smart contracts will be written in Ink! to handle all the on chain runtime events related pallet functions such as; 1) Assess loan application criteria 2) Creation and management of multisig wallet 3) Minting and transfer of LAND NFTs 4) Defining and executing the loan APR structure 5) Monitor and execute real estate build stage checks 5) Deliver tranches of loan amounts to wallets 6) Manage the loan repayment and NFT transfer. |
| 3. | Loan management pallet | * Manage loan application ** Land details' ** Registration * Manage loan interest percentage ** Based on land and experience * Approve/Reject request |
| 4. | Staking pallet | * User can stake native token * Calculate APR * Distribute payouts |
| 5. | Verification pallet | * Verification of user identity * Manage users identity * Manage loan request |
| 6. | DAO | The PoC will have a basic DAO structure that will be created using the OpenGov pallet to ensure rewards can be given to the real estate build stage checkers (As we progress in to the MVP stage this will be expanded to form a full governance structure). |
| 7. | Decentralized Developer Loan dApp / Front End Repo | It's a webpage working with Xcavate Network, it's implemented based on polkadot.js as planned. |

## Future Plans

We are talking to Subwallet about integrating the KILT protocol DIDs in to their wallet for a smoother and simpler user experience. Once we have built the initial POC then on to the MVP and GTM. We have already started the white paper as well as developed a pitch deck to demonstrate the potential of the system to; investors, partners and eventually XCAV coin holders. We have started a social media campaign in order to build a community now and through the dApp build & testing stages.


## Additional Information :heavy_plus_sign:

We will be attending the 2023 Polkadot Decoded event. We are keen to network and expand our partnerships across the Dotsama Ecosystem, while helping to build much needed real estate investment opportunities to a global population.
