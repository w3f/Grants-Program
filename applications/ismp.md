# Interoperable State Machine Protocol

- **Team Name:** Polytope Labs
- **Payment Address:** 0x486cbad2d704bc76f8d0cdda6aa93c94d53297b9 (Ethereum DAI)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 3

## Project Overview :page_facing_up:

### Overview
The Interoperable State Machine Protocol, or ISMP for short, is the product of our [research](https://research.polytope.technology/state-(machine)-proofs) in to state proofs. We show that state-proof based interoperability is possible and more efficient as the messages no longer need to be routed through the relay chain and can be exchanged independent of it, while still maintaining the same level of trustlessness and security. This protocol allows not just for messaging but also [state reads of other parachains](https://github.com/paritytech/polkadot/issues/5087) in a trustless and secure manner.

Unfortunately, Parachain-to-Parachain communication today relies on the relay chain for message routing. This is highly inefficient and relieving the relay chain of this burden will allow for better Parachain throughput and scalability. We believe ISMP is the end-game for parachain interoperability, with the relevant ISMP modules, each parachain can send and receive messages and assets to and from other parachains which also have the ISMP modules. Seconded by Rob Habermeier on [twitter](https://twitter.com/rphmeier/status/1631448117634650114).

## Project Details

ISMP is a simple protocol for state machines to send requests that can be handled by a counterparty chain. Akin to the HTTP paradigm in web2, parachains can issue GET-like requests for storage reads as well as POST-like requests for sending data.

Requests are stored in a merkle mountain range tree on the sending chain as this data structure provides some benefits, binary merkle trees have more compact proof sizes than patricia merkle tries, and in particular, merkle mountain range trees have much smaller proof sizes for recently inserted items in the tree. We believe this choice will enable higher bandwidth parachain <> parachain messaging with smaller proof sizes.

ISMP will also support request timeouts, allowing for a more safer parachain <> parachain messaging.

![Architecture](https://drive.google.com/uc?id=1t8Qow88En3-ZCW7P0LYjRnbSqzFS30be)

```rust
use sp_storage::{StorageKey, StorageValue};

#[runtime_interface]
trait RelayChainStorageProvider {
  /// Read the relay chain storage at a specified key
  fn read_storage(key: StorageKey) -> StorageValue;
}
```

### **`pallet-ismp`**
This serves as the foundational element for state-proof based messaging between parachains, enabling state reads of the relay chain directly from any given parachain, granting the ability to verify incoming messages and data from other parachains under the shared security umbrella of the relay chain.

**Custom crates**

-  `ismp-rust` - A set of primitives necessary for pallet-ismp
   -  `ISMPHost`: Represents a state machine's core functionality
   -  `ISMPRouter`: Embodies the request and response primitives for parachain interactions
   -  `ConsensusClient`: Logic for consensus proof verification
   
This module will also allow for highly sophisticated messaging protocols, allowing for message timeouts and can serve as an alternative transport layer for XCM messages.

#### **Cumulus**
In addition to `pallet-ismp` will be a new host function `RelayChainStorageProvider` added to `parachain-system` and `pvf`, leveraging the Relay chain as a consensus oracle for verifying incoming requests and responses proofs from other parachains with their associated headers in the Relay chain storage.

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
| 1a. | `ISMPHost` | State machine core primitive |
| 1b. | `ISMPRouter` | Primitive for transmitting parachain messages across the network |
| | dispatch | Logic for sending a request from a module to the ISMP router|
| | response | Logic for providing a response to a previously received request|
| 1c. | `ConsensusClient` | Logic for consensus proof verification |
| | membership verification | Logic Verifying membership of proof of a commitment |
| | non membership verification | Logic for verifying non-membership of proof of a commitment |
| 1d. | Handlers | Logic for handling varying types of incoming messages to a giving state machine(i.e parachains) |
| | `CreateConsensusClient` | Functionality for creating a consensus client on the receiving state machine. | 
| | `ConsensusMessage` | Functionality for handling consensus messages from other state machines |
| | `RequestMessage` | Functionality for handling request messages from other state machines |
| | `ResponseMessage` | Functionality for handling response messages from other state machines |
| **2.** | Cumulus | Functionality to enable ISMP Modules read the relay chain state directly inside of the parachain runtime then subsequently when running the pov |
| 2a.| `parachain-system` | Including `RelayChainStorageProvider` |
| 2b. | `pvf` validation | Including `RelayChainStorageProvider` |
| **3.** | Pallet | Building the substrate pallet(core, rpc, runtime-api) with above stated dependencies. |
| **3a.** | MMR | Merkle mountain range storage implementation |
| **3b.** | Host | `ISMPHost` implementation fot the pallet |
| **3c.** | Router | `ISMPRouter` implementation for the pallet |

## Additional Information :heavy_plus_sign:

Successfully delivered the Solidity Trie Verifier
