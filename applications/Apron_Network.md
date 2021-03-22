# Open Grant Proposal

* **Project Name:** Apron Network
* **Team Name:** Apron Labs
* **Payment Address:** 15tV6rQSwNgWQ1Z5pim2yJmELLvWNm5D4V

## Project Overview :page_facing_up: 

### Overview

#### Introduction

The Apron Network's vision is to be the entry point of the Web3 World in the future. The goal of the Apron Network is to create the decentralized infrastructure for all the developers who want to build applications on top of the blockchain, the service providers who are running nodes for blockchain, and the users who are using applications based on blockchain.

The blockchain infrastructure services are provided by seldom centralized service providers. Those service providers are commercial companies and earn profit by providing these services. In general speaking, there is no problem with such a business model that commercial companies provide infrastructure services and get paid by developers or users in the past ages. But NOT NOW. The main feature of blockchain is decentralization, while all the blockchain infrastructure services are built and maintained by commercial companies, and those systems are centralized, which is against the decentralization of blockchain. There is a potential issue of such a business model that the service providers can steal the blockchain from the community by manipulating the API accesses through their infrastructure services. Once the service providers manipulate the API accesses, there is no real blockchain anymore.

Maybe you are still thinking that it sounds terrible but no one can prove it. Let's see the recent accident of infura.io. Almost all of the blockchain applications mainly rely on the API services from infura.io, but none of the builders of blockchain applications can imagine what will happen if infura.io manipulates the API services. Hopefully, infura.io worth our trust according to past services, and there is no manipulation found yet.

**On Nov. 11th, 2020, the API services from infura.io are down, and the idea of Apron Network comes out.**

The Apron Network is built by the Apron Labs powered by Substrate. It provides a Cross-chain Decentralized Infrastructure Services Network that will be used by blockchain node runners, DApp developers, the public chain community, and DApp users. Every DApp developer can discover the proper service provider for a specific blockchain through the decentralized infrastructure market on the Apron Network. The Apron Network can be run as a parachain of Polkadot. 

With the Apron Network,  the DApp developers can find their API endpoint, node runners can provide infrastructure services to get profit and all the infrastructure services will be decentralized on the two-layers infrastructure service network. The Apron Network will guaranty there is no infura.io accident anymore!



#### Integration

The Apron Network can be run as a parachain on Polkadot, or an independent chain. The Apron Network contains Apron Node and Apron Market. The Apron Node is built with Substrate 2.0 Framework, and the OCW (Off-chain worker) will be included for API manage records. Apron Market consists of Apron Market Contracts and Apron Market Front End. The contracts will be implemented with Ink!, and the front-end will be built with polkadot.js.



#### Team Interest

Most of the team members are DApp developers who suffer from the lacking of Ethereum API Endpoint and tightly rely on infura.io since we are not able to set up our full node due to funds. As we have known, most of the DApp developers have the same embarrassing situation as us. After shocked by the accident of infura.io, we are willing to build a decentralized infrastructure service network, and we name it the Apron Network. 

With Substrate 2.0 Framework, we are able to build a customized blockchain network easily, and we have the ability to integrate an API Gateway to manage blockchain API services in Apron Node. With the Apron Network, the blockchain node runners can provide Infrastructure service easily and get profit through this decentralized infrastructure services network.



### Project Details 
#### Architecture  

The Apron Network consists of **Apron Node**, **Arpon Market Contracts**, **Decentralized API Market**, and the **Apron SDK**.

