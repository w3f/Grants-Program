# GenesisDAO

- **Team Name:** GenesisDAO by Deep Ink Ventures GmbH
- **Payment Address:** Ethereum Mainnet, 0x918a4363C35156c8F85F86795a79189e5A1ef557, USDC
- **Level:** 3

## Overview

### Intro
Historically, building DAOs requires heavy commitments to a specific chain and development of features on top of skeleton frameworks or template builders
such as OpenZepplin governance or Aragon DAO. 

This in turn led to significant costs occurring in development, legal structure and voting mechanisms. As of today, launching a DAO alongside your crypto project remains a mission.

We see XCM as a shift in the way blockchains interoperate. 10+ years after Forbes announced the API revolution for the Client-Server Architecture of Web 2.0; crosschain messaging is setup to move blockchains into platforms that can abstract away its complexities and specializations behind a sharp
interface that protocols on other chain-ecosystems can utilize by tapping into its XCM specifications.

Genesis DAO is among this new wave of emerging platforms and provides DAOs as a Service. 

Having this in the polkadot ecosystem is not only a huge benefit for existing parachains and protocols, itll be a competitive advantage for
the polkadot ecosystem as one of the first questions projects have to face nowadays is: Where to launch the DAO? On Genesis DAO.

### Abstract
Genesis DAO is a platform as a service for DAOs. The platform lives on a polkadot parachain and utilizes Cross Consensus Messages (XCM) as a first-class citizen of its infrastructure. 

It allows teleporting of DAO tokens to other chains to be native parts of the protocol while voting, treasury and other DAO infrastructure is living natively on Genesis DAO. Genesis DAO manages the ramifications  of DAO on its robust platform – the DAO token itself becomes a lego block that can live on every chain of choice.

### Conceptual Overview
EVMs ERC-20 token is a shining example of the Unix philosophy of doing one thing and doing it right: The entire DeFi stack was
built on the shoulders of simple transfer and transferFrom methods alongside a balance entry for bookkeeping.

The basic layer of Genesis DAO is of similar structure, it has the main primitives of DAO participants baked in - voting. This token
and its defined interface can live on all chains and can communicate back to the Genesis DAO infrastructure layer. The DAO Token
is detangled from both - the complications of the DAO governance layer and the wiring to the protocol that it governs.
The parachain infrastructure builds on top of this layer and adds composable features on top of it.

The governance layer and the central infrastructure become first class (pallet level) citizens of the genesis DAO chain and the
feature structure and runtime updates are subject to the votes of Genesis DAO Token Holders themself. 

Therefore the basic primitives of a DAO to manage its votes, treasury and token distribution will be a fundamental building block of the chain itself.

On top of this lays an EVM (Solidity) and WASM (e.g. Ink!) Layer for protocols to support further customization such as legal structure
document storage and setup, yield aggregation protocols and so on. 

