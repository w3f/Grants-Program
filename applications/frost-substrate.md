# Substrate-Native Implementation of FROST (Finality-Reliant Optimised State Transition) Protocol 

- **Team Name:** Axia Labs Research
- **Payment Address:** (DOT & USDT (Polkadot Asset Hub)) 13zkusUEfqSXYomjHroNTXygY878hJAoEAkTtoc6DDrbaB5q
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

### Overview

FROST (Finality-Reliant Optimised State Transition) Protocol is a chain-agnostic interoperability protocol that enables direct, trustless cross-chain communication. FROST is designed to act as a foundational layer for `frost-substrate`, a Substrate-native implementation that facilitates interoperability without relay chain dependency. Building on our foundational research in [cross-chain trust](https://axialabsresearch.github.io/article/the-cross-chain-trust-problem), [succinct state validation](https://axialabsresearch.github.io/article/succinct-state-validation), and [FROST proofs](https://axialabsresearch.github.io/article/frostproofs), along with our earlier approaches with Frostgate, particularly its ICAP component [`frostgate-icap`](https://github.com/axialabsreasearch/frostgate-icap), FROST represents a significant evolution from our original Frostgate application towards a more efficient and production-ready solution.

**Evolution from Frostgate:**
During our development of Frostgate, we identified critical limitations in existing zero-knowledge-only approaches. FROST takes a pragmatic approach to interoperability, prioritizing cryptographic security over social consensus while enabling more flexible proofs and optimized performance for real-world parachain deployment. While Frostgate was our experimental prototype, FROST is the production-ready evolution.

### Problem Statement

Current parachain interoperability faces significant bottlenecks:

1. **Relay Chain Dependency**: All parachain-to-parachain communication must route through the relay chain, creating throughput limitations and increased latency
2. **HRMP Channel Constraints**: Limited bandwidth and high setup costs for cross-chain messaging
3. **Inflexible Proof Systems**: Existing solutions like BEEFY use fixed signature schemes that may not be optimized for target chain requirements
4. **External Chain Isolation**: No direct path for parachains to communicate with external blockchains (EVM-compatible chains, Cosmos, Bitcoin etc.)
5. **High Gas Costs**: Inefficient proof verification leads to expensive cross-chain operations

**Impact**: These limitations prevent parachains from achieving their full potential, forcing complex workarounds and limiting adoption of cross-chain applications.

### Project Details

FROST addresses these challenges through a parachain-optimized architecture:

#### Core Components

1. `frost-protocol` - The core crate provides fundamental infrastructure for chain-agnostic finality-reliant state verification and message routing
2. `frost-substrate` - Native Substrate pallet for seamless parachain integration. `frost-substrate` uses FROST's finality predicates to abstract over GRANDPA (using key crates like `sp-consensus-grandpa`, `sp-core`, `sp-runtime`, `sp-api`, `sp-io`, `sp-blockchain`, `pallet-grandpa`, `frame-support`, `frame-system` etc.). `frost-substrate` uses finality confirmation as a trigger for generation of cryptographic witnesses to state attestation. These cryptographic witnesses (proofs) can be verified by the receiving parachain or external target chain. `frost-substrate` adopts FROST's native message routing and networking modules to handle message passing.

#### Technical Architecture

**FROST Protocol Core:**
- **Flexible Proof System**: FROST provides support for multiple verification methods, optimized per use case
- **State Transition Verification**: Efficient proofs for specific state changes rather than full block verification
- **Network Protocol**: Optimized peer-to-peer communication for message routing
- **Chain Abstraction Layer**: Universal interface supporting different blockchain architectures
- **Finality Predicates**: Efficient finality verification mechanisms

**frost-substrate Integration:**
- **Native Pallet**: Direct integration with Substrate runtime for minimal overhead
- **GRANDPA Finality**: Leverages Substrate's finality gadget for secure verification
- **Direct External Communication**: Parachain-to-external chain communication bypassing relay chain
- **Storage Efficiency**: Optimized storage for state transitions and proof data

#### Key Technical Innovations

1. **Signature Scheme Flexibility**: Adapts to target chain requirements (ECDSA for Ethereum, Ed25519 for Substrate)
2. **Granular State Proofs**: Generates cryptographic proofs for specific state changes rather than entire blocks, reducing proof size by 70-90%
3. **Parachain-First Design**: Enables direct external chain communication without BEEFY or relay chain dependency
4. **Proof Size Optimization**: Minimal proof sizes reduce on-chain verification complexity
5. **Extensible Architecture**: Support for custom proof types and message formats through an `extension` module

### Technical Comparison

| Feature | FROST Protocol | BEEFY | XCM/HRMP | Traditional Bridges |
|---------|---------------|-------|----------|-------------------|
| **Relay Chain Dependency** | No | Yes | Yes | No |
| **Signature Flexibility** | Yes | ECDSA only | N/A | Limited |
| **Proof Size** | Optimized | Standard | N/A | Large |
| **External Chain Support** | Yes | Limited | No | Yes |
| **Setup Complexity** | Low | Medium | High | Very High |
| **Gas Costs** | Low | Medium | High | Very High |
| **Trust Assumptions** | Cryptographic only | Validator set | Shared security | Multi-sig/Oracle |

### Use Cases

frost-substrate enables fast, secure, and efficient cross-chain operations. **For asset transfers**, a user moving DOT from Polkadot to Ethereum can initiate a burn on the Polkadot parachain; frost-substrate generates a state transition proof, which the Ethereum contract verifies before minting wrapped DOT, completing the transfer in under two minutes, compared to the 20+ minutes typical of traditional bridges. **For oracle data sharing**, a DeFi protocol on one parachain can request price data from another parachain; frost-substrate generates and routes a proof of the data's state, allowing for secure verification with costs reduced by up to 50%. **For governance**, when a proposal passes on one parachain, frost-substrate produces a verifiable proof of the outcome, enabling external chains to trustlessly execute corresponding changes, facilitating decentralized, cross-chain governance without centralized intermediaries.

### Ecosystem Fit

FROST Protocol addresses key limitations in the Polkadot ecosystem by enabling parachains to integrate directly with external chains, bypassing the relay chain bottleneck. It enhances the developer experience with intuitive APIs for simplified cross-chain development while reducing gas costs through optimized proof systems. By preserving strong cryptographic security without relying on trusted intermediaries, FROST delivers a scalable, secure, and cost-efficient framework for next-generation interoperability.

**Target Audience:**
- Parachain teams seeking efficient external chain integration
- Bridge protocol developers building on Polkadot
- Cross-chain DeFi applications requiring high throughput
- Enterprise blockchain solutions needing compliance-friendly interoperability

**Community Demand:**

Based on our research into recent community engagement, several parachain teams have shown strong interest in solutions that enable direct integration with both Ethereum and non-Ethereum ecosystems, reducing complexity and cost in cross-chain operations. For example, a **January 2025 Polkadot forum update** discusses **Paraspell**, a suite of XCM tools designed to enable parachains to interact across chains "within seconds" ([source](https://forum.polkadot.network/t/paraspell-xcm-tools-go-cross-chain-within-seconds-latest-upgrades-future-upgrades-maintenance-report/11302)). Similarly, a **January 2025 RFC** on the Polkadot forum emphasized extending interoperability to "Ethereum, EVM rollups, etc. ↔ AssetHub ↔ Parachains," reinforcing demand for end-to-end cross-chain infrastructure, even beyond EVM-compatible use cases ([source](https://forum.polkadot.network/t/rfc-polkadot-bridges-explorer-cross-chain-intelligence/11182)).

## Team :busts_in_silhouette:

### Team Members

- Lead: Blessed Tosin-Oyinbo Olamide
- Planned: Rust Developer (to be hired with grant funding)

### Contact

- **Contact Name:** Blessed Tosin-Oyinbo Olamide
- **Contact Email:** [Reach out via email](tosinoyinboblessed@gmail.com)
- **Contact Website (Personal Portfolio):** [blessedtosinoyinbo.vzy.io](https://blessedtosinoyinbo.vzy.io)
- **Website:** [Axia Labs](https://axialabsresearch.github.io/)
- **Discord:** [Axia Labs discord](https://discord.gg/DKfZMcWS)
- **Social Media:** [Axia Labs X(Twitter)](https://x.com/axialabs_)

### Legal Structure
- **Registered Address:** Will be established within 30 days of grant approval
- **Registered Legal Entity:** Axia Labs Limited will be incorporated in Delaware upon grant acceptance, with all legal requirements completed immediately after first milestone delivery

### Team's Experience

**Blessed Tosin-Oyinbo** - [Founder, Lead Engineer at Axia Labs](https://axialabsresearch.github.io/author/blessed-tosin-oyinbo). Previously Marketing/DevRel Lead at [Payscribe](https://payscribe.co). Worked on Vault (Verifiable distributed storage infrastructure) and independent Solana research focusing on succinct cryptographic proofs for validator-side deterministic settlement in high-throughput systems. Over 4 years of industry and open-source experience.

### Research Publications
You can find our research on blockchain interoperability on our website @ [Axia Labs Research](https://axialabsresearch.github.io)

#### Primitive Research and Articles
- [The Cross-Chain Problem](https://axialabsresearch.github.io/article/the-cross-chain-trust-problem)
- [Succinct State Validation](https://axialabsresearch.github.io/article/succinct-state-validation)
- [Frostproofs](https://axialabsresearch.github.io/article/frostproof)
- [Thinking Beyond Bridges](https://axialabsresearch.github.io/article/beyond-bridges)
- [An overview of FROST's v0 Architecture](https://axialabsresearch.github.io/article/frost-v0)

### Team Code Repos
- [frost-protocol](https://github.com/axialabsresearch/frost-protocol)
- [frost-substrate](https://github.com/axialabsresearch/frost-substrate)
- [frostgate-sdk](https://github.com/axialabsreasearch/frostgate-sdk)
- [frostgate-icap](https://github.com/axialabsresearch/frostgate-icap)
- [frostgate-circuits](https://github.com/axialabsresearch/frostgate-circuits)
- [frostgate-zkip](https://github.com/axialabsresearch/frostgate-zkip)

### Team GitHub Profiles

- [Blessed Tosin-Oyinbo](https://github.com/techninja8/)

### Team LinkedIn Profiles

- [Blessed Tosin-Oyinbo](https://www.linkedin.com/in/tosin-oyinbo-blessed-tnxl/)

## Development Status :open_book:

### Current Implementation Status

**FROST Protocol Core ([`frost-protocol`](https://github.com/axialabsresearch/frost-protocol)):**

*frost-protocol is currently in a v0.1.0 release*

1. **Core Protocol Architecture**

a) **State Management System**
- `StateTransition`: Core type for handling state changes between blocks
- `StateProof`: Proof verification and validation system
- `BlockId` and `ChainId` for chain-agnostic identification
- Flexible proof system supporting multiple proof types

b) **Network Layer**
- `NetworkProtocol` trait for P2P communication
- Peer management system with different node types (Validator, Observer, Relay, Gateway)
- Transport layer abstraction supporting TCP, WebSocket, and QUIC
- Circuit breaker and backpressure control for network stability

c) **Message System**
- `FrostMessage`: Core message type with comprehensive metadata
- Priority-based message handling
- Batch processing capabilities
- Message validation and routing

2. **Extension System**

a) **Core Extension Framework**
- `Extension` and `ProtocolExtension` traits
- Dynamic extension loading/unloading
- Extension lifecycle management (Initialize → Active → Suspended → Failed)
- Extension dependency resolution

b) **Extension Capabilities**
- Message validation
- State verification
- Finality verification
- Network routing
- Custom extension types

3. **Routing System**

- Dynamic route discovery
- Multi-path routing support
- Load balancing capabilities
- Failure recovery mechanisms

4. **Proof System**

a) **Supported Proof Types**
- Zero-knowledge proofs
- Signature-based proofs
- Light client proofs
- Basic finality proofs
- Custom proof types

b) **Proof Management**
- Proof generation and verification
- Caching system
- Batch operations
- Extension hooks

5. **Network Coordination**

- Session management for distributed operations
- Reputation-based participant selection
- Threshold signature support
- Failure handling and recovery

6. **Security Features**

- Encryption support in transport layer
- Authentication system
- Ban management for malicious peers
- Security configuration options

7. **Monitoring and Metrics**

- Network metrics
- Peer statistics
- Routing metrics
- Extension performance tracking

The current implementation provides a solid foundation for:

1. **Chain Agnosticism**: The protocol is designed to work with any blockchain system through its abstracted interfaces.

2. **Extensibility**: The extension system allows for custom functionality without modifying core protocol code.

3. **Reliability**: Built-in circuit breakers, backpressure control, and failure recovery mechanisms.

4. **Security**: Comprehensive security features including encryption, authentication, and ban management.

5. **Performance**: Support for batch operations, caching, and optimized routing.

**frost-substrate Pallet**
1. **Core Pallet Structure**
```rust
#[pallet::pallet]
pub struct Pallet<T>(_);

#[pallet::config]
pub trait Config: frame_system::Config {
    type RuntimeEvent: From<Event<Self>>;
    type FrostHash: Hash;
    type MinConfirmations: Get<u32>;
    type MaxProofSize: Get<u32>;
}
```

2. **Key Components Implemented**:

a) **Wrapper Types** (`wrapper_types.rs`):
- `SubstrateStateTransition`
- `SubstrateStateProof` 
- `SubstrateFrostMessage`
These provide Substrate compatibility for FROST protocol types.

b) **Finality Integration** (`finality/mod.rs`):
- `GrandpaFinality`: GRANDPA-based finality implementation
- `SubstrateVerificationClient`: Substrate-specific verification client
- Finality verification and chain rules enforcement

c) **Proof System** (`proof/generator.rs`):
- `ProofGenerator` trait
- `MerkleProofGenerator`: Merkle tree based proofs
- `BLSProofGenerator`: BLS signature based proofs
- Configurable proof generation and validation

d) **Verification System** (`verification/mod.rs`):
- `ProofVerifier` trait
- `MerkleVerifier` and `BLSVerifier` implementations
- `VerificationRegistry` for managing multiple verifiers

3. **Storage Items**:
```rust
#[pallet::storage]
pub type Transitions<T: Config> = StorageMap<_, Blake2_128Concat, T::FrostHash, SubstrateStateTransition>;
#[pallet::storage]
pub type Proofs<T: Config> = StorageMap<_, Blake2_128Concat, T::FrostHash, SubstrateStateProof>;
#[pallet::storage]
pub type Messages<T: Config> = StorageMap<_, Blake2_128Concat, T::FrostHash, SubstrateFrostMessage>;
```

4. **Core Functionality**:

a) **State Transition Handling**:
```rust
pub fn submit_transition(
    origin: OriginFor<T>,
    transition: StateTransition,
) -> DispatchResult
```

b) **Proof Generation and Verification**:
```rust
pub fn submit_proof(
    origin: OriginFor<T>,
    proof: StateProof,
) -> DispatchResult
```

c) **Message Processing**:
```rust
pub fn submit_message(
    origin: OriginFor<T>,
    message: FrostMessage,
) -> DispatchResult
```

5. **Testing Infrastructure**:
- Mock runtime setup in `mock.rs`
- Basic test framework in place

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 3 months
- **Team:**
  - 1 Core Developer (Full-time)
  - 1 Contract Developer (Part-time)
  - 1 Community Manager (Part-time)
  - **Full-Time Equivalent (FTE):** 1.5 FTE
- **Total Costs:** $30,000 USDC
- **DOT Share:** 50%
- **USDC Share:** 50%

### Milestone 1 — Core FROST Integration (Month 1)
- **Costs:** $10,000 USDC

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | Initial integration guide and API documentation |
| 0c. | Testing | Unit tests for core components with 80%+ coverage |
| 0d. | Article | We will publish an article that would clearly explains what was achieved. |
| 1. | Core Pallet Structure | - Basic pallet configuration and types<br>- Storage items and events<br>- Error handling<br>- Runtime API definitions |
| 2. | State Management | - Implementation of `SubstrateStateTransition`<br>- State proof verification<br>- Basic state storage patterns<br>- State transition validation |
| 3. | Basic Network Layer | - Message type definitions<br>- Basic peer management<br>- Connection handling<br>- Initial network protocol implementation |

### Milestone 2 — GRANDPA Integration & Testing (Month 2)
- **Costs:** $10,000 USDC

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | Documentation | Technical documentation and integration examples |
| 0b. | Testing | - Integration tests<br>- Local testnet setup guide<br>- Performance benchmarks |
| 0d. | Article | We will publish an article that would clearly explains what was achieved. |
| 1. | GRANDPA Integration | - GRANDPA finality verification<br>- Block import pipeline<br>- Finality proof generation<br>- Verification gadget implementation |
| 2. | Message Routing | - Basic cross-chain message format<br>- Message validation<br>- Timeout handling<br>- Basic retry mechanism |
| 3. | Local Testing Environment | - Docker setup for local testing<br>- Basic monitoring tools<br>- Test network configuration<br>- Performance testing framework |

### Milestone 3 — MVP Completion & Testing (Month 3)
- **Costs:** $10,000 USDC

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | Documentation | - Comprehensive documentation<br>- Deployment guides<br>- Troubleshooting guide |
| 0b. | Testing | - End-to-end testing<br>- Security testing<br>- Stress testing<br>- Test coverage report |
| 0d. | Article | We will publish an article that would clearly explains what was achieved. |
| 1. | Ethereum Testnet Bridge | - Basic Ethereum testnet integration<br>- Simple state proof verification<br>- Basic asset transfer example |
| 2. | Performance Optimization | - Gas optimization<br>- State storage optimization<br>- Proof size reduction<br>- Basic caching implementation |
| 3. | Developer Tools | - Basic CLI for interaction<br>- Simple monitoring dashboard<br>- Integration examples<br>- Local development tools |

### Key Focus Areas Per Month

**Month 1: Foundation**
- Core pallet implementation
- Basic state management
- Essential network layer
- Focus on getting the basic infrastructure right

**Month 2: Integration**
- GRANDPA integration
- Message routing system
- Local testing environment
- Focus on making components work together

**Month 3: Refinement**
- Single external chain support (Ethereum testnet)
- Performance improvements
- Developer tooling
- Focus on usability and testing

### Development Strategy

1. **Iterative Development**
   - Weekly development cycles
   - Regular testing and integration
   - Continuous documentation updates

2. **Testing Priority**
   - Unit tests from day one
   - Integration tests as components are completed
   - End-to-end testing in final month

3. **Documentation**
   - Inline code documentation
   - API documentation
   - Integration guides
   - Example code

4. **Community Engagement**
   - Regular development updates
   - Technical blog posts
   - Community calls
   - Developer documentation

Our goal is to focus solely on essential MVP features, maintain high quality through thorough testing, provide useful developer tools, and create a solid foundation for future development. Additionally, we'll apply for a W3F-funded audit upon MVP completion.

## Future Plans

### Short-term (6-12 months)
- **Ecosystem Integration**
  - Successfully integrate with 2-3 parachains as early adopters
  - Focus on one primary use case (e.g., asset transfer or data verification)
  - Build basic monitoring and support infrastructure
  - Develop comprehensive integration documentation

- **Core Improvements**
  - Optimize gas costs and proof sizes based on MVP feedback
  - Add support for one additional proof type based on user needs
  - Enhance error handling and recovery mechanisms
  - Improve testing and deployment tooling

- **Developer Tools**
  - Create basic SDK for common integration patterns
  - Build essential CLI tools for chain interaction
  - Provide example implementations and templates
  - Establish developer documentation portal

### Medium-term (1-2 years)
- **Protocol Enhancement**
  - Add support for 2-3 more proof types based on adoption
  - Implement basic privacy features (not full ZK initially)
  - Optimize cross-chain message routing
  - Develop basic governance mechanisms

- **Ecosystem Growth**
  - Expand to 5-7 parachain integrations
  - Build partnerships with other Substrate projects
  - Create a grant program for developers
  - Establish regular community events and workshops

- **Security & Stability**
  - Complete comprehensive security audit
  - Implement advanced monitoring systems
  - Enhance fault tolerance and recovery
  - Add performance benchmarking tools

### Long-term (2+ years)
- **Advanced Features**
  - Implement full ZK proof support
  - Add post-quantum cryptographic options
  - Develop cross-chain governance capabilities
  - Create enterprise-grade tooling

- **Ecosystem Expansion**
  - Support major non-Substrate chains
  - Establish interoperability standards
  - Build advanced use case templates
  - Create enterprise partnership program

## Additional Information :heavy_plus_sign:

### W3F Alignment

FROST Protocol directly supports key Web3 Foundation priorities:

- **Interoperability**: Core focus on seamless cross-chain communication
- **Parachain Ecosystem**: Specifically designed for parachain optimization and growth
- **Developer Experience**: Simplified APIs and comprehensive tooling reduce development friction
- **Security**: Maintains cryptographic security without trusted intermediaries
- **Scalability**: Removes relay chain bottlenecks for improved ecosystem throughput
- **Decentralization**: Enables parachain autonomy in cross-chain operations

### Technical Differentiators

1. **Parachain-First Architecture**: Unlike generic bridge solutions, FROST is optimized specifically for parachain needs and constraints
2. **Flexible Proof Systems**: Support for multiple verification methods allows optimization per use case and target chain
3. **Direct External Chain Access**: Eliminates relay chain dependency for external blockchain communication
4. **Optimized Performance**: Significant improvements in proof size (70-90% reduction) and verification speed
5. **Extensible Design**: Architecture supports future proof types and blockchain integrations

### Risk Mitigation

**Technical Risks:**
- Mitigation: Comprehensive testing, security audits, and gradual rollout
- Fallback: Extensible design allows component-wise updates and fixes

**Adoption Risks:**
- Mitigation: Early parachain partnerships and developer-friendly tooling
- Fallback: Backward compatibility with existing bridge solutions

**Competition Risks:**
- Mitigation: Focus on unique parachain-optimized features and superior performance
- Fallback: Open-source approach encourages collaboration over competition

### Success Metrics

**Technical Metrics:**
- Proof size reduction: Target 70-90% vs traditional bridges
- Verification time: Under 100ms for typical operations
- Gas cost reduction: 50%+ for cross-chain operations
- Developer adoption: 10+ parachain integrations within 12 months

**Ecosystem Metrics:**
- Community engagement: Active developer community and regular contributions
- Research impact: Citations and adoption of FROST research
- Industry recognition: Speaking opportunities and partnership requests

### Commitment to Open Source

FROST Protocol and `frost-substrate` will be fully open-source under Apache-2.0 license, encouraging community contribution and ecosystem growth. We commit to:

- Transparent development process with regular updates
- Community-driven feature development and roadmap
- Comprehensive documentation and developer resources
- Long-term maintenance and support

We believe `frost-substrate` represents a significant step forward in parachain interoperability, offering the performance, security, and developer experience needed to unlock the full potential of the Polkadot ecosystem.
