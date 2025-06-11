# Frostgate - A Modular, ZK-Agnostic Protocol for Trustless Interoperability

* **Team Name:** Axia Labs
* **Payment Details:**
  * **DOT:** 13zkusUEfqSXYomjHroNTXygY878hJAoEAkTtoc6DDrbaB5q
  * **USDC (Polkadot Asset Hub):** 13zkusUEfqSXYomjHroNTXygY878hJAoEAkTtoc6DDrbaB5q
* **Level:** 2

---

## Project Overview

### Overview

Frostgate is a modular interoperability protocol designed to enable secure, trust-minimized message transmission across heterogeneous blockchains. Rooted in our research of Succinct State Validation (SSV), Frostgate employs succinct cryptographic proofs to establish verifiable claims about state transitions on external chains. This design minimizes dependency on centralized relayers, multi-signature committees, or heavyweight consensus replication.

By treating each chain as an isolated context with its own finality semantics, Frostgate introduces Interoperability Chain Abstraction via its ChainAdapter interface, a canonical boundary for cryptographic externalization. This allows sovereign chains to interoperate via standardized proof systems, introducing modularity at the consensus and proof backends.

Rather than function as a traditional bridge, Frostgate acts as a protocol-level coprocessor, a foundational layer for interoperable applications, enabling cross-chain messaging, asset flows and shared state logic while preserving the integrity and sovereignty of participating chains.

### Motivation

Most existing interoperability protocols introduce additional trust assumptions. These are brittle and often the weakest link in cross-chain design.

Frostgate is built around a simple but powerful premise: **trust cryptography, not governance**. By using cryptographic proofs to verify cross-chain states and messages, we avoid replication, consensus simulation, and multisig centralization. It offers a verifiable-first approach that aligns with Web3 core principles: open, decentralized, and trustless. We believe that this approach is the end-game of interoperability for heterogeneous chains, regardless of underlying architecture.

### How Frostgate Differs from Existing Solutions

Unlike existing interoperability solutions, Frostgate eliminates trust assumptions through pure cryptographic verification:

| Feature | Frostgate | LayerZero | Axelar | IBC |
|---------|-----------|-----------|--------|-----|
| Trust Model | ZK Proofs Only | Oracle + Relayer | Validator Set | Light Client |
| Substrate Native | ✅ | ❌ | Partial | ❌ |
| ZK Backend Agnostic | ✅ | ❌ | ❌ | ❌ |
| Verification Method | On-chain ZK | Off-chain Oracle | Validator Consensus | Light Client Sync |
| Governance Dependencies | No core dependecies | Oracle Selection | Validator Governance | Client Updates |

**Key Differentiators:**
- **Pure Cryptographic Verification**: No validator sets, no oracles, no committees
- **Modular ZK Backends**: Support for SP1, Halo2, RiscZero without vendor lock-in  
- **Native Substrate Integration**: Built specifically for Polkadot ecosystem requirements
- **Chain Sovereignty**: No shared security assumptions or governance dependencies

## Project Details

#### **Interoperability as Verifiable Message-Passing**

Let each chain $C$ be a deterministic state machine with transition function $\delta$. Frostgate encodes cross-chain state transitions as authenticated messages $M: \{C_i \rightarrow C_j\}$, each accompanied by a succinct cryptographic witness $\pi_M$ attesting to the finality and validity of the originating event.

Acceptance on the destination chain is reduced to a single predicate:

$$
\text{Accept}_{C_j}(M) \iff V_j(\pi_M) = 1
$$

where $V_j$ is a backend-agnostic verifier.

#### **Finality as a Security Primitive**

Finality is formalized as a predicate $F$, mapping blocks to their consensus status:

$$
F(b_i) = 1 \iff \text{Consensus}_{C_i}(b_i) = \text{final}
$$

Frostgate's adapters abstract over both BFT and probabilistic finality, ensuring only finalized events are eligible for cross-chain export.

#### **Chain Abstraction via ICAP**

