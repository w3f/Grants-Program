# NFT Storage Checker

- **Team Name:** NFT.Storage Ltd
- **Payment Details:**
  - **DOT**: 1yaVUaakB9Ew9M3yox5t9u7QuNup3vkK65FwJaWvd8iZyHo
  - **Payment**: Fiat 06.09.2024, 03.54pm AEST
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2 

## Project Overview :page_facing_up:


### Overview
**Tagline:**  
Showcase proof of long-term storage for NFTs with visible trust indicators.

**Project Description:**  
NFT.Storage is a decentralized storage public good designed to preserve the longevity and accessibility of NFTs by leveraging IPFS and the Filecoin network. The project addresses the critical issue of off-chain NFT data availability, which is highlighted by the significant portion of NFTs that become inaccessible due to centralized storage failures or poorly managed decentralized storage systems.

This project is focused on the NFT Storage Checker, a new powerful tool that utilizes the data uploaded to long-term storage. The tool enables block explorers, marketplaces, and wallets to verify the long-term storage and preservation of NFTs. By integrating seamlessly through a user-friendly API, the NFT Storage Checker displays verification badges on NFTs, providing visible proof of long-term, decentralized storage on the Filecoin network. This transparency boosts user confidence, ensuring the security and durability of digital assets while establishing new best practices for NFT storage. Platforms can elevate trust and credibility by showcasing the long-term preservation of their NFTs.

**Relation to Substrate/Polkadot/Kusama:**  
The NFT Storage Checker will play a pivotal role in boosting trust and reliability for NFTs minted on Polkadot by providing a transparent and verifiable method for users to confirm that their NFTs are securely backed up. This will not only attract more NFT projects to the Polkadot ecosystem but also reinforce the broader NFT ecosystem by enhancing the overall integrity and longevity of digital assets.

The NFT Token Checker will be seamlessly integrated with block explorers, wallets, and marketplaces that support Polkadot. Picture a world where a distinct icon instantly assures users that their NFTs are preserved in long-term, decentralized storage—this is the powerful transformation we’re bringing to life.

**Why this Project:**  
Our team has deep expertise in decentralized storage technologies, and we see a critical need in the NFT ecosystem to ensure long-term preservation and verifiability of NFT data. This project solves a crucial problem, offering transparency and trust in NFT storage and providing solutions no other competitors currently offer.



### Project Details

