# Curve AMM

* **Team Name:** Equilibrium
* **Payment Address:** 0xee25e18E6bEa41792Adf464D399554B628A80067
## Project Overview 
### Overview
Curve AMM substrate module will be a 6-week long project with the final aim to deliver the following:
- Low slippage, high efficiency stablecoin exchange
- High efficiency exchange tool for other homogeneous assets on Polkadot (e.g. wrapped assets) 
- Low risk fee income for liquidity providers. 
- Liquidity superfluidity with additional rewards from supplying liquidity to lending protocols such as Equilibrium and Acala.

**Deployment**
We will build an open-soure pallet which will may be deployed to any substrate/parachain and support Polka's native balances/assets module which works with multiassets and multilocations. 
To demonstrate the use-case of Curve AMM we will deploy the module to Equilibrium substrate adapting it slightly to support Equilibrium's balances module. 

**Polkadot Ecosystem Benefits**
Curve’s unique stableswap invariant utilizes liquidity much more efficiently compared to all existing DEXes for stablecoins at already several hundred USD TVL (total value locked). Since initial liquidity on Polkadot is hardly going to be very large, proposed efficiency is VERY important for the ecosystem to flourish.

**Why are we creating this project**
We believe in mutually beneficial cooperation between Polkadot, Curve, and Equilibrium. We want to give community a useful tool for managing liquidity in assets with same primary underlying. 
### Project Details 
Please refer to [Curve AMM google doc file](https://docs.google.com/document/d/1zvvyZ6G9M9vqIEttb6Hk48I-q4gQL981Vs5IkuvLmUU/edit#) for details on business logic, Curve's invariant calculations, and technical specification. 
### Ecosystem Fit 
There is a [Sunrise DEX](https://github.com/w3f/Open-Grants-Program/blob/master/applications/sunrise-dex.md) project which aims to deliver identical functionality. There are several diferences worth highligting:

- We're not aming to create a separate special-purpose DEX parachain, but rather a light-weight exchange module, which will be pluggable into any substrate/parachain. 
- We will focus solely on Curve's stable swap invariant as we believe it will be of maximum utility to Polkadot's ecosystem, especially when Parachains, XCM, and SPREE come into existence and there will be multiple assets representing same base/underlying asset. 
- We will have only substrate in our dependencies and won't use custom asset modules like ORML tokens, so the module will be universal and usable by substrates who support standard functionality.
- We will deliver a working solution faster than Sunrise DEX is promising.   
## Team 
### Team members
- Alex Melikhov: Founder & CEO 
- Peter Sergeev: Sr. Project Manager Tech Team
- Veniamin Khrapov: Tech Lead
- Pavel Gavrilushkin: Tech Lead
### Contact
* **Contact Name:** Peter Sergeev
* **Contact Email:** peter.s@equilibrium.io
* **Website:** [https://equilibrium.io](https://equilibrium.io)
### Legal Structure 
* **Registered Address:** Floor 4, Willow House, Cricket Square, KY1-9010 Grand Cayman, Cayman Islands
* **Registered Legal Entity:** AEQUUM LIMITED
### Team's experience
The team has strong experience building Decentralized Financial Protocols in Ethereum, EOS, and now Polkadot. 
### Team Code Repos
- [Equilibrium](https://github.com/equilibrium-eosdt)
### Team LinkedIn Profiles
- [Alex Melikhov](https://www.linkedin.com/in/alex-melikhov-bb272532/)
- [Peter Sergeev](https://www.linkedin.com/in/peter-sergeev-32520b54/)
- [Pavel Gavrilushkin](https://www.linkedin.com/in/pavel-gavrilushkin-3116a979)
- [Veniamin Khrapov](https://www.linkedin.com/in/%D1%85%D1%80%D0%B0%D0%BF%D0%BE%D0%B2-%D0%B2%D0%B5%D0%BD%D0%B8%D0%B0%D0%BC%D0%B8%D0%BD-4272ba5b/) 
## Development Roadmap 
### Overview
* **Total Estimated Duration:** 6 weeks
* **Full-time equivalent (FTE):** 3 FTE  
* **Total Costs:** 30,000.00 DAI
### Milestone 1: Initial implementation, pool manipulations, invariant calculation
* **Estimated Duration:** 3 weeks
* **FTE:**  3
* **Costs:** 15,000 DAI

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 / MIT / Unlicense |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how substrates may integrate our pallet|
| 0c. | Testing Guide | The code will have unit-test coverage (min. 90%) to ensure functionality and robustness. In the guide we will describe how to run these tests | 
| 1. | Module design| Assets will be handled using a new assets trait. We will implement a pool storage structure for handling different asset pools with different parameters. |  
| 2. | Customizable Liquidity Pools| We will implement methods to set up custom asset pools.|  
| 3. | Invariant calculation| We will implement a method to iteratively calculate Curve’s invariant D and points on the bonding curve in non-overflowing integer operations.|  
### Milestone 2: Assets exchange

* **Estimated Duration:** 3 weeks
* **FTE:**  3
* **Costs:** 15,000 DAI

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a.   | License       | Apache 2.0 |
| 0b.   | Documentation       |Documentation We will provide both inline documentation of the code and a basic tutorial that explains how substrates may integrate our pallet|
| 0c.   | Testing Guide | The code will have proper unit-test coverage (e.g. 90%) to ensure functionality and robustness. In the guide we will describe how to run these tests. Tests will include: creation of stable coin pool, addition and removal of liquidity, swap (exchange), rewards for LPs|
| 1. | Exchange| We will implement methods to work with asset pools: add liquidity / remove liquidity, and exchange assets. |  
| 2. | Rewards| We will implement a mechanism to reward liquidity providers with LP tokens.|  
| 3. | Asset fluidity| Assets locked inside Curve liquidity pools may be further used in various lending protocols across the Polkadot ecosystem.|  
## Future Plans
Expand research in AMMs and possibly introduce Invariants based on economic model of rational economic agents who strive to maximize their representative utility function with a choice of varieties under the budget constraint. (e.g. [Dixit-Stiglitz](http://www.columbia.edu/~jid2106/td/dixitstiglitzbasics.pdf))
## Additional Information 
The work under this application will be done under the supervision of the Curve team. The stable swap AMM will be delivered and launched under Curve's brand, Equilibrium will be responsible for tehcnical/dev support.   