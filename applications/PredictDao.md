# W3F Open Grant Proposal

* **Project Name:** Predict Dao
* **Proposer:** Daniel Blake
* **Payment Address:** BTC Address:1HJbMBFeER82U9XtNMcfe2EeDCiUL8jrRY


## Project Overview :page_facing_up: 

### Overview

Predict DAO is a decentralized cross-chain prediction market. The objective of Predict DAO is to enable users to participate in the prediction process in various ways by creating topics, discussing, predicting and approving the results. Users are also incentivized by these engaging activities. Beyond the prediction, users can actively interact and socialize with each other within the social system. It is a way to gather people's wisdom to conduct historical analysis and future exploration. It can also benefit current decision-making. It will be developed based on Polkadot's substrate framework.

### Project Details 

As an evolving decentralized cross-chain prediction market, Predict DAO is composed of an initial proposal pool and a formal prediction pool. In the initial proposal pool, users can create a variety of interesting topics for prediction. Meanwhile, other users can vote on the feasibility of the topic, and it will enter the formal prediction pool after the vote is casted.

Each option will generate a token, of which the market making will be automatically conducted by the new Fixed Product Market Maker (referred to as FPMM). Users can make their own analysis and judgment on the potential results, and then obtain prediction tokens by exchanging cross-chain assets. Users can receive governance token POT as rewards by creating prediction topics, participating in predictions, successfully predicted, and providing liquidity. POT can be used as collateral for becoming a governance node and to participate in community governance events such as on-chain voting.

