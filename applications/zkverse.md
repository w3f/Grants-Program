# Zkverse

- **Team Name:** Zkverse
- **Payment Address:** 0x8554fff69177C2cf470fA276b0C65dB58b5EfEE5(DAI)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

### Overview

At present, ZKP technology is constantly developing and innovating in the scaling and expansion track in Ethereum, especially some zk rollup projects, such as zksync, scroll, starknit, etc. So the main goal of this project is to introduce ZKP technology into the Polkadot/Substrate ecosystem. Polkadot/Substrate natively does not support ZKP, so this project(Zkverse, which means zk universe) will provide zk-related pallets to support substrate and more efficient zk proof generation ways. 

### Project Details

There are three main goals for project: 
- Integrate some zkp libray(like bellman, plonk library and eg...) into substrate pallet
- Maximize the efficiency and convenience of zk proof generation(The proof is not generated on the chain, but through some developer friendly libraries(like snarkjs) which will be adapted to the zk lib on substrate-based chain.). This is very important and convenient for scaling. It can realize rollup for app-specific Dapps and greatly increase the throughput of the substrated-based chain. It can be said "Off-chain execution and on-chain verification".
- Publish some tutorial blogs/demos to let more substrate community developers enjoy the convenience of the above zkp development kits.

Meanwhile, We know that snakjs and circom are excellent and popular zkp development libraries. They are very popular in the Ethereum ecosystem and can automatically generate verification contract codes. We observed this very good feature, so we want to generate circuit codes more easily through circom, and generate proofs by snarkjs, which will be verified on substrate-based chain. Due to many people using snakjs, and circom is developer friendly, Unlike some domain-specific circuit writing methods, our project can attract many developers who are familiar with snarkjs to develop zkp Dapps in substrate/polkadot ecosystem. They can also enjoy the convenience of developing zkp applications in Polkadot ecosystem. So our main goal is to provide zkp infrastructure that is convenient for Polkadot developers. Also ,we will show a minimal example with Merkle tree and ZKP for rollup.
```
h(h(h(sm0+sm1) + h(sm2+sm3)) + sm4) (merkle root)
      /                         \
    h(h(sm0+sm1) + h(sm2+sm3))  sm4 (2 siblings)
    /          \                /
   h(sm0+sm1)   h(sm2+sm3)   sm4 (3 siblings)
  /   \        /   \         /
sm0   sm1   sm2    sm3      sm4 (leaves are the base level, 5 siblings)
^     ^     ^      ^        ^
|     |     |      |        |
m0    m1    m2     m3       m4
```

