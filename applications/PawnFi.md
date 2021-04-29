# W3F Open Grant Proposal

* **Project Name:** PawnFi
* **Team Name:** PawnFi
* **Payment Address:** DAI Address: 0x6A44e6C59e2Fa54962e67a70Dd0A34FdC117Be85


## Project Overview :page_facing_up:

If this application is in response to an RFP, please indicate this on the first line of this section.

If this is an application for a follow-up grant (the continuation of an earlier, successful W3F grant), please provide name and/or pull request of said grant on the first line of this section.

### Overview

Pawnfi is the first DeFi protocol which introduces the pawn concept, also the first underlying infrastructure which enables multi-asset liquidity protocols to be built on. Besides supporting lending protocols for main-stream assets, Pawnfi establishes a base-layer for lending & leasing marketplaces of all types of Non-Standard Assets. 

Pawnfi Testnet V2 is already live, on which the the most representative types of collateral assets include:

- Non-Fungible Tokens (NFT), such as tokenized gaming assets, artworks, collectibles, hashrate, etc.
- Liquidity Provider Tokens (LP tokens)
- Fungible tokens with relatively small liquidity, such as Altcoins
- Alternatives, such as tokenized insurance, bonds, bills, derivatives, etc.
- Other long-tail assets, such as tokenized physical assets 

Pawnfi team is committed towards developing the seamless underlying infrastructure for non-standard assets lending & lease, including solutions of crowd-appraisal, crowd-lending, automatic pool-lending, fast loan, collateral lease or resale, synchronous mining, etc.

Based on Substrate architecture, Pawnfi Chain will be deployed as a standalone chain first, then join in Kusama / Polkadot network when parachain mechanism is ready. Pawnfi team are keen on Substrate architecture because it has comparative advantages as follows:


|  | Pawnfi Substrate Version | Pawnfi Ethereum Version
---|---|---|
Intro | A seamless Pawnfi infrastructure | A liquidity protocol for NSAs
Properties | Competitive transaction performance and high speed | Inefficient transaction performance and lower speed
Cost | Lower tx cost | High gas fee
Upgrade | Easy and smooth to upgrade | Hard to upgrade
Appraisal | Introduce algorithms and votes to prevent hostile appraisers | Hard to prevent hostile appraisers
Chain- agnosticism | Chain-agnostic and support para-chain transaction | Not chain-agnostic



### Project Details

As the pioneering infrastructure to support NSA collateralized loan & lease marketplaces, Pawnfi testnet V2 has been live on Ethereum Ropstern, Binance Smart Chain and Arbitrum. 
- Pawnfi Test version:
https://test-app.pawnfi.com (Test ID Required)
- An overview of the technology stack to be used
    - Blockchain: Rust/Substrate/Docker
    - Frontend: Javascript/React/polkadot.js
- Pawnfi Technology Whitepaper:
https://pawnfi-resources.s3-ap-northeast-1.amazonaws.com/Pawnfi+White+Paper+EN.pdf


### Ecosystem Fit

Currently, there are no known competitors of Pawnfi. Pawnfi Protocol is the first DeFi product which introduces the pawn concept, also the first lending and leasing market to provide fair appraisal and liquidity for Non-Standard Assets (NSA).

Compared with other lending agreements in the industry, Pawnfi can provide a wider range of asset support, a more flexible loan portfolio, and more diversified asset realization solutions.


## Team :busts_in_silhouette:

### Team members

- Wesley Kayne
- Guy Ip
- Dirk Xu


### Contact

* **Contact Name:** Wesley Kayne
* **Contact Email:** dev@pawnfi.com
* **Website:** https://www.pawnfi.com
* **Telegram:** https://t.me/pawnfiprotocol
* **Twitter:** https://www.twitter.com/pawnfiofficial 
* **Medium:** https://medium.com/@pawnfi



### Legal Structure

* **Registered Address:** c/o CCS Trustees Limited, Mandar House, 3rd Floor, Johnson's Ghut, Tortola, British Virgin Islands.
* **Registered Legal Entity:** Pawnfi Limited

### Team's experience

Wesley Kayne, core team member of Pawnfi, former senior structured product architect at Singapore DBS, CFA III. Wesley has more than 5-year development experience of derivatives and quantitative products. Wesley was graduated from Taiwan University and Singapore Management University.

Guy Ip, core team member of Pawnfi, former core engineer at Singapore DBS Murex. Guy has more than 7-year development experience of derivatives and quantitative products. Guy was graduated from Washington University in St. Louis and Purdue University

Dirk Xu, CTO of Pawnfi, former tech leader at Yintech
- https://github.com/dirk-pawnfi
- Has corporate experience in Fintech softwares development for more than 15 years
- Knowledgeable in distributed service oriented architecture, big data processing and massive service
- Proficient in Solidity & Rust & Golang & C++


### Team Code Repos

* https://github.com/pawnfi

### Team LinkedIn Profiles

* https://www.linkedin.com/in/wesley-kayne-235a051b7
* https://www.linkedin.com/in/guy-ip-7132901b8


## Development Roadmap :nut_and_bolt:

### Overview

* **Total Estimated Duration:** 3 months
* **Full-Time Equivalent (FTE):** 3 FTE
* **Total Costs:** 27,000 USD

### Milestone 1 Implement Substrate Modules

* **Estimated Duration:** 3 month
* **FTE:**  3
* **Costs:** 27,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License |  MIT |
| 0b. | Documentation | Pawnfi documentation center (Help center) is live, we will provide more inline documentation of the code and a basic tutorial to show how Pawnfi (Polkadot version) works. |
| 0c. | Testing Guide | The code will have unit-test coverage (min. 70%) to ensure functionality and robustness. In the guide we will describe how to run these tests |
| 0d. | Article/Tutorial | We will write an article or tutorial that explains the work done as part of the grant.
| 1. | Substrate module: crowd lending | Implement the core function of crowd lending |  
| 2. | Substrate module: NSA(non-standard-asset) | Implement an non-standard-asset module  (support ERC20, ERC721 and ERC1155-like assets) |  
| 3. | Substrate module: marketplace | Implement the core function of marketplace |  
| 4. | Substrate module: leasing | Implement the core function of leasing |  
| 5. | Pawnfi Chain | Implement a blockchain based on Substrate and include ERC20 & NFT asset, and the aforementioned function modules. |


## Future Plans

- We will Integrate the EVM module into Pawnfi Chain to support Ethereum ERC20 and NFT tokens, so that the smart contracts developed based on EVM can be freely and seamlessly integrated into our system.
- Pawnfi Chain will differentiate each identity within the encrypted network in order to improve transaction throughput and speed, and reduce transaction fees.
- We will provide all non-standard assets and standard assets with a range of services including borrowing, appraisal, selling, leasing, etc., and maximize the efficiency of funds for asset holders and users through the separation of asset ownership, use rights and income rights. In the future, we will provide more flexible combinations and approaches for asset realization.


## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** personal recommendation

Pawnfi builds the first market place to pawn (with collateralized loan and crowed-appraising), lease and resale non-standard assets. Pawnfi is the leading player in this new niche market. Pawnfi already supports BSC, ETH and Arbitrum. 
