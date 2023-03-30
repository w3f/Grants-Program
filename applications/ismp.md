# Interoperable State Machine Protocol

- **Team Name:** Polytope Labs
- **Payment Address:** 0x486cbad2d704bc76f8d0cdda6aa93c94d53297b9 (Ethereum DAI)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 3

## Project Overview :page_facing_up:

### Overview
The Interoperable State Machine Protocol, or ISMP for short, is the product of our [research](https://research.polytope.technology/state-(machine)-proofs) in to state proofs. We show that state-proof based interoperability is possible and more efficient as the messages no longer need to be routed through the relay chain and can be exchanged independent of it, while still maintaining the same level of trustlessness and security. This protocol allows not just for messaging but also [state reads of other parachains](https://github.com/paritytech/polkadot/issues/5087) in a trustless and secure manner.

Polkadot’s goal is to facilitate seamless interoperability between parachains and external chains. It does so by providing a fully programmable L1 environment as well as highly efficient light client proofs so other chains can validate it’s consensus cheaply.

Unfortunately, Parachain <> Parachain communication today relies on the relay chain for message routing. This is highly inefficient and relieving the relay chain of this burden will allow for better Parachain throughput and scalability.

We believe ISMP can serve as a permissionless alternative to HRMP, where parachains no longer need to negotiate channels between each other to share assets. With the relevant ISMP modules each parachain can send and receive messages and assets to and from other parachains who also have the ISMP modules, no channels needed. Seconded by Rob Habermeier via [twitter](https://twitter.com/rphmeier/status/1631448117634650114?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1631448117634650114%7Ctwgr%5Ea370351bc1a5b9b71e67a3fe8025d6dbe47efe59%7Ctwcon%5Es1_&ref_url=https%3A%2F%2Fwww.notion.so%2Fpolytopelabs%2FInteroperable-State-Machine-Protocol-b3a1766a82f640b883926c34ab737da2).

### Project Details

*Insert ISMP draft*

#### **`pallet-ismp`**
This serves as the foundational element for state-proof based messaging between parachains, enabling state reads of the relay chain directly from any given parachain, granting the ability to verify incoming messages and data from other parachains under the shared security umbrella of the relay chain.

**Custom crates**

1. `ismp-rust` - A set of primitives necessary for pallet-ismp
   1. `ISMPHost`: Represents a state machine's core functionality
   2. `ISMPRouter`: Embodies the request and response primitives for parachain interactions
   3. `ConsensusClient`: Logic for consensus proof verification
   
This module will also allow for highly sophisticated messaging protocols, allowing for message timeouts and can serve as an alternative transport layer for XCM messages.
#### **Cumulus**
In association with `pallet-ismp` are host functions added to `parachain-system` and `pvf`, enabling parachains read the relay chain state directly from runtime. Then subsequently during pov validation. the relay chain would provide the necessary state to the parachains for validation.

#### **`ismp-inherent-provider`**
This crate listens over wss jsonrpc to parachain messages and data directed to it's own chain, which it uses to include relevant state proofs into it's own runtime for consumption by the ISMP Modules.


![Architecture](https://drive.google.com/uc?id=1LwILBqEzyS3l8Nv9qicfYg3R-a2YIeZN)

### Ecosystem Fit

Currently messages are sent over the Relay Chain through opening HRMP channels but through ISMP we can increase the bandwidth of messaging between parachains without burdening the relay chain with these messages. This allows the relay chain to focus on its main task: enforcing the validity of parachain state transitions.

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

Seun Lanlege - Founder, Mad Scientist at Polytope Labs and [core contributor](https://github.com/polkadot-fellows/seeding/pull/33) to the code utilized by the ecosystem. Previously core developer at Parity Tech, Ethereum and Polkadot with over 4 years of industry experience.

David Salami - Scientist at Polytope Labs and [core contributor](https://github.com/polkadot-fellows/seeding/pull/38) to the code utilized by the ecosystem. Previously Senior Blockchain Engineer at [Composable Finance](https://github.com/ComposableFi/) and [Webb](https://github.com/webb-tools).

Damilare Akinlose - Lab Intern at Polytope Labs and [core contributor](https://github.com/polkadot-fellows/seeding/pull/41) to the code utilized by the ecosystem. Previously Blockchain Engineer at [Webb](https://github.com/webb-tools)

Femi Bankole - Blockchain engineer at [Matchx_iot](https://matchx.io/) + [MXC Foundation](https://www.mxc.org/) and Lab Intern at Polytope Labs.

Jesse Chejieh - [Core Contributor](https://github.com/polkadot-fellows/seeding/pull/25) to the code utilized by the ecosystem.

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
State-proof based parachain messaging has been talked about on the [Polkadot Forum](https://forum.polkadot.network/t/state-proof-based-parachain-parachain-messaging/2214/4).

And some Updates to cumulus, required for parachains to read the relay chain state has been [approved](https://github.com/paritytech/cumulus/pull/2268)

## Development Roadmap :nut_and_bolt:

### Overview

### Milestone 1 — `pallet-ismp`

- **Estimated duration:** 2 months
- **FTE:**  1,5
- **Costs:** 8,000 USD

In this milestone we develop the overarching component and related sub-components enabling state-proof based messaging between parachains.

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how parachain teams can utilize pallet-ismp for cross-chain messaging. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an **article**/workshop that explains what was done/achieved as part of the grant. |
| **1.** | `ismp-rust`| primitives for handling incoming messages to and from connected parachains |
| 1a. | `ISMPHost` | State machine core, |
| 1b. | `ISMPRouter` | Primitive for transmitting parachain messages across the network |
| 1c. | `ConsensusClient` | Logic for consensus proof verification |
| 1d. | Handlers | Logic for handling varying types of incoming messages to a giving state machine(i.e parachains) |
| | `CreateConsensusClient` | functionality for creating a consensus client on the receiving state machine. | 
| | `ConsensusMessage` | functionality for handling consensus messages from other state machines |
| | `RequestMessage` | functionality for handling request messages from other state machines |
| | `ResponseMessage` | functionality for handling response messages from other state machines |
| **2.** | Cumulus | Functionality to enable ISMP Modules read the relay chain state directly inside of the parachain runtime then subsequently when running the pov |
| 2a.| parachain-system | |
| 2b. | pvf validation | |
| **3.** | Ismp Inherent Provider | |


## Future Plans

Please include here

- how you intend to use, enhance, promote and support your project in the short term, and
- the team's long-term plans and intentions in relation to it.

## Additional Information :heavy_plus_sign:

Successfully delivered the Solidity Trie Verifier
