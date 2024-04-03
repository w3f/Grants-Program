# Deitos Network

- **Team Name:** Deitos Network
- **Payment Method:** USDT (ID 1984) / Polkadot Assethub
- **Payment Address:** 12DrpztfgAKVubPVv1KcichaW5L4YJutmLGz665xwmbaicrM 
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

### Deitos Network:
#### An open and decentralized network for Big Data and training models.

Deitos Network aims to be a transparent, open, and decentralized platform dedicated to storage, data processing, modeling, and training.

The network is designed to facilitate collaboration between various infrastructure providers and consumers in need of big data-related services. This encompasses data scientists from startups, academic institutions, and other organizations. Through this engagement, infrastructure providers will receive financial compensation for their services.

The network allows processed and structured data to be utilized by AI and BI systems. This data can produce business analytics reports, predictive algorithms, clean datasets, and training sets, which can be used in different machine learning algorithms, analyses, and trend predictions.

### Why develop blockchain?

We believe that a network like the one we envision can democratize access to structured big data and AI model training. The model we propose is designed for a flexible market fit that can cater to diverse requirements.

Blockchain technology offers a framework to create incentives for a decentralized network. This network can serve a public purpose by providing access to structured or trained data.

### Why Polkadot SDK?

Polkadot SDK is set to be the backbone of the network, orchestrating rewards, data interactions, disputes, consensus, and integrity checks.

With the flexibility of Polkadot SDK, we can design a specific consensus algorithm that considers storage aspects, not just fund staking. On a broader scale, every infrastructure provider will operate a substrate node with an authoring role, and a minimum stake will be necessary to participate in the consensus.

Utilizing Polkadot SDK allows us to implement runtime updates without causing forks or interruptions in the active network.

### Why building Deitos Network?

After thorough evaluation and research, our team identified a specific need and a viable solution. With extensive experience in the big data sector and a deep understanding of Polkadot SDK technology, we are confident in our ability to develop a robust project. We believe that using Polkadot SDK provides a solid foundation, as it is a leading technology for developing blockchains that aim to interoperate.

# Project Details

## Technology Stack

- Polkadot SDK - Blockchain 
- Hadoop - Distributed Storage Management
- Spark / Hive  - Big Data processing tooling
- Llama v2 - LLM AI training model

### Network actors 

#### Infrastructure Providers
These are entities responsible for providing the necessary infrastructure for all big data-related services. Additionally, they manage the substrate nodes that handle consensus-related operations.

#### Consumers
As outlined in the project description, the user persona for this network encompasses any individual, entity, or organization requiring storage and computational resources for their data utilization. From the network's standpoint, these consumers are token holders who, alongside infrastructure providers, keep the network operational.

#### Dispute Resolvers Committee 
This group is tasked with resolving any disputes between consumers and infrastructure providers. Membership in this committee isn't static. Individuals must first nominate themselves, after which all token holders can vote within a specified timeframe to determine the nominee's inclusion. This election process is cyclical.

### Network parties interaction flow.

At a high level, when a consumer identifies an infrastructure provider that best suits their needs, they enter into an agreement. This agreement is based on:
- The volume of storage to be uploaded and analyzed.
- The computational resources needed for data processing (e.g., vCores, RAM).
- The duration agreed upon for the above two parameters.

Given these criteria, the consumer compensates the infrastructure provider incrementally, provided the service aligns with the mutual agreement's expectations. To ensure this, the consumer reserves a predetermined percentage of the total agreement value (also decided during the agreement). If there's a breach of contract, a dispute resolution process begins, involving the Dispute Resolvers Committee. They determine if a party has defaulted, be it an infrastructure provider not delivering the agreed resources or a consumer raising unfounded complaints. Upon resolving the dispute, appropriate penalties are enforced, and the dispute resolvers receive compensation for their mediation efforts.

### On-chain reputation system
After the conclusion of each agreement, participants can review their counterpart. This feedback contributes to an on-chain reputation system, fostering more secure interactions as the network evolves. However, in the event of disputes, neither party can leave feedback. Instead, the dispute's outcome is recorded in their respective profiles.



## Architecture Overview

