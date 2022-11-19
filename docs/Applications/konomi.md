# Open Grant Proposal

> This document is referenced in the terms and conditions and therefore needs to contain all the required information. Don't remove any of the mandatory parts presented in bold letters or as headlines! See the [Open Grants Program Process](https://github.com/w3f/Open-Grants-Program/blob/master/README_2.md) on how to submit a proposal.

* **Project:** Konomi
* **Proposer:** debbiecho
* **Payment Address:** BTC payment address. 16eX23C1T4Nj4D8ceaBTWqHBf6cYM4o8fw

*The above combination of your GitHub account and payment address will be your unique identifier during the program. Please keep them safe.*

## Project Overview :page_facing_up: 

### Overview

Konomi is a decentralised liquidity and money market protocol for cross-chain crypto assets. Using Substrate as the development framework, the network aims to provide money markets for assets in the Polkadot ecosystem. Users could borrow and lend assets, trade and access liquidity products for DOTs through the protocol. Konomi also issues its native network token in order to kick start liquidity and decentralised governance for its chain. We will first set up a standalone testnet, and then participate in Kusama parachain auction and subsequently Polkadot parachain auction.

The motivation behind setting up the project is that there is currently limited live products for the lending infrastructure on Polkadot and that it is an important part for the ecosystem as a whole. Also, we think that the parachain design offered more room and better infrastructure to develop DeFi applications — it is not restricted to accepting ETH as the default currency. 

We believe that Polkadot will become the default base layer protocol for decentralised applications and crypto assets. Also, due to the design of parachain and parathread auction, there is opportunity to be captured in designing new token economics as compared to the existing products on Ethereum.

### Project Details 
The project aims to provide the decentralised money market protocol for other assets issued on Polkadot parachains. The protocol is pool-based and it would support assets on parachains when the network is live. Users could deposit asset to the lending pool and earn interest based on the demand side on the platform. Similarly, the protocol also supports over-collateralised debt positions for users that want to borrow assets. Price data will be ultimately acquired through using off-chain workers to ensure that the lending pool is always secure from liquidation risks.

