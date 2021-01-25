![PoolzLogo](https://www.poolz.finance/images/Logo-blue.fbf201f591bea26301f0dd91df9ae328.webp)
# Open Grant Proposal by Poolz Finance

> This document is referenced in the terms and conditions and therefore needs to contain all the required information. Don't remove any of the mandatory parts presented in bold letters or as headlines! See the [Open Grants Program Process](https://github.com/w3f/Open-Grants-Program/blob/master/README_2.md) on how to submit a proposal.

* **Project Name:** Poolz Finance
* **Team Name:** Poolz Technologies
* **Payment Address:** 1557aTpm5VwmNYRqzxQ6Sd756uFbQJFVsQ

*The above combination of your GitHub account submitting the application and payment address will be your unique identifier during the program. Please keep them safe.*

## Project Overview :page_facing_up: 

### Overview
  
Poolz is a blockchain firm developing tools that help projects deploy cross-chain applications and tokens. Our first implementation is a cross-chain swapping protocol that   allows blockchain startups to bootstrap the liquidity period the listing days on a decentralized infrastructure.
The core code is open source and designed uniquely for DAO ecosystems. The product has already been integrated with numbers of blockchains including Moonbeam, that will allow our aplication to work on PolkaDot and Kussama.
Acording to the Moonbeam team, we are sync with them on the deployment time.
Our Testnet aplication already avalible on Moonbase Alpha: https://moonbase.poolz.finance (connection to MetaMask using web3)

Our goal is to enable startups to manage decentralized liquidity auctions. 
Poolz embarks on a long-term mission to disrupt and fully decentralize liquidity auctions. The project is built with a vision to facilitate greater interoperability through cross-chain interactions, which, in turn, will further strengthen DeFi adoptions and value.
As blockchain innovators, we believe that decentralized, censorship-resistant ways of fundraising, there has been an emergence of Initial DeFi Offering (IDOs) and Initial Liquidity Offering (ILO). Furthermore, given the rise of Automated Market Makers (AMMs), a token’s liquidity has become a crucial determinant of its market price.  
  

### Project Details 

At this stage, the stack that we used for the MVP is Solidity, javascript, react, web3, and the key integrations including Remix, Truffle, and MetaMask.
Testnet version on Rinkeby and TomoChain: https://app.poolz.finance
Our Documentation can here: https://docs.poolz.finance/

### Ecosystem Fit 
There are a number of competitors in our space (Polkastarter and Bounce). We are aiming to enable the possibility to issue, sell/buy, and move tokens between different blockchains.

## Team :busts_in_silhouette:

### Team members
* Guy Oren CEO
* Liam Cohen CMO, Stan Goldin CTO
* Omry Oz Web3 Architect, Netanel Vaknin Frontend Developer, Charlie Isslander Graphic Designer, Mohammad Musharraf Content Manger, Katerina Gordon Sales Representative, Sylvester Anichebe Community Manager .
* please see below our full team inculding advisors : https://www.poolz.finance/aboutus


### Contact
* **Contact Name:** Guy Oren
* **Contact Email:** guy@poolz.finance
* Website: https://www.poolz.finance/

### Legal Structure 
* **Registered Address:** Griffith Corporate Centre, Kingstown, Saint Vincent and the Grenadines.
* **Registered Legal Entity:** Poolz Technologies Ltd, 26043 BC 2020.

### Team's experience
We are three founders that have an affinity for blockchain technology with vast experience in computer software.

I’m Guy Oren, the founder and CEO of Poolz, from Israel. Over the past 8 years, I have founded 3 startups. My focus is on developing solutions for the Blockchain & Fintech Industry using my knowledge and experience of working in a hyper-growth environment. In my previous role, I managed over 40 employees, raised money from private equity (angels and VC), and operated the product across 60 countries. I have experience in managing operations, P&L management, and working in a fast-moving environment.

Stan Goldin, CTO.
Stan, our CTO, is an experienced founder and developer who has vast experience working in the computer software industry. Skilled in management with strong business development skills, Stan aims to make technology easy and accessible for all. His love for innovative technology brought him into the blockchain space in 2016. He has previously co-founded Cryptonex — Algo Trade.

His main focus is on Poolz Defi and helping us build the first cross-chain decentralized environment architecture designed uniquely for DAO ecosystems.

Liam Cohen, CMO.
Liam has been a crypto investor for the last 6 years. In that time, he has built valuable connections and gained high-level knowledge in blockchain and cryptocurrency. In his last role, Liam managed the community engagement at Endor Protocol (EDR), an MIT-based startup that raised over $50 million from investors such as Google and others.

### Team Code Repos
* https://github.com/The-Poolz/Poolz-Back

### Team LinkedIn Profiles
* https://www.linkedin.com/in/guy-oren-028b9a72/
* https://www.linkedin.com/in/stan-goldin/
* https://www.linkedin.com/in/liam-cohen-786323152/

## Development Roadmap :nut_and_bolt: 

This section should break out the development roadmap into a number of milestones. Since the milestones will appear in the grant contract, it helps to describe the functionality we should expect, plus how we can check that such functionality exists in the product. Whenever milestones are delivered, we refer to the contract to ensure that everything has been delivered as expected.

Below we provide an **example roadmap**. In the descriptions it should be clear how the project is related to Substrate and/or Polkadot. We recommend that the scope of the work can fit within a 3 month period and that teams structure their roadmap as 1 month = 1 milestone. 

For each milestone:
* Please be sure to include a specification of your software. Treat it as a contract - the level of detail must be enough to later verify that the software meets the specification.
To assist you in defining it, we created a document with examples for some grant categories [here](../src/grant_guidelines_per_category.md).
* Please include total amount of funding requested per milestone.
* Please note that we require documentation (e.g. tutorials, API specifications, architecture details) in each milestone. This ensures that the code can be widely used by the community.
* Please provide a test suite, comprising unit and integration tests, along with a guide on how to run these.
* Please commit to providing a dockerfiles for the delivery of your project. 
* Please indicate the milestone duration, as well as number of Full-Time Employees working on each milestone, and include the number of days along with their cost per day.
* Deliverables 0a-0d are mandatory and should not be removed, unless you explicitly specify a reason within the PR's `Additional Notes` section (e.g. Milestone X is research oriented and as such there is no code to test)

### Overview
* **Total Estimated Duration:** 8 weeks
* **Full-time equivalent (FTE):**  2 FTE
* **Total Costs:** 0.88 BTC

### Milestone 1 Example — Implement Substrate Modules 
* **Estimated Duration:**  8 weeks
* **FTE:**  2 FTE
* **Costs:** 0.88 BTC

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License |  MIT |
| 0b. | Documentation | Documents containing the description of whole architecture design for Poolz Finance. We will provide both inline documentation of the code and a full tutorial that explains how to interact and communicate with the protocol. |
| 0c. | Testing Guide | We will provide a full test suite and guide for the POC.  [![codecov](https://codecov.io/gh/The-Poolz/Poolz-Back/branch/master/graph/badge.svg)](https://codecov.io/gh/The-Poolz/Poolz-Back)  | 
| 0d. | Article/Tutorial | We will write an article or tutorial that explains the work done as part of the grant. here find an example for TomoChain integration https://poolz.medium.com/case-study-poolz-integration-with-tomochain-testnet-b2e6f07548fa
| 1. | MoonBeam | We will migrate a fully working version on MoonBeam test network, it will be on our [testapp](https://test.poolz.finance) with the other networks |  



### Milestone 2 Example — Additional features
| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 2. | Kusama | We will create/migrate a fully working version on Kusama network with MoonBeam, it will be on our [app](https://app.poolz.finance) with the other networks |  
| 3. | PolkaDot | We will create/migrate a fully working version on PolkaDot network MoonBeam, it will be on our [app](https://app.poolz.finance) with the other networks |  


## Future Plans
Future Developments will focus on the following:
* Token Factory- Issue new tokens based on any blockchain supported on Poolz
* Synthetics Tokens - Move and sell your tokens across different blockchain networks.
* Locked Deal - Enable scheduling token transactions for a later date and time.
* Governance implementation
* Poolz incubation 

[Poolz TIERS and random whitelist (VRF)](https://poolz.medium.com/poolz-integrates-chainlink-vrf-on-mainnet-for-fair-and-unbiased-whitelisting-of-investors-3d130c4fd436)

[Synthetix token and bridge:](https://poolz.medium.com/cross-chain-integration-poolzdefis-solution-for-interoperable-blockchain-ecosystems-5ab05b6a5154)

## Additional Information :heavy_plus_sign: 
Our main achievements so far
* Poolz product development is at a very advanced stage and the platform already lives on 3 different blockchains (Ethereum, Tomochain, Moonbean).
* [Audit](https://arcadiamgroup.com/audits/PoolzAudit.pdf) of The Poolz Finance Contracts
* Decentralized pools
* Open Source Development Opportunities
* Public Bug bounties

**Have you applied for other grants so far?**
No
