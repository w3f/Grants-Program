"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[29451],{28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>a});var s=n(96540);const i={},r=s.createContext(i);function l(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(r.Provider,{value:t},e.children)}},64843:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"applications/vue-typescript-substrate-frontend-template","title":"Vue.js + TypeScript Substrate Front-End Template","description":"- Team Name: Wunderbar Network","source":"@site/applications/vue-typescript-substrate-frontend-template.md","sourceDirName":"applications","slug":"/applications/vue-typescript-substrate-frontend-template","permalink":"/applications/vue-typescript-substrate-frontend-template","draft":false,"unlisted":false,"editUrl":"https://github.com/w3f/Grants-Program/edit/master/applications/vue-typescript-substrate-frontend-template.md","tags":[],"version":"current","frontMatter":{}}');var i=n(74848),r=n(28453);const l={},a="Vue.js + TypeScript Substrate Front-End Template",d={},o=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-page_facing_up",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-busts_in_silhouette",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles (if available)",id:"team-linkedin-profiles-if-available",level:3},{value:"Development Status \ud83d\udcd6",id:"development-status-open_book",level:2},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-nut_and_bolt",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 - Foundations + Header + Account panels",id:"milestone-1---foundations--header--account-panels",level:3},{value:"Milestone 2 - Runtime management, Event Panel and Pallet Interaction Composables",id:"milestone-2---runtime-management-event-panel-and-pallet-interaction-composables",level:3},{value:"Milestone 3 - Complete Vue.js App",id:"milestone-3---complete-vuejs-app",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information \u2795",id:"additional-information-heavy_plus_sign",level:2}];function c(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"vuejs--typescript-substrate-front-end-template",children:"Vue.js + TypeScript Substrate Front-End Template"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Team Name:"})," Wunderbar Network"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Payment Address:"})," 0x6F76BED39E9B9D57cAb4d9b81D65d2fa088cB68E (DAI)"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsxs)(t.strong,{children:[(0,i.jsx)(t.a,{href:"https://github.com/w3f/Grants-Program/tree/master#level_slider-levels",children:"Level"}),":"]})," 2"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Status:"})," ",(0,i.jsx)(t.a,{href:"https://github.com/w3f/Grants-Program/pull/1601#issuecomment-1758669016",children:"Terminated"})]}),"\n"]}),"\n",(0,i.jsxs)(t.h2,{id:"project-overview-page_facing_up",children:["Project Overview ","\ud83d\udcc4"]}),"\n",(0,i.jsx)(t.h3,{id:"overview",children:"Overview"}),"\n",(0,i.jsxs)(t.p,{children:["When building our app (The Wunderbar Network team is part of the ",(0,i.jsx)(t.strong,{children:"Substrate Builders Program"}),"), we have used a very useful existing community template - the ",(0,i.jsx)(t.a,{href:"https://github.com/substrate-developer-hub/substrate-front-end-template",children:"Substrate Front End Template"})," from the Substrate Developer Hub. This template is built using React.js and JavaScript. We are proposing to create an ",(0,i.jsx)(t.em,{children:"alternative"})," version of this template, which would achieve three major outcomes:"]}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Create an extendable template app, where developers can quickly connect and interface with the Substrate blockchain, using simple, clear and strongly typed examples, with a great baseline UX (which could provide a starting point for an entire new project)."}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"This will build on top of what the current community template provides."}),"\n",(0,i.jsxs)(t.ol,{start:"2",children:["\n",(0,i.jsx)(t.li,{children:"It would use Vue.js instead of React.js"}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["According to ",(0,i.jsx)(t.a,{href:"https://survey.stackoverflow.co/2022/",children:"StackOverflow's 2022 Developer Survey"}),", React.js is still undeniably in the lead when it comes to web framework popularity (according to the survey, ",(0,i.jsx)(t.strong,{children:"42.62%"})," of projects would be using React), however at ",(0,i.jsx)(t.strong,{children:"18.86%"})," Vue.js is still in the top 6 and is on the rise."]}),"\n",(0,i.jsxs)(t.ol,{start:"3",children:["\n",(0,i.jsx)(t.li,{children:"It would be written using TypeScript as opposed to JavaScript."}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:'Even though most developers who code in TypeScript can work well with JavaScript and vice versa, the "conversion" is not always straight-forward, and despite JavaScript being around for a very long time (and seemingly not going anywhere), TypeScript is gaining rapidly in popularity and most greenfield projects would prefer TypeScript over JavaScript.'}),"\n",(0,i.jsxs)(t.p,{children:["According to same survey mentioned above, JavaScript is the most commonly used technology (for the tenth year in a row!), however TypeScript is steadily closing in. Looking at the ",(0,i.jsx)(t.em,{children:"loved vs. dreaded"})," category though, the picture is very different - TypeScript is loved by ",(0,i.jsx)(t.strong,{children:"73.46%"})," of developers (and is near the very top of the list), whereas JavaScript achieved a score of ",(0,i.jsx)(t.strong,{children:"61.46%"})," to be placed in the middle of the table."]}),"\n",(0,i.jsx)(t.p,{children:"Overall, we believe that the combination of TypeScript's strong, static typing, and Vue's simplicity will together serve the purpose of providing an alternative source of very clear examples of how to interface with a Substrate Node from a modern front-end application, which should be of great value to the community."}),"\n",(0,i.jsx)(t.h3,{id:"project-details",children:"Project Details"}),"\n",(0,i.jsxs)(t.p,{children:["The core technology stack is Vue 3 + Typescript, integrated with the ",(0,i.jsx)(t.a,{href:"https://github.com/polkadot-js",children:"Polkadot.js"}),' set of packages. The app will deliver Vue3 native components and "composables" (reusable functions), that other developers will easily be able to integrate/build on top of.']}),"\n",(0,i.jsxs)(t.p,{children:["The app will also provide a ",(0,i.jsx)(t.code,{children:"Dockerfile"})," and container."]}),"\n",(0,i.jsx)(t.p,{children:"We have created a mockup design (in both dark and light mode), screenshots below (we also have a high-fidelity Figma file that can be provided upon request)."}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https://drive.google.com/file/d/1FfN8ZTCO2ihwZkBjdQ1dmW4yFqjT7pw3/view?usp=sharing",children:(0,i.jsx)(t.img,{src:"https://lh3.googleusercontent.com/u/0/drive-viewer/AAOQEOQvkTiAXhC3_deoufEJbZY_inAtdJNv6bmvMUKTIsVvPG675sEu5I0Qr3EYxicwu3saj8hniDu3EwZqmFh6em-6DN9Vbw=w3024-h1612",alt:"Dark version"})}),"\n",(0,i.jsx)(t.a,{href:"https://drive.google.com/file/d/1Q-bkWzzvEgMBJcdY2wTHfvEMRMBSphHV/view?usp=sharing",children:(0,i.jsx)(t.img,{src:"https://lh3.googleusercontent.com/u/0/drive-viewer/AAOQEOSkRaSUSZhS7u7rhuepjwBXzteL2GUqvRSx3AHpC31dCiRZOy4yXkkgJLPd0805t8Ivlbga1RX_xCPNUvCwR_f5YOJ0=w3024-h1612",alt:"Light version"})})]}),"\n",(0,i.jsx)(t.p,{children:"Note that Wunderbar Network team is already using the same technology stack to consume Substrate blockchain features into the app we are building as part of the Substrate Builders Program, therefore we already have experience in both the core technology stack, and the Polkadot.js API packages."}),"\n",(0,i.jsxs)(t.p,{children:["This grant ",(0,i.jsx)(t.strong,{children:"will not"})," include future ongoing maintenance of the deliverables, unless agreed prior (i.e. smaller grants to periodically refresh/keep up to date), or additional feature requests after the agreed milestone deliveries. We will however address reported bugs and major security vulnerabilities."]}),"\n",(0,i.jsx)(t.h3,{id:"ecosystem-fit",children:"Ecosystem Fit"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.strong,{children:"Where and how does your project fit into the ecosystem?"})}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"This app provides a more robust and extendable example/template app compared to the current Substrate Front End Template app, which should be of great value to builders within the ecosystem, that are utilising the same or similar tech stack as ours."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.strong,{children:"Who is your target audience (parachain/dapp/wallet/UI developers, designers, your own user base, some dapp's userbase, yourself)?"})}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Primarily UI developers, although any builders interfacing with Substrate would find value. New users, hackathon teams, etc - would also be strong contenders to use this app as a template/baseline for what they are building."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.strong,{children:"What need(s) does your project meet?"})}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"The combination of TypeScript's strong, static typing, and Vue's simplicity will together serve the purpose of providing an alternative source of very clear examples of how to interface with a Substrate Node from a modern front-end application, which should be of great value to the community."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.strong,{children:"Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?"})}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.a,{href:"https://github.com/substrate-developer-hub/substrate-front-end-template",children:"Substrate Front End Template"})," from the Substrate Developer Hub. Our project aims to provide a more robust example app, providing all the benefits and advantages mentioned above."]}),"\n",(0,i.jsxs)(t.h2,{id:"team-busts_in_silhouette",children:["Team ","\ud83d\udc65"]}),"\n",(0,i.jsx)(t.h3,{id:"team-members",children:"Team members"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Dan Henton"}),"\n",(0,i.jsx)(t.li,{children:"Mila Dymnikova"}),"\n",(0,i.jsx)(t.li,{children:"Milo\u0161 Ran\u0111elovi\u0107"}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"contact",children:"Contact"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Contact Name:"})," Dan Henton"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Contact Email:"})," ",(0,i.jsx)(t.a,{href:"mailto:dan@wunderbar.network",children:"dan@wunderbar.network"})]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Website:"})," ",(0,i.jsx)(t.a,{href:"https://wunderbar.network",children:"Wunderbar Network"})]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"legal-structure",children:"Legal Structure"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Registered Address:"})," Level 1, 320 Ti Rakau Drive, Burswood 2013, Auckland, New Zealand"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Registered Legal Entity:"})," Greengate Global Ltd"]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"teams-experience",children:"Team's experience"}),"\n",(0,i.jsx)(t.p,{children:"Wunderbar Network is a currently active participant of the Substrate Builders Program. We have extensive experience building Typescript + Vue.js apps, and interfacing with Substrate Nodes via API."}),"\n",(0,i.jsx)(t.h3,{id:"team-code-repos",children:"Team Code Repos"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/WunderbarNetwork",children:"https://github.com/WunderbarNetwork"})}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/DanHenton",children:"https://github.com/DanHenton"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/Milarr",children:"https://github.com/Milarr"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/MilosRandelovic",children:"https://github.com/MilosRandelovic"})}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"team-linkedin-profiles-if-available",children:"Team LinkedIn Profiles (if available)"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://www.linkedin.com/company/wunderbar-network/",children:"https://www.linkedin.com/company/wunderbar-network/"})}),"\n"]}),"\n",(0,i.jsxs)(t.h2,{id:"development-status-open_book",children:["Development Status ","\ud83d\udcd6"]}),"\n",(0,i.jsx)(t.p,{children:"Not started yet, mockup designs/wireframes provided above."}),"\n",(0,i.jsxs)(t.h2,{id:"development-roadmap-nut_and_bolt",children:["Development Roadmap ","\ud83d\udd29"]}),"\n",(0,i.jsx)(t.h3,{id:"overview-1",children:"Overview"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Total Estimated Duration:"})," 6 months"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Full-Time Equivalent (FTE):"}),"  0.5 FTE"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Total Costs:"})," US$ 30,000.00"]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"milestone-1---foundations--header--account-panels",children:"Milestone 1 - Foundations + Header + Account panels"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Estimated duration:"})," 2 months"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"FTE:"}),"  0.5"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Costs:"})," US$ 10,000.00"]}),"\n"]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"right"},children:"Number"}),(0,i.jsx)(t.th,{children:"Deliverable"}),(0,i.jsx)(t.th,{children:"Specification"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:(0,i.jsx)(t.strong,{children:"0a."})}),(0,i.jsx)(t.td,{children:"License"}),(0,i.jsx)(t.td,{children:"Apache 2.0"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:(0,i.jsx)(t.strong,{children:"0b."})}),(0,i.jsx)(t.td,{children:"Documentation"}),(0,i.jsxs)(t.td,{children:["We will provide both ",(0,i.jsx)(t.strong,{children:"inline documentation"})," of the code and a basic ",(0,i.jsx)(t.strong,{children:"tutorial"}),"."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:(0,i.jsx)(t.strong,{children:"0c."})}),(0,i.jsx)(t.td,{children:"Testing and Testing Guide"}),(0,i.jsx)(t.td,{children:"Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:(0,i.jsx)(t.strong,{children:"0d."})}),(0,i.jsx)(t.td,{children:"Docker"}),(0,i.jsx)(t.td,{children:"We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"1."}),(0,i.jsx)(t.td,{children:"Foundations of a Vue.js app"}),(0,i.jsx)(t.td,{children:"A standalone Vue.js/Typescript app (built using Vite)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"2."}),(0,i.jsx)(t.td,{children:"UI/UX elements"}),(0,i.jsx)(t.td,{children:"Common UI/UX elements from the provided mockup designs for the Header, Balance Transfers and Account Balances panels"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"3."}),(0,i.jsx)(t.td,{children:"Composables"}),(0,i.jsx)(t.td,{children:"Common composables to connect and interface with a Substrate node and all supported Web3 wallets"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"4."}),(0,i.jsx)(t.td,{children:"Header"}),(0,i.jsx)(t.td,{children:'Provide common Substrate node metadata and select an "active" account from a list of seeded and injected accounts'})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"5."}),(0,i.jsx)(t.td,{children:"Account Balance List & Transfer"}),(0,i.jsx)(t.td,{children:"Provide the ability to see the balances (and perform a transfer) between both seeded and injected accounts"})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"milestone-2---runtime-management-event-panel-and-pallet-interaction-composables",children:"Milestone 2 - Runtime management, Event Panel and Pallet Interaction Composables"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Estimated duration:"})," 2 months"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"FTE:"}),"  0.5"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Costs:"})," US$ 10,000.00"]}),"\n"]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"right"},children:"Number"}),(0,i.jsx)(t.th,{children:"Deliverable"}),(0,i.jsx)(t.th,{children:"Specification"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:(0,i.jsx)(t.strong,{children:"0a."})}),(0,i.jsx)(t.td,{children:"License"}),(0,i.jsx)(t.td,{children:"Apache 2.0"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:(0,i.jsx)(t.strong,{children:"0b."})}),(0,i.jsx)(t.td,{children:"Documentation"}),(0,i.jsxs)(t.td,{children:["We will provide both ",(0,i.jsx)(t.strong,{children:"inline documentation"})," of the code and a basic ",(0,i.jsx)(t.strong,{children:"tutorial"}),"."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:(0,i.jsx)(t.strong,{children:"0c."})}),(0,i.jsx)(t.td,{children:"Testing and Testing Guide"}),(0,i.jsx)(t.td,{children:"Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:(0,i.jsx)(t.strong,{children:"0d."})}),(0,i.jsx)(t.td,{children:"Docker"}),(0,i.jsx)(t.td,{children:"We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"1."}),(0,i.jsx)(t.td,{children:"Runtime management"}),(0,i.jsx)(t.td,{children:"The ability (via the header) to choose a Substrate Node connection and upgrade the runtime"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"2."}),(0,i.jsx)(t.td,{children:"Event panel"}),(0,i.jsx)(t.td,{children:"Display a panel which live-updates from global Substrate Node events"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"3."}),(0,i.jsx)(t.td,{children:"Pallet interaction composables"}),(0,i.jsx)(t.td,{children:"Composables that are able to call queries, extrinsics, RPCs and read constants"})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"milestone-3---complete-vuejs-app",children:"Milestone 3 - Complete Vue.js App"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Estimated duration:"})," 2 months"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"FTE:"}),"  0.5"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Costs:"})," US$ 10,000.00"]}),"\n"]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"right"},children:"Number"}),(0,i.jsx)(t.th,{children:"Deliverable"}),(0,i.jsx)(t.th,{children:"Specification"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:(0,i.jsx)(t.strong,{children:"0a."})}),(0,i.jsx)(t.td,{children:"License"}),(0,i.jsx)(t.td,{children:"Apache 2.0"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:(0,i.jsx)(t.strong,{children:"0b."})}),(0,i.jsx)(t.td,{children:"Documentation"}),(0,i.jsxs)(t.td,{children:["We will provide both ",(0,i.jsx)(t.strong,{children:"inline documentation"})," of the code and a basic ",(0,i.jsx)(t.strong,{children:"tutorial"}),"."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:(0,i.jsx)(t.strong,{children:"0c."})}),(0,i.jsx)(t.td,{children:"Testing and Testing Guide"}),(0,i.jsx)(t.td,{children:"Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:(0,i.jsx)(t.strong,{children:"0d."})}),(0,i.jsx)(t.td,{children:"Docker"}),(0,i.jsx)(t.td,{children:"We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"0e."}),(0,i.jsx)(t.td,{children:"Article"}),(0,i.jsxs)(t.td,{children:["We will publish an ",(0,i.jsx)(t.strong,{children:"article"}),"/workshop that explains [...] (what was done/achieved as part of the grant)."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"1."}),(0,i.jsx)(t.td,{children:"Pallet Interaction Panel"}),(0,i.jsx)(t.td,{children:"A panel that can execute extrinsics, RPC calls or display constants, using mapped parameters dynamically generated for each call, and displaying live events as the transaction transitions state"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"2."}),(0,i.jsx)(t.td,{children:"Chain State Query Panel"}),(0,i.jsx)(t.td,{children:"A panel that can display the chain state, optionally providing parameters, and displaying live events as the transaction transitions state"})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"future-plans",children:"Future Plans"}),"\n",(0,i.jsx)(t.p,{children:"We plan to promote this project within the development community. In case of significant Substrate/Polkadot.js API changes in the future, the app should be upgraded to reflect those (out of scope for the grant, as mentioned above)."}),"\n",(0,i.jsxs)(t.h2,{id:"additional-information-heavy_plus_sign",children:["Additional Information ","\u2795"]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"How did you hear about the Grants Program?"})," Via the Substrate Builders Program, networking with people from Parity/Web3 Foundation"]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}}}]);