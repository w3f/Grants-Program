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

Centauri is a trustless bridge that links the Inter-Blockchain Communication protocol (IBC) with our Kusama parachain, Picasso. It consists of:
A Pallet that implement the IBC framework
An rpc subcrate for exposing IBC state
A runtime-api subcrate that provides an interface for the rpc subcrate to query IBC state from the runtime 
A chain agnostic, event driven relayer implementation in rust.
Light client for Polkadot/ Kusama parachains that is implemented in Go for the IBC framework

Specifically, ICS 11 - BEEFY, is the light client implementation for the Polkadot Beefy protocol. It enables Cosmos chains to follow Polkadot consensus and consequently parachain consensus. This allows them to verify which headers have been finalized and which messages sent at the heights in these headers recently finalized. It is generalized so that it can follow any parachain consensus as long as it's connected to the same relay chain. It does so using Go implementation of the Parity-trie library

If this application is in response to an RFP, please indicate this on the first line of this section.

If this is an application for a follow-up grant (the continuation of an earlier, successful W3F grant), please provide name and/or pull request of said grant on the first line of this section.

### Overview

Please provide the following:

- If the name of your project is not descriptive, a tag line (one sentence summary).
- A brief description of your project.
ICS 11 - BEEFY, is the light client implementation for the Polkadot Beefy protocol
- An indication of how your project relates to / integrates into Substrate / Polkadot / Kusama.
- An indication of why your team is interested in creating this project.
Centauri allows for parachains to speak to IBC - enabled blockchains in general. This bridge advances Polkadot's vision of enabling cross-blockchain transfers of assets, as well as Composable’s vision of blockchain agnosticism in Defi. It establishes a critical link between the Cosmos and Kusama networks, further connecting multiple chains and opening a sea of new possibilities for DeFi. Building Centauri would allow us to leverage a proven and successful cross-chain communication protocol — and allow communication and asset transfer between our ecosystem, Cosmos, and other chains leveraging IBC.

### Project Details

We expect the teams to already have a solid idea about your project's expected final state. Therefore, we ask the teams to submit (where relevant):

- Mockups/designs of any UI components: None created to date
- Data models / API specifications of the core functionality: 
IBC specs: https://github.com/cosmos/ibc

- An overview of the technology stack to be used
Rust programming language 
Substrate framework 
Inter-Blockchain Communication protocol (IBC)
Bridge Efficiency Enabling Finality Yielder (BEEFY)

- Documentation of core components, protocols, architecture, etc. to be deployed
https://github.com/cosmos/ibc

- PoC/MVP or other relevant prior work or research on the topic
IBC Repos
- https://github.com/ComposableFi/ibc-go/
- https://github.com/ComposableFi/ibc-rs/
- https://github.com/ComposableFi/composable/blob/david/substrate-ibc/frame/ibc/src/lib.rs

- What your project is _not_ or will _not_ provide or implement
  - This is a place for you to manage expectations and to clarify any limitations that might not be obvious

### Ecosystem Fit

Help us locate your project in the Polkadot/Substrate/Kusama landscape and what problems it tries to solve by answering each of these questions:

- Where and how does your project fit into the ecosystem?
We will provide XCMP end points that allow other parachains to talk to IBC- enabled blockchains
Pallet itself can be integrated into any parachain that wants to connect with IBC-enabled blockchains

