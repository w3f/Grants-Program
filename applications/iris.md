# W3F Grant Proposal

* **Project Name:** Iris
* **Team Name:** Iridium
* **Payment Address:** 0x6ec0D6c005797a561f6F3b46Ca4Cf43df3bF7888 (DAI)
* **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2


## Project Overview :page_facing_up:

### Overview
Iris is a decentralized storage network for substrate-based chains. It aims to provide infrastructure for parachains, allowing nodes to securely store data assets offchain through Iris while access to that data is managed in the parachain. We envision that this chain can facilitate a myriad of decentralized applications that are not currently feasible, like dropbox-like applications, pay-as-you-go streaming services, and much more. 

This goal is conceptually achieved by disseminating and resolving the barriers to adoption of decentralized storage and by contrasting with features provided by centralized services. Decentralized storage networks and blockchains generally do not provide more than storage, forgoing the higher-level capabilities available in a traditional centralized system. The greater the decentralization of the network, the less secure or private your data is. In contrast to centralized services, decentralized services are generally not privacy preserving, since any data on chain is by default public, so enabling privacy usually takes the form of some centralized service. A key feature of Iris is that file data is *never* stored on chain. 

The major differences between DHT-based decentralized storage (using IPFS since it is commonly the DHT platform used as a basis) and centralized storage can be stated as:

1) **Indexability**: IPFS is not a search engine and is not intended to act as one. There is not an easy way to identify or track data in IPFS without a CID.

2) **Security**: When data is hosted in a decentralized network it is available to any node in the network. There are no permissions and no encryption.

3) **Availability**: Availability of any CID in the network is not guaranteed, and approaches to ensuring it is are not necessarily decentralized.

4) **Governance**: There are no native governance options and no simple way to purge content from all nodes in the network. IPFS provides a customizable blockList, but attempting to “revoke” data from other nodes is not fundamentally doable. If the IPFS network is public and truly decentralized, then this could allow for malicious content to exist in the network.

