# 📝 Sacred Protocol

## 🌟 Project Overview

We want to enable social tipping for the Polkadot ecosystem on any social media platform. We want to enable audiences and creators within the community to be able to reward, engage and encourage each other in real time using the Polkadot blockchain to empower settlement and security. 

This goal of this proposal is to break ground, into the ecosystem by allowing for native assets to be tippable, while also working with native creators to start rewarding the community and vice versa to help bring new levels of engagement within the Polkadot Ecosystem as a whole.

**a. Project Name:** Sacred Protocol – Polkadot Integration

**b. Tagline:** Unlock borderless tipping for creators through Polkadot-powered micro-transactions

**c. Brief Description:** Sacred Protocol is a decentralized tipping primitive that allows creators to receive support from fans across borders, platforms, and currencies. We aim to break open the creator economy for the 80–90% of audiences currently unable to tip due to geographic, platform, and payment limitations.

**d. Polkadot Integration:** This project introduces Polkadot-native tipping by integrating Polkadot wallets and enabling transactions in DOT on Westend and MainNet. Sacred becomes a live dApp showcasing Polkadot’s potential for social finance and creator engagement. This proposal also includes building a Creator Campaign working with creators to increase engagement and community building within the Polkadot ecosystem.

**e. Motivation:** We believe Polkadot is uniquely suited for global-scale social utility applications. Its multi-chain design and tooling like Polkadot Wallet provide the backbone for scalable, user-friendly micro-transactions.

**f. Video Pitch:** https://shorturl.at/XQQxo

### 🔍 Project Details
## 🛠️ Technology Stack Overview

Our application is built on a modern, full-stack TypeScript architecture optimized for performance, scalability, and multi-blockchain interoperability.

### Frontend

- **Framework**: `React 18` with `Next.js` – Combines client-side interactivity with server-side rendering for optimal performance.
- **Styling**: `Tailwind CSS` – Utility-first CSS framework for responsive, scalable UI development.
- **UI Components**: `Radix UI`, `Lucide Icons` – Accessible, customizable design components.
- **Animations**: `Framer Motion`, `Lottie` – Smooth animations and engaging micro-interactions.
- **Form Handling**: `React Hook Form` + `Zod` – Type-safe, performant form validation and management.
- **Data Management**: `TanStack React Query` – Robust client-side caching and state synchronization.

### Blockchain Integration

- **Polkadot**: `Polkadot API and RPC endpoints`
- Starting with smart contract deployment on Polkadot Westend Test network then launching on Polkadot Kusama network.

### Backend

- **Framework**: `Next.js` API Routes – Server-side logic and API handling.
- **Language**: `TypeScript` – Static type checking for better code reliability.
- **Database**: `Prisma ORM` with `SQL` – Type-safe database access with automated migrations.
- **Authentication**: `Supabase` – Secure auth, real-time database, and scalable backend services.
- **External APIs**: `Twitter API SDK` – Social media integration.


### Limitations & Scope Clarification

To manage expectations and clarify project boundaries:

- **Source Code**: The project will provide the source code for smart contracts and user interface.
- **Open Source Deliverables**: An open source Dapp and smart contracts will be submitted, accompanied by full documentation, a testing suite, and a tutorial for sending and receiving tips on the Polkadot network. Details below.

---

### 🧩 Ecosystem Fit

**a. Fit in Polkadot Ecosystem:**
Sacred brings a high-impact, socially visible use-case to Polkadot: decentralized tipping. It makes Polkadot relatable to everyday fans, creators, and developers. By leveraging Polkadot wallet and native Polkadot token currency, Sacred becomes a showcase for economic coordination on Polkadot.

**b. Target Audience:**

- Content creators on Social Platforms such as Twitter/𝕏
- Crypto-native fans
- Builders of social or consumer-facing dApps on Polkadot

**c. Needs Met:**

- Monetization for under-served audiences (esp. in Africa, Asia, LATAM)
- Wallet-native interactions for microtransactions

**d. Similar Projects:** None currently enable targeted social content tipping on Polkadot. Sacred does not require the tipper to have the recipient's wallet address, only their social media handle.

**e. Differentiation:** Sacred focuses on real-time user-triggered tips across platforms — not content licensing, adtech, or staking. It is modular, non-custodial, and built for composability.

**f. Why No Similar Projects Exist:** Most teams focus on DeFi, infra, or tooling. Social primitives like tipping require UX + market insight + payment abstraction — which Sacred brings.

