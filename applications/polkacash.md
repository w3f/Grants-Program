# Open Grant Proposal

> This document is referenced in the terms and conditions and therefore needs to contain all the required information. Don't remove any of the mandatory parts presented in bold letters or as headlines! See the [Open Grants Program Process](https://github.com/w3f/Open-Grants-Program/blob/master/README_2.md) on how to submit a proposal.

> This page is also available in [Chinese (中文)](./application-template-cn.md).

* **Project Name:** PolkaCash
* **Team Name:** SeafoodPlatter
* **Payment Address:** BTC Address: 3NYWRCuuFUo7NfXiyHfr4wrxTJhTG6oXxm

*The above combination of your GitHub account submitting the application and payment address will be your unique identifier during the program. Please keep them safe.*

## Project Overview :page_facing_up: 
### Overview

PolkaCash Protocol is a self-regulating permission-less stablecoin, with a USD peg that is algorithmically programmed to maintain stability through community-driven demand and supply mechanisms, by controlling money supply similarly to how central banks of the world guide the value of fiat money through monetary policy. By controlling the quantity of money supply in an economy by buying or selling bonds, a target value can be achieved (In this case 1 USD). Instead of a central bank or a currency board, rules are set and executed programmatically via smart contracts so that behavior of the system can be predictable.

Currently, PolkaCash is launched on Ethereum, with a Polkadot protocol under development. Users holding POC and POS will receive airdrops during the Polkadot migration to seed the community once the protocol development is completed.

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
* **Total Costs:** 0.6 BTC

### Milestone 1 MVP & refining of metrics
* **Estimated Duration:** 1 months
* **FTE:**  2
* **Costs:** 0.2 BTC

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 / MIT / Unlicense |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can (for example) spin up one of our Substrate nodes. Once the node is up, it will be possible to send test transactions that will show how the new functionality works. |
| 0c. | Testing Guide | The code will have unit-test coverage (min. 70%) to ensure functionality and robustness. In the guide we will describe how to run these tests | 
| 0d. | Article/Tutorial | We will write an article or tutorial that explains the work done as part of the grant. 


### Milestone 2 Deploy on Kusama and create pools
* **Estimated Duration:** 1 month
* **FTE:**  2
* **Costs:** 0.2 BTC

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 1. | Substrate module: PolkaCash | We will create a Substrate module for the main token which is the stablecoin. |  
| 2. | Substrate module: PolkaPool | We will create a Substrate module that will create pools for users to stake in. |  
| 3. | Substrate module: PolkaShare | We will create a Substrate module for the governance token of the project. |  

### Milestone 3 Launch as Beta & onboarding of new users on Kusama
* **Estimated Duration:** 1 month
* **FTE:**  2
* **Costs:** 0.2 BTC

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 4. | Substrate chain | Modules of our custom chain will interact with the Substrate chain. |
| 5. | Docker | We will provide a dockerfile to demonstrate the full functionality of our chain. |
| 6. | Documentation | We will provide a detailed guide for the platform on gitbook. |

## Future Plans
After PolkaCash has succeeded in becoming the market leader in the crypto space with a sizable userbase, we will start incorporating sports and esports next and finally general events like elections etc. With a large and active userbase, PolkaCash would also play an important role in making crypto mainstream and exposing non-crypto users to the benefits and power of blockchain and Polkadot in particular.

Possible additional information to include:
* What work has been done so far?
Deployed on Ethereum main net.
* Are there are any teams who have already contributed (financially) to the project?
No
* Have you applied for other grants so far?
No
