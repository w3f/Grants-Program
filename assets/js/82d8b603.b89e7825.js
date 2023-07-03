"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[96022],{1767:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var a=n(87462),l=(n(67294),n(3905));n(8209);const r={},i="Anti-Collusion Infrastructure",o={unversionedId:"docs/RFPs/Open/anti-collusion_infrastructure",id:"docs/RFPs/Open/anti-collusion_infrastructure",title:"Anti-Collusion Infrastructure",description:"Status:* Open",source:"@site/docs/RFPs/Open/anti-collusion_infrastructure.md",sourceDirName:"docs/RFPs/Open",slug:"/docs/RFPs/Open/anti-collusion_infrastructure",permalink:"/docs/RFPs/Open/anti-collusion_infrastructure",draft:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/docs/RFPs/Open/anti-collusion_infrastructure.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Availability and Validity - Network Topology",permalink:"/docs/RFPs/Open/a-and-v-topology"},next:{title:"Formal Guarantees for GRANDPA Finality Gadget",permalink:"/docs/RFPs/Open/formal_guarantees_for_grandpa"}},s={},u=[{value:"Project Description \ud83d\udcc4",id:"project-description-",level:2},{value:"Deliverables \ud83d\udd29",id:"deliverables-",level:2},{value:"Milestone 1 - Anti-collusion",id:"milestone-1---anti-collusion",level:3}],c={toc:u},p="wrapper";function d(t){let{components:e,...n}=t;return(0,l.kt)(p,(0,a.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"anti-collusion-infrastructure"},"Anti-Collusion Infrastructure"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Status:")," Open"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Proposer:")," ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/Noc2"},"Noc2"))),(0,l.kt)("h2",{id:"project-description-"},"Project Description \ud83d\udcc4"),(0,l.kt)("p",null,"A lot of blockchain applications that involve some kind of voting, like on-chain quadratic funding, can potentially be exploited via collusion and bribery (see ",(0,l.kt)("a",{parentName:"p",href:"https://vitalik.ca/general/2019/04/03/collusion.html"},"Vitalik\u2019s post about collusion"),"). Therefore, it\u2019s important to design mechanisms that effectively prevent any kind of on-chain collusion or at least make it more difficult. The goal of this RFP is to encourage people to try to research and come up with their own solutions or to implement existing solutions, like ",(0,l.kt)("a",{parentName:"p",href:"https://ethresear.ch/t/minimal-anti-collusion-infrastructure/5413"},"Minimal anti-collusion infrastructure")," as a substrate pallet or ink! smart contract.  "),(0,l.kt)("h2",{id:"deliverables-"},"Deliverables \ud83d\udd29"),(0,l.kt)("p",null,"The milestones below are just an initial draft. The milestones can be structured completely differently and the implementation can also leverage other tools and infrastructure as long as the overall goal of the RFP is met. "),(0,l.kt)("h3",{id:"milestone-1---anti-collusion"},"Milestone 1 - Anti-collusion"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Number"),(0,l.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,l.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0a."),(0,l.kt)("td",{parentName:"tr",align:null},"License"),(0,l.kt)("td",{parentName:"tr",align:null},"Apache 2.0 / MIT / Unlicense")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0b."),(0,l.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,l.kt)("td",{parentName:"tr",align:null},"Inline documentation of the code and a basic tutorial that explains how a developer can use the project")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0c."),(0,l.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,l.kt)("td",{parentName:"tr",align:null},"The code will have unit-test coverage (min. 70%) to ensure functionality and robustness. In the guide we will describe how to run these tests")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0d."),(0,l.kt)("td",{parentName:"tr",align:null},"Article/Tutorial"),(0,l.kt)("td",{parentName:"tr",align:null},"Article or tutorial that explains the work done as part of the grant.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1."),(0,l.kt)("td",{parentName:"tr",align:null},"Anti-collusion"),(0,l.kt)("td",{parentName:"tr",align:null},"Implement a mechanism to prevent bribery and collusion, leveraging encrypting votes (ZKPs) potentially via ",(0,l.kt)("a",{parentName:"td",href:"https://ethresear.ch/t/minimal-anti-collusion-infrastructure/5413"},"Minimum Anti-Collusion Infrastructure (MACI)"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2."),(0,l.kt)("td",{parentName:"tr",align:null},"Voting Example"),(0,l.kt)("td",{parentName:"tr",align:null},"Integrate a basic voting example that lets you test the mechanism")))))}d.isMDXComponent=!0}}]);