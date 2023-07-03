"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[27623],{46596:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>n,metadata:()=>l,toc:()=>p});var o=a(87462),r=(a(67294),a(3905));a(8209);const n={},i="Choko Wallet",l={unversionedId:"applications/choko_wallet",id:"applications/choko_wallet",title:"Choko Wallet",description:"This document will be part of the terms and conditions of your agreement and therefore needs to contain all the required information about the project. Don't remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with a > (such as this one) can be removed.",source:"@site/applications/choko_wallet.md",sourceDirName:"applications",slug:"/applications/choko_wallet",permalink:"/applications/choko_wallet",draft:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/applications/choko_wallet.md",tags:[],version:"current",frontMatter:{}},s={},p=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Development Status \ud83d\udcd6",id:"development-status-",level:2},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1",id:"milestone-1",level:3},{value:"Future Plans",id:"future-plans",level:2}],c={toc:p},d="wrapper";function h(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,o.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"choko-wallet"},"Choko Wallet"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This document will be part of the terms and conditions of your agreement and therefore needs to contain all the required information about the project. Don't remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with a ",(0,r.kt)("inlineCode",{parentName:"p"},">")," (such as this one) can be removed."),(0,r.kt)("p",{parentName:"blockquote"},"See the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/w3f/Grants-Program/#pencil-process"},"Grants Program Process")," on how to submit a proposal.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Team Name:")," SkyeKiwi Team"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Payment Address:")," 0x91029aBEb484a84D99c1C519C7A8A0cDB6B7c878 (USDC Preferred OR DAI)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/w3f/Grants-Program/tree/master#level_slider-levels"},"Level"),":")," 3")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f ",(0,r.kt)("em",{parentName:"p"},"The combination of your GitHub account submitting the application and the payment address above will be your unique identifier during the program. Please keep them safe."))),(0,r.kt)("h2",{id:"project-overview-"},"Project Overview \ud83d\udcc4"),(0,r.kt)("p",null,"Choko Wallet is a user-friendly multi-chain crypto wallet for the Polkadot ecosystem. The Polkadot ecosystem has been known for its complicated nature to interact with."),(0,r.kt)("h3",{id:"overview"},"Overview"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'Like all crypto wallets, fund privacy and ease of use are usually two sides of a spectreum. Choko Wallet will be more lean towards the "ease of use" side and remain to be (99%) static web app.')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Unlike most of the crypto wallets, Choko wallet is designed to be website-based which stores user private key encrypted on website localStorage. When DApps request for signature, the Dapp will redirect to the Choko Wallet web app and ask for user approval. Upon finish, the wallet web app will redirect back to the Dapp.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The most confusion part of the Polkadot ecosystem for new comers is the amount of blockchains there are. The PolkadotJs App (dotapps.io) allow different teams to assign different theme color to their blockchain that greatly reduce confusion. Wallets in the Polkadot ecosystem should follow the same paradigm. Moreover, we should offload the burden for the end users to choose which blockchain back to Dapp developer so that the user can connect to the desired blockchain endpoint with zero configuration.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Another issue with all wallets is the lacking of good encryption/decryption features with the user's private key. (i.e. ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/polkadot-js/common/pull/1331"},"https://github.com/polkadot-js/common/pull/1331"),") This feature is critical when Web3 is more privacy centric. It has been hard to be built because of different elliptic curve and encryption schema. We will make attempt to first adopt to the schema used by our own SkyeKiwi Network and try to generize it later."))),(0,r.kt)("h3",{id:"project-details"},"Project Details"),(0,r.kt)("p",null,"Technology Stack: (Almost) static Web App built with React/Redux and PolkadotJs."),(0,r.kt)("p",null,"A PoC on the redirecting mechnisim is available ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/RoyTimes/wallet-sandbox-demo"},"here"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Setup on Another Device via QR: generate a QR code that displays a ",(0,r.kt)("em",{parentName:"p"},"plaintext")," of the seed phrase and scan it on another device. Similar to Metamask.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Email Recovery/Create Via Email: have a centralized service to send an email to the user with a link that contains ",(0,r.kt)("em",{parentName:"p"},"plaintext"),' of the seed phrase to recover the seed phrase (i.e. Email saying "Please keep this email for recovery of your wallet. Click link: ',(0,r.kt)("a",{parentName:"p",href:"https://choko.app/recovery?11111aaaaaaa"},"https://choko.app/recovery?11111aaaaaaa"),'...... "). A banner with warning should be presented when the user has more than $50 in the wallet.  ')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'"Linkdrop": a feature inspired by other ecosystems. A Dapp developer might initialize a Linkdrop vault of some tokens as gas fee for their seed users. (i.e. Having 10 DOT for the first 100 signup users). A pallet might be required, so we will build a pallet on SkyeKiwi Network first to test things out. The wallet will provide the developer with a simple interface to generate a linkdrop vault and generate a linkdrop link. (i.e. ',(0,r.kt)("a",{parentName:"p",href:"https://choko.app/claim?vault=1&authorization=0x8dad7777"},"https://choko.app/claim?vault=1&authorization=0x8dad7777"),'..."). The developer can distribute the link drop link to users. When a user click the link, it will guide the user to create a new seed phrase and then have the gas fee token deposited to the wallet.')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Encryption/Decryption: A few solutions avaliable: 1. allow encryption/decryption on Sr25519 key agreement. Drawback would be that the composed message would be hard to process outside the wallet. 2. Find a method to calculate a Curve25519 public key from a Sr25519 public key. We are not hardcore cryptographer and has no intention of implementing this ourselves. Looking for a more expertised answer to whether this is possible or if there is an implementation to it. Such conversion would greatly increase compatbility with popular Curve25519 based encryption softwares. 3. Worst case senario: ask users to register a Curve25519 public key on account creation. This is horrible but allow the encryption schema to be further compatible with other ECs like secp256k1. Would love to have a discussion on this.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Request Handling: there will be two types of requests - local requests that should be resolved inside the Dapps and remote requests that need to be redirected to the wallet web app. For usual wallets, this is somewhat implicitly assumed (like Web3js and Metamask). However, for a website based wallets, these two types of requests need to be dramatically different to be handled to prevent constant website redirecting. Moreover, in lack of proper RPC between DApp and browser extensions, requests and response payloads are encoded in the URL with plaintext. Therefore, in response to all these differences, we will create a set of bytes precises encoding schema and segregated request handling strategies. The wallet app will only handle requests that require the usage of user's private keys and do no load the private key unless a password is authenticated. Check out PoC implementations here ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/choko-wallet/sdk/blob/master/packages/request-handler/src/signMessage.ts"},"Link"),"."))),(0,r.kt)("p",null,"Mockups:\n",(0,r.kt)("a",{parentName:"p",href:"https://imgtu.com/i/jYkTaT"},(0,r.kt)("img",{parentName:"a",src:"https://s1.ax1x.com/2022/07/04/jYkTaT.png",alt:"jYkTaT.png"})),"\n",(0,r.kt)("a",{parentName:"p",href:"https://imgtu.com/i/jYkLRJ"},(0,r.kt)("img",{parentName:"a",src:"https://s1.ax1x.com/2022/07/04/jYkLRJ.png",alt:"jYkLRJ.png"}))),(0,r.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Choko Wallet provides a simple and intuitive interface for user to interact with blockchains/Dapps in the Polkadot ecosystem."),(0,r.kt)("li",{parentName:"ul"},"End users who are less-educated about the Polkadot ecosystem or blockchain/crypto in general.")),(0,r.kt)("h2",{id:"team-"},"Team \ud83d\udc65"),(0,r.kt)("h3",{id:"team-members"},"Team members"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Song Zhou"),(0,r.kt)("li",{parentName:"ul"},"Zoe Sun"),(0,r.kt)("li",{parentName:"ul"},"Fontend Developer team at SkyeKiwi")),(0,r.kt)("h3",{id:"contact"},"Contact"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Contact Name:")," Song Zhou"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Contact Email:")," ",(0,r.kt)("a",{parentName:"li",href:"mailto:song.zhou@skye.kiwi"},"song.zhou@skye.kiwi")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Website:")," ",(0,r.kt)("a",{parentName:"li",href:"https://skye.kiwi"},"https://skye.kiwi"))),(0,r.kt)("h3",{id:"legal-structure"},"Legal Structure"),(0,r.kt)("p",null,"None"),(0,r.kt)("h3",{id:"teams-experience"},"Team's experience"),(0,r.kt)("p",null,"We have applied and deliverd all milestones of the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/w3f/Grants-Program/pull/553"},"SkyeKiwi Protocol")," and built the SkyeKiwi Network based on SkyeKiwi Protocol as a privacy layer for Web3 featuring interoprabl, multi-shard, multi-vm private smart contract execution as a part of the Substrate Builder Program. We have a track record of engineering complicated system with high quality. The Choko Wallet is a critical component for the adoption of the SkyeKiwi Network (and the SkyeKiwi Protocol), from the encryption/decryption functionalities of the network. More discussed in future plan section."),(0,r.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/skyekiwi/skyekiwi-network"},"https://github.com/skyekiwi/skyekiwi-network")," - Main repo for the SkyeKiwi Network")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/skyekiwi/skyekiwi-protocol"},"https://github.com/skyekiwi/skyekiwi-protocol")," - TypeScript implementation of the SkyeKiwi Protocol")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/skyekiwi/kiwi-contract"},"https://github.com/skyekiwi/kiwi-contract")," - Smart contract toolkit for submitting smart contract on SkyeKiwi Network. ",(0,r.kt)("a",{parentName:"p",href:"https://docs.skye.kiwi/docs/quick-start/deploy"},"Tutorial")))),(0,r.kt)("h2",{id:"development-status-"},"Development Status \ud83d\udcd6"),(0,r.kt)("p",null,"The project is mostly front-end work, except for the mechism for cross-browser tab communication from the Dapp and wallet. Therefore, so far, we have only created a simple sandbox to demostrate the viability of such communication ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/RoyTimes/wallet-sandbox-demo"},"here"),"."),(0,r.kt)("p",null,"Moreover, the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/near/near-wallet"},"Near Wallet")," (an Apache2.0 or MIT licensed open source software) seem to be a good base of development for Choko Wallet. We will fork the repo and do a complete overhaul to better fit the needs of the Polkadot ecosystem."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Update on August 2\non Near Wallet: after a month long dig into the Near Wallet codebase, we recognize the following issues that prevent us to build upon the Near Wallet but instead, start a new codebase of the Web App from scratch:"),(0,r.kt)("ol",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ol"},"Chaotic state management: the Near Wallet has very tangled state management for requests and responese. As it will be more efficient to build the underlying redux dataflow from scratch."),(0,r.kt)("li",{parentName:"ol"},'Different account system and different cryptographics: the NEAR blockchain uses Ed25519 for pretty much everything, while on Substrate, Sr25519 is used in default but there can be all kinds of cryptographic used in the Polkadot ecosystem. (i.e. Moonbeam). Moreover, NEAR is based on a human-readable fake AccountId that links to several cryptographic "keys" for accounts. These are factors that contribute to point 1 of why the Near wallet codebase has such a complicated Redux dataflow.'),(0,r.kt)("li",{parentName:"ol"},'Loose Encoding on URL: as we stated above on "Requst Handling", we will build a byte percise(and efficient) version of the encoding to be sent between Dapp and Wallet as Substrate extrinsics can be very long on cross-chain communicattions.'),(0,r.kt)("li",{parentName:"ol"},"Decentralziation: lots of functionalities of Near wallet relies on a closed-source centralied helper service. We don't want that."),(0,r.kt)("li",{parentName:"ol"},"Extensibility: the network RPC is hardcoded into NEAR. Choko Wallets need to support a wide range of networks, while we will allow networks to customize their own request handling mechnisim, while have a set of functionalities by default. Such design will require weeks to peel off wallet logics away from the near codebase."),(0,r.kt)("li",{parentName:"ol"},'Security: the near wallet does not require a user input password to safeguard the seed phrase. This can be considered "kind of" secure because of the AccountId system of Near(i.e. Keys are ephermeral, while a human readable AccountId like "alex.near" is presistent). However, this is not applicable to the Polkadot ecosystem. To change so, we would also have to completely peel away the private key management logic from the near codebase.'),(0,r.kt)("li",{parentName:"ol"},"Frontend Framework: we decided to go with Next+Tailwind+Redux+TypeScript combo with good lint/test/build pipeline for better maintainablity. And avoid the messy codebase as the Near Wallet."))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/choko-wallet/sdk/tree/master/packages/core/src"},"LINK ",(0,r.kt)("inlineCode",{parentName:"a"},"@choko-wallet/core"))," for all primitives to the wallet like cross-chain ",(0,r.kt)("inlineCode",{parentName:"p"},"DAppDescriptor"),", cross-chain ",(0,r.kt)("inlineCode",{parentName:"p"},"UserAccount")," that can be locked and typed with different cryptographic types etc."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/choko-wallet/sdk/tree/master/packages/known-networks/src"},"LINK ",(0,r.kt)("inlineCode",{parentName:"a"},"@choko-wallet/known-networks"))," for a list of known-networks from ",(0,r.kt)("inlineCode",{parentName:"p"},"@polkadot/apps"),";"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/choko-wallet/sdk/tree/master/packages/request-handler/src"},"LINK ",(0,r.kt)("inlineCode",{parentName:"a"},"@choko-wallet/request-handler"))," for a extendable request handling that are byte precise and efficient on payload encoding;"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/choko-wallet/sdk/tree/master/packages/sdk"},"LINK ",(0,r.kt)("inlineCode",{parentName:"a"},"@choko-wallet/sdk"))," for Dapps to integrate for account management in browsers and handle both local and remote requests;"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"@choko-wallet/sdk-react")," (To be made) to inject the SDK to React components for lifecycle management etc."),(0,r.kt)("h2",{id:"development-roadmap-"},"Development Roadmap \ud83d\udd29"),(0,r.kt)("p",null,"Mostly described above in the Overview section."),(0,r.kt)("h3",{id:"overview-1"},"Overview"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 3 months"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Full-Time Equivalent (FTE):"),"  5 FTE"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Total Costs:")," $36,000")),(0,r.kt)("h3",{id:"milestone-1"},"Milestone 1"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Estimated duration:")," 1.5 months"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"FTE:"),"  6 FTE"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Costs:")," 36,000 USD")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,r.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,r.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0a."),(0,r.kt)("td",{parentName:"tr",align:null},"License"),(0,r.kt)("td",{parentName:"tr",align:null},"Apache 2.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0b."),(0,r.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,r.kt)("td",{parentName:"tr",align:null},"We will provide both ",(0,r.kt)("strong",{parentName:"td"},"inline documentation")," of the code and a ",(0,r.kt)("strong",{parentName:"td"},"live demo"),". Documentation to SDK.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0c."),(0,r.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,r.kt)("td",{parentName:"tr",align:null},"Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0d."),(0,r.kt)("td",{parentName:"tr",align:null},"Docker"),(0,r.kt)("td",{parentName:"tr",align:null},"A Dockerfile won't be much useful for a static web app. Therefore, we are not going to provide one for this milestone.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0e."),(0,r.kt)("td",{parentName:"tr",align:null},"Article"),(0,r.kt)("td",{parentName:"tr",align:null},"We will publish an ",(0,r.kt)("strong",{parentName:"td"},"article")," that explains the concept of the Choko Wallet. More general-public-oriented version of what described in this application.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"1."),(0,r.kt)("td",{parentName:"tr",align:null},"Reactjs WebApp"),(0,r.kt)("td",{parentName:"tr",align:null},"import/create account (create 12 words seed phrase, encrypt with user-input password and store in browser localStorage, encrypted with cryptographic primitives from ",(0,r.kt)("inlineCode",{parentName:"td"},"@skyekiwi/crypto"),",  make sure the user has writen down the seed by testing a randomly selected word i.e. ask user to input and validate word #7; import a seed phrase and encrypt with user-input password)",(0,r.kt)("br",null),(0,r.kt)("br",null)," sign message/transaction",(0,r.kt)("br",null),(0,r.kt)("br",null)," a almost blank dashboard but allow switching between networks (support all networks on ",(0,r.kt)("inlineCode",{parentName:"td"},"@choko-wallet/known-networks"),") and connect to a customized network provider ",(0,r.kt)("br",null),(0,r.kt)("br",null)," setup-on-another-device(instruction and QR code generator), import from clear seed(a route to receive a ",(0,r.kt)("em",{parentName:"td"},"clear")," encoded seed pharse via URL and import into wallet), create wallet page(option to send a URL with a ",(0,r.kt)("em",{parentName:"td"},"clear")," seed phrase via email & warning banner when a wallet that had exposed a ",(0,r.kt)("em",{parentName:"td"},"clear")," seed phrase has more than $50 on the selected network)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"2."),(0,r.kt)("td",{parentName:"tr",align:null},"A Sample DApp"),(0,r.kt)("td",{parentName:"tr",align:null},"A sample DApp created with ",(0,r.kt)("inlineCode",{parentName:"td"},"@choko-wallet/sdk")," to test with common functionalities.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"3."),(0,r.kt)("td",{parentName:"tr",align:null},"SDK"),(0,r.kt)("td",{parentName:"tr",align:null},"For ",(0,r.kt)("inlineCode",{parentName:"td"},"@choko-wallet/known-networks")," will include a few popular Polkadot chains, ",(0,r.kt)("inlineCode",{parentName:"td"},"@choko-wallet/request-handler"),' will implements handler for "request for user public identity", "request to sign transaction", "request to sign message", "request to decrypt/encrypt message" (Note: encryption/decryption won\'t be a solution yet, see discussion above for details).')))),(0,r.kt)("h2",{id:"future-plans"},"Future Plans"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Allow Web2 login info to be mapped to Web3 address. This will be some complicated and hard tech to implement to preserve user privacy. Require deeper integration of the SkyeKiwi Network for privacy preserving smart contract calls.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"NFT integration - Integrate wallet support for popular NFT protocols in the Polkadot ecosystem and teleporting of NFT assets.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Allow connection to Ethereum. Research and implement ways to send Web3Js style transactions via the browser wallet.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Ledger support - for serious crypto users, while preserving the easy to use nature of the wallet.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Biometric support - encrypt the seed phrases with FaceId/TouchId etc with WebAuthn standard.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Port as mobile Apps - biometrics authentication will sure be there and security will be greatly enhanced.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"More face-to-face events features - i.e. genrate printable QR codes for Linkdrops to be distributed at event venues; location based events check-ins. Scan and validate tickets (as NFTs) at event venues.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Integrate social-recovery-pallet for an easy recovery process."))))}h.isMDXComponent=!0}}]);