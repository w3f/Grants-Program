# W3b-Stitch

- **Team Name:** W3b Stitch Technologies L.L.C
- **Payment Details:**
  - **DOT**: 15mNcGQnJVKv9PXLhWEQWcz4VeBJESLDrgvsU7FN9bw1XAmB
  - **Payment**:(USDC) 15mNcGQnJVKv9PXLhWEQWcz4VeBJESLDrgvsU7FN9bw1XAmB
- **[Level](https://grants.web3.foundation/docs/Introduction/levels):** Level 2

## Project Overview :page_facing_up:

### Overview
<img width="853" height="707" alt="image" src="https://github.com/user-attachments/assets/e228fb97-1c87-4036-bab5-5a19e125ca10" />



Tagline:
W3b Stitch — a decentralized trust engine for verifying media, credentials, and identities across blockchains.

Brief Description

W3b Stitch provides a platform for creating and verifying proofs of authenticity for digital content and credentials. Through a simple web app, users can anchor proofs on-chain and confirm integrity without relying on centralized authorities. The project bridges decentralized identifiers (DIDs), verifiable credentials, and blockchain anchoring into a unified, user-friendly application.

Integration with Substrate / Polkadot / Kusama

The Polkadot ecosystem is a natural fit for W3b Stitch due to its focus on interoperability and scalability. W3b Stitch can be extended as a Substrate pallet for credential verification, enabling parachains to integrate authenticity checks directly into their logic. Using XCM, proofs of authenticity can move seamlessly between parachains, making W3b Stitch a cross-ecosystem trust layer. Deployment on Kusama would allow for rapid iteration and testing, while Polkadot provides the long-term scalable environment for production use.

Team Interest

Our team is deeply motivated to solve the growing challenge of digital misinformation and unverifiable credentials. We believe that trust is a missing layer in Web3, and Polkadot’s architecture uniquely supports our vision of decentralized, interoperable, and scalable verification. By building W3b Stitch within this ecosystem, we can contribute to the broader mission of creating a trustworthy, open, and user-centric internet.

### Project Details

The initial MVP will feature a web-based dashboard with the following core components:

Upload & Verification Panel – simple drag-and-drop for documents/media with instant verification results.

Credential Viewer – allows users to inspect verifiable credentials (VCs) and DID metadata.

Proof History – displays anchored transactions and status checks.
(Mockups available upon request; early wireframes demonstrate minimal but intuitive interactions for verification and credential anchoring.)

Data Models / API Specifications

Data Model:

Credential object (issuer, subject, metadata, proof hash).

ProofRecord object (hash, timestamp, anchor transaction ID, verification status).

Core APIs:

POST /anchor → submit hash for anchoring.

GET /verify/{hash} → confirm existence and validity on-chain.

GET /credential/{id} → retrieve credential metadata and verification record.

Technology Stack Overview
## Tech Stack Overview

| Layer            | Technology / Standard                                  | Purpose & Role                                                                 |
|------------------|--------------------------------------------------------|--------------------------------------------------------------------------------|
| **Frontend**     | Next.js (React 18), Tailwind CSS                       | User-facing dashboard for credential/media verification; responsive and modern UI |
| **Backend**      | NestJS (TypeScript) REST API                           | Verification pipeline orchestration, hashing, event-driven trust logic           |
| **Blockchain**   | Substrate-based parachain (Westend/Kusama testnets)    | On-chain anchoring of Trust Delta Records (TDRs) and Verifiable State Bundles (VSBs) via custom pallet |
| **Storage**      | IPFS / Filecoin                                        | Decentralized storage of optional proofs and metadata, ensuring permanence & resilience |
| **Identity**     | W3C DIDs & Verifiable Credentials (VCs)                | Credential modeling, selective disclosure, and interoperability across systems   |
| **Protocols**    | W3C VC / DID Standards, Polkadot XCM                   | Standards compliance and cross-parachain interoperability                      |
| **DevOps**       | Docker, GitHub Actions                                 | Containerization and CI/CD pipelines for reliable deployments                   |
| **Database**     | PostgreSQL                                             | Off-chain persistence of events, user state, and verification logs              |

---



PoC / MVP or Prior Work

A WordPress-based prototype (news verification bot) has been deployed to demonstrate concept feasibility.

Core repo includes hash anchoring on EVM testnets (Sepolia) to validate workflow.

Whitepaper and provisional patent filed, outlining system architecture and long-term trust engine roadmap.

What the Project Will Not Provide

W3b Stitch is not a storage platform for raw media files; it anchors proofs, not content itself.

It will not replace existing identity providers; rather, it complements them via interoperability with DID/VC standards.

It will not deliver a public blockchain from scratch; instead, it leverages Substrate and Polkadot’s ecosystem.

It is not intended as a moderation tool for social platforms but as a verification layer they can integrate.

### Ecosystem Fit

Help us locate your project in the Polkadot/Substrate/Kusama landscape and what problems it tries to solve by answering each of these questions:

Where and how does your project fit into the ecosystem?

W3b Stitch fits into the Polkadot ecosystem as a decentralized trust layer. By providing verifiable proofs for media, credentials, and identity, it can integrate with parachains, wallets, and dapps that need authenticated data flows. Using Substrate, a verification pallet can be implemented to make trust primitives available across parachains, and XCM can ensure that proofs are portable and interoperable. In this way, Polkadot serves as the base layer for trust, and W3b Stitch extends that value across the ecosystem.

Who is your target audience?

Developers building parachains, dapps, and wallets who need verifiable credentialing and media authenticity services.

Enterprises seeking Web3-based solutions for credential authentication, compliance, and fraud prevention.

End users who want confidence that the content they consume or credentials they rely on are authentic.

The wider Polkadot ecosystem, where trust and verification primitives can be reused by multiple teams.

What need(s) does your project meet?

W3b Stitch addresses the urgent need for everyday digital trust in Web3. It creates the infrastructure for verifying the authenticity of media, credentials, and identities in a scalable and decentralized way. With misinformation, fraud, and unverifiable credentials becoming systemic issues, W3b Stitch provides a standards-based solution built on DIDs, VCs, and blockchain anchoring.

How did you identify these needs?

The project began as an on-chain news aggregator and evolved as research and experimentation revealed broader applications. The architecture was expanded to cover media authenticity, identity, credentials, and security — ultimately forming the W3b Stitch trust engine. A provisional patent filed with the USPTO secures the novel architecture. Market research and analysis of digital trust trends confirmed the gravity and scale of the problem: misinformation and identity fraud already cost billions annually, and existing centralized solutions fail to meet Web3’s interoperability and transparency needs.

Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?

No. After extensive research, there appear to be no projects in the ecosystem that combine the robust flows and modular architecture of W3b Stitch. While some projects address decentralized identity or verifiable credentials in isolation, none integrate media verification, credential authentication, and decentralized identity into a cohesive trust layer.

If not, why might such a project not have been possible or attempted before?

Until recently, Web3 infrastructure was focused primarily on DeFi and token economies. The combination of standards (DIDs, VCs), maturing Substrate tooling, and Polkadot’s cross-chain messaging now makes it possible to deliver a scalable, multi-domain trust engine. Earlier attempts outside Polkadot likely failed due to siloed design, lack of interoperability, and limited adoption of trust standards.

Are there any projects similar to yours in related ecosystems?

No direct equivalents exist. While certain ecosystems (e.g., Ethereum, Solana) have experiments in identity or credentialing, none provide the modular, multi-domain trust architecture proposed by W3b Stitch. This novelty, combined with Polkadot’s interoperability and governance model, makes the project uniquely positioned to succeed here.

## Team :busts_in_silhouette:


### Team members

- Name of team leader: Jayden C. Saliby (Founder) — Inventor of W3b Stitch, author of its provisional patent design, and founder of W3b Stitch Technologies LLC. Currently advancing technical expertise through Google IT and CompTIA A+ studies while leading project architecture and development.
- Names of team members: Oluwaseyi Oni (Contributor) — Automation workflow specialist with an MPA from Obafemi Awolowo University and an early supporter of W3b Stitch. The team is actively expanding through channels such as Colosseum, LinkedIn, and X, and has initiated discussions with potential collaborators including Cowchain.io and NodeCentral.
### Contact

- **Contact Name:** Jayden C. Saliby
- **Contact Email:** Jaydencs@w3bstitch.com
- **Website:** WWW.w3bstitch.com

### Legal Structure

- **Registered Address:** 414 w whitehall street Allentown, pennsylvania, USA
- **Registered Legal Entity:** W3b Stitch Technologies L.L.C

### Team's experience

Team’s Relevant Experience

Our team brings together a mix of blockchain development, web application engineering, and applied research in digital identity and media verification. The founder has led the design of the W3b Stitch trust architecture, filed as a provisional patent with the USPTO, which outlines novel workflows for verifiable credentials, decentralized identity, and cross-chain media verification.

Relevant past work includes:

Prototype development of a news-verification aggregator integrated with blockchain proof anchoring.

Hash anchoring on EVM testnets (Sepolia) to validate proof-of-concept workflows.

Experience with modern web stacks (Next.js, NestJS, IPFS integration) for scalable MVP development.

Open-source contributions and research into decentralized identity standards (DIDs, VCs) and how they can be applied to real-world problems of digital trust.

Past Applications to Web3 Foundation

This is our first submission to the Web3 Foundation. No prior grants have been applied for under this project or related entities.

### Team Code Repos
## Main repo for W3F MVP    
(https://github.com/rocketjays-cmyk/W3b-Stitch-DOT)
## Archived Repo
-(https://github.com/rocketjays-cmyk/w3b-stitch)



## GitHub accounts of all team members.

Jayden C. Saliby
- https://github.com/rocketjays-cmyk


### Team LinkedIn Profiles (if available)

- www.linkedin.com/in/w3bstitch
- https://www.linkedin.com/in/oluwaseyi-oni-b784a4227/



## Development Status :open_book:

Development Status 📖

- **GitHub Repository:** [https://github.com/rocketjays-cmyk/w3b-stitch](https://github.com/rocketjays-cmyk/w3b-stitch) — contains the initial MVP implementation with hash anchoring logic, FastAPI backend, and integration stubs for credential verification.  
- **Whitepaper:** Available at [www.w3bstitch.com](http://www.w3bstitch.com) — outlines the system architecture, workflows, and long-term trust engine roadmap.  
- **Research & Concept Validation:** Early prototype deployed as a WordPress-based news verification bot to demonstrate feasibility of on-chain proof anchoring.  
- **Community Discussion:** Active participation on GitHub Issues and grant program forums, engaging with feedback from Web3 Foundation reviewers.  
- **Design Iterations:** Initial UI wireframes for a credential/media verification dashboard (mockups available upon request).  
- **Patent Filing:** Provisional patent submitted to the USPTO describing Trust Delta Records (TDRs), Verifiable State Bundles (VSBs), and multi-ledger anchoring design.  


## Development Roadmap :nut_and_bolt:

## Overview
- **Total Estimated Duration:** 2 months  
- **Full-Time Equivalent (FTE):** 2 
- **Total Costs:** 30,000 USD  
- **DOT %:** 50%  

### Milestone 1 — Trust Delta Anchoring Pallet & API

- **Estimated Duration:** 1 month  
- **FTE:** 1  
- **Costs:** 15,000 USD  

| No. | Deliverable                                      | Specification |
|-----|--------------------------------------------------|---------------|
| 0a. | **License**                                      | All code released under **Apache-2.0**. |
| 0b. | **Documentation**                                | Inline **rustdocs** for all public items; developer guide explaining pallet usage & API integration; OpenAPI spec auto-generated for FastAPI endpoints. |
| 0c. | **Tests & Test Guide**                           | **>80%** coverage with `cargo test` (unit) and `pytest` (integration) against a local Substrate node; includes instructions for test execution. |
| 0d. | **Docker**                                       | `docker-compose.yml` launching Substrate node, FastAPI service, and Postgres database with demo seed data. |
| 1.  | **Substrate module: `pallet_tdr_anchor`**        | Implements extrinsics: `anchor_hash(hash: H256)`, `anchor_vsb(commitment: H256)`, `verify_membership(proof: MerkleProof)`; emits events for anchoring/verification; includes benchmarks and example runtime integration. |
| 2.  | **FastAPI backend reference client**             | REST endpoints: `POST /anchor` → submit hash for anchoring; `GET /verify/{hash}` → confirm existence and validity; integrated with local Substrate node. |
| 3.  | **PostgreSQL schema**                            | Table `ProofRecord(id, hash, tx_id, timestamp, status)` with migrations; used to persist proof anchoring and verification logs. |
| 4.  | **Reusability**                                  | Pallet can be imported by any parachain/dapp to add anchoring primitives; API client usable in non-Rust environments for quick integration. |

---
### Milestone 2 — Credential Authentication & Provenance Pallet

- **Estimated Duration:** 1 month  
- **FTE:** 1  
- **Costs:** 15,000 USD  

| No. | Deliverable                                      | Specification |
|-----|--------------------------------------------------|---------------|
| 0a. | **License**                                      | All code released under **Apache-2.0**. |
| 0b. | **Documentation**                                | Inline **rustdocs** for all public items; developer guide covering pallet usage, issuer/schema registry, credential anchor/verify/revoke flows; migration notes and examples; changelog. |
| 0c. | **Tests & Test Guide**                           | **>80%** unit/integration coverage via `cargo test`; end-to-end tests using fixtures for sample VCs and revocation; **Test Guide** explaining how to run tests and interpret results. |
| 0d. | **Docker**                                       | `docker-compose.yml` launching a local Substrate node with `pallet_tdr_anchor` + `pallet_capm_credentials` enabled, plus a Postgres service pre-seeded for demo flows. |
| 1.  | **Substrate module: `pallet_capm_credentials`**  | Implements extrinsics: `register_issuer(did: DID)`, `register_schema(schema: VC_Schema)`, `anchor_credential(credential_hash: H256)`, `revoke_credential(credential_id: Hash)`, `verify_credential(credential_id: Hash)`. Includes events, storage items, weights/benchmarks, and example runtime integration. |
| 2.  | **Credential storage & verification pipeline**   | Postgres schema and migrations for `Credential(issuer, subject, metadata, proof_hash, status, timestamps)`; verification pipeline that checks membership/validity and reflects **revocation status**. |
| 3.  | **Schema & issuer registry examples**            | Example DID/VC JSON-LD schemas; registry population scripts; tutorial showing issuance → anchor → verify → revoke round-trip. |
| 4.  | **Reusability**                                  | Pallet designed for import by other parachains/dapps; Postgres schema and tutorials provided as reusable patterns for DID/VC interoperability across the ecosystem. |

## Future Plans

### Financing Long-Term Maintenance and Development
- Subscription-based services for credential verification and media authenticity.  
- Ecosystem grants (Web3 Foundation, Solana, Polygon) to accelerate development without loss of ownership.  
- Enterprise integrations and SaaS subscriptions to fund ongoing maintenance and expansion.  

### Short-Term Use, Enhancement, and Promotion
- Prioritize MVP completion for media verification and credential authentication.  
- Iterative protocol improvements and expansion of open-source components.  
- Active promotion via community engagement, developer outreach, and early adopter partnerships.  
- Showcase progress through GitHub updates, technical blogs, and social channels to build trust and attract contributors.  

### Long-Term Team Plans and Intentions
- W3b Stitch Technologies LLC as project steward, maintaining core development and open ecosystem growth.  
- Evolve W3b Stitch into a cross-industry trust layer for verifiable credentials and digital interactions.  
- Gradually decentralize governance with community participation in roadmap priorities.  
- Ensure professional maintenance, security audits, and integration support are sustained long-term.  

## Referral Program (optional) :moneybag:

- **Referrer:** none
- **Payment Address:** N/A

## Additional Information :heavy_plus_sign:
**How did you hear about the Grants Program?**  
Research on Github.



