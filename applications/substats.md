# Substats (The framework of lightweight block explorer)

- **Team Name:** CESS LAB
- **Payment Address:** 0x41fC582784745Ec6B4860F47808b988a473fcEFc(USDT)
- **Level:** 2

## Project Overview 

### Overview

#### Background

The block explorer is the important portal for on-chain data visualization. It can record and count information such as each block, each transaction and address of different blockchain networks. The essence of the block explorer is to reasonably display native data and derived data to various users according to the actual situation of the blockchain network. The users of block explorer include at least: developers, users, token holders, miners, regulators, researchers, and people interested in blockchain.

With the goal of building a multi-chain ecosystem, Polkadot has gradually become the preferred solution for many blockchain projects. As more and more blockchain networks join the ecosystem, users have higher and higher requirements for block explorer.

The most influential block explorer in the Polkadot ecosystem is [Polkadot native explorer](https://polkadot.js.org/apps/#/). it  provides a large and comprehensive blockchain explorer, any blockchain network built on The Substrate can apply for access, and supports one-click Toggle, which is currently the primary option for many ecological project. Its characteristics can be summarized as follows:

1. **Rich real-time data display**. Provides the display of a large amount of data on blockchain such as blocks, validators, and community governance.

2. **Support wallet management**. Contains most functions of the wallet, and supports wallet management functions such as account generation, import, and token transfer.

3. **Developer friendly**. It contains a wealth of developer tools, and supports practical functions such as chain state query, transaction initiation, and RPC call.

4. **One-click import**. All blockchains developed based on the Substrate framework basically implement the same set of basic interfaces, and the Polkadot.js App only needs to provide a websockets link to implement the import.

But everything has two sides. The following inconveniences also exist behind such a powerful block explorer platform:

1. Front-end resources are bloated and network latency is high.

2. Since the web side of platform directly obtains and renders data through blockchain nodes, it leads to slower data reading speed.

3. Likewise, on-chain resources are relatively precious, resulting in more meaningful statistics that need to be processed that cannot be kept on-chain. However, these statistics have a direct impact on user experience.

Based on the above characteristics, Polkadot.js App is more suitable for the needs of developers and wallet-related operation scenarios. For more common query scenarios such as retrieving transactions, querying balances of wallet address, checking the basic status of the network, and querying miner information, the actual needs of users are "fast" rather than "more". Just like if you just want to buy a bottle of beer, then the convenience store in the community may be more suitable for your needs than the supermarket that is farther away.

Polkadot.js App is like a large supermarket with a wide variety of products. However, for the simple daily needs of users, convenience stores (lightweight block explorer) will be a good complement to it. So is there a lightweight block explorer that is easy enough to use in the current Polkadot ecosystem? The following is the situation of our research.

#### Current Solution

[Subscan](https://www.subscan.io/) is a block explorer that provides operations management services. It supports about 20 Substrate-based parallel chains and offers basic functions. At the same time, it also provides paid customization services for users who have higher API requirements. This model is more convenient for developers, however, the customization service fee can be as high as tens of thousands of USDT, and developers may abandon some functions due to financial concerns.

[Polkascan](https://explorer.polkascan.io/) is an open-source block explorer that is relatively lightweight and simple in data display. However, through code analysis on its Github, it has limited capability in data processing since it doesn't have a database and cannot perform data analysis.

In summary, we believe that there is a lack of a better open source lightweight explorer in the current Polkadot ecosystem. That's why we designed Substats - a lightweight block explorer framework. Different from Polkadot.js App, Substats provides lightweight components to reduce the dependence on the network and provides customized data display functions. And by building a stable background and database services to obtain more powerful data processing capabilities.

#### Features

● **On-chain data processing station**: A processing station is built between users and the blockchain network, which includes a cache (database) layer and a computing (data processing) layer. The cache layer is responsible for pulling the data on the chain to the local database for storage. The computing layer is responsible for processing the on-chain data in the database, so that it can be combined into more meaningful data for users, such as historical data statistics, network-wide computing power rankings, etc.

● **Convenient data display and retrieval**: Compared with reading blockchain network data through RPC nodes, it is more convenient and faster for the client's wxplorer to read directly in the database of the processing station built by Substats.

● **One-click construction**: Learn from the features of Polkadot.js App. The Substats framework only needs to configure a small amount of information to achieve one-click deployment and startup. Significantly reduce development costs.

● **Modular UI components**: The UI components of Substats are all decoupled, allowing developers to customize the development of UI components with low threshold.

● **Open source and security**: Substats only provides completely open source code, and is not responsible for replacing management and operation services. All services are deployed and operated by the project party, avoiding trust costs.

### Project Details

We have designed a set of explorer modular components for the Substrate ecosystem, which can be used by stakeholders (such as miners and storage users) and other users.Polkadot, Kusama and Rococo will be supported in first version. Users can inquire about basic information in the network, such as space information, rankings, blocks, transactions, addresses, visual trend charts, etc. Substats is open-source and has flexible scalability in both network and its functionalities. Hence early-stage projects or individual developers can easily integrate our components based on their business needs. The data analysis module and custom components are the two core functions of Substats.

#### High level design

# ![Proposal architecture](https://user-images.githubusercontent.com/15166250/192175233-441175e6-e736-4cb0-b580-c43f61f0c798.svg)


*Figure 1: Proposal architecture*

● **Data Processing**: Data processing can be divided into the following steps: data acquisition, data parsing, and persistent storage. As a block explorer framework, Substats optimizes each process to reduce unnecessary workload and improve efficiency for developers. For example, it supports custom data acquisition; realizes the separation of data read and write through the buffer queue; supports various types of data acquisition methods: RPC communication of full nodes, P2P protocol of peer nodes, etc.

● **Data Rendering**: In addition to providing developers with APIs for crawling block data and derived data, Substats also provides developers with a front-end framework which displays data such as block info, transaction info, and address info in a modular way, and each module can be customized. And Substats has a wealth of themes and icons to choose from.

#### Typical example

# ![Workflow](https://user-images.githubusercontent.com/15166250/192175253-2cc55813-be4c-469f-b621-a4f5d0468812.svg)

*Figure 2: Workflow*

1. The node service synchronizes the block data of the blockchain network. The node services here include full nodes of the network, third-party data retrieval services, etc.
2. The data crawling module obtains block data from blockchain nodes. Substats supports full node, P2P node, local database and other types of node service connection, and supports custom data read interfaces.
3. It writes the block data crawled from the node service to the buffer queue. The buffer queue is used to separate the process of crawling data and parsing data, and supports data integrity checking and exception handling.
4. The block data is taken out of the buffer queue and sent to the parser in order.
5. The parser parses the block data and writes it to the database in time. The parsing process is accelerated by concurrent execution.
6. For general block data, Substats provides a series of database table structure that enables developers to use it out of the box. For custom Pallet data, developers need to define the relevant table structure.
7. The front-end component periodically reads the relevant data in the database through the HTTP API to render the web page.

#### Mockups/designs of any UI components

- **Network Overview**

# ![Overview](https://user-images.githubusercontent.com/15166250/192175100-fd76fc3c-c0a0-4bb6-98aa-78ee2eb4d9c7.png)


- **Address Analysis**

# ![addressDetails](https://user-images.githubusercontent.com/15166250/192175151-a75dddfe-6d36-40ab-ab7f-5af1220eaf49.png)


- **Transaction Details**

# ![transaction](https://user-images.githubusercontent.com/15166250/192175186-fc8985a5-0992-46a4-a280-909dea71986e.png)


- **Block Details Details**

# ![blocks](https://user-images.githubusercontent.com/15166250/192175203-c6771d22-c27e-4511-88fc-99604cb21b96.png)

#### API specifications of the core functionality

- **Substats: List of the publicly exposed methods**

| No. 1       |                         |
| ----------- | ----------------------- |
| Method Name | **General**             |
| Method Type | Data request            |
| Returns     | DictionaryList          |
| Description | Get all dictionary list |

| No. 2       |                              |
| ----------- | ---------------------------- |
| Method Name | **Block query**              |
| Method Type | Data request                 |
| Returns     | BlockStates                  |
| Description | Query states info from block |

| No. 3       |                                    |
| ----------- | ---------------------------------- |
| Method Name | **Transaction query**              |
| Method Type | Data request                       |
| Returns     | TransactionResults                 |
| Description | Query states info from transactoin |

| No. 4       |                               |
| ----------- | ----------------------------- |
| Method Name | **Event query**               |
| Method Type | Data request                  |
| Returns     | EventResults                  |
| Description | Query states info from events |

| No. 5       |                              |
| ----------- | ---------------------------- |
| Method Name | **Consensus query**          |
| Method Type | Data request                 |
| Returns     | ConsensusResults             |
| Description | Query states info from miner |

### Ecosystem Fit

Help us locate your project in the Polkadot/Substrate/Kusama landscape and what problems it tries to solve by answering each of these questions:

- Where and how does your project fit into the ecosystem?

Our project provides the Polkadot/Substrate ecosystem a quick and convenient service that is in an open-source and lightweight way for creating their block explorers.

- Who is your target audience (parachain/dapp/wallet/UI developers, designers, your own user base, some dapp's userbase, yourself)?

Parachain/dapp/wallet/developers

## Team 👥

### Team members

- Teh Sunn Liu
- Shaka Lavigne
- Elden Young
- Yeou Sunn Liu
- Ted Zhang

### Contact

- **Contact Name:** Jessie Dai
- **Contact Email:** [jessie@cess.cloud](mailto:jessie@cess.cloud)
- **Website:** [https://cess.cloud](https://cess.cloud/)

### Legal Structure

- **Registered Address:** 22 St Leonard's Ave, Lostock, Bolton BL6 4JE, England
- **Registered Legal Entity:** Paul David Humphreys

### Team's experience

● In 2019, the CESS team was established and began to design the prototype design of the storage system network's underlying construction. 

● In 2020, CESS completed the design of the Random Rotational Selection consensus mechanism (R²S), Multi-format Data Rights Mechanism (MDRC) and Proof of Data Reduplication and Recovery (PoDR²). 

● In 2021, released CESS v0.1 white paper. Released CESS Demo v0.2, started BSC testnet storage mining. The end of the same year, CESS was awarded 1st place in the Polkadot Hackathon APAC Edition. 

● In February 2022, CESS joined the Substrate Builders Program. In July CESS passed all milestones in W3F to receive a grant for developing a storage pallet for Substrate. CESS launched its testnet the same month. 

### Team Code Repos

- https://github.com/CESSProject
- https://github.com/CESSProject/cess
- https://github.com/CESSProject/fmd-cess

## Development Roadmap 🔩

### Overview

- **Total Estimated Duration:** 5 months
- **Full-Time Equivalent (FTE):** 2
- **Total Costs:** *24,000 USD*

### Milestone 1 Implement The Backend Infrastructure

- **Estimated duration:** 2 months
- **FTE:** 2
- **Costs:** 9,000 USD

| Number | Deliverable             | Specification                                                |
| ------ | ----------------------- | ------------------------------------------------------------ |
| 0a.    | License                 | Apache 2.0 / GPLv3 / MIT / Unlicense                         |
| 0b.    | Documentation           | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how to use the product, display and explain the function of each component. |
| 0c.    | Testing Guide           | Unit testing will be applied to ensure reliability. Documentation of tests and results will be provided. |
| 1a.    | Develop the webservice  | We will use the express.js framework to build the basic back-end services, and install the database link toolkit to achieve stable network communication, database connection and other functions to prepare for upper-layer applications. |
| 1b.    | Develop the polkadot.js | We will use the polkadot.js API to interact with the PRC nodes of the blockchain network developed based on Substrate. And implement interfaces including block query, transaction query, Account query, Miner query, and new block subscription.            |
| 1c.    | Develop the API         | We will define the back-end API specification for the front-end service to call, including the data structure, request parameters, request event processing function, return data format, etc. At the same time, we will implement the construction of the interface layer to meet the custom development needs of developers. |
| 1d.    | Create the database     | We will build MySQL database service, create Table structure, complete index creation, data structure constraints, and implement MYSQL connection driver through Node.js. |

### Milestone 2 Implement Data Processing Tools

- **Estimated Duration:** 2 months
- **FTE:** 2
- **Costs:** 9,000 USD

| Number | Deliverable            | Specification                                                |
| ------ | ---------------------- | ------------------------------------------------------------ |
| 0a.    | License                | Apache 2.0 / GPLv3 / MIT / Unlicense                         |
| 0b.    | Documentation          | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how to use the product, display and explain the function of each component. |
| 0c.    | Testing Guide          | Unit testing will be applied to ensure reliability. Documentation of tests and results will be provided. |
| 1a.    | Data Reading Module    | It contains on-chain data of blocks, addresses, transactions, events, miners. It supports network switching of Polkadot, Kusama and Rococo, for instance. |
| 1b.    | Data Processing Module | It includes synchronization for block information, miner information, account lists, on-chain power timing recording, transaction data statistics and sorting. |
| 1c.    | The API Module         | We will develop functional interfaces to return the results of data processing to front-end services in the form of a unified interface. The interface includes block information acquisition, historical statistical data acquisition, and the entire network computing power ranking. |
| 2a.    | API Documentation      | We will complete a backend API documentation explaining how the API interacts with the data. |
| 2b.    | Operation Manual       | We will write an operation manual explaining how data reading, how network switching and processing can be used. |

### Milestone 3 Complete The Front-End Components

- **Estimated Duration:** 1 month
- **FTE:** 2
- **Costs:** 6,000 USD

| Number | Deliverable         | Specification                                                |
| ------ | ------------------- | ------------------------------------------------------------ |
| 0a.    | License             | Apache 2.0 / GPLv3 / MIT / Unlicense                         |
| 0b.    | Documentation       | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how to use the product, display and explain the function of each component. |
| 0c.    | Testing Guide       | Unit testing will be applied to ensure reliability. Documentation of tests and results will be provided. |
| 0d.    | Article             | We will publish an article explaining the problems that Substats solves and how it can benefit other projects. |
| 1a.    | Front-end Framework | We will provide lightweight React.js front-end components with styles based on LESS CSS extensions. These components can be customized and extended by developers. |
| 1b.    | API                 | We will define specifications for the API requests.          |
| 1c.    | Develop Interface   | We will complete the development of the front-end webpage and make it web and mobile compatible. |
| 2.     | UI Design           | We will provide a basic version of the user interface, based on the ant-design/charts icon component library. The other projects can customize the page style based on their needs. |
| 3.     | Operation Manual    | We will complete the operation manual, including sections on front-end component usage and data requests. |

## Future Plans

In the coming months, we will be promoting our project in Europe, South America and SouthEast Asia. We will build a bigger developer community and start testing. We will continue to maintain the component format to adapt to any updates in Substrate, meanwhile optimizing the product and providing the explorer components with more functions.

## Additional Information ➕

**How did you hear about the Grants Program?** We have heard from Parity Asia.

**What work has been done already?** We have already implemented a design prototype.

**Have you ever applied for other grants?** We had applied for two.

1. [grant 1](https://github.com/w3f/Grants-Program/blob/master/applications/CESS.md) , which had passed all the milestone deliveries on January, 2022.
2. [grant 2](https://github.com/w3f/Grants-Program/blob/master/applications/ces_data_store.md) , which had passed all the milestone deliveries on July, 2022.
