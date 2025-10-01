# Intercaster

- **Team Name:** Intercaster
- **Payment Details:**
  - **DOT**: 16idCRomJEA8xaKEcjGLL6WnKCzybfJfXMgk7MGahJBPSGHF
  - **Payment (USDC)**: 16idCRomJEA8xaKEcjGLL6WnKCzybfJfXMgk7MGahJBPSGHF
- **Level:** 2

## Project Overview :page_facing_up:

### Overview

Intercaster Gateway serves as a specialized message routing parachain connecting Farcaster's social ecosystem with Polkadot's multi-chain infrastructure. The project functions as a Substrate-based parachain that creates a trustless bridge between Farcaster's 350,000+ daily active users and Polkadot's diverse parachain ecosystem. Intercaster Gateway strategically leverages Farcaster's existing Snapchain validation infrastructure while providing efficient cross-chain message routing via native XCMP channels. The project integrates directly into the Polkadot ecosystem as a native parachain built using the Substrate framework, implementing XCMP channels for direct parachain-to-parachain communication and utilizing XCM v4/v5 standards for cross-consensus messaging.

### Project Details

The Intercaster Gateway architecture comprises three core components that work together to enable seamless social-to-blockchain integration. The XCMP Channel Manager Pallet handles direct parachain-to-parachain message routing, dynamic channel establishment and management, and message prioritization and batching to optimize throughput. The Social Context Engine manages Farcaster identity mapping to Polkadot accounts, implements social reputation scoring with cross-chain portability, and tracks engagement metrics that can inform blockchain operations. The XCM Integration Layer provides native XCM v4/v5 message formatting, coordinates cross-chain execution, and handles fee calculation and distribution across the network.

Our technology stack centers on Substrate framework for parachain runtime development, with Rust powering core pallet development for performance and security. TypeScript and JavaScript support SDK and API development for broad developer accessibility, while React enables intuitive developer tools and dashboards. Polkadot-JS facilitates seamless blockchain interactions throughout the system.

The core API specifications include essential functions for XCMP channel management through establish_xcmp_channel which allows parachains to create communication channels with specified configurations, and social message routing via route_social_message which processes social interactions and routes them to appropriate parachains with preserved social context. These APIs enable developers to integrate social functionality into their parachains without building complex bridging infrastructure from scratch.

**Architecture Components:**

1. XCMP Channel Manager Pallet

  - Direct parachain-to-parachain message routing

  - Dynamic channel establishment and management

  - Message prioritization and batching

2. Social Context Engine

  - Farcaster identity mapping to Polkadot accounts

  - Social reputation scoring and cross-chain portability
  
  - Engagement metrics for blockchain operations

3. XCM Integration Layer

  - Native XCM v4/v5 message formatting

  - Cross-chain execution coordination

  - Fee calculation and distribution

**Technology Stack:**

- Substrate framework for parachain runtime

- Rust for core pallet development

- TypeScript/JavaScript for SDK and APIs

- React for developer tools and dashboards

- Polkadot-JS for blockchain interactions

