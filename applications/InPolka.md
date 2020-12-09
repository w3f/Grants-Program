# InPolka Stablecoin Protocol

## Project Description

InPolka is building a multi-collateralized cross-chain stablecoin protocol, applying Off-chain Worker to reinforce security and stability for Stablecoins. The Protocol will serve as a pivotal building block for Polkadot ecology members and DeFi applications. 

InPolka will also enable diversified lending and borrowing services. In addition to collateralized borrowing, which functions similarly to other platforms such as Compound, InPolka will be able to provide the additional layer of unsecured borrowing for users based on their personal credit records. Those credit information and statistics will be on-boarded to InPolka Protocol via Oracle interfaces such as Chainlink and PolkaOracle in an encrypted and privacy protected manner. 

InPolka Stablecoin Protocol will include the following parts

- SDKs: to empower developer community to build upon and integrate with the Protocol

    Lending Service which enables micro-lending and unsecured Borrowing via mainstream oracle data feeding

- DAPP：

    InPolka will be using Substrate to enable multi-collateral Dollar including the following modules:

- The Token module with multi-currency support and the Oracle module from the Open Runtime Library (ORML), which are open-sourced for the community to use and build upon

- Various modules specific to manage collateral debt positions, risks, auctions, governance, etc.

## Project Details:

The whole protocol includes token, Oracle, price, auction module and pertaining components.

Token: when the pallet balance module processes a native token, it supports multiple other assets in-chain to manage balances and transmit tokens.

Oracle: a general price feed module implemented by OCW (Off-chain Worker), which stores the incoming price.

Price: the price of an asset provided by the base currency, which is exchanged for the stable currency iUSD.

Auction: the execution and settlement of a particular auction.

