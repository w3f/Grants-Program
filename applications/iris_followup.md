# W3F Grant Proposal

- **Project Name:** Iris
- **Team Name:** Ideal Labs
- **Payment Address:** 0xB7E92CCDE85B8Cee89a8bEA2Fd5e5EE417d985Ad (DAI)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 3

## Project Overview :page_facing_up:

This is a follow-up grant to Iris:

- https://github.com/w3f/Grants-Program/pull/812
- https://github.com/w3f/Grants-Program/blob/master/applications/iris.md

### Overview

Iris is a decentralized network that provides a secure data storage, delivery, and ownership layer for Web 3.0 applications. It is infrastructure for the decentralized web, providing a storage and data exchange which enables the transfer and monetization of access to and ownership of data across chains, smart contracts and participants in the network or connected through a relay chain. Iris provides security, availability, reputation, and governance on top of IPFS, enabling data ownership, access management, and the commodification of latent storage capacity and content delivery. It applies defi concepts to data, reputation, storage capacity and availability to synthesize computation and storage and to represent off-chain assets in an on-chain context. We build a cryptographically verifiable relationship between data storage, access and ownership. Ideal Labs wants to be the forefront of the next data revolution, and to help build the tools needed for a transparent and fair data economy.

### Project Details

The intention of this follow-up grant is to implement several features that enable Iris to be a secure, social, and highly-available storage network without compromising decentralization. In our system, data owners associate their data with any number of 'data spaces' which each have specific rule sets and inclusion policies. We also lay the foundations for our encryption scheme (we will use a threshold encryption mechanism, though the implementation of this is out of scope for this proposal) by introducing the concept of the proxy node which will act as the linchpin for re-encryption in the future, as well as allows data owners and data consumers to run light clients (as they no longer are required to run the full node and add data to the embedded IPFS node). We also introduce a game-theoretic framework for ensuring replication and availability of data within the storage layer of Iris. Additionally we introduce "composable access rules", which allow data owners to specify rules which are implicitly enforced when consumers access their data. Lastly, we will build a javascript SDK to allow user interfaces for dapps built on Iris to easily build applications and interface with Iris.

This proposal makes several improvements on top of the existing Iris blockchain, specifically in terms of security, extensibility, data organiziation, and data ingestion/ejection.

To summarize, in the following we propose:

- the introduction of "data spaces"
- the implementation of "composable access rules" to apply custom business logic to data
- the introduction of "proxy nodes" that enable threshold encryption within the network
- the implementation of an availability-encouraging storage system
- a javascript SDK to allow dapp developers to easily build front ends for smart contracts on Iris

