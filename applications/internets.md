# Internets Network | Programmable Message-Passing-Neural-Network | Composable Metagraph MVP 

- **Team Name:** Blackfax Labs
- **Payment Details:**
  - **DOT**: 14WDLppuGzyMNLLyuEYgnQ8cRBrayPJW5shP99QJEFPP8mkh
  - **Payment**: 14WDLppuGzyMNLLyuEYgnQ8cRBrayPJW5shP99QJEFPP8mkh (USDC, AssetHub)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

### Overview

Web3 is fragmented. Developers and users are forced to choose an ecosystem to deploy to. Internets (previously Interlayer) is a Programmable Message-Passing-Neural-Network layer 1 blockchain. Internets' purpose is to unify web3 fragmentation by utilising graph theory to create a 'network of networks' - an environment of shared blockchain primitives allowing Interchain application development, deployment, and interaction.

Using Internets' Metagraph and Message Passing pallets we can update and manage the state of multiple blockchains concurrently. This allows the deployment and management of Interchain dApps, enabling developers to build richer applications without being pinholed into selecting an ecosystem, as well as improving existing crosschain interactions such as interacting with multiple networks/dApps simultaneously.

Typically, a multichain dApp is the same application deployed multiple times across multiple chains. While suitable for certain use cases, such as General-Message-Passing precompiles, we present our vision of "Interchain" dApps; 
- Multichain dApp = fragmented deployment across multiple networks (a singular application deployed to multiple chains, using different chains for a shared purpose, application has fragmented deployment)
- Interchain dApp = unified deployment across multiple networks (a singular application deployed to multiple chains, using different chains for different purposes, application has unified deployment) 

We envision a future where users interact with web3 in a similar way to web2. Multiple chains will play a part in creating "Interchain" dApps. An example of an Interchain dApp;
- Crust for storage
- Moonbeam for execution
- Hydration for liquidity
- AssetHub for native tokens
- Hyperbridge for cross-chain token movement

#### Integration with Substrate and Polkadot

Internets comprises of three pallets built with substrate and operates as a Polkadot rollup. 

#### Team interest

We are passionate about building a unified and decentralised web that is used by the entire world. We believe the future will be multichain, with many use-case specific chains operating in unison to create singular applications. I (Alex) originally started building a carbon sequestration network in Substrate in September 2021. I envisoned a fully decentralised carbon credit, and quickly discovered that my vision was not possible with current technology - this inspired me to focus on fundamental web3 infrastructure to enable developers to build the applications they currently cannot. 

The team shares a passion for the intersection of design and technology. We feel many projects with strong technology are let down by poor design and product. We aim to create products with real market fit, strong design principles, and even stronger technology behind the scenes. 

### Project Details

