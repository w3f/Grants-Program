"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[30559],{3718:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"applications/patron","title":"Patron","description":"- Team Name: 727.ventures","source":"@site/applications/patron.md","sourceDirName":"applications","slug":"/applications/patron","permalink":"/applications/patron","draft":false,"unlisted":false,"editUrl":"https://github.com/w3f/Grants-Program/edit/master/applications/patron.md","tags":[],"version":"current","frontMatter":{}}');var r=t(74848),s=t(28453);const a={},o="Patron",l={},c=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-page_facing_up",level:2},{value:"Overview",id:"overview",level:3},{value:"Existing problems",id:"existing-problems",level:2},{value:"Project details",id:"project-details",level:2},{value:"Smart contract explorer",id:"smart-contract-explorer",level:3},{value:"Smart contract verification module",id:"smart-contract-verification-module",level:3},{value:"Deployment tool",id:"deployment-tool",level:3},{value:"Future work",id:"future-work",level:2},{value:"Smart contract manager",id:"smart-contract-manager",level:3},{value:"Build/Compile flow",id:"buildcompile-flow",level:3},{value:"Vulnerability scanning and bug bounty program",id:"vulnerability-scanning-and-bug-bounty-program",level:3},{value:"Scripting functionality",id:"scripting-functionality",level:3},{value:"Ecosystem fit",id:"ecosystem-fit",level:2},{value:"Where and how does your project fit into the ecosystem?",id:"where-and-how-does-your-project-fit-into-the-ecosystem",level:3},{value:"Who is your target audience?",id:"who-is-your-target-audience",level:3},{value:"What need(s) does your project meet?",id:"what-needs-does-your-project-meet",level:3},{value:"Are there any other projects similar to yours in the Substrate/Polkadot/Kusama ecosystem?",id:"are-there-any-other-projects-similar-to-yours-in-the-substratepolkadotkusama-ecosystem",level:3},{value:"Team members",id:"team-members",level:2},{value:"Development roadmap",id:"development-roadmap",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 - MVP with verification functionality only",id:"milestone-1---mvp-with-verification-functionality-only",level:3},{value:"Additional Information \u2795",id:"additional-information-heavy_plus_sign",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",mermaid:"mermaid",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"patron",children:"Patron"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Team Name:"})," ",(0,r.jsx)(n.a,{href:"https://github.com/727-Ventures",children:"727.ventures"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Payment Address:"})," ERC 20 ADDRESS (DAI):\n0x352F779203202c99699CdA8cc95adF06CcC8abEf"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsxs)(n.strong,{children:[(0,r.jsx)(n.a,{href:"https://github.com/w3f/Grants-Program/tree/master#level_slider-levels",children:"Level"}),":"]})," 3"]}),"\n"]}),"\n",(0,r.jsxs)(n.h2,{id:"project-overview-page_facing_up",children:["Project Overview ","\ud83d\udcc4"]}),"\n",(0,r.jsx)(n.p,{children:"Patron is your one stop smart contract manager for Polkadot ecosystem."}),"\n",(0,r.jsxs)(n.p,{children:["Patron's tech stack consists of Rust (with ",(0,r.jsx)(n.a,{href:"https://docs.rs/axum",children:(0,r.jsx)(n.code,{children:"axum"})})," being used as an HTTP server), TypeScript (React, Next.js, polkadot{.js}), PostgreSQL."]}),"\n",(0,r.jsx)(n.h3,{id:"overview",children:"Overview"}),"\n",(0,r.jsx)(n.p,{children:"Nowadays, smart contracts are one of the main instruments of development in the blockchain world. As blockchain itself should be open and reliable, we want to create a registry of all available contracts, so everyone could understand the risks and check whether a specific contract is safe or not."}),"\n",(0,r.jsx)(n.p,{children:"The other side of it - manager of smart contracts, so every developer could manage his own contracts just like using GitHub. It is very important for users to have connection with what developers do, so that will increase trust between them."}),"\n",(0,r.jsx)(n.h2,{id:"existing-problems",children:"Existing problems"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Seamless verification \u2705. An ability to seamless get your on-chain deployed contract logic verified and matched with existing source code, using the usual deployment flow without obscure actions."}),"\n",(0,r.jsx)(n.li,{children:"Inefficient build flow. No automatic build flow results in awful developer experience for those developing on ink!. This means that developers have to manually start builds and manually deploy contract on each development iteration."}),"\n",(0,r.jsx)(n.li,{children:"Inefficient contract deployment. CLI/script deployment usually are not sufficient for local/testnet development while existing UI instruments are rather complicated .\nAlso, there is no common deploy flow for every stage - local/testnet/production, a tool that would combine both CLI automation and UI playground."}),"\n",(0,r.jsx)(n.li,{children:"Unified contract management. Deployed smart contract management is currently done with the usage of hard-to-use CLI tools or UI instruments with just the basic features available. Also, developer contract management(UI used during development) and post-deployment contract management are different tools and interfaces(UIs)."}),"\n",(0,r.jsx)(n.li,{children:"Vulnerability research is done mostly ad-hoc, with no unified platform being available to assist users in covering common vulnerabilities. Ecosystem also lacks automatic vulnerability scanning platform, which will catch common mistakes in smart contracts that could lead to security issues."}),"\n",(0,r.jsx)(n.li,{children:"Interaction with external resources (like HTTP APIs) based on events is obscure and has to be implemented manually."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"project-details",children:"Project details"}),"\n",(0,r.jsxs)(n.p,{children:["UI concept can be previewed ",(0,r.jsx)(n.a,{href:"https://www.figma.com/file/Q50Z11g0LKROslWIIbgR8K/Patron-Concept",children:"here"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"smart-contract-explorer",children:"Smart contract explorer"}),"\n",(0,r.jsx)(n.p,{children:"Explorer that behaves similarly to Subscan, which allows users to find smart contracts by their address\nand see the data of the smart contract (code, dependencies, version of the compiler, chain etc.)."}),"\n",(0,r.jsx)(n.h3,{id:"smart-contract-verification-module",children:"Smart contract verification module"}),"\n",(0,r.jsx)(n.p,{children:"As part of our deployment flow, the verification module will provide a reproducible verification environment to build and verify ink! smart contracts."}),"\n",(0,r.jsx)(n.p,{children:"Users will be able to supply smart contract code and tooling versions, which will be invoked inside of an isolated environment."}),"\n",(0,r.jsx)(n.p,{children:"After user supplied code build, smart contract explorer users can see verification details (similar to how it's implemented in EtherScan)."}),"\n",(0,r.jsx)(n.p,{children:"To start using verification module, users will need to pay a fee. This will protect the verification module from abuse."}),"\n",(0,r.jsx)(n.mermaid,{value:"sequenceDiagram\n    User->>+Patron: Account verification (to prevent build system abuse)\n    User->>+Build system: Smart contract code and build information\n    Build system->>+Patron: Verified smart contract\n    Patron->>+User: Verified smart contract\n    User->>+Patron: Deployment request (without passing private keys)"}),"\n",(0,r.jsx)(n.h3,{id:"deployment-tool",children:"Deployment tool"}),"\n",(0,r.jsx)(n.p,{children:"As part of our platform, we plan to provide users with a unified deployment tool that builds and publishes smart contracts for popular mainnets and testnets."}),"\n",(0,r.jsx)(n.p,{children:"The contract build process is done on our platform side using isolated containers and contract verification workflow, while the deployment itself is done on user's side,\nwithout delegating any private keys to us."}),"\n",(0,r.jsx)(n.p,{children:"Eventually, we plan to unify our tools into Patron CLI, allowing developers to create new ink! contracts,\nuse existing smart contract templates, transpile existing Solidity contracts, or generate Typechain bindings\nwithout leaving the same unified interface they will already be familiar with."}),"\n",(0,r.jsx)(n.h2,{id:"future-work",children:"Future work"}),"\n",(0,r.jsx)(n.p,{children:"Our long-term plans are to become a unified solution for developers to verify and deploy smart contracts, and for regular users to discover new smart contracts on."}),"\n",(0,r.jsx)(n.p,{children:"We are eventually planning on providing monetization features in Patron, however the details are to be worked on later. We will not gatekeep\nusers from the general hosted Patron functionality, while also providing all the necessary means to deploy a self-hosted instance."}),"\n",(0,r.jsx)(n.h3,{id:"smart-contract-manager",children:"Smart contract manager"}),"\n",(0,r.jsx)(n.p,{children:"Manager that will allow users to register and deploy their contracts and invoke various actions on existing contracts available on the platform, such as periodic invocation and vulnerability scanning."}),"\n",(0,r.jsx)(n.p,{children:"Unified ink! smart contract manager solution allows us to provide improved transparency (by building a contract ourselves and publishing it or by verifying an already published contract to match the provided source code), security (integrated vulnerability scanning, audit publishment capabilities) and versatility (periodic contract invocation, integrated scripting features.)."}),"\n",(0,r.jsx)(n.p,{children:"Smart contract manager should provide most (if not all) of its functionality while keeping user\u2019s private keys private, without delegating them to Patron."}),"\n",(0,r.jsx)(n.h3,{id:"buildcompile-flow",children:"Build/Compile flow"}),"\n",(0,r.jsx)(n.p,{children:"Our unified deployment tool will also include code watching capabilities, allowing developers to quickly test application locally in an interactive fashion, without wasting time on manual smart contract deployment and instantiation."}),"\n",(0,r.jsx)(n.h3,{id:"vulnerability-scanning-and-bug-bounty-program",children:"Vulnerability scanning and bug bounty program"}),"\n",(0,r.jsx)(n.p,{children:"We plan to integrate security features into our platform by providing users with capabilities to review existing smart contract audits done by third-party companies and eventually provide a platform to audit smart contracts."}),"\n",(0,r.jsx)(n.p,{children:"Vulnerability scanning can be invoked automatically to detect various common vulnerabilities via pre-configured intrinsics, while still allowing users to review contracts in more detail if necessary."}),"\n",(0,r.jsx)(n.h3,{id:"scripting-functionality",children:"Scripting functionality"}),"\n",(0,r.jsx)(n.p,{children:"As part of the smart contract manager, we plan to provide a scripting functionality that will allow smart contract developers to access external APIs and implement complex workflows that depend on external data."}),"\n",(0,r.jsx)(n.p,{children:"Patron will automatically (and in a verifiable way) request external APIs and call user\u2019s smart contract methods with data obtained from the response."}),"\n",(0,r.jsx)(n.p,{children:"This workflow may be executed based on the contract\u2019s dispatched events or just by periodic contract calls."}),"\n",(0,r.jsx)(n.mermaid,{value:"sequenceDiagram\n    Smart contract--\x3e>+Patron: WeatherDataRequest event was dispatched.\n    Patron->>+External API: Weather data request.\n    External API->>+Patron: Weather data response.\n    Patron->>+Smart contract: set_weather_data method call"}),"\n",(0,r.jsx)(n.p,{children:"We can also provide a smart contract with external data based on timer:"}),"\n",(0,r.jsx)(n.mermaid,{value:"sequenceDiagram\n    Note left of Smart contract: No events on their own.\n    Note right of Patron: Timer has reached zero.\n    Patron->>+External API: Weather data request.\n    External API->>+Patron: Weather data response.\n    Patron->>+Smart contract: set_weather_data method call"}),"\n",(0,r.jsx)(n.p,{children:"This feature can be expanded with vast scripting support, allowing user to execute arbitrary off-chain code that interacts with external services and the smart contract itself."}),"\n",(0,r.jsx)(n.h2,{id:"ecosystem-fit",children:"Ecosystem fit"}),"\n",(0,r.jsx)(n.h3,{id:"where-and-how-does-your-project-fit-into-the-ecosystem",children:"Where and how does your project fit into the ecosystem?"}),"\n",(0,r.jsx)(n.p,{children:"Our platform can significantly improve the ink! ecosystem by covering transparency and security and providing versatile features, allowing developers and smart contract users to discover, discuss and improve."}),"\n",(0,r.jsx)(n.h3,{id:"who-is-your-target-audience",children:"Who is your target audience?"}),"\n",(0,r.jsx)(n.p,{children:"Our target audience is WebAssembly smart contract developers, independent auditors, vulnerability researchers, and users who want to discover new smart contracts to use and discuss."}),"\n",(0,r.jsx)(n.h3,{id:"what-needs-does-your-project-meet",children:"What need(s) does your project meet?"}),"\n",(0,r.jsx)(n.p,{children:"Our project can significantly improve the general trust of users in smart contracts while also improving developer user experience by providing a versatile feature set."}),"\n",(0,r.jsx)(n.h3,{id:"are-there-any-other-projects-similar-to-yours-in-the-substratepolkadotkusama-ecosystem",children:"Are there any other projects similar to yours in the Substrate/Polkadot/Kusama ecosystem?"}),"\n",(0,r.jsx)(n.p,{children:"We are aware of Epirus Substrate explorer project (as well as an active project to create an ink! verification server)."}),"\n",(0,r.jsxs)(n.p,{children:["Epirus explorer provides smart contract explorer features, however, no known effort to create a smart contract manager (similar to ",(0,r.jsx)(n.a,{href:"https://www.openzeppelin.com/defender",children:"OpenZeppelin Defender"})," functionality) is ongoing."]}),"\n",(0,r.jsx)(n.p,{children:"Verification will be part of the deploy flow and thus with mass adoption will be out of the box for every product deployed."}),"\n",(0,r.jsx)(n.h2,{id:"team-members",children:"Team members"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Markian Ivanichok"})," (\u0421EO of 727.ventures)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Dominik Kr\xed\u017eo"})," (Head of Engineering | 727.ventures)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Ivan Leshchenko"})," (Blockchain Developer | 727.ventures)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Nameless Endless"})," (Blockchain Developer | 727.ventures)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Varex Silver"})," (Blockchain Developer | 727.ventures)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Artem Lech"})," (Blockchain Developer | 727.ventures)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Matviy Matsipura"})," (Designer | 727.ventures)"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Contact"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Contact Name:"})," Ivan Leshchenko"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Contact Email:"})," ",(0,r.jsx)(n.a,{href:"mailto:ivan.leshchenko@727.ventures",children:"ivan.leshchenko@727.ventures"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Website:"})," ",(0,r.jsx)(n.a,{href:"https://727.ventures",children:"727.ventures"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Legal Structure"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Registered Address:"})," The registered office shall be in Coastal Building, Wickham\u2019s"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Cay II, P. O. Box 2221, Road Town, Tortola, VG1110, British Virgin Islands."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Registered Legal Entity:"})," Seven2seven Ventures Ltd"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Team's experience"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Markian Ivanichok"})}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"CEO of 727.ventures, a blockchain entrepreneur, and a software engineer."}),"\n",(0,r.jsx)(n.p,{children:"I began my engineering career at the age of 15 and have since gained extensive experience in both engineering and leadership. Having founded a couple of startups, I also gained entrepreneurial experience. I was inspired to co-found and invest in Sector F, one of the top consulting companies in Ukraine that helps entrepreneurs to accelerate their growth."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Dominik Kr\xed\u017eo"})}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Head of Engineering"}),"\n",(0,r.jsx)(n.p,{children:"Started programming his own games at the age of 15 as a hobby, then went to University to study informatics and object-oriented programming, becoming an Android developer and eventually switching to work in web3. Dominik played a crucial role in the OpenBrush and Sol2Ink development and is currently developing the ink! smart contracts tools as part of Brushfam."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Ivan Leshchenko"})}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Blockchain Developer"}),"\n",(0,r.jsx)(n.p,{children:"Blockchain developer with proficiency in the Rust programming language. Developed various libraries and applications using Rust, with a primary interest in developing the WASM smart contract ecosystem."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Nameless Endless"})}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Blockchain Developer"}),"\n",(0,r.jsx)(n.p,{children:"Became interested in programming at the age of 16. At this time, he tried web development and created a website. Then decided to go to University to study system programming and object-oriented programming. Most often, he used C and C++ languages. Nameless likes innovations of web3 technologies and believes in the potential of Rust language and WASM standards for smart contracts."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Varex Silver"})}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Blockchain Developer"}),"\n",(0,r.jsx)(n.p,{children:"Student of Computer Science at the Kyiv National University of Taras Shevchenko. Participated in programming competitions of different stages in school since 2017 (C++). Was a Backend developer (Go), Solidity developer(Solidity, Hardhat, Typescript), and now a Blockchain developer (Rust, Typescript)."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Artem Lech"})}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Blockchain Developer"}),"\n",(0,r.jsx)(n.p,{children:"Student of Applied Mathematics at the Kyiv National University of Taras Shevchenko. Started programming in 2016 and participated in a lot of Ukrainian and international competitions of competitive programming. Worked as a lecturer of algorithms at the school of competitive programming and as Intern Backend Engineer (Rust). Now works as Blockchain Developer on Polkadot Blockchain (Rust, Typescript)."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Matviy Matsipura"})}),"\n",(0,r.jsx)(n.p,{children:"Gained professional experience as a lead designer in a product company, where he was responsible for creating packaging and visual designs for a popular milk\nbrand in Ukraine. Transitioned to the field of web3 design and is currently leading the design process for blockchain projects."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Team Code Repos"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/727-Ventures",children:"https://github.com/727-Ventures"})}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/coreggon11",children:"https://github.com/coreggon11"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/ivan770",children:"https://github.com/ivan770"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/o-tsaruk",children:"https://github.com/o-tsaruk"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/varex83",children:"https://github.com/varex83"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/Artemka374",children:"https://github.com/Artemka374"})}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Team LinkedIn Profiles"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://www.linkedin.com/in/mivanichok/",children:"https://www.linkedin.com/in/mivanichok/"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://www.linkedin.com/in/dominik-krizo/",children:"https://www.linkedin.com/in/dominik-krizo/"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://www.linkedin.com/in/tsaruk-olexandr/",children:"https://www.linkedin.com/in/tsaruk-olexandr/"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://www.linkedin.com/in/bogdan-ogorodniy/",children:"https://www.linkedin.com/in/bogdan-ogorodniy/"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://www.linkedin.com/in/artem-fomiuk-31249b226/",children:"https://www.linkedin.com/in/artem-fomiuk-31249b226/"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"development-roadmap",children:"Development roadmap"}),"\n",(0,r.jsx)(n.h3,{id:"overview-1",children:"Overview"}),"\n",(0,r.jsx)(n.p,{children:"Total duration: 7 weeks"}),"\n",(0,r.jsx)(n.p,{children:"FTE: 3"}),"\n",(0,r.jsx)(n.p,{children:"Total cost: 63,000 USD"}),"\n",(0,r.jsx)(n.h3,{id:"milestone-1---mvp-with-verification-functionality-only",children:"Milestone 1 - MVP with verification functionality only"}),"\n",(0,r.jsx)(n.p,{children:"Duration: 7 weeks (Frontend, Backend, CLI utility implementations)."}),"\n",(0,r.jsx)(n.p,{children:"FTE: 3"}),"\n",(0,r.jsx)(n.p,{children:"Total cost: 63,000 USD"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Number"}),(0,r.jsx)(n.th,{children:"Deliverable"}),(0,r.jsx)(n.th,{children:"Specification"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"0a."}),(0,r.jsx)(n.td,{children:"License"}),(0,r.jsx)(n.td,{children:"MIT"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"0b."}),(0,r.jsx)(n.td,{children:"Documentation"}),(0,r.jsx)(n.td,{children:"We will provide API documentation for contributors to get along with the codebase, as well as a detailed self-hosting instructions for users to create their own nodes."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"0c."}),(0,r.jsx)(n.td,{children:"Testing guidelines"}),(0,r.jsx)(n.td,{children:"Core functionality will be covered by a comprehensive unit test suite."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"0d."}),(0,r.jsx)(n.td,{children:"Docker"}),(0,r.jsx)(n.td,{children:"We will prepare Docker images for users to spin up their own nodes more easily and conveniently."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"0e."}),(0,r.jsx)(n.td,{children:"Article"}),(0,r.jsx)(n.td,{children:"We will publish an article that explains the achievements done as part of the grant."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"1a."}),(0,r.jsx)(n.td,{children:"Backend storage"}),(0,r.jsx)(n.td,{children:"Backend implementation with contract discovery and persistent storage."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"1b."}),(0,r.jsx)(n.td,{children:"Sync server"}),(0,r.jsx)(n.td,{children:"A separate server that catches new contract deployments and events will be implemented."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"1c."}),(0,r.jsx)(n.td,{children:"Smart contract builder"}),(0,r.jsx)(n.td,{children:"Immutable, pre-configured smart contract builders are to be implemented for verified smart contract deployment."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"2a."}),(0,r.jsx)(n.td,{children:"Web UI"}),(0,r.jsx)(n.td,{children:"A simple web UI will be implemented to expose Patron functionality."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"2b."}),(0,r.jsx)(n.td,{children:"Detailed contract information"}),(0,r.jsx)(n.td,{children:"Frontend to display detailed contract info (as well as verification status) will be implemented."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"2c."}),(0,r.jsx)(n.td,{children:"User authentication"}),(0,r.jsx)(n.td,{children:"We will implement a web3-oriented authentication solution"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"3a."}),(0,r.jsx)(n.td,{children:"Developer CLI utility"}),(0,r.jsx)(n.td,{children:"A deployment workflow unified, developer-oriented CLI utility will be implemented."})]})]})]}),"\n",(0,r.jsxs)(n.h2,{id:"additional-information-heavy_plus_sign",children:["Additional Information ","\u2795"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"How did you hear about the Grants Program?"})," Personal recommendation"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var i=t(96540);const r={},s=i.createContext(r);function a(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);