# 📝 Name of your Project

**KeyPass**

---

## 🌟 Project Overview

**Tagline:**  
The wallet-based identity layer for the next billion Web3 learners. 

**Project Description:**  
KeyPass is a self-sovereign login and identity system that replaces “Sign in with Google” using decentralized identifiers (DIDs) and crypto wallets. Users can log into apps using their wallet, own their digital identity, and prove traits like age or student status via zk-proofs—all while maintaining privacy and data control. My mission is to radically simplify Web3 onboarding for learners, DAOs, and educational platforms by making login seamless, sovereign, and secure.

**Polkadot Integration:**  
KeyPass integrates into the Polkadot ecosystem by:
- Issuing and resolving DIDs via Polkadot parachains (e.g., KILT Protocol)
- Minting identity-bound SBTs on Moonbeam or other Substrate-based chains
- Using zk-proofs from Polkadot-compatible frameworks for private credential verification
- Building a reusable login SDK for Polkadot-based dApps and learning platforms

**Why I’m Building It:**  
I believe access to education and digital identity should not be controlled by Big Tech. I’m building KeyPass to empower students globally to own their credentials, login identity, and learning history across platforms—without relying on email, Google, or centralized platforms. Polkadot’s multichain identity infrastructure makes it the ideal home for a composable login and credential system like KeyPass.

---

## 🔍 Project Details

### Tech Stack
- **Wallet auth:** EIP-4361 (Sign-In with Ethereum), WalletConnect
- **DID/Identity:** Ceramic or KILT Protocol, Soulbound Tokens (ERC-721 non-transferable)
- **zkProofs:** zkLogin, Semaphore
- **Backend:** Node.js + Express
- **Frontend:** Next.js + Tailwind
- **Contracts:** Solidity (Moonbeam), potential expansion to Ink! for Substrate

### Core Architecture
- Wallet signature-based login
- DID issuance linked to wallet
- Optional zkProofs for private verifications
- Badge/SBT explorer dashboard
- Dev SDK for easy integration with other apps

### Base Work
- SIWE login prototype with local DID mapping
- SBT minting demo (ERC-721, non-transferable)
- DID resolver integration WIP
- Figma UI mockups for login + badge display

### Limitations
- I will not offer email/password login
- I will not host user data off-chain
- I will not provide a full social layer or general-purpose credential network

---

## 🧩 Ecosystem Fit

- **Where it fits:** As a Polkadot-native identity solution, KeyPass supports dApps, DAOs, and educational platforms with plug-and-play login, DID resolution, and credential verification.
- **Audience:** Students, Web3 learners, DAO communities, hackathon platforms, educational platforms
- **Needs met:** Simple, sovereign login; private credential verification; identity-bound badge system
- **Existing projects:** KILT, Dock (focus on credentials); KeyPass differs by focusing on login-first experience and learner onboarding
- **Why now:** Web3 still relies heavily on Web2 login flows—KeyPass removes that bottleneck and replaces it with a scalable, interoperable solution for onboarding users to the Polkadot ecosystem

---

## 👥 Team

- **Team Name:** KeyPass Labs  
- **Contact Name:** Uliana Zavalova
- **Email:** zawulyana@gmail.com  
- **LinkedIn:** https://www.linkedin.com/in/uliana-zavalova-375448274/
- **GitHub (personal):** https://github.com/uliana1one

**Experience:**  
I’m Uliana, a 3rd-year student at Minerva University, co-founder of **InstantApply** (currently in stealth mode), and a researcher at the **Harvard Laboratory for Computational Cognitive Development**. I won a prize at the **NearAI Useful Agents Hackathon** and have previously worked on identity systems, agent tooling, and Web3 onboarding flows. My focus is building user-owned infrastructure that makes the next phase of the internet accessible, simple, and ethical — starting with how we log in.

---

## 📊 Development Status

While implementation is just beginning, I’ve completed extensive architectural planning, UI mockups, and technical scoping for the KeyPass system. I have defined the wallet-based login flow, DID resolution process, zkProof credential architecture, and SBT logic, with all components broken down into executable milestones. Development will begin immediately upon grant approval, with rapid prototyping prioritized to deliver a working login flow within the first two weeks.
---

## 📅 Development Roadmap

**Estimated Duration:** 7 weeks  
**FTE:** 1.5  
**Total Cost:** $10,000 USD

| Number | Deliverable | Description |
|--------|-------------|-------------|
| 0a | License | MIT |
| 0b | Documentation | Inline code docs + tutorial for integrating KeyPass into a Polkadot app |
| 0c | Testing Guide | Unit + integration tests with guide for validating login/DID resolution |
| 0d | Article | Medium post on login, identity, and building on Polkadot with KeyPass |
| 1 | Polkadot Wallet Login SDK | Library for wallet signature login + DID mapping for Talisman & Polkadot.js |
| 2 | DID Dashboard + Explorer | Frontend to view DID + SBTs tied to wallet; support DID creation and display |
| 3 | zkProof Credential Demo | Private trait proof (e.g., student status) + SBT minting on Moonbeam |
| 4 | Dev Portal + Demo Site | Live hosted site with login, DID display, and integration docs |
| 5 | Partner Onboarding | Integrate with 1–2 student or learning platforms to begin real user testing |

---

## 🔗 Timeline

| Milestone | Deliverables | Cost (USD) | ETA |
|-----------|--------------|------------|-----|
| 1 | Login SDK + DID creation | $3,000 | Day 14 |
| 2 | DID Explorer + zkProof demo | $4,000 | Day 28 |
| 3 | Dev portal, SBTs, partner test | $3,000 | Day 49 |
| **Total** | 5 Deliverables | **$10,000** | **7 weeks** |

---

## 🔮 Future Plans

- Launch on Polkadot parachains with real-world usage in university DAOs and hackathon platforms
- Develop partnerships with EasyA, Encode Club, and learning ecosystems
- Expand SDK and SBT marketplace tools
- Apply for follow-on ecosystem funding from KILT, Moonbeam, or Web3 Foundation
- Eventually open governance via a KeyPass DAO

---

## ℹ️ Additional Information

- I’m currently finalizing a second technical contributor for smart contract and integration work
- This project began as a way to solve the login bottleneck in Web3 education, based on direct experience building in hackathons and running onboarding flows for Web3 learners