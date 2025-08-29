# Modern Bureaucracy - POC - Phase 1


- **Team Name:** Carge  
- **Payment Details:**
  - **DOT:** 5C4kKzKyDuZTu3Qa89soZWdRfFRJzvTjVVDTNqAKPuzXcaRa  
  - **Payment:** 5C4kKzKyDuZTu3Qa89soZWdRfFRJzvTjVVDTNqAKPuzXcaRa (USDC)
- **Level:** 2

## Project Overview 📄

### Overview

Modern Bureaucracy brings to the Polkadot ecosystem the translation layer that lets humans speak to blockchains in their own language while maintaining cryptographic proof of every interaction.

Coupled with its dapp, maieutic-elicitation, Modern Bureaucracy is a protocol that facilitate the exchange and transformation of data by dismantling the bureaucratic moat that protects incumbent monopolies from competition by making compliance accessible to any actor with genuine value to offer.

We solve the blockchain UX problem by transforming natural language inputs into schema-compliant encrypted transactions through local AI assistance. Unlike oracle solutions that inject external data on-chain, we provide an infrastructure where humans retain full control and legal responsibility for content while AI handles structural compliance. Every interaction generates immutable proof of who formatted what, when, and how - essential for regulatory audit requirements and trust between participants. The dapp inside the MCP can be extractd and coupled with a database to automat the exchange according to local parameters.

As a former army technocrat, I realized adding more layers of control to exclude dishonest comportments will only result in excluding the honest ones who don't have the administrative skills or back office to conform to the strict formalism of the controls. The dishonest will always have the money from the technical fraud to pay for administrative conformity.

My solution is to empower the honest ones by giving them an edge through low-cost AI-assisted administrative compliance, decentralized coordination, and progressive construction of deliverables through public onchain compliances.

### Modern Bureaucracy as a part of Substrate / Kusama / Polkadot / Web 3 Ecosystem

- **First translation layer** between natural language and blockchain operations with cryptographic proof
- **Compliance infrastructure** for DAOs and parachains struggling with formal documentation
- **Local AI assistant** that maintains user privacy while ensuring blockchain compatibility
- **Regulatory readiness** with immutable audit trails for traditional institutions entering Web3
- **Integration bridge** with EBSI (European Blockchain Services Infrastructure) via Snowbridge

## Project Details

### Architecture

Implementation of decentralized multi-party workflow assisted by AI requires solving several technical challenges:

### Technologies

- **MCP (Model Context Protocol):** TypeScript server bridging AI to blockchain operations
- **Dedot:** Parity's TypeScript library for Substrate interaction
- **Helia:** Light IPFS node for decentralized storage
- **ChaCha20-Poly1305:** Encryption with X25519 ECDH for end-to-end security
- **Substrate:** Custom parachain with specialized pallets
- **Local AI Models:** Privacy-preserving natural language processing

### Components

