# Open Grant Proposal

* **Project Name:** Everlasting Cash
* **Team Name:** Cycan Technologies
* **Payment Address:** ETH address: 0x722043b40dEb4656a103aF03Fd8E781d0146d3F6
* **Status:**: Terminated

## Project Overview :page_facing_up: 

### Overview
  * While the incumbent stablecoins in the market have served the purpose of stabilizing the prices of cryptocurrencies, there are obvious limitations. Fiat-backed stablecoins such as USDT are not decentralized with the risk of being compromised by the central entity; while crypto-backed stablecoins are more vulnerable to price instability, since they are pegged to other cryptocurrencies. The risk of a possible crash for non-collateralized stablecoins is relatively high, since they lack collateral to liquidate the coin back into, while commodity-backed stablecoins might have liquidity problems as physical assets are not so easily liquidated. 
  * Everlasting Cash is a new kind of stablecoin which solves these issues with a truly decentralized, anti-inflation and stable product with reserves.
  * Everlasting Cash a.k.a. ELC is a decentralized algorithmic stablecoin using Substrate with a unique reserve system, i.e. a hybrid of a crypto-collateralized and an algorithmic stablecoin mechanism, with the collateralized mechanism providing the underlying value guarantee, and the algorithmic mechanism incentivizing the participants on one hand, and hedging the downside risk when the demand for the stablecoin is insufficient on the other.
  * ELC aims to provide users in the Polkadot ecosystem with a stablecoin that appreciates naturally and achieves the goal of anti-inflation. 

### Project Details 

Everlasting Cash (ELC) contracts are written in Rust language and can be deployed to Polkadot/Kusama parachain (ink! pallet).

#### Technical Design Overview

<img src="https://github.com/CycanTech/docs/blob/main/Technical_Design_Overview.png" width="900">

#### Tokens
1) Everlasting Parachain Token - ELP
ELP is a native token of the Everlasting Parachain (a parachain on Kusama). Participants are able to send ELP to the ELC multifunction contract as reserve assets to exchange ELC: according to the different system liability ratios, the contract will return both ELC and rELP, or rELP only to participants (see “Reserve” paragraph below).

2) ELC Token
ELC token is the stablecoin within the ELC contract system, with the initial pegged rate of 1 USD value in the year of 2021. The pegged rate varies over time based on inflation and depends on whether its supply expands or shrinks based on the system LR. 

3) rELP Token
rELP token is a risk asset in the ELC system (an equity in the system). Participants are able to add rELP liquidity to the multifunction pool, which could be realized by sending ELP to ELC contract. The system encourages user to do long-term liquidity mining so as to keep the reserve pool more stable with liquidity.

#### Multifunction Pool
1) Reserve
Participants can send ELPs to the ELC system in exchange for both ELC and rELP, or rELP alone, depending on what the system liability ratios are. When the system LR is less than 30%, participants who send ELPs to the ELC system can obtain a certain amount of ELC and rELP minted and the LR of the system remains unchanged. When the system LR is higher than 30%, participants who send ELPs to the ELC system will only get rELP,  and this can decrease LR.

2) Risk Reserve Fund
The risk reserve fund includes two assets (ELPs and ELCs). The purpose of the Risk Reserve Fund is to keep the ELC prices floating between 98% and 102% of the ELC aim price (ELCaim). For example, 1 million ELPs out of the overall 21 million of ELPs initial issuance are used as initial risk reserves. 
Such risk reserve fund is used as follows:  when ELP price is lower than 98% of ELCaim, the ELC system will swap ELP for ELC until all ELP in the pool are swapped into ELC to keep the price back to ELCaim. When ELP price is higher than 102% of ELCaim, the ELC system will swap ELC to ELP until all ELCs in the pool are swapped into ELP to keep the price back to ELCaim.

3) Liquidity Mining
Participants who have deposited ELPs to the reserve pool contract, can obtain rELP and use rELP to participate in the liquid mining. In order to maintain the size of reserves, participants are encouraged to do long-term liquidity mining. Participants who join liquidity mining will earn more tokens if they hold the tokens longer. 

