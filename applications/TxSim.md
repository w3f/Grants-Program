# TxSim: Transaction Simulator and Risk Detector for Polkadot

**Team Name:** Build Union  
**Payment Details:**

- **DOT:** 1XYfhcsZFhcszyy6jiHYvkBqPxUXq6YADRUaUkcZ8vopqNTiqjBv
- **USDC:** 0x53785b7155d016ba9c64fc2117d0eac0b21c9869  
  **Grant Level:** 3

---

## Background

Build Union refined an earlier abandoned by HoodClock into **TxSim**, a transaction simulator and risk detector for Substrate WASM smart contracts and asset transactions in the Polkadot ecosystem. TxSim empowers Polkadot wallet users to preview transactions, identify risks, and optimize fees before signing, addressing a critical need for secure interactions with Polkadot’s native contracts and assets.

## The Problem

Polkadot’s parachains (e.g., Moonbeam, Astar, Asset Hub) fuel DeFi and asset growth, but users face significant risks:

- **Blind Signing:** Transactions lack outcome visibility, causing extrinsic failures, reverts, or trapped assets.
- **Scams:** In 2024, phishing and pig butchering scams cost crypto users $3.6B, primarily on Ethereum, with Polkadot users facing similar threats from phishing and honeypot contracts that trap funds in fake liquidity or deceptive dApps.
- **Fee Waste:** Failed transactions incur fees in Polkadot’s weight-based model, with excessive fees often signaling scams.

**Existing tools fall short:**

- **EVM-Centric:** Tenderly targets Ethereum, not Substrate.
- **Limited:** HoneyPot.is detects scam tokens post-loss; InstaDapp focuses on DeFi strategies.
- **Poor UX:** Developer-centric tools lack wallet integration.

TxSim addresses these gaps with real-time transaction previews, risk alerts for phishing and honeypots, and seamless Polkadot wallet integration.

## TxSim Solution

TxSim is a user-friendly tool for Polkadot’s Substrate-based smart contracts and asset transactions, offering:

- **Transaction Simulation:** Previews outcomes by simulating contract calls on Moonbeam and Astar parachains and extrinsic/runtime calls on Asset Hub (PVM), using `eth_call` for EVM-compatible chains (e.g., Moonbeam) and Substrate runtime queries for WASM/PVM chains (e.g., Astar, Asset Hub).
- **Risk Detection:** Flags extrinsic failures, reverts, and suspicious patterns (e.g., excessive fees, weight overflows, invalid parameters) across Polkadot parachains.
  _While TxSim’s initial risk detection engine focuses on heuristic rules and WASM bytecode analysis, we plan to enhance detection capabilities over time by incorporating community reporting, machine learning models, and integration with external threat intelligence feeds. This phased approach will enable TxSim to adapt to emerging scam tactics and improve accuracy in identifying complex or zero-day threats._

- **Fee Estimation:** Provides accurate fee estimates using Polkadot’s weight-based model, with optimization suggestions.
- **Wallet Integration:** Integrates with Talisman and SubWallet via Polkadot.js API, requiring no account creation.
- **Polkadot Focus:** Targets Moonbeam, Astar, and Asset Hub parachains, with modular SDK/APIs for dApp/wallet integration.

## Ecosystem Fit

Polkadot’s high transaction velocity and DeFi growth amplify scam and fee risks. TxSim provides Polkadot-native transaction safety, akin to Token Sniffer’s scam detection for Solana, safeguarding users from honeypots and failed calls while fostering trust in parachains like Moonbeam, Astar, and Asset Hub. TxSim:

- Reduces failed transactions and scam losses.
- Enhances trust in dApps and wallets, improving L2 UX.
- Supports safe onboarding for millions of users.
- Delivers open-source infrastructure as a Polkadot public good.

## Target Users

- **DeFi Users:** Preview staking, swapping, or minting transactions.
- **Retail Traders:** Avoid fee-wasting failures and honeypot scams.
- **Developers:** Test transactions during dApp development.
- **Wallet Platforms:** Integrate TxSim for enhanced user protection.

## Technical Stack

- **Frontend:** Next.js + React, optimized for Polkadot wallet UX.
- **Backend:** Node.js + Polkadot.js API, with a simulation engine using RPC optimization and Ethers.js for Moonbeam’s EVM compatibility.
- **Detection Engine:** Custom WASM bytecode parsing for Substrate contracts.
- **Database:** Scalable storage for over 100,000 contract signatures across Polkadot parachains.

