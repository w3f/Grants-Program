# W3F Open Grant Proposal

* **Project Name:** X Predict Market
* **Proposer:** Wenzhu liang
* **Payment Address:** DAI：0x6e30f740A57a330de35D0ecE0ADF1eEc3D8C6c34


## Project Overview :page_facing_up: 

### Overview

X Predict Market is a decentralized prediction market. The objective of X Predict Market is to enable users to participate in the prediction process in various ways by creating topics, discussing, predicting and approving the results. Users are also incentivized by these engaging activities. Beyond the prediction, users can actively interact and socialize with each other within the social system. It is a way to gather people's wisdom to conduct historical analysis and future exploration. It can also benefit current decision-making. Therefore, our team wants to contribute to such a way to condense the wisdom of the people. It will be developed based on Polkadot's substrate framework.

### Project Details 

As an evolving decentralized prediction market, X Predict Market is composed of an initial proposal pool and a formal prediction pool. In the initial proposal pool, users can create a variety of interesting topics for prediction. Meanwhile, other users can vote on the feasibility of the topic, and it will enter the formal prediction pool after the vote is casted.

Each option will generate a token, of which the market making will be automatically conducted by the new Fixed Product Market Maker (referred to as FPMM). Users can make their own analysis and judgment on the potential results, and then obtain prediction tokens by exchanging assets. Users can receive governance token POT as rewards by creating prediction topics, participating in predictions, successfully predicted, and providing liquidity. POT can be used as collateral for becoming a governance node and to participate in community governance events such as on-chain voting.

