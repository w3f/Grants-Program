# Offline Election Tool

- **Team Name:** Predifi Labs
- **Payment Details:**
  - **DOT**: 14B4RC9uUzh73C5RmHMU5VgevNPccmMTnvgYPp2Y8xeUtwZY (50% vested over 2 years)
  - **Payment**: 14B4RC9uUzh73C5RmHMU5VgevNPccmMTnvgYPp2Y8xeUtwZY (USDC on Polkadot AssetHub)
- **[Level](https://grants.web3.foundation/docs/Introduction/levels):** 1

> **This application is in response to the [Offline Election Tool RFP](https://github.com/w3f/Grants-Program/blob/master/docs/RFPs/Open/offline-election-tool.md) by @michalisFr.**

## Project Overview :page_facing_up:

### Overview

**Tagline:** A modern Rust-based tool for accurately simulating Polkadot's NPoS election mechanism offline.

The Offline Election Tool aims to accurately simulate Polkadot's Nominated Proof-of-Stake (NPoS) election mechanism that determines active validators and nomination distribution. It replaces the legacy election simulator with a modern, flexible, and accurate Rust-based implementation. The tool supports both on-chain and synthetic data, exposes a CLI and HTTP API, and allows custom parameters and "what-if" scenarios for staking providers and the Decentralized Nodes program.

**Integration with Polkadot:** This tool directly interfaces with Polkadot's staking pallets and uses the same election algorithms (via `sp-npos-elections`) that run on-chain. It enables validators, nominators, and staking providers to predict election outcomes without executing actual on-chain elections.

**Motivation:** Accurate election simulation helps staking providers and decentralized node operators plan nomination strategies, forecast validator inclusion probabilities, and test stake distributions without triggering on-chain elections. The old script is outdated and lacks API support, custom account simulation, and algorithm flexibility. This project addresses these gaps by providing a production-ready, well-documented, and actively maintained tool.

### Project Details

**Technology Stack:**
- **Language:** Rust
- **Core Libraries:** `sp-npos-elections`, `sp-runtime`, `frame-election-provider-support`, `parity-scale-codec`
- **API Framework:** Axum (lightweight async HTTP server)
- **RPC Client:** `subxt` or `jsonrpsee` for on-chain data fetching
- **CLI Framework:** `clap` for command-line interface

**Architecture Overview:**

1. **Data Ingestion Layer:**
   - Fetch on-chain state from Polkadot/Kusama via RPC at specific block heights
   - Accept JSON input files for offline or synthetic scenarios
   - Support custom accounts (unbonded or non-existent voters/candidates)

2. **Election Simulation Engine:**
   - Use Substrate's `sp-npos-elections` crate for precise NPoS election logic
   - Support configurable parameters:
     - Maximum active validators
     - Maximum nominators per validator
     - Minimum nomination threshold
     - Commission rates
   - Execute phragmén or phragmms algorithms as configured

3. **Output & API Layer:**
   - **CLI Mode:** Run simulations via command-line with results output to stdout or files
   - **HTTP API:**
     - `POST /simulate`: Submit election data and parameters, receive predicted results
     - `GET /params`: Retrieve current configuration
     - `GET /health`: Health check endpoint
   - Output includes:
     - Active validator set
     - Nomination distribution per validator
     - Score/backing for each validator
     - Edge assignments (nominator → validator)

**What This Project Will NOT Include:**
- Token economics modeling or financial projections
- Deployment hosting or cloud infrastructure
- Marketing, events, or business development activities
- Auditing services (though code will be production-ready and tested)

**Validation Approach:**
- Cross-check simulation results against 20+ historical eras from Polkadot mainnet
- Target >95% parity in active validator set composition
- Target >95% accuracy in nomination distribution patterns
- Automated integration tests comparing tool output vs. actual on-chain results

### Ecosystem Fit

**Where does this project fit?**
This tool serves the Polkadot staking ecosystem by providing essential infrastructure for:
- Validator operators planning their nomination strategies
- Staking-as-a-Service providers optimizing delegation
- The Decentralized Nodes program for simulating nomination scenarios
- Researchers studying NPoS fairness, decentralization, and game theory

**Target Audience:**
- Staking providers (e.g., Stakefish, P2P Validator, Chorus One)
- Individual validators and nominators
- Decentralized Nodes program participants
- Polkadot governance contributors analyzing staking dynamics
- Academic researchers studying NPoS mechanisms

**Needs Met:**
- **Predictability:** Simulate election outcomes before committing stake
- **Strategy Testing:** Test "what-if" scenarios with custom parameters
- **Transparency:** Understand why specific validators are elected or excluded
- **Automation:** Integrate election prediction into automated staking workflows via API

**Evidence of Need:**
- The RFP itself indicates demand from the Web3 Foundation and Decentralized Nodes program
- Community discussions on [Polkadot Forum](https://forum.polkadot.network/) frequently mention the need for better staking tools
- Existing legacy script is rarely updated and lacks modern features (API, custom scenarios)

**Similar Projects:**
- **Legacy Election Simulator:** Outdated Python/JavaScript script; lacks API, extensibility, and maintenance
- **Polkadot Staking Dashboard:** Focuses on UI/UX for nominators but doesn't provide programmatic election simulation
- **This Project's Differentiation:**
  - Built in Rust using official Substrate crates (same logic as on-chain)
  - Provides both CLI and HTTP API for integration
  - Supports custom/synthetic accounts for forward-looking scenarios
  - Actively maintained with comprehensive documentation and tests

**Related Ecosystems:**
- Ethereum staking tools focus on validator rotation and rewards, but NPoS is unique to Polkadot
- Cosmos staking is simpler (top-N validators); NPoS election logic is more complex and novel

## Team :busts_in_silhouette:

### Team members

- **Team Leader:** Devendra Tanwar
- **AI Engineering Support:** GPT-5 (technical assistant for algorithm design and Substrate integration)

### Contact

- **Contact Name:** Devendra Tanwar
- **Contact Email:** dev@predifi.com
- **Website:** https://predifi.com

### Legal Structure

- **Registered Address:** To be provided during KYC/KYB process
- **Registered Legal Entity:** Predifi Labs (registration details to be confirmed in KYC)

### Team's experience

**Devendra Tanwar** is a full-stack engineer with extensive experience in:
- Backend systems development (Rust, Go, Python)
- DeFi protocol integration and smart contract interactions
- Substrate/Polkadot ecosystem contributions
- Building developer tooling and APIs for blockchain applications

Prior work includes contributions to DeFi protocols, staking infrastructure, and data analytics pipelines for on-chain activity.

**GPT-5 AI Support:** Used for algorithm design, Substrate crate integration, and technical documentation to accelerate development while maintaining high code quality.

### Team Code Repos

- https://github.com/Predifi-com/offline-election-tool (to be created)
- https://github.com/Predifi-com

Team member GitHub:
- https://github.com/devendra-tanwar (or actual handle)

### Team LinkedIn Profiles

- https://www.linkedin.com/in/devendra-tanwar (placeholder - replace with actual)

## Development Status :open_book:

This application is in direct response to the **[Offline Election Tool RFP](https://github.com/w3f/Grants-Program/blob/master/docs/RFPs/Open/offline-election-tool.md)** published by @michalisFr.

**Research and Preparation:**
- Reviewed the legacy election simulator and identified its limitations
- Analyzed Substrate's `sp-npos-elections` crate and election-provider pallets
- Studied Polkadot's staking mechanics via runtime code and on-chain data
- Reviewed community discussions on staking strategy and tooling needs
- Defined API specifications and data models for the HTTP interface

**References:**
- [Polkadot NPoS Research](https://research.web3.foundation/Polkadot/protocols/NPoS)
- [sp-npos-elections documentation](https://paritytech.github.io/substrate/master/sp_npos_elections/)
- [Decentralized Nodes Program](https://wiki.polkadot.network/docs/thousand-validators)

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 4 weeks
- **Full-Time Equivalent (FTE):** 1
- **Total Costs:** 5,000 USD
- **DOT %:** 50% (vested over 2 years)

### Milestone 1 — Update Original Script & Accurate Prediction

- **Estimated duration:** 2 weeks
- **FTE:** 1
- **Costs:** 2,500 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | Inline documentation for all modules, plus a comprehensive README with setup instructions, usage examples, and architecture overview. |
| **0c.** | Testing and Testing Guide | Unit tests for core election logic, integration tests comparing results against historical on-chain elections. Guide will explain how to run tests locally. |
| **0d.** | Docker | Dockerfile for building and running the tool in a containerized environment. |
| 1. | Core Election Engine | Implement Rust-based election simulation using `sp-npos-elections` with support for phragmén/phragmms algorithms. |
| 2. | On-Chain Data Fetching | Integrate RPC client to fetch staking state (validators, nominators, stakes, commissions) at specific block heights. |
| 3. | JSON Input Support | Accept offline JSON files with custom staking data for simulation. |
| 4. | Result Output | Generate detailed output: active validator set, nomination distribution, scores, and edge assignments. |
| 5. | Validation Suite | Automated tests comparing tool output against 20+ historical Polkadot eras to ensure >95% accuracy. |

### Milestone 2 — Support Non-Existent Voters and Candidates

- **Estimated Duration:** 1 week
- **FTE:** 1
- **Costs:** 1,250 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | Updated README and inline docs explaining how to add synthetic accounts (unbonded or non-existent voters/candidates). |
| **0c.** | Testing and Testing Guide | Unit tests for synthetic account handling, integration tests for "what-if" scenarios. |
| **0d.** | Docker | Updated Dockerfile including new features. |
| 1. | Synthetic Account Injection | Allow users to specify custom voters and candidates (not present on-chain or unbonded) via JSON input. |
| 2. | What-If Scenarios | Enable testing of hypothetical stake distributions and candidate additions without altering on-chain data. |
| 3. | Validation | Ensure synthetic accounts integrate correctly with election logic and produce valid results. |

### Milestone 3 — API Development (CLI + HTTP)

- **Estimated Duration:** 1 week
- **FTE:** 1
- **Costs:** 1,250 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | API reference documentation (OpenAPI/Swagger spec), CLI usage guide, and integration examples. |
| **0c.** | Testing and Testing Guide | API endpoint tests, CLI integration tests, and performance benchmarks. |
| **0d.** | Docker | Production-ready Docker image for running HTTP API server. |
| **0e.** | Article | Publish a Medium/blog post explaining the tool's features, use cases, and how it benefits the Polkadot staking ecosystem. |
| 1. | CLI Interface | Command-line tool with subcommands for running simulations, fetching on-chain data, and managing configurations. Uses `clap` for argument parsing. |
| 2. | HTTP API | Axum-based REST API with endpoints: `POST /simulate`, `GET /params`, `GET /health`. JSON request/response format. |
| 3. | API Documentation | OpenAPI 3.0 spec and interactive Swagger UI for API testing. |
| 4. | Integration Guide | Step-by-step tutorial for integrating the tool into staking workflows (e.g., via curl, Postman, or automated scripts). |
| 5. | Performance Optimization | Ensure simulations complete within reasonable time (<10s for typical Polkadot election size). |

## Future Plans

**Short-Term (0-6 months):**
- Promote the tool within the Polkadot community via forum posts, Twitter, and developer workshops
- Gather feedback from staking providers and iterate on features
- Add support for Kusama and other Substrate-based chains

**Long-Term Maintenance:**
- Monitor Substrate/Polkadot runtime upgrades and update the tool accordingly
- Accept community contributions via GitHub (issues, PRs, feature requests)
- Potential future grant for advanced features (e.g., historical analysis dashboard, gas-optimized smart contract integration)

**Sustainability:**
- Tool will remain open-source and community-maintained
- Predifi Labs will provide ongoing support as part of our Polkadot ecosystem contributions
- Consider offering premium hosted API service for enterprise staking providers (self-funded)

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?**
Web3 Foundation Website and the RFP announcement in the Grants-Program repository.

**Additional Context:**
- This tool directly supports the **Decentralized Nodes program** by enabling offline validator selection prediction and nomination planning.
- Benefits extend to staking providers, community validators, and researchers studying NPoS fairness and decentralization.
- We are committed to delivering a production-ready, well-documented, and actively maintained tool that becomes a standard resource in the Polkadot staking ecosystem.

**Previous Work:**
- No previous Web3 Foundation grants applied for by Predifi Labs.
- Team has prior experience contributing to DeFi protocols and blockchain developer tooling in the Polkadot ecosystem.
