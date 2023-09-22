- **Team Name:** Zondax AG
- **Payment Address:** (DAI ERC 20)  0xf50a09731dc32a64431920e10e1e58dce28e6b11 
- **[Level]**: 3

## Project Overview :page_facing_up:

This grant application falls under this RFP https://github.com/w3f/Grants-Program/blob/master/docs/rfps/Open/alternative_polkadot_host_implementations.md and it is meant as a previous research work analysis before the actual rework of the host implementation. 

### Overview

A Polkadot host provides the environment in which the runtime executes. For this reason, hosts typically evolve slowly and are based on the Polkadot specification. This specification defines the boundaries and interactions between the host implementation and the network runtime.

The polkadot network (and other related chains) have been successfully running for a few years already. There is a collective evolution and experience beyond the specifications themselves. Moreover, there are already a few other alternative implementations that have not reached production level quality yet. We consider that starting from scratch will require a significant effort and high risk objective. 

For this reason, we consider that building an alternative implementation based on a hybrid and progressive approach can minimize risk and ensure a successful roadmap. By hybrid and progressive, we mean that we will start by taking the existing Parity host based on Rust and progressively replacing substantial areas using a combination of new C++ or Rust implementations.

Given the risk and complexity of this project, we would like to propose an initial pre-engineering phase. We will focus on analysing the current situation and preparing a clear and detailed execution plan that takes into consideration possible risks and blockers.


### Project Details

This project will *not* provide a working alternative node. Instead, it will concentrate on analysing and providing a clear work plan aligned with our proposal of a hybrid approach.

As a proof of concept, we will also select a specific component (such as Keystore) and will show how our development process and be effectively used to progressively evolve the existing Parity node. 

Last but not least, a member our our research team will analyse existing specifications looking for possible gaps and risky areas. The objective is to determine possible mitigations and alternative plans beforehand.


#### Technology and Languages

To minimize extensive testing and validation, we will concentrate on Linux based systems only.  Our main technology focus will be to promote modularity and replace different parts of the reference node by rewriting them in C/C++. 

At the moment of this writing, we intend to concentrate on C++ 17/20, however, we don’t disregard the possibility of using Rust in some cases. In particular, to facilitate adequate FFI between official Parity code and rewritten C/C++ or Rust code by Zondax.

At the end of this project, we will summarize our experience and make a recommendation for future work.

### Ecosystem Fit

Zondax is a growing and distributed team with experience and projects for more than 50 blockchains. Zondax has been contributing to the Substrate ecosystem since 2018-2019. The team has received and completed a large number of W3F grants and currently maintains most Ledger apps for the ecosystem. 


## Team :busts_in_silhouette:

### Team members

- 1 x Researcher 
- 2 x Rust / C++ Engineers
- 1 x Project Manager

### Contact

- **Contact Name:** Juan Leni and Ainhoa Aldave
- **Contact Email:** juan.leni@zondax.ch / ainhoa.aldave@zondax.ch
- **Website:**  zondax.ch

### Legal Structure

Legal structure
Zondax AG
Dammstrasse 16
Zug 6300
Switzerland
UID CHE-491.796.576


### Team's experience

Over the last few years, Zondax has been involved in a large number of projects for most of the key players in the blockchain industry. Our team includes experts in most blockchain aspects, from cryptography to data and protocol engineering. 

### Team Code Repos

Most of our contributions to the blockchain ecosystem can be found in our GitHub organization: https://github.com/zondax


## Development Status :open_book:

Not initiated. 

## Development Roadmap :nut_and_bolt:

## Technical Scope:

The scope of this proposal will consist of:

- Review of specifications and conformance tests
The Polkadot specification and the corresponding conformance tests will be used as a reference of expected valid behavior:
https://github.com/w3f/polkadot-spec
https://github.com/w3f/polkadot-tests

- Review of Polkadot Host (Parity)
  We will pay particular attention to the following areas:

    - Code churn. Determine stable and more active areas
    - Traits and extensibility points
    - Internal and external interfaces
    - Quality of protocol specification and how they are tested

- Analysis, initial rework (as a proof of concept) and reimplementation of a module:
  Based on the findings from the previous stage, we will select and replace a module (such as Keystore and remote signing APIs) while keeping everything else in the node functional.
  
  - Select component to be replace
  - Write integration tests at the boundary level
  - Replace the module with an external implementation
  - Define how to integrate and follow upstream changes
  - Define and inform future practices based on this proof of concept.
        
### Overview

- **Total estimated workload:** 4 weeks
- **Delivery time:**: 6 to 8 weeks
- **Full-Time Equivalent (FTE):**  2.5 FTE
- **Total Costs:** 58'800 DAI

### Milestone 1 - Preengineering of hybrid node and research analysis

- **Estimated workload:** 4 working weeks
- **Delivery time:**: 6 to 8 weeks
- **FTE:**  2,5
- **Costs:** 58'800 DAI

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 / GPLv3 / MIT |
| **0b.** | Documentation | We will provide a inline documentation of the code and   inline documentation of the code and a basic tutorial |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. We plan to write integration tests at the boundary level |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an article explaining the research analysis done |
| 1. | Research Report | We will provide a detailed report covering the review of specifications and conformance tests, the review of Polkadot Host (Parity)and the findings from the re-work of the module and primitives including recommendation practices based on this proof of concept.|
| 2. | PoC code| We will provide the code from the re-worked primitives.We plan to promote modularity and replace parts of the reference node by rewriting them in C/C++.  <br/> Note: This will not be production-ready code. It is just meant to be used as a proof of concept and to inform future development plans. |


## Future Plans

After this first research analysis we plan to apply for additional grant to cover a long-term commitment and full rework implementation of this alternative hybrid Polakdot host. 


## Additional Information :heavy_plus_sign:

Zondax has been contributing to the Polkadot ecosystem for several years, and has succesfully completed several grants. 

