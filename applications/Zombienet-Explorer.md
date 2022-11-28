# W3F Grant Proposal

- **Project Name:** Zombienet Explorer: Multi-Chain Substrate Block Explorer (based on Polkaholic.io)
- **Team Name:** Colorful Notion
- **Payment Address:** Polkadot 5D58imQFuMXDTknQS2D14gDU2duiUC18MGxDnTKajjJS9F3g [USDT]
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

[Zombienet](https://github.com/paritytech/zombienet) is a cli tool to easily spawn ephemeral Polkadot/Substrate networks and perform tests against them. A single ZombieNet is set up with a single toml file and parachain binaries (eg astar-collator, moonbeam, acala, etc.).  

[Zombienet Explorer](https://github.com/colorfulnotion/zombienet-explorer) indexes a Zombienet using purely local setup (just Mysql, no external HTTP API calls unless you use a non-standard flag). It is based off Colorful Notions' [Polkaholic.io](https://polkaholic.io) which has been running as a public Multi-Chain Block explorer  for 5 months.  Key features are basically same basic multichain block explorer interface as Polkaholic.io, but running on spawned Zombienets instead of Polkadot + Kusama chains, specifically:
* EVM support (basic evm txn input/logs decoding only)
* WASM support
* linking and visualizing different XCM messages / extrinsics
* simple Mysql analytics

The approach Polkaholic.io has taken is an "indexing" approach, where all chain activity is analyzed from multiple chains and stored in MySQL across multiple chains.  This is complementary to the approach taken by polkadot.js.org's reference app, where a single endpoint is probed in real-time.

While Colorful Notion's polkaholic.io website utilizes production-grade GCP components (BigQuery, BigTable, US/EU/AS LoadBalancer, etc.) for its backend, [Zombienet Explorer](https://github.com/colorfulnotion/zombienet-explorer) pours all data into Mysql, which makes it easy for developers to modify/customize it for their own purposes, perform Mysql analytics, and make their own contributions.

Colorful Notion would like to seek Web3F Level 2 funding to develop Zombienet explorer to:
* support new Substrate developers developing new parachains
* support existing parachains achieve XCM interoperability with fellow parachains
* support EVM + WASM + Dapp developers generally develop and debug complex XCM extrinsics

### Project Details

See [Zombienet Explorer README](https://github.com/colorfulnotion/zombienet-explorer) for details. Here's a summary of how it works:  

* The deployment of Zombienet is based off a single TOML file (e.g. [Shibuya](), [Moonbase]()) and binaries for the chains, resulting in "/tmp/zombie-eb7506e58308cc12e5c2906ffd894759_-1437039-m0Kjx84Yxy8y/zombie.json"
![Zombienet](https://cdn.polkaholic.io/screenshots/zn-setup.png)

* The Zombienet explorer uses the same TOML input and a "zombie.json" config generated, and is initiated with a "docker-compose up" operation (launches Mysql + Tempo Docker containers) followed by
```
node explorer.js moonbase.toml /tmp/zombie-eb7506e58308cc12e5c2906ffd894759_-1437039-m0Kjx84Yxy8y/zombie.json
```
* Then, blocks, traces, extrinsics, EVM logs, XCM messages  for all chains are crawled/indexed from local WS Endpoints in realtime.  Mysql tables support each chain.

* Zombienet explorer is initiated with:
```
node index.js
node api.js
```

This shows the same explorer interface as on Polkaholic.io, except with the Zombienet instead of Polkadot/Kusama and their parachains:

![Zombienet Explorer](https://cdn.polkaholic.io/screenshots/zn-chains.png)

with blocks, tx/extrinsics, EVM/WASM contracts, accounts, and XCM activity.  See [Polkaholic.io](https://polkaholic.io) for a fully working Multichain Substrate Block Explorer.  

![Zombienet Explorer Block Page](https://cdn.polkaholic.io/screenshots/zn-block.png)

* XCM Messages, XCM Transfers and XCM Remote Executions are matched in real time and stored in Mysql tables in the same way as on Polkaholic.io, except all locally.
* As XCM Extrinsics go through their journey, distributed tracing Jaeger/Tempo spans are submitted, with "traceids" keyed in by unfinalized/finalized extrinsic IDs.   Here is a [Simple XCM Transfer](https://polkaholic.io/tx/0x09093671a6d2d6633b29c3801035b55c1f7752428b50a012c8f0ba292f652dc1) and [Distributed Trace of Ext](https://xcmscan.polkaholic.io/trace/8ef6d6763145e984?uiEmbed=v0); [XCM Transfers](https://polkaholic.io/xcmtransfers?xcmType=xcmtransfer) show all the XCM Transfers like that in one place (there are lots now, in 2022)
* [Moonbase Alpha Remote Execution Tx using System 5004](https://polkaholic.io/tx/0xc7b650144ae76221937c055dceb19e73cd8969ce007206e0e18661f968ffdbf7) and [Distributed Trace of Tx](https://xcmscan.polkaholic.io/trace/24301f35ee2e7d83); [XCM Remote Executions](https://polkaholic.io/xcmtransfers?xcmType=xcmtransact) show all the XCM Remote executions in one place (there aren't many yet, but should be more in 2023); Sample screeshots of Remote Execution follow --

(a) Transaction Details
![Zombienet Remote Execution Transaction Details](https://cdn.polkaholic.io/screenshots/zn-remoteexecution-tx-details.png)

(b) Distributed Tracing

![Zombienet Remote Execution Distributed Tracing](https://cdn.polkaholic.io/screenshots/zn-remoteexecution-distributedtracing.png)

Zombienet Explorer will have all of Polkaholic.io's fully working multi-chain UI + APIs*, except all done locally for the purposes of substrate parachain engineering.

### Ecosystem Fit

The Polkadot ecosystem benefits from a network of interoperable substrate parachains, each of which use XCM to interact with one another.  Zombienet makes it easy for substrate developer to rapidly test their own parachain and also test connectivity with fellow parachains.  Developers start with polkadot.js extremely power app, but this was architected for a _single_ endpoint rather than arbitrary numbers of chains.

**XCM**

With XCM enabling complex multi hop interactions between multiple chains, it is challenging to reason about the flow of an XCM operation by switching between single chain views.  Our initial attempts to index XCM Transfers were overfitted to just asset transfers using DMP/UMP/HRMP (which dominate almost all XCM messages
now), but in response to an earlier draft of this proposal, we were challenged with how one could visualize _multiple_ legs of an XCM
operation.  Because some XCM instructions can contain XCM messages themselves recursively, and may "Transact" encoded call, there may be
many different chains initiated by a single extrinsic generating a "tree" of activity.   After seeing a few cases of ump/dmp and transact in the wild, it became clear that the "XCM Transfer" approach would not be too simplistic.

**Distributed Tracing + Remote Execution**.

Zombienet incorporates Distributed Tracing tools from [Grafana Tempo+Jaegar](https://github.com/grafana/tempo), which are well matched to XCM's recursion capabilities.  At present, reasoning about what is going on between chains is accomplished by looking at a lot of raw logs and undecoded messages between chains.  Substrate chains that operate as "shards" or on each others unique functionality will increasingly rely on remote execution, but this future cannot be realized until tools exist.  Zombienet with Zombienet explorer aims to serve this goal.

**Open source LCD**

Having an open-source Zombienet explorer using lowest common denominator code (Nodejs + Mysql, not React Typescript or BigTable) may support faster analytics, and more extensibility. Someone who knows only a bit of Javascript+SQL and completed their first Substrate pallet should be able to add their own chain indexing and user interface to Zombienet Explorer and do simple mysql analytics.  We have about 5-10 key big classes so Level 7 fellows aren't required to achieve this goal.

**Zombienet**

After adding XCM Remote Execution indexing for Moonbase Alpha/Beta, we thought it would be possible to do a Shiden-Moonriver bidirectional remote execution (using Astar remote_transact and Moonbeam 5004 System Contract), but there is significant complexity in derived accounts in this case.  Astar's Dino Pacandi led us to explore XCM Remote Execution within Zombienet following [this](https://github.com/AstarNetwork/Astar/tree/master/third-party/zombienet); Moonbeam's Gorka provided 2 Moonbase configuration included [here](https://github.com/colorfulnotion/zombienet-explorer/blob/main/moonbase.toml). From this effort, it became clear that complex XCM interoperabilty testing between parachains would be done in ZombieNet and a more extensible ZombieNet explorer would be required.

## Team :busts_in_silhouette:

### Team members / Contact

- **Contact Name:** Sourabh Niyogi / Michael Chung
- **Contact Email:** sourabh@colorfulnotion.com / michael@colorfulnotion.com
- **Website:** https://polkaholic.io

### Legal Structure

- **Registered Address:** 55 E 3rd Ave, San Mateo, CA 94401, USA
- **Registered Legal Entity:** Colorful Notion, Inc.

### Team's experience

Key engineers Sourabh Niyogi and Michael Chung have developed Polkaholic.io since Fall 2021.  Prior to building Polkaholic.io, Sourabh and Michael worked in decentralized social networking protocol development + privacy-preserving contact tracing (Wolk),  mobile advertising real-time bidding algorithm design and analytics (CrossChannel/MdotM).  Sourabh has founded social + web advertising startups (Social Media Networks) in the SF Bay and spent time doing computational cognitive science and machine vision research at MIT.  Michael hails from UC Berkeley.

### Team Code Repos

- [Zombienet Explorer](https://github.com/colorfulnotion/zombienet-explorer)
- [Polkaholic.io](https://github.com/colorfulnotion/polkaholic)
- [Polkaholic.io API](https://github.com/colorfulnotion/docs.polkaholic.io)
- [Sourabh Niyogi](https://github.com/sourabhniyogi) | [Michael Chung](https://github.com/mkchungs)

## Development Status :open_book:

* Summer 2022: Released Polkaholic.io, a fully working block explorer that currently shows initial UI + API implementations, including indexing across 50+ chains.  Submitted this Web3F proposal in July.
* Fall 2022: Increased XCM Transfers Coverage, Improved UI + API based on feedback from users.  Added  EVM/WASM support. Submitted first Treasury proposal to Kusama (8 ayes, 0 nays, did not pass yet) + Polkadot.  
* Early November 2022: Successfully demonstrated Moonbase Alpha/Beta Remote execution and "full recursion" in Jaeger/Tempo XCM Timelines on Polkaholic.io.
* Late November 2022: Initiated testing Remote Execution with [2 Astar ZombieNet](https://github.com/colorfulnotion/zombienet-explorer/blob/main/shibuya.toml) (thanks to Dino Pacandi) + [2 Moonbeam Zombienet](https://github.com/colorfulnotion/zombienet-explorer/blob/main/moonbase.toml) (thanks to from Gorka/Alberto/Yann] and initiated [Zombienet Explorer repo](https://github.com/colorfulnotion/zombienet-explorer)

## Development Roadmap :nut_and_bolt:

Zombienet Explorer code is a simplified version of Polkaholic.io run entirely in a local environment (local Mysql, pure Docker).  Most of the engineering work thus consists of deleting all code that is useless, documenting what remains to support Substrate devparachain contributions, and testing that the Zombienet explorer is useful specifically to support parachain developers testing their single chain, and multiple chains interacting with other with XCM Transfers and Remote Executions in EVM + WASM contexts.

Beyond having a clean and well documented Zombienet Explorer code base, we have 2 key demonstrations:
* Demonstrate Moonbase EVM TransactThroughSigned Remote Execution call via 5004 System Contract in Zombienet
* Demonstrate Shibuya WASM Contracts Remote Execution call or with EVM remote_transact call in Zombienet
These demonstrations allow us to really test both the basics (can we show EVM Blocks, Contracts, XCM Messages, XCM Transfers, Remote Executions in a way that improves development) and the full utility of using Distributed testing.

### Overview

- **Total Estimated Duration:** 8-10 weeks
- **Full-Time Equivalent (FTE):** 2.0 FTE
- **Total Costs:** 30,000 USD.

### Milestone 1 — Core Zombienet Explorer Code, Working Zombienet Explorer for 2 EVM+WASM parachains

- **Estimated duration:** 4-5 weeks
- **FTE:**  2.0 FTE
- **Costs:** 15,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | GNUv3 |
| 0b. | Documentation | Provide: (a) **inline documentation** of the core crawling and indexing processes (b) how to setup Zombienet Explorer using Docker compose for Astar + Moonbem chains |
| 0c. | Testing Guide	| Update README showing how to do remote executions between 2 Moonbase parachains and 2 Shibuya parachains within Zombienet, and visualize them with Jaeger |
| 0d. | Docker	| Docker compose file composed of mysql, Jaeger/tempo setup |
| 1. | Zombienet Explorer Site Areas | Development of Polkaholic.io Core Site Functionality. |  
| 2. | Support for Distributed Tracing | Development of Jaeger/tempo tracing. |  

See [Zombienet Substrate Block Explorer - Milestone 1](https://docs.google.com/spreadsheets/d/1xfcmlh-q_tRuf4wQDvv2c_pZQTJEu71KVk1N59pXgXs/edit#gid=323796891)

### Milestone 2 — Chainparser Refactor, 3 parachains, 30 TOML

- **Estimated duration:** 4-5 weeks
- **FTE:**  2.0 FTE
- **Costs:** 15,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | GNUv3 |
| 0b. | Documentation   | Provide **inline documentation** for (a) all working chain parsers (b) XCM indexing mechanics |
| 0c. | Testing Guide   |Update README of how the chain parsers actually work, with astar (WASM) + moonbeam (EVM) as core examples. |
| 0d. | Docker |  Docker compose file composed of mysql, Jaeger/tempo setup. |  
| 1. | Support for 2 Parachain Parsers | Development of 2 Parachain Parsers: Astar + Moonbeam |  
| 2. | Test 20 Zombienet Configs | Generate a report of our attempts to have working single parachain TOML beyond Shibuya + Moonbase with 20 TOMLs, using binaries available from our full nodes  |  

In the construction of Polkaholic.io, we have implemented generic parsers for popular pallets used by multiple chains (e.g. xTokens, polkadotXcm, xcmPallet, tokens, asset, system etc, assetRegistry) but found it was difficult to do this for all parachains: there is just too much custom activity.

In our vision, parser for commonly-shared pallet only *needs* to be implemented once. Developers are welcomed to submit PR for commonly-shared generic parsers which have high impact. In addition, each parachain team can also tweak certain aspect of the indexing machinery + supporting UI for their own parachain by building a chain-specific parser for their own purposes and adding it to Zombienet Explorer.

We will develop 2 representative parachain parsers: Moonbeam + Astar that demonstrate how substrate developers can extend the Zombienet explorer to support their own pallets and parachins.

We will also test 20 Zombienet configurations using recently compiled binaries.  See [Zombienet Substrate Block Explorer - Milestone 2](https://docs.google.com/spreadsheets/d/1xfcmlh-q_tRuf4wQDvv2c_pZQTJEu71KVk1N59pXgXs/edit#gid=323796891) for an exhaustive list.

## Future Plans

Colorful Notion aims to see this project have contributions from as many Substrate parachain teams as possible, similar to how parachains submit PR to Polkadot.js, except specifically with chain parsers + UI views added by more parachains.  Our expectation is that by having parachain specific code developed by parachains, we may have this functionality brought back into Polkaholic.io's multichain block explorer and other projects that need to do analytics/UI.

With sufficient interest as different parachain teams instrument their parachains for XCM interoperability, we would welcome doing follow on work on:
* XCMv3
* modeling weights, gas used and fees
* improving distributed traces to have additional utility
* XCM remote execution tools

## Additional Information :heavy_plus_sign:

* Bill Laboon of Web3F recommended we develop a XCM call graph UI which led us down the distributed tracing route.  See also: supporting this RFP for [XCM library & tools](https://github.com/w3f/Grants-Program/blob/master/rfps/open/xcm-tool.md)
* Polkaholic directly addresses RFP for a [Multi-Chain Block Explorer](https://github.com/w3f/Grants-Program/blob/master/rfps/open/multi-chain-block-explorer.md)
* Colorful Notion submitted a Treasury Proposal to [Kusama](https://kusama.polkassembly.io/motion/555) + Polkadot and would like to have Polkaholic.io supported by Treasury.  
* Colorful Notion welcomes active collaborations with parachains in Zombienet, especially in the area of distributed tracing, remote execution, XCM interoperability between EVM+WASM oriented shards, and chain-specific block explorers
