# QuantumScan — Post-Quantum Cryptography Scanner for Substrate/Polkadot

- **Team Name:** QuantumScan
- **Payment Details:**
  - **DOT**: 16LTGtVBbeq7SbCvTDJoeXzzE7Kp4ma5QvrU2iAggJxjy5pu
  - **Payment**: 16LTGtVBbeq7SbCvTDJoeXzzE7Kp4ma5QvrU2iAggJxjy5pu (USDC)
- **[Level](https://grants.web3.foundation/docs/Introduction/levels):** 2

## Project Overview :page_facing_up:

### Overview

**QuantumScan** is a live, privacy-first post-quantum cryptography (PQC) scanner that detects quantum-vulnerable cryptographic patterns in codebases across 15+ languages — with dedicated coverage for the Substrate/Polkadot validator infrastructure.

Polkadot's ~300 active validators depend on sr25519 (Schnorrkel), ed25519-dalek, and x25519-dalek for BABE/GRANDPA consensus keys, account signatures, and XCM message signing. These algorithms are broken by Shor's algorithm. Q-Day is estimated within 1,200–1,500 days. NIST finalized ML-KEM, ML-DSA, and SLH-DSA in August 2024 — the migration clock is running.

**The core problem:** Polkadot's validator infrastructure has no tooling to measure its own quantum exposure at the code level. Validators cannot know which key generation paths, pallet cryptography calls, or XCM signing routines will need replacing before Q-Day forces an emergency migration.

QuantumScan solves this by scanning Substrate/Polkadot codebases, ranking findings by severity, and generating validator-specific PQC migration guides — all without source code ever leaving the developer's environment. This is not a research proposal: QuantumScan is already running in production with 223 scans completed, addressing a concrete and measurable security gap in the ecosystem.

### Project Details

**Architecture:**

```
[Repo] → [GitHub Action / CLI] → [Scanner Core] → [Findings JSON] → [Dashboard / PDF / CBOM]
```

The scanner runs client-side via GitHub Actions. Only findings (file paths, line numbers, algorithm names) reach the backend — never source code.

**Technology Stack:**
- Scanner core: Node.js / TypeScript (MIT licensed CLI: `npx quantumscan`)
- Web dashboard: Next.js 15, Drizzle ORM, Neon PostgreSQL
- Report generation: CycloneDX 1.7 CBOM, PDF export
- Auth: Clerk
- Hosting: Vercel

**Current Substrate/Polkadot patterns already implemented:**
- `ed25519-dalek` — validator and account key generation (Rust)
- `sr25519` / Schnorrkel — Substrate consensus keys (Rust)
- `x25519-dalek` — ECDH key exchange (Rust)
- `sp-core` — Substrate primitive crypto usages
- `ring` crate — RSA/ECDSA usages in Substrate tooling

**Live product:** https://quantumscan.io
**Scanner core (MIT):** https://github.com/quantumscan-io/scanner-core
**223 scans completed** since January 2026, zero external funding.

**What this project is NOT:**
- Not a runtime audit tool (static analysis only)
- Not a parachain or on-chain component
- Not a penetration testing suite

### Ecosystem Fit

**Where it fits:** Validator infrastructure security tooling for the Substrate/Polkadot ecosystem.

**Target audience:** Polkadot/Kusama validator operators, parachain developers, wallet teams, and dApp developers building on Substrate who need to audit their Rust/TypeScript codebases for quantum cryptographic exposure before Q-Day.

**Concrete need in numbers:**
- Polkadot has ~300 active validators, all relying on sr25519/ed25519 for BABE and GRANDPA
- NIST finalized PQC standards (FIPS 203/204/205) in August 2024 — the transition window is now
- No existing open-source tool audits Substrate codebases for quantum exposure at the code level
- Commercial alternatives (IBM QRadar, SandboxAQ) cost $50,000+/year, are closed-source, and are not Substrate-aware

**Similar projects in ecosystem:** None that provide code-level PQC scanning for Substrate/Polkadot validator infrastructure. QuantumGuard (W3F grant #2113) aimed to build a PQC parachain — a complementary but orthogonal approach. QuantumScan audits existing codebases; it does not replace cryptographic primitives.

**Similar projects in related ecosystems:** Commercial tools exist (SandboxAQ, IBM QRadar) but are closed-source, expensive, and not ecosystem-specific.

## Team :busts_in_silhouette:

### Team members

- Rodolfo Carvalho (solo founder)

### Contact

- **Contact Name:** Rodolfo Carvalho
- **Contact Email:** evanoaltar@gmail.com
- **Website:** https://quantumscan.io

### Legal Structure

- **Registered Address:** Guatemala City, Guatemala
- **Registered Legal Entity:** Individual / Sole proprietor

### Team's experience

Rodolfo Carvalho shipped QuantumScan from zero to production in under 6 months — with no external funding, no team, and no prior Substrate-specific work. The project now has:

- **223 production scans** completed since January 2026
- **15+ language pattern sets** shipping and maintained
- **MIT-licensed CLI** published on npm, installable via `npx quantumscan`
- **CycloneDX 1.7 CBOM generation**, PDF export, full web dashboard
- **Averaging 1+ new detection pattern per week** since launch

This grant funds a specific, bounded technical expansion — not a research exploration. Every deliverable in this proposal has a direct analogue in already-shipped code. The Substrate-specific patterns in Milestones 1 and 2 follow the same architecture as existing language modules, with execution timelines based on actual development velocity, not estimates.

Full-stack expertise: TypeScript, Rust pattern analysis, Next.js, Node.js, PostgreSQL, GitHub Actions CI/CD.

### Team Code Repos

- https://github.com/quantumscan-io/scanner-core
- https://github.com/quantumscan-io/quantumscan-web

### Team LinkedIn Profiles (if available)

- https://www.linkedin.com/company/quantumscan

## Development Status :open_book:

QuantumScan is live and operational:
- **Website:** https://quantumscan.io
- **Scanner CLI:** https://github.com/quantumscan-io/scanner-core (MIT licensed, published on npm as `quantumscan`)
- **223 scans completed** since January 2026
- Existing Substrate/Polkadot patterns: sr25519, ed25519-dalek, x25519-dalek, sp-core, ring crate

This grant funds Substrate-specific depth expansion beyond existing generic detection — the infrastructure is built, the patterns need extending.

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 4 months
- **Full-Time Equivalent (FTE):** 1
- **Total Costs:** 30,000 USD
- **DOT %:** 50%

### Milestone 1 — Substrate/Polkadot Deep Pattern Expansion

- **Estimated duration:** 2 months
- **FTE:** 1
- **Costs:** 15,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | MIT |
| **0b.** | Documentation | Inline documentation + tutorial: how to run QuantumScan on a Substrate/Polkadot codebase via CLI and GitHub Action |
| **0c.** | Testing and Testing Guide | Unit tests for all new patterns; guide describing how to run test suite with sample Substrate repos |
| **0d.** | Docker | Dockerfile for running QuantumScan scanner-core locally |
| 0e. | Article | "Post-Quantum Readiness in the Polkadot Ecosystem" — published at quantumscan.io and submitted to Polkadot forum |
| 1. | BABE/GRANDPA key detection | Detect sr25519 and ed25519 key generation in validator client code (agave patterns, substrate-client) |
| 2. | Pallet crypto scanner | Detect quantum-vulnerable crypto usage inside custom Substrate pallets (`frame_support`, `sp-runtime`) |
| 3. | XCM signing audit | Flag quantum-vulnerable signing patterns in XCM message construction and relay chain communication |
| 4. | ink! smart contract scanner | Detect ECDSA/Ed25519 usage inside ink! smart contracts |
| 5. | `cargo quantumscan` plugin | Rust-native CLI flag for Substrate workspaces: `cargo quantumscan ./my-parachain` |

### Milestone 2 — PQC Migration Tooling and Validator Vulnerability Report

- **Estimated Duration:** 2 months
- **FTE:** 1
- **Costs:** 15,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | MIT |
| **0b.** | Documentation | Full Substrate PQC Readiness Guide at quantumscan.io/polkadot — covering validator key rotation, pallet migration, and wallet signature upgrades |
| **0c.** | Testing and Testing Guide | Integration tests on 5 real Substrate/Polkadot repos; false positive rate < 2% requirement |
| **0d.** | Docker | Updated Dockerfile including migration guide generation |
| 0e. | Article | "How to Migrate Your Parachain to Post-Quantum Cryptography" — submitted to Polkadot forum and Medium |
| 1. | PQC migration guide generator | Per-finding auto-generated migration steps: sr25519 → ML-DSA-65, ed25519 → ML-DSA-44, x25519 → ML-KEM-768 |
| 2. | CBOM for parachains | CycloneDX 1.7 Cryptography BOM per pallet — maps findings to NIST FIPS 203/204/205 standards |
| 3. | Substrate GitHub Action template | Ready-to-use GitHub Actions workflow for parachain teams to run PQC audit on every PR |
| 4. | Polkadot Validator PQC Vulnerability Report | Scan 20+ active Polkadot/Kusama validator client repositories; produce anonymized public report classifying quantum exposure by validator type (BABE, GRANDPA, nominated). Delivered as PDF + quantumscan.io/polkadot-report — a concrete, measurable output the W3F and ecosystem can validate |

## Future Plans

**Short term:** After this grant, expand to Ethereum Foundation ESP (EVM/Solidity patterns) and Solana Foundation (Ed25519/Anchor patterns) with ecosystem-specific modules.

**Long term:** Become the standard open-source PQC audit tool for all major blockchain ecosystems. Explore sustainable funding via: (1) enterprise support contracts for financial institutions using CBOM exports for DORA/NIS2 compliance, (2) API access for large-scale automated scanning.

**Maintenance:** Scanner core is MIT licensed and designed for community contributions. Pattern database will be updated as NIST PQC standards evolve (next FIPS round expected 2026–2027).

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation Website and ecosystem research while building PQC detection patterns for Substrate.

**Execution track record:**
- January 2026: project started from zero
- March 2026: first production scans running
- June 2026: 223 scans completed, 15+ language pattern sets, CycloneDX CBOM, PDF export, full dashboard — zero external funding
- Velocity: 1+ new detection pattern per week, consistent shipping since launch

**Work already done:**
- QuantumScan is live at quantumscan.io with 223 scans completed
- Existing sr25519, ed25519-dalek, x25519-dalek, sp-core patterns already implemented
- Scanner CLI published on npm (MIT licensed)
- Privacy-first architecture validated: code never leaves developer environment

**Other funding:** No previous grants. Applied to Gecko Fund (EXANTE) and Solana Foundation simultaneously for ecosystem-specific expansions (non-overlapping deliverables).
