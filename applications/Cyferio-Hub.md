# Cyferio Hub

- **Team Name:** Cyferio Labs
- **Payment Address:** 14McWFng3MFhG3E7XVgiHXBvLMYasdJWidmbrG2LZW46LNJU
- **Level:** 2

## Project Overview :page_facing_up:

Cyferio Hub is a confidential rollup router designed to bring scalability, privacy, and interoperability to Polkadot, its parachains, and external ecosystems such as Ethereum, Bitcoin, and Solana. The Cyferio SDK complements this by simplifying the creation and management of confidential (FHE-based) rollups, offering developers a toolkit to deploy privacy-preserving, scalable, and interoperable solutions.


<p align="center">
 <img src="https://github.com/cyferio-labs/cyferio-hub-node/blob/main/assets/w3f/Cyferio%20Hub.png?raw=true" alt="Cyferio Hub"/>
    <br>
    <em>Overview of Cyferio Hub</em>
</p>


### Overview

Cyferio Hub, built on top of Substrate, serves as a cache layer that links rollups to the Polkadot parachains. This integration simplifies cross-chain communication, enhances scalability, and allows developers to easily build and deploy applications. By providing a seamless settlement layer, Cyferio Hub extends the capabilities of existing rollups across various blockchain networks.

<p align="center">
 <img src="https://github.com/cyferio-labs/cyferio-hub-node/blob/main/assets/w3f/Cyferio%20Hub%20Arch.png?raw=true" alt="Cyferio Hub"/>
    <br>
    <em>Architecture of Cyferio Hub</em>
</p>

Moreover, with the Cyferio SDK, developers can easily create confidential rollups that are compatible with existing Substrate-based applications. This compatibility ensures a smooth transition path for developers who are already familiar with Substrate's framework and ecosystem. Also, it brings privacy features to the table using FHE (Fully Homomorphic Encryption), such as confidential transactions, confidential governance, and confidential identity layer, engaging new users to the ecosystem.

<p align="center">
 <img src="https://github.com/cyferio-labs/cyferio-hub-node/blob/main/assets/w3f/Cyferio%20SDK%20Arch.png?raw=true" alt="Cyferio Hub"/>
    <br>
    <em>Architecture of Cyferio SDK</em>
</p>