## Competitive Advantage

TxSim uniquely combines transaction simulation, risk detection, and user-friendly UX for Polkadot’s Substrate ecosystem. The table below compares TxSim to competitors:

| Feature                    | TxSim | Tenderly      | HoneyPot.is      | InstaDapp |
| -------------------------- | :---: | ------------- | ---------------- | --------- |
| Substrate Contract Support |  ✅   | ❌            | ❌               | ❌        |
| Transaction Simulation     |  ✅   | ✅ (EVM only) | ❌               | ❌        |
| Real-Time Risk Detection   |  ✅   | ❌            | ✅ (Tokens only) | ❌        |
| Wallet Integration         |  ✅   | ❌            | ❌               | ✅        |
| Polkadot Parachain Support |  ✅   | ❌            | ❌               | ❌        |

## Why TxSim?

TxSim eliminates blind transactions in Polkadot, reducing scams and fee waste while enhancing user trust. By supporting Moonbeam, Astar, and Asset Hub, TxSim strengthens Polkadot’s security-first UX, enabling safer DeFi and asset interactions. With a live demo (TxSim Demo) and open-source approach, TxSim is poised to set a new standard for transaction safety in Polkadot.

---

## Team

**Build Union** is a collaborative collective of talented developers, designers, strategists, and innovators dedicated to shaping the future of the decentralized web. As an aggregate team of Web3 builders, Build Union brings together diverse expertise to create cutting-edge blockchain applications, DAO services, and decentralized solutions, focused on fostering innovation and accelerating Web3 adoption.

### Members

