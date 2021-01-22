# Open Grant Proposal

* **Project Name:** Shopbring
* **Team Name:** blocktree
* **Payment ETH Address:** 0xd8a29806c765298eb10306b3ebba54daba789c99

## Project Overview :page_facing_up:

### Overview

Shopbring aims to build a decentralized commissioned shopping platform in Polkadot ecosystem. Polkadot ecosystem users can commission e-commerce users to pay their shopping cart, and finally settle with them in cryptocurrency.

#### An indication of how you will integrate this project into Substrate / Polkadot / Kusama

* Shopbring is a Polkadot parachain base on Substrate.
* Shopbring provides an e-commerce shopping channel with cryptocurrency as payment options for Polkadot ecosystem users, and provides traditional e-commerce users with a convenient channel to enter the Polkadot ecosystem.
* The ultimate goal of Shopbring is to promote traditional e-commerce into Polkadot ecosystem and jointly build a decentralized e-commerce platform.

#### An indication of why your team is interested in creating this project

As the DeFi business model matures, there will be a demand for cryptocurrency as a payment option in the future. We are developing Shopbring to realize the first step of cryptocurrency shopping.

##### Analysis from market demand

Shopbring meets the needs of two types of people:

* People who are attracted by the high returns of DeFi and want to invest a little money to participate in DeFi, but have no experience in cryptocurrency trading.
* People who don't want to frequently exchange fiat currencies in the OTC market, but want to directly use cryptocurrency for shopping, and can flexibly participate in DeFi.

##### Feasibility analysis from technical realization

* We use Substrate to build the platform, which can not only customize the business functions, but also reuse the open-source pallets Library of Polkadot developers. The feature of substrate forkless upgrade makes our development plan more confident.
* We don't need to build a DeFi system, we only need to rent parachain slots. Shopbring can transmit messages with other parachains. For example, calling the currency exchange, pledge financing and other functions of the DeFi parachain.
* Shopbring is an independent parachain, which can greatly optimize transaction performance while minimizing transaction fees. Its electronic payment experience is comparable to centralized payment systems.

##### Feasibility analysis of business model

Consumers who shop do not directly use cryptocurrency to make payments on the e-commerce platform, but instead issue commissioned shopping orders and lock the payment amount in the system. Other shopping agents can freely accept the order, complete the shopping on the specific e-commerce platform, and then ship it to the consumer's delivery address. After consumers receive the commodity, they confirm the receipt on chain, and finally the system pays the locked amount and tips to the shopping agents.

> In the process of shopping, consumer has not used legal currency, and the payment amount does not need to be hosted by a third party. Shopbring network consensus ensures the security of funds; there is a legal currency transaction between the e-commerce user and the e-commerce platform, and the security of funds is guaranteed by the state's compliant payment companies. Assuming that the e-commerce user did not complete the task, he could not get the amount locked in the chain. Suppose that the buyer completes the task of purchasing on behalf, and the consumer receives the commodity but does not confirm the arrival of the commodity, he cannot recover the unlocking amount. It is difficult to avoid such disputes, so we need to introduce the role of "arbitrator" in our system to solve the ownership problem of locked amount through dispute arbitration. In order to make the platform grow healthily, we also need to build a credit incentive mechanism. Good behavior increases credit, bad behavior deducts credit, and airdrops tokens according to the proportion of credit value.

### Project Details

#### Project Features

* **Share consensus security with Polkadot network.** Shopbring is a Polkadot parachain base on Substrate. We don't have to invest long-term maintenance cost for network consensus.

* **No permission is required.** Shopbring does not require KYC(Know Your Customers), anyone who has a Polkadot account can issue commissioned shopping orders or provide shopping services.
* **Decentralized arbitrators.** In order to maintain the healthy development of the platform, we have established a arbitrator mechanism. When users have disputes in the commissioned shopping process, any party can report violations, and the system randomly assigns a arbitrator to assist in arbitration.
* **Credit incentive mechanism.** In order to stimulate more users to shop frequently at Shopbring, we have established a credit growth system, and airdrop tokens will be rewarded in proportion to the credit value in each period. Completing the commissioned shopping normally will increase the credit value of both parties. On the contrary, fraud will reduce the credit value, and the arbitrator participating in the dispute arbitration will increase the credit value.
* **Private information security**. The order details will not be recorded on chain, only the hash of the order data is stored on chain.
* **Support multi cryptocurrency payment.** Multi cryptocurrency payment is supported in the commissioned shopping, which makes cryptocurrency more widely used.

