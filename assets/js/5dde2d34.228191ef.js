"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[1422],{42156:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>m});var n=a(87462),i=(a(67294),a(3905));a(95657);const r={},l="PolkaSign",o={unversionedId:"applications/SubDAO_PolkaSign",id:"applications/SubDAO_PolkaSign",title:"PolkaSign",description:"Team Name:* SubDAO Labs",source:"@site/applications/SubDAO_PolkaSign.md",sourceDirName:"applications",slug:"/applications/SubDAO_PolkaSign",permalink:"/Grants-Program/applications/SubDAO_PolkaSign",draft:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/applications/SubDAO_PolkaSign.md",tags:[],version:"current",frontMatter:{}},s={},m=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Workflow",id:"workflow",level:3},{value:"Design",id:"design",level:3},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles",id:"team-linkedin-profiles",level:3},{value:"Development Status \ud83d\udcd6",id:"development-status-",level:2},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1  - The first usable version",id:"milestone-1----the-first-usable-version",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information \u2795",id:"additional-information-",level:2}],p={toc:m},d="wrapper";function u(e){let{components:t,...a}=e;return(0,i.kt)(d,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"polkasign"},"PolkaSign"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Team Name:")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/subdao-network"},"SubDAO Labs")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Payment Address:"),"  0x0c105bA504D1905bb47EeA57FA8694893bDEd27f")),(0,i.kt)("h2",{id:"project-overview-"},"Project Overview \ud83d\udcc4"),(0,i.kt)("p",null,"The previous application ","[SubDAO Network Application - <https://github.com/w3f/Grants-Program/pull/90>]"),(0,i.kt)("h3",{id:"overview"},"Overview"),(0,i.kt)("p",null,"The PolkaSign is a web3.0 app for electronic agreements built on top of Polkadot Ecosystem. The electronic agreement is well-known in web2.0 instead of paper agreements used thousands of years in historical time. With electronic agreements, commercial activities become much more efficient and have a lower cost than ever. The whole human world is benefiting from electronic agreements in the past 30 years. While with more and more electronic agreements signed, more and more issues are exposed. Such as electronic agreements are stored in a centralized system, fraud in electronic agreements, and so on. With PolkaSign, anyone can sign an electronic agreement with whoever he/she wants. To sign an electronic agreement, you just need to upload your agreement document, and sign it in PolkaSign, then share the link to the co-signer."),(0,i.kt)("p",null,"The PolkaSign is developed with Substrate Framework based on the SubDAO Network, which can be replaced with any Substrate Based Chains, and serves any kind of orgs with electronic agreements. The goal of PolkaSign is to provide electronic agreements in a web 3.0 way, to replace the systems in web 2.0."),(0,i.kt)("h3",{id:"project-details"},"Project Details"),(0,i.kt)("p",null,"PolkaSign combines blockchain and decentralized storage to provide a reliable electronic agreements platform. With the decentralized storage system, such as IPFS, Swarm, or Crust in Polkadot ecosystem, provides the storage for the agreement files, at the current state, only PDF is supported. The information of agreement, including signature, signer, agreement files list, etc., is written with smart contract on the blockchain. The PolkaSign provides a dapp to handle agreement files, co-signer, and links, to interact with decentralized storage and smart contracts on the blockchain. The smart contracts of PolkaSign are based on ink!, any substrate-based chain can adopt these smart contracts easily."),(0,i.kt)("h3",{id:"workflow"},"Workflow"),(0,i.kt)("p",null,"Below is the workflow of how to use PolkaSign. Alice wants to sign an agreement with Bob, so she creates an electronic agreement with PolkaSign, and the electronic agreement files are stored in the decentralized storage system. Then Alice adds Bob's wallet address as co-signer, and sign the contract with her private key. After that, Alice shares the information of agreement with Bob. When Bob launches PolkaSign with his wallet, he will find the very agreement waiting for him to sign. Everything is done when Bob approves and signs the agreement send from Alice in PolkaSign."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/WannaM/graphics/main/Flow-2021-07-21-2311.png",alt:"Flow-2021-07-21-2311"})),(0,i.kt)("h3",{id:"design"},"Design"),(0,i.kt)("p",null,"The home page shows the list of agreements in different statuses. The current waiting for signing agreements will be display as default, and you can switch the list by tabs or filter button in the left panel. The agreement file info, the status, and the progress of the agreement are shown in the detailed info of each agreement. The draft design of PolkaSign is shown below."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/WannaM/graphics/main/Overview-2021-07-21-2052.png",alt:"Overview-2021-07-21-2052"})),(0,i.kt)("p",null,"There are only three steps to create an agreement with people. The first step is to upload the agreement files. The files will be signed and stored in the decentralized storage system."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/WannaM/graphics/main/New-2021-07-21-2052.png",alt:"New-2021-07-21-2052"})),(0,i.kt)("p",null,"The second step is to add co-signers. Add any number of co-signers by filling in their wallet addresses. PolkaSign JS will check the addresses."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/WannaM/graphics/main/AddSigner-2021-07-21-2052.png",alt:"AddSigner-2021-07-21-2052"})),(0,i.kt)("p",null,"The last step is to review the contract. When everything is ready, sign it with your wallet and share the link with co-signers."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/WannaM/graphics/main/Review-2021-07-21-2052.png",alt:"Review-2021-07-21-2052"})),(0,i.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Where and how does your project fit into the ecosystem?",(0,i.kt)("br",{parentName:"p"}),"\n","Tools / Application.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Who is your target audience (parachain/dapp/wallet/UI developers, designers, your own user base, some dapp's userbase, yourself)?",(0,i.kt)("br",{parentName:"p"}),"\n","Anyone who need sign contract with others, include indivaduals, companies, DAOs and other kind of organization.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"What need(s) does your project meet?",(0,i.kt)("br",{parentName:"p"}),"\n","The project meets the need of signing contract with decentralization, immutability, and transparency. It provides the way for DAOs to sign contracts with DAO members and contributors.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?  "),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"If so, how is your project different?  "),(0,i.kt)("li",{parentName:"ul"},"If not, are there similar projects in related ecosystems?  ")),(0,i.kt)("p",{parentName:"li"},"To sign a contract with the help of blockchain technologies is not fresh. There are similar projects in the Ethereum ecosystem, such as OpenLaw, EthSign. But there is no similar project in the Polkadot ecosystem yet. PolkaSign is the first one to provide electronic agreement signing for individuals, companies, and DAOs."))),(0,i.kt)("h2",{id:"team-"},"Team \ud83d\udc65"),(0,i.kt)("h3",{id:"team-members"},"Team members"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Qiang - CTO/Project Lead"),(0,i.kt)("li",{parentName:"ul"},"Marvin Tong - Product Director"),(0,i.kt)("li",{parentName:"ul"},"Dajun - System Architect/Substrate Developer")),(0,i.kt)("h3",{id:"contact"},"Contact"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Contact Name:")," WannaM"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Contact Email:")," ",(0,i.kt)("a",{parentName:"li",href:"mailto:subdao.lab@gmail.com"},"subdao.lab@gmail.com")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Website:")," ",(0,i.kt)("a",{parentName:"li",href:"https://subdao.network"},"https://subdao.network"))),(0,i.kt)("h3",{id:"legal-structure"},"Legal Structure"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Registered Address:")," Intershore Chambers, P.O. Box 4342, Road Town, Tortola, British Virgin Islands"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Registered Legal Entity:"),"  SubDAO Labs Ltd.")),(0,i.kt)("h3",{id:"teams-experience"},"Team's experience"),(0,i.kt)("p",null,"The team is the one who applied SubDAO."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Qiang")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Over 13 years of experiences in Software Development"),(0,i.kt)("li",{parentName:"ul"},"Chief Solution Architect in Tencent"),(0,i.kt)("li",{parentName:"ul"},"Former Team Lead in IBM"),(0,i.kt)("li",{parentName:"ul"},"Core Developer of Smart Cloud / HSLT"),(0,i.kt)("li",{parentName:"ul"},"Code Contributor of KVM"),(0,i.kt)("li",{parentName:"ul"},"Community Contributor in RedHat")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Marvin Tong")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Founder and CEO of Phala Network"),(0,i.kt)("li",{parentName:"ul"},"Former Product Manager in Tencent"),(0,i.kt)("li",{parentName:"ul"},"Former Product Manager in DiDi")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Dajun")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Over 12 years of experiences in Development"),(0,i.kt)("li",{parentName:"ul"},"Former Senior Software Engineer in Alibaba"),(0,i.kt)("li",{parentName:"ul"},"Core Developer of Wetez and StaFi.io")),(0,i.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/subdao-network"},"https://github.com/subdao-network"))),(0,i.kt)("h3",{id:"team-linkedin-profiles"},"Team LinkedIn Profiles"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/wang-qiang-aa6a2894/"},"Wang Qiang")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/marvintong/"},"Marvin Tong"))),(0,i.kt)("h2",{id:"development-status-"},"Development Status \ud83d\udcd6"),(0,i.kt)("p",null,"We have already designed some UI/UX as the shown previous section, and the rest works will be done in next two months."),(0,i.kt)("h2",{id:"development-roadmap-"},"Development Roadmap \ud83d\udd29"),(0,i.kt)("p",null,"We planned two major versions."),(0,i.kt)("p",null,"Version 1: The goal of first version is to provide a usable PolkaSign, the users can upload PDF agreement files and co-sign with other signers. It contains the features of store agreement files in decentralized storage, sign contract with smart contract, sharing the contracts waiting for sign."),(0,i.kt)("p",null,"Version 2: The goal of second version is to provide a common PolkaSign for other substrate chains. To co-work with other chains to integrate PolkaSign."),(0,i.kt)("h3",{id:"overview-1"},"Overview"),(0,i.kt)("p",null,"In this application, we planned to provide the first version of PolkaSign. The main features are 1) store agreement files in decentralized storage, 2) sign contract with smart contract and 3) sharing the contracts waiting for sign. It will contains smart contract with ink!, web app as client and codes to interact with decentralized storage system."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 2 month"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Full-Time Equivalent (FTE):")," 2"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Total Costs:")," 15,000 USD")),(0,i.kt)("h3",{id:"milestone-1----the-first-usable-version"},"Milestone 1  - The first usable version"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Estimated Duration:")," 2 month"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"FTE:"),"  2"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Costs:")," 15,000 USD")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,i.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,i.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0a."),(0,i.kt)("td",{parentName:"tr",align:null},"License"),(0,i.kt)("td",{parentName:"tr",align:null},"MIT")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0b."),(0,i.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,i.kt)("td",{parentName:"tr",align:null},"We will provide a basic tutorial that explains how to use.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0c."),(0,i.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,i.kt)("td",{parentName:"tr",align:null},"We will provide a testing guide on how to test it.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0d."),(0,i.kt)("td",{parentName:"tr",align:null},"Article"),(0,i.kt)("td",{parentName:"tr",align:null},"We will publish an article describing our ideas.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"1a."),(0,i.kt)("td",{parentName:"tr",align:null},"PolkaSign Client"),(0,i.kt)("td",{parentName:"tr",align:null},"PolkaSign Client will be implemented as web app.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"1b."),(0,i.kt)("td",{parentName:"tr",align:null},"PolkaSign Smart Contract"),(0,i.kt)("td",{parentName:"tr",align:null},"PolkaSign Smart Contract will be implemented with ink!. The Unit tests of contracts will be included.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"2."),(0,i.kt)("td",{parentName:"tr",align:null},"Build instruction"),(0,i.kt)("td",{parentName:"tr",align:null},"We will provide a guide of building PolkaSign from source code.")))),(0,i.kt)("h2",{id:"future-plans"},"Future Plans"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"We will cooperate with other parachains to make PolkaSign widly usable."),(0,i.kt)("li",{parentName:"ul"},"More user cases will be shown on media."),(0,i.kt)("li",{parentName:"ul"},"We will introduce more features for users, like new file types, agreement modifications etc."),(0,i.kt)("li",{parentName:"ul"},"The feedback from communities will be considered as new features in future versions.")),(0,i.kt)("h2",{id:"additional-information-"},"Additional Information \u2795"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"How did you hear about the Grants Program?"),"\nWe get this information from the w3f website."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"We have made the SubDAO Network, and an open grant has been accepted.")))}u.isMDXComponent=!0}}]);