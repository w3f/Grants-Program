"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[91986],{17580:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var n=a(87462),o=(a(67294),a(3905));a(8209);const r={},i="Polkadot Contract Wizard",l={unversionedId:"applications/polkadot-contract-wizard",id:"applications/polkadot-contract-wizard",title:"Polkadot Contract Wizard",description:"- Team Name: Protofire",source:"@site/applications/polkadot-contract-wizard.md",sourceDirName:"applications",slug:"/applications/polkadot-contract-wizard",permalink:"/applications/polkadot-contract-wizard",draft:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/applications/polkadot-contract-wizard.md",tags:[],version:"current",frontMatter:{}},s={},p=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:'<a name="step1"></a>1.-  Redesign frontend interface (in progress)',id:"1---redesign-frontend-interface-in-progress",level:4},{value:"User Personas",id:"user-personas",level:4},{value:'<a name="step2"></a>2.- Develop the interface based on the previous task result',id:"2--develop-the-interface-based-on-the-previous-task-result",level:4},{value:'<a name="step3"></a>3.- Compose the contract based on the selection.',id:"3--compose-the-contract-based-on-the-selection",level:4},{value:'<a name="step4"></a>4.- Add syntax highlighting to the displayed smart contract code.',id:"4--add-syntax-highlighting-to-the-displayed-smart-contract-code",level:4},{value:'<a name="step5"></a>5.- Create a service that allows on demand contract compilation and deployment.',id:"5--create-a-service-that-allows-on-demand-contract-compilation-and-deployment",level:4},{value:'<a name="step6"></a>6.- Develop Instance functionality.',id:"6--develop-instance-functionality",level:4},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles",id:"team-linkedin-profiles",level:3},{value:"Development Status \ud83d\udcd6",id:"development-status-",level:2},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 \u2014 UI and Code Generation",id:"milestone-1--ui-and-code-generation",level:3},{value:"Milestone 2 \u2014 Smart Contracts Deployment and Instantiation functionality",id:"milestone-2--smart-contracts-deployment-and-instantiation-functionality",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information \u2795",id:"additional-information-",level:2}],d={toc:p},c="wrapper";function m(t){let{components:e,...a}=t;return(0,o.kt)(c,(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"polkadot-contract-wizard"},"Polkadot Contract Wizard"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Team Name:")," Protofire"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Payment Address:")," 0xD662E05ce522B3861b70FC376F60bF50E200abfA (USDC - Ethereum network)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/w3f/Grants-Program/tree/master#level_slider-levels"},"Level"),":")," 2 ")),(0,o.kt)("h2",{id:"project-overview-"},"Project Overview \ud83d\udcc4"),(0,o.kt)("p",null,"This project is an application for a grant after getting ",(0,o.kt)("a",{parentName:"p",href:"https://polkadothackathonlatam.com/proyecto-inner/LactobaciloGG"},"the first prize on Polkadot Hackathon LATAM"),". "),(0,o.kt)("p",null,"We firmly believe that web3 has to be easy to use, this project is based on that premise and from the mock-up developed in the hackathon, we are going to take the next steps to make this experience frictionless."),(0,o.kt)("h3",{id:"overview"},"Overview"),(0,o.kt)("p",null,"The Polkadot Contract Wizard aims to be the project that provides the entry point for the next generation of web3 users, developers and non developers in the Polkadot ecosystem. It will achieve that goal by enabling new users creating their own contracts in a few steps. We want to provide the possibility to anyone to be able to create their own smart contracts as a tool for their work. The users need to focus on what they do, so we make the access to smart contracts easy for them. They don\u2019t need to care about programming, but they need to be able to customize their smart contracts in a simple way with the support of the developer community around the world."),(0,o.kt)("h3",{id:"project-details"},"Project Details"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://alongoni.github.io/polkadot-contract-wizard/#"},"Here")," you can find our first approach of the contract wizard. And ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/alongoni/polkadot-contract-wizard"},"here")," is the repo containing what we already did."),(0,o.kt)("p",null,"We learned from this experience that this kind of implementations are not friendly enough to non technical users, so we decided to do something about it."),(0,o.kt)("p",null,"We plan to use the following tech stack in the latest stable version: React, Next.js, MUI, PolkadotJS wallet extension, Docker, Git."),(0,o.kt)("p",null,"These are the steps that will be done to implement the proposed solution:"),(0,o.kt)("h4",{id:"1---redesign-frontend-interface-in-progress"},(0,o.kt)("a",{name:"step1"}),"1.-  Redesign frontend interface (in progress)"),(0,o.kt)("p",null,"The development needs to be focused on making a better user experience.\nThere are already some tools that we can use as a reference. E.g: ",(0,o.kt)("a",{parentName:"p",href:"https://mintplex.xyz/"},"https://mintplex.xyz/"),", ",(0,o.kt)("a",{parentName:"p",href:"https://www.coinvise.co/"},"https://www.coinvise.co/")),(0,o.kt)("h4",{id:"user-personas"},"User Personas"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"A non-technical user that needs to create a new NFT contract for publishing his own content or needs to create a new Token for being able to finance his own project.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"A developer that wants to bootstrap a quick template of a standard contract (based on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/w3f/PSPs"},"PSP"),") with different features."))),(0,o.kt)("p",null,"If we want to onboard more people to Polkadot Ecosystem and achieve mass adoption we need to make the user experience easier."),(0,o.kt)("p",null,"We have already started with a ",(0,o.kt)("a",{parentName:"p",href:"https://www.figma.com/proto/XhwRgBUg7oSDncX0w1byfV/Contract-Wizzard?node-id=1%3A3&viewport=-714%2C541%2C0.39&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A3"},"prototype")," on Figma."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://gcdnb.pbrd.co/images/RgPC3fQshqt8.png",alt:"Figma Prototype Contract Wizard",title:"Polkadot Contract Wizard Design"})),(0,o.kt)("h4",{id:"2--develop-the-interface-based-on-the-previous-task-result"},(0,o.kt)("a",{name:"step2"}),"2.- Develop the interface based on the previous task result"),(0,o.kt)("p",null,"Based on the mock-up created in the previous step make it something usable."),(0,o.kt)("p",null,"We need to be very careful about the look and feel."),(0,o.kt)("p",null,"For the login we will use PolkadotJS wallet."),(0,o.kt)("p",null,"The user will be guided step by step to create the contract he needs. At the end, the generated smart contract code is displayed with the possibility to copy and download it."),(0,o.kt)("h4",{id:"3--compose-the-contract-based-on-the-selection"},(0,o.kt)("a",{name:"step3"}),"3.- Compose the contract based on the selection."),(0,o.kt)("p",null,"All the contracts need to be composable based on the modifiers selected by the user:"),(0,o.kt)("p",null,"PSP22:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"- Modifiers: Metadata, Mintable, Burnable, Wrapper, FlashMint, Pausable, Capped.\n\n- Security modifiers: Ownable, Access Control, Access Control Enumerable, None. \n")),(0,o.kt)("p",null,"PSP37"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"- Modifiers: Batch, Metadata, Mintable, Burnable, Enumerable.\n\n- Security modifiers: Ownable, Access Control, Access Control Enumerable, None. \n")),(0,o.kt)("p",null,"PSP34"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"- Modifiers: Metadata, Mintable, Burnable, Enumerable.\n\n- Security modifiers: Ownable, Access Control, Access Control Enumerable, None. \n")),(0,o.kt)("p",null,"At first, we will only use OpenBrush contracts than can be found here: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/contracts/src/token"},"https://github.com/Supercolony-net/openbrush-contracts/tree/main/contracts/src/token")),(0,o.kt)("h4",{id:"4--add-syntax-highlighting-to-the-displayed-smart-contract-code"},(0,o.kt)("a",{name:"step4"}),"4.- Add syntax highlighting to the displayed smart contract code."),(0,o.kt)("p",null,"At first, the syntax hihlighter will only be used for Rust programming language."),(0,o.kt)("p",null,"To allow compatibility with future plans we will research for a library that covers not only Rust, but can also be used with AssemblyScript or any other language that is compatible with WASM."),(0,o.kt)("h4",{id:"5--create-a-service-that-allows-on-demand-contract-compilation-and-deployment"},(0,o.kt)("a",{name:"step5"}),"5.- Create a service that allows on demand contract compilation and deployment."),(0,o.kt)("p",null,"In order to allow users to only instance the smart contracts, we will have to deploy the smart contracts first. We'll build a backend service that receives the generated code and compiles it. Once the contract is deployed, we will store the code hash so that it can be used later."),(0,o.kt)("p",null,"We need a map containing the parachain, type of the contract, the modifiers used and the code hash of the deployed contract.\nE.g: (Contracts Rococo - PSP22 - ","[burnable,mintable]",' => "CODE HASH")'),(0,o.kt)("p",null,"Research what\u2019s the best place to store this and what\u2019s the most efficient way."),(0,o.kt)("p",null,"At first, it will only be done in Contracts Parachain on Rococo Testnet"),(0,o.kt)("p",null,"Check documentation here: ",(0,o.kt)("a",{parentName:"p",href:"https://substrate.io/developers/rococo-network/"},"https://substrate.io/developers/rococo-network/")),(0,o.kt)("h4",{id:"6--develop-instance-functionality"},(0,o.kt)("a",{name:"step6"}),"6.- Develop Instance functionality."),(0,o.kt)("p",null,"Once the user has finished defining the functionality of the contract, the associated code hash from the previous step is obtained.\nNow, the user is able to fill the required fields of the contract constructor in order to instance it succesfully."),(0,o.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Polkadot Contract Wizard aims to be a bridge between people with great ideas and the entire Polkadot Ecosystem.")),(0,o.kt)("p",null,"This project will help providing a solution for all type of users to create standard smart contracts such as tokens, NFTs, etc in a very simple way."),(0,o.kt)("h2",{id:"team-"},"Team \ud83d\udc65"),(0,o.kt)("h3",{id:"team-members"},"Team members"),(0,o.kt)("p",null,"The project will be led by Diego Torres, protofires field CTO\nOur Developer will be Henry Palacios\nAnd the UI/UX expert is Agustin Longoni"),(0,o.kt)("h3",{id:"contact"},"Contact"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Contact Name:")," Diego Torres Borda"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Contact Email:")," ",(0,o.kt)("a",{parentName:"li",href:"mailto:diego@protofire.io"},"diego@protofire.io")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Website:")," ",(0,o.kt)("a",{parentName:"li",href:"https://protofire.io/"},"protofire.io"))),(0,o.kt)("h3",{id:"legal-structure"},"Legal Structure"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Registered Address:")," 1607 Ponce de Leon Avenue, GM-06, San Juan, PR, 00909"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Registered Legal Entity:")," Altoros LLC (DBA Protofire)")),(0,o.kt)("h3",{id:"teams-experience"},"Team's experience"),(0,o.kt)("p",null,"Protofire has proven expertise in building decentralized infrastructure, protocols, applications, and developer platforms to accelerate growth of network\u2019s ecosystems. By delivering hands-on coding and contributions, Protofire specializes in supercharging developer adoption, bootstrapping, and network usage\nWe are not only a dev shop company, but we create long term partnerships with the projects we are part of, building and working as ambassadors for the community. We believe in the projects and also participate by running nodes and taking the validator or staker roles."),(0,o.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/protofire/filecoin-CID-checker"},"https://github.com/protofire/filecoin-CID-checker")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/protofire/moonbeam-web-core"},"https://github.com/protofire/moonbeam-web-core")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/protofire/solhint"},"https://github.com/protofire/solhint")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/protofire/eth-cli"},"https://github.com/protofire/eth-cli")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/protofire/blockchain-learning-path"},"https://github.com/protofire/blockchain-learning-path")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/protofire/maker-governance-dashboard"},"https://github.com/protofire/maker-governance-dashboard")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/protofire/omen-exchange"},"https://github.com/protofire/omen-exchange")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/protofire/kyber-pool-master-proxy-contract"},"https://github.com/protofire/kyber-pool-master-proxy-contract"))),(0,o.kt)("p",null,"GitHub accounts of team members."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/henrypalacios"},"https://github.com/henrypalacios")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/alongoni"},"https://github.com/alongoni")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/DiegoTorresborda"},"https://github.com/DiegoTorresborda"))),(0,o.kt)("h3",{id:"team-linkedin-profiles"},"Team LinkedIn Profiles"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"linkedin.com/in/henrydpalacios"),(0,o.kt)("li",{parentName:"ul"},"linkedin.com/in/agustinlongoni"),(0,o.kt)("li",{parentName:"ul"},"linkedin.com/in/diego-torres-borda-94b70912")),(0,o.kt)("h2",{id:"development-status-"},"Development Status \ud83d\udcd6"),(0,o.kt)("p",null,"As explained in step 1 of project details section, our first approach was a contract wizard similar to the one built by OpenZeppelin on Ethereum."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://polkadothackathonlatam.com/proyecto-inner/LactobaciloGG"},"Link")," to project presented on Polkadot Hackathon LATAM.")),(0,o.kt)("p",null,"After that, we realized that if we wanted our tool to be useful for all types of users, we needed to redesign the UX and add further functionalities."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"We are already working on a ",(0,o.kt)("a",{parentName:"li",href:"https://www.figma.com/proto/XhwRgBUg7oSDncX0w1byfV/Contract-Wizzard?node-id=1%3A3&viewport=-714%2C541%2C0.39&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A3"},"prototype")," of how the proposed project will work. ")),(0,o.kt)("h2",{id:"development-roadmap-"},"Development Roadmap \ud83d\udd29"),(0,o.kt)("p",null,"Described in project details."),(0,o.kt)("h3",{id:"overview-1"},"Overview"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 4 months"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Full-Time Equivalent (FTE):"),"  2"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Total Costs:")," 28,000 USD")),(0,o.kt)("h3",{id:"milestone-1--ui-and-code-generation"},"Milestone 1 \u2014 UI and Code Generation"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Estimated duration:")," 3 months"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"FTE:"),"  2"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Costs:")," 21,000 USD")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,o.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,o.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"right"},(0,o.kt)("strong",{parentName:"td"},"0a.")),(0,o.kt)("td",{parentName:"tr",align:null},"License"),(0,o.kt)("td",{parentName:"tr",align:null},"Apache 2.0")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"right"},(0,o.kt)("strong",{parentName:"td"},"0b.")),(0,o.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,o.kt)("td",{parentName:"tr",align:null},"We will provide both inline documentation of the code and a basic tutorial that explains how a user can generate its own smart contracts.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"right"},(0,o.kt)("strong",{parentName:"td"},"0c.")),(0,o.kt)("td",{parentName:"tr",align:null},"Testing and Testing Guide"),(0,o.kt)("td",{parentName:"tr",align:null},"The code will have unit-test coverage to ensure functionality and robustness. In the guide, we will describe how to run these tests.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"right"},(0,o.kt)("strong",{parentName:"td"},"0d.")),(0,o.kt)("td",{parentName:"tr",align:null},"Docker"),(0,o.kt)("td",{parentName:"tr",align:null},"We will provide a docker container with current milestones deliverables to easily run the application.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"right"},"1."),(0,o.kt)("td",{parentName:"tr",align:null},"Redesign frontend interface"),(0,o.kt)("td",{parentName:"tr",align:null},"The functionality to be implemented corresponds to ",(0,o.kt)("a",{parentName:"td",href:"#step1"},"step 1")," of the Project Details section.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"right"},"2."),(0,o.kt)("td",{parentName:"tr",align:null},"Develop the interface based on the previous task result"),(0,o.kt)("td",{parentName:"tr",align:null},"The functionality to be implemented corresponds to ",(0,o.kt)("a",{parentName:"td",href:"#step2"},"step 2")," of the Project Details section.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"right"},"3."),(0,o.kt)("td",{parentName:"tr",align:null},"Compose the contract based on the selection"),(0,o.kt)("td",{parentName:"tr",align:null},"The functionality to be implemented corresponds to ",(0,o.kt)("a",{parentName:"td",href:"#step3"},"step 3")," of the Project Details section.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"right"},"4."),(0,o.kt)("td",{parentName:"tr",align:null},"Add syntax highlighting to the displayed smart contract code"),(0,o.kt)("td",{parentName:"tr",align:null},"The functionality to be implemented corresponds to ",(0,o.kt)("a",{parentName:"td",href:"#step4"},"step 4")," of the Project Details section.")))),(0,o.kt)("h3",{id:"milestone-2--smart-contracts-deployment-and-instantiation-functionality"},"Milestone 2 \u2014 Smart Contracts Deployment and Instantiation functionality"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Estimated duration:")," 1 month"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"FTE:"),"  2"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Costs:")," 7,000 USD")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,o.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,o.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"right"},(0,o.kt)("strong",{parentName:"td"},"0a.")),(0,o.kt)("td",{parentName:"tr",align:null},"License"),(0,o.kt)("td",{parentName:"tr",align:null},"Apache 2.0")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"right"},(0,o.kt)("strong",{parentName:"td"},"0b.")),(0,o.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,o.kt)("td",{parentName:"tr",align:null},"We will provide both inline documentation of the code and a basic tutorial that explains how a user can instantiate a smart contract.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"right"},(0,o.kt)("strong",{parentName:"td"},"0c.")),(0,o.kt)("td",{parentName:"tr",align:null},"Testing and Testing Guide"),(0,o.kt)("td",{parentName:"tr",align:null},"The code will have unit-test coverage to ensure functionality and robustness. In the guide, we will describe how to run these tests.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"right"},(0,o.kt)("strong",{parentName:"td"},"0d.")),(0,o.kt)("td",{parentName:"tr",align:null},"Docker"),(0,o.kt)("td",{parentName:"tr",align:null},"We will provide a docker container with current milestones deliverables to easily run the application.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"right"},"0e."),(0,o.kt)("td",{parentName:"tr",align:null},"Article"),(0,o.kt)("td",{parentName:"tr",align:null},"We will publish an article that explains what we have achieved building this project and how this will impact the ecosystem .")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"right"},"1."),(0,o.kt)("td",{parentName:"tr",align:null},"Create a service that allows on demand contract compilation and deployment."),(0,o.kt)("td",{parentName:"tr",align:null},"The functionality to be implemented corresponds to ",(0,o.kt)("a",{parentName:"td",href:"#step5"},"step 5")," of the Project Details section.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"right"},"2."),(0,o.kt)("td",{parentName:"tr",align:null},"Develop Instance functionality"),(0,o.kt)("td",{parentName:"tr",align:null},"The functionality to be implemented corresponds to ",(0,o.kt)("a",{parentName:"td",href:"#step6"},"step 6")," of the Project Details section.")))),(0,o.kt)("h2",{id:"future-plans"},"Future Plans"),(0,o.kt)("p",null,"After the completion of this project, we would love to broaden its scope."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Multiple Chains")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Provide a set of tools that will allow users to connect to parachains which implement the contracts pallet.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Custom contracts")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Add the possibility of creating custom contracts, not only with the modifiers but adding the ability to write code using the interface."),(0,o.kt)("li",{parentName:"ul"},"Compile the generated code and deploy it to different parachains."),(0,o.kt)("li",{parentName:"ul"},"Following the comments made on the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/w3f/Grants-Program/pull/1413#pullrequestreview-1234970716"},"pull request"),", our approach will be based on the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/paritytech/ink-playground"},"ink-playground")," in order to integrate writing custom code and compiling it.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Social Interaction")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create an account to store information."),(0,o.kt)("li",{parentName:"ul"},"Save your created smart contracts."),(0,o.kt)("li",{parentName:"ul"},"Be able to share them with the community and ask for help."),(0,o.kt)("li",{parentName:"ul"},"Provide assistance to other community members.")),(0,o.kt)("h2",{id:"additional-information-"},"Additional Information \u2795"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"How did you hear about the Grants Program?")," Web3 Foundation Website"))}m.isMDXComponent=!0}}]);