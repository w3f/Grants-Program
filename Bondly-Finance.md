# Open Grant Proposal

> This document is referenced in the terms and conditions and therefore needs to contain all the required information. Don't remove any of the mandatory parts presented in bold letters or as headlines! See the [Open Grants Program Process](https://github.com/w3f/Open-Grants-Program/blob/master/README_2.md) on how to submit a proposal.

* **Project:** Bondly Finance
* **Proposer:** https://github.com/agentmegan
* **Payment Address:** BTC payment address. We don't accept payments for the program in other currencies at this stage. 

*The above combination of your GitHub account and payment address will be your unique identifier during the program. Please keep them safe.*

## Project Overview :page_facing_up: 
If this application in response to an RFP then please indicate this on the first line of this section.
Yes.
### Overview

Please provide the following:
  * A brief description of the project.
  Bondly is an interoperable, transparent, and portable swap protocol designed to revolutionize traditional escrow methods and make everyone into their own digital marketplace.
  Our family of trust-enabling DeFi products are designed to be a part of everyday buying and selling activities, giving peace of mind for swap or online purchases. 
  Our product BProtect is a DeFi enabled eCommerce gateway specializing in integrating into your favorite online marketplaces very simply and easily with no integration fees, just staking tokens.
  Bondly conducted its NFT sale via opensea and Rarible (two open marketplaces at current status quo). Opensea and rarible are very similar to p2p marketplaces today like amazon. 
  Similar to the rampant counterfeit problem of amazon, Opensea and Rarible suffer from a host of unauthenticated ripoff content which is very hard to verify for people just getting on-boarded into the NFT space. 
  We witnessed this first hand with our well-intentioned buyers finding difficulty buying the authentic cards. Without a strong intent, that indicates a high-risk of churn and losing a sale as a merchant.
  Now, strong intent can be cultivated / grown over time by brands and merchants with a passionate following and instead of competing in a noisy environment of OpenSea / rarible - merchants have the clout to draw passionate customers onto their own dedicated destinations instead (merchant storefronts) where customers can directly buy from the merchant without leaving their branded experience, they are ensured a superior checkout UX and can confirm the authenticity of their purchases.
  Bondly platform enables an out of the box elegant solution for the merchants (brands, individuals, projects etc) to spin up their own branded storefronts in a few clicks. 

  * An indication of how you will integrate this project into Substrate / Polkadot / Kusama.
  We will have an alternate version of our apps built natively in Substrate along with hosting our Solidity based apps on an existing parachain using Frontier EVM. 
  * An indication of why your team is interested in creating this project.
  We saw a need to solve the issue of OTC trading and to be able to trustlessly purchase digital goods through the creation of decentralized financial (DeFi) applications powered by a cross-chain swap architecture and novel token-powered escrow platform.
### Project Details 
We expect the teams to already have a solid idea about the project's expected final state.

Therefore, we ask the teams to submit (where relevant):
* Mockups/designs of any UI components
https://www.figma.com/proto/BrLTaNwM6Lyu2wYBHaUmww/BondProtect?node-id=1%3A3&viewport=365%2C98%2C0.3415306806564331&scaling=min-zoom&hide-ui=1  
* API specifications of the core functionality
N/A
* An overview of the technology stack to be used
Angular / TypeScript, Rust, MongoDB, Amazon Lambda
* Documentation of core components, protocols, architecture etc. to be deployed
See https://docs.google.com/document/d/1helk5TOPe_ccVOQL5Qy-4d54UyMFmv7niGrgMzFY204/edit?ts=5fa6c53b#heading=h.115moiwqne9x 
Please see tiny.cc/bondpaper for the business level design.
* PoC/MVP or other relevant prior work or research on the topic
 See Figma above

### Ecosystem Fit 
Are there any other projects similar to yours? If so, how is your project different?
Airswap and Bounce Finance.Our differentiating factor is that we are a smart contract based marketplace payment platform designed to make the buying and selling of any good or service easy and protected. 
Bondly offers a more robust set of capabilities that include escrow, recurring payments, and payment protection.
Platform Differentiators:
-Cross chain NFT trading using NFT assets published on specialty NFT blockchains like Flow (Dapper Labs) and Hive (Splinterlands)
-The ability to use fungible assets from any blockchain to make payment including legacy POW (BTC,LTC, ETC, BCH, etc) (x chain bridge to use : Ren and Darwinia, xchain AMM : mooniswap)
-Anti fraud capabilities to verify vendors using staking and more sophisticated validation methods; fighting fraud and direct duplication ; making bondly staking requirements mandatory for verification and taking their stake if they are proven to violate copyright 
-Ability to publish NFT assets and NFT contracts with no technical background, similar to Rarible and Cargo.

## Team :busts_in_silhouette:

### Team members
* Name of team leader
Brandon Smith (CEO)
* Names of team members	
Harry Liu (COO)
Ian Arden (CTO)


### Team Website	
Company Website: https://www.bondly.finance 
Medium:https://bondlyfinance.medium.com/
Twitter:https://twitter.com/BondlyFinance


