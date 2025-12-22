# Apex SDK Protocol

- **Team Name:** Carbobit LTD
- **Payment Details:**
  - **DOT**: 5GhEERN2GTJ1cVRrXJfmnW62VDURjXdXQU6o5EahU1hR8va3
  - **Payment**: 5GhEERN2GTJ1cVRrXJfmnW62VDURjXdXQU6o5EahU1hR8va3 (USDC)
- **[Level](https://grants.web3.foundation/docs/Introduction/levels):** 2

## Project Overview

### Overview

Apex SDK Protocol is a unified Rust SDK that enables developers to build multichain applications with compile-time safety and native performance. It provides a single ergonomic API bridging Substrate-based chains (Polkadot, Kusama, and parachains) and EVM ecosystems, with particular focus on Polkadot's hybrid parachains (Moonbeam, Astar) and interoperability features.

**The Problem**: Rust blockchain developers currently face a fragmented toolchain. Building cross-chain applications on Polkadot requires integrating separate libraries: `subxt` for Substrate interactions and `alloy` for EVM chains. This fragmentation increases development time, introduces type inconsistencies, and creates a steeper learning curve for developers entering the Polkadot ecosystem. With 4,366 open Rust blockchain positions but limited experienced developers, reducing onboarding friction is critical for ecosystem growth.

**The Solution**: Apex SDK provides a unified abstraction layer that wraps `subxt` and `alloy` under a single, consistent API. Developers write once and deploy across Polkadot's hybrid parachain architecture (Moonbeam, Astar) and EVM networks, with full compile-time type safety and metadata-driven interfaces.

### Project Details

**Technology Stack**:

- Rust 1.85+ with async-first design
- Modular crate architecture:
  - `apex-sdk`: Unified API surface
  - `apex-sdk-core`: Shared primitives and traits
  - `apex-sdk-substrate`: Substrate integration via `subxt`
  - `apex-sdk-evm`: EVM integration via `alloy` (v1.0 stable)
  - `apex-sdk-types`: Cross-chain type definitions
- CLI tools for project scaffolding and deployment

**Core Functionality**:

- **Metadata-driven type safety**: Compile-time validation against chain metadata, eliminating runtime type mismatches
- **Unified primitives**: Consistent interfaces for accounts, transactions, balances, and events across Substrate and EVM
- **Hybrid parachain support**: First-class support for Moonbeam and Astar's dual-runtime architecture
- **XCM integration**: Native support for Cross-Consensus Messaging workflows
- **Async-first design**: Built on Tokio with feature flags for flexible runtime selection

**Technical Differentiators**:

- 60% faster U256 arithmetic vs. legacy Rust EVM libraries (leveraging `alloy` optimizations)
- Zero-cost abstractions for cross-chain type conversions
- Single compile target for multi-chain deployments

**Scope Limitations**: Client-side tooling only. No runtime pallets, bridge infrastructure, or token-related features.

### Ecosystem Fit

**Problem Statement**: The Polkadot ecosystem recorded 137.1 million transactions in Q1 2025, up 76.3% year-over-year. Hydration alone holds over $300M TVL. Yet developer tooling remains fragmented. Rust developers must currently:

1. Learn `subxt` for Substrate chain interactions
2. Separately learn `alloy` for EVM parachain (Moonbeam/Astar) interactions
3. Manually bridge type systems and handle async runtime differences
4. Maintain duplicate codepaths for hybrid parachain deployments

This friction directly impacts developer onboarding velocity and time-to-production for cross-chain applications.

**Target Audience**:

- Rust developers building DeFi protocols, indexers, arbitrage bots, and cross-chain automation
- Teams targeting Polkadot's 40+ active parachains and hybrid chains
- Projects leveraging XCM for cross-parachain asset flows
- Infrastructure providers requiring unified chain abstraction

**Quantified Impact Goals**:

- Reduce hybrid parachain integration time from ~2 weeks to ~2 days (estimated 10x improvement)
- Enable 1,000+ Rust developers to access Polkadot's hybrid architecture with a single SDK
- Provide production-ready templates for 4+ common multichain patterns (DeFi, indexing, arbitrage, asset management)

**Evidence of Need**:

- Rust is the 9th consecutive year "most admired" language (Stack Overflow 2024: 83% admiration rate)
- 38% of Rust developers now use Rust professionally, with 68.75% increase in commercial usage 2021-2024
- Polkadot ecosystem hosts 550+ chains, apps, and services
- Rust is the preferred language for Polkadot, Solana, and NEAR ecosystems
- Developer shortage: 4,366 open Rust blockchain positions with limited supply

**Comparison with Existing Solutions**:

| Feature                | subxt   | alloy   | Apex SDK         |
| ---------------------- | ------- | ------- | ---------------- |
| Substrate Support      | Full    | None    | Full (via subxt) |
| EVM Support            | None    | Full    | Full (via alloy) |
| Unified API            | N/A     | N/A     | Yes              |
| Hybrid Parachain Focus | Limited | Limited | Primary focus    |
| XCM Workflow Support   | Manual  | N/A     | Built-in helpers |
| Compile-time Safety    | Yes     | Yes     | Yes (unified)    |

Apex SDK does not replace `subxt` or `alloy` -- it composes them into a cohesive developer experience optimized for Polkadot's unique hybrid architecture.

## Team

### Team Members

- Carbobit (Lead Developer & Project Owner)
- Additional contributors as listed in repository

### Contact

- **Contact Name:** Khalid Hussein
- **Contact Email:** khalid@carbobit.com
- **Website:** https://github.com/carbobit/apex-sdk

### Legal Structure

- **Registered Address:** 30667-00100, G.P.O Nairobi, Kenya
- **Registered Legal Entity:** Carbobit LTD

### Team Experience

The core team brings hands-on experience with Rust systems programming, Substrate development, and EVM tooling. Prior work includes contributions to Rust ecosystem tooling and blockchain infrastructure projects. The team has demonstrated ability to ship production-quality Rust code with comprehensive testing and documentation.

### Team Code Repos

- https://github.com/carbobit/apex-sdk (main repository)
- https://github.com/carbobit

### Team LinkedIn Profiles

- [Khalid Hussein](https://www.linkedin.com/in/kherldhussein/)

## Development Status

**Current State**: Apex SDK v0.1.4 released November 24, 2025.

**Repository Metrics**:

- GitHub: https://github.com/carbobit/apex-sdk
- 30 stars with active commits through December 2025
- Comprehensive test suite with CI/CD pipeline

**Production Readiness**:

- Stable support for Polkadot, Kusama, and major EVM chains
- Hybrid parachain integration (Moonbeam, Astar) functional
- CLI tooling for project scaffolding
- API documentation and example projects

**Funding History**: Self-funded to date. No prior or duplicate grant applications.

## Development Roadmap

### Overview

- **Total Estimated Duration:** 3 months
- **Full-Time Equivalent (FTE):** 2
- **Total Costs:** 30,000 USD
- **DOT %:** 70%

### Milestone 1: Core SDK v0.2 - Cross-Chain Primitives

- **Estimated Duration:** 1.5 months
- **FTE:** 2
- **Costs:** 15,000 USD

| Number  | Deliverable             | Specification                                                                                                                                      | Verification                                                                                |
| ------- | ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| **0a.** | License                 | Apache 2.0                                                                                                                                         | LICENSE file in repository                                                                  |
| **0b.** | Documentation           | Inline rustdoc for all public APIs; README with quickstart                                                                                         | `cargo doc --no-deps` generates complete docs                                               |
| **0c.** | Testing Guide           | Instructions for running test suite and adding new tests                                                                                           | CONTRIBUTING.md with test commands                                                          |
| **0d.** | Docker                  | Dockerfile with complete build environment                                                                                                         | `docker build` succeeds; `docker run` executes test suite                                   |
| **0e.** | Article                 | Technical blog post: "Unified Cross-Chain Development with Apex SDK"                                                                               | Published on Medium/blog with code examples                                                 |
| **1.**  | XCM Transfer Builder    | Type-safe API for constructing reserve-based and teleport transfers between Asset Hub, Moonbeam, and Astar. Supports DOT, USDC, and custom assets. | Unit tests pass; integration test executes transfer on Paseo testnet                        |
| **2.**  | Unified Account Type    | Single `Account` struct handling SS58 (Substrate) and H160 (EVM) address formats with bidirectional conversion                                     | Unit tests cover all address format conversions; example code compiles for both chain types |
| **3.**  | Metadata v15 Support    | Full compatibility with Polkadot's metadata v15 format including runtime API discovery                                                             | Tests validate metadata parsing against Polkadot, Moonbeam, and Astar metadata blobs        |
| **4.**  | Balance Query API       | Unified `get_balance()` returning consistent `Balance` type across Substrate (system.account) and EVM (eth_getBalance)                             | Integration tests query balances on Paseo and Moonbase Alpha testnets                       |
| **5.**  | Paseo Integration Tests | End-to-end test suite executing real transactions on Paseo testnet                                                                                 | CI runs integration tests on every PR; tests documented in `/tests/integration/`            |

### Milestone 2: Developer Experience & Tooling

- **Estimated Duration:** 1.5 months
- **FTE:** 2
- **Costs:** 15,000 USD

| Number  | Deliverable                              | Specification                                                                                                                                                                                                                    | Verification                                                                          |
| ------- | ---------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| **0a.** | License                                  | Apache 2.0                                                                                                                                                                                                                       | LICENSE file in repository                                                            |
| **0b.** | Documentation                            | Searchable documentation site with API reference, guides, and examples                                                                                                                                                           | Deployed to GitHub Pages or docs.rs                                                   |
| **0c.** | Testing Guide                            | End-to-end testing patterns for multichain applications                                                                                                                                                                          | Guide includes example test scenarios                                                 |
| **0d.** | Docker                                   | Tutorial-ready images with pre-funded testnet accounts                                                                                                                                                                           | Docker Compose setup for local development                                            |
| **0e.** | Article                                  | Tutorial: "Building a Cross-Chain Arbitrage Bot on Polkadot"                                                                                                                                                                     | Published with complete working code repository                                       |
| **1.**  | CLI Scaffolding Tool                     | `apex-cli new <template>` command generating project structure. Templates: (a) `defi-bot` - price monitoring and swap execution, (b) `indexer` - event subscription and storage, (c) `xcm-manager` - cross-chain asset transfers | CLI installable via `cargo install`; each template compiles and runs against testnets |
| **2.**  | Tutorial: Cross-Parachain Asset Transfer | Step-by-step guide transferring DOT from Asset Hub to Moonbeam via XCM                                                                                                                                                           | Tutorial code executes successfully on Paseo/Moonbase                                 |
| **3.**  | Tutorial: Hybrid Chain Event Indexer     | Guide building an indexer subscribing to both Substrate and EVM events on Astar                                                                                                                                                  | Working example indexes events from Shibuya testnet                                   |
| **4.**  | Tutorial: Multi-Chain Balance Dashboard  | Guide querying and displaying balances across 5+ chains                                                                                                                                                                          | Example queries Polkadot, Kusama, Moonbeam, Astar, Ethereum                           |
| **5.**  | Benchmark Suite                          | Performance comparison measuring: (a) compile time vs. raw subxt+alloy, (b) runtime overhead for cross-chain calls, (c) binary size impact                                                                                       | Benchmark results published in `/benchmarks/` with reproducible scripts               |
| **6.**  | Community Setup                          | GitHub issue/PR templates, CONTRIBUTING.md, CODE_OF_CONDUCT.md, Discord server with #support and #development channels                                                                                                           | All files present; Discord invite link in README                                      |

### Deliverable Verification Summary

Each deliverable includes specific verification criteria:

| Category          | Verification Method                                       |
| ----------------- | --------------------------------------------------------- |
| Code deliverables | Unit tests (>80% coverage), integration tests on testnets |
| Documentation     | Builds without errors, examples compile and execute       |
| Docker            | `docker build && docker run` succeeds                     |
| Tutorials         | Step-by-step reproduction yields expected results         |
| CLI               | Installation and template generation work as documented   |
| Benchmarks        | Scripts are reproducible; results are published           |

## Future Plans

**Short-term (6 months post-grant)**:

- Integrate with Polkadot Hub and JAM architecture as specifications finalize
- Add support for ink! smart contract interactions
- Participate in Polkadot hackathons as SDK sponsor/mentor
- Collaborate with parachain teams (Moonbeam, Astar, Hydration) for deeper integrations

**Long-term (12-24 months)**:

- PolkaVM smart contract tooling integration
- Expand to additional Substrate-based ecosystems
- Enterprise support tier for production deployments
- Partnership program with DeFi protocols and infrastructure providers
- Target financial independence through adoption-driven revenue

**Sustainability Model**:

- Core SDK remains fully open-source (Apache 2.0)
- Premium enterprise support and consulting services
- Partnership revenue from ecosystem integrations
- Potential follow-on funding for advanced features (ZK integrations, AI agent tooling)

**Community-Driven Evolution**:

- Public roadmap with community input via GitHub Discussions
- Contributor recognition program
- Quarterly community calls and RFC process for major features

## Additional Information

**How did you hear about the Grants Program?** Web3 Foundation website and GitHub repository.

**Risk Mitigation**:

| Risk                                    | Mitigation                                                        |
| --------------------------------------- | ----------------------------------------------------------------- |
| Upstream breaking changes (subxt/alloy) | Pin dependency versions; maintain compatibility layer             |
| Testnet instability                     | Multi-testnet strategy (Paseo, Moonbase, Shibuya)                 |
| Scope creep                             | Strict milestone deliverables; weekly progress tracking           |
| Single maintainer risk                  | Document all architecture decisions; encourage contributors early |

**Strategic Alignment with Polkadot 2025 Priorities**:

- Supports Polkadot Hub user growth initiative
- Enables developer onboarding aligned with "DeFi First" strategy
- Facilitates Agile Coretime adoption through simplified chain interactions
- Complements PolkaVM smart contract tooling efforts
- Aligns with Paseo as the official Polkadot testnet

**Testnet Strategy**:

| Chain    | Testnet        | Purpose                                     |
| -------- | -------------- | ------------------------------------------- |
| Polkadot | Paseo          | Relay chain and Asset Hub integration tests |
| Moonbeam | Moonbase Alpha | EVM parachain integration                   |
| Astar    | Shibuya        | Hybrid (EVM + WASM) parachain testing       |

**Ecosystem Value Proposition**:
By reducing the friction for Rust developers to build on Polkadot's hybrid architecture, Apex SDK directly supports increased parachain activity, XCM usage, and DOT utility. The SDK positions Polkadot as the preferred destination for performance-critical, type-safe multichain applications.
