# Sirato (Epirus) Substrate Explorer - Phase III

-   **Project Name:** Sirato (Epirus) Substrate Explorer - Phase III
-   **Team Name:** Web3 Labs Ltd
-   **Payment Address:** 0xc905c448db9942c662fcb1680f3ecfcd0592409c
-   **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview

> We recently rebranded from Epirus to Sirato

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

In this grant, we intend to expand Sirato to support essential base data such as blocks, extrinsics and system events. 

### Project Details

In our current architecture, there are several components:

- Squid Archive (built on the Subsquid framework): the squid archive connects to the Substrate network node and indexes base data such as blocks and extrinsics, exposing a GraphQL API 
- Squid Processor (built on Subsquid framework): the squid processor ingests data from the squid archive, filtering and transforming the relevant data to the data models for the Explorer. Currently, our squid processor is focused on Wasm contract data from `pallet-contracts`. The squid processor exposes a GraphQL API.
- Explorer UI: The explorer UI is made up of a set of composable components that consumes the API of the Squid processor and renders the web application.

The below diagram illustrates the high-level architecture and how the components interact with each other:

![Current Architecture](https://drive.google.com/uc?id=1BVgvcQPCwGa3BJyD__z-wXKgzyt9mBbG)

In this grant, we will add data handlers and data models for the base data. Since the Squid Archive directly exposes the network base data of blocks and extrinsics, we will use the GraphQL API of the squid archive in the UI to retrieve this data. 

#### **Network Data Support**

The Squid Archive already exposes blocks, extrinsics and events data through its GraphQL API. We will consume this API from the explorer UI and build the components to show:

- Blocks list
- Extrinsics list
- Block page: contains block details and all extrinsics and events included in this block
- Extrinsics page: contains extrinsic details and all events emitted from the extrinsic

#### Mock-ups

Mock up of how an extrinsic page will look:

![Extrinsic Page](https://drive.google.com/uc?id=112GANJWuaxcFJBbhS6-I9ubGMfi9pV-N)

### Technology Stack

We plan to build on top of our current explorer, so we will continue using the same technology stack:
- [Subsquid Framework](https://www.subsquid.io/), with Typescript, for data processing.
- React.js and Tailwindcss for the UI

### Out of Scope

Due to time and resource constraints, we will leave the following items for future development:
- Additional query endpoints for interrogating the contract registry
- The ability to interact directly with verified smart contracts

### Ecosystem Fit

There is currently a lack of high-quality open-source explorers for smart contract networks in the Substrate ecosystem. Polkadot.js is the de facto explorer and it is very modular and flexible. However, it was designed more for development and lacks the ability to filter, sort and search through data on the network. In the space of user-facing explorers, Subscan is currently the most popular solution and has the most comprehensive support for Substrate pallets. On the other hand, Subscan is mostly close-sourced and introduces an economic entry barrier for new networks. 

This dominance by Subscan is something that has been highlighted recently during an in-depth [discussion on the Polkadot Forum](https://forum.polkadot.network/t/subscan-ought-to-change-its-business-model-or-be-replaced/2357). 

While a number of open-source alternatives have emerged, none of them have support for smart contracts. In our previous grants, we have expanded the open-source explorer offerings to include WASM contracts on Substrate. At the same time, we also want to provide the essential base data like blocks and extrinsics so that smart contract networks can have a feature-complete explorer at their fingertips.

## Development Roadmap :nut_and_bolt:

### Overview

-   **Total Estimated Duration:** 1 month
-   **Full-Time Equivalent (FTE):** 2 FTE
-   **Total Costs:** 25,000 EUR

### Milestone 1

| Nº  | Deliverable | Specification
| :-- | :--         | :--
| 0a. | License     | Apache 2.0
| 0b. | Documentation | We will provide inline documentation of the code and documentation on how to set up an explorer instance.
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. We will describe how to run these tests in the guide.
| 0d. | Docker        | We will provide a Dockerfile and Docker Compose file(s) to ease the deployment and execution of the system.
| 1.  | Updated Explorer UI - Base data support | The Explorer UI will connect to the Squid archive GraphQL endpoint and display block, extrinsic and system event data.
| 2.  | Public explorer instance | A publicly accessible instance of the Explorer connected to a development network with WASM smart contracts support, with additional display of blocks, extrinsics and events.

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

We plan to add open-source support to other popular Substrate pallets in the future. Some interesting pallets we are considering are assets and XCM related pallets, to be able to track asset movements across the DotSama networks. 

The Frontier EVM and EVM+ pallet by Acala are also valuable addition to the ecosystem that we wish to support at some point. On top of that, we also plan to add some proprietary modules for the explorer to be able to sustain our growth long-term. Our goal is to provide a full-fledged open-core explorer with comprehensive data and intuitive UI that networks can customise to their needs.

Besides the core explorer, we also want to expand the functionality of our ink! verifier service. Right now, it only supports the verification and metadata hosting of ink! smart contracts. 

Our goal is to support any WASM smart contracts and evolve the service to a multi-VM metadata registry that can scale up to cater for the entire Substrate and DotSama ecosystems.

