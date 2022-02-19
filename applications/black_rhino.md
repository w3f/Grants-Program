# W3F Grant Proposal - BR

> This document will be part of the terms and conditions of your agreement and therefore needs to contain all the required information about the project. Don't remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with a > (such as this one) can be removed.
> 
> 
> See the [Grants Program Process](https://github.com/w3f/Grants-Program/#pencil-process) on how to submit a proposal.
> 
- **Project Name:** Black Rhino - MVP - Phase 1
- **Team Name:** Black Rhino Labs
- **Payment Address:** 0xB008980A271cE691bD53C4d2441603F20e932300
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** **2**

> ⚠️ The combination of your GitHub account submitting the application and the payment address above will be your unique identifier during the program. Please keep them safe.
> 

## Project Overview :page_facing_up:

If this application is in response to an RFP, please indicate this on the first line of this section.

If this is an application for a follow-up grant (the continuation of an earlier, successful W3F grant), please provide name and/or pull request of said grant on the first line of this section.

### Overview

Please provide the following:

- If the name of your project is not descriptive, a tag line (one sentence summary).
- A brief description of your project.
- An indication of how your project relates to / integrates into Substrate / Polkadot / Kusama.
- An indication of why your team is interested in creating this project.

[Image 1](https://imgur.com/Ns04oww)

Harnessing the power of blockchain technology, Black Rhino aims to bridge the gap between endangered species conservation and opportunities in cryptocurrency markets. Black Rhino is a DeFi ecosystem to function on Polkadot, which provides opportunities in emerging markets for endangered species conservation organizations, while also providing users a more rewarding and engaging experience for supporting conservation efforts worldwide. Our first product within the ecosystem will be a DeFi Raffle Staking Pool built on top of a third party staking service. Now more than ever due to the global pandemic, conservation efforts around the world seek alternative streams of funding in order to continue their important work. Future projects include NFT integration, Cryptocurrency Crowdfunding Portals and an Interactive Platform.

### Project Details

We expect the teams to already have a solid idea about your project's expected final state. Therefore, we ask the teams to submit (where relevant):

- Mockups/designs of any UI components
- Data models / API specifications of the core functionality
- An overview of the technology stack to be used
- Documentation of core components, protocols, architecture, etc. to be deployed
- PoC/MVP or other relevant prior work or research on the topic
- What your project is *not* or will *not* provide or implement
    - This is a place for you to manage expectations and to clarify any limitations that might not be obvious

Overview:

As of right now, we are defining our technical roadmap. We are in the process of architecting the product through Figma and planning out the technical aspects of our project. We are currently working on Reach ([https://reach.sh/](https://reach.sh/)) to build our base protocol and we plan on using a static website and server-less for our centralized components. We aim to provide core functionality to our DeFi Raffle Staking Pool product in the form of smart contracts on the Polkadot Relay chain which will handle functions such as a users ability to deposit, stake, and will also handle distribution of rewards and more. Attached below is the initial design of the Pool.

Technology:

1. Rust
2. Fireblocks ([www.fireblocks.com](http://www.fireblocks.com/)) Enables every businesses to easily and securely support digital assets and cryptocurrencies. Hundreds of crypto and digital asset businesses use Fireblocks software and APIs to custody, manage treasury operations, access DeFi, mint & burn tokens, and manage their digital asset operations.
3. Acala ([https://acala.network/](https://acala.network/)) is the decentralized finance network and liquidity hub of Polkadot. It’s a layer-1 smart contract platform that’s scalable, Ethereum-compatible, and optimized for DeFi with built-in liquidity and ready-made financial applications. With its trustless exchange, decentralized stablecoin (aUSD), DOT Liquid Staking (LDOT), and EVM+, Acala lets developers access the best of Ethereum and the full power of Substrate.
4. Reach ([https://reach.sh/](https://reach.sh/)) Reach is the platform for practical blockchain development, making it exponentially faster and cheaper to launch decentralized apps on any network while providing the safety you need to grow. While our platform does the work of a dozen tools, it broadly consists of a programming language, compiler, and suite of testing and deployment tools.

Mockups:

[Image 2](https://imgur.com/BPqOO9I)

Components:

1. Entry Portal (For Users to Enter Pool)

This is the source which will enable users to enter the Raffle Pool. This component will be built using Reach and implemented using [polkadot-js/api](https://github.com/polkadot-js/api). This component will enable users to use their wallet to enter into the raffle pool and deposit, which will be handled by a smart contract. 

1. Raffle Pool (Smart Contracts)

The Raffle Pool is composed of multiple actions including using a database to store unique transactions and user wallet identification. This component will be comprised of smart contracts which will be used to deposit funds from users on a Staking Protocol, which will generate yield. The generated yield will then be returned to the users randomly selected by the smart contract, through an oracle random number generator, who are determined to be the winners of the pool.

### Ecosystem Fit

Help us locate your project in the Polkadot/Substrate/Kusama landscape and what problems it tries to solve by answering each of these questions:

- Where and how does your project fit into the ecosystem?
- Who is your target audience (parachain/dapp/wallet/UI developers, designers, your own user base, some dapp's userbase, yourself)?
- What need(s) does your project meet?
- Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?
    - If so, how is your project different?
    - If not, are there similar projects in related ecosystems?

Our project focus is Endangered Species Conservation and to provide new opportunities for funding for conservation work around the world, which is currently lacking within the blockchain space. Black Rhino will live within the Polkadot ecosystem, which is already one of the most environmentally friendly blockchain networks, and provide users with an engaging platform to support conservation work through new and interesting opportunities in the blockchain space. Our target audience is dapp users, NFT users, DeFi users as well as our own user base, and everyday cryptocurrency users within the Polkadot ecosystem. We are providing everyday cryptocurrency users with a fun, engaging way to earn rewards and participate in a community and in an ecosystem that supports conservation around the world utilizing tools and opportunities in blockchain such as tokens, DeFi protocols, NFTs and more. As of right now we have no direct competition, however when similar projects do appear, we want to look for opportunities to work together towards the goal of conservation and achieving our goals, rather than create a competitive atmosphere. 

## Team :busts_in_silhouette:

### Team members

- Name of team leader
- Names of team members

**Brandon — Business Development**: Marketing Communications Graduate, 6+ years of working in marketing/business development, 2+ years of working in the cryptocurrency/NFT market space.

**Kale — Business Operations**: 8+ years of management experience in retail and online businesses, 3+ years of experience in Marketing, 2+ years of working in the cryptocurrency/NFT market space.

**Nik — Engineering**: Computer Science Graduate, 2+ years of experience working in the technology sector as a software developer, 1+ year of experience working in the cryptocurrency/NFT market space.

**Todor — Technology**: Computer Science Graduate, 2+ years of experience working in the technology sector as a software developer.

**Joao — Product**: Economics Graduate: 5+ years of experience working in the financial technology industry, 3+ years working as a product manager in the DeFi industry.

**Tyler — Research**: 8+ years of experience working in the conservation as a volunteer at sanctuaries, zoo’s and conservation parks.

**Yoana — Branding**: Graphic Design Student, 2+ years of experience working in the graphic design, branding and marketing field.

**Advisor: Steven Seet** — Head of Science Communication @ BioRescue & Keep Nature Alive

**Advisor**: **Afia Owusu** — Director of West Africa Operations @ WADA

**Advisor**: **Jose Etcheverry** — Co-Chair & Director @ Sustainable Energy Initiative International Renewable Energy Academy

### Contact

- **Contact Name:** Brandon Samuel
- **Contact Email:** brandon@blackrhino.life
- **Website: www.blackrhino.life**

### Legal Structure

- **Registered Address:**

**212 Carmichael Ave, Toronto, Ontario, Canada M5M2X**3

- **Registered Legal Entity:**

**Black Rhino International Inc.**

### Team's experience

Please describe the team's relevant experience. If your project involves development work, we would appreciate it if you singled out a few interesting projects or contributions made by team members in the past. For research-related grants, references to past publications and projects in a related domain are helpful.

If anyone on your team has applied for a grant at the Web3 Foundation previously, please list the name of the project and legal entity here.

**Brandon — Business Development**: Brandon is currently working as Chief Marketing Officer and Vice president at ProductShare, an e-commerce marketplace built on the Tron Network. Before that, he had a long stint in Marketing Communications, working for many reputable agencies in Canada, before entering into the blockchain space. In total, He has gained more than 5+ years of Marketing and Business Development experience and has more has 2+ years of experience in the Cryptocurrency markets. Brandon completed his Marketing Communications degree in Toronto, Canada at Ryerson University. 

**Kale — Business Operations**: Kale has more than 5+ years of experience managing and running operations for multiple business in the service industry, starting in 2017. Before that, he worked in Social Media Marketing for many reputable agencies in Germany before entering into the cryptocurrency space as an investor in 2019.  

**Nik — Engineering**: Nik is a Computer Science Graduate from England, with more than 2+ years of experience working in the financial technology sector as a software developer. Nik entered the cryptocurrency space in 2021 as an investor, but has since become an efficient blockchain developer with smart contract capabilities and experience in within the cryptocurrency space. 

**Todor — Technology**: Todor is also Computer Science Graduate from England, with more than 2+ years of experience working in the financial technology sector as a data scientist and as a software engineer. 

**Joao — Product**: Joao is an Economics Graduate from Denmark, with more than 2+ years of experience working in the financial technology sector as a software developer and more than 2+ years of experience working in the DeFi sector as a product manager.  

**Tyler — Research**: Tyler is a student, currently at Ryerson University, with 8+ years of experience working in the conservation as a volunteer at sanctuaries, zoo’s and conservation parks.

**Yoana — Branding**: Graphic Design Student in Switzerland, 2+ years of experience working in the graphic design, branding and the marketing field.

**Advisor: Steven Seet** — Head of Science Communication @ BioRescue & Keep Nature Alive

**Advisor**: **Afia Owusu** — Director of West Africa Operations @ WADA

**Advisor**: **Jose Etcheverry** — Co-Chair & Director @ Sustainable Energy Initiative International Renewable Energy Academy

### Team LinkedIn Profiles (if available)

- [https://www.linkedin.com/in/brandon-samuel-87a59210a/](https://www.linkedin.com/in/brandon-samuel-87a59210a/)
- [https://www.linkedin.com/in/todor-voynikov/](https://www.linkedin.com/in/todor-voynikov/)
- [https://www.linkedin.com/](https://www.linkedin.com/)[https://www.linkedin.com/in/joão-forte-carvalho-374b811b/](https://www.linkedin.com/in/jo%C3%A3o-forte-carvalho-374b811b/)
- [https://www.linkedin.com/in/kaloyan-pavlov-georgiev-114970160/](https://www.linkedin.com/in/kaloyan-pavlov-georgiev-114970160/)

## Development Status :open_book:

If you've already started implementing your project or it is part of a larger repository, please provide a link and a description of the code here. In any case, please provide some documentation on the research and other work you have conducted before applying. This could be:

- links to improvement proposals or [RFPs](https://github.com/w3f/Grants-Program/tree/master/rfp-proposal) (requests for proposal),
- academic publications relevant to the problem,
- links to your research diary, blog posts, articles, forum discussions or open GitHub issues,
- references to conversations you might have had related to this project with anyone from the Web3 Foundation,
- previous interface iterations, such as mock-ups and wireframes.

## Development Roadmap :nut_and_bolt:

This section should break the development roadmap down into milestones and deliverables. To assist you in defining it, we have created a document with examples for some grant categories [here](https://www.notion.so/docs/grant_guidelines_per_category.md). Since these will be part of the agreement, it helps to describe *the functionality we should expect in as much detail as possible*, plus how we can verify and test that functionality. Whenever milestones are delivered, we refer to this document to ensure that everything has been delivered as expected.

Below we provide an **example roadmap**. In the descriptions, it should be clear how your project is related to Substrate, Kusama or Polkadot. We *recommend* that teams structure their roadmap as 1 milestone ≈ 1 month.

For each milestone,

- make sure to include a specification of your software. *Treat it as a contract*; the level of detail must be enough to later verify that the software meets the specification.
- include the amount of funding requested *per milestone*.
- include documentation (tutorials, API specifications, architecture diagrams, whatever is appropriate) in each milestone. This ensures that the code can be widely used by the community.
- provide a test suite, comprising unit and integration tests, along with a guide on how to set up and run them.
- commit to providing Dockerfiles for the delivery of your project.
- indicate milestone duration as well as number of full-time employees working on each milestone.
- **Deliverables 0a-0d are mandatory for all milestones**, and deliverable 0e at least for the last one. If you do not intend to deliver one of these, please state a reason in its specification (e.g. Milestone X is research oriented and as such there is no code to test).

> :zap: If any of your deliverables is based on somebody else's work, make sure you work and publish under the terms of the license of the respective project and that you highlight this fact in your milestone documentation and in the source code if applicable! Teams that submit others' work without attributing it will be immediately terminated.
> 

### Overview

- **Total Estimated Duration:** 8 Months to complete Raffle Pool Product and launch on Mainnet.
- **Full-Time Equivalent (FTE):** 5
- **Total Costs:** $45,000

### Milestone 1 — Product Demo w/ Some Smart Contract Capabilities

- **Estimated duration:** 2 months
- **FTE:** 5
- **Costs:** 10,000 USD

### Milestone 1 Product Demo w/ Some Smart Contract Capabilities

- **Estimated duration:** 2 months
- **FTE:**  5
- **Costs:** 10,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Reach/Fireblocks API |
| 0b. | Documentation | We will provide documentation of the code of the base protocol from Reach and a basic tutorial that explains how a user can (for example) enter the Raffle Pool and send test deposits. |
| 0c. | Testing Guide | Core functions of the Raffle Pool  will be fully covered by unit tests to ensure functionality and robustness. We will be providing video demos as well to demonstrate the functionality of the Raffle Pool product. |
| 0d. | Docker | We will provide a Dockerfile(s) as well as a URL that can be used to test all the functionality of the Raffle Pool delivered with this milestone. |
| 0e. | Article | We will publish an article on our Website and/or on our Medium page, introducing the product and explaining the functionality of this product, as well as a roadmap. We will also outline and update the progress from this first Milestone. |

### Milestone 2 MVP TestNet Deploy (Audit)

- **Estimated duration:** 3 months
- **FTE:**  5
- **Costs:** 10,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Reach/ Fireblocks API/ Acala |
| 0b. | Documentation | We will provide documentation of the MVP code from Reach, providing basic documentation on the complete functionality of the protocol up till this point. We will include documentation on the core functionality of the smart contracts, a full Audit of the Smart contracts by a reputable third-party entity, as well as the User Journey. |
| 0c. | Testing Guide | The core functions of the Raffle Pool will be tested by beta users on the testnet, to ensure full functionality of all important components of the main product.   We will be providing a URL link for TestNet deploy, as well as a guide with full documentation for users interested in testing protocol on TestNet. |
| 0d. | Docker | We will provide a Dockerfile(s) as well that can be used to test all the functionality of the Raffle Pool delivered with this milestone. The URL will be included with a complete guide for users. |
| 0e. | Article | We will publish an article on our Website and/or on our Medium page, announcing the launch of the product on the TestNet with a fully product deploy. We will provide access for select users who show genuine interest in helping improve the protocol and improving the product. We will also provide the full testing guide for users, as well as explain the core functionality of the product in a digestible way.  |

### Milestone 3 MainNet Deploy

- **Estimated duration:** 3 months
- **FTE:**  5
- **Costs:** 25,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Reach/ Fireblocks API/ Acala |
| 0b. | Documentation | We will provide documentation of the code of the base protocol from Reach as well as provide the deployed code from our repository with the smart contracts which will be deployed on the Polkadot Relay Chain. We will provide documentation of the smart contracts and provide a guide for how the contracts execute exact functions within the protocol. |
| 0c. | Testing Guide | At this point, the core functions of the Raffle Pool will have been fully tested and audited with any errors or roadblocks sorted through. A full and complete testing guide will be provided at this point for all users, explaining the entire functionality of the product. |
| 0d. | Docker | We will provide a Dockerfile(s) as well as a Mainnet URL that can be used to participate in the Raffle Pool once it is live and functional on the Mainnet. |
| 0e. | Article | We will publish an article on our Website and/or on our Medium page, announcing the launch of the product on the Mainnet, with a full walk-through and guide explaining the user journey from start to finish as well as the full functionality of the product. |

## Future Plans

Please include here

- how you intend to use, enhance, promote and support your project in the short term, and
- the team's long-term plans and intentions in relation to it.

Immediate Plans:

- Social Media Marketing Promotional Campaign
- Secure Partnerships with two more Endangered Species/Climate Conservation Organizations
- Design and architect Website v2.0 with Full functionality
- Design and architect Raffle Staking Pool website page, branding and presentation

We plan to promote our project through a social media promotional marketing campaign, as well as initial NFT collections in collaboration with our partner organizations which will provide utility to users to access the platform early as well as earn rewards for participating.

Success After 3 Months:

- Build Launch Team (8-12 people)
- Establish Partnerships with 1-3 Endangered Species Conservation Organizations
- Launch Social Media Communities
- Release 1-2 Exclusive NFT Collections in collaboration with partners
- Complete Designs/Architecture for Application Raffle Platform — Get product to Beta.
- Successfully Establish an Online Community of 10k+
- Secure $25,000 in TVL
- Begin Design + Architecture Phase for Website v2.0

Success After 6 Months:

- Successfully Launch Black Rhino Raffle Protocol TestNet
- Secure $50,000 in TVL
- Expand Team (Add Additional 4-6 Team Members as Needed)
- Additional Partnerships (Secure 2-3 Additional Partnerships for Operations)
- Release 2-4 Exclusive NFT Collections
- Secure 3-4 Additional Partnerships with Conservation Organizations
- Successfully Establish an Online Community of 25k+
- Successfully Raise $25k+ for Endangered Species Conservation Organizations
- Begin Building Phase for Website v2.0

Success After 12 Months:

- Successfully Launch Black Rhino Raffle Platform for Users
- Secure $100,000 in TVL
- Release 8-12 Exclusive NFT Collections
- Secure 8-10 Additional Partnerships with Conservation Organizations
- Successfully Establish an Online Community of 50k+
- Successfully Raise $50k+ for Endangered Species Conservation Organizations
- Begin Design + Architecture Phase for Black Rhino Fundraising Portals and NFT platform****
- Launch Website v2.0