## 👥 Team

a. **Team Name:** Sacred Protocol

b. **Contact Name:** Edward Buchi (aka *Lisan*)

c. **Contact Email:** [edward@sacredprotocol.com](mailto:edward@sacredprotocol.com)

d. **Website**: [www.sacredprotocol.com](http://www.sacredprotocol.com/) & https://linktr.ee/sacredprotocol

e. **Legal Name:** Baptisia Ventures Inc. (Canadian Federal Corp.)

f. **Team Members:**

Edward Buchi – CEO

Paul - CTO

Travis – Lead Developer

g. **LinkedIn**

Edward Buchi: https://www.linkedin.com/in/edwardbuchi

h. **Team Code Repos:**

Organisation: https://github.com/Sacred-Protocol

Team Member 1: https://github.com/paulsacred

Team Member 2: https://github.com/Worthingtravis

### i. Team's experience

Sacred Protocol is the result of an iterative journey through multiple real-world experiments in Web3 coordination, privacy, and social tooling. The team has worked together across multiple years and product cycles, bringing both technical depth and user-centered design to every stage of development.

- The Sacred team has won prizes at major ETHGlobal hackathons including ETHNew York, HackMoney, and ETHWaterloo 2.
- Sacred Protocol evolved from two years of R&D in Web3 coordination tools, beginning with Sacred Finance — a ZK-integrated mixer protocol enabling privacy-preserving DeFi transactions
- The team also built early experiments in decentralized social tooling, including a prototype Web3 forum system focused on high-trust collaboration.
- These learnings shaped Sacred Protocol’s focus on composable, identity-aware economic primitives like tipping, which now power our live MVP.
- Our core contributors have backgrounds in product design, privacy tooling, and distributed systems engineering — now converging on making peer-to-peer value flow simple and global.

## 📊 Development Status

**a. Work Completed:**

- Sacred tipping app live on Solana Mainnet
    - tokens: SOL, USDC, EURC
    - platforms: Twitter/X, Twitch, Kick, Youtube, Streamlabs, Sacred
- Wallet integrations with Phantom, Solflare Backpack, Glow
- Functional & customizable overlays for Twitch, OBS
    - Integration with Streamlabs’ alert system
- Backend for tipping orchestration complete

**b. Links to Live Apps:**

- https://app.sacredprotocol.com
- https://chromewebstore.google.com/detail/sacred/nmhhcmgieandjhccpjokogfnipabadlp
- https://sacred-protocol.gitbook.io/sacred

## 📅 Development Roadmap

**a. Total Duration:** 2 months

**b. Full-Time Equivalents:** 1.5 FTE

**c. Total Budget:** $10,000 USD

### Deliverable Overview

| **Deliverable #** | **Description** | **Specification** |
|-------------------|-----------------|-------------------|
| 0a | License | MIT |
| 0b | Documentation | We will provide inline documentation in the code and a basic tutorial that explains how a user can send and receive tips on Polkadot. |
| 0c | Testing and Testing Guide | Core functions will be covered by comprehensive unit tests to ensure functionality and robustness. The guide will describe how to run these tests. |
| 0d | Article | We will publish a post with an article explaining what was achieved as part of the grant. |
| 1 | Smart Contracts with Escrow logic to send & claim tips | The smart contracts will be deployed to the Westend Test network. <br><br>Send & Receive tips in native token on Polkadot network, starting with Westend testnet. Support social media platform Twitter/X<br><br>**To verify:**<br>- Using the CLI tool and test functions a user should be able to:<br>&nbsp;&nbsp;- send a tip to a Twitter post or profile via the Polkadot test network<br>&nbsp;&nbsp;- authenticate with Twitter and claim their tip to their wallet on the Polkadot test network |
| 2 | App UI Interface with Polkadot wallet support | A user interface to facilitate sending and claiming tips. This feature will add the ability for users to connect their Polkadot wallet to the App to send & claim/receive their tips in native token.<br><br>**To verify:**<br>- A user should be able to connect their Polkadot wallet to the App, and both send & receive tips to their wallet on the Polkadot test network. |
| 3 | Polkadot-Based Community Campaign | The smart contracts will be deployed to Polkadot Kusama network. <br><br>This deliverable is the campaign itself the details campaign brief that details that include: objectives, how it will be run and a partnership with an influential creator(s) within the Polkadot Community.<br><br>Execute a community campaign to drive Polkadot adoption, including a campaign brief outlining objectives, execution plan, and collaboration with key creators in the Polkadot ecosystem.<br><br>**To verify:**<br>- Campaign materials and plans are co-developed with creators within the ecosystem to grow engagement |

### 💰 Budget Breakdown

| **Milestone** | **Deliverables** | **Cost (USD)** | **Estimated Completion** |
|--------------|------------------|----------------|---------------------------|
| 1 |- Open source smart contracts for escrow logic and handling user flow to send and claim tips in native token on Polkadot Westend test network | $5,000 | 1 month |
| 2 | - Open source UI interface to send and receive tips on Polkadot Westend network with native tokens on Social Platform Twitter/X<br>- Polkadot wallet integrations & support | $3,500 | 0.5 months |
| 3 | - Deploy smart contracts on Polkadot Kusama <br>- Lock in Polkadot Creator Campaign <br>- Formalising a partnership with Polkadot creator to run the creator campaign | $1,500 | 0.5 months |
| **Total** |  | **$10,000** | **2 months** |

### Budget Breakdown by Milestone

**Milestone 1**
- **Employee Cost:** $5,000 (1.5 engineers for 1 month)
- **Infrastructure Cost:** $0 (minimal infra needs, deferred to later stages)
- **Total:** $5,000

**Milestone 2**
- **Employee Cost:** $2,500 (1.5 engineers for 0.5 month)
- **Infrastructure Cost:** $1,000 (API costs, RPC Endpoints, CI/CD & Devops, Node Service Providers, AI Tooling, Smart Contract deployment)
- **Total:** $3,500

**Milestone 3**
- **Employee Cost:** $1,000 (1 engineer, 1 campaign coordinator for 0.5 month)
- **Infrastructure Cost:** $500 (The infrastructure costs allocated to Milestone 3 are partially carried over from Milestone 2, e.g. Monthly service fees)
- **Total:** $1,500

## 🔮 Future Plans & Long Term Value for Polkadot Ecosystem

**Over the next iterations we have in store, Sacred’s north‑star is to make DOT (and parachain‑native USDC) the default “thank‑you” currency of the internet. Every tip will travel via XCM, hopping transparently between the Relay Chain and any integrated parachain, so creators and fans experience a single friction‑free wallet while Polkadot captures the fee flow. Once this internal flywheel is proven, we will layer in bridge adapters (e.g. Snowbridge, Wormhole) that convert ETH, SOL, or other L1 liquidity into DOT before it enters Sacred, importing external value—and new users—into the Polkadot economy while keeping settlement trust‑minimised.**

- Convert core business logic into ink! smart contracts (e.g. escrow/dispute‑resolution modules) to remove all off‑chain trust assumptions.

- Expand support for native tips on additional Polkadot wallets and parachains, ensuring one‑click UX across the ecosystem.

- Launch a Creator Analytics Dashboard so creators can track tipping history, top fans, and cross‑parachain revenue.

- Partner with mainstream content platforms (e.g. Kick, BlueSky) to embed Polkadot‑powered tipping in their creator tooling.

- Pursue additional grants or venture support to scale transaction volume and liquidity incentives.

- Expand integrations with the official [Polkadot App](https://polkadot.subsquare.io/referenda/1573) (referendum 1573) to drive greater on‑chain adoption and visibility.

## ℹ️ Additional Information

Sacred Protocol is not just a proposal — it's a living product already in the hands of communities. We’ve deployed on Solana MainNet and are now actively building toward supporting Polkadot. Our browser extension facilitates real tipping using real crypto, directly to creators, contributors, and communities.

- Our litepaper is available at: https://www.sacredprotocol.com/litepaper

- Our MVP is live on Solana MainNet: https://chromewebstore.google.com/detail/sacred/nmhhcmgieandjhccpjokogfnipabadlp

- The current live version of Sacred is v1.2.5: https://x.com/SacredProtocol/status/1931117203312759061

- We've actively tested and fixed issues, such as account rent exploits: https://x.com/SacredProtocol/status/1932556478810055035

- We successfully ran a meme contest using Sacred: https://x.com/SacredProtocol/status/1918314388450402644

- In collaboration with PizzaDAO (https://x.com/Pizza_DAO), we executed our first global donation drive for Global Pizza Day: https://x.com/SacredProtocol/status/1925019532017422793

We're already supporting real transactions with real value—and with Polkadot’s support, we can extend this momentum into a multichain tipping standard.
