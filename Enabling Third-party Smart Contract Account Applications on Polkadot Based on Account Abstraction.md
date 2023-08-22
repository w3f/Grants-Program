# Enabling Interoperable Third-party Smart Contract Account Applications on Polkadot Based on Account Abstraction (AA) for Demand Abstraction

- **Team Name:** Smarter AA Wallet
- **Payment Address:** bc1quf6qljy5z07sxlv6fgv04zqzaq0g30z3v47v3u (BTC)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

### Overview

Please provide the following:

The capacity, usability, and personalization of blockchain are limited by the existing crypto account system like externally-owned accounts (EOA) and contract accounts (CA). To address this issue, the recent significant account upgrade called account abstraction (AA) enables users to freely self-define the functions, logic, and settings of their crypto accounts via smart contracts. Compared with the existing EOA and CA, with AA users can have more account functionalities, higher customization, and better usage experience as good as Web2 while maintaining the decentralization of Web3. 

However, it’s impractical for users to write smart contracts by themselves to use their AA account, so they need smart contract account applications developed by smart contract developers and account service providers to better use their AA account easily. Currently, different AA wallets develop different account applications by themselves for their users like non-seed phrase login, ERC-20 token gas payment, and batch transactions, but it doesn’t make sense for any wallets to develop all account applications to meet all different user needs by themselves, and the interoperability and composability among different account applications developed by different AA wallets would be a big issue. Therefore we should develop a unified account standard based on AA for all third-party smart contract developers to develop their third-party account applications and provide their third-party account services for all users upgrading to AA accounts. Users can freely choose and switch among different AA wallets to better equip and use their accounts easily with all kinds of account applications. 

### Project Details

We will design a standard interface to enable third-party account applications based on account abstraction on Polkadot, especially optimizing for its multi-chain structure. Smart contract developers can develop their third-party account applications and provide their different account services for users to better set and use their AA accounts easily like password/email/2FA login, social recovery, gas repayment, and automatic trading. They will be fully non-custodial, decentralized, and interoperable for all users in different AA wallets.

Although the proposals like ERC-4337 in Ethereum can implement AA with no need to change the fundamental consensus of blockchain, the corresponding expense is the additional overhead and gas costs when users operate their AA accounts. Therefore we aim at not just deploying and achieving AA in Polkadot but also further optimizing its technical design and implementation with higher performance, usability, and lower cost. We can also better achieve this goal on Polkadot by utilizing its advanced multi-chain structure.

There will be two types of third-party account applications under our AA standard. One is internal account management applications for users to easily set up their accounts and manage their crypto assets. We will provide a corresponding use case which is a decentralized and universal Web3 login diminishing single point of failure or attacks. The other is external account interaction applications for users to make transactions with others and trade in DeFi applications via the smart contracts in their accounts automatically and intelligently. We also make an innovative and valuable use case which is a decentralized and automated trading bot for reliable and delegated execution of on-chain trading strategies.

Furthermore, with account applications, we can further transform account abstraction into the ultimate abstraction which is user demand abstraction. Users can just directly express and meet their demands without caring about the specific achievement across accounts, DApps, and blockchains. In order to do so, our protocol can support AA account applications to intelligently analyze user demands and find the according solution scheme, then match the corresponding DApps and automatically run them on DApps and blockchains for users. Such a better new way of Web3 user interaction based on user demands will be more natural, efficient, and user-friendly than the existing Web2 way of user interaction based on specific apps.

Given the grant, the expected outcome of our project could be:

- A technical standard achieving third-party account applications based on AA
- A protocol extending the AA standard above to enable user demand abstraction
- A sample wallet based on our AA standard and protocol including front-end, back-end, and contract
- Two innovative and valuable use cases for account management and interaction applications based on our AA standard and protocol
- Data models / API specifications
- Documentation of core components, system architecture, and technical specifications of the deliverables above

### Ecosystem Fit

Based on our standard, AA can better enrich and facilitate user accounts on Polkadot with a variety of account applications developed by third-party smart contract developers and account service providers. In this way, our standard and protocol provide a better account solution to benefit users, smart contract developers, account service providers, and DApps on the Polkadot ecosystem as follows:

- Polkadot **users** can better set up their smart contract accounts easily based on AA. They can use their accounts in a more capable, flexible, and user-friendly way with more functionalities and freedom, better user experience, higher performance, and efficiency.
- **Smart contract developers** can not just develop DApps for blockchain service providers, but also develop decentralized and interoperable account applications for blockchain account service providers.
- As **crypto wallets** are migrating to AA, we can also benefit them because our AA solution can natively support all third-party account applications in different AA wallets with full interoperability and composability. If a user switches to a new AA wallet, all his/her account applications can be automatically transferred to the new wallet, so he/she won't be restricted or locked by any wallet.
- **DApps** can seamlessly integrate with account applications to provide better blockchain services and experiences for their users. With demand abstraction, users can better use different DApps across different chains easily, which can increase their usage and transactions in DApps.

## Team :busts_in_silhouette:

### Team members

**Technical developer and leader Myron Zhang** is a smart contract and wallet developer working full-time on this project. He previously worked as a wallet developer on exchanges serving 180+ countries. He is familiar with the working principles of Ethereum and has extensive experience in smart contract development. He also has in-depth research in the field of NFT and Defi, leading the design and coding of several online NFT projects. At the same time, he is familiar with big data, back-end, and other technology stacks. He worked for a GameFi company, which developed the world's first 3A web3 blockchain game.
 
**Technical developer and researcher Miguel Monares** graduated from The University of California, San Diego, double majoring in (1) Math-CS and (2) Cognitive Science with a specialization in machine learning. He was previously a researcher at the National University of Singapore where he built infrastructure for cross-chain deFi regulation and developed a tool to benchmark blockchains and dApps. Miguel has advised the development of web3 ventures for start-ups and corporations, and he won the Franklin Templeton Blockchain Fintech competition with his project, SugarBlock, a P2P marketplace and donation platform for nonprofit organizations. He is passionate about building the next generation of web3 tools toward a decentralized future.

