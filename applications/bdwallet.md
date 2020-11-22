# Open Grant Proposal

* **Project Name:** BD Wallet
* **Payment Address:** 3FfrG9FrZXmPikEYJ9FdHPoRZ2nPjMY45W

## Project Overview :page_facing_up: 
The full name of BD Wallet is `Black Diamond Wallet`, It is a multi coin crypto wallet enables blockchain developers to build their DApps and wallets natively without having to worry about the low-level implementation details. 

Unlike other wallets, we also support centralized wallets which we call `cloud wallets`. Through the cloud wallet, we provide users with functions such as project rating, easy-to-operate staking, and DeFI vaults. Currently, the cloud wallets has served over 70,000 blockchain industry users.

Now, we intend to fully support the Polkadot ecosystem and contribute to the prosperity of the Polkadot ecosystem

### Overview

BD Wallet which formerly known as Black Diamond Ratings, was created in January 2018, it is the first jury-type blockchain project rating in the world, with more than 500 professional reviewers, all of whom are senior practitioners in the blockchain industry. The rating range includes exchange ratings, cryptocurrency ratings. Currently, it has accumulated 17,000+ ratings, it is the largest cryptocurrency rating agency in China.

On August 15, 2020, the company strategically merged with Bi Da Wallet and officially changed its name to Black Diamond Wallet. Black Diamond Wallet has now developed into a digital open financial one-stop solution platform integrating cryptocurrency storage, financial service, project rating and industry social contact.

BD Wallet will fully support the construction and development of the Polkadot ecosystem:

1. Launch a special version of Polkadot ecosystem project Rating, in order to let more users know about Polkadot and other Polkadot related projects.
2. Put the service of DOT Staking online to help the construction of Polkadot Node.
3. Support DOT, KSM and other polkadot ecosystem hot projects token recharge and withdrawal.
4. Support Polkadot ecosystem DAPP access in the future, making more users to use Polkadot Eco's DAPP easily.

### Project Details 
* Mockups/designs of any UI components
  * 
