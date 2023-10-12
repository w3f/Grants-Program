"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[85628],{6959:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>r,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var n=a(87462),i=(a(67294),a(3905));a(8209);const s={},o="Sub-consensus mechanism",l={unversionedId:"docs/RFPs/sub-consensus",id:"docs/RFPs/sub-consensus",title:"Sub-consensus mechanism",description:"This Request for Proposal is currently open, meaning we are actively looking for (additional) teams to apply for it.",source:"@site/docs/RFPs/sub-consensus.md",sourceDirName:"docs/RFPs",slug:"/docs/RFPs/sub-consensus",permalink:"/docs/RFPs/sub-consensus",draft:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/docs/RFPs/sub-consensus.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Front-End for Staking Rewards Collector",permalink:"/docs/RFPs/staking-rewards-collector-front-end"},next:{title:"Uncollateralized Stablecoin Research",permalink:"/docs/RFPs/uncollateralized-stablecoin-research"}},r={},c=[{value:"Project Description \ud83d\udcc4",id:"project-description-",level:2},{value:"Summary",id:"summary",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Deliverables \ud83d\udd29",id:"deliverables-",level:2},{value:"Milestone 1 - Research and technical specification",id:"milestone-1---research-and-technical-specification",level:3},{value:"Milestone 2 - PoC",id:"milestone-2---poc",level:3}],u={toc:c},m="wrapper";function p(e){let{components:t,...a}=e;return(0,i.kt)(m,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"sub-consensus-mechanism"},"Sub-consensus mechanism"),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"This Request for Proposal is currently ",(0,i.kt)("em",{parentName:"p"},"open"),", meaning we are actively looking for (additional) teams to apply for it.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Status:")," Open"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Proposer:")," mmagician, laboon"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Projects you think this work could be useful for:")," All parachains")),(0,i.kt)("h2",{id:"project-description-"},"Project Description \ud83d\udcc4"),(0,i.kt)("h3",{id:"summary"},"Summary"),(0,i.kt)("p",null,"Parachain dApps suffer from long confirmation times due to the time taken for the Relay Chain to issue an on-chain verification of the parachain blocks. This proposal aims at providing an alternative mechanism for providing parachain users with an alternative, probabilistic sub-consensus mechanism."),(0,i.kt)("h3",{id:"project-details"},"Project Details"),(0,i.kt)("p",null,"Currently the time taken from collator producing a block on a parachain, to that block becoming finalised, is prohibitive to some applications deployed on the parachain. What we'd like to introduce is a mechanism for parachain collators to achieve consensus among themselves on the \"best\" block. This mechanism would most likely be realised as an additional runtime module in which all collators can (but don't have to) participate, thus providing a faster way for the users of parachain applications to see quasi-finalised blocks -> note that this sub-consensus on parachains will have no effect on the decision of relay chain validators' votes and can at times diverge from the outcome on the relay chain.\nShould this mechanism be opt-in for collators, they could be incentivised to participate honestly by bonding a small stake, that is later slashed (the stick) in case a relay-chain-finalised-block causes a reorg on the sub-consensus mechanism. Conversely, the carrot would be a small reward paid out by the parachain governance (tied to the decision by that governance to include such a module)"),(0,i.kt)("h2",{id:"deliverables-"},"Deliverables \ud83d\udd29"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 3 months"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Full-time equivalent (FTE):")," 1"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Total Costs:")," 40,000 DAI")),(0,i.kt)("h3",{id:"milestone-1---research-and-technical-specification"},"Milestone 1 - Research and technical specification"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 2 months"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Full-time equivalent (FTE):")," 1"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Total Costs:")," 20,000 DAI")),(0,i.kt)("p",null,"While normally the Grants Program doesn't fund the research phase, in this case a comprehensive write-up should proceed the implementation and should be subject to acceptance."),(0,i.kt)("p",null,"At the end of the milestone, a detailed document should contain, at a minimum, the following parts:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"summary of the current technical implementation and its limitations"),(0,i.kt)("li",{parentName:"ul"},"technical proposal, including full specification of any pallets needed, as well as necessary changes (if any) to upstream substrate/cumulus repositories"),(0,i.kt)("li",{parentName:"ul"},"security analysis of the proposed solution"),(0,i.kt)("li",{parentName:"ul"},"summary of adoption of the proposed solution by a parachain team (either case study or general guidelines)")),(0,i.kt)("h3",{id:"milestone-2---poc"},"Milestone 2 - PoC"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 2 months"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Full-time equivalent (FTE):")," 1"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Total Costs:")," 20,000 DAI")),(0,i.kt)("p",null,"A proof of concept implementation of the proposed solution, or a full-fledged delivery.\nThe scope of this milestone is highly dependant on the proposal submitted in M1."))}p.isMDXComponent=!0}}]);