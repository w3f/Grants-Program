"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[4618],{19100:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var n=a(87462),i=(a(67294),a(3905));a(95657);const l={},r="Polkawatch",o={unversionedId:"applications/Polkawatch",id:"applications/Polkawatch",title:"Polkawatch",description:"- Team Name: Valletech AB",source:"@site/applications/Polkawatch.md",sourceDirName:"applications",slug:"/applications/Polkawatch",permalink:"/Grants-Program/applications/Polkawatch",draft:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/applications/Polkawatch.md",tags:[],version:"current",frontMatter:{}},s={},d=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles",id:"team-linkedin-profiles",level:3},{value:"Development Status \ud83d\udcd6",id:"development-status-",level:2},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 \u2014 Data Management Modules",id:"milestone-1--data-management-modules",level:3},{value:"Milestone 2 \u2014 Data Presentation Modules",id:"milestone-2--data-presentation-modules",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information \u2795",id:"additional-information-",level:2}],p={toc:d},u="wrapper";function c(e){let{components:t,...a}=e;return(0,i.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"polkawatch"},"Polkawatch"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Team Name:")," Valletech AB"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Payment Address:"),"  0xA39bD6af74f8c317F45137d2ED7F4e13176d916B (ETH/DAI)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://github.com/w3f/Grants-Program/tree/master#level_slider-levels"},"Level"),":")," 2")),(0,i.kt)("h2",{id:"project-overview-"},"Project Overview \ud83d\udcc4"),(0,i.kt)("p",null,"Polkawatch is an ",(0,i.kt)("a",{parentName:"p",href:"https://medium.com/encode-club/polkadot-hack-finale-prizewinners-and-summary-931627c64d9"},"Encode Hackaton")," Finalist project that received a runner up nomination. See 3 minutes final pitch ",(0,i.kt)("a",{parentName:"p",href:"https://youtu.be/kCL-389m_xI"},"video here"),"."),(0,i.kt)("h3",{id:"overview"},"Overview"),(0,i.kt)("p",null,"Polkawatch tagline is: Polkadot's decentralization is everybody's job. "),(0,i.kt)("p",null,"Polkawatch will provide decentralization analytics about Polkadot. Allow all stake-holders to gain insights about where network activity is taking place (regional, network provider, validator group, nominator segment, etc)."),(0,i.kt)("p",null,"With Decentralization insights the community can act to improve decentralization regardless of their role: Adjust Nomination, Start Validation in new Networks / Geographies, etc."),(0,i.kt)("p",null,"Polkawatch is built on top of Substrate Block Explorers (i.e. SubQuery) adding an extra analytic layer. "),(0,i.kt)("p",null,"Polkawatch crosses chain data with external datasources and traces weak on-chain relations. Initially for Polkadot, Polkawatch could be used for any substrate blockchain."),(0,i.kt)("p",null,"Why Polkawatch? All started by helping a validator of the 1000 validator programme design a strategy to improve its share of network activity/election. We identified centralization as a problem and opportunity. As preliminary data shows more than 50% of activity in just 2 cloud providers and/or nations. Validators with poor network share could be the decentralized answer to this problem."),(0,i.kt)("p",null,'Unavailability Slashing takes place if at least 10% of active validators go offline. There is precedent of swift deplatforming by cloud providers and sudden regulation change by Countries. Nominators need to be aware that supporting "too centralized" validators poses significant more risk than nomating validators in network and countries below the 10% threshold. It also makes our community stronger and more resilient. '),(0,i.kt)("h3",{id:"project-details"},"Project Details"),(0,i.kt)("p",null,"Lucene inverted index is the core technology component of many Analytics Engines, Its capability to parallelize ingestion and query is unprecedented. This project has a clear functional scope but it is also an interesting experiment in term of building an Analytic Engine for a substrate blockchain. "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'The main data structure is a collection of fully "decorated" Reward events/documents. By "decorating" a reward we mean to add to the event everything we know by analyzing the blockchain, and crossing its data with external data sources. The collection of events is then indexed on a Lucece Inverted Index to facilitate its analytics.'),(0,i.kt)("li",{parentName:"ul"},"The following mock-ups, based on unaudited polkawatch prototype data, show the target analytics to provide, distribution of network activity by: ",(0,i.kt)("a",{parentName:"li",href:"https://user-images.githubusercontent.com/412837/148430943-5fd6144d-20b0-4aa8-b52e-0eda8e4c574c.png"},"Geographic and Computing Network"),", ",(0,i.kt)("a",{parentName:"li",href:"https://user-images.githubusercontent.com/412837/148431120-0e29327a-4061-486b-806d-026e225e2676.png"},"Validator Group and Nominator Segment"),", ",(0,i.kt)("a",{parentName:"li",href:"https://user-images.githubusercontent.com/412837/148431103-5f9d9a82-12f3-40f7-8636-d1a1063fdee5.png"},"Tables with broken down data")," and ",(0,i.kt)("a",{parentName:"li",href:"https://user-images.githubusercontent.com/412837/148431094-187faf22-abbe-4ea8-a62a-1d80668f0d81.png"},"generic information about the dataset"),". "),(0,i.kt)("li",{parentName:"ul"},"The following ",(0,i.kt)("a",{parentName:"li",href:"https://user-images.githubusercontent.com/412837/148431128-62606a9a-8323-4abb-aa9a-8bf286a200b0.png"},"Architecture Diagram")," Shows the main Components:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Indexer: Will read and index the blockchain using a Lucene Inverted Index. The main Event to trace is the reward event. Will be decorated with all data that can be deduced from the blockchain crossed with external datasources: Geographic and Networking data."),(0,i.kt)("li",{parentName:"ul"},"Live Query Server: Will provide an API interface to the Indexed data, ready to be consumed by the DAPP and the DPP Publisher."),(0,i.kt)("li",{parentName:"ul"},'Distributed Data Pack Publisher: Will publich to IPFS Polkawatch Queries of general interest, those related to general network status. The Data Pack is presumed immutable for a given last processed block number, and must be "IPFS friendly", i.e. once an Era has been claimed completely its reward data should be inmutable. '),(0,i.kt)("li",{parentName:"ul"},"DAPP: The DAPP will consume mainly the IPFS DPP, although it may also consume Substrate RPC to learn about the Network Status and Objects of User interest (Wallet). It could potentially also request advanced queries to the Live Query Server, although most queries are expected to be ready as a DPP."))),(0,i.kt)("li",{parentName:"ul"},"The API to be provided by the Live Query server each entry point (Query) represents a set of filters and aggregations to apply to lucene queries. This component can be fairly generic, in the sense that each entrypoint can be mapped to a lucene query with the help of a templating engine."),(0,i.kt)("li",{parentName:"ul"},"The technology stack to be used will be Javascript/TrueScript for the Live Query Server and DPP publisher, React+Gatsby for the DAPP, Material UI for the UI components, Gitlab will be used for CI/CD, and IPFS/IPFS Cluster for publishing."),(0,i.kt)("li",{parentName:"ul"},"During the Hackaton Subquery and Elasticsearch were used as base components for the indexer. This choices will be re-visited after reviewing all indexers in the community and also other lucene databases such as Apache Solr. "),(0,i.kt)("li",{parentName:"ul"},"What your project is ",(0,i.kt)("em",{parentName:"li"},"not")," or will ",(0,i.kt)("em",{parentName:"li"},"not")," provide or implement",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"This project will not create a Generic Indexer based on Lucene Inverted Index but rather extend, complement or fork an existing indexer in our community."),(0,i.kt)("li",{parentName:"ul"},"This project will not provide a generic staking dashboard or wallet, but rather focus on the analytics, grand view and support the decision making related to the nomination and validation activities. ")))),(0,i.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,i.kt)("p",null,"Polkawatch will use a blockchain indexer, modify or extend it for a particular analytic use case, based on Lucene inverted index. This project may be of interest to decide if inverted indexes or analytic capabilities should be built into indexers in a more generic way."),(0,i.kt)("p",null,"The Polkadot ecosystem needs effective decentralization and polkawatch can help. The community is already ",(0,i.kt)("a",{parentName:"p",href:"https://kusama.polkassembly.io/post/1163?s=09"},"debating")," about this, and visibility of network activity will enrich the debate."),(0,i.kt)("p",null,"This project sits next to blockchain explorers, but its output will be graphic, analytic instead of detailed transactional."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Similar Projects")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Yieldscan analyzes staking from a yield performance point of view. Polkawatch will focus on decentralization.")),(0,i.kt)("h2",{id:"team-"},"Team \ud83d\udc65"),(0,i.kt)("h3",{id:"team-members"},"Team members"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Rafael del Valle Lopez"),(0,i.kt)("li",{parentName:"ul"},"David Bellhoff")),(0,i.kt)("h3",{id:"contact"},"Contact"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Contact Name:")," Rafael del Valle Lopez"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Contact Email:")," ",(0,i.kt)("a",{parentName:"li",href:"mailto:rvalle@valletech.eu"},"rvalle@valletech.eu")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Website:")," ",(0,i.kt)("a",{parentName:"li",href:"https://valletech.eu"},"https://valletech.eu"))),(0,i.kt)("h3",{id:"legal-structure"},"Legal Structure"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Registered Address:")," Bl\xe5mesv. 26, 186-47 Vallentuna, Sweden"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Registered Legal Entity:")," Valletech AB,  Org. Num: 5590673694")),(0,i.kt)("h3",{id:"teams-experience"},"Team's experience"),(0,i.kt)("p",null,"Rafael have over 20 years experience creating Software Product, Services and Ventures. In the last years has started to contribute to Open Source projects in the Infrastructure field. A significant contribution to Open Nebula was the ",(0,i.kt)("a",{parentName:"p",href:"https://opennebula.io/pyone-python-bindings-for-open-nebula/"},"Python Bindings"),", now part of the official distribution. More recently the ",(0,i.kt)("a",{parentName:"p",href:"https://privaz.io"},"Privaz.io")," project was created with the goal to facilitate the adoption of Private Clouds by small projects."),(0,i.kt)("p",null,"David has a background in Geographic Information Systems and data science. His first Programming languages were Python and R which he used to build a geographic database and to run statistic models for simulations. Later he learned Javascipt and Typescript and has built web applications with different stacks (Postgresql, Django, Mongodb, node.js, React). In 2021 he started learning Rust and completed the Substrate Developer Academy in November. He is also a core contributor to the DEGEN project of Bankless DAO."),(0,i.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://gitlab.com/polkawatch"},"https://gitlab.com/polkawatch"))),(0,i.kt)("h3",{id:"team-linkedin-profiles"},"Team LinkedIn Profiles"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/rvallel/"},"https://www.linkedin.com/in/rvallel/"))),(0,i.kt)("h2",{id:"development-status-"},"Development Status \ud83d\udcd6"),(0,i.kt)("p",null,"A development prototype was created during the encode hackaton, the purpose was mainly to establish viability of Polkawatch and gather community feedback. Multiple strategies where tested/implemented during the 3 week development time in seek of viability."),(0,i.kt)("p",null,'The prototype is a "hack" of a SubQuery project where a Lucene (elastic) index server is introduced. Several data structures are introduced to trace weak event releationships and map with external databases (GeoIP). A minimal dApp to present the data was also introduced and is available at ',(0,i.kt)("a",{parentName:"p",href:"https://polkawatch.app"},"https://polkawatch.app")),(0,i.kt)("p",null,"The current prototype has been useful is gathering feedback from participants about the potential of this project."),(0,i.kt)("h2",{id:"development-roadmap-"},"Development Roadmap \ud83d\udd29"),(0,i.kt)("h3",{id:"overview-1"},"Overview"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 10 weeks"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Full-Time Equivalent (FTE):"),"  2 FTE"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Total Costs:")," 28,500 USD")),(0,i.kt)("h3",{id:"milestone-1--data-management-modules"},"Milestone 1 \u2014 Data Management Modules"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Estimated duration:")," 5 weeks"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"FTE:"),"  2"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Costs:")," 14,250 USD")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,i.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,i.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0a."),(0,i.kt)("td",{parentName:"tr",align:null},"License"),(0,i.kt)("td",{parentName:"tr",align:null},"Apache 2.0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0b."),(0,i.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,i.kt)("td",{parentName:"tr",align:null},"We will provide both ",(0,i.kt)("strong",{parentName:"td"},"inline documentation")," of the code and a basic ",(0,i.kt)("strong",{parentName:"td"},"tutorial")," that explains how a user can (for example) spin up the project deliverables.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0c."),(0,i.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,i.kt)("td",{parentName:"tr",align:null},"Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0d."),(0,i.kt)("td",{parentName:"tr",align:null},"Docker"),(0,i.kt)("td",{parentName:"tr",align:null},"We will provide a Dockerfile(s) / Dockercompose that can be used to test all the functionality delivered with this milestone.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"1."),(0,i.kt)("td",{parentName:"tr",align:null},"Indexer Extension"),(0,i.kt)("td",{parentName:"tr",align:null},'Indexer Node Module/Extension with additional required capabilities: Inverted Index and weak relationship tracing. The relationship "traces" will be available for later user to "trust and verify".')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"2."),(0,i.kt)("td",{parentName:"tr",align:null},"Live Query Server"),(0,i.kt)("td",{parentName:"tr",align:null},"LQS Node Module that provices a programatic interface to the indexer, implemented in Typescript/Javascript. The implementation will be generic and template based, mapping entrypoints to lucene filters and agregations.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"3."),(0,i.kt)("td",{parentName:"tr",align:null},"Gitlab Pipelines"),(0,i.kt)("td",{parentName:"tr",align:null},"Continuous integration deliverables will be created for automated build and test of each module. Continuous delivery will include steps to update docker images of the deliverables.")))),(0,i.kt)("h3",{id:"milestone-2--data-presentation-modules"},"Milestone 2 \u2014 Data Presentation Modules"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Estimated Duration:")," 5 weeks"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"FTE:"),"  2"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Costs:")," 14,250 USD")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,i.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,i.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0a."),(0,i.kt)("td",{parentName:"tr",align:null},"License"),(0,i.kt)("td",{parentName:"tr",align:null},"Apache 2.0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0b."),(0,i.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,i.kt)("td",{parentName:"tr",align:null},"We will provide both ",(0,i.kt)("strong",{parentName:"td"},"inline documentation")," of the code and a basic ",(0,i.kt)("strong",{parentName:"td"},"tutorial")," that explains how a user can (for example) spin up the project deliverables.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0c."),(0,i.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,i.kt)("td",{parentName:"tr",align:null},"Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0d."),(0,i.kt)("td",{parentName:"tr",align:null},"Docker"),(0,i.kt)("td",{parentName:"tr",align:null},"We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0e."),(0,i.kt)("td",{parentName:"tr",align:null},"Article"),(0,i.kt)("td",{parentName:"tr",align:null},"We will publish a blog post about Polkawatch, it will include information about: how to check the effective decentralization of the network, how to check the effective decentralization of a nominator and how to adjust the nomination to better contribute to decentralization of the network. A companion Video tutorial will also be provided.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"1."),(0,i.kt)("td",{parentName:"tr",align:null},"DDP"),(0,i.kt)("td",{parentName:"tr",align:null},"Distributed Data Pack builder node module, implemented in Typescript/Javascript. Will use the LQS to build IPFS friendly data to be consumed by the DAPP.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"2."),(0,i.kt)("td",{parentName:"tr",align:null},"DAPP"),(0,i.kt)("td",{parentName:"tr",align:null},"Distributed Application Node/React module, implemented in Typescript/Javascript. React based DAPP, built with a modern and fresh UI toolkit (such as Material UI or Chackra). Gatsby will be used to efficiently pack the DAPP.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"3."),(0,i.kt)("td",{parentName:"tr",align:null},"Gitlab Pipelines"),(0,i.kt)("td",{parentName:"tr",align:null},"Continuous integration deliverables will be created for automated build and test of each module. Continuous delivery will include steps to update docker images of the deliverables and publish IPFS updates.")))),(0,i.kt)("h2",{id:"future-plans"},"Future Plans"),(0,i.kt)("p",null,"Polkawatch will be used to raise awareness of decentralization of the network in the community."),(0,i.kt)("p",null,"We plan to work with validators to improve their network share in the cases in which they improve the decentralization of the network. "),(0,i.kt)("p",null,"Ideally the data provided by Polkawatch could result in a Validator alliance with a decentralization brand promise such as avoiding crowded geographies or IP networks/cloud providers."),(0,i.kt)("p",null,"We would also like to see decentralization turned into active economic policy. The same way that unavailability is slashed, validating in underrepresented geographies or IP networks could be rewarded. In that sense, we would like Polkawatch to become a tool to assist in policy decision making.  "),(0,i.kt)("h2",{id:"additional-information-"},"Additional Information \u2795"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"How did you hear about the Grants Program?")," We found out in the Web3 Foundation Website."))}c.isMDXComponent=!0}}]);