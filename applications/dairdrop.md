# dairdrop

- **Team Name:** dairdrop
- **Payment Details:**
  - **Payment**: 12WygU75eKwg2y8TeyRTzWMVDC5GyYfC4KY1r5EKt5emGjek (Assethub USDC)
  - **DOT**: 12WygU75eKwg2y8TeyRTzWMVDC5GyYfC4KY1r5EKt5emGjek (polkadot)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2
- **Status:** [Terminated](https://github.com/w3f/Grants-Program/pull/2429#issuecomment-3366941838)

## Project Overview :page_facing_up:

### Overview


This is an airdrop application compatible with all chains in the Polkadot ecosystem, allowing Polkadot users to create and claim their airdrops more easily, even without the involvement of centralized servers, as illustrated in the case 1 below. It will provide a wider range of airdrop examples suitable for social groups, reducing the technical costs for airdrop creators in social, gaming, or community activities, as well as minimizing interactions with the blockchain. This project will promote the implementation of more airdrop strategies within the Polkadot ecosystem in the future. Our goal is to find simpler, safer, more interesting, and user-friendly ways to distribute assets to the community.

It offers rich and flexible airdrop functionalities, along with a user-friendly UI and UX design, making it very simple to create and claim airdrops while lowering airdrop costs.

Airdrop creators can set conditions for recipients off-chain, which makes this application applicable in more scenarios, especially in gaming and social projects.

It can also avoid the issue of airdrops going to inactive accounts, as we know that airdropping to inactive accounts wastes valuable on-chain resources and leads to permanent losses in on-chain liquidity. This phenomenon was particularly evident in the MEME activities of DED.

Most importantly, it can standardize airdrop practices on-chain, allowing users to monitor community airdrop activities based on on-chain transaction events, increasing transparency and ensuring that airdrop creators are honest, while users can participate in various project airdrops in a timely manner and avoid the risk of fraud.

Typically, developing an airdrop service for the community requires developers to have a deep understanding of the chain's transaction mechanisms, which is not an easy task, especially for new development teams. This involves avoiding duplicate airdrops and financial reconciliation error, any issues can lead to a crisis of trust within the community. Community users also need timely information about the progress or specific details of airdrops. These functionalities can consume a significant amount of time for a new development team to implement. This application will address these common needs.

Additionally, in the TON chain's ecosystem projects, we have seen the immense potential of Telegram mini-games in helping web2 users transition to web3. Essentially, these projects are condition-based airdrops. This application will explore technical avenues in this regard, lowering the barriers to airdrops and providing highly scalable airdrop solutions, assisting Polkadot ecosystem projects in acquiring more users and funding.

> Case 1 below does not abandon support for centralized servers, they are optional. Airdrop creators can offer centralized servers to provide a more user-friendly experience for their community. In the past, when major token holders in Dota community wanted to airdrop to community users, they felt frustrated due to the lack of simple and universal airdrop tools to help realize their ideas. To airdrop to the community, they had to have a development team and provide servers. These challenges hindered the development of various decentralized projects within the Polkadot ecosystem. The technology of Polkadot is excellent, and community developers should actively take measures to lower user access barriers, enabling more ordinary people to use these tools, rather than just developers and the wealthy. In fully decentralized, non-VC projects, the tasks that previously relied heavily on centralized teams will become exceptionally challenging, and business models that require upfront payments may likely fail here. The ability to lower community development and operational costs will determine the success or failure of a project.


### Project Details

- language `rust`, `javascript`, `python`
### Features

- **Web Service**
  > Will provide all interactive functionalities related to airdrops. The following only lists a portion.
  - Connect to RPC nodes and connect wallets
  - Airdrop source file import.
  - Support registering airdrop information on-chain (MD5 of the airdrop file, root of the Merkle tree for the airdrop accounts and amounts, start block, duration, URL of the airdrop file, more metadata related to airdrops)
  - Airdrop list
  - Timely display airdrop information, including progress and users who have claimed the airdrop.
  - Claim airdrops for any user
  - Store airdrop data using Merkle tree
  - Supporting airdrop creators to provide remote services makes it easier for the community to claim airdrops. 
  - Rich backend APIs, including querying user airdrop status and providing users' Merkle proofs, etc.
    - indexer-apis
    - merkle tree apis
    - File upload, compute file MD5 hash, check file, and other APIs.

- **airdrop indexer**
  Retrieve all airdrop information on-chain based on block height.
  - apis
    - get_user_airdrop_info(root_hash: Hash, user: AccountId)
    - get_claimed_users(root_hash: Hash)
    - get_pending_users(root_hash: Hash)
    - get_all_users(root_hash: Hash)
    - get_airdrop_info(root: Hash)
    - get_all_airdrops_info()
    - create_new_airdrop_table(root: hash)
    - insert_local_airdrop_list(root: Hash)
    > Before creating an indexer for a specific airdrop activity, you should obtain the airdrop source file, create table and then insert the airdrop list into the database table.

- **On-chain**
  - dairdrop(substrate pallet)
    - Set airdrop: Merkle tree root, MD5 hash of the airdrop file, start date, end date, total airdrop amount (must be reserved)
    - Cancel airdrop
    - Increase airdrop reserved amount
    - Merkle proof verification.
    - Claim airdrop (can be claimed for anyone)
    - Delete on-chain airdrop information
  - dairdrop (ink contract)
    - Set airdrop: Merkle root, MD5 hash, start date, end date, total airdrop amount (must be reserved)
    - Cancel airdrop
    - Increase airdrop reserved amount
    - Merkle proof verification.
    - Claim airdrop (can be claimed for anyone)
    - Delete on-chain airdrop information
  
  - dairdrop-vrf pallet (substrate pallet)
      - Set up airdrop: group label, number of airdrop recipients, maximum airdrop amount per person
      - Cancel airdrop
      - VRF verification
      - Claim airdrop (can be claimed for anyone, requires successful VRF verification)

  - dairdrop-vrf (ink contract)
      - Set up airdrop: group label, number of airdrop recipients, maximum airdrop amount per person
      - Cancel airdrop
      - VRF verification
      - Claim airdrop (can be claimed for anyone, requires successful VRF verification)
    
### Workflow

#### case 1
* airdrop creator
The airdrop creator connects to the RPC node and wallet, imports the airdrop file (which includes the whitelist addresses), and inputs basic metadata for the airdrop. The app performs basic data format checks and stores the information, calculates the Merkle root for the airdrop, and upon clicking submit, registers the basic information of the airdrop on-chain, and creator reserve the total airdrop balance on-chain. The backend starts the indexer, while the frontend displays the airdrop progress and related information timely.

* user
Users connect to the node and wallet, select the airdrop, and then see the airdrop information available for them to claim. Upon clicking claim, the app submits a transaction containing the Merkle proof to the blockchain. If verified, the user receives the tokens from create's reserved balance. Users can also input anyone else's address to claim the airdrop for someone else. The frontend displays the airdrop progress and related information timely.

#### case 2

* airdrop creator  
  The airdrop creator connects to the node and wallet to register airdrop information on-chain (number of airdrop recipients, maximum amount each person can receive). The airdrop creator can authorize specific social groups to claim the airdrop.

* user  
  The user completes a task, such as a number guessing game, and sends this data to the airdrop creator. The airdrop creator calculates a random number using VRF and returns all related proof data to the user. The user then clicks to submit on-chain to receive the airdrop.

### Ecosystem Fit

Help us locate your project in the Polkadot/Substrate/Kusama landscape and what problems it tries to solve by answering each of these questions:

- Where and how does your project fit into the ecosystem?
  A multi-chain compatible airdrop application within the Polkadot ecosystem, making airdrops simpler and more transparent. A user-friendly airdrop tool that can be quickly used by both developers and regular users.
- Who is your target audience (parachain/dapp/wallet/UI developers, designers, your own user base, some dapp's userbase, yourself)?
  The Dota community and any teams that need to airdrop to users.
- How did you identify these needs? Please provide evidence in the form of (scientific) articles, forum discussions, case studies, or raw data.
  In the past, we observed that many projects conducting airdrop activities struggled to identify which accounts were active and their target audience. This led to a significant number of tokens being airdropped to useless addresses, wasting on-chain resources and causing community developers to misjudge their actual users. This issue was particularly evident during MEME activities. Therefore, for a purely community-driven project, accurate airdrops are especially crucial.

  On the other hand, developing a dedicated webpage or providing a centralized service for airdrops can be burdensome for anyone looking to airdrop to users, especially for non-technical users. Now, with the ability to simply provide an airdrop list file and drag it into the app, users can quickly achieve their goals. In past Dota community activities, many Dota token holders expressed a strong desire to airdrop to more users, but they lacked the technical skills or were unwilling to set up a dedicated server. This dilemma has also occurred in other communities. This highlights a common need in the airdrop space.

  In Telegram, TON chain game projects have attracted a large number of web2 users, and they are essentially airdrops. Reducing airdrop costs for community projects and providing them with highly scalable airdrop solutions will greatly benefit the awareness of Polkadot among more people.

- Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?

  No, currently there is no fully decentralized public chain project in the Polkadot ecosystem like Dota, which operates without any VC backing. Its developers are spontaneously organized, similar to those in the Bitcoin ecosystem with Ordi, making it quite rare. The challenges they face are distinct from those encountered by other projects on Polkadot, giving them a deeper understanding of the pain points in fully community-driven projects.

  This airdrop application will serve projects within the Polkadot ecosystem that have a common airdrop need, as well as new teams creating projects on Polkadot in the future. It will first be utilized in the Dota 2.0 network. Continuous token airdrop activities are especially important for purely community-driven projects, and this application will be frequently used by these projects.


- Are there any projects similar to yours in related ecosystems? 
    Many public chains have dedicated applications for airdrops, which facilitate the monitoring of on-chain airdrop activities. However, these airdrop applications are often specific to certain chains and have a certain user threshold, making them more suitable for technical teams rather than general users. Our goal is to create an airdrop tool that can be used by all projects within the Polkadot ecosystem.

## Team :busts_in_silhouette:

<!-- > Please note that the data provided in this section is for administrative and informational purposes only. All beneficiaries of a grant must also be listed in the KYC/KYB process during the application phase. See our [FAQ](https://grants.web3.foundation/docs/faq#what-is-kyckyb-and-why-do-i-have-to-provide-this-data) for more info. -->

### Team members

- Weaver
- MockBL

### Contact

- **Contact Name:** [Weaver](https://x.com/weaver380978)
- **Contact Email:** liny153537@gmail.com
<!-- - **Website:** Your website -->

### Legal Structure

- **Registered Address:** No. 601, Labor Building, Jinhui Road, Guandu District, Kunming City, Yunnan Province, China.
<!-- - **Registered Legal Entity:** Name of your registered legal entity, if available. (e.g. Duo Ltd.) -->

### Team's experience

- weaver 
  Five years of development experience with Polkadot, core code contributor in the Dota community, and involved in the development of multiple parachains. Possesses extensive experience in blockchain product development within the Polkadot and Ethereum ecosystems.
  
- MockBL
  13 years of experience in front-end development and UI design.


### Team Code Repos

- https://github.com/dota-network/dairdrop
- https://github.com/dota-network/dairdrop-backend
- https://github.com/dota-network/dairdrop-frontend
- https://github.com/dota-network/dota-super-chain

<!-- Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine. -->

- `weaver` https://github.com/jyaymusk
- `MockBL` https://github.com/MockBL

<!-- ### Team LinkedIn Profiles (if available)

- https://www.linkedin.com/{person_1}
- https://www.linkedin.com/{person_2} -->


## Development Status :open_book:

Under development.

- https://github.com/dota-network/dairdrop
- https://github.com/dota-network/dairdrop-backend
- https://github.com/dota-network/dairdrop-frontend
- https://github.com/dota-network/dota-super-chain

<!-- If you've already started implementing your project or it is part of a larger repository, please provide a link and a description of the code here. In any case, please provide some documentation on the research and other work you have conducted before applying. This could be:

- links to improvement proposals or [RFPs](https://github.com/w3f/Grants-Program/tree/master/docs/RFPs) (requests for proposal),
- academic publications relevant to the problem,
- links to your research diary, blog posts, articles, forum discussions or open GitHub issues,
- references to conversations you might have had related to this project with anyone from the Web3 Foundation,
- previous interface iterations, such as mock-ups and wireframes. -->

## Development Roadmap :nut_and_bolt:

<!-- This section should break the development roadmap down into milestones and deliverables. To assist you in defining it, we have created a document with examples for some grant categories [here](../docs/Support%20Docs/grant_guidelines_per_category.md). Since these will be part of the agreement, it helps to describe *the functionality we should expect in as much detail as possible*, plus how we can verify and test that functionality. Whenever milestones are delivered, we refer to this document to ensure that everything has been delivered as expected.

Below we provide an **example roadmap**. In the descriptions, it should be clear how your project is related to Substrate, Kusama or Polkadot. We *recommend* that teams structure their roadmap as 1 milestone ≈ 1 month. -->

<!-- > :exclamation: If any of your deliverables are based on somebody else's work, make sure you work and publish *under the terms of the license* of the respective project and that you **highlight this fact in your milestone documentation** and in the source code if applicable! **Projects that submit other people's work without proper attribution will be immediately terminated.** -->

### Overview

- **Total Estimated Duration:** 3 months
- **Full-Time Equivalent (FTE):**  5,5
<!-- - Average number of full-time employees working on the project throughout its duration (see [Wikipedia](https://en.wikipedia.org/wiki/Full-time_equivalent), e.g. 2 FTE) -->
- **Total Costs:** 24,000 
- **DOT %:** 50%
> Note: the funds from this grant will not be used for airdrops to users but will be allocated to the development of the application.

### Milestone 1 — On-chain pallets and Ink contracts, airdrop indexer.

- **Estimated duration:** 1.5 month
- **FTE:**  3,0
- **Costs:** 13,000 USD

> :exclamation: **The default deliverables 0a-0d below are mandatory for all milestones**, and deliverable 0e at least for the last one.

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0  |
| **0b.** | Documentation | Create detailed documentation for each module. Add a tutorial to help users understand how to set up and claim airdrops for each strategy, how these modules work internally, and the relationships between these different airdrop modules.|
| **0c.** | Testing and Testing Guide | Over 70% code test coverage. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1. | Substrate module: dairdorp | Provide an airdrop strategy based on airdrop files and Merkle tree algorithms. |
| 2. | Smart contracts:  dairdorp-ink| Provide an airdrop strategy based on airdrop files and Merkle tree algorithms. |
| 3. | Smart contracts: dairdrop-vrf| Provide an airdrop strategy based on the VRF algorithm.|
| 4. | Substrate module: dairdorp-vrf | Provide an airdrop strategy based on the VRF algorithm. |
| 5. | indexer| An on-chain airdrop activity indexer that monitors on-chain airdrop status timely. |
| 6. | Substrate solo chain | Dota 2.0 test chain used for testing airdrop functionality and preparing for the launch of the Dota 2.0 mainnet.  (Before the JAM protocol is fully developed, we hope to create an solo chain. Once we gain more support from developers and users, we will gradually transition to a parachain that shares security with Polkadot’s JAM)|



### Milestone 2 — UI/UX design, web server (backend), and front-end development.

- **Estimated Duration:** 1.5 month
- **FTE:**  2.5
- **Costs:** 11,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0  |
| **0b.** | Documentation | Provide documentation for the app. Add a tutorial to help users understand how to set up and claim airdrops for each strategy in the frontend, as well as how to check the specific airdrop progress and more detailed information.|
| **0c.** | Testing and Testing Guide | Provide manual test cases for each feature and achieve at least 70% test coverage for each API in the web service. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an **article** that explains how it offers more convenient and simpler services in the airdrop space, how it differs from traditional airdrops, who should use it, and how to use it.  |
| 1. | backend（web server） | Provide all APIs needed for the app, including calculating the MD5 hash of the airdrop file, merkle db, get the Merkle root of the airdrop, Merkle proofs, vrf proofs, and airdrop status. This airdrop only stores essential data on-chain, such as the Merkle tree root hash of a specific airdrop event, the airdrop's metadata, and the users who have already claimed the airdrop. etc|
| 2. | front-end |  Add frontend interaction pages for all the features mentioned in the [Features section](#features). | 


## Future Plans

This application is specifically designed for airdrops within the Polkadot ecosystem. In the coming months, after the launch of the Dota 2.0 mainnet, it will have its own economic model to secure ongoing maintenance and development funding from the Dota treasury. This is not just a project for native token airdrops, it will also support multi-asset airdrops and ERC20 token airdrops (once Polkadot Plaza is fully EVM-compatible). If widely adopted (beyond just the Dota community), we will establish a Polkadot ecosystem airdrop monitoring platform to keep users informed about airdrop opportunities and activities. 

Provide more airdrop solutions. [AIWEB3 DAO](https://x.com/aiweb3dao) is very interested in this project and hopes to collaborate with us. They are a Chinese community in the Polkadot ecosystem dedicated to decentralized Web3 education and content creation, and they would like our application to be used for their user education and airdrop activities.

<!-- Please include here

- how you intend to finance the project's long-term maintenance and development,
- how you intend to use, enhance, and promote your project in the short term, and
- the team's long-term plans and intentions in relation to it. -->

<!-- ## Referral Program (optional) :moneybag:

You can find more information about the program [here](../README.md#moneybag-referral-program).

- **Referrer:** Name of the Polkadot Ambassador or GitHub account of the Web3 Foundation grantee
- **Payment Address:** Polkadot/Kusama (USDT/USDC) payment address. Please also specify the currency. (e.g. 15oF4... (USDT)) -->

<!-- ## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation Website / Medium / Twitter / Element / Announcement by another team / personal recommendation / etc.

Here you can also add any additional information that you think is relevant to this application but isn't part of it already, such as:

- Work you have already done.
- If there are any other teams who have already contributed (financially) to the project.
- Previous grants you may have applied for. -->
## DOTA community developers' voices

The Dota inscription event has previously brought over 200,000 DOT in treasury income to Polkadot and sparked heated discussions, while also attracting a large number of new users to the Polkadot ecosystem. It received widespread support in the Asia region, including from Polkaworld and the Polkadot Ecosystem Research Institute. After many ups and downs, with the efforts of core developers in the community, the Dota community is preparing to launch the Dota 2.0 network, which will truly have its own public chain. 

These self-organized engineers have previously served in various Polkadot ecosystem projects and aim to build a non-VC Web3 network on Polkadot, one that promotes fairness, freedom, and inclusivity of more technological innovations. We will listen to the voices from the community and welcome every builder with ideas. We are eager to explore the limits of Polkadot governance and how to establish order in a completely free and chaotic community without VCs. Additionally, we will investigate how to build decentralized ecosystem projects on Polkadot at lower costs. This social experiment is very meaningful.

More importantly, this community has always hoped to have its own public chain, aspiring for it to be the "Shiba" or "Doge" of the Polkadot ecosystem. The difference is that it will leverage Polkadot’s superior and advanced chain technology, offering better functionality and easier connections with external ecosystems, ultimately contributing more value to the entire Polkadot ecosystem in the future. We hope that every technical achievement from this community will be open-source and widely used in other projects within the Polkadot ecosystem. And open-source contributors on Polkadot or Kusama or parachains, when they receiving grant funding support from other projects, our Dota treasury will also strive to provide additional Dota rewards.

We will explore how to encourage users to participate more actively in on-chain governance within the Polkadot chain. Currently, aside from large DOT holders and European community users, the willingness of remaining users to participate in on-chain governance is relatively low, and these DOT holders should be actively mobilized. We should recognize that Dota is not just a project within the Polkadot ecosystem; it represents a decentralized force in the Asia region. Polkadot needs to support the development of more such decentralized communities to achieve the grand goals of Web3.

> As developers within the Polkadot ecosystem, we aim to establish a fully decentralized community project, despite facing many difficulties and challenges in the past, including misunderstandings and skepticism from short-term speculators. We firmly believe that venture capital is not a necessary condition for the long-term survival of a project, nor is it the only option for building a Web3 public chain. A passion for Web3 and a commitment to long-term value are much more important.Creating an excellent and decentralized community project is not easy. When people in the Polkadot ecosystem discuss Dota, they often misunderstand it as being similar to DED and vote against it. In reality, Dota was initiated by technology enthusiasts from the Polkadot community from the very beginning. We have been prepared for a long-term technical journey and have consistently upheld our long-termist stance while seeking external support. So far, community developers have not received any additional Dota rewards for their work on the project, nor is that their goal. They simply love this highly decentralized community, there are no whales, where they can engage in what they consider more interesting development activities.
