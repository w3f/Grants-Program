"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[2616],{64353:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>n,metadata:()=>l,toc:()=>p});var o=a(87462),i=(a(67294),a(3905));a(95657);const n={},r="Zombienet Explorer: Multi-Chain Substrate Block Explorer (based on Polkaholic.io)",l={unversionedId:"applications/Zombienet-Explorer",id:"applications/Zombienet-Explorer",title:"Zombienet Explorer: Multi-Chain Substrate Block Explorer (based on Polkaholic.io)",description:"- Team Name: Colorful Notion",source:"@site/applications/Zombienet-Explorer.md",sourceDirName:"applications",slug:"/applications/Zombienet-Explorer",permalink:"/Grants-Program/applications/Zombienet-Explorer",draft:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/applications/Zombienet-Explorer.md",tags:[],version:"current",frontMatter:{}},s={},p=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-",level:2},{value:"Project Details",id:"project-details",level:3},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-",level:2},{value:"Team members / Contact",id:"team-members--contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Development Status \ud83d\udcd6",id:"development-status-",level:2},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-",level:2},{value:"Overview",id:"overview",level:3},{value:"Milestone 1 \u2014 Core Zombienet Explorer Code, Working Zombienet Explorer for 2 EVM+WASM parachains",id:"milestone-1--core-zombienet-explorer-code-working-zombienet-explorer-for-2-evmwasm-parachains",level:3},{value:"Milestone 2 \u2014 Chainparser Refactor, 3 parachains, 30 TOML",id:"milestone-2--chainparser-refactor-3-parachains-30-toml",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information \u2795",id:"additional-information-",level:2}],m={toc:p},c="wrapper";function u(e){let{components:t,...a}=e;return(0,i.kt)(c,(0,o.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"zombienet-explorer-multi-chain-substrate-block-explorer-based-on-polkaholicio"},"Zombienet Explorer: Multi-Chain Substrate Block Explorer (based on Polkaholic.io)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Team Name:")," Colorful Notion"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Payment Address:")," Polkadot 5D58imQFuMXDTknQS2D14gDU2duiUC18MGxDnTKajjJS9F3g ","[USDT]"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://github.com/w3f/Grants-Program/tree/master#level_slider-levels"},"Level"),":")," 2")),(0,i.kt)("h2",{id:"project-overview-"},"Project Overview \ud83d\udcc4"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/paritytech/zombienet"},"Zombienet")," is a cli tool to easily spawn ephemeral Polkadot/Substrate networks and perform tests against them. A single ZombieNet is set up with a single toml file and parachain binaries (eg astar-collator, moonbeam, acala, etc.).  "),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/colorfulnotion/zombienet-explorer"},"Zombienet Explorer")," indexes a Zombienet using purely local setup (just Mysql, no external HTTP API calls unless you use a non-standard flag). It is based off Colorful Notions' ",(0,i.kt)("a",{parentName:"p",href:"https://polkaholic.io"},"Polkaholic.io")," which has been running as a public Multi-Chain Block explorer  for 5 months.  Key features are basically same basic multichain block explorer interface as Polkaholic.io, but running on spawned Zombienets instead of Polkadot + Kusama chains, specifically:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"EVM support (basic evm txn input/logs decoding only)"),(0,i.kt)("li",{parentName:"ul"},"WASM support"),(0,i.kt)("li",{parentName:"ul"},"linking and visualizing different XCM messages / extrinsics"),(0,i.kt)("li",{parentName:"ul"},"simple Mysql analytics")),(0,i.kt)("p",null,'The approach Polkaholic.io has taken is an "indexing" approach, where all chain activity is analyzed from multiple chains and stored in MySQL across multiple chains.  This is complementary to the approach taken by polkadot.js.org\'s reference app, where a single endpoint is probed in real-time.'),(0,i.kt)("p",null,"While Colorful Notion's polkaholic.io website utilizes production-grade GCP components (BigQuery, BigTable, US/EU/AS LoadBalancer, etc.) for its backend, ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/colorfulnotion/zombienet-explorer"},"Zombienet Explorer")," pours all data into Mysql, which makes it easy for developers to modify/customize it for their own purposes, perform Mysql analytics, and make their own contributions."),(0,i.kt)("p",null,"Colorful Notion would like to seek Web3F Level 2 funding to develop Zombienet explorer to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"support new Substrate developers developing new parachains"),(0,i.kt)("li",{parentName:"ul"},"support existing parachains achieve XCM interoperability with fellow parachains"),(0,i.kt)("li",{parentName:"ul"},"support EVM + WASM + Dapp developers generally develop and debug complex XCM extrinsics")),(0,i.kt)("h3",{id:"project-details"},"Project Details"),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/colorfulnotion/zombienet-explorer"},"Zombienet Explorer README")," for details. Here's a summary of how it works:  "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},'The deployment of Zombienet is based off a single TOML file (e.g. Shibuya, Moonbase) and binaries for the chains, resulting in "/tmp/zombie-eb7506e58308cc12e5c2906ffd894759_-1437039-m0Kjx84Yxy8y/zombie.json"\n',(0,i.kt)("img",{parentName:"p",src:"https://cdn.polkaholic.io/screenshots/zn-setup.png",alt:"Zombienet"}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},'The Zombienet explorer uses the same TOML input and a "zombie.json" config generated, and is initiated with a "docker-compose up" operation (launches Mysql + Tempo Docker containers) followed by'))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"node explorer.js moonbase.toml /tmp/zombie-eb7506e58308cc12e5c2906ffd894759_-1437039-m0Kjx84Yxy8y/zombie.json\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Then, blocks, traces, extrinsics, EVM logs, XCM messages  for all chains are crawled/indexed from local WS Endpoints in realtime.  Mysql tables support each chain.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Zombienet explorer is initiated with:"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"node index.js\nnode api.js\n")),(0,i.kt)("p",null,"This shows the same explorer interface as on Polkaholic.io, except with the Zombienet instead of Polkadot/Kusama and their parachains:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.polkaholic.io/screenshots/zn-chains.png",alt:"Zombienet Explorer"})),(0,i.kt)("p",null,"with blocks, tx/extrinsics, EVM/WASM contracts, accounts, and XCM activity.  See ",(0,i.kt)("a",{parentName:"p",href:"https://polkaholic.io"},"Polkaholic.io")," for a fully working Multichain Substrate Block Explorer.  "),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.polkaholic.io/screenshots/zn-block.png",alt:"Zombienet Explorer Block Page"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"XCM Messages, XCM Transfers and XCM Remote Executions are matched in real time and stored in Mysql tables in the same way as on Polkaholic.io, except all locally."),(0,i.kt)("li",{parentName:"ul"},'As XCM Extrinsics go through their journey, distributed tracing Jaeger/Tempo spans are submitted, with "traceids" keyed in by unfinalized/finalized extrinsic IDs.   Here is a ',(0,i.kt)("a",{parentName:"li",href:"https://polkaholic.io/tx/0x09093671a6d2d6633b29c3801035b55c1f7752428b50a012c8f0ba292f652dc1"},"Simple XCM Transfer")," and ",(0,i.kt)("a",{parentName:"li",href:"https://xcmscan.polkaholic.io/trace/8ef6d6763145e984?uiEmbed=v0"},"Distributed Trace of Ext"),"; ",(0,i.kt)("a",{parentName:"li",href:"https://polkaholic.io/xcmtransfers?xcmType=xcmtransfer"},"XCM Transfers")," show all the XCM Transfers like that in one place (there are lots now, in 2022)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://polkaholic.io/tx/0xc7b650144ae76221937c055dceb19e73cd8969ce007206e0e18661f968ffdbf7"},"Moonbase Alpha Remote Execution Tx using System 5004")," and ",(0,i.kt)("a",{parentName:"li",href:"https://xcmscan.polkaholic.io/trace/24301f35ee2e7d83"},"Distributed Trace of Tx"),"; ",(0,i.kt)("a",{parentName:"li",href:"https://polkaholic.io/xcmtransfers?xcmType=xcmtransact"},"XCM Remote Executions")," show all the XCM Remote executions in one place (there aren't many yet, but should be more in 2023); Sample screeshots of Remote Execution follow --")),(0,i.kt)("p",null,"(a) Transaction Details\n",(0,i.kt)("img",{parentName:"p",src:"https://cdn.polkaholic.io/screenshots/zn-remoteexecution-tx-details.png",alt:"Zombienet Remote Execution Transaction Details"})),(0,i.kt)("p",null,"(b) Distributed Tracing"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.polkaholic.io/screenshots/zn-remoteexecution-distributedtracing.png",alt:"Zombienet Remote Execution Distributed Tracing"})),(0,i.kt)("p",null,"Zombienet Explorer will have all of Polkaholic.io's fully working multi-chain UI + APIs*, except all done locally for the purposes of substrate parachain engineering."),(0,i.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,i.kt)("p",null,"The Polkadot ecosystem benefits from a network of interoperable substrate parachains, each of which use XCM to interact with one another.  Zombienet makes it easy for substrate developer to rapidly test their own parachain and also test connectivity with fellow parachains.  Developers start with polkadot.js extremely power app, but this was architected for a ",(0,i.kt)("em",{parentName:"p"},"single")," endpoint rather than arbitrary numbers of chains."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"XCM")),(0,i.kt)("p",null,"With XCM enabling complex multi hop interactions between multiple chains, it is challenging to reason about the flow of an XCM operation by switching between single chain views.  Our initial attempts to index XCM Transfers were overfitted to just asset transfers using DMP/UMP/HRMP (which dominate almost all XCM messages\nnow), but in response to an earlier draft of this proposal, we were challenged with how one could visualize ",(0,i.kt)("em",{parentName:"p"},"multiple"),' legs of an XCM\noperation.  Because some XCM instructions can contain XCM messages themselves recursively, and may "Transact" encoded call, there may be\nmany different chains initiated by a single extrinsic generating a "tree" of activity.   After seeing a few cases of ump/dmp and transact in the wild, it became clear that the "XCM Transfer" approach would not be too simplistic.'),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Distributed Tracing + Remote Execution"),"."),(0,i.kt)("p",null,"Zombienet incorporates Distributed Tracing tools from ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/grafana/tempo"},"Grafana Tempo+Jaegar"),', which are well matched to XCM\'s recursion capabilities.  At present, reasoning about what is going on between chains is accomplished by looking at a lot of raw logs and undecoded messages between chains.  Substrate chains that operate as "shards" or on each others unique functionality will increasingly rely on remote execution, but this future cannot be realized until tools exist.  Zombienet with Zombienet explorer aims to serve this goal.'),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Open source LCD")),(0,i.kt)("p",null,"Having an open-source Zombienet explorer using lowest common denominator code (Nodejs + Mysql, not React Typescript or BigTable) may support faster analytics, and more extensibility. Someone who knows only a bit of Javascript+SQL and completed their first Substrate pallet should be able to add their own chain indexing and user interface to Zombienet Explorer and do simple mysql analytics.  We have about 5-10 key big classes so Level 7 fellows aren't required to achieve this goal."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Zombienet")),(0,i.kt)("p",null,"After adding XCM Remote Execution indexing for Moonbase Alpha/Beta, we thought it would be possible to do a Shiden-Moonriver bidirectional remote execution (using Astar remote_transact and Moonbeam 5004 System Contract), but there is significant complexity in derived accounts in this case.  Astar's Dino Pacandi led us to explore XCM Remote Execution within Zombienet following ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/AstarNetwork/Astar/tree/master/third-party/zombienet"},"this"),"; Moonbeam's Gorka provided 2 Moonbase configuration included ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/colorfulnotion/zombienet-explorer/blob/main/moonbase.toml"},"here"),". From this effort, it became clear that complex XCM interoperabilty testing between parachains would be done in ZombieNet and a more extensible ZombieNet explorer would be required."),(0,i.kt)("h2",{id:"team-"},"Team \ud83d\udc65"),(0,i.kt)("h3",{id:"team-members--contact"},"Team members / Contact"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Contact Name:")," Sourabh Niyogi / Michael Chung"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Contact Email:")," ",(0,i.kt)("a",{parentName:"li",href:"mailto:sourabh@colorfulnotion.com"},"sourabh@colorfulnotion.com")," / ",(0,i.kt)("a",{parentName:"li",href:"mailto:michael@colorfulnotion.com"},"michael@colorfulnotion.com")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Website:")," ",(0,i.kt)("a",{parentName:"li",href:"https://polkaholic.io"},"https://polkaholic.io"))),(0,i.kt)("h3",{id:"legal-structure"},"Legal Structure"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Registered Address:")," 55 E 3rd Ave, San Mateo, CA 94401, USA"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Registered Legal Entity:")," Colorful Notion, Inc.")),(0,i.kt)("h3",{id:"teams-experience"},"Team's experience"),(0,i.kt)("p",null,"Key engineers Sourabh Niyogi and Michael Chung have developed Polkaholic.io since Fall 2021.  Prior to building Polkaholic.io, Sourabh and Michael worked in decentralized social networking protocol development + privacy-preserving contact tracing (Wolk),  mobile advertising real-time bidding algorithm design and analytics (CrossChannel/MdotM).  Sourabh has founded social + web advertising startups (Social Media Networks) in the SF Bay and spent time doing computational cognitive science and machine vision research at MIT.  Michael hails from UC Berkeley."),(0,i.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/colorfulnotion/zombienet-explorer"},"Zombienet Explorer")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/colorfulnotion/polkaholic"},"Polkaholic.io")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/colorfulnotion/docs.polkaholic.io"},"Polkaholic.io API")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/sourabhniyogi"},"Sourabh Niyogi")," | ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/mkchungs"},"Michael Chung"))),(0,i.kt)("h2",{id:"development-status-"},"Development Status \ud83d\udcd6"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Summer 2022: Released Polkaholic.io, a fully working block explorer that currently shows initial UI + API implementations, including indexing across 50+ chains.  Submitted this Web3F proposal in July."),(0,i.kt)("li",{parentName:"ul"},"Fall 2022: Increased XCM Transfers Coverage, Improved UI + API based on feedback from users.  Added  EVM/WASM support. Submitted first Treasury proposal to Kusama (8 ayes, 0 nays, did not pass yet) + Polkadot.  "),(0,i.kt)("li",{parentName:"ul"},'Early November 2022: Successfully demonstrated Moonbase Alpha/Beta Remote execution and "full recursion" in Jaeger/Tempo XCM Timelines on Polkaholic.io.'),(0,i.kt)("li",{parentName:"ul"},"Late November 2022: Initiated testing Remote Execution with ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/colorfulnotion/zombienet-explorer/blob/main/shibuya.toml"},"2 Astar ZombieNet")," (thanks to Dino Pacandi) + ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/colorfulnotion/zombienet-explorer/blob/main/moonbase.toml"},"2 Moonbeam Zombienet")," (thanks to from Gorka/Alberto/Yann] and initiated ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/colorfulnotion/zombienet-explorer"},"Zombienet Explorer repo"))),(0,i.kt)("h2",{id:"development-roadmap-"},"Development Roadmap \ud83d\udd29"),(0,i.kt)("p",null,"Zombienet Explorer code is a simplified version of Polkaholic.io run entirely in a local environment (local Mysql, pure Docker).  Most of the engineering work thus consists of deleting all code that is useless, documenting what remains to support Substrate devparachain contributions, and testing that the Zombienet explorer is useful specifically to support parachain developers testing their single chain, and multiple chains interacting with other with XCM Transfers and Remote Executions in EVM + WASM contexts."),(0,i.kt)("p",null,"Beyond having a clean and well documented Zombienet Explorer code base, we have 2 key demonstrations:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Demonstrate Moonbase EVM TransactThroughSigned Remote Execution call via 5004 System Contract in Zombienet"),(0,i.kt)("li",{parentName:"ul"},"Demonstrate Shibuya WASM Contracts Remote Execution call or with EVM remote_transact call in Zombienet\nThese demonstrations allow us to really test both the basics (can we show EVM Blocks, Contracts, XCM Messages, XCM Transfers, Remote Executions in a way that improves development) and the full utility of using Distributed testing.")),(0,i.kt)("h3",{id:"overview"},"Overview"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 8-10 weeks"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Full-Time Equivalent (FTE):")," 2.0 FTE"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Total Costs:")," 30,000 USD.")),(0,i.kt)("h3",{id:"milestone-1--core-zombienet-explorer-code-working-zombienet-explorer-for-2-evmwasm-parachains"},"Milestone 1 \u2014 Core Zombienet Explorer Code, Working Zombienet Explorer for 2 EVM+WASM parachains"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Estimated duration:")," 4-5 weeks"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"FTE:"),"  2.0 FTE"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Costs:")," 15,000 USD")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,i.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,i.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0a."),(0,i.kt)("td",{parentName:"tr",align:null},"License"),(0,i.kt)("td",{parentName:"tr",align:null},"GNUv3")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0b."),(0,i.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,i.kt)("td",{parentName:"tr",align:null},"Provide: (a) ",(0,i.kt)("strong",{parentName:"td"},"inline documentation")," of the core crawling and indexing processes (b) how to setup Zombienet Explorer using Docker compose for Astar + Moonbem chains")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0c."),(0,i.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,i.kt)("td",{parentName:"tr",align:null},"Update README showing how to do remote executions between 2 Moonbase parachains and 2 Shibuya parachains within Zombienet, and visualize them with Jaeger")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0d."),(0,i.kt)("td",{parentName:"tr",align:null},"Docker"),(0,i.kt)("td",{parentName:"tr",align:null},"Docker compose file composed of mysql, Jaeger/tempo setup")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"1."),(0,i.kt)("td",{parentName:"tr",align:null},"Zombienet Explorer Site Areas"),(0,i.kt)("td",{parentName:"tr",align:null},"Development of Polkaholic.io Core Site Functionality.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"2."),(0,i.kt)("td",{parentName:"tr",align:null},"Support for Distributed Tracing"),(0,i.kt)("td",{parentName:"tr",align:null},"Development of Jaeger/tempo tracing.")))),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"https://docs.google.com/spreadsheets/d/1xfcmlh-q_tRuf4wQDvv2c_pZQTJEu71KVk1N59pXgXs/edit#gid=323796891"},"Zombienet Substrate Block Explorer - Milestone 1")),(0,i.kt)("h3",{id:"milestone-2--chainparser-refactor-3-parachains-30-toml"},"Milestone 2 \u2014 Chainparser Refactor, 3 parachains, 30 TOML"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Estimated duration:")," 4-5 weeks"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"FTE:"),"  2.0 FTE"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Costs:")," 15,000 USD")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,i.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,i.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0a."),(0,i.kt)("td",{parentName:"tr",align:null},"License"),(0,i.kt)("td",{parentName:"tr",align:null},"GNUv3")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0b."),(0,i.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,i.kt)("td",{parentName:"tr",align:null},"Provide ",(0,i.kt)("strong",{parentName:"td"},"inline documentation")," for (a) all working chain parsers (b) XCM indexing mechanics")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0c."),(0,i.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,i.kt)("td",{parentName:"tr",align:null},"Update README of how the chain parsers actually work, with astar (WASM) + moonbeam (EVM) as core examples.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0d."),(0,i.kt)("td",{parentName:"tr",align:null},"Docker"),(0,i.kt)("td",{parentName:"tr",align:null},"Docker compose file composed of mysql, Jaeger/tempo setup.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"1."),(0,i.kt)("td",{parentName:"tr",align:null},"Support for 2 Parachain Parsers"),(0,i.kt)("td",{parentName:"tr",align:null},"Development of 2 Parachain Parsers: Astar + Moonbeam")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"2."),(0,i.kt)("td",{parentName:"tr",align:null},"Test 20 Zombienet Configs"),(0,i.kt)("td",{parentName:"tr",align:null},"Generate a report of our attempts to have working single parachain TOML beyond Shibuya + Moonbase with 20 TOMLs, using binaries available from our full nodes")))),(0,i.kt)("p",null,"In the construction of Polkaholic.io, we have implemented generic parsers for popular pallets used by multiple chains (e.g. xTokens, polkadotXcm, xcmPallet, tokens, asset, system etc, assetRegistry) but found it was difficult to do this for all parachains: there is just too much custom activity."),(0,i.kt)("p",null,"In our vision, parser for commonly-shared pallet only ",(0,i.kt)("em",{parentName:"p"},"needs")," to be implemented once. Developers are welcomed to submit PR for commonly-shared generic parsers which have high impact. In addition, each parachain team can also tweak certain aspect of the indexing machinery + supporting UI for their own parachain by building a chain-specific parser for their own purposes and adding it to Zombienet Explorer."),(0,i.kt)("p",null,"We will develop 2 representative parachain parsers: Moonbeam + Astar that demonstrate how substrate developers can extend the Zombienet explorer to support their own pallets and parachins."),(0,i.kt)("p",null,"We will also test 20 Zombienet configurations using recently compiled binaries.  See ",(0,i.kt)("a",{parentName:"p",href:"https://docs.google.com/spreadsheets/d/1xfcmlh-q_tRuf4wQDvv2c_pZQTJEu71KVk1N59pXgXs/edit#gid=323796891"},"Zombienet Substrate Block Explorer - Milestone 2")," for an exhaustive list."),(0,i.kt)("h2",{id:"future-plans"},"Future Plans"),(0,i.kt)("p",null,"Colorful Notion aims to see this project have contributions from as many Substrate parachain teams as possible, similar to how parachains submit PR to Polkadot.js, except specifically with chain parsers + UI views added by more parachains.  Our expectation is that by having parachain specific code developed by parachains, we may have this functionality brought back into Polkaholic.io's multichain block explorer and other projects that need to do analytics/UI."),(0,i.kt)("p",null,"With sufficient interest as different parachain teams instrument their parachains for XCM interoperability, we would welcome doing follow on work on:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"XCMv3"),(0,i.kt)("li",{parentName:"ul"},"modeling weights, gas used and fees"),(0,i.kt)("li",{parentName:"ul"},"improving distributed traces to have additional utility"),(0,i.kt)("li",{parentName:"ul"},"XCM remote execution tools")),(0,i.kt)("h2",{id:"additional-information-"},"Additional Information \u2795"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Bill Laboon of Web3F recommended we develop a XCM call graph UI which led us down the distributed tracing route.  See also: supporting this RFP for ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/w3f/Grants-Program/blob/master/rfps/open/xcm-tool.md"},"XCM library & tools")),(0,i.kt)("li",{parentName:"ul"},"Polkaholic directly addresses RFP for a ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/w3f/Grants-Program/blob/master/rfps/open/multi-chain-block-explorer.md"},"Multi-Chain Block Explorer")),(0,i.kt)("li",{parentName:"ul"},"Colorful Notion submitted a Treasury Proposal to ",(0,i.kt)("a",{parentName:"li",href:"https://kusama.polkassembly.io/motion/555"},"Kusama")," + Polkadot and would like to have Polkaholic.io supported by Treasury.  "),(0,i.kt)("li",{parentName:"ul"},"Colorful Notion welcomes active collaborations with parachains in Zombienet, especially in the area of distributed tracing, remote execution, XCM interoperability between EVM+WASM oriented shards, and chain-specific block explorers")))}u.isMDXComponent=!0}}]);