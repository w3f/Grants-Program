# PrivaDEX: Cross-Chain DEX Aggregator MVP

- **Team Name:** OCamlMyCaml
- **Payment Address:** 13BpdtqDLM25KfCb5ttYy1opDP1sHmUNQka8QZi5DqQ3UGAV (Polkadot - USDT)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 3

## Project Overview :page_facing_up:

### Overview

PrivaDEX is a cross-chain DEX aggregator that enables cross-chain trading and unifies Polkadot's fragmented DeFi ecosystem.

#### DeFi in Polkadot is *frustratingly fragmented*
There are currently five parachains that each hold 10-35% of Polkadot's total DEX TVL, with four more parachains that plan to soon launch (or have recently launched) their flagship DEX. Despite having so many trading venues available, 80% of DEX users trade on a single parachain - and are thus limited to 10-35% of the available trading opportunities [1]. 
![Pie chart](https://raw.githubusercontent.com/kapilsinha/privadex/main/media/dex_usage_pie_chart.png)

The reason is simple; cross-chain trading is far too cumbersome. Executing a cross-chain swap is a 5 minute endeavor that requires several DEX swaps, manually bridging tokens, and waiting for all the transactions to be processed [2]. In short, DeFi in Polkadot is frustratingly fragmented. 

[1] Based on results from surveys like [this one](https://docs.google.com/forms/d/16p3ti-VbX_yrU74TqZlxNapYFsISAOJKaM0B6B6jT1M), collected from users of StellaSwap, BeamSwap, ArthSwap, and AcalaSwap.

[2] Coming from a trading background, Kapil developed and ran systematic trading strategies in the Polkadot ecosystem a few months ago. At the time, liquidity was particularly scarce in light of the Nomad bridge hack and the Acala hack, necessitating multi-venue trading. Nevertheless, he found it impossible to systematically trade cross-chain due to the lack of existing automation.

#### PrivaDEX defragments DeFi
PrivaDEX automates cross-chain messaging and smart order routing so that traders don’t spend those 5 minutes manually executing one cross-chain trade. Now it's one step.

By pooling liquidity from several DEXes across chains, PrivaDEX has access to more liquidity than any existing DEX. Further, it optimizes order splitting/routing to minimize price impact and achieve the best prices for users. PrivaDEX makes it 1-click-easy to efficiently trade across parachains.

### Project Details
#### Architecture
![Technical flow](https://github.com/kapilsinha/privadex/blob/main/media/technical_flow.png?raw=true)

Moving left to right in the above diagram, the development stack consists of
1. Typescript and GraphQL for the blockchain indexing to generate price feeds
2. Phat Contract Rust code, which looks like ink! smart contract code and acts like an AWS Lambda (off-chain stateless/serverless computing)
3. React for the swap UI

#### Proof-of-Concept
We have developed a proof-of-concept for the executor module [here](https://drive.google.com/file/d/1jmPsCUfRWBJX6oRYvmAUGISYzbz2U0-9). This PoC, implemented in a [Phat Contract](https://wiki.phala.network/en-us/general/phala-network/products/#phat-contract) demonstrates the following steps:
1. The user sends the *sourceToken* to the protocol.
2. The protocol XCM asset transfers this token amount to the *destinationChain*.
3. The protocol swaps *sourceToken* for *destinationToken* on the remote chain's Uniswap-like DEX.
4. The protocol transfers *destinationToken* from its escrow account to the user's wallet on *destinationChain*.

#### Existing Code and Design Documents
Please check out the [main repo](https://github.com/kapilsinha/privadex). It contains some of the source code we have already written as well as design documents (in `README` files) for the incomplete items.

### Ecosystem Fit

#### Serving DEX users on every parachain
While Polkadot is designed for interoperability amongst chains, most XCM development efforts (e.g. X-Tokens/XTransfer pallets, bridges, remote execution) largely still serve developers, not lay end users.

PrivaDEX is intended for DEX users on every Polkadot parachain. It enables users to conveniently trade cross-chain and efficiently trade intra-chain.

#### Comparing to EVM DEX aggregators
There are *no* similar DEX aggregators in the Polkadot ecosystem. Other blockchains have DEX aggregators that generally fall under two categories:
1. Intra-chain DEX aggregator like 1Inch: these find optimal routes by consolidating data from multiple DEXes on a single chain. There is no cross-chain component.
2. Multi-chain DEX aggregator like Rango Exchange: these have poor (1) support for non-EVM chains, (2) UX, and (3) quality of routing solutions. PrivaDEX addresses these three shortcomings:

(1) PrivaDEX has built-in Substrate and EVM compatibility and thus can uniquely integrate with any parachain (and associated XCMP channels).

(2) PrivaDEX requires the user to sign just one transaction. Multi-chain aggregators like Rango require the user to sign a transaction each step of the way. This makes for a huge UX difference: users should be able to click a button and walk away, not need to stay on a webpage for minutes and sign multiple transactions along the way.

(3) PrivaDEX smart order router logic involves splitting the route to optimize for price impact (which becomes a significant consideration where liquidity is relatively low). Rango never splits routes to optimize for price impact. Note that this is not a simple add-on feature because it is also a result of their requirement that a user sign every transaction - they would have to ask the user to sign 2-3x as many transactions to account for these split routes!

## Team :busts_in_silhouette:

### Team members

- Kapil Sinha
- Ayan Bandyopadhyay
- Bradley Justice

### Contact

- **Contact Name:** Kapil Sinha
- **Contact Email:** ksinha1999@gmail.com
- **Website:** Coming soon!

### Legal Structure

- **Registered Address:** We do not have a registered address
- **Registered Legal Entity:** We do not have a registered legal entity

### Team's experience

Kapil, Ayan, and Bradley had earlier built [DealDex](https://drive.google.com/file/d/13JahtsT2jWUqRIOJDOFduMairfOZd3dD), an investing platform for Web3 angel syndicates. Before that, they had built [RTCanary](https://www.producthunt.com/products/rtcanary), a video conferencing analytics platform.

Kapil developed trading systems for a large trading firm and later personally developed and ran systematic strategies on StellaSwap and BeamSwap.

Ayan improved security and developed UI for Robinhood and later at CoinTracker.

Bradley developed automation infrastructure, focusing on fault tolerance and failover scenarios, at Microsoft Power Automate.

### Team Code Repos

The main source code repo (check out the progress thus far!) is at
- https://github.com/kapilsinha/privadex

Team GitHub accounts:
- https://github.com/kapilsinha
- https://github.com/Ayan-Bandyopadhyay
- https://github.com/bradjustice97

### Team LinkedIn Profiles
- https://www.linkedin.com/in/kapil-sinha/
- https://www.linkedin.com/in/ayan-bandyopadhyay-9a45b1103/
- https://www.linkedin.com/in/bradley-justice-568519195/


## Development Status :open_book:

### Market Research & Inspiration
Kapil personally felt the need for a user-friendly aggregator when he was systematically trading on Moonbeam's DEXes from August to September 2022. Scaling any strategy on a single venue was impossible. Low liquidity meant high price impact, and diminishing marginal returns meant high opportunity cost. Manually swapping tokens and bridging them from various UIs took too much time and manual involvement.

Parity's Rae Deng summarized the need for a DeFi aggregator in Polkadot in [this Polkadot forum post](https://forum.polkadot.network/t/what-needs-to-happen-for-our-defi-ecosystem-asap/1092/10):

>[There is a need for a] DeFi aggregator like 1inch or Matcha using XCM. Right now the liquidity is scattered on different parachains. It would be helpful to have a DeFi aggregator which can find the best route to swap assets by leveraging liquidity on different parachains.

### Current Progress
We have developed a proof-of-concept [here](https://drive.google.com/file/d/1jmPsCUfRWBJX6oRYvmAUGISYzbz2U0-9).

The work-in-progress source code and design docs (in `README` files) are in the [main repo](https://github.com/kapilsinha/privadex). We have made good progress on the price feed, chain metadata store, and network graph generation. Together, these components allow us to auto-generate a network graph of the ecosystem with real-time prices.

You can find a snapshot of this token graph (comprising Polkadot, Moonbeam, and Astar; scraping data from StellaSwap, BeamSwap, and ArthSwap) that we auto-generated [here](https://raw.githubusercontent.com/kapilsinha/privadex/main/privadex/routing/generated_graph.svg) (raw data is [here](https://raw.githubusercontent.com/kapilsinha/privadex/main/privadex/routing/generated_graph.dot)).

## Development Roadmap :nut_and_bolt:
We had started development in the first week of October, so we have made good headway towards achieving the below milestones.

### Overview

- **Total Estimated Duration:** 5.5 months (~2.5 more months)
- **Full-Time Equivalent (FTE):** 2 FTE
- **Total Costs:** 55,000 USD

### Milestone 1 — Network graph generator API
Note: This milestone is largely completed. You can find a sample output snapshot of a graph comprising Polkadot, Moonbeam, and Astar [here](https://raw.githubusercontent.com/kapilsinha/privadex/main/privadex/routing/generated_graph.svg) (raw data is [here](https://raw.githubusercontent.com/kapilsinha/privadex/main/privadex/routing/generated_graph.dot)).

- **Estimated duration:** 1.5 months
- **FTE:**  2
- **Costs:** 15,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | GPLv3 |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can call the API to generate an execution plan. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. There will be a standalone example that calls the API and generates a graph dot file. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test the API delivered in this milestone. |
| 1. | Price feed for ArthSwap | We will create a GraphQL API to scrape prices from ArthSwap's constant product AMM contracts. |
| 2. | Price feed for StellaSwap | We will create a GraphQL API to scrape prices from StellaSwap's constant product AMM contracts. |
| 3. | Price feed for BeamSwap | We will create a GraphQL API to scrape prices from BeamSwap's constant product AMM contracts. |
| 4. | Rust GraphQL client | This Rust client will construct queries for the above GraphQL APIs and deserialize responses into Rust-native structs. |
| 5. | Chain metadata store | This Rust crate will contain bridge, chain, DEX, and token metadata for the Polkadot ecosystem necessary to construct a complete network graph. |
| 6. | Graph library | We will heavily leverage the existing Rust [graphlib](https://github.com/purpleprotocol/graphlib) library but make modifications to support no_std. |
| 7. | Network graph construction | This will combine GraphQL queries and the chain metadata store to create the graph using the above graph library. |


### Milestone 2 — Execution plan generator API
An *execution plan* is a series of steps (e.g. swap ASTR for DOT on Arthswap, transfer DOT to Polkadot relay, etc.) to convert sourceToken on sourceChain to destinationToken on destinationChain.

- **Estimated duration:** 1 month
- **FTE:**  2
- **Costs:** 10,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | GPLv3 |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can call the API to generate an execution plan. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. There will be a standalone example that calls the API and generates an execution plan. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test the API delivered in this milestone. |
| 1. | Smart order router algorithm | The SOR will find the optimal path through the graph created in the previous milestone, outputting a `GraphSolution`. |
| 2. | GraphSolution to ExecutionPlan converter | This Rust crate will translate a `GraphSolution` into an `ExecutionPlan` e.g. convert directed graph edges [ARSW -> ASTR, ASTR -> DOT, DOT_Astar -> DOT_Polkadot] into abstract instructions that can be used to submit transactions and extrinsics later. |
| 3. | ExecutionPlan validator | This Rust module will check invariants in the outputted ExecutionPlan to ensure it is valid and executable. |


### Milestone 3 — Executor Module
The executor module is Phat Contract code that actualizes the above execution plan, submitting transactions and extrinsics to perform swaps, bridges, and transfers.

#### FAQs on Phat Contract
What is Phat Contract?
* Phat Contract is a decentralized off-chain computation framework developed by Phala Network. Note that there is *zero* connection between Phat Contract and the Phala blockchain, as this framework is entirely off-chain.

Why use Phat Contract?
* Phat Contract allows us to securely store our protocol's keys (both wallet secret keys and off-chain storage API keys) in the contract (via the Trusted Execution Environment). As a result, we can submit transactions/extrinsics from a decentralized and transparent computing environment instead of a centralized service.

How can we evaluate Phat Contract?
* We will place all business logic in separate modules, and create a thin Phat Contract wrapper that ties the components together. That means that every logical component can be run from a standard computer because it will be normal Rust code (similar to Substrate blockchain code). In fact, one can even perform an end-to-end test (that moves and swaps real tokens) from a local environment since secret keys can be kept locally.


- **Estimated duration:** 1.5 months
- **FTE:**  2
- **Costs:** 15,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | GPLv3 |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can call the Phat Contract execute the next step of their cross-chain swap. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to generate the WASM code. Note: Phat Contract runs in a Trusted Execution Environment and local deployment is not well supported yet. We will provide instructions on how to run this component via the [Phat Contract UI](https://phat.phala.network). |
| 1. | Rust Ethereum interface utils | This Rust mod will provide helper utilities to construct Ethereum transactions and parse Ethereum transfers. |
| 2. | Rust Substrate interface utils | This Rust mod will provide helper utilities to wrap RPC calls (e.g. to query nonce, runtime version, block hash) and deserialize them into Rust-native structs. |
| 3. | Substrate extrinsic signature and construction utils | This Rust mod will handle the various chains' signature schemes (Sr25519 and ECDSA), and construct extrinsics using those signatures and payloads. This code will leverage components of [subxt](https://github.com/paritytech/subxt) but note that we cannot use it as-is because of limited memory constraints in a Phat Contract. This means that we will need to write our own low-level code to encode extrinsics correctly. |
| 4. | Phat Contract controller/driver | As the event driver that runs in the Phat Contract, this will have functions to process each supported `ExecutionStep` and create the appropriate transactions/extrinsics. It will also expose this `processStep` function to the caller. |


### Milestone 4 — Consolidated backend API and swap UI
The backend API ties together the above components and builds in a scheduler to handle multiple sequential steps, exposing REST functions that can be called from a browser. The swap UI provides a frontend for this API.

- **Estimated duration:** 1.5 months
- **FTE:**  2
- **Costs:** 15,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | GPLv3 |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can use the API to execute their cross-chain swap. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | N/A. The main deliverables are the UI and its REST backend (that connects to the Phat Contract, which cannot be run locally), so containerization provides little value. |
| **0e.** | Article | We will publish an **article**/workshop that explains how to DEX users on how they can use PrivaDEX to perform cross-chain swaps and intra-chain aggregated swaps. |
| 1. | S3 API for executor | Building on Phat Contract's S3 example code [here](https://github.com/christopherfkk/fat-contract-s3-sync), this S3 API will perform state management for the executor e.g. keeping track of the status of an ExecutionPlan. |
| 2. | Executor module scheduler | Leveraging Phat Contract's [rollup scheduler](https://medium.com/phala-network/phala-will-enter-its-1st-halving-period-phalaworld-unlimited-shell-mint-has-started-phala-ce6c6e3028b8) and the above S3 API, this scheduler will manage state and call the appropriate `processStep` function (from the previous milestone) for pending swaps. Note that Phat Contract inherently is stateless and because it requires wait times between block inclusion, it performs one step at a time. |
| 3. | QuoteGetter API | This API will be called by the UI to estimate a quote before the user requests a swap. It will construct the network graph and call the smart order router (as defined in the previous milestones), and estimate a quote based on the computed route. |
| 4. | SwapRequest API | This API will be called by the user via UI to transfer funds to the protocol and initiate the swap ExecutionPlan. |
| 5. | GetSupportedChainTokens API | This API will be called by the UI to generate a list of tokens (and chains) from/to which the user can swap. |
| 6. | Swap UI | This Uniswap-like UI will use the APIs defined in this milestone for its backend calls. It does not require a database but will be hosted by a cloud provider. The frontend will leverage existing code e.g. components from the [Uniswap interface](https://github.com/Uniswap/interface). |


## Future Plans

We will manage a Discord channel to communicate directly with end users. Closer to the end of the MVP development, we will make announcements to prepare for our launch.

Long-term, we intend PrivaDEX to be a cross-chain DeFi hub for Polkadot. We will continue to improve the product and develop new features (e.g. parallel processing of execution steps to decrease slippage) to improve trade execution.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?**

Rob Habermeier recommended that we explore Web3 support and reach out to Parity Growth. Nicolas Arevalo advised me further to apply for a Web3 grant!

We have applied for a grant from the Moonbeam Foundation that is more focused on providing value to the Moonbeam EVM ecosystem.
