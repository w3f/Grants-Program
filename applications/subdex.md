# Open Grant Proposal

* **Project:** SubDEX
* **Proposer:** subdarkdex
* **Payment Address:** BTC payment address. We don't accept payments for the program in other currencies at this stage. 

## Project Description :page_facing_up: 

SubDEX is a decentralized cross-chain exchange based on AMM (automated market maker) protocol. This project was initially submitted to [Hackusama](https://devpost.com/software/dark-dex). The SubDEX team's goal goes beyond what was produced in the hackathon. We aim to continue to build SubDEX and hope it becomes a parachain that connects to Kusama and Polkadot networks, so that other parachain assets can be exchanged on it with privacy in a decentralised way. 

Centralised Exchanges (CEXs) have grown exponentially in last decade, because
1. People have demand to exchange different blockchain assets
2. Different blockchains are isolated from each other like islands in oceans
People have to rely on a middle man (CEX) to exchange different blockchain assets.

CEX is not web 3.0. It is centralised and it is Web 2.0 or 2.5 at best. Web 3.0 should be more decentralised. We believe DEX is an esstential part of web 3.0. 

DEXs have existed on Ethereum blockchain a few years, but they usually have low liquidity and bad user experience. [Vitalik's research](https://ethresear.ch/t/improving-front-running-resistance-of-x-y-k-market-makers/1281) inspired Uniswap team and [Uniswap's success](https://cointelegraph.com/news/defi-explosion-uniswap-surpasses-coinbase-pro-in-daily-volume#:~:text=Uniswap%2C%20the%20most%20widely%2Dused,daily%20volume%20on%20Aug%2030.&text=According%20to%20the%20data%20from,volume%2C%20according%20to%20CoinMarketCap%20data.) inspired us. We think it is time for DEXs to disrupt CEXs 

Uniswap's success is exciting, but it still has its limit. It's mainly used to exchange Ethereum assets (ETH and ERC20 tokens). Some solutions such as REN exists for user to exchange BTC with Ethereum assets, but most of other blockchain assets cannot be traded on DEXs on Ethereum. AMM protocol is evolving. We have seen that Uniswap V1 evolved to Uniswap V2 and Bancor evolved to Bancor V2, but the old version and new version have to co-exist because the old version cannot be seemlessly upgraded to new version on Ethereum.

Kusama / Polkadot's cross-chain protocol and on-chain upgrade make them the perfect blockchain to build a DEX. We are aware there are other DEXs such as Polkaswap and Acala being built now, but we don't think 2 are enough and SubDEX will be different (in terms of features and user experience) from them.

The team met during the hackthon and have established strong inter-team relationships through a common goal - _to provide a DEX that is built by, used by and maintained by the community.


## Team :busts_in_silhouette:

* **Members:** Name of team member	1, name of team member	2, ..
* **LinkedIn Profiles:** https://www.linkedin.com/<person_1>, https://www.linkedin.com/<person_2>, ...
* **Code Repos:** https://github.com/<repo_1>, https://github.com/<repo_2>, ...
* **Website:**	https://...
* **Legal Structure:** Please provide the name and registered address of the legal entity executing the project. 
* **Team's Experience:** Please describe the team's relevant experience.

## Development Roadmap :nut_and_bolt: 

* **Total Estimated Duration:** 7 weeks
* **Full-time equivalent (FTE):**  2.5 FTE 
* **Total Costs:** 2.6

### Milestone 1

| Number | Deliverable | Specification | 
| ------------- | ------------- | ------------- |
| 1. | UI connection | Update UI to support Parachain (currently connected to a substrate standalone chain) and connection to browser wallet |
| 2. | UI feature | Allow user to set allowed slippage |
| 3. | UI Theme | Provide 2 themes for UI -- light and dark and allow user to choose which one
| 4. | UI Infrastrcture | HTTPS to the SubDEX frontend, encrypted wss to the node |
| 5. | Dex Pallet | Implement Uniswap V2 AMM protocol with full test coverage and eliminate overflow/underflow risks in calculation in the chain |  
| 6. | Collator Incentive | Include node runner incentive for the parachain (as a community build project, we see it fitting that it will be ran by the community) |
| 7. | Parachain Infrastructure | Deploy to secured and high reliability server as the initial collator for the SubDEX Parachain. |

At the end of milestone 1, we want to be fully ready to connect with the Parachain Roccoco testnet

#### Community 
Our initial focus will be development, but we will setup medium and twitter account to start building community as well. 



## Additional Information :heavy_plus_sign: 

We have broken down the SubDEX product roadmap into small manageable steps and would like to get feedback from the community and the foundation every step of the way, and we intend to apply for other grants after this milestone. The overview of the features SubDEX intend to have are the follow:-

- AMM protocol (we have implemented Uniswap V1 protocol with some short-cuts in the hackathon, we will implement Uniswap V2) 
- Liquidity provider fee will be set to 0.3% initially but will be set by the Liquidity providers and traders through the democracy module when the network has enough users.
- Node runner fee will be set to 0.1% initially but will be set by the node runners through the democracy module when the network has enough community nodes
- Support exchange of KSM & DOT and other parachain assets
- Support other blockchain assets such as ETH, XTZ, BTC when the bridges are ready
- Customizable user interface (user can select any DEX node to connect to, user can adjust allowed slippage, user can select favorite theme etc).
- Optional privacy for users

