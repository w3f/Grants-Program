# Polkadot Protocol Conformance Tests Research Proposal

- **Team Name:** [LimeChain](https://github.com/LimeChain)
- **Payment Address:** 14dut6zGgdVmKijePZzrQAy2gZ6FmMDmzzp7VqjzPV9E4ujR (USDT on Polkadot AssetHub)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 3

## Project Overview :page_facing_up:

This research proposal is in response to the currently open [Polkadot Protocol Conformance Tests RFP](https://github.com/w3f/Grants-Program/blob/master/docs/RFPs/Open/polkadot-protocol_conformance_tests.md).

### Overview

Polkadot has made substantial progress over the last few years in terms of client diversification. Currently, there are 4 existing host implementations with varying features and protocol support: [Polkadot](https://github.com/paritytech/polkadot) by Parity, [Kagome](https://github.com/soramitsu/kagome) by Soramitsu, [Gossamer](https://github.com/ChainSafe/gossamer/) by ChainSafe, and [Fruzhin](https://github.com/limechain/fruzhin) by LimeChain. Having a healthy client diversity is beneficial to every blockchain protocol as it becomes more decentralised and less bug-prone. Neglecting these aspects has resulted in halting block production for some blockchain protocols in the past.

The nature of software is such that it's never perfect, and bugs happen. Therefore, multiple host implementations come with a higher probability of implementation-specific issues. It's important for a blockchain protocol that takes great pride in its decentralisation, such as Polkadot, to have a protocol compliance testing suite that verifies the behaviour of each implementation. The more comprehensive the testing suite is, the stronger security guarantees the protocol can provide.

The goal of this project is to prepare for the redesign of the existing [conformance tests repository](https://github.com/w3f/polkadot-tests). Our team envisions the redesigned testing suite to be easily extensible and flexible, welcoming contributors to enhance it with their domain-specific knowledge. Concerns have been raised regarding the "adapter" approach that the existing testing suite has taken and that the chosen language ([Julia](https://julialang.org/)) is out of sync with the one for Polkadot ([Rust](https://www.rust-lang.org/)). This proposal aims to lay the groundwork for resolving these issues by delving deep into the biggest obstacle that stands in the way: finding the correct level of abstraction and tooling that will be the cornerstone for every kind of test scenario.

### Project Details

### A host-agnostic approach

A conformance testing suite should be host-agnostic, meaning that, for the most part, the tests shouldn't be concerned with the specific Host implementation against which they are being executed. The Host exposes several interfaces that enable conformance testing; however, it’s a complex piece of engineering, and there will always be protocols and functionalities without an exposed interface. Moreover, there are integration tests that can't be conducted using an API. These scenarios are as important as the previous ones because the Host can't function properly if the modules don't work seamlessly with one another.

### Host API

The Host API consists of a set of functions that the Host exposes to the Runtime. These functions are used to access external resources for various purposes, including storage access, manipulation, memory allocation, and more. If a method within the API contains a bug, it has the potential to push the Host into an incorrect state transition. Such a scenario could lead to undefined consequences, particularly if a significant number of nodes experience the same issue.

### SCALE

Substrate employs a lightweight and efficient encoding and decoding mechanism to optimise the transmission and reception of data across the network. This protocol, known as the SCALE codec, plays a vital role in serialising and deserialising data. It serves as a critical component for data transfer across the peer network and facilitates communication between the Runtime and the Host. Consequently, the presence of comprehensive tests for SCALE encoding and decoding holds immense significance in ensuring the proper functionality of the Host.

### State Trie

The state trie is another crucial part of the Host. A radix-16 state is the data structure that Substrate uses to store the state of the blockchain. Without thoroughly tested state trie functionalities, the Host may transition to an incorrect state and get slashed if it's a block producer.

### BABE & GRANDPA

[BABE](https://spec.polkadot.network/sect-block-production) & [GRANDPA](https://github.com/paritytech/finality-grandpa) are the bread and butter of the consensus-reaching module for Polkadot. However, finding the right tools and approach to test the block production and finalisation protocols independently of the Host’s environment is a challenge that is yet to be overcome by any team.

### Zombienet

[Zombienet](https://github.com/paritytech/zombienet) aims to be a testing framework for Substrate-based blockchains, providing a CLI tool that allows users to spawn and test ephemeral networks. The assertions used in the tests can include on-chain storage, metrics, logs, and custom JavaScript scripts that interact with the chain

Our team has successfully utilised Zombienet to run PVF conformance tests as part of another W3F grant. This is the reason why we believe that Zombienet has the potential to be the go-to framework for running conformance tests on the Hosts. The research is going to focus on Zombienet, as well as on the new [Zombienet SDK](https://github.com/paritytech/zombienet-sdk).

### Research Scope

The main focus of the research will be on investigating each of the aforementioned protocols and functionalities and how they can be tested in a host-agnostic manner. Based on our preliminary research and the work we've conducted on the PVF conformance testing suite, our team believes that Zombienet can serve as the foundation for the testing suite. The team will examine whether Hosts and Zombienet have the required feature set to support such testing scenarios. If this is not achievable, the team will document the missing components so that they can be identified and potentially contributed in a future proposal. 

Our team acknowledges that, for certain Hosts, having the Host API, SCALE, and State Trie as standalone artifacts could be beneficial for Host developers during the early phases of their implementation. However, this proposal primarily focuses on adopting a host-agnostic approach for Hosts that are already functioning with the already existing tests. Depending on the research outcomes, our team may subsequently introduce a new proposal involving the redesign of the conformance repository. In this redesign, the tests would be separated into a standalone artifact and transformed into Zombienet tests.

### Ecosystem Fit

By delivering a research document containing insightful information about the necessary steps to commence the redesign of the Polkadot Conformance Testing repository, we aim for it to serve as a catalyst to initiate the development process

Initially, the Polkadot Conformance Testing repository will be situated in close proximity to the realm of Polkadot Hosts. Its primary target audience will be Host developers seeking comprehensive testing for their Hosts. Other individuals who might find this project valuable include experts from the Polkadot specification team, who can contribute their expertise in specific scenarios.

## Team 👥

### Team members

- Viktor Todorov
- Maksim Dimitrov
- Kristiyan Veselinov

### Contact

- **Contact Name:** Kristiyan Veselinov
- **Contact Email:** kris@limechain.tech
- **Website:**  [https://limechain.tech](https://limechain.tech/)

### Legal Structure

- **Registered Address:** Bulgaria, Dragan Tsankov 23A, 1113, Sofia, Bulgaria
- **Registered Legal Entity:** LimeLabs Ltd.

### Team's experience

At LimeChain, we possess considerable expertise in developing various tools, including [Gosemble, a framework for building Substrate compatible Runtimes in Go](https://github.com/LimeChain/gosemble), [Fruzhin, a Host implementation in Java](https://github.com/limechain/fruzhin), [a framework for runtimes in AssemblyScript](https://github.com/LimeChain/subsembly), a framework for runtimes in AssemblyScript. On top of that, we’re working on a [Parachain Validation Conformance Testing suite](https://polkadot.polkassembly.io/motion/389), have substantial experience in Rust/WebAssembly developer tooling from [Matchstick](https://github.com/limeChain/matchstick/) and actively contribute to infrastructure projects in Cosmos and Hedera Hashgraph.

### Team Code Repos

- [https://github.com/LimeChain](https://github.com/LimeChain)

Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine.

- [https://github.com/vikinatora](https://github.com/vikinatora)

### Team LinkedIn Profiles (if available)

- [https://www.linkedin.com/in/viktor-todorov-8a7434122/](https://www.linkedin.com/in/viktor-todorov-8a7434122/)
- [https://www.linkedin.com/in/chris-veselinov/](https://www.linkedin.com/in/chris-veselinov/)

## Development Status :open_book:

No actual development has been made for this RFP. However, the team has spent a significant amount of time delving into the Host’s specification as part of the Java Host implementation we're currently working on. Additionally, our work on the PVF conformance testing suite has enhanced our understanding of how to address challenging-to-test sections of the code.

## Development Roadmap :nut_and_bolt:

The primary framework under consideration for this research will be Zombienet, as it already provides the groundwork for these types of tests. Each of the steps outlined below will be dedicated to investigating the creation of Zombienet tests for the specified functionalities. The team will also document in the research report the development steps required to enable testing of the specified functionality using Zombienet.

Outlined below are the testing scenarios for each Host module that will be the focus of the research:

1. Host API
    1. Trie
2. SCALE
    1. SCALE encoding
    2. SCALE decoding
3. State Trie
    1. Trie encoding
    2. Trie decoding
4. BABE
    1. Block import
    2. Block validation
5. GRANDPA
    1. Block import
    2. Block validation

### Overview

- **Total Estimated Duration:** 8 working weeks
- **Full-Time Equivalent (FTE):** 2
- **Total Costs:** $49280

### Milestone 1 — Polkadot Conformance Testing Suite Research

- **Estimated duration:** 8 working weeks
- **FTE:** 2
- **Costs:**  $49280

| Number | Deliverable | Specification |
| --- | --- | --- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide inline documentation, as well as README file with how the suite can be executed. Additional information will be provided on how to contribute. |
| 0c. | Testing and Testing Guide | Documentation will be provided that showcases how the testing suite can be executed for different scenarios and hosts. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an article that explains what was done/achieved as part of the grant. |
| 1. | Host API Research | Research the feasibility of using Zombienet as the framework for executing Host API tests. |
| 2.  | SCALE Research | Research the feasibility of using Zombienet for conducting SCALE encoding and decoding tests. |
| 3.  | State Trie Research | Research the feasibility of using Zombienet for conducting State Trie encoding, decoding and generation tests. |
| 4. | BABE Research | Research the feasibility of using Zombienet for conducting BABE tests. |
| 5. | GRANDPA Research | Research the feasibility of using Zombienet as the framework for conducting GRANDPA tests. |
| 6. | Research Findings | A research document will be delivered documenting the team’s findings, as well as outline a high-level path forward for the conformance testing suite. |

## Future Plans

Based on the research findings, our team could formulate a proposal for implementing these tests and restructuring the conformance testing suite with the new approach, and/or contributing the necessary features that would enable Zombienet to be utilised for these purposes.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** 

At LimeChain, we have been contributors to the Polkadot ecosystem for the last 3+ years as we believe in a multi-chain future, based on interoperability and decentralisation. Principles that are built into the core of the Polkadot network.  We possess considerable expertise in developing various tools, including [Gosemble, a framework for building Substrate compatible Runtimes in Go](https://github.com/LimeChain/gosemble), [a framework for runtimes in AssemblyScript](https://github.com/LimeChain/subsembly),, and [Parachain Validation Conformance Testing](https://polkadot.polkassembly.io/motion/389). Additionally, we have substantial experience in Rust/WebAssembly developer tooling from [Matchstick](https://github.com/limeChain/matchstick/) and have actively contributed to infrastructure projects in Cosmos, Near, Filecoin, Ledger and Hedera Hashgraph.
