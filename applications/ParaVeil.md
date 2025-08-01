# ParaVeil: Privacy-Preserving DeFi Middleware for Polkadot

- **Team Name:** ParaVeil
- **Payment Details:**
- **DOT:** [13wkakWuNMjVvtmne4BMRvMXpHALGiDQ1AT1eFV3mwn1VYe3]

## Project Overview :

### Overview

- **Tagline:** Plug-and-play privacy middleware enabling seamless, compliant privacy for DeFi across Polkadot parachains.
- **Description:** ParaVeil is a modular privacy engine for DeFi applications on Polkadot. It encrypts transaction amounts and on-chain state via off-chain PET co-processors (TEE-based), while on-chain Substrate pallets verify zero-knowledge proofs to maintain private shared state without altering existing parachains or requiring additional wallets.
- **Integration:** Implements a Substrate pallet and XCM v3 messaging for cross-parachain encrypted transfers; compatible with any Polkadot parachain.
- **Motivation:** Address growing demand for financial privacy in DeFi—providing middleware infrastructure to enable confidential operations while preserving auditability and compliance.

### Project Details

- **Mockups/UI:** N/A (middleware only; SDK includes CLI examples).
- **Data Models/API:**
  - EncryptedBalance struct (ciphertext, nonce, proof)
  - OffChainWorker RPC methods: `submit_ciphertext()`, `verify_proof()`
- **Tech Stack:**
  - Substrate FRAME (Rust)
  - arkworks-rs for zkSNARKs
  - Intel SGX / AMD SEV enclaves
  - WASM for co-processor modules
  - TypeScript SDK \& Polkadot.js plugins

#### Architecture Diagram

