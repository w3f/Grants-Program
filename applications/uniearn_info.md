# Uniearn.info Proposal

- **Team Name:** Uniearn.info
- **Payment Address:** 0xa1fA4a9200f6A273a941c766021B8eE29e5D936e(USDC)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

### Overview

#### What is Uniearn.info 

Relying on data recommendation and analysis. Uniearn.info is a platform focusing on on-chain Auto copy trading (supporting NFT, Token, and any other protocols). First built on ETH, Polkadot.

The bottom layer of Uniearn.info is an infrastructure that enables any on-chain behavior(E.g: protocols behavior) to be quickly replicated at scale. The protocols and behaviors it can support are managed and modified by UniearnDAO.

Mission: Be the gateway to Web3 investment.

Aim to be the https://etoro.com of Web3. (etoro.com current cap: $10B)

#### Why Copy Trading

As the ecology on the chain becomes more and more prosperous, and the types of assets to trade become more and more diverse, gradually, many assets can only be traded or operated on decentralized exchanges, such as: NFT trading, DeFi deposit , Even Token can be traded on a centralized exchange, but with the uncontrollable fund security and opaque data of the centralized exchange, gradually everyone likes to use the decentralized exchange to complete it. At present, there is no trading platform in the decentralized trading ecosystem that supports automatic copy trading investment. In order to solve the problem of leading their users to invest, many KOLs use very primitive Excel tables to record the process and income settlement. Therefore, there is an urgent need for an exchange platform that supports on-chain copy and investment to meet the strong needs of users.


Especially after the emergence of ZK, the speed, performance, and handling fees of on-chain transactions have been optimized on a large scale, and these requirements have become more prominent.

#### Different from traditional copy trading?

1、Support more different decentralized assets (tokens, NFT, DeFi and any on-chain asset protocol.)

2、 Uniearn.info  is a decentralized platform, no license access required to any protocol

3、 Assets, Trades Data transparency

### Project Details

#### Architecture

