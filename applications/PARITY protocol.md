# Parity Protocol

* **Team Name:** Decent Partners Ltd
* **Payment Details:**

  * **DOT:** FvrbaMus8iASyrQYkajQWDxsYvG5gb72PFPuvy8TvkFFVGn (Polkadot Asset Hub)
  * **Payment:** FvrbaMus8iASyrQYkajQWDxsYvG5gb72PFPuvy8TvkFFVGn (Polkadot Asset Hub)
* **Level:** 2

## Project Overview :page_facing_up:

### Overview

**Parity Protocol** is an open-source suite of EVM smart contracts enabling the creation of **synthetic ratio markets** between any two on-chain assets.

It delivers a **secure, reusable primitive** for tracking relative performance, designed for deployment across Polkadot’s EVM compatible networks — beginning with **Kusama Asset Hub (AH)**.

The protocol enables the tokenisation of any rivalry through `ratio tokens` - using degen financial engineering to create epic David vs Goliath competitions that can capture interest, attention and tribal instincts.  

The core aim is to productise the question; _“Can the underdog challenge the incumbent and reach parity?_ 

A [reference implementation](https://parity.app) has been created to launch a **Kusama vs Polkadot market cap ratio position** on **Passet Hub** ahead of full launch on Kusama Asset Hub, enabling the ecosystem to dogfood its own internal rivalry and culture. Minting/burning of ratio tokens is done with **KSM, dUSD, or DOT**. 

This approach mobilises economic competition between the two communities with the aim of: 
- Kickstarting defi experimentation and culture in Kusama
- Dogfooding the native tech with an easy to understand and access initial implementation.
- Capitalising on proven demand for prediction markets 
- Introducing an entirely new financial primitive to crypto (ratio markets w/ NAV bonuses)  
- Demonstrating the scalability, efficiency and interoperability of Polkadot’s tech stack.  
- Creating net new demand for KSM and DOT 
- Driving adoption of Kusama’s native dUSD stablecoin
- Using degen incentives to encourage rapid innovation in the broader ecosystem.

Just as [Polymarket](https://polymarket.com/) and [Kalshi](https://kalshi.com/) are opening up infinite new prediction markets, Parity Protocol unlocks any ratio trade with a normalised and verifiable relative price / data feed;

- **Crypto centric:** Bitcoin vs Gold, Ethereum vs Bitcoin, Solana vs Ethereum etc
- **Traditional markets:** Microsoft vs Apple market cap, Intel vs Nvidia market cap 
- **Sports:** Team/Player A’s performance vs Team/Player B’s performance
- **Film and TV:** Streaming/Subscriber performance between IP/Platform A and IP/Platform B
- **Music:** Streaming/Subscriber performance between Artist/Platform A and Artist/Platform B.

Adoption of **dUSD** creates an ongoing and scalable revenue stream to Decent Partners from **Brale (dUSD issuer)**. Adoption recirculates funding, which can be directed into new R&D/innovation. 

For compliance and regulatory reasons, markets on the protocol will be launched by a new decentralised commercial entity (Wyoming DAO LLC or UNA/DUNA) that will receive fees and enable community involvement / access through separate fundraising and ownership.

All logic is **on-chain, open-source (Apache 2.0)**, and fully forkable.

### Project Details

**Architecture (Solidity 0.8.24)**

* EVM mint/burn system issuing `ratio tokens` in return for (`KSM`, `DOT`, `dUSD`) while maintaining a target minimum reserve ratio.
* Pricing and safety via a multi-source oracle aggregator with consensus, freshness checks, and an emergency fallback.
* Minting allocates a portion of value to `NAVVault` to support system NAV; burning computes a dynamic premium or contribution via `ParityBonusPolicy` and distributes a NAV bonus from `NAVVault`, prioritising `dUSD`.
* Swaps across assets are executed via a PMM engine (`PMMTradingExecutor`) using oracle pricing and dynamic slippage/fees; liquidity is provided by `ReserveVault`.
* Governance and operations coordinated through `AdminManager` and `ProtocolManager`, enabling safe batch role changes, delayed admin transfers, and emergency recovery.
* Deployments and integrations: Paseo Asset Hub testnet (`chainId 420420422`); off-chain indexer records on-chain events and metrics to Supabase for analytics and the frontend dashboard.

**Key Contracts**

| Contract               | Function                                                                        | Security Features                                      |
| ---------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------ |
| PARITYProtocol.sol     | Mint/burn controller; NAV allocation/bonus; user state; events                  | Role-based access; deadlines/min-outs; circuit breaker |
| ReserveVault.sol       | Asset custody; ratio checks; available liquidity                                | Role-based access; minimum ratio enforcement           |
| NAVVault.sol           | NAV holdings; contributeToNAV; distributeNAVBonus; getNAVBonus                  | Role-based access; composition targets                 |
| MultiOracleSystem.sol  | Aggregated pricing; consensus; outlier rejection; freshness; emergency fallback | Oracle/Operator roles; health checks                   |
| PMMTradingExecutor.sol | Oracle-priced swaps and quotes with dynamic slippage/fees                       | Operator/Manager roles; deadlines/min-outs             |
| SurplusManager.sol     | Detects and transfers surplus collateral above threshold                        | Operator/Manager roles; ratio maintenance              |
| AdminManager.sol       | Role admin; contract registration; batch grant/revoke; delayed admin transfer   | 24h admin transfer; emergency recovery                 |
| ProtocolManager.sol    | Coordinates protocol components                                                 | Cross-contract role management                         |
| ParityBonusPolicy.sol  | Computes dynamic burn percentage (premium or contribution)                      | Caps and safeguards                                    |
| MintingLogic.sol       | Mint computation and NAV allocation                                             | Internal                                               |
| BurningLogic.sol       | Burn computation and NAV bonus                                                  | Internal                                               |
| TestFaucet.sol         | Testnet token faucet utility                                                    | Rate limits                                            |

**Data Flow**

* **Mint path:**
  User → `PARITYProtocol` (oracle validation, fee) → `ReserveVault` (custody) + `NAVVault` (NAV contribution) → emit `PARITYMinted` → indexer → Supabase → frontend update.
* **Burn path:**
  User → `PARITYProtocol` (bonus policy) → `BurningLogic` → `ReserveVault` (liquidity) → `NAVVault` (NAV bonus) → emit `PARITYBurned` → indexer → Supabase → UI.
* **Swap path:**
  User → `PMMTradingExecutor` → oracle quote/fee → `ReserveVault` provides liquidity → emit `PMMSwap` → indexer → UI.
* **Surplus maintenance:**
  `SurplusManager` periodically transfers excess collateral to maintain ratio health.

### Ecosystem Fit

| W3F Priority           | Contribution                                                                         |
| ---------------------- | ------------------------------------------------------------------------------------ |
| **DOT/KSM Demand**     | Requires KSM, DOT, or dUSD to mint/burn; drives on-chain demand.                     |
| **dUSD Adoption**      | dUSD is the primary settlement asset; NAV bonuses prioritise dUSD.                   |
| **Polkadot-Native**    | Built for Asset Hub EVM; live on Paseo testnet; XCM-backed data integration planned. |
| **Reusable Primitive** | Open APIs, SDK, and templates; Hardhat suite; forkable architecture.                 |
| **Testable & Usable**  | Live PoC with full UI and indexer analytics.                                         |

**No token. No leverage. No gambling.**
This is **on-chain relative performance market infrastructure.**

## Team :busts_in_silhouette:

### Team members

* **Richard Welsh** — Project Lead
* **Bharath** — Full-Stack Blockchain Developer & Product Architect
* **Frode Aschim** — Strategy, Logic and Trading Oversight

**Unpaid Advisory**
* **Daniel Olano** — DAO Infrastructure, Scalability, and Interoperability
* **Phil Mitchelson** — Marketing, Growth, Commercial  

### Contact

* **Contact Name:** Richard Welsh
* **Contact Email:** richard@decent.partners
* **Website:** [https://decent.partners](https://decent.partners)

### Legal Structure

* **Registered Address:** 15 West Street, Brighton, England, BN1 2RL
* **Registered Legal Entity:** Decent Partners Ltd (UK)

### Team's experience

- Richard Welsh is Managing Partner of Decent Partners, Kabocha parachain steward, Polkadot ICO investor, and cofounder of Copa90.
- Bharath is an end-to-end protocol and frontend developer, Edgeware contributor, and founder of Limewheels Pvt Ltd & Coorg Delivery Pvt Ltd.
- Frode Aschim is a trader and market maker, founder of Ether Capital Ltd and Range Capital Partners.

**Unpaid advisor**  

- Daniel Olano is the founder of Virto Network and the Krievo parachain.
- Phil Mitchelson is currently VP of Growth at Superbet 

### Team Code Repos

* TO DO [https://github.com/decent-partners/parity-protocol-evm](https://github.com/decent-partners/parity-protocol-evm)
* TO DO [https://github.com/decent-partners/parity-ui](https://github.com/decent-partners/parity-ui)

### Team LinkedIn Profiles (if available)

* [Richard Welsh](https://www.linkedin.com/in/richardwelsh)
* [Bharath](https://www.linkedin.com/in/bharathcoorg)
* [Frode Aschim](https://www.linkedin.com/in/frode-aschim-9936a912)
* [Phil Mitchelson](https://www.linkedin.com/in/phil-mitchelson)


## Development Status :open_book:

The team have spent around 6 months in R&D on the project and are close to finalising the core contracting logic, operations and fee structures, but there are few decisions to be made on rebalancing systems and the contracts will need to be audited. We also want to enable the broader community to test and improve the project ahead of launch. 

* Proof of Concept live on Paseo Asset Hub
* Core contracts 90% complete
* Oracle aggregation tested
* Rebalancing logic in final R&D phase
* Testing, community feedback, and contract audits in progress
* DAO entity formation for commercialisation and go to market

## Development Roadmap :nut_and_bolt:

### Overview

* **Total Estimated Duration:** 12 weeks
* **Full-Time Equivalent (FTE):** 2.5
* **Total Costs:** 30,000 USD
* **DOT %:** 50%

| Number | Deliverable                                                                                                                                                    | Specification        |
| ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- |
| **1.** | Public repo, testnet deployments (Paseo AH), oracle integration, indexer setup (Supabase), monitoring scripts                                                  | 4 weeks / 10,000 USD |
| **2.** | Protocol rebalancing logic, reserve stability via lending protocol/DEX integration, full test suite, developer documentation, PMM swap examples, fork template | 4 weeks / 10,000 USD |
| **3.** | NatSpec + tutorial, mainnet deploy (Asset Hub), full dUSD integration, full Virto Connect integration, DAO legal wrapper setup (Wyoming DAO LLC / UNA/DUNA)                 | 4 weeks / 10,000 USD |

## Future Plans

* Publish open audit on GitHub
* Propose audit via [PAL bounty](https://dotpal.io/) or Kusama Treasury
* Propose bug bounty and testing incentives via Kusama Treasury
* Maintain public repo and template forks
* Submit for **W3F Maintenance Grant** for ongoing updates

## Referral Program (optional) :moneybag:

(empty)

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?**
Web3 Foundation Website and internal developer community channels.

**Summary:**
Parity Protocol is open, auditable **EVM infrastructure**, built natively for the **Kusama ecosystem** to enable new forms of synthetic exposure and composable DeFi primitives using **dUSD**.
