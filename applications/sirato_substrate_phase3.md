# Sirato (Epirus) Substrate Explorer - Phase III

-   **Project Name:** Sirato (Epirus) Substrate Explorer - Phase III
-   **Team Name:** Web3 Labs Ltd
-   **Payment Address:** 0xc905c448db9942c662fcb1680f3ecfcd0592409c
-   **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 3

## Project Overview

> We rebranded recently from Epirus to Sirato

This is an application for a follow-up grant for the Epirus Substrate Explorer that has completed two grants previously:

Phase I:
<br />
[Application](https://github.com/w3f/Grants-Program/blob/master/applications/epirus_substrate_explorer.md)
<br />
[Delivery](https://github.com/w3f/Grant-Milestone-Delivery/pull/527)

Phase II:
<br />
[Application](https://github.com/w3f/Grants-Program/blob/master/applications/epirus_substrate_phase_2.md)
<br />
[Milestone 1 Delivery](https://github.com/w3f/Grant-Milestone-Delivery/pull/652)
<br />
[Milestone 2 Delivery](https://github.com/w3f/Grant-Milestone-Delivery/pull/742)

### Overview

From our previous grants we have built:
- A [Wasm contracts explorer](https://substrate.sirato.xyz/) that supports smart contracts deployed on `pallet-contracts`
- A [verifier service](https://github.com/web3labs/ink-verifier-server) that verifies, through reproducible builds, the source code files for a specific on-chain code hash.

In this grant, we aim to expand the support of our explorer to include EVM smart contracts deployed to Frontier EVM pallets and network essential base data such as blocks, extrinsics and system events. The aim for the end of the grant is to provide a modular multi-VM smart contracts explorer for the Substrate ecosystem.

### Project Details

In our current architecture, there are several components:

- Squid Archive (built on the Subsquid framework): the squid archive connects to the Substrate network node and indexes base data such as blocks and extrinsics, exposing a GraphQL API 
- Squid Processor (built on Subsquid framework): the squid processor ingests data from the squid archive, filtering and transforming the relevant data to the data models for the Explorer. Currently, our squid processor is focused on Wasm contract data from `pallet-contracts`. The squid processor exposes a GraphQL API.
- Explorer UI: The explorer UI is made up of a set of composable components that consumes the API of the Squid processor and renders the web application.

The below diagram illustrates the high-level architecture and how the components interact with each other:

![Current Architecture](https://drive.google.com/uc?id=1BVgvcQPCwGa3BJyD__z-wXKgzyt9mBbG)

In this grant, we will add data handlers and data models in the Squid processor to index events on the EVM Frontier pallets. Since the Squid Archive directly exposes the network base data of blocks and extrinsics, we will use the GraphQL API of the squid archive in the UI to retrieve this data. In the explorer UI, we will add modular UI components for the Frontier EVM models and the base data models. Network owners will then be able to compose the relevant UI components to deploy a customised explorer for their needs. The updated high-level architecture is illustrated in the diagram below:

![New Architecture](https://drive.google.com/uc?id=1LwOiu1rehx4bXCt2g2vZy_cJASYVrqdQ)


#### **Network Data Support**

The Squid Archive already exposes blocks, extrinsics and events data through its GraphQL API. We will consume this API from the explorer UI and build the components to show:

- Blocks list
- Extrinsics list
- Block page: contains block details and all extrinsics and events included in this block
- Extrinsics page: contains extrinsic details and all events emitted from the extrinsic

#### Mock-ups

Mock up of how an extrinsic page will look:

![Extrinsic Page](https://drive.google.com/uc?id=112GANJWuaxcFJBbhS6-I9ubGMfi9pV-N)

#### **EVM Contract Support**

In the Squid data handlers for EVM contracts, we plan to provide the data models and data handlers for:

- EVM transactions
- EVM events
- EVM contracts
- Accounts in H160 format, and relation to its SS58 counterpart

In the UI, we plan to provide components for:

- EVM contract activity list: semantic activities related to EVM contracts i.e. contract creation, transactions
- EVM contract list
- EVM account list
- EVM contract page: contains details of the contract and list of related activites and events
- EVM account page: contains balance details of the account and list of related activities and deployed contracts. The user can also navigate from the page to the equivalent native (Substrate SS58) account.

#### Mock-ups

Here's a mock up of what an EVM contract page will look like:

![EVM Contract Page](https://drive.google.com/uc?id=1e38W04zQCq07JE9RuQzVlBn5jtZQULwG)

Mock up of EVM account page:

![EVM Contract Page](https://drive.google.com/uc?id=1UHoFWckpV7jsO00AR1YWSpHsLGizMp_w)


### Technology Stack

We plan to build on top of our current explorer, so we will continue using the same technology stack:
- [Subsquid Framework](https://www.subsquid.io/), with Typescript, for data processing.
- React.js and Tailwindcss for the UI

### Out of Scope

Due to time and resource constraints, we will leave the following items for future development:
- EVM internal transactions
- EVM contract verification and metadata upload
- EVM contract message decoding

### Ecosystem Fit

There is currently a lack of high-quality open-source explorers for smart contract networks in the Substrate ecosystem. Polkadot.js is the de facto explorer and it is very modular and flexible. However, it was designed more for development and lacks the ability to filter, sort and search through data on the network. In the space of user-facing explorers, Subscan is currently the most popular solution and has the most comprehensive support for Substrate pallets. On the other hand, Subscan is mostly close-sourced and introduces an economic entry barrier for new networks. While a number of open-source alternatives have emerged, none of them have support for smart contracts. In our previous grants, we have expanded the open-source explorer offerings to include Wasm contracts on Substrate and we wish to further expand the support to EVM contracts. Considering that there are already more than 20 parachains and solo chains live with Frontier EVM, we believe that it will be a valuable addition to the ecosystem. At the same time, we also want to provide the essential base data like blocks and extrinsics so that smart contract networks can have a feature-complete explorer at their fingertips.

## Development Roadmap :nut_and_bolt:

### Overview

-   **Total Estimated Duration:** 4 months
-   **Full-Time Equivalent (FTE):** 2 FTE
-   **Total Costs:** 100,000 EUR

### Milestone 1

-   **Estimated duration:** 1.5 month
-   **FTE:** 2
-   **Costs:** 37,500 EUR
    
| Nº  | Deliverable | Specification
| :-- | :--         | :--
| 0a. | License     | Apache 2.0
| 0b. | Documentation | We will provide inline documentation of the code and documentation on how to set up an explorer instance.
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. We will describe how to run these tests in the guide.
| 0d. | Docker        | We will provide a Dockerfile and Docker Compose file(s) to ease the deployment and execution of the system.
| 1.  | Updated Explorer UI - Base data support | The Explorer UI will connect to the Squid archive GraphQL endpoint and display block, extrinsic and system event data.
| 2.  | Public explorer instance | A publically accessible instance of the Explorer connected to a development network with both Wasm and EVM smart contracts support, with additional display of blocks, extrinsics and events.

### Milestone 2

-   **Estimated duration:** 2.5 months
-   **FTE:** 2
-   **Costs:** 62,500 EUR
    
| Nº  | Deliverable | Specification
| :-- | :--         | :--
| 0a. | License     | Apache 2.0
| 0b. | Documentation | We will provide inline documentation of the code and documentation on how to set up an explorer instance.
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. We will describe how to run these tests in the guide.
| 0d. | Docker        | We will provide a Dockerfile and Docker Compose file(s) to ease the deployment and execution of the system.
| 1.  | Updated Squid processor - EVM support | We will include the data handlers and data models required for <ul><li>1. EVM transactions</li><li>2. EVM events</li><li>3. EVM contracts</li><li>4. EVM accounts</li></ul>
| 2.  | Updated Explorer UI - EVM support | The Explorer UI will support the display of EVM contracts, transactions, events and accounts. The accounts page will support the toggling between native Substrate account and EVM account if applicable.
| 3.  | Public explorer instance | A publically accessible instance of the Explorer connected to a development network with both Wasm and EVM smart contracts support.

## Team :busts_in_silhouette:

### Contact

-   **Contact Name:** Conor Svensson
-   **Contact Email:** [conor@web3labs.com](mailto:conor@web3labs.com) 
    

### Legal Structure

-   **Registered Address:** 7 Bell Yard, London, England, WC2A 2JR
-   **Registered Legal Entity:** Web3 Labs Ltd, CRN 10783824

### Team Code Repos

- https://github.com/web3labs

## Future Plans

We plan to add open-source support to other popular Substrate pallets in the future. Some interesting pallets we are considering are assets and XCM related pallets, to be able to track asset movements across the Dotsama networks. The EVM+ pallet by Acala is also a very valuable addition to the ecosystem that we wish to support. On top of that, we also plan to add some proprietary modules for the explorer to be able to sustain our growth long-term. Our goal is to provide a full-fledged open-core explorer with comprehensive data and intuitive UI that networks can customise to their needs.

Besides the core explorer, we also want to expand the functionality of our ink! verifier service. Right now, it only supports the verification and metadata hosting of ink! smart contracts. We wish to also support EVM smart contracts and evolve the service to a multi-VM metadata registry for the Substrate ecosystem.
