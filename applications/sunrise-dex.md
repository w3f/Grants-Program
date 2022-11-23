# Sunrise DEX

* **Team Name:** Sunrise Protocol
* **Payment Address:** bc1qv2jhx5ykm4szuu9lp4ehtxclf67v6n7dprcgyl 
* **Status:** [Terminated](https://github.com/w3f/Open-Grants-Program/pull/164#issuecomment-874248620)

## Project Overview :page_facing_up: 

### Overview

Sunrise is building a decentralized protocol on a dedicated Polkadot parachain. We will enable deep liquidity starting with support for tokens on Sunrise Chain, Ethereum, and all parachains. Sunrise will support additional blockchains in the future. 

Our Decentralized EXchange (DEX) uses a bonding curve factory which supports liquidity pools for unpegged tokens such as ETH,DOT, LINK, ACA etc. Sunrise will support stable coin pools offering very low slippage and fees (e.g. DAI-USDT) and in the future stable coins that have different pegs (e.g. srsUSD-srsCNY).

![Sunrise Chain Vision](https://raw.githubusercontent.com/sunriseprotocol/wiki/main/assets/Sunrise%20Chain.png "Sunrise Chain")
**Deployment**

The first phase of the project will be built and deployed on a parachain via Rococo. Our standalone parachain [Sunrise Protocol Daybreak](https://daybreakexplorer.sunriseprotocol.com/) will be the precursor. Sunrise is also evaluating the ability to deploy an Intrachain DEX (running on our partners) parachain, this will be done either publishing a DEX crate, updating [ORML libraries](https://github.com/open-web3-stack/open-runtime-module-library/tree/master), or directly contributing to partners codebase with a pull request to their repository.

**Polkadot Ecosystem Benefits**

Sunrise protocol lays the foundation for the seamless exchange of assets, efficiency of stable coin transactions and advanced aggregation. Our product will attract the decentralized finance (DeFi) community and provide more liquidity that helps drive increased adoption for the Polkadot Network. The DEX is multi-platform and bridges across parachains allowing the community to access the latest protocols and initiatives. Sunrise has identified numerous gaps to capitalize on, in relation to the infrastructure of the most popular decentralized exchanges, which includes liquidity pool customization, limit order functionality and compliance functionality.

**Why are we creating this project**

This project provides a foundational layer for the Sunrise Protocol.

Our team consists of founders, researchers, builders and strategists for blockchain and decentralized finance. We have built a layer 1 blockchain at Harmony (public blockchain with sharding and open staking), have launched private permissioned chains on ethereum and hyperledger fabric  and have been actively involved in the Decentralized Finance community. We have chosen to build this project on Polkadot because Substrate allows us to focus on the Protocol and business logic. We feel the Partners in the ecosystem are laying the foundation for interoperable decentralization and we want to contribute to the community.

### Project Details 
Please see [this product overview presentation](https://about.sunriseprotocol.com) and [Sunrise Protocol Whitepaper](https://whitepaper.sunriseprotocol.com) for an overview of the Sunrise Protocol vision.

**This Project is specifically for the Sunrise Dex Factory which is a foundational component for the Sunrise Protocol**

The Sunrise Decentralized Exchange (DEX) combines the use of multiple bonding curves and price oracles to support liquidity pools for unpegged tokens, and stable coin pools. Below is an excerpt from the [Sunrise Protocol Whitepaper](https://whitepaper.sunriseprotocol.com) 

#### 3. Sunrise DEX Factory

The Sunrise DEX Factory will support the creation of Liquidity Pool Contracts.  The bonding curves for these liquidity pools, will be slightly different depending on the use case. Each exchange contract can be configured to the specific needs of the liquidity pool.

#### 3.1 Sunrise Factory/Registry Contract

All contracts will have a uniform interface for liquidity management and swap management. Thus abstracting away the underlying complexity from liquidity providers and traders, giving them a uniform mechanism to interact with all Sunrise liquidity pools.

Below is a list of the configuration parameters input into the factory contract when creating an exchange contract.

**Sunrise Protocol Seven Key Parameters**

1. **T** Token Weight : Weight of Token in the Pool
    - Tokens:  **T**. Assume there are **n** type of tokens in one liquidity pool, we denote them as **(T1,T2,... Tn)**.
    - weight parameter: **Wi(0<=Wi<=1)** is the parameter of token **i** in our model, which is a constant defined when creating the pool. We always assume **the sum of Wi =1**.
    - initial balance: **(x1,x2,...,xn)**  are the initial amounts a liquidity provider puts into a liquidity pool.
2. **epsilon** Fees : Liquidity Provider and Protocol Fees
3. **beta** Depth : Depth of Pool before slippage occurs
4. **Delta** Slippage: The rate at which price slippage increases
5. **Alpha** Max Min: Maximum and Minimum Token allocation for each reserve
6. **lambda** Dynamic fees : Unbalancing Penalty Fees
7. **k**  Market Price Alignment: Alignment of the Bonding Curve with Price Oracle 

![Sunrise Bonding Curves](https://raw.githubusercontent.com/sunriseprotocol/wiki/main/assets/Sunrise%20Bonding%20Curves.png "Sunrise Bonding Curves")
**The three types of bonding curves use the following variables**

3.1 MultiToken Bonding Curve (1,2)

3.2 StableCoin Bonding Curve (1,2,3,4,5,6)

3.3. Proactive Bonding Curve (1,2,3,4,5,6,7)

**There will be default values for each of these parameters based on the Bonding Curve Type.**

When not utilized the variable will be set to a default value having a nonconsequential effect.

#### Sunrise Protocol Overview

Sunrise Protocol is creating an open decentralized financial framework. Sunrise is building a complete suite of financial tools and non custodial services within a compliant framework . This will be done in a trustless decentralized environment. With the goal of disrupting and streamlining current solutions offered by Centralized Exchanges and International remittances.


**The following information is a short summary of the other features of the protocol**

Sunrise Bridge is used to create a multi-platform, multi-asset protocol using cryptocurrencies (tokens) as building blocks. We will start with Polkadot parachains, ERC-20 tokens and then other blockchains.

Once the primitives of a multi-platform, multi-asset DEX have been realized, decentralized financial protocols can leverage this for their liquidity needs. 

Sunrise Protocol will then add limit orders, a compliance framework and smart wallet functionality to give cost effective alternatives to Centralized Exchanges and International remittances.

Below are the high level modules that can be integrated into the Sunrise Ecosystem. A number of these will be implemented by our partners and the community, some of which may be subsidized by Sunrise Protocol grants.

![Sunrise Ecosystem](https://raw.githubusercontent.com/sunriseprotocol/wiki/main/assets/Sunrise%20Ecosystem.png "Sunrise Ecosystem")

### Ecosystem Fit 
Sunrise Protocol is building an open decentralized framework. This grant application is for the Sunrise DEX, a sub-component of the larger Sunrise Protocol. 

We have done a comprehensive review of the other DEX projects which include Polkaswap, Reef, Mangata, HydraDx, Polkadex, Subdex. We see there are gaps in the current DEX Approaches, these include stable coin support, limit order functionality and compliance functionality. We feel that these DEX projects cannot be leveraged as part of our protocol due to the mentioned gaps and the different technical approaches. 

We are the only protocol to offer multi-asset pools, optimized stable coin support, multiple bonding curves, adjustable transaction fees and limit orders.  We combine this with bridging capabilities for multi-platform support, limit order capabilities, combinatorial staking for better rewards, synthetic asset support, a compliance framework and smart wallet functionality to drive mass adoption.

This application is specific to the DEX Pallet and lays the foundation for the larger vision which can be seen in our [draft white paper](https://whitepaper.sunriseprotocol.com).

### DEX Evolution

![Sunrise Reference Protocols](https://raw.githubusercontent.com/sunriseprotocol/wiki/main/assets/Sunrise%20Reference%20Protocols.png "Sunrise Reference Protocols")

The following protocols offer specific functionality and are often leaders in their respective areas.  The points below walk through a chronological evolution of DEX and cross-chain capabilities.

- Uniswap introduced a simple bonding curve supporting two token liquidity pools.
- It later introduced it’s UNI token which is now table stakes for all Decentralized Exchanges, Sunrise Protocol extends this combining trading, protocol and liquidity balance rewards.
- Multi Asset Pools were introduced by Balancer and adopted by Curve who introduced the first bonding curve to support stable coins.
- Price Oracles being utilized by Automated Market Makers are being evaluated by Sunrise and DodoEx wrote a good white paper about the topic.
- Sunrise protocol adds to this with multipe bonding curves which supports multi asset pools, stable coins, and traditional tokens.
- Our Liquidity Providers can set the transaction fees when creating a Liquidity Pool similar to Balancer and Curve.
- We also introduce limit orders powered by our unique off-chain worker capabilities.
- Polkadot and Ethereum are supported initially with more platforms to come powered by our integrated bridging technology.
- Reef and PolkaDex are also building on Polkadot which provides the ability to create dedicated parachains.
- A Compliance Framework will be leveraged by Sunrise Protocol to provide cost effective solutions which compete with Centralized Exchanges and International remittances.
- Smart Wallet Functionality will also be provided to simplify the user experience and drive mass adoption.


## Team :busts_in_silhouette:

### Team members
John and Geoff will be the major contributors for this phase of Sunrise Protocol

- John Whitton: Sunrise Protocol Founder
- Geoff: Sunrise Protocol Core Protocol Engineer and Solution Architect

Additional team members will be announced shortly and contributing to this and other components of Sunrise Protocol


### Contact
* **Contact Name:** John Whitton 
* **Contact Email:** john@sunriseprotocol.com
* **Website:** [https://sunriseprotocol.com](https://sunriseprotocol.com)

### Legal Structure 
* **Registered Address:** N/A
* **Registered Legal Entity:** N/A 

### Team's experience

The team all have strong experience building Layer 1 Blockchain Platforms and Decentralized Financial Protocols.

Relevant Contributions are

**John Whitton:** John Whiton has been passionate about software and technology since high school. He graduated from the University of Queensland in Computer Science and travelled globally leading the design and development of many Service Oriented Architectures. He has built private permissioned blockchains on Ethereum and Hypersphere Fabric, partnering with firms such as IBM and Deloitte. He then grew the ecosystem for a public blockchain at Harmony. He has worked extensively with decentralized financial protocols, bringing a unique perspective by combining his extensive corporate experience with IBM, SAP, Deloitte and KPMG with the disruptive financial models being developed on blockchain.

John originally met Gavin Wood in 2016 and worked briefly with Tomasz Drwięga on Parity before taking a role as CTO of a small Blockchain Startup based on Ethereum which then moved to Hyperledger. He did further [research](https://github.com/johnwhitton/blockchain-eval/blob/master/substrate.md) into Polkadot and Substrate in 2019 and did strategy work on smart contract protocols and digital assets in 2019 including working on Cowri (now shell protocol),a stablecoin exchange protocol, before taking a role with Harmony as an Ecosystem Architect with a focus on Developer tooling and Ecosystem growth. At Harmony, John helped launch the Mainnet while also being intimately involved with hiring decisions and business strategy. His technical Portfolio is [here](https://johnwhitton.dev/docs/docs/learn/portfolio/) and more information can be found on [johnwhitton.dev](https://johnwhitton.dev/).

**Geoff:** Prior to joining Sunrise Protocol where Geoff leads the SRS token design and works on core protocol development. Geoff worked as a Blockchain Engineer and Research analyst, leading  technical due diligence on Decentralized Financial Protocols and Layer 1 Protocol offerings. He has reviewed thousands of whitepapers and tokenomics models. He has mentored many founders and blockchain startups and created investor briefings including strategy review, market fit and technical due diligence.  Technical contributions  include Decentralized Financial Protocols, Layer 2 Solutions, Decentralized Identity and encrypted data storage as well as protocol and infrastructure work such as consensus algorithms, sharding, smart contracts design and standards (Open Zeppelin). He has done extensive smart contract design and development with an in depth knowledge of decentralized financial protocols and tooling; including prototyping and development of DeFi Standards across multiple platforms.

### Team Code Repos
- [Sunrise Protocol](https://github.com/sunriseprotocol)
- [John Whitton](https://github.com/johnwhitton)
- [Geoff](https://github.com/gdevsrs)

### Team LinkedIn Profiles

- [John Whitton](https://www.linkedin.com/in/johnwhitton/)
- [Geoff](https://www.linkedin.com/in/geoff-s-9417b31bb/)

## Development Roadmap :nut_and_bolt: 

In this phase we plan to develop the initial decentralized exchange pallet for the Sunrise Protocol.

This application is specific to the DEX Pallet and lays the foundation for the larger vision which can be seen in our [draft white paper](https://whitepaper.sunriseprotocol.com).

### Overview
* **Total Estimated Duration:** 3 Months
* **Full-time equivalent (FTE):**  2 FTE
* **Total Costs:** 0.9 BTC

### Milestone 1: Framework design and minimal DEX Pallets

* Estimated Duration: 1 month
* FTE: 2
* Costs: 0.4 BTC

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a.   | License       | Apache 2.0 |
| 0b.   | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can (for example) spin up one of our Substrate nodes. Once the node is up, it will be possible to send test transactions that will show how to create a liquidity pool and provision funds to it. |
| 0c.   | Testing Guide | The code will have proper unit-test coverage (e.g. 90%) to ensure functionality and robustness. In the guide we will describe how to run these tests.<br />The tests will cover basic functionlity like<br />i. Creating a Liquidity Pool<br />ii. Adding and removing liquidity<br />iii. Swapping based on exact amount in and exact amount out |
| 1. | Multi-currency Baseline | Support Multiple Currencies being traded this will leverage and expand upon the following from [FRAME](https://substrate.dev/docs/en/knowledgebase/runtime/frame) and [ORML](https://github.com/open-web3-stack/open-runtime-module-library)<br />[FRAME:support:currency trait](https://github.com/paritytech/substrate/blob/master/frame/support/src/traits.rs#L858)<br />[FRAME:pallet-balances](https://crates.io/crates/pallet-balances)<br />[orml-tokens](https://github.com/open-web3-stack/open-runtime-module-library/blob/master/tokens/src/lib.rs)<br />[orml-currencies](https://github.com/open-web3-stack/open-runtime-module-library/blob/master/currencies/src/lib.rs) |
| 2. | Pallet: sunrise-dex | We will create a Pallet that will implement a simplified multi-token bonding curve.<br />We will begin prototyping with a two token pool similar to [uniswapV2Pair](https://github.com/Uniswap/uniswap-v2-core/blob/master/contracts/UniswapV2Pair.sol)<br />Then enhance to a multi-token-pool see [balancer as a reference implementation](https://github.com/balancer-labs/balancer-core/blob/master/contracts/BMath.sol) |
| 2a. | Liquidity Pool Management | We will create functions that will implement liquidity management samples included below<br />Pool Creation<br />Add liquidity<br /> Remove Liquidity <br />Pool creation will be configurable based on the seven parameters mentioned above|
| 2b. | Swap Functionality | We will create functions that will implement swap functionality including samples included below<br /> calcSpotPrice<br />calcOutGivenIn<br />calcInGivenOut<br />calcPoolOutGivenSingleIn<br />calcSingleInGivenPoolOut<br />calcSingleOutGivenPoolIn <br />calcPoolInGivenSingleOut<br />[Reference Implementation from Balancer](https://github.com/balancer-labs/balancer-core/blob/master/contracts/BMath.sol)|
| 2c. | Sunrise Router | We will create functions that will implement routing capabilities samples included below<br /> processPaths <br /> processEpsOfInterestMultiHop<br /> getPricesOfInterest<br />calculateBestPathIdsForPricesOfInterest<br />getSwapAmountsForPriceOfInterest<br />getExactSwapAmounts <br />[Reference Implementation from Balancer](https://github.com/balancer-labs/balancer-sor/blob/master/src/sor.ts)|
| 3. | Substrate chain  | We will Host this on our Dawn Parachain on Rococco or our  [Daybreak Standalone Chain](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fdaybreak.sunriseprotocol.com%3A443#/explorer) |
| 4. | Docker   | We will provide a dockerfile to demonstrate the full functionality of our chain |


### Milestone 2: Full version of SRS model

* Estimated Duration: 1 month
* FTE: 2
* Costs: 0.3 BTC


| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a.   | License       | Apache 2.0 |
| 0b.   | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can (for example) spin up one of our Substrate nodes. Once the node is up, it will be possible to send test transactions that will show how to create a liquidity pool and provision funds to it. |
| 0c.   | Testing Guide | The code will have proper unit-test coverage (e.g. 90%) to ensure functionality and robustness. In the guide we will describe how to run these tests.<br />Tests will include<br />i. Creating a stable coin pool<br />ii. Adding and removing liquidity <br /> iii. Swaps <br />iv.Rewards staking and earning <br />v. Testing functionalitly using explorer Extrinsics|
| 1. | Pallet: sunrise-dex | We will enhance the sunrise factory to support a stable coin bonding curve. <br />Reference implementations include [curve](https://github.com/curvefi/curve-contract/blob/master/contracts/pools/usdt/StableSwapUSDT.vy#L74) and [shellprotocol](https://github.com/cowri/shell-solidity-v1/blob/wbtc-renbtc-sbtc-10/22/2020/src/Shells.sol) |
| 2. | Pallet: sunrise-rewards | We will create a Pallet that will implement basic reward functionality.<br /> Reference implementations include [uniswap](https://github.com/Uniswap/liquidity-staker), [balancer](https://github.com/balancer-labs/bal-mining-scripts) and [sushiswap](https://github.com/sushiswap/sushiswap/blob/master/contracts/SushiMaker.sol)|
| 4. | Substrate chain  | We will Host this on our Dawn Parachain on Rococco or our  [Daybreak Standalone Chain](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fdaybreak.sunriseprotocol.com%3A443#/explorer) |
| 5. | Docker | We will provide a dockerfile to demonstrate the full functionality of our chain |

**Here is an overview of the Sunrise Reward design**

![Sunrise Rewards Design](https://raw.githubusercontent.com/sunriseprotocol/wiki/main/assets/Sunrise%20Rewards.png "Sunrise Rewards Design")

### Milestone 3: Sunrise DApp on Test Network

* Estimated Duration: 1 month
* FTE: 2
* Costs: 0.2 BTC


| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a.   | License       | Apache 2.0 |
| 0b.   | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can deploy the Sunrise Protocol DApp and the polakdot-js app forked by Sunrise Protocol with DEX Capabilities. |
| 0c.   | Testing Guide | The code will have proper unit-test coverage (e.g. 90%) to ensure functionality and robustness. In the guide we will describe how to run these tests.<br /> Tests will include <br />i. Testing all functions via explorer using extrinsics <br />ii. Testing functionality via the DApp|
| 1. | Polkadot-js app DEX Capabilities | We will fork polkadot-js app and provide dex functionality |
| 2. | Sunrise Protocol DApp | We will build Sunrise Protocol DApp with DEX Functionality |
| 3. | Applications Deployed and Hosted on Dawn | We will deploy a hosted application that connects to Dawn. |
| 4. | Substrate chain  | We will Host this on our Dawn Parachain on Rococco or our  [Daybreak Standalone Chain](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fdaybreak.sunriseprotocol.com%3A443#/explorer) |
| 5. | Community Education | We will publish Medium Articles in English and Chinese and also posts on twitter. Explaining the DEX Functionality. |

## Future plans

We plan to make our chain one of the leading parachains in the polkadot ecosystem. Thus, there is still a lot of work to be done. Here are a few of them:

1. Support for Multi-Currencies  via INK or EVM conforming to [psp-3](https://github.com/w3f/PSPs/blob/master/PSPs/drafts/psp-3.md)
2. Enhance Deployment capabilities of the Sunrise DEX for other chains (either as an ORML module or as an INK Contract)
3. Implement SRS Incentivization Functionality
4. Bridging Functionality (XCMP Parachain Integration and Ethereum snowfork like integration)
5. Sunrise Order Book and Limit Order Functionality
6. Application Functionality (Sunrise Dapp, polkadot-js apps, wallet)
7. Governance model using SRS
8. Parachain Functionality (Launching on Rococco initially)
9. Proactive Bonding curve integrated with price oracles
10. Compliance Framework
11. Smart Wallet Functionality
12. Governance model using SRS

## Additional Information

Work done so far has included research and prototyping.

No other teams have contributed to the project.

This is Sunrise Protocol's first grant application. However John wrote a previous application for a [DEX Pallet](https://github.com/w3f/General-Grants-Program/pull/351). The original application has been archived and the vision has been refined based on feedback from David Hawig and knowledge gained working on substrate over the past months by the Sunrise Protocol team.

For a more comprehensive Sunrise Protocol Vision please read the following

* [Sunrise Protocol Product Overview](https://about.sunriseprotocol.com)
* [Sunrise Protocol Light Paper](https://lightpaper.sunriseprotocol.com)
* [Sunrise Protocol White Paper](https://whitepaper.sunriseprotocol.com)

**Here is an overview of the Sunrise Order Book design**

![Sunrise Reference Protocols](https://raw.githubusercontent.com/sunriseprotocol/wiki/main/assets/Sunrise%20Limit%20Orders%20Detailed.png "Sunrise Order Book Design")
