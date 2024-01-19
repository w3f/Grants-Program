# Me Protocol

- **Team Name:** My AI
- **Payment Address:** POLKADOT: 14K4XzpMBxGp8NiCKMWAwzjFMLcAKjakXooqHtVEC6WoaeTq (DOT)
- **Level:** 2 


## Project Overview :page_facing_up:

### Overview

**What is the Me Protocol?**
 The Me Protocol is a purpose-built exchange infrastructure for blockchain-based rewards. It provides the fundamental technology for the creation of a frictionless, limitless, and decentralised rewards ecosystem for all companies, large or small, to participate.

**Background:**

**Loyalty rewards are moving to a blockchain near you.**
Wouldn’t it be great if you could buy a coffee with unused airline miles? Or if your rewards never expired, and you could trade them? Whether it’s sports teams, airlines, hotels, Highstreet fashion or your local pizzeria, brands from almost every sector are looking to take advantage of what blockchain technology can do to transform the **$180b in global loyalty rewards by allowing rewards to be exchanged and redeemed across brands.** 

**Blockchain-based rewards are great for consumers, but also for brands:**
1. Customers not using rewards are **3x more likely to defect from a brand.**
2. While brands try their best to provide attractive offers, **less than half of rewards are actually used.** This is **$90b of value left on the table.**
3. Rewards on a blockchain can be more easily exchanged than traditional points, meaning **when a current customer cannot immediately use their rewards, they can exchange them with someone who can.**
4. This means **existing customers are happy and new customers are acquired** – unachievable with traditional loyalty programs.

**Making blockchain-based rewards work in practice however requires solving two general problems:**
-  **Accessibility** – Simply creating a reward token that can be exchanged doesn’t mean that it will be exchanged.
  1. Where do you go to redeem the rewards? 
  2.  How do you exchange them? 
  3.  Most consumers will not bother to search for loyalty redemption options, then go find a DEX, then a peer and then calculate what they need to swap to get the rewards they need.

   **Solution** – We are building a dedicated **‘reverse’ marketplace** for blockchain-based loyalty rewards. Simplified redemption, for everyone, from every brand, with the exchange complexity hidden in the background.

 -  **Liquidity** – Just because a brand wants to release reward tokens, doesn’t mean they can be easily exchanged in a marketplace.
 1. What is the value of these reward tokens?
 2.  How do we ensure that the exchange brings benefits to the brand as well?
 3. How do we balance inflow and outflow and drive new customers to brands?
 4.  What do we do about tokens on different blockchains?
 
   **Solution: The Me Protocol.** Specifically designed to power the emerging brand economy by facilitating the exchange of brand loyalty rewards. 

**Why are we motivated to build in the Substrate/Polkadot/Kusama ecosystem?**
We like the ecosystem for several reasons:

- We share the same philosophy of interoperability.
- Our exchange functionality utilizes the concept of decentralized exchanges but engineered for loyalty rewards, leveraging Polkadot's ecosystem for cross-chain operations.
- As we continue to develop our protocol, it should integrate with other related protocols and be used by other applications without being constrained to one network.


## Project Details

