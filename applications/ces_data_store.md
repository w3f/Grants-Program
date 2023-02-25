# Data Store Pallet

- **Team Name:** CESS LAB
- **Payment Address:** 0x41fC582784745Ec6B4860F47808b988a473fcEFc(USDT)
- **Level:** 1

## Project Overview :page_facing_up:

### Overview

#### Background

As a versatile blockchain framework, Substrate has a variety of modules (a.k.a. pallets) for developers to reuse. From resource management such as accounts and assets to utilities such as random number generators and schedulers, these existing pallets could meet the need of most developers' application scenarios. However, there is still room for improvement.

Recently we have a requirement to implement a data storage service on Substrate, and after checking through all existing pallets, we did not find one that meets our need. So we would like to develop a custom pallet to fulfill this purpose.

We are not talking about something very niche here. On the contrary, it is a common scenario that an application would continuously consume and generate various data, whether it is system, user, or just temporary levels, during operations. Many dApps have a large number of scenarios that require off-chain data storage services, such as NFTs. The quality of the storage service chosen will directly affect the performance and reliability of the entire application.

So we hope to offer Substrate/Polkadot community with pallets (and toolchains) dedicated for storage services that are compatible with current Substrate APIs. So developers only need to add tiny amount of code change to leverage CESS stable and secure data storage. We believe this will further enhance the development experiences when adopting Substrate and enrich the Polkadot ecosystem.

#### Current Solution

