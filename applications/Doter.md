# Open Grant Proposal

* **Project Name:** Doter (A browser extension wallet for Polkadot)
* **Team Name:** ChainBridge network
* **Payment Address:** 15Sw2Sk7srnsJw3XtwN5YXPauYyajAhLBr


## Project Overview

### Overview

With the launch of Polkadot Parachain, the browser extension wallet, as an infrastructure, will play an important role in the interaction between Polkadot and parachain. However, the application market currently lacks an experience-friendly Polkadot browser extension wallet, so Doter came into being.  

We are committed to building Doter into a truly user-centric browser extension wallet, attracting users to participate in the Polkadot ecosystem by providing a clear and concise UI experience and rich on-chain governance functions.  

Now, we can already [install Doter](https://chrome.google.com/webstore/detail/doter/abamjefkidngfegdjbmffdmbgjgpaobf) in the Google Chrome extension market.  

### Project Details 

#### Functional structure
![img](https://uploader.shimo.im/f/3kOOtlNIt4eMpF5A.png!thumbnail?accessToken=eyJhbGciOiJIUzI1NiIsImtpZCI6ImRlZmF1bHQiLCJ0eXAiOiJKV1QifQ.eyJleHAiOjE2MTc4NDMwNzMsImciOiJtNGtNTFpweGJuczYxQnFEIiwiaWF0IjoxNjE3ODQxMjczLCJ1Ijo1MjU3NjQ4MX0.-mNzWD92LrbP3ECC42XhCJrIxQqDVhepXo_KK3yXEgQ)  
#### Core components
The Doter consists of several core components：  

Account part: with the help of Doter, users can create account, retrieve account, and backup account conviently. Through these accounts, users can complete a series of core interactions with the Polkadot ecosystem.  

Transfer part: Users can easily select the transfer person, transfer amount and estimate the cost of miners. Friendly tips help users to operate easily.  

Query part: Doter provides many portals to facilitate users to query some common chain information, such as account balance, transfer records, community governance and so on.  

Setting part: with the help of this part, users can easily set the extension to make it closer to their habits.  

A lot of common community public packages are used to ensure the consistency and correctness of business logic in Doter, such as @polkadot/api, @polkadot/keyring, @polkadot/util etc. In the specific development process, we use a lot of encapsulated public packages based on web technology, so as to ensure a good experience in the browser.  
#### UI prototype

* Create wallet
![img](https://uploader.shimo.im/f/AvN1H55TIy37Mng1.png!thumbnail?accessToken=eyJhbGciOiJIUzI1NiIsImtpZCI6ImRlZmF1bHQiLCJ0eXAiOiJKV1QifQ.eyJleHAiOjE2MTc4NDMwNzMsImciOiJtNGtNTFpweGJuczYxQnFEIiwiaWF0IjoxNjE3ODQxMjczLCJ1Ijo1MjU3NjQ4MX0.-mNzWD92LrbP3ECC42XhCJrIxQqDVhepXo_KK3yXEgQ)  
* Import wallet  
![img](https://uploader.shimo.im/f/L2KdTUpEdaLUZFV7.png!thumbnail?accessToken=eyJhbGciOiJIUzI1NiIsImtpZCI6ImRlZmF1bHQiLCJ0eXAiOiJKV1QifQ.eyJleHAiOjE2MTc4NDMwNzMsImciOiJtNGtNTFpweGJuczYxQnFEIiwiaWF0IjoxNjE3ODQxMjczLCJ1Ijo1MjU3NjQ4MX0.-mNzWD92LrbP3ECC42XhCJrIxQqDVhepXo_KK3yXEgQ)  
* Transfer and receive
![img](https://uploader.shimo.im/f/ls2kbqxw9OkhNEbz.png!thumbnail?accessToken=eyJhbGciOiJIUzI1NiIsImtpZCI6ImRlZmF1bHQiLCJ0eXAiOiJKV1QifQ.eyJleHAiOjE2MTc4NDMwNzMsImciOiJtNGtNTFpweGJuczYxQnFEIiwiaWF0IjoxNjE3ODQxMjczLCJ1Ijo1MjU3NjQ4MX0.-mNzWD92LrbP3ECC42XhCJrIxQqDVhepXo_KK3yXEgQ)
* Settings
![img](https://uploader.shimo.im/f/P23QRARBLwBGQSS0.png!thumbnail?accessToken=eyJhbGciOiJIUzI1NiIsImtpZCI6ImRlZmF1bHQiLCJ0eXAiOiJKV1QifQ.eyJleHAiOjE2MTc4NDMwNzMsImciOiJtNGtNTFpweGJuczYxQnFEIiwiaWF0IjoxNjE3ODQxMjczLCJ1Ijo1MjU3NjQ4MX0.-mNzWD92LrbP3ECC42XhCJrIxQqDVhepXo_KK3yXEgQ)
* Manage
![img](https://uploader.shimo.im/f/1YOSQkFmPIg8tUGl.png!thumbnail?accessToken=eyJhbGciOiJIUzI1NiIsImtpZCI6ImRlZmF1bHQiLCJ0eXAiOiJKV1QifQ.eyJleHAiOjE2MTc4NDMwNzMsImciOiJtNGtNTFpweGJuczYxQnFEIiwiaWF0IjoxNjE3ODQxMjczLCJ1Ijo1MjU3NjQ4MX0.-mNzWD92LrbP3ECC42XhCJrIxQqDVhepXo_KK3yXEgQ)  
* Transaction records, etc.
![img](https://uploader.shimo.im/f/q1gFLzRqrYdAvnxO.png!thumbnail?accessToken=eyJhbGciOiJIUzI1NiIsImtpZCI6ImRlZmF1bHQiLCJ0eXAiOiJKV1QifQ.eyJleHAiOjE2MTc4NDMwNzMsImciOiJtNGtNTFpweGJuczYxQnFEIiwiaWF0IjoxNjE3ODQxMjczLCJ1Ijo1MjU3NjQ4MX0.-mNzWD92LrbP3ECC42XhCJrIxQqDVhepXo_KK3yXEgQ)
* Governance  
![img](https://uploader.shimo.im/f/ppL6L43PPaQuic1g.png!thumbnail?accessToken=eyJhbGciOiJIUzI1NiIsImtpZCI6ImRlZmF1bHQiLCJ0eXAiOiJKV1QifQ.eyJleHAiOjE2MTc4NDMwNzMsImciOiJtNGtNTFpweGJuczYxQnFEIiwiaWF0IjoxNjE3ODQxMjczLCJ1Ijo1MjU3NjQ4MX0.-mNzWD92LrbP3ECC42XhCJrIxQqDVhepXo_KK3yXEgQ)  
* Signature and injection
![img](https://uploader.shimo.im/f/lvYJi1DQ4ASFCcIF.png!thumbnail?accessToken=eyJhbGciOiJIUzI1NiIsImtpZCI6ImRlZmF1bHQiLCJ0eXAiOiJKV1QifQ.eyJleHAiOjE2MTc4NDMwNzMsImciOiJtNGtNTFpweGJuczYxQnFEIiwiaWF0IjoxNjE3ODQxMjczLCJ1Ijo1MjU3NjQ4MX0.-mNzWD92LrbP3ECC42XhCJrIxQqDVhepXo_KK3yXEgQ)
* Staking
![img](https://uploader.shimo.im/f/MDALPQL6MM0DjPcg.png!thumbnail?accessToken=eyJhbGciOiJIUzI1NiIsImtpZCI6ImRlZmF1bHQiLCJ0eXAiOiJKV1QifQ.eyJleHAiOjE2MTc4NDMwNzMsImciOiJtNGtNTFpweGJuczYxQnFEIiwiaWF0IjoxNjE3ODQxMjczLCJ1Ijo1MjU3NjQ4MX0.-mNzWD92LrbP3ECC42XhCJrIxQqDVhepXo_KK3yXEgQ)

### Ecosystem Fit 

Polkadot's browser extension wallet, the currently known competitor is Enzyme.  
* From the perspective of feature richness, the functional modules achieved by Doter's first milestone have exceeded Enzyme, and more functional modules that will serve the Polkadot ecology will be implemented in the plan.  
* From the perspective of UI experience, Doter is a real user-centric wallet. A clear and concise UI experience is more attractive to users, and Doter has achieved Chinese and English language switching, which has a wider potential user group.  
* From the perspective of github maintenance frequency, Enzyme has not been maintained for more than 1 year. In contrast, Doter has a clear development roadmap and the code base is constantly updated.  

Analogous to MetaMask, in the current industry environment, browser extension wallets are more convenient to interact with DApp than mobile wallets. Doter is positioned as a browser extension wallet and has a first-mover advantage in the product direction.  

At the same time, most of the current mobile wallets connected to Polkadot are not dedicated to the Polkadot ecosystem, and there is no in-depth development based on Polkadot. Doter focuses on the Polkadot ecosystem and enables more users to participate in the Polkadot ecosystem through customized and truly friendly interactive experience.   

## Team

### Team members
* Guan Yu
* Gao Jianli	

### Contact
* **Contact Name:** Gao Jianli
* **Contact Email:** dianluyuanli@foxmail.com
* **Website:** Doter is currently maintained on [Github](https://github.com/ChainBridgeNetworkTeam/Doter), no website has been created yet

### Legal Structure 
Doter is maintained by the [ChainBridgeNetworkTeam](https://github.com/ChainBridgeNetworkTeam), and no company entity has been created yet, The following is our communication information.  
* Mailing address: 504, Building 16, Lane 270, Maotai Road, Changning District, Shanghai, China  
* E-mail：dianluyuanli@foxmail.com, muskshi@foxmail.com  
* Twitter：ChainBridgeNetwork  
* WeChat Official Accounts：ChainBridgeNetwork  

### Team's experience
* Guan Yu  
He participated in Polkadot's official crowdfunding campaign in 2017 and has continued to be active in the Polkadot community ever since.
From July 2018 to the present, he has been serving as a product manager for Pinduoduo Inc.(listed on NASDAQ), responsible for building core business modules such as CPS. He has 3 years of experience in large-scale Internet companies, is familiar with the development and maintenance of large-scale products, and is good at leading the business from 0 to 1 and achieving rapid growth.  

* Gao Jianli  
He joined Pinduoduo Inc.（listed on NASDAQ）in 2018 and became a full-time front-end development engineer. Responsible for the maintenance of the website promotion page, maintenance and development of the weChat applet architecture Project deployment and launch, development of productivity tools.
He has three years of development experience, is familiar with project deployment and front-end technology stack, and is keen on Polkadot ecological technology trends.  

Personal Code Repos：https://github.com/dianluyuanli-wp

### Team Code Repos
* https://github.com/ChainBridgeNetworkTeam/Doter

### Team LinkedIn Profiles
Guan Yu：https://www.linkedin.com/in/yu-guan-482624155/  
Gao Jianli：https://www.linkedin.com/in/jianli-gao-6785a1140/

## Development Roadmap

### Overview
* Total Estimated Duration: 3 month
* Full-time equivalent (FTE): 120 
* Total Costs: $45,000

### Milestone
#### M1: Wallet basic module
* Estimated Duration: 1.5 month
* FTE: 60
* Costs: $22,500（2 contributors * 6 weeks * $1,875/week）

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | At this milestone, we have achieved the following modules:  <br />Create wallet <br />Import wallet  <br />Transfer and receive<br />Wallet settings  <br />Wallet management  <br />Transaction record  <br />Referendum on the chain  <br />Based on these basic modules, users can already easily manage assets and participate in the referendum on proposals |

#### M2：Injection and signature

* Estimated Duration: 0.5 month
* FTE: 20
* Costs: $7,500（2 contributors * 2 weeks * $1,875/week）

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Description | We will implement the account injection function of the extension. When users interact with any Dapp, they can use the account registered in the Doter to perform related operations |
| 1.  | Core component | Establish conmmunication mechanism between background.js, content.js and injectScript.js. |
| 2.  | Implementation | At the right time, We will call up the Auth page and the transaction signature page, and return the result to the Dapp page |

#### Governance and staking

* Estimated Duration: 1 month
* FTE: 40
* Costs: $15,000（2 contributors * 4 weeks * $1,875/week）

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Description | We will improve the democratic governance function of Doter so that users can easily conduct board elections and support community proposals. At the same time, we will build a more friendly staking module to make it easier for users to participate in staking |
| 1.  | Core component | With the official Polkadot API, we will be able to access the proposal module, council election module, staking module, and provide a good user experience |

## Community engagement
This is a tutorial posted on medium：https://chainbridgenetwork.medium.com/polkadots-browser-extension-wallet-doter-ac8cd91a5bf3

## Future Plans

Doter’s development team is ChainBridgeNetworkTeam. As the name suggests, our long-term vision is to be a bridge between different blockchains. We will use trust-free cross-chain asset custody and on-chain mapping to enable digital assets on different chains to be interoperable.  

Doter is our first product. We believe that with the launch of the parachain, Doter will act as an important interaction bridge in the Polkadot ecosystem. After completing the development of 3 milestones, we will design Doter version 2.0. In version 2.0, users can easily manage private digital assets without memorizing mnemonic words. This will be achieved through an innovative technology. We believe in version 2.0 Doter will greatly reduce the threshold for users to use wallets, making Doter a real bridge between Polkadot and ordinary users.  

## Additional Information
ChainBridgeNetworkTeam has just been established for two months, but we have completed the first milestone of Doter, and have designed the second and third milestones. In the next two months, we will deliver all pre-designed functional modules.  

So far, we have developed at our own expense, but in order to have sufficient funds to support the realization of our long-term vision, we will try to obtain the support of investment institutions.
