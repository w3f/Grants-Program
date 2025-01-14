# Transactions Agent Pallet
+ **Team Name:** WePolka
+ **Payment Details:**
    + **Payment Address:** 12UD2FdspWzwfRUURNtcr2Hujk35r5dCY8WTJCe9sZbk1QmE (USDC-Polkadot AssetHub)
    + **Payment:** accept 50% vested DOT.
+ [**Level**](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels)**:** 1

## Project Overview 📄
The Transactions Agent Pallet is designed to provide a proxy signing tool for the Substrate ecosystem, aiming to enhance the user interaction experience on Substrate chains. It includes signer accounts and proxy accounts, allowing a user’s wallet address (signer account) to perform on-chain transactions via a token-holding wallet address (proxy account) even without holding tokens.

### Overview
#### background
Since the inception of Substrate, more than 190 projects have been developed based on the Substrate framework (Data from [https://polkaproject.com/#/projects?cateID=1&tagID=0](https://polkaproject.com/#/projects?cateID=1&tagID=0)).  Substrate provides developers with a powerful framework that significantly reduces development costs.  It has been used to implement various application scenarios, such as cross-chain asset protocols, privacy computing, distributed storage, and DeFi.

Against the backdrop of mass adoption, Substrate projects need more users to engage with their products and continuously improve based on user feedback.  However, a gap exists between users and Substrate-based Dapps:

+ For users, using different Dapps requires holding the tokens of those Substrate projects.  This demands time and effort to acquire and manage various tokens.
+ For Substrate projects or Dapps, there is a strong incentive to encourage users to try their products for free as a way to convert them into paying users.  The lower the barrier for users to try products for free, the easier it becomes to convert them.
+ As of November 2024, Substrate has approximately 200,000 active addresses (data from [https://tokenterminal.com/explorer/projects/polkadot](https://tokenterminal.com/explorer/projects/polkadot)), compared to around 7 million on Ethereum.

We urgently need more active users, and we need a simpler and more efficient way to convert users.  This is a critical challenge that must be addressed immediately.

#### Solution
Projects can utilize the Transactions Agent Pallet to set up a proxy account. When users need to sign a transaction, the proxy account submits the signed transaction on-chain, allowing users to bypass the need for holding tokens and ignore gas fees.

Imagine a scenario where users can experience some or all functionalities of Substrate-based Dapps with just a wallet. This significantly lowers the entry barrier for users. When users find that a Dapp meets their needs, they can choose to pay for tokens to extend their usage or unlock additional features.

#### Features
+ **Open Source**: The Transactions Agent Pallet is proposed as an open-source pallet, allowing Substrate projects to enhance user conversion efficiency without incurring any additional costs.
+ **Secure**: The Transactions Agent Pallet prevents replay attacks using nonce values. Each transaction payload submitted by a user carries a nonce, which is verified for signature correctness. Additionally, the nonce must be greater than the current on-chain nonce value, ensuring transaction security.
+ **User-Friendly**: Using the Transactions Agent Pallet for signing requires no extra effort from users or developers, making the process almost seamless and transparent.
+ **Developer-Friendly**: The pallet is simple and easy to use, requiring minimal time to understand and integrate Transactions Agent functionality.

#### Details
To enhance the usability of the Transactions Agent Pallet, we provide a signature generator based on Polkadot/js to support the security verification mechanism of the Transactions Agent Pallet.

**Architecture**

![img1](https://github.com/OIyoung/Transactions-Agent/blob/main/static/image1.png)

#### Typical example
![img2](https://github.com/OIyoung/Transactions-Agent/blob/main/static/image2.png)

#### Sequence
![img3](https://github.com/OIyoung/Transactions-Agent/blob/main/static/image3.png)

## Team 👥
### Team members
+ Oscar Feng
+ Harry OIyoung
+ Richard James

### Contact
+ **Contact Name:** Oscar Feng
+ **Contact Email:** oscarfengweb3@gmail.com

### Legal Structure
+ **Registered Address:** -
+ **Registered Legal Entity: -** 

### Team's experience
The team consists of engineers and product experts from Web3 companies, each with over 5 years of industry experience. They are all enthusiasts of Substrate. The team members won second place in the Shanghai Polkadot Summer Hackathon in 2022.

### Team Code Repos
+ [https://github.com/OIyoung/Transactions-Agent](https://github.com/OIyoung/Transactions-Agent)

## Development Roadmap 🔩
### Overview
+ **Total Estimated Duration:** 2 months
+ **Full-Time Equivalent (FTE):** 3 FTE
+ **Total Costs:** 10,000 USD

### Milestone 1 — Implement Substrate Modules
+ **Estimated duration:** 1 months
+ **FTE:** 3
+ **Costs:** 10,000 USD

| Number | Deliverable | Specification |
| --- | --- | --- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide both inline documentation of the code and a live demo. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 1. | Pallet: Basic Read & Write | We will provide a Pallet to proxy transactions on the chain and pay gas fees. |
| 2. | Benchmarking | We will provide a Benchmarking for Extrinsic. |
| 3. | Signature Generator | We will provide a signature generator based on Polkadot.js to facilitate developers' use and quickly generate the parameters required by Pallet. It will also serve as a practical use case for developers. |


## Future Plans
Going forward, we will continue to improve the extensibility of the Transactions Agent Pallet, such as enabling developers to configure conditions for proxy account calls, balance alerts, and more. We will engage with established Substrate projects to assist developers interested in using the Transactions Agent Pallet in integrating it into their applications.

