# Unified Liquidity Balance API

- **Team Name:** Polimec Foundation
- **Payment Details:**
  - **DOT**: 15oHo9SyutMWvHKGZvWsMvCfEmGpbLLjkvydN1YYMRjM1wFN
  - **USDC**: 15oHo9SyutMWvHKGZvWsMvCfEmGpbLLjkvydN1YYMRjM1wFN
- **Level:** 2

## Project Overview :page_facing_up:

### Overview

- **Tagline:** Real‑time cross‑chain balance monitoring via SSE over HTTPS
- **Description:** The Unified Liquidity Balance API is a real‑time balance tracking solution for Polkadot SDK-based chains. It provides a single, unified Server‑Sent Events (SSE) endpoint to monitor user balances across multiple parachains without polling or deep integration with Polkadot‑specific libraries.
- **Integration:** Uses the Polkadot API to connect to Polkadot SDK-based chains (Polkadot, Asset Hub, Polimec, Hydration, etc.), deployed on Cloudflare Workers with Durable Objects to maintain state at the edge.
- **Team Interest:** We aim to lower the barrier to building cross‑chain dApps by abstracting multi‑chain balance monitoring into a familiar web streaming interface, enabling web developers to adopt Polkadot technologies more easily.

### Project Details

- **Mockups / UI:** This is a backend service exposing SSE endpoints; no front‑end mockups required.
- **Data Models / API Specification:**
  - **Example Endpoint:** GET /balances/{accountId}
  - **Event types:**
    - `heartbeat`
    - `accountId`
    - `{tokenSymbol}` (e.g., `DOT`)
  - **Balance Event Payload:**
    ```json
    {
      "total": "string",
      "chains": {
        "Polkadot": "string",
        "AssetHub": "string",
        "Polimec": "string",
        "Hydration": "string"
      }
    }
    ```
- **Technology Stack:**
  - Cloudflare Workers (the Worker's code will be in TypeScript)
  - Cloudflare Durable Objects
  - [Polkadot-API](https://github.com/polkadot-api/polkadot-api) (PAPI) for chain connections
  - RxJS for reactive streams
- **PoC / MVP:**
  - Deployed prototype: https://polkadot-cloud-sse.polimec.workers.dev/
  - Repository: https://github.com/Polimec/ulb-api
- **Core Component Documentation:**
  1. **Chain Adapters** (`src/adapters/*`): connect to RPC endpoints, normalize balance data.
  2. **Balance Service** (`src/services/balance.ts`): aggregates per‑chain data.
  3. **Stream Service** (`src/services/stream.ts`): manages SSE connections and heartbeats.
  4. **Durable Object Listener** (`src/durable/listener.ts`): persists subscriptions, orchestrates updates.
- **Out of Scope:**
  - Account/key management or transaction submission
  - Support for non‑Polkadot SDK chains (initial version)

### Ecosystem Fit

- **Placement:** Infrastructure service for cross‑chain dApp/back‑end developers, complementary to RPC nodes and light clients.
- **Target Audience:** dApp/web developers, wallet providers, and analytics platforms building on Polkadot who need real-time data without having to understand or use Polkadot-specific tools and libraries.
- **Needs Met:** Unified, low‑latency, real-time balance monitoring across multiple parachains.
- **Similar Projects:**
  - Off‑chain indexing tools provide richer data but with higher setup overhead and they are not offering any SSE-based API.
  - No existing SSE‑based aggregator for the Polkadot ecosystem.
- **Analogues in Other Ecosystems:** Alchemy’s WebSocket and Webhooks for Ethereum but no direct equivalent exists for Polkadot SDK-based chains.

## Team :busts_in_silhouette:

### Team Members

- Polimec Team (Complete list on https://app.polimec.org/about)

### Contact

- **Contact Name:** Leonardo Razovic
- **Contact Email:** leonardo@polimec.org
- **Website:** [Polimec](https://app.polimec.org/)

### Legal Structure

- **Registered Address:** Reiffergässli 4, 6300 Zug, Switzerland
- **Registered Legal Entity:** Polimec Foundation

### Team’s Experience

Our team has extensive experience in cloud‑native TypeScript and Rust development. We’ve contributed to Polkadot JS API, authored Polkadot SDK/FRAME pallets, and deployed production workloads on Cloudflare Workers.

### Team Code Repo

- https://github.com/Polimec/polimec-node
- https://github.com/Polimec/ulb-api

## Development Status :open_book:

- Proof‑of‑concept implemented and deployed on Cloudflare Workers.
- Codebase: https://github.com/Polimec/ulb-api

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 3 months
- **Full-Time Equivalent (FTE):** 2
- **Total Costs:** 27,000 USD
- **DOT %:** 60%

### Milestone 1 — Core SSE Service

- **Estimated duration:** 1 month
- **FTE:** 2
- **Costs:** 9,000 USD

|  Number | Deliverable                 | Specification                                        |
| ------: | --------------------------- | ---------------------------------------------------- |
| **0a.** | License                     | MIT                                                  |
| **0b.** | Documentation               | Inline docs + Quickstart tutorial                    |
| **0c.** | Testing and Testing Guide   | Unit tests + test runner guide                       |
|      1. | SSE Server                  | Cloudflare Worker exposing GET /balances/{accountId} |
|      2. | Durable Object Listener     | Manages subscriptions, reconnections                 |
|      3. | Chain Adapters              | Polkadot & Asset Hub                                 |
|      4. | Balance Aggregation Service | Merges per‑chain balances                            |
|      5. | JS/TS Client Example        | Browser usage sample                                 |

### Milestone 2 — Multi‑Chain Support & Advanced Features

- **Estimated duration:** 1 month
- **FTE:** 2
- **Costs:** 9,000 USD

|  Number | Deliverable               | Specification                    |
| ------: | ------------------------- | -------------------------------- |
| **0a.** | License                   | MIT                              |
| **0b.** | Documentation             | API reference + advanced guide   |
| **0c.** | Testing and Testing Guide | Integration/stress tests + guide |
|      1. | Additional Chain Adapters | Polimec & Hydration              |
|      2. | Custom Filters            | Client‑specified chains/tokens   |
|      3. | Heartbeat & Reconnection  | Enhanced reliability             |
|      4. | Performance Optimization  | Latency & throughput benchmarks  |

### Milestone 3 — Documentation, Tooling & Support

- **Estimated duration:** 6 months
- **FTE:** 2
- **Costs:** 9,000 USD

|  Number | Deliverable               | Specification                           |
| ------: | ------------------------- | --------------------------------------- |
| **0a.** | License                   | MIT                                     |
| **0b.** | Documentation             | Full API reference site + SDK docs      |
| **0c.** | Testing and Testing Guide | Extended test suite + user guide        |
| **0e.** | Article                   | Workshop article on Polkadot Medium     |
|      1. | Tutorial Videos           | 2–3 screencasts demonstrating usage     |
|      2. | Maintenance Plan          | Issue tracking, 6‑month SLA             |
|      3. | Final Report              | Project outcomes, metrics, repo handoff |

## Future Plans

- **Short‑term promotion:** Workshops at Polkadot events, blog posts, social media content.
- **Long‑term vision:** Add extrinsic notifications, on‑chain identity integration, integration with other existing XCM libraries to facilitate cross-chain transfers, and foster open‑source community involvement.