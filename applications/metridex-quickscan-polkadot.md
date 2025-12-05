# Metridex QuickScan for Polkadot

- **Team Name:** Metridex
- **Payment Details:**
  - **DOT**: 14pXBrSmwcJHdDghpC6zdymsTsbckC6ggzmCek7YNPHBjdMR
  - **Payment**: 14pXBrSmwcJHdDghpC6zdymsTsbckC6ggzmCek7YNPHBjdMR (USDC)
- **[Level](https://grants.web3.foundation/docs/Introduction/levels):** 2

## Project Overview :page_facing_up:

### Overview

- **Tagline:** On-chain risk and intel layer for Polkadot tokens and parachain assets, delivered via Telegram bot and simple APIs.

- **Brief description:**  
  Metridex QuickScan is a lightweight risk and intelligence engine that turns raw on-chain data into a human-readable risk snapshot for a given asset or account.  
  Today, Metridex is live as a Telegram bot and HTML report generator focused on EVM networks (Ethereum, BNB Chain, Polygon). It aggregates signals such as liquidity, LP-lock status, holder concentration, contract age and basic website/domain checks.  

  This grant proposes to **extend Metridex QuickScan to Polkadot, AssetHub and selected parachains**, exposing Substrate-specific risk signals through:
  - a reusable Substrate/Polkadot risk engine library,
  - a QuickScan integration that can be consumed by the existing Telegram bot,
  - and a simple HTTP API + demo page for the Polkadot ecosystem.

- **Relation to Substrate / Polkadot / Kusama:**  
  We will build dedicated data ingestion and risk-scoring modules for:
  - Polkadot and AssetHub (accounts and asset-level intel),
  - at least two parachains (initially Moonbeam and Astar),

  using standard Substrate RPC, metadata and indexing patterns. The engine will:
  - parse on-chain data (balances, transfers, identity flags, multisig/vesting where relevant),
  - surface ecosystem-specific signals (e.g. treasury / governance / crowdloan history where applicable),
  - and map them into a unified QuickScan risk model already used on EVM networks.

- **Why our team is interested:**  
  Metridex is being built as a chain-agnostic “risk & intel” layer targeting everyday users and small communities, not only professional funds. We want to:
  - reuse our existing QuickScan model and UX,
  - bring it natively to the Polkadot ecosystem,
  - and keep the Substrate/Polkadot risk module **open-source** so that wallets, bots and dashboards can integrate it without vendor lock-in.

### Project Details

We propose the following architecture and components:

- **Core Substrate/Polkadot QuickScan module**
  - A small, well-documented library that:
    - connects to a Polkadot or parachain node (full node or public endpoint),
    - fetches key on-chain data for a given account / asset / token representation,
    - normalises the data into a generic internal model used by Metridex QuickScan.

- **Risk model & scoring**
  - Extend the existing QuickScan scoring model (used on EVM) with Polkadot-specific dimensions, such as:
    - basic checks on extrinsics and transfers history,
    - identity flags (where present),
    - crowdloan / treasury interactions where available,
    - validator and governance-related information for relevant account types.
  - Each QuickScan will produce:
    - a simple risk score (e.g. Low / Medium / High),
    - a list of “Why++” reasons explaining the score in plain language.

- **Polkadot/AssetHub adapters**
  - Components that:
    - understand native token and asset representations (e.g. AssetHub assets),
    - map them to our internal asset model,
    - and provide a standard interface for the QuickScan engine and Telegram bot.

- **Parachain adapters (Moonbeam, Astar to start)**
  - Small adapters that:
    - mount on top of each parachain’s RPC and indexing layer,
    - expose account/asset information necessary for the risk model,
    - and feed that into the same QuickScan pipeline.

- **API + Telegram integration**
  - Expose the new Polkadot QuickScan capabilities through:
    - an HTTP endpoint in our existing backend (e.g. `/quickscan/polkadot`),
    - the Telegram bot (new “Polkadot mode” and chain autodetection where possible),
    - and a simple public demo page (HTML) that shows a QuickScan for a given account/asset.

We will prioritise:
- minimal dependencies (standard RPC, no heavy custom indexers unless necessary),
- clear documentation and examples for integrators (wallets, bots, dashboards),
- and a structure that allows further parachains to be added later with relatively small incremental effort.

### Ecosystem Fit

- **Where and how does the project fit into the ecosystem?**  
  Metridex QuickScan for Polkadot sits between raw node data and end-user interfaces. It does not aim to replace explorers or existing analytics dashboards. Instead it:
  - aggregates a small set of risk-relevant signals for assets and accounts,
  - compresses them into a concise, human-readable summary (risk score + key reasons),
  - and delivers them via Telegram and a simple web/API layer.

  It is intended to be:
  - embedded inside Telegram communities (trading chats, ecosystem channels),
  - integrated by wallets and dashboards that want a “one-tap risk snapshot” without building their own engine.

- **Who is the target audience?**
  - Retail users and small traders who interact with tokens and assets via Telegram links and simple UIs.
  - Parachain and ecosystem teams that want:
    - better visibility into the risk profile of assets circulating in their community,
    - tooling to pre-screen assets that they list, promote or monitor.
  - Bot and wallet builders who want to add risk snapshots into their UX with minimal engineering time.

- **What need(s) does the project meet? How were they identified?**  
  Across EVM ecosystems we see a very common pattern:
  - users interact with new assets quickly (links in chats, social media, etc.),
  - they rarely have time or expertise to investigate LP-locks, holders, governance or code audits,
  - and existing tools are often either too complex or focused on a single chain.

  On Polkadot, there is a growing number of assets, parachains and communities. However, **simple, opinionated risk snapshots** for everyday users are still limited.  
  We identified the need by:
  - operating and iterating Metridex QuickScan as a Telegram bot on EVM chains,
  - watching user behaviour (most interactions are short, mobile-first, and often via chats),
  - and monitoring discussions in communities where token risk is often evaluated manually or not at all.

- **Similar projects in the Substrate / Polkadot / Kusama ecosystem**  
  There are explorers and analytics solutions in the Polkadot ecosystem, but we are not aware of a project that:
  - focuses specifically on **quick risk snapshots** for assets/accounts,
  - provides a reusable **open-source risk engine** with a simple API,
  - and is optimised for **Telegram and lightweight integrations**.

  Where overlaps exist (e.g. dashboards that show some risk-related metrics), our differentiation is:
  - a chain-agnostic QuickScan model already tested on EVM,
  - strong UX focus (Telegram + concise HTML reports),
  - and an explicit goal to make the Substrate/Polkadot risk layer open and reusable.

- **Similar projects in related ecosystems**  
  In EVM ecosystems there are tools and bots that provide partial risk intel (honeypot checkers, contract scanners, etc.), but:
  - they are often chain-specific,
  - or closed-source and tightly coupled to a single commercial product.

  Metridex aims to:
  - keep the Substrate/Polkadot risk engine open-source,
  - provide a minimal dependency surface (standard RPC, no proprietary backends),
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
- **Registered Legal Entity:** None yet – a dedicated legal entity will be created once the project grows and recurring revenue justifies incorporation.

### Team's experience

- Several years of experience building:
  - data-driven applications,
  - Telegram-based tools and automation,
  - multi-chain analytics with on-chain and off-chain data sources.
- Metridex QuickScan has been developed and iterated as:
  - a Telegram bot for EVM chains (Ethereum, BNB Chain, Polygon),
  - an HTML report generator with more detailed analytics,
  - and a watchlist/alerts layer for selected addresses.

The current focus is to:
- harden the core QuickScan engine,
- extend it beyond EVM into ecosystems like Polkadot,
- and turn it into a sustainable product rather than a side experiment.

### Team Code Repos

- https://github.com/omarakhmedov-web/metridex-showcase
- https://github.com/omarakhmedov-web/metridex-website

Please also provide the GitHub accounts of all team members (current main developer):

- https://github.com/omarakhmedov-web

### Team LinkedIn Profiles (if available)

- n/a (can be provided during KYC/KYB if needed)

## Development Status :open_book:

The existing Metridex QuickScan product (EVM-focused) is already implemented and live:

- **QuickScan engine and bot:**
  - Telegram bot that accepts contract addresses / tokens,
  - performs on-chain checks (liquidity, LP-locks, holders, basic website checks),
  - and returns a short risk summary plus “More details” HTML report.

- **HTML report generator:**
  - Backend that renders a detailed report (signals, LP-lock info, links to explorers, etc.),
  - currently used as a deep-dive view for EVM assets.

- **Existing repositories and prior work:**
  - `metridex-showcase` GitHub repository with examples and documentation,
  - `metridex-website` for the public-facing landing and documentation pages.

Research and experiments already done:

- Evaluated different data sources and APIs for EVM chains,
- Designed a generic internal model for QuickScan signals (risk reasons, LP-lock data, etc.),
- Implemented a production deployment (Telegram + backend) and iterated with real users,
- Started exploring Substrate/Polkadot RPC and ecosystem tooling to understand the shape of on-chain data and integration options.

The Polkadot integration proposed in this application is a **new, chain-specific module** building on top of this existing work.

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 3 months
- **Full-Time Equivalent (FTE):** 1.5 FTE on average
- **Total Costs:** 20,000 USD
- **DOT %:** 60% of Total Costs to be paid in (vested) DOT

### Milestone 1 Example — Basic functionality

- **Estimated duration:** 1.5 months  
- **FTE:** 1.5  
- **Costs:** 10,000 USD  

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | All new code produced under this milestone (Substrate/Polkadot QuickScan module, adapters and related tooling) will be released under the Apache 2.0 license in a public GitHub repository. |
| **0b.** | Documentation | We will provide inline documentation and a short “Getting started with Metridex QuickScan for Polkadot” guide that explains how to run the module, connect it to a node, and request a single-asset QuickScan. |
| **0c.** | Testing and Testing Guide | Core functions (data ingestion, risk scoring and normalisation) will be covered by unit tests and basic integration tests. A testing guide will describe how to run the test suite locally. |
| **0d.** | Docker | We will provide a Dockerfile (and, if helpful, a simple docker-compose setup) that runs the QuickScan backend with the Polkadot module enabled and exposes the HTTP API for testing. |
| 1. | Substrate data ingestion library | Implement a small, focused library that connects to a Polkadot node (and optionally AssetHub) and fetches the on-chain data needed for QuickScan: balances, transfers, basic account metadata and identity flags where available. |
| 2. | Polkadot/AssetHub QuickScan adapter | Implement an adapter that maps Polkadot/AssetHub assets and accounts into the generic Metridex QuickScan internal model, ready to be consumed by the Telegram bot and HTML report generator. |
| 3. | Risk model extension for Polkadot | Define and implement additional risk rules specific to Polkadot/AssetHub (e.g. basic checks around transfers, identity flags, treasury/governance interactions where applicable) and integrate them into the existing QuickScan scoring pipeline. |
| 4. | HTTP endpoint and CLI | Expose a simple HTTP endpoint (e.g. `/quickscan/polkadot`) and a minimal CLI tool that trigger a QuickScan for a given account/asset and return a JSON response with risk score and reasons. |
| 5. | Public demo page | Implement a basic HTML page that calls the new endpoint and shows a human-readable QuickScan result for Polkadot/AssetHub assets (suitable as a public demo for the ecosystem). |

### Milestone 2 Example — Additional features

- **Estimated Duration:** 1.5 months  
- **FTE:** 1.5  
- **Costs:** 10,000 USD  

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | All additional code (parachain adapters, governance/validator intel, Telegram integration changes) will be released under Apache 2.0 in the same public repository. |
| **0b.** | Documentation | Documentation will be extended to cover parachain adapters and integrator flows, including a short “Integrate Metridex QuickScan Polkadot module into your bot or wallet” guide. |
| **0c.** | Testing and Testing Guide | Unit and integration tests will be extended to cover parachain adapters and governance/validator-related checks. The testing guide will be updated accordingly. |
| **0d.** | Docker | The Docker setup will be updated so that all supported chains (Polkadot, AssetHub and selected parachains) can be exercised with a single command, using public RPC endpoints where possible. |
| **0e.** | Article | We will publish an article that explains the Metridex QuickScan integration for Polkadot and parachains, describes typical risk signals, and walks through several real examples. The article will be published on a public platform (e.g. the Metridex website and/or a developer-oriented medium). |
| 1. | Parachain adapters (Moonbeam & Astar) | Add adapters for at least two parachains (initially Moonbeam and Astar) that reuse the same internal QuickScan model while accounting for chain-specific details. Each adapter will be documented with configuration and usage examples. |
| 2. | Governance & validator intel (where applicable) | For chains where governance and validator information is easily accessible, we will add lightweight checks (e.g. whether an account is a known validator, treasury-related, or involved in governance) and surface them as additional QuickScan reasons. |
| 3. | Telegram bot integration | Extend the existing Telegram bot so that it can: (a) detect Polkadot/AssetHub/parachain context where possible, (b) route QuickScan requests to the new module, and (c) render Polkadot-specific risk reasons in a clear, concise way for end users. |
| 4. | Public API documentation | Provide a short API reference for the new endpoints and data structures, enabling wallets, bots and dashboards to integrate Polkadot QuickScan results programmatically. |
| 5. | Example integrations | Implement one or two minimal example integrations (for example, a simple bot or script) that demonstrate how third parties can call the QuickScan API for Polkadot and parachains and embed results into their own UX. |

## Future Plans

In the short term we plan to:

- maintain the Substrate/Polkadot QuickScan module as part of the public Metridex codebase,
- add more parachain adapters based on ecosystem interest and feedback,
- and work with selected wallets, bots and dashboards that want to integrate simple risk snapshots into their UX.

For long-term sustainability:

- Metridex will likely follow a dual model:
  - **open-source base engine and connectors** (including the Polkadot module funded by this grant),
  - with optional **paid tiers** for heavier workloads (alerts, watchlists, team analytics), without locking in the open module itself.
- As the project grows and usage stabilises, we intend to formalise the legal entity and explore:
  - revenue-sharing arrangements with larger communities,
  - integration partnerships with wallets and dApps,
  - and potentially additional chains where the same QuickScan model is useful.

The overall goal is to turn Metridex into a sustainable, chain-agnostic risk and intel product with Polkadot as one of the first-class ecosystems.

## Referral Program (optional) :moneybag:

- **Referrer:** n/a
- **Payment Address:** n/a

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation website and public documentation about the Grants Program.

Additional context:

- Metridex has been developed as a chain-agnostic risk and intel layer with an emphasis on fast, opinionated results and simple UX (Telegram + HTML reports).
- We have submitted several grant applications to other ecosystems, but no external funding has been secured yet; all current Metridex development has been self-funded.
- The existing EVM-focused MVP is public and will serve as the foundation for this Polkadot integration.
- We see Polkadot and its parachains as a natural next step and want to keep the Substrate/Polkadot risk module open and reusable for the wider ecosystem.
