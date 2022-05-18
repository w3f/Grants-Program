# W3F Grant Proposal


* **Project Name:** Web3Go
* **Team Name:** Web3Go
* **Payment Address:** 0xD57e28773c92E6fB9D9Fb164889886cd360074BE(USDT)
* **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2


## Project Overview :page_facing_up:

### Overview

Web3Go is an open data platform that focuses on the formatting, visualization, sharing, and collaborative analysis of the on-chain data generated in the Polkadot ecosystem.

Due to the explosion of Defi, NFT, and metaverse, there is massive amount of data generated on the blockchain every day, which is very important information for the media companies, investment institutions, and blockchain participants. However, it is difficult for non-professionals to obtain and understand these data. Beyond all doubt, data is valuable. Our project is to build a data platform for the Polkadot ecosystem and provide a series of toolsets so that everyone can easily create visualized results of data analysis. We are able to track smart contracts on-chain, and various parameters like stakings and CDPs of different Defi protocols, NFT circulation, and cross-chain assets on Polkadot ecosystem, and make these data formatted and persisted. With the help of the smart contract on Substrate parachain,   non-professionals can publish their data needs on the platform and use rewards to motivate professionals to help them perform data analysis; for professionals, they can publish their own professional analysis for everyone to use paid or for free. In the second situation,  they can get the reputation from the community.  In the end, we broke the monopoly of some existing companies on data analysis and interpretation, so that everyone can truly enjoy the true value behind blockchain data.



We believe that with the development of Polkadot ecosystem, more on-chain data will be generated and the value behind the data is giant. Currently, there is still a gap between professional users and common participants in terms of the technical know-how of data. Using the infrastructure and tools provided by Web3Go, everyone can easily create, publish and share their point of view in the form of nice charts  based on the real data which has been formatted from the blockchain.

The interpretation and analysis of data should not be in the hands of certain centralized professionals, but rather all users should have a say and benefit from it. Our vision is to build a Polkadot-based data analytics infrastructure, toolset, and incentive system where everyone can publish and be rewarded for related data tasks. Finally, an open and free data platform will be built to surface the signals of what is happening in the Polkadot system.



### Project Details

#### Architecture

