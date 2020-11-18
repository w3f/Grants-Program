# OpenGrant Proposal

* Project: The name of the project **Bycoin Wallet**
* Proposer: GitHub username **MartinBTM**
* Payment Address:33uAtieKPQtkmteNg2itzfCFKPsLTguEP9

## Project Overview 📄

**Bycoin Wallet is a cross-chain Android and iOS wallet ,support BTC, ETH,LTC, BTM, USDT,USDC.**


Bytom blockchain aims to useassettokenization to disrupt financial systems.By atomizing and liquefyingassets,theycanbesecurelycreated and circulatefreelywithin Bytom andotherblockchains. To that end, Bytom has created many comprehensive products: Secured PoW Bytom mainchain, High speed DPoS Vapor sidechain and Crosschain gateway tech that supports multi-blockchain interactions.

Currently the DeFi Protocol - MOV has been running on Vapor sidechainand has rankedamongst theTop 10 DEX trading volumesacrossall DEXs.

Bycoin Wallet is a cross chain Mobile walletthatnot only supports Bytom's products, but also enables access to many blockchainsvia itscross-chaingateway.Bycoin wallet already supports BTC, ETH, BTM, USDT,USDC and LTC, and has successfully brought these assets into the DeFi sphere.

We will create a polkadot node and build a complete set of Polkadot account systems to supportthePolkadotnetworkanditsecosystemassets. At the same time, we will support the cross-chaininteroperabilityof Polkadotwiththe Bytom chain through gateways that willenable our userstoseamlesslyparticipate inthePolkadotecosystem.

Polkadot will build a big asset ecosystem. For wallets, various tokens can be integrated more conveniently. Currently, when we do cross-chain, we need to develop different gateways for each chain, and after implementing Polkadot Parachain, we can directly use the Token in the Polkadot ecology


Relevant statistics of Bycoin:

Number of active addresses: 58080

Number of transactions: 98970032

Number of transactions in 24 hours: 259236

[https://vapor.blockmeta.com/](https://vapor.blockmeta.com/)


## Team 👥

### Team members

**Leader**

Liu Zhipeng  Founder

Lang Yu  CEO

Zhu Yiqi  CTO

**Developer**

Li Kaiyuan Product  Manager

Yu Zhenbo Blockchain Engineer

Yang Sheng  Blockchain Engineer

Lin Zhiting Front-End Engineer

Qiao Yu Front-End Engineer

### Team Website

[https://bytom.io/en/team](https://bytom.io/en/team)

### Legal Structure

BYTOM FOUNDATION.LTD

22 NORTH  CANAL ROAD

02-00

SINGAPORE(048834)

Liu Zhipeng

### Team's experience

Our founder was one of the earliest bitcoiners in China.  After creaing a forum in 2010 that became very famous in China, he went on to create 8btc.com, the leading Blockchain media site in China.

Our technical team hasarichblockchainexperience.To date theyhavebuilttheBytom blockchain(POW consensus mainchain), Vapor(DPoS layer 2 sidechain solution), blockmeta blockchain explorer, Bycoin Mobile wallet,andByone chrome extension wallet.TheBytomtechnicalteam also leads a IEEE working group,and have been responsible for14blockchain patents.

### Team Code Repos

* [https://github.com/Bytom/bytom](https://github.com/Bytom/bytom)
* [https://github.com/Bytom/vapor](https://github.com/Bytom/vapor)

### Team LinkedIn Profiles

* [https://www.linkedin.com/in/lang-yu-b15604142/](https://www.linkedin.com/in/lang-yu-b15604142/)
* [https://www.linkedin.com/in/yiqi-zhu-56608963/](https://www.linkedin.com/in/yiqi-zhu-56608963/)

## Development Roadmap 🔩

### System Components

 ![](https://uploader.shimo.im/f/qVVwHDUd4jVcndLf.png!thumbnail)

Bycoin will build and operate Polkadot node, and at the same time encapsulate related functions into services for wallet use. Because Bycoin is a light wallet, some information needs to be stored through the Server, but key information such as keys will remain in the user’s mobile phone. We will open a cross-chain gateway to make Polkadot an anchored asset on Bytom, which will make it more convenient for ecological users to use and pave the way for subsequent planning.


### Overview

* Total Estimated Duration:3month
* Full-time equivalent (FTE): 3 FTE
* Total Costs: 0.7 BTC

### Milestone 1 —— Polkadot Integration

* Estimated Duration:6weeks
* Costs: 0.3 BTC
|Number|Deliverable|Specification|
|:----|:----|:----|
|1|Key Generation|Generate mnemonic words and private keys in the wallet according to relevant cryptographic algorithms while ensuring safe storage|
|2|Address Generation|    Create address through Public Key|
|3|Signature|Can sign Polkadot transfers<br>|
|4|Transfer|Realize Polkadot Asset Transfer on Server|
|5|Transaction inquiry and list|Server side realizes transaction storage and query|
|6|Transaction status syncing|Server syncs transaction status|
|7|Backup and restore|Backup and restore wallet|
|8|Balance Check|Check the balance of the current address|
|9|Unit test|Unit test all functions and APIs|
|10|Documents|Related instructions|
|11|UI and Front End|Related UI design and front-end display|

### Milestone 2 Example — Polkdot Crosschain

* Estimated Duration:6weeks
* Costs: 0.4 BTC
|Number|Deliverable|Specification|
|:----|:----|:----|
|1|Cross in|Transfer DOT to Bytom blockchain|
|2|Cross out|Transfer BTM to Polkadot|
|3|Transaction monitoring|Monitor crosschain transactions|
|4|cross chain transaction inquiry|Cross Chain transaction inquiry|
|5|cross chain address inquiry|Query user source address according to receiving address|
|6|Unit test|Unit tests of all functions and APIs|
|7|Document|Related instructions|
|8|UI and Front End|Related UI design and front-end display|

### Community engagement

The tutorials and Documentation that we provide will be published as articles in Bytom Twitter，Medium and other social media platforms with due mention about Web3 grant.


## Future Plans

Support DOT in DEX features of  Bycoin: the FlashSwap  ( market maker quotation trading), SuperTx protocol ( Automated market maker (AMM) trading protocol), MagnEx protocol (order book trading protocol)

Create a Parachain to realize the two-way cross-chain of assets on Polkadot and assets on Bytom Chain


## Additional Information ➕

Medium:[https://medium.com/bytomofficial](https://medium.com/bytomofficial)

Twitter:[https://medium.com/bytomofficial](https://medium.com/bytomofficial)

Download:[https://blockmeta.com/wallet/en/](https://blockmeta.com/wallet/en/)

