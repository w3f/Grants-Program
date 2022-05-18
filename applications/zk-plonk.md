# W3F Open Grant Proposal

* **Project Name:** zk plonk
* **Team Name:** Plasm Network (Shinsaku Ashizawa, Sota Watanabe)
* **Payment Address:** 0xb82EdE43D03fD23dcdb2d066720b3E77F3bedf6d

## Project Overview :page_facing_up:

We have been working on Zk projects and scalability solutions and now we would like to implement Zk plonk pallet.

The plonk is called `universal zkSNARK` because of two reasons. The verification times are constant and original reference string can be used to build proofs with any type of circuit. These features bring significant benefits to both users and developers. For example, the verification time is the same so users don't have to wait so long even when they prove complicated proof, and original reference string can reuse so developers don't have to do trusted setup for each circuit. The plonk will be a core technology in terms of scaling and privacy so we should support.

### Overview

Through this grant, we are going to make a plonk pallet in order for the developer to implement plonk on substrate easily. We are working on scalability solutions but currently, the substrate doesn't support zkSNARK pallet so we think it's a issue to fix. As aforementioned, zkSNARK will be a core technology in blockchain area and especially plonk is cutting edge technology so we are excited to implement this as pallet.

### Project Details

We'd like to implement the plonk library as a pallet in order for developers to customize circuits and use the plonk protocol.

The following diagram is the libraries we are going to implement.

* Polynomial commitment
* Circuit builder
* Generate proof and verify keys
* Verify proof

### Ecosystem Fit

According to Web3 Foundation, there are at least 2 different teams that work on ZK technologies.
- [Zeropool](https://github.com/zeropoolnetwork)
- [Glacier](https://github.com/gbctech)

Glacier is building a Distaff VM for zk-STARK proof generation and verification that are used to make  private smart contracts and private credential verifications. The difference between us is that we are making a zkSNARK pallet and they are making a VM which supports STARKs. In terms of Zeropool, they are making private transactions contract pallet using bellman groth16 protocal and we are making zkSNARK libray using plonk.

We believe zkSNARK with plonk will be core technology of next blockchain area. That allows Substrate to protect the privacy and scale on the huge number of transactions without decreasing the security level.

## Team :busts_in_silhouette:

### Team members

* Shinsaku Ashizawa
* Alexsandr Krrupenkin
* Sota Watanabe

### Contact

* **Contact Name:** Shinsaku Ashizawa
* **Contact Email:** shinsaku.ashizawa@artree.co.jp
* **Website:** [Artree](https://artree.co.jp/)

### Legal Structure

* Incorporated in Singapore
* Address: 63 Chulia Street Singapore

### Team's experience
We have been making Plasm Network, a scalable multi-virtual machines smart contract platform on Polkadot supporting cutting edge layer2 solutions. Curretly, another team at Stake techologies is working on the Optimistic Virtual Machine, an unification for all layer2 solutions and a subset of Optimistic Rollup. We have already delivered 4 milestones out of 6. In addition to that, we have already delivered several grants such as Plasma, ECDSA, and ink! playground.

- [Plasma](https://github.com/stakedtechnologies/Plasm)
- [ECDSA](https://github.com/polkadot-js/common/tree/master/packages/util-crypto/src/secp256k1)
- [ink! playground](https://github.com/staketechnologies/ink-playground)

We are also participating in Substrate Builders Program and Substrate Delivery Partners and we have done some PoCs with clients.
- [“Plasm Network” is Adopted as a Blockchain Platform for Payment System by Satsudra HD and DataGateway](https://stake.co.jp/news/20201020english/)
- [Bitpoint and Stake Technologies Collaboration Announcement.](https://stake.co.jp/news/bitpoint_en/)
iously, please list the name of the project and legal entity here.

### Team Code Repos

* https://github.com/PlasmNetwork

### Team LinkedIn Profiles

* https://www.linkedin.com/in/sota-watanabe-b962b3110/

## Development Roadmap :nut_and_bolt:

### Summary
We plan to provide a `plonk` pallet that allows Substrate-based blockchain to execute plonk-based zkSNARK.

### Overview

* **Total Estimated Duration:** 3 months
* **Full-Time Equivalent (FTE):**  1 FTE
* **Total Costs:** 30000 DAI

### Milestone 1 Example — Implement Substrate Modules

* **Estimated Duration:** 3 months
* **FTE:**  1
* **Costs:** 30000 DAI

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 / MIT / Unlicense |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a developer builds a circuit and a user prove their computation through the circuit. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests and audit to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Article/Tutorial | We will publish an article/tutorial/workshop that explains
| 1. | make plonk compatible | The dusk-network plonk is compatible with `no-std` so we are going to modify attributes according to [parity-codec](https://github.com/paritytech/parity-scale-codec) and `Rng` to be compatible with　Substrate environment. This step allows this pallet to work on resource-constrained execution environments like Substrate runtime, attributes should be modified in accordance with SCALE codec and some versions of Rng can’t be compiled to wasm so we need to research and make it stable as necessary. |
| 2. | implement zkSNARK plonk pallet | We will create a set of plonk-based zkSNARK libraries that allow a developer to build their own circuit and a user to prove their computation validity. Verifying proofs are done by on-chain. Creating the proofs are done by off-chain. |  

This zkSNARK plonk is based on [dusk-network plonk](https://github.com/dusk-network/plonk) library.
This zkSNARK plonk pallet provides us following function.
- Building circuits
- Creating proofs
- Verifying proofs

## Future Plans

* Zk Rollup implementation
* private transfer protocol

## Additional Information :heavy_plus_sign:
- [web site](https://www.plasmnet.io/)
- [document](https://docs.plasmnet.io/)
- [Twitter](https://twitter.com/Plasm_Network)
- [Medium](https://medium.com/stake-technologies)
- [GitHub](https://github.com/PlasmNetwork)
