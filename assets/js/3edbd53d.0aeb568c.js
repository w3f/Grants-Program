"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[75809],{50693:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var i=a(87462),n=(a(67294),a(3905));a(8209);const o={},r="Research feasibility of a Go Runtime",l={unversionedId:"applications/research-feasibility-go-runtime",id:"applications/research-feasibility-go-runtime",title:"Research feasibility of a Go Runtime",description:"- Team Name: LimeChain",source:"@site/applications/research-feasibility-go-runtime.md",sourceDirName:"applications",slug:"/applications/research-feasibility-go-runtime",permalink:"/applications/research-feasibility-go-runtime",draft:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/applications/research-feasibility-go-runtime.md",tags:[],version:"current",frontMatter:{}},s={},m=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Research",id:"research",level:4},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles (if available)",id:"team-linkedin-profiles-if-available",level:3},{value:"Development Status \ud83d\udcd6",id:"development-status-",level:2},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 \u2014 Research feasibility of a Go Runtime",id:"milestone-1--research-feasibility-of-a-go-runtime",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information \u2795",id:"additional-information-",level:2}],h={toc:m},p="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(p,(0,i.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"research-feasibility-of-a-go-runtime"},"Research feasibility of a Go Runtime"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Team Name:")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/LimeChain"},"LimeChain")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Payment Address:")," eth:0x1F7683228Ee9Bc65335374eA5c92B81C74131404 (USDC/USDT/DAI)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"https://github.com/w3f/Grants-Program/tree/master#level_slider-levels"},"Level"),":")," 3")),(0,n.kt)("h2",{id:"project-overview-"},"Project Overview \ud83d\udcc4"),(0,n.kt)("h3",{id:"overview"},"Overview"),(0,n.kt)("p",null,"The Internet is designed to be, has been, currently is, and will always be a network of networks. What this means for us, users, is that no-matter who we are,\nwhat we want to do, and what clients we use - we can connect with others through the Internet. Furthermore, different communities, geographically and culturally divided,\ncan still benefit from each other because of the inclusive, \u201cnon-maximalist\u201d attitude of the Internet. Unlike Bitcoin, the Polkadot Network tries explicitly to support these values."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u201cPolkadot is in many respects the biggest bet in this ecosystem against chain maximalism.\u201d - Dr. Gavin Wood")),(0,n.kt)("p",null,"A lot of effort has been put on the protocol level to make Polkadot interoperable and capable of hosting a variety of parachains, third-party chains (Bitcoin, Ethereum, etc.),\nand even computer networks in general, as long as they abide by the specification. However, as of now, no massive strides have been made towards realizing this variation on the\nimplementation level (except for Host implementations). If Polkadot strives to be truly the chain of chains, it needs to properly address both levels."),(0,n.kt)("p",null,"The Polkadot architecture is divided into two parts: Host and Runtime. While there are several choices presented to users regarding the Host implementation\n(",(0,n.kt)("a",{parentName:"p",href:"https://github.com/ChainSafe/gossamer"},"gossamer"),", ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/soramitsu/kagome"},"kagome"),", ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/paritytech/polkadot"},"polkadot"),", ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/paritytech/smoldot"},"smoldot"),"),\nthere really are only two options for the runtime: either start from scratch, which is not ideal in most cases, or utilize the power of Substrate. For many people, especially for those whose expertise\nis not in computer networking/blockchain technology, this really leaves them with a single option - Substrate.\n",(0,n.kt)("strong",{parentName:"p"},"Although great, Substrate is not ideal for newcomers. Rust is well-known to have a steep learning curve and, by inference, so does Substrate, even though great effort has been put to simplify the framework.")),(0,n.kt)("p",null,"In summary, the lack of diversity and ease of use of Polkadot Runtimes is a barrier that stops Polkadot from living up to its full promise and the Polkadot community should as a whole address this problem.\nThe history of software engineering has taught us many times that by bringing diversity and ease of use to the field, an explosion of innovation follows."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u201cPolkadot should also be the biggest bet against implementation maximalism.\u201d - LimeChain Team")),(0,n.kt)("h3",{id:"project-details"},"Project Details"),(0,n.kt)("h4",{id:"research"},"Research"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"The ultimate/end goal is implementing a Polkadot Go RelayChain Runtime"),", however, it will be technically challenging to go for the direct implementation without abstracting components into different modules.\nGiven that a modularised approach is taken, the practical goal would be to formalise those modules into a framework that can be reused by other developers.\n",(0,n.kt)("strong",{parentName:"p"},"In order to be able to develop a framework for Go Runtimes, we need to clear out Go-related technological challenges first. This proposal is about R&D aimed at those challenges.")),(0,n.kt)("p",null,'Go is a modern, powerful, and fast programming language focused on simplicity (abiding by the KISS principle: "Keep It Simple, Stupid") and gaining a lot of popularity among software developers nowadays.\nIt is future-proof and stable, being backed by Google and used in many of their software. It has great support for network programming. ',(0,n.kt)("strong",{parentName:"p"},"All of these reasons make Go an ideal candidate for implementing\nan alternative framework for blockchain development targeted at newcomers.")," Furthermore, the waters have already been tested! ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/ChainSafe/gossamer"},"Gossamer")," is a recent effort towards implementing a comprehensive\nPolkadot Host in Go, which should make implementing the Runtime easier. It is arguable that other frameworks for building Blockchain networks (e.g Cosmos) have gained significant adoption due to the lower barrier for entry (compared to Rust)."),(0,n.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,n.kt)("p",null,"The lack of diversity and ease of use of Polkadot Runtimes is a barrier that stops Polkadot from living up to its full promise and the Polkadot community should as a whole address this problem.\nThe history of software engineering has taught us many times that by bringing diversity and ease of use to the field, an explosion of innovation follows."),(0,n.kt)("h2",{id:"team-"},"Team \ud83d\udc65"),(0,n.kt)("h3",{id:"team-members"},"Team members"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Daniel Ivanov"),(0,n.kt)("li",{parentName:"ul"},"Radosvet Mihtarski"),(0,n.kt)("li",{parentName:"ul"},"failfmi")),(0,n.kt)("h3",{id:"contact"},"Contact"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Contact Name:")," Christian Veselinov, Zhivko Todorov"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Contact Email:")," ",(0,n.kt)("a",{parentName:"li",href:"mailto:chris@limechain.tech"},"chris@limechain.tech"),", ",(0,n.kt)("a",{parentName:"li",href:"mailto:zhivko@limechain.tech"},"zhivko@limechain.tech")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Website:")," ",(0,n.kt)("a",{parentName:"li",href:"https://limechain.tech"},"https://limechain.tech"))),(0,n.kt)("h3",{id:"legal-structure"},"Legal Structure"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Registered Address:")," Bulgaria, Dragan Tsankov 23A, 1113, Sofia, Bulgaria"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Registered Legal Entity:")," LimeLabs Ltd.")),(0,n.kt)("h3",{id:"teams-experience"},"Team's experience"),(0,n.kt)("p",null,"At LimeChain, we feel confident in and have a lot of development hours invested building ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/LimeChain/as-substrate-runtime"},"Runtime from scratch")," and evolving it into fully capable ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/LimeChain/subsembly"},"frameworks for building Substrate Runtimes"),".\nWe have extensive experience in building developer tooling, specifically within Rust/WebAssembly (",(0,n.kt)("a",{parentName:"p",href:"https://github.com/limeChain/matchstick/"},"matchstick"),"). Other infrastructure projects that we are contributors to is Hedera Hashgraph.\nLimeChain\u2019s team has been integrating an EVM within the Hedera networks as-well as being sole technical partner of ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/CudoVentures"},"Cudos network")," (based on Cosmos) which recently had their genesis mainnet release.\nAll of this emphasizes that the knowledge/expertise of the company spans across the major blockchain stacks - Substrate/EVM and Cosmos."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/LimeChain/subsembly"},"https://github.com/LimeChain/subsembly")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/LimeChain/subsembly-core"},"https://github.com/LimeChain/subsembly-core")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/LimeChain/as-scale-codec"},"https://github.com/LimeChain/as-scale-codec")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/LimeChain/as-substrate-runtime"},"https://github.com/LimeChain/as-substrate-runtime"))),(0,n.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/LimeChain"},"https://github.com/LimeChain"))),(0,n.kt)("p",null,"Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/daniel-k-ivanov"},"https://github.com/daniel-k-ivanov")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/radkomih"},"https://github.com/radkomih")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/failfmi"},"https://github.com/failfmi"))),(0,n.kt)("h3",{id:"team-linkedin-profiles-if-available"},"Team LinkedIn Profiles (if available)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/daniel-k-ivanov/"},"https://www.linkedin.com/in/daniel-k-ivanov/")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/radosvet-m"},"https://www.linkedin.com/in/radosvet-m"))),(0,n.kt)("h2",{id:"development-status-"},"Development Status \ud83d\udcd6"),(0,n.kt)("p",null,"So far, in our research process, we have come across technical challenges that Go faces regarding the Polkadot specification.\nThere are a couple of issues related to how Go translates to the expected Wasm from the Polkadot specification:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The toolchain for WebAssembly MVP is limited.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"The Wasm runtime described in the Polkadot specification targets WebAssembly MVP, with very domain-specific API. The official Go compiler does not support Wasm for non-browser environments\n(read more ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/golang/go/issues/31105"},"1"),", ",(0,n.kt)("a",{parentName:"li",href:"https://substrate.stackexchange.com/questions/60/what-is-gossamer-and-how-does-it-compare-to-substrate/89#89"},"2"),") and the only options is using ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/tinygo-org/tinygo"},"TinyGo"),".\nThe runtime is expected to expose some linker specific globals (",(0,n.kt)("inlineCode",{parentName:"li"},"__heap_base"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"__data_end"),") - ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/tinygo-org/tinygo/issues/2045"},"read more"),", but TinyGo does not support that out of the box."))),(0,n.kt)("li",{parentName:"ul"},"Managing memory externally is not supported and not a good fit for Go/TinyGo",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"By specification, the Wasm runtime does not include a memory allocator, it is expected to import memory from the host and rely on host imported functions for all heap allocations. TinyGo has GC and manages its memory by itself. So it can\u2019t work directly on systems where the host wants to manage the memory.\nTheoretically, it might be possible to add support for it in TinyGo, but it will require a lot of effort in the long term, the support would be limited and performance might be unsatisfactory. To support an automatic memory management, the GC proposal would be handy.\nBut the Wasm runtime supports only WebAssembly MVP currently, and the ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/WebAssembly/gc/blob/main/proposals/gc/Overview.md"},"GC proposal")," is under development."))),(0,n.kt)("li",{parentName:"ul"},"The standard library support in TinyGo is limited",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("inlineCode",{parentName:"li"},"reflect")," package is ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/tinygo-org/tinygo/pull/2640"},"not fully supported")," in TinyGo. The SCALE serialization logic relies on that package, and we also might need it to implement for the Metadata API.")))),(0,n.kt)("h2",{id:"development-roadmap-"},"Development Roadmap \ud83d\udd29"),(0,n.kt)("p",null,"Described below are the steps we think are necessary to get a deep understanding of how the current technical challenges we have found so far can be overcome:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go internals, runtime, memory allocation, garbage collection ",(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"Get a deep understanding of how internals, runtime, memory allocation and garbage collection works in Go."))),(0,n.kt)("li",{parentName:"ol"},"WebAssembly GC proposal",(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"Thoroughly research the GC proposal for WebAssembly, such as its design and progress so far."))),(0,n.kt)("li",{parentName:"ol"},"Research ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/tinygo-org/tinygo"},"TinyGo")," or alternative compiler toolchain in Go for the following addition of:",(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"How it works"),(0,n.kt)("li",{parentName:"ol"},"Features support"),(0,n.kt)("li",{parentName:"ol"},"Wasm support"))),(0,n.kt)("li",{parentName:"ol"},"Build a PoC",(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"Manual memory allocator, Go compiler Runtime implementation"))),(0,n.kt)("li",{parentName:"ol"},"Propose a specification, based on the previous steps")),(0,n.kt)("h3",{id:"overview-1"},"Overview"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 8 working weeks"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Full-Time Equivalent (FTE):"),"  2"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Total Costs:")," $44,800")),(0,n.kt)("h3",{id:"milestone-1--research-feasibility-of-a-go-runtime"},"Milestone 1 \u2014 Research feasibility of a Go Runtime"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Estimated duration:")," 8 working weeks"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"FTE:")," 2"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Costs:")," $44,800")),(0,n.kt)("p",null,"This milestone will "),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,n.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,n.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"0a."),(0,n.kt)("td",{parentName:"tr",align:null},"License"),(0,n.kt)("td",{parentName:"tr",align:null},"Apache 2.0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"0b."),(0,n.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,n.kt)("td",{parentName:"tr",align:null},"We will provide Markdown documentation of the whole research, explaining the necessary steps needed to resolve the technical challenges for Polkadot Runtime implementation.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"0c."),(0,n.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,n.kt)("td",{parentName:"tr",align:null},"We will provide a testing guide of the PoC manual memory allocator via FFI")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"0d."),(0,n.kt)("td",{parentName:"tr",align:null},"Docker"),(0,n.kt)("td",{parentName:"tr",align:null},"We will provide a Dockerfile(s) that can be used to test the PoC.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"1."),(0,n.kt)("td",{parentName:"tr",align:null},"Research"),(0,n.kt)("td",{parentName:"tr",align:null},"We will start our research with  Go internals, runtime, memory allocation and garbage collection.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"2."),(0,n.kt)("td",{parentName:"tr",align:null},"Research"),(0,n.kt)("td",{parentName:"tr",align:null},"We will continue our research with the WebAssembly GC proposal - check progress so far.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"3."),(0,n.kt)("td",{parentName:"tr",align:null},"Research"),(0,n.kt)("td",{parentName:"tr",align:null},"We will go through intensively TinyGo or an alternative compiler toolchain.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"4."),(0,n.kt)("td",{parentName:"tr",align:null},"Research"),(0,n.kt)("td",{parentName:"tr",align:null},"We will try building a PoC, including a manual memory allocator, and a Go compiler Runtime implementation.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"5."),(0,n.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,n.kt)("td",{parentName:"tr",align:null},"We will provide Markdown documentation, based on the previous steps.")))),(0,n.kt)("h2",{id:"future-plans"},"Future Plans"),(0,n.kt)("p",null,"Having this research will give us clear understanding of how the technical challenges that Go has for Polkadot Runtime implementation can be resolved.\nBy resolving them, Go will become an alternative language to Rust for Polkadot Runtime implementation."),(0,n.kt)("h2",{id:"additional-information-"},"Additional Information \u2795"),(0,n.kt)("p",null,"LimeChain has been a long-time contributor to the Substrate ecosystem mainly focused on developer tooling. Due to our involvement in the space, we are working with various clients, developing smart contracts and working on parachains."))}u.isMDXComponent=!0}}]);