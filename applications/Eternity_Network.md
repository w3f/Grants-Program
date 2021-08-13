# W3F Grant Proposal
* **Project Name:** Eternity Network
* **Team Name:** Eternity labs
* **Payment Address:** BTC 1LYvQuzdyvy3KpkKxLK54SC3Mki3kSAtM7

## Project Overview :page_facing_up:

The Eternity Network is building a "decentralized quantization protocol" based on the Substrate3.0 Framework. The protocol will provide basic simple quantitative services for crypto users of the blockchain. The Eternity labs team wants to use it as infrastructure for the quantified block of blockchain.

### Overview

Quantitative transactions on blockchain usually require high network requirements, which means it is difficult to complete them on the chain. Solidity is tricky to deal with. Usually in the quantitative scenario, the centralized quantitative service providers generally provide quantitative services, but it is difficult to ensure that the centralized service providers do not embezzle user funds, nodes do evil and other problems. For ordinary users of encryption, it is likely that they do not have the professional quantitative knowledge and make the wrong decision in the transaction
So irreparable damage was done

### Birth of the Eternity Network

The Eternity Network exists to solve the quantitative problem of cryptocurrencies. The base layer of the Eternity Network was built by Eternity labs using Substrate 3.0. It will provide a complete, decentralized, quantified service infrastructure that supports mainstream chains. Node operators of blockchain, DApp developers, quants, data modelers, and DApp users all have access to the decentralized quant Protocol infrastructure on the Eternity Network. We want to greatly simplify the threshold for quantifying user engagement. The Eternity Network will serve as polkadot's Parachain.

### Project Details

The Eternity Network is composed of Eternity Node,Eternity Model Contract,Decentralized API and Eternity SDK.
* The Eternity node is a node network composed of Substrate 3.0. The nodes contain the necessary Quant Pallets and Model Pallets to verify whether the models under the chain are reliable and secure. The model quantization data can be uploaded to the IPFS network.
* The Eternity Model Contract is a smart Contract on the front end of a DApp that is responsible for quantifying the flow of money in and out. Users only need a Dapp wallet to easily enjoy quantified services. Node operators are also rewarded for providing quantified services. Users can only get ecosystem tokens by quantifying them.
* The Decentralized API is a separate sector of the quantization market. In V1.0, developers are able to explore the crypto market with the API. In V2.0, users are able to be Decentralized based on Eternity Network publishes its own quantification program, and users can choose the right developers to provide quantification services according to their needs.
* The Eternity SDK makes the use of the Eternity Network much simpler. Dapp developers can integrate this SDK into their applications, such as the development of quantitative models.

