# Polkadot Light Client in C++

- **Team Name:** Equilibrium
- **Payment Address:** 0x4126272BA14F7a124b1B98633678e0e5F87Ec478
- **[Level](https://github.com/w3f/Grants-Program/tee/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

This project is to create a C++ implementation of a Light Client for Substrate-based chains.
On a high level, the C++ Light Client will allow users (via JSON-RPC) to:

- Query chain state within the client (on synced chain state, including runtime code)
- Route user transactions to peers and track results
    
[smoldot]: https://github.com/paritytech/smoldot/

### Project Details

We will deliver a detailed specification of a light client for the implementation based on the research done in the time frame specified in this proposal. The actual implementation will be performed in the next phase.

The specification includes:

#### Cryptography

Define primitives / library requirements such as blake2 hashing for proof verification  
Check library availabilities and provide estimates for missing libraries

#### Embedding Runtime

Define runtime environment requirements (Browser / NodeJS application / Other?)\*  
Select runtimes such as wasmedge and/or emscripten cross-compilation for desktop / server and/or browser  
Define embedding environment interface such as bindings in JavaScript

#### Specifications for multichain support

Specify scope and support for Parachain and Relay chain

#### JSON-RPC service APIs

Define APIs to be supported\*
(submitting transactions, watching transactions / blocks / accounts, etc)

As the RPC API is currently unstable (see [PSPs#41](https://github.com/w3f/PSPs/issues/41)), specification must be written first.

#### Components specifications / selection

Networking (likely cpp-libp2p)  
Database (likely SQLite)

\*Web3 Foundation input required

### Ecosystem Fit

This is an alternate implementation to the WASM light node in [Smoldot].

## Team :busts_in_silhouette:

### Team members

- Vaclav Barta
- Mark Henderson

### Contact

- **Contact Name:** Mark Henderson
- **Contact Email:** mark@equilibrium.co
- **Website:** https://equilibrium.co/

### Legal Structure

- **Registered Address:** Leipätehdas, Kaikukatu 4, 6th floor 00530 Helsinki, Finland
- **Registered Legal Entity:** Equilibrium Group Oy

### Team's experience

- Vaclav Barta is a Senior Software Developer at Equilibrium. Having implemented C++ projects for companies from Akamai to Deutsche Bank, currently creating smart contract pipelines from C to WebAssembly for XRPL Foundation.
- Mark Henderson is the VP of Engineering at Equilibrium. He has led the team starting with the original Rust IPFS grant in late 2019, through engagements with many of the largest names in Web3, and is now circling back to finish the critical work the team started with the original Ziggurat proposal. Core contributor to OrbitDB, Rust IPFS, and Ziggurat.

### Team Code Repos

- https://github.com/eqlabs

## Development Status :open_book:

Equilibrium discussed with David Hawig on different implementation on Polkadot host, C++, AssemblyScript and Zig. After initial research, Equilibrium has decided to apply for the C++ implementation of the light node.

## Development Roadmap :nut_and_bolt:

To achieve the final implementation, the project is broken down into 2 phases:

- Phase 0: Initial research for C++ Light Client specification
- Phase 1: Light Client implementation

This proposal is only for Phase 0 and will culminate with the delivery of a detailed specification for the light client implementation in Phase 1.

### Overview

- **Total Estimated Duration:** 5 weeks
- **Full-Time Equivalent (FTE):** 1
- **Total Costs:** $34000 USD

### Milestone 1 — Substrate Module Research

- **Estimated duration:** 5 weeks
- **FTE:** 1
- **Costs:** $34000 USD

| Number | Deliverable   | Specification                                                                                                                                                                                                                                 |
| -----: | ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|    0a. | License       | Apache 2.0 / MIT                                      |
|    0b. | Format        | Markdown (mdBook)                                     |
|    0c. | Published     | GitHub, GitHub Pages                                  |
|    1. | Cryptography | security advantages over connecting to 3rd-party node, limitations compared to full client  |
|    2. | Runtime environment requirements | for browser and Node.js |
|    3. | JSON-RPC APIs | minimal run-time access interface |
|    4. | Dependencies | libraries for cryptography, networking, build |


## Future Plans

From here we would move on to the implementation of the light client node in Phase 1. We expect Phase 1 to be completed by a larger team at Equilibrium.