![High Level Arch](https://github.com/Shritesh99/polkadot-farcaster-demo-parachain/blob/master/img/High_level_arch.png?raw=true)

#### Incentive Model
The project incorporates a comprehensive incentive model designed to ensure long-term sustainability and community engagement. The economic architecture includes multiple revenue streams comprising transaction fees of 0.005-0.01 DOT per routed message based on complexity, premium API services for advanced social context data, developer tool subscriptions, and partnership integration fees. Revenue distribution follows a structured allocation where 50% supports operational costs including infrastructure and maintenance, 25% funds community incentives and developer grants, 15% supports protocol development and improvements, and 10% builds treasury reserves for long-term sustainability. User incentives include social engagement rewards where users earn native utility tokens for meaningful social interactions that drive blockchain adoption, creator monetization tools enabling content creators to receive automatic revenue sharing from Frame-triggered blockchain operations, and reputation-based benefits providing enhanced features and reduced fees for users with high social reputation scores. Infrastructure operator incentives include collator rewards with competitive compensation for running parachain infrastructure, performance bonuses for maintaining high uptime and low latency, and community recognition programs highlighting significant contributors to the ecosystem.

### Ecosystem Fit

Intercaster Gateway positions itself as critical middleware infrastructure connecting social protocols with Polkadot's multi-chain ecosystem, functioning similarly to how Bridge Hub connects external networks but specifically focused on social protocol integration. Our target audience encompasses multiple stakeholder groups including parachain developers seeking social integration capabilities for their chains, dApp developers building cross-chain social applications who need seamless social-to-blockchain functionality, Farcaster developers wanting to add blockchain functionality to their social applications, and end users seeking seamless social-to-DeFi experiences without complex wallet management.

The project addresses several critical needs within the ecosystem. The primary interoperability gap exists because no current infrastructure connects social protocols with Polkadot's multi-chain ecosystem effectively. Blockchain applications suffer from social context loss, lacking social proof and community engagement data that could enhance user experience and trust. Complex integration requirements currently force each parachain to independently build social features, creating inefficient duplication of effort. Finally, users experience fragmented UX when trying to transition from social interactions to blockchain operations, creating barriers to adoption.

We identified these needs through comprehensive market research. Farcaster processes over 50,000 daily casts with rapidly growing Frame interactions, demonstrating strong social engagement that could benefit from blockchain integration. The Polkadot ecosystem manages over $12 billion in total value locked across parachains, requiring social engagement mechanisms for governance and community building. Social trading markets show over 300% year-over-year growth, indicating strong demand for social-financial integration. Forum discussions on Polkadot governance consistently highlight the need for social consensus mechanisms to improve decision-making processes.

Within the Polkadot ecosystem, similar projects exist but serve different purposes. Frequency focuses on DSNP messaging infrastructure rather than social-to-blockchain bridging, while Subsocial provides general social networking capabilities but lacks cross-parachain routing functionality. Bridge Hub connects external networks but doesn't address social protocol integration specifically. Intercaster Gateway uniquely enables Farcaster Frame interactions to execute operations across any Polkadot parachain via XCMP, providing social context preservation and cross-chain coordination capabilities unavailable elsewhere.

## Team :busts_in_silhouette:

### Team members
- Shritesh Jamulkar

### Contact

- **Contact Name:** Shritesh Jamulkar
- **Contact Email:** shritesh.sj@gmail.com

### Legal Structure

- **Registered Address:** N/A
- **Registered Legal Entity:** N/A

### Team's experience

I am an individual contributor to the project. I have experience in developing cross-chain blockchain soulution of 5+ years. I have written multiple research papers in the blockchains and was an active contributer to the Hyperledger foundation.

### Team Code Repos

- https://github.com/Shritesh99/pallet-farcaster_frame

- https://github.com/Shritesh99

### Team LinkedIn Profiles (if available)

- https://www.linkedin.com/in/shritesh99/

## Development Status :open_book:

I have already started working on the project as a part of the previous grant. I have created the pallet for the parachain https://github.com/Shritesh99/pallet-farcaster_frame. 

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 6 months
- **Full-Time Equivalent (FTE):**  1 FTE
- **Total Costs:** 30K (15K USDC + 15K USD locked in DOT)
- **DOT %:** 50%

#### Milestone 1 - Core XCMP Infrastructure
- Estimated duration: 2 months
- FTE: 1
- Costs: 10,000 USD

| Number | Deliverable | Specification |
| ----- | ----------- | ------------- |
| 0a. | License | Apache 2.0. All code will be open-source and available under Apache 2.0 license for maximum ecosystem compatibility. |
| 0b. | Documentation | We will provide comprehensive inline documentation of all pallets and runtime modules, plus detailed tutorials explaining how to deploy the parachain, establish XCMP channels, and route social messages. Documentation will include API references, integration guides, and example implementations. |
| 0c. | Testing and Testing Guide | Core XCMP functionality will be fully covered by unit tests, integration tests, and cross-chain message routing tests. The testing guide will explain how to run all tests, set up test environments, and validate XCMP channel functionality. |
| 0d | Docker | We will provide comprehensive Docker configuration including parachain node, relay chain setup for testing, and all dependencies needed to test XCMP message routing functionality in an isolated environment. |
| 0e. | Article | We will publish a technical article explaining XCMP-based social protocol integration architecture, its benefits for the Polkadot ecosystem, and how it enables new classes of social-blockchain applications. |
| 1. | Substrate Pallet: XCMP Channel Manager | We will create a Substrate pallet that manages XCMP channel establishment, configuration, and lifecycle management. It will handle channel opening/closing, parameter updates, and connection status monitoring with target parachains. |
| 2. | Substrate Pallet: Message Router | We will develop a message routing pallet that processes incoming social messages, determines target parachains, applies routing rules, and manages message queuing and batching for optimal throughput across XCMP channels. |
| 3. | Substrate Pallet: XCM Integration | We will implement an XCM integration pallet that handles XCM v4/v5 message formatting, cross-chain execution coordination, fee calculation, and delivery confirmation tracking for social message routing operations. |
| 4. | Substrate Pallet: Basic Incentive Framework | We will create a foundational incentive pallet that handles fee collection, basic reward distribution, and treasury management to support the economic model of the gateway parachain. |
| 5. | Parachain Runtime | The complete parachain runtime will integrate all pallets (Channel Manager, Message Router, XCM Integration, Basic Incentives) with governance functionality, creating a fully operational parachain ready for XCMP-based social message routing. |
<!-- | 6. | 	TypeScript SDK: Core APIs | We will deliver a TypeScript library that provides core APIs for XCMP channel management, message routing, and basic parachain integration, enabling developers to build applications on the infrastructure. | -->

#### Milestone 2 — Social Context Engine & Incentive Implementation
- Estimated duration: 2 months
- FTE: 1
- Costs: 10,000 USD

| Number | Deliverable | Specification |
| ----- | ----------- | ------------- |
| 0a.	| License |	Apache 2.0. All social context and incentive mechanism code will be open-source under Apache 2.0 license. |
| 0b.	| Documentation	| We will provide detailed documentation for social context preservation, identity mapping systems, reputation scoring mechanisms, and comprehensive incentive model implementation with integration examples and best practices. |
| 0c. |	Testing and Testing Guide |	Complete test coverage for social context features, identity verification, reputation portability, and incentive distribution mechanisms. Testing guide will include Farcaster integration testing and multi-parachain reputation scenarios. |
| 0d.	| Docker |	Updated Docker environment including social context engine, Farcaster integration components, incentive distribution systems, and comprehensive testing infrastructure for social-blockchain workflows. |
| 0e.	| Article |	We will publish an article demonstrating social context preservation in cross-chain operations, showcasing new possibilities for social DeFi applications, and explaining the sustainable incentive model design. |
| 1. |	Substrate Pallet: Social Context Engine	| We will create a pallet for preserving and managing social context data from Farcaster, including identity mapping between FIDs and Polkadot accounts, social reputation scoring, and engagement metrics tracking across chains. |
| 2. |	Substrate Pallet: Farcaster Identity Bridge |	We will develop a secure bridge pallet that connects Farcaster FIDs to Polkadot accounts with cryptographic verification, privacy preservation, and support for multiple account associations per social identity. |
| 3. |	Substrate Pallet: Reputation Engine	| We will implement a cross-chain reputation system that aggregates social engagement metrics, enables reputation portability across parachains, and provides reputation-based access controls and benefits. |
| 4. |	Substrate Pallet: Advanced Incentive System |	We will create a comprehensive incentive pallet implementing user engagement rewards, creator monetization tools, developer integration bounties, infrastructure operator incentives, and automated distribution mechanisms with governance controls. |
| 5. | Social Message Parser |	We will deliver an advanced message parsing system for Farcaster Frames supporting complex social actions, multi-step workflows, and intelligent routing based on social context and user reputation. |

#### Milestone 2 — Production Deployment & Advanced Incentives
- Estimated duration: 2 months
- FTE: 1
- Costs: 10,000 USD

| Number | Deliverable | Specification |
| ----- | ----------- | ------------- |
| 0a.	| License |	Apache 2.0. All production deployment code, monitoring systems, and advanced incentive features will be open-source. |
| 0b. |	Documentation	| Complete production documentation including deployment guides, operational procedures, monitoring setup, security best practices, and comprehensive API references for all production features. |
| 0c. |	Testing and Testing Guide |	Production-ready testing suite including load testing, security testing, multi-parachain integration testing, incentive system stress testing, and comprehensive testing guide for production validation. |
| 0d. |	Docker | Production-grade Docker images and deployment configurations for mainnet parachain operation, including monitoring, logging, and backup systems with comprehensive operational documentation. |
| 0e. |	Article	| We will publish a comprehensive case study of production deployment with performance metrics, ecosystem impact analysis, and lessons learned from real-world social-blockchain integration. |
| 1.	| Kusama Testnet Deployment |	Full parachain deployment on Kusama with XCMP channels to major parachains, comprehensive monitoring systems, and real-world testing environment for final validation and optimization.
| 2.	| Multi-Parachain Integration |	Active integrations with 25+ parachains including DeFi (Acala, Parallel), smart contract platforms (Moonbeam, Astar), and specialized chains (Asset Hub, Efinity) with full XCMP channel support and production traffic handling. |
| 3.	| Mainnet Deployment  |	Comprehensive Polkadot mainnet deployment including security audits by reputable firms, performance optimization based on testnet data, governance system setup, and operational procedures for production launch. |
| 4.	| Advanced Incentive Analytics	| Comprehensive incentive tracking and optimization system providing user engagement analysis, reward distribution monitoring, economic sustainability metrics, and data-driven optimization tools for continuous incentive model improvement. |

## Future Plans

Our long-term maintenance and development strategy ensures sustainable growth and community ownership of the protocol through comprehensive incentive alignment. We plan to transition to community governance for sustainable protocol development, establishing decentralized decision-making processes that can evolve both the technical protocol and economic incentive model based on ecosystem needs and performance data. The decentralized maintenance fund created through treasury mechanisms will ensure ongoing operational support and infrastructure maintenance without relying on centralized funding, supported by sustainable revenue streams from transaction fees and premium services. Strategic partnerships with parachain teams will enable continued feature development and ensure the system evolves to meet changing ecosystem requirements while providing mutual incentive alignment through revenue sharing and co-development opportunities.

Our short-term enhancement and promotion plans focus on rapid ecosystem adoption and developer engagement through targeted incentive programs. We will launch a comprehensive developer incentive program with integration bounties to encourage early adoption and integration by parachain teams, providing immediate rewards for successful integrations and ongoing benefits for high-performance partners. Regular hackathons focused on social-blockchain applications will showcase the unique capabilities enabled by Intercaster Gateway and generate innovative use cases, with substantial prize pools funded by protocol revenue to attract top-tier developers. We plan to create extensive educational content and workshop series to help developers understand and utilize the new possibilities created by social-blockchain integration, supported by mentorship rewards and community recognition programs. Strategic partnerships with major DeFi and NFT parachains will provide high-value integration examples and drive user adoption through proven applications, with revenue sharing agreements that align long-term interests and incentivize continued collaboration.

Our long-term vision extends beyond the current project scope to establish Intercaster Gateway as foundational infrastructure for decentralized social applications with sustainable economic incentives. We plan to expand support to additional social protocols beyond Farcaster, creating a comprehensive social protocol bridge that serves multiple communities while scaling incentive mechanisms across larger user bases. Research and development of next-generation cross-chain social primitives will push the boundaries of what's possible in social-blockchain integration, funded by protocol treasury and community grants to ensure continued innovation. We will actively contribute to Polkadot protocol improvements specifically designed to better support social use cases, potentially influencing the core protocol's evolution while establishing industry standards for incentive-driven infrastructure projects. The ultimate goal is building the foundation for decentralized social infrastructure standards that can be adopted across the broader blockchain ecosystem, with proven economic models that ensure long-term sustainability and community ownership.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** [Piet Wolff](https://github.com/PieWol) recommended this grant program.

- This project was a winning project of a EasyA Polkadot Hackathon 2024.
