# dotfrm: Agricultural Namespace Pallet & Web2 Bridge Kit for Polkadot

- **Team Name:** dotfrm (legal entity: _TBD_)
- **Payment Details:**
  - **DOT:** _Polkadot address (to be provided by applicant)_
  - **Payment:** _Polkadot AssetHub address (USDC) (to be provided by applicant)_
- **[Level](https://grants.web3.foundation/docs/Introduction/levels):** 2

## Project Overview :page_facing_up:

### Overview
**Tagline:** Human‑readable names and a Web2 gateway for farmers and local food ecosystems, built for Polkadot.

**Description:** dotfrm will open-source a **Substrate pallet** and developer tooling that implements a hierarchical, human‑readable **name registry** (e.g., `farmname.frm`) plus a light **Web2 bridge kit** to surface Web3 content to traditional browsers. The work enables parachains and dapps to offer user‑friendly names and discoverable metadata for agriculture and other verticals—while keeping all core components reusable and ecosystem‑agnostic.

**Polkadot Integration:** Delivered as a **FRAME pallet** with example integration in a Substrate node, plus a TypeScript SDK and React components that connect via `@polkadot/api` and common wallets. The Web2 bridge kit provides an optional, open-source reverse proxy configuration and indexing service that maps name records to IPFS/IPNS or on-chain data for legacy web access.

**Motivation:** The Polkadot ecosystem benefits from consistent, open naming primitives and metadata standards that make addresses, content and accounts human‑navigable—lowering onboarding friction for end users and developers alike, especially for domain‑specific apps (e.g., local food marketplaces, producer identities, supply‑chain pages).

### Project Details
- **UI assets:** Figma mockups for name search, registration, renewal and record management.
- **APIs & Data Models:** gRPC/GraphQL for name lookup, availability, ownership, and metadata (schema examples for agriculture: location, product categories, certifications).
- **Stack:** Rust (FRAME pallet), Rust/TypeScript for services, React for sample UI, Docker for local testnets.
- **Documentation:** Tutorials to spin up the node, register a name, integrate the SDK, and run the gateway.
- **Out of scope:** Tokenomics, production hosting/ops, business/marketing collateral.

### Ecosystem Fit
- **Fit:** A general‑purpose naming pallet + SDK usable by parachains and dapps; optional gateway code helps Web2 users reach Web3 content.
- **Audience:** Parachain devs, wallet/UI devs, and application builders needing readable identifiers.
- **Needs addressed:** Easier onboarding, discoverability, and identity for accounts and content across Polkadot; vertical schemas (agriculture) serve as examples but the stack is **generic and reusable**.
- **Related work:** Prior community efforts toward name services are noted; this proposal focuses on an extensible pallet + SDK with vertical metadata schemas and a Web2 bridge kit, designed for reuse across parachains.

## Team :busts_in_silhouette:
- **Team lead:** Brian Piggott (architect, cybersecurity & infra lead) — GitHub: _TBD_ — LinkedIn: _TBD_
- **Team members:** _TBD (engineering, UI/UX, DevRel)_

### Contact
- **Contact Name:** Brian Piggott
- **Contact Email:** _TBD_
- **Website:** https://dotfrm.com (placeholder), https://dotfarm.com (placeholder)

### Legal Structure
- **Registered Address:** _TBD_
- **Registered Legal Entity:** _TBD_

### Team’s experience
- Delivery management for infrastructure, security, and compliance in public‑sector contexts; prior architecture and plans for Web3‑style top‑level domains with Web2 usability.
- _Links to any prior open‑source work or demos can be added here._

### Team Code Repos
- https://github.com/dotfrm (to be created)
- https://github.com/{team_member_1} (to be provided)

### Team LinkedIn Profiles (if available)
- https://www.linkedin.com/in/brian-piggott-4144b818/
- _Additional profiles TBD_

## Development Status :open_book:
Early design artifacts (architecture diagrams, schema drafts, UI wireframes) exist privately and will be recreated in open repositories under the selected license. No prior W3F grant.

## Development Roadmap :nut_and_bolt:

**Overview**
- **Total Estimated Duration:** 3 months
- **Full‑Time Equivalent (FTE):** 2.0
- **Total Costs:** 30,000 USD
- **DOT %:** 50% (vested), remainder USDC on Polkadot AssetHub

### Milestone 1 — Pallet & Local Testnet
- **Estimated duration:** 1 month
- **FTE:** 2.0
- **Costs:** 10,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache‑2.0 for all repositories. |
| **0b.** | Documentation | Inline Rust docs and a tutorial to compile & run a local Substrate node with the pallet, register a demo name, and query storage. |
| **0c.** | Testing & Guide | ≥80% unit‑test coverage for pallet logic (registration, renewal, transfer, resolver updates, metadata). Test guide documents commands and expected results. |
| **0d.** | Docker | Dockerfiles + scripts to boot a single‑node testnet with the pallet enabled. |
| 1. | **FRAME pallet `pallet-agri-names`** | Hierarchical name registry with ownership, expirations, grace periods, transfer, resolver mapping, metadata key/values, events & errors. |
| 2. | **Extrinsics & Storage** | `register`, `renew`, `transfer`, `set_resolver`, `set_metadata`, `reclaim`; storage: `Names`, `Owners`, `Expiry`, `Resolvers`, `Metadata`, `Registrars`. |
| 3. | **Example Node** | Substrate node integrating the pallet; sample chain spec and genesis configs. |

### Milestone 2 — SDK, APIs & UI
- **Estimated duration:** 1 month
- **FTE:** 2.0
- **Costs:** 10,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a‑0d** | License/Docs/Tests/Docker | As above. |
| 1. | **TypeScript SDK** | High‑level functions (`checkAvailability`, `register`, `renew`, `resolve`, `search`) built on `@polkadot/api`; published to npm. |
| 2. | **React Components** | Search bar, availability widget, registration flow, record editor; storybook + basic e2e tests. |
| 3. | **gRPC/GraphQL service** | Optional indexer exposing read‑optimized endpoints for search & metadata; Rust (actix) or Node (NestJS) with OpenAPI/GraphQL schema. |
| 4. | **Figma Mockups** | Finalized UX flows; assets included in repo. |

### Milestone 3 — Web2 Bridge Kit & Article
- **Estimated duration:** 1 month
- **FTE:** 2.0
- **Costs:** 10,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a‑0e** | License/Docs/Tests/Docker + Article | Publish a technical article explaining design decisions, integration steps, and demo. |
| 1. | **Gateway Service** | Open‑source reverse‑proxy/indexer that maps names to IPFS/IPNS or on‑chain data and serves them under a conventional Web2 subdomain pattern; includes NGINX config templates. |
| 2. | **SDK & UI Integration** | Example app demonstrating end‑to‑end flow: search → register → resolve → Web2 gateway view. |
| 3. | **Security & Abuse Controls** | Basic rate limiting, content‑type filtering, and validation; `security.txt` and threat model notes. |

## Future Plans
- Maintain the pallet & SDK with community feedback; propose ecosystem standardization of name metadata.
- Explore deployment in a parachain context and alignment with identity primitives (e.g., DID/XCM‑friendly resolvers).
- Seek co‑funding (treasury, bounties) for advanced features (multi‑language resolvers, cross‑chain resolution, registrar plugins).

## Referral Program (optional) :moneybag:
- **Referrer:** _TBD_
- **Payment Address (USDC):** _TBD_

## Additional Information :heavy_plus_sign:
**How did you hear about the Grants Program?** Web3 Foundation website and community recommendations.

**Prepared on:** 2025-09-04