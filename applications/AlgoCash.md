# Open Grant Proposal

> This document is referenced in the terms and conditions and therefore needs to contain all the required information. Don't remove any of the mandatory parts presented in bold letters or as headlines! See the [Open Grants Program Process](https://github.com/w3f/Open-Grants-Program/blob/master/README_2.md) on how to submit a proposal.



* **Project Name:** Algo Cash
* **Team Name:** Reserve Labs
* **Payment Address:** DAI Address: 0xE9db4E6bB798a8739Ad44af918f30D57eE3b743d

## Project Overview 

### Overview

The price volatility of cryptocurrencies is a major blocker for mass adoption. Their rapid change in fiat-denominated value causes payment values to vary even during settlement times, being highly inconvenient to merchants that handle them.

Stablecoins are cryptocurrencies with an exchange rate peg with existing fiat currencies or a fiat-related index, thereby drastically increasing their usefulness as a payment medium.

Although there exists a wide variety of stablecoin mechanisms, some are with censorship risks or some are still suffered from price volatility.

Algo Cash specifically uses an algorithmic approach to manage the supply of tokens according to a predetermined logic. The algorithm is in charge of balancing stablecoin supply to fluctuating demand, ensuring that the token price remains relatively stable.

### Integration

Algo Cash is implemented as a smart contract which can be deployed into ink! pallet of a parachain.

For trading and liquidity purpose, Algo Cash could be integrated with such protocols in Polkadot as Konomi and Zenlink.


## Project Details 

### Tokens

#### ALC - Algo Cash

Algo Cash tokens are designed to be used as a medium of exchange. The built-in stability mechanism expands and contracts their supply, maintaining their peg to the aUSD token. 


#### ALB - Algo Bonds

Algo Bonds are minted and redeemed to incentivize changes in the Algo Cash supply. Bonds are always on sale to Algo Cash holders, although purchases are expected to be made at a price below 1 Algo Cash. At any given time, holders are able to exchange their bonds to Algo Cash tokens in the Algo Cash Treasury. Upon redemption, they are able to convert 1 Algo Bond to 1 Algo Cash, earning them a premium on their previous bond purchases.

Bonds do not have expiration dates. All holders are able to convert their bonds to Algo Cash tokens, as long as the Treasury has a positive ALC balance.

#### ALS - Algo Shares

Algo Shares loosely represent the value of the Algo Cash network. Increased demand for Algo Cash results in new Algo Cash tokens to be minted and distributed to Algo Share holders, provided that the Treasury is sufficiently full.

Holders of Algo Share tokens can claim a pro-rata share of Algo Cash tokens accumulated to the Boardroom contract.

### Pools

#### Treasury

The Algo Cash Treasury exists to enable bond-to-cash redemptions. Bonds redeemed via the Treasury automatically returns the user an equal number of Algo Cash, provided that: 1) the oracle price of Algo Cash is above 1 aUSD, and 2) the Treasury contract has a positive balance of Algo Cash.

Disallowing redemptions when the Algo Cash price is below 1 aUSD prevents bond holders from prematurely cutting their losses and creating unnecessary downward pressure on the price of ALC.

#### Boardroom

The Boardroom allows Algo Share holders to claim excess Algo Cash minted by the protocol. Holders of Algo Shares can stake their Shares to the Boardroom contract, which by doing so, they can claim a pro-rata share of Algo Cash tokens assigned to the Boardroom.

### Stabilization Mechanism

The Algo Cash protocol is designed to guarantee Algo Cash tokens to be exchanged at a value of a single US dollar, with the stabilizer (in-protocol stability mechanism) in charge of matching the supply of Algo Cash to their demand.

Every 24 hours, the time-weighted average of the ALC-aUSD exchange rate is read from the DEX Aggregator in Polkaot, which is then fed into the Algo Cash protocol to be referenced by its stability mechanism.

The stabilization mechanism is triggered whenever the price of Algo Cash is observed to be above / below (1+ε) aUSD, where ε is a parameter that defines the range of price stability for the ALC token. In inilization, ε is set to be 0.05.


#### Contractionary Policy

At any point in time, Algo Bonds can be bought from the protocol in exchange for Algo Cash. Purchase of Bonds are performed at an algorithmically set price. With a Algo Cash oracle price of P aUSD, bonds are sold off at a price of P ALC (effective price being P^2 aUSD), promising bond holders a premium when redeemed. Purchased bonds can be converted to Algo Cash, insofar as the preconditions are met and the Treasury is not empty.

#### Expansionary Policy

If the price of Algo Cash is observed to be higher than (1+ε) aUSDT, the system mints totalSupply *(oraclePrice-1) number of new Algo Cash tokens. The issued Algo Cash is either deposited to the Treasury or the Boardroom, depending on the Algo Cash balance of the Treasury.

If the Treasury has a balance above 1,000 Algo Cash, then it is logical to assume that either all bonds have been already redeemed, or no bond holder is currently willing to perform a redemption.Either way, this signals that the demand for bond redemption do not exist at this time, and thus the freshly minted Algo Cash is given to the Boardroom contract.

However, if the Treasury has a balance of below 1,000 Algo Cash, then it is assumed that there will be additional demand for bond-to-cash redemption. Therefore, the issued Algo Cash is routed to the Treasury so that Bond holders can exercise redemptions.

