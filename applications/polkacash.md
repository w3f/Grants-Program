# Open Grant Proposal

> This document is referenced in the terms and conditions and therefore needs to contain all the required information. Don't remove any of the mandatory parts presented in bold letters or as headlines! See the [Open Grants Program Process](https://github.com/w3f/Open-Grants-Program/blob/master/README_2.md) on how to submit a proposal.

> This page is also available in [Chinese (中文)](./application-template-cn.md).

* **Project Name:** PolkaCash
* **Team Name:** SeafoodPlatter
* **Payment Address:** DAI Address: 0x6404a754A05F0449AEFc4b1264b3B4a34Ab49Be7

*The above combination of your GitHub account submitting the application and payment address will be your unique identifier during the program. Please keep them safe.*

## Project Overview :page_facing_up: 
### Overview

PolkaCash Protocol is a self-regulating permission-less stablecoin, with a USD peg that is algorithmically programmed to maintain stability through community-driven demand and supply mechanisms, by controlling money supply similarly to how central banks of the world guide the value of fiat money through monetary policy. By controlling the quantity of money supply in an economy by buying or selling bonds, a target value can be achieved (In this case 1 USD). Instead of a central bank or a currency board, rules are set and executed programmatically via smart contracts so that behavior of the system can be predictable.

Currently, PolkaCash is launched on Ethereum, with a Polkadot protocol under development. Users holding POC and POS will receive airdrops during the Polkadot migration to seed the community once the protocol development is completed.

![algo-stablecoin-chart](https://user-images.githubusercontent.com/77069470/109126639-74934c00-7788-11eb-9ba7-2048bf168a1d.png)

### Project Details 
We already have a UI deployed on the ETH network here:
https://polkacash.finance

### Ecosystem Fit 
Several different designs of algorithmic stablecoins such as Basis Cash, Mith Cash and Emptyset Dollar have launched with ingenious mechanism designs and amazing communities. Each attempts to bring stablecoin price peg back to neutrality of 1 USD. During expansion this would be a happy problem to solve as an increase in supply provides for all. 

However, much can be said when prices drop below the peg. Current solutions mostly revolve around utilitizing bonds as a means of reducing circulating supply. Technically that’s the right assumption, but practically from observation, there are quite a number of flaws with this approach. Firstly, bonds that were bought has an expiry to it, meaning to say that the risk of purchasing a bond too early would be highly risky without recourse on the stablecoin capital utilized to purchase it. Secondly, burning supply via bond purchases has a loose beta relation to the price of the stablecoin as it does not trade out in the open market (thereby unable to affect prices). 

## Team :busts_in_silhouette:

* **Contact Name:** @lobsteronplatter
* **Contact Email:** polkacash.finance@gmail.com
* Website: https://polkacash.finance

### Team's experience
Please describe the team's relevant experience.  If the project involves development work, then we'd appreciated if you can single out a few interesting code commits made by team members on their past projects. For research-related grants, references to past publications and projects in a related domain are helpful.  

### Team Code Repos
* https://github.com/polkacash/POLKACASH_MAIN

## Development Roadmap :nut_and_bolt: 

### Overview
* **Total Estimated Duration:** Duration of the whole project (e.g. 3 months)
* **Full-time equivalent (FTE):**  2 FTE
* **Total Costs:** 30,000 DAI

### Milestone 1 MVP, start Substrate development & refining of treasury
* **Estimated Duration:** 1.5 months
* **FTE:**  2
* **Costs:** 15,000 DAI

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache License 2.0 |
| 0b. | Documentation | Documents containing the description of whole architecture design for PolkaCash |
| 0c. | Testing Guide | Provide a full test suite and guide for PREX mechanics. The code will have unit-test coverage (min. 70%) to ensure functionality and robustness. | 
| 0d. | Article/Tutorial | We will write an article or tutorial that explains the work done as part of the grant. |
| 1. | Substrate module: Pools | We will create a Substrate module that will allow users to take tokens. |  
| 2. | Substrate module: Treasury | We will create a Substrate module that attempts to balance the price of Polka Cash tokens to close to $1. | 


### Milestone 2 Development of Substrate modules and integration on MVP
* **Estimated Duration:** 1.5 months
* **FTE:**  2
* **Costs:** 15,000 DAI

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 3. | Substrate module: Shares & Bonds | We will create a Substrate module that will allow price fluctutations on Shares based on mechanics and enabling of Bond mechanics. |
| 4. | Substrate chain | Modules of our custom chain will interact with the network for balancing price of Cash. |  
| 6. | Front End | Complete the development of the basic interactive page in React. |
| 7. | Docker | We will provide a dockerfile to demonstrate the full functionality of our chain. |
| 8. | Documentation | We will provide a detailed guide for the platform on gitbook. |

## Technical Stack
* Programming language: Rust
* Framework: Substrate + FRAME
* Project template: Substrate Node Template
* Source control: Github or Gitlab
* CI/CD: Docker container based, with Runners or Actions
* Front-end: React + Polkadot.js

## Future Plans
PolkaCash aims to be the de facto market leader in algo stablecoins with our unique mechanisms to maintain the price of POC. With a large and active userbase, PolkaCash would also play an important role in making crypto mainstream and exposing non-crypto users to the benefits and power of blockchain and Polkadot in particular.

Possible additional information to include:
* What work has been done so far?
Deployed on Ethereum main net.
* Are there are any teams who have already contributed (financially) to the project?
No. Project has been bootstrapped and self-funded so far.
* Have you applied for other grants so far?
No