#### Inflation Governance
The generation time of ELP is 6 seconds per block. The ELP target price rises every 10,000 blocks in K, K is an anti-inflation factor. The inflation factor K can be adjusted through the ELP governance mechanism. rELP holders can vote for the adjustment of the anti-inflation factor K when the USD inflation goes into hyperinflation.

#### Oracle
The oracle of reserve asset ELP and stablecoin ELC is implemented with Chainlink-Polkadot. We utilize Chainlink's decentralized Oracle network to quickly and securely connect end-to-end all the inputs and outputs of smart contracts to avoid pitfalls associated with deploying our own Oracle, such as long delays, additional charges, and even fatal security vulnerabilities. 

#### Contract
1) ELC - Minting and burning of the ELC token
Mints ELC amount to the recipient account.
Burns ELC amount from the account. 

2) rELP - Minting and burning of the rELP token
Mints rELP amount to the recipient account.
Burns rELP amount from the account.

#### Multifunction Pool

Mints some rELC amount, in exchange for some ELP amount.
Mints some ELC and rELP amounts, in exchange for some ELP amount.
Returns the amount of ELC and rELP.

ELCaim(after adjustment) = ELCaim(before adjustment) * (1+K)
LR = Value/P(ELP) * Amount(ELP)

Where:
- Value is the value of the ELCs that have been issued
- P isthe price of ELP
- Amount is the number of ELP in reserve pool


When LR is lower than 0.3, the ELC system mints amounts of ELCs and rELPs, in exchange for amount of ELPs.

△Amount(rELP) = p(ELP) * △Amount(ELP) * (1-LR)/p(rELP)
△Amount(ELC) = p(ELP) * △Amount(ELP) * LR

When LR is higher than 0.3, the ELC system mints amount of rELPs only, in exchange for amount of ELPs.
△Amount(rELP) = p(ELP) * △Amount(ELP) /p(rELP)
When ELC is higher than 102% of ELCaim and LR <= 0.7, the ELC system issues amount of ELC to rELP holders (95% of issued ELC) and the pool (5% of issued ELC).

When ELC is higher than 102% of ELCaim, if the multifunction pool has ELC, it swaps amount of ELCs for amount of ELPs, decreasing ELC supply.
When ELC is lower  than 98% of ELCaim, the multifuncitonal pool swaps amount of ELPs for amount of ELCs. 

When ELC is higher than 102% of ELCaim and LR is <= 0.7, when min (weighted average price of ELC 24 hours, weighted average price of ELC 1 hour) > $1, additional ELCs are issued,  additional ELC will allocate to rELP liquidity provider (95% of issued ELC) and the multifunction pool (5% of issued ELC).

Number of additional ELCs for the day = min (weighted average price of ELCs 24 hours before monitoring point, weighted average price of ELCs 1 hour before monitoring point) /100 * number of ELCs before additional issuance.

Number of ELCs obtained by the rELP liquidity miner = number of additional ELCs issued on that day * 95% * miner’s share

Number of ELCs added to the multifunction pool as risk reserve fund = number of additional ELCs issued on the day * 5%

When ELC is higher than 102% of ELCaim and LR > 0.7, the system will not issue any new ELCs, but will use the risk reserve fund (ELC) to swap amount of ELC for amount of ELP, which can decrease ELC price.


### Ecosystem Fit 

Everlasting Cash is the stablecoin for the Cycan Network, which is a larger effort to build a decentralized autonomous trust (DAT) protocol for everyone to build business models in fintech and other fields within the Polkadot ecosystem. On the Cycan Network, for instance, anyone can launch a DeFi project, or build an investment portfolio and participate in the decision-making process for any DeFi product on the network.

The ELC protocol is a smart contract protocol based on the Cycan Network/Everlasting Parachain.

The Cycan Network (CYA) is an parachain built on the Polkadot network. The Everlasting Parachain (ELP), as Cycan’s canary network, is the parachain on Polkadot’s canary network - Kusama network.

