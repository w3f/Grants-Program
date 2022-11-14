# Uncollateralized Stablecoin Research

* **Status:** [Under Development](https://github.com/w3f/Grants-Program/blob/master/applications/stardust.md)
* **Proposer:** [Noc2](https://github.com/Noc2)
* **Projects you think this work could be useful for** [optional]: Any Defi Project

## Project Description :page_facing_up: 

Stablecoins are cryptocurrencies where the price is designed to be pegged (=fixed exchange rate) to a cryptocurrency, fiat money, or to exchange-traded commodities. Seigniorage-style, uncollateralized or algo stablecoin is a token that uses algorithms to control the circulating supply to get a stable value of the asset. In general the price volatility of cryptocurrencies is one of the biggest barriers to widespread adoption. Stablecoins therefore have become a key component of DeFi applications. However, all successful existing stable coins (e.g. DAI, USDT, USDC, etc) are asset backed. Therefore they are subject to the same volatility and risk associated with the backing asset and the underlying process. Some of the potentially issues based on this are:
- Additional trust assumptions (e.g. USDT)  
- Scalability issues (restricted by the underlying asset) 
- Devalue under massive crashes in the underlying assets 

Purely algorithmic stablecoin would overcome these risks. Additionally it would be fairly simple to peg an algorithmic stablecoin to different assets (USD, EUR) or in the future even to a consumer price index (CPI). However, until now most algorithmic stablecoins introduced significant additional disadvantages or weren't able to maintain their peg for a longer period of time (e.g. AMPL, ESD, DSD, BAC, NuBits).

The goal of this RFP is to research and create new uncollateralized stablecoin mechanisms and implement these as ink! smart contract or pallets. The biggest research question hereby is how to efficiently decrease the supply of the token.   

**Useful resources:** 
- https://www.basis.io/basis_whitepaper_en.pdf  
- https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2425270 
- https://www.youtube.com/watch?v=bnC5RQsaAXQ 
- https://econteric.com/stablecoin/algo/
- https://assets.fei.money/docs/whitepaper.pdf
- https://www.terra.money/Terra_White_paper.pdf

## Deliverables :nut_and_bolt:

The milestones below are just an initial draft. The milestones can be structured completely differently and the implementation can also leverage other tools and infrastructure as long as the overall goal of the RFP is met.

* **Total Estimated Duration:** 2 month
* **Full-time equivalent (FTE):**  1
* **Total Costs:** 30k

### Milestone 1 - Research & Design 

* **Estimated Duration:** 1 month
* **FTE:**  1
* **Costs:** 10k


| Number | Deliverable | Specification | 
| ------------- | ------------- | ------------- |
| 1. | Overview of existing solutions | Create an overview of existing and previous uncollateralized stablecoin solutions and why they failed. |  
| 2. | Increasing Supply | Develop a mechanism to deal with an increasing demand for the cryptocurrency and analyses potential attack vectors | 
| 3. | Decreasing Supply | Develop a mechanism to deal with an decreasing demand for the cryptocurrency and analyses potential attack vectors| 

### Milestone 2 - PoC Implementation

*Ideally part of a separate follow-up grant, since it depends on the outcome of the initial research!*  

* **Estimated Duration:** 1 month
* **FTE:**  1
* **Costs:** 20k


| Number | Deliverable | Specification | 
| ------------- | ------------- | ------------- |
| 1. | Implement PoC| Implement the previous reasearch as ink! Smart contract or pallets |  
| 2. | UI (optional) | Implement a basic UI that can be used for testing | 

