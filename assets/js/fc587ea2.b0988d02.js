"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[3815],{58192:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>p});var n=a(87462),l=(a(67294),a(3905));a(95657);const o={},i="Coong Wallet",r={unversionedId:"applications/coong_wallet",id:"applications/coong_wallet",title:"Coong Wallet",description:"- Team Name: Coong Team",source:"@site/applications/coong_wallet.md",sourceDirName:"applications",slug:"/applications/coong_wallet",permalink:"/Grants-Program/applications/coong_wallet",draft:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/applications/coong_wallet.md",tags:[],version:"current",frontMatter:{}},s={},p=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Design Goals",id:"design-goals",level:4},{value:"Account Creation",id:"account-creation",level:4},{value:"Integration Process into Dapps",id:"integration-process-into-dapps",level:4},{value:"Vision",id:"vision",level:4},{value:"Wireframes",id:"wireframes",level:4},{value:"Technology Stack",id:"technology-stack",level:4},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Development Status \ud83d\udcd6",id:"development-status-",level:2},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 \u2014 Core features &amp; SDK",id:"milestone-1--core-features--sdk",level:3},{value:"Milestone 2 \u2014 Additional features &amp; demo dapp",id:"milestone-2--additional-features--demo-dapp",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information \u2795",id:"additional-information-",level:2}],m={toc:p},d="wrapper";function u(e){let{components:t,...a}=e;return(0,l.kt)(d,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"coong-wallet"},"Coong Wallet"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Team Name:")," Coong Team"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Payment Address:")," 0xdF14fb4c2F189402b510C603e7f52bf416Fd477B (USDT)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("a",{parentName:"strong",href:"https://github.com/w3f/Grants-Program/tree/master#level_slider-levels"},"Level"),":")," 2")),(0,l.kt)("h2",{id:"project-overview-"},"Project Overview \ud83d\udcc4"),(0,l.kt)("h3",{id:"overview"},"Overview"),(0,l.kt)("p",null,"Wallet is a key factor to blockchain technology & cryptocurrencies, it should be secure, easy to use and for mass adoption it should have a frictionless users onboarding experience."),(0,l.kt)("p",null,"Polkadot & Kusama ecosystem has seen a few wallet solutions out there with great UI/UX (SubWallet, Nova, Talisman, Enkrypt). On desktop, most of the solutions are browser extension-based wallets with which users need to install an extension in order to interact with dapps and networks. On mobile, most of the browsers do not support extensions, so users would need to install wallet mobile apps and then interact with dapps via Dapp Browser build inside the wallets (SubWallet, Nova). We believe this creates an inconsistent experience for users on desktop & mobile since most of the dapps are website-based thus posing a barrier in onboarding new users to the ecosystem, especially for those who are new to or less-educated about crypto."),(0,l.kt)("p",null,"As users, we love the website-based wallet experience that the ",(0,l.kt)("a",{parentName:"p",href:"https://wallet.near.org/"},"NEAR wallet")," brings to the NEAR ecosystem where users can connect to dapps using their favorite browsers while at the same time can also access their wallet smoothly inside the same browser on both desktop & mobile."),(0,l.kt)("p",null,"With that inspiration, we propose to build Coong, a website-based multi-chain wallet, to bring a similar experience to Polkadot & Kusama ecosystem which we believe will bring huge benefits to both users & the ecosystem."),(0,l.kt)("h3",{id:"project-details"},"Project Details"),(0,l.kt)("h4",{id:"design-goals"},"Design Goals"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Compatible with ",(0,l.kt)("inlineCode",{parentName:"li"},"@polkadot/extension")," API",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Most of the wallets in the ecosystem are now following ",(0,l.kt)("inlineCode",{parentName:"li"},"@poladot/extension")," API which is widely used now in the ecosystem. So being compatible ",(0,l.kt)("inlineCode",{parentName:"li"},"@polkadot/extension")," API will help dapps can easily integrate with Coong within a few steps."),(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("inlineCode",{parentName:"li"},"@polkadot/extension")," API allows dapps to call into the wallet to access granted information (connected accounts) as well as asking for permission/approval (request to access accounts, sign transaction, \u2026), dapps can also subscribe to changes happened inside the wallet. Those abilities seems to be impossible with the redirection-based approach that the Near wallet is using."),(0,l.kt)("li",{parentName:"ul"},"The approach that Coong would take is similar to how dapps interact with extension-based wallets which is via ",(0,l.kt)("inlineCode",{parentName:"li"},"window.postMessage")," API.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"To access granted information or subscribe to changes from the wallet, dapps will send/receive messages via an iframe loading Coong wallet, the iframe will be injected inside dapps via Coong SDK."),(0,l.kt)("li",{parentName:"ul"},"To ask for users\u2019 permission/approval, dapps would open a child tab of Coong wallet using ",(0,l.kt)("inlineCode",{parentName:"li"},"window.open")," API, the ",(0,l.kt)("inlineCode",{parentName:"li"},"window.open")," will return a window object of the child tab allowing wallet & dapps to send messages back and forth via ",(0,l.kt)("inlineCode",{parentName:"li"},"window.postMessage"),"."),(0,l.kt)("li",{parentName:"ul"},"We have created a PoC to demonstrate how dapps can interact with a website-based wallet to ask for accounts access & sign dummy data. ",(0,l.kt)("a",{parentName:"li",href:"https://coong-dapp.netlify.app/"},"Live demo here")))))),(0,l.kt)("li",{parentName:"ul"},"Security first",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"We believe a wallet should not only be easy to use but also can keep users\u2019 information safe and secure. Coong is a non-custodial wallet, users\u2019 private keys & seed phrase will be encrypted and stored in ",(0,l.kt)("inlineCode",{parentName:"li"},"localStorage")," of the browsers, and can only be decrypted by users\u2019 wallet password.")))),(0,l.kt)("h4",{id:"account-creation"},"Account Creation"),(0,l.kt)("p",null,"Coong is a hierarchical deterministic (HD) wallet following the idea of ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki"},"BIP32"),", which only requires users to back up only one seed phrase upon setting up the wallet, new accounts will be created by deriving from the setup seed and an account index number as the derivation path (",(0,l.kt)("inlineCode",{parentName:"p"},"//{index}"),"), ",(0,l.kt)("inlineCode",{parentName:"p"},"index")," number will be started from ",(0,l.kt)("inlineCode",{parentName:"p"},"0")," and increased one by one as new accounts are created. The first account will be created without derivation path, this is to be compatible with the Polkadot{.js} wallet."),(0,l.kt)("p",null,"Coong also supports import accounts by private keys, but those accounts cannot be recovered by the setup seed phrase, so they will be labeled as ",(0,l.kt)("inlineCode",{parentName:"p"},"Imported Account"),"."),(0,l.kt)("h4",{id:"integration-process-into-dapps"},"Integration Process into Dapps"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Developers need to install Coong SDK (",(0,l.kt)("inlineCode",{parentName:"li"},"@coong/sdk"),") into the dapps and run Coong wallet initialization upon loading dapps to ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/polkadot-js/extension#injection-information"},"inject the Coong API"),"."),(0,l.kt)("li",{parentName:"ul"},"After the Coong API is injected, dapps can interact with Coong just like they interact with other extension-based wallets. E.g: calling ",(0,l.kt)("inlineCode",{parentName:"li"},"window.injectedWeb3['coong'].enable()")," to request access to the wallet & users\u2019 accounts."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"@coong/sdk")," will be published on npm registry so developers can easily download & integrate to dapps.")),(0,l.kt)("h4",{id:"vision"},"Vision"),(0,l.kt)("p",null,"We set a vision for Coong to be an important part of Polkadot/Kusama ecosystem with fully-fledged features like view/send balances, EVM accounts, NFTs, staking, crowdloan, transaction history\u2026 We will split the development of Coong into several phases. This application is asking for a grant to support the first development phase."),(0,l.kt)("p",null,"The first development phase will be focused on the core/common features of the wallet and the SDK with ",(0,l.kt)("inlineCode",{parentName:"p"},"@polkadot/extension")," compatibility to help dapps easily integrate with Coong."),(0,l.kt)("h4",{id:"wireframes"},"Wireframes"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"These are simple wireframes serving as guidance for UI development, the final product might look different.")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Welcome screen\n",(0,l.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/6867026/208712735-10bc6957-cb69-489c-9bec-c6eaa14e9b39.png",alt:"image"}))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Set up new wallet\n",(0,l.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/6867026/208712848-1c64adc4-bdc2-41cd-9b71-e10ec1a5c579.png",alt:"image"}))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Unlock Wallet\n",(0,l.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/6867026/208713009-48d617e3-85eb-4c33-a21d-a86f546bd616.png",alt:"image"}))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"List accounts\n",(0,l.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/6867026/208713099-5e8a5034-350f-4ae1-8b5e-ab17ee7ad440.png",alt:"image"}))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Create account\n",(0,l.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/6867026/208713186-fef5435b-7d49-4786-ba78-69086e3178ad.png",alt:"image"}))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Account controls (Forget, Copy address, Show QR Code, Export, Rename, Dapps Access)\n",(0,l.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/6867026/208813964-4a35eecd-7279-47f6-a840-31c3df4982ef.png",alt:"image"}))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Sign/Approve Transaction & Message\n",(0,l.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/6867026/208714308-b1b7a9b1-bcb1-4cab-9cf3-07c280e81c71.png",alt:"image"}))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Request Wallet Access\n",(0,l.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/6867026/208714373-4c785e2c-b968-46e8-b0c6-69f1321553d1.png",alt:"image"}))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Other additional features:"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Export wallet\n",(0,l.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/6867026/208714528-e0998bea-eae9-42d7-894a-3ace1a61229d.png",alt:"image"}))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Import account\n",(0,l.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/6867026/208714641-569c17a7-ba27-4fcd-9ac7-0f8257401620.png",alt:"image"}))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Manage Dapps Access\n",(0,l.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/6867026/208714802-851123d7-4c97-4056-8740-3ab688e6bcee.png",alt:"image"}))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Settings\n",(0,l.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/6867026/208714706-581b34c4-b357-4572-ab15-114ea4388882.png",alt:"image"})))))),(0,l.kt)("h4",{id:"technology-stack"},"Technology Stack"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"React/Redux"),(0,l.kt)("li",{parentName:"ul"},"Material UI")),(0,l.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,l.kt)("p",null,"Coong is born with the intention to help mitigate the inconsistent wallet experience on desktop & mobile and bring a seamless onboarding new users experience to the Polkadot & Kusama ecosystem."),(0,l.kt)("p",null,"As discussed above, there\u2019re a few wallet solutions out there in the ecosystem that have great UX/UI but most are extension-based wallet, Coong takes a different approach as to be a website-based wallet."),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/w3f/Grants-Program/blob/master/applications/choko_wallet.md"},"Choko wallet")," is also another website-based wallet but there\u2019re a few differences:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Choko wallet took the redirection-based approach like the ",(0,l.kt)("a",{parentName:"li",href:"https://wallet.near.org/"},"NEAR wallet")," did while Coong uses the ",(0,l.kt)("inlineCode",{parentName:"li"},"window.postMessage")," API for cross-tab & cross-origin communication like how dapps interact with extension-based wallets."),(0,l.kt)("li",{parentName:"ul"},"Coong is compatible with ",(0,l.kt)("inlineCode",{parentName:"li"},"@polkadot/extension")," API which is widely adopted in the ecosystem, so dapps can integrate with Coong just like how they integrate with extension-based wallets.")),(0,l.kt)("h2",{id:"team-"},"Team \ud83d\udc65"),(0,l.kt)("h3",{id:"team-members"},"Team members"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Thang X. Vu - Leader / Lead Developer"),(0,l.kt)("li",{parentName:"ul"},"Tung Vu - Frontend Developer")),(0,l.kt)("h3",{id:"contact"},"Contact"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Contact Name:")," Thang X. Vu"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Contact Email:")," ",(0,l.kt)("a",{parentName:"li",href:"mailto:zthangxv@gmail.com"},"zthangxv@gmail.com"))),(0,l.kt)("h3",{id:"legal-structure"},"Legal Structure"),(0,l.kt)("p",null,"None"),(0,l.kt)("h3",{id:"teams-experience"},"Team's experience"),(0,l.kt)("p",null,"We have more than 7 years of experience in software development for startups & enterprises. Seeing the potential of blockchain technologies, we have spent more than 1 year exposing to blockchains and Polakdot & Kusama ecosystem. We closely worked with SubWallet team in helping to review the source code to ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/Koniverse/SubWallet-Extension/issues/232"},"improve performance & stability of the wallet"),". Thang is a participant of the first ",(0,l.kt)("a",{parentName:"p",href:"https://medium.com/polkadot-network/polkadot-devcamp-1489a1f8eef2"},"Polkadot DevCamp in May 2022"),". We as users also experience the UX problems in Polkadot & Kusama ecosystem. With that, we know where and how to solve these paint points to help bring the ecosystem closer to end-users."),(0,l.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,l.kt)("p",null,"Projects repos will be hosted at ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/CoongCrafts"},"https://github.com/CoongCrafts")),(0,l.kt)("p",null,"Team members"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Thang X. Vu - ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/sinzii"},"https://github.com/sinzii")),(0,l.kt)("li",{parentName:"ul"},"Tung Vu - ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/1cedrus"},"https://github.com/1cedrus"))),(0,l.kt)("h2",{id:"development-status-"},"Development Status \ud83d\udcd6"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"We\u2019ve been in research the ",(0,l.kt)("inlineCode",{parentName:"p"},"@polkadot/extension")," source code to have a sense of how the wallet is set up & works, and also to better understand the interaction between dapps & extension. Coong will be compatible with ",(0,l.kt)("inlineCode",{parentName:"p"},"@polkadot/extension")," API, so knowing its source code to a certain extent would greatly help the development of Coong.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"We\u2019ve also been working on a PoC to demonstrate the interaction between dapp & wallet."),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://coong-dapp.netlify.app/"},"Live demo")),(0,l.kt)("li",{parentName:"ul"},"Source code: ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/sinzii/demo-wallet-interaction/tree/main/dapp"},"demo-dapp"),", ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/sinzii/demo-wallet-interaction/tree/main/wallet"},"demo-wallet"))))),(0,l.kt)("h2",{id:"development-roadmap-"},"Development Roadmap \ud83d\udd29"),(0,l.kt)("h3",{id:"overview-1"},"Overview"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 5 months"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Full-Time Equivalent (FTE):"),"  1.5 FTE"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Total Costs:")," 30,000 USD")),(0,l.kt)("h3",{id:"milestone-1--core-features--sdk"},"Milestone 1 \u2014 Core features & SDK"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Estimated duration:")," 2.5 month"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"FTE:"),"  1,5"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Costs:")," 15,000 USD")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,l.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,l.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},(0,l.kt)("strong",{parentName:"td"},"0a.")),(0,l.kt)("td",{parentName:"tr",align:null},"License"),(0,l.kt)("td",{parentName:"tr",align:null},"Apache 2.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},(0,l.kt)("strong",{parentName:"td"},"0b.")),(0,l.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,l.kt)("td",{parentName:"tr",align:null},"We will provide ",(0,l.kt)("strong",{parentName:"td"},"inline documentation")," of the code, a live demo of the wallet and instruction on how to integrate Coong Wallet into dapps using Coong SDK.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},(0,l.kt)("strong",{parentName:"td"},"0c.")),(0,l.kt)("td",{parentName:"tr",align:null},"Testing and Testing Guide"),(0,l.kt)("td",{parentName:"tr",align:null},"Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},(0,l.kt)("strong",{parentName:"td"},"0d.")),(0,l.kt)("td",{parentName:"tr",align:null},"Docker"),(0,l.kt)("td",{parentName:"tr",align:null},"We will provide a Dockerfile that can be used to test all the functionality delivered with this milestone.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"1."),(0,l.kt)("td",{parentName:"tr",align:null},"Wallet App / Core features"),(0,l.kt)("td",{parentName:"tr",align:null},"We'll implement the following features for the wallet app:",(0,l.kt)("br",null),"- Welcome screen: Shows a small introduction about Coong & instruct users to set up the wallet by creating a new one or import from an existing seed phrase.",(0,l.kt)("br",null),"- Unlock wallet: Requires users to enter password to access the wallet",(0,l.kt)("br",null),"- Set up new wallet: Guides users through a screen flow to help setting up their wallet from picking up a wallet password, to back up secret recovery phrase (12 words).",(0,l.kt)("br",null),"- Create account: Creates a new account",(0,l.kt)("br",null),"- List accounts: Lists all of the accounts users have created",(0,l.kt)("br",null),"- Request wallet access: Allows users to approve dapps access to the wallet accounts",(0,l.kt)("br",null),"- Approve transaction: Allows users to sign/approve a transaction")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"2."),(0,l.kt)("td",{parentName:"tr",align:null},"Coong SDK"),(0,l.kt)("td",{parentName:"tr",align:null},"We'll implement the SDK to helps ",(0,l.kt)("a",{parentName:"td",href:"#integration-process-into-dapps"},"integrate Coong into Dapps")," & publish the package to npm registry.")))),(0,l.kt)("h3",{id:"milestone-2--additional-features--demo-dapp"},"Milestone 2 \u2014 Additional features & demo dapp"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Estimated duration:")," 2.5 month"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"FTE:"),"  1,5"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Costs:")," 15,000 USD")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,l.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,l.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},(0,l.kt)("strong",{parentName:"td"},"0a.")),(0,l.kt)("td",{parentName:"tr",align:null},"License"),(0,l.kt)("td",{parentName:"tr",align:null},"Apache 2.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},(0,l.kt)("strong",{parentName:"td"},"0b.")),(0,l.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,l.kt)("td",{parentName:"tr",align:null},"We will provide both ",(0,l.kt)("strong",{parentName:"td"},"inline documentation")," of the code and a live demo which will show how the new functionality works.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},(0,l.kt)("strong",{parentName:"td"},"0c.")),(0,l.kt)("td",{parentName:"tr",align:null},"Testing and Testing Guide"),(0,l.kt)("td",{parentName:"tr",align:null},"Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},(0,l.kt)("strong",{parentName:"td"},"0d.")),(0,l.kt)("td",{parentName:"tr",align:null},"Docker"),(0,l.kt)("td",{parentName:"tr",align:null},"We will provide a Dockerfile that can be used to test all the functionality delivered with this milestone.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"0e."),(0,l.kt)("td",{parentName:"tr",align:null},"Article"),(0,l.kt)("td",{parentName:"tr",align:null},"We will publish an article to introduce Coong Wallet, what has been done so far and plans for future development.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"1."),(0,l.kt)("td",{parentName:"tr",align:null},"Wallet App / Additional features"),(0,l.kt)("td",{parentName:"tr",align:null},"We'll implement the following features for the wallet app:",(0,l.kt)("br",null),"- Sign message: Allow users to sign a raw message",(0,l.kt)("br",null),"- Import existing wallet: Set up wallet by using an existing recovery phrase (seed phrase) or scan QR code from the export wallet feature",(0,l.kt)("br",null),"- Forget wallet password / Reset wallet: Allow users to reset the wallet if they forget the password.",(0,l.kt)("br",null),"- Account Controls (Forget, Copy address, Show QR Code, Export, Rename, Dapps Access)",(0,l.kt)("br",null),"- Export wallet: Allow users to easily transfer seed phrase & created accounts to other devices via QR code",(0,l.kt)("br",null),"- Import account from QR Code, Private Key, JSON file",(0,l.kt)("br",null),"- Manage Dapps Access: Manage & update access to wallet accounts of dapps",(0,l.kt)("br",null),"- Settings: Dark/light theme mode, Language, Auto-lock timer, Reveal recovery phrase, Change wallet password")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"2."),(0,l.kt)("td",{parentName:"tr",align:null},"Demo Dapp"),(0,l.kt)("td",{parentName:"tr",align:null},"We'll create a demo dapp that is integrated with Coong wallet to demonstrate dapp-wallet interactions, similar to ",(0,l.kt)("a",{parentName:"td",href:"https://connect.subwallet.app/"},"connect.subwallet.app"),".")))),(0,l.kt)("h2",{id:"future-plans"},"Future Plans"),(0,l.kt)("p",null,"As mentioned, future plans for Coong wallet are to equip with more features that help users manage assets easier:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"View/send balances, EVM accounts, NFTs, staking, crowdloan, transaction history"),(0,l.kt)("li",{parentName:"ul"},"Attach QR Signer, Support hardware wallets")),(0,l.kt)("h2",{id:"additional-information-"},"Additional Information \u2795"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"How did you hear about the Grants Program?")," "),(0,l.kt)("p",null,"Web3 Foundation Website & Medium"))}u.isMDXComponent=!0}}]);