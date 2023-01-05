# Iris

- **Team Name:** Iridium
- **Payment Address:** 0x6ec0D6c005797a561f6F3b46Ca4Cf43df3bF7888 (DAI)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2


## Project Overview :page_facing_up:

### Overview

Iris is a decentralized storage network for substrate-based chains. It aims to provide infrastructure for parachains, allowing nodes to securely store data assets offchain through Iris while access to that data is managed in the parachain. We envision that this chain can facilitate a myriad of decentralized applications that are not currently feasible, for example dropbox-like applications, pay-as-you-go streaming services, data marketplaces, and much more.

This goal is conceptually achieved by disseminating and resolving the barriers to adoption of decentralized storage and by contrasting with features provided by centralized services. Decentralized storage networks and blockchains generally do not provide more than storage, forgoing the higher-level capabilities available in a traditional centralized system. The greater the decentralization of the network, the less secure or private your data is. In contrast to centralized services, decentralized services are generally not privacy preserving, since any data on chain is by default public, so enabling privacy usually takes the form of some centralized service. A key feature of Iris is that file data is *never* stored on chain.

The major differences between DHT-based decentralized storage (using IPFS since it is commonly the DHT platform used as a basis) and centralized storage can be stated as:

1) **Indexability**: IPFS is not a search engine and is not intended to act as one. There is not an easy way to identify or track data in IPFS without a CID.

2) **Security**: When data is hosted in a decentralized network it is available to any node in the network. There are no permissions and no encryption.

3) **Availability**: Availability of any CID in the network is not guaranteed, and approaches to ensuring it is are not necessarily decentralized.

4) **Governance**: There are no native governance options and no simple way to purge data from all nodes in the network. IPFS provides a customizable blockList, but attempting to “revoke” data from other nodes is not fundamentally doable. If the IPFS network is public and truly decentralized, then this could allow for malicious content to exist in the network.

