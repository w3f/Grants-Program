# 📝 Walf Dot Fund

## 🌟 Project Overview

**Tagline:**  
Crowdfunding made Web3-native, transparent, and trustless using NFTs and escrow logic on Polkadot.

**Description:**  
Walf Dot Fund is a Web3-native crowdfunding platform where creators raise funds by minting a product showcase (image/video) as an open edition NFT. Backers pledge $1 USDC or more by minting the NFT. If the campaign reaches its goal, funds are released from the escrow wallet to the campaign launchers (company). Tiered reward NFTs are airdropped to the backers, allowing them to claim the actual product once production is completed and ready to ship. However, if the goal is not met, all funds are refunded via on-chain escrow—ensuring backers get their money back promptly.

**Polkadot Integration:**  
Walf Dot Fund uses Polkadot Asset Hub to mint ERC-1155 NFTs and implement escrow logic with ink! smart contracts. The system benefits from low fees, security, and composability across the Polkadot ecosystem.

**Why We're Building This:**  
For entrepreneurs frustrated with traditional crowdfunding platforms. We want to provide a transparent and simpler alternative.

---

## 🔍 Project Details

**Tech Stack:**  
- ink! smart contracts  
- Polkadot Asset Hub  
- Polkadot.js  
- USDC  
- React frontend  

**Architecture:**  
Mint → Pledge (USDC) → Escrow (Smart contract) → Goal Met?
                         ├── Yes → ✅ Airdrop + Release Funds
                         └── No  → ❌ Refund

**PoC/MVP:**  
Submitted to EasyA Polkadot hackathon  

**UI Mockups:**  
[View mockups](https://dotfund-genesis-hub.lovable.app/)

**Limitations:**  
Initial user acquisition is a challenge. However, Walf has an existing community of over **150,000 followers**, many of whom are entrepreneurs.

---

## 🧍‍♂️ Ecosystem Fit

- **Where It Fits:** Entrepreneur economy, crowdfunding, NFT-based utilities  
- **Target Audience:** Startup companies  
- **Needs Met:** Transparent, verifiable crowdfunding with built-in product rewards and refund safety  
- **Similar Projects:** None that combine ERC-1155 NFTs, escrow, and tiered airdrops on Asset Hub

---

## 👥 Team

**Founder:**  
- Chidi Agwunobi

**Team Code Repo:**  
- [https://github.com/agw21/dotfund-genesis-hub](https://github.com/agw21/dotfund-genesis-hub)

**Team Experience:**  
Chidi: Founded a fashion and accessories brand in 2012 while in university—worn by celebrities like Rihanna, J Balvin, Rita Ora, and top influencers. In 2014, founded Walf and grew a community of **150,000+**, including athletes and public figures.  
Expertise in 2D/3D design, coding, photography, videography, and UX/UI. Self-taught and hands-on.  
More details: [Walf Media Kit](https://walf.co/wp-content/uploads/2024/11/WALF-2024-media-kit.pdf)

---

## 📊 Development Status

- **Repo:** [https://github.com/agw21/dotfund-genesis-hub](https://github.com/agw21/dotfund-genesis-hub)  
- **Status:** Smart contracts deployed to Polkadot Asset Hub Testnet. Demo video complete. UI under development.

---

## 🗓️ Development Roadmap

**Estimated Duration:** 3 months  
**FTE:** 1.0  
**Total Costs:** $10,000

| Number | Deliverable           | Specification |
|--------|------------------------|---------------|
| 0a     | License                | MIT           |
| 0b     | Documentation          | Inline + tutorial showing product launch and backer mint process |
| 0c     | Testing                | Unit tests for minting, escrow, refund, and tier logic |
| 1      | NFT Minting System     | Open edition ERC-1155 NFTs with pledge logic and metadata |
| 2      | Escrow Contract        | Smart contract holding USDC, releasing or refunding based on campaign success |
| 3      | Reward Airdrop System  | Airdrop logic and UI for tier-based reward distribution |

---

## 💰 Budget Breakdown

| Milestone | Deliverables | KPIs | Est. Time | Cost (USD) |
|----------|--------------|------|-----------|------------|
| 1. Core Smart Contract Logic | ERC-1155 minting contract, escrow wallet, refund + goal logic, tier structure | All logic tested locally | days 0 - 18 | $4,000 |
| 2. Frontend + Contract Integration | React UI connected via Polkadot.js, tier display, backer UX | Demo app live with wallet connection | days 19 - 36 | $3,000 |
| 3. Airdrop Engine + Campaign Admin UI | Reward NFT logic, airdrop trigger, admin dashboard | 5 simulated airdrop flows | 30 hrs × $50/hr | days 36 - 54 |
| 4. Initial Creator Onboarding + Test Campaigns | Setup for first 10 campaigns, tutorial/demo video, docs | ≥10 creators onboarded, ≥500 mints, ≥200 unique backers | days 54 - 72 | $750 |
| 5. Marketing & Growth Ops | Email funnel, content, teaser videos, social rollout | 1,000 landing page visits, ≥100 sign-ups | days 72 - 91 | $750 |

## 🧾 Budget Clarity

| Milestone                            | Task Description                                      | Est. Hours | Rate (USD/hr) | Subtotal (USD) |
|-------------------------------------|-------------------------------------------------------|------------|----------------|----------------|
| 1. Core Smart Contract Logic        | ERC-1155 minting, escrow, refund logic, tiers         | 18 hrs     | $50            | $4,000         |
| 2. Frontend + Contract Integration  | React frontend, Polkadot.js wallet connect, UX        | 18 hrs     | $50            | $3,000         |
| 3. Airdrop Engine + Admin UI        | Reward logic, admin UI, simulate 5 flows              | 18 hrs     | $50            | $1,500         |
| 4. Creator Onboarding + Test Campaigns | Demo, docs, tutorials, creator support             | 18 hrs     | $50            | $750           |
| 5. Marketing & Growth Ops           | Email funnel, social media, landing page setup        | 18 hrs     | $50            | $750           |
| **Total**                           | —                                                     | **90 hrs**| —              | **$10,000**    |

---
## 🔗 Expected Polkadot Impact

- Estimated 750–1,500 on-chain transactions (NFT mints, pledges, refunds, airdrops) during initial rollout  
- Brings real creator economy use case to Asset Hub  
---

## 🔮 Future Plans

- Launch on Polkadot mainnet with full UI  
- Onboard creators via strategic campaigns  
- Add DAO governance & community funding vault  
- Seek follow-up grants and raise pre-seed funding  

