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

- **Total Estimated Duration:**  6-7 months
- **Full-Time Equivalent (FTE):** 8-10 FTE
- **Total Costs:** Due to the heavy workload, it is necessary to mobilize engineers in and out of the project to keep the progress in sync with the upstream storage platform progress, and the diverse skills required (10 FTE x month full-time GO/Rust/blockchain engineer/front-end engineer/product manager/UI design ), we are requesting a 80,000 DAI Foundation grant. All funds will be used to cover personnel costs, including wages, taxes, insurance, benefits. The important thing is that we need to buy some machines to deploy the service and we are willing to pay part of the budget in DAI.

### Milestone 1 

- **Estimated duration:** 2 months
- **FTE:**  4 Developers & 1 Product Manager
- **Costs:** 25,000 DAI

| Number | Deliverable                      | Specification                                                |
| ------ | -------------------------------- | ------------------------------------------------------------ |
| 0a.    | License                          | Apache 2.0 / GPLv3 / MIT / Unlicense                         |
| 0b.    | Documentation                    | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can ) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| 0c.    | Testing Guide                    | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d.    | Docker                           | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e.    | Article                          | We will publish an **article** that explains the implementation and design details. |
| 1.     | Substrate module: pallet_storage | A module  record file storage information, file type, storage node, storage platform. |
| 2.     | Substrate module: pallet_did     | A module for storing user-provided decentralized identities. |
| 3.     | API                              | A unified storage API that provides fast storage and retrieval capabilities. |
| 4.     | Weights/Benchmarking             | implement benchmarking for pallet_player + pallet_pool to determine appropriate weights. |

### Milestone 2

- **Estimated Duration:** 2 months
- **FTE:**  5 developers
- **Costs:** 30,000 DAI

| Number | Deliverable                     | Specification                                                |
| ------ | ------------------------------- | ------------------------------------------------------------ |
| 0a.    | License                         | Apache 2.0 / GPLv3 / MIT / Unlicense                         |
| 0b.    | Documentation                   | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can run the relayer to listen to ink! events and relay transactions and query storage data. |
| 0c.    | Testing Guide                   | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d.    | Docker                          | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1.     | Develop  index query middleware | Use `Go` to develop decentralized index query middleware, mainly for data exchange between different storage platforms. |
| 2.     | Transaction relayer             | Verifies the validity of the submitted proof & transaction. If correct, it submits the transaction to the `ink!` contract |
| 3.     | API                             | Implement API endpoint for fetching relayer state, incluidng state and refund. |
| 4.     | Substrate module: pallet_dao    | Module for voting on on-chain runtime data, storage fees.    |
| 5.     | Weights/Benchmarking            | implement benchmarking for pallet_dao.                       |

### Milestone 3

- **Estimated Duration:** 2 months
- **FTE:**  3 developers
- **Costs:** 25,000 DAI

| Number | Deliverable                      | Specification                                                |
| ------ | -------------------------------- | ------------------------------------------------------------ |
| 0a.    | License                          | Apache 2.0 / GPLv3 / MIT / Unlicense                         |
| 0b.    | Documentation                    | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how to use dapp, including how to mint, transfer and sell NFT, defi pledge, etc. how the user interacts with the UI. |
| 0c.    | Testing Guide                    | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 1.     | ink! Contract(defi & nft)        | Implementing ink!  contract for `Storage Aggregator` verifier circuit |
| 2.     | UI/Desgin                        | Design UI based on the user input requirements.              |
| 3.     | User Interface                   | Integrate into existing dApp and build on top of the smart contract functionalities. |
| 4.     | End-user Test + Article/Tutorial | esting as an end-user product along with articles/tutorials of how to use `Storage Aggregator`. |

## Future Plans

Our team is committed to maintaining the maintenance, upgrade and operation of the Storage Aggregator network; in the later stage, based on user feedback, we will improve our project, and the team will open source and maintain the development code for at least three years.


## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation Website

Here you can also add any additional information that you think is relevant to this application but isn't part of it already, such as:

- Work you have already done.(Website design and product copy design, technical architecture research)
- If there are any other teams who have already contributed (financially) to the project.(no)
- Previous grants you may have applied for.   (no other grants)
