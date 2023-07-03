"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[18312],{76055:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));a(8209);const l={},i="SkyePass",o={unversionedId:"applications/skyepass",id:"applications/skyepass",title:"SkyePass",description:"This document is referenced in the terms and conditions and therefore needs to contain all the required information. Don't remove any of the mandatory parts presented in bold letters or as headlines! See the Open Grants Program Process on how to submit a proposal.",source:"@site/applications/skyepass.md",sourceDirName:"applications",slug:"/applications/skyepass",permalink:"/applications/skyepass",draft:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/applications/skyepass.md",tags:[],version:"current",frontMatter:{}},s={},p=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-",level:2},{value:"Product Details",id:"product-details",level:3},{value:"Password Manager &amp; an Identity Management Solution",id:"password-manager--an-identity-management-solution",level:3},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"UI/UX Mockup",id:"uiux-mockup",level:3},{value:"Cross-Comparison with Other Password Managers",id:"cross-comparison-with-other-password-managers",level:3},{value:"Team \ud83d\udc65",id:"team-",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-",level:2},{value:"Overview",id:"overview",level:3},{value:"Milestone 1 \u2014 PoC",id:"milestone-1--poc",level:3},{value:"Milestone 2  \u2014 Desktop App &amp; Browser Extension",id:"milestone-2---desktop-app--browser-extension",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"For the core password manager",id:"for-the-core-password-manager",level:4},{value:"Integrated Identity Solution",id:"integrated-identity-solution",level:4},{value:"Hardware Wallet Integration",id:"hardware-wallet-integration",level:4},{value:"Meta Transaction",id:"meta-transaction",level:4},{value:"Backup/Secret Keeping Nodes",id:"backupsecret-keeping-nodes",level:4},{value:"Marketplace",id:"marketplace",level:4},{value:"Treasury",id:"treasury",level:4},{value:"Additional Information \u2795",id:"additional-information-",level:2}],d={toc:p},u="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"skyepass"},"SkyePass"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This document is referenced in the terms and conditions and therefore needs to contain all the required information. Don't remove any of the mandatory parts presented in bold letters or as headlines! See the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/w3f/Open-Grants-Program/blob/master/README_2.md"},"Open Grants Program Process")," on how to submit a proposal.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Team Name:")," SkyeKiwi Team"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Payment Address"),": 0xa5E4E1BB29eE2D16B07545CCf565868aE34F92a2"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Status:")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/w3f/Grants-Program/pull/212#issuecomment-1173601830"},"Terminated"))),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"The above combination of your GitHub account submitting the application and payment address will be your unique identifier during the program. Please keep them safe.")),(0,r.kt)("h2",{id:"project-overview-"},"Project Overview \ud83d\udcc4"),(0,r.kt)("p",null,"SkyePass is a decentralized and customizable identity management software. On the surface, it is a decentralized, open source and modern password manager."),(0,r.kt)("h3",{id:"product-details"},"Product Details"),(0,r.kt)("p",null,"As a long-term password manager software user myself, I have been really frustrated of the services like LastPass, 1Password for either lack of functionalities or the idea of storing ones entire digital identity on their corporate servers. Existing open-source solutions are too technically complicated to use."),(0,r.kt)("p",null,"At the very basis of it, a password manager is no more than an encrypted database, an APP and a browser extension to interact with the database."),(0,r.kt)("p",null,"Therefore, our team create a new password manger software that has pretty and intuitive UI/UX, fully decentralized (i.e. our team own no backend servers) and hackable by providing an open API for people to develop extensions with."),(0,r.kt)("p",null,"Users who signup will first create a blockchain wallet and have the mnemonic (and a master password) as their sole identity credentials (pretty standard blockchain wallet stuff). Later, each database instance is called a ",(0,r.kt)("inlineCode",{parentName:"p"},"vault")," (standard name for all password managers) and they are light-weight file based databases (",(0,r.kt)("a",{parentName:"p",href:"https://github.com/typicode/lowdb"},"lowDB")," seems to be a great choice). User can be given options to choose the encryption behavior of their database. By default, the vault will be split into some pieces with a Shamir's secret sharing mechanism."),(0,r.kt)("p",null,"For instance, for a simplest sharing schema, when the vault is created to be shared with 2 other family members, the vault will be split into 4 parts (we call them ",(0,r.kt)("inlineCode",{parentName:"p"},"horcrux"),", for those who do not know ",(0,r.kt)("a",{parentName:"p",href:"http://harrypotter.shoutwiki.com/wiki/Horcrux#:~:text=A%20Horcrux%20is%20a%20powerful,one%20is%20to%20true%20immortality."},"the Harry Potter reference")," ) with a minimum quorum of 2 to be decrypted. One piece will be sent to IPFS without encryption, the other 3 pieces will be encrypted by each member's public key and be sent to IPFS. An NFT will be minted for the owner. The ID of the NFT will be the ",(0,r.kt)("inlineCode",{parentName:"p"},"vault ID")," and the NFT's URI will be a metadata piece that only the owner can change as exampled below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "pieces": 4,\n    "quorum": 2,\n    "nounce": 18,\n    "owner": "5Ef9ES1SLQZU4KucGsjvs8qexvppQFmDgHiqoqVptJ9nZDeu",\n    "members": [\n        "5EKj6S1SLQZU4KucGsjvs8qexvppQFmDgHiqsdsdtJ9nZ123",\n        "5EJK1S1SLQZjkLKucGsjvs8qekdjpQFmDgHiqoqVptJ9nZ978"\n    ],\n    "unencrypted_cid": "QmaTX2v2QuwkQvEERw17w2xACcr2WZhy9t3NAEPBjvqPSX",\n    "encrypted_cids": [\n        {\n            "cid":       "QmaTX2v2QuwkQvEERw17w2xACcr2WZhy9t3NAEPBjvqPSX",\n            "member": "5EKj6S1SLQZU4KucGsjvs8qexvppQFmDgHiqsdsdtJ9nZ123"\n        },{\n            "cid":       "QmaTX2v2QuwkQvEERw17w2xACcr2WZhy9t3NAEPBjvqPSX",\n            "member": "5EJK1S1SLQZjkLKucGsjvs8qekdjpQFmDgHiqoqVptJ9nZ978"\n        }, {\n            "cid":       "QmaTX2v2QuwkQvEERw17w2xACcr2WZhy9t3NAEPBjvqPSX",\n            "member": "5Ef9ES1SLQZU4KucGsjvs8qexvppQFmDgHiqoqVptJ9nZDeu"\n     }]\n}\n')),(0,r.kt)("p",null,"The reason why we design such mechanism serves 3 purposes."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Reserve the capacity for advanced users to create more complicated sharing schema.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"For instance, a user can create a vault and assign trustee to take over one's estate when the user passes away. The user can split the vault to 5 ",(0,r.kt)("inlineCode",{parentName:"li"},"horcrux")," and set the minimum decryption quorum to 3. 2 pieces encrypted with the user's own public key, 1 piece encrypted with a trustee A's public key, 1 piece encrypted with another trustee B's public key and 1 last piece to the user's lawyer. In event of death, A and B can go to the lawyer and decrypt the vault and inherit the user's digital identities."),(0,r.kt)("li",{parentName:"ul"},"A team can create a vault that requires 2 members to decrypt a vault, or require the owner's piece to decrypt a vault etc."))),(0,r.kt)("li",{parentName:"ol"},"Because the historical metadata states are all stored on the blockchain, it is not hard to rebuild the change history of the vault."),(0,r.kt)("li",{parentName:"ol"},"Make it easier to check the integrity of the vault and recover the vault."),(0,r.kt)("li",{parentName:"ol"},"Leave the option open for future commercial projects to offer zero-knowledge vault backup service.")),(0,r.kt)("p",null,"To manage access for users, we assume two common roles: ",(0,r.kt)("inlineCode",{parentName:"p"},"write")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"read")," and, of course, ",(0,r.kt)("inlineCode",{parentName:"p"},"owner"),". Because each time when the database is updated (i.e. new password saved), the IPFS CID will be updated, managing access is easy. The owner can add the member's address to be ",(0,r.kt)("inlineCode",{parentName:"p"},"approved")," to change the URI in the smart contract and be responsible to update all CIDs when a client is updating the database. While those who have a ",(0,r.kt)("inlineCode",{parentName:"p"},"horcrux")," but not in the ",(0,r.kt)("inlineCode",{parentName:"p"},"approved list")," in the smart contract, they cannot update the database because they cannot update the metadata."),(0,r.kt)("p",null,"So far, we have discussed a system to securely create, share and manage a minimalism decentralized file-based database. Our team believe there are more we can do with the database file itself and that's why we are calling SkyePass hackable. If we think about blockchain wallet applications, they are web applications that store some private keys and call APIs like ",(0,r.kt)("inlineCode",{parentName:"p"},"Web3.js"),". Taking inspiration from Ledger, we believe if we expose some APIs for developers to make extensions(like the idea of Applications for Ledger), we can make a password manager infinitely interesting. Because the vault is shareable to others, users can share a whole workspace to others will all sensitive information included. These extensions can be made both in a desktop applications or a browser extension."),(0,r.kt)("p",null,"Some ideas we have had so far:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Crypto Wallet"),": shared hot wallet. The owner of the vault can install an ",(0,r.kt)("inlineCode",{parentName:"li"},"Ethereum")," extension and store the private key with it. And, of course, DApp browsers."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SSH Login Tool"),": a whole team can share login credential to their server effortlessly."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Shared Phone Number"),": a shared Google account that registered on ",(0,r.kt)("inlineCode",{parentName:"li"},"Google Voice")," can be stored, and the whole family can receive verification code for services.")),(0,r.kt)("h3",{id:"password-manager--an-identity-management-solution"},"Password Manager & an Identity Management Solution"),(0,r.kt)("p",null,"Based on some thinking of the basis nature of NFTs. We believe that a password manager is an ideal medium to deliver tokenized digital identities. Therefore, we think each username-password-OTP combination as an atomic token, a vault as a collection of these identities, and an ",(0,r.kt)("inlineCode",{parentName:"p"},"extension")," as a service injected with an identity."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'If we assume all identity tokens have two states: "public identity" or "private identity". A public handle is the public identity of a user. (i.e. a twitter handler, a Github handle or a Venmo handle etc. ) Therefore, we are building a solution to link to one\'s public off-chain profiles. Also, we can implement a ENS-like or ',(0,r.kt)("inlineCode",{parentName:"li"},"@username")," style handle system."),(0,r.kt)("li",{parentName:"ul"},"Therefore, simple sharing behavior (i.e. share my spotify account to my girlfriend) can take two forms: if she has an account with this password manager, simple ",(0,r.kt)("inlineCode",{parentName:"li"},"@her"),", set some rules for using this password(or not) and press share. If she has not, a one time sharing link will be sent, her browser will generate an ephemeral key pair, and that ephemeral key pair will be used to encrypted the entry and send the encrypted password entry over and make it self-destruct soon."),(0,r.kt)("li",{parentName:"ul"},"For teams or families, they are using a shared identity. They can link their profiles and get a handle like ",(0,r.kt)("inlineCode",{parentName:"li"},"@team"),", while the team will use some secret sharing schema for privilege management.")),(0,r.kt)("p",null,"For more on this, please refer to ",(0,r.kt)("inlineCode",{parentName:"p"},"Future Plan/Integrated Identity Solution")," section."),(0,r.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,r.kt)("p",null,"I don't think there are anything like SkyePass so far, both within the Substrate community or all blockchain communities. The reason that Substrate will be an ideal platform for SkyePass is because the flexibility the framework offers. We plan to deploy 4 smart contracts:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Contract 1: A NFT contract that issues an NFT token for vault creator, store metadata of the vault and manage permission to update the vault. (the ",(0,r.kt)("inlineCode",{parentName:"p"},"vault metadata contract"),")")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Contract 2: A NFT contract that generate an NFT token that represents an atomic digital identity to users (the ",(0,r.kt)("inlineCode",{parentName:"p"},"atomic digital identity contract"),")")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Contract 3: A generalized handle system (an ENS-like system) on a Substrate-based chain that issue user handle ownership NFTs (the ",(0,r.kt)("inlineCode",{parentName:"p"},"substrate identity handle contract"),")")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Contract 4: An identity control smart contract that verify and store off-chain user handle(s), in compliment to the ",(0,r.kt)("inlineCode",{parentName:"p"},"substrate identity handle contract")," (the ",(0,r.kt)("inlineCode",{parentName:"p"},"off-chain identity linkage contract"),")"))),(0,r.kt)("p",null,"From all smart contract platforms, we choose the Substrate stack for development because:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"When more customizations are needed, we won't be limited by the platform. The option to develop a parachain is still available."),(0,r.kt)("li",{parentName:"ul"},"Because these identity management smart contract is designed to be more generalized, we have the option to deploy them on different chain. For instance, we can deploy contract 1 and 2 to a faster/less secure/low tx cost focused parachain. While, contract 3 & 4 to a secure and relatively more decentralized parachain. Most likely we will not mess with Bridging of the Substrate stack but the option is still open for future.")),(0,r.kt)("p",null,"For ",(0,r.kt)("inlineCode",{parentName:"p"},"extensions"),": we plan to host a Github public repo as described in ",(0,r.kt)("inlineCode",{parentName:"p"},"Milestone 2")),(0,r.kt)("h3",{id:"uiux-mockup"},"UI/UX Mockup"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://tva1.sinaimg.cn/large/008eGmZEly1gmh1l2kl90j31c00u0ac0.jpg",alt:"MacBook Pro - 5"})),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://tva1.sinaimg.cn/large/008eGmZEly1gmh1l4ozqkj31c00u0dl4.jpg",alt:"MacBook Pro - 1"})),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://tva1.sinaimg.cn/large/008eGmZEly1gmh1l3k86lj31c00u0431.jpg",alt:"MacBook Pro - 2"})),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://tva1.sinaimg.cn/large/008eGmZEly1gmh1l5w0ujj31c00u0tc0.jpg",alt:"MacBook Pro - 4"})),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://tva1.sinaimg.cn/large/008eGmZEly1gmh1l6q8c4j31c00u0778.jpg",alt:"MacBook Pro - 3"})),(0,r.kt)("h3",{id:"cross-comparison-with-other-password-managers"},"Cross-Comparison with Other Password Managers"),(0,r.kt)("p",null,"We have not included all popular ones. These are just ones we have actually used."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"SkyePass"),(0,r.kt)("th",{parentName:"tr",align:null},"1Password"),(0,r.kt)("th",{parentName:"tr",align:null},"LastPass"),(0,r.kt)("th",{parentName:"tr",align:null},"NordPass"),(0,r.kt)("th",{parentName:"tr",align:null},"RememBear"),(0,r.kt)("th",{parentName:"tr",align:null},"KeePass"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Release Year"),(0,r.kt)("td",{parentName:"tr",align:null},"2021"),(0,r.kt)("td",{parentName:"tr",align:null},"2006"),(0,r.kt)("td",{parentName:"tr",align:null},"2008"),(0,r.kt)("td",{parentName:"tr",align:null},"2019"),(0,r.kt)("td",{parentName:"tr",align:null},"2018"),(0,r.kt)("td",{parentName:"tr",align:null},"2003")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Zero-Knowledge Vault"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Product Type"),(0,r.kt)("td",{parentName:"tr",align:null},"Opensource"),(0,r.kt)("td",{parentName:"tr",align:null},"Commercial"),(0,r.kt)("td",{parentName:"tr",align:null},"Commercial"),(0,r.kt)("td",{parentName:"tr",align:null},"Commercial"),(0,r.kt)("td",{parentName:"tr",align:null},"Commercial"),(0,r.kt)("td",{parentName:"tr",align:null},"Opensource")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Account & Vault Metadata"),(0,r.kt)("td",{parentName:"tr",align:null},"Stored On Blockchain"),(0,r.kt)("td",{parentName:"tr",align:null},"Corporate Servers"),(0,r.kt)("td",{parentName:"tr",align:null},"Corporate Servers"),(0,r.kt)("td",{parentName:"tr",align:null},"Corporate Servers"),(0,r.kt)("td",{parentName:"tr",align:null},"Corporate Servers"),(0,r.kt)("td",{parentName:"tr",align:null},"Local by default")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Decentralized"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Kind of")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2FA Login Protection"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Shared Vault"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Kind Of")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Custom Sharing Schema"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes & expose APIs to do so"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes. With Business accounts"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"With plugins")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Intuitive & Morden UI/UX"),(0,r.kt)("td",{parentName:"tr",align:null},"Intuitive and Beautiful"),(0,r.kt)("td",{parentName:"tr",align:null},"Good but Not Intuitive"),(0,r.kt)("td",{parentName:"tr",align:null},"Intuitive But not so Beautiful"),(0,r.kt)("td",{parentName:"tr",align:null},"Intuitive and Beautiful"),(0,r.kt)("td",{parentName:"tr",align:null},"Intuitive and Astonishing; Possibly the Best"),(0,r.kt)("td",{parentName:"tr",align:null},"Old, professional users only")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Fill Web Forms & Websites Auto Login"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"with plugins")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Password Strength Report"),(0,r.kt)("td",{parentName:"tr",align:null},"Not by default but open for plugins"),(0,r.kt)("td",{parentName:"tr",align:null},"Fantastic"),(0,r.kt)("td",{parentName:"tr",align:null},"Good"),(0,r.kt)("td",{parentName:"tr",align:null},"OK"),(0,r.kt)("td",{parentName:"tr",align:null},"OK"),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Digital Legacy"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes!"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"NO")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Import From Browsers"),(0,r.kt)("td",{parentName:"tr",align:null},"Not Now. Will be Supported after Beta Release"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"With plugins")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Extensibility"),(0,r.kt)("td",{parentName:"tr",align:null},"Core Feature!"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes!")))),(0,r.kt)("h2",{id:"team-"},"Team \ud83d\udc65"),(0,r.kt)("h3",{id:"team-members"},"Team members"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Song Zhou (Full stack developer) ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/RoyTimes"},"https://github.com/RoyTimes")),(0,r.kt)("li",{parentName:"ul"},"Zoe Sun (Lead Designer)"),(0,r.kt)("li",{parentName:"ul"},"... More to be hired")),(0,r.kt)("h3",{id:"contact"},"Contact"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Contact Name:")," Song Zhou (",(0,r.kt)("a",{parentName:"li",href:"mailto:song.zhou@ponder.capital"},"song.zhou@ponder.capital"),")")),(0,r.kt)("h3",{id:"legal-structure"},"Legal Structure"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"No legal entity yet")),(0,r.kt)("h3",{id:"teams-experience"},"Team's experience"),(0,r.kt)("p",null,"Besides private work for companies that cannot be shared, Song developed a simple server-less React.js Blog system(can be seen on his Github profile); a private event participation checkin application, based on Ethereum smart contract, React.js for frontend, Coda.io API and a Telegram bot for administration."),(0,r.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/skyekiwi/skyepass"},"https://github.com/skyekiwi/skyepass"))),(0,r.kt)("h2",{id:"development-roadmap-"},"Development Roadmap \ud83d\udd29"),(0,r.kt)("h3",{id:"overview"},"Overview"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 16 weeks"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Full-time equivalent (FTE):"),"  2.5 FTE"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Total Costs:")," $28,500")),(0,r.kt)("h3",{id:"milestone-1--poc"},"Milestone 1 \u2014 PoC"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Estimated Duration:")," 3 Weeks")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"FTE:"),"  2")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Costs:")," 6480 DAI (2 FTE ",(0,r.kt)("em",{parentName:"p"}," 35 Hours per week ")," 3 Weeks * $38 Hourly Wage. Of course, I'll be surprised if we will actually work less than 50 hours per week.)"))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Number"),(0,r.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,r.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0a."),(0,r.kt)("td",{parentName:"tr",align:null},"License"),(0,r.kt)("td",{parentName:"tr",align:null},"Apache 2.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0b."),(0,r.kt)("td",{parentName:"tr",align:null},"Documentations"),(0,r.kt)("td",{parentName:"tr",align:null},"A guideline of how to run and test all functionalities described below.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1."),(0,r.kt)("td",{parentName:"tr",align:null},"Smart Contract"),(0,r.kt)("td",{parentName:"tr",align:null},"The core smart contract that store IPFS hash, generate unique vault ID and implement access management. ",(0,r.kt)("br",null),"We are using ink! and the smart contract development suite maintained and developed by ",(0,r.kt)("a",{parentName:"td",href:"https://patract.io/"},"Patract Labs")," for developing environment, unit testing and deployment.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2."),(0,r.kt)("td",{parentName:"tr",align:null},"Client Side PoC"),(0,r.kt)("td",{parentName:"tr",align:null},"1. Local data storage schema and adapters with lowDB ",(0,r.kt)("br",null),"2. IPFS (add, cat, pin) on the Infura IPFS nodes; ",(0,r.kt)("br",null),"3. ECIES encryption & decryption with ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/bitchan/eccrypto"},"eccrypto")," ",(0,r.kt)("br",null),"4. Shamir secret sharing with a simplest 4/2 schema powered by audited lib ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/grempe/secrets.js"},"Secrets.js")," ",(0,r.kt)("br",null),"5. A full run down of the process (from a user creating a vault, add in some password items, to the encryption, publish to IPFS, interact with a local blockchain, to access management when sharing with two other users)",(0,r.kt)("br",null),"6. Unit testing for most of these functionalities")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3."),(0,r.kt)("td",{parentName:"tr",align:null},"Client Side UI/UX"),(0,r.kt)("td",{parentName:"tr",align:null},"an simple Electron UI/UX not wired up with logic yet")))),(0,r.kt)("h3",{id:"milestone-2---desktop-app--browser-extension"},"Milestone 2  \u2014 Desktop App & Browser Extension"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Estimated Duration:")," 10 Weeks / ",(0,r.kt)("strong",{parentName:"p"},"Est. Start Early 2022"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"FTE:"),"  4")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Costs:")," 22,020 DAI"))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Number"),(0,r.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,r.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0a."),(0,r.kt)("td",{parentName:"tr",align:null},"License"),(0,r.kt)("td",{parentName:"tr",align:null},"Apache 2.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0b."),(0,r.kt)("td",{parentName:"tr",align:null},"Developer Resource/API Documentation/Community"),(0,r.kt)("td",{parentName:"tr",align:null},"- A comprehensive API spec documentation ",(0,r.kt)("br",null),"- Riot group for support, suggestions and questions",(0,r.kt)("br",null))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0c."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Security Auditing")),(0,r.kt)("td",{parentName:"tr",align:null},"Audited by a trusted 3rd party")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1."),(0,r.kt)("td",{parentName:"tr",align:null},"Desktop App/Browser Extension"),(0,r.kt)("td",{parentName:"tr",align:null},"Create an open Github repo for ",(0,r.kt)("inlineCode",{parentName:"td"},"extensions"),', build a management system for open PR of new integrations. The "marketplace" in the desktop app will pull a list of available integrations from the repo.  ',(0,r.kt)("br",null),"Support at least 2 password importing source",(0,r.kt)("br",null),"Support unencrypted password exporting",(0,r.kt)("br",null),"Add in support for browser extension to inject hot wallet like Metamask",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"Desktop App"),(0,r.kt)("br",null),"A React.js + Electron App. The App will implement as close as possible to the graphic design (per 3). ",(0,r.kt)("br",null),"- Wallet Creation / Backup Phase / Create Master Password",(0,r.kt)("br",null),"- Wallet Import / Signin",(0,r.kt)("br",null),"- Autolock after timed inactivity or manually lock the App ",(0,r.kt)("br",null),"- Create/Share/Manage Vaults",(0,r.kt)("br",null),"- Add/Update/Delete Password Items (with 2FA OTP support)",(0,r.kt)("br",null),"- Add/Update/Delete Secure Note/Credit Card ",(0,r.kt)("br",null),"- Basic ETH wallet extension",(0,r.kt)("br",null),"- Basic Polkadot wallet extension ",(0,r.kt)("br",null)," - Application Marketplace",(0,r.kt)("br",null),"- sharing a single password item directly to another user",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"Browser Extension")," ",(0,r.kt)("br",null),"- Communication to Desktop Application",(0,r.kt)("br",null),"- Auto-fill account/passwords",(0,r.kt)("br",null)," ",(0,r.kt)("br",null))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2."),(0,r.kt)("td",{parentName:"tr",align:null},"Smart Contracts"),(0,r.kt)("td",{parentName:"tr",align:null},"All contract tested and audited and we will deploy the V1.0 contract to the appropriate parachains.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4."),(0,r.kt)("td",{parentName:"tr",align:null},"Mobile Apps"),(0,r.kt)("td",{parentName:"tr",align:null},"Draft up UI/UX designs for mobile apps.")))),(0,r.kt)("h2",{id:"future-plans"},"Future Plans"),(0,r.kt)("p",null,"We do plan to build a for-profit business and seek equity investments, but we believe that a good password manager should be a common goods."),(0,r.kt)("h4",{id:"for-the-core-password-manager"},"For the core password manager"),(0,r.kt)("p",null,"For local usage, that means no syncing between devices, no sharing with others, we think it would be absolutely ridiculous to charge people for that, because it basically does not cost us anything. However, for other use cases, on a public V1.0 launch, there can be cost related to IPFS storages and smart contract calls, but it is gonna be way cheaper than any other commercial products. I think it would be safe to assume a cost of \\$2/year for one user with extra-heavy usage. For a team of 10 people, 1Password will charge (\\$7.99 X 12 months X 10 users) \\$960 per year. SkyePass will change this charging schema.We want to make the pricing as transparent as possible."),(0,r.kt)("p",null,'When a user, Alex, created a wallet/account and choose to go for "premium features" (i.e. syncing between devices, sharing with others etc.). We want to ditch the idea of "Alex\'s account at SkyePass" but to "Alex\'s account on a generic blockchain". Alex can fund her account either by transferring some funds from Coinbase or other crypto wallets, or we will hook up a credit card to crypto portal (like MoonPay). We are going to give Alex a simple estimation calculator of how much she would need to top-up per year based on how many devices of vaults she plans to create and share. Usually, for a typical user (add in 300 items, password, notes or credit cards, one vault for herself, one vault for the family and one vault for work), we would recommend somewhere about \\$5 per year compare to a $40 bill I pay for a commercial alternative. A percentage (somewhere between 20% to 40%)of the inbounding funds will be taken to form a treasury. And, of course, we will show Alex how much she can save compare to commercial options. Alex has complete control over her account. She can send out the funds she holds other wallets when she wants. When she is sharing a vault with others, she can choose to send funds to other\'s account if she allows them to make changes to the vault.(Just in the same way when a team leader of a team handles all bills for a SaaS product).'),(0,r.kt)("p",null,"In summary, we are giving the freedom back to our users and let them decide how they want to pay. We will design UX to make managing funds really easy like a commercial alternative."),(0,r.kt)("h4",{id:"integrated-identity-solution"},"Integrated Identity Solution"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"We plan to build an auction market for user handle on a Substrate-based public chain. (refer above in ",(0,r.kt)("inlineCode",{parentName:"li"},"More Potential For a Password Manager"),")"),(0,r.kt)("li",{parentName:"ol"},"We plan to build a market for trading digital identities.  "),(0,r.kt)("li",{parentName:"ol"},"We plan to offer the identity solution in a consulting package for business teams.")),(0,r.kt)("h4",{id:"hardware-wallet-integration"},"Hardware Wallet Integration"),(0,r.kt)("p",null,"We can also create a special version of SkyePass (or a special login method to use hardware wallet) to support only vault creation from hardware wallet."),(0,r.kt)("h4",{id:"meta-transaction"},"Meta Transaction"),(0,r.kt)("p",null,"One of the main reason that we choose Substrate/Polkadot is because we can choose a suitable chain to interact with smart contract calls fast and cheap. The option to develop commercial meta transaction or state channel solutions on Polkadot is still open for consideration."),(0,r.kt)("h4",{id:"backupsecret-keeping-nodes"},"Backup/Secret Keeping Nodes"),(0,r.kt)("p",null,"Because we are building a Shamir secret sharing mechanism at our very core encryption schema, we can explore the idea of providing an optional, commercial and centralized backup nodes."),(0,r.kt)("h4",{id:"marketplace"},"Marketplace"),(0,r.kt)("p",null,"We allow and encourage our community members to build paid extensions on top of our APIs. One idea can be a subscription-based password watchtower service and like all platforms, we will take a percentage of the proceeding to the treasury."),(0,r.kt)("h4",{id:"treasury"},"Treasury"),(0,r.kt)("p",null,"Treasury is built for those who contributes to the community: those who translate documentations, those who build extensions and those who contribute to the core code base. SkyeKiwi team will permanently hold 29% voting rights in decisions and 3 veto rights per calendar year, partners before the official launch will also be granted 20% voting rights. And we leave the rest to all other treasury contributors proportionally. These numbers or proposals are not final. We still have a lot to figure out."),(0,r.kt)("h2",{id:"additional-information-"},"Additional Information \u2795"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We have a simple PoC of the core encryption schema built up in a sandbox. UI/UX and other graphic resources are made."),(0,r.kt)("li",{parentName:"ul"},"We have not applied for other grants yet.")))}m.isMDXComponent=!0}}]);