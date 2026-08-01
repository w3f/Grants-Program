# ML-DSA Verification Suite for Polkadot Validators

- **Team Name:** Kristian Pilatovich
- **Payment Details:**
  - **DOT:** 14fiLDd3GHBYQ75DYG34wzDbi1DVkzo6fzxdAkU8VmEn6DiN
  - **Payment:** 14fiLDd3GHBYQ75DYG34wzDbi1DVkzo6fzxdAkU8VmEn6DiN (USDC)
- **[Level](https://grants.web3.foundation/docs/Introduction/levels):** 2

## Project Overview :page_facing_up:

This application responds to the [Post-Quantum Cryptography Roadmap for Polkadot and JAM](https://forum.polkadot.network/t/post-quantum-cryptography-roadmap-for-polkadot-and-jam/13232) posted by `research@web3.foundation`, which names ML-DSA as the intended replacement for validator signatures and states the requirement that it be a **constant-time implementation in consensus protocols**.

### Overview

**An independent, executable check that the ML-DSA implementation Polkadot will depend on is correct and constant-time.**

The roadmap commits the ecosystem to ML-DSA (FIPS 204) for validator signatures. The implementation the Rust ecosystem would reach for, RustCrypto's `ml-dsa`, states plainly that it "has never been independently audited." It has already had one timing side-channel found in `Decompose` during signing ([RUSTSEC-2025-0144](https://rustsec.org/advisories/RUSTSEC-2025-0144.html), CVE-2026-22705), fixed only in `0.1.0-rc.3`.

That is the gap this project closes: not another implementation, but the evidence that the chosen one behaves as the roadmap requires. A signature scheme that is merely *probably* correct and *probably* constant-time is not a foundation for validator identity.

I am interested in this because I have written ML-DSA-44 from scratch against FIPS 204 in C++ and run it inside a working consensus layer. Having built one, I know where these implementations go wrong — the rejection-sampling loop, the hint machinery, the decomposition step where the published CVE landed — and I have an independent implementation to test against, which is the one thing a differential test needs and almost nobody has.

### Project Details

Three deliverables, in order of value:

**1. Differential test suite.** My independent C++ ML-DSA-44 implementation, driven as an oracle against RustCrypto's `ml-dsa` over:

- the full NIST ACVP/KAT vector set for ML-DSA-44/65/87;
- randomised round-trips (keygen → sign → verify) at scale;
- edge inputs chosen to exercise the rejection loop, hint generation and boundary values of the decomposition — the regions where implementations historically diverge;
- malformed and adversarial signatures, checking both implementations *reject* identically. Agreeing on what is invalid matters as much as agreeing on what is valid.

Two implementations written independently from the same specification that disagree on any single byte mean one of them is wrong. That is the entire value of the method, and it cannot be obtained from either implementation alone.

**2. Constant-time verification.** Statistical timing analysis (dudect methodology) plus instrumentation-based checking of secret-dependent branches and memory accesses, targeted at signing, with explicit coverage of `Decompose` and signature parsing. Deliverable is a reproducible harness plus a report stating, per function, what was tested and what the evidence shows.

**3. CI integration.** The above wired into GitHub Actions so it runs on every change rather than once. A verification that happens once is a snapshot; the roadmap's requirement is a property that has to survive future edits.

**What this project is *not*:**

- **Not a new ML-DSA implementation in Rust.** The ecosystem does not need a fourth one; it needs assurance about the one it will use.
- **Not a formal-methods proof.** Timing analysis is statistical and instrumentation-based, and the report will say so. It finds leaks; it does not prove their absence.
- **Not a substitute for a paid security audit.** It is the reproducible, open, machine-checkable layer beneath one — and it makes any later audit cheaper by removing the classes of bug that testing can find.
- **Not integration into Substrate itself.** No runtime, pallet or host-function work is proposed here.

### Ecosystem Fit

**Where it fits.** Directly under the PQC roadmap's first named primitive. Before validator signatures can move to ML-DSA, someone has to answer "is the implementation correct, and is it constant-time" with evidence rather than assumption.

**Target audience.** Client implementation teams, validators, and W3F research — anyone who will have to justify the choice of crate.

**The need, and how it was identified.** Not from opinion: from the crate's own statement that it has never been independently audited, and from a filed advisory for a timing leak in exactly the function that this class of implementation gets wrong. Both are cited above.

**Similar projects in the ecosystem.** I found none. Searching the Grants Program's accepted applications for audit, cryptography and quantum work returned no differential-testing or constant-time verification project for any PQC primitive. The two prior quantum-themed applications, `quantum-guard` and `quantumLock`, were both broad protocol proposals and both were terminated. This proposal is deliberately the opposite: narrow, with deliverables that either exist or do not.

**Similar projects elsewhere.** Commercial audit firms do this work at $50–100k+ per engagement, under NDA, producing a PDF. The difference here is cost, and that the output is an executable suite that stays in the repository and keeps running.

## Team :busts_in_silhouette:

### Team members

- Kristian Pilatovich (team leader, sole member)

### Contact

- **Contact Name:** Kristian Pilatovich
- **Contact Email:** pilatovichkristian2@gmail.com
- **Website:** https://lattica.org

### Legal Structure

- **Registered Address:** Not applicable — applying as an individual.
- **Registered Legal Entity:** Not applicable — applying as an individual.

### Team's experience

I work on cryptographic implementation in C++ and CUDA, from the primitive up to consensus.

**Lattica** — a post-quantum blockchain written from scratch in C++20, in which ML-DSA-44 (FIPS 204) and ML-KEM-768 (FIPS 203) are implemented from the specifications and carried through the full stack: key handling, transaction signing, block validation, peer-to-peer transport, wallet. Both primitives are in the tree at `src/ML-DSA-44` and `src/ML-KEM-768`. This is the relevant experience for this grant: not "used a PQC library", but implemented these exact algorithms and made them work under the constraints a consensus layer imposes.

The implementation is already exercised against third-party test vectors rather than only against itself: [`src/test/test_mldsa44.cpp`](https://github.com/Kristian5013/lattica/blob/main/src/test/test_mldsa44.cpp) drives the Wycheproof ML-DSA-44 `sigVer` vectors through the FIPS 204 `verify_ctx` interface, alongside keypair/sign/verify round-trips and negative cases for a tampered signature, a tampered message and a wrong public key. That is the same methodology this grant proposes to apply at scale, and it is the reason the implementation can serve as a differential oracle: it has already been checked against vectors written by someone else.

**SHA-256 differential cryptanalysis** — analysis work on the compression function, in C.

**GPU implementation work** — secp256k1 field and point arithmetic in CUDA, validated byte-for-byte against libsecp256k1, including the class of bug this proposal is about: a PTX early-clobber error that produced correct results on 4096 isolated multiplications and wrong ones inside an inversion loop. It was caught only by differential testing against an independent implementation — the same method proposed here.

I have not previously applied for a Web3 Foundation grant.

### Team Code Repos

- https://github.com/Kristian5013/lattica
- https://github.com/Kristian5013/sha256-cas

Team member GitHub account:

- https://github.com/Kristian5013

### Team LinkedIn Profiles (if available)

- https://www.linkedin.com/in/kristian-pilatovich-350004212/

## Development Status :open_book:

Prior work supporting this application:

- The independent ML-DSA-44 implementation that will serve as the differential oracle: https://github.com/Kristian5013/lattica (`src/ML-DSA-44`), MIT, with an existing Wycheproof `sigVer` KAT driver at [`src/test/test_mldsa44.cpp`](https://github.com/Kristian5013/lattica/blob/main/src/test/test_mldsa44.cpp). The corresponding ML-KEM-768 implementation and its test are in the same tree, which is what makes the ML-KEM extension in "Future Plans" a small step rather than a new project.
- The target of the verification: [RustCrypto `ml-dsa`](https://crates.io/crates/ml-dsa), and its advisory [RUSTSEC-2025-0144](https://rustsec.org/advisories/RUSTSEC-2025-0144.html).
- The requirement being served: the [PQC roadmap](https://forum.polkadot.network/t/post-quantum-cryptography-roadmap-for-polkadot-and-jam/13232), which specifies constant-time ML-DSA for validator signatures.

No contact with Web3 Foundation has taken place prior to this application.

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 3 months
- **Full-Time Equivalent (FTE):** 1
- **Total Costs:** 27,000 USD
- **DOT %:** 50%

### Milestone 1 — Differential test suite

- **Estimated duration:** 1 month
- **FTE:** 1
- **Costs:** 10,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | MIT |
| **0b.** | Documentation | Inline documentation plus a guide explaining how to run the suite against any ML-DSA implementation, and how to read a divergence report. |
| **0c.** | Testing and Testing Guide | The deliverable is itself a test suite; the guide describes how to run it, how to add vectors, and how to reproduce any reported divergence. |
| **0d.** | Docker | A Dockerfile that builds both implementations and runs the full comparison, so results are reproducible without a local toolchain. |
| 1. | Harness | A Rust test harness driving RustCrypto `ml-dsa` and the independent C++ implementation over identical inputs via FFI, comparing keys, signatures and verification outcomes byte for byte. |
| 2. | KAT coverage | Full NIST ACVP/KAT vector coverage for ML-DSA-44, 65 and 87, with a pass/fail report per vector. |
| 3. | Randomised and edge testing | At least 10^6 randomised round-trips plus generated edge cases targeting the rejection-sampling loop, hint generation, and decomposition boundaries. |
| 4. | Negative testing | Malformed and tampered signatures, confirming both implementations reject the same inputs for the same reasons. |

### Milestone 2 — Constant-time verification

- **Estimated duration:** 1 month
- **FTE:** 1
- **Costs:** 10,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | MIT |
| **0b.** | Documentation | Inline documentation and a guide covering how to run the timing harness and how to interpret its statistics, including what it can and cannot establish. |
| **0c.** | Testing and Testing Guide | Instructions to reproduce every measurement, including the machine configuration the published figures were taken on. |
| **0d.** | Docker | A Dockerfile pinning the measurement environment, since timing results are meaningless without it. |
| 1. | Timing harness | A dudect-methodology harness measuring signing time against secret-dependent inputs, reporting the test statistic and the number of measurements needed to reach it. |
| 2. | Targeted coverage | Explicit coverage of `Decompose`, hint generation and signature parsing — the function of the published CVE and its neighbours. |
| 3. | Instrumentation pass | Valgrind/ctgrind-style checking for secret-dependent branches and memory accesses, with findings listed per function. |
| 4. | Report | A written report stating, per function, what was tested, what the evidence shows, and what remains unverified. Negative results are reported as findings, not omitted. |

### Milestone 3 — Continuous verification and publication

- **Estimated duration:** 1 month
- **FTE:** 1
- **Costs:** 7,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | MIT |
| **0b.** | Documentation | Complete documentation for adopting the suite in another repository. |
| **0c.** | Testing and Testing Guide | Final guide covering the whole suite. |
| **0d.** | Docker | Final images for both the differential and timing suites. |
| **0e.** | Article | An article documenting what the suite checks, what it found, and how another ecosystem can reuse it for a different PQC primitive. |
| 1. | CI integration | GitHub Actions workflows running the differential suite on every push and the timing suite on a schedule, with results published as artefacts. |
| 2. | Upstream reporting | Any divergence or timing finding reported responsibly to the maintainers of the affected implementation, with the disclosure timeline documented. |
| 3. | Reusability | The harness generalised so that a second implementation, or a second primitive (ML-KEM), can be added without rewriting it. |

## Future Plans

The immediate extension is ML-KEM (FIPS 203), where I have the same independent implementation and the same method applies unchanged. Beyond that, the roadmap names Falcon for account signatures and hash-based constructions for the randomness beacon; both are testable the same way, and the harness is being built to be extended rather than replaced.

Longer term, I intend to keep working on post-quantum implementation correctness, and I would rather do it in the open under a grant than privately under an NDA.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation website / Polkadot Forum.

Work already done is described under Development Status. No other financial contributions have been received for this project, and there is no other team involved.
