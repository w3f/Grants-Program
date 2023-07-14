# Web3 Open Jurisdiction Stack

- **Team Name:** Jur
- **Payment Address:** ETH Address: 0x17443355290c5775a2B0fD42562DAEF049741A63 (USDC)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 3

## Project Overview :page_facing_up:

### Overview

Since 2017, Web3 has experienced significant growth. However, areas within it remain underdeveloped or nearly so, leading to critical daily challenges. One major issue is the absence of a Web3 jurisdiction, which hampers the ecosystem's growth potential.

Consider the case of the Polkadot Treasury, valued at over $200M. Despite this, if an amount is sent to a recipient and there is poor performance (e.g. under-delivery), there is no recourse available. The community or recipient lacks the means to request a competent neutral third party to assess whether the delivery met the agreed-upon terms.

Community members have provided insightful analyses, for example on Kusama Treasury, highlighting inefficient use of treasuries and poor resource allocation, leading to subpar returns on investment.

To improve the current state of affairs, several components are needed. In our view, some of these components could include:

- An **escrow system**: enabling on-chain management of funds released upon achieving specific milestones.
- A **human oracle**: capable of providing qualitative opinions and assessments for activities requiring human analysis and evaluation (i.e. subjective KPIs). These human oracles could serve as "judges" or "arbitrators," among other roles.

For Web3 to evolve as anticipated, it is crucial to equip treasuries with neutral judgement systems akin to "Web3 Courts" capable of providing reliable qualitative assessments.

This project aims to provide:

- A **data-driven research** on the need for one or multiple dispute resolution systems in treasuries.
- A **technical architecture** for an open jurisdiction stack, which we envision as an open-source system consisting of pallets and smart contracts to be deployed on a Polkadot system chain.
- A **proof of concept** (POC) based on the Substrate framework for one of the pallets that make up this system, showcasing how the actual development roadmap could look like.

### Project Details

The project aims to conduct the first data-driven research on Web3 treasuries, with the goal of collecting measurable data to define and quantify the problem of lacking treasury remedies for disagreements.

A minimum of 20 treasury grants will be analysed and 20 interviews conducted with parachain teams, Web3 foundation and Parity members, and potentially dApp team members. The research findings will be published anonymously along with the collected data, in compliance with GDPR requirements.

Additionally, the project includes developing a technical architecture consisting of pallets and smart contracts for the open jurisdiction stack that we envision taking the form of a system parachain.

As part of the project, a proof of concept (POC) for one of the pallets that should be included in the open jurisdiction stack will also be developed.

The objective of this research and architecture is to create a solution that guarantees its adoption and usefulness. Our future proposals will focus on developing and delivering the stack for community use.

**The problem(s) that you want to investigate, and why these are important.**

Every community striving for scalability must possess a mechanism to effectively address and resolve disagreements. By establishing a framework to handle such conflicts, the system can exhibit resilience and withstand challenges that may arise when people and entities do not agree and may fall apart.

