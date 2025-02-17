"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[13846],{28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>l});var i=t(96540);const s={},r=i.createContext(s);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:n},e.children)}},74476:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"applications/Melodot","title":"Melodot: Incentive-compatible data availability layer","description":"- Team Name: ZeroDAO","source":"@site/applications/Melodot.md","sourceDirName":"applications","slug":"/applications/Melodot","permalink":"/applications/Melodot","draft":false,"unlisted":false,"editUrl":"https://github.com/w3f/Grants-Program/edit/master/applications/Melodot.md","tags":[],"version":"current","frontMatter":{}}');var s=t(74848),r=t(28453);const a={},l="Melodot: Incentive-compatible data availability layer",o={},d=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-",level:2},{value:"Data Availability Layer",id:"data-availability-layer",level:4},{value:"Project Details",id:"project-details",level:2},{value:"Architecture",id:"architecture",level:3},{value:"Erasure Coding and KZG Commitment",id:"erasure-coding-and-kzg-commitment",level:4},{value:"Farmers",id:"farmers",level:4},{value:"Lifecycle",id:"lifecycle",level:4},{value:"Components",id:"components",level:3},{value:"<strong>Non-Goals</strong>",id:"non-goals",level:3},{value:"<strong>Ecosystem Fit</strong>",id:"ecosystem-fit",level:2},{value:"Similar Projects",id:"similar-projects",level:3},{value:"<strong>Relationship with Polkadot and substrate</strong>",id:"relationship-with-polkadot-and-substrate",level:3},{value:"Team \ud83d\udc65",id:"team-",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Development Status",id:"development-status",level:3},{value:"Development Roadmap",id:"development-roadmap",level:2},{value:"Overview",id:"overview",level:3},{value:"Milestone 1 \u2014 Erasure coding and KZG",id:"milestone-1--erasure-coding-and-kzg",level:3},{value:"Milestone 2 \u2014 Consensus",id:"milestone-2--consensus",level:3},{value:"Milestone 3 \u2014 Sampling",id:"milestone-3--sampling",level:3},{value:"Milestone 4 \u2014 Farmer",id:"milestone-4--farmer",level:3},{value:"<strong>Future Plans</strong>",id:"future-plans",level:2},{value:"Additional Information\u2795",id:"additional-information",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"melodot-incentive-compatible-data-availability-layer",children:"Melodot: Incentive-compatible data availability layer"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Team Name:"})," ZeroDAO"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Payment Address:"}),"  0xEBCDa7c73EB5Dd7a4314cFf395bE07EB1E24c046 (DAI)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsxs)(n.strong,{children:[(0,s.jsx)(n.a,{href:"https://github.com/w3f/Grants-Program/tree/master#level_slider-levels",children:"Level"}),":"]})," 2"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"project-overview-",children:"Project Overview \ud83d\udcc4"}),"\n",(0,s.jsx)(n.h4,{id:"data-availability-layer",children:"Data Availability Layer"}),"\n",(0,s.jsx)(n.p,{children:"The current data availability layer scheme requires the assumption that the network has at least the minimum number of honest nodes.However, due to the need to prevent data retention attacks, the samplers are required to be anonymous, making it difficult to measure the number of samplers. At the same time, samplers are more concerned with data related to themselves, resulting in an uneven distribution of total active samplers over time. The assumption of a minimum number of honest nodes affects the robustness of the data availability layer."}),"\n",(0,s.jsx)(n.p,{children:"Challenging issues in the data availability layer also include: who will perform distributed generation, who will reconstruct the data, who will store the data, how long will the data be stored, and how to ensure that these tasks are well done."}),"\n",(0,s.jsx)(n.p,{children:"One possible approach is to delegate these tasks to consensus validators, but there is a lack of effective incentive mechanisms. For cost considerations, not performing distributed generation, data reconstruction, and data storage is the most profitable for validators. In addition, consuming too many resources of consensus validators is very unfavorable for scalability."}),"\n",(0,s.jsxs)(n.p,{children:["Melodot introduces the role of farmers by combining PoSpace, alleviating the system's dependence on the minimum number of honest nodes assumption, and completing an incentive-compatible distributed generation and data storage scheme. Consensus validators now act more like light clients, improving future scalability. You can learn more from this preliminary ",(0,s.jsx)(n.a,{href:"https://www.notion.so/zerodao/Melodot-Data-Availability-Layer-Whitepaper-b72b1f3de81c40fc94a56763756ce34a",children:"whitepaper"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"project-details",children:"Project Details"}),"\n",(0,s.jsx)(n.h3,{id:"architecture",children:"Architecture"}),"\n",(0,s.jsx)(n.h4,{id:"erasure-coding-and-kzg-commitment",children:"Erasure Coding and KZG Commitment"}),"\n",(0,s.jsx)(n.p,{children:"Melodot uses 2D Reed-Solomon for data expansion, providing better sampling efficiency. It generates KZG commitments in the row direction, avoiding fraud proofs, similar to Ethereum's Darksharding. Block headers contain KZG commitments and data locations for different apps, allowing light clients to sample or download only data relevant to themselves."}),"\n",(0,s.jsx)(n.h4,{id:"farmers",children:"Farmers"}),"\n",(0,s.jsxs)(n.p,{children:["Farmers receive rewards through PoSpace, which is used to verify that participants have allocated a certain amount of storage space on their devices. The consensus mechanism is achieved through a time-memory trade-off approach, which has its origins in the  ",(0,s.jsx)(n.a,{href:"https://www.semanticscholar.org/paper/Beyond-Hellman's-Time-Memory-Trade-Offs-with-to-of-Abusalah-Alwen/39e70d67eeb5ce140171f6d0629daec3b54d74f3",children:"Beyond Hellman"})," paper and has been adopted for use in the ",(0,s.jsx)(n.a,{href:"https://docs.chia.net/proof-of-space/",children:"Chia protocol"}),". This method allows for a more efficient and secure consensus process compared to traditional energy-intensive mechanisms such as Proof of Work. ",(0,s.jsx)(n.a,{href:"https://github.com/subspace/consensus-v2-research-paper",children:"Subspace improves PoSpace"}),' for storing "useful data" and is closely linked to KZG commitments. We are inspired by them, in contrast, Melodot\'s farmers receive rewards through PoSpace rather than reaching consensus. This incentive mechanism ensures that the network can still recover data when natural sampling samples are insufficient and guarantees data storage for at least a specific duration.']}),"\n",(0,s.jsxs)(n.p,{children:["Farmers need to complete the distributed generation of specified data, expanding the data generated by block proposers in the column direction. They then calculate the challenge eligibility through the generated data, similar to ",(0,s.jsx)(n.a,{href:"https://docs.chia.net/signage-and-infusion-points/",children:"Chia's filter"}),", with only a small portion of farmers eligible to further search for solutions. This design reduces the computation load on farmers, avoids missing the submission of solutions, and allows farmers to devote more bandwidth and capacity resources to data availability sampling and storage. In addition, farmers are more inclined to generate all specified data in a distributed manner, as each chunk represents a potential lottery ticket."]}),"\n",(0,s.jsx)(n.p,{children:"Farmers use the committed space to store blob data and maintain its timeliness. New data receives more rewards, while expired data will not be rewarded. Upon obtaining challenge eligibility, farmers need to search for solutions in the stored data, including chunk, data proofs, space proofs, etc. The system adjusts the difficulty based on the reward claims situation. Ultimately, the rewards farmers receive are linearly related to the size of the stored data space and depend on whether they have correctly and promptly completed distributed generation and necessary data reconstruction."}),"\n",(0,s.jsx)(n.h4,{id:"lifecycle",children:"Lifecycle"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://pic.tom24h.com/zerodao/life.png",alt:"Untitled"})}),"\n",(0,s.jsx)(n.p,{children:"A complete blob transaction includes:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Publishing a blob transaction, including the original KZG commitment"}),"\n",(0,s.jsx)(n.li,{children:"Block builders collect blob transactions and build blocks, erasure code data, and generate new commitments to be added to the block header"}),"\n",(0,s.jsx)(n.li,{children:"Consensus validators verify block validity and, along with farmers, perform preliminary availability sampling (not ensuring 100% validity, but with high probability of being valid), either rejecting or accepting the block"}),"\n",(0,s.jsx)(n.li,{children:"Farmers use the block data, commitments, and proofs learned in the previous step to generate specified columns in a distributed manner"}),"\n",(0,s.jsxs)(n.li,{children:["When the block is finalized","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Farmers with challenge eligibility complete solutions and claim rewards"}),"\n",(0,s.jsx)(n.li,{children:"Light clients and consensus validators perform sampling simultaneously"}),"\n",(0,s.jsx)(n.li,{children:"Farmers obtain more specified data from the network for storage and delete expired data"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Melodot is developed in phases, with the first phase not implementing the complete process."}),"\n",(0,s.jsx)(n.h3,{id:"components",children:"Components"}),"\n",(0,s.jsx)(n.p,{children:"In this phase, we will implement the following core components:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Erasure-Coding"})}),"\n",(0,s.jsxs)(n.p,{children:["A core module for erasure coding and KZG based on ",(0,s.jsx)(n.a,{href:"https://github.com/sifraitech/rust-kzg",children:"rust-kzg"}),", including expanding data and generating commitments and proofs, verifying blob, batch verifying blobs, recovering data, verifying the correct expansion of 2D commitments, and expanding column data and witnesses."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Melo-Store"})}),"\n",(0,s.jsx)(n.p,{children:"Interfaces for registering and managing applications, uploading data, and storing data validity data."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Consensus-related extensions"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"excutive_das"})})," pallet: An extension of the ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"frame-excutive"})})," pallet for scheduling block execution and validation related to DAS"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"system_das"})})," pallet: An extension of the ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"frame-system"})})," pallet, adding new block header generation, actual data generation, and validation."]}),"\n",(0,s.jsxs)(n.ol,{start:"4",children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Sampling Core"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The core crate that actually performs sampling, which several clients in the system depend on. This includes data availability sampling, obtaining and propagating data from the DHT network, and managing data through rocksdb."}),"\n",(0,s.jsxs)(n.ol,{start:"5",children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Light Client"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"A light client that connects to the network and performs sampling based on the block state, including network implementation, distributed generation, data storage, and actual sampling."}),"\n",(0,s.jsxs)(n.ol,{start:"6",children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"Melo-PoSpace"})})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"A pallet for assigning distributed generation columns to farmers, verifying farmers' challenge chunk, and issuing rewards."}),"\n",(0,s.jsxs)(n.ol,{start:"7",children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Farmer Client"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Connects to the network, obtains raw data, and performs distributed generation; obtains challenges from the chain and searches for solutions to claim rewards."}),"\n",(0,s.jsx)(n.h3,{id:"non-goals",children:(0,s.jsx)(n.strong,{children:"Non-Goals"})}),"\n",(0,s.jsx)(n.p,{children:"The goal of the first phase is to minimally implement a usable system and will not fully implement the details described in the whitepaper. The main differences are:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"PoSpace"})}),"\n",(0,s.jsxs)(n.p,{children:["In the first phase, we will only implement a preliminary version of PoSpace, not including the complete PoSpace process. ",(0,s.jsx)(n.a,{href:"https://subspacelabs.notion.site/Subspace-Dilithium-Consensus-Specification-v2-3-274a730b53eb4c93a8d879b90de532ce",children:"Subspace has done an excellent exploration in this regard"}),". In the next phase of development, we should be able to reuse much of their work."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Complete Distributed Generation"})}),"\n",(0,s.jsx)(n.p,{children:"This phase does not include complete distributed generation. Users still need to submit actual data transactions, so farmers and validators do not need to perform the first phase of sampling."}),"\n",(0,s.jsx)(n.h2,{id:"ecosystem-fit",children:(0,s.jsx)(n.strong,{children:"Ecosystem Fit"})}),"\n",(0,s.jsx)(n.h3,{id:"similar-projects",children:"Similar Projects"}),"\n",(0,s.jsxs)(n.p,{children:["There are currently several data availability layer projects, including Ethereum Danksharding, Celestia, Avail, and Eigen DA. Our main difference from them is the introduction of farmers, which solves many tricky problems faced by the data availability layer. Unlike Danksharding, we decouple an independent data availability layer, which is the same principle as Polkadot not supporting smart contracts. Celestia uses a Merkle encoding pattern, requiring fraud proofs and additional assumptions, which we avoid. Avail's data layout uses a 1.5D scheme, which is unacceptable in terms of sampling efficiency, as detailed in the Melodot white paper. Eigen DA is an Ethereum re-collateralization layer implementation of a data availability scheme, with limited public information available, ",(0,s.jsx)(n.a,{href:"https://ethresear.ch/t/unbundling-pbs-towards-protocol-enforced-proposer-commitments-pepc/13879",children:"but it should be in the form of a DA committee"}),", which has its applicable scenarios, but is not the same as Melodot."]}),"\n",(0,s.jsx)(n.h3,{id:"relationship-with-polkadot-and-substrate",children:(0,s.jsx)(n.strong,{children:"Relationship with Polkadot and substrate"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"With Melodot as a data availability layer, any parallel chain can easily become a Rollup settlement layer. Polkadot brings more secure interactions between settlement layers, significantly increasing Polkadot's capacity."}),"\n",(0,s.jsx)(n.li,{children:"Other teams can develop their own data availability layers based on Melodot."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"team-",children:"Team \ud83d\udc65"}),"\n",(0,s.jsx)(n.h3,{id:"team-members",children:"Team members"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Daqin Lee"}),"\n",(0,s.jsx)(n.li,{children:"Zhidong Chen"}),"\n",(0,s.jsx)(n.li,{children:"Sober Man"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"contact",children:"Contact"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Contact Name:"})," Daqin Lee"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Contact Email:"})," ",(0,s.jsx)(n.a,{href:"mailto:lee@melodot.io",children:"lee@melodot.io"})]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"teams-experience",children:"Team's experience"}),"\n",(0,s.jsx)(n.p,{children:"Daqin Lee: Full-stack Developer, Rust and Substrate Developer, core developer of Melodot."}),"\n",(0,s.jsxs)(n.p,{children:["Chen Zhidong: Full-stack Developer, Tesla Machine Learning Engineer, ",(0,s.jsx)(n.a,{href:"http://gohack2017.golangfoundation.org/",children:"GoHack 2017"})," Hackathon ",(0,s.jsx)(n.a,{href:"https://github.com/sillydong/lbsengine",children:"First Prize"}),", will serve as a technical advisor for Melodot."]}),"\n",(0,s.jsx)(n.p,{children:"Sober Man: Embedded Engineer, with years of backend and embedded development experience."}),"\n",(0,s.jsx)(n.h3,{id:"team-code-repos",children:"Team Code Repos"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/ZeroDAO",children:"https://github.com/ZeroDAO"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/DarkingLee",children:"https://github.com/DarkingLee"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/sillydong",children:"https://github.com/sillydong"})}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"development-status",children:"Development Status"}),"\n",(0,s.jsx)(n.p,{children:'ZeroDAO previously developed the Ourspace project, which is a reputation system utilizing social relationships and received support from W3F. After that, we shifted our focus to calculating all social networks in Web3. In this process, we found that they were either expensive to interact with or difficult to securely use on-chain. Through in-depth analysis, we summarized these issues as a lack of visibility. Therefore, we temporarily paused the development of Ourspace (we will continue to develop it later) and focused on researching the "visibility" issue, discovering that rollup technology is a good solution to this problem. The data availability layer is the first step in achieving this, and after extensive research, we designed Melodot. The work we have completed so far includes:'}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://www.notion.so/zerodao/Melodot-Data-Availability-Layer-Whitepaper-b72b1f3de81c40fc94a56763756ce34a",children:"Whitepaper"}),": Completed a preliminary whitepaper."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://zerodao.notion.site/Rollup-product-tracking-research-b9448e4464404736858e55972ea12152",children:"Research"}),": We conducted some research on Rollup and data availability layer projects, and you can see the project list here."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"development-roadmap",children:"Development Roadmap"}),"\n",(0,s.jsx)(n.h3,{id:"overview",children:"Overview"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Total Estimated Duration:"})," 4.5 months"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Full-Time Equivalent (FTE):"})," 1.5"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Total Costs:"})," 28,000 DAI"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"milestone-1--erasure-coding-and-kzg",children:"Milestone 1 \u2014 Erasure coding and KZG"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Estimated duration:"})," 1 month"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"FTE:"})," 1"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Costs:"})," 5,000 USD"]}),"\n"]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Number"}),(0,s.jsx)(n.th,{children:"Deliverable"}),(0,s.jsx)(n.th,{children:"Specification"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"0a."})}),(0,s.jsx)(n.td,{children:"License"}),(0,s.jsx)(n.td,{children:"Apache 2.0"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"0b."})}),(0,s.jsx)(n.td,{children:"Documentation"}),(0,s.jsx)(n.td,{children:"We will provide both inline documentation of the code and a basic tutorial that explains how the new functionality works and how they are used."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"0c."})}),(0,s.jsx)(n.td,{children:"Testing and Testing Guide"}),(0,s.jsx)(n.td,{children:"Unit tests will completely cover the Core functionality to ensure functionality and robustness. In the guide, we will describe how to run these tests."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"0d."})}),(0,s.jsx)(n.td,{children:"Docker"}),(0,s.jsx)(n.td,{children:"We will provide Dockerfiles to demonstrate the full functionality of erasure coding and KZG commitments."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"1."}),(0,s.jsx)(n.td,{children:"melo_erasure_coding"}),(0,s.jsx)(n.td,{children:"The core part of the system, including 2D erasure coding and KZG commitment-related primitives and common interfaces."})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"milestone-2--consensus",children:"Milestone 2 \u2014 Consensus"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Estimated duration:"})," 1.5 months"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"FTE:"})," 1"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Costs:"})," 7,000 USD"]}),"\n"]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Number"}),(0,s.jsx)(n.th,{children:"Deliverable"}),(0,s.jsx)(n.th,{children:"Specification"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"0a."})}),(0,s.jsx)(n.td,{children:"License"}),(0,s.jsx)(n.td,{children:"Apache 2.0"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"0b."})}),(0,s.jsx)(n.td,{children:"Documentation"}),(0,s.jsx)(n.td,{children:"We will provide both inline documentation of the code and a basic tutorial that explains how a user can spin up a client, connect to the client management application and data through a browser, and create a local development chain."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"0c."})}),(0,s.jsx)(n.td,{children:"Testing and Testing Guide"}),(0,s.jsx)(n.td,{children:"Higher-level integration tests and unit tests for all modules. In the guide, we will describe how to run these tests."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"0d."})}),(0,s.jsx)(n.td,{children:"Docker"}),(0,s.jsx)(n.td,{children:"We will provide Dockerfiles to start nodes, create a local test network, and run all integration tests."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"1."}),(0,s.jsx)(n.td,{children:"Substrate pallet: excutive_das"}),(0,s.jsxs)(n.td,{children:["Modify the existing ",(0,s.jsx)(n.code,{children:"frame-executive"})," pallet to support custom headers while ensuring all original tests continue to function."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"2."}),(0,s.jsx)(n.td,{children:"Substrate pallet: system_das"}),(0,s.jsxs)(n.td,{children:["Extend the ",(0,s.jsx)(n.code,{children:"frame-system"})," pallet to support the creation of extended headers."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"3."}),(0,s.jsx)(n.td,{children:"Substrate pallet: melo_store"}),(0,s.jsx)(n.td,{children:"A core pallet for handling data availability. Main features include: 1) Registering applications. 2) Allowing users to submit data metadata. 3) Validators accessing off-chain storage via OCW and reporting unavailable data. 4) Interface for creating extended block header."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"4."}),(0,s.jsx)(n.td,{children:"melodot-client"}),(0,s.jsx)(n.td,{children:"A substrate client containing a complete data availability layer. The DAS core features include: 1) Accepting user-submitted blob_tx, verifying if the data is correctly encoded, submitting the transaction, and publishing the data to a peer-to-peer network 2) Validators retrieving data transactions from the transaction pool and attempting to fetch the data from DHT to save locally."})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"milestone-3--sampling",children:"Milestone 3 \u2014 Sampling"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Estimated duration:"})," 1 month"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"FTE:"})," 1.5"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Costs:"})," 7,000 USD"]}),"\n"]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Number"}),(0,s.jsx)(n.th,{children:"Deliverable"}),(0,s.jsx)(n.th,{children:"Specification"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"0a."})}),(0,s.jsx)(n.td,{children:"License"}),(0,s.jsx)(n.td,{children:"Apache 2.0"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"0b."})}),(0,s.jsx)(n.td,{children:"Documentation"}),(0,s.jsx)(n.td,{children:"We will provide both inline documentation of the code and a basic tutorial that explains how a user can start a light client and connect to the network."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"0c."})}),(0,s.jsx)(n.td,{children:"Testing and Testing Guide"}),(0,s.jsx)(n.td,{children:"Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"0d."})}),(0,s.jsx)(n.td,{children:"Docker"}),(0,s.jsx)(n.td,{children:"We will provide Dockerfiles to start a light client, connect to the local test network, and run all integration tests."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"0e."})}),(0,s.jsx)(n.td,{children:"Article"}),(0,s.jsx)(n.td,{children:"We will publish an article explaining how Melodot works, how to run a local test network, and how to run a light client."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"1."}),(0,s.jsx)(n.td,{children:"Light client"}),(0,s.jsx)(n.td,{children:"A light client that connects to the network and efficiently performs sampling, stores sampling data, and maintains data availability confidence."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"2."}),(0,s.jsx)(n.td,{children:"melo_sampling"}),(0,s.jsx)(n.td,{children:"A decoupled sampling module that provides core functionality related to data sampling."})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"milestone-4--farmer",children:"Milestone 4 \u2014 Farmer"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Estimated duration:"})," 1 month"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"FTE:"})," 2"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Costs:"})," 9,000 USD"]}),"\n"]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Number"}),(0,s.jsx)(n.th,{children:"Deliverable"}),(0,s.jsx)(n.th,{children:"Specification"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"0a."})}),(0,s.jsx)(n.td,{children:"License"}),(0,s.jsx)(n.td,{children:"Apache 2.0"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"0b."})}),(0,s.jsx)(n.td,{children:"Documentation"}),(0,s.jsx)(n.td,{children:"We will provide both inline documentation of the code and a basic tutorial that explains how a user can run a farmer client and earn rewards."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"0c."})}),(0,s.jsx)(n.td,{children:"Testing and Testing Guide"}),(0,s.jsx)(n.td,{children:"Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"0d."})}),(0,s.jsx)(n.td,{children:"Docker"}),(0,s.jsx)(n.td,{children:"We will provide a Dockerfile that can be used to test all the functionality delivered with this milestone."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"0e."})}),(0,s.jsx)(n.td,{children:"Article"}),(0,s.jsx)(n.td,{children:"We will publish an article explaining the farmer part and the future plans for Melodot, as well as how to run a farmer client."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"1."}),(0,s.jsx)(n.td,{children:"melo_farmer"}),(0,s.jsx)(n.td,{children:"Implementation of the farmer client, used to connect to the melodot-client, solve challenges, and distribute and store data."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"2."}),(0,s.jsx)(n.td,{children:"melo_PoSpace"}),(0,s.jsx)(n.td,{children:"A pallet used to assign distributed generation tasks to farmers and distribute rewards to farmers."})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"future-plans",children:(0,s.jsx)(n.strong,{children:"Future Plans"})}),"\n",(0,s.jsx)(n.p,{children:"In the near future, we plan to establish a company as the core development team. Our long-term plan is to build the entire ecosystem through a DAO, and we have already formulated a centralized version of the DAO to be developed after the launch of the Melodot testnet."}),"\n",(0,s.jsx)(n.p,{children:"Our short-to-medium-term plan (6 months) includes:"}),"\n",(0,s.jsx)(n.p,{children:"Melodot"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Launch the testnet"}),"\n",(0,s.jsx)(n.li,{children:"Identify and eliminate all possible security threats"}),"\n",(0,s.jsx)(n.li,{children:"Complete the full PoSpace and distributed generation"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"SDK"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Develop an SDK based on Substrate for quickly launching settlement layers and sequencer"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"additional-information",children:"Additional Information\u2795"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"How did you hear about the Grant Program?"})}),"\n",(0,s.jsx)(n.p,{children:"Web3 Foundation website"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Previous grant applications"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["We have previously applied for ZeroDAO-node, which has now been renamed to (",(0,s.jsx)(n.a,{href:"https://github.com/ZeroDAO/ourspace",children:"ourspace"}),")."]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}}}]);