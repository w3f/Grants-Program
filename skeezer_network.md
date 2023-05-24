
# Skeezer Network


- **Team Name:** Skeezer 
- **Payment Address:** (ETH, USDT) 0xf4ecE479eba38D2AAD069Ff0c9c4166923DbB22E
- **Level** 2

## Project Overview :page_facing_up:


### The Platform
Skeezer - skeezer.org - is an anonymous voice, chat, and video app that matches users to volunteer listeners with similar backgrounds and experiences, trained to provide emotional support.
Skeezer is a peer-to-peer platform that aims to leverage the power of blockchain technology to provide a safe, secure, and anonymous space for users to share their thoughts and feelings.  
Listeners provide support and conversation on topics depending on a user's selection and will refer users to licensed professional help if necessary.
With a distributed demographic of vetted listeners, Skeezer aims to provide accessible and affordable mental health care to people all over the world.

![Platform Implementation](https://skeezer.org/platform_implementation.png)

You can currently demo the platform on https://demo.skeezer.org


### The Blockchain Network

Integrating blockchain to Skeezer came up as a way to create a more collaborative and user-centric experience for members of the communities we're trying to build - users, listeners, health professionals etc.
The Skeezer Blockchain will be a de-centralized network built on the Polkadot parachain network inheriting its secure, efficient, interoperability and scalable characteristics.
The network will be implemented as two major smart contracts:
a `token_smart_contract` - to track user, listener and professionals' participation within the network, 
and a `data_management_smart_contract` - to expose data centric features envisioned by the network e.g. Reputation Management, Rewards, and Conflict Resolution

A more comprehensive description of feature envisioned by the network can be found [here](https://skeezer.org/skeezer_blockchain_whitepaper.pdf).


*Technologies:*
**Blockchain:** Rust, !ink
**Frontend**: React.js, 
**Backend:** Python, Django, DRF
**Database:** IPFS, PostgreSQL


![enter image description here](https://skeezer.org/parachain_interaction.png)

#### Tier Based Voting

The proposed two-tier governance model for the `token_smart_contract` governance system in Skeezer aims to ensure a balanced and inclusive decision-making process. Here's an overview of how the tiers and proposal acceptance process would function:

Tier 1 Voters: Tier 1 voters would consist of mental health professionals, experienced listeners, administrators, and individuals falling into this category. These stakeholders possess specific expertise and experience relevant to the Skeezer ecosystem. Their inclusion in the governance process ensures that decisions are informed by the insights and perspectives of professionals within the mental health field.

Tier 2 Voters: Tier 2 voters would include users, newer listeners, and the general community. This tier represents a broader set of participants who may not have the same level of specialized expertise but are vital contributors to the Skeezer community. By including this tier, the governance model allows for the input and representation of a wider range of perspectives.

Proposal Acceptance Process: To ensure comprehensive decision-making, proposals would need to go through both tiers for acceptance. This process would apply to various types of proposals, including normal proposals, reward allocation proposals, tier promotion proposals, conflict resolution proposals, and organizational structure change proposals.

When a proposal is submitted, it would first be reviewed and voted upon by Tier 1 voters. Their expertise and experience would help evaluate the proposal's technical soundness, alignment with mental health best practices, and overall feasibility. If a proposal gains approval from Tier 1, it would then proceed to Tier 2 for voting.

The Tier 2 voters would assess the proposal from a broader community perspective, considering factors such as user experience, inclusivity, and community impact. If a proposal receives majority approval from both tiers, it would be accepted and implemented.

By incorporating both tiers of voters, the proposed governance model ensures that decisions are made with input from professionals, experienced community members, and the wider Skeezer user base. This approach strives to strike a balance between domain expertise and community representation, fostering a governance process that considers diverse perspectives and promotes the overall growth and success of the Skeezer ecosystem.


### Ecosystem Fit

The Skeezer Project is designed to leverage the Polkadot ecosystem by building its own parachain on the network.
The network will be built on Substrate and tested on Kusama thus having an ecosystem-wide approach in its implementation.

We aim to target users, caring *listeners*, and mental health professionals for adoption and participation in the network.

The Skeezer Blockchain is committed to promoting mental health awareness and well-being, and it strives to create positive change in the mental health care industry by fostering a more collaborative and user-centric approach, empowering users to take control of their mental health care.

We believe that this technology has the potential to revolutionize the way that mental health support is delivered, and we are excited to be at the forefront of this innovation.

We current have not found any similar projects in this or other related ecosystems

## Team :busts_in_silhouette:

### Team members

- Cleve Simiyu - Team Lead
- Vincent Kwasi Ogol
- Dennis Mutua
- Alvin Mugambi
- Arnold Gichunge
- Kenn Nyabuga

### Contact

- **Contact Name:** Cleve Simiyu, Vincent Kwasi
- **Contact Email:** cleve@skeezer.org, kwasi@skeezer.org
- **Website:** skeezer.org

### Legal Structure

- **Registered Address:** 10312, 00200 Nairobi Kenya
- **Registered Legal Entity:** Skeezer Project Ltd

### Team

**Cleve Simiyu - Founder, CEO**
Senior Software Engineer with a strong Computer Science background 8+ yrs XP
https://www.linkedin.com/in/clevesimiyu/

**Vincent Kwasi Ogol  - Co-founder, COO**
Software Engineer with a background in CyberSecurity.
Org. founding member [SafariDAO](https://www.safaridao.org/) - ([PolkadotSafari](https://dotsafari.xyz/), [EthSafari](https://ethsafari.xyz/))
https://www.linkedin.com/in/vincent-kwasi/

**Alvin Mugambi - Senior Backend Engineer**
https://github.com/AlvinMugambi
https://www.linkedin.com/in/alvin-mugambi-b653a3153

**Denis Mutua - Senior Blockchain Engineer**
http://github.com/dennohpeter

**Kenn Nyabuga - Senior Frontend Engineer**
https://github.com/kenyatta-nytch
https://www.upwork.com/freelancers/~0115976ab2d9c66210



**Org Repo:**
https://github.com/skeezer-org/



## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 6 weeks
- **Full-Time Equivalent (FTE):**  5-6 FTE
- **Total Costs:** 25,000 USD

### Milestone 1 - Initialization and Smart Contracts' Development

- **Estimated duration:** 4 weeks
- **FTE:**  4-5 FTE
- **Costs:** 15,000 USD



| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1. | Research & Data Collection | Reports and analysis from conversations, survey, and data analysis  with mental health professionals & community members on preferred implementation & participation on such a network in addition to work currently done. These will in in `pdf` , `mp3` and/or video format. - Some of these participants will form `tier_1` voters on the network |
| 2. | token_smart_contract | Smart contract with a staggered governance model with two tiers of voters. `tier_1` voters incl. mental health professionals, experienced listeners, admin, and people in this category. `tier_2` voters incl. users, newer listeners & the general community. Proposals have to go through both tiers to get accepted. This format will affect normal Proposals, Reward Allocation proposals, Tier Promotion proposals, Conflict Resolution proposals & Org. Structure Change proposals|
| 3. | Test Suite 1 | Test suite for the fungible token smart contract and it's governance functionality: to include unit and integration scripts covering; event emission, state changes & inter-contract messaging (mainly calling `data_management_smart_contract` functions). These scripts can be reused in case of deploying a similar network or extending functionality|
| 4. | data_management_smart_contract | Development of Skeezer network management smart contract to extend functionality that cannot be stored on `fungible_token_sc` . This to keep records, ratios and processes in the various categories of proposals|
| 5. | Test Suite 2 | Test suite for `data_management_smart_contract`: to include unit and integration scripts covering; data storage and retrieval, cross-contract calling & user-acceptance tests. These scripts can be reused in case of deploying a similar tier based data management smart contract  |


### Milestone 2 - Frontend, APIs, and Interoperability 

- **Estimated Duration:** 4 weeks
- **FTE:**  4-5 FTE
- **Costs:** 10,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1. | Frontend Portal | User friendly Portal where users can log in and view network activities incl. active proposals, disputes, boards, rated professionals, etc. Mockups can be found [here](https://www.figma.com/file/5oCWPYRdh4cSNcDSWLfNas/Skeezer-Blockchain-Network---Dashboard?type=design&node-id=0:1&t=kPGZdkn282t1kz3J-1) |
| 2. | API development | Providing a developer friendly APIs to fetch data on the network as well as plugin to other blockchains |
| 3. | Docs and Explainers | Published written and video documentation of how it all works|


## Future Plans

In the short-term, our main focus is on launching the Skeezer blockchain and token, as well as growing our community of users and listeners. We plan to achieve this through targeted marketing efforts and strategic partnerships with mental health organizations and influencers.
We also plan to continue improving the Skeezer platform and implement new features.
Our aim is to provide the best possible user experience for those seeking emotional support, and to continually enhance our listener training programs to ensure the highest quality of service.

In the long-term, we envision the Skeezer blockchain becoming a critical component of the global mental health ecosystem. We plan to partner with other mental health organizations and communities to leverage the power of the blockchain to facilitate secure, anonymous communication and collaboration among users, listeners, and mental health professionals.
Additionally, we aim to create a suite of tools and applications built on top of the Skeezer blockchain that will further empower mental health communities worldwide. These tools may include data analytics and machine learning algorithms to help identify patterns and trends in mental health data, as well as gamification and reward systems to incentivize positive behavior and engagement.

Overall, our long-term goal is to create a sustainable, self-governing mental health ecosystem that leverages the power of the blockchain to promote emotional wellbeing and provide accessible support to those in need. We believe that Skeezer has the potential to make a significant impact in the mental health space, and we are committed to realizing this vision through ongoing development and community building efforts.