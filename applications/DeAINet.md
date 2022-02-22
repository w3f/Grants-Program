# W3F Grant Proposal

> This document will be part of the terms and conditions of your agreement and therefore needs to contain all the required information about the project. Don't remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with a `>` (such as this one) can be removed.

- **Project Name:** DeAINet
- **Team Name:** DeAI Team
- **Payment Address(USDT):** 0x8341e551B0AE5E5905C20A112b123b5F797612f3
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

### Overview

The DeAI project aims to deliver a fully decentralized artificial intelligence (AI) service network with highly scalable, crypto token incentivized and results in a solution that can serve as the application interface (API) layer in the decentralized development (web3) stack. We present solutions for incentivizing AI nodes for maximum usage of idle resources and distributing AI services for higher availability and security. This grant will allow us to develop several pallets to implement a parachain with substrate framework on Polkadot/Kusama. The DeAINet can not only be used to decentralize computational providers but also used to create DeAI's API-NFT to protect intellectual property.

DeAINet as a part of Polkadot / Kusama / Web 3 Ecosystem and has Following Rich Properties:

  - Protect the privacy for AI users by executing encryption protocol transparently.
  - Improve the security for AI system by miners consensus.
  - Strengthen robustness for AI service by DeAPI runtime redundancy of miners.
  - Save energy and reduce the service cost by making use of spare resource to mine.
  - Protect AI intellectual properties by API-NFTs.

  
### Project Details

