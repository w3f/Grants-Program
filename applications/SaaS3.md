# SaaS3

- **Team Name:** SaaS3 Lab 
- **Payment Address(USDT):** 5Fv5fgxcWkRhddCwtsZbQt8JGKaezLorwLkkS6y2TuJ1wFs1
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 1

## Project Overview :page_facing_up:
### Overview

**Summary:  SaaS3 is a protocol in layer2 that is highly scalable, crypto incentivized, and results in a solution that can serve as a decentralized APIs (dAPI) middleware to provide off-chain services to blockchain smart contracts.**

#### Brief Introduction

**Background**

Dilemma of web3 Ecosystem - With functionalities yet to become full-fledged, Web3.0 applications need a rethink of development stacks. For instance, most of the web2 projects and dependencies are based on Java, C++, PHP, etc., while web3 requires another totally different technical stacks such as Solidity, Motoku, or Substrate on EVM / WASM which hinders web2 developers to build web3 applications. 

![image](https://user-images.githubusercontent.com/95557343/157393726-c22c47d2-a4d0-4335-b890-29d6fad4417c.png)

**Our solution - SaaS3 Oracle**

SaaS3 aims to deliver a highly scalable, crypto token incentivized and fully decentralized software as a service (SaaS) network which results in a solution that allows anyone to define and deploy customized oracles according to their Dapp needs. SaaS3 is devoted to transforming traditional web2 API to web3 dAPI.

Essentially, SaaS3 is an TEE powered oracle infrastructure that allows anyone to define and deploy custom oracles according to their Dapp requirements. SaaS3 utilizes TEE technologies, while still enabling decentralization, trustless and secure computation by the secure hardware guarantee of Intel SGX chipset designs and by delegated proof of stake (DPoS) consensus.

Therefore, such an infrastructure is not only for oracles that provide data feeds but also any type of computation which requires safe exchange of data. 

Examples: 

1. Any data feed: 
   - Price of assets (ERC20/NFTs) on CEX and DEX.
   - Random Numbers
   - Weather reports, price of rent of an apartment, supply chain data, FIFA match results...
2. Cross-chain data: 
   - Bridges and cross-chain relayers
3. Computation
   - Decentralized off-chain computation to enable truly decentralized metaverses and games
4. Any Dapp that requires trust:
   - Custodian account managed by TEE for GameFi users that allows them to interact with the blockchain with only web2 api requests.

SaaS3 enables Dapps to become as versatile as any other web2 application available today on the internet. As a result, the SaaS3 project will bridge web2 APIs to web3 dAPIs to flourish web3 ecosystem and achieve creator economy in a decentralized and trust-minimized way. This grant will allow us to develop several ink! smart contracts and a pallet for DAO management.

#### Integration into Polkadot / Kusama

- We planned to developed a parachain on Polkadot as SaaS3 DAO multichain governance centers.
- The major component dRuntime will be implemented in ink!. https://github.com/SaaS3-Foundation/dRuntime-fat

- Collaboration with Phala Network: We have partnered up with Phala Network which is a prominent parachain on the Polkadot ecosystem who will be providing SaaS3 with 15,000+ active TEE miners to enable trustless, permissionless and secure computation for our oracle infrastructure. 

#### Team Motivation

Our team has rich experience in web3 ecosystem, and we are dedicated to achieve secure and decentralized oracles. 

### Protocol Details

#### Mockups/designs

The following figures show UI design of SaaS3:

- Marketplace: explore open oracles and their details.
   - <img width="1440" alt="Marketplace-bg1@2x" src="https://user-images.githubusercontent.com/95557343/205898646-14558785-ecea-48c8-a680-77b49a3cf422.png">
   - <img width="1440" alt="Marketplace2@2x" src="https://user-images.githubusercontent.com/95557343/205898739-f7f601cf-43a4-4f67-a4a9-2b2e653f9c5f.png">

- Oracles deployment: deploy oracles within few clicks.
    - <img width="1440" alt="Deploy Oracles@2x" src="https://user-images.githubusercontent.com/95557343/205898840-b31d3077-924d-4176-9f9b-a5badaf566b5.png">
    - <img width="1440" alt="Deploy Oracles-10@2x" src="https://user-images.githubusercontent.com/95557343/205899528-e44a3918-a120-43a3-b105-55bc0dd247eb.png">

- User Profile: view user information, wallet information, stake information, and deployed oracles.
    - <img width="1440" alt="Profile-planA1@2x" src="https://user-images.githubusercontent.com/95557343/205898934-9eabcaba-bf6e-4a39-8139-48f137e3ade1.png">


#### Technology Stack

- Substrate
- TEE
- gRPC
- Rust
- ink!


#### SaaS3 Protocol
SaaS3 protocol constructs a permissionless oracle network (PoN) to eliminate centralized computation resources to deliver developers the ability to create their customizable oracle (dAPI) by one-click permissionlessly and hostlessly.

**Permissionless Oracle Network (PoN)**

In PoN, four roles are involved: creator, miner, staker, and requester, and each role should accommodate SaaS3 protocol to stake and contribute to maintaining the high-quality services as shown in the following figure.
<img width="894" alt="Screenshot 2022-11-12 at 4 41 30 PM" src="https://user-images.githubusercontent.com/95557343/201471296-4f89fe44-9b72-43d4-ab2d-c6221c8d1a64.png">

- **Creator** is the role of submitting dRuntime to create an oracle (dAPI) service, who can be any kind of off-chain service providers such as crypto exchanges, events organizers, or software developer. 
- **Staker** is anyone participating in the delegated proof of stake (DPoS) mechanism. 
- **Miner** acts as the computational worker to execute dRuntime on the hardware. TEE workers in Phala Network will be adopted in SaaS3 ecosystem to undertake this critical mission. 
- **Requester** calls the SaaS3 protocol to request off-chain services such as particular data feeds or off-chain computation results.

**Decentralized Serverless Runtime (dRuntime)**

In SaaS3, dRuntime (Decentralized Serverless Runtime) is a concept against centralized deployed runtimes which are centralized on cloud computing servers. dRuntime can be deployed on miner networks in a decentralized way by SaaS3 oracle launchpad. The launchpad is a Dapp for oracle creators to create their oracle with one click. Particularly, the creators should integrate the dAPI programs and settings into the dRuntime on the launchpad. Therefore, one oracle can be executed by multiple miners to achieve off-chain services instead of trusting an off-chain single point.

There are four phases for dRuntime execution:

1. **Request**: The Dapp smart contracts will call the protocol contract to request a specific off-chain service. The protocol contract will record the request specifications in blockchain event logs. 
2. **Filtering**: For each on-chain request, the protocol will generate a lightweight PoW (LPoW) task. The miners will compete to win the execution permissions by solving the LPoW task. The fastest 3 miners will win the execution permissions to run the API. Besides, the winners should be in the top-100 stake list, in other words, they should have a good amount of token stakes. 
3. **Execution**: The 3 winners in the last phase execute the corresponding API to retrieve the off-chain services. 
4. **3-zkc**: An on-chain verification is performed with three miners’ responses to aggregate the final output with the reward/slash on miner stakes.




#### Architecture

<img width="874" alt="SaaS3 architecture" src="https://user-images.githubusercontent.com/95557343/201471044-496daafd-a3a5-4639-94e3-96ba5248133d.png">

  - Target Chain: SaaS3 protocol will be deployed on multiple blockchains, such as Polkadot and Kusama.
      - Dapp: decentralized applications which adopt SaaS3 oracle.
      - SaaS3 Protocol: a proxy smart contract which accept requests from Dapp and push them to Phat Rollup Anchor. 
      - Phat Rollup Anchor: a smart contract built by Phala Network. It performs offchain rollup and commuicates to a phat contract dRuntime. Repo: https://github.com/Phala-Network/phat-offchain-rollup
  - SaaS3 Launchpad: a web-based Dapp which allows oracle creators to one-click launch their customizable oracle hostlessly and permissionlessly. By using Factory contract, oracle creators can deploy dRuntime phat contract easily. 
  - Phat contract: the innovative programming model enabling off-chain computation which is created by Phala Network. It’s also known as Fat Contract as a practice of the "Fat Protocol and Thin Application" concept, and for its rich functionalities compared with existing smart contracts. Phat Contract uses Rust-based ink! language.
         
        - Offchain Scheduler: a phat contract built by Phala Network.
        - dRuntime: dRuntime (Decentralized Serverless Runtime) is a concept against centralized deployed runtimes which are centralized on cloud Computing servers. It can be deployed on miner networks in a decentralized way by SaaS3 oracle launchpad. 
  - Phala Workers: are the TEE computation nodes with intel SGX chips which provide a hardware-encrypted sandbox for program executions with privacy-preserving and trustful computations. 
  - Web2: includes all web2 services which provide API services, such as pricing reporting, event news, graph rendering and deep learning.

#### Private Oracle

Phala network is exploited in SaaS3 as a decentralized computational infrastructure with hardware-encrypted TEE chips. Trusted Execution Environment (TEE) is a special area in some processors that provides a higher level of security including isolated execution, code integration, and state confidentiality. Thus, the oracle creators can easily store the API key or private data inside the fat contract which cannot be leaked out or be visible to miner operators. 

Private oracle is a particular kind of dAPI that only can be requested by the oracle creators themselves. Regardless of public oracles which only provide public data feeds, there is a large market for private oracles to connect blockchains with private off-chain services. To our knowledge, SaaS3 is the first oracle platform to support private oracle setup with a high-security architecture and one-click fast development.

#### SaaS3 DAO
SaaS3 DAO refers to the decentralized autonomous organization (DAO), a governance body established with a full-fledged mechanism for token economics.

Since the SaaS3 protocol will be deployed on multiple blockchains, each blockchain should have its own SaaS3 DAO. To manage different DAOs among multiple blockchains, SaaS3 will launch a Polkadot crowdloan to register a dedicated SaaS3 DAO parachain. The following figure demonstrates the multi-DAO structure.

![Multi-DAO Structure](https://user-images.githubusercontent.com/20609724/205201673-8432c380-2751-48fc-86a0-8bb4d3335e42.png)

**Treasury**

Each SaaS3 DAO has a treasury to maintain a pool of tokens that come from the commissions of dAPI subscription fee, and malfunction scrutiny and are designated funds for court jury rewards, protocol maintenance, and other DAO events. 

DAO treasury receives tokens when: 

- An oracle malfunctions due to inherent design flaws.
- A miner node malfunctions due to miner dishonesty. 
- For each successful fulfillment of a dAPI subscription, the treasury receives a commission from a portion of the subscription fee payable by the user. 

For each court ruling, the treasury sends to the Jury as a reward for their participation in the governance. Since SaaS3 protocol is a multi-chain deployment, SaaS3 DAO parachain on Polkadot has the largest treasury to manage other treasuries among multiple blockchains.

**Court DAO**

A court as a component of a decentralized autonomous organization has been adopted as a medium of governance to consolidate consensus, justify DAO legitimacy and improve governance. 

On the Court DAO, there is a team of Jury members, consisting of 101 API creators that contribute most to the SaaS3 ecosystem which can be quantized by their API earnings. The court DAO receives the lawsuit from suing actors, composed of users and miners. The Jury members will make a judgment on the lawsuit by voting. If the suing actors win the lawsuit, the entities being accused will be penalized, the suing actor will be compensated for their loss and Jury members will be rewarded for their contribution to the case. 

Court DAO is charged with settling disputes regarding the performance of dAPI to hold dishonest actors accountable. Where there is a dAPI user who experiences a dAPI malfunction and fills a claim at Court DAO for scrutiny, Court DAO commences processing the case. Court DAO is seated by a group of jury members, who receive rewards for rulings. Rulings at Court DAO result in two outcomes; either the party who has filed the claim wins and the liable party has their staked tokens slashed, or the claim is dismissed.

### Ecosystem Fit

- Where and how does your project fit into the ecosystem?

  - SaaS3 provides a native and secure oracle solution to Dapps, empowering all DeFi projects in Polkadot / Kusama ecosystem.
  - SaaS3 holds potential for interaction with other parachains of Polkadot / Kusama such as Phala(Oracle Miner) and Moonbeam(Oracle User). 

- Target Audience: Dapp developers and parachain developers. SaaS3 oracle allows them to define and deploy customized oracles according to their Dapp needs.

- What need(s) does your project meet?

  - Although web2 applications are highly dependent on centralized libraries and technical stack, they have a potential case of monetization if migrated to web3 as decentralized web3 dAPI through SaaS3 protocol.
  - SaaS3 brings millions of Dapp users, providers of computing resources and creators into a harmony and an organic ecosystem, with lowered costs and reliable services. 
  - SaaS3 facilitates the privacy computation and TEE adoption in web3.

- Compared to similar projects:

  - In Substrate / Polkadot / Kusama ecosystem:

    - [Kylin Network](https://www.kylin.network/): It offer less secure oracle solution, and its oracle nodes are neither permissionless nor decentralized .

  - In related ecosystems:
    - [Chainlink](https://chain.link/): It is not dynamic, and it is hard to create customized oracle. Also, it does not have decentralized computation.
    - [API3](https://api3.org/):  Permission and centralized host server required. 
    
    <img width="1233" alt="Competitor chart" src="https://user-images.githubusercontent.com/95557343/201536485-40b4e700-b218-4b8f-a437-2aca88fca53f.png">


## Team :busts_in_silhouette:

### Team members
The core team members are top Ph.Ds in computer science who are technical and experienced.

- **Steven** is a Ph.D. in artificial intelligence and vice president of SaaS3 to build dRuntime on p2p network and financing-related works. Currently, he is an blockchain researcher and blockchain developer. He has written computer programs since he was 14 and got many hackathon awards in the past. 

- **Rocky** is the CTO of SaaS3 undertakes SaaS3 protocol design. Currently, he is the presidential postdoctoral fellow in NTU and chief scientist in Singapore Smart City Project. Previously, he was an AI researcher at UCB. Besides, he is also a visiting lecture professor of NTU, NUS. He is also the winner of over 10 hackathons.

- **Nael** is the CPO of SaaS3 to guarantee the high-quality features of dRuntime. He also helps SaaS3 to find more partners to build communities. Besides, he is the founder of Chapa which is an online payment gateway with 30k customers that empowers small merchants and large businesses to accept digital payments from their customers via their APIs. Previously, he was the manager of crypto community manager and market researcher in world-leading companies.

- **Israel** is the core developer of SaaS3 and undertakes the development of the creator submission network. Besides, he is the CTO of Chapa. He is the founder of Colimo City. Previously, He was the AI researcher in Google Brain, MILA of Turing Award Winner Yoshua Bengio’s Lab. He has 4 years of experience in AI development.

- **Tianyi, Song** is the core developer of SaaS3, and a former dev team manager of SkyCloud Co., Ltd. He is an expert in cloud computing development and has a lot of experience in bridging web2 to web3.

### Contact

- **Contact Name:** Rocky Yang
- **Contact Email:** contact@saas3.io
- **website:** https://www.saas3.io

### Legal Structure

- **Registered Address:** 71 Nanyang Dr, NTU Innovation Center, Singapore 638
- **Registered Legal Entity:** SaaS3 Foundation LTD.

### Team Code Repos

- https://github.com/SaaS3-Foundation
- https://github.com/SaaS3-Foundation/dRuntime-fat
- https://github.com/SaaS3-Foundation/druntime-rs
- https://github.com/SaaS3-Foundation/SaaS3-Protocol
- https://github.com/SaaS3-Foundation/abi
- https://github.com/SaaS3-Foundation/autocall
- https://github.com/SaaS3-Foundation/SaaS3-Dapp

GitHub accounts of all team members.

- https://github.com/isrugeek
- https://github.com/Marsrocky
- https://github.com/qinwang-ai
- https://github.com/ChinW
- https://github.com/Deslate
- https://github.com/kkazuha
- https://github.com/hugoycj
- https://github.com/songtianyi

### Team LinkedIn Profiles (if available)

- https://www.linkedin.cn/injobs/in/israel-goytom-66713011b
- https://www.linkedin.cn/injobs/in/jianfei-yang-55560386/
- https://www.linkedin.com/in/steven-wong-3b015079/

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 3 months
- **Full-Time Equivalent (FTE):**  2
- **Total Costs:** 10000 USDT

### Milestone 1 — dRuntime in ink!

- **Estimated duration:** 1 month
- **FTE:**  2
- **Costs:** 5000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0|
| 0b. | Documentation | We will provide a basic documentation that explains how dRuntime works, and how users can use SaaS3 oracle. |
| 0c. | Testing Guide | We will provide a full test suite and guide for testing SaaS3 oracles. |
| 0d. | Docker | We are not able to provide a Dockerfile, because dRuntime is written in Phat Contract, and it is finally compiled to WASM. |
| 0d. | Article | We will publish an article that explains the whole workflow of SaaS3 protocol. |
| 1. | dRuntime-fat | dRuntime implementation in Phat Contract which is a superset of ink!. |
|        | Functions | `pub fn handle_rollup()` Entry point for Phat Rollup Anchor<br>`pub fn config(rpc, anchor)` Configure the rollup target.|
| | Structs | `struct Config { rpc, anchor, url, apikey }` |
|        | Storage | `pub struct Oracle { owner, config }` |


### Milestone 2 — SaaS3 DAO Pallets

- **Estimated Duration:** 2 months
- **FTE:**  2
- **Costs:** 5000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0|
| 0b. | Documentation | We will provide both inline documentation of the code and basic tutorials that explains and guides to SaaS3 DAO. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests for pallet-DAO |
| 0d. | Docker | We will provide a Dockerfile that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an **article** that explains the usage of SaaS3 DAO. |
|     1. | pallet-court | A pallet of court DAO, dAPI user raise sue to determine the punishment of malfunction miners / services and return sue claimed tokens to dAPI user. |
|  | Functions | `pub fn submit_sue(origin, value, eid)` dAPI User submit sue claims for malfunction. <br> `pub fn vote_sue(origin, value, eid, sid)` Jury evaluates and votes the sue submission to determine punishment.<br> `pub fn process_sue(origin, sid)` Process the accepted sue claims of dAPI user to slash malfunction miner / dAPI. The tokens will be paid to dAPI user and treasury with a ratio. |
|    | Struct| `pub struct Sue{sid, eid, claims, statement}` |
|    | Storage| `pub type SueList = StorageValue<_, BoundedVec<SueId, MaxSueNum>, ValueQuery>;` List of all sue claims. |
| | Events | `SueSubmitted { user, value, eid }`<br>`SueVoted { user, value, eid, sid }`<br>`SueCompleted { sid }` |
| 2. | pallet-treasury | A pallet of SaaS3 DAO treasury. It sends or receives token based on different situations. It is built on top of [FRAME Treasury Pallet](https://github.com/paritytech/substrate/tree/master/frame/treasury), with some additional functionalities. |
|  | Functions | `pub fn receive(origin, value, category)` Receive tokens with categorized reason, such as commission fees and miner node malfunctions. <br>`pub fn claim_rewards(origin, value)` Court Jury members claim their rewards for their contribution in Court DAO. |
| | Storage | `pub type JuryRewards = StorageMap<_, Twox64Concat, AccountId, Rewards, OptionQuery>;`  Mapping from account id to rewards which can be claimed. |
| | Events | `Received {from, value, category }` <br>`Claimed { user, value }` |
| 3. | UI & Frontend | This part is implemented by [substrate front-end template](https://github.com/substrate-developer-hub/substrate-front-end-template). The frontend web interface contains DAO procedures related functions which including user sue judgement. A special document website is developed to guide entities to participate in DAO events. |

## Future Plans

- Initially, Phala will be exploited as the oracle miner provider, but SaaS3 will build the own TEE chain in the future.
- Continue developing and polishing the project to flourish SaaS3 ecosystem to burst the web3 world based on Polkadot / Kusama / Substrate multi-chain system.


## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** 

Web3 Foundation Website

**Related Files**

- SaaS3 website: https://saas3.io
- Whitepaper: https://www.saas3.io/file/SaaS3Whitepaper.pdf

**Other Grants**

- IPFS Open Grant (Accepted)
