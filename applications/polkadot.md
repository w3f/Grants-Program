# The Social Mask - Privacy-Preserving Journalist Identity on Substrate

- **Team Name:** The Social Mask Project
- **Payment Details:**
  - **DOT**: [Polkadot address to be provided after approval]
  - **Payment**: [Polkadot AssetHub address to be provided] (USDC)
- **[Level](https://grants.web3.foundation/docs/Introduction/levels):** 2

## Project Overview :page_facing_up:

### Overview

**Tagline:** Privacy-preserving journalist identity and credential verification system built on Substrate.

**Description:**

The Social Mask is a decentralized platform that protects investigative journalists in authoritarian regimes by providing them with verifiable anonymous credentials and secure publishing infrastructure. Over 1,200 journalists have been murdered globally in the past two decades, with 140+ killed in Mexico alone. Our platform leverages Substrate's identity pallets and cross-chain capabilities to create a journalism-specific parachain that enables:

- **Anonymous Verifiable Credentials**: Zero-knowledge proofs for journalist accreditation without revealing personal identity
- **Cross-chain Press Card System**: Interoperable credentials verified across Polkadot ecosystem
- **Decentralized Identity (DID)**: Self-sovereign identity management using Substrate's identity pallet
- **Censorship-resistant Publishing**: Integration with IPFS and decentralized storage

**Substrate/Polkadot Integration:**

Our platform will be built as a Substrate-based parachain that extends the identity pallet with journalism-specific credential management. We'll leverage Polkadot's XCM (Cross-Chain Messaging) to enable credential verification across the entire ecosystem, allowing journalists to prove their accreditation on any parachain without compromising anonymity.

**Why This Project:**

As journalists ourselves from Mexico, we've witnessed colleagues murdered for investigating cartel corruption and government complicity. Traditional press credentials make journalists targets. We're building this on Polkadot because Substrate's modular architecture allows us to create specialized pallets for journalistic workflows while benefiting from the security and interoperability of the Relay Chain.

### Project Details

**Technical Architecture:**

**Substrate Pallets to be Developed:**

1. **Journalist Identity Pallet**
   - Self-sovereign DIDs for journalists
   - Zero-knowledge credential issuance and verification
   - Reputation system without revealing identity
   - Integration with existing Substrate identity pallet

2. **Press Credential Pallet**
   - Issuance of verifiable press credentials by trusted organizations
   - Renewal and revocation mechanisms
   - Cross-chain credential verification via XCM
   - Privacy-preserving credential presentation

3. **Publication Registry Pallet**
   - Content addressing for articles stored on IPFS
   - Cryptographic signatures linking anonymous authors to verifiable credentials
   - Timestamping and proof of publication
   - Content moderation via decentralized governance

**Technology Stack:**

- **Runtime**: Substrate FRAME v3
- **Language**: Rust for pallets, TypeScript for frontend
- **Storage**: IPFS for content, on-chain for credentials/metadata
- **Identity**: DID specification, zero-knowledge proofs (ZK-SNARKs)
- **Frontend**: Polkadot.js for wallet integration, React for UI
- **Cross-chain**: XCM for credential verification across parachains

**What We Will NOT Provide:**

- Full parachain deployment (this grant covers development only, not slot auction)
- Mobile apps (web-first approach)
- Content moderation by centralized authority
- Legal defense services for journalists
- Physical security or relocation assistance


Things that shouldn’t be part of the application (see also our [FAQ](../docs/faq.md)):

- The (future) tokenomics of your project
- For non-infrastructure projects—deployment and hosting costs, maintenance or audits
- Business-oriented activities (marketing, business planning), events or outreach

### Ecosystem Fit

Help us locate your project in the Polkadot/Substrate/Kusama landscape and what problems it tries to solve by answering each of these questions:

- Where and how does your project fit into the ecosystem?
- Who is your target audience (parachain/dapp/wallet/UI developers, designers, your own user base, some dapp's userbase, yourself)?
- What need(s) does your project meet?
- How did you identify these needs? Please provide evidence in the form of (scientific) articles, forum discussions, case studies, or raw data.
- Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?
  - If so, how is your project different? Please identify and assess any projects addressing the same need and explain how your project is distinct. Feel free to include applicable research data, statistics, or metrics.
  - If not, please indicate why such a project might not have been possible, successful, or attempted. 
- Are there any projects similar to yours in related ecosystems? 

## Team :busts_in_silhouette:

> [!IMPORTANT]
> Please note that the data provided in this section is for administrative and informational purposes only. All beneficiaries of a grant must also be listed in the KYC/KYB process during the application phase. See our [FAQ](https://grants.web3.foundation/docs/faq#what-is-kyckyb-and-why-do-i-have-to-provide-this-data) for more info.

### Team members

- **Oswaldo Navarro Hernández** - CEO & Legal Lead
- **Emilio Navarro Mejía** - Technical Lead & Substrate Developer

### Contact

- **Contact Name:** Oswaldo Navarro Hernández
- **Contact Email:** [To be provided]
- **Website:** [In development]

### Legal Structure

- **Registered Address:** Mexico City, Mexico (full address to be provided upon grant approval)
- **Registered Legal Entity:** The Social Mask Foundation (in formation)

### Team's experience

**Oswaldo Navarro Hernández (CEO & Legal Lead)**

Oswaldo is an investigative journalist with 8 years of experience covering organized crime and corruption in Mexico. He has contributed to international investigations published in The Guardian and El País, focusing on cartel infiltration of government institutions. After receiving death threats for exposing police complicity in journalist murders, Oswaldo became passionate about building technological solutions for press freedom. He holds a law degree and has legal expertise in international human rights law and digital privacy regulations.

**Emilio Navarro Mejía (Technical Lead & Substrate Developer)**

Emilio is a blockchain developer with 4 years of experience building decentralized applications. He has contributed to Substrate-based projects and has deep expertise in Rust, FRAME pallets, and cryptographic identity systems. Previously, Emilio worked on privacy-preserving voting systems and zero-knowledge proof implementations. He studied computer science with a specialization in cryptography and distributed systems.

**Previous Grant Applications:**

This is our first Web3 Foundation grant application. We have parallel applications pending with:
- Zcash Community Grants (privacy-preserving payments)
- Filecoin Foundation (decentralized storage integration)
- Open Technology Fund (digital security infrastructure)

### Team Code Repos

- https://github.com/TheSocialMask/substrate-journalist-identity (Private during development - will be open-sourced)
- https://github.com/TheSocialMask/zk-press-credentials (Private during development - will be open-sourced)

**Team Member GitHub Accounts:**

- https://github.com/[Oswaldo's account - to be provided]
- https://github.com/[Emilio's account - to be provided]

### Team LinkedIn Profiles (if available)

- [Oswaldo Navarro - to be provided]
- [Emilio Navarro - to be provided]


## Development Status :open_book:

**Current Status:**

We are in the early research and design phase. We have:

1. **Completed threat modeling** for journalists in authoritarian regimes
2. **Researched existing identity solutions** in Substrate (KILT, Litentry) and identified gaps for journalism use cases
3. **Drafted technical specifications** for custom pallets (Journalist Identity, Press Credential, Publication Registry)
4. **Established partnerships** with Committee to Protect Journalists (CPJ) and Reporters Without Borders for credential issuance workflows

**Relevant Research & Publications:**

- UNESCO report on journalist safety: [Press Freedom & Safety of Journalists](https://en.unesco.org/themes/safety-journalists)
- Article 19 research on digital security for journalists: [Digital Security & Journalism](https://www.article19.org/data/files/digital_security_for_journalists.pdf)
- Committee to Protect Journalists database: [1,200+ journalists killed since 2000](https://cpj.org/data/killed/)
- W3C Decentralized Identifiers specification: [DID Core](https://www.w3.org/TR/did-core/)
- ZK-SNARKS for anonymous credentials: Academic research on zero-knowledge proofs for identity

**Community Discussions:**

- Polkadot Forum thread on identity use cases (planned - will post after initial grant response)
- Substrate Stack Exchange questions on custom identity pallets (in preparation)
- Discussions with KILT Protocol team on integration possibilities (informal conversations)

**Previous Work:**

- Proof-of-concept anonymous publishing platform (centralized, pre-blockchain)
- Research on Zcash shielded transactions for journalist payments
- IPFS integration testing for censorship-resistant content storage

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 5 months
- **Full-Time Equivalent (FTE):** 1.5 FTE
- **Total Costs:** 45,000 USD
- **DOT %:** 78% (35,000 USD in DOT)

---

### Milestone 1 — Journalist Identity Pallet & Core Infrastructure

- **Estimated duration:** 6 weeks
- **FTE:** 2
- **Costs:** 9,000 USD (7,000 USD in DOT + 2,000 USD in USDC)
> **The default deliverables 0a-0d below are mandatory for all milestones**, and deliverable 0e at least for the last one.

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 / GPLv3 / MIT / Unlicense. See the [delivery guidelines](https://grants.web3.foundation/docs/Support%20Docs/milestone-deliverables-guidelines#license) for details. |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. See the [delivery guidelines](https://grants.web3.foundation/docs/Support%20Docs/milestone-deliverables-guidelines#documentation) for details. |
| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | We will provide comprehensive **inline documentation** of the Journalist Identity Pallet, including **Rust docs** for all public functions. We will also deliver a **tutorial** showing how to create a journalist DID, issue a verifiable credential, and verify it on-chain. |
| **0c.** | Testing and Testing Guide | The pallet will have **90%+ unit test coverage**, including tests for DID creation, credential issuance, verification, and revocation. We will provide a testing guide explaining how to run tests via `cargo test`. |
| **0d.** | Docker | We will provide a **Dockerfile** that spins up a Substrate node with the Journalist Identity Pallet pre-configured. Users can interact with it via Polkadot.js Apps UI. |
| 0e. | Article | We will publish an article on **Medium/Polkadot blog** titled "Building Privacy-Preserving Journalist Identity on Substrate" explaining the threat model, technical architecture, and DID implementation. |
| 1. | Substrate Pallet: Journalist Identity | This pallet will implement **Decentralized Identifiers (DIDs)** specifically for journalists. It will extend Substrate's native identity pallet with privacy-preserving features: <br>- **DID Registration**: Journalists can create a DID without revealing personal information<br>- **Credential Schema**: Define schemas for press credentials (freelance, staff journalist, photo journalist, etc.)<br>- **Credential Issuance**: Trusted organizations (CPJ, RSF, etc.) can issue verifiable credentials to DIDs<br>- **Zero-Knowledge Verification**: Journalists can prove they hold a valid credential without revealing which organization issued it<br>- **Revocation Registry**: On-chain revocation status for compromised credentials |
| 2. | Substrate Chain (Testnet) | We will launch a **testnet parachain** (Rococo compatible) with the Journalist Identity Pallet integrated. This chain will include:<br>- Collator nodes for block production<br>- Integration with Rococo Relay Chain<br>- RPC endpoints for credential verification |
| 3. | TypeScript SDK | We will deliver a **JavaScript/TypeScript library** (`@socialmask/substrate-identity`) that wraps pallet extrinsics for easy integration:<br>- `createJournalistDID()`<br>- `issueCredential(did, credentialType)`<br>- `verifyCredential(did, proof)`<br>- Integration with Polkadot.js for wallet signing |

---

### Milestone 2 — Press Credential Pallet & XCM Integration

- **Estimated Duration:** 6 weeks
- **FTE:** 1.5
- **Costs:** 13,500 USD (10,500 USD in DOT + 3,000 USD in USDC)

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | Inline documentation for the Press Credential Pallet, plus a **tutorial on cross-chain credential verification** using XCM. We will document how other parachains can verify journalist credentials via XCM messages. |
| **0c.** | Testing and Testing Guide | **Unit tests** for credential lifecycle (issuance, renewal, revocation) and **integration tests** for XCM message handling. Testing guide will include instructions for simulating cross-chain verification on Rococo. |
| **0d.** | Docker | Updated Dockerfile with both Journalist Identity and Press Credential pallets, plus XCM configuration for Rococo testnet. |
| 0e. | Article | Article on **"Cross-Chain Credential Verification with XCM"** demonstrating how our journalism credentials can be verified on any Polkadot parachain. |
| 1. | Substrate Pallet: Press Credential | This pallet manages the full lifecycle of press credentials:<br>- **Credential Types**: Define standard credential types (investigative journalist, photojournalist, war correspondent, etc.)<br>- **Organizational Registry**: Whitelist of trusted credential issuers (Committee to Protect Journalists, Reporters Without Borders, etc.)<br>- **Issuance Workflow**: Multi-signature approval from issuing organizations<br>- **Expiration & Renewal**: Time-bound credentials with renewal mechanisms<br>- **Revocation**: Emergency revocation for compromised identities<br>- **Privacy-Preserving Queries**: Prove credential validity without revealing issuer or credential holder |
| 2. | XCM Integration | Implement **Cross-Chain Messaging (XCM)** for credential verification across Polkadot ecosystem:<br>- XCM handlers for credential verification requests<br>- Response messages with cryptographic proofs<br>- Integration with Rococo testnet for multi-chain testing<br>- Example use case: A DAO on another parachain can verify journalist credentials before granting voting rights |
| 3. | Governance Module | Basic **on-chain governance** for managing credential issuers:<br>- Proposal system for adding/removing trusted issuers<br>- Council voting mechanism<br>- Emergency revocation powers |

---

### Milestone 3 — Publication Registry Pallet & Frontend Interface

- **Estimated Duration:** 5 weeks
- **FTE:** 1.5
- **Costs:** 11,500 USD (9,000 USD in DOT + 2,500 USD in USDC)

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 for pallets, MIT for frontend |
| **0b.** | Documentation | Full documentation for Publication Registry Pallet, including **API reference** and **integration guide for publishers**. Frontend will have **user manual** for journalists on creating anonymous publications. |
| **0c.** | Testing and Testing Guide | Unit tests for publication registration, authorship proofs, and IPFS integration. End-to-end tests for the frontend workflow (create DID → publish article → verify authorship). |
| **0d.** | Docker | Complete Docker Compose setup with Substrate node, IPFS node, and frontend application. Single command to launch the full stack. |
| 0e. | Article | Tutorial article: **"Publishing Anonymous Journalism on Substrate"** with step-by-step guide for journalists. |
| 1. | Substrate Pallet: Publication Registry | This pallet creates an on-chain registry of publications:<br>- **Content Addressing**: Store IPFS CIDs of published articles<br>- **Authorship Proofs**: Link publications to journalist DIDs using cryptographic signatures<br>- **Anonymous Publishing**: Journalists can publish under pseudonyms while proving they hold valid credentials<br>- **Timestamping**: Immutable proof-of-publication timestamps<br>- **Dispute Resolution**: Mechanism for challenging fraudulent authorship claims |
| 2. | IPFS Integration | Integration layer between Substrate and IPFS:<br>- Automatic pinning of published content<br>- Content moderation via decentralized flagging system<br>- Gateway for accessing content via IPFS |
| 3. | Frontend Application | React-based web application:<br>- **Wallet Integration**: Polkadot.js wallet connection<br>- **DID Management**: Create and manage journalist DIDs<br>- **Credential Dashboard**: View active credentials, expiration dates, and issuing organizations<br>- **Publishing Interface**: Write and publish articles to IPFS, register on-chain<br>- **Verification Tool**: Public interface to verify authorship of published articles |

---

### Milestone 4 — Security Audit, Documentation & Mainnet Preparation

- **Estimated Duration:** 4 weeks
- **FTE:** 1
- **Costs:** 11,000 USD (8,500 USD in DOT + 2,500 USD in USDC)

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | **Complete documentation suite** including:<br>- Developer documentation for all three pallets<br>- Integration guides for other parachains<br>- Security best practices for journalists<br>- Deployment guide for running collator nodes |
| **0c.** | Testing and Testing Guide | Final test suite covering all edge cases, attack vectors, and integration scenarios. **Security testing guide** for penetration testing the system. |
| **0d.** | Docker | Production-ready Docker images for mainnet deployment. |
| 0e. | Article | **Final retrospective article** on building journalism infrastructure on Polkadot, lessons learned, and future roadmap. |
| 1. | Security Audit | External security audit by reputable firm (Trail of Bits, Quarkslab, or similar):<br>- Smart contract/pallet audit<br>- Cryptographic review of zero-knowledge proof implementation<br>- Penetration testing of frontend application<br>- Threat model validation |
| 2. | Performance Optimization | Optimize pallet performance for production:<br>- Benchmarking all extrinsics<br>- Weight adjustments for on-chain operations<br>- Database optimization for credential lookups |
| 3. | Mainnet Preparation | Documentation and tooling for mainnet launch:<br>- Parachain auction strategy document<br>- Migration scripts for testnet data<br>- Monitoring and alerting infrastructure<br>- Community governance framework |
| 4. | Journalist Training Materials | Educational content for end users:<br>- Video tutorials on creating DIDs and credentials<br>- OPSEC guide for journalists in authoritarian regimes<br>- FAQ and troubleshooting documentation |

## Future Plans

**Long-term Financing:**

1. **Parachain Slot Auction**: After successful grant completion, we will crowdloan for a Polkadot parachain slot. We're exploring partnerships with existing parachains (Astar, Moonbeam) to launch as a common-good parachain dedicated to press freedom.

2. **Sustainable Revenue Model**:
   - Transaction fees from credential issuances (subsidized for journalists, paid by news organizations)
   - Premium features for media organizations (advanced analytics, bulk credential management)
   - Partnerships with press freedom NGOs for ongoing funding

3. **Grant Diversification**: We have parallel applications with Zcash (privacy payments), Filecoin (storage), and OpenTech Fund (security infrastructure). This grant focuses on identity; other ecosystems provide complementary services.

**Short-term Enhancement & Promotion:**

1. **Pilot Program (Months 6-12)**:
   - Launch beta with 50 journalists from Mexico and Russia
   - Partner with Committee to Protect Journalists for credential issuance
   - Gather feedback and iterate on UX

2. **Ecosystem Integration**:
   - Integrate with KILT Protocol for advanced identity features
   - Partnership with Subsocial for decentralized content publishing
   - Litentry integration for cross-chain identity aggregation

3. **Community Building**:
   - Present at Polkadot Decoded and Sub0 conferences
   - Workshops at journalism conferences (GIJN, ONA)
   - Research partnerships with academic institutions studying press freedom

**Long-term Vision:**

- **Year 1-2**: Establish as the standard for verifiable anonymous journalism credentials on Polkadot
- **Year 2-3**: Expand to other high-risk professions (whistleblowers, human rights lawyers, activists)
- **Year 3+**: Become a common-good parachain providing identity infrastructure for privacy-critical applications across the entire Polkadot ecosystem

We envision The Social Mask becoming the foundational layer for anonymous yet verifiable identities for anyone facing threats for exercising free speech.

## Referral Program (optional) :moneybag:

Not applicable - we do not have a referrer at this time.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?**

We discovered the Web3 Foundation Grants Program through the Polkadot website while researching decentralized identity solutions for our journalism protection project. We were particularly inspired by KILT Protocol's successful grant and wanted to build specialized journalism infrastructure on Substrate.

**Additional Context:**

**Work Already Completed:**

- Extensive threat modeling and security research for journalist protection
- Proof-of-concept anonymous publishing platform (centralized architecture)
- Partnerships established with Committee to Protect Journalists and Reporters Without Borders for credential issuance workflows
- Initial technical specifications for custom Substrate pallets
- User research with 30+ journalists in Mexico, Russia, and Hong Kong

**Other Funding Applications:**

We have submitted parallel grant applications to:

1. **Zcash Community Grants** ($45,000) - Focus: Privacy-preserving payment infrastructure using shielded transactions (z-addresses) to protect financial transactions for journalists
2. **Filecoin Foundation** ($45,000) - Focus: Decentralized storage integration for censorship-resistant content archiving
3. **Open Technology Fund** ($45,000) - Focus: Digital security infrastructure and training programs for journalists

**Strategic Rationale:** Each grant targets a specific component of the full platform:
- **Polkadot/Substrate** (this application): Identity and credential verification
- **Zcash**: Private payments
- **Filecoin**: Decentralized storage
- **OpenTech Fund**: Security infrastructure and community training

If all grants are awarded, we will coordinate development to ensure seamless integration across ecosystems. If only some are awarded, we will prioritize core functionality based on available resources.

**Alignment with Polkadot Ecosystem:**

We believe this project aligns with Polkadot's vision of a multi-chain future where specialized parachains serve specific use cases. Journalism protection is a real-world problem requiring the interoperability, scalability, and privacy that only Polkadot's architecture can provide. By building on Substrate, we ensure our solution is future-proof and can evolve with the ecosystem.

**Impact Metrics:**

If successful, we anticipate:
- 500+ journalists using the platform within the first year
- 10+ news organizations issuing credentials
- 1,000+ published articles protected by our infrastructure
- Integration with at least 3 other Polkadot parachains for cross-chain use cases

**Contact for Questions:**

We are happy to provide additional technical details, discuss integration strategies with existing Polkadot projects, or arrange calls with our team and partner organizations (Committee to Protect Journalists, Reporters Without Borders). Please feel free to reach out via the contact information provided above.