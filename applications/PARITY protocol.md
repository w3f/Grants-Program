# **Parity Protocol**

---

* **Team Name:** Decent Partners Ltd
* **Payment Details:**

  * **DOT:** `FvrbaMus8iASyrQYkajQWDxsYvG5gb72PFPuvy8TvkFFVGn` (Kusama Asset Hub)
* **Level:** 2

---

## **Project Overview :page_facing_up:**

**Parity Protocol** is an open-source suite of EVM smart contracts enabling the creation of **synthetic ratio exposure positions** between any two on-chain assets.

It delivers a **secure, reusable primitive** for tracking relative performance, designed for deployment across Polkadot’s EVM compatible networks — beginning with **Kusama Asset Hub (AH)**.

A reference implementation has been created to launch a **Kusama vs Polkadot market cap ratio position** on **Kusama AH**, supporting minting/burning of ratio tokens in **KSM, dUSD, or DOT**.

The protocol drives adoption of **dUSD**, creating an ongoing and scalable revenue stream to Decent Partners from **Brale (dUSD issuer)**. Adoption recirculates funding, which can be directed into new R&D.

For compliance and regulatory reasons, markets on the protocol will be launched by a new decentralised commercial entity (Wyoming DAO LLC or UNA/DUNA) that will receive fees and enable community involvement / access through separate fundraising and ownership.

All logic is **on-chain, open-source (Apache 2.0)**, and fully forkable.

### **Core Public-Good Goals**

* ✅ Provide an audited, well-tested EVM template for ratio-based mint/burn primitives
* ✅ Promote **dUSD** as a native settlement layer and enable **ratio rebalancing** using dUSD liquidity
* ✅ Deliver multi-source oracle consensus with freshness and outlier protections; XCM-backed data as a roadmap extension
* ✅ Publish open audit reports and comprehensive developer documentation
* ✅ Seed reusable tooling for prediction/persuasion markets via templates and indexer analytics

