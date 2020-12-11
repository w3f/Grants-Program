# Open Grant Proposal

> This document is referenced in the terms and conditions and therefore needs to contain all the required information. Don't remove any of the mandatory parts presented in bold letters or as headlines! See the [Open Grants Program Process](https://github.com/w3f/Open-Grants-Program/blob/master/README_2.md) on how to submit a proposal.

* **Project Name:** NG Aggregator
* **Team Name:** NG Team
* **Payment Address:** 37NNm79Vk8NMNZDNFp8iy9TNBeTUs5dbeg

*The above combination of your GitHub account submitting the application and payment address will be your unique identifier during the program. Please keep them safe.*

## Project Overview :page_facing_up: 
A Defi Aggregator Wallet connect more users to Polkadot Ecosystem

### Overview

Please provide the following:
  * A Defi Aggregator which will integrate Substrate modular framework
  * Will Pass cross-chain messages, combines to Polkadot
  * Aggregators emphasize UX/UI improvements over the liquidity layer, whereas the liquidity layer is singularly focused on improving the core underlying functionality (lending, exchange, etc). 
  * The integration with Polkadot will maximize utilize the asset management across various chains and different defi protocols.


### Project Details 
We expect the teams to already have a solid idea about the project's expected final state.

Therefore, we ask the teams to submit (where relevant):
* Mockups/designs of UI components
![alt text](https://github.com/fintie/Open-Grants-Program/blob/master/img/overview.jpeg?raw=true)
![alt text](https://github.com/fintie/Open-Grants-Program/blob/master/img/loading.jpeg?raw=true)
![alt text](https://github.com/fintie/Open-Grants-Program/blob/master/img/passcode.jpeg?raw=true)
![alt text](https://github.com/fintie/Open-Grants-Program/blob/master/img/login.jpeg?raw=true)
![alt text](https://github.com/fintie/Open-Grants-Program/blob/master/img/id.jpeg?raw=true)
![alt text](https://github.com/fintie/Open-Grants-Program/blob/master/img/portfolio.jpeg?raw=true)

* API specifications of the core functionality
  * Account Management**
  * Wallet Management
    * MetaMask
    * WalletConnect
  * Market Data Display
    * Wallet Token
    * Defi Staking Info
    * Reward Info
  * Defi Management 
    * Lend / Borrow / Trade/ Stake

(More Details in core protocols section)

* An overview of the technology stack to be used

  * NicksPallet
  * FRAME pallets Interaction
  * RPC Servers Configuration
  * Runtime Rust Code
  * Gafana/Prometheus Visualization

* Documentation of core components, protocols, architecture etc. to be deployed
![alt text](https://github.com/fintie/Open-Grants-Program/blob/master/img/layers.png?raw=true)

  * Portfolio Dashboard of Asset Management
  * Security Wallet Access
  * Market Integration (Coingecko, Dune Analytics)
  * Swap Integration (Uniswap, Curv)
  * Defi Integration (AAVE, Compound, Maker, Synthetix,)


### Ecosystem Fit 
YFI & YFII

## Team :busts_in_silhouette:

### Team members
* Name of team leader: Nick Qi
* Names of team members: William B. , UXMC

### Contact
* **Contact Name:** Nick Qi
* **Contact Email:** info@nextgenius.com.au
* Website: nextgenius.com.au

### Legal Structure 
* **Registered Address:** Level 3, 11 York St, Wynyard, Sydnye, Australia
* **Registered Legal Entity:** Nextgeinus Pty Ltd

### Team's experience

* Nick Qi
  * Experienced tech lead with a demonstrated working experience in Education(UNSW, Western Sydney Uni, Sydney Uni), Health Care(PoW Hospital), Finance(Deloitte), and Public Sectors(Transport NSW, Defence), has extensive experience in establishing technology-based companies become successful enterprises.
  * Skilled in Solution Design and Application Architecture with Python, React, Node, Tensorflow, Spark, Salesforce, ServiceNow, IBM Watson and AWS Stack.
  * Strong Engineering and R&D background with a IT Master from UNSW, and current eLearning Platform Researcher in UTS.
  * Founder of NextGenius Community, with more than 80 Meetups held in Sydney, Australia since 2013, covering topics from Web 2.0, Digital Transformation, Artificial Intelligence, Machine Learning, to nowadays FinTech & Blockchain.
 
 
* William B. (UXMC Certified) specialises in the DeFi industry with a background in the Wealth and Global banking industries.

  * Ex-Senior Product Designer at the World’s Leading Crypto Exchange (2019-2020). Working on Mobile app redesign, Trade & Finance team mentor and New User Onboarding/Education journeys for mass adoption of millions of users trading over 9 Billion USD daily volume. Previous Design Lead for Electra Protocol (2018) and Rapids Network (2019). 
  * Ex-Senior Manager, Strategic Design for Standard Chartered Bank, AME Region (2017-2019). 
  * Ex-Senior Consultant in Deloitte (2014-2016) within large agile cross-functioning teams across complex strategic design programs led with a Lean start up and Human-Centred Design approach to digital transformation for AMP financial services company. 
  * Ex-Lead Mobile UX/UI Designer of Yahoo US Team.


### Team Code Repos
* https://github.com/fintie

### Team LinkedIn Profiles
* https://www.linkedin.com/nicholas-qi
* https://www.linkedin.com/williambvg

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
* **Total Estimated Duration:** 2-3 months
* **Full-time equivalent (FTE):**  2-3 FTE
* **Total Costs:** 2BTC


| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 / MIT / Unlicense |
| 0b. | Mobile App | We will provide both inline documentation of the code and a basic tutorial that explains how a user can interact the aggregator interface with our Substrate nodes.  |
| 0c. | Testing Guide | The code will have unit-test coverage (70%) to ensure functionality and robustness. In the guide we will describe how to run these tests | 
| 0d. | Article/Tutorial | We will write an article or tutorial that explains the work done as part of the grant. 
| 1. | User Profile | We will create a Substrate module that to create, modify and delete user account. |  
| 2. | Defi Gateway | We will create a Substrate module that will access Defi Protocols |  
| 3. | Token Swap | We will create a Substrate module that will execute token swap |  
| 4. | Substrate chain | Above Modules of our custom chain will interact in substrate chain through front end pallets to frame pallets, RPC, Runtime and Gafana Visualization |  
| 5. | Docker & AWS | We will provide a dockerfile and cloud service end points to demonstrate the full functionality of our application |