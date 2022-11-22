# Ventur

- **Team Name:** Popular Coding
- **Payment Address:** 0x98d8b52Eb09db91f92D01F0DF40cFa3F0e172c7f (usdc)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

### Overview

#### Ventur, The Business Process Parachain

Ventur is focused on decentralizing business processes and services for professionals. Ventur’s initial goals are:

1. To enable decentralized marketplaces for professional engagement, encompassing business-to-business engagement and employment contracts between businesses and individuals.
2. To enable assignment and evaluation of technical credentials.

Ventur’s professional marketplaces will naturally enable additional use cases.  Having work engagements and their resolutions tracked on a parachain, will lend itself to treating records of completed work on Ventur as a trustless alternative to a company or individual contractor's reputation.  Past work will serve as an immutable live CV for participants.  Enabling applications with functionality along the lines of LinkedIn to present work engagement data in a Professional Profile.

Furthermore, RFP (request for proposal) Providers requesting bids on Ventur will have the option to prefund their RFPs by placing funds into escrow to show Bidders that there are funds committed to the RFP.

Both Bidders and Providers will be incentivised to fulfill the off-chain obligations of their business contracts.  While on-chain logic can enforce one time payments and recurring payments, the delivery of deliverables will be incentivised through their public record on Ventur.

Bidders who do not deliver their work will have their failure to deliver recorded on Ventur.  Providers will be able to review past successes and failures as they evaluate whether to engage with bidders on new RFP bids.

Providers will be able to refine their bidding criteria and enforce requirements from account data not only on Ventur, but also from other parachains.  This lends itself to tracking cross chain credentials like technical certifications.  One possible example could be having an IT certification for knowledge in Validator management; this credential could be granted to an address as an NT-NFT, non-transferable NFT, on a given parachain.  Then, providers looking to engage bids for running a validator, could specify a requirement that only addresses in possession of a NT-NFT for Validator Operators can place bids.

##### Substrate / Polkadot / Kusama Integration

Ventur will be built using the Substrate Framework.  It will exist as a parachain or parathread on the Polkadot Network and enable professional engagement for work related to each of the attached parachains and beyond.

##### Team Interest

The team at Popular Coding is excited by the promise of Web3 and is eager to help realize the promise of decentralization for use cases that can grow the ecosystem.  Our team has extensive experience working with Web2 technologies. We have engaged directly in RFP and bidding processes as consultants and have seen many companies through these processes as trusted advisors.  We have seen firsthand that there is much to be gained through a more transparent and open process, and we believe we have the right experience and skill sets to deliver on a Web3 implementation.

Beyond bidding, we have participated directly in the adoption and growth of the cloud industry, as  consultants helping customers move their first workloads into the cloud and as cloud engineers and architects for major cloud providers, helping provide prescriptive guidance and guide adoption across major corporations.  We’ve seen the importance of having certification processes and an available qualified workforce for companies to adopt new technologies and confidently accelerate their training and hiring efforts to grow in new fields.  We believe that the right training and certification processes tied into an RFP market can drive real value and accelerate growth for the Polkadot Kusama ecosystem.

### Project Details

