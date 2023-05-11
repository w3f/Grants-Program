# XCM Domain Name Service

- **Team Name:** Scio Labs (AZERO.ID)
- **Payment Address:** USDC (Ethereum Mainnet) to scio.eth - 0x8068a383797811734Cb4fAA1Cc8111897C461915
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

### Overview

- Tagline:  

Research ink! based domain service integrated with XCM

- Brief Description: 

Our team secured first place in the ETHWarsaw hackathon in 2022 with AZERO.ID, an on-chain domain service using ink!, by winning the Aleph Zero Foundation's bounty. The team has since developed a sophisticated on-chain NFT domain platform in ink! v4, and is set to launch on the Aleph Zero mainnet. Our next objective is to expand the platform to the Dotsama ecosystem and leverage its full potential by enhancing it with the use of XCM. Moreover, we have already challenged the potential value creation for the Polkadot ecosystem with different people at Parity. 

- An indication of how your project relates to / integrates into Substrate / Polkadot / Kusama:

AZERO.ID is the first sophisticated on-chain domain name service natively written in ink!. Because at Scio Labs, we envision a future where Substrate smart contracts are predominantly WASM-based. Our plans include launching the initial version of our protocol on the Aleph Zero mainnet as well as our new landing page and dApp soon. We plan to enhance our platform by utilizing XCM, to evolve into a unified Dotsama/Substrate domain name service. As the shift towards WASM-based smart contracts gains momentum, we believe the Dotsama ecosystem is ready for a native on-chain domain system that offers interoperability and usability across all Parachains.

- An indication of why your team is interested in creating this project:

We harbor a profound interest in the domain of on-chain identity with the belief in Substrate and ink! as the leading tech stack for the future of web3. Bringing our domain platform to Dotsama will not only demonstrate the capabilities of ink! and XCM, but add a lot of utility for users in the Dotsama ecosystem. Also, we love to craft great end-to-end user-facing applications well beyond just the infrastructure layer.

A unified on-chain domain standard significantly improves the user experience of handling cross-parachain transactions. Further, on-chain NFT domains are the key primitive of a user's on-chain identity and can be integrated into any kind of application. Our domains provide additional utility via a flexible metadata storage field to store DIDs, verifiable credentials, and subdomains to enable organizational and enterprise use cases. Further, tradeable on-chain NFT domains are a tangible product that increases demand for Polkadot block space and improves ecosystem adoption, as previously seen on Ethereum and other chains. 

### Project Details

- The problem(s) that you want to investigate, and why these are important:
	
We aim to resolve the challenge of identifying the optimal technical architecture for a Dotsama-wide on-chain NFT domain service and how XCM can be leveraged to achieve this. Thus, before we can build an XCM-based domain service in ink!, we will need an in-depth understanding of the XCM technology, currently available standards, and their limitations. Once we have developed a deep understanding, we will identify all potential levels of integration, assess their feasibility, and finally propose the technical architecture of an XCM-based domain service.

- Research questions/hypothesis:

Find below a list of research questions we have identified. This list is not final; other questions might arise in the research process. 
	
	* To what extent is it possible to make XCM calls via ink! smart contracts at the moment, and what will improve in the foreseeable future?
	
	* Does XCM support calls between different smart contract languages? Like ink! <> Solidity.
		
	* What does a cross-chain domain service via XCM actually mean?
	
	* How can XCM be used to achieve "cross-parachain" domain-to-domain asset transfers?

	* How is the gas & registration/renewal fee payment handled? 
	
	* Is XCM needed for cross-chain domain ↔ address resolving?
	
	* Can domains be registered from every parachain via XCM? How can a unique namespace be maintained across parachains?
	
	* Can XCM be used to enable cross-chain NFT domain trading and transfers?

	* Are domain/NFT assets stored on a single chain only? Or, if they are stored on multiple chains how are they tracked on the other ones accordingly?

	* What ink! NFT standard can be used for the best compatibility across the XCM ecosystem? Should a new one be proposed?
	
	* Can XCM enable smart contracts to access the metadata storage field of our domains regardless of where the smart contract is deployed, and the NFT domain is stored?

	* What general security implications must be considered when building a cross-chain domain system with XCM?

	* What happens if a domain is updated on one chain while it is being used to transfer assets on another chain at the same time? What kind of other race conditions could occur?

- Methodology that will be applied:

	* Acquire in-depth knowledge about XCM from all available resources.
	* Identify the design principles to consider while building an XCM-based dApp.
	* Evaluate different ways (like teleportation vs reservation) to accomplish a given task and identify its pros & cons.
	* Propose a plausible high-level architecture of a cross-chain domain service implemented in ink! and integrated with XCM.