### Token Distribution

Initial distribution of Algo Cash are done to those that deposit aUSD to the distribution contract. A total of 100,000 Algo Cash tokens are distributed to depositors, with 10,000 Cash tokens distributed per day. The amount of stablecoin deposits are limited to 20,000 tokens per account.

Afterwards, a total of 1,500,000 Algo Shares are on crowd sale and the initial token price would be 40 aUSD. The crowd sale will last for 15 days. Afterwards, ALS will be listed on the DEXs with the same price as in the crowd sale, all funds raised in the crowd sale will be distributed to the DEX as buy orders and all Share tokens left will be distributed as sell orders.

Further distribution of Algo Shares are given to liquidity providers (e.g. ALS-DOT pair, ALS-aUSD pair, etc.) or ecosystem contributors. A total of 500,000 Algo Shares are distributed over a period of 1 year, and an equal amount of tokens are distributed per day.

Advantages

1. Funds in the crowd sale will not be abused, but used to establish the liquidity market.

2. Regardless of the funds raised, sufficient selling liquidity can be provided to facilitate large amounts of funds to enter the market.

3. Compared to joint curve issuance: a fair start, avoiding scientists from rushing

4. Compared to AMM 2 pool mining: inflation tokens are not required to pay liquidity rents, and tokens are distributed to investors instead of those who "dig, sell and withdraw".

5. Compared to auctions: Crowd sale is compatible with auction functions, but it is not just a simple fundraising. After the crowd sale is over, a market with abundant liquidity will be established immediately. Even having not raise enough funds, a market with sufficient selling liquidity can still be established, which AMM cannot do.

### Contract

**cash - Minting and burning of the cash token**

Mints *amount* cash to the *recipient* account. 

Burns *amount* cash from the *account*.


**bond - Minting and burning of the bond token**

Mints *amount* bond to the *recipient* account. 

Burns *amount* bond from the *account*.



**share - Minting and burning of the share token**

Mints *amount* share to the *recipient* account. 

Burns *amount* share from the *account*.


**Treasure - Bond purchase and redemptions**

Returns the oracle price of Algo Cash denominated in aUST.

Mints *amount* Algo Bonds, in exchange for same *amount* Algo Cash burnt.

Mints *amount* Algo Cash, in exchange for *amount* Algo Bonds burnt.

If the oracle price of Algo Cash is above (1+ε) aUST, mints *((ALC Oracle Price) - 1) * cashSupply* number of Algo Cash to either the Boardroom contract or the Treasury contract.If the Treasury's balance is below 1,000 ALC, the allocation is given to the Treasury, else give it to the Boardroom.


**Boardroom - Handling claims from the share**

Stakes *amount* Algo Shares to Boardroom sends all prior accrued dividends to *account*.

Withdraws *amount* Algo Shares and all accrued dividends to *account*.

Returns the amount of all dividends accrued by *account*.

Claims all accrued dividends to *account*.

When new cash is assigned to the Boardroom contract. Records the current block timestamp, the amount of new cash, and the current amount of total Shares staked.


**oracle - Retrieving the exchange rate between Algo Cash and aUST**

If 24 hours has passed since update() was last successfully executed, updates the time-weighted average price of Algo Cash. 

Returns the amount of *output* tokens given in exchange for *input* number of *token* tokens ((Price of *token* token denominated in *output* tokens) * *input*).





### Ecosystem Fit 
Acala, aUSD is generated in a collateral way.

Basis Cash (on Ethereum), shares are initialized by 'AMM + 2nd pool' which would cause dramatic infaltion, forcing Yeild Farmers to sell their assets to the second market.

## Team 

### Team members
* Nick Hsu, Blockchain Expert and Team Leader
* Gang Chan, Full Stack Developer	

### Contact
* **Contact Name:** Nick Hsu
* **Contact Email:** nick_hsu@sina.com


### Legal Structure 
No legal Entity

### Team's experience
Nick has 16 years of software development experience and 5 years working in Blochain area as developer and product owner.

Gang is now working as a freelancer. He is a full stack developer proficient in C++, Rust, React and Solidity. He has 3 years software development experience and 2 years smart contract development experience.

### Team Code Repos
* https://github.com/ReserveLabs/AlgoCash

### Team LinkedIn Profiles
no


## Development Roadmap 
### Overview
* **Total Estimated Duration:** 6 weeks
* **Full-time equivalent (FTE):**  1.5
* **Total Costs:** 5,000 DAI

### Milestone 1 Example — Implement Substrate Modules 
* **Estimated Duration:** 7 weeks
* **FTE:**  2
* **Costs:** 5,000 DAI  

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0 | License | Apache 2.0 / MIT / Unlicense |
| 1 | Documentation | Specification of the background, components and working mechanism|
| 2 | Smart Contract | AlgoCash smart contract repo. The smart contract can be deployed to any substrate chain with ink! pallet.|
| 3 | Tests |Unit Test and also we will test it on Canvas| 
| 4 | Docker | A docker image with a Substrate chain for PoC|



## Future Plans
Shares token design for governance.

We will build a DEX with PMM (Proactive Market Maker) algorithm.

## Community Engagement
We will reach DEX and Lending protocol communities to enlarge Algo Cash adoption. 
