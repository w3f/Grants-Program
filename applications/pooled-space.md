# Pooled.space



- **Team Name:** CoreBlocks
- **Payment Address:** Fiat
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 1


## Project Overview :page_facing_up:


### Overview

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/ffe4f315-d829-4674-8d43-26cc3be8ab65/0390258b-549c-4a73-93eb-cbead4d304c6/Untitled.png)

Solo staking (nominating) on Polkadot is technically complex and nominating often requires a high minimum investment and knowledge, creating a barrier for new users. The task of choosing validators is not simple, as it should take into account nominator reward and risk preferences and regularly keeping track of nominated validators which is hectic.

Pools eliminate the complexities of nominating. In pools you must ensure that the pool is earning rewards and nominating the validators that match your preferences. Participating in pools is more of a set-and-forget action than nominating by yourself. The pool operator maintains the list of validators nominated by the pool, and so, in a way, you are trusting the pool operator to act in your best interests, so basically you delegate much of the hectic work to the pool operator. 

**Pooled.space** offers a user-friendly platform allowing staking with as little as 1 DOT. This will attract newcomers, strengthen the Polkadot network, and extend its reach.


### Project Details

**Expanding Polkadot's Reach**

- **Targeting Newcomers:** The 1 DOT staking feature provides an accessible entry point for individuals hesitant about larger investments.
- **Frictionless Onboarding:** Simplify complex staking processes. Streamlined pool selection and daily returns tracking encourage increased participation.

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/ffe4f315-d829-4674-8d43-26cc3be8ab65/ba2f6dd7-2c65-4cc6-840a-ebf4f8e6cb32/Untitled.png)

 **Key Features**

  - Intuitive nomination pool dashboard (enhanced selection criteria based on TVL, member count, returns).
  - Individual pool overviews (commission, total rewards, etc.)
  - Main dashboard with key pool stats.
  - Easy pool joining, user balance display, and daily rewards.
  - Lock period warnings.

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/ffe4f315-d829-4674-8d43-26cc3be8ab65/b6a77133-d9b2-43ac-b417-076d44679ec3/Untitled.png)

**APIs**

- Polkadot JS API
    - Storage for pools https://polkadot.js.org/docs/substrate/storage/#nominationpools
    - Extrinsics for pools https://polkadot.js.org/docs/substrate/extrinsics/#nominationpools
