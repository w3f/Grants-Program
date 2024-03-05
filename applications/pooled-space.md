# Pooled.space



- **Team Name:** CoreBlocks
- **Payment Address:** Fiat 5.03.2024(5 March), 12:43 AM
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 1


## Project Overview :page_facing_up:


### Overview

![image](https://github.com/muddlebee/w3f-Grants-Program/assets/8139783/4056dd2a-0721-4a97-a6ef-c348bd9cae4c)

Solo staking (nominating) on Polkadot is technically complex and nominating often requires a high minimum investment and knowledge, creating a barrier for new users. The task of choosing validators is not simple, as it should take into account nominator reward and risk preferences and regularly keeping track of nominated validators which is hectic.

Pools eliminate the complexities of nominating. In pools you must ensure that the pool is earning rewards and nominating the validators that match your preferences. Participating in pools is more of a set-and-forget action than nominating by yourself. The pool operator maintains the list of validators nominated by the pool, and so, in a way, you are trusting the pool operator to act in your best interests, so basically you delegate much of the hectic work to the pool operator. 

**Pooled.space** offers a user-friendly platform allowing staking with as little as 1 DOT. This will attract newcomers and help expand the user base of Polkadot.


### Project Details

**Expanding Polkadot's Reach**

- **Targeting Newcomers:** The 1 DOT staking feature provides an accessible entry point for individuals hesitant about larger investments.
- **Frictionless Onboarding:** Simplify complex staking processes. Streamlined pool selection and daily returns tracking encourage increased participation.

![image](https://github.com/muddlebee/w3f-Grants-Program/assets/8139783/44a292ff-9b07-43be-bfac-1ee4231274e0)


 **Key Features**

  - Intuitive nomination pool dashboard (enhanced selection criteria based on TVL, member count, returns).
  - Individual pool overviews (commission, total rewards, etc.)
  - Main dashboard with key pool stats.
  - Easy pool joining, user balance display, and daily rewards.
  - Lock period warnings.

![image](https://github.com/muddlebee/w3f-Grants-Program/assets/8139783/91e427dc-1213-4c6b-a651-168058ad1a20)


## Development Roadmap :nut_and_bolt:


**Nomination pools extrinsics**

- join a pool
- increase your bond in pool
- withdraw/unbond your staked pool funds

**Nomination pools dashboard**

- better selection criteria based on total funds staked, no of pool members, total rewards disbursed, effective APR % etc
- specific pools overview like
    - pool commission
    - total rewards disbursed/claimed etc

**Stats Dashboard of network and pools**

- total no of pools, total no of active pools
- total no of users staked in pools
- min to create a pool
- average rewards rate
- total staked %

Features not supported in this milestone

- Creation and management of nomination pools by pool owner

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
    - [research-data](./pooled/research-charts.md) stats and charts around huge scope of growth for nomination pools.
    - [community insights](./pooled/community-insights.md) around the technical complexities of staking and the need for a user friendly platform from the Polkadot discord.
- Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?
    - https://staking.polkadot.network/
    - [competitive analysis](./pooled/competitive-analysis.md) of staking.polkadot.network and other wallets which provide staking pools and how we are different from them.




### Milestone 1 Example — Basic functionality

- **Estimated duration:** 3-3.5 months, April onwards (due to prior engagement in March for one of the devs, we will start this from April 2024 onwards)
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


## Development Status :open_book:

- [figma designs](https://www.figma.com/file/VdQgkFofvNNR9IZdHM7Z2V/Pooled-Space?type=design&node-id=0%3A1&mode=design&t=DFZgu2hjec7YnQTn-1) for the project
- [research-data](./pooled/research-charts.md)
- [community insights](./pooled/community-insights.md)
- [competitive analysis](./pooled/competitive-analysis.md) 





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

  
I have around 5 years of experience in full stack development. Previously worked as a tech lead at B2B fintech firm. Also a polkadot ambassador and the community manager/moderator of the official polkadot/kusama discord. I have been contributing to the ecosystem since 2 years. Also participated in Thousand Contributors Programme by w3f and have been adding suggestions/improvements across the w3f github projects(polkodot-wiki).

Also wrote a comprehensive tutorial to get started with Polkadot using the polkadot-js API (https://polkadotjs-developer-hub.gitbook.io/)

**Arnav**, our lead designer has 3 years of experience in product design prior to that used to work as a architect with few years of experience.

  
**Dikhyant**, frontend developer has around 3 years of experience in web development, creating UI out of design specs.

  


### Team Code Repos

  
  
### Team LinkedIn Profiles (if available)

  

  
- <https://www.linkedin.com/in/anweshnayak/> Anwesh Nayak


- <https://www.linkedin.com/in/arnav-nayak-321595141/> Arnav Nayak


- <https://www.linkedin.com/in/dikhyantkrishnadalai/> Dikhyant Krishna

  


## Future Plans

Please include here

- how you intend to finance the project's long-term maintenance and development,
    - We will need follow up grants to make it production ready with enhanced features.
- how you intend to use, enhance, and promote your project in the short term, and
    - Internal community testing and once production ready offering giveaway DOTs/NFTs to incentivise early users to use the project
- the team's long-term plans and intentions in relation to it.
    - Security audit
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

#### Why pooled.space?

- **Addresses a clear market need** evident from community feedback.
- **Drives Polkadot adoption** by lowering the entry barrier with minimum 1 DOT.
- **Emphasizes user experience** for sustainable engagement.
- **Pool first brand creation** “pooled.space” we chose a apt name,which will be easy for promoting polkadot awareness around 1 DOT min staking and SEO.