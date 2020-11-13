# Open Grant Proposal

> This document is referenced in the terms and conditions and therefore needs to contain all the required information. Don't remove any of the mandatory parts presented in bold letters or as headlines! See the [Open Grants Program Process](https://github.com/w3f/Open-Grants-Program/blob/master/README_2.md) on how to submit a proposal.

* **Project:** Konomi
* **Proposer:** debbiecho
* **Payment Address:** BTC payment address. 16eX23C1T4Nj4D8ceaBTWqHBf6cYM4o8fw

*The above combination of your GitHub account and payment address will be your unique identifier during the program. Please keep them safe.*

## Project Overview :page_facing_up: 

### Overview

Konomi is a decentralised liquidity and money market protocol for cross-chain crypto assets. Using Substrate as the development framework, the network aims to provide money markets for assets in the Polkadot ecosystem. Users could manage their crypto holding positions, trade assets and earn interest through the protocol. Konomi also issues its native network token in order to kick start liquidity and decentralised governance. We will first set up a separate testnet for the blockchain, and then participate in Kusama parachain auction and subsequently Polkadot parachain auction. 

We believe that Polkadot will become the default base layer protocol for decentralised applications and crypto assets. Also, due to the design of parachain and parathread auction, 
there is opportunity to be captured in designing new token economics as compared to the existing products on Ethereum. 

### Project Details 
The project aims to provide the decentralised money market protocol for other assets issued on Polkadot parachains. We first developed the decentralised liquidity pool to support cross-chain asset swaps and later on for LP tokens. We are in the process of building a money market protocol. 

Technology Stack: 
Node: Substrate, (Cumulus)
Chain metric: Prometheus and Grafana
Frontend: React with Polkadot-js
CI: Travis

**![](https://lh5.googleusercontent.com/YXzy3KlQOkeNWw7ifXB79ZHCbEvXaDD6RzoZfm2Tf-4DqSfTNzjtmvZMkwmjufmQ9_h3TlJa4AlV1i5MQXSWIgbWhj-8DukbfhJGcl_ZgT_EulnQHBUjVG6xVUBmGESsuSqhFvTN)**

### Ecosystem Fit 

There are several DeFi projects in the ecosystem at the moment but we believe that our value proposition is unique and also complementing the existing products in the market. We are focused on building the decentralised money market, which could be supporting the stablecoin infrastructure that Acala is building and the staking asset liquidity products that Bifrost is building. 

## Team :busts_in_silhouette:

### Team members
* Name of team leader: Ariel Ho 
* Names of team members: 	Shengmu Liu, John Wu, Yuqing Zhao 

### Team Website	
* http://konomi.network/

### Legal Structure 
KONOMI FOUNDATION LTD. 

### Team's experience

Shengmu has more than 5 years entrepreneur experience in tech startups. Before Konomi Network, he started his career in big data analytics at Shopee, a leading ecommerce platform in SEA. He then moved to a healthcare startup as the lead software engineer where he designed software product for million-dollar worth projects. He has deep enthusiasm in machine learning and also a veteran in tech project management. His publication was included in the IEEE https://ieeexplore.ieee.org/document/7476392

Ariel Ho has 7 years entrepreneur experience in tech startups. Before Konomi Network, she founded High Mall Indoor Navigation, an indoor navigation solution provider based on iBeacon Tech, served for Singapore largest chain supermarket NTUC Fairprice. She was the early investor of crypto since 2017. Her expertise in fundraising, strategy management and leadership is valuable to this project. 

Jayden has 8 years entrepreneur experience in Tech startups. Before Konomi Network, he has founded multiple tech startups including Mileslife Singapore and Wecharge.He was the country manager of OFO Singapore. Led the project from launch phase to mature phase. OFO obtain highest ridership in Singapore under his leadership. He was an early investor of crypto and Bitcoin mining since 2015

Yuqing has more than 7 years experience in social media advertising and community building. Before Konomi Network, she started her career as a commercial broker in physical commodity trading sectors. Besides, she is one of the top chinese KOL in Singapore with over 300K+ organic followers on instagram. As a sole proprietor, built relationship with and represented over 100 corporate partners in their online advertising campaigns, including Huawei, Casio, Shopee, Grab, Lazada, Carlsberg and etc. Her expertise in communication and community building is valuable to this project.


John is a Substrate developer, Technical ambassador of Polkadot & Substrate. Before Konomi, he was the CTO of C-dot and blockchain tech lead of ARPA project. 


### Team Code Repos
* https://github.com/konomi-network/konomi-node
It is currently a private repo, please contact us for access. 

### Team LinkedIn Profiles
* http://linkedin.com/in/ariel-ho-8b5aa01ba
* https://www.linkedin.com/in/yuqing-zhao-1201b6120/
* https://www.linkedin.com/in/john-wu-72960586/


## Development Roadmap :nut_and_bolt: 


### Overview
* **Total Estimated Duration:** 2 months 
* **Full-time equivalent (FTE):**  3 
* **Total Costs:** 2 BTC 

### Milestone 1 — Implement Decentralised Liquidity Protocol on Testnet
* **Estimated Duration:** 0.5 month
* **FTE:**  2
* **Costs:** 0.5 BTC

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 / MIT / Unlicense |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can (for example) spin up one of our Substrate nodes. Once the node is up, it will be possible to send test transactions that will show how the new functionality works. |
| 0c. | Testing Guide | The code will have proper unit-test coverage (e.g. 90%) to ensure functionality and robustness. In the guide we will describe how to run these tests | 
| 1. | Substrate module: Automated liquidity pool | Created a 50/50 basic pair AMM on Substrate. Core smart contracts: pair pool and pair pool factory. Auxiliary smart contracts to interact with the core: router and helper libraries  |  
| 2. | Substrate module: Konomi Testnet | We will launch testnet on Substrate and set up nodes to simulate actual network participation |  


### Milestone 2 Decentralised Money Market Module 
* **Estimated Duration:** 1 month
* **FTE:**  3
* **Costs:** 1.5 BTC

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 / MIT / Unlicense |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can (for example) spin up one of our Substrate nodes. Once the node is up, it will be possible to send test transactions that will show how the new functionality works. |
| 1a. | Substrate Module: Decentralised money market | Lending/borrowing pool of 2 assets and user deposit/debut tracking; lending/borrowing pool of multi-assets; liquidation functionality with sudo price oracle |
| 2a. | Platform token issuance | Implement token incentives for users contributing to the network |



### Community engagement

https://konomi-network.medium.com/
We have been documenting the project progress and also our understanding of the DOT ecosystem in our blog. 

## Future Plans
Konomi aims to bridge the gap between crypto and fiat world by offering an easy to use, high performance product for users to trade and manage their crypto assets. In the mid term, we plan to implement cross-chain liquidity aggregation protocols since the current products could not execute trade orders across parachains simultaneously. In the long term, acquiring fiat-based customers and develop efficient cross-chain technology are the two strategic focus. In terms of fiat to crypto gateways, there have been many licensed service providers but it is yet to achieve mainstream adoption. With regulated players eying in this space, there will be more users and more demand for DeFi products. Furthermore, we believe that cross-chain infrastructure is going to be an important building block for crypto industry going forward. Current solutions for BTC and other assets to support Ethereum are either centralised or slow in speed.

## Additional Information :heavy_plus_sign: 


Possible additional information to include:
https://medium.com/konomi