![Uniearn Overview](https://res.kingdata.xyz/earn/uniearn_overview.jpg)

#### Components

**1、Real-time and Offline Data Warehouse Statistical Analysis Services**

The service accepts the data on the blockchain in real time and distributes the data to the offline data warehouse and the real-time data warehouse. The offline data warehouse mainly analyzes the transaction data of the account address, such as profitability, winning rate, etc., which is convenient for users to analyze an account address. Is it worth following.

**2、Copy Strategies Services**

According to the chains and protocols supported by the platform, users can establish their own strategies for copied accounts. For Example:
* Auto Copy Account's NFT Mint Transaction that Pice < 0.5 ETH
* Auto Copy Accounts's NFT Trade Transaction on Opensea
* Auto Copy Accounts's Token Swap Transaction on Uniswap
* Copy any other protocols behavior.....

>Continuous support for new strategies.....**

**3、Wallet Serves**

Because it is an automatic copy of the transaction, and multiple roles (KOLs, Users, Platforms, etc.) share commissions, the smart contract wallet is the best solution. Users can deposit and withdraw through the smart contract wallet, and the smart contract wallet Support multi-role management, users can authorize different accounts to manage different functions of the smart contract wallet.

**4、Data Security, Auditing Services**

In order to prevent the people being copied from doing evil, such as maliciously leading users to trade some illegal assets. We provide 3 layers of security measures, and this series of measures is still increasing. For example:

* Is it Rug Pull? (or other illegal contract)
* List of supported protocols(Only protocols in the whitelist can be executed)
* User-defined risk control parameters (such as gas upper limit, price upper limit, etc.)

**5、Commission Rule Services**

Calculate the commission rules before each Copy Trading Investment for different roles (KOL, Users, Platform etc.)

For each transaction, the platform will charge a fee. The charging standard is different for different trading assets. At the same time, it also supports Account to set a ratio. This ratio is that when the user copy him, he will extract from the user's profit after making a profit. 


**6、Signature Servies**

Use an account with a specific authorization role in a smart contract wallet that supports automatic transactions to sign new copy transactions.The service integrates the HSM.

**7、On-chain Data Packaging Services**

The service is a transit comprehensive service. According to the Copy Strategies. Packaging Copy Trading Data for on-chain. When everything is ready, the service will execute the following process every time it receives new transaction data:

1、Filter transactions that support copying based on real-time feeds and user's strategies.

2、Go through the security strategy for each new transaction.

3、Package new transaction data according to all platform rules.

4、Sign new transaction data

**8、Broadcast Service**

The broadcast service verifies the signature and broadcasts the transaction to the blockchain


### Technologies:
* Front UI (**Vue3**)
* Backend (**Java**)
* Smart Contract Wallet (**Solidity**)
* Data Warehouse (**Flink/Spark/Hadoop/Hive/Hologres/MaxCompute/Kafka/Python/Graph Computing**)
* Deploy (**K8s/Docker**)



### PoC/MVP

At present, all the required data cleaning of NFT(Mint, Trade) before copy trading has been launched, and the copy trading function is also undergoing final testing but not launch, and it will be launched ASAP. 

Similarly, the final development of Token-related data cleaning and copy trading services is also underway. Smart contracts are currently deployed on the Polygon test chain

Demo: [https://uniearn.info/](https://uniearn.info)

Smart Contract Wallet:
[WalletFactory](https://mumbai.polygonscan.com/address/0x382CEe673Ec0C60aF789dAeFE610fB4b2dBaADae)  and  [UniearnWalletModule](https://mumbai.polygonscan.com/address/0xd0f23f5f6Fbb3DAE74b9Bfd44750e49d0569885E)


### Ecosystem Fit

We found that in the centralized trading system: it is mainly divided into: spot, futures, and copy trading. At present, many centralized exchanges directly support copying trading on their own platforms. At present, there are also many centralized exchanges that have developed by copying trading. (For example: Bybit). In the Web2 world, etoro.com, which specializes in copy trading, is currently valued at $10B. Copy Trading and Investment is an essential part of the trading ecosystem.

However, currently decentralized Token, NFT, DeFi are becoming more and more prosperous. But so far there is no product that supports on-chain copy trading investment. The ecology on the chain has become increasingly prosperous. The current demand has been discovered and produced in large quantities. At the same time, along with ZK and other technologies, the performance bottleneck problem is solved. The demand for documentary trading platforms on the chain will increase day by day.

Uniearn.info is the first platform for on-chain copy trading and investment, which is very good at empowering the on-chain activity of ETH and Polkadot.

**The supply side of Uniearn.info is KOL, which solves their problem of conveniently leading community users to invest**

**The demand side of Uniearn.info is users, solving their investment problems more conveniently following professionals**

When this loop is established, it will greatly promote the development of the ecology and projects on the chain.

## Team :busts_in_silhouette:

### Team members

- Byron.eth: Founder
- Amelia.eth: Marketing Partner
- suski.eth:   Product Partner
- hejian991.eth:   Technology Partner

### Contact

- **Contact Name:** Li Jianghua
- **Contact Email:** lbyronlee@gmail.com
- **Website:** https://uniearn.info/

### Legal Structure

* **Registered Address:** Suite 102, Cannon Place, P.O. Box 712, North Sound Rd., George Town Grand Cayman, KY1-9006 Cayman Islands
* **Registered Legal Entity:** SmartData Ltd.

### Team's experience

**byron.eth**<br/>
Computer geek, blockchain senior evangelist. Focused on blockchain big data direction, with a keen sense of investment and analysis.<br/>
https://www.growingio.com/ [core developer]<br/>
https://www.36kr.com/ [core developer]

**Amelia.eth**</br>
Since 2018, she has provided in-depth marketing services for top-tier exchanges such as Binance, Bybit, FTX, OKX, Huobi, etc. She has incubated more than 10 global blockchain projects, including top projects in GameFi, DeFi, NFT platform, etc.

**suski.eth**</br>
A senior scientist in blockchain.</br>
jinse.com & Coinhub.org Product Partner</br>
product leader of 58.com</br>
Specialized in C2C & O2O platform products. Responsible for the growth of product DAU from 0 to 1000w+.

**hejian991.eth**</br>
12 years of experience in core technology development and team management
5 years of experience in blockchain industry, senior architect, contract engineer, big data architect. </br>
https://www.36kr.com/ [Big Data Team Leader]


### Team Code Repos

- https://github.com/Uniearn-info/uniearn-web (Web UI)
- https://github.com/Uniearn-info/uniearn-api-server (Backend Server)
- https://github.com/Uniearn-info/uniearn-contract-wallet (Smart Contract Wallet)
- https://github.com/Uniearn-info/uniearn-sign-server (Sign Server)
- https://github.com/Uniearn-info/uniearn-warehouse (Data Warehouse)
- https://github.com/Uniearn-info/uniearn-flink-eth (Real-time Feed Server)
- https://github.com/Uniearn-info/uniearn-trade-service (Copy Trading Server)

GitHub accounts of all team members.

- https://github.com/Byronlee
- https://github.com/hejian991
- https://github.com/IceMimosa
- https://github.com/scqsu
- https://github.com/xly9984760
- https://github.com/zlgu
- https://github.com/orgs/LLLBBear
- https://github.com/orgs/JaryZhen

### Team LinkedIn Profiles

- https://www.linkedin.com/in/jianghua-li-03669974/
- https://www.linkedin.com/in/jian-he-55366a128/
- https://www.linkedin.com/in/keen-shu-6a4496124/
- www.linkedin.com/in/amelia-lee-430226259

## Development Status :open_book:

Team: https://github.com/Uniearn-info

## Development Roadmap :nut_and_bolt:

**Overview**
- Total Estimated Duration: 6 Months
- Full-Time Equivalent (FTE): 7 FTE
-Total Costs: 60,000 USDC

### Milestone 1 - Improve the basic module

- **Estimated duration:** 4 month
- **FTE:**  6
- **Costs:** 40,000 USDC

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | Data Analysis | (ETH) All NFT/Token address profit statistical analysis (Data From Opensea/Uniswap) |
| 0b. | Smart Contract Wallet |The smart contract wallet can be safely and normally working.Prioritize support for some specific asset types.and then continue to expand |
| 0c. | Copy Trading MVP | Token/NFT copy trading MVP is online. Including data warehouse, frontend, backend, etc.|

### Milestone 2 - Achieve rapid growth

- **Estimated duration:** 2 month
- **FTE:**  4
- **Costs:** 20,000 USDC

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. |  Cooperate with KOL | NFT/ Support KOL community user management. Support KYC verification KOL account|
| 0b. | Expand the trading market |Expand more trading protocols (sushi, blur, LookShare, etc.) |
| 0c. | Safety | Strengthen the security, risk control, strategy, whitelist, model, etc. of the entire product.|


## Future Plans
- Support more public chains and protocols, such as support for decentralized derivatives Copy Trading/Invest

- The smart contract account type supports the fund model. In this way, fund managers can raise funds very well, and the use of funds is supervised by users.


## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?**

Web3 Foundation Website

**Related Files**

- Deck:  https://docsend.com/view/8j5pij78x5wi7j7t

Related Files


