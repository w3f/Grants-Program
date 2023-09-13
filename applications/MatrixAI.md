# MatrixAI

- **Team Name:** M-Labs
- **Payment Address:** 0x96a661ee0D829DF7c424D4415a51FFc256EEEd8A (Ethereum: USDC)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 3

## Project Overview :page_facing_up:

### Overview

*#Tag Line: MatrixAI-A decentralized AI computing power protocol.*

#### *Background & Motivation*

The global computing power scale is maintaining a high-speed and stable growth trend. The rapid rise of fields such as artificial intelligence, scientific research, and the metaverse poses higher demands on computing power. It is estimated that by 2030, the average annual growth rate of the global computing power scale will reach 65%.

However, we have to confront some issues.

1. *Expensive training costs*: Ordinary computing devices might take a considerable amount of time to complete training tasks, hence the necessity for utilizing a cluster of computing resources. The cost of training the ChatGPT model in a single instance is approximately 4 million USD, with daily hardware expenses reaching around 700,000 USD. These steep prices are not favorable for startups and those sensitive to costs.
2. *Underutilized computing facilities*: Data from the internet reveals that the global utilization rate of computing resources is around 20% to 30%. High-end servers are often distributed across various regions, and the idle computing resources are not being fully utilized.
3. *Vertical integration oligopolies monopolize the market*: Indeed, highly centralized resources and data monopolies give monopolistic companies significant control over data and pricing power for computing power. This can create barriers to entry for smaller players and limit competition in the market.

#### *What is MatrixAI?*

We have taken the first step by establishing a decentralized AI computing power marketplace called MatrixAI, which aims to aggregate idle AI computing resources from around the world. The vision of MatrixAI is to attract computing power suppliers globally to participate in the network through fair and transparent incentive mechanisms, thereby establishing a vast pool of idle computing resources. We aim to build MatrixAI as an AI computing resource layer network in the Web3 era, providing support for both small-scale AI computing services and high-performance computing clusters to meet diverse demands.

MatrixAI is committed to breaking the current centralized monopoly, bringing innovation and progress to AI applications across various industries, and bringing greater openness and sustainability to AI computing power services, driving the entire industry to new heights. We believe that through the efforts of MatrixAI, computing power suppliers worldwide will be able to fully unleash their potential, while computing power consumers will have access to more flexible, efficient, and cost-effective AI computing solutions. We look forward to partnering with you to create a future full of potential in the decentralized computing power domain.

#### *How do we build?*

The MatrixAI protocol's Polkadot-related construction components are as follows:

