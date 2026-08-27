# dpay — Offline Tap-to-Pay Payments for Polkadot

- **Team Name:** Saša Tomić (individual; incorporation in progress)
- **Payment Details:**
  - **DOT**: [Missing: Polkadot address for vested DOT portion]
  - **Payment**: [Missing: Polkadot AssetHub address] (USDC)
- **Level:** 2

## Project Overview :page_facing_up:

### Overview

- **Tagline:** An open-source protocol and Rust implementation that lets a customer pay with Polkadot assets from a phone that has no internet connection, by signing the extrinsic offline and letting the merchant's phone relay it to the network.
- **Description:** Today, paying with any Polkadot asset requires the payer to be online: the wallet fetches metadata, a nonce and the latest state before it can build and sign an extrinsic. dpay inverts this. The merchant's device (a regular phone) sends the customer's phone a compact payment request over NFC (or QR, on phones without NFC) containing everything needed to construct a signing payload offline — chain genesis hash, the account's current nonce, a mortality window, and metadata hash. The customer's phone signs the extrinsic offline and returns it; the merchant relays it to the network, where it settles in a block or two. The customer never needs connectivity; the merchant is the relay.
- **Integration into Substrate / Polkadot / Kusama:** The deliverable is a Rust library (`dpay-polkadot`) that implements offline extrinsic construction and signing for Polkadot and Asset Hub (Polkadot) balances/asset transfers, built on `subxt` and the standard Substrate signing payload format, plus a relay component that submits signed extrinsics over RPC. It works with any standard Polkadot account (sr25519/ed25519/ecdsa, SS58). The reference consumer is dpay, an existing production tap-to-pay app that already settles assets on other networks using this same merchant-relayed model.
- **Why this team:** I have already built and run this exact architecture in production for other chains (offline-signed payments on Internet Computer chain-key assets and native Solana, live at https://dpay.kalaj.org). Polkadot's signer-agnostic extrinsic format makes it a natural next settlement rail, and open-sourcing the Polkadot implementation benefits any wallet or POS builder in the ecosystem, not just dpay.

### Project Details

**Protocol design (merchant-relayed offline signing).** The payment tap is a request/response exchange, mirroring the EMV flow but with a raw Substrate extrinsic instead of a card network authorization:

1. Merchant → customer (NFC ISO-DEP / QR): payment request = chain ID, token/asset ID, amount, payee address, genesis hash, the payer's current nonce (fetched by the merchant), block hash + mortality for the mortal extrinsic, and metadata hash.
2. Customer's phone (offline): reconstructs the signing payload, verifies amount + payee against the request, signs with the on-device key (keys never leave the phone), returns the signed extrinsic.
3. Merchant's phone (online): submits the extrinsic via RPC (`author_submitExtrinsic`) and shows settlement confirmation.

**Technology stack:**
- Rust crates: signing/payload construction on `subxt` (metadata handling, SCALE codec), `schnorrkel`/`ed25519-1912` for account keys, SS58 address handling; the existing shared core of dpay (`dpay-core`, ed25519 key management + NFC/QR framing) provides the transport and key storage.
- Relay: small async RPC client (subxt) exposing an HTTP endpoint the merchant app uses.
- App integration (reference consumer): React Native via UniFFI bindings — same binding surface already proven for other chains in dpay.

**What is in / out of scope:**
- In: offline signing protocol library, Polkadot relay-chain native transfers, Asset Hub (Polkadot) asset transfers (e.g. USDC), testnet demos (Westend / Westend Asset Hub), a working in-store payment flow in the dpay app as reference integration, documentation and an article.
- Out: no new pallets, no parachain, no custom chain, no token, no custody (keys stay on the payer's phone), no staking/governance features, no fiat on/off-ramps. The dpay app itself remains product code; only the grant deliverables (protocol library, relay, integration layer of the Polkadot rail) are open-sourced under Apache 2.0.

### Ecosystem Fit

- **Where does it fit?** Payment acceptance infrastructure for Polkadot assets. It lowers the barrier for merchants (any phone becomes an acceptance device — no terminal rental, no internet required on the payer side) and makes Polkadot assets usable in person-to-merchant payments under exactly the conditions (unreliable mobile connectivity) where online-only wallets fail.
- **Target audience:** (a) wallet and dApp builders in the ecosystem, who can reuse the Rust offline-signing/relay protocol directly (it is chain-agnostic within Substrate metadata); (b) merchants and their customers using the dpay reference app.
- **Need and evidence:** Online-only payment UX fails precisely where cash dominance persists. The Federal Reserve's "Economic Well-Being of U.S. Households" series and GSMA's "State of Mobile Internet Connectivity" reports document both unreliable mobile connectivity and the cash-dependency of small merchants; card-terminal costs exclude small merchants (interchange 1.5–3% + terminal rental). An offline-capable, phone-only acceptance rail addresses this directly. In the Polkadot ecosystem, "Polkadot Pay" card integrations target online/POS card issuance; no existing project provides payer-offline merchant-relayed settlement for Polkadot assets.
- **Similar projects in the ecosystem:** Nova Wallet, Talisman and SubWallet are mobile wallets requiring payer connectivity for transfers; air-gapped signing tools (e.g. paritytech/signer) move signing offline but leave broadcast and merchant acceptance unsolved. dpay's contribution is the complete offline payment protocol: request → offline sign → merchant relay, with no dedicated hardware. Polkadot's signer-agnostic extrinsics are what make this possible without any chain-side changes.
- **Similar projects in other ecosystems:** The applicant's own production system (dpay on Internet Computer chain-key assets and Solana) demonstrates the model works end-to-end in daily use.

## Team :busts_in_silhouette:

### Team members

- Saša Tomić (team leader, sole developer)

### Contact

- **Contact Name:** Saša Tomić
- **Contact Email:** sato.dpay@kalaj.org
- **Website:** https://dpay.kalaj.org

### Legal Structure

- **Registered Address:** Private address, to be shared during the KYC process.
- **Registered Legal Entity:** None yet — individual applicant; incorporation in progress.

### Team's experience

Saša Tomić, PhD is a research engineer with 15+ years bridging academic research and production systems.
- Worked at the DFINITY Foundation (2020–2026) on the Rust/Wasm on core protocol, Internal Infra, and led the Mainnet Reliability team for around 4 years, and after that led the team that implemented Immutable Blob Storage for the ICP and Caffeine
- Before that: IBM Research Zurich (flash-storage FTL firmware) and Barcelona Supercomputing Center
- He is now the founder of ∂ifferent Pay (dpay), whose offline tap-to-pay rail is the reference consumer of this grant's deliverables.
- No previous W3F grant applications.

### Team Code Repos

- https://github.com/sasa-tomic — main account (dpay product repos are currently private; the grant deliverables will be published under this account as an Apache-2.0 or MIT licensed repo, e.g. `sasa-tomic/dpay`)

### Team LinkedIn Profiles (if available)

- https://www.linkedin.com/in/sasatomic/

## Development Status :open_book:

- The merchant-relayed offline-payment architecture is already in production for other chains in dpay: offline-signed payments on IC chain-key BTC/ETH/USDC and native Solana, with the paying phone verifiably offline (airplane-mode demo). See https://dpay.kalaj.org (working demo).
- The shared Rust core (`dpay-core`: ed25519 key management, NFC ISO-DEP framing, QR fallback, offline wire protocol), the UniFFI binding layer, and the merchant relay are built and running; this grant adds the Polkadot settlement rail (payload construction/signing via subxt, nonce/mortality provisioning by the merchant, RPC submission).
- No RFP; independent application. No prior W3F contact beyond the public grants channel.

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 3 months
- **Full-Time Equivalent (FTE):** 1
- **Total Costs:** 30,000 USD
- **DOT %:** 50

### Milestone 1 — Offline signing protocol for Polkadot (library + testnet demo)

- **Estimated duration:** 1 month
- **FTE:** 1
- **Costs:** 10,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | Inline rustdoc for all public APIs + a tutorial (README) walking through: building a payment request (nonce, mortality, genesis, metadata hash), signing offline, against Westend testnet. |
| **0c.** | Testing and Testing Guide | Unit tests for payload construction (SCALE encoding, mortal-era computation, SS58/multi-address), signing (sr25519 + ed25519), and mock request/response exchange; integration test constructing and signing a Westend transfer with networking disabled. Guide: `cargo test`. |
| **0d.** | Docker | Dockerfile providing a reproducible environment (deps + test runner). |
| 1. | Rust library: `dpay-polkadot` signing core | Crate implementing the payment-request data model and offline extrinsic construction for Polkadot relay-chain balances transfers (`transfer_allow_death` / `transfer_all`), built on `subxt`: metadata-hash-pinned payload building, mortal era from merchant-provided block hash, sr25519/ed25519 signing, SS58 address parsing/formatting. No network access required on the signing side. |
| 2. | Rust library: nonce/metadata provisioning helpers | Types + validation for the merchant-provided signing context (nonce freshness rules, genesis hash, spec/metadata hash pinning) and safety checks (amount/payee echo verification before signing). |
| 3. | CLI demo | End-to-end CLI demo: two processes (payer offline, merchant online) exchanging the request/signature over the dpay NFC/QR wire format. Video recording of the payer process with networking disabled. |

### Milestone 2 — Relay submission + Asset Hub assets

- **Estimated duration:** 1 month
- **FTE:** 1
- **Costs:** 10,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | Inline docs + tutorial extending M1's guide with relay submission and Asset Hub asset transfers (e.g. USDC on Polkadot Asset Hub). |
| **0c.** | Testing and Testing Guide | Unit + integration tests: full offline-sign → relay-submit → inclusion cycle against Westend using a throwaway account; asset transfers against Westend Asset Hub. Guide covering both. |
| **0d.** | Docker | docker-compose spinning the relay against public Westend / Westend Asset Hub RPC endpoints for full-cycle testing. |
| 1. | Relay component | Async RPC submission service (subxt) that accepts a signed extrinsic and submits to `author_submitExtrinsic`, exposing inclusion status and block hash; packaged as a small HTTP endpoint the merchant app uses, with retry/UX-status semantics. |
| 2. | Library: Asset Hub asset transfers | Extend `dpay-polkadot` with Asset Hub (Polkadot) `Assets` pallet transfers (asset-ID-parameterized), same offline-signing guarantees, tested against Westend Asset Hub. |

### Milestone 3 — Reference app integration + article

- **Estimated duration:** 1 month
- **FTE:** 1
- **Costs:** 10,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | Inline docs + final tutorial covering the complete in-store flow: merchant request → offline tap/scan sign → relay settlement, for both a Polkadot native transfer and an Asset Hub asset transfer. |
| **0c.** | Testing and Testing Guide | E2E tests of the app-integrated flow against Westend / Westend Asset Hub (automated where possible), plus the full library test suite; guide covering both. |
| **0d.** | Docker | Updated Dockerfiles/compose covering the e2e harness. |
| 0e. | Article | Published article (blog, ~1,500 words + demo video) explaining the merchant-relayed offline payment protocol for Polkadot: how offline nonce/mortality provisioning works, security properties (payer verifies amount/payee; keys never leave the payer's phone), and how other wallets can adopt the library. |
| 1. | UniFFI binding layer | Publish UniFFI bindings exposing the Polkadot rail (request parsing, offline signing, submission status) to mobile apps, mirroring the existing dpay binding surface. |
| 2. | Reference integration in dpay | Polkadot/Asset Hub assets selectable in the dpay production app's catalog; tap-to-pay and QR flows operating with the paying device in airplane mode; screenshots/video of an in-store-style payment. |

## Future Plans

- Maintenance: the library is part of dpay's production payment rails, so it is maintained as long as the product runs — with the usual semantic versioning and changelogs of an Apache-2.0 Rust crate.
- Financing: the underlying venture is raising a pre-seed round and has a sustainable model (free consumer/merchant payments; ~0.5% for advanced merchant features), independent of grant funding; the grant accelerates the Polkadot rail specifically.
- Long term: extend the rail across the Polkadot ecosystem (XCM-derived assets on other parachains), and promote adoption of the protocol by other wallets/POS builders via the article and a talk (e.g. Polkadot Decoded community track/sub0).

## Referral Program (optional) :moneybag:

- None.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation website (grants.web3.foundation).

- Work already done: the full merchant-relayed offline architecture is in production for other chains (dpay.kalaj.org live demo; payer verifiably offline). This application adds the Polkadot settlement rail and open-sources it.
- No other teams have contributed financially; no previous grant applications by this team anywhere.
