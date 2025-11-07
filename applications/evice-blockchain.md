# Evice Blockchain: Quantum-Resistant WASM L1/L2 with ZK-Aggregation

* **Project Name:** Evice Blockchain
* **Team Name:** Evice Labs
* **Level:** 3
* **Payment Address:** 5Gpx19KAKftCDuxA2JuHfkkKuVBeiSp6eq9HUsd2LqDGUXw5

## Project Overview 📄

Overview

Evice is a high-performance Layer 1 blockchain platform designed from the ground up to advance the WASM (WebAssembly) ecosystem. It addresses two critical, long-term problems facing the entire Web3 space: scalability and quantum security.

Our project is not just another L1; it is a natively integrated L1/L2 hybrid architecture.

1. L1 (Aegis Consensus): A novel hybrid PoS consensus (Velocity layer for fast confirmations, Gravity layer for absolute finality) that serves as a purpose-built settlement layer.
2. L2 (Native ZK-Rollup): A native ZK-Rollup solution that features an AggregationCircuit, allowing multiple L2 batch proofs to be combined into one single, cheap proof for L1 verification.
3. WASM Runtime: We explicitly use a WASM runtime (not EVM) to empower millions of Rust, C++, and Go developers.
4. Post-Quantum Security: We are natively quantum-resistant by using Dilithium (a NIST-standardized PQC algorithm) for all L1 signatures.

### Project Details

Evice Blockchain is a hybrid Layer 1 (L1) and Layer 2 (L2) platform, designed from the ground up for native integration rather than as separate, siloed components. The L1, named "Aegis," is a purpose-built settlement layer , while the L2 provides massive scalability through a native ZK-Rollup.
Our architecture is designed to holistically solve the blockchain trilemma by focusing on three core technical pillars: Post-Quantum Security, a WASM-based runtime, and a highly efficient ZK-Rollup architecture.

1. Layer 1 (Aegis): Post-Quantum Security & Hybrid Consensus

The L1 serves as the foundation for security and decentralization.
Post-Quantum Security (PQC): Evice’s primary differentiator is its native Post-Quantum Security. All L1 transactions and block signatures use Dilithium , a (draft) NIST-standardized algorithm. This is a strategic choice to secure the platform and its users' assets against the future threat of quantum computers.
Aegis Hybrid Consensus (PoS): The L1 is secured by 'Aegis,' an innovative hybrid Proof-of-Stake (PoS) consensus protocol. It is not a single mechanism, but two layers working in concert to balance the trilemma:
Velocity Layer: Provides extremely fast, optimistic transaction confirmations (ideal for UX) using Quorum Certificates (QC).
Gravity Layer: Provides absolute, irreversible finality periodically (at each epoch). It achieves this by aggregating thousands of validator signatures using BLS (Boneh-Lynn-Shacham) into a single, compact FinalityCertificate.

2. L1 Runtime: WASM (WebAssembly)

Evice explicitly avoids the EVM in favor of a modern WASM (WebAssembly) Runtime.
Developer Accessibility: This is a strategic choice to attract the millions of developers proficient in Rust, C++, and Go, rather than forcing them to learn Solidity.
Secure Execution: Contracts are executed in a secure, sandboxed environment using the Wasmer runtime. Every WASM instruction and host function call is metered with "gas" to prevent DoS attacks.
Storage & State: The L1 state machine uses a Merkle Patricia Trie implemented with trie-db and backed by ParityDB for persistent storage.

3. Layer 2: Native ZK-Rollup with Proof Aggregation

Evice's scalability is achieved via its natively integrated ZK-Rollup (L2). This L2 is not an afterthought; the L1 is purpose-built to be the most efficient settlement layer for it.
Core Innovation: Proof Aggregation: The key scalability innovation is Proof Aggregation. The L2 Aggregator component uses a specific AggregationCircuit (Groth16/BW6-761). This circuit recursively combines multiple ZK-SNARK proofs from different L2 batches into a single, final proof.
The Benefit: This single aggregated proof is then submitted to the L1. This process dramatically reduces the L1 data load and verification costs , enabling massive throughput with transaction fees that are fundamentally lower than L2s built on general-purpose L1s.
L2 Operations: L2 operations are managed by a Sequencer , which is selected on-chain at L1 using a Stake-Weighted VRF mechanism.

4. Comprehensive Cryptographic Stack

The platform utilizes a diverse, best-in-class cryptographic stack to secure every component:
  - L1 Signatures: Dilithium (PQC).
  - L1 Finality: BLS Aggregated Signatures.
  - L2 ZK-Proofs: Groth16 (on BLS12-377 and BW6-761 curves).
  - L2 Hashing (in-circuit): Poseidon (ZK-optimized hash).
  - L1 State Hashing: Keccak-256 (for the Merkle Patricia Trie).

Ecosystem Fit

This project directly benefits the Web3 Foundation and Polkadot ecosystem in several key ways:
1. **Advances the WASM Ecosystem**: By building a high-performance L1/L2 platform natively on WASM, we provide a compelling alternative for developers outside the EVM monoculture. Our mature tooling (faucet, wallet generator, CLI) will lower the barrier to entry for WASM development.
2. **Contributes to PQC Public Good**: We are implementing a production-ready, open-source module for Dilithium (PQC). This research and code are a vital public good that can be adapted and utilized by other projects in the W3F ecosystem facing the future quantum threat.
3. **ZK-Rollup Research**: Our L1/L2 co-design and Proof Aggregation architecture provides a novel case study in high-efficiency ZK-Rollup design, contributing valuable research to the entire space.

