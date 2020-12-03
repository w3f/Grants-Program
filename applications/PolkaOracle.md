# PolkaOracle Data Infrastructure

## Project Description

PolkaOracle is set to build a data infrastructure by applying Off-chain Worker under Polkadot/Substrate Framework. The mission of PolkaOracle is to provide real-time, transparent, reliable and efficient on-chain/off-chain market statistics and social data sources. PolkaOracle will be an important building block in the whole Substrate ecology. PolkaOracle is aiming to build a flexible, self-evolving oracle network based on Polkadot, providing applications or smart contracts with customized real-time on-chain data feeding services. PolkaOracle will adopt the Off-chain Workers architecture of the Substrate 2.0 to build an on-chain Oracle system and is designed to be the parachain/parathread connecting to the Polkadot universe.

PolkaOracle is to build a decentralized Oracle system with advanced technologies. The Off-chain Worker for PolkaOracle will allow execution of expensive, long-running and private tasks such as the Computation-based Data Verification, the Web requests and the random number generation, etc., providing the security, efficiency and randomness of the data feed.

## Project Details

### The Technology Stack

Request: Data requester, enabling the calls of PolkaOracle sequences in any way

DW: Data warehouse, distributed data repository, stores historical queries, verifications, etc., which can be read by any data requester

Miner: oracle Node processing requests from off-chain data sources

Arbitrator: Verify data integrity and timeliness provided by oracle Node

Validator: Built on the network established by Substrate, allows oracle node to broadcast proofs, supports the validity of Arbitrator mining values

### Technology Architecture

PolkaOracle is aiming to build a flexible, self-evolving oracle network based on Polkadot, providing applications or smart contracts with customized real-time on-chain data feeding services. PolkaOracle will adopt the Off-chain Workers architecture of the Substrate 2.0 to build an on-chain oracle system and is designed to be the parachain/parathread connecting to the Polkadot universe.

<p align="center">
  <img src="https://lh3.googleusercontent.com/8BKR3VZBcEsfvK93pxm86W7OBMPRY-qGCAXks3zT4x8j2WU7YtKl1TFHJO7-OAYQEUm88UUoGcym_b3BJx-kVvbVHWjc1lV4JYYhFhHANRmuFthCUwOcVemI6PFQOupOZgV19hA_"><br>
  <b>The architecture of off-chain worker (Data source: Parity)</b>
</p>

PolkaOracle will be built on the groundbreaking technology with Substrate and surrounding tech stack to leverage the most cutting-edge features to develop a community-driven self-evolving oracle system. As demonstrated below, the 4-layer architecture of PolkaOracle consists of:

![img](https://lh5.googleusercontent.com/xG9zR8Vm-_c_mvfr3E0rKvqvmKnaWOs8cMT_A4U2jNBd-2T0vuKB7ccU68L4qSt85RpBeKNWpZyWgG4MCENssD4NOw4ffvSf2GYC3FLIPhDQN_fL54y-enhzvaL70AiiGZEL4pP1)

- **Data Source Layer**

    The Data Source Layer is the bottom layer of the entire oracle system. It is mainly responsible for obtaining third-party off-chain data through various API interfaces with preliminary screening, comparison and filtering of the data to ensure the authenticity, accuracy and real-time of the data.

- **Off-chain Workers**

    Off-chain Workers is a new feature in Substrate 2.0, allowing developers to integrate data safely and securely onto the blockchain applications. The Off-chain Worker for PolkaOracle will allow execution of expensive, long-running and private tasks such as the Computation-based Data Verification, the Web requests and the random number generation, etc., providing the security, efficiency and randomness of the data feed.

- **On-chain Infrastructure**

    The On-chain Infrastructure is responsible for the fully-deterministic and transparent on-chain logic which is processed by the entire network with a slower speed. The on-chain infrastructure will ensure the security, fairness, transparency and finality of the entire network. 

- **Cross-chain Application Layer**

    The Cross-chain Application Layer is the uppermost layer of the entire system. It mainly provides various general and customized data interfaces based on cross-chain technology for various applications that require oracle data services. In addition, this layer will also provide public tools such as user-defined oracle data calling templates and public data display panels.

### Workflow of Data Request

![img](https://lh4.googleusercontent.com/iS4GhjSd973sQiTv1kpgyQ-atQrn_aWGJ_ZEMeHGBFVj6u7ZPHXpsi0A-kLWqW4-fNAKFgNRgOG34WUpEa7ximnWDsQa7k6LF3YW0H0NYipgoiBg3ZIJIogmQMW_WFQRfrMVHGFz)

A concise demonstration of PolkaOracle's workflow is as follows：

1\) When the user initiates a data request, the substrate network node will obtain the original data through a third-party verifiable data API such as a website API. After basic screening, comparison and preliminary verification of the node network, the raw data will be submitted to the off-chain worker layer for further data verification.

2\) The off-chain worker for verification will randomly select network nodes through the VRF algorithm for off-chain calculation and verification, and then comprehensively compare the verification results. If the verification proves that the submitted data is wrong or tampered, the node submitting the data will be punished by slash. The confiscated mortgage assets will be equally rewarded to network nodes that find the data errors.

3\) The data verified by the off-chain worker will be confirmed by the entire blockchain, then the data will be transmitted in real time to the application that initiated the data request through cross-chain interoperability technology.

4\) For application users, they can simplify the data feeding process and increase the data transmission speed by deploying sub-contracts and being added to the list of Sub-contract by the community through voting.

## Use Cases of PolkaOracle Data Infrastructure

Through the PolkaOracle to obtain timely and reliable events outside the insured chain, blockchain-based decentralized insurance can realize automatic payment of insurance such as flight delay insurance.

