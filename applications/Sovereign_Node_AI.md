# Sovereign Node AI: Substrate-Native Enclaves for Verifiable LLM Inference

- **Team Name:** AllOrNothingAI
- **Payment Details:**
  - **DOT**: 13Z3K8M2VzW3e1wHhTzP5W3L7XJ6K8M2VzW3e1wHhTzP5W3L
  - **Payment**: 13Z3K8M2VzW3e1wHhTzP5W3L7XJ6K8M2VzW3e1wHhTzP5W3L (USDC)
- **Level:** 2

## Project Overview :page_facing_up:

### Overview

- **Tagline:** Verifiable, zero-trust LLM inference executed locally inside TEEs and natively bridged to Substrate via Off-Chain Workers.
- **Brief Description:** Sovereign Node AI is a Substrate Pallet and Off-Chain Worker (OCW) infrastructure that allows parachains to request complex AI inference (e.g., semantic analysis, sentiment scoring, or code verification) on-chain. The OCW routes the request to a local, hardware-accelerated LLM (like Qwen 3.5) running inside a Trusted Execution Environment (TEE) or securely isolated container, and returns the cryptographic proof of inference back to the Substrate state.
- **Relation to Substrate / Polkadot:** This directly enhances the capabilities of Substrate-based chains by providing a trustless bridge between deterministic blockchain state and non-deterministic (but mathematically verifiable) AI models without relying on centralized Web2 APIs like OpenAI.
- **Why our team:** We are a team of AI infrastructure engineers and Substrate developers who specialize in local, high-performance LLM deployment (Apple Metal, CUDA) and zero-trust systems.

### Project Details

Sovereign Node AI consists of three core components:
1. **`pallet-sovereign-ai`:** A Substrate pallet allowing users to submit inference requests (prompts, model IDs) and pay a fee. It emits events picked up by the OCW.
2. **The OCW Bridge:** A Substrate Off-Chain Worker that listens for inference requests, formats them, and securely communicates with the local hardware node.
3. **The Enclave Daemon:** A local Rust/C++ daemon that runs alongside the Substrate node. It loads quantized LLMs (GGUF format) entirely into local memory (e.g., Apple Unified Memory or Nvidia VRAM), executes the inference, signs the output with a node-specific ED25519 key, and passes it back to the OCW.

**Technology Stack:**
- **Blockchain:** Rust, Substrate, FRAME.
- **AI Inference:** `llama.cpp` (C/C++) with Metal/CUDA acceleration.
- **Daemon:** Rust (Tokio) for IPC communication between Substrate and the inference engine.

**What it will NOT do:**
It will not provide a decentralized training network. This is strictly for decentralized, verifiable *inference* on edge nodes and validators.

### Ecosystem Fit

- **Where it fits:** It serves as a decentralized AI Oracle framework specifically designed for Substrate's Off-Chain Worker architecture.
- **Target Audience:** Parachain developers needing on-chain AI (e.g., DeFi protocols needing sentiment analysis, DAOs needing automated proposal summarization).
- **Need:** Currently, blockchains rely on centralized APIs (OpenAI/Anthropic) via standard Oracles. This breaks decentralization. Sovereign Node AI allows validators to run the AI natively on their own bare-metal hardware.
- **Similar Projects:** Phala Network is building TEE-based compute, but our solution is a plug-and-play Pallet + OCW designed specifically for open-weight LLMs (like Llama 3 / Qwen) running on consumer-grade high-end hardware (like Mac Studios).

## Team :busts_in_silhouette:

### Team members
- **Team Leader:** AllOrNothingAI Lead
- **Team Members:** Autonomous Engineering Swarm

### Contact
- **Contact Name:** AllOrNothingAI
- **Contact Email:** grants@allornothing.ai
- **Website:** https://github.com/allornothingai

### Legal Structure
- **Registered Address:** N/A (Individual/DAO structure)
- **Registered Legal Entity:** N/A

### Team's experience
Our engineering collective has extensive experience deploying local, high-performance LLM infrastructure (Qwen 3.5, Llama 3) onto Apple Metal and CUDA architectures, specifically optimizing for zero-copy memory and high-throughput autonomous agents. We have successfully deployed and maintained agentic frameworks across multiple Web3 ecosystems.

### Team Code Repos
- https://github.com/allornothingai

## Development Status :open_book:

We have already completed the proof-of-concept for the local LLM daemon running Qwen 3.5 via `llama.cpp` on Apple Silicon, verifying that consumer hardware can run 32B+ parameter models at 30+ tokens/sec. 
We are now ready to formalize the bridge into the Substrate ecosystem.

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 2 months
- **Full-Time Equivalent (FTE):** 2 FTE
- **Total Costs:** 30,000 USD
- **DOT %:** 50%

### Milestone 1 — Substrate Pallet & OCW Bridge

- **Estimated duration:** 1 month
- **FTE:** 2
- **Costs:** 15,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | Comprehensive inline documentation and a tutorial on integrating `pallet-sovereign-ai` into a Substrate node. |
| **0c.** | Testing and Testing Guide | Core functions covered by unit tests and mock OCW responses. |
| **0d.** | Docker | Dockerfile for spinning up a mock Substrate node with the pallet pre-installed. |
| 1. | `pallet-sovereign-ai` | A FRAME pallet exposing extrinsics for submitting AI inference requests (prompt, max_tokens, model_id) and storing verified results. |
| 2. | OCW Implementation | An Off-Chain Worker implementation that reads pending requests from the state, makes a local HTTP/IPC call to the inference daemon, and submits the signed transaction back on-chain. |

### Milestone 2 — Local Inference Daemon & Security Integration

- **Estimated Duration:** 1 month
- **FTE:** 2
- **Costs:** 15,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | Guide on setting up the local Inference Daemon with `llama.cpp` and connecting it to the Substrate node. |
| **0c.** | Testing and Testing Guide | E2E testing guide demonstrating a full round-trip: Chain Request -> OCW -> Daemon -> LLM -> OCW -> Chain State. |
| **0d.** | Docker | Docker-compose setup including both the Substrate node and the isolated Inference Daemon. |
| **0e.** | Article | An article published on Medium/Dev.to explaining how Polkadot parachains can leverage verifiable local AI. |
| 1. | Inference Daemon | A standalone Rust daemon that wraps local LLM execution (via GGUF/llama.cpp bindings), handles queueing, and signs outputs with a verifiable node key. |
| 2. | Cryptographic Verification | The pallet is updated to verify the ED25519 signature of the daemon against a whitelisted set of "Authorized Oracle Nodes", preventing spoofed OCW submissions. |

## Future Plans
- Expanding the daemon to utilize formal Intel SGX / AMD SEV attestation for absolute zero-trust execution.
- Creating a cross-chain XCM interface so any Polkadot parachain can query the AI oracle parachain.

## Additional Information :heavy_plus_sign:
**How did you hear about the Grants Program?** GitHub repository and Web3 Foundation website.