"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[13611],{28453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>a});var i=r(96540);const n={},s=i.createContext(n);function o(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),i.createElement(s.Provider,{value:t},e.children)}},69439:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"applications/hamster","title":"Hamster","description":"- Team Name: Hamster","source":"@site/applications/hamster.md","sourceDirName":"applications","slug":"/applications/hamster","permalink":"/applications/hamster","draft":false,"unlisted":false,"editUrl":"https://github.com/w3f/Grants-Program/edit/master/applications/hamster.md","tags":[],"version":"current","frontMatter":{}}');var n=r(74848),s=r(28453);const o={},a="Hamster",l={},c=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-page_facing_up",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Project Flow",id:"project-flow",level:6},{value:"Anti-malicious attacks",id:"anti-malicious-attacks",level:6},{value:"Proof of Concept",id:"proof-of-concept",level:6},{value:"Project page",id:"project-page",level:6},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-busts_in_silhouette",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Development Status \ud83d\udcd6",id:"development-status-open_book",level:2},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-nut_and_bolt",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 Example \u2014 Implement Hamster Client and Provider Modules",id:"milestone-1-example--implement-hamster-client-and-provider-modules",level:3},{value:"Milestone 2 Example \u2014 Implement Hamster Gateway Modules",id:"milestone-2-example--implement-hamster-gateway-modules",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information \u2795",id:"additional-information-heavy_plus_sign",level:2}];function d(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h6:"h6",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"hamster",children:"Hamster"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Team Name:"})," ",(0,n.jsx)(t.a,{href:"https://github.com/orgs/hamster-shared",children:"Hamster"})]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Payment Address:"})," 0xa5dEFB39eDF3B678D3C4F264EAA909E3f490d2D0(USDT)"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsxs)(t.strong,{children:[(0,n.jsx)(t.a,{href:"https://github.com/w3f/Grants-Program/tree/master#level_slider-levels",children:"Level"}),":"]})," 2"]}),"\n"]}),"\n",(0,n.jsxs)(t.h2,{id:"project-overview-page_facing_up",children:["Project Overview ","\ud83d\udcc4"]}),"\n",(0,n.jsx)(t.h3,{id:"overview",children:"Overview"}),"\n",(0,n.jsx)(t.p,{children:"Hamster is a decentralized computing network based on the underlying chain. It aims to provide users with cost-effective computing servers. It is a decentralized platform for leasing computing resources that can be performed to rent idle computing resources"}),"\n",(0,n.jsx)(t.p,{children:"Currently there are many cloud computing service vendors providing cloud computing services, but currently with the expansion of services, the price of cloud computing services is gradually stabilized and high, and most of the cloud computing services are purchased on an annual basis, which causes great waste for current users who may use them for a short period of time, while the world's hardware capacity is gradually increasing today, and people have more and more idle computer products on hand. The goal of our product is to utilize the current idle computing resources in people's hands in a decentralized way, so that users who need it can use computing services in a cost-effective way."}),"\n",(0,n.jsx)(t.p,{children:"Our team aims to build a complete platform for leasing idle computing resources. The decentralized computing resource leasing function is realized by using substrate framework pallet, which can be leased and traded on the chain, and the link and use of computing resources can be done through the p2p network protocol under the chain after signing the lease agreement on the chain."}),"\n",(0,n.jsx)(t.h3,{id:"project-details",children:"Project Details"}),"\n",(0,n.jsx)(t.p,{children:"Hamster is composed of Hamster nodes, Hamster resource providers, Hamster clients, Hamster gateways, and Hamster front-end pages."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://gitee.com/ltyuanmu/drawing-bed/raw/master/202201121240597.jpg",alt:""})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Hamster Node: is a custom node built on Substrate 3.0."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"pallet_provider: performs resource provider registration and provider resource information storage, and provides a computational marketplace"}),"\n",(0,n.jsx)(t.li,{children:"pallet_resource-order: performs resource lease order functions and lease agreement execution"}),"\n",(0,n.jsx)(t.li,{children:"pallet_gateway: The gateway mainly has the following functions: gateway registration, gateway heartbeat detection, gateway status reset, gateway drop penalty, and receive rewards. The main role is to add the gateway as an important player in the shared computing platform"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Hamster Gateway: p2p gateway with public IP, used to link information between resource provider and resource user, built with libp2p component, is the cornerstone of the leased resource availability, can register itself to Hamster Node. That includes the ",(0,n.jsx)(t.strong,{children:"Register"}),", ",(0,n.jsx)(t.strong,{children:"Receive rewards"})," and ",(0,n.jsx)(t.strong,{children:"Configuration"})," modules."]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Register: Register Gateway information to Hamster Node."}),"\n",(0,n.jsx)(t.li,{children:"Receive rewards: Revenue for those who provide gateway resources."}),"\n",(0,n.jsx)(t.li,{children:"Configuration: Basic configuration of p2p gateway information."}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Hamster Provider: can provide compute resources and register them with Hamster Node. Compute resources are provided using both vm virtual machine technology and docker technology. Currently vm virtual machine technology is used to better protect user privacy. That includes the ",(0,n.jsx)(t.strong,{children:"Initialize configuration"}),", ",(0,n.jsx)(t.strong,{children:"Resource details"}),", ",(0,n.jsx)(t.strong,{children:"Account information"})," and ",(0,n.jsx)(t.strong,{children:"Configuration information"})," modules."]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Initialize configuration: Initialize configuration, including p2p seed node configuration, p2p port configuration."}),"\n",(0,n.jsx)(t.li,{children:"Resource details: Available spare resource specifications (cpu, memory, etc.), and price."}),"\n",(0,n.jsx)(t.li,{children:"Account information: Provide the import of the substrate account, provide the pledge of the deposit before the service, etc."}),"\n",(0,n.jsx)(t.li,{children:"Configuration information: resources that have not reached a transaction are offline at any time, resource specifications, price configuration, etc."}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Hamster Client: After purchasing compute resources in the front-end marketplace, users can view them through the client and link to them. That includes the ",(0,n.jsx)(t.strong,{children:"Market"}),", ",(0,n.jsx)(t.strong,{children:"My order"})," and ",(0,n.jsx)(t.strong,{children:"My resource"})," modules."]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Market: A trading market where computing power providers submit idle computing power to the market and configure prices. The client can choose the configuration and price resources to be purchased to form a transaction contract."}),"\n",(0,n.jsx)(t.li,{children:"My Orders: List and details of all resource orders I have purchased."}),"\n",(0,n.jsx)(t.li,{children:"My resources: The list of resources corresponding to the current valid order, the client app can establish a connection with the remote resources through the list of resources."}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Hamster Front End: Hamster Dapp, which allows users to purchase compute resources that have already been provided, and pay a certain Token to purchase a certain amount of time to use the compute resources. We can pay by the hour for more flexible use."}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h6,{id:"project-flow",children:"Project Flow"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://gitee.com/ltyuanmu/drawing-bed/raw/master/202201121707081.jpg",alt:""})}),"\n",(0,n.jsx)(t.h6,{id:"anti-malicious-attacks",children:"Anti-malicious attacks"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"How do you ensure the system isn\u2019t exploited and users actually fulfill the agreement?"}),"\n",(0,n.jsx)(t.p,{children:"When the agreement is reached, the provider is required to complete the creation of the virtual machine, notify the blockchain of the completion of the order agreement, and request a heartbeat per epoch, which includes the number of cpu cores and memory size, for the blockchain to verify that it is working and providing valid resources. The potential threat is a nefarious provider forging heartbeats to trick the network into providing a valid service that actually provides less than the promised resources or even none at all. Since we have thought long and hard about this, and we do not currently have a cryptographic or better design to accomplish such a solution, we have adopted the idea of an arbitration model to prevent malicious attacks."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://gitee.com/ltyuanmu/drawing-bed/raw/master/202202161818298.jpg",alt:""})}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"when the user finds a problem with the resource and the information configured at the time of purchase does not match, submits a validation request and requests arbitration. in order to ensure that there is no malicious validation, the submission of the request will have a certain cost pledge."}),"\n",(0,n.jsx)(t.li,{children:"the arbitration group is subject to the validation request, currently designed to arbitrate the group for the current chain of validators. because he is the block validator, will promote the role of the current ecology. It is a trusted team"}),"\n",(0,n.jsx)(t.li,{children:"the arbitration group to link the computing resources, after entering the link for linux least privilege account, to query the virtual machine specifications"}),"\n",(0,n.jsx)(t.li,{children:"arbitration break to verify and report the vote"}),"\n",(0,n.jsx)(t.li,{children:"according to the voting results for incentives and penalties, to achieve the purpose of malicious evil."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"We will follow up with cryptography or a better algorithmic model to replace the arbitration model. This will be a major topic of our subsequent research."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"What are other potential attack vectors and how are you going to address them?"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Virtual machine p2p connection security:"}),"\n",(0,n.jsx)(t.p,{children:"The connection port of the virtual machine is exposed to the p2p network and is vulnerable to security attacks from the p2p network. When provier creates a virtual machine, it will use the public key of the purchasing user and inject it into the virtual machine. The password will be changed to a random password to ensure that no one can access it, and disable remote login by password. This protects the login security of the virtual machine."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Host network security:"}),"\n",(0,n.jsxs)(t.p,{children:["Mainly facing ",(0,n.jsx)(t.code,{children:"Escape Exploit"})," . The 'Escape Exploit' problem is a persistent network security attack and needs to be solved by updating the corresponding software in time. We will iterate on the provider virtualization technology in the future."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Project Technology Stacks"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Rust"}),"\n",(0,n.jsx)(t.li,{children:"Substrate"}),"\n",(0,n.jsx)(t.li,{children:"Node.js"}),"\n",(0,n.jsx)(t.li,{children:"Golang"}),"\n",(0,n.jsx)(t.li,{children:"Wails"}),"\n",(0,n.jsx)(t.li,{children:"Libp2p"}),"\n",(0,n.jsx)(t.li,{children:"Kvm"}),"\n",(0,n.jsx)(t.li,{children:"Docker"}),"\n",(0,n.jsx)(t.li,{children:"Vue.js"}),"\n",(0,n.jsx)(t.li,{children:"Polkadot.js"}),"\n"]}),"\n",(0,n.jsx)(t.h6,{id:"proof-of-concept",children:"Proof of Concept"}),"\n",(0,n.jsx)(t.p,{children:"The current project is in the primary stage of validation of the entire business process, the Gateway module has not yet been completed, this is the goal of our subsequent planning."}),"\n",(0,n.jsx)(t.h6,{id:"project-page",children:"Project page"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Resource Registration"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://gitee.com/ltyuanmu/drawing-bed/raw/master/202201141534648.jpg",alt:""})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Resource Purchase"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://gitee.com/ltyuanmu/drawing-bed/raw/master/202201141520784.jpg",alt:""})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Resource Usage"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://gitee.com/ltyuanmu/drawing-bed/raw/master/202201141520193.jpg",alt:""})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"ecosystem-fit",children:"Ecosystem Fit"}),"\n",(0,n.jsx)(t.p,{children:"Our project is a distributed shared computing platform. Through the shared computing platform, our target customers are user groups with idle resource machines and some users who want to use cost-effective resources, they can be developers, designers, etc., and can deploy their inspirations that they want to share to our shared computing network to share out. The follow-up vision is to build an ecosystem of shared services on the shared platform network"}),"\n",(0,n.jsxs)(t.h2,{id:"team-busts_in_silhouette",children:["Team ","\ud83d\udc65"]}),"\n",(0,n.jsx)(t.h3,{id:"team-members",children:"Team members"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Teng Liang"}),"\n",(0,n.jsx)(t.li,{children:"Haijiang Mo"}),"\n",(0,n.jsx)(t.li,{children:"Jianguo Sun"}),"\n",(0,n.jsx)(t.li,{children:"Zhiwei Li"}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"contact",children:"Contact"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Contact Name:"})," Teng Liang"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Contact Email:"})," ",(0,n.jsx)(t.a,{href:"mailto:ltyuanmu@gmail.com",children:"ltyuanmu@gmail.com"})]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Website:"})," Hamster is currently maintained on ",(0,n.jsx)(t.a,{href:"https://github.com/orgs/hamster-shared",children:"Github"}),", no website has been created yet"]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"legal-structure",children:"Legal Structure"}),"\n",(0,n.jsx)(t.h3,{id:"teams-experience",children:"Team's experience"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.em,{children:"Teng Liang"}),": Currently a team project leader with 8 years of software development experience, designed in the areas of Cloud Computing, Cloud Native, DevOps. and familiar with Java/Go/Rust languages and Solidity smart contract development."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.em,{children:"Haijiang Mo"}),": CTO of the team, with 10 years of software development experience. He is familiar with Go/Rust/Java/Python/Javascript/Typescript and has worked in cloud computing, cloud native, DevOps."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.em,{children:"Jianguo Sun"})," : Full-stack engineer with three years of development experience. And familiar with Go/Rust/Java/Python/Javascript/Typescript, front-end and client-side development."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.em,{children:"Zhiwei Li"}),": Graduate student in Computer Science, Substrate pallet developer."]}),"\n",(0,n.jsx)(t.h3,{id:"team-code-repos",children:"Team Code Repos"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://github.com/hamster-shared",children:"https://github.com/hamster-shared"})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://github.com/hamster-shared/frontend",children:"https://github.com/hamster-shared/frontend"})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://github.com/hamster-shared/hamster",children:"https://github.com/hamster-shared/hamster"})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://github.com/hamster-shared/hamster-client",children:"https://github.com/hamster-shared/hamster-client"})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://github.com/hamster-shared/hamster-provider",children:"https://github.com/hamster-shared/hamster-provider"})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://github.com/ltmuyuan",children:"https://github.com/ltmuyuan"})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://github.com/mohaijiang",children:"https://github.com/mohaijiang"})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://github.com/jian-guo-s",children:"https://github.com/jian-guo-s"})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://github.com/LwwL-123",children:"https://github.com/LwwL-123"})}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.h2,{id:"development-status-open_book",children:["Development Status ","\ud83d\udcd6"]}),"\n",(0,n.jsx)(t.p,{children:"We have completed a simple version of the project for minimal process execution, and will subsequently update the usage documentation so you can install and experience using it."}),"\n",(0,n.jsx)(t.p,{children:"The following is a list of the features that have been implemented:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Hamster Node"}),"\n",(0,n.jsx)(t.p,{children:"Computer resource register"}),"\n",(0,n.jsx)(t.p,{children:"Update computer resource unit-price"}),"\n",(0,n.jsx)(t.p,{children:"Create resource order"}),"\n",(0,n.jsx)(t.p,{children:"Provider finish order"}),"\n",(0,n.jsx)(t.p,{children:"Provider heartbeat"}),"\n",(0,n.jsx)(t.p,{children:"Provider staking amount"}),"\n",(0,n.jsx)(t.p,{children:"Provider withdraw amount"}),"\n",(0,n.jsx)(t.p,{children:"Withdraw rental amount"}),"\n",(0,n.jsx)(t.p,{children:"Withdraw fault execution"}),"\n",(0,n.jsx)(t.p,{children:"Client cancel order"}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Hamster Provider"}),"\n",(0,n.jsx)(t.p,{children:"Computer create"}),"\n",(0,n.jsx)(t.p,{children:"Computer destruction"}),"\n",(0,n.jsx)(t.p,{children:"P2p link listen"}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Hamster Client"}),"\n",(0,n.jsx)(t.p,{children:"List of paid computers"}),"\n",(0,n.jsx)(t.p,{children:"Computer link usage"}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Hamster Front End"}),"\n",(0,n.jsx)(t.p,{children:"Computing market"}),"\n",(0,n.jsx)(t.p,{children:"Provider shared computing"}),"\n",(0,n.jsx)(t.p,{children:"Provider lease agreement list"}),"\n",(0,n.jsx)(t.p,{children:"List of computers purchased by the customer"}),"\n",(0,n.jsx)(t.p,{children:"Customer order list"}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Hamster Gateway"}),"\n",(0,n.jsx)(t.p,{children:"Private IPFs network"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.h2,{id:"development-roadmap-nut_and_bolt",children:["Development Roadmap ","\ud83d\udd29"]}),"\n",(0,n.jsx)(t.h3,{id:"overview-1",children:"Overview"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Total Estimated Duration:"})," 2 months"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Full-Time Equivalent (FTE):"}),"  4 FTE"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Total Costs:"})," $25,600"]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"milestone-1-example--implement-hamster-client-and-provider-modules",children:"Milestone 1 Example \u2014 Implement Hamster Client and Provider Modules"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Estimated duration:"})," 1 month"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"FTE:"}),"  4"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Costs:"})," $12,800"]}),"\n"]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"right"},children:"Number"}),(0,n.jsx)(t.th,{children:"Deliverable"}),(0,n.jsx)(t.th,{children:"Specification"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0a."}),(0,n.jsx)(t.td,{children:"License"}),(0,n.jsx)(t.td,{children:"Apache 2.0"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0b."}),(0,n.jsx)(t.td,{children:"Documentation"}),(0,n.jsxs)(t.td,{children:["We will provide online documentation of the code and a basic tutorial that includes",(0,n.jsx)("br",{}),"1. Hamster Client installation tutorial",(0,n.jsx)("br",{}),"2. Hamster Client usage tutorial",(0,n.jsx)("br",{}),"3. Hamster Provider installation tutorial",(0,n.jsx)("br",{}),"4. Hamster Provider usage tutorial",(0,n.jsx)("br",{}),"5. Hamster Chain installation tutorial",(0,n.jsx)("br",{}),"6. Hamster Chain usage tutorial"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0c."}),(0,n.jsx)(t.td,{children:"Testing Guide"}),(0,n.jsx)(t.td,{children:"Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"1."}),(0,n.jsx)(t.td,{children:"Hamster Client"}),(0,n.jsxs)(t.td,{children:["We will create a desktop client that will have ",(0,n.jsx)(t.strong,{children:"Market"}),",",(0,n.jsx)(t.strong,{children:"My order"})," and ",(0,n.jsx)(t.strong,{children:"My resource"})," module.",(0,n.jsx)("br",{}),"We will provide a desktop (windows, macos,linux) app based on ",(0,n.jsx)(t.a,{href:"https://wails.io/",children:"wails"})," to achieve",(0,n.jsx)("br",{}),"1: Market inquiry and management of purchased resources,",(0,n.jsx)("br",{}),"2: The point-to-point communication between the client and the computing resource provider.",(0,n.jsx)("br",{}),"3: Query historical orders",(0,n.jsx)("br",{}),"4: Partial fee refund for defaulted orders",(0,n.jsx)("br",{}),"Tech stack: go+wails+go-libp2p+vue.js+polkadot.js"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"2."}),(0,n.jsx)(t.td,{children:"Hamster Provider"}),(0,n.jsxs)(t.td,{children:["We will create a a resource provider server that will have ",(0,n.jsx)(t.strong,{children:"Initialize configuration"}),",",(0,n.jsx)(t.strong,{children:"Resource details"}),",",(0,n.jsx)(t.strong,{children:"Account information"})," and ",(0,n.jsx)(t.strong,{children:"Configuration information"})," module.",(0,n.jsx)("br",{}),"The resource provider will use the idle resources of the machine, register in the market, and declare that it can provide rental. When the provided virtual machine reaches a transaction in the market, the resource provider provides the virtual machine with the corresponding quota for the remote purchaser to use according to the agreement. The resource provider will establish a p2p connection with the used client for remote management, such as ssh, rdesktop, etc.",(0,n.jsx)("br",{}),"Our initial idea is to use the libvirt scheme to implement the management of virtual machines. (Windows uses Hyper-V)",(0,n.jsx)("br",{}),"We will support these operating systems: Windows 10, Ubuntu 18+, CentOS 7+",(0,n.jsx)("br",{}),"Tech stack: go+go-libp2p+libvirt+go-substrate-rpc-client+gin"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"3."}),(0,n.jsx)(t.td,{children:"Hamster Provider: web app"}),(0,n.jsxs)(t.td,{children:["Web app is a set of web management tools of Provider. Through this set of management tools, users can share or stop sharing idle resources for their own use, set prices for their own idle resources, adjust the specifications of idle resources provided, and modify the provisioning services of idle resources. period, etc. And when a transaction is terminated normally, the desired compensation can be obtained through the contract. (Providing idle resource services requires a certain pledge. After the transaction is breached, part of the pledge deposit will be deducted. If the pledge deposit is too low, other people will not be able to see this idle shared resource in the market)",(0,n.jsx)("br",{}),"Tech stack: vue.js+polkadot.js+Node.js"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"4."}),(0,n.jsx)(t.td,{children:"Hamster chain"}),(0,n.jsx)(t.td,{children:"pallet_provider, pallet_resource-order modifications and optimizations due to the need to optimize and adapt already developed pallets when adding features for customers. As code delivery of the underlying framework, there are two integrated pallets"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"5."}),(0,n.jsx)(t.td,{children:"Whitepaper"}),(0,n.jsx)(t.td,{children:"Preparation of project white papers"})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"milestone-2-example--implement-hamster-gateway-modules",children:"Milestone 2 Example \u2014 Implement Hamster Gateway Modules"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Estimated duration:"})," 1 month"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"FTE:"}),"  4"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Costs:"})," $12,800"]}),"\n"]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"right"},children:"Number"}),(0,n.jsx)(t.th,{children:"Deliverable"}),(0,n.jsx)(t.th,{children:"Specification"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0a."}),(0,n.jsx)(t.td,{children:"License"}),(0,n.jsx)(t.td,{children:"Apache 2.0"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0b."}),(0,n.jsx)(t.td,{children:"Documentation"}),(0,n.jsxs)(t.td,{children:["We will provide online documentation of the code and a basic tutorial that includes",(0,n.jsx)("br",{}),"1. Hamster Gateway installation tutorial",(0,n.jsx)("br",{}),"2. Hamster Gateway usage tutorial"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0c."}),(0,n.jsx)(t.td,{children:"Testing Guide"}),(0,n.jsx)(t.td,{children:"Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0d."}),(0,n.jsx)(t.td,{children:"Article"}),(0,n.jsx)(t.td,{children:"We will write an article or tutorial that explains the work done as part of the grant."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"1."}),(0,n.jsx)(t.td,{children:"Hamster Gateway"}),(0,n.jsxs)(t.td,{children:["We will create a desktop client that will have ",(0,n.jsx)(t.strong,{children:"Register"}),", ",(0,n.jsx)(t.strong,{children:"Receive rewards"})," and ",(0,n.jsx)(t.strong,{children:"Configuration"})," module.",(0,n.jsx)("br",{}),"Tech stack: go+go-libp2p+libvirt+go-substrate-rpc-client+gin"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"2."}),(0,n.jsx)(t.td,{children:"Hamster Node: pallet_gateway"}),(0,n.jsxs)(t.td,{children:["We will create a Substrate module that will have ",(0,n.jsx)(t.strong,{children:"Register gateway"}),",",(0,n.jsx)(t.strong,{children:"Receive rewards"})," etc function."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"3."}),(0,n.jsx)(t.td,{children:"Hamster Gateway: web app"}),(0,n.jsxs)(t.td,{children:["We will create a web app integrated in the Hamster Gateway, to let users easily interact with our Hamster Gateway function module.",(0,n.jsx)("br",{}),"Tech stack: vue.js+polkadot.js+Node.js"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"4."}),(0,n.jsx)(t.td,{children:"Hamster chain"}),(0,n.jsx)(t.td,{children:"Add a gateway module in the Hamster chain, to enable users to share gateway resources with public IP , receive rewards, etc."})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"future-plans",children:"Future Plans"}),"\n",(0,n.jsx)(t.p,{children:"Our current goal is to provide distributed shared computing power. After this milestone is completed, we will be able to build our own ecosystem based on resources. That is, when everyone is willing to add their free resources to the hamster network, it can be assumed that there are near-infinite computing resources in the network, and more quality services can be built and constructed in the hamster network. For example, service providers no longer need to rely on the support of a single cloud vendor, but only need to use the computing resources in the hamster network, and the system automatically schedules the resource arithmetic needed for the services to build their own services in the form of edge computing. In addition to this, we can also provide some toolkits so that these computing resources can participate in other services with one click, such as becoming a chain node of Thegraph, so that they can participate in other networks, and later on, we can also use incentives to encourage people to develop toolkits for different blockchain ecosystems. When more and more people and more service providers participate in the hamster network, maybe it can become a truly decentralized metaverse service cornerstone."}),"\n",(0,n.jsxs)(t.h2,{id:"additional-information-heavy_plus_sign",children:["Additional Information ","\u2795"]}),"\n",(0,n.jsx)(t.p,{children:"So far, we are self-funded development. However, for our long-term vision, we will try to get support from investment institutions."})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}}}]);