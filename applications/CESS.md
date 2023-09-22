# Cumulus Encrypted Storage System (CESS)

- **Team Name:** CESS LAB
- **Payment Address:** 0x378D889a6e66996C9Eda86D20D7E6adE666ce167(USDT)
- **Level:** 1

## Project Overview :page_facing_up:

### Overview

- Tag line: An infrastructure for a blockchain-based decentralized cloud data network.
- Brief description: Cumulus Encrypted Storage System (CESS) is dedicated to develop a new global decentralized cloud data storage platform – a blockchain-based network infrastructure that is transparent, efficient, and equal opportunity to all members of the global community. CESS encourages excess or under-utilized resources as nodes to join CESS’s unrestricted expandable network via the token economy incentive method. Each node joins the CESS peer-to-peer network by contributing data storage resources, computational resources, or network bandwidth. Built on our state-of-the-art virtualization and cloud computing technologies, CESS organizes and manages the participating resources providing clients with secure, high performance, and boundless cloud data storage services. Furthermore, the CESS protocol enables interconnection of network nodes, to build a large decentralized cloud storage system that supports up to 100PB storage scale to meet the demand of enterprise level data storage. CESS will adopt a phased approach to implement the above goals.
- Indication 1: With the goal of entering Polkadot ecosystem, CESS will build a blockchain system based on Substrate directly, and plans to develop custom pallets on FRAME. In the future, CESS will consider integrating to Polkadot in the form of Parachain to create a new decentralized cloud storage ecosystem, establish a large-scale distributed storage network.
- Indication 2: With rapid advances of new computing technologies such as big data and machine learning, the value of humanity’s digital assets, the so-called “Digital Gold”, are being discovered. Explosively growing amount of data in cyberspace calls for new technologies of secure data storage and efficient data sharing. The challenges are to achieve secure storage, efficient sharing, and trading with data owner’s rights protection, but current solutions are complex and worrisome. Distributed storage networks can better drive the arrival of Web3.0 and are one of the underlying technical infrastructure of Web3.0.

### Project Details

We expect the teams to already have a solid idea about your project's expected final state. Therefore, we ask the teams to submit (where relevant):

Mockups/designs of any UI components

- Global nodes: Display the global map and the number of global nodes of distributed storage network, and mark the location distribution of nodes according to coordinates; Display node list.

