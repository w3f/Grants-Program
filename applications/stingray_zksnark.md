# Open Grant Proposal

> This document is referenced in the terms and conditions and therefore needs to contain all the required information. Don't remove any of the mandatory parts presented in bold letters or as headlines! See the [Open Grants Program Process](https://github.com/w3f/Open-Grants-Program/blob/master/README_2.md) on how to submit a proposal.

* **Project:** Stingray Foundational Libraries for zkSNARK
* **Proposer:** [Manta-Network](https://github.com/Manta-Network/Manta-Whitepaper/blob/main/manta-whitepaper.pdf)
* **Payment Address:** bc1qcnghrzsfwnnv5fuh8095a6g3cf820c9y7t432q


## Project Overview :page_facing_up:
Provide foundational libraries for zkSNARK on substrates.

### Overview

zkSNARK (zero-knowledge Succinct Non-interactive Argument of Knowledge) has been adopted increasingly to protect privacy and speed up transactions in decentralized ledger systems.

Stingray is zkSNARK framework developed by [Manta Network](www.manta.network) team to make ease of Polkadot developers to integrate zero-knowledge proof to their projects.

Overall, Stingray will based on the popular [Groth16](https://eprint.iacr.org/2016/260.pdf) scheme, which is the most efficient zkSNARK construction to date. Stringray will allow Polkadot developers easily generate prover and the verifier (as a substrate) with from our standard gadgets that covers many popular applications.

In this particular projects, we will build Stingray foundational libraries for
using zkSNARK in substrates. Stingray foundational libraries would be useful on their own of developing ZKP based system on substrates and will also be important parts of the future Stingray zkSNARK framework.

### Project Details

### Stingray Foundational Libraries Design

In this project, we will build the following rust crates:
1. Stingray::Algebra
2. Stingray::Curves
3. Stingray::Schnorr
4. Stingray::BLS-Signaure
5. Stingray::Pedersen-Hash
6. Stingray::ElGamal

The structure of a zkSNARK systems is as follows:

--------------
|   SNARK    |
--------------
|   R1CS     |
--------------
|   Curve    |
--------------
|   Algebra  |
--------------

Algebra and curves are the two foundational parts to build a zkSNARK systems and could be used in many other cryptographic applications such as attribute based encryption (ABE). Stingray::Algebra, Stingray::Curves will be reusing part of code from [arkworks::algebra](https://github.com/arkworks-rs/algebra) and [arsworks::curves](https://github.com/arkworks-rs/curves). The major work that we are going to do is refactoring the code such as replacing the Rust std usage with our own primitives, so that the Stingray foundational libraries can be used for generating substrates pallets.

More specifically, the functionalities of these libraries covers is:

* Stingray::Algebra:
  * implementation of various finite fields and operations
  * implementation of polynomials and FFTs over finite fields
  * implementation of generic elliptic curves, along with pairings

* Stingray::Curve:
  * implementation of BLS12-381 curve and its Edward embedding
  * implementation of BLS12-377 curve and its Edward embedding

* Stingray::Schnorr
  * implementation of Schnorr signature scheme on Edward embedded curves, provided by Stingray::Curve

* Stingray::BLS-Signature
  * implementation of [BLS signature scheme](https://datatracker.ietf.org/doc/draft-irtf-cfrg-bls-signature/?include_text=1) on BLS12-381 curve provided by Stingray::Curve

* Stingray::Pedersen
  * implementation of Pedersen hash on both curves provided by Stingray::Curve

* Stingray:: ElGamal
  * implementation of ElGamal encryption scheme on both curves provided by Stingray::Curve

Note, the BLS Signature scheme and ElGamal encryption hasn't been implemented in
[arsworks::curves](https://github.com/arkworks-rs/curves), and we would implemented these primitives from scratch. These implementations could find usages in many scenarios, for example, our planned decentralized anonymous payment (DAP) scheme will use the ElGamal encryption as the public key encryption scheme. Also it is noteworthy to mention Zhenfei, our team member, is among the proposer of [BLS signature scheme](https://datatracker.ietf.org/doc/draft-irtf-cfrg-bls-signature/?include_text=1) standard.

#### Benchmarking and Optimizing Stingray Foundational Libraries

Due to our refactoring, as well as the lack of SIMD support (such as AVX instructions),
we want to provide a comprehensive performance study of the Stringray::Algebra and Stringray::Curves compared with [arkworks::algebra](https://github.com/arkworks-rs/algebra) and [arsworks::curves](https://github.com/arkworks-rs/curves). The benchmarks includes a micro-benchmark results on each primitive operations and the results the three applications we implement:BLS signature, Pedersen hash, and ElGamal encryptions.

### Ecosystem Fit
One similar project to Stingray is [Stark Network](https://github.com/w3f/Open-Grants-Program/blob/master/applications/starks_network.md). The major difference is that we use the more efficient Groth16 scheme. There are pros and cons in both schemes. Below are the detailed comparisons:

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

Stingray foundational libraries are concrete building blocks towards substrate compatible zkSNARKs. And these libraries themselves are valuable for substrate developers implementing elliptic curve and pairing based cryptographic primitives. And our BLS12-381 signature scheme and ElGamal encryption have immediate value for substrate projects that needs zero-knowledge friendly high performance signature scheme and public key encryption.  
https://www.manta.network/

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
* **Total Estimated Duration:** 2.5 month
* **Full-time equivalent (FTE):**  2
* **Total Costs:** 1.8 BTC

### Milestone 1 — Stingray Algebra Library
* **Estimated Duration:** 1 month
* **FTE:**  2
* **Costs:** 0.6 BTC

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 |
| 1. | Stingray::Algebra Rust Strate | We will create Stingray Rust crate that contains the finite fields and operations, generic elliptic curves, FFT, and pairings with API documentations. |
| 2. | Micro-benmark | micro-benchmark results of the above primitives and compared them with their counterparts in [arkworks::algebra] |
| 3. | Docker | We will provide a dockerfile to show that we can use Stingray::Algebra to generate substrate pallet. |


### Milestone 2 — Stingray Curve Library and Cryptographic Schemes

* **Estimated Duration:** 1.5 month
* **FTE:**  1
* **Costs:** 1.2 BTC

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 |
| 1. | Stingray::Curve Rust crate | implementation of BLS12-381 and BLS12-377 and their Edward version with API documentations |
| 2. | Stingray::Schnorr | implementation of Schnorr signature scheme on Edward embedded curves, provided by Stingray::Curve | 
| 3. | Stingray::BLS-Signature Rust crate | implementation of [BLS signature scheme](https://datatracker.ietf.org/doc/draft-irtf-cfrg-bls-signature/?include_text=1) on BLS12-381 curve provided by Stingray::Curve with API documentation  |
| 4. | Stingray::Pedersen Rust crate | implementation of Pedersen hash on both curves provided by Stingray::Curve with API documentation |
| 5. | Stingray::ElGamal Rust crate | implementation of ElGamal encryption scheme on both curves provided by Stingray::Curve with API documentation |
| 6. | Docker | A docker file to show that all these crate are substrate compatible |
| 7. | Benchmark | micro-benmark results of the Stingray::curves primitives and compared them with their counterparts in [arkworks::curves], benchmark results of BLS-Sigature, Pedersen, and ElGamal|

### Community engagement

As part of the Program, we plan to publish several medium articles/tutorials:
* general guide on how to build substrates compatible cryptographic primitives
* tutorials of using each libraries

## Future Plans

Stingray is part of [Manta](https://manta.network) project. We plan to finish Stingray stack and keep adding new features to Stingray, including:
* stingray::R1CS and stingray::snark crates
* common gadgets implemented using stingray::snark
* a ceremony tool to do decentralized trusted setup using MPC (secure multi-party computation)
* lead a community effort to create a open standard for DApp using zkSNARK on Polkadot

## Additional Information :heavy_plus_sign:

Fun fact: all Manta projects are named after sea creatures.
