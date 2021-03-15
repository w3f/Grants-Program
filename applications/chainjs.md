# Open Grant Proposal

* **Project Name:** Polkadot & Kusama ChainJS plugin 
* **Team Name:** API Market, Inc. dba AIKON
* **Payment Address:** Ethereum Address: 0x7a6fdc8a113966d1236aB0FaB6dC5D3e5c05db88

## Project Overview :page_facing_up: 

### Overview

AIKON is dedicated to driving mass-adoption of blockchain. We would like to bring our flagship ORE ID service to Polkadot, Kusama and to a variety of parachains. However, in order to build our API service on Polkadot & Kusama, we need an open source library called ChainJS. ChainJS is an abstraction layer that allows web applications to interact directly with Polkadot using javascript. This standard provides a handful of easy methods for common interactions on-chain, like creating wallets, transferring tokens and signing transactions.

Once we have this ChainJS plugin, we can work with companies to launch tokens or applications on Polkadot with ORE ID. For example, with Republic’s Note token, they use ORE ID to create multi-sig wallets for their investors and the investors use their ORE ID login to sign transactions, but ChainJS actually forms the transactions and sends them to the blockchain. 

Our goal is to establish ChainJS as the de facto standard for javascript developers that want to build on Polkadot & Kusama. 
* Open Source standard for Javascript 
* Easy to use abstraction layer for web developers - unlike Polkadot.js, ChainJS simplifies the interface layer making it easier for new developers
* Makes it easy for developers to build on Polkadot, Kusama and on parachains, that can roll out their own fork of the ChainJS library
* Allows AIKON to deploy ORE ID for companies on Polkadot & Kusama

Once we have ChainJS, ORE ID provides four major benefits to businesses:
* Consumer friendly user experience - including social and email login
* API for mass migration of large existing databases of users
* Fiat invoicing for Polkadot & Kusama transactions

Our open source ChainJS Repo: https://github.com/TeamAikon/chain-js

To learn more about AIKON and read our developer docs visit: https://aikon.com

### Project Details 


### Ecosystem Fit 
Although there are javascript tools for Polkadot like https://polkadot.js.org/docs/, this is the first effort to create a ChianJS plugin for Polkadot. The ChainJS standard is particularly suited for helping applications form Ethereum migrate to Polkadot, and we also hope it provides a template for parachains to do the same. ChainJS is also critical for the ORE ID product to support Polkadot, allowing us to help drive business adoption of Polkadot and parachains. 

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
* **Registered Address:** 18 Bartol Street #986, San Francisco, CA 94133
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

ChainJS Polkadot & Kusama Plugin Devlierables
ChainJS is a low-level Javascript helper library that helps you write code that can work with multiple blockchains. ChainJS uses a plug-in model and a unified interface to do common blockchain functions like constructing, signing, and sending blockchain transactions. Unlike Polkadot.js, ChainJS simplifies the interface layer making it easier for new developers who don't need to understand how Polkadot or Kusama work in order to commit basic actions to chain.

Publish open source Polkadot & Kusama plugins for the ChainJS standard, including the following functions:
* Create wallet
* Create multisig wallet
* Construct transaction
* Transfer tokens

We will also deliver
* Developer documentation 

Estimated to be ~1 month total


### Overview
* **Total Estimated Duration:** 1 month
* **Full-time equivalent (FTE):** 2 FTE
* **Total Costs:** $15,000 in DAI

### Milestone 1 Example — Implement ChainJS Library for Polkadot & Kusama
* **Estimated Duration:** 1 month
* **FTE:**  2
* **Costs:** $15,000 in DAI

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 / MIT / Unlicense |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how engineers use the ChainJS library. 
| 0c. | Testing Guide | The code will have unit-test coverage (min. 70%) to ensure functionality and robustness. In the guide we will describe how to run these tests | 
| 0d. | Article/Tutorial | We will write an article or tutorial that explains the work done as part of the grant. 
| 1. | Polkadot plugin for ChainJS standard | Create wallet, Create multisig wallet, Construct transaction, Transfer tokens |

## Future Plans
Once we have ChainJS, our intention is to deploy our flagship ORE ID product to Polkadot & Kusama. ORE ID is a service that helps enterprises migrate their user base to blockchains at scale. ORE ID provides four major benefits to businesses on Polkadot:
* Consumer friendly user experience - including social and email login
* API for mass migration of large existing databases of users
* API and javascript libraries that make it easy for developers to build on Polkadot & Kusama
* Fiat invoicing for Polkadot & Kusama transactions
