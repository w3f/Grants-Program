# Open Grant Proposal

* **Project:** `Ares`
* **Proposer:** [jiyilanzhou](https://github.com/jiyilanzhou)
* **Payment Address:**  3EDZ47i4ro1cgGqjXsyduuYyLrUesCgekw

## Project Overview :page_facing_up:

Ares is a predictive machine project based on Substrate, with the trustless and verifiable under chain real data use a decentralized approach for smart contracts, parachain or other projects in the ecosystem of the Polkadot.

It is a decentralized oracle network that consists of oracle pallet for parachain and validator, aggregator, reputation council pallet for Ares chain.

### Overview

**Ares** consists of parachain plug-in, validator, aggregator, reputation council, proof of fraud. If parachain use our services, it needs to integrate our oracle pallet, The result of the request passed to the caller through a callback. We scan the parachain events caller about the pallet in our chain, use rpc or websocket request via off-chain worker, Aggregators randomly selected through VRF, which aggregates data from multiple sources. and submitted data to the parachain via extrinsic. Aggregators packing parachain extrinsic and receipts  in ares chain via off-chain worker. 

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

## Development Roadmap :nut_and_bolt:

### Overview
* **Total Estimated Duration:** 8 weeks
* **Full-time equivalent (FTE):**  3
* **Total Costs:** 2.5 btc

### Milestone 1  — Implement ares low pallet
* **Estimated Duration:** 3 weeks
* **FTE:**  2
* **Costs:** 0.5 btc

In this milestone, We will implement ares oracle proof-of-concept, A oracle pallet for parallel chain calls.

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 1. | oracle pallet | requested data, generated events, and callbacks to data |
| 2. | scanner | scanner parachain oracle request via block metadata, parse the specific request data |
| 3. | provider | data warehouse returns the correct request data use http request | 
| 4. | Testing | This milestone will have unit-test for pallet impemented, simulated all functions. |
| 5. | example for demonstration | Provide  parachain oracle pallet integrate example|
| 6. | Documentation | We will provide parachain integrate oracle pallet documentation and  basic code example that show how developers use the pallet  |

### Milestone 2  — Implement ares chain
* **Estimated Duration:** 4 weeks
* **FTE:**  2
* **Costs:** 1 btc

In this milestone, We will use scanner scan parachain block metadata, obtain external data, two pallets are provided, contain validator, aggregator, Implement pallets in a centralized manner.

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 1. | Testing | This milestone will have unit-test for all the following pallet impemented. We will mock most of the pallet to simulate host functions. Integration test will be delivered in next milestone. |
| 2. | Documentation | We will provide all module documentation  |
| 3. | scanner | scanner parachain aggregator extrinsic, record extrinsic and receipt results |
| 4. | provider | data warehouse returns the mean of multiple time points, contain all the data of the outside world. it will be used by aggregator,council,validator to validate the data | 
| 5. | aggregator | Commit the data to a parachain and put extrinsic receipt results to this chain |
| 6. | validator | validator validate aggregator block  |
| 7. | example for demonstration | Provide ares substrate nodes and golang implementation scanner and provider|

### Milestone 2  — Implement ares slash
* **Estimated Duration:** 4 weeks
* **FTE:**  2
* **Costs:** 1 btc

In this milestone, We will  

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 1. | Testing | This milestone will have unit-test for all the following pallet impemented. We will mock most of the pallet to simulate host functions. Integration test will be delivered in next milestone. |
| 2. | Documentation | We will provide description of fraud documentation and council how to verify |
| 3. | provider | it will be used by aggregator,council,validator to validate the data | 
| 4. | validator | validator validate aggregator block and submit fraud proof  |
| 5. | council | judge which has the correct data use libp2p send vote network message, may use imOnline code|
| 6. | Proof of fraud | record block extrinsic contrain incorrect oracle data, and give correct data |
| 7. | example for demonstration | Provide council deal proof of fraud example|

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