Last but not least, Cyferio Hub has been recognized for its innovative approach, winning <u>**the first prize in the "Building a Blockchain Based on Polkadot SDK" category**</u> and <u>**the Best Innovation Award**</u> at the [Polkadot Hackathon 2024 in Bangkok](https://x.com/OneBlock_/status/1857774803396210770). The team is confident in the project's potential to advance confidential applications across the blockchain ecosystem.

### Project Details

The Cyferio Hub project aims to unlock confidential applications with FHE rollups that are connected to the Polkadot and broader blockchain ecosystem. Our solution will be a fundamental infrastructure for all confidential applications with Cyferio SDK as FHE rollup framework and Cyferio Hub as a rollup router connecting these confidential rollups to the Polkadot parachains and other L1s. This will enable developers to build applications with comprehensive privacy-preserving use cases that are hard to achieve with general-purpose FHE rollups.

Cyferio Hub is built on Substrate, leveraging its modular architecture to integrate with multiple rollups, parachains, and L1s. Cyferio SDK is a modular rollup framework with FHE integration that simplifies the creation and management of confidential rollups, providing developers with the necessary tools to build privacy-preserving applications. Our prior work includes a Proof of Concept (PoC) and a Minimum Viable Product (MVP) as documented in [Cyferio Hub](https://github.com/cyferio-labs/cyferio-hub-node), [Cyferio SDK](https://github.com/cyferio-labs/tmc), and [Website](https://cyferio.com).

Additionally, we will further enhance the scalability and speed of transaction processing within Cyferio Hub by collaborating with DragonflyDB to develop an in-memory storage solution. This collaboration will ensure that our infrastructure can support the growing demands of privacy-preserving applications and cross-chain interoperability, providing a robust and efficient solution for developers.

Furthermore, we are committed to fostering innovative privacy-preserving projects within the Polkadot ecosystem by incubating teams that are building novel confidential applications using Cyferio's tech stack. Our incubation program will provide these teams with the necessary resources, mentorship, and support to grow and scale their projects. By leveraging Cyferio Hub and Cyferio SDK, these teams will be able to develop cutting-edge privacy-preserving solutions that enhance the overall capabilities of the Polkadot network.

<p align="center">
 <img src="https://github.com/cyferio-labs/cyferio-hub-node/blob/main/assets/w3f/Cyferio%20SDK%20Flow.png?raw=true" alt="Cyferio Hub"/>
    <br>
    <em>Flow of Cyferio SDK</em>
</p>


### Ecosystem Fit

Cyferio Hub unlocks a new dimension of applications with privacy-preserving use cases by integrating FHE rollups and cross-chain interoperability on the Polkadot ecosystem. Our target audience includes parachain developers and appchain developers seeking confidential rollup solutions and cross-chain data interoperability.

For instance, with the upgrades of JAM (Join-Accumulate Machine), we envision that the FHE rollups created by Cyferio SDK can be deployed on JAM and leverage its advantages to enhance Developer Accessibility, Economic Flexibility with Agile Coretime, and improved Scalability.

Moreover, we expect to integrate with Acala to leverage its mature DeFi platform and provide a new flavor of DeFi applications with on-chain confidentiality provided by FHE rollup. Privacy-preserving applications such as confidential stablecoin payment system, confidential lending protocol, and confidential DEXs can be built on top of it.

Projects such as Fhenix offer FHE rollup solutions on Ethereum, but Cyferio Hub is the first project that brings FHE rollups to the Polkadot ecosystem and makes it furthermore compatible with the broader blockchain ecosystem. Therefore, with the cross-chain settlement and interoperability features provided by Cyferio Hub, we aim to expand the Polkadot ecosystem by bringing applications on other rollups to it.

## Team :busts_in_silhouette:

### Team members

- Team Leader: Henry Liu
- Team Members: Moven Tsai, Frank Wang, Bob Chen

### Contact

- **Contact Name:** Henry Liu
- **Contact Email:** henry@cyferio.com
- **Website:** cyferio.com

### Legal Structure

- **Registered Address:** N/A
- **Registered Legal Entity:** N/A

### Team's experience

Our team has extensive experience within the blockchain industry, particularly in privacy-preserving technologies such as FHE and ZK. Previously, we developed FHE rollup framework (now Cyferio SDK) that builds on top of Sovereign SDK and provides confidential modules using TFHE-rs for privacy-focused applications.

Henry Liu and Frank Wang are core contributors to the Sovereign SDK, a novel modular rollup framework, further demonstrating our commitment to advancing the rollup technology landscape. Moven Tsai has been working on programmable cryptography and is a grant at PSE for the ZK acceleration with mobile GPU project (https://github.com/zkmopro/gpu-acceleration). 

### Team Code Repos

- https://github.com/cyferio-labs/cyferio-hub-node
- https://github.com/cyferio-labs/cyferio-sdk

### Team members' GitHub accounts:

- https://github.com/Zombieliu
- https://github.com/moven0831
- https://github.com/vladilen11
- https://github.com/web3olalala

## Development Status :open_book:

The Cyferio Hub MVP has been successfully integrated with Sui and Babylon, demonstrating initial cross-chain capabilities. Now, we aim for integration with the Polkadot Ecosystem and leverage MPC protocol for robust FHE key management. 

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 4 months
- **Full-Time Equivalent (FTE):** 2 FTE
- **Total Costs:** 30,000 USD
- **DOT %:** 50%

### Milestone 1 — Adapters Implementation

- **Estimated Duration:** 2 months
- **FTE:** 2
- **Costs:** 15,000 USD

| Number | Deliverable               | Specification                                                         |
| ------ | ------------------------- | --------------------------------------------------------------------- |
| **0a.**| License                   | Apache 2.0                                                            |
| **0b.**| Documentation             | Inline code docs and a tutorial for integrating Cyferio SDK and Hub.  |
| **0c.**| Testing and Testing Guide | Unit tests for adapter implementations with instructions to run them. |
| **0d.**| Article/Tutorial          | An article/tutorial explaining Cyferio Hub’s adapter architecture.    |
| **1.** | Substrate Module: Router  | A router module on Cyferio Hub to store the Cache Rollup blob.        |
| **1a.**| Cyferio SDK Integration   | An FHE rollup frameworkintegrated with Cyferio Hub as a cache layer for blobs. |
| **1b.**| Cacher Service            | A cacher server to accept the blob from Cyferio Hub and forward it to the appropriate layer. |
| **2.** | Docker                    | A Dockerfile to run and test the chain end-to-end.                    |

### Milestone 2 — FHE Key Management Protocol Integration

- **Estimated Duration:** 2 months
- **FTE:** 2
- **Costs:** 15,000 USD

| Number | Deliverable                 | Specification                                                                                          |
| ------ | --------------------------- | ------------------------------------------------------------------------------------------------------ |
| **0a.**| License                     | Apache 2.0                                                                                             |
| **0b.**| Documentation               | Extended docs including workflows for integrating Zama KMS for FHE keys.                               |
| **0c.**| Testing Guide               | Integration tests ensuring robust key management and confidentiality.                                   |
| **0d.**| Article/Tutorial            | An article/tutorial detailing the KMS integration process and benefits.                                |
| **1.** | Zama KMS Integration        | Integrate Zama KMS Protocol to manage FHE keys securely for rollups built with Cyferio SDK.                     |
| **2.** | Cyferio Client              | A client sdk for users to encrypt inputs into FHE ciphertexts with ZKP generated for the validity of the ciphertexts for the FHE rollup.                            |
| **3.** | Zama ZKP Module             | Module for sending encrypted inputs and corresponding ZKP to Zama KMS node for verification, ensuring robust validity checks.          |

## Future Plans

In the short term, we will:

- Deploy a live testnet to validate performance, reliability, and cross-chain functionalities.
- Enhance scalability by integrating an in-memory storage solution (Float DB using Jellyfish Merkle Tree and DragonflyDB).
- Integrate with JAM to showcase interoperability within the Polkadot ecosystem.

In the long term, Cyferio Labs aims to sustain the project’s growth by:

- Onboarding additional rollup projects to leverage our decentralized cache and settlement functionalities.
- Incorporating additional zkVM solutions and advanced privacy-preserving features for dApp developers.

## Additional Information :heavy_plus_sign:

- **How did you hear about the Grants Program?**: Polkadot Hackathon 2024 in Bangkok