![main](https://raw.githubusercontent.com/PredictDao/docs/master/images/main_flow_chart.png)

![main](https://raw.githubusercontent.com/PredictDao/docs/master/images/node.png)

### Key Functions

1. **Creation of The Prediction Market**

    Everyone can initiate a prediction proposal in the initial proposal pool through Predict DAO. When creating the topic, users should set up the prediction type, topic, optional results, settlement currency, transaction fee ratio, prediction period, and the actual date when the result is revealed. Besides, any number of settlement tokens are required to add for initial liquidity, as well as a text describing the key points and merits of the proposal, the source of information, how the results will be validated and secured accurately and etc. It is to win the support and attract other users to join the prediction.

2. **Voting in Initial Proposal Pool**

    In the initial proposal pool, all users can browse and vote for any prediction proposals created by other users, which draw their interests. During the vote, users will need to verify the connected wallet addresses and hold a certain amount of governance tokens. If the number of ‘support’ votes exceeds a certain basic amount, and the support rate surpass 50%, the proposal is passed. If the proposal is finally passed, the users who voted in favor will get the governance tokens of the initial proposal vote as rewards. If it does not pass, the users who vote against it are getting rewards instead.

3. **The Prediction Stage**

    Proposals that have passed the initial voting will be displayed in the formal prediction pool. Users can choose any of the ongoing prediction topics to submit their opinions. When the topic is created, the creator sets the settlement currency for transaction at the very beginning, such as DOT. 

    Users can either make predictions or add liquidity to the prediction topic. Users will get transaction fee by adding liquidity.

    When making a prediction, a certain amount of settlement tokens is required in the wallet, and then the settlement token is exchanged for the prediction tokens. During the prediction period, users are free to sell prediction tokens to make profits or stop losses in a timely manner. When the prediction result is officially announced, the tokens which are successfully predicted will be exchanged for settlement tokens at a ratio of 1:1, otherwise the tokens that fail the prediction will lose value.

    Referring to AMM, we set up a new type of fixed product automated market maker (FPMM), which will automatically adjust the value of prediction tokens, eliminating the need for in-depth support of order book, and the liquidity is greatly increased.

![main](https://raw.githubusercontent.com/PredictDao/docs/master/images/swap.png)

4. **Prediction Completed**

    When the prediction period set by the creator of the topic ends, the result is pending. In this process, any new prediction can no longer be proceeded while liquidity can be removed.

5. **Result Uploaded On-chain**

    When the result is generated reaching the initially set-up timeline, the prediction result is uploaded automatically by the governance node through the oracle and is totally transparent to all users for judgement during the result announcement period.

6. **Market Settlement**

    After the result is revealed, the price of the token with the opposite position will decrease to zero, and the prediction tokens with successful prediction will be cashed in the settlement tokens at 1:1. When the person who predicts correctly gets the reward, a 2% withdrawal fee will be charged. Within the 2% fee, 50% of which will be allocated to the node for submitting the correct result, and the other 50% will be used as platform revenue for technology development, token buy-back and etc. The transaction fee ratio is set by the creator upon topic creation with a default 2% rate. 90% of the transaction fee will be rewarded to the liquidity provider, and 10% will be rewarded to the topic creator.

## Team :busts_in_silhouette:

### Team members

- **Daniel Blake**

    - Full-stack Developer

    - 10 years of software development experience

    - Worked in the blockchain field for 5 years as a developer and product leader

- **Phil Jackson**

    - Proficient in C++, Rust, Python and Solidity

    - 5 years of software development experience

    - 3 years of smart contract development experience

- **Peter hajdu**

    - More than 5 years of experience in development and management, real-time database products and     cryptocurrency trading platforms.

    - More than 15 years of professional software design, architecture and development experience.
    
- **Bradley phillips**

    - Research interests include consensus algorithms, P2P protocols and cryptography.
    
- **Milton Crane**

    - Proficient in React, Vue, Nodejs and Koa

    - 6 years of Front-end development experience

### Contact
* **Website:** [www.predictdao.com](https://www.predictdao.com)
* **Legal Structure:** It is processed by BAY SQUARE INTERNATIONAL LIMITED, a foundation registered IN THE BRITISH VIRGIN ISLANDS.
* **Contact Email:** official@predictdao.com

### Team Code Repos
* [https://github.com/PredictDao](https://github.com/PredictDao)
* [https://github.com/PredictDao/docs/blob/master/Technial.md](https://github.com/PredictDao/docs/blob/master/Technial.md)

## Development Status :open_book: 

## Development Roadmap :nut_and_bolt: 

### Overview

* **Total Estimated Duration:** 4 weeks
* **Full-Time Equivalent (FTE):**  5
* **Total Costs:** 0.2 BTC

### Milestone

* **Estimated Duration:** 4 weeks
* **FTE:**  6
* **Costs:** 0.2 BTC

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide inline documentation of the code and basic tutorials. It explains how the team creates predictions and how users make predictions. |
| 0c. | Testing Guide | We will conduct unit test on all modules to ensure they can function properly. In this guide, we will describe how to run these tests. |
| 1. | Creating proposal module | This module provides a method for creating prediction proposals using specific parameters, such as prediction topics, options, settlement currency, transaction fee ratio, and prediction period. |
| 2. | Prediction participation module | This module provides the function of using settlement tokens to participate in the prediction process, performing swap for prediction tokens, and adding liquidity. |
| 3. | Results uploading module | This module provides the function of submitting results through oracle. |
| 4. | Market settlement module | After the results are officially announced, users predicted correctly can exchange their prediction tokens with settlement tokens with equivalent value. |

## Future Plans

1. We will integrate cross-chain mechanism, we're ready to become a para-chain of Polkadot.

1. More than simple prediction, it is a way for actively socialize and interact with passion. Users will be able to discuss topics by predicting topics, and join a forum-style communication system, with social functions such as friends’ group and group chats.

1. Once the platform is launched, multiple incentives are designed for users. In addition to gain rewards by predicting correctly, users also have rewards for predictive mining, staking, predicted leaderboard, liquidity providing and minin, and etc. Also, there are additional rewards for prediction topic creators and community nodes.

1. The platform will open up community autonomous nodes, and reporting and supervision mechanisms. Each user will be able to become a governance node by staking governance tokens. The governance node can upload the results and share the revenue from withdrawal fee. The governance node is authorized to upload results and accept the supervision of the entire network.  When the result submitted by the node is different from reality, any user can initiate a report through pledge, the reported person will be punished, and the reporter will be rewarded.

1. Optimize an easier-to-use oracle. In order to encourage more non tech-savvy users to explore the oracle, we will develop a graphical operation interface for the common users to upload results through the oracle.

1. Add the governance voting pool of the parameters and development of the platform itself. The range of voting concludes the settings of some parameters of the platform, future revisions, iterative upgrades of the platform, such as adding new features.

1. In the future, a more designated and user-friendly dashboard will be added to display platform statistics.
