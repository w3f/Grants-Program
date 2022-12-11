# SaaS3

> This document will be part of the terms and conditions of your agreement and therefore needs to contain all the required information about the project. Don't remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with a `>` (such as this one) can be removed.

- **Team Name:** SaaS3 Lab
- **Payment Address(USDT):** 0x8341e551B0AE5E5905C20A112b123b5F797612f3
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

### Overview

#### Dilemma of web3 Ecosystem - With functionalities yet to become full-fledged, Web3.0 applications need a rethink of development stacks

For instance, most of the web2 projects and dependencies are based on Java, C++, PHP, etc., while web3 requires another totally different technical stacks such as Solidity, Motoku, or Substrate on EVM / WASM which hinders web2 developers to build web3 applications.

![image](https://user-images.githubusercontent.com/95557343/157393726-c22c47d2-a4d0-4335-b890-29d6fad4417c.png)

SaaS3 project aims to deliver a fully decentralized software as a service (SaaS) network with highly scalable, crypto token incentivized and results in a solution that can serve as the application interface (API) layer for web3.
SaaS3 is devoted to transforming traditional web2 API to web3 dAPI by decentralized docker runtime (dRuntime).
Particularly, regardless of development stack differences, Linux-based Web2 APIs can be deployed on our platform for providing web3 services by decentralized APIs (dAPI).
Essentially, SaaS3 is an off-chain scaling technique of layer-2 which utilizes cheap off-chain docker computation to replace high-priced on-chain WASM / EVM runtime, while still remaining computation decentralization by delegated proof of stake (DPoS) consensus and on-chain zero knowledge proof.
Therefore, such layer-2 off-chain scaling is not only for computation price but technical development stacks compatible.
The SaaS3 project aims to decentralize computational providers and mint income-NFT to earn profits.
The API creators could earn an income fee by holding those iNFT or selling them on NFT marketplace.  
As a result, the SaaS3 project will bridge web2 APIs to web3 dAPIs to flourish web3 ecosystem and achieve creator economy in a decentralized and trust-minimized way.
This grant will allow us to develop several pallets to implement a parachain with substrate on Polkadot / Kusama.

SaaS3 as a part of Polkadot / Kusama / web 3 Ecosystem and has the following properties:

- Bridge - Monetize abundant web2 projects as decentralized web3 services in a very short time with extremely cheap cost.
- No Middleman - Cheap fee for dAPI users or Dapp developers compare with centralized SaaS products.
- Security - Improve the security for a system by PoS consensus and zero knowledge proof for miner network. Web3 dAPI are backed by token stakers (DPoS) with a reward and punishment mechanism.
- Reliability - Strengthen robustness for dAPI by computation decentralization and dRuntime redundancy of miners.
- Green - Save energy and reduce the cost by making use of spare computation resources for API computation.
  
### Protocol Details

#### Architecture

![image](https://user-images.githubusercontent.com/95557343/159788632-250f04b6-b2b9-42c5-9927-6e4487aea8ef.png)

Decentralized docker runtime (dRuntime) is built on miner network which aims to execute dAPIs. Those dAPIs is created by API creators as a result of development labor. Computational node targets to setup the dRuntime, or better known as the 'miner', namely the party that performs the computational tasks. They are hereafter referred to as 'nodes' or 'miners'. The Dapp developer is the dAPI user, who sends requests and pays to access the dAPI. Their actions are detailed below.

- To access a web3 dAPI, users pay $SA3 tokens to nodes as the Gas fee and to software creators as the royalty fee.

- The node(s) are rewarded to execute dAPIs with dRuntime on their equipments. Importantly, each miner can run multiple dAPIs with dRuntime cache (dCache) to maximize the throughput.

- The Creator receives the royalty fee as the reward for their commitment to the docker development; they are the author of Web2 API codes.

![image](https://user-images.githubusercontent.com/95557343/159788719-f6fb785d-65ce-4f7c-a3cb-5b0226708895.png)

##### Security & Off-chain Miner Consensus

- Miner security - To qualify, a miner or node is required to stake a particular amount of tokens as collateral (POS). Each request for API will trigger an on-chain zero-knowledge proof check (zkc), which determines whether the node is rewarded or punished.

- API security - Similar to API3 insurance, API security is achieved via Delegation Proof of Staking (DPoS). Particularly, the API creator is required to stake an amount of tokens at the time of submitting the dAPI deployment. The amount is set at a default value in their first submission and is adjusted in proportion to the service income. Besides, the token holders are able to stake on the dAPIs as a collateral and share profits with API creator. The mechanism is established following the same vein of the concepts in Polkadot / Kusama, including staking, nomination, and validation.

The process described above establishes a de facto safeguard mechanism, sheltering dAPI users from potential malfunctions of the computational node or the API service, and when available providing remedies in compensation.

##### Collateral and Sue Claims

In the case of a malfunction, the user detects the misperformance and assesses the damages and losses, and is able to lodge a sue claim published on the Court DAO. In supplement, the staked tokens or collaterals are 'locked' for a period, a mechanism to discourage stakers from 'front-running claims', i.e. withdrawing the staked token as soon as a miner or service malfunctions to evade claims. On the other hand, the litigant is required to stake funds to be able to make a claim, which elevates the cost of abuse. The Court DAO deliberates on the sue claim and decides whether a remedy should be made to the victimized dAPI user. Once a claim is passed in Court DAO, the amount of tokens as has been claimed will be transferred to the litigant in compensation.

The same mechanism also applies to the punishment meted out for the node(s) that malfunctioned with on-chain zkc. Such a reward-and-punishment mechanism encourages nodes to act in good faith and better service quality. Hence, a much lower risk of potential cyber threats such as the Sybil attack.

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

1. **Location Proof of Stake (LPoS) with zkc for Miners**
Regarding the miner network, we deploy on-chain zero knowledge check (zkc) and adopt a location-based optimization for PoS consensus, thus improving the network throughput for off-chain dRuntime execution. Specifically, when a dAPI user sends a request, a list of miner candidates will be generated, consisting of 10 nodes in the closest locations, (e.g., determined by network latency) which are determined by network latency. Meanwhile, since all nodes are required to have staked a amount of tokens, nodes are ranked in a list of, for example, 100 according to the staked amount. 3 miners has to be among the leading token stake and the ten nearest to qualify for executing the request and receiving the rewards, while the on-chain zero-knowledge check (zkc) is carried out. Admittedly, the network may to some degree hurt tolerable security. Nevertheless, the dAPI user will be able to access not just at low net-latency but also backed by the PoS consensus with zkc (for more about zkc, please refer to 7 or 9). It should also be noted that node congestion is mitigated en passant.

<img src="https://user-images.githubusercontent.com/95557343/157394572-683ee606-7e25-4755-adbb-de88c456fe8c.jpg" width="512" />

2. **dRuntime**
dRuntime refers to a decentralized docker runtime which execute dAPIs in a network of distributed computing resources. It is essentially an off-chain technique to scaling up computation for on-chain runtime, such as WASM or EVM in Polkadot or Ethereum networks.

3. **dCache**
dRuntime cache is a 3-level caching mechanism to guarantee high performance and large throughput for dRuntime.  

<img src="https://user-images.githubusercontent.com/95557343/157394601-8a6d1bd4-cefa-4dc9-b4c4-d85098fda6d8.jpg" width="512" />

4. **SaaSDAO**
SaaSDAO refers to the decentralized autonomous organization charged with governance duties.
<img src="https://user-images.githubusercontent.com/95557343/159328187-2b0104df-9e53-4000-b4bc-a122adc97fbf.png" width="512" />

5. **iNFT**
iNFT refers to a tradable income NFT that is minted when an API creator submits a docker image to create a dAPI. iNFT allows the API creator to earn royalty fee.

6. **Miner Network**
The miner network is implemented by pallet-miner and consists of all the providers of computational capabilities. The network offer decentralized APIs which undertakes to execute containers to reply DeResponse for user's DeRequest. All docker images can be deployed on each miner. Thus, other nodes are called in replacement should any node break down. The 'redundancy' of computing nodes, which is at the miner-level, helps the SaaS3 maintain its decentralization features and remain robust.

7. **On-chain 3-person zero knowledge proof check (3-zkc) and rewards**
Each dAPI call will be executed by 3 miners. Therefore, the hash values generated following the three responses will be compared against each other for agreement. The 3-zkc is performed enabled by a callable, on-chain pallet-function. There are multiple scenarios, as follows.
   - The three hash values are in agreement. No one will being slashed.
   - Only two values are in agreement, the check still gains approval. Another miner is found inconsistent and will be slashed on its token stake.
   - There is no agreement among the three nodes. In this case, the API call returns failure. The gas fee is nonetheless consumed and has no refunds. No party will face slash or claim reward, as neither miner malfunctions nor dAPI bugs can be found attributable. However, the failure-logs are recorded on on-chain storage. The user could raise an issue to the creator to push for a new docker, or lodge a sue claim on Court DAO as a query for potential compensation from miners / creators. For more details, please refer to 9. 3-zkcg.

8. **Court DAO**
At Court DAO, the dAPI user can pay a fee for sue claims and, subject to the court's ruling, may claim compensation from miners / creators on SaaS3 DAO on grounds of any dAPI failure. To supplement the on-chain failure logs, the user is required to provide the details regarding the failure case, such as the input data and the version of the failed API (docker image version). The Jury consists of top 101 largest staked API creators who are open source developers and active on DAO events. Members of the Jury can download the same version docker image and retest the failure case to investigate the failure cause. The on-chain failure log is available for jury members.

    Jury will have the following options given the on-chain log records and local test results.

    - Reject - The user's sue claim is rejected, with no compensation, and the sue fee will not be refunded. Such a ruling may be on the grounds such as forged evidence and unreasonable amount of claims. Terms and conditions and regulations of SaaSDAO apply.
    - Approve
      - Miner malfunction:
        - Which miners should be slashed. (This is multiple choices refer to on-chain log):
          - Miner1, Miner2, or Miner3
      - Slash the dAPI in terms of drawbacks or bugs.

9. **3-zkc and gas calculation algorithm (3-zkcg)**

We will provide a protocol / software which is similar with [AWS Lambda API Pricing](https://aws.amazon.com/lambda/pricing/) for miner, but replace dollar unit with gas. In SaaS3, miners should monitor each container's resource usage by our software to calculate gas usage i.e., `gas_used` for once dAPI call. `rewards=gas_used*gas_price` gas_used is defined by following process with 3-zkc. Here, we illustrate the algorithm to show the procedure, a user request with `gas_limit` is sent to three miners `m1,m2,m3` at time `t=0` with user-set maximum timeout `Tmax`, there will be following scenarios:

- If after timeout `Tmax`, no response is received, go to the failure state.
- Else, got `m1` response `r1` with reported gas `g1` at time `t1`, reset timeout `Tmax=max(2*t1, Tmax)`.
  - If after timeout `Tmax`, go to failure state.
  - Else, got `m2` response `r2` with reported gas `g2` at time `t2`, zkc will be conducted to confirm whether `r1=r2`
    - `r1=r2` return `r1` to user and distribute `rewards=min(g1,g2) * gas_price` to `m1` with `(1-g1/(g1+g2)) * rewards` and to `m2` with `(1-g2/(g1+g2))*rewards` which means the lower `gas report`, the more rewards.
    - `r1!=r2` reset timeout `Tmax=max(2*t2, Tmax)`
      - If after timeout `Tmax`, go to failure state.
      - Else, got `m3` response `r3` with reported gas `g3` at time `t3`, zkc will be conducted to confirm whether `r3=r1` or `r3=r2`
        - If `r1!=r2!=r3`, go to failure state.
        - Else, two conditions
          - `r3=r1`, return `r1` to user and distribute `rewards=min(g1, g3) * gas_price` to `m1` with `(1-g1/(g1+g3)) * rewards` and to `m3` with `(1-g3/(g1+g3))*rewards`. `m2` will be slashed.
          - `r3=r2`, return `r2` to user and distribute `rewards=min(g2, g3) * gas_price` to `m2` with `(1-g2/(g2+g3)) * rewards` and to `m3` with `(1-g3/(g2+g3))*rewards`. `m1` will be slashed.
- Failure state: reply user `error: dAPI fail` and charge gas fee as `gas_mean * gas_price`, where `gas_mean` is the average gas for that dAPI in the history. Neither three miners will be slashed, since in such case, it hard to determine whether the dAPI has bugs. The user could raise an issue/sue to Creator/CourtDAO to acquire compensation based on above on-chain records. If the miners notice some weird slashes with on-chain evidence, miners could raise sue to CourtDAO with their proof (e.g., give an IPFS docker image path which is the same version as creator submitted) to acquire claims and slash dAPI with acceptance from Court DAO.

<img width="875" alt="a0e9fb71f04ea16161f09ca17048e72" src="https://user-images.githubusercontent.com/95557343/159504829-c65eacd8-3d48-4f32-9dfa-b341a5d6f117.png" />

### Game theory Proof for 3-zkc algorithm with Nash Equilibrium Convergence ###

Both Miner1,Miner2, and Miner3 will choose loyalty.
<img src="https://user-images.githubusercontent.com/95557343/159789034-b32f24a3-f185-4986-904c-33268bf1df04.png" width="800" />

### Technical Implementation Diagram

We will implement 5 pallets: `pallet-entity`, `pallet-dAPI`, `pallet-DAO`, `pallet-miner`, and `pallet-stake` where `pallet-dAPI` is the core component of the project.

![image](https://user-images.githubusercontent.com/95557343/159320880-a6fc9d62-5cc2-457e-9797-11db72edf352.png)

### Ecosystem Fit

- Although web2 applications are highly dependent on centralized libraries and technical stack, they have a potential case of monetization if migrated to web3 as decentralized web3 dAPI through SaaS3 protocol.
- SaaS3 cloud could be a competitive alternative to centralized SaaS / API providers such as [Salesforce](https://appexchange.salesforce.com), [Microsoft Azure](https://docs.microsoft.com/en-us/rest/api/azureml/) and [Google AI](https://cloud.google.com/products/ai).  
- SaaS3 brings millions of dAPI/Dapp users, providers of computing resources and users into a harmony and an organic ecosystem, with lowered costs and reliable services. SaaS3 aims to become the world's largest decentralized API platform based on Polkadot / Kusama to provide high-quality dAPIs / Dapps at extremely affordable prices.
- SaaS holds potential for interaction with other parachains of Polkadot / Kusama. SaaS3's dAPIs can also be utilized as computation services for other parachain's specific usage such as AI-related recognition or game-AI algorithms.

Similar Projects:

- **Livepeer** <https://livepeer.org/> It provides a video encoding service instead of general web3 SaaS.
- **API3** <https://api3.org/> Its dAPI as decentralized oracle to provide off-chain data streaming for smart contracts instead of computation tasks to offer a SaaS in web3.

SaaS market in Dapp, web3.0, and Metaverse:

- **Software Services** For example, the softwares on [Salesforce](https://appexchange.salesforce.com), Office365, Grammarly.
- **AI Services** Speech2Text, Voice2Text, Image Recognition, UGC-NFT Recognition, Marketing Analysis, Algorithm Recommendation, Bot-AI, Game-AI, Reinforcement Learning, and Behavior Analysis.

### Designs / Mock-ups

![6742e6c196c0ec2354f3e65474c0dd7](https://user-images.githubusercontent.com/95557343/155807321-3d96b3a6-f6c1-4b64-9411-3d75bd7eceb5.png)
![a07096c685597b9faaa8de4bce9956c](https://user-images.githubusercontent.com/95557343/155807345-fd92a0aa-1d5f-44ea-a57a-4f1ec8a4f70c.png)

## Team :busts_in_silhouette:

### Team members

The core team members are top Ph.Ds in computer science who are technical and experienced.

- **Steven** is a Ph.D. in artificial intelligence and vice president of SaaS3 to build dRuntime on p2p network and financing-related works. Currently, he is an AI researcher and blockchain developer. He has written computer programs since he was 14 and got many hackathon awards in the past.

- **Rocky** is the CTO of SaaS3 undertakes SaaS3 protocol design. Currently, he is the presidential postdoctoral fellow in NTU and chief scientist in Singapore Smart City Project. Previously, he was an AI researcher at UCB. Besides, he is also a visiting lecture professor of NTU, NUS. He is also the winner of over 10 hackathons.

- **Nael** is the CPO of SaaS3 to guarantee the high-quality features of dRuntime. He also helps SaaS3 to find more partners to build communities. Besides, he is the founder of Chapa which is an online payment gateway with 30k customers that empowers small merchants and large businesses to accept digital payments from their customers via their APIs. Previously, he was the manager of crypto community manager and market researcher in world-leading companies.

- **Israel** is the core developer of SaaS3 and undertakes the development of the creator submission network. Besides, he is the CTO of Chapa. He is the founder of Colimo City. Previously, He was the AI researcher in Google Brain, MILA of Turing Award Winner Yoshua Bengio’s Lab. He has 4 years of experience in AI development.

- **Laekshan** was a software engineer in a world-leading company. He is also an expert in IoT
development. He has mined bitcoin since 2015. Therefore, he has a lot of experience in crypto mining and market analysis.

### Contact

- **Contact Name:** Rocky Yang
- **Contact Email:** contact@saas3.io
- **website:** <https://www.saas3.io>

### Legal Structure

- **Registered Address:** 71 Nanyang Dr, NTU Innovation Center, Singapore 638
- **Registered Legal Entity:** Giant Whales Corporation

### Team Code Repos

- <https://github.com/SaaS3DAO/>
- <https://github.com/SaaS3DAO/DeAIMainNet>
- <https://github.com/SaaS3DAO/non-api-nft>
- <https://github.com/SaaS3DAO/substrate-node-template>
- <https://github.com/SaaS3DAO/substrate>

GitHub accounts of all team members.

- <https://github.com/isrugeek>
- <https://github.com/Marsrocky>
- <https://github.com/qinwang-ai>
- <https://github.com/ChinW>
- <https://github.com/Deslate>
- <https://github.com/kkazuha>
- <https://github.com/hugoycj>

### Team LinkedIn Profiles (if available)

- <https://www.linkedin.cn/injobs/in/israel-goytom-66713011b>
- <https://www.linkedin.cn/injobs/in/jianfei-yang-55560386/>
- <https://www.linkedin.com/in/steven-wong-3b015079/>

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 6 months
- **Full-Time Equivalent (FTE):**  5
- **Total Costs:** 45500 USDT

### Milestone 1 — SaaS3 Documentation, pallet-entity, pallet-service, pallet-stake

- **Estimated duration:** 2.5 month
- **FTE:**  4
- **Costs:** 24000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0|
| 0b. | Documentation | Documents containing the description of whole architecture design and technical implementation details for SaaS3 Network. |
| 0c. | Testing Guide | We will provide a full test suite and guide for dAPIs usage for `pallet-dAPI`, token stake for `pallet-stake`. `pallet-entity` will be tested for dAPI usage and payment.|
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an **article**/workshop that explains (what was done/achieved as part of the grant). (Content, language and medium should reflect our target audience described above.)
| 1. | pallet-entity| [pallet_assets](https://crates.io/crates/pallet-assets) is utilized for implementation with a minor change to fit SaaS3 project. An user and creator both can be implemented as entity. They are same in implementation perspective. |
|    | Functions     | No public function |
| 2. | pallet-dAPI| `pallet-dAPI` is core implementation of SaaS3 project which is a key middle ware and interacted a lot with other pallets' functions. A dAPI is also a iNFT to indicate the beneficial right for API creator. iNFT related part is implemented based on pallet-uniques. |
|    | Functions| 1). `pub fn subscribe_dAPI(eid:u32, iNFT_id:u64, timespan:u256, count:u256)` dAPI user call this function to pay token to subscribe dAPI. <br /> 2). `pub fn create_dAPI(eid:u32, pid:u32)` Creator's docker image will be deployed as a dAPI. <br /> 3). `pub fn use_dAPI(eid:u32, ip_address:Vec<u8>, iNFT_id:u64)` dAPI user call this function to allocate reliable miners to run dAPI. <br /> 4). `fn check_dAPI(eid:u32, iNFT_id:u64)` The function can automatically check whether the dAPI is available for usage.|
|    | Storage| `ServiceList get(fn iNFT_list): map hasher(blake2_128_concat) u32 => Vec<PNFT>;`<br />  `SubscriptionList get(fn subscription_list): map hasher(blake2_128_concat) u32 => Vec<Subscription>;` <br /> `Usages get(fn get_usages): map hasher(blake2_128_concat) u32 => Vec<Usage>;`|
|    | Struct| `pub struct iNFT<iNFT_id, docker_file, fee, eid, readme>` <br /> `pub struct Subscription<sub_id, eid, iNFT_id, time_end, count>` <br /> `pub struct Usage<us_id, sub_id, mid>`|
| 3. | pallet-stake| This pallet implements rewards and slashes related functions for token stakers to stake their tokens to services for DPoS consensus. [pallet-staking](https://crates.io/crates/pallet-staking) will be utilized for initial implementation and we will finely package it into our pallet-stake. |
|    | Functions|1). `pub fn stake(eid:u32, sid:u32, credits:u32)` User call this function to stake their credit to a dAPI as collateral. <br /> 2). `pub fn stake queryStake(eid:u32, sid:u32)` It returns how many tokens is staked on a dAPI for a specific entity. <br /> 3). `pub fn queryTotStake(eid:u32, mid:u32)` It returns the total staked tokens for a dAPI. <br /> 4). `pub fn withdraw(eid:u32, sid:u32, credits:u32)` Staker call this function to withdraw their tokens from dAPI. |
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
| 1. | pallet-miner | The pallet implements on-chain related things for miner to compute off-chain docker runtime. The computational power providers or miners in the network provide dAPI which aim to execute docker runtime to reply user's dRequest. Each docker image can be generally deployed on any miners. The pallet contains logic with off-chain softwares / models executions. 3-zkc related logics also will be implemented in this pallet. |
|    | Functions | 1). `pub fn deploy(eid:u32, mid:u32, iNFT_id:u64)` The function is utilized to deploy one dAPI (ie., iNFT) on a specific miner and build off-chain connection to the dAPI user. <br /> 2). `pub fn docker_manager()` It is only called at the first time when the miner connects to the blockchain to start a off-chain computation resource management related things such as 3-level dCache dispatch. <br /> 3). `pub fn modify_miner_params(mid:u32, args:Vec<u8>)` It is an optional interface for miner to modify some on-chain parameters for adjustment computation. The implementation will be very careful to cause any security issues.  4). `fn distribute_rewards()` It can distribute Gas fee to miners|
|    | Struct| `pub struct MinerParams<mid, param_1, param_2, param_3..>` <br /> `pub struct EntityData<eid, address>` <br /> `pub struct EntityRuntime<eid, did, status>`|
|    | Storage   |  `MinerParams get(fn get_miner_params): map hasher(blake2_128_concat) u32 => MinerParams;` <br /> `EntityData get(fn get_entity_data): map hasher(blake2_128_concat) u32 =>  Vec<EntityData>;` <br /> `EntityRuntime get(fn get_entity_runtime): map hasher(blake2_128_concat) u32 =>  Vec<EntityRuntime>;`|
| 2. | pallet-DAO | A DAO of judgement court, dAPI user raise sue to determine the punishment of malfunction miners / services and return sue claimed tokens to dAPI user.|
|    |Functions |`pub fn submit_sue(eid:u32)` dAPI User submit sue claims for malfunction. <br />`pub fn vote_sue(eid:u32, sid:u32)` Jury evaluates and votes the sue submission to determine punishment. <br /> `pub fn process_sue(sid:u32)` Process the accepted sue claims of dAPI user to slash malfunction miner / dAPI. The tokens will be paid to dAPI user and treasury with a ratio. |
|    | Struct| `pub struct Sue<sid, eid, claims, statement>`
|    | Storage| `SueList get(fn get_sue_list): map hasher(blake2_128_concat) u32 => Vec<Sue>;`
| 4. | UI & Frontend | This part is implemented by [substrate front-end template](https://github.com/substrate-developer-hub/substrate-front-end-template). The frontend web interface contains DAO procedures related functions which including user sue judgement. A special document website is developed to guide entities to participant DAO events. |  

## Future Plans

- Initially, the parathreads will be utilized to connect the relay chain. Once the project goes well, we will participate slot auction.
- Continue developing and polishing the project to flourish SaaS3 ecosystem to burst the web3 world based on Polkadot / Kusama / Substrate multi-chain system.
- Provide more reliable efficient computation service which can run Polkadot / Kusama validator dockers.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?**

web3 Foundation Website

**Related Files**

- PitchDeck: <https://www.saas3.io/file/PitchDeck_SaaS3.pdf>
- SaaS3 website: <https://saas3.io>
- iNFT Demo (move to RMRK standard soon): <https://saas3.io/non-api-nft>
- Whitepaper(Beta Version): <https://www.saas3.io/file/SaaS3Whitepaper.pdf>

**Other Grants**

- IPFS Open Grant (Accepted)