ELC has a stable target pricing mechanism, called ELCaim. ELCaim is initially set as 1 USD and the pegged rate of ELCaim will be continuously adjusted and stabilized based on the anti-inflation factor (K), forming the anti-inflation algorithmic stablecoin mechanism. ELC not only uses crypto currencies as systemic reserves to decide the basic value of stablecoins, but also uses algorithms to control the supply of ELC so that the prices are at the same level of ELCaim. Users can use other cryptocurrencies including CYA, ELP, DOT, KSM, BTC, ETH and other digital assets proposed by the Cycan community to generate Everlasting Cash in the ELC protocol.

Based on the Polkadot/Kusama ecosystem, Everlasting Cash will be playing a huge role in the future DeFi market, thanks to:
1. The adoption a crypto-collateralized mechanism to ensure the basic value of ELC. 
2. The utilization of a reserve-based liquidity mining mechanism to issue additional ELC, so that ELC grows in an orderly manner with the expansion of demand.
3. The anti-inflation model, and using the anti-inflation factor K to adjust the ELCaim (the pegged rate). The annual appreciation rate of ELC is roughly the same as the inflation rate of USD.
4. The buffer mechanism with reserves for price falls, which avoid the death loop trap of algorithmic stablecoins. 
  
The ELC reserve pool will prioritize the tokens from the Polkadot system to build a solid stablecoin ecosystem.


## Team :busts_in_silhouette:
The team beyond Everlasting Cash is the Cycan team, an early-stage core pool of talents from around the world, with a background in finance, blockchain development and large-scale software architectures serving multiple industries, business development and media. 
Cycan has a core team of developers numbering 10, including a development leader, 7 Rust developers, 1 product manager, and 1 front-end engineer.

### Team members
Cycan is directed by the following key roles:
* Donald Gao: founder, financial model designer
* Michele Ruberl, global tech partner, IT architect 
* Vivi Lin, global partner, CMO 

### Contact
* **Contact Name:** Donald Gao
* **Contact Email:** Donald@cycan.network
* Website http://cycan.network

### Legal Structure 
* **Registered Address:** to be registered.
* **Registered Legal Entity:** Cycan Foundation is being registered in Singapore, ETA March 2021.


### Team's experience
Cycan’s team has a long experience in the blockchain technology development and financial model designs.

The team has developed public chains similar to Ethereum, cross-chain bridges connecting DPOS-based side chain and the notary network, and the open consortium chain with the rPBFT consensus mechanism. The team also has rich experience in smart contract development, including the Bancor-based decentralized transaction protocol, decentralized identity, distributed domain registration and auction, decentralized stable coin protocols, etc.

Our developers are proficient in Rust, Java, C++, Solidity, Go and other development languages, and familiar with the Substrate development framework.

The team also has extensive experiences in financial model designs, especially for the trust instruments and relevant model designs.

Lastly, the team has a consolidated architectural and devops experience both in the context of experimental and in real-world large-scale deployments.


### Team Code Repos
* ELP-Runtime-node: https://github.com/CycanTech/ELP-Runtime-node 
* ELC-contracts: https://github.com/CycanTech/ELC 

### Team LinkedIn Profiles
* https://www.linkedin.com/in/donald-gao-6bab74206/
* https://www.linkedin.com/in/vivi-lin-1862276/
* https://www.linkedin.com/in/mikrub/



## Development Roadmap :nut_and_bolt: 

### Overview
* **Total Estimate Duration:** 14 weeks
* **Full-time Equivalent(FTE):** 4
* **Total cost:** 1500 USD  (we accept up to 100% of payment in crypto currencies that are equivalent to $1,500 including DAI)


