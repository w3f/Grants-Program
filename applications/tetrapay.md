***TetraPay***

 

***Project Introduction***

TetraPay designed Tetra currency to act as an algorithmic stable currency. We retain its highly decentralized characteristics, and we guarantee the Tetra currency has a relatively stable price through algorithms and protocols. We hope TetraPay can become a widely used means of payment. To achieve this goal, a relatively stable value is not enough. The system will also provide a higher incentive ratio for users who save regularly, obtaining a return on investment significantly higher than any commercial bank’s interest rate. We believe that the performance of TetraPay will gradually attract users and expand its scope of use.



***MORE THAN JUST A WALLET***

1:1 anchored digital stable currencies issued relying on banks, settlement agencies, and commercial institutions in each country; ensuring value anchoring through strict mathematical models, and relying on financial services such as savings, wealth management, lending, staking and other financial services to ensure user profitability while removing hidden costs in currency circulation. Our goal is to achieve a free flow of various anchored currencies.

Manage, exchange and invest your assets with our multichain portfolio. TetraPay will offer users with a safe and practical solution for a new era in mobile payment and financial possibilities.

***Fast Real-Time Confirmation:*** Using Polkadot's cross-chain protocol, assets can be directly pledged or liquidated into local fiat currency, quickly settled, and confirmed in milliseconds.

***Deep Learning Mode:*** Original Rui's algorithm is based on the combination of machine learning, artificial intelligence and offline economic models, so that the exchange rate have minimal fluctuations and is more convenient for offline payments.

***Agency Payment Mechanism:*** Merchants bear the gas cost when users pay,so that the user can pay without loss, and the merchant will receive a subsidy to offset the gas costs.

 

***Development and Services***

