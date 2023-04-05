"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[7828],{58494:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));a(95657);const l={},o="ParaSpell",i={unversionedId:"applications/ParaSpell_follow-up2",id:"applications/ParaSpell_follow-up2",title:"ParaSpell",description:"- Team Name: ParaSpell\u2728",source:"@site/applications/ParaSpell_follow-up2.md",sourceDirName:"applications",slug:"/applications/ParaSpell_follow-up2",permalink:"/Grants-Program/applications/ParaSpell_follow-up2",draft:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/applications/ParaSpell_follow-up2.md",tags:[],version:"current",frontMatter:{}},s={},p=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-",level:2},{value:"Overview \ud83c\udfa8",id:"overview-",level:3},{value:"SDK",id:"sdk",level:4},{value:"UI-V2",id:"ui-v2",level:4},{value:"Docs",id:"docs",level:4},{value:"Architecture \ud83c\udfd7\ufe0f",id:"architecture-\ufe0f",level:4},{value:"Technology Stack  \ud83d\udcbb\ufe0f",id:"technology-stack--\ufe0f",level:4},{value:"Ecosystem Fit  \ud83c\udf33",id:"ecosystem-fit--",level:3},{value:"Team \ud83d\udc65",id:"team-",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team Github Profiles \ud83e\uddd1\u200d\ud83c\udf93",id:"team-github-profiles-",level:3},{value:"Team LinkedIn Profiles \ud83e\uddd1\u200d\ud83c\udf93",id:"team-linkedin-profiles-",level:3},{value:"Development Status \ud83d\udcd6",id:"development-status-",level:2},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-",level:2},{value:"Overview",id:"overview",level:3},{value:"Milestone 1 - Phase 3, make XCM SDK more efficient, add new nodes &amp; rework Localhost network in UI",id:"milestone-1---phase-3-make-xcm-sdk-more-efficient-add-new-nodes--rework-localhost-network-in-ui",level:3},{value:"Future Plans \ud83d\udd2d",id:"future-plans-",level:2},{value:"Additional Information \u2795",id:"additional-information-",level:2},{value:"Project achievements in chronological order  \u231b\ufe0f",id:"project-achievements-in-chronological-order--\ufe0f",level:5}],c={toc:p},m="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"paraspell"},"ParaSpell"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Team Name:")," ParaSpell\u2728"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Payment Address:")," 0xB7d45Ef044fD9342e4c03e28D9e9bddA2d4Fe3e1 (USDC)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/w3f/Grants-Program/tree/master#level_slider-levels"},"Level"),":")," 1 \ud83d\udc23")),(0,r.kt)("h2",{id:"project-overview-"},"Project Overview \ud83d\udcc4"),(0,r.kt)("p",null,"Previously completed grants:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/w3f/Grants-Program/pull/1118"},"Phase 1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/w3f/Grants-Program/pull/1245"},"Phase 2"))),(0,r.kt)("p",null,"What is ParaSpell:\nParaSpell is XCM & XCMP Developer tool ment to ease integration of cross-chain functionality into dApps. As we have learnt by now, cross-chain experience between Parachains can be very diverse. ParaSpell means to unify this experience by doing all the research for developers. We have wrapped all XCM pallets from compatible nodes into simple patterns from which it is easy to create XCM call. As an example we provide image below."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/55763425/218987451-2bfc9526-8f2b-4477-8c42-8c70cbcb6ec4.jpg",alt:"img1"})),(0,r.kt)("p",null,"In this image we can see, that ParaSpell saves much time to developers. Just one call can contain multiple lines of JSON which would otherwise have to be integrated manually by developer. ParaSpell does it in marginally less lines and hides complex logic of building message which ensures, that messages are constructed correctly. This call in the end results into following lengthy extrinsic:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/55763425/218987583-f5fb10b2-2e0c-4f36-b01c-0d610deab1c6.jpg",alt:"img2"})),(0,r.kt)("p",null,"Following extrinsic can be subscribed into and we can check for it's events on front end. ParaSpell provides front end for testing XCM transactions and XCM called ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paraspell/ui-v2"},"UI-V2"),". This UI is also deployed on netlify so users only have to run local network to start testing. UI also provides ability to open or close HRMP channels or test out XYK pool functionality that was implemented in collaboration with HydraDX team. In the picture below we provide overview of the UI.\n",(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/55763425/218989950-acb681e3-b511-452b-bc3a-c9e5049f7dce.png%22",alt:"img3"})),(0,r.kt)("h3",{id:"overview-"},"Overview \ud83c\udfa8"),(0,r.kt)("p",null,"ParaSpell is split into three main repositories at the moment:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/paraspell/xcm-sdk"},"XCM SDK"),": Meant to unify cross-chain experience on Substrate. Can serve any dApp developer that wishes to integrate XCM or other pallets support for they app."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/paraspell/ui-v2"},"UI-V2"),": Allows for launching local network and testing XCM or HRMP channels across that local network"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/paraspell/docs"},"Docs"),": Extensive documentary for overview of ParaSpell, guide for SDK and UI")),(0,r.kt)("h4",{id:"sdk"},"SDK"),(0,r.kt)("p",null,"This SDK currently support 42 compatible XCM nodes.  They can transfer XCM messages in three different scenarios. "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Parachain to Parachain - HRMP"),(0,r.kt)("li",{parentName:"ul"},"Parachain to Relay chain - UMP"),(0,r.kt)("li",{parentName:"ul"},"Relay chain to Parachain - DMP")),(0,r.kt)("p",null,"SDK contains many useful features that allow for easier inntegration:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Builder pattern implementation, easy to construct XCM calls, much more used recently for simplicity of implementation.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Suggestions, SDK contains TYPES that help to guide developer through integration. For example he get's compatible nodes suggested.\n",(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/55763425/219314223-79c31085-2e90-4dc7-ad51-da96de730ea0.png",alt:"1_59xApnboumYhzuRHKx60TA"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Console printouts, SDK allows for printing into console so developer can alway check if call they constructed is correct.\n",(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/55763425/219314235-1da52511-b4e8-4a41-bdaa-04fa6a9e8a48.png",alt:"1_2KT6Z1rxxprmE03XWYY-HA"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Exporting registered assets for each compatible node in many useful functions")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Exporting supported XCM pallets for each compatible node in useful functions"))),(0,r.kt)("p",null,"And more.. "),(0,r.kt)("h4",{id:"ui-v2"},"UI-V2"),(0,r.kt)("p",null,"UI is used as testing tool for Parachain developers, they can simply add their node into network and test it with HRMP channels as well as XCM transfers. UI also allows dApp developers to test and learn XCM before integrating it from our SDK."),(0,r.kt)("p",null,"UI is made to be as simple to use as possible. It is now also deployed on netlify so developers only have to start local network from configuration file provided by ParaSpell which starts network of Relay chain and 3 different Parachains (Bifrost,Karura & Pichiu)"),(0,r.kt)("p",null,"Below are some examples of UI with running network:\n",(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/55763425/219366458-8873418e-9487-4762-8327-56c3294accdd.png",alt:"img4"})),(0,r.kt)("p",null,"Above we can see open/ close channel screen. It is simple to work with and intuitive. Nodes are pulled from relay chain by query so if network is not running you cannot see any nodes."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/55763425/219366638-38ebcdd7-5ff6-4507-8209-fc7f3ccac348.png",alt:"img5"})),(0,r.kt)("p",null,"Above we can observe, that UI contains simple Wallet login with test accounts."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/55763425/219366771-be566565-8bf1-477b-b7c8-3eacec6f63a0.png",alt:"img6"})),(0,r.kt)("p",null,"Above we can see XCM screen which is also very simple to navigate and nodes are pulled from relay chain by query. "),(0,r.kt)("h4",{id:"docs"},"Docs"),(0,r.kt)("p",null,"Docs contain important information regarding SDK, UI and other repositories that are in ParaSpell or ParaSpell contributed to / collaborated with.\nThe key areas are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Introduction\n",(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/55763425/219368826-2bb5474f-a76f-4828-be15-c3274d9ae10a.png",alt:"img7"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Guide on importing SDK\n",(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/55763425/219368879-8bd4fd5a-a1f5-4417-8620-d8b279c99733.png",alt:"img8"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Guide on launching local network and UI\n",(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/55763425/219369125-ce0756d7-49ef-437e-98b0-2336aa250137.png",alt:"img10"})))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Guide on executing operations in UI\n",(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/55763425/219368943-4115808b-1322-4551-b03a-b693bec285a2.png",alt:"img11"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Guide on implementing SDK\n",(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/55763425/219369060-1c0c1076-65e5-4997-a1c6-b99da9f33bac.png",alt:"img12"})))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Important links\n",(0,r.kt)("img",{parentName:"li",src:"https://user-images.githubusercontent.com/55763425/219369013-e147d239-28a2-4701-9c16-2614b975d210.png",alt:"img13"}))),(0,r.kt)("h4",{id:"architecture-\ufe0f"},"Architecture \ud83c\udfd7\ufe0f"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/55763425/198412240-e031d877-c5d8-4952-9048-2e1256ba4469.svg",alt:"screenFlow"})),(0,r.kt)("p",null,"UI is purposely designed to be as simple as possible. This guarantees, that all tasks can be done quickly and without extended searching. All necessary screens also feature notifications which will as a milestone explain be callback reactive. The loading screen is only present on the first application & network startup, once accessing the same screen after the application was loaded it will be skipped automatically. The screen serves to register necessary assets in parachain nodes. This is only required to be run once per network startup."),(0,r.kt)("p",null,"SDK currently handles transfers to 42 compatible Parachains (all XCM Palletts) (",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paraspell/sdk/"},"ParaSpell SDK"),") and also can transfer to both Relay chains. It is easy to construct calls as is but we want to make it even easier and more developer friendly. "),(0,r.kt)("h4",{id:"technology-stack--\ufe0f"},"Technology Stack  \ud83d\udcbb\ufe0f"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Vue.js"),(0,r.kt)("li",{parentName:"ul"},"Node.js"),(0,r.kt)("li",{parentName:"ul"},"Typescript"),(0,r.kt)("li",{parentName:"ul"},"Polkadot api libraries"),(0,r.kt)("li",{parentName:"ul"},"Make"),(0,r.kt)("li",{parentName:"ul"},"Parachain launch"),(0,r.kt)("li",{parentName:"ul"},"Substrate compatible nodes (For now Rococo, Pichiu(Kylin network), Bifrost & Acala)")),(0,r.kt)("h3",{id:"ecosystem-fit--"},"Ecosystem Fit  \ud83c\udf33"),(0,r.kt)("p",null,"There are not many XCM & XCMP related development tools released currently. We aim to aid this mostly empty space and help developers to understand XCM & XCMP as the current state-of-the-art technology by providing documentation and a user interface in which they can do development tasks more easily and faster."),(0,r.kt)("p",null,"In Polkadot and Kusama ecosystem, there are few XCM related tools in development. For example Moonbeam XCM SDK was released only recently. We bring comparison table that compares our ParaSpell SDK to Moonbeam SDK\n| Features | ParaSpell XCM SDK | Moonbeam XCM SDK |\n| -----: | ----------- | ------------- |\n| Number of packages user has to install | User needs to install only 1 package | User needs to install 2 packages |\n| Support for Parachains | Already integrated for every XCM compatible pallet Link to implementation ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paraspell/sdk/"},"ParaSpell SDK"),'  | Every new node has to be added manually |\n| Build pattern | Integrated as intuitive as possible | Integrated, not as intuitive to implement however |\n| Support for asset pallet operations | Integrated  | Not integrated |\n| Support for HRMP pallet operations | Integrated users can open & close HRMP channels on their local chain (Useful feature for devs) | Not integrated |\n| Support for checking details that do not change | Integrated & also be covered with some error handling eg (too little ammount being sent, not sufficient for XCM transfer) | Integrated in form of small "map" for different Tokens & Node IDs |\n| Support for Axelar GMP (General message passing) that will connect Substrate with EVM chains | Planned to be implemented in the future | No data |'),(0,r.kt)("p",null,'Unlike the already mentioned "Moonbeam XCM" platform ParaSpell provides UI enhancement that uses our XCM SDK and users can try/learn technology from it. ParaSpell also includes support for 42 Substrate Parachains (',(0,r.kt)("a",{parentName:"p",href:"https://github.com/paraspell/sdk/"},"ParaSpell SDK")," that have XCM pallets compared to Moonbeam XCM to which users have to implement compatible nodes manually. ParaSpell SDK only needs one package compared to Moonbeam XCM which has total of two. Compared to Moonbeam XCM which contains only XCM calls ParaSpell also contains calls that can open or close HRMP channels. We also include support for Parachains that have template pallet for XCM called polkadotXCM this pallet is a little harder to work with than xTokens, even more for inexperienced developers."),(0,r.kt)("p",null,"Another comparison worth mentioning is UI vs Morph which is also enhancement of XCM UI Transfer tool\n| Features | ParaSpell XCM UI | Morph |\n| -----: | ----------- | ------------- |\n| Focus: | Developers & users that wish to try XCM locally first | Users |\n| Wiki: | Comprehensive Wiki explaining XCM, how to add assets to UI & Nodes and more implemented | Not implemented |\n| Support for transfers: | In three different scenarios | In two scenarios |\n| Support for local network configuration: | Fully implemented example network configuration that uses maintained Parachain-launch library | Not implemented |\n| Support for HRMP channel opening/closing: | Fully implemented | Not implemented |"),(0,r.kt)("p",null,'Unlike the already mentioned "Morph" platform ParaSpell focuses more on developers. ParaSpell features complete network install and startup configuration in one single command. This automatization ensures, that developers do not need to do any extra tasks when they wish to run development nodes locally. ParaSpell also allows developers to open and close HRMP channels between Parachains they connected. Like "Morph", ParaSpell can also transfer fungible tokens in three scenarios. From Parachains to Relay chain, from Relay chain to Parachains & from Parachains to Parachains.'),(0,r.kt)("p",null,"We are currently in talks with several Parachain teams that like the idea of unified SDK for XCM transfers as much as we do. SDK that unifies XCM can be very helpful for entire ecosystem in our opinion."),(0,r.kt)("p",null,"Our target audiences are Web3 projects and starting/current blockchain developers."),(0,r.kt)("h2",{id:"team-"},"Team \ud83d\udc65"),(0,r.kt)("h3",{id:"team-members"},"Team members"),(0,r.kt)("p",null,"Du\u0161an Morh\xe1\u010d - Student, project Founder &\xa0Core Dev. Faculty of Informatics and Information Technologies STU in Bratislava"),(0,r.kt)("p",null,"Michael Absolon - Student, SDK Core Dev. Faculty of Informatics and Information Technologies STU in Bratislava"),(0,r.kt)("h3",{id:"contact"},"Contact"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Contact Name:")," Du\u0161an Morh\xe1\u010d"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Contact Email:")," ",(0,r.kt)("a",{parentName:"li",href:"mailto:dudo.morhac@gmail.com"},"dudo.morhac@gmail.com"))),(0,r.kt)("h3",{id:"legal-structure"},"Legal Structure"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Registered Address:")," Tom\xe1\u0161ovsk\xe1 453/2, Kalinovo 98501, Slovak Republic"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Registered Legal Entity:")," Du\u0161an Morh\xe1\u010d ml.")),(0,r.kt)("h3",{id:"teams-experience"},"Team's experience"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Du\u0161an is the founder & researcher behind this project and he has successfully presented it at the international conference ICECET2022 held in Prague from which there is an article regarding XCMP & ParaSpell project. It is published by ",(0,r.kt)("a",{parentName:"p",href:"https://ieeexplore.ieee.org/document/9872938"},"IEEE"),". Du\u0161an also studies Blockchain technology and had a bachelor's thesis about cross-blockchain sharing from which this idea was born. Du\u0161an also continues research on this idea in his Master's thesis. He is actively working on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paraspell"},"ParaSpell")," full-time & has also participated in other ecosystem projects. Recently he attended Polkadot Blockchain Academy 2023 in Buenos Aires which gave him a lot of insight into the ecosystem and he also graduated from the academy successfully.\n","![img14]","(",(0,r.kt)("a",{parentName:"p",href:"https://user-images.githubusercontent.com/55763425/223093342-7d947a57-b114-4260-8999-fd4506adc76e.jpg%22"},'https://user-images.githubusercontent.com/55763425/223093342-7d947a57-b114-4260-8999-fd4506adc76e.jpg"'),' width="380" height="280")')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Michael is a dedicated TypeScript developer with 2 years of full-time experience in the Web2 sphere. Michael's expertise in this field was further solidified in 2019 when he won first place in the Junior Internet Web competition for his online multiplayer game, which was written in JavaScript. In addition to his professional background, Michael also achieved a bachelor's degree in the same computer science University as Du\u0161an and he is currently pursuing a master's degree which focuses on Blockchain. His passion for technology led him to explore Blockchain technology in his free time. He was recently offered the opportunity to work on ParaSpell XCM SDK with Du\u0161an and he delivered many of the key features SDK now offers."))),(0,r.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/paraspell/xcm-sdk"},"https://github.com/paraspell/xcm-sdk")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/paraspell/ui-v2"},"https://github.com/paraspell/ui-v2")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/paraspell/docs"},"https://github.com/paraspell/docs"))),(0,r.kt)("h3",{id:"team-github-profiles-"},"Team Github Profiles \ud83e\uddd1\u200d\ud83c\udf93"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/dudo50"},"https://github.com/dudo50")," Du\u0161an Morh\xe1\u010d"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/michaeldev5"},"https://github.com/michaeldev5")," Michael Absolon")),(0,r.kt)("h3",{id:"team-linkedin-profiles-"},"Team LinkedIn Profiles \ud83e\uddd1\u200d\ud83c\udf93"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/dudo50/"},"https://www.linkedin.com/in/dudo50/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/michael--absolon/"},"https://www.linkedin.com/in/michael--absolon/"))),(0,r.kt)("h2",{id:"development-status-"},"Development Status \ud83d\udcd6"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/paraspell/xcm-sdk"},"SDK")," is currently released into main and is in version that is fully operable. There are still some tweaks we plan to add and make, they are mentioned below. ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paraspell/ui-v2"},"UI-V2")," currently runs on state-of-the-art technology version VueJS 3 and newest version of Nuxt. It deprecated V1 and introduced much smoother interface and modules brought from subscaffold template ParaSpell contributed to. ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paraspell/docs"},"Docs")," are currently in ready state but there is still some tweaking to do."),(0,r.kt)("p",null,"Sidenote: We have recently developed article about Polkadot &\xa0Paraspell called Enhancing XCMP Interoperability Across Polkadot Paraverse and it was accepted to International IEEE ICBC 2023 conference held in Dubai."),(0,r.kt)("h2",{id:"development-roadmap-"},"Development Roadmap \ud83d\udd29"),(0,r.kt)("h3",{id:"overview"},"Overview"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 2 months"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Full-Time Equivalent (FTE):")," 1 FTE"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Total Costs:")," 10,000 USD")),(0,r.kt)("h3",{id:"milestone-1---phase-3-make-xcm-sdk-more-efficient-add-new-nodes--rework-localhost-network-in-ui"},"Milestone 1 - Phase 3, make XCM SDK more efficient, add new nodes & rework Localhost network in UI"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Estimated duration:")," 2 months \u231b\ufe0f"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"FTE:"),"  1"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Costs:")," 10,000 USD \ud83d\udcb0\ufe0f")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,r.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,r.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0a."),(0,r.kt)("td",{parentName:"tr",align:null},"License"),(0,r.kt)("td",{parentName:"tr",align:null},"MIT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0b."),(0,r.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,r.kt)("td",{parentName:"tr",align:null},"We will provide both ",(0,r.kt)("strong",{parentName:"td"},"inline documentation")," of the code and a usage explanation in readme.md")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0c."),(0,r.kt)("td",{parentName:"tr",align:null},"Testing and Testing Guide"),(0,r.kt)("td",{parentName:"tr",align:null},"SDK Core UNIT tests will be provided for xTokens Pallet, HRMP pallet, polkadotXCM pallet")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0d."),(0,r.kt)("td",{parentName:"tr",align:null},"Docker"),(0,r.kt)("td",{parentName:"tr",align:null},"Docker file that allows to test ParaSpell SDK through ParaSpell UI will be provided.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0e."),(0,r.kt)("td",{parentName:"tr",align:null},"Create Medium article about development of Phase 3 ParaSpell"),(0,r.kt)("td",{parentName:"tr",align:null},"Add article covering new features &\xa0improvements brought in Phase3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"1."),(0,r.kt)("td",{parentName:"tr",align:null},"Merge currencyId & currency in XCM Transfers"),(0,r.kt)("td",{parentName:"tr",align:null},"Merge currency ID and currency symbol into one so user do not need to enther both. Raised in issue: ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/paraspell/xcm-sdk/issues/16"},"https://github.com/paraspell/xcm-sdk/issues/16"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"2.a"),(0,r.kt)("td",{parentName:"tr",align:null},"Add support for new compatible nodes in DMP Scenario (Downwards message passing)"),(0,r.kt)("td",{parentName:"tr",align:null},"Check for new Parachain support & update Parachains, that have new compatibility with other Parachains in DMP Scenario & Update list of ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/paraspell/xcm-sdk/blob/main/docs/supportedNodes.md"},"compatible Parachains")," accordingly")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"2.b"),(0,r.kt)("td",{parentName:"tr",align:null},"Add support for new compatible nodes in UMP Scenario (Upwards message passing)"),(0,r.kt)("td",{parentName:"tr",align:null},"Check for new Parachain support & update Parachains, that have new compatibility with other Parachains in UMP Scenario & Update list of ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/paraspell/xcm-sdk/blob/main/docs/supportedNodes.md"},"compatible Parachains")," accordingly")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"2.c"),(0,r.kt)("td",{parentName:"tr",align:null},"Add support for new compatible nodes in HRMP Scenario (Horizontall message passing)"),(0,r.kt)("td",{parentName:"tr",align:null},"Check for new Parachain support & update Parachains, that have new compatibility with other Parachains in HRMP Scenario & Update list of ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/paraspell/xcm-sdk/blob/main/docs/supportedNodes.md"},"compatible Parachains")," accordingly")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"3."),(0,r.kt)("td",{parentName:"tr",align:null},"Rework Utils.ts to remove huge switch that constructs message"),(0,r.kt)("td",{parentName:"tr",align:null},"Rework construct XCM message function to not have switch and be more efficient in construction - ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/paraspell/xcm-sdk/blob/main/src/utils.ts#L344"},"link"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"4.a"),(0,r.kt)("td",{parentName:"tr",align:null},"Deprecate Parachain-launch & replace it with Zombienet I"),(0,r.kt)("td",{parentName:"tr",align:null},"Replace network startup configuration from Parachain-launch library into state of the art technology called Zombienet ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/paraspell/ui-v2/blob/main/Makefile#L5"},"link1"),", ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/paraspell/ui-v2/blob/main/paraspell-network-config.yml"},"link2"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"4.b"),(0,r.kt)("td",{parentName:"tr",align:null},"Deprecate Parachain-launch & replace it with Zombienet II"),(0,r.kt)("td",{parentName:"tr",align:null},"Update ParaSpell Docs")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"5."),(0,r.kt)("td",{parentName:"tr",align:null},"Add suggestions we received in our previous grant evaluations (If not added already)"),(0,r.kt)("td",{parentName:"tr",align:null},"Add suggestions from our phase1 and phase2 proposal evaluations if they were not added already")))),(0,r.kt)("h2",{id:"future-plans-"},"Future Plans \ud83d\udd2d"),(0,r.kt)("p",null,"Once everything will be implemented according to the proposed plan application will still be under constant improvement as technology will progress. For example, once the XCMP protocol will be released we wish to deprecate the HRMP protocol we currently use for channels."),(0,r.kt)("p",null,"In a long run, we also want to improve design of the UI, add new features that can be useful for developers and support for new nodes."),(0,r.kt)("p",null,"Project goal is that SDK will serve dApp developers and UI will teach new substrate developers to use XCM and will serve to existing substrate developers to test their freshly baked Parachains."),(0,r.kt)("h2",{id:"additional-information-"},"Additional Information \u2795"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"How did you hear about the Grants Program?")," Personal recommendation"),(0,r.kt)("h5",{id:"project-achievements-in-chronological-order--\ufe0f"},"Project achievements in chronological order  \u231b\ufe0f"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud83d\udcd9 Article about project created & presented on international conference ICECET2022 held in Prague (450 out of 1000+ articles accepted) Link to IEEE publication - ",(0,r.kt)("a",{parentName:"li",href:"https://ieeexplore.ieee.org/document/9872938/"},"IEEE Sharing Fungible Assets Across Polkadot Paraverse")),(0,r.kt)("li",{parentName:"ul"},"\ud83e\udd48 2nd Prize, Build a XCM related Tool for Moonbeam - Polkadot North America Hackathon ",(0,r.kt)("a",{parentName:"li",href:"https://devpost.com/software/polkachange-cross-blockchain-transfer-tool"},"Hackathon entry")),(0,r.kt)("li",{parentName:"ul"},"\ud83e\udd49 3rd Prize, EVM+ DApp for aUSD yield - Polkadot North America Hackathon ",(0,r.kt)("a",{parentName:"li",href:"https://devpost.com/software/polkachange-cross-blockchain-transfer-tool"},"Hackathon entry")),(0,r.kt)("li",{parentName:"ul"},"\ud83c\udf88 Web 3 Foundation base grant ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/w3f/Grants-Program/pull/1118"},"Application"),", ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/w3f/Grant-Milestone-Delivery/pull/584"},"Delivery")),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udc0d ",(0,r.kt)("a",{parentName:"li",href:"https://bsx.fi/"},"Basilisk")," treasury proposal 2/2 Approved ",(0,r.kt)("a",{parentName:"li",href:"https://basilisk.subsquare.io/treasury/proposal/2"},"link"),", ",(0,r.kt)("a",{parentName:"li",href:"https://basilisk.subsquare.io/treasury/proposal/4"},"link2")),(0,r.kt)("li",{parentName:"ul"},"\u2b50\ufe0f ",(0,r.kt)("a",{parentName:"li",href:"https://astar.network/"},"Astar")," XCM bounty Polkadot hackathon Latam Bounty ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/AstarNetwork/AstarBounties/pull/17"},"link")),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udd2d Web 3 Foundation phase 2 grant Milestone 3 / 3 delivered ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/w3f/Grants-Program/pull/1245"},"Application"),", ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/w3f/Grant-Milestone-Delivery/pull/670"},"Delivery1"),", ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/w3f/Grant-Milestone-Delivery/pull/715"},"Delivery 2 & 3")),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udcd5  Article about Polkadot & ParaSpell created &\xa0accepted to be presented at international cross-chain conference IEEE ICBC 2023 ","[links TBA]")))}d.isMDXComponent=!0}}]);