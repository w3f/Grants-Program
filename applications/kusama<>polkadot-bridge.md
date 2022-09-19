# W3F Grant Proposal

- **Project Name:** Kusama <> Polkadot bridge
- **Team Name:** Composable Finance LTD
- **Payment Address:** 0xdb513DBfd224270ce2Ac4056BDDEB15Ef5f2448E (USDC)
- **Level: 2**

## Project Overview :page_facing_up:

If this application is in response to an RFP, please indicate this on the first line of this section.

If this is an application for a follow-up grant (the continuation of an earlier, successful W3F grant), please provide name and/or pull request of said grant on the first line of this section.


Composable Finance is working towards become the entryway and networking fabrics for blockchain networks. 
It is our mission to service all interactions, transfers, and communications in a trustless, secure, and decentralized manner.

Composable’s vision has been to unify liquidity fragmentation across multiple ecosystems.
Trustless bridging was previously limited to the ecosystem from which it originated from (i.e. IBC for Cosmos and XCMP for Polkadot and Kusama) and there is currently no solution for a Kusama parachain to connect to a Polkadot parachain in a trustless manner.
We are actively developing trustless bridging solutions for cross-ecosystem unification and working towards successfully bringing IBC to the Polkadot ecosystem.
Once this milestone has been realized, we will successfully establish the first trustless bridge between Kusama and Polkadot utilizing the IBC protocol.
This innovation holds significant implications for our goals as there currently does not exist a bridge between Kusama and Polkadot.
Yet, it is a necessary component for the success of Polkadot and Kusama’s vision as well as parachains within the ecosystem.

At its core, this bridge consists of:
* Pallet IBC, that implements the IBC framework
* A chain agnostic, event-driven relayer implementation in rust.
* ibc-rs, a Rust implementation of the IBC protocol.
* GRANDPA Light Client for Polkadot/Kusama parachains
* BEEFY Light Client for Polkadot/ Kusama parachains that is implemented in Go for the IBC framework