### Legal Structure 
Provided separetly in google form.

### Team's experience
Brandon Smith: Managing partner at Shuttle Capital, VP of Shieldpay, Director at PWC, Analytics Team Lead (CAS) at GE

Harry Liu: Google Partner, Senior Partner at Shuttle Capital Advisory, Founder of Realtofy, Co-founder of Tutor Hero

Ian Arden: CTO of Bridge Mutual, Co-founder and CEO of Applicature, Head of Blockchain Security at Zokyo, Co-founder and CEO of MilestoneBased


### Team Code Repos
* https://github.com/Mr-zoom666
* https://github.com/agent-bond


### Team LinkedIn Profiles
Brandon Smith: https://www.linkedin.com/in/brandonmsmith/
Harry Liu: https://www.linkedin.com/in/harryprofile/
Ian Arden: https://www.linkedin.com/in/ian-arden/

## Development Roadmap :nut_and_bolt: 

This section should break out the development roadmap into a number of milestones. Since the milestones will appear in the grant contract, it helps to describe the functionality we should expect, plus how we can check that such functionality exists in the product. Whenever milestones are delivered, we refer to the contract to ensure that everything has been delivered as expected.

Below we provide an **example roadmap**. In the descriptions it should be clear how the project is related to Substrate and/or Polkadot. We recommend that the scope of the work can fit within a 3 month period and that teams structure their roadmap as 1 month = 1 milestone. 

For each milestone:
### Overview
Total Estimated Duration:** June 2021
Full-time equivalent (FTE):**  7
Total Costs:** $30k



### Milestone 1 - Finalize Figma Prototype

Estimated Duration:** 1 month
FTE:**  1
Costs:** $5,000

As a result we are going to produce high fidelity prototypes suitable for development of the user interface of the marketplace.

Sprint 1: design basic seller experience
Sprint 2: design basic buyer experience
Sprint 3: design advanced settings for seller
Sprint 4: design custom storefronts configurations


### Milestone 2 - Develop the UI part for the MVP

Estimated Duration:** 1 month
FTE:**  2
Costs:** $5,000

We will create a single-page responsive web application using Angular to reflect basic Buyer and Seller user stories.

Sprint 1: develop UI: General elements, pages and layouts of the marketplace (Angular)
Sprint 2: develop UI for Buyer basic experience (Angular)
Sprint 3: develop UI for Seller basic experience (Angular)
Sprint 4: stabilize the UI (Angular)


### Milestone 3 - Develop Smart Contracts and Backend Layer v.1
Estimated Duration:** 1 month
FTE:**  1
Costs:** $5,000

Smart contracts layer will be developed for all the critical business logic.
We will use Solidity v.0.7 for development and Truffle framework for testing.

Back end layer will be created for storing non-critical data and settings, as well as for caching purposes.
We will use NodeJS and MongoDB on the backend, deploying the solution on AWS infrastructure.

Sprint 1: develop smart contracts; develop MongoDB data schema
Sprint 2: develop smart contracts; develop restful API layer
Sprint 3: cover smart contracts with tests; develop restful API layer
Sprint 3: cover smart contracts with tests; solidify restful API layer


### Milestone 4 - Port smart contract layer on Substrate EVM Pallet
Estimated Duration:** 1 month
FTE:**  1
Costs:** $5,000

We will research and select a proper solution for EVM on Substrate, and port our solution on it.

Sprint 1: research of the available solutions: Moonbeam, EdgeWare
Sprint 2: proof of concept, full port
Sprint 3: full port; troubleshooting
Sprint 4: full port; troubleshooting


### Milestone 5 - Integrate and debug the browser wallet, contribute to the open 
source related to NFT component of the wallet
Estimated Duration:** 1 month
FTE:**  1
Costs:** $5,000

We will discuss the most important community improvement requests with the Substrate solution of our choice, and will contribute to the open source of the wallet in the realm of NFT interaction.


### Milestone 6- Develop advanced publisher verification component
Estimated Duration:** 1 month
FTE:**  1* 
Costs:** $5,000

Big brands need extra protection and a verified status for counterfeit protection. We will develop the module for advanced verification of publishers through the registry of verified publishers managed through the voted multi signature approval.

Sprint 1: design voting UI
Sprint 2: develop registry and voting on smart contracts
Sprint 2: develop voting UI
Sprint 3: cover with tests


### Community engagement

Will be performed after achieving milestones

## Future Plans
The long term plan for BondProtect will involve adapting trading capabilities across multiple blockchain platforms.  
We will seek additional technology partners and build new cross chain bridges as needed.  

## Additional Information :heavy_plus_sign: 
Any additional information that you think is relevant to this application that hasn't already been included.

Possible additional information to include:
* What work has been done so far?
-Adoption of Substrate
-Research on Kusama, Frontier, EdgeWare
-PRD on Bond Protect verified NFT store
-Figma Prototype
-UI Development (Angular)
-Completion of BondSwap within Solidity

* Are there are any teams who have already contributed (financially) to the project?
Token raise.
* Have you applied for other grants so far?
No.