![img](https://raw.githubusercontent.com/Apron2050/graphics/main/Apron%20Architecture.jpg)

* The Apron Node is the customized chain node for the Apron network built with Substrate 2.0. Besides blockchain-related features, it contains the full features of an API Gateway in the early versions. In future versions, more infrastructure features will be added. It should be run together with the blockchain node and operate by blockchain node runners. For example,  the owner of the Ethereum Full node can set up an Apron Node to interact with his Ethereum Full node through RPC, then the DApp developer can retrieve the information of his Apron Node from the Apron Network, and call the API like calling an API with infura.io.
* The Apron Market Contracts manage the API services information, the registration of API services, the registration of API users, and the billing of API usage. All the API information is stored in these contracts. The billing feature is implemented,  the API users have to pay **$ANT** to use these APIs and the API owners will get paid by **$ANT**. Everything is done through smart contracts. **$ANT** is the native token in Apron Network.
* Decentralized API Market lists all the API services registered and available for developers from the data in smart contracts. DApp developers search the API services according to their needs and choose the one with the proper price.
* The Apron SDK makes the use of Apron Network easier. DApp developers can integrate this SDK in their app to dynamic switch blockchain entry-point according to their needs.



#### Substrate / Polkadot Integration

The Apron Network can be run as a para-chain of Polkadot, and also can be run as an independent chain apart from Polkadot. 

The whole network is built on top of the Substate 2.0 Framework, and OCW (off-chain worker) is used to report API usage statistics on which the billing relies.

All the contracts will be implemented with Ink!, and the front-end of Decentralized API Market will be on top of polkadot.js.



#### Scenarios

* Node Runners  



![img](https://raw.githubusercontent.com/Apron2050/graphics/main/Apron%20Node.jpg)

The above figure shows the role of each component act from the view of the blockchain node owner. To simply the scenario, we take an example. The para-chain node is running at the beginning, the Apron Node shown above is set up by the owner by staking some **$ANT**, and the Apron Node is accessible on the internet. The owner can configure Apron Node with the RPC entry point of the para-chain node, API access frequency, API access fee, and other limitations. After everything is configured, the Apron Node will be able to call the RPC interface of para-chain, and DApps will call the API through the Apron Node. The Apron Node calculates the API usage statistics of each caller, then stores this data through OCW (off-chain worker) on the chain for further billing. 



* DApp Developers  



![img](https://raw.githubusercontent.com/Apron2050/graphics/main/Apron%20Usage.jpg)

For DApp developers, there are two components that will be used. One is the Decentralized API Market, the other one is the Apron SDK. Firstly, DApp developers search the API services in the API service repositories ( which is part of the Decentralized API Market) on the webpage. After finding the proper API service, the DApp developer will generate an API access key with the help of Apron Market Contracts. Finally, the DApp developer develops the DApp with the API access key to use the related API services. Of course, the DApp developer should pay the fee of using the API services according to the fee addressed by the API service provider.


#### Interface Specification

The function provided by the pallet to report API usage statistics data is reportAPIUsage.
```
1. reportAPIUsage

- desc: Report the API usage statistics from API Gateway data.
- params: API Key
- return: the calls number
```

### Ecosystem Fit 

Infura.io is the typical infrastructure services provider that is totally centralized. 

The Apron Network provides exactly the same API services as infura.io but in a decentralized way, thanks to Substrate 2.0 Framework which let us only focused on the logic on top of blockchain rather than re-develop a new blockchain. In the future, the Apron Network will provide a decentralized infrastructure services network. 

## Team :busts_in_silhouette:

### Team members

* Toney - CTO/Project Lead  
* Junjun - Full-stack Developer  

### Contact
- https://apron.network

### Legal Structure 
No Legal Entity

### Team's experience

Toney   
   -  Over 13 years of experiences in Software Development   
   -  Software Engineer in MS   
   -  Mobile Game Developer  
   -  Blockchain Game Developer  
   -  The Chief Tech Officier of the team which wins TRON Accelerator 2018 Game Rewards  

Junjun   
   -  Over 15 years of experiences in Software Development   
   -  Former Senior Software Engineer in Lucent   
   -  DApp Developer  
   -  Full-stack Developer

### Team Code Repos
* Apron Labs: https://github.com/apron-network

### Team LinkedIn Profiles
* [Toney](https://www.linkedin.com/in/yi-sui-297a9223/)

## Development Roadmap :nut_and_bolt: 
### Overview
* **Total Estimated Duration:** 3 months
* **Full-time equivalent (FTE):** 4
* **Total Costs:** 0.98 BTC

### Milestone 1 Example — Implement Substrate Modules 
* **Estimated Duration:** 3 months
* **Full-time Equivalent (FTE):** 4
* **Costs:** 0.98 BTC 

In the first milestone, the features for the PoC will be implemented and tested by limited users. 

The following components will be included:

* Apron Node  
* Apron Market Contracts  
* Decentralized API Market / Front End   
* Apron SDK   

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | The documentation will be provided to show the whole achitecture of the Apron Network. |
| 0c. | Testing Guide | The testing guide will be provided to test each component. |
| 1. | Apron Node Repo | We will create a customized chain node with Substrate 2.0 Framework, it will contains the OCW module to report API usage statistics on-chain. |
| 2. | Apron Market Contracts Repo | The contracts will be implemented with Ink!, and it will handle all the API services related functions such as 1) Staking tokens to register API service for node runner, 2) Register and unregister API service for node runner, 3) Define the price of API service for node runner, 4) Apply API service access key for node runner and DApp developers, 5) Billing System of the API usage for node runner and DApp developers, 6)Interface to integrate with a DAO to solve dispute between node runner and DApp developer|
| 3. | Decentralized API Market / Front End Repo | It's a webpage working with Arpon Network, it's implemented based on polkadot.js as planned. |
| 4. | Apron SDK Repo                            | It's a JS lib to interact with Apron Network for DApp developers to dynamic switch API service endpoint. |
| 5. | Docker | We will provide a dockerfile to demonstrate the full functionality of our chain |
| 6. | Tutorial | We will write an tutorial about how to use Apron Network. |
| 7. | Article | We will write an article published on media channels. |
| 8. | DAO | A Apron DAO will be created to handle the governance of the Decentralized API Market. |



## Future Plans

Community Plan

* Hire 3 more developers.  
* Hire 1 marketing adviser.  
* Recruit more contributors involved in our project.  
* Join Polkadot related events.  
* Bounty Program.  
* Publish articles on media channels to expose the Apron Network.  



Development Plan

* The Apron Network will run as a parachain of the Kusama.  
* Support Kusama Node.  
* In phase 1, our goal is to achieve all the designed functions.  
* In phase 2, improve the stability of the Apron Network.
* In phase 3, provide decentralized quick node services.
* Finally, our goal is to provide the infrastructure services network.



## Additional Information :heavy_plus_sign: 

Currently we just start the first design of the Apron Network.

The project repo: https://github.com/apron-network