[![ParaVeil Architecture](https://i.postimg.cc/ZKHrTrM5/Screenshot-2025-07-31-at-9-09-16-AM.png)](https://postimg.cc/QHBBmWD2)

### Ecosystem Fit

- **Ecosystem Role:** Infrastructure-level privacy for DeFi parachains.
- **Target Audience:** Parachain teams, DeFi protocol developers, institutional users requiring compliance-ready confidentiality.
- **Needs Met:** Confidential transaction amounts and state to enable privacy-preserving swaps, lending, and yield strategies.
- **Need Identification:** Polkadot Forum discussions (e.g., “Privacy preserving wallet extension”); Manta Network demand metrics; developer surveys.
- **Comparative Projects:**
  - _Manta Network_ (zkSNARK-based DEX privacy) – ParaVeil offers middleware for any parachain.
  - _Aleph Zero_ (privacy chain) – ParaVeil is parachain-agnostic middleware.
- **Related Ecosystems:** Secret Network middleware on Cosmos; Aztec on Ethereum (requires bridging).

## Team

### Team Members

- [Aman Satywani] – Full-stack developer, ZK researcher

### Contact

- **Contact Name:** [Aman Satyawani]
- **Contact Email:** [amansatyawani10@gmail.com]

### Legal Structure

- **Registered Address:** [Street, City, Country]
- **Registered Legal Entity:** [Your Entity Name]

### Team’s Experience

- **Previous Grants/Contributions:**
  - [Solana Foundation x CoinDCX grant]
  - [Turbin3 graduate]
  - [Open source contribution to solana foundation bounties]

### Team Code Repos

- https://github.com/ParaVeil

### Team GitHub Profiles

- https://github.com/[satyawaniaman]

### Team LinkedIn Profiles

- https://www.linkedin.com/in/[aman-satyawani-2566a5222]

## Development Status :

- **Code:** Prototype privacy pallet and TEE co-processor on private repo.
- **Research:**
  - arXiv:2307.00521 zkFi middleware
  - Phala Network “What is Coprocessor?” blog
  - Encifher integration docs
  - Ethereum Research co-processor proposals
- **Discussions:** Polkadot Forum threads on private transactions; GitHub issues on XCM privacy.
- **Documentation:** Draft README with architecture diagrams; initial API spec.

## Development Roadmap :

- **Total Estimated Duration:** 6 months
- **Full-Time Equivalent (FTE):** 2.0
- **Total Costs:** 10,000 USD
- **DOT %:** 60%

### Milestone 1 — Core Privacy Engine \& Integration (Months 1–2)

- **Duration:** 2 months
- **FTE:** 2.5
- **Costs:** 4,000 USD

| Number | Deliverable               | Specification                                                             |
| -----: | :------------------------ | :------------------------------------------------------------------------ |
|    0a. | License                   | Apache 2.0                                                                |
|    0b. | Documentation             | Inline code docs; “Getting Started” integration guide                     |
|    0c. | Testing and Testing Guide | Unit tests for pallet \& proof verification (>90% coverage); test guide   |
|    0d. | Docker                    | Dockerfile for local Substrate node + co-processor                        |
|      1 | Privacy Pallet            | FRAME pallet: encrypted state, on-chain zkSNARK verification              |
|      2 | PET Co-Processor Module   | SGX enclave: receives ciphertexts, generates proofs, returns results      |
|      3 | ZK Proof Integration      | arkworks-rs circuits for range proofs \& arithmetic on encrypted balances |
|      4 | Client Library            | Rust CLI for DApps to interact with privacy pallet                        |

### Milestone 2 — Cross-Chain Messaging \& SDK (Months 3–4)

- **Duration:** 2 months
- **FTE:** 2.0
- **Costs:** 3,000 USD

| Number | Deliverable               | Specification                                                                   |
| -----: | :------------------------ | :------------------------------------------------------------------------------ |
|    0a. | License                   | Apache 2.0                                                                      |
|    0b. | Documentation             | XCM privacy messaging guide; SDK API reference                                  |
|    0c. | Testing and Testing Guide | End-to-end tests for cross-parachain workflows                                  |
|    0d. | Docker                    | Multi-node Docker-compose for cross-chain testing                               |
|      1 | XCM Privacy Messages      | Define and implement custom XCM v3 message types for encrypted transfers        |
|      2 | SDK                       | TypeScript/JavaScript SDK for parachain \& front-end integration                |
|      3 | Wallet Plugins            | Polkadot.js \& Talisman adapters for ParaVeil transactions                      |
|      4 | Demo DApp                 | Privacy-enabled DEX example demonstrating encrypted swaps across two parachains |

### Milestone 3 — Production Readiness \& Compliance (Months 5–6)

- **Duration:** 2 months
- **FTE:** 2.0
- **Costs:** 3,000 USD

| Number | Deliverable                | Specification                                                |
| -----: | :------------------------- | :----------------------------------------------------------- |
|    0a. | License                    | Apache 2.0                                                   |
|    0b. | Documentation              | Deployment \& compliance manual; selective disclosure guide  |
|    0c. | Testing and Testing Guide  | Security audit prep; stress \& performance testing guide     |
|    0d. | Docker                     | Production-ready containers \& Kubernetes manifests          |
|      1 | Compliance Framework       | Implement selective disclosure protocol for audits           |
|      2 | Security Audit Preparation | Engage auditor; perform vulnerability assessment             |
|      3 | Performance Optimization   | Optimize proof generation \& on-chain verification gas costs |
|      4 | Parachain Integrations     | Live testnet integrations with Acala \& Moonbeam             |
|      5 | Final Documentation        | Complete developer, operator, and compliance guides          |

## Future Plans

- **Maintenance:** Open-source community support, CI pipelines, developer grants
- **Enterprise Add-Ons:** Privacy-preserving analytics \& auditing dashboard
- **Governance:** On-chain upgrade proposals via governance pallet

## Additional Information :

**How did you hear about the Grants Program?** Web3 Foundation website.
**Previous W3F Grants:** N/A.
**Collaborators:** N/A
**References:** arXiv:2307.00521; Phala Network blogs; Encifher docs; Ethereum Research.
