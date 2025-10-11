Team Name: Legal name of your team Vumah Labs
Payment Details:15mPRCCzYcZbxAGQep4JcRAg551tcYHixf3bm4KBZ7H31bjS
Level: 1, 2 or 3
Level 2

Project Overview 📄
Overview
Vumah Labs — Building Africa’s Trust Infrastructure with AI and Zero-Knowledge Proofs on Polkadot.
Vumah Labs is building the Vumah ZK Trust Stack, an open framework for authentic and verifiable digital content on Polkadot. The stack includes Kweli, an AI-powered deepfake detection and verification platform, the Vumah SDK, which enables developers to embed content authenticity and zero-knowledge proof generation into their apps, and the Vumah RailKit SDK, which provides APIs for verifiable data exchange across parachains. Together, they form a trust infrastructure that enhances transparency, identity assurance and ESG data integrity across media, governance and financial sectors
Our project integrates deeply with the Polkadot ecosystem by leveraging Substrate for modular blockchain development and deploying the Vumah ZK Trust Stack which includes Kweli, the Vumah SDK and the Vumah RailKit SDK as interoperable pallets and developer tools. The Kweli engine anchors AI-generated authenticity proofs on Polkadot AssetHub, while the SDKs enable cross-parachain verification of zero-knowledge proofs and digital identity attestations through integrations with KILT Protocol, Proof of Personhood and Frequency. This architecture strengthens Polkadot’s trust and data integrity layer, promotes responsible AI use and generates tangible utility for the DOT token through verification, transaction and data anchoring activities.
Our team is driven by the urgent need to restore trust in digital information especially across Africa, where misinformation, identity fraud and data manipulation have real social and governance impacts. Through Kweli and the Vumah ZK Trust Stack, we’re building verifiable infrastructure that empowers users, journalists and institutions to prove authenticity without sacrificing privacy. We see Polkadot as the ideal ecosystem to scale this vision globally its interoperability, strong identity frameworks and privacy-preserving technologies align perfectly with our mission to create trustworthy, impact-driven Web3 solutions for real-world users.

Mockups/designs of any UI components
https://docs.google.com/document/d/1NSX3KBtQYdJA3Nn8uBVVQnGPmx3CYTdC/edit?usp=sharing&ouid=101445831775860875505&rtpof=true&sd=true

Data models / API specifications of the core functionality
The Vumah ZK Trust Stack exposes its core functionality through well-defined data models and RESTful APIs designed for seamless integration with Substrate-based chains on Polkadot.

At the core, the system manages three key data entities:

MediaVerification objects capture details of uploaded media, including the uploader’s address, AI-generated authenticity score, media hash, zero-knowledge proof and verification status.

ProofRecords anchor cryptographic proofs on-chain, storing proof identifiers, proof type (SNARK or STARK), corresponding transaction hashes and verifier addresses.

IdentityAttestations link verified identities—such as journalists, institutions, or content creators to specific media or datasets using integrations with KILT Protocol and Proof of Personhood.

Additionally, an AuditTrail component logs every verification and validation event, generating measurable impact data for ESG and SDG analytics.

The system’s APIs follow a modular and developer-friendly structure.
Developers can:

Upload media files via the /upload endpoint to receive an authenticity score and media ID.

Retrieve verification results and zero-knowledge proof details using /verify/:media_id or /proofs/:proof_id.

Submit identity attestations linked to a verified record through /attest.

Request integrity and impact reports via /audit/:media_id.

In terms of architecture, the SDK workflow is straightforward:
A user uploads media through the Kweli front-end or a third-party app integrated with the Vumah SDK. The AI engine evaluates authenticity and generates a zero-knowledge proof. The RailKit SDK then anchors the proof and metadata on Polkadot’s AssetHub, enabling other parachains to verify the proof using XCM-based cross-chain messaging.

This API and data model design ensures that verified data, identity attestations and cryptographic proofs remain interoperable across the Polkadot ecosystem, supporting privacy-preserving, verifiable digital trust infrastructure for Africa and beyond

