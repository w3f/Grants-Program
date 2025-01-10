"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[38515],{9019:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"applications/bounce-protocol","title":"Bounce Protocol","description":"This document is referenced in the terms and conditions and therefore needs to contain all the required information. Don\'t remove any of the mandatory parts presented in bold letters or as headlines! See the Open Grants Program Process on how to submit a proposal.","source":"@site/applications/bounce-protocol.md","sourceDirName":"applications","slug":"/applications/bounce-protocol","permalink":"/applications/bounce-protocol","draft":false,"unlisted":false,"editUrl":"https://github.com/w3f/Grants-Program/edit/master/applications/bounce-protocol.md","tags":[],"version":"current","frontMatter":{}}');var s=t(74848),r=t(28453);const o={},c="Bounce Protocol",l={},a=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-page_facing_up",level:2},{value:"Overview",id:"overview",level:3},{value:"Ethereum contracts vs Substrate modules",id:"ethereum-contracts-vs-substrate-modules",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-busts_in_silhouette",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-nut_and_bolt",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 \u2014 Implement Substrate Modules and Bounce Chain",id:"milestone-1--implement-substrate-modules-and-bounce-chain",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information \u2795",id:"additional-information-heavy_plus_sign",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"bounce-protocol",children:"Bounce Protocol"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["This document is referenced in the terms and conditions and therefore needs to contain all the required information. Don't remove any of the mandatory parts presented in bold letters or as headlines! See the ",(0,s.jsx)(n.a,{href:"https://github.com/w3f/Open-Grants-Program/blob/master/README_2.md",children:"Open Grants Program Process"})," on how to submit a proposal."]}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Team Name:"})," Bounce"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Payment Address:"})," bc1qwm44hpv8qyvmwpcupqwn4rx52xzt5qr9lremhz"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Status:"})," ",(0,s.jsx)(n.a,{href:"https://github.com/w3f/Open-Grants-Program/pull/159#issuecomment-830110107",children:"Terminated"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"The above combination of your GitHub account submitting the application and payment address will be your unique identifier during the program. Please keep them safe."})}),"\n",(0,s.jsxs)(n.h2,{id:"project-overview-page_facing_up",children:["Project Overview ","\ud83d\udcc4"]}),"\n",(0,s.jsx)(n.h3,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)(n.p,{children:"Bounce is a decentralized auction platform, incorporating liquidity mining, decentralized governance and staking mechanisms. The first principle of Bounce is scarcity of resources, which creates a competitive swap environment."}),"\n",(0,s.jsx)(n.p,{children:"The idea of \u201cswap\u201d originated from Uniswap, where infinite liquidity is provided for participants. While this is a great and concept, Bounce focusses on the opposite scenario instead."}),"\n",(0,s.jsx)(n.p,{children:"Bounce provides a competitive environment, for a limited supply of tokens or other assets like NFT's. The assets can be auctioned off in various ways, such as:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Token sales"}),": Various types of auctions  where a limited amount of tokens are auctioned off with different auction principles and time limits, such as fixed price (fixed swap auction), decreasing price (Dutch auction) or  hidden price (sealed-bid auction)"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"NFT auctions"}),": NFT's are auctioned off with similar auction principles as token sales. However, there is usually a lower number of NFT's (or only a unique piece) for sale."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"We will run Bounce chain as standalone chain first, then join in Kusama/Polkadot network when parachain mechanism is ready."}),"\n",(0,s.jsx)(n.h3,{id:"ethereum-contracts-vs-substrate-modules",children:"Ethereum contracts vs Substrate modules"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Number"}),(0,s.jsx)(n.th,{children:"Ethereum contracts"}),(0,s.jsx)(n.th,{children:"Substrate modules"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"1."}),(0,s.jsx)(n.td,{children:"high gas fee"}),(0,s.jsx)(n.td,{children:"low tx fee"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"2."}),(0,s.jsx)(n.td,{children:"hard to upgrade"}),(0,s.jsx)(n.td,{children:"easy and seamless module upgrade"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"3."}),(0,s.jsx)(n.td,{children:"poor governance"}),(0,s.jsx)(n.td,{children:"strong governance"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"4."}),(0,s.jsx)(n.td,{children:"payout manually by user"}),(0,s.jsx)(n.td,{children:"payout automatically by call on_finalize() or offchain_worker()"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"5."}),(0,s.jsx)(n.td,{children:"hard to prevent scam auction pools"}),(0,s.jsx)(n.td,{children:"introduce social module to prevent scam auction pools"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"project-details",children:"Project Details"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["An overview of the technology stack to be used","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Blockchain"}),": Rust/Substrate/Cumulus/Docker"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Frontend"}),": Javascript/React/polkadot.js"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Documentation of core components, protocols, architecture etc. to be deployed","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Fixed Swap Auction"}),": ",(0,s.jsx)(n.a,{href:"https://docs.bounce.finance/bounce-auction-types/fixed-swap-auction",children:"https://docs.bounce.finance/bounce-auction-types/fixed-swap-auction"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Sealed Bid Auction"}),": ",(0,s.jsx)(n.a,{href:"https://docs.bounce.finance/bounce-auction-types/sealed-bid-auction",children:"https://docs.bounce.finance/bounce-auction-types/sealed-bid-auction"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Dutch Auction"}),": ",(0,s.jsx)(n.a,{href:"https://docs.bounce.finance/bounce-auction-types/dutch-auction",children:"https://docs.bounce.finance/bounce-auction-types/dutch-auction"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["PoC/MVP or other relevant prior work or research on the topic","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Our products have launched on Ethereum and Binance Smart Chain: ",(0,s.jsx)(n.a,{href:"https://app.bounce.finance/",children:"https://app.bounce.finance/"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"ecosystem-fit",children:"Ecosystem Fit"}),"\n",(0,s.jsx)(n.p,{children:"Bounce is currently only viable decentralized auction protocol that is live on Ethereum and Binance Smart Chain"}),"\n",(0,s.jsxs)(n.h2,{id:"team-busts_in_silhouette",children:["Team ","\ud83d\udc65"]}),"\n",(0,s.jsx)(n.h3,{id:"team-members",children:"Team members"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Jack Lu"}),"\n",(0,s.jsx)(n.li,{children:"seiya1192"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"contact",children:"Contact"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Contact Name:"})," Jack Lu"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Contact Email:"})," ",(0,s.jsx)(n.a,{href:"mailto:jack@bounce.community",children:"jack@bounce.community"})]}),"\n",(0,s.jsxs)(n.li,{children:["Website: ",(0,s.jsx)(n.a,{href:"https://bounce.finance",children:"https://bounce.finance"})]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"legal-structure",children:"Legal Structure"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Registered Address:"})," Three Embarcadero Center, Promenade Level Suite P5, San Francisco, CA 94111"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Registered Legal Entity:"})," Bounce DAO Limited"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"teams-experience",children:"Team's experience"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Jack Lu:"}),' Based in San Francisco, Haozheng "Jack" Lu is the investment director at NGC and founder of Bounce Finance. Jack specializes in researching blockchain mechanisms for generating decentralized consensus and real-world implications provided by blockchain. Jack\u2019s invaluable presence at the company is defined by his abilities to analyze economic and social models behind projects, while also exploring the game theoretical topics including incentive provisions, industrial organization and market microstructure on blockchain and smart contract. Jack is an Economics support to NGC portfolio projects , helping with research in economics of information and economics of cloud computing.']}),"\n",(0,s.jsx)(n.h3,{id:"team-code-repos",children:"Team Code Repos"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/bouncefinance/bounce-network",children:"https://github.com/bouncefinance/bounce-network"})}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"development-roadmap-nut_and_bolt",children:["Development Roadmap ","\ud83d\udd29"]}),"\n",(0,s.jsx)(n.h3,{id:"overview-1",children:"Overview"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Total Estimated Duration:"})," 2 months"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Full-time equivalent (FTE):"}),"  2 FTE"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Total Costs:"})," 0.9 BTC"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"milestone-1--implement-substrate-modules-and-bounce-chain",children:"Milestone 1 \u2014 Implement Substrate Modules and Bounce Chain"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Estimated Duration:"})," 2 month"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"FTE:"}),"  2"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Costs:"})," 0.9 BTC"]}),"\n"]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Number"}),(0,s.jsx)(n.th,{children:"Deliverable"}),(0,s.jsx)(n.th,{children:"Specification"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"0a."}),(0,s.jsx)(n.td,{children:"License"}),(0,s.jsx)(n.td,{children:"Apache 2.0"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"0b."}),(0,s.jsx)(n.td,{children:"Documentation"}),(0,s.jsx)(n.td,{children:"We will provide both inline documentation of the code and a basic tutorial that explains how a user can (for example) spin up one of our Substrate nodes. Once the node is up, it will be possible to send test transactions that will show how the new functionality works."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"0c."}),(0,s.jsx)(n.td,{children:"Testing Guide"}),(0,s.jsx)(n.td,{children:"The code will have unit-test coverage (min. 70%) to ensure functionality and robustness. In the guide we will describe how to run these tests"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"0d."}),(0,s.jsx)(n.td,{children:"Article/Tutorial"}),(0,s.jsx)(n.td,{children:"We will write an article or tutorial that explains the work done as part of the grant."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"1."}),(0,s.jsx)(n.td,{children:"Substrate module: fixed-swap-auction"}),(0,s.jsx)(n.td,{children:"Implement the core function of fixed swap auction"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"2."}),(0,s.jsx)(n.td,{children:"Substrate module: sealed-bid-auction"}),(0,s.jsx)(n.td,{children:"Implement the core function of sealed bid auction"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"3."}),(0,s.jsx)(n.td,{children:"Substrate module: dutch-auction"}),(0,s.jsx)(n.td,{children:"Implement the core function of dutch auction"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"4."}),(0,s.jsx)(n.td,{children:"Substrate module: english-auction"}),(0,s.jsx)(n.td,{children:"Implement the core function of english auction"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"5."}),(0,s.jsx)(n.td,{children:"Substrate module: nft"}),(0,s.jsx)(n.td,{children:"Implement an ERC1155-like asset module"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"6."}),(0,s.jsx)(n.td,{children:"Bounce chain"}),(0,s.jsx)(n.td,{children:"Implement a blockchain based on Substrate and include ERC20 & NFT asset and auctions modules"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"7."}),(0,s.jsx)(n.td,{children:"Docker"}),(0,s.jsx)(n.td,{children:"We will provide a dockerfile to demonstrate the full functionality of our chain"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"future-plans",children:"Future Plans"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"We will integrate EVM module into Bounce Chain to support Ethereum ERC20 tokens."}),"\n",(0,s.jsx)(n.li,{children:"We will implement more type of auctions like lottery auction, social verified auction, etc."}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"additional-information-heavy_plus_sign",children:["Additional Information ","\u2795"]}),"\n",(0,s.jsx)(n.p,{children:"Possible additional information to include:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"What work has been done so far?"}),"\n",(0,s.jsx)(n.p,{children:"Bounce dApp product on Ethereum and Binance Smart Chain."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Are there are any teams who have already contributed (financially) to the project?"}),"\n",(0,s.jsx)(n.p,{children:"No"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Have you applied for other grants so far?"}),"\n",(0,s.jsx)(n.p,{children:"No"}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>c});var i=t(96540);const s={},r=i.createContext(s);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);