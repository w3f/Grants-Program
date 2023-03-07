# Substrate IPFS Utilities 2

- **Team Name:** [TDSoftware](https://www.tdsoftware.de/)
- **Payment Address:** 0x8Db0972d9F40357526B879A002d60CCf6B4a8882
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 3

## Project Overview :page_facing_up:

IPFS is a web3 solution to store and provide big-sized and not structured data. The datas address is based on it's content (CID: Content Identifier), which guarantees that the content or file isn't changed or manipulated in any way. The same CID will always point to the same content spread in the IPFS network. Currently there is no satisfying way of an integration for IPFS on Substrate blockchains. An example use case are NFTs (Non-Fungible Tokens): An NFT for instance might be linked to an external artwork (image, audio file, video file, ...) that is stored within IPFS.

This is a follow-up project for [Substrate IPFS Utilities](https://github.com/w3f/Grants-Program/pull/1187) MS1 and MS2. During the previous project some issues occurred that are related to already existing IPFS APIs and patterns used. Goal of this project is to solve those issues and make the IPFS integration ready for real use cases.

### Overview

Currently, the easiest way to record IPFS CIDs on a Substrate-based blockchains, is to call an extrinsic and pass the IPFS CID as an input parameter to store it on chain. So two separate steps are necessary:

1. Add (artwork) file to IPFS to retrieve CID
2. Store CID for NFT on chain

Because this are two separate actions to be performed by a client, we cannot consider this to be secure.
In the second step we cannot verify that the previously uploaded content in the IPFS network is the correct wanted one.

The implementation of a solution for the scenario described above, was done in MS1 and MS2 of the [Substrate IPFS Utilities](https://github.com/w3f/Grants-Program/pull/1187) project.

Unfortunately, when adding the file (bytes) to IPFS via an extrinsic, the file size is limited by the block size of the blockchain. This is a big issue as it blocks us from using IPFS with a Substrate chain for our product [NiftyMarket](https://www.niftymarket.com). 
We made some research and came up with a solution: This project is about the implementation of this solution. 

### Project Details

The implementation developed in this project will be based on the existing IPFS implementation from TDSoftware:
👉 [https://github.com/TDSoftware/substrate-ipfs](https://github.com/TDSoftware/substrate-ipfs)

Here a rough overview about the components and communication flow:
![Image](https://tdsoftware-dev.de/w3f-grant-program/ipfs-util-2.png)

The problem with the current implementation is, that the bytes of the file added are passed to an extrinsic. With that the block size limit will limit the file size too. It is then impossible to upload bigger files, which is of course a requirement of an IPFS integration into Substrate.

Our solution consists of using the RPC API to receive an incoming file. Then generating the CID of the content and store it in the Substrate off-chain storage. Together with some related metadata (depending one use case: e.g. NFT) an extrinsic is call to store the CID with the metadata and the status "In Progress".

When the TDS IPFS off-chain worker is invoked, it fetches the file from the off-chain storage and adds it to the local IPFS node. At last we need to update the status of the CID on chain to "Done". A running IPFS node and communication logic was implemented in Milestone 1 and 2. So this project will focus on the off-chain storage usage implementation with an RPC API.

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

- https://github.com/dobschal
- https://github.com/yanganto
- https://github.com/markusdent
  

### Team LinkedIn Profiles

- https://www.linkedin.com/company/tdsoftware-gmbh/mycompany/
- https://www.linkedin.com/in/dobschal/

## Development Status :open_book:

A concept and solution draft was created as part of this application and can be found in the Project Details chapter. We took time on Milestone 1 and 2 to discuss and discover issues and find solutions. 

You can find the current project here:
👉 [IPFS Utilities for Substrate](https://github.com/TDSoftware/substrate-ipfs)

## Development Roadmap :nut_and_bolt:

(!)(!)(!)

### Overview

- **Total Estimated Duration:** Duration of the whole project (e.g. 2 months)
- **Full-Time Equivalent (FTE):**  Average number of full-time employees working on the project throughout its duration (see [Wikipedia](https://en.wikipedia.org/wiki/Full-time_equivalent), e.g. 2 FTE)
- **Total Costs:** Requested amount in USD for the whole project (e.g. 12,000 USD). Note that the acceptance criteria and additional benefits vary depending on the [level](../README.md#level_slider-levels) of funding requested. This and the costs for each milestone need to be provided in USD; if the grant is paid out in Bitcoin, the amount will be calculated according to the exchange rate at the time of payment.

### Milestone 1 Example — Basic functionality

- **Estimated duration:** 1 month
- **FTE:**  1,5
- **Costs:** 8,000 USD

> :exclamation: **The default deliverables 0a-0d below are mandatory for all milestones**, and deliverable 0e at least for the last one. 

|  Number | Deliverable               | Specification                                                                                                                                                                                                                                 |
| ------: | ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **0a.** | License                   | Apache 2.0 / GPLv3 / MIT / Unlicense                                                                                                                                                                                                          |
| **0b.** | Documentation             | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.                                                                               |
| **0d.** | Docker                    | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.                                                                                                                                 |
|     0e. | Article                   | We will publish an **article**/workshop that explains [...] (what was done/achieved as part of the grant). (Content, language and medium should reflect your target audience described above.)                                                |
|      1. | Substrate module: X       | We will create a Substrate module that will... (Please list the functionality that will be implemented for the first milestone. You can refer to details provided in previous sections.)                                                      |
|      2. | Substrate module: Y       | The Y Substrate module will...                                                                                                                                                                                                                |
|      3. | Substrate module: Z       | The Z Substrate module will...                                                                                                                                                                                                                |
|      4. | Substrate chain           | Modules X, Y & Z of our custom chain will interact in such a way... (Please describe the deliverable here as detailed as possible)                                                                                                            |
|      5. | Library: ABC              | We will deliver a JS library that will implement the functionality described under "ABC Library"                                                                                                                                              |
|      6. | Smart contracts: ...      | We will deliver a set of ink! smart contracts that will...                                                                                                                                                                                    |


### Milestone 2 Example — Additional features

- **Estimated Duration:** 1 month
- **FTE:**  1,5
- **Costs:** 8,000 USD

...


## Future Plans

Please include here

- how you intend to use, enhance, promote and support your project in the short term, and
- the team's long-term plans and intentions in relation to it.

## Referral Program (optional) :moneybag: 

You can find more information about the program [here](../README.md#moneybag-referral-program).
- **Referrer:** Name of the Polkadot Ambassador or GitHub account of the Web3 Foundation grantee
- **Payment Address:** BTC, Ethereum (USDC/DAI) or Polkadot/Kusama (USDT) payment address. Please also specify the currency. (e.g. 0x8920... (DAI))

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation Website / Medium / Twitter / Element / Announcement by another team / personal recommendation / etc.

Here you can also add any additional information that you think is relevant to this application but isn't part of it already, such as:

- Work you have already done.
- If there are any other teams who have already contributed (financially) to the project.
- Previous grants you may have applied for.
