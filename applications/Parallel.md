# Parallel Finance

- **Project Name:** Parallel Finance
- **Team Name:** Parallel
- **Payment Address:** 0x17816E9A858b161c3E37016D139cf618056CaCD4

## Project Overview :page_facing_up:

Parallel finance is a decentralized lending/borrowing and staking protocol built on top of the Polkadot ecosystem. Our platform will allow users to earn "double interests" from staking and lending their tokens simultaneously (hence the name "parallel" finance).

### Overview

Our platform offers a few key features and benefits:

- **Lending and borrowing**: users can lend and borrow assets based on interest rates.
- **Staking**: users can participate in Polkadot’s network validation and earn rewards.
- **Earning double interests**: users can choose to stake and lend out their tokens simultaneously based on our new approach.
- **Powered by Substrate**: our platform benefits from the speed, resiliency and convenient upgradability of Polkadot.

Our project utilizes substrate framework and is built on top of polkadot parachain ecosystem:

- We built the core interests model and functionalities on substrate runtime
- We enabled off-chain worker to query the current price feed of DOT and other tokens
- We will build cross-chain interoperability using XCMP protocol in the near future

**Why are we building Parallel Finance?**

- We decided to pick this idea because of the rising demand for decentralized lending protocols on Polkadot and Kusama, as well as the lack of token liquidity that comes with staking on the mainnet. We estimate that 50% of all existing DOT and KSM tokens will be staked for blockchain validation with an estimated staking APY of 10-20%. However, the DOT and KSM tokens will lose their liquidity once they are staked to validate the network. Institutions and large token holders have high incentives to use our platform since it will allow them to not only participate in staking, but also generate additional profits through lending, and allow them to use their DOTs and KSMs as payment, or trading assets.

### Project Details

##### MVP links

- Testnet demo: <https://parallel.fi/#/>
- Video demo: <https://youtu.be/lgQX9rELpL8>

#### Mockups and UI components

