# W3F Open Grant Proposal

* **Project Name:** Toochain Protocol
* **Team Name:** [Toochain](https://github.com/toochainprotocol)
* **Payment Address:** 1EEaPF4osefaT5xTN52txAZK38Lwh6xw2fsKxToSaazTGSB

## Project Overview :page_facing_up: 

Toochain is creating a compiler framework to help developing new domain-specific smart contract languages. We hope this common compiler framework could serve as a common blockchain smart contract language infrastructure and make developing more effecient.

### Overview

A successfully adopted compiler framework, like the LLVM project, would make creating and maintaining smart contract languages much easier. We are creating a common compiler framework that would benefit future new smart contract language R&D. We utilize MLIR as our high-level compiler IR for blockchain-specific analysis and optimizations, and LLVM for low-level/architectural-level optimizations and code generation. By using a common compiler framework we could drastically reduce the time and cost of creating a new smart contract language by leveraging already-matured compiler framework and avoiding building a new language from scratch.

### Project Details 
Our project consists of the following parts:
•	A ported Glow language compiler frontend
•	A generic, MLIR-based blockchain language dialect powering our higher source language
o	contract-specific operations such as account and balance.
o	contract interactions
o	compiler optimizations for contracts
•	LLVM-based WASM code generation
•	Toolchain integration with substrate node.
The following chart illustrates the (complete) overview of the end goal of the project:

![end goal of toochain](https://github.com/toochainprotocol/toochain-protocol-official-website/blob/main/toochain_structure.png)

Note that it depicts a very comprehensive and sophisticated compiler framework. This project will be focusing on building its critical components, i.e. the Block diagram, the LLVM-based code generation pipeline and IDE integration.![image](https://user-images.githubusercontent.com/81880245/113491362-bab79a00-9502-11eb-96cb-6785cc117f29.png)


## Team :busts_in_silhouette:

### Team members
* Aaron Mu, team leader, Core architect of Toochain protocol, formal architect of Intel LLVM, formal engineer of AMD OpenCL , experienced smart contract engineer

* Sky Zhang
  - Over 10 years of experiences in Software Development   
  - 5 years of experience in LLVM-based compilers
  - 3 years of experience in smart contract
* Duncan Wang
  - 8 years of experiences in Software Development
  - 2 years of VM experiences on blockchain

### Contact
* **Contact Name:** Aaron
* **Contact Email:** dev@toochain.io
* **Website:** http://toochain.io

### Legal Structure 
* **Registered Address:** 3RD FLOOR, EUREKA,GENEVA BUILDING,ROAD TOWN, TORTOLA,BRITISH VIRGIN ISLANDS
* **Registered Legal Entity:** TOOCHAIN FOUNDATION LTD.

### Team's experience
We are open source verterans working in system software stack. We previously worked on graphic card drivers, Linux kernels, various LLVM-based compilers, Java and Javascript virtual machines.


### Team Code Repos
* https://github.com/TOOCHAINPROTOCOL

## Development Roadmap :nut_and_bolt: 

### Overview
* **Total Estimated Duration:** 6 months
* **Full-Time Equivalent (FTE):**  4 FTE
* **Total Costs:** 0.3 BTC

### Milestone 1 — Generic Block MLIR Dialect for DSL
* **Estimated Duration:** 3 month
* **FTE:**  3 FTE
* **Costs:** 0.15 BTC

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | The first milestone consists of compiler infrastructure construction pertaining to satisfy domain-specific language development. This includes: 1,A parser which translates source DSL (in this case, Glow language) to MLIR-based Block Dialect; 2,The Block MLIR Dialect, which is responsible for representing generic higher-level blockchain smart contracts internally inside compiler framework. This dialect aims at encapsulating and representing sophisticated blockchain-specific operations. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. | 
| 0d. | Article/Tutorial | We will write an article or tutorial that explains the work done as part of the grant. |
| 1. | Substrate pallet: Parser | We will create a Substrate pallet that will able to parse Glow lang and Rust to to MLIR-based Block Dialect. |
| 2. | Substrate front end | Parser pallet will interact in substrate-front-end-template. |


### Milestone 2 — complete LLVM-based compilation pipeline to run on Substrate

* **Estimated Duration:** 3 month
* **FTE:**  3 FTE
* **Costs:** 0.15 BTC

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how forging synthetic assets. |
| 0c. | Testing Guide | The lowering pass for Block MLIR Dialect. This compiler pass will convert Block Dialect to LLVM Dialect and invoke LLVM-based code generation. We are targeting generating correct WASM and X86 (for debugging purpose) assemblies in the first phase. The final delivery comprises of the complete generic MLIR-based compiler IR and LLVM-based compiler pipeline. This would allow programming language developers to easily create new blockchain domain-specific languages targeting Substrate environment without worrying too much about the heavy plumbing of analysis, optimization, and code generation.| 
| 0d. | Article/Tutorial | We will write an article or tutorial that explains the work done as part of the grant. |
| 1. | Substrate pallet: LLVM-based code-gen | We will create a Substrate pallet that will able to convert Block Dialect to LLVM Dialect and LLVM-based code-gen, then generating WASM assemblies  |
| 2. | Substrate front end | LLVM-based code-gen pallet will interact in substrate-front-end-template. |




### Future Plans
It takes time to mature a toolchain. Upon finishing the abovementioned milestones, we will continue to maintain and improve the project. We will also look for expanding the capabilities of the toolchain, including (bot not limited to):
•	support new target architecture (EVM Pallet) by:
o	Solidity source code generation
o	EVM Bytecode generation using LLVM
•	introduce security and safety static analysis tools into package
•	create new domain-specific languages for different types of dapps
•	improved debugging environment: WASM-based contract sandbox and IDE integration

## Additional Information :heavy_plus_sign: 


Any additional information that you think is relevant to this application that hasn't already been included.


### Team Interest
Our team members have extensive backgrounds in the system software stack. We think that to build sophisticated software we need solid foundations. However, compilers, along with execution environments (virtual machines) are the often neglected and overlooked tools in the hands of developers.
The 2020 ACM Turing Award honors Alfred Aho and Jeffrey Ullman, who are the pionneers of modern programming language and compiler construction. The award reminds us we should not ignore to invest something fundamental yet important. With such ideas bear in mind, we built our team in the hope to create better developing tools for blockchain developers. We are committed to bring industrial-level, state-of-the-art system software to dapp developers.


Possible additional information to include:

* Whitepaper: https://github.com/toochainprotocol/toochain-protocol-official-website/blob/main/Toochain_Preview.pdf