![img](https://raw.githubusercontent.com/tetrapay/Documentation/master/picture/drawings1.jpg) 

***VALUE-EXCHANGE RATE ORACLE***

Our core goal is to enable TetraPay currency to maintain its purchasing power, have a long-term stable value, and gradually develop into a medium for large-scale transactions and savings. Therefore, TetraPay currency first needs to have a clear value, and keep its price fluctuating within a narrow range around the value.

First the exchange rate of a legal tender cannot be read directly on the blockchain. Secondly, TetraPay currency has a time-sensitive price in the secondary market and is also exogenous to the blockchain, so the agreement must rely on a decentralized method and technology to estimate the real exchange rate.

***EXCHANGE RATE PREDICTION MACHINE***

\- Regarding TetraPay currency price, the miners initiate a vote, and the voting content is the exchange rate to a legal tender.

\- After a certain number of blocks, we count votes and take the median as the current exchange rate of the real TetraPay currency.

\- According to the final voting exchange rate, a range of exchange rates centered on the final exchange rate is delineated. A certain amount of incentives will be used to reward miners who vote within this range. Miners who vote outside this range will be punished.

\- The system adjusts the scope of rewards and punishments every time to ensure that enough miners participate in voting.

This voting mechanism ensures that the exchange rate will remain fluctuating within a narrow range, because those who maintain stability will be rewarded, and those who are dishonest will be punished. But we still need to consider the attacking behavior of the saboteur on the mechanism.

***LONG-TERM STABLE DEVELOPMENT-INCENTIVE MECHANISM***

Miners in TetraPay currency Play a vital role in the system. On one hand, the miners participated and maintained the PoS consensus, therefore the TetraPay currency system provides a security guarantee. On the other hand, the miners have absorbed TetraPay currency fluctuations in a short period thereby bearing the cost of shrinking the money supply and realized a stable TetraPay currency System.

***AUXILIARY CURRENCY PAYARA***

TetraPay currency is a decentralized digital currency, when the system detects any deviation of the exchange rate of the legal tender, it is necessary to put pressure on prices through algorithms and agreements to normalize prices. Like any other market, TetraPay currency has the market following simple rules of supply and demand, shrinking the supply of currency will result in higher relative currency prices. That is, when the exchange rate level is lower than the target level, a sufficient reduction in the money supply will restore the price level to normal.

In the same method, expanding the money supply will result in a lower relative currency price. That is, when the exchange rate level is higher than the target level, a sufficient increase in the money supply will restore the price level to normal.

The specific implementation of the above method is through our system protocol, algorithm, and auxiliary currency PAYARA. TetraPay currency Issuance on the POS consensus type blockchain, miners need to mortgage payara in it to proceed TetraPay currency mining. Similar to other POS consensus, the number of payara owned determines the mining rights of miners. In each block cycle, the agreement will select a block producer from the secured miners, who are responsible for summarizing transactions, reaching a consensus among miners, and ensuring that messages are correctly distributed in a short time to produce the next block.

How do we use payara to make the exchange rate of TetraPay currency remains stable, which is  an important part of the agreement? Simply put, to achieve the above requirements, we allow anyone to exchange between payara and TetraPay currencies at the target exchange rate.

Specifically, from a long-term perspective, the total amount of payara is unchanged, it has a stable demand, so although miners have absorbed the contraction cost of TetraPay currency, its  long-term benefits can be guaranteed. Further, the Protocol and algorithm miners will also be incentivized to ensure that miners who maintain the stability of the currency system will be rewarded.

![img](https://raw.githubusercontent.com/tetrapay/Documentation/master/picture/Drawings2.jpg) 

 

***Team Members***

Renato - Once the Head of Brazil and LATAM of Elex and Chief Representative of Oasis Games, has more than 9 years of overseas game publishing experience. Graduated from Pontifícia Universidade Católica de São Paulo, he’s experienced in development, publishing and market strategy of Digital & Entertainment products and services. Also a researcher and enthusiast of Blockchain Technology, Cryptocurrency and Startups.

Vincent: Main developer of the mainchain. Designed quantitative trading platforms for multiple exchanges.

Otto: Software architecture and project manager. He has been engaged in software design and architecture for more than ten years. He has built a social platform with hundreds of millions of users. In 2017, he started to develop the blockchain main network.

Pawn: Core algorithm support, Bachelor of Mathematics and Applied Mathematics from Shandong University, PhD in Cyberspace Security from Institute of Information Engineering, Chinese Academy of Sciences. The research direction is cryptography, blockchain and privacy protection.

***Project Github***

https://github.com/tetrapay/

***Project Website***

https://tetra.cash/


***Legal Estructure***

Tetra Pay Ltda. (São Paulo – Brazil)

***Development Roadmap***

Grant Application of  1.6 BTC

Receiving address: 1H7FpnssaTZ8Gj5LRw5Da7dJr4XCQCv2Rx

***Stablecoin Algorithm (3 months)***

**###** **Milestone 1 - Basic modules development**

* **Estimated Duration:** 6 Week

* **FTE:**  3

* **Costs:** 0.8  BTC

  

| Number | Deliverable     | Specification                                                |
| ------ | --------------- | ------------------------------------------------------------ |
| 0a.    | License         | Apache 2.0                                                   |
| 0b.    | Documentation   | We will provide code documentation to explain how users can start chain nodes and how to use off-chain workers as miners to enter Oracle prices and calculate reasonable prices. Record the deviation value for miners based on price. (Punishment is not in this module) |
| 0c.    | Testing Guide   | This unit will cover multi-currency price import test, value test, and miner working status test |
| 1.     | Price Interface | Develop a price acquisition protocol, implement Payara price setting interface (miners set Payara prices), TetraX price setting interface (miners set Tetra stablecoin prices), price calculation module: time-weighted prices from all miners, the price is time-effective and calculated with the miner’s score. Miner scoring module: After comparing the miner’s input price with the final price, scoring and grading: low score miners (below 60) will be eliminated directly, intermediate miners (60-80) will not be settled, high score miners(more than 80) do settlement. |
| 2.     | Tetra Protocol  | Implement the multi-currency stablecoin algorithm. Price calculation module: Realize Payara-TetraX price calculation, market deviation rate calculation, stable volume calculation (the optimal maximum volume to smooth the price difference), TetraX-TetraY optimal transaction path and volume price  calculation. |

 



**###** **Milestone 2 - Stalecoin MVP realization**

* **Estimated Duration:** 6 Week
* **FTE:**  3
* **Costs:** 0.8 BTC

| Number | Deliverable   | Specification                                                |
| ------ | ------------- | ------------------------------------------------------------ |
| 0a.    | License       | Apache 2.0                                                   |
| 0b.    | Documentation | At this stage, we have to complete all the functions, including the exchange of Payara-TetraX and TetraX-TetraY and the detailed exchange rate output when the price fluctuates. And realize the casting and destruction of TetraX. |
| 0c.    | Testing Guide | Test Guide This stage will have an overall interface test case and a Docker demo |
| 1.     | TetraExchange | Realize single stablecoin Payara-TetraX exchange module, multi-currency stablecoin TetraX-TetraY free exchange module. |
| 2.     | TetraFactory  | Realize the burn and minting of TetraX. When the price of Tetra local currency is higher than the price of legal currency, the module triggers the minting to increase liquidity and stabilize the price. When the price of Tetra local currency is lower than the legal currency, the module triggers the burn to maintain price stability. |