![img](https://lh4.googleusercontent.com/RNM2YsuTCpg2OLySkBqxyfzO3qLkdaQZilx4sv06TGFU1S3etGZCuGvG1DYjt1tVFTcMksKcwu0AHFVq6s3M8eTRg8MEfjmlOKgvilMngtEKl7mny1NKBmfpSN4VpOpNggdzXTFB)

Stablecoin Protocol: the account interacts with the protocol, where the user creates, updates, and transfers stable currency iUSD related functions.

CDP: management account, management auction, risk (execution rate, mortgage rate, debt ceiling, debt, asset ratio), liquidation, collateral assets.

Price stability mechanism: The iUSD is designed to peg to US Dollar at 1:1 ratio that the inPolka Network aims to maintain the value of one iUSD token approximate to one US Dollar at all times. The token holder has the governance authority and responsibility to manage the risk, and can authorize the adjustment of risk related parameters to maintain the ratio to the US dollar.

The risk parameters of different assets (BTC and ETH) are relatively independent, which are automatically adjusted by stablecoin agreement or voted by token holders.

Parameter Risks:

1. Execution rate: adjusting this parameter is a way to stabilize iUSD price. You need to pay tokens to close CDP.

2. Liquidation ratio: the price fluctuation of mortgage assets affects the price of iUSD, and adjusting the liquidation ratio to a certain extent will effectively control the stability of iUSD.

3. Liquidation penalty: provide additional security and stability, and remind users to control risks. The system will continuously monitor CDP, and if the value of collateral is lower than the liquidation ratio, liquidation will be carried out automatically, and the CDP will be collected and the collateral will be sold and auctioned.

4. Debt ceiling: different collateral (BTC, ETH) will limit the maximum total debt limit, so as to limit the total collateral of this asset in inpolka, and ensure the diversification of collateral portfolio and risk management. New collaterals cannot be generated after the debt ceiling is exceeded.

## Team members 

* Changyou Ye
* Wei Wu
* Jingyu Wang
* Taiqin Wu
* Guozhu Liang
* Jing Zheng
* ...

## Team’s background and experience：

* Wei Wu holds a Master's degree in computer Engineering from MIT. He has 4-years of experience in blockchain core development. He was formerly a senior engineer at Tencent, a core developer at PolkaOracle. He is a senior Substrate Framework early researcher.
 
* Changyou Ye is a senior blockchain full-stack development engineer. He holds a Master’s degree from Tsinghua University. He is also a Substrate runtime developer. He is proficient in distributed financial blockchain development.
 
* Jingyu Wang  has been contributing to several Polkadot ecosystem open source libraries. He has solid software engineering experience and was a core developer in  Huaxin Blockchain Research Institute.
 
* Taiqin Wu has a master’s degree in Economics from Nankai University. He has more than 4 years product/program/project management experience in Blockchain and high-tech industry.

* Jing Zheng is Senior web front-end engineer, capable of developing front-end projects independently and use linux and vim. Proficient in the basic framework of the front-end, be proficient in using webpack, and proficient in git collaboration related software such as gitlab, github and gittee. 

## Linkedln Profiles (Partial)
 
* [Guozhu Liang](https://www.linkedin.com/in/guozhu-liang-lubis-664a981b9/)
* [Jingyu Wang](https://www.facebook.com/jingyu.wang.92123015)
* [Wei Wu](https://www.linkedin.com/in/wei-wu-bob-1b1aa01b9/)
* [Changyou Ye](https://www.linkedin.com/in/chang-you-ye-598242200/)
* [Jing Zheng](https://www.linkedin.com/in/jing-zheng-42324a200/)

## Legal Structure

The legal structure of the InPolka Foundation is set up and incorporated in British Virgin Islands. 

## Development Roadmap

There will be 3 milestones with each milestone lasting for one month. The InPolka Stablecoin Protocol will be a 3-month project, aiming to deliver a running Substrate chain testnet providing the core business and services of DeFi, such as lending service and transaction service, and integrated with other chains connected to Polkadot, so as to realize the scalability and interoperability of assets. Within the framework of the Protocol, users can directly trade and lend all Polkadot ecosystem assets, such as bitcoin, ERC20 and TRC20 assets. Upon the testnet launch, we will implement a basic version of its economic model and work towards an Initial Parachain Offering.

* **M1: Prepare and publish pertaining White-paper as well as protocol-related documents;**

- We will create and publish relevant whitepapers

- InPolka stablecoin protocol based on Substrate and Polkadot, we will publish technical spec and runtime module designs

- dApp UX design

* **M2: We will apply and develop particular implementations;**

1. ORACLE: OCW building price repository

2. iUSD: stable currency assets

3. Collateral pool, CDP: acceptance of assets (BTC, ETH, dot)

4. Cost and risk model: regulating iusd price, etc

5. test and tutorial

- We will implement runtime modules to support the main functionalities

    - `inpolka`: is the proxy module that users will interact with for stablecoin functionalities such as create, update and transfer CDPs.

    - `cdp_engine`: manages auctions, risks (to enforce stability fees, collateral ratio, debt ceiling, debt to asset ratio etc.), and liquidation.

    - `auction_manager`: implements AuctionHandler and handles collateral, surplus and deficit auctions, manages auction parameters such as increment size, and duration etc.

    - `cdp`: manages maps of debt positions for accounts and collaterals, updates debt positions by updating aUSD balance via the debit module, and updates collateral balances.

    - `debits`: accounts for debt balance for a given collateral when a loan or cdp is created/updated/closed, based on collateral to aUSD exchange rate; it also takes into account of stability fee (or interest rate) and updates the debit exchange ratio every period (e.g. every block).

    - `other modules`: primitives module defines constants such as collateral currencies supported, support module for defining types.

- We will deliver a running chain with these modules, docker image to set up an inpolka node, an SDK library, and a tutorial using this protocol.

* **M3: For completion and delivery, we will provide tutorials for its application and publicize source codes.**

- We will implement a web dApp to include these features: create CDP to generate Inpolka stablecoin, manage positions, and simple governance.

- We will deliver a working web application with these features, and a tutorial to use it.

- The code for this project will be available publicly and a docker image will be available for download.

- We will launch a testnet with all parts integrated, provide documentation and tutorials to end-users and developers to use the dApp and SDKs.

## Additional Information

- Work has been done so far

    1. We are drafting and verifying the economic model of the InPolka Stablecoin Protocol.

    1. We are drafting technical specifications and design of runtime modules.

    1. We are building common runtime modules such as multi-asset tokens that will be used in the InPolka Stablecoin Protocol.

    1. Several custom components needed for the InPolka parachain and also the technical architecture of the parachain.