- Expected results and how they would be double-checked by the grants team (reproducibility of the data analysis):

	* The first milestone will yield a report on our analysis of XCM and list potential domain integration options without assessing their feasibility. 
	* The second milestone that concludes the scope of this research project delivers a detailed assessment of the potential ways to integrate XCM and proposes a high-level architecture of a cross-chain DNS using XCM.   

- Intended venue for results publication and the timeline for publication:

    *  The results will be published for public access in the form of a Litepaper, and a reference is submitted to the `w3f/Grant-Milestone-Delivery`. Additionally, we plan to communicate the results in a dedicated blog post & our social channels.

- What your project is _not_ or will _not_ provide or implement

    * This project's scope does not include any form of the actual development of the proposed solutions in the final deliverable. The development of a PoC and, moreover, production-ready implementation could be subject to follow-on grants. Though, we'll provide a technical deliverable in the form of a public repository that showcases some sample cross-chain contract interactions with ink! & XCM (see Milestone 2).

### Ecosystem Fit

- Where and how does your project fit into the ecosystem?

    * Our project aims to become the standard for on-chain domains on Polkadot, Kusama, and any Substrate chain such as Aleph Zero. Our protocol and NFT domains are developed with ink! and therefore prepared for the future of WASM-based smart contracts on Substrate. 
    
