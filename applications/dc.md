# DC

- **Team Name:** dcnetio
- **Payment Address:** 12T38itAqWK2szqSBC598cy7QvQDWHsm1D33PfhkSyCqQbvm(USDT)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 3

## Project Overview :page_facing_up:

### Overview

- Tagline Describer  
  DC(Decentralized Cloud) is a DePIN.DC is a decentralized network infrastructure for developers very convenient to develop decentralized applications with their Web2.0  development experience.And the user experience of using DApps based on DC is just like using the Apps based on Web2.0.  
  The DC network is composed of core and auxiliary components. The core component consists of the cloud service node DCStorage and the blockchain DCChain. The auxiliary component includes: the DCStorage upgrade assistant program DCUpgrade, the DC node management tool DCManager, the DappSDK provided for DApp developers, and the local debugging environment for DApps (DC_Debugenv), among others.
  - **DCChain**: DCChain is a public blockchain developed  based on Substrate, with its core functions concentrated in a pallet called DCNode, which serves as the incentive layer and consensus layer of the DC network. It is responsible for maintaining the consensus data across the entire network, including subscription information for user cloud service spaces, binding relationships between user accounts, associations between users and files/databases/NftAccounts, storage locations of files and databases, basic information of cloud service nodes, and reward information for various participating parties.
  - **DCStorage**: Nodes running DCStorage within the DC network are called cloud service nodes. They operate on Intel SGX Enclaves as Trusted Execution Environments (TEEs), providing web3.0 applications with capabilities similar to traditional cloud services, including file storage, database management and access, inter-user communication routing, user message data caching, and submission of consensus-requiring data to the blockchain. Web3.0 applications built on DC can directly invoke the decentralized capabilities offered by DCStorage via the gRPC protocol, thus achieving high performance and concurrency at scale - application experiences not possible in the original blockchain smart contract model.
  - **DAppSDK**:A complete set of gRPC interfaces and client SDKs are provided, allowing developers to create web3.0 applications as if they were developing web2.0 applications, without the need to understand blockchain technology. Developers can simply refer to the interfaces provided by DC for rapid development of web3.0 applications.
  - **DC_DebugEnv**: Deployed based on Docker, the entire DC test network can be set up locally for development and debugging. Once the DApp development is complete, it only requires switching the blockchain address to the official DC network to go live and launch.
  - **DCManager**: The DC network node deployment and maintenance tools assist users in quickly setting up and operating DC network nodes, and provide monitoring and maintenance functions for the nodes.
  - **DCUpgrade**: The DC network node upgrade tool is mainly responsible for assisting in the transition and transfer of keys sealed by TEE during the DCStorage upgrade process. The program itself also runs in a TEE.
  
- Purpose
  
   The project aims to provide a decentralized cloud service for Web3.0 applications that surpasses the current limitations of Web3.0 application scenarios, delivering high performance, high concurrency, low barriers to development, and an enhanced user experience.

- problems  
  Current Web3.0 applications are primarily based on the smart contract model on the blockchain, which has very limited application scenarios:
    1. Performance Bottlenecks of Smart Contracts: Taking Ethereum as an example, the current TPS (transactions per second) of Ethereum is only about 30. This means that only about 30 transactions can be processed per second, which is unacceptable for most web2.0 applications.
    2. Web3.0 applications implemented with blockchain-based smart contracts face bottlenecks in storage and retrieval. Although there are now some relatively mature storage-oriented chains, such as Filecoin, Arweave, and Crust from the Polkadot ecosystem, access and retrieval of data on these chains are still hard to achieve in real-time due to the performance bottlenecks and design patterns inherent in blockchain technology.
    3. The Development Threshold of Smart Contracts: Currently, the development of smart contracts is mainly based on specific languages, such as ink! which undoubtedly increases the learning cost for developers and raises the threshold for development. Moreover, the development model of smart contracts is entirely different from the traditional web2.0 application development model, which is also unacceptable for most web2.0 developers.
    4. The Account Model of Current Web3.0: The account model of current smart contracts is primarily based on a public-private key system, which requires users to safeguard their private keys or mnemonic phrases. This is difficult for most web2.0 users to accept.
    5. Whether it's a blockchain operating on a Proof of Stake (PoS) or Proof of Work (PoW) consensus mechanism, finalizing a block always requires a certain amount of time. This means that the user experience of Web3.0 applications cannot compete with that of Web2.0 applications, which is a primary reason why current Web3.0 applications struggle to attract more users.

