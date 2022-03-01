# W3F Grant Proposal

- **Project Name:** Storage Aggregator | Files
- **Team Name:**  SA
- **Payment Address:  **0xDfB60De06De984cD63Aa333e97Cd701B503dc456 (USDT)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):**  3

## Project Overview :page_facing_up:

An API for unified storage, billions of possibilities!

Storage Aggregator provides a unified storage API, making it easier to retrieve and store billions of blockchain data!

Storage Aggregator provides you with dozens of custom storage platforms and intelligent file retrieval services!

Storage Aggregator Personal Web3 Storage in a Decentralized Web!

The Storage Aggregator Network is a great decentralized storage network built on Substrate that allows anyone participating in storage to receive fair rewards from the protocol!
`SA` is built on Substrate, provides a native cross-chain communication tray based on SCMP (Cross-Chain Message Passing), and stores it in the SA storage cloud through a unified data exchange API that is 100% compatible with **Amazon S3 API** and Retrieve user data. 
This allows any project to use any AWS library or SDK and start using our system without extensive integration work.

The Storage Aggregator ecosystem has three types of nodes: file nodes provide file upload/download services, gateway nodes work directly with the decentralized cloud, and billing nodes calculate storage costs and charge users.
Due to ETH's high transaction price and latency, we use **Polkadot parachain** for transaction billing (per data storage/retrieval operation)

### Overview

- Use `Substrate` as the underlying chain support and add related `pallets`.
- Write contract code in `Rust` and deploy to `Substrate`.
- Transaction billing using **Polkadot parachain** (per data storage/retrieval operation).
- Use `Go` to develop a unified data exchange API to store and retrieve user data in `Storage Aggregator`.
- Use Primer, an internal transformation language inspired by the MongoDB query language. Developers can select only the fields they want and further aggregate the data to suit their needs.
- Use Go to develop decentralized index query middleware.

### Project Details

- Storage Aggregator official website.
- Storage Aggregator Blockchain Network.
- Provide a unified API to index and decode mainstream storage platforms.
- Primer Transformation Engine, an internal transformation language inspired by the MongoDB query language. Using Primer, developers can select only the fields they want and further aggregate the data to meet their needs. All of this is done on the fly at query time
- Provides a fully decentralized storage and computing layer with low fees and high throughput.
- NFT & Defi support
- Documentation. Tutorials for node operators and developers, as well as contributor guides.

### Ecosystem Fit

- Our project uses Substrate to build the Storage Aggregator network, paid by using the Polkadot parachain as the main token; 
- we think our audience is parachain users who want to store data, and developers who want to use our storage API, and of course we have our own Storage user group; 
- our project meets the requirements of open source license, user data privacy terms, convenient and beautiful user experience;
-  there are not many storage projects in Substrate, and there is no storage aggregation project. We want to use our efforts to make all stored APIs Unified use, you can choose any storage platform for data storage.
- In data query, the Storage Aggregator network has fully decentralized storage and computation layers with low fees and high throughput.

## Team :busts_in_silhouette:

### Team members

- liangkai
- liangkai、Dongjiahong、Zoe、Mars、Vivian Hu、Kyle Patrick

### Contact

- **Contact Name:** LiangKai
- **Contact Email:** lk2684753@163.com

### Legal Structure

Temporarily no

### Team's experience

- Liangkai

 Responsible for jingdong cloud hosting and cloud architecture of database, and research and development work, previously in sohu product technology center is responsible for sohu webim, real-time gaming platform technology products such as research and development work with architecture, after joining sina weibo underlying platform research and development work of sina weibo, dominated the redis in sina weibo's development and application of mass customization. Later, I joined Tencent and was responsible for the r&d and architecture of Tencent's large-scale distributed storage project, providing highly reliable storage services for Tencent's various business product lines. In terms of technology, I mainly focus on distributed storage/cache/database, Linux kernel and other basic technical fields, and have a deep understanding of blockchain basic technology；

- Dongjiahong

 Familiar with Golang language development and related tool chain; More than 8 years of basic system development and architecture experience in Internet industry; Experience in large-scale distributed storage/cache/database system design, knowledge of open source architectures such as Ceph,Swift,Sheepdog, etc. Have a deep understanding of web server design, read some excellent open-source project source code, such as Nginx,Redis,Memcached, etc. Blockchain technology enthusiasts, have unique insights into the design of economic models;

