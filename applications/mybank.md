# Open Grant Proposal

- **Project Name:** MyBank Network
- **Team Name:** MyBank Labs
- **Payment Address(DAI):** 0xd2884f29b1aE21Cd88c51068f2C81060B58ddC1e



## Project Overview 



### Overview

MyBank is a decentralized financial platform based on Polkadot, aiming to establish a blockchain network that realizes asset appreciation and promotes asset flow. MyBank is divided into three parts: Platform Bank, Social Network Bank and MyDeX.

- In Platform Bank, users can participate as depositors, borrowers, and guarantors. Depositors can obtain deterministic returns by injecting liquidity into the corresponding asset pool. Borrowers can borrow by mortgaging collateral or invite guarantors to guarantee them to make zero-mortgage loans. After the implementation of the DID module to support identity authentication, credit loans without collateral or guarantee will be supported based on the credit scoring system.
- In Social Network Bank, MyBank as an infrastructure platform provides corresponding tools so that any individual and organization can build a collective bank that belongs to all members of a social network.
- MyDeX aims to provide users with the service of AMM, and support users to participate in the liquidation of Platform Bank.



### Project Details



#### Platform Bank

Most DeFi lending products are based on the mortgage system. Users lend assets from the asset pool by mortgaging collateral. We try to go further on this pattern. While providing mortgage lending services, we will release the liquidity of the depositor's assets and provide zero mortgage services. Depositors can use their deposit certificates to guarantee loans for friends, and friends can make zero mortgage loans on the platform based on the guarantee certificates. During the guarantee process, the guarantor's deposits will continue to generate income and will not be affected.



Each user will maintain a social network circle of their own, and the friend relationship needs to be confirmed by both parties. When a user has a loan demand and wants to choose a zero-mortgage loan, he can send the loan event to his friend's inbox, and the friend can choose to respond to the event to guarantee him. After the guarantee is successful, the system will issue a loan to his friend, and the deposit certificate will be locked by the system. Before the borrower repays, unless the guarantor chooses to pay a certain amount of funds to redeem the deposit certificate, his deposit will not be withdrawn.



In the future, we will expand Platform Bank to support credit loans. We will develop relevant DID modules and cooperate with offline institutions to authenticate users. Under the premise of satisfying identity authentication and credit score, users can make credit loans without collateral or guarantee. For credit loans, we will set a maximum percentage and use the insurance fund to handle unexpected situations. At the same time, we will also consider cooperating with relevant institutions to purchase relevant CDS(credit default swap) products and establish relevant institutions to sue for breach of contract. We will introduce the credit scoring system in detail below.



