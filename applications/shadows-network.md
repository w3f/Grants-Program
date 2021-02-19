# Open Grant Proposal

* **Project Name:** Shadows Network
* **Payment Address:** 198yWGziNfUgrTXf6QiUC5QqEhJ34cyxf

## Project Overview :page_facing_up: 
Shadows Network is a Polkadot parachain based on Substrate. As long as you consider valuable assets, they can be synthesized on the chain through Shadows Network. And Shadows network is a decentralized financial integrated platform integrating stablecoins, collateral lending, asset synthesis, and derivatives trading. will introduce a trillion-level derivatives market into the Polkadot ecosystem.

### Overview

Shadows Network is a Polkadot parachain based on Substrate, focusing on synthesizing derivative assets into the Polkadot ecosystem. It is like the "shadows" of real assets on the blockchain. Shadows Network will open up the channel for real assets to be synthesized to the blockchain. Real assets that you think are valuable can be synthesized through the Shadows protocol to achieve decentralization of asset value. Shadows Network pioneered the "debt pool" model, which has the advantages of unlimited liquidity and zero slippage on-chain transactions. It has a more friendly transaction experience and lower transaction costs than other centralized exchanges and SWAP.

Shadows network will strive to become one of the Polkadot parachains by participating in the parachain slot auction. However, even if the slot usage rights are not successfully obtained by then, the shadows network will also be counted as parathreads to obtain cross-chain capabilities.

Most of our team members come from first-line Internet companies, cryptocurrency wallet companies and cryptocurrency exchanges. They have participated in the development of multiple blockchain projects and have in-depth research and accumulation of blockchain technology. We have developed many dapps based on Ethereum. Due to the limitations of Ethereum itself, many of our ideas cannot be implemented and realized on Ethereum. We have done in-depth research on Polkadot and Substrate technology, Polkadot's cross-chain technology, parachain slot, governance model, etc. We believe that Polkadot is one of the most advanced technologies and concepts at present. What Shadows Network wants to do is to synthesize assets into the blockchain, so that everyone can truly control their assets and realize asset security and asset transaction security.

