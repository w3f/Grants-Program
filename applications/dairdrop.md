# dairdrop

- **Team Name:** dairdrop
- **Payment Details:**
  - **Payment**: 1H4GsGKaAv6VCwgx7gRgPm9AmCKqzEDjb2GyWoERj9xBRAH (Assethub USDC)
  - **DOT**: 1H4GsGKaAv6VCwgx7gRgPm9AmCKqzEDjb2GyWoERj9xBRAH (polkadot)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

### Overview

This is an airdrop application compatible with multiple operating systems (Windows, macOS, Linux) within the Polkadot ecosystem. It operates without the need for centralized servers, enabling people to achieve more precise, high-value, transparent, and diverse airdrops. It will greatly simplify the airdrop process for both developers and non-developers.

In completely decentralized, non-VC projects, tasks that heavily rely on centralized teams become exceedingly difficult, and business models that require advance payments are likely to fail. Yes, this is the challenge faced by community projects that are highly decentralized from the beginning. Past social experiments, like Dota, have confirmed this. Community developers initially lacked the experience for fully decentralized project development and were overly optimistic. When they encountered difficulties requiring external support, the enormous communication and trust costs delayed project progress. 

This community has continually considered and sought solutions to minimize expenses for a decentralized project, which has been a persistent goal of the Polkadot community. In the past, when some large token holders in the Dota community wanted to airdrop to community users, they felt frustrated because there was no simple tool to help them realize this idea.

These challenges have hindered the development of decentralized projects. Polkadot has great technology, and community developers should take steps to lower the usage barriers for users in various aspects, making it accessible to more ordinary people not just a tool for technical experts and the wealthy.

This application is designed for community projects that frequently need to conduct airdrops. It allows anyone to airdrop to their community or claim their own airdrop without relying on centralized servers, reducing dependence on centralized teams. 

It can also mitigate the issue of airdropping to inactive accounts, as we know that airdropping to inactive accounts wastes valuable on-chain resources and can lead to permanent losses in on-chain liquidity. This phenomenon was particularly evident in DED's past MEME activities. Most importantly, it can unify airdrop standards on-chain, allowing users to monitor community airdrop activities based on on-chain transaction event information, thus improving transparency and enabling more users to participate in a timely manner.

### Project Details

- language `rust`（tauri）、`javascript`、`python`
  > It will use the Tauri framework to achieve compatibility across multiple platforms, allowing it to be used on Windows, Linux, and macOS
### Features

- **Desktop APP**
  - Connect to RPC nodes and create or connect wallets
  - Support registering airdrop information on-chain (MD5 of the airdrop file, root of the Merkle tree for the airdrop accounts and amounts, start block, duration, URL of the airdrop file)
  - Airdrop list (displaying airdrop status) and query airdrop status by user address
  - Claim airdrops for any user (bulk claiming supported)
  - Store airdrop data using Merkle tree
  - Compatible with multiple operating systems(Linux、 Mac、 windows)

- **Web Service**
  - A web service with all the above functionalities
  - Supporting airdrop creators to provide web-based remote services makes it easier for the community to claim airdrops. This approach allows the users to claim airdrops without needing a desktop app, or create their own airdrops for communit.

- **An airdrop indexer**

- **On-chain**
  - An airdrop pallet(substrate pallet)
    - Set airdrop: Merkle tree root, MD5 hash of the airdrop file, start date, end date, total airdrop amount (must be reserved)
    - Cancel airdrop
    - Increase airdrop reserved amount
    - Claim airdrop (can be claimed for anyone)
    - Delete on-chain airdrop information
  - An airdrop pallet (ink contract)
    - Set airdrop: Merkle root, MD5 hash, start date, end date, total airdrop amount (must be reserved)
    - Cancel airdrop
    - Increase airdrop reserved amount
    - Claim airdrop (can be claimed for anyone)
    - Delete on-chain airdrop information

### Ecosystem Fit

Help us locate your project in the Polkadot/Substrate/Kusama landscape and what problems it tries to solve by answering each of these questions:

- Where and how does your project fit into the ecosystem?
  A multi-platform and multi-project compatible airdrop application within the Polkadot ecosystem, making airdrops simpler and more transparent. A user-friendly airdrop tool that can be quickly used by both developers and regular users.
