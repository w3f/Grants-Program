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

✅ Custom Substrate blockchain already deployed.  
✅ Node.js / Express backend connected and live.  
✅ Frontend dApp live at:

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

| Layer             | Component              | Role                                                                                   |
|-------------------|------------------------|---------------------------------------------------------------------------------------|
| Core Blockchain   | `pallet_rwa_core`      | Register property metadata, legal documents (stored via IPFS).                        |
| Asset Management  | `pallet_rwa_asset`     | Mint fractional tokens, enforce supply cap, track ownership checkpoints.             |
| Marketplace       | `pallet_rwa_marketplace` | Enable secondary trading with on-chain order book, events, and settlement.           |
| Cross-Chain       | `pallet_rwa_xcm`       | Allow token transfers and governance across parachains via XCM.                      |
| Compliance Layer  | *ink!* contracts       | Handle KYC, AML, legal freezes, and regulatory triggers.                             |
| Backend API       | Node.js / Express      | Provide off-chain services (KYC, compliance, notifications), connect to Substrate.   |

---

## Technical Overview

- **Blockchain:** Substrate runtime, Rust pallets.  
- **Backend:** Node.js / Express:
  - Connects to Substrate via `@polkadot/api`.  
  - Listens to events, exposes REST + GraphQL APIs.  
  - Manages KYC/AML, admin dashboards, partner onboarding.  
- **Frontend:** React + TypeScript dApp:
  - Polkadot.js API integration, wallet connections, user dashboards.
