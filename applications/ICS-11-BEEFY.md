# W3F Grant Proposal

> This document will be part of the terms and conditions of your agreement and therefore needs to contain all the required information about the project. Don't remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with a `>` (such as this one) can be removed.

> See the [Grants Program Process](https://github.com/w3f/Grants-Program/#pencil-process) on how to submit a proposal.

- **Project Name:**  ICS 11 - BEEFY (component of Centauri bridge)
- **Team Name:** Composable Finance LTD 
- **Payment Address:**  0xdb513DBfd224270ce2Ac4056BDDEB15Ef5f2448E (USDC)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

> ⚠️ *The combination of your GitHub account submitting the application and the payment address above will be your unique identifier during the program. Please keep them safe.*

## Project Overview :page_facing_up:

Centauri is a trustless bridge that links the Inter-Blockchain Communication protocol (IBC) with our Kusama parachain, 
Picasso. 

It consists of:
- A Pallet that implements the IBC framework 
  - An RPC subcrate for exposing IBC state
  - A runtime-api subcrate that provides an interface for the rpc subcrate to query IBC state from the runtime 
- A chain agnostic, event-driven relayer implementation in rust.
- Light client for Polkadot/ Kusama parachains that is implemented in Go for the IBC framework

This grant is specifically for ICS 11 - BEEFY the light-client implementation for the Polkadot BEEFY protocol. It enables 
Cosmos chains to follow Polkadot consensus and consequently parachain consensus. This allows them to verify which headers 
have been finalized and which messages are sent at the heights in these finalized headers. It is 
generalized so that it can follow any parachain consensus so long as the chains are connected to the same relay chain. 
It does so using Go implementation of the Parity-trie library.

### Overview

ICS 11 - BEEFY is the light-client implementation for the Polkadot Beefy protocol. Centauri allows for 
parachains to speak to IBC - enabled blockchains in general. This bridge advances Polkadot's vision of 
allowing cross-blockchain transfers of assets, as well as Composable’s vision of blockchain agnosticism 
in Defi. It establishes a critical link between the Cosmos and Kusama networks, further connecting multiple 
chains and opening a sea of new possibilities for DeFi. Building Centauri would allow us to leverage a proven 
and successful cross-chain communication protocol — and allow communication and asset transfer between our 
ecosystem, Cosmos, and other chains leveraging IBC.

### Project Details

Current IBC Specifications: https://github.com/cosmos/ibc

The project aims to implement the IBC (Inter-Blockchain Communication protocol)
via Substrate with a BEEFY (Bridge Efficiency Enabling Finality Yielder) backend.

At the moment, the team will relay information to the official 
[IBC documentation](https://github.com/cosmos/ibc).

### Ecosystem Fit

We will provide XCMP endpoints that allow other parachains to talk to IBC-enabled blockchains.
The IBC pallet itself can be integrated into any parachain that wants to connect with IBC-enabled blockchains. 
This will onboard IBC logic into Substrate. Any Substrate-based chains can integrate
the pallet to communicate with other IBC-enabled chains. Substrate developers can leverage the pallet
for chain logic and their associated dApps to enable a multi-chain contract environment. 

This integration forms the first-ever bridge between Kusama and Cosmos. 
A connection between both networks facilitated by our parachain will vastly expand resources for 
developers looking to build interoperable dApps, further enhancing their use cases and opening new opportunities 
for DeFi.

For example, a user with assets on Kusama looking to utilize a DEX (decentralized exchange) outside of the 
ecosystem (or based on their desired account action) can easily transfer their assets to Cosmos and utilize a DEX like 
Osmosis. Not only does it offer exposure to users for assets only available on Osmosis, but 
it also opens new arbitrage opportunities not available today. In general, users can experience cross-chain 
DeFi without the compromise of security. 
Beyond DEXes, users will have access to additional yield farms, lending protocols, and a lot more.

As DeFi pushes further into layer 2 (L2) scaling solutions, this cross-layer interoperability will be instrumental in 
increasing transaction speeds and reducing fees. As both networks continue to develop and grow, 
so will opportunities for DeFi users thanks to this cross-chain connection.

## Team :busts_in_silhouette:

### Team members

- Name of team leader: Seun Lanlege 
- Names of team members: David Salami, Blas Rodriguez Irizar, Strangelove team, Interchain Foundation 

### Contact

- **Contact Name:** Ahmad Wehbi
- **Contact Email:** ahmad@composable.finance
- **Website:** https://www.composable.finance/

### Legal Structure

- **Registered Address:** FortGate Offshore Investment and Legal Services LTD, 1st Floor, The Sotheby Building, Rodney Bay, 
Gros-Islet, P.O. Box 838, Castries, Saint Lucia
- **Registered Legal Entity:** Composable Finance LTD

### Team's experience

- Seun Lanlege: Principal Blockchain engineer at Composable Finance, previously a Core Rust developer at Parity Technologies. 
- David Salami: Substrate Rust engineer at Composable Finance, previously a Substrate Engineer at Webb.tools.
- Blas Rodriguez Irizar: Software engineer at Composable Finance, previously Software Engineer at ConsenSys.

### Team Code Repos

- [IBC Go implementation](https://github.com/ComposableFi/ibc-go/)
- [IBC Rust implementation](https://github.com/ComposableFi/ibc-rs/)
- [IBC Substrate Implementation](https://github.com/ComposableFi/composable/blob/main/frame/ibc/src/lib.rs)

#### Team GitHub accounts:

- https://github.com/seunlanlege
- https://github.com/wizdave97
- https://github.com/blasrodri

### Team LinkedIn Profiles (if available)

- [Seun Lanlege](https://www.linkedin.com/in/seunlanlege/)
- [David Salami](https://www.linkedin.com/in/david-salami-188aa8170/)
- [Blas Rodriguez Irizar](https://www.linkedin.com/in/blas-rodriguez-irizar/)

## Development Status :open_book:

- [Blog post on Trustless bridging](https://medium.com/composable-finance/trustless-bridging-438a6e5c917a)
Merge requests for the MMR repo:
- https://github.com/ComposableFi/go-merkle-trees
- https://github.com/ComposableFi/go-merkle-trees/pulls?q=is%3Apr+is%3Amerged
- https://github.com/paritytech/substrate/pull/10635

## Development Roadmap :nut_and_bolt:

### Milestone 1: BEEFY-Go Library — Implementing the BEEFY Finality Verification Library

- Completed, cost covered by Composable Finance through Interchain grant.

| Number | Deliverable     | Specification                                                                                                                                                                                                                  |
|-------:|-----------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|    0a. | License         | GPLv3 / MIT                                                                                                                                                                                                                    |
|    0b. | Documentation   | We will provide both inline documentation of the code and a basic tutorial that explains how a user can use the library to verify Beefy commitments                                                                            |
|    0c. | Docker          | We will provide a Dockerfile that can be used to test all the functionality delivered with this milestone.                                                                                                                     |
|    0d. | Article         | We will publish an article to announce our partnership with Web 3 Foundation through this grants program. Article will be published on Medium and Twitter.                                                                     |
|    1a. | Development     | Develop an MMR verification library that will be used by light-clients to verify MMR ancestry proofs generated by the BEEFY protocol                                                                                           |  
|    1b. | Development     | Use MMR library to write a verification function for parachain headers that have been verified with the BEEFY protocol                                                                                                         |
|     2. | Testing         | Conduct unit and integration testing for the MMR library. For the verification function, set up integration tests that connect to Rococo and ensure that the verification function can verify live Beefy commitments on Rococo |  

### Milestone 2: ICS11 - BEEFY — ICS 02 Integration testing showing the light client can verify BEEFY commitments

- **Estimated duration:** 8 weeks
- **FTE:**  2
- **Costs:** 10,000 USD

| Number | Deliverable    | Specification                                                                                                                                                                  |
| -----: |----------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 0a. | License        | GPLv3 / MIT                                                                                                                                                                    |
| 0b. | Documentation  | We will provide inline documentation of how to integrate IBC GO with an existing Cosmos chain so that this chain can connect and communicate with parachains that are IBC enabled |
| 0c. | Testing Guide  | Core functions will be fully covered by integration tests to ensure functionality and robustness. In the guide, we will describe how to run these tests                        |
| 0d. | Docker         | We will provide a Dockerfile that can be used to test all the functionality delivered with this milestone                                                                      |
| 0e. | Article        | We will publish an article to announce the launch of ICS 11 - BEEFY on Medium and Twitter, targeting develoers, dapps, and blockchains                                         |
| 1. | Development    | Implementation of the ICS - 02 clients interface using our Beefy verification and the Parity-trie library for IBC packets commitments and verification                         |  
| 2. | Testing        | Implementation of the IBC test framework that allows for verification of incoming headers as well as IBC packets                                                               |  

### Milestone 3: V1 release of ICS 11 - BEEFY interacting on testnet
- **Estimated duration:** 8 weeks
- **FTE:** 2
- **Costs:** 20,000 USD

| Number | Deliverable   | Specification                                                                                                                             |
|-------:|---------------|-------------------------------------------------------------------------------------------------------------------------------------------|
|    0a. | License       | GPLv3 / MIT                                                                                                                               |
|    0b. | Documentation | We will provide inline documentation of how a parachain can communicate with a live Cosmos SDK chain using ICS 11 - BEEFY on the testnet. |
|    0c. | Testing Guide | We will include unit tests to cover the basic logic of the interaction on testnet                                                         |
|    0d. | Article       | We will publish an article to announce the inaugural communication between a Parachain and Cosmos SDK chain using BEEFY                   |
|    1a. | Development   | Once BEEFY goes live on Kusama, we will create a testnet environment from Roccoco and deploy the light client onto a Cosmos-SDK chain.    |
|    1b. | Development   | Initiate communication enabling cross-chain messaging with our parachain on Kusama and a Cosmos-SDK chain utilizing IBC                   |  
|     2. | Testing       | We will test basic cross-chain functionalities such as swaps between our parachain and a Cosmos-SDK chain.                                |

## Future Plans

**Immediate plans involve finalizing the development of all components of the Centauri bridge.** 

ICS 11 - BEEFY is one of three components of the Centauri bridge, the other two components are:
- The IBC Pallet
- IBC - Relayer

Centauri will be the cornerstone of bridging Kusama to IBC-enabled chains. The development efforts 
will be paired with ongoing business development efforts that target developers, builders, parachains, and other 
projects that are looking to integrate interoperability features or build interoperable dApps. This will be done through:
- Direct BD outreach
- Publications to announce and highlight Centauri use cases 
- Discussing Centauri & our general approach to trustless bridging across multiple forums such as podcasts, conferences, and 
other events.

Overall, the connection between Cosmos and Kusama is just the beginning of the benefits received through bridging IBC and Picasso. 
Composable is continuing to contribute upstream, further pushing the boundaries of cryptographic research and opening up endless 
possibilities for the Polkadot ecosystem as we work in line with our cross-chain/cross-layer interoperability goals.

## Additional Information :heavy_plus_sign:

We have received a grant from Interchain Foundation for Centauri.
