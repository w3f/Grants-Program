# Open Grant Proposal

* **Project:** Banksy Finance

* **Proposer:** Clink Li

* **Payment Address:** 0x111767Cb725C92f06031570Cf2dfb694EbD25bf6

* **Status:** [Terminated](https://github.com/w3f/Grants-Program/pull/495#issuecomment-980596405)
  


## Project Description :page_facing_up:

The lack of options for loans collateralized by NFTs is the consequence of the larger challenge of NFT liquidity and defining the NFT assets’ price. The same problem fungible (ERC-20) tokens faced before AMMs (automated market makers) were introduced. Once it is solved and an efficient price discovery mechanism is created, NFTs backed loans will experience a boom.

In the overall market, loans can release asset values and provide the NFT with much-needed liquidity.

The existing NFT lending platforms in the market, including NFTfi, UpShot One, NFT20, and other projects, all adopt the P2P lending model. The disadvantages are that there is no NFT price evaluation mechanism, and it is difficult for debtors and creditors to find the exact matching businesses. In addition, NFT liquidity is extremely limited. So, the lenders have to bear a lot of risks in P2P lending.

### Overview

Banksy Finance is a decentralized AI-driven NFT Pool-based lending hub, dedicated to addressing the issues of the NFT market, providing a complete solution for NFT mortgage lending that is different from the P2P lending model. It supports mortgage NFT for loans directly on the platform, without requiring both lenders and borrowers to an agreement. It is the first NFT pool-based lending platform in the market.

* NAK Protocol

  Banksy Finance first integrated AI technology in the NFT market and provided a reliable NFT pool-based lending solution to address the issues for the market.

  Banksy has developed a set of **AI-driven NFT AI KIT**, which is an NFT market-based artificial intelligence algorithms toolset, referred to as the NAK protocol. The NAK protocol includes the following features:

  1. **Base Analysis**: It will timely collect and analyse the data from different Chains, including NFT creator information, attributes, historical transactions, media coverage, community status, popularity, and other information for evaluation of NFT value trend and NFT public opinion trend.

  2. **Originality Check**: Banksy would extract all NFT characteristics to compose corresponding feature vectors, calculate NFT feature Hash value by the encryption algorithm, and carry out Originality Check for all created NFT.

  3. **AI-Assisted NFT Creation**: Banksy uses an AI algorithm of image style migration to generate NFT of specified style and content to help artists create better and faster.

  4. **AI Oracle For NFT**: Banksy integrates the data Analysis results of Base Analysis, uses a machine-learning algorithm to calculate the NFT price in real-time, and feeds the price to oracle.

* **NFT lending pool**

  Based on the NAK protocol, Banksy built the NFT pool-based lending platform to provide effective funds security for lenders and meet the needs of NFT holders and lenders.

  **Lenders**: Users are welcome to deposit their funds (like ETH, USDT) in the Lending Pool for earning interest.  The funds will exchange for c-tokens and mortgages for a loan of other mainstream tokens. They will also get the rewards of Banksy native tokens KSY.

  **Borrowers**: Users can mortgage NFTs in the mortgage contract and get a reference price through AI Oracle. Exchange for corresponding c-tokens to mortgage and take a loan from Lending Pool. It helps to get flexible cash flow for borrowers
  
  **Liquidator**: When the Health Factor was closed to 1 that means the collateral value is not properly covered by the value of the loan, the liquidation risk NFTs will be list out for all users. Users can pre-pay as liquidators and get the NFTs when the Health Factor falls below 1 to initiate liquidation. They will receive the KSY tokens as incentives.

### Project Details



* **NFT Pool-based mortgage lending**

![arch](https://user-images.githubusercontent.com/23376179/126989384-e4ef07f5-4dd0-451e-8d2b-aff9377bfa31.png)

 To ensure the healthy and sustainable NFT mortgage lending business development on the platform, Banksy has designed the following mechanisms: 

1. Whitelist

   By community voting, the pool-based lending business will support series of NFT works, such as the CryptoKitties series and the Bored Ape Yacht series. Introduce high-quality NFT works to eliminate worthless NFT works, thereby ensuring the quality of the NFT works in the platform and ensuring the security of the funds. 

2. Mortgage Rate

   By NAK protocol, the mortgage rate intelligently changes according to the multi-dimensional comprehensive evaluation and analysis of lending, loan demand, and NFT valuation of the whole platform to maintain a reasonable and healthy boundary.

3. Lending Rate

   The lending rate will intelligently change according to the borrowing demand, capital stock, interest rate fluctuation, and so on to ensure the liquidity and safety of the funds through the NAK protocol.

4. Liquidation mechanism

   NAK protocol will real-timely monitor and analysis the comprehensive data of collateral NFT to make value anticipation. When the NFT price fluctuates to affect the safety of lending money, the NAK protocol will notify the system to trigger the liquidation mechanism. All users of the Banksy platform will have the right to participate in the liquidation for a lower price and benefit from the liquidation. Meanwhile, we will also reward users for participating in the liquidation.

5. Safety fund pool

   We set up a Safety Funds Pool where users can stake KSY and KSY/ETH trading pairs in the pool for revenues and rewards from the platform.  In case of capital loss, the safety funds pool will use up to 30% of the assets locked to cover the deficit.  It will ensure the funds when the shortfall event occurs.

6. Platform revenue sharing
   
   Since the users are taking certain risks for staking their funds, Banksy will give incentives and platform revenue to stakes. 



* **AI Oracle**

  **Oracle algorithm**
  
  The open and transparency of NFT transaction data in the chains allow access to historical transactions, NFT attribute information, NFT creator information, and NFT popularity information (including Twitter attention, major media NFT attention). It will facilitate a comprehensive analysis of NFT value and trend forecast. 
  
  Banksy will aggregate all the transaction data, take the transaction price and experts estimate as to the machine learning labels of sample data, and take all the relevant data of NFT as sample attribute data for the model training through machine learning algorithms. It will set out a reasonable model of machine learning. 
  
  The real-time attribute data of NFT is used as the model input to predict the NFT price with the machine learning model. It finally multiples with a valuation coefficient to serve as the real-time reference price, as shown in the figure below:



![ml](https://user-images.githubusercontent.com/23376179/125627056-7d95c24f-4816-435a-9b24-0aa802a01095.png)

​	**Decentralized deployment**

AI Oracle uses a decentralized oracle deployment, as shown in the following picture. The machine learning model calculates at AI Node, with data input provided by the Data sources node. Not the only one predictor node O is in the network, but n different predictor nodes (O1, O2,......, On). Each predictor Oi has its data sources that may not overlap. Oi takes and aggregates the data from the data sources and sends its own aggregated data Ai to request Req. BANKSY-SC will calculate A-Agg (A1, A2,...... using the number of Agg letters an) and return result A to USER-SC.

![oracle](https://user-images.githubusercontent.com/23376179/125627346-46f4e267-9541-4327-89ff-efdc3accc0a7.png)



**Banksy-Oracle workflow**

1. User-SC initiates on-chain requests. 
2. Banksy-SC records events for Oracle.
3. Banksy-AI-Node receives the event log and performs the task, request data from external API.
4. Banksy-AI-Node processes the returned data and returns the processing result.
5. Banksy-AI-Node core software sends data back to Banksy-SC.
6. Banksy-SC aggregates the data into a single data and returns it to User-SC.

### Ecosystem Fit

The NFT trading platforms launched in the Polkadot ecosystem include NFTmart, Starry Network, DNFT, and Vera Defi. Only DNFT and Vera are involved in NFT lending, and they are all P2P models with many limitations.

Banksy breaks through the P2P lending and supports users to directly mortgage NFTs in the platform pool, where Oracle conducts valuation and risk assessment and has a safety funds pool to guarantee their funds. The platform also supports users to liquidate their collateral that exceeds the threshold of the health factor. The entire solution balances the risks and benefits of the NFT mortgage pool and the safety funds pool to ensure the safety of funds.


## Team :busts_in_silhouette:

### Team members

* **Clink Li**：[Linkdin](https://www.linkedin.com/in/clink-li-aa1ba418a/)
* **Chris Su** : [Github](https://github.com/chrissoso)
* **Wei Jiang** : [Github](https://github.com/GleipnirJ)
* **Roger Luo** : [Github](https://github.com/luojie1024)
* **Chen Chen** : [Github](https://github.com/cchen1101)
* **Peihuang Guo** : [Github](https://github.com/Disperito)
* **Chengyang Lin** : [Github](https://github.com/linchengyang1116)


### Contact

* **Contact Name:** Clink Li
* ***Contact Email:***  contact@banksy.finance

### Team's experience

Team members have rich development experience, including algorithm, front-end development, back-end development, Smart contract development, etc. We have participated in the development of Defi projects. The team has in-depth research and accumulation of blockchain technology.

### Team Code Repos

* https://github.com/Banksy-Finance

### Overview

* **Total Estimated Duration:** 2 months
* **Full-time equivalent (FTE):** 6
* **Total Costs:**  DAI 8500

### Milestone 1 -- Implementation of NFT pool-based lending

* **Estimated Duration:** 2 month
* **FTE:** 6
* **Costs:** DAI 8500 


| Number | Deliverable        | Specification                                                |
| ------ | ------------------ | ------------------------------------------------------------ |
| 0a.    | License            | Apache License 2.0                                           |
| 0b.    | Documentation      | Document includes the business and technical framework of NFT pool-based Mortgage Lending,  as well as tutorials for Dapp users, including video tutorials. We will also provide NFT mortgage lending protocol and code calling instructions, and provide NFT pool-based mortgage lending infrastructure for other applications in the ecosystem. |
| 0c.    | Testing Guide      | We will provide Banksy with a complete test suite and guide. The code will cover the unit tests of the main functions of NFT mortgage lending to ensure the robustness of business functions. |
| 0d.    | Article/Tutorial   | We will write an article or tutorial that explains the work principle as part of the grant. |
| 1a.    | Node Repo          | Complete the deploment of the basic public chain.            |
| 2a.    | Pallet_lending     | We will complete the development of the NFT pool-based lending protocol and business, and run it on the test chain. |
| 2b.    | Pallet_safetypool  | We will complete the design and development of the pallet_safetypool model, including auction module, backstop module and ecosystem reserve. |
| 2c.    | Pallet_mortgage    | We will complete the design and development of Pallet_mortgage, including the real-time output module of NFT valuation and mortgage rate, the NFT mortgage contract module, and the user's cToken calculation module. |
| 2d.    | Pallet_liquidation | We will complete the design and development of the Pallet_liquidation mechanism to support users to liquidate and benefit from NFTs with financial risks, including the NFT liquidation list module, liquidation protocol module, liquidation reward and penalty module. |
| 2e.    | Pallet_dao         | We will complete the design and development of the Pallet_dao mechanism, including whitelist voting for the NFT series, banksy development voting, and dividend module. |
| 3.     | UI/Desgin          | Design UI based on the pahse mockup.                         |
| 4.     | User Interface     | Build the UI on top of the smart contract functionalities and base on the design. |
| 5.     | Docker             | Well will provide a dockerfile to demonstrate the full functionality of the application. |


## Future Plans

- We will keep enriching the types of NFT collateral and further enhance the liquidity of NFT.
- We will keep adjusting the model for AI training in Oracle to make it more objective and timelier to present the price of NFT.
- We will continue to develop and optimize the NAK protocol, and open the NAK protocol to the entire industry at the right time. As part of the NFT market infrastructure, the NAK protocol will help the NFT market develop healthier and faster.



## Additional Information :heavy_plus_sign:

* Dapp: http://app.banksy.finance/
* Website：http://www.banksy.finance/
* Discord：https://discord.gg/NdRGt4BDFe
* Twitter: https://twitter.com/banksy_finance
* Telegram: https://t.me/Banskyfinance

