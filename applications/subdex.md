# Open Grant Proposal

* **Project:** SubDEX
* **Proposer:** subdarkdex
* **Payment Address:** BTC payment address. We don't accept payments for the program in other currencies at this stage. 

## Project Description :page_facing_up: 

SubDEX is the decentralized cross-chain exchange based on automated liquidity protocol. This project was initially submitted to [Hackusama](https://devpost.com/software/dark-dex). The SubDEX team's goal goes beyond what was produced in the hackathon, we aim to continue to build Subdex in order to have the Subdex parachain connect to the main polkadot network and provide external tools to support other parachains access Subdex's full functionality. 

We believe SubDEX is good for the Substrate / Polkadot Ecosystem because it addresses the following problems when user wants to exchange asset on any blockchains that are or will be connected to the Polkadot system, either through being a parachain / bridges: 

- Third Party Risks through CEX is avoided as SubDEX is decentralised and runs on a parachain with Polkadot's shared securty
- Low liquidity issues (high buy/sell spread) is replaced with AMM (Automatic Market Maker - inspired by Uniswap), which has proven to attract liquidity providers
- Only pseudo-anonymity is provided by current DEX, it is the medium term goal for SubDEX to provide true privacy

Our team met during the hackthon and have established strong inter-team relationships through a common goal - _to provide a DEX that is built by, used by and maintained by the community.


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
| 4. | UI Infrastrcture | HTTPS to the Subdex frontend, encrypted wss to the node |
| 5. | Dex Pallet | Implement Uniswap V2 AMM protocol with full test coverage and eliminate overflow/underflow risks in calculation in the chain |  
| 6. | Collator Incentive | Include node runner incentive for the parachain (as a community build project, we see it fitting that it will be ran by the community) |
| 7. | Parachain Infrastructure | Deploy to secured and high reliability server as the initial collator for the SubDEX Parachain. |

At the end of milestone 1, we want to be fully ready to connect with the Parachain Roccoco testnet

#### Community 
Our initial focus will be development, but we will setup medium and twitter account to start building community as well. 



## Additional Information :heavy_plus_sign: 

We have broken down the Subdex product roadmap into small managable steps and would like to get feedback from the community and the foundation every step of the way, we intend to apply for other grants after this milestone. The overview of the features Subdex intend to have are the follow:-

- AMM protocol (we have implemented Uniswap V1 protocol with some short-cuts in the hackathon, we will implement Uniswap V2) 
- Liquidity provider fee will be set to 0.3% initially but will be set by the Liquidity providers and traders through the democracy module when the network has enough users.
- Node runner fee will be set to 0.1% initially but will be set by the node runners through the democracy module when the network has enough community nodes
- Support exchange of KSM & DOT and other parachain assets
- Support other blockchain assets such as ETH, XTZ, BTC when the bridges are ready
- Customizable user interface (user can select any DEX node to connect to, user can adjust allowed slippage, user can select favorite theme etc).
- Optional privacy for users