For further details, we direct the reader to view our whitepaper draft here: [https://www.idealabs.network/docs](https://www.idealabs.network/docs)

#### Tech Stack

Frameworks/Libraries:

- IPFS (specifically [rust-ipfs](https://github.com/rs-ipfs/rust-ipfs))
- Substrate

Languages:

- Rust
- Go
- Javascript/Typescript

#### Terminology

- Data Asset Class and Data Asset: A **data asset class** is an asset class which is associated with some owned data which has been ingested into the Iris storage system at some point in the past. A **data asset** is an asset minted from the data asset class.

- Data Owner: A **data owner** is any node that has initiated the ingestion of some data and owns a data asset class. In the following, we may refer to data owners as "Alice".

- Data Consumer: A **data consumer** is any node that owns a data asset minted from a data asset class. In the following, we may refer to data consumers as "Bob".

- Proxy Node: A **proxy node** is any node that has the minimum required hardware requirements and has staked the minimum required amount IRIS tokens to become a proxy node.

- Storage Node: A **storage node** is any node that has staked the minimum required amount IRIS tokens to become a storage node.

#### Data Spaces

A data space is a user-defined configuration and rule set that allows users to group data together into curated collections. More explicitly, the data space lays the foundation to enable user-defined moderation rules within the network and provides a means to securely associate disparate data sets with one another (i.e. under an ‘organization’). All data in Iris exists within the context of a space, however, there is no limit to the number of spaces a data owner may associate their data with.

Under the hood, the 'data space' is an asset class which is mapped to a set of configuration items that determine the inclusion and moderation policies of the space. These asset classes exist much the same as the concept of 'data assets' from the original Iris proposal. In a data space with a private inclusion policy, only nodes holding tokens minted from the data space asset class are authorized to associate data with the data space. We see this as an additional market opportunity for the data economy, as ownership of a space may become important based on the sum of data stored within. Data spaces may also be subject to  [composable access rules](#composable-access-rules) at some point in the future.

Further, data spaces form the basis for moderation, or curation, within the network. Each data space may have a set of rules associated with it which limits not only the type of data that can be associated with the space, but also with the contents of the data. We intend to accomplish this through the execution of machine learning models, bayesian filters, and more, within a trusted execution environment. However, that work is outside the scope of this proposal.

![data spaces diagram](https://github.com/ideal-lab5/Grants-Program/blob/iris_followup/src/data_spaces.drawio.png)

#### Composable Access Rules

Iris enables data owners to determine rules that consumers must follow when requesting their data from the network. These rules could include: limited use access tokens, minimum token requirements, time sensitive tokens, and many other use cases. We accomplish this through a set of smart contracts called composable access rules (CARs). They are composable in the sense that the data owner may specify any number of rules, each of which must be validated when a consumer requests data. In general, each rule stipulates a condition which, when met, results in the consumer being blocked from accessing data or in their token(s) being burned. For example, a "limited use token contract" would track the number of times a token is used to fetch data, and forces that token to be burned once the threshold is reached. If the token is not burned by the end of execution of each CAR, then the consumer can proceed to fetch the data. In general, the greater the number of CARs, the more costly it will be for consumers to access the data, since they must pay for each one to be executed.

A composable access rule must implement the following functions:

- an `execute(asset_id)` function that produces some boolean output. This function accepts the asset id of an asset class in Iris. It encapsulates the ‘access rule’ logic.
- a `register_asset(asset_id)` function. This function accepts the asset id of an asset class in Iris. When executed successfully, it results in the asset id being ‘registered’ in the rule contract’s storage.

With these two functions implemented and the contract deployed to the chain, data owners can then specify, using the contract address, which rules they want to be applied to their data. When a consumer node fetches data from the network, each of the specified rules must be executed by invoking the `execute` function in each registered contract. The result of contract failure results in the denial of data access. We use the `bare_call` function from the contracts pallet to invoke contract functions and wait for execution to complete.

#### Proxy Nodes and offchain clients for data ingestion/ejection

Proxy nodes form the basis of secure data ingestion and ejection from the network. Ultimately, these nodes will be responsible for powering Iris's threshold encryption mechanism. This mechanism is out of the scope of the current proposal, however, we will create this node role to provide the foundation for subsequent work in which the threshold encryption scheme will be implemented, as well as make data ingestion/ejection workflows easier for data owners and consumers. In the implementation proposed here, these nodes simply act as ingress and egress points to/from the IPFS network. Though proxy nodes do not increase the security of the network at this point, they do remove the dependency on data consumers and data owner to run a full Iris node to enable data ingestion and ejection.

Putting data spaces and proxy nodes together, we arrive at the following design:

![proxy nodes](https://github.com/ideal-lab5/Grants-Program/blob/iris_followup/src/proxy_data_spaces_io.drawio.png)

##### Offchain Client

The inclusion of proxy nodes impacts data ingestion and ejection workflows. We will build a secure offchain client using Go in order to serve files for ingestion by proxy nodes and to listen for data sent by proxy nodes when requested from the network.

In the initial design of Iris, data ingestion functioned by allowing a data owner, who is running a full iris node, to add some data to their embedded IPFS node to gossip with a validator node, who would then add the data to their own embedded IPFSS node, which is connected with other validator nodes. This poses several issues. Not only is it insecure, but also it forces data owners to always run a full node which limits the ease of use of the system. Similarly, data ejection functioned by allowing a data consumer to directly connect their embedded IPFS node to a validator node to retrieve data from the 'validator network', which introduced a similar set of issues that data owners would face. Proxy nodes allow us to circumvent both of these issues by acting as a gateway to the IPFS network. To accomplish data ingestion, nodes will run an offchain client, which acts as a file server that only authorized proxy nodes can call into.

![data ingestion](https://github.com/ideal-lab5/Grants-Program/blob/iris_followup/src/data_injection.drawio.png)

For data ejection, data consumers run the offchain client which will listen for connections from proxy nodes, accept authorized connections, and provide data consumers the ability to fetch data without running a full node.

![data ejection](https://github.com/ideal-lab5/Grants-Program/blob/iris_followup/src/data_ejection.drawio.png)

#### Proxy Node Reward Structure

Each data ingestion and ejection transaction has an additional transaction fee which is then pooled together and distributed to proxy nodes at the end of a session based on their participation during the session. This will function similarly to how proof of stake consensus algorithms reward validator nodes when new blocks are accepted into the chain.

#### Availability-Encouraging Replication Mechanism

For a mathematical treatment of this mechanism, we defer to [section 4](https://gateway.pinata.cloud/ipfs/QmWuY8R7tBWMTbMvgWGgtzLHEC5JHR1Kz3hW1F2CxmGLUg#h.myrhh47f5dz5) of the Iris whitepaper.

To maximize the decentralized nature of the storage layer of the network, we propose a game theoretic availability-encouraging mechanism based on the "stochastic replication game" as proposed [here](https://www.researchgate.net/publication/282894916_Game-Theoretic_Mechanisms_to_Increase_Data_Availability_in_Decentralized_Storage_Systems). The intention behind our mechanism is to build a system where highly-available, high capacity storage nodes are incentivized to provide assistance to lower-capacity nodes with less availability without sacrificing availability of the data itself. That is, we intend to build a storage system that won't eventually become dominated by large data warehouses but rather where 'small' and 'large' storage nodes mutually benefit from each others participation.

In our mechanism, each storage node maintains four sets of other storage nodes in the network:

- The **replica set** (for a data asset D): The set of storage nodes (excluding self) which have previously agreed to replicate some data asset D in a previous session.
- The **taboo set**: A set of storage nodes who have rejected replication proposals.
- The **metric set**: A set of nodes that have been scored (by a scoring function) and meet some minimum score. This set is maintained and updated by the T-MAN protocol and represent a set of potential replication partners.
- The **random set**: A set of randomly chosen storage nodes. This set is maintained and updated by the T-MAN protocol.

The replica set and metric set are both maintained by the [T-Man protocol](https://www.researchgate.net/publication/225403352_T-Man_Gossip-Based_Overlay_Topology_Management). Through two distinct phases, our mechanism allows a data owner to choose a minimum desired availability and a number of replicas, and the storage system autonomously seeks replicas which satisfy her needs. In the first phase, nodes update their replica and metric sets, which reflect the replica candidates that the node will request replication from in the next round. In the subsequent round, nodes who have been requested by data owners to store and replicate data use the metric and random sets to gossip with peers and request replication. Nodes who agree to replication are granted a share of rewards as provided by data owners. The taboo set maintains a list of candidates who have rejected replication proposals and the replica set a list of candidates who have accepted them.

##### Score Function

A node refreshes it's metric and random set based on the output of a relative score function, which provides a score between any two nodes. This can be thought of as a metric between any two nodes, where two 'identical' nodes have a relative score of 0. The score function within Iris is based on expected availability and promised storage space. That is, if two nodes have the same expected availability and the same storage space, the score between them is 0. That is, there is no difference in the value that they deliver to the network. We will refine the score function as part of this proposal and present a formal specification and implementation. This score function is used by each storage node to search for candidate nodes within the network, and more specifically by the T-MAN protocol to maintain and updaate the metric and random sets.

##### Storage Node rewards

Reward distribution for data storage occurs in several phases which we detail below. Assume that the data owner has requested storage for some data asset D over some period of sessions, which we refer to as an era. Below, we detail the flow of currency between participants when storing D:

Phase 0: Pre-Session Activities

- The data owner locks a minimum amount of currency required for a node to reasonably
believe that they will receive payment over the agreed upon era length.

Phase 1: Session Start

- Verify session storage participants

Phase 2: Session End

- Verify session participants that are still online and still have the data stored

Phase 3: Post-Session

- Distribute 33.33% of the total reward amongst the session participants
- Lock 66.67% of the rest of the reward and store network participation in a mapping.
- That is, we distribute one third of the rewards now, and the remaining ⅔ at the end of the
specified number of sessions. These percentages may be subject to change as we aim to optimize this system.

Phase 4: Post-Era

- Distribute the remaining locked rewards based on total participation of all participants across
all sessions.

##### IRIS-OBOL conversion rate

The formulation of this function is covered in depth in [section 6.2.1](https://gateway.pinata.cloud/ipfs/QmWuY8R7tBWMTbMvgWGgtzLHEC5JHR1Kz3hW1F2CxmGLUg#h.1xw8vwnayynx) of the iris whitepaper.

The IRIS-OBOL conversion rate is a function of the ratio of storage available to storage reserved. In general, we want to maintain a reasonable level of reserved storage space that both minimized storage costs paid by data owners and maximizes rewards given to storage nodes, as determined by the storage price curve (see [section 4.2](https://gateway.pinata.cloud/ipfs/QmWuY8R7tBWMTbMvgWGgtzLHEC5JHR1Kz3hW1F2CxmGLUg#h.fuqhmdg1pqfr)), which will be a curve that grows exponentially as reserved storage space approaches the maximum storage space of the network. We design the conversion rate to favor conversion of IRIS to OBOL when we fall below the ideal storage ratio (this precise value is yet to be determined) and to favor unstaking of IRIS, which results in the burning of OBOL. Using our preliminary research, we have arrived at the following function: β(𝑡) = 999/0.70 · 𝑡 + 1, 0 ≤ 𝑡 < 1, where t is the ratio of available storage to total storage.

#### IRIS SDK

We intend to adapt the user interface developed as part of the initial Iris grant proposal for usage as an SDK for dapp developers on Iris. The SDK will facilitate development of user interfaces for contracts running on the Iris blockchain. As an example, the Iris Asset Exchange UI from the initial grant proposal is one such application. We will adapt the current Iris UI to use this new SDK as well as demonstrate how to develop a simple data marketplace.

Specifically, we intend to adapt the SDK from the functions available in these files: [https://github.com/ideal-lab5/ui/tree/master/src/services](https://github.com/ideal-lab5/ui/tree/master/src/services).

#### Prior Work

This proposal is a followup to a completed web3 foundation grant which laid the foundation for these enhancements. With our initial proposal, we delivered:

- a layer on substrate that builds a  cryptographic relationship between on-chain asset ownership and actual off-chain data storage
- a naïve validator-based storage system  that encourages storage of 'valuable' data
- support for contracts and a rudimentary decentralized exchange to purchase and sell data access rights

In addition to these items, the Iris fork of substrate has been upgraded to by in sync with the latest substrate master branch and we have also upgraded the runtime to use the latest version of rust-ipfs (see here: [d9e14294c89abd2c085e91d8312041245b5d3b35](https://github.com/ideal-lab5/substrate/commit/d9e14294c89abd2c085e91d8312041245b5d3b35)).

#### Limitations and Expectations

Iris is *not* intended to act as a decentralized replacement for traditional cloud storage or to be a competitor to existing centralized data storage solutions. We are aware that Amazon could artifically deflate the price of S3 buckets down to $0 and still wildly profit. Further, this proposal does not address security (i.e. threshold encryption) in the network, not does it appproach moderation capabilities, though it does lay the foundation for those items to be implemented in the next phase of development.

### Ecosystem Fit

- Where and how does your project fit into the ecosystem?
  - Iris intends to be infrastructure for dapps that leverage decentralized storage and ownership capabilities. Further, our long term intention is to participate in a parachain auction once Iris is feature complete, after which we will be able to provide cross-chain data ownership that is cryptographically tied to the offchain storage within the embedded IPFS network.

- Who is your target audience (parachain/dapp/wallet/UI developers, designers, your own user base, some dapp's userbase, yourself)?

  - The target audience is very wide ranging as we aim to provide infrastructure for dapps and potentially other parachains to allow them to easily take advantage of decentralized storage capabilities. We also aim to provide tools for data owners and content creators to share or sell their data without a middleman, determining their own prices and business models. Additionally, data spaces allow organizations to control which data can be associated with them, which may allow Iris to be a used in B2B or middleware within existing centralized applications.

- What need(s) does your project meet?
  - The basis of Iris is the creation of a cryptographically verifiable relationship between data ownership, accessibility, and availability. We aim to treat data and storage both as on-chain assets as well as provide a robust governance and moderation framework, which can assist in IP protections and safeguarding the network from being used for abusive or malicious purposes (such as hosting malware, illicit or illegal materials, plagiarized materials, etc.).

- Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?
  - There are several proposed decentralized storage solutions within the dotsama ecosystem. Of note, there is Crust and CESS, both of which have previously been awarded web3 foundation grants.
  - If so, how is your project different?
    - Unlike other solutions, Iris uses an embedded IPFS network to accomplish offchain storage of data. This allows us to leverage many of the features of IPFS without reinventing the wheel.
    - Iris uses a game theoretic approach to create an availability-encouraging storage system.
    - Iris uses DeFi concepts not only to cryptographically associate data ownership with data availability, but also so build access rules and rights.
    - Iris believes that not all data is equal and though we do not intend to impose any type of authority in terms of moderation or censorship, we provide mechanisms for data owners to create curated data enclaves. Although we believe that decentralization is the way forward, we see the inherent issues that arise out of an open systems where data is essentially un-removable, and so we provide mechanisms through which consensus can result in the purging of data or data spaces entirely.

There are several existing decentralized storage networks that already exist, including:

- filecoin
- storj
- siacoin
- theta
- arweave

Iris differs from these networks in many ways. These networks generally store data openly, do not maintain on-chain ownership, and do not have the cross-chain capabilities that Iris is capable of supporting.

## Team :busts_in_silhouette:

### Team members

Tony Riemer: co-founder/developer
Developer X: developer
Sebastian Spitzer: co-founder
Brian Thamm: co-founder

### Contact

- **Contact Name:** Tony Riemer
- **Contact Email:** driemworks@idealabs.network
- **Website:** https://idealabs.network

### Legal Structure

- **Registered Address:** TBD, in progress
- **Registered Legal Entity:** Ideal Labs (TBD)

### Team's experience

Ideal Labs is composed of a group of individuals coming from diverse backgrounds across tech, business, and marketing, who all share a collective goal of realizing a decentralized storage layer that can facilitate the emergence of dapps that take advantage of decentralized storage.

**Tony Riemer**

Tony is a full-stack engineer with over 6 years of experience building enterprise applications for fortune 500 companies, including both Fannie Mae and Capital One. Notably, he was the lead engineer of Capital One's "Bank Case Management" system, has lead several development teams to quickly and successfully bring products to market while adhering to the strictest code quality and testing practices, and has acted as a mentor to other developers. Additionally, he holds a breadth of knowledge in many languages and programming paradigms and has built several open-source projects, including a proof of work blockchain written in Go, an OpenCV-based augmented reality application for Android, as well as experiments in home automation and machine learning. More recently, he is the founder and lead engineer at Ideal Labs, where he single-handedly designed the Iris blockchain and implemented the prototype, which was funded via a web3 foundation grant. He is passionate about decentralized technology and strives to make the promises of decentralization a reality.

**Developer X**

We intend to find another developer (potentially two) to contribute after milestone 1. We are currently discussing this with several interested parties. We will ammend this proposal once this role is filled. If it is not filled by the time milestone 1 is completed, we will submit an ammendement that reflects this as well.

**Sebastian Spitzer**

Sebastian started his career in marketing, from where he ventured into innovation management and built up innovation units and startup ecosystems in 3 verticals.

Essentially working as an intrapreneur in the automotive sector for the last 6 years, he managed the entire funnel from ideation to piloting and ultimately scaling digital solutions. In the last 3 years he scaled up 2 projects, adding 2m+ of annual turnover within the first 2 years to market.

In 2016 he first came into contact with the Blockchain space when scouting new tech and got deeply immersed when he saw the disruptive potentials. Since then he has become an advisor for two projects, supporting them in their growth to 200m+ market caps, worked as a dealflow manager/analyst for a crypto VC and helped founders on their early stage journey in the space.

In 2019 he authored a research paper on why the data economy in the automotive industry fails. Since then he was looking for an adequate solution and co-founded Ideal Labs 2 years later after discovering Tony's initial work.

**Brian Thamm**

Brian Thamm has over a decade of experience leading large data initiatives in both the Commercial and U.S. Federal Sectors.

After several years working with companies ranging from the Fortune 500 to startups, Brian decided to focus on his passion for enabling individuals to use data to improve their decision-making by starting Sophinea. Since its founding in late 2018, Sophinea has lead multi-national Data Analytics Modernization efforts in support of the United State’s Department of State and the National Institutes of Health.

Brian believes that data-driven success is something that often requires top level support, but is only achieved when users of the information are significantly engaged and are able to seamlessly translate data into decision-making. This requires expertise, but often also novel datasets. Brian believes that blockchain ecosystems represent a generational opportunity to develop these novel data sets by providing a fairer incentive structure to reward data providers for their efforts and willingness to share.

### Team Code Repos

- https://github.com/ideal-lab5
- https://github.com/ideal-lab5/substrate
- https://github.com/ideal-lab5/contracts
- https://github.com/ideal-lab5/ui

Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine.

- https://github.com/driemworks

### Team LinkedIn Profiles (if available)

- https://www.linkedin.com/in/tony-riemer/
https://www.linkedin.com/in/brianthamm/
https://www.linkedin.com/in/sebastian-s-253502159/

## Development Status :open_book:

As stated earlier in the [prior work](#prior-work) section, we have delivered the three milestones detailed as part of the intiial Iris grant proposal. Additionally, we have also synced the Iris repository with the latest substrate master branch as well as have upgraded to use the latest rust-ipfs version (see here: [d9e14294c89abd2c085e91d8312041245b5d3b35](https://github.com/ideal-lab5/substrate/commit/d9e14294c89abd2c085e91d8312041245b5d3b35)).

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 5 months (20 weeks)
- **Full-Time Equivalent (FTE):**  2.5 FTE
- **Total Costs:** 73,000

### Milestone 1 — Implement Data Spaces and Composable Access Rules

- **Estimated duration:** 1 month
- **FTE:**  1.5
- **Costs:** 9,000 USD

This milestone delivers the creation of data spaces, the ability to manage data spaces associated with data, and lays the groundwork for future data-space moderation capabilities. It also delivers composable access rules to the Iris network, allowing data owners to specify unique business models that consumers must adhere to across any number of data spaces.

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. We will provide a demo video and a manual testing guide, including environment setup instructions. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1. | Substrate module: DataSpaces | Create a pallet, similar to iris-assets pallet, that acts as a wrapper around the assets pallet and allows nodes to construct new data spaces and mint data space access tokens. |  
| 2. | Substrate module: Iris-Assets | Modify the iris-assets pallet to allow nodes to specify data spaces with which to associate their data. Additionally, we implement the logic required to verify that the data owner holds tokens to access the space. |
| 3. | Contracts | Create the trait definition for a Composable Access Rule and develop the following composable access rules: limited use token: allow a token associated with an asset id to be used only 'n' times perishable token: allow a token associated with an asset id to be used only before some specific date |  
| 4. | Substrate Module: Iris-Assets | Execute composable access rules associated with an asset id when requesting data from Iris. |
| 5. | User Interface | We will update the user interface to allow users to create and manage data spaces, associate asset classes with data spaces, and view data in data spaces. Additionally, we allow consumers to view which composable access rules are associated with an asset class. |

### Milestone 2 - Proxy/Gateway Nodes

- **Estimated Duration:** 1 month
- **FTE:**  2.5
- **Costs:** 18,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. We will provide a demo video and a manual testing guide, including environment setup instructions. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1. | Substrate Module: Iris-Proxy: Proxy Node creation | Implement mechanism to allow nodes to act as a proxy, including verification of network connection speed. |
| 2. | Substrate Pallet: Iris-Proxy: Proxy Routing Service | Implement a routing layer to assign incoming data ingestion requests to proxy nodes. This will function similarly to how proof of stake algorithms choose validator nodes to add blocks. |
| 3. | Offchain Module: Data Ingestion + Reception Server | Build an offchain client using Go that allows data owners to make data available to proxy nodes and data consumers to receive data streams from proxy nodes |
| 4. | Substrate Module: Iris-Proxy | Implement offchain service to fetch data from a data-owners offchain server and stream bytes to data-consumers |
| 5. | User Interface | We modify the user interface to use the offchain client for data ingestion as well as to view data that has been made available to the offchain client. |

### Milestone 3 - Storage System

- **Estimated Duration:** 2 months
- **FTE:**  2.5
- **Costs:** 36,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. We will provide a demo video and a manual testing guide, including environment setup instructions. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1. | Substrate Module: Iris-Assets/Iris-Session | Implement zk proofs that are submitted by offchain workers after communicating with IPFS (in the Iris-Session pallet) and verify them in the Iris-Assets pallet |
| 2. | Substrate Module | Implement a native token, IRIS, and a secondary token, OBOL, and a function that allows nodes to stake IRIS and be rewarded with OBOL based on the IRIS-OBOL conversion rate |
| 3. | Substrate Module: Iris-Storage | Implement generation of dummy files of specific sizes, storage of these files by storage node candidates, and submission of a zk proof after submission. |
| 4. | Substrate Module: Iris-Storage | Implement Storage Node routing module to match storage requests with nodes who meet minimal requirements as defined by data owners |
| 5. | Substrate Module: Iris-Storage | Implement  the T-MAN protocol and the relative scoring function |
| 6. | Substrate Module: Iris-Storage | Implement the stochastic replication game to ensure availability and replication of data |
| 7. | User Interface | We modify the user interface to allow data owners to rent storage space within the network, as well as a simple view for storage nodes to view rewards that they have accrued. |

## Milestone 4 - Javascript SDK and other apps

- **Estimated Duration:** 1 month
- **FTE:**  2
- **Costs:** 10,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. We will provide a demo video and a manual testing guide, including environment setup instructions. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1. | Javascript SDK | We will develop the javascript SDK to provide easy accessbility for front end developers to hook into dapps built on top of Iris as well as easily accomplish data ingestion, ejection, allocation/inclusion to data spaces, and more. We will document the full functionalities and specification of the SDK as part of this milestone. |
| 2. | Demonstration of the SDK | We will develop an NFT-marketplace type application on top of Iris to demonstrate the usage of the SDK. This will be adapted from the Iris Asset Exchange from the previous grant proposal for Iris. Further, we will demonstrate how this can be adapted by app developers to categorize data into their own data spaces. |

## Future Plans

- We intend to continue development after this proposal is completed. Specifically, we plan to consult with cryptography experts to determine the best approach for implementing a robust, performant, and secure **threshold ecnryption** scheme. Additionally, we intend to implement an **anonymous reputation system** for submitting feedback for data, data owners, and data spaces. We also plan to implement a robust **moderation and governance** protocol, which includes the execution of machine learning models and other security/verification checks (such as bayseian filters) within a **trust execution environment**.
- We will work with dapp developers to assist in develop of applications on Iris. We are already in communication with several projects that are interested in leveraging Iris as their storage system.
- We will strive to become a parachain on Kusama and Polkadot
- We will continue to expand the features available in Iris, such as partial ownership of assets, selling ownership of asset classes, and more

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?**
We first heard about the grants program from the Web3 Foundation Website.

Previous work on Iris is known the W3F grants team.
