"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[7770],{64257:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));a(95657);const l={},i="High-availability validator setup",o={unversionedId:"docs/RFPs/Under Development/raft-validators",id:"docs/RFPs/Under Development/raft-validators",title:"High-availability validator setup",description:"Status:* Under Development",source:"@site/docs/RFPs/Under Development/raft-validators.md",sourceDirName:"docs/RFPs/Under Development",slug:"/docs/RFPs/Under Development/raft-validators",permalink:"/Grants-Program/docs/RFPs/Under Development/raft-validators",draft:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/docs/RFPs/Under Development/raft-validators.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Privacy Enhancement for Polkadot Extension",permalink:"/Grants-Program/docs/RFPs/Under Development/privacy-enhancement-polkadot-extension"},next:{title:"SCALE Codec Comparator",permalink:"/Grants-Program/docs/RFPs/Under Development/scale-codec-comparator"}},s={},d=[{value:"Project Description \ud83d\udcc4",id:"project-description-",level:2},{value:"Summary",id:"summary",level:3},{value:"Present state",id:"present-state",level:3},{value:"Solution",id:"solution",level:3},{value:"Deliverables \ud83d\udd29",id:"deliverables-",level:2},{value:"Milestone 1 - Block production PoC",id:"milestone-1---block-production-poc",level:3},{value:"Milestone 2 - Voting &amp; liveness PoC",id:"milestone-2---voting--liveness-poc",level:3},{value:"Milestone 3 - Raft consensus",id:"milestone-3---raft-consensus",level:3},{value:"Milestone 4 - Production readiness",id:"milestone-4---production-readiness",level:3},{value:"Future plans",id:"future-plans",level:2}],p={toc:d},u="wrapper";function m(t){let{components:e,...a}=t;return(0,r.kt)(u,(0,n.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"high-availability-validator-setup"},"High-availability validator setup"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Status:")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/w3f/Grants-Program/blob/master/applications/High_availability_validator_setup.md"},"Under Development")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Proposer:")," mmagician"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Projects you think this work could be useful for:")," Polkadot & Kusama Validators")),(0,r.kt)("h2",{id:"project-description-"},"Project Description \ud83d\udcc4"),(0,r.kt)("h3",{id:"summary"},"Summary"),(0,r.kt)("p",null,"Validator leader selection via Raft consensus. Inspired by internal discussions & ",(0,r.kt)("a",{parentName:"p",href:"https://kb.certus.one/validator_ha.html#active-active-validator"},"certus.one active-active validator setup"),"."),(0,r.kt)("h3",{id:"present-state"},"Present state"),(0,r.kt)("p",null,"Currently, the recommended setup is to have one active node per validator. The main advantage of this approach is that it removes the danger of equivocation, thus preventing slashing. The key drawback is the lack of a ready backup machine to takeover the responsibility of producing blocks, voting on finality etc. in case the primary one fails. "),(0,r.kt)("p",null,"The drawback can be somewhat remedied by having a backup node in sync, but without access to the session keys necessary for authoring blocks. The process of replacing the keys, however, is manual. Furthermore, the session keys cannot be replaced mid-session and this introduces a time delay for when the validator is active again."),(0,r.kt)("h3",{id:"solution"},"Solution"),(0,r.kt)("p",null,"Rather than relying on one validator node to perform the work, what if we had multiple nodes equally capable of signing messages, yet still avoiding the risk of equivocation? The proposed approach relies on recognising a distinction between ",(0,r.kt)("strong",{parentName:"p"},"signing")," a message and ",(0,r.kt)("strong",{parentName:"p"},"submitting")," it. "),(0,r.kt)("p",null,"Since all our validator nodes are trusted and we don't worry about censorship resistance, we can leverage a leader-follower model to ensure high availibility. ",(0,r.kt)("a",{parentName:"p",href:"https://raft.github.io/"},"Raft")," is a good candidate - it offers a simple consensus mechanism, fault-tolerance and performance. It ensures only one leader is ever in charge of interacting with the blockchain, while the followers simply receive the state updates and automatically replace the leader in case of a failure."),(0,r.kt)("h2",{id:"deliverables-"},"Deliverables \ud83d\udd29"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 3 months"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Full-time equivalent (FTE):")," 1"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Total Costs:")," 30,000 DAI")),(0,r.kt)("h3",{id:"milestone-1---block-production-poc"},"Milestone 1 - Block production PoC"),(0,r.kt)("p",null,"The main goal of the PoC is to add a switch to the substrate node which allows it to decide whether it's a valid block producer or not (i.e. to execute the BABE protocol).\nThe concept could be analogous to the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate/pull/7628"},"remote signing")," feature, in that the node could reach out to an endpoint (local or remote) which tells it whether the node is allowed to author new blocks."),(0,r.kt)("p",null,"The service should contain only basic logic (e.g. return ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," for node0 and return ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," for node1 & node2)."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Estimated Duration:")," 1 month"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"FTE:")," 1"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Costs:")," 10,000 DAI")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Number"),(0,r.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,r.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1."),(0,r.kt)("td",{parentName:"tr",align:null},"Basic service"),(0,r.kt)("td",{parentName:"tr",align:null},"Create a microservice (to run locally or remotely) that accepts connections from the substrate node.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2."),(0,r.kt)("td",{parentName:"tr",align:null},"Microservice logic"),(0,r.kt)("td",{parentName:"tr",align:null},"Hardcoded logic for deciding which node is the leader")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3."),(0,r.kt)("td",{parentName:"tr",align:null},"Update substrate client"),(0,r.kt)("td",{parentName:"tr",align:null},"Modify the substrate code to reach out to a remote service for receiving permission (or not) for submitting blocks")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4."),(0,r.kt)("td",{parentName:"tr",align:null},"Allow as optional"),(0,r.kt)("td",{parentName:"tr",align:null},"The choice of using an outside decision making agent for block submission should be configurable in the cli")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"5."),(0,r.kt)("td",{parentName:"tr",align:null},"Integration test"),(0,r.kt)("td",{parentName:"tr",align:null},"A dockerised setup that allows to test the developed PoC")))),(0,r.kt)("h3",{id:"milestone-2---voting--liveness-poc"},"Milestone 2 - Voting & liveness PoC"),(0,r.kt)("p",null,"Similar to the previous milestone, but concerning other validator jobs, namely voting on finalised blocks (GRANDPA) and communicating liveness (",(0,r.kt)("inlineCode",{parentName:"p"},"I'm online"),")"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Estimated Duration:")," 2 weeks"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"FTE:")," 1"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Costs:")," 5,000 DAI")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Number"),(0,r.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,r.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1."),(0,r.kt)("td",{parentName:"tr",align:null},"Update substrate client - finalisation"),(0,r.kt)("td",{parentName:"tr",align:null},"Modify the substrate code to reach out to a remote service for receiving permission (or not) for submitting votes for finalised blocks (GRANDPA)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2."),(0,r.kt)("td",{parentName:"tr",align:null},"Update substrate client - I'm online"),(0,r.kt)("td",{parentName:"tr",align:null},"Modify the substrate code to reach out to a remote service for receiving permission (or not) for submitting ",(0,r.kt)("inlineCode",{parentName:"td"},"I'm online")," messages")))),(0,r.kt)("h3",{id:"milestone-3---raft-consensus"},"Milestone 3 - Raft consensus"),(0,r.kt)("p",null,"Replace the dummy microservice with a Raft consensus mechanism, responsible for leader selection. "),(0,r.kt)("p",null,"Each node should integrate a Raft client in its code. A good candidate is tikv-client. It should be able to push/receive information on what the latest authored block is (persistent data storage) & act accordingly. "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Estimated Duration:")," 1 month"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"FTE:")," 1"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Costs:")," 10,000 DAI")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Number"),(0,r.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,r.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1."),(0,r.kt)("td",{parentName:"tr",align:null},"Run the necessary Raft services"),(0,r.kt)("td",{parentName:"tr",align:null},"Add a key-value (or other) store binaries that follows a Raft consensus. They should run alongside the validator code")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2."),(0,r.kt)("td",{parentName:"tr",align:null},"Integrate a Raft client into the node"),(0,r.kt)("td",{parentName:"tr",align:null},"Extend the block submission logic to allow only Raft-selected leader as a valid block submitter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3."),(0,r.kt)("td",{parentName:"tr",align:null},"Integration test"),(0,r.kt)("td",{parentName:"tr",align:null},"A dockerised setup that allows to test the Raft consensus mechanism")))),(0,r.kt)("h3",{id:"milestone-4---production-readiness"},"Milestone 4 - Production readiness"),(0,r.kt)("p",null,"Take the previous developments to a state where it's ready to be deployed in production as part of a Polkadot/Kusama validator setup."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Estimated Duration:")," 2 weeks"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"FTE:")," 1"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Costs:")," 5,000 DAI")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Number"),(0,r.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,r.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1."),(0,r.kt)("td",{parentName:"tr",align:null},"Security"),(0,r.kt)("td",{parentName:"tr",align:null},"Make sure that a firewall and proper networking is in place")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2."),(0,r.kt)("td",{parentName:"tr",align:null},"Monitoring"),(0,r.kt)("td",{parentName:"tr",align:null},"Feed the Raft consensus data into Prometheus and display basic info in Grafana.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3."),(0,r.kt)("td",{parentName:"tr",align:null},"Validator setup integration"),(0,r.kt)("td",{parentName:"tr",align:null},"Integrate the above into one of the validator-setup repositories (e.g. ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/w3f/polkadot-secure-validator"},"https://github.com/w3f/polkadot-secure-validator"),")")))),(0,r.kt)("h2",{id:"future-plans"},"Future plans"),(0,r.kt)("p",null,"At some point, BABE will be replaced with Sassafras (see ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/w3f/research-security-issues/issues/37"},"37")," & ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate/pull/4600"},"4600"),") which is likely going to affect the operation of the Raft consensus and thus should be addressed."),(0,r.kt)("p",null,"Furthermore, there are plans for developing additional mechanisms for validator slashing protection (see ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate/issues/7398"},"7398"),"). In particular: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"the leader might need to perform an on-chain key registration upon being appointed."),(0,r.kt)("li",{parentName:"ul"},"followers never increment counters nor generate new tags (unless being promoted)")),(0,r.kt)("p",null,"This high availability setup, when adapted, should still make conceptual sense, because its main purpose is ensuring redundance and quick replacement of the main node & as such will not interfere with the extended key registration proposed in the mentioned issue."))}m.isMDXComponent=!0}}]);