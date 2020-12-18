# Open Grant Proposal

* **Project Name:** Shopbring
* **Team Name:** blocktree
* **Payment Address:** 1HYV2LTDaGMTd9wSJaVir4Ma4i5TYSa5E

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

Consumers who shop do not directly use cryptocurrency to make payments on the e-commerce platform, but instead issue commissioned shopping orders and lock the payment amount in the system. Other shopping agents can freely accept the order, complete the shopping on the specific e-commerce platform, and then ship it to the consumer's delivery address. After consumers receive the goods, they confirm the receipt on chain, and finally the system pays the locked amount and tips to the shopping agents.

> In the process of shopping, consumer has not used legal currency, and the payment amount does not need to be hosted by a third party. Shopbring network consensus ensures the security of funds; there is a legal currency transaction between the e-commerce user and the e-commerce platform, and the security of funds is guaranteed by the state's compliant payment companies. Assuming that the e-commerce user did not complete the task, he could not get the amount locked in the chain. Suppose that the buyer completes the task of purchasing on behalf, and the consumer receives the goods but does not confirm the arrival of the goods, he cannot recover the unlocking amount. It is difficult to avoid such disputes, so we need to introduce the role of "supervisor" in our system to solve the ownership problem of locked amount through dispute arbitration. In order to make the platform grow healthily, we also need to build a credit incentive mechanism. Good behavior increases credit, bad behavior deducts credit, and airdrops tokens according to the proportion of credit value.

### Project Details

#### Project Features

* **Share consensus security with Polkadot network.** Shopbring is a Polkadot parachain base on Substrate. We don't have to invest long-term maintenance cost for network consensus.

* **No permission is required.** Shopbring does not require KYC(Know Your Customers), anyone who has a Polkadot account can issue commissioned shopping orders or provide shopping services.
* **Decentralized supervisors.** In order to maintain the healthy development of the platform, we have established a supervisor mechanism. When users have disputes in the commissioned shopping process, any party can report violations, and the system randomly assigns a supervisor to assist in arbitration.
* **Credit incentive mechanism.** In order to stimulate more users to shop frequently at Shopbring, we have established a credit growth system, and airdrop tokens will be rewarded in proportion to the credit value in each period. Completing the commissioned shopping normally will increase the credit value of both parties. On the contrary, fraud will reduce the credit value, and the supervisor participating in the dispute arbitration will increase the credit value.
* **Privacy Encryption.** When the commissioned shopping order is accepted, the two parties will negotiate a password and encrypt the order information to ensure the privacy of both parties.
* **Support multi cryptocurrency payment.** Multi cryptocurrency payment is supported in the commissioned shopping, which makes cryptocurrency more widely used.

#### Ecosystem Role

* **Consumer.** Issue the commissioned shopping order and use cryptocurrency as the payment method.
* **Shopping agent.** Accept the commissioned shopping order, complete the actual shopping action on the e-commerce platform, and let the merchants deliver the goods to the real consumers.
* **Supervisors.** Users who register as a supervisor need to freeze a certain amount of native tokens. After becoming a supervisor, they are mainly responsible for arbitrating purchase transaction disputes. Part of the fine can be obtained by completing the arbitration.
* **Council.** Election of council members in accordance with Polkadot governance rules.
* **Technical Committee.** Technical committees are established by the Council in accordance with Polkadot governance rules.
* **Treasury.** Refer to the design of the Polkadot Treasury, the funds come from the token incentive model, transaction fees and tips, etc. As long as they contribute to the development of the community, anyone can apply for financial support.

#### Credit Incentive Mechanism

For the healthy development of Shopbring, we design a credit value growth model and native token incentive algorithm. The core meaning is as follows:

* The behavior that is favorable to the development of Shopbring will increase the credit value, and the behavior that is unfavorable to the development of Shopbring will reduce the credit value.
* Open and transparent credit data can help users choose trading partners.
* In Polkadot ecosystem, it provides credit data reference for other parachains.

