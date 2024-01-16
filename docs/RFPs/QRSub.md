# Project QRSub - Elements of Quantum Resistance for Substrate

- **Team Name:** Quantum Blockchains
- **Payment Address:** Fiat 16.01.2024, 13.00
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview

If this application is in response to an RFP, please indicate this on the first line of this section.

### Overview

QRSub project is committed to advancing the integration of Quantum-Resistant technologies in Substrate-based blockchains. Our aim is to bolster security and ensure sustained protection against quantum computing threats. Building on the foundational work of our company, Quantum Secured Blockchains, QRSub extends these efforts by new developments and conducting critical benchmarks vital for future implementations.

Our project focuses on four key areas of research and development:

- Upgrading standard asymmetric cryptographic algorithms with post-quantum counterparts.
- Developing a hierarchical deterministic wallet framework suitable for the post-quantum era.
- Designing quantum-resistant communication protocols for node to node communication.
- Analyzing and testing the use of quantum entropy in the Substrate based blockchains.

Key Areas of Exploration:

- Refinement of Dilithium PQC Algorithm: Enhancing and evaluating and optimizing our existing Rust implementation of the Dilithium Post-Quantum Cryptography (PQC) algorithm (crystals-dilithium). Additionally, we aim to implement the KYBER key-exchange mechanism in Rust.

- Hierarchical Deterministic Wallets Development: Designing and creating a scheme for Hierarchical Deterministic Wallets, with specific implementations for the Polkadot.js browser extension and for PolkaGate.

- Quantum-Generated Entropy Utilization: Expanding the use of quantum-generated entropy to meet various randomness needs within the blockchain framework. This builds on our previous work in implementing RanDao-like mechanisms and generating secure Pre-Shared Keys (PSK). In particular we are going to explore use of quantum entropy for VRFs.

- Quantum-Resistant Communication Protocols: Developing communication protocols for Substrate blockchains that are resistant to quantum threats based on the post-quantum Key Encapsulation Mechanisms (KEMs) 

- Feasibility study for the use of more advanced securitization of public blockchains through the use of Quantum Key Distribution paradigm. Experimanetal part of the study will be done with our Post-Quantum Key Distribution (pQKD) emulators implemented in software. 

- Performance and Resource Utilization Analysis: Evaluating the impact of quantum-resistant technologies on the performance and resource efficiency of Substrate blockchains. This includes utilizing Substrate-based benchmarks and developing our own benchmarks for aspects not addressed by existing ones. This area is especially crucial because the key lengths of post-quantum algorithms and operation times differ significantly from those of classical algorithms.


We are convinced that our project represents a critical step in introducing a vital security dimension, namely quantum resistance, to all blockchains built on the Substrate framework. A successful execution of this project could set a precedent, enabling these blockchains to integrate a novel category of cryptographic technologies that are specifically engineered to withstand quantum computing threats.

Our team is deeply committed to this endeavor, having already developed and partially implemented key components of this advanced technology. However, a comprehensive validation of the entire implementation remains to be completed. This is particularly crucial in terms of its effects on blockchain performance and resource efficiency, which are essential for specific applications such as Digital Identification that demand the highest level of security.


### Project Details

The prior work leading to this project has been descibed in the page: **[QSB](https://www.quantumblockchains.io/qsb/)** and in our : **[Whitepaper](https://www.quantumblockchains.io/introducing-quantum-secured-blockchain-a-comprehensive-whitepaper/)**.

Regarding Post-Quantum algorithms, during the previous project we had to modify some parts of Substrate code:

1) primitives/core - added Dilithium2 signature schema (dilithium2.rs)
2) primitives/io/src/lib.rs - added generation, signing, and verification functions for Dilithium2
3) primitives/runtime/src/traits.rs - implementation of IdentifyAccount for Dilithium2
4) primitives/keyring - added keyring for Dilithium2

In this project, we will endeavor to implement the necessary modifications to a palette.

The planned feasibility study aims to determine whether it is both possible and practical for certain types of permissioned blockchains built on Substrate to enhance their security beyond that provided by Post-Quantum cryptography. This study will also explore the potential for paving the way towards the adoption of theoretically secure quantum cryptography.

