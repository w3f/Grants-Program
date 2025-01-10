"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[32342],{4898:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>n,toc:()=>o});const n=JSON.parse('{"id":"applications/wasmedge_substrate","title":"WasmEdge for Substrate","description":"- Team Name: Second State","source":"@site/applications/wasmedge_substrate.md","sourceDirName":"applications","slug":"/applications/wasmedge_substrate","permalink":"/applications/wasmedge_substrate","draft":false,"unlisted":false,"editUrl":"https://github.com/w3f/Grants-Program/edit/master/applications/wasmedge_substrate.md","tags":[],"version":"current","frontMatter":{}}');var i=s(74848),r=s(28453);const a={},l="WasmEdge for Substrate",d={},o=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-page_facing_up",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-busts_in_silhouette",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles (if available)",id:"team-linkedin-profiles-if-available",level:3},{value:"Development Status \ud83d\udcd6",id:"development-status-open_book",level:2},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-nut_and_bolt",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 \u2014 Enable Substrate to run on WasmEdge",id:"milestone-1--enable-substrate-to-run-on-wasmedge",level:3},{value:"Milestone 2 -- Create docs and config options to select between multiple WebAssembly runtimes",id:"milestone-2----create-docs-and-config-options-to-select-between-multiple-webassembly-runtimes",level:3},{value:"Milestone 3 -- Performance benchmarks and analysis",id:"milestone-3----performance-benchmarks-and-analysis",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information \u2795",id:"additional-information-heavy_plus_sign",level:2}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"wasmedge-for-substrate",children:"WasmEdge for Substrate"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Team Name:"})," Second State"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Payment Address:"})," 0xf212a28a62d01549c323a5feac7bbc8534064c41 (Ethereum USDT)"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsxs)(t.strong,{children:[(0,i.jsx)(t.a,{href:"https://github.com/w3f/Grants-Program/tree/master#level_slider-levels",children:"Level"}),":"]})," 2"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Status:"})," ",(0,i.jsx)(t.a,{href:"https://github.com/w3f/Grants-Program/pull/862#issuecomment-1730100588",children:"Terminated"})]}),"\n"]}),"\n",(0,i.jsxs)(t.h2,{id:"project-overview-page_facing_up",children:["Project Overview ","\ud83d\udcc4"]}),"\n",(0,i.jsx)(t.h3,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(t.p,{children:"Supporting WasmEdge as an alternative Substrate WebAssembly runtime. The project increases the Substrate ecosystem's node software diversity by supporting an alternative high-performance WebAssembly Runtime implementation. The project team are the maintainers of the WasmEdge WebAssembly Runtime project, and had successfully completed W3F projects in the past."}),"\n",(0,i.jsx)(t.h3,{id:"project-details",children:"Project Details"}),"\n",(0,i.jsx)(t.p,{children:"Software stack diversity (or \u201cdeveloper decentralization\u201d) is key to building a resilient blockchain network. As Ethereum\u2019s history has shown, the availability of multiple node software implementations, from GETH to Parity-Ethereum, has greatly improved network stability and security. When a critical bug is discovered or exploited on one implementation, the other would help sustain and stabilize the network."}),"\n",(0,i.jsx)(t.p,{children:"The Substrate framework and libraries are compiled into WebAssembly bytecode and run on a WebAssembly runtime in order to achieve  safety and portability. It is therefore a low hanging fruit to support multiple alternative WebAssembly runtimes to improve software diversity at the foundation of the Substrate stack."}),"\n",(0,i.jsx)(t.p,{children:"Currently, Substrate runs on the Wasmtime WebAssembly runtime created by the Mozilla and Fastly team. WasmEdge is another leading WebAssembly runtime hosted by the Linux Foundation / Cloud Native Computing Foundation (CNCF). It is fully compliant to the WebAssembly specification as well as standard WebAssembly extensions. It is supported across many OSes including Linux, Windows, Mac OS X, seL4, and CPU architectures including x86, aarch64, and Apple M1. WasmEdge is among the fastest WebAssembly runtimes available today."}),"\n",(0,i.jsx)(t.p,{children:"Compared with Wasmtime, WasmEdge features a completely different software architecture. It is written in C++ and depends on the LLVM for runtime code generation, while Wasmtime is written in Rust and depends on Cranelift for dynamic compilation. That makes WasmEdge a compelling choice for improving Substrate software stack diversity."}),"\n",(0,i.jsx)(t.p,{children:"In this project, we propose to use WasmEdge as an alternative WebAssembly runtime for Substrate. We will create a software layer that allows users to choose between Wasmtime and WasmEdge when they build Substrate from source. We will also evaluate the performance characteristics of the two runtimes."}),"\n",(0,i.jsx)(t.h3,{id:"ecosystem-fit",children:"Ecosystem Fit"}),"\n",(0,i.jsx)(t.p,{children:"The proposed project will bring an alternative runtime at the base of the Substrate stack and hence benefit the entire ecosystem."}),"\n",(0,i.jsx)(t.p,{children:"It could also bring Substrate developers communities closer to WasmEdge\u2019s developer communities in cloud native (Linux Foundation / CNCF) and LLVM ecosystems."}),"\n",(0,i.jsxs)(t.h2,{id:"team-busts_in_silhouette",children:["Team ","\ud83d\udc65"]}),"\n",(0,i.jsx)(t.h3,{id:"team-members",children:"Team members"}),"\n",(0,i.jsx)(t.p,{children:"Michael Yuan is the technical co-founder of Second State and ParaState. He is also the author of the book Building Blockchain Apps published by Addison-Wesley in 2019."}),"\n",(0,i.jsx)(t.p,{children:"Vincent Lin is the lead developer of the Substrate Ewasm Pallet based on WasmEdge. The pallet allows WasmEdge to act as an in-chain VM for Ethereum flavor WebAssembly smart contracts."}),"\n",(0,i.jsx)(t.p,{children:"Tim McCallum is a developer\u2019s advocate. He creates developer content, such as demos, tutorials, articles, videos, and podcasts, for blockchain developers."}),"\n",(0,i.jsx)(t.p,{children:"Antonio Yang is the lead developer of the Rust SewUp crate, which enables Rust developers to create Ethereum flavored WebAssembly application compliant to the EVMC interface."}),"\n",(0,i.jsx)(t.h3,{id:"contact",children:"Contact"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Contact Name:"})," Michael Yuan"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Contact Email:"})," ",(0,i.jsx)(t.a,{href:"mailto:michael@secondstate.io",children:"michael@secondstate.io"})]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Website:"})," ",(0,i.jsx)(t.a,{href:"https://www.secondstate.io/",children:"https://www.secondstate.io/"})]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"legal-structure",children:"Legal Structure"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Registered Address:"})," PO Box 2075, #30 The Strand, 46 Canal Point Dr., Grand Cayman, KY1-1105, Cayman Islands"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Registered Legal Entity:"})," Second State Inc."]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"teams-experience",children:"Team's experience"}),"\n",(0,i.jsx)(t.p,{children:"The team consists of maintainers and core developers of the open source WasmEdge project."}),"\n",(0,i.jsx)(t.p,{children:"The team has successfully completed a W3F grant in the past to adapt WasmEdge (previously known as SSVM) as an on-chain VM to execute Ethereum flavored WebAssembly (Ewasm) smart contracts."}),"\n",(0,i.jsx)(t.h3,{id:"team-code-repos",children:"Team Code Repos"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/wasmedge",children:"https://github.com/wasmedge"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/WasmEdge/WasmEdge",children:"https://github.com/WasmEdge/WasmEdge"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/second-state",children:"https://github.com/second-state"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/ParaState/",children:"https://github.com/ParaState/"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/ParaState/substrate-ssvm-node",children:"https://github.com/ParaState/substrate-ssvm-node"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/ParaState/substrate-parachain-ssvm",children:"https://github.com/ParaState/substrate-parachain-ssvm"})}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/juntao",children:"https://github.com/juntao"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/CaptainVincent",children:"https://github.com/CaptainVincent"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/tpmccallum",children:"https://github.com/tpmccallum"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/yanganto",children:"https://github.com/yanganto"})}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"team-linkedin-profiles-if-available",children:"Team LinkedIn Profiles (if available)"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://www.linkedin.com/in/myuan/",children:"https://www.linkedin.com/in/myuan/"})}),"\n"]}),"\n",(0,i.jsxs)(t.h2,{id:"development-status-open_book",children:["Development Status ","\ud83d\udcd6"]}),"\n",(0,i.jsx)(t.p,{children:"The WasmEdge Runtime is a fully standard compliant WebAssembly runtime hosted by the CNCF. Please see its github repository for key features and use cases. With LLVM-based AOT support, WasmEdge is one of the highest performing WebAssembly runtime available today."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://github.com/WasmEdge/WasmEdge#performance",children:"https://github.com/WasmEdge/WasmEdge#performance"})}),"\n",(0,i.jsx)(t.p,{children:"In the web3 ecosystem, WasmEdge is successfully adopted as an on-chain VM to execute Ethereum flavored WebAssembly (Ewasm) smart contracts on substrate-based blockchains."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://github.com/ParaState/substrate-ssvm-node",children:"https://github.com/ParaState/substrate-ssvm-node"})}),"\n",(0,i.jsxs)(t.h2,{id:"development-roadmap-nut_and_bolt",children:["Development Roadmap ","\ud83d\udd29"]}),"\n",(0,i.jsx)(t.h3,{id:"overview-1",children:"Overview"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Total Estimated Duration: 3 months"}),"\n",(0,i.jsx)(t.li,{children:"Full-Time Equivalent (FTE): 2 FTEs"}),"\n",(0,i.jsx)(t.li,{children:"Total Costs: $45,000 USD"}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"milestone-1--enable-substrate-to-run-on-wasmedge",children:"Milestone 1 \u2014 Enable Substrate to run on WasmEdge"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Estimated duration: 1 month"}),"\n",(0,i.jsx)(t.li,{children:"FTE: 2"}),"\n",(0,i.jsx)(t.li,{children:"Costs: 15,000 USD"}),"\n"]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"right"},children:"Number"}),(0,i.jsx)(t.th,{children:"Deliverable"}),(0,i.jsx)(t.th,{children:"Specification"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"0a."}),(0,i.jsx)(t.td,{children:"License"}),(0,i.jsx)(t.td,{children:"Apache 2.0"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"0b."}),(0,i.jsx)(t.td,{children:"Documentation"}),(0,i.jsx)(t.td,{children:"Provide instructions for developers on how to use our forked repo to build and run Substrate with WasmEdge as the default WASM VM"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"0c."}),(0,i.jsx)(t.td,{children:"Testing Guide"}),(0,i.jsx)(t.td,{children:"Provide a step-by-step guide for building and running a Substrate blockchain on WasmEdge"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"0d."}),(0,i.jsx)(t.td,{children:"Docker"}),(0,i.jsx)(t.td,{children:"Create Docker images with all build dependencies to faciliate the build process"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"0e."}),(0,i.jsx)(t.td,{children:"Article"}),(0,i.jsx)(t.td,{children:"Create a blog article to annouce WasmEdge integration with Substrate"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"1."}),(0,i.jsx)(t.td,{children:"Rust API"}),(0,i.jsx)(t.td,{children:"Create a wasmtime compatible Rust API for WasmEdge. That is because most of the existing Substrate hooks for WASM are designed for wasmtime's Rust APIs. To create a wasmtime compatible high-level API for WasmEdge will make the follow-up integration work much easier."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"2."}),(0,i.jsx)(t.td,{children:"Host wrapper"}),(0,i.jsxs)(t.td,{children:["Create host wrappers for WasmEdge in Substrate. Those functions are in the ",(0,i.jsx)(t.code,{children:"client/executor/wasmtime"})," package in the substrate source tree. We will create an alternative ",(0,i.jsx)(t.code,{children:"client/executor/wasmedge"})," package, and use the wasmedge executor in our fork."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"3."}),(0,i.jsx)(t.td,{children:"Test"}),(0,i.jsx)(t.td,{children:"Build and test the entire Substrate project based on WasmEdge"})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"milestone-2----create-docs-and-config-options-to-select-between-multiple-webassembly-runtimes",children:"Milestone 2 -- Create docs and config options to select between multiple WebAssembly runtimes"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Estimated duration: 1 month"}),"\n",(0,i.jsx)(t.li,{children:"FTE: 2"}),"\n",(0,i.jsx)(t.li,{children:"Costs: 15,000 USD"}),"\n"]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"right"},children:"Number"}),(0,i.jsx)(t.th,{children:"Deliverable"}),(0,i.jsx)(t.th,{children:"Specification"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"0a."}),(0,i.jsx)(t.td,{children:"License"}),(0,i.jsx)(t.td,{children:"Apache 2.0"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"0b."}),(0,i.jsx)(t.td,{children:"Documentation"}),(0,i.jsx)(t.td,{children:"Provide instructions for developers optionally select WasmEdge as the WASM VM for Substrate"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"0c."}),(0,i.jsx)(t.td,{children:"Testing Guide"}),(0,i.jsx)(t.td,{children:"Provide a step-by-step guide for selecting WasmEdge and then building and running a Substrate blockchain on WasmEdge"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"0d."}),(0,i.jsx)(t.td,{children:"Docker"}),(0,i.jsx)(t.td,{children:"Create Docker images with all build dependencies to faciliate the build process"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"0e."}),(0,i.jsx)(t.td,{children:"Article"}),(0,i.jsx)(t.td,{children:"Create a blog article to annouce Substrate's option to use WasmEdge"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"1."}),(0,i.jsx)(t.td,{children:"Software"}),(0,i.jsx)(t.td,{children:"Create configuration options to select between wasmtime and WasmEdge host wrappers. The option will allow the compiler / build system to choose between the wasmtime and wasmedge executors when building the substrate binary."})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"milestone-3----performance-benchmarks-and-analysis",children:"Milestone 3 -- Performance benchmarks and analysis"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Estimated duration: 6 months"}),"\n",(0,i.jsx)(t.li,{children:"FTE: 2"}),"\n",(0,i.jsx)(t.li,{children:"Costs: 15,000 USD"}),"\n"]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"right"},children:"Number"}),(0,i.jsx)(t.th,{children:"Deliverable"}),(0,i.jsx)(t.th,{children:"Specification"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"0a."}),(0,i.jsx)(t.td,{children:"License"}),(0,i.jsx)(t.td,{children:"Apache 2.0"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"0b."}),(0,i.jsx)(t.td,{children:"Documentation"}),(0,i.jsx)(t.td,{children:"Provide performance benchmark and profiler results"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"0c."}),(0,i.jsx)(t.td,{children:"Testing Guide"}),(0,i.jsx)(t.td,{children:"Provide instructions on how to run performance benchmark tests and performance profilers"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"0d."}),(0,i.jsx)(t.td,{children:"Docker"}),(0,i.jsx)(t.td,{children:"Create Docker images with all build dependencies to run the benchmarks"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"0e."}),(0,i.jsx)(t.td,{children:"Article"}),(0,i.jsx)(t.td,{children:"Create a blog article on WasmEdge's performance in Substrate"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"1."}),(0,i.jsx)(t.td,{children:"Config"}),(0,i.jsx)(t.td,{children:"Make sure that AOT is enabled for WasmEdge"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"2."}),(0,i.jsx)(t.td,{children:"Eval"}),(0,i.jsx)(t.td,{children:"Create performance metrics Substrate integration tests for wasmtime vs WasmEdge, as well as WasmEdge interpreter vs AOT"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"3."}),(0,i.jsx)(t.td,{children:"Eval"}),(0,i.jsx)(t.td,{children:"Identify performance bottlenecks in Substrate WasmEdge for future actions"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"4."}),(0,i.jsx)(t.td,{children:"Upstream PR"}),(0,i.jsx)(t.td,{children:"Create and merge a PR for the Substrate project. Work with the Substrate team to make sure that the PR is up to the coding standard and testing requirements for Substrate to merge it."})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"future-plans",children:"Future Plans"}),"\n",(0,i.jsx)(t.p,{children:"Our goal is to continuously improve WasmEdge's compatibility and performance in the Substrate environment, and hope to eventually become the default WASM runtime for Substrate."}),"\n",(0,i.jsxs)(t.h2,{id:"additional-information-heavy_plus_sign",children:["Additional Information ","\u2795"]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"How did you hear about the Grants Program?"})," Web3 Foundation Website / Past grantee"]}),"\n",(0,i.jsx)(t.p,{children:"As discussed, the team has extensive experience with WebAssembly runtimes. We are the maintainers of CNCF's WasmEdge project, and had successfully completed past W3F grant projects in adopting WebAssembly for on-chain smart contracts."})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>a,x:()=>l});var n=s(96540);const i={},r=n.createContext(i);function a(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);