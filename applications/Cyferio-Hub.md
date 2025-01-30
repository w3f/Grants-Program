# Cyferio Hub

- **Team Name:** Cyferio Labs
- **Payment Address:** 14McWFng3MFhG3E7XVgiHXBvLMYasdJWidmbrG2LZW46LNJU
- **Level:** 2

## Project Overview :page_facing_up:

Cyferio Hub is a specialized rollup router designed to bring scalability, interoperability, and advanced cryptographic computations to Polkadot, its parachains, and external ecosystems such as Ethereum, Bitcoin, and Solana. The Cyferio SDK complements this by simplifying the creation and management of FHE-based rollups, offering developers a toolkit to deploy scalable and interoperable solutions.

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

With the Cyferio SDK, developers can create rollups that leverage homomorphic encryption (FHE) and are compatible with existing Substrate-based applications. This ensures a smooth transition for those already familiar with Substrate's framework and ecosystem.

<p align="center">
 <img src="https://github.com/cyferio-labs/cyferio-hub-node/blob/main/assets/w3f/Cyferio%20SDK%20Arch.png?raw=true" alt="Cyferio Hub"/>
    <br>
    <em>Architecture of Cyferio SDK</em>
</p>

Last but not least, Cyferio Hub has been recognized for its innovative approach, winning <u>**the first prize in the "Building a Blockchain Based on Polkadot SDK" category**</u> and <u>**the Best Innovation Award**</u> at the [Polkadot Hackathon 2024 in Bangkok](https://x.com/OneBlock_/status/1857774803396210770). The team is confident in the project's potential to advance novel rollup technologies across the blockchain ecosystem.

### Project Details

Cyferio Hub aims to enable advanced computations through FHE rollups connected to Polkadot and the broader blockchain ecosystem. Our solution will serve as fundamental infrastructure for FHE-based rollups, with the Cyferio SDK as a modular framework and Cyferio Hub as a router connecting these rollups to Polkadot parachains and other L1s. This will allow developers to build specialized applications that are difficult to achieve with general-purpose rollups.

Built on Substrate, Cyferio Hub leverages its modular architecture to integrate with multiple rollups, parachains, and L1s. Cyferio SDK is a modular rollup framework that simplifies the creation and management of FHE-based rollups, providing developers with tools to build applications requiring advanced cryptographic computations. Our prior work includes a Proof of Concept (PoC) and a Minimum Viable Product (MVP) as documented in [Cyferio Hub](https://github.com/cyferio-labs/cyferio-hub-node), [Cyferio SDK](https://github.com/cyferio-labs/tmc), and [Website](https://cyferio.com).

Additionally, we will further enhance the scalability and speed of transaction processing within Cyferio Hub by collaborating with DragonflyDB to develop an in-memory storage solution. This will ensure that our infrastructure can support growing demands and cross-chain interoperability, providing a robust and efficient solution for developers.

Furthermore, we are committed to fostering innovative projects within the Polkadot ecosystem by incubating teams that build novel applications on the Cyferio tech stack. Our incubation program will provide these teams with resources, mentorship, and support to scale their projects. By leveraging Cyferio Hub and the Cyferio SDK, these teams will develop cutting-edge solutions that enhance the capabilities of the Polkadot network.

<p align="center">
 <img src="https://github.com/cyferio-labs/cyferio-hub-node/blob/main/assets/w3f/Cyferio%20SDK%20Flow.png?raw=true" alt="Cyferio Hub"/>
    <br>
    <em>Flow of Cyferio SDK</em>
</p>


### Ecosystem Fit

Cyferio Hub unlocks a new dimension of advanced computational possibilities by integrating FHE rollups with cross-chain interoperability on the Polkadot ecosystem. Our target audience includes parachain developers and appchain developers seeking FHE-based rollup solutions and cross-chain data interoperability.

With upcoming upgrades to JAM (Join-Accumulate Machine), we envision that rollups created by the Cyferio SDK can be deployed on JAM, leveraging its advantages to enhance developer accessibility, economic flexibility, and scalability.

We also plan to integrate with Acala to leverage its mature DeFi platform and provide a new range of DeFi applications powered by FHE-based rollups. Projects such as Fhenix offer FHE rollup solutions on Ethereum, but Cyferio Hub is the first project to bring FHE-based rollups to the Polkadot ecosystem and make them compatible with the broader blockchain ecosystem. Through cross-chain settlement and interoperability, we aim to expand the Polkadot ecosystem by bridging other rollup-based applications.

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

Our team has extensive experience within the blockchain industry, particularly in advanced cryptographic technologies such as FHE and ZK. Previously, we developed an FHE rollup framework (now Cyferio SDK) that builds on top of the Sovereign SDK and provides specialized modules using TFHE-rs.

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
- Incorporate additional zkVM solutions and advanced cryptographic features for dApp developers.

## Additional Information :heavy_plus_sign:

- **How did you hear about the Grants Program?**: Polkadot Hackathon 2024 in Bangkok