- Zoe

 Years of experience in data product development and architecture. I have led the development and community construction of various data products in JINGdong and several companies. I am active in the field of data products and have rich experience in various products in the field of database and big data. At present, I am leading the r&d and promotion of flexible database in Jingdong Mall. Blockchain technology enthusiast, has participated in the development of Lambda and NEO public chain, and is currently committed to the planning and development of NFT market projects;

- Mars

Has a passion for programming and problem-solving and strives to write clean and modular code. Marston is proficient in functional and object-orient programming, allowing him to develop software in a cross-chain environment efficiently. At this time, Marston is fluent in Javascript, Rust, Java, C/C++, Python, PHP, and SQL. Before starting JACKAL, Marston has developed a Web3 digital evidence capture and chain of custody software in the polygon ecosystem. Previously he has also created a Minecraft modification with over 3 million downloads.

- Vivian Hu 

Is a DevRel expert and product manager for the project. She is responsible for technical documentation and developer engagement.

- Kyle Patrick

Kyle is an NFT enthusiast and is studying Political Science. He joined the Discord a week after Basic Beasts had launched and quickly became the most engaged community member. He now leads the effort of building and growing the community.



Our team has applied for a Grant from Filecoin and obtained relevant funding, and the project development is nearing completion.https://github.com/filecoin-project/devgrants/issues/375

We have participated in the Near Hackathon recently, and the results of the competition have not yet been announced. We believe that we will have good results; https://devpost.com/software/sdcloud

our team has done the development of the underlying chain and the development of various NFT projects before.

### Team Code Repos

https://github.com/neo-project/neo

https://github.com/lk2684753/go-palletone

https://github.com/lk2684753/chubaofs

https://github.com/tpmccallum

 https://www.linkedin.com/in/vivian-hu-513118185/

## Development Status :open_book:

Code is being developed and product requirements are finalized.

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:**  5-7 months
- **Full-Time Equivalent (FTE):** 10- 12 FTE
- **Total Costs:** Due to the heavy workload, it is necessary to mobilize engineers in and out of the project to keep the progress in sync with the upstream storage platform progress, and the diverse skills required (12 FTE x month full-time GO/Rust/blockchain engineer/front-end engineer/product manager/UI design ), we are requesting a 90,000 DAI Foundation grant. All funds will be used to cover personnel costs, including wages, taxes, insurance, benefits. The important thing is that we need to buy some machines to deploy the service and we are willing to pay part of the budget in DAI.

### Milestone 1 

- **Estimated duration:** Week 1-4
- **FTE:**  4 Developers & 1 Product Manager
- **Costs:** 15,000 DAI

| Number | Deliverable                                      | Specification                                                |
| -----: | ------------------------------------------------ | ------------------------------------------------------------ |
|    0a. | License                                          | Apache 2.0                                                   |
|    0b. | Requirements finalization                        | We will finalize the product direction, profit model, technical architecture, etc. |
|    0c. | Storage Aggregator official website UI design    | Website interface design, including product introduction, user experience, sponsors, how to contact us, etc. |
|    0d. | Storage Aggregator Blockchain Network Deployment | We use `Substrate` to deploy the `storage aggregator` blockchain network, choose the pallet that suits us, open RPC ports. |
|    0e. | Related functional tests                         | We will test the stability of the entire network, the official website interaction test. |
|     1. | Substrate module: File Storage                   | We will create a File Storage Substrate module that will Mainly record file storage information, file type, storage node, storage platform |
|     2. | Substrate module: Aggregator                     | We will create a `Aggregator Substrat`e module that will Aggregate storage platform file information, mainly used for intercommunication between storage information |

### Milestone 2

- **Estimated Duration:** Week 4-10
- **FTE:**  5 developers
- **Costs:** 25,000 DAI