Inspired by work done by a team at [equilibrium](https://github.com/rs-ipfs/substrate), the core of this project relies on embedding an IPFS instance within the Substrate runtime. This foundation ensures that calls to IPFS are made through the Substrate layer, specifically by offchain workers, allowing the DHT status to be accounted for on-chain. Iris functions in conjunction with parachains by allowing nodes to store data within Iris and monetize access to that data within their parachain, providing parachain node's the ability to store, sell, share, buy, and monetize access to their content while still using their own native tokens and governance (retaining sovereignty). 

We accomplish this by building a "box-office" frame pallet which makes use of XCM to communicate with Iris. We provide a way for parachains to create and destroy iris-backed assets within their chain and to manage access to the asset in Iris through an entity called a 'ticket' which is minted in the parachain and then teleported to Iris. Additionally, Iris provides a governance framework that lets us block or purge content or accounts from participating in the network.

This proposal intends to deliver the iris blockchain, which includes integration of ipfs into the substrate runtime, building the iris pallet for storage and governance, and delivering an Iris-compatible parachain, which contains an implementation of a custom RPC endpoint as well as the "box-office" pallet. A minimal configuration may look like:

![sample-runtime-diagram](https://github.com/mystery-team/Grants-Program/blob/master/src/sample_runtime.png)

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

At the most basic level, the runtime works by exposing a set of **commands** that are prioritized in a queue for processing by offchain workers. Valid commands are removed from the queue and processed by OCWs, which then receive a reward for their work after submitting results on chain. Ingestion and ejection of data from the network occurs without the risk of onchain exposure. Further, the usage of the private IPFS network means we do not need to rely on encryption to maintain data privacy and integrity.

![queueing and rewarding](https://github.com/mystery-team/Grants-Program/blob/master/src/queue_to_ocw.png)

Parachains communicate with Iris via XCM messages (to create iris-backed assets, to teleport assets into Iris. etc) using the "box-office" pallet (see [here](#data-access)). This pallet introduces functionality to create an iris-backed asset after adding data to iris as well as a 'ticket' entity that can be teleported to Iris and used by OCWs to verify access to that content. The 'ticket' is owner-defined rules that are understandable by OCWs in Iris that dictate how their owned data can be accessed by the ticket-holder.

![high-level-diagram](https://github.com/mystery-team/Grants-Program/blob/master/src/big_picture.png)

#### Data Structures
Many of the data structures we use are the same ones defined in [rust-ipfs/substrate](https://github.com/rs-ipfs/substrate), so we omit them and only discuss new structures.

**Ticket**
A ticket is an entity that provides access to some specified content in Iris for the ticket holder. We keep the initial design as simple as possible but keep in mind that this struct could potentially grow to include many other parameters, such as limiting the number of times a ticket can be used, providing an expiration date, re-sale, re-entry, etc. In the future we intend to support many different kinds of tickets.

```
ticket_holder: AccountId - The account id of the owner of the ticket
owner: AccountId - The account id of the owner of the CID
cid: Vec<u8> - The CID to which the ticket grants access
```

#### Functions (extrinsics)

The names of these extrinsics are tentative, but the basic functions we expose to nodes are:

**The Iris runtime module extrinsics**
* Permissionless Functions
  * request_add_bytes: called by a node to request that some {CID, MultiAddr} combination be added to Iris
  * request_get_bytes: request that some content identified by {CID, Owner}
  * request_storage: called by a node to request that a CID be stored for some duration
  * check_availability: Query the DHT to check if the CID is available
* OCW only:
  * submit_ipfs_results: submit ipfs results on chain

**The box-office runtime module extrinsics**
* Permissionless Functions
  * init_ticket_booth
  * purchase_ticket
* Permissioned Functions
  * destroy_ticket_booth

#### Custom RPC Endpoints

Iris-compatible parachains must implement the below endpoint to receive data from Iris.

- `POST /receive/{owner}/{cid}`
- headers:
  - `msg`: a signed message used to verify the identity of the origin
- URI params
  - `owner: The SCALE-encoded AccountId of the owner`
  - `cid: The CID of the data to be received`
- body: 
  - `bytes`: The bytes associated with the CID

We implement validations to capture the following:
|HttpStatus|Reason|
|-| -|
|200| Success|
|400| The input parameters or data passed failed some validation |
|401| The origin was not an authorized Iris node |
|403| The origin was not an Iris node |

#### Creating owned content
We introduce a permissionless function to allow nodes to request that data be ingested into Iris. We provide an extrinsic, `request_add_bytes`, which accepts a MultiAddr and CID and encodes it as a command in runtime storage. The offchain workers of Iris nodes providing storage can then process the command and publish the results back onchain. When valid results are published onchain, the node whose OCW processed the command is rewarded. After the transaction is validated, the new CID, along with ownership, is encoded into runtime storage. 

The fees paid by the owner depend on the size of the file. Larger amounts of data accrue higher fees, while smaller datasets could potentially be feeless.

**In a compatible parachain** this would manifest as the creation of an iris-backed asset within the parachain. Using the **Box-Office pallet**, a node would teleport tokens to their derived Iris address, dispatch the transact instruction to invoke the Iris extrinsic to add bytes, and finally create the iris-backed asset in their parachain once it exists in Iris.

 At the end of this process, a parachain node owns an item in Iris - the unique runtime storage entry mapping their account to the CID that was added as well as an entity within their parachain (backed by Iris).

#### Storing (Pinning) Content
Availability is tricky in a decentralized context when the data is not stored on-chain. If we pin content to a single node then we rely on a single node for availability. If storage operated on an individual node basis (as is done with the data ingestion and ejection) we risk large amounts of data being pinned to a single ipfs node, thus decreasing the decentralization of the system and increasing the risk of data loss or exposure. To counteract this, we allow nodes to 'pool' together in order to act as a decentralized pinning service. This approach will allow an owner to achieve any degree of redundancy that they wish in order to ensure availability by specifying the number of nodes which they want to pin their data, proposing a storage rate and reward distribution epoch.

Pools do not need to be well defined. Rather, we allow them to be instantaneously formed while processing requests on a first come first served basis. When an owner requests that a CID is pinned they specify the:
- CID: the cid of the content (already added to and available in the network, but not pinned)
- storage_rate (tokens/kb/block): The number of tokens per kilobyte per second the owner is willing to pay for storage. The token used depends on the parachain.
- pool_size: The number of storage providers who should pin this content
- epoch_blocks: The number of blocks which define an epoch (for reward distribution)

**As a content owner** you must provide some minimum amount of tokens to fund at least 1 epoch. We lock these tokens in Iris until they are ready to be distributed as rewards to storage providers.

**As a storage provider** you are given a static amount of tokens, called an OBOL, when you join the network directly mapped to the number of kilobytes of storage that you promise to provide. We do this to ensure that nodes cannot store more content than they either want or have. When a node agrees to pin a CID, they lock a quantity of tokens directly tied to the size of the data they are pinning (e.g. To store 10kb the node must lock 10 OBOL).

Verification of storage hinges on the assumption that results from queries to the DHT of the embedded IPFS instances in Iris nodes can be trusted. After an OCW processes a request to store data and pins the CID to their IPFS node, they submit a transaction on chain to update runtime storage to reflect that they are agreeing pinning the owned content, locking a quantity of OBOL equivalent to the file size. The DHT is queried at the end of each epoch to verify that the storage providers have the data pinned. If they are offline then their locked OBOLS are moved to a new storage map which will allow nodes to unlock their tokens only when they unpin the data (nodes periodically check if they can or should unpin a CID from their node), and requests for storage providers are added back to the queue (on behalf of the data owner). If the data is not pinned, then the tokens are unlocked and returned to the node.

##### Reward Distribution
The reward distribution will depend on the number of nodes who maintained data availability at the beginning and end of the epoch. For example, if the pool_size is `N` and all pool members are online at block 0 and block epoch_blocks-1, then after the last block in the epoch we distribute a reward to each of the pinners who were active throughout: 

`(storage_rate * file_size_in_kb * epoch_blocks) / num_active_providers_during_epoch`

Additionally, at the end of each epoch we also verify that the owner has provided enough tokens to fund storage for the upcoming epoch. We check the maximum value: `(storage_rate * file_size_in_kb * epoch_blocks) / pool_size`. If the owner has not provided enough tokens for the epoch, the storage nodes can either remove the pin or keep it, at their discretion. Removal is the default behavior, but retention can be a configurable property. When funding is sufficient, this forms the basis for a reserve-backed NFT within a parachain. We leverage XCM to do this. The reserve is based on the amount of tokens funding the entry. This provides a basis for consumers to choose which owner to use (will the data be available for a long or short duration, etc).

We also build a mechanism which can remove and replace inactive members of a pool. If a pool provider has been offline for a preset number of epochs and at least one other provider is online (so the bytes are available in IPFS), then an automatic process will run in which the inactive pool providers are purged and new AddBytes requests are added to the queue (feeless), allowing new pool providers to be selected.

#### Data Availability
Iris does not ensure that data is available 24/7. 

#### Data Access
Iris provides access controls to the owner of any data and allows the owner to manage access to the data within any number of parachains connected through a relay chain. It treats data access as the ownership of a "ticket". A ticket provides its holder access to some content in Iris as identified by the CID and owner detailed within. Iris is not responsible for creating tickets, only for redeeming them.

The box-office pallet works together with the ipfs pallet in Iris to create iris-backed assets in the parachain. It heavily relies on constructing and dispatching XCM message to let users:

1) Create Iris-backed asset from owned Iris assets
2) Destroy the Iris-backed asset
3) Purchase ticket to content in Iris
4) Redeem ticket: Teleport ticket to Iris

#### Data Retrieval and Delivery
To eject (a copy of) data from the network, authorized nodes in parachains invoke the `request_get_bytes` extrinsic via the xcm transact instruction, providing the CID of the bytes they want and the owner account id.

The parachain connected to Iris must implement a [custom rpc endpoint](#custom-rpc-endpoints) that can receive file data from authorized nodes in Iris. When an OCW processes the command, it verifies that the requesting node owns a ticket to the owned CID. After successful verification, the OCW calls the RPC endpoint, passing the file bytes as the request body.

#### Governance, Moderation and Cleanup
**DISCLAIMER**: Governance is not in the scope of this proposal, however, we want to stress that governance is one of the main focuses of future work after completion and will become one of the main features of Iris going forward. Due to the importance of this topic, we mention it here.

Due to the nature of decentralization, there is a wide berth for potential abuse of the network. Particularly, for a storage network, this could manifest as leveraging the network to store or share illegal or abusive content (e.g. hate speech). In order to counteract this, Iris lets nodes report or flag content through an extrinsic, providing a cid, multiaddr, as well as a reason for reporting the content. When certain conditions are met, nodes who hold the content are incentivized to remove it from their IPFS node and punished if they do not. 

Iris has two flavors of governance: Content governance (moderation) as well as membership governance.
- content governance
  - remove/purge content
  - block CIDs from entering the network
- self-governance
  - block addresses
  - block validators/ipfs nodes from participating in iris
  - accept new validators

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

* What your project is _not_ or will _not_ provide or implement
  * Iris does not provide a platform to monetize content. External nodes can only add and retrieve data.
  * Iris does not store data indefinitely.

### Ecosystem Fit
* Where and how does your project fit into the ecosystem?

  * This proposal expands on current offchain storage capabilities in substrate. It intends to act as a decentralized storage solution that can be used by any substrate-based parachain, allowing access to data to be treated as an asset within the parachain, or across many compatible parachains.
  * We hope to work alongside other teams working on parachains to guide them in making their blockchains Iris-compatible.

* Who is your target audience (parachain/dapp/wallet/UI developers, designers, your own user base, some dapp's userbase, yourself)?
The audience is very wide ranging. 
  * For content creators, it provides a platform through which they can securely store and release their data without a third-party authority.
  * Storage providers can monetize their storage
  * Consumers do not need to rely on a third party to retrieve or purchase data
  * Parachains and dapps can leverage Iris to build functionality that monitizes or manages secure decentralized storage
   
* What need(s) does your project meet?
  - Most decentralized storage networks do not provide security or impose any gates to access the data, whereas this network does provide a means to do so. Content is 'ownable' and access to content can be treated as a commodity.
  - We provide a governance framework which is something missing in decentralized storage solutions. As adoption of decentralized storage grows, so does the risk of it being abused or hosting abusive content.
  - It is a reusable decentralized storage network that could exist as a parachain and be available to any other parachain who wants to use it.

There are several viable decentralized storage networks that already exist, with some being substrate-based chains. However, these all succumb to some of the issues outline in the introduction with DSNs (indexability, availability, security, governance), and they all have varying degrees of decentralization, from totally decentralized to barely.

Within the substrate ecosystem, notable DSNs are:
  * [Crust](https://www.crust.network/)
  * [Canyon Network](https://github.com/canyon-network)
  
There are several decentralized storage options already available outside of the substrate world, all with varying degrees of decentralization. Some of these include:
  * Textile
  * Filecoin
  * Storj
  * Bittorrent
  * Pinata

How IRIS differs from existing solutions:
  * Iris has IPFS embedded in its runtime, so we do not need to rely on storage proofs or encryption since we can interact with the DHT.
  * Iris lets content owners have full control over access, monetization, and storage of their content.
  * Iris can be used by nodes in any parachain or smart contract that has made itself Iris-compatible.
  * Iris provides governance to decentralized storage, providing a framework for which data can be purged from the IPFS network.


## Team :busts_in_silhouette:

### Team members

* Tony Riemer
* Atoshem Ghebrehiwet

### Contact

* **Tony Riemer**
  * **Contact Email:** tonyrriemer@gmail.com
* **Atoshem Ghebrehiwet**
  * **Contact Email:** atogheb@gmail.com
  * **Website:** www.atoshem.com


### Team's experience
**Tony**
Tony is a full-stack engineer with over 5 years of experience building enterprise applications for both FNMA and Capital One. Notably, he was the lead engineer of Capital One's "Bank Case Management" system, which is responsible for creating, managing, and automating customer needs initiated from Capital One cafes (such as modifying their name or changing their SSN/TIN). In addition, he holds a breadth of knowledge in many languages and has built several open-source projects, including a blockchain built from scrach in Go, an OpenCV-based augmented reality application for Android, as well as experiments in home automation.

**Atoshem**
I am a software engineer who enjoys problem-solving and learning new languages and frameworks. I've been working professionally as a full-stack developer for the past 4 years. Professionally, I have worked mostly in Java and Javascript. However, I have worked on personal projects using Golang and currently learning Rust. In my spare time, I enjoy solving algorithm challenges on leetcode and travelling to new destinations

### Team Code Repos

* Github Organization: https://github.com/iridium-labs
* Substrate fork: https://github.com/iridium-labs/iris
* React UI: https://github.com/iridium-labs/ui

(Tony) Personal Links
* https://github.com/driemworks
* https://www.linkedin.com/in/tony-riemer/

(Atoshem) Personal Links
* https://github.com/aatoshem
* https://www.linkedin.com/in/atoshem-ghebrehiwet/


## Development Status :open_book:

* Medium publication for Iris: https://medium.com/iris-blockchain 
* Development thus far consists of:
  * Syncing with the substrate master branch by rebuilding rust-ipfs/substrate's offchain_ipfs branch on top of it
  * OCWs are able to submit unsigned transactions (so can submit IPFS results back on chain)
  * initial developments of a UI, integrating with both js-ipfs and polkadot.js 

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 14 weeks
- **Full-Time Equivalent (FTE):**  1.5
- **Total Costs:** 24,000 USD

Guidelines/Assumptions:
- We always remain in sync with the latest substrate master branch and use the latest FRAME version.
- We maintain a minimum of 85% coverage on new code.


### Milestone 1 — The Iris Runtime (Foundations of the DSN)

* **Estimated duration:** 4 weeks
* **FTE:**  1.5
* **Costs:** 8,000 DAI

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

* **Estimated duration:** 4 weeks
* **FTE:**  1.5
* **Costs:** 8,000 DAI

**Goal**: The second milestone enables a decentralized and incentivized IPFS pinning service in Iris.

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can setup an Iris node, join the private network, and provide storage capacity. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. We intend to deliver fully functional tests along with each deliverable (which warrants testing). We intend to achieve a minimum of 85% coverage on new code. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish a weekly log explaining what was achieved as part of the grant, as well as any additional learnings that we deem important throughout development. https://medium.com/iris-blockchain |
| 1. | Substrate module: iris Runtime Module | We enhance the iris module to let nodes request storage, to form storage pools and to be rewarded using the rudimentary pool reward distibution scheme as described [above](#data-retrieval-and-delivery) (We intend to elaborate on this process in depth as part of deliverable 0b.). The outcome of this deliverable is a fully decentralized storage network achieved by through a decentralized IPFS pinning service (estimated duration: 3 weeks) |
| 2. | User Interface | We will iterate on the previous user interface to create two separate functionalities in the UI. Firstly, a "data-owner/consumer" facing page which let nodes view the availability of specific assets (number of online nodes pinning some CID), to request storage of data and to pay nodes for storage. The "data-owner/consumer" view swallows the of the functionality built in milestone 1 as well. Secondly, we build a "storage-provider" facing user interface, which displays to nodes running the embedded ipfs node their DHT stats and their rewards for pinning CIDS.  (estimated duration: 1.5 weeks) |

**NOTE**: Future development will include the ability to configure the embedded IPFS node from the UI, but for the time being we assume a static IPFS configuration is used in all nodes.

### Milestone 3 - Parachaining: Creating a parachain and pallet to use XCM to interact with Iris

* **Estimated Duration:** 6 weeks
* **FTE:**  1.5
* **Costs:** 8,000 DAI

**Goal**: The third milestone delivers an Iris-compatible parachain and enhancements to Iris to handle XCM messages. The outcome of this milestone is to separate the management and monetization of access to iris assets to a parachain, which can then use iris-backed assets and the "box-office" pallet to manage and sell access to assets in iris with the ticket entity. We do this by building functionality in the box-office pallet allowing parachain nodes to add data to iris, create iris-backed assets, define ticket costs and details, and finally to let ticket holders teleport their tickets to iris, where they can finally be used and verified. At the end of this milestone, iris nodes (i.e. storage providers) themselves will no longer be able to inject or eject data from Iris and is only responsible for processing commands added by parachain nodes (i.e. they **can not** add requests to be processed by OCWs, though the OCW itself can of course still interact with IPFS). 

**The parachain will enable a decentralized dropbox-like application.** We intend this use case to serve as an example of how to make an iris-compatible parachain, and thus the use case is intended to be as general as possible. 


| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can create and run the iris-compatible parachain as well as document the process through which interactions with Iris are made and verified. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. We intend to deliver fully functional tests along with each deliverable (which warrants testing). We intend to achieve a minimum of 85% coverage on new code. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish a weekly log explaining what was achieved as part of the grant, as well as any additional learnings that we deem important throughout development. https://medium.com/iris-blockchain |
| 1. | Creating a Parachain and Relay chain | We create a parachain and relay chain which will be used to communicate with Iris. This is purely setup/creation of both chains and integration of parachains with the relay chain. (estimated duration: 1 week) |
| 2a. | Substrate module: Box-Office Runtime Module | We build the box-office frame pallet (**used in the parachain**) which uses XCM to interact with Iris. This includes using XCM to send instructions to transfer tokens to their derived-address in Iris, adding and storing data in Iris, creating iris-backed assets in the parachain, purchasing tickets, and teleporting ticket assets from the parachain to Iris. (estimated duration: 3 weeks) |
| 2b. | Substrate module: iris Runtime Module | We update the iris runtime module (as built in milestone 1) to retrieve tickets from the holding register (as placed there by the parachain node). (estimated duration: 1.5 weeks) |
| 3. | Custom RPC endpoint | Migrate the implementation of the custom rpc endpoint and associated tests from Iris to the parachain. (estimated duration: 0.2 weeks) |
| 4. | Testing | Setup and document a local test environment with the relay chain to enable cross-chain testing. (estimated duration: 0.5 weeks) |
| 5. | User Interface | We iterate on the UI for use by the parachain. Here, we split some of the features in the milestone-1 version of the UI into two pieces, one for use by Iris nodes and one for parachain nodes. The **iris-facing user interface** is simply the "storage-provider" view of the UI as defined in the previous milestone. The "data-owner/consumer" portion of the already developed UI will become the **parachain-facing user interface**, which takes the form of a decentralized dropbox-like application. In this iteration of the UI nodes can add, view metadata/ownership, and retrieve data to/from Iris and use the box-office pallet to manage ownership, tickets, etc. The parachain-facing user interface allows parachain nodes to invoke extrinsics (in their parachain) and read from iris' runtime storage. (estimated duration: 1.5 weeks) |

## Future Plans

In the short term:
- Determine moderation and governance approaches and best practices. This is a major focus of Iris moving forward.
- Write a proper whitepaper on the Iris blockchain
- Create an online presence for the project via social media
- Continue to search for more potential collaborators
- Expand on the scope of this proposal to build a more feature-complete version of Iris (what this looks like is still not totally known)
- migrate the UI to substrate-connect

* the team's long-term plans and intentions in relation to it.
  * become a parachain on Kusama and Polkadot
  * build a dedicated dev team to contribute to and maintain Iris
  * Support parachain and dapp developers who wish to use Iris in their smart contracts or parachain runtimes.
  * Continue to research and enhance existing features in Iris

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?**
I learned about the grants program through the substrate website, as well as was encouraged to submit a proposal during discussions with Parity on the Substrate Builder's Program.

Here you can also add any additional information that you think is relevant to this application but isn't part of it already, such as:
* I've attempted building a decentralized storage application with IPFS and Ethereum in the past. That application was also called Iris, which you can find here https://github.com/driemworks/iris.
    * An early design of that project was discussed here: https://discuss.ipfs.io/t/dropbox-like-application-on-ipfs/7379
    * The approach taken in the initial design was insufficient to achieve what this proposal can.