#### Ecosystem Role

* **Consumer.** Issue the commissioned shopping order and use cryptocurrency as the payment method.
* **Shopping agent.** Accept the commissioned shopping order, complete the actual shopping action on the e-commerce platform, and let the merchants deliver the commodity to the real consumers.
* **Arbitrators.** Users who register as a arbitrator need to freeze a certain amount of native tokens. After becoming a arbitrator, they are mainly responsible for arbitrating purchase transaction disputes. Part of the fine can be obtained by completing the arbitration.
* **Inspector**. To register as an inspector, a majority of the council is required. The inspector needs to run an off-chain service for verifying shopping receipts, such as verifying the authenticity of commodity invoices.
* **Council.** Election of council members in accordance with Polkadot governance rules.
* **Technical Committee.** Technical committees are established by the Council in accordance with Polkadot governance rules.
* **Treasury.** Refer to the design of the Polkadot Treasury, the funds come from the token incentive model, transaction fees and tips, etc. As long as they contribute to the development of the community, anyone can apply for financial support.

#### Credit Incentive Mechanism

For the healthy development of Shopbring, we design a credit value growth model and native token incentive algorithm. The core meaning is as follows:

* The behavior that is favorable to the development of Shopbring will increase the credit value, and the behavior that is unfavorable to the development of Shopbring will reduce the credit value.
* Open and transparent credit data can help users choose trading partners.
* In Polkadot ecosystem, it provides credit data reference for other parachains.

In order to encourage the Shopbring users to increase the credit value, the system will determine the number of airdrop tokens according to the average credit rating of the overall users in each cycle. The higher the average credit value, the greater the total number of airdrop tokens. The number of airdrop tokens obtained by users = the number of single credit value airdrop tokens * the user credit value.

#### Arbitrator

Normal user registration arbitrators need to freeze a certain native token as an application condition. The `council` will review the applicant's information, and more than half of the members will vote to become an arbitrator.

The arbitrator’s obligation is that when a common user has a dispute during the commissioned shopping, either party will appeal to the system. The arbitrator can choose the case to intervene in the dispute. During the waiting period, up to `M` arbitrators can sign up to participate in the dispute. After the waiting period ends, the system will randomly select `N`($N < M$, and `N` is an odd number) arbitrators to actually participate in the dispute. If there are less than `N` arbitrators actually participating, the `council` will participate in dispute arbitration. After the arbitration is completed, the `treasury` will pay wages to the participating arbitrators.

#### Inspector

Shopbring introduces the role of inspector to verify whether the shopping process actually happened. This role provides trusted services to verify shopping receipts(like invoices). For example, in China, most e-commerce platforms provide the right of applying for electronic invoices issued by the State Administration of Taxation. By verifying the authenticity of the electronic invoice, it can be determined whether the consumption process has occurred. Shopbing has the following design requirements for inspectors:

* The user submits the application for registering inspector, then waits for the council to review. When more than half of the members of the council vote for, the review is passed.
* The inspector needs to provide an API service to verify the shopping receipt. Shopbring's off-chain worker will submit the unverified shopping receipt to the inspector's API service, and finally the inspector will submit the verification result to the chain.
* Shopbring will have several certified inspectors. After more than half of the inspectors verify the authenticity of the shopping receipt, the value of the commodity can be converted into a credit value.

#### Invitation Reward

At the beginning, the Shopping agents had no native token on Shopbring, so they could not submit transaction on chain. In order to solve this problem, we design the invitation reward.

Shopbring users who hold native token can become invitees. The operation is as follows:

1. The inviter randomly generates an ECDSA key pair, and then initiates an application to become the inviter. The parameters are: inviter's address, ECDSA public key, single donation amount and maximum number of invitees.
1. The inviter provides the ECDSA private key to the invitee, and the invitee uses the private key to sign keccak256(account public key) to obtain "accept invitation signature".
1. Invitee submits and accepts the invitation, parameters are: invitee's address, acceptance invitation signature, and the account inviter's address.
1. The system uses ECDSA algorithm to verify the invitation signature. After approval, the amount of single donation will be transferred to the invitee, and the fee of this transaction will be paid by the inviter.
1. Every time the invitee completes a commissioned shopping order, his credit value will increase, and the credit value of the person who invited him will also increase slightly.

