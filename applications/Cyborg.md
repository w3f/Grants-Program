# Cyborg Network - Empowering Decentralized Edge Networks

- **Team Name:** Cyborg Network
- **Payment Address:** 0x40722FC6D12f79E62Cd2C857F40E82850bB24586 (USDT on Ethereum)
- **Level:** 1

## Project Overview :page_facing_up:

![Untitled design (1)](https://github.com/Cyborg-Network/Grants-Program/assets/93442895/a33de305-fba2-4a43-ac73-fe3736c03b56)

### Overview

Cyborg Network is developing a DePIN based marketplace for edge computing servers to help AI and IoT companies boost their performance while curbing the cloud operations cost, all without necessitating a shift from their current cloud setups. Our vision is to act as a crucial middleware on the network's edge, managing specific low-latency tasks and reduce the costs associated with cloud operations, all the while complementing existing cloud services. As a premier venture of this nature in the Polkadot landscape, our network effortlessly allows providers to integrate their machines, rewarding them for their invaluable contribution.

We establish connections with small to medium-sized data centers to address the demands of enterprise-level clients, ensuring that their requirements are fully met. Our primary emphasis lies in delivering tailored service packages, meticulously designed for diverse deployment scenarios. Our overarching goal is to provide users with a service experience reminiscent of the Web 2.0 era.

We are embarking on an ambitious mission to establish ourselves as a Polkadot and Kusama parachain. Our decision is anchored in several key reasons:

First, we're enticed by their advanced interoperable features, such as shared security and XCM. These functionalities pave the way for seamless integrations with other projects within the ecosystem. we have already initiated talks with a few ecosystem teams like [Peaq](https://www.peaq.network/), [Tanssi](https://www.tanssi.network/), [Oak Network](https://oak.tech/) for potential integrations

Second, the unparalleled ecosystem and technical support provided by Polkadot and Kusama have been instrumental in our development, and we've had the privilege of closely collaborating with them over the years.

Lastly, the substrate framework stands out as the premier tool for crafting blockchains from the ground up in today's landscape. Our commitment to excellence aligns with the capabilities it offers.

### Project Details

#### Architecture:

The core of our computing solution relies on both off-chain components and substrate pallets that work harmoniously with each other.

Cyborg is a fusion of a blockchain network and numerous computing clusters, collaborating to offer an effective decentralized solution for verifiable off-chain computing.

Our initial technological goal is to develop a system capable of validating computational outcomes from one off-chain cluster by re-executing them in another using pallet logic.

![photo_2024-02-14_23-43-17](https://github.com/Cyborg-Network/Grants-Program/assets/93442895/d50e7582-8f0f-461a-8668-10a828089404)

the Substrate blockchain primarily serves as the framework for deploying containered tasks and facilitating smart contracts related to billing functions.

Once the docker container is deployed, its workload will be protected by hardware measures to prevent data leakage.

It seamlessly integrates with the current cloud-native toolchain for developers, typically avoiding the need for code changes.
 
Developers can monitor details such as resource utilization and application health status through the Cyborg Connect application dashboard.

![dashboard](https://github.com/Cyborg-Network/Grants-Program/assets/93442895/90f160c6-5cef-408b-8db2-c3e550fdb6a8)

### Work Verification System

For this grant application, we are developing a decentralized task verification mechanism to incorporate an on-chain validation system for containerized tasks executed in an off-chain environment. The main components will include the Cyborg AppChain, which will be deployed on Tanssi's Dancebox testnet, the client interface (K3s worker system), an Oracle, and a testing suite.

The objective is to upload a Docker container along with a publicly available dataset such as IPFS and execute the container over the IPFS dataset inside one of the nodes of the K3s cluster. The executed computation result will be pushed to the Oracle, which will then feed it to the Cyborg substrate chain. Subsequently, the verification pallet will initiate task execution on another connected cluster to reverify the result. If the initial result and verified result are the same, the chain will approve the computation and add it to the block.

### Ecosystem Fit

Cyborg Network augments the Polkadot ecosystem by ushering in decentralized edge computing, crucial for the growing demand of ai and iot applications. By primarily catering to Web2 application providers, we're paving the way for a fresh wave of users to engage with the Polkadot ecosystem, fueling its expansion.

Though Cyborg and the [Phala Network](https://phala.network/) share aspirations of decentralized computing within the Polkadot/Kusama environment, our technical paths and business aspirations are distinct. Phala leans towards off-chain computation, anchored by a fortified smart contract platform. Our perspective suggests Phala may resonate more with traditional sectors, like health tech, aiming to harness blockchain's innovation. Conversely, our insights show that off-chain computation finds favor with Web2-centric applications. Hence, rather than viewing Phala as a direct rival, we consider them as a complementary entity.

Another related project appears to be [Wetee](https://github.com/wetee-dao), which employs a comparable technical architecture. However, Cyborg leverages software-level privacy mechanisms such as Full Homomorphic Encryption (FHE), providing us with the capability to deploy containerized instances even on non-TEE CPU architectures. We are developing products for a validated market that has already attracted interest from various AI applications and data center providers to join the network once it goes live.

Our ultimate goal is to establish a decentralized edge computing network capable of executing targeted low-latency tasks to enhance system performance and efficiency. This approach aims to reduce cloud expenses without necessarily replacing cloud services, thereby opening up new markets, particularly in real-time computation for edge AI and edge IoT devices.

The technological landscape sees a plethora of competitors, each carving their niche with unique technical and market strategies. Renowned names include [Akash Network](https://akash.network/), and [Golem](https://www.golem.network/) .

## Team :busts_in_silhouette:

### Team members

- [Barath Kanna](https://www.linkedin.com/in/barath-kanna) - Founder & CEO
- [Kresna Sucandra](https://www.linkedin.com/in/kresna-sucandra) - Co-Founder & CTO
- [Megha Varshini](https://www.linkedin.com/in/megha-varshini-t) - Co-Founder & COO
- [Ashi Mishra](https://www.linkedin.com/in/ashi-m-10a692273/) - Senior Substrate Developer
- [Dheeraj Reddy](https://www.linkedin.com/in/dheeraj-reddy/) - Rust Substrate Developer

### Contact

- **Contact Name:** Barath Kanna
- **Contact Email:** barathkannaofficial@gmail.com
- **Website:** https://cyborgnetwork.io

### Team's experience

- [Barath Kanna](https://www.linkedin.com/in/barath-kanna) - A developer with a specialization in Rust and blockchain technology. His experience is rooted in designing blockchain infrastructure solutions. Notably, he is an alumni of the Polkadot Blockchain Academy's third cohort at UC Berkeley (Jul - Aug 2023)

- [Kresna Sucandra](https://www.linkedin.com/in/kresna-sucandra) - With three years of work in Rust, Substrate, and INK, Kresna has a foundational background in blockchain solutions. He was the former co-founder and head of protocol development at [Invarch Network](https://invarch.network/) ( Polkadot and Kusama parachain). Beyond this, he is also a Polkadot Ambassador who manages the Polkadot Hub in Bali.

- [Megha Varshini](https://www.linkedin.com/in/megha-varshini-tamilarasan-b1247a212) - She has been involved in operations for Web3 projects and has taken initiatives in the blockchain community. One of her contributions is the establishment of [Indi Verse DAO](https://www.linkedin.com/company/indi-verse-dao), a web 3.0 community in India. Additionally, she is the candidate of the Polkadot Ambassador Program. She is also a graduate from the Polkadot Blockchain Academy's Founders Track at Hong Kong (Jan - Feb 2024)

- [Ashi Mishra](https://www.linkedin.com/in/ashi-m-10a692273/) - Exeperienced Senior Rust and Substrate Developer with experience working for projects like [Bitgreen](https://bitgreen.org/).

- [Dheeraj Reddy](https://www.linkedin.com/in/dheeraj-reddy/) - Aspiring Rust systems engineer who is also a PBA alumni from Developer Track at Berkeley Cohort.

### Team Code Repos

Project GitHub repositories.

- https://github.com/Cyborg-Network - Organization
- https://github.com/Cyborg-Network/cyborg-node
- https://github.com/Cyborg-Network/Cyborg-smart-client

Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine.

- https://github.com/beekay2706
- https://github.com/SHA888
- https://github.com/ashi20192020
- https://github.com/dheeraj07
- https://github.com/Megha2712

### Team LinkedIn Profiles (if available)

- https://www.linkedin.com/in/barath-kanna-23a23a172 
- https://www.linkedin.com/in/kresna-sucandra
- https://www.linkedin.com/in/megha-varshini-tamilarasan-b1247a212

## Development Status :open_book:

We have successfully developed a Rust WebSocket client with a low-key profile, ensuring a seamless connection with our blockchain through off-chain workers. Additionally, we created a proof of concept based on this client. Our initial plan was to proceed with this development. However, based on the Web3 Foundation's recommendation to eliminate centralized entities from our architecture and establish a fully decentralized system from the ground up, we embarked on several research iterations.

Through this process, we identified the potential to establish a decentralized bridge between our smart client and the Substrate blockchain. Leveraging the Parity Bridges repository as a foundation. Once this significant milestone is achieved, our team will shift focus to building custom pallets outlined in the technical architecture to steer our way through to become a parachain on Kusama and eventually on Polkadot.

As part of our transition, we are migrating from WebSockets to utilizing Libp2p as the core connection protocol. Furthermore, Subxt will serve as the standard communication protocol facilitating interaction between the Substrate chain and the off-chain domain. This strategic shift aligns with our commitment to adopting decentralized principles and enhancing the robustness of our system architecture.

We have created a UX demo for a potential user and the development for this grant will look very similar this [Cyborg Network UX demo](https://drive.google.com/file/d/1zrN4TRMDd5ON2xH9F00upcyK-3ofwV4r/view?usp=drivesdk)


## Development Roadmap :nut_and_bolt:

We will be developing a PoC as a part for this grant.

The goal is to achieve a functional system that is capable of scheduling and verifying a batch process ( Shell Script or Docker container) that was executed in an off - chain entity.

### Overview

- **Total Estimated Duration:** 2 months
- **Full-Time Equivalent (FTE):** 2 ( 1 Full time Developers at 1 FTE/month and 2 part time developers each at 0.5 FTE/month)
- **Total Costs:** 10,000 USD

### Milestone 1 - Task Verification System

- **Estimated duration:** 2 months
- **FTE:**  4
- **Costs:** 10,000 USD

#### **Deliverables:**

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | GPLv3 |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1. | Working Demo | We will provide video documentation to help developers understand the process of deploying containered tasks with and without sample datasets.|
| 2. | Task Examples | We will provide example containers and data sets to help programmers understand and execute batch processes. Currently we provide Examples for Docker, Bash, Terraform etc.. |
| 3. | Pallet Rewards v1 | This Substrate module will offer foundational incentives to providers for maintaining consistent network connectivity. Rewards are recalculated hourly in the database based on random connectivity assessments by the edge connect pallet, with daily payout distribution. |
| 4. | Database v1 | This component will be a streamlined database instance dedicated to capturing details about diverse client connections. Its primary function is to facilitate optimal server selection for customers, tailored to their specifications, geographic location, and other criteria. The CyberHub will dynamically retrieve data in response to blockchain events. |
| 5. | CyberHub | CyberHub will be a hybrid backend server in Rust that serves multiple purposes: it routes messages among all connected clients, queries the database, manages events triggered by the blockchain, and submits real-world data to the blockchain, acting as an oracle. The CSC promptly establishes a WebSocket connection with the CyberHub. |


## Future Plans

- **Short term plans:** We intend to use the grant to develop the core functionality of Cyborg Network and to establish ourselves as a Polkadot and Kusama parachain. We will also use the grant to develop our dApp platform and to promote our project in the Polkadot ecosystem.
- **Long term plans:** We intend to build Cyborg Network into a comprehensive decentralized edge computing network, thereby unlocking novel markets, especially in real-time data management for edgeAI and edge IoT devices. We also plan to support additional features like edge server monetization, server hardware management and upgrades over time.

## Additional Information :heavy_plus_sign:

Kresna (CTO) has also contributed to the **InvArch's Web3 Foundation Grant** [Milestone 1](https://github.com/w3f/Grant-Milestone-Delivery/blob/7932b07cc38150701ba8ed034723193f66002975/deliveries/InvArch_M1.md) that has been completed successfully. He also contributed to the  [Chocolate Network](https://substrate.io/ecosystem/projects/chocolate/) as a Substrate developer for their Substrate Builder Program (SBP) Milestone 1 delivery which has been completed successfully.
