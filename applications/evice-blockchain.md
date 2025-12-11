# Evice Pallets: PQC & ZK-Aggregation Public Goods for Polkadot

* **Project Name:** Evice Pallets: Quantum-Resistance & ZK-Aggregation
* **Team Name:** Evice Labs
* **Level:** 3
* **Payment Address:** 5Gpx19KAKftCDuxA2JuHfkkKuVBeiSp6eq9HUsd2LqDGUXw5

## Project Overview 📄

**Overview**

The Polkadot ecosystem faces two fundamental future challenges: (1) the long-term security threat from quantum computing, and (2) the need for efficient on-chain ZK-Rollup verification for Layer 2 scalability.

Our project aims to solve both of these problems by providing two modular **Substrate pallets** as _public goods_ for the entire ecosystem:

1. `pallet-pqc` (**Post-Quantum Security**): A module that integrates Quantum-Resistant Cryptography (**Dilithium**, a NIST standard) into Substrate.
   This will allow any parachain to adopt post-quantum signatures for long-term
   asset security.
2. `pallet-zk-aggregation` (**L2-Rollup Verification**): A high-performance Groth16 verification module optimized for **proof aggregation**.
   This will enable any parachain to act as a highly-efficient L2-Rollup settlement layer, drastically reducing on-chain verification costs.

We have already proven the technical feasibility of both advanced components in our **standalone L1/L2 reference implementation**, **Evice-Bockchain-Aegis**. 
That repository (now public) demonstrates full-featured, working PQC and ZK-Aggregation within a complete PoS system.

This grant is to **extract**, **polish**, and **deliver** this proven technology as production-quality pallets for use by all Substrate developers.

### Project Details

This proposal focuses on delivering two modular Substrate pallets. Our existing L1/L2 architecture serves as our case study and technical guarantee.

**1. Deliverable 1: `pallet-pqc` (Quantum-Resistant Pallet)**

**Problem**: Current ECDSA/Ed25519 signatures are vulnerable to future quantum computer attacks.
**Solution**: `pallet-pqc` will provide an implementation of the Substrate `Signature` trait using Dilithium-2, a NIST-standardized Post-Quantum Cryptography (PQC) scheme.

Features:
  - Extraction of our proven Dilithium logic from `evice_blockchain/src/crypto.rs`.
  - Wrapping it as a configurable `pallet`.
  - Enabling parachains to validate _extrinsics_ (transactions) signed with Dilithium, providing quantum-resistant security.

**2. Deliverable 2: pallet-zk-aggregation (ZK Verification Pallet)**

**Problem**: Verifying ZK-SNARKs in the Substrate runtime is extremely expensive. Verifying _many_ L2 proofs (one per batch) is economically impractical.
**Solution**: `pallet-zk-aggregation` will provide an on-chain verifier for aggregated Groth16 proofs. This is based on our existing `AggregationCircuit` (BW6-761).

Features:
  - The pallet will expose a runtime function (`verify_aggregated_proof`) that can take _one single proof_ which recursively validates _many_ L2 batch proofs.
  - This drastically reduces L2 settlement gas costs on Polkadot, enabling higher throughput.
  - We will also update our off-chain tools (`prover` and `aggregator`) to be compatible with this pallet.

### Ecosystem Fit

This directly addresses W3F feedback by providing concrete value to the Polkadot ecosystem:

1. `pallet-pqc` **Contribution (Public Good)**: We are delivering a ready-to-use, open-source quantum security module.
   This is a vital public good that _any parachain_ (and potentially the Relay Chain itself) can adopt to future-proof
   the ecosystem against quantum threats.
2. **Enabling L2 Scalability**: `pallet-zk-aggregation` significantly lowers the barrier for teams wanting to build ZK-
   Rollups on Polkadot. It strengthens Polkadot's narrative as a secure Layer 0 settlement hub.
3. **Long-Term Vision (Evice Parachain)**: This grant is **Phase 1** of our vision. Our long-term goal is to launch Evice as
   a WASM + ZK parachain. By funding this grant, W3F funds the construction of our core dependencies as _public
   goods_, which we (and other parachains) will use to build on Polkadot in **Phase 2**.

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

We are currently structured as an early-stage, founder-led project, with plans to formalize as a Foundation upon securing initial funding.

### Team's Experience

As the founder and core developer, I have single-handedly built the full L1/L2 reference implementation (`evice-blockchain`) from scratch. 
This repository now public serves as the direct proof of our experience, as requested by the review team.