![msg1154506685-35640](https://github.com/Deitos-Network/Grants-Program/assets/1779865/ee89f33b-3e35-47af-a3fc-059417dad702)

### Network Components

**Substrate Node**: This is responsible for consensus and blockchain-related activities.

**Proxy**: A custom module designed for routing requests and accesses, ensuring that resources from the infrastructure provider align with the security and mechanisms defined by the blockchain.

**HDFS Cluster**: HDFS, or Hadoop Distributed File System, is a distributed file system designed to operate on standard hardware. It's essential for distributed storage that supports extensive data processing.

**YARN**: Handles resource management and job scheduling/monitoring.

**Spark**: Apache Spark is a versatile engine that facilitates data engineering, data science, and machine learning tasks on both single-node machines and clusters.

**Hive**: Apache Hive is a distributed and fault-tolerant data warehouse system, enabling large-scale analytics.

**Llama v2**: The next iteration of our open-source large language model provided by Meta. It's freely available for both research and commercial applications.

**File Uploader**: A custom module designed to process each uploaded file in accordance with consensus requirements.

The architecture landscape of our design primarily consists of two core components: the Polkadot SDK for blockchain-related tasks and a suite of renowned open-source tools for distributed storage. These tools support extensive data processing, such as data structuring, model training, file management, and more.

We've chosen to delegate specific storage and data processing tasks to established open-source software. These tools have been in use for years and are widely recognized within the data science community.

In distributed storage, there are two main conceptual categories: nodes and clusters (networks of nodes that replicate all data across each node).

Each infrastructure provider will maintain a Hadoop cluster with associated services like Spark, Hive, or Llama v2 for data processing and model training. As mentioned earlier, they will also operate a substrate node responsible for block authoring.

### Proxy 
To ensure that the infrastructure provider's resources are used in line with the blockchain's security and mechanisms, we'll develop a proxy system. This system will serve as an interface, validating requests originating from signed transactions. Most of this proxy will depend on the cluster configuration, where system users are created from the user's public key, and authentication is based on account signing. The current authentication system relies on the LDAP protocol, which allows for custom modules to extend the authentication mechanism. The high-level workflow for this custom module is as follows:

1) The user provides their identifier (could be DN or another attribute).
2) The server generates a challenge and sends it to the user.
3) The user signs the challenge with their private key and returns the signature.
4) The server verifies the signature using the stored public key. If valid, the user is authenticated.

No Stored Password: Traditional passwords will not be stored in the LDAP directory in this setup.

### Custom File Uploader (Client Interface)
After an agreement is reached between an infrastructure provider and a user, the user can begin uploading their files. During this upload, a custom user interface will segment the file into chunks, computing the hash for each segment.

This process will yield something like:

- File ID: 23 / parts: 4 / size: 240 GB.
- Part ID: 1 / Hash:  662551bf52c62b...
- Part ID: 2 / Hash:  347858cnqn21dn...
- Part ID: 3 / Hash:  vfnq35gblajfrm...
- Part ID: 4 / Hash:  3n5jq99vhtb3i9...

Once the file is uploaded to the infrastructure provider, a transaction will be committed, registering this information with an "unverified" status.

From the infrastructure provider's perspective, the same process will occur, ensuring that every hash for each part aligns with the values posted during the user's previous transaction.

### Consensus
The chain will operate under the BABE and GRANDPA consensus mechanisms. We've chosen the BABE consensus not just for its security advantages over Aura but also because we plan to utilize the VRF (Verifiable Random Function) it generates. This randomness will be instrumental for processes like the Data Integrity Protocol, where a file segment is randomly selected for the cryptographic challenge detailed earlier.

### Data Integrity Protocol
To ensure that infrastructure providers maintain the agreed-upon storage with users, we will implement a data integrity protocol. This protocol will frequently verify, over a set number of blocks, that each infrastructure provider is storing and preserving the uploaded files.

A pallet responsible for this protocol will execute an off-chain worker (OCW) that randomly selects a file and a part from the infrastructure provider's storage. It will then initiate the hashing calculation for that file/part in the off-chain worker. Once the computation concludes, the hash calculation result should match the value currently stored in the pallet storage. This check will occur as an unsigned transaction from the OCW. If there are 20 infrastructure providers, 20 unsigned transactions will be processed at regular intervals, meaning every a certain number of blocks.

It's worth noting that the randomness value will be sourced from the VRF produced as part of the BABE block production mechanism.

While it may seem evident, it's essential to note that checking the integrity of all files frequently is computationally intensive. By relying on random values that guide the file/part selection, we can probabilistically ensure that the infrastructure provider is storing the files previously uploaded by the user.

## Team :busts_in_silhouette:

### Team members

- **Hector Bulgarini**: Senior Software Developer and Team Lead
- **Hernan Borelli**: Product & Project Manager
- **Ramón Valera**: Data Sciense specialist & Senior Software Developer
- **Alexander Kalankhodzhaev**: Senior Blockchain and protocol Engineer

