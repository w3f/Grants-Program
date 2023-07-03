"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[81381],{80222:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var n=a(87462),i=(a(67294),a(3905));a(8209);const l={},r=void 0,o={unversionedId:"applications/multisignature_management_tool",id:"applications/multisignature_management_tool",title:"multisignature_management_tool",description:"Multi-signatureManagementTool",source:"@site/applications/multisignature_management_tool.md",sourceDirName:"applications",slug:"/applications/multisignature_management_tool",permalink:"/applications/multisignature_management_tool",draft:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/applications/multisignature_management_tool.md",tags:[],version:"current",frontMatter:{}},s={},u=[{value:"Multi-signature_Management_Tool",id:"multi-signature_management_tool",level:2},{value:"Project Description",id:"project-description",level:2},{value:"Objectives",id:"objectives",level:2},{value:"Team members",id:"team-members",level:2},{value:"Legal Structure",id:"legal-structure",level:2},{value:"Team Website",id:"team-website",level:2},{value:"Team&#39;s experience",id:"teams-experience",level:2},{value:"Team Code Repos",id:"team-code-repos",level:2},{value:"Development Roadmap",id:"development-roadmap",level:2},{value:"Basic function: generate Multisig account and send Extrinsic",id:"basic-function-generate-multisig-account-and-send-extrinsic",level:3},{value:"Advanced function: more features for multisig wallet and support more network",id:"advanced-function-more-features-for-multisig-wallet-and-support-more-network",level:3}],m={toc:u},p="wrapper";function d(e){let{components:t,...a}=e;return(0,i.kt)(p,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"multi-signature_management_tool"},"Multi-signature_Management_Tool"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Proposer:")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/carlhong"},"Hong Tao")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Payment Address:")," 3P1DGw78xgkQ2pTPT1hcwmzozY1T93gmTB")),(0,i.kt)("h2",{id:"project-description"},"Project Description"),(0,i.kt)("p",null,"When we developed and used the multi-signature feature, we found that there is no multisignature wallet tool that can be used conveniently. The current wallet project is mainly designed for different usage environments, such as mobile wallet app, web wallet, chrome extension, etc. The development of these wallets (except the polkadot.js app) is at an early stage, and lack of multi-signature module . Polkadot.js apps is a very powerful tool, however the user experience and interface of substrate's native multi-signature module integrated in polkadot js is not friendly enough."),(0,i.kt)("p",null,"Therefore, we want to develop a Web Multisignature Management Tool (like ",(0,i.kt)("a",{parentName:"p",href:"https://wallet.gnosis.pm/#/wallets"},"gnosis")," based on Ethereum), implement a Substrate multisignature Portal and Web Tool integration, and bring users a better experience. Besides, subscan will support multisig Extrinsic details display. At current stage, our goal is offering users have a convenient multisignature tool and helping  developers reduce the development cost of similar functions."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Network scalability")),(0,i.kt)("p",null,"All chains built  on substrate ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate/blob/v2.0.0-rc6/frame/multisig/src/lib.rs#L235%3E"},(0,i.kt)("inlineCode",{parentName:"a"},"as_multi")),"  module can use our tools to complete related operations directly. The chain that changes the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate/blob/v2.0.0-rc6/frame/multisig/src/lib.rs#L235%3E"},(0,i.kt)("inlineCode",{parentName:"a"},"as_multi")),"  module can use our UX design partly or completely according to their needs to reduce the development cost."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Platform scalability")),(0,i.kt)("p",null,"The web Multi-signature Management Tool can only run on PC and use it with extension programs."),(0,i.kt)("h2",{id:"objectives"},"Objectives"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Create multi-signature account and send extrinsic"),(0,i.kt)("li",{parentName:"ul"},"Manage multi-signature wallets and extrinsic"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"as_multi")," Module subscan browser adaptation"),(0,i.kt)("li",{parentName:"ul"},"Support multiple networks that are based on Substrate development"),(0,i.kt)("li",{parentName:"ul"},"UX optimization")),(0,i.kt)("h2",{id:"team-members"},"Team members"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/woeom"},"Wan Bei"),", ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/carlhong"},"Hong Tao")),(0,i.kt)("h2",{id:"legal-structure"},"Legal Structure"),(0,i.kt)("p",null,"Shanghai Yitaiyuan Tech"),(0,i.kt)("h2",{id:"team-website"},"Team Website"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.subscan.io/"},"https://www.subscan.io/")),(0,i.kt)("h2",{id:"teams-experience"},"Team's experience"),(0,i.kt)("p",null,"Our team is based in Shanghai and Nanjing. We are very interested in substrate and we have done a lot of related development work, such as helping Darwinia build web wallet. "),(0,i.kt)("p",null,"But our focus has always been Subscan blockchain explorer, which keeps it updated quickly."),(0,i.kt)("h2",{id:"team-code-repos"},"Team Code Repos"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/itering/subscan"},"https://github.com/itering/subscan")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/itering/subscan_ui"},"https://github.com/itering/subscan_ui")),(0,i.kt)("h2",{id:"development-roadmap"},"Development Roadmap"),(0,i.kt)("h3",{id:"basic-function-generate-multisig-account-and-send-extrinsic"},"Basic function: generate Multisig account and send Extrinsic"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"General UI design (in ",(0,i.kt)("a",{parentName:"li",href:"https://www.figma.com/proto/WaysNQWlEB4wWK0a4mzYJQ/Multisig?scaling=min-zoom&node-id=0%3A2"},"Figma"),")"),(0,i.kt)("li",{parentName:"ul"},"backend design doc(in ",(0,i.kt)("a",{parentName:"li",href:"https://www.notion.so/backend-doc-e7b4f79ede7b4d9cb39a52769c2aab2d"},"Notion"),", in ",(0,i.kt)("a",{parentName:"li",href:"https://docs.google.com/document/d/18OgQ2Oh1oR9LIiZ9Uct35zHQ25f7gN1C-ngiqyrMfxU/edit?usp=sharing"},"Google Docs"),")"),(0,i.kt)("li",{parentName:"ul"},"Integrate with polkadot js extension "),(0,i.kt)("li",{parentName:"ul"},"Multisig wallet creation and management "),(0,i.kt)("li",{parentName:"ul"},"Basic Multisig Extrinsic(transfer) create and process in Multisig wallet"),(0,i.kt)("li",{parentName:"ul"},"Multisig wallet support polkadot mainnet"),(0,i.kt)("li",{parentName:"ul"},"Build user-friendly UI to list decoded call data with its hash for users who participated in the multi-signatures, data will be verified by hash on frontend"),(0,i.kt)("li",{parentName:"ul"},"Use database or other backend service to store the index data."),(0,i.kt)("li",{parentName:"ul"},"Docker Files and Images"),(0,i.kt)("li",{parentName:"ul"},"Unit tests and integration test"),(0,i.kt)("li",{parentName:"ul"},"Tutorials")),(0,i.kt)("p",null,"Total for worker implementation: 25 days"),(0,i.kt)("p",null,"Budget: 1 BTC"),(0,i.kt)("h3",{id:"advanced-function-more-features-for-multisig-wallet-and-support-more-network"},"Advanced function: more features for multisig wallet and support more network"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Multisig wallet support more kinds of Extrinsic such as staking, Democracy"),(0,i.kt)("li",{parentName:"ul"},"Support kusama ,Darwinia and other network which base on Substrate 2.0 "),(0,i.kt)("li",{parentName:"ul"},"Docker Files and Images"),(0,i.kt)("li",{parentName:"ul"},"Unit tests and integration test"),(0,i.kt)("li",{parentName:"ul"},"Tutorials")),(0,i.kt)("p",null,"Total for worker implementation: 30 days"),(0,i.kt)("p",null,"Budget: 1 BTC"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Total Budget: 2 BTC.")))}d.isMDXComponent=!0}}]);