- Who is your target audience (parachain/dapp/wallet/UI developers, designers, your own user base, some dapp's userbase, yourself)?
  The Dota community and any teams that need to airdrop to users.
- How did you identify these needs? Please provide evidence in the form of (scientific) articles, forum discussions, case studies, or raw data.
  In the past, we observed that many projects conducting airdrop activities struggled to identify which accounts were active and their target audience. This led to a significant number of tokens being airdropped to useless addresses, wasting on-chain resources and causing community developers to misjudge their actual users. This issue was particularly evident during MEME activities. Therefore, for a purely community-driven project, accurate airdrops are especially crucial.

  On the other hand, developing a dedicated webpage or providing a centralized service for airdrops can be burdensome for anyone looking to airdrop to users, especially for non-technical users. Now, with the ability to simply provide an airdrop list file and drag it into the app, users can quickly achieve their goals. In past Dota community activities, many Dota token holders expressed a strong desire to airdrop to more users, but they lacked the technical skills or were unwilling to set up a dedicated server. This dilemma has also occurred in other communities. This highlights a common need in the airdrop space.

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
- https://github.com/dota-network/dota-super-chain
- https://github.com/dota-network/dota2.0-website

<!-- Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine. -->

- `weaver` https://github.com/jyaymusk
- `MockBL` https://github.com/MockBL

<!-- ### Team LinkedIn Profiles (if available)

- https://www.linkedin.com/{person_1}
- https://www.linkedin.com/{person_2} -->


## Development Status :open_book:

Under development.

- https://github.com/dota-network/dairdrop
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
- **Full-Time Equivalent (FTE):**  3,5
<!-- - Average number of full-time employees working on the project throughout its duration (see [Wikipedia](https://en.wikipedia.org/wiki/Full-time_equivalent), e.g. 2 FTE) -->
- **Total Costs:** 20,000
- **DOT %:** 50%

### Milestone 1 — On-chain pallets and Ink contracts, airdrop indexer, API services, and more.

- **Estimated duration:** 1.5 month
- **FTE:**  2,0
- **Costs:** 10,000 USD

> :exclamation: **The default deliverables 0a-0d below are mandatory for all milestones**, and deliverable 0e at least for the last one.

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0  |
| **0b.** | Documentation | Create detailed documentation for each module. |
| **0c.** | Testing and Testing Guide | Over 70% code test coverage. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1. | Substrate module: airdorp | An airdrop module that provides all on-chain functionalities related to airdrops |
| 2. | Smart contracts:  airdorp-ink| Implementation of the airdrop module using Ink. |
| 3. | indexer| An on-chain airdrop activity indexer that monitors on-chain airdrop status in real time.|
| 3. | backend（off-chain） | Provide all APIs needed for the app, including calculating the MD5 hash of the airdrop file, the Merkle root of the airdrop, Merkle proofs, and airdrop status. This airdrop only stores essential data on-chain, such as the Merkle tree root hash of a specific airdrop event, the airdrop's metadata, and the users who have already claimed the airdrop.|
| 4. | Substrate chain | Dota 2.0 test chain used for testing airdrop functionality and preparing for the launch of the Dota 2.0 mainnet. |


### Milestone 2 — UI/UX design and front-end development.

- **Estimated Duration:** 1.5 month
- **FTE:**  1,5
- **Costs:** 10,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0  |
| **0b.** | Documentation | Provide documentation for the app. |
| **0c.** | Testing and Testing Guide | Provide manual test cases for each feature and achieve at least 70% test coverage for each API in the web service. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an **article** that explains how it offers more convenient and simpler services in the airdrop space, how it differs from traditional airdrops, who should use it, and how to use it.  |
| 1. | UI/UX design | Design user-friendly interactive pages to enhance the user experience. |
| 2. | PC app  | Desktop application compatible with Mac, Windows, and Linux. Provide users with all the interactive features needed for airdrops. |
| 3. | web server | This web service offers the same functionality as the PC application. Additionally, this service not only provides local functionality but also allows airdrop creators to offer remote web services to the community, making it more convenient for users to claim their airdrops.|


## Future Plans

This application is specifically designed for airdrops within the Polkadot ecosystem. In the coming months, after the launch of the Dota 2.0 mainnet, it will have its own economic model to secure ongoing maintenance and development funding from the Dota treasury. This is not just a project for native token airdrops, it will also support multi-asset airdrops and ERC20 token airdrops (once Polkadot P
laza is fully EVM-compatible). If widely adopted (beyond just the Dota community), we will support iOS and Android platforms and establish a Polkadot ecosystem airdrop monitoring platform to keep users informed about airdrop opportunities and activities.

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