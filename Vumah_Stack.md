# Team Name  
**Vumah Labs**

## Payment Details: 15mPRCCzYcZbxAGQep4JcRAg551tcYHixf3bm4KBZ7H31bjS
- **Level:** 2  

---

## Project Overview 📄

### Overview
**Vumah Labs — Building Africa’s Trust Infrastructure with AI and Zero-Knowledge Proofs on Polkadot.**

Vumah Labs is building the **Vumah ZK Trust Stack**, an open framework for authentic and verifiable digital content on Polkadot.  
The stack includes **Kweli**, an AI-powered deepfake detection and verification platform, the **Vumah SDK**, which enables developers to embed content authenticity and zero-knowledge proof generation into their apps, and the **Vumah RailKit SDK**, which provides APIs for verifiable data exchange across parachains.  

Together, they form a trust infrastructure that enhances transparency, identity assurance, and ESG data integrity across media, governance, and financial sectors.

Our project integrates deeply with the Polkadot ecosystem by leveraging **Substrate** for modular blockchain development and deploying the Vumah ZK Trust Stack (Kweli, Vumah SDK, and RailKit SDK) as interoperable pallets and developer tools.  
The Kweli engine anchors AI-generated authenticity proofs on **Polkadot AssetHub**, while the SDKs enable cross-parachain verification of zero-knowledge proofs and digital identity attestations through integrations with **KILT Protocol**, **Proof of Personhood**, and **Frequency**.  

This architecture strengthens Polkadot’s trust and data integrity layer, promotes responsible AI use, and generates tangible utility for the DOT token through verification, transaction, and data anchoring activities.

Our team is driven by the urgent need to restore trust in digital information—especially across Africa, where misinformation, identity fraud, and data manipulation have real social and governance impacts. Through Kweli and the Vumah ZK Trust Stack, we’re building verifiable infrastructure that empowers users, journalists, and institutions to prove authenticity without sacrificing privacy.

We see Polkadot as the ideal ecosystem to scale this vision globally; its interoperability, strong identity frameworks, and privacy-preserving technologies align perfectly with our mission to create trustworthy, impact-driven Web3 solutions for real-world users.

---

