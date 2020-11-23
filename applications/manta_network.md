# Open Grant Proposal

> This document is referenced in the terms and conditions and therefore needs to contain all the required information. Don't remove any of the mandatory parts presented in bold letters or as headlines! See the [Open Grants Program Process](https://github.com/w3f/Open-Grants-Program/blob/master/README_2.md) on how to submit a proposal.

* **Project:** Manta Network
* **Proposer:** [Manta-Network](https://github.com/Manta-Network/Manta-Whitepaper/blob/main/manta-whitepaper.pdf)
* **Payment Address:** bc1qcnghrzsfwnnv5fuh8095a6g3cf820c9y7t432q


## Project Overview :page_facing_up:

Manta Network is the first privacy-preserving DeFi stack powered by zkSNARK. It includes the Decentralized Anonymous Payment (DAP)  and Decentralzied Anonymous eXchange (DAX). Decentralized Anonymous Payment (DAP) is a decentralized anonymous payment scheme for Polkadot and Parachain assets (including wrapped assets and stablecoins). Decentralzied Anonymous eXchange (DAX) is a decentralized anonymous exchange scheme based on AMM and zkSNARK.


### Overview

[Manta Network](www.manta.network) team aims to develop a private preserving decentralized exchange on Polkadot eco-system using zkSNARK. Below is an overview of Manta platform:

![image of manta-platform](https://github.com/Manta-Network/Manta-Whitepaper/raw/main/manta-platform.png)

The cryptographic construction paper can be found [here](https://github.com/Manta-Network/Manta-Whitepaper/blob/main/manta-whitepaper.pdf). Below is the Manta architecture:

    ----------------------------------------------------
    | Decentralzied Anonymous eXchange (DAX)           |  <---- Future plan
    ----------------------------------------------------
    | Decentralized Anonymous Payment (DAP)            |  <---- This grant
    ----------------------------------------------------
    | Polkadot and Parachain Assets (e.g stable coins) |
    ----------------------------------------------------

The details of Manta DAP and DAX schemes can be found section 3, and section 4 of 
[Manta White Paper](https://github.com/Manta-Network/Manta-Whitepaper/blob/main/manta-whitepaper.pdf). It will based on the following cryptographic primitives:
* A statiscally-hidding non-interative commitment scheme, we are planning to use Pedersen hash in the actual construction.
* zkSNARK, we are planning to use [arkworks snark construction](https://github.com/arkworks-rs/snark) based on Groth16.
* Public key encryption, we are planning to use the ZK friendly ElGamal scheme.

### Project Details

#### Manta DAP

Manta DAP has support two kinds transactions:
* `tx_mint`: mint private coins from public coins (base coins).
* `tx_transfer`: transfer private coins to private/public coins.

(Please see section 3 of [the white paper](https://github.com/Manta-Network/Manta-Whitepaper/blob/main/manta-whitepaper.pdf) for more details.)

##### Mint private coins from base coins

To mint a new private coin, a user `u` needs to initiate a coin minting transaction
`tx_mint` with the deposit of base coin, more specically:
1. `u` samples a random number, which is a secret value that determines the private coins serial number (Note: `tx_mint` didn't include this number).
2. `u` commits her public key `a_pk`, the value of the coin `v`, and the random secret `s` that she sampled in the last step in a two stage commitments.
3. `u` thus mint a private coin and only put the value, the first stage commitment, the random secret for the second stage commitment, and the final commitment.
4. The ledger verifies that the `u` indeed deposits base coin of value `v` and add the final commitment to the merkle tree that represent ledger state.

##### Transfer private coins

Private coins can be spent and transferred by `tx_transfer`, which takes a set of input private coins to be consumed, and transfers their total value to a set of output coins: which could be either private or public.

To transfer a private coin, a user need to provide a zero knowledge proof of she knows 
the old coins, new coins, and the secret key of old coin such that:
1. both the new coins and old coins are well formed
2. the address secret key matches the public key
3. the old coin's commitment appears as a leaf of the merkle tree representing ledger state
4. The set of old coins and the set of new coins have the same total value (minus transaction fee).

The new coin will be posted on chain using public key encryption.

#### Manta DAX

Manta Decentralized Anonymous eXchange scheme is based on zkSNARK and AMM. The overall design intuition is that the ledger maintains `x*y = k` (or using some more sophiscated curve) invariant for an exchange pair. The validation logic requires that trader provide an zero-knowledge proof of the fulfillment of this invariant after trading. Below is a simplified architecture of Manta DAX:

<img src="https://github.com/Manta-Network/Manta-Whitepaper/raw/main/manta-arch.png" width="500">

(Please see section 4 of [the white paper](https://github.com/Manta-Network/Manta-Whitepaper/blob/main/manta-whitepaper.pdf) for more details.)

### Implementation 

Manta DAP will be a substrate module. The ledger state will be a list of Merkle roots, 
i.e. `(L_A, L_B, ..., L_N)`, where each merkle root represents the commitment list of a base coin. Manta DAP also support registering new coins that is compatiable with Manta DAP interface.  

We will implement Manta as two parts:
* A substrate node that implement Manta DAP/DAX protocol.
* A client that can initiate transactions and generating zero-knowledge proofs.

We will only build Decentralized Anonymous Payment (DAP) in this grant since the whole project (DAP+ DAX) is too large to be implemented in only one grant. 

### Ecosystem Fit

The current ecentralized exchanges scheme lack privacy, anti surveillance interoperability, and anonymous cryptocurrencies’ lack of price stability. As the first decentralized anonymous payment that could support existing assets, Manta DAP will be a great addition to Polkadot eco-system since Polkadot and Parachain assets such as aUSDT and wrapped BTC can be transferred and spent privately. We already talked to Polkadot eco-system members such as Acala and Equilibrium. They showed strong interests of integrating with Manta. Also, Manta DAP will be the an important building block for Manta DAX (Decentralized Anonymous eXchange) scheme that enables privacy preserving AMM style decentralized exchange using zkSNARK.

## Team :busts_in_silhouette:

### Team members

* **Shumo Chu, Co-Founder**.
* **Victor Ji, Co-Founder**.
* **Kenny Li, Product Lead**.
* **Z. Zhang, Researcher**.
* **Qiudong Xia, Cryptographic System Engineer**.

Detailed experience see **Team's experience section**.


### Team Website
* Website: https://www.manta.network/
* Whitepaper: https://github.com/Manta-Network/Manta-Whitepaper/blob/main/manta-whitepaper.pdf

### Legal Structure
Manta Network Ltd., a British Virgin Islands corporation

### Team's experience

* Shumo Chu: Shumo is an assistant professor at UCSB. He obtained a Ph.D. in Computer Science and Engineering from University of Washington. Before UCSB, he served as a research scientist in a crypto startup Algorand. He helped algorand developed [PyTeal](https://github.com/algorand/pyteal), a smart contract DSL in Python. He published more than 10 peer-reviewed papers in top conferences in database systems and programming languages such as SIGMOD, VLDB, and PLDI and won the SIGMOD Best Demo Award.

* Victor Ji: Victor is a Harvard University Economics Master. Binance Evangelist. Advisor to Unifi Protocol. He previously served as the Chair of Harvard Kennedy School Blockchain and Cryptocurrency PIC. He is a columnist of Chainnews, 8Btc, Mars finance. Before Harvard, he was the executive partner of BitBlock Capital and worked at Ontology.

* Kenny Li: Kenny is an entrepreneur that has started, advised, and invested in startups for over seven years. His initial business exposure in the cryptocurrency space was an advisory role for a Bitcoin options trading platform in 2014. He is a frequent writer on blockchain topics and operates a fund. He is the teaching assistant for Blockchain Lab and MBA graduate at MIT Sloan.

* Z. Zhang: Dr. Zhang obtained his Ph.D. in computer science at University of Wollongong, Australia. He was the director of cryptographic research at OnBoard Security, and a cryptographic engineer at Algorand. Dr. Zhang has published over 25 papers in cryptography; contributed to multiple proposals to NIST post-quantum cryptography competition; and co-drafted the BLS IETF Internet-draft.

* Qiudong Xia, Crypto System Engineer: Master student at University of Science and Technology of China. Qiudong has been working actively on access control and security of networking systems and published papers in top networking conferences and journals such as IEEE INFOCOM, ACM Trans. Networking, and ICC.


### Team Code Repos
* https://github.com/Manta-Network/Manta-Core

### Team LinkedIn Profiles
* https://www.linkedin.com/in/shumo-chu-a1722416/
* https://www.linkedin.com/in/canghai-victor-ji-cpa-37688a5b/
* https://www.linkedin.com/in/kennymuli
* https://www.linkedin.com/in/qiudong-xia-2935761aa

## Development Roadmap :nut_and_bolt:


### Overview
* **Total Estimated Duration:** 12 weeks
* **Full-time equivalent (FTE):**  3
* **Total Costs:** 1.8 BTC

### Milestone 1 — Manta DAP Protocol Prototype
* **Estimated Duration:** 8 weeks
* **FTE:**  2
* **Costs:** 1.2 BTC

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 |
| 1. | Manta Substrate Node Protoype | An open-sourced Manta DAP propotype substrate pallet. It will contains several pallets, such as zkSNARK verifier runtime, ledger state, and validation logic, etc. Support basic functionalities such as mint private coins, transferring private coins. This first version of Manta DAP will only support DOT/KUSAMA.|
| 2. | Benchmark | benchmark on Manta DAP transaction latency and throughput. |
| 3. | Docker | We will provide a dockerfile to demonstrate the end-to-end use case of Manta DAP.  |


### Milestone 2 — Manta DAP Client and Integration

* **Estimated Duration:** 4 weeks
* **FTE:**  3
* **Costs:** 0.6 BTC

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 |
| 1. | Manta Substrate Node Prototype | Compared with the prototype in Milestone I, we will add support for minting parachain assets to private coins in this prototype.|
| 2. | Manta Client Prototype | The client that could generate `tx_mint` and `tx_transfer` transactions with zero-knowledge proofs. | 
| 3. | Benchmark | We will benchmark the laterncy and throughput of using parachain assets as basecoins, as well as the overhead of prover in the client side.   |
| 4. | Docker | A docker file to that demonstrate both Manta substrate node and Manta client functionalities. |
| 5. | Community & Partner Test | We will deploy the prototype on Kusama/Rococo that allows our community and partners to test |


### Community engagement

As part of the Program, we plan to publish several medium articles/tutorials, including:
* Why DeFi needs Manta, why manta should build on Polkadot? (done, please finds [here](https://medium.com/@mantanetwork/whats-next-for-defi-why-manta-64c3b20516b1))
* Why privacy matters, why the current blockchain transactions are NOT private.
* Manta's innovative design and architecture
* A guide for parachain assets integrating with Manta
* How to use Manta client to execute private transactions

## Future Plans

### Community Plan

Our co-founder Victor is the chair of Harvard Kennedy School Blockchain and Cryptocurrency PIC, which is one of the largest blockchain community in eastern America. He can reach the local tech communities since he organized many Hackathons for the ETH foundation and Dorahacks in Boston. 

Meanwhile, as a famous investor and columnist at top-tier Chinese blockchain media, Victor can engage with China investors and communities based on his connection. So we can build our communities in both US and China for Polkadot and Manta based on our previous experiences and resources. 

We already created the Twitter, WeChat, telegram and medium channels for the Manta Network. In next step, we will work with our investors and partners to widespread it. Moreover, we will select investors to choose those with strong media and community resources. 

Besides, we are actively engaging with Polkadot ecosystem projects like Acala, Equilibrium, Moonbeam, Stafi, Sora and Reef to find opportunities to work together in research, development and community building.

### Development Plan
Manta DAP is the foundational part of [Manta](https://manta.network) project. The future plan of Manta includes:
* Manta DAX scheme that support private exchange of private coins.
* A ceremony tool to do decentralized trusted setup using MPC (secure multi-party computation).
* A community effort to create a open standard for DApp using zkSNARK on Polkadot, so that ZK based applications can be composed together more easily.
* Expanding more use cases to business, and supporting more assets. 
* We are also looking to build a decentralized anonymous saving & lending platform, synthetic private investments, and other DeFi adoption.

## Additional Information :heavy_plus_sign:

We finished the cryptographic scheme design of Manta, see [Manta White Paper](https://github.com/Manta-Network/Manta-Whitepaper/blob/main/manta-whitepaper.pdf). We are still quickly iterating and refining the engineering details of Manta. 

Email: contact@manta.network

Website: https://manta.network/

Whitepaper: https://github.com/Manta-Network/Manta-Whitepaper

Github: https://github.com/Manta-Network

Twitter: https://twitter.com/mantanetwork?s=21

Medium: https://medium.com/@mantanetwork

Telegram: https://t.me/mantanetwork

WeChat Public Account: MantaNetwork