**Technical researcher and product manager Jerry Gong** works full-time on this project. He previously was a product manager in the blockchain data analysis platform iChainfo (https://www.ichainfo.com). He was also a Web3 research analyst in Foresight Capital and NexGen Venture, where he did extensive research and analytics on all directions and areas of blockchain and Web3 thoroughly, analyzed different fast-growing projects deeply, and picked up promising ones for further follow-up and investment.

**Product designer and business development Erika Wang** works full-time on this project and she previously worked in the famous crypto wallet Bitkeep before as a product designer. She had rich experiences in wallet product design and abundant resources in wallet business development. She knew the team of many other projects in DeFi, NFT, and DID, so she could help find and promote ecosystem partners.

### Contact

- **Contact Name:** Myron Zhang
- **Contact Email:** zhangzhishun1024@gmail.com
- **Website:** https://smarter.web3-idea.xyz

### Team's experience

We are a closely collaborative and productive team made up of talented developers, innovative researchers, and industry experts from USC, UC San Diego, and CMU. We are all very interested and excel in blockchain, crypto wallets, and account abstraction covering their research, development, design, and business. We all have strong passion, great ambitions, and rich experiences in high-tech innovation and Web3 entrepreneurship for a better future in the digital new cyberspace. We are all very thrilled about this project and fully devote ourselves to working on it. We have also insisted on working on it for a long time because we firmly believed our project would succeed and made revolutionary contributions to the industry. 

### Team Code Repos

https://github.com/aawallet/aa-wallet-web-app


Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine.

- https://github.com/mxnares/market
- http://github.com/zhangzhishun


### Team LinkedIn Profiles (if available)

- https://www.linkedin.com/in/myronzhang1024/
- https://www.linkedin.com/in/erika-wang-ba5844241/
- https://www.linkedin.com/in/miguelmonares/

## Development Status :open_book:

We have finished the initial research and design, and we are developing the first version of our project. We are also currently looking for grants, support, advice, and partnerships.

- Demo: https://smarter.web3-idea.xyz
- Prototype: https://www.figma.com/file/4Yu3MRAu1EG0kQMInFmnJk/Smart-AA-Wallet-Prototype?type=design&node-id=0%3A1&mode=design&t=WJmYKNbNmoL5HPNA-1

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 6 months
- **Full-Time Equivalent (FTE):**  4 FTE
- **Total Costs:** $28,000

### Milestone 1 — AA Standard Enabling Third-party Account Applications

- **Estimated duration:** 2 months
- **FTE:**  3
- **Costs:** 10,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a developer can develop his/her third-party account applications via our standard. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests to verify our AA standard can fully support third-party account applications. |
| **0d.** | Docker | We will provide Dockerfiles that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an article that explains how our AA standard works and runs for developers to smoothly provide users with different account applications in their AA accounts. |
| 1. | User interface | We will design and develop a sample AA wallet for users to have their AA account and equip it with third-party account applications. |
| 2. | Smart contracts | We will deliver a set of ink! smart contracts to show the specifications of our AA standard supporting third-party account applications. |
| 3. | Substrate module: transaction execution | We will create a Substrate module to define and achieve the interfaces of executing transactions. |
| 4. | Substrate module: identity verification | We will create a Substrate module to define and achieve the interfaces of verifying the identity of users. |


### Milestone 2 — Use Cases of Account applications

- **Estimated duration:** 2 months
- **FTE:**  3
- **Costs:** 9,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how users can use our use cases for account management and interaction applications. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests to verify the functionalities and security of our use cases.  |
| **0d.** | Docker | We will provide Dockerfiles that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an article that explains how our use cases work and run based on our AA standard to encourage more developers to develop their third-party account applications. |
| 1. | User interface | We will design and develop two use cases for users to use third-party account applications via our AA standard. One is decentralized universal login as an account management application, and the other one is a decentralized automatic trading bot as an account interaction application. |
| 2. | Smart contracts | We will deliver a set of ink! smart contracts to show the specifications of our third-party account applications as the use cases of our AA standard supporting any third-party account applications. |
| 3. | Substrate module: App authorization | We will create a Substrate module to allow users to authorize the corresponding Apps after verification. |
| 4. | Substrate module: automatic trading | We will create a Substrate module to verify whether the submitted transactions meet the trading strategy. If so, execute the transaction automatically. |

### Milestone 3 — Demand Abstraction

- **Estimated duration:** 2 months
- **FTE:**  3
- **Costs:** 9,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how users can directly specify their demands and automatically get the corresponding best solution scheme among DApps with no need to find and use them manually. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests to verify the functionalities and security of demand abstraction.  |
| **0d.** | Docker | We will provide Dockerfiles that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an article that explains how demand abstraction work and run based on our AA standard, third-party account applications. |
| 1. | User interface | We will design and develop the new way of Web3 user interaction directly based on user demands rather than any specific demands. Users just need to naturally express their specific needs in our user interface, and then the backend system will automatically analyze user demands, find the best solution scheme, and match the corresponding DApps. After the user confirms the solution, the user’s AA account will get the user authorization to execute the solution scheme accordingly across accounts, DApps, and blockchains to meet the demands of users. |
| 2. | Smart contracts | We will deliver a set of ink! smart contracts to show the specifications of our demand abstraction. |
| 3. | Substrate module: AI model | We will create a Substrate module to interpret and analyze the demand users express and specify. |
| 4. | Substrate module: automatic Apps execution | We will create a Substrate module to automatically run the corresponding DApps and account applications for users. |


## Future Plans

We will attract and preserve both new and existing crypto users at different levels. For new crypto users from Web2, we will highlight our project can provide a frictionless and ultimate usage experience for them as good as the Web2 applications they are familiar with. For instance, they can log in via password, fingerprint, or facial recognition easily and safely without a seed phrase. For existing crypto users from other kinds of crypto accounts, we will emphasize AA can provide more functionalities and features than other crypto accounts, and our standard can enable third-party account applications to better meet more different user demands.  

The target of our project is not just a useful tool for users to access their blockchain account and manage their crypto assets, but more importantly, a thriving and sustainable ecosystem for users to better explore blockchain and Web3 to benefit from inclusive and decentralized finance. Therefore the success of our project in the long term depends on whether the ecosystem can attract and preserve users, DApps, and especially third-party account service providers with their account applications. To achieve this goal, in the short term, we will launch and promote our two unique, innovative, and valuable use cases first for our account management and interaction applications. They can onboard the first round of new users and we will start building our user community to preserve them. With more users, we can appeal to smart contract developers and account service providers with their account applications and services and thus attracting more and more users forming a positive cycle with the network effect.
