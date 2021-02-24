# Open Grant Proposal

* **Project Name:** API Protocol
* **Proposer:** [API Protocol](https://github.com/APIProtocol)
* **Payment Address:** 36wHH7KseuqtyTLMCB8dXKWm8VKdPRR8Vs

## Project Overview :page_facing_up: 



API Protocol is a new generation of decentralized web API connector protocol for Web 3.0 applications, designed to make web 3.0 APIs easier to find, access and use, thus promoting the development of Web 3.0.
 
API Protocol is a next-generation decentralized API (dAPI) service aggregator that enables your applications (dApps) to be truly decentralized and helps you accelerate development, significantly reduce time-to-market, reduce the risks associated with scaling and security over technology, significantly reduce downtime, and run applications on any decentralized or centralized cloud as well as any blockchain and smart contract platform.
   
 The API Protocol platform brings together a number of core technology innovations that will enable developers to build truly decentralized blockchain applications and digital products in the fastest way possible, without compromising on scalability, performance, security, resiliency and decentralization.
   
 API Protocol will build a cross-chain decentralized API service management platform on Polkdot based on the Substrate framework to provide decentralized API infrastructure for blockchain developers and improve the efficiency of developers building Dapp.
 
 
   
   
## Team Interest

 The initial team members of API Protocol come from the blockchain and basic software operation and maintenance industries, and have a deep understanding of the operation and developer pain points in the IT industry. In order to serve the Web 3.0 ecosystem and make the Web 3.0 APIs easier to use, discover and find, so that developers can assemble their business like building blocks, we launched the API Protocol project.
 
 ## Project Details 
 
 
### Architecture 
 ![img](https://raw.githubusercontent.com/APIProtocol/research/main/API%20Protocol%20Architecture.png)
 
#### Technical components:
  ##### 1 Consensus Layer 
  
   Maintain the consensus security of the entire network security, API Protocol underlying the development of the Substrate framework, can enjoy the security and efficiency of Substrate.
   
  ##### 2 P2P Network 
  
   Defines how ecological nodes interact and find each other
   
  ##### 3 API Adaptation Layer
  
   Adapt the underlying API services to help developers unify and shield the underlying service implementation details, and developers can enjoy out-of-the-box services.
   
  ##### 4 API Service Availability Engine
  
  Defines service availability metrics and compensation schemes for API services.

  ##### 5 API Service Registration
  
  Developers register API services so that other developers can discover and invoke them.
  
  ##### 6 API service discovery mechanism 
  
  The process of discovering the service provider during the invocation.
  
 ##### 7 API MarketPlace
  
   Economic mechanism to provide suitable API services to openers
   
## Project usage scenarios:

  ##### 1 Blockchain as a service 
  
  ![img](https://raw.githubusercontent.com/APIProtocol/research/main/block%20chain%20%20as%20a%20service.png)
  
  When using Blockchain as a service, developers can use the node service provided by the API Protocol ecosystem to achieve timely access to the Ethereum, IPFS network, and Polkadot ecological nodes。
  
  At the time of authorization, the user's project ID and private key registered in the API Protocol platform are used to complete security control, and the user's information is managed centrally at the beginning, and the decentralization will be completed at a later stage by using the Polkadot ecological user information management project.
  ```python
  Complete security control using Project ID：
  
  curl https://<network name>.apiprotocol.link/naas/PROJECT-ID
  
  Use project ID and project key to complete security control:
  
  curl --user :PROJECT-SECRET \
  https://<network name>.apiprotocol.link/naas/PROJECT-ID
  
   ```
   Initially, the supported protocols are HTTPS and WebSocket ：
   ```
   :JSON-RPC OVER HTTPS
   :JOSN-RPC OVER WebSocket
   ```
   A request  example:
   ```
   $ curl -X POST \
   -H "Content-Type: application/json" \
    --data '{"jsonrpc": "2.0", "id": 1, "method": "eth_blockNumber", "params": []}' \
    "https://polkadot.apiprotocol.link/naas/PROJECT-ID"
   ```
   Return result:
    ```
    {"jsonrpc": "2.0","result": "0x657abc", "id":1}
    ```
  
  ##### 2 API as a service
  
  ![img](https://raw.githubusercontent.com/APIProtocol/research/main/api%20as%20a%20service.png)
   
  API as a Service allows service providers to monetize their API services, and by providing an API marketplace in the API Protocol ecosystem, API service utilizers can receive revenue and incentives in the form of API Protocol native tokens.
  
  The types of APIs are initially divided in the API Protocol system: data services and event services.
  
  ###### Data API Service Access Process.
  
  The data API service provider encapsulates its service in the form of microservice, and then registers through API Protocol's decentralized marketplace, and then after the community of API Protocol ecosystem votes to reach a certain number of votes, the API service provider registers a proxy service contract in API Protocol's consensus network. The contract contains a request for data to be processed, and then sends a request event to the API service provider, which receives the request, does the corresponding processing operations, and returns the result to the proxy contract, which sends the data to the service requester.
  
  ![img](https://raw.githubusercontent.com/APIProtocol/research/main/data%20API%20service.png)


  ###### Event API Service Access Process.
      
  ![img](https://raw.githubusercontent.com/APIProtocol/research/main/Event%20API%20Service.png)
  
  
  ##### 3 Decentralized API Market
  
  ![img](https://raw.githubusercontent.com/APIProtocol/research/main/marketplace.png)
  
  API Protocol's decentralized marketplace serves as a contract for managing basic API information, including registration and payment of API services, as well as basic information display, and will later support decentralized exchange functions based on API tokens to help API service providers better monetize their APIs.
  
  ##### 4 SDK as a service
  
  ![img](https://raw.githubusercontent.com/APIProtocol/research/main/sdk%20as%20a%20service.png)
  
   SDKs play an important role in the software development process as a tool to help developers build applications quickly, but the lack of commercialization of development SDKs has led to a lack of willingness to build SDKs. The rewards will be decided by API Protocol's community vote.
   
  ##### 5 API service operator
  
  
   API service providers will run API Node, which is a blockchain network node based on Substrate 2.0. In addition to participating in network consensus and maintaining network security, it also has an off-chain work function based on Substrate Off-Chain  technology.
   
   ![img](https://raw.githubusercontent.com/APIProtocol/research/main/API%20Node.png)
   
   ##### 6 Dapp developer
   
   
   Dapp developers can use the Baas service provided by API Protocol to quickly access the blockchain network and quickly develop and distribute their applications.
   
   ![img](https://raw.githubusercontent.com/APIProtocol/research/main/Developer.png)
   
   ##### 7 DeFi uses API services
   DeFi is an on-chain smart contract. Because it needs events and data indicators to drive the program to perform corresponding operations, it needs to interact with external APIs.
   When the DeFi smart contract uses the event and data indicator API provided by the API Protocol, the DeFi contract must first inherit an APIServiceBridge class, the code is as follows:
   
   ```python
   // Contrace inherits the APIServiceBridge to gain the
   // functionality of creating API Protocol data requests.
    contract DeFiContract is APIServiceBridge {
    
      constructor( address proxyAPI) public {
    
       setProxyAPI(proxyAPI);
      }
    // Additional functions here:
  
}
   
  ```
   
  ## Substrate / Polkadot Integration:
  
  The API Protocol will be developed and designed based on the Substate 2.0 underlying engine, leveraging the Substate 2.0 off-chain module to provide API services for Web 3.0 developers.
  
  ### Tech Stack
  
  #### Rust
   Rust is a systems programming language with a focus on security, especially concurrency security, and a multi-paradigm language that supports functional and imperative programming paradigms as well as generics.
   
   Rust will be the primary development language for API Protocol.
  
  #### Substrate
  
  Substrate is an open source, modular and scalable blockchain development framework, Substrate provides the core components of blockchain: database layer (RocksDB), network layer (libp2p), transaction queue, pluggable consensus, off-chain working mechanism, FRAME.
  
  ![img](https://raw.githubusercontent.com/APIProtocol/research/main/substrate.png)
  
  API Protocol is a blockchain project built on top of Substate 2.0. The API Protocol network is connected to Polkadot as a parachain of Polkadot ecosystem, sharing the network security and performance brought by Polkadot's underlying consensus security and Substrate2.0, API Protocol is committed to become the underlying API monetization infrastructure to promote the development of Web 3.0. API Protocol will also join Polkadot's Relay chain at the right time to better serve developers in the Polkadot ecosystem.
  
  #### Off-Chain Features
  
  As traditional external API services based on the oracle machine are typically used to listen for blockchain events and trigger tasks based on conditions. When these tasks are executed, the execution results are submitted to the blockchain in the form of transactions. While this approach works, it still has some shortcomings in terms of security, scalability, and basic efficiency. This is why Substrate 2.0 has developed important features: off-chain functionality, including Off-Chain Worker, Off-Chain Storage, and Off-Chain Indexing, which help smart contracts gain access to reference data and event data, and API Protocol will use these features to help smart contracts gain access to external data through the API. 
  
  ![img]( https://raw.githubusercontent.com/APIProtocol/research/main/off-chain.png)
  
  
 
 #### ink!
 
 ink! is a domain-specific language based on Rust for writing smart contracts using Rust and compiling them into WASM code, designed for correctness, simplicity and efficiency. API Protoco will integrate the ink! function module to provide efficient contract services and enjoy the convenience of ink! development, so we use as the smart contract language
 
 #### Frontier
 
 Frontier is Substrate's Ethernet-compatible layer that allows developers to run unmodified Ethernet DAPPs. the program will allow any Substrate chain to appear as a fully Ethernet chain and host any tool supported by the Ethernet Solidity programming language, including MetaMask, Truffle and any other tool that uses Web3 RPC tools.
 
 Solidity, the EVM-based smart contract language, is currently the most widely used language by blockchain contract developers, so in order to integrate the developer community and lower the developer threshold, API Protocol will also provide support for Solidity language contracts, and for EVM, we will choose Frontier as the compatible layer.
 
 #### Substrate Archive 
 
 Substrate Archive is the blockchain indexing engine that indexes all block data, state data and Extrinsic data into the PostgreSQL database. API Protocol requires Substrate Archive when providing event data API services and data retrieval services.
 
 #### PosgreSQL
 
 PostgreSQL is a very advanced Object-Relational Database Management System (ORDBMS), the most powerful, feature-rich and advanced free software database system available. Some features are not even available in commercial databases. API Protocol will use this database to store blockchain statistics.
 
 #### IPFS
 
 IPFS is a decentralized distributed transport network, and API Protocol will use IPFS as the underlying technical facility for service communication and lookup services.

#### OpenAPI-Specification
 
 OAS defines a standard, language-independent RESTful API interface specification that allows both developers and operating systems to view and understand the functionality of a service without access to source code, documentation, or network traffic inspection (both for human and machine learning and reading). When OAS is properly defined, developers can understand and interact with remote services with minimal implementation logic. API Protocoto will implement API gateway interfaces and management functions in accordance with the OpenAPI Specification. 

#### polkadot/apps

 polkadot/apps is a development framework for developing polkadot browser applications, and API Protocol will develop browser-related views and interaction products based on it.

  
  
### Interface Specification

#### 1. Fast access to Web 3.0 nodes through the Naas service provided by API Protocol.

```
- desc： When developers deploy and test their Web3.0 APPs, they need to use third-party services to access the Web3.0 network due to cost issues.

- params： Project ID, accesstoken, specific request

- return：Return the corresponding request result

```

#### 2. Access reference data, such as btc prices, through the Reference Data API interface provided by API Protocol.

```
- desc： During the operation of smart contracts, sometimes they need off-chain reference data to make corresponding judgments and calculations, so they need to read off-chain data.

- params： APIDataID

- return：Return the corresponding data and data validity time

```


#### 3. Access reference data, such as btc prices, through the Reference Data API interface provided by API Protocol.

```
- desc： Smart contracts themselves are event-driven programs, usually driven by users sending transactions, but sometimes smart contracts need to do certain operations when a certain condition is met, so they need external event APIs..

- params： API EventID，Conditions for event triggering

- return：Event ID

```

  
  
  ## Ecosystem Fit 
  
  API Protocol is the Web 3.0 API Economy infrastructure, dedicated to making Web 3.0 APIs easier to find, access and use, to develop Web 3.0 applications more simple and efficient, thus promoting the development of Web 3.0.
  
  At the beginning of the project, we will support the following Web 3.0 Ecology  projects.
  
  * Naas Services: Filecoin/IPFS , Ethereum, Polkadot candidate network CC1, Acala，etc。
  
  * API Services: Plasm, Moonbeam, etc.
  
  * SDK Services : Substrate 2.0,Polkadot etc.
  
  As the Web 3.0 ecosystem grows, we will support more Web 3.0 API services.
  
  ## The Purpose of this Grant
  
  The purpose of this grant is to verify the feasibility of the project. Considering the rapid development of Web 3.0, we hope to verify the feasibility of the    project through this grant, and cooperate with Polkadot eco-partners to explore the infrastructure of Web 3.0 API economy, so as to better empower the Web 3.0 API economy.
  
  
 ## Team members

* haijun - CTO  
* Alex - Developer  

## Contact

[API Protocol](https://apiprotocol.link/#/)

<market@apiprotocol.link>



## Legal Structure 
No Legal Entity

## Team's experience
The project leader, Haijun, is a serial entrepreneur who has experienced the entrepreneurial wave of mobile Internet and enterprise-level IT services, and has also participated in the public chain development of blockchain projects. Previously, he developed products based on the Cosmos-SDK ecosystem, but he saw polkadot’s The Web 3.0 ecological vision is more in line with the development trend of the Internet, and We hope to participate in the construction of the Web 3.0 ecology, so the API Protocol project was established.  

## Team Code Repos
* https://github.com/AlexDevAPI


## Team LinkedIn Profiles
* https://www.linkedin.com/in/haijun-zhao-0a76652b/

## Development Roadmap :nut_and_bolt:

### Overview

* **Total Estimated Duration:** 2 months
* **Full-time equivalent (FTE):** 3
* **Total Costs:** 0.5 BTC

#### Milestone 1 — Verify Production of Concepts (POC) and Implement Substrate Modules

In this milestone, we will verify features with limited users and launch the testnet for the production of concepts. The implementation of off-chain workers of Substrate Framework will be built and validated.

* **Estimated Duration:** 2 months
* **Full-time Equivalent (FTE)**: 3
* **Costs:** 10000 DAI  

| **Number** | **Deliverable**                          | **Specification**                                            |
| ---------- | ---------------------------------------- | ------------------------------------------------------------ |
| 0a.        | License                                  | Apache License 2.0                                           |
| 0b.        | Documentation                            | Documents containing the description of whole architecture design for API Protocol. |
| 0c.        | Testing Guide                            | We will provide a full test suite and guide for the POC. |
| 1.         | API Service Node     | The node provides the function of adapting node APIs such as ETH, Filecoin/IPFS, Chia, and Polkadot. |
| 2.         | API Hub network | The API hub network is a decentralized network that mainly provides decentralized API service discovery and invocation. |
| 3.         | API Marketplace | API MarketPlace is an open API service exchange and pricing market. Web 3.0 Dapp can easily obtain the API services you want through API MarketPlace. |
| 4.         | Docker Image                             | The API Protocol docker image contains the POC version which can be running anywhere to verify the idea of API Protocol. |

### Community Engagement

API Protocol 's current community engagement strategies include:

* **Exposure on Leading Media Channels:** We will continue to publish articles about API Protocol in well-known media such as Golden Finance and Mars Finance.
* **Ecosystem Development Lead Program:** As the team is still small, we are now recruiting excellent developers through various channels, and later we will also set up a community eco-developer fund to attract more developers to participate in the API Protocol eco-building.
* **Promotion of Online and Offline Events:** We are also actively participating in Polkadot ecological AMA activities, in order to better understand Polkadot, so as to better serve Web 3.0 developers.

API Protocol's future community engagement strategies include:

* **Bounty Program for General Community:** API Protocol is a brand new project, the community is relatively weak, so in the initial stage, we are more to find like-minded community ambassadors to help build the API community. For these community ambassadors, we will also give generous returns。

* **Incentive Program for API Providers:** After the main functions are completed, we will set up an incentive program to encourage more market API  providers for API Protocol。


## Future Plans

* Expand the team
* Expand community influence.
* Ecological construction.

## Additional Information :heavy_plus_sign:

* Website: https://apiprotocol.link
* Twitter: https://twitter.com/APIProtocol
* Medium: https://apiprotocol.medium.com/
* Github: https://github.com/APIProtocol

