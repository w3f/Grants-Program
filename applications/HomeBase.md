# Homebase

- **Team Name:** Homebase by HanPay
- **Payment Address:** TRC20, TPju5jP9TVoxfkfNnzhR2QZ6UFdmqLqNTH, USDT
- **Level:** 3

## Overview

### Intro
Real estate tokenization is emerging as one of the most exciting use cases for Real World Assets (RWA) in Web3, but it faces critical challenges: trustless infrastructure, cross-chain liquidity, and compliant governance.

Homebase is building a decentralized RWA protocol for real estate on Polkadot, enabling **tokenization, fractional ownership, trading, and cross-chain utility of physical properties**. 

With a **custom Substrate chain already built and a frontend dApp live**, Homebase is ready to launch its testnet and mainnet and become a key player in the Polkadot ecosystem.

### Abstract
Homebase provides a Polkadot-native blockchain to tokenize real estate and issue fractional shares as on-chain tokens. 

We have:
✅ Customized the Substrate chain with our own token, symbol, and supply.  
✅ Built a working frontend dApp to interact with the chain.

Next, we will:
🚀 Deploy a public testnet + mainnet.  
🔗 Integrate XCM for cross-chain liquidity and governance.  
🏛️ Provide legal, secure, and compliant RWA modules.

Homebase bridges physical real estate with DeFi — unlocking a new wave of value on Polkadot.

---

## 🛠️ Current Progress

We have already achieved substantial milestones prior to this grant application:

- ✅ Built and deployed a **live frontend dApp** → https://homebase-escrow-haven.vercel.app/
- ✅ Customized and launched a local **Substrate blockchain** using the Polkadot SDK:
    - Custom token symbol.
    - Initial coin supply setup.
    - Genesis block and runtime configuration.
- ✅ Developed and tested **basic transaction flows**:
    - Minting.
    - Transfer.
    - Balance checks.
- ✅ Integrated with **Polkadot.js UI** for account management and balance display.

This grant will help us scale this prototype into:
- 🚀 A public testnet.
- 🔗 XCM-ready cross-chain features.
- 🏛️ Legal and governance modules.
- 🌍 A production-ready mainnet.

---

## Project Details

### Architectural Overview

Main user flows:
1. **Property Onboarding** → On-chain registration + token issuance.
2. **Token Lifecycle** → Trade, hold, collateralize, vote.
3. **Cross-chain Interactions** → XCM to connect with Polkadot DeFi.

Substrate modules:
- **pallet_rwa_core** → Property data, documents.
- **pallet_rwa_asset** → Ownership tokens.
- **pallet_rwa_marketplace** → Trading system.
- **pallet_rwa_xcm** → Cross-chain operations.

Frontend:
- React/TypeScript dApp → [Live demo](https://homebase-escrow-haven.vercel.app/)
- Polkadot.js integration, user dashboard.

---

## Ecosystem Fit

Polkadot needs robust RWA projects to onboard real-world assets.  
Homebase adds:
- A **real estate tokenization parachain**.
- Bridges to DeFi, governance, and liquidity.
- Legal + secure asset management primitives.

We aim to become a **common-good parachain** for real estate-backed assets across Polkadot.

---

## Team

### Contact

- **Contact Name:** Emeka Iwuagwu
- **Contact Emails:** e.iwuagwu@hotmail.com, emeka@hanpay.xyz

### Legal Structure

- HanPay, Nigeria / Serbia (In progress)

---

## Development Roadmap

### Overview

- **Total Estimated Duration:** 3–4 months
- **Full-Time Equivalent (FTE):** 3–5
- **Total Costs:** $150,000

---

### Milestone 1: Public Testnet Launch, Marketplace Module

- **Estimated Duration:** 1–1.5 months
- **FTE:** 3–5
- **Costs:** $60,000

| Number | Deliverable                    | Specification                                                                                                          |
| ------ | ----------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| 0a.    | License                       | Apache 2.0                                                                                                            |
| 0b.    | Documentation                 | Inline code docs + testnet deployment tutorial.                                                                      |
| 0c.    | Testing + Guide               | Unit + integration tests; manual test guide.                                                                         |
| 0d.    | Docker                        | Dockerfile + docker-compose setup.                                                                                   |
| 1.     | Testnet Deployment           | Public testnet with faucet + explorer.                                                                               |
| 2.     | Substrate: pallet_rwa_marketplace | Secondary market module for token trading.                                                                          |
| 3.     | Frontend Integration         | Connect dApp to live testnet.                                                                                        |

---

### Milestone 2: Mainnet Launch, XCM Integration

- **Estimated Duration:** 1–1.5 months
- **FTE:** 3–4
- **Costs:** $60,000

| Number | Deliverable                    | Specification                                                                                                          |
| ------ | ----------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| 1.     | Mainnet Deployment           | Live parachain mainnet launch.                                                                                       |
| 2.     | Substrate: pallet_rwa_xcm    | Cross-chain messaging for token movement + governance.                                                              |
| 3.     | Frontend Finalization       | Full product dApp with polished UX.                                                                                 |
| 4.     | Governance Module           | On-chain governance for property decisions.                                                                         |

---

### Milestone 3: Ecosystem Growth, ink! Contracts, Community Launch

- **Estimated Duration:** 1 month
- **FTE:** 2–3
- **Costs:** $30,000

| Number | Deliverable                    | Specification                                                                                                          |
| ------ | ----------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| 1.     | ink! Contract Hooks          | KYC, governance, legal modules.                                                                                      |
| 2.     | Article + Public Launch     | Publish article + community onboarding.                                                                              |
| 3.     | Benchmarking Support        | Add benchmarking + performance modules.                                                                              |

---

## Future Plans

Post-grant, we will:
- Expand property onboarding partnerships.
- Integrate EVM modules.
- Launch developer + community incentives.
- Position Homebase as the **real estate RWA hub** of Polkadot.
