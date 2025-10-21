---
project_name: "The Social Mask - Privacy-Preserving Journalist Identity on Substrate"
level: "2"
---

# The Social Mask - Privacy-Preserving Journalist Identity on Substrate

- **Team Name:** The Social Mask Project
- **Payment Details:**
  - **DOT**: [Will be provided after approval for security reasons]
  - **Payment**: [Polkadot AssetHub address to be provided] (USDC)
- **[Level](https://grants.web3.foundation/docs/Introduction/levels):** 2

## Project Overview :page_facing_up:

### Overview

**Tagline:** Privacy-preserving journalist identity and credential verification built on Substrate.

**Description:**

Look, we're building The Social Mask because we've seen what happens when journalists don't have protection. Over 1,200 journalists murdered globally in the past 20 years, with 140+ killed in Mexico alone. One of our friends was killed last year for investigating cartel corruption. This is personal.

We're building a decentralized platform that protects investigative journalists in authoritarian regimes by giving them verifiable anonymous credentials and secure publishing infrastructure. Using Substrate's identity pallets and cross-chain capabilities, we'll create a journalism-specific parachain that enables:

- **Anonymous Verifiable Credentials**: Zero-knowledge proofs for journalist accreditation without revealing personal identity
- **Cross-chain Press Card System**: Interoperable credentials verified across Polkadot ecosystem
- **Decentralized Identity (DID)**: Self-sovereign identity management using Substrate's identity pallet
- **Censorship-resistant Publishing**: Integration with IPFS and decentralized storage

**Substrate/Polkadot Integration:**

Our platform will be built as a Substrate-based parachain that extends the identity pallet with journalism-specific credential management. We'll leverage Polkadot's XCM (Cross-Chain Messaging) to enable credential verification across the entire ecosystem, allowing journalists to prove their accreditation on any parachain without compromising anonymity.

**Why This Project:**

Real talk - we're journalists ourselves from Mexico. We've witnessed colleagues murdered for investigating cartel corruption and government complicity. Traditional press credentials make journalists targets. We're building this on Polkadot because Substrate's modular architecture allows us to create specialized pallets for journalistic workflows while benefiting from security and interoperability of the Relay Chain.

### Project Details

**Technical Architecture:**

We'll develop three core Substrate pallets (osea, basically the building blocks):

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
   - Content addressing for articles stored in IPFS
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

**What We Won't Provide:**

- Full parachain deployment (this grant covers development only, not slot auction)
- Mobile apps (we're going web-first)
- Content moderation by centralized authority
- Legal defense services for journalists
- Physical security or relocation assistance

### Ecosystem Fit

**Position in the Ecosystem:**

The Social Mask fits into Polkadot's identity and governance vertical. We're building journalism-specific infrastructure that extends Substrate's native capabilities for real-world impact. Our parachain will be one of the first use cases demonstrating how Polkadot's cross-chain architecture can protect human rights defenders.

**Target Audience:**

- **Primary**: Investigative journalists in Mexico, Russia, Hong Kong, Turkey, and other countries with press freedom restrictions
- **Secondary**: Human rights organizations, press freedom NGOs, independent media outlets
- **Tertiary**: Other parachains requiring verifiable credentials (voting systems, whistleblower platforms, etc.)
- **Technical**: Substrate developers interested in identity and privacy pallets

**Needs We're Addressing:**

1. **Identity Protection**: Traditional press credentials are death sentences in authoritarian regimes
2. **Credential Verification**: Publishers need to verify journalist authenticity without compromising anonymity
3. **Censorship Resistance**: Government server seizures and domain blocking silence critical journalism
4. **Cross-platform Interoperability**: Credentials should work across multiple platforms and parachains

**Need Identification:**

We've done our homework on this:
- **Committee to Protect Journalists Database**: [1,200+ journalists killed since 2000](https://cpj.org/data/killed/)
- **UNESCO Report**: [Press Freedom & Safety of Journalists](https://en.unesco.org/themes/safety-journalists)
- **Article 19 Research**: [Digital Security for Journalists](https://www.article19.org/data/files/digital_security_for_journalists.pdf)
- **Reporters Without Borders**: 2024 World Press Freedom Index shows 70% of countries have "problematic" or worse press freedom
- **Our User Research**: Interviews with 30+ journalists in Mexico, Russia, and Hong Kong revealed need for anonymous yet verifiable credentials

**Similar Projects in Polkadot:**

- **KILT Protocol**: Provides decentralized identifiers, but not journalism-specific. We'll integrate with KILT for DID infrastructure while adding journalistic credential workflows.
- **Litentry**: Focuses on identity aggregation across chains. Our project's complementary - we provide the journalism credential layer that could be aggregated by Litentry.
- **Subsocial**: Decentralized social network on Substrate, but not privacy-focused for high-risk users.

**Our Differentiation:**

- Journalism-specific pallets tailored to press freedom workflows
- Zero-knowledge credentials that prove journalistic accreditation without revealing identity
- Threat model designed for authoritarian regimes (not just censorship resistance but physical safety)
- Integration with existing press freedom organizations for credential issuance

**Similar Projects in Other Ecosystems:**

Honestly, there's not much out there that does what we're doing:
- **Ceramic Network (Ethereum)**: Decentralized identity protocol, but lacks Polkadot's cross-chain capabilities
- **Lens Protocol (Polygon)**: Social media with portable identity, but not designed for high-risk journalism
- **None** specifically adress journalist protection with zero-knowledge credentials

## Team :busts_in_silhouette:

### Team members

- **Oswaldo Navarro Hernández** - CEO & Legal Lead
- **Emilio Navarro Mejía** - Technical Lead & Substrate Developer

### Contact

- **Contact Name:** Oswaldo Navarro Hernández
- **Contact Email:** hi@socialmask.org
- **Website:** [In development - we're setting this up now]

### Legal Structure

- **Registered Address:** Mexico City, Mexico (full adress to be provided upon grant approval for security reasons)
- **Registered Legal Entity:** The Social Mask Foundation (still finalizing this with our lawyer)

### Team's Experience

**Oswaldo Navarro Hernández (CEO & Legal Lead)**

Oswaldo's an investigative journalist with 8 years of experience covering organized crime and corruption in Mexico. He's contributed to international investigations published in The Guardian and El País, focusing on cartel infiltration of government institutions. After recieving death threats for exposing police complicity in journalist murders, Oswaldo became passionate about building technological solutions for press freedom. He holds a law degree and has legal expertise in international human rights law and digital privacy regulations.

**Emilio Navarro Mejía (Technical Lead & Substrate Developer)**

Emilio's a blockchain developer with 4 years of experience building decentralized applications. He's contributed to Substrate-based projects and has deep expertise in Rust, FRAME pallets, and cryptographic identity systems. Previously, Emilio worked on privacy-preserving voting systems and zero-knowledge proof implementations. He studied computer science with a specialization in cryptography and distributed systems.

We've been working on this project for 8 months with almost no funding. This grant would be huge for us.

**Previous Grant Applications:**

This is our first Web3 Foundation grant application. We have parallel applications pending with:
- Zcash Community Grants (privacy-preserving payments)
- Filecoin Foundation (decentralized storage integration)
- Open Technology Fund (digital security infrastructure)

### Team Code Repos
https://github.com/Emilio983/SocialMask
**Team Member GitHub Accounts:**

- Oswaldo: GitHub profile being set up (previously worked under private repos for security)
- Emilio:[ https://github.com/emilio-navarro-dev](https://github.com/Emilio983)

### Team LinkedIn Profiles
-Emilio Navarro: https://www.linkedin.com/in/emilio-navarro-mejia-b4944238a/
-Oswaldo Navarro: He doesn't have LinkedIn, but here I leave you everything he knows and where he has developed. He works in government and doesn't use GitHub 
because he doesn't program, and he doesn't use LinkedIn because in Mexico in certain parts it's not so common.
https://admiweb.col.gob.mx/archivos_prensa/banco_img/file_6578a8fe702a8_Oswaldo_Navarro_Hernndez.pdf
## Development Status :open_book:

**Current Status:**

We're in the early research and design phase. We've completed:

1. **Threat modeling** for journalists in authoritarian regimes
2. **Research on existing identity solutions** in Substrate (KILT, Litentry) and identified gaps for journalism use cases
3. **Technical specifications** for custom pallets (Journalist Identity, Press Credential, Publication Registry)
4. **Partnerships** with Committee to Protect Journalists (CPJ) and Reporters Without Borders for credential issuance workflows

Honestly, we're a bit nervous about the technical complexity, but we've done our homework.

**Relevant Research & Publications:**

- UNESCO report on journalist safety: [Press Freedom & Safety of Journalists](https://en.unesco.org/themes/safety-journalists)
- Article 19 research on digital security for journalists: [Digital Security & Journalism](https://www.article19.org/data/files/digital_security_for_journalists.pdf)
- Committee to Protect Journalists database: [1,200+ journalists killed since 2000](https://cpj.org/data/killed/)
- W3C Decentralized Identifiers specification: [DID Core](https://www.w3.org/TR/did-core/)
- ZK-SNARKS for anonymous credentials: Academic research on zero-knowledge proofs for identity

**Previous Work:**

- Proof-of-concept anonymous publishing platform (centralized, pre-blockchain)
- Research on Zcash shielded transactions for journalist payments
- IPFS integration testing for censorship-resistant content storage

## How This Project Increases DOT Token Usage

**Response to @Emilio983's question:**

Look, this is actually really important for us to explain. We're not just building on Polkadot - we're building a system that will drive significant DOT token adoption and usage. Let me break down exactly how:

### Direct DOT Usage by Journalists

Every journalist using our platform will need to hold DOT for multiple purposes:

1. **Credential Issuance Fees**: When a journalist requests a verifiable credential from an organization like CPJ or Reporters Without Borders, they'll pay a small fee in DOT (we estimate around 2-5 DOT per credential issuance). This covers the on-chain transaction costs and incentivizes credential issuers.

2. **Credential Renewals**: Press credentials expire (typically annually). Renewal transactions require DOT. We estimate each journalist will renew 1-2 times per year.

3. **Publication Registry Fees**: Every time a journalist publishes an article and registers it on-chain with authorship proof, they pay a small DOT fee (maybe 0.5-1 DOT per publication).

4. **Cross-chain Verification**: When journalists need to prove their credentials on another parachain (for example, to gain access to a DAO or voting system), XCM transactions require DOT.

**Conservative Estimate**: 
- Year 1: 300 journalists × 10 DOT average holding = 3,000 DOT in circulation
- Year 2: 500 journalists × 15 DOT average holding = 7,500 DOT
- Year 3: 1,000+ journalists × 20 DOT average = 20,000+ DOT

### Media Organizations Buying DOT

This is where it gets interesting. Media organizations (newspapers, TV stations, independent media outlets) will need DOT to:

1. **Bulk Credential Purchases**: Organizations buying credentials for their staff journalists (10-50 journalists at once)
2. **Premium Features**: Advanced analytics, bulk credential management, organizational dashboards
3. **Staking for Trusted Issuer Status**: Organizations that want to become credential issuers themselves (like a major newspaper verifying its own journalists) will need to stake DOT as collateral

**Conservative Estimate**:
- 10 media organizations × 500 DOT each = 5,000 DOT
- 5 organizations staking as issuers × 2,000 DOT each = 10,000 DOT

### Governance Participation

Our parachain will have on-chain governance for:
- Adding/removing trusted credential issuers
- Setting fee structures
- Emergency revocation decisions
- Protocol upgrades

Participation in governance requires DOT staking. We expect active journalists and press freedom organizations to participate heavily in governance since it directly affects their safety.

### Network Effects & Cross-chain Integration

O sea (I mean), the real power comes from cross-chain usage:

1. **Other Parachains Integrating Our Credentials**: Imagine a decentralized voting system that needs to verify journalist identity, or a whistleblower platform that needs to confirm someone's a real journalist. Every verification requires DOT for XCM messages.

2. **Marketplace Effects**: As more journalists hold DOT and more organizations need DOT, we're creating organic demand that goes beyond just our parachain.

### Realistic Numbers (Not Exaggerating)

We think this approach will drive:
- **Year 1**: ~8,000-10,000 DOT in active circulation
- **Year 2**: ~20,000-25,000 DOT
- **Year 3**: ~40,000+ DOT

These are conservative estimates. If we hit our targets (1,000+ journalists, 50+ media partnerships), the numbers could be 2-3x higher.

**Why DOT Specifically?**

We chose Polkadot precisely because the economics make sense for our use case:
- XCM allows cross-chain credential verification (can't do this on Ethereum or other ecosystems)
- DOT staking for governance aligns incentives between journalists, media orgs, and the network
- Substrate's flexibility lets us build journalism-specific fee structures

Actually, let me clarify - we're not just asking for a grant. We're proposing to build infrastructure that will onboard hundreds of real-world users (journalists) who will become DOT holders and active participants in the Polkadot ecosystem. That's the real value here.

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 21 weeks (around 5 months, maybe a bit longer if we hit blockers)
- **Full-Time Equivalent (FTE):** 1 FTE
- **Total Costs:** 25,000 USD
- **DOT %:** 78% (19,500 USD in DOT + 5,500 USD in USDC)

---

### Milestone 1 — Journalist Identity Pallet & Core Infrastructure

- **Estimated duration:** 6 weeks (possibly 7 if testing takes longer)
- **FTE:** 1
- **Costs:** 6,000 USD (4,680 USD in DOT + 1,320 USD in USDC)

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | We'll provide comprehensive **inline documentation** of the Journalist Identity Pallet, including **Rust docs** for all public functions. We'll also deliver a **tutorial** showing how to create a journalist DID, issue a verifiable credential, and verify it on-chain. |
| **0c.** | Testing and Testing Guide | The pallet will have **85%+ unit test coverage** (we're being realistic here), including tests for DID creation, credential issuance, verification, and revocation. We'll provide a testing guide explaining how to run tests via `cargo test`. |
| **0d.** | Docker | We'll provide a **Dockerfile** that spins up a Substrate node with the Journalist Identity Pallet pre-configured. Users can interact with it via Polkadot.js Apps UI. |
| 0e. | Article | We'll publish an article on **Medium/Polkadot blog** titled "Building Privacy-Preserving Journalist Identity on Substrate" explaining the threat model, technical architecture, and DID implementation. |
| 1. | Substrate Pallet: Journalist Identity | This pallet will implement **Decentralized Identifiers (DIDs)** specifically for journalists. It'll extend Substrate's native identity pallet with privacy-preserving features: <br>- **DID Registration**: Journalists can create a DID without revealing personal information<br>- **Credential Schema**: Define schemas for press credentials (freelance, staff journalist, photo journalist, etc.)<br>- **Credential Issuance**: Trusted organizations (CPJ, RSF, etc.) can issue verifiable credentials to DIDs<br>- **Zero-Knowledge Verification**: Journalists can prove they hold a valid credential without revealing which organization issued it<br>- **Revocation Registry**: On-chain revocation status for compromised credentials |
| 2. | Substrate Chain (Testnet) | We'll launch a **testnet parachain** (Rococo compatible) with the Journalist Identity Pallet integrated. This chain will include:<br>- Collator nodes for block production<br>- Integration with Rococo Relay Chain<br>- RPC endpoints for credential verification |
| 3. | TypeScript SDK | We'll deliver a **JavaScript/TypeScript library** (`@socialmask/substrate-identity`) that wraps pallet extrinsics for easy integration:<br>- `createJournalistDID()`<br>- `issueCredential(did, credentialType)`<br>- `verifyCredential(did, proof)`<br>- Integration with Polkadot.js for wallet signing |

---

### Milestone 2 — Press Credential Pallet & XCM Integration

- **Estimated Duration:** 6 weeks
- **FTE:** 1
- **Costs:** 8,000 USD (6,240 USD in DOT + 1,760 USD in USDC)

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | Inline documentation for the Press Credential Pallet, plus a **tutorial on cross-chain credential verification** using XCM. We'll document how other parachains can verify journalist credentials via XCM messages. |
| **0c.** | Testing and Testing Guide | **Unit tests** for credential lifecycle (issuance, renewal, revocation) and **integration tests** for XCM message handling. Testing guide will include instructions for simulating cross-chain verification on Rococo. |
| **0d.** | Docker | Updated Dockerfile with both Journalist Identity and Press Credential pallets, plus XCM configuration for Rococo testnet. |
| 0e. | Article | Article on **"Cross-Chain Credential Verification with XCM"** demonstrating how our journalism credentials can be verified on any Polkadot parachain. |
| 1. | Substrate Pallet: Press Credential | This pallet manages the full lifecycle of press credentials:<br>- **Credential Types**: Define standard credential types (investigative journalist, photojournalist, war correspondent, etc.)<br>- **Organizational Registry**: Whitelist of trusted credential issuers (Committee to Protect Journalists, Reporters Without Borders, etc.)<br>- **Issuance Workflow**: Multi-signature approval from issuing organizations<br>- **Expiration & Renewal**: Time-bound credentials with renewal mechanisms<br>- **Revocation**: Emergency revocation for compromised identities<br>- **Privacy-Preserving Queries**: Prove credential validity without revealing issuer or credential holder |
| 2. | XCM Integration | Implement **Cross-Chain Messaging (XCM)** for credential verification across Polkadot ecosystem:<br>- XCM handlers for credential verification requests<br>- Response messages with cryptographic proofs<br>- Integration with Rococo testnet for multi-chain testing<br>- Example use case: A DAO on another parachain can verify journalist credentials before granting voting rights |
| 3. | Governance Module | Basic **on-chain governance** for managing credential issuers:<br>- Proposal system for adding/removing trusted issuers<br>- Council voting mechanism<br>- Emergency revocation powers |

---

### Milestone 3 — Publication Registry Pallet & Frontend Interface

- **Estimated Duration:** 5 weeks
- **FTE:** 1
- **Costs:** 6,500 USD (5,070 USD in DOT + 1,430 USD in USDC)

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 for pallets, MIT for frontend |
| **0b.** | Documentation | Full documentation for Publication Registry Pallet, including **API reference** and **integration guide for publishers**. Frontend will have **user manual** for journalists on creating anonymous publications. |
| **0c.** | Testing and Testing Guide | Unit tests for publication registration, authorship proofs, and IPFS integration. End-to-end tests for the frontend workflow (create DID → publish article → verify authorship). |
| **0d.** | Docker | Complete Docker Compose setup with Substrate node, IPFS node, and frontend application. Single command to launch the full stack. |
| 0e. | Article | Tutorial article: **"Publishing Anonymous Journalism on Substrate"** with step-by-step guide for journalists. |
| 1. | Substrate Pallet: Publication Registry | This pallet creates an on-chain registry of publications:<br>- **Content Addressing**: Store IPFS CIDs of published articles<br>- **Authorship Proofs**: Link publications to journalist DIDs using cryptographic signatures<br>- **Anonymous Publishing**: Journalists can publish under pseudonyms while proving they hold valid credentials<br>- **Timestamping**: Immutable proof-of-publication timestamps<br>- **Dispute Resolution**: Basic mechanism for challenging fraudulent authorship claims |
| 2. | IPFS Integration | Integration layer between Substrate and IPFS:<br>- Automatic pinning of published content<br>- Basic content moderation via flagging system<br>- Gateway for accessing content via IPFS |
| 3. | Frontend Application | React-based web application:<br>- **Wallet Integration**: Polkadot.js wallet connection<br>- **DID Management**: Create and manage journalist DIDs<br>- **Credential Dashboard**: View active credentials, expiration dates, and issuing organizations<br>- **Publishing Interface**: Write and publish articles to IPFS, register on-chain<br>- **Verification Tool**: Public interface to verify authorship of published articles |

---

### Milestone 4 — Security Audit, Documentation & Mainnet Preparation

- **Estimated Duration:** 4 weeks
- **FTE:** 1
- **Costs:** 4,500 USD (3,510 USD in DOT + 990 USD in USDC)

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | **Complete documentation suite** including:<br>- Developer documentation for all three pallets<br>- Integration guides for other parachains<br>- Security best practices for journalists<br>- Deployment guide for running collator nodes |
| **0c.** | Testing and Testing Guide | Final test suite covering all edge cases, attack vectors, and integration scenarios. **Security testing guide** for penetration testing the system. |
| **0d.** | Docker | Production-ready Docker images for mainnet deployment. |
| 0e. | Article | **Final retrospective article** on building journalism infrastructure on Polkadot, lessons learned, and future roadmap. |
| 1. | Security Audit | We'll conduct a security audit (this might cost $3,500-$4,000 depending on audit scope, we're still getting quotes):<br>- Smart contract/pallet audit<br>- Cryptographic review of zero-knowledge proof implementation<br>- Penetration testing of frontend application<br>- Threat model validation<br>Note: We'll use a reputable firm within our budget constraints |
| 2. | Performance Optimization | Optimize pallet performance for production:<br>- Benchmarking all extrinsics<br>- Weight adjustments for on-chain operations<br>- Database optimization for credential lookups |
| 3. | Mainnet Preparation | Documentation and tooling for mainnet launch:<br>- Parachain auction strategy document<br>- Migration scripts for testnet data<br>- Basic monitoring infrastructure<br>- Community governance framework |
| 4. | Journalist Training Materials | Educational content for end users:<br>- Video tutorials on creating DIDs and credentials<br>- OPSEC guide for journalists in authoritarian regimes<br>- FAQ and troubleshooting documentation |

## Future Plans

**Long-term Financing:**

1. **Parachain Slot Auction**: After successful grant completion, we'll crowdloan for a Polkadot parachain slot. We're exploring partnerships with existing parachains (Astar, Moonbeam) to launch as a common-good parachain dedicated to press freedom.

2. **Sustainable Revenue Model**:
   - Transaction fees from credential issuances (subsidized for journalists, paid by news organizations)
   - Premium features for media organizations (advanced analytics, bulk credential management)
   - Partnerships with press freedom NGOs for ongoing funding

3. **Grant Diversification**: We have parallel applications with Zcash (privacy payments), Filecoin (storage), and OpenTech Fund (security infrastructure). This grant focuses on identity; other ecosystems provide complementary services.

**Short-term Enhancement & Promotion:**

1. **Pilot Program (Months 6-12)**:
   - Launch beta with 30 journalists from Mexico and Russia (we're being realistic about scaling)
   - Partner with Committee to Protect Journalists for credential issuance
   - Gather feedback and iterate in UX

2. **Ecosystem Integration**:
   - Integrate with KILT Protocol for advanced identity features
   - Partnership with Subsocial for decentralized content publishing
   - Litentry integration for cross-chain identity aggregation

3. **Community Building**:
   - Present at Polkadot Decoded and Sub0 conferences
   - Workshops at journalism conferences (GIJN, ONA)
   - Research partnerships with academic institutions studying press freedom

**Long-term Vision:**

We envision The Social Mask becoming the foundational layer for anonymous yet verifiable identities for anyone facing threats for exercising free speech. Year 1-2, we want to establish as the standard for verifiable anonymous journalism credentials on Polkadot. Year 2-3, expand to other high-risk professions (whistleblowers, human rights lawyers, activists). Year 3+, become a common-good parachain providing identity infrastructure for privacy-critical applications across entire Polkadot ecosystem.

We think this approach will work, but we're open to feedback from the community.

## Referral Program (optional) :moneybag:

Not applicable - we do not have a referrer at this time.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?**

We discovered the Web3 Foundation Grants Program through the Polkadot website while researching decentralized identity solutions for our journalism protection project. We were particularly inspired by KILT Protocol's successful grant and wanted to build specialized journalism infrastructure on Substrate.

**Additional Context:**

**Work Already Completed:**

We've been working on this for 8 months now:
- Extensive threat modeling and security research for journalist protection
- Proof-of-concept anonymous publishing platform (centralized architecture)
- Partnerships established with Committee to Protect Journalists and Reporters Without Borders for credential issuance workflows
- Initial technical specifications for custom Substrate pallets
- User research with 30+ journalists in Mexico, Russia, and Hong Kong

**Other Funding Applications:**

We've submitted parallel grant applications to:

1. **Zcash Community Grants** ($40,000) - Focus: Privacy-preserving payment infrastructure using shielded transactions (z-addresses) to protect financial transactions for journalists
2. **Filecoin Foundation** ($40,000) - Focus: Decentralized storage integration for censorship-resistant content archiving
3. **Open Technology Fund** ($40,000) - Focus: Digital security infrastructure and training programs for journalists

**Strategic Rationale:** Each grant targets a seperate component of the full platform:
- **Polkadot/Substrate** (this application): Identity and credential verification
- **Zcash**: Private payments
- **Filecoin**: Decentralized storage
- **OpenTech Fund**: Security infrastructure and community training

If all grants are awarded, we'll coordinate development to ensure seamless integration across ecosystems. If only some are awarded, we'll prioritize core functionality based on available resources.

**Alignment with Polkadot Ecosystem:**

We believe this project aligns with Polkadot's vision of a multi-chain future where specialized parachains serve specific use cases. Journalism protection's a real-world problem requiring the interoperability, scalability, and privacy that only Polkadot's architecture can provide. By building on Substrate, we ensure our solution's future-proof and can evolve with the ecosystem.

**Impact Metrics:**

If successful, we anticipate (conservative estimates):
- 300-500 journalists using the platform within the first year
- 10+ news organizations issuing credentials
- 500+ published articles protected by our infrastructure
- Integration with at least 3 other Polkadot parachains for cross-chain use cases

Actually, let me be honest - these numbers could be higher or lower depending on how fast adoption happens. We're being realistic based on our user research.

**Contact for Questions:**

We're happy to provide additional technical details, discuss integration strategies with existing Polkadot projects, or arrange calls with our team and partner organizations (Committee to Protect Journalists, Reporters Without Borders). Please feel free to reach out via the contact information provided above.
