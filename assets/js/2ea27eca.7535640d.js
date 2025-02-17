"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[25185],{28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var i=n(96540);const r={},s=i.createContext(r);function a(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(s.Provider,{value:t},e.children)}},94467:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"applications/dot_marketplace-phase2","title":"Dot Marketplace v2","description":"- Status:\xa0Open","source":"@site/applications/dot_marketplace-phase2.md","sourceDirName":"applications","slug":"/applications/dot_marketplace-phase2","permalink":"/applications/dot_marketplace-phase2","draft":false,"unlisted":false,"editUrl":"https://github.com/w3f/Grants-Program/edit/master/applications/dot_marketplace-phase2.md","tags":[],"version":"current","frontMatter":{}}');var r=n(74848),s=n(28453);const a={},o="Dot Marketplace v2",l={},d=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-page_facing_up",level:2},{value:"<strong>Overview</strong>",id:"overview",level:3},{value:"<strong>Project Details</strong>",id:"project-details",level:3},{value:"<strong>Repository Hierarchy</strong>",id:"repository-hierarchy",level:3},{value:"<strong>Ecosystem Fit</strong>",id:"ecosystem-fit",level:3},{value:"<strong>Team\xa0\ud83d\udc65</strong>",id:"team",level:2},{value:"<strong>Team members</strong>",id:"team-members",level:3},{value:"<strong>Contact</strong>",id:"contact",level:3},{value:"<strong>Legal Structure</strong>",id:"legal-structure",level:3},{value:"<strong>Team&#39;s experience</strong>",id:"teams-experience",level:3},{value:"<strong>Team Code Repos</strong>",id:"team-code-repos",level:3},{value:"<strong>Development Status\xa0\ud83d\udcd6</strong>",id:"development-status",level:2},{value:"<strong>Development Roadmap</strong> \ud83d\udd29",id:"development-roadmap-",level:2},{value:"<strong>Milestone 1</strong>",id:"milestone-1",level:3},{value:"<strong>Milestone 2</strong>",id:"milestone-2",level:3},{value:"<strong>Additional Project Details</strong>",id:"additional-project-details",level:3},{value:"<strong>Future Plans</strong>",id:"future-plans",level:3},{value:"Additional Information \u2795",id:"additional-information-heavy_plus_sign",level:2}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"dot-marketplace-v2",children:"Dot Marketplace v2"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Status:"}),"\xa0Open"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Team Name:"}),"\xa0Wow Labz"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Payment Address:"}),"\xa00xF13001401396AA866E8012f31fD939C7E83B8601 (USDT - ERC20)"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Level:"}),"\xa02"]}),"\n"]}),"\n",(0,r.jsxs)(t.h2,{id:"project-overview-page_facing_up",children:["Project Overview ","\ud83d\udcc4"]}),"\n",(0,r.jsx)(t.h3,{id:"overview",children:(0,r.jsx)(t.strong,{children:"Overview"})}),"\n",(0,r.jsx)(t.p,{children:"This is phase 2 of Dot Marketplace, which is a general-purpose decentralized marketplace created as a Substrate pallet."}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Here's a link to the ",(0,r.jsx)(t.a,{href:"https://github.com/w3f/Grants-Program/blob/master/applications/dot_marketplace.md",children:"approved grant proposal for the first phase."})]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Dot Marketplace can be used by any decentralized project to float tasks and invite their community members to execute them for a reward. Its POC was developed during the Polkadot India Buildathon (2021)."}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"It would be directly integrated into Polkadot JS Apps, where such marketplaces could create bounties and tasks that community members could fulfill."}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"The inspiration for Dot Marketplace emerged from our own needs while building Yoda - a protocol that facilitates decentralized app development leveraging open data. Dot Marketplace would be used to create data, services, and app marketplaces on Yoda, which would motivate us to maintain this project in the long run."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"project-details",children:(0,r.jsx)(t.strong,{children:"Project Details"})}),"\n",(0,r.jsxs)(t.p,{children:["The current scope of work involves implementing a ",(0,r.jsx)(t.strong,{children:"decentralized court system"})," to resolve disputes in the marketplace and a ",(0,r.jsx)(t.strong,{children:"chat feature"})," between two users."]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"The court is a functionality that delivers unbiased decisions and is driven by a jury."}),"\n",(0,r.jsx)(t.li,{children:"The jury is the participants already present on the chain"}),"\n",(0,r.jsx)(t.li,{children:"The jury is selected based on some criteria"}),"\n",(0,r.jsx)(t.li,{children:"The potential jurors are collected from the chain based on their past ratings and whether they have the expertise of the task in question"}),"\n",(0,r.jsx)(t.li,{children:"Then the final jurors can nominate themselves to be part of the jury for a specific job after accepting the proposal"}),"\n",(0,r.jsx)(t.li,{children:"All court cases are time-bound and are given 3 days (43,000 slots) in total"}),"\n",(0,r.jsxs)(t.li,{children:["The 3 days are divided into 2 parts:","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Jury acceptance period (14,400 slots/1 day) - This is the period for the potential jurors to accept the jury duty"}),"\n",(0,r.jsx)(t.li,{children:"Voting period (28,800 slots/2 days) - This is the time for the jurors to cast their vote. One juror gets only one vote which can be in favor of the customer or service provider (worker)"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.li,{children:"After concluding, all the jurors who participated in the case get a commission, which is based on the total cost of the entire task."}),"\n",(0,r.jsx)(t.li,{children:"In case of a tie or if no juror votes, the voting is carried out by the super juror, who will cast a vote based on the work submitted."}),"\n",(0,r.jsx)(t.li,{children:"A user can call the court on the unsatisfactory rating provided by either the customer or the worker."}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"The flow of the tasking pallet with decentralized court implementation"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:"https://user-images.githubusercontent.com/58659064/154290137-741e7fb6-5aea-40dc-8b3b-71304e08ba79.svg",alt:"Tasking-Court-Flow4 drawio"})}),"\n",(0,r.jsx)(t.p,{children:"Dot Marketplace is being built as a Substrate pallet. It would include boilerplate code that para-chain teams can customize as per their requirements. We believe this project has the potential to transform community participation, engagement, and governance in decentralized projects."}),"\n",(0,r.jsx)(t.h3,{id:"repository-hierarchy",children:(0,r.jsx)(t.strong,{children:"Repository Hierarchy"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"node\n\u251c\u2500\u2500 build.rs\n\u251c\u2500\u2500 Cargo.toml\n\u2514\u2500\u2500 src\n    \u251c\u2500\u2500 chain_spec.rs\n    \u251c\u2500\u2500 cli.rs\n    \u251c\u2500\u2500 command.rs\n    \u251c\u2500\u2500 lib.rs\n    \u251c\u2500\u2500 main.rs\n    \u251c\u2500\u2500 rpc.rs\n    \u2514\u2500\u2500 service.rs\nscripts\n\u251c\u2500\u2500 docker_run.sh\n\u2514\u2500\u2500 init.sh\npallets\n\u251c\u2500\u2500 pallet-chat\n\u2502\xa0\xa0 \u251c\u2500\u2500 Cargo.toml\n\u2502\xa0\xa0 \u251c\u2500\u2500 README.md\n\u2502\xa0\xa0 \u2514\u2500\u2500 src\n\u2502\xa0\xa0     \u251c\u2500\u2500 benchmarking.rs\n\u2502\xa0\xa0     \u251c\u2500\u2500 lib.rs\n\u2502\xa0\xa0     \u251c\u2500\u2500 mock.rs\n\u2502\xa0\xa0     \u2514\u2500\u2500 tests.rs\n\u251c\u2500\u2500 pallet-court\n\u2502\xa0\xa0 \u251c\u2500\u2500 Cargo.toml\n\u2502\xa0\xa0 \u251c\u2500\u2500 README.md\n\u2502\xa0\xa0 \u2514\u2500\u2500 src\n\u2502\xa0\xa0     \u2514\u2500\u2500 lib.rs\n\u2514\u2500\u2500 pallet-tasking\n    \u251c\u2500\u2500 Cargo.toml\n    \u251c\u2500\u2500 README.md\n    \u2514\u2500\u2500 src\n        \u251c\u2500\u2500 benchmarking.rs\n        \u251c\u2500\u2500 lib.rs\n        \u251c\u2500\u2500 mock.rs\n        \u2514\u2500\u2500 tests.rs\nruntime\n\u251c\u2500\u2500 build.rs\n\u251c\u2500\u2500 Cargo.toml\n\u2514\u2500\u2500 src\n    \u2514\u2500\u2500 lib.rs\n"})}),"\n",(0,r.jsx)(t.p,{children:"The current focus is to enhance the existing Substrate pallet and allied code base to get a basic yet functional marketplace up and running."}),"\n",(0,r.jsx)(t.h3,{id:"ecosystem-fit",children:(0,r.jsx)(t.strong,{children:"Ecosystem Fit"})}),"\n",(0,r.jsx)(t.p,{children:"We believe this work could be helpful for any Polkadot para-chains/ para-threads interested in including a marketplace with an on-chain dispute resolution mechanism."}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Almost all para-chains/ para-threads would find motivation in encouraging their community members to contribute meaningfully to their roadmap. This can be achieved by utilizing a marketplace like Dot Marketplace where technical, marketing or governance-centric tasks can be published as bounties. And community members are invited to bid for and execute them."}),"\n",(0,r.jsx)(t.li,{children:"The on chain court will act as an dispute resolution mechanism between users involved in a task. A set of community members meeting a certain criteria get to be a part of the jury for the dispute and cast votes, based on which a decision is reached."}),"\n",(0,r.jsx)(t.li,{children:"To facilitate easier communication between a customer and a worker, a one-to-one chat feature is created as well."}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"team",children:(0,r.jsx)(t.strong,{children:"Team\xa0\ud83d\udc65"})}),"\n",(0,r.jsx)(t.h3,{id:"team-members",children:(0,r.jsx)(t.strong,{children:"Team members"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://www.linkedin.com/in/startupamit/",children:(0,r.jsx)(t.strong,{children:"Amit Singh"})})," [ Product Manager ]"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://www.linkedin.com/in/roshit/",children:(0,r.jsx)(t.strong,{children:"Roshit Omanakuttan"})})," [ Technical Architect ]"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://www.linkedin.com/in/varunsays/",children:(0,r.jsx)(t.strong,{children:"Varun Gyanchandani"})})," [ Backend Lead ]"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://www.linkedin.com/in/loakesh-indiran-8a2282140",children:(0,r.jsx)(t.strong,{children:"Loakesh Indiran"})})," [ Full Stack Developer ]"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"http://www.linkedin.com/in/tejas-vijay-1430a3190",children:(0,r.jsx)(t.strong,{children:"Tejas Gaware"})})," [ Backend Developer ]"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://www.linkedin.com/in/praneeth-ratnagiri-772a43174/",children:(0,r.jsx)(t.strong,{children:"Praneeth Ratnagiri"})})," [ Backend Developer ]"]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"contact",children:(0,r.jsx)(t.strong,{children:"Contact"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Contact Name:"}),"\xa0Amit Singh"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Contact Email:"}),"\xa0amit (dot) singh (@) wowlabz.com"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Website:"}),"\xa0",(0,r.jsx)(t.a,{href:"https://www.wowlabz.com/",children:"http://www.wowlabz.com"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Project Website:"}),"\xa0Dot marketplace website is under construction"]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"legal-structure",children:(0,r.jsx)(t.strong,{children:"Legal Structure"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Registered Address:"}),"\xa0Wow Labz, 2Gethr Cowork, Tower B, Mantri Commercio, Outer Ring Rd, Bellandur, Bengaluru, Karnataka, India 560103"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Registered Legal Entity:"}),"\xa0Wow Internet Labz Private Limited"]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"teams-experience",children:(0,r.jsx)(t.strong,{children:"Team's experience"})}),"\n",(0,r.jsxs)(t.p,{children:["Dot Marketplace is being built by the team at Wow Labz. Wow Labz is one of India's leading turnkey product development companies. Socialli Protocol has been conceptualized and is being produced by the team at Wow Labz. The team has previously built a decentralized storage protocol called Lake Network -\xa0",(0,r.jsx)(t.a,{href:"https://lakenetwork.io/",children:"https://lakenetwork.io/"}),"\xa0in addition to multiple dApps on Ethereum, Stellar, EOS, and Hyperledger."]}),"\n",(0,r.jsxs)(t.p,{children:["A list of centralized apps published can be found\xa0",(0,r.jsx)(t.a,{href:"https://www.wowlabz.com/work/",children:"here"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"team-code-repos",children:(0,r.jsx)(t.strong,{children:"Team Code Repos"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://github.com/orgs/WowLabz/projects",children:"https://github.com/orgs/WowLabz/projects"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://github.com/WowLabz/tasking_backend",children:"https://github.com/WowLabz/tasking_backend"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://github.com/WowLabz/tasking_frontend",children:"https://github.com/WowLabz/tasking_frontend"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://github.com/WowLabz/yoda_creator_economy_node",children:"https://github.com/WowLabz/yoda_creator_economy_node"})}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"development-status",children:(0,r.jsx)(t.strong,{children:"Development Status\xa0\ud83d\udcd6"})}),"\n",(0,r.jsx)(t.p,{children:"Dot Marketplace POC was conceptualized and developed during the Polkadot India hackathon. The roadmap listed below comprises new features that would help take the POC to a minimum viable product (MVP).  The first stage of the project involved creating user registration and marketplace based on a bidding system."}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Here's a link to the ",(0,r.jsx)(t.a,{href:"https://github.com/w3f/Grants-Program/blob/master/applications/dot_marketplace.md",children:"approved grant proposal for the first phase."})]}),"\n",(0,r.jsx)(t.li,{children:"We are in touch with Marcin and Raul from the Web 3 Grants and Treasuries team, respectively."}),"\n"]}),"\n",(0,r.jsxs)(t.h2,{id:"development-roadmap-",children:[(0,r.jsx)(t.strong,{children:"Development Roadmap"})," \ud83d\udd29"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.strong,{children:"Overview"})})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Total Estimated Duration:"})," 3 Weeks"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Full-Time Equivalent (FTE):"}),"  3.36"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Total Costs:"})," 24,305 USD"]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"milestone-1",children:(0,r.jsx)(t.strong,{children:"Milestone 1"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Estimated duration:"})," 1 week"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"FTE:"}),"  2"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"PTE:"}),"  2"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Costs:"}),"  8,325 USD"]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"The main deliverable for this milestone will be to migrate the existing application to substrate frame v2 and include the chat feature as a pallet for communication between a customer and a service provider to have a one-on-one conversation over the deliverables and timelines. The entire milestone covers the Rust/Substrate code implementation."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Sr no."}),(0,r.jsx)(t.th,{children:"Deliverable"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"0a"}),(0,r.jsx)(t.td,{children:"License"}),(0,r.jsx)(t.td,{children:"Apache 2.0"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"0b"}),(0,r.jsx)(t.td,{children:"Documentation"}),(0,r.jsx)(t.td,{children:"We will provide both inline documentation of the code and a tutorial that explains how a user can use DOT Marketplace and understand the flow of the tasking pallet."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"0c"}),(0,r.jsx)(t.td,{children:"Testing Guide"}),(0,r.jsx)(t.td,{children:"Functions will be covered by unit tests, the documentation will describe how to run these tests. We will also provide scripts to help deploy, run and test the build."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"0d"}),(0,r.jsx)(t.td,{children:"Docker Image"}),(0,r.jsx)(t.td,{children:"The docker image will contain the entire tasking pallet Frame V2 version for anybody to just deploy it on their terminal without cloning the repo explicitly, it will be explained along with the commands for testing and running the image."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"1"}),(0,r.jsxs)(t.td,{children:["Migrate ",(0,r.jsx)(t.a,{href:"https://github.com/WowLabz/tasking_backend/blob/11ff1dfe620016d2943adc7b7a0ba60f2d6413cd/pallets/pallet-tasking/src/lib.rs",children:"Tasking Pallet"})," from FRAME v1 to FRAME v2"]}),(0,r.jsxs)(t.td,{children:["The ",(0,r.jsx)(t.a,{href:"https://github.com/WowLabz/tasking_backend/blob/Phase1_Milestone3/pallets/pallet-tasking/src/lib.rs",children:"existing Tasking Pallet"})," will be migrated to FRAME v2 to account for the new features provided by the framework"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"2"}),(0,r.jsx)(t.td,{children:"Chat Pallet"}),(0,r.jsx)(t.td,{children:"Chat functionality is to be exposed and consumed between the customer and the service provider to ease communication and this will be integrated with the tasking pallet's frame v2 version"})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"milestone-2",children:(0,r.jsx)(t.strong,{children:"Milestone 2"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Estimated duration:"})," 2 weeks"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"FTE:"}),"  2"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"PTE:"}),"  2"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Costs:"}),"  15,900 USD"]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"In continuation to previous work, this milestone involves the creation of an on-chain decentralized court to handle dispute resolution. Being a juror is one of the user incentives that can be achieved thanks to the rating module mentioned in the first phase of dot marketplace. The entire milestone covers the Rust/Substrate code implementation. The court process can be called at any one of the instances mentioned from points 1a to 1c below. The dispute logic is a function which will be called from two extrinsic. The additional dispute function for 1c will cover one case (at the moment- for example, the customer is not closing the task due to some reason. The worker gets the functionality to raise a dispute for this particular case). There can be more cases as such, which can be consumed and utilized for any use case. The functions for jury, which are court summon, dispute resolution time and other helpers, can be configured and managed for each use case."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Sr no."}),(0,r.jsx)(t.th,{children:"Deliverable"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"0a"}),(0,r.jsx)(t.td,{children:"License"}),(0,r.jsx)(t.td,{children:"Apache 2.0"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"0b"}),(0,r.jsx)(t.td,{children:"Documentation"}),(0,r.jsx)(t.td,{children:"We will provide both inline documentation of the code and a tutorial that explains how a user can use DOT Marketplace and understand the flow of the tasking pallet."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"0c"}),(0,r.jsx)(t.td,{children:"Testing Guide"}),(0,r.jsx)(t.td,{children:"Functions will be covered by unit tests, the documentation will describe how to run these tests. We will also provide scripts to help deploy, run and test the build."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"0d"}),(0,r.jsx)(t.td,{children:"Docker Image"}),(0,r.jsx)(t.td,{children:"Docker image of the build will contain the entire code for court and tasking pallet, with all the dependencies to directly run the code"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"1"}),(0,r.jsx)(t.td,{children:"Decentralized Court Module"}),(0,r.jsx)(t.td,{children:"An on-chain decentralized court for dispute resolution within the ecosystem."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"1a"}),(0,r.jsx)(t.td,{children:"Disapprove Task"}),(0,r.jsx)(t.td,{children:"In the case of a customer not being satisfied by the work submitted by the service provider (worker). A set of jurors is formed (court-summon) to resolve the dispute and pass a verdict."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"1b"}),(0,r.jsx)(t.td,{children:"Disapprove Rating"}),(0,r.jsx)(t.td,{children:"The customer or the service provider, once they have received their rating for a particular task and are not satisfied by it."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"1c"}),(0,r.jsx)(t.td,{children:"General Dispute"}),(0,r.jsx)(t.td,{children:"A general dispute function for cases that do not fall under the categories mentioned in 1a and 1b."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"2"}),(0,r.jsx)(t.td,{children:"Jury"}),(0,r.jsx)(t.td,{children:"The chain specification of the testnet is modified to include more users with necessary specifications to be a part of the jury. The specifications include having average user rating above a certain threshold and being an expert in the field of the task. A list of potential jurors are notified and they have a period of one day to accept jury duty, with the maximum number of juors capped to 5 per dispute."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"3"}),(0,r.jsx)(t.td,{children:"Voting module"}),(0,r.jsx)(t.td,{children:"Each juror can review the dispute and cast their vote which also includes their rating for both the customer and the worker. After a period of two days all the juror votes are counted and a winner is identified."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"4"}),(0,r.jsx)(t.td,{children:"Escrow"}),(0,r.jsx)(t.td,{children:"Single account for storing all the funds for transfer/exchange. Account for creating task, bidding for the task, transferring juror fees (if the court is summoned), transferring winner fees."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"5"}),(0,r.jsx)(t.td,{children:"Scheduler"}),(0,r.jsx)(t.td,{children:"Custom event scheduler built based on block number to facilitate the waiting periods for jury acceptance and juror voting."})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"additional-project-details",children:(0,r.jsx)(t.strong,{children:"Additional Project Details"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Technology stack being used","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Rust, Substrate, React, Python, centralised cloud storage"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"future-plans",children:(0,r.jsx)(t.strong,{children:"Future Plans"})}),"\n",(0,r.jsx)(t.p,{children:"Future releases of the Dot Marketplace include:"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Phase"}),(0,r.jsx)(t.th,{children:"Feature"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"3"}),(0,r.jsx)(t.td,{children:"Milestone based submissions"}),(0,r.jsx)(t.td,{children:"Making provisions to breakdown a project into multiple configurable milestones to allow parallel or sequential execution"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"4"}),(0,r.jsx)(t.td,{children:"Decentralized Storage"}),(0,r.jsx)(t.td,{children:"Integration with IPFS or another decentralized storage platform"})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:""}),"\n",(0,r.jsxs)(t.h2,{id:"additional-information-heavy_plus_sign",children:["Additional Information ","\u2795"]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"How did you hear about the Grants Program?"})," Web3 Foundation Website, Polkadot India Buildathon"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"We have been working on this roadmap since we applied for the Web3 grant"}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}}}]);