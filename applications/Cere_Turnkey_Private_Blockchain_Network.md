# Open Grant Proposal

* **Project:** Turn-key Private Standalone Blockchain Network
* **Proposer:** [Cere-Network](https://github.com/Cerebellum-Network)
* **Payment Address:** TBD 

## Project Description :page_facing_up:   

Cere Network is providing a turn-key Private/Permissioned/Standalone blockchain network which can be readily integrated by any enterprise. Since it’s built with Substrate, this network can be integrated into any Polkadot/Substrate based Layer 1 network to serve as a secondary chain.   

This turn-key network intends to abstract the implementation complexity for businesses, as well as providing a ready-made package to optimize for a higher level of security, privacy, and performance, and to serve as a template or base-implementation of a highly customizable and performant enterprise specific blockchain network.   

Furthermore, any network built from or derived from this project will also be able to use derivative assets to represent in-app value transfers on-chain (e.g. micropayments, discount vouchers, loyalty points, etc), as well as being able to seamlessly integrate with the Cere Decentralized Data Cloud (another substrate grant project, [check it here](https://github.com/Cerebellum-Network/General-Grants-Program/blob/master/grants/speculative/Cere%20Decentralized%20Data%20Cloud.md))

Below we have the overview of all the key features that this project will support:   

* A set of turn-key substrate based packaging and tools that simplifies the customization, configuration, testing, and deployment of such a blockchain network.
* Pre-built solutions to create/assign/transfer derivative assets in business to consumer use cases.
* A pluggable layer two solution, that can be plugged into any Substrate/Polkadot chain, compatibility with all Substrate/Polkadot networks to rollup assets (as a Layer 2 and optionally( facilitate x-network transfers).
* Store and exchange custom data with other Private Blockchain Networks.
* Work in conjunction with Cere Decentralized Data Cloud solution to store, encrypt, and extract tamper-proof data alongside onchain transactions for consumer businesses.
* Pre-configured and optimized for feeless transactions and performance.
* Creation of custom derivative assets and automate the transfer to/from user wallets to app wallets by any/app brand.
* Optimization of batch user onboarding and transaction processing for higher throughput situations needed for consumer apps/sites.

### Repository Hierarchy:
```bash
├── Turn-key Private Standalone Network Node
├── Cere Pallet
│   │── Smart Contract
│   │    ├──Derivative Assets
│   └── Off-chain Worker
├── Cere Runtime Module
├── Substrate API Interface
├── Packaging & Deployment Scripts
└── Tests & Tools 
```

There will be three primary directories in this repository:   
Pallets: Pallets for use in FRAME-based runtimes.   
Runtimes: Runtimes for use in Substrate nodes.   
Nodes: Complete Substrate nodes ready to run.   


## Team :busts_in_silhouette:

* **Members:** TODO
* **LinkedIn Profiles:** TODO
* **Code Repos:** https://github.com/Cerebellum-Network/enterprise-blockchain-solution
* **Website:**	http://cere.io/
* **Legal Structure:** Example GmbH
* **Team's Experience:** 

TODO

## Development Roadmap :nut_and_bolt: 

* **Total Estimated Duration:** 10 weeks
* **Total Costs:** 2 BTC

### Milestone 1

* **Estimated Duration:** 5 weeks 
* **Costs:** 1 BTC
* **Main Goal:** Basic functionality: Private node, Smart Contract implementation and setup guide.


| Number | Deliverable | Specification | 
| ------------- | ------------- | ------------- |
| 1. | Documentation and basic tests | We will provide README files inside repositories with instructions of how to build, deploy and test our services. |  
| 2.  | Smart Contract | This deliverable includes the creation of Smart Contract for Custom Derivative Assets. | 
| 3.  | Deployment packaging | At minimum the docker container or even the entire scripts that packages the container with the latest code from Substrate will also run on CI to test the deliverables of the milestone. |
| 4.  | Fee-less Transactions | We will add support for value transfers between app/user accounts without worrying about fees. |
| 5.  | Testing | Repositories including the deployment and test sections for instructions and scripts to help contributors to package, deploy, run, test. | 

### Milestone 2

* **Estimated Duration:** 5 weeks 
* **Costs:** 1 BTC
* **Main Goal:** Integration/load testing, and tools support, optional objectives


| Number | Deliverable | Specification | 
| ------------- | ------------- | ------------- |
| 1.  | Integration support with DDC| We will provide steps and add support for integration with Cere Decentralized Data Cloud (DDC) |  
| 2.  | Data Transactions | We will add support for data transactions between user and app accounts on chain, which will be feeless and works with DDC. | 
| 3.  | (optional) x-network transfers | Using Cere or any other L1 Polkadot/Substrate chain to perform x-network asset transfers for any assets to be converted to e.g. an ERC20 (or DOT-equiv) asset. This is highly dependent on another project on Cere Network, thus listed optional for now. |
| 4.  | (optional) Batch processing | Allowing an app to optimize for creating asset transfers or data events to a batch of users at once, this would be a very nice to have from our practical experience. | 

## Additional Information :heavy_plus_sign: 

We're also working on Cere Decentralized Data Cloud DDC and planning for a seamless integration for the open source community. You can find the [link here](https://github.com/Cerebellum-Network/General-Grants-Program/blob/master/grants/speculative/Cere%20Decentralized%20Data%20Cloud.md).
 