[Pitch Deck](https://drive.google.com/file/d/1MMrlXsccbr71fngDOHhu0aSMAU6AaCkc/view?usp=drivesdk)

 #### Technology stack
- Metagraph Pallet - native nodes and edges
- Message Passing Pallet - native messages for the Metagraph 
- Compose Pallet - modify nodes, edges, and messages, allowing the creating of new primitives
- Internets Polkadot SDK - runtime pallets
- Internets EVM SDK - Solidity precompiles to interact with pallets
- Internets Typescript SDK - internets.js, typescript 
- Internets Substrate Node - a Polkadot rollup
 
#### Scope

- V1 = Composable Metagraph MVP (Metagraph Pallet + Compose Pallet) 
- V2 = Programmable Message-Passing-Neural-Network MVP (Metagraph Pallet + Compose Pallet + Message Passing Pallet)

![Version](https://i.imgur.com/sjBTMXB.jpeg)

The goal of this grant and the milestones is to produce the Metagraph Pallet MVP, Metagraph typescript SDK, Compose Pallet MVP, Metagraph Pallet Web UI, Compose Pallet Web UI - resulting in a Composable Metagraph MVP V1 Substrate Chain and interface. 

We may be able to successfully implement message passing during this time, turning it into a fully functional Message-Passing-Neural-Network, but the goal here is specifically to complete the Metagraph pallet, Metagraph typescript SDK, and the Compose pallet. Further work needs completion for message passing, mainly consisting of research and testing. 

Crucially, the Composable Metagraph MVP resulting from these milestones will be functional enough for a testnet to be released, allowing the development of Metagraph Interprimitives. 

#### Interprimitives

Internets Networks native primitives (nodes, edges, messages) can be modified by the "Compose" pallet, allowing unique configuration. We refer to these as "Interprimitives". 

A collection of Interprimitives is referred to as a net, and many nets will exist in tandem (Internets!). Nets provide an environment to deploy, manage, and interact with existing primitives from other blockchains, as well as newly created Internets Network primitives and non-blockchain primitives.

![Primitives](https://i.imgur.com/d8ZcCC7.jpeg)

**Grant Scope: Composable Metagraph MVP includes**
* Building all necessary components for Metagraph pallet MVP 
* Building all necessary compontents for Compose pallet MVP
* Building all neccesary components for Metagraph pallet typescript SDK
* Building all neccesary components for Metagraph pallet Web UI
* Building all neccesary components for Compose pallet Web UI
* Assembling the Substrate Chain - Composable Metagraph MVP
* Developer Documentation for the Metagraph Pallet and Compose Pallet
* Four Publications - 1. Overview of the Internets Network 2. Overview of the Metagraph pallet 3. Overview of the Compose pallet 4. Overview of the grant and milestones

**Future development**
* Compose Pallet Typescript SDK
* Metagraph Pallet EVM SDK
* Metagraph Pallet Polkadot SDK
* Message Passing Pallet (becoming a fully functional Message-Passing-Neural-Network) 
* Internets Network Polkadot SDK (Message-Passing-Neural-Network and Compose)
* Internets Network EVM SDK (Message-Passing-Neural-Network and Compose)
* Internets Network Typescript SDK (Message-Passing-Neural-Network and Compose)
* Internets Network web UI (Message-Passing-Neural-Network and Compose)

### Ecosystem Fit

- Polkadot cores are essential to our architecture. Initally, we were planning to leveragre Polkadots security and interoperability as a parachain. We were relatively close to a final model when JAM was revealed. After studying the greypaper, we decided to restructure our architecture to optimise for a core-centric blockchain. 
- Initially the core target audience will be developers and existing teams/rollups/dApps within the Polkadot ecosystem, followed by projects on other ecosystems that have no polkadot exposure, and development of new projects from the ground up using Internets - both existing web2 and novel projects. 
- All developers and users face the same problem; where should I deploy my resources? Often, our decision is pressured by popularity and access to users. Internets will unify applications into a cohesive and Interchain state. We hope to end the constant scramble to move to and deploy popular ecosystems. We would like to bring all networks and users into the Polkadot ecosystem. 
- We have not identified any projects with the same vision and implementation of an Interchain world. Crosschain protocols like hyperbridge will work in tandem with Internets. 

![Core](https://i.imgur.com/zJ1xnnq.jpeg)

## Team :busts_in_silhouette:

### Team members

- Alexander Curtis | CEO & Lead Developer | team leader, backend development, architecture, research
- Yesica Danderfer | VP of Design | product manager, UI, UX, research assist, team organisation, documentation, product design
- Mariano Miguel | UI/UX/Product | frontend development, UI, UX, product engineer

### Contact

- **Contact Name:** Alexander Curtis
- **Contact Email:** alexandercurtis095@gmail.com
- **Website:** https://blackfax.io

### Legal Structure

- **Registered Address:** - not incorporated 
- **Registered Legal Entity:** - not incorporated

### Team's experience

- Alexander
  - Early bitcoin miner and active participant in blockchain since inception, witnessed the entire industry emererge, providing unique perspective on products 
  - Over a decade studying mathematics (with a particular focus on graph theory), finance & economics, quantitative analysis, computer science
  - Over 15 years programming experience, 3+ years developing in Rust and Substrate, beginning September 2021
  - Early Polkadot adopter 
  - Polkadot Blockchain Academy Alumni, Cohort 1, Cambridge
  
- Yesi
  - Yesi contributed to the team that introduced Spotify's marketing efforts to bring people together through music, social media and their love for Star Wars in the campaigns that occured during the franchise's revival back in 2015.
  - In the most crucial time of LinkedIn's rebranding, Yesi collaborated with them on communication and design to help the brand form meaningful partnerships through presentations, documentation, and overall the most impactful introductions with other brands such as Cannnes Festival, Audi, Maserati, among others.
  - In the early days of AI (2019) Yesi worked with Dolby on the creative direction of their Dolby AI products, improving the user experience, visuals and all digital forms of communication in their alliances with Disney and Pixar.

- Mariano
  - Helped Graphite Health (software company creating the first universally computable representation of health data and a platform for the frictionless exchange of health data) build and launch their 2023 rebrand. Sole developer, responsible for the entire front-end as well as implementing a Sanity CMS backend for content management and custom API's to integrate with third-party systems.
  - Technical partner of Looking Glass (3D digital spaces live in the real world through holographic display interfaces. 3D in real life, no VR or AR headgear required) from 2016 to 2022. We started with a WordPress + WooCommerce website (PHP environment) and then moved into a custom Vue front-end powered by the Shopify API. We also built a custom service that would process 2D photos and use AI to generate a depth map. This was powered by React and Firebase. 
  - Worked with LinkedIn through a variety of tasks including web development for public marketing pages and internal pages, as well as responsive email templates for their marketing and education teams. 

### Team Code Repos

- https://github.com/blackfax-labs/internets
- [Alexander](https://github.com/adotlex)
- [Mariano](https://github.com/MarianoMiguel)
- [Yesi](https://github.com/yesidanderfer)

### Team LinkedIn Profiles

- [Alexander](https://www.linkedin.com/in/adotlex)
- [Yesi](https://www.linkedin.com/in/ydanderfer)
- [Mariano](https://www.linkedin.com/in/mariano-miguel)


## Development Status :open_book:

A tremendous amount of time and effort went into the architecture and research neccessary to reach this stage. From the start, my goal was always to build the most useful thing, "the thing that needs building". As a result it has gone through several radical redesigns as the scope and vision shifted. Initially envisioned as a contract management platform, it soon became Interlayer, an on-chain storage / query network. I presented this briefly at Decoded 2024. This made its way to near completion before I realised we needed something far more fundamentally impactful. 

We have done a LOT of work on product design and branding. We will be releasing out many of these assets over the coming weeks as they reach completion. 

We have a basic web landing page, mainly as a contact point. 
- https://internets.network

Some research on metagraphs, as they are hard to find information on; 
- Metagraphs and Their Applications | https://link.springer.com/book/10.1007/978-0-387-37234-1
- MGtoolkit: A python package for implementing metagraphs | https://roughan.info/papers/mgtoolkit_paper.pdf

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 6 weeks
- **Full-Time Equivalent (FTE):**  3.0 FTE
- **Total Costs:** $28,842
- **DOT %:** 50%

### Milestone 1 — Metagraph Pallet MVP 1/2 (Nodes), Metagraph UI/UX Wireframe 


- **Estimated duration:** 1 weeks
- **FTE:**  3.0
- **Costs:** 4,807 USD


| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can spin up one of our Substrate nodes and create Metagraph Nodes, which will show how the new functionality works. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1. | UX for the Metagraph Pallet | We will explore the developer experience of deployment and management of nodes and edges, this will inform us how the final UI should behave and feel |
| 2. | Medium and Substack Publication | We will publish an article on Medium and Substack giving an overview of the Internets Network |
| 3. | Metagraph (nodes) Gitbook Docs | We will create the developer documentation for the Metagraph nodes |
| 4. | Metagraph (nodes) Pallet | We will develop Part 1 of 2 of the Metagraph pallet, nodes |
| 5. | Metagraph Pallet UI Wireframes | Following UX exploration, we will create wireframes for the Metagraph UI |

### Milestone 2 — Metagraph Pallet MVP 2/2 (Edges), Metagraph Nodes Typescript SDK, Compose Pallet UI/UX Wireframe

- **Estimated Duration:** 2 weeks
- **FTE:**  3.0
- **Costs:** 9,614 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can spin up one of our Substrate nodes and create Metagraph Edges, which will show how the new functionality works. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1. | UX for the Compose Pallet | We will explore the developer experience of using the Compose pallet to modify nodes and edges, this will inform us how the final UI should behave and feel |
| 2. | Medium and Substack Publication | We will publish an article on Medium and Substack giving a deeper dive into the Metagraph pallet, including an overview of both nodes and edges |
| 3. | Metagraph (edges) Gitbook Docs | We will create the developer documentation for the Metagraph edges |
| 4. | Metagraph (complete) Gitbook Docs | We will create the complete developer documentation for the Metagraph, including overview, and incorporating previously completed Nodes and Edges documentation |
| 5. | Metagraph (edges) Pallet | We will develop Part 2 of 2 of the Metagraph pallet, edges |
| 6. | Metagraph (nodes) Typescript SDK | We will develop a typescript SDK for interacting with Metagraph Nodes |
| 7. | Compose Pallet UI Wireframes | Following UX exploration, we will create wireframes for the Compose UI |



### Milestone 3 — Compose Pallet MVP, Internets Chain Composable Metagraph MVP, Metagraph Edges Typescript SDK, Metagraph Pallet Web UI, Compose Pallet Web UI

- **Estimated Duration:** 3 weeks
- **FTE:**  3.0
- **Costs:** 14,421 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can spin up one of our Substrate nodes and use the Compose pallet, which will show how the new functionality works. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an **article**/workshop that explains both pallets we developed, as well as the SDK and Web UI. We will go over each milestone as well as the grant as a whole. |
| 1. | Web UI for the Metagraph | We will develop a fully functional web UI for interacting with the Metagraph pallet |
| 2. | Medium and Substack Publicaton | We will publish an article on Medium and Substack giving a deeper dive into the Compose pallet |
| 3. | Gitbook Docs | We will create the developer documentation for the Compose pallet |
| 4. | Web UI for the Compose Pallet | We will create a basic web UI for interacting with the Compose pallet |
| 5. | Metagraph (edges) Typescript SDK | We will develop a typescript SDK for interacting with the Metagraph Edges |
| 6. | Compose Pallet | We will develop the Compose Pallet |
| 7. | Substrate Chain (Metagraph Pallet + Compose Pallet) | We will release a functional Substrate chain that includes both the Metagraph Pallet and the Compose Pallet |


## Future Plans

### Continue on the road to mainnet launch
- Community Growth campaign
- Business Development outreach
- Launch a public testnet.
- Convert to an incentivized testnet. 
- Convert to mainnet, as a Polkadot rollup.
- Continued development of SDK's and the Message Passing Pallet, detailed above in 'Future Development' 

The team is committed to the project. I (Alexander) have spent 3 years on the research and architecture to get to this stage. We are all personally committed to mainnet maintenance and development. We aim to foster a thriving ecosystem of developers and users. 

Architecture discovery lead to many interesting use-cases emerging. We have been developing novel dApps that would leverage Internets and plan to release a series of applications in the following months. 

We are in talks with various growth agencies to begin developing the community, and have already hired business development (self funded) to begin the next steps of adoption. 

We are in communication with EasyA about participating in their upcoming 360DaysOfPolkadot

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** 
- Web3 Foundation Website

### Milestone Structuring
Before this application the team did extensive discovery into the process and time it would take to reach the Composable Metagraph MVP. The structure of milestones (1 week, 2 weeks, 3 weeks) may be unorthodox but is phased for what we believe to be the most practical delivery pathway. Each milestone is distinct and leads into the next. 
