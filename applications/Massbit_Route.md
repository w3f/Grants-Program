# W3F Grant Proposal

- Project Name: Massbit Route
- Team Name: Codelight
- Payment Address: 0xD068C7E05CF20fcEE618C8F9207e019020c62F35
- Level: 2

## Project Overview :page_facing_up:

### Overview

- Codelight team’s vision is to build a decentralized, user-operated and governed Blockchain Distribution Network. To achieve the goal, we build Massbit blockchain on Subtrate framework, with MBT token to create an economy, where Node Providers stake and earn Massbit token for servicing the BDN and Consumers pay in token for global access to decentralized blockchain APIs. 

- The majority of existing dApps are utilizing blockchain Infrastructure-as-a-Service (IaaS) such as Infura or GetBlock to shorten the time to bring their products into production. Those blockchain IaaS services have gained traction quickly and contributed to the growth of many layer 1 and 2 blockchain networks. But that added value comes with a downsize, many "dApps" are relying on a centralized blockchain IaaS service and prone to outage caused by IaaS providers. Massbit Route eliminates blockchain API single-point of failure by forming a global network of Independent node providers to allow dApps access to the nearest blockchain datasource with optimal response time.


### Project Details

#### Architechture Overview

- Massbit Route is a blockchain distribution network (BDN) operated and governed by users all over the globe. It provides decentralized applications access to different blockchain APIs by routing request network traffic to a blockchain node that has optimized response time. In addition, Massbit Route is built to provide performance-optimized access to blockchains and aims at eliminating blockchain API single-point of failure by forming a global network of independent Node Providers.
We build a network operated and serviced by users that provide fast and redundant access to blockchain sources. Massbit Route facilitates a network of Gateways and Nodes infrastructure in 6 different zones around the world:
  - Asia 
  - North America 
  - Africa 
  - Europe 
  - South America 
  - Oceana

- Users can join Massbit network as Providers from any of those regions by running Massbit Nodes and Gateways that are connected to blockchain data-sources such as Ethereum or Polkadot. As Massbit network grows in the number of Nodes and Gateways as well as independent node providers, the network becomes highly available and redundant. When a Provider experience an issue with their nodes, blockchain API requests will be served by other Providers, which eliminates single-point-of-failure in Web2 CDN architecture.


#### Components

|   **1. Massbit Core**
 
- Massbit Core (MC) is the orchestrator of the entire Massbit network. It works along with other components to onboard new Gateways and Nodes onto Massbit network, and make sure traffic is routed by Gateways and Nodes effectively. When Providers need to operate Nodes or Gateways in Massbit network, they need to obtain a set of instructions created by the MC from the Portal for their servers. By executing the instructions in the form of Bash shell script, the server will negotiate with MC and Verification Service if it is qualified to participate in MassBit routing network. Once a Gateway is successfully verified in Massbit network, MC provides a list of dAPI entrypoints and Nodes in the same zone the Gateway need to server request and forward traffic respectively.

- As Massbit Route network grow globally and blockchain traffic needs to be directed optimally, MC constantly updates Gateways with a set of traffic routing and handling instruction to adopt a change within Massbit network. For example, when some nodes in a zone go offline, new nodes are added or Consumers adjust the request rate for dAPI entrypoint, MC generates a new set of configuration for all of the Gateway in the zone.

|   **2. Gateway Manager**

- Gateway Manager the DNS component of Massbit network based on the opensource project gdnsd. It runs as an authoritative DNS system of Massbit network, and can be seen as a directory for all Community Gateways and Nodes around the world.

- When a dApp query blockchain API through a Massbit dAPI entry-point, it needs to lookup the IP address for the dAPI entry-point through their configured recursive DNS servers. If the recursive DNS servers do not have the entry for the dAPI entry-point, they will perform authoritative lookup to Gateway Manager. With geographic IP capability, Gateway Manager resolve the DNS lookup with the IP of the Gateway closest to the requesting dApp based on the source IP in request Header. 

- A dAPI entry-point URL has the following format:
```
https://[API ID].eth-mainnet.massbitroute.net/[API key]
wss://[API ID].eth-mainnet.massbitroute.net/[API key]
```

- The host portion in the dAPI URL is a dynamic DNS entry in Gateway Manager. The resolved IP in the authoritative response by Gateway Manager will vary depend on the source IP in the request Header.

|   **3. Session Manager**

- When a dAPI entrypoint is created by Consumer, a dynamic DNS entry is created by Gateway Manager and resolved to the nearest Gateway IP based on the source IP in the request header. Once traffic reaches a Gateway, in order to accept the API request from Consumers, it needs to obtain a dAPI session key from Session Manager. The session key is only valid for a certain amount of time and will be renewed for the dAPI entrypoint if needed.

