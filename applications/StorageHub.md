# StorageHub Grant Application

- **Team Name:** Moonsong Labs
- **Payment Address:** USD Wire Preferred
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 3

## Project Overview :page_facing_up:

### Overview

* Tagline Describer
    * StorageHub is a decentralized storage public good parachain optimized for file based storage and larger data sets that are not suitable to be stored directly in standard parachain storage. The proposed parachain will provide developers in the Polkadot ecosystem with an alternate decentralized and substrate-based storage solution and functionality.

* Purpose	
    * The goal of this project is to provide storage for web3 applications and protocols within the Polkadot & Kusama ecosystems. Unlike other storage protocols that focus on end user or enterprise storage scenarios, StorageHub’s feature set optimizes for web3 application storage use cases. StorageHub aims to provide a decentralized storage option that allows web3 applications to store large files and large data sets in a cost efficient way without sacrificing decentralization properties.

* Problem 
    * Storage oriented chains, like Filecoin and Arweave, have emerged to provide more efficient and decentralized storage capabilities. However, these chains are standalone chains, and are not designed to interoperate with other chains. The problem is that web3 apps need smart contract logic and compute to be combined with storage to make a complete solution, but smart contracts and compute generally reside on different chains (e.g. Ethereum Mainnet, L2 rollups, Parachains) vs. on the storage optimized chains (Filecoin, Arweave). In response, these storage chains have tried to bolster their smart contract capabilities (e.g. Filecoin’s FVM, Arweave’s Smartweave), but they have and will continue to be hard pressed to convince all compute and smart contract activity to migrate to their chains.

    * The ideal scenario would be to combine smart contract execution from e.g. a Substrate based Polkadot parachain such as Moonbeam or Astar with storage from a storage optimized chain like Arweave.  If we look at NFT scenarios as an example, this is happening. The scenario is that you have an NFT contract on Mainnet, that has a pointer to a JPEG via an Arweave URL.  The problem is that this is a one-way pointer between 2 independent systems. It is up to the application to mediate interactions between the 2 chains in the client.  There is no awareness or connection between the contract and the JPEG other than the URL pointer in the contract. What if the contract could update access to and ownership of the actual data itself? What if the contract could read and act on the data stored? Simple functionality like this would open up a large number of new scenarios. End user UX could be substantially improved by removing the need for the user to understand and interact directly with both the contract and the storage blockchains, using potentially different accounts, keys, etc.

* Vision
    * StorageHub is a storage optimized parachain that is designed to work with other Polkadot & Kusama parachains. It focuses on storing data in an efficient and decentralized way, while allowing that storage to be accessed, used, and managed by other parachains. It will be possible for users to directly interact with the storage on the chain, but StorageHub also seeks to natively interoperate with existing parachains via XCM.

