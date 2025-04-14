"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[33704],{28453:(e,i,n)=>{n.d(i,{R:()=>l,x:()=>a});var t=n(96540);const r={},s=t.createContext(r);function l(e){const i=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(s.Provider,{value:i},e.children)}},79274:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"applications/np-compliant_and_programmable_privacy","title":"Nullifier Prime: Compliant and Programmable Privacy","description":"- Team Name: NP Labs","source":"@site/applications/np-compliant_and_programmable_privacy.md","sourceDirName":"applications","slug":"/applications/np-compliant_and_programmable_privacy","permalink":"/applications/np-compliant_and_programmable_privacy","draft":false,"unlisted":false,"editUrl":"https://github.com/w3f/Grants-Program/edit/master/applications/np-compliant_and_programmable_privacy.md","tags":[],"version":"current","frontMatter":{}}');var r=n(74848),s=n(28453);const l={},a="Nullifier Prime: Compliant and Programmable Privacy",o={},c=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-page_facing_up",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-busts_in_silhouette",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-nut_and_bolt",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 \u2014 EVM+ Chain with Native Data Structures",id:"milestone-1--evm-chain-with-native-data-structures",level:3},{value:"Milestone 2 \u2014 Unshield Transaction Type and ZKP Verification",id:"milestone-2--unshield-transaction-type-and-zkp-verification",level:3},{value:"Milestone 3 \u2014 Key Management and CLI Tools",id:"milestone-3--key-management-and-cli-tools",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information \u2795",id:"additional-information-heavy_plus_sign",level:2}];function d(e){const i={a:"a",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.header,{children:(0,r.jsx)(i.h1,{id:"nullifier-prime-compliant-and-programmable-privacy",children:"Nullifier Prime: Compliant and Programmable Privacy"})}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Team Name:"})," NP Labs"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Payment Details:"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"DOT"}),": 15mXzKEjNF8mMQA7hprb7MaFRu9iWNsTsr3CsXsG5iryBkbo"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Payment"}),": Fiat, details to be shared upon approval"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Level:"})," 3"]}),"\n"]}),"\n",(0,r.jsxs)(i.h2,{id:"project-overview-page_facing_up",children:["Project Overview ","\ud83d\udcc4"]}),"\n",(0,r.jsx)(i.h3,{id:"overview",children:"Overview"}),"\n",(0,r.jsx)(i.p,{children:"Nullifier Prime is a pragmatic approach to programmable and compliant privacy for blockchain applications. Our solution combines features of the Ethereum Virtual Machine (EVM) with a Zcash-like middleware for protecting assets at rest, automatically shielding and unshielding assets before and after smart contract interactions."}),"\n",(0,r.jsx)(i.p,{children:"While private transfers on blockchains have been solved through solutions like ZCash since 2016, programmable privacy (maintaining anonymity while using smart contracts) remains a challenge. Current solutions face trade-offs between privacy and composability, with complex technical implementations that are difficult for developers to work with."}),"\n",(0,r.jsx)(i.p,{children:"Current shielding pools implemented as smart contracts are prohibitively expensive, as they must emulate complex cryptographic primitives through EVM opcodes. More critically, these solutions demand specialized technical expertise from users to maintain privacy guarantees. Users must navigate a cumbersome process of key generation, management, and manual shielding/unshielding of assets, while carefully splitting funds to avoid information leakage."}),"\n",(0,r.jsx)(i.p,{children:'We\'re developing the first-ever "no-click privacy" solution, where users can seamlessly interact with smart contracts without managing privacy operations themselves. Our wallet automatically handles the entire privacy lifecycle\u2014shielding assets, unshielding when needed, and implementing randomized fund splitting strategies\u2014all without requiring user intervention or technical knowledge.'}),"\n",(0,r.jsx)(i.p,{children:"Our project integrates with the Polkadot/Substrate ecosystem by forking the Frontier framework to deploy a Substrate-compatible EVM+ parachain. The privacy features will enhance the functionality of Substrate-based chains which can natively interact with Nullifier Prime."}),"\n",(0,r.jsx)(i.p,{children:"Our team is interested in creating this project because we believe programmable privacy is one of the largest untapped markets in the blockchain space. It enables not only consumer adoption but also opens the door to institutional players for whom compliant privacy is a fundamental requirement."}),"\n",(0,r.jsx)(i.p,{children:"While we believe that fully permissionless privacy is the future, we believe that the current market is ready for a pragmatic approach that protects the user's activity from the broad public, while revealing it to the relevant authorities. Our goal is not to advocate for any particular authority, but rather build the tooling that enables various use cases, including 1) a single authority (e.g. a KYC provider) that can monitor the activity of its citizens, 2) offchain consortium of regulators that can collectively deanonymize transactions via a multisig, 3) onchain governance of privacy parameters. Long term, we believe that tools like verifiable AML (using zkML) will become a standard part of the blockchain stack, allowing for permissionless privacy for the entire ecosystem."}),"\n",(0,r.jsx)(i.h3,{id:"project-details",children:"Project Details"}),"\n",(0,r.jsx)(i.p,{children:"Our project involves creating an EVM+ chain with customizable middleware enforcing privacy-compliance trade-offs at the middleware layer. The key components include:"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:"Enhanced EVM Engine"}),": A fork of ",(0,r.jsx)(i.a,{href:"https://github.com/polkadot-evm/frontier",children:"Frontier"})," (including pallet-evm and pallet-ethereum) and its underlying execution engine ",(0,r.jsx)(i.a,{href:"https://github.com/rust-ethereum/evm/",children:"SputnikVM"})," with additional data structures and transaction types specifically for privacy operations:"]}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Merkle trees for deposits using Poseidon hash (SNARK-friendly)"}),"\n",(0,r.jsx)(i.li,{children:"Nullifier sets for withdrawals using a trie structure"}),"\n",(0,r.jsx)(i.li,{children:'New transaction types: "Shield" and "Unshield"'}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:"Zero-Knowledge Proof System"}),": Integration of ZK proof generation and verification:"]}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Initially based on Zcash cryptographic primitives"}),"\n",(0,r.jsx)(i.li,{children:"Precompiles for verification functions"}),"\n",(0,r.jsx)(i.li,{children:"Possible transition to zkSTARKs (using Plonky3) if time permits"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:"User Interface"}),": CLI tools in Rust for:"]}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Key management (generation and storage)"}),"\n",(0,r.jsx)(i.li,{children:"Creating deposits (commitments) and withdrawals (nullifiers)"}),"\n",(0,r.jsx)(i.li,{children:"Automating proof generation"}),"\n",(0,r.jsx)(i.li,{children:"Transaction management"}),"\n",(0,r.jsx)(i.li,{children:"Viewing account balances (both shielded and public)"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:"Token Support"}),":"]}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Native support for the chain's currency"}),"\n",(0,r.jsx)(i.li,{children:"ERC-20 token integration with special account logic"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:"Technology Stack"}),":"]}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Rust for the node implementation and CLI tools"}),"\n",(0,r.jsx)(i.li,{children:"Modified EVM (SputnikVM) for smart contract execution"}),"\n",(0,r.jsx)(i.li,{children:"Zero-knowledge cryptography libraries"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(i.p,{children:"The system will automatically shield assets after interactions with smart contracts and unshield them before making transactions. This design abstracts away the complexity of privacy operations from both users and developers."}),"\n",(0,r.jsx)(i.p,{children:"Our project will not:"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Implement its own consensus mechanism (will use existing Substrate consensus)"}),"\n",(0,r.jsx)(i.li,{children:"Create a new programming language for privacy applications"}),"\n",(0,r.jsx)(i.li,{children:"Implement a separate private state within smart contracts"}),"\n",(0,r.jsx)(i.li,{children:"Compromise on EVM compatibility for existing applications"}),"\n"]}),"\n",(0,r.jsx)(i.h3,{id:"ecosystem-fit",children:"Ecosystem Fit"}),"\n",(0,r.jsx)(i.p,{children:"Our project fits into the Polkadot/Substrate ecosystem as an enhanced privacy layer for EVM-compatible parachains and applications. It addresses the lack of privacy features in current implementations while maintaining full compatibility with existing EVM smart contracts, which is becoming a core part of the Polkadot ecosystem."}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"Target Audience:"})}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Users seeking privacy for their blockchain interactions"}),"\n",(0,r.jsx)(i.li,{children:"Institutional players requiring compliant privacy solutions"}),"\n"]}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"Needs Met:"})}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Enables programmable privacy without requiring developers to learn new languages or paradigms"}),"\n",(0,r.jsx)(i.li,{children:"Preserves the composability of DeFi applications while adding privacy"}),"\n",(0,r.jsx)(i.li,{children:"Offers customizable middleware solutions with different privacy-compliance trade-offs"}),"\n",(0,r.jsx)(i.li,{children:"Provides a pragmatic approach that covers most use cases with a simpler design"}),"\n"]}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:"Need Identification:"}),'\nThe limitations of current privacy solutions are well-documented in academic literature and industry research. Current "programmable privacy" chains like Aleo, Aztec, or Polygon Miden use a private-public state model with significant limitations:']}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Private state is owned by a single data owner, making composable apps with shared private state impossible"}),"\n",(0,r.jsx)(i.li,{children:"The paradigm is unnatural and error-prone even for cryptography engineers"}),"\n",(0,r.jsx)(i.li,{children:"Developers must navigate complex privacy vs. compliance trade-offs"}),"\n"]}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:"Similar Projects in Polkadot/Substrate:"}),"\nThere are currently no projects in the Polkadot ecosystem offering equivalent programmable privacy features with EVM compatibility."]}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"Similar Projects in Other Ecosystems:"})}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Aztec, Aleo, and Polygon Miden offer programmable privacy but use the private-public state model we aim to improve upon"}),"\n",(0,r.jsx)(i.li,{children:"Penumbra provides app-specific privacy features but with limited programmability"}),"\n",(0,r.jsx)(i.li,{children:"Tornado Cash and similar privacy pools offer some privacy features as smart contracts but lack the protocol-level integration we propose"}),"\n"]}),"\n",(0,r.jsx)(i.p,{children:"Our solution differentiates itself by providing a more pragmatic approach with better developer and user experience, built directly into the protocol while maintaining full EVM compatibility."}),"\n",(0,r.jsxs)(i.h2,{id:"team-busts_in_silhouette",children:["Team ","\ud83d\udc65"]}),"\n",(0,r.jsx)(i.h3,{id:"team-members",children:"Team members"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Marcin - CEO & Lead Engineer"}),"\n",(0,r.jsx)(i.li,{children:"Antonio - Senior Cryptography Engineer"}),"\n",(0,r.jsx)(i.li,{children:"C\xe9sar - Cryptography Engineer"}),"\n",(0,r.jsx)(i.li,{children:"Parsa - Cryptography Engineering intern"}),"\n"]}),"\n",(0,r.jsx)(i.h3,{id:"contact",children:"Contact"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Contact Name:"})," Marcin G\xf3rny"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Contact Email:"})," ",(0,r.jsx)(i.a,{href:"mailto:marcin@np.engineering",children:"marcin@np.engineering"})]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Website:"})," np.engineering"]}),"\n"]}),"\n",(0,r.jsx)(i.h3,{id:"legal-structure",children:"Legal Structure"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Registered Address:"})," Zug, Switzerland"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Registered Legal Entity:"})," Hungry Cats Studio AG"]}),"\n"]}),"\n",(0,r.jsx)(i.h3,{id:"teams-experience",children:"Team's experience"}),"\n",(0,r.jsx)(i.p,{children:"Our team brings extensive experience in cryptography engineering, zero-knowledge systems, and privacy-focused blockchain applications:"}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:"Marcin"})," participated in the a16z Crypto Startup Accelerator (London '24) and is a core contributor & maintainer for ",(0,r.jsx)(i.a,{href:"https://github.com/arkworks-rs/algebra/commits?author=mmagician",children:"Arkworks"}),". Previously worked on the Grants & Research Team at Polkadot, build a GKR-based zkML verifier in halo2, and received a zkGit grant from Ethereum Foundation for ",(0,r.jsx)(i.a,{href:"https://github.com/NP-Eng/zkGit/blob/main/zkGit.pdf",children:"zkGit"}),". He has writted about ",(0,r.jsx)(i.a,{href:"https://open.substack.com/pub/nplabs/p/programmable-privacy",children:"programmable privacy"}),"."]}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:"Antonio"})," is a Senior Cryptography Engineer with a PhD in Number Theory. He has made multiple arkworks contributions, including 3 Polynomial Commitment Schemes (",(0,r.jsx)(i.a,{href:"https://github.com/arkworks-rs/poly-commit/tree/master/poly-commit/src/linear_codes",children:"Ligero, Brakedown"}),", ",(0,r.jsx)(i.a,{href:"https://github.com/arkworks-rs/poly-commit/tree/master/poly-commit/src/hyrax",children:"Hyrax"}),"). His work includes zkML, implementing ",(0,r.jsx)(i.a,{href:"https://github.com/Plonky3/Plonky3/pull/674",children:"STIR in Plonky3"}),", Naysayer Proofs implementation, and designing ",(0,r.jsx)(i.a,{href:"https://np.engineering/posts/tornado-anonymity-revoker-design/",children:"compliant privacy solutions"})," like Tornado Cash."]}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:"C\xe9sar"})," specializes in Cryptography & ML Engineering, with notable work on ",(0,r.jsx)(i.a,{href:"https://np.engineering/posts/zkml-tradeoffs/",children:"zkML"})," and ",(0,r.jsx)(i.a,{href:"https://np.engineering/posts/arithmetic-circuits/",children:"arithmetic circuits"})," and Naysayer Proofs. His recent work includes adding ",(0,r.jsx)(i.a,{href:"https://github.com/Plonky3/Plonky3/pull/674",children:"STIR to Plonky3"}),", Naysayer Proofs, and a ",(0,r.jsx)(i.a,{href:"https://np.engineering/posts/tornado-anonymity-revoker-implementation/",children:"compliant Tornado Cash implementation"}),"."]}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:"Parsa"})," is a Cryptography Engineering intern who has studied probabilistic proofs at EPFL."]}),"\n",(0,r.jsx)(i.h3,{id:"team-code-repos",children:"Team Code Repos"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.a,{href:"https://github.com/mmagician",children:"https://github.com/mmagician"})}),"\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.a,{href:"https://github.com/Antonio95",children:"https://github.com/Antonio95"})}),"\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.a,{href:"https://github.com/Cesar199999",children:"https://github.com/Cesar199999"})}),"\n"]}),"\n",(0,r.jsxs)(i.h2,{id:"development-roadmap-nut_and_bolt",children:["Development Roadmap ","\ud83d\udd29"]}),"\n",(0,r.jsx)(i.h3,{id:"overview-1",children:"Overview"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Total Estimated Duration:"})," 5 months"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Full-Time Equivalent (FTE):"})," 2"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Total Costs:"})," 100,000 USD"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"DOT %:"})," 50%"]}),"\n"]}),"\n",(0,r.jsx)(i.h3,{id:"milestone-1--evm-chain-with-native-data-structures",children:"Milestone 1 \u2014 EVM+ Chain with Native Data Structures"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Estimated duration:"})," 2 months"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"FTE:"})," 2"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Costs:"})," 40,000 USD"]}),"\n"]}),"\n",(0,r.jsxs)(i.table,{children:[(0,r.jsx)(i.thead,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.th,{style:{textAlign:"right"},children:"Number"}),(0,r.jsx)(i.th,{children:"Deliverable"}),(0,r.jsx)(i.th,{children:"Specification"})]})}),(0,r.jsxs)(i.tbody,{children:[(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{style:{textAlign:"right"},children:(0,r.jsx)(i.strong,{children:"0a."})}),(0,r.jsx)(i.td,{children:"License"}),(0,r.jsx)(i.td,{children:"Apache 2.0 / GPLv3 / MIT / Unlicense"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{style:{textAlign:"right"},children:(0,r.jsx)(i.strong,{children:"0b."})}),(0,r.jsx)(i.td,{children:"Documentation"}),(0,r.jsx)(i.td,{children:"We will provide both inline documentation of the code and a basic tutorial explaining how to set up and use the shielding features"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{style:{textAlign:"right"},children:(0,r.jsx)(i.strong,{children:"0c."})}),(0,r.jsx)(i.td,{children:"Testing and Testing Guide"}),(0,r.jsx)(i.td,{children:"Core functions will be fully covered by unit tests, including performance metrics for the new data structures"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{style:{textAlign:"right"},children:(0,r.jsx)(i.strong,{children:"0d."})}),(0,r.jsx)(i.td,{children:"Docker"}),(0,r.jsx)(i.td,{children:"We will provide a Dockerfile for testing the functionality delivered with this milestone"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{style:{textAlign:"right"},children:"1."}),(0,r.jsx)(i.td,{children:"Merkle tree implementation"}),(0,r.jsx)(i.td,{children:"We will implement Merkle trees for deposits using a Poseidon hash function (or similar SNARK-friendly hash function) with fixed size (e.g. depth 20)"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{style:{textAlign:"right"},children:"2."}),(0,r.jsx)(i.td,{children:"Shield transaction type"}),(0,r.jsx)(i.td,{children:'We will create a new transaction type "Shield" alongside existing EVM transaction types (Legacy, EIP-1559, etc.), containing a new field for commitments, and no destination address'})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{style:{textAlign:"right"},children:"3."}),(0,r.jsx)(i.td,{children:"Block header modification"}),(0,r.jsx)(i.td,{children:"We will modify the block header to include the commitment root, and add validation logic for this header extension"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{style:{textAlign:"right"},children:"4."}),(0,r.jsx)(i.td,{children:"Modified EVM engine"}),(0,r.jsx)(i.td,{children:"We will deliver a fork of the EVM engine (SputnikVM) with the above-mentioned structures"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{style:{textAlign:"right"},children:"5."}),(0,r.jsx)(i.td,{children:"Benchmarks"}),(0,r.jsx)(i.td,{children:"We will provide performance metrics for modifying the new data structures and compare them to relevant existing EVM opcodes"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{style:{textAlign:"right"},children:"6."}),(0,r.jsx)(i.td,{children:"Node template"}),(0,r.jsx)(i.td,{children:"We will provide a node template that integrates the Frontier framework which calls into the underlying SputnikVM engine"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{style:{textAlign:"right"},children:"7."}),(0,r.jsx)(i.td,{children:"Tests"}),(0,r.jsx)(i.td,{children:"Add tests which check the functionality of the new transaction types and the Merkle tree implementation. Note, that full shield-unshield lifecycle cannot be tested yet"})]})]})]}),"\n",(0,r.jsx)(i.h3,{id:"milestone-2--unshield-transaction-type-and-zkp-verification",children:"Milestone 2 \u2014 Unshield Transaction Type and ZKP Verification"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Estimated duration:"})," 1.5 months"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"FTE:"})," 2"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Costs:"})," 30,000 USD"]}),"\n"]}),"\n",(0,r.jsxs)(i.table,{children:[(0,r.jsx)(i.thead,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.th,{style:{textAlign:"right"},children:"Number"}),(0,r.jsx)(i.th,{children:"Deliverable"}),(0,r.jsx)(i.th,{children:"Specification"})]})}),(0,r.jsxs)(i.tbody,{children:[(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{style:{textAlign:"right"},children:(0,r.jsx)(i.strong,{children:"0a."})}),(0,r.jsx)(i.td,{children:"License"}),(0,r.jsx)(i.td,{children:"Apache 2.0 / GPLv3 / MIT / Unlicense"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{style:{textAlign:"right"},children:(0,r.jsx)(i.strong,{children:"0b."})}),(0,r.jsx)(i.td,{children:"Documentation"}),(0,r.jsx)(i.td,{children:"We will provide inline documentation and extend the tutorial to cover unshielding functionality"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{style:{textAlign:"right"},children:(0,r.jsx)(i.strong,{children:"0c."})}),(0,r.jsx)(i.td,{children:"Testing and Testing Guide"}),(0,r.jsx)(i.td,{children:"Core functions will be fully covered by unit tests with performance metrics for ZKP verification"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{style:{textAlign:"right"},children:(0,r.jsx)(i.strong,{children:"0d."})}),(0,r.jsx)(i.td,{children:"Docker"}),(0,r.jsx)(i.td,{children:"We will provide a Dockerfile for testing the functionality delivered with this milestone"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{style:{textAlign:"right"},children:"1."}),(0,r.jsx)(i.td,{children:"Unshield transaction type"}),(0,r.jsx)(i.td,{children:'We will implement a new transaction type "Unshield" that includes a destination (withdrawal) address and a field containing the ZK withdrawal proof'})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{style:{textAlign:"right"},children:"2."}),(0,r.jsx)(i.td,{children:"Nullifier set implementation"}),(0,r.jsx)(i.td,{children:"We will implement a nullifier set for withdrawals using a trie data structure for efficient (non-)membership checks"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{style:{textAlign:"right"},children:"3."}),(0,r.jsx)(i.td,{children:"ZKP verification precompile"}),(0,r.jsx)(i.td,{children:"We will implement precompiles for ZKP verification based on Zcash (or similar) cryptographic primitives"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{style:{textAlign:"right"},children:"4."}),(0,r.jsx)(i.td,{children:"Integration with EVM"}),(0,r.jsx)(i.td,{children:"We will ensure backwards compatibility, i.e. CALLs to EVM smart contracts work as expected with the new transaction types"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{style:{textAlign:"right"},children:"5."}),(0,r.jsx)(i.td,{children:"ZKP performance metrics"}),(0,r.jsx)(i.td,{children:"We will provide detailed performance metrics for the nullifier set updates & ZKP verification algorithms"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{style:{textAlign:"right"},children:"6."}),(0,r.jsx)(i.td,{children:"Security analysis"}),(0,r.jsx)(i.td,{children:"We will document the information-theoretic guarantees of the zkSNARK system"})]})]})]}),"\n",(0,r.jsx)(i.h3,{id:"milestone-3--key-management-and-cli-tools",children:"Milestone 3 \u2014 Key Management and CLI Tools"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Estimated duration:"})," 1.5 months"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"FTE:"})," 2"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Costs:"})," 30,000 USD"]}),"\n"]}),"\n",(0,r.jsxs)(i.table,{children:[(0,r.jsx)(i.thead,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.th,{style:{textAlign:"right"},children:"Number"}),(0,r.jsx)(i.th,{children:"Deliverable"}),(0,r.jsx)(i.th,{children:"Specification"})]})}),(0,r.jsxs)(i.tbody,{children:[(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{style:{textAlign:"right"},children:(0,r.jsx)(i.strong,{children:"0a."})}),(0,r.jsx)(i.td,{children:"License"}),(0,r.jsx)(i.td,{children:"Apache 2.0 / GPLv3 / MIT / Unlicense"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{style:{textAlign:"right"},children:(0,r.jsx)(i.strong,{children:"0b."})}),(0,r.jsx)(i.td,{children:"Documentation"}),(0,r.jsx)(i.td,{children:"We will provide inline documentation and a comprehensive guide for using the CLI tools"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{style:{textAlign:"right"},children:(0,r.jsx)(i.strong,{children:"0c."})}),(0,r.jsx)(i.td,{children:"Testing and Testing Guide"}),(0,r.jsx)(i.td,{children:"Core functions will be fully covered by unit tests and we will provide end-to-end testing examples"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{style:{textAlign:"right"},children:(0,r.jsx)(i.strong,{children:"0d."})}),(0,r.jsx)(i.td,{children:"Docker"}),(0,r.jsx)(i.td,{children:"We will provide a Dockerfile for testing the functionality delivered with this milestone"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{style:{textAlign:"right"},children:(0,r.jsx)(i.strong,{children:"0e."})}),(0,r.jsx)(i.td,{children:"Article"}),(0,r.jsx)(i.td,{children:"We will publish an article explaining the key management system and how users can interact with the privacy features"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{style:{textAlign:"right"},children:"1."}),(0,r.jsx)(i.td,{children:"Key management"}),(0,r.jsx)(i.td,{children:"We will implement generation and storage of user keys/secrets based on Zcash (or similar) key derivation algorithms"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{style:{textAlign:"right"},children:"2."}),(0,r.jsx)(i.td,{children:"Shielding functions"}),(0,r.jsx)(i.td,{children:"We will create CLI commands to facilitate creating deposits (commitments)"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{style:{textAlign:"right"},children:"3."}),(0,r.jsx)(i.td,{children:"Unshielding functions"}),(0,r.jsx)(i.td,{children:"We will create CLI commands to facilitate withdrawals (nullifier management) and automating proof generation"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{style:{textAlign:"right"},children:"4."}),(0,r.jsx)(i.td,{children:"Account management"}),(0,r.jsx)(i.td,{children:"We will implement functionality to view account balances (both shielded and public)"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{style:{textAlign:"right"},children:"5."}),(0,r.jsx)(i.td,{children:"Transaction management"}),(0,r.jsx)(i.td,{children:"We will implement functionality to interact with a node and send transactions for deposit/withdraw actions"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{style:{textAlign:"right"},children:"6."}),(0,r.jsx)(i.td,{children:"Performance metrics"}),(0,r.jsx)(i.td,{children:"We will provide metrics for proof generation time and resources used"})]})]})]}),"\n",(0,r.jsx)(i.h2,{id:"future-plans",children:"Future Plans"}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"Short-term plans:"})}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["Develop additional middleware solutions offering different privacy-compliance trade-offs. Specifically, our team has already written about a compliant privacy pool solution in ",(0,r.jsx)(i.a,{href:"https://np.engineering/posts/tornado-anonymity-revoker-design/",children:"this article"}),". The work done as part of this grant will be a foundation for this solution. We want to allow multiple parallel pools to be deployed on the same chain."]}),"\n",(0,r.jsx)(i.li,{children:"Create developer documentation and tooling to facilitate adoption"}),"\n",(0,r.jsx)(i.li,{children:"Collaborate with existing DeFi projects to demonstrate the seamless integration of privacy features"}),"\n",(0,r.jsx)(i.li,{children:"Launch a testnet to allow developers to experiment with the technology"}),"\n"]}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"Long-term plans:"})}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["Implement dynamic Merkle structures to support an ever-growing state (e.g. ",(0,r.jsx)(i.a,{href:"https://docs.grin.mw/wiki/chain-state/merkle-mountain-range/",children:"Merkle Mountain Ranges"})," or ",(0,r.jsx)(i.a,{href:"https://hackmd.io/@MerkleMountainBelts/MMB-Funding-Proposal-V2#MMB-overview",children:"Merkle Mountain Belts"}),")"]}),"\n",(0,r.jsxs)(i.li,{children:["Implement a zkSTARKs-based proof system based on ",(0,r.jsx)(i.a,{href:"https://github.com/Plonky3/Plonky3",children:"Plonky3"})]}),"\n",(0,r.jsx)(i.li,{children:"Create an ecosystem of privacy-preserving applications"}),"\n",(0,r.jsx)(i.li,{children:"Work with regulatory bodies to ensure compliance while maintaining privacy guarantees"}),"\n"]}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:"Maintenance and development:"}),"\nWe plan to finance the project's long-term maintenance and development through:"]}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"This initial grant as a first step towards building a privacy solution for Kusama"}),"\n",(0,r.jsxs)(i.li,{children:["The recently approved Kusama vision initiative (",(0,r.jsx)(i.a,{href:"https://kusama.subsquare.io/referenda/498",children:"Referendum #498"}),") which aims to support advanced technologies like ZK innovation and position Kusama as an experiment-centric network, which will be our main focus for funding."]}),"\n"]}),"\n",(0,r.jsx)(i.p,{children:"In the future, we aim to provide our work as a public good that can be deployed as a common good parachain in the Polkadot ecosystem, making privacy features accessible to the entire network without requiring a token-based economic model."}),"\n",(0,r.jsxs)(i.h2,{id:"additional-information-heavy_plus_sign",children:["Additional Information ","\u2795"]}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:"How did you hear about the Grants Program?"}),"\nRecommendation \ud83d\ude03"]})]})}function h(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}}}]);