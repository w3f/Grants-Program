# Java Host Research Proposal

- **Project Name:** Research feasibility of Polkadot Host in Java
- **Team Name:** [LimeChain](https://github.com/LimeChain)
- **Payment Address:** eth:0x1F7683228Ee9Bc65335374eA5c92B81C74131404 (USDC/USDT/DAI)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 3

# Project Overview **📄**

## Overview

Over the past several years the Polkadot and Substrate community has put a lot of effort into growing the diversity of
both Host and Runtime implementations. Firstly, in addition to the Substrate runtime environment,
currently, [an alternative framework for building Substrate-compatible runtimes in Go is being developed (by another team at LimeChain)](https://polkadot.polkassembly.io/motion/292)
. On top of that, multiple different language host implementations have been built, and are currently maintained and
improved:

- Go: [gossamer](https://github.com/ChainSafe/gossamer) by ChainSafe
- C++: [kagome](https://github.com/soramitsu/kagome) by Soramitsu
- Rust: [polkadot](https://github.com/paritytech/polkadot) by Parity
- Rust Light Client: [smoldot](https://github.com/paritytech/smoldot) by Parity

While the ecosystem is growing with multiple alternatives for host implementation, adding a host implementation in Java
will further enhance the diversity, and will enable a whole new subset of participants to enter the Polkadot ecosystem.

If we try to judge the possible diversity increase, we can look no further than the Ethereum ecosystem as an example of
client diversity. Currently, around 18% of the consensus nodes run the Java-based consensus
client ([Teku](https://consensys.net/knowledge-base/ethereum-2/teku/)) and around 6% of the users run the java execution
client ([Hyperledger Besu](https://besu.hyperledger.org/en/stable/)).

Furthermore, such a host written in java has the chance of attracting the attention of the Java development communities
and Java-centric organisations. These ecosystems and organisations usually consist of well-established organisations and
communities. Some of the key advantages of Java-based applications include:

- Platform independence: Java code can be run on any device or operating system that supports a Java Virtual Machine (
  JVM), making it a highly portable language. This is particularly valuable for enterprises, which often have complex,
  distributed IT environments with a mix of different operating systems and hardware platforms.
- Scalability and performance: Java is a high-performance language that is designed to be scalable and efficient. It has
  a number of features, such as just-in-time compilation and garbage collection, that make it well-suited for
  large-scale, resource-intensive applications. The team at Limechain is a contributor
  to [Hedera Hashgraph](https://hedera.com/) - a high performant BFT-based ledger network primarily built in Java.
- Strong community and support: As a widely-used language with a large and active community of developers, Java has a
  wealth of resources and support available for developers. This includes support on the most popular libraries, as well
  as a wealth of online resources and communities where developers can go for help and advice.
- Enterprise-grade libraries and tools: Java has a rich ecosystem of libraries and tools that are specifically designed
  for enterprise-grade applications. This includes things like enterprise application frameworks, data access libraries,
  and security tools, all of which make it easier for developers to build high-quality, enterprise-grade applications.
  One such, relevant example is the Java version of the wasm execution environment - wasmer
    - [wasmer-java](https://github.com/wasmerio/wasmer-java).

In summary, having a host implementation in Java will further expand the ecosystem and enhance diversity. If the state
of the blockchain networks, and the history of software engineering for that matter, has taught us anything, it is that
the bigger and more diverse the ecosystem is - in terms of both people and software, the more resilient it is. With this
research, we want to contribute to increasing both of these.

## Project Details

### Research & PoC development

**The end goal of this initiative is to create a host implementation in Java**. Going directly for a host implementation
could prove a challenging task, thus spending the time to abstract and formalise the different building blocks and their
implementation feasibility in Java is the rational first step.

The end goal of the research as part of this grant is to prove the feasibility and formalise the architecture of Java
Host written in Java.

We would focus on clearing out the unknowns, mitigating the risks and doing feasibility research for several components
that hold the biggest risks:

- **Runtime Execution Environment** - Verify that Java can be a viable and performant execution environment for WASM,
  and especially the WebAssembly MVP with the domain-specific API that Polkadot uses. In order to clear out this
  unknown, the team will create a PoC to prove or disprove the feasibility of a Java-based execution environment. The
  library to be tested is `wasmer-java`. The following functionalities of `wasmer-java` will be tested:
  - Load `wasm` (WebAssemblyMVP) bytecode for execution
  - Import Host APIs within the Runtime
    - Verify that all `crypto` and hashing primitives can be implemented in Java
  - Load `__heap_base` exported from the `WASM` runtime
  - Allocate/Deallocate memory buffer for transferring data between Host and Runtime
  - Set data in the shared memory buffer for sending data to Runtime
  - Call exported from the WASM Bytecode function with data arguments
  - Read and parse the returned data of the WASM Runtime from the shared memory buffer 
- **PolkaJ** - https://github.com/emeraldpay/polkaj has a lot of the required building blocks for a Java Host. The team
  will verify or disprove the feasibility of the `SCALE` codec implementation as-well as the WASM Wrapper implementation
  of https://github.com/w3f/schnorrkel. As an alternative implementation of `schnorrkel` we will
  explore https://github.com/debuggor/schnorrkel-java as-well.
- **libp2p** - `yamux` and [kademlia](https://github.com/libp2p/specs/blob/master/kad-dht/README.md) are not yet supported
  in the [JVM](https://github.com/libp2p/jvm-libp2p) implementation. We will assess the scope of the missing libraries
  and will contact the team to discuss potential implementation on their side or contributing on our.

Furthermore, the project will include multiple research outcomes, detailing and specifying the way that the different
components of light and full nodes can be built.

# Team **👥**

### Team members

- Daniel Ivanov
- Georgi Spasov
- Viktor Todorov

### Contact

- **Contact Name:** Christian Veselinov, Zhivko Todorov, George Spasov
- **Contact Email:** [chris@limechain.tech](mailto:chris@limechain.tech)
  , [zhivko@limechain.tech](mailto:zhivko@limechain.tech), [george@limechain.tech](mailto:george@limechain.tech)
- **Website:** [https://limechain.tech](https://limechain.tech/)

### Legal Structure

- **Registered Address:** Bulgaria, Dragan Tsankov 23A, 1113, Sofia, Bulgaria
- **Registered Legal Entity:** LimeLabs Ltd.

### Team's experience

At LimeChain, we feel confident in and have a lot of development hours invested in the Polkadot ecosystem. Some of the
ecosystem work we’ve done involves the creation
of [Runtime from scratch](https://github.com/LimeChain/as-substrate-runtime) and evolving it into fully
capable [frameworks for building Substrate Runtimes](https://github.com/LimeChain/subsembly).

We have extensive experience in building Java clients, given that we are contributors to Hedera Hashgraph, where we are
part of the development of the network client in Java. We also feel experienced in building developer tooling,
specifically within Rust/WebAssembly ([matchstick](https://github.com/limeChain/matchstick/)). All of this emphasizes
that the knowledge/expertise of the company spans across the required technological stacks - Substrate, WebAssembly and
Java.

- [https://github.com/LimeChain/subsembly](https://github.com/LimeChain/subsembly)
- [https://github.com/LimeChain/subsembly-core](https://github.com/LimeChain/subsembly-core)
- [https://github.com/LimeChain/as-scale-codec](https://github.com/LimeChain/as-scale-codec)
- [https://github.com/LimeChain/as-substrate-runtime](https://github.com/LimeChain/as-substrate-runtime)
- [https://github.com/LimeChain/gosemble](https://github.com/LimeChain/gosemble)

### Team Code Repos

- [https://github.com/LimeChain](https://github.com/LimeChain)

Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted
elsewhere or live are also fine.

- [https://github.com/daniel-k-ivanov](https://github.com/daniel-k-ivanov)
- [https://github.com/Perseverance](https://github.com/Perseverance)
- [https://github.com/vikinatora](https://github.com/vikinatora)

### Team LinkedIn Profiles (if available)

- [https://www.linkedin.com/in/daniel-k-ivanov/](https://www.linkedin.com/in/daniel-k-ivanov/)
- [https://www.linkedin.com/in/george-spasov/](https://www.linkedin.com/in/george-spasov/)
- [https://www.linkedin.com/in/viktor-todorov-8a7434122/](https://www.linkedin.com/in/viktor-todorov-8a7434122/)

# **Development Status 📖**

As part of our current research, we’ve compared the Polkadot host specification and requirements with the currently
available tools and libraries in Java needed to implement it. While the preliminary research shows positive results,
several important aspects of the creation of a host need to be further proven, tested or researched:

- The feasibility of using Java as an execution environment for WebAssembly MVP
    - Another popular Polkadot Host implementation - Gossamer - uses wasmer as an execution environment for the runtime
      WebAssembly. [Wasmer-java](https://github.com/wasmerio/wasmer-java) is an available option but needs to be tested
      out against WebAssembly MVP and the domain-specific APIs.
- The overall feasibility of the creation of the different modules and the rough architecture (storage, consensus,
  networking, RPCs, etc) in order to create light and full client nodes.

# Development Roadmap **🔩**

Described below are the steps we think are necessary to get a deep understanding of how the Java host can be built:

1. Review and build a PoC for `wasmer-java` against WebAssembly MVP
    1. In order to prove the feasibility of Java being an execution environment we will create a small POC showcasing
       the ability of Java to communicate with a WebAssembly MVP binary
2. Validate / Invalidate the applicability of [PolkaJ](https://github.com/emeraldpay/polkaj)
    1. Reusing the `SCALE` codec implementation
    2. Reusing the `schnorrkel` of PolkaJ or [schnorrkel-java](https://github.com/debuggor/schnorrkel-java)
3. Research the feasibility of [libp2p-jvm](https://github.com/libp2p/jvm-libp2p)
    1. Discuss timelines on implementing `yamux` and `kademlia` with Protocol Labs or potential contribution
4. Research the feasibility of the different modules needed in order to create a light client
5. Research the feasibility of the different modules needed in order to create a full host
6. Propose an architecture and sensible roadmap for implementing a Java Host, based on the previous steps

### Overview

- **Total Estimated Duration:** 6 working weeks
- **Full-Time Equivalent (FTE):** 2
- **Total Costs:** $36,000

### Milestone 1 — Research the feasibility of Polkadot Host in Java

- **Estimated duration:** 4 working weeks
- **FTE:** 2
- **Costs:** $24,000

This milestone will:

| Number | Deliverable | Specification |
| --- | --- | --- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide Markdown documentation of the whole research, explaining the necessary steps needed to resolve the technical challenges of the creation of a Java-based light client and full host. |
| 1a.  | PoC | Research and outline the feasibility of using `wasmer-java` for the Runtime Execution Environment for WebAssembly MVP. PoC will be built in order to verify the feasibility. |
| 1b. | Testing Guide | We will provide a testing guide of the PoC of a Java-based WASM execution environment |
| 1c. | Docker | We will provide a Dockerfile(s) that can be used to test the PoC. |
| 2. | Research | Research and verify the feasibility of reusing PolkaJ libraries for various components such as `SCALE`, `schnorrkel` and `RPC` API. |
| 2. | Research | Research and outline the design of the p2p module of the Java Polkadot Host. Asses the implementation of `yamux` and `kademlia`. Contact the Protocol Labs team.|
| 3. | Research | Research and outline the design of the storage module (Host and Runtime) of the Java Polkadot Host. |
| 4. | Research | Research and outline the design of the RPC API of the Java Polkadot Host. |
| 5. | Research | Research and outline the design of the modules and APIs for the Java Polkadot Host to be part of the consensus-reaching processes. |
| 6. | Documentation | Java Polkadot Host design document will be produced that combines the research findings of the previous deliverables and outlines a high-level specification for the creation of a Java-based Host. |
| 7. | Documentation | Java Polkadot Host design document will be produced that combines the research findings of the previous deliverables and outlines a high-level specification for the creation of a Java-based Light-client. |

# Future Plans

Having this research will give us a clear understanding of how Java light and full clients can be built. Completing it
will become the foundational block for the creation of the Java-based Host which would be the next step for the team
after delivering this research.

# Additional Information **➕**

LimeChain has been a long-time contributor to the Substrate ecosystem mainly focused on developer tooling. Due to our
involvement in the space, we are working with various clients, developing smart contracts and working on parachains.