An overview of the technology stack to be used
The Vumah ZK Trust Stack is built as a modular, interoperable system combining AI-based content verification, Zero-Knowledge (ZK) cryptography, and Substrate-based blockchain infrastructure. The following stack components will power the migration to Polkadot:

Frontend & SDK Layer
Framework: React ; EXPO. React Native for mobile integration.

SDKs:

Vumah SDK: Provides APIs and client libraries for developers and institutions to integrate content verification, proof validation and authenticity scoring into their platforms.

Vumah RailKit SDK: Enables cross-chain proof verification and interoperability with other parachains via XCM (Cross-Consensus Messaging).

UI Libraries: TailwindCSS and ShadCN for lightweight, responsive user interfaces.

Backend & AI Engine
Language: Python (Flask/FastAPI) for the backend service.

AI Model: EfficientNet-lite for image/video deepfake detection; Whisper (for future audio verification).

ZK Proof Generation: Circom + snarkjs and Cairo-based zk-STARK circuits (transitioning to Substrate-compatible zk toolkits).

Storage: IPFS / Arweave for off-chain media storage and hash referencing.

Blockchain & Proof Layer (on Polkadot)
Framework: Substrate for custom blockchain logic.

Deployment: Initially on Polkadot AssetHub, expanding via a dedicated parachain.

Identity & Trust Integrations:

KILT Protocol for decentralized identity and verifiable credentials.

Proof of Personhood for human verification and media attestation.

Frequency for responsible data sharing and analytics aggregation.

Token Economy: Native DOT for transaction fees, verification staking and governance participation.

Infrastructure & DevOps
Hosting & Deployment: Docker + Kubernetes for container orchestration.

Monitoring: Prometheus and Grafana for network and proof integrity monitoring.

Nodes: Substrate validator/testnet nodes deployed on AWS (Africa region).

Data & Impact Layer
Analytics Engine: Aggregates verification data to produce ESG-aligned impact metrics (e.g., number of fakes detected, verified media count, fraud prevented).

APIs for Partners: REST and GraphQL endpoints for external applications and dashboards.

Core Components
a. Kweli (AI & Proof Generation Engine)
Kweli is the media verification engine that processes user-uploaded content (image, audio or video) to detect manipulation and generate authenticity proofs.

Core modules:

AI deepfake detection (EfficientNet-lite, CNN-based model)

Feature extraction and authenticity scoring

ZK proof generation (zk-STARK / zk-SNARK circuits via Circom or Halo2)

Proof hashing and storage on-chain (via Substrate runtime module)

Output: Media authenticity score, ZK proof and on-chain reference hash.

b. Vumah SDK (Integration Layer)
The Vumah SDK allows developers, institutions and partners to easily integrate Kweli verification and ZK validation into their platforms.

Functions:

Content verification API (submit → verify → receive proof)

On-chain proof validation calls

Identity verification hooks via KILT Protocol

Support for Proof of Personhood to ensure human-verified content submission

Language support: TypeScript, Python and Rust (for Substrate bindings).

Goal: Enable trust infrastructure to be embedded into Web2 or Web3 apps with minimal setup.

c. Vumah RailKit SDK (Cross-Chain Layer)
The RailKit SDK enables cross-parachain interoperability of proofs, ensuring verified data is portable and trusted across multiple ecosystems.

Protocols used: XCM (Cross-Consensus Messaging) and XCMP for proof sharing.

Functions:

Cross-chain validation of proofs and attestations

Integration with Frequency parachain for data aggregation

Secure metadata indexing for ESG impact tracking

Goal: Create a shared, verifiable ledger of authenticity events across chains.

Protocols & Standards
Zero-Knowledge Proofs: zk-STARK / zk-SNARK implementations for privacy-preserving authenticity verification.

Storage Protocols: IPFS / Arweave for decentralized media reference storage.

Interoperability: Polkadot’s XCM for proof exchange between parachains.

