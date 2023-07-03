"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[61837],{85445:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>c});var n=a(87462),i=(a(67294),a(3905));a(8209);const l={},o="XBI - xcm-based high-level standard and interface (ABI) for smart contracts",r={unversionedId:"applications/xbi-format-psp-t3rn",id:"applications/xbi-format-psp-t3rn",title:"XBI - xcm-based high-level standard and interface (ABI) for smart contracts",description:"This document will be part of the terms and conditions of your agreement and therefore needs to contain all the required information about the project. Don't remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with a > (such as this one) can be removed.",source:"@site/applications/xbi-format-psp-t3rn.md",sourceDirName:"applications",slug:"/applications/xbi-format-psp-t3rn",permalink:"/applications/xbi-format-psp-t3rn",draft:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/applications/xbi-format-psp-t3rn.md",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-",level:2},{value:"Overview",id:"overview",level:3},{value:"Brief Description",id:"brief-description",level:4},{value:"Rationale",id:"rationale",level:4},{value:"Project Details",id:"project-details",level:3},{value:"Propose XCM Format Extension",id:"propose-xcm-format-extension",level:5},{value:"XBI-payload specification",id:"xbi-payload-specification",level:2},{value:"XBI Executor",id:"xbi-executor",level:2},{value:"General introduction to proving with XBI Executor",id:"general-introduction-to-proving-with-xbi-executor",level:3},{value:"Location of XBI in the stack",id:"location-of-xbi-in-the-stack",level:2},{value:"XBI payload lifecycle",id:"xbi-payload-lifecycle",level:3},{value:"Metadata",id:"metadata",level:4},{value:"Lifecycle",id:"lifecycle",level:4},{value:"Expectations",id:"expectations",level:4},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles (if available)",id:"team-linkedin-profiles-if-available",level:3},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-",level:2},{value:"Milestone 1 \u2014 Produce PSP as a result of collaboration with Selected partners which sets requirements for XBI Format and XBI Executors Interface",id:"milestone-1--produce-psp-as-a-result-of-collaboration-with-selected-partners-which-sets-requirements-for-xbi-format-and-xbi-executors-interface",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information \u2795",id:"additional-information-",level:2}],m={toc:c},u="wrapper";function p(e){let{components:t,...a}=e;return(0,i.kt)(u,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"xbi---xcm-based-high-level-standard-and-interface-abi-for-smart-contracts"},"XBI - xcm-based high-level standard and interface (ABI) for smart contracts"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"This document will be part of the terms and conditions of your agreement and therefore needs to contain all the required information about the project. Don't remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with a ",(0,i.kt)("inlineCode",{parentName:"p"},">")," (such as this one) can be removed."),(0,i.kt)("p",{parentName:"blockquote"},"See the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/w3f/Grants-Program/#pencil-process"},"Grants Program Process")," on how to submit a proposal.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Team Name:")," t3rn"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Payment Address:")," 0x343f822207f65fba7cc5325fd76d879528e706f4"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://github.com/w3f/Grants-Program/tree/master#level_slider-levels"},"Level"),":")," 2")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f ",(0,i.kt)("em",{parentName:"p"},"The combination of your GitHub account submitting the application and the payment address above will be your unique identifier during the program. Please keep them safe."))),(0,i.kt)("h2",{id:"project-overview-"},"Project Overview \ud83d\udcc4"),(0,i.kt)("h3",{id:"overview"},"Overview"),(0,i.kt)("p",null,"Propose a new Polkadot Standard Proposal for an XCM-based high-level interface for cross-chain smart contract execution - XBI."),(0,i.kt)("h4",{id:"brief-description"},"Brief Description"),(0,i.kt)("p",null,"XBI will be an XCM-based Binary Interface that extends the XCM-protocol to enable smart contracts calls, while receiving execution results back to the source Parachain. The same interface will be used to connect Smart Contract VMs installed on other Parachains, as well as to communicate with remote-to-Polkadot blockchains using the XCM protocol, which will be compatible with the bridges of the most active blockchain ecosystems today (i.e. Ethereum, Solana, Avalanche, Cosmos)."),(0,i.kt)("p",null,"To further the adoption of XBI within the Polkadot ecosystem we specify XBI as a PSP - Polkadot Standard Proposal."),(0,i.kt)("h4",{id:"rationale"},"Rationale"),(0,i.kt)("p",null,"First and foremost, XBI focuses on usability, as such it will recognise the difference between WASM and EVM, the most popular smart contract byte code in the Polkadot ecosystem, as of today. As a high-level format XBI sets the standard for interfaces implementing interactions between EVM and WASM based contracts."),(0,i.kt)("p",null,"We propose further propose to implement XBI as part of t3rn, a composable smart contracts platform, alongside selected Substrate-based blockchains that focus heavily on the smart contracts interoperability, such as Moonbeam and Astar. This will be done in order to enable mutual cross-chain smart contract communication between internal-to-Polkadot projects using the same Interface for trust-free communication with remote-to-Polkadot ecosystems."),(0,i.kt)("p",null,"The XBI interface used by Parchains offers a contingencies against runtime upgrades, while allowing Parachains to define and expose their functionalties."),(0,i.kt)("h3",{id:"project-details"},"Project Details"),(0,i.kt)("p",null,"The XBI cross-chain binary interface for smart contracts is a format extension to XCM that allows Parachain to mutually call and retrieve results from:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"smart contracts VMs,"),(0,i.kt)("li",{parentName:"ul"},"pallets"),(0,i.kt)("li",{parentName:"ul"},"state queries: on Parachains as well as remote-to-Polkadot ecosystems that have an adapter, for a Pallet XBI Executor, to a Parachain's Runtime. Pallet XBI Executor adapts to a bridge linking a Parachain with selected remote-to-Polkadot ecosystem, defining the necessary interface, while configuring the XCM Executor Pallet to provide status responses on sent queries.")),(0,i.kt)("p",null,"Parachains that use XBI can expect the following functionalities:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"a) Trigger smart contract execution on internal-to-Polkadot Parachains:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Pallet Contracts WASM smart contracts"),(0,i.kt)("li",{parentName:"ul"},"Pallet EVM smart contracts"),(0,i.kt)("li",{parentName:"ul"},"Other Pallets"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"b) Trigger smart contract execution on external-to-Polkadot Ecosystems:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"EVM-like smart contracts"),(0,i.kt)("li",{parentName:"ul"},"Generic smart contracts"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"c) Reveive responses for both successful and unsuccessful executions on both internal and remote-to-Polkadot ecosystems")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"d) Expose customized APIs, specific to a Parachain, decodable via XBI Format."))),(0,i.kt)("h5",{id:"propose-xcm-format-extension"},"Propose XCM Format Extension"),(0,i.kt)("p",null,"We propose for the XCM format to be extended; standardizing how XCM::Transact is used."),(0,i.kt)("p",null,"We further propose to introduce two format XCM extensions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'XCM::Transact("magicbyte", XCMFE#1, <Scale-encoded-native-call>)')," - native runtime dispatch (in case of FRAME - Scale encoded call)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"XCM::Transact(XCMFE#2, <palletname>::<methodname>, <scale-encoded-args>)")," - public Scale-RPC, in case of FRAME - Method name is ",(0,i.kt)("inlineCode",{parentName:"li"},"<palletname>::<methodname>"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"XCM::Transact(XCMFE#3, XBI(<XBI-instance>, XBI-payload))"))),(0,i.kt)("h2",{id:"xbi-payload-specification"},"XBI-payload specification"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"call(instance_id/bridge_id)"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"modifications"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"call_native"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"trigger Scale encoded native call"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"payload: Bytes")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"call_evm"),":  ",(0,i.kt)("inlineCode",{parentName:"li"},"trigger smart contract call"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"caller: AccountId")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"dest: AccountId")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"value: Balance")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"input: Bytes")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"gas_limit: Balance")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"max_fee_per_gas: Option<Balance>")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"max_priority_fee_per_gas: Option<Balance>")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"nonce: Option<u32>")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"access_list: Option<Bytes>")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"call_wasm"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"trigger smart contract call"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"caller: AccountId")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"dest: MultiAddress<AccountId, ()>")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"value: Balance")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"input: Bytes")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"additional_params: Option<Vec<ABIType>>")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"call_custom"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"caller: AccountId")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"dest: MultiAddress<AccountId, ()>")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"value: Balance")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"input: Bytes")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"additional_params: Option<Vec<ABIType>>")))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"query"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"access state / read-only")," // worth making a batch/related call.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"query_evm"),":",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"address: AccountId")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"storage_key: Bytes")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"query_wasm"),":",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"address: AccountId")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"storage_key: Bytes")))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"result"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"(success|failure, <output|failruedetails>, <dest_parachain_witness>)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"metadata"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"Lifecycle status notifications"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Sent (action timeout, notification timeout)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Delivered (action timeout, notification timeout)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Executed (action timeout, notification timeout)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Destination / Bridge security guarantees (e.g. in confirmation no for PoW, finality proofs)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"max_exec_cost"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"Balance")," : ",(0,i.kt)("inlineCode",{parentName:"li"},"Maximal cost / fees for execution of delivery")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"max_notification_cost"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"Balance")," : ",(0,i.kt)("inlineCode",{parentName:"li"},"Maximal cost / fees per delivering notification"))))),(0,i.kt)("p",null,"Each XBI Executor's instance will need to implement the XCM Format for the underlying bridge it connects with."),(0,i.kt)("h2",{id:"xbi-executor"},"XBI Executor"),(0,i.kt)("p",null,"Executers will be responsible for tracking the lifecycle of sent XBI payloads."),(0,i.kt)("p",null,"Getting the result should trigger a XCM-message back to the original sender of the XBI payload (if the sender subscribed to execution lifecycle status notification)."),(0,i.kt)("p",null,"The XCM-message will look like this ",(0,i.kt)("inlineCode",{parentName:"p"},"XCM::Extended|Transact(XCMFE#3, XBI::result(...))"),"."),(0,i.kt)("h3",{id:"general-introduction-to-proving-with-xbi-executor"},"General introduction to proving with XBI Executor"),(0,i.kt)("p",null,"Upon receiving an XBI request, an XBI Executor will generate the associated ID and stores in the state map. This entry to the state map gets updated as soon as the Executor receives the response from one of the Runtime's VM (Default Executor) or an installed Runtime Bridge.\nThe state entry is updated with the output response to the requested XBI Payload. As such, it is available for trust-free validation on the requesting Parachain side by sending back the Witness that includes the dispatched call alongside accompanying bytes, which can be decoded to derive the status of the call after the inclusion has already been confirmed. We propose a form of Witness that should work with most external-to-Polkadot ecosystems; suitability will be assessed as part of the first Development Milestone."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"struct Witness {\n    encoded_message: Vec<u8>, // Encoded message containing the call dispatch   \n    trie_pointer: TriePointer, // Enum pointer, to a merkle tree in that block: state, transaction or logs   \n    block_hash: Vec<u8>, // Pointer to a block including the message   \n    merkle_path_proof: Vec<Vec<u8>> // Proof - a merkle path including message into block \n}\n")),(0,i.kt)("h2",{id:"location-of-xbi-in-the-stack"},"Location of XBI in the stack"),(0,i.kt)("p",null,"XBI Format is a standard over XCM, enabling Parachains with effective communication to use the same interface with various smart contract VMs, installed both at local-to-Polkadot as well remote-to-Polkadot Consensus Systems."),(0,i.kt)("p",null,"Communication using XCM Format traverses as follows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"(trigger) XCM -> (send) XCM>XBI> -> (receive) XBI>DispatchableCall ->  (execute) -> (send) Result->XBI::result -> (receive) XBI result"))),(0,i.kt)("p",null,"The above examples readability could also be enhances with the following example:\n",(0,i.kt)("inlineCode",{parentName:"p"},"(send XBIDefaultExecutor::call_custom) Moonbeam -> t3rn (send XBIRemoteExecutor::call_custom) -> Cosmos Bridge -> (native-to-Cosmos execution) Cosmos Chain  -> Cosmos Bridge -> (send XBIExecutor::result) t3rn -> (receive XBIExecutor::result) Moonbeam")),(0,i.kt)("h3",{id:"xbi-payload-lifecycle"},"XBI payload lifecycle"),(0,i.kt)("p",null,"XBI payload lifecycle can be directed by developers using metadata. XBI Executors implement the functionalities allowing to handle the lifecycle:"),(0,i.kt)("h4",{id:"metadata"},"Metadata"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Lifecycle status notifications",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Sent (action timeout, notification timeout)"),(0,i.kt)("li",{parentName:"ul"},"Delivered (action timeout, notification timeout)"),(0,i.kt)("li",{parentName:"ul"},"Executed (action timeout, notification timeout)"))),(0,i.kt)("li",{parentName:"ul"},"Destination / Bridge security guarantees (e.g. in confirmation no )"),(0,i.kt)("li",{parentName:"ul"},"Timeout for every lifecycle step."),(0,i.kt)("li",{parentName:"ul"},"Maximal cost / fees"),(0,i.kt)("li",{parentName:"ul"},"Notification payment / stipend")),(0,i.kt)("h4",{id:"lifecycle"},"Lifecycle"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Successfully sent across the bridge (no execution yet)"),(0,i.kt)("li",{parentName:"ul"},"Delivery on the other side"),(0,i.kt)("li",{parentName:"ul"},"Execution status on the other side"),(0,i.kt)("li",{parentName:"ul"},"Execution result / Notification stream")),(0,i.kt)("h4",{id:"expectations"},"Expectations"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Propose XBI Format to be used by t3rn and Parachains, factored in feedback and discussion with selected teams building smart contracts VMs."),(0,i.kt)("li",{parentName:"ul"},"Conclude the work on XBI specification as a PSP - Polkadot Specification Proposal"),(0,i.kt)("li",{parentName:"ul"},"Set the stage for the XBI grant follow-up that focuses solely on its implementation for both local and remote to Polkadot ecosystems")),(0,i.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,i.kt)("p",null,"t3rn is a cross-chain smart contracts registry that enable smart contracts execution on multiple blockchians. The XCM-based Interface will come in a form of a FRAME pallet and will be used by t3rn and any other Substrate-based project that wishes to use it."),(0,i.kt)("p",null,"The XBI Format and XBI Executors for cross-chain smart contracts will be tested live in a XCM Environment, such as the Rococo network with other selected Substrate builders."),(0,i.kt)("h2",{id:"team-"},"Team \ud83d\udc65"),(0,i.kt)("h3",{id:"team-members"},"Team members"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Maciej Baj (team lead)"),(0,i.kt)("li",{parentName:"ul"},"t3rn team members: 7 developers")),(0,i.kt)("h3",{id:"contact"},"Contact"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Contact Name:")," Jacob Kowalewski"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Contact Email:")," ",(0,i.kt)("a",{parentName:"li",href:"mailto:jacob@t3rn.io"},"jacob@t3rn.io"),", ",(0,i.kt)("a",{parentName:"li",href:"mailto:maciej@t3rn.io"},"maciej@t3rn.io")," (CC)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Website:")," ",(0,i.kt)("a",{parentName:"li",href:"https://www.t3rn.io/"},"https://www.t3rn.io/"))),(0,i.kt)("h3",{id:"legal-structure"},"Legal Structure"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Registered Address:")," Quijano Chambers, Road Town, Tortola, British Virgin Islands, BVI, BC No. 2062235"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Registered Legal Entity:")," t3rn Ltd.")),(0,i.kt)("h3",{id:"teams-experience"},"Team's experience"),(0,i.kt)("p",null,"t3rn team - succesfully completed one Web3 Foundation grant to establish and implement the prototype of t3rn's cross-chain gateways and is now building as part of Substrate Builders Program."),(0,i.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/t3rn"},"https://github.com/t3rn"))),(0,i.kt)("p",null,"Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/MaciejBaj"},"https://github.com/MaciejBaj"))),(0,i.kt)("h3",{id:"team-linkedin-profiles-if-available"},"Team LinkedIn Profiles (if available)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/maciej-baj/"},"https://www.linkedin.com/in/maciej-baj/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/pauletscheit/"},"https://www.linkedin.com/in/pauletscheit/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/jacobkowalewski/"},"https://www.linkedin.com/in/jacobkowalewski/")),(0,i.kt)("li",{parentName:"ul"},"select members of the ",(0,i.kt)("a",{parentName:"li",href:"https://www.linkedin.com/company/t3rn-io"},"t3rn team")," - TBD")),(0,i.kt)("h2",{id:"development-roadmap-"},"Development Roadmap \ud83d\udd29"),(0,i.kt)("h3",{id:"milestone-1--produce-psp-as-a-result-of-collaboration-with-selected-partners-which-sets-requirements-for-xbi-format-and-xbi-executors-interface"},"Milestone 1 \u2014 Produce PSP as a result of collaboration with Selected partners which sets requirements for XBI Format and XBI Executors Interface"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Estimated duration:")," 6 weeks"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"FTE:"),"  2"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Costs:")," $25.000 in DAI (Ethereum)")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,i.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,i.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"1a."),(0,i.kt)("td",{parentName:"tr",align:null},"License"),(0,i.kt)("td",{parentName:"tr",align:null},"Apache 2.0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"1b."),(0,i.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,i.kt)("td",{parentName:"tr",align:null},"Provide both ",(0,i.kt)("strong",{parentName:"td"},"inline documentation")," of the code and a basic ",(0,i.kt)("strong",{parentName:"td"},"tutorial")," that establishes XBI Format. This assumes a series of consulations and feedback loops enhancing the XBI Format usability with min. 2 selected partnered Parachain teams. Tutorials will be done to show how to access the XBI-Executor interface and interact with XBI Format with it as a Substrate-based blockchain.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"1c."),(0,i.kt)("td",{parentName:"tr",align:null},"PSP"),(0,i.kt)("td",{parentName:"tr",align:null},"Transform the XBI Format documentation into Polkadot Standard Proposal. Detail both the Metadata and all of the XBI execution orders of the format, as a consistent and unambiguous specification.")))),(0,i.kt)("h2",{id:"future-plans"},"Future Plans"),(0,i.kt)("p",null,"This is the research-focused grant proposal on XBI which is assumed to be followed up with the grant focused solely on its implementation."),(0,i.kt)("p",null,"XBI will help contribute to the t3rn vision of a fully connected cross-chain ecosystem, rooted in Polkadot. For the context, t3rn is building a cross-chain smart contract hosting platform that enable smart contracts execution on multiple blockchians."),(0,i.kt)("h2",{id:"additional-information-"},"Additional Information \u2795"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"How did you hear about the Grants Program?"),"\nThis is our second Web3 Foundation grant, having delivered on our first grant back in December 2020. We having been working tirelessly within the Polkadot ecosystem ever since, as part of the Substrate Builders Program and intend to launch as a Polkadot parachain in summer 2022."))}p.isMDXComponent=!0}}]);