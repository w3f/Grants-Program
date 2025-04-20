### TxShield Transaction Safety Simulator 🚀

**Status:** Open (MVP built, In-progress beta version) 🌟

**Proposer:** (GitHub: HoodClock)

**MVP Official Docs:** [github.com/HoodClock/OfficialDocs ](https://github.com/HoodClock/OfficialDocs.git)

**MVP Demo:** [safe-tx-simulator.vercel.app ](https://safe-tx-simulator.vercel.app/)

---

**Projects This Work Could Be Useful For 🌍:**

 - **Wallets** – Boosts wallet safety with transaction previews 

 - **Polygon** – Enhances L2 transaction reliability 

 - **Ethers.js** – Complements its ecosystem with simulation tools

# Project Overview 📄

## Overview

**Tagline:** Simulate, Secure, Succeed: TxShield prevents Web3 transaction losses.  
**Description:** TxShield is a transaction simulation platform designed to protect Web3 users from:  
- Failed transactions  
- Excessive gas fees alerts
- Phishing contract detection alerts 
- Honeypot contract detection alerts  

These issues have cost Ethereum users over **$103 M** from **2018–2024**. Built with **Ethers.js** and **Next.js**, TxShield previews transactions, provides accurate gas estimates, and flags risks such as:

> **High Gas Fees Detected:** Possible Honeypot!

It targets **21 M+ MetaMask and other wallets users if this service implemented in wallets as an API**, enhancing transaction safety and trust across(multiple chains in future to cover the market):  
- Ethereum  
- Polygon  
- Optimism  
- Polkadot/Kusama (planned)

**Relation to Substrate/Polkadot/Kusama:**  
TxShield aligns with Polkadot’s vision of a secure, interoperable Web3 ecosystem by providing a safety layer for transactions. While currently Ethereum‑focused, we plan to integrate with Polkadot parachains (e.g., Moonbeam) to simulate cross‑chain transactions, leveraging Substrate’s modularity for custom safety modules.

**Team Interest:**  
Our team is driven by the mission to eliminate preventable losses in Web3, inspired by real‑world cases like the **$100 K failed transaction incident on Ethereum**. We aim to build trust in decentralized systems, making Web3 accessible and safe for all.

---

## Project Details

### 🖼️ Mockups / Designs
- UI mockups for the MVP interface:  
   [safe-tx-simulator.vercel.app  ](https://safe-tx-simulator.vercel.app/)
  - Transaction input form  
  - Risk alerts  
  - Financial summaries (ETH price, balances)

### 📊 Data Models / API Specifications (for Beta version)

#### API Endpoints

| Method   | Route         | Description                                                                                                  |
| -------- | ------------- | ------------------------------------------------------------------------------------------------------------ |
| **POST** | `/simulate`   | Accepts transaction details (`to`, `value`, `data`) and returns simulation results (`revertRisk`, `gasEstimate`, `scamFlags`). |
| **GET**  | `/signatures` | Retrieves known malicious contract signatures for client‑side validation.                                     |


### 🛠️ Technology Stack
- **Frontend:** Next.js / React (responsive UI with hooks)
- **Backend:** Node.js / Ethers.js (simulate transactions & send alerts)
- **Detection:** Bytecode analysis for honeypots & phishing detection
- **Database:** MongoDB (store 10K+ malicious contract signatures)
- **DevOps:** Docker (deployment), Vercel (hosting)

---

### 📚 Documentation
- Core components (simulation engine, scam detection):  
  [github.com/HoodClock/OfficialDocs ](https://github.com/HoodClock/OfficialDocs.git) 

---

### 🚀 PoC / MVP
- **Live:** [safe-tx-simulator.vercel.app ](https://safe-tx-simulator.vercel.app/) 
- **Features:** Basic transaction simulation + honey pot contract scam detection for Ethereum also test on Sepolia Network.

---

### ⚠️ Limitations
- No real-time transaction execution or wallet key management during beta.
- Polkadot integration planned post-grant.
- Hosting, maintenance, and marketing costs are included in the grant request.

---

## 🧩 Ecosystem Fit

#### 🎯 Fit in Polkadot/Substrate/Kusama
TxShield strengthens the Polkadot ecosystem by adding a critical security layer for users interacting with parachains and dApps—especially cross-chain platforms like Moonbeam. By detecting malicious contracts (honeypots, phishing and in the future more) before execution, it directly tackles one of the biggest adoption hurdles in Web3: user trust and transaction safety. This aligns with Polkadot’s vision of a secure, interoperable, and user-friendly decentralized internet.

#### 👥 Target Audience
- **Primary:** Wallet users (MetaMask, Polkadot.js) seeking safe transactions  
- **Secondary:** Parachain/dApp developers integrating TxShield’s API  
- **Tertiary:** Web3 educators & communities promoting secure practices  

#### 🛡️ Needs Addressed
- Prevents financial losses from scams ($103 M+, 2018–2024)  
- Reduces gas fee overpayments via precise estimates  
- Builds user confidence in cross‑chain interactions  

#### 📈 Evidence of Needs
- **Scam Reports:** Ethereum scam losses highlighted in Etherscan & Chainalysis reports.
- **Forum Discussions:** Safety tools frequently requested on r/ethereum & Polkadot forums.
- **Case Study:** A $100K failed transaction (2023) shows urgent need for pre-simulation 

#### 🔍 Similar Projects

| Ecosystem            | Project   | Focus                    | Notes                                                      |
| -------------------- | --------- | ------------------------ | ---------------------------------------------------------- |
| Polkadot/Substrate   | —         | N/A                      | No direct equivalents; Polkadot.js lacks simulation/scam detection |
| Ethereum             | Tenderly  | Transaction simulation   | Enterprise, closed‑source, no scam detection               |
| Multi‑Chain          | BlockSec  | Security audits          | Not user‑facing simulation; enterprise audit focus         |

---

### Team 👥
- **Team Leader:** Moiz Ali   

**Contact:**  
- **Name:** Moiz Ali  
- **Email:** moizmughalali@gmail.com   

**👨‍💻 Experience:**  
- **Moiz Ali:**  1.5+ years in Web3 & full-stack development. Built the TxShield MVP, led development of DocuMint—a MERN + Solidity platform turning user documents into NFTs & work with international client, Stack Overflow–like platform for their final year project.
- **Documint:** https://github.com/HoodClock/DocuMint.git  

**Previous Grants:** None  

**Repos:**  
- [<https://github.com/HoodClock/SafeTxSimulator> ](https://github.com/HoodClock/SafeTxSimulator.git) 
- [github.com/HoodClock/OfficialDocs ](https://github.com/HoodClock/OfficialDocs.git) 
- Team GitHub: [<https://github.com/HoodClock> ](https://github.com/HoodClock/) 
- LinkedIn: [ <https://linkedin.com/in/moiz-ali>](https://www.linkedin.com/in/moiz-ali-72bbb9333/)  

---

### Development Status 📖
- **Current:** MVP live ([safe-tx-simulator.vercel.app ](https://safe-tx-simulator.vercel.app/) )  

**Research:**  
- Ethereum scam patterns (Etherscan, r/ethereum)  
- Custom honeypot contract ([github.com/HoodClock/OfficialDocs ](https://github.com/HoodClock/OfficialDocs.git))   
- UI wireframes & pitch deck at OfficialDocs (coming soon)

---

### MVP Success Screenshot
[github.com/HoodClock/OfficialDocs ](https://github.com/HoodClock/OfficialDocs.git)

### MVP Detected Honey pot (Custom Honey pot contract made by me)
[github.com/HoodClock/OfficialDocs ](https://github.com/HoodClock/OfficialDocs.git)

---

## Development Roadmap 🔩

**Duration:** 6 months • **FTE:** 2 • **Budget:** $45,000 USD • **DOT %:** 50%

#### Milestone 1 — Infrastructure & Pre‑Launch Prep (1 month)

| #   | Deliverable            | Specification                                                            |
| --- | ---------------------- | ------------------------------------------------------------------------ |
| 0a  | License                | MIT                                                                      |
| 0b  | Documentation          | Inline code docs + tutorial for spinning up a TxShield node              |
| 0c  | Testing & Guide        | Unit tests (90% coverage) + guide (`npm test`)                           |
| 0d  | Docker                 | Dockerfile for backend testing                                           |
| 1   | Backend Optimization   | Initial scaling for beta                                                 |
| 2   | Contract DB Expansion  | Add 10K signatures; raise detection accuracy from 85% → 90%              |
| 3   | Multi‑Network Support  | 	Extend Ethers.js support to Polygon & Optimism (Sepolia tested)         |
| 4   | Onboarding Flow        | One‑click MetaMask integration                                           |

#### Milestone 2 — Beta Launch & Early Adoption (1 month)

| #   | Deliverable      | Specification                                      |
| --- | ---------------- | -------------------------------------------------- |
| 0a  | License          | MIT                                                |
| 0b  | Documentation    | Tutorial update for Polygon support                |
| 0c  | Testing & Guide  | Comprehensive tests + updated guide                |
| 0d  | Docker           | Dockerfile for beta deployment                     |
| 1   | Beta Release     | Launch to 10K users via X, Discord, r/ethereum     |
| 2   | Core Features    | Simulation, gas estimate, contract scam alerts |
| 3   | Initial UI       | Next.js input, risk alerts, financial summaries    |

#### Milestone 3 — Feedback & Iteration (2 months)

| #   | Deliverable            | Specification                                                  |
| --- | ---------------------- | -------------------------------------------------------------- |
| 0a  | License                | MIT                                                            |
| 0b  | Documentation          | Feedback system & EIP‑1559 docs                                |
| 0c  | Testing & Guide        | Tests for feedback/gas enhancements + guide                    |
| 0d  | Docker                 | Dockerfile for feedback system                                 |
| 1   | Feedback System        | In‑app surveys + Discord integration (80% satisfaction)        |
| 2   | Gas Enhancement        | EIP‑1559 congestion data for ±5% estimate accuracy             |
| 3   | Scam Detection Upgrade | Refined algorithm with beta data (92% accuracy)                |
| 4   | Bug Fixes              | Resolve issues          |

#### Milestone 4 — Scale & Impact Reporting (2 months)

| #   | Deliverable        | Specification                                                      |
| --- | ------------------ | ------------------------------------------------------------------ |
| 0a  | License            | MIT                                                                |
| 0b  | Documentation      | Final docs covering all features                                   |
| 0c  | Testing & Guide    | Full test suite + final guide                                      |
| 0d  | Docker             | Production Dockerfile                                              |
| 0e  | Article            | Medium post on impact, targeting wallets & developers              |
| 1   | User Scaling       | Grow to 50K users via MetaMask & Gitcoin                           |
| 2   | Performance Tuning | Ensure <1% downtime & <3 s simulation times under load              |
| 3   | Impact Report      | Document 500K simulations, $50K gas savings, $1 M scam prevention   |
| 4   | Open‑Source Docs   | Release code & docs                                                |

---

### Screenshorts
> Success Transaciton
> ![success-tranaciton](https://github.com/user-attachments/assets/a351f513-5cae-4b90-b29d-fdcb26f1d33e)
>
> Honeypot Contract Detected (Custom code made by me using remix IDE)
> ![Honeypot_Contract](https://github.com/user-attachments/assets/2d85b56a-3164-4dc8-acf1-461ebaf83b08)




### Future Plans
- **Financing & Maintenance:** Partner with wallet providers & parachains. 
- **Short‑Term Promotion:** X, Discord, Web3 conferences → 100K users in 12 months, dApp integrations  
- **Long‑Term Vision:** Full Polkadot/Kusama support; Substrate safety modules; standardize Web3 transaction safety
- **Future Scams Preventions:**
    - Address posining detection
    - Rug pull risks analysis
    - Fake token/ Copymint Detection
    - Wallet risk scroring
    - AI Driven anomaly detection 

---

### Additional Information ➕
- **Funding:** This grant will provide the first external support for the project.  
- **Previous Grants:** None applied.
- **Third parties API's:** Alchemy RPC, CoinGecko API, MongoDB Clusters, Moralis (planned), hosted on Vercel.
- **Security Approach:** Will use bytecode pattern analysis + simulated transaction behavior to detect honeypots and phishing—uniquely combining static + dynamic checks.
- **Found Via:** By searching.
- **Post-Grant goal:** Launch public beta with full honeypot/phishing detection.
- 


#### Output Data Model of MVP

```json
{
    "gasCostEth": "0.000021",
    "gasCostUsd": "0.03",
    "isValidReciever": true,
    "transactionStatus": "✅ Likely to succeed (10%+ gas buffer)",
    "transactionType": 2,
    "amount": "0.0001",
    "balanceBefore": "0.048367",
    "balanceAfter": "0.048246",
    "ethPriceInUsd": 1590.42,
    "userAddress": "0x2d1468a9B827c6e1F5E91943dc3b0425d187993B",
    "receiverAddress": "0xB1e956559DdeC211345076eba41a3bEF32923b66",
    "isContract": false,
    "honeyPotWarning": "No Honey pot detected",
    "networkDetails": {
        "netName": "sepolia",
        "netChainId": "11155111"
    },
    "minimumRequired": "0.000121",
    "recommendedAmount": "0.0001331"
}