**End User Experience:**  
Users will experience the NFT Storage Checker on block explorers, wallets, and marketplaces. [Here are mockups of the NFT.Storage icon in situ.](https://www.canva.com/design/DAGP82ziTgc/x7gy8rRuGrqBljPh2FpCXA/view?utm_content=DAGP82ziTgc&utm_campaign=designshare&utm_medium=link&utm_source=editor)
 On the NFT image, there will be an icon that represents long-term storage. When the user clicks on the NFT metadata details, they will see a "long term storage" section that notes if the NFT is backed up with NFT.Storage or not.

**Development Principles:**  
NFT.Storage is committed to open-source principles. The platform's codebase, including the NFT Storage Checker, will be made available to the public, allowing for community contributions and ensuring transparency in how NFT data is preserved and verified. It will be dual-licensed under MIT and Apache 2.0.

**API Core Functionality:**  
The NFT Storage Checker is built on the foundation of our flagship public good, which enables creators and minting platforms to back up off-chain data with NFT.Storage. First, they mint their NFTs, then send us the NFT data—metadata and imagery CIDs, blockchain(s) minted on, contract address, and token IDs. We preserve these in long-term Filecoin storage. The storage will be managed by smart contracts and will also be paid for, ongoing, by our on-chain smart contract.

The NFT Storage Checker uses the data sent to us—the blockchain, contract address, and token IDs (or similar depending on the blockchain). Block explorers, marketplaces, and wallets integrate with our APIs and check to see if NFTs they display are backed up in long-term storage. If the NFT is backed up by us, a small icon is displayed next to the icon that represents the blockchain it was minted on, and in the NFT details it notes that the long-term storage provider is NFT.Storage.

**An Overview of the Technology Stack to be Used:**
- **Front End / API:** next.js, Vercel
- **Database:** Postgres
- **Decentralized Storage:** IPFS, Filecoin Ethereum Virtual Machine (FEVM)

**Core Components, Protocols, and Architecture:**
- An open-source API that provides long-term storage verification for NFTs.
- Verification icon and visual guidelines for marketplaces, wallets, and block explorers.
- Technical documentation outlining the implementation of the NFT Storage Checker and user-facing help docs for integration with wallets and block explorers.


### Ecosystem Fit

**Where and How it Fits:**  
NFT.Storage fills a critical gap in the NFT ecosystem by aiming to ensure that NFTs maintain their value and cultural significance through verifiable long-term storage. The NFT Storage Checker brings transparency to holders and traders.

**Target Audience:**  
The buyers are NFT marketplaces, wallet providers, and block explorers. NFT holders and traders are the end users.

**Needs Met:**  
Solves the problem of off-chain NFT data loss, bringing transparency to NFTs that are stored long-term.

**Evidence of Need:**  
The growing percentage of NFTs losing their associated media highlights the need for a solution that provides verifiable proof of NFT data preservation. [Here is a link to case studies and research.](https://docs.google.com/document/d/1xo481e1wI5ZeOKb8WFLKeFOhFgXv1tv31FyttNHvLqA/edit?usp=sharing)
 that delve into NFT asset fragility and metadata storage issues.

**Other Similar Projects:**  
ClubNFT is also addressing the problem of NFT preservation. Here are the key differences between our NFT Storage Checker and ClubNFT, broken down into bullets:

- **How we back it up:**  
  - **ClubNFT:** Backs up NFTs by pinning files to IPFS and providing local copies to protect against data loss from garbage collection.  
  - **NFT Storage Checker:** Utilizes long-term, endowment-backed storage on the Filecoin network, offering a more robust and decentralized solution for aiming to ensure preservation of NFTs.

- **Who the buyer is:**  
  - **ClubNFT:** Targets individual NFT collectors who pay for a subscription to protect their personal collections.  
  - **NFT Storage Checker:** Aims to integrate directly with platforms (marketplaces, wallets, block explorers) to provide transparent, long-term storage verification for all users interacting with NFTs, without requiring NFT holders to have individual subscriptions. Instead, the apps pay the monthly subscription for the NFT Storage Checker.

- **Reach:**  
  - **ClubNFT:** Limited to paying customers who use the service for their individual collections.  
  - **NFT Storage Checker:** Designed to reach a broader audience by being available across various platforms, ensuring visibility wherever NFTs are bought, sold, or viewed, thus enhancing transparency for all users.
``


## Team :busts_in_silhouette:

> Please note that the data provided in this section is for administrative and informational purposes only. All beneficiaries of a grant must also be listed in the KYC/KYB process during the application phase. See our [FAQ](https://grants.web3.foundation/docs/faq#what-is-kyckyb-and-why-do-i-have-to-provide-this-data) for more info.

### Team members

- Name of team leader: Elizabeth Griffiths
- Names of team members: Elizabeth is supported by contractors, agencies and a strong advisory team including:
- **Jonathan Victor**: Advisor to NFT.Storage. Co-Founder of Ansa Research, with deep expertise in decentralized storage technologies.

- **Jake Loo**: Advisor to NFT.Storage. Co-Founder & CTO of ThirdWeb

- **Chris Halaska**: Advisor to NFT.Storage, Founder of Halaska Studio, offering strategic guidance on design, developer and user experience

- **Jesse Damiani**
Strategy & BD Lead, Arts & Culture
Role: Strategy and go to market planning support
Bio: Jesse Damiani leads Strategy and Business Development for Arts and Culture at NFT.Storage, where he plays a pivotal role in defining the platform's vision and outreach efforts. Recently, he strategized, planned, and organized NFT.Storage's iconic launch event at the Museum of Modern Art PS1 during NFT.NYC. The event celebrated the platform's evolution and future, unveiling the new version of NFT.Storage and DAO. Jesse's expertise in art and culture is instrumental in guiding NFT.Storage's partnerships and community engagement strategies. He is also the Senior Curator at Nxt Museum and an adjunct assistant professor at the University of Southern California. 
LinkedIn: https://www.linkedin.com/in/jessedamiani/
Twitter/X: https://twitter.com/JesseDamiani

- **Lighthouse.Storage, our strategic development partner**
Company website: https://lighthouse.storage/
Company twitter: https://twitter.com/LighthouseWeb3
Nandit Mehra, Founder of Lighthouse 
LinkedIn: https://www.linkedin.com/in/nanditmehra/
Twitter/X: https://twitter.com/nanditmehra
Github: https://github.com/nandit123

- **Mooning, our marketing partner**
Company website: https://mooning.com/
Company twitter: https://twitter.com/mooningagency
Lisa Teh, Co-Founder of Mooning 
LinkedIn: https://www.linkedin.com/in/lisateh/
Twitter/X: https://x.com/lisateh_



### Contact

- **Contact Name:** Elizabeth Griffiths
- **Contact Email:** elizabeth@nft.storage
- **Website:** https://nft.storage

### Legal Structure

- **Registered Address:** C/O- Bacchus Advisory, Suite 209, 56 Bowman Street, PYRMONT NSW 2009 Australia
- **Registered Legal Entity:** NFT.Storage Ltd

### Team's experience

Provided above 

### Team Code Repos

Provided above 

### Team LinkedIn Profiles (if available)

Provided above 

## Development Status :open_book:

The NFT Token Checker feature is part of our ongoing development to provide verifiable long-term NFT storage. Our flagship long-term storage public good, NFT.Storage, is live, and this feature will be built on the current platform. Here it is on Github:  
[https://github.com/nftstorage/NFT.Storage-Flagship-Preservation-Public-Good](https://github.com/nftstorage/NFT.Storage-Flagship-Preservation-Public-Good)

We have not started development of the NFT Storage Checker yet.  
We have done many customer research interviews; however, we did not ask for permission to share those interviews, so I will refrain from sharing them here. We can, however, share that Brave wallet is on board to be a launch partner. [Here is the list of projects we have interviewed.](https://docs.google.com/document/d/1tw_zLY_ozAetxpWIjXmyIk7r2QrQZ1aXhpskU7RKZ60/edit?usp=sharing)

[Here is a link to academic publications and blog posts/articles relevant to the problem.](https://docs.google.com/document/d/1xo481e1wI5ZeOKb8WFLKeFOhFgXv1tv31FyttNHvLqA/edit?usp=sharing)

**References to conversations you might have had related to this project with anyone from the Web3 Foundation:**  
I spoke to Piet about this grant application prior to submitting it. He fully supported the grant application and the level that we are applying for.


## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** Duration of the whole project (e.g. 2 months)
- **Full-Time Equivalent (FTE):**  Average number of full-time employees working on the project throughout its duration (see [Wikipedia](https://en.wikipedia.org/wiki/Full-time_equivalent), e.g. 2 FTE)
- **Total Costs:** Requested amount in USD for the whole project (e.g. 12,000 USD). Note that the acceptance criteria and additional benefits vary depending on the [level](../README.md#level_slider-levels) of funding requested.
- **DOT %:** Percentage of Total Costs to be paid in (vested) DOT (≥ 50%)

**Development Roadmap**

### Overview

- **Total Estimated Duration:** 3 months
- **Full-Time Equivalent (FTE):**  2
- **Total Costs:** 30,000 USD
- **DOT %:** 50

### Milestone 1 — Discovery & Design  
**Estimated Duration:** 1 month  
**Costs:** $5,000  

**Scope:**  
- Conduct user and market research to define detailed requirements.  
- Create the API spec, instrumentation spec.  

**Milestone Exit Criteria:**  
- API design and instrumentation requirements complete.  

---

### Milestone 2 — Build  
**Estimated Duration:** 1.5 months  
**Costs:** $20,000  

**Scope:**  
- Implement API spec and instrumentation requirements in iterative development cycles.  
- Write the technical docs, icon guidelines, and end user help documentation.  
- Write the test plan.  
- Design the icon and detailed front-end guidelines for NFT apps.  

**Milestone Exit Criteria:**  
- API build and technical docs complete.  
- Icon, front-end guidelines, and end user help documentation complete.  
- Test plan ready.  

---

### Milestone 3 — Testing & Launch  
**Estimated Duration:** 0.5 month  
**Costs:** $5,000  

**Scope:**  
- Perform comprehensive end-to-end testing prior to launch.  
- Test the technical docs with users.  
- Deploy the NFT Token Checker.  
- Coordinate with marketing and community teams for a seamless launch, focusing on education and developer resources.  

**Milestone Exit Criteria:**  
- All tests pass.  
- NFT Token Checker Live in production.  

...


## Future Plans

Initially, the NFT Token Checker will be available as an open-source API. We plan to evolve it into an on-chain verification tool that ensures NFTs stored via NFT.Storage are indeed preserved using decentralized storage on the FEVM. 
Additionally, we plan to continue enhancing the long-term storage feature. Our goal is to integrate it directly with L1 and L2s, including Polkadot, so that the NFTs’ off-chain data is backed up in one atomic transaction at the time of minting.
The long term maintenance and development will be financed through grants, NFT.Storage community membership and NFT Storage Checker revenue.
Prior to launch, we plan to get letters of intent from launch partners so that when the product is live we can have launch partners using it very soon after. We will use these partnerships to promote it. 
We will listen to feedback in order to determine how to enhance the product. 

## Referral Program (optional) :moneybag:


- **Referrer:** None
- **Payment Address:** na

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation Website