Every chain implements a **ChainAdapter**, an interface contract, not a binding dependency. This adapter is responsible for:
- Extracting finalized events
- Encoding messages under the Frostgate specification
- Exposing finality and proof-generation hooks

This abstraction empowers any chain community to author their own adapters, fostering a truly open, permissionless ecosystem.

### Core Components (MVP Scope)

#### `frostgate-icap`

Implements the Interoperable Chain Abstraction Protocol (ICAP), defining a trait-based abstraction over blockchain behaviors. Initial focus on Substrate chains only.

- `ChainAdapter` composed of subtraits:
  - `FinalityProvider`
  - `MessageSubmitter` 
  - `MessageProver`
  - `EventListener`
  - `CapabilityProvider`

#### `frostgate-zkip`

Defines the ZK backend plugin interface (`ZkBackend` trait) with initial SP1 implementation only. Other backends (Halo2, RiscZero) will be added in future iterations.

#### `frostgate-sdk`

Developer SDK providing core types and utilities:
- `FrostMessage` (canonical cross-chain message format)
- `ChainId` (Substrate-focused initially)
- `MessageVerifier<B: ZkBackend>`

### Use Case (MVP)

The initial implementation focuses on Substrate-to-Substrate message passing within the Polkadot ecosystem. A parachain emits an outbound message event, the Substrate ChainAdapter verifies finality via GRANDPA, generates a ZK proof using SP1, and transmits it to the destination parachain where it's verified via the Frostgate pallet.

## Team

### Team Members

- Lead: Blessed Tosin-Oyinbo Olamide
- Planned: Rust Developer (to be hired with grant funding)

### Contact

