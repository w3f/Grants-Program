# Homebase

- **Team Name:** Homebase by HanPay  
- **Payment Address:** TRC-20 — **TPju5jP9TVoxfkfNnzhR2QZ6UFdmqLqNTH** (USDT)  
- **Level:** 3  

---

## Overview

### Introduction

Real estate tokenization is one of the most promising use-cases for Real-World Assets (RWA) in Web3, enabling fractional ownership, liquidity, and programmable governance over physical assets. Yet, the space faces critical challenges:

1. **Trustless Infrastructure** – ensuring transparent, censorship-resistant settlement.
2. **Cross-Chain Liquidity** – connecting real estate assets to DeFi markets.
3. **Compliant Governance** – aligning legal frameworks with on-chain ownership.

**Homebase** delivers a **Polkadot-native RWA protocol** addressing these challenges through a modular architecture combining blockchain, backend services, and live frontend applications.

✅ **Custom Substrate blockchain** already deployed.  
✅ **Node.js / Express backend** connected and live.  
✅ **Frontend dApp live at:**

- User dashboard → [https://homebase-escrow-haven.vercel.app/](https://homebase-escrow-haven.vercel.app/)  
- Landlord login → [https://homebase-escrow-haven.vercel.app/landlord-login](https://homebase-escrow-haven.vercel.app/landlord-login)  
- Seller login → [https://homebase-escrow-haven.vercel.app/seller-login](https://homebase-escrow-haven.vercel.app/seller-login)  
- Admin login → [https://homebase-escrow-haven.vercel.app/admin-login](https://homebase-escrow-haven.vercel.app/admin-login)

---

### Abstract

Homebase bridges physical real estate and DeFi by offering:

- **Tokenization:** Turn real estate into fractional on-chain shares.
- **Trading:** Enable users to buy, sell, and hold fractions.
- **Governance:** Token-weighted voting on property-level decisions.
- **Cross-Chain:** Use XCM to connect with DeFi parachains (e.g., Acala, Moonbeam).

---

## Conceptual Architecture

| Layer            | Component              | Role                                                                                  |
|------------------|------------------------|--------------------------------------------------------------------------------------|
| Core Blockchain  | `pallet_rwa_core`      | Register property metadata, legal documents (stored via IPFS).                       |
| Asset Management | `pallet_rwa_asset`     | Mint fractional tokens (ERC-20-like), enforce cap, track ownership checkpoints.     |
| Marketplace      | `pallet_rwa_marketplace` | Enable secondary trading with on-chain order book, events, and settlement.          |
| Cross-Chain      | `pallet_rwa_xcm`       | Allow token transfers and governance actions across parachains via XCM.             |
| Compliance Layer | *ink!* contracts       | Handle KYC, AML, legal freezes, and regulatory triggers.                            |
| Backend API      | Node.js / Express      | Provide off-chain services (KYC, compliance, notifications) & connect to Substrate. |

---

## Technical Overview

- **Blockchain Layer:** Custom Substrate runtime (Rust), with modular pallets for RWA management, trading, governance, and XCM.
- **Backend Layer:** Node.js / Express server:
  - Connects to deployed Substrate nodes using `@polkadot/api`.
  - Listens to blockchain events via WebSockets.
  - Provides REST & GraphQL APIs for frontend/admin.
  - Handles KYC/AML, user profiles, compliance, third-party integrations.
- **Frontend Layer:** React + TypeScript dApp:
  - Uses Polkadot.js API for wallet interactions.
  - Connects to backend API for off-chain workflows.
  - **Live demos:**
    - User dashboard → [https://homebase-escrow-haven.vercel.app/](https://homebase-escrow-haven.vercel.app/)
    - Landlord login → [https://homebase-escrow-haven.vercel.app/landlord-login](https://homebase-escrow-haven.vercel.app/landlord-login)
    - Seller login → [https://homebase-escrow-haven.vercel.app/seller-login](https://homebase-escrow-haven.vercel.app/seller-login)
    - Admin login → [https://homebase-escrow-haven.vercel.app/admin-login](https://homebase-escrow-haven.vercel.app/admin-login)
- **HanPay Online Wallet:**  
  - Optional payment/settlement portal → [https://hanpay-portal.vercel.app/#hero](https://hanpay-portal.vercel.app/#hero)
  - Enables users to **complete payments, settle bargains, or transfer assets off-chain after negotiating in Homebase**.

- **DevOps & Monitoring:** Docker, GitHub Actions CI/CD, Prometheus, Grafana.

---

### HanPay Wallet Integration

In addition to the main Homebase app, we are developing the **HanPay Online Wallet** as a complementary layer to:

- Provide a **standalone payment portal** for settling transactions negotiated via Homebase.  
- Allow users to **bargain within Homebase** and then **settle via HanPay** if they prefer off-chain or alternative payment flows.
- Enable faster onboarding for landlords, sellers, and users who prefer web-based payment channels.

This strengthens our user ecosystem and broadens the ways users can interact with Homebase assets.

HanPay Online Wallet: [https://hanpay-portal.vercel.app/#hero](https://hanpay-portal.vercel.app/#hero)

---

## Asset Distribution Flow

1️⃣ **Register Property:**  
Owner submits details + legal docs (IPFS) → stored on-chain (`pallet_rwa_core`).

2️⃣ **Mint Fractional Tokens:**  
Fixed-supply tokens minted (`pallet_rwa_asset`) → ERC-20-like fractions.

3️⃣ **Marketplace Trading:**  
Users buy/sell fractions (`pallet_rwa_marketplace`) → events stream to frontend/backend.

4️⃣ **Governance Participation:**  
Fractional owners vote on proposals → backend handles notifications.

5️⃣ **Payment & Settlement:**  
Users **either pay through the Homebase app or settle via HanPay Online Wallet**.

6️⃣ **Cross-Chain Liquidity:**  
XCM enables moving tokens to DeFi parachains.

---

## Ecosystem Fit

Polkadot currently lacks:

- A **dedicated RWA parachain** for real estate.
- A **dual-path settlement system** combining on-chain trades + optional web-based payments.
- **Cross-chain governance tools** to integrate real-world assets with DeFi.

Homebase + HanPay fill these gaps, offering a uniquely flexible and compliant ecosystem.

---

## Team

| Role                | Name               | Notes                                  |
|---------------------|--------------------|----------------------------------------|
| Project Lead        | Emeka Iwuagwu     | 8+ years in web & blockchain engineering |
| Rust/Substrate Devs | 2 FT engineers    | Ex-Parity, Substrate ecosystem experts |
| Node.js Developer   | 1 FT engineer     | Backend API, KYC, compliance, indexing |
| Frontend Developer  | 1 FT engineer     | React, TypeScript, UX/UI, wallet integration |
| Legal Advisor       | 1 PT advisor      | Real estate law, fintech compliance    |

**Contact:** e.iwuagwu@hotmail.com, emeka@hanpay.xyz  
**Legal Entity:** HanPay (Nigeria / Serbia, in formation)

---

## Development Roadmap

### Overview

| Item               | Details             |
|--------------------|---------------------|
| Total Duration     | 3–4 months         |
| FTE               | 3–5 people         |
| Total Funding Request | $150,000 USD    |

---

### 🛠 Milestone 1 – Public Testnet & Marketplace

| #    | Deliverable             | Specification                                                                                                                                                        |
|------|-------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 0a   | License                | Apache-2.0 license in main repo.                                                                                                                                   |
| 0b   | Documentation          | Inline Rust + Node.js docs; README tutorials for node setup, backend API, operator guide.                                                                          |
| 0c   | Testing & QA          | Unit/integration tests for pallets and backend; coverage report; manual QA checklist.                                                                               |
| 0d   | Docker + CI/CD        | Dockerfile, docker-compose; GitHub Actions for CI/CD pipelines.                                                                                                     |
| 1    | Public Testnet        | Launch with faucet, Polkadot.js endpoint, block explorer, telemetry, monitoring (Prometheus, Grafana).                                                              |
| 2    | Marketplace Pallet    | Build `pallet_rwa_marketplace` for listing, buying, selling tokens; integrate events, fees, extrinsics.                                                            |
| 3    | Frontend Integration  | Extend React dApp: live marketplace, wallet tx flow, portfolio dashboard.                                                                                           |
| 4    | Backend KYC/Compliance API | Node.js / Express service connected to chain; manages KYC checks, compliance workflows, off-chain services, GraphQL indexer.                                      |
| 5    | Asset Minting Logic   | Secure mint/distribution flow; cap enforcement, checkpointing, audit trail on-chain.                                                                               |

*Duration:* 1–1.5 months  
*Cost:* $60,000

---

### 🚀 Milestone 2 – Mainnet, XCM & Governance

| #    | Deliverable             | Specification                                                                                                                                                         |
|------|-------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1    | Mainnet Parachain      | Register on Polkadot relay, onboard collators, ensure economic/security guarantees.                                                                                  |
| 2    | XCM Integration       | Build `pallet_rwa_xcm` for cross-chain token transfers, governance calls; test interoperability with Acala, Moonbeam.                                               |
| 3    | Governance Module     | Deploy council, proposal, referendum pallets; enable token-weighted voting; connect backend to governance events.                                                   |
| 4    | Backend Governance Hooks | Extend Node.js API for governance events, admin tools, notification flows.                                                                                          |
| 5    | Frontend Finalization | Production-ready UI/UX; governance dashboards; multi-wallet support (Polkadot.js, Talisman, Subwallet).                                                              |

*Duration:* 1–1.5 months  
*Cost:* $60,000

---

### 🌍 Milestone 3 – Ecosystem Growth & Compliance

| #    | Deliverable             | Specification                                                                                                                                                    |
|------|-------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1    | ink! Contract Modules | KYC, AML, legal freeze contracts; integrate with runtime via precompiles.                                                                                       |
| 2    | Benchmarking + Performance | Substrate benchmarking suite; backend load testing; stress test ≥1,000 tx/s; optimize weights, storage.                                                      |
| 3    | Launch & Community    | Publish launch article, host Twitter Spaces, launch Discord, run ambassador/dev incentive programs.                                                              |
| 4    | Real-World Onboarding | Build partner toolkit: asset issuer guides, legal templates, pilot onboarding with 1–2 real estate companies.                                                   |

*Duration:* 1 month  
*Cost:* $30,000

---

## Future Plans

- Deploy **EVM precompiles** for cross-ecosystem bridging.
- Integrate **oracles** for on-chain valuation and pricing.
- Expand into **commercial real estate, REITs, and developer pools**.
- Launch **developer grants and ambassador programs** to grow network effects.

---

### Funding Summary

| Area                    | Description                                  |
|-------------------------|--------------------------------------------|
| Engineering            | Rust/Substrate, Node.js, React, XCM, ink! |
| Compliance & Legal     | Real estate law, KYC, AML integration      |
| Infrastructure         | Testnet, mainnet, monitoring, collators    |
| Community Development  | Launch events, documentation, partnerships|

**Total Funding Request:** $150,000 USD over ~4 months.

---

**Homebase + HanPay will unlock the global real estate market on Polkadot — making property as liquid, transparent, and programmable as native crypto assets.**
