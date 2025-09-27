# Bastion Protocol

- **Team Name:** Bastion Labs
- **Payment Details:**
  - **DOT**: 1U3JboaBjPViEFDwwzKpFLVeV2LHQx9Jy31FuMgHuRBnmxq
  - **Payment**: 1U3JboaBjPViEFDwwzKpFLVeV2LHQx9Jy31FuMgHuRBnmxq (USDC)
- **[Level](https://grants.web3.foundation/docs/Introduction/levels):** 1

## Project Overview :page_facing_up:

### Overview

- **Tagline:** Circle-Based Finance (CBF) primitives for collaborative DeFi on Substrate
- **Description:** Bastion Protocol introduces Circle-Based Finance, a decentralized model where users form "circles" (social groups) to pool assets, participate in auctions, and manage staking collectively. Unlike traditional individualistic DeFi, Bastion leverages social trust and group coordination to enable new financial primitives.
- **Substrate Integration:** The project develops a native Substrate pallet (`pallet-circles`) that implements group-based financial operations as first-class runtime primitives, extending Polkadot's DeFi capabilities with social finance mechanisms.
- **Team Interest:** We believe DeFi's future lies in combining social trust with decentralized technology. Traditional finance has always been social - from village lending circles to investment clubs. Bastion brings this collaborative element to blockchain while maintaining decentralization.

### Project Details

**Core Architecture:**
- **`pallet-circles`**: Substrate pallet implementing circle creation, membership management, collective deposits, group staking, and auction participation
- **Demo Substrate Chain**: Local testnet showcasing pallet integration
- **React dApp**: Frontend interface for circle management and auction participation
- **Event Indexing**: Basic indexer for tracking circle activities and state changes

**Technology Stack:**
- **Runtime**: Substrate FRAME, Rust
- **Frontend**: React, Polkadot.js API, TypeScript
- **Indexing**: SubQuery or custom lightweight indexer
- **Testing**: Substrate test framework, Jest for frontend

**Key Features (Level 1 Scope):**
1. **Circle Management**: Create circles with configurable governance parameters (quorum, voting thresholds)
2. **Collective Deposits**: Members contribute assets to shared circle treasury
3. **Group Staking**: Circles can collectively stake pooled assets (using mock staking for demo)
4. **Circle Auctions**: Groups can participate in on-chain auctions for digital assets
5. **Basic Governance**: Simple voting mechanisms for auction participation decisions

**What this project will NOT provide:**
- Production-ready lending/borrowing protocols (future milestone)
- Cross-chain functionality (future milestone) 
- Advanced reputation systems (future milestone)
- Token economics or tokenomics design
- Mainnet deployment or production hosting

### Ecosystem Fit

**Position in Ecosystem:**
Bastion fills a gap in Polkadot's DeFi stack by introducing social finance primitives. While existing parachains focus on individual financial operations, Bastion enables group-based financial coordination as a core runtime primitive.

**Target Audience:**
- **Primary**: Substrate developers building DeFi applications who need group coordination primitives
- **Secondary**: DeFi projects exploring social trust mechanisms
- **Tertiary**: Communities seeking decentralized pooled asset management

**Needs Addressed:**
- **Collective Asset Management**: Many communities want to pool resources but lack decentralized tools
- **Social Trust in DeFi**: Individual-only DeFi ignores the social nature of finance and trust networks
- **Group Decision Making**: Need for transparent, on-chain group financial decisions

**Evidence of Need:**
- Traditional finance has always included group mechanisms (investment clubs, lending circles, cooperatives)
- Existing DeFi protocols often require users to form informal groups off-chain for large operations
- Community DAOs struggle with financial coordination tools beyond basic treasury management

**Similar Projects Analysis:**
- **Polkadot Ecosystem**: No direct equivalent focusing on social finance primitives as runtime modules
- **Other Ecosystems**: 
  - Ethereum has informal group coordination (multisigs, Gnosis Safe) but lacks native social finance primitives
  - Traditional lending circles exist in various forms but aren't blockchain-native

**Unique Differentiators:**
- First-class Substrate pallet for social finance (not just smart contracts)
- Focus on group coordination primitives rather than individual DeFi tools
- Designed for extension by other parachains and applications

## Team :busts_in_silhouette:

### Team members

- Kunal (Lead Developer)
- Priya (Software Engineer)

### Contact

- **Contact Name:** Kunal
- **Contact Email:** kunaldrall29@gmail.com
- **Website:** https://bastionprotocol.pro

### Legal Structure

- **Registered Address:** N/A
- **Registered Legal Entity:** No legal entity at this stage. Project delivered under 29projects Labs open-source collective.

### Team's experience

**Kunal** brings 2+ years of Web3 development experience with multiple hackathon wins across Solana, Sui, and EVM ecosystems. As lead at 29projectslab, he has delivered full-stack dApps integrating complex DeFi protocols with user-friendly interfaces. His experience spans frontend development, smart contract integration, and protocol design.

**Priya** is an experienced Rust and React developer who has contributed to various DeFi and NFT projects. Her expertise includes building secure smart contracts, backend APIs, and blockchain infrastructure. She brings deep technical knowledge of frontend and blockchain development.
Together, the team has demonstrated ability to deliver complete Web3 solutions from protocol design through frontend implementation, with particular strength in DeFi primitives and user experience design.

### Team Code Repos

- https://github.com/kunal-drall
- https://github.com/priaaa29

### Team LinkedIn Profiles (if available)

- https://www.linkedin.com/in/kunaldrall
- https://www.linkedin.com/in/priya-singh-41466a304/

## Development Status :open_book:

**Current Status:** Concept stage with preliminary research completed.

**Prior Work:**
- Research into existing DeFi coordination mechanisms and their limitations
- Analysis of traditional lending circles and community finance models
- Technical evaluation of Substrate pallet development requirements
- Review of similar projects in other ecosystems for differentiation

**Research Foundation:**
- Study of academic literature on social trust in financial systems
- Analysis of successful community-driven financial initiatives
- Technical research into Substrate FRAME architecture and pallet development patterns

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 6 weeks
- **Full-Time Equivalent (FTE):** 1.5 FTE
- **Total Costs:** $10,000 USD
- **DOT %:** 50%

### Milestone 1 — Core Pallet & Demo Chain

- **Estimated duration:** 3 weeks
- **FTE:** 1.5
- **Costs:** $5,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | Inline code documentation and basic tutorial explaining how to spin up the demo chain, create circles, and participate in auctions. |
| **0c.** | Testing and Testing Guide | Core pallet functions will be fully covered by unit tests (≥80% coverage). Guide will explain how to run tests and verify functionality. |
| 1. | Substrate pallet: `pallet-circles` | Core pallet implementing: circle creation with configurable parameters (quorum, member limits), member management (join/leave), collective deposit functionality, and basic storage for circle state. |
| 2. | Substrate pallet: Mock Staking Integration | Extension to pallet-circles enabling groups to participate in staking operations using mock staking module for demonstration purposes. |
| 3. | Substrate pallet: Circle Auctions | Auction functionality allowing circles to collectively bid on mock digital assets (NFTs) with member voting on participation. |
| 4. | Demo Substrate Chain | Complete working chain with pallet-circles integrated, demonstrating all core functionalities in local development environment. |
| 5. | CLI/Polkadot.js Integration | Basic integration enabling circle creation, membership management, and auction participation through Polkadot.js Apps UI. |

### Milestone 2 — Demo dApp & Documentation

- **Estimated Duration:** 3 weeks
- **FTE:** 1.5
- **Costs:** $5,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | Complete documentation including technical specifications, user flow diagrams, and comprehensive tutorial on building Circle-Based Finance applications on Substrate. |
| **0c.** | Testing and Testing Guide | Frontend components tested with Jest, integration tests for pallet-dApp interaction, comprehensive testing guide. |
| **0d.** | Article | Technical article explaining Circle-Based Finance concepts, implementation details, and potential applications in the Polkadot ecosystem. |
| 1. | React dApp Frontend | Complete web application built with React and Polkadot.js API featuring circle management interface, auction participation flows, and treasury balance displays. |
| 2. | Extended Pallet Governance | Enhanced pallet-circles with voting mechanisms for auction decisions, proposal systems, and basic governance primitives. |
| 3. | Event System & Indexing | Event emission from pallet operations and lightweight indexer (SubQuery or custom) for tracking circle activities and historical data. |
| 4. | Comprehensive Tutorial | Step-by-step guide "Building Circle-Based Finance on Substrate" including code examples, deployment instructions, and extension patterns. |
| 5. | Public Repository | Complete open-source repository with all code, documentation, tests, and demo deployment instructions published on GitHub. |

## Future Plans

**Long-term Maintenance:**
The team plans to maintain and extend Bastion Protocol through a combination of:
- Community contributions and open-source development
- Follow-up grant applications for advanced features
- Potential integration partnerships with existing Polkadot parachains

**Short-term Enhancement (Post-Level 1):**
- Apply for Level 2 grant to implement circle-based lending and borrowing
- Develop cross-chain integration capabilities with other parachains
- Build reputation and credit scoring mechanisms
- Create more sophisticated governance and proposal systems

**Long-term Vision:**
Bastion Protocol aims to become the foundational social finance layer for the Polkadot ecosystem, enabling parachains to integrate group-based financial primitives and fostering new models of decentralized community finance.

**Community Building:**
- Developer documentation and tutorials to encourage adoption
- Workshops and presentations at Substrate/Polkadot events
- Open-source community building around social finance primitives

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation website and Polkadot developer documentation.

**Additional Context:**
- This project represents the foundational layer for a broader vision of social finance in Web3
- The team is committed to open-source development and ecosystem collaboration
- All deliverables will be designed for extensibility and integration by other developers
- The project addresses a genuine gap in current DeFi offerings by focusing on group coordination primitives