There is a glaring concrete example that highlights the issue of treasury management. When a grant is released by the Web3 Foundation, Polkadot, or Kusama Treasury, there is currently no recourse if the recipient fails to deliver or if there is a disagreement between the issuer and recipient regarding KPIs or Service Level Agreements. This problem is just one of many within the same realm and has raised serious concerns in the community for months (as an example, read this [thread](https://twitter.com/0xgoku_/status/1644260018659655680?s=20)). Despite this, as of today, there is still no solution in place to address these issues.

Having a form of Web3 jurisdiction would instil more [confidence](https://twitter.com/ph_lux/status/1646090060784193543?s=20) in investing that treasury, unlocking its growth potential.

Similarly, the absence of a jurisdictional system today hinders enterprise participation. Enterprises require certainties, or at the very least, a neutral and reliable system to assess the achievement of milestones. Currently, it appears that the risk level associated with participating in grant releases is too high for well-structured organisations with fixed operational costs.

These are just a few examples among many that highlight the necessity for every DAO or related construct to address the issue of a neutral third party capable of resolving disputes. This is an essential evolutionary step for fostering ecosystem growth.

**Research questions/hypothesis.**

We aim to conduct a comprehensive assessment of the jurisdictional requirements prevalent throughout the ecosystem (parachains, dApps, etc.). Specifically, we will analyse how Web3 treasuries can benefit from a dispute resolution system. Below, you will find a more detailed explanation of the questions and research outline.

**The methodology that will be applied.**

The majority of our research efforts will revolve around engaging with key stakeholders from Web3 Foundation, Parity, Polkadot, Kusama communities, and various parachain projects. These engagements will primarily take the form of recorded interviews, allowing us to meticulously document our findings.  
The recorded interviews will produce one or more publicly available reports for anyone in the Web3 space.

By taking this approach, we can ensure that the tech stack addresses the actual needs of ecosystem actors and dynamics, maximising the chances of concrete adoption.

The reason why we think a thorough analysis phase (as per software engineering best practices) is needed in this case is because the impact of the software solution has a real world aspect to it aside from the involvement of several human stakeholders. We strongly advise against going heads down towards development as it is likely to be something of no use if not backed by data collected methodically and actual user interaction.

To give an idea, although the actual questionnaire will be part of the _Milestone 1-1_, the discussion guide will be around questions such as:

- Do you find the process of applying to grants fair and just?
- Do you feel protected in case issues do arise while working on a grant?
- Do you feel there should be a clear process for handling such issues?
- Do you feel comfortable in allocating funds to entities?
- Did it ever happen that you felt the outcome of a relationship with a treasury was unfair?
- Do you think there is a need for a legally binding resolution method?
- How would you currently resolve a disagreement with your counterparty?

Additionally, we will conduct a comprehensive analysis of grants, focusing on their accountability and the value generated. Notably, when subjective Key Performance Indicators (KPIs) are involved, we anticipate encountering a higher frequency of points of friction.

The goal here will be to analyse in detail 20 grants and engage with involved parties to understand how their experience was. The main focus being:

- How would you rate your experience?
- Did you feel you were dependent on your counterparty acting fairly?
- Did you ever consider that your counterparty may not fulfil their obligations (e.g. deliver work or send a payment)?
- How would you have behaved in such a situation?
- Do you think a clear procedure for handling disagreements would have helped?
- Do you think it would be better for such a procedure to have legal value in the real world?

**The data collection and analysis procedures.**

To facilitate data collection and collaboration, treasury data will be documented in a Google spreadsheet. This spreadsheet will predominantly contain publicly available data but will also include anonymized opinions from stakeholders regarding the effectiveness of specific grants.

Throughout the discussion guide we aim to leverage NPS and similar metrics to be able to extract readable graphs that can inform the subsequent development of the stack and also to be publicly available references for the community of the work done.

**The expected results and how they would be double-checked by the grants team (reproducibility of the data analysis).**

While we anticipate observing a higher level of dissatisfaction in grants that involve subjective KPIs, we will be judicious in selecting relevant interviewees, adhering to the principle of diminishing returns. Ensuring compliance with legal and ethical standards, we will consider utilising a variation of the Net Promoter Score (NPS) to gauge dissatisfaction with the outcomes.

The grants team will have access to all recorded interviews, discussion guides, reports for each interview, spreadsheet with key metrics and graphs that plot the most significant data points from the research (e.g. is a jurisdiction needed? Does it need to be legally binding?)

**Relevant related work.**

The majority of our team members have been integral members of Jur since its inception, and their expertise and experience are crucial to the success of this project. Here are some noteworthy milestones that align with the scope of our research:

- We were awarded and successfully completed a public tender by the Ministry of Justice (MoJ) through the LawtechUK initiative, where we served as the delivery partner for a feasibility study on the SME Dispute Resolution Platform. This collaboration involved researchers from Oxford University and Oxford Computer Consultants;


- We developed and launched the Open Layer platform, which represents a pioneering game theory-based Online Dispute Resolution (ODR) system tailored for micro-claims;


- Another significant achievement was the release of the Open Justice Platform, a comprehensive solution that digitises the UNCITRAL Model Law, offering an end-to-end framework for dispute resolution processes;


- We have actively organised academic workshops and conducted research on topics such as jurisdiction, smart legal contracts, and ODR in collaboration with esteemed universities worldwide, including Radboud University, IE University, and Hull University;


- Our collaborations and training activities extend to reputable arbitration institutions, such as the MCIA (Mumbai Center of International Arbitration);


- We have had the privilege of interacting with numerous international arbitrators and judges across the globe, establishing valuable connections and fostering knowledge exchange;
- We have participated in the Oxford University Deep Tech Dispute Resolution Lab;
- We have engaged in collaborative efforts with the United Kingdom Jurisdiction Taskforce (UKJT) to develop digital dispute resolution rules;


- We have participated in the leading legal tech acceleration program MDR Lab. This experience has allowed us to specifically focus on the area of digital arbitration.

These milestones exemplify our team's extensive involvement in the field, demonstrating our deep commitment to advancing the realms of jurisdiction, ODR, and legal technology.

**Intended venue for results publication and the timeline for publication.**

**What your project is not or will not provide or implement**

This research project is focused on conducting comprehensive investigations in the technical needs of the ecosystem, and as such, it will not involve a complete implementation of the open jurisdiction stack itself.

The ultimate deliverable of this project will be a go/no-go decision regarding the jurisdictional requirements within the ecosystem. It will provide valuable insights and recommendations based on the findings, enabling stakeholders to make informed decisions regarding the implementation of a jurisdiction framework.

We also aim to release at least one open source component of the stack to engage and share with the community around how the development of the jurisdiction stack could look like. This endeavour will be done also in case of “no-go” outcome from the research. Sentiment and needs towards a jurisdiction may change in the future and we think it would be wise at least to leave a tangible outcome from this endeavour from where anyone can resume.

**This is a place for you to manage expectations and clarify any limitations that might not be obvious**

To envision and establish an open jurisdiction is a demanding undertaking that necessitates iterative processes and real-world usage, much like the evolution of legal systems within tribes, communities, and modern nation-states.

We recognize that the actual development of such a jurisdiction, considering the unique nuances of web3, will require multiple grants and a collaborative effort from the community. As part of our research, we aim to outline a possible architecture that the community can strive towards, shedding light on the key components and design considerations necessary for its realisation.

We will push the bar by releasing at least one example pallet (or SC) on how one component of the jurisdiction stack could be implemented. In this way, in the future, anyone could leverage the research, architecture and POC to develop a production ready software.

We also would like to clarify that this activity does not directly involve anything specific to the Jur project where most of our team is involved. Jur is a L1 solochain that powers the creation of societies and Network States. There is an overlap between the two and this is why our expertise is relevant but the goal of this project is to build an open source stack that can serve the entire ecosystem (including Jur). Given its goal it is highly likely that the research will suggest the stack to take the shape of a system parachain that in no way is related to Jur directly.

Disclaimer: Jur has built an arbitration platform, the “Open Justice Platform”, that supports legally binding resolutions in 160+ jurisdictions. This platform could be one of the resolution methods available in the stack, alongside all the others that the community will see fit. In no way, this will be the suggested or required solution. It will be on the parties involved to choose the best resolution methods for their needs.

### Ecosystem Fit


**Help us locate your project in the Polkadot/Substrate/Kusama landscape and what problems it tries to solve by answering each of these questions:**

**Where and how does your project fit into the ecosystem?**

Having actively participated in the Dotsama ecosystem over the past year and engaging with numerous stakeholders, we have gained valuable insights into the needs inherent to the ecosystem.

Through our extensive involvement in the field of jurisdiction and dispute resolution, we have recognized that many of these challenges can be effectively addressed with the implementation of a suitable framework.

We firmly believe that our team is uniquely positioned to tackle this complex problem. The combination of technical and legal expertise within our team is rare and difficult to replicate. Acquiring this skill set would prove exceptionally challenging and costly, as it necessitates a minimum of five years of specialised experience in blockchain networks and familiarity with multiple jurisdictions.

**Who is your target audience (parachain/dapp/wallet/UI developers, designers, your own user base, some dapp's userbase, yourself)?**

In our current research phase, our primary focus lies on the treasuries of relevant foundations and parachains’ within the ecosystem. However, we recognize the potential for this research to expand into a comprehensive examination that encompasses dApps, their use cases, and end-users. Such an undertaking, though, would necessitate significant additional effort and resources.

**What need(s) does your project meet?**

This project addresses the need for Web3 protocols to have proper systems in place for allocating funds through grants. Currently, there are evident problems in Dotsama, as discussed in various community threads.

The proposed project will serve as a crucial component in addressing these needs by establishing efficient, reliable, and effective treasury expenditures in Dotsama.

**Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?**

**If so, how is your project different?**

**If not, are there similar projects in related ecosystems?**

We firmly believe that this problem has not been adequately addressed thus far. While a few dApps within the Ethereum ecosystem have implemented Online Dispute Resolution (ODR) mechanisms, their focus primarily lies in driving adoption and value accrual to their respective ecosystem tokens. However, none of them have aimed to create an open multi-chain jurisdiction that can be utilised across different networks.

In conclusion, to the best of our knowledge, no other research project currently exists that covers the same topics and addresses the specific objectives we aim to achieve with this research.

## Team :busts_in_silhouette:

### Team members

_Team Leader_

- Luca Yesupatham Daniel, B.Sc.

_Team Members_

- Alessio Treglia, B.Eng.
- Pankaj Chaudhary, B.Tech. 
- Dr. Alessandro Palombo
- Raffaele Battaglini, LL.M.
- Luigi Cantisani, LL.M.
- Will Sauer

### Contact

Contact Name: Luca Yesupatham Daniel

Contact Email: luca@jur.io

Website: www.jur.io

### Legal Structure

Registered Address: Dammstrasse 16, Zug 6300, Switzerland

Registered Legal Entity: Jur AG

### Team's experience

- Luca Yesupatham Daniel, B.Sc.

  - Founder of Aguadulce, award winning development studio featured on Wired. He brings a decade of experience in legaltech specifically in architectures that involve a distributed ledger. Luca advised from a technical standpoint the Blockchain India association before it was absorbed in an official public body. Luca’s expertise is mostly on computer science foundations, optimization and algorithmic models and ODR (online dispute resolution).

- Alessio Treglia, B.Eng.

  - As the CTO of Jur, he joined the project to lead the development team in building the future of governance. Previously, he served as the CTO at Ignite (formerly Tendermint), where he played a key role in developing Cosmos, a protocol with a market value exceeding $3 billion. Before that, Alessio held the position of Vice President of Global Markets Operations Technology at Bank of America Merrill Lynch in London.

- Pankaj Chaudhary, B.Tech.

  - Blockchain Engineer with a strong focus on Web3 technologies, specialised in the Polkadot network. Pankaj has extensive experience in building and deploying custom parachains, designing smart contract solutions, and utilising the Substrate framework and Rust programming language.

- Dr. Alessandro Palombo

  - Jur Founder, in Web3 since 2017, actively involved in the relationship with FINMA for obtaining a non-action letter. Prior to his transition into entrepreneurship, Alessandro became admitted to practice law in Italy, earned a Masters in Global Regulation of Markets (Sapienza and Lateranensis University) and a Ph.D. in Administrative Law (Sapienza University). He also gained direct experience in regulatory matters serving as Scientific Committee Member of San Marino Innovation, supporting the creation of the national legislation for token issuance. He also advised Oxford University’s Deep Tech Dispute Resolution Lab on topics across Web3 and dispute resolution. 

- Raffaele Battaglini, LL.M.

  - Founder of Futura Law Firm S.t.a.r.l. S.B., he acts as legal advisor to Jur since its inception. A lawyer registered with the Turin Bar since 2009, he deals with extraordinary transactions and commercial contracts with a particular focus on the world of start-ups and new technologies. In 2006 he obtained an LL.M. in Innovation, Technology and the Law from the University of Edinburgh. Author and speaker, in Italy and abroad, of books, articles and conferences on technological issues such as blockchain, smart contracts, cryptocurrencies, Initial Coin Offerings, artificial intelligence, legaltech, Industry 4.0, 3D printing. Co-Organiser of Legal Hackers Torino, the first Italian chapter of the global Legal Hackers community. Raffaele is co-editor and co-author of the book “Blockchain and Smart Contracts” published by Giuffrè Francis Lefebvre in 2019 and co-author of “Smart Legal Contracts” published by Giuffrè Francis Lefebvre in 2021 and assisted several projects in regulatory matters across multiple jurisdictions.

- Luigi Cantisani, LL.M.

  - Lawyer at Futura Law Firm S.t.a.r.l. S.B. acting as legal engineer at Jur. A lawyer registered with the Turin Bar since 2019, he mainly deals with national and international contracts and corporate transactions, with a focus on the new technology sector. He carries out legal engineering activities for tech companies for the design of digital platforms and legal tech applications, in particular in the ODR sector. He holds an LL.M. in International Trade Law from the United Nations ITC-ILO campus and a Ph.D. from the University of Warwick. Lecturer at Italian and foreign universities and author of publications on smart contracts, contract law and ODR.

- Will Sauer

  - Will Sauer is a technically-grounded operations leader with a proven track record across the startup and venture ecosystem. Most recently he spent 3 years as a back-end software engineer. Prior to that he ran Finance and Operations at a Series A / B startup in San Francisco and worked for several alternative investment funds.

### Team Code Repos

- https://github.com/jurteam

Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine.

- https://github.com/0xlyd
- https://github.com/alessio
- https://github.com/Polkaverse

### Team LinkedIn Profiles (if available)

- **Luca Yesupatham Daniel**: https://www.linkedin.com/in/0xlyd
- **Alessio Treglia**: https://www.linkedin.com/in/alessiotreglia
- **Pankaj Chaudhary**: https://www.linkedin.com/in/thepankajchaudhary
- **Alessandro Palombo**: https://www.linkedin.com/in/alessandropalombo
- **Raffaele Battaglini**: https://www.linkedin.com/in/raffaelebattaglini
- **Luigi Cantisani**: https://www.linkedin.com/in/luigicantisani
- **Will Sauer**: https://www.linkedin.com/in/will-sauer

### Google Scholar Profiles (Or other research indexer profile, ex. Researchgate)

- Alessandro Palombo ([link](https://scholar.google.com/citations?hl=en&user=YcIgha0AAAAJ&view_op=list_works&gmla=AJsN-F6ANDy4-SK-X7zCjxYItoNUDm9Dt70lST9gCqtWYLNSi33467lJlJGmznlhRt3gOnTwGLjs0pyQwTvXoEo0F4rkTnfnLXQin5VF1ebd_H2Wp_lHA1ezY8AxK3_Xy6m5FIXVYbPz))
- Raffaele Battaglini ([link](https://scholar.google.com/citations?user=1wmRm_8AAAAJ&hl=it))

## Development Status :open_book:

In addition to our previous accomplishments, we have proactively initiated conversations with various stakeholders within the ecosystem, including representatives from Parity and Web3 Foundation as well as ecosystems' teams.

## Development Roadmap :nut_and_bolt:

### Overview

- **Estimated Duration:** 4 months
- **FTE:** 3 FTE
- **Costs:** 80,000 USD

The team involved has decided to work on a reduced market rate. If market rates were to be applied for professional or research activities, the cost would be prohibitively high. The team agrees to be paid on completion of each milestone.

### Milestone 1 - Data Collection, Stakeholder Interviews and First Draft

- **Estimated Duration:** 2 months
- **FTE:** 3 FTE
- **Costs:** 30,000 USDC

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a** | **Copyrights and Licenses** | CC0 License |
| **0b** | **Documentation**           | NA |
| **0c** | **Methodology**             | We will provide a brief documentation of the methodology and process used for the research. This includes an explanation on why before proposing an actual scope of development we feel a thorough analysis phase is the better approach as this involves real world needs (e.g. legal enforcement) and it is not a purely technical delivery |
| 1  | **Research**                | We will conduct research on a minimum of 20 past grants and proposals, ecosystem prizes and future initiatives to gather some information around jurisdiction needs of the ecosystem. We think this sample should be enough to make informed decisions and make sure that the future technical delivery is supported by data.We will extract common data points, abstracting away the details, on which we will engage with stakeholders in the subsequent activity |
| 2  | **Interviews**              | We will run a minimum of 20 interviews of about 45 minutes with relevant stakeholders. All the interviews will be following a discussion guide format that aims at understanding the needs that need to be solved by the open jurisdiction stack.Examples of data points we will extract through those interviews are given in the section _The methodology that will be applied._ |
| 3  | **Shared Folder**           | We will share a folder with contents from interviews, aggregation of data points etc. basically anything that will be eventually part of the published paper |

### Milestone 2 - POC, Feedback and Publication

- **Estimated Duration:** 2,5 months
- **FTE:** 3 FTE
- **Costs:** 50,000 USDC


| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a** | **Copyrights and Licenses** | CC0 License |
| **0b** | **Documentation**           | NA |
| **0c** | **Methodology**             | We will provide a brief documentation of the methodology and process used for the researchThis builds up on the previous milestone. |
| **0d** | **Infrastructure**          | A technical document and flowchart of how the open jurisdiction stack could look like, provided that the research gives a “go” in terms of feasibilityThis infrastructure will contain details of pallets, smart contracts and other pieces of software that could be built |
| **0e** | **Articles**                | We will produce three articles around research findings and relevant information to the ecosystem |
| 1 | **POC**                     | We will build a small POC using the Substrate framework to showcase how to take the research findings into actual development of the open jurisdiction stack. The code will be open sourced and documented so that anyone can build on top of this in order to expand the stack. We cannot commit to a specific feature set before seeing the results from _Milestone 1_ but our experience suggests that this may involve a registry that holds on-chain data through a pallet of available Courts in the network (_Court Registry_) |
| 2  | **Paper RFC**               | We will publish a draft of the research to gather comments and questions on our findings |
| 2a | **Paper Review**            | We will absorb in the publication any relevant comment received, offering room for divergent opinions eventually submitted |
| 2b | **Paper Publication**       | We will publish the paper  |
| 3  | **Presentation**            | We will run a minimum of one public presentation |

## Future Plans

According to the outcomes of the research this endeavour could evolve in several ways that are relevant to the community.

- Expanding the research to look in a more granular way into parachains, dApps and end-users and their respective use-cases
- Extending the research to look in depth into a universal Web3 jurisdiction across multiple networks 
- Expanding the technical POC into a complete open jurisdiction stack

## Additional Information :heavy_plus_sign:

**Disclaimers** 

- The research is in no way a substitute for legal advice 
- The research may have a negative or partially negative outcome in terms of feasibility

**How did we know about Web3 Foundation**

We are aware of Web3 Foundation by way of Jur’s participation in the Dotsama ecosystem. We decided to apply because we perceive this activity beneficial to Dotsama first but also to the wider Web3 space.