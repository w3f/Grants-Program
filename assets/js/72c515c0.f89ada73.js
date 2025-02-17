"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[19699],{28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var i=n(96540);const s={},r=i.createContext(s);function o(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:t},e.children)}},60480:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"applications/Coinversation","title":"Coinversation Protocol","description":"Proposer:* coin-pro","source":"@site/applications/Coinversation.md","sourceDirName":"applications","slug":"/applications/Coinversation","permalink":"/applications/Coinversation","draft":false,"unlisted":false,"editUrl":"https://github.com/w3f/Grants-Program/edit/master/applications/Coinversation.md","tags":[],"version":"current","frontMatter":{}}');var s=n(74848),r=n(28453);const o={},a="Coinversation Protocol",l={},c=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-page_facing_up",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Polkadot Bridge",id:"polkadot-bridge",level:4},{value:"Forging Synthetic Assets(MintC)",id:"forging-synthetic-assetsmintc",level:4},{value:"cUSD",id:"cusd",level:4},{value:"DEX",id:"dex",level:4},{value:"Collateral Pool",id:"collateral-pool",level:4},{value:"Fee Pool",id:"fee-pool",level:4},{value:"Oracle",id:"oracle",level:4},{value:"Liquidity Mining",id:"liquidity-mining",level:4},{value:"Team \ud83d\udc65",id:"team-busts_in_silhouette",level:2},{value:"Team members",id:"team-members",level:3},{value:"Team Website",id:"team-website",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-nut_and_bolt",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 \u2014 the minting center for minting and destroying cUSD",id:"milestone-1--the-minting-center-for-minting-and-destroying-cusd",level:3},{value:"Milestone 2 \u2014 a decentralized exchange for trading synthetic assets",id:"milestone-2--a-decentralized-exchange-for-trading-synthetic-assets",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information \u2795",id:"additional-information-heavy_plus_sign",level:2}];function d(e){const t={a:"a",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"coinversation-protocol",children:"Coinversation Protocol"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Proposer:"})," ",(0,s.jsx)(t.a,{href:"https://github.com/coin-pro",children:"coin-pro"})]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Payment Address:"})," 3FX6TD7Qm255foMg7xZStZNAfpLvDai5P8"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Status:"})," ",(0,s.jsx)(t.a,{href:"https://github.com/w3f/Grant-Milestone-Delivery/pull/233#issuecomment-886535171",children:"Terminated"})]}),"\n"]}),"\n",(0,s.jsxs)(t.h2,{id:"project-overview-page_facing_up",children:["Project Overview ","\ud83d\udcc4"]}),"\n",(0,s.jsx)(t.p,{children:"Coinversation Protocol is an open financial platform integrating stablecoin, synthetic asset issuance, collateral lending, decentralized contract exchange and Polkadot bridge.  Coinversation Stablecoin is a very important part of it.  Coinversation is committed to making breakthrough contributions to the stablecoin and DeFi in the Polkadot ecosystem."}),"\n",(0,s.jsx)(t.h3,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)(t.p,{children:"The stablecoin created by Coinversation Protocol is decentralized, multi-asset collateralized, supports cross-chain, and supports real-world asset access through Polkadot bridge. The biggest difference between it and the past decentralized stablecoins is that there are no stability fees or interest, but stablecoins are issued in a synthetic asset collateral pool. Therefore, the cost that users pay to generate Coinversation Stablecoin (cUSD) through collateral is determined by the relative change of all synthetic assets in the entire system, rather than artificial regulations in previous decentralized stablecoins (e.g. Dai). This cost is more market-oriented, and at the same time it is equivalent to the inflation rate of stablecoin to world assets.  In general, the stable currency cUSD and the synthetic asset issuance and contract exchanges in the Coinversation Protocol constitute a complete Defi system in the Polkadot ecosystem. In addition, we can access alliance chains such as AntChain and HyperChain through Coinversation's own bridge to realize access to various real-world assets. This will not only enrich the collateral for this project, but also enrich the range of assets in the entire Polkadot ecosystem through cross-chain."}),"\n",(0,s.jsx)(t.h3,{id:"project-details",children:"Project Details"}),"\n",(0,s.jsx)(t.p,{children:"The main functional modules of the entire system include: Polkadot bridge, forging synthetic assets(MintC), DEX, collateral pools, fee pools, oracles, and liquidity mining."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"http://coinversation.cn/static/media/Coinversation.jpg",alt:"Coinversation architecture diagram"})}),"\n",(0,s.jsx)(t.h4,{id:"polkadot-bridge",children:"Polkadot Bridge"}),"\n",(0,s.jsx)(t.p,{children:"This bridge connect several alliance chains, such as AntChian and HyperChain, into Coinversation Protocol and Polkadot ecosystem. So assets on those chains can be used as collateral to issue stablecoin and synthetic assets. Meanwhile, Coinversation Stablecoin can also provide liquidity for those assets through cUSD lending."}),"\n",(0,s.jsx)(t.h4,{id:"forging-synthetic-assetsmintc",children:"Forging Synthetic Assets(MintC)"}),"\n",(0,s.jsx)(t.p,{children:"The synthetic assets issued by the entire system are all produced by users staking certain collateral. The initial collateral includes CTO and DOT, and the collateralization ratio is 800% and 500% respectively. In the future, the collateral and collateralization ratio can be adjusted through community governance. When users stake collaterals and forge synthetic assets, corresponding debts are generated. When the user wants to unlock the collateral, he must repay the debt, that is, destroy the previously generated synthetic assets."}),"\n",(0,s.jsx)(t.h4,{id:"cusd",children:"cUSD"}),"\n",(0,s.jsx)(t.p,{children:"At present, it is stipulated that the assets synthesized by direct staking of collateral are the stablecoin cUSD. That is, after users stake the CTO or DOT, the directly generated synthetic asset is cUSD, while other synthetic assets need to be converted by the user through contract trading in DEX. The price of cUSD is always defined as $1 throughout the system. All cUSD generated by all users is the total liability of the entire system, priced in cUSD."}),"\n",(0,s.jsx)(t.p,{children:"Through contract trading, cUSD can be converted into any synthetic assets supported by the system, such as cBTC, cETH, and even cAAPL, cXAU linked to traditional assets such as stocks and gold, and supports long or short. The types of synthetic assets can be added by community governance. It should be noted that if the user simply holds cUSD after minting, it is equivalent to automatically shorting all other assets in the system."}),"\n",(0,s.jsx)(t.h4,{id:"dex",children:"DEX"}),"\n",(0,s.jsx)(t.p,{children:"It is an exchange that provides conversion of different synthetic assets and contract trading. Due to the design characteristics of CP, this DEX does not require a counterparty, and there is no issue of transaction depth."}),"\n",(0,s.jsx)(t.h4,{id:"collateral-pool",children:"Collateral Pool"}),"\n",(0,s.jsx)(t.p,{children:"The collateral pool is the sum of synthetic assets generated by all users, and is priced in cUSD. According to the amounts of synthetic assets generated by each user, the debt pool also records the proportion of each user's debt. Whenever a new synthetic asset is generated, the debt ratio of the system must be recalculated."}),"\n",(0,s.jsx)(t.h4,{id:"fee-pool",children:"Fee Pool"}),"\n",(0,s.jsx)(t.p,{children:"Users trading or converting synthetic assets on the DEX will incur transaction fees. The fee ratio is tentatively set at 0.3%, and these fees all enter the fee pool. The fee is collected in cUSD, and all the fees are distributed to users in proportion to the debt. The system stipulates that only users whose collateral is the CTO can receive rewards, as an incentive for CTO holders. Because the CTO price fluctuates, it is stipulated that only users who meet the collateralization ratio are eligible to receive rewards."}),"\n",(0,s.jsx)(t.h4,{id:"oracle",children:"Oracle"}),"\n",(0,s.jsx)(t.p,{children:"Since the price of contract trading needs to be read from outside sources, the oracle is a very critical part of this project. In the initial stage, the system will use the centralized oracles provided by the project team, and in the future, it will introduce more secure decentralized oracles."}),"\n",(0,s.jsx)(t.h4,{id:"liquidity-mining",children:"Liquidity Mining"}),"\n",(0,s.jsx)(t.p,{children:"Liquidity mining is the module of issuing CTO tokens. Users can lock CTO or DOT here to get the rewards of CTO. The proportion of rewards obtained by CTO and DOT is different. It also stipulates that users who lock their tokens for liquidity mining must also put a corresponding proportion of CTO or DOT in the collateral pool to mint synthetic assets, to provide more liquidity for the entire system."}),"\n",(0,s.jsxs)(t.h2,{id:"team-busts_in_silhouette",children:["Team ","\ud83d\udc65"]}),"\n",(0,s.jsx)(t.h3,{id:"team-members",children:"Team members"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Qiuye, team leader, PhD in Economics, major in Macroeconomics including currency, finance and exchange rates. Mainly focuses on cryptocurrency and is committed to exploring the fundamental changes that cryptocurrency brings to traditional economic theories."}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"team-website",children:"Team Website"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"http://coinversation.cn",children:"http://coinversation.cn"})}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"legal-structure",children:"Legal Structure"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Crypto Geeks Capital Ltd."}),"\n",(0,s.jsx)(t.li,{children:"No.977 Wenyi West Road, Yongfu Community, Wuchang Street, Yuhang District, Hangzhou City, China"}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"teams-experience",children:"Team's experience"}),"\n",(0,s.jsx)(t.p,{children:"Founded by a US PhD team, the core members are from first-tier technology companies such as Alibaba, ANT Group, Google. More than 70% of the team members have a Master degree or a PhD degree, and many of them have more than ten years of development experience and are early developers of Ethereum."}),"\n",(0,s.jsx)(t.h3,{id:"team-code-repos",children:"Team Code Repos"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/Coinversation",children:"https://github.com/Coinversation"})}),"\n"]}),"\n",(0,s.jsxs)(t.h2,{id:"development-roadmap-nut_and_bolt",children:["Development Roadmap ","\ud83d\udd29"]}),"\n",(0,s.jsx)(t.h3,{id:"overview-1",children:"Overview"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Total Estimated Duration:"})," 6 months"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Full-time equivalent (FTE):"}),"  3"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Total Costs:"})," 0.6 BTC"]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"milestone-1--the-minting-center-for-minting-and-destroying-cusd",children:"Milestone 1 \u2014 the minting center for minting and destroying cUSD"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Estimated Duration:"})," 3 months"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"FTE:"}),"  3"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Costs:"})," 0.3 BTC"]}),"\n"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Number"}),(0,s.jsx)(t.th,{children:"Deliverable"}),(0,s.jsx)(t.th,{children:"Specification"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"1."}),(0,s.jsx)(t.td,{children:"oracle"}),(0,s.jsx)(t.td,{children:"Complete the oracle function by an off-chain worker."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"2."}),(0,s.jsx)(t.td,{children:"forging center"}),(0,s.jsx)(t.td,{children:"Realize the functions of staking DOT and CTO by ink! Smart Contract, forging synthetic assets, including cUSD, cBTC, cETH, cAAPL, cXAU, etc."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"3."}),(0,s.jsx)(t.td,{children:"Testing"}),(0,s.jsx)(t.td,{children:"The code will have proper unit-test coverage to ensure functionality and robustness."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"4."}),(0,s.jsx)(t.td,{children:"Tutorial"}),(0,s.jsx)(t.td,{children:"The tutorial will not only indicate that how to use set up and deploy it into the ink! module, and also introduce special user cases and potential extensibility."})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"milestone-2--a-decentralized-exchange-for-trading-synthetic-assets",children:"Milestone 2 \u2014 a decentralized exchange for trading synthetic assets"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Estimated Duration:"})," 3 months"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"FTE:"}),"  3"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Costs:"})," 0.3 BTC"]}),"\n"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Number"}),(0,s.jsx)(t.th,{children:"Deliverable"}),(0,s.jsx)(t.th,{children:"Specification"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"1."}),(0,s.jsx)(t.td,{children:"collateral pool"}),(0,s.jsx)(t.td,{children:"Realize the collateral pool function by ink! Smart Contract: When a user newly generates or destroys cUSD, the debt ratio is re-determined, and the user's profit is calculated based on the change in asset prices."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"2."}),(0,s.jsx)(t.td,{children:"fee pool"}),(0,s.jsx)(t.td,{children:"Realize the function of fee pool by ink! Smart Contract: transaction fees are included in the fee pool to complete the benefit distribution of CTO users. Allow users to view the debt ratio, total system debt, balance of personal synthetic assets, rewards income, etc."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"3."}),(0,s.jsx)(t.td,{children:"decentralized contract exchange"}),(0,s.jsx)(t.td,{children:"Realize the trading function on the Web end, allowing users to freely trade various synthetic assets. It is convenient for users to stake CTO or DOT to mint cUSD and destroy cUSD."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"4."}),(0,s.jsx)(t.td,{children:"Testing"}),(0,s.jsx)(t.td,{children:"The code will have proper unit-test coverage to ensure functionality and robustness."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"5."}),(0,s.jsx)(t.td,{children:"Tutorial"}),(0,s.jsx)(t.td,{children:"The tutorial will not only indicate that how to use set up and deploy it into the ink! module, and also introduce special user cases and potential extensibility."})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"future-plans",children:"Future Plans"}),"\n",(0,s.jsx)(t.p,{children:"There is still a lot of space for growth in the future, including:"}),"\n",(0,s.jsx)(t.p,{children:"At present, the type of synthetic assets of the project is determined by the project team or community governance. In the future, it is planned to upgrade so that different investors can independently sign any type of contract on this system."}),"\n",(0,s.jsx)(t.p,{children:"At present, the stablecoin cUSD or other synthetic assets produced by the project are limited to the system. When there are standardized tokens similar to Ethereum ERC-20 on the Polkadot in the future, all synthetic assets of this project can be circulated outside the system in the form of standardized tokens, and even enter other exchanges. Among them, cUSD can become an important stable currency in the Polkadot ecology."}),"\n",(0,s.jsxs)(t.h2,{id:"additional-information-heavy_plus_sign",children:["Additional Information ","\u2795"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Whitepaper: ",(0,s.jsx)(t.a,{href:"https://github.com/Coinversation/white-paper",children:"https://github.com/Coinversation/white-paper"})]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}}}]);