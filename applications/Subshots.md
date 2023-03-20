# Subshots (Blockchain Snapshot Repository)

- **Team Name:** CESS LAB
- **Payment Address:** 0x96a661ee0D829DF7c424D4415a51FFc256EEEd8A(USDC)
- **Level:** 2

## Project Overview 

### Overview

#### Background

As time passes and the number of blocks in a blockchain network increases, the size of the full node's block data also grows. For instance, the Polkadot network's node archive database size has reached 563GiB, and the Kusama network's node archive database size has reached 945GiB. Therefore, a new full node joining the network would need several days to synchronize blocks from the first block to the latest block height. To save time, it's recommended to download the blockchain snapshot file locally and synchronize it to the snapshot's block height before synchronizing with the network's latest block height.

Although most blockchain networks do not provide official snapshot downloads, many blockchain communities offered excellent snapshot download services using Amazon S3 to store snapshot files through HTTP during the early stages of blockchain network development. However, as the snapshot files grow larger with the network, the service providers cannot afford the increasing maintenance costs, especially storage and bandwidth costs, and have stopped providing such services.

Therefore, we plan to establish a blockchain snapshot repository using the file storage and high-speed download capabilities of the CESS network.

#### Current Solution

[Polkashots](https://polkashots.io/) provides snapshot downloads for Polkadot and Kusama. However, this is a centralized service and the snapshot files are only provided by the Polkashots team. Although they have mentioned supporting more blockchains in the future, we are cautiously optimistic about running various blockchain full nodes solely for the purpose of providing snapshot files.

Therefore, we believe that there is currently a lack of a universal snapshot download solution in the Polkadot ecosystem. That's why we designed Subshots - a decentralized blockchain snapshot repository. Anyone can upload blockchain snapshots to the repository, and anyone can download the snapshot files to quickly deploy a chain node.

#### Features

- **Simple and User-Friendly**: With easy setup in the early stages, no need for manual intervention later on, Subshots automatically generates and uploads snapshots at regular intervals. One-click to download snapshots.

- **Low Operating Costs**: Compared to storing hundreds of gigabytes of snapshot files on cloud storage platforms like Amazon S3 or Google Cloud Storage, using the CESS network reduces expenses by 90%. More importantly, uploaders do not have to pay any bandwidth costs, no matter how many people download the snapshot.

- **Open-Source and Secure**: Subshots provides fully open-source code and does not take responsibility for managing or maintaining services. Project owners deploy and manage all services, avoiding trust costs.

### Project Details

We have designed a set of explorer modular components for the Substrate ecosystem, which can be used by stakeholders (such as miners and storage users) and other users.Polkadot, Kusama and Rococo will be supported in first version. Users can inquire about basic information in the network, such as space information, rankings, blocks, transactions, addresses, visual trend charts, etc. Substats is open-source and has flexible scalability in both network and its functionalities. Hence early-stage projects or individual developers can easily integrate our components based on their business needs. The data analysis module and custom components are the two core functions of Substats.

#### High level design

![Proposal architecture](https://user-images.githubusercontent.com/6647863/226307035-cf68a5af-88bc-4090-8fab-40fe55e12f53.png)

*Figure 1: Proposal architecture*

- **Subshots CLI**: Generates snapshot files, manually or automatically uploads snapshot files to CESS, and queries and downloads snapshot files from CESS.

- **Smart Contract**: Deploy the ink! smart contract on CESS. When Subshots CLI uploads a snapshot file, it writes the snapshot information to the smart contract. When Subshots CLI queries and downloads a snapshot, it reads data from the smart contract to obtain the snapshot file hash.

- **Subshots Portal**: The Subshots page is embedded in the [substats](https://substats.cess.cloud/) block explorer, and it reads snapshot information from the contract. The snapshot list page displays brief information about downloadable snapshots, and the snapshot details page displays detailed information such as network, snapshot file hash, size, block height, block hash, and update time.

#### Typical example

Snapshot push, pull and browse are the three core features for the Subshots Hub. They are illustrated in detail below.

![Workflow](https://user-images.githubusercontent.com/6647863/226304502-a1ca05a3-8124-4394-9aa6-18e30d701dc1.svg)

*Figure 2: Workflow*

- **To push a snapshot, Alice needs to**

1. Install Subshots CLI on the node machine that will be used for publishing the snapshot.
2. Create a CESS account and purchase CESS storage space.
3. Configure the Subshots CLI configuration file.
4. Run the command to publish the snapshot or run a command to schedule regular snapshot publishing tasks.
5. Subshots CLI compresses and generates the snapshot file and uploads it to CESS storage.
6. Subshots CLI calls the Subshots contract to save snapshot information.

- **To pull a snapshot, Bob needs to**

1. Install Subshots CLI on the machine where the new node will be deployed.
2. Configure the Subshots CLI configuration file.
3. Run the command to pull the snapshot.
4. Subshots CLI reads the snapshot information from the Subshots contract.
5. Subshots CLI downloads and decompresses the snapshot file from CESS storage.

- **To browse the snapshot info, Charlie needs to**

1. Navigate to the Subshots Portal page in their browser.
2. Subshots Portal retrieves snapshot information from the Subshots smart contract.
3. Charlie searches for networks with available snapshots on the snapshot list page.
4. Charlie can view usage instructions and copy the command to pull the snapshot on the snapshot details page.

#### Mockups/designs of any UI components



#### API specifications of the core functionality

**Subshots CLI will have following config file.**

- cessRpcAddr：The websocket link that interacts with CESS.

    *Only pull requires.*
- snapshotPath: The storage path of downloaded snapshots.

    *Only push requires.*
- localRpcAddr：The websocket link that interacts with local node for snapshotting.
- chainDbPath：The chain database path of local node for snapshotting.
- cessAccount: The account address on CESS.
- cessAccountPhrase: Account private key, which is used as the user's mnemonic when signing transactions.

**Subshots CLI will have following commands.**

- Print out all the available commands.

    ```
    subshots --help
    ```

- List all the available snapshots in the network.

    ```
    subshots list
    ```

- Pull a snapshot.

    ```
    subshots pull NETWORK-NAME
    ```

- Push a subshot.

    ```
    subshots push
    ```

- Start the scheduled snapshot task.

    ```
    subshots cron
    ```

### Ecosystem Fit

Help us locate your project in the Polkadot/Substrate/Kusama landscape and what problems it tries to solve by answering each of these questions:

- Where and how does your project fit into the ecosystem?

Our project provides the Polkadot/Substrate ecosystem a quick and convenient service that is in an open-source and low cost way for offering their blockchain snapshots.

- Who is your target audience (parachain/dapp/wallet/UI developers, designers, your own user base, some dapp's userbase, yourself)?

Parachain/dapp/wallet

## Team 👥

### Team members

- Teh Sunn Liu
- Shaka Lavigne
- Yeou Sunn Liu

### Contact

- **Contact Name:** Jessie Dai
- **Contact Email:** [jessie@cess.cloud](mailto:jessie@cess.cloud)
- **Website:** [https://cess.cloud](https://cess.cloud/)

### Legal Structure

- **Registered Address:** 22 St Leonard's Ave, Lostock, Bolton BL6 4JE, England
- **Registered Legal Entity:** Paul David Humphreys

### Team's experience

- In 2019, the CESS team was established and began to design the prototype design of the storage system network's underlying construction. 

- In 2020, CESS completed the design of the Random Rotational Selection consensus mechanism (R²S), Multi-format Data Rights Mechanism (MDRC) and Proof of Data Reduplication and Recovery (PoDR²). 

- In 2021, released CESS v0.1 white paper. Released CESS Demo v0.2, started BSC testnet storage mining. The end of the same year, CESS was awarded 1st place in the Polkadot Hackathon APAC Edition. 

- In February 2022, CESS joined the Substrate Builders Program. In July CESS passed all milestones in W3F to receive a grant for developing a storage pallet for Substrate. CESS launched its testnet the same month. 

### Team Code Repos

- https://github.com/CESSProject
- https://github.com/CESSProject/cess
- https://github.com/CESSProject/fmd-cess

## Development Roadmap 🔩

### Overview

- **Total Estimated Duration:** 3 months
- **Full-Time Equivalent (FTE):** 3
- **Total Costs:** *26,000 USD*

### Milestone 1

- **Estimated duration:** 2 months
- **FTE:** 2
- **Costs:** 16,000 USD

| Number | Deliverable             | Specification                                                |
| ------ | ----------------------- | ------------------------------------------------------------ |
| 0a.    | License                 | Apache 2.0                         |
| 0b.    | Documentation           | We will provide both inline documentation of the code and a basic tutorial that explains how a user can run the CLI to push or pull snapshots. |
| 0c.    | Testing Guide           | Core functions will be fully covered by comprehensive unit tests written using unittest package to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 1a.    | Subshots CLI            | We will develop a CLI tool using Golang with the following main features: compressing snapshots, uploading snapshots, scheduling tasks, querying snapshot hashes, downloading snapshots, and decompressing snapshots. |
| 1b.    | Smart Contract          | We will develop a smart contract using ink!, with the main function of storing snapshot information. |

### Milestone 2

- **Estimated Duration:** 2 months
- **FTE:** 1
- **Costs:** 10,000 USD

| Number | Deliverable            | Specification                                                |
| ------ | ---------------------- | ------------------------------------------------------------ |
| 0a.    | License                | Apache 2.0                                                   |
| 0b.    | Documentation          | We will provide both inline documentation of the code and a basic tutorial that explains how to use the website. |
| 0c.    | Testing Guide          | Unit testing will be applied to ensure reliability. Documentation of tests and results will be provided. |
| 0d.    | Article                | We will publish an article that explains what we have achieved building this project and how this will impact the ecosystem. |
| 1a.    | Subshots Portal        | We will develop frontend embedded in [substats](https://substats.cess.cloud/) block explorer to display a list of snapshots and their details. |

## Future Plans

In the upcoming months, we plan to expand our project's reach to Europe, South America, and Southeast Asia, building a larger developer community and conducting tests while maintaining and adapting to any Substrate or CESS updates. Our goal is to optimize the product and make it scalable. Furthermore, we are planning to extend our support to any blockchain network in the future, including Bitcoin and Ethereum, beyond just the Polkadot/Substrate ecosystem.

## Additional Information ➕

**How did you hear about the Grants Program?**

We have heard from Parity Asia.

**What work has been done already?**

We have already implemented a design prototype.

**Have you ever applied for other grants?**

We had applied for three.

1. [grant 1](https://github.com/w3f/Grants-Program/blob/master/applications/CESS.md) , which had passed all the milestone deliveries on January, 2022.
2. [grant 2](https://github.com/w3f/Grants-Program/blob/master/applications/ces_data_store.md) , which had passed all the milestone deliveries on July, 2022.
3. [grant 3](https://github.com/w3f/Grants-Program/blob/master/applications/substats.md) , which had passed all the milestone deliveries on March, 2023.
