# Rings Network



- **Team Name:** Rings Network
- **Payment Address:** 5CFzWWncyemapBrVbwHCefK3qj7xabYdFxx6FySCFPjz4wJh (USDT)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2


## Project Overview :page_facing_up:


### Overview

Please provide the following:

- Rings Network is a communication layer for web3, which is based on WebAssembly (wasm) and can run inside a web browser.
- As a fully decentralized peer-to-peer (p2p) network, Rings Network enables browsers to establish direct connections with each other. This capability offers amazing benefits to the current web3 ecosystem, including real-time applications, interaction-based applications, and decentralized web services.
- Rings Network is designed for heterogeneous cross-chains and supports arbitrary signature algorithms as sign-in methods, such as secp256k1, secp256r1, ed25519, etc. It also makes cross-chain instant messaging super easy, whether it's from a Substrate-based chain to an Ethereum-based chain or from one Substrate-based chain to another.
- I believe that web3 aims to create a truly decentralized web. However, at present, all implementations are centralized, requiring front-end development and centralized oracle servers. This issue is related to the "waste of internet," which stems from the centralized DNS-IP protocol. Therefore, I have decided to create a new type of network that does not rely on centralized DNS and IP systems. All nodes, services, and data will be based on a distributed DHT, and all nodes can run inside web browsers.

### Project Details

#### Architecture & Tech Stack

Rings Network is implemented in Rust and is built upon WebRTC, Chord DHT, and WebAssembly. Its architecture can be streamlined into five distinct layers.

##### Runtime Layer
The design goal of Rings Network is to enable nodes to run in any environment, especially browser. To achieve this, we have adopted a cross platform compile approach to build the code.

For non-browser environments, we use pure Rust implementation that is independent of any system APIs, making our native implementation system agnostic.

For browser environments, we compile the pure Rust implementation to WebAssembly (Wasm) and use web-sys, js-sys, and wasm-bindgen to glue it together, making our nodes fully functional in the browser.

##### Transport Layer

The Transport implementation in Rings Network is based on WebRTC, making Rings Network browser-native.

The browser-native approach means that users do not need to install any additional software or plugins to participate in the network. Secondly, the use of WebRTC and WebAssembly enables the network to have a low latency and high throughput, making it suitable for real-time communication and data transfer.

Assuming Node A and Node B want to create a WebRTC connection, they would need to exchange a minimum of three messages with each other:

* ICE Scheme:

* Peer A: { create offer, set it as local description } -> Send Offer to Peer B

* Peer B: { set receiveed offer as remote description create answer set it as local description Send Answer to Peer A }

* Peer A: { Set receiveed answer as remote description }

##### Network Layer

The Rings Network is a structured peer-to-peer network that incorporates a distributed hash table (DHT) to facilitate efficient and scalable lookups. The Chord algorithm is utilized to implement the lookup function within the DHT, thereby enabling effective routing of messages and storage of key-value pairs in a peer-to-peer setting. The use of a DHT, incorporating the Chord algorithm, guarantees high availability in the Rings Network, which is critical for handling the substantial number of nodes and requests typically present in large-scale peer-to-peer networks.

##### Protocol Layer

In the protocol layer, the central design concept revolves around the utilization of a Decentralized Identifier (DID), which constitutes a finite ring in abstract algebra.

The DID is a identifier that enables the construction of a mathematical structure that encompasses the characteristics of both a group and a field. It is comprised of a set of elements with two binary operations, addition and multiplication, which satisfy a set of axioms such as associativity, commutativity, and distributivity.

The ring is deemed finite due to its having a finite number of elements.

##### Application Layer

The nucleus of Rings Network is similar to the Actor Model, and it requires that each message type possess a Handler Trait. This allows for the separation of processing system messages, network messages, internal messages, and application-layer messages.

#### White Paper & Documentations