In terms of utilizing quantum entropy, our goal is to advance beyond the RanDao-like application of entropy, focusing instead on its use in the initialization of Verifiable Random Functions. Additionally, we plan to investigate the use of remote quantum entropy sources, such as those accessible through API3 services, where we already provide quantum entropy (see **[API3 Quantum Entropy Providers](https://docs.api3.org/reference/qrng/providers.html)**). We will also consider local sources of quantum entropy, employing devices that we have designed and manufactured.


### Ecosystem Fit


- Our project can either establish a quantum-resistant parachain or function as an independent, permissioned blockchain for applications demanding heightened security.
- Our primary audience comprises developers and users of Substrate-based blockchains who seek advanced security solutions in the quantum era.
- Our project fulfills the requirements for quantum resistance in Substrate-based blockchains.
- A similar project, Quantum Guard MVP, is also applying for a grant.
- Our project distinguishes itself through:
  - The inclusion of comprehensive benchmarks and tests which lead to real-world implementation. 
  - The integration of Quantum Entropy into blockchain operations.
  - The feasibility study backed up by experiments of highest security communication paradigms. 
 

## Team

### Team members

- **Mirek Sopek** (Founder and СEO)
- **Lukasz Kujawski** (Senior Blockchain Developer)
- **Kostia Skopec** (Blockchain Developer)
- **Albert Yablonskyi** (Junior Blockchain Developer)
- **Ryszard Olejnik** (Cryprographic techniques developer)


### Contact

- **Contact Name:** Mirek Sopek
- **Contact Email:** sopek@quantumblockchains.io
- **Website:** https://www.quantumblockchains.io/

### Legal Structure

- **Registered Address:** ul. Kredowa 7, 20-502 Lublin, Poland
- **Registered Legal Entity:** Quantum Blockchains Sp. z o.o.

### Team's experience

#### Mirek Sopek 
Mirek holds a PhD in Quantum Physics and possesses over 35 years of business experience in Poland and the US. Prior to his work at Quantum Blockchains, he designed GraphChain and invented specific cryptographic algorithms for specialized blockchains.

#### Łukasz Kujawski
Lukasz is a Senior Blockchain Developer who gained his experience working on the Golem project. He played a key role in our previous QSB project.

#### Kostia Skopec
Kostia is a Blockchain Developer with exceptional skills in Rust. He was responsible for implementing most of the code in our previous QSB project.

#### Albert Yablonskyi
Albert, our Junior Blockchain Developer, has significant experience in integrating blockchains with other systems. He recently developed our Quantum Entropy sources for API3 services.

#### Ryszard Olejnik
Ryszard is a seasoned and versatile developer proficient in many programming languages and environments. He is the driving force behind the Post-Quantum Cryptography implementation for our pQKD emulator.


### Team Code Repos

- https://github.com/Quantum-Blockchains/quantum-metachain
- https://github.com/Quantum-Blockchains/dilithium


Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine.

- https://github.com/orgs/Quantum-Blockchains/people/quantum-sopek
- https://github.com/orgs/Quantum-Blockchains/people/leoni-q 
- https://github.com/orgs/Quantum-Blockchains/people/kostiask
- https://github.com/albertyablonskyi
- https://github.com/orgs/Quantum-Blockchains/people/ryszardolejnik

### Team LinkedIn Profiles (if available)

- https://www.linkedin.com/in/mirek-sopek-0b56251/
- https://www.linkedin.com/in/lukas-kujawski/
- https://www.linkedin.com/in/kostia-skopec-669576209/
- https://www.linkedin.com/in/albert-yablonskyi-94625b225/



## Development Status

We have implemented some elements of the project as described in the page: **[QSB](https://www.quantumblockchains.io/qsb/)** and in our : **[Whitepaper](https://www.quantumblockchains.io/introducing-quantum-secured-blockchain-a-comprehensive-whitepaper/)**. However, we did not have enough resources to perform rigorous tests and performance analysis leading to the possibility of public deployment of quantum-resistant public blockchain based on Substrate. For the same reason we could not implememt Hierarchical Wallets based on Post-Quantum approach. While our design of QSB targets private, permissioned blockchain, in this project we perform feasibility study for the use of specific quantum-resistant techniques for public blockchains having the form of e.g. a parachain.

As for academic work leading to our project we have them all listed in ["our papers"](https://www.quantumblockchains.io/our-papers/) section of our site.

The key papers are:

- ["Towards Quantum-Secured Permissioned Blockchain: Signature, Consensus, and Logic"](https://doi.org/10.3390/e21090887)
- ["Time-Bin CKA as a tool for blockchain technology"](https://doi.org/10.48550/arXiv.2308.16289)

The code developed prior to this project is available here:


- [QSB](https://github.com/Quantum-Blockchains/quantum-metachain)
- [Dilithium in Rust](https://github.com/Quantum-Blockchains/dilithium)


## Development Roadmap

### Overview

* **Description** Quantum Resistance for Substrate
* **Total Estimated Duration:** 8 months
* **Full-time equivalent (FTE):**  
* **Total Costs:** 30,000 USD


This section should break the development roadmap down into milestones and deliverables. To assist you in defining it, we have created a document with examples for some grant categories [here](../docs/Support%20Docs/grant_guidelines_per_category.md). Since these will be part of the agreement, it helps to describe *the functionality we should expect in as much detail as possible*, plus how we can verify and test that functionality. Whenever milestones are delivered, we refer to this document to ensure that everything has been delivered as expected.

Below we provide an **example roadmap**. In the descriptions, it should be clear how your project is related to Substrate, Kusama or Polkadot. We *recommend* that teams structure their roadmap as 1 milestone ≈ 1 month.

> :exclamation: If any of your deliverables is based on somebody else's work, make sure you work and publish *under the terms of the license* of the respective project and that you **highlight this fact in your milestone documentation** and in the source code if applicable! **Projects that submit other people's work without proper attribution will be immediately terminated.**

### Overview

- **Total Estimated Duration:** Duration of the whole project (e.g. 2 months)
- **Full-Time Equivalent (FTE):**  Average number of full-time employees working on the project throughout its duration (see [Wikipedia](https://en.wikipedia.org/wiki/Full-time_equivalent), e.g. 2 FTE)
- **Total Costs:** Requested amount in USD for the whole project (e.g. 12,000 USD). Note that the acceptance criteria and additional benefits vary depending on the [level](../README.md#level_slider-levels) of funding requested.

### Milestone 1 - Post-Quantum Algorithms

- **Estimated duration:** 2 months
- **FTE:**  3
- **Costs:** 9,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0  |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and the full online documentation for all algorithms implementened plus the guide for building HD Wallets with Post-Quantum algorithms |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an **article** that explains the post-quantum algorithms implementation and the rules of HD Wallet construction with these algorithms|
| 1. | Substrate module: DIL | We will create a Substrate module that will implement the post-quantum signature algorithms|
| 2. | Substrate module: KYB | We will create a Substrate module that will implement the post-quantum Key Encapsulation Algorithms|
| 3. | Substrate chain | Modules DIL and KYB of our custom chain will provide test functionalities for signatures and Key Encapsulation  |
| 4. | Javascript Library: HDW | We will deliver modified JS libraries for polkadot.js that will implement the functionality for HD Wallets for Javascript wallets|



### Milestone 2 - Use of Quantum Entropy

- **Estimated duration:** 2 months
- **FTE:**  3
- **Costs:** 9,000 USD


| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0  |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and the full online documentation for all algorithms implementened plus the guide for using quantum entropy for Substrate blockchains |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish a **post** that explains the use of quantum entropy for Substrate blockchains|
| 1. | Substrate palette: QRNG | We will create a Substrate palette that will implement the use of entropy|
| 2. | Substrate chain | Module QRNG our custom chain will provide test functionalities for the quantum entropy usage |


### Milestone 3 - Protecting node-node communication and feasibility study

- **Estimated duration:** 3 months
- **FTE:**  3
- **Costs:** 9,000 USD


| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0  |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and the full online documentation for all algorithms implementened for communication protection |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an **article** that explains the post-quantum protection of communication and results of the feasibility study for the use of QKD-like communication|
| 1. | Substrate module or modified library: COMM | We will create a Substrate module or will modify communication library that will implement the protected communication using the Encapsulation Algorithm for key exchange in the node-node communication|
| 3. | Substrate chain | Modules QRNG and COMM of our custom chain will provide test functionalities for secure communication  |


### Milestone 1 - Performance Analysis

- **Estimated duration:** 1 months
- **FTE:**  2
- **Costs:** 3,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0  |
| **0b.** | Documentation | We will provide the full online documentation for all tests and benchmarks performed |
| **0c.** | Testing and Testing Guide | The tests will be fully described and their results documented  |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to run all the test and benchmarks |
| 0e. | Article | We will publish an **article** that will report the results of the tests and benchmarks and will make the recommendation for future deployments of Substrate blockchains with post-quantum algorithms. This article will summarize the entire work.|
| 1. | Substrate testing module: QTEST | We will create a Substrate testing module that will implement the benchmarks and tests|
| 2. | Substrate chain | Module QTEST of our custom chain will provide test functionalities for the modified chain |



## Future Plans

After the successful finalization of this project and positive tests and benchmark results we will be able to rise more funds and build a bigger team which:
* will deliver the public testnet for for the project.

If the results of the feasibility study (Milestone 3) will be positive, we will:
* start working on building QKD-like public testnet assuming the use of specific devices for protecting the communication.


## Additional Information 

**How did you hear about the Grants Program?** - Personal recommendation of the Web3 foundation member

**Patents** - some of the technologies loosly related to this project have been submitted for patent protection by EPO (European Patent Office):

- “A METHOD AND A DEVICE FOR ENCRYPTION KEY DISTRIBUTION AND COMMUNICATION” 

- “QUANTUM CONFERENCE KEY AGREEMENT PROTOCOL AND USE THEREOF IN A DISTRIBUTED SYSTEM” 