### Ecosystem Fit
By integrating some very popular ZKP libraries into Substrate pallet, the rollup function of ZKP can be realized on the substrate-based chains, which is convenient for developers to develop zk applications on the substrate-based chains. Although zkp has been relatively active in the Ethereum ecosystem, zkp technology has not been widely popularized in polkadot ecosystem.
- [Zeropool](https://github.com/zeropoolnetwork/zeropool-substrate-groth16-example) implements zk on the substrate chain, but this library has not been updated for a long time. The substrate has gone through many development iterations and needs to be supported by the latest library.
- [Glacier](https://github.com/gbctech) is building a Distaff VM for zk-STARK proof generation and verification that are used to make  private smart contracts and private credential verifications. Also, this project is outdate and not latest.
- [zk-plonk](https://github.com/w3f/Grants-Program/blob/master/applications/zk-plonk.md) would like to implement Zk plonk pallet. However, plonk takes a long time to generate proofs and is generated on the chain, so there may be problems in efficiency. Also, the library this project using is not the latest.
- [ZK-Snarks tutorial](https://github.com/w3f/Grants-Program/blob/master/applications/ZK-Snarks%20tutorial.md) want to introduce the substrate community into the zk-snarks concept，but their ideas and goals have been implmentd since last year. Our project will do more education and involve more zk libraries


## Team :busts_in_silhouette:

### Team members
- Name of team leader: Bun - Rust/substrate developer, mainly insterested in cryptography and blockchain
- Name of team member: Aaron

### Contact

- **Contact Name:** Bun  
- **Contact Email:** csj1071285741@gmail.com  

### Legal Structure

- **Registered Address:** 5001 BEACH ROAD, #07-37, GOLDEN MILE COMPLEX
SINGAPORE (199588)
- **Registered Legal Entity:** SYN UNIVERSAL PRIVATE LTD

### Team's experience
- Bun
    - He has many years of blockchain experience, is familiar with the underlying protocols, consensus algorithms, and common cryptographic algorithms of blockchain.
    - He is mainly interested in zero-knowledge proof, post-quantum cryptography, etc
    - He was used to be a member of [chainx](https://github.com/chainx-org/ChainX), mainly develop pallet
    - Currently, he is a substrate ambassador jointly decided by oneblock+ community and parity


### Team Code Repos
- https://github.com/Zkvers/substrate-zk
- https://github.com/Zkvers/snarkjs-bellman-adapter


## Development Status :open_book:
Currently, we have developed a substrate-based chain with zkp protocol and a practical zkp tool (which can adapt to two different zkp libraries to facilitate developers to develop zkp Dapps)

## Development Roadmap :nut_and_bolt:
We will implement two different proof systems(groth16 and plonk) separately to meet the needs of different developers

### Overview

- **Total Estimated Duration:** 2.5 months
- **Full-Time Equivalent (FTE):**  1FTE
- **Total Costs:** 24,000 USD

### Milestone 1

- **Estimated duration:** 1 month
- **FTE:**  1
- **Costs:** 7,000 USD

Implement groth16 pallet in Substrate and develop a tool which can let the proof of snarkjs(off-chain) verified by the bellman library(on-chain). In this way, We can make it convenient for developers to develop zkp applications using the groth16(Bellman is an excellent zkp lib, but it is easy to make mistakes when using bellman to develop circuits, and snarkjs can cooperate with circom to write circuit with few mistakes. So we combined them to make the development of zkp applications more safe and efficient). So far, we haven't seen any team do this, but we think it is very meaningful.

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 / GPLv3 / MIT / Unlicense |
| **0b.** | Documentation | We will provide both `inline documentation` of the code and a `basic tutorial` that explains how users use these zk tools to generate proof and verify. |
| **0c.** | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide Dockerfiles that can be used to test all the functionality delivered with this milestone. |
| 1. | make groth16 compatible with substrate | We will create a Substrate pallet with groth16 algorithm. Bellman is not fully compatible with `no_std`, so we first make it possible and then we will modify attributes according to `parity-codec` and `Rng` to be compatible with　Substrate environment. Finally, a zkp `verification Pallet` on the chain was developed |
| 2. | adapt snarkjs and bellman | We will use circom to write a minimal circuit example of zk rollup. Adapt snarkjs to bellman, so that the proof generated by snarkjs can be verified by the verification pallet on the substrate-based chain. |
| 3. | ZKP education(introduction to theory and detailed example explanation) | First, we will introduce the implementation principle of groth16 algorithm in an easy-to-understand way, and then explain its implementation method and architecture in detail of the example in 2 by a vedio and some articles，so that substrate developers can know how to develop a dapp through zkp technology |


### Milestone 2

- **Estimated Duration:** 1.5 month
- **FTE:**  1.5
- **Costs:** 17,000 USD

Implement plonk pallet in Substrate and develop a tool which can let the proof of snarkjs(off-chain) verified by the plonk library(on-chain). In this way, We can make it convenient for developers to develop zkp applications using the Plonk(The reason is the same as that in milestone 1). So far, we haven't seen any team do this, but we think it is very meaningful.

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 / GPLv3 / MIT / Unlicense |
| **0b.** | Documentation | We will provide both `inline documentation` of the code and a `basic tutorial` that explains how users use these zk tools to generate proof and verify.   |
| **0c.** | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide Dockerfiles that can be used to test all the functionality delivered with this milestone. |
| 1. | make plonk compatible with substrate | We will create a Substrate pallet with plonk algorithm. Many plonk librares are not fully compatible with `no_std`, so we first make it possible and then we will modify attributes according to `parity-codec` and `Rng` to be compatible with　Substrate environment. Finally, a zkp `verification Pallet` on the chain was developed |
| 2. | adapt snarkjs and plonk lib | We will use circom to write a minimal circuit example of zk rollup. Adapt snarkjs to bellman, so that the proof generated by snarkjs can be verified by the verification pallet on the substrate-based chain. |
| 3. | ZKP education(introduction to theory and detailed example explanation) | First, we will introduce the implementation principle of plonk algorithm in an easy-to-understand way, and then explain its implementation method and architecture in detail of the example in 2 by a vedio and some articles，so that substrate developers can know how to develop a dapp through zkp technology |

## Future Plans
- Compatible with more groth16 and plonk libraries on substrate pallet
- Develop pallet compatible with other proof system at substrate