#### complex-elicitation
A Dapp which bridge Polkadot and IPFS inside a TypeScript MCP server, using Dedot (Parity's library) and Helia (a light IPFS node) to translate AI intentions into blockchain operations. The MCP server acts as the communication layer between local AI models and the blockchain infrastructure.

#### Encryption Layer
ChaCha20-Poly1305 with X25519 ECDH for end-to-end encryption, with only coordination metadata stored on the parachain. This ensures that sensitive data never leaves user control while maintaining the ability to coordinate workflows.

#### Storage Optimization
Large AI payloads are stored and transmited on IPFS/Helia with only the encrypted CIDs recorded on-chain, maintaining scalability while providing cryptographic content addressing. Compliance documents are published in clear on IPFS in a compatible format to interact with the MCP, while the parachain references the CID and metadata.

#### Modern Bureaucracy
Custom Substrate parachain with three light-coupled pallets:
- **pallet PKI:** Storage of public exchange keys, Lib2P keys, and encrypted DApp configurations
- **pallet crypto-trails:** Storage of encrypted CIDs containing instructions and metadata for workflow coordination
- **pallet compliance:** Storage of compliance CIDs and metadata for workflow railroading

#### Compliance Syntax System
Formalized method to divide complex compliance into manageable steps, with each participant providing only the data they know. Each step consists of resources (context data) and a schema (output validation), creating instructions for AI-driven maieutic questioning.

### What Modern Bureaucracy is NOT

To clarify expectations and limitations:

- **NOT a truth validation system:** We provide structural compliance (data matches schema offchain) but humans remain legally responsible for content accuracy
- **NOT an oracle:** We don't inject external data on-chain; we help users format their own data correctly
- **NOT a replacement for legal review:** Complex regulatory matters still require professional legal consultation
- **NOT a centralized AI service:** All AI processing happens locally on user devices to maintain privacy
- **NOT a content generation tool:** AI assists with structure and questioning but doesn't create content for users
- **NOT a governance voting mechanism:** We facilitate proposal formatting but don't influence voting outcomes

## Ecosystem Fit

### Target Users

- **Polkadot DAOs:** Teams struggling with treasury proposal formatting and compliance
- **Small parachains:** Need professional documentation without hiring expensive consultants  
- **Web3 auditors:** Want standardized report templates with cryptographic proof
- **Small companies and individuals:** Low-cost solution for complex compliance delivrables
- **European institutions:** Bridge to EBSI infrastructure for dematerialized pipeline compliance form 

### Problem Solved

Treasury proposals fail due to poor structure, not bad ideas. We turn AI into a compliance assistant that guides contributors through formal templates and maieutic questioning, reducing rejection rates while maintaining cryptographic proof of the process.

### Evidence of Need

- Most Polkadot treasury proposals are rejected on first submission
- Average resubmission takes 2 weeks of back-and-forth communication  
- Small teams can't afford $20k+ for professional compliance writers
- complex compliance necessitate decentralized solution (EBSI)
- European institutions need citizen-facing interfaces for blockchain compliance

### Similar Projects

- Traditional form builders (TypeForm, Google Forms) - lack the means of decentralized coordination
- Oracle solutions (Chainlink) - inject external data rather than structure user data  
- Documentation tools (GitBook, Notion) - centralized solutions without cryptographic proof

### What Makes Us Different

**As a part of Web 3 Community and Ecosystem:**

- **First-class natural language interface** to blockchain operations with cryptographic proof
- **Local AI processing** ensures data never leaves user control
- **Maieutic questioning system** guides users through complex compliance step-by-step
- **Immutable audit trails** for regulatory compliance requirements
- **Multi-language support** for European institutions via EBSI integration
- **Zero-knowledge potential** for future privacy-preserving compliance verification

## Team 👥

### Team members

- **Jean-François Meneust** - Project Lead & Blockchain Developer

### Contact

- **Contact Name:** Jean-François Meneust
- **Contact Email:** jf.meneust@gmail.com
- **Website:** [In development]

### Legal Structure

- **Registered Address:** 14 rue de la mutualité 49300 Cholet, France
- **Registered Legal Entity:** Individual developer company, CARGE
- **SIRET:** 939981247 (founded January 2025)

### Team's experience

#### Jean-François Meneust

**Military, EU compliance & Finance (2021-2024):**
Led multi-stakeholder coordination securing €3M annual funding from EU and French regional authorities. Managed complex grant application workflows and compliance reporting across multiple jurisdictions, gaining deep understanding of bureaucratic processes and regulatory requirements.

**Military, Finance & Logistics (2012-2021):**
Head of Finance and Logistics, French Foreign Legion Mountain Regiment (4 years). Deployed financial and logistic systems in austere environments with zero-failure tolerance. Implemented redundant administrative processes for mission-critical operations, developing expertise in fault-tolerant systems design.

**Military, Software Engineering (2008-2012):**
Sergeant, specialized in Java Enterprise architecture. Designed and integrated web services for defense systems.

**Blockchain Experience:**
- 8 months intensive Substrate/MCP development
- Successfully demonstrated working PKI prototype to W3F evaluator Keegan Quigley  
- Architected MCP-IPFS-Substrate bridge for verifiable AI workflows
- Deep understanding of both technical implementation and compliance requirements from military background

### Team Code Repos

- https://github.com/polykrate/Modern-Bureaucracy (to be implemented through the grant)
- https://github.com/polykrate/complex-eliciation (to be implemente through the grant)
- https://github.com/polykrate/human-context-protocol (polyvalent prototype)
- https://github.com/polykrate/gosseyn (experimentation)

Please also provide the GitHub accounts of all team members:

- https://github.com/polykrate

### Team LinkedIn Profiles

- https://www.linkedin.com/in/jean-francois-meneust-a488bb121/ 

## Development Status 📖

### Prior Work and Research

**Live Demonstration with W3F:**
Successfully demonstrated working prototype to W3F evaluator Keegan Quigley, showing one AI agent executing an instruction via encrypted messages with cryptographic trails on Substrate.

**Current Implementation (basic PKI and AI compliance assistance Proof of Concept):**
- **Substrate Parachain:** Human Context Protocol with 3 light-coupled pallets (~600 lines each)
  - `pallet-vault`: Hash management with escrow (algo extraction to `pallet-pki`)
  - `pallet-secretHandshake`: Encrypted message coordination and hash chaining (algo extraction to `pallet-crypto-trails`)  
  - `pallet-grammateion`: Schema publishing with conformity escrow (algo extraction to `pallet-compliance`)
- **MCP Server:** TypeScript implementation bridging AI to blockchain via Dedot and Helia
- **IPFS Integration:** Helia light node for encrypted content storage and peer-to-peer communication
- **Local Testing:** Full system operational on local Substrate omni node, One AI send an instruction to the other that execute it then report through a valid Json Object
**Grant Deliverables (full Proof of Concept):**
A new specialized parachain, Modern Bureaucracy will be built from the POP's parachain template :
  - `pallet-pki`: key management and identity system
  - `pallet-crypto-trails`: workflow coordination with audit trails
  - `pallet-compliance`: compliance management and publication
The MCP server will evolved for multi step workflows 
A workflow for the treasury proposal optimized for AI assistance will be published onchain

**Research Foundation:**
- 8 months intensive Substrate/MCP development
- Military background in compliance and administrative processes
- EU grant management experience (€8M+ secured)
- Analysis of Polkadot treasury proposal rejection patterns

**Related Conversations:**
- Technical validation with W3F evaluator Keegan Quigley
- Architecture discussions with Parity engineer regarding use case (Pierre Aubert)
- Community communication on MCP-blockchain bridge approach (Polkadot forum)

**Previous Iterations:**
- Initial proof-of-concept with single-agent PKI system and maieutic interogation
- Evolution to multi-agent encrypted coordination

## Development Roadmap 🔩

### Overview

- **Total Estimated Duration:** 3 months
- **Full-Time Equivalent (FTE):** 1
- **Total Costs:** 30,000 USD
- **DOT %:** 50%

### Milestone 1 — Production Pallet & Core Infrastructure

- **Estimated Duration:** 1 month
- **FTE:** 1  
- **Costs:** 10,000 USD

| Number | Deliverable | Specification |
|--------|-------------|---------------|
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | Inline Rust documentation and deployment guide |
| 0c. | Testing Guide | Unit tests with 80% coverage |
| 0d. | Docker | Docker-compose for complete node setup |
| 1. | pallet PKI | Key registration, rotation, and revocation system |
| 2. | pallet crypto-trails | Send crypto trail (workflow instruction), ping |
| 3. | pallet compliance | Publish CID with its metadata, prune publication |
| 4. | Event System | cryptoTrail, keyRotated, cidPublished events |
| 5. | Storage Optimization | BoundedVec implementations, pruning logic |
| 6. | Benchmarking | Omnibencher weight for all extrinsics |

### Milestone 2 — MCP Bridge & Encryption Layer

- **Estimated Duration:** 1 month
- **FTE:** 1
- **Costs:** 10,000 USD

| Number | Deliverable | Specification |
|--------|-------------|---------------|
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | Inline TypeScript documentation and deployment guide |
| 0c. | Testing Guide | 75% coverage of TypeScript codebase |
| 0d. | Docker | Docker-compose for complete MCP setup |
| 1. | MCP Server | TypeScript server with stdio communication to AI |
| 2. | Dedot Integration | Substrate interaction layer using Parity's library |
| 3. | Helia Node | IPFS integration for encrypted content |
| 4. | Encryption Module | ChaCha20-Poly1305 with X25519 ECDH implementation |
| 5. | Event Listener | Real-time chain monitoring and AI notification |
| 6. | Extrinsic Tool | For workflow initiation and execution |
| 7. | Treasury Requirements Research | Document community-validated data requirements for successful proposals |

### Milestone 3 — Workflow Integration & Production Deployment

- **Estimated Duration:** 1 month
- **FTE:** 1
- **Costs:** 10,000 USD

| Number | Deliverable | Specification |
|--------|-------------|---------------|
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | Complete documentation and deployment guide |
| 0c. | Testing Guide | How to do AI-assisted workflow for Polkadot treasury proposals |
| 0d. | Docker | Docker-compose for complete integration |
| 0e. | Article | Technical deep-dive published on Polkadot blog explaining the AI-blockchain bridge architecture and use cases |
| 1. | Paseo Deployment | Live testnet with AI-assisted treasury proposal workflow |
| 2. | Performance Report | Latency (<200 ms), throughput (>300 msg/s), cost analysis |
| 3. | XCM Preparation | Design document for cross-chain AI services |
| 4. | Video Tutorial | 10-minute setup and usage guide |
| 5. | Security Audit | Basic security review and threat model |

## Future Plans

### Short-term (3-6 months)
- Integration with 2+ production parachains
- Open-source community building around local AI and Web3 enthusiasts
- Application to EU project: "How Web3 can support European creativity?"
- Finding an associate developer and a mentor to review my code

### Long-term Vision
- **Parachain Launch:** Dedicated certified process marketplace parachain and NFT of conformity
- **XCM Integration:** Cross-chain workflow coordination
- **ZK Proofs:** Verification of compliance control without revealing data
- **Enterprise Adoption:** Partnerships for compliance assistance
- **Decentralized local LLM network:** want to know if it is on of the ways to AGI

### Revenue Model
- Transaction fees for coordination (0.01 DOT per crypto trail)
- Enterprise SLA agreements for guaranteed throughput  
- Consulting services for custom implementations
- Remuneration for publishers of compliance workflows

## Additional Information ➕

### Why This Grant Matters

While EBSI (Hyperledger Besu) deploys infrastructure for EU institutions, it lacks:
- Citizen-facing interfaces for complex form submission
- Natural language processing for regulatory requirements  
- Dematerialized pipeline to collect citizen compliance submissions

Modern Bureaucracy as a parachain could bridge this gap via Snowbridge, enabling European citizens to interact with AI assistants that ensure EBSI-compliant data formatting while maintaining end-to-end encryption through the pipe-line.

### Competitive Advantage

- **First-mover:** First team with decentralized PKI with natural language interface
- **Domain Expertise:** Deep understanding of compliance requirements from military/EU experience
- **Working Code:** Demonstrated prototype of PKI and MCP, not just concepts
- **Ecosystem Alignment:** Uses Parity tools (Dedot), deploys on Paseo

### Recognition

The project demonstration has received positive feedback from W3F evaluator Keegan Quigley, confirming technical viability. Live demonstration available showing 1 agents coordination, now works with two, will be happy to demo.

### How did you hear about the Grants Program?

Web3 Foundation Website and direct contact with W3F evaluator Keegan Quigley during technical demonstration.

## Referral Program (optional) 💰

- **Referrer:** N/A
- **Payment Address:** N/A
  