**Live Testnet PoC:** [ParityIndex.app](https://parityindex.app) (Paseo Asset Hub testnet)

---

## **Project Details**

### **Architecture (Solidity 0.8.24)**

* EVM mint/burn system issuing `ratio tokens` in return for (`KSM`, `DOT`, `dUSD`) while maintaining a target minimum reserve ratio.
* Pricing and safety via a multi-source oracle aggregator with consensus, freshness checks, and an emergency fallback.
* Minting allocates a portion of value to `NAVVault` to support system NAV; burning computes a dynamic premium or contribution via `ParityBonusPolicy` and distributes a NAV bonus from `NAVVault`, prioritising `dUSD`.
* Swaps across assets are executed via a PMM engine (`PMMTradingExecutor`) using oracle pricing and dynamic slippage/fees; liquidity is provided by `ReserveVault`.
* Governance and operations coordinated through `AdminManager` and `ProtocolManager`, enabling safe batch role changes, delayed admin transfers, and emergency recovery.
* Deployments and integrations: Paseo Asset Hub testnet (`chainId 420420422`); off-chain indexer records on-chain events and metrics to Supabase for analytics and the frontend dashboard.

### **Key Contracts**

| Contract                 | Function                                                                        | Security Features                                      |
| ------------------------ | ------------------------------------------------------------------------------- | ------------------------------------------------------ |
| `PARITYProtocol.sol`     | Mint/burn controller; NAV allocation/bonus; user state; events                  | Role-based access; deadlines/min-outs; circuit breaker |
| `ReserveVault.sol`       | Asset custody; ratio checks; available liquidity                                | Role-based access; minimum ratio enforcement           |
| `NAVVault.sol`           | NAV holdings; `contributeToNAV`; `distributeNAVBonus`; `getNAVBonus`            | Role-based access; composition targets                 |
| `MultiOracleSystem.sol`  | Aggregated pricing; consensus; outlier rejection; freshness; emergency fallback | Oracle/Operator roles; health checks                   |
| `PMMTradingExecutor.sol` | Oracle-priced swaps and quotes with dynamic slippage/fees                       | Operator/Manager roles; deadlines/min-outs             |
| `SurplusManager.sol`     | Detects and transfers surplus collateral above threshold                        | Operator/Manager roles; ratio maintenance              |
| `AdminManager.sol`       | Role admin; contract registration; batch grant/revoke; delayed admin transfer   | 24h admin transfer; emergency recovery                 |
| `ProtocolManager.sol`    | Coordinates protocol components                                                 | Cross-contract role management                         |
| `ParityBonusPolicy.sol`  | Computes dynamic burn percentage (premium or contribution)                      | Caps and safeguards                                    |
| `MintingLogic.sol`       | Mint computation and NAV allocation                                             | Internal                                               |
| `BurningLogic.sol`       | Burn computation and NAV bonus                                                  | Internal                                               |
| `TestFaucet.sol`         | Testnet token faucet utility                                                    | Rate limits                                            |

### **Data Flow**

**Mint path:**
User → `PARITYProtocol` (oracle validation, fee) → `ReserveVault` (custody) + `NAVVault` (NAV contribution) → emit `PARITYMinted` → indexer → Supabase → frontend update.

**Burn path:**
User → `PARITYProtocol` (bonus policy) → `BurningLogic` → `ReserveVault` (liquidity) → `NAVVault` (NAV bonus) → emit `PARITYBurned` → indexer → Supabase → UI.

**Swap path:**
User → `PMMTradingExecutor` → oracle quote/fee → `ReserveVault` provides liquidity → emit `PMMSwap` → indexer → UI.

**Surplus maintenance:**
`SurplusManager` periodically transfers excess collateral to maintain ratio health.

---

## **Ecosystem Fit**

| W3F Priority           | Contribution                                                                         |
| ---------------------- | ------------------------------------------------------------------------------------ |
| **DOT/KSM Demand**     | Requires `KSM`, `DOT`, or `dUSD` to mint/burn; drives on-chain demand.               |
| **dUSD Adoption**      | `dUSD` is the primary settlement asset; NAV bonuses prioritise `dUSD`.               |
| **Polkadot-Native**    | Built for Asset Hub EVM; live on Paseo testnet; XCM-backed data integration planned. |
| **Reusable Primitive** | Open APIs, SDK, and templates; Hardhat suite; forkable architecture.                 |
| **Testable & Usable**  | Live PoC with full UI and indexer analytics.                                         |

**No token. No leverage. No gambling.**
This is **on-chain relative performance market infrastructure.**

---

## **Team :busts_in_silhouette:**

### **Team Members**

| Name              | Role                                                  | GitHub                                          | Experience                                                                                                                                                      |
| ----------------- | ----------------------------------------------------- | ----------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Richard Welsh** | Project Lead                                          | [monsieurbulb](https://github.com/monsieurbulb) | Managing Partner, Decent Partners; Kabocha parachain steward; Polkadot ICO investor; Cofounder [Copa90](https://copa90.com); EIR [Prehype](https://prehype.com) |
| **Bharath**       | Full-Stack Blockchain Developer & Product Architect   | [bharathcoorg](https://github.com/bharathcoorg) | End-to-end protocol, frontend, and indexer developer; Edgeware contributor; founder of Limewheels Pvt Ltd & Coorg Delivery Pvt Ltd                              |
| **Frode Aschim**  | Strategy, Logic and Trading Oversight                 | —                                               | Investor, Trader, Market Maker; founder Ether Capital Ltd and Range Capital Partners                                                                            |
| **Daniel Olano**  | DAO Infrastructure, Scalability, and Interoperability | —                                               | Founder of Virto Network and Kreivo parachain                                                                                                                   |

### **Open-Source Repositories (Apache 2.0)**

* Core Contracts: [github.com/decent-partners/parity-protocol-evm](https://github.com/decent-partners/parity-protocol-evm)
* Frontend + SDK: [github.com/decent-partners/parity-ui](https://github.com/decent-partners/parity-ui)

---

## **Development Status :open_book:**

* ✅ Proof of Concept live on Paseo Asset Hub
* ✅ Core contracts 90% complete
* ✅ Oracle aggregation tested
* 🔄 Rebalancing logic in final R&D phase
* 🔄 Testing, community feedback, and contract audits in progress
* 🔄 DAO entity formation for commercialisation

---

## **Development Roadmap :nut_and_bolt:**

* **Total Duration:** 12 weeks
* **FTE:** 2.5
* **Total Cost:** $30,000 USD
* **DOT %:** 50% vested

| Milestone | Deliverables                                                                                                                                                   | Duration | Cost (USD) |
| --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ---------- |
| **1**     | Public repo, testnet deployments (Paseo AH), oracle integration, indexer setup (Supabase), monitoring scripts                                                  | 4 weeks  | 10,000     |
| **2**     | Protocol rebalancing logic, reserve stability via lending protocol/DEX integration, full test suite, developer documentation, PMM swap examples, fork template | 4 weeks  | 10,000     |
| **3**     | Third-party audit, NatSpec + tutorial, mainnet deploy (Asset Hub), full dUSD integration, DAO legal wrapper setup (Wyoming DAO LLC / UNA/DUNA)                 | 4 weeks  | 10,000     |

---

## **Future Plans**

* Publish open audit on GitHub
* Propose bug bounty and testing incentives via Kusama Treasury
* Maintain public repo and template forks
* Submit for **W3F Maintenance Grant** for ongoing updates

---

## **Legal Structure**

* **Entity:** Decent Partners Ltd (UK)
* **KYC/KYB:** Via [Brale](https://brale.xyz) / [Bloque API](https://copilot.bloque.app)
* **Commercial Activity:** None during grant; no token, fundraising, or proprietary software
* **Future Market Deployment:** Via separate DAO legal wrapper (Wyoming DAO LLC / UNA/DUNA)

---

## **Additional Information :heavy_plus_sign:**

**How did you hear about the Grants Program?**
Web3 Foundation Website and internal developer community channels.

**Summary:**
Parity Protocol is open, auditable **EVM infrastructure**, built natively for the **Kusama ecosystem** to enable new forms of synthetic exposure and composable DeFi primitives using **dUSD**.

---

Would you like me to add a **summary table** (project name, duration, grant size, key contacts) at the top? It’s optional but can make the GitHub submission more reviewer-friendly.
