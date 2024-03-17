# Inkscope Fuzzer

- **Team Name:** Inkscope
- **Payment Address:**  13mMCgidf4fdevVBCENS4U3pdQKLzcFQiZEMjuGTVrTJg1tE (USDC on Asset Hub)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:


### Overview
Smart contracts are playing an increasingly important role in managing digital assets, with an estimated market cap reaching into the billions. However, vulnerabilities in their code have led to over millions being exploited by hackers to date. As adoption continues to accelerate, rigorous security measures during development are essential. 

Even though smart contracts in Polkadot are not currently securing substantial value relative to other chains, it is prudent to establish robust security frameworks proactively before significant funds are put at risk.

Currently, developers rely primarily on manually written tests and internal/external audits to validate contracts before deployment. But the novelty and mounting complexity of next-gen protocols demands more automated, scalable methods. Further, security auditing requires highly specialized skills - particularly for Rust/WebAssembly-based chains - while integrations between contracts compounds risk vectors.

To address these challenges, we propose developing a custom WebAssembly fuzzer for smart contracts. Fuzzing is an effective way to find security bugs in software, it finds vulnerabilities often missed by static program analysis and manual code inspection. By testing bytecode builds at the pre-deployment stage, contract vulnerabilities can be discovered and patched earlier in the cycle. Language-agnostic fuzzing will cover all smart contract languages compilable to WASM, including ink!, with extensibility for any languages added in future.


