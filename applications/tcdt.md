# Blockchain Interoperability through DNS and Asset Discovery

- **Team Name:** TCDT Lab
- **Payment Details:**
  - **DOT**: For the **DOT** compensation, please provide a Polkadot address (e.g. 15oF4...).
  - **Payment**: Payments must be arranged with the University of Manitoba 
- **Level:** 2

## Project Overview :page_facing_up:

### Overview

- This project aims to enhance blockchain interoperability by addressing a fundamental issue: DNS and network and asset discovery. Inspired by traditional DNS, our approach allows different blockchain networks to opt in and make their networks, assets, and services discoverable by claiming a domain and registering it on appropriate networks. This facilitates the discovery of blockchain networks and their assets with user-friendly querying methods. Therefore, the project ensures seamless connectivity and discoverability, which are essential for blockchain ecosystems' growth. We introduce incentives for nodes maintaining the DNS infrastructure, providing a sustainable economic model that promotes stability and dynamic participation, ultimately contributing to a cohesive Internet of Blockchains.

- Our project leverages the modular architecture of the Substrate framework to develop custom pallets and protocols for DNS and asset discovery functionalities and enhance blockchain interoperability. These pallets facilitate the registration, modification, and resolution of domains within our network, enabling a decentralized DNS system that can be easily adopted by other Substrate-based projects.
In the Polkadot network, our project contributes to the broader goal of cross-chain communication and interoperability. Polkadot's relay chain and parachain structure allow different blockchains to interoperate, and our DNS service can provide a unified method for network and asset discovery across these diverse chains. This enhances the functionality and connectivity of the Polkadot network, supporting seamless interactions between parachains.

- We are part of the Trustworthy Computing & Distributed Technologies Laboratory, focusing on various aspects of blockchain technologies, particularly blockchain interoperability. Our academic work aims to advance the theoretical foundations and practical applications of blockchain. Beyond academia, we are keen on industrial collaboration to bring our solutions to real-world implementation. This project presents a promising solution, perfectly aligning with the capabilities of the Substrate framework. By applying for this grant, we seek to expand the scope of our project, collaborate with the Substrate community, and explore future extensions. This opportunity allows us to merge our academic research with practical, industry-relevant outcomes, contributing to the broader blockchain ecosystem.

### Project Details

This project aims to create a discovery mechanism inspired by traditional DNS for the interoperability of blockchain networks. Using this approach, different blockchain networks can decide to opt in and make their networks, assets and services discoverable by claiming a *domain* and registering it on the appropriate networks. Once registered, a recursive query can be made to resolve the claimed *domain* and find the `chain specifications` to be used to connect to the target network.


The discovery of blockchain networks subsequently leads to the discovery of assets within these networks. Nodes or light clients can query the DNS architecture for the chain specifications associated with a given domain. If permitted, they can then query the target chain for information associated with a specific asset. Interestingly, this can all be implemented in a very familiar fashion to end-users:


```bash
domain.tld/assetId
```


The flexibility of this approach is shown in its ease of extensibility. For example, if assets were not the only information required by the user, the protocol can easily be modified as follows, essentially acting as an interface to the different substrate modules included in the node:


```bash
domain.tld/asset/assetId # For assets
domain.tld/balance/accountId # For account balances
```

Finally, the incentives for maintaining the DNS infrastructure for blockchain networks lie in two key statements.
First, the inherent incentive for maintaining both the Root and TLD networks (as shown in the protocol diagrams) is driven by the desire to ensure the discoverability of target networks. Without the maintenance of the DNS infrastructure, these networks would not be easily discoverable, leading to a significant reduction in network traffic and connectivity. The ability to discover and connect to other networks is essential for the growth and functionality of blockchain ecosystems.
Second, we introduce direct monetary incentives for the nodes—whether they are independent or network-dependent—that maintain the DNS infrastructure. When domains are registered, modified, or revoked, these processes require transaction fees. These fees provide a financial incentive for nodes to prioritize and complete these tasks, ensuring the DNS system runs smoothly. By handling these transactions, nodes earn compensation, creating a sustainable economic model that supports the ongoing maintenance and development of the DNS architecture. This approach encourages active participation and promotes the stability and growth of the entire blockchain ecosystem.

