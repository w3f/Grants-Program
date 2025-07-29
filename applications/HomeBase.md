# Homebase

- **Team Name:** Homebase by HanPay  
- **Payment Details:**
  - **DOT**: TX5tekNYLZXaVtje6QUMKjEsx9RxteSzC4 (≥50% of total costs)
  - **Payment**: TX5tekNYLZXaVtje6QUMKjEsx9RxteSzC4 (USDC)
- **Level:** 3  

---

## Project Overview :page_facing_up:

### Overview

Real estate tokenization is one of the most promising use-cases for Real-World Assets (RWA) in Web3, enabling fractional ownership, liquidity, and programmable governance over physical assets. Yet, the space faces critical challenges:

1. **Trustless Infrastructure** – ensuring transparent, censorship-resistant settlement.  
2. **Cross-Chain Liquidity** – connecting real estate assets to DeFi markets.  
3. **Compliant Governance** – aligning legal frameworks with on-chain ownership.

**Homebase** delivers a **Polkadot-native RWA protocol** addressing these challenges through a modular architecture combining blockchain, backend services, and live frontend applications.

✅ Custom Substrate blockchain already deployed.  
✅ Node.js / Express backend connected and live.  
✅ Frontend dApp live at:

- User dashboard → [https://homebase-escrow-haven.vercel.app/](https://homebase-escrow-haven.vercel.app/)  
- Landlord login → [https://homebase-escrow-haven.vercel.app/landlord-login](https://homebase-escrow-haven.vercel.app/landlord-login)  
- Seller login → [https://homebase-escrow-haven.vercel.app/seller-login](https://homebase-escrow-haven.vercel.app/seller-login)  
- Admin login → [https://homebase-escrow-haven.vercel.app/admin-login](https://homebase-escrow-haven.vercel.app/admin-login)

- **Integration:** Built as a custom Substrate parachain with specialized pallets for real estate tokenization, integrated marketplace, and XCM cross-chain connectivity to DeFi protocols on Acala and Moonbeam.
- **Team Interest:** We identified the massive $16 trillion real estate market as the largest untapped RWA opportunity, with existing solutions lacking proper legal compliance and cross-chain DeFi integration.

### Abstract

Homebase bridges physical real estate and DeFi by offering:

- **Tokenization:** Turn real estate into fractional on-chain shares.  
- **Trading:** Enable users to buy, sell, and hold fractions.  
- **Governance:** Token-weighted voting on property-level decisions.  
- **Cross-Chain:** Use XCM to connect with DeFi parachains (e.g., Acala, Moonbeam).

### Project Details

**UI Components:**
- Live frontend applications already deployed and functional
- User dashboard for property browsing and token management
- Landlord portal for property registration and management
- Seller interface for listing properties and managing sales
- Admin dashboard for compliance oversight and system management

**Data Models:**
```rust
// Core property metadata structure
pub struct PropertyMetadata {
    pub property_id: PropertyId,
    pub legal_documents_hash: H256, // IPFS hash
    pub total_supply: Balance,
    pub price_per_token: Balance,
    pub property_type: PropertyType,
    pub location: BoundedVec<u8, MaxLocationLength>,
    pub legal_custodian: AccountId,
    pub compliance_status: ComplianceStatus,
}

// Fractional token representation
pub struct FractionalToken {
    pub token_id: TokenId,
    pub property_id: PropertyId,
    pub owner: AccountId,
    pub percentage_ownership: Permill,
    pub voting_weight: Balance,
}
```

**API Specifications:**
- REST API for property registration, token minting, and marketplace operations
- GraphQL endpoint for complex property and ownership queries
- WebSocket connections for real-time price updates and governance notifications
- KYC/AML compliance endpoints for user verification

**Technology Stack:**
- **Blockchain:** Substrate runtime, Rust pallets.  
- **Backend:** Node.js / Express:
  - Connects to Substrate via `@polkadot/api`.  
  - Listens to events, exposes REST + GraphQL APIs.  
  - Manages KYC/AML, admin dashboards, partner onboarding.  
- **Frontend:** React + TypeScript dApp:
  - Polkadot.js API integration, wallet connections, user dashboards.
- **HanPay Online Wallet:**  
  [https://hanpay-portal.vercel.app/#hero](https://hanpay-portal.vercel.app/#hero)  
  Optional standalone payment portal to settle bargains or off-chain transfers.
- **DevOps:** Docker, GitHub Actions, Prometheus, Grafana.

**Core Components Documentation:**

| Layer             | Component              | Role                                                                                   |
|-------------------|------------------------|---------------------------------------------------------------------------------------|
| Core Blockchain   | `pallet_rwa_core`      | Register property metadata, legal documents (stored via IPFS).                        |
| Asset Management  | `pallet_rwa_asset`     | Mint fractional tokens, enforce supply cap, track ownership checkpoints.             |
| Marketplace       | `pallet_rwa_marketplace` | Enable secondary trading with on-chain order book, events, and settlement.           |
| Cross-Chain       | `pallet_rwa_xcm`       | Allow token transfers and governance across parachains via XCM.                      |
| Compliance Layer  | *ink!* contracts       | Handle KYC, AML, legal freezes, and regulatory triggers.                             |
| Backend API       | Node.js / Express      | Provide off-chain services (KYC, compliance, notifications), connect to Substrate.   |

**What Homebase Will NOT Provide:**
- Direct property management or maintenance services
- Legal custody of physical real estate assets (handled through certified legal partners)
- Property insurance or warranty services
- Traditional mortgage lending or property financing
- Property valuation services (relies on third-party certified appraisers)

### Ecosystem Fit

**Ecosystem Position:**
Homebase fills major gaps in Polkadot's ecosystem:
- A real estate-specific RWA parachain.  
- A dual on-chain/off-chain payment flow.  
- A governance + compliance bridge between real-world and DeFi.

**Target Audience:**
- Property owners seeking liquidity through tokenization
- Retail investors wanting fractional real estate exposure  
- DeFi protocols requiring real-world asset backing
- Institutional investors seeking compliant RWA investments
- parachain/dapp developers building on real estate infrastructure

**Identified Needs:**
- Global real estate tokenization market projected >$16 trillion by 2030.  
- Initial interest from landlords, sellers, and investors in Nigeria, Serbia, EU.  
- Early pilot discussions with property managers and legal custodians.  
- Positive organic feedback from live app demos and community.

**Similar Projects:**
In the Substrate/Polkadot ecosystem, there are no direct competitors focused specifically on real estate tokenization with integrated marketplace and governance features. Centrifuge focuses on broader RWA financing, while our solution is specialized for fractional real estate ownership.

In related ecosystems, projects like RealT (Ethereum) and Propy exist but lack cross-chain DeFi integration and comprehensive governance features that Homebase provides through Polkadot's XCM capabilities.

---

## Team :busts_in_silhouette:

### Team members

- Emeka Iwuagwu (Project Lead)
- [Temilade Onigbitan] (Senior Substrate Developer)
- [Princewil Mcdickson] (Blockchain Runtime Developer)  
- [Charles Mishael ] (Node.js/Express Developer)
- [Emeka Iwuagwu] (React/TypeScript Developer)
- [Habiba Sambo] (Real Estate Law Specialist - Part-time)

### Contact

- **Contact Name:** Emeka Iwuagwu
- **Contact Email:** e.iwuagwu@hotmail.com, emeka@hanpay.xyz
- **Website:** https://hanpay-portal.vercel.app

### Legal Structure

- **Registered Address:** [Address will be provided during KYC/KYB process]
- **Registered Legal Entity:** HanPay (Nigeria / Serbia, in formation)

### Team's experience

| Role                | Name               | Notes                                     |
|---------------------|--------------------|------------------------------------------|
| Project Lead        | Emeka Iwuagwu     | 8+ years web/blockchain engineering      |
| Rust Devs          | 2 FT engineers    | Senior Substrate Developer         	    |
| Node.js Dev        | Charles Mishael     | Backend API, KYC, compliance             |
| Frontend Dev       | Emeka Iwuagwu     | React, TypeScript, UX/UI                 |
| Legal Advisor      | Habiba Sambo      | Real estate law, fintech compliance      |

**Contact:** e.iwuagwu@hotmail.com, emeka@hanpay.xyz  
**Legal Entity:** HanPay (Nigeria / Serbia, in formation)

**Previous Web3 Foundation Grants:** None

### Team Code Repos

- https://github.com/EmekaIwuagwu/homebase-blockchain
- https://github.com/EmekaIwuagwu/homebase-frontend

Team member GitHub accounts:
- https://github.com/EmekaIwuagwu

### Team LinkedIn Profiles (if available)

- https://www.linkedin.com/in/eiwuagwu
- [Other team member profiles to be provided]

---

## Development Status :open_book:

**Current Implementation Status:**
- ✅ Custom Substrate blockchain already deployed and functional
- ✅ Node.js/Express backend connected to blockchain via @polkadot/api (Testing and awaiting Deployment)
- ✅ React/TypeScript frontend applications live and operational
- ✅ Basic property registration and tokenization pallets implemented
- ✅ User authentication and wallet integration completed
- ✅ Initial KYC/compliance framework established

**Research and Prior Work:**
- Extensive research into real estate tokenization legal frameworks across multiple jurisdictions
- Analysis of existing RWA protocols and identification of key gaps in the market
- Technical feasibility studies for cross-chain integration via XCM
- User feedback collection from early beta testing with 200+ participants
- Partnership discussions with legal custodians and property management companies

**Documentation:**
- Technical architecture documents for all core pallets
- API documentation for backend services
- User guides for frontend applications
- Compliance framework documentation
- Integration guides for third-party developers

---

## Development Roadmap :nut_and_bolt:

This section should break the development roadmap down into milestones and deliverables focusing on the concrete functionality that will be implemented, how it solves specific problems, and what technical integration challenges it addresses.

### Overview

- **Total Estimated Duration:** 4 months
- **Full-Time Equivalent (FTE):** 3.5 FTE
- **Total Costs:** $150,000 USD
- **DOT %:** 50% of Total Costs to be paid in (vested) DOT

### Milestone 1 – Public Testnet & Enhanced Marketplace Functionality

**Problem Solved:** Current blockchain lacks comprehensive marketplace features and public accessibility for testing by potential users and partners.

**Technical Integration:** Implements advanced order matching algorithms, escrow mechanisms, and comprehensive event system for real-time marketplace updates.

- **Estimated duration:** 1.5 months
- **FTE:** 3.5
- **Costs:** $60,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 license for all deliverables |
| **0b.** | Documentation | Comprehensive inline Rust documentation, Node.js API docs, and tutorials explaining how to spin up testnet nodes, register properties, mint tokens, and execute marketplace trades. Documentation will include step-by-step guides for each user role (property owners, investors, administrators). |
| **0c.** | Testing and Testing Guide | Unit tests covering 90%+ of pallet functionality, integration tests for marketplace operations, backend API endpoint tests, and frontend component tests. Testing guide will explain how to run all test suites and validate functionality. |
| **0d.** | Docker | Docker containers for Substrate node, backend services, and frontend application, plus docker-compose setup for complete local development environment. |
| 0e. | Article | Technical article explaining the marketplace architecture, order matching algorithms, and how fractional real estate trading works on Homebase, published on Medium and shared with Polkadot community. |
| 1. | Enhanced Marketplace Pallet | **Concrete Implementation:** Advanced `pallet_rwa_marketplace` with limit/market order types, partial fill capabilities, price-time priority matching, automated settlement through escrow, and comprehensive event emissions for order lifecycle tracking. **Functionality:** Users can place buy/sell orders for fractional tokens, orders are automatically matched based on price-time priority, trades settle instantly through on-chain escrow, and all market activities are transparently recorded on-chain. |
| 2. | Public Testnet Deployment | **Concrete Implementation:** Fully configured testnet with public RPC endpoints, block explorer integration, faucet for test tokens, telemetry dashboard, and monitoring infrastructure. **Functionality:** External users can connect wallets, register test properties, mint fractional tokens, execute trades, and participate in governance without any technical barriers. |
| 3. | Enhanced Backend API | **Concrete Implementation:** REST and GraphQL APIs with endpoints for market data feeds, trade history, portfolio tracking, price analytics, and real-time WebSocket connections for live market updates. **Functionality:** Frontend applications and third-party integrators can access comprehensive market data, execute trades programmatically, and receive real-time notifications of market events. |
| 4. | Advanced KYC/Compliance System | **Concrete Implementation:** Multi-tier KYC verification with document upload, identity verification through third-party providers, AML screening, and automated compliance status updates linked to on-chain permissions. **Functionality:** Users complete identity verification to unlock trading capabilities, administrators can monitor compliance status, and the system automatically enforces trading restrictions based on regulatory requirements. |

### Milestone 2 – Cross-Chain Integration & Governance Framework

**Problem Solved:** Fractional real estate tokens remain isolated without DeFi utility, and token holders lack meaningful governance participation in property decisions.

**Technical Integration:** Implements XCM message passing for cross-parachain token transfers and establishes governance mechanisms that bridge on-chain voting with real-world property management decisions.

- **Estimated Duration:** 1.5 months
- **FTE:** 3.5
- **Costs:** $60,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 license for all deliverables |
| **0b.** | Documentation | Detailed documentation of XCM integration, governance mechanisms, cross-chain workflows, and guides for setting up governance proposals and cross-chain transfers. |
| **0c.** | Testing and Testing Guide | Comprehensive tests for XCM message passing, governance proposal lifecycle, voting mechanisms, and cross-chain integration scenarios. |
| **0d.** | Docker | Updated Docker configurations supporting cross-chain testing environments and governance node setups. |
| 0e. | Article | Educational article on cross-chain real estate tokenization and governance, explaining how property decisions are made through blockchain voting, targeted at both technical and non-technical audiences. |
| 1. | XCM Integration Pallet | **Concrete Implementation:** `pallet_rwa_xcm` enabling fractional real estate tokens to be transferred and utilized across Polkadot parachains, with specific integrations for Acala (DeFi lending) and Moonbeam (EVM compatibility). **Functionality:** Token holders can move their fractional shares to DeFi protocols for lending/borrowing, use them as collateral, or trade them on EVM-based DEXs while maintaining governance rights on the origin chain. |
| 2. | Property Governance System | **Concrete Implementation:** Token-weighted governance framework where fractional token holders vote on property-specific decisions (renovation approvals, management changes, sale decisions), with proposals automatically executing based on voting outcomes and legal compliance checks. **Functionality:** Property decisions are democratized through blockchain voting, with legal enforceability through custodian partnerships, ensuring token holders have real influence over their investments. |
| 3. | Cross-Chain Governance Bridge | **Concrete Implementation:** XCM-based governance participation allowing users to vote on property proposals from any connected parachain while their tokens are deployed in DeFi protocols. **Functionality:** Token holders don't lose governance rights when using their tokens in cross-chain DeFi, maintaining property decision-making power regardless of where their tokens are currently deployed. |
| 4. | Advanced Backend Governance APIs | **Concrete Implementation:** Backend services supporting governance proposal creation, voting tracking, legal compliance verification, and automated execution of governance decisions through custodian partnerships. **Functionality:** Seamless integration between on-chain governance and real-world property management, with automated notifications to legal custodians and transparent execution tracking. |

### Milestone 3 – Compliance Automation & Ecosystem Integration

**Problem Solved:** Manual compliance processes create bottlenecks and regulatory risks, while lack of ecosystem integration limits adoption and utility.

**Technical Integration:** Deploys smart contracts for automated compliance enforcement and creates integration tools for broader ecosystem adoption.

- **Estimated Duration:** 1 month
- **FTE:** 3.5
- **Costs:** $30,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 license for all deliverables |
| **0b.** | Documentation | Complete system documentation, partner integration guides, compliance automation documentation, and community onboarding materials. |
| **0c.** | Testing and Testing Guide | Performance testing under load (≥1,000 transactions/second), stress testing of compliance systems, and end-to-end integration testing with partner systems. |
| **0d.** | Docker | Production-ready Docker configurations with monitoring, logging, and automated deployment capabilities. |
| 0e. | Article | Launch announcement article showcasing the complete system capabilities, real-world use cases, and roadmap for ecosystem growth, distributed across multiple channels. |
| 1. | Automated Compliance Contracts | **Concrete Implementation:** ink! smart contracts automatically enforcing KYC requirements, AML screening, asset freezing capabilities for legal compliance, and jurisdiction-specific trading restrictions. **Functionality:** Compliance rules are enforced at the protocol level without manual intervention, reducing regulatory risk and operational overhead while maintaining transparent audit trails. |
| 2. | Partner Integration Toolkit | **Concrete Implementation:** SDK, API documentation, integration guides, and sample implementations for property managers, legal custodians, and DeFi protocols to integrate with Homebase. **Functionality:** Third parties can easily integrate property tokenization into their existing workflows, expand the network of available properties, and create new use cases for fractional real estate ownership. |
| 3. | HanPay Wallet Integration | **Concrete Implementation:** Deep integration between Homebase protocol and HanPay wallet for seamless payment processing, fiat on/off ramps, and enhanced user experience for non-crypto native users. **Functionality:** Users can easily convert between fiat and crypto for property investments, manage their fractional ownership portfolios, and access property-related financial services through a unified interface. |
| 4. | Community Launch & Growth Tools | **Concrete Implementation:** Ambassador program framework, developer documentation portal, community governance tools, and growth tracking analytics. **Functionality:** Sustainable community growth through incentivized participation, clear pathways for ecosystem contributors, and data-driven optimization of user acquisition and retention. |

---

## Market Validation

- Global real estate tokenization market projected >$16 trillion by 2030.  
- Initial interest from landlords, sellers, and investors in Nigeria, Serbia, EU.  
- Early pilot discussions with property managers and legal custodians.  
- Positive organic feedback from live app demos and community.

---

## Legal & Operational Flow

We recognize that technical integration is only one side of bringing RWAs on-chain.

- **Asset Custody:**  
  Real-world property onboarding will be done through partnerships with legal custodians and notaries, who will verify ownership, legal status, and ensure asset-backing.

- **Legal Agreements:**  
  Every tokenized property will be backed by a legal contract defining rights, revenue sharing, and governance, ensuring fractional token holders are protected.

- **Operational Partners:**  
  We are in early discussions with real estate providers and legal advisors to pilot 1–2 properties, allowing us to validate the legal-to-on-chain bridge.

This approach ensures Homebase controls distribution with both technical and legal safeguards.

---

## Asset Distribution Flow

1️⃣ Register property → Verified with legal docs, IPFS hash on-chain.  
2️⃣ Mint fractional tokens → Capped supply tied to legal asset.  
3️⃣ Enable marketplace trading → On-chain, with backend KYC/compliance.  
4️⃣ Allow governance participation → Token-holder votes.  
5️⃣ Settle via Homebase or HanPay Wallet → User flexibility.  
6️⃣ Unlock cross-chain liquidity → XCM connections to DeFi.

---

## Future Plans

**Long-term Maintenance and Development:**
- Revenue model through transaction fees (0.5% per trade) and property listing fees
- Token-based ecosystem incentives for community-driven development
- Strategic partnerships with real estate firms for sustainable property pipeline
- Integration with traditional real estate financing for expanded market reach

**Short-term Enhancement and Promotion:**
- Launch developer grants program for ecosystem tools and integrations
- Establish partnerships with major property management companies
- Create educational content series on real estate tokenization
- Implement referral programs for early adopters and community growth

**Long-term Vision:**
- Expand into commercial real estate and REITs tokenization
- Develop algorithmic property valuation using on-chain data
- Create insurance products specifically for tokenized real estate
- Build cross-chain real estate index funds and investment products

---

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation Website and recommendations from Polkadot community members.

**Additional Context:**
- **Work Already Done:** Custom Substrate blockchain deployed, Node.js backend operational, frontend applications live, initial compliance framework implemented
- **Previous Financial Contributors:** Self-funded development to current stage, no external investors
- **Previous Grant Applications:** No previous grant applications submitted to Web3 Foundation or other blockchain foundations

**HanPay Integration:**
Our existing HanPay wallet platform ([https://hanpay-portal.vercel.app/#hero](https://hanpay-portal.vercel.app/#hero)) provides additional payment infrastructure and fiat on/off-ramp capabilities that enhance the Homebase ecosystem without requiring additional grant funding.

**Community Engagement:**
- Early beta testing with 200+ users across target markets
- Positive feedback from property management professionals
- Growing Discord community with active developers and potential users
- Regular AMAs and community updates to maintain engagement

**Technical Readiness:**
All core infrastructure is already operational, with this grant funding focused on enhancing functionality, ensuring production readiness, and driving ecosystem adoption rather than building from scratch.

---

**Homebase + HanPay will unlock the global real estate market on Polkadot — making property as liquid, transparent, and programmable as native crypto assets.**