### Team 👥

- **Name of team leader:** Syafiq Nabil Assirhindi
- **Names of team members:**
  - Syafiq Nabil Assirhindi (Founder & Core Developer)
  - Cahyo Romadhon (dApp Developer - _Joining at Milestone 3_)
  - Dani Putra (Business Strategy - _Joining at Milestone 3_)

### Contact

- **Contact Name:** Syafiq Nabil Assirhindi
- **Contact Email:** syafiqeil@evice.my.id

### Legal Structure

- "We are currently structured as an early-stage, founder-led project, with plans to formalize as a Foundation upon securing our seed round."

### Team's Experience

As the founder and core developer, I have dedicated 13-16 hours daily over the last five months to build this entire full-stack platform (L1 Aegis consensus, P2P layer, L2 ZK-Rollup, and WASM runtime) by myself. 
This initial solo effort has successfully proven the technical feasibility and core architecture of the project.

This grant is structured in two strategic phases:

1.  **Phase 1 (Milestones 1 & 2):** Funds will support me as the **1.0 FTE** (Founder) to complete the core open-source protocol, which includes the critical PQC module and the ZK-Aggregation circuits. This requires the specialized hardware outlined in M1.
2.  **Phase 2 (Milestone 3):** Upon completion of the core tech, the funding activates our committed team. **Cahyo Romadhon** (an experienced dApp Developer) and **Dani Putra** (Business Strategist) will join full-time. The M3 budget (ramping to **2.5 FTE**) will fund this expanded team to build the developer tooling, SDKs, and infrastructure necessary to launch the public-facing Testnet.
   
### Team Code Repositories

* `https://github.com/syafiqeil/evice-blockchain`
  
Important Note: Our main repository is currently private. This is a strategic decision to protect our intellectual property (IP) and ensure the code is professionally audited before a public release, especially given the sensitivity of our novel cryptography (PQC Dilithium) and ZK circuits.
Proof of Current Progress: For an in-depth technical review of our architecture, design, and progress, please refer to our 14-page Technical Whitepaper: [https://www.evice.my.id/Evice.pdf].
Grant Commitment: We are fully committed to open-source transparency. As detailed in our milestone, Deliverable 0a of Milestone 1 is to make this repository public under an Apache 2.0 license upon grant approval.
Review Access (Optional): We are happy to provide temporary, private read-access to designated W3F evaluation committee members upon request, if required for the due diligence process.
  
## Development Roadmap 🗺️

### Overview

- **Total Estimated Duration:** 6 Months
- **Full-Time Equivalent (FTE):** Ramps from 1.0 (for M1/M2) to 2.5 (for M3)
- **Total Costs:** $40,000 USD

---

### Milestone 1: L1 Core Prototype & PQC Implementation

- **Estimated duration:** 2 months
- **FTE:** **1.0**
- **Costs:** **$10,000 USD**

**Justification for Cost:** This initial $10,000 is primarily allocated to **unlocking development**. The majority of this is budgeted for the one-time **Capital Expenditure (CapEx)** for the high-performance server, which is a critical bottleneck. 
The remaining funds will serve as the stipend for the **1.0 FTE** (Syafiq Nabil) to execute this milestone.

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide core documentation of the consensus and crypto modules. |
| 1. | L1 Consensus Module | Code for the Aegis consensus (Velocity & Gravity layers) is implemented and functional in a private test environment. |
| 2. | PQC Crypto Module | The Dilithium signature scheme is fully integrated for L1 transaction and block signing. |
| 3. | L1/L2 Bridge (Stub) | A basic L1 smart contract (WASM) is implemented to serve as the target for L2 settlement. |
| 4. | Report | A technical report on the PQC implementation and consensus simulation results. |

---

### Milestone 2: L2 ZK-Rollup & Aggregation

- **Estimated duration:** 2 months
- **FTE:** **1.0**
- **Costs:** **$10,000 USD**

**Justification for Cost:** This funding provides the stipend for the **1.0 FTE** (Syafiq Nabil) to dedicate two months to building the core ZK-Rollup components, including the complex `AggregationCircuit`.

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 1. | ZK-Rollup Node | A functional Sequencer and Prover are implemented. |
| 2. | AggregationCircuit | The `AggregationCircuit` is implemented, capable of aggregating at least two L2 batch proofs into one. |
| 3. | L1/L2 Communication | The L2 Sequencer can successfully post the aggregated proof to the L1 bridge contract (from M1) for verification. |

---

### Milestone 3: Public Testnet & Tooling

- **Estimated duration:** 2 months
- **FTE:** **2.5**
- **Costs:** **$20,000 USD**

**Justification for Cost:** This budget funds the **full 2.5 FTE team** (Syafiq, Cahyo, and Dani) to build the developer tooling, SDK, and infrastructure needed for a public-facing testnet. 
It also covers the initial cloud hosting costs for this public environment.

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 1. | Public Testnet | A public-facing testnet (per roadmap Q1 2026) is launched and stable. |
| 2. | Developer Tooling | The `validator_tool`, `faucet`, and `create_tx` CLI tools are documented and released. |
| 3. | SDK | A basic SDK for smart contract deployment on the WASM runtime is provided. |
| 4. | Article | We will publish a technical article detailing the testnet architecture and performance benchmarks. |

## Future Plans 🚀

Following the completion of these milestones, we will proceed with our full external security audit (Q1 2026) and prepare for our Mainnet launch (Q2 2026).
Our goal is to use this grant to build the foundational, secure public good, which will then be supported by our future seed round (Q4 2025) for ecosystem growth and marketing.