In order to encourage the Shopbring users to increase the credit value, the system will determine the number of airdrop tokens according to the average credit rating of the overall users in each cycle. The higher the average credit value, the greater the total number of airdrop tokens. The number of airdrop tokens obtained by users = the number of single credit value airdrop tokens * the user credit value.

#### Supervisor Registration

Shopbring users who register as supervisors need to freeze some native tokens. After becoming a supervisor, please note the following:

* Assuming N days as a monitoring cycle, supervisors need to sign in every day. If the number of sign in days is more than half, credit appreciation will be obtained; if less than half, credit will be impaired and frozen tokens will be fined and confiscated.
* Shopbring users who have disputes in the process of the commissioned shopping on their behalf can submit an arbitration request, and the system will randomly assign a supervisor who signs in on the same day to deal with it. After the dispute is settled, the supervisor will get part of the deposit and increase the credit value.

#### Invitation Reward

At the beginning, the Shopping agents had no native token on Shopbring, so they could not submit transaction on chain. In order to solve this problem, we design the invitation reward.

Shopbring users who hold native token can become invitees. The operation is as follows:

1. The inviter randomly generates an ECDSA key pair, and then initiates an application to become the inviter. The parameters are: inviter's address, ECDSA public key, single donation amount and maximum number of invitees.
1. The inviter provides the ECDSA private key to the invitee, and the invitee uses the private key to sign keccak256(account public key) to obtain "accept invitation signature".
1. Invitee submits and accepts the invitation, parameters are: invitee's address, acceptance invitation signature, and the account inviter's address.
1. The system uses ECDSA algorithm to verify the invitation signature. After approval, the amount of single donation will be transferred to the invitee, and the fee of this transaction will be paid by the inviter.
1. Every time the invitee completes a commissioned shopping order, his credit value will increase, and the credit value of the person who invited him will also increase slightly.

#### The Commissioned Shopping Process

There are several stages in the commissioned shopping process:

1. Consumer issues commissioned shopping order and waits for the shopping agent to accept the order. At this stage, the consumer can also close the order manually. Submit parameters: product hyperlink, initiator’s address, payment currency, payment amount, tip amount, required credit value (not required), required guarantee amount (not required), receiving region (country, province / state, city).
2. The shopping agent responds to the order and waits for the consumer to submit the delivery address. Submit parameters: e-commerce platform account name (encrypted), shopping agent's address (encrypted), guaranteed amount.
3. Consumer submits the delivery address and wait for shopping agent to buy the goods. Submit parameters: delivery address (encrypted), name of receiver (encrypted), contact number (encrypted), social account (encrypted).
4. The shopping agent confirms that the goods has been shipped. Submit parameters: e-commerce order number (encrypted), logistics waybill (encrypted)
5. Consumer confirms receipt or applys for goods return.
  5.1 If consumer confirms the receipt of goods, then the commissioned shopping process is completed.
  5.2 Consumer applys for goods return, submit parameters: type (return / change) (encryption), return reason (encryption).
  5.3 The shopping agent shall contact the merchant to solve the return, submit the return address information, parameters: whether to accept (yes / no), return address (encrypted), return contact (encrypted), return contact number (encrypted), reason for not accepting the return (encrypted).
  5.4 The consumer performs the return, and submits parameter: logistics waybill (encrypted).
  5.5 After the merchant confirms the receipt of the goods, the shopping agent confirms that the goods are returned successfully.The frozen payment amount will be returned to the consumer, and the tip will be paid to the shopping agent.
6. After the commissioned shopping process is completed, the consumer or the shopping agent submits the invoice information. Submit parameters: invoice code, invoice number, invoice date, invoice amount, and 6-digit verification code after the invoice.
7. The off-chain worker of the system will verify the invoice. The credit value of both parties will be increased only after the invoice information in the completed commissioned shopping order is valid.

> Note: The Consumer and shopping agent will complete password negotiation in steps 1->2, and private information will be encrypted in the next steps.

