# Root - an on-chain decision-making, talent sourcing and collective creation system

- **Team Name:** [Polkassembly](https://www.polkassembly.io) / [stated.tech](stated-tech.notion.site/) / [Decent Partners](https://decent.partners)
- **Payment Address:** 0xdf08f8fcd47d857b9e4ce69e06bf6e569969b229 (USDC)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 3

## Project Overview :page_facing_up:

Root is a common good initiative which aims to tackle current issues with on-chain governance - low voter participation, lack of oversight and siloed knowledge, through a fun, collaborative and educational process that plants composable proposals (preferendums) that are nurtured by network contributors to grow decentralised teams from the ground up. 

We want to realise the potential of on-chain governance by enabling proposals and teams to be created, iterated and formed through our protocol that interacts directly on-chain, showing the power of "console-like" queries to CRUD proposals from IPFS directly to the blockchain.

The first version of our system is inspired by a cutting edge 18th century voting system known as [Borda Count](https://en.wikipedia.org/wiki/Borda_count). In fact, it will use a particular version of Modified Borda's Count (MBC) known as called ["Score Voting"](https://en.wikipedia.org/wiki/Score_voting) or "Range Voting" that allows voters to assign a numerical score to each proposal, typically on a scale of 0 to 10 or 0 to 100, instead of just approving or disapproving of each proposal. This allows voters to express a more nuanced preference for each proposal, rather than just a binary choice.

In Score Voting, each voter assigns a numerical score to each proposal, and the scores are tallied up to determine the winner. The proposal with the highest overall score is typically chosen as the winner. This system allows voters to express a more granular preference for each proposal, and it can be more effective at identifying the most widely supported proposal, even in cases where there is no clear consensus among voters.

Score Voting can also be modified to require that each voter allocate a total of 100 points across all the proposals, to ensure that each voter is submitting a complete preference ranking. This is sometimes called "100-point voting" or **"range normalization"**.

[Warren D. Smith](https://www.rangevoting.org/WarrenSmithPages/homepage/rangevote.pdf) and Jan Kok both independently proposed the idea of score voting in the early 2000s, and since then it has been the subject of much research and experimentation in the field of electoral systems.

### Overview

Root is born from experience gained in ongoing applied contribution to on-chain governed networks such as Edgeware and aims to address many of the current limitations of existing approaches facing Substrate based chains, when it comes to existing issues around voting engagement, ecosystem talent development and the formation of effective, efficient and reputable on-chain organisations.  

By returning to first principles we aim to standardize proposal making processes for the Substrate ecosystem, optimising for _intelligent adoption_ rather than simply gamifying governance in a way that may create unintended and undesirable outcomes over the long term. 

Root is built around a collective creation and decision making system that uses a composable voting system inspired by Borda's Count and ranged normalization to compute voting and allow contributors to create _preferendums_ drectly linked to governance pallets.

Our goal is to facilitate low level consensuses for proposals from initiating teams, before they can smoothly send their proposal to gov1/2 from/to any Substrate network via root.origin and inspired by [shokunin style](https://polkaverse.com/@shokunin/let-s-use-pallet-proxy-for-chaos-and-good-32567) optimistic pure proxy organisations in the process.

Teams can now benefit from an environment where they can collaborate and reach consensus to get supported from the ground up before they send their proposals to a binary Y/N referendum.

We built this [ggdoc hack](https://docs.google.com/document/d/1-g2A387hsOcWc7_UJWwwtgr2gyE553gvFURTVXOEErE/edit?usp=sharing) to demonstrate what we would like to achieve. Check out the comments to undestand the logic.

### Project Details

### Current issues with on-chain proposal development

When addressing current issues we need to begin by focusing on the fundamental outcome we have in mind when designing new tools and processes.

We should be very clear as to what certain developments aim to optimise, for who and what purpose, since these problems are all part of a bigger picture.
Without aligning on a core motivation we are in danger of collectively making the overall system worse in aggregate.

A starting point for this is sourcing, sustaining and scaling _collective network intelligence_.

This is a very different design philosophy to simply _driving adoption / participation_.

Let’s break this down a little more by arguing for some of the current ideas that might seem on the surface to solve certain issues:

- **Problem 1 : voting systems are too complex**

  - **Outcome: there is low voter participation**

  - **Solution: we need more collaborative UX/UI**

>Making governance voting easier is definitely something we should aim for and simple more proactive UX/UI is important, but it can also optimise for increasingly poor decision-making - aka, there should be some time cost to making a _thoughtful_ decision and that should be implicit in the design principles.
>
>Other projects such as [Proof of Chaos](https://www.proofofchaos.app/) also aim to create incentive systems for encouraging voters - an idea that’s both brilliant in its simplicity, but also potentially dangerous in its current design… e.g. you earn an NFT for voting, but that NFT is not necessarily non-transferable, and so might be tradeable, which leans into the emergence of financial incentives which abstract away the actual ‘vote’ as the purpose of the interaction, ultimately making the system dumber over time.
>
>So yes we want to get people to swipe easily, but we also need to make proposals more engaging, so people will stop and read / listen / watch and make decisions in a proactive way - delegating their intelligence, as well as their vote. When seen this way, we can also understand voter participation as an entertainment problem, (something that will be addressed in other upcoming initiatives beyond the scope of this grant). 

- **Problem 2: no standardisation of proposal data**

  - **Outcome: standardised proposals**

  - **Solution: proposal forms**

>The standardising of data inputs - is something the Edgeware community have debated endlessly, since there is no lack of proposals, but a lack of data standardisation causes issues nonetheless, with everyone essentially starting from a blank sheet of paper and creating their own documents and structures leading to arguments and circular debates.
>
>The issues of no standardisation:
>
>- For proposers: a blank sheet of paper is harder to fill out than a few boxes which trends towards proposer apathy / missing info / administrative time suck.
>- For voters: it makes comparison hard when comparing two proposals on a like for like basis this effects voter engagement, participation and confuses overall sentiment.
>
>A simple form is the obvious answer to address short term issues, but when we approach this challenge from a longer term perspective of optimising for a bigger picture - sourcing, sustaining and scaling collective network intelligence we can see that some standardisation is useful, but given the diversity of talent we have the potential to fund, across many domains, who each may prefer a different medium of expression, we can then see that standardisation also constrains the intelligence of the collective - voters and proposers.

- **Problem 3: Referendums offer binary votes on some package of information, but as we know they are very dumb tools.**

  - **Outcome: A "tyranny of the majority" where the views of a minority group are ignored or suppressed.**

  - **Solution: range normalization**
>Range normalization can help to counteract the tendency for some voters to exaggerate their scores, either by assigning the highest possible score to their preferred option or by assigning the lowest possible score to all other options. This can lead to skewed results and undermine the fairness of the voting process.
>
>By normalizing the scores, the range voting system can more accurately capture the true preferences of the voters and ensure that the winning option is the one that is most preferred by the majority.

In addition, the current proposal process ends with voters approving funds into a ‘project multsig’, we essentially leave the funded team successful in one part of the process (getting funding approval) but left entirely on their own to figure out delivery of what is in essence something that almost always needs to mesh with a complex and ever changing underlying system.

This leads to proposals taking far longer, teams being paid far less, whilst voters get irate at the time taken, which leads to mistrust, which further exacerbates tensions, which further degrades the governance process. Both sides move apart, and lessons are never learned.

If we can drive forward more nuanced and interactive decision making, that leads to more imaginative proposals that enable us to share financial value and credit more fairly across a group, we can then begin to see this whole process as the pre-formation process for talent sourcing and the setup of fluid and optimistic on-chain organisational structures like shokunin’s [optimistic pure proxies](https://polkaverse.com/@shokunin/let-s-use-pallet-proxy-for-chaos-and-good-32567).

#### **Is there another way?**

When we begin with a basic idea that no proposal put forward is final, or correct, or cannot be improved, then we begin to design different systems, optimising for advancing coherence between proposers and also voters. who we should aim to move towards contributors and even co-creators of proposals.

By beginning with an outcome we are designing towards, we begin to see the problems differently and this has two primary effects on the way we imagine and design these systems:

*We take the **pressure off** people to write great proposals to convince voters.*

Currently we are headed towards ever longer documents, associated materials, references, spreadsheets, colourful language and big promises that adds to the administrative burden on everyone and further reduces voter / proposer participation and makes the whole process into something that optimises for a certain type of specialist proposal writer.

*We move the system away from binaries - proposers / voters who end up in an adversarial relationship, and towards outcomes that prioritise **collective endeavours**.*

This is perhaps a radical, but obvious approach, that aims to optimise once again for a larger aim, than simply engineering away the symptoms of much bigger issues.

### How Root works 

We introduce a **weighted/ranked voting system** to help people participate in on-chain governance equally, no matter how many tokens they hold. 

[This document](https://docs.google.com/document/d/1-g2A387hsOcWc7_UJWwwtgr2gyE553gvFURTVXOEErE/edit?usp=sharing) is our _proof of concept_ Google docs hack for building a preferendum pallet, which will act as an easy on-ramp for contributors to take part in on-chain governance. 

### User Stories

#### Phase 1: Draft Creation / Writing Part

Phase 1 has an Optimistic quorum. Instead of validating decisions, they can put their veto on people's views. Once quorum is reached, the corresponding subject or alternative is canceled.

##### User Story 1

As a team member, I want to propose a Preferendum draft so that other team members can view it, suggest changes, and collaborate to refine it.

- The draft is published to IPFS.
- The draft hash is recorded on chain.
- All team members can access and suggest changes to the draft.

**N.B Quorum is set up by the proposer and can be changed by Quorum itself.**

##### User Story 2

As a team member, I want to join the Preferendum team so that I can contribute to the team's vision and ideas.

- The process for joining the Preferendum team is transparent and auditable.
- The Preferendum team membership is accessible to everyone.

##### User Story 3

As a team member, I want to collaborate on a Preferendum draft so that it can be refined and improved.

- All team members can view and suggest alternatives to the draft.
- Suggestions and changes can be tracked and reverted if necessary.
- Each version of the draft is published to IPFS and recorded on chain.

##### User Story 4

As a team member, I want to propose a veto to an alternative so that I can voice my opposition to a proposal that I believe is not in the team's best interest.

- All team members can propose a veto to a Preferendum proposal.
- The veto proposal is transparent and auditable.
- An optimistic Quorum must approve the deletion of any alternative or subject.
- The final decision regarding the proposal is recorded on chain and automatically updated.

##### User Story 5

As a team member, I feel that we're ready to send the proposal to vote so I propose to send the proposal to the voting phase.

- Pessimistic quorum must be reached to start the voting phase
- The hash of the proposal is sent to the voting phase and stored on IPFS
 
#### Phase 2: Preferendum Voting

##### User Story 6

As a team member, I want to vote on Preferendum proposals so that I can help determine which proposal will be submitted to the treasury for consideration.

- All team members can view and vote on Preferendum proposals.
- The voting process is transparent and auditable.
- The final Preferendum proposal is recorded on chain.

**Quorum**

A pessimistic Quorum must be reached to finish this phase.

##### Bonus Story

Inspired from Proof-Of-Chaos mechanisms, we could send NFTs to participants to give them a souvenir of their participation by minting RMRK based .pdf documents linked to the hash of their initial proposal. This NFT could also represent their identity in a Proof-Of-Reputation based environment.

>Suddenly we can open up proposals as **economic opportunities** for anyone to review/improve/iterate proposals and indeed the projects themselves by delegating voting power to these projects.

Engagement can have a reputational, financial and creative upside, that aligns incentives between all parties better than the current system.

It also starts to solve other issues - namely, information asymmetry between voters (who are likely more familiar with the core chain/tech/culture) and outsiders, namely those wandering into the lion’s den - with excitement and energy ready to be pummeled out of them…

We can see how from these initial foundations we are on a path to solving issues such as **talent acquisition**, development and accreditation using the system to bootstrap the sourcing, sustaining and scaling collective network intelligence.

The preferundum pallet development has begun. Then, we will create a full interface that will interact with the pallets and stored on IPFS.

>By pushing in exactly the opposite direction to form creation and data standardisation, we inspire more originality and opportunity, designing in a more humane way… appreciating that what works for some, will not work for all.

If we can drive forward more **nuanced and interactive decision making**, that leads to more imaginative proposals that enable us to **share financial value and credit more fairly across a group** with delegations, we can then begin to see this whole process as the pre-formation process for **talent sourcing** and the setup of fluid and optimistic **on-chain organisational structures** like [shokunin’s patronage proxies](https://patronage.shokunin.network/).

### Root Design

![Root Design](https://github.com/stated-tech/Preferendum/blob/main/Root%20Design.png)

### Ecosystem Fit

The stated.tech team seeks to provide the ecosystem with Root as a new governance framework available to every parachain & implementable throughout any dApp on those parachains - our first implementation will be on [Kabocha](https://kabocha.network) - a Kusama parachain. We will then focus on parachain deployment by proposing to integrate our pallet to existing parachains' runtime.

As DotSama contributors, we've been spending this year watching teams growing and evolving into parachain owners within a federated network.

We thus identified few major issues that need to be solved ASAP in order to fix DotSama's governance. Indeed, the current centralization in decision making processes within blockchain ecosystems results in:

- Lack of communication between voters and proposal makers ensures knowledge and experience is siloed

- Lack of cooperation between curators, facilitators, building teams and voters

- Lack of composability in the proposal-making process
(I can agree to the general proposal but not to a specific part of it)

- Lack of connections from publishing platforms to on-chain treasuries

Which leads to a lack of engagement from contributors, and billion dollars economies managed by arbitrage bots.

We want to fix these issues by leveraging engagement through the whole proposal making process to make it more human and ultimately more comprehensible. 

Our partnership with Polkassembly allows us to not only benefit from their UX/UI experience, but also fast-tracks Root into a production environment, exposing our new approach to proposal development to the wider ecosystem.

## Team :busts_in_silhouette:

### Team members

**Lead team**
- Product Manager: David Germanowicz
- Substrate Engineer: Matthiew M23
- Front-End Engineering Team: [Polkassembly](https://polkassembly.io/)

**Advisor**
- Jam from [Shokunin Network](https://shokunin.network/)

**Network Service:** 
- Richard Welsh from [Decent Partners](https://decent.partners)

### Contact

- **Contact Name:** stated.tech / decent partners / polkassembly
- **Contact Email:** stated.tech@proton.me / richard@decent.partners / hello@polkassembly.io
- **Website:** http://www.stated.tech/ & https://decent.partners & https://polkassembly.io/

### Legal Structure

- **Registered Address:** The Old Casino, 28 Fourth Avenue, Hove, East Sussex, United Kingdom, BN3 2PJ
- **Registered Legal Entity:** Decent Partners Ltd

### Team's experience

MatthiewM is a rust (substrate) developer. He originally was a physics engineer. He participated in the Polkadot Academy in Jannuary 2022 in Buenos Aires.

David has a background in the Social Sharing Economy as an Impact Fintech Founder. Gratuated from the EDHEC Business School (top 10 BS in Europe - Financial Ttimes), he originally was Product Manager for an AI powered financial product. David is also preparing a Ph.D. thesis in blockchain governance (corporate finance) at La Sorbonne (ESCP Business School) in Paris.

[Polkassembly](https://polkassembly.io/) is the governance forum for the Polkadot and Kusama network along with majority of its parachains. The goal of Polkassembly is to enable hosting of a decentralized, transparent, and inclusive process for making decisions about the direction and development of the Polkadot and Kusama network along with its parachains.
Polkassembly Team: [Nikhil Ranjan]([url](https://www.linkedin.com/in/nikhilran/)), Co-founder & CTO | [Jaskirat Singh]([url](https://www.linkedin.com/in/jaskirat21/)), Co-Founder & CEO

Richard - Edgeware council member, contributor. Co-steward of [Kabocha parachain](https://kabocha.network]. Co-founded [Copa90.com](https://copa90.com), creative director [Bigballs Media](https://www.hollywoodreporter.com/news/general-news/liberty-global-buys-stake-bigballs-831290/), and [I Am Playr](https://www.youtube.com/watch?v=ZceipOGEblk). Been building/funding/scaling communities on social networks since 2007. Previously [Decred](https://github.com/monsieurbulb/forksintheroad/blob/master/Decred_forks_in_the_road.md) contributor.

Decent Partners, Polkassembly and Stated.Tech are an active part of the Substrate ecosystem by participating in sevevral forum and governance discussions, building cutting-edge experiments and projects that have proven their utility.

### Team Code Repos

- https://github.com/stated-tech

You can find aswell the beginning of the pallet preferundum. 

Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine.

- https://github.com/Matthiewm23

- https://github.com/davyjones25

- https://github.com/monsieurbulb

- https://github.com/Premiurly/polkassembly

### Team LinkedIn Profiles (if available)

- https://www.linkedin.com/in/matt-m-6a557b254/
- https://www.linkedin.com/in/david-germanowicz-57151a236/
- https://www.linkedin.com/in/rfwelsh/
- https://www.linkedin.com/company/polkassembly/
- https://www.linkedin.com/in/nikhilran/
- https://www.linkedin.com/in/jaskirat21/

## Development Status :open_book:

Our interface will be based a custom pallet that we have already began to work on: **the Preferendum Pallet**. It will be mainly composed of Hashmap to link every preferundum with subjects and every subject with possibilities.

Data won’t be stored in the blockchain to avoid a fees surcharge, that’s why we will only store of pallet the cid of the data stored in IPFS.

We have made a off-chain exemple by linking a google with discord through a bot. Do not hesitate to see what we have done by joining our discord : https://discord.gg/YzpUVuJz

With our front-end, it will be the same. We could also display it everywhere: discord, telegram, element etc. and even use these platforms as storage solutions like [the Virto team](https://kusama.polkassembly.io/referenda/77) is doing.

The code of the preferundum pallet is available in [Matthiew's github](https://github.com/Matthiewm23/Preferundum/tree/main/pallets/voting/src) ; we are developing it, it is not fully tested but the logic is in. 

## Development Roadmap :nut_and_bolt:

- Milestone 1. Back-End
- Milestone 2. Front-End

### Overview

- **Total Estimated Duration:** 5 months
- **Full-Time Equivalent (FTE):**  6 FTE
- **Total Costs:** 96 500 USD

### Milestone 1 - Back-End — stated.tech - Preferendum Pallet - 40k

- **Estimated Duration:** 3 month
- **FTE:**  2
- **Costs:** 40,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | MIT |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can create a preferundum, edit one, add possibility, vote, participate in the proposal |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish some **articles** that explains the philosophy, the interest and the roadmap |
| 0f. | Research on architecture, pallet integrations, storage, preferendums, voting systems, UX | done |
| 1. | Substrate module: Proposal | Our proposal making process is fully Org-agnostic: Multisigs, proxy-based organizations or any single address are welcome to create preferendums. Whenever there is a join, we will add the address account to the proposal. |
| 2. | Substrate module: Quorum | We're building a custom quorum specifically designed for Preferendums. This quorum is a hybrid between an "optimistic" and "pessimistic" quorum that enables to take decisions in a way that suits each phase of the proposal process. the first phase uses an optimistic quorum that only takes into account vetoes, while the second phase which is the voting phase, uses a pessimistic quorum. Quorums are needed to decide when to vote or when to end a phase. There will be function where you can modify the maximum number of people that can join the team, and modify it over time. |
| 3. | Substrate module: Preferundum | The pallet preferundum will host functions described in Milestone 2. It will be linking the hashmaps to IPFS and store them on the blockchain. Vetoes and joins are managed by the Quorum module (optimistic). |
| 4. | Substrate module: Vote | For the logic of the vote, we will allow for a more democratic voting by giving each member of the proposal the same voting power. Using the **range-normalization** method, voters will decide percentages of their will to support this different alternatives. Voting is started and stopped according to quorum module (pessimistic).|
| 5. | Test module (with mock file) | For each module, we will provide a strong test file that will ensure the safety and the good logic of the preferendum.|
| 6. | Runtime Upgrades | We will deploy our Pallet on Kabocha as a DotSama-native Experimental Playground Parachain. We're confident that our pallet will contribute to the development of several other parachains where we will implement preferendums over time and experience. Our aim is to end developing a version for Statemine and propose it on OpenGov.|

### Milestone 2 - stated.tech x Polkassembly - Front-End - 56.5k

- **Estimated duration:** 2 month
- **FTE:**  4
- **Costs:** 56,500 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can create a preferundum, join a team, edit and update a proposal, send to vote |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1. | Prototype | Wireframes and prototyping will be done on Figma. |
| 2. | Module: Root.js // React app | This repo will be treating our front-end for preferendums using React framework. Create a preferendum, join a team, add subjects and alternatives, and vote. From this website, you can first create your preferundum. Whenever someone new wants to participate, quorum is requested to accept their request (or not), which will give them the right to enter the channel, participate, and vote in the preferendum. Root will store the information of each preferundum on IPFS (question of the preferundum, subjects and their alternatives). Then will put the hash on-chain through the pallet preferundum. Through this UI, you can **join** (if the team is not full), you will tokengate your wallet which allows you to join the channel and the team. You can also access a  **list** of all active and passed/rejected preferundums. Root will get back the hash of all preferendums, and get back the text of IPFS and then display it to the interface. You can also create an alternative (subproposal) by adding a new possibility, or cancel your publications. Root will store them on IFPS, add their hashmap on chain and then them it in the UI. |

## Future Plans

Once we've deployed preferendums for small and mid-size teams, we're planning to use Root pallets to enhance treasury mechanisms and develop our logic on several parachains as a standardized governance process. We would most likely use parathreads to deploy our logic seemlessly while remaining a **common good experiment**.

As a Network Public, Root's goal is to become a sovereign network focused on delivering Public Services related to governance and acting as a laboratory for the DotSama ecosystem. We're thus planning to develop several types of preferendums and treasury mechanisms to act as a GaaS network (Governance as a Service).

We're also planning to develop Root as a part of a broader ecosystem of publishing platforms inspired by the RMRK's architecture based on text NFTs called **Plume** to enhance user experience and identity, as well as a publishing data ownership mechanisms.

This roadmap is explained further on our [notion](http://www.stated.tech/).

## Referral Program (optional) :moneybag: 

You can find more information about the program [here](../README.md#moneybag-referral-program).
- **Referrer:** Name of the Polkadot Ambassador or GitHub account of the Web3 Foundation grantee
- **Payment Address:** BTC, Ethereum (USDT/USDC/DAI) or Polkadot/Kusama (aUSD) payment address. Please also specify the currency. (e.g. 0x8920... (DAI))

## Additional Information :heavy_plus_sign:

The project has been discussed in the Polkadot Forum [posts](https://forum.polkadot.network/t/a-better-treasury-system/291/18) and within the [Edgeware](https://gov.edgewa.re/discussion/7887-proposal-root-the-evolution-of-onchain-governance) community. 

**How did you hear about the Grants Program?** 

All Decent Partners, Polkassembly and Stated.Tech are an active part of the Substrate ecosystem.




