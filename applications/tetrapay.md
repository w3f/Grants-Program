# Open Grant Proposal


* **Project:** TetraPay
* **Proposer:** constance
* **Payment Address:** DAI：0xB26d568cB9E944b1ce8F5FA27625577b393B4F46 


## Project Overview :page_facing_up: 

### Overview

TetraPay is a new generation of algorithmic stablecoin. We hope that it will be stable enough and become a wide range of payment methods. We keep it relatively stable by setting aside reserve funds, encouraging savings and a market-led algorithm model.
The application is part of the prediction and algorithm for the realization of a stable currency Tetra.

## Project Details 

### Monetary Policy

#### TetraX
Stable exchange medium, deflation and inflation will follow market economic behavior. What is to be realized in this application is TetraUSD pegging to USD.

#### Payara
Payara token serves as the most immediate defense against TetraX price fluctuations. The system uses Payara to make the price for TetraX by agreeing to anyone looking to swap Trtra and Payara at target exchange rate.

#### Reserve Fund
Reserve fund, used to guarantee the market arbitrage behavior when TetraUSD is lower than 1USD in a deflationary state. The initial value is 20% of Payara's overall tokens.

### Interface module

#### Price Interface
Miner price acquisition module, miners need to put Payara and TetraUSD price through this module.

#### Exchange Factory
The exchange model, the exchange between TetraUSD and Payara, as well as the inflation and deflation module and external interfaces. Users can make transactions by calling this module.

### Algorithm Mechanism

In order to ensure that 1 TetraUSD is anchored to 1 USD, the Tetra protocol uses the PriceInterface module for price acquistion. The time-weighted average of all miner prices is collected every hour as the USD price. At the same time, the miner’s input data is scored and to update miner's weight. Every time the price is determined, the market will trade TetraUSD-Payara to obtain profit while restoring the anchor price of TetraUSD to USD. These exchanges occur in the following two situations:

#### Inflation 
When the value of 1 TetraUSD is higher than 1 USD, the user will exchange 1 USD worth payara for 1 TetraUSD, the exchanged Payara will be deposited into the Reserve fund, and at the same time system mint TetraUSD to the user, so that the number of TetraUSD increases, and the TetraUSD price falls back to the value of 1 USD.

#### Deflation
When the value of 1 TetraUSD is lower than 1 USD, the user can exchange 1 TetraUSD for 1 USD worth Payara, and the system will burn the TetraUSD and withdraw the corresponding Payara from the Reserve fund to the user, so that the number of TetraUSD decreases and the 1 TetraUSD price rises to the value of 1 USD.

In the long run, Payara will increase in price with the inflation of TetraUSD's economic scale, forming a virtuous circle. The Reserve Fund guarantees that Tetra can maintain value stability even when the economy scales deflation.


#### Flow chart

![img](https://raw.githubusercontent.com/tetrapay/Documentation/master/picture/Drawings2.jpg) 

### Ecosystem Fit 
We analyzed the typical stablecoin prototypes currently in the market and compared them with them:

| Solutions           | AMPL                           | Basis Cash          | Frax                       | Tetra                       |
| ------------------- | ------------------------------ | ------------------- | -------------------------- | --------------------------- |
| **Algorithm**       | Adjust the number of positions | Equity arbitrage    | Equity with mortgage       | Equity on chain margin      |
| **Inflation Model** | Minting, Dividend              | Minting, Dividend   | Minting, Dividend          | Minting, Dividend           |
| **Deflation model** | Burning positions              | Discounted holdings | Market arbitrage (partial) | Market arbitrage (complete) |
| **Stability**       | Unstable                       | Normally stable     | stable                     | Strongly stable             |

#### Stability analysis:： 

Since the principle of the forward arbitrage model in the market is basically the same, we compare the reverse arbitrage model to see its stability.

**AMPL**: When the currency price is low, it cannot attract external capital inflows, and it will enter a death spiral, making the currency price lower and lower.

**Basis Cash**： Introduce external funds through high-yield, but once the market is too pessimistic and long futures lose their appeal, they will still fall into a death spiral and make currency prices lower and lower.

**Frax**： When the currency price is low, arbitrageurs are promoted through the market to carry out arbitrage behavior. Due to some collateral, stable recovery is slower.

**Tetra**： When the currency price is low, arbitrageurs are promoted through the market to carry out arbitrage behavior, and the chain margin guarantees rapid restoration of stability.


## Team :busts_in_silhouette:

### Team members
- Renato
- Constance
- Vincent

### Team Website	
- Github: https://github.com/tetrapay/
- Webside: https://tetra.cash/
- Twitter: https://twitter.com/TetraPay_App

### Legal Structure 
Tetra Pay Ltda. (São Paulo – Brazil)

### Team's experience
- Renato(CEO) - Once the Head of Brazil and LATAM of Elex and Chief Representative of Oasis Games, has more than 9 years of overseas game publishing experience. Graduated from Pontifícia Universidade Católica de São Paulo, he’s experienced in development, publishing and market strategy of Digital & Entertainment products and services. Also a researcher and enthusiast of Blockchain Technology, Cryptocurrency and Startups.

- Constance: Blockchain technology expert with many years of project management and design experience

- Vincent: The main developer of the main chain. He has designed the quantitative trading platform of multiple exchanges and is a full-stack engineer.


## Development Roadmap :nut_and_bolt: 

### Overview
* **Total Estimated Duration:** 6 week
* **Full-time equivalent (FTE):**  2.5 
* **Total Costs:** 10000 DAI

### Milestone 1 Example — Implement Substrate Modules 
* **Estimated Duration:**  6 Week
* **FTE:**  2.5
* **Costs:** 10000 DAI

| Number | Deliverable     | Specification                                                |
| ------ | --------------- | ------------------------------------------------------------ |
| 1 |License | Apache 2.0 / MIT / Unlicense |
| 2 |Description| Complete interface document|
| 3 |Test Guide|This unit will cover multi-currency price import test, value test and miner working status test|
| 4 |Article/Tutorial|We will write an article or tutorial explaining the work done as part of the grant. |
| 5 | Tetra pallet |We will create a substrate algorithm stablecoin pallet, which will implement: oracle price acquisition(Price Interface), mint and burn algorithms during Payara-TetarUSD deflation and inflation(Exchange Factory).|
|6|Front End|This webpage provides all the functions and faucet of the TetraPay to facilitate testing, and use Node.js/Vue to develop.|
|7| Docker  |We will provide a dockerfile to demonstrate the full functionality of our chain|


### Community engagement

## Future Plans
1. Mainnet will be launched in the first quarter of 2022
2. Explore online stablecoin contract signing and trading
3. The committee voted to anchor more stablecoins and assets
4. Exploring Tetra to become an unanchored stable currency
