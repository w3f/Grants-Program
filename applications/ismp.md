# Interoperable State Machine Protocol

> This document will be part of the terms and conditions of your agreement and therefore needs to contain all the required information about the project. Don't remove any of the mandatory parts presented in bold letters or as headlines (except for the title)! Lines starting with a `>` (such as this one) should be removed. Please use markdown instead of HTML (e.g. `![](image.png)` instead of `<img>`).
>
> See the [Grants Program Process](https://github.com/w3f/Grants-Program/#pencil-process) on how to submit a proposal.
- **Team Name:** Polytope Labs
- **Payment Address:** 0x486cbad2d704bc76f8d0cdda6aa93c94d53297b9 (Ethereum DAI)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 3

> :exclamation: *The combination of your GitHub account submitting the application and the payment address above will be your unique identifier during the program. Please keep them safe.*
## Project Overview :page_facing_up:

If this application is in response to an RFP, please indicate this on the first line of this section.

If this is an application for a follow-up grant (the continuation of an earlier, successful W3F grant), please provide name and/or pull request of said grant on the first line of this section.

### Overview
The Interoperable State Machine Protocol, or ISMP for short, is the product of our [research](https://research.polytope.technology/state-(machine)-proofs) in to state proofs. We show that state-proof based interoperability is possible and more efficient as the messages no longer need to be routed through the relay chain and can be exchanged independent of it, while still maintaining the same level of trustlessness and security. This protocol allows not just for messaging but also [state reads of other parachains](https://github.com/paritytech/polkadot/issues/5087) in a trustless and secure manner.

Polkadot’s goal is to facilitate seamless interoperability between parachains and external chains. It does so by providing a fully programmable L1 environment as well as highly efficient light client proofs so other chains can validate it’s consensus cheaply.

Unfortunately, Parachain <> Parachain communication today relies on the relay chain for message routing. This is highly inefficient and relieving the relay chain of this burden will allow for better Parachain throughput and scalability.

We believe ISMP can serve as a permissionless alternative to HRMP, where parachains no longer need to negotiate channels between each other to share assets. With the relevant ISMP modules each parachain can send and receive messages and assets to and from other parachains who also have the ISMP modules, no channels needed. Seconded by Rob Habermeier via [twitter](https://twitter.com/rphmeier/status/1631448117634650114?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1631448117634650114%7Ctwgr%5Ea370351bc1a5b9b71e67a3fe8025d6dbe47efe59%7Ctwcon%5Es1_&ref_url=https%3A%2F%2Fwww.notion.so%2Fpolytopelabs%2FInteroperable-State-Machine-Protocol-b3a1766a82f640b883926c34ab737da2).

### Project Details

*Insert ISMP draft*

We expect the teams to already have a solid idea about your project's expected final state. Therefore, we ask the teams to submit (where relevant):

- Mockups/designs of any UI components
Can we get this? ideally this would be the polkadot.js extrinsic dropdown, showing the pallet-ismp option.  
- Data models / API specifications of the core functionality
- An overview of the technology stack to be used
Diagram
- Documentation of core components, protocols, architecture, etc. to be deployed

The core component: **Wouldn't it be better to have a diagram here instead**

#### `pallet-ismp`
This serves as the foundational element for state-proof based messaging between parachains, enabling state reads of the relay chain directly from any given parachain, granting the ability to verify incoming messages and data from other parachains under the shared security umbrella of the relay chain.

**Custom crates**
Modularizing the internal components...
1. `ismp-rust` - Primitives
   1. `ISMPHost`:
   2. `ISMPRouter`:
   3. `ConsensusClient`:
   ...

2. `ismp-inherent-provider` -
3. Cumulus Host Functions -

This module will also allow for highly sophisticated messaging protocols, allowing for message timeouts and can serve as an alternative transport layer for XCM messages.


Architecture
Diagram

- What your project is _not_ or will _not_ provide or implement
  - This is a place for you to manage expectations and to clarify any limitations that might not be obvious

### Ecosystem Fit

Help us locate your project in the Polkadot/Substrate/Kusama landscape and what problems it tries to solve by answering each of these questions:

- Where and how does your project fit into the ecosystem?
- Who is your target audience (parachain/dapp/wallet/UI developers, designers, your own user base, some dapp's userbase, yourself)?
- What need(s) does your project meet?
- Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem? **Name the current cross consensus protocols...including bridges**
  - If so, how is your project different?
  - If not, are there similar projects in related ecosystems?

## Team :busts_in_silhouette:

### Team members

- Leads: Seun Lanlege, David Salami
- Members: Damilare Akinlose, Femi Bankole, Jesse Chejieh

### Contact

- **Contact Name:** Jesse Chejieh
- **Contact Email:** jesse@polytope.technology
- **Website:** [research.polytope.technology](https://research.polytope.technology/)

### Legal Structure
- **Registered Address:** Harneys Fiduciary (Cayman) Limited, 4th Floor, Harbour Place, 103 South Church Street, Cayman Islands
- **Registered Legal Entity:** Polytope Labs Ltd.

### Team's experience

Polytope Labs is a collective of core blockchain engineers, researchers & scientists from varying blockchain protocol backgrounds passionate about the proliferation of networks over platforms and enabling this future through blockchain research & education, tooling and core infrastructure development.

Seun Lanlege - [Polkadot Fellowship Member](https://github.com/polkadot-fellows/seeding/pull/33)

David Salami - [Polkadot Fellowship Member](https://github.com/polkadot-fellows/seeding/pull/38)

Damilare Akinlose - [Polkadot Fellowship Member](https://github.com/polkadot-fellows/seeding/pull/41)

Femi Bankole - 

Jesse Chejieh - [Polkadot Fellowship Member](https://github.com/polkadot-fellows/seeding/pull/25)

### Research Publications

 - [Consensus Proofs](https://research.polytope.technology/consensus-proofs)
 - [State (Machine) Proofs](https://research.polytope.technology/state-(machine)-proofs)
 - [Merkle Mountain Range Proofs](https://research.polytope.technology/merkle-mountain-range-multi-proofs)
 - [Merkle Multi Proofs](https://research.polytope.technology/merkle-multi-proofs)

### Team Code Repos
- [sync-committee-rs](https://github.com/polytope-labs/sync-committee-rs)
- [Merkle Patricia Trie](https://github.com/polytope-labs/patricia-merkle-trie)
- [Solidity Merkle Trees](https://github.com/polytope-labs/solidity-merkle-trees)
- [Simnode](https://github.com/polytope-labs/sc-simnode)


### Team GitHub Profiles

- [Seun Lanlege](https://github.com/seunlanlege/)
- [David Salami](https://github.com/Wizdave97/)
- [Damilare Akinlose](https://github.com/dharjeezy/)
- [Femi Bankole](https://github.com/iTranscend/)
- [Jesse Chejieh](https://github.com/Doordashcon/)

### Team LinkedIn Profiles

- [Seun Lanlege](https://www.linkedin.com/in/seunlanlege/)
- [David Salami](https://www.linkedin.com/in/david-salami-188aa8170)
- [Damilare Akinlose](https://www.linkedin.com/in/damilare-akinlose-6289b5b8)
- [Femi Bankole](https://www.linkedin.com/in/femibankole)
- [Jesse Chejieh](https://www.linkedin.com/in/jesse-chejieh-47020322a)


## Development Status :open_book:
- links to improvement proposals or [RFPs](https://github.com/w3f/Grants-Program/tree/master/docs/RFPs) (requests for proposal),
- academic publications relevant to the problem,
- links to your research diary, blog posts, articles, forum discussions or open GitHub issues,

As part of the core components, the functionality required for parachains to read the relay chain state has been added to [cumulus](https://github.com/paritytech/cumulus/pull/2268)

The topic has been talked about on the [Polkadot Forum](https://forum.polkadot.network/t/state-proof-based-parachain-parachain-messaging/2214/4).
- references to conversations you might have had related to this project with anyone from the Web3 Foundation,**Was this brought up?**

## Development Roadmap :nut_and_bolt:

This section should break the development roadmap down into milestones and deliverables. To assist you in defining it, we have created a document with examples for some grant categories [here](../docs/Support%20Docs/grant_guidelines_per_category.md). Since these will be part of the agreement, it helps to describe _the functionality we should expect in as much detail as possible_, plus how we can verify and test that functionality. Whenever milestones are delivered, we refer to this document to ensure that everything has been delivered as expected.

Below we provide an **example roadmap**. In the descriptions, it should be clear how your project is related to Substrate, Kusama or Polkadot. We _recommend_ that teams structure their roadmap as 1 milestone ≈ 1 month.

> :exclamation: If any of your deliverables is based on somebody else's work, make sure you work and publish _under the terms of the license_ of the respective project and that you **highlight this fact in your milestone documentation** and in the source code if applicable! **Teams that submit others' work without attributing it will be immediately terminated.**

### Overview

- **Total Estimated Duration:** Duration of the whole project (e.g. 2 months)
- **Full-Time Equivalent (FTE):**  Average number of full-time employees working on the project throughout its duration (see [Wikipedia](https://en.wikipedia.org/wiki/Full-time_equivalent), e.g. 2 FTE)
- **Total Costs:** Requested amount in USD for the whole project (e.g. 12,000 USD). Note that the acceptance criteria and additional benefits vary depending on the [level](../README.md#level_slider-levels) of funding requested. This and the costs for each milestone need to be provided in USD; if the grant is paid out in Bitcoin, the amount will be calculated according to the exchange rate at the time of payment.

### Milestone 1 — `pallet-ismp`

- **Estimated duration:** 2 months
- **FTE:**  1,5
- **Costs:** 8,000 USD

In this milestone we build primitives for handling incoming messages from connected chains.

This serves as the foundational element for state-proof based messaging between parachains, enabling state reads of the relay chain directly from any given parachain, granting the ability to verify incoming messages and data from other parachains under the shared security umbrella of the relay chain.

In this milestone we develop the overarching component enabling state-proof based messaging between parachains.

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an **article**/workshop that explains [...] (what was done/achieved as part of the grant). (Content, language and medium should reflect your target audience described above.) |
| **1.** | `ismp-rust`| primitives for handling incoming messages from connected chains |
| 1a. | `ISMPHost` |  |
| 1b. | `ISMPRouter` |  |
| 1c. | `ConsensusClient` |  |
| 1d. | Handlers |  |
| **2.** | Cumulus | Functionality to enable ISMP Modules read the relay chain state directly inside of the parachain runtime then subsequently when running the pov |
| 2a.| parachain-system | |
| 2b. | pvf validation | |
| **3.** | Ismp Inherent Provider |

| 6. | Smart contracts: ... | We will deliver a set of ink! smart contracts that will...


## Future Plans

Please include here

- how you intend to use, enhance, promote and support your project in the short term, and
- the team's long-term plans and intentions in relation to it.

## Referral Program (optional) :moneybag: 

You can find more information about the program [here](../README.md#moneybag-referral-program).
- **Referrer:** Name of the Polkadot Ambassador or GitHub account of the Web3 Foundation grantee
- **Payment Address:** BTC, Ethereum (USDC/DAI) or Polkadot/Kusama (USDT) payment address. Please also specify the currency. (e.g. 0x8920... (DAI))

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation Website / Medium / Twitter / Element / Announcement by another team / personal recommendation / etc.

Here you can also add any additional information that you think is relevant to this application but isn't part of it already, such as:

- Work you have already done.
- If there are any other teams who have already contributed (financially) to the project.
- Previous grants you may have applied for.