**Emmanuel — Project Lead**  
Role: Project manager and blockchain architect with deep experience in DAO tooling and transparency infrastructure. Combines hands-on engineering with leadership in dApp development and open governance tooling.  
LinkedIn: [linkedin.com/in/emmanuel-eclipse](https://linkedin.com/in/emmanuel-eclipse)  
Contact: virtualstrikingly@gmail.com

**Golden K. — Machine Learning Developer**  
Role: Develops Python-based ML pipelines for anomaly detection and data analysis using pandas, NumPy, SVM, and PyTorch.  
GitHub: [github.com/golden-k22](https://github.com/golden-k22)

**Eliud Munyala — Senior Data Engineer & ML Specialist**  
Role: Leads data engineering at SpaceAI, specializing in data ingestion, transformation, and validation.  
GitHub: [github.com/meaLuda](https://github.com/meaLuda)  
LinkedIn: [linkedin.com/in/eliud-munyala](https://linkedin.com/in/eliud-munyala)

**Marko — UI/UX Designer**  
Role: Designed over 1,000 websites and data dashboards, leading UX design for WatchDog.  
Portfolio: [hipfolio.co](https://hipfolio.co)  
Dashboards: [hipfolio.co/dashboard.html](https://hipfolio.co/dashboard.html)

**Awais Nazir — Full-Stack Developer (dApps)**  
Role: Specializes in smart contracts, React, Next.js, and Node.js for decentralized applications.  
LinkedIn: [linkedin.com/in/awais-nazir](https://linkedin.com/in/awais-nazir)

**WayToTheVenus — Smart Contract Developer**  
Role: Develops modular, audit-ready smart contracts.  
GitHub: [github.com/waytothevenus](https://github.com/waytothevenus)

**CryptoStar7 — Blockchain & Full-Stack Developer**  
Role: Builds backend blockchain logic, frontend application layers, smart contract architecture, and full-stack Web3 tooling.

---

## Legal Structure

**Post-grant approval**  
**Team Code Repositories**  
Technical and architectural planning is ongoing, with public code repositories to be established upon Milestone 1 completion.

---

## Budget

**Overview**

- **Total Estimated Duration:** 4 months
- **Full-Time Equivalent (FTE):** 1 (2 developers part-time, ~20 hours/week each per milestone)
- **Total Costs:** 60,000 USD
- **DOT %:** 50% (30,000 USD equivalent in vested DOT, 30,000 USD in USDC)

---

### Milestone 1: Core Infrastructure

**Estimated Duration:** 2 months  
**FTE:** 1  
**Costs:** 30,000 USD

| Number | Deliverable               | Specification                                                                                                                                                                                             |
| ------ | ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0a.    | License                   | MIT License, ensuring open-source compatibility for Polkadot’s ecosystem.                                                                                                                                 |
| 0b.    | Documentation             | Inline documentation for the simulation engine and fee estimation module. A tutorial will guide developers on setting up TxSim’s backend and simulating a transaction on Moonbeam (EVM) and Astar (WASM). |
| 0c.    | Testing and Testing Guide | Unit tests covering simulation and fee estimation functions with ≥90% coverage. A guide will detail running tests locally or via Docker, including 50+ test scenarios for Moonbeam and Astar.             |
| 0d.    | Docker                    | Dockerfile to spin up TxSim’s backend, enabling testing of transaction simulation and fee estimation on Moonbeam and Astar.                                                                               |
| 1.     | Simulation Engine         | A backend module using Polkadot.js API (Ethers.js for Moonbeam’s EVM) to simulate contract calls on Moonbeam/Astar and extrinsic calls on Asset Hub, previewing transaction outcomes.                     |
| 2.     | Fee Estimation Module     | A module calculating accurate weight-based fee estimates for Moonbeam, Astar, and Asset Hub transactions, with optimization suggestions (e.g., lower fee alternatives).                                   |

---

### Milestone 2: MVP Completion

**Estimated Duration:** 2 months  
**FTE:** 1  
**Costs:** 30,000 USD

| Number | Deliverable               | Specification                                                                                                                                                                                                                                                        |
| ------ | ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0a.    | License                   | MIT License, ensuring open-source compatibility for Polkadot’s ecosystem.                                                                                                                                                                                            |
| 0b.    | Documentation             | Updated inline documentation for risk detection, wallet integration, and SDK. A tutorial will guide users on integrating TxSim with Talisman/SubWallet, simulating transactions, and viewing risk/fee alerts on Moonbeam, Astar, and Asset Hub.                      |
| 0c.    | Testing and Testing Guide | Comprehensive unit tests covering risk detection, wallet integration, and SDK functions with ≥80% coverage. A guide will detail running tests locally or via Docker, including 50+ revert scenarios on Moonbeam, Astar, and Asset Hub.                               |
| 0d.    | Docker                    | Updated Dockerfile to test all MVP functionality (simulation, fee estimation, risk detection, wallet integration) on Moonbeam, Astar, and Asset Hub.                                                                                                                 |
| 0e.    | Article                   | A Medium article explaining TxSim’s MVP achievements, targeting Polkadot developers and DeFi users. It will cover how TxSim prevents failed transactions and scams, with examples on Moonbeam, Astar, and Asset Hub, and link to a live demo for beta participation. |
| 1.     | Risk Detection Module     | A detection engine flagging extrinsic failures and reverts (e.g., insufficient fees, invalid inputs) via WASM bytecode analysis for Moonbeam/Astar and extrinsic validation for Asset Hub.                                                                           |
| 2.     | Wallet Integration        | Frontend integration with Talisman and SubWallet via Polkadot.js API, enabling users to preview transactions and view risk/fee alerts in a Next.js UI.                                                                                                               |
| 3.     | SDK/APIs                  | A modular JavaScript SDK with APIs for dApps/wallets to integrate TxSim’s simulation, fee estimation, and risk detection features.                                                                                                                                   |

![image](https://github.com/user-attachments/assets/15d4eb82-6de7-49e1-8a96-cfaf9e055113)
![image](https://github.com/user-attachments/assets/41a13e18-112f-4b09-a659-8b6b165b5360)



---

## Adoption Strategy

- **Wallet Partnerships:** Engage Talisman and SubWallet for integration during Milestone 2.
- **Beta Program:** Launch with 1,000 DeFi users and developers on Moonbeam, Astar, and Asset Hub post-Milestone 2, promoting the live demo (TxSim Demo) to showcase transaction simulation and risk detection.
- **Community Engagement:** Host AMAs on X, post on Polkassembly, and present at Polkadot events (e.g., Sub0).
- **Open-Source:** Release simulation engine and SDK on GitHub under MIT license.

---

## Risks & Mitigation

| Risk                             | Mitigation                                 |
| -------------------------------- | ------------------------------------------ |
| WASM parsing complexity          | Phased testing with known contract data    |
| Wallet integration delays        | Early engagement with wallet teams in M2   |
| Asset Hub integration challenges | Leverage Polkadot.js for PVM compatibility |

---

## Conclusion

TxSim eliminates blind transactions in Polkadot, preventing scams and fee waste while boosting user trust. By supporting Moonbeam, Astar, and Asset Hub, TxSim strengthens Polkadot’s security-first UX, to make DOT transactions safe.\*\*
