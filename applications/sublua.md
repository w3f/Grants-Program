# SubLua - Substrate SDK for Lua

## Project Overview

**Tagline:** A development SDK that brings Substrate blockchain functionality to Lua through FFI bindings.

**Project Description:**
SubLua is a comprehensive software development kit that enables Lua applications to interact with Substrate-based blockchains. By providing FFI (Foreign Function Interface) bindings to Rust cryptographic libraries, SubLua bridges the gap between the Lua ecosystem and the Polkadot/Kusama networks, making blockchain functionality accessible to millions of existing Lua applications.

**Polkadot/Kusama Integration:**
SubLua integrates directly with the Substrate ecosystem by:
- Connecting to any Substrate RPC endpoint (Polkadot, Kusama, parachains)
- Using standard Substrate transaction formats and cryptographic primitives
- Supporting Sr25519 signatures and SS58 address encoding
- Implementing Substrate's transaction construction and signing workflows
- Enabling interaction with standard pallets (balances, system, etc.)

**Team Interest:**
Our team recognized a significant gap in the Substrate ecosystem - while there are excellent SDKs for JavaScript/TypeScript and Python, the Lua ecosystem was completely underserved. Given Lua's widespread use in gaming, IoT, embedded systems, and web applications, we saw an opportunity to expand the potential developer base for Substrate chains dramatically.

### Project Details

**Technology Stack:**
- **Core Language:** Lua (5.1+) and LuaJIT
- **FFI Layer:** Rust with C-compatible FFI exports
- **Cryptography:** sr25519, blake2b, and other Substrate-standard algorithms
- **Networking:** LuaSocket for HTTP/WebSocket connections
- **JSON Processing:** lua-cjson for RPC communication
- **Build System:** Cargo for Rust components, LuaRocks for dependencies

**Core Components Architecture:**
```
┌─────────────────┐
│   Lua Scripts   │  ← Game/App Logic
├─────────────────┤
│   SubLua SDK    │  ← High-level Lua API
│   - RPC Client  │
│   - Extrinsics  │
│   - Signers     │
│   - Chain Config│
├─────────────────┤
│  Rust FFI Lib   │  ← Cryptographic Operations
│  - Sr25519      │
│  - Blake2b      │
│  - Scale Codec  │
├─────────────────┤
│ Substrate Chain │  ← Polkadot/Kusama/Parachains
└─────────────────┘
```

**Current Implementation Status:**
- ✅ Chain connection via RPC
- ✅ Account generation and management
- ✅ Balance queries and account info
- ✅ Transaction construction (balance transfers, system remarks)
- ✅ Sr25519 signing via Rust FFI
- ✅ Multi-chain support (Polkadot, Kusama, Westend, Paseo)
- ✅ Working game example (DOT Catcher in LOVE2D)

**Proof of Concept:**
The project includes a complete working example (`example_game.lua`) that demonstrates:
- Connection to Paseo testnet
- Account creation and balance checking
- Transaction signing and submission
- Error handling and chain queries

**UI Components:**
While SubLua is primarily a backend SDK, we've created a demonstration game using LOVE2D that shows how to integrate blockchain functionality into a Lua-based game interface.

**Data Models:**
```lua
-- Account structure
Account = {
    nonce = number,
    data = {
        free_tokens = number,
        reserved = number,
        frozen = number
    }
}

-- Transaction structure
Transaction = {
    call = table,      -- Encoded call data
    era = table,       -- Transaction mortality
    nonce = number,    -- Account nonce
    tip = number,      -- Transaction tip
    genesis_hash = string,
    block_hash = string
}
```

