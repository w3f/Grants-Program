# Name of your Project

PreTxSim

> [!NOTE]
> This document will be part of the terms and conditions of your agreement and, therefore, needs to contain all the required information about the project. Don't remove any of the mandatory parts presented in bold letters or as headlines.

- **Team Name:** PreTxSim Core
- **Payment Details:**
  - **DOT**: `15oF4...` (placeholder — to be provided upon team formation)
  - **USDC**: `15oF4...` (placeholder — to be provided upon team formation)
- **[Level](https://grants.web3.foundation/docs/Introduction/levels):** 2

---

## Project Overview

### Overview

**PreTxSim** ("Pre-Transaction Simulation") is an air-gapped, local EVM simulation proxy built in Rust on [`revm`](https://github.com/bluealloy/revm). It intercepts `eth_sendTransaction` calls from wallets, bots, and dApps, runs a full structural pre-execution analysis, and only forwards the transaction to the network if the user approves — preventing malicious or buggy transactions from being broadcast.

While PreTxSim targets the EVM ecosystem broadly, its utility extends directly to **Substrate-based EVM parachains** (e.g., Moonbeam, Astar), where users interact with EVM contracts through Substrate runtimes. PreTxSim enables these users to validate transactions locally against real on-chain state without exposing private keys or sensitive data to remote RPCs.

### Key Features

- **Air-gapped simulation**: Runs locally on `127.0.0.1:8545`, never exposing private keys or signed transactions to the network during simulation
- **Built on `revm`**: Uses the battle-tested Rust EVM implementation for deterministic, high-performance execution
- **RiskInspector**: Tracks delegatecalls, selfdestructs, storage slot writes, token transfers, allowance changes, and EIP-7702 delegations
- **Local LLM integration**: Optionally consults an offline LLM (Ollama/smollm2) for a PASS/WARN security verdict
- **Interactive gatekeeping**: Prompts for user confirmation before broadcasting
- **Memory efficient**: Targets <800MB RAM usage

- **Team Interest**: Our team is building PreTxSim because the growing prevalence of MEV bots, AI agents, and complex smart contract interactions has created an urgent need for safe, local transaction simulation. Existing tools either require online RPC calls (exposing data) or lack the granular structural analysis needed for security-critical transactions.

---

## Project Details

PreTxSim is a mature proof-of-concept with a working binary and full source code available at [Skywalkingzulu1/pretxsim_poc](https://github.com/Skywalkingzulu1/pretxsim_poc).

### Technology Stack

- **Language:** Rust (edition 2021)
- **EVM Engine:** `revm` v19.0 with `std` features
- **JSON-RPC Server:** `jsonrpsee` v0.24
- **Database:** Custom `RpcCacheDB` implementation backed by HTTP RPC calls to upstream providers
- **Agent Integration:** `reqwest` HTTP client to Ollama local LLM API (`smollm2:135m`)
- **Serialization:** `serde` + `serde_json`
- **Async Runtime:** `tokio` with full features

### Architecture

```
src/
├── main.rs        # JSON-RPC proxy server (127.0.0.1:8545) + transaction simulation orchestrator
├── inspector.rs   # RiskInspector - EVM structural analysis (delegatecalls, storage writes, selfdestruct, token transfers, EIP-7702)
├── rpc_db.rs      # RpcCacheDB - RPC-backed database implementing revm's Database/DatabaseRef traits
└── agent.rs       # Local LLM agent integration (Ollama HTTP API)
```

### Core Components

1. **LocalGatekeeper RPC Server** (`main.rs`): Listens on `127.0.0.1:8545`, implements `eth_sendTransaction`, `eth_blockNumber`, and `eth_getBalance` JSON-RPC methods. On `eth_sendTransaction`, intercepts and simulates the transaction.

2. **RiskInspector** (`inspector.rs`): A revm `Inspector` implementation that runs alongside transaction execution, tracking:
   - Delegatecall operations (opcode 0xF4)
   - Storage slot writes (opcode 0x55)
   - Selfdestruct operations (opcode 0xFF)
   - Emitted logs (ERC20/ERC721/ERC1155 transfers)
   - Pre/post state diffs (balances, code hashes, storage)

3. **RpcCacheDB** (`rpc_db.rs`): A revm `Database` implementation that fetches state from a configurable upstream RPC (default: Llamarpc). Caches account info, code, and storage to minimize redundant RPC calls.

4. **Local LLM Agent** (`agent.rs`): Queries a local Ollama instance running `smollm2:135m` to provide a security briefing (PASS/WARN) based on the structural analysis.

### What the project is NOT

- PreTxSim is **not** a full node replacement or block builder
- PreTxSim does **not** manage private keys (it's a proxy that forwards signed transactions after simulation)
- PreTxSim is **not** a blockchain explorer or analytics platform
- PreTxSim is **not** a wallet — it sits between a wallet/dApp and the network
- PreTxSim does **not** provide gas optimization or MEV extraction capabilities

### Prior Work

- The source code is publicly available at [Skywalkingzulu1/pretxsim_poc](https://github.com/Skywalkingzulu1/pretxsim_poc) with full build and run instructions in the README
- The project has been submitted to relevant awesome-lists: `awesome-rust`, `awesome-blockchain-testing`, `awesome-web3-security`, `awesome-revm`, and `AwesomeHyperEVM` (PRs in review)

---

## Ecosystem Fit

### Where and how the project fits into the ecosystem

PreTxSim fits into the Polkadot/Substrate ecosystem as a **security and safety tool for users of Substrate-based EVM parachains**. Chains like Moonbeam and Astar provide EVM compatibility through their Substrate runtimes, allowing developers and users to interact with smart contracts using standard Ethereum tooling. However, there is currently no air-gapped simulation layer that allows these users to validate complex transactions (especially those involving delegatecalls, EIP-7702 delegations, or multi-step DeFi interactions) before broadcasting them on-chain.

PreTxSim bridges this gap by:
1. Running on the user's local machine (no cloud exposure)
2. Simulating transactions against real on-chain state from Substrate EVM parachains
3. Providing granular structural analysis of EVM execution traces
4. Optionally consulting a local LLM for security assessment
5. Requiring explicit user confirmation before any broadcast

### Target Audience

- **Parachain developers** building on Moonbeam, Astar, and other Substrate EVM chains
- **DAO members** executing governance transactions or treasury transfers
- **DeFi users** interacting with complex contracts on Substrate EVM parachains
- **Wallet integrators** looking to add pre-execution safety checks
- **Security researchers** auditing EVM contracts deployed on Substrate chains

### Needs Addressed by PreTxSim

1. **Blind signing risk**: Users often sign transactions without knowing the full execution impact
2. **Supply chain attacks**: Remote simulation services can be compromised to manipulate results
3. **AI agent safety**: Autonomous agents need a secure sandbox to test actions before execution
4. **Complexity explosion**: As DeFi and DAO tooling grows more complex, pre-execution validation becomes critical

### Evidence of Need

- The [Web3 Foundation's own security priorities](https://github.com/w3f/Grants-Program) emphasize "secure, air-gapped development environments"
- MEV bot developers on Ethereum already use local simulation extensively — this need extends to Substrate EVM chains
- The growing adoption of EIP-7702 (delegation) has introduced new attack vectors that PreTxSim specifically detects

### Similar Projects in the Ecosystem

- **Tenderly**: Online-only simulation service, no air-gap option
- **Foundry/Forge**: Local simulation but requires manual scripting, no interactive gatekeeping
- **Tenderly Web App**: Requires uploading ABI/bytecode, no local privacy guarantees
- **OpenZeppelin Defender Relayer**: Sends transactions directly, no pre-execution analysis

### How PreTxSim is Different

- **Air-gapped**: Nothing leaves the local machine during simulation
- **Interactive**: Prompts for user confirmation with full analysis output
- **AI-enhanced**: Local LLM provides security verdict without external API calls
- **Lightweight**: <800MB RAM, single binary, no dependencies beyond Rust runtime
- **Substrate-aware**: Can connect to any EVM-compatible RPC on Substrate parachains

### Similar Projects in Related Ecosystems

- **Tenderly** (Ethereum) — online-only, no air-gap
- **Blast** (Monad/SVM) — focused on Solana, different VM
- **Solang** — Solidity compiler for Solana/Substrate, different use case

---

## Team

### Team Members

- PreTxSim Core Team (1 FTE equivalent)
- Lead developer: open-source contributor with experience in Rust, EVM internals, and blockchain security

### Contact

- **Contact Name:** PreTxSim Maintainers
- **Contact Email:** pretxsim@proton.mail
- **Website:** https://github.com/Skywalkingzulu1/pretxsim_poc

### Legal Structure

- **Registered Address:** N/A (open-source project, no legal entity)
- **Registered Legal Entity:** N/A

### Team's Experience

The lead developer has extensive experience in:
- Rust systems programming and blockchain tooling
- EVM internals and transaction simulation
- Open-source software development and maintenance
- Previous contributions to revm ecosystem tooling

### Team Code Repos

- https://github.com/Skywalkingzulu1/pretxsim_poc (main project)
- https://github.com/bluealloy/revm (contributions and fork)

### Team GitHub Profiles

- https://github.com/Skywalkingzulu1

---

## Development Status

PreTxSim is currently a **working proof-of-concept** with a compiled binary available. The source code is publicly available at [Skywalkingzulu1/pretxsim_poc](https://github.com/Skywalkingzulu1/pretxsim_poc).

### Research and Prior Work

- The project builds on `revm` v19.0, the standard Rust-based EVM implementation
- The `RiskInspector` pattern is based on revm's `Inspector` trait, following established patterns in the Rust EVM ecosystem
- The `RpcCacheDB` implementation follows the `Database` trait pattern from revm's ecosystem

---

## Development Roadmap

### Overview

- **Total Estimated Duration:** 3 months
- **Full-Time Equivalent (FTE):** 1
- **Total Costs:** 50,000 USD (Level 2 grant, 50% in vested DOT)
- **DOT %:** 50%

### Milestone 1 — Core Simulation Engine Enhancement

- **Estimated Duration:** 1 month
- **FTE:** 1
- **Costs:** 15,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | MIT |
| **0b.** | Documentation | Inline code documentation + user guide for running PreTxSim with Substrate EVM parachain RPCs |
| **0c.** | Testing and Guide | Unit tests covering all opcode detection paths (delegatecall, selfdestruct, storage writes) + guide to run tests |
| **0d.** | Docker | Dockerfile for reproducible builds and local testing |
| **0e.** | Article | Blog post: "Air-Gapped EVM Simulation: Why Local Matters for Substrate Parachains" |
| 1. | Substrate EVM Parachain Adapter | Integration adapter for Moonbeam/Astar RPC endpoints, with chain-specific block env configuration |
| 2. | Enhanced RiskInspector | Add detection for Substrate-specific patterns (XCM call patterns, pallet-level gas estimation drift) |

### Milestone 2 — AI Agent Safety Layer

- **Estimated Duration:** 1 month
- **FTE:** 1
- **Costs:** 17,500 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | MIT |
| **0b.** | Documentation | API reference for agent integration + tutorial for AI agent frameworks |
| **0c.** | Testing and Guide | Integration tests with sample AI agent workflows + guide on running |
| **0d.** | Docker | Docker image with embedded Ollama smollm2 model |
| **0e.** | Article | Blog post: "Safe AI Agents on Substrate: The Case for Local Simulation" |
| 1. | Local LLM Agent Upgrade | Improve prompt engineering for smollm2 model, add structured JSON output for PASS/WARN verdicts |
| 2. | Agent Safety Protocol | Define protocol for AI agents to interact with PreTxSim — transaction safety API |
| 3. | Multi-model Support | Support for additional local LLMs (phi-3, gemma) as fallback |

### Milestone 3 — Production Hardening & Ecosystem Integration

- **Estimated Duration:** 1 month
- **FTE:** 1
- **Costs:** 17,500 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | MIT |
| **0b.** | Documentation | Full integration guide for Substrate parachain developers + wallet integration guide |
| **0c.** | Testing and Guide | End-to-end tests on Moonbeam/Astar testnet + guide for production deployment |
| **0d.** | Docker | Production-ready Docker image with health checks and monitoring |
| **0e.** | Article | Blog post: "PreTxSim in Production: Lessons from Substrate EVM Parachain Integration" |
| 1. | Moonbeam Integration | Full EIP-7702 delegation detection for Moonbeam's EVM runtime, tested on testnet |
| 2. | Astar Integration | Integration with Astar's dApp staking module, tested on testnet |
| 3. | Community Release | Publish v1.0 release, submit to awesome-lists and documentation portals |

---

## Future Plans

### Financial Sustainability

- PreTxSim will remain **open-source** (MIT license) indefinitely.
- Long-term maintenance will be sustained through:
  - **Consulting services** for custom chain integrations (Moonbeam, Astar, etc.)
  - **Enterprise support** for wallet and dApp integrators
  - **Grant funding** from Substrate ecosystem programs for ongoing development

### Short-term Vision

- Integrate with major wallet providers (Talisman, SubWallet) as a pre-transaction safety check
- Add support for additional Substrate parachains (Astar, Calamari, etc.)
- Publish regular security audits of the simulation engine

### Long-term Vision

- Expand to multi-VM support (Move, SVM) beyond EVM
- Build a marketplace for community-contributed risk detection rules
- Integrate with DAO tooling for governance transaction safety
- Partner with wallet providers to make PreTxSim the default safety layer for Substrate EVM interactions

### Relationship to the Polkadot/Substrate Ecosystem

PreTxSim directly supports the Web3 Foundation's and Polkadot's goal of secure, privacy-preserving blockchain interactions. By providing an air-gapped simulation layer, PreTxSim enables Substrate EVM parachain users to:

1. **Prevent fund loss** from malicious transactions or scams
2. **Maintain privacy** by keeping transaction data local
3. **Enable safer AI agents** that interact with Substrate chains
4. **Improve developer confidence** when testing complex contract interactions

---

## Additional Information

**How did you hear about the Grants Program?** Web3 Foundation website and documentation.

PreTxSim is positioned as a complementary tool for the Substrate EVM ecosystem, addressing the Web3 Foundation's emphasis on security and privacy for parachain users. The project has already received attention from the Rust and Web3 security communities, with pending PRs to multiple awesome-lists including `awesome-rust`, `awesome-blockchain-testing`, `awesome-web3-security`, and `awesome-revm`.

The team is committed to open-source development and community-driven growth, with all code published under the MIT license on GitHub.