Identity Standards: KILT Decentralized Identifiers (DIDs), Verifiable Credentials (VCs).

Data Sharing: Frequency’s Data Sovereignty Framework for ethical analytics.

System Architecture
Workflow:

User uploads content via Kweli UI or partner platform.

AI engine analyzes media → produces authenticity score.

ZK circuit generates proof of authenticity without exposing content.

Proof and media hash are anchored on Polkadot (AssetHub / parachain).

Developers and institutions query the Vumah SDK for proof validation.

RailKit SDK enables sharing proof across chains (via XCM).

Verified data contributes to ESG analytics and impact dashboards.

Deployment Plan
Phase 1: Deploy Kweli backend + Substrate runtime module on testnet (3 months).

Phase 2: Integrate Vumah SDK for institutional partners (e.g media, governance).

Phase 3: Deploy RailKit SDK with cross-chain proof propagation.

Phase 4: Release developer documentation and open-source repositories.

Documentation to Be Published
API & SDK documentation

Smart contract & runtime documentation (Rust docs)

Developer guide: Integrating Kweli & SDKs into third-party platforms

Governance & sustainability report (aligned with Polkadot’s DOT economy)

ESG impact metrics and dashboard integration manual

We have already built a functional Proof of Concept under the Kweli project, which verifies media authenticity using AI and anchors zero-knowledge proofs on-chain. The MVP includes a Flask backend for deepfake detection, a React Native frontend for verification display and a Starknet prototype contract for storing authenticity hashes. We are also developing the Vumah SDK (v0.1) to allow third-party integrations and conducted preliminary research on zk-STARK circuits, KILT-based decentralized identity and cross-chain interoperability. These efforts validate the technical feasibility and market demand for our planned Substrate-based Vumah ZK Trust Stack within the Polkadot ecosystem.

Our project will not function as a social media platform or general-purpose content hosting service. It will not provide centralized moderation, censorship tools or data storage beyond verifiable metadata and cryptographic proofs. We are also not building a cryptocurrency exchange, token launchpad or speculative asset system. Instead, our focus remains on infrastructure for trust and verification, offering SDKs, APIs and proof mechanisms that others can integrate into their applications. This ensures we stay aligned with Polkadot’s interoperability and security principles without diluting focus into unrelated domains

The (future) tokenomics of your project
Our tokenomics will center around a utility and governance model that powers verification, data integrity and interoperability across the Vumah Trust Stack. The token will be used to pay for proof verification, data anchoring and SDK usage on the network. Developers and enterprises integrating the Kweli or RailKit SDKs will spend tokens to generate and validate zero-knowledge proofs, while verifiers and node operators will earn tokens as incentives for providing validation and storage services. A portion of fees will be burned or staked to maintain network sustainability and security. Governance rights will enable token holders to propose protocol upgrades, approve integrations and manage treasury allocations, ensuring a community-driven, scalable and self-sustaining ecosystem within Polkadot
For non-infrastructure projects—deployment and hosting costs, maintenance or audits
We will rely on cloud-based and decentralized infrastructure to ensure scalability and resilience. The Kweli verification API and Vumah SDK services will be hosted on AWS and IPFS hybrid environments, with smart contract deployments on Polkadot and test networks for validation. Maintenance costs will cover regular API updates, SDK compatibility improvements and data indexing optimization, while audits will focus on smart contracts, zero-knowledge proof logic and data handling security conducted by reputable third-party partners within the Polkadot ecosystem to guarantee compliance, reliability and transparency.
Business-oriented activities (marketing, business planning), events or outreach
We will focus on strategic ecosystem positioning, partnerships and visibility rather than traditional marketing. Our outreach will include joint webinars, hackathons and technical workshops with Polkadot ecosystem partners to onboard developers and adopters of the Vumah SDK and Kweli verification stack. Business planning will emphasize B2B partnerships in media verification, governance and AI-trust infrastructure, targeting early adopters in Africa and globally. We will also participate in Web3 conferences, Polkadot meetups and regional innovation forums to showcase progress, attract collaborators and build credibility without incurring unnecessary marketing overhead.

