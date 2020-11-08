# Open Grant Proposal

* **Project:** Zenlink DEX DApp
* **Proposer:** [Victory Van](https://github.com/v-van)
* **Payment Address:** 3FyMZ4Y6wFXkaSzdBPetizppR5bD6BVLUy

## Project Overview :page_facing_up: 

### Overview

Based on the prediction of the further growth of the DEX ecosystem in the future and the rapid development of the public blockchain technology, we propose a Polkadot network-based, high-liquidity, cross-chain DEX Network, Zenlink.

It is a decentralized exchange network that consists of Zenlink DEX Module, Zenlink DEX Aggregator and other DEX Application on parachains.

### System Components

In general, Zenlink project consists of the following parts:
- Zenlink DEX Protocol: The top-level unified general DEX protocol.
- Zenlink DEX Module: Polkadot Network Module implemented according to the Zenlink Protocol standard. We prefer to make it to have Auto Market Maker(AMM) function and be easy imported into parachain in multiple ways.
- Zenlink DEX Aggregator: A simple and user-friendly entrance of DEX world which is able to connect with most of DEX on Polkadot, so that user can do one-click trade with multiple DEX on low slippage
- Zenlink Token(ZLK): The native token of Zenlink DEX Protocol which can be used to distribute liquidity benefits and governance, etc

![Zenlink Ecosystem](https://images-cdn.shimo.im/TrQlWEFKIz34Mv54__thumbnail.png)

As a result of the above components, a decentralized exchange network, Zenlink DEX Network, will be established.

### Benefit
Since Zenlink DEX Module is easy to integrate, Parachains don't need to implement dex functionality by themselves. After that, the tokens of parachains would be involved into Zenlink DEX Network by trading with other tokens of other parachains. The more parachains integrate with the module, the more tokens users can exchange, so that they would be like to be a market maker and benefit from the value of the flow.

### The whole planning of Zenlink

Firstly, Zenlink DEX Module will be implemented based on Zenlink DEX Protocol. In order to complete the Zenlink ecosystem, we would like to deploy it to a substrate blockchain and build a front-end website application, Zenlink DEX Dapp, for test.

Secondly, we would like to build another important component, Zenlink DEX Aggregator. It will connect to Zenlink DEX Dapp.

Thirdly, we will test the full function of Zenlink DEX Module and Aggregator on Kusama. Users also can try it on Zenlink DEX Dapp.

Finally, the whole infrastructure(Zenlink DEX Module and Aggregator) will be deployed to Polkadot, so that Zenlink DEX Dapp will be switched to Polkadot network and published.

![Zenlink Architecture](https://uploader.shimo.im/f/aCpI4JDF0fHIhpjw.png!thumbnail)

## What we will implement in this grant
In [the last grant](./zenlink.md), Zenlink DEX Module has been delivered within a docker image which has Auto Market Maker(AMM) function and is easy imported into parachain.

We will only build a DEX DApp prototypes in this grant. It will has the basic functionality including swap and user guide.

For the UI/UX details, please see [Zenlink DEX DApp v0.1](https://www.notion.so/470464a8482045d2aab03adf62a4e0ed?v=14fec7026047407e98a743a385ea9fc8)

In a word, Zenlink DEX DApp will be integrated with Zenlink DEX Protocol on a substrate blockchain. And users are able to visit the dapp and try the functions. 

The purpose of this grant is to verify the dapp prototype in lean way.

### Ecosystem Fit 
no

## Team :busts_in_silhouette:

### Team members
* Hui Guo(Leo Guo), Team Leader
* Tianling, Principal Blockchain Expert
* Jianbin Zhao, Senior Backend Engineer
* Rui Shi, Senior Backend Engineer
* Hui Yuan, Senior Product Manager

### Team Website	
* https://zenlink.pro/

### Legal Structure 
* ZENLINK FOUNDATION LTD. 
* UEN: 202029221W
* Address: 3 FRASER STREET #05-25 DUO TOWER SINGAPORE(189352)

### Team's experience
The team is made up of many experienced professionals in the blockchain industry.

Guo hui(Leo Guo) is the project leader. He joined imToken very early (June 2017) and worked for 3 years as a data analyst and marketing operation specialist. He is very good at trading quotes and user data analysis which helps imToken get 10m users and Tokenlon, imToken’s DEX, achieve 600m trading volume as well.

Tianling was a former senior expert of Alibaba. After leaving it, he joined a blockchain company as the core developer for 3 years. He is familiar with the underlying blockchain design and substrate development and also was in charge of the architecture design. Now, he is the principal blockchain expert of Zenlink team.

Jianbin Zhao is a senior backend dev with 5 years experience, and he is helping the team build the first DEX web application.

Rui shi is a senior backend dev with 5 years experience. He is not only familar with C++/Rust, but also has good project experience on Subtrate development.

Hui Yuan has rich experience in product design and management. She has built many nice and user-friendly internet application. 

### Team Code Repos
* https://github.com/zenlinkpro/zenlink_dex_module

### Team LinkedIn Profiles
no

## Development Roadmap

### Overview
* **Total Estimated Duration:** 2 weeks
* **Full-time equivalent (FTE):** 4
* **Total Costs:** 1 btc

### Milestone 1 — Implementing Zenlink DEX DApp
* **Estimated Duration:** 2 weeks
* **FTE:**  4
* **Costs:** 1 btc

Generally, we would like to verify the product prototype in a specific environment.

| Deliverable  | Specification  | 
|--------------|---------------|
| UI/UX Design |  [Zenlink DEX DApp v0.1](https://www.notion.so/470464a8482045d2aab03adf62a4e0ed?v=14fec7026047407e98a743a385ea9fc8) is representing the user interface and interaction flow. |
| Zenlink DEX DApp | An online website which users can explore basic dex functionality only for test purpose. |

### Community engagement

The tutorials and Documentation that we provide will be published as articles in [Zenlink Medium](https://medium.com/zenlinkpro) and other social media platforms with due mention about Web3 grant.

We also intend to engage community by running range of user testing to get more feedback from the real end-users to improve our product.

## Future Plans
* Migrate the above basic components to Kusama/Rococo for test
* Build & deploy Zenlink DEX Aggregator on Kusama/Rococo. 
* Full function test on Kusama/Rococo.
* Deploy the whole components to Polkadot including Zenlink DEX Module, DEX Dapp and DEX Aggregator.

## Additional Information :heavy_plus_sign: 
* Medium: https://medium.com/zenlinkpro
* Twitter: https://twitter.com/ZenlinkPro
* Whitepaper: https://github.com/zenlinkpro/whitepaper/blob/master/en/zenlink_whitepaper_en.pdf
