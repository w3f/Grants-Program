# Open Grant Proposal

> This document is referenced in the terms and conditions and therefore needs to contain all the required information. Don't remove any of the mandatory parts presented in bold letters or as headlines! See the [Open Grants Program Process](https://github.com/w3f/Open-Grants-Program/blob/master/README_2.md) on how to submit a proposal.

> This page is also available in [Chinese (中文)](./application-template-cn.md).

* **Project Name:** Polkadot ChainJS plugins 
* **Team Name:** API Market, Inc. dba AIKON
* **Payment Address:** Ethereum Address: 0x7a6fdc8a113966d1236aB0FaB6dC5D3e5c05db88

*The above combination of your GitHub account submitting the application and payment address will be your unique identifier during the program. Please keep them safe.*

## Project Overview :page_facing_up: 
If this application in response to an RFP then please indicate this on the first line of this section.

### Overview

AIKON is dedicated to driving mass-adoption of blockchain. We would like to bring our flagship ORE ID service to Polkadot and to a variety of parachains. However, in order to build our API service on Polkadot, we need an open source library called ChainJS. ChainJS is an abstraction layer that allows web applications to interact directly with Polkadot using javascript. This standard provides a handful of easy methods for common interactions on-chain, like creating wallets, transferring tokens and signing transactions.

Once we have this ChainJS plugin, we can work with companies to launch tokens or applications on Polkadot with ORE ID. For example, with Republic’s Note token, they use ORE ID to create multi-sig wallets for their investors and the investors use their ORE ID login to sign transactions, but ChainJS actually forms the transactions and sends them to the blockchain. 

Our goal is to establish ChainJS as the de facto standard for javascript developers that want to build on Polkadot. 
* Open Source standard for Javascript
* Easy to use abstraction layer for web developers
* Makes it easy for developers to build on Polkadot and on parachains, that can roll out their own fork of the ChainJS library
* Allows AIKON to deploy ORE ID for companies on Polkadot

Once we have ChainJS, ORE ID provides four major benefits to businesses on Polkadot:
* Consumer friendly user experience - including social and email login
* API for mass migration of large existing databases of users
* API and javascript libraries that make it easy for developers to build on Polkadot
* Fiat invoicing for Polkadot transactions

Our open source ChainJS Repo: https://github.com/TeamAikon/chain-js

To learn more about AIKON and read our developer docs visit: https://aikon.com

### Project Details 


### Ecosystem Fit 
Are there any other projects similar to yours? If so, how is your project different?

## Team :busts_in_silhouette:

### Team members
* Marc Blinder, CEO
* Tray Lewin, CTO
* Randy Torres
* Basar Celebci
* Mamoon Ahmed
* Babar Bilal
* Daniel Lin
* Bill Rusitzky


### Contact
* **Contact Name:** Bill Rusitzky
* **Contact Email:** bill@aikon.com
* https://aikon.com

### Legal Structure 
* **Registered Address:** 122 Maynard St, San Francisco, CA 94112
* **Registered Legal Entity:** API Market, Inc.

### Team's experience
The AIKON team has been building blockchain technology since 2017, and the founders have decades of combined enterprise software experience before that. AIKON are major contributors to the Open Rights Exchange blockchain: https://github.com/Open-Rights-Exchange and they also launched the ORE ID product for onboarding users to a variety of public blockchains: https://github.com/TeamAikon/ore-id-docs 

### Team Code Repos
* https://github.com/TeamAikon
* https://github.com/TeamAikon/chain-js


### Team LinkedIn Profiles
* https://www.linkedin.com/in/marcblinder/
* https://www.linkedin.com/in/traylewin/
* Additonal team info can be found on https://aikon.com

## Development Roadmap :nut_and_bolt: 

ChainJS Polkadot Plugin Devlierables
ChainJS is a low-level Javascript helper library that helps you write code that can work with multiple blockchains. ChainJs uses a plug-in model and a unified interface to do common blockchain functions like constructing, signing, and sending blockchain transactions.

Publish open source Polkadot plugin for ChainJS standard, including the following functions:
* Create wallet
* Create multisig wallet
* Construct transaction
* Transfer tokens

We will also deliver
* Developer documentation 

Estimated to be ~1 month total

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
* **Total Estimated Duration:** 1 month
* **Full-time equivalent (FTE):** 2 FTE
* **Total Costs:** $29,700 in DAI

### Milestone 1 Example — Implement ChainJS Library for Polkadot
* **Estimated Duration:** 1 month
* **FTE:**  2
* **Costs:** $29,700 in DAI

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 / MIT / Unlicense |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how engineers use the ChainJS library. 
| 0c. | Testing Guide | The code will have unit-test coverage (min. 70%) to ensure functionality and robustness. In the guide we will describe how to run these tests | 
| 0d. | Article/Tutorial | We will write an article or tutorial that explains the work done as part of the grant. 
1. Publish open source Polkadot plugin for ChainJS standard, including the following functions:
* Create wallet
* Create multisig wallet
* Construct transaction
* Transfer tokens

## Future Plans
Once we have ChainJS, ORE ID provides four major benefits to businesses on Polkadot:
* Consumer friendly user experience - including social and email login
* API for mass migration of large existing databases of users
* API and javascript libraries that make it easy for developers to build on Polkadot
* Fiat invoicing for Polkadot transactions
