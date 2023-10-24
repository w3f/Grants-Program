# Octan Network

> This document will be part of the terms and conditions of your agreement and therefore needs to contain all the required information about the project. Don't remove any of the mandatory parts presented in bold letters or as headlines (except for the title)! Lines starting with a `>` (such as this one) should be removed. Please use markdown instead of HTML (e.g. `![](image.png)` instead of `<img>`). 
>
> See the [Grants Program Process](https://github.com/w3f/Grants-Program/#pencil-process) on how to submit a proposal.
- **Team Name:** Octan Labs
- **Payment Address:** Ethereum address (DAI) 0xC0e09A112Ae45d87597CD78c11b7D95a55aCC5F0
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

> :exclamation: *The combination of your GitHub account submitting the application and the payment address above will be your unique identifier during the program. Please keep them safe.*
## Project Overview :page_facing_up:

### Overview

- Establish Trust and Credibility in Web3 by onchain Reputation Ranking
- Inspired by Google PageRank, Octan Network invents a **novel onchain Reputation Ranking System** to evaluate the importance of onchain entities, extract user persona and behaviors, social insights and interrelations within Web3 ecosystems. Reputation score is computed from onchain transactions via adaptive PageRank and methematical pairwise ranking algorithms. Reputation score can be carried by *soulbound token* to prove trustworthiness & credibility of Web3 entities. Octan also labels onchain addresses, classifying contracts and dapps, making it more human-readable, and fueling AI/ML applications with meaningful features. Octan Reputation ranking and its onchain analytics platform is efficient to analyze the importance and impact of dapps, to qualify and segment Web3 users and onchain entities. This distincts Octan from all other onchain analytics firms focusing on cash-flow & financial indicators, making Octan the 1st marketing tool provider in the Web3 space, where airdrops, retroactive campaigns, IDOs, and whitelisting are popular.
- In fact, Octan Network provides onchain analytics which is neccessary for any Web3 ecosystems, including Polkadot and Kusama.
- Google succeeded with PageRank in extracting the importance of website in the World-Wide-Web, then offered digital marketing tools and efficient customer targeting measurement. Web3, in a nascent, has no proper metric to measure trustworthiness, no solution to extract social insights and user behaviors. That's why Octan Network has attacked to onchain analytics problem but focuses more to establish quantitative measurement of trust, to qualify dapps and segment users in Web3 space. This implies wide applications in Web3 marketing tools, user segmentation, and further in credit-lending onchain without conpromising privacy and autonomy. The onchain reputation problem and its critical role in Web3 is asserted by [Coinbase in its request for builders](https://www.coinbase.com/blog/request-for-builders-startups-i-would-build-today).

### Project Details

Currently, Octan production has **5 major components** as follows:
- *Data Processing Pipeline:* data lake contains raw block data collected from various blockchains. In pre-processing, onchain raw data is transformed to structural (transactional) data together with onchain statistics (total txns, gas spent, tx volume, etc). The pre-processed data is stored at data warehouse as input to compute reputation score and ranking, and to query for analytical purposes later.
- *Reputation Ranking System:* the key component of Octan Network, implemented adaptive Pagerank algorithms to initiate directed graph and compute reputation score from transactional data. Reputation scores and ranking list of onchain addresses are stored at reputation DB (as a warehouse) for query and analytical purposes later.
- *Reputation Board:* an interface for users to search onchain addresses (and/or dapps), their reputation scores & ranking, onchain statistics.
- *Analytics platform:* an interface for customers to query reputation scores, onchain statistics, visualize and analyze them, to extract social insights and segment users. The platform also provides an interface to label onchain entities, classify contracts and dapps into different categories (e.g. DeFi, NFT, DAO, socialfi, gamefi, etc), making onchain entities much easier to understand and analyze.
- *1ID & Soulbound:* an wallet management tool, allowing users to mint soulbound token carrying their reputation score as a proof of trust and contribution onchain. Octan 1ID also offers interface for users to track their onchain activities.

Current **Architecture Overview** of Octan Network

![Current Architecture Overview of Octan Network](https://github.com/Octan-Labs/Grants-Program/assets/45308207/9cade4e3-989f-485f-8ce5-5cd82611b1a9)  

Technical Architecture Overview of Data processing
![Technical Architecture Overview of Data processing](https://github.com/Octan-Labs/Grants-Program/assets/19373324/774972f6-c878-4e9b-9ab1-1531893bdf0a) 
Data Processing Flows
![image](https://github.com/Octan-Labs/Grants-Program/assets/45308207/2d49f49f-d43f-43f1-955a-4337dd45b989)  

See **current designed UIs** of Octan Network (released MVP):

![MVP - Reputation Board (all addresses tab)](https://github.com/Octan-Labs/Grants-Program/assets/45308207/b6bb79fe-5595-4066-bff6-e0091096b30a)
![MVP - Reputation Board (project/dapp tab)](https://github.com/Octan-Labs/Grants-Program/assets/45308207/896b6b2c-7434-418d-bf4e-c0c726dbab2d)
![MVP - 1ID & Soulbound token](https://github.com/Octan-Labs/Grants-Program/assets/45308207/b3ea21ca-5001-4efb-8afa-0abbac6489ff)



- Core components: [reputation ranking & scoring](https://github.com/Octan-Labs/Reputation-scoring), [data pipiline](https://github.com/Octan-Labs/pipeline), [Octan Soulbound](https://github.com/Octan-Labs/Octan1ID-SoulBound). 

### Ecosystem Fit
- Polkadot is a heterogeneous multi-chain system, hence data on the ecosystem is complex and fragmented into many places (e.g. Kusama, Polkadot, parachains, parathreats). This makes difficulties to track and analyze onchain data, especially to extract user behaviors and social insights. Octan Network provides a comprehensive solution combining reputation ranking, labeling and onchain analytics to extract meaningful insights and individual persona from onchain transactions, then establishing trustworthiness & credibility natively onchain.

- **Targeted customers:** Octan Network targets all existing/future users and developers on the entire Kusama & Polkadot. We also serve investors/researchers/marketers who are interested at the ecosystem and its dapps. 
 - **Market needs:** Octan Network meets all the needs of exploring reputation scores and onchain statistics, identifying onchain entities, analyzing and evaluating parachains & dapps, finding social insights and user persona, demographic and segmentation. Further, Octan offers a methods for users and dapps to build their trust and credibility by their own onchain activities and contributions. Onchain reputation is a critical problem in Web3 [being requested by Coinbase Venture](https://www.coinbase.com/blog/request-for-builders-startups-i-would-build-today?).
- **Competitors & USP:** [Web3Go](https://github.com/w3f/Grants-Program/blob/master/applications/Web3Go.md) is an onchain analytics project, granted by Web3 Foundation, successfully raised $4M in seed round led by Binance Labs. Existing onchain analytics firms (e.g. Chanalysis, Messari Nansen, Dune Analytics, Arkham, Web3Go, etc) focuses on tracking cash-flow, smart-money and onchain statistics dashboards, visualization. Octan Network, distinguished among all others, focuses on extracting reputation, social insights & inter-relationships, individual persona and user segmentation, then establish trust & credibility natively onchain without compromising privacy & autonomy. This is all done by Octan's **innovative & unique solutions** (i.e. *reputation ranking & scoring*, *labeling onchain entities*, *soulbound token*) which are unique selling points and competitive advantages of Octan Network.

## Team :busts_in_silhouette:

### Team members

- Paven Do: leader, Head of FPT Blockchain Labs, cofounder & ex-CTO of Spores, PhD (blockchain & data science) from Hong Kong University of Science and Technology
- Quang Tran: senior blockchain developer
- Toan Le: senior blockchain developer
- Toan Nguyen: senior blockchain developer
- Dung Do: senior AI/ML & data scientist
- Chandler Ta: data analyst/engineer
- Long Nguyen: senior business growth
### Contact

- **Contact Name:** Paven Do
- **Contact Email:** paven@octan.network
- **Website:** [https://octan.network/](https://octan.network/)

### Legal Structure

- **Registered Address:** unregistered
- **Registered Legal Entity:** unregistered [Octan Labs]

### Team's experience

- 2022 & 2023: building Octan Network, an onchain analytics platform and reputation ranking system on EVM-compatible blockchains
- 2022 & 2023: building private, consortium layer-1 for enterprise and its applications (Leter of Credit protocol, loyalty platform)
- 2021: developed multi-chain NFT marketplace and Web3 gaming launchpad on Ethereum, BSC, and Polygon.
- Other blockchain-based products: non-custodial wallet (mobile app), onchain explorer, Appchain on Octopus, UTXO-integration into ICP.

### Team Code Repos
- [Octan Labs (all projects)](https://github.com/Octan-Labs)
- [Octan Network: Reputation Ranking System](https://github.com/Octan-Labs/Reputation-scoring)
- [Octan Network: data pipeline](https://github.com/Octan-Labs/pipeline)
- [Octan Network: 1ID & soulbound token](https://github.com/Octan-Labs/Octan1ID-SoulBound)
- [Appchain on Octopus](https://github.com/Octan-Labs/octan-network-appchain)
- [UTXO-integration into ICP](https://github.com/Octan-Labs/UTXO-integration-proposal)

GitHub accounts of team members. 
- Quang Tran: https://github.com/quangtran8588
- Toan Le: https://github.com/imtoanle
- Dung Do: https://github.com/dungdo123
- Chandler Long Ta: https://github.com/longthanhta

### Team LinkedIn Profiles (if available)

- Paven Do: https://www.linkedin.com/in/paven-do/
- Quang Tran: https://www.linkedin.com/in/quangtran88/
- Toan Le: https://www.linkedin.com/in/toanledev/
- Toan Nguyen: https://www.linkedin.com/in/toan-nguyen-7635491a2/
- Dung Do: https://www.linkedin.com/in/dungdo398/
- Chandler Ta: https://www.linkedin.com/in/longthanhta/
- Long Nguyen (Max Rogue): https://www.linkedin.com/in/maxrogue3107/

## Development Status :open_book:

- We have completely implemented data processing pipeline [Octan data pipeline](https://github.com/Octan-Labs/pipeline) and [Octan Reputation Ranking System](https://github.com/Octan-Labs/Reputation-scoring) for several EVM-chains, close alpha versions of labeling & analytics platform.
- Octan Network has released reputation board on 4 chains (Ethereum, BNB Chain, Arbitrum, Polygon), soulbound token to carry & update user reputation scores on BNB Chain. Visit reputation board and Octan webapp here: https://octan.network/
- Scientific research publications about the onchain reputation ranking problem, conducted by Octan core-team members: (2022) [PageRank and HodgeRank on Ethereum Transactions: A Measure for Social Credit](https://www.igi-global.com/article/pagerank-and-hodgerank-on-ethereum-transactions/315737), (2019) [Delegated proof of reputation: A novel blockchain consensus](https://dl.acm.org/doi/abs/10.1145/3343147.3343160)
- Octan reputation & onchain analysis reports: https://octan.network/blog/
- Octan documentation on reputation ranking, onchain analytics, soulbound and Web3 Identity: https://docs.octan.network/octan-docs-en/overview/welcome-to-octan-network

## Development Roadmap :nut_and_bolt:
Herein, we focus on constructing a roadmap of developing Octan Reputation Ranking into the Polkadot Ecosystem, more explicitly, implementing & deploying Reputation Ranking & Soulbound on Moonbeam & Moonriver (an EVM-parachain of Polkadot Eco).  

> :exclamation: If any of your deliverables is based on somebody else's work, make sure you work and publish _under the terms of the license_ of the respective project and that you **highlight this fact in your milestone documentation** and in the source code if applicable! **Teams that submit others' work without attributing it will be immediately terminated.**

### Overview

- **Total Estimated Duration:** 3 months
- **Full-Time Equivalent (FTE):**  6 (implying 18 man months throughout the project's duration) 
- **Total Costs:** $30,000 USD.

### Milestone 1: data pipeline, Soulbound on EVM-parachains of Polkadot and onchain Reputation Ranking for Frontier/EVM-parachains of Polkadot

- **Estimated duration:** 2 months
- **FTE:**  12
- **Costs:** $20,000 USD

> :exclamation: **The default deliverables 0a-0d below are mandatory for all milestones**, and deliverable 0e at least for the last one. 

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Unlicense |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains the onchain reputation concept and how a user can use the reputation board. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an **article**/workshop that explains the concept of onchain reputation and the vision of Octan Network. |
| 1a. | Crawling raw data | We will build module for indexing onchain transactions, extrinsics, events from archive node |
| 1b. | Labeling onchain entities | We will build an interface for labeling onchain contracts/dapps and other entities of the targeted chains. |

Techstack:
- Data indexing: indexing cli written in python index into clickhouse warehouse and s3-compatible object storage
- Labeling engine: writing in node.js, with GraphQL interface, and React for the UI

Reproducable assets:
- Data indexing python CLI and docker container
- Labeling: docker container

### Milestone 2: Soulbound token and onchain analytics for Frontier/EVM-parachains of Polkadot

- **Estimated Duration:** 1 month
- **FTE:**  6
- **Costs:** $10,000 USD


| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Unlicense |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains the onchain reputation concept and how a user can use the reputation board and analytics (BI) interface, mint soulbound token to carry reputation scores. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an **article**/workshop that explains the concept of onchain reputation and the vision of Octan Network. |
| 1  | Onchain analytical reports | We will publish analytical reports (in form of articles and pdf) extracting onchain reputation, performance, social insights & individual persona of the the targeted parachains on Polkadot.
| 2a  | Onchain soulbound token | Smart contract written in solidity, have interface of ERC721 to have a link to result of ranking algorithm as metadata  link
| 2b  | Soulbound UI | We will develop an UI for users to mint soulbound tokens and update their reputation scores. |

Techstack:
- Reputation ranking algorithm: written in python, implement as jupyter notebook and deploy on GraphScope engine, we use open source BI tool called superset to export charts.
- Onchain soulbound token and UI: written in solidity, and use React for UI

Reproducable assets:
- Reputation ranking algorithm: jupyter notebook and test data
- Onchain soulbound token and UI: Deployed smart contract on chain with interface

## Future Plans

- Regarding technical development, after successfully implementing onchain Reputation Ranking on EVM-compatible parachains, Octan will expand to support non-EVM parachains and the entire Polkadot ecosystem (including Kusama ecosystem).
- Regarding business and marketing, Octan Network is promoting partnership with media, offering comprehensive reputation reports and in-depth analytics on dapps and their user quality to spreading the concept of reputation score. Octan also partners with marketing agencies, IDO & airdrop platforms, launchpad, provides them reputation APIs, onchain social insights, individual persona and user segmentation to run airdrop, retroactive campaigns, IDO whitelists more efficiently and effectively.
- Ultimately, with the mission of establishing Trust and Credibility on Web3 space, Octan Network aims to become the No1 onchain analytics platform on Polkadot Ecosystem in the sense of social insights & individual persona. We also envision a reputation ranking system & onchain analytics platform, a decentralized oracle to compute and feed reputation & credit scores, natively supporting onchain entities across multiple blockchain ecosystems.
![The ultimate visionary architecture of Octan Network ](https://github.com/Octan-Labs/Grants-Program/assets/45308207/d60d7deb-8286-41e5-b5dd-6b3cbe95bcc2)


## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation Website, recommendation from a team member of Subwallet (a grantee of Web3 Foundation).

Additional information (achievements of Octan Labs):
- Octan team won $25,000 USD grant from Dfinity Foundation, $50,000 USD prize from Octopus hackathon, $1500 USD from BNB Chain grant DAO.
