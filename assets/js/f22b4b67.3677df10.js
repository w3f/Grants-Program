"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[48649],{46556:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(87462),o=(a(67294),a(3905));a(8209);const i={},r="Quadratic Funding Module",l={unversionedId:"applications/quadratic-funding",id:"applications/quadratic-funding",title:"Quadratic Funding Module",description:"This document is referenced in the terms and conditions and therefore needs to contain all the required information. Don't remove any of the mandatory parts presented in bold letters or as headlines! See the Open Grants Program Process on how to submit a proposal.",source:"@site/applications/quadratic-funding.md",sourceDirName:"applications",slug:"/applications/quadratic-funding",permalink:"/applications/quadratic-funding",draft:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/applications/quadratic-funding.md",tags:[],version:"current",frontMatter:{}},s={},p=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-",level:2},{value:"Team name",id:"team-name",level:3},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Update 2: UI Examples",id:"update-2-ui-examples",level:3},{value:"Team LinkedIn Profiles",id:"team-linkedin-profiles",level:3},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 \u2014 Implement Substrate Modules",id:"milestone-1--implement-substrate-modules",level:3},{value:"Milestone 2 \u2014 Web Application (Dapp)",id:"milestone-2--web-application-dapp",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information \u2795",id:"additional-information-",level:2}],u={toc:p},d="wrapper";function c(e){let{components:t,...a}=e;return(0,o.kt)(d,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"quadratic-funding-module"},"Quadratic Funding Module"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This document is referenced in the terms and conditions and therefore needs to contain all the required information. Don't remove any of the mandatory parts presented in bold letters or as headlines! See the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/w3f/Open-Grants-Program/blob/master/README_2.md"},"Open Grants Program Process")," on how to submit a proposal.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This page is also available in ",(0,o.kt)("a",{parentName:"p",href:"./application-template-cn.md"},"Chinese (\u4e2d\u6587)"),".")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Payment Address:")," DAI, 0x69ecE265815B1F0357cc08c6b1C47F3785c3CB46")),(0,o.kt)("h2",{id:"project-overview-"},"Project Overview \ud83d\udcc4"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If this application in response to an RFP then please indicate this on the first line of this section.")),(0,o.kt)("p",null,"This application is to solve the problem proposed in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/w3f/General-Grants-Program/blob/master/rfp-proposal/on-chain-quadratic-funding.md"},"On-chain Quadratic Funding (General-Grants-Program/rfp-proposal/on-chain-quadratic-funding.md)")),(0,o.kt)("h3",{id:"overview"},"Overview"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Please provide the following:"),(0,o.kt)("pre",{parentName:"blockquote"},(0,o.kt)("code",{parentName:"pre"},"* A brief description of the project.\n"))),(0,o.kt)("p",null,"Quadratic Funding is a common short name for ",(0,o.kt)("a",{parentName:"p",href:"https://blogchains.org/wp-content/uploads/sites/4/2019/04/SSRN-id3243656.pdf"},"Constrained Liberal Radicalism algorithm (referred to as CLR in this proposal)")," proposed by Vitalik Buterin 2018, and is a crowdfund matching mechanism for public goods, like open source. The authors of the paper summaries the mathematical idea as below."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},'"Individuals make public goods contributions to projects of value to them. The amount received by the project is (proportional to) the square of the sum of the square roots of contributions received."')),(0,o.kt)("p",null,"The mechanism is a concrete proposal for making grassroots donations something much larger by proportionately matching more towards small donations compared to large ones. It has been efficiently funding projects in the Web3 ecosystem."),(0,o.kt)("p",null,"According to @Noc2 and @Swader in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/gitcoinco/quadratic-funding"},"the RFP"),",\n",(0,o.kt)("em",{parentName:"p"},(0,o.kt)("a",{parentName:"em",href:"https://gitcoin.co/"},"Gitcoin")," is currently using this mechanism to successfully fund and support public goods. However, Gitcoin's solution is centralized. The goal of the RFP is to develop a decentralized solution on top of ",(0,o.kt)("a",{parentName:"em",href:"https://github.com/paritytech/substrate"},"Substrate"),", which can potentially be integrated into Kusama, Polkadot or any other Substrate-based chain as a pallet. The on-chain treasury could potentially sustainably fund the matching pool in the long-run. However, the Web3 Foundation would also be committed to fund a matching pool of the solution for initial test rounds.")),(0,o.kt)("blockquote",null,(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},"An indication of how you will integrate this project into Substrate / Polkadot / Kusama."))),(0,o.kt)("p",null,"We will build a Substrate pallet in Rust."),(0,o.kt)("blockquote",null,(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},"An indication of why your team is interested in creating this project."))),(0,o.kt)("p",null,"I have friends working at Gitcoin since 2018 and I'm a big fan of their work. I am already a Gitcoin user familiar of the CLR mechanism used in their grants, and think it's a great experiment trying to solve many real-world problems. Transparency has always been one of the highlights of blockchain, and by bringing a innovative and sophisticated funding mechanism on-chain will provide great utility to Polkadot ecosystem. The problem is challenging and fun to solve, and related to the DAO concept of my focus, therefore I decide to gear up and tackle the RFP."),(0,o.kt)("h3",{id:"project-details"},"Project Details"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"We expect the teams to already have a solid idea about the project's expected final state.\nTherefore, we ask the teams to submit (where relevant):"),(0,o.kt)("pre",{parentName:"blockquote"},(0,o.kt)("code",{parentName:"pre"},"* Mockups/designs of any UI components\n* API specifications of the core functionality\n* An overview of the technology stack to be used\n* Documentation of core components, protocols, architecture etc. to be deployed\n* PoC/MVP or other relevant prior work or research on the topic\n"))),(0,o.kt)("p",null,"The project is divided into two milestones, substrate module and web application."),(0,o.kt)("p",null,"In the first milestone we will create a substrate module for the core CLR mechanism implementation, which will include struct, event, error code, and API function definitions. Then, we will build a substrate chain to host and demonstrate the module."),(0,o.kt)("p",null,"In the second milestone, we will create a web application interacting with Polkadot.js browser extension to demonstrate the use case of the developed module. The features of the web interface will be similar to today's Gitcoin web UI, however, rather than retrieving the matching donation calculation results from a centralized server, our UI will talk to our substrate chain directly. Upon sending a donating transaction, a user is guaranteed that his/her donation has been recorded in substrate storage and corresponding matching fund will be arranged by the chain."),(0,o.kt)("p",null,"A simple flow of the application is shown using below UML sequence diagram. Note that it only demonstrates the ideal case. Interruptions and error cases are omitted in the diagram."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://lucid.app/lucidchart/b9eb3034-1615-443c-9e8c-948cbfcecaf1/view"},"User flow diagram on Lucid Chart")),(0,o.kt)("p",null,"Diving deep into possible user scenarios, I find they are more complicated than initially thought. For example, we need to code a way to prevent collusion of two projects, one of which could possibly use the matching fund to vote for the other's application in order to get more funds. That said, we will start with the basic logic and address issues occurred on the way."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Update #1")),(0,o.kt)("p",null,"We have completed the initial design of the web app wireframe, so I'm attaching it below. It contains two major pages, the Project Listing page and Project Detail page. The  goals of those pages are to clearly present details of participating projects, as well as the matching amount to individual donation. I personally like the user comments and on-chain transactions elements at the bottom of the second page. Not only does it create a plaza for individual donators to speak out, it also connects the donation activity to those voices, thus creating a strong sense of authenticity."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://lucid.app/lucidchart/b50c73aa-55ac-4037-a43d-6623fc6bf977/view?page=0_0#"},"Web app wireframe on Lucidchart")),(0,o.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Are there any other projects similar to yours? If so, how is your project different?")),(0,o.kt)("p",null,"There are DAO projects such as PolkaDAO being built on Polkadot, providing utility for fund-raising of private companies. However, our focus is different. This project aims to provide an on-chain crowdfunding solution with a matching function. Specifically, it consists of two components, crowdfunding and matching donations."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Crowdfunding"),": Individuals crowdfund donations towards public goods (for example: open source software)."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Matching donations"),": These individual contributions are \u2018matched\u2019 or \u2018topped-off\u2019 by a government, grants program, or private philanthropist.")),(0,o.kt)("p",null,"Besides open-source program grant, the CLR mechanism can be applied to other crowdfunding for public goods, such as government electoral voting and non-profit funding. I have friends running an non-profit organization at Silicon Valley. My goal is to work with her to create the first real-world non-profit fundraising using CLR on Polkadot."),(0,o.kt)("h2",{id:"team-"},"Team \ud83d\udc65"),(0,o.kt)("h3",{id:"team-name"},"Team name"),(0,o.kt)("p",null,"OAK Foundation"),(0,o.kt)("h3",{id:"team-members"},"Team members"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Name of team leader: Chris Li"),(0,o.kt)("li",{parentName:"ul"},"Names of team members: Xingyou Chen, Zhongwei Shi, Kangbin Ge")),(0,o.kt)("h3",{id:"contact"},"Contact"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Contact Name:")," ",(0,o.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/chrisli2046/"},"Chris Li")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Contact Email:")," ",(0,o.kt)("a",{parentName:"li",href:"mailto:chris@oak.tech"},"chris@oak.tech")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Website:")," ",(0,o.kt)("a",{parentName:"li",href:"https://oak.tech"},"https://oak.tech"))),(0,o.kt)("h3",{id:"legal-structure"},"Legal Structure"),(0,o.kt)("p",null,"Individuals"),(0,o.kt)("h3",{id:"teams-experience"},"Team's experience"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Please describe the team's relevant experience. If the project involves development work, then we'd appreciated if you can single out a few interesting code commits made by team members on their past projects. For research-related grants, references to past publications and projects in a related domain are helpful.")),(0,o.kt)("p",null,"I worked at Microsoft for 4 years as a senior protocol (API) engineer before taking the leap into blockchain 2017, and have accumulated great experience with smart contract and application development on Ethereum, EOS, and RSK. Here are my achievements and expertise."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Implemented a prediction market dapp on Ethereum."),(0,o.kt)("li",{parentName:"ul"},"Built games on EOS and ranked the top 10 by DappRadar & DappReview in daily volume for 6 months."),(0,o.kt)("li",{parentName:"ul"},"Assembled an engineer team and built iOS & Android crypto wallets for the past 1.5 years."),(0,o.kt)("li",{parentName:"ul"},"Very familiar with Bitcoin and Ethereum multi-signature, ENS, and Wallet Connect.")),(0,o.kt)("p",null,"My strongest programing languages are C++ & C#, and have been ramping up on Rust since Fall 2020."),(0,o.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/OAK-Foundation/OAK-blockchain"},"https://github.com/OAK-Foundation/OAK-blockchain")," (Blockchain in development)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/OAK-Foundation/OAK-docs"},"https://github.com/OAK-Foundation/OAK-docs")," (Developer documentation)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/OAK-Foundation/quadratic-funding-pallet"},"https://github.com/OAK-Foundation/quadratic-funding-pallet")," (Quadratic Funding pallet)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/OAK-Foundation/quadratic-funding-test"},"https://github.com/OAK-Foundation/quadratic-funding-test")," (E2E Quadratic Funding test cases using Polkadot.js)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/OAK-Foundation/quadratic-funding-webapp"},"https://github.com/OAK-Foundation/quadratic-funding-webapp")," (The web application of Quadratic Funding)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/OAK-Foundation/extension"},"https://github.com/OAK-Foundation/extension")," (Open-source contribution to Polkadot.js extension)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/OAK-Foundation/hackathon-2021-spring"},"https://github.com/OAK-Foundation/hackathon-2021-spring")," (The demo project for Parity hackathon in Shanghai 2021)")),(0,o.kt)("h3",{id:"update-2-ui-examples"},"Update 2: UI Examples"),(0,o.kt)("p",null,"UI demos of the team's previous work, which includes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"rWallet iOS app: production screenshots and example sketch source file"),(0,o.kt)("li",{parentName:"ul"},"RSK website: finalized design image and example sketch source file"),(0,o.kt)("li",{parentName:"ul"},"Forge Labs website: production screenshot\n",(0,o.kt)("a",{parentName:"li",href:"https://drive.google.com/drive/folders/1nZPg4PmWSBxbfHuMyuAlw8UVXSybjTHG?usp=sharing"},"https://drive.google.com/drive/folders/1nZPg4PmWSBxbfHuMyuAlw8UVXSybjTHG?usp=sharing"))),(0,o.kt)("h3",{id:"team-linkedin-profiles"},"Team LinkedIn Profiles"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/chrisli2046/"},"Chris Li")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/xingyou-chen-283056205/"},"Xingyou Chen")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/shi-zhongwei-b06573205/"},"Zhongwei Shi")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/kangbin-ge-08a56b205/"},"Kangbin Ge"))),(0,o.kt)("h2",{id:"development-roadmap-"},"Development Roadmap \ud83d\udd29"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This section should break out the development roadmap into a number of milestones. Since the milestones will appear in the grant contract, it helps to describe the functionality we should expect, plus how we can check that such functionality exists in the product. Whenever milestones are delivered, we refer to the contract to ensure that everything has been delivered as expected.")),(0,o.kt)("h3",{id:"overview-1"},"Overview"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 3 months"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Full-time equivalent (FTE):"),"  4 FTE"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Total Costs:")," 20,000 DAI")),(0,o.kt)("h3",{id:"milestone-1--implement-substrate-modules"},"Milestone 1 \u2014 Implement Substrate Modules"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Estimated Duration:")," 1.5 month"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"FTE:"),"  4"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Costs:")," 20,000 DAI")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Number"),(0,o.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,o.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"0a."),(0,o.kt)("td",{parentName:"tr",align:null},"License"),(0,o.kt)("td",{parentName:"tr",align:null},"Apache 2.0")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"0b."),(0,o.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,o.kt)("td",{parentName:"tr",align:null},"We will provide both inline documentation of the code and a basic tutorial that explains the usage of the API.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"0c."),(0,o.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,o.kt)("td",{parentName:"tr",align:null},"The code will have unit-test coverage (min. 70%) to ensure functionality and robustness. In the guide we will describe how to run these tests")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"0d."),(0,o.kt)("td",{parentName:"tr",align:null},"Tutorial"),(0,o.kt)("td",{parentName:"tr",align:null},"We will write tutorials on Medium that explains the work done as part of the grant.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"1."),(0,o.kt)("td",{parentName:"tr",align:null},"Substrate module: CLR"),(0,o.kt)("td",{parentName:"tr",align:null},"We will create a Substrate module that have below functionalities.",(0,o.kt)("br",null),"1. Project: create, cancel, contribute, withdraw",(0,o.kt)("br",null),"2. Proposal: create, vote, cancel, finalize, appeal",(0,o.kt)("br",null),"3. Functions should be able to interact with Polkadot Identity Module and filter participants based on their identity information.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"2."),(0,o.kt)("td",{parentName:"tr",align:null},"Substrate chain"),(0,o.kt)("td",{parentName:"tr",align:null},"Module CLR of our custom chain will be interacted with above defined functions through API")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"3."),(0,o.kt)("td",{parentName:"tr",align:null},"Docker"),(0,o.kt)("td",{parentName:"tr",align:null},"We will provide a dockerfile to demonstrate the full functionality of our chain")))),(0,o.kt)("h3",{id:"milestone-2--web-application-dapp"},"Milestone 2 \u2014 Web Application (Dapp)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Estimated Duration:")," 1 month"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"FTE:"),"  4"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Costs:")," 0 DAI")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Number"),(0,o.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,o.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"0a."),(0,o.kt)("td",{parentName:"tr",align:null},"License"),(0,o.kt)("td",{parentName:"tr",align:null},"Apache 2.0")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"0b."),(0,o.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,o.kt)("td",{parentName:"tr",align:null},"We will provide both inline documentation of the code and a basic tutorial that explains how a user can interact with the application with Polkadot.js browser extension.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"0c."),(0,o.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,o.kt)("td",{parentName:"tr",align:null},"The code will have unit-test coverage (min. 70%) to ensure functionality and robustness. In the guide we will describe how to run these tests")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"0d."),(0,o.kt)("td",{parentName:"tr",align:null},"Tutorial"),(0,o.kt)("td",{parentName:"tr",align:null},"We will write Medium tutorials that explains the work done as part of the grant.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"1."),(0,o.kt)("td",{parentName:"tr",align:null},"Application Implementation"),(0,o.kt)("td",{parentName:"tr",align:null},"We will incorporate the javascript library from the previous step and build a web application that interacts with our substrate chain. Note that the web is a separate product from polkadot.js.org/apps/#/rpc and will provide user friendly interface without necessary knowledge of API calls.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"2."),(0,o.kt)("td",{parentName:"tr",align:null},"Deployment Instructions"),(0,o.kt)("td",{parentName:"tr",align:null},"We will provide one-line runner for the web application so others could spin up the app easily.")))),(0,o.kt)("h2",{id:"future-plans"},"Future Plans"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Please include the team's long-term plans and intentions.")),(0,o.kt)("p",null,"In my opinion there are tons of things we can keep iterating on, but there are four important areas in terms of future development."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"User Study. We should invite a group of beta users for trial and feedback after launch. According to @semuelle, a few questions should be answered in the study plan. For example,"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"How do we choose subjects? What is the target size?"),(0,o.kt)("li",{parentName:"ul"},"What's the questionnaire for the users in the study?"),(0,o.kt)("li",{parentName:"ul"},"How do we measure and make use of the results?"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Sybil resistance. As development of this mechanism progresses to production, a number of challenges such as collusion and Sybil attack need to be addressed. Vitalik has proposed a method MACI, or ",(0,o.kt)("a",{parentName:"p",href:"https://ethresear.ch/t/minimal-anti-collusion-infrastructure/5413"},"Minimal anti-collusion infrastructure")," and a project ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/w3f/General-Grants-Program/blob/master/grants/speculative/nuclei_governance_os_voting.md"},"Governance OS Voting")," from Polkadot General Grant has been working on a solution. We will try our best to integrate those open source projects in order to fight against collusion.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Generalization of incentive protocol. The CLR mechanism, if proven, is one of many ways to conduct crowd-funding for public goods. Just as Substrate provides a framework for any kind of state transition machine, the donation-matching, or even broadly, incentive part should be generalized to easily adapt to other methods. Although new methods need to be coded into the substrate module, but as it evolves, the module will contain most common used methods for the council to choose from.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Reputation protocol integration. The incentive protocol layer sits on top of and relies on reputation protocol. Although the CLR can work without knowing the reputation of a wallet, a lot more advanced features will require a reputations system. For example, without reputation, the risk of cheating is minimum. Therefore, the incentive protocol needs a lot of heavy-lifting work, such as keeping tracking of the relationship of every wallet pair to prevent fraud. Ideally, there will be a reputation layer on Polkadot for our incentive protocol to build upon.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Fund dispensing. We have this idea to raise money for public goods, however, could we also improve the way we spend the money? With the transparency of blockchain, the delivery of the work is open to public for examination. By connecting the developer to the public directly, the product will dramatically reduce the work required from the traditional middleman and create a fair competition among developers.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Social experiment. The project is only valuable when put into real-world scenarios. It, along with Polkadot, are great exciting social experiments. I believe in beta and later production we will encounter challenges on both technical and philosophical sides. It will be an on-going effort to address those issues, and to improve the product as it's constantly put into test."))),(0,o.kt)("h2",{id:"additional-information-"},"Additional Information \u2795"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Possible additional information to include:"),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},"What work has been done so far?"))),(0,o.kt)("p",null,"We have gone through all tutorials on substrate.dev, played around with the framework and are ready to start."),(0,o.kt)("blockquote",null,(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},"Are there are any teams who have already contributed (financially) to the project?"))),(0,o.kt)("p",null,"None"),(0,o.kt)("blockquote",null,(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},"Have you applied for other grants so far?"))),(0,o.kt)("p",null,"No"))}c.isMDXComponent=!0}}]);