Ecosystem Fit
Our project fits into the Polkadot ecosystem as a trust and data integrity layer bridging AI verification, zero-knowledge proofs and decentralized identity. The Vumah ZK Trust Stack operates as a set of interoperable SDKs and pallets that enable AI-generated content verification, proof-of-personhood and data attestation across parachains. The Kweli verification engine anchors authenticity proofs on Polkadot AssetHub, while the Vumah RailKit SDK enables cross-chain transfer of verified data between applications and parachains. By doing so, our project strengthens the utility and adoption of DOT through transaction fees, verification proofs and decentralized trust applications, positioning Polkadot as the global backbone for verifiable AI and data integrity infrastructure.

Our target audience includes parachain developers, dApp builders and Web3 infrastructure teams seeking to integrate verifiable data and AI authenticity proofs into their applications. Additionally, we serve media organizations, governance platforms and identity systems that require zero-knowledge verification for content and credentials. Through the Vumah SDK and RailKit SDK, we also empower frontend developers and Web2 startups to easily build trust-enabled applications that interact seamlessly with the Polkadot ecosystem

Our project addresses the growing need for trust, authenticity and verifiable data in digital interactions across Africa and beyond. It provides a zero-knowledge verification layer that helps detect misinformation, authenticate media and validate identity without compromising privacy. By integrating with Polkadot, we enable interoperable, scalable and privacy-preserving verification across parachains filling a key gap for developers, organizations and users who require provable data integrity in AI, media and governance applications

We identified these needs through a combination of field research, user testing and emerging evidence from credible global and regional sources. Across Africa, misinformation and deepfakes have become significant threats to governance, journalism and online trust. Reports from UNESCO (2023) and BBC Africa Eye (2024) highlight the rise of synthetic media influencing public perception and elections. Additionally, academic research from MIT Media Lab and Oxford Internet Institute shows that misinformation spreads 70% faster than verified news, especially in mobile-first regions like Sub-Saharan Africa.

Through pilot testing of Kweli, our deepfake detection engine, with communications teams in Kenya we observed a consistent demand for verifiable authenticity proofs that are interoperable, tamper-proof, and privacy-respecting. This feedback validated the need for a decentralized, zero-knowledge trust infrastructure like the Vumah ZK Trust Stack, built to serve these contexts and integrated into Polkadot’s scalable ecosystem.

There are emerging projects focused on digital content verification and authenticity, such as Truepic (centralized image verification), Numbers Protocol (content provenance on BNB Chain) and Worldcoin (biometric proof of personhood). However, these solutions are either centralized, privacy-invasive or limited to a single blockchain. Vumah Labs differs by combining AI-powered deepfake detection with zero-knowledge proofs for privacy-preserving verification and by being natively built on Polkadot/Substrate for interoperability. This allows Vumah to provide verifiable yet privacy-respecting proofs of media authenticity and identity attestations across multiple chains, something existing solutions do not offer.

Team 👥