![main_flowchart](https://raw.githubusercontent.com/XPredictMarket/docs/master/images/main_flow_chart.png)

![architecture](https://raw.githubusercontent.com/XPredictMarket/docs/master/images/architecture.png)

#### Key Functions

1. **Creation of The Prediction Market**

    Everyone can initiate a prediction proposal in the initial proposal pool through X Predict Market. When creating the topic, users should set up the prediction type, topic, optional results, settlement currency, transaction fee ratio, prediction period, and the actual date when the result is revealed. Besides, any number of settlement tokens are required to add for initial liquidity, as well as a text describing the key points and merits of the proposal, the source of information, how the results will be validated and secured accurately and etc. It is to win the support and attract other users to join the prediction.

2. **Voting in Initial Proposal Pool**

    In the initial proposal pool, all users can browse and vote for any prediction proposals created by other users, which draw their interests. During the vote, users will need to verify the connected wallet addresses and hold a certain amount of governance tokens. If the number of ‘support’ votes exceeds a certain basic amount, and the support rate surpass 50%, the proposal is passed. If the proposal is finally passed, the users who voted in favor will get the governance tokens of the initial proposal vote as rewards. If it does not pass, the users who vote against it are getting rewards instead.

3. **The Prediction Stage**

    Proposals that have passed the initial voting will be displayed in the formal prediction pool. Users can choose any of the ongoing prediction topics to submit their opinions. When the topic is created, the creator sets the settlement currency for transaction at the very beginning, such as DOT. 
    Users can either make predictions or add liquidity to the prediction topic. Users will get transaction fee by adding liquidity.

    When making a prediction, a certain amount of settlement tokens is required in the wallet, and then the settlement token is exchanged for the prediction tokens. During the prediction period, users are free to sell prediction tokens to make profits or stop losses in a timely manner. When the prediction result is officially announced, the tokens which are successfully predicted will be exchanged for settlement tokens at a ratio of 1:1, otherwise the tokens that fail the prediction will lose value.

    Referring to AMM, we set up a new type of fixed product automated market maker (FPMM), which will automatically adjust the value of prediction tokens, eliminating the need for in-depth support of order book, and the liquidity is greatly increased.

    As for the specific process of FPMM? For example:

    ① User JACK created a prediction market X1, 100DOT of basic liquidity are deposited, and the probability is set to 50:50;

    ② The market automatically converts 100 DOT into 100 X1-Yes tokens and 100 X1-No tokens;

    ③ JACK received 10 liquidity certificates X1-LP exclusively for the prediction market;

    ④ Another user Tom purchases 25 DOT worth of X1-YES tokens from the market.

    ⑤ First of all, assuming the transaction fee is 2%, Tom needs to pay a total of 25.5DOT.

    Then, 0.5 DOT is deposited as transaction fee, and the other 25 USDC will be converted into 25 X1-YES tokens and 25 X1-NO tokens.

    Then, because the user chose YES, 25 X1-YES tokens will be given to Tom, and another 25 X1-NO tokens will flow into the market. There will be 125 X1-NO tokens in the market. In the absence of new or reduced liquidity, the sum of product of the number of tokens of X1-YES and X1-NO remains a fixed value because of the automatic market-making mechanism of FPMM.

    Therefore, the amount of X1-YES tokens in the market will change to 100*100/125=80, which is 20 less than the original, and these 20 will also be given to Tom. Therefore, the total number of X1-YES tokens obtained by Tom is: 25+20=45.

    ⑥ When JACK retrieves liquidity using LP, he will retrieve 80 DOT and 45 X1-N0. When the final prediction result is NO, 45 X1-NO can be exchanged for 45 DOT, and JACK will harvest 125 DOT; Otherwise, JACK will only have 80 DOT left. 90% of the transaction fee will go to the liquidity provider, and 10% to the topic creator. Since JACK is both the topic creator and the only liquidity provider, he will get the full transaction fee of 0.5 DOT. When there are multiple liquidity providers, they are divided proportionally according to the amount of LPs they hold. Part of the fee is allocated to the topic creators to encourage users to discover interesting prediction proposals and introduce them to other users. The larger the pie, the more the liquidity provider will gain, so this is a total win-win mechanism.

    ⑦ Assuming that the final prediction result is YES, prediction of TOM is successful. When he converts X1-NO to DOT, the platform will charge a 0.5% withdrawal fee: 45*0.5%=0.225DOT, of which 50% will be allocated to the correct prediction Node, 50% is used as the technology development cost of the platform.

    Compared with AMM, this can tokenize the two predicted options and control the sum of their prices to 1. The more people who buy one of the options, the higher the price, but the price will never exceed 1. The traditional AMM is only suitable for direct transactions between 1 token and another token, and the price can theoretically increase indefinitely.

    ![swap](https://raw.githubusercontent.com/XPredictMarket/docs/master/images/swap.jpg)

4. **Prediction Completed**

    When the prediction period set by the creator of the topic ends, the result is pending. In this process, any new prediction can no longer be proceeded while liquidity can be removed.

5. **Result Uploaded On-chain**

    When the result is generated reaching the initially set-up timeline, the prediction result is uploaded automatically by the governance node through the oracle and is totally transparent to all users for judgement during the result announcement period.

6. **Market Settlement**

    After the result is revealed, the price of the token with the opposite position will decrease to zero, and the prediction tokens with successful prediction will be cashed in the settlement tokens at 1:1. When the person who predicts correctly gets the reward, a 2% withdrawal fee will be charged. Within the 2% fee, 50% of which will be allocated to the node for submitting the correct result, and the other 50% will be used as platform revenue for technology development, token buy-back and etc. The transaction fee ratio is set by the creator upon topic creation with a default 2% rate. 90% of the transaction fee will be rewarded to the liquidity provider, and 10% will be rewarded to the topic creator.

## Ecosystem Fit

- **X Predict Market in Polkadot ecosystem**

    X Predict Market plans to build the parachain on Polkadot network. Our main focus in the early stage of development lies in the development and upgrade in the test chain.X Predict Market will play an important role in the Polkadot network as prediction market, an integration prediction platform including event prediction, community governance, cross-chain, market incentive as well as social system.Concerning the settlement currency in prediction market, X Predict Market will give priority to the tokens of Polkadot ecosystem. Besides, we will seek interaction with other projects in terms of the market incentive mining. For example, tokens of a certain project can be chosen as settlement currency of a certain popular topic of X Predict Market. In addition to the prediction mining, users can share the transaction fee by providing liquidity, obtained from which the LP token can be used for yield farm.

- **Target audience**

    The target audience of our project is based on users interested in predicting events, but can be extended to the corresponding types of interested users according to the specific types of prediction topics,For instance, price prediction of certain DEFI project can be extended to users in DEFI area, and even focus on users of the project itself; Another example, the prediction of the presidential election can appeal to those who have not been exposed to digital currencies, who simply want to participate in the pre-predictions of the presidential election, who are fans of a certain president or someone who wants to make a profit through gaming in addition to users who are interested in the prediction itself.

- **Use case**

    Our project enables the users to hedge their risks. For instance, farmers in a certain area can hedge their risk of drought by predicting rainfall. If the rainfall is of abundance, a bumper crop is expected, if not, the farmers can receive their hedge profit. 

    Our project is applicable in consumer preferences investigation.For example, prediction of the sales volume of a certain two competing products in a certain quarter. The competing product can refer to a certain car, food, cosmetics, etc. with public sales statistics (for example, a listed company with quarterly reports), which can guarantee the final result. Ex Ante prediction can gain insight to people’s satisfaction and confidence in different competing products in advance, thereby knowing which products are more popular with consumers, and improving existing products to meet consumer preferences.

    Our project is also suitable for the tendency of political elections investigation. For instance, in the US presidential election, the prediction platform can be used to gain insight of people's authentic thoughts on which candidate people are more biased towards.

    For example, our project can be adapted to truth investigation.The true cause of a mystery case may only be known to a few, and then people can suggest whether someone is willing to disclose the truth, or directly select a group of suspects as an option, and those who know the truth will be motivated by the market to reveal the truth with evidence. After the recognition of all, the proof not only restores the truth to the world, but also gains profit out of it, and people can stay anonymous for safety concerns.

    Our project also applies to the investigation of market price trends. Like predicting the price of a certain city or even a specific real estate, or predicting how much the highest price of BTC can reach in a certain period of time, revealing people's true expectations of this type of asset.

    The prediction topics of our project are issued from users' spontaneous discussions, which is featured with great diversification. Evolution is expected with the continuous use case discovery by users. The use case above are merely just some possible examples.

- **Similar project**

    We have summarized a form and made a comparison with the most popular prediction-related projects in the current market, as shown in the figure below.

    |Content|Augur|Catnip|Polymarket|Omen|Option Room|Prosper|FTX|X Predict Market|
    |:--|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|
    |Decentralized|:heavy_check_mark:|:heavy_check_mark:|:heavy_check_mark:|:heavy_check_mark:|:heavy_check_mark:|:heavy_check_mark:|:x:|:heavy_check_mark:|
    |Prediction created by users|:heavy_check_mark:|:x:|:heavy_check_mark:|:heavy_check_mark:|:heavy_check_mark:|:x:|:x:|:heavy_check_mark:|
    |Wild range of prediction event|:heavy_check_mark:|:x:|:heavy_check_mark:|:heavy_check_mark:|:heavy_check_mark:|:x:|:heavy_check_mark:|:heavy_check_mark:|
    |Combination of Automatic Market Maker|:x:|:heavy_check_mark:|:heavy_check_mark:|:heavy_check_mark:|:x:|:x:|:x:|:heavy_check_mark:|
    |Result community governance|:heavy_check_mark:|:x:|:x:|:heavy_check_mark:|:heavy_check_mark:|:x:|:x:|:heavy_check_mark:|
    |Report Supervision Mechanism|:heavy_check_mark:|:x:|:x:|:heavy_check_mark:|:heavy_check_mark:|:x:|:x:|:heavy_check_mark:|
    |Base on Polkadot|:x:|:x:|:x:|:x:|:heavy_check_mark:|:x:|:x:|:heavy_check_mark:|
    |Cross chain|:x:|:x:|:x:|:x:|:heavy_check_mark:|:x:|:x:|:heavy_check_mark:|
    |Staking|:x:|:x:|:x:|:x:|:heavy_check_mark:|:x:|:x:|:heavy_check_mark:|
    |Prediction mining|:x:|:x:|:x:|:x:|:x:|:heavy_check_mark:|:x:|:heavy_check_mark:|
    |Liquidity yield farming|:x:|:x:|:x:|:x:|:x:|:x:|:x:|:heavy_check_mark:|
    |Creator reward|:x:|:x:|:x:|:x:|:x:|:x:|:x:|:heavy_check_mark:|
    |Prediction rank list|:x:|:x:|:x:|:x:|:x:|:x:|:x:|:heavy_check_mark:|
    |Community interaction forum|:x:|:x:|:x:|:x:|:x:|:x:|:x:|:heavy_check_mark:|

    Compared with Option Room in the Polkadot ecology, it has no prediction product available yet. From its disclosed content, compared with X Predict Market, it lacks flexibility and does not operate Automatic market maker based on AMM; Lack of incentives, it is not featured with our prediction mining, LP mining, creator rewards, prediction rank list and other market incentives; lack of sociability, we will create a prediction topics driven Community interaction forum where users can interact with each other.

    Compared with projects outside of Polkadot ecology. FTX is a centralized project, which is at the risk of being operated in the dark by the platform and legal issue; Prosper is based on Binance Chain, with only automatically generated short-term price forecasts, and the range of audience is narrow; Omen is not based on Polkadot, it lacks the diversity of cross-chain asset participation, and lacks diversified incentives and sociality;Polymarket is short of community governance and reporting and supervision mechanisms;The homogeneous topic of Catnip cannot even be independently created by users, as well as the absence of community governance and incentives; Augur is the order-book type, not as flexible and liquidity abundant as AMM's automatic market making, and lacks the participation of cross-chain assets and market incentives.

## Team :busts_in_silhouette:

### Team members

- **Wenzhu liang**

    - 7 years experience in front-end development HTML、CSS、javascript、Vue、React、Nodejs familiar with Rust,substrate development, project management

- **Zhijie Jiang**

    - Rich programming experience, 1 years Solidity development experience familiar with block chain development, master Rust、Substrate.

- **Hongtao Ji**

    - 3 Years of rich programming experience, familiar with c/c ,solidity,nodejs,rust,substrate development.
    
- **Danling Xiao**

    - 3 years experience in front-end development HTML、CSS、javascript、Vue familiar with React development
    
- **Ting Chen**

    - 8 years experience in design, rich project experience in block chain finance industry, mature independent design control and innovation ability, good at visual brand design, product design, proficient in photography shop, sketch, illustrator, C4D

### Contact

* **Contact Name:** [x-predict.com](https://x-predict.com)

* **Contact Email:** [official@x-predict.com](mailto:official@x-predict.com)

* **Website:** [x-predict.com](https://x-predict.com)

### Legal Structure

- Registered Address: The British Virgin Islands

- Registered Legal Entity:BAY SQUARE INTERNATIONAL LIMITED

### Team's experience

X Predict Market is experienced in blockchain product planning, design and development.
Having worked in the crypto currency exchange, most of our team members have become seasoned smart contract developers after their experience in DeFi lending and DEX development.
Our team members are proficient in Rust, C++, Solidity, Java, JavaScript and other development languages. 
Among whom Liang Wenzhu is certified by the Parity substrate course as Outstanding Student and has led other members of the team to systematically study substrate.

### Team Code Repos

* [https://github.com/XPredictMarket](https://github.com/XPredictMarket)

### Team LinkedIn Profiles

* [https://www.linkedin.com/in/wenzhu-liang-369ab3138](https://www.linkedin.com/in/wenzhu-liang-369ab3138)
* [https://www.linkedin.com/in/%E5%BF%97%E6%9D%B0-%E8%92%8B-399986208](https://www.linkedin.com/in/%E5%BF%97%E6%9D%B0-%E8%92%8B-399986208)
* [https://www.linkedin.com/in/%E5%AE%8F%E6%B6%9B-%E5%90%89-322985208](https://www.linkedin.com/in/%E5%AE%8F%E6%B6%9B-%E5%90%89-322985208)
* [https://www.linkedin.com/in/%E5%BD%93%E7%8E%B2-%E8%82%96-b01986208](https://www.linkedin.com/in/%E5%BD%93%E7%8E%B2-%E8%82%96-b01986208)
* [https://www.linkedin.com/in/tina-chen-291806202](https://www.linkedin.com/in/tina-chen-291806202)

## Development Status :open_book: 

We have completed the planning of the product prototype, the design of the UI diagram, and the technical architecture, and are beginning to develop.

Documents about the technical architecture can be viewed at the following link：

https://github.com/XPredictMarket/docs/blob/master/Technial.md

For product UI diagrams, you can check the following links:

https://github.com/XPredictMarket/docs/tree/master/ui

White paper link：

https://x-predict.com/X_Predict_market_Whitepaper_en.pdf?v=1.0

## Development Roadmap :nut_and_bolt: 

### Overview

* **Total Estimated Duration:** 4 weeks
* **Full-Time Equivalent (FTE):**  5
* **Total Costs:** 3000 DAI

### Milestone

* **Estimated Duration:** 4 weeks
* **FTE:**  5
* **Costs:** 3000 DAI

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide inline documentation of the code and basic tutorials. It explains how the team creates predictions and how users make predictions. |
| 0c. | Testing Guide | We will conduct unit test on all modules to ensure they can function properly. In this guide, we will describe how to run these tests. |
| 1. | Creating proposal module | This module provides a method for creating prediction proposals using specific parameters, such as prediction topics, options, settlement currency, transaction fee ratio, and prediction period. |
| 2. | Prediction participation module | This module provides the functions of using settlement tokens to participate in predictions, swapping prediction tokens, and providing and removing liquidity. |
| 3. | Results uploading module | This module provides the function of submitting results through oracle. |
| 4. | Market settlement module | After the results are officially announced, users predicted correctly can exchange their prediction tokens with settlement tokens with equivalent value.Users who provide liquidity automatically remove liquidity after the end and share fees. |

## Future Plans

1. In the second phase of the product development plan,multiple incentives are designed for users. In addition to gain rewards by predicting correctly, users also have rewards for predictive mining, staking, predicted leaderboard, liquidity providing and yield farming, and etc. Also, there are additional rewards for prediction topic creators and community nodes. The specific rules of this part of the reward are introduced in the white paper.

1. In the second phase of the product development plan.We will integrate cross-chain mechanism, we're ready to become a para-chain of Polkadot. At present, the cross-chain will be concentrated between the parachains, the purpose is to make more other parachain assets can participate as the settlement currency of the forecast proposal. In addition, market-driven mining will seek to interact with other projects.

1. In the third phase of the product development plan.The platform will open up community autonomous nodes, and reporting and supervision mechanisms. Each user will be able to become a governance node by staking governance tokens. The governance node can upload the results and share the revenue from withdrawal fee. The governance node is authorized to upload results and accept the supervision of the entire network. When the result submitted by the node is different from reality, any user can initiate a report through pledge, the reported person will be punished, and the reporter will be rewarded.

1. In the third phase of the product development plan.Optimize an easier-to-use oracle. In order to encourage more non tech-savvy users to explore the oracle, we will develop a graphical operation interface for the common users to upload results through the oracle.

1. In the third phase of the product development plan.Add the governance voting pool of the parameters and development of the platform it self. The range of voting concludes the settings of some parameters of the platform, future revisions, iterative upgrades of the platform, such as adding new features.

1. In the fourth phase of the product development plan, a more designated and user-friendly dashboard will be added to display platform statistics.

1. In the fourth phase of the product development plan, More than simple prediction, it is a way for actively socialize and interact with passion. Users will be able to discuss topics by predicting topics, and join a forum-style communication system, with social functions such as friends’ group and group chats.
