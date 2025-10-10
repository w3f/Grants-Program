# Humanized AI Platform for Decentralized Content Creation

## Project Details
- **Title**: Humanized AI Platform: Decentralized Content Creation on Substrate  
- **One-liner**: A decentralized AI assistant built on Substrate for human-like content creation with on-chain ownership and provenance.  
- **Category**: Tooling & Infrastructure  
- **Date**: 2025-10-10  
- **Main contact**: Diogo (diogo-w3f)  
- **Team background**: Solo founder with 5+ years in content creation and Web3 integration. Currently developing the Substrate module using the node-template and Polkadot-JS API and learning ink! smart contract patterns from Parity docs.  
- **Project website / repo**: https://github.com/breckinzephan-dot/humanized-ai-platform (PR: w3f/Grants-Program#267)  
- **Related applications**: None (first-time applicant).

---

## Project Description
- **Problem**  
  Centralized platforms often flag or penalize AI-generated content, which reduces creator reach and trust. This discourages creators from adopting decentralized workflows and harms content-driven Web3 use cases.

- **Solution**  
  Humanized AI provides a customizable assistant that produces human-like content while anchoring authorship and provenance on-chain. The system combines a frontend UI, a backend "humanization" engine, and a Substrate pallet that records ownership hashes and metadata.

- **Ecosystem fit**  
  The project demonstrates a practical Substrate use-case (content provenance and decentralized tooling) and helps bridge Web2 UX into Polkadot’s Web3 stack—encouraging creator-focused adoption.

- **Target users**  
  Freelance writers, independent creators, content teams, and Web3-native publishing platforms.

- **Current status**  
  Early development: repository scaffolded, Substrate node-template customized for a content pallet, and frontend prototype skeleton created. Milestone 1 will produce a working prototype.

- **Maintenance & support**  
  Open-source (Apache 2.0). Planned community-driven contributions, documentation, and periodic security audits after major milestones.

---

## Technical Details

### High-level architecture
[React UI] --> [Node.js Backend (humanization engine)] --> [Polkadot-JS API] --> [Substrate Pallet]

UI: text input, preview, wallet connect

Backend: request normalization, model orchestration, content hash generation

Pallet: store content hash, owner AccountId, timestamp, and optional metadata


### Stack & tools
- Frontend: React / Next.js, TypeScript, Polkadot-JS extension integration  
- Backend: Node.js (TypeScript), Express or Fastify, REST/JSON API  
- Blockchain: Substrate Node Template, custom pallet in Rust, ink! (where applicable)  
- Integration: @polkadot/api (Polkadot-JS API)  
- Testing: Jest (frontend), cargo test (pallet), integration tests via local testnet  
- CI/CD: GitHub Actions (lint, tests, build artifacts)  
- Storage model: On-chain anchoring (store content hash + metadata). Raw content not stored on-chain; optionally use IPFS for larger artifacts (content hash on-chain).  
- Security: Content hashed + optional symmetric encryption for metadata; plan community audit after M1.

### Current progress (signals of work done)
- Repository scaffolded with `frontend/` and `pallet/` directories.  
- Substrate node-template forked and initial pallet scaffold created.  
- Basic React app bootstrapped with wallet connect placeholder.  
- CI pipeline skeleton added (lint + basic tests).

---

## Milestones & Deliverables

| # | Title | Deliverables | Timeline | Budget (USD) |
|---|-------|--------------|----------|--------------|
| 1 | Prototype Development | - React UI minimal app (text input, submit, preview).<br>- Substrate pallet `storeContent(content_hash: [u8;32], owner: AccountId, metadata: Vec<u8>)` with basic storage & event emission.<br>- Backend Node.js bridge that computes content hash and submits extrinsics via Polkadot-JS API.<br>- Unit tests: `cargo test` for pallet, Jest for frontend.<br>- Repo README, demo script, and short demo video (2-3 mins). | 5 weeks | $15,000 |
| 2 | AI Integration & Verification | - Integrate humanization layer (model orchestration) behind backend API (adapter for hosted LLM or open models).<br>- Develop automated detection-evasion testbench and benchmark (report target: ≥80% human-likeness measurement using agreed metrics).<br>- Update pallet to include verification/anchor API and off-chain worker pattern if needed.<br>- Security review and documentation update. | 6 weeks (post-M1) | $20,000 |

**Total requested:** $35,000

**Payment & delivery:** Milestone-based. Funds disbursed after review & acceptance of milestone deliverables. DOT vesting arrangements (if applied) will follow grant agreement terms.

---

## Acceptance criteria (per milestone)

**M1 Acceptance**
- Frontend demo deployed locally and accessible with README steps.  
- Pallet compiled and tested (`cargo test`) with `storeContent` extrinsic and emitted events captured in Polkadot-JS Apps.  
- Backend bridge successfully submits a `storeContent` extrinsic using a local node.  
- Repo includes instructions to reproduce demo and unit/integration tests.

**M2 Acceptance**
- Backend integrates a humanization model producing demonstrably human-like outputs on benchmark dataset.  
- Automated tests showing detection-evasion target met (documented methodology + results).  
- Pallet upgraded if required and documentation for integration published.

---

## Security & privacy
- Raw content is never stored on-chain; only hashes and minimal metadata to prove provenance.  
- Optionally support IPFS for content storage with on-chain anchor.  
- Post-M1 community audit planned; security contact added to repo.

---

## Licensing & openness
- License: Apache 2.0.  
- All core components will be open-source; SDKs and documentation published in the repo.

---

## Additional notes & next steps
- Quick tasks to complete pre-M1 submission: finalize pallet scaffold, complete frontend wallet-connect flow, and capture a 2–3 minute demo walkthrough.  
- Recommended dev resources: Substrate Node Template tutorials, Polkadot-JS integration guides, ink! examples.  
- CLA: ensure you sign the Contributor License Agreement in the PR thread if requested by the bot.

---

## Contact
- **Owner / Lead:** Owoyemi Ademola (breckinzephan-dot)  
- **Email:** breckinzephan@gmail.com  
- **Repo / PR:** https://github.com/breckinzephan-dot/Grants-Program (applications/humanized-ai-platform.md) — PR: w3f/Grants-Program#267



### High-level architecture
