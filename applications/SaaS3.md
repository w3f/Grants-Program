# W3F Grant Proposal

> This document will be part of the terms and conditions of your agreement and therefore needs to contain all the required information about the project. Don't remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with a `>` (such as this one) can be removed.

- **Project Name:** SaaS3
- **Team Name:** SaaS3 Lab 
- **Payment Address(USDT):** 0x8341e551B0AE5E5905C20A112b123b5F797612f3
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

### Overview
#### Dilemma of web3 Ecosystem - Few web3 applications regardless of rich abundant apps in web2. One of the major challenges for web3 is totally different development stacks. 
For instance, most of the web2 projects and dependencies are based on Java, C++, PHP, etc., while web3 requires another totally different technical stacks such as Solidity, Motoku, or Substrate on EVM / WASM which hinders web2 developers to build web3 applications. 

![image](https://user-images.githubusercontent.com/95557343/157393726-c22c47d2-a4d0-4335-b890-29d6fad4417c.png)


SaaS3 project aims to deliver a fully decentralized software as a service (SaaS) network with highly scalable, crypto token incentivized and results in a solution that can serve as the application interface (API) and software service platform for web3. 
SaaS3 is devoted to transforming traditional web2 projects to web3 services by decentralized docker runtime (dRuntime). 
Particularly, regardless of development stack differences, any Linux-based Web2 projects can be deployed on our platform for providing web3 services. 
Essentially, SaaS3 is an off-chain scaling technique of layer-2 which utilizes cheap off-chain docker computation to replace high-priced on-chain WASM / EVM runtime, while still remaining computation decentralization by delegated proof of stake (DPoS) consensus. 
Therefore, such layer-2 off-chain is not only for computation but technical development stacks. 
The SaaS3 can not only be utilized to decentralize computational providers but also used to mint patent-NFT to protect creator intellectual property.
The service creators could earn a patent fee by holding those pNFT or selling them to the NFT marketplace.  
As a result, the SaaS3 project will bridge web2 projects to web3 services for a flourishing ecosystem and achieving creator economy in a truly decentralized and trust-minimized way. 
This grant will allow us to develop several pallets to implement a parachain with substrate framework on Polkadot / Kusama. 

SaaS3 as a part of Polkadot / Kusama / web 3 Ecosystem and has the following properties:

  - Bridge - Patent and monetize abundant web2 projects as decentralized web3 software services in a very short time with extremely cheap cost. 
  - No Middleman - Cheap fee for service users compare with centralized SaaS products.
  - Security - Improve the security for a system by DPoS consensus where miners are backed by token stakers with a reward and punishment mechanism.
  - Reliability - Strengthen robustness for service by computation decentralization and dRuntime redundancy of miners.
  - Green - Save energy and reduce the service cost by making use of spare computation resources for mining.
  - Creator Economy - Protect intellectual properties by patent-NFT (pNFTs) for service creators.

  
### Project Details

#### Architecture

![image](https://user-images.githubusercontent.com/95557343/157395059-1f4924c3-d64d-4399-b5cb-79b8eecef4d5.png)

Decentralized docker runtime (dRuntime) is the middleware between three roles: web2 project dockers, computation power, and services user:

  - Users pay $SAAS to miners and creators to use web3 software services. 

  - Miners earn 95% user-paid $SAAS to execute the software on their hardware. Each miner can run multiple software services with dRuntime cache (dCache) to maximize their throughput. Such cross-miner redundancy delivers dRuntime to achieve decentralization for web3

  - Creators earn 5% users-paid $SAAS as patent fee since they are web2 projects developers who write code to build softwares. 

<img src="https://user-images.githubusercontent.com/95557343/157394031-1ec087f2-be1d-45bb-9ad4-d3f7f9eafa00.png" width="512">


##### Security & Off-chain Miner Consensus 
Similar to API3 insurance, we utilize Delegated Proof of Staking (DPoS). Particularly, the token stakers stake their coin to miners as the collateral which is the same conception with that nominators nominates validators in Polkadot / Kusama. 
Such backs insurance services protect users from damages caused by miners' malfunctions. Besides, the user could raise a sue on SaaS3DAO or Kleros court to slash the miner's stake to compensate the user. 

###### User Sue Procedure
Once the service user notices a malfunction, they will assess damages and make an on-chain sue claim. 
The staked tokens or collaterals have a lock period to prevent stakers from front-running claims, i.e., withdrawing as soon as a miner malfunction to evade claims.
On the other hand, the user is required to stake funds to be able to make a claim to disincentivize abuse.
The SaaS3DAO can escalate the sue claim to determine whether should pay out the claim to the user. Once a claim is accepted by SaaS3DAO, the user-claimed amount tokens will be transferred to compensate the user.
This corresponds to punishment on the malfunction miner will be applied to stakers to cause damages with proportion to the amount they have staked; For instance, a user who has staked tokens that makeup p% of the entire pool will pay p% of an accepted claim.
Such reward and punishment mechanism cloud guarantee the miner's loyalty and decrease the risk of potential attacks much lower such as the Sybil attack.

##### Implementation Layers

![image](https://user-images.githubusercontent.com/95557343/155807244-b10e6228-edf9-479a-add9-b4c347f62e2e.png)

#### Technologies

1. Substrate
2. Docker
3. Virtualization Technology
4. Deep learning frameworks: Pytorch, Tensorflow, MxNet, Caffe
5. libp2p
6. IPFS
7. gRPC
8. Rust
9. Substrate front-end template
10. Go

#### Components

1. **Location Delegated Proof of Stake (LDPoS)**
We adopt a user location-based optimization for DPoS consensus to improve network throughput for off-chain dRuntime execution. 
Specifically, the user's request will be sent to the geographical nearest 10 miners (e.g., determined by network latency) which are determined by network latency and each of them should have a good amount of stakes such as the top 100 in the overall stake rank list. 
Finally, only the most staked miner among those 10 nearest can execute the request and achieve rewards. In such a mechanism, the users not only cloud call the services with low net-latency and good experience but also DPoS consensus. 
It also could mitigate miner's congestion. Nevertheless, it sacrifices the tolerable security a little. 

<img src="https://user-images.githubusercontent.com/95557343/157394572-683ee606-7e25-4755-adbb-de88c456fe8c.jpg" width="512">

2. **dRuntime**
dRuntime is decentralized docker runtime and aims to run any SaaS services on distributed miner network. Essentially, it is an off-chain scaling for on-chain WASM or EVM runtime for Polkadot or Ethereum. 

3. **dCach**
dRuntime cache is a 3-level caching mechanism to guarantee high performance and large throughput for dRuntime.  

<img src="https://user-images.githubusercontent.com/95557343/157394601-8a6d1bd4-cefa-4dc9-b4c4-d85098fda6d8.jpg" width="512">

4. **SaaSDAO**
The governing body of the SaaS3 project consists of three parts: inventor proposal evaluation, user litigation trial, and SaaS3 development.

<img src="https://user-images.githubusercontent.com/95557343/157394839-c6df5230-1800-454d-9a61-e90272459865.png" width="512">

5. **pNFT** 
A tradable patent NFT is minted when a creator submits a docker proposal and gets SaaS3DAO acceptance. pNFT represents the beneficial right of a creator to earn the patent fee.

6. **Miner Network**
It is implemented by pallet-dRuntime and consists of all the computational power providers to offer decentralized Software as a Service which undertakes to execute dDocker to reply DeResponse for user's DeRequest. All the dDockers are deployed by Creators on each miner. Thus, one miner is crashed other miners could follow up to replace the old one. Miner-level redundancy could guarantee the decentralized and robustness of the SaaS3 network. 

### Technical Implementation Diagram
We will implement 5 pallets: `pallet-entity`, `pallet-service`, `pallet-DAO`, `pallet-miner`, and `pallet-stake` where `pallet-service` is the core component of the project.

![image](https://user-images.githubusercontent.com/95557343/157401209-cda096af-6eb6-4731-962a-e7699a2e9652.png)


### Ecosystem Fit

- Regardless of web2 library dependencies and technical stack, those web2 based projects can be patented and monetized to decentralized web3 software services through SaaS3 protocol.
- SaaS3 cloud potentially replace centralized SaaS/API providers such as [Salesforce](https://appexchange.salesforce.com), [Microsoft Azure](https://docs.microsoft.com/en-us/rest/api/azureml/) and [Google AI](https://cloud.google.com/products/ai).  
- SaaS3 combines millions of users, computational power providers with software creators in such a harmonious way for offering extremely low costing and reliable services. SaaS3 aims to become the world's largest decentralized SaaS platform based on Polkadot / Kusama to provide high-quality API services at extremely cheap prices. 
- Interaction with other parachain of Polkadot / Kusama is expected. For instance, our pNFT can be traded in any NFT marketplace which is connected with the Relay chain. 
SaaS3's dAPIs also can be utilized to provide data information or computation services for other parachain's specific usage such as AI-related recognition or game-AI algorithms. 

Similar Projects:

- **Livepeer** https://livepeer.org/ It provides a video encoding service instead of general web3 SaaS. 
- **POKT** https://www.pokt.network/ Pocket provides RPC access to Ethereum, Polygon, and a dozen more blockchain networks which is a Platform as a Service (PaaS) rather than SaaS.
- **API3** https://api3.org/ It's a decentralized Oracle to provide off-chain data streaming for smart contracts instead of on-chain computation things to offer a SaaS in web3. 
- **iExec** https://dapps.iex.ec/ iExec provides decentralized applications secure, scalable and easy access to the computing resources they need. 


SaaS market in Dapp, web3.0, and Metaverse:

- **Software Services** For example, the softwares on [Salesforce](https://appexchange.salesforce.com), Office365, Grammarly. 
- **AI Services** Speech2Text, Voice2Text, Image Recognition, UGC-NFT Recognition, Marketing Analysis, Algorithm Recommendation, Bot-AI, Game-AI, Reinforcement Learning, and Behavior Analysis. 
- **Decentralized Data Provider** decentralized oracle such as API3.

### Designs / Mock-ups
![6742e6c196c0ec2354f3e65474c0dd7](https://user-images.githubusercontent.com/95557343/155807321-3d96b3a6-f6c1-4b64-9411-3d75bd7eceb5.png)
![a07096c685597b9faaa8de4bce9956c](https://user-images.githubusercontent.com/95557343/155807345-fd92a0aa-1d5f-44ea-a57a-4f1ec8a4f70c.png)


## Team :busts_in_silhouette:

### Team members
The core team members are top Ph.Ds in computer science who are technical and experienced.

- **Laekshan** was a software engineer in a world-leading company. He is also an expert in IoT
development. He has mined bitcoin since 2015. Therefore, he has a lot of experience in crypto mining and market analysis.

- **Rocky** is the CTO of SaaS3 undertakes SaaS3 protocol design. Currently, he is the presidential postdoctoral fellow in NTU and chief scientist in Singapore Smart City Project. Previously, he was an AI researcher at UCB. Besides, he is also a visiting lecture professor of NTU, NUS. He is also the winner of over 10 hackathons.

- **Nael** is the CPO of SaaS3 to guarantee the high-quality features of dRuntime. He also helps SaaS3 to find more partners to build communities. Besides, he is the founder of Chapa which is an online payment gateway with 30k customers that empowers small merchants and large businesses to accept digital payments from their customers via their APIs. Previously, he was the manager of crypto community manager and market researcher in world-leading companies.

- **Israel** is the core developer of SaaS3 and undertakes the development of the creator submission network. Besides, he is the CTO of Chapa. He is the founder of Colimo City. Previously, He was the AI researcher in Google Brain, MILA of Turing Award Winner Yoshua Bengio’s Lab. He has 4 years of experience in AI development.

- **Haruki** is a Ph.D. in artificial intelligence and vice president of SaaS3 to build dRuntime on p2p network and financing-related works. Currently, he is an AI researcher and blockchain developer. He has written computer programs since he was 14 and got many hackathon awards in the past. 


### Contact

- **Contact Name:** Rocky Yang
- **Contact Email:** contact@saas3.io
- **website:** https://www.saas3.io

### Legal Structure

- **Registered Address:** 71 Nanyang Dr, NTU Innovation Center, Singapore 638
- **Registered Legal Entity:** Giant Whales Corporation

### Team Code Repos

- https://github.com/SaaS3DAO/
- https://github.com/SaaS3DAO/DeAIMainNet
- https://github.com/SaaS3DAO/non-api-nft
- https://github.com/SaaS3DAO/substrate-node-template
- https://github.com/SaaS3DAO/substrate

GitHub accounts of all team members.

- https://github.com/isrugeek
- https://github.com/Marsrocky
- https://github.com/ChinW
- https://github.com/qinwang-ai
- https://github.com/Deslate
- https://github.com/kkazuha
- https://github.com/hugoycj

### Team LinkedIn Profiles (if available)

- https://www.linkedin.cn/injobs/in/israel-goytom-66713011b
- https://www.linkedin.cn/injobs/in/jianfei-yang-55560386/
- https://www.linkedin.cn/injobs/in/haruki-shiraishi-3b015079/

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 6 months
- **Full-Time Equivalent (FTE):**  5
- **Total Costs:** 45500 USDT

### Milestone 1 — SaaS3 Documentation, pallet-entity, pallet-service, pallet-stake, 

- **Estimated duration:** 2.5 month
- **FTE:**  4
- **Costs:** 24000 USD



| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0|
| 0b. | Documentation | Documents containing the description of whole architecture design and technical implementation details for SaaS3 Network. |
| 0c. | Testing Guide | We will provide a full test suite and guide for services usage for `pallet-service`, token stake for `pallet-stake`. `pallet-entity` will be tested for service usage and payment.|
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an **article**/workshop that explains (what was done/achieved as part of the grant). (Content, language and medium should reflect our target audience described above.)
| 1. | pallet-entity| [pallet_assets](https://crates.io/crates/pallet-assets) is utilized for implementation with a minor change to fit SaaS3 project. An user and creator both can be implemented as entity. They are same in implementation perspective. | 
|    | Functions     | No public function | 
| 2. | pallet-service| `pallet-service` is core implementation of SaaS3 project which is a key middle ware and interacted a lot with other pallets' functions. A service is also a pNFT to indicate the beneficial right for service creator. NFT related part is implemented based on [RMRK core pallet](https://github.com/rmrk-team/rmrk-substrate/tree/main/pallets/rmrk-core) which is an extension of pallet-uniques. A marketplace will be set up to trade those NFTs such as [Singular](https://singular.rmrk.app), RMRK, and [Kodadot](https://kodadot.xyz). | 
|    | Functions| 1). `pub fn subscribe_service(eid:u32, pNFT_id:u64, timespan:u256, count:u256) ` User call this function to pay token to subscribe software service. <br> 2). `pub fn create_service(eid:u32, pid:u32)` Once a proposal is accepted, the proposal corresponding docker will be deployed as a service. <br> 3). `pub fn use_service(eid:u32, ip_address:Vec<u8>, pNFT_id:u64)` User call this function to allocate a reliable miner to use software service. <br> 4). `fn check_service(eid:u32, pNFT_id:u64)` The function can automatically check whether the service is available for usage. <br> 5). `fn distribute_rewards()` It can distribute subscription fee to miners and creators with a predefined ratio.|
|    | Storage| `ServiceList get(fn pNFT_list): map hasher(blake2_128_concat) u32 => Vec<PNFT>;`<br>  `SubscriptionList get(fn subscription_list): map hasher(blake2_128_concat) u32 => Vec<Subscription>;` <br> `Usages get(fn get_usages): map hasher(blake2_128_concat) u32 => Vec<Usage>; `|
|    | Struct| `pub struct PNFT<pNFT_id, docker_file, fee, eid, readme>` <br> `pub struct Subscription<sub_id, eid, pNFT_id, time_end, count>` <br> `pub struct Usage<us_id, sub_id, mid>`|
| 3. | pallet-stake| This pallet implements rewards and slashes related functions for token stakers to stake their tokens to miners for DPoS consensus. [pallet-staking](https://crates.io/crates/pallet-staking) will be utilized for initial implementation and we will finely package it into our pallet-stake. |
|    | Functions|1). `pub fn stake(eid:u32, mid:u32, credits:u32) ` User call this function to stake their credit to miner as collateral. <br> 2). `pub fn stake queryStake(eid:u32, mid:u32)` It returns how many tokens is staked on miner for a specific user which aims for user check. <br> 3). `pub fn queryTotStake(eid:u32, mid:u32)` It returns the total staked tokens for a miner which will be called in `fn use_service` to allocate reliable miners to run services. <br> 4). `pub fn withdraw(eid:u32, mid:u32, credits:u32) ` User call this function to withdraw their tokens from miner. |
|    | Storage|`MinerCollateral get(fn get_miner_collateral): map hasher(blake2_128_concat) u32 => u32;` | 
| 4. | UI & Frontend | This part is implemented by [substrate front-end template](https://github.com/substrate-developer-hub/substrate-front-end-template) The frontend and UI of user-side will be finished in this milestone. |  

### Milestone 2 — Documentation and tutorial for miner and DAO. Development of pallet-miner and pallet-DAO

- **Estimated Duration:** 3.5 month
- **FTE:**  5
- **Costs:** 21500 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0|
| 0b. | Documentation | We will provide both inline documentation of the code and basic tutorials that explains and guides to four roles: User, Miner, Creator, Stakers respectively with some finely detailed examples. For instance, how to set up machines and mine tokens for miners, or how to propose a decentralized docker proposal and submit to SaaS3DAO. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests for four pallets: pallet-miner and pallet-DAO|
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an **article**/workshop that explains (what was done/achieved as part of the grant). (Content, language and medium should reflect our target audience described above). |
| 1. | pallet-miner | The pallet implements on-chain related things for miner to compute off-chain web2 projects on docker runtime. The computational power providers or miners in the network provide software services which aim to execute docker runtime to reply user's dRequest. Each docker can be generally deployed on any miners. The pallet contains logic with off-chain softwares / models executions. |
|    | Functions | 1). `pub fn deploy(eid:u32, mid:u32, pNFT_id:u64)` The function is utilized to deploy one service (ie., pNFT) on a specific miner and build off-chain connection to the user. <br> 2). `pub fn exit(eid:u32, mid:u32, did:u64)` User or on-chain pallet-service call it to exit a service for a specific user on a miner's docker runtime . <br> 3). `pub fn docker_manager()` It is only called at the first time when the miner connects to the blockchain to start a off-chain computation resource management related things such as 3-level dCache dispatch. <br> 4). `pub fn modify_miner_params(mid:u32, args:Vec<u8>)` It is an optional interface for miner to modify some on-chain parameters for adjustment computation services. The implementation will be very careful to cause any security issues. <br> 5). `fn mount_disk(eid:u32, address:Vec<u8>)` The function calls a off-chain program to mount a virtual disk which will be periodically updated to IPFS to save user data. It will be called in `fn deloy()`.|
|    | Struct| `pub struct MinerParams<mid, param_1, param_2, param_3..>` <br> `pub struct EntityData<eid, address>` <br> `pub struct EntityRuntime<eid, did, status>`|
|    | Storage   |  `MinerParams get(fn get_miner_params): map hasher(blake2_128_concat) u32 => MinerParams;` <br> `EntityData get(fn get_entity_data): map hasher(blake2_128_concat) u32 =>  Vec<EntityData>;` <br> `EntityRuntime get(fn get_entity_runtime): map hasher(blake2_128_concat) u32 =>  Vec<EntityRuntime>;`|
| 2. | pallet-DAO | A DAO for creators such as developers to submit their docker proposals to set up services by DAO which has an individual UI website interface. Only accepted proposals are deployed to miners to create services on dRuntime. Another utility is judgement for user sue to determine the punishment of malfunction miners and return sue claimed tokens to user.|
|    |Functions |`pub fn submit_proposal(eid:u32)` Submit a docker proposal to create a service which requires to be audited.  <br> `pub fn vote_proposal(eid:u32, pid:u32)` DAO participants audit and vote the proposal.  <br> `pub fn submit_sue(eid:u32)` User submit a sue claims for malfunction miner. <br>`pub fn vote_sue(eid:u32, sid:u32)` Jury evaluates and votes the sue submission to determine punishment. <br> `pub fn process_proposal(pid:u32)` Process the accepted docker proposal into the next step which will call `pallet-service:fn create_service` to create a service with dRunime. <br> `pub fn process_sue(sid:u32)` Process the accepted sue claims of user to slash malfunction miner. The tokens will be paid to user and treasury with a ratio. |
|    | Struct| `pub struct Proposal<pid, eid, docker_file, readme>` <br> `pub struct Sue<sid, eid, claims, statement>`
|    | Storage| `ProposalList get(fn get_proposal_list): map hasher(blake2_128_concat) u32 => Vec<Proposal>;` <br> `SueList get(fn get_sue_list): map hasher(blake2_128_concat) u32 => Vec<Sue>;`
| 4. | UI & Frontend | This part is implemented by [substrate front-end template](https://github.com/substrate-developer-hub/substrate-front-end-template). The frontend web interface contains DAO procedures related functions which including proposal audit and user sue judgement. A special document website is developed to guide entities to participant DAO events. |  

## Future Plans

- Initially, the parathreads will be utilized to connect the relay chain. Once the initial project goes well, we will participate slot auction. 
- Continue developing and polishing the project to flourish SaaS3 ecosystem to burst the web3 world based on Polkadot / Kusama / Substrate multi-chain system.


## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** 

web3 Foundation Website

**Related Files**

- PitchDeck: https://www.saas3.io/file/PitchDeck_SaaS3.pdf
- SaaS3 website: https://saas3.io
- pNFT Demo (move to RMRK standard soon): https://saas3.io/non-api-nft
- Whitepaper (Beta version will be released soon)

**Other Grants**

- IPFS Open Grant (Accepted)
