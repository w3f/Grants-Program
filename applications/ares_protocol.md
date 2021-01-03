# Open Grant Proposal

* **Project:** `Ares`
* **Proposer:** [jiyilanzhou](https://github.com/jiyilanzhou)
* **Payment Address:**  3EDZ47i4ro1cgGqjXsyduuYyLrUesCgekw

## Project Overview :page_facing_up:

Ares is a predictive machine project based on Substrate, with the trustless and verifiable under chain real data use a decentralized approach for smart contracts, parachain or other projects in the ecosystem of the Polkadot.

It is a decentralized oracle network that consists of oracle pallet for parachain and validator, aggregator, reputation council pallet for Ares chain.

### Overview

**Ares** consists of parachain plug-in, validator, aggregator, reputation council, proof of fraud. If parachain use our services, it needs to integrate our oracle pallet, The result of the request passed to the caller through a callback. We scan the parachain events caller about the pallet in our chain, use rpc or websocket request via off-chain worker, Aggregators randomly selected through VRF, which aggregates data from multiple sources. and submitted data to the parachain via extrinsic. Aggregators packing parachain extrinsic and receipts  in ares chain via off-chain worker. 

![img](https://img-blog.csdnimg.cn/2020103111230144.jpg)

Aggregator needs to pledge certain assets, Every time the aggregator submits a correct data, its reputation value will grow. The reputation value and pledge will be weighted, from which we choose the members of council. council can only approve and reject proof of fraud submitted by validator. 
Default is to approve, the council does not need to work on every block, only needs to deal with disputes when validator fraud proof arise. Validator nodes can verify, if validator found the data is incorrect, submit proof of fraud to council. if council check up, ther it will reward validator and slash aggregator, its reputation will be degraded.

The functions of aggregator committees are similar to Babe, and reputation council are likely Grandpa which finality the correctness of the data. Most nodes can become member of aggregators committees. It only takes few tokens to staking. The validator who submit proof of fraud need pay a small fee, it protects against DOS attacks.  

### Project Details

**Ares** is designed as decentralized oracle network. First of all, `Ares` will provide  basic `ares` pallet runtime which allows substrate built parachain/blockchain to interact with.

* define `ares Trait` which contain Event, Callback.
* define storage operator, request, result and error types
* request external data, contains parameters and methods for how to request them.
* describes how to integrate into parachain.
* Aggregator scans the extrinsic in the parachain, use off-chain worker requests the data, and submits result extrinsic to parachain.
* Aggregator packing parachain extrinsic and receipts on ares chain.
* Validator validate data and submit proof of fraud.
* Council reward and slash according to proof of fraud.
* Aggregator, Validator, Council use off-chain worker getting external data

### Ecosystem Fit

Although the Off-chain worker can do part of the oracle job, However it can't guarantee the authenticity and reliability of the data, Ares can provide randomness and correctness of data sources through multi-party data aggregation and anti-attack and auditing of data sources

## Team :busts_in_silhouette:

### Team members

* Keric: 8+ years development experience, proficient in public chain and cross chain development, proficient in using go and rust, p2p network expert.
* Eric: 20 years of experience in protocol stack formulation and development, research work related to big data and blockchain, and robot quantification experience.
* Daniel: 11 years of work experience in IoT software development and management, familiar with contract and DAPP development.
* Scott: More than 7 years of software development experience, proficient in /Java/Golang/node, etc. engaged in blockchain research and development, familiar with eos/eth.
* Andy Ray: 10 years of Internet entrepreneurship experience, 5 years of blockchain industry experience, proficient in the secondary market, economic model design.
* Fred: Over 13+ years of Embedded Network Technology Experience in multiple technological systems including Hardware networking, software networking, and server-side applications.

### Team's experience

We implemented the POW + DPOS consensus integrated with ethereum, used tendermint to provide finality in blockchain system with golang. Recently, we implemented a rust pos blockchain, it  uses vrf select validators and libp2p network. We have enough experience to solve the centralization problem of Oracle.                                                                                                                                                                                                                                           
### Team Code Repos
* https://github.com/aresprotocols/ares

### Team Website

* https://www.aresprotocol.com/

## Development Roadmap :nut_and_bolt:

### Overview
* **Total Estimated Duration:** 3 weeks
* **Full-time equivalent (FTE):**  1.5
* **Total Costs:** 0.5 btc

### Milestone 1  — Implement ares low pallet
* **Estimated Duration:** 3 weeks
* **FTE:**  1.5
* **Costs:** 0.5 btc

In this milestone, We will implement ares oracle proof-of-concept, A oracle pallet for parallel chain calls.

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 1. | oracle pallet | requested data, generated events, and callbacks to data, which implement aggregate price on chain, multi assets price and offchain work get price througth Data warehouse api, it use subsrate-node-template|
| 2. | scanner | scanner parachain oracle request via block event, parse the specific request data，Scanner is written in js|
| 3. | provider | data warehouse returns the correct request data use http request， Data warehouse written in java and used js provide to on chain callback| 
| 4. | Testing | This milestone will have unit-test for pallet impemented, simulated all functions. |
| 5. | example for demonstration | Provide  parachain oracle pallet integrate example, integrate videos and the front-end into the deliveries|
| 6. | Documentation | We will provide parachain integrate oracle pallet documentation and  basic code example that show how developers use the pallet  |


## Future Plans

If basic functions have been completed, `Ares` will provide decentralized pallet, including:

* Multiple data source weight calculation
* Random aggregators using VRF 
* Proof of fraud verify based on BFT voting
* Reputation council slash
* Aggregator staking and Validator incentive
* Authority management of aggregator submitted data

## Additional Information

We expect any developer who is interested in `Ares protocol` join us and build an efficient framework.
