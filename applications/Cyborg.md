# Cyborg Network - Empowering Decentralized Edge Networks

- **Team Name:** Cyborg Network
- **Payment Address:** 12Enn321pZSZkNtBwsTRxxZTKS9DsGpk8PTkZsnsMjTzrtFa (AssetHub USDT) 
- **DOT Vesting Address:** 15p7mTm9uKt1w7GF3AU1TNPWm4eAHgieTjtfsVVEtqHazpaY
- **Level:** 1

## Project Overview :page_facing_up:

![Untitled design (1)](https://github.com/Cyborg-Network/Grants-Program/assets/93442895/a33de305-fba2-4a43-ac73-fe3736c03b56)

### Overview

This application is a follow up from our previous [grant application](https://github.com/w3f/Grants-Program/pull/1933)

Cyborg Network is developing a DePIN based marketplace for edge computing servers to help AI and IoT companies boost their performance while curbing the cloud operations cost, all without necessitating a shift from their current cloud setups. Our vision is to act as a crucial middleware on the network's edge, managing specific low-latency tasks and reduce the costs associated with cloud operations, all the while complementing existing cloud services. As a premier venture of this nature in the Polkadot landscape, our network effortlessly allows providers to integrate their machines, rewarding them for their invaluable contribution.

We establish connections with small to medium-sized data centers to address the demands of enterprise-level clients, ensuring that their requirements are fully met. Our primary emphasis lies in delivering tailored service packages, meticulously designed for diverse deployment scenarios. Our overarching goal is to provide users with a service experience reminiscent of the Web 2.0 era.

We are embarking on an ambitious mission to establish ourselves as a Polkadot and Kusama parachain. Our decision is anchored in several key reasons:

First, we're enticed by their advanced interoperable features, such as shared security and XCM. These functionalities pave the way for seamless integrations with other projects within the ecosystem. We have already initiated talks with a few ecosystem teams like [Peaq](https://www.peaq.network/), [Tanssi](https://www.tanssi.network/), [Oak Network](https://oak.tech/) for potential integrations

Second, the unparalleled ecosystem and technical support provided by Polkadot and Kusama have been instrumental in our development, and we've had the privilege of closely collaborating with them over the years.

Lastly, the substrate framework stands out as the premier tool for crafting blockchains from the ground up in today's landscape. Our commitment to excellence aligns with the capabilities it offers.

### Project Details

#### Architecture:

The core of our computing solution relies on both off-chain components and substrate pallets that work harmoniously with each other.

Cyborg is a fusion of a blockchain network and numerous computing clusters, collaborating to offer an effective decentralized solution for verifiable off-chain computing.

Our initial technological goal is to develop a system capable of validating computational outcomes from one off-chain cluster by re-executing them in another using pallet logic.

![photo_2024-02-14_23-43-17](https://github.com/Cyborg-Network/Grants-Program/assets/93442895/d50e7582-8f0f-461a-8668-10a828089404)

The Substrate blockchain primarily serves as the framework for deploying containered tasks and facilitating smart contracts related to billing functions.

Once the docker container is deployed, its workload will be protected by software based measures to prevent data leakage.

It seamlessly integrates with the current cloud-native toolchain for developers, typically avoiding the need for code changes.
 
Developers can monitor details such as resource utilization and application health status through the Cyborg Connect application dashboard.

![dashboard](https://github.com/Cyborg-Network/Grants-Program/assets/93442895/90f160c6-5cef-408b-8db2-c3e550fdb6a8)

### Work Verification System

For this grant application, we are developing a decentralized task verification mechanism to incorporate an on-chain validation system for containerized tasks executed in an off-chain environment. The main components will include the Cyborg AppChain, which will be deployed on Tanssi's Dancebox testnet, the client interface (K3s worker system), an Oracle, and a testing suite.

![Screenshot 2024-02-15 at 1 09 56 PM](https://github.com/Cyborg-Network/Grants-Program/assets/93442895/add65d92-0bf6-40df-a3fb-715fc0efce54)

The objective is to upload a Docker configuration file and deploy the container inside one of the worker nodes of the K3s cluster. Before deploying the user's Docker image, the system will run a simulation to check for compilation failures or any startup runtime issues. If there are none, we will then proceed with the deployment.

Deployment will follow this pattern: The system will submit the job to 'N' clusters, with 'N' being selectable by the user. However, we will set a minimum value for 'N' to ensure a baseline of accuracy and high fault tolerance. Users can increase the value of 'N' if they desire greater accuracy and fault tolerance. Among the chosen 'N' clusters, 40-50% will be highly trusted nodes, with the remainder being general/new nodes. This strategy ensures that customers receive a valid output. Despite this, the executed computation results will be pushed to the Oracle, which will then feed it to the Cyborg substrate chain. Subsequently, if the baseline accuracy is achieved, the result will be added to the block, and if the output does not match or there are deployment failures, the system will attempt to re-execute the job from the beginning, with a maximum of 'X' retries. The value of 'X' will be adjusted based on the cost calculations for each execution, which are yet to be determined. If the job continues to fail even after 'X' retries, the system will notify the user of the failure by providing detailed logs and request them to assess the reason for the failure. In case of deployment failures, we will assess whether the issue is due to missed edge cases, configuration issues, network instability, or hardware limitations. Based on this assessment, the system will reassign the job to different workers

### Ecosystem Fit

Cyborg Network augments the Polkadot ecosystem by ushering in decentralized edge computing, crucial for the growing demand of AI and IoT applications. By primarily catering to Web2 application providers, we're paving the way for a fresh wave of users to engage with the Polkadot ecosystem, fueling its expansion.

Though Cyborg and the [Phala Network](https://phala.network/) share aspirations of decentralized computing within the Polkadot/Kusama environment, our technical paths and business aspirations are distinct. Phala Network provides off-chain compute infrastructure for smart contract-based applications by enabling users to integrate 'phat' contracts with their existing smart contract logic. While Cyborg is focused on creating utility for web2 applications.

Another related project appears to be [Wetee](https://github.com/wetee-dao), which employs a comparable technical architecture utilizing TEEs to safeguard user privacy. However, their specific market focus is currently untraceable. We are developing products for a validated market that has already attracted interest from various AI applications and 50 small data center providers to join the network once it goes live.

![Write here](https://github.com/Cyborg-Network/Grants-Program/assets/93442895/a09109d1-e8f7-4ae5-8f4c-2eafc4b6ef6a)

Our ultimate goal is to establish a decentralized edge computing network capable of executing targeted low-latency tasks to enhance system performance and efficiency. This approach aims to reduce the overall cloud footprint by providing an edge-to-cloud continuum, allowing users to augment our services with their existing cloud deployments. This, in turn, opens up new markets, particularly in real-time computation for edge AI and edge IoT devices.

The technological landscape sees a plethora of competitors, each carving their niche with unique technical and market strategies. Renowned names include [Akash Network](https://akash.network/), and [Golem](https://www.golem.network/) .

## Team :busts_in_silhouette:

### Team members

- [Barath Kanna](https://www.linkedin.com/in/barath-kanna) - Founder & CEO
- [Megha Varshini](https://www.linkedin.com/in/megha-varshini-t) - Founder & COO
- [Kresna Sucandra](https://www.linkedin.com/in/kresna-sucandra) - Co-Founder & CIO
- [Ashi Mishra](https://www.linkedin.com/in/ashi-m-10a692273/) - Senior Substrate Developer
- [Dheeraj Reddy](https://www.linkedin.com/in/dheeraj-reddy/) - Rust Substrate Developer

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
  
- [Kresna Sucandra](https://www.linkedin.com/in/kresna-sucandra) - With three years of work in Rust, Substrate, and INK, Kresna has a foundational background in blockchain solutions. He was the former co-founder and head of protocol development at [Invarch Network](https://invarch.network/) (Polkadot and Kusama parachain). Beyond this, he is also a Polkadot Ambassador who manages the Polkadot Hub in Bali.

- [Ashi Mishra](https://www.linkedin.com/in/ashi-m-10a692273/) - A Senior Rust and Substrate Developer with experience working for projects like [Bitgreen](https://bitgreen.org/).

- [Dheeraj Reddy](https://www.linkedin.com/in/dheeraj-reddy/) - Aspiring Rust systems engineer who is also a PBA alumni from Developer Track at Berkeley Cohort.

### Team Code Repos

Project GitHub repositories.

- https://github.com/Cyborg-Network - Organization
- https://github.com/Cyborg-Network/cyborg-chain
- https://github.com/Cyborg-Network/Worker

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
