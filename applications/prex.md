# Open Grant Proposal

> This document is referenced in the terms and conditions and therefore needs to contain all the required information. Don't remove any of the mandatory parts presented in bold letters or as headlines! See the [Open Grants Program Process](https://github.com/w3f/Open-Grants-Program/blob/master/README_2.md) on how to submit a proposal.

> This page is also available in [Chinese (中文)](./application-template-cn.md).

* **Project Name:** PREX Technologies
* **Team Name:** Ang Kang Wei
* **Payment Address:** DAI: 0x9876abc7fd0e6ae6d36bee8cf04cb648978b16a1

## Project Overview :page_facing_up: 

PREX stands for PredictionExchange and is a prediction market infrastructure that allows users to make their own predictions as well as follow or go against influencers' predictions.  

The team has always been interested in prediction markets and have watched the progress of predecessors and are very excited as we might have discovered a recipe to create a product that incorporates the right technology while making use of the force of influencers to drive user adoption, while also mutually benefiting said influencers as there will also be incentives for them building a large userbase on PREX as well.

![prex-architecture](https://user-images.githubusercontent.com/78590360/109122937-3f84fa80-7784-11eb-9458-fb3cd2f253a3.png)

### Project Details 

PREX aims to build initial POC to focus only on crypto markets but incorporating influencers that are ever so prevalent in the blockchain industry to bring about excitement and userbase. Finally, when we are ready for full deployment on Polkadot, we aim to already be the market leader in terms of the number of users and Sharks (influencers), who are also able to make predictions across chains. 

### Ecosystem Fit 

Existing prediction market projects suffer from lack from activity due to several reasons: ETH projects incur high gas fees. BSC projects do not currently have sufficient users. Projects that focus on crypto only are too boring. Projects that attempt to do it all, incorporating sports, esports etc are too early for their time as supporter base is not yet in existance. PREX aims to make the project more user-friendly with the tech, and to make it more fun by bringing in influencers who will naturally showcase their PREX pools on their social media to show off their predictions.

## Team :busts_in_silhouette:

### Team members
* **Contact Name:** Ang Kang Wei
* **Contact Email:** prex.finance@gmail.com
* **Contact Email:** https://prex.finance (In progress)

### Team's experience
Ang Kang Wei started getting involved in the blockchain space in late 2016. Having witnessed the ICO mania cycle and crypto winter, he has a keen understanding of crypto markets. 

Apart from being an investor in various stages of various blockchain projects, he was also an ambassador to NULS, a  blockchain infrastructure project and remains a Council Member to this day. 

As an originally non-technical founder, he has picked up blockchain development while working with various blockchain developers in the process.

### Team Code Repos
* https://github.com/prexfinance

## Development Roadmap :nut_and_bolt: 

### Overview
* **Total Estimated Duration:** Duration of the whole project: 3 months
* **Full-time equivalent (FTE):**  2 FTE
* **Total Costs:** 18,000 DAI

### Milestone 1 MVP, start Substrate development & refining of mechanics
* **Estimated Duration:** 1.5 months
* **FTE:**  2
* **Costs:** 8,000 DAI

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache License 2.0 |
| 0b. | Documentation | Documents containing the description of whole architecture design for PREX |
| 0c. | Testing Guide | Provide a full test suite and guide for PREX mechanics. The code will have unit-test coverage (min. 70%) to ensure functionality and robustness. | 
| 0d. | Article/Tutorial | We will write an article or tutorial that explains the work done as part of the grant. |
| 1. | Substrate module: PREXMarkets | We will create a Substrate module that will automatically creates new markets once a minimum threshold is achieved. Fetches price from oracle and creates a market where user can choose to predict above or below |  
| 2. | Substrate module: PREXPredictions | We will create a Substrate module that will allow users to make predictions that are derived from price oracles. Allows user to enter a market with PREX Dollar. If wrong, he loses PREX Dollar. If correct, he wins a portion of the entire above+below pools.| 

### Milestone 2 Development of Substrate modules and integration on MVP
* **Estimated Duration:** 1.5 months
* **FTE:**  2
* **Costs:** 10,000 DAI

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 3. | Substrate module: PREXPools | We will create a Substrate module that will allow PREX Sharks (influencers) to create their own pools for users to follow. This is still under discussion but this is tentatively for influencers to create their own pools for users to stake in. If users choose a smart influencer to stake with, they stand to get a portion of profits when the influencers prove to be correct. This is to encourage users to hold PREX Tokens which are required to create pools.|
| 4. | Substrate chain | Modules of our custom chain will interact with the network for placing predictions. |  
| 6. | Front End | Complete the development of the basic interactive page in React. |
| 7. | Docker | We will provide a dockerfile to demonstrate the full functionality of our chain. |
| 8. | Documentation | We will provide a detailed guide for the platform on gitbook. |

We are tentatively planning to use Band for price oracle.

### Madlib-style UI Mock-up

We are doing a madlib kind of style for the UI to make it clear to the user what his predictions are and of course some of the figures are dynamic and taken from the price oracles. Here's a rough mockup:

![prex-ui](https://user-images.githubusercontent.com/78590360/109788608-6cd11d00-7c4a-11eb-93e4-e1c6927e1e9a.png)

## Technical Stack
* Programming language: Rust
* Framework: Substrate + FRAME
* Project template: Substrate Node Template
* Source control: Github or Gitlab
* CI/CD: Docker container based, with Runners or Actions
* Front-end: React + Polkadot.js

We are considering between using smart contracts or pallets but are tending more towards pallets for speed; we plan to make contracts as simple as possible to make it easy on the players and have thus tentatively settled on using pallets. Might change if we decide the added layer of complexity is necessary to require smart contracts instead.

## Future Plans
After PREX has succeeded in becoming the market leader in the crypto space with a sizable userbase, we will start incorporating sports and esports next and finally general events like elections etc. With a large and active userbase, PREX would also play an important role in making crypto mainstream and exposing non-crypto users to the benefits and power of blockchain and Polkadot in particular.

Possible additional information to include:
* What work has been done so far?
Extensive testing of other platforms to design a product that has the greatest odds of gaining traction.
* Are there are any teams who have already contributed (financially) to the project?
No
* Have you applied for other grants so far?
No