* ](https://github.com/bdwallet)

### Ecosystem Fit 
In the current market, there are products in the same type of BD Wallet, such as imtoken, cobo wallet, math wallet.

BD Wallet has its own unique characteristics.BD Wallet Provides the world's first jury-style rating service. It is the country’s largest rating agency and has the country’s largest rating data. BD Wallet also has a social function, which facilitates information sharing and exchange between users.

## Team :busts_in_silhouette:

### Team members
* Iori Zuo: Lead the team, responsible for project coordination and strategic planning.
* Steve Li: The main technical leader.
* Charlotte Xia: Responsible for business and marketing
* Jie Li: Senior Software Engineer
* Robert Li: Senior Software Engineer

### Team Website

* https://www.heizuan.com/

### Legal Structure 
* Company name: Fuzhou Wakanda Information Technology Co., Ltd.
* Registered address: Room F-S309-05, 3rd Floor, Annex Building, F Zone, Fuzhou Software Park, No. 89 Software Avenue, Gulou District, Fuzhou City, Fujian Province, China

### Team Code Repos
* BD wallet cloud version code base: https://github.com/bdwallet/wallet-app
* Bd-wallet-core code base: https://github.com/bdwallet/bd-wallet-core
* A redux framework for TypeScript: <https://github.com/redux-model/redux-model>

### Team experience
* Our team members are all come from the Internet industry, and have worked for Baidu, Tencent, Bit Age and other first-tier Internet companies and first-tier digital currency exchanges, which have developed hellokimi blockchain game platform and linkbit token airdrop tool, and focused on technology research and development in the field of cryptocurrency wallets in 2018.

## Development Roadmap :nut_and_bolt: 

1. Cloud wallet fully supports the Polkadot ecosystem

   * Support deposit and withdrawal of DOT, KSM on `cloud wallets` 
   * Support the Polkadot ecosystem projects rating
   * Support DOT Staking service to help users participate in Polkadot verification and nomination more easily

2. Complete the development of `bd-Wallet-core`.

    `bd-wallet-core` is open source library that implements low-level cryptographic wallet functionality for many blockchains. It will fully support the coins of the Polkadot ecosystem, so that to make it easier for developers to enter the Polkadot system.

3. Complete the development of `Hierarchical Deterministic Wallet`, including:

   * Deposit and withdrawal of Polkadot ecosystem coins (including at least DOT, KSM)
   * Polkadot Dapp Browser

### Overview
* **Total Estimated Duration:** 3 months
* **Full-time equivalent (FTE):**  5.5 FTE
* **Total Costs:** 2 BTC

### Milestone 1 — Complete fully support of cloud wallet for Polkadot ecology
* **Estimated Duration:** 1 month
* **FTE:**  1.5
* **Costs:** 0.5 BTC

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0. | Support deposit and withdrawal of DOT and KSM on cloud wallet | We will build DOT and KSM nodes and interface with polkadot-js on the server side to support the deposit and withdrawal of DOT and KSM tokens. At the same time, we will also launch a corresponding deposit and withdrawal portal on the app side. Once users log in the app, they can launch corresponding operations, such as recharging dot and participating in Staking. |
| 1. | Support Polkadot ecosystem project rating | We will launch the project rating of polkadot ecosystem on the app. After logging in to the app, users will be able to rate the projects which they are focusing on or knowing. After the rating is published, other |
| 2. | Support dot staking | We will open the dot staking portal on the app side to help users participate in Polkadot verification and nomination, but do not have relevant experience. The staking page will demonstrate the corresponding annualized earnings. |
### Milestone 2 — Complete bd-wallet-core development
- **Estimated Duration:** 1 month
- **FTE:**  2
- **Costs:** 1 BTC

| Number | Deliverable                      | Specification                                                |
| ------ | -------------------------------- | ------------------------------------------------------------ |
| 0.     | api design                       | Design the api that will be used by the decentralized wallet, including mnemonics, address generation, derivation, transaction signatures, etc. |
| 1.     | documentation                    | Instructions and examples for use.                           |
| 2.     | unit test                        | Write for each unit test.                                    |
| 3.     | DOT, KSM and other coins support | Interface with mainstream coins that support the polkadot ecology, such as DOT and KSM. |
| 4.     | BTC, ETH and other coins support | Because BD Wallet users tend to use not only the polkadot Ecology coins, but also use the mainstream coins, such as BTC ETH, we support as well |
| 5.     | Publish to project library       | Release our origin source library to the NPM central repository for developers to import and use |

### 

### Milestone 3 — Complete bd-wallet development

- **Estimated Duration:** 1 month
- **FTE:**  2
- **Costs:** 0.5 BTC

| Number | Deliverable                      | Specification                                                |
| ------ | -------------------------------- | ------------------------------------------------------------ |
| 0.     | UI design                        | The UI of the Hierarchical Deterministic Wallet is designed to provide good interaction experience for users |
| 1.     | Wallet constructure design       | The constructure design of the wallet. The APP contains local storage strategy, broadcast node management, multi-coins management and other services. The server should provide API interface which supporting multiple chains and in charge of obtaining transaction records, transaction status and other information |
| 2a.    | Transaction function development | The core function of wallet is to develop the coin management and charging related functions of app |
| 2b.    | DApp browser development         | The development of dapp browser based on polkadot Ecology will serve as the flow entrance of polkadot ecology DAPP. |
| 3.     | release                          | Project published available for download and use by users    |

### 

## Future Plans
1. In the upcoming wallet development program, we will develop the decentralized wallet, and also fully support for polkadot Ecology Dapp access.
2. We plan to establish polkadot (China) Technology Alliance in China to study and promote the technology and concept of polkadot and appeal more developers to join in the ecological development of polkadot and work together to achieve the vision of web 3.0 as soon as possible. At present, multiple exchanges and media companies such as AEX, BKEX, Safe Custody, and token damo have jointly initiated the establishment of Polkadot (China) Technology Alliance
3. We have focused on the study of the deployment of asset synthesis protocols on the Polkadot Network, in order to map real-world physical assets onto the blockchain, which we feel is a very large market, and we will invite more developers to participate in this study

## Additional Information
So far, we have completed the development of Black Diamond Wallet cloud wallet, which can provide users with multiple services, such as staking, social networking, rating, defi mining and others. Currently, it has fully supported for polkadot, at the same time we have been preparing for the creation of the polkadot (China) Technology Alliance.