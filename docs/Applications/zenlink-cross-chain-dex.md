# Open Grant Proposal

* **Project Name:** Zenlink DEX Smart Contract
* **Team Name:** Zenlink
* **Payment Address:** 3FyMZ4Y6wFXkaSzdBPetizppR5bD6BVLUy
* **Status:** [Terminated](https://github.com/w3f/Open-Grants-Program/pull/151#issuecomment-870569453)

## Project Overview :page_facing_up: 

### Overview

Based on the prediction of the further growth of the DEX ecosystem in the future and the rapid development of the public blockchain technology, we propose a Polkadot network-based, high-liquidity, cross-chain DEX Network, Zenlink.

It is a decentralized exchange network that consists of Zenlink DEX Module, Zenlink DEX Aggregator and other DEX Application on parachains.

### System Components

In general, Zenlink project consists of the following parts:
- Zenlink DEX Protocol: The top-level unified general DEX protocol which can be implemented by the following ways. We prefer to make it to have Auto Market Maker(AMM) function and be easy imported into parachain in multiple ways.
    - Module: it's implemented as a Substrate pallet which can be imported into the runtime of a parachain.
    - Smart Contract: it's implemented as a smart contract which can be deployed into the ink! pallet of a parachain.
- Zenlink DEX Aggregator: A simple and user-friendly entrance of DEX world which is able to connect with most of DEX on Polkadot, so that user can do one-click trade with multiple DEX on low slippage
- Zenlink Token(ZLK): The native token of Zenlink DEX Protocol which can be used to distribute liquidity benefits and governance, etc

![Zenlink Ecosystem](https://images-cdn.shimo.im/TrQlWEFKIz34Mv54__thumbnail.png)

As a result of the above components, a decentralized exchange network, Zenlink DEX Network, will be established.

### Benefit
Parachains don't need to implement dex functionality by themselves since Zenlink DEX Protocol has two implementations so it is easy to be integrated. After that, the tokens of parachains would be involved into Zenlink DEX Network by trading with other tokens of other parachains. The more parachains integrate with the protocol, the more tokens users can exchange, so that they would be like to be a market maker and benefit from the value of the flow.

### The whole planning of Zenlink

Firstly, Zenlink DEX Module and Smart Contract will be implemented based on Zenlink DEX Protocol. In order to complete the Zenlink ecosystem, we would like to deploy it to a substrate blockchain and build a front-end website application, Zenlink DEX Dapp, for test.

Secondly, we would like to build another important component, Zenlink DEX Aggregator. It will connect to Zenlink DEX Dapp.

Thirdly, we will test the full function of Zenlink DEX Module and Aggregator on Kusama. Users also can try it on Zenlink DEX Dapp.

Finally, the whole infrastructure(Zenlink DEX Module and Aggregator) will be deployed to Polkadot, so that Zenlink DEX Dapp will be switched to Polkadot network and published.

![Zenlink Architecture](https://uploader.shimo.im/f/aCpI4JDF0fHIhpjw.png!thumbnail)

## What we will implement in this grant
We will make the protocol has **cross-chain dex** functionalities in this grant. 

In the past grants([Zenlink DEX Pallet](./zenlink.md) and [Zenlink DEX Smart Contract](./zenlink-smart-contract.md)), We have implemented Zenlink DEX Protocol in two ways and verified its basic dex functionalities, such as token issue, trading, deposit funds, etc. However, the tests are all based on a single Substrate chain. So that, we would like to move further to make cross-chain value liquidity be possible on Zenlink DEX Network. For now, the best testnet should be Rococo which supports parachains and be free. There are still lots of things to do. 

Firstly, we will spike some asset modules, for example [orml-xtoken](https://github.com/open-web3-stack/open-runtime-module-library/pull/332/files#diff-9413d5e6d4c0aee4abccc79435f7885925fd1e4d26f8cfa1c5a7a5f377557215) which is used for identifying assets in different parachains. Then, we will adapt Zenlink DEX Module to the asset module.

Secondly, using the asset module and Zenlink DEX Module, we will implement an one-click cross-chain assets swap. The result is that user can send a swap transaction in Parachain200 which targe to the dex in Parachain300, then user will get another token in Parachain300.

![Cross-chain Assets Swap](https://uploader.shimo.im/f/Th3S540GGIys8j0O.png!thumbnail)

Finally, we will deploy the whole system to Rococo v1 to open test for everyone.

In generally, the purpose of this grant is to deploy Zenlink Protocol to Rococo V1, then verify the cross-chain dex functionalities.

### Ecosystem Fit 
no

## Team :busts_in_silhouette:

### Team members
* Hui Guo(Leo Guo), Team Leader
* Tianling, Principal Blockchain Expert
* Jianbin Zhao, Senior Backend Engineer
* Rui Shi, Senior Backend Engineer
* Hui Yuan, Senior Product Manager

### Contact
* **Contact Name:** Victory Van
* **Contact Email:** vv@zenlink.pro

### Team Website	
* https://zenlink.pro/

### Legal Structure 

* **Registered Address:** Address: 3 FRASER STREET #05-25 DUO TOWER SINGAPORE(189352)
* **Registered Legal Entity:** ZENLINK FOUNDATION LTD.
* **UEN:** 202029221W

### Team's experience
The team is made up of many experienced professionals in the blockchain industry.

Guo hui(Leo Guo) is the project leader. He joined imToken very early (June 2017) and worked for 3 years as a data analyst and marketing operation specialist. He is very good at trading quotes and user data analysis which helps imToken get 10m users and Tokenlon, imToken’s DEX, achieve 600m trading volume as well.

Tianling was a former senior expert of Alibaba. After leaving it, he joined a blockchain company as the core developer for 3 years. He is familiar with the underlying blockchain design and substrate development and also was in charge of the architecture design. Now, he is the principal blockchain expert of Zenlink team.

Jianbin Zhao is a senior backend dev with 5 years experience, and he is helping the team build the first DEX web application.

Rui shi is a senior backend dev with 5 years experience. He is not only familiar with C++/Rust, but also has good project experience on Substrate development.

Hui Yuan has rich experience in product design and management. She has built many nice and user-friendly internet application. 

### Team Code Repos
* https://github.com/zenlinkpro/zenlink_dex_module

### Team LinkedIn Profiles
no

## Development Roadmap

### Overview
* **Total Estimated Duration:** 4 weeks
* **Full-time equivalent (FTE):** 4
* **Total Costs:** 0.3 btc

### Milestone 1 — Implementing Zenlink DEX DApp
* **Estimated Duration:** 4 weeks
* **FTE:**  4
* **Costs:** 0.3 btc

| Deliverable  | Specification  | 
|--------------|---------------|
| Asset Module Technical specifications |  These spec will describe the architecture and usage with Zenlink DEX Module, and also be included in the [whitepaper](https://github.com/zenlinkpro/whitepaper/blob/master/en/zenlink_whitepaper_en.pdf). |
| Zenlink DEX Pallet Repository | A git repository containing the dex source code. The pallet will be adapted to a general asset module and achieve the cross-chain dex functionalities. |
| Tests        | The code will have proper unit-test coverage to ensure functionality and robustness                                                                    | 
| Tutorial       | The tutorial will not only indicate that how to use set up and deploy it into Rococo testnet, and also introduce special user cases and potential extensibility. It will be be published on Medium.                                                                   |

### Community engagement

The tutorials and Documentation that we provide will be published as articles in [Zenlink Medium](https://medium.com/zenlinkpro) and other social media platforms with due mention about Web3 grant.

We also intend to engage community by running range of user testing to get more feedback from the real end-users to improve our product.

## Future Plans
* Build & deploy Zenlink DEX Aggregator on Kusama/Rococo. 
* Full function test on Kusama/Rococo.
* Deploy the whole components to Polkadot including Zenlink DEX Module, DEX Dapp and DEX Aggregator.

## Additional Information :heavy_plus_sign: 
* Medium: https://medium.com/zenlinkpro
* Twitter: https://twitter.com/ZenlinkPro
* Whitepaper: https://github.com/zenlinkpro/whitepaper/blob/master/en/zenlink_whitepaper_en.pdf
