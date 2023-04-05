"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[502],{99208:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=a(87462),i=(a(67294),a(3905));a(95657);const l={},r="larch - Zombie-net Automation",o={unversionedId:"applications/Zeeve_Parachain_deployment_zoombienet_testing_automation",id:"applications/Zeeve_Parachain_deployment_zoombienet_testing_automation",title:"larch - Zombie-net Automation",description:"- Team Name: Zeeve",source:"@site/applications/Zeeve_Parachain_deployment_zoombienet_testing_automation.md",sourceDirName:"applications",slug:"/applications/Zeeve_Parachain_deployment_zoombienet_testing_automation",permalink:"/Grants-Program/applications/Zeeve_Parachain_deployment_zoombienet_testing_automation",draft:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/applications/Zeeve_Parachain_deployment_zoombienet_testing_automation.md",tags:[],version:"current",frontMatter:{}},p={},s=[{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Team \ud83d\udc65",id:"team-",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles (if available)",id:"team-linkedin-profiles-if-available",level:3},{value:"Development Status \ud83d\udcd6",id:"development-status-",level:2},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 \u2014 Implement Core Zombie-net Automation",id:"milestone-1--implement-core-zombie-net-automation",level:3},{value:"Milestone 2 \u2014 Monitoring",id:"milestone-2--monitoring",level:3},{value:"Application Mockup",id:"application-mockup",level:2},{value:"Dashboard",id:"dashboard",level:3},{value:"Zombie-net network list",id:"zombie-net-network-list",level:3},{value:"Create a new Zombie-net",id:"create-a-new-zombie-net",level:3},{value:"Relaychain, Parachain, specfile and WASM templates",id:"relaychain-parachain-specfile-and-wasm-templates",level:3},{value:"User activity and operation history",id:"user-activity-and-operation-history",level:3},{value:"Technology Stack",id:"technology-stack",level:2},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information \u2795",id:"additional-information-",level:2}],m={toc:s},d="wrapper";function u(e){let{components:t,...a}=e;return(0,i.kt)(d,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"larch---zombie-net-automation"},"larch - Zombie-net Automation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Team Name:")," ",(0,i.kt)("a",{parentName:"p",href:"https://www.zeeve.io"},"Zeeve"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Payment Address:")," Ethereum (USDT/USDC) 0x5E1257E928aa42E3D0cd9E2A7537E37D108D811B")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://github.com/w3f/Grants-Program/tree/master#level_slider-levels"},"Level"),":")," 2"))),(0,i.kt)("h3",{id:"overview"},"Overview"),(0,i.kt)("p",null,"Blockchain adoption is happening at a very rapid rate, with a lot many use cases being implemented and seeing the light of the day. The concept of the parachain enables the possibilities further. While we focus on building the use cases, code them and implement the business logic of it, including the creation of Parachain and then further logic running upon it, we majorly underestimate the DevOps activity to deploy, maintain, scale and manage the parachain itself. This includes initial launch of the parachain, its thorough testing using Zombie-net and scaling it further by providing support for users to create and deploy validator, full and archive nodes with ease as well as to have secure RPC endpoints. The most deficit we see is around advanced analytics and proactive monitoring to ensure a production grade incident management of networks and nodes."),(0,i.kt)("h3",{id:"project-details"},"Project Details"),(0,i.kt)("p",null,"Zeeve will provide a GUI tool to setup the new Substrate zombie-net network with in-depth and flexible configurations in few clicks supporting K8 and native VMs whichever fits the parachains better."),(0,i.kt)("p",null,"A GUI will be built to allow a quick setup of the relaychain, parachain with zombie-net with the desired capabilities to test multiple configurations. This in turn will allow the developers and parachain teams to try multiple chain configurations while setting up the parachains with Zombie-net, as well as to choose different nodes to try and test for the best possibilities on the parachain."),(0,i.kt)("p",null,"This not only will allow configurations on the parachain side but will also allow you to pick from a set of predefined DSL templates on Zombie-net as well as upload the new templates without needing to write the code. The graphical control panel will support all the other configurations or operations required to enable the developer or parachain team to test with as much flexibility as required. These operations include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Restart - after x seconds, will stop the ",(0,i.kt)("inlineCode",{parentName:"li"},"process")," and start again after the ",(0,i.kt)("inlineCode",{parentName:"li"},"x"),"amount of seconds or immediately."),(0,i.kt)("li",{parentName:"ul"},"Stop - will pause (SIGSTOP) the process)"),(0,i.kt)("li",{parentName:"ul"},"Resume - will pause (SIGCONT) the process)"),(0,i.kt)("li",{parentName:"ul"},"Sleep - will allow config to sleep the test-runner for ",(0,i.kt)("inlineCode",{parentName:"li"},"x")," ammount of seconds)")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Test result and logs")),(0,i.kt)("p",null,"The interface will allow the developer to test and see live logs of the test run, post run results and logs on the aforementioned interface. Furthermore, a stack of Prometheus and Grafana will allow easy monitoring of the Zombie-net."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Templating")),(0,i.kt)("p",null,"The control panel will also allow the developer or the parachain team to one-click replicate one of the existing zombie-net configurations, save as template or pick from previously saved template and re-create a new test with some rapid tweaks to it."),(0,i.kt)("h2",{id:"team-"},"Team \ud83d\udc65"),(0,i.kt)("h3",{id:"team-members"},"Team members"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Ghan Vashishtha")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Sankalp Sharma")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Arjun Chamyal")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Rahul Meena"))),(0,i.kt)("h3",{id:"contact"},"Contact"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Contact Name:")," Ghan Vashishtha")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Contact Email:")," ",(0,i.kt)("a",{parentName:"p",href:"mailto:ghan@zeeve.io"},"ghan@zeeve.io"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Website:")," ",(0,i.kt)("a",{parentName:"p",href:"http://www.zeeve.io"},"www.zeeve.io")))),(0,i.kt)("h3",{id:"legal-structure"},"Legal Structure"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Registered Address:")," 1603 Capitol Ave Ste 310, Cheyenne 82001, WY")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Registered Legal Entity:")," Zeeve Inc."))),(0,i.kt)("h3",{id:"teams-experience"},"Team's experience"),(0,i.kt)("p",null,"Founded by a team of experienced professionals and enterprenuers from industry, Zeeve's cofounders collectively have over 45+ years of experience in technology, product development, and various business verticals. Zeeve has built an enterprise-grade no-code Blockchain Infrastructure Automation platform that enables Enterprises, Blockchain Startups, Blockchain Consulting Companies and Web3 Developers to deploy Blockchain nodes and Decentralised Apps within minutes, and manage them with advanced analytics and real-time alerts. In June 2022, the Startup raised $2.65 Million in a Seed Round from Leo Capital and Blu Ventures. It plans to deploy the funds towards product development, augmenting the technology team and enhancing its reach among DApp developers and global corporations, please consider visiting our prior ",(0,i.kt)("a",{parentName:"p",href:"https://www.zeeve.io/platform"},"work"),"."),(0,i.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/Zeeve-App"},"https://github.com/Zeeve-App"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/Zeeve-App/sawtooth-artifacts"},"https://github.com/Zeeve-App/sawtooth-artifacts"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/Zeeve-App/Zeeve-read-the-docs"},"https://github.com/Zeeve-App/Zeeve-read-the-docs")))),(0,i.kt)("p",null,"Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.zeeve.io/about-us"},"https://www.zeeve.io/about-us"))),(0,i.kt)("h3",{id:"team-linkedin-profiles-if-available"},"Team LinkedIn Profiles (if available)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://www.linkedin.com/in/ghan-vashishtha/"},"https://www.linkedin.com/in/ghan-vashishtha/"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://www.linkedin.com/in/sankalp-sharma-502008139/"},"https://www.linkedin.com/in/sankalp-sharma-502008139/"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://www.linkedin.com/in/arjun-chamyal-a4466086/"},"https://www.linkedin.com/in/arjun-chamyal-a4466086/"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://www.linkedin.com/in/rahul-m-0ba16487/"},"https://www.linkedin.com/in/rahul-m-0ba16487/")))),(0,i.kt)("h2",{id:"development-status-"},"Development Status \ud83d\udcd6"),(0,i.kt)("p",null,"Before applying for the Web3 Foundation Grant, the Zeeve team has built a DevOps automation for Polkadot and other substrate chains, also created substrates based relay chains:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Automated Polkadot deployments including validator nodes, archive nodes ",(0,i.kt)("a",{parentName:"p",href:"https://www.zeeve.io/blockchain-protocols/deploy-polkadot-node/"},"here"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Automated Kusama deployments including validator nodes, archive nodes ",(0,i.kt)("a",{parentName:"p",href:"https://www.zeeve.io/blockchain-protocols/deploy-kusama-node/"},"here"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Created a relay chain on substrate with some customisations done at the core to accomodate the tokenomics and custom reward mechanism ",(0,i.kt)("a",{parentName:"p",href:"https://axscan.axiacoin.network/#/explorer"},"here"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Published a ",(0,i.kt)("a",{parentName:"p",href:"https://www.zeeve.io/blog/how-to-use-substrate-to-create-parachains-in-polkadot/"},"blog post")," about the usage and omlememtation of praachains")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The focus for Zeeve will be automating the parachain deployments, dedicated node setups and help with faster testing with zombie-net.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Spoke with David Hawig, Richard Casey and Gautam Dhameja from the Parity team regarding the development of Zeeve and the Web3 Grant application"))),(0,i.kt)("h2",{id:"development-roadmap-"},"Development Roadmap \ud83d\udd29"),(0,i.kt)("h3",{id:"overview-1"},"Overview"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Total Estimated Duration:")," 2 months")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Full-Time Equivalent (FTE):")," 4 FTE")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Total Costs:")," 30,000 USD."))),(0,i.kt)("h3",{id:"milestone-1--implement-core-zombie-net-automation"},"Milestone 1 \u2014 Implement Core Zombie-net Automation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Estimated duration:")," 40 days")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"FTE:")," 4")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Costs:")," 20,000 USD"))),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,i.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,i.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0a."),(0,i.kt)("td",{parentName:"tr",align:null},"License"),(0,i.kt)("td",{parentName:"tr",align:null},"GPLv3")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0b."),(0,i.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,i.kt)("td",{parentName:"tr",align:null},"We will provide both ",(0,i.kt)("strong",{parentName:"td"},"inline documentation")," of the code and a basic ",(0,i.kt)("strong",{parentName:"td"},"tutorial")," that explains how a user can (for example) create a new Substrate based Zombie-net nodes and initiate testing, which will show how the new functionality works.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0c."),(0,i.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,i.kt)("td",{parentName:"tr",align:null},"Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0d."),(0,i.kt)("td",{parentName:"tr",align:null},"Docker/Cluster"),(0,i.kt)("td",{parentName:"tr",align:null},"We will provide a Dockerfile(s)/Cluster Yaml(s) that can be used to test all the functionality delivered with this milestone.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"1."),(0,i.kt)("td",{parentName:"tr",align:null},"Initial Automation"),(0,i.kt)("td",{parentName:"tr",align:null},"We will build the core GUI driven automation to create and deploy the substrate based Zombie-net configurations including relaychain and parachain configurations.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"2."),(0,i.kt)("td",{parentName:"tr",align:null},"Configuration"),(0,i.kt)("td",{parentName:"tr",align:null},"Parachain configuration is critical and complicated, we will provide the GUI based pick and choose for genesis parameters and chain configs to start wtih parachain setup for the desired Zombie-net")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"3."),(0,i.kt)("td",{parentName:"tr",align:null},"Node type support"),(0,i.kt)("td",{parentName:"tr",align:null},"Implement setup of all node types including Full node, Validator node and Collator node for the respective relay chain and parachain within the configured Zombie-net.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"4."),(0,i.kt)("td",{parentName:"tr",align:null},"Cloud agnostic setup"),(0,i.kt)("td",{parentName:"tr",align:null},"The larch setup will be cloud agnostic and it can be installed on the choice of cloud, instructions and documentation will be provided for the same.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"5."),(0,i.kt)("td",{parentName:"tr",align:null},"User management"),(0,i.kt)("td",{parentName:"tr",align:null},"The larch will allow to setup different users with desired permissions and access controls such as add, delete zombie-net, view, delete logs and save, delete templates.")))),(0,i.kt)("h3",{id:"milestone-2--monitoring"},"Milestone 2 \u2014 Monitoring"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Estimated Duration:")," 20 days")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"FTE:")," 2")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Costs:")," 10,000 USD"))),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,i.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,i.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0a."),(0,i.kt)("td",{parentName:"tr",align:null},"License"),(0,i.kt)("td",{parentName:"tr",align:null},"GPLv3")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0b."),(0,i.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,i.kt)("td",{parentName:"tr",align:null},"We will provide both ",(0,i.kt)("strong",{parentName:"td"},"inline documentation")," of the code and a basic ",(0,i.kt)("strong",{parentName:"td"},"tutorial")," that explains how a user can (for example) create a new Zombie-net, test and setup monitoring for it, which will show how the new functionality works.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0c."),(0,i.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,i.kt)("td",{parentName:"tr",align:null},"Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0d."),(0,i.kt)("td",{parentName:"tr",align:null},"Docker/Cluster"),(0,i.kt)("td",{parentName:"tr",align:null},"We will provide a Dockerfile(s)/Cluster Yaml(s) that can be used to test all the functionality delivered with this milestone.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0e."),(0,i.kt)("td",{parentName:"tr",align:null},"Article"),(0,i.kt)("td",{parentName:"tr",align:null},"Using our PR channels, we will publish an ",(0,i.kt)("strong",{parentName:"td"},"article")," that explains the high-level overview of automation as part of the grant, followed by a set of extensive examples.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"1."),(0,i.kt)("td",{parentName:"tr",align:null},"Design monitoring strategy"),(0,i.kt)("td",{parentName:"tr",align:null},"The Zombie-net doesn't provide any embedded monitoring tool, we will with the zombie-net setup automation, automatically setup prometheus and Grafana while configuring the zombie-net.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"2."),(0,i.kt)("td",{parentName:"tr",align:null},"Setup Dashboard"),(0,i.kt)("td",{parentName:"tr",align:null},"The deployment done for Prometheus and Grafana will show standard Dashboard having system resource and zombie-net specific details shown on the aforementioned Grafana GUI Dashboard.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"3."),(0,i.kt)("td",{parentName:"tr",align:null},"Activity"),(0,i.kt)("td",{parentName:"tr",align:null},"The system will log all the activities and operations perform by the different users.")))),(0,i.kt)("h2",{id:"application-mockup"},"Application Mockup"),(0,i.kt)("p",null,"Following are the mockups for high-level application operations, these are subject to change during development basis the requirement and behaviour."),(0,i.kt)("h3",{id:"dashboard"},"Dashboard"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://larch.zeeve.net/images/Dashboard.png",alt:"Dashboard"})),(0,i.kt)("h3",{id:"zombie-net-network-list"},"Zombie-net network list"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://larch.zeeve.net/images/My-Networks.png",alt:"List all created Zombie networks"})),(0,i.kt)("h3",{id:"create-a-new-zombie-net"},"Create a new Zombie-net"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://larch.zeeve.net/images/Create-Networks-Settings.png",alt:"Zombie-net Settings"})),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://larch.zeeve.net/images/Create-Networks-Relaychain-Configuration.png",alt:"Zombie-net Relaychain Configuration"})),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://larch.zeeve.net/images/Create-Networks-Parachain-Configuration.png",alt:"Zombie-net Parachain configuration"})),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://larch.zeeve.net/images/Create-Networks-Collator-Configuration.png",alt:"Zombie-net Collator configuration"})),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://larch.zeeve.net/images/Create-Networks-HRMP-Channels.png",alt:"Zombie-net HRMP configuration"})),(0,i.kt)("h3",{id:"relaychain-parachain-specfile-and-wasm-templates"},"Relaychain, Parachain, specfile and WASM templates"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://larch.zeeve.net/images/Templates-Configuration.png",alt:"Zombie-net Configuration templates"})),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://larch.zeeve.net/images/Templates-Managment.png",alt:"Zombie-net WASM image templates"})),(0,i.kt)("h3",{id:"user-activity-and-operation-history"},"User activity and operation history"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://larch.zeeve.net/images/Activity.png",alt:"User activity and operation history"})),(0,i.kt)("h2",{id:"technology-stack"},"Technology Stack"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"ReactJS")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"NodeJS")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Apache/Nginx")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"TailwindCSS")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"System Scripts")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Kubernetes/Podman/Docker")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Prometheus, Grafana, Telegraph"))),(0,i.kt)("h2",{id:"future-plans"},"Future Plans"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"We will promote the project by giving talks in the community, writing tutorials and videos.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"We will spread the project in Zeeve's developer and client community of 15K+")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"We will also work closely with the developers and clients of the Parity ecosystem for getting feedback and refine our project.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Our long-term plan is to make the tool become one of the default Parachain tools for the Parity ecosystem.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"We will also add more followup, integration with the Zeeve enterprise platform allowing more flexibility for enterprises to built and deploy use case or application specific parachains."))),(0,i.kt)("h2",{id:"additional-information-"},"Additional Information \u2795"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"How did you hear about the Grants Program?")," Web3 Foundation Website / Parity team / a conversation with Richard Casey."))}u.isMDXComponent=!0}}]);