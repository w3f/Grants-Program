# W3F Grant Proposal

> This document will be part of the terms and conditions of your agreement and therefore needs to contain all the required information about the project. Don't remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with a `>` (such as this one) can be removed.
>
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

Specifically, ICS 11 - BEEFY is the light-client implementation for the Polkadot BEEFY protocol. It enables 
sovereign Cosmos chains to follow Polkadot's parachain consensus. This allows the chains to verify which headers 
have been finalized and which messages are sent at the heights in these finalized headers. It is 
generalized so that it can follow any parachain consensus so long as the chains are connected to the same relay chain. 
It does so using Go implementation of the Parity-trie library.

### Overview

Please provide the following:

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
The IBC pallet itself can be integrated into any parachain that wants to connect with IBC-enabled 
blockchains. This will onboard IBC logic into Substrate. Any Substrate-based chains can integrate
the pallet to communicate with other IBC-enabled chains. Substrate developers can leverage the pallet
for chain logic and their associated dApps to enable a multi-chain contract environment. 

This integration forms the first-ever bridge between Kusama and Cosmos. 
A connection between both networks facilitated by our parachain will vastly expand resources for 
developers looking to build interoperable dApps, further enhancing their use cases and opening new opportunities 
for DeFi.

For example, a user with assets on Kusama looking to utilize a DEX (decentralized exchange) outside of the 
ecosystem (or based on their desired account action) can easily transfer their assets to Cosmos and utilize, 
say, the native Binance DEX. Not only does it offer exposure to users for assets only available on Binance, but 
it also opens new arbitrage opportunities not available today. In general, users can experience cross-chain 
DeFi without the compromise of security. While a DEX is a good example, users gain access to additional
DeFi products such as yield farms, lending protocols, and enhanced liquidity provider opportunities. 

In addition to cross-network interoperability, users utilizing Cosmos will gain access to 
[Mosaic](https://mosaic.composable.finance/), Composable Finance's cross-layer union transferral (asset transfer) 
system.

[Snowbridge](https://snowbridge.snowfork.com/) resembles similar intentions to bridge, but for connecting Polkadot
to Ethereum. Centarui implements MMR verification in Go, but it is not based on Snowfork's Solidity implementation.
Rather, is is based on the [MMR implementation by Nervos](https://github.com/nervosnetwork/merkle-mountain-range), 
being the same implementation used to generate the BEEFY proofs.

> Mosaic is a bridging solution based on liquidity management, single-sided liquidity pools, and a relayer network. 
> [Blog post on Mosaic](https://medium.com/composable-finance/introducing-mosaic-phase-2-10d1bfe5f6f8).
> [Mosaic publication](https://dl.acm.org/doi/fullHtml/10.1145/3523181.3523198)

In addition, traditional DeFi protocols are migrating usage into L2 (layer 2) scaling solutions, 
requiring a need for a cross-layer interoperability instrument that can facillitate increasing transaction 
speeds and sustainable fee management. As both networks continue to develop and grow, so will opportunities for 
DeFi users with this cross-chain connectivity.

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
- [Substrate IBC](https://github.com/ComposableFi/composable/tree/main/frame/ibc)

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
IBC-RS:
- https://github.com/ComposableFi/ibc-rs

## Development Roadmap :nut_and_bolt:

### Milestone 1: BEEFY-Go Library — Implementing the BEEFY Finality Verification Library

- **Estimated duration:** 1 month
- **FTE:** 1 
- **Costs:** Costs: 23,333 USD (Detailed 
[here](https://docs.google.com/spreadsheets/u/1/d/10weAnRG_5r5dk7GP7vjQLwvCjSQPJXbUQtYLXui9nc0/edit#gid=1262782402).

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | GPLv3 / MIT  |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can use the library to verify Beefy commitments |
| 0c. | Testing Guide | Core functions will be fully covered by integration tests to ensure functionality and robustness. In the guide, we will describe how to run these tests |
| 0d. | Docker | We will provide a Dockerfile that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an article to announce our partnership with Web 3 Foundation through this grants program. Article will be published on Medium and Twitter after completion of Milestone 1 |
| 1a. | Development | Develop an MMR verification library that will be used by light-clients to verify MMR ancestry proofs generated by the BEEFY protocol   |  
| 1b. | Development | Use MMR library to write a verification function for parachain headers that have been verified with the BEEFY protocol |
| 2. | Testing | Conduct unit and integration testing for the MMR library. For the verification function, set up integration tests that connect to Rococo and ensure that the verification function can verify live Beefy commitments on Rococo |  

### Milestone 2: ICS11 - BEEFY — ICS 02 Clients Interface implementation for parachains

- **Estimated duration:** 8 weeks
- **FTE:**  1
- **Costs:** Costs: 26,666 USD (Detailed [here](https://docs.google.com/spreadsheets/u/1/d/10weAnRG_5r5dk7GP7vjQLwvCjSQPJXbUQtYLXui9nc0/edit#gid=1262782402).

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | GPLv3 / MIT  |
| 0b. | Documentation | We will provide inline documentation of how to integrate IBC GO with an existing Cosmos chain so that this chain can connect and communicate with parachains that are IBC enabled |
| 0c. | Testing Guide | Core functions will be fully covered by integration tests to ensure functionality and robustness. In the guide, we will describe how to run these tests |
| 0d. | Docker | We will provide a Dockerfile that can be used to test all the functionality delivered with this milestone |
| 0e. | Article | We will publish an article to announce the launch of ICS 11 - BEEFY on Medium and Twitter, targeting developers, dapps, and blockchains |
| 1. | Development | Implementation of the ICS - 02 clients interface using our Beefy verification and the Parity-trie library for IBC packets commitments and verification     |  
| 2. | Testing | Implementation of the IBC test framework that allows for verification of incoming headers as well as IBC packets  |  

## Future Plans

**Immediate plans involve finalizing the development of all components of the Centauri bridge.** 

ICS 11 - BEEFY is one of three components of the Centauri bridge, the other two components are:
- The IBC Pallet
- Relayer

Centauri will be the cornerstone of bridging Kusama to IBC-enabled chains. The development efforts 
will be paired with ongoing business development efforts that target developers, builders, parachains, and other 
projects that are looking to integrate interoperability features or build interoperable dApps. This will be done through:
- Direct BD outreach
- Publications to announce and highlight Centauri use cases 
- Discussing Centauri & our general approach to trustless bridging across multiple forums such as podcasts, conferences, and 
other events (e.g. as part of our upcoming inaugural event Unchained, we will reserve a slot to discuss trustless bridging & Centauri)

Overall, the connection between Cosmos and Kusama is just the beginning of the benefits received through bridging IBC and Picasso. 
Composable is continuing to contribute upstream, further pushing the boundaries of cryptographic research and opening up endless 
possibilities for the Polkadot ecosystem as we work in line with our cross-chain/cross-layer interoperability goals.

## Additional Information :heavy_plus_sign:

We have received a grant from Interchain Foundation for Centauri.
