# 📝 DotPassport

## 🌟 Project Overview

**Tagline:**
*Your on-chain identity and reputation layer for the Polkadot ecosystem.*

**Description:**
DotPassport is a Polkadot-native identity and reputation protocol that enables users to build a portable, verifiable profile of their on-chain activity and ecosystem contributions. Users earn badges and trust signals by participating in staking, governance, DAOs, NFTs, LPs, and more. dApps and parachains can integrate DotPassport to personalize experiences, gate access, or deliver targeted rewards based on user reputation and **Sybil resistance** signals.

**Polkadot Integration:**
Built entirely on Polkadot-native infrastructure, DotPassport leverages the identity pallet, DIDs, and XCM to aggregate cross-chain activity and issue meaningful, verifiable credentials. It is designed to be composable, extensible, and easily integrated by any dApp in the Polkadot ecosystem.

**Why this project:**
Other ecosystems like Ethereum have Gitcoin Passport, Sismo, and Proof of Humanity to anchor user identity and contribution history. Polkadot lacks a unified, user-facing reputation and identity layer that works across parachains. DotPassport fills this critical gap in a way that's user-friendly and developer-ready.

[![dotpassport-diagram.png](https://i.postimg.cc/MZ9tJNN1/dotpassport-diagram.png)]()

## 🔍 Project Details

**Tech Stack:**

* Smart Contracts / Pallet: ink! or Substrate pallet
* Indexer: Subquery or Subsquid
* Frontend: React, TypeScript, Polkadot.js
* DID integration: Identity pallet or KILT (optional)

**Core Components:**

* Reputation engine to issue badges based on on-chain behavior
* User profile and badge explorer
* Developer SDK and REST API
* Public dashboard to display user activity, badges, and trust level

**Not included (in v1):**

* Cross-ecosystem (non-Polkadot) data integration
* Biometric KYC

## 🧩 Ecosystem Fit

**Fit into Polkadot:**
DotPassport adds a missing identity and reputation layer to the Polkadot ecosystem, enabling more personalized, contextual dApp experiences. It encourages deeper user engagement by helping parachains and apps understand who their users are and reward meaningful activity.

**Target Audience:**

* dApp developers looking to personalize UX or rewards
* Parachains running quests, mints, events, or gated actions
* Wallets and explorers looking to enrich user profiles
* Users seeking to build a persistent, portable Web3 identity

**Similar Projects:**

* Gitcoin Passport (Ethereum) – focuses on social + Web2 + ZK signals
* Sismo (Ethereum) – ZK badge platform
* KILT (Polkadot) – credential issuance protocol
* True Network – attestation infra

**Why DotPassport is unique:**

* Focuses on real usage-based reputation and trust signals
* Designed for broad dApp integration from day one
* Includes **Sybil resistance** scoring as part of the core profile
* Native to Polkadot’s identity, governance, and staking stack
* While other projects focuses on credential issuance and identity verification, DotPassport is focused on usage-based reputation, making it ideal for gamified experiences, community incentives, and dApp personalization and ease of use.

## 👥 Team

* **Team Name:** DotPassport Labs
* **Contact Name:** Sachin Gurjar
* **Contact Email:** [sachin@dappfoundery.xyz](mailto:sachinhlo232@gmail.com)
* **GitHub:** [https://github.com/sachincoder1](https://github.com/sachincoder1)

### Team members

* **Sachin Gurjar** (Solo Developer)

#### LinkedIn Profiles

* [https://linkedin.com/in/sachingurjar](https://linkedin.com/in/sachingurjar)

#### Twitter

* [https://x.com/sachingurjar\_4](https://x.com/sachingurjar_4)

### Team Code Repos

* [https://github.com/sachincoder1](https://github.com/sachincoder1)

### Team's Experience

Sachin is a full-stack blockchain developer with experience building DeFi apps, dashboards, and tooling across Ethereum, Solana, and Polkadot. He has contributed to on-chain product infrastructure, focusing on user-facing design and cross-chain usability.

## 📊 Development Status

We’ve started work on scoping, indexing prototypes, and UI mockups. This grant will fund the full development and public launch

## 📅 Development Roadmap

### Overview

* **Estimated Duration:** 3 months
* **FTE:** 1
* **Total Costs:** \$10,000

| Number | Deliverable                           | Specification                                                                                                                                                                                       |
| ------ | ------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0a.    | License                               | MIT                                                                                                                                                                                                 |
| 0b.    | Documentation                         | Inline code documentation and a tutorial for dApp developers on integrating DotPassport                                                                                                             |
| 0c.    | Testing                               | Unit tests covering badge generation, scoring logic, and API responses                                                                                                                              |
| 0d.    | Article                               | Overview article describing the system, integrations, and vision for ecosystem impact                                                                                                               |
| 1.     | Reputation Engine + Badge Generator   | Indexes on-chain actions like governance votes, staking, LPing, NFT minting. Generates profile scores, trust levels, and badges stored in a Substrate-based backend                                 |
| 2.     | DotPassport Profile UI                | Web interface for users to view their profile, badges, trust score, and contribution history. Users can export/share their profile across dApps                                                     |
| 3.     | dApp SDK + REST API + Developer Docs  | A lightweight SDK and hosted API allowing parachains/dApps to query a user's profile, validate their badges, score, and trust level. Includes full developer documentation and integration examples |
| 4.     | Wallet Integration & Developer Plugin | Integrate with one wallet (e.g., Talisman) and provide a reusable widget/component for displaying DotPassport profile badges in apps                                                                |

### 💰 Budget Breakdown

| Milestone | Deliverables                          | Cost (USD)   | Est. Completion |
| --------- | ------------------------------------- | ------------ | --------------- |
| 1         | Engine + UI + Score Generator         | \$5,000      | 1.5 months      |
| 2         | API/SDK + Wallet Integration + Widget | \$5,000      | 1.5 months      |
| **Total** |                                       | **\$10,000** | **3 months**    |

## 🔮 Future Plans

* Add credential export formats (DID-compliant JSON, W3C Verifiable Credentials)
* Expand coverage to all major parachains (via XCM)
* Host ecosystem-wide leaderboard and trust explorer
* Partner with hackathons, DAOs, dApps, wallets and parachains for live usage

## ℹ️ Additional Information

* Code and updates will be published on GitHub
* This project has not received prior funding
