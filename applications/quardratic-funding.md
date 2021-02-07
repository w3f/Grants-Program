# Open Grant Proposal

> This document is referenced in the terms and conditions and therefore needs to contain all the required information. Don't remove any of the mandatory parts presented in bold letters or as headlines! See the [Open Grants Program Process](https://github.com/w3f/Open-Grants-Program/blob/master/README_2.md) on how to submit a proposal.

> This page is also available in [Chinese (中文)](./application-template-cn.md).

* **Project Name:** Quadratic Funding Module
* **Team Name:** Forge Labs
* **Payment Address:** BTC, 141Y9sybQKH6rfCj6DhDeRFR9Ja7rAWKjw

## Project Overview :page_facing_up: 
> If this application in response to an RFP then please indicate this on the first line of this section.

This application is to solve the problem proposed in [On-chain Quadratic Funding (General-Grants-Program/rfp-proposal/on-chain-quadratic-funding.md)](https://github.com/w3f/General-Grants-Program/blob/master/rfp-proposal/on-chain-quadratic-funding.md)

### Overview

> Please provide the following:
    * A brief description of the project.

Quardratic Funding is a common short name for [Constrained Liberal Radicalism algorithm](https://blogchains.org/wp-content/uploads/sites/4/2019/04/SSRN-id3243656.pdf) proposed by Vitalik Buterin 2018, and is a way to efficiently fund projects in the Web3 ecosystem. The method incentives small contributions with a dynamic matching amount in a grant program as it uses a complex mathmatical equation for the curved calculation. It aims to balance the influence between small donators and big whales for public goods (open source program in our case) and enhance inclusivity for a community.

[Gitcoin](https://gitcoin.co/) is currently using this mechanism to successfully fund and support public goods. However, Gitcoin is centralized. The goal of this RFP is to develop a decentralized solution on top of [Substrate](https://github.com/paritytech/substrate), which can potentially be integrated into Kusama, Polkadot or any other Substrate-based chain as a pallet. The on-chain treasury could potentially sustainably fund the matching pool in the long-run. However, the Web3 Foundation would also be committed to fund a matching pool of the solution for initial test rounds. 

Credit of above goes to @Noc2 and @Swader.

> * An indication of how you will integrate this project into Substrate / Polkadot / Kusama.

We will build a pallet for the Substrate framework.

> * An indication of why your team is interested in creating this project.

I have friends working at Gitcoin since 2018 and I'm a big fan of their work. I am already a familiar user of the quadratic funding approach used in Gitcoin's grants, and believe it's a great experiment to solve many real-world problems. Transparency has always been one of the highlights of the advantages of blockchain, and by bringing a innovative and sophisticated funding method on-chain will provide great utility to Polkadot blockchains. The problem is challenging and fun to solve, and relative to the DAO concept of my focus, so my team decide to gear up and tackle the RFP.


### Project Details 
> We expect the teams to already have a solid idea about the project's expected final state.
Therefore, we ask the teams to submit (where relevant):
    * Mockups/designs of any UI components
    * API specifications of the core functionality
    * An overview of the technology stack to be used
    * Documentation of core components, protocols, architecture etc. to be deployed
    * PoC/MVP or other relevant prior work or research on the topic

### Ecosystem Fit 
> Are there any other projects similar to yours? If so, how is your project different?

There are DAO projects such as PolkaDAO being built on Polkadot, providing utility for private companies to raise funds. However, our focus is different. This project aims to provide an on-chain solution for public goods, such as grant for open source programs, government electroal voting and non-profit funding.

## Team :busts_in_silhouette:

### Team members
* Name of team leader: Chris Li
* Names of team members: Xingyou Chen, Zhongwei Shi, Kangbin Ge

### Contact
* **Contact Name:** Chris Li
* **Contact Email:** chris@forgelab.io
* **Website:** https://forgelab.io

### Legal Structure 
* **Registered Address:** 3 Embarcadero Center, Promenade Level Suite P5, San Francisco, CA 94111
* **Registered Legal Entity:** ForgeLabs Inc

### Team's experience
> Please describe the team's relevant experience. If the project involves development work, then we'd appreciated if you can single out a few interesting code commits made by team members on their past projects. For research-related grants, references to past publications and projects in a related domain are helpful.  

### Team Code Repos
* https://github.com/<your_repo_1>
* https://github.com/<your_repo_2>

### Team LinkedIn Profiles
* [Chris Li](https://www.linkedin.com/in/chrisli2046/)
* [Xingyou Chen](https://www.linkedin.com/in/xingyou-chen-283056205/)
* [Zhongwei Shi](https://www.linkedin.com/in/shi-zhongwei-b06573205/)
* [Kangbin Ge](https://www.linkedin.com/in/kangbin-ge-08a56b205/)

## Development Roadmap :nut_and_bolt: 

> This section should break out the development roadmap into a number of milestones. Since the milestones will appear in the grant contract, it helps to describe the functionality we should expect, plus how we can check that such functionality exists in the product. Whenever milestones are delivered, we refer to the contract to ensure that everything has been delivered as expected.

### Overview
* **Total Estimated Duration:** 3 months
* **Full-time equivalent (FTE):**  4 FTE
* **Total Costs:** 3 BTC

### Milestone 1 — Implement Substrate Modules 
* **Estimated Duration:** 1 month
* **FTE:**  1
* **Costs:** 0.75 BTC

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
> Please include the team's long-term plans and intentions.


## Additional Information :heavy_plus_sign: 
> Possible additional information to include:
> * What work has been done so far?

None
> * Are there are any teams who have already contributed (financially) to the project?

None

> * Have you applied for other grants so far?

No
