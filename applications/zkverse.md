# Name of your Project

- **Team Name:** Zkverse
- **Payment Address:** 0x8554fff69177C2cf470fA276b0C65dB58b5EfEE5(DAI)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

### Overview

The privacy protection technology in the blockchain is constantly developing, with the emergence of multi-party security computing, differential privacy, homomorphic encryption, zero-knowledge proof and other technologies. At present, ZKP technology is constantly developing and innovating in the privacy and expansion track in Ethereum. So the main goal of this project is to introduce ZKP technology into the polkadot/substrate ecosystem. Polkadot/substrate natively does not support ZKP, so this project(Zkverse, which means zk universe) will provide zk-related pallets to support substrate and more efficient zk proof generation ways.

### Project Details

There are three main tasks for project: 
- integrate some zkp libray(like bellman, arkworks and eg...) into substrate pallet
- Maximize the generation efficiency and convenience of zk proof(The proof is not generated on the chain, but through some developer friendly libraries(like snarkjs) to adapt the zk lib on substrate chain.)
- Publish some tutorial blogs to let more substrate community developers enjoy the convenience of the above zk development

Also, this project mainly focus on privacy function with ZKP technology. Meanwhile, We know that snakjs and circom are excellent and popular zkp development libraries. They are very popular in the Ethereum ecosystem and can automatically generate verification contract codes. We observed this very good feature, so we want to write circuit codes more easily through snakjs, and generate proofs for verification on the substrate-based chain. Because there are many people using snakjs, and circom is developer friendly, Unlike some domain-specific circuit writing methods, our project can attract many developers who are familiar with snarkjs to develop zkp Dapps in substrate/polkadot ecosystem.

### Ecosystem Fit
By integrating some very popular ZKP libraries into the substrate pallet, the privacy function of ZKP can be realized on the substrate-based chains, which is convenient for developers to develop zk applications on the substrate-based chains. Although zkp has been relatively active in the Ethereum ecosystem, zkp technology has not been widely popularized in polkadot ecosystem.
- [Zeropool](https://github.com/zeropoolnetwork/zeropool-substrate-groth16-example) implements zk on the substrate chain, but this library has not been updated for a long time. The substrate has gone through many development iterations and needs to be supported by the latest library.
- [Glacier](https://github.com/gbctech) is building a Distaff VM for zk-STARK proof generation and verification that are used to make  private smart contracts and private credential verifications.
- [zk-plonk](https://github.com/w3f/Grants-Program/blob/master/applications/zk-plonk.md) would like to implement Zk plonk pallet. However, plonk takes a long time to generate proofs and is generated on the chain, so there may be problems in efficiency.
- [ZK-Snarks tutorial](https://github.com/w3f/Grants-Program/blob/master/applications/ZK-Snarks%20tutorial.md) want to introduce the substrate community into the zk-snarks concept，but their ideas and goals have been implmentd since last year. Our project will do more education and involve more zk libraries


## Team :busts_in_silhouette:

### Team members
- Name of team leader: Bun - Rust/substrate developer, mainly insterested in cryptography and blockchain
- team member: Aaron

### Contact

- **Contact Name:** Bun  
- **Contact Email:** csj1071285741@gmail.com  

### Legal Structure

- **Registered Address:** 待加。。。。。
- **Registered Legal Entity:** 待加。。。。

### Team's experience
- Bun
    - He has many years of blockchain experience, is familiar with the underlying protocols, consensus algorithms, and common cryptographic algorithms of blockchain.
    - He is mainly interested in zero-knowledge proof, anti-quantum cryptography, etc
    - He was used to be a member of [chainx](https://github.com/chainx-org/ChainX), mainly develop pallet
    - Currently, he is substrate ambassador jointly decided by oneblock+ community and parity


### Team Code Repos
- https://github.com/Zkvers/substrate-zk
- https://github.com/Zkvers/snarkjs-bellman-adapter


## Development Status :open_book:
Currently, we have developed a substrate-based chain with zkp protocol and a practical zkp tool (which can adapt to two different zkp libraries to facilitate developers to develop zkp Dapps)

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 2.5 months
- **Full-Time Equivalent (FTE):**  1FTE
- **Total Costs:** 30,000 USD

### Milestone 1

- **Estimated duration:** 1 month
- **FTE:**  1
- **Costs:** 13,000 USD

Implement Groth16 pallet in Substrate and develop a tool which can let the proof of snarkjs(off-chain) verified by the bellman library(on-chain). In this way, We can make it convenient for developers to develop zkp applications using the Groth16(Bellman is an excellent zkp lib, but it is easy to make mistakes when using bellman to develop circuits, and snarkjs can cooperate with circom to write circuit codes with few mistakes. So we combined them to make the development of zkp applications more safe and efficient). So far, we haven't seen any team do this, but we think it is very meaningful.

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 / GPLv3 / MIT / Unlicense |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an **article**/workshop to explain.
| 1. | make groth16 compatible with substrate | We will create a Substrate pallet with groth16 algorithm. Bellman is not fully compatible with `no_std`, so we first make it possible and then we will modify attributes according to parity-codec and Rng to be compatible with　Substrate environment. Finally, a zkp `verification Pallet` on the chain was developed |
| 2. | adapt snarkjs and bellman | Adapt snarkjs to bellman, so that the proof generated by snarkjs and circom can be verified by verification pallet on the substrate chain |


### Milestone 2 Example — Additional features

- **Estimated Duration:** 1.5 month
- **FTE:**  1.5
- **Costs:** 17,000 USD

Implement plonk pallet in Substrate and develop a tool which can let the proof of snarkjs(off-chain) verified by the plonk library(on-chain). In this way, We can make it convenient for developers to develop zkp applications using the Plonk(Many plonk lib are very excellent zkp lib, but it is easy to make mistakes when using them to develop circuits, and snarkjs can cooperate with circom to write circuit codes with few mistakes. So we combined them to make the development of zkp applications more safe and efficient). So far, we haven't seen any team do this, but we think it is very meaningful.

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 / GPLv3 / MIT / Unlicense |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an **article**/workshop to explain.  
| 1. | make plonk compatible with substrate | We will create a Substrate pallet with plonk algorithm. Plonk lib is not fully compatible with `no_std`, so we first make it possible and then we will modify attributes according to parity-codec and Rng to be compatible with　Substrate environment. Finally, a zkp `verification Pallet` on the chain was developed |
| 2. | adapt snarkjs and plonk lib | Adapt snarkjs to plonk library, so that the proof generated by snarkjs and circom can be verified by verification pallet on the substrate chain |


## Future Plans
- Compatible with more Groth16 and plonk libraries on substrate
- Develop pallet compatible with other proof system at substrate
