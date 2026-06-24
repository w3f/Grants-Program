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

QuantumScan already runs in production at https://quantumscan.io with 223 scans completed across 15+ languages — built by one developer, MIT licensed, with zero external funding. This grant funds the Substrate-specific pattern layer: BABE/GRANDPA key detection, pallet crypto scanning, XCM signing audit, ink! contract coverage, and Substrate workspace support. The infrastructure is built. The Substrate patterns need completing.

**We are not asking you to bet on an idea. We are asking you to fund the last mile of a tool that is already running.**

### Project Details

**How it works:**

```
Developer runs: npx quantumscan ./my-parachain
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

- Rodolfo Carvalho (founder)

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
| Jun 2026 | 223 production scans, npm CLI published |

**Delivery rate:** 1+ new detection pattern per week, every week since launch, with zero external funding.

The 8-week timeline in this proposal is based on actual velocity from the past 6 months — not a projection.

Full-stack: TypeScript, Node.js, Rust pattern analysis, Next.js, PostgreSQL, GitHub Actions CI/CD.

### Team Code Repos

- https://github.com/quantumscan-io/scanner-core (MIT)
- https://github.com/quantumscan-io/quantumscan-web

## Development Status :open_book:

**Already live and running:**
- https://quantumscan.io — production dashboard
- `npx quantumscan` — CLI, MIT licensed, published on npm
- 223 scans completed since January 2026
- sr25519, ed25519-dalek, x25519-dalek, sp-core, ring — already detected
- CycloneDX 1.7 CBOM generation — already implemented
- PDF report export — already implemented
- GitHub Actions integration — already working

**What this grant funds:** extending the existing pattern engine with the 5 Substrate-specific deliverables below. Same architecture, same codebase, same tests — more patterns.

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
| **0c.** | Testing and Testing Guide | Unit tests for each of the 5 new pattern sets using fixture Rust files. Test command: `npm test`. CI via GitHub Actions. Acceptance: all tests pass, false positive rate < 3% on `polkadot-sdk` sample |
| **0d.** | Docker | `docker run quantumscan/scanner ./my-parachain` — single command to scan any Substrate workspace without Node.js installed |
| **0e.** | Article | "How QuantumScan Audits Your Polkadot Parachain for Quantum Risk" — published on quantumscan.io blog and cross-posted to the Polkadot forum (forum.polkadot.network) within 1 week of milestone delivery |
| **1.** | BABE/GRANDPA key detection | Detect sr25519 and ed25519 key generation in BABE block production and GRANDPA finality code. Patterns cover: `substrate-client`, `sc-consensus-babe`, `sc-finality-grandpa`, validator session key APIs |
| **2.** | Pallet crypto scanner | Detect quantum-vulnerable crypto calls inside custom Substrate pallets: `frame_support::crypto`, `sp-runtime::traits::Verify`, `sp-io::crypto`, `pallet_identity` signature verification |
| **3.** | XCM signing audit | Flag quantum-vulnerable signing in XCM message construction: `MultiLocation` authentication, `OriginKind::Superuser` signing, `xcm-executor` signature verification hooks |
| **4.** | ink! smart contract scanner | Detect ECDSA and Ed25519 usage in ink! contracts: `ink::env::ecdsa_recover`, `ink::env::hash`, raw byte signing patterns |
| **5.** | Substrate workspace support | `npx quantumscan --substrate ./path` flag: auto-discovers `Cargo.toml` workspace members, pallet directories, and ink! contracts; outputs per-crate severity summary |

## Future Plans

**Next step after this milestone:** Apply for W3F Level 2 to fund (1) a Polkadot ecosystem PQC vulnerability report scanning 20+ public parachain repos, and (2) per-finding automated migration guides (sr25519 → ML-DSA-65, ed25519 → ML-DSA-44).

**Long term:** Maintain the scanner as a public good. The pattern database is updated as NIST PQC standards evolve (next FIPS round expected 2026–2027). Explore community-contributed patterns via GitHub PRs.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation website, while building PQC detection patterns for Substrate.

**Why Level 1 and not Level 2:** We are a solo founder making our first W3F grant application. Level 1 matches our current stage. If this milestone is delivered successfully, we will apply for Level 2 to fund the broader ecosystem work.

**Why this will be delivered:** The scanner is already running. The new deliverables (items 1–5) follow the exact same pattern architecture as the 15+ language modules already shipped. Each new pattern set takes 3–5 days to implement, test, and document — proven by our 6-month shipping history.

**Other funding:** No previous grants received. Simultaneously applying to Solana Foundation Developer Tooling category (non-overlapping deliverables: Ed25519/Anchor patterns for Solana, not Substrate).
