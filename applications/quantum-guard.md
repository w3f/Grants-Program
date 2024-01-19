# Quantum Guard MVP

> This document will be part of the terms and conditions of your agreement and therefore needs to contain all the required information about the project. Don't remove any of the mandatory parts presented in bold letters or as headlines! See the [Grants Program Process](https://github.com/w3f/Grants-Program/#pencil-process) on how to submit a proposal.

- **Team Name:** Andrea Di Franco
- **Payment Address:** Polkadot Asset Hub (USDC) 13jYU81g4FjBWX4ZMW2o42JCeneqB7xEHfs2muhPfW3RYkq
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 1

## Project Overview :page_facing_up:

### Overview

Quantum computation is one of the biggest threats to every cryptographic system in the mid future, including blockchains. While the level of computational capabilities currently available for quantum computers aren't enough to break the cryptography behind any blockchain project yet, it's expected that this will be achieved in the next years, potentially way before than what's predicted.
In order to be considered quantum-resistant, a blockchain must have the following characteristics:
- Rely on quantum-resistant cryptographic primitives for every event that requires digital signatures, such as signing transactions;
- Use a quantum-resistant communication protocol between nodes.

On August 28th, 2023, the National Institute of Standards and Technology (NIST) issued an official document stating that 4 algorithms will be standardized as official PQC.
[NIST Document available here](https://www.federalregister.gov/d/2023-18197/p-12)
Among the selected algorithms, the document cites:
  - CRYSTALS-KYBER algorithm for key exchange;
  - CRYSTALS-Dilithium for asymmetric cryptography.

QuantumGuard is a project that aims to create a safe quantum-resistant parachain in the Polkadot environment, based on NIST-selected quantum-safe cryptographic algorithms. The parachain will enable the use of NIST-standardized quantum-safe algorithms for every crucial cryptographic operation, such as key generation, signing transactions and communication between nodes.


### Project Details

The current Grant application will focus on enabling quantum-safe cryptography for address generation and signing transaction in a Substrate-based blockchain. In order to achieve this, the development will focus on two objectives:

- Customization of Substrate crypto pallet in order to use CRYSTALS-Dilithium for addresses generation and signing transaction: in order to achieve this, it'll be used the Rust integration of CRYSTALS-dilithium algorithm as published in the following Github repository: https://github.com/pq-crystals/dilithium under Apache 2.0 License;
- A custom version of browser wallet extension (Polkadot.js or Talisman) which allows to store keyparis and sign transaction using CRYSTALS-Dilithium cryptography: this will be developed using the Javascript version of the CRYSTALS-dilithium algorithm published as npm package https://www.npmjs.com/package/dilithium-crystals under MIT License, adapting it for the use with a Hierarchical Deterministic wallet.

### Ecosystem Fit

The ultimate goal of the project is to provide a full parachain that will act as a vault for every other parachain in the Polkadot environment, which do not use quantum-safe cryptography. Every address can bridge their asset to QuantumGuard and secure them, this way if the original blockchain gets attacked and informations get lost, they can still live in the quantum-safe vault.

## Team :busts_in_silhouette:

### Team members

- Andrea Di Franco

### Contact

- **Contact Name:** Andrea Di Franco
- **Contact Email:** difranco.developer@gmail.com

### Legal Structure

- **Registered Address:** Via Aniello Falcone 273, 80127 Napoli NA Italy
- **Registered Legal Entity:** Individual

### Team's experience

Andrea Di Franco is a senior software developer and blockchain specialist, working in R&D for several EU-funded research projects involving blockchain, cryptography and digital identity. He's been working for 4 years in a European company deeply involved in digital transformation, 
studying and applying many different cryptographic algorithms such as:
- Hashing functions SHA-2, SHA-3;
- RSA asymmetric cryptography applied to digital identity and PKI infrastructure;
- Elliptic curve cryptography algorithms, applied to different blockchains, such as SECP256K1, ED25519;
- Ring signature schemes;
- Omomorphic encryption.

### Team Code Repos

- https://github.com/andredif

### Team LinkedIn Profiles (if available)

- https://www.linkedin.com/in/andrea-di-franco/


## Development Status :open_book:

The development will start with the approval of the Grant application.

## Development Roadmap :nut_and_bolt:

### Overview

* **Description** Development of QuantumGuard - MVP - Phase 0.5
* **Total Estimated Duration:** 14 Person Weeks
* **Full-time equivalent (FTE):**  1
* **Total Costs:** 9,800 USDC

### Milestone 1 — Quantum-safe cryptographic algorithms for keypairs

- **Estimated duration:** 8 weeks
- **FTE:**  1
- **Costs:** 5,000 USDC

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | Documentation includes: Code Documentation, Configuration Documentation, and a basic **tutorial** that explains how a user can start a node and send test transactions. |
| 0c. | The code will have unit-test coverage  to ensure functionality; in the guide we will describe how to run the tests |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1. | Substrate module: CRYSTALS-crypto | We will create a Substrate module that will enable the use of CRYSTALS-Dilithium as a cryptography algorithm for generating keypairs valid in the blockchain. |
| 2. | Substrate chain | The new Substrate module enabling CRYSTALS-Dilithium cryptography will be used to scaffold a node of a new quantum-safe chain. |

### Milestone 2 — Custom browser extension using quantum-safe keypairs

- **Estimated Duration:** 6 weeks
- **FTE:**  1
- **Costs:** 4,800 USD

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0  |
| 0b. | Documentation | Documentation includes: Code Documentation, Extension Documentation, Readme file |
| 0c. | Testing Guide | The guide will explain how to install the extension and how to use it in order to send transactions |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | A Medium article will be written, in order to explain the work done as part of the grant. |
| 1. | Custom extension: X | We will create a custom version of crypto wallet as a browser extension, in order to be able to generate, store and use quantum-safe keypairs. |

## Future Plans

After the successful completion of the current Grant, the plan is to create a small team in order to bring the project to a further stage, on the path to a consolidate parachain project.

Next plans include:
* Implementation of post-quantum communication protocol between nodes, using NIST-selected CRYSTALS-KYBER algorithm;
* Creation of a network of several QuantumGuard nodes;
* Public testnet. 

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation Website 

* What work has been done so far?  
This is our first grant as a part of bringing innovation to the web3 Ecosystem.
* Are there are any teams who have already contributed (financially) to the project?  
No
* Have you applied for other grants so far?  
No
