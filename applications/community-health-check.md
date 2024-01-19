# Community Health Analytics and Benchmarking

- **Team Name:** TogetherCrew
- **Payment Address:** eth:0x6612213880f80b298aB66375789E8Ef15e98604E (USDC)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:



### Overview

If Web3 is all about communities, how do we know if we’re heading in the right direction? We can guess or use anecdotal evidence. Or we can use science and analytics to map our paths. 

We are proposing a project to:

- develop a framework for Community Health with actionable metrics
- create an open source data collection tool
- implement the tool in Polkadot and Kusama communities 
- analyse the interactions and perceptions data to validate the framework and provide insights to advance the communities

As communities exists in different places, to get an accurate health score it is necessary to combine data from different platforms. Over the past six months we have developed a community health dashbord for Discord data (private data) and are now integrating public data (Twitter) and on-chain data (governance). 

We use a grant-matching approach to fund our project. The completed development work has been funded by Aragon, Polygon, MetaCartel, Aave, and Near.


**An indication of how your project relates to Polkadot / Kusama.**
Polkadot is a diverse ecosystem with "[more than 200 teams](https://polkadot.network/blog/polkadot-2022-roundup/)" using Polkadot's technology stack. A lot of development within the ecosystem makes it increasingly difficult for community members to stay on top of everything. The evaluation of the community will provide members and leaders with deep insights into the challenges the community is facing. We compute the community's fragmentation, decentralization, and small world score. In addition, we create custom metrics for engagement and disengagment. 


**An indication of why your team is interested in creating this project**

### Problem Space

Existing community dashboards provide a first basic level of insights into a community: individual activity. But they often ignore that the building block of a healthy community isn't just posting messages but the interaction between people. Current community dashboards (e.g., Orbit, Commosor, Blazer, Statbot) focus on members’ posting behavior and event or meeting attendance. Community members are treated in isolation, ignoring that humans are social beings and thrive thanks to interactions. From [team research](https://www.cs.cmu.edu/~ab/Salon/research/Woolley_et_al_Science_2010-2.pdf) we know that a team's collective intelligence is a primary predictor of performance, and not the individual skills and knowledge team members contribute. One key component of collective intelligence is conversational turn-taking, creating space for other people to talk. 

### Problem Solution
We are offering community health checks that are based on the relationships between people and their sense of belonging and ownership in the community. We do this by creating and implementing a science-based community health framework. This framework rests on years of research on communities and social networks.

Our community health checks combine objective data (interactions between contributors) and subjective data (contributors perceptions about the community). Interactions between contributors are a vital data point: During interactions, members exchange knowledge, develop ideas, and influence each others perspective. Therefore, a community dashboard that measures interaction patterns, compared to solely activity, acknowledges that contributors do not act in isolation. Measuring perception data through pulse survey (tiny surveys with 3-5 questions) gives community leaders a quick and easily administered insights into how contributors feel.

Although our initial focus is community health metrics, the proposed approach sets the foundation for further applications. The combination of SNA and pulse surveys offers unprecedented actionable insights in real-time. Some of the potential applications and insights for the ecosystem are

- Generate baseline metrics for community health / vibes to quantify and better understand the impact a specific event is having on a community and/or sub-groups within the community
- Identify measurements of decentralization to serve as KPIs or Insights metrics
- Build funnels to track member onboarding and identify areas for improvement
- Monitor specific topics like contributor wellbeing, alignment, community experience, etc. in near real-time
- Attract talent and investment with objective community health metrics instead of proxy metrics like member count or proposal count, or financial metrics such as TVL
- Help new contributors find context-rich mentors outside of the existing pool of well-known but time-poor candidates

### Rationale 

Social network data and its methodology (Social Network Analysis; SNA) is a structured way to visualize how communications, information, and value creation occur through an organization based on interaction graphs. Although a relatively new decision-making tool for leaders, SNA is gaining popularity over traditional survey tools. SNA has been linked to a wide range of insights, such as improving contributor retention, avoiding member burnout, predicting team performance and community resilience, identifying key contributors, enabling decentralization, and improving coordination.