### Milestone 1 – Implement ELC contracts
* **Total Estimate Duration:** 8 weeks
* **Full-time Equivalent(FTE):** 2
* **Total cost:** 1000 USD
* **Task:** to fulfill the ELC contracts development based on ink!

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a.	| License	| GNU General Public License v3.0 / Apache 2.0 |
| 0b.	| Documentation	| We will provide both inline documentation of the code and a tutorial that explains how a user can use ELC contract. |
| 0c.	| Testing Guide	| The code will have proper unit-test coverage to ensure functionality and robustness. In the guide we will describe how to run these tests. |
| 1.	| ELC contracts	| Develop ELC contract implement ELC whitepaper |
| 1a.	| Anti-Inflation Factor K & On-Chain Governance |	As the Polkadot parachain, Cycan/ELP network generates a block every 6 seconds or so, and the ELCaim increases by K every 10,000 blocks. In the ELC network, K can be adjusted through the on-chain governance mechanism, which can be decided by public voting in the community. |
| 1b.	| Liability Ratio	| To swap digital assets into the ELC contract, in which one can obtain both ELC and the risk assets(rXXX) or only the risk asset(rXXX). The difference will be defined by the Liability Ratio(marked as LR). |
| 1c.	| ELC Supply Expansion mechanism | When the prices of ELC exceed ELCaim, additional ELC will be issued and automatically allocated to the risk asset holders. |
| 1d.	| ELC Supply Contraction | When the prices of ELC go lower than 0.98 ELCaim, the circulating ELC will be repurchased by the risk reserve fund, and this part of ELC will be temporarily taken out of circulation; when the prices of ELC start to go over ELCaim, the ELC will be sold with priority by the risk reserve fund to recover the reserve. |
| 1e.	| Oracle Price acquirement | The oracle price adopts the dual price mechanism of Parachain DEX and Chainlink (or Zenlink). |


### Milestone 2 – Extend functions of the ELC contract.
* **Total Estimate Duration:** 6 weeks
* **Full-time Equivalent(FTE):** 2
* **Total cost:** 500 USD
* **Task:** Implement new contract functions based on ink! and develop DAPP front-end.

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. |	License | GNU General Public License v3.0 / Apache 2.0 |
| 0b. |	Documentation | We will provide both inline documentation of the code and a tutorial that explains how a user can use product. |
| 0c. |	Testing Guide | The code will have proper unit-test coverage to ensure functionality and robustness. In the guide we will describe how to run these tests. |
| 1a. |	ELC contract extension: Liquidity Mining Pool | ELP reserves a certain percentage of tokens to reward participants generatingELC, which means that part of the tokens will be given to risk asset (rELP) holders. |
| 1b. |	ELC contract extension:  Risk Reserve Fund | 1) A total of 21 million ELPs, of which 1 million ELPs are deposited into the risk reserve fund as the initial risk reserve. 2) In the ELC supply expansion process, 5% of the additional ELC issued through the algorithmic mechanism is converted into ELP and deposited in the risk reserve fund. |
| 2a. |	ELC Dapp | 1) ELC generation function. 2) Redemption of the pledged assets function. 3) ELC price, issuance volumes, risk assets, debt ratios and other query functions. 4) Liquidity mining function. And integrate with the wallet. |


## Future Plans
Our team would like to make continuous contributions to the Substrate and Polkadot ecosystems. Our future plans are as follows:
	•	Everlasting Cash is only deployed in the Polkadot ecosystem, through the Runtime module using the Substrate framework.
	•	The ELC reserve pool will prioritize tokens from the Polkadot system to build a solid stablecoin ecosystem. 
	•	To provide the users in the Polkadot ecosystem with a stablecoin that appreciates naturally and achieves the goal of anti-inflation.
Everlasting Cash will exist as an independent asset in the Polkadot ecosystem, and will also power the Cycan decentralized autonomous trust (DAT) on the path to revolutionize trust in the financial market.

## Additional Information :heavy_plus_sign: 

* What work has been done so far?
	1) The development of the initial version of the Substrate-based Pheonix test chain has been completed, supporting the WASM and EVM virtual machines. 
	2) The DAO self-governance Runtime module and the application for the access to the Rococo test network are in progress.
	3) The development plan for the ELC contract has been formulated and the development is in progress.

* Are there are any teams who have already contributed (financially) to the project?<br>
&nbsp;No
  
* Have you applied for other grants so far?<br>
&nbsp;No
  
* Are there any other project similar to yours?<br>
&nbsp;To the best of our knowledge, there is no project about anti-inflation stablecoin that is similar to our project. Please let us know if there are any.
  
  
  
  