![](https://drive.google.com/uc?id=1d_Kw0n9ZNnONnSLUM6_DCHZlriCp5HU1)

_Overview of the components for the KSM <> DOT bridge_

### ibc-rs

ibc-rs is the implementation of the Inter-blockchain communication protocol (IBC) in Rust.
The IBC protocol is defined as an interoperability protocol for communicating arbitrary data between arbitrary state machines.
The IBC protocol provides the necessary infrastructure at the transport layer to support developers who intend to build cross-chain applications through the support of
token transfers, interchain accounts (delegate calls between two chains), non-fungible token transfers and oracle data feeds.

To expand further, IBC enables seamless asset transfer (fungible tokens, non-fungible tokens), multichain Contracts (cross-chain contract calls, cross-chain fee payments, interchain collateralization)
The IBC protocol is an end-to-end, connection-oriented, stateful protocol for reliable, ordered, and authenticated communication between heterogeneous blockchains arranged in an unknown and dynamic topology.
The protocol realizes this by specifying a set of data structures, abstractions, and semantics that can be implemented by any distributed ledger provided they satisfy a small set of requirements.
The IBC protocol is abstracted into modules, ports, clients, connections, channels, packets, relayers, and subprotocols for opening and closing handshakes, packet relay, edge-case handling, and relayer operations.
For ibc-rs, we have modified the GRANDPA light client to track a single parachain making it more in line with the existing IBC standards.

An overview of the benefits of the IBC protocol:

* Enables value transfer between fast-finality chains (with deterministic finality)
* Handles data transport, authentication, and reliability only
* Arbitrary cross-chain data transfer and computation
* Connection and Channel semantics for message routing
* Provides packet semantics for acknowledgments and timeouts
* Provides message ordering semantics via ordered and unordered channels
* Light client abstraction so we can support any chain with a BFT finality protocol

### Hyperspace Relayer

The Hyperspace relayer is an open-source Rust implementation of a relayer for the IBC protocol and a fundamental piece of the KSM <> DOT bridge.
In IBC, blockchains do not directly pass messages to each other over the network. This is where the relayer comes in.
When a blockchain is communicating with a counterparty chain via IBC, relayers must process the token transfer.

An IBC relayer is an off-chain process responsible for relaying IBC messages between two chains.
It does so by scanning chain states, building transactions based on these states, and submitting the transactions to the chains involved in the network.
A relayer process monitors for updates on open paths between sets of IBC-enabled chains and submits these updates through specific message types to the counterparty chain.
Clients are then used to track and verify the consensus state.

As the IBC overview paper states, “In the IBC architecture, modules are not directly sending messages to each other over networking infrastructure,
but rather are creating messages to be sent which are then physically relayed from one ledger to another by monitoring “relayer processes”.
IBC assumes the existence of a set of relayer processes with access to an underlying network protocol stack (likely TCP/IP, UDP/IP, or QUIC/IP) and physical interconnect infrastructure.
These relayer processes monitor a set of ledgers implementing the IBC protocol, continuously scanning the state of each ledger and requesting transaction execution on another ledger when outgoing packets have been committed.
For correct operation and progress in a connection between two ledgers, IBC requires only that at least one correct and live relayer process exists which can relay between the ledgers.”

![](https://drive.google.com/uc?id=1mOXSm_kUIgKrKmiCwei35kr_6jUK506i)

Once a transaction is initiated between a Kusama and Polkadot parachain, the relayer is required to forward actual messages, proofs of message commitment in the block and a BFT finality proof of the block between two chains (e.g. between two parachains).
The assets’ security depends on the underlying blockchain; the relayers simply send messages to acknowledge that the transfer is verified.
Furthermore, BFT finality proofs guarantee safety, that messages are final and cannot be forked.

Once development has been completed and the Rust relayer is functioning, it will be able to support the following:

- Creating IBC connections and transfer channels
- Initiating a cross-chain transfer
- Relaying a cross-chain transfer transaction, its acknowledgment, and timeouts
- Relaying from state or streaming events
- Sending an UpgradePlan proposal for an IBC breaking upgrade
- Upgrading clients after a counter-party chain has performed an upgrade for IBC breaking changes
- Fetching canonical chain and path metadata from the GitHub repo to quickly bootstrap a relayer instance

[Currently, there are 3 relayers in Rust, Golang and Typescript](https://ibcprotocol.org/relayers/) available, however,
existing relayers were not built to be chain agnostic and refactoring them would consist of major technical overhead, therefore,
we have had to build our own relayer infrastructure, universal to any underlying consensus or language of the source/destination chain.

The Hyperspace relayer is the first event-driven chain agnostic IBC relayer, based on ibc-rs and fully written in Rust.
Furthermore, the relayer will become fully stateless with no caching, so if there is any downtime or upgrades, you can restart it safely.
We will also be implementing our fishing protocol, which would allow anyone to get rewards for securing this bridge.

### Pallet IBC

What is Pallet IBC?

It’s a pallet that allows processing and interpreting IBC packets. On its core it contains:
- An RPC interface that exposes querying capabilities for packets, acknowledgements, timeouts, light client states and transaction proofs.
- Interface for host functions require to comply with the IBC standard (mostly related to hashing and state verification)
- Coverage of the full ibc protocol (through ibc-rs)
- A runtime-api subcrate that provides an interface for the rpc subcrate to query IBC state from the runtime

### GRANDPA and BEEFY Light Client

Through utilizing our own Grandpa light client in rust, this would enable our parachains to use the grandpa light client on-chain to verify finality proofs of parachain headers.
We will integrate this light client into pallet-ibc allowing not just parachains on the same relay chain to communicate, but with parachains on another relay chain.

Once BEEFY goes live on Kusama on Polkadot, the KSM <> DOT bridge will switch from using GRANDPA’s consensus to leveraging Parity’s Bridge Efficiency
Enabling Finality Yielder (BEEFY) and its novel consensus gadget that enables Kusama/Polkadot to be bridged to additional chains via very efficient finality proofs.
Parachains on Kusama get their finality from the Kusama relay chain, and thus BEEFY’s ability to create finality proofs provides finality for the KSM <> DOT bridge on Picasso and an essential gateway for the bridge infrastructure.

Therefore, we will also develop our own BEEFY light client based on the implementation for the BEEFY protocol which will be compatible with ibc-rs.
This will enable parachain consensus at the finality layer between Kusama parachains and Polkadot parachains.
This will enable parachains on Kusama or Polkadot to verify which headers have been finalized and which messages sent at the heights in these headers recently finalized.
We have generalized this component so that it can follow any parachain consensus as long as it's connected to the same relay chain.
It does so using Go implementation of the Parity-trie library.

A single instance of this light client on any parachain can prove finality for any other parachain, allowing Polkadot/Kusama parachains to verify IBC commitment packets (IBC consensus proofs).
Pallet IBC facilitates the creation of these IBC commitment packets on the parachains’ infrastructure.

### Overview

Please provide the following:

- If the name of your project is not descriptive, a tag line (one sentence summary).

Presenting the first trustless bridge between Kusama and Polkadot.

- A brief description of your project.
- An indication of how your project relates to / integrates into Substrate / Polkadot / Kusama.
- An indication of why your team is interested in creating this project.

The vision of Kusama has always been about experimentation, user acquisition, and a funnel into the future of DotSama.
Leveraging IBC as the main source of DotSama’s access point to the broader crypto ecosystem does exactly this.

This bridge advances Polkadot's vision of enabling cross-blockchain transfers of assets, messages, and smart contracts.
Building the first KSM <> DOT bridge would allow us to leverage a proven and successful cross-chain communication protocol — and allow communication and asset transfer between parachains in both ecosystems.


### Project Details

We expect the teams to already have a solid idea about your project's expected final state. Therefore, we ask the teams to submit (where relevant):

- Mockups/designs of any UI components:

* None

- Data models / API specifications of the core functionality

* IBC Specs
  https://github.com/cosmos/ibc

* IBC Overview Paper
  https://github.com/cosmos/ibc/raw/old/papers/2020-05/build/paper.pdf

- An overview of the technology stack to be used

* Rust programming langauge
* Substrate framework
* inter-Blockchain Communication protocol (IBC)
* GRANDPA protocol
* BEEFY protocol
* parity/trie

- Documentation of core components, protocols, architecture, etc. to be deployed

  https://github.com/cosmos/ibc

- PoC/MVP or other relevant prior work or research on the topic

* IBC Repos
  https://github.com/ComposableFi/ibc-go/
  https://github.com/ComposableFi/ibc-rs/
  https://github.com/ComposableFi/composable/blob/main/code/parachain/frame/ibc/src/lib.rs

- What your project is _not_ or will _not_ provide or implement
    - This is a place for you to manage expectations and to clarify any limitations that might not be obvious

Things that shouldn’t be part of the application (see also our [FAQ](../docs/faq.md)):
- The (future) tokenomics of your project
- For non-infrastructure projects—deployment and hosting costs, maintenance or audits
- Business-oriented activities (marketing, business planning), events or outreach

### Ecosystem Fit

Help us locate your project in the Polkadot/Substrate/Kusama landscape and what problems it tries to solve by answering each of these questions:

- Where and how does your project fit into the ecosystem?

* We will provide a trustless bridge between the Kusama and Polkadot ecosystems, connecting parachains on both networks, utilizing the IBC protocol.

* A key feature of Polkadot is interoperability. However, Polkadot and its canary network Kusama have been siloed till now. This bridge will ultimately establish a unification of one vision and complement Kusama’s role of continuous innovation.

* Pallet IBC can be integrated into any parachain that wants to connect with a parachain on a different network.


- Who is your target audience (parachain/dapp/wallet/UI developers, designers, your own user base, some dapp's userbase, yourself)?

* Blockchains, parachains, and dApps that want to leverage a trustless cross-chain environment.
  We hope this bridge enables and incentivizes developers to build on Kusama as parachains and experiment on Kusama as they will now be able to connect to parachains on Polkadot to attract users, liquidity and assets in a trustless manner.

- What need(s) does your project meet?

This integration forms the first-ever bridge between Kusama and Polkadot.
A connection between both networks will vastly expand resources for developers looking to build interoperable dApps, further enhancing their use cases and opening new investor opportunities.

For example, a team launching on Kusama can attract users from the Polkadot ecosystem to utilize an application by efficiently transferring their assets to Kusama.
This gives such developers an edge when experimenting on Kusama and opens new DeFi opportunities for arbitrage, lending, cross-chain lending and more.

For example, a user who wishes to build an insurance protocol on Kusama and eventually move onto Polkadot can initially build on Kusama and have access to the Polkadot ecosystem,
including its users, protocols and applications from Kusama and experiment with their insurance markets before moving onto Polkadot if necessary.
Furthermore, users will have access to additional yield farms, lending protocols, and much more.

As DeFi pushes further into interconnected ecosystems, interoperability will be instrumental in increasing transaction speeds and reducing fees.
As both Kusama and Polkadot networks continue to develop and grow, so will opportunities for DeFi users, thanks to this cross-chain connection.

- Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?
  - If so, how is your project different?
  - If not, are there similar projects in related ecosystems?

No, Composable is currently the only project to work on bridging the Polkadot and Kusama in a trustless manner utilizing the IBC protocol.

There may be other work dedicated to building a bridge between Polkadot and Kusama that we may not be aware of, but we are sure to be the first team building this bridge using the IBC protocol.
There is plans for a similar KSM <> DOT bridge in Parity’s roadmap however, that will only go live after BEEFY V2.


## Team :busts_in_silhouette:

### Team members

- Name of team leader: Seun Langlege
- Names of team members: David Salami, Blas Rodriguez Irizar, [Strangelove team](https://www.strangelove.ventures/) , Interchain foundation, Informal Systems

### Contact

- **Contact Name:** Ahmad Wehbi
- **Contact Email:** ahmad@composable.finance
- **Website:** https://www.composable.finance/

### Legal Structure

- **Registered Address:** FortGate Offshore Investment and Legal Services LTD, 1st Floor, The Sotheby Building, Rodney Bay, Gros-Islet, P.O. Box 838, Castries, Saint Lucia
- **Registered Legal Entity:** Composable Finance LTD

### Team's experience

Please describe the team's relevant experience. If your project involves development work, we would appreciate it if you singled out a few interesting projects or contributions made by team members in the past. For research-related grants, references to past publications and projects in a related domain are helpful.

If anyone on your team has applied for a grant at the Web3 Foundation previously, please list the name of the project and legal entity here.

- Seun Lanlege: Principal Blockchain engineer at Composable Finance, previously Core Rust developer at Parity
- David Salami: Substrate Rust engineer at Composable Finance, previously Substrate engineer at Webb.tools
- Blas Rodriguez Irizar: Software engineer at Composable Finance, previously Software engineer at ConsenSys
- Emmanuel Jahdunsin Osho: Go Developer at Composable Finance, previously full stack web development with iQube labs
- Vlad Markushi: Rust Developer at Composable Finance

### Team Code Repos

* https://github.com/ComposableFi/composable
* https://github.com/informalsystems/ibc-rs
* https://github.com/ComposableFi/ibc-rs/
* https://github.com/ComposableFi/composable/blob/main/substrate-ibc/frame/ibc/src/lib.rs

Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine.

* https://github.com/seunlanlege
* https://github.com/wizdave97
* https://github.com/blasrodri

### Team LinkedIn Profiles (if available)

* https://www.linkedin.com/in/seunlanlege/
* https://www.linkedin.com/in/david-salami-188aa8170/
* https://www.linkedin.com/in/blas-rodriguez-irizar/


## Development Status :open_book:

If you've already started implementing your project or it is part of a larger repository, please provide a link and a description of the code here. In any case, please provide some documentation on the research and other work you have conducted before applying. This could be:

- links to improvement proposals or [RFPs](https://github.com/w3f/Grants-Program/tree/master/rfp-proposal) (requests for proposal),
- academic publications relevant to the problem,

https://docs.rs/ibc/latest/ibc/

- links to your research diary, blog posts, articles, forum discussions or open GitHub issues,

https://medium.com/composable-finance/trustless-bridging-438a6e5c917a
https://github.com/ComposableFi/ibc-rs/pulls?q=is%3Apr+is%3Aclosed

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

### Overview

- **Total Estimated Duration:** Duration of the whole project (e.g. 2 months)

5 months

- **Full-Time Equivalent (FTE):**  Average number of full-time employees working on the project throughout its duration (see [Wikipedia](https://en.wikipedia.org/wiki/Full-time_equivalent), e.g. 2 FTE)

5 FTE

- **Total Costs:** Requested amount in USD for the whole project (e.g. 12,000 USD). Note that the acceptance criteria and additional benefits vary depending on the [level](../README.md#level_slider-levels) of funding requested. This and the costs for each milestone need to be provided in USD; if the grant is paid out in Bitcoin, the amount will be calculated according to the exchange rate at the time of payment.

[30,000 USD]

### Milestone 1: Pallet IBC

- **Estimated duration:** 5 weeks
- **FTE:**  2
- **Costs:** $7,500

| Number | Deliverable   | Specification                                                                                                                                                                                    |
|--------|---------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 0a.    | License       | GPLv3 / MIT                                                                                                                                                                                      |
| 0b.    | Documentation | Providing both inline documentation of the components of Pallet IBC along with any code dependencies.                                                                                            |
| 0c.    | Testing Guide | Core functions will be fully covered by integration tests to ensure functionality and robustness. In the guide, we will describe how to run these tests                                          |
| 0d.    | Docker        | We will provide a Dockerfile that can be used to test all the functionality delivered with this milestone                                                                                        |
| 0e.    | Article       | We will publish an article to announce our partnership with Web 3 Foundation through this grants program. Article will be published on Medium and Twitter                                        |
| 1a.    | Development   | We will implement our own GRANDPA light client in Rust into Pallet IBC which would enable our parachain to use the grandpa light client on-chain to verify finality proofs of parachain headers. |
| 2.     | Testing       | Conduct unit testing and integration testing for the  Pallet IBC along with feature complete components.                                                                                         |


### Milestone 2: Hyperspace Relayer

- **Estimated Duration:** 5 weeks
- **FTE:**  2
- **Costs:** 7,500 USD

| Number | Deliverable   | Specification                                                                                                                                                                                                            |
|--------|---------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 0a.    | License       | GPLv3 / MIT                                                                                                                                                                                                              |
| 0b.    | Documentation | We will provide inline documentation of how the hyperspace relayer interacts with the Granda light client on one parachain and communicates with other parachains that are IBC enabled.                                  |
| 0c.    | Testing Guide | Core functions will be fully covered by integration tests to ensure functionality and robustness.                                                                                                                        |
| 0d.    | Docker        | We will provide a Dockerfile that can be used to test all the functionality delivered with this milestone                                                                                                                |
| 0e.    | Article       | We will publish a blog announcing the world’s first chain agnostic, event-driven relayer implementation in rust on Twitter, targeting developers, dapps, and blockchains                                                 |
| 1a.    | Development   | Developing an event driven relayer fully written in Rust and based on ibc-rs.                                                                                                                                            |
| 1b.    | Development   | We will be building the relayer fully stateless with no caching therefore, in a scenario where the relayer goes down, you would be able to restart it safely.                                                            |
| 1c.    | Development   | Develop Fisherman protocol to prevent eclipse attacks. With the introduction of this new challenge window our bridge will become byzantine fault-tolerant and allow any user to earn rewards for securing these bridges. |
| 2.     | Testing       | Implementation of the hyperspace core relayer and integration testing for parachain <> parachain communication using the hyperspace relayer. |

### Milestone 3: IBC-rs

- **Estimated Duration:** 6 weeks
- **FTE:**  2
- **Costs:** 9,000 USD

| Number | Deliverable   | Specification                                                                                                                         |
|--------|---------------|---------------------------------------------------------------------------------------------------------------------------------------|
| 0a.    | License       | GPLv3 / MIT                                                                                                                           |
| 0b.    | Documentation | Alongside the Informal team, we will improve documentation of how the IBC protocol implemented in Rust can be utilized by developers. |
| 0c.    | Testing Guide | We will include unit tests to cover the basic logic of the interaction on testnet.                                                    |
| 1a.    | Development   | We will implement several Ibc-rs refactors and general library updates to make ibc-rs production ready.                               |
| 1b.    | Development   | We have ongoing works updating bug fixes and changes to the library which can be seen in the links section.                           |
| 2.     | Testing       | Test ibc-rs within Pallet IBC integration testing as well as compatible functionality with the Hyperspace relayer.                    |

### Milestone 4: Upgrading to BEEFY

- **Estimated Duration:** 8 weeks
- **FTE:**  2
- **Costs:** 6,000 USD

| Number | Deliverable   | Specification                                                                                                                                                                                                                                               |
|--------|---------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 0a.    | License       | GPLv3 / MIT                                                                                                                                                                                                                                                 |
| 0b.    | Documentation | We will provide inline documentation of how a parachain can upgrade the bridge from using the GRANPA light client to a BEEFY light client                                                                                                                   |
| 0c.    | Testing Guide | We will include unit tests to cover the basic logic of the interaction on testnet.                                                                                                                                                                          |
| 0d.    | Docker        | We will provide a Dockerfile that can be used to test all the functionality delivered with this milestone                                                                                                                                                   |
| 0e.    | Article       | We will publish an article to announce the KSM <> DOT bridge will now use BEEFY to enable parachains on Kusama or Polkadot to verify which headers have been finalized and which messages sent at the heights in these headers recently finalized on Medium |
| 1.     | Development   | Once BEEFY goes live on Kusama, we will also develop our own BEEFY light client based on the implementation for the BEEFY protocol which will be compatible with ibc-rs. This will enable parachain consensus at the finality layer between Kusama parachains and Polkadot parachains.                                                                                                                    |
| 2.     | Testing       | Integration testing of a parachain communicating with another parachain using a BEEFY light client. Basic testing functionalities as cross-chain swaps and messages between two parachains using a BEEFY light client as the underlying consensus.          |

The completion of Milestone 4 is dependent on the deployment of BEEFY to Kusama.

## Future Plans

Please include here

- how you intend to use, enhance, promote and support your project in the short term, and
- the team's long-term plans and intentions in relation to it.

We have been trying to enter the substrate builders program to gain some assistance and technical help for the
development of some of the components of this bridge and future planned bridges; however, we haven’t had any luck so far.

The components used within the KSM <> DOT bridge will be shared as the underlying infrastructure for the bridges between
Kusama/Polkadot <> Cosmos and Kusama/Polkadot <> NEAR. Trustless bridging via the IBC protocol serves as the cornerstone
of bridging Kusama to IBC-enabled chains. Composable is continuing to contribute upstream, further pushing the
boundaries of cryptographic research and opening up endless possibilities for the Dotama ecosystem as we work in line
with our cross-chain/cross-layer interoperability goals.

In the future, we plan to switch to ultra-light clients for cheaper costs of updating light client state and also
utilize Verkle tries for smaller size message commitment proofs to unlock higher bandwidth messaging.
Ecosystems such as Cosmos, NEAR, Polygon and other Ethereum scaling ecosystems that could greatly benefit from IBC and
already have the required infrastructure needed to support a light client. In the future, we plan to build within such
ecosystems, ultimately working towards a future where all light client-enabled blockchains are interconnected through
IBC. Bridge to other ecosystems trustlessly via the IBC protocol, Polygon, NEAR protocol.


## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation Website / Medium / Twitter / Element / Announcement by another team / personal recommendation / etc.

Here you can also add any additional information that you think is relevant to this application but isn't part of it already, such as:

- Work you have already done.
- If there are any other teams who have already contributed (financially) to the project.
- Previous grants you may have applied for.

