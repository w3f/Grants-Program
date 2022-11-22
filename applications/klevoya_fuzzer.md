# Klevoya - Substrate WASM Smart Contract Fuzzer

* **Team Name:** Klevoya
* **Payment Address:** DAI 0x31840be5bf48811ffa35512735de0a53b4ba230d
* **Status:** [Terminated](https://github.com/w3f/Grants-Program/pull/420#issuecomment-1017430431)

## Project Overview :page_facing_up:

### Overview

#### Background

The novelty and complexity of smart contracts, in addition to their role in managing potentially high-value digital assets, requires a high degree of attention to be paid to their security. Yet to date it is estimated that hundreds of millions of dollars have been lost to hackers who have exploited vulnerabilities in smart contracts.

Currently blockchain developers mainly check their smart contracts using manually written tests and source inspection by internal and external audit teams. However security auditing is a highly specialised skill (and may even be more so for Substrate chains which are based on relatively new software technologies such as Rust and WebAssembly). Further, the growing complexity of smart contracts and their composable nature makes it difficult to scale manual methods.

Klevoya’s mission is to build automated solutions that help blockchain developers find and eliminate bugs and zero-day vulnerabilities in their code before hackers can get to them.

**_Our solution:_** The [Substrate Contracts pallet](https://substrate.dev/docs/en/knowledgebase/smart-contracts/contracts-pallet) will be used to execute smart contracts written by 3rd party developers, and these smart contracts may contain a variety of bugs. In this grant we will develop a WebAssembly smart contract byte-code fuzzer (i.e. dynamic execution of the smart contract in response to random inputs) for smart contracts that are to be deployed/executed in [Substrate’s Contracts pallet](https://substrate.dev/docs/en/knowledgebase/smart-contracts/contracts-pallet). We will not be fuzzing the Contracts pallet itself, only the smart contacts that are to be deployed on it.

From experience with other blockchain ecosystems we have observed that the majority (if not all) of smart contract hacks that take place are a result of logic bugs. Therefore the main objective of this smart contract fuzzer will be to identify smart contract logic bugs. An ancilliary benefit will be to identify memory corruption errors in cases where developers use non-Rust programming languages (e.g. [Ask!](https://github.com/patractlabs/ask) which is based on AssemblyScript) to write their smart contracts.

This project builds on Klevoya’s previous work developing byte-code fuzzers for other WASM based smart contract chains.

**_Benefits of fuzzers:_**

1. In comparison to static analysis, fuzzers dynamically execute the code and therefore tend to give results that have fewer false positives/negatives than comparable static analysis techniques,
2. Bugs found by a fuzzer are easily reproducible as the inputs needed to recreate a bug are a by-product of the fuzzing process,
3. Fuzzing at the byte-code level means that we are agnostic to the smart contract programming language, whether that is ink! or some other future smart contract language, and,
4. In comparison to formal verification techniques, it is relatively easier to set up a fuzzing campaign as it does not require training and expertise in formal methods.

### Project Details

#### Prior work

We have already developed a generic, coverage guided WASM binary smart contract fuzzer. The diagram below shows the general architecture of the smart contract fuzzer (the section in the red dotted line denotes the scope of work for this grant application):

![fuzzer_arch2](https://user-images.githubusercontent.com/8709186/119012917-60797800-b98e-11eb-9c50-ce7ab80c9a64.png)

The faster one can fuzz, then the more program paths that can be explored; therefore a key design feature of the fuzzer is its ability to execute many fuzz cases per seconds (we have benchmarked it executing several million fuzz cases/sec on a 16-core CPU with WASM binaries of a moderate size).

There are two main ways we achieve this high fuzz case throughput:

1. Efficient compilation of WASM bytecode to optimised machine code: WASM bytecode naturally doesn’t run on the processor. Modern compilers can generate high quality optimised code, but can take a long time to compile. However the compilation result can be cached, and reused between execution instances which leads to an ideal position of “compile once - run many”. To get optimised machine code we leverage existing tooling, namely Cranelift JIT to lift WASM bytecode to Cranelift IR, then transpile to C++ whilst adding instrumentation that allows gathering of coverage statistics. (This multi-stage process is necessary as existing WASM JIT compilers are fast to generate machine code, but the code they do generate is of poor quality - performance wise.) The transpiled C++ is then compiled to machine code with the Clang compiler.

![transpiler](https://user-images.githubusercontent.com/8709186/118856899-580e3800-b8cf-11eb-9a61-4927f9253bcc.png)

2. Parallel execution: the fuzzer runs several (typically one per CPU core) independent WASM Virtual Machine instances (the output of the compilation step detailed above) in parallel. Each VM instance has a local seed corpus, mutator and input generator (these parts are specific to a fuzz target and we will be developing a Polkadot specific one as part of this grant). The individual VMs then periodically sync their corpora to a corpus aggregator that allows the VMs to share corpus mutations.

#### Scope

In this grant we will only focus on fuzzing of WASM smart contracts.

In the future we plan to expand the fuzzer to include fuzzing of custom (i.e. developed by third-party developers) Substrate Runtimes; we plan to seek a separate grant for that activity.

**_In scope:_**
* Implementation of a Substrate Smart contract model for integration with our generic WASM bytecode fuzzer. The model will be API compatible with the Contracts pallet with the underlying logic being mocked as much as possible (in order to reduce the maintenance of the model in response to future changes to the Contracts pallet)
* Development of scheme to detect simple logic bugs
* Finetune performance of fuzzing engine

**_Out of scope:_**
* No fuzzing of the Substrate Contracts pallet
* No Substrate Runtime fuzzing
* No fuzzing of non-WASM smart contracts (e.g. smart contracts that target the Substrate EVM Pallet)

### Ecosystem Fit

Making DApps built on Polkadot/Kusama robust to hacking is critical to ensuring the health of, and confidence in, the Polkadot/Kusama ecosystem. To date we have not seen any tools that have been specifically developed to assess the security of Substrate smart contracts.

The results of this project will be used by smart contract developers to verify that their smart contracts are free of bugs and vulnerabilities prior to public deployment.

**_Similar work in this or other ecosystems_**

* A previous Web3 grant was awarded to a team to perform [WASM Runtime Fuzzing](https://github.com/w3f/Open-Grants-Program/pull/9). However in that grant they specifically sought to fuzz the wasmi/wasmtime to identify errors in those components, whereas in this grant we seek to fuzz smart contracts not the runtime.
* The greatest amount of similar work has been done in the Ethereum ecosystem where several blockchain security related organisations have developed fuzzers for Ethereum smart contracts. For example the [Echidna](https://github.com/crytic/echidna) fuzzer (by [TrailOfBits](https://www.trailofbits.com/)) and [MythX](https://mythx.io/) (by [Consensys](https://consensys.net/)) which is a security suite that includes a smart contract fuzzer. Those works are not applicable here as they fuzz smart contracts that run on the Ethereum Virtual Machine (EVM) whereas we specifically target fuzzing of WASM smart contracts running on Substrate's Contract pallet.

In conclusion: we are not aware of any teams in the Polkadot/Kusama ecosystem that are currently pursuing a similar project.

## Team :busts_in_silhouette:

### Team members

* Team Lead: Moti Tabulo
* Fuzzer Developer: David Morgan
* Blockchain Engineer: Christoph Michel

### Contact

* **Contact Name:** Moti Tabulo
* **Contact Email:** moti.tabulo@klevoya.com
* **Website:** <https://klevoya.com>

### Legal Structure

* **Registered Address:** ideaspace City, 3 Laundress Lane, Cambridge CB2 1SD, UK
* **Registered Legal Entity:** Barracuda Systems Ltd

### Team's experience

The team is composed of members with many years of experience in general + blockchain software development, cybersecurity and blockchain security.

* Moti Tabulo, PhD: Moti is the architect of Inspect, Klevoya's static vulnerability analysis engine. He has over 20 years' experience in technology R&D. Klevoya is his third startup after two previous startups in embedded software and robotics.
* David Morgan: David is a performance and security conscious engineer with a keen eye for identifying vulnerabilities, and reverse engineering binaries. 4+ years experience finding hard to reach bugs. 10+ years finding, and exploiting vulnerabilities in gaming consoles.
* Christoph Michel: Christoph has over a decade of experience in full-stack development. For the past several years he has been working on smart contract development for blockchain platforms like EOS and Ethereum. He has performed security audits on over a dozen smart contracts and regularly participates in CTF tournaments.

### Team Code Repos

* Team Repo: <https://github.com/klevoya/>
* Inspect static analyser: <https://github.com/klevoya/inspect-analysis2>
* Maintainer of EOSIO Smart Contract Weakness Registry: <https://github.com/klevoya/eosio-wcr-registry>

### Team LinkedIn Profiles

* <https://www.linkedin.com/in/moti-tabulo/>
* <https://www.linkedin.com/in/daveemorgan/>
* <https://www.linkedin.com/in/christoph-michel-dev/>

## Development Status :open_book:

As described in the project prior work section above, we are currently developing a generic WebAssembly bytecode fuzzer. The code is currently closed source (let us know in case you would like to arrange a private session to review it).

## Development Roadmap :nut_and_bolt:

### Overview

* **Total Estimated Duration:** 3 months
* **Full-Time Equivalent (FTE):**  2 FTE, the listed members would contribute to different deliverables based on their skill-set.
* **Total Costs:** 29,000 USD

### Milestone 1: Implementation of Substrate smart contract model

* **Estimated Duration:** 2 months
* **FTE:**  2
* **Costs:** 19,000 USD
* **Goal:** Implement model of Substrate Smart Contract pallet within fuzzer.

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | GPLv3 |
| 0b. | Documentation | We will provide both inline documentation of the code and a tutorial that explains how a user can use the fuzzer, and test their own smart contracts |
| 0c. | Testing Guide | The code produced under this grant will have proper unit-test coverage to ensure functionality and robustness. In the guide we will describe how to run these tests. |
| 0d. | Article/Workshop | We will publish an article describing the work that was done during the grant and conduct a workshop describing how to fuzz a smart contract.
| 1. | Fuzzer VM: Model Substrate WASM Smart contract pallet | Implement model of blockchain logic: Substrate smart contract pallet calls, intrinsics, memory model etc within the fuzzer |  
| 2. | Fuzzer: Input generation | Generate smart contract calls with appropriate inputs |  
| 3. | Fuzzer: Seed mutation | Mutate seed corpus to allow efficient exploration of the smart contract with the aim of increasing code coverage |  

### Milestone 2: Substrate logic bugs

* **Estimated Duration:** 1.5 months
* **FTE:**  1.5
* **Costs:** 10,000 USD
* **Goal:** Implement logic bug checks within the fuzzer, tune fuzzer performance. Integrate and test fuzzer with several Substrate projects.

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | GPLv3  |
| 0b. | Documentation | We will provide both inline documentation of the code and a tutorial that explains how a user can use the fuzzer, and test their own smart contracts |
| 0c. | Testing Guide | The code produced under this grant will have proper unit-test coverage to ensure functionality and robustness. In the guide we will describe how to run these tests. |
| 0d. | Article | We will publish an article describing the work that was done during this phase of the grant and describing how to find common smart contract logic bugs
| 1. | Prototype generic logic bugs | Prototype and document logic bugs that are generic across Substrate WASM smart contracts |  
| 2. | Fuzzer: implement logic bug | Implement logic bug checks within fuzzer |  
| 3. | Testing against ecosystem smart contracts | Conduct testing of the developed fuzzer against several in-development (and live where possible) Substrate WASM smart contracts from the Polkadot ecosystem to verify the performance of the fuzzer and its efficacy in identifying bugs. We will summarise the results |  

## Future Plans

Our vision is to provide a fuzzer that can identify security issues across the range of Substrate pallet functionality.

Future development:

* Extend the fuzzer to allow fuzzing of Substrate runtimes.
* Implement fuzzer for EVM pallets
* Integrate and fuzz Substrate runtimes that include either WASM or EVM smart contract pallets
* Investigate feasibility of adding compiler engine as a backend to [sp_sandbox](https://crates.io/crates/sp-sandbox) to reduce maintenance overhead of fuzzer model

## Additional Information :heavy_plus_sign:

* Work you have already done:
  * Implemented generic WASM fuzzer and version targeting EOSIO smart contracts
* Whether there are any other teams who have already contributed (financially) to the project.
  * No
* Previous grants you may have applied for.
  * None in the Polkadot/Web3 ecosystem. We have previously received a grant from EOS.VC for the development of the Inspect static analyser