Each stage has an operation time limit. If the time-out occurs, there are the following processing conditions:

* No shopping agents timed out in response to the commissioned shopping order, the order will be closed automatically, and the locked payment amount and tip will be returned to the consumer.
* When the consumer exceeds the time limit for submitting the delivery address, the order is automatically closed, and the order tip is paid to the shopping agent.
* When the shopping agent exceeds the time limit for confirming that the merchant has shipped, the order will be closed automatically, the deposit of the agent will be paid to the consumer, and the locked payment amount and tip will be returned to the consumer.
* When the consumer exceeds the time limit for confirming receipt, the order is completed automatically, and the payment amount and tip are transferred to the shopping agent.
* When a consumer applies for a return, but the shopping agent exceeds the time limit for submitting the return address, the order is automatically closed, the shopping agent pays the deposit to the consumer, and the locked payment amount and tip are returned to the consumer.
* When the consumer exceeds the time limit for submitting the return shipping order, the order is completed automatically, and the payment amount and tip are transferred to the shopping agent.
* When the shopping agent exceeds the time limit for acceptance of returned goods, The order is completed automatically. If the action is return, payment amount will be returned to consumer, tip will be transferred to shopping agents; If the action is change, payment amount and tip will be transferred to shopping agent.

#### Complaint of goods return dispute

It is inevitable that some disputes will arise in the process of goods return. Both parties of the transaction can submit a complaint and let the supervisor intervene. Supervisors generally determine the arbitration results according to the service terms of the e-commerce platform to which the goods belong. There are two situations as follows:

* The purchasing behavior of the shopping agent does not conform to the service terms of the e-commerce platform, and the consumer does not receive the expected goods, which belongs to the responsibility of the shopping agent.
* The consumer's return behavior complies with the terms of service of the e-commerce platform, but the shopping agent does not provide any help, which is the responsibility of the shopping agent.
* The return behavior of consumer does not conform to the service terms of e-commerce platform, and the shopping agent has done its duty to provide help, which belongs to the consumer responsibility.

The supervisor completes the arbitration and determines the winner. The winner and the supervisor will receive an increase in credit value and a deposit, and the loser will deduct the credit value.

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

