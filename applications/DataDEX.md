
* **Project Name:** DataDEX Network
* **Team Name:** DataDEX
* **Payment Address:** BTC 33ZyewA8Y8QAQySyJwH72AKxn9MLxhXVF6



## Project Overview :page_facing_up: 

DataDEX Network is a dencentralized exchange system that tokenizes data permissions and has an automatic market-making algorithm for liquidity with AMM capabilities. 
The issuance of DataToken is created and operated by DataMaker, and is cross-chain transacted with computing tokens of other computing networks through Polkadot's parachain to maxmized value of data.

### Overview


  * Maximize the value of data tokens through the AMM mechanism, and transform data from commodities into capital owned by data owners.
  
  * Cross-chain between privacy computing parachains based on Polkadot substrate.
  
  * Preserving privacy data with TEE or Federated Computation without moving the plain-text out of data owner's devices.

### Project Details 

![图片](https://github.com/datadex-trade/Documents/blob/main/datadex_details.png?raw=true)


Features:

* Liquidation contract and Data token contract base on substrate
* Web App is the UI of exchange to swap tokens between Data token and DDT(Main token of DataDEX)
* Registration Tool and Repository are a set of services to make the private data be owned by data providers.
* Comunication Module to message together between DataDEX and Phala Network, which follows XCMP format.
* Meta Storage and DID solution

### Data Pricing

#### Data Token AMM

DataDEX provides automated price discovery with AMM, which works for an initial dataset offering and throughout the dataset’s lifetime. AMMs can automatically match buyers and sellers based on automatic price discovery and can improve market-making efficiency and transaction volume.

Only large-scale data collections are valuable, and individual data fragments have limited value. DatasetMaker will create a contract on the main chain and list the token of this data (Data Token) collection with  pairs to a new pool(Dataset). In order to maximized obtain the value of data, DataOwner need to join a certain Dataset and submit Metadata to get the rewards sent by DatasetMaker. The number of liquidity tokens minted is computed based on the existing quantity of tokens. A dataset maker no longer specifies which prices they are willing to sell. Instead, dataset pools everyone’s data supply and demand liquidity together and makes markets according to a deterministic algorithm.

![图片](https://github.com/datadex-trade/Documents/blob/main/datadex_pricing.png?raw=true)

#### Data Token Costs of Computing

Data Consumer first needs to prepare a certain amount of PHALA/ALITA to pay for computing costs. Then use DDT to buy the Data Token. Based on the privacy-preserving computation like PHALA Network or Alita Network, etc. Data-owner’s plain-text data is not collected outside the device, but execute outsourced tasks on the device provided by Data-owner. Therefore, the value of data can be measured by complexity of the computation tasks. Caculate how much PHALA/ALITA the task consumes, and consume the equivalent Data Token.

Data Token Costs = K * (PHA/ALITA/...)

Total Costs = Data Token Costs + Computing Costs

### Ecosystem Fit 

Help us locate your project in the Polkadot/Substrate/Kusama landscape and what problems it tries to solve by answering each of these questions:

* Where and how does your project fit into the ecosystem? 
* Who is your target audience (parachain/dapp/wallet/UI developers, designers, your own user base, some dapp's userbase, yourself)?
* What need(s) does your project meet? 
* Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem? 
  * If so, how is your project different?
  * If not, are there similar projects in related ecosystems?

## Team :busts_in_silhouette:

### Team members

* Hongyu Luo:Former Senior Cloud Expert at Alibaba and Technical Director of LeTV. Seven years of experience at Alibaba Cloud as responsible for the Alibaba Cloud data computing platform, product development and commercialization of the 11.11 big data parallel processing platform, supporting thousands of brands, service providers and public cloud enterprises.
* Jingsong Yi: Bachelor of Information Management and Information System at Henan Polytechnic University. Extensive experience in design and development of world leading decentralized joint edge computing systems based on mobile devices, data analysis and computation in Trusted Execution Environment (TEE).
* Hui Bao: Graduated from Harbin University Of Commerce. Master in Solidity and blockchain technology. Extensive experience with J2EE and Distributed Computing systems.


### Contact
* **Contact Name:** Hongyu Luo
* **Contact Email:** luohongyu@alita.global
* **Website:**  https://datadex.trade

### Legal Structure 
* **Registered Address:** 60 PAYA LEBAR ROAD #08-55 PAYA LEBAR SQUARE SINGAPORE
* **Registered Legal Entity:** Data Chain Foundation Ltd.

### Team's experience

Alita.global implemented a MapReduce framework supporting Android system can handle complex edge end data analysis task rapidly, so that provides customers with low cost and privacy-preserving data computing service.[To download](http://app.gravity.top:8081/apk/alita_enc_sign.apk).

Alita network accounting system is based on Proof of Capacity blockchain, on which we built a computing marketplace with smart-contract.[Visit Testnet](http://testnet.alita.services:8304/index/)

There is also a web IDE for data development and computing resources management.

### Team Code Repos

This is an open source project under Apache License 2.0. All the defined milestones will be available to the open source community.


### Team LinkedIn Profiles



## Development Status :open_book: 




## Development Roadmap :nut_and_bolt: 

### 

### Overview

* Total Estimated Duration: 3 months
* Full-time equivalent (FTE): 3
* Total Costs: 25000 USD

|ID|Deliverable|Specification|
|:----|:----|:----|
|1|Graph Schema|Design user graph data schema, including activities and profile.|
|2|Mobile App|Develop preliminary mobile data owners registering tools and SDK|
|3|Smart Contract|Data DEX smart contract development|
|4|Frontend|Data DEX web system development|
|5|Task Oralce|Oracle development for receiving data computing tasks, adapted to the computing tasks of Phala and Alita Network|
|6|Porting to testnet|Porting fully DApp to Rococo|


## Future Plans

* Continuously improve Graph Schema to make it a complete personal data confirmation catalog in the Polkadot eco-system
* Promote personal data investment in data set construction and enrich the data content of the data market
* Gradually introduce business data consumers, and continuously improve the volume and value of data in the market
* Cooperating with more computing chains, to make the data is safely shared within different privacy-preserving computation protocols
### 


## Additional Information :heavy_plus_sign: 

