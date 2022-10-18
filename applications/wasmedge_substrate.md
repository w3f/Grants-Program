# W3F Grant Proposal

- **Project Name:** WasmEdge for Substrate
- **Team Name:** Second State
- **Payment Address:** 0xf212a28a62d01549c323a5feac7bbc8534064c41 (Ethereum USDT)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

### Overview

Supporting WasmEdge as an alternative Substrate WebAssembly runtime. The project increases the Substrate ecosystem's node software diversity by supporting an alternative high-performance WebAssembly Runtime implementation. The project team are the maintainers of the WasmEdge WebAssembly Runtime project, and had successfully completed W3F projects in the past.

### Project Details

Software stack diversity (or “developer decentralization”) is key to building a resilient blockchain network. As Ethereum’s history has shown, the availability of multiple node software implementations, from GETH to Parity-Ethereum, has greatly improved network stability and security. When a critical bug is discovered or exploited on one implementation, the other would help sustain and stabilize the network.

The Substrate framework and libraries are compiled into WebAssembly bytecode and run on a WebAssembly runtime in order to achieve  safety and portability. It is therefore a low hanging fruit to support multiple alternative WebAssembly runtimes to improve software diversity at the foundation of the Substrate stack.

Currently, Substrate runs on the Wasmtime WebAssembly runtime created by the Mozilla and Fastly team. WasmEdge is another leading WebAssembly runtime hosted by the Linux Foundation / Cloud Native Computing Foundation (CNCF). It is fully compliant to the WebAssembly specification as well as standard WebAssembly extensions. It is supported across many OSes including Linux, Windows, Mac OS X, seL4, and CPU architectures including x86, aarch64, and Apple M1. WasmEdge is among the fastest WebAssembly runtimes available today.

Compared with Wasmtime, WasmEdge features a completely different software architecture. It is written in C++ and depends on the LLVM for runtime code generation, while Wasmtime is written in Rust and depends on Cranelift for dynamic compilation. That makes WasmEdge a compelling choice for improving Substrate software stack diversity.

In this project, we propose to use WasmEdge as an alternative WebAssembly runtime for Substrate. We will create a software layer that allows users to choose between Wasmtime and WasmEdge when they build Substrate from source. We will also evaluate the performance characteristics of the two runtimes.

### Ecosystem Fit

The proposed project will bring an alternative runtime at the base of the Substrate stack and hence benefit the entire ecosystem.

It could also bring Substrate developers communities closer to WasmEdge’s developer communities in cloud native (Linux Foundation / CNCF) and LLVM ecosystems. 

## Team :busts_in_silhouette:

### Team members

Michael Yuan is the technical co-founder of Second State and ParaState. He is also the author of the book Building Blockchain Apps published by Addison-Wesley in 2019.

Vincent Lin is the lead developer of the Substrate Ewasm Pallet based on WasmEdge. The pallet allows WasmEdge to act as an in-chain VM for Ethereum flavor WebAssembly smart contracts.

Tim McCallum is a developer’s advocate. He creates developer content, such as demos, tutorials, articles, videos, and podcasts, for blockchain developers.

Antonio Yang is the lead developer of the Rust SewUp crate, which enables Rust developers to create Ethereum flavored WebAssembly application compliant to the EVMC interface.

### Contact

- **Contact Name:** Michael Yuan
- **Contact Email:** michael@secondstate.io
- **Website:** https://www.secondstate.io/

### Legal Structure

- **Registered Address:** PO Box 2075, #30 The Strand, 46 Canal Point Dr., Grand Cayman, KY1-1105, Cayman Islands
- **Registered Legal Entity:** Second State Inc.

### Team's experience

The team consists of maintainers and core developers of the open source WasmEdge project.

The team has successfully completed a W3F grant in the past to adapt WasmEdge (previously known as SSVM) as an on-chain VM to execute Ethereum flavored WebAssembly (Ewasm) smart contracts.

### Team Code Repos

- https://github.com/wasmedge
- https://github.com/WasmEdge/WasmEdge
- https://github.com/second-state
- https://github.com/ParaState/
- https://github.com/ParaState/substrate-ssvm-node
- https://github.com/ParaState/substrate-parachain-ssvm

Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine.

- https://github.com/juntao
- https://github.com/CaptainVincent
- https://github.com/tpmccallum
- https://github.com/yanganto

### Team LinkedIn Profiles (if available)

- https://www.linkedin.com/in/myuan/

## Development Status :open_book:

The WasmEdge Runtime is a fully standard compliant WebAssembly runtime hosted by the CNCF. Please see its github repository for key features and use cases. With LLVM-based AOT support, WasmEdge is one of the highest performing WebAssembly runtime available today. 

https://github.com/WasmEdge/WasmEdge#performance

In the web3 ecosystem, WasmEdge is successfully adopted as an on-chain VM to execute Ethereum flavored WebAssembly (Ewasm) smart contracts on substrate-based blockchains.

https://github.com/ParaState/substrate-ssvm-node

## Development Roadmap :nut_and_bolt:

### Overview

- Total Estimated Duration: 3 months
- Full-Time Equivalent (FTE): 2 FTEs
- Total Costs: $45,000 USD

### Milestone 1 — Enable Substrate to run on WasmEdge

- Estimated duration: 1 month
- FTE: 2
- Costs: 15,000 USD

| Number | Deliverable     | Specification |
| -----: | --------------- | ------------- | 
| 0a.    | License         | Apache 2.0 |
| 0b.    | Documentation   | Provide instructions for developers on how to use our forked repo to build and run Substrate with WasmEdge as the default WASM VM |
| 0c.    | Testing Guide   | Provide a step-by-step guide for building and running a Substrate blockchain on WasmEdge |
| 0d.    | Docker          | Create Docker images with all build dependencies to faciliate the build process |
| 0e.    | Article         | Create a blog article to annouce WasmEdge integration with Substrate |
| 1.     | Rust API        | Create a wasmtime compatible Rust API for WasmEdge. That is because most of the existing Substrate hooks for WASM are designed for wasmtime's Rust APIs. To create a wasmtime compatible high-level API for WasmEdge will make the follow-up integration work much easier. |
| 2.     | Host wrapper    | Create host wrappers for WasmEdge in Substrate. Those functions are in the `client/executor/wasmtime` package in the substrate source tree. We will create an alternative `client/executor/wasmedge` package, and use the wasmedge executor in our fork. |
| 3.     | Test            | Build and test the entire Substrate project based on WasmEdge |

### Milestone 2 -- Create docs and config options to select between multiple WebAssembly runtimes

- Estimated duration: 1 month
- FTE: 2
- Costs: 15,000 USD

| Number | Deliverable     | Specification |
| -----: | --------------- | ------------- | 
| 0a.    | License         | Apache 2.0 |
| 0b.    | Documentation   | Provide instructions for developers optionally select WasmEdge as the WASM VM for Substrate |
| 0c.    | Testing Guide   | Provide a step-by-step guide for selecting WasmEdge and then building and running a Substrate blockchain on WasmEdge |
| 0d.    | Docker          | Create Docker images with all build dependencies to faciliate the build process |
| 0e.    | Article         | Create a blog article to annouce Substrate's option to use WasmEdge |
| 1.     | Software        | Create configuration options to select between wasmtime and WasmEdge host wrappers. The option will allow the compiler / build system to choose between the wasmtime and wasmedge executors when building the substrate binary. |

### Milestone 3 -- Performance benchmarks and analysis

- Estimated duration: 2 month
- FTE: 2
- Costs: 15,000 USD

| Number | Deliverable     | Specification |
| -----: | --------------- | ------------- | 
| 0a.    | License         | Apache 2.0 |
| 0b.    | Documentation   | Provide performance benchmark and profiler results |
| 0c.    | Testing Guide   | Provide instructions on how to run performance benchmark tests and performance profilers |
| 0d.    | Docker          | Create Docker images with all build dependencies to run the benchmarks |
| 0e.    | Article         | Create a blog article on WasmEdge's performance in Substrate |
| 1.     | Config          | Make sure that AOT is enabled for WasmEdge |
| 2.     | Eval            | Create performance metrics Substrate integration tests for wasmtime vs WasmEdge, as well as WasmEdge interpreter vs AOT |
| 3.     | Eval            | Identify performance bottlenecks in Substrate WasmEdge for future actions |
| 4.     | Upstream PR     | Create and merge a PR for the Substrate project. Work with the Substrate team to make sure that the PR is up to the coding standard and testing requirements for Substrate to merge it. |


## Future Plans

Our goal is to continuously improve WasmEdge's compatibility and performance in the Substrate environment, and hope to eventually become the default WASM runtime for Substrate.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation Website / Past grantee

As discussed, the team has extensive experience with WebAssembly runtimes. We are the maintainers of CNCF's WasmEdge project, and had successfully completed past W3F grant projects in adopting WebAssembly for on-chain smart contracts.

