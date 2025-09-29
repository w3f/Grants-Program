# Bastion Protocol

- **Team Name:** Bastion Labs
- **Payment Details:**
  - **DOT**: 1U3JboaBjPViEFDwwzKpFLVeV2LHQx9Jy31FuMgHuRBnmxq
  - **Payment**: 1U3JboaBjPViEFDwwzKpFLVeV2LHQx9Jy31FuMgHuRBnmxq (USDC)
- **[Level](https://grants.web3.foundation/docs/Introduction/levels):** 1

## Project Overview :page_facing_up:

### Overview

**Tagline:** Circle-Based Finance (CBF) primitives for collaborative DeFi on Polkadot Asset Hub

**Description:**

Bastion Protocol introduces Circle-Based Finance, where users form "circles" (social groups) to collectively pool assets, stake together, and participate in auctions. Unlike traditional DeFi that serves only individual users, Bastion leverages social trust + group coordination to enable new financial primitives on Polkadot Asset Hub.

**Integration with Polkadot:**

We're building a native Substrate pallet (`pallet-circles`) for Polkadot's Asset Hub, making group-based financial coordination available as runtime primitives that any parachain or dApp can integrate. This extends Polkadot's DeFi capabilities with social finance mechanisms at the protocol level.

**Why We're Building This:**

Traditional finance has always been social—lending circles, credit unions, investment clubs. DeFi currently ignores this, requiring massive over-collateralization and serving only wealthy individuals. We're bringing collaborative finance to Web3 natively, enabling communities to coordinate financially with blockchain transparency and security.

### Problem Being Solved

**Three Critical Gaps in DeFi:**

**1. Over-Collateralization Excludes Most Users**

Current DeFi requires 150-200% collateral to borrow or participate. To borrow $1,000, you need $1,500+ locked up. This excludes anyone without existing crypto wealth and ignores that traditional finance successfully uses social trust and reputation to reduce collateral needs.

*Example: A farmer with strong community ties and reliable income can't access DeFi lending despite being creditworthy in their local community.*

**2. Communities Lack Group Coordination Tools**

DAOs, investment clubs, and communities want to pool funds and make collective financial decisions, but blockchain provides no native primitives. Current options are limited:
- Multi-sigs: Only transaction signing, no governance or treasury management
- Off-chain coordination: Discord/Telegram with trust issues
- Custom smart contracts: Expensive to build from scratch, not standardized

*Example: 10 friends want to pool $50K for parachain auctions. Options are a multisig (everyone signs every transaction) or trusting one person (centralization risk).*

**3. Traditional Lending Circles Remain Informal**

Rotating Savings and Credit Associations (ROSCAs) exist globally—"stokvels" in Africa, "tandas" in Latin America, "hui" in Asia—collectively managing billions. But they're informal, geographically limited, vulnerable to fraud, and can't integrate with financial services.

*Example: A "paluwagan" lending circle in the Philippines managing $10K monthly collapses when the organizer moves, because there's no transparent, portable infrastructure.*

**How Bastion Solves This:**

We create **native runtime primitives for group finance**, enabling circles to:
- Pool assets with transparent on-chain treasury management
- Make collective financial decisions through built-in governance
- Participate in staking and auctions as unified groups
- Reduce collateral needs through social accountability
- Scale globally while maintaining local trust

### Unique Selling Proposition (USP)

**What Makes Bastion Unique:**

**1. Runtime Primitives, Not Smart Contracts**

Bastion implements social finance as native Substrate FRAME pallets, not smart contracts. This provides:
- Better performance and lower costs than smart contract execution
- Protocol-level security instead of relying on contract audits
- Direct composability—other parachains integrate the pallet into their runtime
- Upgradeability through governance without user migration

**2. Hybrid Trust Model**

We bridge two extremes:
- **Traditional DeFi**: Pure algorithmic trust requires 150-200% collateral, excludes most people
- **Traditional Lending Circles**: Pure social trust is vulnerable to fraud, lacks transparency

**Bastion's approach**: Groups leverage social relationships to reduce collateral, while blockchain provides transparency, programmable enforcement, and accountability. Result: Under-collateralized lending becomes possible through group accountability.

**3. Composable Primitives for Entire Ecosystem**

`pallet-circles` is designed as foundational infrastructure:
- Parachains integrate the pallet to add group coordination features
- dApp developers build on circle primitives without starting from scratch
- Standardized interfaces enable cross-ecosystem interoperability
- Similar to how `pallet-assets` enabled an asset management ecosystem

**4. Built for Asset Hub**

Unlike standalone chains or generic smart contracts:
- Native integration with Polkadot Asset Hub for multi-asset support
- Circle treasuries hold DOT, USDC, USDT, custom assets
- Cross-parachain compatibility through Asset Hub
- Polkadot shared security model

**5. Collective DeFi Operations**

Not just holding funds together—groups can:
- Collectively stake with automatic reward distribution
- Participate in auctions together, pooling capital
- Future: Provide liquidity to DEXs, operate lending pools

### Competitive Analysis

**Within Polkadot:**

- **Acala, Parallel**: Individual DeFi (lending, staking) for solo users. No group coordination primitives.
- **Astar**: Smart contract platform. Developers build group features from scratch.
- **Moonbeam**: EVM compatibility inherits Ethereum's limitations.

**Key Difference**: No Polkadot parachain provides **runtime-level group financial coordination primitives**.

**Outside Polkadot:**

- **Gnosis Safe (Ethereum)**: Multi-sig for transaction signing only. No governance, treasury management, or collective operations. Not composable.
- **DAOs (Aragon, Moloch)**: Governance frameworks, not financial coordination primitives. Each DAO builds independently, no standardization.
- **Lido, Rocket Pool**: Protocol-specific pooled staking. Not general-purpose primitives.
- **Web2 Fintech** (eMoneyPool, Puddle): Centralized ROSCA apps. Single points of failure, geographically limited, not composable.

**Bastion's Edge:**

Only solution providing:
✅ Native runtime primitives (not smart contracts)  
✅ Built specifically for Polkadot Asset Hub integration  
✅ Composable primitives other developers can leverage  
✅ Collective DeFi operations (staking, auctions, lending)  
✅ Social trust + blockchain security hybrid model  

This combination doesn't exist elsewhere in blockchain.

### Project Details

**Architecture:**

1. **`pallet-circles`**: Core Substrate pallet implementing:
   - Circle creation with configurable governance (voting thresholds, quorum)
   - Member management (join/leave/roles)
   - Treasury operations (deposits, withdrawals, balance tracking)
   - Governance (proposals, voting, execution)
   - Collective staking and auction participation
   - Comprehensive event emission

2. **Asset Hub Integration**: Circles manage assets via Asset Hub (DOT, USDC, USDT, custom assets)

3. **React dApp**: Web interface for circle management, governance, staking, auctions

4. **Event Indexer**: SubQuery or custom indexer for historical data and queries

**Technology Stack:**
- Runtime: Substrate FRAME, Rust
- Frontend: React, TypeScript, Polkadot.js API, Tailwind CSS
- Indexing: SubQuery, PostgreSQL, GraphQL
- Testing: Substrate tests, Jest

**Level 1 Scope:**
- Circle management and member operations
- Collective deposits and treasury
- Group staking (mock for demo)
- Circle auctions
- Basic governance (proposals, voting)

**Out of Scope for Level 1:**
- Lending/borrowing (Level 2)
- Advanced reputation systems (Level 2)
- Cross-chain beyond Asset Hub (Level 2)
- Mainnet deployment or audits
- Tokenomics

### Ecosystem Fit

**Position in Polkadot:**

Bastion provides foundational social finance primitives that complement existing infrastructure:
- **Asset Hub**: We extend it with group coordination
- **DeFi Parachains**: Can integrate our primitives for collective features
- **DAO Platforms**: We focus on financial coordination; they focus on governance
- **NFT Marketplaces**: Circle auctions enable group purchasing

**Target Audience:**

1. **Substrate developers** needing group coordination primitives (saves development time, provides standardization)
2. **DeFi projects** exploring social trust mechanisms to reduce collateral requirements
3. **Communities** seeking transparent group asset management (investment clubs, DAOs, lending circles)

**Evidence of Need:**

- Traditional lending circles globally manage billions but remain informal and vulnerable
- Credit unions serve 390M+ members managing $2.6T (World Council of Credit Unions)
- Current DeFi's 150-200% collateralization excludes most of the world
- DAOs struggle with financial coordination beyond basic multisigs
- No existing solution provides runtime-level social finance primitives

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

**Kunal** has 2+ years of Web3 development with multiple hackathon wins across Solana, Sui, and EVM ecosystems. Lead developer at 29projectslab, he has delivered full-stack dApps integrating complex DeFi protocols. Experience spans frontend development, smart contract integration, protocol design, and blockchain infrastructure.

**Priya** is an experienced Rust and React developer who has contributed to DeFi and NFT projects. Expertise includes secure smart contracts, backend APIs, and blockchain infrastructure. Strong technical knowledge of both frontend and blockchain development.

Together, the team has demonstrated ability to deliver complete Web3 solutions from protocol design through frontend implementation, with particular strength in DeFi primitives and user experience.

### Team Code Repos

- https://github.com/kunal-drall
- https://github.com/priaaa29

### Team LinkedIn Profiles

- https://www.linkedin.com/in/kunaldrall
- https://www.linkedin.com/in/priya-singh-41466a304/

## Development Status :open_book:

**Current Status:** Concept stage with research completed.

**Prior Work:**
- Studied ROSCAs, credit unions, and community finance models
- Analyzed DeFi coordination mechanisms and limitations
- Evaluated Substrate FRAME architecture and Asset Hub integration
- Competitive analysis across blockchain ecosystems
- Gathered feedback from potential users (DAO operators, community leaders)

**Research Foundation:**
- Academic literature on social trust in financial systems
- Technical documentation: Substrate, FRAME, Asset Hub specifications
- Case studies of successful community finance initiatives
- Analysis of existing DeFi protocols and their gaps

We're ready to begin development upon grant approval with detailed technical specifications prepared.

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 8 weeks
- **Full-Time Equivalent (FTE):** 1.5
- **Total Costs:** $10,000 USD
- **DOT %:** 50%

### Milestone 1 — Core Circle Pallet

- **Estimated duration:** 2 weeks
- **FTE:** 1.5
- **Costs:** $3,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | Inline rustdoc for all public APIs. Tutorial on integrating pallet, creating circles, adding members, making deposits. README with setup and architecture. |
| **0c.** | Testing and Testing Guide | Unit tests with ≥80% coverage for circle creation, member management, deposits, error conditions. Guide explaining how to run tests and verify functionality. |
| **0d.** | Docker | Dockerfile for local development node with pallet integrated. |
| 1. | Substrate module: `pallet-circles` | Core data structures (Circle, Member, CircleConfig). Storage for circles, memberships, metadata. |
| 2. | Substrate module: Circle Creation | Extrinsic for creating circles with configurable governance parameters (voting thresholds, quorum, member limits). Event emission and validation. |
| 3. | Substrate module: Member Management | Extrinsics for join requests, approvals, leaving, removal. Role management (admin, member). Events for membership changes. |
| 4. | Substrate module: Treasury | Extrinsic for deposits to circle treasury. Contribution tracking per member. Balance queries. Access control. |
| 5. | Substrate module: Asset Hub Integration | Integration with Asset Hub's asset pallet for multi-asset support (DOT, USDC, USDT, custom). Asset transfer logic and balance tracking. |

### Milestone 2 — Governance, Auctions, and Staking

- **Estimated Duration:** 2 weeks
- **FTE:** 1.5
- **Costs:** $3,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | Documentation | Technical docs for governance, auctions, staking. Updated tutorial. API documentation. |
| **0b.** | Testing and Testing Guide | Integration tests for end-to-end workflows (proposal → voting → execution). Auction and staking tests. Updated testing guide. |
| **0c.** | Article | "Implementing Circle-Based Finance: Governance and Collective Operations" - technical article on design and implementation. |
| 1. | Substrate module: Governance | Proposal creation for various actions. Voting extrinsics (support/against/abstain). Configurable thresholds. Time-bound voting. Automatic execution. Events. |
| 2. | Substrate module: Auctions | Auction participation proposals. Collective bidding logic. Maximum bid limits via governance. Asset distribution. Integration with mock auction pallet. Events. |
| 3. | Substrate module: Mock Staking | Mock staking pallet. Staking proposals and execution via governance. Simulated rewards. Unstaking. Reward distribution based on contributions. Events. |
| 4. | Substrate module: Events | Comprehensive event system for governance, auctions, staking with metadata for indexing. |
| 5. | Runtime Integration | Working Substrate runtime with all pallets integrated. Genesis config. Example test scripts. |

### Milestone 3 — dApp and Complete Integration

- **Estimated Duration:** 4 weeks
- **FTE:** 1.5
- **Costs:** $4,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 for all repos. |
| **0b.** | Documentation | Complete developer docs: API specs, frontend integration guide, deployment instructions, user guide, indexer docs, troubleshooting. |
| **0c.** | Testing and Testing Guide | Frontend tests (Jest, React Testing Library). E2E integration tests. Performance tests. Comprehensive testing guide. |
| **0d.** | Docker | Docker Compose for complete stack (node, indexer, frontend, database). One-command setup. |
| **0e.** | Article | "Building Circle-Based Finance on Polkadot: A Complete Guide" - overview, architecture, implementation walkthrough, integration guide, use cases, future roadmap. |
| 1. | React dApp: Setup | React + TypeScript project. Polkadot.js API integration. Wallet connection. State management. Routing. Responsive design (Tailwind CSS). |
| 2. | React dApp: Circle Management | Circle discovery page with filtering. Circle detail page. Creation form. Member invitation/approval. Role management. Real-time updates via events. |
| 3. | React dApp: Treasury | Balance display for multiple assets. Contribution tracking. Deposit interface. Transaction history. Balance visualizations. |
| 4. | React dApp: Governance | Active proposals dashboard. Proposal creation form. Voting interface. Delegation. Proposal details. Historical proposals. Analytics. |
| 5. | React dApp: Operations | Auction listing and participation. Auction bid status. Staking interface. Staking proposals. Reward tracking. |
| 6. | Event Indexer: SubQuery | SubQuery project setup. Schema for all events. Event handlers. GraphQL API. Historical data aggregation. Deployment instructions. |
| 7. | Event Indexer: Analytics | GraphQL queries for common use cases. Circle statistics. Member analytics. Governance metrics. Time-series data. Query documentation. |
| 8. | Developer Documentation | Technical specification. API reference. Integration guide: "Adding pallet-circles to Your Parachain". Frontend guide. Indexer setup. Architecture decisions. Examples. |
| 9. | Tutorial | Step-by-step: setup, runtime integration, custom circle types, frontend building, querying data, extending functionality, use cases, best practices, security. |
| 10. | Public Repository | GitHub repo with all code. Comprehensive README. Getting started guide. Examples. CI/CD pipeline. Contribution guidelines. Live demo deployment. Demo video. |

## Future Plans

**Short-term (Next 6 Months):**
- Community engagement and developer feedback
- Video tutorials and example applications
- Bug fixes and improvements based on usage
- Presentations at Polkadot events

**Medium-term (6-12 Months) - Level 2 Grant:**
- Circle-based lending and borrowing with reputation-based credit
- Advanced reputation system (cross-circle, privacy-preserving)
- Cross-parachain integration via XCM
- Enhanced governance (delegation, weighted voting)
- Production hardening with security audit

**Long-term Vision:**
- Become standard social finance layer for Polkadot ecosystem
- Integration with major parachains (Acala, Astar, Parallel)
- Enable millions of underbanked individuals to access DeFi through circles
- New category of financial applications built on Bastion primitives

**Sustainability:**
- Open-source community building
- Regular updates for new Substrate versions
- Follow-up grant applications
- Partnerships with parachains and dApps
- Consulting for integration support

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** 

Web3 Foundation website and Polkadot developer documentation.

**Additional Context:**

- This is our first W3F grant application
- No previous grants or external funding for this project
- Team commitment: 1.5 FTE total (0.75 FTE each)
- All deliverables will be open-source (Apache 2.0)
- Designed as foundational infrastructure for ecosystem use
- Addresses genuine gap in DeFi by focusing on group coordination primitives
- Ready to begin development immediately upon approval

**Why Bastion Matters for Polkadot:**

1. **New Application Category**: Enables social finance apps that don't exist yet
2. **Developer Productivity**: Reusable primitives save months of development
3. **Ecosystem Differentiation**: Positions Polkadot as leader in social finance
4. **Financial Inclusion**: Infrastructure for serving underbanked populations
5. **Network Effects**: As more parachains integrate, ecosystem value grows

We're committed to being long-term contributors to the Polkadot ecosystem through open-source development, community engagement, and comprehensive documentation.
