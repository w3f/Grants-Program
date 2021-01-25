# Open Grant Proposal

* **Project Name:** API Protocol
* **Proposer:** [API Protocol](https://github.com/APIProtocol)
* **Payment Address:** 36wHH7KseuqtyTLMCB8dXKWm8VKdPRR8Vs

## Project Overview :page_facing_up: 



API Protocol is a new generation of decentralized web API connector protocol for Web 3.0 applications, designed to make web 3.0 APIs easier to find, access and use, thus promoting the development of Web 3.0.
 
API Protocol is a next-generation decentralized API (dAPI) service aggregator that enables your applications (dApps) to be truly decentralized and helps you accelerate development, significantly reduce time-to-market, reduce the risks associated with scaling and security over technology, significantly reduce downtime, and run applications on any decentralized or centralized cloud as well as any blockchain and smart contract platform.
   
 The API Protocol platform brings together a number of core technology innovations that will enable developers to build truly decentralized blockchain applications and digital products in the fastest way possible, without compromising on scalability, performance, security, resiliency and decentralization.
   
 API Protocol will build a cross-chain decentralized API service management platform on Polkdot based on the Substrate framework to provide decentralized API infrastructure for blockchain developers and improve the efficiency of developers building Dapp.
 
 
   ![img](https://raw.githubusercontent.com/APIProtocol/research/main/API%20Protocol.png)
   
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
  
  At the time of authorization, the user's project ID and private key registered in the API Protocol platform are used to complete security control, and the user's information is managed centrally at the beginning, and the decentralization will be completed at a later stage by using the Poca ecological user information management project.
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
   A request time example:
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
  
  The types of APIs are initially divided into the API Protocol system: data services and event services.
  
  ###### Data API Service Access Process.
  
  The data API service provider encapsulates its service in the form of microservice, and then registers through API Protocol's decentralized marketplace, and then after the community of API Protoco ecosystem votes to reach a certain number of votes, the API service provider registers a proxy service contract in API Protocol's consensus network. The contract contains a request for data to be processed, and then sends a request event to the API service provider, which receives the request, does the corresponding processing operations, and returns the result to the proxy contract, which sends the data to the service requester.
  
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
  
  
   API service providers will run API Node, which is a blockchain network node based on Substrate 2.0. In addition to participating in network consensus and maintaining network security, it also has an off-chain work function based on Substrate Off-Chain Workers technology.
   
   ![img](https://raw.githubusercontent.com/APIProtocol/research/main/API%20Node.png)
   
   ##### 6 Dapp developer
   
   
   Dapp developers can use the Baas service provided by API Protocol to quickly access the blockchain network and quickly develop and distribute their applications.
   ![img](https://raw.githubusercontent.com/APIProtocol/research/main/Developer.png)
   

   
  ## Substrate / Polkadot Integration:
  
  The API Protocol will be developed and designed based on the Substate 2.0 underlying engine, leveraging the Substate 2.0 off-chain module to provide API services for Web 3.0 developers.
  
  ## Ecosystem Fit 
  API Protocol is the Web 3.0 API Economy infrastructure, dedicated to making Web 3.0 APIs easier to find, access and use, to develop Web 3.0 applications more simple and efficient, thus promoting the development of Web 3.0.
  
  
 ## Team members

* haijun - CTO/Project Lead  
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

* **Total Estimated Duration:** 3 months
* **Full-time equivalent (FTE):** 3
* **Total Costs:** 0.5 BTC

#### Milestone 1 — Verify Production of Concepts (POC) and Implement Substrate Modules

In this milestone, we will verify features with limited users and launch the testnet for the production of concepts. The implementation of off-chain workers of Substrate Framework will be built and validated.

* **Estimated Duration:** 2 months
* **Full-time Equivalent (FTE)**: 3
* **Costs:** 0.5 BTC  

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

