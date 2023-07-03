"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[38229],{99737:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var n=a(87462),i=(a(67294),a(3905));a(8209);const o={},r="Community Health Analytics and Benchmarking",l={unversionedId:"applications/community-health-check",id:"applications/community-health-check",title:"Community Health Analytics and Benchmarking",description:"- Team Name: TogetherCrew",source:"@site/applications/community-health-check.md",sourceDirName:"applications",slug:"/applications/community-health-check",permalink:"/applications/community-health-check",draft:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/applications/community-health-check.md",tags:[],version:"current",frontMatter:{}},s={},m=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-",level:2},{value:"Overview",id:"overview",level:3},{value:"Problem Space",id:"problem-space",level:3},{value:"Problem Solution",id:"problem-solution",level:3},{value:"Rationale",id:"rationale",level:3},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-",level:2},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team Member and their experience",id:"team-member-and-their-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Development Status \ud83d\udcd6",id:"development-status-",level:2},{value:"Conceptual Framework",id:"conceptual-framework",level:3},{value:"Data collection",id:"data-collection",level:3},{value:"Is this safe or legal/ Are you GDPR compliant?",id:"is-this-safe-or-legal-are-you-gdpr-compliant",level:4},{value:"Implementation",id:"implementation",level:3},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 - Defining metrics",id:"milestone-1---defining-metrics",level:3},{value:"Milestone 2 \u2014 Twitter community health dashboard",id:"milestone-2--twitter-community-health-dashboard",level:3},{value:"Future Plans:",id:"future-plans",level:2},{value:"New Metrics and Integrations",id:"new-metrics-and-integrations",level:3},{value:"New analytical methods",id:"new-analytical-methods",level:3},{value:"Additional Information \u2795",id:"additional-information-",level:2}],d={toc:m},h="wrapper";function c(e){let{components:t,...a}=e;return(0,i.kt)(h,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"community-health-analytics-and-benchmarking"},"Community Health Analytics and Benchmarking"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Team Name:")," TogetherCrew"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Payment Address:")," eth:0x6612213880f80b298aB66375789E8Ef15e98604E (USDC)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://github.com/w3f/Grants-Program/tree/master#level_slider-levels"},"Level"),":")," 2")),(0,i.kt)("h2",{id:"project-overview-"},"Project Overview \ud83d\udcc4"),(0,i.kt)("h3",{id:"overview"},"Overview"),(0,i.kt)("p",null,"If Web3 is all about communities, how do we know if we\u2019re heading in the right direction? We can guess or use anecdotal evidence. Or we can use science and analytics to map our paths. "),(0,i.kt)("p",null,"We are proposing a project to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"develop a framework for Community Health with actionable metrics"),(0,i.kt)("li",{parentName:"ul"},"create an open source data collection tool"),(0,i.kt)("li",{parentName:"ul"},"implement the tool in Polkadot and Kusama communities "),(0,i.kt)("li",{parentName:"ul"},"analyse the interactions and perceptions data to validate the framework and provide insights to advance the communities")),(0,i.kt)("p",null,"As communities exists in different places, to get an accurate health score it is necessary to combine data from different platforms. Over the past six months we have developed a community health dashbord for Discord data (private data) and are now integrating public data (Twitter) and on-chain data (governance). "),(0,i.kt)("p",null,"We use a grant-matching approach to fund our project. The completed development work has been funded by Aragon, Polygon, MetaCartel, Aave, and Near."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"An indication of how your project relates to Polkadot / Kusama."),'\nPolkadot is a diverse ecosystem with "',(0,i.kt)("a",{parentName:"p",href:"https://polkadot.network/blog/polkadot-2022-roundup/"},"more than 200 teams"),"\" using Polkadot's technology stack. A lot of development within the ecosystem makes it increasingly difficult for community members to stay on top of everything. The evaluation of the community will provide members and leaders with deep insights into the challenges the community is facing. We compute the community's fragmentation, decentralization, and small world score. In addition, we create custom metrics for engagement and disengagment. "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"An indication of why your team is interested in creating this project")),(0,i.kt)("h3",{id:"problem-space"},"Problem Space"),(0,i.kt)("p",null,"Existing community dashboards provide a first basic level of insights into a community: individual activity. But they often ignore that the building block of a healthy community isn't just posting messages but the interaction between people. Current community dashboards (e.g., Orbit, Commosor, Blazer, Statbot) focus on members\u2019 posting behavior and event or meeting attendance. Community members are treated in isolation, ignoring that humans are social beings and thrive thanks to interactions. From ",(0,i.kt)("a",{parentName:"p",href:"https://www.cs.cmu.edu/~ab/Salon/research/Woolley_et_al_Science_2010-2.pdf"},"team research")," we know that a team's collective intelligence is a primary predictor of performance, and not the individual skills and knowledge team members contribute. One key component of collective intelligence is conversational turn-taking, creating space for other people to talk. "),(0,i.kt)("h3",{id:"problem-solution"},"Problem Solution"),(0,i.kt)("p",null,"We are offering community health checks that are based on the relationships between people and their sense of belonging and ownership in the community. We do this by creating and implementing a science-based community health framework. This framework rests on years of research on communities and social networks."),(0,i.kt)("p",null,"Our community health checks combine objective data (interactions between contributors) and subjective data (contributors perceptions about the community). Interactions between contributors are a vital data point: During interactions, members exchange knowledge, develop ideas, and influence each others perspective. Therefore, a community dashboard that measures interaction patterns, compared to solely activity, acknowledges that contributors do not act in isolation. Measuring perception data through pulse survey (tiny surveys with 3-5 questions) gives community leaders a quick and easily administered insights into how contributors feel."),(0,i.kt)("p",null,"Although our initial focus is community health metrics, the proposed approach sets the foundation for further applications. The combination of SNA and pulse surveys offers unprecedented actionable insights in real-time. Some of the potential applications and insights for the ecosystem are"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Generate baseline metrics for community health / vibes to quantify and better understand the impact a specific event is having on a community and/or sub-groups within the community"),(0,i.kt)("li",{parentName:"ul"},"Identify measurements of decentralization to serve as KPIs or Insights metrics"),(0,i.kt)("li",{parentName:"ul"},"Build funnels to track member onboarding and identify areas for improvement"),(0,i.kt)("li",{parentName:"ul"},"Monitor specific topics like contributor wellbeing, alignment, community experience, etc. in near real-time"),(0,i.kt)("li",{parentName:"ul"},"Attract talent and investment with objective community health metrics instead of proxy metrics like member count or proposal count, or financial metrics such as TVL"),(0,i.kt)("li",{parentName:"ul"},"Help new contributors find context-rich mentors outside of the existing pool of well-known but time-poor candidates")),(0,i.kt)("h3",{id:"rationale"},"Rationale"),(0,i.kt)("p",null,"Social network data and its methodology (Social Network Analysis; SNA) is a structured way to visualize how communications, information, and value creation occur through an organization based on interaction graphs. Although a relatively new decision-making tool for leaders, SNA is gaining popularity over traditional survey tools. SNA has been linked to a wide range of insights, such as improving contributor retention, avoiding member burnout, predicting team performance and community resilience, identifying key contributors, enabling decentralization, and improving coordination."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/5393704/224280603-03e8b7a7-4212-4a46-b957-ef06ebe3de5a.png",alt:"Data points for measuring community health"})),(0,i.kt)("p",null,"Pulse surveys are frequent and automated micro-surveys that provide qualitative and quantitative insights. In traditional organizations, they have been shown to increase employee response rates and employee engagement with related initiatives. They\u2019re also used as a tool for culture design and implementing culture change. Lastly, pulse surveys significantly reduce admin work for community managers and related roles."),(0,i.kt)("p",null,"A challenge with online communities is that they can exist in many different places (platforms). We began with developing and testing our method using Discord. The advantage of Discord compared to other platforms is a clear boundary of who is a member (people who joined), and an organization of interaction into channels and threads. "),(0,i.kt)("p",null,"For this grant proposal, we are going beyond Discord data to consider a community's meeting place with more fluid boundaries: Twitter. The open nature of Twitter, compared to Discord, makes it easier for individuals to follow topics and engage in a conversation. Thus, Twitter can be viewed as the first place individuals get to know about a community. The interaction that is happening in the Twitter community helps people decide if they want to commit more time and energy and join Discord. "),(0,i.kt)("p",null,"The community health check will provide insights into three areas:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Twitter Community Health: The section combines the community's digital footprint (objective interaction data assessing interactions within a community) with members' sense of community (subjective sense of ownership).    "),(0,i.kt)("li",{parentName:"ol"},"Member Insights: The section displays the pulse survey results, measuring members' sense of community. ")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"What your project is ",(0,i.kt)("em",{parentName:"li"},"not")," or will ",(0,i.kt)("em",{parentName:"li"},"not")," provide or implement\nWe will not provide a detailed action plan of how to increase engagement on Twitter. We will provide high-level recommendations based on the resulting metrics. ")),(0,i.kt)("p",null,"At this stage, we do not provide sentiment or keyword analysis at the community or interaction level. We start with a neutral perspective on interaction (two people interacting with each other) and do not consider finer nuances (is the interaction positive or negative)."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"An overview of the technology stack to be used\nOur dashboard is built using a combination of Nextjs (Typescript). Also, we use Python for analytics & ExpressJs for the backend. Data is stored in a MongoDB.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Documentation of core components, protocols, architecture, etc. to be deployed\nInstallation instructions for the first version of our community health checks: ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"data extraction bot: ",(0,i.kt)("a",{parentName:"p",href:"https://www.notion.so/netnigma/Community-Health-bot-Tutorial-94a4b089681f41aeb028e1bffd25aaad"},"https://www.notion.so/netnigma/Community-Health-bot-Tutorial-94a4b089681f41aeb028e1bffd25aaad"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"DIY health checks: ",(0,i.kt)("a",{parentName:"p",href:"https://www.notion.so/netnigma/Getting-started-with-the-Health-Pulse-Onboarding-guide-8545d383ec5d4d70aeb4b2aae22d97d7"},"https://www.notion.so/netnigma/Getting-started-with-the-Health-Pulse-Onboarding-guide-8545d383ec5d4d70aeb4b2aae22d97d7")))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"PoC/MVP or other relevant prior work or research on the topic\nWe published our research framework (",(0,i.kt)("a",{parentName:"li",href:"https://rndao.mirror.xyz/F-SMj6p_jdYvrMMkR1d9Hd6YbEg39qItTKfjo-zkgqM"},"Long version"),"; ",(0,i.kt)("a",{parentName:"li",href:"https://rndao.mirror.xyz/fsCGRlYR5rieDCVPnAnSAGL98wNWJyFbf1T_A2r-_6Y"},"summary"),")")),(0,i.kt)("p",null,"We did a health check for MetaGame, who tweeted it ",(0,i.kt)("a",{parentName:"p",href:"https://twitter.com/MetaFam/status/1603818967528718336"},"here"),"."),(0,i.kt)("p",null,"We are running the community health check on our small team. Our low fidelity ",(0,i.kt)("a",{parentName:"p",href:"https://www.figma.com/proto/jflSBwHW3b5KgohsaYExuN/TogetherCrew?scaling=scale-down-width&page-id=0%3A1&starting-point-node-id=1%3A49&show-proto-sidebar=1&node-id=1%3A49&hide-ui=1"},"dashboard")," is available."),(0,i.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},'Where and how does your project fit into the ecosystem?\nOur project gives the ecosystem information about its health by measuring the interactions (conversations, relationships) between contributors. We consider this a "soft performance indicator", because it doesn\'t measure objective aspects (e.g., performance, dapps launched, bugs fixed) but centers on the humans of the ecosystem. ')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Who is your target audience (parachain/dapp/wallet/UI developers, designers, your own user base, some dapp's userbase, yourself)?\nThe community health check is for community managers and moderators to support them in their work by providing community metrics.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"What need(s) does your project meet?\nOur project provides moderators, leaders, and contributors with a bird's eye view of what is happening inside the ecosystem. ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?\nOur current approach rests on off-chain data. Other community analytics dashboard exists, fetching data from various off-chain data. However, they focus on posting behavior and not on the  interaction between members. Individual posting behavior focuses only on the number of activities of a person, but not how these activities impact others. Our data points are relationships (replies, mentions, emoji reactions). Orbit.love reach metric, conceptually, comes close to our metrics, but technically also rests on individual posting behavior and not interaction data. "))),(0,i.kt)("p",null,"Looking at on-chain community analysis, Chainverse is similar in terms of methodology (network analysis). However, they are currently solely focusing on on-chain data and are adopting a knowledge graph methodology."),(0,i.kt)("p",null,"There is a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/w3f/Grants-Program/blob/master/docs/RFPs/Open/analysis-website-and-data-platform.md"},"RFP for website and on-chain data analysis "),'. The RFP is about creating an "easy-to-use front-end with sharable customized dashboards" and thus broader than our proposal. '),(0,i.kt)("h2",{id:"team-"},"Team \ud83d\udc65"),(0,i.kt)("h3",{id:"contact"},"Contact"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Contact Name:")," Katerina Bohle Carbonell"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Contact Email:")," ",(0,i.kt)("a",{parentName:"li",href:"mailto:katerina@netnigma.com"},"katerina@netnigma.com")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Website:")," ",(0,i.kt)("a",{parentName:"li",href:"http://www.togethercrew.com/"},"http://www.togethercrew.com/"))),(0,i.kt)("h3",{id:"legal-structure"},"Legal Structure"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Registered Address:")," na"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Registered Legal Entity:")," na")),(0,i.kt)("h3",{id:"team-member-and-their-experience"},"Team Member and their experience"),(0,i.kt)("p",null,"We combine deep expertise in Network Science and Organisational Network Mapping, Business Intelligence, DAOs and Community Building."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Team Leads")),(0,i.kt)("p",null,"Katerinabc\nPh.D. in Team Dynamics using Social Network Analysis, Teaching Collaboration, and Organizational Performance at Northwestern University (since 2016).\nCo-organized Learning in Networks sessions at the International Conference of Social Network Analysis (2018 - 2020), and previously advised a people analytics company on social network metrics."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Twitter: twitter.com/katerinabohlec 1"),(0,i.kt)("li",{parentName:"ul"},"Linkedin: linkedin.com/in/katerinab"),(0,i.kt)("li",{parentName:"ul"},"Github: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/katerinabc/"},"https://github.com/katerinabc/"))),(0,i.kt)("p",null,"Danielo\nPreviously, Head of Governance at Aragon, 8 years experience in Organization Design consulting (clients include Google, BCG, Daymler, The UN, and multiple startups), and visiting lecturer at Oxford University."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Twitter: ",(0,i.kt)("a",{parentName:"li",href:"https://twitter.com/_Daniel_Ospina"},"https://twitter.com/_Daniel_Ospina")),(0,i.kt)("li",{parentName:"ul"},"LinkedIn: ",(0,i.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/conductal/"},"https://www.linkedin.com/in/conductal/"))),(0,i.kt)("p",null,"Thegadget.eth\nSoftware Engineer. Previously, Product Manager at Neolyze (Business Intelligence Dashboard for Instagram)."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Github: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/thegadget-eth/"},"https://github.com/thegadget-eth/")),(0,i.kt)("li",{parentName:"ul"},"Twitter: ",(0,i.kt)("a",{parentName:"li",href:"https://twitter.com/mr_gadget22"},"https://twitter.com/mr_gadget22"))),(0,i.kt)("p",null,"Part of our team is also a tech lead (",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mehrdadmms"},"Mehrdad"),"), UX designer (",(0,i.kt)("a",{parentName:"p",href:"https://www.linkedin.com/in/denisabrichtova"},"DenisFox"),"), Front-end developer (",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Zueis"},"Nima"),", Back-End developer (",(0,i.kt)("a",{parentName:"p",href:"https://github.com/magicpalmtree"},"MagicPalm"),"), data analyst (",(0,i.kt)("a",{parentName:"p",href:"https://github.com/TjitsevdM"},"Ene"),"), and operations/business development lead (Ashish)."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Team Advisor")),(0,i.kt)("p",null,"Sam\nPreviously, Head of Technical Research at Aragon. Previously, Lead Developer of the official JavaScript API for the Ethereum blockchain."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Github: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/nivida"},"https://github.com/nivida")," 1"),(0,i.kt)("li",{parentName:"ul"},"Twitter: ",(0,i.kt)("a",{parentName:"li",href:"https://twitter.com/furter_samuel"},"https://twitter.com/furter_samuel"))),(0,i.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,i.kt)("p",null,"All repos with the ",(0,i.kt)("em",{parentName:"p"},"tc")," preface are part of the TogetherCrew project (community health check)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/RnDAO"},"https://github.com/RnDAO"))),(0,i.kt)("h2",{id:"development-status-"},"Development Status \ud83d\udcd6"),(0,i.kt)("p",null,"The project consists of a research part (conceptual framework) and a development part (open source data collection tool). The first phase of the research part has been completed. "),(0,i.kt)("h3",{id:"conceptual-framework"},"Conceptual Framework"),(0,i.kt)("p",null,"We began to work on the community health check in Spring 2022. We have assembled a team including two PhDs in network science and an organisation designer with significant DAO and community building experience to bridge both theory and practice. We\u2019ve reviewed over 50 papers on community, social network analysis, resilience, trust, engagement, and more. We synthesized the findings to define key indicators with high validity and predictive capacity for community health, while also taking a holistic perspective that accounts for member\u2019s wellbeing. "),(0,i.kt)("p",null,"We have published our ",(0,i.kt)("a",{parentName:"p",href:"https://rndao.mirror.xyz/F-SMj6p_jdYvrMMkR1d9Hd6YbEg39qItTKfjo-zkgqM"},"conceptual framework"),". This framework describes the different nested systems within a community and details a number of metrics (",(0,i.kt)("em",{parentName:"p"},"vital signs"),"). It incldues insights from one of our team members on ",(0,i.kt)("a",{parentName:"p",href:"https://network.mirror.xyz/EaRncgRP-8_UzHzlZtu4G8FVxcK-GvgtouYbkEVFrc4"},"network resilience network biomimicky"),"."),(0,i.kt)("h3",{id:"data-collection"},"Data collection"),(0,i.kt)("p",null,"For the ",(0,i.kt)("strong",{parentName:"p"},"data collection tool"),", we\u2019re going beyond traditional surveys by combining interaction data with short, targeted pulse surveys. Interaction data provides us with objective data about what is happening inside the community (social network data). While pulse survey data offers insights into members' beliefs and emotional attachment to the community (pulse surveys). "),(0,i.kt)("p",null,"The data is anonymised and collected in a central repository for this first phase (we\u2019re exploring decentralised hosting) and managed by a team having received ethics training and at risk of losing their credentials should it be misused."),(0,i.kt)("p",null,"Currently, the data pipeline for Discord is ready and functional. We have used Discord's API to fetch the data. In February we did a soft launch of our dashboard which only visualises Discord activity. The charts for displaying our custom-build engaged and disengaged members categories are being implemented in March 2023."),(0,i.kt)("p",null,"At the end of 2022, we have begun conceptual work on how to analyze Twitter and on-chain data. Efforts have remained conceptual as we were focusing on our first data pipeline (Discord)."),(0,i.kt)("p",null,"We have started to build the designs for the pulse survey functinality and will begin user-testing the prototype end of March 2023."),(0,i.kt)("h4",{id:"is-this-safe-or-legal-are-you-gdpr-compliant"},"Is this safe or legal/ Are you GDPR compliant?"),(0,i.kt)("p",null,"Analyzing conversations in private channels (e.g., Discord) is within a grey zone of private and public conversations and a sensitive issue. Servers and channels that are not gated in anyway (token or role) are akin to public conversations as there are no barriers for people to enter and join the conversations. On the other hand, once users need to fulfil certain criterias or pay in order to access a server/channel, the conversation could be perceived as private. This distinction has ethical and legal consequences. "),(0,i.kt)("p",null,"For this reason, we have worked with a legal counsel via LexDAO. As part of this, two lawyers have reviewed the process from fetching data and presenting results to ensure we are within GDPR laws. On Wednesday 22nd February we had a GDPR session for our team and  implemented the lawyers' recommendations."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"anti-virus software to be installed on the personal laptops of the two data scientists who have access to the raw data"),(0,i.kt)("li",{parentName:"ul"},"a data transfer agreement will be signed with the data scientist residing in the US"),(0,i.kt)("li",{parentName:"ul"},"We will prepare a record of processing activities")),(0,i.kt)("p",null,"Once our process from data fetching to analysis will be fully automated, we will"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"create a mock database developers can use for testing data fetching and analysis"),(0,i.kt)("li",{parentName:"ul"},"periodically review who has access to the db and remove unnecessary person")),(0,i.kt)("h3",{id:"implementation"},"Implementation"),(0,i.kt)("p",null,"To date, we have delivered six community health reports (Aragon, MetaGame, Verida, Canabis Genom DAO, LexClinic, Aave), built a ",(0,i.kt)("a",{parentName:"p",href:"https://www.figma.com/proto/whU3PlyPvdoSWdhUYQW7e9/Community-Health?node-id=4428%3A3647&scaling=min-zoom&page-id=3314%3A6028&starting-point-node-id=4428%3A3647&disable-default-keyboard-nav=1&hide-ui=1"},"prototype of our dashboard")," and conducted 12 user interviews. "),(0,i.kt)("p",null,"After our first report, we have adopted a step-wise approach to integrating the network metrics, focusing on providing a clear, concise, jargon-free explanation. In addition, we have included a simulation section in our health reports to showcase what the health metric could be if the interaction pattern changes or if there is a large change in the community size. "),(0,i.kt)("p",null,"While the development of the full dashboard is ongoing, we continue to deliver low fidelity dashboards to interested communities. This lets us interact closely with users, helping us learn more about their problems and shape onboarding material for users. Interested communities get direct access to our team of data scientist who happily investigate follow-up questions. "),(0,i.kt)("p",null,"Early development of this project has been funded by ",(0,i.kt)("a",{parentName:"p",href:"https://forum.aragon.org/t/real-time-community-health-analytics"},"Aragon"),", Polygon DAO, ",(0,i.kt)("a",{parentName:"p",href:"https://noturhandle.gitbook.io/rndao/proposals/proposals/grant-proposal-aave"},"Aave"),", ",(0,i.kt)("a",{parentName:"p",href:"https://forum.metacartel.org/t/grant-request-community-health-a-project-by-rndao/2354"},"MetaCartel")," and Near."),(0,i.kt)("h2",{id:"development-roadmap-"},"Development Roadmap \ud83d\udd29"),(0,i.kt)("h3",{id:"overview-1"},"Overview"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Total Estimated Duration:"),"  10 weeks"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Full-Time Equivalent (FTE):"),"  6"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Total Costs:"),"  15 000 USDC")),(0,i.kt)("p",null,"We are following a grant-matching processes to spread the risk among different communities. "),(0,i.kt)("h3",{id:"milestone-1---defining-metrics"},"Milestone 1 - Defining metrics"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Estimated duration:")," 4 weeks"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"FTE:"),"  1"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Costs:")," 5000 USDC")),(0,i.kt)("p",null,"Research social network metrics that are viable to measure the health of a community on Twitter, and how they integrate with our existing community health framework. This will build on our existing framework, extending it to metrics that have been tested and used in Twitter communities. For example, we will look into approaches to build the network, virality and clustering/fragmentation of very large online communities. "),(0,i.kt)("p",null,"Note: We have done an evaluation to decide wheter Reddit or Twitter would be a better option. In the discussion we had with other communities, we were more often asked about an integration with Twitter than with Reddit. Hence, from a scaling perspective, we decided that focusing first on Twitter makes more sense with us."),(0,i.kt)("p",null,"That being said, we realize that Twitter is undergoing a lot of changes, and we might have to do a last minute pivot to another platform. We are building our analytical scripts in such a way that they can easily be used for other platforms. Therefore, the only thing that has to be changed in the milestones is the name of the platform. "),(0,i.kt)("p",null,"Milestone 1 will be focused on research. Hence, we're not going to deliver the following usually mandatory deliverables:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Documentation"),(0,i.kt)("li",{parentName:"ul"},"Testing and Testing Guide"),(0,i.kt)("li",{parentName:"ul"},"Docker")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,i.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,i.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0a."),(0,i.kt)("td",{parentName:"tr",align:null},"License"),(0,i.kt)("td",{parentName:"tr",align:null},"The results will be published open-access using an Apache 2.0, GPLv3, or MIT license. We will decide later which one is most suitable for the written document.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0e."),(0,i.kt)("td",{parentName:"tr",align:null},"Article"),(0,i.kt)("td",{parentName:"tr",align:null},"We will publish an article (technical document) describing the metrics, the insights (so-what), and limitations. This article will also explain how the Twitter community is build (e.g., who are nodes, when there is an edge between two people, who is excluded/included and why). We will build a directed network, where nodes are always Twitter users. From a network assembly perspective, we will not differentiate between accounts representing people and those representing communities or organizations. The edges between an user profiles are either a reply, quote, mention, retweets, or likes. Thus, a tie from user A to user B exists if (1) user A replies to user B, user A quotes user B, user A mentions user B, user A retweets user B, or user A likes user B's tweet. At this moment, we will created weighted edges, not making a conceptual difference between the interaction type (reply, quote, mention, retweets and likes).The article will not be behind a paywall. The article will be written for an audience comfortable with data analysis.")))),(0,i.kt)("h3",{id:"milestone-2--twitter-community-health-dashboard"},"Milestone 2 \u2014 Twitter community health dashboard"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Estimated duration:")," 6 weeks"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"FTE:"),"  5"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Costs:")," 10 000 USDC")),(0,i.kt)("p",null,"This milestone implements the work from the previous milestone by building the dashboard. It will be build using the Twitter API v2. This comes with the following rate limits: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"900 tweet lookups/user/15-minute time window"),(0,i.kt)("li",{parentName:"ul"},"900 user timeline lookups/user/15-minute time window\nWhen querying a tweet, we will get information about the number of comments and likes ")),(0,i.kt)("p",null,"Given the rate limit, we will see how users will be able to combine different accounts (e.g., parachains, dApp developers and other teams that build on Substrate) to create a holistic picture of their community. "),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,i.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,i.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0a."),(0,i.kt)("td",{parentName:"tr",align:null},"License"),(0,i.kt)("td",{parentName:"tr",align:null},"Apache 2.0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0b."),(0,i.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,i.kt)("td",{parentName:"tr",align:null},"We will provide a tutorial for users to understand how to run the health checks themselves. Our current version will be updated to include recent development.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0c."),(0,i.kt)("td",{parentName:"tr",align:null},"Testing and Testing Guide"),(0,i.kt)("td",{parentName:"tr",align:null},"Running the data pipeline and analyzing the data will be covered by tests to ensure functionality. We will describe how to run the tests")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0d."),(0,i.kt)("td",{parentName:"tr",align:null},"Docker"),(0,i.kt)("td",{parentName:"tr",align:null},"We will deliver a docker file to tests the functionality.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0e."),(0,i.kt)("td",{parentName:"tr",align:null},"Article"),(0,i.kt)("td",{parentName:"tr",align:null},"In addition to the dashboard, we write a handout. This is a walkthrough of the dashboard, explaining each metric, if the score is good or bad, and a list of recommendations.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"1."),(0,i.kt)("td",{parentName:"tr",align:null},"Twitter data pipeline"),(0,i.kt)("td",{parentName:"tr",align:null},"We will create a data pipeline fetching data from Twitter using their API. The user will enter one or a few twitter handles. The data pipeline is build using Python. We have already a data flow for Discord visible in the following repos: ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/RnDAO/tc-botComm"},"Discord bot"),", ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/RnDAO/tc-dbComm"},"interactions with db"),", and ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/RnDAO/tc-serverComm"},"interactions between front-end and db"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"2."),(0,i.kt)("td",{parentName:"tr",align:null},"Twitter dashboard"),(0,i.kt)("td",{parentName:"tr",align:null},"We will extend our dashboard to include a page with Twitter community health data. The dashboard is build using Typescript. Our current dashbaord, build on Discord data, is available in this ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/RnDAO/tc-uiComm"},"github"),". We will add the Twitter metrics to this dashboard.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"3."),(0,i.kt)("td",{parentName:"tr",align:null},"Workshop/call"),(0,i.kt)("td",{parentName:"tr",align:null},"We will hold a workshop/ call to answer any questions about the dashboard and handout.")))),(0,i.kt)("h2",{id:"future-plans"},"Future Plans:"),(0,i.kt)("p",null,"We have three workstreams for our future: New metrics, new integrations, new analytical methods. "),(0,i.kt)("h3",{id:"new-metrics-and-integrations"},"New Metrics and Integrations"),(0,i.kt)("p",null,"New metrics and new integrations will provide incremental improvements of the dashboard and will largely be driven by scientiic research for new metrics and user research for new integrations. "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"New metrics: Our conceptual framework mentions a number of metrics we have not yet implemented due to their complexity (e.g., small world metrics). We will evaluate the usability of these metrics. "),(0,i.kt)("li",{parentName:"ul"},"Governance analytics: We have begun thinking through governance metrics at the end of 2022 using Snapshot data. We will research the viability of Polkassembly.  ")),(0,i.kt)("h3",{id:"new-analytical-methods"},"New analytical methods"),(0,i.kt)("p",null,"We are currently developing a pulse survey functionality to measure members perception of the commnunity. This provides a subjective insight on community health currently missing in the data.\nWe are looking at text analysis and GPT3 to help community members and moderators gain an overview of important discussions and information. "),(0,i.kt)("h2",{id:"additional-information-"},"Additional Information \u2795"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"How did you hear about the Grants Program?")," Web3 Foundation Website / Medium / Twitter / Element / Announcement by another team / personal recommendation / etc."),(0,i.kt)("p",null,"Here you can also add any additional information that you think is relevant to this application but isn't part of it already, such as:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Early development of this project has been funded by ",(0,i.kt)("a",{parentName:"li",href:"https://forum.aragon.org/t/real-time-community-health-analytics/3472"},"Aragon"),", Polygon DAO, ",(0,i.kt)("a",{parentName:"li",href:"https://noturhandle.gitbook.io/rndao/proposals/proposals/grant-proposal-aave"},"Aave"),", ",(0,i.kt)("a",{parentName:"li",href:"https://forum.metacartel.org/t/grant-request-community-health-a-project-by-rndao/2354"},"MetaCartel")," and Near. Total project costs will be split across multiple participating communities."),(0,i.kt)("li",{parentName:"ul"},"We have delivered a community health check for Aragon, MetaGame, Veridia, Cannabis Genome DAO, and LexClinic. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.binance.com/en/live/video?roomId=2115823"},"Podcast")," about our community health framework with DAOrayki.")))}c.isMDXComponent=!0}}]);