The [Rings Paper](https://raw.githubusercontent.com/RingsNetwork/whitepaper/master/rings.pdf) provides an overview of the Rings Network architecture, explaining the design principles, the operating mechanisms, and the core features that distinguish it from other distributed systems.

The [DRank Paper](https://raw.githubusercontent.com/RingsNetwork/whitepaper/master/pos.pdf) presents a comprehensive reputation system for monitoring and evaluating the performance of nodes in a structured peer-to-peer (P2P) network. The system aims to foster responsible behavior and deter cheating among network participants. The reputation system is comprised of two main components: local rankings and global rankings. Local rankings reflect the behavior of each node within its own network, while global rankings provide a comprehensive view of the behavior of all nodes in the entire network. To ensure the system's reliability, it utilizes reward proofs and punishment proofs. Nodes exhibiting good behavior are rewarded, while nodes engaging in undesirable actions are penalized, thus creating an environment where nodes are motivated to act ethically and cheating is discouraged.

The [Rings Document](https://rings.gitbook.io/) presents a basic manual of Rings Network, including how developers should interact with Rings Network and an explanation of how Rings Network works.

The [Rings Node API Doc](https://docs.rs/rings-node/latest/rings_node/) presents APIs and details of the Rings Network implementation, which focuses on the application layer, including message handlers and customized callbacks.

The [Rings Core API Doc](https://docs.rs/rings-core/latest/rings_core/) presents APIs and Details of Rings Internal implementation, which is related on Rings DHT, WebRTC Transport, Rings Swarm, and Rings Message Handler.


#### Implementation & PoC

* [Rings Node](https://github.com/RingsNetwork/rings-node) is the mainly repo or rings network, it is currently in test stage, it included implementation of WebRTC Transport, Chord DHT, and Message Handlers.

* [Rings web extension](https://github.com/RingsNetwork/rings_ext_v2) is still under development, it provide a message handler at `window.rings`, and it can help users to keep rings node online.

* [Rings Handshake PoC](https://github.com/RingsNetwork/rings-wasm-p2p) is a handshake demo of rings network, it shows how handshake works in the network on browser.

* [Rings Portal PoC](https://github.com/RingsNetwork/rings_portal) is a dweb / tcp proxy demo of rings network, it shows how tcp proxy can be implemented based on Rings Network

* [Rings dWeb PoC](https://github.com/RingsNetwork/rings-dweb) is a browser based demo of dweb in rings network, which allows unrestricted access to network services and content. The process of accessing content is end-to-end encrypted. In this demo, we provide a simple decentralized access method for Uniswap and Tornado Cash.


### Ecosystem Fit

Rings Network is the path from Web2 to Web3 because it is the only solution that can fully decentralize web access without the need for any servers. Currently, we haven't seen any similar implementations because most other approaches require relays or nodes and cannot achieve complete decentralization like Rings Network.

We have compared our implementation with others such as GNUnet, libp2p, Tor Project, and Nym Network, and found that they either do not support browser environments or have very limited support for them.

The key differences between us and these projects are as follows:

* Web Assembly (Wasm) Support: We support compiling the entire node into Wasm, allowing it to run directly in web browsers. This enables a seamless browser-based experience.

* WebRTC as Transport Layer: We utilize WebRTC as the transport layer, which helps users traverse various complex network environments. WebRTC is well-suited for real-time communication and peer-to-peer connections.

* Chord DHT Implementation: Instead of using the Kademlia DHT, which is common in projects like IPFS, libp2p, and Ethereum, we employ the Chord DHT. This choice is driven by our need to leverage the Finite Rings feature of DIDs (Decentralized Identifiers) to implement more advanced cryptographic functions.

However, Rings Network is not a blockchain; we don't have a consensus layer or ledger. Therefore, our users will be community developers who are truly focused on decentralized value. They use Rings Network for decentralized interactions and record the results of these interactions on platforms like Polkadot. Here are a few use cases to illustrate this:

#### Use cases

* Use case A: Substract-based chains need to perform atomic token swaps with Bitcoin, which involves signing multiple messages and exchanging signatures. During this process, using a centralized platform for signature exchange may pose security risks. Rings Network ensures smooth and secure interactions.

* Use case B: Some applications based on zero-knowledge proofs, such as games that require multiple rounds of interaction, may not be suitable for Fiat-Shamir transformation. Therefore, they are typically implemented as Interactive Zero-Knowledge Proofs (IZK) rather than Non-Interactive Zero-Knowledge Proofs (NIZK). In such cases, Rings Network can facilitate quick implementation of sigma protocols for peer-to-peer data exchange.

* Use case C: Although decentralized storage solutions like IPFS are relatively mature, users often need to access the data through gateways or deploy their own nodes. Rings Network's TCP Proxy can decentralize these services, allowing browser nodes to access them in a decentralized manner.

* Use case D: In the realm of the decentralized web (dweb), projects like Tor Project, I2P Project, and gnunet require users to deploy nodes or use relays. Rings Network can run full nodes in web browsers, eliminating the need for users to set up complex node configurations. It is a revolutionary step in the next-generation internet architecture, as it eliminates the need for intermediaries or servers.

There are many other use cases, such as de-main and de-chat, where Rings Network's charm lies in its ability to fully decentralize web services and access. It does not require additional node deployment because the browser itself becomes a node. It is the path from web2 to web3.

## Team :busts_in_silhouette:

### Team members

- Ryan Kung
- Croath Liu

### Contact

- **Contact Name:** Ryan Kung
- **Contact Email:** ryan (at) ringsnetwork.io
- **Website:** https://github.com/RyanKung

### Legal Structure

- **Registered Address:** Not available
- **Registered Legal Entity:** Not available

### Team's experience

Ryan has over ten years of development experience in the blockchain field. He has held key positions at multiple top blockchain companies. He has contributed to various open-source projects, including Parity Ethereum and TensorFlow. Ryan's Klefki is also an useful cryptographic exploration library. It implements zkpy based on Groth16, allowing the generation of zero-knowledge proofs for Python code.

Croath has been actively involved in various blockchain teams for over 5 years, contributing to projects in areas such as Layer 1, DeFi, and NFTs. He is a contributor to the go-ethereum project.

### Team Code Repos

- https://github.com/RingsNetwork/rings-node


- https://github.com/ryankung
- https://github.com/croath

### Team LinkedIn Profiles (if available)


## Development Status :open_book:

The [Rings Paper](https://raw.githubusercontent.com/RingsNetwork/whitepaper/master/rings.pdf) provides an overview of the Rings Network architecture, explaining the design principles, the operating mechanisms, and the core features that distinguish it from other distributed systems.

The [DRank Paper](https://raw.githubusercontent.com/RingsNetwork/whitepaper/master/pos.pdf) presents a comprehensive reputation system for monitoring and evaluating the performance of nodes in a structured peer-to-peer (P2P) network. The system aims to foster responsible behavior and deter cheating among network participants. The reputation system is comprised of two main components: local rankings and global rankings. Local rankings reflect the behavior of each node within its own network, while global rankings provide a comprehensive view of the behavior of all nodes in the entire network. To ensure the system's reliability, it utilizes reward proofs and punishment proofs. Nodes exhibiting good behavior are rewarded, while nodes engaging in undesirable actions are penalized, thus creating an environment where nodes are motivated to act ethically and cheating is discouraged.

[Rings Node](https://github.com/RingsNetwork/rings-node) is the mainly repo or rings network, it is currently in test stage, it included implementation of WebRTC Transport, Chord DHT, and Message Handlers.

[Rings web extension](https://github.com/RingsNetwork/rings_ext_v2) is still under development, it provide a message handler at `window.rings`, and it can help users to keep rings node online.


## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 12 months
- **Full-Time Equivalent (FTE):**  2
- **Total Costs:** 30,000

### Milestone 1 — Pre launch

- **Estimated duration:** 2 month
- **FTE:**  2
- **Costs:** 15,000 USD

> :exclamation: **The default deliverables 0a-0d below are mandatory for all milestones**, and deliverable 0e at least for the last one.

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | GPLv3  |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an **article**/workshop that explains The status of rings development, and what was done/achieved as part of the grant.  |
| 1. | Web extension | We will create a web extension with a user-friendly user interface, visualized status, and aim to publish it on the Chrome Web Store.) |
| 2. | Rings CLI | Continuously improve the availability and user-friendliness of nodes, including providing better TCPProxy tools, dweb tools.|
| 3. | Substrate integration | Substrate integration means that we will support users to sign in using any Substrate-based blockchain and allow them to communicate with other public blockchains.|



### Milestone 2 — DRanking Protocol

- **Estimated Duration:** 2 month
- **FTE:**  2
- **Costs:** 15,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | GPLv3 e |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an **article**/workshop that explains The status of rings development, and what was done/achieved as part of the grant.  |
| 1. | DRanking | We will implement the DRanking Protocol, which will help users evaluate and capture value from nodes providing services in their vicinity. |
| 2. | Rings FFI Wrapper | Build wrappers for common programming languages such as Python, JavaScript, and GoLang based on the Rings FFI (Foreign Function Interface) will make Rings more accessible and usable in these languages. |


## Future Plans

Please include here

- how you intend to use, enhance, promote and support your project in the short term, and
- the team's long-term plans and intentions in relation to it.

In the upcoming development process, we have three plans:

1. Continuously improve the availability and user-friendliness of
nodes, including providing better TCPProxy tools, dweb tools. They should
be well-documented.

2. Optimize the browser extension; the current interface is not very
appealing, and its functionality is not very intuitive. We also plan to
provide more demos based on the extension.

3. Implement the DRanking protocol. The DRanking protocol is a new
sampling protocol designed by us. It's inspired by the ranking protocol of
eDonkey but work in decentralized way. If you're interested, you can take a
look at our draft paper:
https://github.com/RingsNetwork/whitepaper/blob/master/pos.pdf

## Referral Program (optional) :moneybag:


## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation Website
