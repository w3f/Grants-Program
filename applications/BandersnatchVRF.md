# TypeScript Bandersnatch VRF Suite – Complete Cryptographic Implementation for JAM Protocol

- **Team Name:** Esscrypt Ltd.
- **Payment Details:**
- **DOT**: 15JRT5GjLAZkuvmpwmjCUp1RRLr7Y6Gnusz37ia37h2Xn5Rz
- **Payment**: 15JRT5GjLAZkuvmpwmjCUp1RRLr7Y6Gnusz37ia37h2Xn5Rz (USDC) 
- **Level:** 2
  
## Project Overview :page_facing_up:

### Overview

The JAM protocol represents the next generation of blockchain consensus, requiring robust cryptographic primitives for secure randomness generation, validator selection, and privacy-preserving operations. While the reference implementation exists in Rust via [`ark-vrf`](https://crates.io/crates/ark-vrf) , **security best practices mandate independent implementations** to enable cross-verification and eliminate single points of failure.

Our TypeScript implementation delivers **enterprise-grade cryptographic security** with **superior developer experience** and **broader ecosystem compatibility** , maintaining full compliance with Web3 Foundation specifications and IETF standards.

This comprehensive suite provides **complete VRF functionality** including IETF-compliant VRF, Pedersen VRF, Ring VRF, and Elligator2. Our implementation enables seamless integration with modern web applications, browser-based clients, and Node.js environments—critical for the decentralized future.

**Key Advantages:**
- **Zero Rust Dependencies**: Pure TypeScript implementation eliminates compilation complexity
- **Browser-Ready**: Direct integration with web applications and browser-based wallets
- **NPM Ecosystem**: Seamless integration with existing JavaScript/TypeScript projects
- **Cross-Platform**: Universal compatibility across Node.js, browsers, and edge environments
- **Developer-Friendly**: Comprehensive TypeScript types and intuitive APIs


#### Relation to JAM Protocol

The [Bandersnatch VRF](https://github.com/davxy/bandersnatch-vrf-spec) specification developed under Web3 Foundation are **critical components** of the JAM protocol's consensus mechanism. Our TypeScript implementation provides:

- **Enhanced Security Through Diversity**: Multiple independent implementations enable cross-verification and prevent single points of failure
- **Broader Ecosystem Access**: Extends JAM's cryptographic primitives beyond Rust to the entire JavaScript/TypeScript ecosystem
- **Developer Adoption**: Enables web developers, browser-based applications, and Node.js services to participate in JAM networks
- **Research Innovation**: Provides additional implementation perspectives for cryptographic research and protocol improvements

#### Why Our Implementation Matters

As active contributors to the JAM ecosystem through our **PeanutButterAndJAM** implementation, we identified a critical gap: **overwhelming dependency on Rust-based cryptographic libraries** creates barriers for developers and limits ecosystem diversity. Our TypeScript implementation addresses this by:

- **Eliminating Language Barriers**: Enables JavaScript/TypeScript developers to build JAM-compatible applications without Rust expertise
- **Browser Integration**: Provides cryptographic primitives directly accessible in web browsers for client-side applications
- **NPM Distribution**: Makes JAM cryptographic tools available through the world's largest package registry
- **Cross-Platform Compatibility**: Ensures consistent cryptographic behavior across Node.js, browsers, and edge computing environments
- **Developer Experience**: Offers comprehensive TypeScript types, intuitive APIs, and extensive documentation

Our implementation serves as a **foundational building block** for the next generation of decentralized applications, enabling everything from browser-based wallets to server-side JAM node implementations.

### Project Details

#### Technology Stack

- **Programming Language**: **TypeScript** (ES2022+ targeting modern environments)
- **Core Dependencies**: Minimal external dependencies using `@noble/curves` as the audited foundation
- **Testing Framework**: **Vitest** for comprehensive unit, integration, and property-based testing
- **Performance Analysis**: Built-in benchmarking tools for cryptographic operation analysis
- **Documentation**: **JSDoc** with TypeScript integration for comprehensive API documentation
- **Code Quality**: **BiomeJS** for linting, formatting, and code consistency
- **Continuous Integration**: **GitHub Actions** for automated testing, security scanning, and documentation generation
- **Package Management**: **NPM** distribution with proper TypeScript declarations


#### Core Components

Our implementation consists of two complementary packages that together provide complete Bandersnatch VRF functionality:

##### 1. `@pbnj/bandersnatch`: Foundational Elliptic Curve Package

**Objective**: Provide a comprehensive, secure, and performant TypeScript library for Bandersnatch elliptic curve cryptography with full RFC 9380 compliance.

**Deliverables**:
- **Curve Arithmetic & Operations**:
  - Complete Bandersnatch curve implementation
  - Point addition, scalar multiplication, and field operations
  - Point compression/decompression algorithms
  - Curve parameter validation and constants

- **Cryptographic Primitives**:
  - Key pair generation and validation
  - Point-to-hash conversion functions utilizing Elligator2
  - Curve point serialization/deserialization
  - Field element operations and validation

- **Quality Assurance**:
  - Comprehensive unit tests (>90% coverage)
  - Performance benchmarks for all operations
  - Extensive TypeScript type definitions
  - Complete API documentation with examples

**References**: [Masson, Sanso, and Zhang's Bandersnatch work (ePrint 2021/1152)](https://eprint.iacr.org/2021/1152.pdf), [RFC 9380 - Hashing to Elliptic Curves](https://www.rfc-editor.org/rfc/rfc9380.html)

##### 2. `@pbnj/bandersnatch-vrf`: Core VRF Implementation Suite

**Objective**: Implement all major VRF schemes (IETF, Pedersen, Ring) leveraging the foundational bandersnatch package.

**Deliverables**:

- **IETF VRF (RFC 9381 Compliant)**:
  - Complete ECVRF implementation for Bandersnatch curve
  - Support for Bandersnatch_XMD:SHA-512_ELL2_RO_ suite
  - Proper domain separation tag (DST) handling
  - Verification against official RFC test vectors
  - Prover and verifier classes with comprehensive error handling

- **Pedersen VRF**:
  - Full implementation extending IETF VRF patterns
  - Optimized for Bandersnatch curve characteristics
  - Complete test vector validation

- **Ring VRF**:
  - Complete W3F Ring Proof implementation for Bandersnatch
  - KZG polynomial commitment integration
  - Ring signature generation and verification
  - Privacy-preserving validator selection

- **Cryptographic Infrastructure**:
  - **Elligator2**: Hash-to-curve implementation for Bandersnatch
  - **RFC 9381 Compliance**: Complete IETF standard implementation
  - **Nonce Generation**: RFC 8032 compliant nonce generation
  - **Point Processing**: Gamma point handling and validation

- **Quality Assurance**:
  - End-to-end test suites for all VRF types
  - Test vector validation against reference implementations
  - Performance benchmarks and optimization analysis
  - Comprehensive error handling and edge case coverage

**References**: [RFC 9381 - Verifiable Random Functions](https://datatracker.ietf.org/doc/html/rfc9381), [W3F Bandersnatch-VRF specification](https://github.com/davxy/bandersnatch-vrf-spec), [W3F Ring-Proof specification](https://github.com/davxy/ring-proof-spec)

##### 3. `@pbnj/bandersnatch-vrf` Utils: JAM Protocol Specialized Components

**Objective**: Implement specialized cryptographic utilities for JAM protocol consensus mechanisms and validator operations.

**Deliverables**:

- **Entropy VRF**: 
  - Implements Gray Paper 0.7.2 equation 6.17: `H_vrfsig ∈ bssignature{H_authorbskey}{Xentropy ∥ banderout{H_sealsig}}{[]}`
  - Block entropy generation for JAM consensus
  - Deterministic randomness derived from seal signatures

- **Audit VRF**:
  - Audit signature generation for validator selection
  - Work report hashing and tranche-based randomness

- **Epoch Root Utilities**:
  - KZG polynomial commitments to validator sets
  - Ring VRF proof support for validator selection

- **Gamma Processing Functions**:
  - GP `banderout` implementation
  - RFC 9381 compliant point-to-hash conversion
  - VRF output processing and validation

**References**: [Gray Paper safrole.tex](https://github.com/gavofyork/graypaper), [Gray Paper auditing.tex](https://github.com/gavofyork/graypaper)

#### Project Scope - What it IS and IS NOT

**IS**: A comprehensive TypeScript cryptographic suite providing:
- Complete Bandersnatch elliptic curve implementation with GLV optimizations
- Full IETF VRF, Pedersen VRF, and Ring VRF implementations
- Specialized JAM protocol components (Entropy VRF, Audit VRF, Epoch Root utilities, Gamma processing)
- RFC 9380/9381 compliant hash-to-curve and VRF operations
- Production-ready APIs with comprehensive TypeScript types
- Extensive test suites and performance benchmarks
- Complete documentation and developer guides

**IS NOT**: 
- A full blockchain node or dApp implementation
- A Rust wrapper or language binding
- A system that integrates proofs into specific application logic (though it enables such integrations)
- A formally verified implementation (though it follows cryptographic best practices)
- A third-party audited implementation (though it uses audited dependencies and follows security guidelines)


### Ecosystem Fit

The JAM protocol's success depends on **diverse, robust cryptographic implementations** that enable cross-verification and eliminate single points of failure. Our TypeScript implementation addresses critical ecosystem gaps:

**Critical Needs Addressed:**
- **Language Diversity**: Extends JAM cryptographic primitives beyond Rust to the entire JavaScript/TypeScript ecosystem
- **Developer Accessibility**: Enables web developers to build JAM-compatible applications without Rust expertise
- **Browser Integration**: Provides cryptographic primitives directly accessible in web browsers
- **Cross-Platform Compatibility**: Ensures consistent behavior across Node.js, browsers, and edge environments

**Target Applications:**
- **Browser-Based Wallets**: Direct integration of JAM cryptographic primitives in web wallets
- **Light Clients**: Efficient verification of JAM consensus proofs in resource-constrained environments
- **Web Applications**: Seamless integration of JAM randomness and privacy features
- **Developer Tools**: Comprehensive SDKs for JAM application development
- **Research Platforms**: Cryptographic research and protocol experimentation

**Ecosystem Impact:**
- **Security Enhancement**: Multiple independent implementations enable cross-verification
- **Adoption Acceleration**: Removes language barriers for web developers
- **Innovation Enablement**: Provides additional implementation perspectives for protocol improvements
- **Ecosystem Resilience**: Reduces dependence on single technology stack


## Team :busts_in_silhouette:

### Team members

- **Mihail Kirov:**  
  Lead Developer with 5+ years of experience in distributed systems and blockchain integration. Specializes in connecting AI systems with decentralized networks and has a strong track record in open-source contributions.
  Mentored at the [Polkadot Prodigy](https://www.linkedin.com/posts/polkadotprodigy_lets-welcome-mihail-kirov-who-is-joining-activity-7191345617330192384-DJbv?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAC27-YYBCPf5vbQMBXvlthYYXnOflSOp-9A) Hackathon 
  [GitHub: mikirov](https://github.com/mikirov) | [LinkedIn](https://www.linkedin.com/in/mihail-kirov/)


### Contact

- **Contact Name:** Mihail Kirov
- **Contact Email:** me@mikirov.xyz
- **Website:** [esscrypt.com](https://esscrypt.com/)

### Legal Structure

- **Registered Address:** Mladost 3, bl. 313, ent. 3, fl. 10, ap. 66, 1799, Sofia, Bulgaria.
- **Registered Legal Entity:** Escrypt Ltd.

### Team's experience

### Team Code Repos

- [Mihail Kirov](https://github.com/mikirov)

### Team LinkedIn Profiles

- [Mihail Kirov](https://www.linkedin.com/in/mihail-kirov/)

## Development Status :open_book:

We have conducted preliminary research and have established a solid architectural design for the JAM ElizaOS Plugin. 
Initial prototypes and integration experiments with our own PeanutButterAndJAM node have been performed, 
and design documents outlining core functionalities, data models, and API specifications are available. 
Our prior work on the Polkadot ElizaOS Plugin further validates our technical approach. 
Detailed documentation and research findings will be maintained in our repositories and published blog posts.

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 30 person-days
- **Full-Time Equivalent (FTE):** 1 FTE
- **Total Costs:** 20,000 USD
- **DOT %:** 50% of total costs

### Milestone 1 — Core Bandersnatch VRF Implementation

- **Estimated Duration:** 30 person-days
- **FTE:** 1 FTE
- **Costs:** 10,000 USD

| Number | Deliverable | Detailed Specification |
|--------|-------------|------------------------|
| **0a.** | **Project Setup & Licensing** | Apache 2.0 license, GitHub repository setup, CI/CD pipeline with GitHub Actions, package.json configuration for NPM distribution |
| **0b.** | **Core Documentation** | JSDoc API documentation, TypeScript type definitions, basic usage examples, and integration guides |
| **0c.** | **Testing Infrastructure** | Comprehensive test suite with >90% coverage, test vector validation, performance benchmarks, and automated testing pipeline |
| **1.** | **Bandersnatch Curve Implementation** | Complete elliptic curve implementation with GLV endomorphism optimization, point arithmetic, field operations, key generation, and curve parameter validation |
| **2.** | **Elligator2 Hash-to-Curve** | RFC 9380 compliant Elligator2 implementation for Bandersnatch curve, supporting both random oracle (RO) and non-uniform (NU) variants |
| **3.** | **IETF VRF Implementation** | Full RFC 9381 ECVRF implementation with Bandersnatch_XMD:SHA-512_ELL2_RO_ suite, proper DST handling, and test vector validation |
| **4.** | **Pedersen VRF Implementation** | Complete Pedersen VRF implementation extending IETF patterns, optimized for Bandersnatch characteristics, with comprehensive test coverage |
| **5.** | **Ring VRF Implementation** | Full W3F Ring Proof implementation with KZG polynomial commitments, ring signature generation/verification, and privacy-preserving validator selection |
| **6.** | **Cryptographic Infrastructure** | RFC 8032 nonce generation, point processing utilities, VRF output validation, and comprehensive error handling with edge case coverage |
| **7.** | **Performance Optimization** | GLV endomorphism implementation, performance benchmarks, optimization analysis, and comparison with reference implementations |
| **8.** | **Core Package Distribution** | NPM package publication, TypeScript declarations, browser compatibility, and cross-platform testing |

### Milestone 2 — JAM Protocol Specialized Components

- **Estimated Duration:** 30 person-days
- **FTE:** 1 FTE
- **Costs:** 10,000 USD

| Number | Deliverable | Detailed Specification |
|--------|-------------|------------------------|
| **1.** | **Entropy VRF Implementation** | Complete implementation of Gray Paper 0.7.2 equation 6.17: `H_vrfsig ∈ bssignature{H_authorbskey}{Xentropy ∥ banderout{H_sealsig}}{[]}` for block entropy generation |
| **2.** | **Audit VRF Implementation** | Full audit signature generation for both tranche 0 and tranche N according to Gray Paper 0.7.2 equations 17.3 and 17.14, including work report hashing |
| **3.** | **Epoch Root Utilities** | Complete implementation of `getRingRoot` function for KZG polynomial commitments to validator sets, supporting ring VRF proofs |
| **4.** | **Gamma Processing Functions** | VRF output processing utilities including `getCommitmentFromGamma`, `getBanderoutFromGamma`, and RFC 9381 compliant point-to-hash conversion |
| **5.** | **JAM Integration Testing** | End-to-end test suites for all JAM protocol components, integration with PeanutButterAndJAM implementation, and real-world usage validation |
| **6.** | **Advanced Documentation** | Comprehensive tutorials for JAM protocol integration, specialized component usage guides, and Gray Paper compliance documentation |
| **7.** | **Performance Analysis** | Specialized benchmarking for JAM protocol components, optimization analysis, and comparison with Rust reference implementations |
| **8.** | **Production Readiness** | Final package distribution, security hardening, edge case handling, and production deployment guidelines |


## Future Plans

### Short-Term (Post-Grant)

**Community Engagement & Adoption:**
- **Wide Distribution**: Announce library release through JAM community channels, TypeScript cryptography forums, developer conferences, and social media
- **Developer Onboarding**: Publish comprehensive tutorials, integration guides, and example applications
- **JAM Ecosystem Integration**: Present implementation to JAM developers for feedback and adoption in production systems
- **Research Publication**: Submit findings to relevant cryptographic conferences and journals

**Maintenance & Support:**
- **Active Maintenance**: Monitor GitHub repository for issues, provide bug fixes, and respond to developer queries
- **Compatibility Updates**: Ensure compatibility with upcoming TypeScript versions and Node.js releases
- **Performance Monitoring**: Track performance metrics and optimize based on real-world usage patterns

**Enhancement & Extension:**
- **Feature Additions**: Implement additional helper functions and utilities based on community feedback
- **Performance Improvements**: Continue optimization efforts and implement advanced techniques
- **Test Vector Generation**: Create comprehensive test vectors compatible with Rust implementations
- **Security Analysis**: Conduct internal security reviews and implement additional hardening measures

### Long-Term Maintenance & Development

**Sustained Support Commitment:**
- **Full Compliance**: Maintain full compliance with W3F specifications and any protocol updates for 1 year at no cost
- **Open Source Initiative**: Continue maintenance as part of our open-source contributions beyond the initial year


**Ecosystem Expansion:**
- **Integration Partnerships**: Explore integrations with popular TypeScript Web3 tools and SDKs
- **Educational Resources**: Develop educational content and workshops for cryptographic protocol implementation
- **Research Collaboration**: Partner with academic institutions and research organizations for advanced cryptographic research

**Strategic Development:**
- **Additional VRF Types**: Consider implementing additional VRF schemes based on community needs
- **Formal Verification**: Explore formal verification opportunities for critical components
- **Third-Party Audits**: Pursue professional security audits for production-critical applications
- **Cross-Platform Optimization**: Implement platform-specific optimizations for various JavaScript engines

### Team's Long-Term Vision

Our goal is to establish this project as the **definitive TypeScript library** for JAM cryptographic primitives. We envision this implementation becoming the foundation for:

- **Web-Native JAM Applications**: Browser-based wallets, dApps, and light clients
- **Developer Education**: Comprehensive learning resources for cryptographic protocol implementation
- **Research Platform**: Enabling cryptographic research and protocol experimentation
- **Ecosystem Standard**: Setting the standard for TypeScript cryptographic implementations in the JAM ecosystem

Success will be measured by **widespread adoption** by developers, **integration** into production JAM applications, and **recognition** as a trusted, secure implementation within the broader cryptographic community.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?**
- Research into missing TypeScript cryptographic implementations for JAM protocol
- Community discussions about language diversity in JAM ecosystem development

**Additional Work:**  
Our team has previously delivered successful implementations including:
- [ElizaOS Polkadot Plugin](https://github.com/w3f/Grants-Program/pull/2518) - Comprehensive Polkadot integration for AI systems
- **PeanutButterAndJAM**: Active JAM protocol implementation demonstrating real-world usage of our cryptographic libraries

**Previous Grants:**  
- [ElizaOS Polkadot Plugin](https://github.com/w3f/Grants-Program/pull/2518) - Successfully delivered and maintained

**Technical Expertise:**
- **Cryptographic Implementation**: Deep experience in elliptic curve cryptography and VRF implementations
- **TypeScript Ecosystem**: Extensive knowledge of modern TypeScript development practices and tooling
- **JAM Protocol**: Active contributors to JAM ecosystem through PeanutButterAndJAM implementation
- **Web3 Integration**: Proven track record in blockchain protocol integration and developer tooling