- solution  
  Unlike the existing blockchain model that uses smart contracts to provide services for Web3.0 applications, DC enables decentralized capabilities without the need for Web3.0 applications to invoke smart contracts on the blockchain. It supports a wider range of application scenarios and also possesses higher performance. A brief introduction is as follows:
  - To address performance and storage bottlenecks, DC has made several improvements:
    1. The DCChain public blockchain, developed based on Substrate, inherits the NPoS (Nominated Proof of Stake) model from Polkadot. Compared to the PoW (Proof of Work) model, it ensures the transaction processing performance of the blockchain to a certain extent.
    2. Transactions that would typically be submitted to the blockchain by Web3.0 applications are instead submitted by cloud service nodes. This way, as soon as a Web3.0 application receives a response from a cloud service node, it signifies that the business logic has been successfully processed. The cloud service nodes are responsible for ensuring that transactions requiring consensus are recorded on the blockchain according to corresponding strategies. This guarantees that Web3.0 applications can offer a high-response user experience.
    3. If all consensus actions were to be recorded on the blockchain, the performance and storage bottlenecks on the blockchain would still exist; it would merely shift the problem from the application's client side to the cloud service node side. DC addresses this issue by introducing local consensus among cloud service nodes to replace the global consensus of the blockchain, eliminating the need to record non-globally essential consensus data on the blockchain, because most business logic does not require consensus to be formed on the blockchain. Below, we will expand on this by using the decentralized database provided by DC as an example:
       1. When an application creates a database, the cloud service node submits information such as the relationship between the database and the user, as well as the storage capacity limit of the database, to blockchain.(Global consensus)
       2. The DC network randomly selects n (currently n is 5) cloud service nodes to store the database's data and records the relationship between the database and each cloud service node onto the blockchain. (Global consensus)
       3. Every cloud service node that has stored the database will keep track of the database's capacity usage and synchronize this information with each other. (Local consensus)
       4. When an application maintains table structures or records within the database, the cloud service nodes storing the database will locally accumulate the used capacity of the database and compare it with the storage capacity limit of the database recorded on the blockchain. If the limit is not exceeded, they will directly accept the data and synchronize it with other cloud service nodes that have backed up the database. All nodes that have backed up the database will locally accumulate the used capacity of the database. (Local consensus)
       5. If a cloud service node finds that the database capacity has exceeded the storage capacity limit set on the blockchain, it will refuse to provide service. (Local consensus)
       6. When the application receives feedback from the cloud service nodes indicating insufficient database capacity quota, it guides the user to increase the quota for the database, and the cloud service nodes facilitate the process of recording the increase onto the blockchain. (Global consensus)
       7. If a cloud service node that has backed up the database fails, the DC network will automatically find another available cloud service node to perform the backup and update the list of relationships between the database and cloud service nodes on the blockchain. (Global consensus)
       8. Summary: Applications only form a global consensus on the blockchain when creating databases, configuring database capacity, and updating the location of cloud service nodes that store the database. Frequent operations such as table structure management, data insertion, modification, and deletion do not require blockchain transactions. During these processes, the actual business data that needs to be stored does not need to be recorded on the blockchain either. This ensures the interactive performance of the application and addresses the issue of high storage costs on the blockchain.
    4. In response to the issue of high entry barriers for developers of web3.0 applications based on smart contracts, DC provides a complete set of gRPC interfaces as well as client SDKs covering mainstream programming languages. This allows developers to leverage their existing experience and habits to develop web3.0 applications just as they would develop web2.0 applications, without the need to understand blockchain technology. Developers can simply refer to the interfaces provided by DC to rapidly develop web3.0 applications.
    5. In terms of user guidance, in addition to the mnemonic phrase and the public-private key account system, DC has also introduced an account mode similar to web2.0. This means that users can log in across terminals, applications, and devices just by using an account and password. The advantage of this approach is clear: users familiar with web2.0 can transition to web3.0 users without understanding blockchain, decentralization, or public-private key cryptography. This has milestone significance for the long-term development of web3.0.

  - Technology Stack
    - Development Languages: DCChain is developed based on Substrate, using Rust; DCStorage is developed using the Go language.
    - Substrate: DCChain is a public blockchain developed based on Substrate, with its primary functionalities concentrated in a pallet named DCNode, which is developed using Rust. This pallet is used to establish the incentive layer and consensus layer for the DC network.
    - IPFS: The data exchange between DC cloud service nodes (DCStorage) and the data exchange between web3.0 applications and DCStorage nodes are both based on the IPFS protocol.
    - [ipfs-lite](https://github.com/dcnetio/ipfs-lite): IPFS-Lite is an embeddable, lightweight IPFS peer which runs the minimal setup to provide an ipld.DAGService and UnixFS-files addition and retrieval.DCStorage use ipfs-lite to provide decentralized file storage services.
    - [ThreadDb](https://github.com/textileio/go-threads): is an implementation of the database described in the paper [entitled A protocol & event-sourced database for decentralized user-siloed data].ThreadDB requires a trusted environment to complete data synchronization between different nodes. DC's cloud service node,runs within a TEE (Trusted Execution Environment). At the same time, the backup node information of the database is submitted to the blockchain as part of the consensus, ensuring that ThreadDB can also be used in a trustless environment. For this purpose, the ThreadDB used by DCStorage has been fine-tuned based on the original version and has been made open source at [dcnetio/go-threads](https://github.com/dcnetio/gothreads-lib).
    - Libp2p: In addition to the data exchange between all nodes involved with DCStorage, which is based on the IPFS protocol, the SDK provided by DC also uses the libp2p protocol to facilitate data exchange between users.
    - [badgerDB](https://github.com/dgraph-io/badger):BadgerDB is an embeddable, persistent and fast key-value (KV) database written in pure Go. It is the underlying database for Dgraph, a fast, distributed graph database. It's meant to be a performant alternative to non-Go-based key-value stores like RocksDB. DCStorage uses BadgerDB as the underlying storage library for data. Based on the characteristics of DCStorage, it has been optimized on top of the BadgerDB 2.0 version to eliminate memory leak issues encountered during actual use. The optimized version is open-sourced at [dcnetio/badger](https://github.com/dcnetio/badger).
    - go-substrate-rpc-client: go-substrate-rpc-client: The cloud service nodes and application SDK provided by DC are based on the go-substrate-rpc-client to facilitate interaction with DCChain.
    - [go-ipfs-pinner](https://github.com/ipfs/go-ipfs-pinner): The pinner system is responsible for keeping track of which objects a user wants to keep stored locally.DCStorage uses go-ipfs-gcpinner to ensure the long-term preservation of data stored on nodes. However, the data cleaning support provided by go-ipfs-pinner is not sufficiently robust. Therefore, we have enhanced this pinner system with a garbage collection (gc) feature, which we have open-sourced at [dcnetio/go-ipfs-gcpinner](https://github.com/dcnetio/go-ipfs-gcpinner).
    - [grpc](https://grpc.io/):A high performance, open source universal RPC framework.The remote calls between DC's cloud service nodes and the interfaces for applications to access DCStorage are all implemented based on the gRPC framework.
    - [multiformats](https://github.com/multiformats/multiformats): Multiformats is a set of self-describing protocol values.DCStorage primarily utilizes multiaddr for the network addresses of cloud service nodes as well as web 3.0 application clients, and employs multibase, multicodec, and multihash as the encoding formats for various messages, content digests, and peerids, among others.
    - TEE: TEEs provide an isolated execution environment for the managers and users for privacy and confidential computing even if the underlying OSes are compromised.DC's cloud service node, DCStorage, runs within an Intel® SGX enclave, utilizing the enclave to seal data stored locally to ensure that it remains invisible even to the machine provider. It also employs Intel® SGX's Remote Attestation to verify that the cloud service node's code is running in a trusted environment. Future plans include considering support for additional TEE (Trusted Execution Environment) platforms, such as ARM TrustZone. To ensure the performance of cloud service nodes, DC only allows CPUs that support SGX 2.0 and have an EPC (Enclave Page Cache) larger than 64GB to become cloud service nodes.
    - [ego](https://github.com/edgelesssys/ego): ego is a tool for building and running Go applications in a secure enclave. It is designed to be used with Intel SGX enclaves, but can be extended to support other TEEs as well.The current code for DC's cloud service node, DCStorage, is compiled and packaged using EGo, thereby enabling it to run entirely within an Intel SGX enclave. This is done to meet performance requirements.
    - [PCCS](https://github.com/intel/SGXDataCenterAttestationPrimitives/tree/master/QuoteGeneration/pccs):This is a lightweight Provisioning Certificate Caching Service implemented in nodejs for reference. It retrieves PCK Certificates and other collaterals on-demand using the internet at runtime, and then caches them in local database. The PCCS exposes similar HTTPS interfaces as Intel's Provisioning Certificate Service.DCStorage uses PCCS to retrieve the PCK certificate required for remote attestation of the Intel SGX enclave.

- Target Audience
  - Application developers: This includes both Web 2.0 and Web 3.0 application developers.
  - Application users: This term encompasses users of both Web 2.0 and Web 3.0 applications.
  - Node operators: The builders of the DC network, including the operators of DC network nodes and the maintainers of the DC network.

- The key factors of DC: 
  1. Provide support for a decentralized database that allows for real-time interaction, ensuring that the development logic of Web3.0 applications remains consistent with that of Web2.0 applications.
  2. Cloud service nodes replace applications in submitting transactions to the blockchain, providing a high-performance, high-concurrency user experience for Web3.0 applications.
  3. The introduction of local consensus among cloud service nodes supplements the global consensus of the blockchain, reducing the performance overhead of the blockchain.
  4. Cloud service nodes, based on the IPFS protocol, provide off-chain data storage capabilities for the DC network, reducing the storage consumption of the blockchain.
  5. By introducing the account model of Web2.0, Web2.0 users can seamlessly transition to Web3.0 users, providing a foundation for the long-term development of Web3.0.
  6. A complete set of gRPC interfaces and client SDKs covering mainstream development languages are provided, allowing developers to utilize their existing development experience and habits. This enables them to develop Web3.0 applications just as they would develop Web2.0 applications, without the need to understand blockchain technology. Developers can quickly create Web3.0 applications by simply referring to the interfaces provided by DC.
  7. Utilizing a user account backup mechanism, a decentralized user identity system that supports communication routing between users has been established. Through this system, a decentralized social protocol and a message caching mechanism have been implemented.
  8. Leveraging TEE (Trusted Execution Environment) ensures that cloud service nodes operate in a trusted environment, guaranteeing that any cloud service node will only run the expected version of the code.

- vision  
  To break through the situational limitations of Web3.0 applications, lower the development threshold for Web3.0 applications, and eliminate barriers for users entering the Web3.0 world, thereby rapidly promoting the development of Web3.0 applications.
  
### Project Details

- Project Progress
  
   1. The development of the DC network start at the end of 2019. The core functionality section without Incentive Model has entered the debugging phase.
   2. The auxiliary component has just started development.

- Introduction to Key Features
  - Design of account login patterns with Web2.0 experience:  
  In the DC network, the accounts that log in with a password are referred to as NFT accounts. They are considered rare assets, requiring registration within the DC network, and support transfers between users. The key implementation process is as follows:
    1. When a user first visits a Web3.0 application based on the DC network, they register an NFT account in the DC network according to their preferences and bind it with an on-chain account (public key). These two operations can be directly implemented by the Web3.0 application through the interfaces provided by DC.
    2. By utilizing the NFT account and login password through a series of irreversible transformations, a 256-bit AES encryption key is generated. During this process, the Bcrypt algorithm is introduced to reduce the speed of key generation, thus preventing brute-force attacks.
    3. Using the key generated in step 2, the private key or mnemonic phrase of the on-chain account is encrypted, and then the encrypted ciphertext is stored in the DC network. The data stored in the DC network is sealed by TEE (Trusted Execution Environment), ensuring complete privacy, and cannot be decrypted by anyone other than the user.
    4. When logging in with an NFT account password, the system first queries the consensus information on the chain to obtain the storage location of the ciphertext of the user's private key or mnemonic phrase. Then, it extracts the ciphertext from the DC network and uses the key generation method from step 2 to decrypt the ciphertext, thereby retrieving the user's private key or mnemonic phrase. Following this, the user can officially access the various functions of the DC network.

  - Ensure the logical implementation that cloud service nodes only run the version-controlled DCStorage code:
    1. The entire code of DCStorage runs within an SGX Enclave, and each version has a unique enclave ID.
    2. Each peer's private key is sealed through TEE to ensure that the node's signature cannot be forged.
    3. When each cloud service node applies to join the DC network, it needs to submit a network entry application. The application will include a teereport field, which contains a signature of relevant information such as block height signed by the node's private key, as well as attestation information about the enclave's execution, which cannot be forged or borrowed.
    4. After cloud service node submits an application for network entry, it will not be connected to the network immediately. It needs to wait for a period (currently set at 300 block heights). During this time, 30 randomly selected nodes that are already in the network will review the application. If any node detects abnormal data in the teereport, the applicant will not be able to join the network. The application will enter a reporting process, and the cloud service  node that submitted the application may be penalized by forfeiting the tokens it has staked.
    5. Every on-chain request that involves network integrity must carry a teereport.

  - The logic implementation of data security assurance in the DC network involves several key components:
    1. The cloud service node receives the data stored by the Dapp (including files, databases, and user account information), and randomly selects four nodes to back up the data.
    2. When a node that has backed up the data becomes abnormal, the DC network will randomly select another node to create a new backup, ensuring that the effective number of backups for the data is no less than 5.
    3. Users can generate more than 5 backups by paying extra (using cloud service space as the payment unit) and can also independently specify the backup nodes. 
    4. The DCStorage node will regularly perform integrity checks on the data it stores. If any data loss is detected, it will report it to the blockchain to ensure the generation of new backups.  

  - The role of blockchain in the DC network:
     1. Exists as an incentive layer.
     2. Exists as a consensus layer, ensuring the credibility of various consensus data in the DC network.

  - The implementation method of decentralized social protocol, P2P communication routing, and message caching functionality:
     1. When a user registers an NFT account binding in the DC network, each cloud service node that has backed up the account information automatically becomes a user's relay node.
     2. When the user's DAPP is online, it will automatically establish connections with one or five of these cloud service nodes.
     3. When other users need to communicate with this user, they only need to communicate with these cloud service nodes to address the user and establish a p2p connection for communication.
     4. If the user to communicate with is not online, messages can also be cached through these cloud service nodes. When the user is online, they will automatically retrieve the cached messages.
     5. Users can publish public content visible to everyone, or private content visible to only a few people, and can allocate storage space for storing comments as needed.
     6. Other users can directly comment on the content published by the user, and the comment content will be stored in the backup node of the user who published the content.
     7. The DC network will simultaneously deduct the storage space of both the commenting user and the user being commented on, and will deduct different storage space based on the size of the comment content.

  - Decentralized database storage mechanism
   1. The cloud service nodes will submit the association between the database and the user to the blockchain, and randomly select five nodes to store the actual data of the database. Additionally, they will submit the list of cloud service nodes that store the database to the blockchain.
   2. Each cloud service node that stores the database will record the usage of the database's capacity and synchronize with each other.
   3. The database is event-driven, with multiple log storage structures based on the different write positions of a database, ensuring simultaneous writes in multiple locations. The log structure is stored in a manner similar to a Merkle tree and uses content-based addressing for each record to ensure data integrity. The integrity of the data can be verified using the root node of any log structure.
   4. When the DApp makes any changes to the database, an operation record is created, which can be quickly synchronized to the DC network.
   5. The DappSDK assists the DAPP in pulling database records from the DC network to the local system and performing low-level rendering, providing the DAPP with an interface for operations similar to a relational database.
   6. The transmission and storage of each database operation record in the DC network are encrypted and can only be decrypted by the user.

  - DC Network Security Mechanism:
     1. The blockchain network formed by DCChain adopts the NPOS (Nominated Proof of Stake) mechanism of Polkadot and continues to use Polkadot's validator staking mechanism to ensure the security of the blockchain network.
     2. The DC cloud service node network is a paid-to-use network. Users must subscribe to cloud service space before accessing cloud service nodes.
     3. Any user operations involving submitting transactions to cloud service nodes on the blockchain will deduct a certain amount of the user's cloud service storage space validity period. The specific deduction amount is associated with the nextFeeMultiplier on the chain for calculation.
     4. Although the DC network is a completely decentralized distributed service network, in order to ensure the normal operation of each cloud service node, each cloud service node will limit the operations of individual users under the premise of meeting the normal access needs of users, in order to prevent malicious users from attacking individual cloud service nodes.
     5. Users need to bind with cloud service nodes before proceeding with subsequent access. Each user can only establish a binding relationship with 5 nodes at the same time. Each time a binding is established, the cloud service node needs to be submitted to the chain on behalf of the user. This effectively prevents malicious users from simultaneously issuing the same instructions to all cloud service nodes on the entire network.
     6. The cloud service nodes run in a TEE (Trusted Execution Environment) environment, and most transactions submitted to the blockchain are essentially free, but there are a few operations that require payment of gas, such as network entry requests.
     7. Running cloud service nodes requires staking a certain amount of tokens.
     8. The DC network will regularly check the status of each cloud service node. If a cloud service node is found to be abnormal, it will be removed from the network and the tokens staked by the node will be penalized.

- Outstanding issues and countermeasures for the project:
  1. The current TEE (Trusted Execution Environment) environment is mainly based on Intel, and the authentication of the enclave where the program runs also relies on Intel's Platform Configuration Service (PCS).  
  **Strategy**: Each cloud service node caches the configuration information of all online nodes, ensuring that nodes that have already entered the network can continue to operate normally even if the PCS service is disrupted.
  2. When users first use the Web3.0 APP based on the DC network, they cannot directly register an NFT account on the chain because they do not hold the network token, which leads to the inability to use the subsequent functions of the Web3.0 application.  
  **Strategy**:
     1. The Web3.0 application based on the DC network developed by the DC team will automatically provide users with a certain amount of network tokens upon their initial registration, allowing them to directly use the functions of the Web3.0 application, and the entire process is seamless for the user.
     2. DC designs on-chain incentive logic for DApps, providing incentives based on the user activity and new user registrations to guide DApp developers to actively provide the tokens required for binding NFT accounts for new users.  
  3. The current DC network is a paid-to-use network, and users need to subscribe to cloud service space before accessing cloud service nodes.
  **Strategy**: 
     1. The Web3.0 application developed by the DC team based on the DC network will, for new registered users, not only provide a certain amount of network tokens for registering and binding NFT accounts, but also purchase a specific amount and duration of cloud service space on behalf of the user (currently set as 200GB of cloud service space for one year), allowing users to directly use the functions of the Web3.0 application, with the entire process being seamless for the user.
     2. DC team developed and open-sourced a storage proxy gateway, supporting users to directly use fiat currency to subscribe to cloud service space. The implementation logic is as follows:
        1. Configure the exchange rate between fiat currency and tokens in the backend of the gateway (generally, the token's value is slightly higher than the actual value when configured, and daily transaction limits are set based on business needs).
        2. The gateway integrates various fiat payment gateways, receives user fiat currency, converts it into tokens, and then uses the tokens to purchase cloud service space for users.
        3. Any DApp developer can independently deploy this gateway, or directly call the gateway deployed by the DC team, or develop a similar gateway with the same functionality.

### Ecosystem Fit

The current blockchain mostly provides services to developers through smart contracts, with a few also offering storage services. However, there is currently no blockchain like DC that provides cloud services for web3.0 applications (including file storage, real-time interaction with decentralized databases, decentralized social protocols, and message caching services). Additionally, DC can be called by other parachains through XCM.

- Use Cases
  - Dapps that require data storage
  - Dapps that require p2p communication
  - Dapps  that require real-time interaction with decentralized databases
  - Dapps that require decentralized social protocols
  - Dapps that require decentralized message caching
  - Dapps that require decentralized user account systems
  - Dapps that require Peer-to-peer user communication routing
  - Dapps that require blog and comment functions like twitter
  
- Integration of the ecosystem  
  DC's goal is to provide a user experience for web3.0 applications similar to that of web2.0 applications, and to support a wider range of use cases. It also aims to ensure high performance, high concurrency, and low development thresholds for web3.0 applications. This goal cannot be achieved by other chains, so DC is an independent project that will not conflict with other projects.

  - DC will bring explosive growth in user scale to the Web3.0 ecosystem, mainly based on the following points:
    - By providing decentralized, high-performance, and high-concurrency cloud services, it breaks the limitations of application scenarios for web3.0 applications.
    - Allow web2.0 users to use web3.0 applications while retaining the user experience.
    - By providing SDKs covering mainstream programming languages and standard GRPC interface calling services, it eliminates the learning and development costs for application developers, fostering more web3.0 applications.
    - Users between applications are interoperable, eliminating the need for repeated registration, thus creating a virtuous cycle of "more applications -> more users -> more applications".

  - The DC network itself focuses solely on the construction of decentralized cloud services. In order to ensure the performance and purity of its functions to the greatest extent, it does not provide smart contract functionality. However, we are working to integrate the DC network as a parachain into Polkadot. If developers need to, they can access various distinctive features on other pa ras through cross-chain access. Our goal is to introduce more daily applications with non-financial attributes (such as storage, blogging, social networking, and IoT access) as Web3.0 applications. When these applications require financial attributes or other distinctive functionalities, they can call the functionalities on other chains within the Polkadot ecosystem through XCMP messaging.
  - In general, we aim to onboard the majority of current Web2.0 users into the Polkadot ecosystem. At the same time, we will also need the distinctive features of various parachains within the Polkadot ecosystem to better provide more comprehensive decentralized services for developers and users of applications based on the DC network.


## Team :busts_in_silhouette:

### Team members

- Name of team leader: Onexie
- Names of team members: lanhaidong, wangqin, huangfeng, jiangsongyue, wangfan, tangzhaochen

### Contact

- **Contact Name:** onexie
- **Contact Email:** <dcloudnetwork@gmail.com>
- **Website:** <https://www.dcnetio.cloud>

### Legal Structure

- **Registered Address:**  N/A
- **Registered Legal Entity:**  N/A

### Team's experience

We are a stable technical team. Initially, we mainly provided custom development of various web and mobile applications for clients. During this process, we have accumulated rich experience in Web2.0 development. We deeply understand the needs of Web2.0 developers and the usage habits of users in the Web2.0 environment.

### Team Code Repos

- <https://github.com/dcnetio/dcmanager>
- <https://github.com/dcnetio/dcchain>

Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine.

- <https://github.com/onexie>
- <https://github.com/sandyjrust>
- <https://github.com/yimengyuanyun>
- <https://github.com/peakhuang>

## Development Status :open_book:

We have now completed the main logic development and are undergoing testing. We will gradually open source the code and launch the public test network at the end of December.

## Development Roadmap :nut_and_bolt:

### Roadmap Overview

- **Total Estimated Duration:** 3 months
- **Full-Time Equivalent (FTE):** 5
- **Total Costs:** $98,000 (USD)

### Milestone 1 Deploy the public testing network, open source the code, and provide complete documentation.

- **Estimated duration:** 3 month
- **FTE:** 5
- **Costs:** 98,000 USD

Goal: Fully open source the code repositories for dcchain, dcstorage, dcmanager, and provide relevant documentation.

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | MIT |
| **0b.** | Documentation | We will provide online help manuals for different participants, including node maintenance manuals, Dapp developer operation manuals, end-user account maintenance manuals, as well as economic whitepapers, technical whitepapers, etc. The node maintenance manual mainly includes the following functions: 1. How to start a cloud service node, 2. How to start a validator node, 3. How to track and maintain cloud service nodes and validator nodes on a daily basis; The Dapp developer operation manual mainly includes the following functions: 1. Explanation of the process of developing Dapps, 2. Interface definition documents for the DC network, 3. Dapp development SDK usage manual, 4. Setting up a local debugging environment for the DC network, 5. How to switch from the debugging network to the DC network after Dapp deployment; The end-user operation manual mainly introduces the user system of the DC network and the subscription and consumption process of cloud service space for users; The economic whitepaper mainly introduces the economic model of the DC network, including introductions to various participants, the network's inflation model, and the profit model of participants; The technical whitepaper mainly elaborates on the implementation method, security strategy, and the network's evolutionary direction of the DC network.|
| **0c.** | Testing and Testing Guide |Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker |1. We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. 2. Our node deployment, including functions such as dcstorage and dcchain, is based on Docker.|
| 1. | DC network | At the end of this phase, we will set up a test network that can be validated.|
| 2. | Open source | All DC network-related code will be open-sourced, including DCChain, DCStorage, DCManager, DappSDK, DCUpgrade, and Demo DAPP. |
| 3. | Debug_env | Release the developer debugging environment. |

## Future Plans

- Establish an application reward program to attract more developers to participate in development and promote the ecological development.
- Join into the Polkadot ecosystem to introduce more users to the existing Polkadot ecosystem, and use Polkadot's cross-chain capabilities to introduce more functions to the DC ecosystem.
- Establish the DC Ecological Foundation to provide more support for the development of the DC ecosystem.
- Establish a community for the DC ecosystem to provide more support for the development of the DC ecosystem.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?**

When I was applying for a prefix for DCChain from ss58-registry, during the communication on Element with daniel_cb, he recommended it to me.
