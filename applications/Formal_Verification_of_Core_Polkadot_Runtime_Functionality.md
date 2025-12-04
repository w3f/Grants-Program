# Mathematical Foundations for Polkadot: Formally Verifying Core Runtime Infrastructure

- **Team Name:** Inferara 
- **Payment Address:** 12dw7ajFdmVe1d8m95NgeEE51kgngxaiqnVMt9hbvMNTaWJD (DOT &USDC)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

### Overview

This application is a follow-up grant to "Preparing Polkadot's `pallet_balances` for Formal Verification using the Inference Framework" ([completed & merged](https://github.com/w3f/Grants-Program/pull/2606) September 9th 2025).

We plan to apply our Rocq-based framework [Inference](https://github.com/Inferara/inference-language-spec/blob/main/README.md) to create formally verified specifications.

 Inference is designed as a domain‑specific formal specification language. By blending conservative procedural syntax with novel semantics of controllable non-determinism, it aims to let developers write formal specifications in a way that resembles writing unit tests. Designed with bearing similarities to classical imperative language in mind, Inference can be quickly understood and used by existing Polkadot developers. Through intermediate representation of purposefully extended WASM, such specifications are supposed to be translated into Rocq theories, allowing computer-assisted formal verification in a state-of-the-art interactive theorem prover. Inference seeks to bridge the gap between theorem proving and practical application development in blockchains. This approach provides a way to integrate formal verification into the development process of Polkadot projects.


This project implements the **[Foundation Phase](https://github.com/Inferara/pallet-balances-formal-verification/blob/main/preparation/preparing-polkadot-pallet-balances-for-formal-verification.md#foundation-phase-infrastructure-axiomatization)** of the incremental verification roadmap established in our previous grant report. While the prior work successfully isolated `pallet_balances` functionality into a verifiable `balances_contract` artifact and produced comprehensive structural analysis, actual formal verification was identified as requiring a systematic bottom-up approach.

This grant focuses on creating **formally verified specifications** for the infrastructure layer that underpins all balance operations:

  1. **SCALE Codec Verification** Proving mathematical properties of encoding/decoding operations for types used in balance management (`u32`, `u128`, `AccountId`, `Option<T>`, etc.)
  2. **Storage Abstraction** Establishing axiomatic models of contract storage with proven invariants for key-value operations
  3. **Memory Safety Foundations** - Verifying low-level memory operations (`memcpy`, `memmove`, `memset`) that SCALE codec relies upon

The deliverables will be **Rocq (Coq) theories** with machine-checked proofs, targeting the specific WebAssembly instructions identified in the annotated `balances_contract.wat` from the previous grant. These verified components will serve as reusable building blocks for subsequent verification of business logic (Phase 2) and full end-to-end correctness (Phase 3).

#### Integration with Polkadot:

This project relates to and integrates Polkadot in the following ways:

- Targets WebAssembly runtime modules used in Polkadot's smart contract execution environment (Ink!)
- Establishes verification methodology applicable to Ink! contracts
- Creates reusable proof patterns for SCALE codec operations used throughout Polkadot SDK
- Provides mathematical foundations for reasoning about storage operations in parachain state transitions

#### Team Motivation:

Due to the powerful capabilities of the Polkadot ecosystem, we would like to continue to highlight its strengths by applying our non-deterministic approach to formal verification. By being an open-source project, we hope it will be the starting point to inspire further development and research opportunities for the Polkadot ecosystem.

We want to enable more developers and researchers to explore formal verification by further mitigating the common obstacles that they are likely to face.

Our previous grant revealed that formal verification of blockchain systems encounters unique challenges absent from traditional "reliable software" domains, developers cannot pause innovation to write specifications *before* prototyping, nor can they restrict themselves to languages with mature proof tooling. This grant continues our mission to make theorem proving accessible by:

- Demonstrating that verification can be **retrofitted** to existing production code
- Building reusable proof libraries that amortize verification costs across the ecosystem
- Establishing patterns that reduce the learning curve for developers unfamiliar with formal methods

The research will be published as a technical report on the internet with a dedicated github repository including documentation and source code.

### Project Details

#### **Research Problems:**

The previous grant's analysis (Section "[Verification Challenges Specific to This Architecture](https://github.com/Inferara/pallet-balances-formal-verification/blob/main/preparation/preparing-polkadot-pallet-balances-for-formal-verification.md#2-verification-challenges-specific-to-this-architecture)") identified that verifying balance invariants requires first solving three prerequisite problems:

#### **Problem 1: SCALE Codec Correctness**

The codec appears in every storage operation, but its byte-level reconstruction logic (unaligned loads, bit-shifting for `u128` values) has no formal correctness proofs. Without guarantees like:

$$\forall x : T . decode(encode(x)) = Some(x)$$

we cannot reason about whether balance values are preserved during persistence/retrieval.

#### **Problem 2: Storage Key Non-Collision**

Storage uses BLAKE2-256 hashing to map (`prefix`, `AccountId`) pairs to keys:

storage_key=BLAKE2-256(prefix∥account_id)

While cryptographic collision-resistance is assumed, we must prove that the *construction itself* (prefix choice, encoding) guarantees distinct logical keys map to distinct storage locations.

#### **Problem 3: Memory Operation Safety**

SCALE codec delegates to `memcpy`, `memmove`, `memset` (Functions 9-11 in WAT). These must satisfy:

- **Preservation**: $\forall i < n . dest[i] = src[i]$ after copy
- **Non-Interference**: Overlapping copies preserve data correctly
- **Termination**: All loops terminate within $O(n)$ iterations
  
#### **Research Hypothesis:**

*Low-level infrastructure components can be axiomatized and proven correct in isolation, producing reusable verification artifacts that simplify reasoning about higher-level business logic.*




We hypothesize that:

  1. SCALE codec operations can be specified as **bijective functions** on abstract value types with proven round-trip properties
  2. Storage can be modeled as a **partial map** with axiomatic collision-freedom, abstracting away cryptographic details
  3. Memory operations admit **loop invariant proofs** that establish correctness without unrolling execution traces


These are important problems because the integrity of Polkadot’s financial primitives relies on the unproven assumption that underlying infrastructure components such as the SCALE codec, storage mapping, and low-level memory operations function flawlessly. This research mitigates systemic risk by transitioning these dependencies from observed reliability to mathematical certainty, specifically by establishing bijective round-trip properties for encoding and axiomatic collision-freedom for storage. By validating memory safety through loop invariants rather than exhaustive trace unrolling, the project delivers the resulting Rocq (Coq) theories as reusable public goods, allowing the wider Polkadot community to verify Ink! smart contracts upon a secure foundation without the burden of verifying the entire architectural stack from scratch.

#### **Methodology:**

We employ **deductive verification in Rocq (Coq)** using the following workflow:

#### **Step 1: High-Level Nondeterministic Specification**

- Required properties are stated in an Inference syntax

#### **Step 2: Coq-Mechanized Nondeterministic Specification**

- Inference specification is compiled into low-level WASM representation
- And hosted in heavily modified WasmCert-Coq environment

#### **Step 3: Proof Development**

- Conformity of covered code to its specification is proven using custom tactics

#### **Step 4: Library Construction**

- Tactics employed in proof construction are generalized for future reuse

#### **Expected Results,Validation & Reproducibility:**

All deliverables will be:

- **Machine-Checkable**: Rocq proofs compile without `admit` tactics
- **Executable Test Correlation**: Abstract specifications are shown equivalent to concrete test cases from the fungible conformance suite
- **Fully Open-Source**: Published in GitHub repository with CI running `coqc` on all `.v` files

The grants team can reproduce results by:

  1. Cloning repository and running `make` to rebuild all proofs
  2. Inspecting generated `.vo` files to confirm no `Admitted` lemmas
  3. Running example programs that link proven SCALE codec against test vectors
  4. Reviewing proof transcripts in HTML documentation (generated via `coqdoc`)

#### **Our Contributions:**
Unlike [prior work focusing on single-domain](https://github.com/spruceid/mi-cho-coq) (Ethereum/Tezos) or requiring specialized IRs (CompCert), we target:

- **WebAssembly as compilation target** (broader applicability than EVM)
- **Polkadot-specific encodings** (SCALE codec, not standard formats)
- **Reusable proof libraries** (not one-off contract verification)

#### **Literature Search Strategy:**

- ACM/IEEE digital libraries: keywords "WebAssembly verification", "serialization correctness", "Coq mechanization"
- arXiv cs.LO/cs.PL: "smart contract formal methods", "runtime verification"
- Polkadot forums/GitHub: "pallet verification", "FRAME security analysis"
- Ongoing monitoring of Coq-Club mailing list and Iris workshop proceedings
  


### Ecosystem Fit

Our research project is a security enhancement to the Polkadot ecosystem. As a research endeavor, it doesn't directly interact with users or the community like a typical DApp or development tool would. Instead, its value is that it will enhance the overall robustness of the Polkadot ecosystem and enable other developers to benefit from it by establishing a **mathematical assurance layer** beneath existing tooling. 

This project occupies a unique niche as **verification infrastructure** **for runtime correctness**; rather than duplicating the work of auditing services or testing frameworks, we complement them. Our project plans to deliver reusable proof components that guarantee semantic correctness. 

This benefits all Ink! contract developers by providing a methodology template for verifying other infrastructure elements. 

Our work complements but does not duplicate:

- **Auditing services** (Trail of Bits, SR Labs): We prove properties, we don't hunt for specific bugs
- **Testing frameworks** (substrate-test-runtime): We provide mathematical guarantees beyond test coverage
- **Static analysis tools** (Clippy, MIR-based lints): We verify semantic correctness, not syntactic patterns

#### **Target Audience:**

Our target audiences are separated into the following four categories:

  1. **Protocol Researchers** Use our Rocq libraries to verify everything, from novel consensus mechanisms to runtime upgrades to existing contracts (distant target)
  2. **Security Auditors** Reference proven SCALE codec properties when analyzing contracts
  3. **FRAME Developers** Apply our methodology to verify blockchain infrastructure (depends on solving codebase scaling issues)
  4. **Ink! Contract Authors** Trust that foundational storage/encoding operations are mathematically sound

**Project Benefits:** 

The project focuses on building from previous research in order to further explore additional formal verification methods which can  enhance the security of Polkadot. This is a novel approach and even though it is complicated it will benefit both the Polkadot ecosystem as well as the developers who participate in it.

By introducing non-deterministic specifications, we aim to lower the barrier for teams wanting to adopt formal methods without hiring PhD-level specialists.

#### **Differentiation from Related Projects:**

#### **Similar Projects in the Polkadot Ecosystem:**

- **Runtime Fuzzing** (Parity): Complementary fuzzing finds bugs, we prove their absence
- **Subsquid/SubQuery**: Different layer (indexing vs. runtime correctness)
- **No directly similar projects** for WASM-level deductive verification

#### **In Adjacent Ecosystems:**

| Project | Ecosystem | Approach | Key Difference |
| :--- | :--- | :--- | :--- |
| **Certora** | Ethereum (Solidity), Solana, Stellar (WASM) | SMT-based Inductive & Bounded verification | First-order logic only; we use higher-order (more expressive) logic. |
| **Runtime Verification (KEVM)** | Ethereum, Stellar | K-framework reachability | No interactive proving; less compositional. |
| **Formal Land** | Multiple | Rust→Coq translation | Focuses on source translation; we verify compiled WASM. |
| **Pruvendo** | TON/Everscale | TVM verification | Different VM (not WASM); closed-source methodology. |


#### **Our Unique Value:**

  1. **Post-Compilation Verification**: Unlike tools requiring specialized compilers (CompCert, Formal Land), we verify the WASM *as deployed*
  2. **Higher-Order Specifications**: Unlike SMT-based tools (Certora), we can express complex invariants (e.g., "no account has balance in range (0,ED)")
  3. **Reusable Infrastructure**: Unlike one-off contract audits, we build libraries that can be used across projects
  4. **Open Methodology**: All proofs published with step-by-step tutorials, not black-box tools

## Team :busts_in_silhouette:

### Team members

- Maxim Savchenko (Formal Methods Lead, PhD in mathematics)
- Xuanrui Qi (Rust and Mathematics)

### Contact

- **Contact Name:** Georgii Plotnikov
- **Contact Email:** georgii@inferara.com
- **Website:** [Inferara.com](https://inferara.com)

### Legal Structure

- **Registered Address:**
   〒810-0041 日本 福岡県福岡市 中央区大名2-6-11 810-0041 2-6-11 Daimyo, Chuo-ku, Fukuoka-shi, Fukuoka, Japan
- **Registered Legal Entity:**
  Inferara Corp. Ltd.

### Team's experience

**Maxim Savchenko**\
Researcher since 2005\
MSU Algorithmic Languages, MS\
[St Petersburg University](https://english.spbu.ru/), [Influence of additional information asymmetry on the solutions of non-antagonistic games](https://disser.spbu.ru/zashchita-uchenoj-stepeni-spbgu/882-savchenko-maksim-alekseevich.html), PhD\
[Mathnet Publications](https://www.mathnet.ru/php/person.phtml?option_lang=eng&personid=147678)


**Xuanrui Qi**\
Writing code since 2014\
Developing in Web3 since 2020\
Academic experience in formal methods & programming language design\
Ph.D. MS in Mathematical Science\
[Type theory and the logic of toposes](https://scholar.google.co.il/citations?view_op=view_citation&hl=ja&user=s4pAtswAAAAJ&citation_for_view=s4pAtswAAAAJ:IjCSPb-OGe4C)  
MS in Computer Science from
[Nagoya University](https://en.nagoya-u.ac.jp/)





## Team Code Repos

- https://github.com/Inferara/pallet-balances-formal-verification/tree/main
- https://github.com/Inferara/tree-sitter-inference
- https://github.com/Inferara/inference-language-spec
- https://github.com/Inferara/inf-wasm-tools
- https://github.com/Inferara/merkle-tree-wasm-spec

Github accounts of team members
- https://github.com/xuanruiqi
- https://github.com/Keyholder

## Google Scholar Profiles 
- [Xuanrui Qi](https://scholar.google.co.il/citations?user=s4pAtswAAAAJ&hl=ja)
## Development Status :open_book:

#### **Prior Work:**

This grant builds directly on:

1. **Completed Grant**: "Preparing Polkadot `pallet_balances` for Formal Verification"
  - Repository: <https://github.com/Inferara/pallet-balances-formal-verification>
  - Key Deliverables:
    - Annotated `balances_contract.wat` (16K lines, functions indexed 9-68)
    - Structural analysis identifying 30% infrastructure / 40% host interface / 30% business logic
    - Incremental verification roadmap (Section "Roadmap for Incremental Verification")

2. **Referenced Infrastructure:**

- [WasmCert](https://github.com/WasmCert/WasmCert-Coq) Project: Existing Rocq formalization of WebAssembly we will build upon
- [Polkadot](https://github.com/paritytech/parity-scale-codec) SCALE Codec Spec: Reference implementation we are verifying

#### **Relevant Publications:**

- Inferara: "New Approach to Formal Verification Methods for Combating [Vulnerabilities](https://www.inferara.com/en/blog/new-approach-to-formal-verification-smart-contracts/) in Smart [Contracts"](https://www.inferara.com/en/blog/new-approach-to-formal-verification-smart-contracts/)
- Prior research on controllable non-determinism (foundation for future Inference language integration)

## Development Roadmap :nut_and_bolt:


### Overview
- **Total Estimated Duration:** 3 months 
- **Full-Time Equivalent (FTE):** 1.5 FTE
- **Total Costs:** $30,000
- **DOT %:** 50%


### Milestone 1 — High-level specification

- **Estimated duration:** 1 month
- **FTE:** 1,5
- **Costs:** $10,000 USD


| Number | Deliverable | Specification |
| :--- | :--- | :--- |
| **0a.** | Copyright and Licenses | MIT |
| **0b.** | Documentation/Tutorial | We will provide inline documentation for the specifications and a basic tutorial explaining how to read the artifacts and map them to the corresponding Rust/Wasm logic. |
| **0c.** | Methodology | We will provide a detailed explanation of the axiomatization process, describing how the non-deterministic specifications were derived from the original `pallet_balances` logic and how to verify their syntactic and semantic validity. |
| **0d.** | Infrastructure | We will provide a Dockerfile containing the Inference Framework and necessary dependencies (Rocq/Coq environment) required to verify the deliverables. |
| **1.** | Inference specification: SCALE Codec Correctness | We will create a high-level non-deterministic specification for byte-level reconstruction logic of monomorphized SCALE Codec instances, stating that a) encoding is deterministic and injective, b) decode is left-inverse to encode and c) encoding preserves value bounds. It will be presented as a heavily annotated source in Inference language. |
| **2.** | Inference specification: Storage Key Non-Collision | We will create a high-level non-deterministic specification for construction of storage keys, stating that their collision on distinct `(prefix, AccountId)` pairs implies hash collision. It will be presented as a heavily annotated source in Inference language. |
| **3.** | Inference specification: Memory Operation Safety | We will create a high-level non-deterministic specification for memory operations, stating their preservation, non-interference and termination properties. It will be presented as a heavily annotated source in Inference language. |


## Milestone 2 — Rocq-Mechanized Specification

- **Estimated Duration:** 1 month

- **FTE:** 1,5

- **Costs:** \$10,000 USD

| Number | Deliverable | Specification |
| :--- | :--- | :--- |
| **0a.** | Copyright and Licenses | MIT |
| **0b.** | Documentation/Tutorial | We will provide inline documentation for the code and a basic tutorial. Aimed at engineers without mathematical background, this documentation will introduce our conceptual framework and guide readers through understanding the utilized WebAssembly extension and its logical interpretation. |
| **0c.** | Methodology | We will provide a detailed explanation of the mechanization process, describing how the non-deterministic specifications were translated into formal Rocq/Coq definitions and integrated with the customized WasmCert-Coq framework. |
| **0d.** | Infrastructure | We will provide a Dockerfile that can be used to test all the functionality delivered with this milestone. It will contain the Rocq 8.20 environment with all required dependencies, modified WasmCert-Coq mechanization, and our reasoning theory. |
| **1.** | Rocq-mechanized specification | We will produce formal propositions, semantically equivalent to the spec constructed on the previous milestone, by bringing together purposefully non-deterministic assembly code, heavily customized WasmCert-Coq mechanization and our breakthrough theory. It will consist of three modules — `scale_codec.v`, `storage_keys.v` and `memory_ops.v` — each stating properties of corresponding specification aspects. At this point, statements will demonstrate logical coherency by Rocq type-checking but will yet be unproven (admitted). |

## Milestone 3 — Verified Proof by Custom Tactics

- **Estimated Duration:** 1 month

- **FTE:** 1,5

- **Costs:** $10,000 USD

| Number | Deliverable | Specification |
| :--- | :--- | :--- |
| **0a.** | Copyright and Licenses | MIT |
| **0b.** | Documentation/Tutorial | We will provide inline documentation for the proof scripts and a tutorial explaining how to execute the proofs and utilize the generalized tactics. |
| **0c.** | Reproducibility | We will provide step-by-step guides for the grants team to know what we have done. We will provide a detailed explanation of the formal proof strategies, describing how the logic was verified against the specifications and how reusable tactics were abstracted from the specific proofs. |
| **0d.** | Infrastructure | We will provide a Dockerfile that can be used to test all the functionality delivered with this milestone. It will contain the Rocq 8.20 environment with all required dependencies, modified WasmCert-Coq mechanization and our reasoning theory. |
| **0e.** | Final Research Article | We will publish a detailed research article to the Github repository and our website that explains our research findings regarding the proven theorems and the reusable tactics developed. It will also include details from deliverables 1 and 2. |
| **1.** | Proven theorems | Each statement, formalized on the previous milestone, will receive proof reaching qed without admits. Every non-trivial logic transition will be comprehensively explained in comments. |
| **2.** | Generalized tactics | We will distill methods used through such proofs into a collection of tactics, general enough to facilitate future reuse. Resulting `frame_tactics.v` will aggregate only proof helpers, detached from particularities of subject contract. |

## Future Plans

In the short term we will continue to share our progress and interesting discoveries during the research phase as they occur.

As this is a project with a specific set of research objectives we do not foresee it requiring intensive maintenance or development after grant completion. We will of course be aware of correspondence and be available for clarifications from any future developers or researchers who are curious about the project. If further interest arises we would be interested in expanding upon this research based on the needs of the Polkadot ecosystem. 

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** 

We originally learned about it via personal recommendations by @bhargavbh & @takahser



The previous grant we applied for can be seen here[ Create Preparing Polkadot pallet_balances for Formal Verification ](https://github.com/w3f/Grants-Program/pull/2606)