![Image](https://raw.githubusercontent.com/Cumulus2021/W3F-illustration/main/img1.png)

- My cloud disk: Personal storage space to view the files uploaded to the storage network; The list can be sorted by upload time, file name, file type and file size; Supports file download, share, property setting, deletion and other operations.
![Image](https://raw.githubusercontent.com/Cumulus2021/W3F-illustration/main/img2.png)

- File upload: Select the files to be stored and set the relevant storage parameters.

![Image](https://raw.githubusercontent.com/Cumulus2021/W3F-illustration/main/img3.png)

- Search for file: Search the whole network through keywords, and download the search results.
![Image](https://raw.githubusercontent.com/Cumulus2021/W3F-illustration/main/img4.png)

Documentation of core components, protocols, architecture, etc. to be deployed

- CESS is a high-speed, secure, scalable and decentralized cloud storage system. It can handle tens of thousands of transactions per second through parallel technology. Through Data slicing technology, it can achieve the secure storage of massive data, and it has the functions of Data confirmation and Data rights protection, which provides powerful data service ability. It provides DAPP with unlimited scalable storage capacity and perfect Data rights protection capability.

- Data storage workflow: When a client requests to store a data file, the CESS platform pre-processes the data file to obtain and store its meta-data and data fingerprints. The pre-process software also performs data file replication and fault tolerant erasure coding. The meta-data includes info of data owner, data keywords, and etc. The data fingerprints are for subsequent data rights confirmation.

<div align="center"><img width="72%" height="72%" src="https://raw.githubusercontent.com/Cumulus2021/W3F-illustration/main/img5.png"/></div>

- CESS client-platform interactions: A typical CESS data client and platform interaction flow is as follows: first, a data storage client interrogates CESS chain to get current storage price. The client then places an order for his/her data file via extrinsics on blockchain. Once the payment is made and order is approved, the client then uploads the data file using API provided by CESS platform. The data file is not directly uploaded to storage nodes, instead it is uploaded to a CESS storage scheduling node. The scheduling nodes are the ones with secure hardware environment (Trusted Execution Environment or TEE) and the data file will be pre-processed, encrypted, and sharded. Finally, the scheduling node distributes data segments to storage nodes to store. CESS storage miners do not make deal directly with clients, and they get rewarded from CESS system by providing storage space. Miners’ storage resources are uniformly managed by CESS system, which fairly distributes data files. Miners have the responsibility to maintain the integrity of clients’ data. Any malicious behavior will be punished (CESS token deduction).

<div align="center"><img width="65%" height="65%" src="https://raw.githubusercontent.com/Cumulus2021/W3F-illustration/main/img6.png"/></div>

- Overall system architecture: CESS adopts a layered and loosely coupled system architecture, which is divided into blockchain service layer, distributed storage resource layer, distributed content delivery layer and application layer.

<div align="center"><img width="68%" height="68%" src="https://raw.githubusercontent.com/Cumulus2021/W3F-illustration/main/img7.png"/></div>

- CESS MDRC mechanism workflow: CESS have designed a unique **Multi-format Data Rights Confirmation Mechanism (MDRC)**, which extracts data fingerprint from each data file to generate data certificate ID. By comparing similarities between data fingerprints, the system identifies data lineages of data files, and may take appropriate actions to prevent possible violations, and to provide strong evidences for owners’ data rights protection.

<div align="center"><img width="68%" height="68%" src="https://raw.githubusercontent.com/Cumulus2021/W3F-illustration/main/img8.png"/></div>

### Ecosystem Fit

CESS is a distributed cloud data network with user friendly ledgers, novel consensus mechanism, multiple data authenticity proof schemes, and reliable network infrastructure. CESS offers data storage service with the advantages of low cost, privacy protection, security and robustness. With the implementation of CESS data confirmation and proxy re-encryption technology, CESS provides Web3.0 clients and DAPPs with trustworthy, secure and reliable data rights protection.

Compared to the similar projects in the Polkadot ecosystem including Ocean, DataHighway and Bluzelle, CESS storage service features:

- Encrypted data storage
- Multiple copies (3 copies by default, more upon request)
- Sharded and distributed on multiple nodes
- Highly scalable storage space
- Transactions secured by CESS blockchain
- Data rights protection for data owners
- Competitive cost

## Team :busts_in_silhouette:

### Team members

- Joseph Li
- Jinghong Zeng

### Contact

- **Contact Name:** Jessie Dai
- **Contact Email:** jessie@cess.cloud
- **Website:** <http://cess.cloud>

### Legal Structure

- **Registered Address:** 22 St Leonard's Ave, Lostock, Bolton BL6 4JE, England
- **Registered Legal Entity:** Paul David Humphreys

### Team's experience

- Team CESS

CESS technical team members have an affluent understanding of technology and have been involved in internationally renowned cloud storage companies as essential technical development members.

The background of our team members includes but not limited to cloud computing and storage, involved in cloud related PaaS and SaaS products research and development; unique insights into the network development, cryptography algorithm implementation, and performance optimization; comprehensive knowledge of public chain and played a major role in the development of public chain focusing on the delivery of commercial applications.

For the past two years, CESS core team members have been developing and building a stable decentralized cloud storage service atop the distributed resources to surmount the security risks presented in the current centralized storage platform. The members are working in the UK, China, and India locations with the commitment creating a decentralized cloud storage data network for commercial use.

- Joseph Li

Joseph Li brings to our operations 24 years of experiences as a Principal Network Engineer managing and supporting large-scale networks on a global scale. Amongst Joseph’s numerous achievements was the IP infrastructure conversion for a network of over 900 nodes and his major accomplishments within the field of VPN.

- Jinghong Zeng

Jinghong Zeng served more than 20 years with a global telecommunications cooperation as a Senior System Architect and Software Engineer, she has proven skills in data warehousing, data processing within distributed systems and a solid understanding of Blockchain.

### Team Code Repos

- <https://github.com/Cumulus2021/CumulusSystem>
- <https://github.com/Cumulus2021/Whitepaper>

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 4 months
- **Full-Time Equivalent (FTE):**  2
- **Total Costs:** 8,000 USD

### Milestone 1: Implement Substrate Modules

- **Estimated Duration:** 2 months
- **FTE:**  2
- **Costs:** 4,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 / MIT / Unlicense |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can running substrate to support storage service. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Article/Tutorial | We will publish an article and a tutorial that explains the work done as part of the grant. |
| 1a. | Substrate module: Files Bank | We will create a Substrate module that will generate file's tag information based on the user's subscription. |  
| 1b. | Substrate module: Files Map | We will create a Substrate module that will allow users to query file storage path. |  
| 1c. | Substrate module: Storage Miner | We will create a Substrate module that will process and upload user data, and support Integrity verification. |  
| 2. | Docker | We will provide a dockerfile to demonstrate the full functionality of our chain. |

### Milestone 2: Implement Storage Mining

- **Estimated Duration:** 1 month
- **FTE:**  2
- **Costs:** 2,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how proof of storage service works. |
| 0c. | Testing Guide | The code will have unit-test coverage (min. 80%) to ensure functionality and robustness. In the guide we will describe how to run these tests. |
| 0d. | Article/Tutorial | We will publish an article and a tutorial that explains the work done as part of the grant. |
| 1a. | Stacked DRG Library | We will create a library for proving and verifying transactions, compatible with the substrate pallet. |  
| 1b. | zk-SNARK proofs | We will implement the algorithm to process the proof results from stacked DRG library. |
| 2. | Substrate module: Segment Book | Develop pallet implement function of storage mining. |
| 3. | Miner Client | Interactive with pallet for storage mining to implement mining supporting services. |

### Milestone 3: Implement and Integrate CESS Applications

- **Estimated Duration:** 1 month
- **FTE:**  2
- **Costs:** 2,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide an application manual and a basic tutorial that introduces the functions of clients. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. |
| 0d. | Article/Tutorial | We will publish an article and a tutorial that explains the work done as part of the grant. |
| 1. | Cryptographic modules | We will implement the cryptographic modules including inner product functional encryption and the associated zero-knowledge proof for storage proof. |  
| 2. | UI Modules | We will design a user-friendly UI that supports both PC and mobile. |
| 3. | File processing | We provide abundant file operation services, including file upload, download, share, delete, etc. |
| 4. | Benchmark | Perform unit tests on the individual algorithms to ensure system safety. |
| 5. | Docker | We will provide a dockerfile to demonstrate the full functionality of our chain. |

## Future Plans

We will continue to improve the substrate-based CESS blockchain and provide reusable modules for the substrate FRAME. The next phase of our project is to implement CESS  protocol for decentralized cloud on-chain data sharing platform.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** We have heard from Parity Asia.

**What work has been done already?** We have already implemented a design prototype and pilot test system.

**Have you ever applied for other grants?** We have not applied for any other grants so far.
