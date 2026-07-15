# Polkawatch

- **Team Name:** Valletech AB
- **Payment Address:**  0xA39bD6af74f8c317F45137d2ED7F4e13176d916B (ETH/DAI)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

Polkawatch is an [Encode Hackaton](https://medium.com/encode-club/polkadot-hack-finale-prizewinners-and-summary-931627c64d9) Finalist project that received a runner up nomination. See 3 minutes final pitch [video here](https://youtu.be/kCL-389m_xI).

### Overview

Polkawatch tagline is: Polkadot's decentralization is everybody's job. 

Polkawatch will provide decentralization analytics about Polkadot. Allow all stake-holders to gain insights about where network activity is taking place (regional, network provider, validator group, nominator segment, etc).

With Decentralization insights the community can act to improve decentralization regardless of their role: Adjust Nomination, Start Validation in new Networks / Geographies, etc.

Polkawatch is built on top of Substrate Block Explorers (i.e. SubQuery) adding an extra analytic layer. 

Polkawatch crosses chain data with external datasources and traces weak on-chain relations. Initially for Polkadot, Polkawatch could be used for any substrate blockchain.

Why Polkawatch? All started by helping a validator of the 1000 validator programme design a strategy to improve its share of network activity/election. We identified centralization as a problem and opportunity. As preliminary data shows more than 50% of activity in just 2 cloud providers and/or nations. Validators with poor network share could be the decentralized answer to this problem.

Unavailability Slashing takes place if at least 10% of active validators go offline. There is precedent of swift deplatforming by cloud providers and sudden regulation change by Countries. Nominators need to be aware that supporting "too centralized" validators poses significant more risk than nomating validators in network and countries below the 10% threshold. It also makes our community stronger and more resilient. 

### Project Details

Lucene inverted index is the core technology component of many Analytics Engines, Its capability to parallelize ingestion and query is unprecedented. This project has a clear functional scope but it is also an interesting experiment in term of building an Analytic Engine for a substrate blockchain. 

- The main data structure is a collection of fully "decorated" Reward events/documents. By "decorating" a reward we mean to add to the event everything we know by analyzing the blockchain, and crossing its data with external data sources. The collection of events is then indexed on a Lucece Inverted Index to facilitate its analytics.
- The following mock-ups, based on unaudited polkawatch prototype data, show the target analytics to provide, distribution of network activity by: [Geographic and Computing Network](https://user-images.githubusercontent.com/412837/148430943-5fd6144d-20b0-4aa8-b52e-0eda8e4c574c.png), [Validator Group and Nominator Segment](https://user-images.githubusercontent.com/412837/148431120-0e29327a-4061-486b-806d-026e225e2676.png), [Tables with broken down data](https://user-images.githubusercontent.com/412837/148431103-5f9d9a82-12f3-40f7-8636-d1a1063fdee5.png) and [generic information about the dataset](https://user-images.githubusercontent.com/412837/148431094-187faf22-abbe-4ea8-a62a-1d80668f0d81.png). 
- The following [Architecture Diagram](https://user-images.githubusercontent.com/412837/148431128-62606a9a-8323-4abb-aa9a-8bf286a200b0.png) Shows the main Components:
  - Indexer: Will read and index the blockchain using a Lucene Inverted Index. The main Event to trace is the reward event. Will be decorated with all data that can be deduced from the blockchain crossed with external datasources: Geographic and Networking data.
  - Live Query Server: Will provide an API interface to the Indexed data, ready to be consumed by the DAPP and the DPP Publisher.
  - Distributed Data Pack Publisher: Will publich to IPFS Polkawatch Queries of general interest, those related to general network status. The Data Pack is presumed immutable for a given last processed block number, and must be "IPFS friendly", i.e. once an Era has been claimed completely its reward data should be inmutable. 
  - DAPP: The DAPP will consume mainly the IPFS DPP, although it may also consume Substrate RPC to learn about the Network Status and Objects of User interest (Wallet). It could potentially also request advanced queries to the Live Query Server, although most queries are expected to be ready as a DPP.
- The API to be provided by the Live Query server each entry point (Query) represents a set of filters and aggregations to apply to lucene queries. This component can be fairly generic, in the sense that each entrypoint can be mapped to a lucene query with the help of a templating engine.
- The technology stack to be used will be Javascript/TrueScript for the Live Query Server and DPP publisher, React+Gatsby for the DAPP, Material UI for the UI components, Gitlab will be used for CI/CD, and IPFS/IPFS Cluster for publishing.
- During the Hackaton Subquery and Elasticsearch were used as base components for the indexer. This choices will be re-visited after reviewing all indexers in the community and also other lucene databases such as Apache Solr. 
- What your project is _not_ or will _not_ provide or implement
  - This project will not create a Generic Indexer based on Lucene Inverted Index but rather extend, complement or fork an existing indexer in our community.
  - This project will not provide a generic staking dashboard or wallet, but rather focus on the analytics, grand view and support the decision making related to the nomination and validation activities. 

### Ecosystem Fit

Polkawatch will use a blockchain indexer, modify or extend it for a particular analytic use case, based on Lucene inverted index. This project may be of interest to decide if inverted indexes or analytic capabilities should be built into indexers in a more generic way.

The Polkadot ecosystem needs effective decentralization and polkawatch can help. The community is already [debating](https://kusama.polkassembly.io/post/1163?s=09) about this, and visibility of network activity will enrich the debate.

This project sits next to blockchain explorers, but its output will be graphic, analytic instead of detailed transactional.

**Similar Projects**

- Yieldscan analyzes staking from a yield performance point of view. Polkawatch will focus on decentralization.

## Team :busts_in_silhouette:

### Team members

- Rafael del Valle Lopez
- David Bellhoff

### Contact

- **Contact Name:** Rafael del Valle Lopez
- **Contact Email:** rvalle@valletech.eu
- **Website:** https://valletech.eu

### Legal Structure

- **Registered Address:** Blåmesv. 26, 186-47 Vallentuna, Sweden
- **Registered Legal Entity:** Valletech AB,  Org. Num: 5590673694

### Team's experience

Rafael have over 20 years experience creating Software Product, Services and Ventures. In the last years has started to contribute to Open Source projects in the Infrastructure field. A significant contribution to Open Nebula was the [Python Bindings](https://opennebula.io/pyone-python-bindings-for-open-nebula/), now part of the official distribution. More recently the [Privaz.io](https://privaz.io) project was created with the goal to facilitate the adoption of Private Clouds by small projects.

David has a background in Geographic Information Systems and data science. His first Programming languages were Python and R which he used to build a geographic database and to run statistic models for simulations. Later he learned Javascipt and Typescript and has built web applications with different stacks (Postgresql, Django, Mongodb, node.js, React). In 2021 he started learning Rust and completed the Substrate Developer Academy in November. He is also a core contributor to the DEGEN project of Bankless DAO.

### Team Code Repos

- https://gitlab.com/polkawatch

### Team LinkedIn Profiles 

- https://www.linkedin.com/in/rvallel/

## Development Status :open_book:

A development prototype was created during the encode hackaton, the purpose was mainly to establish viability of Polkawatch and gather community feedback. Multiple strategies where tested/implemented during the 3 week development time in seek of viability.

The prototype is a "hack" of a SubQuery project where a Lucene (elastic) index server is introduced. Several data structures are introduced to trace weak event releationships and map with external databases (GeoIP). A minimal dApp to present the data was also introduced and is available at https://polkawatch.app

The current prototype has been useful is gathering feedback from participants about the potential of this project.

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 10 weeks
- **Full-Time Equivalent (FTE):**  2 FTE
- **Total Costs:** 28,500 USD

### Milestone 1 — Data Management Modules

- **Estimated duration:** 5 weeks
- **FTE:**  2
- **Costs:** 14,250 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up the project deliverables. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile(s) / Dockercompose that can be used to test all the functionality delivered with this milestone. |
|     1. | Indexer Extension | Indexer Node Module/Extension with additional required capabilities: Inverted Index and weak relationship tracing. The relationship "traces" will be available for later user to "trust and verify". |
| 2. | Live Query Server | LQS Node Module that provices a programatic interface to the indexer, implemented in Typescript/Javascript. The implementation will be generic and template based, mapping entrypoints to lucene filters and agregations. |
| 3. | Gitlab Pipelines  | Continuous integration deliverables will be created for automated build and test of each module. Continuous delivery will include steps to update docker images of the deliverables. |


### Milestone 2 — Data Presentation Modules

- **Estimated Duration:** 5 weeks
- **FTE:**  2
- **Costs:** 14,250 USD

| Number | Deliverable      | Specification                                                |
| -----: | ---------------- | ------------------------------------------------------------ |
|    0a. | License          | Apache 2.0                                                   |
|    0b. | Documentation    | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up the project deliverables. |
|    0c. | Testing Guide    | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
|    0d. | Docker           | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
|    0e. | Article          | We will publish a blog post about Polkawatch, it will include information about: how to check the effective decentralization of the network, how to check the effective decentralization of a nominator and how to adjust the nomination to better contribute to decentralization of the network. A companion Video tutorial will also be provided. |
|     1. | DDP              | Distributed Data Pack builder node module, implemented in Typescript/Javascript. Will use the LQS to build IPFS friendly data to be consumed by the DAPP. |
|     2. | DAPP             | Distributed Application Node/React module, implemented in Typescript/Javascript. React based DAPP, built with a modern and fresh UI toolkit (such as Material UI or Chackra). Gatsby will be used to efficiently pack the DAPP. |
|     3. | Gitlab Pipelines | Continuous integration deliverables will be created for automated build and test of each module. Continuous delivery will include steps to update docker images of the deliverables and publish IPFS updates. |


## Future Plans

Polkawatch will be used to raise awareness of decentralization of the network in the community.

We plan to work with validators to improve their network share in the cases in which they improve the decentralization of the network. 

Ideally the data provided by Polkawatch could result in a Validator alliance with a decentralization brand promise such as avoiding crowded geographies or IP networks/cloud providers.

We would also like to see decentralization turned into active economic policy. The same way that unavailability is slashed, validating in underrepresented geographies or IP networks could be rewarded. In that sense, we would like Polkawatch to become a tool to assist in policy decision making.  


## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** We found out in the Web3 Foundation Website.