#### Domain Name Querying Diagram
![Domain Query Diagram](https://github.com/tcdt-lab/bcdns/blob/main/img/domain_query.png)

#### Domain Name Registration Diagram
![Domain Registration Diagram](https://github.com/tcdt-lab/bcdns/blob/main/img/domain_register.png)

### Ecosystem Fit

#### Overview

After initial investigations, experimenting with and implementing various ideas using the Substrate framework to gain hands-on experience, and evaluating the concept regarding technical and theoretical challenges, we found Substrate to be the fitting framework for developing this project. Substrate's modular architecture allows us to build custom pallets for DNS, network registry, and asset discovery operations. 

Moreover, the runtime flexibility of Substrate (Wasm and native code) enables seamless upgrades and modifications to our DNS and registry mechanisms, avoiding hard forks. In addition, this project contributes to blockchain interoperability by addressing one of its key components: DNS services, network registry, and asset discovery. As a result, it can be extended to work with Polkadot and other Substrate-based or heterogeneous networks, enabling DNS and asset discovery services. 

Finally, this project aligns well with Substrate's vision of creating interoperable and scalable blockchain networks by enhancing discoverability and connectivity. We are committed to contributing to the Substrate developer community by sharing our custom pallets, tools, and academic publications.

#### Target Audience

1. Blockchain Developers (network, smart contracts and dapp developers): They will benefit from this framework by expanding their projects' capabilities through registering their blockchain networks, exposing their assets through discovery services, and integrating their systems into a broader, interconnected ecosystem of blockchains. 

2. Researchers and Academics: They will be able to explore the technical challenges and solutions provided by this project, contribute to its enhancement, and advance research in blockchain interoperability. 

3. Substrate Developer Community: Benefiting from and contributing to the developed pallets, protocols and tools introduced by this project.

4. Investors and Stakeholders: This project could be of their interest if they recognize its potential to drive innovation in blockchain interoperability and consider investment opportunities.

#### Meeting the Needs

This project addresses the issue of blockchain interoperability. Blockchain interoperability solutions can be categorized into various layers, including data, network, consensus, and application layers, each tackling specific challenges and functionalities. Our project focuses particularly on the network layer, providing DNS services, enhancing blockchain network interoperability, and facilitating asset discovery.

#### Identifying the Needs

These needs were identified through our experiences in multiple academic studies [1, 2, 3] on blockchain interoperability and our collaborations with industry projects, including those with the Hyperledger Foundation. Specific initiatives include developing automated gateways utlizing smart contracts (https://wiki.hyperledger.org/display/INTERN/Project+Plan+-+Automated+gateways+through+smart+contracts), implementing publish/subscribe (pub/sub) architectures for blockchain interoperability (https://github.com/hyperledger-labs/pubsub-interop), and integrating Hyperledger Fabric with other Hyperledger projects like Hyperledger Indy, Ursa, and Aries, which focus on digital identity services (https://wiki.hyperledger.org/display/INTERN/Project+Plan+-+Privacy-preserving+federated+learning+framework+based+on+Hyperledger+Fabric+and+Hyperledger+Aries).

1. Khorasani, Koosha Esmaeilzadeh, Sara Rouhani, Rui Pan, and Vahid Pourheidari. "Automated Gateways: A Smart Contract-Powered Solution for Interoperability Across Blockchains." Accepted in IEEE Blockchain, 2024.

2. Sidhu, Sahilpreet Singh, Minh Nam Hai Nguyen, Chikamnaele Ngene, and Sara Rouhani. "Trust development for blockchain interoperability using self-sovereign identity integration." In 2022 IEEE 13th Annual Information Technology, Electronics and Mobile Communication Conference (IEMCON), pp. 0033-0040. IEEE, 2022.

3. Ghaemi, Sara, Sara Rouhani, Rafael Belchior, Rui S. Cruz, Hamzeh Khazaei, and Petr Musilek. "A pub-sub architecture to promote blockchain interoperability." arXiv preprint arXiv:2101.12331 (2021).

#### Similar Projects in the Substrate / Polkadot / Kusama Ecosystem

Several studies and projects have utilized blockchain to enhance current DNS for Web 2.0 [1, 2, 3], focusing on improving security and protecting against cache poisoning and DDoS attacks. However, implementing a DNS service for Web 3.0 is a relatively novel idea. The need for networking services, specifically DNS and discovery services, is noted in blockchain interoperability survey papers and literature reviews [4, 5], but there has been no practical implementation of such a service so far. This presents a significant opportunity for further investigation.


1. Li, Zecheng, Shang Gao, Zhe Peng, Songtao Guo, Yuanyuan Yang, and Bin Xiao. "B-DNS: A secure and efficient DNS based on the blockchain technology." IEEE Transactions on Network Science and Engineering 8, no. 2 (2021): 1674-1686.

2. Al-Mashhadi, Saif, and Selvakumar Manickam. "A brief review of blockchain-based dns systems." International Journal of Internet Technology and Secured Transactions 10, no. 4 (2020): 420-432.

3. DNSChain, https://github.com/okTurtles/dnschain. 

4. Belchior, Rafael, André Vasconcelos, Sérgio Guerreiro, and Miguel Correia. "A survey on blockchain interoperability: Past, present, and future trends." Acm Computing Surveys (CSUR) 54, no. 8 (2021): 1-41.

5. Wang, Gang, Qin Wang, and Shiping Chen. "Exploring blockchains interoperability: A systematic survey." ACM Computing Surveys 55, no. 13s (2023): 1-38.

#### Similar Projects in Related Ecosystems

To the best of our knowledge, there are no projects similar to ours. However, our project contributes to the broader goal of blockchain interoperability, a concept explored by various prominent projects such as Polkadot, Hyperledger Cacti, and Cosmos.

## Team :busts_in_silhouette:

### Team members

- **Dr. Sara Rouhani** is a Researcher, Director, and Assistant Professor with over eight years of experience in blockchain. Her expertise spans research, development, mentorship, and leadership in various academic and industrial projects, including work with the Linux Foundation, Hyperledger Foundation, Sksis, TheoryMesh, Almaty Health, and more.

  She has worked in different directions, including:

    1) blockchain interoperability and exploring the capabilities of smart contracts to enhance cross-blockchain transactions.
    2) blockchain-enabled federated learning and utilizing the computation task of distributed learners toward consensus. 
    3) blockchain-based access control systems and data trust. 

  Additionally, she has investigated the potential of blockchain technology in various disciplines, including healthcare, smart grids, business process management, digital identities, and agriculture. 

  Here is a brief introduction to a couple of Sara Rouhani’s projects:

  **Automated Gateways:** This project was supported by the Hyperledger Foundation and is now part of official Hyperledger laboratories. An Automated Gateway is a secure solution that can make Contract-Call interoperability happen between Hyperledger Fabrics with minimal efforts, through which blockchain networks can share data and services. Using three smart contracts as the foundation of authentication and authorization, the Automated Gateways module becomes a simple and secure method for Hyperledger fabrics to exchange their services and data through smart contracts. When a user adds this module to their code and deploys three predetermined smart contracts, they can grant access to their services to other Hyperledger fabrics. Additionally, they can access services from smart contracts deployed on other Hyperledger fabrics. By using this method, various Hyperledger fabrics can connect with each other and utilize each other's services.

  **Integrating Substrate Framework with Hyperledger Fabric for Enhanced Interoperability:** This is our current project supported by the Hyperledger Foundation.  This project investigates the integration of substrate framework with Hyperledger Fabric. Hyperledger Fabric is a permissioned blockchain platform designed for enterprise use cases, while Substrate is a flexible framework for building blockchains, allowing developers to create customized blockchains tailored to specific needs. The interoperability and integration of these two aim to bridge the gap between permissioned and public blockchain ecosystems, thereby extending the functionality and use case applicability of both. We aim to Shared Business Logic via Smart Contracts and Chaincode. The Objective is to enable shared business logic that operates across both Substrate and Hyperledger Fabric. This requires the implementation of business logic in a way that parts of it run on Substrate and other parts on Fabric, depending on the specific needs of the use case (e.g., public verification on Substrate, private transactions on Fabric). This will involve developing a common interface or standard for smart contracts or pallets on Substrate and Chaincode on Fabric to interact, allowing for data exchange, transaction validation, and cross-chain operations. 


  **Proof-of-Collaborative-Learning:** This project has implemented and evaluated a multi-winner federated learning validated consensus mechanism that redirects the computation power of blockchains to train federated learning models. As a part of this project, a novel reward distribution mechanism is proposed to incentivize winning miners fairly and demonstrate that our reward system is fair both within and across all rounds.


  **Privacy-preserving federated learning framework:** This project is also supported by Hyperledger Foundation. This project utilizes Hyperledger Fabric to develop a federated learning framework with committee consensus. Hyperledger Fabric is used to store and trace global model update exchanges. A customized committee consensus mechanism is required to reduce the load of consensus computation by selecting a random smaller subset of nodes to participate in consensus each round. In order to protect the identity of local data owners, the proposed framework will be integrated with Indy, Aries, and Ursa stack projects to offer self-sovereign identity. The mentee will work with the project mentors to gather and validate the requirements and design the appropriate technical solution. 


  **A pub-sub architecture to promote blockchain interoperability:** In this project, we developed a publish/subscribe blockchain interoperability tool through a messaging broker blockchain that can be used by other blockchains to interoperate.
  In the current implementation, a broker blockchain is implemented as a smart contract in Hyperledger Fabric V2.0. Two example subscribers and an example publisher network have been implemented to test the broker. A Hyperledger Fabric V1.4 and a Hyperledger Besu network have been implemented as subscribers, and a Hyperledger Fabric V2.0 has been implemented as a publisher. 


