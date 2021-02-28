# W3F Open Grant Proposal

* **Project Name:** Stable Asset
* **Team Name:** NUTS Finance
* **Payment Address:** 0x679824d755B054a2a50358008472a6F400740319

## Project Overview :page_facing_up:

### Overview

There are vastly emerging assets in the Polkadot ecosystem, including both Polkadot native assets and assets bridged from other blockchains such as Ethereum. These assets introduce diversity in architecture and business model, but also fragmentizes the ecosystem since applications need to build separate markets for each of these assets.

Stable Asset is a synthetic protocol for assets of specific peg such as BTC and USD. By creating synthetic asset which is backed by a basket of assets with the same value peg, ACoconut unifies market values of multiple assets and simplifies financial application development since only one synthetic asset needs to be supported for each peg type.  Stable Asset is also built with integrated swap and saving functionalities using the basket of assets.

Minting and redemption of the synthetic asset, as well as swap within the basket, are based on Curve's StableSwap algorithm.

### Project Details

The Stable Asset system consists of three major components: Stable Asset, Stable Swap and Stable Savings.

#### Stable Asset

Stable Asset is a synthetic asset with value peg such as BTC or USD. It's backed by a basket of assets with similar peg, and it provides more reliability and better peg compared to individual asset in the basket.

The value of Stable Asset is derived from Curve's StableSwap algorithm. When there is shift in price from individual asset in the basket, the value of Stable Asset remains unchanged: The total value of Stable Asset is always the total amount of assets in the basket when their prices are all equal.

#### Stable Swap

Stable Swap is a DEX built on top of the basket which is backing Swap Asset. It serves several purposes in the systems.

* First, it enhances the capital efficiency of the baskets. Instead of staying still, the asset basket is used as DEX;
* Second, it helps maintain peg of Stable Asset. Since the prices of individual asset might shift over time, DEX users can adjust the basket composition in order to reflect the current underlying asset value;
* Third, the trading fee, along with the Stable Asset redemption fee, provide native yield to the Stable Asset holders.

Stable Swap component is built with Curve's StableSwap algorithm with enhancement to better support the value of Stable Asset.

#### Stable Savings

Stable Saving is a savings component that provides native interest to Stable Asset holders. The interest is generated from the trading fee from Stable Swap and redemption fee from Stable Asset. NUTS Finance is a blockchain development DAO. We build open source, secure and composable technology solutions to empower developers and financial services providers to launch decentralized financial applications on the blockchain.

### Ecosystem Fit

Equilibrium is planning to deliver a [Curve AMM](https://github.com/w3f/Open-Grants-Program/blob/master/applications/curve_amm.md) which is also based on StableSwap algorithm. Stable Asset, on the other hand, is a synthetic asset protocol built on top of the StableSwap algorithm with the following enhancement worth highlighted:

* Liquidity providers received a strongly peg asset instead of LP token so that they don't lose usability of their assets;
* Users of the DEX helps the synthetic assets to maintain peg in cases of asset price shift;
* Holders of Stable Asset have native interest coming from the system itself.

## Team :busts_in_silhouette:

### Team members
* Daniel Tang, Co-founder
* Terry Lam, Co-founder

### Contact
* **Contact Name:** Terry Lam
* **Contact Email:** terry@nuts.finance
* **Website:** [https://acoconut.fi/](https://acoconut.fi/)

### Legal Structure
* **Registered Address:** PO Box 309, Ugland House, Grand Cayman, KY1-1104, Cayman Islands
* **Registered Legal Entity:** ACoconut

### Team's experience
NUTS Finance is a blockchain development DAO. Our team is composed of experienced developers, financiers and serial entrepreneurs. We build open source, secure and composable technology solutions to empower developers and financial services providers to launch decentralized financial applications on the blockchain.

### Team Code Repos
* https://github.com/nutsfinance

### Team LinkedIn Profiles
* https://www.linkedin.com/in/joeztang
* https://www.linkedin.com/in/terry-lam-80a71927

## Development Roadmap :nut_and_bolt:

### **Overview**

* **Total Estimated Duration:** 1 month
* **Full-time equivalent (FTE):** 2
* **Total Costs:** 30,000 DAI

### **Milestone 1 — Implement Stable Swap Module**

* **Estimated Duration:** 1.5 week
* **FTE:** 2
* **Costs:** 10,000 DAI

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0 | License | Apache 2.0 / MIT / Unlicense |
| 1 | Documentation | Provide documentation on components, working algorithms, and deployment processes |
| 2 | Substrate module: algorithms | This module will contain core stable swap functionalities including:<br>computeD<br>computeDy<br>computeSwapAmount<br>swap |
| 3 | Smart Contracts | A repository on GitHub contains smart contracts related to stable swap module that can be deployed using Ink! |
| 4 | Testing | Comprehensive tests that cover smart contracts and substrate modules |  
| 5 | Docker | Provide a docker image with a Substrate chain that demonstrates this project |   

### **Milestone 2 — Implement Stable Asset Module**

* **Estimated Duration:** 1.5 week
* **FTE:** 2
* **Costs:** 10,000 DAI

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0 | License | Apache 2.0 / MIT / Unlicense |
| 1 | Documentation | Provide documentation on components, working algorithms, and deployment processes |
| 2 | Substrate module: algorithms | This module will contain core functionalities for stable asset including:<br>getMintAmount<br>mint<br>getRedeemProportionAmount<br>redeemProportion<br>getRedeemSingleAmount<br>redeemSingle<br>getRedeemMultiAmount<br>redeemMulti |
| 3 | Smart Contracts | A repository on GitHub contains smart contracts related to stable asset module that can be deployed using Ink! |
| 4 | Testing | Comprehensive tests that cover smart contracts and substrate modules |  
| 5 | Docker | Provide a docker image with a Substrate chain that demonstrates this project |  

### **Milestone 3 — Implement Stable Saving Module**

* **Estimated Duration:** 1 week
* **FTE:** 2
* **Costs:** 10,000 DAI

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0 | License | Apache 2.0 / MIT / Unlicense |
| 1 | Documentation | Provide documentation on components, working algorithms, and deployment processes |
| 2 | Substrate module: algorithms | This module will contain core functionalities on stable saving module including:<br>collect fees in stable asset<br>distribute fees in stable saving. |
| 3 | Smart Contracts | A repository on GitHub contains smart contracts related to stable saving that can be deployed using Ink!  |
| 4 | Testing | Comprehensive tests that cover smart contracts and substrate modules |  
| 5 | Docker | Provide a docker image with a Substrate chain that demonstrates this project |  


## Future Plans

We are going to launch token economics and governance to support the system.

We are also going to launch multiple Stable Assets on Polkadot and reach DeFi applications for community adoption.


## Additional Information :heavy_plus_sign:

We've successfully launched our first StableAsset, [acBTC](https://app.acbtc.fi/), on Ethereum. It receives positive feedback from the community and reaches peak total supply of 577 acBTC. The source code for acBTC can be found [here](https://github.com/nutsfinance/acBTC).

Stable Asset is different in that:

* Stable Asset is a Substrate module in Polkadot ecosystem;
* Stable Asset is a generic asset module which allows anyone to create synthetic value peg asset with integrated swap and saving functionalities.
