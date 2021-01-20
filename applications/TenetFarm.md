# Open Grant Proposal

> This document is referenced in the terms and conditions and therefore needs to contain all the required information. Don't remove any of the mandatory parts presented in bold letters or as headlines! See the [Open Grants Program Process](https://github.com/w3f/Open-Grants-Program/blob/master/README_2.md) on how to submit a proposal.

* **Project Name:** Tenet Farm
* **Team Name:** TENET
* **Payment Address:** BTC: 1LrGjxMVugZcJ2oyg3PoW2XvhW2nX2WJJ4

*The above combination of your GitHub account submitting the application and payment address will be your unique identifier during the program. Please keep them safe.*

## Project Overview :page_facing_up: 
If this application in response to an RFP then please indicate this on the first line of this section.

### Overview

Tenet is the first whitelabel geyser solution that all DeFi projects can use to quickly spin up incentivized liquidity pools on various protocols. The basic function of Tenet is serving as a cross-chain Automated Market Maker (AMM) connector that provides a decentralized Liquidity Tap for various tokens. The Liquidity Tap is the powerhouse of the Liquidity Pool, employing a dynamic algorithm to give the Liquidity Providers fairer, richer and more efficient incentives. 

Tenet is committed to building connectors and toolkits in the DeFi that provides liquidity accelerators, liquidity operation tools, DeFi trading aggregator, long tail asset lending solutions, etc.

In June 2020, Tenet team members began exploring sustainability and broader application scenarios of Automated Market Maker (AMM) to replace transaction matching in order book, so as to make roles and responsibilities of liquidity providers more refined and make this process smarter. What's more, in this way, benefits allocation would become fairer. And that's how Tenet is originated. After that, Tenet team improved AMM platform Layer 2 facilities and composed a whitepaper, starting the product research and development of Tenet, aiming to develop a Defi product for all. Tenet Version 1 has already been official launched on January 5th 2021. 

### Project Details 

The development of Tenet V1 has been completed, along with the auditing process by an external vendor. As the cross-chain connectors and toolkits in DeFi, Tenet V1 has been deployed on Ethereum and Binance Smart Chain already.

