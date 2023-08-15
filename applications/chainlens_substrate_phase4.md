# Chainlens (Sirato) Substrate Explorer - Phase 4

-   **Project Name:** Chainlens (Epirus) Substrate Explorer - Phase 4
-   **Team Name:** Web3 Labs Ltd
-   **Payment Address:** Fiat payment details will be provided on invoice.
-   **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 3

## Project Overview

_We rebranded recently from Sirato to Chainlens_

This is an application for a follow-up grant for the Chainlens Substrate Explorer that has completed two grants previously:

Phase I: [Application](https://github.com/w3f/Grants-Program/blob/master/applications/epirus_substrate_explorer.md) [Delivery](https://github.com/w3f/Grant-Milestone-Delivery/pull/527)

Phase II: [Application](https://github.com/w3f/Grants-Program/blob/master/applications/epirus_substrate_phase_2.md) [Milestone 1 Delivery](https://github.com/w3f/Grant-Milestone-Delivery/pull/652) [Milestone 2 Delivery](https://github.com/w3f/Grant-Milestone-Delivery/pull/742)

Phase III: [Application](https://github.com/w3f/Grants-Program/blob/master/applications/sirato_substrate_phase3.md) [Milestone 1 Delivery](https://github.com/w3f/Grant-Milestone-Delivery/blob/master/deliveries/sirato-substrate-explorer-phase3-milestone1.md)

### Overview

From our previous grants we have built:

- A [Wasm contracts and blocks data explorer](https://substrate.sirato.xyz/) that supports smart contracts deployed on pallet-contracts
- A [verifier service](https://github.com/web3labs/ink-verifier-server) that verifies, through reproducible builds, the source code files for a specific on-chain code hash.

In this grant, we intend to expand Chainlens Substrate to:

- Display information about verified contracts
- Provide a configurable option to the deployer of the verification service to provide a choice of storage options for uploaded contract artefacts
- Display chain data statistics
- Use the new `—-verifiable` flag of the cargo-contract tool to produce verifiable builds

## Project Details

In our current architecture, there are several components:

- Squid Archive (built on the Subsquid framework): the squid archive connects to the Substrate network node and indexes base data such as blocks and extrinsics, exposing a GraphQL API.
- Squid Processor (built on Subsquid framework): the squid processor ingests data from the squid archive, filtering and transforming the relevant data to the data models for the Explorer. Currently, our squid processor is focused on Wasm contract data from pallet-contracts. The squid processor exposes a GraphQL API.
- Explorer UI: The explorer UI is made up of a set of composable components that consumes the API of the Squid processor and renders the web application.
- Verifier service: this REST web service is responsible for accepting contracts verification requests from the client and processing them.
- Ink-verifier-image: a docker image that can produce a verifiable build of an ink contract.

![Current Architecture](https://drive.google.com/uc?id=1BVgvcQPCwGa3BJyD__z-wXKgzyt9mBbG)

Fig: A high-level Chainlens Subtrate architecture

The UI sends verification requests to the verification service when a user uploads a verifiable contract for verification. The verification service then stores the uploaded contract on the disk and begins verification of the contract. Any information about the request itself isn't persisted for the client to see later.

## Milestone 1

In the first milestone, we will provide an option to the verification service deployer to pick one of these three storage backends before running the service:

- Local file system
- Object storage such as Amazon S3
- IPFS

These options will be available in the form of an environment variable to the service via a config file.

Here's how these options will work:

- Local file system: the service will have this as a default option and the service already has this implemented
- Object storage: the uploaded artefacts will be stored in object buckets
- IPFS: a global gateway will be used to upload the artefacts to the public IPFS network

We will also add support to display verification requests.

![querying service](https://drive.google.com/uc?id=14T76kHfN_Rdmrz276w1faJ8tHehJxmfF)

Fig: An architecture of the explorer ui, verification service and the new querying service.

We will introduce persistence of all verification requests in a structured fashion and present it to the client requesting to see them. The verification service will be modified so that it will accept a few additional parameters from the client related to the contract and will store it in the persistence layer.

This is to enable other teams to easily extract verification data about verified contracts from Chainlens.

For querying the verification requests data, we will introduce a new microservice called as verification querying service. This service will have access to the same persistence layer where the requests are stored and serve them over a single REST based API.

Examples of queries clients can make:

- return a list of all verification requests

`GET /stats/<network-name>`

response:
```
{
    result: [
        {
            id: 1,
            code_hash: 0x123,
            deployer: 5Gep,
            verification: false
        }
        ...
    ]
}
```

- return a list of only successfully verified contracts

`GET /stats/<network-name>/verified`

`GET /stats/<network-name>/verified/5`

- return a list of only failed contracts

`GET /stats/<network-name>/failed`

`GET /stats/<network-name>/failed/10`

- return a list of top n recent verification requests

`GET /stats/<network-name>/5`

#### Mock-ups
![verifications requests](https://drive.google.com/uc?id=19gx_F-JIrXTrnHOB4N3JwyEOikOmZlJJ)

![contracts view](https://drive.google.com/uc?id=1IXG710iH4VoNytFnKkziWbGwBaj9-sn-)

## Milestone 2

In the second milestone, we will add a new UI page to Chainlens Substrate to display statistical information about the chain data. This will convey a nice summary of the chain data in the form of beautiful charts.

![graphs view](https://drive.google.com/uc?id=1vOkRhdaXrd9_Benr2s1b8KULwVQZMRgM)


We'll also modify our contract verification process to use the new feature being added to the cargo-contract tool to produce verifiable builds - `cargo contract build --verifiable` - as discussed [here](https://forum.astar.network/t/webassembly-smart-contract-verification-ecosystem-status/4797) and [here](https://github.com/paritytech/cargo-contract/issues/1065).

Along with using cargo-contract to produce a verifiable build, we'll add support to detect the active rust toolchain set in the config.toml file of a rust project and use that toolchain version to build the project.

This modification will make our ink-verifier-image a lot simpler.

### Technology Stack

We will use rust to build our new querying microservice. The persistence layer will be a Postgres database.

### Ecosystem Fit

There is currently a lack of high-quality open-source explorers for smart contract networks in the Substrate ecosystem. Polkadot.js is the de facto explorer and it is very modular and flexible. However, it was designed more for development and lacks the ability to filter, sort and search through data on the network. In the space of user-facing explorers, Subscan is currently the most popular solution and has the most comprehensive support for Substrate pallets. On the other hand, Subscan is mostly close-sourced and introduces an economic entry barrier for new networks.

This dominance by Subscan is something that has been highlighted recently during an in-depth [discussion on the Polkadot Forum](https://forum.polkadot.network/t/subscan-ought-to-change-its-business-model-or-be-replaced/2357).

While a number of open-source alternatives have emerged, none of them have support for smart contracts. In our previous grants, we have expanded the open-source explorer offerings to include WASM contracts on Substrate. At the same time, we also want to provide the essential base data like blocks and extrinsics so that smart contract networks can have a feature-complete explorer at their fingertips.

## Development Roadmap 🔩

### Overview

- Total Estimated Duration: ~4 months
- Full-Time Equivalent (FTE): 1
- Total Costs: € 55,000

### Milestone 1

- Total Estimated Duration: 2 months
- Full-Time Equivalent (FTE): 1
- Total Costs: €27,500

### Milestone 2

- Total Estimated Duration: 2 months
- Full-Time Equivalent (FTE): 1
- Total Costs: €27,500

| Nº  | Deliverable | Specification
| :-- | :--         | :--
| 0a. | Licence | Apache 2.0 |
| 0b. | Documentation | We will provide inline documentation of the code and documentation on how to set up an explorer instance. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. We will describe how to run these tests in the guide. |
| 0d. | Docker | We will provide a Dockerfile and Docker Compose file(s) to ease the deployment and execution of the system. |
| 1. | Verifications querying microservice | A microservice that will fetch info about verification requests from the persistence layer. |
| 2. | Updated Explorer UI | We will introduce new pages to display contract verification requests and statistics for chain data. |
| 3. | Updated verification service | The service will now make the verification requests persist and will support configuring storage option type for the uploaded artefacts. |
| 4. | Updated ink verifier image | The ink verifier image will now use the `--verifiable` flag of the cargo-contract tool to build a verifiable contract. |

## Team  👥

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

The Frontier EVM and EVM+ pallet by Acala are also valuable additions to the ecosystem that we wish to support at some point. On top of that, we also plan to add some proprietary modules for the explorer to be able to sustain our growth long-term. Our goal is to provide a full-fledged open-core explorer with comprehensive data and intuitive UI that networks can customise to their needs.

Besides the core explorer, we also want to expand the functionality of our ink! verifier service. Right now, it only supports the verification and metadata hosting of ink! smart contracts.

Our goal is to support any WASM smart contracts and evolve the service to a multi-VM metadata registry that can scale up to cater for the entire Substrate and DotSama ecosystems.
