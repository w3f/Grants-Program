"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[64784],{28453:(e,t,i)=>{i.d(t,{R:()=>l,x:()=>r});var s=i(96540);const n={},a=s.createContext(n);function l(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),s.createElement(a.Provider,{value:t},e.children)}},33386:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"applications/substrate-evm-adapter","title":"Substrate EVM Adapter","description":"- Team Name: Dastanbek Samatov","source":"@site/applications/substrate-evm-adapter.md","sourceDirName":"applications","slug":"/applications/substrate-evm-adapter","permalink":"/applications/substrate-evm-adapter","draft":false,"unlisted":false,"editUrl":"https://github.com/w3f/Grants-Program/edit/master/applications/substrate-evm-adapter.md","tags":[],"version":"current","frontMatter":{}}');var n=i(74848),a=i(28453);const l={},r="Substrate EVM Adapter",o={},d=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-page_facing_up",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Rationale",id:"rationale",level:4},{value:"Substrate ETH-RPC Adapter",id:"substrate-eth-rpc-adapter",level:4},{value:"Substrate EVM Adapter Pallet",id:"substrate-evm-adapter-pallet",level:4},{value:"Full flow",id:"full-flow",level:4},{value:"Limitations and challenges",id:"limitations-and-challenges",level:4},{value:"Inspirations",id:"inspirations",level:4},{value:"Tech stack",id:"tech-stack",level:4},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-busts_in_silhouette",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles (if available)",id:"team-linkedin-profiles-if-available",level:3},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-nut_and_bolt",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 \u2014 ETH RPC Adapter",id:"milestone-1--eth-rpc-adapter",level:3},{value:"Milestone 2 \u2014 EVM Adapter Pallet",id:"milestone-2--evm-adapter-pallet",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information",id:"additional-information",level:2}];function c(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"substrate-evm-adapter",children:"Substrate EVM Adapter"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Team Name:"})," Dastanbek Samatov"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Payment Details:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"DOT"}),": 16FqwPZ8GRC5U5D4Fu7W33nA55ZXzXGWHwmbnE1eT6pxuqcT"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Payment"}),": 16FqwPZ8GRC5U5D4Fu7W33nA55ZXzXGWHwmbnE1eT6pxuqcT (USDT)"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsxs)(t.strong,{children:[(0,n.jsx)(t.a,{href:"https://github.com/w3f/Grants-Program/tree/master#level_slider-levels",children:"Level"}),":"]})," 2"]}),"\n"]}),"\n",(0,n.jsxs)(t.h2,{id:"project-overview-page_facing_up",children:["Project Overview ","\ud83d\udcc4"]}),"\n",(0,n.jsx)(t.h3,{id:"overview",children:"Overview"}),"\n",(0,n.jsx)(t.p,{children:"This project aims to present an alternative approach to EVM compatibility for Substrate chains. The main goals are to improve developer experience and introduce an approach that requires the least amount of changes to the runtime and client. It does so by leveraging the best parts of multiple existing compatibility solutions and other awesome ecosystem tools."}),"\n",(0,n.jsx)(t.p,{children:"The main components of the project are:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"a standalone ETH RPC adapter that will enable a partial EVM compatibility for Substrate chains"}),"\n",(0,n.jsx)(t.li,{children:"a pallet responsible for bridging ETH RPC adapter with the Substrate chain"}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"project-details",children:"Project Details"}),"\n",(0,n.jsx)(t.p,{children:"As stated above, main requirements are:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"provide opt-in partial or full EVM compatibility for Substrate chains"}),"\n",(0,n.jsx)(t.li,{children:"minimal changes to the runtime and client"}),"\n"]}),"\n",(0,n.jsx)(t.h4,{id:"rationale",children:"Rationale"}),"\n",(0,n.jsx)(t.p,{children:"In its essence, EVM compatibility means that a Substrate chain can be interacted with using Ethereum tools and workflows. It is obvious that EVM compatibility solutions are important for the ecosystem to attract more developers and users. Therefore, it is imperative to provide as many solutions as possible to cater to different needs and requirements."}),"\n",(0,n.jsxs)(t.p,{children:["Imagine being able to read the state of any Substrate chain using web3.js without making fundamental changes to the chain or tools. And what if we could extend this to ",(0,n.jsx)(t.em,{children:"almost"})," full EVM compatibility (read and write) by adding a single pallet to the chain? This is basically what we aim to achieve with this project."]}),"\n",(0,n.jsx)(t.h4,{id:"substrate-eth-rpc-adapter",children:"Substrate ETH-RPC Adapter"}),"\n",(0,n.jsxs)(t.p,{children:["The cornerstone of this project is an adapter service that emulates an Ethereum RPC. It translates any incoming Ethereum JSON-RPC calls into their Substrate equivalent RPC calls in real-time, basically forwarding it to the local ",(0,n.jsx)(t.code,{children:"smoldot"})," light client or remote Substrate RPC node. From the perspective of external tools, the adapter will look like a regular ETH RPC node. Adapter will implement the necessary mapping logic for the most essential Ethereum RPC calls like ",(0,n.jsx)(t.code,{children:"eth_getBlockByNumber"})," and ",(0,n.jsx)(t.code,{children:"eth_getStorageAt"}),", etc. For the sake of simplicity each pallet will be given a unique, deterministic address, much similar to precompiles in Frontier (probably a name of the pallet in byte form). However, unlike Frontier, there will be no need to write custom precompile for each pallet or embed an ETH RPC to Substrate client."]}),"\n",(0,n.jsx)(t.p,{children:"By default, the adapter runs an embedded light client to ensure fast access to the chain state. By going this route, we will avoid the need to run a full node or make any changes to the client itself. It will be possible to not run the light client and connect to a remote Substrate node instead, but users will have to be aware of latency issues and well-known security risks of trusting a remote node."}),"\n",(0,n.jsx)(t.p,{children:"The list of supported RPC calls will be limited to the most essential ones, to keep the adapter lightweight and generic:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"eth_chainId"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"eth_getBalance"})}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"eth_getCode"})," - some dummy code for all pallets"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"eth_call"})," (stateless, could be forwarded to either storage query or runtime API calls)"]}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"eth_blockNumber"})}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"eth_getBlock*"})," (by number/hash, receipts, transaction count)"]}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"eth_gasPrice"})}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"eth_getTransaction*"})," (by hash, by block, count, receipt)"]}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"eth_getLogs"})}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"eth_getStorageAt"})," - similar to ",(0,n.jsx)(t.code,{children:"eth_call"}),", but more generic and operates with raw keys"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"eth_subscribe"})," - only ",(0,n.jsx)(t.code,{children:"newHeads"})," and ",(0,n.jsx)(t.code,{children:"logs"})," for now"]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["There has been some talk about reading the chain state of Substrate node using tools like Metamask or ",(0,n.jsx)(t.code,{children:"web3.js"}),". And this is exactly what we will achieve by implementing this adapter. For tools that only need read access, be it for data analysis, explorers or other purposes, this module will be sufficient. Therefore, accomplishment of at least this part of the project will already meet the demands of some users."]}),"\n",(0,n.jsx)(t.h4,{id:"substrate-evm-adapter-pallet",children:"Substrate EVM Adapter Pallet"}),"\n",(0,n.jsxs)(t.p,{children:["The second part of the project is to provide both the read and write access to the chain. Unfortunately, due to some fundamental differences between Ethereum and Substrate chains, it is not possible to achieve this out of the box. This is why it is necessary to have at least ",(0,n.jsx)(t.code,{children:"pallet-evm"})," to provide and some other module that verifies ECDSA signatures and has some account mapping logic. This pallet will loosely couple with ",(0,n.jsx)(t.code,{children:"pallet-evm"})," to access the EVM runner, executing bytecode if necessary. And will utilise ",(0,n.jsx)(t.code,{children:"frontier"}),"'s ",(0,n.jsx)(t.code,{children:"dispatch"})," ",(0,n.jsx)(t.a,{href:"https://github.com/polkadot-evm/frontier/tree/master/frame/evm/precompile/dispatch",children:"precompile"})," to dispatch FRAME calls originating from the ETH RPC adapter. This part of the project can be opt-in feature that can be added to the runtime if close to full EVM compatibility is desired."]}),"\n",(0,n.jsxs)(t.p,{children:["For account mapping, we will follow the ",(0,n.jsx)(t.a,{href:"https://forum.polkadot.network/t/wrappedevm-eth-rpc-compatibility-layer/2775/6",children:"approach"})," of ",(0,n.jsx)(t.code,{children:"Unique"}),": hashing ",(0,n.jsx)(t.code,{children:"AccountId20"})," to get ",(0,n.jsx)(t.code,{children:"AccountId32"})," and truncating ",(0,n.jsx)(t.code,{children:"AccountId32"})," to get ",(0,n.jsx)(t.code,{children:"AccountId20"}),". This way, users will have to first deposit to their corresponding, deterministic Substrate style accounts before interacting with the chain with their EVM style account."]}),"\n",(0,n.jsx)(t.p,{children:"This pallet will complete the full ETH RPC compatibility by enabling the write access to the chain. In other words, at least these RPC calls will be supported by ETH-RPC adapter:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"eth_sendTransaction"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"eth_sendRawTransaction"})}),"\n"]}),"\n",(0,n.jsx)(t.h4,{id:"full-flow",children:"Full flow"}),"\n",(0,n.jsx)(t.p,{children:"The following diagram is a high-level illustration of how the project will work:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://github.com/dastansam/Grants-Program/assets/22231829/4a1be51b-17b0-43a4-b42f-6f5694d3911f",alt:"Untitled-2024-03-27-2305"})}),"\n",(0,n.jsx)(t.h4,{id:"limitations-and-challenges",children:"Limitations and challenges"}),"\n",(0,n.jsxs)(t.p,{children:['Some limitations arise from the fact that Substrate and Ethereum are fundamentally different. For example, transaction hashes are not unique in Substrate, dust accounts issue is handled in Substrate, but not in Ethereum, etc. Therefore, it should be noted that it is extremely difficult to provide "full" EVM compatibility. And during the course of the development, there will certainly be some decisions that won\'t align with true EVM experience. However, the goal is to provide a ',(0,n.jsx)(t.em,{children:"good enough"})," compatibility that will be agnostic to the chain and tools used. Most importantly, in some cases it would be even better to default to Substrate-like behaviour, since Substrate was, in some sense, originally designed to fix some of the limitations that Ethereum still has."]}),"\n",(0,n.jsx)(t.h4,{id:"inspirations",children:"Inspirations"}),"\n",(0,n.jsxs)(t.p,{children:["In general, it was inspired by working with the current EVM compatibility solutions and the need to provide a more lightweight and flexible solution. But there are some notable ",(0,n.jsx)(t.a,{href:"https://forum.polkadot.network/t/wrappedevm-eth-rpc-compatibility-layer/2775",children:"discussions"})," and ",(0,n.jsx)(t.a,{href:"https://substrate.stackexchange.com/questions/8983/read-pallet-state-using-metamask",children:"questions"})," in the community that also gave some validations and inspirations to this project."]}),"\n",(0,n.jsx)(t.h4,{id:"tech-stack",children:"Tech stack"}),"\n",(0,n.jsx)(t.p,{children:"The project will be implemented completly in Rust. The ETH RPC adapter will be a standalone service that will be run as a separate process. The EVM adapter pallet will be a part of the Substrate runtime. There will be some other primitives and components included in the runtime that will make it easier to interact with the pallet."}),"\n",(0,n.jsxs)(t.p,{children:["DApp demo is a simple web application that will interact with the Substrate chain using the ETH RPC adapter. It will be written in JavaScript and will use ",(0,n.jsx)(t.code,{children:"web3.js"})," to interact with the adapter."]}),"\n",(0,n.jsx)(t.h3,{id:"ecosystem-fit",children:"Ecosystem Fit"}),"\n",(0,n.jsx)(t.p,{children:"These are the existing solutions that aim to provide EVM compatibility for Substrate chains. The most notable ones are:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Frontier"}),": Offers full EVM compatibility by incorporating an EVM execution engine into the runtime and EVM RPC in the client. It demands significant changes to both the node and runtime, potentially introducing complexity and performance overhead."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"ethink!"})}),": Aims to add EVM ",(0,n.jsx)(t.a,{href:"https://sasha.ink/proposals/ethink-01/#stage-0-proof-of-concept--done",children:"compatibility"})," to ",(0,n.jsx)(t.code,{children:"ink!"})," smart contracts. While innovative, it mainly focuses on a specific use case and does not provide a comprehensive solution for general EVM compatibility. It also requires embedding ETH RPC to the client. However, it is only similar to our project in how it uses a custom pallet as a middleman between the bytecode execution engine and EVM calls."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Polkamask"}),": A MetaMask snap designed to connect MetaMask with Substrate chains. Though it provides an easy-to-use solution for end-users, it relies on trusting an external plugin, raising concerns about security and trustlessness. It also doesn't provide a way to interact with the chain state outside of MetaMask."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Acala EVM+"}),": An EVM compatibility solution for Acala Network. It is important to note that, among other solutions, this one is the closest to what we aim to achieve, however, it is tailored to Acala Network and requires some changes to existing developer tools (custom ",(0,n.jsx)(t.code,{children:"bodhi.js"})," instead of ",(0,n.jsx)(t.code,{children:"web3.js"}),") to work. Moreover, it uses modified ",(0,n.jsx)(t.code,{children:"pallet-evm"}),", rpc adapter only works with remote Acala node, and it has some additional runtime APIs, etc."]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Our solution aims to use the best parts of these existing solutions while attempting to address some of their limitations. By providing a standalone ETH RPC adapter and an EVM adapter pallet, we offer a flexible and lightweight approach to EVM compatibility that can be easily integrated into any Substrate chain without imposing heavy requirements on the client and the runtime. By embedding the light client, we achieve faster and more reliable access to blockchain data, reducing latency and avoiding dependencies on external nodes. With a custom pallet that is loosely coupled with ",(0,n.jsx)(t.code,{children:"pallet-evm"}),", we ensure keypair compatibility and a way to dispatch FRAME calls from the ETH RPC adapter. And most importantly, the goal is to be as generic as possible, so that it can be easily integrated into any Substrate chain."]}),"\n",(0,n.jsxs)(t.h2,{id:"team-busts_in_silhouette",children:["Team ","\ud83d\udc65"]}),"\n",(0,n.jsx)(t.h3,{id:"team-members",children:"Team members"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Dastanbek Samatov"}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"contact",children:"Contact"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Contact Name:"})," Dastanbek Samatov"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Contact Email:"})," ",(0,n.jsx)(t.a,{href:"mailto:dastanbeksamatov@gmail.com",children:"dastanbeksamatov@gmail.com"})]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Website:"})," ",(0,n.jsx)(t.a,{href:"https://dastansam.github.io/",children:"https://dastansam.github.io/"})]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"legal-structure",children:"Legal Structure"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Registered Address:"})," No registered entity"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Registered Legal Entity:"})," No registered entity"]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"teams-experience",children:"Team's experience"}),"\n",(0,n.jsxs)(t.p,{children:["Dastanbek Samatov is a Rust Engineer with extensive experience in Substrate. For the past 3 years he has been working as a Protocol Engineer in various projects (all EVM compatible) in the Polkadot ecosystem. He periodically contributes to ",(0,n.jsx)(t.code,{children:"polkadot-sdk"}),", active in the community and has contributed to several Web3 Foundation grants before. Some relevent links to projects and contributions:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"Framework for Substrate Runtimes in AssemblyScript"})," - ",(0,n.jsx)(t.a,{href:"https://github.com/LimeChain/subsembly",children:"https://github.com/LimeChain/subsembly"})]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"Hyperfridge"})," - ",(0,n.jsx)(t.a,{href:"https://github.com/element36-io/ocw-ebics",children:"https://github.com/element36-io/ocw-ebics"})]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"ISO-8583 POC"})," - ",(0,n.jsx)(t.a,{href:"https://github.com/subclone/iso8583-chain",children:"https://github.com/subclone/iso8583-chain"})]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"polkadot-sdk"})," - ",(0,n.jsx)(t.a,{href:"https://github.com/paritytech/polkadot-sdk/pulls/dastansam",children:"https://github.com/paritytech/polkadot-sdk/pulls/dastansam"})]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"Substrate StackExchange"})," - ",(0,n.jsx)(t.a,{href:"https://substrate.stackexchange.com/users/2005/dastansam",children:"https://substrate.stackexchange.com/users/2005/dastansam"})]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"team-code-repos",children:"Team Code Repos"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/subclone/subeth",children:"https://github.com/subclone/subeth"})}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Team members:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/dastansam",children:"https://github.com/dastansam"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/dastanbeksamatov",children:"https://github.com/dastanbeksamatov"})}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"team-linkedin-profiles-if-available",children:"Team LinkedIn Profiles (if available)"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://linkedin.com/in/dastanbek-samatov",children:"https://linkedin.com/in/dastanbek-samatov"})}),"\n"]}),"\n",(0,n.jsxs)(t.h2,{id:"development-roadmap-nut_and_bolt",children:["Development Roadmap ","\ud83d\udd29"]}),"\n",(0,n.jsx)(t.h3,{id:"overview-1",children:"Overview"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Total Estimated Duration:"})," 15 weeks"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Full-Time Equivalent (FTE):"}),"  1 FTE"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Total Costs:"})," 30,000 USDT"]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"milestone-1--eth-rpc-adapter",children:"Milestone 1 \u2014 ETH RPC Adapter"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Estimated duration:"})," 6 weeks"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"FTE:"}),"  1"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Costs:"})," 12,000 USD"]}),"\n"]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"right"},children:"Number"}),(0,n.jsx)(t.th,{children:"Deliverable"}),(0,n.jsx)(t.th,{children:"Specification"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:(0,n.jsx)(t.strong,{children:"0a."})}),(0,n.jsx)(t.td,{children:"License"}),(0,n.jsx)(t.td,{children:"MIT"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:(0,n.jsx)(t.strong,{children:"0b."})}),(0,n.jsx)(t.td,{children:"Documentation"}),(0,n.jsxs)(t.td,{children:["We will provide both ",(0,n.jsx)(t.strong,{children:"inline documentation"})," of the code and a basic ",(0,n.jsx)(t.strong,{children:"tutorial"})," that explains how a user can (for example) spin up the adapter and connect it to the familiar developer tools."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:(0,n.jsx)(t.strong,{children:"0c."})}),(0,n.jsx)(t.td,{children:"Testing and Testing Guide"}),(0,n.jsx)(t.td,{children:"Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:(0,n.jsx)(t.strong,{children:"0d."})}),(0,n.jsx)(t.td,{children:"Docker"}),(0,n.jsx)(t.td,{children:"We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"1."}),(0,n.jsx)(t.td,{children:"ETH-RPC Adapter"}),(0,n.jsxs)(t.td,{children:["We will create a generic ETH-RPC Adapter service for Substrate chains. It will support the most essential ETH RPC calls to make it work with the existing tools. Main goals here will be ability to connect to Metamask, ",(0,n.jsx)(t.code,{children:"web3.js"}),", read Substrate chain's pallets' state and support subscriptions. Adapter will have option of running local ",(0,n.jsx)(t.code,{children:"smoldot"})," instance or connecting to remote RPC node."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"2."}),(0,n.jsx)(t.td,{children:"Deno module"}),(0,n.jsx)(t.td,{children:"We will create a Deno module that can connect to Substrate chain as an ETH-RPC adapter + light client."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"3."}),(0,n.jsx)(t.td,{children:"Javascript package"}),(0,n.jsx)(t.td,{children:"We will provide a javascript package that can connect to Substrate chain as an ETH-RPC adapter + light client."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"4."}),(0,n.jsx)(t.td,{children:"End-to-end tests"}),(0,n.jsx)(t.td,{children:"We will provide comprehensive end-to-end tests for the adapter."})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"milestone-2--evm-adapter-pallet",children:"Milestone 2 \u2014 EVM Adapter Pallet"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Estimated duration:"})," 9 weeks"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"FTE:"}),"  1"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Costs:"})," 18,000 USD"]}),"\n"]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"right"},children:"Number"}),(0,n.jsx)(t.th,{children:"Deliverable"}),(0,n.jsx)(t.th,{children:"Specification"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:(0,n.jsx)(t.strong,{children:"0a."})}),(0,n.jsx)(t.td,{children:"License"}),(0,n.jsx)(t.td,{children:"MIT"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:(0,n.jsx)(t.strong,{children:"0b."})}),(0,n.jsx)(t.td,{children:"Documentation"}),(0,n.jsxs)(t.td,{children:["We will provide both ",(0,n.jsx)(t.strong,{children:"inline documentation"})," of the code and a basic ",(0,n.jsx)(t.strong,{children:"tutorial"})," that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:(0,n.jsx)(t.strong,{children:"0c."})}),(0,n.jsx)(t.td,{children:"Testing and Testing Guide"}),(0,n.jsx)(t.td,{children:"Core functions will be fully covered by comprehensive unit and integration tests to ensure functionality and robustness. In the guide, we will describe how to run these tests."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:(0,n.jsx)(t.strong,{children:"0d."})}),(0,n.jsx)(t.td,{children:"Docker"}),(0,n.jsx)(t.td,{children:"We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:(0,n.jsx)(t.strong,{children:"0e."})}),(0,n.jsx)(t.td,{children:"Article"}),(0,n.jsx)(t.td,{children:"I will publish an article that explains the complete lifecycle and future plans of the project"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"1."}),(0,n.jsx)(t.td,{children:"EVM Adapter Pallet"}),(0,n.jsxs)(t.td,{children:["We will create a pallet that will be responsible for bridging the gap between the ETH RPC adapter and the Substrate chain. It will have the ability to dispatch FRAME calls, opt-in possibility to execute EVM bytecode, and handle account mapping. Another main responsibility of the pallet will be handling signature verification. Some parts of this pallet can be inspired from ",(0,n.jsx)(t.code,{children:"frontier"}),"'s pallet ",(0,n.jsx)(t.code,{children:"pallet-ethereum"})," but needs refinement and some modification."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"2."}),(0,n.jsx)(t.td,{children:"Substrate Node"}),(0,n.jsxs)(t.td,{children:["We will create a Substrate node that has two runtimes: with and without the ",(0,n.jsx)(t.code,{children:"pallet-evm"}),". Both will contain ",(0,n.jsx)(t.code,{children:"evm-adapter"})," pallet, but only the one with ",(0,n.jsx)(t.code,{children:"pallet-evm"})," will be able to execute EVM bytecode. This will demonstrate two main use-cases of this pallet."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"3."}),(0,n.jsx)(t.td,{children:"MVP Demo DApp"}),(0,n.jsx)(t.td,{children:"We will provide a small EVM DApp that demonstrates the integration of the pallet and RPC adapter. This will be a basic web page that can sign and send custom extrinsic with Metamask, read the state of Substrate pallets."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"4."}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"docker-compose"})}),(0,n.jsxs)(t.td,{children:["We will provide a ",(0,n.jsx)(t.code,{children:"docker-compose"})," file that will run the whole project."]})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"future-plans",children:"Future Plans"}),"\n",(0,n.jsxs)(t.p,{children:["In the future, we plan to explore if we can make the adapter pallet optional and have the account mapping and transaction converting logic completely in the RPC adapter. This will allow us to have even more lightweight and generic solution, however could present more challenges. We will explore the ways of securely sharing the same private key for two chains without sacrificing any benefits that the ",(0,n.jsx)(t.code,{children:"evm-adapter"})," pallet offers, but this needs time for research."]}),"\n",(0,n.jsx)(t.h2,{id:"additional-information",children:"Additional Information"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"How did you hear about the Grants Program?"})}),"\n",(0,n.jsx)(t.p,{children:"I have previously worked on several grant projects (listed above) and generally have been part of Polkadot ecosystem for the last 4 years."})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}}}]);