- **Khalid Hassan** is a Master’s student under the supervision of Dr. Sara Rouhani, focusing on blockchain interoperability. He has ample experience with distributed systems, cloud computing, and blockchain technology. Khalid's software engineering expertise spans Rust, Go, and Java, which he utilized to work on a variety of projects that were related to systems programming and backend services. Additionally, he has worked with the Hyperledger Fabric framework and has hands-on experience in implementing and deploying custom pallets for Substrate networks.

  Here is a brief overview of some of Khalid's projects:

  **Versioned Analysis of Software Quality Indicators and Self-Admitted Technical Debt with Ethstractor:** The purpose of this project was to create a tool – Ethstractor – to crawl the Ethereum blockchain and extract all versions of a smart contract that have been deployed to the chain using various techniques to link them all together. Subsequently, the evolution of the contracts over time was then analyzed by calculating various code metrics to discern if they can be used as good indicators for vulnerability detection. Another aspect of this project was the identification of whether smart contract deployers usually pay off self-admitted technical debt in later versions or not.


  **Securing Blockchain Bridges using Provenance Analysis:** The aim of this project was to explore the benefits of applying the provenance analysis technique to blockchain bridges in terms of their security. This was done by extracting logs from the target bridge, defining a structure for the provenance graph, constructing the graph using the logs according to the previously defined structure, and ranking anomalous paths by feeding them into multiple machine learning models. 


  **RoboHive:** This project is a complete RPA solution implemented in a scalable fashion using the microservice architecture. The Orchestrator part of the solution – which Khalid worked on – involves managing hundreds of geographically distributed machines by sending them workflows to execute and monitoring their execution logs. Khalid was responsible for handling user authentication for interacting with services, creating multiple services for different functionalities of the solution, deploying and configuring RabbitMQ as a message broker for the services, configuring Nginx as a reverse proxy and load balancer for services which were orchestrated using Docker Compose, creating a CI/CD pipeline using GitHub Actions for the project, and deploying the solution to GCP.

