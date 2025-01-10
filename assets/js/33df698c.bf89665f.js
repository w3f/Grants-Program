"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[24295],{1605:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"applications/sol2ink","title":"Sol2Ink","description":"- Team Name: SuperColony","source":"@site/applications/sol2ink.md","sourceDirName":"applications","slug":"/applications/sol2ink","permalink":"/applications/sol2ink","draft":false,"unlisted":false,"editUrl":"https://github.com/w3f/Grants-Program/edit/master/applications/sol2ink.md","tags":[],"version":"current","frontMatter":{}}');var s=t(74848),o=t(28453);const r={},a="Sol2Ink",l={},d=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-page_facing_up",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-busts_in_silhouette",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles",id:"team-linkedin-profiles",level:3},{value:"Development Status \ud83d\udcd6",id:"development-status-open_book",level:2},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-nut_and_bolt",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 \u2014 Implement\tSol2Ink cli tool for simple contract parsing",id:"milestone-1--implementsol2ink-cli-tool-for-simple-contract-parsing",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information \u2795",id:"additional-information-heavy_plus_sign",level:2}];function c(e){const n={a:"a",br:"br",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"sol2ink",children:"Sol2Ink"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Team Name:"})," ",(0,s.jsx)(n.a,{href:"https://github.com/Supercolony-net",children:"SuperColony"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Payment Address:"})," ERC 20 ADDRESS (USDT):\n0xE1B19cE32866cDE87F8f59C7C2C5f90E093A6942"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsxs)(n.strong,{children:[(0,s.jsx)(n.a,{href:"https://github.com/w3f/Grants-Program/tree/master#level_slider-levels",children:"Level"}),":"]})," 2"]}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"project-overview-page_facing_up",children:["Project Overview ","\ud83d\udcc4"]}),"\n",(0,s.jsx)(n.h3,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)(n.p,{children:"The goal of this project is to ease the way to Polkadot (Ink!) ecosystem\nfor the current Solidity smart contract developers and dapps written\nin Solidity. Since the ecosystem is relatively new, it may be\ndiscouraging and time-consuming for developers and teams to rewrite\nwhole existing code bases of their smart contract applications into a\ndifferent language (Rust, Ink!)."}),"\n",(0,s.jsx)(n.p,{children:"This project aims to accelerate this process by transpiling existing\nSolidity code into Rust and ink! code, while considering existing\nstandards of these languages and ecosystems. Some of the points which\nare the most time-consuming while doing such transformation are for\nexample rewriting the headers of functions (position of type and name\nidentifiers), different behavior of common data types, as well as\nusage of different primitive types, and many more. If a developer\ndecides to use Sol2Ink, it is still needed for them to check the\ngenerated code and correct some issues which may not be handled well\nby the program, but the first step of transforming the code base is\ncompleted and already has saved the developer a lot of time. A simple\nprototype that was already tested by our developers, which handles\nonly interfaces for now (since it is very simple to transform those),\ncan already decrease the time of rewriting some extensive interfaces\ninto Rust and Ink! from one hour to ten minutes, after correcting\nsmall issues, which the prototype did not consider yet."}),"\n",(0,s.jsx)(n.h3,{id:"project-details",children:"Project Details"}),"\n",(0,s.jsx)(n.p,{children:"Sol2Ink will take the code of an existing smart contract (or existing\nsmart contract application) and transpile the code from Solidity into\nRust. Since it is a smart contract application, it will also use Ink!\nimplementations to make it a deployable smart contract application.\nWhile doing this, the developer will have an option to use existing\nstandards and PSPs, one example may be optional usage of OpenBrush\nstandards (e.g. if there is a call to the ERC-20 interface inside\nthe contract being transformed, the program will use the PSP-22\ninterface from OpenBrush to do the same call). The next step (where\nRust applications differ from Solidity applications) is to use the\ncorrect file structure in the transformed application, and Sol2Ink\nwill handle this as well."}),"\n",(0,s.jsx)(n.p,{children:"This way, we can divide the details of Sol2Ink into a roadmap:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Implement\tSol2Ink cli tool for simple contract parsing"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The user will give Sol2Ink the\ncode they want to transform into Ink! and Rust, Sol2Ink will\ntranspile this code and output the Rust/Ink! code in a new file."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Create\tdocumentation and a website with guides on how to use Sol2Ink"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Users will better understand\nthe processes behind the code transpilation and will be more aware of\npossible issues which may emerge while using Sol2Ink."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Sol2Ink\tupgrade focused on the ability to parse complex smart contract\tapplications"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The user will be able to give Sol2Ink their whole Solidity project, Sol2Ink will transpile the code and output the Rust/Ink! code in files with a comprehensive file structure. At this stage, Sol2Ink should be able to handle generalization or multiple file dapps in a single step"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Integration\tof parsing dependencies and PSP usage option"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"One problem may emerge with\ngeneralization, which exists in Solidity but does not exist in Rust.\nWe can solve this with traits, and this milestone will be focused on\na more efficient way of handling such cases."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Sol2Ink\tweb application interface"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"More user-friendly way of using Sol2Ink, with a better user experience and without the need of downloading additional tools."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Maintenance\tand integration of new ecosystem standards and updates"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The ecosystem is growing each day, each day new standards and tools emerge. Our product aims to give the best results, and we need to keep up with the ecosystem to fulfill this goal."}),"\n",(0,s.jsx)(n.h3,{id:"ecosystem-fit",children:"Ecosystem Fit"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Where\tand how does your project fit into the ecosystem?"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"As there are many products already existing within the Solidity\necosystem, which aim to live in the Polkadot/Ink! ecosystem as well,\nwe think that a lot of processes linked with such transformation are\nrepetitive and time-consuming and can be done faster with such\ntranspiler as Sol2Ink aims to be. Therefore we think, that such a\ntranspiler may speed up the development process for teams\ntransforming Solidity code bases into Rust and Ink!, and also ease\nthe way into this ecosystem for new Ink! developers who want to\ntransform their existing Solidity solutions."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Who\tis your target audience (parachain/dapp/wallet/UI developers,\tdesigners, your own user base, some dapp's userbase, yourself)?"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Solidity developers looking to transform applications into Rust and Ink!."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"What need(s) does your project meet?"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Our project is a tool that will fasten the development process of\ntransforming existing Solidity projects into Rust and Ink!."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Are\tthere any other projects similar to yours in the Substrate /\tPolkadot / Kusama ecosystem?"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["We know about ",(0,s.jsx)(n.a,{href:"https://github.com/hyperledger-labs/solang",children:"Solang"}),", which is a similar project to Sol2Ink, but\nSolang is used for the transition between Solidity and WASM, while Sol2Ink will be a transpiler to readable and editable source code, we are\nnot aware of such projects in the Dotsama ecosystem.\nWe are also aware of ",(0,s.jsx)(n.a,{href:"https://github.com/madfish-solutions/sol2ligo",children:"Sol2Ligo"}),", which is a transpiler from Solidity to Ligo, which should help with migration to Tezos."]}),"\n",(0,s.jsxs)(n.h2,{id:"team-busts_in_silhouette",children:["Team ","\ud83d\udc65"]}),"\n",(0,s.jsx)(n.h3,{id:"team-members",children:"Team members"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Markian Ivanichok"})," (\u0421EO of Supercolony)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Toma Sadova"})," (Product Owner | Supercolony)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Sven Seven"})," (Head of Engineering | Supercolony)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Dominik Kr\xed\u017eo"})," (Blockchain Developer | Supercolony)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Green Baneling"})," (Blockchain Core Rust Engineer)"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"contact",children:"Contact"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Contact Name:"})," Toma Sadova"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Contact Email:"})," ",(0,s.jsx)(n.a,{href:"mailto:toma.sadova@supercolony.net",children:"toma.sadova@supercolony.net"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Website:"})," ",(0,s.jsx)(n.a,{href:"supercolony.net",children:"supercolony.net"})]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"legal-structure",children:"Legal Structure"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Registered Address:"})," The registered office shall be in 16192 Coastal Highway, Lewes, Delaware 19958, County of\nSussex, USA."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Registered Legal Entity:"})," SUPERCOLONY CORP."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"teams-experience",children:"Team's experience"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Markian Ivanichok"}),(0,s.jsx)(n.br,{}),"\n","CEO of Supercolony, Blockchain entrepreneur, Software Engineer. Started my engineering career back when I was 15. Since then, I developed and got a lot of experience in engineering and leadership. Gained entrepreneur experience by founding a couple of startups. Inspired, co-founded and invested in Sector F, one of the top consulting companies in Ukraine that helps entrepreneurs to move faster. Since the beginning of this year, co-founded and led Supercolony, a Polkadot venture studio that is dedicated to building and creating of Polkadot\u2019s ecosystem."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Toma Sadova"}),(0,s.jsx)(n.br,{}),"\n","Product Owner\nToma is a Product Owner of OpenBrush, Head of Education and the main organizer of the ",(0,s.jsx)(n.a,{href:"https://wasm-conference.com/",children:"the biggest WASM conference"}),". Toma started her career when she was 14. Since then, Toma has gained a lot of experience in IT technologies, management, leadership and crypto. She switched 4 career paths and figured out that blockchain/crypto is her calling!"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Sven Seven"}),(0,s.jsx)(n.br,{}),"\n","Blockchain Developer\nSoftware engineer with prod experience since 2015. Master degree Information Security. Has worked in finance, e-commerce, networking domains as full-stack dev. Programming languages are JS, Java, Python, Rust, C++ . Blockchain dev since 2021."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Dominik Kr\xed\u017eo"}),(0,s.jsx)(n.br,{}),"\n","Blockchain Developer\nStarted programming own games at age of 15 as a hobby, then went to University studying informatics and object oriented programming, becoming an Android developer in 2018. In 2017 he started his crypto venture by investing in BTC and Ethereum and getting more knowledge regarding smart contracts and DeFi protocols during DeFi summer 2020. As a programmer, he wanted to know more behind the scenes of smart contracts, so he started to develop his own smart contract applications for Ethereum and then becoming a Rust and Ink! developer in Supercolony, since he believes that WASM with its benefits over EVM is the future of smart contract applications. As a part of his Android developer career, Dominik was working on porting of applications from C++ to Android/Java, for which he also worked on a tool to ease this process, describing the process of transformation of code base from one language to another in his bachelor's thesis."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Green Baneling"}),(0,s.jsx)(n.br,{}),"\n","Blockchain Core Developer",(0,s.jsx)(n.br,{}),"\n","Primary programming languages are: C++, Go, Rust"]}),"\n",(0,s.jsx)(n.p,{children:"Finished the faculty of applied mathematics(Master degree). Participated in programming competitions during education. Has worked as a programmer for around 6 years."}),"\n",(0,s.jsx)(n.p,{children:"Was a freelancer the first year, creating an application for IOS(Swift), creating modules for the desktop application on C++. After that, spent 2 years in a company which created software for TV devices(C++/ Haxe).  After which, for 3 years, worked on different blockchain projects(C++/Go/Rust/Solidity/Js)."}),"\n",(0,s.jsx)(n.h3,{id:"team-code-repos",children:"Team Code Repos"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/Supercolony-net",children:"https://github.com/Supercolony-net"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/sventime",children:"https://github.com/sventime"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/coreggon11",children:"https://github.com/coreggon11"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/xgreenx",children:"https://github.com/xgreenx"})}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"team-linkedin-profiles",children:"Team LinkedIn Profiles"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.linkedin.com/in/mivanichok/",children:"https://www.linkedin.com/in/mivanichok/"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.linkedin.com/in/toma-sadova/",children:"https://www.linkedin.com/in/toma-sadova/"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.linkedin.com/in/sven-seventimes/",children:"https://www.linkedin.com/in/sven-seventimes/"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.linkedin.com/in/dominik-krizo/",children:"https://www.linkedin.com/in/dominik-krizo/"})}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"development-status-open_book",children:["Development Status ","\ud83d\udcd6"]}),"\n",(0,s.jsx)(n.p,{children:"The project development has not started yet, we have just tested a very simple prototype on our commercial projects, which is able to parse Solidity interfaces into Rust traits with Ink! usage."}),"\n",(0,s.jsxs)(n.h2,{id:"development-roadmap-nut_and_bolt",children:["Development Roadmap ","\ud83d\udd29"]}),"\n",(0,s.jsx)(n.h3,{id:"overview-1",children:"Overview"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Total Estimated Duration:"})," 20 weeks"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Full-Time Equivalent (FTE):"})," 1-2"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Total Costs:"})," 36,000 USD"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"milestone-1--implementsol2ink-cli-tool-for-simple-contract-parsing",children:"Milestone 1 \u2014 Implement\tSol2Ink cli tool for simple contract parsing"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Estimated duration:"})," 8 weeks"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"FTE:"}),"  1.5"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Costs:"})," 36,000 USD"]}),"\n"]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"right"},children:"Number"}),(0,s.jsx)(n.th,{children:"Deliverable"}),(0,s.jsx)(n.th,{children:"Specification"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"right"},children:"0a."}),(0,s.jsx)(n.td,{children:"License"}),(0,s.jsx)(n.td,{children:"MIT"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"right"},children:"0b."}),(0,s.jsx)(n.td,{children:"Documentation"}),(0,s.jsx)(n.td,{children:"We will provide a documentation for the user on how to use our tool for simplification of their process of transformation of Solidity code to Rust and Ink! code, along with inline documentation of code so the developers can better understand the processes in the backend"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"right"},children:"1."}),(0,s.jsx)(n.td,{children:"Sol2Ink CLI"}),(0,s.jsx)(n.td,{children:"A CLI application which will take a Solidity file as the input and produce a transformed Rust file with Rust and ink! code as the output"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"right"},children:"2."}),(0,s.jsx)(n.td,{children:"Integrate OpenBrush"}),(0,s.jsx)(n.td,{children:"Since OpenBrush is a tool to ease and fasten the smart contracts development in Ink!, we will add this library to the smart contracts generated by Sol2Ink"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"right"},children:"3."}),(0,s.jsx)(n.td,{children:"Website with guides"}),(0,s.jsx)(n.td,{children:"We will provide a website where we will compare a transformation of Solidity code into Rust and ink! code, along with issues which may occur (for example handling of Assembly blocks etc.)."})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"future-plans",children:"Future Plans"}),"\n",(0,s.jsx)(n.p,{children:"After this grant, we plan to upgrade the parser to handle more complicated Solidity codebases (e.g. generalization, storage manipulation, delegate calls), parsing of whole projects (multiple files) with dependencies and making a web application of this tool. We also plan to maintain the project to keep up with new emerging ecosystem standards and listen to issues from community and update the tool to make the process of transformation a nicer experience for the developers and teams."}),"\n",(0,s.jsxs)(n.h2,{id:"additional-information-heavy_plus_sign",children:["Additional Information ","\u2795"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"How did you hear about the Grants Program?"})," personal recommendation"]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var i=t(96540);const s={},o=i.createContext(s);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);