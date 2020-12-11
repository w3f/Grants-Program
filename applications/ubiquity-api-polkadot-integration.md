# Open Grant Proposal

> This document is referenced in the terms and conditions and therefore needs to contain all the required information. Don't remove any of the mandatory parts presented in bold letters or as headlines! See the [Open Grants Program Process](https://github.com/w3f/Open-Grants-Program/blob/master/README_2.md) on how to submit a proposal.

* **Project Name:** Ubiquity API Polkadot Integration
* **Team Name:** Blockdaemon
* **Payment Address:** will be provided on invoice

### Overview

Ubiquity provides a read-only REST API for transactions on the Polkadot blockchain. It maps existing resources to a common multi-chain model, for wallets and exchanges to interface with. Blockdaemon provides a proprietary, highly-available REST API with additional capabilities in addition to the open-source components.

Completion dates subject to change to account for grant start date.

### Project Details 
API documentation is available under https://app.blockdaemon.com/docs and the REST API specification is at https://ubiquity.docs.blockdaemon.com.

### Ecosystem Fit 
Projects providing similar features are Trust Wallet blockatlas (https://github.com/trustwallet/blockatlas) and Coinbase Rosetta (https://github.com/coinbase/rosetta-specifications).

## Team :busts_in_silhouette:

### Team members
* Richard Patel
* Gavin Woods

### Contact
* **Contact Name:** Katie DiMento
* **Contact Email:** katie@blockdaemon.com
* https://blockdaemon.com

### Legal Structure 
* **Registered Address:** Blockdaemon Limited
* **Registered Legal Entity:** 1 Grants Row, Dublin 2, D02 HX96, Ireland

### Team's experience
Please describe the team's relevant experience.  If the project involves development work, then we'd appreciated if you can single out a few interesting code commits made by team members on their past projects. For research-related grants, references to past publications and projects in a related domain are helpful.  

### Team Code Repos
* https://github.com/terorie
* https://github.com/gavinbd

## Development Roadmap :nut_and_bolt: 

### Overview
* **Total Estimated Duration:** 2 months
* **Full-time equivalent (FTE):**  1.5 FTE
* **Total Costs:** $25,000.00 USD-worth of BTC

### Milestone 1 — Node-backed Ubiquity API
* **Estimated Duration:** 2 months
* **FTE:**  1.5
* **Costs:** $25,000.00 USD-worth of BTC

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | TBD |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can spin up the Ubiquity Polkadot integration against blockchain nodes. |
| 0c. | Testing Guide | The code will have proper unit-test coverage to ensure functionality and robustness. In the guide we will describe how to run these tests. | 
| 1. | Node-backed Ubiquity API | We will provide a sidecar for Polkadot nodes that expose the Ubiquity API through RPC requests to the node. |  
| 1a. | Supported transaction types: | Payments, Staking rewards |  
| 1b. | Supported REST API queries: | Syncing information, Block by height / hash, DOT balance by address |  
| 1c. | Supported WebSocket queries: | Transaction stream, Transaction stream per account |
