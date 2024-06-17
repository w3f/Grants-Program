# EdgeCloud - Distribute AI Workloads Globally with Ease

- **Team Name:** Cyborg Network
- **Payment Address:** 12Enn321pZSZkNtBwsTRxxZTKS9DsGpk8PTkZsnsMjTzrtFa (AssetHub USDT) 
- **DOT Vesting Address:** 15p7mTm9uKt1w7GF3AU1TNPWm4eAHgieTjtfsVVEtqHazpaY
- **Level:** 2

## Project Overview :page_facing_up:

![Untitled design (1)](https://github.com/Cyborg-Network/Grants-Program/assets/93442895/a33de305-fba2-4a43-ac73-fe3736c03b56)

### Overview

This application is a follow up from our successful grant delivery [grant application](https://github.com/w3f/Grants-Program/blob/master/applications/Cyborg.md)

Cyborg Network is developing a DePIN-based marketplace for edge computing servers to help latency-dependent applications scale globally with ease. Users can offload specific low-latency workloads to edge locations while keeping their main deployment in the cloud. Our vision is to act as a crucial middleware on the network's edge, managing these tasks to reduce cloud operation costs while complementing existing cloud services. Since our business focus is enterprise-driven, we prioritize onboarding infrastructure providers who can comply with regulations like SLAs and data privacy laws.

We establish connections with small to medium-sized data centers to address the demands of enterprise-level clients, ensuring that their requirements are fully met. Our primary emphasis lies in delivering tailored service packages, meticulously designed for diverse deployment scenarios. Our overarching goal is to provide users with a service experience reminiscent of the Web 2.0 era.

As part of our previous application, we delivered CyberDock, a product line focused on helping users deploy dockerized containers into our edge server network. We are now focusing on expanding this approach to a new product line called EdgeCloud, which will enable AI apps to distribute workloads based on performance requirements.

A real-time application for EdgeCloud can be found in our [Edge Computing Case Study Draft](https://docs.google.com/document/d/1Dv7xsiFeFKk4Z3_N0cOPn_pMkXtxraCZlygVMO7PdqM/edit?usp=drive_link), which also highlights the significance of the solution.

We will also be launching a line of pre-configured edge servers in partnership with [Simply NUC](https://simplynuc.com/), our hardware partner. Interested community members in high-demand locations will have the opportunity to purchase and operate these servers either in a co-location data center (recommended) or in their private facility (beta). They will be incentivized based on uptime guarantees and the work contributed to the network, similar to mining in PoW chains.

We are on a mission to establish Cyborg Network as a Polkadot parachain. Our decision is anchored in several key reasons:

First, we're enticed by their advanced interoperable features, such as shared security and XCM. These functionalities pave the way for seamless integrations with other projects within the ecosystem. We have already initiated talks with a few ecosystem teams like [Peaq](https://www.peaq.network/), [Tanssi](https://www.tanssi.network/), [Ava Protocol](https://avaprotocol.org/) for potential integrations

Second, the unparalleled ecosystem and technical support provided by Polkadot and Kusama have been instrumental in our development, and we've had the privilege of closely collaborating with them over the years.

Lastly, the substrate framework stands out as the premier tool for crafting blockchains from the ground up in today's landscape. Our commitment to excellence aligns with the capabilities it offers.

### Project Details

#### Architecture:

The core of our computing solution relies on both off-chain components and substrate pallets that work harmoniously with each other.

Cyborg is a fusion of a blockchain network and numerous computing clusters, collaborating to offer an effective decentralized solution for verifiable off-chain computing.

Our current goal is to leverage the potential of Substrate to enable coherence among geographically isolated worker nodes. This will create a blockchain-governed task distribution system based on load in different locations globally.

![photo_2024-02-14_23-43-17](https://github.com/Cyborg-Network/Grants-Program/assets/93442895/d50e7582-8f0f-461a-8668-10a828089404)

The Substrate blockchain primarily serves as the framework for deploying containered tasks and facilitating smart contracts related to billing functions.

Once the docker container is deployed, its workload will be protected by software based measures to prevent data leakage.

It seamlessly integrates with the current cloud-native toolchain for developers, typically avoiding the need for code changes.
 
Developers can monitor details such as resource utilization and application health status through the Cyborg Connect application dashboard.

![dashboard](https://github.com/Cyborg-Network/Grants-Program/assets/93442895/90f160c6-5cef-408b-8db2-c3e550fdb6a8)

### Task Distribution System

For this grant application, We will improvise our previous submission to make it live on Rococo and then proceed with developing a decentralized task distribution system to incorporate an on-chain load balancing system for containerized tasks executed in an off-chain environment. The main components will include the Cyborg AppChain, which will be deployed on Tanssi's Dancebox testnet, the client interface (K3s worker system), an Oracle, and a testing suite.

The objective is to deploy a multi-container Docker application into our K3s cluster and manage task distribution across various worker nodes in different geographical locations based on user requirements. The Substrate blockchain will establish secure communication with the K3s master node to issue commands for load balancing and task distribution.

We will define a new Substrate node configuration for the Cyborg worker nodes, which users can rent on demand from the pool of available worker nodes.

The system will initially consist of 1 master node and 1 worker node. The application will run on the worker node initially, and users can add additional worker nodes in different locations as needed. Users will update YAML files on each server based on their requirements. The system will provide logs and usage metrics to users for monitoring and optimization purposes.

### Ecosystem Fit

Cyborg Network enhances the Polkadot ecosystem with decentralized edge computing, addressing the increasing demand for AI and IoT applications. We focus on Web2 application providers, opening doors for new users to join the Polkadot ecosystem and support its growth.We are also integrating enterprises that operate edge data centers into the Polkadot ecosystem. Some of our potential partners include [Edge Centres](https://edgecentres.com/), [Deep Green](https://deepgreen.energy/) , [Heata](https://www.heata.co/) etc.

Though Cyborg and the [Phala Network](https://phala.network/) share aspirations of decentralized computing within the Polkadot/Kusama environment, our technical paths and business aspirations are distinct. Phala Network provides off-chain compute infrastructure for smart contract-based applications by enabling users to integrate 'phat' contracts with their existing smart contract logic. While Cyborg is focused on creating utility for web2 applications.

Another related project appears to be [Wetee](https://github.com/wetee-dao), which employs a comparable technical architecture utilizing TEEs to safeguard user privacy. However, their specific market focus is currently untraceable. We are developing products for a validated market that has already attracted interest from various AI applications and 50 edge data center providers to join the network once it goes live.

![Write here](https://github.com/Cyborg-Network/Grants-Program/assets/93442895/a09109d1-e8f7-4ae5-8f4c-2eafc4b6ef6a)

Our ultimate goal is to establish a decentralized edge computing network capable of executing targeted low-latency tasks to enhance system performance and efficiency. This approach aims to reduce the overall cloud footprint by providing an edge-to-cloud continuum, allowing users to augment our services with their existing cloud deployments. This, in turn, opens up new markets, particularly in real-time computation for edge AI and edge IoT devices.

The technological landscape sees a plethora of competitors, each carving their niche with unique technical and market strategies. Renowned names include [Akash Network](https://akash.network/), and [Golem](https://www.golem.network/) .

## Team :busts_in_silhouette:

### Team members

- [Barath Kanna](https://www.linkedin.com/in/barath-kanna) - Founder & CEO
- [Megha Varshini](https://www.linkedin.com/in/megha-varshini-t) - Founder & COO
- [Calvin Sze](https://www.linkedin.com/in/calvin-sze/) - Lead Fullstack Developer
- [Dheeraj Reddy](https://www.linkedin.com/in/dheeraj-reddy/) - Rust Substrate Developer
- [Kresna Sucandra](https://www.linkedin.com/in/kresna-sucandra) - Substrate Advisor

### Contact

- **Contact Name:** Barath Kanna
- **Contact Email:** barathkannaofficial@gmail.com
- **Website:** https://cyborgnetwork.io

### Legal Structure

- **Registered Address:** 1111b South Governors Avenue, Dover, DE 19904 US
- **Registered Legal Entity:** ResoluteX Labs, Inc.

### Team's experience

- [Barath Kanna](https://www.linkedin.com/in/barath-kanna) - A developer with a specialization in Rust and blockchain technology. His experience is rooted in designing blockchain infrastructure solutions. Notably, he is an alumni of the Polkadot Blockchain Academy's third cohort at UC Berkeley (Jul - Aug 2023)

- [Megha Varshini](https://www.linkedin.com/in/megha-varshini-tamilarasan-b1247a212) - She has been involved in operations for Web3 projects and has taken initiatives in the blockchain community. One of her contributions is the establishment of [Indi Verse DAO](https://www.linkedin.com/company/indi-verse-dao), a web 3.0 community in India. Additionally, she is the candidate of the Polkadot Ambassador Program. She is also a graduate from the Polkadot Blockchain Academy's Founders Track at Hong Kong (Jan - Feb 2024)
  
- [Calvin Sze](https://www.linkedin.com/in/calvin-sze/) - Full Stack Blockchain Developer with 5 plus years of experience in blockchain development. He is a PBA alumni from Berkeley.

- [Dheeraj Reddy](https://www.linkedin.com/in/dheeraj-reddy/) - Aspiring Rust systems engineer who is also a PBA alumni from Developer Track at Berkeley Cohort.

- [Kresna Sucandra](https://www.linkedin.com/in/kresna-sucandra) - With three years of work in Rust, Substrate, and INK, Kresna has a foundational background in blockchain solutions. He was the former co-founder and head of protocol development at [Invarch Network](https://invarch.network/) (Polkadot and Kusama parachain). Beyond this, he is also a Polkadot Ambassador who manages the Polkadot Hub in Bali.

### Team Code Repos

Project GitHub repositories.

- https://github.com/Cyborg-Network - Organization
- https://github.com/Cyborg-Network/cyborg-chain
- https://github.com/Cyborg-Network/cyborg-connect
- https://github.com/Cyborg-Network/Worker

Team Github Handles.

- https://github.com/beekay2706
- https://github.com/ZCalz
- https://github.com/dheeraj07
- https://github.com/Megha2712

### Team LinkedIn Profiles

- https://www.linkedin.com/in/barath-kanna
- https://www.linkedin.com/in/megha-varshini-t
- https://www.linkedin.com/in/calvin-sze/
- https://www.linkedin.com/in/kresna-sucandra

## Development Status :open_book:

We initially developed a Rust WebSocket client with a low-key profile, ensuring a seamless connection with our blockchain through off-chain workers. Additionally, we created a proof of concept based on this client. Our initial plan was to proceed with this development. However, based on the recommendation from the W3F grants team during our [previous application](https://github.com/w3f/Grants-Program/pull/1933) to eliminate centralized entities from our architecture and establish a fully decentralized system from the ground up, we embarked on several research iterations.

Through this process, we identified the potential of using connected clusters than indivdual instances for better management efficiency, We are currently building an on chain work verifcation system. Our team will shift focus to building custom pallets outlined in the technical architecture to steer our way through to become a parachain on Kusama and eventually on Polkadot.

As part of our transition, we are migrating from WebSockets to utilizing Libp2p as the core connection protocol. Furthermore, Subxt will serve as the standard communication protocol facilitating interaction between the Substrate chain and the off-chain domain. This strategic shift aligns with our commitment to adopting decentralized principles and enhancing the robustness of our system architecture.

We have created a UX demo for a potential user and the development for this grant will look very similar to this [Cyborg Network UX demo](https://drive.google.com/file/d/1zrN4TRMDd5ON2xH9F00upcyK-3ofwV4r/view?usp=drivesdk)


## Development Roadmap :nut_and_bolt:

We will be developing a PoC as a part for this grant.

The goal is to achieve a functional system that is capable of scheduling and verifying a batch process (Shell Script or Docker container) that was executed in an off - chain entity.

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
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how users can (for example) deploy docker images using our interface. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1. | Working Demo | We will provide video documentation to help developers understand the process of deploying containered tasks.|
| 2. | Task Examples | We will provide example containers and data sets to help programmers understand and execute batch processes. Currently we provide Examples for Docker, Bash, Terraform etc.. |
| 3. | Substrate Module: Verification | This pallet will be responsible for assign the task to a secondary cluster for result verification. Once verifed the accepted result will be added to the block. |
| 4. | Substrate Module: Edge Connect| This pallet will posses the logic for schedluing tasks to a specific cluster that matches the required specifications|
| 5. | Worker K8S Operator | The k8s worker acts as a trusted controller. It securely stores deployment states, including manifests and defined secrets. Based on the manifests, the Worker uses remote attestation to authenticate the task exceution process.. |
| 6. | Worker logs | The execution logs of the deployed container to serve as a proof of work. |

## Future Plans

- **Short term plans:** We intend to use the grant to develop the core functionality of Cyborg Network and also be encouraged to develop this product further to an MVP that can address latency issues in applications that work on real time data processing.
- **Long term plans:** We intend to build Cyborg Network into a comprehensive decentralized edge computing network, thereby unlocking novel markets, especially in real-time data management for edgeAI and edge IoT devices. We also plan to support additional features like edge server monetization, server hardware management and upgrades over time.

## Additional Information :heavy_plus_sign:

Cyborg Network was a part of the [Polkadot Relayers Incubator 2023](https://www.polkadotglobalseries.com/incubator/) and [Polkadot Encode Accelerator 2023](https://www.encode.club/encode-polkadot-accelerator-2023).

We won the [web3hackx](https://www.hkweb3month.com/hackathon) Hackathon - Hong Kong (Nov 2023) in the Infrastructure track and Polkadot Bounty.

Megha Varshini (COO) - represented Cyborg Network at the Finals (Top 7 teams) of the PBA pitch Contest in Hong Kong (Feb 2024)

Kresna (CTO) has also contributed to the **InvArch's Web3 Foundation Grant** [Milestone 1](https://github.com/w3f/Grant-Milestone-Delivery/blob/7932b07cc38150701ba8ed034723193f66002975/deliveries/InvArch_M1.md) that has been completed successfully. He also contributed to the  [Chocolate Network](https://substrate.io/ecosystem/projects/chocolate/) as a Substrate developer for their Substrate Builder Program (SBP) Milestone 1 delivery which has been completed successfully.

Cyborg Network has been inducted into the [Polkadot Alpha Builder's Program](https://polkadot.network/development/alpha/) in March 2024.
