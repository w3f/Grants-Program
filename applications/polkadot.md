---
project_name: "The Social Mask - Privacy-Preserving Journalist Identity on Polkadot"
level: "2"
---

# The Social Mask - Privacy-Preserving Journalist Identity on Polkadot

- **Team Name:** The Social Mask Project
- **Payment Details:**
  - **DOT**: [Will be provided after approval for security reasons]
  - **Payment**: [Polkadot AssetHub address to be provided] (USDC)
  - **Payment Strategy:** Initial development is USDC-heavy for operational stability, later milestones transition fully to DOT to align with Polkadot ecosystem incentives
- **[Level](https://grants.web3.foundation/docs/Introduction/levels):** 2

## Project Overview :page_facing_up:

### Overview

**Tagline:** Privacy-preserving journalist identity and credential verification on Polkadot — contracts-first & KILT integration (no parachain launch).

**Description:**

Look, we're building The Social Mask because we've seen what happens when journalists don't have protection. Over 1,200 journalists murdered globally in the past 20 years, with 140+ killed in Mexico alone. One of our friends was killed last year for investigating cartel corruption. This is personal.

We're building a decentralized platform that protects investigative journalists in authoritarian regimes by giving them verifiable anonymous credentials and secure publishing infrastructure. Using KILT Protocol for DIDs and attestations, plus smart contracts on existing Polkadot parachains, we'll create a journalism-specific infrastructure that enables:

- **Anonymous Verifiable Credentials**: KILT-based attestations for journalist accreditation without revealing personal identity
- **Contracts-First Deployment**: ink! contracts on Astar/Shibuya and EVM contracts on Moonbeam/Moonbase for credential logic
- **Decentralized Identity (DID)**: Self-sovereign identity management using KILT DIDs and attestation workflows
- **Censorship-resistant Publishing**: Integration with IPFS and decentralized storage
- **Optional FRAME Pallet**: Packaged pallet for third-party parachains that want native integration

**Polkadot Integration:**

Our platform will be built using a **contracts-first approach** on existing Polkadot parachains. We'll leverage **KILT Protocol** for DID infrastructure and attestation workflows, deploy **ink! smart contracts on Astar/Shibuya** and **Solidity contracts on Moonbeam/Moonbase** for credential management logic. We'll also develop an optional **FRAME pallet** that third-party parachains can integrate if they want native support. We'll use XCM in testing (via xcm-simulator) to demonstrate cross-chain credential verification patterns. **Critically: we will not launch our own parachain or participate in slot auctions.**

**Why This Project:**

Real talk - we're journalists ourselves from Mexico. We've witnessed colleagues murdered for investigating cartel corruption and government complicity. Traditional press credentials make journalists targets. We're building this on Polkadot because the ecosystem offers **KILT for sovereign identity**, **battle-tested contract platforms** (Astar, Moonbeam), and **XCM interoperability** — all without the operational overhead of running our own parachain. This contracts-first approach lets us focus resources on protecting journalists, not infrastructure operations.

### Project Details

**Technical Architecture:**

We'll develop a **contracts-first solution** with three integration paths:

1. **KILT Protocol Integration (Primary DID Layer)**
   - Use KILT DIDs as the foundation for journalist identities
   - Leverage KILT attestation workflows for credential issuance
   - Deploy demo attestations on KILT Peregrine testnet
   - Integration with KILT's CType (Claim Type) for journalism-specific schemas

2. **Smart Contract Layers (Credential Logic)**
   - **ink! on Astar/Shibuya**: Press credential management contracts (issuance, verification, revocation)
   - **Solidity on Moonbeam/Moonbase**: EVM-compatible credential verification for broader ecosystem reach
   - Publication registry contracts linking IPFS content to KILT DIDs
   - Cross-contract calls demonstrating interoperability patterns

3. **Optional FRAME Pallet (For Third-Party Adoption)**
   - Journalism credential pallet packaged for parachains wanting native integration
   - XCM message handlers for cross-chain credential verification
   - Testing via xcm-simulator (no live parachain deployment required)
   - Documentation for parachain teams to integrate our solution

**Technology Stack:**

- **Identity Layer**: KILT Protocol (DIDs, attestations, CTypes)
- **Smart Contracts**: ink! (Rust) for Astar, Solidity for Moonbeam
- **Optional Runtime**: Substrate FRAME pallet (for third-party integrations only)
- **Storage**: IPFS for content, on-chain for credentials/metadata
- **Testing**: XCM patterns via xcm-simulator, testnet deployments (Shibuya, Moonbase, Peregrine)
- **Frontend**: Polkadot.js + KILT SDK for wallet/DID integration, React for UI

**What We Won't Provide:**

- **Parachain launch or slot auction participation** — we are explicitly NOT launching our own parachain as part of this grant
- Full production mainnet deployment (grant covers testnet demos and tooling)
- Mobile apps (we're going web-first)
- Content moderation by centralized authority
- Legal defense services for journalists
- Physical security or relocation assistance

### Ecosystem Fit

**Position in the Ecosystem:**

The Social Mask fits into Polkadot's identity and governance vertical. We're building journalism-specific infrastructure that leverages **KILT Protocol's DID/attestation capabilities** and **existing contract platforms** (Astar, Moonbeam) for real-world impact. Our solution demonstrates how specialized use cases can be built **without launching a dedicated parachain**, using composable infrastructure that already exists in the ecosystem.

**Target Audience:**

- **Primary**: Investigative journalists in Mexico, Russia, Hong Kong, Turkey, and other countries with press freedom restrictions
- **Secondary**: Human rights organizations, press freedom NGOs, independent media outlets
- **Tertiary**: Existing parachains requiring verifiable credentials (voting systems, whistleblower platforms, DAOs) — they can integrate our optional FRAME pallet or consume our contract interfaces
- **Technical**: Substrate developers interested in identity, KILT integration patterns, and contracts-first architecture

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

- **KILT Protocol**: Provides decentralized identifiers and attestation infrastructure. We're **building on top of KILT** as our foundational identity layer, adding journalism-specific attestation workflows and credential schemas (CTypes).
- **Litentry**: Focuses on identity aggregation across chains. Our project's complementary - we provide the journalism credential layer that could be aggregated by Litentry.
- **Subsocial**: Decentralized social network on Substrate, but not privacy-focused for high-risk users.
- **Astar/Moonbeam**: We deploy on these contract platforms rather than competing with them.

**Our Differentiation:**

- Journalism-specific attestation schemas (CTypes) on KILT tailored to press freedom workflows
- Contracts-first approach reduces operational complexity vs. running a parachain
- Zero-knowledge credential patterns that prove journalistic accreditation without revealing identity
- Threat model designed for authoritarian regimes (not just censorship resistance but physical safety)
- Integration path for existing press freedom organizations via KILT attestation workflows
- Optional FRAME pallet for parachains wanting native integration

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
2. **Research on existing identity solutions** in Polkadot (KILT, Litentry) and identified how to leverage KILT for journalism use cases
3. **Technical specifications** for contracts-first architecture (ink! + Solidity contracts, KILT integration patterns, optional FRAME pallet)
4. **Partnerships** with Committee to Protect Journalists (CPJ) and Reporters Without Borders for credential issuance workflows via KILT attestations

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
- KILT Protocol documentation review and testnet experimentation (Peregrine)

## How This Project Increases DOT Token Usage

**Direct Engagement with Polkadot Ecosystem:**

We're not launching a parachain, but our solution **drives DOT usage through active engagement with existing Polkadot infrastructure**. Here's exactly how:

### Direct DOT Usage by Journalists & Organizations

Every journalist using our platform will need to hold DOT and interact with Polkadot ecosystem tokens:

1. **KILT Attestation Fees**: Journalists pay KILT tokens for attestation issuances on Peregrine/Spiritnet. Organizations issuing credentials stake KILT for attester reputation. This drives demand for KILT (a Polkadot parachain token).

2. **Contract Interaction Fees on Host Parachains**: 
   - **Astar/Shibuya**: Credential verification and publication registry contract calls require ASTR (native token). Journalists hold small amounts for gas.
   - **Moonbeam/Moonbase**: EVM contract interactions require GLMR/DEV tokens.
   - These interactions drive adoption of parachain ecosystems built on Polkadot.

3. **XCM Learning & Future Integration**: While we test XCM patterns via xcm-simulator, real-world adoption by third-party parachains integrating our pallet will require DOT for cross-chain messaging fees (when those parachains implement XCM credential verification).

4. **Asset Purchases via AssetHub**: Journalists converting fiat → crypto will use Polkadot AssetHub for USDC/USDT, then bridge to parachains. This increases AssetHub activity.

**Conservative Estimates (Conditional on Integrations)**: 
- Year 1: 300 journalists interacting with 2-3 Polkadot parachains = increased transaction volume on KILT, Astar, Moonbeam
- Year 2: 500 journalists + 10 media organizations = broader ecosystem engagement
- Year 3: 1,000+ journalists, plus third-party parachains integrating our pallet = potential XCM usage driving DOT demand

**Important Caveat**: Since we're not running a parachain, direct DOT usage is **indirect and contingent** on:
- Journalists using KILT (drives KILT token demand)
- Contract interactions on Astar/Moonbeam (drives ASTR/GLMR demand)
- Third-party parachains adopting our optional pallet and implementing XCM patterns (future DOT demand for messaging)

### Media Organizations & Ecosystem Growth

Media organizations will engage with Polkadot parachains to:

1. **Bulk KILT Attestations**: Organizations becoming KILT attesters need to stake KILT tokens and pay bulk attestation fees for staff journalists (10-50 journalists at once)
2. **Premium Smart Contract Features**: Organizational dashboards deployed as contracts on Astar/Moonbeam require token holdings for gas
3. **Third-Party Parachain Integration**: Organizations operating their own parachains could integrate our FRAME pallet, driving ecosystem diversity

**Conservative Estimate**:
- 10 media organizations using KILT attestations = increased KILT staking/usage
- 5 organizations deploying contract-based features on Astar/Moonbeam = transaction volume on those chains

### Network Effects & Cross-Chain Integration

O sea (I mean), the real value comes from ecosystem composition:

1. **Third-Party Parachains Integrating Our Solution**: Imagine a decentralized voting system parachain that integrates our optional FRAME pallet for journalist verification, or a whistleblower platform that uses XCM to verify credentials. Every cross-chain verification via XCM requires DOT for messaging fees (when implemented by adopting parachains).

2. **KILT Ecosystem Growth**: By building journalism attestations on KILT, we drive real-world usage of a Polkadot parachain, increasing KILT's value proposition and demonstrating Polkadot's composability.

3. **Contracts Platform Adoption**: Deploying on Astar and Moonbeam brings users to those ecosystems, showcasing Polkadot's multi-chain contract capabilities.

### Realistic Impact (Being Honest About No-Parachain Approach)

We're **not** claiming massive direct DOT demand like a parachain would generate through slot collateral or native token usage. Instead, we're driving:
- **Ecosystem diversity**: Real-world use case demonstrating Polkadot's composability
- **Parachain adoption**: Increased usage of KILT, Astar, Moonbeam by journalists (a new user demographic)
- **Developer mindshare**: Showcasing contracts-first + KILT integration patterns for future projects
- **Conditional DOT usage**: Future XCM adoption by third-party parachains integrating our pallet could drive DOT messaging fees

**Why Polkadot Without a Parachain?**

We chose Polkadot precisely because the **existing infrastructure** serves our needs:
- KILT provides battle-tested DID/attestation infrastructure
- Astar/Moonbeam offer production-ready contract platforms
- XCM patterns (even simulated) demonstrate interoperability
- Substrate's FRAME lets us package a pallet for adopters without operational overhead

Actually, let me clarify - we're not asking for a grant to compete with Polkadot parachains. We're asking to **compose existing infrastructure** into a journalism-protection solution, onboarding hundreds of real-world users who will become active participants in KILT, Astar, and Moonbeam ecosystems. That's indirect but meaningful DOT ecosystem value.

## Development Roadmap :nut_and_bolt:

# Overview

- **Total Estimated Duration:** 21 weeks (around five months, maybe a bit longer if we hit blockers)
- **Full-Time Equivalent (FTE):** 1 FTE  
- **Total Costs:** 29,000 USD  
- **Payment Split:** Approximately 50% in DOT (15,000 USD) + 50% in USDC (14,000 USD)
- **Payment Strategy:** Initial development is USDC-heavy for operational stability, later milestones transition fully to DOT to align with Polkadot ecosystem incentives

---

## Milestone 1 — KILT Integration & Core Identity Infrastructure

- **Estimated Duration:** 6 weeks (possibly 7 if KILT integration testing takes longer)
- **FTE:** 1  
- **Costs:** 10,000 USD  
  - 10,000 USDC  
  - 0 DOT
- **Note:** Funded entirely in USDC for operational stability during initial development phase  

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | We'll provide comprehensive **documentation** of KILT integration patterns, including **tutorials** showing how to create a journalist DID on KILT, request attestations, and verify credentials using KILT SDK. We'll document journalism-specific CTypes (Claim Types). |
| **0c.** | Testing and Testing Guide | **Integration tests** with KILT Peregrine testnet covering DID creation, attestation workflows, and verification. We'll provide a testing guide explaining how to run tests against Peregrine. |
| **0d.** | Docker | We'll provide a **Docker Compose setup** that spins up a local development environment with KILT node simulation, our frontend, and IPFS. Users can test the full workflow locally. |
| 0e. | Article | We'll publish an article on **Medium/Polkadot blog** titled "Building Privacy-Preserving Journalist Identity with KILT Protocol" explaining the threat model, KILT attestation workflow, and journalism-specific CTypes. |
| 1. | KILT Protocol Integration | Implementation of **KILT DID and attestation workflows** for journalism:<br>- **CType Definitions**: Journalism-specific claim types (freelance journalist, staff journalist, photojournalist, war correspondent, etc.)<br>- **Attestation Request Workflow**: Frontend flows for journalists to request credentials from trusted organizations<br>- **Verification Logic**: Privacy-preserving credential verification without revealing attestor or full claim details<br>- **Revocation Handling**: Integration with KILT's attestation revocation mechanisms<br>- **Peregrine Testnet Demo**: Live demo deployment on KILT Peregrine with test attestations |
| 2. | IPFS Integration Layer | Integration between KILT identities and content storage:<br>- Automatic pinning of published content<br>- Linking IPFS CIDs to KILT DIDs via cryptographic signatures<br>- Basic content addressing for articles<br>- Gateway for accessing content via IPFS |
| 3. | Frontend Application (Phase 1) | React-based web application with KILT SDK integration:<br>- **Wallet Integration**: Sporran wallet (KILT) + Polkadot.js wallet connection<br>- **DID Management**: Create and manage KILT DIDs<br>- **Attestation Dashboard**: Request credentials, view attestation status, check expiration<br>- **Basic UI/UX** for journalist onboarding |

---


## Milestone 2 — Smart Contracts Deployment & Cross-Platform Integration

- **Estimated Duration:** 6 weeks  
- **FTE:** 1  
- **Costs:** 10,000 USD  
  - 4,000 USDC  
  - 6,000 DOT
- **Note:** Transition to majority DOT payment as core infrastructure is established  

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | Inline documentation for ink! and Solidity contracts, plus **deployment guides** for Shibuya and Moonbase testnets. We'll document contract interaction patterns and integration with KILT attestations. |
| **0c.** | Testing and Testing Guide | **Unit tests** for contract logic (credential verification, publication registry) and **integration tests** with KILT attestations. Testing guide will include instructions for deploying and interacting with contracts on testnets. |
| **0d.** | Docker | Updated Docker Compose with local contract nodes (Swanky for ink!, Hardhat for Solidity) for local development and testing. |
| 0e. | Article | Article on **"Contracts-First Journalism Infrastructure: Deploying on Astar and Moonbeam"** demonstrating multi-chain contract deployment patterns. |
| 1. | ink! Smart Contracts (Astar/Shibuya) | **ink! contracts** for credential and publication management:<br>- **Credential Verification Contract**: Verify KILT attestations on-chain (stores attestation hashes/proofs)<br>- **Publication Registry**: Links IPFS CIDs to KILT DIDs, timestamping, authorship proofs<br>- **Access Control**: Permission logic for trusted organizations<br>- **Deployed on Shibuya testnet** with demo transactions |
| 2. | Solidity Smart Contracts (Moonbeam/Moonbase) | **EVM-compatible contracts** mirroring ink! functionality:<br>- Credential verification logic (compatible with KILT proofs)<br>- Publication registry with IPFS integration<br>- EVM tooling (Ethers.js/Web3.js) for broader ecosystem reach<br>- **Deployed on Moonbase Alpha testnet** with demo transactions |
| 3. | Contract Interaction SDK | TypeScript library (`@socialmask/contracts-sdk`) wrapping contract calls:<br>- `verifyCredential(kiltDID, proof, targetChain)` - works with Shibuya or Moonbase<br>- `registerPublication(ipfsCID, kiltDID, signature)`<br>- Abstraction layer supporting both ink! and Solidity backends |

---

## Milestone 3 — Optional FRAME Pallet & XCM Testing

- **Estimated Duration:** 5 weeks  
- **FTE:** 1  
- **Costs:** 5,000 USD  
  - 0 USDC  
  - 5,000 DOT
- **Note:** Funded entirely in DOT to align with Polkadot ecosystem incentives

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 for pallet, MIT for frontend |
| **0b.** | Documentation | Full documentation for **optional FRAME pallet**, including **integration guide** for third-party parachains. We'll document XCM message patterns tested via xcm-simulator. Frontend will have **user manual** for journalists. |
| **0c.** | Testing and Testing Guide | Unit tests for pallet extrinsics and **xcm-simulator integration tests** demonstrating cross-chain credential verification patterns (no live parachain required). |
| **0d.** | Docker | Complete Docker Compose setup with all components: KILT node simulation, Astar/Moonbeam local nodes, IPFS, frontend application. Single command to launch the full stack. |
| 0e. | Article | Tutorial article: **"Publishing Anonymous Journalism on Polkadot — Contracts-First Architecture"** with step-by-step guide for journalists. |
| 1. | Optional Substrate Pallet: Journalism Credentials | **FRAME pallet** for third-party parachains wanting native integration:<br>- **Credential Registry**: On-chain storage of credential metadata (links to KILT attestations)<br>- **XCM Message Handlers**: Receive and respond to cross-chain credential verification requests<br>- **Governance Hooks**: Basic governance primitives for managing trusted attesters<br>- **Packaged for adoption** - not deployed by us, but ready for integration by other teams |
| 2. | XCM Pattern Testing (xcm-simulator) | Demonstrate cross-chain credential verification using **xcm-simulator**:<br>- Mock scenario: Parachain A requests journalist credential verification from Parachain B<br>- XCM message construction and handling<br>- Response patterns with credential proofs<br>- **Documentation** for parachain teams implementing real XCM integration<br>- **No live parachain deployment** - simulation only |
| 3. | Frontend Application (Phase 2) | Complete React web application:<br>- **Publishing Interface**: Write and publish articles to IPFS, link to KILT DIDs<br>- **Verification Tool**: Public interface to verify authorship of published articles<br>- **Multi-Chain Support**: Switch between Astar/Moonbeam contract interactions<br>- **Credential Management**: Full dashboard for managing KILT attestations, viewing expiration, renewal workflows |

---


## Milestone 4 — Security Review, Documentation & Production Readiness

- **Estimated Duration:** 4 weeks  
- **FTE:** 1  
- **Costs:** 4,000 USD  
  - 0 USDC  
  - 4,000 DOT
- **Note:** Funded entirely in DOT to align with Polkadot ecosystem incentives  

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | **Complete documentation suite** including:<br>- Integration guides for KILT, Astar, Moonbeam<br>- Developer documentation for optional FRAME pallet adoption<br>- Security best practices for journalists<br>- Deployment guides for contracts on mainnets (for future production use) |
| **0c.** | Testing and Testing Guide | Final test suite covering all integration scenarios, edge cases, and security considerations. **Security testing guide** for auditing the system. |
| **0d.** | Docker | Production-ready Docker images for all components (contract deployment tooling, frontend, documentation site). |
| 0e. | Article | **Final retrospective article** on building journalism infrastructure on Polkadot without launching a parachain, lessons learned about contracts-first architecture, KILT integration, and future roadmap. |
| 1. | Security Review | We'll conduct a **security review** (budget-conscious, $3,500-$4,000):<br>- Smart contract audit (ink! + Solidity)<br>- KILT integration security review<br>- Frontend application penetration testing<br>- Threat model validation for journalist safety<br>- **Note**: Budget constraints mean focused review on highest-risk components |
| 2. | Performance Optimization | Optimize contract performance and frontend:<br>- Gas optimization for ink! and Solidity contracts<br>- Frontend performance tuning (lazy loading, caching)<br>- IPFS gateway optimization for content retrieval |
| 3. | Adoption Documentation | Materials for ecosystem adoption:<br>- **Parachain Integration Guide**: How to integrate the optional FRAME pallet<br>- **KILT Attestation Guide**: How organizations become attesters for journalists<br>- **Contract Integration Examples**: Sample code for DAOs/platforms verifying journalist credentials<br>- **Migration Path**: Strategy for mainnet deployments (KILT Spiritnet, Astar, Moonbeam) |
| 4. | Journalist Training Materials | Educational content for end users:<br>- Video tutorials on creating KILT DIDs and requesting attestations<br>- OPSEC guide for journalists in authoritarian regimes<br>- FAQ and troubleshooting documentation<br>- Multi-language support (English, Spanish, Russian initial targets) |

## Future Plans

**Long-term Financing:**

1. **No Parachain Slot Auction**: We will **not** pursue a parachain slot. Our architecture is contracts-first + KILT integration, avoiding the operational and financial overhead of slot auctions and collator infrastructure.

2. **Sustainable Revenue Model**:
   - Transaction fees from contract interactions on Astar/Moonbeam (subsidized for journalists, paid by news organizations)
   - KILT attestation fees (organizations pay KILT tokens to become attesters)
   - Premium features for media organizations (advanced analytics, bulk credential management via contracts)
   - Partnerships with press freedom NGOs for ongoing funding

3. **Grant Diversification**: We have parallel applications with Zcash (privacy payments), Filecoin (storage), and OpenTech Fund (security infrastructure). This grant focuses on Polkadot identity/contracts; other ecosystems provide complementary services.

**Short-term Enhancement & Promotion:**

1. **Pilot Program (Months 6-12)**:
   - Launch beta with 30 journalists from Mexico and Russia (we're being realistic about scaling)
   - Partner with Committee to Protect Journalists for KILT attestation issuance
   - Gather feedback and iterate on UX

2. **Ecosystem Integration**:
   - Deep integration with **KILT Protocol** for advanced attestation features
   - Partnership with **Subsocial** for decentralized content publishing (they could integrate our credential verification contracts)
   - **Litentry** integration for cross-chain identity aggregation
   - Showcase contracts on **Astar** and **Moonbeam** as reference implementations

3. **Community Building**:
   - Present at Polkadot Decoded and Sub0 conferences (showcase contracts-first architecture)
   - Workshops at journalism conferences (GIJN, ONA)
   - Research partnerships with academic institutions studying press freedom

**Long-term Vision:**

We envision The Social Mask becoming the foundational layer for anonymous yet verifiable identities for anyone facing threats for exercising free speech. Year 1-2, establish as the reference implementation for verifiable anonymous journalism credentials on Polkadot (via KILT + contracts). Year 2-3, expand to other high-risk professions (whistleblowers, human rights lawyers, activists). Year 3+, our optional FRAME pallet becomes widely adopted by parachains needing credential verification, establishing contracts-first + KILT pattern as a best practice for specialized identity use cases.

We think this approach will work **without** the complexity of running a parachain, but we're open to feedback from the community.

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
- Partnerships established with Committee to Protect Journalists and Reporters Without Borders for KILT-based attestation workflows
- Initial technical specifications for contracts-first architecture (ink! + Solidity) and KILT integration patterns
- User research with 30+ journalists in Mexico, Russia, and Hong Kong
- KILT Protocol documentation review and Peregrine testnet experimentation

**Other Funding Applications:**

We've submitted parallel grant applications to:

1. **Zcash Community Grants** ($40,000) - Focus: Privacy-preserving payment infrastructure using shielded transactions (z-addresses) to protect financial transactions for journalists
2. **Filecoin Foundation** ($40,000) - Focus: Decentralized storage integration for censorship-resistant content archiving
3. **Open Technology Fund** ($40,000) - Focus: Digital security infrastructure and training programs for journalists

**Strategic Rationale:** Each grant targets a separate component of the full platform:
- **Polkadot** (this application): Identity via KILT, credential verification via contracts on Astar/Moonbeam, optional FRAME pallet for adopters
- **Zcash**: Private payments
- **Filecoin**: Decentralized storage
- **OpenTech Fund**: Security infrastructure and community training

If all grants are awarded, we'll coordinate development to ensure seamless integration across ecosystems. If only some are awarded, we'll prioritize core functionality based on available resources.

**Alignment with Polkadot Ecosystem:**

We believe this project aligns with Polkadot's vision of composable multi-chain infrastructure. Rather than launching yet another parachain, we're demonstrating how **existing Polkadot infrastructure** (KILT for identity, Astar/Moonbeam for contracts, XCM patterns for interoperability) can be composed into specialized solutions. This contracts-first approach showcases Polkadot's value without the overhead of slot auctions and collators. By building on KILT and contract platforms, we ensure our solution's sustainable and focused on user impact.

**Impact Metrics:**

If successful, we anticipate (conservative estimates):
- 300-500 journalists using the platform within the first year (interacting with KILT, Astar, Moonbeam)
- 10+ news organizations becoming KILT attesters and deploying contract-based credential management
- 500+ published articles protected by our infrastructure
- 3-5 third-party parachains integrating our optional FRAME pallet for XCM-based credential verification
- Demonstrated contracts-first + KILT integration pattern that other projects can replicate

Actually, let me be honest - these numbers could be higher or lower depending on how fast adoption happens. We're being realistic based on our user research and the fact that we're **not** running core infrastructure (parachain), which means we can focus 100% on user experience and partnerships.

**Contact for Questions:**

We're happy to provide additional technical details, discuss integration strategies with existing Polkadot projects, or arrange calls with our team and partner organizations (Committee to Protect Journalists, Reporters Without Borders). Please feel free to reach out via the contact information provided above.