- Subscan APIs
    - https://support.subscan.io/
    - It provides easy API access to data which is emitted through events. So rather than running a custom indexer, its convenient to use subscan API, [staking.polkadot.network](http://staking.polkadot.network) partly uses subscan APIs.


### Ecosystem Fit

Help us locate your project in the Polkadot/Substrate/Kusama landscape and what problems it tries to solve by answering each of these questions:

- Where and how does your project fit into the ecosystem?
    - nomination pools staking for Polkadot. 1 DOT staking feature offers a compelling entry point for DOT holders.
- Who is your target audience (parachain/dapp/wallet/UI developers, designers, your own user base, some dapp's userbase, yourself)?
    - newcomers to the polkadot ecosystem
    - existing users of polkadot who don’t stake due to complexities
- What need(s) does your project meet? How did you identify these needs? Please provide evidence in the form of (scientific) articles, forum discussions, case studies, or raw data.
    - I am Polkadot community manager/moderator at the Official Discord. We get lot of queries around staking which highlights the technical complexities behind it. So I gained interesting insights around the pain points of staking which led me to this idea.
    - <charts.md>

- Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?
    - https://staking.polkadot.network/
    - <compet-analysis.md>



## Team :busts_in_silhouette:


### Team members  

#### Name of team leader:

- Anwesh Nayak (@muddlebee)  

#### Names of team members:


- Arnav Nayak

- Dikhyant Krishna

  

### Contact

  
-  **Contact Name:** Anwesh Nayak

-  **Contact Email:** anweshknayak@gmail.com



### Legal Structure


-  **Registered Address:** NA

-  **Registered Legal Entity:** NA

  


### Team's experience

  
I have around 5 years of experience in full stack development. Previously worked as a tech lead at B2B fintech firm. Also a polkadot ambassador and the community moderator of the official polkadot/kusama discord. I have been contributing to the ecosystem since 2  years. Also participated in Thousand Contributors Programme by w3f and have been adding suggestions/improvements across the w3f github projects(polkodot-wiki).

Also wrote a comprehensive tutorial to get started with Polkadot using the polkadot-js API (https://polkadotjs-developer-hub.gitbook.io/)

**Arnav**, our lead designer has 3 years of experience in product design prior to that used to work as a architect with few years of experience.

  
**Dikhyant**, frontend developer has around 3 years of experience in web development, creating UI out of design specs.

  


### Team Code Repos

  

  
### Team LinkedIn Profiles (if available)

  

  
- <https://www.linkedin.com/in/anweshnayak/> Anwesh Nayak


- <https://www.linkedin.com/in/arnav-nayak-321595141/> Arnav Nayak


- <https://www.linkedin.com/in/dikhyantkrishnadalai/> Dikhyant Krishna

  

## Development Status :open_book:

If you've already started implementing your project or it is part of a larger repository, please provide a link and a description of the code here. In any case, please provide some documentation on the research and other work you have conducted before applying. This could be:

- links to improvement proposals or [RFPs](https://github.com/w3f/Grants-Program/tree/master/docs/RFPs) (requests for proposal),
- academic publications relevant to the problem,
- links to your research diary, blog posts, articles, forum discussions or open GitHub issues,
- references to conversations you might have had related to this project with anyone from the Web3 Foundation,
- previous interface iterations, such as mock-ups and wireframes.

## Development Roadmap :nut_and_bolt:

This section should break the development roadmap down into milestones and deliverables. To assist you in defining it, we have created a document with examples for some grant categories [here](../docs/Support%20Docs/grant_guidelines_per_category.md). Since these will be part of the agreement, it helps to describe *the functionality we should expect in as much detail as possible*, plus how we can verify and test that functionality. Whenever milestones are delivered, we refer to this document to ensure that everything has been delivered as expected.

Below we provide an **example roadmap**. In the descriptions, it should be clear how your project is related to Substrate, Kusama or Polkadot. We *recommend* that teams structure their roadmap as 1 milestone ≈ 1 month.

> :exclamation: If any of your deliverables are based on somebody else's work, make sure you work and publish *under the terms of the license* of the respective project and that you **highlight this fact in your milestone documentation** and in the source code if applicable! **Projects that submit other people's work without proper attribution will be immediately terminated.**


### Milestone 1 Example — Basic functionality

- **Estimated duration:** 3-3.5 months
- **FTE:**  1.5
- **Costs:** 10,000 USD

> :exclamation: **The default deliverables 0a-0d below are mandatory for all milestones**, and deliverable 0e at least for the last one.

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) start the application and send test transactions, which will show how the new functionality works. |
| **0c.** | Testing and Testing Guide |  In the guide, how to test the functionalities manually |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |.


...


## Future Plans

Please include here

- how you intend to finance the project's long-term maintenance and development,
    - We will need follow up grants to make it production ready with enhanced features.
- how you intend to use, enhance, and promote your project in the short term, and
    - Internal community testing and once production ready offering giveaway DOTs/NFTs to incentivise early users to use the project
- the team's long-term plans and intentions in relation to it.
    - Comprehensive historical data and analytics platform for pools and validators.
    - Explore liquid staking options.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation Website


#### Work you have already done.

- utility polkadot js API scripts https://github.com/pooled-space/polkadot-js-utility-examples/tree/master/src
- explored squid indexer in case we need for historical data https://github.com/pooled-space/squid-substrate-template
- base react template kit https://github.com/pooled-space/pooled-core-ui


#### Previous grants you may have applied for.
- mempool-v2, applied and grants got approved but pulled out due to some internal issues.

**Why pooled.space?**

- **Addresses a clear market need** evident from community feedback.
- **Drives Polkadot adoption** by lowering the entry barrier with minimum 1 DOT.
- **Emphasizes user experience** for sustainable engagement.
- **Pool first brand creation** “pooled.space” we chose a apt name,which will be easy for promoting polkadot awareness around 1 DOT min staking and SEO.