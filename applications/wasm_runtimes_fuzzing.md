# Open Grant Proposal

> This document is referenced in the terms and conditions and therefore needs to contain all the required information. Don't remove any of the mandatory parts presented in bold letters or as headlines! See the [Open Grants Program Process](https://github.com/w3f/Open-Grants-Program/blob/master/README_2.md) on how to submit a proposal.

* **Project:** WebAssembly Runtimes Fuzzing (WARF)
* **Proposer:** pventuzelo
* **Payment Address:** 3An3qG2j5RJA3inJMVSzZ8uLp1T55JuL1M

*The above combination of your GitHub account and payment address will be your unique identifier during the program. Please keep them safe.*

## Project Description :page_facing_up: 

This project aim to improve security and resilience of WebAssembly runtimes and parsers using fuzzing. This project will help developers to audit automatically wasm runtime engines and identify security issues/bugs. Multiple fuzzing techniques will be used to achieve this goal but mainly grammar-based fuzzing and differential fuzzing. Complete documentation and user-friendly APIs will be provide to help developers to integrate new WebAssembly runtimes quickly and without any fuzzing skills.

## Team :busts_in_silhouette:

* **Members:** Patrick Ventuzelo
* **LinkedIn Profiles:** https://www.linkedin.com/in/patrick-ventuzelo/
* **Code Repos:** https://github.com/pventuzelo/wasm_runtimes_fuzzing
* **Website:**	https://webassembly-security.com/
* **Legal Structure:** Patrick Ventuzelo, 113 grande rue, 91290 Arpajon, FRANCE
* **Team's Experience:**

Patrick is an Independent Security Researcher specialized in vulnerability research, fuzzing, reverse engineering and program analysis. He is teacher of two training respectively about [WebAssembly Security](https://webassembly-security.com/wasm-security-training/) and [Rust Security](https://webassembly-security.com/rust-security-training/).

Patrick found hundred of bugs in opensource projects mainly inside WebAssembly VMs and parsers. He is the author of [Octopus](https://github.com/pventuzelo/octopus), one of the first open-source security analysis tool supporting WebAssembly and multiple Blockchain smart contracts bytecode to help researchers perform closed-source analysis.

## Development Roadmap :nut_and_bolt: 

* **Total Estimated Duration:** 3 months
* **Total Costs:** 4.5 BTC

### Milestone 1 - Discovery & project architecture

* **Estimated Duration:** 2 weeks
* **Costs:** 0.75 BTC


| Number | Deliverable | Specification | 
| ------------- | ------------- | ------------- |
| 1. | Integration Plan | List of major WebAssembly runtimes used in Polkadot ecosystem and APIs to interact with them. |  
| 2.  | Project development | Development of the project base (architecture and interface) |  
| 3.  | APIs | Creation of integration APIs + documentation |
| 4.  | Delivery report | Tutorial for project installation and testings |

### Milestone 2 - WebAssembly VM/parsers integration

* **Estimated Duration:** 4 weeks
* **Costs:** 1.5 BTC


| Number | Deliverable | Specification | 
| ------------- | ------------- | ------------- | 
| 1.  | Runtimes Integration | Integration with previously listed runtimes engines. |  
| 2.  | CLI tool | Command line tool allowing execution of wasm modules through all runtimes. |  
| 3.  | Project development | Improvement of the project (threading, runtimes perf monitoring) |  
| 4.  | Project development | Development of fuzzing harness per runtimes. |
| 5.  | Runtimes dockers | Dockers to install runtimes engines easily |
| 6.  | Delivery reports | Tutorial for runtimes installation, compilation, how to run tools and unittests |
| 7.  | Unittest | unit test to verify all runtimes engines work as expected |  

### Milestone 3 - Fuzzing & improvement

* **Estimated Duration:** 4 weeks
* **Costs:** 1.5 BTC

| Number | Deliverable | Specification | 
| ------------- | ------------- | ------------- | 
| 1.  | Project development | Evaluation fuzzing hardness + improvement |
| 2.  | Fuzzing Implementation | Differential fuzzing implementation for wasm runtimes and parsers. |
| 3.  | Fuzzing Implementation | Grammar fuzzing implementation specific to WebAssembly module |
| 4.  | Project development | Improvement of the fuzzing (input file sharing, mutation algorithm, speed). |
| 5.  | Delivery reports | Tutorial for running fuzzers and use advanced CLI options |
| 6.  | Unittest | unit test to verify fuzzing is deterministic and reproductible |  

### Milestone 4 - Performance & Documentation

* **Estimated Duration:** 2 weeks
* **Costs:** 0.75 BTC

| Number | Deliverable | Specification | 
| ------------- | ------------- | ------------- | 
| 1.  | Tutorial | Runtime integration tutorial |
| 2.  | Tutorial | Utilisation tutorial |
| 3.  | Documentation | Internal architecture |
| 4.  | Documentation | Details fuzzing engines & techniques |
| 5.  | Performance testing | Improve fuzzing performances and benchmarks |

## Additional Information :heavy_plus_sign: 

Some additional information :
* I'm planning to support a maximum of wasm runtimes and parsers
* The project will interact with runtimes implemented in different languages but mainly Rust, C, C++ and Go (potentially Python and JS)
* Huge part of the project will be focused on improving fuzzing performance and create a friendly way to integrate new wasm runtime with the project.
* Based on actual Polkadot hosts (Substrate, Kagome, Gossamer), I will start integrating parity-wasm, wasmi, wasmtime, wasmer and binaryen.