* Inspiration 
    * Amazon S3
        * (https://en.wikipedia.org/wiki/Amazon_S3) was a key building block of web2 cloud infrastructure that greatly eased and improved data storage in web2 applications.  With S3 devs could store arbitrarily large amounts of data in their apps without needing to get bogged down with storage infrastructure or scaling concerns.  StorageHub seeks to do something similar for web3 devs building on Polkadot.

    * Filecoin
        * (https://filecoin.io/) is a storage optimized chain that creates a 2 sided marketplace of storage providers and storage consumers.  The project is responsible for key innovations such as ipfs and libp2p, among other things.  In many ways filecoin sets the standard for decentralized storage in the web3 space.  Although the protocol seems focused on trying to compete with cloud and other centralized storage providers.

    * Arweave
        * (https://www.arweave.org/) is a storage optimized chain like filecoin, but that emphasizes permanent storage vs creating a time based storage marketplace.  Users pay once to store data on arweave forever.  It is popular to use for metadata associated with NFTs, among other things.

    * Project Greenfield
        * (https://github.com/bnb-chain/greenfield-whitepaper/blob/main/README.md) is a storage optimized chain designed to work with the BNB chain.  It was born out of practical needs that the state of BNB chain is already many terabytes large and there is a need to offload unnecessary storage from the main BNB chain.  There are lots of good cross chain ideas in Greenfield including having storage on Greenfield represented as NFTs on BNB chain which can be managed and whose ownership can be changed.

### Project Details

* Design and Implementation Principles
    * StorageHub will be a Substrate-native implementation deployed to both Kusama and Polkadot.
    * It will be a public good chain that uses DOT for fees, governance, and other utilities.
    * It will offer native XCM support such that parachains can interact with stored data and metadata in a trustless way..
    * End users and Dapps should be able to store and retrieve stored data from the chain.
    * The chain will create a 2 sided marketplace of storage providers and storage consumers.
    * A minimum of N copies of any given piece of data should be stored such that the system can survive the loss of some copies without losing the original dataset.  Erasure encoding or similar technique could be optionally used to achieve this.
    * On the tradeoff spectrum between decentralization vs performance, we opt to always maintain good decentralization properties even if that means less performance is possible.
    * There will need to be a network of storage providers that supply storage to the blockchain. 
    * The parachain will track metadata about the data being stored, and facilitate payments between the data owner and the storage provider. 
    * A set of metadata associated with any stored data will be managed by StorageHub. This will allow the data owner to control access, and to transfer ownership of the data to other parties.
    * StorageHub doesn’t aim to have smart contract functionality itself. Rather it strives to integrate, work with, and complement other smart contract or native parachains.
    * In creating the design for StorageHub, we will leverage previous research into polkadot and substrate based filestorage solutions such as:
        * https://github.com/w3f/Grants-Program/pull/1888
        * https://github.com/common-good-storage/report/blob/master/src/first.md

* Key Questions and Anticipated Challenges
    * Existing storage networks focus more on storage but less on user accessibility to that data.  But storage without accessibility isn’t that useful to users.  Can we incorporate outside accessibility guarantees into the protocol?
    * What type of storage will it provide? Only immutable hash/value type or will it support mutable references (like a filesystem, useful to store/manage a web service or page)
    * What kind of XCM interaction (API) do we want to support?
        * XCM (mostly HRMP) costs may make some scenarios prohibitive.
        * Given the costs of XCM, to what degree does it make sense to store metadata on StorageHub vs on the controlling chain?
    * What do sustainable economics look like for storage providers, especially given that a public good chain won’t have a token to help bootstrap this side of the market?
    * How is data provided and stored without increasing PoV?  This will most likely need to be a combination of offchain workers and a separate storage system.  Regular substrate state can’t be used for larger data storage, it would be used to keep tracking information about where and what data is stored.
    * What does this new data provider node look like and how does it work with other node types supporting the system?
    * How will the system ensure that enough copies of a given piece of data are present and available, given that storage provider nodes can go offline at any time.
    * How is it checked that data providers have the data they are being paid to store?  What are the consequences of failing this check?
    * How do you manage censorship of data?
        * Different kinds of data that could be subject to take down requests.  Data that e.g. a political party doesn’t like.  Data that is illegal in a given jurisdiction due to copyright or similar.  Data that is both illegal and morally offensive. 
        * Perhaps OpenGov tracks could be used for censorship takedowns.
        * Or data storage providers could be given censorship controls, and a permissionless staking design would make it so token holders could vote out providers that are out of line with community censorship standards.


### Ecosystem Fit
* Where and How Does StorageHub Fit In
    * There are currently no native Polkadot decentralized storage solutions and StorageHub aims to fill that gap.
    * Crust provides an incentive layer on top of existing storage protocols like ipfs.  Whereas StorageHub seeks to be a storage provider itself.
    * StorageHub will be natively accessible by other parachains via XCM.

* Target Audience
    * StorageHub is targeted for chains, contracts, teams and individuals that require data storage of larger datasets, and who value that storage being decentralized, censorship resistant, and permanent as long as storage fees are paid.
    * StorageHub will prioritize web3 developers that want to incorporate decentralized storage into their applications.  This means a focus on APIs, SDKs, developer docs and education.
    * StorageHub will secondarily provide a reference application which allows users to directly interact with the system, storing data and managing data storage.

* Use Cases
    * NFT, NFT marketplace, and Metaverse metadata storage
    * Dapps that require data storage
    * Personal and enterprise data storage - same as other storage chains.
    * DAO owned data assets - DAOs operating on existing parachains can manage access to and ownership of data assets on StorageHub.
    * “True” NFTs that can have the entirety of their associated data assets on-chain via a combination of an e.g. NFT contract and StorageHub stored assets.
    * Markets for data sets using NFT marketplaces.
    * New types of smart contracts that can act on StorageHub stored data on an one off or continuous basis


## Team :busts_in_silhouette:

### Team members
* Team Leader: Derek Yoo
* Team:
    * Alan Sapède
    * Chase Williams
    * Olivia Smith
    * Engineers to be hired

### Contact

- **Contact Name:** Chase Williams
- **Contact Email:** Chase@moonsonglabs.com
- **Website:** https://moonsonglabs.com/

### Legal Structure

- **Registered Address:** 1500 District Ave Burlington, MA 01803
- **Registered Legal Entity:** Delaware C Corp

### Team's experience

* The Moonsong Labs protocol engineering team has deep expertise in Substrate, EVM, cross chain technologies, and launching parachains on Kusama and Polkadot. Our team is the core engineering team for the Moonbeam Network and have made significant contributions to the ecosystem, such as contributions to Frontier, the Moonwall testing framework, parachain-staking pallet, and xcm tools. The engineering team is made up of 13+ engineers and is rapidly growing. 

* Team Example Code Repos:
    * https://github.com/Moonsong-Labs
    * https://github.com/moonbeam-foundation/moonbeam

* Team LinkedIn Profiles:
    * [Alan Sapede](https://www.linkedin.com/in/alansapede/)
    * [Derek Yoo](https://www.linkedin.com/in/derek-yoo-8a050/)
    * [Olivia Smith](https://www.linkedin.com/in/olivia-smith-69966616a/)
    * [Chase Williams](https://www.linkedin.com/in/chase-williams-442712b1/)
    * Engineering Team TBD

## Development Roadmap :nut_and_bolt:

### Overview
* Total Estimated Duration: 2 Months
    * Milestone #1: 1 Month
    * Milestone #2: 1 Month
* Full-Time Equivalent (FTE): 2.5
* Total Costs: $84,500 (USD)

### Milestone #1: Research & Design
* Estimated duration: 1 Month
* FTE: 2.5  
* Costs: $42,250 (USD)

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | Copyright and Licenses | CC BY 4.0 / GPLv3 |
| **0b.** | Research & Investigation | * Understand and clarify key requirements via conversations with key stakeholders <br/> * Study existing solutions and designs to see what technologies and approaches can be leveraged vs. being created <br/> * Research decentralized storage competitive projects, including but not limited to Filecoin, Arweave, Sia, Storj as well as existing storage work in the Polkadot ecosystem <br/> * Examine trade offs other decentralized storage providers have made including, but not limited to retrieval times, small v. large files, resiliency, cost efficacy, security & privacy, redundancy, user learning curve and environmental sustainability <br/> * Begin to design features compatible with Polkadot’s technical approach and philosophy <br/> * The research & design document will include the gathered requirements and the list of researched solutions & features that could meet those requirements, as well as all supporting evidence and documentation that led to those proposed requirements and features. The document will also expand its research on the “Key Questions and Anticipated Challenges” section |
| **0c.** | Feature Analysis | * In depth research of the technical feasibility of key features and components <br/> *Evaluation of proposed feature sets, inclusive of a detailed compatibility/tradeoff matrix leading to a clearly defined set of proposed StorageHub features <br/> * Stakeholders will be asked to provide feedback on those compatibility/tradeoffs and to help choose a good combination of features <br/> * Definition and documentation of key use cases and scenarios |
| **0d.** | Article | * The main deliverable for the first month is v0.5 of the research & design document. The research and design document will include the feature analysis, proposed MVP feature set including key use cases, and address the points in (0b.) and (0c.) |

### Milestone #2: Technical Deliverables
* Estimated Duration: 1 month
* FTE: 2.5
* Costs: $42,250 (USD)

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License Type | CC BY 4.0 / GPLv3 |
| **0b.** | Documentation | * For the second milestone we will provide v1.0 of the research & design document. The v1.0 document will include a high level technical design & architecture of StorageHub, including major subsystems, incorporating and building upon research from the first v0.5 milestone <br/> * This v1.0 research and design document will be shared with key stakeholders to obtain specific feedback that will help us continue to refine StorageHub <br/> * In addition to this, we will also begin to build prototype code that supports and tests the v1.0 technical design considerations. A basic tutorial will be included that explains how a user can run our prototype code and send test transactions |
| **0c.** | Testing & Testing Guide | * Software developed for this milestone will be prototype quality, and thus will not have the tests required for production deployment. However, the prototype code will be sufficient to demonstrate viability or compatibility of key aspects of the design approach <br/> * As outlined in (0b.), a basic tutorial will be included that explains how a user can run our prototype code and send test transactions |
| **0d.** | Docker | * We will provide a Dockerfile(s) that can be used to run the prototype associated with this milestone |
| **0e.** | Prototype Code | * We will create a Substrate and or RUST prototype to validate proposed designs described in the v1.0 design doc. In particular, the approach for the data provider role, and being able to store data in a redundant fashion, and retrieve data from the provider <br/> * The source code for the prototype will be delivered as part of the second month milestone. The prototype will have limited features (e.g. not decentralized, limited API, etc) or might not be complete but will provide sufficient functionalities to demonstrate key parts of the proposed design <br/> * We will provide a Dockerfile(s) that can be used to run the prototype associated with this milestone |
| **0f.** | Resource Estimation & Planning | * Estimate the time, budget, and resources required to implement a minimum viable feature set for the project <br/> * Break down the feature into smaller tasks or user stories <br/> * Create a proposed project plan that includes implementation milestones, and responsibilities <br/> * Include proposed next steps in the research and design doc |
| **0g.** | Article | * The main deliverables for this milestone are defined as below <br/> * Progressing the v0.5 document to a v1.0 state outlined in section (0b.) <br/> * A Substrate and or RUST prototype to validate proposed designs described in the v1.0, outlined in section (0e.) <br/> * A basic tutorial will be included that explains how a user can run our prototype code and send test transactions outlined in section (0c.) |


## Future Plans
* We are currently in the process of hiring fulltime resources that will be dedicated to this engineering effort.
* The intended long term plan is to successfully complete this initial grant to then set us up to apply for a follow on long term grant
