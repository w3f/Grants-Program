# ChainVista

- **Team Name:** ChainVista's team
- **Payment Details:**
  - **DOT**: N/A
  - **Payment**: USDC payment address will be provided privately upon request.
- **[Level](https://grants.web3.foundation/docs/Introduction/levels):** Level 2

> [!IMPORTANT]
> The combination of your GitHub account submitting the application and the payment address above will be your unique identifier during the program. Please keep them safe.

## Project Overview :page_facing_up:

### Overview

ChainVista is an all-in-one Web3 security and discovery platform unifying contract scanning, presale scoring, whale analytics, and airdrop discovery into a single interface. It will integrate with Substrate/Polkadot parachains by adding contract scanners and wallet intelligence tools that work on Substrate-based tokens and presales. Our motivation is to build trust and transparency for Web3 investors, reduce scams, and drive safe presale participation.

---

## Project Details

- **Mockups/Designs:** Prepared wireframes showing the dashboard, scanner, whale tracking, and admin panels (available upon request).
- **Data Models / API Specs:** JSON schema for token risk scoring, PostgreSQL tables for wallet + airdrop eligibility, and API endpoints for scanner + whale tracker.
- **Technology Stack:**
  - **Frontend:** Next.js, React, TailwindCSS
  - **Backend:** Node.js + Express, PostgreSQL, Redis
  - **Wallet Integration:** WalletConnect v2, RainbowKit
  - **External APIs:** GoPlusLabs, RugDoc, The Graph, Moralis, Alchemy
- **Documentation:** Full inline documentation + user tutorials will be delivered with each milestone.
- **PoC/MVP:** Early MVP architecture complete; backend in progress; frontend wireframes finalized.
- **Scope Exclusions:** No tokenomics, staking rewards, or DAO governance in this grant phase. Excludes legal certifications and paid audits.

---

## Ecosystem Fit

- **Where and How:** By adding Substrate-based token scanning, airdrop eligibility, and whale insights, ChainVista directly increases transparency for Polkadot and parachain communities.
- **Target Audience:** Retail crypto investors, launchpads, dApp developers, DeFi protocols, wallets, DAO treasuries.
- **Needs Solved:** Contract safety, presale risk scoring, whale tracking, and airdrop eligibility verification.
- **How Needs Identified:** User surveys, research on billions lost to rugpulls (e.g., Chainalysis reports), discussions on Polkadot forums highlighting lack of safety tools.
- **Similar Projects:** TokenSniffer, GoPlus, but none unify scanning, presales, whales, and airdrops under one dashboard; existing tools don’t support Substrate.
- **Why Ours is Different:** Combines multiple functionalities with Substrate support + affiliate-based presale aggregator.

---

## Team :busts_in_silhouette:

- **Team members:** M. Talish (Founder & Product Lead)
- **Contact Name:** M. Talish
- **Contact Email:** talishmts@gmail.com
- **Website:** [chainvista.xyz](https://chainvista.xyz)
- **Registered Address & Entity:** Sole founder, legal entity formation planned post-funding.
- **Experience:** Deep DeFi security knowledge, presale evaluation, affiliate monetization, smart contract risk modeling.
- **Team Code Repos:**
  - https://github.com/chainvista
- **LinkedIn:**
  - Not yet available

---

## Development Status :open_book:

- Frontend architecture completed.
- Backend API partial implementation started.
- Early test queries for whale tracking built on The Graph.
- Wireframes for all modules designed.
- Research compiled on scam detection heuristics for smart contracts.

---

## Development Roadmap :nut_and_bolt:

- **Total Estimated Duration:** 4.5 months
- **Full-Time Equivalent (FTE):** 1.5
- **Total Costs:** $25,000–$45,000 USD
- **DOT %:** 0% (Requesting full payment in USDC)

---

### Milestone 1 — Frontend UI & Routing

- **Estimated Duration:** 1 month
- **FTE:** 1.5
- **Costs:** $5,000–$7,000

| Number | Deliverable        | Specification                                     |
| ------ | ------------------ | ------------------------------------------------- |
| 0a.    | License            | MIT                                               |
| 0b.    | Documentation      | Inline code docs, tutorial for frontend setup.    |
| 0c.    | Testing            | Jest unit tests for React components.             |
| 0d.    | Docker             | Frontend Dockerfile.                              |
| 1.     | UI Components      | Token scanner, presale explorer, whale insights.  |
| 2.     | Wallet Integration | RainbowKit + WalletConnect v2 functional.         |

---

### Milestone 2 — API Integration for Token Scanner

- **Estimated Duration:** 3 weeks
- **FTE:** 1.5
- **Costs:** $4,000–$7,000

| Number | Deliverable | Specification                                            |
| ------ | ----------- | -------------------------------------------------------- |
| 0a-d   | Standard deliverables as above |                                        |
| 1.     | API Proxy   | Secure Node.js Express proxy to GoPlusLabs + RugDoc APIs.|
| 2.     | Risk Algorithm | Custom logic to merge data from both APIs for unified risk scoring. |

---

### Milestone 3 — Whale Analytics & Airdrop Engine

- **Estimated Duration:** 4 weeks
- **FTE:** 1.5
- **Costs:** $5,000–$9,000

| Number | Deliverable      | Specification                                       |
| ------ | ---------------- | --------------------------------------------------- |
| 0a-d   | Standard deliverables as above |                                       |
| 1.     | Whale Tracker    | Real-time dashboard using The Graph + PostgreSQL.   |
| 2.     | Eligibility Checker | Tracks airdrop eligibility across Substrate + EVM chains. |

---

### Milestone 4 — Native Contract Scanner Backend

- **Estimated Duration:** 6 weeks
- **FTE:** 1.5
- **Costs:** $6,000–$11,000

| Number | Deliverable         | Specification                                      |
| ------ | ------------------- | -------------------------------------------------- |
| 0a-d   | Standard deliverables as above |                                        |
| 1.     | Contract Parser     | Custom honeypot, proxy, self-destruct detection.   |
| 2.     | Manual Admin Panel  | React-admin backend for presale approvals, listings, overrides. |

---

### Milestone 5 — MVP Public Launch

- **Estimated Duration:** 3 weeks
- **FTE:** 1.5
- **Costs:** $5,000–$8,000

| Number | Deliverable      | Specification                                       |
| ------ | ---------------- | --------------------------------------------------- |
| 0a-e   | Standard deliverables incl. final article/workshop.                   |
| 1.     | MVP Deployment   | Vercel frontend, Railway backend.                   |
| 2.     | Affiliate Listings | Integrated presale listing system ready for partners. |
