"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[89453],{28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>a});var s=t(96540);const i={},r=s.createContext(i);function l(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(r.Provider,{value:n},e.children)}},37024:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"applications/cross-chain-wallet","title":"Cross-chain Wallet - XCW","description":"- Team Name: Blockcoders","source":"@site/applications/cross-chain-wallet.md","sourceDirName":"applications","slug":"/applications/cross-chain-wallet","permalink":"/applications/cross-chain-wallet","draft":false,"unlisted":false,"editUrl":"https://github.com/w3f/Grants-Program/edit/master/applications/cross-chain-wallet.md","tags":[],"version":"current","frontMatter":{}}');var i=t(74848),r=t(28453);const l={},a="Cross-chain Wallet - XCW",o={},c=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-page_facing_up",level:2},{value:"Goals",id:"goals",level:3},{value:"Security",id:"security",level:3},{value:"Specifications",id:"specifications",level:3},{value:"Main functionalities",id:"main-functionalities",level:3},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-busts_in_silhouette",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Open Source Projects",id:"open-source-projects",level:4},{value:"Web3 Foundation",id:"web3-foundation",level:4},{value:"Near",id:"near",level:4},{value:"Polkadot Hackathon (Smart contracts - NFTs - Moonbeam)",id:"polkadot-hackathon-smart-contracts---nfts---moonbeam",level:4},{value:"Harmony",id:"harmony",level:4},{value:"Athena DAO",id:"athena-dao",level:4},{value:"Team LinkedIn Profiles (if available)",id:"team-linkedin-profiles-if-available",level:3},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-nut_and_bolt",level:2},{value:"Overview",id:"overview",level:3},{value:"Milestone 1 - Wallet extension",id:"milestone-1---wallet-extension",level:3},{value:"Milestone 2 - Support for WASM and EVM accounts",id:"milestone-2---support-for-wasm-and-evm-accounts",level:3},{value:"Milestone 3 - Transfer assets between chains",id:"milestone-3---transfer-assets-between-chains",level:3},{value:"Milestone 4 - Improve UX/UI",id:"milestone-4---improve-uxui",level:3},{value:"Maintaining the wallet",id:"maintaining-the-wallet",level:2},{value:"User Interface",id:"user-interface",level:4},{value:"Future Plans",id:"future-plans",level:2}];function d(e){const n={a:"a",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"cross-chain-wallet---xcw",children:"Cross-chain Wallet - XCW"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Team Name:"})," Blockcoders"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Payment Address:"})," Ethereum (USDT/USDC/DAI) 0x1Ff29471bf02399A5B6Bd096A13d43982dFac357"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsxs)(n.strong,{children:[(0,i.jsx)(n.a,{href:"https://github.com/w3f/Grants-Program/tree/master#level_slider-levels",children:"Level"}),":"]})," 3"]}),"\n"]}),"\n",(0,i.jsxs)(n.h2,{id:"project-overview-page_facing_up",children:["Project Overview ","\ud83d\udcc4"]}),"\n",(0,i.jsx)(n.p,{children:"Blockcoders is proud to propose the development of a revolutionary cross-chain wallet, capable of importing and creating both EVM and WASM accounts. This wallet will make it easy for users to manage and transfer tokens between the two chains. Built with the user experience in mind, the wallet will feature the same sleek and intuitive design as Astar UI. The term cross-chain in this case refers to the ability to transfer tokens between parachains for both EVM and WASM.\nWe plan to give constant support to this wallet and open Telegram and Discord channels to have a better feedback from the users, solve issues and add new functionalities."}),"\n",(0,i.jsx)(n.h3,{id:"goals",children:"Goals"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Develop a user-friendly wallet that simplifies the management of EVM and WASM accounts in one place."}),"\n",(0,i.jsx)(n.li,{children:"Enable seamless and secure asset transfer between users accounts on different chains."}),"\n",(0,i.jsx)(n.li,{children:"Provide a safe and intuitive platform for users to sign messages and interact with dApps."}),"\n",(0,i.jsx)(n.li,{children:"Enhance transparency and accountability by displaying transaction details and links to scanner/explorer pages."}),"\n",(0,i.jsx)(n.li,{children:"Maintain the wallet's decentralization and open-source nature, ensuring its trustworthiness and security."}),"\n",(0,i.jsx)(n.li,{children:"Aim to cover more than 90% of the wallet's main functionalities to provide a comprehensive user experience."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"security",children:"Security"}),"\n",(0,i.jsx)(n.p,{children:"The wallet will implement the Keyring concept, which is the core of the secret storing and account management system in MetaMask. This approach ensures that private keys are stored locally on users' devices using browser built-in storage capabilities such as IndexedDB or WebSQL, making them accessible only to the user. Additionally, we will use encryption techniques similar to MetaMask, such as PBKDF2 iteration and AES-GCM mode, to provide an extra layer of security for the private keys. This wallet will also implement the same feature that Polkadot's extension has, which allows users to see the availability of different parachains before they make a transfer. This feature will provide users with an added layer of security and peace of mind, as they can ensure that their transfer will go through smoothly."}),"\n",(0,i.jsx)(n.h3,{id:"specifications",children:"Specifications"}),"\n",(0,i.jsx)(n.p,{children:"In a first approach, we will be using the following technologies: React, Typescript, Polkadot API and Ethers.js. The supported browsers will be: Chrome and Firefox. The default networks will be: Astar, Shiden, Shibuya (testnet), Moonbeam, Moonriver, Moonbase Alpha (testnet), Polkadot and Kusama. The default tokens will be: ASTR, SDN, SBY, GLMR, MOVR, DEV, DOT and KSM."}),"\n",(0,i.jsx)(n.h3,{id:"main-functionalities",children:"Main functionalities"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Allow users to easily create and import EVM and WASM accounts."}),"\n",(0,i.jsx)(n.li,{children:"Provide a clear and intuitive overview of users' balances for both EVM and WASM accounts."}),"\n",(0,i.jsx)(n.li,{children:"Enable the transfer of assets between EVM accounts, WASM accounts, and between EVM and WASM accounts."}),"\n",(0,i.jsx)(n.li,{children:"Allow users to sign messages and execute calls and transactions on custom smart contracts."}),"\n",(0,i.jsx)(n.li,{children:"Provide links to explorer pages to enhance transparency and accountability."}),"\n",(0,i.jsx)(n.li,{children:"Give users the flexibility to add custom networks and tokens to the wallet."}),"\n",(0,i.jsx)(n.li,{children:"Implement the XCM format to enable cross-chain functionality, making it easy for users to transfer assets between parachains."}),"\n",(0,i.jsx)(n.li,{children:"Design the wallet using React and follow the look and feel of Astar UI, with the option to open in full-screen mode."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The cross-chain functionality will be implemented using the XCM format, enabling users to easily transfer assets between EVM and WASM parachains. The XCM implementation will be simplified to provide a seamless user experience. The user interface will be built using React, and the design will be inspired by the look and feel of Astar UI. The extension will have the option to open in full-screen mode for a more immersive experience."}),"\n",(0,i.jsx)(n.h3,{id:"ecosystem-fit",children:"Ecosystem Fit"}),"\n",(0,i.jsx)(n.p,{children:"Help us locate your project in the Polkadot/Substrate/Kusama landscape and what problems it tries to solve by answering each of these questions:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Where and how does your project fit into the ecosystem?","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"This wallet is a perfect match for the ecosystem as it provides a solution to the problem of having to use multiple wallets to interact with different types of accounts such as EVM and WASM."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Who is your target audience (parachain/dapp/wallet/UI developers, designers, your own user base, some dapp's userbase, yourself)?","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The target audience is anyone that interacts with the ecosystem using a wallet. From developers to final users."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["What need(s) does your project meet?","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"It provides a solution that today it's resolved by using multiple wallets/applications."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"There aren't any other wallets that support both EVM and WASM accounts and the ability to send assets between them."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.h2,{id:"team-busts_in_silhouette",children:["Team ","\ud83d\udc65"]}),"\n",(0,i.jsx)(n.h3,{id:"team-members",children:"Team members"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Jose Ramirez"}),"\n",(0,i.jsx)(n.li,{children:"Fernando Sirni"}),"\n",(0,i.jsx)(n.li,{children:"Ruben Gutierrez"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"contact",children:"Contact"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Contact Name:"})," Jose Ramirez"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Contact Email:"})," ",(0,i.jsx)(n.a,{href:"mailto:jose@blockcoders.io",children:"jose@blockcoders.io"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Website:"})," ",(0,i.jsx)(n.a,{href:"http://blockcoders.io/",children:"http://blockcoders.io/"})]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"legal-structure",children:"Legal Structure"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Registered Address:"})," Bouchard 705, Buenos Aires, Argentina"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Registered Legal Entity:"})," Blockcoders"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"teams-experience",children:"Team's experience"}),"\n",(0,i.jsx)(n.p,{children:"We are Blockcoders, a self-managed team building on the blockchain-based in LATAM. We enjoy working on decentralized protocols and blockchains. We put a lot of effort into developing compelling user experiences that will help your project appeal to a constantly expanding market."}),"\n",(0,i.jsx)(n.p,{children:"Why Blockcoders? We are a team of engineers with over ten years of experience building world-class applications. We assist engineering teams in scaling fast by focusing on developer tooling, SDKs, and libraries."}),"\n",(0,i.jsx)(n.p,{children:"We have experience with many different blockchains, including OL, Harmony, Aptos, Polkadot, and NEAR. With live projects focused on partnering with you to create thoughtful, innovative applications that can support its community's entire lifecycle from awareness through post-purchase behaviors."}),"\n",(0,i.jsx)(n.h3,{id:"team-code-repos",children:"Team Code Repos"}),"\n",(0,i.jsx)(n.h4,{id:"open-source-projects",children:"Open Source Projects"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/blockcoders/nestjs-ethers",children:"https://github.com/blockcoders/nestjs-ethers"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/blockcoders/nestjs-websocket",children:"https://github.com/blockcoders/nestjs-websocket"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/blockcoders/nestjs-library-template",children:"https://github.com/blockcoders/nestjs-library-template"})}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"web3-foundation",children:"Web3 Foundation"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/blockcoders/ink-substrate-explorer-api",children:"https://github.com/blockcoders/ink-substrate-explorer-api"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/blockcoders/ink-substrate-explorer-frontend",children:"https://github.com/blockcoders/ink-substrate-explorer-frontend"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/blockcoders/xcm-sdk",children:"https://github.com/blockcoders/xcm-sdk"})}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"near",children:"Near"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/blockcoders/near-rpc-providers",children:"https://github.com/blockcoders/near-rpc-providers"})}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"polkadot-hackathon-smart-contracts---nfts---moonbeam",children:"Polkadot Hackathon (Smart contracts - NFTs - Moonbeam)"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/blockcoders/dotocracy-frontend",children:"https://github.com/blockcoders/dotocracy-frontend"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/blockcoders/dotocracy-contracts",children:"https://github.com/blockcoders/dotocracy-contracts"})}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"harmony",children:"Harmony"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/blockcoders/harmony-marketplace-sdk",children:"https://github.com/blockcoders/harmony-marketplace-sdk"})}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"athena-dao",children:"Athena DAO"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/athenafarm",children:"https://github.com/athenafarm"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/athenafarm/athena-vault-contracts",children:"https://github.com/athenafarm/athena-vault-contracts"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/athenafarm/athena-sdk",children:"https://github.com/athenafarm/athena-sdk"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/athenafarm/athena-vault-frontend",children:"https://github.com/athenafarm/athena-vault-frontend"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/blockcoders",children:"https://github.com/blockcoders"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/0xslipk",children:"https://github.com/0xslipk"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/fersirni",children:"https://github.com/fersirni"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/RubenGutierrezC",children:"https://github.com/RubenGutierrezC"})}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"team-linkedin-profiles-if-available",children:"Team LinkedIn Profiles (if available)"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://www.linkedin.com/in/jarcodallo/",children:"https://www.linkedin.com/in/jarcodallo/"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://www.linkedin.com/in/fernando-sirni-1931ba122/",children:"https://www.linkedin.com/in/fernando-sirni-1931ba122/"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://www.linkedin.com/in/rubengutierrezc/",children:"https://www.linkedin.com/in/rubengutierrezc/"})}),"\n"]}),"\n",(0,i.jsxs)(n.h2,{id:"development-roadmap-nut_and_bolt",children:["Development Roadmap ","\ud83d\udd29"]}),"\n",(0,i.jsx)(n.h3,{id:"overview",children:"Overview"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Total Estimated Duration:"})," 6 month"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Full-Time Equivalent (FTE):"}),"  3"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Total Costs:"})," 64000 USD"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"milestone-1---wallet-extension",children:"Milestone 1 - Wallet extension"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Estimated duration:"})," 2 month"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"FTE:"}),"  3"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Costs:"})," 24,000 USD"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Create a wallet extension that can be installed on browsers such as Chrome, Firefox, etc. This milestone will include the following features:"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Number"}),(0,i.jsx)(n.th,{children:"Deliverable"}),(0,i.jsx)(n.th,{children:"Specification"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"0a."}),(0,i.jsx)(n.td,{children:"License"}),(0,i.jsx)(n.td,{children:"MIT"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"0b."}),(0,i.jsx)(n.td,{children:"Documentation"}),(0,i.jsxs)(n.td,{children:["We will provide both ",(0,i.jsx)(n.strong,{children:"english"})," and ",(0,i.jsx)(n.strong,{children:"spanish"})," versions of the documentation. This will cover step by step how to configure the environment and send xcm messages."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"0c."}),(0,i.jsx)(n.td,{children:"Testing Guide"}),(0,i.jsx)(n.td,{children:"Unit test and end to end tests will cover the core functions to ensure everything works as expected. The documentation will have an example on how to run these tests."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"0d."}),(0,i.jsx)(n.td,{children:"Docker"}),(0,i.jsx)(n.td,{children:"A Dockerfile will be provided that will be able to start the node and run tests for all the functionality delivered within this milestone."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"1."}),(0,i.jsx)(n.td,{children:"Chrome/Firefox Extension"}),(0,i.jsx)(n.td,{children:"Develop a browser extension that can be installed on Chrome, Firefox, and other popular browsers."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"2."}),(0,i.jsx)(n.td,{children:"EVM/WASM accounts"}),(0,i.jsx)(n.td,{children:"Implement the ability to create and import EVM and WASM accounts."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"3."}),(0,i.jsx)(n.td,{children:"Switch between networks"}),(0,i.jsx)(n.td,{children:"Allow users to switch between networks, such as Astar and Moonbeam, with ease."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"4."}),(0,i.jsx)(n.td,{children:"Display accounts"}),(0,i.jsx)(n.td,{children:"Display EVM and WASM accounts in the same place for a clear and intuitive overview."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"5."}),(0,i.jsx)(n.td,{children:"Balances"}),(0,i.jsx)(n.td,{children:"Show users their balances for both EVM and WASM accounts."})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"milestone-2---support-for-wasm-and-evm-accounts",children:"Milestone 2 - Support for WASM and EVM accounts"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Estimated duration:"})," 1 month"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"FTE:"}),"  3"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Costs:"})," 12,000 USD"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The main focus on this milestone will be to allow users to transfer assets between their own accounts. This milestone will include the following features:"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Number"}),(0,i.jsx)(n.th,{children:"Deliverable"}),(0,i.jsx)(n.th,{children:"Specification"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"0a."}),(0,i.jsx)(n.td,{children:"License"}),(0,i.jsx)(n.td,{children:"MIT"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"0b."}),(0,i.jsx)(n.td,{children:"Documentation"}),(0,i.jsxs)(n.td,{children:["We will provide both ",(0,i.jsx)(n.strong,{children:"english"})," and ",(0,i.jsx)(n.strong,{children:"spanish"})," versions of the documentation. This will cover step by step how to send all kind of xcm messages."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"0c."}),(0,i.jsx)(n.td,{children:"Testing Guide"}),(0,i.jsx)(n.td,{children:"Unit test and end to end tests will cover the core functions to ensure everything works as expected. The documentation will have an example on how to run these tests."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"0d."}),(0,i.jsx)(n.td,{children:"Docker"}),(0,i.jsx)(n.td,{children:"A Dockerfile will be provided that will be able to start the node and run tests for all the functionality delivered within this milestone."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"1."}),(0,i.jsx)(n.td,{children:"Custom tokens"}),(0,i.jsx)(n.td,{children:"Enable users to add custom tokens and networks/chains to the wallet."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"2."}),(0,i.jsx)(n.td,{children:"Mesasges EVM - WASM"}),(0,i.jsx)(n.td,{children:"Provide the ability to sign messages for EVM and WASM accounts."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"3."}),(0,i.jsx)(n.td,{children:"Transfer EVM - WASM"}),(0,i.jsx)(n.td,{children:"Allow users to transfer assets between their own EVM and WASM accounts on the same chain."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"4."}),(0,i.jsx)(n.td,{children:"Transaction history"}),(0,i.jsx)(n.td,{children:"Show users their transaction history for both EVM and WASM accounts."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"5."}),(0,i.jsx)(n.td,{children:"Explorer link"}),(0,i.jsx)(n.td,{children:"Provide links to explorer pages for enhanced transparency and accountability."})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"milestone-3---transfer-assets-between-chains",children:"Milestone 3 - Transfer assets between chains"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Estimated duration:"})," 2 month"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"FTE:"}),"  3"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Costs:"})," 24,000 USD"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Milestone number 3 will focus on the transfer of assets between chains. This milestone will include the following features:"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Number"}),(0,i.jsx)(n.th,{children:"Deliverable"}),(0,i.jsx)(n.th,{children:"Specification"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"0a."}),(0,i.jsx)(n.td,{children:"License"}),(0,i.jsx)(n.td,{children:"MIT"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"0b."}),(0,i.jsx)(n.td,{children:"Documentation"}),(0,i.jsxs)(n.td,{children:["We will provide both ",(0,i.jsx)(n.strong,{children:"english"})," and ",(0,i.jsx)(n.strong,{children:"spanish"})," versions of the documentation. This will cover step by step how to send all kind of xcm messages."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"0c."}),(0,i.jsx)(n.td,{children:"Testing Guide"}),(0,i.jsx)(n.td,{children:"Unit test and end to end tests will cover the core functions to ensure everything works as expected. The documentation will have an example on how to run these tests."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"0d."}),(0,i.jsx)(n.td,{children:"Docker"}),(0,i.jsx)(n.td,{children:"A Dockerfile will be provided that will be able to start the node and run tests for all the functionality delivered within this milestone."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"1."}),(0,i.jsx)(n.td,{children:"XCM/XVM standard for transfers"}),(0,i.jsx)(n.td,{children:"Implement the XCM/XVM standard to enable the transfer of assets between EVM and WASM accounts on different chains."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"2."}),(0,i.jsx)(n.td,{children:"Call to custom smart contracts"}),(0,i.jsx)(n.td,{children:"Provide the ability to call custom smart contracts for both EVM and WASM accounts."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"3."}),(0,i.jsx)(n.td,{children:"Transactions to custom smart contracts"}),(0,i.jsx)(n.td,{children:"Enable users to execute transactions on custom smart contracts for both EVM and WASM."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"4."}),(0,i.jsx)(n.td,{children:"Open Beta"}),(0,i.jsx)(n.td,{children:"Create an open Beta of the wallet for Moonbeam and Astar users to test it (with both mainnets and testnets available). Telegram and Discord channels will be created for the beta that will be announced on Twitter."})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"milestone-4---improve-uxui",children:"Milestone 4 - Improve UX/UI"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Estimated duration:"})," 1 month"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"FTE:"}),"  1"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Costs:"})," 4,000 USD"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The last milestone will focus on improving the UX/UI of the wallet. This milestone will include the following features:"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Number"}),(0,i.jsx)(n.th,{children:"Deliverable"}),(0,i.jsx)(n.th,{children:"Specification"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"0a."}),(0,i.jsx)(n.td,{children:"License"}),(0,i.jsx)(n.td,{children:"MIT"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"0b."}),(0,i.jsx)(n.td,{children:"Documentation"}),(0,i.jsxs)(n.td,{children:["We will provide both ",(0,i.jsx)(n.strong,{children:"english"})," and ",(0,i.jsx)(n.strong,{children:"spanish"})," versions of the documentation. This will cover step by step how to send all kind of xcm messages."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"0c."}),(0,i.jsx)(n.td,{children:"Testing Guide"}),(0,i.jsx)(n.td,{children:"Unit test and end to end tests will cover the core functions to ensure everything works as expected. The documentation will have an example on how to run these tests."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"0d."}),(0,i.jsx)(n.td,{children:"Docker"}),(0,i.jsx)(n.td,{children:"A Dockerfile will be provided that will be able to start the node and run tests for all the functionality delivered within this milestone."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"0e."}),(0,i.jsx)(n.td,{children:"Article"}),(0,i.jsx)(n.td,{children:"We will post an article on Twitter and Reddit for both english and spanish speakers communities."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"1."}),(0,i.jsx)(n.td,{children:"Polish UX experience"}),(0,i.jsx)(n.td,{children:'Enhance wallet design and user experience. As the previous milestones will focus on resolving the features from a technical perspective, but not in the "best looking" or "easiest" way, this milestone will be focused on ensuring that the features are easy to use and the user experience is smooth. All suggestions on the Telegram and Discord channels created for the Beta will be considered here to improve UX/UI.'})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"2."}),(0,i.jsx)(n.td,{children:"Landing page"}),(0,i.jsx)(n.td,{children:"Develop a landing page and documentation for the wallet."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"3."}),(0,i.jsx)(n.td,{children:"Video Tutorial"}),(0,i.jsx)(n.td,{children:"Create a video tutorial to help users learn how to use the wallet."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"4."}),(0,i.jsx)(n.td,{children:"End to End Testing"}),(0,i.jsx)(n.td,{children:"Test the wallet on different browsers and devices to ensure compatibility and stability."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"5."}),(0,i.jsx)(n.td,{children:"QR code"}),(0,i.jsx)(n.td,{children:"Add a QR code feature to display the address of users accounts."})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"maintaining-the-wallet",children:"Maintaining the wallet"}),"\n",(0,i.jsx)(n.p,{children:"Once the wallet is released, we will continue to maintain it for at least 2 years. This will include:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Bug fixes"}),"\n",(0,i.jsx)(n.li,{children:"Improvements to the UX/UI"}),"\n",(0,i.jsx)(n.li,{children:"Support for new features"}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"user-interface",children:"User Interface"}),"\n",(0,i.jsxs)(n.p,{children:["The wallet interface will be based on this ",(0,i.jsx)(n.a,{href:"https://www.figma.com/file/EawnVPOMgeTLUHaMfUNaGw/Wallet-XCM?node-id=0%3A1",children:"mock-up"}),":"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://cdn.discordapp.com/attachments/892735396847419452/1062025103300362280/Wallet-presentation.png",alt:"XCM Wallet"})}),"\n",(0,i.jsx)(n.h2,{id:"future-plans",children:"Future Plans"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Add support for popular hardware wallets, such as Ledger and Trezor, to provide users with additional security and flexibility"}),"\n",(0,i.jsx)(n.li,{children:"Add support to move assets between Substrate-based blockchains and other EVM blockchains. This may be done using a bridge that can lock-mint and unlock-burn tokens."}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}}}]);