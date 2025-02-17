"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[68289],{28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var i=n(96540);const o={},s=i.createContext(o);function r(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:t},e.children)}},89575:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"applications/konomi","title":"Konomi","description":"This document is referenced in the terms and conditions and therefore needs to contain all the required information. Don\'t remove any of the mandatory parts presented in bold letters or as headlines! See the Open Grants Program Process on how to submit a proposal.","source":"@site/applications/konomi.md","sourceDirName":"applications","slug":"/applications/konomi","permalink":"/applications/konomi","draft":false,"unlisted":false,"editUrl":"https://github.com/w3f/Grants-Program/edit/master/applications/konomi.md","tags":[],"version":"current","frontMatter":{}}');var o=n(74848),s=n(28453);const r={},a="Konomi",l={},d=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-page_facing_up",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Components",id:"components",level:4},{value:"Details of the lending module",id:"details-of-the-lending-module",level:4},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-busts_in_silhouette",level:2},{value:"Team members",id:"team-members",level:3},{value:"Team Website",id:"team-website",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles",id:"team-linkedin-profiles",level:3},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-nut_and_bolt",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 Pool Lending Module",id:"milestone-1-pool-lending-module",level:3},{value:"Community engagement",id:"community-engagement",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information \u2795",id:"additional-information-heavy_plus_sign",level:2}];function c(e){const t={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"konomi",children:"Konomi"})}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsxs)(t.p,{children:["This document is referenced in the terms and conditions and therefore needs to contain all the required information. Don't remove any of the mandatory parts presented in bold letters or as headlines! See the ",(0,o.jsx)(t.a,{href:"https://github.com/w3f/Open-Grants-Program/blob/master/README_2.md",children:"Open Grants Program Process"})," on how to submit a proposal."]}),"\n"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Proposer:"})," debbiecho"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Payment Address:"})," BTC payment address. 16eX23C1T4Nj4D8ceaBTWqHBf6cYM4o8fw"]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.em,{children:"The above combination of your GitHub account and payment address will be your unique identifier during the program. Please keep them safe."})}),"\n",(0,o.jsxs)(t.h2,{id:"project-overview-page_facing_up",children:["Project Overview ","\ud83d\udcc4"]}),"\n",(0,o.jsx)(t.h3,{id:"overview",children:"Overview"}),"\n",(0,o.jsx)(t.p,{children:"Konomi is a decentralised liquidity and money market protocol for cross-chain crypto assets. Using Substrate as the development framework, the network aims to provide money markets for assets in the Polkadot ecosystem. Users could borrow and lend assets, trade and access liquidity products for DOTs through the protocol. Konomi also issues its native network token in order to kick start liquidity and decentralised governance for its chain. We will first set up a standalone testnet, and then participate in Kusama parachain auction and subsequently Polkadot parachain auction."}),"\n",(0,o.jsx)(t.p,{children:"The motivation behind setting up the project is that there is currently limited live products for the lending infrastructure on Polkadot and that it is an important part for the ecosystem as a whole. Also, we think that the parachain design offered more room and better infrastructure to develop DeFi applications \u2014 it is not restricted to accepting ETH as the default currency."}),"\n",(0,o.jsx)(t.p,{children:"We believe that Polkadot will become the default base layer protocol for decentralised applications and crypto assets. Also, due to the design of parachain and parathread auction, there is opportunity to be captured in designing new token economics as compared to the existing products on Ethereum."}),"\n",(0,o.jsx)(t.h3,{id:"project-details",children:"Project Details"}),"\n",(0,o.jsx)(t.p,{children:"The project aims to provide the decentralised money market protocol for other assets issued on Polkadot parachains. The protocol is pool-based and it would support assets on parachains when the network is live. Users could deposit asset to the lending pool and earn interest based on the demand side on the platform. Similarly, the protocol also supports over-collateralised debt positions for users that want to borrow assets. Price data will be ultimately acquired through using off-chain workers to ensure that the lending pool is always secure from liquidation risks."}),"\n",(0,o.jsxs)(t.p,{children:["This is the system work-flow diagram.\n",(0,o.jsx)(t.strong,{children:(0,o.jsx)(t.img,{src:"https://lh5.googleusercontent.com/M9QuAjmdo0lBj8Nx2D5BHS_Qtjga_2NCe7V_ERUFTzyesPFixDIVFhhcQpB6FyA2UceKO0yP4pxI4iBC2GGOmHvBezi9J5XcHCLSsySfprLfFutLaVV7C8Ku0NJGzhjfqYfvtB56",alt:""})})]}),"\n",(0,o.jsx)(t.p,{children:"Technology Stack:\nNode: Substrate, (Cumulus)\nChain metric: Prometheus and Grafana\nFrontend: React with Polkadot-js\nCI: Travis"}),"\n",(0,o.jsx)(t.h4,{id:"components",children:"Components"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Asset Module: Multi-asset to be used in AMM and Lending Module."}),"\n"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"AMM Module: Uniswap like 50-50 swap pools that user can swap, add liquidity and remove liquidity."}),"\n",(0,o.jsx)(t.li,{children:"Pool Lending Module: This is the key and unique module Konomi is going to build in this grant application. This module enables users to get access to a varieties of supported pools. They may deposit collaterals into these pools and gain lending interest. If they have enough collaterals, they may also borrow  other assets with some interest fees. Price feeds (by off-chain worker) will ensure that the debts are in healthy condition, otherwise a liquidation process is triggered."}),"\n",(0,o.jsx)(t.li,{children:"Governance Module: DAO to change parameters of the above modules."}),"\n",(0,o.jsx)(t.li,{children:"Price Oracle Module: Price feed of the supported assets to keep the system in a healthy status."}),"\n"]}),"\n",(0,o.jsx)(t.h4,{id:"details-of-the-lending-module",children:"Details of the lending module"}),"\n",(0,o.jsx)(t.p,{children:"The lending module has the following public extrinsic api for user"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-rust",children:"fn supply(origin, asset_id: T::AssetId, amount: T::Balance) -> Result;\n\n// withdraw supplied assets\nfn withdraw(origin, asset_id: T::AssetId, amount: T::Balance) -> Result;\n\nfn borrow(origin, asset_id: T::AssetId, amount: T::Balance) -> Result;\n\n //repay borrowed assets with interest\nfn repay(origin, asset_id: T::AssetId, amount: T::Balance) -> Result;\n"})}),"\n",(0,o.jsx)(t.p,{children:"And also another public extrinsic api for arbitrager"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-rust",children:"// repay for target_user pay_asset_amount of pay_asset_id asset, get get_asset_id asset with bonus.\nfn liquidate(origin, target_user: T::AccountId, pay_asset_id: T::AssetId, get_asset_id: T::AssetId, pay_asset_amount: T::Balance) -> Result;\n"})}),"\n",(0,o.jsx)(t.p,{children:"The system has the following global parameters"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"liquidation_threshold: When the user's effective collateral rate is below this, arbitrager may trigger liquidation process\n\nsupply_threshold: When user borrow some asset, he/she need to keep the collateral rate above this. \n"})}),"\n",(0,o.jsx)(t.p,{children:"The key of the lending module are a set of pools (mapping from asset id). Each pool has the following fields:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"enabled: a boolean to show if this pool (=asset) is supported. This will be later determined by governance.\n\ncan_be_collateral: a boolean to show if this asset can be used as collateral.\n\ncollateral_factor: when used as collateral, highly volatile asset may be treated less than it's current market value. This is the factor.\n\nasset: asset of the pool\n\nsupply: total user supply of the pool (that can be borrowed)\n\ndebt: total user debt of the pool (that is borrowed)\nfactor\n\nliquidation_bonus: when liquidating this pool, the bonus of arbitrager can earn.\n\ntotal_supply_index: used to calculate accumulated interest. See below.\n\ntotal_debt_index: used to calculate accumulated interest. See below.\n\nlast_update_time: timestamp of last update to the pool.\n"})}),"\n",(0,o.jsx)(t.p,{children:"Whenever an asset is supplied or borrowed, its supply and debt index will be updated according to the cumulated interest since the last supply or borrow action."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"total_supply_index = total_supply_index * (1+supply_interest_rate) * time_passed;\ntotal_debt_index = total_debt_index * (1+debt_interest_rate) * time_passed;\n"})}),"\n",(0,o.jsx)(t.p,{children:"To track user's supply and debt considering interest, we use the following fields"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"amount: amount of the supply/debt\n\nindex: used to calculate user's accumulated interest. See below.\n\nas_collateral: (only for supply) if the user use this asset as collateral\n"})}),"\n",(0,o.jsx)(t.p,{children:"When user takes an action (supply, borrow, withdraw or repay), first calculate interest:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"amount = amount * total_supply_index (or total_debt_index) / index\n"})}),"\n",(0,o.jsx)(t.p,{children:"Then its index will be updated to the current total_supply_index or total_debt_index."}),"\n",(0,o.jsx)(t.p,{children:"To calculate interest, we use a simple linear modal with the following parameters"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"borrow_rate_zero, borrow_rate_optimal, borrow_rate_illiquid, utilization_optimal\n"})}),"\n",(0,o.jsx)(t.p,{children:"Equations:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"utilization_ratio = total_borrow / total_deposit\nborrow_rate_net1 = borrow_rate_optimal - borrow_rate_zero\nborrow_rate_net2 = borrow_rate_illiquid - borrow_rate_optimal\nif utilization_ratio <= utilization_optimal\n    borrowRate = utilization_ratio / utilization_optimal * borrow_rate_net1 + borrow_rate_zero\nelse\n    borrowRate = (utilization_ratio - utilization_optimal) / (1 - utilization_optimal) * borrow_rate_net2 + borrow_rate_optimal\ndepositRate = borrowRate * utilization_ratio\n\n"})}),"\n",(0,o.jsx)(t.p,{children:"The system will later introduce more interest modals."}),"\n",(0,o.jsx)(t.p,{children:"The system also relies on reliable price oracle to keep the collateral in a healthy status. For convenience, we will first use a mock price oracle and make the interface suitable for a more realistic off-chain worker implementation."}),"\n",(0,o.jsx)(t.h3,{id:"ecosystem-fit",children:"Ecosystem Fit"}),"\n",(0,o.jsx)(t.p,{children:"There are several DeFi projects in the ecosystem at the moment but we believe that our value proposition is unique and also complementing the existing products in the market. We are focused on building the decentralised money market, which could be supporting the stablecoin infrastructure that already exist and the staking asset liquidity products in the ecosystem."}),"\n",(0,o.jsxs)(t.h2,{id:"team-busts_in_silhouette",children:["Team ","\ud83d\udc65"]}),"\n",(0,o.jsx)(t.h3,{id:"team-members",children:"Team members"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Name of team leader: Ariel Ho"}),"\n",(0,o.jsx)(t.li,{children:"Names of team members:  Shengmu Liu, John Wu, Yuqing Zhao, Jayden Yee"}),"\n"]}),"\n",(0,o.jsx)(t.h3,{id:"team-website",children:"Team Website"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"http://konomi.network/",children:"http://konomi.network/"})}),"\n"]}),"\n",(0,o.jsx)(t.h3,{id:"legal-structure",children:"Legal Structure"}),"\n",(0,o.jsx)(t.p,{children:"KONOMI FOUNDATION LTD."}),"\n",(0,o.jsx)(t.h3,{id:"teams-experience",children:"Team's experience"}),"\n",(0,o.jsxs)(t.p,{children:["Shengmu has more than 5 years entrepreneur experience in tech startups. Before Konomi Network, he started his career in big data analytics at Shopee, a leading ecommerce platform in SEA. He then moved to a healthcare startup as the lead software engineer where he designed software product for million-dollar worth projects. He has deep enthusiasm in machine learning and also a veteran in tech project management. His publication was included in the IEEE ",(0,o.jsx)(t.a,{href:"https://ieeexplore.ieee.org/document/7476392",children:"https://ieeexplore.ieee.org/document/7476392"})]}),"\n",(0,o.jsx)(t.p,{children:"Ariel Ho has 7 years entrepreneur experience in tech startups. Before Konomi Network, she founded High Mall Indoor Navigation, an indoor navigation solution provider based on iBeacon Tech, served for Singapore largest chain supermarket NTUC Fairprice. She was the early investor of crypto since 2017. Her expertise in fundraising, strategy management and leadership is valuable to this project."}),"\n",(0,o.jsx)(t.p,{children:"Jayden has 8 years entrepreneur experience in Tech startups. Before Konomi Network, he has founded multiple tech startups including Mileslife Singapore and Wecharge.He was the country manager of OFO Singapore. Led the project from launch phase to mature phase. OFO obtain highest ridership in Singapore under his leadership. He was an early investor of crypto and Bitcoin mining since 2015"}),"\n",(0,o.jsx)(t.p,{children:"Yuqing has more than 7 years experience in social media advertising and community building. Before Konomi Network, she started her career as a commercial broker in physical commodity trading sectors. Besides, she is one of the top chinese KOL in Singapore with over 300K+ organic followers on instagram. As a sole proprietor, built relationship with and represented over 100 corporate partners in their online advertising campaigns, including Huawei, Casio, Shopee, Grab, Lazada, Carlsberg and etc. Her expertise in communication and community building is valuable to this project."}),"\n",(0,o.jsx)(t.p,{children:"John, tech contributor, is a Substrate developer and technical ambassador of Polkadot. He was the CTO of Cdot and blockchain tech lead of ARPA project."}),"\n",(0,o.jsx)(t.p,{children:"We have already built a working preliminary swap module with a multi-asset module as a base layer. It is in our team code repository."}),"\n",(0,o.jsx)(t.h3,{id:"team-code-repos",children:"Team Code Repos"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"https://github.com/konomi-network/konomi-node",children:"https://github.com/konomi-network/konomi-node"}),"\nIt is currently a private repo, please contact us for access."]}),"\n"]}),"\n",(0,o.jsx)(t.h3,{id:"team-linkedin-profiles",children:"Team LinkedIn Profiles"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"http://linkedin.com/in/ariel-ho-8b5aa01ba",children:"http://linkedin.com/in/ariel-ho-8b5aa01ba"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"https://www.linkedin.com/in/yuqing-zhao-1201b6120/",children:"https://www.linkedin.com/in/yuqing-zhao-1201b6120/"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"http://linkedin.com/in/xingmo-liu-7b0823140",children:"http://linkedin.com/in/xingmo-liu-7b0823140"})}),"\n"]}),"\n",(0,o.jsxs)(t.h2,{id:"development-roadmap-nut_and_bolt",children:["Development Roadmap ","\ud83d\udd29"]}),"\n",(0,o.jsx)(t.h3,{id:"overview-1",children:"Overview"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Total Estimated Duration:"})," 1.5 months"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Full-time equivalent (FTE):"}),"  2"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Total Costs:"})," 1 BTC"]}),"\n"]}),"\n",(0,o.jsx)(t.h3,{id:"milestone-1-pool-lending-module",children:"Milestone 1 Pool Lending Module"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Estimated Duration:"})," 1 month"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"FTE:"}),"  2"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Costs:"})," 1 BTC"]}),"\n"]}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Number"}),(0,o.jsx)(t.th,{children:"Deliverable"}),(0,o.jsx)(t.th,{children:"Specification"})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"0"}),(0,o.jsx)(t.td,{children:"License"}),(0,o.jsx)(t.td,{children:"Apache 2.0 / MIT / Unlicense"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"1"}),(0,o.jsx)(t.td,{children:"Documentation"}),(0,o.jsx)(t.td,{children:"We will provide both inline documentation of the code and a basic tutorial that explains how a user can (for example) spin up one of our Substrate nodes. There will also be a more detailed design documentation of the module reflects the delivered status"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"2"}),(0,o.jsx)(t.td,{children:"Substrate Module: Pool lending module"}),(0,o.jsx)(t.td,{children:"lending/borrowing pool of multi-assets with user deposit/debut tracking and interest calculation; liquidation functionality with sudo price oracle"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"3"}),(0,o.jsx)(t.td,{children:"Front End"}),(0,o.jsx)(t.td,{children:"Complete our own web page and provide front end UI for users to test the lending module. Using React and Javascript. Front end modules include: user account management (position tracking, interest, liquidation); lending/borrowing pools display; asset deposit and withdraw;"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"4"}),(0,o.jsx)(t.td,{children:"Tests"}),(0,o.jsx)(t.td,{children:"Unit tests and also a public accessible testnet of the PoC"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"5"}),(0,o.jsx)(t.td,{children:"Docker"}),(0,o.jsx)(t.td,{children:"A docker image of Substrate node with the lending module for anyone to easily run the node"})]})]})]}),"\n",(0,o.jsx)(t.h3,{id:"community-engagement",children:"Community engagement"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"https://konomi-network.medium.com/",children:"https://konomi-network.medium.com/"}),"\nWe have been documenting the project progress and also our understanding of the DOT ecosystem in our blog."]}),"\n",(0,o.jsx)(t.h2,{id:"future-plans",children:"Future Plans"}),"\n",(0,o.jsx)(t.p,{children:"After delivery, we will start to explore cross-chain lending senario and will first try to enable cross-chain asset to be lended and borrowed. Konomi aims to bridge the gap between crypto and fiat world by offering an easy to use, high performance product for users to trade and manage their crypto assets. In the mid term, we plan to implement cross-chain lending aggregation protocols since the current products could not execute orders across parachains simultaneously. We plan to deploy lending modules to partnered parachains in order to support cross-chain lending. In the long term, acquiring fiat-based customers and improve Polkadot cross-chain protocol to more compatible with cross-chain lending are the two strategic focus. In terms of fiat to crypto gateways, there have been many licensed service providers but it is yet to achieve mainstream adoption. With regulated players eying in this space, there will be more users and more demand for DeFi products. Furthermore, we believe that cross-chain infrastructure is going to be an important building block for crypto industry going forward since current solutions for BTC and other assets supported on Ethereum are either centralised or slow in speed."}),"\n",(0,o.jsxs)(t.h2,{id:"additional-information-heavy_plus_sign",children:["Additional Information ","\u2795"]}),"\n",(0,o.jsxs)(t.p,{children:["Possible additional information to include:\n",(0,o.jsx)(t.a,{href:"https://medium.com/konomi",children:"https://medium.com/konomi"})]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}}}]);