# Open Grant Proposal


* **Project:** TetraPay
* **Proposer:** constance
* **Payment Address:** DAI：0xB26d568cB9E944b1ce8F5FA27625577b393B4F46 


## Project Overview :page_facing_up: 

### Overview

TetraPay is a new generation of algorithmic stablecoin. We hope that it will be stable enough and become a wide range of payment methods. We keep it relatively stable by setting aside reserve funds, encouraging savings and a market-led algorithm model.
The application is part of the prediction and algorithm for the realization of a stable currency Tetra.

### Project Details 
#####  Features

***Fast real-time confirmation: ***Using Polkadot's cross-chain protocol, assets can be directly mortgaged or liquidated into local legal tender, which can be liquidated quickly and confirmed within milliseconds.

***Adjustable prediction: ***Adjust the miner price upload based on the trusted node in real time, and adjust the node trust value according to the upload result.

***Institutional payment mechanism: ***Users can mortgage assets to deduct the transferred gasoline fee, and consumers can pay for the transferred gasoline fee by the merchant.

##### Model Principle

Our core goal is to stabilize the value of TetraPay currency and gradually develop it into a medium for large-scale transactions and savings. Therefore, TetraPay currency first needs to have a clear value and keep its price fluctuating within a narrow range around that value.

###### EXCHANGE RATE PREDICTION MACHINE

- Regarding TetraPay currency price, the miners initiate a vote, and the voting content is the exchange rate to a legal tender.

- After a certain number of blocks, we count votes and take the median as the current exchange rate of the real TetraPay currency.

- According to the final voting exchange rate, a range of exchange rates centered on the final exchange rate is delineated. A certain amount of incentives will be used to reward miners who vote within this range. Miners who vote outside this range will be punished.

- The system adjusts the scope of rewards and punishments every time to ensure that enough miners participate in voting.

This voting mechanism ensures that the exchange rate will remain fluctuating within a narrow range, because those who maintain stability will be rewarded, and those who are dishonest will be punished. But we still need to consider the attacking behavior of the saboteur on the mechanism.

###### LONG-TERM STABLE DEVELOPMENT-INCENTIVE MECHANISM

Miners in TetraPay currency Play a vital role in the system. On one hand, the miners participated and maintained the PoS consensus, therefore the TetraPay currency system provides a security guarantee. On the other hand, the miners have absorbed TetraPay currency fluctuations in a short period thereby bearing the cost of shrinking the money supply and realized a stable TetraPay currency System.

###### AUXILIARY CURRENCY PAYARA

TetraPay currency is a decentralized digital currency, when the system detects any deviation of the exchange rate of the legal tender, it is necessary to put pressure on prices through algorithms and agreements to normalize prices. Like any other market, TetraPay currency has the market following simple rules of supply and demand, shrinking the supply of currency will result in higher relative currency prices. That is, when the exchange rate level is lower than the target level, a sufficient reduction in the money supply will restore the price level to normal.

In the same method, expanding the money supply will result in a lower relative currency price. That is, when the exchange rate level is higher than the target level, a sufficient increase in the money supply will restore the price level to normal.

The specific implementation of the above method is through our system protocol, algorithm, and auxiliary currency PAYARA. TetraPay currency Issuance on the POS consensus type blockchain, miners need to mortgage payara in it to proceed TetraPay currency mining. Similar to other POS consensus, the number of payara owned determines the mining rights of miners. In each block cycle, the agreement will select a block producer from the secured miners, who are responsible for summarizing transactions, reaching a consensus among miners, and ensuring that messages are correctly distributed in a short time to produce the next block.

How do we use payara to make the exchange rate of TetraPay currency remains stable, which is  an important part of the agreement? Simply put, to achieve the above requirements, we allow anyone to exchange between payara and TetraPay currencies at the target exchange rate.

Specifically, from a long-term perspective, the total amount of payara is unchanged, it has a stable demand, so although miners have absorbed the contraction cost of TetraPay currency, its  long-term benefits can be guaranteed. Further, the Protocol and algorithm miners will also be incentivized to ensure that miners who maintain the stability of the currency system will be rewarded.

###### Flow chart

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
- constance
- Vincent

### Team Website	
- Github: https://github.com/tetrapay/
- Webside: https://tetra.cash/
- Twitter: https://twitter.com/TetraPay_App

### Legal Structure 
Tetra Pay Ltda. (São Paulo – Brazil)

### Team's experience
- Renato(CEO) - Once the Head of Brazil and LATAM of Elex and Chief Representative of Oasis Games, has more than 9 years of overseas game publishing experience. Graduated from Pontifícia Universidade Católica de São Paulo, he’s experienced in development, publishing and market strategy of Digital & Entertainment products and services. Also a researcher and enthusiast of Blockchain Technology, Cryptocurrency and Startups.

- constance: Blockchain technology expert with many years of project management and design experience

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
| 5 | Tetra pallet |We will create a substrate algorithm stablecoin pallet, which will implement: oracle price acquisition, mint and burn algorithms during Payara-TetarUSD deflation and inflation.|
|6|Front End|This webpage provides all the functions and faucet of the TetraPay to facilitate testing, and use Node.js/Vue to develop.|
|7| Docker  |We will provide a dockerfile to demonstrate the full functionality of our chain|

## ***Interactive diagram***

![img](https://raw.githubusercontent.com/tetrapay/Documentation/master/picture/flowChart.png) 

### Community engagement

## Future Plans
1. Mainnet will be launched in the first quarter of 2022
2. Explore online stablecoin contract signing and trading
3. The committee voted to anchor more stablecoins and assets
4. Exploring Tetra to become an unanchored stable currency