### Mockups / Designs
📎 [View UI Mockups](https://docs.google.com/document/d/1NSX3KBtQYdJA3Nn8uBVVQnGPmx3CYTdC/edit?usp=sharing)

---

## Data Models / API Specifications

The Vumah ZK Trust Stack exposes its core functionality through well-defined data models and RESTful APIs for seamless integration with Substrate-based chains.

### Core Data Entities
- **MediaVerification**: uploaded media details — uploader address, AI authenticity score, media hash, ZK proof, verification status.  
- **ProofRecords**: anchored cryptographic proofs — proof IDs, proof type (SNARK/STARK), tx hashes, verifier addresses.  
- **IdentityAttestations**: links verified identities (journalists, institutions, creators) to media/datasets via KILT & Proof of Personhood.  
- **AuditTrail**: logs every verification/validation event, generating measurable ESG data.

### API Endpoints
- `POST /upload` → Upload media, receive authenticity score & media ID.  
- `GET /verify/:media_id` → Retrieve verification results and ZK proof details.  
- `POST /attest` → Submit identity attestations linked to verified records.  
- `GET /audit/:media_id` → Request integrity and impact reports.  

### SDK Workflow
1. User uploads media via Kweli or Vumah SDK.  
2. AI engine evaluates authenticity and generates a ZK proof.  
3. RailKit SDK anchors proof & metadata on Polkadot AssetHub.  
4. Other parachains verify proofs via XCM cross-chain messaging.

---

## Technology Stack

### Frontend & SDK Layer
- **Frameworks:** React, Expo (React Native)
- **UI Libraries:** TailwindCSS, ShadCN
- **SDKs:**
  - **Vumah SDK:** APIs & client libs for verification & proof validation.
  - **RailKit SDK:** Cross-chain proof verification via XCM.

### Backend & AI Engine
- **Language:** Python (Flask / FastAPI)
- **AI Models:** EfficientNet-lite (deepfake detection), Whisper (future audio verification)
- **ZK Tools:** Circom + snarkjs, Cairo (zk-STARK circuits)
- **Storage:** IPFS / Arweave

### Blockchain & Proof Layer
- **Framework:** Substrate  
- **Deployment:** Polkadot AssetHub → later, a dedicated parachain  
- **Integrations:** KILT (identity), Proof of Personhood (human attestation), Frequency (data analytics)
- **Token Economy:** Native DOT for fees, staking, and governance  

### Infrastructure & DevOps
- **Containerization:** Docker + Kubernetes  
- **Monitoring:** Prometheus, Grafana  
- **Nodes:** Substrate validators (AWS Africa region)  

---

## Core Components

### a. Kweli (AI & Proof Engine)
Processes user media to detect manipulation and generate authenticity proofs.  
Outputs: Authenticity score, ZK proof, and on-chain hash.

### b. Vumah SDK
Integration layer allowing developers to verify content & proofs via APIs.  
Supports TypeScript, Python, and Rust.

### c. RailKit SDK
Cross-parachain interoperability layer for proofs using **XCM**.

---

## System Architecture

1. User uploads content via Kweli UI or partner app.  
2. AI engine analyzes media → produces authenticity score.  
3. ZK circuit generates proof without exposing content.  
4. Proof & hash anchored on Polkadot.  
5. SDKs enable proof verification & cross-chain sharing.  
6. Data feeds into ESG dashboards.  

---

## Deployment Plan

| Phase | Duration | Description |
|-------|-----------|-------------|
| **1** | 3 months | Deploy Kweli backend + Substrate module (testnet) |
| **2** | 1 month | Integrate Vumah SDK for institutional partners |
| **3** | 1 month | Deploy RailKit SDK with cross-chain proof propagation |
| **4** | — | Release developer documentation and open-source repos |

---

## Documentation to Be Published
- API & SDK documentation  
- Smart contract & runtime docs  
- Developer integration guide  
- Governance & sustainability report  
- ESG impact metrics guide  

---

## Ecosystem Fit

Vumah Labs provides a **trust and data integrity layer** within Polkadot—bridging AI verification, ZK proofs, and decentralized identity.

- **Target users:** parachain developers, dApp builders, journalists, and institutions.  
- **Need addressed:** misinformation, digital trust, privacy-preserving verification.  
- **Key difference:** combines AI + ZK + Substrate interoperability (vs. centralized or single-chain alternatives).

---

## Team 👥

**Team Leader:**  
- **Chepkemoi Chepkwony W.** – Founder & Lead Architect (AI, Blockchain, ZK Cryptography)

**Team Members:**  
- **Swaleh Omar** – AI/ML Engineer (Computer Vision & Deepfake Detection)  
- **Anastacia Cherotich** – Project Coordinator (Governance & ESG Alignment)

**Hiring:**  
- Frontend Developer (React, SDK Integration)  
- Blockchain Engineer (Smart Contract / Rust)

**Contact:**  
- **Name:** Wilfridah C. Chepkwony  
- **Email:** [wilfridac9@gmail.com](mailto:wilfridac9@gmail.com)  
- **Website:** [https://vumah.netlify.app/](https://vumah.netlify.app/)

**Legal Structure:**  
- **Entity:** Vumah Labs Limited  
- **Address:** Ecobank Towers, Muindi Mbingu St, Nairobi

 ## Team's Experience

The **Vumah Labs** team combines deep technical expertise in **AI**, **blockchain** and **zero-knowledge cryptography** with a strong background in research and innovation.

**Chepkemoi Chepkwony W** — *Founder and Lead Architect*  
Chepkemoi is a **Computer Scientist** with extensive experience in emerging technologies, having led multiple AI and blockchain research initiatives. Her work bridges **zero-knowledge proof systems** **decentralized trust architectures**, and **applied machine learning**, building on previous developer and advocacy roles within blockchain ecosystems such as **Aleo**. She has also been instrumental in developing **AI models for media trust** and **blockchain-based verification systems** through Vumah Labs.

**Swaleh Maulid Omar** — *AI/ML Engineer and Research Scientist (KIRDI)*  
Swaleh brings over a decade of experience in **data science**, **computer vision**, and **applied machine learning**. He holds a **PhD in Information Technology** from **Jomo Kenyatta University of Agriculture and Technology (JKUAT)**, with published research in **deep learning** and **EEG signal analysis (LSTM-CNN architectures)**. His prior work includes **AI-driven projects** for public health **IoT-enabled agriculture**, and **big data platforms** for agri-extension services. Swaleh’s expertise ensures scientific rigor in **Kweli’s deepfake detection** and **model training pipelines**.

**Anastacia Cherotich** — *Project Coordinator and Partnerships Lead*  
Anastacia contributes experience in **governance**, **ESG alignment**, and **stakeholder engagement**, essential for scaling ethical AI solutions and ensuring compliance with **data integrity** and **privacy standards**.

The team is currently expanding to include a **Frontend Developer (React, JS, SDK Integration)** and a **Blockchain Engineer (Smart Contract Development)** to strengthen product development and user experience.  
Together, the team’s combined backgrounds in **AI research** **blockchain engineering**, and **responsible technology development** position Vumah Labs to deliver a **scientifically grounded** and **technically robust** solution.


**Repos:**  
- [Kweli-2.0](https://github.com/Wilfychep/Kweli-2.0)  

---

## Development Status 📖

Kweli’s prototype verifies media authenticity using AI and anchors ZK proofs on-chain.  
Built with Flask (backend), React Native (frontend), and Cairo (ZK).  
Now transitioning to Substrate and Polkadot.  

📖 [Medium Article: Why Africa Needs ZK Tools](https://medium.com/@wilfridac9/why-africa-needs-zk-tools-01df14809edc)

---

## Development Roadmap 🔩

### Overview
**Description:** Development of Vumah Labs MVP: Kweli Verification Engine, Vumah SDK, and RailKit Interoperability Layer (Phase 1)  
**Total Estimated Duration:** 4 Months  
**Full-Time Equivalent (FTE):** Milestone 1 – 1.5; Milestone 2 – 2; Milestone 3 – 2  
**Total Costs:** 30,000 USD  
**DOT Percentage:** 50%  

---

### Milestone 1 — Kweli Verification Engine (Core Substrate Integration)

**Estimated Duration:** 1.5 Months  
**FTE:** 1.5  
**Costs:** 11,000 USD  

This milestone establishes the foundation of the Vumah Trust Stack by implementing the **Kweli Verification Engine** as a Substrate pallet and integrating it with an AI-driven proof validation pipeline. It enables on-chain storage of authenticity proofs and communication with the AI backend.

| Number | Deliverable | Specification |
|:-------|:-------------|:---------------|
| 0a. | **License** | MIT License |
| 0b. | **Documentation** | Inline code documentation, README setup guide, Docker setup instructions, and Substrate module configuration documentation. |
| 0c. | **Testing Guide** | Unit test coverage (≥70%) for the core pallet and API integration. Documentation will describe how to execute the test suite. |
| 1 | **Substrate Pallet: Kweli Verification Module** | Implementation of `kweli_verification_pallet` that stores media authenticity hashes and zero-knowledge proof attestations on-chain. |
| 2 | **ZK Proof Integration Engine** | Integration of AI-generated proof data with on-chain verification logic using Substrate’s storage and proof modules. |
| 3 | **API Gateway for Off-chain Inference** | RESTful API built with Flask for interfacing AI verification results to Substrate module endpoints. |
| 4 | **Docker Environment** | Dockerfile and Compose configuration for full local deployment of the Kweli Verification Engine. |
| 5 | **Article** | Publish a technical article on integrating AI verification proofs into a Substrate runtime pallet. |

---

### Milestone 2 — Vumah SDK (Developer Integration Layer)

**Estimated Duration:** 1.5 Months  
**FTE:** 2  
**Costs:** 11,000 USD  

This milestone focuses on the **developer integration layer**, delivering the open-source **Vumah SDK** that allows developers to embed authenticity verification and ZK proof validation directly into their dApps using Polkadot’s APIs.

| Number | Deliverable | Specification |
|:-------|:-------------|:---------------|
| 0a. | **License** | MIT License |
| 0b. | **Documentation** | Inline TypeScript documentation, setup guide for developers, SDK API reference, and integration tutorial. |
| 0c. | **Testing Guide** | Unit tests covering ≥80% of SDK logic using Jest; includes guide for testing proof generation and Substrate communication. |
| 1 | **Vumah SDK (JavaScript Library)** | Development of the open-source Vumah SDK to generate and verify ZK proofs, interact with the Kweli pallet, and broadcast transactions to Polkadot AssetHub. |
| 2 | **Polkadot.js Integration** | Implementation of Polkadot.js APIs for wallet connection, DOT transaction handling, and querying verification proofs. |
| 3 | **SDK Examples & Demo App** | Sample front-end dApp showing how developers can embed authenticity checks and proof verification using the SDK. |
| 4 | **Dockerized SDK Environment** | Containerized environment for SDK testing and integration validation. |
| 5 | **Article** | Publish a developer-focused article on using the Vumah SDK for verifiable media authentication on Polkadot. |

---

### Milestone 3 — RailKit Interoperability Layer (Cross-Parachain Proof Verification)

**Estimated Duration:** 1 Month  
**FTE:** 2  
**Costs:** 8,000 USD  

This milestone introduces **RailKit**, the interoperability layer that enables cross-chain verification of authenticity proofs using **XCM**. It connects the Kweli pallet with identity and data parachains (KILT and Frequency) for decentralized validation.

| Number | Deliverable | Specification |
|:-------|:-------------|:---------------|
| 0a. | **License** | MIT License |
| 0b. | **Documentation** | Inline Rust and JS documentation, README setup, and technical guide for RailKit configuration across parachains. |
| 0c. | **Testing Guide** | Integration and end-to-end test suite verifying proof transfer and validation across parachains using XCM. |
| 0d. | **Article** | Publish a final article summarizing RailKit’s cross-chain verification architecture and its integration with KILT & Frequency. |
| 1 | **RailKit Cross-Parachain Module** | Develop the RailKit layer enabling cross-chain proof transfer and verification between Kweli pallet and external parachains via XCM. |
| 2 | **KILT Integration** | Implement decentralized identity linkage for proof ownership using KILT credential schemas and DID support. |
| 3 | **Frequency Integration** | Enable proof broadcasting via Frequency for decentralized content attestations and reputation propagation. |
| 4 | **Demo Deployment** | Full demonstration deployment connecting two parachains, showing interoperable proof exchange and validation workflow. |

---

### Summary

At the completion of this 4-month development cycle, the **Vumah Trust Stack MVP** will include:
- A functional **Kweli Verification Engine** pallet for Substrate.
- An open-source **Vumah SDK** for developer integration.
- A working **RailKit interoperability layer** connecting multiple parachains for verifiable proof exchange.  
This MVP establishes a foundation for trust infrastructure that enhances media integrity, digital identity assurance, and cross-chain data verification on Polkadot.

---

## Future Plans

- **Short-term:** finalize MVP, onboard early adopters (media, legal, governance sectors in Kenya).  
- **Long-term:** evolve into a fully decentralized AI verification network.  
- **Funding:** grants, partnerships (UNICEF, Mozilla, Ethereum Foundation), enterprise integrations.  
- **Sustainability:** open-source core + premium APIs for enterprises.  

---

## Additional Information
- **Referral:** HER DAO  
- Builds on self-funded work by Vumah Labs in Nairobi.  
- Participated in UNICEF’s *AI & Blockchain for Data Integrity and Trust* challenge.  
- No prior external funding received.  

---
## Additional Information

The project builds on prior work conducted by **Vumah Labs** an emerging technology lab based in **Nairobi, Kenya**, focused on **AI**, **blockchain** and **digital trust** solutions.  
The team has already developed a **working prototype** demonstrating **AI-based deepfake detection** and **zero-knowledge verification** using **Starknet**.

We have not yet received external financial contributions for this project; however, we have **self-funded early development** through internal resources and **technical support from community networks** within AI and blockchain research ecosystems.

Previously, the team participated in open innovation challenges and accelerator programs aimed at leveraging AI and blockchain for **transparency and social impact** including **UNICEF’s “Unlocking the Power of AI and Blockchain for Data Integrity and Trust”** open call.  
These experiences have strengthened our technical foundation and informed our approach to **ethical, decentralized media verification** across Africa.

Our work positions Vumah Labs as a regional leader in applying emerging technologies to enhance **digital authenticity**, **data integrity**, and **trust infrastructure** for users and developers alike.