Team members
Name of team leader
Chepkemoi Chepkwony W – Founder & Lead Architect (AI, Blockchain & Zero-Knowledge Cryptography)
Names of team members
Swaleh Omar – AI/ML Engineer (Computer Vision & Deepfake Detection)
Anastacia Cherotich – Project Coordinator & Partnerships (Governance & ESG Alignmennt
We will be hiring a Frontend Developer (React, js, SDK Integration) and a Blockchain Engineer (Smart Contract Development/Rust)


Contact
Contact Name: Full name of the contact person in your team Wilfridah C. Chepkwony
Contact Email: wilfridac9@gmail.com
Website: https://vumah.netlify.app/

Legal Structure
Registered Address: ECOBANK TOWERS, MUINDI MBINGU St, NAIROBI
Registered Legal Entity: Vumah Labs Limited
Team's experience
The Vumah Labs team combines deep technical expertise in AI, blockchain and zero-knowledge cryptography with a strong research and innovation background. Chepkemoi Chepkwony W, Founder and Lead Architect, is a Computer Scientist with extensive experience in emerging technologies, having led multiple AI and blockchain research initiatives. Her work bridges zero-knowledge proof systems, decentralized trust architectures and applied machine learning, building on previous developer and advocacy roles within blockchain ecosystems such as Aleo. She has also been instrumental in developing AI models for media trust and blockchain-based verification systems through Vumah Labs.
Swaleh Maulid Omar, AI/ML Engineer and Research Scientist at the Kenya Industrial Research and Development Institute (KIRDI), brings over a decade of experience in data science, computer vision, and applied machine learning. He holds a PhD in Information Technology from JKUAT, with published research in deep learning and EEG signal analysis (LSTM-CNN architectures). His prior work includes AI-driven projects for public health, IoT-enabled agriculture, and big data platforms for agri-extension services. Swaleh’s expertise ensures scientific rigor in Kweli’s deepfake detection and model training pipelines.
Anastacia Cherotich, Project Coordinator and Partnerships Lead, contributes experience in governance, ESG alignment, and stakeholder engagement essential for scaling ethical AI solutions and ensuring compliance with data integrity standards.
The team is currently expanding to include a Frontend Developer (React, JS, SDK Integration) and a Blockchain Engineer (Smart Contract Development) to strengthen product development and user experience. Together, the team’s combined backgrounds in AI research, blockchain engineering and responsible technology development position Vumah Labs to deliver a scientifically grounded and technically robust solution.

Team Code Repos
https://github.com/Wilfychep/Kweli-2.0

Development Status 📖
Our implementation work is hosted on GitHub under the Kweli repository, which includes code for the Kweli deepfake detection prototype, backend Flask API for Starknet integration. The project began as a research effort exploring AI-driven media authentication and zero-knowledge verification mechanisms for Africa’s digital trust infrastructure. Prior to this submission, we’ve conducted several technical tests and shared progress updates within Web3 developer communities. The existing prototype supports image verification, cryptographic hashing and ZK proof generation using Starknet’s Cairo 2.11.4 environment, now being adapted for Substrate. We are extending this work to build Polkadot-compatible SDKs and proof-verification modules

https://medium.com/@wilfridac9/why-africa-needs-zk-tools-01df14809edc

Development Roadmap 🔩
Overview
Description: Development of Vumah Labs: Kweli Verification Engine, Vumah SDK, and RailKit Interoperability Layer (MVP – Phase 1)
Total Estimated Duration: 4 Months
Full-time equivalent (FTE): Milestone 1 – 1.5; Milestone 2 – 2; Milestone 3 – 2
Total Costs: 30,000 USD
DOT %: 50%

Milestone 1 — Kweli Verification Engine (Core Substrate Integration)

Estimated Duration: 1.5 Months
FTE: 1.5
Costs: 10,000 USD

Number	Deliverable	Specification
0a.	License	MIT License
0b.	Documentation	Inline code documentation, README setup guide, Docker setup instructions, and Substrate module configuration documentation.
0c.	Testing Guide	Unit test coverage (≥70%) for the core pallet and API integration. Documentation will describe how to execute the test suite.
1a.	Substrate Pallet: Kweli Verification Module	Implementation of kweli_verification_pallet that stores media authenticity hashes and zero-knowledge proof attestations on-chain.
1b.	ZK Proof Integration Engine	Integration of AI-generated proof data with on-chain verification logic using Substrate’s storage and proof modules.
1c.	API Gateway for Off-chain Inference	RESTful API built with Flask for interfacing AI verification results to Substrate module endpoints.
1d.	Docker Environment	Dockerfile and Compose configuration for full local deployment of the Kweli Verification Engine.
1e.	Article	Publish a technical article on integrating AI verification proofs into a Substrate runtime pallet.
Milestone 2 — Vumah SDK (Developer Integration Layer)

Estimated Duration: 1.5 Months
FTE: 2
Costs: 10,000 USD

Number	Deliverable	Specification
0a.	License	MIT License
0b.	Documentation	Inline TypeScript documentation, setup guide for developers, SDK API reference, and integration tutorial.
0c.	Testing Guide	Unit tests covering ≥80% of SDK logic using Jest; includes guide for testing proof generation and Substrate communication.
1a.	Vumah SDK (JavaScript Library)	Development of the open-source Vumah SDK to generate and verify ZK proofs, interact with the Kweli pallet, and broadcast transactions to Polkadot AssetHub.
1b.	Polkadot.js Integration	Implementation of Polkadot.js APIs for wallet connection, DOT transaction handling, and querying verification proofs.
1c.	SDK Examples & Demo App	Sample front-end dApp showing how developers can embed authenticity checks and proof verification using the SDK.
1d.	Dockerized SDK Environment	Containerized environment for SDK testing and integration validation.
1e.	Article	Publish a developer-focused article on using the Vumah SDK for verifiable media authentication on Polkadot.
Milestone 3 — RailKit Interoperability Layer (Cross-Parachain Proof Verification)

Estimated Duration: 1 Month
FTE: 2
Costs: 10,000 USD

Number	Deliverable	Specification
0a.	License	MIT License
0b.	Documentation	Inline Rust and JS documentation, README setup, and technical guide for RailKit configuration across parachains.
0c.	Testing Guide	Integration and E2E test suite verifying proof transfer and validation across parachains using XCM.
0d.	Article	Publish a final article summarizing RailKit’s cross-chain verification architecture and its integration with KILT & Frequency.
1a.	RailKit Cross-Parachain Module	Develop the RailKit layer enabling cross-chain proof transfer and verification between Kweli pallet and external parachains via XCM.
1b.	KILT Integration	Implement decentralized identity linkage for proof ownership using KILT credential schemas and DID support.
1c.	Frequency Integration	Enable proof broadcasting via Frequency for decentralized content attestations and reputation propagation.
1d.	Demo Deployment	Full demonstration deployment connecting two parachains, showing interoperable proof exchange and validation workflow.

Future Plans
In the short term, we intend to enhance and promote the project by finalizing a stable MVP and onboarding early adopters within Kenya’s digital ecosystem, including journalists, legal professionals and organizations combating misinformation. The focus will be on usability, integration with existing verification tools, and educational outreach to promote trust in AI-generated content detection.
For financing the project’s long-term maintenance and development, we plan to adopt a hybrid model that includes service subscriptions for institutions, grant funding from innovation accelerators e.g. we are shortlisted by UNICEF. We already sent Mozilla and the Ethereum Foundation applications as well as enterprise integrations with media and public sector clients. We also intend to open-source core components of the project under an Apache 2.0 license to foster community contributions while retaining premium APIs for enterprise users.
In the long term, the team aims to evolve the system into a fully decentralized AI verification network, integrating Zero-Knowledge Proofs for privacy-preserving authenticity verification across multiple media formats. We will build strategic partnerships with African universities, fact-checking organizations and blockchain networks to sustain innovation and research around AI trust and authenticity.
How did you hear about the Grants Program? Web3 Foundation Website / Medium / Twitter / Element / Announcement by another team / personal recommendation / etc.
HER DAO
Here you can also add any additional information that you think is relevant to this application but isn't part of it already, such as:
The project builds on prior work conducted by Vumah Labs, an emerging technology lab based in Nairobi focused on AI, blockchain and digital trust solutions. The team has already developed a working prototype demonstrating AI-based deepfake detection and ZK verification using Starknet. We have not yet received external financial contributions for this project; however, we have self-funded early development through internal resources and technical support from community networks within AI research ecosystems.
Previously, the team has participated in open innovation challenges and accelerator programs aimed at leveraging AI and blockchain for transparency and social impact, including UNICEF’s “Unlocking the Power of AI and Blockchain for Data Integrity and Trust” open call. These experiences have strengthened our technical foundation and informed our approach to ethical and decentralized media verification across Africa.
