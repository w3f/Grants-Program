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

First, we're enticed by their advanced interoperable features, such as shared security and XCM. These functionalities pave the way for seamless integrations with other projects within the ecosystem.

Second, the unparalleled ecosystem and technical support provided by Polkadot and Kusama have been instrumental in our development, and we've had the privilege of closely collaborating with them over the years.

Lastly, the substrate framework stands out as the premier tool for crafting blockchains from the ground up in today's landscape. Our commitment to excellence aligns with the capabilities it offers.

### Project Details

#### Architecture:

The core of our computing solution relies on both off-chain components and substrate pallets that work harmoniously with each other.

Our system invites compute providers to download and run our Cyborg Smart Client (CSC) binary as a root, allowing them to become a provider within our network seamlessly. Upon activation, the CSC immediately establishes a subxt connection with the substrate blockchain. 

We've embedded all operational logic within our pallets. Through the Cyborg Connect platform Dapp, which is integrated with our blockchain, customers have direct access to enact actions on the hosted machine. Both providers and customers can utilize our platform to view detailed analytics and metrics pertaining to their instances.

## 1: Connection Flow for the Provider
![8](https://github.com/Cyborg-Network/Grants-Program/assets/93442895/8295b8fe-5ebd-4e7a-b3dd-291e93aa5ac9)

## 2: Customer End
![9](https://github.com/Cyborg-Network/Grants-Program/assets/93442895/cb1c204f-e8e0-4ca2-81c5-23bc0c08d938)

Initially, our goal is to configure the system to support predefined static instances, notably blockchain nodes. Our vision then expands to embracing custom deployments for applications and storage. By evolving in this manner, we aspire to establish ourselves as the premier decentralized computing hub for Polkadot ecosystem projects. Leveraging this infrastructure, we intend to develop transformative products such as:

- A Decentralized Postgres Database
- Decentralized CDN
- Decentralized Personal Drive Storage

These solutions are designed to address real-world challenges while harnessing the security inherent to blockchain technology.

### Ecosystem Fit

Cyborg Network augments the Polkadot ecosystem by ushering in decentralized edge computing, crucial for the growing demand of ai and iot applications. By primarily catering to Web2 application providers, we're paving the way for a fresh wave of users to engage with the Polkadot ecosystem, fueling its expansion.

Though Cyborg and the [Phala Network](https://phala.network/) share aspirations of decentralized computing within the Polkadot/Kusama environment, our technical paths and business aspirations are distinct. Phala leans towards off-chain computation, anchored by a fortified smart contract platform. Our perspective suggests Phala may resonate more with traditional sectors, like health tech, aiming to harness blockchain's innovation. Conversely, our insights show that off-chain computation finds favor with Web2-centric applications. Hence, rather than viewing Phala as a direct rival, we consider them as a complementary entity.

Our ultimate ambition is to become a decentralized edge computing network, thereby unlocking novel markets, especially in real-time computation for edgeAI and edge IoT devices.

The technological landscape sees a plethora of competitors, each carving their niche with unique technical and market strategies. Renowned names include [Akash Network](https://akash.network/), and [Golem](https://www.golem.network/) .

## Team :busts_in_silhouette:

### Team members

- [Barath Kanna](https://www.linkedin.com/in/barath-kanna-23a23a172) - Founder & CEO
- [Kresna Sucandra](https://www.linkedin.com/in/kresna-sucandra) - Co-Founder & CTO
- [Megha Varshini](https://www.linkedin.com/in/megha-varshini-tamilarasan-b1247a212) - Co-Founder & COO

### Contact

- **Contact Name:** Kresna Sucandra
- **Contact Email:** kresnasucandra@gmail.com
- **Website:** https://cyborgnetwork.io

### Team's experience

- [Barath Kanna](https://www.linkedin.com/in/barath-kanna-23a23a172) - A developer with a specialization in Rust and blockchain technology. His experience is rooted in designing blockchain infrastructure solutions. Notably, he is an alumni of the Polkadot Blockchain Academy's third cohort at UC Berkeley (Jul - Aug 2023)

- [Kresna Sucandra](https://www.linkedin.com/in/kresna-sucandra) - With three years of work in Rust, Substrate, and INK, Kresna has a foundational background in blockchain solutions. He was the former co-founder and head of protocol development at [Invarch Network](https://invarch.network/) ( Polkadot and Kusama parachain). Beyond this, he is also a Polkadot Ambassador who manages the Polkadot Hub in Bali.

- [Megha Varshini](https://www.linkedin.com/in/megha-varshini-tamilarasan-b1247a212) - She has been involved in operations for Web3 projects and has taken initiatives in the blockchain community. One of her contributions is the establishment of [Indi Verse DAO](https://www.linkedin.com/company/indi-verse-dao), a web 3.0 community in India. Additionally, she is the candidate of the Polkadot Ambassador Program. She is also a graduate from the Polkadot Blockchain Academy's Founders Track at Hong Kong (Jan - Feb 2024)

### Team Code Repos

Project GitHub repositories.

- https://github.com/Cyborg-Network - Organization
- https://github.com/Cyborg-Network/cyborg-node
- https://github.com/Cyborg-Network/cyberhub [still private]

Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine.

- https://github.com/beekay2706
- https://github.com/SHA888
- https://github.com/Megha2712

### Team LinkedIn Profiles (if available)

- https://www.linkedin.com/in/barath-kanna-23a23a172 
- https://www.linkedin.com/in/kresna-sucandra
- https://www.linkedin.com/in/megha-varshini-tamilarasan-b1247a212

## Development Status :open_book:

We have completed the functional side of Cyborg Smart Client (CSC) and we have lite versions of  CyberHub and Pallet Edge Connect that are configured to work with off chain workers as a PoC and we also have a demo video demonstrating the same.

[Cyborg Network PoC 1 Demo](https://www.youtube.com/watch?v=sSNg0Q_DJyk)

Currently we are migrating the configs from off chain worker to oracle support based on advice from Sacha Lansky during a Hackadot 2023 office hours. We also took development advice from Jimmy Chu during an online mentorship event.

At PBA, Barath Kanna (CEO) was able to communicate the idea of Cyborg Network to various people from Parity and web3 foundation viz: Joshua Cheong, Radha Dasari, Shawn Tabrizi, Rae Deng, Clifton Yeo, Tim Dobie, Max Wegman, Bharghav Bhatt etc. and sought valuable feedback that has greatly improved our approach towards our product.

We have been interacting closely with the square one team at Parity (Nico Morgan and Joshua Cheong) as a part of our application process for the substrate Builder’s program chains track, our application to this grant is based on their recommendation.

## Development Roadmap :nut_and_bolt:

We will be developing our MVP as a part for this grant.

The goal is to achieve a functional system capable of hosting predefined static instances like blockchain nodes.

### Overview

- **Total Estimated Duration:** 4 months
- **Full-Time Equivalent (FTE):** 4 ( 2 Full time Developers at 0.5 FTE/month)
- **Total Costs:** 30,000 USD

### Milestone 1 - Basic functionality (MVP)

- **Estimated duration:** 4 month
- **FTE:**  4
- **Costs:** 30,000 USD

#### **Deliverables:**

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | GPLv3 |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an **article**/workshop that explains [...] (what was done/achieved as part of the grant). (Content, language and medium should reflect your target audience described above.) |
| 1. | Pallet Edge Connect | This Substrate module will facilitate uninterrupted communication between edge servers managed by providers and the Cyborg's Substrate-based blockchain. The primary role of this pallet is to broadcast events that populate the database with server information. Additionally, it sporadically broadcasts events to verify the connectivity of all servers, updating the outcome in the pallet's reward mechanism to adjust incentives accordingly.|
| 2. | Pallet Rewards v1 | This Substrate module will offer foundational incentives to providers for maintaining consistent network connectivity. Rewards are recalculated hourly in the database based on random connectivity assessments by the edge connect pallet, with daily payout distribution. |
| 3. | Database v1 | This component will be a streamlined database instance dedicated to capturing details about diverse client connections. Its primary function is to facilitate optimal server selection for customers, tailored to their specifications, geographic location, and other criteria. The CyberHub will dynamically retrieve data in response to blockchain events. |
| 4. | CyberHub | CyberHub will be a hybrid backend server in Rust that serves multiple purposes: it routes messages among all connected clients, queries the database, manages events triggered by the blockchain, and submits real-world data to the blockchain, acting as an oracle. The CSC promptly establishes a WebSocket connection with the CyberHub. |
| 5. | Substrate chain | Pallet Edge Connect and Pallet Rewards v1 as the part of on-chain component of our chain runtime will interact with & CyberHub in such a way that it updates the database with the latest server connectivity information and reward distribution. |

## Future Plans

- **Short term plans:** We intend to use the grant to develop the core functionality of Cyborg Network and to establish ourselves as a Polkadot and Kusama parachain. We will also use the grant to develop our dApp platform and to promote our project in the Polkadot ecosystem.
- **Long term plans:** We intend to build Cyborg Network into a comprehensive decentralized edge computing network, thereby unlocking novel markets, especially in real-time data management for edgeAI and edge IoT devices. We also plan to support additional features like edge server monetization, server hardware management and upgrades over time.

## Additional Information :heavy_plus_sign:

We are applying for this grant based on the recommendation from the Square One team at Parity as a part of our application to the Substrate Builders Program (SBP).

Kresna (CTO) has also contributed to the **InvArch's Web3 Foundation Grant** [Milestone 1](https://github.com/w3f/Grant-Milestone-Delivery/blob/7932b07cc38150701ba8ed034723193f66002975/deliveries/InvArch_M1.md) that has been completed successfully. He also contributed to the  [Chocolate Network](https://substrate.io/ecosystem/projects/chocolate/) as a Substrate developer for their Substrate Builder Program (SBP) Milestone 1 delivery which has been completed successfully.