- Who is your target audience (parachain/dapp/wallet/UI developers, designers, your own user base, some dapp's userbase, yourself)?

    * There are different target audiences for our NFT domains. First and foremost, our domains target any user on Substrate chains. On-chain domains are the first step in establishing an on-chain identity and improving the UX for on-chain interactions. Second, our project addresses all wallet providers as well as dApp/UI & parachain developers who are interested in implementing the user's on-chain domains. 
    
- What need(s) does your project meet?

	* Having a unified NFT domain standard on the smart contract level that works across all Substrate chains and is natively developed with ink!.
	* Improving the user experience for all Polkadot/Kusama and Substrate chain users
	* Attracting more users to Polkadot/Kusama and Substrate chains
	* Improving the security for Polkadot/Kusama/Substrate users by preventing address poisoning and other wallet address-related phishing attacks
	* Reducing the likelihood of losing funds by error-prone handling of wallet addresses while transferring assets
	* Demonstrating the capabilities of Substrate's user-facing application layer with great UX & Frontend.

- Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?

	* Polkadot Name Service
	* ASTR Domains (Astar Domains Service)

- If so, how is your project different?
    
    * We are developing the very first sophisticated NFT domain name service fully written in ink!. Moreover, we are focusing on creating a standard that works across the whole Polkadot/Kusama ecosystem by integrating XCM. Our NFT domains include some unique functionalities, such as a flexible metadata storage field that enables the attachment of any kind of metadata to the domain. Further, we deliberately focus on crafting great user-facing applications with unmatched UX in the space of decentralized domain name services.  


## Team :busts_in_silhouette:

### Team members

- Name of team leader

	* Dennis Zollmann

- Names of team members

	* Mike Schneider
	* Nimish Agrawal
	

### Contact

- **Contact Name:** Mike Schneider
- **Contact Email:** hello@scio.xyz
- **Website:** https://scio.xyz

### Legal Structure

- **Registered Address:** Am Neuen Markt 9 E-F, 14467 Potsdam, Germany
- **Registered Legal Entity:** Scio Labs UG (haftungsbeschränkt)

### Team's experience

**Dennis Zollmann** 
- B.Sc. Computer Science, Friedrich Schiller University Jena
- 10+ years of experience in writing professional software
- Serial hackathon winner (EthAmsterdam, EthCC Paris, EthBerlin, EthWarsaw)
- Successfully worked on grants by AAVE, The Graph, Toucan Protocol, and Aleph Zero
- Co-Founder of [Scio Labs](https://scio.xyz) & [AZERO.ID](https://azero.id)

**Nimish Agrawal**
- B.Sc. Computer Science, Indian Insitute of Information Technology
- Prev. Rust/Substrate Developer @Laguna Labs & Core Developer @Nethermind
- Serial hackathon winner (DotGlobal, ETHIndia, Polkadot APAC, Polkadot LATAM, Avalanche Developer Contest, etc. )
- International Algorithmic computational research challenge - PACE winner
- Experience building WASM contracts, e.g., AMM, P2E gaming platform, fractional/dynamic NFTs & more.

**Mike Schneider**
- B.Sc. Management & Economics and M.Sc. Finance, EBS University
- Hackathon winner @EthWarsaw & grant received from Aleph Zero 
- Prev. worked in Venture Capital & Venture Building
- Experience in researching web3 business models, token economics, and technologies
- Co-Founder of [Scio Labs](https://scio.xyz) & [AZERO.ID](https://azero.id) 

### Team Code Repos

- https://github.com/scio-labs
- https://github.com/azero-id
- https://github.com/wottpal
- https://github.com/realnimish

### Team Twitter Profiles

- https://twitter.com/dennis_zoma
- https://twitter.com/mike1third
- https://twitter.com/realnimish

### Team LinkedIn Profiles

- https://www.linkedin.com/in/dennis-zoma/
- https://www.linkedin.com/in/realnimish/
- https://www.linkedin.com/in/mike1third/

## Development Status :open_book:

- https://medium.com/@azero-domains
- https://github.com/wottpal/azero.domains (hackathon project)
- https://azero.id (soon to be relaunched)
- https://github.com/azero-id/ (most repositories are still in stealth, but soon to be open-sourced)

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 2 months
- **Full-Time Equivalent (FTE):** 1,5 FTE
- **Total Costs:** 30,000 USD

### Milestone 1 — XCM & Integration Research

- **Estimated duration:** 1 month
- **FTE:**  1
- **Costs:** 10,000 USD


| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | Copyright and Licenses | GPLv3 |
| **0b.** | Documentation/Tutorial | We will document the entire research process |
| **0c.** | Methodology | Research XCM and derive potential integration paths |
| **0d.** | Article | We will provide a report summarizing our research on XCM and giving an overview of potential integration, paths including applicable answers to our initial research questions |
| 1. | List of resources regarding XCM, cross-chain domains/NFTs | We will provide a publicly accessible list of all sources we used for the research. |
| 2. | Information to be extracted from the resources | We will provide a breakdown of the most relevant information gathered. |
| 3. | Analysis procedures | With the information gathered above regarding XCM and our understanding of domain name services, we are going to describe potential integration verticals between both. The technical assessment and architectural explorations will be conducted in the next milestone. |


### Milestone 2 — Technical Assessments & Architecture Proposal

- **Estimated Duration:** 1 month
- **FTE:**  2
- **Costs:** 20,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | Copyright and Licenses | GPLV3 |
| **0b.** | Documentation/Tutorial | We will document the entire research process |
| **0c.** | Methodology | Perform technical assessment of the integration paths derived in Milestone 1 and propose a technical architecture of an XCM-based domain name service  |
| **0d.** | Article | We will provide a report summarizing our assessments and will propose a high-level technical architecture of the favored solution(s) |
| 1. | Technical Assessments | We will reiterate the proposed integration options from Milestone 1 and assess their technical feasibility. |
| 2. | Architecture | Based on the assessments, we'll propose a feasible architecture for an XCM-based domain name service standard incl. sequence diagrams of the more complex cross-chain interactions, function interface definitions, and also some pseudocode-like implementations of interesting parts. This might include suggestions regarding further XCM/ink! developments or the necessity for certain new standards. Also, a separate PSP/PPP standard could be derived and then implemented in future efforts. |
| 3. | Technical Deliverable (pallet-contracts-xcm) | We'll supply a Dockerfile starting up two Substrate nodes being able to exchange XCM-messages via ink! & [pallet-contracts-xcm](https://github.com/paritytech/pallet-contracts-xcm). In the latter we're going to resolve issues [#6](https://github.com/paritytech/pallet-contracts-xcm/issues/6) & [#7](https://github.com/paritytech/pallet-contracts-xcm/issues/7) in a fork. |
| 4. | Technical Deliverable (ink!) | With 1-2 ink! smart contracts (depending on the assessed techniques from the preceding research items), we'll develop a simplified address-to-domain mapping that can be registered across these two nodes and maintains a unique namespace. |


## Future Plans

- We plan to leverage the outcome of this research grant to develop this very XCM-based domain name service for the Dotsama & Substrate ecosystem and set the new standard for on-chain domains on Polkadot and Kusama. As mentioned above, this could also mean deriving a new Polkadot Standards Proposal (PSP) from this.
- We will be working together with Parachain-, wallet-, and dApp-teams to foster the adoption of our domains and create value and utility via integrations for the users.
- We envision the project to translate into a fully community-owned DAO with on-chain governance. With social consensus, we will develop AZERO.ID and its upcoming XCM-enhanced counterpart to become core pillars for on-chain identity. 


## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation Website / Medium / Twitter / Element / Announcement by another team / personal recommendation / etc.
Recommended from several sources and contacts in the Dotsama ecosystem.

Here you can also add any additional information that you think is relevant to this application but isn't part of it already, such as:

The initial development and audit of the first version of the AZERO.ID platform has been financed via a grant from the Aleph Zero Foundation. AZERO.ID (via Scio Labs) is a member of the [Aleph Zero Ecosystem Funding Program](https://alephzero.org/ecosystem-funding-program). The project has not yet received any additional grant funding beyond that.