![Ecosystem Architecture](https://github.com/blocktree/shopbring/blob/master/docs/resources/Shopbring-architecture-en.jpg?raw=true)

The whole ecosystem is divided into three parts: **Participants**, **Shopbring** and **Polkadot ecosystem**.

**Participants** include: external users, e-commerce platform(such as Taobao, JD, Amazon), OTC market(such as Huobi, ZB, Binance), cryptocurrency wallet, etc.
**Shopbring** is the underlying blockchain system base on Substrate, and as a parachain connected to Polkadot. It does not need to customize its own network consensus, but needs to have its own democratic governance mechanism.
**Polkadot ecosystem** is an infinitely expanded blockchain network. There will be many parachains focusing on a certain business to enrich the network, so that Shopbring only needs to do its own things.

### Ecosystem Fit

At present, we have not found any decentralized system to provide shopping services. Since the traditional e-commerce platform technology is very mature and the service experience is also very good, it is very difficult for merchants to spend the cost to migrate to the decentralized e-commerce platform.

Thanks to the many DeFi parachains in the Polkadot ecosystem, we can attract traditional e-commerce users through the higher returns generated by DeFi and provide shopping channels for cryptocurrency users. The business model as shown in the figure:

![Business Model](https://github.com/blocktree/shopbring/blob/master/docs/resources/Shopbring-business-en.jpg?raw=true)

1. Consumer transfers DOT to Acala account and exchange it into L-DOT. L-DOT is an asset issued by Acala that can not only obtain DOT staking income, but also freely flow. Polkadot's staking annualized interest rate averages 14%. In terms of comparative yield, DOT < L-DOT < Staked-DOT.
1. Consumers get Acala account to mortgage L-DOT to borrow aUSD. aUSD is an anchored (1:1) USD cryptocurrency issued by Acala, so aUSD is suitable for use as a payment currency. If consumer wants to redeem L-DOT, he also need to pay a stability fee. Refer to MakerDAO's largest DAI pool for borrowing at an annual interest of 2%.
1. The consumer transfers the aUSD cross-chain of the Acala account to Shopbring.
1. The consumer issues a commissioned shopping order and uses aUSD to pay the shopping agent.
1. The shopping agent pays fiat currency to the e-commerce platform to complete the purchase of goods.
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
* **Total Costs:** 1.55 BTC (CHF 30k equivalent).

### Milestone 1 UI design and System module definition

* **Estimated Duration:** 1 month
* **FTE:**  2
* **Costs:** 0.53 BTC

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We write complete program flow description and system module interface definition. |
| 0c. | Testing Guide | We will deploy a POA consensus Shopbring network, which can call system modules through polkadot.js. |
| 0d. | Article/Tutorial | We will write an article or tutorial that explains the work done as part of the grant. |
| 1. | UI Design  | We will design the user interface of Shopbring App                                                   |
| 2. | Substrate module: Price | We will create a Substrate module that will manage price tracking, and temporarily adjust it with fixed data. | 
| 3. | Substrate module: Payment Currency | We will create a Substrate module that will manage multi cryptocurrency payment option.| 
| 4. | Substrate module: Commissioned Shopping | We will create a Substrate module that will implement commissioned shopping process. | 
| 5. | Substrate module: Supervisor | We will create a Substrate module that will manage supervisors registration. | 
| 6. | Docker | We will provide a dockerfile to demonstrate the full functionality of our chain |

### Milestone 2 Front-end App and Full Node Development

* **Estimated Duration:** 1 month
* **FTE:**  2
* **Costs:** 0.52 BTC

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will write instructions for installing and using Shopbring App. |
| 0c. | Testing Guide | The code will have 70% unit-test coverage to ensure functionality |
| 0d. | Article/Tutorial | We will write an article or tutorial that explains the work done as part of the grant. |
| 1. | Implement Shopbring App  | We will complete the web front-end App in accordance with UI design.   |
| 2. | Substrate module: Account | We will create a Substrate module that will manage Shopbring account. | 
| 3. | Substrate module: Invitation | We will create a Substrate module that will record invitation relationship.| 
| 4. | Substrate module: Credit value | We will create a Substrate module that will measure credit value. | 
| 5. | Substrate module: Native Token | We will create a Substrate module that will manage native token inflation. | 
| 6. | Substrate module: Invoice | We will create a Substrate module that will manage and verify invoice. | 
| 7. | Docker | We will provide a dockerfile to demonstrate the full functionality of our chain |

### Milestone 3 Parachain Testnet Debugging

* **Estimated Duration:** 1 month
* **FTE:**  2
* **Costs:** 0.52 BTC

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will write how Shopbring interacts with other parachains. |
| 0c. | Testing Guide | The code will have 90% unit-test coverage to ensure functionality |
| 0d. | Article/Tutorial | We will write an article or tutorial that explains the work done as part of the grant. |
| 1. | Implement off-chain worker | We will implement off-chain worker that can tracking oracle cryptocurrency prices, and request tax agency services to verify the validity of the invoice.  |
| 2. | Parachain Testnet Debugging | We will build our own parachain testnet to debug XCMP. | 
| 3. | Docker | We will provide a dockerfile to demonstrate the full functionality of our chain |

## Future Plans

When Rococo is available, we will apply to deploy Shopbring on Rococo. We will conduct interoperability tests with other parachains, such as: Acala, Bifrost, PolkaBTC, etc.

We will seek Polkadot volunteers to assist in the code audit.

## Additional Information :heavy_plus_sign: 

**What work has been done so far?**

So far we have completed the project possibility verification evaluation.

**Are there are any teams who have already contributed (financially) to the project?**

No.

**Have you applied for other grants so far?**

No.
