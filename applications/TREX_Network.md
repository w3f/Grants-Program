# W3F Grant Proposal

- **Project Name:** TREX - Timed Release Encryption Xing chains
- **Team Name:** [NexToken Technology](https://github.com/NexTokenTech)
- **Payment Address:** 0x10286c9d17a1aF1D73E19762A5132d604a076585 (USDT)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

TREX is a project for the development of a protocol and network to support trustless and permissionless timed-release encryption in Web3. It is a decentralized network that consists of miners, archivers and basic substrate nodes. This project is developed based on the Substrate framework as a parachain of the Polkadot ecosystem. We aim at institution and business clients who need blockchain technology to enhance their data security and build up [decentralized reputations](https://newsletter.thedefiant.io/p/-decentralized-reputation-is-about-a8b) on Web3.

### Overview

TREX is the world’s first blockchain platform that enables decentralized timed-release encryption (dTRE) to unlock information 
(as serialized and structured data) and actions (as serialized procedures to be called in distributed remote nodes) 
for future events. With TREX, the data and procedure were encrypted and distributed in a decentralized blockchain network. 
The data or procedure would be only revealed or executed after certain counts of clock ticks. 
Based on a monetary incentive mechanism, all nodes in the TREX network will collaborate and automatically adjust to ensure 
the accurate release of data and procedures as a consensus-based system.

Our consensus is based on Proof-of-Work, however, unlike many existing PoW networks that only use the hash power 
to validate and seal new blocks, our innovative mining algorithms can reuse the hash power 
to unlock encrypted data and procedures in a controlled manner at the preset timestamp. See details in our [technical paper](https://arxiv.org/abs/2205.09020)
This dual-purpose mining algorithm is not only securing network safety and data integrity but also serves as a timed-release mechanism. 
No one, including the originator, can stop releasing the encrypted contents unless all nodes in the network were eliminated. 
No third party has any type of early access to the encrypted contents. 
The attacker must utilize hash powers higher than the whole network to prematurely access the encrypted contents 
so that our system provided unparalleled security and robustness to any centralized TRE services.

The emerging Web3 technology and Polkadot ecosystems could enable enormous cross-chain applications which need time-sensitive and time-critical encryption of data and procedures, 
including DAO governance, DeFi applications, decentralized prediction market and strategy market. 
In many scenarios, the data and procedures are required to be confidential until release time. 
TREX and its blockchain application programming interface (API) could confidently empower the TRE applications on Web 3, 
which could also terminate cheap talks and scams on today’s social networks and creates entirely new marketplaces 
for trading time-sensitive confidential data and procedures with a blockchain-backed reputation system.

The TREX project roots a new family of Web3 applications in the Polkadot ecosystem and is being actively developed with the Substrate framework.
It aims to support interoperation between parachains in the Polkadot ecosystem and enables a group of new applications with dTRE technology.
The TREX project was initialized to support an idea that needs immutable open records but is hidden until future events.
Applications like elections and blind bidding can be done on Web3 without relying on centralized services. Our team believes that TRE 
will support a new type of Web3 application which accelerates the adoption of Web3.

### Project Details

Our targeted clients are strategy markets and AI trading bot markets that need to build up their decentralized reputations (e. g. [tipranks.com](https://www.tipranks.com)).

- Core functionality in TREX network
![block structure](https://sat02pap001files.storage.live.com/y4mC7nJfXtBtZL0isK0XVuSb1OBHB6ULIEzLVL0nwHNrg81CyWAwQ-VL5bslF7EiXILsdqH6H0bNJ2zs8kVfOn7hYkdEt60_gZvt83AKPR-cHQLgaMvMA-7mpy7OUXcfHReEdp6V5g-xJd-jP7G5QjQBiMOwM0jEIbfnq1dYBNMYSGfo5K8TZeviKs75_qekYmL?width=877&height=428&cropmode=none)


The core functionality in the TREX network includes a deterministic algorithm to generate an infinite series of public keys to encrypt data for future blocks (each block also has a timestamp that labels paired future events) and a PoW mining algorithm that serves dual purposes: seal a new block and release encrypted data corresponding to this new block. As shown in the above figure, similar to Bitcoin or any PoW type of blockchain, the hash value of the previous block will be included in the header data of the block, a design that guarantees that all historical data and transaction records cannot be changed because any changes to the earlier block data will cause the new blockchain to have to recalculate the nonce value, that is, rework. 

Each block header contains the corresponding public key to encrypt the hidden message, which could be structured data or serialized procedures, to be released in the current block time. The public key and private key are based on a discrete logarithm problem (DLP) cryptosystem. For example, if a user intends to release a message in the future, the message may be encrypted by the corresponding public key. If the publisher of the hidden message wants to make the news immutable and publicly available after the release time (e. g. electronic voting), the message may be written into the blockchain as part of immutable extrinsic metadata, as shown in the above figure.

Since the block time can be feedback controlled and stabilized, we can estimate the corresponding block height for the timestamp of a future event, the corresponding public key can be used to encrypt the message to be released in the future event. Therefore, once the corresponding private key were found by the future miner, the message is also released.

![core function](https://sat02pap001files.storage.live.com/y4mbbm4Uv6wQNS3zVzdrNF3c1kP22J47ApRc3XJyfDWnOYxMIumA4ArzqSNPjMsdwNS1SxEg25Fpx7CR5VdhJjgFBsju_derbYKDLbG_RkZNcel63uYzqMWau1BRhUpdKm73wg99zwZ4XwDEMVPtTcbnW5fU71u2DHt6QF7PFznIMcuB7nkD8aqDWG19sBorQRM?width=910&height=308&cropmode=none)

As shown in the above figure, when a miner finds a nonce value that meets the TREX PoW consensus, it can seal a new block and submit it to peer nodes for verification. While the new block is sealed and verified, based on the mining 
results of current work, a corresponding private key could also be derived from the new nonce value which could be used to decrypt early encrypted data and release data to the general public.

The algorithms and consensus were detailed in our [technical paper](https://arxiv.org/abs/2205.09020).

TREX algorithm provides 3 major advantages and innovations compared to early works

  1. Designed a dual-purpose mining algorithm that reduces the time complexity to solve the puzzle lock from O(2^n) to O(2^(n/2)), significantly improving the encryption strength.
  2. Integrated an advanced feedback algorithm to reduce 90% block time fluctuation and provide accurate release time.
  3. Designed a distributed mining pool architecture and algorithms that enable linear parallel performance gains to defend against hash attacks from high-performance cluster computers.

- TREX token economy

The TREX network is comprised of different types of entities including third-party developers, nodes, archivers and users. A simple example of core functionality in the TREX network.
![example figure](https://sat02pap001files.storage.live.com/y4m-6fn2EHbIEctqPi4P_8PI0jc8B0HaImf_-065KvTi7GH_A9LUzkFnD5gfszLtS9GQujRDwQanrz_WihcMZvj8s6AhATo0xDIY_hQlDJbUdVNgT_qMJaE-N1k5RC5vEBXStgqTOypL9ql-FbjjDXSiDtNBqBeimm_7CBMsqqPHegLLgnu9mH_uCHHGEPhh6aR?width=662&height=586&cropmode=none)

In this image, oracles provide timed-release encrypted data or procedures and sent them to the blockchain, and to be released in a future event. For example, an analyst can encrypt its suggested actions toward future events and send them to the TREX network. We call them oracles, who can speak about the future based on its analysis or any other AI algorithms. The oracle could be a real person or an AI bot. It does not matter since all of his mentions about future events could 
be recorded on our blockchain, thus, becoming immutable. The encrypted data would be decrypted and released in the future after the event occurs (e. g. market closed and the final price of an asset was revealed). Since the on-chain data is 
immutable, the oracles cannot delete their wrong suggestions or predictions. All of their previous data would generate a reputation for themselves.

Third-party on-chain data services, which disassemble the block data into extrinsic and analyze encrypted predictions or strategies, could generate ranks or recommendations based on specific metrics (e. g. return of investment). The end users may get early access to an oracle's data by paying a fee. Thus, end users can use the predictions and investment strategy, which were created by the oracles, for their own interests. 

Since the TREX software is fully open source and free to use, the users only pay fees to use the infrastructure. The tokens on the TREX network could be used to pay insertion fees for writing dTRE data on the blockchain. The data fee is comprised of a base fee and a data fee per byte. Since there is an upper limit on block size, the data fee is dynamically adjusted based on network usage.

New tokens were created by miners on the TREX network and exchanged to end users.

- An overview of the technology stack to be used

Our project is exclusively developed with Polkadot substrate ecosystems.

  1. Our [TREX node software](https://github.com/NexTokenTech/TREX) is based on the latest Substrate framework, which is under internal network test and is to be released as open source software.
  2. Our [TREX blockchain index engine](https://github.com/NexTokenTech/trex-archive) is based on the Substrate Archive. It releases timed-release encrypted data and archives dTRE data into a PostgreSQL database.
  3. For applications on the TREX network, we provide solutions including an [API library](https://github.com/NexTokenTech/trex-subxt) to our business partners who may use it to insert dTRE data on the TREX network and retrieve data with the TREX blockchain index engine.
  4. The DevOps tool uses [Terraform](https://www.terraform.io) to automate the deployment of the TREX infrastructure with other backend services on cloud computing platforms so that our targeted clients can easily integrate the dTRE technology with their existing services.

- Documentation of core components, protocols, architecture, etc. to be deployed

Our white paper is our core documentation.

<iframe src="https://onedrive.live.com/embed?cid=BEF98A7CB59E1060&resid=BEF98A7CB59E1060%21106391&authkey=AGFFIH66aCaJ9Yw&em=2" width="800" height="400" frameborder="0" scrolling="no"></iframe>

And the [technical paper](https://arxiv.org/abs/2205.09020) contains the most details for PoW mining algorithms and network protocols.

- PoC/MVP or other relevant prior work or research on the topic

We developed an early demo and a set of software to exhibit the basic idea of timed-release encryption with blockchain. The demonstration has nothing to do with the actual TREX test-net or main-net but provides a demo of the concept for early users and investors.
It includes the following software:

  1. A demo blockchain node ([GitHub Repo](https://github.com/yangfh2004/Time-Release-Blockchain));
  2. A demo block index engine ([GitHub Repo](https://github.com/NexTokenTech/time-release-watcher-demo));
  3. A WASM library for the demo of dTRE technology ([GitHub Repo](https://github.com/NexTokenTech/trex-app-wasm));
  4. A demo app to use the dTRE technology as a Chrome extension ([GitHub Repo](https://github.com/NexTokenTech/trex-demo-wallet-ext));

The above-mentioned demo is deployed on AWS and may be accessed with a [web link](http://www.timecaps.net).

In the current stage of TREX development, we are working on the following software with the Rust programming language to deliver public test-net and main-net very shortly:

  1. TREX node software that supports fundamental blockchain functionalities, consensus, and mining ([GitHub repo](https://github.com/NexTokenTech/TREX));
  2. The customized TREX archive software scans the blockchain and unlocks encrypted data and releases it according to its preset clock ([GitHub repo](https://github.com/NexTokenTech/trex-archive));
  3. The TREX API library to submit dTRE data as a form of Substrate extrinsic to TREX nodes ([GitHub repo](https://github.com/NexTokenTech/trex-subxt));
  4. The infra-as-code (IaC) TerraForm script to deploy the TREX test-net and backend services ([GitHub repo](https://github.com/NexTokenTech/trex-test-net));

For the research purpose, we build a [block time simulator](https://github.com/yangfh2004/block-time-control) to simulate the time period for generations of each block under fluctuation of hash rates. This tool is used to evaluate different block time control algorithms.

We also developed a rust library for DLP (discrete log problem) based high-performance encryption system ([GitHub repo](https://github.com/NexTokenTech/elgamal_trex)). This library uses a well-optimized large integer library GMP so that it provides fast key generation, encryption and decryption to high-level applications.

- What your project is _not_ or will _not_ provide or implement

We are not working on a universal public chain like ETH or Polkadot that serves as layer-0 infra. Our parachain only focuses on providing a specific decentralized infra service - the decentralized timed-release encryption for cross-chain applications.

We are not building a smart contract platform but provide APIs to any cross-chain smart contracts if using dTRE technology.

We are not going to build a web or mobile application for end-users (e. g. decentralized strategy markets), but we are working with our business partners by providing them dTRE infra services and integration toolchains. Moreover, we are trying to attract more third-party developers to our network and the Polkadot ecosystem to develop various dApps based on the dTRE technology and Polkadot cross-chain technology.

### Ecosystem Fit

- Where and how does your project fit into the ecosystem?

Our final goal is to create a new frontier of dAPPs with dTRE technology in the Web3 domain. The Polkadot ecosystem provides very comprehensive and advanced support for cross-chain interoperability. With Polkadot relay chains, bridges and parachains, arbitrary data could be encrypted with our dTRE technology and transferred across various blockchains and triggered future events on any other blockchains. The Polkadot multi-chain network allows us to explore the full potential of our dTRE technology since it may be integrated with the whole web3 network and create a large number of new dApps.

- Who is your target audience (parachain/dapp/wallet/UI developers, designers, your own user base, some dapp's userbase, yourself)?

Our target audience is whoever needs to send a temporary confidential message to the future. It could have a list of applications/businesses including but not limited to 

  1. Decentralized strategy market (to replace the centralized service like [tipranks.com](https://www.tipranks.com) ) 
  2. Decentralized prediction market (to replace the centralized service like [predictit.org](https://www.predictit.org) )
  3. Universal key escrow (encrypted arbitrary crypto key to hold the escrow fund and release in the future)
  4. Decentralized voting system (encrypted ballot and reveal it in future)
  5. Decentralized blind bidding (encrypted all bids and reveal in the deadline to find the final bid winner)

Any creators and developers with the above applications could be our target audience. They could be parachains and dApps that provide decentralized trading platforms, strategy markets, prediction markets and so on.

- What need(s) does your project meet?

Essentially, the world needs [decentralized reputations](https://newsletter.thedefiant.io/p/-decentralized-reputation-is-about-a8b) to open a new Web3 frontier. Our dTRE technology not only helps dApp dev and owners to build up their decentralized reputations but creates marketplaces for temporal confidential data. Therefore, the early access privilege to the dTRE data can be traded so that the reputed content creator can sell their strategies or predictions. Additionally, the dTRE technology can support a range of new Web3 applications which need features for timed release of data.

- Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?

No, according to our best knowledge, we are creating all new decentralized applications in the Web3 domain. We don't see any similar projects in any blockchains providing the decentralized timed-release encryption (dTRE) services.
We believe that the dTRE technology will radically change many existing centralized applications since it builds up a trustless and permissionless mechanism to send a message to the future and create markets for early access or subscription.

However, there are some prior crypto projects which were trying to build decentralized strategy markets (e. g. [Tycoon crypto trading platform](https://tycoon.io)), however, their product does not have dTRE technology and their service is centralized so their blockchain & token is only used for fund settlements and governance. Their project is not in the Substrate / Polkadot / Kusama ecosystem.

## Team :busts_in_silhouette:

### Team members

- Leo Yu (executive, finance and product)
- Fanghao Yang (research, engineering and technology development)
- Oscar Wang (operation and human resource)
- Xingqiu Yuan (chief scientist)
- Jake Jian (consultant, strategy and data science)
- Dan Yin (senior software engineer)

### Contact

- **Contact Name:** Leo (Tianyi) Yu
- **Contact Email:** team@trex.ink
- **Website:** www.trex.ink

### Legal Structure

- **Registered Address:** 165 ARRETON RD, PRINCETON, NEW JERSEY 08540
- **Registered Legal Entity:** NexToken Technology LLC

### Team's experience

Leo Yu: Serial entrepreneurs of crypto technology startup companies with several successful entrepreneurial projects and good investment returns. Excellency at integrating international resources and having an outstanding strategic development vision. Proficiency in communication with global clients and team coordination skills. [Resume](https://1drv.ms/b/s!AmAQnrV8ivm-hqx4tSxtL5LBTynnCA?e=NiON2k)

Fanghao Yang: former researcher & software engineer in IBM Research, US DOE national lab in Princeton University, worked with a few startup companies leading a team of developers. See the [LinkedIn page below](#team-linkedin-profiles).

Oscar Wang: Serial entrepreneur with more than ten years of business management and marketing experience covering markets from technology to manufacturing more than five years of experience as a general manager of large-scale enterprises, with excellent skills in solving complex problems, business planning, team management and interpersonal skills, strong learning ability in new fields, firm team oriented. [Resume](https://1drv.ms/b/s!AmAQnrV8ivm-hqxz2lU8gDhlMasAmA?e=KqTwvi)

Xingqiu Yuan: chief research scientist in US DOE national labs for distributed computing and large-scale HPC software design. See the [LinkedIn page below](#team-linkedin-profiles).

Jake Jian: former Morgan Stanley analyst and Accenture consultant team lead. Directors and senior management of many prestige IT companies. See the [LinkedIn page below](#team-linkedin-profiles).

Dan Yin: 10+ years of experience in the development of fintech services and software [Resume](https://1drv.ms/b/s!AmAQnrV8ivm-hqx3VjTtmlBvMlYZ4g).

### Team Code Repos

- https://github.com/NexTokenTech
- https://github.com/NexTokenTech/TREX
- https://github.com/NexTokenTech/trex-archive
- https://github.com/NexTokenTech/trex-subxt
- https://github.com/NexTokenTech/trex-test-net
- https://github.com/NexTokenTech/elgamal_trex

Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine.

- https://github.com/yangfh2004
- https://github.com/xyuan
- https://github.com/kaisuki

### Team LinkedIn Profiles

- https://www.linkedin.com/in/fanghaoyang/
- https://www.linkedin.com/in/xingqiu-yuan-68b62b38/
- https://www.linkedin.com/in/jakejian/

## Development Status :open_book:

- Technical Paper

A [technical paper](https://arxiv.org/abs/2205.09020) is published on the arxiv.

- TREX core node code ([GitHub repo](https://github.com/NexTokenTech/TREX))

Under internal test net on AWS, successfully passed all tests on fundamental blockchain & dTRE functionalities (test doc is per request) and is ready to be released for public test net. 

- TREX block index engine ([GitHub repo](https://github.com/NexTokenTech/trex-archive))

In progress to be integrated with our business partners to support the deployment of the dTRE technology in existing platforms with the rabbitMQ message broker.

- TREX API library ([GitHub repo](https://github.com/NexTokenTech/trex-subxt))

Tested and successfully submitted dTRE data to the TREX blockchain node.

## Development Roadmap :nut_and_bolt:

Since the basic protocol and consensus have been implemented in the current [TREX node repo](https://github.com/NexTokenTech/TREX). Our milestones focus on delivering support to integrate with dApps that use the dTRE technology and land the first dTRE service to the market.


### Milestone 1 — XCMP Integration

- **Estimated Duration:** 1 month
- **FTE:**  2
- **Costs:** 10,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | MIT License
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a parachain can route a dTRE message to the TREX network.|
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an online blog that explains how this module works as described in the following figure.
| 1. | Substrate module: XCMP | Provide run-time pallet to process cross-chain requests to put dTRE data on the TREX blockchain.
| 2. | TREX node update | The TREX node is updated to provide any necessary low-level supports for XCMP protocal and cross-chain dTRE data.

### Milestone 2 — Implement TREX Mining Pool Server and Client Software

- **Estimated duration:** 2 months
- **FTE:**  2
- **Costs:** 20,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | MIT License
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a content creator can generate tradable content and a user can gain early access to this content with a fee. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an online blog that explains how this module works as described in the following figure.
| 1. | TREX mining server | A TREX node which host a mining pool and access connection from remote miners and send rewards to miners. To protect the consensus against attacks from cluter computers, the mining pool needs to host a large hash table so that the mining efficiency is close to the cluster architecture coordinated by a center.
| 2. | TREX mining client | A TREX light client which automatically connect to a mining pool and use local CPUs to make contribution for mining new blocks.

## Future Plans


- In short term, our team is working on landing the first dTRE infrastructure on the Web3 frontier and promoting the technology in the Polkadot/Substrate ecosystem.
- As long as more funding and resource are allocated, a new GPU mining program will be developed and integrated into the TREX node.
- In long run, we focus on expanding the cross-chain applications and interoperability with the Polkadot ecosystem. We are working on many software tools, deployable containers, and API libraries for dApp developers using dTRE technology in their applications. While more and more users and dApp devs join the TREX network, we will design the second layer solution with the PoS/PoW hybrid consensus to reduce the data insertion fee on the layer-1 network so that dTRE applications can be more affordable.


## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation Website and Twitter.