![Polkadot ecosystem](https://user-images.githubusercontent.com/52800276/205578388-a180149c-19f1-4bf2-8333-4f8911a7c986.png)

### Technologies: 
 1. Ink! and RUST (smart contracts), 
 2. OpenBrush (smart contract library)
 3. Substrate (smart contract)
 4. Polkadot.js (back end and frontend integration with smart contract)
 5. TypeSript (front end and backend scripts)
 6. NestJs and Reactjs (backend and front end framework)
 7. PostgreSQL with Typeorm (database and connection)
 8. Elastic Search and Redis Cache (searching and indexing)
 9. Fastify Multipart (image management),
 10. Winston (logging)
 11. Docker (containerization)
 12. Nestjs testing and jest (testing) e.t.c 

### Architectural Summary

<img width="95%" alt="newmearchitecture" src="https://user-images.githubusercontent.com/52800276/184610535-0473eae5-c295-4bdd-8259-369b36a796d6.PNG"/>

Our solution has two major components: the Me App and the Me protocol. 

**The Me App** contains all the necessary interfaces, services, microservices and infrastructure that allows consumers (individual users) to sync/manage/connect their loyalty rewards and interact with offers pushed to them from the various brands and businesses on our platforms that issued those rewards. These users can redeem their rewards for offers in the marketplace. The Me App also handles all the logic for managing brand accounts, allowing them to push offers to their customers and providing them with analytics on the performance of their rewards programs and offers in our ecosystem.

**The Me Protocol** contains all the contracts, libraries and abstract contracts used to manage tokenized brand rewards, swap them and route them to appropriate wallets. It also contains the various utilities for managing pools such as the brand fee pool, brand treasury pool, and brand bounty pool.

For a start, the protocol would simply be a set of smart contracts containing all the necessary business and operational logic, but eventually it would evolve into a parachain to further serve the peculiarities and nuances of the loyalty reward space.

The design of the protocol follows the EIP-2535 pattern originally proposed by nick mudge.

<img width="1328" alt="Screenshot 2022-12-06 at 15 39 56" src="https://user-images.githubusercontent.com/52800276/205942619-ef732d3d-bbb9-4fde-86ff-2c26a38a725c.png"/>

There is a main contract which houses the utility storage for the protocol and some function selectors via which it can route to other contracts called facets, containing the business logic to be executed. The routing is done via delegatecall.

While other facets serve one business logic or another, the upgrader and loupe help to manage upgrades (following governance decisions) and introspection into the protocol respectively



### Ecosystem Fit

**Where do we fit in the Web3 ecosystem?**
In as much as we can generalize, our project fits somewhere in the middle of Social (shareable rewards), DeFi/Exchange (rewards economy), Identity (allowing users to own the data keys to their loyalty) spaces. If you consider ‘ecommerce’ a sector, then we are definitely there (decentralized commerce). 

 **Target Audience**
We hope the project attracts dapp and other developers to build integrations and participate in the further development of the protocol.
- The protocol will integrate with our marketplace so the target audience for that includes everyday consumers and brands/businesses seeking to transition to blockchain-based loyalty programs

-  Web3-based projects with utility/reward tokens, social protocols, etc. that want to increase the value of their rewards.

**Needs that we meet**
In addition to those covered in the above sections:
- Web3-based applications with utility tokens/rewards are in need of a way to extend out the value of these rewards beyond saying they are listed on an exchange or that they can be used for gas and a few other redemption options. Our protocol and the apps built around it will provide unlimited redemption options, thus increasing reward value for innumerable Web3 projects.

-  Example: social protocols, leveraging blockchain to facilitate human interaction, can also leverage the Me protocol to boost engagement and provide real value to current and prospective users.

 **Similar projects in the  Substrate / Polkadot / Kusama ecosystem?**
A similar project on the DEFI side is Stellaswap (https://stellaswap.com/) and on the loyalty program side is Project Venkmann https://www.venkmanholdings.com/

 **How are we different?**
 - Me Protocol is different from Stellaswap because we are not a typical DEX, we just use the concepts of decentralized exchanges to power our multi-vendor loyalty program and to enable the swapping of loyalty rewards across brands. Consumers of these rewards would hardly know that there is a swap, all they know is that they can spend the same reward across multiple brands.

- Me Protocol is also different from project Venkmann because we do not set out as a loyalty program manager for brands, rather we are the interoperator of loyalty programs, providing one blockchain protocol that brands and even loyalty program managers can integrate to enable a multivendor loyalty ecosystem where rewards can be moved seamlessly across brands with no overhead. 


## Team :busts_in_silhouette:

### Team members

 **Name of team leader**
  Robert Wesley (CEO)
  
 **Names of team members:**
   - Robert Wesley (CEO)
   - Paul Oamen (CTO)
   - Pius Onobhayedo
   - John Chimaobi
   - Ayomide Adebara
   - Boluwatife Oguntoyinbo
   - Nwele Uchenna
  
 We will be hiring an additional Rust/Ink! developer

### Contact

**Contact Name:** Robert Wesley
**Contact Email:** wesley@meprotocol.io
**Website:** https://meprotocol.io

### Legal Structure

- **Registered Address:** My AI Inc. 251 Little Falls Drive, Wilmington, New Castle County, Delaware 19808 USA (registered address); 8 The Green Suite 11901 Dover, DE 19901 (business address)

- **Registered Legal Entity:** My AI Inc. (Delaware C Corp)

### Team's experience

We have founded and co-founded several tech companies (e.g. Kivu Technologies, Cognitive Architectures, Useful Technologies) and worked on a variety of complex software development projects spanning graph computing to blockchain based solutions.

- **Robert Wesley (CEO)** is an international serial entrepreneur. Having founded five organisations across sectors and continents, Robert's diversity of entrepreneurial experiences spans from graph computing to blockchain to AI. Founder @ Sender Ventures; Founder @ KIVU Technologies; Co-Founder @ Cognitive Architectures; International Diplomat @ UN; MBA @ESADE

- **Paul Oamen (CTO)** is one of Nigeria's rising Web3 stars, where in addition to venture building, set up and served as the principal instructor at the Pan Atlantic University's Blockchain Programme and is a core contributor to the zone blockchain, Africa's layer-1 Blockchain network for digital payments in fiat and regulated digital currencies. Co-Founder @ Usefull Technologies; Blockchain Instructor @ Pan-Atlantic University, Lagos Business School;

- **Dr. Pius Onobhayedo** is the Head of the Computer and Information Sciences Department at the Pan-Atlantic University. Aside from building an entire university department, Dr. Onobhayedo’s distinguished career has also included appointments at the University of Southern California in the United States and the University of Navarra in Spain. He has also served as CTO of multiple software companies.




### Team Code Repos

- https://github.com/Me-Protocol


GitHub accounts of team members

- https://github.com/AgentPoles
- https://github.com/developeruche
- https://github.com/codemobii
- https://github.com/piosystems
- https://github.com/Teepheh-Git
- https://github.com/Adebara123

### Team LinkedIn Profiles (if available)

- https://www.linkedin.com/in/robert-wesley/
- https://www.linkedin.com/in/paule-oamen/
- https://www.linkedin.com/in/piusono/


## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 5 months
- **Full-Time Equivalent (FTE):**  2600 hrs
- **Total Costs:** 29600 USD

### Milestone 1  — Implement the Core Parts of the Protocol

- **Estimated duration:** 1 month
- **FTE:**   800hrs (5 persons)
- **Costs:** 12,500 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 / GPLv3 / MIT / Unlicense |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user, brand or third party application can interact with our protocol for the various specified use cases |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish a **lite paper** to describe the architecture and its implementation
| 1. |Build out the Pool Component| We will implement the Rewards Pool Component which contains the contracts, libraries and interfaces that describe and manage the sets of AMM pools for brand loyalty rewards. This component primarily consists of the pool contract, which manages all the logic relating to brand liquidity (swapping, adding, removing, multistage swapping, etc.), and the Pool initiator contract, which would create a pool every time a new brand reward is to be supported on our protocol. These are similar in concept to Uniswap Pool and Pool Deployer contracts, but with different requirements/implementation logic and no concentrated liquidity. <br/> **Languages and framework:** Ink!, Openbrush|
| 2. | Build out the rewards factory component | We will implement the Rewards Factory, which allows brands with or without Web3-based rewards to move some or all of their loyalty points to the blockchain using the PSP22 standard (and also PSP34/PSP1155 in the future). It contains the function for creating a new PSP22 token and keeping track of the associated brand. <br/> **Languages and framework:** Ink!, Openbrush |
| 3. | Build out the Rewards Periphery Component| We will implement the Rewards Periphery Component that provides a form of incentivization to brands when their rewards are used to redeem offers across other brands. This component consist of two major contracts: Brand Bounty and Brand Treasury Contracts. Brand Treasuries are small fees paid by brand A to brand B when a customer from brand B chooses to redeem his/her reward with brand A. The treasury is a smart contract that holds these tokens, mapped to the appropriate brand. Brand bounties on the other hand are small amounts of reward tokens charged to a customer when he chooses to redeem that reward with another brand (typically swapping in our protocol). These small fees are stored in the Bounty Contract and when a bounty threshold is reached, they are issued as rewards to promote the issuing brand. <br/> **Languages and framework:** Ink!|
| 4. | Build out the service payment component| We will implement the Service Payment Component that brands and other integrating third-party applications will use to pay for the various services rendered to them through the protocol and business applications. This component consists of the payment/fee contract, which contains the logic to handle the reception of these tokens, mapped to the payer, and the logic to release these tokens when a paid service is rendered to the payer. <br/> **Languages and framework:** Ink!| 
| 5. | Build Out the Rewards Valuation Oracle Component| We will implement the Rewards Valuation Oracle Component, which helps to manage all external requests relating to rewards pricing and valuation in the protocol based on the supply and demand of these rewards in the pool. It consists primarily of the oracle contract that provides information on the valuation of rewards in our protocol. <br/> **Languages and framework:** Ink!|
 


### Milestone 2 — Adding the Protocol Peheripherals and Kickstarting the Frontend and Backend services

- **Estimated Duration:** 2 months
- **FTE:**  900hrs (3 persons)
- **Costs:** 8,550 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 / GPLv3 / MIT / Unlicense |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user, brand or third party application can interact with our protocol for the various specified use cases |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish a **lite paper** to describe the architecture and its implementation
| 1. |Build out the Protocol Access Component| We will implement the Access Component, which consists of contract routers that abstract the core protocol services and provide functions that brands, customers, protocol admins, and third-party applications can use to safely interact with the protocol. These are similar to the Uniswap router contracts, but instead of just one general contract, the contracts are split into Customer, Brand, Admin, and in the future Third-Party Contracts, based on the role of the requestor. A brand router, for example, will expose the functions that allow a brand to create a reward (using the reward factory), mint additional rewards or burn existing rewards, add or remove rewards from the liquidity pool, top up fee wallet, etc. <br/> **Languages and framework:** Ink! |
| 2. | Build out the lens component | We will implement the Lens Component that provides introspection into the protocol. This component is comprised of the Secretary and Loupe Modules. The Secretary Contract would provide business information like how many brands are connected to the protocol, total loyalty rewards in pools, etc. The Loupe Contract provides protocol architecture information, such as what functions the protocol supports and where these functions are deployed (it is an implementation of the EIP2535 DiamondLoupe Contract) etc. <br/> **Languages and framework:** Ink!| 
| 3. | Building out the Governance Component | We will implement the Governor Facet that will help to manage access control across the protocol and also help to manage governance rules for future proposals and updates. <br/> **Languages and framework:** Ink!| 
| 4. |Build out the Backend Service Components for the Me App| We will implement some key utilities for the back-end services to be used by integrated apps, such as logging (Winston); data caching (Redis Cache); search indexing (Elastic search); database and connection (Postgres TypeOrm); mailing service (Nestjs nodemailer with sendgrid abi); image upload with (Fastify multipart); and entities and their relationships (Typescript, NestJs, PostgreSQL).|






### Milestone 3  — Rounding Up with the APP MVP and Integrating the Protocol with the APP

- **Estimated Duration:** 2 months
- **FTE:**  900hrs (3 persons)
- **Costs:** 8,550 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 / GPLv3 / MIT / Unlicense |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user, brand or third party application can interact with our protocol for the various specified use cases |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish a **lite paper** to describe the architecture and its implementation
| 1. | Build out the Asset Management Component of the Me APP| We will implement all the necessary screens, services and microservices that let brand customers to keep track of, earn and spend rewards in applications and also for brands to keep track of, distribute and manage their rewards in applications.<br/> **Languages and framework:** TypeScript, Nestjs, Reactjs, Polkadotjs.|
| 2. | Build out the offers management component of the Me APP| We will implement all the necessary screens and provide all the necessary services and microservices that will allow brands to integrate their offers, create new offers and push them to applications and also allow brand customers to search offers, filter offers, view price, see offers whose rewards they have, redeem these offers with their rewards. <br/> **Languages and framework:** TypeScript, Nestjs, Reactjs, Polkadotjs, PostgreSql|




## Future Plans

- We will first incorporate the Me Protocol into our own marketplace. This should provide significant exposure to the project and prove-out its utility for additional projects. Our company, My AI, will be dedicated to supporting the protocol as a core developer during near- and long-term.
We will also be establishing a DAO as we move forward that will provide additional governance of the project as we progressively decentralise.

- We also plan to offer a significant suite of perks, bounties, rewards etc. to contributors of the project to encourage wider participation during the formative period as well as into the longer term.

- In the end, the Me Protocol should be an integral component of the emerging ‘brand economy’ as a key piece of infrastructure for meta- and non-metaverse rewards.


## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Was recommended that we apply by Daniel Cake-Baly from Parity Technologies.

**Previous grants:** We received financial support in the form of an investment from the Blockchain Founders Group.
