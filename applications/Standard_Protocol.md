# Standard Protocol


## Project Overview :page_facing_up: 

### Overview

Standard Protocol is a synthetic asset protocol for polkadot ecosystem.


### Documentation

[https://docs.standardprotocol.org](https://docs.standardprotocol.org)

### Core Runtime Modules

#### token regisrty `/token`

Token manages asset that flows in and out with xcmp in polkadot ecosystem. assets are managed with unique identifier. 

#### oracle reward module `/oracle`

Oracles in standard protocol are rewarded in each era on each block reward.
prices are stored in the state, and oracle providers are updated in each era.

#### market module `/market`

Market module in standard protocol manages pair for automated market maker(AMM) between collateral and its stablecoin meter(MTR).

#### vault module `/vault`

Vault module in standard protocol is a collateral debt position engine where 

### Ecosystem Fit 

Standard protocol will act as the catalyst for other parachain's financial activities for enabling leverage trading and Arbitrage in AMM created from liquidation. It will also open a protocol for synthetic asset market with decentralized oracle ecosystem.

## Team :busts_in_silhouette:

### Team members

Hyungsuk Kang, team leader

### Legal Structure
Standard protocol is being made with Apache 2.0 license. Legal entity is being built in Singapore right now.

### Team's experience
Hyungsuk is Plasm network's core developer. He developed Subswap, AMM in substrate, and he wants to extend it to make the next finance in Polkadot ecosytem using XCM module and collateral debt position. He is also kernel and tendermint fellow. 

### Team Code Repos
* https://github.com/digitalnativeinc/standard-substrate


### Team LinkedIn Profiles
* https://www.linkedin.com/in/hyungsukkang

## Development Roadmap :nut_and_bolt: 

### Overview

As a synthetic asset protocol,Standard protocol heavily depends on the oracle for managing the system. Oracles should be formed in a legit way to be motivated for people to provide computing power.
To reward the network participant, Standard protocol proposes new PoS reward system by splitting block rewards from block validators to oracle providers.

* **Total Estimated Duration:** 2 months
* **Full-time equivalent (FTE):**  1
* **Total Costs:** 3000USDT
* **Payment Address:** `0x6EaD823cfB6d45996b8E413C7bE43282f042A78e`

### Milestone 1 - PoA oracle reward distribution  
* **Estimated Duration:** 1 month
* **FTE:**  1
* **Costs:** 1500USDT

This milestone focuses on building a oracle provider client for getting block rewards from standard protocol. PoA module for testing connection between oracle provider and the protocol is provided.

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0|
| 0b. | Oracle provider | A cron job software to periodically receive price and send it to standard protocol |
| 0c. | Documentation | Documentation will introduce how to install the oracle and participate to get block reward | 
| 1. | Oracle module | Oracle module to register oracle accounts and receive transaction to report prices and reward oracles in each era |  
| 2. | Docker | We will provide a dockerfile to demonstrate the full functionality of the oracle provider |

### Milestone 2 - PoS oracle reward distribution  
* **Estimated Duration:** 1 month
* **FTE:**  1
* **Costs:** 1500USDT

This milestone focuses on separating staking and phragmen election from block reward logic then apply it on oracle network participants while sharing era information in existing staking module. oracle account will act as validator in staking module, nominators will nominate oracle accounts. Slashes will be applied in each session(approximately 4 hours) when oracle provider submits outliers or does not register value in each session. Outliers are detected with [IQR method](https://online.stat.psu.edu/stat200/lesson/3/3.2). On each session, points are allocated to the elected oracle providers with constant divided by difference between median and the provider's value. Points will be allocated to elected oracle providers, and they will get block reward at the end of an era proportional to the point they made from sessions. Block rewards will be computed separately by being called from a reward module, managing the ratio of block reward in each era like `plasm_reward` runtime module(Credits to plasm network). 

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0c. | Documentation | Documentation will introduce how to nominate  | 
| 1. | Oracle module | Oracle module to register oracle address and transaction to report prices will be set |  
| 2. | Docker | We will provide a dockerfile to demonstrate the full functionality of Standard protocol chain |



## Future Plans
- Add more prices to add from the oracle (e.g. stock prices, commodities, etc) provider
- Full function test on Kusama/Rococo.
- Full function test on Polkadot.

## Additional Information :heavy_plus_sign: 

- Pitch: [https://whitepaper.standardprotocol.org](https://whitepaper.standardprotocol.org)