| umber | Deliverable                                                  | Specification                                                |
| ----: | ------------------------------------------------------------ | ------------------------------------------------------------ |
|   0a. | Develop unified storage API to index and decode mainstream storage platforms | Develop unified storage API, make mainstream storage platform interface compatible with `Amazon S3` API 100% unified data exchange API Store and retrieve user data in SA storage cloud |
|   0b. | Mainstream storage platform node construction                | Build multiple storage platforms (Amazon Glacier, Google Coldline, IPFS, Swarm, Filecoin, storj, arweave, SIQ, 0CHAIN, Lambad, BitTorrent, Alibaba Cloud, etc.) |
|   0c. | Develop primer switching engine                              | An internal transformation language inspired by the MongoDB query language. Using Primer, developers can select only the fields they want and further aggregate the data to meet their needs. All of this is done on the fly at query time. |
|   0d. | Write relevant documentation                                 | We use Substrate to deploy the storage aggregator blockchain network, choose the pallet that suits us, open RPC ports. |
|   0f. | Related functional tests                                     | The team will test all functions of the development as a whole and give relevant test reports. |

### Milestone 3

- **Estimated Duration:** Week 12-14
- **FTE:**  5 developers
- **Costs:** 20,000 DAI

| umber | Deliverable                                                  | Specification                                                |
| ----: | ------------------------------------------------------------ | ------------------------------------------------------------ |
|   0a. | Payment System Design                                        | Design of payment system for file storage and retrieval, docking with various wallets for payment, including `Polkadot` parachain tokens |
|   0b. | Storage and Bandwidth Charge Design                          | Mainly product profit model design.                          |
|   0c. | Develop decentralized index query middleware                 | Use `Go` to develop decentralized index query middleware, which has the characteristics of high throughput and high speed. |
|   0d. | Front-end development storage file information display and operation | We use Substrate to deploy the storage aggregator blockchain network, choose the pallet that suits us, open RPC ports. |
|   0e. | Storage permission design                                    | Create a stored query api key for the user, the api key is completely kept by the user, currently we plan to use `DID` to build it. |
|   0f. | Related functional tests                                     | We will test our decentralized index query middleware, wallet payment functionality, usage of api keys, etc. |

### Milestone 4

- **Estimated Duration:** Week 4-10
- **FTE:**  5 developers
- **Costs:** 20,000 DAI

| umber | Deliverable                                  | Specification                                                |
| ----: | -------------------------------------------- | ------------------------------------------------------------ |
|   0a. | Smart Contract Integration(NFT&Defi)         | Use Rust language to develop smart contracts, deploy them in the network, mainly provide NFT and Defi functions, and empower the circulation of tokens, allowing more users to participate in data storage. |
|   0b. | Regression testing                           | Retest to verify that the modification did not introduce new bugs or cause errors in other code. Automated regression testing will greatly reduce the cost of system testing, maintenance and upgrades. |
|   0c. | Develop decentralized index query middleware | Use `Go` to develop decentralized index query middleware, mainly for data exchange between different storage platforms |
|   0d. | Bug fixes and Improvements                   | Bug fixes for serious problems, allow more users to participate in making suggestions, improve performance problems in related modules in actual use, etc. |
|   0e. | Deploying Application                        | Deploy the application on multiple nodes in the world, and use the monitoring program to monitor the health status in real time. |

### Milestone 5

- **Estimated Duration:** (Week 18 to 24) 
- **FTE:** 4 developers
- **Costs:** 10,000 DAI

| umber | Deliverable                                            | Specification                                                |
| ----: | ------------------------------------------------------ | ------------------------------------------------------------ |
|   0a. | Governance Testing                                     | One of the essential parts of Devops is automated testing, and automated testing naturally involves the construction and maintenance of an automated test environment, so a targeted solution is needed -- test environment governance. In fact, the management and maintenance of the test environment is earlier than the practice of Devops; but the attention and investment in the test environment, so there are various forms of test environment governance solutions. |
|   0b. | Tokenomics Finalized                                   | Determine the storage aggregator blockchain network governance token for the multi-faceted ecology of the community. |
|   0c. | Payment Model Testing                                  | Payment model testing, mainly used in Defi and NFT markets, testing capital flow pools. |
|   0d. | Features/changes will be as a result of DAO proposals. | Features/changes will be the result of community user proposals. |

## Future Plans

Our team is committed to maintaining the maintenance, upgrade and operation of the Storage Aggregator network; in the later stage, based on user feedback, we will improve our project, and the team will open source and maintain the development code for at least three years.


## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation Website

Here you can also add any additional information that you think is relevant to this application but isn't part of it already, such as:

- Work you have already done.(Website design and product copy design, technical architecture research)
- If there are any other teams who have already contributed (financially) to the project.(no)
- Previous grants you may have applied for.   (no other grants)