![Features split 01](https://tva1.sinaimg.cn/large/008eGmZEgy1gp58tf40msj30nw0i6tam.jpg)

##### 

Platform Bank supports multi-currency digital assets as collateral for loans or guarantees. Each type of asset corresponds to different risk parameters according to its risk coefficient. In the future, MB Token holders can vote on the adjustment of the parameters, and the proposal passed by the referendum will be automatically executed by substrate runtime.

- **Liquidation Ratio** Each loan that occurs in the PB will correspond to a collateral-to-debit ratio. Each type of asset will have a corresponding liquidation ratio according to its market value and volatility, and the system will monitor the collaterals-to-debit ratio of each loan. Once the collaterals-to-debit ratio is lower than the liquidation ratio, it will trigger liquidation behaviour. Assets with a higher risk coefficient usually correspond to a larger liquidation ratio and vice versa.
- **Interest Rates** Determine the annualized rate of return of depositors, the borrowing cost of borrowers, and the size of the asset pool, and at the same time affect the risk of the system. The interest rate is determined by supply and demand. When the utilization rate of the asset pool is low, users will be encouraged to borrow through low-interest rates. When the utilization rate of the fund pool is high, the interest rate will increase to encourage users to repay the loan and attract depositors to provide liquidity to the asset pool through higher yields. Each asset pool will set a critical point, and the loan interest rate will increase faster after the utilization rate of the asset pool exceeds the critical point.
- **Insurance Fund** MyBank has set aside a part of MB Token as insurance funds. When the Black Swan incident causes unexpected situations, MyBank will take part of the assets from the insurance fund to compensate users for losses. MyBank will charge depositors a certain percentage of handling fees and this part of funds will be combined with insurance funds.



#### Social Network Bank

We try to integrate the advantages of blockchain, social network and collective governance to establish a brand-new collective bank to improve the utilization rate of funds and realize inclusive finance. Anyone can build a digital bank of their own through the blockchain infrastructure provided by MyBank. The bank will be governed by the users and MyBank will not intervene. The governance of each bank will be the responsibility of all users of the bank. As a bank based on social networks, members have real social relationships under the chain.



Members can contribute deposits to the bank. The more deposits, the greater the contribution to the bank. Deposit contributions will be recorded on the chain, and depositors will not only gain wealth but also reputation. The deposit records contributed by members are visible to other members. In the future, when they need loans, loan applications will be easier to pass. The more people they helped in the past, the greater the probability of getting help from others in the future.



Repayment of a loan will leave a record on the chain. Borrowers will have a greater chance to obtain larger loans in the future, indirectly encouraging users to gradually accumulate their credit history. All behaviours will be recorded on the chain. Based on the external constraints of social networks, the default will affect the reputation of individuals in the real life. And borrowers will not be able to obtain loans from the bank in the future or it will become more difficult to borrow. Loans can be based on joint and several liabilities. If a person fails to repay the loan, the credit history of the members who guarantee or vote for it will also be affected. It may be regarded as a default, so the borrower's friends have an additional incentive to help the borrower.



![Features split 02](https://tva1.sinaimg.cn/large/008eGmZEgy1gp58t4efo4j30ng0gnjss.jpg)



MyBank abstracts the user's demands into corresponding events, and the event is decided by the collective or the committee. Users can set the governance of the bank by themselves. 



Users can select a committee to govern. The committee members are elected by all members, and all members also have the right to initiate a referendum to remove a committee member. The management of the bank will be fully represented by the committee, and each event requires the consent of a certain proportion of the committee members before it can be executed. The event approved by the committee can be an automatic event, or it needs to be executed after a while. If all members reject the event by referendum, the event will be automatically removed. The committee member can choose to pledge a certain amount of assets to obtain more nomination votes. If the committee member acts against the interests of other members of the bank, other members can initiate a referendum to confiscate the pledged assets of the committee member.



Users can also choose collective governance. Each event requires the consent of a certain proportion of all members before it can be executed. Or users can combine the advantages of committee governance and collective governance to conduct mixed governance, and choose a balance between efficiency and democracy. For example, a loan event requires a collective decision, and a deposit event can be decided by the committee.



#### MyDeX

Any user can inject funds into the asset pool to obtain the transaction fee income. The equation for working out the price of each token is x*y=k, where the amount of XToken is x and the amount of YToken is y. K is a constant value.



At the same time, users can pledge the LP Token to become a liquidator in Platform Bank, and can easily capture the income brought by liquidation while obtaining the transaction fee income. When the liquidation is triggered, the borrower needs to pay a certain percentage of the penalty fee, and the liquidator will receive this penalty fee.



MyDeX will integrate with Platform Bank to make it easier to short or long.

- If a user is not optimistic that XToken will continue to rise in the future, he can choose to lend XToken at Platform Bank, then sell XToken in MyDeX to obtain stable coins, and redeem XToken to repay the loan when the price falls.
- If a user is optimistic that XToken will continue to rise in the future, want to leverage. He can lends stable currency in Platform Bank, and then use the stable currency to obtain XToken in MyDeX, and sell XToken to redeem stable currency to repay the loan when the price rises.



On the current Ethereum platform, if the above two operations are to be carried out, users need to jump and click multiple times between multiple DeFi products. On the front-end interactive page of MyBank, the above-mentioned operation users only need to click once, and the whole operation will be completed in one block, which is more convenient and has a faster execution speed.



#### Credit System Explanation

The structure and location of the human network determine everyone's choices in all aspects of making friends, choosing schools, employment, financial management, raising children, leisure and entertainment, and determine people's social circles and their beliefs,  determine those who are more powerful, easier to succeed.



We quantify a person's "position" in the social network, and eventually, we can trust each other between two people who do not know each other only based on this "score".



The establishment of this score relies on the social network of the real society. We use anonymity and other technologies to create an independent, relatively anonymous, and private "public social network" on the chain. The behavior and structural position of the account on the social network is used for quantification to form our "Credit score". It mainly includes five aspects:

1. How many friends of an account with a minimum balance are in the account? Because of the HASH algorithm, you must know the account of a certain friend in reality before you can add it as a friend, and you must obtain the consent of the other party before your friend contact can be established. This mechanism naturally helps us avoid problems like "The network storm". For possible abuse of the network, we refer to social science research such as Dunbar's number. After the number of function calls exceeds a certain threshold, the cost exponentially increases, and correspondingly, the score will also be significantly improved.
2. How many high "score" friends does the account have. Realistic experience tells us that it is often necessary for a person to have many friends, but although a person does not have many friends, it is often more useful to have some "powerful" friends. We use the term eigenvector centrality to measure this metric.
3. For a virtual "social credit score" to be effective, it must be associated with activities on the chain. Compared with the traditional central intermediary, supply and demand are matched through the central intermediary, and the central intermediary provides a certain bidding ranking mechanism to obtain benefits from it. This method is necessary to a certain extent. Platform Bank has built-in this mechanism and returns the benefits to all participants on the chain. More importantly, we will use different social networks to allow this supply and demand to be carried out in a way similar to "chain propagation". When an account as the "demand party" puts forward a demand, the nodes in the social network choose whether to forward it (a certain amount of interest can be deducted) and participate as a guarantor. Here we measure the scope of influence of a message broadcast by an account.
4. Compared with the bridge connecting two pieces of land, we think that there will be one or more "bridge-like" characters in the two social networks. The necessity of the existence of this role is the key point to replace the central network. In other words, its existence can be equivalent to another "intermediary center." When a certain demand can only be propagated and matched through this node, the value of this role to both the supply and demand parties is of great importance. The quantification of this betweenness centrality is part of the core of the network.
5. It is reasonable to use a kind of 'proof of work' to divide a certain resource. How long an account provides for economic activities on the chain, how many shares of mortgage support, or how many forwarding or matching transactions, whether there is any violation of the network, should be punished for this phenomenon. . . We believe that such a mechanism can be used as one of the latitudes to quantify the importance of the account in the system.



The Credit Score obtained by combining these latitudes has a certain reference value, but it is not enough to allow two individuals who do not know each other in the system to carry out financial activities without risk. Over-collateralization is part of the liquidation logic. Based on this score, the system uses a portion of the reserve to hedge this risk is also one of our core mechanisms.



### Ecosystem Fit

Similar lending products on Ethereum include Compound & Aave, and AMM products include Uniswap & Sushiswap.

- In Platform Bank, we will release the liquidity of depositors' assets to maximize their social guarantee value and provide borrowers with zero mortgage loans service. After perfecting the DID module and credit scoring system, we will support users to make credit loans.
- Platform Bank and MyDex are developed based on Polkadot and Substrate, and users will pay fewer transaction fees and get higher TPS.
- Based on Polkadot's cross-chain bridge, MyBank can provide users with more diversified choices.
- MyBank integrates lending and trading, abstracting it into an interface at the front end. Users can conduct leveraged trading with one click, making it more convenient to long and short without switching between multiple products to obtain lower transaction delay.



At present, there is no similar product to Social Network Bank(SNB) in the market. SNB is not only aimed at the existing DeFi user group. SNB is an inclusive finance platform, allowing most people, including poor groups, to enjoy the convenience brought by finance and blockchain.

- Most of the existing credit product is based on asset collateral, but many poor people in the world do not have enough assets to mortgage, so they cannot obtain loans from financial institutions. MyBank will provide relevant digital tools based on the blockchain, so that poor groups can help each other and supervise each other based on their social networks.
- At the same time, we will cooperate with charities to provide start-up funds for the user's bank. When charities choose to donate to a poor village, after the initial distribution, some funds can be reserved for the user's SNB. Members in the same social network know each other better than third-party financial institutions. SNB can invest this sum of money in the village's most capable people through collective governance. All members share the income as angel investors.



## Team



### Team Members

- [Amos](https://github.com/ziwenxie) - Full-stack Developer
- [Dean](https://github.com/armatrix) - Full-stack Developer



### Contact

Email: official@mybank.network



### Team's Experience

Amos

- Machine Learning Engineer(Big Data & Computer Version)
- Rust And Substrate Developer



Dean

- Distributed Storage Engineer(FileCoin)
- Rust And Substrate Developer



### Team Code Repos

https://github.com/mybank-network/mybank-network



### Team LinkedIn Profiles

1. [Amos](https://www.linkedin.com/in/amos-green-387703165/)
2. [Dean](https://www.linkedin.com/in/dean-anderson-1485b8b9/)



## Development Status

Currently, we have finished the basic lending pallets. Starting from April 4, 2021, users can test the lending app on our official website.

- Substrate Code Repo: https://github.com/mybank-network/mybank-network
- Officail Website: https://mybank.network
- Lending APP: https://app.mybank.network (2021-04-04)



## Development Roadmap 

### Overview

- **Total Estimated Duration:** 2 months
- **Full-time equivalent (FTE):** 4
- **Total Costs:** 16000 DAI



### Milestone 1 — Implement Platform Bank

- **Total Estimated Duration:** 1.5 months
- **Full-time equivalent (FTE):** 3
- **Total Costs:** 12000 DAI



| Number | Deliverable                  | Specification                                                |
| ------ | ---------------------------- | ------------------------------------------------------------ |
| 0a.    | License                      | Apache 2.0                                                   |
| 0b.    | Documentation                | The documentation will be given to show the whole architecture of the Platform Network. |
| 0c.    | Testing Guide                | The testing guide will be provided to test pallets and the front-end. |
| 1.a    | Substrate Module: Asset Pool | Realize the interface of deposit and debit. Support multi-currency lending. Automatically adjusts interest rates based on demand and supply. Support mortgage lending and guraantee lending. |
| 1.b    | Subsrate Module: Oracle      | Oracle pallet exposes capabilities for authorized operators to feed external off-chain data. |
| 1.c    | Substrate Module: Monitor    | Manage liquidation process(off-chain worker), risk parameters, auction(By DeX). |
| 1.d    | Substrate Module: Incentive  | Users can receive MB token rewards for every block.          |
| 2.     | Front End Of Platform Bank   | Complete the development of the platform bank interactive page in react.  The interface will be available in Chinese as well as English. |
| 3.     | Docker Image                 | We will provide a dockerfile to demonstrate the full functionality of our chain. |

### Milestone 2 — Implement MyDeX

- **Total Estimated Duration:** 0.5 months
- **Full-time equivalent (FTE):** 1
- **Total Costs:** 4000 DAI



| Number | Deliverable                  | Specification                                                |
| ------ | ---------------------------- | ------------------------------------------------------------ |
| 0a.    | License                      | Apache 2.0                                                   |
| 0b.    | Documentation                | The documentation will be given to show the whole architecture of the MyDeX. |
| 0c.    | Testing Guide                | The testing guide will be provided to test pallets and the front-end. |
| 1.a    | Substrate Module: Swap       | A decentralized AMM protocol that is used to swap tokens. Users can set the maximum slippage tolerance. Support users to participate in the liquidation of Platform Bank. |
| 1.b    | Integrate with Platform Bank | Users can be more convenient to short and carry out margin trading. |
| 2.     | Front End Of MyDeX           | Complete the development of the dex interactive page in react. The interface will be available in Chinese as well as English. |
| 3.     | Docker Image                 | We will provide a dockerfile to demonstrate the full functionality of our chain. |



## Future Plans

1. Build MyBank Community.
2. Publish articles on media channels to expose the MyBank Network.
3. Cooperate with ETH-bridge and BTC-bridge project.
4. Support Kusama Node. The MyBank Network will run as a parachain of the Kusama.
5. Implement WASM Smart Contract by using !ink.
6. Develop DID and credit loan module.
7. Develop Social Network Bank after we implement Platform Bank and MyDeX.



## Additional Information 

We have just developed the first version of the [MyBank Network](https://github.com/mybank-network/mybank-network) and have not yet accepted external donations and financing.