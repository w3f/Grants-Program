# Zenlink

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
We will only build prototypes of basic components in this grant because the whole project is too large to be implemented in only one grant.

In this grant, the functional prototypes, Zenlink DEX Module and Protocol, will be validated on a substrate chain. We prefer to make it to have Auto Market Maker(AMM) function and be easy imported into parachain in multiple ways. If it works, there will be only a small effect to migrate those components to the better test network, such as Kusama and Rococo.

For the tech architecture details, please see [whitepaper/Zenlink DEX Protocol](https://github.com/zenlinkpro/whitepaper/blob/master/en/zenlink_whitepaper_en.pdf)

For the AMM initial design, please see [whitepaper/Trading Paradigms - CFMM](https://github.com/zenlinkpro/whitepaper/blob/master/en/zenlink_whitepaper_en.pdf)

In a word, The Zenlink DEX Module will be integrated with a substrate blockchain. And all the components will be packed into a docker image. Once testers run the docker image, the substrate blockchain will be running. At the same time, the dex functionality will be active. So that testers can not only call the functions via RPC request, but also some script in terminal.

The purpose of this grant is that verification function prototype in lean way.

### Ecosystem Fit 
no

## Team :busts_in_silhouette:

### Team members
* Guo hui(Leo Guo), team leader
* Tianling, principal blockchain expert

### Team Website	
* https://zenlink.pro/

### Legal Structure 
The team has no legal entity now, however, the foundation register is in processing in Singapore.

### Team's experience
The team is made up of many experienced professionals in the blockchain industry.  

Guo hui(Leo Guo) is the project leader. He joined imToken very early (June 2017) and worked for 3 years as a data analyst and marketing operation specialist. He is very good at trading quotes and user data analysis which helps imToken get 10m users and Tokenlon, imToken’s DEX, achieve 600m trading volume as well.

Tianling was a former senior expert of Alibaba. After leaving it, he joined a blockchain company as the core developer for 3 years. He is familiar with the underlying blockchain design and substrate development and also was in charge of the architecture design. Now, he is the principal blockchain expert of Zenlink team.

Besides, two core team members are joining us. One of the potential candidates has rich experience in product design and management. He has built a nice and user-friendly DEX application. And the other one is a senior front-end dev with 5 years experience, and he will help us build the first DEX web application.

### Team Code Repos
* https://github.com/zenlinkpro/zenlink_dex_module

### Team LinkedIn Profiles
no

## Development Roadmap

### Overview
* **Total Estimated Duration:** 4 weeks
* **Full-time equivalent (FTE):**  2 FTE
* **Total Costs:** 0.76 btc

### Milestone 1 — Implementing Zenlink DEX Module
* **Estimated Duration:** 4 weeks
* **FTE:**  2
* **Costs:** 0.76 btc

Generally, we would like to verify the product prototype in a specific environment.

| Deliverable  | Specification  | 
|--------------|---------------|
| Technical specifications and Zenlink DEX Module design |  These spec should be included in the  [whitepaper](https://github.com/zenlinkpro/whitepaper/blob/master/en/zenlink_whitepaper_en.pdf). For details, please see the section 'Zenlink DEX Protocol' and 'Zenlink DEX Module'|
| Zenlink DEX Module Repository | A git repository containing the dex module source code and a README that describes the work done during this milestone and how to use set up and run at the current stage. The module will has Automate Market Maker(AMM) function and be integrated with a substrate chain |
| Tests        | The code will have proper unit-test coverage to ensure functionality and robustness                                                                    | 
| Docker       | Docker image with a Substrate chain using our module, demonstrating its functionality                                                                  | 

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