- In addition, Session Manager also controls the usage of the dAPI entry-point. Consumers need to deposit MBR token for the dAPI entrypoint in advanced to pay for the cost of dAPI usage. Depends on the amount of MBR deposit, Consumers will receive a corresponding quota for dAPI usage. Session Manager will inform if a dAPI entrypoint is out of quota and Gateways will block incoming request until more MBR token is funded for the dAPI.

- Session Manager also prevents malicious actors from bypassing dAPI payments and sending blockchain requests directly to Gateway public IP. Without a valid session key and a dAPI entrypoint, Gateways will reject the requests destined to their public IP. This will maintain the security of the network and form a building block for Massbit Route tokenomic.

|   **4. Stats**

- Stats collects telemetry from all verified Gateways and Nodes in Massbit network. The service provides different metric data to allow the Portal to visualize Nodes and Gateway performance with charts. In addition, it calculates and keeps track of the available quota for each dAPI based on the amount of MBT token deposit.

|   **5. Node Verification Service**

- Massbit Route becomes a faster and more reliable BDN when the number of Community Nodes and Gateway increase. Nodes and gateways need to meet certain requirement in order to  be part of Massbit global nework.

- When a Node request to join Massbit network, Verification Service check if the Node is able to forward request to its blockchain datasource and return result matching with the blockchain datasource such as block data, block hash and runtime version. If all checks passed the validation process, the node become a part of Massbit network, and ready to receive traffic from Gateways in the same zone.

- In each zone, a minimum of 1 Node is required in order for a Gateway to be verified. Without any Node or blockchain datasource, it is unnecessary to run a Gateway in that zone because it introduces some routing overhead, and traffic will eventually be routed to a nearest zone.

- When a Gateway needs to join Massbit network, Verification Service will validate if the Gateway has obtained a list of Node in its zone from Massbit Core and whether it can proxy traffic to the Nodes properly. If blockchain data returned by Gateway is correct and match with data from the Node and blockchain datasource in that zone, the Gateway is verified and its public IP is updated in Gateway Manager directory.

|   **6. Massbit Route blockchain**

- Building on Substrate framework, Massbit chain is a source of truth for token-related activities in Massbit network. Massbit Consumers need to pay fees in MBT token in exchange for global dAPI service. In return, Providers earns rewards from Consumers' fee for handling blockchain API requests and maintaining the stability of the network. Through Massbit chain, anyone can verify Providers' and Consumers' activities.

- *Provider activities*
  - Staking/Un-staking amount on each Node/Gateway
  - Reward calculated after each Era from Consumer fees   ​
  - Reward claim history  ​
  - Node/Gateway State reported by Fisherman   ​
  - Node verified duration eligible for staking reward​
  - Provider Wallet and transactions
  
- *Consumer activities*
  - dAPI deposit fee
  - dAPI remaining quota based on past usage on deposit fee
  - Consumer wallet and transactions
  
- *Delegator activities*
  - Staking/Un-staking amount on delegated Node/Gateway
  - Validator
  - Block reward for validator

|   **7. Portal**

- Portal is the user-interface of Massbit Route that allows user to user to perform the following activities:
  - Create/stake/unregister Nodes and Gateways
  - Obtain installation script for Nodes and Gateways
  - Claim reward for Nodes and Gateways
  - Visualize traffic of Nodes, Gateway and dAPI entry-point
  - Create dAPI entry-point and view quota
  - Deposit fee for dAPI

|   **8. Community Gateway**

- Gateways are entry-points to Massbit network, which receive blockchain API requests from dApps. It keeps a list of verified Nodes in the same zone, and forward requests to those nodes. It also stores static content of blockchain requests to reduce the response time for identical requests that come in later

|   **9. Community Node** 

- Community Nodes receive requests from upstream Community Gateway and forward them to the attached blockchain datasource. In addition, it works with Massbit Fisherman to make sure the datasource is available and synchronized with peers before it can receive new blockchain API requests from Gateways.

#### Traffic Routing Mechanism

- In Massbit network, Gateway Manager, Community Nodes and Community Gateways form a global blockchain CDN network in order to optimize blockchain API request and response time.

- Based on the public IP of each community-run Node and Gateway, a global geographic map of verified and staked Gateways is continuously updated. When a dApp sends a blockchain API request through Massbit Route API Entrypoint created by a Consumer, based on the global network IP map, the request is forwarded to a Gateway in which its zone is the same or closed to the request source IP.