- **Contact Name:** Blessed Tosin-Oyinbo Olamide
- **Contact Email:** [Reach out via email](tosinoyinboblessed@gmail.com)
- **Website:** [Frostgate Research](https://medium.com/@frostgate/)
- **Social Media:** [Frostgate Twitter](https://x.com/devfrostgate)

### Legal Structure
- **Registered Address:** Will be established within 30 days of grant approval
- **Registered Legal Entity:** Axia Labs Limited will be incorporated in [Delaware] upon grant acceptance, with all legal requirements completed immediately after first milestone delivery

### Team's Experience

**Blessed Tosin-Oyinbo** - Founder, Lead Engineer at Axia Labs. Previously Marketing/DevRel Lead at Payscribe. Worked on Vault (Verifiable distributed storage infrastructure) and independent Solana research focusing on succinct cryptographic proofs for validator-side deterministic settlement in high-throughput systems. Over 4 years of industry and open-source experience.


### Team Code Repos
- [frostgate-sdk](https://github.com/frostgate/frostgate-sdk)
- [frostgate-pallet-verifier](https://github.com/frostgate/frostgate-pallet-verifier)
- [frostgate-icap](https://github.com/frostgate/frostgate-icap)
- [frostgate-circuits](https://github.com/frostgate/frostgate-circuits)
- [frost-cli](https://github.com/frostgate/frost-cli)
- [frostgate-node](https://github.com/frostgate/frostgate-node)
- [frostgate-relayer](https://github.com/frostgate/frostgate-relayer)
- [frostgate-docs](https://github.com/frostgate/frostgate-docs)
- [frostgate-zkip](https://github.com/frostgate/frostgate-zkip)

### Team GitHub Profiles

- [Blessed Tosin-Oyinbo](https://github.com/techninja8/)

### Team LinkedIn Profiles

- [Blessed Tosin-Oyinbo](https://www.linkedin.com/in/tosin-oyinbo-blessed-tnxl/)

## Development Status

### Current Implementation Status

Frostgate's codebase is approximately 40% complete, comprising foundational components including early versions of `frostgate-icap`, `frostgate-zkip`, and `frostgate-sdk`. Key progress includes:

- Basic `ChainAdapter` trait defined with core Substrate integration patterns
- SP1 backend integration foundation with proof-of-concept circuit compilation
- Message serialization working with `scale-codec` for Substrate compatibility  
- GRANDPA finality verification logic implemented for testnet integration
- Core error handling and async patterns established


### Documentation Status

Documentation includes architectural overview, basic integration guides, and preliminary API specifications. Current focus is on technical implementation with comprehensive documentation planned for milestone deliverables.

## Roadmap

### Total Duration: 2 months

**FTE:** 1 (Month 1), 1.5 (Month 2 with additional developer (contract/part-time))
**Total Requested Grant:** $22,000
**DOT Share:** 50%
**USDC Share:** 50%

---

### 🎯 Milestone 1: Core Protocol Foundation

**Duration:** 1 month  
**Cost:** $10,000  
**Focus:** Build and test the foundational components

| Number | Deliverable | Specification |
|--------|-------------|---------------|
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | - Architecture overview<br>- Core API specifications<br>- Setup and installation guide<br>- Inline code documentation |
| 0c. | Testing Guide | - Unit tests (>85% coverage)<br>- CI/CD pipeline setup<br>- Test execution guide<br>- Code quality checks |
| 0d. | Docker Configuration | - Development environment setup<br>- Test environment containers<br>- Docker-compose for local development |
| 0e. | Technical Article | - Deep dive into ICAP design philosophy<br>- ZK proof system architecture for Substrate<br>- Comparison with existing bridge solutions |
| 1a. | Core ICAP Implementation | - Complete `ChainAdapter` trait definition<br>- Substrate adapter with GRANDPA finality<br>- Event listening and message extraction<br>- Robust error handling and async support |
| 1b. | ZK Proof Foundation | - `ZkBackend` trait with clean interface<br>- SP1 backend implementation<br>- Basic circuit for Substrate state validation<br>- Proof generation pipeline |
| 1c. | SDK Core Types | - `FrostMessage` with proper serialization<br>- `ChainId` enum for Substrate chains<br>- Error types and result handling<br>- Message validation logic |
| 1d. | Basic CLI Tools | - `frost-cli` foundation<br>- Configuration management<br>- Proof generation commands<br>- Debug utilities |

### Success Criteria for Milestone 1
- All core traits and types implemented
- Unit tests passing with >85% coverage  
- Proof generation working locally
- Clean, documented codebase ready for integration

---

### 🎯 Milestone 2: Integration & Testnet Demo

**Duration:** 1 month  
**Cost:** $12,000 
**Focus:** Complete integration, pallet development, and working testnet demo

| Number | Deliverable | Specification |
|--------|-------------|---------------|
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | - Complete integration guide<br>- Testnet deployment instructions<br>- Troubleshooting guide<br>- API reference documentation |
| 0c. | Testing Guide | - Integration test suite<br>- End-to-end test scenarios<br>- Testnet testing procedures<br>- Performance benchmarking |
| 0d. | Technical Article | - Real-world testnet deployment walkthrough<br>- Performance analysis and optimization<br>- Lessons learned and future roadmap |
| 2a. | Substrate Pallet | - Finalize and optimize `frostgate-pallet-verifier`<br>- SP1 proof verification on-chain<br>- Message routing and execution<br>- Event emission and indexing |
| 2b. | Enhanced SDK | - High-level API for developers<br>- Configuration builders<br>- Connection management<br>- TypeScript type definitions |
| 2c. | Advanced CLI Features | - Interactive mode<br>- Network status monitoring<br>- Message inspection tools<br>- Batch operations support |
| 2d. | Testnet Integration | - Rococo testnet deployment<br>- Parachain-to-parachain messaging<br>- Complete message lifecycle demo<br>- Performance metrics collection |
| 2e. | Developer Experience | - Example applications<br>- Integration templates<br>- Video tutorials<br>- Community documentation |

### Success Criteria for Milestone 2
- **Functional Demo**: Working parachain-to-parachain messaging on Rococo
- **Performance**: Proof generation under 45 seconds
- **Reliability**: >95% success rate in testnet operations  
- **Documentation**: Complete developer onboarding experience
- **Community**: Ready for external developers to integrate


## Economic Considerations

### Cost Analysis
- **Proof Generation**: Estimated $0.05-0.10 per message (SP1 compute costs)
- **On-chain Verification**: ~300k gas on Substrate parachains (~$0.01-0.02)
- **Total Cost**: ~$0.07-0.12 per cross-chain message
- **Comparison**: 50-100x cheaper than existing multisig bridge transaction fees

### Sustainability Model
- **Phase 1**: Open source core protocol (always free)
- **Phase 2**: Revenue from enterprise adapter development and integration support
- **Phase 3**: Premium developer tooling and hosted infrastructure services
- **Long-term**: Fee-sharing partnerships with high-volume parachain integrators

## Technical Architecture Deep Dive

### Circuit Design Overview
The SP1 circuit validates three core components:
1. **Block Finality**: GRANDPA signature aggregation and threshold verification
2. **Event Inclusion**: Merkle tree proofs for event inclusion in finalized blocks  
3. **Message Integrity**: Format compliance, nonce verification, and replay protection

### Security Properties
- **Soundness**: Cryptographically impossible to create valid proof for invalid state transition
- **Completeness**: All valid state transitions produce verifiable, accepted proofs
- **Succinctness**: Proof size constant regardless of underlying chain state size
- **Verifiability**: Fast verification enables cost-effective on-chain validation

### Performance Targets
- **Proof Generation**: Target <45s, Minimum viable <60s for basic messages
- **Verification Cost**: Target <300k gas, Maximum acceptable 500k gas
- **Message Throughput**: Target 100+ messages/hour, scaling with parallelization
- **Reliability**: 99%+ uptime during testnet operations

governance mechanisms

## Success Metrics & KPIs

### Technical Metrics
- **Code Quality**: Minimum 75% test coverage, target 80%
- **Performance**: Proof generation <45s target, <60s acceptable
- **Cost Efficiency**: <300k gas verification target, <500k maximum
- **Reliability**: 88.5% uptime target during testnet phase

### Adoption Metrics
- **Developer Interest**: 5+ GitHub stars and 3+ external contributors by project end
- **Integration Pipeline**: At least 2 parachain teams testing integration by the end of Month 2
- **Documentation Usage**: Technical guides accessed by developers (atleast 50)

### Ecosystem Impact
- **Technical Standards**: Contribute to 1+ Substrate RFC or XCM improvement proposal
- **Knowledge Sharing**: Publish 4+ technical articles during development period  
- **Open Source Growth**: Enable 2+ derivative projects building on Frostgate foundation

---

## Future Plans & Grant Pipeline

### Development Roadmap
This MVP establishes the foundation for a comprehensive interoperability ecosystem:

**Phase 2 (6 months post-MVP)**: Multi-chain Expansion
- Ethereum integration with EVM adapter ($55k grant target)
- Solana support with native program integration  
- Additional ZK backends (Halo2, RiscZero) for optimization

**Phase 3 (12 months post-MVP)**: Advanced Features  
- Message batching and aggregation for cost efficiency ($70k grant target)
- Recursive proof systems for scalability
- Production monitoring and alerting infrastructure

**Phase 4 (18 months post-MVP)**: Ecosystem Maturity
- Governance-free protocol upgrades via ZK-verified consensus
- Cross-chain smart contract execution environment
- Enterprise-grade tooling and hosted services

### Self-Sustainability Timeline
- **Month 6**: First paid enterprise integration and custom adapter development
- **Month 12**: Revenue-positive operations from developer services
- **Month 18**: Full team funding from protocol revenue and partnerships
- **Month 24**: Decentralized protocol governance and community-driven development

### Long-term Vision
Frostgate aims to become the foundational interoperability layer for the Polkadot ecosystem, enabling seamless, trustless communication between all parachains and external blockchains while maintaining the sovereignty and security properties that make Substrate unique.

## Additional Information

This is our first application to the Web3 Foundation grants program. We are committed to open-source development and ecosystem contribution, with plans to expand the team based on grant funding and project traction.
