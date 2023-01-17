# Manta Network

> This document is referenced in the terms and conditions and therefore needs to contain all the required information. Don't remove any of the mandatory parts presented in bold letters or as headlines! See the [Open Grants Program Process](https://github.com/w3f/Open-Grants-Program/blob/master/README_2.md) on how to submit a proposal.

- **Proposer:** [Manta-Network](https://github.com/Manta-Network/Manta-Whitepaper/blob/main/manta-whitepaper.pdf)
- **Payment Address:** bc1qcnghrzsfwnnv5fuh8095a6g3cf820c9y7t432q
- **Status:** [Terminated](https://github.com/w3f/Grants-Program/pull/117#issuecomment-971644753)

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

- A statiscally-hidding non-interative commitment scheme, we are planning to use Pedersen hash in the actual construction.
- zkSNARK, we are planning to use [arkworks snark construction](https://github.com/arkworks-rs/snark) based on Groth16.
- Public key encryption, we are planning to use the ZK friendly ElGamal scheme.

### Project Details

#### Manta DAP

Manta DAP has support two kinds transactions:

- `tx_mint`: mint private coins from public coins (base coins).
- `tx_transfer`: transfer private coins to private/public coins.

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

<img src="https://github.com/Manta-Network/Manta-Whitepaper/raw/main/manta-arch.png" width="500" />

(Please see section 4 of [the white paper](https://github.com/Manta-Network/Manta-Whitepaper/blob/main/manta-whitepaper.pdf) for more details.)

### Implementation

Manta DAP will be a substrate module. The ledger state will be a list of Merkle roots,
i.e. `(L_A, L_B, ..., L_N)`, where each merkle root represents the commitment list of a base coin. Manta DAP also support registering new coins that is compatiable with Manta DAP interface.  

We will implement Manta as two parts:

- A substrate node that implement Manta DAP/DAX protocol.
- A client that can initiate transactions and generating zero-knowledge proofs.

We will only build Decentralized Anonymous Payment (DAP) in this grant since the whole project (DAP+ DAX) is too large to be implemented in only one grant.

### Ecosystem Fit

The current ecentralized exchanges scheme lack privacy, anti surveillance interoperability, and anonymous cryptocurrencies’ lack of price stability. As the first decentralized anonymous payment that could support existing assets, Manta DAP will be a great addition to Polkadot eco-system since Polkadot and Parachain assets such as aUSDT and wrapped BTC can be transferred and spent privately. We already talked to Polkadot eco-system members such as Acala and Equilibrium. They showed strong interests of integrating with Manta. Also, Manta DAP will be the an important building block for Manta DAX (Decentralized Anonymous eXchange) scheme that enables privacy preserving AMM style decentralized exchange using zkSNARK.

## Team :busts_in_silhouette:

### Team members

- **Shumo Chu, Co-Founder**.
- **Victor Ji, Co-Founder**.
- **Kenny Li, Product Lead**.
- **Kevin Gislason, Full-stack Engineer**.
- **Georgi Zlatarev, Infrastructure Engineer**.
- **Jammie Deng, Infrastructure Engineer**.
- **Gabriela Brown, Full-stack Engineer**.
- **Brandon Gomes, Cryptographic Engineer**.
- **Rob Thijssen, Devop Engineer**.

Detailed experience see **Team's experience section**.

### Team Website

- Website: <https://www.manta.network/>

- Whitepaper: <https://github.com/Manta-Network/Manta-Whitepaper/blob/main/manta-whitepaper.pdf>

### Legal Structure

Manta Network Ltd., a British Virgin Islands corporation

### Team's experience

- Shumo Chu: Shumo is an assistant professor at UCSB. He obtained a Ph.D. in Computer Science and Engineering from University of Washington. Before UCSB, he served as a research scientist in a crypto startup Algorand. He helped algorand developed [PyTeal](https://github.com/algorand/pyteal), a smart contract DSL in Python. He published more than 10 peer-reviewed papers in top conferences in database systems and programming languages such as SIGMOD, VLDB, and PLDI and won the SIGMOD Best Demo Award.

- Victor Ji: Victor is a Harvard University Economics Master. Binance Evangelist. Advisor to Unifi Protocol. He previously served as the Chair of Harvard Kennedy School Blockchain and Cryptocurrency PIC. He is a columnist of Chainnews, 8Btc, Mars finance. Before Harvard, he was the executive partner of BitBlock Capital and worked at Ontology.

- Kenny Li: Kenny is an entrepreneur that has started, advised, and invested in startups for over seven years. His initial business exposure in the cryptocurrency space was an advisory role for a Bitcoin options trading platform in 2014. He is a frequent writer on blockchain topics and operates a fund. He is the teaching assistant for Blockchain Lab and MBA graduate at MIT Sloan.

- Kevin Gislason, full stack developer: A UChicago English undergrad, Kevin self-taught programming in order to work on cryptocurrencies. Kevin previously developed supply chain software for Wayfair, quantitative trading tools for a private office, and a custom Bitcoin hardware wallet

- Georgi Zlatarev: Georgi Zlatarev: Georgi is a systems engineer with a varied background. He studied math with economics in University College London but began his professional career in business development for a Cloud company. Once he moved to engineering he worked on web projects, and then in the vfx industry developing a fluid dynamics simulator and a renderer. His pashion for low level programming led him to Rust and the crypto world.

- Jammie Deng: Jamie is a software engineer at Manta Network. He was a former software and test developer at National Instruments. Last two years, He was working on developing pallets/contracts/bridge between EOS and Substrate at a blockchain startup.

- Gabriela Brown: Gabriela is a full stack software engineer who love Rust! She has been at Manta Networks for 4 months and previously worked in healthcare technology. She is currently getting her Master’s in Math.

- Brandon Gomes: Brandon is a software engineer and mathematician. He obtained his undergraduate degree in Mathematics and Physics from Rutgers University. During his undergraduate, he studied homotopy type theory and formal verification of modern mathematics using the Lean Proof Assistant. Before studying mathematics, Brandon worked on the MATHUSLA project through the Rutgers Physics Department where he built particle detector simulation software to explore designs for a new high energy particle detector at the LHC.

- Rob Thijssen: Rob is a seasoned build and deployment expert having worked many years in the financial and energy trading sectors. he joins manta after a six year term at mozilla where he helped to build some of the largest open source multi-cloud integration testing infrastructure in use

### Team Code Repos

- <https://github.com/Manta-Network/Manta>

### Team LinkedIn Profiles

- <https://www.linkedin.com/in/shumo-chu-a1722416/>

- <https://www.linkedin.com/in/canghai-victor-ji-cpa-37688a5b/>
- <https://www.linkedin.com/in/kennymuli>
- <https://www.linkedin.com/in/qiudong-xia-2935761aa>

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 12 weeks

- **Full-time equivalent (FTE):**  3
- **Total Costs:** 1.5 BTC

### Milestone 1 — Manta DAP Protocol Prototype

- **Estimated Duration:** 8 weeks

- **FTE:**  2
- **Costs:** 1 BTC

The major deliverable of this milestone is Manta substrate pallet that support the basic DAP scheme:

1. Mint private coin, a user could mint a DOT/KUSAMA coin to a private coin in Manta
2. Transfer private coin, a Manta user could transfer a private coin to another user Manta user by providing an address and a zero-knowledge proof of the private coin that she owns

The Manta substrate pallets includes the ledger state implementation, the transaction validation logic which involves the validation of zero-knowledge proofs. Note that this milestone will only support converting DOT/KUSAMA to private coins.

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 |
| 1. | Manta Substrate Pallet Protoype | An open-sourced Manta DAP propotype substrate pallet. It will contains several sub-pallets, such as zkSNARK verifier runtime, ledger state and its validation logic, etc. This prototype supports basic functionalities such as mint private coins, transferring private coins. This first version of Manta DAP will only support DOT/KUSAMA.|
| 2. | Benchmark | benchmark on Manta DAP transaction latency and throughput. |
| 3. | Docker | We will provide a dockerfile to demonstrate the end-to-end use case of Manta DAP.  |

### Milestone 2 — Manta DAP Wallet Protocol and XCM Integration

- **Estimated Duration:** 7 weeks (Estimated Delivery Date: Nov. 15)
- **FTE:**  7
- **Costs:** 0.5 BTC

There are two major new deliverable in Milestone 2:

1. Support minting Parachain asset via XCM. This requires the following:
    - An token abstraction layer in Manta code that unifies Relay chain native token, parachain native/non-native token.
    - Mint/reclaim tokens from/to the sister parachain / replay chain.
2. MantaPay wallet protocol and wallet implementation:
   - MantaPay wallet protocol (a draft version [here](https://github.com/Manta-Network/MIPS/pull/2)). The purpose of this protocol is to provide the user account abstraction despite MantaPay's UTXO design.
   - Manta DApp: A web based DApp front-end that can manage, transact Manta supported private tokens. Manta frontend will also communicate with Manta Signer to get the ZKP.
   - Manta Signer: An native client on Mac/Win/Ubuntu for generating ZKP. The reason that we uses a native client is due to the expensive computation will cause a inferior user-experience if using WASM on browser (measured 16X slow-down) to generate ZKP.

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | GPL V3 |
| 1. | Manta Parachain Runtime with MantaPay | Compared with the prototype in Milestone I, we will add support for minting parachain assets to private coins in this prototype.|
| 2. | MantaPay Pallet Implementation | This is the pallet that implements the updated MantaPay Protocol with signficant speed improvement. |
| 3. | Manta DApp | A web based DApp that manages and transacts Manta supported private assets |
| 4. | Manta Signer | Manta's Mac/Win/Ubuntu client that turbo-charges ZKP generation. Signer will communicate with Manta DApp |

Note: 1 and 2 will be delivered together as a docker container.

### Community engagement

As part of the Program, we plan to publish several medium articles/tutorials, including:

- Why DeFi needs Manta, why manta should build on Polkadot? (done, please finds [here](https://medium.com/@mantanetwork/whats-next-for-defi-why-manta-64c3b20516b1))
- Why privacy matters, why the current blockchain transactions are NOT private.
- Manta's innovative design and architecture
- A guide for parachain assets integrating with Manta
- How to use Manta client to execute private transactions

## Future Plans

### Community Plan

Our co-founder Victor is the chair of Harvard Kennedy School Blockchain and Cryptocurrency PIC, which is one of the largest blockchain community in eastern America. He can reach the local tech communities since he organized many Hackathons for the ETH foundation and Dorahacks in Boston.

Meanwhile, as a famous investor and columnist at top-tier Chinese blockchain media, Victor can engage with China investors and communities based on his connection. So we can build our communities in both US and China for Polkadot and Manta based on our previous experiences and resources.

We already created the Twitter, WeChat, telegram and medium channels for the Manta Network. In next step, we will work with our investors and partners to widespread it. Moreover, we will select investors to choose those with strong media and community resources.

Besides, we are actively engaging with Polkadot ecosystem projects like Acala, Equilibrium, Moonbeam, Stafi, Sora and Reef to find opportunities to work together in research, development and community building.

### Development Plan

Manta DAP is the foundational part of [Manta](https://manta.network) project. The future plan of Manta includes:

- Manta DAX scheme that support private exchange of private coins.
- A ceremony tool to do decentralized trusted setup using MPC (secure multi-party computation).
- A community effort to create a open standard for DApp using zkSNARK on Polkadot, so that ZK based applications can be composed together more easily.
- Expanding more use cases to business, and supporting more assets.
- We are also looking to build a decentralized anonymous saving & lending platform, synthetic private investments, and other DeFi adoption.

## Additional Information :heavy_plus_sign:

We finished the cryptographic scheme design of Manta, see [Manta White Paper](https://github.com/Manta-Network/Manta-Whitepaper/blob/main/manta-whitepaper.pdf). We are still quickly iterating and refining the engineering details of Manta.

Email: contact@manta.network

Website: <https://manta.network/>

Whitepaper: <https://github.com/Manta-Network/Manta-Whitepaper>

Github: <https://github.com/Manta-Network>

Twitter: <https://twitter.com/mantanetwork?s=21>

Medium: <https://medium.com/@mantanetwork>

Telegram: <https://t.me/mantanetwork>

WeChat Public Account: MantaNetwork
