# Meta Defender

- **Team Name:** Meta Defender Team
- **Payment Address:** 25r4oZedLXEunTmdvytyH4xcmQqqWWw8KmphdiD5LqpU29pv （aUSD）
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 1


## Project Overview :page_facing_up:

### Overview

Meta Defender is a decentralised insurance protocol built on the blockchain. It is developed with ink! smart contract, and is designed to provide insurance for transactional and non-transactional assets on the blockchain of users. Later on, it will support cross-chain insurance through substrate and XCM. In the meantime, Meta Defender is also working to apply blockchain technology to real-world insurance scenarios, becoming an important addition to the traditional insurance industry. This project is the first-place winner of Acala Hackathon and is in the 2022 cohort of Web3.0 Bootcamp supported by Web3.0 Foundation and Parity.

The rapid development of Defi has led to a huge increase in the digital assets that are transactional in smart contracts, which also makes it very vulnerable to cyber attacks. Conventional insurances, on the other hand, have limited capacity to provide transparent, secured and rapid protection for precious assets. In order to cater for the increasing needs, our team decided to work on a Defi insurance protocol, also to solve several pain points in existing web3 insurance products.

Meta Defender is planned to launch on the parachains in the Polkadot Ecosystem, designed to provide insurance services to multiple subject-matters in the Polkadot Ecosystem.

### Project Details

### 1. Mockups/designs of any UI components

- Homepage

<p align="center"><img width="431" alt="1" src="https://user-images.githubusercontent.com/86153748/180445520-95d6fdf0-2bb6-4fb4-ab76-82e8c98633d0.png" /></p>

- Buy Cover

<p align="center"><img width="659" alt="2" src="https://user-images.githubusercontent.com/86153748/180446206-ad9f8802-434a-4520-a18c-51342c31756a.png" /></p>

- Become an underwriter

<p align="center"><img width="748" alt="3" src="https://user-images.githubusercontent.com/86153748/180446422-90fbaa71-8016-4be2-9e86-8aaf269a6b7e.png" /></p>

### 2. Project Technology Stacks

- Rust
- Substrate
- Node.js
- Ethers.js



### 3. MVP

<p align="center"><img  src="https://user-images.githubusercontent.com/86153748/180446559-38086571-8067-4dcd-8206-2a4b708966a5.png" /></p>

<p align="center"><img  src="https://user-images.githubusercontent.com/86153748/180447128-52e38234-ca0d-4cb9-bfab-75bbcc2bfe4c.png" /></p>

- Buy Cover

Meta Defender uses stablecoins to insure, underwrite and pay out for claims. Each Meta Defender policy is currently valid for one year. The premium rate will be calculated using a customised AMM 2.0 model, which will be explained in detail in the next part.

- Become an underwriter

Underwriters share the Rewards from each premium according to the weight of the capital they provide to the whole Capital Reserve. At the same time, the underwriting capital is correspondingly frozen until the policy expires. Until this policy expires, the underwriter can only withdraw the unfrozen portion of its own provided assets.

- Leveraged Mining

The Meta Defender protocol makes secondary use of the underwriting capital, with 70% of the capital participating in the public chain's officially secured mining pool. 20% of the proceeds of Leveraged Mining will go to a Risk Reserve.

- Risk Reserve

When a claim occurs, priority is given to using the funds in the Risk Reserve to pay out; when there is not enough to pay out, the excess is shared among all underwriters according to the weighting of the capital in the Capital Reserve by the underwriters. In that way, returns for underwriters can be maximised and the risk of loss can be minimised.



### 4. Documentation of core components, protocols, architecture, etc. to be deployed