#### Architecture
  ![image](https://user-images.githubusercontent.com/95557343/152795929-621711c2-8ab9-4af5-8dfe-078ad29ee7ee.png)

  - Users pay DEAI token to access DeAPIs. DeAINet will periodically generate a certain
amount of new DEAI tokens and half of them will reward the most active
users. Another half tokens distribute to a random address as an airdrop.
After 4 years, no more DEAI is generated.

  - Miners earn 95%’ users’ paid DEAI to execute DeAPI on their hardware. Each
miner can run all kinds of DeAPIs to satisfy any kind of DeRequest. The
redundancy exactly achieves the decentralization and reliability of DeAINet.

  - Inventors earn 5% users’ paid DEAI as patent fee aside from miners, since they
are AI researchers or developers who invent and create new DeAPIs.

  - DEAI Stakers share profit from miners by staking DEAI to miners to select high-quality miners to execute DeAPIs in a DPoS
(Delegation PoS) consensus. 

![image](https://user-images.githubusercontent.com/95557343/153165766-e5a4fd52-49e6-489a-a422-e9aa9ccd080e.png)
![image](https://user-images.githubusercontent.com/95557343/152797749-a96e9f40-e1ae-4a02-9679-b446e09f59c5.png)

#### Technologies

  1. Substrate
  2. Deep learning frameworks: Pytorch, Tensorflow, MxNet, Caffe
  3. Docker
  4. libp2p
  5. IPFS
  6. gRPC
  7. Rust
  8. Go

#### Components
  1. **Miner Network.**
  It is implemented by pallet-miner and consists of all the computational power providers to offer decentralized AI as a Service which undertake to execute DeAPI to reply DeResponse for user's DeRequest. All the DeAPIs are deployed by Inventors on each miner. Thus, one miner is crashed other miners could follow up to replace the old one. This redundancy with sharding could guarantee the decentralized and robustness for DeAI network. 
  
  2. **Inventor Network.**
  It is implemented by pallet-inventor and is a DAO sub-project for Inventors such as AI researchers and developers to submit their code and pretrain weights to set up AI service API through DAO mechanism which is a decentralized App with a UI website interface. Any inventors can submit a proposal to set up APIs but, only DAO-approved proposals could finally be realized and accepted to deploy on all the miners. Therefore, DAO could make sure the quality and necessity for new API creations. Meanwhile, once a new DeAPI is set up, a corresponding API-NFT is minted and sent to inventors address as a digital patent. The user's paid fee will send to API-NFT holders. 
  
  3. **User Network.**
  It is implemented by pallet-user and consists of all the callable DeAPIs in the application layer for users to send request and retrieve the response which also implements a DPoS concensus aside from Polkadot/Kusama to guarantee decentralization, venerable, and security. 
  
  4. **API-NFT Mint.**
  Any inventors could mint tradable API-NFTs as digital patents when they submit DeAPI to DeAINet to earn API usage gains. The NFT mint will be implemented by pallent-softNFT and tradable on Singular and Kodadot marketplace.

### Ecosystem Fit

Using blockchain technology to construct a decentralized network to provide AaaS (AI as a Service) for App/Dapp developers to replace centralized API providers such as [Microsoft Azure](https://docs.microsoft.com/en-us/rest/api/azureml/) and [Google AI](https://cloud.google.com/products/ai).  We are devoted to building a decentralized SaaS platform to combine millions of users, computational power providers with API inventors in such a harmony way for offering extremely low costing and privacy-preserving services in Web3.0 era. DeAI aims to become the world largest decentralized SaaS platform based on Polkadot/Kusama to provide high-quality API services with extremely cheap prices. It is worth mentioning that DeAI only focuses on the inference or deployment phase of AI models to provide decentralized AI services, thus the training-related things should be solved by Inventors themselves. Once the training is completed, the pretrained weights and related code can be submitted to DeAINet as a DeAPI proposal and prepared to deploy on miners. 

Similar Projects:
- **Livepeer** https://livepeer.org/ It provides video encoding service instead of general Web3.0 SaaS usage. 
- **SingularityNet** https://singularitynet.io/ It's just a distributive AI-related API store with no decentralized API deployment redundancy to guarantee high performance, robustness and privacy-preserving. There is no miner-inventor isolation to a clear division of labor for API creation and execution and all the works are assigned to a centralized API provider's node, thus their system did not work well.
- **API3** https://api3.org/ It's a decentralized Oracle to provide off-chain data streaming for smart contract instead of on-chain computation things to offer a SaaS in Web3.0. 

AI market in Dapp, Web3.0, and Metaverse:

- **Basic Recognition** Speech2Text, Voice2Text, Image Recognition, UGC-NFT Recognition, Marketing Analysis, Algorithm Recommendation, and Behavior Analysis. 
- **Game** PVE, Bot-AI, Game-AI, Reinforcement Learning. 


## Team :busts_in_silhouette:

### Team members
The core team members are top Ph.Ds in computer science who are technical and experienced.

- **Laekshan** was a software engineer in a world-leading company. He is also an expert in IoT
development. He has mined bitcoin since 2015. Therefore, he has a lot of experience in crypto mining and market analysis.

- **Rocky** is the CTO of DeAI undertakes DeAI protocol design. Currently, he is the presidential AI postdoctoral fellow in NTU and chief scientist in Singapore Smart City Project. Previously, he was an AI researcher at UCB. Besides, he is also a visiting lecture professor of NTU, NUS. He is also the winner of over 10 hackathons.

- **Nael** is the CPO of DeAI to guarantee the high-quality features of DeAINet. He also helps DeAI to find more partners to build communities. Besides, he is the founder of Chapa which is an online payment gateway with 30k customers that empowers small merchants and large businesses to accept digital payments from their customers via their APIs. Previously, he was the manager of crypto community manager and market researcher in world-leading companies.

- **Israel** is the core developer of DeAI and undertakes the development of the inventor submission network. Besides, he is the CTO of Chapa. He is the founder of Colimo City. Previously, He was the AI researcher in Google Brain, MILA of Turing Award Winner Yoshua Bengio’s Lab. He has 4 years of experience in AI development.

- **Haruki** is a Ph.D. in artificial intelligence and vice president of DeAI to build DeAPI on p2p network and financing-related works. Currently, he is an AI researcher and blockchain developer. He has written computer programs since he was 14 and got many hackathon awards in the past. 


### Contact

- **Contact Name:** Rocky Yang (CTO)
- **Contact Email:** contact@deainet.io
- **Website:** https://www.deainet.io

### Legal Structure

- **Registered Address:** 71 Nanyang Dr, NTU Innovation Center, Singapore 638
- **Registered Legal Entity:** Giant Whales Corporation

### Team Code Repos

- https://github.com/DeAINet/
- https://github.com/DeAINet/DeAIMainNet
- https://github.com/DeAINet/non-api-nft
- https://github.com/DeAINet/substrate-node-template
- https://github.com/DeAINet/substrate

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

- **Total Estimated Duration:** 5 months
- **Full-Time Equivalent (FTE):**  4
- **Total Costs:** 48500 USDT

### Milestone 1 — DeAPI Documentation, pallet-softNFT, pallet-user, Initial API-NFT Offering

- **Estimated duration:** 2 month
- **FTE:**  4
- **Costs:** 25000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0|
| 0b. | Documentation | Documents containing the description of whole architecture design and technical implementation details for DeAI Network. |
| 0c. | Testing Guide | We will provide a full test suite and guide for API-NFT mint and trade with pallet-softNFT. pallet-user will be tested for API usage and payment.|
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an **article**/workshop that explains (what was done/achieved as part of the grant). (Content, language and medium should reflect our target audience described above.)
| 1. | pallet-softNFT| The API-NFT is implemented by pallet-softNFT and based on [RMRK core pallet](https://github.com/rmrk-team/rmrk-substrate/tree/main/pallets/rmrk-core) which is an extension of pallet-uniques. Thus, pallet-softNFT will be developed from pallet-rmrk-core and be an extension of it. In this milestone, all the API-NFTs are PDF Patent files with pieces of code. Once the whole ecosystem is finished, the API earned fees from users will be sent to API-NFT holders as patient fees. We will set up an NFT marketplace to trade those NFTs. For instance, the API-NFTs could be sold and bought by everyone on the marketplaces such as [Singular](https://singular.rmrk.app), RMRK, and [Kodadot](https://kodadot.xyz). |
| 2. | pallet-user| This pallet mainly consists of two parts: user manager and application store. The first module implements user payment modes such as pay-as-you-call or subscription plan which sends earns to miners and inventors. It also contains the requirements for a valid user such as token staking or reputation to prevent users from abusing the software/API. The application store contains the callable DeAPIs in the application layer for users to send requests to miners and retrieve the responses based on a DPoS consensus on DeAINet beyond Polkadot/Kusama's native consensus to guarantee the decentralization, endurance, and security. |
| 3. | Initial API-NFT Offering | We will invite some notable AI/Software algorithm researchers & scientists to mint their typical academic research achievements as API-NFTs on DeAI network as an NFT crowdsale. Those tradable NFTs will become functional as digital patents to earn patent fees for holders once the whole project is finished. |  
| 4. | UI & Frontend | The frontend and UI of NFT mint and trade will be finished in this milestone. |  


### Milestone 2 — DeAI Protocol, pallet-miner, pallet-inventor, pallet-staker 

- **Estimated Duration:** 3 month
- **FTE:**  5
- **Costs:** 23500 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0|
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains and guides to four roles: User, Miner, Inventor, Stakers respectively with some finely detailed examples. For instance, how to set up machines and mine tokens for miners.|
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests for four pallets: pallet-user, pallet-miner, pallet-staker, and pallet-inventor.|
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an **article**/workshop that explains (what was done/achieved as part of the grant). (Content, language and medium should reflect our target audience described above). |
| 1. | pallet-miner | The computational power providers or miners in the network provide decentralized AI as a Service which aim to execute DeAPI to reply DeResponse for user's DeRequest. Each DeAPI is deployed by an Inventor on all miners with a finely designed sharding mechanism. The pallet contains logic with off-chain AI models executions which are implemented by deep learning frameworks. |
| 2. | pallet-inventor | A DAO sub-project for Inventors such as AI researchers and developers to submit their code and pretrain weights to set up AI service APIs through DAO mechanism which is a decentralized App with a UI website interface. Only accepted DeAPIs are deployed to miners to set up AI services for users. |
| 3. | pallet-staker | This pallet implements rewards and slashes functions for token stakers to stake their tokens to miners for DPoS consensus. [pallet-staking](https://marketplace-staging.substrate.dev/pallets/pallet-staking) will be utilized for initial implementation and we will finely package it into our pallet-staker. |
| 4. | UI & Frontend | The frontend user interface of three modules with four roles including DeAPI description for user access, and document website to guide miner DeAPI execution, Inventor submission DAO project, and token staking. |  

## Future Plans

- Add generic SaaS service applications rather than just AI services into the project and rename the project as SaaS3 instead of DeAINet.
- Initially, the parathreads will be utilized to connect relay chain. Once the project goes well, we will participant slot auction. 
- Marketing the project to develop DeAI's ecosystem to make the world in a better place with a fully decentralized AI SaaS computing platform, since we believe the decentralized AIs will become generic quantizers to quantize all human behaviors and further become the border of smart contracts on blockchain in the future.  


## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** 

Web3 Foundation Website

**Related Files**

- PitchDeck: https://www.deainet.io/file/PitchDeck_DeAI.pdf
- DeAI Website: https://deainet.io
- API-NFT Demo (move to RMRK standard soon): https://deainet.io/non-api-nft

**Other Grants**

- IPFS Open Grant (Accepted)