![image](https://user-images.githubusercontent.com/40745291/111884834-5f719d80-8981-11eb-84cf-df6494f05650.png)
![image](https://user-images.githubusercontent.com/40745291/111884839-68626f00-8981-11eb-94ae-750dfab5e951.png)
![image](https://user-images.githubusercontent.com/40745291/111884847-6d272300-8981-11eb-9bac-81514f1f8358.png)
![image](https://user-images.githubusercontent.com/40745291/111884852-70baaa00-8981-11eb-8b42-ba6aa5045afb.png)
![image](https://user-images.githubusercontent.com/40745291/111884855-76b08b00-8981-11eb-9dc4-0a2e49845aa7.png)
![image](https://user-images.githubusercontent.com/40745291/111884857-7b753f00-8981-11eb-9197-73cd29ddb4b8.png)

##### An overview of the technology stack to be used

The lending protocol was inspired by compound protocol and our blockchain solution is developed on substrate 3.0, which allows for efficiency and scalability.

##### Lending and Borrowing Workflow

![image](https://user-images.githubusercontent.com/56744348/111891853-0aa34680-89c4-11eb-8657-7396d1ab154d.png)

##### Interest Rate Model

![image](https://user-images.githubusercontent.com/56744348/111891848-070fbf80-89c4-11eb-8d15-c3ee5fcb7cf3.png)

##### Auto Liquidation Algorithm

![image](https://user-images.githubusercontent.com/56744348/111891839-f19a9580-89c3-11eb-9c08-2094e1aa5972.png)

##### Staking Workflow

![image](https://user-images.githubusercontent.com/56744348/111891844-ff501b00-89c3-11eb-829d-130d6bb48e67.png)

##### Staking Rate Model

![image](https://user-images.githubusercontent.com/56744348/111891842-f8c1a380-89c3-11eb-9210-1bf0bbd9ed83.png)

##### What your project is _not_ or will _not_ provide or implement

- Our team does not plan on implementing the support for other tokens besides the native DOT and KSM tokens and Stable Coin at the initial launch in order to reduce the risks in cross-collaterals
- We will not implement a decentralized exchange by ourselves. Instead, we will be focusing on building the lending/borrowing and staking protocol.

### Ecosystem Fit

- **Where and how does your project fit into the ecosystem?** We are aiming to offer the first decentralized lending/borrowing and staking protocol in the Polkadot and Kusama ecosystem as a DeFi and a parachain.
- **Who is your target audience (parachain/dapp/wallet/UI developers, designers, your own user base, some dapp's userbase, yourself)?** Our target audience are the DOT and KSM token holders who are looking to participate in lending/borrowing, staking and unlocking liquidity for their staked tokens, or generating "double interests" returns by lending and staking simultaneously. This audience would include retail, institutional and large token holders, traders (arbitrage opportunities in DeFi) and network validators. In general, large token holders will have a higher incentive to join the platform earlier as the exchange rate will be more favorable.
- **What need(s) does your project meet?** Our project helps generate additional interests for token holders, provide assets for borrowing and unlock liquidity for token stakers who can use staked tokens (ex: xDOT) to trade, lend or use as payment.
- **Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?**
  - **If so, how is your project different?** Compound has been a successful and proven model for lending and borrowing assets in a decentralized manner in the Ethereum ecosystem. However, Compound doesn't offer staking services, and there is currently no decentralized lending/borrowing solution launched in the Polkadot ecosystem. Acala Network does offer staking services, but doesn't offer lending/borrowing services. From that perspective, we are a unique solution that combines both services and offers additional interests to our users.
  - **If not, are there similar projects in related ecosystems?** We have not yet found a project that will be focusing on generating double interests for token holders through lending and staking.

## Team :busts_in_silhouette:

### Team members

- Name of team leader: Yubo Ruan
- Names of team members: Remi Gai, Zhou Yang, Li Pai, Cheng Jiang, Hai Yi

### Contact

- **Contact Name:** Yubo Ruan
- **Contact Email:** yubo@parallel.fi
- **Website:** www.parallel.fi

### Legal Structure

(we are in the process of registering the legal entity)

- **Registered Address:** N/A
- **Registered Legal Entity:** N/A

### Team's experience

- **Yubo Ruan**: Yubo is currently a venture investor at Polychain Capital and 8 Decimal Capital. Yubo previously worked at TrustToken as a solidity engineer and helped build the TrueFi uncollateralized lending protocol. Additionally, Yubo started Alisimba Technology with wide range of media coverage in China and was granted many national patents and innovation awards. Yubo studied computer science at Stanford University.
- **Yang Zhou**: Yang is a senior blockchain engineer at Elastos and its Gelaxy group. At Elastos, Yang contributed to the cli tool, cross-chain protocol, and merged mining specification. Additionally, Yang was the point of contact with the world's top mining pool (F2Pool, BTCPool, ANTPool, and Huobipool), and successfully launched the Elastos mining business. Yang also worked at large software tech companies and has 9 years of development experience.
- **Remi Gai**: Remi is a software engineer with a background in product management, entrepreneurship and venture capital, and currently works at Microsoft. Previously, Remi worked as an early stage investor at 8 Decimal Capital, a crypto/blockchain focused fund, and was the co-founder of Bitsystems, a blockchain development firm based in Cambridge, Massachusetts.
- **Lipai Zhu**: Lipai has 4 years of experience in blockchain. For the past 2 years, Li Pai has been working as a blockchain engineer at JianXinZhuHe technology at Shenzhen and focuses on consortium blockchain. Prior, Lipai studied BitCoin, Ethereum and Solidity and won a prize at BSN Second developer competition and a grand prize at the 4th China Blockchain Development Competition (In Competition, his duty is design smart contract and develop it).
- **Cheng Jiang**: Cheng Jiang is a senior Fullstack Developer at Ubudu, experienced in Fullstack development, Network topology and Indoor Location System Algorithms.
- **Hai Yi**: Hai Yi has 4 years experience in software engineering. He was a former software engineer at Swissborg, and trading product associate at the Bank of Montreal. Hai Yi holds a BSc in Computer Science degree from the University of Waterloo).

### Team Code Repos

- Backend: <https://github.com/parallel-finance/parallel>
- Frontend: <https://github.com/parallel-finance/hackathon-2021-spring/tree/main/teams/22-Parallel/src/parallel-dapp>

### Team LinkedIn Profiles

- <https://www.linkedin.com/in/yubo-ruan/>
- <https://www.linkedin.com/in/remigai/>
- <https://www.linkedin.com/in/cheng-jiang-2a414020a/>
- <https://www.linkedin.com/in/haiyi-zhong-6274108b/?originalSubdomain=ca>
- <https://www.linkedin.com/in/zhulipai/>
- <https://www.linkedin.com/in/yz89/>

## Development Roadmap :nut_and_bolt:

### Overview

* **Total Estimated Duration:** 4 months
- **Full-time equivalent (FTE):**  4 FTE
- **Total Costs:** 9k USD

### Milestone 1 — Implement Cross-chain support for DOT and KSM

- **Estimated Duration:** 8 weeks
- **FTE:** 1.8
- **Costs:** 4000 USD

The major deliverable of for this milestone:

- Implement a multi-assets lending protocol.
- Support automatic liquidation by using an off-chain worker.

| Number | Deliverable                | Specification                                                                                                                                                                                                                 |
| -----: | -------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|      0 | License                    | Apache 2.0                                                                                                                                                                                                                    |
|    1.a | Substrate module: Loans pallet | Loans pallet will be implemented as a multi-assets lending protocol which offers lending and borrowing by using floating rate model. The full expected functionality is described [here](https://docs.parallel.fi/white-paper#i-lending-protocol) (Ⅲ-1, Ⅲ-2).                                                                                    |
|    1.b | Substrate module: Liquidation pallet | We will implement a liquidation solution build with Substrate Off-chain Worker, which will calculate the health factor of each borrower's account and send a liquidation transaction automatically. The full expected functionality is described [here](https://docs.parallel.fi/white-paper#4-1-auto-liquidation-algorithm) (Ⅲ-4.1).                                                                                    |
|    1.c | Substrate module: Price aggregation oracle   |  We will need to create an on-chain price aggregation pallet for the oracle prices from multiple sources that is queried by off-chain workers. The full expected functionality is described [here](https://docs.parallel.fi/white-paper#5-oracle-and-price-feed) (Ⅲ-5).                                                                           |
|    2.a | Integration with front-end | We will integrate our existing front end to the finalized substrate backend.                                                                                                                                                   |
|    2.b | Article/Tutorial           | We will create an article and a demo video that will explain how users can start using the platform for lending and borrowing DOT or KSM tokens.                                                                                      |
|    3. | Docker                     | We will provide a dockerfile to demonstrate the lending functionality.                                                                                                                                                |
|    4. | Testing and Documentation  | While we develop our module, we will ensure that our code has significant test coverage (>80%) to ensure quality and provide explanations on how the functions work for the community to review, as well as craft test guides. |
|    5. | User Testing               | We will conduct user testing to improve our product's UI and UX, to ensure that the borrowing and lending functionalities are intuitive. Initially, we will conduct qualitative user testing by observing 10-15 users who will use the v1 platform and provide a summary of the findings and improvements made based on insights.                                                                            |

Other:
- We will implement more quantitative user testing with A/B tests, web analytics, and heatmap once we have more adoption (>100-200 DAU) in order to get more significant insights (not part of v1 deliverables).

### Milestone 2 — Enable Staking for DOT and KSM

- **Estimated Duration:** 8 weeks
- **FTE:** 2.2
- **Costs:** 5000 USD

The major deliverable of for this milestone:

- Implement the modules that allow for staking functionality, which includes
  - Exchange Rate
  - 28 days locking period for unstaking tokens
  - Slashing scenarios
  - Relay tokens to validators
- Users will be able to stake DOT tokens, and receives xDOT in return. xDOT will then start accruing interests from staking and also be used for lending or transfered elsewhere for payment or trading. Similarly, staked KSM will be converted to xKSM with the same features as xDOT.

| Number | Deliverable                         | Specification                                                                                                                                                                                                                                                                                       |
| -----: | ----------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|      0 | License                             | Apache 2.0 /                                                                                                                                                                                                                                                                        |
|    1.a | Substrate module: Staking DOT       | We will implement the on-chain staking pool for the staking process from the nominators. The full expected functionality is described [here](https://docs.parallel.fi/white-paper#2-nomination-workflow) (IV-1, IV-3, IV-4).                                                                                                                         |
|    1.b | Substrate module: Unstaking DOT     | We will implement a 28 days locking period for the unstaking process of DOT tokens from validators. The full expected functionality is described [here](https://docs.parallel.fi/white-paper#4-delegated-staking) IV-1, IV-4).                                                                                                                                                                                                  |
|    1.c | Substrate module: Exchange Rate     | We will implement the process for issuing and trading DOT for xDOT with the users based on our exchange rate. The full expected functionality is described [here](https://docs.parallel.fi/white-paper#4-delegated-staking) (IV-4).                                                                                                                                                                                      |
|    1.d | Substrate module: Slashing Scenario | Staking tokens does have inherent risks of being slashed. We will implement our model that will change the exchange rate in case of slashing scenarios. The full expected functionality is described [here](https://docs.parallel.fi/white-paper#6-slash-insurance) (IV-6).                                                                                                                                              |
|    1.e | Substrate module: KSM | Since DOT and KSM will have similar code, we will mainly transfer over some of the previous development to allow for KSM staking.
|    2   | Validator evaluation schema         | We will design the validator evaluation schema to select the outstanding validators. The full expected functionality is described [here](https://docs.parallel.fi/white-paper#2-validator-choosing-strategy) (IV-2).                                                                                                                         |
|    3. | Integration with front-end          | We will integrate our existing front end to the finalized substrate backend.                                                                                                                                                                                                                         |
|    4. | Article/Tutorial                    | We will create an article and a demo video that will explain how users can start using the platform for staking DOT and KSM. Additionally, we will also create tutorials for users to explain how they can earn "double interests" through staking and lending at the same time via xDOT and xKSM. |
|    5. | Testing and Documentation           | While we develop our module, we will ensure that our code has significant test coverage (>80%) to ensure quality and provide explanations on how the functions work for the community to review, as well as craft test guides.                                                                       |
|    6. | User Testing                        | We will conduct user testing to improve our product's UX and UI, to ensure that the borrowing and lending functionalities are intuitive. Initially, we will conduct qualitative user testing by observing 10-15 users use the v1 platform and provide a summary of the findings and improvements made based on insights.                                                                                                                |

Other:
- We will implement more quantitative user testing with A/B tests, web analytics, and heatmap once we have more adoption (>100-200 DAU) in order to get more significant insights (not part of v1 deliverables).  

## Future Plans

**Community Development**:

- In the short term, we will focus on acquiring the early users for our platform, who are large token holders and institutions. The exchange rate will be lower initially as the pool size and number of blocks are lower, so there's a strong incentive for larger players to deposit their tokens early on. As the Kusama and Polkadot mainnets are approaching, we will be forming partnership with validators who might be interested in forming partnerships or use our platform to gain liquidity on their staked tokens.
- We will frequently post on social media (Twitter, Medium, Youtube) to provide development news and video tutorials regarding our platform. We will also work with influencers, who can break down complex concepts and provide clear guidance to the mainstream users on how to use our platform.
- Our long term plan is to provide a suite of products that will allow users to earn superior interests with their assets on our Defi platform, as we truly believe in the benefits of decentralization and allowing more mainstream investors to participate in the financial economy.

**Product Development**:

- This is our tentative development roadmap for the rest of this year:
    ![image](https://user-images.githubusercontent.com/56744348/111891918-94ebaa80-89c4-11eb-8707-a16b33e7b54c.png)

## Additional Information :heavy_plus_sign:

- We are a team that met and formed during the March 2021 Polkadot Hackathon in Shanghai. Our team members are both in the US and China, and come from a strong engineering background (crypto/blockchain, startup, traditional tech company), product management and financial background (venture capital, Defi). We were able to deliver our proof of concept within a month, and earned third place at the Hackathon.

- We are currently still in the process of creating our white paper, but you can find more details about our documentation on our gitbook: <https://docs.parallel.fi/>.

- Email: team@parallel.fi
- Website: parallel.fi
- Twitter: <https://twitter.com/ParallelFi>
- Medium: <https://medium.com/@parallelfinance>
- LinkedIn: <https://www.linkedin.com/company/parallel-finance/>
- Unofficial white paper: <https://docs.parallel.fi/>
- Testnet demo: <https://parallel.fi/#/app>
- Video demo (Hackathon March 2021): <https://youtu.be/lgQX9rELpL8>
