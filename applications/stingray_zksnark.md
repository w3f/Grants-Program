# Open Grant Proposal

> This document is referenced in the terms and conditions and therefore needs to contain all the required information. Don't remove any of the mandatory parts presented in bold letters or as headlines! See the [Open Grants Program Process](https://github.com/w3f/Open-Grants-Program/blob/master/README_2.md) on how to submit a proposal.

* **Project:** Stingray zkSNARK
* **Proposer:** [Manta-Network](https://github.com/Manta-Network/Manta-Whitepaper/blob/main/manta-whitepaper.pdf)
* **Payment Address:** bc1qcnghrzsfwnnv5fuh8095a6g3cf820c9y7t432q


## Project Overview :page_facing_up: 
Stringray is a zero-knowledge proof framework for Polkadot. 

### Overview

zkSNARK (zero-knowledge Succinct Non-interactive Argument of Knowledge) has been adopted increasingly to protect privacy and speed up transactions in decentralized ledger systems. 

Stingray is zkSNARK framework developed by [Manta Network](www.manta.network) team to make ease of Polkadot developers to integate zero-knowldge proof to their projects.

Stingray will based on the popular [Groth16](https://eprint.iacr.org/2016/260.pdf) scheme, which is the most efficient zkSNARK constrcution to date. Stringray will allow Polkadot developers easily generate prover and the verifier (as a substrate) with from our standard gadgets that covers many popular applications.

Our own team will be the initial user of Stringray to create a private assets and decentralized exchange framework on Polkadot.

### Project Details 

Stringray will provide a Rust library that allows Polkadot developer could easily prototype and deploy zkSNARK based parachain substrates. Stringray framework include:

* a series of gadget including hash, signature, and authenticated dictionaries for common building blocks.
* a programming interface in Rust that allows developers to combine these gadgets to build the zkSNARK statement.
* library for generating a offline prover and verifier substrates from the ZK statement expressed in our programming interface.
* a working demo and documentation to illustrate how to use Stingray

Currently, we plan to implement/adapt the following gadget to Stignray:
* BLS signature
* Pedersen Hash
* Merkle Patricia trie

Stringray will leverage existing Web3 Foundation [BLS Curve](https://github.com/w3f/bls) and existing zkSNARK library such as 
[LibZexe](https://github.com/scipr-lab/zexe) as building blocks, focus on building programming abstractions and libraries that lower the entry barrier of deploying zkSNARK to Polkadot.


### Ecosystem Fit 
One similar project to ours is [Stark Network](https://github.com/w3f/Open-Grants-Program/blob/master/applications/starks_network.md). The major difference is that we use the more efficient Groth16 scheme. There are pros and cons in both schemes. Below are the detailed comparisions:

|                                       | SNARKs                     | STARKs                        | 
| ------------------------------------: | -------------------------: | ----------------------------: | 
| Algorithmic complexity: prover        | O(N * log(N))              | O(N * poly-log(N))            | 
| Algorithmic complexity: verifier      | ~O(1)                      | O(poly-log(N))                | 
| Communication complexity (proof size) | ~O(1)                      | O(poly-log(N))                | 
| - size estimate for 1 TX              | Tx: 200 bytes, Key: 50 MB  | 45 kB                         | 
| - size estimate for 10.000 TX         | Tx: 200 bytes, Key: 500 GB | 135 kb                        | 
| Ethereum/EVM verification gas cost    | ~600k (Groth16)            | ~2.5M (estimate, no impl.)    | 
| Trusted setup required?               | YES :unamused:             | NO :smile:                    | 
| Post-quantum secure                   | NO :unamused:              | YES :smile:                   | 
| Crypto assumptions                    | Strong :unamused:          | Collision resistant hashes :smile: |

The major advantage of Groth16 is the very low verification cost and small proof size. Since the verification need to be done on chain, this is a huge advantage both in terms of performance and gas cost. However, Groth16 requires a more expensive trusted setup while STARKs don't require any setup. We think the trusted setup is a one-time cost and for most blockchain applications, it is worth paying this one-time cost. We have a future plan to add a ceremony library like the one used in ZCash to make the trusted setup easier.


## Team :busts_in_silhouette:

### Team members

* **Shumo Chu, Co-Founder**. 
* **Victor Ji, Co-Founder**.
* **Zhenfei Zhang, Researcher**. 
* **Qiudong  Xia, Cryptographic System Engineer**.

Detailed experience see **Team's experience section**.



### Team Website
* Website: https://www.manta.network/
* Whitepaper: https://github.com/Manta-Network/Manta-Whitepaper/blob/main/manta-whitepaper.pdf

### Legal Structure 
BVI company.

### Team's experience

* Shumo Chu: Shumo is an assistant professor at UCSB. He obtained a Ph.D. in Computer Science and Engineering from University of Washington. Before UCSB, he served as a research scientist in a crypto startup Algorand. He helped algorand developed [PyTeal](https://github.com/algorand/pyteal), a smart contract DSL in Python. He published more than 10 peer-reviewed papers in top conferences in database systems and programming languages such as SIGMOD, VLDB, and PLDI and won the SIGMOD Best Demo Award. 

* Victor Ji: Victor is a Harvard University Economics Master. Binance Evangelist. Advisor to Unifi Protocol. He previously served as the Chair of Harvard Kennedy School Blockchain and Cryptocurrency PIC. He is a columnist of Chainnews, 8Btc, Mars finance. Before Harvard, he was the executive partner of BitBlock Capital and worked at Ontology.

* Zhenfei Zhang: Zhenfei obtained his Ph.D. in computer science at University of Wollongong, Australia. He was the director of cryptographic research at OnBoard Security, and a cryptographic engineer at Algorand. Zhenfei has published over 25 papers in cryptography; contributed to multiple proposals to NIST post-quantum cryptography competition; and co-drafted the BLS IETF Internet-draft.

* Qiudong Xia, Crypto System Engineer: Master student at University of Science and Technology of China. Qiudong has been working actively on access control and security of networking systems and published papers in top networking conferences and journals such as IEEE INFOCOM, ACM Trans. Networking, and ICC.


### Team Code Repos
* https://github.com/Manta-Network/Stingray

### Team LinkedIn Profiles
* https://www.linkedin.com/in/shumo-chu-a1722416/
* https://www.linkedin.com/in/canghai-victor-ji-cpa-37688a5b/
* https://www.linkedin.com/in/zhenfeizhang/
* https://www.linkedin.com/in/qiudong-xia-2935761aa

## Development Roadmap :nut_and_bolt: 


### Overview
* **Total Estimated Duration:** 2 month
* **Full-time equivalent (FTE):**  2 
* **Total Costs:** 1.8 BTC

### Milestone 1 — Stingray Framework Prototype
* **Estimated Duration:** 1 month
* **FTE:**  2
* **Costs:** 1.2 BTC

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 |
| 1. | Rust Crate: Stingray | We will create Stingray Rust crate that contains the programming interface, common gadget and prover/verifier generation tool  |
| 2. | Substrate module: example verifier | We will create a Substrate module that generated by our framework to demonstrate the effectiveness and efficiency of Stringray |
| 3. | Docker | We will provide a dockerfile to demonstrate the end to end pipeline of Stingray. |

### Milestone 2 — Wrapup, Documentation and Demonstration

* **Estimated Duration:** 1 month
* **FTE:**  1
* **Costs:** 0.6 BTC

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide a detailed documentation of how to use stingray as a developer, including a documentation on the programming interface, how to generate prover/verifier, how to perform trusted setup, how to package verifier to a substrate module and deploy. |
| 0c. | Testing | We will add unit tests for stingray that achieves at least 60% coverage and integrate it into the continuous integration process. | 
| 1. | Benchmark | We will provide a performance study of Stingray and a guide for developer how to achieve best performance using Stringray. We will also add the benchmark as part of the regression test suite. |
| 2. | Docker | We will provide a dockerfile to demonstrate end to end pipeline of Stingray with 3 different use case examples. |

### Community engagement

As part of the Program, we plan to publish serveral medium articles/tutorials:
* general introductions to zkSNARKs
* design/architecture of Stingray, the zk
* tutorial of using Stringray to develop privacy preserving app in Polkadot

## Future Plans

Stingray is part of [Manta](https://manta.network) project. We plan to keep adding new features to Stingray, including:
* a ceremony tool to do decentralized trusted setup using MPC (secure multi-party computation)
* gadgets covering more applications
* lead a community effort to create a open standard for DApp using zkSNARK on Polkadot

## Additional Information :heavy_plus_sign: 

Fun fact: all Manta projects are named after sea creatures.
