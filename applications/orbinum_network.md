# Orbinum Network

![Orbinum Network](https://orbinum.network/orbinum-logo-bg-black.png)

- **Team Name:** Orbinum Network
- **Payment Address:** 15Lyf1inrKiNU3vVgfeupnkDt2bSCJMHR5cxzsQW9SJz6dww
- **[Level](https://grants.web3.foundation/docs/Introduction/levels):** 1

## Project Overview :page_facing_up:

### Overview

A privacy-first Layer 1 blockchain powered by zero-knowledge proofs, focusing on private transactions, selective disclosure, and cross-chain private identity.

Orbinum is a decentralized network architected around three core pillars: **Private Transactions** through an on-chain shielded pool using ZK-SNARKs and Poseidon hashing; **Selective Disclosure** allowing users to prove specific transaction facts or asset ownership without exposing their full history; and **Private Links**, a novel mechanism to cryptographically link external wallets to a Substrate identity without ever revealing the address on-chain.

Built on the Substrate framework, Orbinum is designed to participate in the Polkadot ecosystem as a specialized privacy layer. By supporting standard EVM execution alongside its ZK primitives, it provides a unified environment where users can shield assets, interact with smart contracts, and manage cross-chain identity seamlessly.

Our team's interest stems from extensive research in blockchain cryptography, privacy models, and Substrate technologies. We are driven by the goal of achieving high-speed execution, low-cost transactions, and real privacy at the protocol level, solving the dichotomy between total public transparency and complete anonymity.

### Project Details

**1. Mockups/designs of any UI components**
Our visual interface is centered around the **Privacy Explorer**, a block explorer customized to handle shielded transactions. It allows users to view the public aspects of the shielded pool (e.g., global commitments, Merkle roots) and utilize their viewing keys to decrypt their own `EncryptedMemos`.

<div align="center">
  <img src="https://orbinum.network/shield.png" alt="Privacy Explorer - Shielded Transactions" width="800" />
  <br/>
  <em>Figure 1: Main interface of the Privacy Explorer displaying the global state of the shielded pool, including recent commitments, pool balance per asset, and the Merkle tree status.</em>
</div>
<br/>
<div align="center">
  <img src="https://orbinum.network/vk-onchain.png" alt="Privacy Explorer - Verification Keys" width="800" />
  <br/>
  <em>Figure 2: The Verification Key registry interface, showing the Groth16 cryptographic keys that are securely stored directly on the Substrate blockchain for trustless proof validation.</em>
</div>

**2. Data models / API specifications of the core functionality**
The core functionality relies on two main custom pallets: `pallet-shielded-pool` (managing the UTXO state) and `pallet-zk-verifier` (managing the Zero-Knowledge cryptographic proofs).

- **Commitment (`[u8; 32]`)**: Represents a private note in the UTXO model. It is a Poseidon hash (BN254) of the note's value, asset ID, owner's public key, and a blinding factor.
- **Nullifier (`[u8; 32]`)**: Prevents double-spending. It is deterministic per note, computed using the owner's private key and the note's blinding factor.
- **EncryptedMemo (`[u8; 104]`)**: Symmetrically encrypted metadata stored alongside each commitment, enabling note recovery and selective disclosure (FATF Travel Rule compliance).
- **Verification Key (VK)**: Stored on-chain in `pallet-zk-verifier` to validate Groth16 proofs natively without trusting off-chain infrastructure.
- **Private Link**: 
  - `register(commitment, signature)`: Links an EVM account to a Substrate identity off-chain.
  - `reveal(proof)`: Promotes a private link to a public chain link via a ZK-SNARK proof.

**3. An overview of the technology stack to be used**
Orbinum leverages a modern, Rust-centric stack optimized for ZK cryptography:
- **Blockchain Framework:** Substrate (Polkadot SDK `stable2506`) built in Rust (2024 edition).
- **Consensus & Smart Contracts:** Frontier EVM pallet for full Ethereum compatibility, allowing seamless integration between shielded pallets and Solidity contracts via Precompiles.
- **Cryptography (Native):** **Arkworks** ecosystem (`ark-bn254`, `ark-ff`) to implement the Poseidon hash function and verify Groth16 proofs directly within the Substrate runtime.
- **ZK Circuits (Off-chain generation):** Circuits written in **Circom**, generating Groth16 SNARK proofs via `snarkjs` and custom WASM bindings (`protocol-core`) to allow users to generate proofs directly in their browsers.

**4. Documentation of core components, protocols, architecture, etc. to be deployed**
We provide extensively documented open-source tooling, protocols, and architecture definitions available at [docs.orbinum.network](https://docs.orbinum.network). Furthermore, our core components are deployed and publicly accessible for developers:
- **Rust Primitives:** Core ZK cryptography and protocol primitives are published as Crates [via crates.io](https://crates.io/users/nol4lej).
- `@orbinum/protocol-core`: Main application-level WASM/Native SDK connecting clients to the Substrate node. 
- `@orbinum/groth16-proofs`: Open-source toolset built to compute zero-knowledge proofs (Groth16).
- `@orbinum/circuits`: The Circom definitions specifically tuned for Orbinum's architecture.
- `@orbinum/proof-generator`: A client library that consumes CDNs and the aforementioned circuits to seamlessly generate SNARK proofs directly in the user’s browser.

**5. PoC/MVP or other relevant prior work or research on the topic**
The project has moved past the theoretical phase into a functional PoC. We currently have a local development node integrating `pallet-shielded-pool` and `pallet-zk-verifier`, alongside the **Privacy Explorer** that reads on-chain events and parses private transactions. Crucially, the aforementioned NPM packages and Rust crates have already been developed and published to validate the off-chain Prover -> on-chain Verifier flow.

**6. What your project is not or will not provide or implement**
Orbinum is **not** a general-purpose ZKVM (Zero-Knowledge Virtual Machine) nor a Layer 2 rollup designed to execute arbitrary Solidity code entirely in ZK. It is a sovereign Layer 1 chain where ZK cryptography is strategically utilized for specific, highly optimized operational primitives: **transactional privacy and cross-chain identity (Private Links)**. Furthermore, Orbinum is **not an anonymity-only mixer**; the architecture requires "Selective Disclosure" functions at its core to ensure the network can natively comply with audit demands and financial regulations without compromising granular privacy.


### Ecosystem Fit

Orbinum acts as a foundational privacy layer designed specifically for the Substrate/Polkadot ecosystem. It is structured as an interoperable L1 that can seamlessly communicate with other networks over XCM, allowing users across the ecosystem to shield assets and manage private identities natively.

Our audience includes:
  - **Everyday Users & Institutions** who want financial data sovereignty but require the ability to selectively disclose records for tax or compliance purposes.
  - **DApp and Substrate Developers** who can leverage our EVM precompiles to build privacy-preserving applications or verify cross-chain "Private Links" without building complex ZK infrastructure themselves.

Orbinum solves the ongoing "privacy vs. compliance" dilemma. Public blockchains expose all financial history, while pure "mixer" protocols (like Tornado Cash) have faced severe regulatory backlash due to their inability to prevent illicit use. Orbinum provides **Manageable Privacy**, allowing users to remain private by default while retaining the cryptographic ability to prove the origin or amount of funds to authorized auditors via ZK proofs.

The growing regulatory pressure on DeFi and privacy protocols globally (such as the FATF Travel Rule and OFAC actions) clearly demonstrates that privacy tools must evolve. Users are demanding data sovereignty, but institutions and regulators demand auditability. Discussions across Web3 regarding Decentralized Identity (DID) highlight the urgent need for "selective disclosure" as a first-class primitive built directly into the protocol.

While the Polkadot ecosystem initially saw **Manta Network** (Manta Atlantic) addressing early ZK privacy, Manta’s core focus has increasingly shifted toward becoming a general-purpose EVM L2 on Ethereum (Manta Pacific) centered on DeFi yields. Orbinum differentiates itself by remaining resolutely committed to being the native privacy infrastructure for Substrate. Rather than competing as another general-purpose execution environment, Orbinum focuses strictly on building primitives like **Selective Disclosure** (on-chain audit policies) and **Private Links** (cross-chain confidential identity), positioning itself as the specialized hub for privacy and compliance in the ecosystem.

In the broader Web3 landscape, protocols like Zcash or Monero offer absolute privacy but remain isolated, non-programmable networks. Conversely, projects like Aztec are building general-purpose ZK rollups for Ethereum. Orbinum occupies a unique middle ground: it provides the highly optimized, protocol-level private transfers found in Zcash, but couples them with full programmability (EVM) and deep interoperability (XCM) within Polkadot.

## Team :busts_in_silhouette:

### Team members

- Nolasco Medina (Team Leader)

### Contact

- **Contact Name:** Nolasco Medina
- **Contact Email:** nome.ahumada@gmail.com
- **Website:** https://orbinum.network

### Legal Structure

- **Registered Address:** N/A (Individual Applicant / Independent Developer)
- **Registered Legal Entity:** N/A

### Team's experience

Nolasco Medina is an experienced software engineer and blockchain developer specializing in cryptography, Zero-Knowledge proofs (ZK-SNARKs), and the Substrate framework. 
Key relevant experience includes:
- **Substrate Runtime Development:** Architecting and implementing complex custom pallets in Rust, such as `pallet-shielded-pool` (UTXO management, Merkle trees) and `pallet-zk-verifier` (native Groth16 proof verification).
- **Applied ZK Cryptography:** Extensive work with the Arkworks ecosystem (`ark-bn254`), Poseidon hashing, and writing Circom circuits from scratch to enable privacy-preserving transactions.
- **Open-Source Tooling:** Creator of the `@orbinum` NPM ecosystem, connecting Substrate nodes with browser-based JS/WASM proof generators and client libraries.
- **Previous Full-Stack Experience:** Development of web applications and tracking systems for the logistics sector, managing relational databases and backend architectures.

### Team Code Repos

**Organization Repositories:**
- https://github.com/orbinum

**GitHub Accounts:**
- https://github.com/nol4lej

### Team LinkedIn Profiles (if available)

- https://linkedin.com/in/nolascomedina


## Development Status :open_book:

The Orbinum project has moved beyond the conceptual phase and holds a functional Substrate-based Proof of Concept:
- **Node & Pallets:** The local development node correctly integrates `pallet-shielded-pool` and `pallet-zk-verifier`, allowing for UTXO state transitions and native Groth16 proof verification on-chain.
- **Client Libraries:** The `@orbinum` ecosystem (published on NPM) is operational for generating Zero-Knowledge proofs directly in the browser using WASM.
- **Explorer:** A functional Privacy Explorer front-end capable of parsing encrypted data for authorized users. It is currently being connected to our first live testnet: [https://testnet-explorer.orbinum.network/](https://testnet-explorer.orbinum.network/)
- **Documentation:** The core theoretical architecture, economic models, and developer guides are published at [docs.orbinum.network](https://docs.orbinum.network).

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 1 month
- **Full-Time Equivalent (FTE):** 2 FTE
- **Total Costs:** 10,000 USD

### Milestone 1: Shielded Pool, Ecosystem Tooling & Testnet Launch

- **Estimated duration:** 1 month
- **FTE:** 1
- **Costs:** 10,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 / GPLv3 |
| **0b.** | Documentation | Comprehensive architectural and technical documentation published on docs.orbinum.network covering the ZK primitives and network setup. |
| **0c.** | Testing and Guide | Unit testing across core pallets (`pallet-shielded-pool`, `pallet-zk-verifier`) with an extensive execution guide. |
| **0d.** | Docker | Node Dockerfile and instructions for running local or testnet nodes. |
| 1. | Shielded Pool & Selective Disclosure | Finalize the implementation of the UTXO-based `pallet-shielded-pool` and the on-chain Audit Engine allowing selective disclosure via ZK circuits. |
| 2. | TypeScript SDK | Release and stabilize the `@orbinum/*` package suite (`protocol-core`, `proof-generator`, etc.) enabling seamless front-end integration and off-chain ZK proof generation via WASM. |
| 3. | Privacy Explorer dApp | Deliver a fully working decentralized application (dApp) that allows users to interact with the shielded pool, manage aliases, and decrypt their private cross-chain transactional data.

## Future Plans

- We intend to acquire Coretime on Polkadot to provide Privacy-as-a-Service to the entire ecosystem directly via XCM.
- Long-term maintenance and scaling will be funded through the Orbinum Treasury and transaction fees processed within the shielded pool.
- We plan to enhance our Selective Disclosure and Private Link mechanics to support generalized Zero-Knowledge Proofs of Identity (ZK-ID) for Sybil resistance across Web3 DAOs.

## Referral Program (optional) :moneybag:

- **Referrer:** N/A

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation Website / Personal Research.

I have known about the Web3 Foundation Grants Program for a long time since I originally entered the Polkadot and parachain ecosystem in 2021. After spending these past years thoroughly learning the architecture, cryptography, and Substrate framework, I am now coming forward to seek support to develop Orbinum. I have not received any previous funding or support. 

I am making this application to receive the necessary backing to be able to dedicate 100% of my time to this development. My goal is to demonstrate to the foundation what is being actively built with Orbinum, while at the same time seeking mentorship and guidance in critical areas such as tokenomics, runtime engineering, community management, and infrastructure deployment. 

Orbinum will be fully open-source and aims to contribute valuable tooling back to the community to broaden the path for ongoing privacy and ZK research in the ecosystem. 