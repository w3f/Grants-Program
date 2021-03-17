# W3F Open Grant Proposal

* **Project Name:** Stable Asset
* **Team Name:** NUTS Finance
* **Payment Address:** 0x679824d755B054a2a50358008472a6F400740319

## Project Overview :page_facing_up:

### Overview

There are vastly emerging assets in the Polkadot ecosystem, including both Polkadot native assets and assets bridged from other blockchains such as Ethereum and EOS. These assets introduce diversity in architecture and business model, but also fragmentizes the ecosystem since applications need to build separate markets for each of these assets. For example, stables coins can be divided into three categories: fiat-backed, crypto-backed and algorithmic stable coins, and on Ethereum each category has more than ten stable coin protocols. DEX benefits from such asset diversification but other protocols such as lending and options find it difficult to accommodate all these various assets.

Asset synthesis is a common approach to unify asset values and hedge asset risks. One approach is to synthesize several mainstream assets or assets belonging to the same niche so that the synthetic assets represents the general trend of the underlying assets. In this approach the synthetic assets acts similiar to an index fund, and how to fairly price and adopt the synthetic assets becomes a new question. The second approach is to synthetize several assets of the same value peg such as BTC, ETH or USD. The synthetic asset has the same value peg, and it could simplifies financial application development since only one synthetic asset needs to be supported for each peg type.

Stable Asset is an asset synthetic protocol of the second approach. It is also built with integrated swap and saving functionalities using the basket of assets.

### Project Details

The Stable Asset is an asset synthetic protocol based on Curve's StableSwap algorithm as shown below:

![Stable Swap Algorithm](https://lh6.googleusercontent.com/i6owf1R5cUcc8lQtPTouisnVsj1Dt3xeCyeC_XcSjLPBCk1glLh_ZHx5GUa_f5WhsrkXJZx-PKfy8dxxrl1YjDsy-suFyXeU0vx1i6zp82lK7__NCR-HcE5cxEZ0FmaACfH8Ah7z)

Widely adopted as swap algorithm among assets with the same peg, it also works perfectly as an asset synthesis algorithm with a basket of assets with the same peg due to the following properties:

* When the prices of all underlying assets in the basket are equal, the number of each underlying assets in the baskets are equal as well. At this moment, the value of the synthetic asset equals the total number of underlying assets in the basket, and the collateral ratio reaches 100%;
* Whenever the price of any underlying asset differs from each other, the value of StableAsset is smaller than the total number of underlying assets so that the collateral ratio is larger than 100%. Since all assets in the baskets are of the same value peg, their prices should fluctuate about the peg prices with low variation expected so that the overall collateral ratio should be slightly over 100%;
* Users of the underlying swap can help to maintain the basket balance subject to underlying assets price shift.

The Stable Asset system consists of three major components: Stable Asset, Stable Swap and Stable Savings.

#### Stable Asset

Stable Asset is a synthetic asset with value peg such as BTC or USD. It's backed by a basket of assets with similar peg, and it provides more reliability and better peg compared to individual asset in the basket.

The value of Stable Asset is derived from Curve's StableSwap algorithm. When there is shift in price from individual asset in the basket, the value of Stable Asset remains unchanged: The total value of Stable Asset is always the total amount of assets in the basket when their prices are all equal.

#### Stable Swap

Stable Swap is a DEX built on top of the basket which is backing Swap Asset. It serves several purposes in the systems.

* First, it enhances the capital efficiency of the baskets. Instead of staying still, the asset basket is used as DEX;
* Second, it helps maintain peg of Stable Asset. Since the prices of individual asset might shift over time, DEX users can adjust the basket composition in order to reflect the current underlying asset value;
* Third, the trading fee, along with the Stable Asset redemption fee, provide native yield to the Stable Asset holders.

Stable Swap component is built with Curve's StableSwap algorithm with enhancement to better support the value of Stable Asset. It's different from the Curve DEX in that:

* Its value composition is calculated based on the instrinic value of the Stable Assets instead of value of the underlying assets;
* It has more robust and flexible basket management functionalities which are not required in DEX;
* It's optimized in asset value computation.

#### Stable Savings

Stable Saving is a savings component that provides native interest to Stable Asset holders. The interest is generated from the trading fee from Stable Swap and redemption fee from Stable Asset. NUTS Finance is a blockchain development DAO. We build open source, secure and composable technology solutions to empower developers and financial services providers to launch decentralized financial applications on the blockchain.

### Ecosystem Fit

Equilibrium is planning to deliver a [Curve AMM](https://github.com/w3f/Open-Grants-Program/blob/master/applications/curve_amm.md) which is also based on StableSwap algorithm. Stable Asset, on the other hand, is a synthetic asset protocol built on top of the StableSwap algorithm with the following enhancement worth highlighted:

* Liquidity providers received a strongly peg asset instead of LP token so that they don't lose usability of their assets;
* Users of the DEX helps the synthetic assets to maintain peg in cases of asset price shift;
* Holders of Stable Asset have native interest coming from the system itself.

In short, Equilibrium is a DEX while uses the bonding curve to compute the balance of the underlying assets, while StableAsset is a synthetic asset which uses the bonding curve to maintain the derived value of the basket.

Similar to Equilibrium, [Sunrise DEX](https://github.com/w3f/Open-Grants-Program/blob/master/applications/sunrise-dex.md) is a DEX that focuses on swap functionalities. On the other hand, StableAsset focus on asset synthesis and the Stable Swap module is an internal system that helps keep the basket balanced.

Laminar is an over-collateralized synthetic asset protocol that uses various underlying assets to generate a value pegged assets. StableAsset is highly optimized for asset synthesis with a basket of assets with the same peg, and it can achieve a collateral ratio closed to 100%.

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
* **Total Costs:** 20,000 DAI

### **Milestone 1 — Implement Stable Swap Module**

* **Estimated Duration:** 1.5 week
* **FTE:** 2
* **Costs:** 7,000 DAI

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0 | License | Apache 2.0 / MIT / Unlicense |
| 1 | Documentation | Provide documentation on components, working algorithms, and deployment processes |
| 2 | Substrate module: Stable Swap Substrate module | This module will implement [core Stable Swap algorithm](https://docs.acoconut.fi/asset/acbtc/algorithm) to maintain balance of the basket, e.g.<br>computeD<br>computeDy<br>computeSwapAmount<br>swap.<br> Part of the algorithm is implemented in Solidity in acBTC's [ACoconutSwap](https://github.com/nutsfinance/acBTC/blob/master/contracts/acoconut/ACoconutSwap.sol) contract.  |
| 3 | Testing | Comprehensive tests that cover Stable Swap Substrate module |  
| 4 | Docker | Provide a docker image with a Substrate chain that demonstrates this project |   

### **Milestone 2 — Implement Stable Asset Module**

* **Estimated Duration:** 1.5 week
* **FTE:** 2
* **Costs:** 7,000 DAI

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0 | License | Apache 2.0 / MIT / Unlicense |
| 1 | Documentation | Provide documentation on components, working algorithms, and deployment processes |
| 2 | Substrate module: Stable Asset Substrate module | This module will contain core functionalities for Stable Asset, which includes both how Stable Asset is minted/redeemed, e.g.  <br>getMintAmount<br>mint<br>getRedeemProportionAmount<br>redeemProportion<br>getRedeemSingleAmount<br>redeemSingle<br>getRedeemMultiAmount<br>redeemMulti,<br> and how the basket assets are managed. The first part is partly implemented in Solidity in acBTC's [ACoconutSwap](https://github.com/nutsfinance/acBTC/blob/master/contracts/acoconut/ACoconutSwap.sol) contract. |
| 3 | Testing | Comprehensive tests that cover the Stable Asset Substrate modules |  
| 4 | Docker | Provide a docker image with a Substrate chain that demonstrates this project |  

### **Milestone 3 — Implement Stable Saving Module**

* **Estimated Duration:** 1 week
* **FTE:** 2
* **Costs:** 6,000 DAI

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0 | License | Apache 2.0 / MIT / Unlicense |
| 1 | Documentation | Provide documentation on components, working algorithms, and deployment processes |
| 2 | Substrate module: Stable Saving Substrate module | This module will contain core functionalities on stable saving module including:<br>collect fees in stable asset,<br>distribute fees in stable saving,<br>generate additional yield with the underlying assets. |
| 3 | Testing | Comprehensive tests that cover Stable Saving Substrate modules |  
| 4 | Docker | Provide a docker image with a Substrate chain that demonstrates this project |  


## Future Plans

We are going to launch token economics and governance to support the system.

We are also going to launch multiple Stable Assets on Polkadot and reach DeFi applications for community adoption.


## Additional Information :heavy_plus_sign:

We've successfully launched our first StableAsset, [acBTC](https://app.acbtc.fi/), on Ethereum. It receives positive feedback from the community and reaches peak total supply of 577 acBTC. The source code for acBTC can be found [here](https://github.com/nutsfinance/acBTC).

cBTC is an implementation of the core algorithm and used to prove our concept in Ethereum. The StableAsset will be a full-fledged asset protocol with the following anhancements:

* Stable Asset is a Substrate module in Polkadot ecosystem;
* Stable Asset is a generic asset module which allows anyone to create synthetic value peg asset with integrated swap and saving functionalities;
* Stable Asset provides complete and flexible asset management solutions which is currently not available in acBTC.