Proof of our specific expertise includes:
  - Blockchain Systems: Designing and implementing a BFT PoS consensus engine (`src/consensus.rs`), a `libp2p` networking stack (`src/p2p.rs`), and a state machine (`src/state.rs`).
  - Advanced Cryptography: Implementing Dilithium (PQC) for L1 signatures (`src/crypto.rs`), BLS for finality, and VRFs for sequencer selection (`src/sequencer_selection.rs`).
  - ZK Circuits & Aggregation: Designing and implementing the `BatchSystemCircuit` (`src/l2_circuit.rs`) and `AggregationCircuit` (`src/l2_aggregation.rs`) using `arkworks`.
  - WASM Runtime: Building a host environment for WASM smart contract execution (`src/wasm_runtime.rs`).
    
This funding will allow us to focus on the next step: learning Substrate and migrating this proven technology into robust Polkadot pallets.
   
### Team Code Repositories

* `https://github.com/syafiqeil/Evice-Blockchain-Aegis`
  
This repository is now public (Apache 2.0), as requested. It contains the complete source code for the standalone L1/L2 that proves the technical feasibility of all components we propose to build as pallets.
  
## Development Roadmap 🗺️

### Overview

- **Total Estimated Duration:** 6 Months
- **Full-Time Equivalent (FTE):** Ramps from 1.0 (for M1/M2) to 2.5 (for M3)
- **Total Costs:** $40,000 USD

---

### Milestone 1: `pallet-pqc` (Quantum Security Module)

- **Estimated duration:** 2 months
- **FTE:** **1.0**
- **Costs:** **$10,000 USD**

**Justification for Cost:** This funding will salary 1.0 FTE (Syafiq Nabil) to perform the necessary Substrate integration research and develop the core `pallet-pqc`. This is fundamental R&D-heavy work.

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 (Already committed to the `evice-blockchain` repo). |
| 0b. | Documentation | We will provide architectural documentation for the new pallet. |
| 1. | pallet-pqc Code | The code for `pallet-pqc` is created. This pallet will integrate Dilithium signatures (from `src/crypto.rs`) as a `Signature` trait usable by the Substrate runtime. |
| 2. | Demo Node | A simple demo Substrate node that can validate extrinsics signed using Dilithium. |
| 3. | Report | A technical report detailing the `pallet-pqc` implementation and a tutorial on how to integrate it into another parachain. |

---

### Milestone 2: `pallet-zk-aggregation` (ZK Verification Module)

- **Estimated duration:** 2 months
- **FTE:** **1.0**
- **Costs:** **$10,000 USD**

**Justification for Cost:** This funding will salary 1.0 FTE (Syafiq Nabil). It also covers the **Capital Expenditure (CapEx)** for a high-performance server required for 
intensive ZK circuit compilation and testing the `prover/aggregator` against the new pallet.

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 1. | pallet-zk-aggregation Code | The code for `pallet-zk-aggregation` is created. This pallet will extract the Groth16 verification logic from `src/l2_aggregation.rs` and expose a `verify_aggregated_proof` runtime function. |
| 2. | Updated ZK Tools | The `prover` and `aggregator` binaries are updated to produce proofs compatible with the pallet's input format. |
| 3. | Demo Integration | The Substrate node from M1 is updated to import this pallet. We will demonstrate an extrinsic successfully submitting a valid aggregated proof to the pallet. |

---

### Milestone 3: Full Integration & Ecosystem Readiness

- **Estimated duration:** 2 months
- **FTE:** **2.5**
- **Costs:** **$20,000 USD**

**Justification for Cost:** This budget activates our full team (**2.5 FTE**: Syafiq, Cahyo, Dani) to build the infrastructure, SDKs, and public demos around the completed pallets. 
This prepares us for adoption by other teams and for Phase 2 (Evice Parachain).

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 1. | Public Demo Testnet | A public Substrate "Solo Chain" is launched, running `pallet-pqc`, `pallet-zk-aggregation`, and `pallet-contracts` (WASM). |
| 2. | Developer Tooling | The `faucet` and `create_tx` tools are updated to interact with the new Substrate testnet. |
| 3. | SDK & Documentation | A basic SDK and comprehensive tutorials are published, showing developers how to use both of our pallets (PQC & ZK-Agg) in their own projects. |
| 4. | Article | We will publish a technical article detailing our public good architecture and its performance benchmarks on Substrate. |

## Future Plans 🚀

After successfully delivering these three milestones (**Phase 1**), we will have battle-tested and adopted public goods, as well as a solid technical foundation.

Our next step will be to submit a **Phase 2** proposal to build the full **Evice Parachain**. This parachain will use the `pallet-pqc` and `pallet-zk-aggregation` funded by this grant, 
combining them with `pallet-contracts` to create the first quantum-resistant WASM + ZK-Rollup L1/L2 platform in the Polkadot ecosystem.
