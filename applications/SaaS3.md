# W3F Grant Proposal

> This document will be part of the terms and conditions of your agreement and therefore needs to contain all the required information about the project. Don't remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with a `>` (such as this one) can be removed.

- **Project Name:** SaaS3
- **Team Name:** SaaS3 Lab 
- **Payment Address(USDT):** 0x8341e551B0AE5E5905C20A112b123b5F797612f3
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

### Overview
#### Dilemma of web3 Ecosystem - With functionalities yet to become full-fledged, Web3.0 applications need a rethink of development stacks. 
For instance, most of the web2 projects and dependencies are based on Java, C++, PHP, etc., while web3 requires another totally different technical stacks such as Solidity, Motoku, or Substrate on EVM / WASM which hinders web2 developers to build web3 applications. 

![image](https://user-images.githubusercontent.com/95557343/157393726-c22c47d2-a4d0-4335-b890-29d6fad4417c.png)


SaaS3 project aims to deliver a fully decentralized software as a service (SaaS) network with highly scalable, crypto token incentivized and results in a solution that can serve as the application interface (API) layer for web3. 
SaaS3 is devoted to transforming traditional web2 projects to web3 services by decentralized docker runtime (dRuntime). 
Particularly, regardless of development stack differences, Linux-based Web2 APIs can be deployed on our platform for providing web3 services. 
Essentially, SaaS3 is an off-chain scaling technique of layer-2 which utilizes cheap off-chain docker computation to replace high-priced on-chain WASM / EVM runtime, while still remaining computation decentralization by delegated proof of stake (DPoS) consensus and on-chain zero knowledge proof. 
Therefore, such layer-2 off-chain scaling is not only for computation price but technical development stacks compatible. 
The SaaS3 project aims to decentralize computational providers and mint income-NFT to earn profits.
The service creators could earn an income fee by holding those iNFT or selling them on NFT marketplace.  
As a result, the SaaS3 project will bridge web2 projects to web3 services to flourish web3 ecosystem and achieve creator economy in a decentralized and trust-minimized way. 
This grant will allow us to develop several pallets to implement a parachain with substrate on Polkadot / Kusama. 

SaaS3 as a part of Polkadot / Kusama / web 3 Ecosystem and has the following properties:

  - Bridge - Monetize abundant web2 projects as decentralized web3 services in a very short time with extremely cheap cost. 
  - No Middleman - Cheap fee for service users compare with centralized SaaS products.
  - Security - Improve the security for a system by PoS consensus and zero knowledge proof for miner network. Web3 API services are backed by token stakers (DPoS) with a reward and punishment mechanism.
  - Reliability - Strengthen robustness for service by computation decentralization and dRuntime redundancy of miners.
  - Green - Save energy and reduce the service cost by making use of spare computation resources for API computation.
  
### Protocol Details

#### Architecture

![image](https://user-images.githubusercontent.com/95557343/157395059-1f4924c3-d64d-4399-b5cb-79b8eecef4d5.png)

Decentralized docker runtime (dRuntime) can be defined as the middleware that enables the following actions to be executed by three parties. The first party is the docker creator, the party that creates software services as a result of development labor. The second is the computational node, or better known as the 'miner', namely the party that performs the computational tasks. They are hereafter referred to as 'nodes' or 'miners'. The third is the service user, who sends requests and pays to access the API. Their actions are detailed below.

  - To access a web3 API, users pay $SA3 tokens to nodes as the transaction fee and to software creators as the royalty fee. 

  - The node(s) are rewarded to execute the software on their equipment. Importantly, each miner can run multiple API services with dRuntime cache (dCache) to maximize the throughput.

  - The Creator receives the royalty fee as the reward for their commitment to the docker development; they are the author of API codes. 

<img src="https://user-images.githubusercontent.com/95557343/159318152-e35babbf-7acd-4217-b781-b67f657dd514.png" width="512">


##### Security & Off-chain Miner Consensus 

- Miner security - To qualify, a miner is required to stake a particular amount of tokens as collateral (POS). Each request for API will trigger an on-chain zero-knowledge proof check (zk-c), which determines whether the node is  rewarded or punished. 

- API security - Similar to API3 insurance, API security is achieved via Delegation Proof of Staking (DPoS). Particularly, the Service provider is required to stake an amount of tokens at the time of submitting the API service. The amount is set at a default value in their first submission and is adjusted in proportion to the service income. Besides, the token holders are able to stake on the service as a collateral and share profits with creator. The mechanism is established following the same vein of the concepts in Polkadot / Kusama, including staking, nomination, and validation.
 
The process decribed above establishes a de facto safeguard mechanism, sheltering users from potential malfunctions of the computational node or the API service, and when available providing remedies in compensation. 

##### Collateral and Sue Claims
In the case of a malfunction, the user detects the misperformance and assesses the damages and losses, and is able to lodge a sue claim published on the blockchain. In supplement, the staked tokens or collaterals are 'locked' for a period, a mechanism to discourage stakers from 'front-running claims', i.e. withdrawing the staked token as soon as a miner or service malfunctions to evade claims. On the other hand, the user is required to stake funds to be able to make a claim, which elevates the cost of abuse. The SaaS3DAO deliberates on the sue claim and decides whether a remedy should be made to the victimized user. Once a claim is passed in SaaS3DAO, the amount of tokens as has been claimed will be transferred to the user in compensation. 

The same mechanism also applies to the punishment meted out for the node(s) that malfunctioned, and the staker(s) that nominated the node(s), with the punishment in proportion to the staked amount. For example, a user who has staked tokens that makeup p% of the entire pool will pay p% of an accepted claim. Such a reward-and-punishment mechanism encourages nodes to act in good faith and better service quality. Hence a much lower risk of potential cyber threats such as the Sybil attack.

##### Implementation Layers

![image](https://user-images.githubusercontent.com/95557343/155807244-b10e6228-edf9-479a-add9-b4c347f62e2e.png)

#### Technologies

1. Substrate
2. Docker
3. Virtualization Technology
4. Deep learning frameworks
5. libp2p
6. IPFS / ARWeave
7. gRPC
8. Rust
9. Substrate front-end template
10. Go

#### Components

1. **Location Proof of Stake (LPoS)**
Regarding the miner network, we deploy zero knowledge proof and adopt a user location-based optimization for PoS consensus, thus improving the network throughput for off-chain dRuntime execution. Specifically, when a user sends a request, a list of miner candidates will be generated, consisting of 10 nodes in the closest locations, (e.g., determined by network latency) which are determined by network latency. Meanwhile, since all nodes are required to have staked a amount of tokens, nodes are ranked in a list of, for example, 100 according to the staked amount. A miner has to be among the leading three stakers and the ten nearest nodes to qualify for executing the requested software and receiving the rewards, while the on-chain zero-knowledge check is carried out. Admittedly, the network may to some degree hurt tolerable security. Nevertheless, the user will be able to access the API service not just at low net-latency but also backed by the DPoS consensus with zk proof (for more about 3-zkc, please refer to 7 or 9). It should also be noted that node congestion is mitigated en passant.

<img src="https://user-images.githubusercontent.com/95557343/157394572-683ee606-7e25-4755-adbb-de88c456fe8c.jpg" width="512">

2. **dRuntime**
dRuntime refers to a decentralized docker runtime which execute API services in a network of distributed computing resources. It is essentially an off-chain approach to scaling up computation for on-chain runtime, such as WASM or EVM in Polkadot or Ethereum networks. 

3. **dCach**
dRuntime cache is a 3-level caching mechanism to guarantee high performance and large throughput for dRuntime.  

<img src="https://user-images.githubusercontent.com/95557343/157394601-8a6d1bd4-cefa-4dc9-b4c4-d85098fda6d8.jpg" width="512">

4. **SaaSDAO**
SaaSDAO refers to the decentralized autonomous organization charged with governance duties.
<img src="https://user-images.githubusercontent.com/95557343/159328187-2b0104df-9e53-4000-b4bc-a122adc97fbf.png" width="512">

5. **iNFT** 
iNFT refers to a tradable income NFT that is minted when a creator submits a docker image to create a service. iNFT allows the service creator to earn royalty fee from running the container.

6. **Miner Network**
Miner Network The miner network is implemented by pallet-dRuntime and consists of all the providers of computational capabilities. The network offer decentralized Software as a Service which undertakes to execute dDocker to reply DeResponse for user's DeRequest. All the dDockers can be deployed by creators on each miner. Thus, other nodes are called in replacement should any node break down. The 'redundancy' of computing nodes, which is at the miner-level, helps the SaaS3 network maintain its decentralization features and remain robust.

7. **On-chain 3-person zero knowledge proof check (3-zkc) and rewards** 
Each API call will be executed by 3 miners. Therefore, the hash values generated following the three responses will be compared against each other for agreement. The 3-zkc is performed enabled by an callable, on-chain pallet-function. There are multiple scenarios, as follows.
   - The three hash values are in agreement. No one will being slashed.
   - Only two values are in agreement, the check still gains approval. Another miner is found inconsistent and will be slashed on its token stake.
   - There is no agreement among the three nodes. In this case, the API call returns failure. The gas fee is nonetheless consumed and has no refunds. No party will face slash or claim reward, as neither miner malfunctions nor API bugs can be found attributable. However, the failure-logs are recorded on on-chain storage. The user could raise an issue to the creator to push for a new docker, or lodge a sue claim on SaaS3DAO as a query for potential compensation from miners / creators. For more details, please refer to 9. 3-zkcg.

8. **Court DAO**
At Court DAO, the user can pay a fee for sue claims and, subject to the court's ruling, may claim compensation from miners / creators on SaaS3 DAO on grounds of any API failure. To supplement the on-chain failure logs, the user is required to provide the details regarding the failure case, such as the input data and the version of the failed API (docker image file version). The Jury consists of top 100 largest staked creators who are open source developers and active on DAO events. Members of the Jury can download the same version docker image and retest the failure case to investigate the failure cause. The on-chain failure log is available for jury members. 

    Jury will have the following options given the on-chain log records and local test results.

    - Reject - The user's sue claim is rejected, with no compensation, and the sue fee will not be refunded. Such a ruling may be on the grounds such as forged evidence and unreasonable amount of claims. Terms and conditions and regulations of SaaSDAO apply.
    - Approve
      - Miner malfunction: 
        - Which miners should be slashed. (This is multiple choices refer to on-chain log):
          - Miner1, Miner2, or Miner3
      - Slash the API service in terms of drawbacks or bugs on the service.
      

9. **3-zkc and gas calculation algorithm (3-zkcg)**

We will provide a protocol / software which is similar with [AWS Lambda API Pricing](https://aws.amazon.com/lambda/pricing/) for miner, but replace dollar unit with gas. In SaaS3, miners should monitor each container's resource usage by our software to calculate gas usage i.e., `gas_used` for once API call. `rewards=gas_used*gas_price` gas_used is defined by following process with 3-zkc. Here, we illustrate the algorithm to show the procedure, a user request is sent to three miners `m1,m2,m3` at time `t=0` with user-set maximum timeout `Tmax`, there will be following scenarios: 
 - If after timeout `Tmax`, no response is received, go to the failure state.
 - Else, got `m1` response `r1` with reported gas `g1` at time `t1`, reset timeout `Tmax=max(2*t1, Tmax)`.
   - If after timeout `Tmax`, go to failure state.
   - Else, got `m2` response `r2` with reported gas `g2` at time `t2`, zkc will be conducted to confirm whether `r1=r2`
     - `r1=r2` return `r1` to user and distribute `rewards=min(g1,g2) * gas_price` to `m1` since it early. 
     - `r1!=r2` reset timeout `Tmax=max(2*t2, Tmax)`
       - If after timeout `Tmax`, go to failure state.
       - Else, got `m3` response `r3` with reported gas `g3` at time `t3`, zkc will be conducted to confirm whether `r3=r1` or `r3=r2`
         - If `r1!=r2!=r3`, go to failure state.
         - Else, two conditions
           - `r3=r1`, return `r1` to user and distribute `rewards=min(g1, g3) * gas_price` to `m1`, `m2` will be slashed.
           - `r3=r2`, return `r2` to user and distribute `rewards=min(g2, g3) * gas_price` to `m2`, `m1` will be slashed.
 - Failure state: reply user `error: API fail` and charge gas fee as `gas_mean * gas_price`, where `gas_mean` is the average gas for that API in the history. Neither three miners will be slashed, since in such case, it hard to determine whether the API service has bugs. The user could raise an issue/sue to Creator/CourtDAO to acquire compensation based on above on-chain records.

![bfab1125635c0ea2fe37f956120d024](https://user-images.githubusercontent.com/95557343/159319549-47ac496a-38a4-42c2-b569-cf47006466b6.jpg)




### Technical Implementation Diagram
We will implement 5 pallets: `pallet-entity`, `pallet-service`, `pallet-DAO`, `pallet-miner`, and `pallet-stake` where `pallet-service` is the core component of the project. 

![image](https://user-images.githubusercontent.com/95557343/159320880-a6fc9d62-5cc2-457e-9797-11db72edf352.png)


### Ecosystem Fit

- Although web2 applications are highly dependent on centralized libraries and technical stack, they have a potential case of monetization if migrated to web3 as decentralized web3 API services through SaaS3 protocol.
- SaaS3 cloud could be a competitive alternative to centralized SaaS / API providers such as [Salesforce](https://appexchange.salesforce.com), [Microsoft Azure](https://docs.microsoft.com/en-us/rest/api/azureml/) and [Google AI](https://cloud.google.com/products/ai).  
- SaaS3 brings millions of users, providers of computing resources and software creators into a harmony and an organic ecosystem, with lowered costs and reliable services. SaaS3 aims to become the world's largest decentralized API platform based on Polkadot / Kusama to provide high-quality API services at extremely affordable prices.
- SaaS holds potential for interaction with other parachains of Polkadot / Kusama. SaaS3's dAPIs can also be utilized as a provider of data or computation services for other parachain's specific usage such as AI-related recognition or game-AI algorithms. 

Similar Projects:

- **Livepeer** https://livepeer.org/ It provides a video encoding service instead of general web3 SaaS. 
- **API3** https://api3.org/ It's a decentralized Oracle to provide off-chain data streaming for smart contracts instead of on-chain computation things to offer a SaaS in web3. 


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
| 2. | pallet-service| `pallet-service` is core implementation of SaaS3 project which is a key middle ware and interacted a lot with other pallets' functions. A service is also a iNFT to indicate the beneficial right for service creator. NFT related part is implemented based on [RMRK core pallet](https://github.com/rmrk-team/rmrk-substrate/tree/main/pallets/rmrk-core) which is an extension of pallet-uniques. A marketplace will be set up to trade those NFTs such as [Singular](https://singular.rmrk.app), RMRK, and [Kodadot](https://kodadot.xyz). | 
|    | Functions| 1). `pub fn subscribe_service(eid:u32, iNFT_id:u64, timespan:u256, count:u256) ` User call this function to pay token to subscribe API service. <br> 2). `pub fn create_service(eid:u32, pid:u32)` Creator's docker will be deployed as a service. <br> 3). `pub fn use_service(eid:u32, ip_address:Vec<u8>, iNFT_id:u64)` User call this function to allocate a reliable miner to use API service. <br> 4). `fn check_service(eid:u32, iNFT_id:u64)` The function can automatically check whether the service is available for usage. <br> 5). `fn distribute_rewards()` It can distribute subscription fee to miners and creators with a predefined ratio.|
|    | Storage| `ServiceList get(fn iNFT_list): map hasher(blake2_128_concat) u32 => Vec<PNFT>;`<br>  `SubscriptionList get(fn subscription_list): map hasher(blake2_128_concat) u32 => Vec<Subscription>;` <br> `Usages get(fn get_usages): map hasher(blake2_128_concat) u32 => Vec<Usage>; `|
|    | Struct| `pub struct PNFT<iNFT_id, docker_file, fee, eid, readme>` <br> `pub struct Subscription<sub_id, eid, iNFT_id, time_end, count>` <br> `pub struct Usage<us_id, sub_id, mid>`|
| 3. | pallet-stake| This pallet implements rewards and slashes related functions for token stakers to stake their tokens to services for DPoS consensus. [pallet-staking](https://crates.io/crates/pallet-staking) will be utilized for initial implementation and we will finely package it into our pallet-stake. |
|    | Functions|1). `pub fn stake(eid:u32, sid:u32, credits:u32) ` User call this function to stake their credit to service API as collateral. <br> 2). `pub fn stake queryStake(eid:u32, sid:u32)` It returns how many tokens is staked on miner for a specific user which aims for user check. <br> 3). `pub fn queryTotStake(eid:u32, mid:u32)` It returns the total staked tokens for a service which will be called in `fn use_service` to allocate qualified miners to run services. <br> 4). `pub fn withdraw(eid:u32, sid:u32, credits:u32) ` User call this function to withdraw their tokens from service. |
|    | Storage|`MinerCollateral get(fn get_miner_collateral): map hasher(blake2_128_concat) u32 => u32;` | 
| 4. | UI & Frontend | This part is implemented by [substrate front-end template](https://github.com/substrate-developer-hub/substrate-front-end-template) The frontend and UI of user-side will be finished in this milestone. |  

### Milestone 2 — Documentation and tutorial for miner and DAO. Development of pallet-miner and pallet-DAO

- **Estimated Duration:** 3.5 month
- **FTE:**  5
- **Costs:** 21500 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0|
| 0b. | Documentation | We will provide both inline documentation of the code and basic tutorials that explains and guides to four roles: User, Miner, Creator, Stakers respectively with some finely detailed examples. For instance, how to set up machines and mine tokens for miners, or how to propose a decentralized docker image and submit to miner network. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests for four pallets: pallet-miner and pallet-DAO|
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an **article**/workshop that explains (what was done/achieved as part of the grant). (Content, language and medium should reflect our target audience described above). |
| 1. | pallet-miner | The pallet implements on-chain related things for miner to compute off-chain docker runtime. The computational power providers or miners in the network provide API services which aim to execute docker runtime to reply user's dRequest. Each docker can be generally deployed on any miners. The pallet contains logic with off-chain softwares / models executions. 3-zkc related logics also will be implemented in this pallet. |
|    | Functions | 1). `pub fn deploy(eid:u32, mid:u32, iNFT_id:u64)` The function is utilized to deploy one service (ie., iNFT) on a specific miner and build off-chain connection to the user. <br> 2). `pub fn exit(eid:u32, mid:u32, did:u64)` User or on-chain pallet-service call it to exit a service for a specific user on a miner's docker runtime . <br> 3). `pub fn docker_manager()` It is only called at the first time when the miner connects to the blockchain to start a off-chain computation resource management related things such as 3-level dCache dispatch. <br> 4). `pub fn modify_miner_params(mid:u32, args:Vec<u8>)` It is an optional interface for miner to modify some on-chain parameters for adjustment computation services. The implementation will be very careful to cause any security issues.|
|    | Struct| `pub struct MinerParams<mid, param_1, param_2, param_3..>` <br> `pub struct EntityData<eid, address>` <br> `pub struct EntityRuntime<eid, did, status>`|
|    | Storage   |  `MinerParams get(fn get_miner_params): map hasher(blake2_128_concat) u32 => MinerParams;` <br> `EntityData get(fn get_entity_data): map hasher(blake2_128_concat) u32 =>  Vec<EntityData>;` <br> `EntityRuntime get(fn get_entity_runtime): map hasher(blake2_128_concat) u32 =>  Vec<EntityRuntime>;`|
| 2. | pallet-DAO | A DAO of judgement court, user raise sue to determine the punishment of malfunction miners / services and return sue claimed tokens to user.|
|    |Functions |`pub fn submit_sue(eid:u32)` User submit a sue claims for malfunction miner. <br>`pub fn vote_sue(eid:u32, sid:u32)` Jury evaluates and votes the sue submission to determine punishment. <br> `pub fn process_sue(sid:u32)` Process the accepted sue claims of user to slash malfunction miner / service. The tokens will be paid to user and treasury with a ratio. |
|    | Struct| `pub struct Sue<sid, eid, claims, statement>`
|    | Storage| `SueList get(fn get_sue_list): map hasher(blake2_128_concat) u32 => Vec<Sue>;`
| 4. | UI & Frontend | This part is implemented by [substrate front-end template](https://github.com/substrate-developer-hub/substrate-front-end-template). The frontend web interface contains DAO procedures related functions which including proposal audit and user sue judgement. A special document website is developed to guide entities to participant DAO events. |  

## Future Plans

- Initially, the parathreads will be utilized to connect the relay chain. Once the initial project goes well, we will participate slot auction. 
- Continue developing and polishing the project to flourish SaaS3 ecosystem to burst the web3 world based on Polkadot / Kusama / Substrate multi-chain system.
- Provide more reliable efficient computation service which can run Polkadot / Kusama validator dockers.


## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** 

web3 Foundation Website

**Related Files**

- PitchDeck: https://www.saas3.io/file/PitchDeck_SaaS3.pdf
- SaaS3 website: https://saas3.io
- iNFT Demo (move to RMRK standard soon): https://saas3.io/non-api-nft
- Whitepaper(Beta Version): https://www.saas3.io/file/SaaS3Whitepaper.pdf

**Other Grants**

- IPFS Open Grant (Accepted)