- Utilizing [Substrate](https://substrate.io/) as the blockchain framework to swiftly implement the MatrixAI network.
- Utilizing [Polkadot-js/apps](https://github.com/polkadot-js/apps) as the block explorer and achieving the implementation of custom functionalities.
- Using [Polkadot-js/api](https://github.com/polkadot-js/api) as the tool for interaction between MatrixAI clients and the blockchain.
- Enhancing the security and stability of the MatrixAI network through [parachains](https://wiki.polkadot.network/docs/learn-parachains)/[parathreads](https://wiki.polkadot.network/docs/learn-parathreads)/coretime.

### Project Details

*#Navi Bar: [System architecture](#system-architecture) · Core components: [1](#component-1--matrixai-ui)-[2](#component-2--matrixai-indexing)-[3](#component-3--matrixai-client)-[4](#component-4--matrixai-network)-[5](#component-5--matrixai-validator) · [Features](#overview-of-features) · [UI design](#mockups--ui-design)*

#### *System architecture*

![System architecture](https://github.com/MatrixAI-Lab/Grants-Program/assets/141611559/c1ce0e00-33d0-4168-a6e7-ba39c032c061)


The system architecture of MatrixAI is shown in the diagram above, and the entities involved are introduced as follows:

- *User*: Users with training model requirements.
- *Trainer*: Any user with idle computing resources can join the MatrixAI Network as a trainer without any barriers. Trainers act as consensus nodes in the network and earn block rewards by contributing valid computing power. Valid computing power can be accumulated through the following two methods:
    - *Drilling*: Completing measurable computing tasks([Model inference](https://cloud.google.com/bigquery/docs/inference-overview#:~:text=Machine%20learning%20inference%20is%20the,machine%20learning%20model%20into%20production.%22)) assigned by the network. Trainers can process such tasks in a streamlined manner upon joining the network. The computing tasks are published by projects collaborating with the MatrixAI Network and typically hold practical value. These tasks fall within the domain of machine learning and can be used to estimate the trainer's actual computing power. Additionally, due to their state independence, the computing tasks can be easily divided and verified, making them suitable for machines with various hardware conditions.
    - *Training*: Selling computing resources by placing orders on the computing power marketplace, entering into agreements with users, and completing the expected model training. Trainers who join the network can choose to place orders on the computing power marketplace at any time. Before initiating an order and determining the price, they can refer to the actual conditions in the computing power market. When users select a training machine, they can browse the reported key hardware configuration information of the machine, as well as its historical valid computing power values as a reference. Once the order is finalized, the trainer downloads the required data from the location specified by the user and completes the model training as requested.

#### *Component 1 — MatrixAI-UI*

Matrix-UI is a web frontend application designed for users to access and navigate the computing power marketplace, as well as place orders online. The UI design of Matrix-UI can be found in [this section](#mockups--ui-design) and includes features such as wallet login and [light client](https://github.com/smol-dot/smoldot) capabilities. The diagram below illustrates the architectural design.

![architecture for ui](https://github.com/MatrixAI-Lab/Grants-Program/assets/141611559/bb48ccbb-235b-40b6-bdc0-a006d33789f9)

#### *Component 2 — MatrixAI-Indexing*

The indexing aims to offer tailor-made APIs for structuring and delivering blockchain data to MatrixAI-UI, ensuring efficient access to indexed data such as [Subgraphs](https://thegraph.com/) and [Subquery](https://subquery.network/), thereby enhancing the speed of data retrieval.

1. *Overview of API interface*

Here is an introduction to the key API interfaces for the Indexing:

| Type | API Path | Description |
| --- | --- | --- |
| POST | /api/machine/filter | Retrieve filters for the computing power marketplace. |
| POST | /api/machine/market | Query the list of devices on the computing power marketplace. |
| POST | /api/machine/mine | Retrieve my list of devices. |
| POST | /api/order/mine | Retrieve my list of orders. |
| POST | /api/log/add | Upload training logs for a specific order. |
| POST | /api/log/list | Retrieve the training log list for a specific order. |

2. *Table structure of database*

The database table structure is designed as follows, primarily centered around orders and training machines:

![architecture for indexing](https://github.com/MatrixAI-Lab/Grants-Program/assets/141611559/e5db2965-c445-4609-9570-e8c2ad21766b)

#### *Component 3 — MatrixAI-Client*

The client is a crucial component for trainers. Trainers simply need to deploy this client on their own machines, and the rest requires minimal effort. For instance, it will automatically join the MatrixAI network and list orders on the computing power marketplace. When a user places an order, the client will promptly initiate the order's task. Additionally, upon task completion, it will submit the results back to the marketplace.

The client can be divided into three modules: Device Share, Task Match, and Status Inquiry, as illustrated in the diagram below.

![arch for client](https://github.com/MatrixAI-Lab/Grants-Program/assets/141611559/b26bed15-4d38-4d98-9b64-c2d1458a17e3)

- _Device Share_：Performing an initial performance assessment on new devices and obtaining fundamental hardware information. This assessment is carried out by training a model specifically designed for testing. Once the training is completed, the training results and hardware information are reported back to the MatrixAI network.
- _Task Match_：The client will continuously monitor the status of orders on the computing power marketplace. Once an order is assigned to a task, the client will proactively execute it. The execution process typically involves steps such as environment setup, data retrieval, and model training.
- _Status Inquiry_：The status retrieval during the task execution process is crucial for remote users. The client supports querying the status of various stages of the model training process, including in-training, training completed, training failed, etc. After the model training is successfully completed, the trained model also needs to be uploaded to a storage system for user downloading.

#### *Component 4 — MatrixAI-Network*

MatrixAI-Network is an implementation of the MatrixAI protocol based on Substrate. Initially, MatrixAI-Network will incorporate functionalities in a Pallet called "hashrate-market," which includes operations related to the inclusion and removal of computing power machines as well as various operations concerning orders on the computing power marketplace. Leveraging Substrate's extensive ecosystem, users can easily initiate transactions and query the chain state.

| No.1 |  |
| --- | --- |
| Method Name | **add_machine** |
| Method Type | Dispatchable Function |
| Param 1 (Type) | id: [u8; 16] |
| Param 2 (Type) | metadata:BoundedString<T> |
| Returns | DispatchResult |
| Description | Registering a machine with MatrixAI network. |

| No.2 |  |
| --- | --- |
| Method Name | **remove_machine** |
| Method Type | Dispatchable Function |
| Param 1 (Type) | id: [u8; 16] |
| Returns | DispatchResult |
| Description | Removing a machine from the MatrixAI network. |

| No.3 |  |
| --- | --- |
| Method Name | **make_offer** |
| Method Type | Dispatchable Function |
| Param 1 (Type) | id: [u8; 16] |
| Param 2 (Type) | price: BalanceOf<T> |
| Param 3 (Type) | max_duration: u32 |
| Param 4 (Type) | disk: u32 |
| Returns | DispatchResult |
| Description | Setting prices for registered machines and listing them on the computing power marketplace. |

| No.4 |  |
| --- | --- |
| Method Name | **cancel_offer** |
| Method Type | Dispatchable Function |
| Param 1 (Type) | id: [u8; 16] |
| Returns | DispatchResult |
| Description | Taking down machines that have been listed on the computing power marketplace. |

| No.5 |  |
| --- | --- |
| Method Name | **place_order** |
| Method Type | Dispatchable Function |
| Param 1 (Type) | id: [u8; 16] |
| Param 2 (Type) | seller: AccountOf<T> |
| Param 3 (Type) | machine_id: [u8; 16] |
| Param 4 (Type) | duration: u32 |
| Param 5 (Type) | metadata: BoundedString<T> |
| Returns | DispatchResult |
| Description | The buyers place order on the computing power marketplace. |

| No.6 |  |
| --- | --- |
| Method Name | **renew_order** |
| Method Type | Dispatchable Function |
| Param 1 (Type) | order_id: [u8; 16] |
| Param 2 (Type) | duration: u32 |
| Returns | DispatchResult |
| Description | The buyers renew an order before time runs out. |

| No.7 |  |
| --- | --- |
| Method Name | **order_completed** |
| Method Type | Dispatchable Function |
| Param 1 (Type) | order_id: [u8; 16] |
| Param 2 (Type) | metadata: BoundedString<T> |
| Param 3 (Type) | score: u32 |
| Returns | DispatchResult |
| Description | Machines notify the MatrixAI network that they have completed model training based on the order information. |

| No.8 |  |
| --- | --- |
| Method Name | **order_failed** |
| Method Type | Dispatchable Function |
| Param 1 (Type) | order_id: [u8; 16] |
| Param 2 (Type) | metadata: BoundedString<T> |
| Returns | DispatchResult |
| Description | Computing power machines notify the MatrixAI network that model training for a specific order has failed. |

| No.9 |  |
| --- | --- |
| Method Name | **submit_pot** |
| Method Type | Dispatchable Function |
| Param 1 (Type) | order_id: [u8; 16] |
| Param 2 (Type) | proofsdata: BoundedString<T> |
| Returns | DispatchResult |
| Description | Submitting the proofs of PoT for a specific order. |

| No.10 |  |
| --- | --- |
| Method Name | **verify_pot** |
| Method Type | Dispatchable Function |
| Param 1 (Type) | order_id: [u8; 16] |
| Param 2 (Type) | results: u8 |
| Returns | DispatchResult |
| Description | Submitting the result of PoT for a specific order. |

#### *Component 5 — MatrixAI-Validator*

The essential requirement for model training outsourcing services is to ensure the authenticity and reliability of the training process. In a decentralized computing power network, users shouldn't blindly trust trainers who provide computing power to faithfully execute their tasks. Instead, trainers might act against agreements and commitments for profit. For instance, trainers may engage in arbitrary behavior, deviate from required training procedures, and return erroneous model data to users. In the realm of cryptography, the principle of "trustless verification" is often followed.

Building on the aforementioned foundation, we delve deeper and propose the concept of Proof of Training (PoT). The underlying principle of PoT involves quantitatively measuring metrics such as verification accuracy and parameter distribution distance to validate whether intermediate checkpoints produced during the model training process match the final model output. The Validator incorporates the PoT module, which is employed to ascertain if the trainer adhered to the model training requirements specified in the order.

#### *Overview of features*

We aim to provide users with a seamless model training experience, and therefore, we have innovatively designed several features to minimize obstacles during product usage. The following are the product features that we will be particularly focused on in the upcoming milestones:

- _The Proof of Training_: In the web3 world, proof of work is often implemented through programs. To ensure that computing power providers genuinely deliver the intended work and train according to the models and datasets provided by the computing power purchasers, a mechanism for verifying the models and programs is necessary.
- _Device performance assessment program_: This program runs on the computing power provider's device and calculates the device performance index. This index can serve as a reference for users with computing needs. The calculation model for the performance index is planned for implementation in future milestones. The principle involves determining the performance index by calculating the time taken for generating random numbers and utilizing computing parameters of hardware devices, primarily GPUs and CPUs.
- _Model training time estimation_: This feature can provide users who are about to confirm computing power orders with a reference point. Users can decide how much computing power to purchase based on the training time estimation results. This helps users avoid overestimating the time and spending unnecessary costs. Important factors affecting training time include framework, model, dataset size, FLOPS, and network speed.
- _Console_: Large-scale AI model training might require multiple training iterations to complete. During the training process, situations like high loss curves or unexpected model accuracy might arise. Therefore, we provide a console to assist users in optimizing models and parameters.
- _Flexible device sharing configuration_: In addition to providing computing power, providers can customize the storage space of the hard drive and the available duration of their devices. This allows computing power providers to conveniently control costs and manage hardware devices beyond GPUs and CPUs.

#### *Mockups / UI design*

We have currently completed the prototype design and a majority of the UI design. Moving forward, we will continue to enhance interactions and event feedback within the pages. The main pages that have been completed are showcased as follows:

1. _Computing Power Marketplace_
![image](https://github.com/MatrixAI-Lab/Grants-Program/assets/141611559/ede93c61-315a-4270-a268-2b9ea4af3f0d)


- Users can query the device information and pricing of computing power providers on this page.
- Users can filter devices based on conditions such as the number and model of graphics cards, the device's location, and pricing.
- Display the reliability of each miner and the device performance index.

2. _Edit Model_
![image2](https://github.com/MatrixAI-Lab/Grants-Program/assets/141611559/d47bb3a2-174b-493f-8420-af33ec6c00f6)


- Users utilize this page to submit orders for the usage of computing power devices.
- After defining the task content, dataset, and parameters for model training, the next step involves automatically estimating the duration of the training process.

3. _Share Device_
![image3](https://github.com/MatrixAI-Lab/Grants-Program/assets/141611559/99ead9e3-5c25-475b-8580-c7086df2d9ef)

- Once computing power providers run the MatrixAI client on their servers, the device information will be displayed on this page.
- Display device information and the current status of the device.

4. _My Orders_
![image4](https://github.com/MatrixAI-Lab/Grants-Program/assets/141611559/6f527017-c540-47d4-a4ac-014f089edb2a)

- Display current and historical orders.
- Display the status of orders. For incomplete orders, users can perform actions on the model training tasks.

5. _Order Details_
![image5](https://github.com/MatrixAI-Lab/Grants-Program/assets/141611559/790c6c4d-e3db-424e-8a75-d9fe01fda05c)


- Display detailed information about orders, including device information, task details, and information from the blockchain.

6. _Console_
![image6](https://github.com/MatrixAI-Lab/Grants-Program/assets/141611559/ed1253e7-596e-490a-9abc-1eb543f9948b)


- Users can optimize model training parameters.

7. _Tasking Log_
![image7](https://github.com/MatrixAI-Lab/Grants-Program/assets/141611559/4043857d-94db-40e0-8ee9-d46ffea4b6b3)


- Display logs of model training tasks.

8. _Faucet_
![image8](https://github.com/MatrixAI-Lab/Grants-Program/assets/141611559/7065f239-b9be-4e19-a348-cb038db66bf5)


- Provide some free testing token for users.

### Ecosystem Fit

#### Q: Where and how does your project fit into the ecosystem?

With the rise of the DePIN (Decentralized Physical Infrastructure Network) track, professionals in the crypto world are once again focusing their attention on the field of decentralized infrastructure. It is believed that when decentralized infrastructure is expanded and capable of achieving large-scale applications, it will bring explosive growth to Web3.

The development of the Polkadot ecosystem has already incubated various infrastructure projects, such as storage networks like [Crust](https://crust.network/) and [CESS](https://cess.cloud/), CDNs like [Deeper Network](https://www.deeper.network/), digital identity networks like [Litentry](https://www.litentry.com/), and privacy computing-related projects like [Manta](https://manta.network/). Furthermore, Polkadot's [XCMP](https://wiki.polkadot.network/docs/learn-xcm-transport) (Cross-Chain Message Passing) provides secure interoperability between these infrastructure networks, creating ideal conditions for future application explosions—a feat that other networks cannot easily achieve. This holds great appeal for MatrixAI, which also operates in the decentralized infrastructure space with a focus on AI-specific computing.

MatrixAI aims to become a part of Polkadot's DePIN landscape in the future. In our roadmap, MatrixAI, as a decentralized AI computing power marketplace, will leverage various Polkadot ecosystem projects:

- _Identity Privacy and Access Control_: MatrixAI can utilize [Litentry](https://www.litentry.com/) to protect identity privacy and implement access control for computing power demanders.
  
- _VPN Integration_: computing power providers from around the world can join the MatrixAI network using [Deeper Network](https://www.deeper.network/)'s VPN services.

- _Data Transfer_: Model data can be securely transmitted between computing power demanders and providers through Web3 storage protocols like [Crust](https://crust.network/) and [CESS](https://cess.cloud/).

- _Privacy in Model Training_: MatrixAI can benefit from the privacy assurances provided by Manta's latest research in Zero-Knowledge Machine Learning (ZKML) during the model training process.

This interconnected ecosystem within the Polkadot network positions MatrixAI to thrive in the emerging DePIN landscape, offering AI-specific computing capabilities to a broader decentralized infrastructure.

#### Q: Who is your target audience (parachain/dapp/wallet/UI developers, designers, your own user base, some dapp's userbase, yourself)?

Everyone. Any individual or organization with training model requirements can complete training tasks at a low cost. Idle computing resources from personal computers, servers, and mobile devices owned by individuals and businesses can all be utilized within the computing power marketplace to earn income.

#### Q: What need(s) does your project meet?

From a product perspective, the creators of groundbreaking AI products have traditionally been tech giants like Microsoft's OpenAI, Nvidia, Google, and even Meta. However, once such giants establish a monopoly, it can create organizational inertia that hinders technological innovation. MatrixAI is committed to breaking the current centralized monopoly to bring innovation and progress to AI applications across various industries. By providing greater openness and sustainability to AI computing services, we aim to propel the entire industry to new heights.

From a technical standpoint, our choice of the Polkadot ecosystem is based on the following characteristics:

1. _Modularity and Customizability_: This advantage is driven by Substrate, allowing our team to flexibly adjust and modify the network based on custom use cases.

2. _High Security_: Improving the security and stability of the MatrixAI network through parachains/parathreads/coretime.

3. _Interoperability_: Projects within the Polkadot ecosystem can achieve seamless interoperability, simplifying interactions between various projects.

4. _On-Chain Governance_: Enhancing transparency and fairness in the MatrixAI network and facilitating better management and coordination for the team.

5. _Light Client_: Supporting the MatrixAI network to operate in a more decentralized manner, without relying on more centralized RPC node services.

#### Q: Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem? 

No similar projects have been found in the Polkadot ecosystem, and there are no projects in other ecosystems that support both model training and model inference.

## Team :busts_in_silhouette:

### Team members

- Dr.Jerry (Team leader)
- Miles Fan (Full-stack Developer)
- Han (Product Manager)
- Baron Valaa (AI Engineer)
- Thirteen chen (Smart Contract Developer)

### Contact

- **Contact Name:** Miles Fan
- **Contact Email:** matrixai99@gmail.com
- **Website:** https://matrixai.cloud/

### Legal Structure

- **Registered Address:** 100 Cyberport Road, Cyberport 3, Hong Kong
- **Registered Legal Entity:** CONTRACT LAB Ltd.

### Team's experience

We are a highly skilled professional team with extensive years of experience in AI research and development. Within our team, a majority of members possess profound expertise in fields such as deep learning, privacy computing, and federated learning. We have not only accumulated substantial experience in these cutting-edge technological domains but also consistently stay updated with the latest industry knowledge through ongoing learning and exploration.

Moreover, our team has demonstrated proficiency in application development within the Web3, backed by rich practical experience and maturity. We are adept at mastering both Ethereum and Polkadot technology stacks, enabling us to flexibly apply these blockchain technologies to craft exceptional applications. Recently, our self-developed MatrixAI project achieved an outstanding second place in the Polkadot Hackathon 2023 Summer.

### Team Code Repos

- https://github.com/MatrixAI-Lab

## Development Status :open_book:

MatrixAI was incubated during the [Polkadot Hackathon 2023 Summer](https://github.com/parity-asia/hackathon-2023-summer). The current development status of MatrixAI is still in the relatively simple demo stage, and relevant materials are presented as follows.

| Materials | Specification |
| --- | --- |
| [Readme.md](https://github.com/parity-asia/hackathon-2023-summer/tree/main/projects/27-MatrixAI) | Navigation documentation. |
| MatrixAI-UI | The current version currently displays rudimentary information on some pages, such as computing power machines and orders. It lacks functionalities like a console, logs, faucet, and does not support polkadot light client. |
| MatrixAI-Client | The current version only supports training with fixed models using [PaddlePaddle](https://github.com/PaddlePaddle/Paddle). |
| MatrixAI-Network | The current version has completed the creation of a Pallet called "hashrate-market," which includes operations and storage related to machines and orders. However, in the future roadmap, there are still many adjustments needed for the existing methods. Additionally, there is a lack of methods related to PoT. |

To more precisely depict what MatrixAI plans to achieve in this proposal, we have organized the information as shown in the diagram below. Each small square in the diagram represents a specific functional module, where gray squares indicate that the functionality has already been implemented and requires no major adjustments or changes; green squares represent modules that exist but require substantial modifications; blue squares denote newly added functional modules.

![status](https://github.com/MatrixAI-Lab/Grants-Program/assets/141611559/f79004a7-c59a-49bb-8e7c-a796bf5ac3d6)


## Development Roadmap :nut_and_bolt:

This section should break the development roadmap down into milestones and deliverables. To assist you in defining it, we have created a document with examples for some grant categories [here](notion://www.notion.so/docs/Support%20Docs/grant_guidelines_per_category.md). Since these will be part of the agreement, it helps to describe *the functionality we should expect in as much detail as possible*, plus how we can verify and test that functionality. Whenever milestones are delivered, we refer to this document to ensure that everything has been delivered as expected.

Below we provide an **example roadmap**. In the descriptions, it should be clear how your project is related to Substrate, Kusama or Polkadot. We *recommend* that teams structure their roadmap as 1 milestone ≈ 1 month.

### Overview

- **Total Estimated Duration:** 5 months
- **Full-Time Equivalent (FTE):** 2 FTE
- **Total Costs:** 48,000 USD

### Milestone 1 Basic functionality

- **Estimated Duration:** 1 month
- **FTE:** 2
- **Costs:** 10,000 USD

| Number | Deliverable | Specification |
| --- | --- | --- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide 1) inline documentation of the code for the deliverables [1.1 MatrixAI-Network] and [1.4-1.5 MatrixAI-Indexing], and 2) a guide on how to deploy deliverables [1.2-1.3 MatrixAI-UI] locally, as well as explaining the meanings of terms and buttons. |
| 0c. | Testing and Testing Guide | Core functions of deliverable [1.1] will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide Dockerfiles for MatrixAI-Network and MatrixAI-Indexing that can be used to test all the functionality delivered with this milestone. |
| 1.1. | MatrixAI-Network: pallet-hashrate-market | We will create a Substrate module that will implement the first 8 functions that described in [Component 4](#component-4--matrixai-network). Additionally, this includes completing the corresponding unit tests and benchmark tests. However, since the frontend pages of the application are not yet fully constructed at this time, we can temporarily interact with the application through the block explorer. | 
| 1.2. | MatrixAI-UI: Computing Power Marketplace | We will implement the web page for the computing power marketplace, aligning the design and detailed functionality description with the part 1 in the [UI Design](#mockups--ui-design). Since the functionality of the other modules is not yet complete, the data displayed on the page at this time should be used for reference only and may not be accurate. |
| 1.3. | MatrixAI-UI: Share Device | We will implement the web page for the share device, aligning the design and detailed functionality description with the part 3 in the [UI Design](#mockups--ui-design). Since the functionality of the other modules is not yet complete, the data displayed on the page at this time should be used for reference only and may not be accurate. |
| 1.4. | MatrixAI-Indexing: Basic | We will build the infrastructure with Golang, including HTTP communication services and MySQL database services. Additionally, we will provide convenient deployment commands for it. |
| 1.5. | MatrixAI-Indexing: Database | We will build the database management system based on MySQL and create the database and tables according to the table structure design outlined in Chapter 2 of [Component 2](#component-2--matrixai-indexing), including index optimizations. |

### Milestone 2 Features of order about computing power

- **Estimated Duration:** 1 month
- **FTE:** 2
- **Costs:** 8,000 USD

| Number | Deliverable | Specification |
| --- | --- | --- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide 1) inline documentation of the code for the deliverables [2.3-2.4 MatrixAI-Indexing] and [2.5 MatrixAI-Client] and 2) a basic tutorial that explains how the new functionality works for deliverable [2.5], and 3) a guide on how to deploy deliverables [2.1-2.2 MatrixAI-UI] locally, as well as explaining the meanings of terms and buttons. |
| 0c. | Testing and Testing Guide | Core functions of deliverable [2.5] will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide Dockerfiles for MatrixAI-Indexing and MatrixAI-Client that can be used to test all the functionality delivered with this milestone. |
| 2.1. | MatrixAI-UI: Edit Model | We will implement the web page for the edit model, aligning the design and detailed functionality description with the part 2 in the [UI Design](#mockups--ui-design). Since the functionality of the other modules is not yet complete, the data displayed on the page at this time should be used for reference only and may not be accurate. |
| 2.2. | MatrixAI-UI: My Orders | We will implement the web page for the my orders, aligning the design and detailed functionality description with the part 4 in the [UI Design](#mockups--ui-design). Since the functionality of the other modules is not yet complete, the data displayed on the page at this time should be used for reference only and may not be accurate. |
| 2.3. | MatrixAI-Indexing: Blockchain SDK | We will use [GSRPC](https://github.com/centrifuge/go-substrate-rpc-client) to build the blockchain SDK, enabling interactions with the chain, such as reading the required chain states from MatrixAI-Network. |
| 2.4. | MatrixAI-Indexing: Machine | We will implement the interfaces 1, 2, and 3 outlined in the [Component 2](#component-2--matrixai-indexing). |
| 2.5. | MatrixAI-Client: Device Share | We will implement the functionality for performance evaluation of new devices. This evaluation will primarily involve training models dedicated to testing. We will also support the retrieval of basic hardware information from the devices and the reporting of evaluation results and hardware information back to the MatrixAI network. |

### Milestone 3 Features of building testnet

- **Estimated Duration:** 1 month
- **FTE:** 2
- **Costs:** 12,000 USD

| Number | Deliverable | Specification |
| --- | --- | --- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide 1) inline documentation of the code for the deliverables [3.1-3.2 MatrixAI-Network], [3.5 MatrixAI-Indexing] and [3.6 MatrixAI-Client] and 2) a basic tutorial that explains how the new functionality works for deliverable [3.6], and 3) a guide on how to deploy deliverable [3.3-3.4 MatrixAI-UI] locally, as well as explaining the meanings of terms and buttons. |
| 0c. | Testing and Testing Guide | Core functions of deliverable [3.6] will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide Dockerfiles for MatrixAI-Network, MatrixAI-Indexing and MatrixAI-Client that can be used to test all the functionality delivered with this milestone. |
| 3.1. | MatrixAI-Network: BABE | We will be using the BABE consensus mechanism to replace Aura, preparing for the release of the testnet. |
| 3.2. | MatrixAI-Network: chain config | We will complete the initialization of the chain, including configuring testnet identifiers, Token identifiers, bootnodes, and startup accounts. Additionally, we support the quick startup of nodes through adding specific flag. | 
| 3.3. | MatrixAI-UI: Order Details | We will implement the web page for the order details, aligning the design and detailed functionality description with the part 5 in the [UI Design](#mockups--ui-design). Since the functionality of the other modules is not yet complete, the data displayed on the page at this time should be used for reference only and may not be accurate. | 
| 3.4. | MatrixAI-UI: Light Client | We will introduce the [smoldot](https://github.com/smol-dot/smoldot), which supports connecting to Substrate-based chains as a light client, thus phasing out the ws service of RPC nodes. |
| 3.5. | MatrixAI-Indexing: Order | We will implement the interfaces 4 outlined in the [Component 2](#component-2--matrixai-indexing). |
| 3.6. | MatrixAI-Client: Task Match | We will implement the functionalities related to model training, including environment configuration, data retrieval, and model training. Additionally, we will adapt to interfaces for storage services such as IPFS and AWS S3, supporting stable data downloads and uploads. |

### Milestone 4 Additional features

- **Estimated Duration:** 1 month
- **FTE:** 2
- **Costs:** 10,000 USD

| Number | Deliverable | Specification |
| --- | --- | --- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide 1) inline documentation of the code for the deliverables [4.1 MatrixAI-Network], [4.5 MatrixAI-Indexing] and [4.6 MatrixAI-Client] and 2) a basic tutorial that explains how the new functionality works for deliverable [4.6], and 3) a guide on how to deploy deliverable [4.2-4.3-4.4 MatrixAI-UI] locally, as well as explaining the meanings of terms and buttons. |
| 0c. | Testing and Testing Guide | Core functions of deliverables [4.1] and [4.6] will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide Dockerfiles for MatrixAI-Network, MatrixAI-Indexing and MatrixAI-Client that can be used to test all the functionality delivered with this milestone. |
| 4.1. | MatrixAI-Network: faucet | We will create a Substrate module to initialize the faucet account, allowing anyone to claim test tokens by calling its methods. |
| 4.2. | MatrixAI-UI: Console | We will implement the web page for the console, aligning the design and detailed functionality description with the part 6 in the [UI Design](#mockups--ui-design). |
| 4.3. | MatrixAI-UI: Tasking Log | We will implement the web page for the tasking log, aligning the design and detailed functionality description with the part 7 in the [UI Design](#mockups--ui-design). |
| 4.4. | MatrixAI-UI: Faucet | We will implement the web page for the faucet, aligning the design and detailed functionality description with the part 8 in the [UI Design](#mockups--ui-design). |
| 4.5. | MatrixAI-Indexing: Log | We will implement the interface 5, 6 outlined in the [Component 2](#component-2--matrixai-indexing). |
| 4.6. | MatrixAI-Client: Status Inquiry | We will implement the functionality to query the status of various stages in the model training process, including training in progress, training completed, and training failed, among others. |

### Milestone 5 Features of PoT

- **Estimated Duration:** 1 month
- **FTE:** 2
- **Costs:** 8,000 USD

| Number | Deliverable | Specification |
| --- | --- | --- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide 1) inline documentation of the code for the deliverables [5.1 MatrixAI-Network], [5.2 MatrixAI-Validator] and 2) a basic tutorial that explains how the new functionality works for deliverable [5.2]. |
| 0c. | Testing and Testing Guide | Core functions of deliverables [5.1] and [5.2] will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide Dockerfiles for MatrixAI-Network and MatrixAI-Validator that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an article that explains both AI compute demanders and AI compute providers on how to participate in MatrixAI's compute marketplace from their respective perspectives. |
| 5.1. | MatrixAI-Network: pallet-hashrate-market | We will create a Substrate module that will implement the last 2 functions that described in [Component 4](#component-4--matrixai-network). Additionally, this includes completing the corresponding unit tests and benchmark tests. |
| 5.2. | MatrixAI-Validator | We will implement a training proof module that can be used to verify whether the trainer has trained the model as per the order requirements. To demonstrate the effectiveness of this algorithm, we will provide at least three example models to showcase that models trained against the requirements cannot pass the algorithm's validation. |

## Future Plans

As a decentralized AI computing power infrastructure, MatrixAI is committed to achieving more cost-effective supply, a healthy subsidy mechanism, and verifiable computing power. To achieve these goals, we will continue to develop the features related to model inference. Additionally, MatrixAI is preparing to participate in [SBP](https://substrate.io/ecosystem/substrate-builders-program/), aiming to receive broader support and collaboration within the Polkadot ecosystem.

## Referral Program (optional) :moneybag:

- **Referrer:** /
- **Payment Address:** /

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation Website.