![Data points for measuring community health](https://user-images.githubusercontent.com/5393704/224280603-03e8b7a7-4212-4a46-b957-ef06ebe3de5a.png)

Pulse surveys are frequent and automated micro-surveys that provide qualitative and quantitative insights. In traditional organizations, they have been shown to increase employee response rates and employee engagement with related initiatives. They’re also used as a tool for culture design and implementing culture change. Lastly, pulse surveys significantly reduce admin work for community managers and related roles.

A challenge with online communities is that they can exist in many different places (platforms). We began with developing and testing our method using Discord. The advantage of Discord compared to other platforms is a clear boundary of who is a member (people who joined), and an organization of interaction into channels and threads. 

For this grant proposal, we are going beyond Discord data to consider a community's meeting place with more fluid boundaries: Twitter. The open nature of Twitter, compared to Discord, makes it easier for individuals to follow topics and engage in a conversation. Thus, Twitter can be viewed as the first place individuals get to know about a community. The interaction that is happening in the Twitter community helps people decide if they want to commit more time and energy and join Discord. 

The community health check will provide insights into three areas:
1. Twitter Community Health: The section combines the community's digital footprint (objective interaction data assessing interactions within a community) with members' sense of community (subjective sense of ownership).    
2. Member Insights: The section displays the pulse survey results, measuring members' sense of community. 


- What your project is _not_ or will _not_ provide or implement
We will not provide a detailed action plan of how to increase engagement on Twitter. We will provide high-level recommendations based on the resulting metrics. 

At this stage, we do not provide sentiment or keyword analysis at the community or interaction level. We start with a neutral perspective on interaction (two people interacting with each other) and do not consider finer nuances (is the interaction positive or negative).


- An overview of the technology stack to be used
Our dashboard is built using a combination of Nextjs (Typescript). Also, we use Python for analytics & ExpressJs for the backend. Data is stored in a MongoDB.

- Documentation of core components, protocols, architecture, etc. to be deployed
Installation instructions for the first version of our community health checks: 
- data extraction bot: https://www.notion.so/netnigma/Community-Health-bot-Tutorial-94a4b089681f41aeb028e1bffd25aaad
- DIY health checks: https://www.notion.so/netnigma/Getting-started-with-the-Health-Pulse-Onboarding-guide-8545d383ec5d4d70aeb4b2aae22d97d7


- PoC/MVP or other relevant prior work or research on the topic
We published our research framework ([Long version](https://rndao.mirror.xyz/F-SMj6p_jdYvrMMkR1d9Hd6YbEg39qItTKfjo-zkgqM); [summary](https://rndao.mirror.xyz/fsCGRlYR5rieDCVPnAnSAGL98wNWJyFbf1T_A2r-_6Y))

We did a health check for MetaGame, who tweeted it [here](https://twitter.com/MetaFam/status/1603818967528718336).

We are running the community health check on our small team. Our low fidelity [dashboard](https://www.figma.com/proto/jflSBwHW3b5KgohsaYExuN/TogetherCrew?scaling=scale-down-width&page-id=0%3A1&starting-point-node-id=1%3A49&show-proto-sidebar=1&node-id=1%3A49&hide-ui=1) is available.



### Ecosystem Fit

- Where and how does your project fit into the ecosystem?
Our project gives the ecosystem information about its health by measuring the interactions (conversations, relationships) between contributors. We consider this a "soft performance indicator", because it doesn't measure objective aspects (e.g., performance, dapps launched, bugs fixed) but centers on the humans of the ecosystem. 

- Who is your target audience (parachain/dapp/wallet/UI developers, designers, your own user base, some dapp's userbase, yourself)?
The community health check is for community managers and moderators to support them in their work by providing community metrics.

- What need(s) does your project meet?
Our project provides moderators, leaders, and contributors with a bird's eye view of what is happening inside the ecosystem. 

- Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?
Our current approach rests on off-chain data. Other community analytics dashboard exists, fetching data from various off-chain data. However, they focus on posting behavior and not on the  interaction between members. Individual posting behavior focuses only on the number of activities of a person, but not how these activities impact others. Our data points are relationships (replies, mentions, emoji reactions). Orbit.love reach metric, conceptually, comes close to our metrics, but technically also rests on individual posting behavior and not interaction data. 

Looking at on-chain community analysis, Chainverse is similar in terms of methodology (network analysis). However, they are currently solely focusing on on-chain data and are adopting a knowledge graph methodology.

There is a [RFP for website and on-chain data analysis ](https://github.com/w3f/Grants-Program/blob/master/docs/RFPs/analysis-website-and-data-platform.md). The RFP is about creating an "easy-to-use front-end with sharable customized dashboards" and thus broader than our proposal. 


## Team :busts_in_silhouette:



### Contact

- **Contact Name:** Katerina Bohle Carbonell
- **Contact Email:** katerina@netnigma.com
- **Website:** http://www.togethercrew.com/

### Legal Structure

- **Registered Address:** na
- **Registered Legal Entity:** na

### Team Member and their experience

We combine deep expertise in Network Science and Organisational Network Mapping, Business Intelligence, DAOs and Community Building.

**Team Leads**

Katerinabc
Ph.D. in Team Dynamics using Social Network Analysis, Teaching Collaboration, and Organizational Performance at Northwestern University (since 2016).
Co-organized Learning in Networks sessions at the International Conference of Social Network Analysis (2018 - 2020), and previously advised a people analytics company on social network metrics.
- Twitter: twitter.com/katerinabohlec 1
- Linkedin: linkedin.com/in/katerinab
- Github: https://github.com/katerinabc/

Danielo
Previously, Head of Governance at Aragon, 8 years experience in Organization Design consulting (clients include Google, BCG, Daymler, The UN, and multiple startups), and visiting lecturer at Oxford University.
- Twitter: https://twitter.com/_Daniel_Ospina
- LinkedIn: https://www.linkedin.com/in/conductal/

Thegadget.eth
Software Engineer. Previously, Product Manager at Neolyze (Business Intelligence Dashboard for Instagram).
- Github: https://github.com/thegadget-eth/
- Twitter: https://twitter.com/mr_gadget22


Part of our team is also a tech lead ([Mehrdad](https://github.com/mehrdadmms)), UX designer ([DenisFox](https://www.linkedin.com/in/denisabrichtova)), Front-end developer ([Nima](https://github.com/Zueis), Back-End developer ([MagicPalm](https://github.com/magicpalmtree)), data analyst ([Ene](https://github.com/TjitsevdM)), and operations/business development lead (Ashish).


**Team Advisor**

Sam
Previously, Head of Technical Research at Aragon. Previously, Lead Developer of the official JavaScript API for the Ethereum blockchain.
- Github: https://github.com/nivida 1
- Twitter: https://twitter.com/furter_samuel


### Team Code Repos 

All repos with the *tc* preface are part of the TogetherCrew project (community health check)
- https://github.com/RnDAO


## Development Status :open_book:

The project consists of a research part (conceptual framework) and a development part (open source data collection tool). The first phase of the research part has been completed. 

### Conceptual Framework
We began to work on the community health check in Spring 2022. We have assembled a team including two PhDs in network science and an organisation designer with significant DAO and community building experience to bridge both theory and practice. We’ve reviewed over 50 papers on community, social network analysis, resilience, trust, engagement, and more. We synthesized the findings to define key indicators with high validity and predictive capacity for community health, while also taking a holistic perspective that accounts for member’s wellbeing. 

We have published our [conceptual framework](https://rndao.mirror.xyz/F-SMj6p_jdYvrMMkR1d9Hd6YbEg39qItTKfjo-zkgqM). This framework describes the different nested systems within a community and details a number of metrics (*vital signs*). It incldues insights from one of our team members on [network resilience network biomimicky](https://network.mirror.xyz/EaRncgRP-8_UzHzlZtu4G8FVxcK-GvgtouYbkEVFrc4).


### Data collection
For the **data collection tool**, we’re going beyond traditional surveys by combining interaction data with short, targeted pulse surveys. Interaction data provides us with objective data about what is happening inside the community (social network data). While pulse survey data offers insights into members' beliefs and emotional attachment to the community (pulse surveys). 

The data is anonymised and collected in a central repository for this first phase (we’re exploring decentralised hosting) and managed by a team having received ethics training and at risk of losing their credentials should it be misused.

Currently, the data pipeline for Discord is ready and functional. We have used Discord's API to fetch the data. In February we did a soft launch of our dashboard which only visualises Discord activity. The charts for displaying our custom-build engaged and disengaged members categories are being implemented in March 2023.

At the end of 2022, we have begun conceptual work on how to analyze Twitter and on-chain data. Efforts have remained conceptual as we were focusing on our first data pipeline (Discord).

We have started to build the designs for the pulse survey functinality and will begin user-testing the prototype end of March 2023.


#### Is this safe or legal/ Are you GDPR compliant?
Analyzing conversations in private channels (e.g., Discord) is within a grey zone of private and public conversations and a sensitive issue. Servers and channels that are not gated in anyway (token or role) are akin to public conversations as there are no barriers for people to enter and join the conversations. On the other hand, once users need to fulfil certain criterias or pay in order to access a server/channel, the conversation could be perceived as private. This distinction has ethical and legal consequences. 

For this reason, we have worked with a legal counsel via LexDAO. As part of this, two lawyers have reviewed the process from fetching data and presenting results to ensure we are within GDPR laws. On Wednesday 22nd February we had a GDPR session for our team and  implemented the lawyers' recommendations.
- anti-virus software to be installed on the personal laptops of the two data scientists who have access to the raw data
- a data transfer agreement will be signed with the data scientist residing in the US
- We will prepare a record of processing activities

Once our process from data fetching to analysis will be fully automated, we will
- create a mock database developers can use for testing data fetching and analysis
- periodically review who has access to the db and remove unnecessary person


### Implementation 
To date, we have delivered six community health reports (Aragon, MetaGame, Verida, Canabis Genom DAO, LexClinic, Aave), built a [prototype of our dashboard](https://www.figma.com/proto/whU3PlyPvdoSWdhUYQW7e9/Community-Health?node-id=4428%3A3647&scaling=min-zoom&page-id=3314%3A6028&starting-point-node-id=4428%3A3647&disable-default-keyboard-nav=1&hide-ui=1) and conducted 12 user interviews. 

After our first report, we have adopted a step-wise approach to integrating the network metrics, focusing on providing a clear, concise, jargon-free explanation. In addition, we have included a simulation section in our health reports to showcase what the health metric could be if the interaction pattern changes or if there is a large change in the community size. 

While the development of the full dashboard is ongoing, we continue to deliver low fidelity dashboards to interested communities. This lets us interact closely with users, helping us learn more about their problems and shape onboarding material for users. Interested communities get direct access to our team of data scientist who happily investigate follow-up questions. 

Early development of this project has been funded by [Aragon](https://forum.aragon.org/t/real-time-community-health-analytics), Polygon DAO, [Aave](https://noturhandle.gitbook.io/rndao/proposals/proposals/grant-proposal-aave), [MetaCartel](https://forum.metacartel.org/t/grant-request-community-health-a-project-by-rndao/2354) and Near.

## Development Roadmap :nut_and_bolt:


### Overview

- **Total Estimated Duration:**  10 weeks
- **Full-Time Equivalent (FTE):**  6
- **Total Costs:**  15 000 USDC

We are following a grant-matching processes to spread the risk among different communities. 

### Milestone 1 - Defining metrics

- **Estimated duration:** 4 weeks
- **FTE:**  1
- **Costs:** 5000 USDC

Research social network metrics that are viable to measure the health of a community on Twitter, and how they integrate with our existing community health framework. This will build on our existing framework, extending it to metrics that have been tested and used in Twitter communities. For example, we will look into approaches to build the network, virality and clustering/fragmentation of very large online communities. 

Note: We have done an evaluation to decide wheter Reddit or Twitter would be a better option. In the discussion we had with other communities, we were more often asked about an integration with Twitter than with Reddit. Hence, from a scaling perspective, we decided that focusing first on Twitter makes more sense with us.

That being said, we realize that Twitter is undergoing a lot of changes, and we might have to do a last minute pivot to another platform. We are building our analytical scripts in such a way that they can easily be used for other platforms. Therefore, the only thing that has to be changed in the milestones is the name of the platform. 

Milestone 1 will be focused on research. Hence, we're not going to deliver the following usually mandatory deliverables:

- Documentation
- Testing and Testing Guide
- Docker

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | The results will be published open-access using an Apache 2.0, GPLv3, or MIT license. We will decide later which one is most suitable for the written document. |
| 0e. | Article| We will publish an article (technical document) describing the metrics, the insights (so-what), and limitations. This article will also explain how the Twitter community is build (e.g., who are nodes, when there is an edge between two people, who is excluded/included and why). We will build a directed network, where nodes are always Twitter users. From a network assembly perspective, we will not differentiate between accounts representing people and those representing communities or organizations. The edges between an user profiles are either a reply, quote, mention, retweets, or likes. Thus, a tie from user A to user B exists if (1) user A replies to user B, user A quotes user B, user A mentions user B, user A retweets user B, or user A likes user B's tweet. At this moment, we will created weighted edges, not making a conceptual difference between the interaction type (reply, quote, mention, retweets and likes).The article will not be behind a paywall. The article will be written for an audience comfortable with data analysis. |

### Milestone 2 — Twitter community health dashboard

- **Estimated duration:** 6 weeks
- **FTE:**  5
- **Costs:** 10 000 USDC

This milestone implements the work from the previous milestone by building the dashboard. It will be build using the Twitter API v2. This comes with the following rate limits: 
- 900 tweet lookups/user/15-minute time window
- 900 user timeline lookups/user/15-minute time window
When querying a tweet, we will get information about the number of comments and likes 

Given the rate limit, we will see how users will be able to combine different accounts (e.g., parachains, dApp developers and other teams that build on Substrate) to create a holistic picture of their community. 


| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide a tutorial for users to understand how to run the health checks themselves. Our current version will be updated to include recent development.|
| 0c. | Testing and Testing Guide | Running the data pipeline and analyzing the data will be covered by tests to ensure functionality. We will describe how to run the tests|.
| 0d. | Docker | We will deliver a docker file to tests the functionality. |
| 0e. | Article | In addition to the dashboard, we write a handout. This is a walkthrough of the dashboard, explaining each metric, if the score is good or bad, and a list of recommendations.  |
| 1. | Twitter data pipeline | We will create a data pipeline fetching data from Twitter using their API. The user will enter one or a few twitter handles. The data pipeline is build using Python. We have already a data flow for Discord visible in the following repos: [Discord bot](https://github.com/RnDAO/tc-botComm), [interactions with db](https://github.com/RnDAO/tc-dbComm), and [interactions between front-end and db](https://github.com/RnDAO/tc-serverComm). |
| 2. | Twitter dashboard | We will extend our dashboard to include a page with Twitter community health data. The dashboard is build using Typescript. Our current dashbaord, build on Discord data, is available in this [github](https://github.com/RnDAO/tc-uiComm). We will add the Twitter metrics to this dashboard.  |
| 3. | Workshop/call | We will hold a workshop/ call to answer any questions about the dashboard and handout.  |

## Future Plans: 

We have three workstreams for our future: New metrics, new integrations, new analytical methods. 

### New Metrics and Integrations
New metrics and new integrations will provide incremental improvements of the dashboard and will largely be driven by scientiic research for new metrics and user research for new integrations. 
- New metrics: Our conceptual framework mentions a number of metrics we have not yet implemented due to their complexity (e.g., small world metrics). We will evaluate the usability of these metrics. 
- Governance analytics: We have begun thinking through governance metrics at the end of 2022 using Snapshot data. We will research the viability of Polkassembly.  

### New analytical methods
We are currently developing a pulse survey functionality to measure members perception of the commnunity. This provides a subjective insight on community health currently missing in the data. 
We are looking at text analysis and GPT3 to help community members and moderators gain an overview of important discussions and information. 


## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation Website / Medium / Twitter / Element / Announcement by another team / personal recommendation / etc.

Here you can also add any additional information that you think is relevant to this application but isn't part of it already, such as:

- Early development of this project has been funded by [Aragon](https://forum.aragon.org/t/real-time-community-health-analytics/3472), Polygon DAO, [Aave](https://noturhandle.gitbook.io/rndao/proposals/proposals/grant-proposal-aave), [MetaCartel](https://forum.metacartel.org/t/grant-request-community-health-a-project-by-rndao/2354) and Near. Total project costs will be split across multiple participating communities.
- We have delivered a community health check for Aragon, MetaGame, Veridia, Cannabis Genome DAO, and LexClinic. 
- [Podcast](https://www.binance.com/en/live/video?roomId=2115823) about our community health framework with DAOrayki.