#### The Commissioned Shopping Process

> Users continue to make the commissioned shopping on the platform, and the system will record considerable order data. If the order data is stored on chain, it will incur very large storage costs. Therefore, we will develop an off-chain order management system to store order detail, like shopping order information, shipping information, invoice information, and return information. These information will be serialized and hashed before being stored on chain. The system is deployed on a centralized server managed by us, and will use Polkadot wallet authorization to sign in like `polkassembly.io`, and normal accounts can only access their own order data. The inspector can access the commodity invoice data to be verified and its associated commodity details.

There are several stages in the commissioned shopping process:

1. Consumer copies product information from the e-commerce platform to Shopbring's shopping cart until they are satisfied, then fill in the delivery address and confirm the order. The order information is stored in the off-chain order system.
2. The consumer selects the cryptocurrency to be paid, fills in the payment quantity and tip, issues the commissioned shopping order on chain. At this stage, consumer can also manually close the order.
3. The shopping agent accepts the order on chain.
4. The shopping agent submits the merchant's shipping information. The detailed information is recorded in the off-chain order system. The shipping information's hash is submitted on chain.
5. Consumer confirms receipt or applys for commodity return.
  5.1 If consumer confirms the receipt of commodity, then the commissioned shopping process is completed.
  5.2 Consumer applys for commodity return on chain, and the off-chain order system saves: type (return/exchange), reason for return and other information.
  5.3 The shopping agent shall contact the merchant to solve the return, submit the return address information to the off-chain order system.
  5.4 The consumer performs the return, submits the shipping number to the off-chain order system.
  5.5 After the merchant confirms the receipt of the commodity, the shopping agent confirms that the commodity are returned successfully.The frozen payment amount will be returned to the consumer, and the tip will be paid to the shopping agent.
6. After the commissioned shopping process is completed, the consumer or the shopping agent submits the invoice information to the off-chain order system, and submits the invoice hash data to be verified on chain.
7. The Shopbring's off-chain worker reads the invoice hash data which is not verified, and requests the invoice verification API to confirm whether the shopping process is actually happening. When the invoice hash data is verified by more than half of the inspectors, the value of the commodity can be converted into a credit value.

Each stage has an operation time limit. If the time-out occurs, there are the following processing conditions:

* No shopping agents timed out in response to the commissioned shopping order, the order will be closed automatically, and the locked payment amount and tip will be returned to the consumer.
* When the consumer exceeds the time limit for submitting the delivery address, the order is automatically closed, and the order tip is paid to the shopping agent.
* When the shopping agent exceeds the time limit for confirming that the merchant has shipped, the order will be closed automatically, the deposit of the agent will be paid to the consumer, and the locked payment amount and tip will be returned to the consumer.
* When the consumer exceeds the time limit for confirming receipt, the order is completed automatically, and the payment amount and tip are transferred to the shopping agent.
* When a consumer applies for a return, but the shopping agent exceeds the time limit for submitting the return address, the order is automatically closed, the shopping agent pays the deposit to the consumer, and the locked payment amount and tip are returned to the consumer.
* When the consumer exceeds the time limit for submitting the return shipping order, the order is completed automatically, and the payment amount and tip are transferred to the shopping agent.
* When the shopping agent exceeds the time limit for acceptance of returned commodity, The order is completed automatically. If the action is return, payment amount will be returned to consumer, tip will be transferred to shopping agents; If the action is change, payment amount and tip will be transferred to shopping agent.

#### Complaint of commodity return dispute

It is inevitable that some disputes will arise in the process of commodity return. Both parties of the transaction can submit a complaint and let the arbitrator intervene. Arbitrators generally determine the arbitration results according to the service terms of the e-commerce platform to which the commodity belong. There are two situations as follows:

* The purchasing behavior of the shopping agent does not conform to the service terms of the e-commerce platform, and the consumer does not receive the expected commodity, which belongs to the responsibility of the shopping agent.
* The consumer's return behavior complies with the terms of service of the e-commerce platform, but the shopping agent does not provide any help, which is the responsibility of the shopping agent.
* The return behavior of consumer does not conform to the service terms of e-commerce platform, and the shopping agent has done its duty to provide help, which belongs to the consumer responsibility.