- Each Gateway constantly updates Massbit Core to maintain a list of verified Node in its zone. From the gateway, the request is then forwarded to one of the nodes in the same zone, which will then proxy the request to the blockchain data-source associated with the node.

<p align="center">
  <img src="https://user-images.githubusercontent.com/6365545/171226927-5bd476c5-5eb3-4145-b317-3582bf60874f.png" alt="Massbit routing mechanism"/>
</p>

- When a node or gateway experiences issues such as poor CPU, memory, and network performance which result in high latency and response time, it will be deregistered from Massbit network by Fisherman. Only nodes with "staked"  status in Massbit network can serve API requests and earn token rewards to guarantee the stability of the entire network. 

- Because Massbit Gateways, Nodes, and blockchain source nodes are operated by independent providers, single-point of failure is eliminated. Fisherman ensures DNS entries of offline or malfunctioned Nodes and Gateways are removed from the network and make sure blockchain requests are forwarded through active nodes, which maintains redundancy for Massbit network.

#### Node Approval process

<p align="center">
  <img src="https://user-images.githubusercontent.com/6365545/171227074-e5178c51-4098-44d0-a9f2-fc5e2645bac4.png" alt="Node Aprroval process"/>
</p>

When a Node or Gateway joins Massbit, it needs to go through different states before it can serve dAPI traffics.
- **Created**: Node/Gateway information (name, zone, blockchain type that is served by this node, blockchain node IP) is registered with Massbit network. Based on the registered information, an installation shell script is generated for the new node.

- **Installing**: When the installation script is executed on a new server that needs to join Massbit network, the status changes to Installing, and public IP of Node/Gateway is recorded to Massbit chain

- **Verifying**: When the installation completes on the new server, it will proceed with the verification process for eligibility to join Massbit network. Fisherman will be mainly responsible for this stage by checking the following criteria:

|       Criteria | Detail                                                                                                                                                                                                                    |
| -------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Data integrity | The node/gateway must return data identical to the blockchain data-source from which the response was retrieved. This will prevent man-in-the-middle attacks </br> The blockchain data-source must be fully synchronized. |
|    Performance | Node/gateway needs to satisfy 3000 requests/sec with a 500 MB/sec transfer rate for 95% of test requests                                                                                                                  |

- **Verified / Failed**: If a node/gateway passes Verifying stage,  it becomes "Verified" and is ready to be approved by Fisherman for staking and serving dAPI

- **Approved**: In each zone, based on the dAPI demand, Fisherman automatically will approve the node/gateway to join Massbit. 

- **Staked**: After the node/gateway is approve, the Node Provider needs to stake a minimum of 100 MBT token. Once the node/gateway is staked, it is ready to service dAPI request and earn token rewards.

- **Reported**: While nodes/gateways are servicing the network, Fisherman continuously check for the network stability of each node/gateway. In case a node/gateway does not pass the check, it will be reported and eliminated from Massbit network.

#### Tokenomic of MBT

- MBT tokens will be used within Massbit network by Node Providers, dAPI Consumers, and Delegators. In order to join Massbit network, Node Providers need to stake their Massbit Nodes and Gateways to become actively serving blockchain request in Massbit. In return, Node Providers will receive MBT token reward from serving requests from dAPI Consumers. 

- The Consumers need to deposit MBT token to exchange for dAPI usage quota. The deposit amount is distributed to the Nodes Providers based on to the amount of dAPI request they served after each Era.

- In addition, anyone can delegate MBT token to actively running Massbit Nodes/Gateways to earn a small portion of the reward without the technical knowledge and effort to maintain Nodes/Gateways and RPC nodes.

