"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[1770],{89196:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>k,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));a(95657);const i={},l="Zkwasm Rollups Transfer",o={unversionedId:"applications/zkwasm-rollups-transfer",id:"applications/zkwasm-rollups-transfer",title:"Zkwasm Rollups Transfer",description:"- Team Name: Zkwasm Rollups Transfer",source:"@site/applications/zkwasm-rollups-transfer.md",sourceDirName:"applications",slug:"/applications/zkwasm-rollups-transfer",permalink:"/Grants-Program/applications/zkwasm-rollups-transfer",draft:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/applications/zkwasm-rollups-transfer.md",tags:[],version:"current",frontMatter:{}},p={},s=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-",level:2},{value:"Overview",id:"overview",level:3},{value:"General purpose rollup",id:"general-purpose-rollup",level:4},{value:"Implement verification function as built-in",id:"implement-verification-function-as-built-in",level:4},{value:"Project Details",id:"project-details",level:3},{value:"Cryptography Primitive",id:"cryptography-primitive",level:4},{value:"Zero Knowledge Proof Library",id:"zero-knowledge-proof-library",level:4},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles",id:"team-linkedin-profiles",level:3},{value:"Development Status \ud83d\udcd6",id:"development-status-",level:2},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 | Crypto Primitive",id:"milestone-1--crypto-primitive",level:3},{value:"Milestone 2 | Plonk Extension",id:"milestone-2--plonk-extension",level:3},{value:"Milestone 3 | Zk Wasm Transfer Prover and Verifier",id:"milestone-3--zk-wasm-transfer-prover-and-verifier",level:3},{value:"Milestone 4 | Zk Wasm Transfer Rollup Node",id:"milestone-4--zk-wasm-transfer-rollup-node",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information \u2795",id:"additional-information-",level:2}],m={toc:s},d="wrapper";function k(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"zkwasm-rollups-transfer"},"Zkwasm Rollups Transfer"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Team Name:")," Zkwasm Rollups Transfer"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Payment Address:")," 0x9061b0787D28d0fDaD845d670F7505EAE5F3B01B (USDT)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Level:")," 3")),(0,n.kt)("h2",{id:"project-overview-"},"Project Overview \ud83d\udcc4"),(0,n.kt)("p",null,"We would like to implement transfer rollups by ",(0,n.kt)("strong",{parentName:"p"},"zkwasm"),"."),(0,n.kt)("p",null,"This project enables us high speed and cheap gas fee transfer transactions by ",(0,n.kt)("strong",{parentName:"p"},"zkwasm"),". The structure is similar to ",(0,n.kt)("strong",{parentName:"p"},"zk rollup")," but we use ",(0,n.kt)("strong",{parentName:"p"},"wasm")," as execution environment."),(0,n.kt)("h3",{id:"overview"},"Overview"),(0,n.kt)("p",null,"Through this grant, we would like to implement rollup L2 envorinment for transfer transactions powered by ",(0,n.kt)("strong",{parentName:"p"},"zkwasm"),". The ",(0,n.kt)("strong",{parentName:"p"},"zk rollup")," allows us high speed and cheap gas fee transfer transactions, and to deposit asset safely. We inherit these features and execute transfer transactions on L2 ",(0,n.kt)("strong",{parentName:"p"},"wasm")," environment, and prove the validity of state transition by zero knowledge proof.\nThe main differences from ",(0,n.kt)("strong",{parentName:"p"},"zk rollup")," are two things."),(0,n.kt)("h4",{id:"general-purpose-rollup"},"General purpose rollup"),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"zk rollup")," is application specific and it can only execute transfer transactions. Supporting ",(0,n.kt)("strong",{parentName:"p"},"wasm")," allows us to extend to other functionalities easily as in ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/privacy-scaling-explorations/zkevm-circuits"},"zkevm")," and we can reuse the circuit which proves the validity of ",(0,n.kt)("strong",{parentName:"p"},"wasm")," instruction set. By implementing all ",(0,n.kt)("strong",{parentName:"p"},"wasm")," ISA, we can finally prove every kind of state transition."),(0,n.kt)("h4",{id:"implement-verification-function-as-built-in"},"Implement verification function as built-in"),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"zk rollup")," is smart contract project. Users need to deposit their asset to smart contract on mainchain, transfer asset on chain after deposit is confirmed and withdraw asset from smart contract on mainchain. It's complicated process and needed a lot of developer workload. By implementing verification function as built-in, normal node can be L2, aggregate transfer transactions without any customizing and send it to verification on mainchain directly. This has huge usability benefit because users don't care about anything but just transfering asset as usual."),(0,n.kt)("h3",{id:"project-details"},"Project Details"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"zkwasm")," depends on ",(0,n.kt)("inlineCode",{parentName:"p"},"cryptography primitive")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"zero knowledge proof library"),"."),(0,n.kt)("h4",{id:"cryptography-primitive"},"Cryptography Primitive"),(0,n.kt)("p",null,"In ",(0,n.kt)("strong",{parentName:"p"},"zkwasm")," scheme, proof generations needs heavy workload. The prover time is latency when users send transaction and verification time is gas cost for miner. We have two approach to resolve this problem. One is the optimization and the other is outsource. We already implemented curve so we would like to optimize and extend it. We are going to implement and optimize as following."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"implement ",(0,n.kt)("inlineCode",{parentName:"li"},"RedDSA")),(0,n.kt)("li",{parentName:"ol"},"optimize jubjub curve"),(0,n.kt)("li",{parentName:"ol"},"implement client wallet")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"RedDSA")," allows us to generate one time signing key which has same signature with private key. We can outsource the computation when generating proof by generating proof generation key. There are several ways to optimize jubjub so we are going to apply it to our implementation."),(0,n.kt)("p",null,"Finally, we are going to implement client libraries."),(0,n.kt)("h4",{id:"zero-knowledge-proof-library"},"Zero Knowledge Proof Library"),(0,n.kt)("p",null,"We generate the proof to prove the validity of ",(0,n.kt)("strong",{parentName:"p"},"wasm")," execution. To prove validity of execution, we use plonk. The main strategy is that writing circuits for each ",(0,n.kt)("strong",{parentName:"p"},"wasm")," instruction set and generate the proof. The transaction can be divided into sequence of instruction set. To prove each sequence of instruction set are executed correctly, we can prove the validity of transaction. Finally, we aggregate these proof and generate one proof. Users attach it with their transaction and blockchain verify the proof. We are going to implement following libraries to realize this scheme."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"implement ",(0,n.kt)("inlineCode",{parentName:"li"},"plookup")),(0,n.kt)("li",{parentName:"ol"},"implement ",(0,n.kt)("inlineCode",{parentName:"li"},"recursive proof")),(0,n.kt)("li",{parentName:"ol"},"implement instruction set circuits")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"plookup")," allows us to reduce the complexity of instruction set by using lookup table and ",(0,n.kt)("inlineCode",{parentName:"p"},"recursive proof")," allows us to generate one proof by aggregating proof for each instruction set."),(0,n.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,n.kt)("p",null,"This ",(0,n.kt)("strong",{parentName:"p"},"zkwasm")," allows us to prove the validity of ",(0,n.kt)("strong",{parentName:"p"},"wasm")," state transition. In the future, we can extend it to general purpose rollup as in smart contract executions. This is totally compatible with ",(0,n.kt)("strong",{parentName:"p"},"wasm")," so every project work on ",(0,n.kt)("strong",{parentName:"p"},"wasm")," can use this library and rollup their transaction."),(0,n.kt)("p",null,"Our project specializes in working with Substrate and Polkadot, and if we implement cryptographic libraries and optimize these, it would be used for whole network developer."),(0,n.kt)("p",null,"I think this can be applied for XCMP to prove the validity of state transaction."),(0,n.kt)("h2",{id:"team-"},"Team \ud83d\udc65"),(0,n.kt)("h3",{id:"team-members"},"Team members"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Ash Whitehat"),(0,n.kt)("li",{parentName:"ul"},"Kirill Karbushev")),(0,n.kt)("h3",{id:"contact"},"Contact"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Contact Name:")," Invers Inc"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Contact Email:")," ",(0,n.kt)("a",{parentName:"li",href:"mailto:info@invers.tech"},"info@invers.tech")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Website:")," ",(0,n.kt)("a",{parentName:"li",href:"https://invers.tech/"},"Invers"))),(0,n.kt)("h3",{id:"legal-structure"},"Legal Structure"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Registered Address:")," 2F\u30fb3F Emblem Nishiarai, 3-33-6 Umejima, Adachi City, Tokyo-to 121-0816, Japan"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Registered Legal Entity:")," Invers Inc.")),(0,n.kt)("h3",{id:"teams-experience"},"Team's experience"),(0,n.kt)("p",null,"Our company is working on the blockchain scaling and information hiding technologies. We already delivered several grants and implemented cryptographic primitives which are compatible ",(0,n.kt)("inlineCode",{parentName:"p"},"parity-scale-codec")," as described in ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/zero-network/Grants-Program/blob/**zkwasm**-rollups-transfer/applications/**zkwasm**-rollups-transfer.md#development-status-open_book"},"Development Status"),"."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/w3f/Grants-Program/blob/master/applications/zk-rollups.md"},"zk-rollup")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/w3f/Grants-Program/blob/master/applications/zk-plonk.md"},"zk-plonk")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/w3f/Grants-Program/blob/master/applications/zero-network.md"},"zero-network"))),(0,n.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/zero-network"},"Zero Network")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/NoCtrlZ"},"Ash Whitehat")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/KiriosK"},"Kirill Karbushev"))),(0,n.kt)("h3",{id:"team-linkedin-profiles"},"Team LinkedIn Profiles"),(0,n.kt)("p",null,"We are not on LinkedIn."),(0,n.kt)("h2",{id:"development-status-"},"Development Status \ud83d\udcd6"),(0,n.kt)("p",null,"We already implemented cryptographic primitives which are compatible with ",(0,n.kt)("inlineCode",{parentName:"p"},"parity-scale-codec"),"."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/zero-network/zero/tree/master/primitive/crypto"},"zero-crypto")," ",(0,n.kt)("a",{parentName:"li",href:"https://crates.io/crates/zero-crypto"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/crates/v/zero-crypto.svg",alt:"crates.io badge"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/zero-network/zero/tree/master/primitive/jubjub"},"zero-jubjub")," ",(0,n.kt)("a",{parentName:"li",href:"https://crates.io/crates/zero-jubjub"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/crates/v/zero-jubjub.svg",alt:"crates.io badge"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/zero-network/zero/tree/master/primitive/bls12_381"},"zero-bls12-381")," ",(0,n.kt)("a",{parentName:"li",href:"https://crates.io/crates/zero-bls12-381"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/crates/v/zero-bls12-381.svg",alt:"crates.io badge"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/zero-network/zero/tree/master/primitive/elgamal"},"zero-elgamal")," ",(0,n.kt)("a",{parentName:"li",href:"https://crates.io/crates/zero-elgamal"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/crates/v/zero-elgamal.svg",alt:"crates.io badge"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/zero-network/zero/tree/master/primitive/pairing"},"zero-pairing")," ",(0,n.kt)("a",{parentName:"li",href:"https://crates.io/crates/zero-pairing"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/crates/v/zero-pairing.svg",alt:"crates.io badge"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/zero-network/dusk-plonk/tree/acffa2e0af43fdaf40c0f1e4d38b6124c57f5a05"},"zero-plonk")," ",(0,n.kt)("a",{parentName:"li",href:"https://crates.io/crates/zero-plonk"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/crates/v/zero-plonk.svg",alt:"crates.io badge"})))),(0,n.kt)("h2",{id:"development-roadmap-"},"Development Roadmap \ud83d\udd29"),(0,n.kt)("p",null,"Through this grant, we are going to implement the ",(0,n.kt)("strong",{parentName:"p"},"zkwasm")," which supports transfer transactions."),(0,n.kt)("h3",{id:"overview-1"},"Overview"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 6 months"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Full-Time Equivalent (FTE):"),"  2 FTE"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Total Costs:")," 40,000 USDT")),(0,n.kt)("h3",{id:"milestone-1--crypto-primitive"},"Milestone 1 | Crypto Primitive"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Estimated duration:")," 1.5 month"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"FTE:"),"  2"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Costs:")," 10,000 USDT")),(0,n.kt)("p",null,"In ",(0,n.kt)("inlineCode",{parentName:"p"},"Milestone 1"),", we are going to implement ",(0,n.kt)("inlineCode",{parentName:"p"},"RedDSA"),", optimize ",(0,n.kt)("inlineCode",{parentName:"p"},"Jubjub")," curve and client wallet.  These can improve usability."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,n.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,n.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"0a."),(0,n.kt)("td",{parentName:"tr",align:null},"License"),(0,n.kt)("td",{parentName:"tr",align:null},"Apache 2.0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"0b."),(0,n.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,n.kt)("td",{parentName:"tr",align:null},"We will provide both ",(0,n.kt)("inlineCode",{parentName:"td"},"inline documentation")," of the code and a ",(0,n.kt)("inlineCode",{parentName:"td"},"basic tutorial")," that explains how users use the wallet and delegate proof generation.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"0c."),(0,n.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,n.kt)("td",{parentName:"tr",align:null},"Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"0d."),(0,n.kt)("td",{parentName:"tr",align:null},"Docker"),(0,n.kt)("td",{parentName:"tr",align:null},"We will provide Dockerfiles that can be used to test all the functionality delivered with this milestone.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"0e."),(0,n.kt)("td",{parentName:"tr",align:null},"Article"),(0,n.kt)("td",{parentName:"tr",align:null},"We will publish an article/tutorial/workshop that explains")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"1."),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"RedDSA")," implementation"),(0,n.kt)("td",{parentName:"tr",align:null},"We are going to implement ",(0,n.kt)("inlineCode",{parentName:"td"},"RedDSA"),". ",(0,n.kt)("inlineCode",{parentName:"td"},"RedDSA")," implementation allows us to generate one time signing key to encrypt zero knowledge proof witness. One time signing key doesn't have permission to transfer asset. The specification is aligned with zcash ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/zcash/zips/blob/main/protocol/sapling.pdf"},"sapling 5.4.6"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"2."),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"Jubjub")," curve optimization"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"Jubjub")," curve optimization allows us to perform elliptic curve arithmetic quickly. In our scheme, zero-knowledge prover time is latency when users send transaction and verification time is gas cost on chain. Specifically, we implement ",(0,n.kt)("a",{parentName:"td",href:"https://iacr.org/archive/asiacrypt2008/53500329/53500329.pdf"},"Twisted Edwards Curves Revisited"),", ",(0,n.kt)("a",{parentName:"td",href:"https://eprint.iacr.org/2014/1014.pdf"},"Jacobian Coordinates")," and ",(0,n.kt)("a",{parentName:"td",href:"https://www.scitepress.org/papers/2014/50587/50587.pdf"},"wNAF"),", ",(0,n.kt)("a",{parentName:"td",href:"https://cr.yp.to/papers/pippenger.pdf"},"pippenger"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"3."),(0,n.kt)("td",{parentName:"tr",align:null},"Client wallet implementation"),(0,n.kt)("td",{parentName:"tr",align:null},"We are going to implement client wallet of ",(0,n.kt)("inlineCode",{parentName:"td"},"RedDSA"),". With this wallet, user can generate private key and one time signing key, and delegate their proof generation, in addition to normal wallet functionalities through RPC.")))),(0,n.kt)("h3",{id:"milestone-2--plonk-extension"},"Milestone 2 | Plonk Extension"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Estimated duration:")," 1.5 month"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"FTE:"),"  2"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Costs:")," 10,000 USDT")),(0,n.kt)("p",null,"In ",(0,n.kt)("inlineCode",{parentName:"p"},"Milestone 2"),", we are going to implement ",(0,n.kt)("inlineCode",{parentName:"p"},"plookup")," and recursion on top of ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/zero-network/dusk-plonk"},"plonk"),". These can improve the performance and prove the validity of several circuits separatelly."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,n.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,n.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"0a."),(0,n.kt)("td",{parentName:"tr",align:null},"License"),(0,n.kt)("td",{parentName:"tr",align:null},"Apache 2.0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"0b."),(0,n.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,n.kt)("td",{parentName:"tr",align:null},"We will provide both ",(0,n.kt)("inlineCode",{parentName:"td"},"inline documentation")," of the code and a ",(0,n.kt)("inlineCode",{parentName:"td"},"basic tutorial")," that explains how users implement ",(0,n.kt)("inlineCode",{parentName:"td"},"plookup")," circuit and aggregate proofs.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"0c."),(0,n.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,n.kt)("td",{parentName:"tr",align:null},"Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"0d."),(0,n.kt)("td",{parentName:"tr",align:null},"Docker"),(0,n.kt)("td",{parentName:"tr",align:null},"We will provide Dockerfiles that can be used to test all the functionality delivered with this milestone.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"0e."),(0,n.kt)("td",{parentName:"tr",align:null},"Article"),(0,n.kt)("td",{parentName:"tr",align:null},"We will publish an article/tutorial/workshop that explains")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"1."),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"plookup")," implementation"),(0,n.kt)("td",{parentName:"tr",align:null},"We are going to implement ",(0,n.kt)("inlineCode",{parentName:"td"},"plookup")," to our ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/zero-network/dusk-plonk"},"plonk"),". ",(0,n.kt)("inlineCode",{parentName:"td"},"plookup")," allows us to use precomputed lookup table in zero knowledge circuit and reduce complexity of circuit.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"2."),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"recursive proof")," implementation"),(0,n.kt)("td",{parentName:"tr",align:null},"We are going to implement ",(0,n.kt)("inlineCode",{parentName:"td"},"recursive proof")," to our ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/zero-network/dusk-plonk"},"plonk"),". ",(0,n.kt)("inlineCode",{parentName:"td"},"recursive proof")," allows us to generate aggregation circuit and bundle ",(0,n.kt)("strong",{parentName:"td"},"wasm")," ISA proofs to one.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"3."),(0,n.kt)("td",{parentName:"tr",align:null},"circuit implementation"),(0,n.kt)("td",{parentName:"tr",align:null},"We are going to implement zero knowledge circuit which supports combination of ",(0,n.kt)("inlineCode",{parentName:"td"},"plookup")," and ",(0,n.kt)("inlineCode",{parentName:"td"},"recursive proof"),". This circuit allows us to implement the circuit for ",(0,n.kt)("strong",{parentName:"td"},"zkwasm"),".")))),(0,n.kt)("h3",{id:"milestone-3--zk-wasm-transfer-prover-and-verifier"},"Milestone 3 | Zk Wasm Transfer Prover and Verifier"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Estimated duration:")," 1.5 month"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"FTE:"),"  2"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Costs:")," 10,000 USDT")),(0,n.kt)("p",null,"In ",(0,n.kt)("inlineCode",{parentName:"p"},"Milestone 3"),", we are going to implement ",(0,n.kt)("inlineCode",{parentName:"p"},"plookup")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"recursive proof")," on top of ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/zero-network/dusk-plonk"},"plonk"),". These can improve the performance and prove the validity of several circuits separatelly."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,n.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,n.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"0a."),(0,n.kt)("td",{parentName:"tr",align:null},"License"),(0,n.kt)("td",{parentName:"tr",align:null},"Apache 2.0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"0b."),(0,n.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,n.kt)("td",{parentName:"tr",align:null},"We will provide both ",(0,n.kt)("inlineCode",{parentName:"td"},"inline documentation")," of the code and a ",(0,n.kt)("inlineCode",{parentName:"td"},"basic tutorial")," that explains how users prove the validity of ",(0,n.kt)("strong",{parentName:"td"},"wasm")," ISA execution.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"0c."),(0,n.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,n.kt)("td",{parentName:"tr",align:null},"Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"0d."),(0,n.kt)("td",{parentName:"tr",align:null},"Docker"),(0,n.kt)("td",{parentName:"tr",align:null},"We will provide Dockerfiles that can be used to test all the functionality delivered with this milestone.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"0e."),(0,n.kt)("td",{parentName:"tr",align:null},"Article"),(0,n.kt)("td",{parentName:"tr",align:null},"We will publish an article/tutorial/workshop that explains")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"1."),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"wasm")," circuit implementation"),(0,n.kt)("td",{parentName:"tr",align:null},"We are going to implement zero knowledge circuit for ",(0,n.kt)("strong",{parentName:"td"},"wasm")," ISA. The transfer transaction consists of ",(0,n.kt)("strong",{parentName:"td"},"wasm")," ISA. We divide it into read and write access to each resource and prove with ",(0,n.kt)("inlineCode",{parentName:"td"},"plookup")," and ",(0,n.kt)("inlineCode",{parentName:"td"},"recursive proof"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"2."),(0,n.kt)("td",{parentName:"tr",align:null},"proof generator implementation"),(0,n.kt)("td",{parentName:"tr",align:null},"We are going to implement proof generator which generates the proof for ",(0,n.kt)("strong",{parentName:"td"},"wasm")," ISA. The input is execution trace of ",(0,n.kt)("strong",{parentName:"td"},"wasm")," ISA and output is zero knowledge proof. This is implemented on off-chain.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"3."),(0,n.kt)("td",{parentName:"tr",align:null},"proof verification implementation"),(0,n.kt)("td",{parentName:"tr",align:null},"We are going to implement proof verification function which verifies the proof. This is implemented on on-chain.")))),(0,n.kt)("h3",{id:"milestone-4--zk-wasm-transfer-rollup-node"},"Milestone 4 | Zk Wasm Transfer Rollup Node"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Estimated duration:")," 1.5 month"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"FTE:"),"  2"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Costs:")," 10,000 USDT")),(0,n.kt)("p",null,"In ",(0,n.kt)("inlineCode",{parentName:"p"},"Milestone 4"),", we are going to implement rollup node. This can aggregate transfer transactions and generate proof."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,n.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,n.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"0a."),(0,n.kt)("td",{parentName:"tr",align:null},"License"),(0,n.kt)("td",{parentName:"tr",align:null},"Apache 2.0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"0b."),(0,n.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,n.kt)("td",{parentName:"tr",align:null},"We will provide both ",(0,n.kt)("inlineCode",{parentName:"td"},"inline documentation")," of the code and a ",(0,n.kt)("inlineCode",{parentName:"td"},"basic tutorial")," that explains how users setup the node and send transfer transactions.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"0c."),(0,n.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,n.kt)("td",{parentName:"tr",align:null},"Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"0d."),(0,n.kt)("td",{parentName:"tr",align:null},"Docker"),(0,n.kt)("td",{parentName:"tr",align:null},"We will provide Dockerfiles that can be used to test all the functionality delivered with this milestone.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"0e."),(0,n.kt)("td",{parentName:"tr",align:null},"Article"),(0,n.kt)("td",{parentName:"tr",align:null},"We will publish an article/tutorial/workshop that explains")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"1."),(0,n.kt)("td",{parentName:"tr",align:null},"rollup node implementation"),(0,n.kt)("td",{parentName:"tr",align:null},"We are going to implement rollup node. This allows to setup the execution environment of L2 transfer transactions, generate the proof and commit the state to mainchain.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"2."),(0,n.kt)("td",{parentName:"tr",align:null},"client transactor implementation"),(0,n.kt)("td",{parentName:"tr",align:null},"We are going to implement client library to request transfer transactions to rollup node. This is the combination of Redsa wallet and proof generator.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"3."),(0,n.kt)("td",{parentName:"tr",align:null},"integrate network"),(0,n.kt)("td",{parentName:"tr",align:null},"We are going to integrate network. There are four actor mainchain, rollup node and transactor, prover. The transactor generates the transaction and delegate proof generation to prover. The prover generates proof and send it back to transactor. The transactor send transaction to rollup node. The rollup node aggregates these transaction and commit the state to mainchain.")))),(0,n.kt)("h2",{id:"future-plans"},"Future Plans"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Fully zkwasm rollup"),(0,n.kt)("li",{parentName:"ul"},"Proof for XCMP"),(0,n.kt)("li",{parentName:"ul"},"FHE"),(0,n.kt)("li",{parentName:"ul"},"Verifiable hardware")),(0,n.kt)("h2",{id:"additional-information-"},"Additional Information \u2795"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"How did you hear about the Grants Program?",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Announcement by another team"))),(0,n.kt)("li",{parentName:"ul"},"Work you have already done.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://crates.io/crates/zero-crypto"},"zero-crypto")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://crates.io/crates/zero-jubjub"},"zero-jubjub")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://crates.io/crates/zero-bls12-381"},"zero-bls12-381")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://crates.io/crates/zero-elgamal"},"zero-elgamal")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://crates.io/crates/zero-pairing"},"zero-pairing")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://crates.io/crates/zero-plonk"},"zero-plonk")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/zero-network/zero/tree/master/pallets/plonk"},"pallet-plonk")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/zero-network/zero/tree/master/pallets/encrypted_balance"},"pallet-encrypted-balance")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/zero-network/zero/tree/master/pallets/confidential_transfer"},"pallet-confidential-transfer")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://zero-network.github.io/zero/"},"above documentation")))),(0,n.kt)("li",{parentName:"ul"},"Wheter there are any other teams who have already contributed (financially) to the project.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"No."))),(0,n.kt)("li",{parentName:"ul"},"Previous grants you may have applied for.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/w3f/Grants-Program/blob/master/applications/zk-rollups.md"},"zk-rollup")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/w3f/Grants-Program/blob/master/applications/zk-plonk.md"},"zk-plonk")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/w3f/Grants-Program/blob/master/applications/zero-network.md"},"zero-network"))))))}k.isMDXComponent=!0}}]);