![image](https://user-images.githubusercontent.com/120174523/206688325-d5509f7c-00ff-4e90-9545-0588e3486ff1.png)

Since these protocols have a joint understanding of the interfaces within, Genesis DAO will be a parachain specialized in DAOs.

Home of the governance for everything on chain, with its token becoming a lego block in the ecosystem of all blockchains that aim for decentralized governance.


## Project Details

### Architectural Overview

The basic idea of GenesisDAO is the separation of concerns between the operational layer of a protocol and the governance layer of a protocol: The DAO itself is conceptually separated from the implementation of the business processes, but this separation is abstracted away from the user by utilizing XCM.

Therefore there are three ways to interact with GenesisDAO: DAO Operations, Proposal Creation and Voting.

<div align="center"><img src="https://user-images.githubusercontent.com/120174523/206688385-572d16a7-dc76-442a-b310-3bf40783bfd4.png" width="80%"></div>

*DAO Operations* is the process of creating a DAO, minting the initial token, treasury management and so on. In development terms, this will be a UI on top of the Genesis DAO itself, the creation and management will have a dedicated pallet and we want to build customization hooks that introduce ink! as a configuration language. The substrate implementation section below will elaborate on this.

*Proposal Creation* is a an orchestrated process of creating a proposal in the UI with metadata, description, documentation, binary files like images and so on; packaging all of that data in a structured format and upload it to IPFS and then commit the IPFS hash alongside with metadata and proposal lifecycle information to the Genesis DAO chain.

<div align="center"><img src="https://user-images.githubusercontent.com/120174523/206688474-f5e215eb-65d8-43f3-b6a3-95bda7380030.png" width="35%"></div>

The voting process will happen asynchronously, so users on remote chains can vote as well. Voting is the signaling of approval or denial to a proposal and it can be done from remote chains. 

This requires some heavy XCM lifting and some custom extensions to ink! and EVM token implementations, but from the perspective of the user they will be able to participate in governance voting without being aware of the underlying complexities by calling simple *vote(proposalId, approve)* methods on their tokens.

<div align="center"><img src="https://user-images.githubusercontent.com/120174523/206688564-baf598d7-81e6-468d-b5f4-df245f4cc5cc.png" width="80%"></div>


### Substrate Implementation

Genesis DAO is constructed of multiple pallets that separate the concerns of a DAO. Due to its XCM-first approach, it has infrastructure build on top of itself and an integration pallet for other parachains.

The following architecture describes the state before parachain launch, the scope of this first iteration is described in the Development Roadmap section of this document.

![image](https://user-images.githubusercontent.com/120174523/207329991-0d86a47f-3951-428d-bc0a-4647d603f074.png)

The heart of the chain is the *pallet_dao_core* that offers functionality to create a DAO and store metadata components.
It manages the entire lifecycle of a DAO from creation, token issuance, management and so on.

Tokens itself are created via a custom asset pallet: *pallet_dao_asset* that is a fork from *pallet_asset*, but with
checkpoint writing upon transfer. This idea is inspired by the compound protocol, where the current voting power at any
given block is stored on chain as well. Consequently, voters can signal approval or rejection of a proposal at any time
during the proposal lifecyle, but the actual voting power is determined on closing of the proposal. This technique ensures
that the token can really live and be traded on other chains, as no lockup on the GenesisDAO chain is required.

The *pallet_dao_vote* is managing proposal lifecycle, where new proposals for a DAO can be made.

The *pallet_dao_xcm* is managing the interface of the GenesisDAO chain to other parachains. It'll expose the functionality
of transferring a token to other chains and the ability to report votings and token transfers back. Votings will be
forwarded to the *pallet_dao_vote* to register approval or rejection whereas token transfers are forwarded to the *pallet_dao_asset*
to write a checkpoint. This pallet is accompanied by a *pallet_dao_integration* that other chains can add in order to integrate
the GenesisDAO into their chain. Since this functionality is of elevated interest for protocol-enabling chains with EVM or
ink! support, we will accompany these with our own standard, ERC20DAO, that is the traditional ERC20 interface with additional
voting methods within the interface and support for the transfer-function XCM extension that enables checkpoint writing on the Genesis DAO.

The GenesisDAO is a protocol enabling chain as well and all pallets on the chain will offer hook functionality into ink! 
(and later EVM) based contracts. Those hookpoints (contract addresses) are stored in the DAO metadata in *pallet_dao_core* 
and give DAOs (or third parties building on top of GenesisDAO) the opportunity to plug-in central mechanisms of the DAO such
as voting-calculations, checkpoint creation, vesting and so on. All pallets will utilize *pallet_contracts* call function to
interact with sharp interfaces, making GenesisDAO a true, extendable platform for complex and custom DAO setups.



## Ecosystem Fit

Standing on the shoulder of giants is the driving force of success in tech. Each development software is
build on uncountable prior engineering power. It's as well a crucial factor of success and adoption of
a decentralized network and the strength of polkadot lies in the interoperability with other chains.

Given the importance of robust, scalable and customizable DAO infrastructure, we want to establish GenesisDAO
as a common good parachain within the ecosystem. Easy-to-use, open source, reliable and future proof DAO management
is a crucial element in decentralization and having DAO infrastructure as a first class citizen in the polkadot
ecosystem will drive adoption to the network.


## Team

### Contact

- **Contact Name:** Jakob Drzazga
- **Contact Email:** 	jad@deep-ink.ventures

### Legal Structure

- Deep Ink Ventures GmbH, registered with the commercial register at the local court of Berlin, HRB 247342

## Development Roadmap

### Overview

- **Total Estimated Duration:** 3 month
- **Full-Time Equivalent (FTE):**  3-4 FTE
- **Total Costs:** $ 100,000

### Milestone 1 Substrate Node, Dao Core, Frontend Setup and Product Initiation

- **Estimated duration:** 1 month
- **FTE:**  3-4
- **Costs:** 40,000

| Number | Deliverable                       | Specification                                                                                                                                                                                                                                 |
| -----: |-----------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **0a.** | License                           | Apache 2.0                                                                                                                                                                                                                                    |
| **0b.** | Documentation                     | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| **0c.** | Testing and Testing Guide         | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. We will add a functional test suite that covers the user flows and a manual test guide.                                                                               |
| **0d.** | Docker                            | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.                                                                                                                                 |
| 1. | Parachain Setup                   | We will provide a docker-compose setup to spin up the entire system easily in a local environment                                                                                                                                                  |
| 2. | Substrate module: pallet_dao_core | We will create the dao core module that allows creating a dao, issue a token (intially based on *pallet_assets*) and manage metadata and the dao lifecycle.                                                                                   |
| 3. | Frontend Infrastructure           | We will setup and host a react/typescript/next.js application that will serve as dApp for our GensisDAO.                                                                                                                                      |
| 4. | Design and Product Flow           | We will create UI/UX flows and designs for the dao creation process.                                                                                                                                                                          |


### Milestone 2 Proposal module, Asset fine tuning, No-Code DAO creation and proposal UX flow

- **Estimated Duration:** 1 month
- **FTE:**  3-4
- **Costs:** 40,000 USD


| Number | Deliverable                        | Specification                                                                                                                                                                                                                                 |
| -----: |------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **0a.** | License                            | Apache 2.0                                                                                                                                                                                                                                    |
| **0b.** | Documentation                      | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| **0c.** | Testing and Testing Guide          | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. We will add a functional test suite that covers the user flows and a manual test guide.                                                                              |
| **0d.** | Docker                             | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.                                                                                                                                 |
| 1. | Substrate module: pallet_dao_asset | We will fork the pallet_asset and customize it for DAO optimization needs, most prominently with checkpoint functionality.                                                                                                                    |
| 2. | Substrate module: pallet_dao_vote  | We will create a voting module to manage the lifecycle of a proposal                                                                                                                                                                          |
| 3. | Frontend Implementation            | We will implement the frontend and UX flows developed in the previous milestone product section and have a no-code DAO creation experience                                                                                                    |
| 4. | Design and Product Flow            | We will create UI/UX flows and designs for the dao proposal process.                                                                                                                                                                          |

### Milestone 3 Proposal module, Asset fine tuning, No-Code DAO creation and proposal UX flow

- **Estimated Duration:** 1 month
- **FTE:**  2-3
- **Costs:** 20,000 USD


| Number | Deliverable                        | Specification                                                                                                                                                                                                                                 |
| -----: |------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **0a.** | License                            | Apache 2.0                                                                                                                                                                                                                                    |
| **0b.** | Documentation                      | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| **0c.** | Testing and Testing Guide          | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. We will add a functional test suite that covers the user flows and a manual test guide.                                                                               |
| **0d.** | Docker                             | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.                                                                                                                                 |
| 0e. | Article | We will publish an **article** introducing GensisDAO, it's core concepts and vision to the public                                                                                                                                                   |
| 1. | Substrate module: pallet_dao_vote  | We will create a voting module to manage the lifecycle of a proposal                                                                                                                                                                          |
| 2. | Frontend Implementation            | We will implement the frontend and UX flows developed for the proposal and have a voting process directly on GenesisDAO (usable without xcm) and a no-code proposal integration.                                                              |
| 3. | Product Touches                    | We will create a full product experience around the dApp with landing pages, FAQ, and explainers.             | 4. | Benchmark Support                    | We will provide basic benchmarking modules for our pallets.                                                                                                                                  |


## Future Plans

After finishing this grant, GensisDAO will be able to manage DAOs and proposal processes within it's own substrate based blockchain.

The next two important steps will be

- the implementation of the XCM layer, which in turn requires upgrading the chain to parachain-readyness
- the addon of the contracts pallet alongside with hookpoints and there integration into the existing pallets

Simoultanously, we will start building initial ink! infrastructure. Since we are heavily committed to shiny and 
elegant UX and UI, we want to heavily invest into user research and rapid feedback cycles to incorporate the needs of the 
community directly after the PoC that is build within this grant is live.

The important outline for this project is to become a common good parachain, that acts as an infrastructure service for the ecosystem. Therefore extendable integrations with other important chains in the polkadot realm as well as attracting dao-specific protocols to extend the base chain functionality is part of the near term roadmap as well.