- Who is your target audience (parachain/dapp/wallet/UI developers, designers, your own user base, some dapp's userbase, yourself)?
Blockchains, parachains, and dapps that want to leverage a multi-chain contract environment

- What need(s) does your project meet?
This integration forms the first-ever bridge between Kusama and Cosmos. a connection between both networks facilitated by our parachain will vastly expand resources for developers looking to build interoperable dApps, further enhancing their use cases and opening new opportunities for investors. 
For example, a user with assets on Kusama looking to utilize a decentralized exchange (DEX) can easily transfer his assets to Cosmos and utilize a DEX like Binance Chain. Not only does this give such users an edge when swapping tokens only available on Binance, but it also opens new arbitrage opportunities. Beyond DEXes, users will have access to additional yield farms, lending protocols, and a lot more.
In addition to cross-network interoperability, users utilizing Cosmos will gain access to Mosaic. As DeFi pushes further into layer 2 (L2) scaling solutions, this cross-layer interoperability will be instrumental in increasing transaction speeds and reducing fees. As both networks continue to develop and grow, so will opportunities for DeFi users thanks to this cross-chain connection
- Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?
No
  - If so, how is your project different?
  - If not, are there similar projects in related ecosystems?

## Team :busts_in_silhouette:

### Team members

- Name of team leader:  Seun Lanlege 
- Names of team members: David Salami, Blas Rodriguez Irizar, Strangelove team, Interchain foundation 


### Contact

- **Contact Name:** Ahmad Wehbi
- **Contact Email:** ahmad@composable.finance
- **Website:** https://www.composable.finance/

### Legal Structure

- **Registered Address:**  FortGate Offshore Investment and Legal Services LTD, 1st Floor, The Sotheby Building, Rodney Bay, Gros-Islet, P.O. Box 838, Castries, Saint Lucia
- **Registered Legal Entity:** Composable Finance LTD

### Team's experience

Please describe the team's relevant experience. If your project involves development work, we would appreciate it if you singled out a few interesting projects or contributions made by team members in the past. For research-related grants, references to past publications and projects in a related domain are helpful.
- Seun Lanlege: Principal Blockchain engineer at Composable Finance, previously Core Rust developer at Parity 
- David Salami: Substrate Rust engineer at Composable Finance, previously Substrate engineer at Webb.tools
- Blas Rodriguez Irizar: Software engineer at Composable Finance, previously Software engineer at ConsenSys

If anyone on your team has applied for a grant at the Web3 Foundation previously, please list the name of the project and legal entity here.

### Team Code Repos

https://github.com/ComposableFi/ibc-go/
https://github.com/ComposableFi/ibc-rs/
https://github.com/ComposableFi/composable/blob/david/substrate-ibc/frame/ibc/src/lib.rs


Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine.

https://github.com/seunlanlege
https://github.com/wizdave97
https://github.com/blasrodri

### Team LinkedIn Profiles (if available)

https://www.linkedin.com/in/seunlanlege/
https://www.linkedin.com/in/david-salami-188aa8170/
https://www.linkedin.com/in/blas-rodriguez-irizar/

## Development Status :open_book:

If you've already started implementing your project or it is part of a larger repository, please provide a link and a description of the code here. In any case, please provide some documentation on the research and other work you have conducted before applying. This could be:

- links to improvement proposals or [RFPs](https://github.com/w3f/Grants-Program/tree/master/rfp-proposal) (requests for proposal),
- academic publications relevant to the problem: 
https://medium.com/composable-finance/trustless-bridging-438a6e5c917a
- links to your research diary, blog posts, articles, forum discussions or open GitHub issues
Merge requests for the MMR repo:
- https://github.com/ComposableFi/go-merkle-trees
- https://github.com/ComposableFi/go-merkle-trees/pulls?q=is%3Apr+is%3Amerged
- https://github.com/paritytech/substrate/pull/10635
IBC RS:
https://github.com/ComposableFi/ibc-rs
https://github.com/ComposableFi/ibc-rs/pulls?q=is%3Apr+is%3Amerged

- references to conversations you might have had related to this project with anyone from the Web3 Foundation,
- previous interface iterations, such as mock-ups and wireframes.

## Development Roadmap :nut_and_bolt:

This section should break the development roadmap down into milestones and deliverables. To assist you in defining it, we have created a document with examples for some grant categories [here](../docs/grant_guidelines_per_category.md). Since these will be part of the agreement, it helps to describe _the functionality we should expect in as much detail as possible_, plus how we can verify and test that functionality. Whenever milestones are delivered, we refer to this document to ensure that everything has been delivered as expected.

Below we provide an **example roadmap**. In the descriptions, it should be clear how your project is related to Substrate, Kusama or Polkadot. We _recommend_ that teams structure their roadmap as 1 milestone ≈ 1 month.

For each milestone,

- make sure to include a specification of your software. _Treat it as a contract_; the level of detail must be enough to later verify that the software meets the specification.
- include the amount of funding requested _per milestone_.
- include documentation (tutorials, API specifications, architecture diagrams, whatever is appropriate) in each milestone. This ensures that the code can be widely used by the community.
- provide a test suite, comprising unit and integration tests, along with a guide on how to set up and run them.
- commit to providing Dockerfiles for the delivery of your project.
- indicate milestone duration as well as number of full-time employees working on each milestone.
- **Deliverables 0a-0d are mandatory for all milestones**, and deliverable 0e at least for the last one. If you do not intend to deliver one of these, please state a reason in its specification (e.g. Milestone X is research oriented and as such there is no code to test).

> :zap: If any of your deliverables is based on somebody else's work, make sure you work and publish _under the terms of the license_ of the respective project and that you **highlight this fact in your milestone documentation** and in the source code if applicable! **Teams that submit others' work without attributing it will be immediately terminated.**

### Overview

- **Total Estimated Duration:** Duration of the whole project (e.g. 2 months)
- **Full-Time Equivalent (FTE):**  Average number of full-time employees working on the project throughout its duration (see [Wikipedia](https://en.wikipedia.org/wiki/Full-time_equivalent), e.g. 2 FTE)
- **Total Costs:** Requested amount in USD for the whole project (e.g. 12,000 USD). Note that the acceptance criteria and additional benefits vary depending on the [level](../README.md#level_slider-levels) of funding requested. This and the costs for each milestone need to be provided in USD; if the grant is paid out in Bitcoin, the amount will be calculated according to the exchange rate at the time of payment.

### Milestone 1 BEEFY-Go Library — Implementing the BEEFY Finality Verification Library

- **Estimated duration:** 1 month
- **FTE:** 1 
- **Costs:** Costs: 23,333 USD (Detailed here: https://docs.google.com/spreadsheets/u/1/d/10weAnRG_5r5dk7GP7vjQLwvCjSQPJXbUQtYLXui9nc0/edit#gid=1262782402)

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | GPLv3 / MIT  |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can use the library to verify Beefy commitments |
| 0c. | Testing Guide | Core functions will be fully covered by integration tests to ensure functionality and robustness. In the guide, we will describe how to run these tests |
| 0d. | Docker | We will provide a Dockerfile that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an article to announce our partnership with Web 3 Foundation through this grants program. Article will be published on Medium and Twitter after completion of Milestone 1 |
| 1a. | Development | Develop an MMR verification library which will be used by light-clients to verify MMR ancestry proofs generated by the BEEFY protocol   |  
| 1b. | Development | Use MMR library to write a verification function for parachain headers that have been verified with the BEEFY protocol |
| 2. | Testing | Conduct unit testing and integration testing for the MMR library. For the verification function, set-up integration tests that connect to Rococo and ensure that the verification function is able to verify live Beefy commitments on Rococo |  
| 3. | Audit | MMR library and verification functions audited once BEEFY protocol is stabilized  |  


### Milestone 2  ICS11 - BEEFY — ICS 02 Clients Interface implementation for parachains

- **Estimated duration:** 8 weeks
- **FTE:**  1
- **Costs:** Costs: 26,666 USD (Detailed here: https://docs.google.com/spreadsheets/u/1/d/10weAnRG_5r5dk7GP7vjQLwvCjSQPJXbUQtYLXui9nc0/edit#gid=1262782402)

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | GPLv3 / MIT  |
| 0b. | Documentation | We will provide inline documentation of how to integrate IBC GO with an existing Cosmos chain so that this chain can connect and communicate with parachains that are IBC enabled |
| 0c. | Testing Guide | Core functions will be fully covered by integration tests to ensure functionality and robustness. In the guide, we will describe how to run these tests |
| 0d. | Docker | We will provide a Dockerfile that can be used to test all the functionality delivered with this milestone |
| 0e. | Article | We will publish an article to announce the launch of ICS 11 - BEEFY on Medium and Twitter, targeting developers, dapps, and blockchains |
| 1. | Development | Implementation of the ICS - 02 clients interface using our Beefy verification and the Parity-trie library for IBC packets commitments and verification     |  
| 2. | Testing | Implementation of the IBC test framework that allows for verification of  incoming headers as well as IBC packets  |  
| 3. | Audit | Audit the ICS 02 clients interface implementation |

## Future Plans

Please include here

- how you intend to use, enhance, promote and support your project in the short term, and
- the team's long-term plans and intentions in relation to it.

Immediate plans involve finalizing development of all components of the bridge. ICS 11 - BEEFY is one of three components of the Centauri bridge, other components are:
Pallet - IBC
IBC - Relayer
Centauri will be the cornerstone of bridging Kusama to IBC-enabled chains. The development effort will be paired with Business development efforts targeting developers, builders, parachains and other projects that are looking to integrate interoperability features or build interoperable dApps. This will be done through:
Direct BD outreach
Publications to announce and highlight Centauri use cases 
Discussing Centauri & our general approach to trustless bridging across multiple forums such as podcasts, conferences and other events (e.g.as part of our upcoming inaugural event Unchained, we will reserve a slot to discuss trustless bridging & Centauri)
Overall, the connection between Cosmos and Kusama is just the beginning of the benefits received through bridging IBC and Picasso. Composable is continuing to contribute upstream, further pushing the boundaries of cryptographic research and opening up endless possibilities for the Dotama ecosystem as we work in line with our cross-chain/cross-layer interoperability goals.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation Website / Medium / Twitter / Element / Announcement by another team / personal recommendation / etc.

Here you can also add any additional information that you think is relevant to this application but isn't part of it already, such as:

- Work you have already done.
- If there are any other teams who have already contributed (financially) to the project.
Received grant from Interchain foundation for Centauri
- Previous grants you may have applied for.
