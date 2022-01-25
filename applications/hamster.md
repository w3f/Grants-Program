# W3F Grant Proposal

- **Project Name:** Hamster
- **Team Name:** [Hamster](https://github.com/orgs/hamster-shared)
- **Payment Address:** 0xa5dEFB39eDF3B678D3C4F264EAA909E3f490d2D0(USDT)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2



## Project Overview :page_facing_up:

### Overview

Hamster is a decentralized computing network based on the underlying chain. It aims to provide users with cost-effective computing servers. It is a decentralized platform for leasing computing resources that can be performed to rent idle computing resources

Currently there are many cloud computing service vendors providing cloud computing services, but currently with the expansion of services, the price of cloud computing services is gradually stabilized and high, and most of the cloud computing services are purchased on an annual basis, which causes great waste for current users who may use them for a short period of time, while the world's hardware capacity is gradually increasing today, and people have more and more idle computer products on hand. The goal of our product is to utilize the current idle computing resources in people's hands in a decentralized way, so that users who need it can use computing services in a cost-effective way.

Our team aims to build a complete platform for leasing idle computing resources. The decentralized computing resource leasing function is realized by using substrate framework pallet, which can be leased and traded on the chain, and the link and use of computing resources can be done through the p2p network protocol under the chain after signing the lease agreement on the chain.

### Project Details

Hamster is composed of Hamster nodes, Hamster resource providers, Hamster clients, Hamster gateways, and Hamster front-end pages.

![](https://gitee.com/ltyuanmu/drawing-bed/raw/master/202201121240597.jpg)

- Hamster Node: is a custom node built on Substrate 3.0.
  - pallet_provider: performs resource provider registration and provider resource information storage, and provides a computational marketplace
  - pallet_resource-order: performs resource lease order functions and lease agreement execution
  - pallet_gateway: The gateway mainly has the following functions: gateway registration, gateway heartbeat detection, gateway status reset, gateway drop penalty, and receive rewards. The main role is to add the gateway as an important player in the shared computing platform
- Hamster Gateway: p2p gateway with public IP, used to link information between resource provider and resource user, built with libp2p component, is the cornerstone of the leased resource availability, can register itself to Hamster Node
- Hamster Provider: can provide compute resources and register them with Hamster Node. Compute resources are provided using both vm virtual machine technology and docker technology. Currently vm virtual machine technology is used to better protect user privacy
- Hamster Client: After purchasing in the front end marketplace, users can view their purchased compute resources through the client and link to them.
- Hamster Front End: Hamster Dapp, which allows users to purchase compute resources that have already been provided, and pay a certain Token to purchase a certain amount of time to use the compute resources. We can pay by the hour for more flexible use.



###### Project Flow

![](https://gitee.com/ltyuanmu/drawing-bed/raw/master/202201121707081.jpg)

###### Anti-malicious attacks

- How do you ensure the system isn’t exploited and users actually fulfill the agreement?

  When the agreement is reached, the provider is required to complete the creation of the virtual machine, notify the blockchain of the completion of the order agreement, and request a heartbeat per epoch, which includes the number of cpu cores and memory size, for the blockchain to verify that it is working and providing valid resources. The potential threat is a nefarious provider forging heartbeats to trick the network into providing a valid service that actually provides less than the promised resources or even none at all. Since we have thought long and hard about this, and we do not currently have a cryptographic or better design to accomplish such a solution, we have adopted the idea of an arbitration model to prevent malicious attacks.

  ![](https://gitee.com/ltyuanmu/drawing-bed/raw/master/202201241409500.jpg)

  1. when the user finds a problem with the resource and the information configured at the time of purchase does not match, submits a validation request and requests arbitration. in order to ensure that there is no malicious validation, the submission of the request will have a certain cost pledge.
  2. the arbitration group is subject to the validation request, currently designed to arbitrate the group for the current chain of validators. because he is the block validator, will promote the role of the current ecology. It is a trusted team
  3. the arbitration group to link the computing resources, after entering the link for linux least privilege account, to query the virtual machine specifications
  4. arbitration break to verify and report the vote
  5. according to the voting results for incentives and penalties, to achieve the purpose of malicious evil.

  We will follow up with cryptography or a better algorithmic model to replace the arbitration model. This will be a major topic of our subsequent research.

- What are other potential attack vectors and how are you going to address them?

  - Virtual machine p2p connection security:

    The connection port of the virtual machine is exposed to the p2p network and is vulnerable to security attacks from the p2p network. When provier creates a virtual machine, it will use the public key of the purchasing user and inject it into the virtual machine. The password will be changed to a random password to ensure that no one can access it, and disable remote login by password. This protects the login security of the virtual machine.

  - Host network security:

    Mainly facing `Escape Exploit` . The 'Escape Exploit' problem is a persistent network security attack and needs to be solved by updating the corresponding software in time. We will iterate on the provider virtualization technology in the future.

Project Technology Stacks

- Rust
- Substrate
- Node.js
- Golang
- Wails
- Libp2p
- Kvm
- Docker
- Vue.js
- Polkadot.js

###### Proof of Concept

The current project is in the primary stage of validation of the entire business process, the Gateway module has not yet been completed, this is the goal of our subsequent planning.

###### Project page

- Resource Registration

  ![](https://gitee.com/ltyuanmu/drawing-bed/raw/master/202201141534648.jpg)

- Resource Purchase

  ![](https://gitee.com/ltyuanmu/drawing-bed/raw/master/202201141520784.jpg)

- Resource Usage

  ![](https://gitee.com/ltyuanmu/drawing-bed/raw/master/202201141520193.jpg)

### Ecosystem Fit

Our project is a distributed shared computing platform. Through the shared computing platform, our target customers are user groups with idle resource machines and some users who want to use cost-effective resources, they can be developers, designers, etc., and can deploy their inspirations that they want to share to our shared computing network to share out. The follow-up vision is to build an ecosystem of shared services on the shared platform network

## Team :busts_in_silhouette:

### Team members

- Teng Liang
- Haijiang Mo
- Jianguo Sun
- Zhiwei Li

### Contact

- **Contact Name:** Teng Liang
- **Contact Email:** ltyuanmu@gmail.com
- **Website:** Hamster is currently maintained on [Github](https://github.com/orgs/hamster-shared), no website has been created yet

### Legal Structure

### Team's experience

*Teng Liang*: Currently a team project leader with 8 years of software development experience, designed in the areas of Cloud Computing, Cloud Native, DevOps. and familiar with Java/Go/Rust languages and Solidity smart contract development.

*Haijiang Mo*: CTO of the team, with 10 years of software development experience. He is familiar with Go/Rust/Java/Python/Javascript/Typescript and has worked in cloud computing, cloud native, DevOps.

*Jianguo Sun* : Full-stack engineer with three years of development experience. And familiar with Go/Rust/Java/Python/Javascript/Typescript, front-end and client-side development.

*Zhiwei Li*: Graduate student in Computer Science, Substrate pallet developer.

### Team Code Repos

- https://github.com/hamster-shared
- https://github.com/hamster-shared/frontend
- https://github.com/hamster-shared/hamster
- https://github.com/hamster-shared/hamster-client
- https://github.com/hamster-shared/hamster-provider



- https://github.com/ltmuyuan
- https://github.com/mohaijiang
- https://github.com/jian-guo-s
- https://github.com/LwwL-123

## Development Status :open_book:

We have completed a simple version of the project for minimal process execution, and will subsequently update the usage documentation so you can install and experience using it.

The following is a list of the features that have been implemented:

- Hamster Node

  Computer resource register

  Update computer resource unit-price

  Create resource order

  Provider finish order

  Provider heartbeat

  Provider staking amount

  Provider withdraw amount

  Withdraw rental amount

  Withdraw fault execution

  Client cancel order

- Hamster Provider

  Computer create

  Computer destruction

  P2p link listen

- Hamster Client

  List of paid computers

  Computer link usage

- Hamster Front End

  Computing market

  Provider shared computing

  Provider lease agreement list

  List of computers purchased by the customer

  Customer order list

- Hamster Gateway

  Private IPFs network

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 3 months
- **Full-Time Equivalent (FTE):**  4 FTE
- **Total Costs:** $38,400

### Milestone 1 Example — Implement Hamster Client and Provider Modules

- **Estimated duration:** 1 month
- **FTE:**  4
- **Costs:** $12,800

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can use Hamster to share and use computing resources |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Article | We will write an article or tutorial that explains the work done as part of the grant. |
| 1. | Hamster Client | We will create a desktop client that will have **Market**,**My order** and **My resource** module. |
| 2. | Hamster Provider | We will create a a resource provider server that will have **Initialize configuration**,**Resource details**,**Account information** and **Configuration information** module. |
| 3. | Hamster Provider: web app | We will create a web app integrated in the Hamster Provider, to let users easily interact with our Hamster Provider function module. |
| 4. | Hamster chain | pallet_provider, pallet_resource-order modifications and optimizations due to the need to optimize and adapt already developed pallets when adding features for customers. As code delivery of the underlying framework, there are two integrated pallets |
| 5. | Whitepaper | Preparation of project white papers |

### Milestone 2 Example — Implement Hamster Gateway Modules

- **Estimated duration:** 1 month
- **FTE:**  4
- **Costs:** $12,800

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can use Hamster to share and use computing resources |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Article | We will write an article or tutorial that explains the work done as part of the grant. |
| 1. | Hamster Gateway | We will create a desktop client that will have **Register**,**Receive rewards ** and **Configuration** module. |
| 2. | Hamster Node: pallet_gateway | We will create a Substrate module that will have **Register gateway**,**Receive rewards** etc function. |
| 3. | Hamster Gateway: web app | We will create a web app integrated in the Hamster Gateway, to let users easily interact with our Hamster Gateway function module. |
| 4. | Hamster chain | Add a gateway module in the Hamster chain, to enable users to share gateway resources with public IP , receive rewards, etc. |

### Milestone 3 Example — Implement Hamster Anti-malicious attacks Modules

- **Estimated duration:** 1 month
- **FTE:**  4
- **Costs:** $12,800

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can use Hamster to share and use computing resources |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Article | We will write an article or tutorial that explains the work done as part of the grant. |
| 1. | Evil punishment | Design and implementation of punishment module for evil doing |
| 2. | Hamster Front end | Front end function addition and optimization to let users easily interact with our Hamster function module. |
| 3. | Hamster chain | We will integrate this chain with the Ministry of finance, Parliament, democracy and also other essential pallets ,to build a full-featured blockchain. |
| 4. | Benchmark | Perform unit tests on the individual algorithms to ensure system safety. |

## Future Plans

Our long-term vision is to provide distributed shared computing power. When the milestone is completed, we will expand the upper level ecology based on resources, where more web services can be built and constructed into a new service ecosystem in the Hamster network. Perhaps it can become a meta-universe service cornerstone possibility.

## Additional Information :heavy_plus_sign:

So far, we are self-funded development. However, for our long-term vision, we will try to get support from investment institutions. 