The arbitrator completes the arbitration and determines the winner. The winner and the arbitrator will receive an increase in credit value and a deposit, and the loser will deduct the credit value.

#### Revenue and use of Treasury

The revenue sources of the treasury are as follows:

* Transaction fees: A portion of each block's transaction fees goes to the Treasury, with the remainder going to the block author.
* The commissioned shopping tip: A portion of each commissioned shopping transaction tip goes to the Treasury.
* Native token inflation: As the credit value of the entire network increases, native tokens are also issued.

Anyone can propose to apply for the use of the treasury. Proposals may consist of (but are not limited to):

* Infrastructure deployment and continued operation.
* Network security operations (monitoring services, continuous auditing).
* Ecosystem provisions (collaborations with friendly chains).
* Marketing activities (advertising, paid features, collaborations).
* Community events and outreach (meetups, pizza parties, hackerspaces).
* Software development (wallets and wallet integration, clients and client upgrades).

### Ecosystem Architecture

![Ecosystem Architecture](https://github.com/blocktree/shopbring-docs/blob/master/resources/Shopbring-architecture-en.jpg?raw=true)

The whole ecosystem is divided into three parts: **Participants**, **Shopbring** and **Polkadot ecosystem**.

**Participants** include: external users, e-commerce platform(such as Taobao, JD, Amazon), OTC market(such as Huobi, ZB, Binance), cryptocurrency wallet, etc.
**Shopbring** is the underlying blockchain system base on Substrate, and as a parachain connected to Polkadot. It does not need to customize its own network consensus, but needs to have its own democratic governance mechanism.
**Polkadot ecosystem** is an infinitely expanded blockchain network. There will be many parachains focusing on a certain business to enrich the network, so that Shopbring only needs to do its own things.

### Ecosystem Fit

At present, we have not found any decentralized system to provide shopping services. Since the traditional e-commerce platform technology is very mature and the service experience is also very good, it is very difficult for merchants to spend the cost to migrate to the decentralized e-commerce platform.

Thanks to the many DeFi parachains in the Polkadot ecosystem, we can attract traditional e-commerce users through the higher returns generated by DeFi and provide shopping channels for cryptocurrency users. The business model as shown in the figure:

![Business Model](https://github.com/blocktree/shopbring-docs/blob/master/resources/Shopbring-business-en.jpg?raw=true)

1. Consumer transfers DOT to Acala account and exchange it into L-DOT. L-DOT is an asset issued by Acala that can not only obtain DOT staking income, but also freely flow. Polkadot's staking annualized interest rate averages 14%. In terms of comparative yield, DOT < L-DOT < Staked-DOT.
1. Consumers get Acala account to mortgage L-DOT to borrow aUSD. aUSD is an anchored (1:1) USD cryptocurrency issued by Acala, so aUSD is suitable for use as a payment currency. If consumer wants to redeem L-DOT, he also need to pay a stability fee. Refer to MakerDAO's largest DAI pool for borrowing at an annual interest of 2%.
1. The consumer transfers the aUSD cross-chain of the Acala account to Shopbring.
1. The consumer issues a commissioned shopping order and uses aUSD to pay the shopping agent.
1. The shopping agent pays fiat currency to the e-commerce platform to complete the purchase of commodity.
1. E-commerce platform ships to consumers.
1. With aUSD, the shopping agent can freely participate in Dapp in the Polkadot ecosystem or sell them to the OTC market at a premium.
1. When consumer feels that the L-DOT return has reached his expect, he will buy aUSD from the OTC market.
1. Consumer returns aUSD to their Acala account to redeem L-DOT, he can cash out L-DOT or participate in other higher-yield projects.

> In this business model, consumer can earn profits, need to satisfy: L-DOT income * unit price > (stability fee interest + transaction fees + aUSD premium margin).

**Why don't consumers sell aUSD directly to the OTC market, and use fiat currency to shop on e-commerce platforms?**

There are the following reasons:

* The OTC market generally has a relatively large exchange quota, and the price difference is relatively large, so that merchants have profit margins. Shopbring can make small payments and attract shopping agents to serve consumers by earning tips.
* There may be merchants laundering money in the OTC market. Users who frequently deposit and withdraw fiat currency may be contaminated by black money and face the risk of freezing bank accounts.
* Consumers can get aUSD again after completing the commissioned shopping order in Shopbring, and increase the account credit value and get more native token rewards.

## Team :busts_in_silhouette:

### Team members

* **Zhiquan Mai**: CTO. He once served as the development leader of cryptocurrency wallet system of [Bitbank](https://www.bitbank.com/). In his spare time, he has developed some open-source iOS projects, such as [Bitcoin Multisig wallet](https://github.com/zhiquan911/chance_btc_wallet) and [CHKLineChart](https://github.com/zhiquan911/CHKLineChart). Now he is responsible for the development of openwallet framework, which supports more than 70+ blockchain protocols.
* **Jianqiang Chen**: System development engineer. Now he is responsible for the development of the openwallet developer platform, which provides APIs to help developers quickly build cryptocurrency wallet applications.
* **Dongxing Liang**: System architect engineer. Now he is responsible for the back-end development of the openwallet.link enterprise-level digital-assets management system, and provides more than 70+ main chain assets and token asset custody services for digital financial companies.
* **Yinghao Fan**: Front-end engineer. He is now responsible for the front-end of openwallet related applications, such as the back-end of enterprise asset management, wallet applications, etc.
* **Shuchao He**: Cryptographic algorithm engineer. He is now responsible for the development of the underlying cryptographic library of openwallet, and supports the implementation of cryptographic algorithms such as ECC, Hash, and transaction verification for mainstream blockchains.
* **Erfeng Ma**: Dev Ops. He is now responsible for server operation and maintenance.

### Contact

* **Contact Name:** Zhiquan Mai
* **Contact Email:** zhiquan911@gmail.com
* **Website**: https://www.openwallet.cn

### Legal Structure

Now Individual. We will establish the company after we get the grants, and we will supplement the corporate information at that time.

### Team's experience

Our team has developed the [openwallet](https://github.com/blocktree) framework and redefines a wallet system model compatible with multiple blockchains. At the same time, we have build an openwallet developer platform, which integrates 70+ blockchain protocols, which greatly reduces the cost of developers and users.

Our team also uses the [openwallet developer platform](https://www.openwallet.cn) to provide enterprises with blockchain-related development services, such as: cryptocurrency wallets, enterprise-level cryptocurrency management systems, multi-chain multisig wallet systems.

### Team Code Repos

* https://github.com/blocktree
* https://github.com/zhiquan911
* https://github.com/godaddy-x
* https://github.com/fanyinghao
* https://github.com/Brochao

### Team LinkedIn Profiles

* https://www.linkedin.com/in/zhiquan911
* https://www.linkedin.com/in/shadowsick
* https://www.linkedin.com/in/kencani
* https://www.linkedin.com/in/fanyinghao
* https://www.linkedin.com/in/heshuchao
* https://www.linkedin.com/in/maerfeng

## Development Roadmap :nut_and_bolt: 

### Overview

* **Total Estimated Duration:** 3 months.
* **Full-time equivalent (FTE):** 5 FTE.
* **Total Costs:** 23K DAI.

### Milestone 1 UI design and System module definition

* **Estimated Duration:** 1.5 month
* **FTE:**  2
* **Costs:** 11K DAI

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We write complete program flow description and system module interface definition. |
| 0c. | Testing Guide | We will deploy a POA consensus Shopbring network, which can call system modules through polkadot.js. |
| 0d. | Article/Tutorial | We will write an article or tutorial that explains the work done as part of the grant. |
| 1. | Substrate module: Generic Asset | Programming language: `Rust`. This module aims to manage multiple cross-chain assets. It has the following functions: `register_generic_assets`, `deregister_generic_assets`, `mint_generic_assets`, `burn_generic_assets`, `transfer_assets`. |
| 2. | Substrate module: Invitation | Programming language: `Rust`. This module aims to establish the invitation relationship between accounts. It has the following functions: `register_inviter`, `accept_invitation`, `end_invitation_period`. |
| 3. | Substrate module: Commissioned Shopping | Programming language: `Rust`. This module aims to implement the commissioned shopping process. It has the following functions: `apply_shopping_order`, `accept_shopping_order`, `do_commodity_shipping`, `confirm_commodity_received`, `apply_commodity_return`, `accept_commodity_return`, `do_commodity_returning`, `confirm_commodity_returned`. |
| 4. | Substrate module: Transaction Payment | Programming language: `Rust`. This module aims to rewrite the `pallet_transaction_payment` so that it can change the payment `origin` of the transaction fee according to the specific module's functions.|
| 5. | Off-chain order system: Auth module | Programming language: `Go`. This module aims to handle authorized login in Polkadot wallet. |
| 6. | Off-chain order system: Order management module | Programming language: `Go`. This module aims to manage the user's shopping order detail data. |
| 7. | Off-chain order system: RESTful-API module | Programming language: `Go`. This module aims to provide an API for querying order details.|
| 8. | Unit tests: Shopbring node | We will write unit test cases for the completed modules. And make it run successfully. |
| 9. | Unit tests: Off-chain order system | We will write unit test cases for the completed modules. And make it run successfully. |
| 10. | Docker | We will provide a dockerfile to demonstrate the full functionality of our chain |

> Note: Although Substrate developed the [Generic Asset Module](https://github.com/paritytech/substrate/tree/v2.0.0-rc6/frame/generic-asset), we still need to fork it with some adjustments.
> Because our multiple assets come from other parachain cross-chain transfers, we need to make the following modifications to the generic asset module:
>
> 1. Asset registration shall be called by the proposal of the council.
> 1. The issuance and redemption of assets must be triggered by cross-chain transfers.

### Milestone 2 Front-end App and Full Node Development

* **Estimated Duration:** 1.5 month
* **FTE:**  2
* **Costs:** 12K DAI

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will write instructions for installing and using Shopbring App. |
| 0c. | Testing Guide | The code will have 100% unit-test coverage to ensure functionality |
| 0d. | Article/Tutorial | We will write an article or tutorial that explains the work done as part of the grant. |
| 1. | Implement Shopbring App  | Programming language: `TypeScript`. This app has the following modules to be developed: `homepage`, `shopping cart`, `order management`, `payment management`, `my account`, `my wallet`. This is app UI mock-ups([Click](https://modao.cc/app/d7520aeb5b9a99c55e3e49e39e19b5cc736e3d3d?simulator_type=device&sticky)). |
| 2. | Substrate module: Arbitrator | Programming language: `Rust`. This module aims to manage arbitrators registration. It has the following functions: `register_arbitrator`, `audit_arbitrator`, `complaint_arbitrator`, `deregister_arbitrator`. |
| 3. | Substrate module: Credit value | Programming language: `Rust`. This module aims to control the increase or decrease of credit value. It has the following functions: `increase_credit_value`, `decrease_credit_value`. |
| 4. | Substrate module: Reward | Programming language: `Rust`. This module is aims to regularly issue native tokens as a reward based on the credit value of the account, It has the following functions: `airdrop_rewards`. |
| 5. | Substrate module: Inspector | Programming language: `Rust`. This module aims to manage inspectors registration. It has the following functions: `register_inspector`, `audit_inspector`, `deregister_inspector`. |
| 6. | Substrate module: Invoice | Programming language: `Rust`. This module aims to submit and verify invoice. It has the following functions: `submit_invoice`, `verify_invoice`.|
| 7. | Off-chain order system: Price tracking module | Programming language: `Go`. This module aims to obtain the cryptocurrency exchange rate of different exchange platforms. |
| 8. | Off-chain order system: Invoice management module | Programming language: `Go`. This module aims to manage invoice detail data. |
| 9. | Unit tests: Shopbring Node | We will write unit test cases for the completed modules. And make it run successfully. |
| 10. | Unit tests: Off-chain order system | We will write unit test cases for the completed modules. And make it run successfully. |
| 11. | Unit tests: Shopbring App | We will write unit test cases for the completed modules. And make it run successfully. |
| 12. | Docker | We will provide a dockerfile to demonstrate the full functionality of our chain |


## Future Plans

When Rococo is available, we will apply to deploy Shopbring on Rococo. We will conduct interoperability tests with other parachains, such as: Acala, Bifrost, PolkaBTC, etc.

We will seek Polkadot volunteers to assist in the code audit.

## Additional Information :heavy_plus_sign: 

**What work has been done so far?**

So far we have completed the project possibility verification evaluation.
UI mock-ups/designs is available. You can see [this](https://modao.cc/app/d7520aeb5b9a99c55e3e49e39e19b5cc736e3d3d?simulator_type=device&sticky).

**Are there are any teams who have already contributed (financially) to the project?**

No.

**Have you applied for other grants so far?**

No.
