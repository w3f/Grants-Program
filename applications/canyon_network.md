# W3F Open Grant Proposal

- **Project Name:** Canyon Network
- **Team Name:** Canyon Labs
- **Payment Address:** 0x009643f61C7cbc91404aE77Fe65542D098B822d1 (DAI)

## Project Overview :page_facing_up:

### Overview

Canyon is designed to be a permanent storage network built on Substrate, which records the hashes of files on-chain and stores the files off-chain. By blending PoS and a probabilistic proof-of-storage scheme inspired by Arweave, Canyon greatly reduces the barriers to entry for miners, who are incentivized to store as much data as possible for the rewards. Another focus of canyon is also to build a truly useful data sharing system, providing the high availability of data access in the protocol level.

### Project Details

This grant mainly concentrates on the consensus part of canyon network, specifically the PoA consensus will be implemented. Aside from the core consensus algorithm, some indispensable basic components/tools will be built at the same time. Refer to the consensus section of [white paper](https://canyon-network.io/canyon-white-paper/canyon_network.pdf) for more information. We'll also keep updating the technical details in the paper when necessary once more progress is made.

### Ecosystem Fit

There is no doubt that the infrastructure, providing a secure, highly available, low-cost, and easy-to-use decentralized data access service, will be an essential part of Web3.0 applications. Canyon network is created in such a background and tries to mitigate the known problems in the existing decentralized platforms, with a principle of lightweight storage consensus and highly usable protocol level data retrieval mechanism in mind.

## Team :busts_in_silhouette:

### Team members

- Name of team leader: Liu-Cheng Xu

### Contact

- **Contact Name:** Liu-Cheng Xu
- **Contact Email:** xuliuchengxlc@gmail.com
- **Website:** https://canyon-network.io

### Legal Structure

- **Registered Address:** 3 FRASER STREET #05-25, DUO TOWER, SINGAPORE
- **Registered Legal Entity:** Canyon Labs PTE. LTD.

### Team's experience

- Liu-Cheng Xu
  - He has been working as a core developer of several projects in the blockchain field for years.
  - He is the core developer as well as the tech lead of [ChainX](https://github.com/chainx-org/ChainX).
  - He was the early core developer of [Bytom](https://github.com/Bytom/bytom).

### Team Code Repos

- https://github.com/canyon-network
- https://github.com/canyon-network/canyon
- https://github.com/canyon-network/canyon-cli

The GitHub accounts of all team members:

- https://github.com/liuchengxu

### Team LinkedIn Profiles (if available)

- https://www.linkedin.com/in/liucheng-xu-2a639b116/

## Development Status :open_book:

Currently, we already have a skeleton substrate [canyon](https://github.com/canyon-network/canyon) and the Rust CLI [canyon-cli](https://github.com/canyon-network/canyon-cli) to interact with the chain.

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 1.5 months
- **Full-Time Equivalent (FTE):** 1
- **Total Costs:** 15,000 USD

### Milestone 1 — Implement the PoA consensus POC

- **Estimated duration:** 1.5 month
- **FTE:** 1
- **Costs:** 15,000 USD

| Number | Deliverable              | Specification                                                                                                                                                                                                                                                                                                                                                                                                          |
| -----: | ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|    0a. | License                  | GPLv3                                                                                                                                                                                                                                                                                                                                                                                                                  |
|    0b. | Documentation            | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works.                                                                                                                                                                                        |
|    0c. | Testing Guide            | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.                                                                                                                                                                                                                                                                      |
|    0d. | Docker                   | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.                                                                                                                                                                                                                                                                                                          |
|    0e. | Article                  | We will publish an **article** that explains the implementaion details of PoA consensus. We will update our paper with more SPoRA technical details and analysis.                                                                                                                                                                                                                                                      |
|     1. | Node: `cc-rpc`           | We will create a crate that will provides two RPCs: `permastore_submit` and `permastore_retrieve` for storing the data(<=10MiB) respectively                                                                                                                                                                                                                                                                           |
|     2. | Node: `cc-database`      | We will create a crate that will provide the feature of persistent transaction data storage on the top of offchain storage.                                                                                                                                                                                                                                                                                            |
|     3. | Node: `cc-consensus-poa` | We will create a crate that will implement the core algorithm of PoA illustrated in the white paper. This crate will also implement the function of inherent data provider to inject a `DigestItem::Seal` entry providing the proof of access into the block header. We will verify the `DigesteItem::Seal(PoA)` item in the block header by wrapping a poa import queue component into the current babe block import. |
|     4. | Node: `pallet-poa`       | We will create a pallet that will implement `ProvideInherent` to make use of the inherent data created in step 3, create an inherent extrinsic `update_storage_capacity` recording the storage capacity of block author on-chain.                                                                                                                                                                                      |
|     5. | Rust CLI: `submit`       | We will extend canyon-cli by adding two new commands: `submit` to store the data from CLI which calls `permastore_submit` internally, `submit-and-store` will firstly call `submit` and send the extrinsic `permastore::store` to actually store the data onto the network.                                                                                                                                            |

`cc-rpc` RPCs:

- `permastore_submit`

  - `fn submit(value: Bytes) -> Result<H256>`
  - user can send arbitray data bytes(<=10MiB) to the node, the chunk root will be returned once stored successfully.

- `permastore_retrieve`

  - `fn retrieve(key: Bytes) -> Result<Option<Bytes>>`
  - user can retrieve the data(<=10MiB) directly using this PRC, the key is the chunk root of the data.

## Future Plans

The short term plans:

- Implement the pricing strategy for the `store` transaction in the context of paying once for the perpetual storage.
- Support uploading/retrieving data chunks for large files(>10MiB).
- Implement transaction data sync between the multiple nodes.
- A comprehensive design for Staking system on the top of NPOS, taking the factor of validator that also behaves a storage service provider into account.
- Improve and audit the code to make it production-ready.
- Build client tools for storing data onto the network easily, especially the web UI.
- Build a network data explorer that shows the distribution of data in network nodes.

The long term plans:

- Do more researches and develop a more effective data sharing mechanism, rendering canyon network a highly useable data retrieval platform.
- Foster more web3.0 applications using the decentralized storage infrastructure provided by canyon network.

## Additional Information :heavy_plus_sign:

The earlier successful W3F grant name is `Canyon Network`, which is mainly about the early research problems on the decentralized storage network and can be considered the starting point of works afterward.