For more detailed explaination, please check out our [white paper](https://metadefender.gitbook.io/meta-defender-v3-eng-ver./).

#### 4.1 AMM 2.0 Model for calculating premium rates

First, two concepts are defined,

- Premium Rate (α) : the amount spent to purchase the policy, as a ratio to the policy sum insured;

- Remaining Available Capital (P): the amount of assets left in the Capital Reserve in the extreme case, assuming all surviving policies have claims; also understood as the total amount of money currently in the Capital Reserve, minus the total amount of coverage for all unexpired policies.

In the absence of new underwriters joining or no underwriters withdrawing liquidity, both of the above always satisfy as the followings:

<p align="center"><img  src="https://user-images.githubusercontent.com/86153748/180447879-a47fefed-cf18-42ed-8d94-d4df011ea2fa.png" /></p>

k is a fixed value. As the number of policies increases, P gradually decreases and α increases, representing an increase in insurance demand, and vice versa.

When new underwriters join, P increases, α remains constant, and k increases accordingly.

<p align="center"><img  src="https://user-images.githubusercontent.com/86153748/180448036-5d53dd47-7726-42a9-a8ea-cbd81a490295.png" /></p>

Similarly, when the underwriter withdraws liquidity, P and k decrease at the same time.

If the policy expires and frozen capital is released, this also leads to an increase in P. In this case, k is constant and α decreases.

There is a minimum value of α as α0​, and the decrease of α is limited to this value, which then causes the value of k to increase. When the value of P "expands" to the point where α touches α0​, then α stops decreasing and k increases:

<p align="center"><img  src="https://user-images.githubusercontent.com/86153748/180448168-7e79ff63-9c1a-4bfe-aa3b-0c0619951e96.png" /></p>

In the traditional insurance industry, premiums are actuarially priced based on the probability of historical risk events. The existing blockchain insurance products also build some actuarial models, but it is difficult to ensure the actuarial results are truly objective and credible when the historical data samples are not sufficient. Meta Defender tends to determine the risk pricing of each agreement based on the most basic economic rule: the relations between supply and demand.

One possible question is whether the mechanism will cause underwriters to purchase their own insurance in bad faith and drive up premium rates. In order to avoid such attack, In order to calculate k, Meta Defender will add virtual liquidity to the real P value, which will make the curve of premium rate more smooth and significantly increase the cost of such attack.

#### 4.2 Rewards and responsibility of underwriters

To facilitate valuation, Meta Defender suggests to use a stablecoin for insurance and underwriting purposes. Assuming the stablecoin is called Token, the underwriter provides A tokens(A as the number of the token) to an Capital Reserve and receives a number of sTokens (staked token) based on the capital exchange rate η of the pool. The number of sToken, which is A' is:

<p align="center"><img  src="https://user-images.githubusercontent.com/86153748/180448275-9b2683b8-1f99-458b-b1fb-14ee73463dd8.png" /></p>

The sToken is not a transferable ERC20 token; it is simply a credit to the underwriter by the pool as a credential to capture premium rewards and withdraw assets in the future.

At the time each pool is created, the starting value of η is 1. Given that pay-outs of claims are prioritised through the Mining Pool balances for claims(Risk Reserve), the value of η is maintained at 1 as long as there is no large-scale claims event resulting in an encroachment on the Capital Reserve's principal.

#### 4.2.1 Global Variables

- η: the exchange rate of Token to sToken;
- accumlatedRewardPerShare (accRPS): 1 sToken's accumulated captured premium reward;
- accumulatedShadowPerShare (accSPS): 1 sToken's accumulated "captured" risk;
- accumulatedShadowPerShareDown (accSPSDown): the release (reduction) of accSPS as a result of policy expiration;
- latestUnfrozenIndex: For the most recent policy written off, the latest underwriters who joined the pool that covered this policy. Or in other words: "youngest one" (age = length of time in the pool)


#### 4.2.2 Data Structure of the Underwriter and the Policy

When an underwriter stakes some Tokens to the protocol, the protocol marks him like this:

- index: the order in which the underwriter joined the protocol;
- sTokenAmount: the number of sTokens acquired by the underwriter (i.e., A as the number of Token in the previous section);
- rewardDebt（RDebt）: ​sTokenAmount∗accRPS, the reduction factor for calculating the underwriter's capture of the reward;
- shadowDebt（SDebt）：sTokenAmount∗accSPS​, the reduction factor for calculating the underwriter's capture of the risk;
When a policy is created, the protocol will mark it as follows：
- coverage: the policy’s coverage, also the shadow that will be shared by all underwriters;
- ΔaccSPS:coverage/sToken.totalSupply,the incremental accSPS resulting from the policy - it will accumulate in accSPSDown when the policy expires;
- latestProviderIndex: the index of the last underwriters of the pool, which can be understood in conjunction with the latestUnfrozenIndex in the previous section

#### 4.2.3 Policy Generation and Reward Capture

After a policy is generated, we set the amount paid by policyholder as “fee”, and we have

<p align="center"><img  src="https://user-images.githubusercontent.com/86153748/180448376-818e25d1-ba92-4e23-a75e-c878b38c3b18.png" /></p>

For each underwriter in the underwriting Capital Reserve, the withdrawable proceeds at this point are calculated as:

<p align="center"><img  src="https://user-images.githubusercontent.com/86153748/180448694-cea29565-5c41-4507-ad8a-eb7be1e98a70.png" /></p>

​The proceeds can be immediately withdrawn to the underwriter's own wallet.

#### 4.2.4 Policy Generation and Frozen Capital

A policy is generated and the accSPS is increased:

<p align="center"><img  src="https://user-images.githubusercontent.com/86153748/180448807-ec46710a-1b1e-4bd2-aa72-dc8936558d78.png" /></p>

For each underwriter in the pool, the cumulative frozen capital amount is:

<p align="center"><img  src="https://user-images.githubusercontent.com/86153748/180448919-9cd8abe5-7acd-4641-8eb9-19922c7b1e97.png" /></p>

#### 4.2.5 ​When the Risk Reserve is Insufficient to Pay for Claims

When the Risk Reserve does not have enough funds to pay for a policy that actually suffers a loss or damage, the protocol will share the excess of the claim amount with the underwriter according to the weight of the underwriter's sToken.

This is an extremely rare and exceptional circumstance and will result in a reduction of the exchange factor η.
Assume when that this situation arises, and the excess of claims over the Risk Reserve is δ, the new η becomes

<p align="center"><img  src="https://user-images.githubusercontent.com/86153748/180449030-5974765b-12e2-44b2-8f5a-7921aa5ac34d.png" /></p>

TokenRemain includes the token frozen in the protocol of the underwriters who are able to underwrite for new policies, as well as the token of those underwriters who have stopped underwriting for new policies.

​It can be seen that the value of η decreases further, and the number of sTokens - representing the weight of capturing premium rewards, while bearing liability - that can be obtained for an equal amount of Tokens for underwriters joining the pool thereafter is increased . This is clearly due to the reduction in the actual underwriting capacity of the original underwriters following the erosion of the principal in the pool.

#### 4.3 Underwritten Assets Withdrawal Mechanism

#### 4.3.1 Available Assets that can be Withdrawn by Underwriters

Underwriters can withdraw a portion of their unfrozen capital at any time before it is completely frozen. However, the frozen part needs to wait for the corresponding policy expiration to exit.
The assets that can be withdrawn by the underwriter is calculated by the formula:

<p align="center"><img  src="https://user-images.githubusercontent.com/86153748/180449240-14da7bd7-4d06-4c7b-b948-5b096992f7af.png" /></p>

​shadow is the amount of assets of the underwriters that has been frozen. However, the situation becomes more complicated when considering a policy that has expired which results in releasing part of frozen capital.

#### 4.3.2 Cancellation of Policies

Along with the cancellation of policies which expire, the corresponding underwriters’ frozen capital should be released.
When a policy is generated, we record its lastProviderIndex and ΔaccSPS. When it is cancelled, the protocol synchronises the latestUnfrozenIndex to the lastProviderIndex of this policy, and accumulates accSPSDown:

<p align="center"><img  src="https://user-images.githubusercontent.com/86153748/180449348-4a26d62c-9a31-4adc-8b19-bd0b67dbd812.png" /></p>

​When calculating an underwriter's shadow, it is necessary to first determine the relationship between his index and latestUnfrozenIndex. When index<=latestUnfrozenIndex, it means that the capital being released already has the part of the underwriter’s frozen capital. His shadow will be calculated by:

<p align="center"><img  src="https://user-images.githubusercontent.com/86153748/180449456-6baae64f-786f-4012-9e95-37be2179461f.png" /></p>

#### 4.3.3 After Underwriter Withdrawal of Assets

In order to make the protocol easier to maintain and to reduce the cost of gas fee when users invoke the contract, Meta Defender currently requires the underwriter who would like to quit to withdraw all remaining liquidity at once (i.e., withdraw mentioned above).

Of course, you may only want to "withdraw partially". It is very simple to implement this - you could simply withdraw in full and then re-join with your desired coverage amount. This saves the protocol from having to maintain a huge ledger, where the cost of gas would otherwise become unimaginable.

When an underwriter withdraws assets, he or she needs to destroy all of his or her sToken.

Suppose an underwriter P destroys all of his sToken, declaring that he has ended his status as an underwriter. Regardless of how much capital he has actually withdrawn (usually less than his original provided capital, i.e. η*sTokenAmount, less than ), he can no longer continue to capture premium and no longer underwrite new policies, i.e., no longer "capture" new shadow.

The protocol creates a "historical identity" for him, P', and records the following parameters:

fsToken(frozen_sToken): the number of Tokens that this underwriter has not withdrawn, which will be then converted to sToken according to current η;

accSPS_P: the accSPS of P when it quits the protocol;

index: the index inherited from P;

sTokenAmount_P : the sTokenAmount inherited from P;

SDebt_P: the sDebt inherited from P.

It can be seen that the maximum amount that can eventually be released by P' is:

η∗fsToken​ ------ ①;

The shadow inherited by P' from P is:

sTokenAmount_P*accSPS_P - SDebt_P

Or

sTokenAmount_P*（accSPS_P - accSPSDown）------- ②;

Obviously, at this point ②>=①.

Thereafter, the Meta Defender protocol monitors for changes in ②. As the earlier policies gradually expire and are cancelled as well as the capital is unfrozen, the value of ② gradually decreases (of course, the relationship between index and latestUnfrozenIndex is taken into account, and ② is really reduced when index <= latestUnfrozenIndex.

When ② < ①, the difference between ① and ② is the capital of P being unfrozen. P extracts it, updates the value of ① to ②, and waits for the next unfrozen part.

As accSPSDown increases, the value of ② eventually goes to zero. Zero is the minimum value of ② and cannot be a negative number.

After ① goes to zero, all residual capital of P finishes withdrawing.

#### 4.4 Leveraged Liquidity Mining Rewards Mechanism

The holder of sToken, i.e. the underwriter of Meta Defender, is entitled to the Leveraged Liquidity Mining rewards.

In order to encourage underwriters to provide long-term, stable capital, sToken holders are required to hold their sTokens for a certain period of time (approximately 14 natural days, with minor variations depending on the speed of block creation on the mainnet) before they can participate in the withdrawal of this Rewards.

After withdrawing from the Capital Reserve and destroying the sToken, the holder will lose the eligibility to withdraw the proceeds. The mining proceeds will be hosted separately by Meta Defender's governance contract and will be claimed from the pool for sToken.




### Ecosystem Fit

- Where and how does your project fit into the ecosystem?

Meta Defender will use the stablecoin in parachains as the currency for buying cover, underwriting and for payouts of claims. Currently Meta Defender is planned to be deployed with ink! Smart contract and compatible with Substrate and XCM. Ultimately, we would like to provide insurance services to the main parachains and major protocols in the Polkadot Ecosystem. Also, by introducing XCM, we would like to achieve cross-chain insurance.

Our Leveraged Mining component will cooperate with top liquidity mining protocols in Polkadot Eco, which will increase the TVL of those projects.

We are planning to integrate the Blockchain Oracles function in the Polkadot Ecosystem，e.g. Phala, which will expand our insured subject-matters to more off-chain scenarios.

- Who is your target audience (parachain/dapp/wallet/UI developers, designers, your own user base, some dapp's userbase, yourself)?

Our target audience will be the users who would like to buy covers for their digital assets in the Polkadot Ecosystem, as well as those who would like to utilise their idle capital to become an underwriter and gain proceeds from Liquidity Mining in the Polkadot Ecosystem and rewards from our insurance protocol.

- What need(s) does your project meet?

As the rapid development of Defi markets, asset holders are looking for an insurance protocol that can protect them when emergencies like theft, cyber attack and data leakage happen. Meta Defender is designed for providing such services.

- Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?

There is an insurance protocol called Nsure that received a grant from W3F. Meta Defender has following highlights compared to Nsure：

Meta Defender’s pricing model is an upgraded Automated Market Maker Model purely based on the relations between supply and demand. Therefore, there is no need to manually adjust the factors for calculating the premium rates because it's auto-generated.

Meta Defender’s Leveraged Mining will cooperate with Liquidity Mining protocols in the ecosystem while Nsure has their own capital mining pool. We believe, cooperating with top Liquidity Mining protocols in the ecosystem will maximise the returns with the capital that underwriters inject to the protocol.

We are also planning to provide insurance service for more off-chain scenarios by integrating blockchain oracles, such as flight cancellation insurance.

## Team :busts_in_silhouette:

### Team members

- Name of team leader: Alvin, CEO
- Names of team members: Angie, Fullstack Engineer & 0xdeadbeef, Fullstack Engineer

### Contact

- **Contact Name:** Alvin Lu
- **Contact Email:** 0xhikarilab@gmail.com
- **Website:** metadefender.finance

### Legal Structure

- **Registered Address:** N/A
- **Registered Legal Entity:** N/A

### Team's experience

Alvin: With a background in financial investing and insurance consulting, as well as working a Tech Lead in a Venture Capital, Alvin brings his varied experience to Meta Defender. Alvin is also the external consultant for two AI based projects of China Life Insurance Company, namely an operational decision making tool and a fraud detection technology. He also has massive experience in blockchain, by constructing a DEX and IDO platform. He would like to integrate his expertise in Web3.0 with knowledge in insurance industry and provide a better solution to Blockchain insurance.

Angie: Angie is a Data Scientist in a ASX-listed Fintech in Australia. She has extensive experience in Finance industry since 2017 and has profound understanding regarding tech utilization in finance industry. Using her expertise, she co-designed the pricing model and business flow of Meta Defender. She is also a crypto enthusiast and fascinated by She masters Solidity, Python Vue.js and Node.js.  

0xdeadbeef: He is a web3.0 coder and researcher for more than 4 years. He has a master's degree from Shanghai Jiaotong University and a major in finance. He masters solidity, Golang, Rust, Python, and Nodejs. In his past working experience, he worked for a public chain company and researched and developed on-chain DeFi projects, especially in options markets. He has much experience in EVM compatible blockchains. Recently, he has been passionate about insurance, which may be a new area in DeFi. Through his working experience in the on-chain option market, he considered there are many similarities between options and insurance.

### Team Code Repos

**Team Repo**

- https://github.com/Meta-Defender/
- https://github.com/Meta-Defender/Meta-Defender-Contract-V3


**Team Member**

- https://github.com/lutianzhou001
- https://github.com/327istesting
- https://github.com/Angie-Sheng

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 8 months
- **Full-Time Equivalent (FTE):**  2
- **Total Costs:** 8,000 USD

### Milestone 1 — Basic Functionalities

- **Estimated Duration:** 7.5 months
- **FTE:**  2
- **Costs:** 4,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how to deploy and use the ink! smart contract. |
| 0c. | Testing Guide | Core functions will be covered by unit tests, along with detailed explanation step by step. |
| 0d. | Docker | We will provide a Dockerfile that can be used to test all the functionality delivered with this milestone. |
| 1. | ink! smart contract | An ink! smart contract that will enable the digital assets holders to buy cover and the capital holder to become an underwriter. |  
| 2. | Front-end e2e test | We will use Cypress.io as an e2e testing framework for the Front-end automated test. |

### Milestone 2 Substrate + XCM

- **Estimated Duration:** 6 months
- **FTE:**  2
- **Costs:** 4,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how Meta Defender protocol enables cross-chain insurances. |
| 0c. | Testing Guide | Core functions will be covered by unit tests, which will be considered as another way of explanation |
| 0d. | Docker | We will provide a Dockerfile that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an **article** that explains the functionalities Meta Defender provides, which will cover: 1. auto-pricing model; 2. economic model of insuring and underwriting; 3. how we achieve cross-chain insurance through substrate and XCM and open source this part of code.  |
| 1. | Cross-chain support | Establish a local parachain testnet and two local parachains A and B with sovereign account in each other. With smart contract deployed on A parachain, allow the user to buy cover and receive his claim from addresses on the B parachain through XCM. |  
| 2. | Manual of interaction between ink! and front-end | We will provide a manual regarding constructing an interface for the interaction between front-end and ink! smart contract & Polkadot.js wallet, just like what web3.js and ethers.js have done in the EVM ecosystem. |


## Future Plans

Short-term plan: Expand the subject-matter insured. We plan to provide insurance on at least five parachains and/or products running on them in the Polkadot Ecosystem.

Medium-term plan: With the aid of blockchain oracles function, to cover real-life off-chain cases. A potential use case can be flight cancellation insurance.

Long-term: We would like to cooperate with professional security service providers and to undertake detailed risk analysis on the subject-matter insured and potential projects, which enables us to issue security rating reports and become the security rating agency in web3.0 realm.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?**

Meta Defender is the first-place winner of Acala Hackathon: https://twitter.com/AcalaNetwork/status/1527290444379394049?s=20&t=u60vX2VZTWvSoZ1x62Y-sA

Meta Defender is also in the 2022 cohort of Web3.0 Bootcamp supported by Web3 Foundation, Parity and Wanxiang Blockchain Labs.

Since we have participated in a few activities in the Polkadot Ecosystem and have a profound understanding of the eco, we have been advised that we could apply for the grants program and grow with Polkadot.
