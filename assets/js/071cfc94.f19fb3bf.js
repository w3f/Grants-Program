"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[3739],{77551:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var n=a(87462),i=(a(67294),a(3905));a(95657);const r={},s="Sunshine Keybase",l={unversionedId:"applications/sunshine-keybase",id:"applications/sunshine-keybase",title:"Sunshine Keybase",description:"Proposer:* 4meta5",source:"@site/applications/sunshine-keybase.md",sourceDirName:"applications",slug:"/applications/sunshine-keybase",permalink:"/Grants-Program/applications/sunshine-keybase",draft:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/applications/sunshine-keybase.md",tags:[],version:"current",frontMatter:{}},o={},u=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Chain Pallet",id:"chain-pallet",level:4},{value:"Keybase Pallet",id:"keybase-pallet",level:4},{value:"Flutter Android UI",id:"flutter-android-ui",level:4},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-",level:2},{value:"Team members",id:"team-members",level:3},{value:"Team Website",id:"team-website",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-",level:2},{value:"Milestone 1 \u2014 Sunshine-Keybase + UI",id:"milestone-1--sunshine-keybase--ui",level:3},{value:"Community engagement",id:"community-engagement",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Past Work",id:"past-work",level:2}],p={toc:u},h="wrapper";function d(e){let{components:t,...a}=e;return(0,i.kt)(h,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"sunshine-keybase"},"Sunshine Keybase"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Proposer:")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/4meta5"},(0,i.kt)("inlineCode",{parentName:"a"},"4meta5"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Payment Address:")," 16uCivZhPAy4RiK5ZA1TEMo6Xq5pGTh4BA")),(0,i.kt)("h2",{id:"project-overview-"},"Project Overview \ud83d\udcc4"),(0,i.kt)("h3",{id:"overview"},"Overview"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/sunshine-protocol/sunshine-keybase"},(0,i.kt)("inlineCode",{parentName:"a"},"sunshine-keybase"))," implements ",(0,i.kt)("a",{parentName:"p",href:"https://book.keybase.io/docs/crypto/local-key-security"},"Keybase's Local Key Security")," to associate a set of keys with a ",(0,i.kt)("inlineCode",{parentName:"p"},"UID")," and manage this set of keys to sign and authenticate messages on the user's behalf. The implementation uses a Substrate runtime to enforce the rules of interaction with the keystore, especially as it pertains to revoking keys for a provisioned storage device."),(0,i.kt)("p",null,"The project provides a usable keystore for ",(0,i.kt)("a",{parentName:"p",href:"https://martin.kleppmann.com/papers/local-first.pdf"},"local first")," applications using ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate"},"substrate"),". The ",(0,i.kt)("inlineCode",{parentName:"p"},"sunshine-identity")," pallet provides structure to control a set of keys with a ",(0,i.kt)("inlineCode",{parentName:"p"},"UID")," and track storage metadata associated with the given ",(0,i.kt)("inlineCode",{parentName:"p"},"UID"),". The client uses ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ipfs-rust/ipfs-embed"},(0,i.kt)("inlineCode",{parentName:"a"},"ipfs-embed"))," to store sensitive data offchain and encrypted on the local hardware. The ",(0,i.kt)("inlineCode",{parentName:"p"},"sunshine-chain")," pallet uses the same stack to coordinate storage of chain data amongst a closed set of clients."),(0,i.kt)("p",null,"We believe ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/sunshine-protocol/sunshine-keybase"},(0,i.kt)("inlineCode",{parentName:"a"},"sunshine-keybase"))," provides a reusable identity architecture for other projects in the Web3 space. Moreover, the ",(0,i.kt)("inlineCode",{parentName:"p"},"sunshine-chain")," client and pallet demonstrate minimal design to set and enforce the storage of offchain data among a permissioned set of clients. This infrastructure will prove useful to substrate projects that need to coordinate and enforce private network storage of data offchain."),(0,i.kt)("h3",{id:"project-details"},"Project Details"),(0,i.kt)("p",null,"The project includes two pallets and a Flutter UI for Android."),(0,i.kt)("h4",{id:"chain-pallet"},"Chain Pallet"),(0,i.kt)("p",null,"The chain module is a reusable abstraction for building private proof of authority chains using ipfs and using substrate to provide authorization and consensus on the current head of the chain. When authoring a block on ipfs a race condition can occur. Due to substrate providing a total order of transactions only one transaction will succeed in updating the head of the chain, the other client will create a new block on the head of the chain and retry the failed operation."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://draftin.com:443/images/75511?token=ptiW5ycSDqtNQbpH3I24_9YXQQgh2YmbFtDSIT16ZBVaHVtRgQJBeMGmk94Yo3sVGjqJKj86iTmj9y9k6AF2Ujo",alt:"chain_module.svg"})," "),(0,i.kt)("h4",{id:"keybase-pallet"},"Keybase Pallet"),(0,i.kt)("p",null,"The keybase identity module manages the user's chain that stores the user key, device keys, password and social media accounts using the sunshine chain pallet. Private data shared between devices is encrypted with the user private key. When a new device is provisioned a key is generated locally on the device, and a provisioning protocol is used to communicate between the new device and the provisioning device."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://draftin.com:443/images/75515?token=ZVIuml8B13k3idkoLujuomRsDbSbgUGtzweL7qwj_HNDX8TYlq1iegqpvEnjVjddVdDdle57KVdD7MI7OJES5c8",alt:"keybase-module.svg"})," "),(0,i.kt)("p",null,"Password changes are stored encrypted in the user chain. When a device receives a block with a password change it reencrypts it's local device key using the new password. This ensures that the user only needs to remember one password."),(0,i.kt)("p",null,"Social media accounts are linked to a chain account, by submitting a proof in the social media profile and on the user's chain. Other users can find the on chain account on the social media page and verify that they are both controlled by the same cryptographic identity. This allows us to use github usernames as aliases without compromising the decentralized nature or security that blockchains provide. While resolving the social media account to an on chain identity requires the service to be online, already resolved identities are stored locally. This means that even if github is offline, transfers to already verified github accounts can be performed."),(0,i.kt)("h4",{id:"flutter-android-ui"},"Flutter Android UI"),(0,i.kt)("p",null,"The Flutter UI allows Android users to initialize a local keystore and device identity using the ",(0,i.kt)("inlineCode",{parentName:"p"},"sunshine-identity")," pallet. It allows the user to initialize the keystore, set a passphrase, and change the passphrase. The UI also allows the user to paste links to github gists to prove ownership of github accounts."),(0,i.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,i.kt)("p",null,"There are other approaches to creating an identity graph, but we have yet to find another substrate project that implements device-oriented key revocability. The native keystore leverages ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ipfs-rust/ipfs-embed"},(0,i.kt)("inlineCode",{parentName:"a"},"ipfs-embed"))," to store sensitive data in an encrypted form on the local hardware. Over time, we expect ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ipfs-rust/ipfs-embed"},(0,i.kt)("inlineCode",{parentName:"a"},"ipfs-embed"))," to evolve with the needs and requirements of users. "),(0,i.kt)("p",null,"The current design coordinates the storage of private offchain data on permissioned client networks. Our project will use this identity infrastructure for sharing encrypted messages and backing up encrypted files, privately and within teams with membership tracked transparently on-chain."),(0,i.kt)("h2",{id:"team-"},"Team \ud83d\udc65"),(0,i.kt)("h3",{id:"team-members"},"Team members"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/4meta5"},"Amar Singh")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/dvc94ch"},"David Craven")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/shekohex"},"Shady Khalifa"))),(0,i.kt)("h3",{id:"team-website"},"Team Website"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://sunshine.foundation"},"https://sunshine.foundation"))),(0,i.kt)("h3",{id:"legal-structure"},"Legal Structure"),(0,i.kt)("p",null,"Sunshine Systems LLC"),(0,i.kt)("p",null,"16192 Coastal Highway, Lewes, Delaware 19958, County of Sussex"),(0,i.kt)("h3",{id:"teams-experience"},"Team's experience"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/4meta5"},"Amar")," started and maintained the ",(0,i.kt)("a",{parentName:"p",href:"https://substrate.dev/recipes/"},"Substrate Recipes")," as an employee at Parity. He wrote the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/sunshine-protocol/sunshine-bounty"},(0,i.kt)("inlineCode",{parentName:"a"},"sunshine-bounty"))," runtime, node, client, and CLI under Sunshine's first grant. He is an experienced substrate runtime developer."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/dvc94ch"},"David")," worked on substrate core development as an employee at Parity. He is the lead maintainer of ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ipfs-rust/ipfs-embed"},(0,i.kt)("inlineCode",{parentName:"a"},"ipfs-embed"))," and contributes upstream often to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate-subxt/"},(0,i.kt)("inlineCode",{parentName:"a"},"substrate-subxt"))," to meet Sunshine's Rust client requirements."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/shekohex"},"Shady")," is an experienced Typescript, Flutter, and Rust developer with contributions to many open source projects (i.e. ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/nestjsx/nest-access-control/graphs/contributors"},(0,i.kt)("inlineCode",{parentName:"a"},"nest-access-control")),"). He is a pioneer in Rust-Dart FFI development with generic components released alongside his work on the Sunshine Flutter infrastructure i.e. ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/shekohex/flutterust"},(0,i.kt)("inlineCode",{parentName:"a"},"flutterust")),"."),(0,i.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/sunshine-protocol"},"sunshine-protocol")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/ipfs-rust"},"ipfs-rust")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/shekohex/flutterust"},"flutterust"))),(0,i.kt)("h2",{id:"development-roadmap-"},"Development Roadmap \ud83d\udd29"),(0,i.kt)("p",null,"There is only one milestone."),(0,i.kt)("h3",{id:"milestone-1--sunshine-keybase--ui"},"Milestone 1 \u2014 Sunshine-Keybase + UI"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Estimated Duration:")," 6 weeks"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"FTE:"),"  2"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Costs:")," 1.5 BTC")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Number"),(0,i.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,i.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"0a."),(0,i.kt)("td",{parentName:"tr",align:null},"License"),(0,i.kt)("td",{parentName:"tr",align:null},"Unlicense")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"0b."),(0,i.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,i.kt)("td",{parentName:"tr",align:null},"We will provide both inline documentation of the code and a basic tutorial that shows how to run the local dev node alongside the Flutter UI to register and manage a sunshine-identity on a local network.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"0c."),(0,i.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,i.kt)("td",{parentName:"tr",align:null},"The client will have substrate-subxt integration tests that verify behavior at the network level to ensure functionality and robustness. In the guide, we will describe how to run these tests.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1."),(0,i.kt)("td",{parentName:"tr",align:null},"Substrate module: Chain"),(0,i.kt)("td",{parentName:"tr",align:null},"We will create a pallet that allows a closed set of signers to build private proof of authority chains using ipfs and substrate. These chains consists of private data shared among the closed set.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"2."),(0,i.kt)("td",{parentName:"tr",align:null},"Substrate module: Identity"),(0,i.kt)("td",{parentName:"tr",align:null},"We will create a pallet that uses the Chain module to manage data relevant to the registered identity. This module adds more granular management when storing the user key, device keys, password and social media accounts.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"3."),(0,i.kt)("td",{parentName:"tr",align:null},"Flutter UI"),(0,i.kt)("td",{parentName:"tr",align:null},"We will write a Flutter UI that communicates directly between our Rust substrate-subxt client and our Flutter interface to express the user identity configuration interface.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"4."),(0,i.kt)("td",{parentName:"tr",align:null},"Substrate chain"),(0,i.kt)("td",{parentName:"tr",align:null},"Flutter UI works with local node to enable identity registration, password reset, and github authentication.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"5."),(0,i.kt)("td",{parentName:"tr",align:null},"Docker"),(0,i.kt)("td",{parentName:"tr",align:null},"We will provide a dockerfile to demonstrate the full functionality of our chain")))),(0,i.kt)("h3",{id:"community-engagement"},"Community engagement"),(0,i.kt)("p",null,"We will publish an article on ",(0,i.kt)("inlineCode",{parentName:"p"},"dev.to")," upon completion."),(0,i.kt)("h2",{id:"future-plans"},"Future Plans"),(0,i.kt)("p",null,"Sunshine Chain will launch in Q1 2021. We are continuing to build infrastructure that is useful for the interchain community as well as other individual substrate chains. "),(0,i.kt)("h2",{id:"past-work"},"Past Work"),(0,i.kt)("p",null,"We wrote a ",(0,i.kt)("a",{parentName:"p",href:"https://meta5.world/posts/ysunshine"},"blog post")," listing open source contributions funded by our first Web3 grant. Highlights include"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"7 governance pallets, configured into a runtime and node to express a Substrate DAO Chain"),(0,i.kt)("li",{parentName:"ul"},"Rust client and CLI for interacting with the node"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/paritytech/substrate-subxt/"},(0,i.kt)("inlineCode",{parentName:"a"},"substrate-subxt"))," contributions to support native Rust clients and light clients (w/ 2 Parity projects now using substrate-subxt for this purpose -- ledgeracio, cargo contract)"),(0,i.kt)("li",{parentName:"ul"},"Rust client which uses ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/ipfs-rust/ipfs-embed"},(0,i.kt)("inlineCode",{parentName:"a"},"ipfs-embed"))," for storage of data not necessary for Substrate runtime storage",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"including tooling around ",(0,i.kt)("inlineCode",{parentName:"li"},"ipfs-embed")," to facilitate error handling and improve the overall API"))),(0,i.kt)("li",{parentName:"ul"},"Rust-Dart FFI to call Rust client code from Flutter Dart User Interface",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"with intermediate infrastructure open sourced for the wider Rust and Flutter ecosystems"),(0,i.kt)("li",{parentName:"ul"},"native keystore supports modern key management i.e. key rotation")))))}d.isMDXComponent=!0}}]);