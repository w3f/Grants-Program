# Open Grant Proposal

* Project: Secure Interaction Data Storage 
* Proposer: [Cere-Network](https://github.com/Cerebellum-Network)
* Payment Address: TBD

# Project Description

This project proposal is a blockchain-based storage solution that is optimized for capturing sequences of interaction data that are individually signed and encrypted at each step, along with potential value transfers, to be stored in a tamper-proof and time-capsuled data scheme. This allows for the direct and secure decryption, validation, extraction, transformation, and utilization of such data by trusted or trustless parties, automated processes, and decentralized data marketplaces. 

Packaged operations are configured to work directly with any Polkadot/Substrate blockchain network along with included IPFS storage setup.

# Use Case Examples

This project is intended to deliver a turn-key storage solution that can be used in conjunction with any Substrate network to capture a series of data exchanges between 2 (or more) parties, where all instances of data exchange can be stored into tamper-proof and time-locked data structures inside IPFS while validating/verifying the transactions through consensus on chain. This solution can be used by just about any type of automated workflow, particularly in the following example use cases:

## Optimizing For Automated AI/Data-Driven Consumer Interactions

The deliverables of this project can capture and store individually encrypted user interaction data, along with value transactions to each user’s individual ledger and individual tamper-proof and time-capsuled data structures in IPFS clusters. This approach allows for AI/data-driven smart engagements and interaction to be automated by third-party vendors and partners with a fully verifiable (and hard to tamper) “paper trail” for each user. 

Some of the use cases:

* Capturing and storing all signed and validated user interaction events into a tamper-proof “customer journey” timeline, providing a source of truth of first-party data in raw form utilizing blockchain identity abstraction, data encryption, and time-capsuled consensus verifications. 
* Providing granular third-party access via permission keys such that AI, machine learning, and business intelligence processes can perform federated querying, modeling, and direct computations directly. 
* Businesses, apps, partners, and even individual consumers can be permissioned to inspect a complete timeline of interactions for any user via apps and tools using Cere’s embedded wallet.
* Capturing key user events and interactions such as agreeing to terms or signing verifications along with the relevant material to be both on chain and within the IPFS (or equiv) data store.
 
## NFT’s and Provenance

This project can provide a great out-of-the-box solution for supporting NFT’s (non-fungible tokens) that can represent unique or fractionalized ownership of real-world or digital assets for business and applications. E.G.:

* Capturing the critical event data relating to the issuance, transfers, and access of such tokens, ensuring that the state changes of the NFT are captured both on-chain and in the  IPFS, both going through network consensus at the same time. This allows for fully automated verifications and value-transfer via smart contracts and workflow software to capture much more information and utility.
 
# Packages

## Packaging Structure

```
├── SIDS SDK 
    ├── Connectors and Tools to directly interact with SIDS
    |   ├── write/read into/from IPFS, traverse data
    |   └── write/read into/from Substrate Network
    ├── Info on how to extend this project or use with alternative data services
    ├── Encryption/decryption Interface 
    |   └── Data Encryption Module (standard RSA encryption to serve as a template for other drop-in encryptions)
    ├── IPFS utility tools & Commandline tools
    ├── Data and blocks viewer (web UI)
    ├── Examples and utilities
```

## Core operations

1. Sign user/app operation, store associated user-signed first-party unstructured data (Using Substrate compatible wallet)
    * Encrypt data 
    * Store data as individually signed & encrypted into IPFS and onchain simultaneously or sequentially 
2. Extract data
    * Using a tool/wallet that can initiate transaction with the associated pubkey/signature
    * Traverse data tree in IPFS
    * Decrypt data 
3. Show data
    * Traverse IPFS data tree in IPFS
    * Decrypt data 
    * Extract and display data (e.g can use the Data Viewer tool packaged)

## Data Encryption module 

Encryption flow:

1. Encrypt each scope of data with its own key.
2. Merge encrypted scopes into one object.
3. Add event metadata (account public key, signature, event ID, timestamp).

Decryption flow:

1. Read event metadata, extract scopes, and read keys from the configuration.
2. Decrypt scoped data.
3. Merge decrypted data into one object.

Encryption and decryption operations here are explicitly and purposefully designed for raw user interaction data (e.g. JSON blobs). This package contains a high-level abstraction as well as an example implementation with basic functions for granular data encryption. It’s also possible to implement your own data encryption module with different techniques.

# Additional Project Details

* Who does this project help?
    * Application developers who are working with Substrate blockchain networks and want to store user interaction data in a secure way.
* How does SIDS work with which blockchain network 
    * Developers can configure wallets to use them with any Substrate network that is connected to SIDS. Cere services can be dynamically used with any blockchain network. Besides that, Cere services provide call back functions to developers for more granular interaction with the data pipeline.
* How can I quickly try out and test the basic operations of this project?
    * Simple sandbox webpage with debug console with output from our services will be provided
    * Both runtime images and packaging tools (e.g. Docker compose files) with examples of data extraction/decryption/indexing test templates will be provided
    * Tools for viewing the transaction and data (on chain and on IPFS cluster)
 
# Ecosystem Fit 

The solutions that are being provided within this project can serve a very broad number of data/workflow use cases per examples provided, but they are also practical, modular, and extensible enough to be immediately used or extended for any solutions that are being built on top of any Substate/Polkadot Network. 

# Team

## Team members TODO

* Name of team leader
* Names of team members

## Team Website
* https://cere.network

## Legal Structure TODO

Please provide the name and registered address of the legal entity executing the project. When applying via the General Grants program, these details can also be shared privately via the Google Form used for your application.

## Team's experience TODO

Please describe the team's relevant experience. If the project involves development work, then we'd appreciated if you can single out a few interesting code commits made by team members on their past projects. For research-related grants, references to past publications and projects in a related domain are helpful.

## Team Code Repos

* https://github.com/Cerebellum-Network
    * [Cere Identity/Custody SDK](https://github.com/Cerebellum-Network/Cere-Identity-Custody-SDK)
    * [SIDS SDK](https://github.com/Cerebellum-Network/Cere-DDC-SDK)
    * [Cere Data Encryption Service API](https://github.com/Cerebellum-Network/crypto-service-api)
    * [Data Viewer](https://github.com/Cerebellum-Network/data-viewer)
    * [SIDS Examples](https://github.com/Cerebellum-Network/data-cloud-examples)
    
## Team LinkedIn Profiles TODO

* https://www.linkedin.com/<person_1>
* https://www.linkedin.com/<person_2>

# Development Roadmap

## Overview

* Total Estimated Duration: 6 weeks
* Full-time equivalent (FTE): 2.5 
* Total Costs: Equiv. Of $30K USD in BTC 

## Milestone 1 — Prepare and launch core modules and services

* Estimated Duration: 3 weeks
* FTE: 2.5
* Costs: 1 BTC

|Number|Deliverable|Specification|
| ------------- | ------------- | ------------- |
|0a.|License|MIT|
|0b.|Documentation and Packaging|We will add a clear structure of repositories with instructions for how to package, deploy, test, and extend the services in this project. We will provide an SDK for working with any IPFS cluster.|
|0c.|Testing Guide|The code will have a proper unit and integration test coverage to ensure functionality and robustness. In the guide, we will describe how to run these tests.|
|1.|Network Integrations|Integrate with a Substrate network. OpenAPI specification and Swagger UI for testing.|
|1a.|Data encryption|Preparing and encrypt data via the provided encryption package.|
|1b.|Data storage|Storing encrypted data on IPFS into specific IPLD data structures.|
|1c.|Reflect in blockchain|Store IPFS CID on associated blockchain| 
|1d.|Replay mechanism|Restore original events for users. This includes traversing data on IPFS and decrypting it.|
|2.|Testing|Package and include fully functional end-to-end functional and command line tools against standard Substrate network and IPFS cluster.|

## Milestone 2 — Full End-to-End Testing w/ Utility Tools

* Estimated Duration: 3 weeks
* FTE: 2.5
* Costs: 1 BTC

|Number|Deliverable|Specification|
| ------------- | ------------- | ------------- |
|1.|Data Viewer and Block Viewer|We will create a public web-based UI and associated API for exploring stored data alongside blockchain transaction.|
|2.|Examples|We will create a repository with examples of usage of API.|
|3.|Binaries and Packaging tools|We will provide both Docker binaries and docker-compose files with configurable services for testing.|
 
# Community engagement 

We will be producing a series of articles/tutorials and publish them on Medium and our community channels to highlight each milestone. More on our marketing strategy:

![Marketing Strategy](https://raw.githubusercontent.com/Cerebellum-Network/Cerebellum-Network.github.io/main/Marketing%20Strategy.png)

# Future Plans

1. More data services (connectors) that can auto attach to data sets, can perform some logic, and then move data in/out.
2. ML/AI models and pipelines.
3. Ability to remove user’s data by request.

# Additional Information

Any additional information that you think is relevant to this application that hasn't already been included.

Possible additional information to include:

* What work has been done so far?
    * Many of the components in this project have already been created, yet they are not optimized or packaged in a way that can be readily used by anyone in the Polkadot/Substrate community.
* Are there are any teams who have already contributed (financially) to the project?
    * Yes, The Cerebellum Network team has been well-funded and supported by some of the top blockchain innovation institutions and investors.
* Have you applied for other grants so far?