Stablecoins and encrypted derivatives need to frequently obtain off-chain real-time price data. PolkaOracle can obtain reliable data in multiple scenarios in real time and efficiently.

PolkaOracle can provide real-time and reliable currency prices and borrower’s social media information, providing strong support for the dynamic determination of loan interest rates.

The lightweight PolkaOracle interface that can be deployed on multiple chains provides the possibility for decentralized exchanges to realize cross-chain atomic transactions.

## Team Code Repos

* [https://github.com/PolkaOracle/Parachain](https://github.com/PolkaOracle/Parachain)

## Team members 

* Changyou Ye
* Wei Wu
* Jingyu Wang
* Taiqin Wu
* Guozhu Liang
* Jing Zheng
* ...

## Team’s background and experience：

* Wei Wu holds a Master's degree in computer Engineering from MIT. He has 4-years of experience in blockchain core development. He was formerly a senior engineer at Tencent, a core developer at PolkaOracle. He is a senior Substrate Framework early researcher.
 
* Changyou Ye is a senior blockchain full-stack development engineer. He holds a Master’s degree from Tsinghua University. He is also a Substrate runtime developer. He is proficient in distributed financial blockchain development.
 
* Jingyu Wang  has been contributing to several Polkadot ecosystem open source libraries. He has solid software engineering experience and was a core developer in  Huaxin Blockchain Research Institute.
 
* Taiqin Wu has a master’s degree in Economics from Nankai University. He has more than 4 years product/program/project management experience in Blockchain and high-tech industry.

* Jing Zheng is Senior web front-end engineer, capable of developing front-end projects independently and use linux and vim. Proficient in the basic framework of the front-end, be proficient in using webpack, and proficient in git collaboration related software such as gitlab, github and gittee. 

## Linkedln Profiles (Partial)
 
* [Guozhu Liang](https://www.linkedin.com/in/guozhu-liang-lubis-664a981b9/)
* [Jingyu Wang](https://www.facebook.com/jingyu.wang.92123015)
* [Wei Wu](https://www.linkedin.com/in/wei-wu-bob-1b1aa01b9/)
* [Changyou Ye](https://www.linkedin.com/in/chang-you-ye-598242200/)
* [Jing Zheng](https://www.linkedin.com/in/jing-zheng-42324a200/)

## Legal Structure

The legal structure of the PolkaOracle Foundation is set up and incorporated in British Virgin Islands. 

## Development Roadmap

There will be 3 milestones with each milestone lasting for one month. PolkaOracle Data Infrastructure will be a 3-month project: 

* **M1: Descriptions of the whole system structure and design;**

    Complete the development of data source layer, off-chain workers and on-chain infrastructure.

    Data source layer: The Data Source Layer is the bottom layer of the entire oracle system.

    Off-chain: Off-chain Workers is a new feature in Substrate 2.0, allowing developers to integrate data safely and securely onto the blockchain applications.

    On-chain Infrastructure: The On-chain Infrastructure is responsible for the fully-deterministic and transparent on-chain logic which is processed by the entire network with a slower speed.  

* **M2: Database, feeding modules, data analysis samples;**

    data analytics: data discovery, analysis, and analysis tools designed for DW, and can also provide queries or APIs for Dapps or external tools

    Oracle Node, supported and implemented by Polkadot, provides multiple data sources with high timeliness and works with off-chain workers and verifies the integrity and validity of the data provided by the oracle node. 

    Better ensure the security and accuracy of external data on-chain.

    data Marketplace: data market, open platform. Dapps on polkadot can easily obtain off-chain data

    token POT: network token


* **M3: Publishing of whole Test set and developer guide.**

    Request: Data requester, call PolkaOracle in any way

    DW: Data warehouse, distributed data repository, stores historical queries, verifications, etc., which can be read by any data requester

    Miner: oracle Node processing requests from off-chain data sources

    Arbitrator: Verify data integrity and timeliness provided by oracle Node

    Validator: Built on the network established by Substrate, allows oracle node to broadcast proofs, supports the validity of Arbitrator mining values

## Future Development Plans

With the recent rapid development of DeFi, it is foreseeable that the blockchain will explode on a large scale in the future. In order to effectively respond to future market demands, PolkaOracle will strengthen its capability from the following aspects:

### Privacy Protection Technology 

As the application fields of the oracle continue to expand, more applications in the future will place stricter requirements on privacy protection. Therefore, PolkaOracle will concentrate its development efforts on research and development of private protection technologies including homomorphic encryption technology, secure multi-party computation (MPC) technology and zero-knowledge proof.

### Unstructured Data Support 

Up to now, oracle projects on the market are mainly designed for structured data, such as market price data. However, in the real business environment, the demand for unstructured data is also a huge market demand. Therefore, PolkaOracle will study the collection, processing and verification technology of unstructured data in advance to gain a leading competitive advantage.

### Self-evolution Mechanism 

PolkaOracle aims to create a flexible self-evolving system possessing true self-evolution and self-organization capabilities. Therefore, we will actively cooperate with the world’s leading technology companies and universities to conduct extensive research on the combination of blockchain and self-evolving technologies including neural networks.

## Additional Information

* Work has been done so far

    1. We are drafting and verifying the economic model of the PolkaOracle Data Infrastructure.

    1. We are drafting technical specifications and design of runtime modules.

    1. We are building common runtime modules such as multi-asset tokens that will be used in the PolkaOracle Data Infrastructure.

    1. Several custom components needed for the PolkaOracle parachain and also the technical architecture of the parachain.

## Social Channels

- [Medium](https://medium.com/polkaoracle)

- [GitHub](https://github.com/PolkaOracle)

- [Twitter](https://twitter.com/PolkaOracle)

- [Telegram](https://t.me/polkaoracle)

- [Discord](https://discord.gg/RZwW4MN)
