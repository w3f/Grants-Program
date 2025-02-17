"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[21937],{28453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>l});var t=i(96540);const s={},r=t.createContext(s);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(r.Provider,{value:n},e.children)}},44456:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"applications/swarm-nl","title":"SwarmNL","description":"- Team Name: Algorealm","source":"@site/applications/swarm-nl.md","sourceDirName":"applications","slug":"/applications/swarm-nl","permalink":"/applications/swarm-nl","draft":false,"unlisted":false,"editUrl":"https://github.com/w3f/Grants-Program/edit/master/applications/swarm-nl.md","tags":[],"version":"current","frontMatter":{}}');var s=i(74848),r=i(28453);const a={},l="SwarmNL",o={},d=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-page_facing_up",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Features",id:"features",level:3},{value:"Technology Stack",id:"technology-stack",level:4},{value:"What is not included in SwarmNL",id:"what-is-not-included-in-swarmnl",level:4},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-busts_in_silhouette",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team Github Profiles",id:"team-github-profiles",level:3},{value:"Development Status \ud83d\udcd6",id:"development-status-open_book",level:2},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-nut_and_bolt",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1",id:"milestone-1",level:3},{value:"Milestone 2",id:"milestone-2",level:3},{value:"1. Research on Scaling",id:"1-research-on-scaling",level:4},{value:"2. Sharding and data forwarding implementation",id:"2-sharding-and-data-forwarding-implementation",level:4},{value:"3. IPFS integration",id:"3-ipfs-integration",level:4},{value:"4. Extendability of library",id:"4-extendability-of-library",level:4},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information \u2795",id:"additional-information-heavy_plus_sign",level:2}];function h(e){const n={a:"a",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"swarmnl",children:"SwarmNL"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Team Name:"})," Algorealm"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Payment Details:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"DOT:"})," 14pG7HieCjNk2hZ4X2YvxkbpAXs9oCeW8aNZcD7tD2tpaJT9"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Payment Address:"})," 14G7SjRE2TbWVH2yXNe2uwYU1H8Q4c4hyWk892naB3eX7KTy (Polkadot AssetHub)"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Level:"})," 3"]}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"project-overview-page_facing_up",children:["Project Overview ","\ud83d\udcc4"]}),"\n",(0,s.jsx)(n.h3,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)(n.p,{children:"SwarmNL is a configurable P2P networking layer designed to be used in distributed system architectures that require data transfer solutions for off-chain communication in a scalable way."}),"\n",(0,s.jsx)(n.p,{children:"Its goal is to provide a lightweight and configurable P2P networking layer for web applications designed to interact with on-chain data."}),"\n",(0,s.jsx)(n.h3,{id:"project-details",children:"Project Details"}),"\n",(0,s.jsxs)(n.p,{children:["Algorealm has been building ",(0,s.jsx)(n.a,{href:"https://algorealm.gitbook.io/samaritandb/",children:"SamaritanDB"}),", a database management system that allows app users to share parts of their personal data with applications on the internet while retaining control of what data they share. To achieve this, it uses Kilt DIDs and relies on an ink! smart contract to enforce access control."]}),"\n",(0,s.jsxs)(n.p,{children:["As we started building the ",(0,s.jsx)(n.a,{href:"https://github.com/thewoodfish/samaritan-db",children:"SamaritanDB prototype"})," we realized that the networking layer will be a critical building block that can be abstracted into its own subsystem. This gave birth to the idea of creating SwarmNL: a networking layer that can be easily integrated into existing infrastructure without deep technical overhead and knowledge. As a standalone library, it will help teams building applications that require networking to move faster, reliably."]}),"\n",(0,s.jsx)(n.p,{children:"Our goal is to build this for our own purposes and to make it available for any other project to use. Here's a diagram illustrating the integration of SwarmNL to SamaritanDB:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://raw.githubusercontent.com/thewoodfish/encode-ink/main/SwarmNL%20and%20SamDB.png",alt:"SwarmNL and SamaritanDB"})}),"\n",(0,s.jsx)(n.h3,{id:"features",children:"Features"}),"\n",(0,s.jsx)(n.p,{children:"After some research, here are the features we decided to focus on."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Node Communication"})," -- SwarmNL enables P2P node communication by providing an interface for the following:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Node Configuration"})," -- SwarmNL would provide a simple interface to configure the node and specify parameters to dictate its behaviour. This includes:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Selection and configuration of the transport layers to be supported by the node."}),"\n",(0,s.jsx)(n.li,{children:"Selection of the cryptographic keypair to use for identity generation e.g Edwards."}),"\n",(0,s.jsx)(n.li,{children:"Storage and retrieval of keypair locally."}),"\n",(0,s.jsx)(n.li,{children:"PeerID and multiaddress generation."}),"\n",(0,s.jsx)(n.li,{children:"Protocol specification and handlers."}),"\n",(0,s.jsx)(n.li,{children:"Event handlers for network events and logging."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Gossiping"})," -- SwarmNL will implement the ",(0,s.jsx)(n.a,{href:"https://github.com/libp2p/specs/blob/master/pubsub/gossipsub/gossipsub-v1.1.md",children:"Gossipsub 1.1"})," protocol, specified by the ",(0,s.jsx)(n.a,{href:"https://github.com/libp2p/specs",children:"libp2p spec"}),". This would be easily configurable to accommodate varying and peculiar network conditions. We will achieve this by leveraging and enhancing exiting gossipsub libp2p strategies for more specialized use cases.\nWhile libp2p handles liveness through mechanisms like ping/heartbeat/keep-alive, our library extends this by offering additional strategies to address scenarios beyond mere liveness detection. For instance, consider the following use cases:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Node Failure Handling: In the event of a node going down, SwarmNL provides customizable options for developers to define reconnection strategies, automatic peer discovery, and failover mechanisms. This ensures that the network can gracefully adapt to failures without compromising overall system performance."}),"\n",(0,s.jsx)(n.li,{children:"Sharding Support: For scenarios where nodes are dedicated to specific shards or portions of the network, our library will offer functionality to seamlessly integrate and manage such specialised nodes. This allows for more fine-grained control over the network's structure, enabling efficient scaling and resource allocation."}),"\n",(0,s.jsx)(n.li,{children:"Replication Nodes: In cases where replication nodes are required for data redundancy, our library facilitates the addition of nodes dedicated solely to replication tasks. This ensures that data is appropriately distributed and replicated across the network."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Scaling"})," -- SwarmNL needs to efficiently handle a growing (or shrinking) number of nodes while maintaining performance and reliability. Here's what we plan to implement to this effect:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Sharding"})," -- implementation of a flexible generic sharding protocol that allows application specify configurations like sharding hash functions and locations for shards."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Data Forwarding"})," -- definition of a protocol for forwarding messages between nodes in different shards and establishment of efficient routing mechanisms for inter-shard communication."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Fault Tolerance"})," -- implementation of fault-tolerant mechanisms for detecting (and recovering from) node failures. This might involve redundancy, node replication, erasure encoding/decoding or re-routing strategies."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"IPFS"}),":","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Upload"})," -- provision of interfaces to upload to IPFS, pin on current node and post arbitrary data to remote servers. Encryption is also easily pluggable and will be provided."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Download"})," -- retrieval and possible decryption of data from the IPFS network."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"technology-stack",children:"Technology Stack"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Libp2p"}),"\n",(0,s.jsx)(n.li,{children:"Rust"}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"what-is-not-included-in-swarmnl",children:"What is not included in SwarmNL"}),"\n",(0,s.jsx)(n.p,{children:"SwarmNL will not be involved in providing a storage solution. Because SwarmNL will be generic over the storage layer, it will be possible to easily plug in any storage interface in a flexible and configurable way."}),"\n",(0,s.jsx)(n.p,{children:"Storage maintained by the library will mostly be in memory with the exception of config files and other node state keeping data."}),"\n",(0,s.jsx)(n.h3,{id:"ecosystem-fit",children:"Ecosystem Fit"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Where and how does your project fit into the ecosystem?","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"SwarmNL can be used by applications or projects that require a bespoke decentralized communication layer for transporting and exchanging off-chain data."}),"\n",(0,s.jsx)(n.li,{children:"Examples could include Content Delivery Networks (CDNs); distributed storage systems; IoT (Internet of Things); multiplayer online games; and file hosting and sharing systems"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Who is your target audience (parachain/dapp/wallet/UI developers, designers, your own user base, some dapp's userbase, yourself)?","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Our priority is to build this for ",(0,s.jsx)(n.a,{href:"https://github.com/thewoodfish/samaritan-db",children:"SamaritanDB"}),". However, SwarmNL will be generic enough to be used by any developer in the ecosystem that would require a primitive networking layer"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["What need(s) does your project meet?","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"It provides an open-source and flexible communication layer for distributed networking and off-chain data exchange."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["While projects like ",(0,s.jsx)(n.a,{href:"https://crust.network/",children:"Crust network"})," provide a full stack decentralized cloud storage solution for the ecosystem as a dedicated blockchain with an opinionated programming interface, SwarmNL is one subsystem that can be used as a core networking component to build all sorts of decentralized applications, including a bespoke storage solution. Other initiatives like ",(0,s.jsx)(n.a,{href:"https://forum.polkadot.network/t/polkadot-native-storage/4551",children:"Polkadot Native Storage"})," who also piggy back on existing libp2p networking implementations differ as SwarmNL provides the pluggable and interoperable networking layer only."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"team-busts_in_silhouette",children:["Team ","\ud83d\udc65"]}),"\n",(0,s.jsx)(n.h3,{id:"team-members",children:"Team members"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Adedeji Adebayo (Engineering Lead and Core Developer)"}),"\n",(0,s.jsx)(n.li,{children:"Sacha Lansky (Project Lead, Documentation and Testing)"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"contact",children:"Contact"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Contact Name:"})," Sacha Lansky"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Contact Email:"})," ",(0,s.jsx)(n.a,{href:"mailto:alexander.lansky@gmail.com",children:"alexander.lansky@gmail.com"})]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"legal-structure",children:"Legal Structure"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Registered Address:"})," n/a"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Registered Legal Entity:"})," n/a"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"teams-experience",children:"Team's experience"}),"\n",(0,s.jsxs)(n.p,{children:["Adedeji Adebayo is a dynamic and inquisitive programmer, spanning over five years of experience in web development, systems software, and blockchain technologies and is also the founder of Algorealm. His notable achievements include securing a position among the top three winners in the Web3 and Tooling category of the ",(0,s.jsx)(n.a,{href:"https://polkadot-na.devpost.com",children:"Polkadot Hackathon: North America Edition"}),". Additionally, he emerged as the sole winner in the KILT category during the ",(0,s.jsx)(n.a,{href:"https://www.polkadotglobalseries.com/europe/",children:"Polkadot Hackathon: Europe Edition"}),", where he presented a solution for property management issues in West Africa."]}),"\n",(0,s.jsx)(n.p,{children:"Sacha Lansky started his journey into the Polkadot ecosystem in 2020 and joined Parity to lead developer advocate related activities in 2021. Since then he has written a number of guides and tutorials to help newcomers learn how to build on Polkadot, with a focus on Substrate. He's launched initiatives such as the Substrate Newsletter, Substrate Seminar, SDK Unwinds as well as played a key role in the content launch for the first wave of the Polkadot Blockchain Academy."}),"\n",(0,s.jsx)(n.p,{children:"Sacha and Adedeji met during a Polkadot hackathon back in 2022 where Sacha was his hackathon mentor at the time and helped him flesh out the vision for realising SamaritanDB. Since then, they have been iterating on the required infrastructure to be able to create a decentralized operating system for building applications powered by SamaritanDB."}),"\n",(0,s.jsx)(n.h3,{id:"team-code-repos",children:"Team Code Repos"}),"\n",(0,s.jsxs)(n.p,{children:["The SwarmNL Github repository: ",(0,s.jsx)(n.a,{href:"https://github.com/algorealminc/SwarmNL",children:"https://github.com/algorealminc/SwarmNL"})]}),"\n",(0,s.jsx)(n.h3,{id:"team-github-profiles",children:"Team Github Profiles"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/thewoodfish",children:"https://github.com/thewoodfish"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/sacha-l",children:"https://github.com/sacha-l"})}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"development-status-open_book",children:["Development Status ","\ud83d\udcd6"]}),"\n",(0,s.jsxs)(n.p,{children:["We have built a PoC for SamaritanDB (see ",(0,s.jsx)(n.a,{href:"https://github.com/thewoodfish/samaritandb-proto1",children:"the Github repo here"}),"). A very small inflexible version of SwarmNL was used in the development of the PoC, as an inclusive non-distinguishable part of the system. This grant will help us work towards isolating and making this component robust, configurable and pluggable for any project."]}),"\n",(0,s.jsxs)(n.h2,{id:"development-roadmap-nut_and_bolt",children:["Development Roadmap ","\ud83d\udd29"]}),"\n",(0,s.jsx)(n.h3,{id:"overview-1",children:"Overview"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Total Estimated Duration:"})," 3 months"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Full-Time Equivalent (FTE):"})," 1"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Total Costs:"})," $48,000"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"milestone-1",children:"Milestone 1"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Estimated duration:"})," 1.5 months"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"FTE:"})," 1"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Costs:"})," $12,000"]}),"\n"]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"right"},children:"Number"}),(0,s.jsx)(n.th,{children:"Deliverable"}),(0,s.jsx)(n.th,{children:"Specification"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"right"},children:(0,s.jsx)(n.strong,{children:"0a."})}),(0,s.jsx)(n.td,{children:"License"}),(0,s.jsx)(n.td,{children:"Apache 2.0"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"right"},children:(0,s.jsx)(n.strong,{children:"0b."})}),(0,s.jsx)(n.td,{children:"Documentation"}),(0,s.jsxs)(n.td,{children:["We will provide both ",(0,s.jsx)(n.strong,{children:"inline documentation"})," of the code and a basic ",(0,s.jsx)(n.strong,{children:"tutorial"})," that explains how a user can integrate SwarmNL and configure nodes on the network."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"right"},children:(0,s.jsx)(n.strong,{children:"0c."})}),(0,s.jsx)(n.td,{children:"Testing and Testing Guide"}),(0,s.jsx)(n.td,{children:"Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"right"},children:(0,s.jsx)(n.strong,{children:"0d."})}),(0,s.jsx)(n.td,{children:"Docker"}),(0,s.jsx)(n.td,{children:"We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"right"},children:"1."}),(0,s.jsx)(n.td,{children:"SwarmNL configuration module"}),(0,s.jsx)(n.td,{children:"Implementation of the configuration interfaces to define the behaviour of the nodes and the network."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"right"},children:"2."}),(0,s.jsx)(n.td,{children:"Gossipsub"}),(0,s.jsx)(n.td,{children:"Implementation of the gossipsub communication algorithm and configurable interfaces for application level data filtering and authentication."})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"milestone-2",children:"Milestone 2"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Estimated Duration:"})," 2.5 months (10 weeks)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"FTE:"})," 1.5"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Costs:"})," $36,000"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"DOT %:"})," 50%"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"1-research-on-scaling",children:"1. Research on Scaling"}),"\n",(0,s.jsx)(n.p,{children:"Research objective: to find the most efficient implementation to scale swarms, using state of the art research (estimated: 2 weeks)."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"1 week:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Fault tolerance algorithms and their implementations"}),"\n",(0,s.jsx)(n.li,{children:"Sharding algorithms"}),"\n",(0,s.jsx)(n.li,{children:"Cooperation / coordination algorithms"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"1 week:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Report of findings"}),"\n",(0,s.jsx)(n.li,{children:"Comparative analysis and final decisions based on our findings for the direction of our implementation"}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"2-sharding-and-data-forwarding-implementation",children:"2. Sharding and data forwarding implementation"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"A. 3 weeks: sharding and data forwarding"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"1 week: scaffolding and draft implementation"}),"\n",(0,s.jsx)(n.li,{children:"2 weeks: review, testing and improvements"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"B. 2 weeks: writing integration-like tests to demonstrate the algorithms at scale"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"1 week: benchmarking network behavior"}),"\n",(0,s.jsx)(n.li,{children:"1 week: documentation and results"}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"3-ipfs-integration",children:"3. IPFS integration"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Estimated 1 week:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Implementation of all IPFS features for a swarm / testing"}),"\n",(0,s.jsx)(n.li,{children:"Documentation and guides to easily use the IPFS features (tweak library accordingly if necessary)"}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"4-extendability-of-library",children:"4. Extendability of library"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Estimated 2 weeks:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Provide capabilities to take snapshots of networking state and send to remote server including logs"}),"\n",(0,s.jsx)(n.li,{children:"Testing and documentation"}),"\n",(0,s.jsx)(n.li,{children:"Touching up and miscellaneous"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"This brings us to total estimation of 10 weeks with a 1.5 FTE. With hourly rates revised to 60 USD/hr at 40 hour per week, our estimations come to a 2400 USD (1 FTE) + 1200 (0.5 FTE). This brings the total to 36,000 USD for Milestone 2, to fund the work of a Lead Engineer + Protocol Researcher (Adedeji) and Project Lead + Developer (Sacha) required to ship the libraries' features for this milestone."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"right"},children:"Number"}),(0,s.jsx)(n.th,{children:"Deliverable"}),(0,s.jsx)(n.th,{children:"Specification"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"right"},children:(0,s.jsx)(n.strong,{children:"0a."})}),(0,s.jsx)(n.td,{children:"License"}),(0,s.jsx)(n.td,{children:"Apache 2.0"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"right"},children:(0,s.jsx)(n.strong,{children:"0b."})}),(0,s.jsx)(n.td,{children:"Documentation"}),(0,s.jsxs)(n.td,{children:["We will provide both ",(0,s.jsx)(n.strong,{children:"inline documentation"})," of all new code and basic guides that explain how a user can add new nodes to SwarmNL and showcase API usage for different network configurations."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"right"},children:(0,s.jsx)(n.strong,{children:"0c."})}),(0,s.jsx)(n.td,{children:"Testing and Testing Guide"}),(0,s.jsx)(n.td,{children:"Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"right"},children:(0,s.jsx)(n.strong,{children:"0d."})}),(0,s.jsx)(n.td,{children:"Docker"}),(0,s.jsx)(n.td,{children:"We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"right"},children:"1."}),(0,s.jsx)(n.td,{children:"Research"}),(0,s.jsx)(n.td,{children:"Research on decentralized fault-tolerant, coordination and sharding algorithms for large scale networks."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"right"},children:"2."}),(0,s.jsx)(n.td,{children:"Scaling"}),(0,s.jsx)(n.td,{children:"Implementation of sharding, data-forwarding and fault-tolerant algorithms into SwarmNL."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"right"},children:"3."}),(0,s.jsx)(n.td,{children:"IPFS integration"}),(0,s.jsx)(n.td,{children:"Implementation of interfaces to upload, download and pin IPFS files."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"right"},children:"4."}),(0,s.jsx)(n.td,{children:"Extendability of library"}),(0,s.jsx)(n.td,{children:"Implementation of interfaces to POST arbitrary data to remote servers."})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"future-plans",children:"Future Plans"}),"\n",(0,s.jsx)(n.p,{children:"With milestones 1 and 2 completed, we plan to continue the development of SamaritanDB and launch an MVP that we will use to roll out the first wave of applications powered by SamaritanDB."}),"\n",(0,s.jsxs)(n.h2,{id:"additional-information-heavy_plus_sign",children:["Additional Information ","\u2795"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"How did you hear about the Grants Program?"})," Personal recommendation."]})]})}function c(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}}}]);