An overview presentation on Ventur is available on [Google Docs](https://docs.google.com/presentation/d/15kMwFxIbvGHCOPvR7gi7RVZAmYfQczMNFKr9NEBDNK4/edit?usp=sharing).

Documentation of our core functionality and architecture are available on [Google Docs](https://docs.google.com/document/d/1gFBQufcYHUP4rBwN_Ck6ERT6l4eyhA0_PKXf__AbmzQ/edit?usp=sharing).

An early stage MVP of the NT-NFT pallet has been developed and is located on [GitHub](https://github.com/Popular-Coding/nt-nft).

In this initial batch of work, Ventur Network will not have any user-facing dapps implemented.  Development of marketplaces built upon this grant's pallet functionality is planned but beyond the scope of this proposal.

### Ecosystem Fit

Help us locate your project in the Polkadot/Substrate/Kusama landscape and what problems it tries to solve by answering each of these questions:

- Where and how does your project fit into the ecosystem?

From a functional perspective, Ventur fits in as a parachain.

Ventur focuses on supporting business and professional engagement processes for the DotSama ecosystem.  Specifically, Ventur will initially support processes for RFP creation, bidding, and acceptance.  There will also be functionality for automating payment schedules for RFP contracts.

These functions have the potential to enable a decentralized marketplace for work within the DotSama ecosystem.  Furthermore, integration with other parachains through xcmp will enable RFPs to reference attributes from other chains as qualifications to bid on an RFP, as well as allowing buyers to create RFPs with payment escrow in tokens native to other parachains.

Additionally, histories of successfully paying out RFPs and successfully fulfilling bids for work on the Ventur network could serve as trustless reputations for companies and individual professionals in the ecosystem.  Allowing newcomers to confidently engage companies and workers with documented histories or even living resumes on Ventur.

- Who is your target audience (parachain/dapp/wallet/UI developers, designers, your own user base, some dapp's user base, yourself)?

The target audience for Ventur from an end user perspective includes  businesses and individual professionals.

But more directly, Ventur will have a direct target audience of dapp developers.  Dapps can be built on top of Ventur to enable marketplaces for different types of work, ranging from GitHub bounties to NFT creation marketplaces and even marketplaces for off-chain work and fulfillment.
Developers will also be able to look at the network history to deliver web apps that display trends and analytics for the marketplaces and that rank, categorize, and summarize buyer and bidder histories.

- What need(s) does your project meet?  

Connecting Businesses and Professionals with a work and bid marketplace and providing tools for one-off contracts and long-term engagement.

Beyond providing a decentralized and transparent marketplace for professional engagement, Ventur will also be able to serve as a record of completed work, in effect allowing past work to serve as a living on-chain resume for professionals.  And Non-Transferable NFTs will enable technical certification and professional and academic credentials to be represented and tied to on-chain entities.

- Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?
  - If so, how is your project different?
  - If not, are there similar projects in related ecosystems?  

There are a few grant proposals which have worked to implement Auctions on Substrate.
While our RFP process will have similarities to an auction process, allowing for bids and providing mechanisms for eventual winner selection. It will differ in having mechanisms for requesters to approve bids after manual review and qualification options for automatically limiting bids to members of predefined collectives and holders of particular NT-NFTs (which can serve as technical certifications).  There will also need to be options to reopen bidding should an approved bidder not accept their selection.

There have been multiple implementations of NFT pallets for Substrate.  As the name suggests, our Non-Transferrable NFT pallet would be differentiated from existing implementations by enabling NFTs that are soulbound to a specific account, [there has been some popular writing on the topic of soulbound nfts](https://vitalik.ca/general/2022/01/26/soulbound.html?external=1).  To prevent such NFTs from being spammed onto accounts in an unsolicited manner, the NT-NFT pallet would require an acceptance by the NT-NFT recipients to finish the minting process.  NT-NFTs will also provide an option for expiry.

From a broad perspective, the RFP portion of this project could be considered similar to GitCoin.  And a GitHub bounty functionality as well as crowdsourced grant funding functionality are certainly use cases that we envision Ventur supporting.  However, Ventur intends to more broadly support bids and engagement outside the realm of code development and delivery.  Additionally, we would like to see Ventur support not just bidding and bounty processes but also collective enablement and benefit procurement for freelancers, and fundamental business processes like payroll automation.

## Team :busts_in_silhouette:

### Team members

- Name of team leader
Patrick Gryczka
- Names of team members
GinSiu Cheng
Maciej Zielonka
Joseph Murawski

### Contact

- **Contact Name:** Patrick Gryczka
- **Contact Email:** patrick@popularcoding.com
- **Website:** popularcoding.com

### Legal Structure

- **Registered Address:** 8 The Green STE D Dover, DE 19901
- **Registered Legal Entity:** Popular Coding LLC.

### Team's experience

The Popular Coding team delivers a combination of enterprise engineering experience, development talent, and operational excellence.  Team members have worked at major tech companies like Microsoft, AWS, and Meta, and cutting-edge startups like Sooryen Technologies and Blue Voyant.

Recently the team participated in the 2022 Polkadot Hackathon North America Edition, placing third in the NFT category with their mvp of a Non-Transferable NFT pallet for Substrate.
​

**​Patrick Gryczka**

Patrick is a Solutions Architect at Amazon Web Services. He designs and implements distributed systems using cloud services and creates prescriptive guidance and best practices for enterprises using AWS. Before joining AWS, Patrick worked at Microsoft, where as a Cloud Solution Architect he worked as a trusted advisor for strategic customers. Working in the enterprise cloud provider space, Patrick has developed core competencies in serverless development, DevOps, and engineering project management.

At the start of his career, Patrick worked as a Software Engineer with the consulting startup Sooryen Technologies. He designed and delivered cloud-based analytics and machine learning workloads for e-commerce customers, bringing prediction and recommendation functionalities to production for companies like 1-800-Flowers.  Patrick also worked with the Fennel Labs team on [Supply Mesh](https://devpost.com/software/supply-mesh), a dapp designed for the Hack the Crisis Denmark Hackathon in 2020.  

**​GinSiu Cheng**  

Gin is a customer success and cloud engineering leader at Microsoft Financial Services with a proven track record in helping customers execute  multi-year cloud transformations for mission-critical applications (totaling $XXX million per year) and deliver on targeted business outcomes. As a senior principal architect, he shapes FSI customers’ cloud adoption strategies and journeys, defines technical architecture and implementation, drives Azure platform improvements and new features with Azure engineering teams, and assembles and leads large scale teams (50+) to tackle the toughest problems.

Prior to joining Microsoft, Gin held various roles ranging from cloud practice lead and software engineer at a consulting startup (acquired by Encora) to cybersecurity researcher and data scientist in academic, startup and enterprise settings with demonstrated implementation experience across all major cloud vendors (Azure, AWS and GCP).

Areas of expertise: Infrastructure Modernization, Application Development, Site Reliability Engineering, DevOps, Data Engineering and Analytics, and Cybersecurity

**Maciej Zielonka**

Maciej is a software engineer working for the Messenger organization at Meta, Inc. His product infrastructure team sits at the intersection of backend and frontend needs, providing scalable solutions and APIs for product developers. The team optimizes reliability, performance, and quality of experience for users as it integrates new features into the Messenger infrastructure. Maciej graduated from Yale in May 2021 with a B.S. in Computer Science, where his coursework focused on Machine Learning, Data Science, Operating Systems, and Quantum Computing. His senior project with Brian Scassellati’s Social Robotics Lab developed machine learning models that could classify children’s engagement in an activity or conversation using auditory signals. He was also a member of Code Haven, a student-run organization that taught introductory computer science lessons to public elementary schools in New Haven. During his time at Yale, Maciej interned at Facebook, Inc., where he worked with Facebook’s continuous deployment team,  using the Rust programming language, Maciej built a service capable of deploying Widely Distributed Binaries to Facebook’s development machines. Maciej also interned at Amazon in Wrocław, Poland as a robotics intern, where he actively maintained and repaired Amazon’s automated systems, and contributed new automated solutions to everyday problems at Amazon’s warehouses.

**Joseph Murawski**

Joseph Murawski is a Cloud Security Engineer working for BlueVoyant.  Joseph brings 15 years of experience in Cyber Security and System Operations Management.  
In his current role, he works in security operations. He designs and implements security solutions in a challenging multi-cloud environment for a world-class security company.
Previous roles include designing and executing IT systems for multi-billion-dollar construction projects. Technical business liaison, responsible for strategically implementing new technology solutions that improve business efficiency while meeting corporate business goals.

### Team Code Repos

- <https://github.com/popular_coding>

Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine.

- <https://github.com/Gryczka>
- <https://github.com/GinSiuCheng>
- <https://github.com/maciekzielonka>
- <https://github.com/d-z-o>

### Team LinkedIn Profiles

- <https://www.linkedin.com/in/gryczka/>
- <https://www.linkedin.com/in/ginsiucheng/>
- <https://www.linkedin.com/in/maciej-zielonka-b83b7a230/>
- <https://www.linkedin.com/in/joseph-murawski/>

## Development Status :open_book:

If you've already started implementing your project or it is part of a larger repository, please provide a link and a description of the code here. In any case, please provide some documentation on the research and other work you have conducted before applying. This could be:

An overview presentation on Ventur is available on [Google Docs](https://docs.google.com/presentation/d/15kMwFxIbvGHCOPvR7gi7RVZAmYfQczMNFKr9NEBDNK4/edit?usp=sharing).

Documentation of our core functionality and architecture are available on [Google Docs](https://docs.google.com/document/d/1gFBQufcYHUP4rBwN_Ck6ERT6l4eyhA0_PKXf__AbmzQ/edit?usp=sharing).

An early stage MVP of the NT-NFT pallet has been developed and is located on [GitHub](https://github.com/Popular-Coding/nt-nft).
We wrote up a summary of the NT-NFT pallet’s goals on [our submission of the pallet to the 2022 Polkadot Hackathon North America Edition](https://devpost.com/software/nt-nft-pallet).

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 2 months
- **Full-Time Equivalent (FTE):**  4 FTE
- **Total Costs:** 30,000 USD

### Milestone 1 — Implement contracted-payment-process and escrow Substrate Modules

- **Estimated duration:** 1 month
- **FTE:**  4
- **Costs:** 15,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | MIT |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide Dockerfiles that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an **article** that explains the functionality of the contracted-payment-process pallet and the escrow pallet, and goes through how you can launch template substrate nodes with those pallets from the pallet repos using Docker.
| 1. | Substrate module: escrow | We will create a Substrate module that will implement an escrow functionality allowing for rfp submitters to lock up funds for funding rfps. |  
| 2. | Substrate module: contracted-payment-process | We will create a Substrate module that will implement a contracted payment process, paying out over the duration of a contract with defined functionality for resignation and termination. |  
| 3. | Substrate chain - Ventur | Modules escrow and contracted-payment-process will be integrated into Ventur and interaction between them will be enabled, allowing for contracted-payment-process to source funds from an escrow address. |  

### Milestone 2 — Implement rfp-process and nt-nft Substrate Modules

- **Estimated duration:** 1 month
- **FTE:**  4 FTE
- **Costs:** 15,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | MIT |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide Dockerfiles that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an **article** that explains the functionality of the rfp-process pallet and nt-nft pallet, and goes through how you can launch template substrate nodes with those pallets from the pallet repos using Docker.
| 1. | Substrate module: rfp-process | We will create a Substrate module that will implement an RFP bidding and acceptance process. |  
| 2. | Substrate module: nt-nft | We will refine our Substrate module that implements non transferable nfts. These non transferable nfts can be used for professional certifications as well as proof of membership to an advocacy-dao, or for subscriptions. |  
| 3. | Substrate chain - Ventur | Modules rfp-process and nt-nft will be integrated into Ventur and interaction will be enabled between the rfp-process and the contracted-payment-process and escrow modules. |

## Future Plans

Short Term Development Plans:

- Create initial dapps with UIs to integrate with Ventur and showcase how it can power RFP processes, certifications, and marketplaces for professional engagement.

Long-Term Development Plans and Project Intentions:

- Launch a testnet and further refine pallets.
- Engage Corporate Partners for RFP requests.
- Integrate XCMP to source certifications and other qualifications from sources on other parachains and allow for RFPs in tokens native to those parachains.
- Explore subscription and membership use cases for expiry dated NT-NFTs.
- Secure parachain slot for Ventur.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?**  
Web3 Foundation Website and personal recommendation.

Here you can also add any additional information that you think is relevant to this application but isn't part of it already, such as:

- Work you have already done.  
This would be our first grant in the Web3 ecosystem.  We have created an MVP of the NT-NFT module defined as a part of our deliverables and would further refine and integrate it as part of this grant’s work.
- If there are any other teams who have already contributed (financially) to the project.  
No teams have contributed financially to our project, but we did receive some prize money for placing third in the [Polkadot Hackathon 2022](https://polkadot-na.devpost.com/)’s NFT category for our work conceptualizing the NT-NFT module.
