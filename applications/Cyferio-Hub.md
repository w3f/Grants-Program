# Cyferio Hub

- **Team Name:** Cyferio Labs
- **Payment Details:**
  // TODO
  - **DOT**: For the **DOT** compensation, please provide a Polkadot address (e.g. 15oF4...).
  - **Payment**: In case of payment in **USDC or USDT**, please provide a Polkadot AssetHub address and the currency (e.g. 15oF4... (USDC)). In the case of **fiat** payment, please share your bank account privately with grants@web3.foundation via your contact email (see below) and list here the date and time of your email (e.g. Fiat 24.12.1971, 11:59). 
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 3

## Project Overview :page_facing_up:

Cyferio Hub is a confidential rollup router designed to bring scalability, privacy, and interoperability to Polkadot and broader blockchain ecosystems such as Ethereum, Bitcoin, and Solana. The Cyferio SDK simplifies the creation and management of confidential rollups, offering a toolkit for privacy-preserving applications. Together, they enable developers to deploy scalable, interoperable, and confidential solutions efficiently.


### Overview

Cyferio Hub, built on top of Substrate, serves as a cache layer that links rollups to the Polkadot parachains. This integration simplifies cross-chain communication, enhances scalability, and allows developers to easily build and deploy applications. By providing a seamless settlement layer, Cyferio Hub extends the capabilities of existing rollups across various blockchain networks.

Moreover, with the Cyferio SDK, developers can easily create confidential rollups that are compatible with existing Substrate-based applications. This compatibility ensures a smooth transition path for developers who are already familiar with Substrate's framework and ecosystem. Also, it brings privacy features to the table using FHE (Fully Homomorphic Encryption), such as confidential transactions, confidential governance, and confidential identity layer, engaging new users to the ecosystem.

Last but not least, Cyferio Hub has been recognized for its innovative approach, winning the first prize in the "Building a Blockchain Based on Polkadot SDK" category and the Best Innovation Award at the Polkadot Hackathon 2024 in Bangkok. The team is confident in the project's potential to advance confidential applications across the blockchain ecosystem.

### Project Details

The Cyferio Hub project aims to unlock confidential applications with FHE rollups that are connected to the Polkadot and broader blockchain ecosystem. Our final product will be a fundamental infrastructure with Cyferio SDK as FHE rollup framework and Cyferio Hub as a rollup router connecting these confidential rollups to the Polkadot parachains and other L1s. This will enable developers to build applications with privacy-preserving use cases. 