![wasm contracts](https://polkadot-blockchain-academy.github.io/pba-book/blockchain-contracts/ink/img/schema3.png)

#### **Advantages of a WASM smart contract fuzzer:**

- **Enhanced Precision:** Fuzzers, through dynamic code execution, yield outcomes with notably reduced instances of false positives and negatives compared to conventional static analysis methodologies.

- **Reproducibility of Bugs:** Fuzzer-discovered bugs are highly replicable as the necessary inputs to recreate a bug are inherent by-products of the fuzzing process.

- **Language Agnosticism:** Fuzzing at the byte-code level ensures language neutrality, accommodating various smart contract programming languages, present or forthcoming, such as ink! or potential future smart contract languages.


### Project Details


We will develop a WebAssembly (WASM) artifact fuzzer to enhance testing of Polkadot smart contracts. The fuzzer will enable developers to comprehensively fuzz test contracts compiled from languages like ink! to uncover potential issues.

Fuzzing evaluates software reliability by subjecting programs to invalid, unexpected, or random data as inputs. Our fuzzer will leverage property-based testing, an industry standard approach for smart contracts pioneered by tools like Echidna and Foundry. This allows developers to encode invariants and assumptions directly into their contracts original high level language. The fuzzer then tries to falsify the properties defined by the user to surface bugs.

**Example:**
```rust
/// A simple ERC-20 contract.
    #[ink(storage)]
    #[derive(Default)]
    pub struct Erc20 {
        /// Total token supply.
        total_supply: Balance,
        /// Mapping from owner to number of owned token.
        balances: Mapping<AccountId, Balance>,
        /// Mapping of the token amount which an account is allowed to withdraw
        /// from another account.
        allowances: Mapping<(AccountId, AccountId), Balance>,
    }

    impl Erc20 {
        /// Creates a new ERC-20 contract with the specified initial supply.
        #[ink(constructor)]
        pub fn new(total_supply: Balance) -> Self{...}
        
        #[ink(message)]
        pub fn transfer(&mut self, to: AccountId, value: Balance) -> Result<()> {
            ...
        }
        
        ...
    }
        
    // We will add a conditional compilation for a global invariant check
    #[ink(impl)]
    impl Erc20 {
        #[cfg(feature = "fuzz-testing")]
        #[ink(message, selector = 0xFFFFFFFF)]
        pub fn check_invariant(&self, owner: AccountId) -> bool {
            self.balance_of(owner) <= self.total_supply()
        }
    }
```

 From a high level, the tool will operate by:
- Instantiating a wasmi execution environment that replicates the VM configuration of the pallet-contracts.
- Mocking all the host functions needed to execute the smart contracts in the simulated environment.
- Deploying the contract and generating random input data to execute various sequences of messages.
- Identifying invariant checks encoded in contracts based on a special prefix
- Flagging any failing check and minimising inputs to simplify reproduction

This fuzzer can be integrated seemlesly into ink! testing as an end-to-end-like test. The additional generated messages encoding the invariants will be excluded when compiled in release mode. 

### Ecosystem Fit

As Polkadot Blockchain Academy alumni and active supporters of the ecosystem's growth, we firmly believe security must remain a top priority even as cutting-edge decentralized technologies continue disrupting traditional landscapes. While still early, the level of composability and flexibility introduced in Polkadot will open new attack vectors that proactive defenses can mitigate. Our fuzz testing framework equips Substrate contract developers with scalable security. We foresee fuzzing becoming a key component of multi-layered best practices standardized across the ecosystem. By open sourcing this critical security infrastructure, we hope to drive broader adoption that ultimately contributes to a safer, more trustworthy experience for the next wave of users and applications.

We care deeply about creating a secure ecosystem from ground up. Reputation damages that comes from security issues has plaged other ecosystems slowing considerably its aceptance. Making rigorous security foundations for smart contract development is in the ecritical path to the next billion users.

## Team :busts_in_silhouette:

### Team members

- Felipe Manzano
- Luca Auet

### Contact

- **Contact Name:** Felipe Manzano
- **Contact Email:** felipe@inkscope.xyz
- **Website:** inkscope.xyz


### Legal Structure

- We don't have a legal structure yet. We are a group of developers that want to build cool stuff. We will create a legal structure for future work and projects.

### Team's experience

Felipe has 15 years of experience in cybersecurity. Started with binary exploitation later shifted to web3. He has written one of the first public tools to symbolically execute EVM (and also linux binaries). 

Luca is developer with experience in low-level programming, blockchain technology, and embedded systems. He has contributed to multiple projects in the polkadot ecosystem.

### Team Code Repos

- https://github.com/inkscopexyz/octopus

Felipe's Contributions:

- https://github.com/trailofbits/manticore
- https://github.com/feliam/pyevmasm
- https://github.com/feliam/pysymemu

Luca's Contributions:
- https://github.com/0xLucca/ink-multisig-squid-shibuya
- https://github.com/protofire/ink-multisig
- https://github.com/protofire/ink-compiler-be
- https://github.com/protofire/polkadot-contract-wizard

GitHub accounts of team members.

- https://github.com/feliam Felipe Manzano
- https://github.com/0xLucca Luca Auet

### Team LinkedIn Profiles

- https://www.linkedin.com/in/fmanzano/
- https://www.linkedin.com/in/lucaauet/

## Development Status :open_book:

Our team has been actively ramping up on advanced ink! smart contract and Substrate development over recent months. This has involved extensive research into WebAssembly and deep dives into cargo-contract, ink!, and the broader Substrate stack.

We have also published two blog articles sharing our latest insights and learnings with the Polkadot community:

[Supply chain attack for ink! Smart Contracts](https://blog.inkscope.xyz/supply-chain-attack-for-ink-smart-contracts)

[WASM Artifact Analysis](https://blog.inkscope.xyz/wasm-artifact-analysis)

Building on the WASM artifact analysis post, we made some updates to the octopus tool to enable it to analyze ink! smart contract artifacts:

https://github.com/inkscopexyz/octopus

## Development Roadmap :nut_and_bolt:


### Overview

- **Total Estimated Duration:** 3 months
- **Full-Time Equivalent (FTE):** 1.5 FTE
- **Total Costs:** 30000 USD

### Milestone 1 — Basic Mocked Environment

- **Estimated duration:** 1 month
- **FTE:**  1.5
- **Costs:** 10000

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | MIT |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can test this mocked environment. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | - |
| 1. | Mocked Environment | We will create a WASM execution environment using Wasmi that can simulate running ink! smart contracts. This will include instantiating a Wasmi VM, mocking all necessary host functions, and showing end-to-end deployment and execution of a sample contract with expected results. Completing this foundational test harness to validate known contract behavior paves the way for expanded fuzz testing capabilities later. Meeting criteria is successful sample contract deployment and interactions without errors using the simulated setup. This demonstrates the simulation provides the necessary runtime environment.  |


### Milestone 2 — Fuzzer

- **Estimated Duration:** 2 months
- **FTE:**  1.5
- **Costs:** 20000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | MIT |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a **tutorial** that explains how to use the tool. The effectiveness of a correct and fast fuzzer can be diminished by poor documentation. We propose to have detailed API documentation, and a walkthrough with examples on how to apply this technique to contracts effectively.|
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will author a Medium post walking through the usage of our smart contract fuzzer. The article will guide readers through the tool's capabilities, from set up to usage to real-world examples. It will provide background on fuzz testing concepts before diving into the end-to-end process we followed to build the fuzzer. Code snippets and screenshots will illustrate integrating contracts for testing as well as interpreting fuzzer outputs. |
| 1. | Mutation Engine | We will build a mutation engine capable of programmatically generating test data to fuzz WASM smart contract parameters. |
| 2. | Fuzzer | The fuzzer will implement a core execution fuzzing loop that deploys contracts and bombard them with randomized message sequences, monitoring invariants after each step. If any assertion fails, it will dump the minimized sequence of messages along with their parameter inputs to a file. This makes reproducing and debugging the problematic state straightforward for developers. |

## Future Plans

- Host workshops and demos to onboard developers to fuzz testing concepts and usage of the tool

- Create extensive documentation with contract integration tutorials, debugging guidance, and best practices

- Develop a library of common invariants and properties to check across categories like token standards

- Build instrumentation support for coverage-guided fuzzing (like AFL) to optimize test efficiency

- Complex message sequence mutation using learning systems for intelligent test case generation

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation Website