For more details, see our hackathon [documentation](https://github.com/ParityAsia/hackathon-2021-summer/tree/main/teams/04-EternityLabs/docs).

### Substrate/Polkadot Integration
The Eternity Network can run as a parallchain to the Polkadot. It can also operate as a Polkadot independent chain. The whole network is built on the substrate 3.0 Framework, and OCW(Off-chain Work) will serve as the adaptation quantization model API for users. All contracts use Ink!. Eternity Model Contract will be applied to polkadot.js.

## Deliverable
### Substrate quant—pallet Details:
`quant-Pallet` provides basic pallet quantification functions. The system includes adding nodes, pledging tokens, extracting tokens, and storing IPFS Hash.
```rust
// add a Node
fn Node(origin, node: Vec<u8>) -> Result;
// IPFS hash storage
fn IPFSHash(origin, hash: Vec<u8>) -> Result;
// stake token 
fn stake(origin, T::AccountId: u64, token: Currency<T>) -> Result;
// extract token
fn extract(origin, T::AccountId: u64) -> Result;
// quant mission
fn mission(origin,node: Vec<u8>) -> Result;
```

### Contract:
`ink!`  Smart contracts will offer two functions.
`TokenContract` The contract will provide the basic functionality of the Eternity Network token.
`QuantContract` The contract will generate a $ENN based on the user's quantified assets
**![](https://neon-oriole-121.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F128f43be-c30f-4c99-92bf-8c51c9751e0d%2F%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20210813180616.png?table=block&id=6618391a-4b5c-4f12-9c6e-303c5e4105f5&spaceId=55561296-d7cc-47a9-838b-8f1c259446ef&width=1860&userId=&cache=v2)**

### UI Details:
 The front-end UI will be utilizing React + Polkadot.js. This will be the entry point for the user to use the entire feature. Our mock is shown below. You can also browse [mock](http://www.eternitylab.cn/dapp/index.html).
**![](https://neon-oriole-121.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F2757c2f9-af95-41ca-a831-4f38f8f75e7f%2F%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20210813180746.png?table=block&id=c4c34ea9-2cd6-44ed-af5a-41bcfa1275a8&spaceId=55561296-d7cc-47a9-838b-8f1c259446ef&width=4610&userId=&cache=v2)**


### Quant Code Details:
The off-chain work algorithm will complete our quantitative tasks on the exchange. We will provide at least 10  models. Respectively as follows:
1. Cryptocurrency futures and spot arbitrage.
2. Grid transactions.
3. DOT to be cast surely.
4. Band tracking.
5. Futures spot hedging.
6. Implicit source model.
7. Stochastic optimal control.
8. Fuzzy trend model.
9. Hidden Markov high-frequency arbitrage model.
10. Bayesian price prediction model.

It is worth mentioning that, although it is difficult to quantify on the chain, we are still considering the possibility of integrating quantization programs at Substrate 3.0.



### Log
Log information will be uploaded to IPFS. Function execution information, parameters and trading information of the exchange in the off-chain work will be recorded to ensure its stability. The following images show how the nodes in the chain interact with the IPFS upload.




### Ecosystem Fit

The Eternity Network offers a more complete set of quantification programs than the Pionex. Thanks to Substrate 3.0 and OCW, it will be provided in a decentralized manner. In the future, Eternity Network will serve as a decentralized infrastructure for quantifying services.

## Team :busts_in_silhouette:

### Team members

* Liangjun -- CEO/3 years of mathematical modeling experience, 1 year of blockchain development experience. Blockchain top-level architect
* Huifeng -- 2 years of blockchain development experience, Polkadot China Ambassador, proficient in blockchain underlying development
* Tom -- 10 years of development experience, proficient in Rust, Privacy computing. Rich experience in blockchain development, proficient in cryptography, privacy computing and smart contracts
* Yifan -- proficient in quantitative algorithms and machine learning, now recommended for a master's degree in Tsinghua University

### Contact

* **Contact Name:** Liangjun
* **Contact Email:** deng7209@qq.com


### Legal Structure

* **Registered Address:**  No.1, 1st Floor, Building 18, No. 169, Haichang Road, Huayang Street, Tianfu New District, Chengdu, China (Sichuan) Pilot Free Trade Zone
* **Registered Legal Entity:** Chengdu Kelian Eternal Network Technology Co., LTD
* **UEN:** MA69X6QN-6

### Team's experience

Eternity labs is an open source community composed of a group of young developers, mostly students from universities in China. Some of them have rich experience in blockchain development. Eternity labs is a team that participated in the second polkadot Hackathon. The team members have enough ability and imagination to complete the Offchian network in Substrate and how to build a decentralized and quantified Parachain.

### Team Code Repos

* https://github.com/Eternity-labs

### Team website
* http://www.eternitylab.cn/

## Development Roadmap :nut_and_bolt:
### Overview

* **Total Estimated Duration:** 3 month
* **Full-Time Equivalent (FTE):**  4
* **Total Costs:** 0.45 BTC.

### Milestone 1  — Implement Eternity Network low pallet

* **Estimated duration:** 3 month
* **FTE:**  4
* **Costs:** 0.45 BTC

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0  |
| 0b. | Documentation | The documentation will be provided to show the whole achitecture of the  Eternity Network. |
| 0c. | Testing Guide | The testing guide will be provided to test each component. |
| 0d. | Docker | We will provide a Dockerfile to demonstrate the full functionality of our chain. |
| 0e. | Article | We will write an article published on media channels.)
| 1. | quant-pallet | quant-pallet will be developed using Substrate 3.0. Pledge the tokens to pallets to ensure node security|  
| 2. | front end/contract | 1）Smart contracts will be done with ink! 2）Pledge the token to quantize the node. 3）Contract token compensation scheme model. 4）Adaptation of Huobiwallet, Tokenpocket and Imtoken Wallet |  
| 3. | Quantitative model | 1）Eternity will work with binance, Huobi, and Coinbase apis. 2）Ten stable quantitative models |  



## Future Plans

Development plan

* The Eternity Network will run as a parachain of the Kusama 
* Support Kusama Node
* Provides 10 stable quantitative models
* Build quantized Pallet

Community Plan
* Hire 1 full-stack developers
* Hire 2 quantitative developers
* Hire 1 more substrate developer
* Publish articles on media channels to expose the Eternity Network
* Bounty Program

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?**  Hackathon 

Currently we just start the first design of the Eternity Network。We look forward to anyone interested in the Eternity Network joining us
* We haven't received any funding yet
