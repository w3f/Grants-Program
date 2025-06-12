# 📝 Sacred Protocol

## 🌟 Project Overview

We want to enable social tipping for the Polkadot ecosystem on any social media platform. We want to enable audiences and creators within the community to be able to reward, engage and encourage each other in real time using the Polkadot blockchain to empower settlement and security. 

This goal of this proposal is to break ground, into the ecosystem by allowing for native assets to be tippable, while also working with native creators to start rewarding the community and vice versa to help bring new levels of engagement within the Polkadot Ecosystem as a whole.

**a. Project Name:** Sacred Protocol – Polkadot Integration

**b. Tagline:** Unlock borderless tipping for creators through Polkadot-powered micro-transactions

**c. Brief Description:** Sacred Protocol is a decentralized tipping primitive that allows creators to receive support from fans across borders, platforms, and currencies. We aim to break open the creator economy for the 80–90% of audiences currently unable to tip due to geographic, platform, and payment limitations.

**d. Polkadot Integration:** This project introduces Polkadot-native tipping by integrating Talisman/SubWallet and enabling transactions in DOT and USDC on Westend and MainNet. Sacred becomes a live dApp showcasing Polkadot’s potential for social finance and creator engagement. This proposal also includes building a Creator Campaign working with creators to increase engagement and community building within the Polkadot ecosystem.

**e. Motivation:** We believe Polkadot is uniquely suited for global-scale social utility applications. Its multi-chain design and tooling like Talisman/Subwallet Wallet provide the backbone for scalable, user-friendly micro-transactions.

**f.Video Pitch:** https://shorturl.at/XQQxo

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
- **Browser Integration**: Chrome Extension APIs – For enhanced in-browser functionality.

### Blockchain Integration

- **Solana**: `Web3.js`, `@solana/spl-token`
- **Polkadot**: `Polkadot API`

### Backend

- **Framework**: `Next.js` API Routes – Server-side logic and API handling.
- **Language**: `TypeScript` – Static type checking for better code reliability.
- **Database**: `Prisma ORM` with `SQL` – Type-safe database access with automated migrations.
- **Authentication**: `Supabase` – Secure auth, real-time database, and scalable backend services.
- **External APIs**:
  - `Twitter API SDK` – Social media integration.
  - `Kick API SDK` - Social media integration.
  - `Youtube v3 API` - Social media integration.
  - `Twitch API SDK` - Social media integration.
  - `Google Generative AI` – AI-powered features and content generation.

### Limitations & Scope Clarification

To manage expectations and clarify project boundaries:

- **Source Code**: The project will **not** provide the source code for the Sacred API backend and the Chrome Extension client.
- **Polkadot Integration**: Polkadot network features will be accessible through our public extension and web app.
- **Open Source Deliverables**: An open source CLI tool will be submitted, accompanied by full documentation, a testing suite, and a tutorial for sending and receiving tips on the Polkadot network. Details below.

---

### 🧩 Ecosystem Fit

**a. Fit in Polkadot Ecosystem:**
Sacred brings a high-impact, socially visible use-case to Polkadot: decentralized tipping. It makes Polkadot relatable to everyday fans, creators, and developers. By leveraging Talisman/SubWallet and DOT/USDC, Sacred becomes a showcase for economic coordination on Polkadot.

**b. Target Audience:**

- Content creators on 𝕏, Twitch, Kick, YouTube
- Crypto-native fans
- Builders of social or consumer-facing dApps on Polkadot

**c. Needs Met:**

- Monetization for under-served audiences (esp. in Africa, Asia, LATAM)
- Wallet-native interactions for microtransactions

**d. Similar Projects:** None currently enable targeted social content tipping on Polkadot with Nova Talisman or SubWallet Wallet.

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
    - platforms: Twitter/X, Twitch
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

**c. Total Budget:** $15,000 USD

### Deliverable Overview

| **Deliverable #** | **Description** | **Specification** |
|-------------------|-----------------|-------------------|
| 0a | License | Apache 2.0 / GPLv3 / MIT / Unlicense |
| 0b | Documentation | We will provide inline documentation in the code and a basic tutorial that explains how a user can send and receive tips on Polkadot. |
| 0c | Testing and Testing Guide | Core functions will be covered by comprehensive unit tests to ensure functionality and robustness. The guide will describe how to run these tests. |
| 0d | Article | We will publish an article explaining what was achieved as part of the grant. |
| 1 | Send & Receive Tips on Polkadot | Send and receive tips on the Polkadot network, starting with testnet (Westend), then moving to Kusama and Polkadot mainnet. Supported platforms: Twitter/X initially, expanding to Twitch and Kick. Supported tokens: start with DOT, expand to USDC.<br>**To verify:**<br>- Using the CLI tool, a user should be able to:<br>&nbsp;&nbsp;- Send a tip to a Twitter user on Polkadot<br>&nbsp;&nbsp;- Authenticate with Twitter and claim their tip on Polkadot |
| 2 | Integrate Polkadot Wallets (SubWallet and/or Talisman) in Sacred App | Enable users to connect their Polkadot wallet to the Sacred App to send and receive tips.<br>**To verify:**<br>- A user can connect their Polkadot wallet to the Sacred App<br>- A user can send and receive tips on the Polkadot network via the app |
| 3 | Polkadot-Based Community Campaign | Execute a community campaign to drive Polkadot adoption, including a campaign brief outlining objectives, execution plan, and collaboration with key creators in the Polkadot ecosystem.<br>**To verify:**<br>- Campaign materials and plans are co-developed with creators within the ecosystem to grow engagement |

### 💰 Budget Breakdown

| **Milestone** | **Deliverables** | **Cost (USD)** | **Estimated Completion** |
|--------------|------------------|----------------|---------------------------|
| 1 | - Open source CLI tool to interact with Sacred API for sending & receiving tips on Polkadot Westend with native DOT tokens on Twitter/X | $5,000 | 1 month |
| 2 | - Deploy on Polkadot Kusama<br>- Integrate Polkadot wallet integrations (SubWallet or Talisman) for claiming tips on Sacred App<br>- Support for: stablecoin on Polkadot (USDC), other platforms (Twitch, Kick, YouTube)<br>- Updated open source CLI tool | $5,000 | 0.5 months |
| 3 | - Deploy on Polkadot Mainnet<br>- Integrate Polkadot wallet integrations (SubWallet or Talisman) for sending tips on Sacred App<br>- Complete CLI tool with comprehensive unit tests & documentation<br>- Lock in Polkadot Creator Campaign<br>- Formalize a partnership with a Polkadot creator to run the campaign | $5,000 | 0.5 months |
| **Total** |  | **$15,000** | **2 months** |


## 🔮 Future Plans

- Convert core business logic into Smart Contracts (ie. Escrow Mechanisms)
- Expand support for native tips on other Polkadot wallets and parachains
- Launch Creator Analytics Dashboard for tipping history and top fans
- Partner with content platforms (eg. Kick, BlueSky)
- Pursue additional grants or venture support to scale tipping volume
- Expand Integrations with [Polkadot App](https://polkadot.subsquare.io/referenda/1573) for more user adoption

## ℹ️ Additional Information

Here you can add any additional information that you think is relevant to this application, such as:

- Work you have already done
- If there are any other teams who have already contributed to the project
- Other funding you may have applied for

Remember that the Fast-Grants Programme is designed as a first step for promising projects. We're looking for projects that can continue to grow beyond this initial funding.