This is the system work-flow diagram. 
**![](https://lh5.googleusercontent.com/M9QuAjmdo0lBj8Nx2D5BHS_Qtjga_2NCe7V_ERUFTzyesPFixDIVFhhcQpB6FyA2UceKO0yP4pxI4iBC2GGOmHvBezi9J5XcHCLSsySfprLfFutLaVV7C8Ku0NJGzhjfqYfvtB56)**

Technology Stack: 
Node: Substrate, (Cumulus)
Chain metric: Prometheus and Grafana
Frontend: React with Polkadot-js
CI: Travis

#### Components
- Asset Module: Multi-asset to be used in AMM and Lending Module.
- AMM Module: Uniswap like 50-50 swap pools that user can swap, add liquidity and remove liquidity.
- Pool Lending Module: This is the key and unique module Konomi is going to build in this grant application. This module enables users to get access to a varieties of supported pools. They may deposit collaterals into these pools and gain lending interest. If they have enough collaterals, they may also borrow  other assets with some interest fees. Price feeds (by off-chain worker) will ensure that the debts are in healthy condition, otherwise a liquidation process is triggered.
- Governance Module: DAO to change parameters of the above modules.
- Price Oracle Module: Price feed of the supported assets to keep the system in a healthy status.

#### Details of the lending module
The lending module has the following public extrinsic api for user
```rust
fn supply(origin, asset_id: T::AssetId, amount: T::Balance) -> Result;

// withdraw supplied assets
fn withdraw(origin, asset_id: T::AssetId, amount: T::Balance) -> Result;

fn borrow(origin, asset_id: T::AssetId, amount: T::Balance) -> Result;

 //repay borrowed assets with interest
fn repay(origin, asset_id: T::AssetId, amount: T::Balance) -> Result;
```
And also another public extrinsic api for arbitrager
```rust
// repay for target_user pay_asset_amount of pay_asset_id asset, get get_asset_id asset with bonus.
fn liquidate(origin, target_user: T::AccountId, pay_asset_id: T::AssetId, get_asset_id: T::AssetId, pay_asset_amount: T::Balance) -> Result;
```
The system has the following global parameters
```
liquidation_threshold: When the user's effective collateral rate is below this, arbitrager may trigger liquidation process

supply_threshold: When user borrow some asset, he/she need to keep the collateral rate above this. 
```

The key of the lending module are a set of pools (mapping from asset id). Each pool has the following fields:
```
enabled: a boolean to show if this pool (=asset) is supported. This will be later determined by governance.

can_be_collateral: a boolean to show if this asset can be used as collateral.

collateral_factor: when used as collateral, highly volatile asset may be treated less than it's current market value. This is the factor.

asset: asset of the pool

supply: total user supply of the pool (that can be borrowed)

debt: total user debt of the pool (that is borrowed)
factor

liquidation_bonus: when liquidating this pool, the bonus of arbitrager can earn.

total_supply_index: used to calculate accumulated interest. See below.

total_debt_index: used to calculate accumulated interest. See below.

last_update_time: timestamp of last update to the pool.
```

Whenever an asset is supplied or borrowed, its supply and debt index will be updated according to the cumulated interest since the last supply or borrow action.
```
total_supply_index = total_supply_index * (1+supply_interest_rate) * time_passed;
total_debt_index = total_debt_index * (1+debt_interest_rate) * time_passed;
```

To track user's supply and debt considering interest, we use the following fields
```
amount: amount of the supply/debt

index: used to calculate user's accumulated interest. See below.

as_collateral: (only for supply) if the user use this asset as collateral
```
When user takes an action (supply, borrow, withdraw or repay), first calculate interest:
```
amount = amount * total_supply_index (or total_debt_index) / index
```
Then its index will be updated to the current total_supply_index or total_debt_index.

To calculate interest, we use a simple linear modal with the following parameters
```
borrow_rate_zero, borrow_rate_optimal, borrow_rate_illiquid, utilization_optimal
```
Equations:
```
utilization_ratio = total_borrow / total_deposit
borrow_rate_net1 = borrow_rate_optimal - borrow_rate_zero
borrow_rate_net2 = borrow_rate_illiquid - borrow_rate_optimal
if utilization_ratio <= utilization_optimal
    borrowRate = utilization_ratio / utilization_optimal * borrow_rate_net1 + borrow_rate_zero
else
    borrowRate = (utilization_ratio - utilization_optimal) / (1 - utilization_optimal) * borrow_rate_net2 + borrow_rate_optimal
depositRate = borrowRate * utilization_ratio

```
The system will later introduce more interest modals.

The system also relies on reliable price oracle to keep the collateral in a healthy status. For convenience, we will first use a mock price oracle and make the interface suitable for a more realistic off-chain worker implementation.

### Ecosystem Fit 

There are several DeFi projects in the ecosystem at the moment but we believe that our value proposition is unique and also complementing the existing products in the market. We are focused on building the decentralised money market, which could be supporting the stablecoin infrastructure that already exist and the staking asset liquidity products in the ecosystem.  

## Team :busts_in_silhouette:

### Team members
* Name of team leader: Ariel Ho 
* Names of team members: 	Shengmu Liu, John Wu, Yuqing Zhao, Jayden Yee 

### Team Website	
* http://konomi.network/

### Legal Structure 
KONOMI FOUNDATION LTD. 

### Team's experience

Shengmu has more than 5 years entrepreneur experience in tech startups. Before Konomi Network, he started his career in big data analytics at Shopee, a leading ecommerce platform in SEA. He then moved to a healthcare startup as the lead software engineer where he designed software product for million-dollar worth projects. He has deep enthusiasm in machine learning and also a veteran in tech project management. His publication was included in the IEEE https://ieeexplore.ieee.org/document/7476392

Ariel Ho has 7 years entrepreneur experience in tech startups. Before Konomi Network, she founded High Mall Indoor Navigation, an indoor navigation solution provider based on iBeacon Tech, served for Singapore largest chain supermarket NTUC Fairprice. She was the early investor of crypto since 2017. Her expertise in fundraising, strategy management and leadership is valuable to this project. 

Jayden has 8 years entrepreneur experience in Tech startups. Before Konomi Network, he has founded multiple tech startups including Mileslife Singapore and Wecharge.He was the country manager of OFO Singapore. Led the project from launch phase to mature phase. OFO obtain highest ridership in Singapore under his leadership. He was an early investor of crypto and Bitcoin mining since 2015

Yuqing has more than 7 years experience in social media advertising and community building. Before Konomi Network, she started her career as a commercial broker in physical commodity trading sectors. Besides, she is one of the top chinese KOL in Singapore with over 300K+ organic followers on instagram. As a sole proprietor, built relationship with and represented over 100 corporate partners in their online advertising campaigns, including Huawei, Casio, Shopee, Grab, Lazada, Carlsberg and etc. Her expertise in communication and community building is valuable to this project.

John, tech contributor, is a Substrate developer and technical ambassador of Polkadot. He was the CTO of Cdot and blockchain tech lead of ARPA project. 

We have already built a working preliminary swap module with a multi-asset module as a base layer. It is in our team code repository.


### Team Code Repos
* https://github.com/konomi-network/konomi-node
It is currently a private repo, please contact us for access. 

### Team LinkedIn Profiles
* http://linkedin.com/in/ariel-ho-8b5aa01ba
* https://www.linkedin.com/in/yuqing-zhao-1201b6120/
* http://linkedin.com/in/xingmo-liu-7b0823140


## Development Roadmap :nut_and_bolt: 


### Overview
* **Total Estimated Duration:** 1.5 months 
* **Full-time equivalent (FTE):**  2
* **Total Costs:** 1 BTC 
  


### Milestone 1 Pool Lending Module 
* **Estimated Duration:** 1 month
* **FTE:**  2
* **Costs:** 1 BTC

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0 | License | Apache 2.0 / MIT / Unlicense |
| 1 | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can (for example) spin up one of our Substrate nodes. There will also be a more detailed design documentation of the module reflects the delivered status |
| 2 | Substrate Module: Pool lending module | lending/borrowing pool of multi-assets with user deposit/debut tracking and interest calculation; liquidation functionality with sudo price oracle |
| 3 | Front End | Complete our own web page and provide front end UI for users to test the lending module. Using React and Javascript. Front end modules include: user account management (position tracking, interest, liquidation); lending/borrowing pools display; asset deposit and withdraw; |
| 4 | Tests | Unit tests and also a public accessible testnet of the PoC |
| 5 | Docker | A docker image of Substrate node with the lending module for anyone to easily run the node |




### Community engagement

https://konomi-network.medium.com/
We have been documenting the project progress and also our understanding of the DOT ecosystem in our blog. 

## Future Plans
After delivery, we will start to explore cross-chain lending senario and will first try to enable cross-chain asset to be lended and borrowed. Konomi aims to bridge the gap between crypto and fiat world by offering an easy to use, high performance product for users to trade and manage their crypto assets. In the mid term, we plan to implement cross-chain lending aggregation protocols since the current products could not execute orders across parachains simultaneously. We plan to deploy lending modules to partnered parachains in order to support cross-chain lending. In the long term, acquiring fiat-based customers and improve Polkadot cross-chain protocol to more compatible with cross-chain lending are the two strategic focus. In terms of fiat to crypto gateways, there have been many licensed service providers but it is yet to achieve mainstream adoption. With regulated players eying in this space, there will be more users and more demand for DeFi products. Furthermore, we believe that cross-chain infrastructure is going to be an important building block for crypto industry going forward since current solutions for BTC and other assets supported on Ethereum are either centralised or slow in speed.

## Additional Information :heavy_plus_sign: 


Possible additional information to include:
https://medium.com/konomi

