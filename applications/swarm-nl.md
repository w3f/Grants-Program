# SwarmNL
- **Team Name:** Algorealm
- **Payment Details:**
   - **DOT:** 14pG7HieCjNk2hZ4X2YvxkbpAXs9oCeW8aNZcD7tD2tpaJT9
   - **Payment Address:** 14G7SjRE2TbWVH2yXNe2uwYU1H8Q4c4hyWk892naB3eX7KTy (Polkadot AssetHub)
- **Level:** 3

## Project Overview :page_facing_up:

### Overview

SwarmNL is a configurable P2P networking layer designed to be used in distributed system architectures that require data transfer solutions for off-chain communication in a scalable way.

Its goal is to provide a lightweight and configurable P2P networking layer for web applications designed to interact with on-chain data.

### Project Details

Algorealm has been building [SamaritanDB](https://algorealm.gitbook.io/samaritandb/), a database management system that allows app users to share parts of their personal data with applications on the internet while retaining control of what data they share. To achieve this, it uses Kilt DIDs and relies on an ink! smart contract to enforce access control.

As we started building the [SamaritanDB prototype](https://github.com/thewoodfish/samaritan-db) we realized that the networking layer will be a critical building block that can be abstracted into its own subsystem. This gave birth to the idea of creating SwarmNL: a networking layer that can be easily integrated into existing infrastructure without deep technical overhead and knowledge. As a standalone library, it will help teams building applications that require networking to move faster, reliably.

Our goal is to build this for our own purposes and to make it available for any other project to use. Here's a diagram illustrating the integration of SwarmNL to SamaritanDB:

![SwarmNL and SamaritanDB](https://raw.githubusercontent.com/thewoodfish/encode-ink/main/SwarmNL%20and%20SamDB.png)


### Features

After some research, here are the features we decided to focus on.

* **Node Communication** -- SwarmNL enables P2P node communication by providing an interface for the following:
    * **Node Configuration** -- SwarmNL would provide a simple interface to configure the node and specify parameters to dictate its behaviour. This includes:
        * Selection and configuration of the transport layers to be supported by the node.
        * Selection of the cryptographic keypair to use for identity generation e.g Edwards.
        * Storage and retrieval of keypair locally.
        * PeerID and multiaddress generation.
        * Protocol specification and handlers.
        * Event handlers for network events and logging.

    * **Gossiping** -- SwarmNL will implement the [Gossipsub 1.1](https://github.com/libp2p/specs/blob/master/pubsub/gossipsub/gossipsub-v1.1.md) protocol, specified by the [libp2p spec](https://github.com/libp2p/specs). This would be easily configurable to accommodate varying and peculiar network conditions. We will achieve this by leveraging and enhancing exiting gossipsub libp2p strategies for more specialized use cases. 
    While libp2p handles liveness through mechanisms like ping/heartbeat/keep-alive, our library extends this by offering additional strategies to address scenarios beyond mere liveness detection. For instance, consider the following use cases:
    
        - Node Failure Handling: In the event of a node going down, SwarmNL provides customizable options for developers to define reconnection strategies, automatic peer discovery, and failover mechanisms. This ensures that the network can gracefully adapt to failures without compromising overall system performance.
        - Sharding Support: For scenarios where nodes are dedicated to specific shards or portions of the network, our library will offer functionality to seamlessly integrate and manage such specialised nodes. This allows for more fine-grained control over the network's structure, enabling efficient scaling and resource allocation.
        - Replication Nodes: In cases where replication nodes are required for data redundancy, our library facilitates the addition of nodes dedicated solely to replication tasks. This ensures that data is appropriately distributed and replicated across the network.
        
* **Scaling** -- SwarmNL needs to efficiently handle a growing (or shrinking) number of nodes while maintaining performance and reliability. Here's what we plan to implement to this effect:
    * **Sharding** -- implementation of a flexible generic sharding protocol that allows application specify configurations like sharding hash functions and locations for shards.
    * **Data Forwarding** -- definition of a protocol for forwarding messages between nodes in different shards and establishment of efficient routing mechanisms for inter-shard communication.
    * **Fault Tolerance** -- implementation of fault-tolerant mechanisms for detecting (and recovering from) node failures. This might involve redundancy, node replication, erasure encoding/decoding or re-routing strategies. 
    
* **IPFS**:
    * **Upload** -- provision of interfaces to upload to IPFS, pin on current node and post arbitrary data to remote servers. Encryption is also easily pluggable and will be provided.
    * **Download** -- retrieval and possible decryption of data from the IPFS network.
    

#### Technology Stack

* Libp2p
* Rust


#### What is not included in SwarmNL
SwarmNL will not be involved in providing a storage solution. Because SwarmNL will be generic over the storage layer, it will be possible to easily plug in any storage interface in a flexible and configurable way.

Storage maintained by the library will mostly be in memory with the exception of config files and other node state keeping data.

### Ecosystem Fit
- Where and how does your project fit into the ecosystem?
    - SwarmNL can be used by applications or projects that require a bespoke decentralized communication layer for transporting and exchanging off-chain data.
    - Examples could include Content Delivery Networks (CDNs); distributed storage systems; IoT (Internet of Things); multiplayer online games; and file hosting and sharing systems
- Who is your target audience (parachain/dapp/wallet/UI developers, designers, your own user base, some dapp's userbase, yourself)?
    - Our priority is to build this for [SamaritanDB](https://github.com/thewoodfish/samaritan-db). However, SwarmNL will be generic enough to be used by any developer in the ecosystem that would require a primitive networking layer
- What need(s) does your project meet?
    - It provides an open-source and flexible communication layer for distributed networking and off-chain data exchange.
- Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?
    - While projects like [Crust network](https://crust.network/) provide a full stack decentralized cloud storage solution for the ecosystem as a dedicated blockchain with an opinionated programming interface, SwarmNL is one subsystem that can be used as a core networking component to build all sorts of decentralized applications, including a bespoke storage solution. Other initiatives like [Polkadot Native Storage](https://forum.polkadot.network/t/polkadot-native-storage/4551) who also piggy back on existing libp2p networking implementations differ as SwarmNL provides the pluggable and interoperable networking layer only.

## Team :busts_in_silhouette:

### Team members

* Adedeji Adebayo (Engineering Lead and Core Developer)
* Sacha Lansky (Project Lead, Documentation and Testing)


### Contact

- **Contact Name:** Sacha Lansky  
- **Contact Email:** alexander.lansky@gmail.com

### Legal Structure

- **Registered Address:** n/a
- **Registered Legal Entity:** n/a

### Team's experience

Adedeji Adebayo is a dynamic and inquisitive programmer, spanning over five years of experience in web development, systems software, and blockchain technologies and is also the founder of Algorealm. His notable achievements include securing a position among the top three winners in the Web3 and Tooling category of the [Polkadot Hackathon: North America Edition](https://polkadot-na.devpost.com). Additionally, he emerged as the sole winner in the KILT category during the [Polkadot Hackathon: Europe Edition](https://www.polkadotglobalseries.com/europe/), where he presented a solution for property management issues in West Africa.

Sacha Lansky started his journey into the Polkadot ecosystem in 2020 and joined Parity to lead developer advocate related activities in 2021. Since then he has written a number of guides and tutorials to help newcomers learn how to build on Polkadot, with a focus on Substrate. He's launched initiatives such as the Substrate Newsletter, Substrate Seminar, SDK Unwinds as well as played a key role in the content launch for the first wave of the Polkadot Blockchain Academy.

Sacha and Adedeji met during a Polkadot hackathon back in 2022 where Sacha was his hackathon mentor at the time and helped him flesh out the vision for realising SamaritanDB. Since then, they have been iterating on the required infrastructure to be able to create a decentralized operating system for building applications powered by SamaritanDB.

### Team Code Repos

The SwarmNL Github repository: https://github.com/algorealminc/SwarmNL

### Team Github Profiles

- https://github.com/thewoodfish
- https://github.com/sacha-l

## Development Status :open_book:

We have built a PoC for SamaritanDB (see [the Github repo here](https://github.com/thewoodfish/samaritandb-proto1)). A very small inflexible version of SwarmNL was used in the development of the PoC, as an inclusive non-distinguishable part of the system. This grant will help us work towards isolating and making this component robust, configurable and pluggable for any project.

## Development Roadmap :nut_and_bolt:
### Overview

- **Total Estimated Duration:** 3 months
- **Full-Time Equivalent (FTE):** 1
- **Total Costs:** $48,000

### Milestone 1

- **Estimated duration:** 1.5 months
- **FTE:** 1
- **Costs:** $12,000

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can integrate SwarmNL and configure nodes on the network. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1. | SwarmNL configuration module | Implementation of the configuration interfaces to define the behaviour of the nodes and the network. |
| 2. | Gossipsub | Implementation of the gossipsub communication algorithm and configurable interfaces for application level data filtering and authentication. |

### Milestone 2

- **Estimated Duration:** 2.5 months (10 weeks)
- **FTE:** 1.5
- **Costs:** $36,000
- **DOT %:** 50%

#### 1. Research on Scaling

Research objective: to find the most efficient implementation to scale swarms, using state of the art research (estimated: 2 weeks).


**1 week:**

- Fault tolerance algorithms and their implementations
- Sharding algorithms
- Cooperation / coordination algorithms

**1 week:**

- Report of findings
- Comparative analysis and final decisions based on our findings for the direction of our implementation


#### 2. Sharding and data forwarding implementation


**A. 3 weeks: sharding and data forwarding**

- 1 week: scaffolding and draft implementation
- 2 weeks: review, testing and improvements


**B. 2 weeks: writing integration-like tests to demonstrate the algorithms at scale**

- 1 week: benchmarking network behavior
- 1 week: documentation and results


#### 3. IPFS integration


**Estimated 1 week:**

- Implementation of all IPFS features for a swarm / testing
- Documentation and guides to easily use the IPFS features (tweak library accordingly if necessary)


#### 4. Extendability of library

**Estimated 2 weeks:**

- Provide capabilities to take snapshots of networking state and send to remote server including logs
- Testing and documentation
- Touching up and miscellaneous

This brings us to total estimation of 10 weeks with a 1.5 FTE. With hourly rates revised to 60 USD/hr at 40 hour per week, our estimations come to a 2400 USD (1 FTE) + 1200 (0.5 FTE). This brings the total to 36,000 USD for Milestone 2, to fund the work of a Lead Engineer + Protocol Researcher (Adedeji) and Project Lead + Developer (Sacha) required to ship the libraries' features for this milestone.

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | We will provide both **inline documentation** of all new code and basic guides that explain how a user can add new nodes to SwarmNL and showcase API usage for different network configurations. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness.|
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1. | Research | Research on decentralized fault-tolerant, coordination and sharding algorithms for large scale networks. |
| 2. | Scaling | Implementation of sharding, data-forwarding and fault-tolerant algorithms into SwarmNL. |
| 3. | IPFS integration | Implementation of interfaces to upload, download and pin IPFS files. |
| 4. | Extendability of library | Implementation of interfaces to POST arbitrary data to remote servers. |


## Future Plans

With milestones 1 and 2 completed, we plan to continue the development of SamaritanDB and launch an MVP that we will use to roll out the first wave of applications powered by SamaritanDB.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Personal recommendation.
