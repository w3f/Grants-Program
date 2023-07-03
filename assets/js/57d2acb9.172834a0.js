"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[61555],{3608:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var o=a(87462),n=(a(67294),a(3905));a(8209);const i={},l="Polkadot Protocol Conformance Tests",r={unversionedId:"docs/RFPs/Open/polkadot-protocol_conformance_tests",id:"docs/RFPs/Open/polkadot-protocol_conformance_tests",title:"Polkadot Protocol Conformance Tests",description:"Status:* Open",source:"@site/docs/RFPs/Open/polkadot-protocol_conformance_tests.md",sourceDirName:"docs/RFPs/Open",slug:"/docs/RFPs/Open/polkadot-protocol_conformance_tests",permalink:"/docs/RFPs/Open/polkadot-protocol_conformance_tests",draft:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/docs/RFPs/Open/polkadot-protocol_conformance_tests.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Parachain Validation Conformance Testing",permalink:"/docs/RFPs/Open/parachain_validation_conformance_testing"},next:{title:"Sub-consensus mechanism",permalink:"/docs/RFPs/Open/sub-consensus"}},s={},c=[{value:"Project Description \ud83d\udcc4",id:"project-description-",level:2},{value:"Deliverables",id:"deliverables",level:2}],p={toc:c},m="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(m,(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"polkadot-protocol-conformance-tests"},"Polkadot Protocol Conformance Tests"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Status:")," Open"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Proposer:")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/bhargavbh"},"Bhargav Bhatt"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/Noc2"},"David Hawig")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Objectives:")," Create and maintain a comprehensive test-suite for conformance of core functionalities of Polkadot Host.")),(0,n.kt)("h2",{id:"project-description-"},"Project Description \ud83d\udcc4"),(0,n.kt)("p",null,"The reliability and security of the Polkadot network crucially depends on bug-free implementation of Hosts/Nodes. Currently, Substrate and Smoldot (in Rust) are implementations in production, while ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/ChainSafe/gossamer"},"Gossamer (in Go)")," and ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/soramitsu/kagome/"},"Kagome (in C++)")," are in advanced stages of development. This RFP invites teams to create and maintain a comprehensive test-suite to check conformance of Host implementations against the official ",(0,n.kt)("a",{parentName:"p",href:"https://spec.polkadot.network/"},"Polkadot Protocol Specification"),". "),(0,n.kt)("p",null,"The objectives are multifold. The test-suite can:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"be used to objectively evaluate the conformance of a Host Implementation against the Spec. "),(0,n.kt)("li",{parentName:"ul"},"help implementers in early stages and steer their development efforts. "),(0,n.kt)("li",{parentName:"ul"},"complement the specifications to clarify corner cases and intricacies of the Spec. In several scenarios, precise tests are highly valuable in clarifying the inevitable ambiguities in the Spec. ")),(0,n.kt)("p",null,"Initially, the focus would be on unit tests with tests designed and generated at the right layer of abstraction to accommodate the existing implementations. The scope of the test-suite covers all the components/protocols described in the Specification but we would like to prioritise the following:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Mapping the consensus attack surface and producing fuzzing targets accordingly. Indicative, non-exhaustive list of potential targets can be seen below:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Host API: ",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"sequences of storage and child-storage operations"),(0,n.kt)("li",{parentName:"ul"},"cryptography primitives, particularly those exposed in the Host API"),(0,n.kt)("li",{parentName:"ul"},"trie root"))),(0,n.kt)("li",{parentName:"ul"},"BABE",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Block import"),(0,n.kt)("li",{parentName:"ul"},"block validation"),(0,n.kt)("li",{parentName:"ul"},"next/current validators aka VRF/block lottery"),(0,n.kt)("li",{parentName:"ul"},"secondary slot verification"))),(0,n.kt)("li",{parentName:"ul"},"GRANDPA",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"block import"),(0,n.kt)("li",{parentName:"ul"},"block validation"),(0,n.kt)("li",{parentName:"ul"},"justification import & validation/verification"))))),(0,n.kt)("li",{parentName:"ul"},"trie proof verification"),(0,n.kt)("li",{parentName:"ul"},"scale encoding and decoding, for specific message types, and randomly generated ones"),(0,n.kt)("li",{parentName:"ul"},"parachain candidate validation")),(0,n.kt)("p",null,"The goal of the initial grant should be to develop a PoC. The long-term goal should be to develop a comprehensive test suite that is funded by the on-chain treasury. "),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Useful resources:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://spec.polkadot.network/"},"Polkadot Protocol Specification")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/w3f/polkadot-tests"},"GitHub polkadot-tests")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/AcalaNetwork/chopsticks"},"Chopsticks")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/paritytech/zombienet"},"Zombienet")," "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.substrate.io/reference/command-line-tools/try-runtime/"},"try-runtime")," ")),(0,n.kt)("h2",{id:"deliverables"},"Deliverables"),(0,n.kt)("p",null,"The structure of the grant and the milestones depends highly on the project itself and the goal of the initial PoC. It\u2019s therefore up to the applying team to come up with a milestone and delivery structure."))}u.isMDXComponent=!0}}]);