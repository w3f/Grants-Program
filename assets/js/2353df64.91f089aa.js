"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[4682],{65120:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>m});var n=a(87462),i=(a(67294),a(3905));a(8209);const r={},l="daos",o={unversionedId:"applications/daos",id:"applications/daos",title:"daos",description:"Team Name:* daos-org",source:"@site/applications/daos.md",sourceDirName:"applications",slug:"/applications/daos",permalink:"/applications/daos",draft:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/applications/daos.md",tags:[],version:"current",frontMatter:{}},s={},m=[{value:"Overview",id:"overview",level:2},{value:"Project Details",id:"project-details",level:2},{value:"Background",id:"background",level:3},{value:"project pallets",id:"project-pallets",level:3},{value:"Workflow",id:"workflow",level:3},{value:"Ecosystem Fit",id:"ecosystem-fit",level:2},{value:"Team",id:"team",level:2},{value:"Team members",id:"team-members",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Development Status",id:"development-status",level:3},{value:"Development Roadmap",id:"development-roadmap",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 \u2014 Implement Create-Dao, Agency, DoAS, Square, and Sudo Modules",id:"milestone-1--implement-create-dao-agency-doas-square-and-sudo-modules",level:3},{value:"Milestone 2 - Emergency, UI design and JS code implementation examples",id:"milestone-2---emergency-ui-design-and-js-code-implementation-examples",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information \u2795",id:"additional-information-",level:2}],d={toc:m},u="wrapper";function p(e){let{components:t,...a}=e;return(0,i.kt)(u,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"daos"},"daos"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Team Name:")," daos-org"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Payment Address:")," 0x08A7876db92b07057E12fAF29AA3CCF33b5aAe3D (USDT ERC20)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://github.com/w3f/Grants-Program/tree/master#level_slider-levels"},"Level"),":")," 1")),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"This project provides a more flexible governance framework for a large number of small groups with common characteristics. It allows developers to create behavior templates based on this set of governance solutions in the simplest way possible,\nHowever, the origin of each specific behavior in the template completely depends on the users in the population (here we can call it the instance), that is, different user groups using the same type of template can have different Origin combinations.\nThis can be very useful, especially for products like LISTEN and KICO that have a strong group nature. Rooms are a template, multiple assets are a template, ico are a behavior template."),(0,i.kt)("li",{parentName:"ul"},"In addition to the methods provided by DAOS, the origin of other methods executed externally by DAO is DAO-Account, which is equivalent to an ordinary user. This is a very subtle design of governance. It allows for higher voter participation and greater resource mobility throughout the system.\nEach large group can be subdivided indefinitely into smaller groups, and smaller groups can be combined into larger groups indefinitely, similar to the Federal Republic.")),(0,i.kt)("h2",{id:"project-details"},"Project Details"),(0,i.kt)("h3",{id:"background"},"Background"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"polkadot provides a set of on-chain governance solutions, but it is also very limited. It assumes that any demands made by each user can be fulfilled through the system's very limited referendum or parliamentary resources. This is obviously unreasonable.\nThis leads to inefficiency and low willingness of users to vote and participate, which is the root of centralization."),(0,i.kt)("li",{parentName:"ul"},"The polkadot  democracy and council are not flexible enough to make more decisions at the non-system level. Parallel chains have many application-level businesses, each of which can be viewed as a behavior template,\nDifferent groups have different origin requirements for specific behaviors.\nSo we're offering this flexible governance supplement, where we want each community to be able to make more decisions autonomously and efficiently,\nThey have their own dao's democracy and council, but this is not enough to break the system, because each group performs external execution transactions using origin as a common user."),(0,i.kt)("li",{parentName:"ul"},"It's nice that every DAO executes a transaction with origin as an ordinary user, and you can imagine that the council members in polkadot are made up of part dao-account, which will help decentralize a lot of projects.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Together with the KICO team, after more than two months of thinking and design, DAOS came into being.")),(0,i.kt)("h3",{id:"project-pallets"},"project pallets"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"create-dao pallet"),"\nCreate a DAO based on a specific behavior template provided by the developer"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"agency pallet"),"\nSimilar to polkadot's collective module, and most of the code from collective module.\nThe difference is that each DAO has its own authority agency, and there is no limit to the number of daos on the chain. And it implements EnsureOriginWithArg, where ",(0,i.kt)("inlineCode",{parentName:"li"},"set_ensure_for_every_call")," sets the execution origin of each method.\nThis is useful because it gives each method more flexibility to get agency origin instead of hard-coding it ",(0,i.kt)("inlineCode",{parentName:"li"},"in runtime/lib.rs"),"."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"doas pallet"),"\nThe agency must first call the ",(0,i.kt)("inlineCode",{parentName:"li"},"pub fn do_as_collective")," of this module when calling non-daos external transactions"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"square pallet"),"\nA bit like the Democracy module in polkadot, it can get dao-root Origin and execute any methods that can be executed in a DAO. The difference is that there is a Square in each DAO and it introduces a voting threshold requirement.\nDifferent methods can set different thresholds for voting by ",(0,i.kt)("inlineCode",{parentName:"li"},"set_min_vote_weight_for_every_call"),", that is, origin can be set dynamically."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"sudo pallet"),"\nSomewhat like the Sudo module in polkadot, let a user own the dao-root origin in the DAO. Each DAO has a sudo, a substitute for Democracy, that can be removed."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"emergency pallet"),"\nIt uses native referendums or parliaments to help each DAO handle emergencies, such as parameter Settings failing to work properly.")),(0,i.kt)("h3",{id:"workflow"},"Workflow"),(0,i.kt)("p",null,"To be added"),(0,i.kt)("h2",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,i.kt)("p",null,"This is a project without any token, focused on community contribution, and tt is now ready for use on KICO and LISTEN.\nWe believe that this is a very useful product for other projects in application,\nit will bring you not only the convenience of development, but also the free flow and integration of resources, as long as you pay attention to it.\nDevelopers can use our governance model by providing a behavior template, regardless of the number of DAOs but only the type of DAOs.\nIf your project doesn't want to use council and Democracy because the governance resources are limited,\nthen you need to write a voting system for group decisions. This is a repetitive job and it doesn't add much value.\nI recommend using DAOS and leaving the governance code writing to the DAOS team.\nWe will continue to update, it makes sense, and both KICO and LISTEN are high-quality projects in Kusama and have been given slots."),(0,i.kt)("h2",{id:"team"},"Team"),(0,i.kt)("h3",{id:"team-members"},"Team members"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"JimYam"),(0,i.kt)("li",{parentName:"ul"},"wetalice"),(0,i.kt)("li",{parentName:"ul"},"Zifan Zhang"),(0,i.kt)("li",{parentName:"ul"},"You Lam")),(0,i.kt)("h3",{id:"teams-experience"},"Team's experience"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"JimYam has been engaged in blockchain chain development for 5 years and is passionate about blockchain industry innovation. Currently, he is the main developer of LISTEN parallel chain team. Having worked in Tencent for 3 years, he has unique insights into social products. He has been following polkadot ecological development since Substrate1.0."),(0,i.kt)("li",{parentName:"ul"},"wetalice Graduated from top5 universities in China, good at economics and game theory. Currently he is the lead developer for the KICO team."),(0,i.kt)("li",{parentName:"ul"},"Zifan Zhang has worked for NetEase and did front-end development for 6 years. Currently, he has his own entrepreneurial team in Singapore."),(0,i.kt)("li",{parentName:"ul"},"You Lam is test engineer who has been working in the industry for 9 years.")),(0,i.kt)("h3",{id:"contact"},"Contact"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Contact Name:")," JimYam"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Contact Email:")," ",(0,i.kt)("a",{parentName:"li",href:"mailto:transxask1@gmail.com"},"transxask1@gmail.com"))),(0,i.kt)("h3",{id:"legal-structure"},"Legal Structure"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Registered Address:")," N/A"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Registered Legal Entity:")," N/A")),(0,i.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/daos-org/daos.git"},"https://github.com/daos-org/daos.git")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/DICO-TEAM/dico-chain.git"},"https://github.com/DICO-TEAM/dico-chain.git")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/listenofficial/listen-parachain.git"},"https://github.com/listenofficial/listen-parachain.git"))),(0,i.kt)("h3",{id:"development-status"},"Development Status"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/daos-org/daos.git"},"https://github.com/daos-org/daos.git"))),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"development-roadmap"},"Development Roadmap"),(0,i.kt)("h3",{id:"overview-1"},"Overview"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 2 months"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Full-Time Equivalent (FTE):")," 6FTE"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Total Costs:")," 8.5k USD")),(0,i.kt)("h3",{id:"milestone-1--implement-create-dao-agency-doas-square-and-sudo-modules"},"Milestone 1 \u2014 Implement Create-Dao, Agency, DoAS, Square, and Sudo Modules"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Estimated duration:")," 1 month"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"FTE:")," 6"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Costs:")," 6000 USD")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,i.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,i.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0a."),(0,i.kt)("td",{parentName:"tr",align:null},"License"),(0,i.kt)("td",{parentName:"tr",align:null},"MIT, APACHE2.0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0b."),(0,i.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,i.kt)("td",{parentName:"tr",align:null},"Write Document for each module")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0c."),(0,i.kt)("td",{parentName:"tr",align:null},"Testing"),(0,i.kt)("td",{parentName:"tr",align:null},"Write test code for each module")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0d."),(0,i.kt)("td",{parentName:"tr",align:null},"Example"),(0,i.kt)("td",{parentName:"tr",align:null},"Provides code for examples of using DAOS on substrate projects")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0e."),(0,i.kt)("td",{parentName:"tr",align:null},"Comment"),(0,i.kt)("td",{parentName:"tr",align:null},"Provide detailed comments for each module")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0f."),(0,i.kt)("td",{parentName:"tr",align:null},"Benchmarking"),(0,i.kt)("td",{parentName:"tr",align:null},"Write Benchmarking code for each module")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"1."),(0,i.kt)("td",{parentName:"tr",align:null},"create-dao pallet"),(0,i.kt)("td",{parentName:"tr",align:null},"Developers can quickly create a behavior template that works with daos, and users can create DAOs based on behavior templates in this module.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"2."),(0,i.kt)("td",{parentName:"tr",align:null},"agency pallet"),(0,i.kt)("td",{parentName:"tr",align:null},"A power agent in DAO can solve some things in DAO more quickly. The module can set the difficulty level of transactions that can be executed by power agent, namely Origin. Has its own voting system")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"3."),(0,i.kt)("td",{parentName:"tr",align:null},"doas pallet"),(0,i.kt)("td",{parentName:"tr",align:null},"Through this module, the agency can obtain a dao-account, which is the identity of an ordinary user to perform external transactions")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"4."),(0,i.kt)("td",{parentName:"tr",align:null},"square pallet"),(0,i.kt)("td",{parentName:"tr",align:null},"The highest authority in dao, can execute all transactions in dao. And the execution difficulty of each transaction can be set in this modlue, namely vote weight. Has its own voting system")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"5."),(0,i.kt)("td",{parentName:"tr",align:null},"sudo pallet"),(0,i.kt)("td",{parentName:"tr",align:null},"Giving someone root privileges can execute all executable methods in dao. It should be remove when the DAO is necessary for decentralization.")))),(0,i.kt)("h3",{id:"milestone-2---emergency-ui-design-and-js-code-implementation-examples"},"Milestone 2 - Emergency, UI design and JS code implementation examples"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Estimated duration:")," 1 month"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"FTE:")," 3"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Costs:")," 2500 USD")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,i.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,i.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0a."),(0,i.kt)("td",{parentName:"tr",align:null},"License"),(0,i.kt)("td",{parentName:"tr",align:null},"APACHE2.0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0b."),(0,i.kt)("td",{parentName:"tr",align:null},"Testing"),(0,i.kt)("td",{parentName:"tr",align:null},"Write unit tests for all modules")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0c."),(0,i.kt)("td",{parentName:"tr",align:null},"Docuemnt"),(0,i.kt)("td",{parentName:"tr",align:null},"Complete all module documentation")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0d."),(0,i.kt)("td",{parentName:"tr",align:null},"Benchmarking"),(0,i.kt)("td",{parentName:"tr",align:null},"Write Benchmarking code and generate weight.rs for each module")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"1."),(0,i.kt)("td",{parentName:"tr",align:null},"Substrate Module: Emergency"),(0,i.kt)("td",{parentName:"tr",align:null},"When dao cannot run normally for some reason, such as wrong parameter settings, it can be adjusted through democracy and council")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"2."),(0,i.kt)("td",{parentName:"tr",align:null},"DAO Template Development Manual"),(0,i.kt)("td",{parentName:"tr",align:null},"Provide a detailed development manual docs so that developers can quickly develop their own DAO templates based on daos")))),(0,i.kt)("h2",{id:"future-plans"},"Future Plans"),(0,i.kt)("p",null,"We will focus on getting more people to use this project than just LISTEN and KICO. A mature product should pay more attention to the sinking market and listen to differences\nvoice of the community. Using this project, the voice of every small community can be noticed.\nWe will continue to introduce more algorithms at the governance level to meet the governance needs of different project parties. We welcome more developers to join us to improve."),(0,i.kt)("h2",{id:"additional-information-"},"Additional Information \u2795"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"How did you hear about the Grants Program?")),(0,i.kt)("p",{parentName:"li"},"  Announcement by another team")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"This is an example of kico network use daos for its own vc behavior template"),".  "),(0,i.kt)("p",{parentName:"li"},"  ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/DICO-TEAM/dico-chain/blob/main/runtime/kico/src/vc.rs#L275"},"https://github.com/DICO-TEAM/dico-chain/blob/main/runtime/kico/src/vc.rs#L275"),"\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/DICO-TEAM/dico-chain/blob/main/runtime/kico/src/lib.rs#L1602"},"https://github.com/DICO-TEAM/dico-chain/blob/main/runtime/kico/src/lib.rs#L1602")),(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},"This case is to create a vc behavior template for any type of asset (including NFT), and users can create a DAO based on any asset id.")))))}p.isMDXComponent=!0}}]);