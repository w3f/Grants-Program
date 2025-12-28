# XMBL

- **Team Name:** XMBL
- **Payment Details:**
  - **DOT**: 5G78vxs5ZRjmu9zYJVpGz5MHBe2R61wPtVMgUnSXvQj4U2wr
  - **Payment**: 5G78vxs5ZRjmu9zYJVpGz5MHBe2R61wPtVMgUnSXvQj4U2wr (USDC on AssetHub)
- **[Level](https://grants.web3.foundation/docs/Introduction/levels):** 2

> [!IMPORTANT]
> *The combination of your GitHub account submitting the application and the payment address above will be your unique identifier during the program. Please keep them safe.*

## Project Overview 📄

### Overview

- **Tagline:** A decentralized media content management and distribution platform built on Substrate, enabling creators to monetize content with cross-chain interoperability through Polkadot.

- **Description:** XMBL is a Substrate-based blockchain solution designed to revolutionize content creation, distribution, and monetization in the Web3 ecosystem. The platform provides a decentralized infrastructure for media content management, enabling creators to maintain ownership, control distribution, and receive fair compensation through transparent, on-chain mechanisms. XMBL leverages Substrate's modular architecture to create specialized pallets for content verification, licensing, revenue sharing, and cross-chain content portability.

- **Substrate/Polkadot/Kusama Integration:** 
  - **Substrate Framework:** XMBL will be built entirely on Substrate, utilizing custom pallets for content management, creator economics, and licensing. The modular design allows for easy upgrades and customization.
  - **Polkadot Parachain:** XMBL will operate as a specialized parachain on Polkadot, benefiting from shared security, cross-chain messaging (XCM), and interoperability with other parachains for content distribution and payment processing.
  - **Kusama Network:** Initial deployment and testing will occur on Kusama, allowing for rapid iteration of governance models, economic parameters, and feature testing in a real-world environment before mainnet launch.
  - **Cross-Chain Integration:** XMBL will utilize XCM to enable content creators to distribute across multiple parachains, accept payments in various assets, and interact with DeFi protocols for advanced monetization strategies.

- **Team Interest:** Our team is passionate about empowering content creators and building infrastructure that supports the decentralized web. We believe that blockchain technology, particularly Polkadot's interoperable ecosystem, provides the perfect foundation for a fair, transparent, and creator-centric media platform. The Web3 Foundation's support for innovative Substrate projects aligns perfectly with our vision of building open-source infrastructure for the future of content creation.

### Project Details

**Technology Stack:**
- **Blockchain Framework:** Substrate 3.0+ (Rust)
- **Consensus:** BABE + GRANDPA (Polkadot consensus)
- **Storage:** IPFS integration for content storage, on-chain metadata
- **Frontend:** React/TypeScript with Polkadot.js API integration
- **Smart Contracts:** ink! contracts for advanced content licensing logic
- **Cross-Chain:** XCM (Cross-Consensus Message Format) for interoperability
- **Testing:** Substrate node template, Zombienet for integration testing

**Core Components:**

1. **Content Management Pallet (`pallet-content`):**
   - Content registration and metadata storage
   - Content versioning and update mechanisms
   - Content ownership and transfer functionality
   - Content verification and integrity checks

2. **Creator Economics Pallet (`pallet-creator`):**
   - Creator profile management
   - Revenue sharing mechanisms
   - Subscription and membership models
   - Tip and donation functionality

3. **Licensing Pallet (`pallet-license`):**
   - Flexible licensing models (CC, custom, commercial)
   - License verification and enforcement
   - Royalty distribution automation
   - License transfer and modification

4. **Cross-Chain Content Bridge:**
   - XCM integration for content portability
   - Multi-chain content distribution
   - Cross-chain payment processing
   - Interoperable content discovery

5. **Frontend Application:**
   - Creator dashboard for content management
   - Consumer interface for content discovery
   - Wallet integration (Polkadot.js, Talisman, etc.)
   - Real-time content analytics

**Prior Work:**
- Initial research and architecture design for decentralized content platforms
- Proof-of-concept implementation of content registration on Substrate
- Community discussions on Polkadot forum regarding media/content parachains
- Technical feasibility study of IPFS integration with Substrate storage

**Project Limitations:**
- This grant will **not** include:
  - Full-scale content delivery network (CDN) infrastructure
  - Mobile native applications (web-first approach)
  - Advanced video streaming capabilities (focus on metadata and licensing)
  - Marketing and business development activities
  - Long-term hosting and maintenance costs beyond the grant period

### Ecosystem Fit

- **Ecosystem Position:** XMBL fills a critical gap in the Polkadot ecosystem by providing infrastructure for decentralized content management and creator monetization. While Polkadot has strong DeFi, NFT, and infrastructure projects, there is limited focus on content creator economics and media distribution. XMBL positions itself as a specialized content parachain that can serve as a foundational layer for other projects building content-related dApps, enabling them to leverage our content management and licensing infrastructure rather than building from scratch.

- **Target Audience:** 
  - **Primary:** Content creators (writers, artists, musicians, video creators) seeking decentralized alternatives to traditional platforms
  - **Secondary:** DApp developers building content-related applications who need content management infrastructure
  - **Tertiary:** Parachain teams looking to integrate content features into their chains
  - **Developer Community:** Substrate developers interested in content management pallets and XCM integration patterns

- **Needs Addressed:** 
  1. **Creator Ownership:** Traditional platforms retain ownership and control over creator content. XMBL ensures creators maintain true ownership through blockchain.
  2. **Fair Monetization:** Current platforms take significant cuts (30-50%) and lack transparency. XMBL enables transparent, programmable revenue sharing.
  3. **Cross-Chain Content Distribution:** Content is currently siloed. XMBL enables content to be distributed across multiple chains via XCM.
  4. **Infrastructure Gap:** The Polkadot ecosystem lacks specialized content management infrastructure that other projects can build upon.

- **Need Identification:** 
  - Polkadot Forum discussions ([example threads on content/media parachains](https://forum.polkadot.network))
  - Research on creator economy: "The Creator Economy: A New Economic Model" (2023) highlighting platform fee issues
  - Community feedback from Polkadot ecosystem builders requesting content management solutions
  - Analysis of successful content platforms in other ecosystems (Arweave, Filecoin) showing demand for decentralized alternatives
  - Web3 Foundation's emphasis on infrastructure projects that benefit the broader ecosystem

- **Similar Projects in Polkadot/Substrate/Kusama:** 
  - **Kodadot/NFT projects:** Focus on NFT art, not general content management or creator economics
  - **Storage projects (CESS, Subsocial):** Provide storage/social features but lack specialized content licensing and cross-chain distribution
  - **XMBL's Differentiation:** 
    - Specialized focus on content licensing and creator economics (not just storage or NFTs)
    - Deep XCM integration for true cross-chain content portability
    - Modular pallet design allowing other projects to integrate our infrastructure
    - Emphasis on programmable revenue sharing and transparent monetization

- **Similar Projects in Related Ecosystems:** 
  - **Arweave:** Permanent storage but lacks sophisticated content management and licensing
  - **Filecoin:** Storage-focused, not content management platform
  - **Lens Protocol (Polygon):** Social graph, different use case from content management
  - **XMBL Advantage:** First-mover advantage in Polkadot ecosystem for specialized content management infrastructure with native cross-chain capabilities

## Team 👥

> [!IMPORTANT]
> Please note that the data provided in this section is for administrative and informational purposes only. All beneficiaries of a grant must also be listed in the KYC/KYB process during the application phase. See our [FAQ](https://grants.web3.foundation/docs/faq#what-is-kyckyb-and-why-do-i-have-to-provide-this-data) for more info.

### Team members

- **Team Leader:** Mark Candaras

- **Core Team Members:**
  - Patrick Grandhard - Substrate/Rust Developer (specialized in pallet development)
  - Maroua Boud - Frontend Developer (React/TypeScript, Polkadot.js integration)
  - Eric Nans - IPFS/Storage Engineer (decentralized storage integration)

### Contact

- **Contact Name:** Mark Candaras
- **Contact Email:** mark@xmbl.org
- **Website:** https://xmbl.org

### Legal Structure

- **Registered Address:** 633 Lake Nelson Lane, Arrington, Virginia, 22922
- **Registered Legal Entity:** XMBL TR 

### Team's experience

Our team brings together expertise in Substrate development, decentralized storage systems, and content platform architecture. Key team members have:

- **Substrate Development:** Experience building custom pallets and runtime modules, with contributions to open-source Substrate projects
- **Blockchain Integration:** Previous work integrating IPFS and other decentralized storage solutions with blockchain systems
- **Content Platform Development:** Background in building content management systems and creator monetization platforms
- **Polkadot Ecosystem:** Active participation in Polkadot community, understanding of XCM, parachain architecture, and ecosystem needs

Specific projects and contributions will be detailed during the KYC/KYB process.


### Team Code Repos

- XMBL Polkadot repository will be created upon grant approval (https://github.com/xmbl-org/xmbl-polkadot)

Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine.

https://github.com/34r7h

### Team LinkedIn Profiles (if available)

https://linkedin.com/in/candaras

## Development Status 📖

**Current Status:** Pre-development phase - Architecture design and research completed.

**Research and Preparation:**

- **Architecture Design:** Completed comprehensive architecture design for Substrate-based content management system, including pallet specifications, storage schema, and XCM integration patterns
- **Technical Feasibility Study:** Conducted analysis of IPFS integration with Substrate, content verification mechanisms, and cross-chain content distribution via XCM
- **Community Engagement:** 
  - Participated in Polkadot forum discussions on content/media parachains
  - Engaged with Web3 Foundation community to understand ecosystem needs
  - Researched existing content-related projects in Polkadot ecosystem
- **Research References:**
  - Substrate documentation and best practices for pallet development
  - XCM specification and cross-chain messaging patterns
  - IPFS integration patterns with blockchain systems
  - Creator economy research and monetization models
- **Design Documents:** 
  - Pallet architecture specifications
  - Content data model and storage strategy
  - XCM message formats for cross-chain content operations
  - Revenue sharing and licensing models

**Next Steps:** Upon grant approval, we will immediately begin implementation starting with the core content management pallet and basic runtime setup.

## Development Roadmap 🔩

This section should break the development roadmap down into milestones and deliverables. To assist you in defining it, we have created a document with examples for some grant categories [here](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/grant_guidelines_per_category.md). Since these will be part of the agreement, it helps to describe *the functionality we should expect in as much detail as possible*, plus how we can verify and test that functionality. Whenever milestones are delivered, we refer to this document to ensure that everything has been delivered as expected.

> [!CAUTION]
> If any of your deliverables are based on somebody else's work, make sure you work and publish *under the terms of the license* of the respective project and that you **highlight this fact in your milestone documentation** and in the source code if applicable! **Projects that submit other people's work without proper attribution will be immediately terminated.**

### Overview

- **Total Estimated Duration:** 3 months
- **Full-Time Equivalent (FTE):** 2.5 FTE (2 full-time developers + 1 part-time frontend developer)
- **Total Costs:** 45,000 USD
- **DOT %:** 60% (27,000 USD in DOT, 18,000 USD in USDC)

### Milestone 1 — Core Content Management Infrastructure

- **Estimated duration:** 1.5 months
- **FTE:** 2.5
- **Costs:** 22,500 USD

> [!NOTE]
> **The default deliverables 0a-0d below are mandatory for all milestones**, and deliverable 0e at least for the last one.

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0. All code will be open-source and properly licensed. |
| **0b.** | Documentation | Comprehensive inline documentation for all pallets and runtime modules. A detailed tutorial will be provided explaining: (1) How to set up and run a local XMBL node, (2) How to register content on-chain, (3) How to query content metadata, (4) How to transfer content ownership. The tutorial will include code examples and step-by-step instructions. |
| **0c.** | Testing and Testing Guide | All pallet functions will have comprehensive unit tests with >90% code coverage. Integration tests will verify pallet interactions. A testing guide will document how to run the test suite, including unit tests (`cargo test`), integration tests, and how to test with a local Substrate node. |
| **0d.** | Docker | Dockerfile and docker-compose.yml for running a complete XMBL node with all dependencies. The Docker setup will include instructions for running the node, connecting to it via Polkadot.js, and executing test transactions. |
| 1. | Content Management Pallet (`pallet-content`) | A complete Substrate pallet implementing: (1) Content registration with metadata (title, description, creator, timestamp, IPFS hash), (2) Content ownership management (transfer, update owner), (3) Content versioning (track updates and revisions), (4) Content querying (get content by ID, by creator, by hash). The pallet will use proper Substrate storage patterns and include events for all state changes. |
| 2. | Creator Economics Pallet (`pallet-creator`) | A Substrate pallet for creator management: (1) Creator profile registration and management, (2) Basic revenue tracking (total earnings, content count), (3) Creator reputation/verification system, (4) Creator-to-content mapping. This pallet will integrate with `pallet-content` to link creators with their content. |
| 3. | Substrate Runtime Integration | Complete runtime configuration integrating both pallets, including proper weight calculations, event definitions, and error handling. The runtime will be based on Substrate node template and configured for local development and testing. |
| 4. | Basic Frontend Interface | React/TypeScript web application with: (1) Connection to XMBL node via Polkadot.js API, (2) Content registration form (allows creators to register content with metadata), (3) Content browser (displays registered content with metadata), (4) Wallet integration (Polkadot.js extension). The frontend will demonstrate core functionality and serve as a foundation for future development. |

### Milestone 2 — Licensing and Cross-Chain Integration

- **Estimated Duration:** 1.5 months
- **FTE:** 2.5
- **Costs:** 22,500 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0. All new code will be open-source. |
| **0b.** | Documentation | Updated documentation for new pallets and XCM integration. Tutorial will cover: (1) How to create and assign licenses to content, (2) How to verify licenses on-chain, (3) How to send content metadata via XCM to another chain, (4) How to receive and process XCM messages. |
| **0c.** | Testing and Testing Guide | Comprehensive tests for licensing pallet and XCM integration. XCM testing will use Zombienet to simulate multi-chain scenarios. Testing guide will include instructions for running XCM tests and verifying cross-chain message delivery. |
| **0d.** | Docker | Updated Docker setup including XCM testing environment with multiple chains. Docker-compose will orchestrate XMBL node and a test parachain for XCM message testing. |
| 0e. | Article | We will publish a technical article on Medium/Substack explaining: (1) The architecture of XMBL's content management system, (2) How XCM enables cross-chain content distribution, (3) Use cases for decentralized content licensing, (4) How other projects can integrate XMBL's infrastructure. The article will target Substrate developers and Polkadot ecosystem builders. |
| 1. | Licensing Pallet (`pallet-license`) | Complete Substrate pallet for content licensing: (1) License creation with configurable terms (license type, allowed uses, restrictions), (2) License assignment to content (link license to content ID), (3) License verification (check if content has valid license), (4) License transfer and modification, (5) Royalty configuration (percentage, recipient). The pallet will support common license types (Creative Commons variants) and custom licenses. |
| 2. | IPFS Integration | Integration with IPFS for content storage: (1) Pallet function to store content hash on-chain when content is uploaded to IPFS, (2) Content retrieval helper functions, (3) Content verification (verify IPFS hash matches on-chain record), (4) IPFS node configuration and connection management. This will enable creators to store actual content files on IPFS while maintaining metadata and ownership on-chain. |
| 3. | XCM Integration for Cross-Chain Content | Implementation of XCM messages for cross-chain content operations: (1) XCM message format for content metadata transfer, (2) Pallet functions to send content metadata to other parachains via XCM, (3) XCM message handlers to receive and process content from other chains, (4) Cross-chain content querying (query content from other chains). This will enable content to be distributed across multiple parachains while maintaining a single source of truth. |
| 4. | Enhanced Frontend with Licensing | Updated frontend application with: (1) License creation and assignment UI, (2) License verification display, (3) IPFS upload integration (upload content to IPFS, store hash on-chain), (4) Cross-chain content browser (display content from multiple chains), (5) Revenue dashboard (display creator earnings and content statistics). |
| 5. | Kusama Testnet Deployment | Deployment of XMBL runtime to Kusama testnet (Rococo or local testnet): (1) Runtime compilation and optimization, (2) Node configuration for testnet, (3) Deployment scripts and documentation, (4) Testnet interaction guide. This will demonstrate the system working in a real blockchain environment and enable community testing. |

## Future Plans

- **Long-term Maintenance:** After the grant period, we plan to establish a sustainable funding model through: (1) Community treasury funded by transaction fees, (2) Potential token launch for governance and ecosystem participation, (3) Partnerships with content platforms and creators, (4) Additional grant applications for advanced features. We are committed to maintaining and improving the codebase as open-source infrastructure for the Polkadot ecosystem.

- **Short-term Usage:** Immediately after grant completion: (1) Launch on Kusama as a parachain candidate, (2) Onboard initial creators and content for testing, (3) Engage with Polkadot community through workshops and documentation, (4) Seek partnerships with other parachains for cross-chain content distribution, (5) Iterate based on user feedback and community needs.

- **Long-term Intentions:** Our vision is to establish XMBL as the foundational content management infrastructure for the Polkadot ecosystem. Long-term goals include: (1) Mainnet deployment on Polkadot as a specialized content parachain, (2) Expansion of pallet library for advanced features (subscriptions, memberships, advanced licensing), (3) Integration with major DeFi protocols for creator monetization (lending, staking, yield farming), (4) Development of mobile applications, (5) Building an ecosystem of dApps on top of XMBL infrastructure, (6) Contributing to Polkadot's growth by attracting content creators and media projects to the ecosystem.

## Referral Program (optional) 💰

You can find more information about the program [here](https://grants.web3.foundation/docs/referral-program).

- **Referrer:** N/A
- **Payment Address:** N/A

## Additional Information ➕

**How did you hear about the Grants Program?** 
Web3.foundation

**Additional Context:**

- **Open Source Commitment:** All code developed under this grant will be open-source (Apache 2.0), allowing the broader Polkadot community to benefit from and build upon our infrastructure. We believe this aligns with Web3 Foundation's mission of fostering open, decentralized technologies.

- **Ecosystem Contribution:** XMBL is designed not just as a standalone project, but as infrastructure that other projects can leverage. Our modular pallet design allows other Substrate-based projects to integrate content management features without building from scratch, thus strengthening the entire Polkadot ecosystem.

- **Community Engagement:** We are committed to active community engagement throughout development, including regular updates, open discussions, and incorporating community feedback. We plan to maintain active presence in Polkadot forums, Discord, and other community channels.

- **Technical Innovation:** XMBL introduces novel approaches to cross-chain content distribution using XCM, which could serve as a reference implementation for other projects exploring cross-chain use cases beyond simple token transfers.

- **Alignment with Web3 Foundation Goals:** This project directly supports Web3 Foundation's goals by: (1) Building infrastructure for the Polkadot ecosystem, (2) Demonstrating innovative use of XCM for complex cross-chain operations, (3) Attracting new users (content creators) to Polkadot, (4) Contributing to the open-source Substrate pallet ecosystem.