- Tenet V1 (ETH version): https://eth.tenet.farm
- Tenet V1 (BSC version): https://bsc.tenet.farm
- Tenet V1 Product Paper: [TENET White Paper](https://tenet-resource.s3-ap-northeast-1.amazonaws.com/Tenet-WhitePaper-EN-V3.pdf)

Tenet project is mainly composed of three parts,
1. Smart contract - Solidity
2. Front-end - ReactJS
3. Back-end - C++

As a decentralized product, Tenet's main logic is implemented by smart contracts. The front-end and back-end only display and interact with data, and do not involve data modification. Therefore, all tenet functions can be directly called via smart contracts. And now tenet's smart contracts have been open sourced, and the front-end and back-end codes are not yet. We will decide whether to open source the front-end and back-end codes based on the development situation.

##### The Core Features of Tenet V1
Tenet aims to build a cross-chain and cross-platform toolkit protocol that serves as a relatively easy entrance for all DeFi participants. Tenet allows the demand side to customize all parameters of the liquidity tap, and help them reach out to more liquidity participants effectively. For token holders, Tenet provides a smarter and more convenient solution, and ensures fair allocation of mining rewards through the optimization of the algorithms of initial mining incentives and LP token pools. Based on the idle funds and unallocated rewards, Tenet also has huge potential to explore the long-tail asset lending market.
1. Liquidity Tap
    
    The liquidity tap will serve as the infrastructure of the liquidity pool, optimizing mining reward allocation by balancing the liquidity providers' (mining participants) staking time, share, and frequency in the liquidity pool and LP token pool, and then unlocking their mining rewards linearly. The liquidity tap also simplifies the process of creating liquidity pools from creation to reward distribution and redistribution, saving the cost and effort of developing smart contracts or performing manual distribution across multiple AMM platforms by the liquidity demand side.

    ![image](https://tenet-resource.s3-ap-northeast-1.amazonaws.com/polkadot-grants-images/01.jpg)

2. Optimization of the Liquidity Pool Reward and LP Token Pool Reward Algorithms

    From the perspective of the liquidity provider, the LP gets a share of the transaction fees in various AMM pools. The mining model is users must persistently lockup their funds to earn passive transaction fee benefits. In the long run, later entrants will find it difficult to compete with first movers and will face the challenge attracting enough liquidity providers. Tenet has therefore optimized the algorithm for incentive rewards to motivate liquidity providers.
    
    At the same time, in order to circumvent, in a certain extent, the inflation caused by liquidity mining, Tenet's embedded algorithm also includes an optimization for LP token rewards; it incentivize more Token holders to deposit assets to the Tenet Liquidity tap, weakening the negative impact of bonus hunters on Token inflation rates.


3. Fully Customizable Configuration

    Tenet's liquidity tap configuration is fully customizable, from the AMM platform options in the initial phase, native token issuance protocol options, to the mining cycle, initial incentive requirements, mining revenue exercise option, etc., all can be customized according to the respective needs of the DeFi protocols. In order to achieve this goal, Tenet provides a variety of algorithm standards, and configuration is easy to use and highly flexible.
    
    ![image](https://tenet-resource.s3-ap-northeast-1.amazonaws.com/polkadot-grants-images/02.jpg)

4. DeFi Aggregate Trading Tool

    Tenet establishes the connection among AMMs on multiple chains, which supports liquidity provider’s one-click participation in mining and withdrawal under optimal ROI. Tenet helps to discover the optimal capital flow path to combine frequent operations including deposit, swap, withdraw, etc. among various platforms, which as a result reduces gas fees. Secondly, Tenet also develops a comparison tool, to assist token holders in comparing and screening out mining pools with a decent revenue and comparatively low risk. In later versions, Tenet will also be able to support the automatic transfer of funds among liquidity pools to capture higher ROI. 
 
    ![image](https://tenet-resource.s3-ap-northeast-1.amazonaws.com/polkadot-grants-images/03.jpg)

5. Hybrid Revenue Model

    Liquidity Providers that obtain their mining revenue on Tenet can earn Ten reward in addition to commission and DeFi protocol native tokens. When a Liquidity Provider deposits its Uniswap V2 Tokens in Tenet and places it in the corresponding liquidity tap, he or she earns revenue after a pre-determined block height. At the same time, the liquidity tap creator puts a certain amount of Ten in Tenet incentive pool, and distributes additional rewards to the liquidity provider through the liquidity tap it creates.
    ![image](https://tenet-resource.s3-ap-northeast-1.amazonaws.com/polkadot-grants-images/04.jpg)

 
##### The Customers / Partners / Vendors of Tenet V1

Launched on Jan 5th 2021, Tenet V1 product has already inked partnerships with or be connected with multiple DeFi protocols and wallet suppliers. 
Tenet V1 has officially supported the following DeFi protocols:
Ethereum - Uniswap, Sushiswap, Harvest, Curve, Yearn, Hvaluedefi, Balancer, Cover, Dforce, Swerve, Aave, Compound, etc.
Binance Smart Chain - Pancakeswap, Bakeryswap, Venus, Dforce, etc.
Tenet V1 has officially supported the following Wallets:
Ethereum - MetaMask, MathWallet, WalletConnect, Coinbase Wallet, etc.
Binance Smart Chain - MetaMask, Binance Chain Wallet, MathWallet, WalletConnect, etc.
DApp - Imtoken, Trust Wallet, Math Wallet, etc.

Tenet has officially announced the first Liquidity Tap on Ethereum version:
As the first partner of Tenet to create a Liquidity Tap on eth.tenet.farm, Fountain is a block-chained content ecosystem based on Proof of Contribution. Fountain is backed by China’s Top original content community Jianshu.com. Established in 2013, Jianshu relies on convenient creative tools and intelligent distribution strategies, Jianshu has gathered a large number of high-quality authors and content. Jianshu has received multiple financing from SIG Heiner Asia, Junlian Capital, Saifu Investment Fund, Gobi Venture Capital and other quality investment institutions. Jianshu has been launched on the web, iOS, Android and other mainstream platforms. With a total registered number of users of more than 12 million, an average of one new piece of content is published every second. The average monthly traffic is 200 million visits.





### Ecosystem Fit 
Currently, there are no known competitors of Tenet. Tenet is the only whitelabel geyser solution that all DeFi projects can use to quickly spin up incentivized liquidity pools on various protocols across Binance Smart Chain, Ethereum, and Polkadot in the future. Incentives can include both their own native token as well as Tenet's native $TEN token. Other blockchains will be included soon so that the Tenet protocol and its $TEN token will become the first project of its kind - a Layer 2 DeFi connector for all Automatic Market Maker (AMM) platforms.
Instead of being a competitor, Tenet introduces the liquidity tap + liquidity pool as a market standard in the future to fully guarantee the effectiveness and efficiency of AMMs.

For example, if a project wants to start a Balancer liquidity pool, they can start the pool, incent it with their own token and redirect TEN incentives to it all within our easy-to-use interface at https://eth.tenet.farm/pool/create. We call this idea a Layer 2 AMM connector or Liquidity Tap.


## Team :busts_in_silhouette:

### Team members
* Steve Thung
* Wade
* Liang Peng

### Contact
* **Contact Name:** Steve Thung
* **Contact Email:** steve@tenet.farm
*  **Website:** https://www.tenet.farm

### Legal Structure 
* **Registered Address:** Maystar Chambers, P.O. Box 3269, Apia, Samoa
* **Registered Legal Entity:** Tenet Finance Limited.

### Team's experience
Steve Thung, the CTO of Tenet. His charge is to develop smart contracts, design product functionalities, and manage project schedule. So far, Steve has 15 years of trading system development experience and many years of blockchain development experience.

### Team Code Repos
* https://github.com/TenetFarm/tenet-core


## Development Roadmap :nut_and_bolt: 

### Overview
* **Total Estimated Duration:** 1.5 Month
* **Full-time equivalent (FTE):**  2 FTE
* **Total Costs:** 0.8 BTC

### Milestone 1 Polkadot Adaption Development
* **Estimated Duration:** 1.5 month
* **FTE:**  2
* **Costs:** 0.8 BTC

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | MIT |
| 0b. | Documentation | Tenet documentation center (Help center) is live, we will provide more inline documentation of the code and a basic tutorial to show how Tenet (Polkadot version) works. |
| 0c. | Testing Guide | The code will have unit-test coverage (min. 70%) to ensure functionality and robustness. In the guide we will describe how to run these tests | 
| 0d. | Article/Tutorial | We will write an article or tutorial that explains the work done as part of the grant. |  
| 1. | Chain Adapter | Implement a bridge for TEN token swap among substrate, ETH and BSC. There will be a smart contract for locking tokens on substrate.|  
| 2. | Create Liquidity Tap | Implement Liquidity Tap function on substrate via smart contract.|  
| 3. | Trading Aggregator | Implement a trading aggregator which can call the trading interface of other AMM products on substrate. |  



## Future Plans
Tenet aims to build a cross-chain and cross-platform toolkit protocol that serves as a relatively easy entrance for all DeFi participants. Based on the already developed toolkits like Liquidity Tap, DeFi trading aggretator, Tenet will explore more potentials in liquidity accelerators, liquidity operation tools, DeFi trading aggregator, long tail asset lending solutions, etc. We also have a plan to implement our core features in INK!

## Additional Information :heavy_plus_sign: 
As the first cross-chain DeFi Layer 2 AMM platform, we had gained much traction in recent weeks and received numerous enquiries from prominent projects interested in partnering and establishing their liquidity taps on Tenet. For instance, the first project on Tenet V1 ETH version is Fountain, a blockchain project backed by China’s top content community Jianshu.com with over 12 million user base.

To know more about Fountain: https://tenetfarm.medium.com/tenet-launces-its-first-liquidity-tap-with-fountain-ftn-reaching-12-million-jianshu-users-9f9dfa8ce89b

- Tenet V1 has officially supported the following DeFi protocols:

    - Ethereum - Uniswap, Sushiswap, Harvest, Curve, Yearn, Hvaluedefi, Balancer, Cover, Dforce, Swerve, Aave, Compound, etc.
    - Binance Smart Chain - Pancakeswap, Bakeryswap, Venus, Dforce, etc.
    ![image](https://tenet-resource.s3-ap-northeast-1.amazonaws.com/polkadot-grants-images/10.jpg)


- Tenet V1 has officially supported the following Wallets:

    - Ethereum - MetaMask, MathWallet, WalletConnect, Coinbase Wallet, etc.
    - Binance Smart Chain - MetaMask, Binance Chain Wallet, MathWallet, WalletConnect, etc.
    - DApp - Imtoken, Trust Wallet, Math Wallet, etc.
    ![image](https://tenet-resource.s3-ap-northeast-1.amazonaws.com/polkadot-grants-images/09.jpg)