- Our team is still expanding more detail for the Massbit token economy, which can be found in the this [documentation](https://docs.massbit.io/massbit-route/tokenomic/token-utility)

### Ecosystem Fit

- Massbit Route is a decentralized network of Nodes and Gateways that route dApps request to low latency blockchain nodes. Built on Subtrate framework, we would like to create a diversified ecosystem of blockchain nodes and Web3 applications. Within the ecosystem, by using Massbit tokens, independent individuals, groups, communities, or organizations can freely join and get paid for servicing the network by running, and pay for usage of blockchain-node.

- With a foundational software design and network routing structure of Massbit Nodes and Gateways, integration with more layer 1 protocols, ETH layer 2 solutions and DOT parachain nodes become less of a burden in the near future. Once our team see a demand for new type of blockchain in Massbit Route network, implemation for the new blockchain integration can be done in a short duration. Our team commits to listen and support our community needs to enrich the ecosystem and maintain the stability of Massbit network.

## Team :busts_in_silhouette:

### Team members

- Name of team leader:  Minh Doan
- Names of team members:
  - Tran Thanh Vu
  - Vu Viet Tai 
  - Nguyen Anh Huy
  - Nguyen Manh Dat
  - Nguyen Thien Tuong
  - Bui Tran Huy Hoang

### Contact

- **Contact Name:** Hoang Bui
- **Contact Email:** hoang@codelight.co
- **Website:** massbit.io

### Legal Structure

- **Registered Address:** Craigmuir Chambers, Road Town, Tortola, VG 1110, British Virgin Islands
- **Registered Legal Entity:** MassBit Solutions Ltd

### Team's experience

  - **Tran Thanh Vu:** Massbit Technical Product Manager - 9+ year experience working with high load system, design architecture system, resolve problem in high performance, high available, scalability, distributed system, and big data.
  - **Vu Viet Tai:** Massbit Product Owner - Co-Founder of Appbike, experience in product management and Scrum development
  - **Nguyen Anh Huy:** Software Engineer (Rust) - Doctor of Computer Science and Intelligent Systems - Osaka Prefecture University
  - **Nguyen Manh Dat:** Software Engineer (Rust - Blockchain) - Software Engineer with past experience building large E-commerce platform and Fintech product 
  - **Nguyen Thien Tuong:** Full-stack Software Engineer -  Software Engineer with past experience building large E-commerce and logistics platform
  - **Bui Tran Huy Hoang:** DevOps Engineers - Experience with deploying/scaling/automating Enterprise network infrastructure and application on Public Cloud

### Team Code Repos
  
  - Massbit Core: https://github.com/massbitprotocol/massbitroute
  - Fisherman: https://github.com/massbitprotocol/massbitroute_fisherman
  - Gateway: https://github.com/massbitprotocol/massbitroute_gateway
  - Node: https://github.com/massbitprotocol/massbitroute_node
  - Stat: https://github.com/massbitprotocol/massbitroute_stat
  - Session: https://github.com/massbitprotocol/massbitroute_session
  - Gateway Manager: https://github.com/massbitprotocol/massbitroute_gwman
  - Massbit Chain: https://github.com/massbitprotocol/massbitchain

### Team LinkedIn Profiles (if available)

  - Tran Thanh Vu: https://www.linkedin.com/in/baysao/
  - Vu Viet Tai: https://www.linkedin.com/in/viet-tai-vu-b83a1057/
  - Nguyen Anh Huy: https://www.linkedin.com/in/anhhuy-nguyen/
  - Nguyen Manh Dat: https://www.linkedin.com/in/nguyenmanhdat/
  - Nguyen Thien Tuong: https://www.linkedin.com/in/tuong-nguyen-thien-83a33a194/
  - Bui Tran Huy Hoang: https://www.linkedin.com/in/hoangtbui/

## Development Status :open_book:

- Massbit Route team has completed the the code base for Massbit Route blockchain distribution network including:
  - Core API
  - Stats
  - Session manager
  - Fisherman and Verification service
  - Gateway Manager
  - Massbit Node
  - Massbit Gateway

- Through a network of Massbit nodes and gateways, Massbit Route is now supporting traffic routing to ETH and DOT blockchain nodes. We have tested the network internally with 150 Massbit nodes and gateways deployed in 5 zones. We came to the conclusion that, in each zone, each working Massbit node requires 4 Massbit Gateway to achieve the reponse time under 500 ms for a blockchain API request through dAPI entrypoint.

- Currently, we are in Testnet with a target of 100 independent user-operated Massbit nodes (each node attach to a ETH/DOT full node) and Gateways that span accross 5 different zones. Through this testnet phase, we would like to introduce Massbit Route core functionality to professional and individual node providers as well as dApps partners that need cost-efficient and fast access to ETH/DOT blockchain nodes. Additionally, we take this opportunity to object real world network traffic/usage to evaluate the following key points for further improvement in preparation for mainnet launch:
  - The effectiveness of the blockchain traffic routing mechanism 
  - Find out key metrics to adjust the fairness for node approval process
  - Adjust the fee for dAPI usage and fair reward distribution to node providers who served the API request

## Development Roadmap :nut_and_bolt:

### Overview

### Milestone 1 - Global Blockchain Distribution Network

- **Estimated duration:** 1 month
- **FTE:**  6
- **Costs:** $35,000

| Number | Deliverable                                                                                                                           | Specification                                                                                                                                                                                                                                                |
| ------ | -------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 0.a    | Design and Documentation of Network routing mechanism                                                                                  | We will publish detail on how Massbit network route traffic to blockchain nodes                                                                                                                                                                              |
| 0.b    | Massbit Core Infrastructure Implementation                                                                                             | Core Infrastructure implementation. These components include: Massbit Core, Gateway Manager, Session Manager, Fisherman, Stats, Node Verification Service                                                                                                    |
| 0.c    | Massbit Nodes and Gateway supporting ETH and DOT blockchain                                                                            | Massbit Node and Gateway implementation. These components are responsible for routing API requests to ETH and DOT rpc nodes                                                                                                                                  |
| 0.d    | Internal Performance test in 6 zones                                                                                                   | Internal team will deploy 200 nodes and gateways with ETH and DOT blockchain nodes in multiple datacenter in 6 different zone to validate implementation and performance of Massbit Route components                                                         |
| 1.a    | Testnet: Onboard first 100 nodes run by community members to experiment with Internal testing metrics and observe unidentified problem | We will open testnet with **unofficial** Massbit token to allow active community members to experiment with Massbit Route network. This also helps our team to patch any bugs or issues from the design and implementation from the Node Provider standpoint |
| 1.b    | Expand Node Providers and dAPI users for routing quality and performance testing                                                       | DApps and strategic partners are onboard and offered to use dAPI from Massbit Route launched testnet. We will collect feedbacks/performance metrics and improve the product from End-user/Consumer standpoint                                                |
| 1.c    | Docker release                                                                                                                         | We will provide docker files of simulate Massbit network that can be used to test all of the functionality delivered with this milestone                                                                                                                     |

### Milestone 2 - Massbit Route tokenomic and Mainnet

- **Estimated Duration:** 1 month
- **FTE:**  6
- **Costs:** $15,000

| Number | Deliverable                                                                | Specification                                                                                                                                                                                                                                                                                                                  |
| ------ | -------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 1.     | Documentation                                                              | We will realease a detailed documentation on Massbit tokenomics and official guides for node operation, routing mechanism, and Node/Gateway performance metric requirement on Massbit mainnet                                                                                                                                  |
| 2.     | Optimize and Decentralized Fisherman                                       | With performance metrics observed from testnet, we will adjust the implemenatation of Fisherman to allow community to operate this component under Proof of Authority concept. This will provide better and fair Node Approval Process as Fisherman is no longer a single component controlled by Massbit team.                |
| 3.     | Provider incentive pot Implementation                                      | At early stage of Massbit network, the number of Consumers will be low, which lead the small reward for Node Providers. The Provider Incentive Pot is a module with 10% of total token supply locked and will be allocated 0.01% of the remaining balance for each Era to incentivize Node Providers maintain network service. |
| 4.     | Implementation for consumer dAPI fee and reward distribution for providers | We will mplement reward distribution from Consumer fee to Node providers based on the number API requests served by each Provider.                                                                                                                                                                                             |
| 5.     | Implementation for Node Provider/Delegator staking and reward distribution | We will implement the Node/Gateway Staking feature for Providers and Delegators. In addition, reward for each Node staking can be also claimed and sent to stakers' wallets                                                                                                                                                    |
| 6.     |  Docker release                                                                                                                         | We will provide docker files of simulate Massbit network that can be used to test all of the functionality delivered with this milestone                                                                                                                     |

## Future Plans

- Currently, our testnet phase is open to let our community experiment with Massbit Route core routing functionality with ETH and DOT blockchain nodes. Within the scope of Milestone 1, we want to take this opportunity to observe the following to release the stable version of Massbit Route blockchain distribution network:

  - User experience with Node/Gateway installation process
  - Node approval process with fair evaluation of response latency in different location within a zone
  - Accuracy in IP Geolocation for Nodes/Gateways
    - This ensures Nodes/Gateways are approved and benchmarked by Fisherman in the right zone
    - Detect inaccuracy in IP Geolocation database by surrounding gateways

- In the short term, we put our effort into optimizing and improve the efficiency of core functionalities of Massbit Route. This will build a solid foundation to attract DApps migrate to Massbit Route API and more Node Providers around the world to come and service the network.

- In the long run, once we reach the stability of global Massbit routing performance and fair token distribution from Consumers to Node Providers, we will focus on expanding Massbit Route ecosystem by integrating network with parachains and major L1/L2 that have large amount of transactions and data usage. In addition, when we reach a large network of node providers that span in many different parts of the world and have quick access to mempool, it is a good opportunity for Massbit to expand the feature scope to Defi Trading such as determining gas price to win a gas auction or future block mining.
