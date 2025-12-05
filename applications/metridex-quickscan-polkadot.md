# Metridex QuickScan for Polkadot

- **Team Name:** Metridex
- **Payment Details:**
  - **DOT**: 14pXBrSmwcJHdDghpC6zdymsTsbckC6ggzmCek7YNPHBjdMR
  - **Payment**: 14pXBrSmwcJHdDghpC6zdymsTsbckC6ggzmCek7YNPHBjdMR (USDC)
- **[Level](https://grants.web3.foundation/docs/Introduction/levels):** 2
- **Status:** Draft

## Project Overview :page_facing_up:

### Overview

- **Tagline:** On-chain risk and intel layer for Polkadot tokens and parachain assets, delivered via Telegram bot and simple APIs.
- **Brief description:**  
  Metridex QuickScan is a lightweight risk & intel engine that gives traders and builders a fast, opinionated snapshot of a token or contract: liquidity security, holder concentration, contract age, basic website/domain checks and LP-lock information.  
  Today, Metridex is live as a Telegram bot and HTML report generator focused on EVM chains (Ethereum, BNB Chain, Polygon, Base). With this grant, we will add **first-class support for Polkadot, AssetHub and selected parachains**, exposing Substrate-specific risk signals through:
  - a reusable Substrate/Polkadot risk engine library,
  - a QuickScan integration that can be consumed by the existing Telegram bot,
  - and a simple HTTP API + demo page for the Polkadot ecosystem.
- **Relation to Substrate / Polkadot / Kusama:**  
  We will build dedicated data ingestion and risk-scoring modules for:
  - Polkadot and AssetHub (account and asset-level intel),
  - at least two parachains (initially Moonbeam and Astar),  
  using standard Substrate RPC, metadata and indexing patterns. The engine will:
  - parse on-chain data (balances, transfers, identity flags, multisig/vesting where relevant),
  - surface ecosystem-specific signals (e.g. treasury / governance / crowdloan history where applicable),
  - and map them into a unified QuickScan risk model already used on EVM networks.
- **Why our team is interested:**  
  Metridex is being built as a chain-agnostic “risk & intel” layer for retail and small desks who mostly live inside Telegram. Polkadot has a rich, multi-parachain environment but relatively few simple, opinionated risk tools aimed at everyday users. We want to:
  - leverage our existing QuickScan engine and UX,
  - bring Polkadot and its parachains into the same “one-tap risk snapshot” experience,
  - and open-source the Substrate-specific parts so that wallets, bots and dashboards can reuse them.

### Project Details

We already have a working QuickScan implementation for several EVM chains. Under this grant we will add a Polkadot-specific layer with the following components:

- **Mockups / UI components**
  - Reuse existing Telegram bot layout (summary card + “More details” view) and adapt labels for Polkadot/AssetHub.
  - Simple HTML report and/or web demo page for several Polkadot ecosystem assets (e.g. DOT, AssetHub tokens, parachain assets).

- **Data models / API specifications**
  - Unified **RiskSnapshot** data model:
    - chain_id, asset identifier (e.g. DOT, AssetHub asset, parachain asset),
    - liquidity & volume proxies (where applicable),
    - holder concentration and “whale vs. retail” breakdown where the data is available,
    - account/asset “age” (first appearance on chain),
    - flags for suspicious patterns (e.g. sudden supply changes, one-sided flows, unusual treasury interactions),
    - basic website/domain intel when a dApp or token site is linked.
  - **HTTP API**:
    - `GET /api/quickscan/polkadot/{identifier}` returning a JSON RiskSnapshot,
    - `GET /api/sample/polkadot` serving a small set of canned examples for reviewers.

- **Technology stack**
  - **Backend:** Rust and/or TypeScript for Substrate/Polkadot integration (using polkadot-js API and standard Substrate RPC).
  - **Existing engine glue:** Python/TypeScript used in the current Metridex QuickScan implementation.
  - **Telegram bot / frontend:** Existing Metridex Telegram bot and HTML report renderer (Flask / Gunicorn server with HTML templates).
  - **Database / cache:** Simple caching layer (e.g. Redis or in-process cache) for recently scanned Polkadot assets to keep latency low.

- **Documentation of core components & architecture**
  - High-level architecture diagram showing:
    - Substrate RPC / polkadot-js integration,
    - risk engine library,
    - Telegram bot adapter,
    - HTTP API and report generator.
  - Developer-oriented docs describing how to:
    - add a new parachain adapter,
    - extend the list of risk checks and signals,
    - integrate the library into another bot or UI.

- **Prior work / PoC**
  - Existing EVM-oriented QuickScan engine (Telegram bot + HTML reports) deployed at:
    - Website: https://metridex.com
    - Bot: https://t.me/MetridexBot
  - Current implementation already provides:
    - multi-chain QuickScan for several EVM networks,
    - LP-lock “lite” analysis,
    - WHOIS / SSL / Wayback-style website checks,
    - HTML report generation and basic alerts.

- **Out of scope / limitations**
  - No token issuance, liquidity management or financial instruments.
  - No complex off-chain order matching or trading functionality.
  - No DAO tooling or governance frameworks beyond reading existing on-chain governance data where applicable.
  - We do **not** intend to build a full block explorer or full-featured portfolio manager; this grant focuses on:
    - reusable risk / intel library for Polkadot and selected parachains,
    - integration into the existing Metridex UX (Telegram + HTML),
    - and a simple API surface for third-party integrations.

### Ecosystem Fit

- **Where and how does the project fit into the ecosystem?**  
  Metridex QuickScan for Polkadot sits between raw node data and end-user UIs. It does not compete with explorers; instead it:
  - aggregates a small set of risk-relevant signals for assets and accounts,
  - transforms them into a concise, human-readable summary (risk score + key reasons),
  - and delivers them via Telegram and a simple web/API layer.
  It is intended to be:
  - embedded inside Telegram communities (trading chats, ecosystem channels),
  - integrated by wallets and dashboards that want a “one-tap risk snapshot” without building their own engine.

- **Target audience**
  - Retail users and small traders who primarily live in Telegram and interact with tokens via links and contract IDs.
  - Parachain teams and ecosystem projects that want to:
    - embed risk information into their communities,
    - pre-screen assets they list, showcase or track.
  - Wallet, dApp and dashboard developers who need a simple risk layer but do not want to maintain a full risk engine.

- **Needs addressed**
  - Make Polkadot/parachain assets more approachable for non-expert users by showing:
    - simple, opinionated risk signals instead of raw blockchain data,
    - consistent UX across EVM and Substrate ecosystems.
  - Provide a reusable library so that each Polkadot project does not need to reinvent “basic risk checks” for their own UI.
  - Improve transparency for Telegram-centric user flows (where links to assets often circulate without context).

- **How needs were identified (evidence)**
  - Internal work building and running Metridex QuickScan on EVM chains showed strong user preference for:
    - quick, opinionated “traffic-light” style risk views,
    - very low friction UX (Telegram, one tap, no account).
  - We observed multiple discussions in broader crypto communities around:
    - rug-pulls, opaque liquidity, unclear ownership and website safety,
    - difficulty in understanding token and contract risk without advanced tools.
  - Polkadot ecosystem feedback (via public channels and grant programs) often highlights a need for:
    - better tooling for onboarding non-expert users,
    - more ecosystem-specific, dApp-level analytics.

- **Similar projects in Substrate / Polkadot / Kusama**
  - There are explorers and analytics dashboards in the Polkadot ecosystem that expose rich data, but we are not aware of a project that:
    - focuses specifically on **opinionated risk snapshots**,
    - is designed first for Telegram-based user flows,
    - and provides a small, reused library for risk checks that can be plugged into bots and simple UIs.
  - Our differentiation:
    - chain-agnostic QuickScan model already proven on EVM,
    - strong focus on UX (Telegram + concise HTML reports),
    - an explicit goal to open-source the Substrate/Polkadot layer for reuse.

- **Similar projects in related ecosystems**
  - On EVM side there are several tools and bots that provide partial risk intel (e.g. contract scanners or honeypot checkers). However:
    - they are often chain-specific,
    - or closed-source and tied to a single commercial product.
  - Metridex aims to:
    - keep the Substrate/Polkadot risk engine open,
    - provide a minimal dependency surface (standard Substrate RPC),
    - and keep integration friction low for Telegram communities and lightweight dashboards.

## Team :busts_in_silhouette:

### Team members

- **Omar Ahmad** – Founder & Lead Developer (backend, data pipelines, product).
- Occasional part-time contributors (design, front-end, infrastructure) as needed.

### Contact

- **Contact Name:** Omar Ahmad
- **Contact Email:** contact@metridex.com
- **Website:** https://metridex.com

### Legal Structure

- **Registered Address:** Not yet incorporated; currently applying as an individual builder (pre-incorporation).
- **Registered Legal Entity:** None yet – a dedicated legal entity (likely in the EU) is planned as the project grows and recurring revenue justifies incorporation.

### Team's experience

- Several years of experience building:
  - data-driven applications,
  - Telegram-based tools and automation,
  - multi-chain analytics with on-chain and off-chain data sources.
- Metridex QuickScan has been developed and iterated as:
  - a Telegram bot for token risk snapshots,
  - an HTML report generator with WHOIS/SSL/Wayback-style checks,
  - a multi-chain engine for Ethereum, BNB Chain, Polygon and Base.
- The current focus is to extend this experience to Substrate/Polkadot/Kusama and provide a high-quality, opinionated risk layer that others can reuse.

No prior grants from Web3 Foundation have been received.

### Team Code Repos

- https://github.com/omarakhmedov-web/metridex-showcase
- https://github.com/omarakhmedov-web/metridex-website

Please also provide the GitHub accounts of all team members (current main developer):

- https://github.com/omarakhmedov-web

### Team LinkedIn Profiles (if available)

- n/a (can be provided during KYC/KYB if needed)

## Development Status :open_book:

Metridex QuickScan already exists as a working product focused on EVM chains:

- **Website:** https://metridex.com  
- **Telegram bot:** https://t.me/MetridexBot  
- **Showcase / repo:** https://github.com/omarakhmedov-web/metridex-showcase  

The current codebase includes:

- a risk engine that aggregates on-chain and off-chain signals for EVM networks,
- LP-lock “lite” analysis and basic website/domain intel,
- HTML report generation and a Telegram bot UI.

Under this grant we will:

- add a new Substrate/Polkadot module to the engine,
- implement Polkadot/AssetHub/parachain adapters,
- and ship them as a dedicated library and Telegram / HTTP integrations.

There is no existing Web3 Foundation grant related to this work.

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 3 months
- **Full-Time Equivalent (FTE):** 1.5 FTE on average
- **Total Costs:** 20,000 USD
- **DOT %:** 60% of total costs to be paid in (vested) DOT

### Milestone 1 — Core Polkadot & AssetHub QuickScan

- **Estimated duration:** 1.5 months
- **FTE:** 1.5
- **Costs:** 10,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | All new code produced under this milestone will be released under the Apache 2.0 license in a public GitHub repository. |
| **0b.** | Documentation | We will provide inline documentation and a developer-oriented README explaining how to run the Substrate/Polkadot QuickScan module, how to connect to a node, and how to request a single-asset risk snapshot. |
| **0c.** | Testing and Testing Guide | Core functions (data ingestion, risk calculation and API endpoints) will be covered by unit tests and basic integration tests. A guide will describe how to run tests locally. |
| **0d.** | Docker | A Dockerfile (and optional docker-compose configuration) will be provided to run the QuickScan backend (including the Polkadot module) and expose the HTTP API for testing. |
| 1. | Substrate data ingestion library | Implement a small library (Rust and/or TypeScript) that connects to Polkadot and AssetHub via Substrate RPC / polkadot-js, and exposes high-level methods to fetch balances, transfers, asset metadata and basic account intelligence (age, activity, identity flags where relevant). |
| 2. | Polkadot QuickScan risk engine module | Implement a risk-scoring module that transforms Substrate-level data into the internal Metridex RiskSnapshot model (e.g. basic risk score + key signals covering liquidity proxies, holder distribution where possible, account/asset age and suspicious patterns). |
| 3. | HTTP API endpoints | Expose at least two endpoints: `GET /api/quickscan/polkadot/{identifier}` for live scans and `GET /api/sample/polkadot` for sample outputs. Responses will be documented with example payloads. |
| 4. | Telegram bot beta integration | Extend the existing Metridex Telegram bot to accept Polkadot/AssetHub identifiers and display a basic QuickScan summary, using the new module. Configuration and usage instructions will be documented. |

### Milestone 2 — Parachain support, governance intel and article

- **Estimated Duration:** 1.5 months
- **FTE:** 1.5
- **Costs:** 10,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | All additional code (parachain adapters, governance module, UI updates) will be released under Apache 2.0 in the same public repository. |
| **0b.** | Documentation | Documentation will be extended to cover parachain adapters, governance-related signals and how to add a new parachain. We will provide a short “How to integrate Metridex QuickScan Polkadot module into your bot/UI” guide. |
| **0c.** | Testing and Testing Guide | Unit and integration tests will be expanded to cover parachain data paths and governance signals. The testing guide will be updated accordingly. |
| **0d.** | Docker | The Docker setup will be updated so that all new functionality (parachains and governance intel) can be tested with a single command, using public endpoints where possible. |
| **0e.** | Article | We will publish an article that explains the architecture and capabilities of Metridex QuickScan for Polkadot and parachains, and walks through several real examples. The article will be aimed at developers and ecosystem teams and published on a public platform (e.g. the Metridex website and/or a developer-oriented medium). |
| 1. | Parachain adapters (Moonbeam & Astar) | Add adapters for at least two parachains (Moonbeam and Astar), implementing asset/account risk snapshots using the same RiskSnapshot model. Each adapter will be documented with examples. |
| 2. | Governance & validator intel (where applicable) | For chains where governance and validator information is readily accessible, add simple signals such as: whether an address has participated in governance, holds specific roles, or interacts with treasury/council where that data is available. These signals will be surfaced as part of the QuickScan output. |
| 3. | Enhanced Telegram & HTML UX | Improve the Telegram and HTML report presentation for Polkadot/parachain assets (clear labelling of network, risk score and top signals). At least 3–5 well-known ecosystem assets will be used as public examples, accessible via the HTTP API and demo HTML reports. |

## Future Plans

In the short term we plan to:

- maintain the Substrate/Polkadot QuickScan module as part of the public Metridex codebase,
- add more parachain adapters based on ecosystem interest,
- and work with selected wallets, bots and dashboards that want to integrate simple risk snapshots into their UX.

For long-term sustainability:

- Metridex will likely follow a dual model:
  - **open-source base engine and connectors** (including the Polkadot module funded by this grant),
  - with optional **paid tiers** for heavier workloads (alerts, watchlists, team analytics), without locking in the open module itself.
- As the project grows and usage stabilises, we intend to formalise the legal entity and explore:
  - revenue-sharing arrangements with larger communities,
  - integration partnerships with wallets and dApps,
  - and additional grants / co-funding for extending coverage to more chains and features.

Our long-term intention is to keep Polkadot support first-class and align future roadmap items (more parachains, more signals, better UX) with community feedback.

## Referral Program (optional) :moneybag:

- **Referrer:** n/a
- **Payment Address:** n/a

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation website and public documentation around the Grants Program.

Additional context:


- Metridex has been developed as a chain-agnostic risk and intel layer with an emphasis on fast, opinionated results and simple UX (Telegram + HTML reports).
- We have submitted several grant applications to other ecosystems (e.g. L2s and DEX ecosystems) but have not received any funding yet; all current Metridex development has been self-funded.
- The existing EVM-focused MVP is public and will serve as the foundation for this Polkadot integration.
- We see Polkadot and its parachains as a natural next step and would like to make the Substrate/Polkadot risk module open and reusable for the wider ecosystem.
  - build a high-quality, open-source Substrate/Polkadot risk layer,
  - and ship a practical, immediately usable integration for both users and builders.
