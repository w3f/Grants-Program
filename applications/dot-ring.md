# DotRing - Bandersnatch Ring VRFs in Python

## Project Overview

Implementing a Open-Source Library for Bandersnatch Elliptic Curve, VRF and Ring Proofs in Python.

#### Brief

Dotring is a Python library that implements the Bandersnatch Ring Verifiable Random Function (VRF) and ring proofs as specified by W3F. 
While a reference implementation exists in Rust ([ark-vrf](https://github.com/davxy/ark-vrf)), offering an additional implementation creates diversity in the ecosystem—a key factor in strengthening overall security. In doing so, DotRing extends W3F’s efforts beyond their original Rust ecosystem, ensuring that robust cryptographic techniques are available and adaptable to various environments.

#### Relation to Polkadot

The [Bandersnatch VRF](https://github.com/davxy/bandersnatch-vrf-spec) and [Ring Proof](https://github.com/davxy/ring-proof-spec) specification developed under Web3Foundation, play a critical role in securing network operations and enabling privacy-preserving applications. By offering an alternative implementation, DotRing:

- Strengthens Security through Diversity: Multiple independent implementations reduce risk by enabling cross-verification and preventing single points of failure.
- Extends W3F’s Efforts: Rather than being limited to Rust, our approach broadens the adoption of these protocols to a wider technical community and ensures the technology is accessible to diverse development environments.
- Fosters Innovation: With a varied implementation base, researchers and developers have additional tools and perspectives to innovate on top of the established cryptographic standards.
#### Why Us?

As a core component of JAM's consensus mechanism we noticed almost everyone's dependency on [ark-vrf](https://github.com/davxy/ark-vrf)
library for implementing Ring VRF Signatures. Though it is the best aligned implementation we recognize the need for diverse language support in cryptographic implementations for security. Even beyond that, we see the potential of its use cases outside of blockchain infrastructure. <br/>
Our team at Chainscore Labs brings deep expertise in cryptographic research and open-source software development. Rather than merely targeting a specific language demographic, DotRing is about providing an independent, robust implementation that enhances the resilience and adaptability of the ring-vrf specification. Our additional implementation reinforces security by offering cross-checks against the reference Rust implementation and extends the pioneering work of W3F across the broader software ecosystem.

### Project Details

#### Technology Stack

-   Programming Language: **Python 3.x​**

-   Libraries: Minimal dependencies to keep the library lightweight and secure.

-   Testing Frameworks: **Pytest** for unit+integration testing​ and benchmarking

-   Documentation Tools: **Sphinx**, complemented by detailed tutorials and example notebooks.

-   Containerization: Docker to ensure reproducible environments and simplified testing.


#### Core Components:

##### 1. GLV based Bandersnatch Curve Implementation:

Develop a robust implementation of the Bandersnatch elliptic curve featuring GLV optimization to achieve approximately 40% performance improvement in scalar multiplication.

Deliverables:
- A dedicated curve module with thorough benchmarks and unit tests.
- Detailed documentation explaining the mathematical foundations and optimization techniques.
- Extendible to other elliptic curves

Reference: [Masson, Sanso, and Zhang's work on Bandersnatch](https://eprint.iacr.org/2021/1152.pdf)

##### 2. W3F Ring Proof Implementation:

Implement the ring proof scheme in an independent manner, following the W3F specifications.
Deliverables:
- A functional module for ring proofs integrated with VRF functionality and usage examples.
- In-depth documentation clarifying the protocol and implementation details.

Reference: [W3F Ring-proof Specification](https://github.com/davxy/ring-proof-spec/blob/main/specification.md)

##### 3. VRF Implementation:

Objective: Develop three complementary VRF variants:
- IETF VRF: Conforming to RFC-9380.
- Pedersen VRF: Based on the Pedersen commitment scheme.
- Ring VRF: Integrating with the ring proof approach for enhanced anonymity.

Deliverables:
- Modular functions supporting the different VRF schemes with extensive testing and benchmarks.
-  Clear, comprehensive API documentation and examples.

References:

- [W3F VRF Specification](https://github.com/davxy/bandersnatch-vrf-spec)
-   [RFC-9380](https://datatracker.ietf.org/doc/rfc9380/) and [RFC-9381](https://datatracker.ietf.org/doc/rfc9381/)

#### Project Scope - What it IS and IS NOT:
- IS: A Python library providing low-level cryptographic primitives for Bandersnatch, Ring VRF, and Ring Proofs based strictly on the W3F specifications. It will include clear APIs, thorough tests, comprehensive documentation, and benchmarks.
- IS NOT: A full dApp, a blockchain node, a system integrating these proofs directly into a specific application logic (though it enables such integrations), or a Rust wrapper. It does not include formal verification or a third-party security audit within this grant's scope.


### Ecosystem Fit

The lack of multiple independent implementations for W3F’s advanced cryptographic primitives presents both a security risk and a limitation in innovation. DotRing addresses this gap by providing an alternative implementation of the Bandersnatch VRF and Ring Proofs. This diversity is essential as it allows for cross-verification of results, reduces the risk of single points of failure, and strengthens the overall ecosystem resilience.

By providing this library, we aim to fill this gap and promote broader adoption and understanding of these cryptographic techniques.​

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
- Prototyping: We have developed preliminary Python code for basic field arithmetic and curve operations on Bandersnatch curve, IETF and Pedersen VRF functions validating our understanding of the core mathematics, and are able to pass all IETF and Pedersen test vectors. We are currently working on the GLV optimisation and Ring Proof implementation.
- Discussions: We are aware of the discussions surrounding Ring VRFs in the context of Polkadot's future roadmap (e.g., JAM) through public materials and Polkadot community channels. We plan to engage with the community (e.g., Matrix channel, potentially Polkadot Forum) during development for feedback and provide it to other protocol implementation.

## Development Roadmap

### Overview

-   **Estimated Duration:** 2 Months
-   **Full-Time Equivalent (FTE):** 1.5 FTE
-   **Total Costs:** 8,900 USD


| Number | Deliverable               | Specification                                                                                                                                                                                                                                                                                                     |
| -----: | ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|    0a. | License                   | MIT License.                                                                                                                                                                                                                                                                                                      |
|    0b. | Documentation             | We will provide both inline documentation of the code and a comprehensive tutorial that explains how to utilize the library's functionalities.                                                                                                                                                                    |
|    0c. | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. See the [delivery guidelines](https://github.com/PolkadotOpenSourceGrants/delivery/blob/master/delivery-guidelines.md#testing-guide) for details. |
|    0d. | Docker                    | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.                                                                                                                                                                                                     |
|    0e. | Article                   | We will publish an article or workshop that explains what was achieved as part of the grant.                                                                                                                    |
|     1. |  Bandersnatch Curve & Core VRF Logic  | Implement core finite field and elliptic curve arithmetic for Bandersnatch in Python, including GLV optimization. Implement the basic structures and cryptographic operations (KeyGen, Prove, Verify) for the Ring VRF according to the W3F specification, focusing on correctness. Establish testing infrastructure (Pytest), basic benchmarks, and documentation structure (Sphinx). Deliverables 0a-0d covered for this scope.                                                                                                                          |
|     2. | Ring Proofs & Final Library Release         | Implement the W3F Ring Proof generation and verification logic, integrating it with the Ring VRF components from M1. Refine APIs based on usability testing. Implement comprehensive test suites, including property-based tests and integration tests (potentially using vectors derived from the Rust implementation). Optimize performance based on benchmarking. Finalize documentation, including API reference and tutorials. Package the library for release on PyPI. Deliverable 0e (Article/Tutorial).will...                                                                                                                                                                                                                                                                                    |


### Budget Breakdown (Example, please adapt)

**Category:** Budget Breakdown positions are split within the following categories:

-   Personnel
-   Equipment
-   Subcontracts/Subscriptions

| Category  | Item                     | Cost       | Amount    | Total          | Description                                       |
| --------- | ------------------------ | ---------- | --------- | -------------- | ------------------------------------------------- |
| Personell | Python Cryptography Engineer (Siva)     | 2,967 USD  | 1 FTE   | 5,933 USD      | Full-time focus on implementation, testing, optimization, and documentation of cryptographic components. |
| Personell | Lead Developer / PM (Prasad) | 2,967 USD | 0.5 FTE     | 2,967 USD     | Focus on architecture, code review, project management, testing integration, documentation, and release.   |
| ---       | ---                      | ---        | **Total** | **8,900 USD** |                                                   |

## Future Plans


### Short-Term (Post-Grant):
- **Promotion**: Announce the library release widely through relevant channels (Polkadot community chats like the grants channel, Python cryptography forums, Twitter/X, LinkedIn). Publish the tutorial article (Deliverable 0e).
- **JAM Engagement**: Present DotRing as an alternative implementation to JAM implementers to collect initial feedback and overall increasing security of JAM.
- **Maintenance**: Actively monitor the GitHub repository for issues and pull requests. Provide bug fixes and respond to user queries. Ensure compatibility with upcoming Python versions.
- **Enhancements**: Based on initial feedback, potentially add more helper functions, improve performance further, or enhance documentation/examples. Consider generating test vectors compatible with the Rust implementation if not already done.

### Long-Term Maintenance & Development:
- **Community Building**: Foster a small community around the library, encouraging contributions and usage.
- **Further Funding**: Explore potential follow-up grants (if applicable and necessary for major feature additions like audits or other VRF types) or seek funding from other sources interested in Python cryptographic tooling. Chainscore Labs is committed to maintaining the library as part of its open-source contributions.
- **Integration**: Explore potential integrations with other Python-based Web3 tools or SDKs relevant to the Polkadot ecosystem.

### Team's Intentions
Our goal is to establish DotRing as the go-to Python library for W3F's cryptography research. We see this as a foundational component that enables further innovation. Chainscore Labs intends to maintain and support this library as part of our broader engagement with open-source and the Polkadot ecosystem. Success would involve adoption by developers and potentially its use in research or educational contexts.

## Additional Information


- Prior Work: While we haven't published code specifically for this library yet, our preparation involves significant research into the specifications, relevant cryptographic papers (including GLV optimization for Bandersnatch), and analysis of the existing Rust implementation (ark-vrf).
- Contributions: This project is currently solely initiated and planned by Chainscore Labs.
- Other Funding: We have not applied for or received other funding specifically for this DotRing library project at this time.
- License Compliance: We confirm all code produced will be licensed under MIT License and will respect the licenses of any underlying mathematical concepts or standard algorithms used, providing proper attribution where necessary. We understand the policy on plagiarism and will ensure all submitted work is original or properly attributed.
- KYC/KYB: We confirm that the beneficiaries (Chainscore Private Limited and its involved team members) are prepared to undergo the required KYC/KYB checks.