### Contact

- **Contact Name**: Hernan Borelli
- **Contact Email**: hernanbor@gmail.com


### Legal Structure

- **Registered Address**: To be provided privately.
- **Registered Legal Entity**: To be provided privately.

### Team's Experience

**Hector**: With over 15 years in the technology sector, Hector focused on blockchain and Polkadot tech stack evidenced by his work at Parity and the graduation from the first Cambridge cohort of the Polkadot Academy. Hector also have founded and led multiple startups showing a strong entrepreneurial spirit. 

**Hernan**: Hernan holds a degree in project management and development. Since 2020, he has been deeply involved in promoting and developing the Polkadot ecosystem in Spanish-speaking countries.

**Ramon**: Ramon is a software engineer with 18 years of experience in a wide range of work areas and applications. His professional career has ranged from the design and development of large-scale enterprise and web applications, to document and database systems management, in addition to application integration and Big Data solutions. In recent years, he has specialized in solving challenges related to Big Data and Application Integration, facing problems of nature and volume of data, as well as performance and efficiency for optimal results.

**Alex**: With a rich experience spanning over 15 years as a software engineer, Alex has worked across various companies and domains. For the past 5 years, he has specialized as a blockchain engineer. Alex is a significant contributor to a substrate node developed in Java, which can be found here: [substrate-client-java](https://github.com/strategyobject/substrate-client-java). 

Additionally, he currently maintains GO-LINQ, a language integrated query (LINQ) library for Go. More about it can be found here: [GO-LINQ](https://github.com/ahmetb/go-linq).


### Team Code Repos

- [Deitos network](https://github.com/Deitos-Network) 
- Ramon: https://github.com/rvalera
- Alex: https://github.com/kalaninja
- Hector: https://github.com/hbulgarini

### Team LinkedIn Profiles

**Linkedin profiles**
- Hector: https://www.linkedin.com/in/hector-esteban-bulgarini-0791147
- Ramon: https://www.linkedin.com/in/ramonvalera
- Hernan: https://www.linkedin.com/in/hernan-borelli-62296261
- Alex: https://www.linkedin.com/in/kalaninja/

## Ecosystem Fit

The Polkadot ecosystem is known for its integration of a myriad of projects, each offering distinct functionalities. These projects often interoperate with one another and frequently rely on external data to achieve their objectives. Our primary aim is to supply blockchain-validated, processed big data for various systems and applications that necessitate this kind of information.

**Target Audience**

While structured big data caters to a diverse range of users and applications, Deitos Network is specifically tailored to develop a system and user experience (UX) optimized for Artificial Intelligence (AI) and Business Intelligence (BI) applications.

**Problem Statement**

The digital realm is witnessing an unprecedented surge in data, leading to challenges in hosting, structuring, analyzing, and processing this vast amount of information. Various entities, from businesses and governments to scientists and other professionals, are in dire need of this data for a plethora of applications. However, they often grapple with limitations in accessing and utilizing it effectively. The exponential growth of big data far outpaces our current capacity to process it, resulting in a vast reservoir of unstructured data that remains untapped for many potential applications. The intricate process of structuring and analyzing this data demands immense computational power, further constraining its effective use.

On the flip side, fostering a diverse ecosystem of big data storage, management, and processing providers can offer users solutions that are more attuned to their specific needs and requirements.

**Similar Projects in the Ecosystem**

In the realm of data storage and processing, two notable projects are making strides in the development of decentralized networks:

- **Subspace**: This project is geared towards addressing the blockchain trilemma. Its primary feature revolves around the development of a Secure & Sustainable Consensus, specifically the Proof-of-Archival-Storage (PoAS) consensus. Among its other salient features, it emphasizes full decentralization and composite scaling.

- **Cess**: Positioned as a Large-Scale Decentralized Cloud Data Solution, CESS's Decentralized Cloud Network is fine-tuned for processing high-frequency dynamic data. It facilitates real-time data sharing while ensuring the protection of users' data ownership, privacy, and assets.

- **Arweave**: A decentralized storage network designed to offer permanent data storage.

While Deitos Network shares similarities with platforms such as Crust, Arweave, and IPFS, Deitos primary focus is distinct. The network emphasizes the processing, structuring, and utilization of data. The direction leans more towards Big Data and AI functionalities than acting as a descentralized storage service.

- **DecentralML**: A Polkadot protocol for decentralised federated machine learning and collective governance.

Based on the grant information from [DecentralML](https://github.com/w3f/Grants-Program/blob/master/applications/decentral_ml.md), it appears there are parallels in terms of decentralizing machine learning model training, where rewards are based on data model training contributions and parameter adjustments by governance.

Deitos approach, however, adopts a distinct architecture and game theory strategy. It focuses on infrastructure providers offering private services, competing to deliver optimal solutions to consumers. In future developments, these providers may also engage in maintaining and utilizing a shared public dataset, rewarded for hosting this data and processing consumer requests. (Section added from application's feedback).

## Relevant prior work and research on the topic

Some of the following topics/reads were analyzed and processed:

- [BlockHDFS: Blockchain-integrated Hadoop distributed file system for secure provenance traceability](https://www.sciencedirect.com/science/article/pii/S2096720921000270)
- Trusted Execution environment
- Proof of Space
- Shamir’s Secret Sharing
- Distributed Key Generation
- Subspace

## Development Status :open_book:

Our team has been diligently exploring various cryptographic primitives and experimenting with different substrate configurations to progress towards a Proof of Concept (PoC).
These can be found in the Github organization.

## Development Roadmap :nut_and_bolt:

### Grant Scope

This grant is specifically earmarked for the foundational development of the network. Once the foundational elements, such as the substrate node and runtime, are established, the grant's focus will shift towards the development of the Infrastructure Provider Management module, Proxy,the Data Integrity Protocol and the disputes mechanism. This can also be perceived as the mechanisms for authentication, data upload, and integrity verification.

Elements related to data consumption or querying, as well as the inclusion of other computational resources like vCPUs and RAM within the agreement, fall outside the purview of this grant. These aspects are slated for consideration in future development phases. Additionally, there are certain security implications associated with the Data Integrity Protocol and data consumption. Addressing these will necessitate advanced privacy measures, potentially involving zero-knowledge proofs.


### Overview

- **Total Estimated Duration:** 12 weeks (3 months).
- **Full-Time Equivalent (FTE):**  3 FTE
- **Total Costs:** 30.000 USD

### Milestone 1 — Initial setup and infrastructure provider pallet.

- **Estimated duration:** 6 weeks
- **FTE:**  3
- **Costs:** 15,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | The project will utilize the GNU General Public License v3 (GPLv3) license. |
| **0b.** | Documentation | All the functionalities developed in this milestone will contain the corresponding inline code documentation. In addition, all the configuration for the services included in the Infrastructure Provider will be documented. |
| **0c.** | Testing and Testing Guide | 1) All the different pallets and functionalities will contain their own unit testing contained in the `test.rs` files including the inline documentation for each test purpose. 2) Comprehensive testing guide for interacting with all the functionalities from the  `pallet-deitos`. 3) User guide to start the Docker file provided in the delivery item **0d.**|
| **0d.** | Docker file | 1) Provision of a Docker file encapsulating all essential services. 2) Streamlined deployment of services: Hadoop, Spark, Hive, YARN, Llama v2, and the substrate node. 3) A docker-compose file to simplify onboarding and integration for providers. |
| 1. | Substrate Node with BABE consensus | 1) Reconfiguration of the node to employ the BABE consensus protocol in place of the Aura consensus. 2) Integration of the respective VRF setup for BABE consensus. 3) Proper configurations on the node side like integrating the `BabeBlockImport`, initiating BABE workers, and setting inherents from `sp_consensus_babe` on the node service.rs file beyond just embedding the pallet-babe in the runtime|
| 2. | Pallet Deitos foundation (pallet-deitos) | 1) Introduction of foundational elements of the pallet, incorporating storage items for cataloging Provider data, the specifics of agreements between Providers and Consumers, the reputation system and the data integrity protocol. 2) Framework scaffolding for future enhancements. 3) Groundwork for the data integrity protocol to be executed by this pallet's off-chain worker. |
| 3. | Registration of Infrastructure Provider (pallet-deitos) | 1) Mechanism for infrastructure provider registration within the pallet-deitos. 2) Requirement of reserving a certain amount of funds. 3) Groundwork for attestation process initiation for new entrants. This will be completed in the next milestone with the data integrity protocol. |
| 4. | Agreements Module (pallet-deitos) | 1) Functionality to define agreements between users and infrastructure providers. 2) Outline of storage quotas and its duration based on block by block reward dynamics. 3) Introduction of pertinent extrinsics, storage components, and events for agreements. 4) Mechanism where the consumer reserves a value based on the agreement's terms, leveraging either the ReservedCurrency trait from pallet-balances or the MutateHold trait from Fungibles depending of the pallet-balances migration status.  |
| 5. | Agreements termination and on-chain reputation (pallet-deitos) | 1) Termination agreement procedure where consumer's data and corresponding resources get free from the infrastructure provider. 2) Data Integrity protocol clean up. 3) On chain reputation module based on feedback from the other party.  |

