# Kylin Network

* **Proposer:** [Kylin Labs](https://github.com/Kylin-network)
* **Payment Address:** 3FmU9VRXhnMkgBbQVx1cooYUAuDEajdibm

## Project Overview :page_facing_up:

### Overview

#### Introduction

**Kylin Network aims to Build a Cross-chain Platform Powering the Data Economy on Polkadot.** It will be the Data Infrastructure for DeFi and Web 3.0 Powered by Polkadot. The Open API and SDK of Kylin Network offers any applications and blockchains (such as parachains and parathreads) instantaneous but transparent, reliable and valid on/off-chain market data and social data sources by leveraging the power of Polkadot/Substrate Framework on open networks. 

Kylin Network represents extensibility and a synergetic increase to the off-chain workers capability as it will provide not only access, management, insights, coordination to a greater array of data sources, but bolster validity and decentralization of the data sources themselves. We believe that it is only via Polkadot/Substrate Framework that we can ensure a cost effective solution that data consumers and Dapp Builders will actually use over centralized sources. Kylin Network, therefore, hopes to achieve complementarity and synergy with Substrate Framework while providing valid, reliable, secure, cost effective and easily-coordinated data sourcing and data analytics.

![img](https://lh5.googleusercontent.com/9IhQJhHwhWJJbPUPftRUGHFSYBegMGMqJ1e1idOfrMTeIJAHqRsFwh5b0dRbhcHXc1hxTazvrfhFtA6xcfV0OLi2k_SBX4_5A73Juq2C3WVD-PDtgmPss-qYjwYgQVNfpitTAc89)

#### Team Interest
The Kylin team comprises talents from different fields of the digital world, ranging from data science, project operation, full-stack development to cryptocurrency early adopters and evangelists. This team believes it is a group of strong exponents of reforming the status-quo and making substantial contributions that can propel us into the next stage of data feeding, data exchange and data analytics.

Although oracles have become an area of high interest in the blockchain world, and many projects have been working on the issue, our team finds that from a practical perspective, and through a number of people in our network that have explored integrating them or others, they find the price feed queries too expensive. Indeed, quite a few projects we are aware of just decided to use centralized data feeds. Therefore, the narrative value of using an oracle may be far greater than practical value (usage) due to cost. So when working through cost of use, this is a key area for Kylin to consider as the validated data feeds will need to be cost effective to drive real usage. 

Kylin seeks to create a validated data repository and economy such that the externalities that OCWs reference will be more robust, secure, reliable and trustless. Additionally, we believe that it is only via Polkadot that we can ensure a cost effective solution that data consumers and Dapp Builders will actually use over centralized sources. 

Besides, defeated by the data streams dilemma, which is the inability to funnel real and instantaneous data onto the blockchain to create greater social value. After learning the developments of Polkadot network expansion and the Substrate 2.0 Framework upgrade, we believe Kylin Network can serve as a competent facilitator between the supply and demand equation.

### Project Details

#### Existing Problem and Our Solution
1. **Accessible data querying and data analytics services are needed:** DeFi is the most successful application in blockchain, but we don’t want this to be the only one because of the lack of valid external data on open networks. In a mature web 3.0 world, the number of data sources will be diverse and many, and will not be limited to price feeds alone Indeed, proper middleware will also have as its focus things such as stock price, twitter feeds, real-time election results. The need for an array of validated data resources has never been higher.
2. **Legacy oracles incur high costs and difficulties in feeding off-chain data:** Due to the previous lack of [off-chain workers](https://www.parity.io/substrate-2-0-is-here/) (OCW), many off-chain data cannot efficiently get access to the blockchain or the data feeding process is not cost effective via existing oracles. [ Substrate 2.0 framework](https://www.parity.io/substrate/) provides OCWs as a default solution to integrate real-world data safely and securely onto the blockchain without the need to get opt-in by each validator. There is an exigent need to coordinate and validate data sourcing and also make more efficient the process of requesting via OCW functionalities. Our work would extend both.
3. **Substrate offers a better framework and developing toolkit:** While OCWs are excellent at performing the basic functions of oracle nodes, etc., they do rely on a manual request (low-level TCP API request not available in WASM). Kylin Network would also provide the means to integrate into OCW functionalities and (Dapp builders’ capabilities) what would be essentially tantamount to a single, easy-to-use request library (no need to make some sort of wrapper in WASM).
4. **The interoperability and scalability of Polkadot exceeds that of Ethereum:** In terms of our choice of Polkadot, there are many weaknesses of Ethereum, especially high transaction costs, and low scalability. Thus, an implementation based on the Polkadot network and its cross-chain interoperability is a better solution for the blockchain ecosystem.

#### Project Architecture
To solve the above existing problems, we need a state-of-art solution to solve the above problems. The architecture of Kylin Network includes below four major components:

* **Kylin Data Analytics** is a combination of analytic tools designed for data warehouses. It extracts meaningful data findings, patterns, interpretation, and finally implements low-cost commercialization functionalities for the public. It also provides a query engine and restful API for third-party applications (Dapps, Networks, etc.) or external analytics tools (BI tools, Machine Learning, etc).
* **Kylin Data Oracle** is an advanced decentralized data feeding protocol powered by Polkadot offering multiple, real-time data sources with much lower cost. With complementarity to and synergy with off-chain workers (OCW) as one kind of Oracle Node implementations, it can better guarantee the security and accuracy of external data by verifying the data integrity and the validity that Oracle Node provided.
* **Kylin Data Marketplace** is an open platform for data exchange and pricing. Dapps built on Polkadot can easily and efficiently collect both off-chain and on-chain data only paying a very competitive fee. Kylin seeks to extend the data provisional resources across all possible data types/sources including but not limited to things like social media posts, flight information, exchange rates, weather reporting, etc.
* **Kylin Token $KYL** is the native token of Kylin Network which will play the role of governance and other utilities. $KYL is necessary to secure and power the decentralized data network.
  ![img](https://lh3.googleusercontent.com/z_UW4JV9m3F-pjLNpW5FsdicgaIEvJIl9PuJ6QNG9ET9_1LHJI2Lq8Ycr3zzeLrwhrGdtznVQsKlbl8jWFhuZzxG8NL7o1vaUaBl2oRKMRaOItQmYQCndjg_4TQxXYIQburzWdDq)

#### Data Analytics

The workflow of the Kylin Network below shows the relationship among the major components. Data sources such as blockchain, market, social, etc., data feed into the Kylin Network and data warehouse (data storage via IPFS, local servers, etc).

Via our arbitration and consensus mechanisms, we validate all data and provide a one-stop-shop for three separate functionalities for both third-party direct data consumers and third-party apps, dapps, networks: 1) Kylin Marketplace (data exchange and pricing); 2) Kylin Oracle, utilizing OCWs and providing advanced data feed (no discrete API calls needed); and 3) Kylin Analytics (tools for analyzing the data warehouse) containing a query engine and REST Server, and later serving external analytics tools. The major portal by which consumer-side third parties will interface with Kylin Network solution(s) will be via an open API/SDK. The major benefits to the Polkadot ecosystem will be a further removal of friction from the POV of both Dapp builders, a synergetic increase in the ability to easily manage, coordinate and retrieve validated data by consumers, and a compelling tokenomic argument toward a Cambrian data supply feed explosion from various sources heretofore not yet seen (beyond just price, social, keywords and other traditional data).
![img](https://lh6.googleusercontent.com/tfk_Rk2tyHzJ2xK_GWUD5uNQot6ZOaZInE-Rh3JTm1ucrGW0RRJxI6Lta-aVlR8onu5rva473vmAA6G5j1snp2SiC00w6U_Xjoh_uYpmPrZaAKN1CVKoQ-TFoYWGuZtW2-uMD8Vn)
The ultimate objective of Kylin Analytics is to provide query engine and analytics services for third-party apps (e.g. Dapp, Networks, etc) and external analytics tools (BI Tools, Machine Learning, etc) through open API and SDK. Kylin Analytics can support a variety of data storages (e.g. IPFS, Local Storage, etc) and leverage the interaction with external analytics tools. Some impressive examples are proving the significant impact and demand for data analytics in native crypto markets:[ Uniswap Protocol Analytics](https://info.uniswap.org/home) and [Synthetix Exchange](https://synthetix.exchange/).

Once the number of data sources expands, more data-oriented applications and analytics tools can make use of the service of Kylin Analytics in production. As we see the decentralized derivative trading will become the coming trend in this booming DeFi market, our Production of Concept (POC) will design a comprehensive and sophisticated terminal for data analytics and trade execution for derivative investors.

#### Data Oracle

Kylin Oracle as an advanced decentralized data feeding protocol provides a reliable, efficient, and trustless solution for off-chain data. The protocol runs in a purely decentralized and scalable manner. Kylin Oracle, which is built on Substrate, will be connected to the Polkadot ecosystem as a parachain, sharing the underlying consensus of Polkadot. The security and network performance will be guaranteed by Polkadot and Substrate Framework. Data integrity and validity can be improved due to the arbitration mechanism.

As discussed at the outset, current oracle projects’ integrations with data consumers have more marketing value than real-word value at the moment due to the high cost of usage fees, and although many useful connections have been made with projects like [Chainlink](https://chain.link/) that highlight the need for a decentralized oracle, there is nevertheless reliance on centralized feeds at the end of the day by many of these data consumer-side projects. Kylin, occupying an oracle-like functionality through extending and coordinating, and removing friction for OCW functionality, will offer a much cheaper alternative to the current solutions extant in the field today. Thanks to building natively via Substrate on Polkadot, we expect the cost of doing so and the speed and ease of doing so to be many orders of magnitude more efficient such that practical usage in the near-term will be a reality.

![img](https://lh5.googleusercontent.com/w33wmaVyx4YcrOaMt_Nx8AqY91rwL_afIWTcC00mN7CTISaCR11W-gLvNOubeVQ-kzjuzcdIATZMKE44BU0NbKQFt8T9D2e6q6XYfv3CMT4MQ98XlxKRN-JaB5l0nDTVyZHnCpIR)
In the schematic diagram above, Kylin Oracle encompasses five entities, including Data Consumer, Data Warehouse, Oracle Node, Arbitration Node, and Blockchain Node. These five entities represent the major components of Kylin's architecture. The details and the interrelated relationships of the components are as the following:

* **Data Consumer (Requester):** Data consumers may represent smart contracts, APIs, blockchains, protocols, applications or any data repository that calls up the Kylin and pays the fee by the native token $KYL.
* **Data Warehouse (DW):** Data Warehouse is a decentralised on-chain repository of integrated data. Data Warehouse stores the query queue and historically validated data/value that contracts or any other Data Consumers can read from.
* **Oracle Node (Miner):** Oracle Node handles all the data requests such as social data and market data from separate off-chain data sources, and signing the transactions of the Kylin parachain. Off-chain workers play a role as one kind of Oracle Node implementations.
* **Arbitration Node (Arbitrator):** The Arbitration Node guarantees the security and accuracy of external data by verifying the data integrity and the validity that Oracle Node provided. The Arbitration Node has the right to challenge the validity of a mined value or data by Oracle Node in the challenge time by paying a challenge fee.
* **Blockchain Node (Validator):** The bottom layer of Kylin Oracle is mainly built on a specialized blockchain network established by Substrate. It allows the Oracle Node to broadcast the mined value and the proof of calculation, then support the Arbitration Node to verify the validity of the mined value.

#### Substrate/Polkadot Integration

Polkadot ecosystem and the newly-updated Substrate 2.0 are essential to what Kylin Network is trying to achieve. Kylin Network will be connected to the Polkadot ecosystem acting as a parachain, sharing the Polkadot underlying consensus, and protected by the network performance of Polkadot and Substrate. Polkadot/Kusama is an important foundation, on which Kylin Network and its components are built.

The pallets that come with the Substrate 2.0 upgrade can offer Kylin Network the tools and maps to navigate through our vision, which is to build an advanced decentralized oracle that offers on/off-chain data with built-in interoperability. The off-chain worker is a substrate subsystem that can process off-chain data in an asynchronous way. It is a new feature in Substrate Framework that allows integrating data onto the blockchain. It can make off-chain data integration secure and more efficient, which is ideal for real-world data inputs via oracles. The off-chain worker subsystem allows execution of longer running and possibly non-deterministic tasks (e.g. web requests, encryption/decryption and signing of data, random number generation, CPU-intensive computations, enumeration/aggregation of on-chain data, etc.) leveraging on-chain data and access. Thus, we have the Data Warehouse in the system which will deal with Date Feeds and Data Requests sent by the user in a local data store or even a decentralized data storage such as IPFS.
![img](https://lh6.googleusercontent.com/tpXoEkf0qaSgljpntBW9Orktt6COgBQkhBH99mUlHkkD_snpdb177Sbixt30LEt6WZ9eqRLYzCW2aCxxIwIMMpbbAmvKrxoUtQXKnW93Zmx6WgD5fp2CXeM02-IVZH9EIzvmexY6)

The Kylin team also will utilize the off-chain workers modular to incentivize users to provide verified out-of-blockchain data to the Kylin Marketplace and Kylin Analytics will provide any party with the tools to make sense of the data uploaded. The marketplace is built for data collection and data exchange. The analyzing toolkit will include raw data collector, data preparation, data editor/coding and quantitative data trend generator, with more future features to be developed.

##### Pallet Design and Implements

The main pallet will allow smart contract request off-chain data by Kylin oracle nodes. There has three main functions.

**1. requestOffChainDataByHttp**
- `desc:` smart contract request off-chain data by using http protocol, later oracle nodes will send data to kylin chain through OCW.
- `params:` http url
- `return:` dataId

**2. getOffChainData**
- `desc:` smart contract fetch expected data from oracle storage.
- `params:` dataId
- `return:` expected data

**3. getDefaultOffChainData**
  - `desc:` smart contract fetch expected data that is loaded by default from oracle storage, like BTC price.
  - `params:` predefined dataId
  - `return:` expected data

![img](https://user-images.githubusercontent.com/12880651/97111329-32de9000-1719-11eb-9e62-3a512558ffe4.png)

#### Data Marketplace

The data marketplace is one of the trillion-dollar businesses around the world. The data marketplace will function as the next logical extension of Kylin Network's ability to warehouse validated real-world data to flow unobstructed with the kind of throughput necessary for comprehensive data feeding solutions. Validated data can be coordinated and managed such that the targeting of premium data feeds becomes possible. Specifications surrounding access to data via data feeders can be set up autonomously by the data provider in addition to cost of access in $KYL. Furthermore, capturing and coordinating all this data allows a one-stop shop for any developer to inform and ease the process of building. Using the hosted server only as a caching layer, it's ensured that all info is on-chain, and only interacting directly with our parachain and IPFS. 

The process flow for a data feeder would go as follows: register and connect and then publish specifications and offers for their feed (this will include things like API request 'library', pertinent addresses, reward/payment scheme, like subscription or pay-per-use). To reduce friction further, an SDK will be enabled for premium data feeders. 

A use case scenario could operate as such:

* Data feeder is registered and provides pay-per-use information on a premium data feed (pork belly futures from CME Group, Inc., for example); data consumers would search for 'pork belly futures' from the marketplace contracts and pick whatever result seems the most suitable.
* CME Group provides their data on a monthly subscription basis to the consumer.
* If the data consumer should not find a result, then they can request a bounty be approved for getting the data provider initialized and/or integrating them. 
  <img src="https://lh6.googleusercontent.com/F0iC9QG1o444sEGysIoF-L_wpGGIXmEOfRnrIyW20Ur044pbgO1skIrBeLhIFPp1Ss4lau8J9xnAx1Po91kTC6DtH7Muq2HQqJaEdXoxiz1o5yC4BTUax9oAeHzbE_xz_HuCLSU-" alt="" width="90%"/>

Besides, user contracts calling for a specific category of off-chain premium data would simply search for existing ones from marketplace contracts and pick the most suitable one. If there's no such premium data feed available on-chain yet, developers could start a bounty using $KYL tokens and the community would reach out to corresponding data providers to help integrate their service on-chain.

#### Open API and SDK

Our ultimate goal is to provide an essential open API and SDK from a high-level perspective with the above tools, fully powering the data economy on Polkadot. The functionality can be utilized via Open API and SDK. This will be released to combine the above components. 

The benefits of an open API are beyond criticism. We hope to build a framework whereby a plethora of diverse, validated data can find expression, value, and explosive operationalization in the Polkadot ecosystem. 

The SDK will be both an extension of the builders' capabilities and an extension of the value proposition of the Polkadot universe as a whole. If successful, this sort of solution brings more reliability and robustness to the entire network, as OCWs will be more than the external reference, they will become the enablers of a validated on-chain repository of trusted information for the entire Polkadot network. 

#### Application Scenarios

The application scenarios include but not limited to:

* **Decentralized Insurance Automatic Payment:** Through the Kylin Network to obtain timely and reliable events outside the insured chain, blockchain-based decentralized insurance can realize automatic payment of insurance such as flight delay insurance.
* **Stable Coins and Crypto Derivatives:** Stablecoins and encrypted derivatives need to frequently obtain off-chain real-time price data. Kylin Network can obtain reliable data in multiple scenarios in real time and efficiently.
* **Crypto Asset Lending Platform:** Kylin Network can provide real-time and reliable currency prices and borrower's social media information, providing strong support for the dynamic determination of loan interest rates.
* **Cross-chain Decentralized Exchange:** The lightweight Kylin Network interface that can be deployed on multiple chains provides the possibility for decentralized exchanges to realize cross-chain atomic transactions.
* **Decentralized Casinos and Games:** On-chain decentralized casinos and games often require safe and reliable random injection. Kylin Network random number engine provides unpredictable and verifiable random number generation.
* **Blockchain Computing Market:** Commercial computing such as machine learning training models and 3D rendering needs to complete a variety of complex computing tasks. The off-chain computing market provides verifiable and unlimited off-chain computing capabilities.

#### The Purpose of this Grant

In terms of the system architecture of Kylin Network, the purpose of this grant is to verify features with limited users and launch the testnet for production of concepts. Besides, the implementation of off-chain workers of Substrate 2.0 Framework will be built and validated in a lean way. As we mentioned above, the whole project has four main components, the development roadmap will take at least one year to deliver the platform. At that time, we believe Kylin Network will empower the data economy effectively.

### Ecosystem Fits

There are some existing projects which can support and work with the Kylin Network.

* [Plasm](https://www.plasmnet.io/): Plasm Network is a scaling dApps platform on Substrate.
* [Moonbeam](https://moonbeam.network/): Moonbeam is a new Polkadot smart contract platform that makes it easy to build natively interoperable blockchain applications.




## Team :busts_in_silhouette:

### Team Members

* Dylan Dewdney - CEO/Project Leader
* Beni Issembert - CMO/Head of Advisory Board
* Kyn Chaturvedi - Strategy Advisor
* Kevin Hsu - Data Scientist
* Aaron Po - Full-stack Developer
* Andy Zhuang - System Architect/Substrate Developer
* Jerry Shen - Back-end Software Engineer
* Bob Ma - Front-end Software Engineer

### Team Website

- https://kylin.network

### Legal Structure

Digital Asset FOF Ltd. is a company registered in Cayman Islands.

### Team Experience

**Dylan Dewdney**  
   &emsp;\-   Longtime (2011/12) crypto enthusiast, miner, investor  
   &emsp;\-   Co-founded Harbour DAO 2017  
   &emsp;\-   GTM for Beam.mw + Chief Evangelist  
   &emsp;\-   Head of Growth, AdEx  
   &emsp;\-   Investor and Advisor to Ramp and other projects  

**Beni Issembert**  
   &emsp;\-   15 years of proven experience as entrepreneur and global marketer within the scientific and technology sectors: Founder, Titan Poker; Founder, JJF Media Ltd., External CMO, ConnectJob  
   &emsp;\-   GTM for BEAM.mw + Chief Marketing Officer  
   &emsp;\-   Current CMO for Concordium  
   &emsp;\-   Published Author; PhD John Hopkins  
   &emsp;\-   Member of the Open Source Initiative 

**Kyn Chaturvedi**  
   &emsp;\-   Experienced Strategist across multiple verticals in digital technology with a demonstrated history of working in the gaming industry. Skilled in developing and implementing Go-to-Market strategies, Partnership Development, and Product Management.  
   &emsp;\-   Current CBDO of Tomochain  
   &emsp;\-   Wharton Grad (2011)  

**Kevin Hsu**  
   &emsp;\-   MSc in Computational Statistics and Machine Learning from UCL and supervised by David Silver, the senior engineer of AlphaGO.  
   &emsp;\-   Served as data scientist in Credit Suisse, senior machine learning Engineer in WeCash.  
   &emsp;\-   Prescient and consistent track-record in investment and has invested over 160 blockchain projects around the world.  

**Aaron Po**  
   &emsp;\-   7-year experience in full-stack development.  
   &emsp;\-   Deep knowledge in building scalable systems and blockchain solutions.  
   &emsp;\-   Stack: C#, Java, Rust, Go, Javascript, AWS, Kubernetes, Hadoop, HBase, etc.  

**Andy Zhuang**  
   &emsp;\-   Seasoned development experience in Hyperledger, Ethereum and EOS.  
   &emsp;\-   Expert in the architecture design of DeFi and token economics.  
   &emsp;\-   Senior Software Developer and Data Scientist in Baidu.  

### Team Code Repos

* Kylin Network: https://github.com/Kylin-Network

### Team Linkedin Profiles

* [www.linkedin.com/in/dylan-dewdney](http://www.linkedin.com/in/dylan-dewdney)
* [www.linkedin.com/in/beniissembert](http://www.linkedin.com/in/beniissembert)
* [www.linkedin.com/in/kynchaturvedi](http://www.linkedin.com/in/kynchaturvedi)
* [www.linkedin.com/in/yingkaixu](http://www.linkedin.com/in/yingkaixu)

## Development Roadmap :nut_and_bolt:

### Overview

* **Total Estimated Duration:** 2 months
* **Full-time equivalent (FTE):** 3
* **Total Costs:** 1.5 BTC

#### Milestone 1 — Verify Production of Concepts (POC) and Implement Substrate Modules

In this milestone, we will verify features with limited users and launch the testnet for the production of concepts. The implementation of off-chain workers of Substrate Framework will be built and validated.

* **Estimated Duration:** 2 months
* **Full-time Equivalent (FTE)**: 3
* **Costs:** 1.5 BTC  

| **Number** | **Deliverable**                          | **Specification**                                            |
| ---------- | ---------------------------------------- | ------------------------------------------------------------ |
| 0a.        | License                                  | Apache License 2.0                                           |
| 0b.        | Documentation                            | Documents containing the description of whole architecture design for Kylin Network. |
| 0c.        | Testing Guide                            | We will provide a full test suite and guide for the POC. |
| 1.         | Kylin Network Oracle Node Module Repo    | Oracle Node for data feeding built on top of Substrate 2.0 as a customized module written in Rust will store and process the data query request from data consumers, also it will handle the data feeding from miners. The very consensus protocol and the simplest schema of oracle market are implemented inside. |
| 2.         | Kylin Network Data Feeding/Miner Repo    | It handles the query requests from oracle nodes, and feeds the data after processing as requested. It will be implemented with Substrate 2.0, and the major data feeding part will be built with off-chain workers. We will perform configuration and optimization work to make this easier for typical use cases of the Kylin Network. |
| 3.         | Kylin Network Datasource Sample Repo | The sample datasource provider provides the data (e.g. the data provider fetches the spot and contract data from derivative exchanges) to be used by miners. It will contain two parts, the Java data retriever to access APIs from exchanges and the NodeJS datasource to handle data feeding. |
| 4.         | Docker Image                             | The Kylin Network docker image contains the POC version which can be running anywhere to verify the idea of Kylin Network. |
| 5.         | Kylin Contracts Repo | The smart contracts with Ink! to access oracle data and provide API for external calls. |
| 6.         | Kylin Market Front-end Repo | The Oracle Data Market front-end based on polkadot js to listing all available Oracle Data Services provided by providers through the Kylin Oracle Market. |


### Community Engagement

Kylin's current community engagement strategies include:

* **Exposure on Leading Media Channels:** We will release additional articles on Forbes, The Block, CoinDesk, CoinTelegraph and many other leading media channels.
* **Ecosystem Development Lead Program:** We will launch an Ecosystem Development Lead Program to recruit and get more technology and development contributors involved into our project.
* **Promotion of Online and Offline Events:** We will publish an article on medium upon the progress of this project. Meanwhile, we will join Polkadot related off-line events and do online AMA sessions to promote the project to the Polkadot community.

Kylin's future community engagement strategies include:

* **Bounty Program for General Community:** We will reward users who contribute positively to community building and content creation through an Ambassador Program. The community management team will be available 24/7 to answer questions and facilitate discussions in community channels.
* **Incentive Program for Dapp Developers:** Kylin Network focuses on giving developer support through both offline and online channels. Developers can integrate the data with only a few lines of code. The simplicity of integrating this project makes it easy for any developer to experiment.
* **Mining Program for Node Runners:** Kylin Network is targeting a global pool of 100 nodes upon the completed rollout of Kylin Network to achieve the highest degree of decentralization as possible. Gradually, reputable and trusted public nodes will be onboard onto this project to ensure the stability of the network.
* **Incentive Program for Data Providers:** After the main functions are completed, we will set up an incentive program to encourage more market data and social data sources as premium data providers for Kylin Network.
* **Potential IPO during Parachain Auction for Community Members:** Kylin Network may hold an Initial Parachain Offering and reward users for helping our auction with $KYL tokens.

## Future Plans

* The Kylin Network plans to become a parachain for the Polkadot network. We have some preparations for auction and we may design a possible community-wide IPO.
* We will hire 5-6 more devs in the next two months. Meanwhile, we will complete advisory support and complete the composition core team functions. Continuance of Substrate Builder's Program.
* In phase 1, our goal is to achieve all the basic functions of current data feeding and verification solutions, in addition we will begin to build our array of non-traditional data sourcing options for dapp builders to utilize and the functionality of a one-stop shop for data sourcing needs without manually calling each http.
* In phase 2, our goal is a mature data marketplace where Dapp builders and users can easily and effectively coordinate and manage their data needs for a very competitive fee.
* In phase 3, as the maturity, stability and reach of the data marketplace begins to create opportunities for analytics, we will engineer analytics tools to extract meaningful data findings, patterns, interpretations, while implementing low-cost commercialization functionalities for the public.
* Finally, our goal is to provide an essential open API and SDK from a high-level perspective with the above tools, fully powering the data economy on Polkadot.

## Additional Information :heavy_plus_sign:

* Website: https://kylin.network
* Twitter: https://twitter.com/Kylin_Network
* Medium: https://medium.com/@kylinNetwork
* Telegram: https://t.me/KylinOfficial
* Github: https://github.com/Kylin-Network
