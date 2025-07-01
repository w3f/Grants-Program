# Polkadot Java SDK

## Project Overview

**Tagline**  
A modern Java SDK for Polkadot/Substrate — built for enterprise integration and long-term ecosystem support.

**Description**  
We are building a fully featured and actively maintained Java SDK for the Polkadot/Substrate ecosystem. Previous efforts such as [`splix/polkaj`](https://github.com/splix/polkaj) and [`polkadot-java/api`](https://github.com/polkadot-java/api) have been abandoned or are incomplete, leaving developers — particularly in enterprise settings — without a reliable way to interact with Substrate-based networks from Java-based systems.

Our SDK will include modules for SCALE encoding/decoding, RPC interactions, and transaction signing/submission. It will follow modern Java practices, with clear documentation and full test coverage.

**Why this project**  
Java is one of the most widely used languages worldwide, especially in the enterprise and financial sectors. The lack of a current, reliable SDK for Java is a clear blocker for adoption. We're building this SDK to unlock that potential and fill a long-standing gap in the ecosystem.

## Project Details

**Technology Stack**
- Java 21+
- Maven-based modular project
- Custom SCALE codec implementation
- HTTP (and optionally WebSocket) RPC transport
- Jackson or similar libraries for deserialization

**Core Components**
- SCALE encoding/decoding
- Runtime metadata parsing
- RPC abstraction layer
- Transaction creation and signing
- Example modules with live network connections

**Prior Work / MVP**
We are actively developing a JAM implementation in Java and have contributed to several open source initiatives for Polkadot parachains. However, this SDK will be developed entirely independently, with no shared code or dependencies, to ensure clear separation in scope, architecture, and licensing.

**Not In Scope**
- UI components
- Node implementation

## Ecosystem Fit

**Where it fits**  
This SDK will serve Polkadot projects that rely on JVM-based backend infrastructure — including validators, parachains, data indexers, and off-chain services.

**Target Audience**
- Parachain developers using Java for supporting services
- Enterprise backends (e.g., financial institutions)
- Academic/enterprise research projects using Java

**Identified Needs & Evidence**
- [polkadot-java/api#34](https://github.com/polkadot-java/api/issues/34): “Is this project maintained?”
- [splix/polkaj#92](https://github.com/splix/polkaj/issues/92): “Is this project still alive?”
- [Polkadot Forum thread](https://forum.polkadot.network/t/substrate-java-rpc-client/7104): developers seeking Substrate Java tooling
- Java is consistently one of the top 3 most-used languages globally (TIOBE, StackOverflow Developer Survey)

**Similar Projects**
- `splix/polkaj` – Inactive since 2022
- `polkadot-java/api` – Unmaintained and incomplete
- Other ecosystems like Ethereum (web3j) and Hyperledger have robust Java SDKs — Polkadot does not

## Team

- **Team Name:** Method5
- **Contact Name:** Jason Mansfield
- **Contact Email:** jmansfield@method5.com
- **Website:** https://method5.com

### Lead Members
 - Jason Mansfield - Solution Architect with deep experience in blockchain systems, decentralized applications, and scalable IT architecture. Skilled in smart contracts, distributed systems, and emerging Web3 technologies, with a track record of delivering enterprise-grade infrastructure.

   - https://www.linkedin.com/in/jason-mansfield/
   - https://github.com/jaymansfield
   

### Team’s Experience
- Past open source contributions to Polkadot parachains (complete analytics platform for Polkadex, CoinMarketMap connector, DefiLlama connector, etc.)
- JAM protocol implementation in Java
- JVM-based protocol tooling and blockchain infrastructure

## Development Status

We’ve designed the architecture, prototyped key pieces such as the SCALE codec and metadata parsing, and reviewed existing Java-based SDKs to understand their limitations and inform our architectural decisions. This SDK will be built entirely from scratch to maintain clean architectural separation and avoid any licensing conflicts.

## Development Roadmap

### Overview

- **Estimated Duration:** 3 months
- **FTE:** 2.5 FTE
- **Total Costs:** 25,000 USD

### Milestones

| Number | Deliverable     | Specification                                                                                                                                                                                                                                           |
|--------|------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 0a.    | License           | Apache 2.0                                                                                                                                                                                                                                              |
| 0b.    | Documentation     | All major classes and interfaces will include inline Javadoc. A quick-start tutorial will be provided, covering installation, configuration, and typical RPC workflows (e.g., retrieving blocks, querying storage).                                     |
| 0c.    | Usage Examples    | A set of example Java programs demonstrating how to connect to a Substrate node, fetch block data, query state, and submit extrinsics.                                                                                                                  |
| 1.     | SDK Core          | Core SDK modules including:<br>• Custom SCALE codec (encode/decode primitives and composite types)<br>• Runtime metadata parser<br>• RPC interface abstraction (HTTP transport, base methods like `chain_getBlock`, `state_getStorage`, etc.)           |
| 2.     | SDK Extensions    | Support for:<br>• Key management and transaction signing<br>• Extrinsic construction and submission (`author_submitExtrinsic`)<br>• Error handling (e.g., decoding dispatch errors)<br>• Support for common transaction types (e.g., balances.transfer) |

### Budget Breakdown

| Category   | Item                       | Cost   | Amount  | Total          | Description                           |
|------------|----------------------------|--------|---------|----------------|---------------------------------------|
| Personnel  | Architect / Lead Developer | 10,000 | 2 FTE   | 20,000         | Architecture, core SDK implementation |
| Personnel  | QA Engineer                | 5,000  | 0.5 FTE | 5,000          | Tests, documentation, usage examples. |
| —          | —                          | —      | —       | **25,000 USD** |                                       |

## Future Plans

- Ongoing maintenance and support via Method5
- Promote SDK via social media, documentation, and blog posts
- Explore expanding into Kotlin/Scala support for broader JVM compatibility

## Additional Information

- SDK will be developed independently of our JAM implementation
- Contributions to open-source parachain ecosystems (code available upon request)
- Grant will allow us to formalize and accelerate development already underway