### Milestone 2 — Proxy, file uploader and data integrity protocol.

- **Estimated duration:** 6 weeks
- **FTE:**  3
- **Costs:** 15,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | The project will utilize the GNU General Public License v3 (GPLv3) license. |
| **0b.** | Documentation | Building upon the documentation provided in the first milestone, this milestone will introduce a new set of user guidelines. As the grant approaches its conclusion and all implementation details are settled, we will provide thorough protocol documentation. |
| **0c.** | Testing and Testing Guide | 1) All the different pallets and functionalities will contain their own unit testing contained in the `test.rs` files including the inline documentation for each test purpose. 2) This milestone will deliver the necessary tools to establish a local testing environment, allowing for comprehensive testing of all functionalities. |
| **0d.** | Docker | As we plan to deliver the software to infrastructures providers (IP) in docker images, all the protocol services will be configured and delivered in the  IP Docker image. |
| **0e.** | Articles | For the grant conclusion we will create two Medium articles: The first one will be a project introduction targeting a more general and wide audience. Some of the content will include: 1) Deitos Network introduction and network offering, 2) Roles and protocol functioning, 3) Design decisions. On the second article, we will delve into more technical information where the development aspect of this grant will be discussed. The audience for this second article will be more technical and the following items will be discussed: 1) Architecture in depths, 2) Substrate pallets descriptions, 3) Internal functioning of each module.   |
| 1. | Proxy Development | 1) Complete development and deployment of the described proxy ensuring interaction between infrastructure providers, consumers and the substrate node. 2) Mechanism to reserve resources on the infrastructure provider for a consumer upon agreement commitment. 3) A system focused on storage where user segmentation is achieved through dynamic users generated on Hadoop. 4) Authentication derived from a signed transaction initiated by the pallet-deitos pallet. 5) Development of a module to validate consumer signatures and commit actions upon successful verification, ensuring no traditional passwords are stored in the system. |
| 2. | File Uploads (Client Interface) | 1) Delivery of a client interface to facilitate file content splitting and hash calculation. 2) Creation of a generic algorithm to uniformly split files and calculate segment hashes. 3) Mechanism for producing and publishing signed transactions reflecting the computed results.|
| 3. | File Upload Verification (Provider Side) | 1) Using the previously generic algorithm to uniformly split files and calculate segment hashes for each file or part upon receiving the consumer's signed transaction. Files are marked as 'verified' post successful hash validation. 3) Constant monitoring of blocks to detect unverified files, triggering an OCW for hash verification based on consumer transactions. |
| 4. | Data Integrity Protocol | 1) Comprehensive development and deployment of the Data Integrity Protocol. 2) Utilizing BABE-generated randomness to select files/parts, directing infrastructure providers to create and validate respective hashes. 3) In case of hash mismatches during the data integrity protocol, a system to penalize the provider by reducing their staked amount. |

## Mid-Term Plans

### High-Level Overview roadmap.

1) Development of the storage layer and data model foundations, which is the current grant's focus.
2) Addition of the execution aspects for agreements and the dispute resolution mechanism.
3) Implementation of security measures such as infrastructure provider attestation to ensure execution integrity and reliability.

- Further development of the network's roadmap, which includes:
  - Deliver a on-chain dispute resolving module in case of disagreements between consumers and infrastructure providers (Stage 2).
  - Introducing data consumption processes, such as querying or interacting with the model (Stage 2).
  - Implementing security mechanisms around the infrastructure provider to ensure the environment remains free from dishonest manipulations (Stage 3).
  - Incorporating privacy primitives, like ZK proofs, to bolster data integrity and query processes (Stage 3).
- The aforementioned roadmap can be viewed as the essential MVP (Minimum Viable Product) for launching a test network, facilitating initial iterations.
- As we transition to a production phase, our plan is to secure core time, positioning us to join the Polkadot network as a parachain.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** 
Web3 Foundation Website / Medium / Twitter / Element / Announcement by another team / personal recommendation / etc.

The team has a longstanding engagement with the ecosystem, making us well-acquainted with Web3 grants.
