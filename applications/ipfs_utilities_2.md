# Substrate IPFS Utilities 2

- **Team Name:** [TDSoftware](https://www.tdsoftware.de/)
- **Payment Address:** 0x8Db0972d9F40357526B879A002d60CCf6B4a8882
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 3

## Project Overview :page_facing_up:

IPFS is a web3 solution to store and provide big-sized and unstructured data. The datas address is based on it's content (CID: Content Identifier), which guarantees that the content or file isn't changed or manipulated in any way. The same CID will always point to the same content spread in the IPFS network. Currently there is no satisfying way of an integration for IPFS on Substrate based blockchains. An example use case are NFTs (Non-Fungible Tokens): An NFT for instance might be linked to an external artwork (image, audio file, video file, ...) that is stored within IPFS.

This is a follow-up project for [Substrate IPFS Utilities](https://github.com/w3f/Grants-Program/pull/1187) MS1 and MS2. During the previous project some issues occurred that are related to already existing IPFS APIs and patterns used. Goal of this project is to solve those issues and make the IPFS integration ready for real use cases.

### Overview

Currently, the easiest way to record IPFS CIDs on a Substrate-based blockchains, is to call an extrinsic and pass the IPFS CID as an input parameter to store it on chain. So two separate steps are necessary:

1. Add (artwork) file to IPFS to retrieve CID
2. Store CID for NFT on chain

Because this are two separate actions to be performed by a client, we cannot consider this to be secure.
In the second step we cannot verify that the previously uploaded content in the IPFS network is the correct wanted one.

The implementation of a solution for the scenario described above, was done in MS1 and MS2 of the [Substrate IPFS Utilities](https://github.com/w3f/Grants-Program/pull/1187) project.

Unfortunately, when adding the file (bytes) to IPFS via an extrinsic on-chain, the file size is limited by the block size of the blockchain. This is a big issue as it blocks us from using IPFS with a Substrate blockchain for our products (e.g. [NiftyMarket](https://www.niftymarket.com)). 
We made some research and came up with a solution: This project is about the implementation of this solution and further steps. 

### Project Details

The implementation to be delivered in this project will be based on the existing IPFS implementation from TDSoftware:
👉 [https://github.com/TDSoftware/substrate-ipfs](https://github.com/TDSoftware/substrate-ipfs)

Here is a rough overview about the involved components and communication flow:
![Image](https://tdsoftware-dev.de/w3f-grant-program/ipfs-util-2.png)

**The problem** with the current implementation is, that the bytes of the file added are passed to an extrinsic. With that, the block size limit will limit the file size too. It is then impossible to upload bigger files, which is of course a requirement of an IPFS integration into Substrate. All existing projects handling IPFS integration do have the same issue.

Our **solution** consists of using the RPC API to receive an incoming file. Then generating the CID of the content and store it in the Substrate off-chain storage. Together with some related metadata (depending one use case: e.g. NFT) an extrinsic is called to store the CID with the metadata and the status "In Progress". The file is not stored on chain nor passed to the extrinsic.

When the TDS IPFS off-chain worker is invoked, it fetches the file from the off-chain storage and adds it to the local IPFS node. Once added we can check, if the file is spread in the IPFS network to be sure it is available from the outside. At last we need to update the status of the CID on chain to "Done". A running IPFS node and communication logic was implemented in Milestone 1 and 2. So this project will focus on the off-chain storage usage implementation with an RPC API.

After implementing the RPC API, another optimisation should be implemented. This optimisation will focus on handling input streams as input parameters of the RPC API to have a better handling of large input files.

### Ecosystem Fit

The implementation helps people using IPFS with Substrate, this is a common scenario.
Especially for NFT products this solution is helpful to avoid external middleware implemetations taking action. Having the whole logic for minting NFTs with related content inside Substrate makes it easier to maintain and more secure.

There are similar projects dealing with IPFS and Substrate, but all do have the issue of the block size limits. That makes those implementation not usable for real world scenarios.

## Team :busts_in_silhouette:

### Team members

- Dominik Demuth
- Stefan Lang
- Markus Fitzner
- Sascha Dobschal

### Contact

- **Contact Name:** Dominik Demuth
- **Contact Email:** d.demuth@tdsoftware.de
- **Website:** [tdsoftware.de](https://tdsoftware.de)

### Legal Structure

- **Registered Address:** Schlossgasse 20, 07743 Jena, Germany
- **Registered Legal Entity:** TDSoftware GmbH

### Team's experience

We have years of experience bringing ideas to life with a user-centered focus using blockchain and mobile technology. We have worked closely with many customers to implement their solutions and have already gained experience with blockchain technologies.
Our most relevant projects are, among others:

- SubIdentity (W3F Grant), Identity Directory for Substrate Chains
- IPFS Utilities (W3F Grant), Milestone 1 and 2
- Exchange for trading digital assets (Customer is a Top 200 Token of CMC)
- Token Swap WebApp (Customer is a Top 200 Token of CMC)
- [Blockchain, NFT Pallets & App](https://artists.niftymarket.com/) (In Development)

We look forward to contributing to the web3 ecosystem with an open-source project next.

### Team Code Repos
Source code will be in:

- https://github.com/TDSoftware

Team profiles:

- https://github.com/dominikdem
- https://github.com/dobschal
- https://github.com/langi667
- https://github.com/markusdent
  

### Team LinkedIn Profiles

- https://www.linkedin.com/company/tdsoftware-gmbh/mycompany/
- https://www.linkedin.com/in/dominikdemuth/
- https://www.linkedin.com/in/dobschal/
- https://www.linkedin.com/in/stefan-lang-129379194/

## Development Status :open_book:

A concept and solution draft was created as part of this application and can be found in the Project Details chapter. We took time on Milestone 1 and 2 to discuss and discover issues and find solutions. 

You can find the current project here:
👉 [IPFS Utilities for Substrate](https://github.com/TDSoftware/substrate-ipfs)

## Development Roadmap :nut_and_bolt:

The project is split into two Milestones. The first Milestone (Milestone 3) will include the implementation of the RPC API. Afterwards we are going to focus on accepting InputStreams as input parameters for the RPC API. Please check the details below.

### Overview

- **Total Estimated Duration:** 2 Months
- **Full-Time Equivalent (FTE):** 2
- **Total Costs:** 66,000 DAI

### Milestone 3 - RPC API

- **Estimated duration:** 1 Month
- **FTE:** 2
- **Costs:** 33,000 DAI

|  Number | Deliverable                                        | Specification                                                                                                                                                                                                                                                                                                                                                                      |
| ------: | -------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **0a.** | License                                            | Apache 2.0 / GPLv3 / MIT / Unlicense                                                                                                                                                                                                                                                                                                                                               |
| **0b.** | Documentation                                      | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works.                                                                                                                                      |
| **0c.** | Testing and Testing Guide                          | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.                                                                                                                                                                                                                    |
| **0d.** | Docker                                             | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.                                                                                                                                                                                                                                                                      |
|      1. | Substrate RPC API                                  | We will implement and describe a RPC API that takes bytes of a file and metadata in JSON as input parameter. After retrieving the file and metadata, an IPFS CID is generated locally. Together with the CID, the file is stored in the off-chain storage.                                                                                                                         |
|      2. | Substrate Extrinsic to store CID (TDS IPFS Pallet) | An extrinsic method is added to store a CID with metadata and a status. The status can at least be "In Progress", "Error" or "Done". This extrinsic is called by the RPC API after successfully retrieving a file. In this step, the file is not stored on chain!                                                                                                                  |
|      3. | Substrate Off-Chain Worker (TDS IPFS Pallet)       | The off-chain worker is fetching the uploaded files from the off-chain storage and adds those to IPFS. For this step, the local embedded IPFS node is used. After successfully adding the file and checking, that the file is available in the IPFS network, the status for the CID on chain is set to "Done". To update the status, another extrinsic method needs to be created. |


### Milestone 4 - InputStreams

- **Estimated Duration:** 1 Month
- **FTE:** 2
- **Costs:** 33,000 DAI

|  Number | Deliverable                              | Specification                                                                                                                                                                                                                                                                                                                        |
| ------: | ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **0a.** | License                                  | Apache 2.0 / GPLv3 / MIT / Unlicense                                                                                                                                                                                                                                                                                                 |
| **0b.** | Documentation                            | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works.                                                                                        |
| **0c.** | Testing and Testing Guide                | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.                                                                                                                                                                      |
| **0d.** | Docker                                   | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.                                                                                                                                                                                                                        |
|     0e. | Article                                  | We will write and publish a Medium article to spread the word and give developers an introduction to the project and how to use it.                                                                                                                                                                                                  |
|      1. | Research                                 | A research needs to take place on how to use InputStreams with RPCs. There are several approaches that need to be checked. In this first part a POC mock implementation will be created.                                                                                                                                             |  |
|      2. | Substrate RPC API accepting InputStreams | The existing RPC API for uploading files will be refactored to allow handling of InputStreams. The idea is to perform actions on every retrieved chunk of the stream instead of handling the whole file at once. This should allow clients to add huge files to IPFS via Substrate without having performance issues and high costs. |
|      3. | Tutorial                                 | After the implementation of MS1 and 2, a video tutorial is created and published to explain developers how the achieved implementation can help in other Substrate applications. Besides the video tutorial, the tutorial will be provided in text form as step-by-step guide.                                                       |


## Future Plans

We are willing to continue developing the IPFS integration for Substrate based blockchains, as we need this for our own products and are happy to share this with other developers.



## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** 
This is our third application for an open-source project to innovate the web3 Ecosystem.
