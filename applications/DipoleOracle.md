# Open Grant Proposal

* **Project:** Dipole Oracle

* **Proposer:** [KK](https://www.linkedin.com/in/kaikai-yang)

* **Payment Address:** 

  ​	BTC: 12q2NigsthG7YdxUBRbAaZPTHYj1xuEjCx


## Project Description :page_facing_up:

Dipole is an award-winning clean-tech company that brings blockchain technology into distributed energy resource management. Our aim is to provide service for the massive and fragmented distributed energy assets that will emerge in the near future, as well as facilitate the decarbonization of the energy system. 

Our EMS platform allows secure and reliable energy trading, where users can access a customized energy management module and trace their energy consumption in real-time. 

Working alongside the UN Environment Programme (UNEP), Dipole Tech already has been implementing regional energy allocation projects in communities in Manila and Bangkok, providing decentralized tools that allow customers to monitor, manage, and buy electricity in local markets.

**Dipole Oracle**

Due to large amount of onchain-offchain data interaction involved in the distributed energy scenario, together with its fragmented nature, there caused  massive data interoperability in the reality. However Dipole is developing an independent Substrate-based blockchain on the Polkadot network (DipoleOracle), which records all stages of the energy industry and inter-operators with other systems. 

DipoleOracle connects Dipole chain and offline electrical hardware, ensure the safety and accuracy of  offline power usage and transaction data, make them applicable for blockchain use.  Which can enrich  the ecosystem of Substrate and Polkadot, and bring  the  revolution of clean energy ecology in whole society.

DipoleOracle  includes four key components: Operator, GoodsOracle, PayOracle and Collector. The whole system provides the feeding and collecting of energy generation/consumption and transaction data.

![](https://github.com/DipoleTech/dipole-oracle/blob/master/img/dipoleoracle.png)


- Operator

In the energy industry, electrical hardwares are extremely miscellaneous. The Operator module defines several common used electrical hardwares like electricity meter and charging point. The Operator module allows each registered electrical hardware to upload data online.

- GoodsOracle


In the energy industry, collecting real-time data from hardware such as electricity meter and charging piles has always been a technical challenge. DipoleGoodsOracle can be applicable to various electricity meters and protocols, which achieve a solid progress in this area.

- PayOracle


In the energy industry, periodical power transaction cause high needs of splitting bills for participants, third-party payments or stablecoins. PayOracle is able to complete all steps automatically. In area which don't have completed payment system like South Asia and Africa, PayOracle can enormously reduce the cost of payment. 

- Collector

In the energy industry, collecting energy generation/consumption and transaction data costs a lot of manpower and material resources. With the Collector module, users can easily get data they really need, which can help them customize their business scenarios.


**Advantage**

* a  customized oracle module can be applied to different kinds of variables data procession, such as electricity meter and charging point. 

* with the Operator module, any registered IoT device can easily upload data. Users can customized their set up like authorized uploading devices, filter malicious ones, and even build a scoring system.

* with the Collector module, users can customize advanced calculating model such as dynamic data processing, incremental and filter statistics.


## Team :busts_in_silhouette:

* **Members:** Richard, Jat, Mc Liu, gsxhnd
* **LinkedIn Profiles:** https://www.linkedin.com/company/dipoletech
* **Code Repos:** https://github.com/DipoleTech/dipole-oracle
* **Website:**	https://www.dipole.tech
* **Legal Structure:** Shanghai Fenwei Information Technology Co., Ltd.
* **Team's Experience:** 4 years of blockchain experience，3 years of golang experience


## Development Roadmap :nut_and_bolt:

* **Total Estimated Duration:** 4 weeks
* **Full-time equivalent (FTE):** 1.25
* **Total Costs:** 1.1 BTC 

### Milestone 

* **Estimated Duration:** 4 weeks
* **FTE:** 1.25
* **Costs:** 1.1 BTC 


| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 1. | DipoleOracle | Including GoodsOracle and PayOracle processing; Feature complete for traits, pallets and utilities;complete benchmarking, weight annotation, test coverage and code linting<br /> |
| 2.  | Backend Client | Backend client  example in the programming language nodejs, which shows how to use DipoleOracle |
| 3.  | Documentation | Documentation, examples and tutorials will be provided for using DipoleOracle |

**DipoleOracle Features**



- traits
  - OperatorManager
  - GoodsDataProvider
  - PayDataProvider
  - CollectorManager
- pallets
  - collector
  - goods-oracle
  - operator
  - pay-oracle
  - support


## Additional Information :heavy_plus_sign:

* We're currently implementing a Substrate-based chain, which provides blockchain services for clean energy ecosystem, including energy-based oracle, energy traceability, distributed energy trading, energy-based NFT,  etc. DipoleOracle is a very important part of the ecosystem. 
* This project was born out of genuine needs from clean energy evolution based on blockchain. Our intention is to develop a clean energy ecosystem and accelerate the growth of Substrate and Polkadot community.
* Currently it's all coming out of Dipole's own development cost
* We were rewarded 2020 Asia Pacific Low Carbon Lifestyle Challenge Prize issued by the United Nations Environment Programme (UNEP)

## About Dipole
Dipole Tech is a Distributed Energy Resource aggregator, providing services for the massive amount of distributed energy assets that will emerge in the future and facilitating the decarbonization of the energy system. Dipole Tech develops an independent Substrate-based blockchain which records all stages within the industry and enables interoperability from DER assets. Learn more by visiting the Dipole Tech website  or following them on Twitter.