There is only one pallet related to data storage in the existing Substrate FRAME, aka, [Transaction Storage Pallet](https://paritytech.github.io/substrate/latest/pallet_transaction_storage/index.html). It supports running an IPFS node side-by-side with Substrate and allowing data to be retrieved by IPFS after putting it in Substrate storage. However, its application scope is greatly limited due to its inherent characteristics and several defects in the following aspects.

1. Data need to be uploaded to the blockchain network. Although this data is not actually stored on the chain, they still incur additional gas costs and congestion, which is not suitable for large file storage.

2. All validator nodes need to establish IPFS service for themselves, which subject to many restrictions.

3. The development is difficult since the Substrate-based code needs to be greatly modified.

4. This only supports file upload on the Substrate side. Viewers need to retrieve it via IPFS clients.


### Project Details

We design and implement a data storage service based on Substrate. On one hand, there is no need for a validator node to start additional service, and no major modifications to substrate-based code as well. Therefore, developers can easily integrate our storage service, whether it is a newly-built chain or an existing chain. On the other hand, by customizing the storage REST component, users could upload and download data conveniently without installing additional client programs.

#### High level design

Our proposal architecture is shown in the figure below, which consists of the Data Store Pallet and custom-built Storage Sidecar (inspired by [Substrate API Sidecar](https://github.com/paritytech/substrate-api-sidecar)).

# ![Figure 1: Proposal architecture](https://raw.githubusercontent.com/CESSProject/W3F-illustration/main/substrate-builder-program/09.svg)

*Figure 1: Proposal architecture*

- **Data Store Pallet**: Realize the recording and management of stored data. This pallet implements functions related to meta-data, e.g. root data management, data owner management, and data classification regarding the stored data.

- **Custom-built Storage Sidecar**: Provide RESTful service to interact with Data Store Pallet. The difference from Substrate API Sidecar is that, in addition to the basic functions of interacting with the substrate-based chain, Storage Sidecar encapsulates storage-related API, including data storage and data retrieval. The data transmitted by users will eventually be stored in [**CESS Storage System**](https://github.com/CESSProject/cess) through this interface.

#### Typical example

Data storage and retrieval are the two core features for a data storage service. They are illustrated in details below.

# ![Figure 2: Typical example process](https://raw.githubusercontent.com/CESSProject/W3F-illustration/main/substrate-builder-program/10.svg)

*Figure 2: Typical example process*

- **Data Storage**

1. A user calls the data storage API of the Custom-built Storage Sidecar to upload the data file;
2. Forward the data to CESS by calling the encapsulated CESS API;
3. Once it is confirmed that the data has been written, Custom-built Storage Sidecar will call Extrinsic to record the relevant information of the data file on-chain;
4. CESS Storage System maintains the integrity and privacy of data throughout its life cycle.

- **Data Retrieval**

5. A user calls the storage API of the Custom-built Storage Sidecar to retrieve the target data;
6. Custom-built Storage Sidecar to query on-chain data routing information;
7. Call the CESS data retrieval API with the routing info;
8. Retrieve and return the target data from CESS Storage System;
9. Return the target data to Custom-built Storage Sidecar;
10. Custom-built Storage Sidecar updates on-chain information, if necessary;
11. Return the target data to the user.

#### API specifications of the core functionality

- **Data Store Pallet: List of the publicly exposed methods**

|No. 1||
|---|---|
|Method Name|**store**|
|Method Type|Dispatchable Function|
|Parameter 1 (Type)|filename:Vec\<u8\>|
|Parameter 2 (Type)|fileid:Vec\<u8\>|
|Parameter 3 (Type)|filesize:Vec\<u8\>|
|Parameter 4 (Type)|keywords:Vec\<u8\>|
|Returns|DispatchResult|
|Description|Upload meta-info of stored file on chain.|

|No. 2||
|---|---|
|Method Name|**retrieve**|
|Method Type|Dispatchable Function|
|Parameter 1 (Type)|fileid:Vec\<u8\>|
|Returns|DispatchResult|
|Description|Check if the caller has permission to get the specified file.|

|No. 3||
|---|---|
|Method Name|**replace**|
|Method Type|Dispatchable Function|
|Parameter 1 (Type)|old_fileid:Vec\<u8\>|
|Parameter 2 (Type)|filename:Vec\<u8\>|
|Parameter 3 (Type)|fileid:Vec\<u8\>|
|Parameter 4 (Type)|filesize:Vec\<u8\>|
|Parameter 5 (Type)|keywords:Vec\<u8\>|
|Returns|DispatchResult|
|Description|Upload and replace old meta-info with new's of stored file on chain.|

|No. 4||
|---|---|
|Method Name|**delete**|
|Method Type|Dispatchable Function|
|Parameter 1 (Type)|del_fileid:Vec\<u8\>|
|Returns|DispatchResult|
|Description|Delete the meta-info of the specified file, and the caller must be the owner of the file.|

|No. 5||
|---|---|
|Method Name|**edit**|
|Method Type|Dispatchable Function|
|Parameter 1 (Type)|fileid:Vec\<u8\>|
|Parameter 2 (Type)|new_filename:Vec\<u8\>|
|Parameter 3 (Type)|new_keywords:Vec\<u8\>|
|Returns|DispatchResult|
|Description|Support to modify meta-info of the owner's specified file.|

|No. 6||
|---|---|
|Method Name|**query**|
|Method Type|Custom RPC|
|Parameter 1 (Type)|keywords:Vec\<u8\>|
|Returns|queried meta-info|
|Description|Support to query meta-info of the owner's specified file with some keywords.|


- **Custom-built Storage Sidecar: New API interface overview**

|Type|API Path|Description|
|---|---|---|
|POST|/api/store|Store files to the CESS storage system and will call store extrinsic.|
|GET|/api/retrieve|Check if the caller has permission with retrieve extrinsic and get the specified file.|
|POST|/api/replace|Replace stored file with new one and store to the CESS storage system, then call replace extrinsic.|
|POST|/api/delete|Call delete extrinsic and delete the file in CESS storage system.|
|POST|/api/edit|Support to modify meta-info of the owner's specified file.|
|GET|/api/query|Support to query meta-info of the owner's specified file with some keywords.|
|GET|/api/list|List all the files info of caller.|
|...|...||

### Ecosystem Fit

Help us locate your project in the Polkadot/Substrate/Kusama landscape and what problems it tries to solve by answering each of these questions:

- Where and how does your project fit into the ecosystem?

Our project offers storage services to all Substrate-based networks in a convenient way which currently does not have a good enough solution.

- Who is your target audience (parachain/dapp/wallet/UI developers, designers, your own user base, some dapp's userbase, yourself)?

The substrate developers who want to get storage services.

## Team :busts_in_silhouette:

### Team members

* Teh Sunn Liu
* Yeou Sunn Liu
* Ted Zhang

### Contact

* **Contact Name:** Jessie Dai
* **Contact Email:** jessie@cess.cloud
* **Website:** http://cess.cloud

### Legal Structure

* **Registered Address:** 22 St Leonard's Ave, Lostock, Bolton BL6 4JE, England
* **Registered Legal Entity:** Paul David Humphreys

### Team's experience

We have a team of professionals in getting this done. The backgrounds of team members include but are not limited to cloud computing, consensus algorithms and distributed storage. Most of them have been working in their respective fields for many years and have rich industry experience and solutions. The team members are distributed in the UK, the US, China and India, ranging from research scholars and cryptography experts to senior technical managers and Substrate development engineers.

So far, one of the team's project [**CESS**](https://github.com/CESSProject/cess) is gradually integrating into the Polkadot ecosystem. Won the 1st Place in Polkadot Hackthon APAC Edition in 2021, passed all deliveries of a [**applied grant**](https://github.com/w3f/Grants-Program/blob/master/applications/CESS.md), and officially joined the Substrate Builder Program on February 14, 2022.

### Team Code Repos

- https://github.com/CESSProject
- https://github.com/CESSProject/cess
- https://github.com/CESSProject/fmd-cess

## Development Roadmap :nut_and_bolt:

This section should break the development roadmap down into milestones and deliverables. To assist you in defining it, we have created a document with examples for some grant categories [here](../docs/grant_guidelines_per_category.md). Since these will be part of the agreement, it helps to describe _the functionality we should expect in as much detail as possible_, plus how we can verify and test that functionality. Whenever milestones are delivered, we refer to this document to ensure that everything has been delivered as expected.

Below we provide an **example roadmap**. In the descriptions, it should be clear how your project is related to Substrate, Kusama or Polkadot. We _recommend_ that teams structure their roadmap as 1 milestone ≈ 1 month.

For each milestone,

- make sure to include a specification of your software. _Treat it as a contract_; the level of detail must be enough to later verify that the software meets the specification.
- include the amount of funding requested _per milestone_.
- include documentation (tutorials, API specifications, architecture diagrams, whatever is appropriate) in each milestone. This ensures that the code can be widely used by the community.
- provide a test suite, comprising unit and integration tests, along with a guide on how to set up and run them.
- commit to providing Dockerfiles for the delivery of your project.
- indicate milestone duration as well as number of full-time employees working on each milestone.
- **Deliverables 0a-0d are mandatory for all milestones**, and deliverable 0e at least for the last one. If you do not intend to deliver one of these, please state a reason in its specification (e.g. Milestone X is research oriented and as such there is no code to test).

> :zap: If any of your deliverables is based on somebody else's work, make sure you work and publish _under the terms of the license_ of the respective project and that you **highlight this fact in your milestone documentation** and in the source code if applicable! **Teams that submit others' work without attributing it will be immediately terminated.**

### Overview

- **Total Estimated Duration:** 3 months
- **Full-Time Equivalent (FTE):**  2
- **Total Costs:** 9,000 USD

### Milestone 1 Implement Data Store Pallet

- **Estimated duration:** 1 month
- **FTE:**  1
- **Costs:** 3,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 / GPLv3 / MIT / Unlicense |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1a. | Substrate module: data_store | We will create a Substrate module that will implement meta-info management of stored data, including functions such as store, retrieve, replace, delete, edit, query.|   
| 1b. | Benchmarking | The module will be on par with other pallets in FRAME, fully equipped with benchmarking, weights, tests.|  


### Milestone 2 Implement Custom-built Storage Sidecar Featuring Interaction with Data Store Pallet

- **Estimated Duration:** 1 month
- **FTE:**  2
- **Costs:** 3,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 / GPLv3 / MIT / Unlicense |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1. | CESS Storage | We will integrate CESS storage module in Custom-built Storage Sidecar to support the data storage service.| 
| 2. | Data Store API | Implement the data store API to support interaction with the data store pallet based on the stable version of the [Substrate API Sidecar](https://github.com/paritytech/substrate-api-sidecar), which contains at least 6 new interfaces required for data storage.|  
| 3. | Endpoint Docs | We will write Endpoint Docs explaining the usage of the all implemented RESTful API. | 

### Milestone 3 Complete Custom-built Storage Sidecar

- **Estimated Duration:** 1 month
- **FTE:**  2
- **Costs:** 3,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 / GPLv3 / MIT / Unlicense |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. | 
| 0e. | Article | We will publish an **article**/workshop that explains our project's features, implementation, and user guidelines.)
| 1. | Data Integrity Verification | We will provide integrity verification for stored data to improve the quality of storage services. |  
| 2. | Data Store API | We will add data storage functionality to the data store API, which adapts to existing interactions with Data Store Pallet.|  
| 3. | Endpoint Docs | We will update the Endpoint Docs to fit the upgraded Custom-built Storage Sidecar, which adds data storage features. |  


## Future Plans

In the short term, we will promote our project to get more people to use and test it. Next, we will continue to maintain component versions to accommodate Substrate updates, and as much as possible to provide more reliable storage services.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** We have heard from Parity Asia.

**What work has been done already?** We have already implemented a design prototype.

**Have you ever applied for other grants?** We had applied a [grant](https://github.com/w3f/Grants-Program/blob/master/applications/CESS.md) that had passed all the milestone deliveries on January 25, 2022.

