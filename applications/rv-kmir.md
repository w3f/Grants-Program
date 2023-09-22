# KMIR: the K semantics of MIR

- **Team Name:** Runtime Verification, Inc.
- **Payment Address:** 0xA3250Ab6292F2aAe7DE2DE5dC46Ba0D24dcf699E (USDC or DAI)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 3

## Project Overview :page_facing_up:

### Overview

*Overview:*

There are many approaches towards (property) testing of Rust programs, such as [proptest](https://docs.rs/proptest/latest/proptest/) or [quickcheck](https://docs.rs/quickcheck/latest/quickcheck/) or [arbitrary](https://docs.rs/arbitrary/latest/arbitrary/).
They are quite effective, and most likely sound, but certainly not complete due to the very notion of a test as opposed to a formal proof.
We would like to build out formal verification capabilities for Rust developers.

The [K Framework](https://kframework.org/) is a language-agnostic semantic framework, quite suitable for the definition of programming language semantics, from which many compiler and verification related tools can be automatically generated.

We seek to develop **KMIR: the [K](http://github.com/kframework) semantics of the [MIR language](https://rustc-dev-guide.rust-lang.org/mir/index.html)**, which is an [internal representation for the Rust compiler](https://blog.rust-lang.org/2016/04/19/MIR.html).
This will enable more scalable verification for the Rust programming language.
A robust commitment to security and assurance does not end with a completed security audit (which we have experience doing for various Rust-based projects).
Rather, it requires that all available tools and techniques are used, including rigorous proof-based formal verification (among others).
Supporting the development of the KMIR semantics will enable verification at scale for smart contract developers targeting the Polkadot (and related) ecosystem.

*Background:*

Runtime Verification [has attempted verification of Rust programs](https://github.com/runtimeverification/polkadot-verification) in the past.
Our past approach relied on compiling to WebAssembly and then using our KWasm semantics for verification.
This suffered from two problems:

- The generated WebAssembly was large, making verification less tractable, and
- We could not handle Rust code compiled to a non-WebAssembly target.

In the WebAssembly setting, even simple Rust programs (just a few hundred lines) were compiled to WebAssembly programs that were ~100 kLOC.
Much of the generated code is boilerplate inserted by the compiler, which is uninteresting when verifying program correctness, but slows the verification process down significantly.

KMIR solves both problems.
The Rust compiler goes through MIR before compiling to any target language, and MIR is much closer to Rust than (the generated) WebAssembly.
Because of this, verification of MIR should be more tractable as we’ll be dealing with code-sizes that are closer to the original Rust source code size.
This allows the difficulty of verification to be bounded by the complexity of the application rather than the complexity of the compiler toolchain.

### Project Details

*Goals:*

- Develop the KMIR semantics.
- Understand and document how to use KMIR to do verification.
- Initial integration of KMIR into Rust development workflow.

*Deliverables:*

- A first draft of the MIR semantics in K.
- Corpus of tests which exercise the feature set of MIR.
- Timeboxed initial KMIR semantics, which makes progress towards passing the tests.
- The **kmir** command-line tool, which allows users to try out the initial semantics on the test-suite and other examples.
- Integration with the [**kup** tool](https://github.com/runtimeverification/kup/), for one-command installation of K semantics and tooling.
- Blog post describing the progress made, and instructing people how they can try out the semantics themselves.

### Ecosystem Fit

Our project fits into the ecosystem as **developer tooling**.
This tool will help Rust smart contract developers to improve their quality assurance pipeline and to move towards formal verification on their own.

The initial version delivered in this workplan will be focused on providing **expert developer tooling**.
In particular, only developers who spend extra time learning K will be able to be effective with the tool.
The next version delivered (seeking funding elsewhere) will be focused on providing **developer tooling**; typical Rust smart contract developers should be able to use it.

## Team :busts_in_silhouette:

### Team members

- Team Lead: Yan Liu
- Team Members: Christiano Braga, Everett Hildenbrandt

### Contact

- **Contact Name:** Patrick MacKay
- **Contact Email:** patrick.mackay@runtimeverification.com
- **Website:** https://runtimeverification.com

### Legal Structure

- **Registered Address:** 1807 South Neil Street, Champaign, IL 61820
- **Registered Legal Entity:** Runtime Verification, Inc.

### Team's experience

Runtime Verification has significant past experience doing program verification for a variety of programming languages.
In particular, KEVM has been used for verifying Ethereum smart contracts, and KPlutus has been used for verifying Plutus smart contracts.

### Team Code Repos

- https://github.com/runtimeverification
- https://github.com/runtimeverification/evm-semantics
- https://github.com/runtimeverification/beacon-chain-verification
- https://github.com/runtimeverification/deposit-contract-verification
- https://github.com/runtimeverification/deposit-contract-verification
- https://github.com/runtimeverification/plutus-core-semantics
- https://github.com/runtimeverification/avm-semantics

Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine.

- https://github.com/yanliu18
- https://github.com/ChristianoBraga
- https://github.com/ehildenb

### Team LinkedIn Profiles (if available)

*N/A*

## Development Status :open_book:

Work scheduled to start January 2023.

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:**: 14 weeks
- **Full-Time Equivalent (FTE):** 1.5
- **Total Costs:** 100000 USD
- ***License:** BSD-3

This is the workplan submitted for the Web3 Foundation’s consideration.
It is focused on delivering a prototype that can be easily installed, tested, and used by the community.
This prototype will not be a complete semantics for MIR given the proposed timeframe, but it will be thoroughly tested and have a clear path to completion.

### Milestone 1 - KMIR Tests

- **Estimated duration:** 3 weeks
- **FTE:**  1.5
- **Costs:** 21000 USD

Developing a language semantics requires a test suite to exercise the semantics.
The tests should try to cover all of the language features, while being small and targeted for each individual language feature.
Note that to fit into the 100000 USD budget, the initial **miri** investigation phase has been cut, which may cause delays in this phase as we have to investigate this tool.

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | BSD-3 |
| **0b.** | Documentation | A short README will be provided describing how to interperet the tests. |
| **0c.** | Testing and Testing Guide | CI will be set up with K and **miri** pre-installed. |
| **0d.** | Docker | Our CI setup relies on Dockerfiles for reproducibility, so a Dockerfile will be supplied. |
| 1. | MIR code snippets | For each syntactic/semantic feature of MIR language, write a targeted test and the expected execution result. |
| 2. | Generate output from **miri** | Use **miri** (or another suitable tool, if this proves to not work), to confirm the expected output for each test. |
| 3. | **kmir** executable stub | Initial no-op **kmir** executable which fails all the input test, but can be called on CI in parallel to **miri** for conformance testing. |

### Milestone 2 - KMIR Syntax

- **Estimated duration:** 3 weeks
- **FTE:**  1.5
- **Costs:** 22000 USD

Specify the syntax of MIR programs in K.
Ensure we can parse all the conformance tests developed in the previous step.

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | BSD-3 |
| **0b.** | Documentation | The README will be augmented with instructions on calling the parser. |
| **0c.** | Testing and Testing Guide | Tests from the previous step will be parsed on CI to ensure we can parse valid MIR programs. |
| **0d.** | Docker | Our CI setup relies on Dockerfiles for reproducibility, so a Dockerfile will be supplied. |
| 1. | KMIR syntax | Develop the syntactic constructs of KMIR needed to parse the supplied conformance tests. |
| 2. | **kmir** executable extension | Provide subcommand **kmir parse** which can be used on CI or on CLI to parse MIR programs. |

### Milestone 3 - KMIR Semantics

- **Estimated duration:** 6 weeks (timeboxed)
- **FTE:**  1.5
- **Costs:** 50000 USD

Specify the semantics of MIR programs in K.
Progressively pass more of the conformance test-suite developed prior.
This step is timeboxed because finishing the semantics is unlikely given the timeframe.
We expect significant progress will be made in this timeframe.

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | BSD-3 |
| **0b.** | Documentation | The README will be augmented with instructions on calling the interpreter. |
| **0c.** | Testing and Testing Guide | Tests from the previous step will be executed on CI to ensure conformance with **miri**. |
| **0d.** | Docker | Our CI setup relies on Dockerfiles for reproducibility, so a Dockerfile will be supplied. |
| 1. | KMIR semantics | Develop the semantic constructs of KMIR needed to execute the supplied conformance tests (timeboxed to 8 weeks). |
| 2. | **kmir** executable extension | Provide subcommand **kmir run** which can be used on CI or on CLI to run MIR programs. |

### Milestone 4 - Documentation/Packaging/Announcement

- **Estimated duration:** 2 weeks
- **FTE:**  1.5
- **Costs:** 6000 USD

Write a blog post which outlines:

- Progress on the semantics,
- How to install **kmir** and try it, and
- Future plans for **kmir**.

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | BSD-3 |
| **0b.** | Documentation | README augmented with more instructions on using the developed interpreter. |
| **0c.** | Testing and Testing Guide | Tests from the previous step will be executed on CI to ensure conformance with **miri**. |
| **0d.** | Docker | Our CI setup relies on Dockerfiles for reproducibility, so a Dockerfile will be supplied. |
| 1. | KMIR documentation | Ensure that new users can follow instructions in the README to build the project from source. |
| 2. | **kup** integration | Ensure that [**kup**, the K package manager](https://github.com/runtimeverification/kup), can be used to install the semantics and run MIR programs. |
| 2. | Blog post | A short annuoncement of the progress on the project, including instructions on how to install and use it via **kup**. |

## Future Plans

Given the target scope of the project, these tasks have been pushed to future work.
These can be funded in whole or part by the Web3 Foundation at the conclusion of the first phase.

Future Deliverables (to be submitted as part of future proposal to Web3 Foundation or to additional funding entity):

- Completion of the KMIR semantics, together with measurement of semantic coverage of the developed conformance test suite.
- Low-level “expert-mode” verification capabilities added to the kmir tool.
- High-level “developer-mode” verification capabilities added to the kmir tool, via connection to Rust property testing.

### Finish Semantics

At the end of this step, we should have high confidence that we have an accurate model of the MIR language which can be used to faithfully execute Rust programs using our semantics-derived interpreter.
This groundwork ensures that the verification capabilities developed later will actually be relevant to real Rust programs.

- *Finish existing tests*:
  Make sure that there are no existing tests in the developed conformance test-suite that are not parsing or passing.
- *Testing coverage*:
  Set up semantics coverage measurement on CI.
  - Automate measuring semantic (rule and branch) coverage of the K definition of the conformance test-suite.
  - Publish the coverage reports on CI.
  - Extend the test-suite to reach 100% (or close to) coverage.

### “Expert-mode” Verification Capabilities

First, we develop the K expert verification tool, because developer-level tools will build directly on this foundation.
This is similar to how our Foundry integration builds on KEVM which allows programmers to write property tests in Solidity that are discharged via symbolic execution with K with no extra manual steps.

- *Simple verification challenges*:
  Try out simple hand-written MIR verification on this semantics.
  Common verification challenges for this step are functional correctness of simple arithmetic functions (integer maximum, fixed point multiplication, sum of list, sum to N, etc…).
- *Manual real-world verification*:
  Timeboxed verification of chosen real-world Rust smart contract.
  This first verification will uncover many inefficiencies we can address in the semantics, as well as giving people a sense of the scale/difficulty of attempting verification using this tool.
  Blog post describing:
  - How much progress was made on the verification in the given timeframe.
  - How the verification was accomplished (for reproducibility).

### “Developer-mode” Verification Capabilities

The goal for this part is to provide an interface to KMIR-based verification that is intuitive to Rust developers.
This requires bridging the gap between KMIR and the Rust source language, and property testing has proven to be an effective way to do that.
Here we’ll follow the same approach as KEVM’s Foundry integration mentioned above:

- *Write Rust property tests*:
  Develop a corpus of Rust property tests in one of the frameworks mentioned above which attempts to encompass a wide range of the Rust language.
  They should be small tests focused on exploring each of Rust’s features as independently as possible.
- *Rust-level verification*:
  Develop the needed infrastructure so that users can write property tests in Rust and discharge them using KMIR symbolic execution (instead of fuzzing or other testing methods for Rust programs).
  Start by manually doing so for several simple property tests from the previous step and documenting the steps.
  This will involve compiling the property test to MIR, and constructing the appropriate K prover query using the MIR as input.
- *Real-world verification*:
  Select a project to attempt verification on (a DeFi app).
  We’ll develop (or extend) the property testing for that app.
  We’ll also do a best-effort (timeboxed) attempt to discharge the generated verification conditions, improving the semantics (and adding lemmas) to make it possible.
  Write blog post describing the outcome, including answers to the following questions:
  - How much progress was made in the given timeframe?
  - How was the verification accomplished (how to reproduce our work)?

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Direct contact with grants committee.

There is a large body of testing tools for Rust, e.g. proptest, quickcheck, arbitrary, or creusot, to name a few.
These lack the completeness that "ships for free" with program verification tools such as the K Framework.
Runtime Verification has successfully applied the techniques presented in this proposal to several projects, including other blockchain language semantics such as EVM, Plutus, and AVM.
We are confident that the tooling resulting from this project, should it be financed, will be an important contribution to the Rust community, being a sound, complete and effective approach to Rust program verification.
