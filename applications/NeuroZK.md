# NeuroZK - Empowering AI at the edge with zero-knowledge proofs.

- **Team Name:** Cyborg Network
- **Payment Address:** 14zJseuDH5WvWXKKyc6svecBrLQ5CyoJkZN3SxYioRRC2ZsY (AssetHub USDT) 
- **DOT Vesting Address:** 15p7mTm9uKt1w7GF3AU1TNPWm4eAHgieTjtfsVVEtqHazpaY
- **Level:** 2

## Project Overview :page_facing_up:

![Untitled design (1)](https://github.com/Cyborg-Network/Grants-Program/assets/93442895/a33de305-fba2-4a43-ac73-fe3736c03b56)

### Overview

This application is a follow up from our successful [grant delivery](https://github.com/w3f/Grant-Milestone-Delivery/pull/1196)

Cyborg Network is developing a DePIN-based marketplace for edge computing resources, enabling latency-sensitive applications to scale globally with ease. Users can seamlessly offload specific low-latency workloads to edge locations while maintaining their core deployment in the cloud. Our vision is to serve as essential middleware at the network edge, orchestrating these tasks to reduce cloud operational costs and enhance existing cloud services. In response to user demand and recognizing the growing importance of distributed AI inference infrastructure, we are prioritizing the development of a decentralized AI compute platform leveraging ZK proofs as our go-to-market strategy.

As part of our previous application, we delivered CyberDock, a product line focused on helping users deploy dockerized containers into our edge server network. We are now focusing on expanding this approach to a new product line called NeuroZK, which will enable AI apps to run Inference Engines backed by ZK proofs.

Users can easily run GPU based inference engines in our crowdsoruced GPU network, with compute integrity verified using a ZK SNARK proof that proves that the inference algorithm was executed with 100% accuracy without revealing the actual inference algorithm nor the query or result data.

We are on a mission to establish Cyborg Network as a Polkadot parachain. Our decision is anchored in several key reasons:

First, we're enticed by their advanced interoperable features, such as shared security and XCM. These functionalities pave the way for seamless integrations with other projects within the ecosystem. We have already initiated talks with a few ecosystem teams like [Peaq](https://www.peaq.network/), [Tanssi](https://www.tanssi.network/), [Ava Protocol](https://avaprotocol.org/) for potential integrations.

Second, the unparalleled ecosystem and technical support provided by Polkadot and Kusama have been instrumental in our development, and we've had the privilege of closely collaborating with them over the years.

Lastly, the substrate framework stands out as the premier tool for crafting blockchains from the ground up in today's landscape. Our commitment to excellence aligns with the capabilities it offers.

We will also be launching a line of pre-configured edge servers in partnership with [Simply NUC](https://simplynuc.com/), our hardware partner. Interested community members in high-demand locations will have the opportunity to purchase and operate these servers either in a co-location data center (recommended) or in their private facility (beta). They will be incentivized based on uptime guarantees and the work contributed to the network, similar to mining in PoW chains.


### Project Details

#### Architecture:

The core of our computing solution relies on both off-chain components and substrate pallets that work harmoniously with each other.

Cyborg is a fusion of a blockchain network and numerous computing clusters, collaborating to offer an effective decentralized solution for verifiable off-chain computing.

Our current goal is to leverage the potential of Substrate to enable coherence among geographically isolated worker nodes. This will create a blockchain-governed task distribution system based on load in different locations globally.

![photo_2024-02-14_23-43-17](https://github.com/Cyborg-Network/Grants-Program/assets/93442895/d50e7582-8f0f-461a-8668-10a828089404)

The Substrate blockchain primarily serves as the framework for deploying containered tasks and facilitating smart contracts related to billing functions.

Once the docker container is deployed, its workload will be protected by software based measures to prevent data leakage.

It seamlessly integrates with the current cloud-native toolchain for developers, typically avoiding the need for code changes.
 
Developers can monitor details such as resource utilization, and the app's health status through the Cyborg Connect application dashboard.

![dashboard](https://github.com/Cyborg-Network/Grants-Program/assets/93442895/90f160c6-5cef-408b-8db2-c3e550fdb6a8)

### ZK Snark proof verification 

For this grant application, we will improvise our previous submission to make it live on Paseo and then proceed with developing a decentralized proof verification system to incorporate an on-chain ZK Snark system for verifying AI inference models executed in an off-chain environment. The main components will include the Cyborg AppChain (Deployed on Tanssi's Dancebox testnet), Cyborg Worker node (A custom node implementation to manage running offchain tasks and streaming proofs into pallets for verification), TEE Oracle, and a testing suite.

The objective is to deploy a pre trained AI inference model in servers at different geographical locations based on user requirements. The Substrate blockchain will establish secure communication with worker nodes to issue commands for deploying, testing, and verifying model executions.

We will define a new Substrate node configuration for the Cyborg worker nodes, which users can rent on-demand from the pool of available worker nodes.

### ZK Proof Verification process

Once a task is assigned to a particular worker node and it starts executing the task, at fixed intervals of time (currently arbitrarily set to 60 minutes), the ZK worker component in the worker node will generate a SNARK proof using the PLONK algorithm. We will use an oracle to convey this proof to the verifier pallet, which will evaluate the received proof using the verification key and public data inputs that the user submitted before execution.

The pallet performs a series of elliptic curve operations and field arithmetic (over finite fields) to check the polynomial commitments and evaluations provided in the proof. The commitments must match the expected public inputs and satisfy the polynomial equations set by the PLONK circuit.Permutation arguments and other constraints encoded into the circuit are also validated at this stage. The Pallet checks whether all evaluations and commitments hold for the circuit, using the verification key. If they match, the proof is accepted as valid; otherwise, it is rejected. Once the verification succeeds, the transaction is processed as valid (e.g., approving the computation result). If the verification fails, the transaction is reverted or flagged as invalid.


### Ecosystem Fit

Cyborg Network enhances the Polkadot ecosystem with decentralized edge computing, addressing the increasing demand for AI and IoT applications. We focus on Web2 application providers, opening doors for new users to join the Polkadot ecosystem and support its growth. We are also integrating enterprises that operate edge data centers into the Polkadot ecosystem. Some of our potential partners include [Edge Centres](https://edgecentres.com/) , [Deep Green](https://deepgreen.energy/) , [Heata](https://www.heata.co/) etc.

Though Cyborg and the [Phala Network](https://phala.network/) share aspirations of decentralized computing within the Polkadot/Kusama environment, our technical paths and business aspirations are distinct. Phala Network provides off-chain compute infrastructure for smart contract-based applications by enabling users to integrate 'phat' contracts with their existing smart contract logic. While Cyborg is focused on creating utility for web2 applications.

Another related project appears to be [Wetee](https://github.com/wetee-dao), which employs a comparable technical architecture utilizing TEEs to safeguard user privacy. However, their specific market focus is currently untraceable.

![Write here](https://github.com/Cyborg-Network/Grants-Program/assets/93442895/a09109d1-e8f7-4ae5-8f4c-2eafc4b6ef6a)

Our ultimate goal is to establish a decentralized edge computing network capable of executing targeted low-latency tasks to enhance system performance and efficiency. This approach aims to reduce the overall cloud footprint by providing an edge-to-cloud continuum, allowing users to augment our services with their existing cloud deployments. This, in turn, opens up new markets, particularly in real-time computation for edge AI and edge IoT devices.

The technological landscape sees a plethora of competitors, each carving their niche with unique technical and market strategies. Renowned names include [Akash Network](https://akash.network/), and [Golem](https://www.golem.network/) .

## Team :busts_in_silhouette:

### Team members

- [Barath Kanna](https://www.linkedin.com/in/barath-kanna) - Founder & CEO
- [Megha Varshini](https://www.linkedin.com/in/megha-varshini-t) - Founder & COO
- [Calvin Sze](https://www.linkedin.com/in/calvin-sze/) - Lead Fullstack Developer
- [Noor Mohammed](https://www.linkedin.com/in/noormohammedb/) - Substrate and Backend Developer
- [O Wahyudi](https://www.linkedin.com/in/sgid8t2c/) - Senior Backend Engineer
- [Tom Bleek](https://www.linkedin.com/in/tom-bleek-a7332b182/) - Front End Developer
- [Kresna Sucandra](https://www.linkedin.com/in/kresna-sucandra) - Substrate Advisor

### Contact

- **Contact Name:** Barath Kanna
- **Contact Email:** barath@cyborgnetwork.io
- **Website:** https://cyborgnetwork.io

### Legal Structure

- **Registered Address:** 1111b South Governors Avenue, Dover, DE 19904 US
- **Registered Legal Entity:** ResoluteX Labs, Inc.

### Team's experience

- [Barath Kanna](https://www.linkedin.com/in/barath-kanna) - A developer with a specialization in Rust and blockchain technology. His experience is rooted in designing blockchain infrastructure solutions. Notably, he is an alumni of the Polkadot Blockchain Academy's third cohort at UC Berkeley (Jul - Aug 2023)

- [Megha Varshini](https://www.linkedin.com/in/megha-varshini-tamilarasan-b1247a212) - She has been involved in operations for Web3 projects and has taken initiatives in the blockchain community. One of her contributions is the establishment of [Indi Verse DAO](https://www.linkedin.com/company/indi-verse-dao), a web 3.0 community in India. Additionally, she is the candidate of the Polkadot Ambassador Program. She is also a graduate from the Polkadot Blockchain Academy's Founders Track at Hong Kong (Jan - Feb 2024)
  
- [Calvin Sze](https://www.linkedin.com/in/calvin-sze/) - Full Stack Blockchain Developer with 5 plus years of experience in blockchain development. He is a PBA alumni from Berkeley.

- [Noor Mohammed](https://www.linkedin.com/in/noormohammedb/) - Noor Mohammed B is a skilled blockchain developer with a strong focus on backend development, DevOps, and system development. With over three years of experience in Rust programming, he has worked extensively on decentralized applications within the EVM and Polkadot ecosystems. Noor is also proficient in network programming and has contributed significantly to building scalable and secure backend systems.

- [Tom Bleek](https://www.linkedin.com/in/tom-bleek-a7332b182/) - Tom Bleek is a dedicated and enthusiastic front-end developer focused on building high-performance front-end applications with an exciting appearance / Substrate and React developer focused on building secure blockchains and high-performance dApps with an exciting appearance. With his
experience in React and TypeScript Tom has played a key role in bringing projects to life, enhancing both the performance and user experience of complex web applications.

- [Onggo Wahyudi](https://www.linkedin.com/in/sgid8t2c/) - Yudi is a specialist in backend development, with expertise in Rust and Substrate for blockchain projects. He excels in DevSecOps and AWS Cloud, and he graduated from the Polkadot Blockchain Academy in Singapore.

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
- https://github.com/noormohammedb
- https://github.com/tom-blk
- https://github.com/oWahyudi
- https://github.com/Megha2712

### Team LinkedIn Profiles

- https://www.linkedin.com/in/barath-kanna
- https://www.linkedin.com/in/megha-varshini-t
- https://www.linkedin.com/in/calvin-sze
- https://www.linkedin.com/in/noormohammedb
- https://www.linkedin.com/in/tom-bleek-a7332b182
- https://www.linkedin.com/in/sgid8t2c
- https://www.linkedin.com/in/kresna-sucandra

## Development Status :open_book:

We have completed the development of an on-chain task verification system under CyberDock as a part of our previous grant application, it contained three parts - Substrate pallets, Front end app and k3s worker configurations. While task verification made more sense for batch files, we also developed log streaming to provide work proofs for continously running applications.

<img width="1448" alt="7" src="https://github.com/user-attachments/assets/67d7535a-8ea6-4660-8bdd-bc8de22ea639"/>

Through this process, we identified the need for having a much simpler provider onboarding experience, so we are developing a custom node implementation called Cyborg worker nodes using which providers can connect their resources to the Cyborg parachain just by downloading and installing an executable file on their VMs. This also aligns with our focus to launch a plug and play hardware series called 'Cyborg miners' that directly connects to the parachain like an ASIC miner.

Consequently, we will be delivering a ZK based offchain compute verification system, that validates the integrity of executing pre-trained AI models for decentralized AI inferencing on crowdsourced GPUs. For this grant we will use ZK and TEE to uphold data privacy in the system.

We are also working concurrently on integrations with Peaq Network (DID pallet) and [CESS](https://cess.network/) for a decentralized storage product called CyStore. Additionally, we have garnered interest from Peaq to open an HRMP channel for XCM interactions between our chains once we are live.

We have created a UX demo to understand our app flow [Cyborg Network UX demo](https://drive.google.com/file/d/1zrN4TRMDd5ON2xH9F00upcyK-3ofwV4r/view?usp=drivesdk)

## Development Roadmap :nut_and_bolt:

The grant delivery will have 3 distinct parts split into 3 milestones delivered every 2 months,

1. TEE Oracle Implementation:

* Develop an [ORML](https://github.com/open-web3-stack/open-runtime-module-library) based custom oracle for private and secure data exchange
* A custom pallet logic for handling the oracle
* UI updates for Oracle

2. Development of Cyborg Worker Node:

* Cyborg Worker Node defintion and configuration to enable compute providers to directly download executable and deploy worker nodes without clustering
* System Pallets for Cyborg parachain (Payments and Inventory)
* UI updates for Worker Nodes (Currently marked coming soon)

3. NeuroZK - phase 1:

* A RISC Zero based offchain ZK proof generation module
* Pallet implementation for proof verification
* System pallet for parachain (Worker Rewards)

### Overview

- **Total Estimated Duration:** 6 months
- **Full-Time Equivalent (FTE):** 2 ( 1 Full time Developer at 1 FTE/month and 2 part time developers each at 0.5 FTE/month)
- **Total Costs:** 30,000 USD
- **DOT %:** 50%

### Milestone 1 - Cyborg Oracle Implementation

- **Estimated duration:** 2 months
- **FTE:**  4
- **Costs:** 10,000 USD

#### **Deliverables:**

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | GPLv3 |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how users can (for example) deploy docker images using our interface. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to deploy a local cyborg parachain and test the features of this delivery. |
| 1. | Working Demo | We will provide video documentation to help developers understand the process of testing the Orcale implementation.|
| 2. | Substrate Module: Oracle | This pallet will be responsible for establishing communication and regulating the use of an oracle. |
| 3. | Front end App: Cyborg Connect | Updated UI with features to display Task verification and result information from Oracle |
| 4. | Cyborg Oracle | An ORML based oracle implementation to seamless exchange data packets between cyborg parachain and connected offchain clusters|


### Milestone 2 - Cyborg Worker Node Implementation

- **Estimated duration:** 2 months
- **FTE:**  4
- **Costs:** 10,000 USD

#### **Deliverables:**

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | GPLv3 |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how users can launch a cyborg worker node using their local local machine|
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to run a cyborg worker node locally. |
| 1. | Working Demo | We will provide video documentation to help developers understand the process of connecting and managing a cyborg worker node.|
| 2. | Substrate Module: Payments | This pallet will be responsible for estimating the costs for executing a task based on server specifications and time. |
| 3. | Substrate Module: Inventory | This pallet will be responsible for uniquely mapping each worker node uniquely in the onchain inventory to keep track of server status. |
| 4. | Substrate Node implementation: Cyborg Worker | A custom node implementation to contribute compute power to the cyborg parachain and earn rewards for contributions|
| 5. | Cyborg Connect: Provide Compute (Feature)  | The UI implementation to support deployment and management of Cyborg worker nodes|

### Milestone 3 - ZK Verification Layer

- **Estimated duration:** 2 months
- **FTE:**  4
- **Costs:** 10,000 USD

#### **Deliverables:**

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | GPLv3 |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how users can (for example) deploy apps using yaml files through our interface |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| **0e.** | Article | We will publish a medium blog explaining the vision of NueroZK, current features and future plans |
| 1. | Testing suite | We will provide a testing facility to examine the working of ZK verification tool with the Cyborg parachain.|
| 2. | Substrate Module: ZK verifier | This pallet will be responsible for verifying and confirming proofs emitted by the offchain ZK worker through the cyborg oracle. |
| 3. | Cyborg ZK worker | A feature to the Cyborg worker node to posses specific instructions about ZK proof generation for a specific executed AI algorithm|
| 4. | Substrate module: Worker Rewards | A custom pallet that holds the logic of assigning rewards to commited worker nodes for executing user tasks |


## Future Plans

- **Short term plans:** We intend to use the grant to develop the core functionality of Cyborg Network and also be encouraged to develop this product further to an MVP that can address latency issues in applications that work on real time data processing.
- **Long term plans:** We intend to build Cyborg Network into a comprehensive decentralized edge computing network, thereby unlocking novel markets, especially in real-time data management for edgeAI and edge IoT devices. We also plan to support additional features like edge server monetization, server hardware management and upgrades over time.

## Additional Information :heavy_plus_sign:

Cyborg Network was a part of the [Polkadot Relayers Incubator 2023](https://www.polkadotglobalseries.com/incubator/) and [Polkadot Encode Accelerator 2023](https://www.encode.club/encode-polkadot-accelerator-2023).

We won the [web3hackx](https://www.hkweb3month.com/hackathon) Hackathon - Hong Kong (Nov 2023) in the Infrastructure track and Polkadot Bounty.

Megha Varshini (COO) - represented Cyborg Network at the Finals (Top 7 teams) of the PBA pitch Contest in Hong Kong (Feb 2024)

Kresna has contributed to the **InvArch's Web3 Foundation Grant** [Milestone 1](https://github.com/w3f/Grant-Milestone-Delivery/blob/7932b07cc38150701ba8ed034723193f66002975/deliveries/InvArch_M1.md) that has been completed successfully. He also contributed to the  [Chocolate Network](https://substrate.io/ecosystem/projects/chocolate/) as a Substrate developer for their Substrate Builder Program (SBP) Milestone 1 delivery which has been completed successfully.

Cyborg Network has been inducted into the [Polkadot Alpha Builder's Program](https://polkadot.network/development/alpha/) in March 2024.

In June 2024, we secured 3rd place in the [Polkadot Global Series: North America Hackathon](https://www.polkadotglobalseries.com/north-america/) and 2nd place in the [Polkadot Prodigy Hackathon](https://www.polkadotprodigy.com/) for the Web3 & Tooling track.