### Project Details 
![](https://raw.githubusercontent.com/ShadowsNetwork/document/main/images/shadowsExchange.png)

The Shadows Network architecture design includes: DOS、MintX、Exchanges、Fee Pool、Debt Pool、Liquidation and Off-chain Workers.

<img src="https://raw.githubusercontent.com/shadowsnetwork/document/main/images/architecture.jpg" width="100%">

**DOS**

DOS token is a governance token issued by Shadows Network. All synthetic asset are backed by DOS token. synthetic asset are minted when DOS holders stake their DOS as collateral. 

**MintX & xUSD**

DOS holders can mint xUSD through MintX by stake DOS. MintX is a reactor for synthetic assets. xUSD is a stable currency issued by Shadows Network. xUSD is minted by stake DOS and The mortgage rate of DOS must not be less than 800%. All synthetic asset transactions will be conducted around xUSD.

**Exchanges**

Shadows.Exchange provides many advantages over centralised exchanges and order book based DEX’s. All trades are executed against the contract, known as P2C (peer-to-contract) trading. Assets are assigned an exchange rate through price feeds supplied by Off-chain workers, and can be converted using the Shadows.Exchange dApp. This provides infinite liquidity up to the total amount of collateral in the system, zero slippage, and permissionless on-chain trading.

**Fee Pool**

When SyAs are exchanged through the Shadows Exchange, a 0.3% fee is extracted and sent to the fee pool to be claimed by DOS stakers. When claiming fees (also called SyAs exchange rewards) a staker also claims their DOS staking rewards, which reward them with extra DOS for staking the DOS they currently have.

**Debt Pool**

The system tracks the debt pool (as well as each individual staker’s debt) each time an DOS holder mints or burns Synths. It does this by updating the Cumulative Debt Delta Ratio. This measures the DOS staker’s proportion of the debt pool at the time they last minted or burned, as well as the debt change caused by other stakers entering or leaving the system. The system uses this information to determine the individual debt of each staker at any time in the future, without having to actually record the changing debt of each individual staker.

**Liquidation**

In order to avoid systemic risks, We introduced the introduced liquidation. When the staker's position is lower than 750%, the system will prompt the liquidation risk. If the position has not been increased for a period of time, the collateral will be liquidated.

**Ingester**

Ingester is our implementation of Off-chain workers. The prices of all synthetic assets in the Shadows system need to query and/or process off-chain data before it can be included in the on-chain state. The conventional way of doing this is through oracles. But oracle still has several flaws with respect to security, scalability, and infrastructure efficiency.

To make the off-chain data integration secure and more efficient, We use Substrate off-chain workers. The off-chain worker subsystem allows execution of long-running and possibly non- deterministic tasks (e.g. web requests, encryption/decryption and signing of data, random number generation, CPU-intensive computations, enumeration/aggregation of on-chain data, etc.) that could otherwise require longer than the block execution time.

### Ecosystem Fit 
We have a deep understanding of many projects in the Polkadot ecology, and found that there are several projects that we think it is necessary to list to make a difference explanation, Acala, Laminar and Coinversation:

The main difference between Shadows Network and Acala Network is that Acala's swap and liquidity mining have the risk of lack of liquidity and the pain points of high slippage. The original "debt pool" mechanism of shadows network has the advantages of unlimited liquidity and zero slippage trading. Acala's stablecoin and lending business rely heavily on the third-party oracle chain link, which has some shortcomings in security, scalability, and basic efficiency. The shadows network will use the off-chain workers provided by Substrate to improve this. , Safer and more efficient.

Laminar relies heavily on off-chain asset collateral, such as U.S. dollars, which has the shortcomings of inefficiency and inflexibility, while the shadows system uses digital assets such as DOT, DOS, BTC, ETH as collateral, which is more flexible, efficient and safe, and users The options are more extensive.

Coinversation is not a parachain and based on the ink! smart contract depends on the existing parachain. The shadows network develops parachains based on substrate. Based on the rust language and Substrate's forkless runtime upgrades, the shadows network is more efficient and flexible.

Coinversation currently relies on a centralized oracle, which has the risk of being opaque and easy to operate, while the shadows network parachain is based on the off-chain worker of the substrate, which can achieve little dependence on the oracle, which means that the oracle is brought about The risk is also smaller. We haven't seen any "Liquidation" plan in Coinversation, and shadows network has a more complete liquidation mechanism to avoid systemic risks.

From the above analysis and comparison, shadows network has obvious differences from several other products. Shadows has a more complete design and better technical solutions, and we have considered more mature risk control.

## Team :busts_in_silhouette:

### Team members
* **Zoujun Chen:** Co-Founder. He once worked for the Fortune 500 Amphenol Group. He entered the blockchain industry in 2013. He is the main person in charge of multiple blockchain projects and has many years of industry experience.

* **Mingchang Lin:** Co-Founder. Cryptographic System Engineer once worked for Baidu, and participated in the development of multiple blockchain projects since 2014.

* **Ling Cai:** Head of commerce and marketing. He once worked in a first-line exchange company.

* **Xinan Li:** A traffic expert, with in-depth understanding and practical experience in Internet industry traffic, and very familiar with traffic promotion methods.

*  **Zhuliang Li:** A financial expert. He once worked for Ping An Bank of China (one of the largest commercial banks in China). He is familiar with the design of financial products, the simulation and calculation of financial models, and financial risk control.

* **Hehong Wu:** Front-end engineer, has in-depth research on various front-end technologies.
    Guang Xiao: Senior UI designer, once worked in China's first-line game development company：NetDragon and Nasdaq:NTES.

  We also have several developers from the member companies of Polkadot China Technology Alliance who contributed code to the shadow network.	

### Contact
* **Contact Name:** Polkadot (China) Technology Alliance
* **Contact Email:** polkachina@163.com
* **Website：** 
  * Alliance website：https://polkachina.org
  * Shadows Network website: https://www.shadwos.link (Developing)
  * WhitePaper: https://github.com/ShadowsNetwork/whitepaper

### Legal Structure 
* **Registered Address:** Room F01, 3rd Floor, Annex Building, F Zone F, Fuzhou Software Park, No. 89 Software Avenue, Gulou District, Fuzhou City, Fujian Province, China

### Team's experience
Most of the members of our team come from Polkadot (China) Technology Alliance. Most of them have worked in first-line Internet companies, cryptocurrency wallet companies and cryptocurrency exchanges. They have participated in the development of multiple blockchain projects and have in-depth knowledge of blockchain technology. Research and accumulation have also accumulated a lot of blockchain industry resources in China.

### Team Code Repos
* https://github.com/ShadowsNetwork


## Development Roadmap :nut_and_bolt: 

We expect that the entire project will be split into two grants. The first grant includes the development of parachains and the implementation of core modules. But only documents, test cases and api are provided. But through the API, you can already participate in the casting and trading of synthetic assets. The second grant will include the development of a complete user interface, dapp, and wallet. It will be a complete product that can be experienced by then. Users can directly experience the functions without knowing the technical details.

    -----------------------------------------------------------
    | Substrate chain with MintX & Ingester & Exchange module  |  <---- This grant
    -----------------------------------------------------------
    | User interface with Dapp & Wallet                        |  <---- Future grant
    -----------------------------------------------------------
    | More synthetic Assets (e.g S&P500, TSLA)                 |
    -----------------------------------------------------------
### Overview

* **Total Estimated Duration:** 3 months
* **Full-time equivalent (FTE):**  5
* **Total Costs:** 1.35 BTC

### Milestone 1 — Implement Substrate MintX&Ingester Module

In this milestone, we developed the MintX module and the Ingester module. MintX is used to mint synthetic assets, while Ingester is used to query the price of assets outside the chain. After completing this milestone, we can experience the entire process of casting synthetic assets.

* **Estimated Duration:** 1.6 month
* **FTE:**  3
* **Costs:** 0.7 BTC

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0. | License | Apache 2.0 |
| 1. | Documentation | Instructions and examples for use MintX  and Ingester        |
| 2. | Testing Guide | provide test suite (mock and test files) for the MintX and Ingester describing how the module can be tested. |
| 3. | Substrate module: MintX | We will create a Substrate module MintX. DOS holders can mint xUSD by stake DOS. And Debt Pool is also implemented in the MintX module. |
| 4. | Substrate module: Ingester | We will create a Ingester module that is a off-chain worker used to query and/or process off-chain data. |
| 5. | Tutorial | We will write an tutorial about how to use MintX & Ingester. |
| 6. | Testing | The code will have proper unit-test coverage to ensure functionality and robustness. |
| 7. | Docker | We will provide a dockerfile to demonstrate the full functionality of our chain with MintX  and Ingester moudle. |


### Milestone 2 — Implement Substrate Exchange Module

At this milestone, we developed the exchange module. The first milestone has been able to mint synthetic assets. When this milestone is completed, our synthetic assets will be available for trading.

- **Estimated Duration:** 1.4 month
- **FTE:**  3
- **Costs:** 0.65 BTC

| Number | Deliverable                | Specification                                                |
| ------ | -------------------------- | ------------------------------------------------------------ |
| 0.     | License                    | Apache 2.0                                                   |
| 1.     | Documentation              | Instructions and examples for use Exchange.                  |
| 2.     | Testing Guide              | provide test suite (mock and test files) for the exchange describing how the module can be tested. |
| 4.     | Substrate module: Exchange | We will create a exchange module that will be used to trade synthetic assets. And Fee Pool is also implemented in the Exchange module.5. |
| 5.     | Tutorial                   | We will write an tutorial about how to use MintX & Ingester. |
| 6.     | Testing                    | The code will have proper unit-test coverage to ensure functionality and robustness. |
| 7.     | Docker                     | We will provide a dockerfile to demonstrate the full functionality of our chain with Exchange module |

## Future Plans
There are many different kinds of SyAs that can be added to the system to provide greater utility to Shadows.Exchange. These include leveraged assets that are not available on other platforms as well as indices like the S&P500 and equities like APPLE and TSLA.

## Additional Information :heavy_plus_sign: 
So far we have completed the project possibility verification evaluation, completed the Substrate-based architecture design, and released the project white paper.