Inspired by work done by a team at [equilibrium](https://github.com/rs-ipfs/substrate), the core of this project relies on embedding an IPFS instance within the Substrate runtime. This foundation ensures that calls to IPFS are made through the Substrate layer, specifically by offchain workers, allowing the DHT status to be accounted for on-chain. Iris functions in conjunction with parachains by allowing nodes to store data within Iris and monetize access to that data within their parachain, providing parachain node's the ability to store, sell, share, buy, and monetize access to their data while still using their own native tokens and governance (retaining sovereignty).

Owned data is treated as a unique asset class within the blockchain, while access to the data is controlled by an asset minted from the asset class. Accounts that hold a positive balance of an asset are authorized to access the underlying data that the asset class is associated with. Iris will also have the capability to transfer assets between parachains and smart contracts (via XCM), enabling a novel way to access data across the web.

Additionally, this proposal lays the foundations for a governance framework that lets us block or purge data or accounts from participating in the network and achieve a from of decentralized moderation.

This proposal intends to deliver the iris blockchain, which includes integration of ipfs into the substrate runtime, building the iris pallet for storage and governance, and delivering a decentralized application in the form of a smart contract on the Iris blockchain. A minimal configuration may look like:

![sample-runtime-diagram](https://github.com/iridium-labs/Grants-Program/blob/iris/src/runtime_modules.png)

### Project Details

#### Tech Stack

Front End

- Javascript
- React
- Polkadot.js
- js-ipfs

Blockchain

- rust
- Substrate
- rust-ipfs

### The Iris Blockchain

*We delegate the explanation of the usage of embedded IPFS in the runtime to https://github.com/rs-ipfs/substrate.*

At the most basic level, the runtime works by exposing a set of **DataCommands** that are prioritized in a queue for processing by offchain workers. Valid commands are consumed from the queue and processed by OCWs (of validator nodes only). Ingestion and ejection of data from the network occurs without the risk of onchain exposure.

Initally, Iris will be a Proof of Authority network, with only validator nodes capable of executing write operations to their node (such as adding data or inserting pins). However, all nodes run an embedded IPFS instance and can make read operations when authorized through Iris.

Iris delivers two modules, Iris-Assets and Iris-Session, which depends on the [Assets Pallet](https://github.com/paritytech/substrate/blob/master/frame/assets/) and the [Session pallet](https://github.com/paritytech/substrate/tree/master/frame/session), respectively. These two pallets work in tandem to provide full functionality to inject and eject data from Iris, create and manage asset classes, mint assets, and accept new validators into the network.

The [Iris-Assets](./pallet_iris_assets.md) pallet provides functionality for nodes to inject data into Iris, create and manage storage asset classes and to mint and burn assets.

The [Iris-Session](./pallet_iris_session.md) pallet provides session-based storage capabilities for network validators as well as enables ejecting data from the network. The iris-session pallet contains all functionality to interact with the embedded IPFS node. This is only needed for potential validator nodes, whose responsibilities are distinct from capabilities of data consumer and data owner nodes.

#### Creating owned Data

We introduce a permissionless function to allow nodes to request that data be ingested into Iris. We provide an extrinsic, `create`, which accepts a MultiAddr and CID and encodes it as a command in runtime storage. The offchain workers of Iris validators process the command and publish the results onchain. After the transaction is validated, the new CID, along with ownership, is encoded into runtime storage by creating a new asset class owned by the original caller of the extrinsic.

![ingestion](https://github.com/iridium-labs/Grants-Program/blob/iris/src/data_ingestion.png)

#### Storing (Pinning) Data

Iris is a proof of authority network. For the scope of this proposal we are proceeding with "proof of storage potential". The Iris-Session pallet allows network authorities to add more authorities to the network. Only validators have the capability to interact with the embedded IPFS nodes, and thus to interact with the underlying IPFS swarm. Additionally, we introduce a *naive* mechanism through which validators earn reward points for storing *valuable* data. In the future, we would like to proceed with aa more sophisticated conesensus mechanism. The value of raw data is directly correlated to how many times it is accessed during a session. Reward points are rewarded to nodes who:

- 1 point: add data to Iris (ipfs add CID). This reward is given to all nodes with capacity to add the data to their node.
- 2: points: pin some data (ipfs pin  CID). This reward is given to some individual node.
- 1 point: indirectly, when a node requests to read a CID from the network (ipfs get CID) when the validator is pinning that CID. This reward is given to all nodes who are storing the data.

To incentivize validators to pin data to their nodes, we suspend any validator that has been online for 5 sessions but have not earned at least one point during each session.

#### Data Availability

Iris does not ensure that data is available 24/7. Rather, validator nodes prioritize data by ensuring storage based on the value of the data, which we simply determine based on the number of times that it was accessed by data consumers during some period of time (a session in which a validator set  is active). Validators may choose to not store data whose value is too low. However, for the scope of this proposal validators earn no incentive for pinning content.

#### Data Access and Retrieval

To eject (a copy of) data from the network, authorized nodes in parachains invoke the `request_bytes` extrinsic, providing the asset id and its owner as arguments. If it is proved that the caller owns an asset minted from the class, the data is moved to that specific node's offchain storage.

The caller can then invoke the [custom rpc endpoint](#custom-rpc-endpoints), passing the CID of the data they wish to retrieve as an argument, and get the bytes for that CID in response.

![ejection](https://github.com/iridium-labs/Grants-Program/blob/iris/src/data_ejection.png)


#### Governance, Moderation and Cleanup

**DISCLAIMER**: Governance is not in the scope of this proposal, however, we want to stress that governance is one of the main focuses of future work after completion and will become one of the main features of Iris going forward. Due to the importance of this topic, we mention it here.

Due to the nature of decentralization, there is a wide berth for potential abuse of the network. Particularly, for a storage network, this could manifest as leveraging the network to store or share illegal or abusive content (e.g. hate speech). In order to counteract this, Iris lets nodes report or flag content through an extrinsic, providing a cid, multiaddr, as well as a reason for reporting the content. When certain conditions are met, nodes who hold the content are incentivized to remove it from their IPFS node and punished if they do not.

Iris has two flavors of governance: Data governance (moderation) as well as membership governance.

- content governance
  - remove/purge data
  - block CIDs from entering the network
- self-governance
  - block addresses
  - block validators/ipfs nodes from participating in iris
  - accept new validators

#### Data Structures

Many of the data structures we use are the same ones defined in [rust-ipfs/substrate](https://github.com/rs-ipfs/substrate), so we omit them and only discuss new structures.

**Asset Class and Assets**
Asset classes and assets use the same data structures available in the assets pallet.

#### Functions (extrinsics)

The names of these extrinsics are tentative, but the basic functions we expose to nodes are:

##### The Iris-Assets runtime module extrinsics

- Permissionless Functions
  - create: called by a node to request that some {CID, MultiAddr} combination be added to Iris
  - request_bytes: request that some content identified by {CID, Owner}
  - insert_pin_request: request that your own ipfs node pin some cid, note that this is only possible if you are a validator node
- Permissioned Functions
  - mint: mint assets from some owned asset class
  - submit_ipfs_add_results: executed after an OCW calls ipfs add bytes, creates a new asset class

##### The Iris-Session runtime module extrinsics

- Permissionless Functions
  - join_storage_pool: request to earn rewards for storing some data in the next session
- Permissioned Functions
  - add_validator: add a new validator
  - remove_validator: remove a validator
  - submit_ipfs_add_results: notify the chain that an OCW processed an ipfs add bytes request
  - submit_ipfs_identity: notify the chain that an OCW fetched its IPFS id
  - submit_ipfs_pin_result: notify the chain that an OCW processed an ipfs pin cid request
  - submit_rpc_ready: notify the chain that an OCW processed an ipfs get bytes request 

#### Custom RPC Endpoint

Iris exposes a custom RPC endpoint that data consumers can use to fetch data from Iris. Prior to invocation, fetching data from the endpoint depends on the results of the consumer's call to the `retreive_bytes` extrinsic, which, when a node is verified as having access to the data, allows only that node to add the data to their node's offchain storage, from which this endpoint reads.

- Method:`iris_retrieveBytes`
- body
  - `message`: The (hex-encoded) CID of the content to fetch

In the future we intend to enhance security around this funtionality.

### Early Work

Please refer to the github repositories [here](#team-code-repos).
We have a PoC to showcase some of the early developments. The user interface can invoke an extrinsic, passing it a filename and file content, and in turn adds the data to IPFS by calling an OCW which submits a signed transaction. This signed transaction calls an extrinsic that encodes the CID and filename within a storage map. This medium article explains how to setup and run the demo: https://medium.com/iris-blockchain/enabling-an-indexeable-permissionable-ipfs-network-with-substrate-7ceab064e18d. 

Along with this additional functionality, we have also synced our fork of [rs-ipfs/substrate](https://github.com/rs-ipfs/substrate) to be up to date with the paritytech/substrate master branch, as well as created as migrated the runtime module to the latest FRAME version.

The user interface is built with React and polkadot.js. 
Current capabilities allow nodes to connect to their substrate node, add files to ipfs (preserving filenames), retrieve them, and view event logs.

1) Login Form: Specify host/port that the substrate node is listening on for WS connection.
![login-form](https://github.com/mystery-team/Grants-Program/blob/master/src/login.png)

1) Simple SPA to let users add and retrieve data to IPFS and view event logs.
![ui](https://github.com/mystery-team/Grants-Program/blob/master/src/simple_ui.png)

* What your project is *not* or will *not* provide or implement
  * Iris does not provide a platform to monetize data. External nodes can only add and retrieve data.
  * Iris does not store data indefinitely.

### Ecosystem Fit

* Where and how does your project fit into the ecosystem?

  * This proposal expands on current offchain storage capabilities in substrate. It intends to act as a decentralized storage solution that can be used by any substrate-based parachain, allowing access to data to be treated as an asset within the parachain, or across many compatible parachains.
  * We hope to work alongside other teams working on parachains to guide them in making their blockchains Iris-compatible.

* Who is your target audience (parachain/dapp/wallet/UI developers, designers, your own user base, some dapp's userbase, yourself)?
The audience is very wide ranging. 
  * For data creators, it provides a platform through which they can securely store and release their data without a third-party authority.
  * Storage providers can monetize their storage
  * Consumers do not need to rely on a third party to retrieve or purchase data
  * Parachains and dapps can leverage Iris to build functionality that monitizes or manages secure decentralized storage
   
* What need(s) does your project meet?
  - Most decentralized storage networks do not provide security or impose any gates to access the data, whereas this network does provide a means to do so. DAta is 'ownable' and access to data can be treated as a commodity.
  - We provide a governance framework which is something missing in decentralized storage solutions. As adoption of decentralized storage grows, so does the risk of it being abused or hosting abusive content.
  - It is a reusable decentralized storage network that could exist as a parachain and be available to any other parachain who wants to use it.

There are several viable decentralized storage networks that already exist, with some being substrate-based chains. However, these all succumb to some of the issues outline in the introduction with DSNs (indexability, availability, security, governance), and they all have varying degrees of decentralization, from totally decentralized to barely.

Within the substrate ecosystem, notable DSNs are:

- [Crust](https://www.crust.network/)
- [Canyon Network](https://github.com/canyon-network)
  
There are several decentralized storage options already available outside of the substrate world, all with varying degrees of decentralization. Some of these include:

- Textile
- Filecoin
- Storj
- Bittorrent
- Pinata

How IRIS differs from existing solutions:

- Iris has IPFS embedded in its runtime, so we do not need to rely on storage proofs or encryption since we can interact with the DHT.
- Iris lets data owners have full control over access, monetization, and storage of their data.
- Iris can be used by nodes in any parachain or smart contract that has made itself Iris-compatible.
- Iris provides governance to decentralized storage, providing a framework for which data can be purged from the IPFS network.


## Team :busts_in_silhouette:

### Team members

- Tony Riemer

### Contact

- **Tony Riemer**
  - **Contact Email:**
    - (personal)tonyrriemer@gmail.com
    - (iridium) driemworks@iridium.industries

### Team's experience

**Tony**
Tony is a full-stack engineer with over 5 years of experience building enterprise applications for both FNMA and Capital One. Notably, he was the lead engineer of Capital One's "Bank Case Management" system, which is responsible for creating, managing, and automating customer needs initiated from Capital One cafes (such as modifying their name or changing their SSN/TIN). In addition, he holds a breadth of knowledge in many languages and has built several open-source projects, including a blockchain built from scrach in Go, an OpenCV-based augmented reality application for Android, as well as experiments in home automation.


### Team Code Repos

- Github Organization: https://github.com/iridium-labs
- Substrate fork: https://github.com/iridium-labs/iris
- React UI: https://github.com/iridium-labs/ui

(Tony) Personal Links

- https://github.com/driemworks
- https://www.linkedin.com/in/tony-riemer/


## Development Status :open_book:

- Medium publication for Iris: https://medium.com/iris-blockchain 
- Development thus far consists of:
  - Syncing with the substrate master branch by rebuilding rust-ipfs/substrate's offchain_ipfs branch on top of it
  - OCWs are able to submit unsigned transactions (so can submit IPFS results back on chain)
  - initial developments of a UI, integrating with both js-ipfs and polkadot.js 

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 14 weeks
- **Full-Time Equivalent (FTE):**  1.5
- **Total Costs:** 22,500 USD

Guidelines/Assumptions:

- We always remain in sync with the latest substrate master branch and use the latest FRAME version.
- We maintain a minimum of 85% coverage on new code.


### Milestone 1 — The Iris Runtime (Foundations of the DSN)

- **Estimated duration:** 4 weeks
- **FTE:**  1.5
- **Costs:** 8,000 DAI

**Goal**: The first milestone delivers a minimally functional, isolated version of Iris. Some of the functionality delivered as part of this milestone will be shortlived within Iris, as it will be moved into parachains in subsequent milestones. We deliver the functionality to add and retrieve data as part of this milestone. We intend to be able to provide end to end testing scenarios in which a node adds owned data, purchases access to owned data, and retrieves it. We also introduce the idea of the "ticket" to control access to data as well as functionality to verify tickets when processing requests to deliver data.

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can setup an Iris node, join the private network, and provide storage capacity. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. We intend to deliver fully functional tests along with each deliverable (which warrants testing). We intend to achieve a minimum of 85% coverage on new code. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish a weekly log explaining what was achieved as part of the grant, as well as any additional learnings that we deem important throughout development. https://medium.com/iris-blockchain |
| 0f. | Update offchain::ipfs to latest substrate master  | Sync the iris fork of the offchain::ipfs runtime to the latest substrate master branch. (work is completed but needs review) |
| 1. | Genesis State and the Private IPFS Network | Create a private IPFS network and encode initial bootstrap nodes in the iris genesis block. (estimated duration: 0.5 weeks) |  
| 2. | Substrate module: iris Runtime Module | We build the module used by nodes in Iris to ingest and eject data from the private IPFS network. The pallet's functionality includes: creating requests to add and retreive data, to create, purchase, and validate [tickets](#data-structures), and to allow OCWs to process requests initiated by nodes (i.e. call IPFS and publish results on chain). The outcome is for nodes to be able to create owned data and to monetize access to that data via the ticket asset. (estimated duration: 2 weeks) |
| 3. | Custom RPC Endpoint | We implement the custom RPC endpoint to retreive data from OCWs as defined [here](#custom-rpc-endpoints). (estimated duration: 0.5 weeks) |
| 4. | User Interface | We build a UI using react, polkadot.js, and js-ipfs to provide an easy way to test data ingestion and retrieval from the network and to form the basis for a potential use case and integration guide/example. This minimally functional UI will let users add data to the network, view and purchase tickets, as well as download data retrieved from the network. (estimated duration: 1.5 weeks) |

### Milestone 2 - Iris as a Decentralized Pinning Service

- **Estimated duration:** 6 weeks
- **FTE:**  1
- **Costs:** 8,000 DAI

**Goal**: The second milestone enables a decentralized and incentivized IPFS pinning service in Iris.

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can setup an Iris node, join the private network, and provide storage capacity. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. We intend to deliver fully functional tests along with each deliverable (which warrants testing). We intend to achieve a minimum of 85% coverage on new code. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish a medium article explaining what was achieved as part of the grant, as well as any additional learnings that we deem important throughout development. https://medium.com/iris-blockchain |
| 1. | Substrate module: iris-session Runtime Module | We build a module to enable validators to approve new network validators and for network validators to process requests to the embedded IPFS swarm. We introduce a simple reward scheme to incentivize validators to store data. The outcome of this deliverable is a fully decentralized storage network achieved by through a decentralized IPFS pinning service (estimated duration: 3 weeks) |
| 2. | User Interface | We will iterate on the previous user interface to create two separate functionalities in the UI. Firstly, a "data-owner/consumer" facing page which let nodes view the availability of specific assets (number of online nodes pinning some CID), to request storage of data and to pay nodes for storage. The "data-owner/consumer" view swallows the of the functionality built in milestone 1 as well. Secondly, we build a "storage-provider" facing user interface, which displays to nodes running the embedded ipfs node their DHT stats and their rewards for pinning CIDS.  (estimated duration: 1.5 weeks) |

### Milestone 3 - Creating an smart contract that uses Iris

- **Estimated Duration:** 4 weeks
- **FTE:**  1
- **Costs:** 6,500 DAI

**Goal**: The third milestone delivers a decentralized application that uses Iris as a storage layer. We will deliver a smart contract (on Iris) that acts as a simple data marketplace where owners can buy and sell access to data. We also build a user interface to accompany the smart contract.



| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can create and run the iris-compatible smart contract as well as document the process through which interactions with Iris are made and verified. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. We intend to deliver fully functional tests along with each deliverable (which warrants testing). We intend to achieve a minimum of 85% coverage on new code. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish a medium article explaining what was achieved as part of the grant, as well as any additional learnings that we deem important throughout development. https://medium.com/iris-blockchain |
| 1. | Substrate module: iris Runtime Module | We add the ability to burn tokens and destroy asset classes. We also test and document edge cases and known issues. (estimated duration: 1.5 weeks) |
| 2. | Custom RPC endpoint | We enhance security to make this only callable by authorized nodes. (estimated duration: 0.5 weeks) |
| 3. | Iris Runtime: Contracts Pallet | We add the contracts pallet to the iris runtime and develop a simple smart contract to allow data owners to sell access to data consumers. (estimated duration: 2 weeks) |
| 5. | User Interface | We build a user interface for use by the smart contract |

## Future Plans

In the short term:

- Determine moderation and governance approaches and best practices. This is a major focus of Iris moving forward
- Write a proper whitepaper on the Iris blockchain
- Build a testnet and test at scale
- Update runtime to use go-ipfs or wait until rs-ipfs is complete
- Design a more sophisticated consensus mechanism
- Expand on the scope of this proposal to build a more feature-complete version of Iris (what this looks like is still not totally known)

- the team's long-term plans and intentions in relation to it.
  - become a parachain on Kusama and Polkadot
  - build a dedicated dev team to contribute to and maintain Iris
  - Support parachain and dapp developers who wish to use Iris in their smart contracts or parachain runtimes.
  - Continue to research and enhance existing features in Iris

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?**
I learned about the grants program through the substrate website, as well as was encouraged to submit a proposal during discussions with Parity on the Substrate Builder's Program.

Here you can also add any additional information that you think is relevant to this application but isn't part of it already, such as:

- I've attempted building a decentralized storage application with IPFS and Ethereum in the past. That application was also called Iris, which you can find here https://github.com/driemworks/iris.
  - An early design of that project was discussed here: https://discuss.ipfs.io/t/dropbox-like-application-on-ipfs/7379
  - The approach taken in the initial design was insufficient to achieve what this proposal can.
