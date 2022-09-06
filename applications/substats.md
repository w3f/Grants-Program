# W3F Grant Proposal

- **Project Name:** Substats (The framework of lightweight block explorer)
- **Team Name:** CESS LAB
- **Payment Address:** 0x41fC582784745Ec6B4860F47808b988a473fcEFc(USDT)
- **Level:** 2

## Project Overview 

### Overview

#### Background

As the Polkadot/Substrate ecosystem continues to expand, the amount of data will increase astronomically, and more data types need to be incorporated. Hence block explorers have become an indispensable portal infrastructure in the ecosystem. We have noticed that in real business scenarios, data query is a frequently used function by developers and users. Existing block explorers can meet the needs in most cases, but the flexibility of having customization on the explorers would help developers enormously. 

Recently, we expect to incorporate the overview and transaction information of the data storage network into the block explorer. In the process of exploring the solution, we have not found a block explorer that is open-source and meets our development needs at the same time. Therefore, we aspire to develop a set of open-source components for developers, focused on data display, providing a compatible lightweight block explorer for the Polkadot/Substrate community.

#### Current Solution

The [Polkadot native explorer](https://polkadot.js.org/apps/#/) provides a large and comprehensive blockchain explorer, any blockchain network built on The Substrate can apply for access, and supports one-click Toggle, which is currently the primary option for many ecological project. Its characteristics can be summarized as follows:

1. **Rich real-time data display**. Provides the display of a large amount of data on blockchain such as blocks, validators, and community governance.

2. **Support wallet management**. Contains most functions of the wallet, and supports wallet management functions such as account generation, import, and token transfer.

3. **Developer friendly**. It contains a wealth of developer tools, and supports practical functions such as chain state query, transaction initiation, and RPC call.

5. **One-click import**. All blockchains developed based on the Substrate framework basically implement the same set of basic interfaces, and the Polkadot.js App only needs to provide a websockets link to implement the import.

But everything has two sides. The following inconveniences also exist behind such a powerful block explorer platform:

1. Front-end resources are bloated and network latency is high.

2. Since the web side of platform directly obtains and renders data through blockchain nodes, it leads to slower data reading speed.

3. Likewise, on-chain resources are relatively precious, resulting in more meaningful statistics that need to be processed that cannot be kept on-chain. However, these statistics have a direct impact on user experience.

Based on the above characteristics, Polkadot.js App is more suitable for the needs of developers and wallet-related operation scenarios. For more common query scenarios such as retrieving transactions, querying balances of wallet address, checking the basic status of the network, and querying miner information, the actual needs of users are "fast" rather than "more". Just like if you just want to buy a bottle of beer, then the convenience store in the community may be more suitable for your needs than the supermarket that is farther away.

Polkadot.js App is like a large supermarket with a wide variety of products. However, for the simple daily needs of users, convenience stores (lightweight block explorer) will be a good complement to it. So is there a lightweight block explorer that is easy enough to use in the current Polkadot ecosystem? The following is the situation of our research.

[Subscan](https://www.subscan.io/) is a block explorer that provides operations management services. It supports about 20 Substrate-based parallel chains and offers basic functions. At the same time, it also provides paid customization services for users who have higher API requirements. This model is more convenient for developers, however, the customization service fee can be as high as tens of thousands of USDT, and developers may abandon some functions due to financial concerns.

[Polkascan](https://explorer.polkascan.io/) is an open-source block explorer that is relatively lightweight and simple in data display. However, through code analysis on its Github, it has limited capability in data processing since it doesn't have a database and cannot perform data analysis.

In summary, we believe that there is a lack of a better open source lightweight explorer in the current Polkadot ecosystem. That's why we designed Substats - a lightweight block explorer framework. Different from Polkadot.js App, Substats provides lightweight components to reduce the dependence on the network and provides customized data display functions. And by building a stable background and database services to obtain more powerful data processing capabilities.

### Project Details

We have designed a set of explorer modular components for the Substrate ecosystem, which can be used by stakeholders (such as miners and storage users) and other users. Users can inquire about basic information in the network, such as space information, rankings, blocks, transactions, addresses, visual trend charts, etc. Substats is open-source and has flexible scalability in both network and its functionalities. Hence early-stage projects or individual developers can easily integrate our components based on their business needs. The data analysis module and custom components are the two core functions of Substats.

#### High level design

- **Data analysis module**

  realizes the processing and management of data on-chain. This module also realizes the data collection, retrieval, and processing functions. It extracts and derives meaningful information from the data, such as predicting trends from historical data, analyzing miners’ computing power, and more.

  

- **Customized components**

  Provide extensible front-end and back-end development components, and encapsulate data processing APIs, so the developers can quickly deploy code at their disposal.

   

#### **Business Scenarios**



- **Data analysis**

  Substats can support the back-end processing and analysis of the entire network for computer power, block information, transaction information, historical computing power trends, mining rewards, accounts, and other functions. Other applications can also request and analyze data through the API. In version 1.0, we mainly implement the basic queries for block information, addresses, transactions, miners' income, etc. It displays and processes all data types with different units based on the application scenarios.


- **Explorer customization**

  The components of the explorer are modular, allowing developers to pick and choose the ones they need accordingly. These components are lightweight and cross-terminal friendly. Other applications (such as exchanges, Defi, and wallets) can customize the interface and embed them into the application based on their needs.
  
#### **Features**

● **On-chain data processing station**: A processing station is built between users and the blockchain network, which includes a cache (database) layer and a computing (data processing) layer. The cache layer is responsible for pulling the data on the chain to the local database for storage. The computing layer is responsible for processing the on-chain data in the database, so that it can be combined into more meaningful data for users, such as historical data statistics, network-wide computing power rankings, etc.

● **Convenient data display and retrieval**: Compared with reading blockchain network data through RPC nodes, it is more convenient and faster for the client's wxplorer to read directly in the database of the processing station built by Substats.

● **One-click construction**: Learn from the features of Polkadot.js App. The Substats framework only needs to configure a small amount of information to achieve one-click deployment and startup. Significantly reduce development costs.

● **Modular UI components**: The UI components of Substats are all decoupled, allowing developers to customize the development of UI components with low threshold.

● **Open source and security**: Substats only provides completely open source code, and is not responsible for replacing management and operation services. All services are deployed and operated by the project party, avoiding trust costs.


###Product Design

- **Network Overview**

# ![Overview](https://github.com/CESSProject/W3F-illustration/blob/main/substats/homepage.jpg)

- **Address Analysis**

# ![addressDetails](https://github.com/CESSProject/W3F-illustration/blob/main/substats/address%20details.jpg)

- **Mining Analysis**

# ![Miners](https://github.com/CESSProject/W3F-illustration/blob/main/substats/Miners.jpg)

- **Transaction Details**

# ![transaction](https://github.com/CESSProject/W3F-illustration/blob/main/substats/transaction.jpg)

- **Block Details Details**

# ![blocks](https://github.com/CESSProject/W3F-illustration/blob/main/substats/blocks.jpg)

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

This section should break the development roadmap down into milestones and deliverables. To assist you in defining it, we have created a document with examples for some grant categories [here](https://github.com/w3f/Grants-Program/blob/master/docs/grant_guidelines_per_category.md). Since these will be part of the agreement, it helps to describe *the functionality we should expect in as much detail as possible*, plus how we can verify and test that functionality. Whenever milestones are delivered, we refer to this document to ensure that everything has been delivered as expected.

Below we provide an **example roadmap**. In the descriptions, it should be clear how your project is related to Substrate, Kusama or Polkadot. We *recommend* that teams structure their roadmap as 1 milestone ≈ 1 month.

For each milestone,

- make sure to include a specification of your software. *Treat it as a contract*; the level of detail must be enough to later verify that the software meets the specification.
- include the amount of funding requested *per milestone*.
- include documentation (tutorials, API specifications, architecture diagrams, whatever is appropriate) in each milestone. This ensures that the code can be widely used by the community.
- provide a test suite, comprising unit and integration tests, along with a guide on how to set up and run them.
- commit to providing Dockerfiles for the delivery of your project.
- indicate milestone duration as well as number of full-time employees working on each milestone.
- **Deliverables 0a-0d are mandatory for all milestones**, and deliverable 0e at least for the last one. If you do not intend to deliver one of these, please state a reason in its specification (e.g. Milestone X is research oriented and as such there is no code to test).

> ⚡ If any of your deliverables is based on somebody else's work, make sure you work and publish *under the terms of the license* of the respective project and that you **highlight this fact in your milestone documentation** and in the source code if applicable! **Teams that submit others' work without attributing it will be immediately terminated.**

### Overview

- **Total Estimated Duration:** 5 months
- **Full-Time Equivalent (FTE):** 2
- **Total Costs:** *30,000 USD*

### Milestone 1 Implement The Backend Infrastructure

- **Estimated duration:** 2 month
- **FTE:** 2
- **Costs:** 12,000 USD

| Number | Deliverable             | Specification                                                |
| ------ | ----------------------- | ------------------------------------------------------------ |
| 0a.    | License                 | Apache 2.0 / GPLv3 / MIT / Unlicense                         |
| 0b.    | Documentation           | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how to use the product, display and explain the function of each component. |
| 0c.    | Testing Guide           | Unit testing will be applied to ensure reliability. Documentation of tests and results will be provided. |
| 1a.    | Develop the webservice  | We will create the backend infrastructure which support modularization. |
| 1b.    | Develop the polkadot.js | We will create interactions with polkadot.js API.            |
| 1c.    | Develop the websocket   | We will create websocket component to realize stable network communication. |
| 1d.    | Develop the API         | We will define the API, which contains the instructions for the blockchain data. |
| 1e.    | Create the database     | We will create the database structure through mySQL to store chain state. |

### Milestone 2 Implement Data Processing Tools

- **Estimated Duration:** 2 month
- **FTE:** 2
- **Costs:** 12,000 USD

| Number | Deliverable            | Specification                                                |
| ------ | ---------------------- | ------------------------------------------------------------ |
| 0a.    | License                | Apache 2.0 / GPLv3 / MIT / Unlicense                         |
| 0b.    | Documentation          | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how to use the product, display and explain the function of each component. |
| 0c.    | Testing Guide          | Unit testing will be applied to ensure reliability. Documentation of tests and results will be provided. |
| 1a.    | Data Reading Module    | It contains on-chain data of blocks, addresses, transactions, events, miners. |
| 1b.    | Data Processing Module | It includes synchronization for block information, miner information, account lists, on-chain power timing recording, transaction data statistics and sorting. |
| 1c.    | The API Module         | We will develop API which includes the exchange of blockchain data. |
| 2a.    | API Documentation      | We will complete a backend API documentation explaining how the API interacts with the data. |
| 2b.    | Operation Manual       | We will write an operation manual explaining how data reading and processing can be used. |

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
| 1a.    | Front-end Framework | We will provide lightweight front-end components that can be customized and extended. |
| 1b.    | API                 | We will define specifications for the API requests.          |
| 1c.    | Develop Interface   | We will complete the development of the front-end webpage and make it web and mobile compatible. |
| 2.     | UI Design           | We will provide a basic version of the user interface, other projects can customize the page style based on their needs. |
| 3.     | Operation Manual    | We will complete the operation manual, including sections on front-end component usage and data requests. |

## Future Plans

In the coming months, we will be promoting our project in Europe, South America and SouthEast Asia. We will build a bigger developer community and start testing. We will continue to maintain the component format to adapt to any updates in Substrate, meanwhile optimizing the product and providing the explorer components with more functions.

## Additional Information ➕

**How did you hear about the Grants Program?** We have heard from Parity Asia.

**What work has been done already?** We have already implemented a design prototype.

**Have you ever applied for other grants?** We had applied for two.

1. [grant 1](https://github.com/w3f/Grants-Program/blob/master/applications/CESS.md) , which had passed all the milestone deliveries on January, 2022.
2. [grant 2](https://github.com/w3f/Grants-Program/blob/master/applications/ces_data_store.md) , which had passed all the milestone deliveries on July, 2022.
