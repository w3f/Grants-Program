"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[9283],{6205:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"applications/StorageHub","title":"StorageHub Grant Application","description":"- Team Name: Moonsong Labs","source":"@site/applications/StorageHub.md","sourceDirName":"applications","slug":"/applications/StorageHub","permalink":"/applications/StorageHub","draft":false,"unlisted":false,"editUrl":"https://github.com/w3f/Grants-Program/edit/master/applications/StorageHub.md","tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453);const r={},o="StorageHub Grant Application",l={},d=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-page_facing_up",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-busts_in_silhouette",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-nut_and_bolt",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone #1: Research &amp; Design",id:"milestone-1-research--design",level:3},{value:"Milestone #2: Technical Deliverables",id:"milestone-2-technical-deliverables",level:3},{value:"Future Plans",id:"future-plans",level:2}];function c(e){const t={a:"a",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"storagehub-grant-application",children:"StorageHub Grant Application"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Team Name:"})," Moonsong Labs"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Payment Address:"})," USD Wire Preferred"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsxs)(t.strong,{children:[(0,s.jsx)(t.a,{href:"https://github.com/w3f/Grants-Program/tree/master#level_slider-levels",children:"Level"}),":"]})," 3"]}),"\n"]}),"\n",(0,s.jsxs)(t.h2,{id:"project-overview-page_facing_up",children:["Project Overview ","\ud83d\udcc4"]}),"\n",(0,s.jsx)(t.h3,{id:"overview",children:"Overview"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Tagline Describer"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"StorageHub is a decentralized storage public good parachain optimized for file based storage and larger data sets that are not suitable to be stored directly in standard parachain storage. The proposed parachain will provide developers in the Polkadot ecosystem with an alternate decentralized and substrate-based storage solution and functionality."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Purpose"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"The goal of this project is to provide storage for web3 applications and protocols within the Polkadot & Kusama ecosystems. Unlike other storage protocols that focus on end user or enterprise storage scenarios, StorageHub\u2019s feature set optimizes for web3 application storage use cases. StorageHub aims to provide a decentralized storage option that allows web3 applications to store large files and large data sets in a cost efficient way without sacrificing decentralization properties."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Problem"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Storage oriented chains, like Filecoin and Arweave, have emerged to provide more efficient and decentralized storage capabilities. However, these chains are standalone chains, and are not designed to interoperate with other chains. The problem is that web3 apps need smart contract logic and compute to be combined with storage to make a complete solution, but smart contracts and compute generally reside on different chains (e.g. Ethereum Mainnet, L2 rollups, Parachains) vs. on the storage optimized chains (Filecoin, Arweave). In response, these storage chains have tried to bolster their smart contract capabilities (e.g. Filecoin\u2019s FVM, Arweave\u2019s Smartweave), but they have and will continue to be hard pressed to convince all compute and smart contract activity to migrate to their chains."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"The ideal scenario would be to combine smart contract execution from e.g. a Substrate based Polkadot parachain such as Moonbeam or Astar with storage from a storage optimized chain like Arweave.  If we look at NFT scenarios as an example, this is happening. The scenario is that you have an NFT contract on Mainnet, that has a pointer to a JPEG via an Arweave URL.  The problem is that this is a one-way pointer between 2 independent systems. It is up to the application to mediate interactions between the 2 chains in the client.  There is no awareness or connection between the contract and the JPEG other than the URL pointer in the contract. What if the contract could update access to and ownership of the actual data itself? What if the contract could read and act on the data stored? Simple functionality like this would open up a large number of new scenarios. End user UX could be substantially improved by removing the need for the user to understand and interact directly with both the contract and the storage blockchains, using potentially different accounts, keys, etc."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Vision"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"StorageHub is a storage optimized parachain that is designed to work with other Polkadot & Kusama parachains. It focuses on storing data in an efficient and decentralized way, while allowing that storage to be accessed, used, and managed by other parachains. It will be possible for users to directly interact with the storage on the chain, but StorageHub also seeks to natively interoperate with existing parachains via XCM."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Inspiration"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Amazon S3"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["(",(0,s.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Amazon_S3",children:"https://en.wikipedia.org/wiki/Amazon_S3"}),") was a key building block of web2 cloud infrastructure that greatly eased and improved data storage in web2 applications.  With S3 devs could store arbitrarily large amounts of data in their apps without needing to get bogged down with storage infrastructure or scaling concerns.  StorageHub seeks to do something similar for web3 devs building on Polkadot."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Filecoin"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["(",(0,s.jsx)(t.a,{href:"https://filecoin.io/",children:"https://filecoin.io/"}),") is a storage optimized chain that creates a 2 sided marketplace of storage providers and storage consumers.  The project is responsible for key innovations such as ipfs and libp2p, among other things.  In many ways filecoin sets the standard for decentralized storage in the web3 space.  Although the protocol seems focused on trying to compete with cloud and other centralized storage providers."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Arweave"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["(",(0,s.jsx)(t.a,{href:"https://www.arweave.org/",children:"https://www.arweave.org/"}),") is a storage optimized chain like filecoin, but that emphasizes permanent storage vs creating a time based storage marketplace.  Users pay once to store data on arweave forever.  It is popular to use for metadata associated with NFTs, among other things."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Project Greenfield"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["(",(0,s.jsx)(t.a,{href:"https://github.com/bnb-chain/greenfield-whitepaper/blob/main/README.md",children:"https://github.com/bnb-chain/greenfield-whitepaper/blob/main/README.md"}),") is a storage optimized chain designed to work with the BNB chain.  It was born out of practical needs that the state of BNB chain is already many terabytes large and there is a need to offload unnecessary storage from the main BNB chain.  There are lots of good cross chain ideas in Greenfield including having storage on Greenfield represented as NFTs on BNB chain which can be managed and whose ownership can be changed."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"project-details",children:"Project Details"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Design and Implementation Principles"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"StorageHub will be a Substrate-native implementation deployed to both Kusama and Polkadot."}),"\n",(0,s.jsx)(t.li,{children:"It will be a public good chain that uses DOT for fees, governance, and other utilities."}),"\n",(0,s.jsx)(t.li,{children:"It will offer native XCM support such that parachains can interact with stored data and metadata in a trustless way.."}),"\n",(0,s.jsx)(t.li,{children:"End users and Dapps should be able to store and retrieve stored data from the chain."}),"\n",(0,s.jsx)(t.li,{children:"The chain will create a 2 sided marketplace of storage providers and storage consumers."}),"\n",(0,s.jsx)(t.li,{children:"A minimum of N copies of any given piece of data should be stored such that the system can survive the loss of some copies without losing the original dataset.  Erasure encoding or similar technique could be optionally used to achieve this."}),"\n",(0,s.jsx)(t.li,{children:"On the tradeoff spectrum between decentralization vs performance, we opt to always maintain good decentralization properties even if that means less performance is possible."}),"\n",(0,s.jsx)(t.li,{children:"There will need to be a network of storage providers that supply storage to the blockchain."}),"\n",(0,s.jsx)(t.li,{children:"The parachain will track metadata about the data being stored, and facilitate payments between the data owner and the storage provider."}),"\n",(0,s.jsx)(t.li,{children:"A set of metadata associated with any stored data will be managed by StorageHub. This will allow the data owner to control access, and to transfer ownership of the data to other parties."}),"\n",(0,s.jsx)(t.li,{children:"StorageHub doesn\u2019t aim to have smart contract functionality itself. Rather it strives to integrate, work with, and complement other smart contract or native parachains."}),"\n",(0,s.jsxs)(t.li,{children:["In creating the design for StorageHub, we will leverage previous research into polkadot and substrate based filestorage solutions such as:","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/w3f/Grants-Program/pull/1888",children:"https://github.com/w3f/Grants-Program/pull/1888"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/common-good-storage/report/blob/master/src/first.md",children:"https://github.com/common-good-storage/report/blob/master/src/first.md"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Key Questions and Anticipated Challenges"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Existing storage networks focus more on storage but less on user accessibility to that data.  But storage without accessibility isn\u2019t that useful to users.  Can we incorporate outside accessibility guarantees into the protocol?"}),"\n",(0,s.jsx)(t.li,{children:"What type of storage will it provide? Only immutable hash/value type or will it support mutable references (like a filesystem, useful to store/manage a web service or page)"}),"\n",(0,s.jsxs)(t.li,{children:["What kind of XCM interaction (API) do we want to support?","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"XCM (mostly HRMP) costs may make some scenarios prohibitive."}),"\n",(0,s.jsx)(t.li,{children:"Given the costs of XCM, to what degree does it make sense to store metadata on StorageHub vs on the controlling chain?"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.li,{children:"What do sustainable economics look like for storage providers, especially given that a public good chain won\u2019t have a token to help bootstrap this side of the market?"}),"\n",(0,s.jsx)(t.li,{children:"How is data provided and stored without increasing PoV?  This will most likely need to be a combination of offchain workers and a separate storage system.  Regular substrate state can\u2019t be used for larger data storage, it would be used to keep tracking information about where and what data is stored."}),"\n",(0,s.jsx)(t.li,{children:"What does this new data provider node look like and how does it work with other node types supporting the system?"}),"\n",(0,s.jsx)(t.li,{children:"How will the system ensure that enough copies of a given piece of data are present and available, given that storage provider nodes can go offline at any time."}),"\n",(0,s.jsx)(t.li,{children:"How is it checked that data providers have the data they are being paid to store?  What are the consequences of failing this check?"}),"\n",(0,s.jsxs)(t.li,{children:["How do you manage censorship of data?","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Different kinds of data that could be subject to take down requests.  Data that e.g. a political party doesn\u2019t like.  Data that is illegal in a given jurisdiction due to copyright or similar.  Data that is both illegal and morally offensive."}),"\n",(0,s.jsx)(t.li,{children:"Perhaps OpenGov tracks could be used for censorship takedowns."}),"\n",(0,s.jsx)(t.li,{children:"Or data storage providers could be given censorship controls, and a permissionless staking design would make it so token holders could vote out providers that are out of line with community censorship standards."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"ecosystem-fit",children:"Ecosystem Fit"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Where and How Does StorageHub Fit In"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"There are currently no native Polkadot decentralized storage solutions and StorageHub aims to fill that gap."}),"\n",(0,s.jsx)(t.li,{children:"Crust provides an incentive layer on top of existing storage protocols like ipfs.  Whereas StorageHub seeks to be a storage provider itself."}),"\n",(0,s.jsx)(t.li,{children:"StorageHub will be natively accessible by other parachains via XCM."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Target Audience"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"StorageHub is targeted for chains, contracts, teams and individuals that require data storage of larger datasets, and who value that storage being decentralized, censorship resistant, and permanent as long as storage fees are paid."}),"\n",(0,s.jsx)(t.li,{children:"StorageHub will prioritize web3 developers that want to incorporate decentralized storage into their applications.  This means a focus on APIs, SDKs, developer docs and education."}),"\n",(0,s.jsx)(t.li,{children:"StorageHub will secondarily provide a reference application which allows users to directly interact with the system, storing data and managing data storage."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Use Cases"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"NFT, NFT marketplace, and Metaverse metadata storage"}),"\n",(0,s.jsx)(t.li,{children:"Dapps that require data storage"}),"\n",(0,s.jsx)(t.li,{children:"Personal and enterprise data storage - same as other storage chains."}),"\n",(0,s.jsx)(t.li,{children:"DAO owned data assets - DAOs operating on existing parachains can manage access to and ownership of data assets on StorageHub."}),"\n",(0,s.jsx)(t.li,{children:"\u201cTrue\u201d NFTs that can have the entirety of their associated data assets on-chain via a combination of an e.g. NFT contract and StorageHub stored assets."}),"\n",(0,s.jsx)(t.li,{children:"Markets for data sets using NFT marketplaces."}),"\n",(0,s.jsx)(t.li,{children:"New types of smart contracts that can act on StorageHub stored data on an one off or continuous basis"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.h2,{id:"team-busts_in_silhouette",children:["Team ","\ud83d\udc65"]}),"\n",(0,s.jsx)(t.h3,{id:"team-members",children:"Team members"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Team Leader: Derek Yoo"}),"\n",(0,s.jsxs)(t.li,{children:["Team:","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Alan Sap\xe8de"}),"\n",(0,s.jsx)(t.li,{children:"Chase Williams"}),"\n",(0,s.jsx)(t.li,{children:"Olivia Smith"}),"\n",(0,s.jsx)(t.li,{children:"Engineers to be hired"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"contact",children:"Contact"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Contact Name:"})," Chase Williams"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Contact Email:"})," ",(0,s.jsx)(t.a,{href:"mailto:Chase@moonsonglabs.com",children:"Chase@moonsonglabs.com"})]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Website:"})," ",(0,s.jsx)(t.a,{href:"https://moonsonglabs.com/",children:"https://moonsonglabs.com/"})]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"legal-structure",children:"Legal Structure"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Registered Address:"})," 1500 District Ave Burlington, MA 01803"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Registered Legal Entity:"})," Delaware C Corp"]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"teams-experience",children:"Team's experience"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"The Moonsong Labs protocol engineering team has deep expertise in Substrate, EVM, cross chain technologies, and launching parachains on Kusama and Polkadot. Our team is the core engineering team for the Moonbeam Network and have made significant contributions to the ecosystem, such as contributions to Frontier, the Moonwall testing framework, parachain-staking pallet, and xcm tools. The engineering team is made up of 13+ engineers and is rapidly growing.\xa0"}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Team Example Code Repos:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/Moonsong-Labs",children:"https://github.com/Moonsong-Labs"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/moonbeam-foundation/moonbeam",children:"https://github.com/moonbeam-foundation/moonbeam"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Team LinkedIn Profiles:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://www.linkedin.com/in/alansapede/",children:"Alan Sapede"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://www.linkedin.com/in/derek-yoo-8a050/",children:"Derek Yoo"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://www.linkedin.com/in/olivia-smith-69966616a/",children:"Olivia Smith"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://www.linkedin.com/in/chase-williams-442712b1/",children:"Chase Williams"})}),"\n",(0,s.jsx)(t.li,{children:"Engineering Team TBD"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.h2,{id:"development-roadmap-nut_and_bolt",children:["Development Roadmap ","\ud83d\udd29"]}),"\n",(0,s.jsx)(t.h3,{id:"overview-1",children:"Overview"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Total Estimated Duration: 2 Months","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Milestone #1: 1 Month"}),"\n",(0,s.jsx)(t.li,{children:"Milestone #2: 1 Month"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.li,{children:"Full-Time Equivalent (FTE): 2.5"}),"\n",(0,s.jsx)(t.li,{children:"Total Costs: $84,500 (USD)"}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"milestone-1-research--design",children:"Milestone #1: Research & Design"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Estimated duration: 1 Month"}),"\n",(0,s.jsx)(t.li,{children:"FTE: 2.5"}),"\n",(0,s.jsx)(t.li,{children:"Costs: $42,250 (USD)"}),"\n"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"right"},children:"Number"}),(0,s.jsx)(t.th,{children:"Deliverable"}),(0,s.jsx)(t.th,{children:"Specification"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"right"},children:(0,s.jsx)(t.strong,{children:"0a."})}),(0,s.jsx)(t.td,{children:"Copyright and Licenses"}),(0,s.jsx)(t.td,{children:"CC BY 4.0 / GPLv3"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"right"},children:(0,s.jsx)(t.strong,{children:"0b."})}),(0,s.jsx)(t.td,{children:"Research & Investigation"}),(0,s.jsxs)(t.td,{children:["* Understand and clarify key requirements via conversations with key stakeholders ",(0,s.jsx)("br",{})," * Study existing solutions and designs to see what technologies and approaches can be leveraged vs. being created ",(0,s.jsx)("br",{})," * Research decentralized storage competitive projects, including but not limited to Filecoin, Arweave, Sia, Storj as well as existing storage work in the Polkadot ecosystem ",(0,s.jsx)("br",{})," * Examine trade offs other decentralized storage providers have made including, but not limited to retrieval times, small v. large files, resiliency, cost efficacy, security & privacy, redundancy, user learning curve and environmental sustainability ",(0,s.jsx)("br",{})," * Begin to design features compatible with Polkadot\u2019s technical approach and philosophy ",(0,s.jsx)("br",{})," * The research & design document will include the gathered requirements and the list of researched solutions & features that could meet those requirements, as well as all supporting evidence and documentation that led to those proposed requirements and features. The document will also expand its research on the \u201cKey Questions and Anticipated Challenges\u201d section"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"right"},children:(0,s.jsx)(t.strong,{children:"0c."})}),(0,s.jsx)(t.td,{children:"Feature Analysis"}),(0,s.jsxs)(t.td,{children:["* In depth research of the technical feasibility of key features and components ",(0,s.jsx)("br",{})," *Evaluation of proposed feature sets, inclusive of a detailed compatibility/tradeoff matrix leading to a clearly defined set of proposed StorageHub features ",(0,s.jsx)("br",{})," * Stakeholders will be asked to provide feedback on those compatibility/tradeoffs and to help choose a good combination of features ",(0,s.jsx)("br",{})," * Definition and documentation of key use cases and scenarios"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"right"},children:(0,s.jsx)(t.strong,{children:"0d."})}),(0,s.jsx)(t.td,{children:"Article"}),(0,s.jsx)(t.td,{children:"* The main deliverable for the first month is v0.5 of the research & design document. The research and design document will include the feature analysis, proposed MVP feature set including key use cases, and address the points in (0b.) and (0c.)"})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"milestone-2-technical-deliverables",children:"Milestone #2: Technical Deliverables"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Estimated Duration: 1 month"}),"\n",(0,s.jsx)(t.li,{children:"FTE: 2.5"}),"\n",(0,s.jsx)(t.li,{children:"Costs: $42,250 (USD)"}),"\n"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"right"},children:"Number"}),(0,s.jsx)(t.th,{children:"Deliverable"}),(0,s.jsx)(t.th,{children:"Specification"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"right"},children:(0,s.jsx)(t.strong,{children:"0a."})}),(0,s.jsx)(t.td,{children:"License Type"}),(0,s.jsx)(t.td,{children:"CC BY 4.0 / GPLv3"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"right"},children:(0,s.jsx)(t.strong,{children:"0b."})}),(0,s.jsx)(t.td,{children:"Documentation"}),(0,s.jsxs)(t.td,{children:["* For the second milestone we will provide v1.0 of the research & design document. The v1.0 document will include a high level technical design & architecture of StorageHub, including major subsystems, incorporating and building upon research from the first v0.5 milestone ",(0,s.jsx)("br",{})," * This v1.0 research and design document will be shared with key stakeholders to obtain specific feedback that will help us continue to refine StorageHub ",(0,s.jsx)("br",{})," * In addition to this, we will also begin to build prototype code that supports and tests the v1.0 technical design considerations. A basic tutorial will be included that explains how a user can run our prototype code and send test transactions"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"right"},children:(0,s.jsx)(t.strong,{children:"0c."})}),(0,s.jsx)(t.td,{children:"Testing & Testing Guide"}),(0,s.jsxs)(t.td,{children:["* Software developed for this milestone will be prototype quality, and thus will not have the tests required for production deployment. However, the prototype code will be sufficient to demonstrate viability or compatibility of key aspects of the design approach ",(0,s.jsx)("br",{})," * As outlined in (0b.), a basic tutorial will be included that explains how a user can run our prototype code and send test transactions"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"right"},children:(0,s.jsx)(t.strong,{children:"0d."})}),(0,s.jsx)(t.td,{children:"Docker"}),(0,s.jsx)(t.td,{children:"* We will provide a Dockerfile(s) that can be used to run the prototype associated with this milestone"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"right"},children:(0,s.jsx)(t.strong,{children:"0e."})}),(0,s.jsx)(t.td,{children:"Prototype Code"}),(0,s.jsxs)(t.td,{children:["* We will create a Substrate and or RUST prototype to validate proposed designs described in the v1.0 design doc. In particular, the approach for the data provider role, and being able to store data in a redundant fashion, and retrieve data from the provider ",(0,s.jsx)("br",{})," * The source code for the prototype will be delivered as part of the second month milestone. The prototype will have limited features (e.g. not decentralized, limited API, etc) or might not be complete but will provide sufficient functionalities to demonstrate key parts of the proposed design ",(0,s.jsx)("br",{})," * We will provide a Dockerfile(s) that can be used to run the prototype associated with this milestone"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"right"},children:(0,s.jsx)(t.strong,{children:"0f."})}),(0,s.jsx)(t.td,{children:"Resource Estimation & Planning"}),(0,s.jsxs)(t.td,{children:["* Estimate the time, budget, and resources required to implement a minimum viable feature set for the project ",(0,s.jsx)("br",{})," * Break down the feature into smaller tasks or user stories ",(0,s.jsx)("br",{})," * Create a proposed project plan that includes implementation milestones, and responsibilities ",(0,s.jsx)("br",{})," * Include proposed next steps in the research and design doc"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"right"},children:(0,s.jsx)(t.strong,{children:"0g."})}),(0,s.jsx)(t.td,{children:"Article"}),(0,s.jsxs)(t.td,{children:["* The main deliverables for this milestone are defined as below ",(0,s.jsx)("br",{})," * Progressing the v0.5 document to a v1.0 state outlined in section (0b.) ",(0,s.jsx)("br",{})," * A Substrate and or RUST prototype to validate proposed designs described in the v1.0, outlined in section (0e.) ",(0,s.jsx)("br",{})," * A basic tutorial will be included that explains how a user can run our prototype code and send test transactions outlined in section (0c.)"]})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"future-plans",children:"Future Plans"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"We are currently in the process of hiring fulltime resources that will be dedicated to this engineering effort."}),"\n",(0,s.jsx)(t.li,{children:"The intended long term plan is to successfully complete this initial grant to then set us up to apply for a follow on long term grant"}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>o});var i=n(96540);const s={},a=i.createContext(s);function r(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);