![](https://github.com/Moehringen/Storage/blob/main/Polka-Analytics.png)


#### Components
1.  **Indexer:** an indexer of blockchain is used to extracts the on-chain data and saves the data in the database in formatted manner. Since the Polkadot network is composed of relay chain and parachains, each parachain can define its own Event or call, so each indexer of the parachain must be adapt to its metadata. So there will be multiple instances of the indexer of Polkadot.  


2. **Data Board:** 
data board is the visualization result of data analysis created by analysts or community member, which can display the analyzed and customized  information on the Polkadot ecosystem such as a token transaction or holders,  an NFT transfer, and history of the transaction, the statistics of a Defi protocol, or some special event like parachain auction, and governance. 


3. **Contract on Substrate:**
We will use smart contracts on the Substrate nodes to demand, publish, share and reward the data activities within Web3Go. There are primarily two kinds of players involved in the smart contract: data demander, who has a need of professional, visualized results of data analysis regarding events that happened on the blockchain. Data demanders will publish the needs through the contract with bounty to incentive whoever fulfill these needs; on the other hand, data analyst, who has professional knowledge and skills can take on data tasks, or they can publish and share any data board they have created to the community in a paid or free manner. This smart contract will incentive more people to contribute to the data activities in the ecosystem since those who create more valuable data boards will gain a higher reputation.




4. **Query Module:**  The data query module provides a user interface to the data analyst to generate data boards. Because data stored on the blockchain is in the form of key-value pair, it is very hard to use and analyze the on-chain data directly. With the UI provided by the query module and along with the chart display module, the analyst can take advantage of the formatted data and visualize it in an automatic and customizable manner. The data will also be automatically synchronized with the blockchain, so updates will be reflected on the data board in real-time.
   

5. **Chart Display Module:** The chart display module is used to visualize the result of data analysis and is the main component of the data board. The chart display module can provide different charts like bar charts, pie charts, scatter plot, and so on. 


6. **Subscription Module:** For each created data board,  the data demander of this data board can subscribe to the notification signaled from this board.  The notification can be  triggered by a big transaction of a token or an APR vary of a Defi protocol.  This module provides the functional for the subscription.  
  

7. **Label/Tag Module:** this module will give the address different labels basing on its historical activities on the blockchain, e.g. token transfer,  Defi participation, etc.  It is survied that at least more than 50% of the total addresses on Blockchain are inactive. So this module will filter the active address according to its activities such as "Big Whale", "High Activity" and so on.  The labeled addresses are a very good dataset that can be monitored to signal what is happening on the blockchain. 



8.  **Data Mining Module:** data mining module is used to look for regulations and patterns in large batches of data come from blockchain.  data mining is widely used in some traditional industries like Retail, manufacturing, financial and financial insurance, but we believe that this technology will benefit the blockchain industry as well. The module will dig through historical data to discover hidden connections and predict future trends in the specific area of the blockchain, like token price prediction,  Defi earns prediction, etc.  


9.  **Community Module:**  The community module is a public place where data activities participants can communicate. For example, data demanders can publish their demands, the data analysts can take on the tasks or share their own data boards, and the most welcome data boards will be listed here.





#### Technologies:
* [Subquery](https://subquery.network/) is a blockchain indexer for Polkadot, Kusama, and other parachains. We will rebuild and customized this framework to fulfill our requirements.
* Node.js
* Docker
* Substrate
* Rust
* Machine Learning
* Python

#### PoC:
A [web application](https://web3go.xyz/) with three data boards has been built as a  proof of concept. We have used the architecture mentioned above to index three kinds of tokens: LIT, ATA, and POLS. With nice charts and tables, the transaction, holders are visualized and some addresses have been labeled according to the labeling rules; the second data board lists the crowdloan event on Kusama networks. This data board lists the contribution and participants for each project which attends the crowdloan event; the third data board tracks the CDP(collator debt position) status of Karura lending system and provides the real-time status of each account.



### Ecosystem Fit

We have found several successful data analysis projects in the Ethereum ecosystem.  Each project focuses on a specific area: Defi tracking, token tracking, wallet profile tracking.  But currently, there is no data analysis project designed for Polkadot.  Due to the unique structure of the Polkadot network, there will be more interesting data generated in the network, so we believe the whole community needs a data analysis tool as soon as possible. 

Similar projects
* https://www.nansen.ai/
* https://duneanalytics.com/
* https://0xtracker.com/
* https://debank.com/
  

What makes us different is,as a part of Web 3 community and Polkadot ecosystem:


* The first project focuses on the data analysis for Polkadot world
* Designed to let everyone can benefit from the value of data in the Polkadot world and make the valuable data public to everyone, not in the hand of one centralized project 
* An incentive mechanism that gets everyone involved and participates in the data activities.
* A comprehensive analysis not only focuses on one area but will include all data like a cross-chain asset, governance,  auction, Defi, staking, and token.

## Team :busts_in_silhouette:

### Team members

* Hao Ding: VP of Litentry. MSc of University Stuttgart.
* Yifei Wu: Substrate lead of Litentry. PhD of Tokyo University.
* Han Zhao: Substrate core dev of litentry. MSc of University Stuttgart.
* Minqi Wang: Backend and contract developer. Master of University Columbia.
* Yunjian Bian: Software Architect of Litentry. Bachelor of University Suzhou.

### Contact

* **Contact Name:** Hao Ding
* **Contact Email:** hao.ding@litentry.com
* **Website:** https://web3go.xyz

### Legal Structure

* **Registered Address:** T5-1023, Europe and America Finance City, Yuhang district, Hangzhou, Zhejiang of China
* **Registered Legal Entity:** Hangzhou Liteng Network Technology Co., Ltd.

### Team's experience

All team members of Web3Go are from Litentry. Litentry is a DID (distributed identity) solution provider in the Polkadot ecosystem. Litentry has been granted a grant from the Web3 Foundation.

Web3Go team members have strong engineering background: Han Zhao, Yifei Wu and Minqi Wang are responsible for the development of Litentry's parachain (https://github.com/litentry/litentry-parachain), Hao ding and Yunjian Bian are responsible for the on-chain data indexing And front-end and back-end development. (https://github.com/litentry/data-analysis)

### Team Code Repos

* https://github.com/web3go-xyz Web3Go official repository
* https://github.com/web3go-xyz/web3go  Backend and UI of web3go
* https://github.com/web3go-xyz/Indexer Indexer of Moonriver staking



* https://github.com/h4n0 Han Zhao
* https://github.com/bianyunjian Yunjian Bian
* https://github.com/Satoshi-Kusumoto Yifei Wu
* https://github.com/wangminqi Minqi Wang
* https://github.com/Moehringen Hao Ding

### Team LinkedIn Profiles (if available)

* https://www.linkedin.com/in/zhaohan6/ Han Zhao
* https://www.linkedin.com/in/%E4%BA%91%E5%81%A5-%E5%8D%9E-5a2b9112a/ Yunjian Bian
* https://www.linkedin.com/in/john-wu-72960586/ Yifei Wu
* https://www.linkedin.com/in/minqi-wang-53b5b19b/ Minqi Wang
* https://www.linkedin.com/in/hao-ding-msc-pmp-64411193/ Hao Ding

## Development Status :open_book:

* [WebSite](https://www.web3go.xyz): visit this url:   https://www.web3go.xyz can take a look at the current developement progress of  the website. 
* [Data board-Karura CDP](https://web3go.xyz/#/CDPProfiler): This data board tracks and visualizes the real-time CDP information of Karura, and provides the historical analytics and real-time CDP status of each participant. 
* [Data board-KSM crowdloan](https://web3go.xyz/#/ParaChainProfiler): This data board tracks and visualizes the real-time Kusama crowdloan on each lease, including the total amount of each project, address, and amount of each contribution.
* [Data board-ERC20 Token](http://106.52.138.224:8080/#/WalletProfiler?data=%7B%22type%22%3A%22ERC20%22,%22name%22%3A%22LIT%20Analysis%22,%22description%22%3A%22Sample%20Analysis%20For%20LIT%20To%20View%20The%20Details%20And%20Trends%22,%22created%22%3A%22Litentry%20Offical%20Team%22,%22data%22%3A%7B%22contractAddress%22%3A%220xb59490ab09a0f526cc7305822ac65f2ab12f9723%22%7D%7D): This data board tracks and visualizes the real-time and historical transactions, amounts,  and addresses of ERC20 tokens including LIT, ATA, and POLS with analysis. 
* [UI Mock-ups](https://drive.google.com/drive/folders/1NIEB0Tbj7tIcf7Q2CRzuMwbkU95ADnH4?usp=sharing): here saved the UI design and mock-up of Web3Go, it is keep updating.
* [Semi-automatic chart generation](https://web3go.xyz/#/CustomQuery?editSupport=true): This module is to let users can generate visualized charts automatically by simply writing SQL language based on our existing indexed and formatted data. Currently the supported chart is bar chart, line chart, and pie chart. The word "semi-automatic" means that the user has to write SQL to generate the chart.


## Development Roadmap :nut_and_bolt:


### Overview

* **Total Estimated Duration:** 3 months
* **Full-Time Equivalent (FTE):**  2 FTE
* **Total Costs:** 40,000 USD

### Milestone 1  — Website, customizied indexer,Semi-automatic chart generation and databoards

* **Estimated duration:** 2 month
* **FTE:**  2
* **Costs:** 25,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can use the existing data board, and use the UI to create/publish their own customized data board|
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an **article**/workshop that explains the concept and vision of Web3Go
| 1.a | Indexer| We will develop our customized indexer on the top of Subquery to make it more compatible to our scenario in below two areas: 1. Handle data/event and extract the result to external storage: currently the indexed data is saved in the built-in Postgres database due to the design of the framework of Subquery.  And we have to retrieve the data from Postgres to our database again, it is very inefficient.  We are going to build two new modules: the post-process module and the logic handling module, which can directly save the data to our database directly according to our logic module. in this way,  the data and logic part can be decoupled.  | 
| 1.b | Indexer| 2. Enable HTTP/HTTPS module to retrieve external data when fetching block: currently, the framework does not support retrieving data externally during fetching the block.  But this case happens from time to time: retrieving the NFT metadata from IPFS can be one example.  We will implement this module on top of the Subqeruy existing framework. |  
| 2. | UI Module:general WebApp| We will continue on the development of the web application to implement: user sign-in/sign-up, categorization of data board,  social interactions functionality including like and share,  subscription of a specific event comes from a specific data board,  UI redesign and refinement, documentation and tutorial. |  
| 3. | 3 more Data Boards:| We will create 3 more data boards of other projects in Polkadot ecosystem that have already won the bid in the Kusama auction(or Polkadot auction if it happens), so we will have more valuable data boards on our platform and user collect their board basing on our data and tools. Three projects are planned to index: [RMRK](https://www.rmrk.app/)(NFT circulation), [Moonriver](https://moonbeam.network/networks/moonriver/)(stake tracking) and [Parallel](https://parallel.fi/index.html)(Defi tracking).  (The projects might be changed but the number of data boards is fixed)|  
| 4. | UI Module: semi-automatic chart generation| This part is the core value of Web3Go, which can help users generate charts based on existing data. We will optimize the UI and make the chart more charming and easy to use. | 
| 5. | Support more Kusama Token:| We will support the token analysis for KSM, MOVR, KAR, kUSD, Heiko instead of ERC20 token.|   



### Milestone 2  — More databoards, fully-automatic chart generation

* **Estimated Duration:** 1 month
* **FTE:**  2
* **Costs:** 15,000 USD

 Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can use the existing data board, and use the UI to create/publish their own customized data board|
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an **article**/workshop that explains the concept and vision of Web3Go
| 1. | UI Module:support more charts in semi-automatic chart generation | we will continue optimizing the automatic generation of charts, to make it support more kinds of charts like scatter charts, area charts, and tables.|  
| 2. | UI Module:fully-automatic chart generation| We will enhance the user interaction of generating charts, provide the "drag and create" module for the user to generate charts. In this case, the user can generate charts with the same complexity as writing SQL can do. This functionality will provide a more easy way for the user to generate complicated charts who does not know program with SQL.|  
| 3. |UI and backend Module: labling system | With more data we have accumulated, we will create a new UI to present the labeled address. we will give the address different labels basing on its historical activities on the blockchain, e.g. cross-chain transfer,  Karura  CDP participation, etc. The labeled addresses are a very good dataset that can be monitored to signal what is happening on the blockchain. 
| 4. |Support GraphQL in semi-automatic chart generation| As GraphQL is getting more popular, so in the UI of semi-automatic chart generation, we will provide the option of GraphQL as the query language.


## Future Plans

* As our vision is to let "everyone enjoy the value behind the blockchain data", we will design the token economics to let more people involved in the whole data board activities. The rough idea is to design three kinds of roles: data demander, data analyst, and data validator, and introduce the token incentive to incentive the community to create more customized and interesting data boards, and this will be done through the parachain system. We have already started doing the research on the token economics design, and after this grant is finished, parachain development will be started. 
* As our team is a sub-team of Litentry, so we have a strong development team , operations team, a 60k+ community, and have a good relationship with most of the projects in the Polkadot ecosystem.  All of the above has provided us a strong foundation of success. we want to be the best data analysis project in the Polkadot ecosystem, and even collect more data across other public chains in the future. 


## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?**  

Web3 Foundation Website and  personal recommendation.