Cyferio Hub is built on Substrate, leveraging its modular architecture to integrate with multiple rollups, parachains, and L1s. Cyferio SDK is a modular rollup framework with FHE integration that simplifies the creation and management of confidential rollups, providing developers with the necessary tools to build privacy-preserving applications. Our prior work includes a Proof of Concept (PoC) and a Minimum Viable Product (MVP) as documented in [Cyferio Hub](https://github.com/cyferio-labs/cyferio-hub-node), [Cyferio SDK](https://github.com/cyferio-labs/tmc), and [Website](https://cyferio.com).

Additionally, we will further enhance the scalability and speed of transaction processing within Cyferio Hub by collaborating with DragonflyDB to develop an in-memory storage solution. This collaboration will ensure that our infrastructure can support the growing demands of privacy-preserving applications and cross-chain interoperability, providing a robust and efficient solution for developers.

Furthermore, we are committed to fostering innovative privacy-preserving projects within the Polkadot ecosystem by incubating teams that are building novel confidential applications using Cyferio's tech stack. Our incubation program will provide these teams with the necessary resources, mentorship, and support to grow and scale their projects. By leveraging Cyferio Hub and Cyferio SDK, these teams will be able to develop cutting-edge privacy-preserving solutions that enhance the overall capabilities of the Polkadot network.


### Ecosystem Fit

Cyferio Hub unlock a new dimension of applications with privacy-preserving use cases by integrating FHE rollups and cross-chain interoperability on the Polkadot ecosystem. It serves as a vital settlement layer and cache, significantly reducing the costs and technical barriers for dApp developers.

Our target audience includes parachain developers and appchain developers seeking confidential rollup solutions and cross-chain data interoperability.

Projects such as Fhenix offer FHE rollup solutions on Ethereum, but Cyferio Hub is the first project that brings FHE rollups to the Polkadot ecosystem and makes it furthermore compatible with the broader blockchain ecosystem.


## Team :busts_in_silhouette:

### Team members

- Team Leader: Henry Liu
- Team Members: Moven Tsai, Frank Wang

### Contact

- **Contact Name:** Henry Liu
- **Contact Email:** henry@cyferio.com
- **Website:** cyferio.com

### Legal Structure

- **Registered Address:** N/A
- **Registered Legal Entity:** N/A

### Team's experience

Our team has extensive experience within the blockchain industry, particularly in privacy-preserving technologies such as FHE and ZK. Previously, we developed a TMC, Trusted Modular Calculator (now Cyferio SDK) that builds on top of Sovereign SDK and provides confidential modules using TFHE-rs for privacy-focused applications.

Henry Liu and Frank Wang are core contributors to the Sovereign SDK, a novel modular rollup framework, further demonstrating our commitment to advancing the rollup technology landscape. Moven Tsai has been working on programmable cryptography and is a grant at PSE for the ZK acceleration with mobile GPU project (https://github.com/zkmopro/gpu-acceleration). 

### Team Code Repos

- https://github.com/cyferio-labs/cyferio-hub-node
- https://github.com/cyferio-labs/tmc

Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine.

- https://github.com/Zombieliu
- https://github.com/moven0831
- https://github.com/vladilen11

## Development Status :open_book:

The Cyferio Hub MVP has been successfully integrated with Sui and Babylon, demonstrating initial cross-chain capabilities. Now, we aim for integration with the Polkadot Ecosystem and leverage MPC protocol for robust FHE key management. 

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration**: 6 months
- **Full-Time Equivalent (FTE)**: 3 FTE
- **Total Costs**: 100,000 USD
- **DOT %**: 50%

### Milestone 1 — Adapters Implementation

- **Estimated Duration**: 2 months
- **FTE**: 3
- **Costs**: 20,000 USD

| Number  | Deliverable               | Specification                                                                                     |   |
| ------- | ------------------------- | ------------------------------------------------------------------------------------------------- | - |
| **0a.** | License                   | Apache 2.0                                                                                        |   |
| **0b.** | Documentation             | Provide inline code documentation and tutorials for deploying adapters on Acala, Aster, Moonbeam. |   |
| **0c.** | Testing and Testing Guide | Unit tests for all adapter implementations and a guide on running these tests.                    |   |
| **1.**  | Adapter Implementation    | Implement adapters on Acala, Aster, and Moonbeam for use as DA and settlement layers.             |   |

### Milestone 2 — FHE Key Management Protocol Integration

- **Estimated Duration**: 2 months
- **FTE**: 3
- **Costs**: 40,000 USD

| Number  | Deliverable                 | Specification                                                                                                                                   |   |
| ------- | --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | - |
| **0a.** | License                     | Apache 2.0                                                                                                                                      |   |
| **0b.** | Documentation               | Extend the documentation to include workflows for integrating MPC Key Management Protocol.                                                      |   |
| **0c.** | Testing Guide               | Integration tests for secure key management and its impact on confidential rollup applications.                                                 |   |
| **1.**  | MPC Key Management Protocol | Integrate MPC Key Management Protocol for FHE keys to ensure the robustness of confidential applications on rollups created by Cyferio SDK. |   |

### Milestone 3 — Live Testnet Deployment

- **Estimated Duration**: 2 months
- **FTE**: 3
- **Costs**: 40,000 USD

| Number  | Deliverable   | Specification                                                                          |   |
| ------- | ------------- | -------------------------------------------------------------------------------------- | - |
| **0a.** | License       | Apache 2.0                                                                             |   |
| **0b.** | Documentation | Update the documentation with details on deploying and managing the testnet.           |   |
| **0c.** | Testing Guide | Integration testing for live testnet operations, ensuring performance and reliability. |   |
| **1.**  | Live Testnet  | Deploy and test the live testnet for Cyferio Hub.                                      |   |


## Future Plans

In the short term, we intend to onboard existing rollup projects to leverage Cyferio Hub's decentralized cache and settlement functionalities, enabling seamless integration with Polkadot. In the long term, Cyferio Labs aims to sustain the project's growth by incorporating additional zkVM solutions and introducing privacy-preserving functionalities for dApp developers.

## Additional Information :heavy_plus_sign:

- **How did you hear about the Grants Program?**: Polkadot Hackathon 2024 in Bangkok
