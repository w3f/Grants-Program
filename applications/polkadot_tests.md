# Polkadot Conformance Tests PoC 

- **Team Name:** Zondax AG
- **Payment Address:** (DAI ERC 20)  0xf50a09731dc32a64431920e10e1e58dce28e6b11 
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2


## Project Overview :page_facing_up:

This grant application falls under this [RFP](https://github.com/w3f/Grants-Program/blob/master/docs/RFPs/polkadot-protocol_conformance_tests.md) and it aims
to develop a comprehensive test suite dedicated to assessing the compliance of Host implementations against the official Polkadot Protocol Specification.

### Overview

The reliability and security of the Polkadot network are fundamentally contingent upon the flawless implementation of Hosts/Nodes. At present, 
Substrate and Smoldot (implemented in Rust) 
are actively used in production, while Gossamer (in Go) and Kagome (in C++) are undergoing advanced stages of development.
Our primary objective is to develop a comprehensive test suite dedicated to assessing the compliance of Host implementations 
against the official Polkadot Protocol Specification.

### Project Details

Our objective will consist of developing a proof of concept for a test suite that can be run across various host implementations and executors.

In this initial phase, we will concentrate on a few different points:

- [Host API: cryptography primitives](https://spec.polkadot.network/chap-host-api#sect-crypto-api)
- [Trie proof verification](https://spec.polkadot.network/chap-host-api#sect-trie-api)
- [Scale encoding and decoding](https://spec.polkadot.network/id-cryptography-encoding#sect-scale-codec)

The objective is to ensure conformance with the existing specifications and highlight possible deviations. 
Moreover, we will organize the PoC in such a way that conformance reports can be generated after each run.


#### Technology and Languages

We aim to develop this in Python or Typescript. We will investigate but at the moment, we see a much wider ecosystem in Python.

Althoug previous work on this area has been developed in Julia, Python holds several advantages over Julia due to its extensive ecosystem, wide community support, and versatility.

Python is also known for its cross-platform compatibility, facilitating the development of cross-platform applications. 
Its ease of integration with other languages like C/C++ and Java enables the creation of applications with mixed-language components.

There is some previous work that has been done [here](https://github.com/w3f/polkadot-tests) in Julia we plan to re-use some part of this work, rewrite it, updated it and confront it 
against current specification since his code has not been updated since February 2023.


### Ecosystem Fit

Zondax is a growing and distributed team with experience and projects for more than 50 blockchains. 
Zondax has been contributing to the Substrate ecosystem since 2018-2019. The team has received and completed a large number of W3F grants
and currently maintains most Ledger apps for the ecosystem. 
We have recently completed a [grant](https://github.com/w3f/Grants-Program/blob/master/applications/hybrid_node_research.md) on the research of an alternative host implementation. 

## Team :busts_in_silhouette:

### Team members

- 2 x Engineers 
- 1 x Project Manager

### Contact

- **Contact Name:** Juan Leni and Ainhoa Aldave
- **Contact Email:** juan.leni@zondax.ch / ainhoa.aldave@zondax.ch
- **Website:**  zondax.ch

### Legal Structure


Zondax AG

Dammstrasse 16

Zug 6300, Switzerland

UID CHE-491.796.576

### Team's experience

Over the last few years, Zondax has been involved in a large number of projects for most of the key players in the blockchain industry. 
Our team includes experts in most blockchain aspects, from cryptography to data and protocol engineering. 

### Team Code Repos

Most of our contributions to the blockchain ecosystem can be found in our GitHub organization [zondax](https://github.com/zondax)

## Development Status :open_book:

Not initiated. 

## Development Roadmap :nut_and_bolt:

## Technical Scope:

The scope of our work will consist on:

- Review of specifications and conformance tests: The Polkadot specification and the corresponding conformance tests will be used as a reference of expected valid behavior:
     - [Polkadot Spec](https://github.com/w3f/polkadot-spec)
     - [Polkadot tests](https://github.com/w3f/polkadot-tests)

- Analysis of previous work: previous work will be analysed to determine improvements, advantages and disadvantages. In this respect, we can already pinpoint the following repositories:

    - [Polkadot Tests](https://github.com/w3f/polkadot-tests)
    - [PVF Conformance Testing Suite](https://github.com/LimeChain/polkadot-conformance)
    - [Zombienet](https://github.com/paritytech/zombienet)
    - [SCALE Codec Encoding](https://github.com/w3f/polkadot-tests/tree/main/fixtures/scale-codec)
    - [State Trie Hashing](https://github.com/w3f/polkadot-tests/tree/main/fixtures/state-trie)

- Test the test-suite against all implementations
    - [Go: gossamer by ChainSafe](https://github.com/ChainSafe/gossamer)
    - [C++: kagome by Soramitsu](https://github.com/soramitsu/kagome) 
    - [Rust: polkadot by Parity](https://github.com/paritytech/polkadot )
    - [Rust: smoldot by Parity](https://github.com/smol-dot/smoldot) 
  
### Overview

- **Total estimated workload:** 4 weeks
- **Delivery time:**: 6 to 8 weeks
- **Full-Time Equivalent (FTE):**  2.5 FTE
- **Total Costs:** 28'800 DAI

### Milestone 1 - PoC Implementation

- **Estimated workload:** 4 working weeks
- **Delivery time:**: 6 to 8 weeks
- **FTE:**  2,5
- **Costs:** 28'800 DAI

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 / GPLv3 / MIT |
| **0b.** | Documentation | We will provide a inline documentation of the code and   inline documentation of the code and a basic tutorial |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an article explaining the research, design decisions and proof of concept |
| 1. | PoC code| General structure |
| 2a. | Code| PoC Tests: Host API: cryptography primitives  |
| 2b. | Code| PoC Tests: Trie proof verification  |
| 2c. | Code| PoC Tests: Scale encoding and decoding |

*Testing in point 2, will not be comprehensive. We will concentrate on different cases to proof that the architecture and design is adequate.

## Future Plans

After we have completed this PoC, we aim to prepare a proposal for a long term test suite. 

## Additional Information :heavy_plus_sign:

Zondax has been contributing to the Polkadot ecosystem for several years, and has succesfully completed several grants. 
We have recently completed a grant on the research of an alternative host implementation.  https://github.com/w3f/Grants-Program/pull/1324 