- **HanPay Online Wallet:**  
  [https://hanpay-portal.vercel.app/#hero](https://hanpay-portal.vercel.app/#hero)  
  Optional standalone payment portal to settle bargains or off-chain transfers.
- **DevOps:** Docker, GitHub Actions, Prometheus, Grafana.

---

## Market Validation

- Global real estate tokenization market projected >$16 trillion by 2030.  
- Initial interest from landlords, sellers, and investors in Nigeria, Serbia, EU.  
- Early pilot discussions with property managers and legal custodians.  
- Positive organic feedback from live app demos and community.

---

## Legal & Operational Flow

We recognize that technical integration is only one side of bringing RWAs on-chain.

- **Asset Custody:**  
  Real-world property onboarding will be done through partnerships with legal custodians and notaries, who will verify ownership, legal status, and ensure asset-backing.

- **Legal Agreements:**  
  Every tokenized property will be backed by a legal contract defining rights, revenue sharing, and governance, ensuring fractional token holders are protected.

- **Operational Partners:**  
  We are in early discussions with real estate providers and legal advisors to pilot 1–2 properties, allowing us to validate the legal-to-on-chain bridge.

This approach ensures Homebase controls distribution with both technical and legal safeguards.

---

## Asset Distribution Flow

1️⃣ Register property → Verified with legal docs, IPFS hash on-chain.  
2️⃣ Mint fractional tokens → Capped supply tied to legal asset.  
3️⃣ Enable marketplace trading → On-chain, with backend KYC/compliance.  
4️⃣ Allow governance participation → Token-holder votes.  
5️⃣ Settle via Homebase or HanPay Wallet → User flexibility.  
6️⃣ Unlock cross-chain liquidity → XCM connections to DeFi.

---

## Ecosystem Fit

Homebase fills major gaps in Polkadot’s ecosystem:

- A real estate-specific RWA parachain.  
- A dual on-chain/off-chain payment flow.  
- A governance + compliance bridge between real-world and DeFi.

---

## Team

| Role                | Name               | Notes                                     |
|---------------------|--------------------|------------------------------------------|
| Project Lead        | Emeka Iwuagwu     | 8+ years web/blockchain engineering      |
| Rust Devs          | 2 FT engineers    | Ex-Parity, Substrate experience         |
| Node.js Dev        | 1 FT engineer     | Backend API, KYC, compliance             |
| Frontend Dev       | 1 FT engineer     | React, TypeScript, UX/UI                 |
| Legal Advisor      | 1 PT advisor      | Real estate law, fintech compliance      |

**Contact:** e.iwuagwu@hotmail.com, emeka@hanpay.xyz  
**Legal Entity:** HanPay (Nigeria / Serbia, in formation)

---

## Development Roadmap

### Milestone 1 – Public Testnet & Marketplace

| #  | Deliverable            | Specification                                                                                                                                         |
|-----|------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------|
| 0a | Documentation          | Inline Rust + Node.js docs, operator + dev tutorials.                                                                                                |
| 0b | Testing + QA          | Unit + integration tests, backend API tests, manual QA plan.                                                                                          |
| 0c | Docker + CI/CD        | Docker setup, GitHub Actions CI pipeline.                                                                                                            |
| 1  | Testnet Deployment    | Faucet, block explorer, telemetry, testnet node with full marketplace and KYC backend.                                                                |
| 2  | Marketplace Features  | List/create properties, mint tokens, list on DEX, match orders, view events.                                                                         |
| 3  | Backend Features      | KYC verification endpoint, compliance checks, admin dashboard, off-chain storage.                                                                    |
| 4  | Frontend Features     | Wallet connection, display properties, buy/sell tokens, user dashboard, notifications.                                                               |

*Duration:* 1–1.5 months, *Cost:* $60,000

---

### Milestone 2 – Mainnet Readiness & XCM Integration

| #  | Deliverable            | Specification                                                                                                                                         |
|-----|------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------|
| 0a | Documentation          | Final user + dev docs, governance guides.                                                                                                           |
| 0b | Testing + QA          | Governance + XCM module tests, backend integration tests.                                                                                            |
| 0c | Docker + CI/CD        | Final release CI, automated deployment scripts.                                                                                                     |
| 1  | Governance Features   | Council creation, proposal + referendum pallets, token-weighted voting, backend hooks.                                                              |
| 2  | XCM Integration       | Cross-chain transfer support, governance routing, Acala/Moonbeam test integrations.                                                                |
| 3  | Backend Updates       | Governance event streaming, admin tools for proposals, notification system.                                                                         |
| 4  | Frontend Updates      | Governance dashboard, cross-chain activity view, multi-wallet support.                                                                              |

*Duration:* 1–1.5 months, *Cost:* $60,000

---

### Milestone 3 – Ecosystem Growth & Compliance

| #  | Deliverable            | Specification                                                                                                                                         |
|-----|------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------|
| 0a | Documentation          | Legal compliance docs, onboarding kits for partners.                                                                                                |
| 0b | Testing + QA          | Benchmarking, stress tests (≥1,000 tx/s), backend load testing.                                                                                      |
| 1  | ink! Contracts        | KYC, AML, asset-freeze contracts, runtime hooks.                                                                                                     |
| 2  | Community Launch      | Launch article, Twitter Spaces, Discord, ambassador + dev programs.                                                                                  |
| 3  | Partner Onboarding    | Real estate toolkit, pilot with 1–2 property managers, integrate with HanPay Wallet.                                                                 |

*Duration:* 1 month, *Cost:* $30,000

---

## Future Plans

- Deploy EVM precompiles for cross-ecosystem bridging.  
- Integrate oracles for asset valuation + pricing.  
- Expand into commercial real estate, REITs.  
- Launch developer + ambassador incentive programs.

---

### Funding Summary

| Area                 | Description                            |
|----------------------|--------------------------------------|
| Engineering         | Rust/Substrate, Node.js, React, ink! |
| Compliance & Legal | Real estate law, KYC, AML integration |
| Infrastructure      | Testnet, monitoring, tooling         |
| Community           | Launch events, documentation         |

**Total Requested:** $150,000 over ~4 months

---

**Homebase + HanPay will unlock the global real estate market on Polkadot — making property as liquid, transparent, and programmable as native crypto assets.**
