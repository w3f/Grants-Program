"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[59138],{81472:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));a(8209);const i={},l="Typechain-Polkadot Follow-up",o={unversionedId:"applications/typechain-polkadot-follow-up",id:"applications/typechain-polkadot-follow-up",title:"Typechain-Polkadot Follow-up",description:"- Team Name: 727.ventures",source:"@site/applications/typechain-polkadot-follow-up.md",sourceDirName:"applications",slug:"/applications/typechain-polkadot-follow-up",permalink:"/applications/typechain-polkadot-follow-up",draft:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/applications/typechain-polkadot-follow-up.md",tags:[],version:"current",frontMatter:{}},s={},p=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-",level:2},{value:"Overview",id:"overview",level:3},{value:"Usage of Typechain-compiler",id:"usage-of-typechain-compiler",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles (if available)",id:"team-linkedin-profiles-if-available",level:3},{value:"Development Status \ud83d\udcd6",id:"development-status-",level:2},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Previous work",id:"previous-work",level:2},{value:"Milestone 1 - MVP, first application and testing.",id:"milestone-1---mvp-first-application-and-testing",level:3},{value:"Current work - Scope of this grant",id:"current-work---scope-of-this-grant",level:2},{value:"Milestone 2 - Full coverage for ABIs\u2019 types. Contracts deployment.",id:"milestone-2---full-coverage-for-abis-types-contracts-deployment",level:3},{value:"Future work",id:"future-work",level:2},{value:"Milestone 3 - High-level improvements, flexibility and simplifying of usage",id:"milestone-3---high-level-improvements-flexibility-and-simplifying-of-usage",level:3},{value:"Additional Information \u2795",id:"additional-information-",level:2}],d={toc:p},m="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"typechain-polkadot-follow-up"},"Typechain-Polkadot Follow-up"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Team Name:")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/727-Ventures"},"727.ventures")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Payment Address:")," ERC 20 (DAI):\n0x352F779203202c99699CdA8cc95adF06CcC8abEf"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/w3f/Grants-Program/tree/master#level_slider-levels"},"Level"),":")," 3")),(0,r.kt)("h2",{id:"project-overview-"},"Project Overview \ud83d\udcc4"),(0,r.kt)("h3",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Nowadays, when technologies are growing faster and faster, we should think about optimizing different routine processes and making older stuff better. One of these optimizations is to make code typesafe that will be flexible in different situations."),(0,r.kt)("p",null,"When a smart contract is being written, the front-end developer receives its file representation in the Application Binary Interface (ABI) format. One ABI per each contract, a new ABI for every contract update."),(0,r.kt)("p",null,"Information about how to interact with a contract (methods names, arguments & returns types, etc.) is included in this ABI file. It is not relatively human-readable, so extracting that information becomes a challenge. We need to have correct type definitions for each contract in TypeScript."),(0,r.kt)("p",null,"Interaction with blockchain is done with the polkadot.js library, which only has abstract definitions for the contract in use. Thus users' code cannot be typesafe. And Typechain-Polkadot can change it."),(0,r.kt)("p",null,"This Grant is a follow-up to the previous grant, ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/w3f/Grants-Program/pull/992"},"Typechain-Polkadot"),"..\nWe have decided to add a new tool that will help developers easily integrate typechain to their projects. It will also be compatible with Redspot (if redspot was used for compiler projects, you could just leave most of the things).\nWe have some updates on our team, so check them out. And also, we did more work on Milestone 1 than we thought, so now it'll be easier to add new features to the project, so we considered to reestimate our time."),(0,r.kt)("h3",{id:"usage-of-typechain-compiler"},"Usage of Typechain-compiler"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    npx typechain-compiler --config config.json\n\n")),(0,r.kt)("p",null,"Also, you can set some additional arguments like ",(0,r.kt)("inlineCode",{parentName:"p"},"--noCompile"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"--noTypechain"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"--release")),(0,r.kt)("p",null,"Config interface will be something like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"export interface Config {\n    projectFiles: string[]; // Path to all project files, everystring in glob format\n    skipLinting : boolean; // Skip linting of project files\n    artifactsPath : string; // Path to artifacts folder, where artifacts will be stored it will save both .contract and .json (contract ABI)\n    typechainGeneratedPath : string; // Path to typechain generated folder\n}\n\n")),(0,r.kt)("h3",{id:"project-details"},"Project Details"),(0,r.kt)("p",null,"Typesafe contracts' descriptions can be generated automatically by a script, taking a list of ABIs as an input, giving usable TS type definitions and even runtime code as its output."),(0,r.kt)("p",null,"Given that a front-end developer needs to do this with every contract update, the such tool would save a lot of time and prevent mistakes of misusing smart contracts. It is installed as a package with built-in CLI."),(0,r.kt)("p",null,"When contract descriptions come both with ABI and source code (",(0,r.kt)("inlineCode",{parentName:"p"},"*.contract")," files), our tool will provide means for deployment as well."),(0,r.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Where and how does your project fit into the ecosystem?")),(0,r.kt)("p",null,"There is a whole side to every project in the ecosystem - that is, the front-end side of contract integration - that will find a use for Typechain-Polkadot during the development process."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Who is your target audience?")),(0,r.kt)("p",null,"Our main target audience is front-end and smart-contract developers of Polkadot projects."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"What need(s) does your project meet?")),(0,r.kt)("p",null,"Our project speeds up the front-end integration of Polkadot/Substrate/Kusama contracts. As well as brings type safety to developers' code when dealing with contracts. For smart contract developers, it simplifies integration test writing."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?")),(0,r.kt)("p",null,"No, we are the first project of the kind in the ecosystem. However, in the Solidity ecosystem, a similar project already exists, ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/typechain"},"Typechain"),"."),(0,r.kt)("h2",{id:"team-"},"Team \ud83d\udc65"),(0,r.kt)("h3",{id:"team-members"},"Team members"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Markian Ivanichok")," (\u0421EO of 727.ventures)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Fedor Lebed")," (Head of Operations | 727.ventures)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Green Baneling")," (Blockchain Core Rust Engineer | 727.ventures)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Varex Silver")," (Blockchain developer | 727.ventures)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Artem Lech")," (Blockchain developer | 727.ventures)")),(0,r.kt)("h3",{id:"contact"},"Contact"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Contact Name:")," Fedor Lebed"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Contact Email:")," ",(0,r.kt)("a",{parentName:"li",href:"mailto:feder.lebed@727.ventures"},"fedor.lebed@727.ventures")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Website:")," ",(0,r.kt)("a",{parentName:"li",href:"727.ventures"},"727.ventures"))),(0,r.kt)("h3",{id:"legal-structure"},"Legal Structure"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Registered Address:")," The registered office shall be in Coastal Building, Wickham\u2019s\nCay II, P. O. Box 2221, Road Town, Tortola, VG1110, British Virgin Islands."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Registered Legal Entity:")," Seven2seven Ventures Ltd")),(0,r.kt)("h3",{id:"teams-experience"},"Team's experience"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Markian Ivanichok"),"\nCEO of 727.ventures, Blockchain entrepreneur, Software Engineer. Started my engineering career back when I was 15. Since then, I developed and got a lot of experience in engineering and leadership. Gained entrepreneur experience by founding a couple of startups. Inspired, co-founded and invested in Sector F, one of the top consulting companies in Ukraine that helps entrepreneurs to move faster."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Fedor Lebed"),"\nFedor is the head of operations at Brushfam, a portfolio company of 727. ventures which is developing the ink! Smart contracts tools.\nFedor invested in mining pools from 15 years old. He has a background in product management, working with international software products for Tier-1 markets."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Green Baneling"),"\nBlockchain Core Developer\nPrimary programming languages are: C++, Go, Rust"),(0,r.kt)("p",null,"Finished the faculty of applied mathematics(Master's degree). Participated in programming competitions during education. Has worked as a programmer for around six years."),(0,r.kt)("p",null,"Was a freelancer the first year, creating an application for IOS(Swift), and creating modules for the desktop application on C++. After that, I spent two years in a company that created software for TV devices(C++/ Haxe). After which, for three years, working on different blockchain projects(C++/Go/Rust/Solidity/Js)."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Varex Silver"),"\nBlockchain Developer."),(0,r.kt)("p",null,"Student of Computer Science at the Kyiv National University of Taras Shevchenko. Participated in programming competitions of different stages in school since 2017 (C++).\nWas a Backend developer(Go), Solidity developer(Solidity, Hardhat, Typescript), and now Blockchain developer(Rust, Typescript)."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Artem Lech"),"\nBlockchain Developer."),(0,r.kt)("p",null,"Student of Applied Mathematics at the Kyiv National University of Taras Shevchenko. Started programming in 2016 and participated in a lot of Ukrainian and international competitions of competitive programming. Worked as a lecturer of algorithms at the school of competitive programming and as Intern Backend Engineer (Rust). Now works as Blockchain Developer on Polkadot Blockchain (Rust, Typescript)."),(0,r.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/727-Ventures"},"https://github.com/727-Ventures"))),(0,r.kt)("p",null,"Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/xgreenx"},"https://github.com/xgreenx")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/varex83"},"https://github.com/varex83")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/Artemka374"},"https://github.com/Artemka374"))),(0,r.kt)("h3",{id:"team-linkedin-profiles-if-available"},"Team LinkedIn Profiles (if available)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/mivanichok/"},"https://www.linkedin.com/in/mivanichok/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/toma-sadova/"},"https://www.linkedin.com/in/toma-sadova/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/bogdan-ogorodniy/"},"https://www.linkedin.com/in/bogdan-ogorodniy/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/artem-fomiuk-31249b226/"},"https://www.linkedin.com/in/artem-fomiuk-31249b226/"))),(0,r.kt)("h2",{id:"development-status-"},"Development Status \ud83d\udcd6"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/727-Ventures/typechain-polkadot"},"The project")," is already a work-in-progress."),(0,r.kt)("h2",{id:"development-roadmap-"},"Development Roadmap \ud83d\udd29"),(0,r.kt)("h3",{id:"overview-1"},"Overview"),(0,r.kt)("p",null,"We have decided to describe a full roadmap of a Typechain here, with estimates. However, the funding we request at this stage is for milestone 2."),(0,r.kt)("h2",{id:"previous-work"},"Previous work"),(0,r.kt)("h3",{id:"milestone-1---mvp-first-application-and-testing"},"Milestone 1 - MVP, first application and testing."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Estimated duration:")," 8 weeks"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"FTE:")," 2"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Costs:")," 44,800 USD")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Number"),(0,r.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,r.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0a"),(0,r.kt)("td",{parentName:"tr",align:null},"License"),(0,r.kt)("td",{parentName:"tr",align:null},"MIT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0b"),(0,r.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,r.kt)("td",{parentName:"tr",align:null},"We will provide TypeScript code examples of this package in use, inline documentation, JSDoc, and the description of its features.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"TS Types"),(0,r.kt)("td",{parentName:"tr",align:null},"We will research & match types from ABI to TypeScript, compatible with polkadot{.js} v8 library. Separately, for methods' arguments and return values. Files with types definition will be generated.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"Runtime Code"),(0,r.kt)("td",{parentName:"tr",align:null},"Prepare output(its draft can be seen in ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/Supercolony-net/typechain-polkadot/blob/master/docs/tech-specs.md#generated-code-draft"},"technical specification"),") of runtime code with contracts' methods implementation. At this point we have minimal viable coverage of the ABI types, original methods' names, and general types for methods' options, without specifics for contract's namespaces.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"Testing"),(0,r.kt)("td",{parentName:"tr",align:null},"Minimal coverage of PSP22 contract with integration tests. We will be testing correctness of the derived types of the arguments and return values.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null},"NPM Packaging"),(0,r.kt)("td",{parentName:"tr",align:null},"Prepare the repository to work through CLI as a package. In TypeScript, as is, without translation to JavaScript. We will publish the package to NPM repository and provide set-up instructions (i.e. for installation, input & output).")))),(0,r.kt)("h2",{id:"current-work---scope-of-this-grant"},"Current work - Scope of this grant"),(0,r.kt)("h3",{id:"milestone-2---full-coverage-for-abis-types-contracts-deployment"},"Milestone 2 - Full coverage for ABIs\u2019 types. Contracts deployment."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Estimated duration:")," 7.5 weeks"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"FTE:")," 2.5"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Costs:")," 52,500 USD")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Number"),(0,r.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,r.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0a"),(0,r.kt)("td",{parentName:"tr",align:null},"License"),(0,r.kt)("td",{parentName:"tr",align:null},"MIT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0b"),(0,r.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,r.kt)("td",{parentName:"tr",align:null},"Cover new-added features in documentation and usage examples. Prepare generated code to have more informative IDE hints based on TSDoc and the output type system (if needed).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"Investigation & Refactoring"),(0,r.kt)("td",{parentName:"tr",align:null},"Broaden types definitions for methods arguments and return values (to full coverage). Also, refactor project structure to monorepo for future development")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"Parser & generators modules"),(0,r.kt)("td",{parentName:"tr",align:null},"Design and implement a new parser module for ABI JSON to work with different versions of the ABI. Parser's output structure serves as an input for generators. Refactor, replace inline generation with the parser to generator flow.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"Contract deployment"),(0,r.kt)("td",{parentName:"tr",align:null},"Add availability to deploy contracts with ",(0,r.kt)("inlineCode",{parentName:"td"},"Constructors")," field, using ",(0,r.kt)("inlineCode",{parentName:"td"},"*.contract")," files.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4a"),(0,r.kt)("td",{parentName:"tr",align:null},"Contract classes extension"),(0,r.kt)("td",{parentName:"tr",align:null},"Extend generated contract classes with valuable properties ordinarily available on the contract (e.g., address, name, signer, etc.). Also, provide the ability to change signer and contract address easily without creating a new contract manually.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4b"),(0,r.kt)("td",{parentName:"tr",align:null},"Methods' names"),(0,r.kt)("td",{parentName:"tr",align:null},"Format methods' names in the output from the original ",(0,r.kt)("inlineCode",{parentName:"td"},"MethodTrait::method_name")," to a more user-friendly ",(0,r.kt)("inlineCode",{parentName:"td"},"methodName")," naming scheme while resolving overlap in formatted names.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null},"Testing"),(0,r.kt)("td",{parentName:"tr",align:null},"Complete coverage of PSP22 contract with integration tests. Both for contract usage and deployment. We will be testing arguments' & return values' types' correctness.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"6"),(0,r.kt)("td",{parentName:"tr",align:null},"Article"),(0,r.kt)("td",{parentName:"tr",align:null},"We will publish an article that explains features of Typechain, how to use it in projects")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"7"),(0,r.kt)("td",{parentName:"tr",align:null},"Branding"),(0,r.kt)("td",{parentName:"tr",align:null},"Make logotype for typechain and better README")))),(0,r.kt)("h2",{id:"future-work"},"Future work"),(0,r.kt)("h3",{id:"milestone-3---high-level-improvements-flexibility-and-simplifying-of-usage"},"Milestone 3 - High-level improvements, flexibility and simplifying of usage"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Estimated duration:")," 8-12 weeks"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"FTE:")," ?"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Costs: -"))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Number"),(0,r.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,r.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0a"),(0,r.kt)("td",{parentName:"tr",align:null},"License"),(0,r.kt)("td",{parentName:"tr",align:null},"MIT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0b"),(0,r.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,r.kt)("td",{parentName:"tr",align:null},"We will cover new-added features in documentation and usage examples.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"User-defined plugins"),(0,r.kt)("td",{parentName:"tr",align:null},"We will provide an opportunity for users to make their plugins, for instance, how to parse types or what generated code will look like.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"Subscribing to events"),(0,r.kt)("td",{parentName:"tr",align:null},"We will research and subscribe to events the contract emits, which will be handy for developers.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"Typechain-compiler"),(0,r.kt)("td",{parentName:"tr",align:null},"The tool will be easy for big projects to compile Rust code and generate Typechain definitions. It\u2019ll be helpful for TDD when users can write code and develop everything in one CLI command instead of generating a typechain-code file by file. In plans, we want to make a wrapper for running user scripts (like hardhat run) and also functionality to initialize the environment for typechain usage")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null},"Openbrush integration"),(0,r.kt)("td",{parentName:"tr",align:null},"We will test typechain on openbrush integration tests to ensure everything is working correctly and is easy to use.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null},"typechain/types package"),(0,r.kt)("td",{parentName:"tr",align:null},"We will make a separate package for types that typechain use to reduce the usage of the same code and separate static code from generated code.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"6"),(0,r.kt)("td",{parentName:"tr",align:null},"Article"),(0,r.kt)("td",{parentName:"tr",align:null},"We will publish article that explain how to connect it to the project and describe the types of connection options (directly or via compiler)")))),(0,r.kt)("p",null,"After this grant, we will maintain the project to keep up with new emerging ecosystem standards, listen to community issues, and update the tool to make the transformation process a more excellent experience for the developers and teams. We are going to work on integration with the Swanky project."),(0,r.kt)("h2",{id:"additional-information-"},"Additional Information \u2795"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"How did you hear about the Grants Program?")),(0,r.kt)("p",null,"Have a number of approved applications:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"OpenBrush"),(0,r.kt)("li",{parentName:"ul"},"Sol2Ink"),(0,r.kt)("li",{parentName:"ul"},"Typechain-polkadot (Milestone 1)")))}u.isMDXComponent=!0}}]);