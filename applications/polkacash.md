# Open Grant Proposal

> This document is referenced in the terms and conditions and therefore needs to contain all the required information. Don't remove any of the mandatory parts presented in bold letters or as headlines! See the [Open Grants Program Process](https://github.com/w3f/Open-Grants-Program/blob/master/README_2.md) on how to submit a proposal.

> This page is also available in [Chinese (中文)](./application-template-cn.md).

* **Project Name:** PolkaCash
* **Team Name:** SeafoodPlatter
* **Payment Address:** BTC Address: 3NYWRCuuFUo7NfXiyHfr4wrxTJhTG6oXxm

*The above combination of your GitHub account submitting the application and payment address will be your unique identifier during the program. Please keep them safe.*

## Project Overview :page_facing_up: 
### Overview

We are proud to introduce to you the new decentralized algorithmic protocol, PolkaCash Protocol.

PolkaCash Protocol is a self-regulating permission-less stablecoin, with a USD peg that is algorithmically programmed to maintain stability through community-driven demand and supply mechanisms, by controlling money supply similarly to how central banks of the world guide the value of fiat money through monetary policy. By controlling the quantity of money supply in an economy by buying or selling bonds, a target value can be achieved (In this case 1 USD). Instead of a central bank or a currency board, rules are set and executed programmatically via smart contracts so that behavior of the system can be predictable.

Several different designs of algorithmic stablecoins such as Basis Cash, Mith Cash and Emptyset Dollar have launched with ingenious mechanism designs and amazing communities. Each attempts to bring stablecoin price peg back to neutrality of 1 USD. During expansion this would be a happy problem to solve as an increase in supply provides for all. 

However, much can be said when prices drop below the peg. Current solutions mostly revolve around utilitizing bonds as a means of reducing circulating supply. Technically that’s the right assumption, but practically from observation, there are quite a number of flaws with this approach. Firstly, bonds that were bought has an expiry to it, meaning to say that the risk of purchasing a bond too early would be highly risky without recourse on the stablecoin capital utilized to purchase it. Secondly, burning supply via bond purchases has a loose beta relation to the price of the stablecoin as it does not trade out in the open market (thereby unable to affect prices). 

Therefore, we propose an improvised iteration of a treasury function for purchasing the stablecoin in the open market to re-peg the price of the stablecoin when it goes below 1 USD.

Upon every expansion of stablecoin supply when prices are > 1 USD, up to 10% treasury fee would be taken from the expansion and used to purchase ETH. When prices of the stablecoin drop below <1 USD, as an additional mechanism to the bond purchase function, a purchasing event would be triggered by the Treasury on Uniswap through the open market bringing stablecoin prices back closer to 1 USD.

Currently, PolkaCash is launched on Ethereum, with a Polkadot protocol under development. Users holding POC and POS will receive airdrops during the Polkadot migration to seed the community once the protocol development is completed.

### Project Details 
We expect the teams to already have a solid idea about the project's expected final state.

Therefore, we ask the teams to submit (where relevant):
* Mockups/designs of any UI components
* API specifications of the core functionality
* An overview of the technology stack to be used
* Documentation of core components, protocols, architecture etc. to be deployed
* PoC/MVP or other relevant prior work or research on the topic

### Ecosystem Fit 
Are there any other projects similar to yours? If so, how is your project different?

## Team :busts_in_silhouette:

* **Contact Name:** @lobsteronplatter
* **Contact Email:** polkacash.finance@gmail.com
* Website: https://polkacash.finance

### Team's experience
Please describe the team's relevant experience.  If the project involves development work, then we'd appreciated if you can single out a few interesting code commits made by team members on their past projects. For research-related grants, references to past publications and projects in a related domain are helpful.  

### Team Code Repos
* https://github.com/polkacash/POLKACASH_MAIN

## Development Roadmap :nut_and_bolt: 

This section should break out the development roadmap into a number of milestones. Since the milestones will appear in the grant contract, it helps to describe the functionality we should expect, plus how we can check that such functionality exists in the product. Whenever milestones are delivered, we refer to the contract to ensure that everything has been delivered as expected.

Below we provide an **example roadmap**. In the descriptions it should be clear how the project is related to Substrate and/or Polkadot. We recommend that the scope of the work can fit within a 3 month period and that teams structure their roadmap as 1 month = 1 milestone. 

For each milestone:
* Please be sure to include a specification of your software. Treat it as a contract - the level of detail must be enough to later verify that the software meets the specification.
To assist you in defining it, we created a document with examples for some grant categories [here](../src/grant_guidelines_per_category.md).
* Please include total amount of funding requested per milestone.
* Please note that we require documentation (e.g. tutorials, API specifications, architecture details) in each milestone. This ensures that the code can be widely used by the community.
* Please provide a test suite, comprising unit and integration tests, along with a guide on how to run these.
* Please commit to providing a dockerfiles for the delivery of your project. 
* Please indicate the milestone duration, as well as number of Full-Time Employees working on each milestone, and include the number of days along with their cost per day.
* Deliverables 0a-0d are mandatory and should not be removed, unless you explicitly specify a reason within the PR's `Additional Notes` section (e.g. Milestone X is research oriented and as such there is no code to test)

### Overview
* **Total Estimated Duration:** Duration of the whole project (e.g. 2 months)
* **Full-time equivalent (FTE):**  Workload of an employed person ([see](https://en.wikipedia.org/wiki/Full-time_equivalent)) (e.g. 2 FTE)
* **Total Costs:** Amount of Payment in USD for the whole project. The total amount of funding needs to be below $30k for initial grants and $100k for follow-up grants at the time of submission. (e.g. 1.000 USD)

### Milestone 1 Example — Implement Substrate Modules 
* **Estimated Duration:** 1 month
* **FTE:**  1
* **Costs:** 1.000 USD

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 / MIT / Unlicense |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can (for example) spin up one of our Substrate nodes. Once the node is up, it will be possible to send test transactions that will show how the new functionality works. |
| 0c. | Testing Guide | The code will have unit-test coverage (min. 70%) to ensure functionality and robustness. In the guide we will describe how to run these tests | 
| 0d. | Article/Tutorial | We will write an article or tutorial that explains the work done as part of the grant. 
| 1. | Substrate module: X | We will create a Substrate module that will... (Please list the functionality that will be coded for the first milestone) |  
| 2. | Substrate module: Y | We will create a Substrate module that will... |  
| 3. | Substrate module: Z | We will create a Substrate module that will... |  
| 4. | Substrate chain | Modules X, Y & Z of our custom chain will interact in such a way... (Please describe the deliverable here as detailed as possible) |  
| 5. | Docker | We will provide a dockerfile to demonstrate the full functionality of our chain |

### Milestone 2 Example — Additional features
...

## Future Plans
Please include the team's long-term plans and intentions.

## Additional Information :heavy_plus_sign: 
Any additional information that you think is relevant to this application that hasn't already been included.

Possible additional information to include:
* What work has been done so far?
* Are there are any teams who have already contributed (financially) to the project?
* Have you applied for other grants so far?