### Contact

- **Contact Name:** Sara Rouhani
- **Contact Email:** sara.rouhani@umanitoba.ca
- **Website:** https://tcdt.ca/

### Team Code Repos

#### Sara Rouhani's Projects

- [Automated Gateways: The link includes the project description and GitHub ](https://labs.hyperledger.org/labs/automated_gateways.html)

- [Integrating Substrate Framework with Hyperledger Fabric for Enhanced Interoperability](https://wiki.hyperledger.org/display/INTERN/Integrating+Substrate+Framework+with+Hyperledger+Fabric+for+Enhanced+Interoperability)

- [Proof-of-Collaborative-Learning: Github link](https://github.com/tcdt-lab/FL-Validated-Learning)

- [Privacy-preserving federated learning framework: The link includes the project description and GitHub](https://wiki.hyperledger.org/pages/viewpage.action?pageId=62242785)

- [Pub-sub project](https://github.com/tcdt-lab/Automated-Gateways)

#### Khalid Hassan's Projects

- [Versioned Analysis of Software Quality Indicators and Self-Admitted Technical Debt with Ethstractor](https://github.com/tcdt-lab/ethstractor)

- [Securing Blockchain Bridges using Provenance Analysis](https://github.com/khalidzahra/iop-bridge-provenance)

- [RoboHive](https://github.com/orgs/RPA-Development-Team/repositories)

## Development Status :open_book:

We have worked on multiple projects focusing on blockchain interoperability, as discussed in the team experience section. For this project, we explored blockchain DNS and asset discovery topics in existing academic work and industrial projects and identified a significant gap. While numerous efforts have been made to enhance blockchain interoperability, particularly in areas such as cross-chain communication and consensus mechanisms, there is a noticeable lack of comprehensive solutions for DNS and asset discovery within blockchain networks.
For example, InterTrust [1] is an interoperable blockchain architecture which relies on a cross-chain communication protocol utilizing the underlying hardware’s trusted computing capabilities. Moreover, the use of self-sovereign decentralized identities has been proposed by Ghosh et al. [2], where an identity can be requested from a target chain and subsequently verified from using a ledger that acts as an identity registry.

While the aforementioned works attempt to enable the communication between blockchain networks, they fail to describe the mechanism with which these networks will discover each other. In fact, the discoverability issue remains as an open question yet to be solved [3]. Our work proposes an architecture for blockchain network discoverability in the context of an internet of blockchains, which will further lead to the discoverability of assets and services within the target blockchains.

1. G. Wang and M. Nixon, “InterTrust: Towards an Efficient Blockchain Interoperability Architecture with Trusted Services,” in 2021 IEEE International Conference on Blockchain (Blockchain), Melbourne, Australia: IEEE, Dec. 2021, pp. 150–159. doi: 10.1109/Blockchain53845.2021.00029.

2. B. C. Ghosh et al., “Decentralized Cross-Network Identity Management for Blockchain Interoperation,” in 2021 IEEE International Conference on Blockchain and Cryptocurrency (ICBC), Sydney, Australia: IEEE, May 2021, pp. 1–9. doi: 10.1109/ICBC51069.2021.9461064.

3. R. Belchior, A. Vasconcelos, S. Guerreiro, and M. Correia, “A Survey on Blockchain Interoperability: Past, Present, and Future Trends,” ACM Comput. Surv., vol. 54, no. 8, pp. 1–41, Nov. 2022, doi: 10.1145/3471140.

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 5 months
- **Full-Time Equivalent (FTE):** 1.2
- **Total Costs:** 30,000 USD

### Milestone 1 - Infrastructure

- **Estimated duration:** 3 weeks
- **FTE:**  1
- **Costs:** 4,500 USD


| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 / GPLv3 / MIT / Unlicense. See the [delivery guidelines](https://grants.web3.foundation/docs/Support%20Docs/milestone-deliverables-guidelines#license) for details. |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. See the [delivery guidelines](https://grants.web3.foundation/docs/Support%20Docs/milestone-deliverables-guidelines#documentation) for details. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. See the [delivery guidelines](https://grants.web3.foundation/docs/Support%20Docs/milestone-deliverables-guidelines#testing-guide) for details. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1. | pallet-root-dns | This pallet will manage the state of the root network, including the registration of TLD networks and their revocation. |
| 2. | pallet-tld | This pallet will manage the state of the TLD networks. It will be responsible for the logic of claiming domains, revoking them, and transferring their ownership. |

### Milestone 2 - Resolution Protocol

- **Estimated duration:** 3 weeks
- **FTE:** 1
- **Costs:** 4,500 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 / GPLv3 / MIT / Unlicense. See the [delivery guidelines](https://grants.web3.foundation/docs/Support%20Docs/milestone-deliverables-guidelines#license) for details. |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. See the [delivery guidelines](https://grants.web3.foundation/docs/Support%20Docs/milestone-deliverables-guidelines#documentation) for details. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. See the [delivery guidelines](https://grants.web3.foundation/docs/Support%20Docs/milestone-deliverables-guidelines#testing-guide) for details. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1. | Resolution Protocol Design | Formally define the resolution protocol to be used by a (light) node connected to the architecture. |
| 2. | Registration Protocol Design | Formally define the protocol to be used by a (light) node to register a TLD network in the root network, to register a blockchain network in a specific TLD network. |
| 3. | Domain Revocation Protocol | Formally define a protocol to be followed for revoking a specific domain that was claimed by a blockchain registered in the TLD network. |
| 4. | Domain Transfer Protocol | Formally define a protocol for the transfer of a domain between two blockchain networks. |
| 5. | bcdns-adapter-node | This is a NodeJS library that can be imported to quickly start a light node, connect to the BCDNS architecture, and resolve a given domain. |
| 6. | bcdns-adapter-golang | This will do the same thing as bcdns-adapter-node, but will be written in Golang to provide flexibility to the end-user. |

### Milestone 3 — Consensus

- **Estimated duration:** 1 month
- **FTE:**  1
- **Costs:** 6,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 / GPLv3 / MIT / Unlicense. See the [delivery guidelines](https://grants.web3.foundation/docs/Support%20Docs/milestone-deliverables-guidelines#license) for details. |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. See the [delivery guidelines](https://grants.web3.foundation/docs/Support%20Docs/milestone-deliverables-guidelines#documentation) for details. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. See the [delivery guidelines](https://grants.web3.foundation/docs/Support%20Docs/milestone-deliverables-guidelines#testing-guide) for details. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1. | Game-theory-based consensus mechanism | The root and TLD networks should not have designated authorities and must instead be equally controlled by all participants. This, in addition to them not being cryptocurrency-based networks, makes the game theory approach to consensus the most suitable option. |

### Milestone 4 — Incentive Mechanism

- **Estimated duration:** 1 month
- **FTE:**  1
- **Costs:** 6,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 / GPLv3 / MIT / Unlicense. See the [delivery guidelines](https://grants.web3.foundation/docs/Support%20Docs/milestone-deliverables-guidelines#license) for details. |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. See the [delivery guidelines](https://grants.web3.foundation/docs/Support%20Docs/milestone-deliverables-guidelines#documentation) for details. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. See the [delivery guidelines](https://grants.web3.foundation/docs/Support%20Docs/milestone-deliverables-guidelines#testing-guide) for details. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1. | Mandatory-participation mechanism | Using this mechanism, blockchain networks wishing to utilize the BCDNS’ discovery services will be obliged to provide resources for the maintenance of both the root and their respective TLD networks. This will be implemented using a combination of off-chain workers and a runtime pallet. |

### Milestone 5 — Wrap Up

- **Estimated duration:** 6 weeks
- **FTE:**  1
- **Costs:** 9,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 / GPLv3 / MIT / Unlicense. See the [delivery guidelines](https://grants.web3.foundation/docs/Support%20Docs/milestone-deliverables-guidelines#license) for details. |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. See the [delivery guidelines](https://grants.web3.foundation/docs/Support%20Docs/milestone-deliverables-guidelines#documentation) for details. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. See the [delivery guidelines](https://grants.web3.foundation/docs/Support%20Docs/milestone-deliverables-guidelines#testing-guide) for details. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an **article** that explains the project and how it works, the implementation details and challenges faced, how this project can be integrated into other developers' projects, and the potential impact this project will have on the overall blockchain ecosystem. |
| 1. | Root-network-runtime Crate | This will be a crate that constructs the runtime for the root network, which will include pallet-root-dns, the incentive mechanism, and the game-theory-based consensus. |
| 2. | TLD-network-runtime Crate | This will be a crate that constructs the runtime for the TLD network, which will include pallet-tld, the incentive mechanism, and the game-theory-based consensus. |
| 3. | Utility Scripts | A combination of bash scripts and docker-compose files will be created to run the complete DNS infrastructure in a configurable manner. Additionally, the scripts will also manage stopping the architecture and the subsequent clean up. |
| 4. | Evaluation | A comprehensive evaluation of the architecture’s performance will be carried out. The performance will primarily focus on the latency associated with fulfilling a domain resolution request using different combinations for the architecture's configuration (number of networks, number of nodes, size of ledger, etc…) |

## Future Plans

In the short term, we will use this grant to develop and refine the key features of our project. Improving this project will focus primarily on security and scalability. To enhance security, we plan to implement encryption methods and security measures to protect the DNS and asset discovery services from threats like poisoning, DDoS, and man-in-the-middle attacks. To ensure scalability, we will explore sharding, caching, and layer 2 solutions in order to effectively manage high volumes of queries and transactions. We will actively interact with the Substrate community to collect feedback and integrate enhancements. We will additionally publish an academic paper outlining the architecture, implementation, evaluation results, and implications for the future blockchain ecosystem. Furthermore, we plan to share our project and results at industry/academic conferences and symposiums to gain visibility and attract potential collaborators.


We also consider extending the scope and development of the project and financing its long-term maintenance through multiple avenues. Initially, we will leverage this grant funding to establish the project's foundation. As the project evolves, we aim to secure additional funding. Our long-term vision is to develop an ecosystem of interconnected blockchain networks by establishing the basic principles for the Internet of Blockchains. We aim to continuously enhance the project by integrating new features through lessons we would learn through current implementation milestones and addressing emerging challenges in blockchain interoperability. With this project, our goal is to combine our academic research with tangible, industry-specific results.
