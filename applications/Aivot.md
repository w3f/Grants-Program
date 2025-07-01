# Aivot

- **Team Name:** ANGO
- **Payment Details:**

  - **DOT**: 16f8bxnrFRp9uzFrZ3UV9s13X7a5VnJS9kdXDHbx9nf4mMj 

- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2 

<!-- > [!IMPORTANT]
> *The combination of your GitHub account submitting the application and the payment address above will be your unique identifier during the program. Please keep them safe.* -->

## Project Overview :page_facing_up:

<!-- If this application is in response to an RFP, please indicate this on the first line of this section.

If this is an application for a follow-up grant (the continuation of an earlier, successful W3F grant), please provide the name and/or pull request of said grant on the first line of this section. -->

### Overview

​Based on our extensive experience operating DAOs, we've observed that voting within DAOs remains challenging for many users. While voting is an essential function for DAO governance, participation often falls short because most participants are unfamiliar with blockchain technology, smart contracts, and wallet usage. This creates a dilemma between usability and transparency: off-chain voting is user-friendly but lacks transparency, leading to potential disputes; conversely, on-chain voting offers high transparency but, as mentioned earlier, many participants find the process daunting.

​To balance usability and transparency, we have innovatively proposed a voting model based on an AI Agent. By introducing an AI Agent into the DAO's Discord community, users can engage in voting through conversational interactions. The AI Agent facilitates the voting process for users and automatically records the results on the blockchain. This effectively bridges DAO participants with the blockchain, ensuring that voting outcomes are transparently recorded on-chain without exposing participants to the complexities of blockchain technology and smart contracts.


### Project Details

<!-- We expect the teams to already have a solid idea about your project's expected final state. Therefore, we ask the teams to submit (where relevant):

- Mockups/designs of any UI components
- Data models / API specifications of the core functionality
- An overview of the technology stack to be used
- Documentation of core components, protocols, architecture, etc. to be deployed
- PoC/MVP or other relevant prior work or research on the topic
- What your project is *not* or will *not* provide or implement
  - This is a place for you to manage expectations and clarify any limitations that might not be obvious


Things that shouldn’t be part of the application (see also our [FAQ](../docs/faq.md)):

- The (future) tokenomics of your project
- For non-infrastructure projects—deployment and hosting costs, maintenance or audits
- Business-oriented activities (marketing, business planning), events or outreach -->

__Design Goals__ <br>
Consequently, our team conducted multiple brainstorming sessions and developed a preliminary design for the AI Agent. The design includes the following key features:
* The AI Agent should be able to display ongoing voting proposals to users.
* Users should be able to complete their votes through conversational interactions with the AI.
* The AI should automatically format the voting results into a predefined structure.
* The AI should be capable of recording the results on the Polkadot blockchain autonomously.
* Once the voting process concludes, the final results should be displayed to users.

__General API Design__
1. AI and Database Interaction

* AI creates data in the database
* AI reads data from the database
* AI updates data in the database
* AI deletes data from the database

2. AI and Blockchain Interaction

* AI creates data in the Blockchain
* AI reads data from the Blockchain

__Technical Stack__
* Golang
* JavaScrpit
* AI


### Ecosystem Fit

Our proposed AI-Agent-based voting tool will make DAO governance on the Polkadot chain highly user-friendly while ensuring voting transparency. This will encourage more people to choose Polkadot as the foundational blockchain for deploying their projects.
As widely recognized, Polkadot offers significant technological advantages. Whether it's the low-cost, high-efficiency benefits of its multi-chain architecture or the flexibility of supporting multiple smart contract platforms, these features are essential for deploying a DAO project.
We aim to address the governance challenges in DAOs by providing an extremely convenient governance tool for DAOs on Polkadot. This will foreseeably enrich the Polkadot ecosystem and attract more users to the network.


## Team :busts_in_silhouette:

> [!IMPORTANT]
> Please note that the data provided in this section is for administrative and informational purposes only. All beneficiaries of a grant must also be listed in the KYC/KYB process during the application phase. See our [FAQ](https://grants.web3.foundation/docs/faq#what-is-kyckyb-and-why-do-i-have-to-provide-this-data) for more info.

### Team members

- Chris Dai
- Yi Liu
- Kento Honda
- KOKO

### Contact

- **Contact Name:** Kento Honda
- **Contact Email:** contact@ango.jp
- **Website:** https://ango.jp/

### Legal Structure

- **Registered Address:** 16th Floor, Marunouchi Park Building , 2-6-1 Marunouchi, Chiyoda-ku , Tokyo 100-8222, Japan
- **Registered Legal Entity:** Mori Hamada & Matsumoto LPC

### Team's experience

Our team is a group with extensive experience in Web3. Currently, we are operating several projects, including Unicask, Japan’s largest Web3 whiskey cask NFT project; ANGO, a Web3-based vacation rental service; and JAPANGO, a Web3 travel service. 

1. Chris Dai <br>
Blockchain evangelist and co-founder and CEO of Japanese blockchain companies. Pioneered redeemable physical asset NFTs and successfully completed several NFTs sales. Focuses on inventing decentralized businesses in the non-financial sector utilizing blockchain technology. Deeply attracted to the decentralized model and its business, social and philosophical aspects. Advisor to Japan Blockchain Association, Committee member of the Investigation of Blockchain Utilization of Authentication Information of Japanese Positioning Satellites, and Research Institute of Economy, Trade, and Industry Blockchain research team member. 
Co-authored (2019) Next Blockchain: Ecosystem for Next Generation Industries. Nikkei Business Publications and (2020). Blockchain and Crypto Currency. Springer.

2. Yi Liu <br>
CTO of Recika. Seasoned blockchain product manager. Lead system development for UniCask and ANGO. 
Possesses over 10 years of experience in system development at a major securities company, with deep knowledge in software engineering and project management. Completed a Master's degree in Engineering at Nagoya University.

3. Kento Honda <br>
Joined RECIKA at the end of 2021 and became Business manager of UniCask in 2022.
He was responsible for the planning, design, sales and marketing of the world's first small batch whisky cask NFT.
As a result, the $40 million barrel sold out in nine minutes. He then sold the NFT in collaboration with seven IPs, and was also in charge of planning, coordination with various parties and marketing here.
In addition, as a POC for Livesola (a service that visualizes fan behavior and contributions in the form of NFTs and tokens), we organized a three-hour live broadcast using a TV station's studio.
He has also participated in other consulting teams for major automotive companies, and has experience in coordinating projects mainly using NFTs with a wide variety of stakeholders.
He has also been involved in ANGO since 2023. Currently, he is working with engineers on the development required to raise funds using NFTs in a limited liability company type DAO from new property development.

4. KOKO <br>
Master of Science in Science from Tokyo Institute of Technology. Currently enrolled in the doctoral program at Institute of Science Tokyo. Research topics include decision-making within DAOs, tokenomics, and cryptocurrencies. Joined Recika in 2022, primarily responsible for DAO model design, tokenomics design, and simulations. Has a deep understanding of the philosophy, technologies, and applications of Web3.


### Team Code Repos

- https://github.com/angohouse/Aivot

Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine.

Since our team uses private repositories to manage code, we do not have a public GitHub account to share as a reference.
Instead, we are providing the websites of two other active projects operated by our team.
- https://ango.jp/
- https://ango.jp/daoDetail

### Team LinkedIn Profiles (if available)

- Chris Dai: https://www.linkedin.com/in/chrisdailink
- Yi Liu: https://www.linkedin.com/in/yi-liu-a71691183/
- Kento Honda: https://www.linkedin.com/in/kentohonda/



## Development Status :open_book:

<!-- If you've already started implementing your project or it is part of a larger repository, please provide a link and a description of the code here. In any case, please provide some documentation on the research and other work you have conducted before applying. This could be:

- links to improvement proposals or [RFPs](https://grants.web3.foundation/docs/rfps) (requests for proposal),
- academic publications relevant to the problem,
- links to your research diary, blog posts, articles, forum discussions or open GitHub issues,
- references to conversations you might have had related to this project with anyone from the Web3 Foundation,
- previous interface iterations, such as mock-ups and wireframes. -->

- https://ango.gitbook.io/ango-whitepaper
- https://note.com/ango_nft

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 6 months
- **Full-Time Equivalent (FTE):**  8 FTE
- **Total Costs:** 30,000 USD
- **DOT %:**  100%

### Milestone 1 - AI-Agent MVP (Minimum Viable Product)

- **Estimated duration:** 2 month
- **FTE:**  3 FTE
- **Costs:** 10,000 USD

<!-- > [!NOTE]
> **The default deliverables 0a-0d below are mandatory for all milestones**, and deliverable 0e at least for the last one. -->

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | We will provide inline documentation for the AI-Agent codebase and a basic tutorial demonstrating how to launch the bot within a Discord server and simulate a voting interaction./milestone-deliverables-guidelines#documentation) for details. |
| **0c.** |Testing and Testing Guide | All core logic for the AI interaction and database operations will be covered with unit tests. The guide will describe how to run tests using standard frameworks in Golang and JavaScript. |
| **0d.** |Docker | A Dockerfile and Docker Compose script will be provided to run the AI-Agent, database, and blockchain interaction components locally. |
| 1. | AI Agent MVP| We will deliver a fully functional AI-Agent integrated into a Discord bot. The bot will be able to:
* Present active DAO voting topics (pulled from a JSON list or mock backend).
* Allow users to vote by chatting with the bot.
* Store votes in a database (MongoDB or PostgreSQL) following a structured JSON schema.
* Support basic natural language interaction for vote selection (e.g. "I vote yes").
* This milestone will demonstrate the core voting experience without blockchain integration. | 


### Milestone 2 - Polkadot Blockchain Integration

- **Estimated Duration:** 2 month
- **FTE:**  3 FTE
- **Costs:** 10,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | We will provide inline documentation for the blockchain integration logic and a guide explaining how the AI-Agent sends data to the Polkadot chain using @polkadot/api. |
| **0c.** | Testing and Testing Guide | We will include unit tests covering JSON encoding, IPFS upload, transaction submission, and result verification. A testing guide will explain how to simulate blockchain writes and query results. |
| **0d.** | Docker | Docker setup will include a development environment with a local chain emulator (e.g., Westend dev chain or Substrate dev node) and preconfigured accounts for testing. |
| 1. | Blockchain Integration | We will deliver blockchain functionality that allows the AI-Agent to:
- Encode a finalized voting result into a JSON string or IPFS hash.
- Submit the data to the Polkadot chain using system.remark_with_event or an ink! contract.
- Log the on-chain transaction reference (e.g. block number, extrinsic hash).
- Provide a retrieval API or CLI script for validating that the voting result was properly recorded.
- This milestone will demonstrate full end-to-end interaction between the AI agent and the Polkadot chain. |


### Milestone 3 - Beta Version & User Testing

- **Estimated Duration:** 1.5 month
- **FTE:**  1.5 FTE
- **Costs:** 8,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0|
| **0b.** | Documentation | We will provide user-facing documentation and an in-Discord command guide for participants to view polls, submit votes, and confirm that their votes were recorded. This will also include administrator instructions for managing the bot. |
| **0c.** | Testing and Testing Guide | We will conduct community beta testing with users from our DAO. The testing guide will include scripts to simulate votes, track user interactions, and validate on-chain results. |
| **0d.** | Docker | A complete Docker environment will be provided that replicates the production setup with testnet connections, bot behavior, and access control settings. |
| 1. | Community Beta Testing | Community Beta Testing | We will deploy the AI-Agent into our real DAO Discord server (500+ users) and conduct an actual vote. This includes:
- Real-time interaction with users.
- On-chain recording of voting results.
- A web interface or in-chat summary of the final tally.
- Collection of user feedback and metrics (e.g., participation rate, success/failure of blockchain recording).
- This milestone validates the system’s usability and reliability in a real-world setting. |


### Milestone 4 - Official Deployment & User Guide

- **Estimated Duration:** 0.5 month
- **FTE:**  0.5 FTE
- **Costs:** 2,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 / GPLv3 / MIT / Unlicense. See the [delivery guidelines](https://grants.web3.foundation/docs/Support%20Docs/milestone-deliverables-guidelines#license) for details. |
| **0b.** | Documentation | We will provide final developer documentation including system architecture, deployment steps, multi-language usage guides (EN/JA/ZH), and instructions for extending the AI voting logic. |
| **0c.** | Testing and Testing Guide | We will deliver full integration and regression tests, publish coverage reports, and verify consistency of the production deployment. |
| **0d.** | Docker | Final Docker image will support clean deployment with persistent database and chain configuration. Docker Compose will include an example production deployment. |
| 0e. | Article | We will publish a final article (on Medium and ANGO's official site) that reflects on the project goals, the technical and design process, lessons learned, and how other DAOs can integrate the tool into their governance workflows.  |
| 1. | Public Release & Open Source Launch | We will release the complete AI-Agent voting system as open source under the Apache 2.0 license. The GitHub repo will include code, full documentation, test coverage, deployment examples, and a template setup for other DAOs to adopt the tool in their own communities. |



## Future Plans

- Enable AI to support multiple languages (Chinese, English, Japanese).
- Allow AI to answer voting-related questions (e.g., "Can I change my vote?").


## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?**
Web3 Foundation Website

Here you can also add any additional information that you think is relevant to this application but isn't part of it already, such as:

<!-- - Work you have already done.
- If there are any other teams who have already contributed (financially) to the project.
- Previous grants you may have applied for. -->

- The ANGO project, which is directly related to this project, received funding in Cardano Catalyst Fund 12.
https://projectcatalyst.io/funds/12/cardano-use-cases-mvp/from-vacancy-to-vitality-cardano-dao-and-rwas-transforming-424000-homes-into-dollar33-billion-economic-hubs