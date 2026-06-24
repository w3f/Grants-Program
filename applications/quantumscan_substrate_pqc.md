# QuantumScan — Substrate/Polkadot PQC Pattern Scanner

- **Team Name:** QuantumScan
- **Payment Details:**
  - **DOT**: 16LTGtVBbeq7SbCvTDJoeXzzE7Kp4ma5QvrU2iAggJxjy5pu
  - **Payment**: 16LTGtVBbeq7SbCvTDJoeXzzE7Kp4ma5QvrU2iAggJxjy5pu (USDC)
- **[Level](https://grants.web3.foundation/docs/Introduction/levels):** 1

## Project Overview :page_facing_up:

### Overview

**The one-sentence version:** QuantumScan is a live, open-source tool that tells any Substrate developer — in under 60 seconds — exactly which lines of their codebase use quantum-vulnerable cryptography and what to replace them with.

NIST finalized ML-KEM, ML-DSA, and SLH-DSA in August 2024. The migration from sr25519, ed25519-dalek, and x25519-dalek is no longer theoretical — it is scheduled. Polkadot's validator infrastructure, custom pallets, XCM signing code, and ink! contracts all depend on algorithms that Shor's algorithm breaks. No open-source tool exists today that audits Substrate codebases for this exposure.

QuantumScan already runs in production at https://quantumscan.io with 230+ scans completed across 15+ languages — built by one developer, MIT licensed, with zero external funding. This grant funds the Substrate-specific pattern layer: BABE/GRANDPA key detection, pallet crypto scanning, XCM signing audit, ink! contract coverage, and Substrate workspace support. The infrastructure is built. The Substrate patterns need completing.

**We are not asking you to bet on an idea. We are asking you to fund the last mile of a tool that is already running.**

### Project Details

**How it works:**

```
Developer runs: npx quantumscan ./my-parachain --substrate
→ Scanner Core (TypeScript/Node.js) walks the codebase
→ Detects quantum-vulnerable patterns by language and library
→ Returns: file path, line number, algorithm name, severity, migration step
→ Output: JSON findings + optional PDF + CycloneDX 1.7 CBOM
```

Source code never leaves the developer's machine. Only findings (file paths, line numbers, algorithm names) are processed. No API key required for CLI use.

**Technology Stack:**
- Scanner core: Node.js / TypeScript, MIT licensed, `npx quantumscan`
- Web dashboard: Next.js 15, Drizzle ORM, Neon PostgreSQL
- Report generation: CycloneDX 1.7 CBOM, PDF export
- Hosting: Vercel

**Substrate/Polkadot patterns already implemented (pre-grant):**
- `ed25519-dalek` — validator and account key generation
- `sr25519` / Schnorrkel — Substrate consensus keys
- `x25519-dalek` — ECDH key exchange
- `sp-core` — Substrate primitive crypto usages
- `ring` crate — RSA/ECDSA usages in Substrate tooling

**What this grant adds (new patterns):**
- BABE/GRANDPA consensus key generation paths
- Custom pallet cryptography (`frame_support`, `sp-runtime`, `sp-io`)
- XCM message signing and verification
- ink! smart contract ECDSA/Ed25519 usage
- Substrate workspace auto-discovery (`npx quantumscan --substrate`)

**What this project is NOT:**
- Not a runtime monitor (static analysis only)
- Not a parachain or on-chain component
- Not a penetration testing or fuzzing tool

### Ecosystem Fit

**Where it fits:** Developer security tooling — the missing PQC audit layer for Substrate teams.

**Who needs it:**
- Parachain teams writing custom pallets with crypto primitives
- Validator operators reviewing their key generation code before the PQC transition
- Wallet developers using ed25519 or x25519 for account signing
- ink! developers using ECDSA in smart contracts

**Why now:** NIST FIPS 203, 204, 205 were finalized in August 2024. The Polkadot ecosystem has no standardized way to assess its codebase-level PQC exposure before the transition starts. This tool provides that baseline — for free, in 60 seconds, without sending code anywhere.

**Gap confirmed:** A search of the W3F Grants Program shows no approved tool that performs code-level PQC scanning for Substrate. QuantumGuard (W3F #2113) attempted to build a quantum-resistant parachain — a complementary but different goal. QuantumScan audits existing codebases; it does not replace cryptographic primitives.

## Team :busts_in_silhouette:

### Team members

- Rodolfo Carvalho (founder, sole contributor)

### Contact

- **Contact Name:** Rodolfo Carvalho
- **Contact Email:** evanoaltar@gmail.com
- **Website:** https://quantumscan.io

### Legal Structure

- **Registered Address:** Guatemala City, Guatemala
- **Registered Legal Entity:** Individual / Sole proprietor

### Team's experience

This is not a speculative team applying for funding to start something. Rodolfo Carvalho shipped QuantumScan from zero to production between January and June 2026:

| Date | Milestone |
|------|-----------|
| Jan 2026 | Project started, first pattern sets |
| Mar 2026 | First production scans running |
| May 2026 | 15+ languages, CBOM, PDF export, full dashboard |
| Jun 2026 | 230+ production scans, npm CLI published |
| Jun 2026 | All 5 Substrate grant deliverables pre-implemented (see Development Status) |

**Delivery rate:** 1+ new detection pattern per week, every week since launch, with zero external funding.

The 8-week timeline in this proposal is based on actual velocity from the past 6 months — not a projection. All 5 grant deliverables are **already implemented** as of the application date (see Development Status below).

Full-stack: TypeScript, Node.js, Rust pattern analysis, Next.js, PostgreSQL, GitHub Actions CI/CD.

### Team Code Repos

- https://github.com/quantumscan-io/scanner-core (MIT — npm CLI, v1.9.0 with `--substrate` flag live)
- https://github.com/quantumscan-io/quantumscan-web (web dashboard, 79 Substrate pattern tests)

### Team LinkedIn Profiles

- https://www.linkedin.com/company/quantumscan (project page)

## Development Status :open_book:

**Already live and running:**
- https://quantumscan.io — production dashboard
- `npx quantumscan` — CLI, MIT licensed, published on npm
- 230+ scans completed since January 2026
- sr25519, ed25519-dalek, x25519-dalek, sp-core, ring — already detected
- CycloneDX 1.7 CBOM generation — already implemented
- PDF report export — already implemented
- GitHub Actions integration — already working

**All 5 grant deliverables pre-implemented (as of 2026-06-24):**

The entire technical scope of this grant has been implemented before the grant was approved. This is intentional: we built it to prove we can deliver, not to ask for permission to start.

| Deliverable | Status | Commit / Location |
|-------------|--------|-------------------|
| 1. BABE/GRANDPA key detection (4 patterns) | ✅ Live in v1.9.0 | `substrate-babe-authority`, `substrate-grandpa-authority`, `substrate-session-keys`, `substrate-validator-keystore` |
| 2. Pallet crypto scanner (4 patterns) | ✅ Live in v1.9.0 | `substrate-pallet-verify`, `substrate-pallet-crypto-primitive`, `substrate-sp-io-crypto`, `substrate-account-id` |
| 3. XCM signing audit (3 patterns) | ✅ Live in v1.9.0 | `substrate-xcm-origin`, `substrate-xcm-multiasset-sign`, `substrate-xcm-barrier` |
| 4. ink! contract scanner (4 patterns) | ✅ Live in v1.9.0 | `ink-ecdsa-recover`, `ink-sr25519-verify`, `ink-hash-crypto`, `ink-account-id-sign` |
| 5. `--substrate` workspace flag | ✅ Live in v1.9.0 | `npx quantumscan /path --substrate` — auto-discovers pallets, ink! contracts, Cargo workspace |
| 0c. Tests (79 unit tests) | ✅ Passing | `src/lib/ai/__tests__/substrate-patterns.test.ts` — false positive rate: 0% on fixture set |

**Demo (run today, 2026-06-24):**

```
$ npx quantumscan@1.9.0 ./my-parachain --substrate

QuantumScan v1.9.0  Substrate/Polkadot PQC Analysis
https://quantumscan.io
──────────────────────────────────────────────────────────
Workspace  Substrate/Polkadot detected
Pallets    1 found (pallets/staking/src)
ink!       1 contract(s) found
Crates     frame-support, frame-system, sp-core, sp-runtime, sp-io… +3
Patterns   19 Substrate-specific PQC patterns active

🟠 HIGH     16 findings
  pallets/staking/src/ink_contract.rs:18    ink! sr25519 Signature Verify
  pallets/staking/src/ink_contract.rs:24    ink! ECDSA Recovery (secp256k1)
  pallets/staking/src/lib.rs:9              Substrate Session Keys (multi-key)
  pallets/staking/src/lib.rs:16             BABE Authority Key (sr25519)
  pallets/staking/src/lib.rs:19             Substrate Pallet Signature Verify
  pallets/staking/src/lib.rs:24             Substrate Validator Keystore
  pallets/staking/src/lib.rs:31             XCM Signed Origin (sr25519/ed25519)
  pallets/staking/src/lib.rs:36             XCM Message with Account Auth
  pallets/staking/src/lib.rs:40             Substrate sp-io Crypto Host Function
  [+7 more]

📦 DEPENDENCIES  2 vulnerable package(s)
  Cargo.toml    ed25519-dalek = "2.0"    → ML-DSA via pqcrypto-dilithium
  Cargo.toml    x25519-dalek  = "2.0"    → ML-KEM via pqcrypto-kyber

Risk Score  100/100  Critical 🚨
```

**What the grant funds:** Documentation (deliverable 0b), Docker image (deliverable 0d), the Polkadot Forum article (deliverable 0e), and any refinement from real parachain feedback. The pattern implementation is complete. The grant de-risks the polish, not the core.

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 8 weeks
- **Full-Time Equivalent (FTE):** 1
- **Total Costs:** 9,500 USD

### Milestone 1 — Substrate/Polkadot Pattern Completion

- **Estimated duration:** 8 weeks
- **FTE:** 1
- **Costs:** 9,500 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | MIT — scanner-core and all new pattern modules |
| **0b.** | Documentation | (1) Updated README with Substrate-specific usage guide; (2) `npx quantumscan --substrate` flag documentation; (3) pattern reference: which Substrate calls are flagged and why |
| **0c.** | Testing and Testing Guide | Unit tests for each of the 5 new pattern sets using fixture Rust files. Test command: `npm test`. CI via GitHub Actions. Acceptance: all tests pass, false positive rate < 3% on `polkadot-sdk` sample. **Status: 79 tests already passing.** |
| **0d.** | Docker | `docker run quantumscan/scanner ./my-parachain` — single command to scan any Substrate workspace without Node.js installed |
| **0e.** | Article | "How QuantumScan Audits Your Polkadot Parachain for Quantum Risk" — published on quantumscan.io blog and cross-posted to the Polkadot forum (forum.polkadot.network) within 1 week of milestone delivery |
| **1.** | BABE/GRANDPA key detection | Detect sr25519 and ed25519 key generation in BABE block production and GRANDPA finality code. Patterns cover: `substrate-client`, `sc-consensus-babe`, `sc-finality-grandpa`, validator session key APIs. **Status: 4 patterns live in v1.9.0.** |
| **2.** | Pallet crypto scanner | Detect quantum-vulnerable crypto calls inside custom Substrate pallets: `frame_support::crypto`, `sp-runtime::traits::Verify`, `sp-io::crypto`, `pallet_identity` signature verification. **Status: 4 patterns live in v1.9.0.** |
| **3.** | XCM signing audit | Flag quantum-vulnerable signing in XCM message construction: `MultiLocation` authentication, `OriginKind::Superuser` signing, `xcm-executor` signature verification hooks. **Status: 3 patterns live in v1.9.0.** |
| **4.** | ink! smart contract scanner | Detect ECDSA and Ed25519 usage in ink! contracts: `ink::env::ecdsa_recover`, `ink::env::hash`, raw byte signing patterns. **Status: 4 patterns live in v1.9.0.** |
| **5.** | Substrate workspace support | `npx quantumscan --substrate ./path` flag: auto-discovers `Cargo.toml` workspace members, pallet directories, and ink! contracts; outputs per-crate severity summary. **Status: live in v1.9.0.** |

## Future Plans

**Next step after this milestone:** Apply for W3F Level 2 to fund (1) a Polkadot ecosystem PQC vulnerability report scanning 20+ public parachain repos, and (2) per-finding automated migration guides (sr25519 → ML-DSA-65, ed25519 → ML-DSA-44).

**Long term:** Maintain the scanner as a public good. The pattern database is updated as NIST PQC standards evolve (next FIPS round expected 2026–2027). Explore community-contributed patterns via GitHub PRs.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation website, while building PQC detection patterns for Substrate.

**Why Level 1 and not Level 2:** We are a solo founder making our first W3F grant application. Level 1 matches our current stage. If this milestone is delivered successfully, we will apply for Level 2 to fund the broader ecosystem work.

**Why this will be delivered:** The scanner is already running. All 5 deliverables (items 1–5) are already implemented as of the grant application date. This is not a promise — it is a shipped feature. The grant funds documentation, Docker packaging, and the Polkadot Forum article that makes the tool discoverable by the ecosystem.

**Other funding:** No previous grants received. Simultaneously applying to Solana Foundation Developer Tooling category (non-overlapping deliverables: Ed25519/Anchor patterns for Solana, not Substrate).
