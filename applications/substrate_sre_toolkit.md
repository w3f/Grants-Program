# W3F Grant Proposal

> This document will be part of the terms and conditions of your agreement and therefore needs to contain all the required information about the project. Don't remove any of the mandatory parts presented in bold letters or as headlines.

- **Project Name:** Universal Substrate Bare-Metal SRE Toolkit
- **Team Name:** Uruguayan Validator Node Ops
- **Payment Address:** [REEMPLAZAR_POR_TU_WALLET_ERC20_USDT_USDC]
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 1

## Project Overview 📄

### Overview

The **Universal Substrate Bare-Metal SRE Toolkit** is a native, zero-container Python CLI suite designed for Substrate node operators, security researchers, and infrastructure engineers. 

In the current ecosystem, node observability heavily relies on virtualization (Docker/Kubernetes) and resource-intensive stacks (Prometheus/Grafana). This creates unnecessary overhead and limits the deployment of decentralized infrastructure on diverse, lightweight, or bare-metal Linux environments (like Arch Linux). 

This project solves that by providing a lightweight, direct-execution Python toolkit using the `substrate-interface` library. By leveraging direct RPC calls (`system_chain`, `system_health`), the CLI is 100% network-agnostic. It adapts dynamically to any Substrate-based chain (Polkadot, Kusama, parachains) just by receiving the WebSocket URL, allowing SREs to perform node auditing and state validation directly from the host shell.

### Project Details

We are building a purely native Python CLI suite. 
- **Core Technology:** Built on Python 3, leveraging `substrate-interface` for native, dynamic RPC interaction.
- **Zero-Container Policy:** The architecture strictly avoids Docker, VMs, or systemd daemons. Execution is manual, direct, and leaves no zombie processes.
- **Agnostic Design:** No hardcoded network rules. The tool downloads chain metadata upon handshake.
- **Features:**
  - `universal_sre_cli`: Direct fetching of peer states, block synchronization, and finality checks without needing a local telemetry server.
  - `forensic_event_decoder`: A memory-safe event listener that sanitizes and decodes Substrate events directly to the terminal, useful for tracking cross-chain memory consistency.

### Ecosystem Fit

This project fills a critical gap for alternative, Python-native DevOps tooling within the Polkadot ecosystem. While Rust dominates core node development, system administration and SRE tasks are traditionally handled via shell scripts. By providing an official, open-source Python CLI toolkit, we lower the barrier to entry for independent node operators who prioritize bare-metal efficiency over enterprise cloud abstractions.

## Team 👥

### Team members

- Name: SRE / Lead Developer (Uruguayan Validator Node Ops)

### Contact

- **Contact Name:** [TU_NOMBRE_O_ALIAS]
- **Contact Email:** [TU_CORREO]
- **Website / Public Repo:** [TU_GITHUB]

### Legal Structure

- Individual Developer (No legal entity).

### Team's experience

The developer is a seasoned Site Reliability Engineer (SRE) and Web3 Security Researcher with extensive experience in low-level Linux administration (Arch Linux), Python automation, and Substrate node operations. Recent work includes forensic analysis of cross-chain memory corruption vulnerabilities and the development of local node management controllers.

## Development Status 📖

The project is currently in the architectural design phase. The local bare-metal environment (`venv`) has been established. An initial PoC (`universal_sre_cli.py` v1.0.1) demonstrating dynamic metadata extraction and telemetry polling directly from `wss://rpc.polkadot.io` has been successfully tested on a local Arch Linux environment, bypassing high-level wrapper constraints in favor of raw JSON-RPC stability.

## Development Roadmap 🔩

### Overview

- **Total Estimated Duration:** 2 Months
- **Full-Time Equivalent (FTE):** 1
- **Total Costs:** 10,000 USD

### Milestone 1 — Agnostic CLI Engine & Native RPC Bindings

- **Estimated duration:** 1 month
- **FTE:** 1
- **Costs:** 5,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | Comprehensive inline documentation and a README detailing the strict bare-metal installation process (Python `venv` setup) and CLI usage for different networks. |
| **0c.** | Testing and Testing Guide | Unit tests for all Python modules using `pytest`. Instructions will be provided to run tests natively in a Linux shell. |
| **0d.** | Article | An introductory tutorial published on Medium/Dev.to explaining how to manage any Substrate node using native Python instead of Docker. |
| **1.** | Agnostic Connection Manager | A robust Python module utilizing `substrate-interface` to establish secure connections to any Substrate RPC, dynamically parsing the network identity via `system_chain`. |
| **2.** | `universal_sre_cli` Core | CLI tool to query node health, peer count, block height, and synchronization status directly to the terminal output for any given RPC endpoint. |

### Milestone 2 — Forensic Auditing & Extensibility

- **Estimated duration:** 1 month
- **FTE:** 1
- **Costs:** 5,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | Extended README covering the forensic modules and examples of decoding complex events from various parachains. |
| **0c.** | Testing and Testing Guide | Tests focusing on the dynamic event decoding logic across different network runtimes. |
| **1.** | `forensic_event_decoder` | CLI tool that connects to the chain state, listens for specific pallet events dynamically mapped from the runtime, and decodes them in real-time to the terminal. |
| **2.** | Extensibility Templates | Basic scaffolding included in the repository allowing operators to easily write their own custom polling modules on top of the connection manager. |

## Future Plans

Once the foundational CLI toolkit is complete, the goal is to expand the suite to include automated response scripts for node slashing events and a fully offline transaction signing module designed for air-gapped Linux environments.
