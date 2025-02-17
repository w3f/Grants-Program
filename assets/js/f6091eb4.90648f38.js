"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[23966],{28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>l});var i=t(96540);const s={},a=i.createContext(s);function r(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(a.Provider,{value:n},e.children)}},91853:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"applications/decentralized_well-being_game_api","title":"Decentralized Well-being Game API","description":"Team Name","source":"@site/applications/decentralized_well-being_game_api.md","sourceDirName":"applications","slug":"/applications/decentralized_well-being_game_api","permalink":"/applications/decentralized_well-being_game_api","draft":false,"unlisted":false,"editUrl":"https://github.com/w3f/Grants-Program/edit/master/applications/decentralized_well-being_game_api.md","tags":[],"version":"current","frontMatter":{}}');var s=t(74848),a=t(28453);const r={},l="Decentralized Well-being Game API",o={},d=[{value:"Team Name",id:"team-name",level:2},{value:"Payment Address",id:"payment-address",level:2},{value:"Overview",id:"overview",level:2},{value:"Introduction",id:"introduction",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Ecosystem Fit",id:"ecosystem-fit",level:2},{value:"Team",id:"team",level:2},{value:"Team Members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:2},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles",id:"team-linkedin-profiles",level:3},{value:"Development Status",id:"development-status",level:2},{value:"Development Road Map",id:"development-road-map",level:2},{value:"Milestone 1 - Exposing Game API endpoints",id:"milestone-1---exposing-game-api-endpoints",level:3},{value:"Purposed Diagram",id:"purposed-diagram",level:3},{value:"State Channels Implementation",id:"state-channels-implementation",level:3}];function c(e){const n={a:"a",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"decentralized-well-being-game-api",children:"Decentralized Well-being Game API"})}),"\n",(0,s.jsx)(n.h2,{id:"team-name",children:"Team Name"}),"\n",(0,s.jsx)(n.p,{children:"Health Hero"}),"\n",(0,s.jsx)(n.h2,{id:"payment-address",children:"Payment Address"}),"\n",(0,s.jsx)(n.p,{children:"0xc7ad868f9b421dabf7cdaa0e6c508ff74e2f1cfd (USDT)"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Status:"})," ",(0,s.jsx)(n.a,{href:"https://github.com/w3f/Grants-Program/pull/675#issuecomment-1129061247",children:"Terminated"})]}),"\n",(0,s.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)(n.h3,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsx)(n.p,{children:"Well-being engagement is up and rising. With a more health-conscious generation of users, they are wanting to experience health engagement in different areas of their lives. Health Hero, as a digital health engagement company, seeks to grow a well-being focused game API that engages developers with health-related development tools. With more people now working remotely, health engagement has never been more important. Healthcare is a multi-billion dollar industry that still struggles with delivering tools to consumers to engage with their health in their own way. IoT, omnichannel, chatbots, and other interactive interfaces are just a few to mention for the opportunities surrounding the use of Health Hero's Game API."}),"\n",(0,s.jsx)(n.h3,{id:"project-details",children:"Project Details"}),"\n",(0,s.jsx)(n.p,{children:"The Health Hero Game API provides the opportunity for developers to build games, apps, and features using well-being data endpoints that are centered around steps and fitness data. The play-to-earn approach of the API endpoints, allows the users to earn points in different areas such as XP (Experience Points), HP (Hero Points), Levels, Life, Star Power, badges, and parcels of land that ultimately rewards the user with digital assets (collectibles/NFTs) that are valued in Polkadot currency and Using State Channels to send out the payouts to users from the treasury based on their authentic health data."}),"\n",(0,s.jsx)(n.p,{children:"API specifications of the core functionality"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Endpoints will provide the following data:"}),"\n",(0,s.jsx)(n.li,{children:"IoT data: step trackers, to include Google Fit, Apple Health, Garmin, Fitbit, Peloton, Headspace, Calm, and more."}),"\n",(0,s.jsx)(n.li,{children:"Activity data"}),"\n",(0,s.jsx)(n.li,{children:"Gamification data points such as XP, HP, levels, life, star power"}),"\n",(0,s.jsx)(n.li,{children:"Smart contracts customization based on health data engagement"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"ecosystem-fit",children:"Ecosystem Fit"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Where and how does your project fit into the ecosystem? / What need(s) does your project meet?"})}),"\n",(0,s.jsx)(n.p,{children:"With the growing need of well-being engagement tools, a major pain point is the lack of shareability, access, and implementation of wellness-related features into games, apps, and other online applications. From the users' perspective, the delivery of gamification and rewards is also poorly present in today's games and apps ecosystems. Not only would the developers be able to create and build apps off of our API, but they will have the tools necessary to create customized smart contracts that will deliver a unique and evolving experience to the users based on their own health engagement within the app or game the developers created. These smart contracts will be used against the minting of personalized collectibles that will evolve with a series of attributes (XP, HP, levels, etc.) which are then translated into earnings (play-to-earn) for the users."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Who is your target audience (parachain/dapp/wallet/UI developers, designers, your own user base, some dapp's userbase, yourself)?"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Game developers"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Blockchain engineers"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Cryptocurrency developers"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"In-house"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Game artists"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"At the moment, there are no other projects similar to ours in any ecosystem."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"team",children:"Team"}),"\n",(0,s.jsx)(n.h3,{id:"team-members",children:"Team Members"}),"\n",(0,s.jsx)(n.p,{children:"Team Leaders:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Umair Azhar (CTO)"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Anthony Diaz (CEO)"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Team Members:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Angel Leon (Product and UX)"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Jon Izquierdo (Senior Full Stack Engineer)"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"contact",children:"Contact"}),"\n",(0,s.jsx)(n.p,{children:"Contact Name:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Anthony Diaz (CEO)"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Contact Email:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"mailto:anthony@gohealthhero.com",children:"anthony@gohealthhero.com"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Website:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"gohealthhero.com"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"legal-structure",children:"Legal Structure"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Registered Address"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Health Hero, Inc, 548 Market St, Suite 15351, San Francisco, CA 94104"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Registered Legal Entity"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Health Hero, Inc"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"teams-experience",children:"Team's experience"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Mr. Diaz has over a decade of experience in leadership in healthcare, global product and platform development, and digital consumer engagement. Repeat founder. People leader that commands an uncanny sense of global business and brings global products to life that generate profit."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Mr. Azhar is a software engineer with over 7 years of experience. Mr. Azhar has a passion for back-end development with great instinct for reflecting code on user interfaces and user experience, Artificial Intelligence, machine learning, innovative technologies, and development operations. Strong leader with a tactical vision on integrating latest technologies into highly complex products. Mr. Azhar has driven development efforts for large teams of engineers and has an acute eye for security, product, and technology architecture"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Mr. Leon is a U.S. Navy veteran, product, operations, and innovation leader overseeing teams that manage revenue, strategy, business, partnerships, information technology, product management, policy, security, workplace resources, and other cross-functional operations. Angel's passion is on how to operationalize and productize integration technologies, patterns, best practices, and user interfaces. His experience includes a decade+ years in health IT, working with a wide spectrum of customers, including IDNs, payers, life sciences companies, and software vendors, with the goal of improving outcomes and reducing costs by aggregating and analyzing clinical, claims, and cost data."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"team-code-repos",children:"Team Code Repos"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Umair Azhar: ",(0,s.jsx)(n.a,{href:"https://github.com/iumairazhar",children:"https://github.com/iumairazhar"})]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"team-linkedin-profiles",children:"Team LinkedIn Profiles"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Umair Azhar: ",(0,s.jsx)(n.a,{href:"https://www.linkedin.com/in/iumairazhar/",children:"https://www.linkedin.com/in/umair-azhar-a72259206/"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Angel Leon: ",(0,s.jsx)(n.a,{href:"https://www.linkedin.com/in/angelgleon/",children:"https://www.linkedin.com/in/angelgleon/"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Anthony Diaz: ",(0,s.jsx)(n.a,{href:"https://www.linkedin.com/in/adiaz123/",children:"https://www.linkedin.com/in/adiaz123/"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"development-status",children:"Development Status"}),"\n",(0,s.jsx)(n.h2,{id:"development-road-map",children:"Development Road Map"}),"\n",(0,s.jsx)(n.h3,{id:"milestone-1---exposing-game-api-endpoints",children:"Milestone 1 - Exposing Game API endpoints"}),"\n",(0,s.jsx)(n.p,{children:"Estimated Duration"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"4 weeks"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"FTE"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"2"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Costs"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"$25,000 USD"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"purposed-diagram",children:"Purposed Diagram"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://gohealthhero-production.s3.amazonaws.com/Web3.png",alt:"Architecture  Diagram"})}),"\n",(0,s.jsx)(n.h3,{id:"state-channels-implementation",children:"State Channels Implementation"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://user-images.githubusercontent.com/44548958/144947081-88d681a9-e9c7-419d-96b0-8ec68fda6687.png",alt:"State Channels (2)"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Number"}),(0,s.jsx)(n.th,{children:"Deliverable"}),(0,s.jsx)(n.th,{children:"Specification"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"0a"}),(0,s.jsx)(n.td,{children:"License"}),(0,s.jsx)(n.td,{children:"Apache License 2.0"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"0b"}),(0,s.jsx)(n.td,{children:"Documentation"}),(0,s.jsx)(n.td,{children:"We will provide both inline documentation of the code and a basic tutorial that explains how a user can run a local instance and / or fetch metrics using the application."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"0c"}),(0,s.jsx)(n.td,{children:"Testing Guide"}),(0,s.jsx)(n.td,{children:"Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"0d"}),(0,s.jsx)(n.td,{children:"Docker"}),(0,s.jsx)(n.td,{children:"We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"0e"}),(0,s.jsx)(n.td,{children:"Press Release"}),(0,s.jsx)(n.td,{children:"We will create a press release to inform the audience."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"1a"}),(0,s.jsx)(n.td,{children:"Ink Contract Development"}),(0,s.jsx)(n.td,{children:"A contract with all required functions for service written in ink!                                                               In our ecosystem, smart contracts will be utilized in a variety of ways within the platform such as: To store user data smart contracts will need to be used via state channels for all aspects of the relationship between the data store and the user. Fitness games within the Ecosystem will utilize smart contracts to pay out and reward winners or games and challenges. A multi-signature smart contract will hold all DAO funds and payout based on milestones reached. Users will be rewarded for logging and tracking well-being through simple actions such as taking a picture of food, logging breakfast via smartwatches, or through slack."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"1b"}),(0,s.jsx)(n.td,{children:"Services Implementation"}),(0,s.jsx)(n.td,{children:"API for developers to: 1. store user data to Postgres Database 2. serve API to users to collect the Health Data 3. interact with the Smart Contract 4. Written in Rust/TypeScript5. Rust/TypeScript unit tests"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"1c"}),(0,s.jsx)(n.td,{children:"State Channels"}),(0,s.jsx)(n.td,{children:"We will be implementing Perun Polkadot Pallet as a part of our Ink Smart Contract and will use RUST language for the backend implementing these state channels.These channels will allow us to make transactions to the users for their payouts from the treasury based on their authentic health data. As state channels will be established between treasury and users to handle frequently occurring transactions for their payouts"})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}}}]);