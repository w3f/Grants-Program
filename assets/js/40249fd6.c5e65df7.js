"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[1338],{8428:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>m});var a=r(87462),n=(r(67294),r(3905));r(95657);const i={},l="Binary Merkle Tree",s={unversionedId:"applications/binary_merkle_tree",id:"applications/binary_merkle_tree",title:"Binary Merkle Tree",description:"- Team Name: ALPHA LABS FZCO",source:"@site/applications/binary_merkle_tree.md",sourceDirName:"applications",slug:"/applications/binary_merkle_tree",permalink:"/Grants-Program/applications/binary_merkle_tree",draft:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/applications/binary_merkle_tree.md",tags:[],version:"current",frontMatter:{}},o={},m=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Binary Merkle Tree Library",id:"binary-merkle-tree-library",level:4},{value:"Binary Merkle Tree Substrate Integration",id:"binary-merkle-tree-substrate-integration",level:4},{value:"Runtime Interface",id:"runtime-interface",level:5},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Francesco Risitano",id:"francesco-risitano",level:4},{value:"Kin Chan",id:"kin-chan",level:4},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles",id:"team-linkedin-profiles",level:3},{value:"Development Status \ud83d\udcd6",id:"development-status-",level:2},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 - Binary Merkle Tree Library",id:"milestone-1---binary-merkle-tree-library",level:3},{value:"Milestone 2 - Integration of binary merkle tree library into substrate",id:"milestone-2---integration-of-binary-merkle-tree-library-into-substrate",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information \u2795",id:"additional-information-",level:2}],u={toc:m},d="wrapper";function p(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"binary-merkle-tree"},"Binary Merkle Tree"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Team Name:")," ALPHA LABS FZCO"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Payment Address:")," 0x503b14fCcbAD63A1d6054D07f8B4685dCf5db7c3 (USDT ERC20)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"https://github.com/w3f/Grants-Program/tree/master#level_slider-levels"},"Level"),":")," 2")),(0,n.kt)("h2",{id:"project-overview-"},"Project Overview \ud83d\udcc4"),(0,n.kt)("h3",{id:"overview"},"Overview"),(0,n.kt)("p",null,"This project aims to introduce binary merkle tree's as a first class citizen in substrate.  There is a large demand for the usage of binary merkle\ntree's, especially in the context on zero-knowledge circuits where substrate's native patricia merkle tree is not well suited.  The demand\nfor the existence of binary merkle tree's can be evidenced by reviewing grant applications, many of which are implementing\ntheir own binary merkle tree on top of substrates native patricia merkle tree.  This is an inefficient solution and not production ready.  This project\nwill introduce binary merkle tree's as a ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate/blob/master/primitives/storage/src/lib.rs#L239-L245"},"child tree")," such\nthat developers can create and interact with the binary merkle tree's via a runtime api.  We are interested in delivering binary merkle tree's such\nthat we can utilise them in the future for zero-knowledge focused substrate projects."),(0,n.kt)("h3",{id:"project-details"},"Project Details"),(0,n.kt)("p",null,"This project will contain two primary technical deliverables.  The first of which is a binary merkle tree implementation that operates over a\ngeneric ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/paritytech/trie/tree/master/hash-db"},"HashDB"),".  The binary merkle tree implementation will include in-memory storage and\na recorder for recording tree accesses such that storage proofs can be created for inclusion in PoV blocks.  The second deliverable will be the\nintegration of the binary merkle tree into substrate as a child tree.  All deliverables of this project will be implemented in rust and will be no_std\ncompatible such that they can be integrated into substrate core."),(0,n.kt)("h4",{id:"binary-merkle-tree-library"},"Binary Merkle Tree Library"),(0,n.kt)("p",null,"In a similar fashion to the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/paritytech/trie/tree/master/trie-db"},"Trie implementation")," the Tree will be generic over the hasher used.\nThere will be two DB structs, one for read-only access (TreeDB) and one for read / write access (TreeDBMut).  The storage field within the TreeDBMut\nstruct will be responsible for caching nodes in memory and also storing changes to nodes from inserts.  The changes will be committed to the db upon execution of\nthe commit method.  The recorder will be responsible for recording access to tree nodes such that a storage proof can be constructed to include in PoV blocks.  "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rust"},"pub type DBValue = Vec<u8>;\n\npub struct TreeDB<'a, H: Hasher> {\n    db: &'a dyn HashDB<H, DBValue>,\n    root: &'a H::Out,\n    depth: usize,\n    recorder: Recorder\n}\n\npub trait Tree<H: Hasher> {\n    fn root(&self) -> &H::Out;\n\n    fn depth (&self) -> usize;\n\n    fn value(&self, index: usize) -> Result<Option<DBValue>, TreeError>;\n\n    fn leaf(&self, index: usize) -> Result<Option<DBValue>, TreeError>;\n  \n    fn proof(&self, index: usize) -> Result<Option<Vec<usize, DBValue>>, TreeError>;\n}\n\npub struct TreeDBMut<'a, H: Hasher> {\n    db: &'a mut dyn HashDB<H::Out, DBValue>,\n    storage: BTreeMap<usize, DBValue>,\n    uncommitted: Vec<usize>,\n    root: &'a mut H::Out,\n    depth: usize,\n    recorder: Recorder\n}\n\npub trait TreeMut<H: Hasher> {\n    fn root(&mut self) -> &H::Out;\n\n    fn depth(&self) -> uszie;\n\n    fn value(&self, index: usize) -> Result<Option<DBValue>, TreeError>;\n\n    fn leaf(&self, index: usize) -> Result<Option<DBValue>, TreeError>;\n  \n    fn proof(&self, index: usize) -> Result<Option<Vec<usize, DBValue>>, TreeError>;\n\n    fn insert(&mut self, index: usize, value: DBValue) -> Result<Option<DBValue>, TreeError>;\n    \n    fn remove(&mut self, key: &[u8]) -> Result<Option<DBValue>, TreeError>;\n  \n    fn commit(&mut self);\n}\n\npub trait SparseTree<H: Hasher> {\n    fn root(&self) -> &H::Out;\n\n    fn depth(&self) -> usize;\n\n    fn value(&self, key: &[u8]) -> Result<Option<DBValue>, TreeError>;\n\n    fn leaf(&self, key: &[u8]) -> Result<Option<H::Out>, TreeError>;\n\n    fn proof(&self, key: &[u8]) -> Result<Option<Vec<DBValue>>, TreeError>;\n}\n\npub trait SparseTreeMut<H: Hasher> {\n    fn root(&mut self) -> &H::Out;\n\n    fn depth(&self) -> usize;\n\n    fn value(&self, key: &[u8]) -> Result<Option<DBValue>, TreeError>;\n\n    fn leaf(&self, key: &[u8]) -> Result<Option<H::Out>, TreeError>;\n\n    fn proof(&self, key: &[u8]) -> Result<Option<Vec<Node<H>>>, TreeError>;\n\n    fn insert(&mut self, key: &[u8], value: DBValue) -> Result<Option<DBValue>, TreeError>;\n\n    fn remove(&mut self, key: &[u8]) -> Result<Option<DBValue>, TreeError>;\n\n    fn commit(&mut self, key: &[u8]);\n}\n\npub struct Recorder<H: Hasher> {\n  nodes: Vec<H::Out>\n}\n\npub trait RecorderT<H: Hasher> {\n  fn record(&self, access: H::Out);\n}\n")),(0,n.kt)("h4",{id:"binary-merkle-tree-substrate-integration"},"Binary Merkle Tree Substrate Integration"),(0,n.kt)("p",null,"The following table specifies the files that will need to be modified in substrate to support the integration of the\nbinary merkle tree as a child tree.  As this is an internal additive change to substrate it will not require\nmodification of downstream repos.  This list represents our current understanding however it may not be comprehensive\nand is likely to change as we proceed with the integration."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"File"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"primitives/state-machine/src/trie_backend.rs")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"primitives/state-machine/src/trie_backend_essence.rs")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"primitives/state-machine/src/ext.rs")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"primitives/state-machine/src/overlayed_changes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"primitives/state-machine/src/backend.rs")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"primitives/state-machine/src/basic.rs")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"primitives/state-machine/src/read_only.rs")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"primitives/storage/src/lib.rs")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"primitives/trie/src/storage_proof.rs")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"primitives/trie/src/recorder.rs")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"primitives/trie/src/cache")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"primitives/io/src/lib.rs")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"primitives/externalities/src/lib.rs")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"primitives/runtime/src/lib.rs")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"primitives/tasks/src/async_externalities.rs")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"client/db/src/lib.rs")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"client/db/src/storage_cache.rs")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"client/api/src/backend.rs")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"client/api/src/in_mem.rs")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"client/api/src/proof_provider.rs")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"client/chain-spec/src/chain_spec.rs")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"client/network/sync/src/state.rs")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"client/network/light/src/light_client_requests/handler.rs")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"client/rpc/src/state/state_full.rs")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"client/service/src/chain_ops/export_raw_state.rs")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"client/service/src/client/client.rs")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"frame/state-trie-migration/src/lib.rs")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"frame/support/src/storage/child.rs")))),(0,n.kt)("h5",{id:"runtime-interface"},"Runtime Interface"),(0,n.kt)("p",null,"The runtime will be able to access the binary merkle tree child storage via the following runtime interface."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rust"},"#[runtime_interface]\npub trait BinaryMerkleTreeChildStorage {\n    fn get_leaf(&self, storage_key: &[u8], index: usize) -> Option<Vec<u8>>;\n  \n    fn get_value(&self, storage_key: &[u8], index: usize) -> Option<Vec<u8>>;\n  \n    fn get_proof(&self, storage_key: &[u8], index: usize) -> Option<Vec<(usize, Vec<u8>)>>;\n  \n    fn set_value(&mut self, storage_key: &[u8], index: usize, value: &[u8]);\n  \n    fn clear(&mut self, storage_key: &[u8], index: usize);\n  \n    fn storage_kill(&mut self, storage_key: &[u8], _limit: Option<u32>);\n    \n    fn root(&mut self, storage_key: &[u8]) -> Vec<u8>;\n}\n")),(0,n.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,n.kt)("p",null,"This project will introduce a new storage structure to substrate as a child tree.  This will enable any project that builds\nwith substrate to have the ability to work with binary merkle trees.  It will be particularly useful for zero-knowledge projects\nthat require the usage of a binary merkle tree.  The target audience for this project is any team that is developing with substrate.",(0,n.kt)("br",{parentName:"p"}),"\n","This project will satisfy the demand for access to binary merkle trees in substrate. As it stands there are no similar projects\nin the ecosystem however the demand for binary merkle trees is recognised."),(0,n.kt)("h2",{id:"team-"},"Team \ud83d\udc65"),(0,n.kt)("h3",{id:"team-members"},"Team members"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Francesco Risitano - Project Lead / Software Engineer"),(0,n.kt)("li",{parentName:"ul"},"Kin Chan (AKA: Simon Chan) - Software Engineer")),(0,n.kt)("h3",{id:"contact"},"Contact"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Contact Name:")," Francesco Risitano"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Contact Email:")," ",(0,n.kt)("a",{parentName:"li",href:"mailto:francesco.risitano95@gmail.com"},"francesco.risitano95@gmail.com")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Website:")," N/A")),(0,n.kt)("h3",{id:"legal-structure"},"Legal Structure"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Registered Address:")," Dubai Silicon Oasis, DDP, Building A2, Dubai, United Arab Emirates"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Registered Legal Entity:")," ALPHA LABS FZCO")),(0,n.kt)("h3",{id:"teams-experience"},"Team's experience"),(0,n.kt)("h4",{id:"francesco-risitano"},"Francesco Risitano"),(0,n.kt)("p",null,"Francesco found his passion for complex systems and programming during his particle physics research at CERN where he developed\na machine learning algorithm concerned with particle identification at the ATLAS detector. He then transitioned to industry where he\nworked at a telecommunications company applying machine learning models at scale for broadband network assurance and recommendation engines.\nFollowing this he worked at a consultancy where he was the technical lead responsible for architecting and engineering a highly scalable event streaming solution\nfor government. In this role he was responsible for managing a technical team of 12 members. He gained significant experience across\nenterprise architecture, engineering, devops, testing and project management. He then started contributing to open source blockchain projects and found himself\na part-time (evenings / weekends) role building a data oracle. Following this he transitioned full time to blockchain development where he built reef chain,\nan EVM compatible substrate based chain. He is also a Mina genesis founding member and participated in Mina's builders program to develop a POC layer 2 rollup based DEX. His\nexperience at Mina and REEF has fuelled his desire to bring more zero-knowledge technology to the substrate ecosystem and has now left his role at REEF\nto focus on achieving this goal."),(0,n.kt)("h4",{id:"kin-chan"},"Kin Chan"),(0,n.kt)("p",null,"Kin got his start in programming while modelling acoustic absorbers in MATLAB during his MEng dissertation at university. He then went on to work as a fulltime software engineer\nat MirrorWeb, a web archiving startup, where he got his first taste and love for building complex distributed systems. He then moved\nonto BJSS, an enterprise consultancy where he was placed on a project to build out the core systems for one of the world's largest online betting platforms and run a Golang bootcamp\nalongside to train people how to write highly concurrent and effective code. At present, Kin is working as a senior software engineer at Vonage, a cloud communications provider,\nwhere he is developing a brand new, highly scalable, cloud development platform, which is already being used by some high profile clients. As of late, Kin has redirected his focus\ntowards blockchain and has been developing DeFi arbitrage bots in his spare time. Over his career, Kin has worked on a wide range of novel solutions to complex problems and is always\nlooking to solve the next big challenge."),(0,n.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/frisitano"},"https://github.com/frisitano")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/kinluek"},"https://github.com/kinluek"))),(0,n.kt)("h3",{id:"team-linkedin-profiles"},"Team LinkedIn Profiles"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/francescorisitano/"},"https://www.linkedin.com/in/francescorisitano/")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/si-chan-66860610a/"},"https://www.linkedin.com/in/si-chan-66860610a/"))),(0,n.kt)("h2",{id:"development-status-"},"Development Status \ud83d\udcd6"),(0,n.kt)("p",null,"The project has not started yet.  We have defined the requirements and designed the solution as described above in this note."),(0,n.kt)("h2",{id:"development-roadmap-"},"Development Roadmap \ud83d\udd29"),(0,n.kt)("h3",{id:"overview-1"},"Overview"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 3.5"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Full-Time Equivalent (FTE):"),"  2"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Total Costs:")," 25,000 USDT")),(0,n.kt)("h3",{id:"milestone-1---binary-merkle-tree-library"},"Milestone 1 - Binary Merkle Tree Library"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Estimated duration:")," 1.5 month")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"FTE:"),"  2")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Costs:")," 10,000 USD")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Estimated extension required")," 2 weeks (as of 25/2/2023)"))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,n.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,n.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"0a."),(0,n.kt)("td",{parentName:"tr",align:null},"License"),(0,n.kt)("td",{parentName:"tr",align:null},"Apache 2.0 / GPLv3 / MIT / Unlicense")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"0b."),(0,n.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,n.kt)("td",{parentName:"tr",align:null},"We will provide both ",(0,n.kt)("strong",{parentName:"td"},"inline documentation")," of the code and a basic ",(0,n.kt)("strong",{parentName:"td"},"tutorial")," that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"0c."),(0,n.kt)("td",{parentName:"tr",align:null},"Testing and Testing Guide"),(0,n.kt)("td",{parentName:"tr",align:null},"Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"0d."),(0,n.kt)("td",{parentName:"tr",align:null},"Docker"),(0,n.kt)("td",{parentName:"tr",align:null},"We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"1."),(0,n.kt)("td",{parentName:"tr",align:null},"Binary Mekrle Tree Library"),(0,n.kt)("td",{parentName:"tr",align:null},"We will create a binary merkle tree library that operates over a HashDB backend and is generic over the hasher.  It will implement the interfaces as described above in this note.")))),(0,n.kt)("h3",{id:"milestone-2---integration-of-binary-merkle-tree-library-into-substrate"},"Milestone 2 - Integration of binary merkle tree library into substrate"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Estimated Duration:")," 2 month")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"FTE:"),"  2")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Costs:")," 15,000 USD")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Estimated extension required")," 2 months (following completion of milestone 1)"))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,n.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,n.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"0a."),(0,n.kt)("td",{parentName:"tr",align:null},"License"),(0,n.kt)("td",{parentName:"tr",align:null},"Apache 2.0 / GPLv3 / MIT / Unlicense")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"0b."),(0,n.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,n.kt)("td",{parentName:"tr",align:null},"We will provide both ",(0,n.kt)("strong",{parentName:"td"},"inline documentation")," of the code and a basic ",(0,n.kt)("strong",{parentName:"td"},"tutorial")," that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"0c."),(0,n.kt)("td",{parentName:"tr",align:null},"Testing and Testing Guide"),(0,n.kt)("td",{parentName:"tr",align:null},"Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"0d."),(0,n.kt)("td",{parentName:"tr",align:null},"Docker"),(0,n.kt)("td",{parentName:"tr",align:null},"We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"1."),(0,n.kt)("td",{parentName:"tr",align:null},"Binary Mekrle Tree Substrate Integration"),(0,n.kt)("td",{parentName:"tr",align:null},"We will integrate the binary merkle tree library into substrate such that it can be used as a child tree.")))),(0,n.kt)("h2",{id:"future-plans"},"Future Plans"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"We will promote the module to substrate developers via discord, telegram and element."),(0,n.kt)("li",{parentName:"ul"},"We are committed to maintaining the binary merkle tree library."),(0,n.kt)("li",{parentName:"ul"},"We will use the binary merkle tree child tree in future zero-knowledge based projects")),(0,n.kt)("h2",{id:"additional-information-"},"Additional Information \u2795"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"How did you hear about the Grants Program?")," Web3 Foundation Website"))}p.isMDXComponent=!0}}]);