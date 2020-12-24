# Open Grant Proposal

* **Project Name:** bitCheck Protocol
* **Team Name:** Shareblock
* **Payment Address:** 3PCvRgrCEADki6zqG4XMJrLkSu6L2PSbsT

## Project Overview :page_facing_up: 

### Overview

BitCheck is a decentralized finance (DeFi) protocol based on blockchain. Through bitCheck protocol, both sides of transaction can conveniently make decentralized guaranteed payment and solve the problem of mutual distrust between buyers and sellers while they do online transactions. Anybody can use this protocol to build a decentralized e-commerce and e-payment scenario, like OTC crypto-marketplace, Freelance marketplace, etc.

Now, bitCheck has been deployed on Ethereum/Tron and supports USDT/DAI/ETH/WBTC etc. 

Check the contract repo for Ethereum: https://github.com/bitcheck/contracts_ethereum

and contract repo for Tron: https://github.com/bitcheck/contracts_tron

**Reasons why we are interested in creating this project on Polkadot:**

BitCheck protocol has been developed for 5 months on Ethereum, we have met the following dificulties:

* High gas stop a lot of user to make payment on Ethereum.

* We have succeeded in using zero-knowledge to protect private information while making payment, such as sender, recipient and amount. But heavy data storage in Merkle-tree on-chain and Verifier smart contract increases the Gas fee even higher than 1M. We have tried some new algorithm but can not satisfy the users. Then we have to migrate to TRON for the moment and canceled privacy protection based on zk. 
  
  Anyhow, we still keep the zero-knowledge version and have opend contract and cient-size source code.  (Smart contract of zk version: https://github.com/bitcheck/contracts_zk_eth, source code of client-side: https://github.com/bitcheck/client-zk-eth)

* Our application is a decentralized payment tools, it can support almost all cryptocurrencies on different chains. Cross-chain is the most important tech for this project.

* In order to solving the difficulties above mentioned, we started to study other public chains except Ethereum, such as oasis, NEAR, Cosmos and Polkadot. Finally we found only Polkadot + Substrate can solved all the problems.

### Project Details 

As this protocol has been deployed on Ethereum, please check the DAPP url as following:
* Rinkeby on Ethereum: https://rinkeby.bitcheck.app
* Mainnet on Ethereum: https://eth.bitcheck.app
* Zero-knowledge mixer on Ethereum: https://zk.bitcheck.app

We will keep the similar UI and functions as Ethereum, but will re-build this project on Polkadot by substrate.

### Tech details

First, thanks tornado.cash, they have made a wonderful mixer on Ethereum with zero-knowledge to protect privacy. But the performance is still low.

We will use the following tech to improve the performance.

a- Using PLONK instead of GROTH16 to avoid trusted setup while updating circuits. This will improve the expansibility of DAPP.

b- The calculation of generation proof of tornado.cash's front-side is too heavy to run on web browsers or mobile wallets smoothly. This will be improved also.

Some functions above is realized on bitCheck Ethereum version, but we are sure it will have much better performace on parachain.

### Ecosystem Fit 
Bitcheck is a protocol, including core functions and components: depositing, withdrawal, claim, dispute settlement and DAO.

Any developers can call this protocol to build up various dApps with different economics model.

We have built dApp based on this protocol on Ethereum/Tron, using economics models(such as yield farming, etc.) to attract users.

We have not found similar projects in Polkadot ecosystem. The most similar project in Ethereum is Sablier, but Sablier is a installment tools, don't support privacy protection and complicated arbitration of dispute between parties. 


## Team :busts_in_silhouette:

### Team members
* Name of team leader: Jacky Gu
* Names of team members: LiXing, Luo Chuan, Guodong Ren

### Background:
* Jacky Gu - cn full name: Gu Qianfeng, had written code for Ripple, been CTO of BTC Media(Asia). Co-founder of ForcePool(f02438) in top 10 filecoin miners.
* LiXing - en name: Star Li, professional in zero-knowledge, 70% articles related zero-knowledge tech in Chinese is from him. blog: https://www.chainnews.com/u/923057071849.htm
* Luo Chuan - senior programmer in Alibaba Group and worked for Alipay
* Guodong Ren - senior production manager

### Contact
* **Contact Name:** Jacky Gu
* **Contact Email:** guqianfeng@gmail.com
* Website: https://bitcheck.net

### Legal Structure 
* **Registered Address:** Fl.8 Donghai Plaza, Shanghai, China
* **Registered Legal Entity:** Shareblock Tech Co.,Ltd.

### Team's experience

We have succeeded in using zero-knowledge to protect private information while making payment, such as sender, recipient and amount. But heavy data storage in Merkle-tree on-chain and Verifier smart contract increases the Gas fee even higher than 1M. 

We have tried some new algorithm but can not satisfy the users. Then we have to migrate to TRON for the moment and canceled privacy protection based on zk. Anyhow, we still keep the zero-knowledge version and have opend contract and cient-size source code. 

### Team Code Repos
* https://github.com/bitcheck

## Development Roadmap :nut_and_bolt: 

### Overview
* **Total Estimated Duration:** 2.5 months
* **Full-time equivalent (FTE):**  3 FTE
* **Total Costs:** 1.3 BTC

All Substrate modules figure:
![](https://tva1.sinaimg.cn/large/0081Kckwgy1gllzhod6ibj32010u045b.jpg)

We will finish all the modules and client-side app in 2.5 months.

The plan is: 

### Milestone 1 — Protocol Modules I
* **Estimated Duration:** 1 month
* **FTE:**  2 FTE
* **Costs:** 0.35 BTC

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 / MIT / Unlicense |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can (for example) spin up one of our Substrate nodes. Once the node is up, it will be possible to send test transactions that will show how the new functionality works. |
| 0c. | Testing Guide | The code will have unit-test coverage (min. 70%) to ensure functionality and robustness. In the guide we will describe how to run these tests | 
| 0d. | Article/Tutorial | We will write an article or tutorial that explains the work done as part of the grant. 
| 1. | Substrate module: Core module & Vault| Core Substrate modules, main functions: Deposit/withdraw/endorsement/Vault and interfaces  |  
| 2. | Substrate module: Economic modules | Substrate modules for economic model, main functions: token create and burn rules. Submodules: TokenManager, DividendPool, TimeLocker etc. |  
| 3. | Substrate chain | All the aboved modules will be built on the substrate chain |  

### Milestone 2 — Protocol Modules II
* **Estimated Duration:** 1 month
* **FTE:**  3 FTE
* **Costs:** 0.75 BTC

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 / MIT / Unlicense |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can (for example) spin up one of our Substrate nodes. Once the node is up, it will be possible to send test transactions that will show how the new functionality works. |
| 0c. | Testing Guide | The code will have unit-test coverage (min. 70%) to ensure functionality and robustness. In the guide we will describe how to run these tests | 
| 0d. | Article/Tutorial | We will write an article or tutorial that explains the work done as part of the grant. 
| 1. | zk-knowledge | Substrate ZK modules to support privacy protection. Submodules: Verifier/ProofGenerator etc. |  
| 2. | Dispute & arbitration | The off-chain arbitration system has been built up, this substrate module will connect this system to solve the dispute between parties |  
| 3. | Substrate module: DAO | As we are using Gnosis-safe on Ethereum bitCheck, We will build a DAO module similarly to support DAO. |  
| 4. | Substrate chain | All the aboved modules will be built on the substrate chain |  

### Milestone 3 — Client-side DAPP
* **Estimated Duration:** 0.5 month
* **FTE:**  2 FTE
* **Costs:** 0.2 BTC

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 / MIT / Unlicense |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can (for example) spin up one of our Substrate nodes. Once the node is up, it will be possible to send test transactions that will show how the new functionality works. |
| 0c. | Testing Guide | The code will have unit-test coverage (min. 70%) to ensure functionality and robustness. In the guide we will describe how to run these tests | 
| 0d. | Article/Tutorial | We will write an article or tutorial that explains the work done as part of the grant. 
| 1. | Mobile | Client side DAPP on mobile. React + Html5 |  
| 2. | Web DAPP | Client side DAPP on mobile. React + Html5 |  

## Future Plans
Payment is a basic application of blockchain, bitCheck protocol is the infrastructure of payment. We will build a huge payment ecosystem based on this protocol.

Here is the future plans:

* More cryptocurrencies supported, will be done in 2Q 2021.
* Cross-chain, will be done in 3Q 2021.
* More scenario, e-commerce marketplace, OTC crypto market, Freelancer market, etc. Will do two scenarios at least before 4Q 2021.
* A Stand-alone wallet, will be done in 4Q 2021.

## Additional Information :heavy_plus_sign: 

* Are there are any teams who have already contributed (financially) to the project?
  There is no other teams have contributed to this project yes.

* Have you applied for other grants so far?
  NO.
