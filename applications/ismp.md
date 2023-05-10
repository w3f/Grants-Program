# Interoperable State Machine Protocol

- **Team Name:** Polytope Labs
- **Payment Address:** 0x486cbad2d704bc76f8d0cdda6aa93c94d53297b9 (Ethereum DAI)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 3

## Project Overview :page_facing_up:

### Overview
The Interoperable State Machine Protocol, or ISMP for short, is the product of our [research](https://research.polytope.technology/state-(machine)-proofs) into state proofs. We show that state-proof based interoperability is possible and more efficient as the messages no longer need to be routed through the relay chain and can be exchanged independent of it, while still maintaining the same level of trustlessness and security. This protocol allows not just for messaging but also [state reads of other parachains](https://github.com/paritytech/polkadot/issues/5087) in a trustless and secure manner.

Unfortunately, Parachain-to-Parachain communication today relies on the relay chain for message routing. This is highly inefficient and relieving the relay chain of this burden will allow for better Parachain throughput and scalability. We believe ISMP is the end-game for parachain interoperability, with the relevant ISMP modules, each parachain can send and receive messages and assets to and from other parachains which also have the ISMP modules. Seconded by Rob Habermeier on [twitter](https://twitter.com/rphmeier/status/1631448117634650114).

## Project Details

ISMP is a simple protocol for state machines to send requests that can be handled by a counterparty chain. Akin to the HTTP paradigm in web2, parachains can issue GET-like requests for storage reads as well as POST-like requests for sending data.

Requests are stored in a [merkle mountain range tree](https://research.polytope.technology/merkle-mountain-range-multi-proofs) on the sending chain as this data structure provides some benefits, binary merkle trees have more compact proof sizes than patricia merkle tries, and in particular, merkle mountain range trees have much smaller proof sizes for recently inserted items in the tree. We believe this choice will enable higher bandwidth parachain <> parachain messaging with smaller proof sizes.

ISMP will also support request timeouts, allowing for more safer parachain <> parachain messaging.

![Architecture](https://drive.google.com/uc?id=1t8Qow88En3-ZCW7P0LYjRnbSqzFS30be)

### Use cases

For instance a user wanting to transfer their funds from parachain A to parachain B will initiate a post request on parachain A. This post request is stored in an mmr maintained in the state trie on parachain A. Parachain A's headers also contain the root for this mmr structure.

The user('s wallet) after observing that parachain A's headers have been finalized and made it's way into the relay chain state trie, can present a merkle proof of parachain A's header in the relay chain state trie which parachain B can verify using it's access to the latest relay chain state root. Next they present the mmr proof for the request which they had previously initiated on parachain A. After verifying this mmr proof, parachain B can "execute" the request. In this case minting the equivalent asset that was burnt on parachain A.

There are of course other use cases that can be built on POST requests, but this is the simplest case.

For GET requests, a different mechanism is at play. Perhaps a user wants to settle a bet they had made in a prediction market in parachain A. The data that is needed to settle this bet is on parachain B where we regard parachain B as the oracle parachain. The user initiates a GET request, with it's content the keys of the storage items they need to settle their bet. After initiating the request, the request is stored in the parachain A's mmr trie, but it is never relayed anywhere. Instead, the user('s wallet) then reads the state trie of parachain B and provides the state proof for the appropriate data that was requested.


### **`pallet-ismp`**
This serves as the foundational element for state-proof based messaging between parachains, enabling state reads of the relay chain directly from any given parachain, granting the ability to verify incoming messages and data from other parachains under the shared security umbrella of the relay chain.

**Custom crates**

-  `ismp-rs` - A set of primitives necessary for pallet-ismp
   -  `ISMPHost`: Represents a state machine's core functionality
   -  `ISMPRouter`: Embodies the request and response routing logic for parachain interactions
   -  `ConsensusClient`: Logic for consensus proof verification
   
This module can also serve as an alternative transport layer for XCM programs.

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

Polytope Labs is a collective of core blockchain engineers, researchers & scientists from varying blockchain protocol backgrounds passionate about the proliferation of networks over platforms and enabling this future through blockchain research, education, tooling and core infrastructure development.

1. Seun Lanlege - Founder, Mad Scientist at Polytope Labs and [Polkadot Fellowship Member](https://github.com/polkadot-fellows/seeding/pull/33). Previously core developer at Parity Tech, Worked on Ethereum and Polkadot with over 4 years of industry experience.

2. David Salami - Scientist at Polytope Labs and [Polkadot Fellowship Member](https://github.com/polkadot-fellows/seeding/pull/38). Previously Senior Blockchain Engineer at [Composable Finance](https://github.com/ComposableFi/) and [Webb](https://github.com/webb-tools).

3. Damilare Akinlose - Lab Intern at Polytope Labs and [Polkadot Fellowship Member](https://github.com/polkadot-fellows/seeding/pull/41). Previously Blockchain Engineer at [Webb](https://github.com/webb-tools)

4. Femi Bankole - Blockchain engineer at [Matchx_iot](https://matchx.io/) + [MXC Foundation](https://www.mxc.org/) and Lab Intern at Polytope Labs.

5. Jesse Chejieh - [Polkadot Fellowship Member](https://github.com/polkadot-fellows/seeding/pull/25).

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
State-proof based parachain messaging has been discussed on the [Polkadot Forum](https://forum.polkadot.network/t/state-proof-based-parachain-parachain-messaging/2214/4).

And some Updates to cumulus, required for parachains to read the relay chain state has been [approved](https://github.com/paritytech/cumulus/pull/2268)

## Development Roadmap :nut_and_bolt:

### Overview
- **Total Estimated Duration:** 4.5 Months
- **Full-Time Equivalent (FTE):** 3
- **Total Costs:** 75,000 USD

### Milestone 1 — `ismp-rs`

- **Estimated duration:** 1.5 months
- **FTE:**  3
- **Costs:** 30,000 USD

In this milestone we develop the core primitives needed for pallet-ismp

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a README stating objectives of this ISMP primitive on the project repository. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test functionalities delivered with this milestone. |
| 0e. | Article | We will publish an article that explains what was achieved as part of the grant. |
| 0f. | ISMP Specification | We will put together a technical specification detailing the ISMP protocol. |
| **1.** | `ismp-rs`| Rust implementation of ISMP primitives for handling incoming messages to and from connected parachains. |
| 1a. | `ISMPHost` | State machine host functionality required to support ISMP. |
| 1b. | `ISMPRouter` | Sub-component for routing incoming requests & response to the destination ISMP modules. |
| 1c. | `ISMPModule` | Interface modules/pallets must conform to in order to receive incoming ISMP requests/responses. |
| 1d. | `ConsensusClient` | Logic for consensus proof verification, In the case of parachains, we will leverage the relay chain as a `ConsensusClient` through the new host functions in cumulus. |
| | Request/Response proof verification | Sub-component for verifying membership of proofs of a request/response in a merkle mountain range tree. |
| | Request Timeout verification | Verifying non-membership of a request in the state trie of a parachain. |
| 1e. | Handlers | Logic for handling varying types of incoming messages. |
| | `CreateConsensusClient` | Functionality for creating a consensus client on the receiving state machine. | 
| | `ConsensusMessage` | Functionality for handling consensus update messages from other state machines. |
| | `RequestMessage` | Functionality for handling request messages from other state machines. |
| | `ResponseMessage` | Functionality for handling response messages from other state machines. |
| | `TimeoutMessage` | Functionality for handling request timeout messages from other state machines. |

### Milestone 2 — `pallet-ismp`

- **Estimated duration:** 3 months
- **FTE:**  3
- **Costs:** 45,000 USD

In this milestone we develop pallet-ismp


| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a README stating objectives of this ISMP primitive on the project repository. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test functionalities delivered with this milestone. |
| **1.** | pallet-ismp | Building the substrate pallet with above stated dependencies. |
| **1b.** | Host | `ISMPHost` implementation for the pallet. |
| **1c.** | Router | `ISMPRouter` implementation for the pallet. |
| **1c.** | `ParachainConsensusClient` | `ConsensusClient` implementation for the pallet-ismp, utilizing the relay chain as consensus client for parachains. |
| **1d.** | RPC | This sub-crate will allow for users to query relevant ISMP data over RPC. |
| **1e.** | Runtime-APIs | This sub-crate will expose relevant ISMP data from the runtime through runtime APIS. |
| **1f.** | Benchmarks | We will benchmark pallet-ismp, providing a benchmark crate for parachain teams to run so as to generate the proper weights for their runtime. |


## Future Plans
We recognize the significant benefits that pallet-ismp offers to the ecosystem, and therefore, after the grant completion we plan to continue providing maintenance with support from the Polkadot/Kusama treasury.

## Additional Information :heavy_plus_sign:

[Solidity Trie Verifier](https://github.com/w3f/Grant-Milestone-Delivery/pull/774)
