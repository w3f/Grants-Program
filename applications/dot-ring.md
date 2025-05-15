# DotRing Suite – Bandersnatch Ring VRFs & Cryptography Libraries in Python


## Project Overview

DotRing Suite is an open-source **family of four inter-locking Python libraries**—`ec-crypto`, `dotring`, `pyvrf` and `fiat-shamir`—that brings the Web3 Foundation's Bandersnatch Ring VRF and ring-proof standards to the Python ecosystem.([VRF Spec](https://github.com/davxy/bandersnatch-vrfs-spec), [GitHub](https://github.com/davxy/ring-proof-spec/blob/main/specification.md), [Cryptology ePrint Archive](https://eprint.iacr.org/2021/1152))

Whereas the reference implementation lives exclusively in Rust via the [`ark-vrf`](https://crates.io/crates/ark-vrf) crate, security guidances (e.g., NIST FIPS 140-3 IG) explicitly recommends *independent* implementations so results can be cross-verified and single points of failure avoided.

Our suite therefore complements the Rust code-base, offering **language diversity, easier auditability, and platform reach**—all without sacrificing performance thanks to a GLV-accelerated Bandersnatch curve core that delivers ≈40 % faster scalar multiplication.([Cryptology ePrint Archive](https://eprint.iacr.org/2021/1152), [Ethereum Research](https://ethresear.ch/t/introducing-bandersnatch-a-fast-elliptic-curve-built-over-the-bls12-381-scalar-field/9957))

Beyond the headline Ring VRF, DotRing Suite fully supports every hashing-to-curve and VRF construction defined in [RFC 9380](https://datatracker.ietf.org/doc/rfc9380/) and [RFC 9381](https://datatracker.ietf.org/doc/rfc9381/), respectively, so developers can mix-and-match curves such as P-256, Edwards25519, Jubjub and Bandersnatch under a common API.

The `fiat-shamir` module supplies a generic transcript/XOF layer (SHAKE128/256) that underpins zero-knowledge protocols and enables seamless composition with future proof systems.

Together, the four libraries form a complete suite for randomness, privacy-preserving identity, JAM/Safrole consensus and any project needing auditable, modern elliptic-curve cryptography on Python.


#### Relation to Polkadot

The [Bandersnatch VRF](https://github.com/davxy/bandersnatch-vrf-spec) and [Ring Proof](https://github.com/davxy/ring-proof-spec) specification developed under Web3 Foundation, play a critical role in securing network operations and enabling privacy-preserving applications. By offering an alternative implementation, DotRing:

- Strengthens Security through Diversity: Multiple independent implementations reduce risk by enabling cross-verification and preventing single points of failure.
- Extends W3F's Efforts: Rather than being limited to Rust, our approach broadens the adoption of these protocols to a wider technical community and ensures the technology is accessible to diverse development environments.
- Fosters Innovation: With a varied implementation base, researchers and developers have additional tools and perspectives to innovate on top of the established cryptographic standards.

#### Why Us?

As a core component of JAM's consensus mechanism we noticed almost everyone's dependency on [ark-vrf](https://github.com/davxy/ark-vrf)
library for implementing Ring VRF Signatures. Though it is the best aligned implementation we recognize the need for diverse language support in cryptographic implementations for security. Even beyond that, we see the potential of its use cases outside of blockchain infrastructure. <br/>
Our team at Chainscore Labs brings deep expertise in cryptographic research and open-source software development. Rather than merely targeting a specific language demographic, DotRing is about providing an independent, robust implementation that enhances the resilience and adaptability of the ring-vrf specification. Our additional implementation reinforces security by offering cross-checks against the reference Rust implementation and extends the pioneering work of W3F across the broader software ecosystem.

### Project Details

#### Technology Stack

-   Programming Language: **Python 3.9+** (targeting modern, widely adopted versions)
-   Core Libraries: Minimal external dependencies for `ec-crypto` to keep it lightweight and secure. Standard scientific libraries (e.g., NumPy) might be used for performance research or benchmarking harnesses but not as core dependencies for the cryptographic operations themselves unless a significant, well-justified performance gain is demonstrated for specific numerical tasks (e.g. FFTs, if implemented via a library).
-   Testing Frameworks: **Pytest** for comprehensive unit, integration, and property-based testing. **Coverage.py** for tracking test coverage.
-   Benchmarking: Custom scripts using Python's `timeit` and potentially other specialized benchmarking tools for in-depth performance analysis.
-   Documentation Tools: **Sphinx** for generating API documentation, complemented by **Jupyter notebooks** for interactive tutorials and usage examples.
-   Linting & Formatting: Tools like **Flake8**, **Black**, and **isort** to ensure code quality and consistency.
-   Continuous Integration: **GitHub Actions** for automated testing, linting, and potentially building documentation on each push/PR.
-   Containerization: **Docker** to provide a reproducible environment for development, testing, and benchmarking, ensuring consistency across different systems.


#### Core Components:

The DotRing Ecosystem will be structured as a suite of interoperable Python libraries:

##### 1. `ec-crypto`: Foundational Elliptic Curve Library

Objective: To provide a comprehensive, secure, and performant library for core elliptic curve cryptography over various standard and cutting-edge curves, with full support for RFC 9380 Hashing to Curves.
Deliverables:
-   **Curve Arithmetic & Operations**:
    -   Bandersnatch (with GLV endomorphism optimization as per Masson et al.)
    -   Jubjub (and Banderwagon for use with Bandersnatch proofs if applicable)
    -   Ed25519 (EdDSA)
    -   NIST P-256
    -   (Future considerations, if time/resources permit beyond core scope: Pallas, other NIST curves P-384/P-521, secp256k1, BLS12-381)
-   **Standard Cryptographic Functions**: Key generation, point compression/decompression, ECDSA/EdDSA signing and verification (where applicable for the curve).
-   **Hashing to Elliptic Curves (RFC 9380)**:
    -   Full implementation of all 14 suites listed in Section8 of RFC 9380 ("Suites for Hashing") for the implemented curves. This includes:
        -   Suites for P-256 (e.g., P256_XMD:SHA-256_SSWU_RO_, P256_XMD:SHA-256_SSWU_NU_)
        -   Suites for edwards25519 (e.g., edwards25519_XMD:SHA-512_ELL2_RO_, edwards25519_XOF:SHAKE256_ELL2_RO_)
        -   Support for generic modes like `ExpandMsgXOF` (e.g., with SHAKE256) and `ExpandMsgXMD`.
        -   Implementation of underlying mapping-to-curve algorithms (Shallue-van de Woestijne, Simplified SWU, Elligator 2, etc.) as required by the suites.
-   Thorough unit tests (aiming for >80% coverage), extensive API documentation, and clear usage examples.
-   Initial benchmarks for all core operations on supported curves.

References: [Masson, Sanso, and Zhang's work on Bandersnatch (ePrint 2021/1152)](https://eprint.iacr.org/2021/1152.pdf), [RFC 9380 - Hashing to Elliptic Curves](https://www.rfc-editor.org/rfc/rfc9380.html).

##### 2. `pyvrf`: Verifiable Random Function Library

Objective: To implement IETF standard VRFs and other significant VRF variants (Pedersen, Ring), leveraging `ec-crypto` for underlying curve operations.
Deliverables:
-   **IETF ECVRF (RFC 9381)**:
    -   Full implementation of ECVRF algorithms (Section5 & Section6 of RFC 9381) for P-256 and Ed25519, supporting relevant ciphersuites (e.g., ECVRF-P256-SHA256-TAI, ECVRF-EDWARDS25519-SHA512-TAI, ECVRF-P256-SHA256-SSWU, etc.).
    -   Correct handling of domain separation tags (DSTs) and all helper functions as per the RFC.
    -   Verification against official RFC test vectors.
-   **Pedersen VRF**: Implementation for Bandersnatch.
-   **Ring VRF**: The core Bandersnatch Ring VRF scheme, integrating with `dotring` (for ring proofs) and `fiat-shamir`.
-   Modular design for potential future additions of VRF schemes or curve support.
-   Comprehensive testing, API documentation, and examples.

References: [RFC 9381 - Verifiable Random Functions (VRFs)](https://datatracker.ietf.org/doc/html/rfc9381), [W3F Bandersnatch-VRF specification](https://github.com/davxy/bandersnatch-vrf-spec).

##### 3. `fiat-shamir`: Generic Transcript Layer

Objective: To provide a robust, secure, and flexible transcript mechanism using extendable-output functions (XOFs) for building non-interactive proof systems, following CFRG guidelines.
Deliverables:
-   Secure transcript abstraction supporting SHAKE128 and SHAKE256 as XOFs.
-   Strong domain separation methodologies (e.g., based on postfix length appending or explicit tagged hashing).
-   Intuitive API for appending messages (byte strings, group elements, field elements) and deriving challenges of arbitrary length.
-   Support for transcript state accumulation and cloning if beneficial for complex protocols.
-   Comprehensive unit tests, API documentation, and security considerations.

Reference: [CFRG guidelines on transcript security](https://datatracker.ietf.org/doc/html/draft-irtf-cfrg-hash-to-curve-16#section-3.1) (related concepts in RFC 9380), [NCC Group - Reviewing Verifiable Random Functions (discussion on transcripts)](https://research.nccgroup.com/2021/10/21/public-report-reviewing-verifiable-random-functions-for-the-ethereum-foundation/).

##### 4. `dotring`: Ring Proofs and Integrated Ring VRF Library

Objective: To provide a Python-native implementation of the W3F Ring Proof specification for Bandersnatch, and integrate it into a full Ring VRF.
Deliverables:
-   Full implementation of the W3F Ring Proof generation and verification logic for Bandersnatch.
-   Seamless integration with `ec-crypto` (Bandersnatch curve operations) and `fiat-shamir` (transcript).
-   Construction of the complete Ring VRF by combining ring proofs with the VRF components from `pyvrf`.
-   Development of a "Snark-friendly" API where appropriate, considering common patterns in zero-knowledge proof systems.
-   Clear API, in-depth documentation clarifying the protocol and its usage, and illustrative examples.
-   Rigorous testing to ensure correctness and compatibility with the W3F specification.

Reference: [W3F Ring-Proof specification](https://github.com/davxy/ring-proof-spec/blob/main/specification.md).

##### 5. Performance & Research

Objective: To investigate and implement advanced performance optimizations, conduct thorough benchmarking, and disseminate findings through research papers and articles.
Deliverables:
-   **Performance Optimization Research & Prototypes**:
    -   GLV endomorphism for Bandersnatch scalar multiplication in `ec-crypto` (confirming ≈40% speed-up).
    -   Investigation and prototyping of FFT-based polynomial arithmetic for relevant components (e.g., if used in commitment schemes or proof systems built atop these libraries).
    -   Prototyping and analysis of SIMD (AVX2/NEON) optimizations for critical batch field operations in `ec-crypto` and `dotring`, potentially via Python C extensions or targeted JIT compilation for identified bottlenecks. (Initial R&D report as part of M2).
-   **Benchmarking Suite**: Covering all core operations in `ec-crypto`, VRF schemes in `pyvrf`, and proof systems in `dotring`. Comparisons against `arkworks-rust` for Bandersnatch components.
-   **Publications**:
    -   Internal "Performance R&D Report I" detailing FFT/SIMD prototype results and analysis.
    -   2-3 public research papers (titles to be refined):
        1. *"Comparative Analysis of VRF Implementations on Elliptic Curves"*: A paper detailing the implementation nuances, performance characteristics, and comparative analysis of the IETF, Pedersen, and Ring VRF schemes, particularly focusing on the Bandersnatch curve context. Draft available [here](https://drive.google.com/file/d/1z3e5hPWbs5BdeusJrQ1uwemt2HCGukQW/view?usp=sharing). Related blog post [here](https://chainscore.finance/en/blog/verifiable-randomness-with-context-understanding-vrf-with-additional-data-vrf-ad), with more forthcoming.
        2.  Focusing on `ec-crypto` and `pyvrf`: Architecture, extensive RFC 9380/9381 conformance, multi-curve performance analysis, and comparison with existing libraries.
        3.  Focusing on `dotring`: Implementation of W3F Ring Proofs/Ring VRF, challenges, specific optimizations for Bandersnatch, and performance.
    -   Related blog posts and articles for broader dissemination.

References: [Masson et al., Bandersnatch: a fast elliptic curve (ePrint 2021/1152)](https://eprint.iacr.org/2021/1152.pdf), [FFT performance survey (e.g., IETF Datatracker for context)](https://datatracker.ietf.org/doc/html/rfc9381).

#### Project Scope - What it IS and IS NOT:
- IS: A Python library providing low-level cryptographic primitives for Bandersnatch, Ring VRF, Ring Proofs, and Fiat-Shamir transcripts based strictly on the W3F specifications and sound cryptographic principles. It will include clear APIs, thorough tests, comprehensive documentation, benchmarks, performance analysis, *and the publication of associated research findings*.
- IS NOT: A full dApp, a blockchain node, a system integrating these proofs directly into a specific application logic (though it enables such integrations), or a Rust wrapper. It does not include formal verification or a third-party security audit within this grant's scope, *nor does it guarantee acceptance into specific academic journals/conferences within the grant timeline, though submission is planned*.


### Ecosystem Fit

The lack of multiple independent implementations for W3F’s advanced cryptographic primitives presents both a security risk and a limitation in innovation. DotRing addresses this gap by providing an alternative implementation of the Bandersnatch VRF and Ring Proofs. This diversity is essential as it allows for cross-verification of results, reduces the risk of single points of failure, and strengthens the overall ecosystem resilience.

By providing this library *and accompanying research analysis*, we aim to fill this gap and promote broader adoption and understanding of these cryptographic techniques.​

- **What need(s) does your project meet?** DotRing meets the critical need for diversified implementations of W3F’s cryptographic standards. While the primary reference exists in Rust (e.g., ark-vrf), having an additional, independently developed implementation not only expands the available toolset but also deepens the scrutiny on security and performance. By extending W3F’s efforts beyond a single language ecosystem, we foster broader interoperability, encourage innovation, and bolster trust within the Polkadot/Kusama environment.

-   **Where/How:** This project is a foundational building block within the infrastructure (eg Safrole/JAM Block Production) and developer tooling layer of the Polkadot/Kusama ecosystem. It provides a secure and verifiable mechanism for privacy-preserving applications and randomness generation, crucial for decentralized protocols, consensus mechanisms, and identity verification.

-   **Target Audience:** DotRing is aimed at developers, researchers, and tool builders engaged in implementing and testing cryptographic protocols. It benefits teams looking to compare implementations, perform cross-validation, or integrate advanced cryptographic techniques into their applications—all while contributing to the overall robustness of the ecosystem.

-   **Need(s) Met:**
    - Security Through Diversity: Multiple implementations enable independent verification, ensuring that any vulnerability in one can be cross-checked against another.
    - Broader Adoption and Experimentation: By offering an alternative implementation, DotRing stimulates research and development in areas where reliance on a single language or platform might otherwise constrain progress.
    - Ecosystem Resilience: This additional implementation increases the diversity of available tools, reducing dependence on a singular technology stack and promoting a richer developer ecosystem.

-   **Identifying Needs:** Detailed specifications and the existing Rust-based implementation underscore the importance of these cryptographic primitives. However, the absence of an equally robust alternative limits opportunities for innovation and comprehensive testing. DotRing ensures that critical cryptographic functionalities are accessible in another mature, high-level programming environment—thus broadening the ecosystem’s security base and making it more resilient to potential failures.


- **Differentiation**
Unlike projects that simply port functionalities into another language, DotRing is conceived as a full-fledged, independent implementation of the W3F specifications. This approach not only validates the original design but also extends its reach to a broader technical audience, fostering a more diverse and secure cryptographic landscape within Polkadot.

- **Why Now**
The increasing complexity of cryptographic protocols combined with the evolution of the Polkadot ecosystem/JAM calls for diversified approaches. The initial focus on Rust and Substrate was driven by early development constraints and expertise concentration. Now, by expanding into an alternative implementation space, DotRing builds on the original work, ensuring long-term security and accessibility while paving the way for further innovation.


## Team

> Please note that the data provided in this section is for administrative and informational purposes only. All beneficiaries of a grant must also be listed in the KYC/KYB process during the application phase.

-   **Team Name:** Chainscore Labs (Chainscore Private Limited)
-   **Contact Name:** Prasad Kumkar
-   **Contact Email:** prasad@chainscore.finance
-   **Website:** chainscore.finance

### Team members

Team Members:

-   Prasad Kumkar: LinkedIn Profile​
    -   https://www.linkedin.com/in/prasad-kumkar/
    -   https://github.com/prasad-kumkar
-   Siva Kona: LinkedIn Profile​
    -   https://www.linkedin.com/in/im-siva-kona/
    -   https://github.com/konasiva7

### Team's experience

- Prasad Kumkar: 4+ years in Web3 development, experienced Python developer with a focus on backend systems and blockchain integration. Alumni of the Polkadot Blockchain Academy (PBA-4 Hong Kong), providing direct exposure to Polkadot's core concepts and ecosystem needs. Experience in leading small development teams and delivering software projects. Familiar with open-source workflows and community engagement.
- Siva Kona: Specialized Python engineer with a strong interest and research background in applied cryptography and mathematical implementations. Experience in developing performance-sensitive Python code and implementing complex algorithms. Proficient in testing methodologies essential for cryptographic libraries.

Our team blends practical Web3/Polkadot ecosystem knowledge with specialized Python and cryptographic implementation skills. We have prior experience collaborating on Python-based projects. We understand the importance of rigorous testing, clear documentation, and maintainability for foundational libraries like this. While this specific library is new, our skills are directly transferable from previous Python development and Web3 projects. We are active learners and are deeply familiar with the relevant specifications and underlying mathematical concepts through prior research.

## Development Status

- Research: We have thoroughly reviewed the W3F specifications for Bandersnatch VRF and Ring Proofs, the underlying paper on the Bandersnatch curve (eprint/2021/1152), and studied the ark-vrf Rust implementation for architectural insights and test vector generation.
- Prototyping: We have developed preliminary Python code for basic field arithmetic and curve operations on Bandersnatch curve, IETF and Pedersen VRF functions validating our understanding of the core mathematics, and are able to pass all IETF and Pedersen test vectors. We now have a working prototype of GLV optimisation, Fiat Shamir Transcript and Ring Proof implementation, and are working towards Ring VRF functionality. We look to integrate this in Safrole implementation and test real time working.
- Discussions: We are aware of the discussions surrounding Ring VRFs in the context of Polkadot's future roadmap (e.g., JAM) through public materials and Polkadot community channels. We'll soon be engaging with the JAM community (e.g., Matrix channel, potentially Polkadot Forum) during development for feedback and provide it to other protocol implementation.

## Development Roadmap

### Overview

-   **Estimated Duration:** 3 Months 
-   **Full-Time Equivalent (FTE):** 6 FTE 
-   **Total Costs:** 30,000 USD 


| Number | Deliverable               | Specification                                                                                                                                                                                                                                                                                                     | 
| -----: | ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|    0a. | License                   | MIT License.                                                                                                                                                                                                                                                                                                      |
|    0b. | Documentation             | We will provide both inline documentation of the code and a comprehensive tutorial that explains how to utilize the library's functionalities.                                                                                                                                                                    |
|    0c. | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. See the [delivery guidelines](https://github.com/PolkadotOpenSourceGrants/delivery/blob/master/delivery-guidelines.md#testing-guide) for details. | - |
|    0d. | Docker                    | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.                                                                                                                                                                                                     |
|    0e. | Article                   | We will publish an article or workshop that explains what was achieved as part of the grant.                                                                                                                    |
|    0f. | Research Papers           | Drafts of the two research papers outlined in Core Component 5, ready for submission. |
|     1. |  Bandersnatch Curve, Core VRF Logic & Transcript Foundation | Implement core finite field and elliptic curve arithmetic for Bandersnatch in Python, including GLV optimization. Implement the basic structures and cryptographic operations (KeyGen, Prove, Verify) for the Ring VRF according to the W3F specification, focusing on correctness. Implement the Fiat-Shamir transcript module using SHAKE128, including domain separation logic and basic API. Establish testing infrastructure (Pytest), basic benchmarks, and documentation structure (Sphinx). Deliverables 0a-0d covered for this scope.                                                                                                                          |
|     2. | Ring Proofs, Final Library Release & Research Papers | Implement the W3F Ring Proof generation and verification logic, integrating it with the Ring VRF components and Transcript from M1. Refine APIs based on usability testing. Implement comprehensive test suites, including property-based tests and integration tests (potentially using vectors derived from the Rust implementation). Optimize performance based on benchmarking. Finalize documentation, including API reference and tutorials. Package the library for release on PyPI. Complete drafts of the research papers (Deliverable 0f). Deliverable 0e (Article/Tutorial). |


### Budget Breakdown 

**Category:** Budget Breakdown positions are split within the following categories:

-   Personnel
-   Equipment
-   Subcontracts/Subscriptions

| Category  | Item                     | Monthly Rate | Amount     | Total           | Description                                       |
| --------- | ------------------------ | ------------ | ---------- | --------------- | ------------------------------------------------- |
| Personell | Python Cryptography Engineer (Siva)     | 5,000 USD   | 3 FTE   | 15,000 USD       | Focus on implementation, testing, optimization, documentation of cryptographic components, and contribution to research paper content/benchmarking. |
| Personell | Lead Developer / PM (Prasad) | 5,000 USD   | 3 FTE     | 15,000 USD      | Focus on architecture, code review, project management, testing integration, documentation, release, and leading research paper writing/structuring.   |
| ---       | ---                      | ---          | **Total**  | **30,000 USD**  |                                                   |

## Future Plans


### Short-Term (Post-Grant):
- **Promotion**: Announce the library release widely through relevant channels (Polkadot community chats like the grants channel, Python cryptography forums, Twitter/X, LinkedIn). Publish the tutorial article (Deliverable 0e). *Submit research papers (Deliverable 0f) to relevant conferences/journals.*
- **JAM Engagement**: Present DotRing as an alternative implementation to JAM implementers to collect initial feedback and overall increasing security of JAM.
- **Maintenance**: Actively monitor the GitHub repository for issues and pull requests. Provide bug fixes and respond to user queries. Ensure compatibility with upcoming Python versions.
- **Enhancements**: Based on initial feedback, potentially add more helper functions, improve performance further, or enhance documentation/examples. Consider generating test vectors compatible with the Rust implementation if not already done.
- **Research Presentation**: *Present findings from the research papers at relevant workshops or conferences if accepted.*

### Long-Term Maintenance & Development:
- Chainscore Labs shall provide full compliance, bug fixing, maintainance, and cover any changes that occur within the W3F specification for 1 year at no cost. Post which also we shall continue to maintain the library as part of Chainscore Labs' Open Source Initiatives. 
- **Community Building**: Foster a small community around the library, encouraging contributions and usage.
- **Further Funding**: If applicable and necessary for major feature additions like audits or other VRF types, we'd explore potential follow-up grants or seek funding from other sources interested in Python cryptographic tooling. Chainscore Labs is committed to maintaining the library as part of its open-source contributions.
- **Integration**: Explore potential integrations with other Python-based Web3 tools or SDKs relevant to the Polkadot ecosystem.

### Team's Intentions
Our goal is to establish DotRing as the go-to Python library for W3F's cryptography research. We see this as a foundational component that enables further innovation. Chainscore Labs intends to maintain and support this library as part of our broader engagement with open-source and the Polkadot ecosystem. Success would involve adoption by developers and potentially its use in research or educational contexts.

## Additional Information

-   **Prior Work & Experience**: Our team has significant prior research, prototyping experience, and foundational knowledge directly relevant to all proposed components of the DotRing Ecosystem. This includes work on Bandersnatch GLV, Fiat-Shamir transcripts, Hashing-to-Curve (RFC 9380), IETF ECVRF (RFC 9381), and Ring Proof concepts. While this specific full-suite project is new, it builds upon a solid base of preparatory work.
-   **Contributions**: This project is initiated and will be primarily executed by Chainscore Labs. We welcome community contributions post-release and will establish clear contribution guidelines.
-   **Other Funding**: We have not applied for or received other funding specifically for this project at this time.
-   **License Compliance**: All code produced under this grant will be licensed under the MIT License. We will ensure full compliance with the licenses of any third-party mathematical concepts, algorithms, or minimal dependencies used, providing proper attribution where necessary. We affirm our understanding and adherence to the policy on plagiarism, ensuring all submitted work is original or correctly attributed.
-   **KYC/KYB**: Chainscore Private Limited and its involved team members are prepared to undergo the required KYC/KYB checks.
-   **Bibliography/Key References**: Key academic papers, RFCs, and specifications are cited inline within the relevant sections of this proposal (e.g., Core Components, Ecosystem Fit) to provide immediate context for the technical approaches and justifications. A consolidated list of these key references can be provided if required by the grants committee as a separate document.
