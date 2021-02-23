# Open Grant Proposal

> This document is referenced in the terms and conditions and therefore needs to contain all the required information. Don't remove any of the mandatory parts presented in bold letters or as headlines! See the [Open Grants Program Process](https://github.com/w3f/Open-Grants-Program/blob/master/README_2.md) on how to submit a proposal.

> This page is also available in [Chinese (中文)](./application-template-cn.md).

* **Project Name:** PREX Technologies
* **Team Name:** Ang Kang Wei
* **BTC Payment Address:** 19bnwvqYrke26CFWXQDdQy19tstHRFGwqJ

## Project Overview :page_facing_up: 

PREX stands for PredictionExchange and is a prediction market infrastructure that allows users to make their own predictions as well as follow or go against influencers' predictions.  

The team has always been interested in prediction markets and have watched the progress of predecessors and are very excited as we might have discovered a recipe to create a product that incorporates the right technology while making use of the force of influencers to drive user adoption, while also mutually benefiting said influencers as there will also be incentives for them building a large userbase on PREX as well.

### Project Details 

PREX aims to build initial POC on BSC, focusing only on crypto markets but incorporating influencers that are ever so prevalent in the blockchain industry to bring about excitement and userbase. Finally, when we are ready for full deployment on Polkadot, we aim to already be the market leader in terms of the number of users and Sharks (influencers), who are also able to make predictions across chains. 

### Ecosystem Fit 

Existing prediction market projects suffer from lack from activity due to several reasons: ETH projects incur high gas fees. BSC projects do not currently have sufficient users. Projects that focus on crypto only are too boring. Projects that attempt to do it all, incorporating sports, esports etc are too early for their time as supporter base is not yet in existance.

## Team :busts_in_silhouette:

### Team members
* **Contact Name:** Ang Kang Wei
* **Contact Email:** prex.finance@gmail.com
* **Contact Email:** https://prex.finance (In progress)

### Team's experience
Ang Kang Wei started getting involved in the blockchain space in late 2016. Having witnessed the ICO mania cycle, he has a keen understanding of crypto markets. 

Apart from being an investor in various stages of various blockchain projects, he was also an ambassador to NULS, a  blockchain infrastructure project and remains a Council Member to this day. 

As an originally non-technical founder, he has picked up blockchain development while working with various blockchain developers in the process.

### Team Code Repos
* https://github.com/prexfinance

## Development Roadmap :nut_and_bolt: 

### Overview
* **Total Estimated Duration:** Duration of the whole project (e.g. 3 months)
* **Full-time equivalent (FTE):**  2 FTE
* **Total Costs:** 0.6 BTC

### Milestone 1 MVP & refining of mechanics
* **Estimated Duration:** 1 months
* **FTE:**  2
* **Costs:** 0.2 BTC

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 / MIT / Unlicense |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can (for example) spin up one of our Substrate nodes. Once the node is up, it will be possible to send test transactions that will show how the new functionality works. |
| 0c. | Testing Guide | The code will have unit-test coverage (min. 70%) to ensure functionality and robustness. In the guide we will describe how to run these tests | 
| 0d. | Article/Tutorial | We will write an article or tutorial that explains the work done as part of the grant. 


### Milestone 2 Deploy on Kusama and onboarding of PREX Sharks on MVP
* **Estimated Duration:** 1 month
* **FTE:**  2
* **Costs:** 0.2 BTC

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 1. | Substrate module: PREXMarkets | We will create a Substrate module that will automatically creates new markets once a minimum threshold is achieved. |  
| 2. | Substrate module: PREXPredictions | We will create a Substrate module that will allow users to make predictions that are derived from price oracles. |  
| 3. | Substrate module: PREXPools | We will create a Substrate module that will allow PREX Sharks (influencers) to create their own pools for users to follow. |  

### Milestone 3 Launch as Beta & onboarding of new users on Kusama
* **Estimated Duration:** 1 month
* **FTE:**  2
* **Costs:** 0.2 BTC

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 4. | Substrate chain | Modules X, Y & Z of our custom chain will interact in such a way... (Please describe the deliverable here as detailed as possible) |  
| 5. | Docker | We will provide a dockerfile to demonstrate the full functionality of our chain. |
| 6. | Documentation | We will provide a detailed guide for the platform on gitbook. |

## Future Plans
After PREX has succeeded in becoming the market leader in the crypto space with a sizable userbase, we will start incorporating sports and esports next and finally general events like elections etc. With a large and active userbase, PREX would also play an important role in making crypto mainstream and exposing non-crypto users to the benefits and power of blockchain and Polkadot in particular.

Possible additional information to include:
* What work has been done so far?
Extensive testing of other platforms to design a product that has the greatest odds of gaining traction.
* Are there are any teams who have already contributed (financially) to the project?
No
* Have you applied for other grants so far?
No