**What SubLua Does NOT Provide:**
- Smart contract compilation or deployment tools
- Full node implementation or consensus mechanisms
- Advanced cryptographic operations beyond standard Substrate requirements
- Built-in wallet UI components (it's a backend SDK)
- Support for non-Substrate chains
- Production-grade error recovery or transaction retry mechanisms

### Ecosystem Fit

**Ecosystem Position:**
SubLua fills a critical gap in the Substrate developer tooling ecosystem. While excellent SDKs exist for JavaScript (@polkadot/api), Python (py-substrate-interface), and Go (substrate-go), there was no mature solution for Lua developers. This creates a barrier for:

- Game developers using Lua-based engines (LOVE2D, Defold, Corona SDK)
- IoT developers working with Lua-enabled hardware (OpenWrt, NodeMCU)
- Web developers using Lua in production (OpenResty, nginx scripting)
- Embedded system developers requiring lightweight blockchain integration

**Target Audience:**
1. **Game Developers:** Creating blockchain-enabled games with player-owned assets, token rewards, and decentralized leaderboards
2. **IoT Developers:** Building IoT devices that participate in token economies or require blockchain-based authentication
3. **Web Developers:** Integrating blockchain functionality into existing Lua-based web applications
4. **Embedded System Developers:** Adding blockchain capabilities to resource-constrained devices
5. **Existing Lua Application Developers:** Retrofitting blockchain features into established Lua codebases

**Identified Needs:**
The need for SubLua was identified through:
- **Developer Surveys:** Multiple requests in Polkadot developer forums for Lua SDK
- **Game Developer Interviews:** Conversations with indie game developers wanting to add blockchain features
- **IoT Use Cases:** Analysis of micropayment and device authentication requirements
- **Market Research:** Lua is used in millions of applications but had zero Substrate integration options

**Supporting Evidence:**
- Lua ranks in top 20 programming languages (TIOBE Index)
- Popular games like World of Warcraft, Roblox use Lua extensively
- Major IoT platforms (OpenWrt) serve millions of devices with Lua scripting
- Gaming market increasingly interested in blockchain integration

**Similar Projects in Polkadot/Kusama:**
After reviewing the Polkadot Forum, Tech Stack documentation, and OpenGov proposals, no existing Lua SDK was found. The closest alternatives are:
- **@polkadot/api (JavaScript):** Excellent but requires Node.js runtime
- **py-substrate-interface (Python):** Good but Python has different deployment constraints
- **substrate-go:** Useful but Go's complexity exceeds Lua's simplicity goals

**Differentiation:**
SubLua is unique because:
- **Lightweight:** Minimal dependencies, suitable for embedded systems
- **Embeddable:** Can be integrated into existing applications without runtime changes
- **Gaming-Focused:** Optimized for game development workflows
- **FFI Architecture:** Direct access to Rust crypto libraries without performance overhead

**Related Ecosystem Projects:**
Similar projects in other blockchain ecosystems include:
- **Ethereum:** lua-ethereum (abandoned, incomplete)
- **Bitcoin:** lua-bitcoin (basic RPC only)
- **Solana:** No mature Lua SDK exists

SubLua would be the first production-ready blockchain SDK for Lua in any major ecosystem.

## Team

**Team Name:** MontaQ Labs
**Contact Name:** Abhiraj Mengade
**Contact Email:** contact@montaq.org
**Website:** https://github.com/MontaQLabs

### Team members

Abhiraj Mengade, Haoyang Li

#### LinkedIn Profiles (if available)

- https://www.linkedin.com/in/abhiraj-mengade/
- https://www.linkedin.com/in/haoyang-li-aa3647240/

### Team Code Repos

- https://github.com/MontaQLabs/sublua

### Team GitHub Accounts

- https://github.com/abhiraj-mengade
- https://github.com/lhymmEU

### Team's Experience

Our team has strong experience in Polkadot/Substrate development, Lua programming, and blockchain integration. Abhiraj Mengade is a Polkadot Blockchain Academy graduate with distinction and a Teaching Assistant for PBA-X 2025. He has won multiple Polkadot hackathons, including Bangkok and Paris, and has experience in Lua programming and scripting logic relevant to game development. Haoyang Li, also a graduate of the Polkadot Blockchain Academy, has a background in Linux kernel security and cryptography research. He won the Vara Hackathon as a solo developer and has worked on frontend integration for Polkadot SDKs. He led a frontend integration workshop at the Polkadot AssetHub Hackathon and is focused on building developer-friendly frontend tooling to improve accessibility to Polkadot’s infrastructure.

## Development Status

**Current Implementation:**
The SubLua project is currently in active development, with a working proof of concept. The current codebase includes:

- **Core SDK** (`sdk/` directory): Complete Lua interface with modules for RPC, signing, transactions, and chain configuration
- **Rust FFI Library** (`polkadot-ffi/`): Cryptographic operations using substrate-primitives
- **Working Examples:** Complete game implementation demonstrating real blockchain integration
- **Multi-chain Support:** Tested with Polkadot, Kusama, Westend, and Paseo networks

**Repository:** https://github.com/MontaQLabs/sublua

**Research and Development:**
- Analysis of existing Substrate SDKs to identify best practices
- Investigation of Lua FFI capabilities and performance characteristics
- Testing with various Lua runtimes (standard Lua, LuaJIT, OpenResty)
- Game development proof-of-concept using LOVE2D engine

**Previous Work:**
- Functional transaction signing and submission
- Multi-chain configuration auto-detection
- Error handling and network communication
- Integration examples with popular Lua frameworks

## Development Roadmap

**Please notice that Polkadot Open Source Grants only accept projects up to 3 months of duration and up to 2 milestones.**

### Overview

- **Estimated Duration:** 3 months
- **Full-Time Equivalent (FTE):** 1.5 FTE
- **Total Costs:** 25,000 USD

### Milestone 1 — Enhanced SDK Core and Documentation (6 weeks)

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | MIT License |
| 0b. | Documentation | Complete inline code documentation, comprehensive tutorial covering installation, basic usage, advanced features, and integration examples. API reference documentation for all modules. |
| 0c. | Testing and Testing Guide | Comprehensive unit tests for all SDK components, integration tests with multiple Substrate chains, automated testing pipeline, and detailed testing guide explaining how to run tests locally and in CI. |
| 0d. | Docker | Dockerfile for easy development environment setup, including all dependencies (Lua, Rust, required libraries) and example applications. |
| 0e. | Article | Technical blog post explaining SubLua's architecture, use cases, and demonstrating integration with a real game example. Target audience: Substrate developers and game developers. |
| 1. | Enhanced Transaction Support | Extend transaction support beyond basic transfers to include: staking operations (bond, unbond, nominate), governance participation (vote, propose), and utility calls (batch, proxy). Implementation includes proper encoding, signing, and submission workflows. |
| 2. | Improved Error Handling | Robust error handling system with detailed error messages, automatic retry mechanisms for network failures, validation of transaction parameters, and comprehensive error documentation. |
| 3. | Performance Optimization | Optimize FFI calls, implement connection pooling for RPC clients, add caching for frequently accessed chain data, and profile/optimize critical code paths. |
| 4. | Chain Metadata Integration | Dynamic chain metadata fetching and parsing, automatic pallet discovery, runtime version compatibility checking, and support for custom chain configurations. |

### Milestone 2 — Advanced Features and Production Readiness (6 weeks)

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | MIT License |
| 0b. | Documentation | Updated documentation including advanced usage patterns, production deployment guide, security best practices, and troubleshooting guide. |
| 0c. | Testing and Testing Guide | Extended test suite covering all new features, stress testing, security testing, and cross-platform compatibility tests. |
| 0d. | Docker | Updated Docker configuration supporting production deployments and multi-architecture builds. |
| 0e. | Article | Case study article showcasing a complete real-world application built with SubLua, including architecture decisions, lessons learned, and performance metrics. |
| 1. | WebSocket Connection Management | Robust WebSocket connection handling with automatic reconnection, connection pooling, heartbeat monitoring, and graceful degradation to HTTP when WebSocket is unavailable. |
| 2. | Advanced Cryptographic Features | Support for additional cryptographic operations, including multi-signature accounts, proxy accounts, and identity management. Secure key storage recommendations and examples. |
| 3. | Production Game Example | A complete and polished game that demonstrates production-ready blockchain integration. Includes player account management, token economics, leaderboards, and secure transaction handling. |
| 4. | SDK Packaging and Distribution | Proper LuaRocks package creation, automated build pipeline, cross-platform binary distribution, and installation scripts for major operating systems. |
| 5. | Security Audit and Hardening | Comprehensive security review of cryptographic implementations, enforcement of secure coding practices, vulnerability assessment, and security documentation. |

### Budget Breakdown

| Category | Item | Cost | Amount | Total | Description |
| --- | ---- | --- | --- | --- | ---|
| Personnel | Lead Developer | 20,000 USD | 1 FTE | 20,000 USD | Project architecture, core development, and technical leadership |
| Personnel | Blockchain Specialist | 12,000 USD | 0.5 FTE | 6,000 USD | Substrate integration, cryptography, and security review |
| Equipment | Development Hardware | 1,000 USD | 1x | 1,000 USD | Testing devices and development tools |
| Subcontracts | Security Audit | 2,000 USD | 1x | 2,000 USD | External security review of cryptographic components |
| --- | --- | --- | **Total** | **29,000 USD** |  |

*Note: Requesting 25,000 USD to fit within typical grant ranges; About 10,000 USD of our funding will be tipped to active community contributors to this project*

## Future Plans

**Long-term Maintenance:**
- Establish a sustainable maintenance model through:
  - Community contributions and governance
  - Potential integration with the existing Polkadot ecosystem funding
  - Commercial support services for enterprise users
  - Partnership with game development companies using the SDK

**Short-term Enhancement:**
- Expand transaction support to cover all major Substrate pallets
- Create additional example applications for different use cases
- Establish community documentation and tutorials
- Integrate with popular Lua frameworks and game engines
- Present at gaming and blockchain conferences to promote adoption

**Long-term Vision:**
- Position SubLua as the standard blockchain SDK for Lua developers
- Build a community of developers for blockchain-enabled games and applications
- Explore opportunities for parachain-specific optimizations
- Investigate integration with emerging Substrate features like smart contracts
- Develop specialized tools for specific verticals (IoT, gaming, web applications)

## Additional Information

**Existing Work:**
- Functional proof-of-concept with working transaction support
- Successful integration with multiple Substrate chains
- Complete game example demonstrating real-world usage
- Preliminary performance testing and optimization

**Community Interest:**
- Multiple requests for the Lua SDK in the Polkadot developer forums
- Interest expressed by indie game developers in blockchain integration
- Potential adoption by IoT and embedded systems developers

**Technical Innovation:**
SubLua introduces several innovative approaches:
- Lightweight FFI architecture minimizing runtime overhead
- Automatic chain configuration detection reduces setup complexity
- Game-developer-friendly API design prioritizing ease of use
- Cross-platform compatibility supporting diverse deployment scenarios

**Future Funding:**
While this grant will establish SubLua as a mature, production-ready SDK, we plan to pursue additional funding through:
- Polkadot Treasury for ongoing maintenance and feature development
- Gaming industry partnerships for specialized game-focused features
- IoT industry collaboration for embedded systems optimization
