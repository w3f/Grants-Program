"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[4322],{83808:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=a(87462),i=(a(67294),a(3905));a(95657);const o={},r="Shadows Network",l={unversionedId:"applications/shadows-network",id:"applications/shadows-network",title:"Shadows Network",description:"- Payment Address: 198yWGziNfUgrTXf6QiUC5QqEhJ34cyxf",source:"@site/applications/shadows-network.md",sourceDirName:"applications",slug:"/applications/shadows-network",permalink:"/Grants-Program/applications/shadows-network",draft:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/applications/shadows-network.md",tags:[],version:"current",frontMatter:{}},s={},d=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 \u2014 Implement Substrate MintX&amp;Ingester Module",id:"milestone-1--implement-substrate-mintxingester-module",level:3},{value:"Milestone 2 \u2014 Implement Substrate Exchange Module",id:"milestone-2--implement-substrate-exchange-module",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information \u2795",id:"additional-information-",level:2}],h={toc:d},c="wrapper";function u(e){let{components:t,...a}=e;return(0,i.kt)(c,(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"shadows-network"},"Shadows Network"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Payment Address:")," 198yWGziNfUgrTXf6QiUC5QqEhJ34cyxf"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Status:")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/w3f/Grant-Milestone-Delivery/pull/95#issuecomment-794343113"},"Terminated"))),(0,i.kt)("h2",{id:"project-overview-"},"Project Overview \ud83d\udcc4"),(0,i.kt)("p",null,"Shadows Network is a Polkadot parachain based on Substrate. As long as you consider valuable assets, they can be synthesized on the chain through Shadows Network. And Shadows network is a decentralized financial integrated platform integrating stablecoins, collateral lending, asset synthesis, and derivatives trading. will introduce a trillion-level derivatives market into the Polkadot ecosystem."),(0,i.kt)("h3",{id:"overview"},"Overview"),(0,i.kt)("p",null,'Shadows Network is a Polkadot parachain based on Substrate, focusing on synthesizing derivative assets into the Polkadot ecosystem. It is like the "shadows" of real assets on the blockchain. Shadows Network will open up the channel for real assets to be synthesized to the blockchain. Real assets that you think are valuable can be synthesized through the Shadows protocol to achieve decentralization of asset value. Shadows Network pioneered the "debt pool" model, which has the advantages of unlimited liquidity and zero slippage on-chain transactions. It has a more friendly transaction experience and lower transaction costs than other centralized exchanges and SWAP.'),(0,i.kt)("p",null,"Shadows network will strive to become one of the Polkadot parachains by participating in the parachain slot auction. However, even if the slot usage rights are not successfully obtained by then, the shadows network will also be counted as parathreads to obtain cross-chain capabilities."),(0,i.kt)("p",null,"Most of our team members come from first-line Internet companies, cryptocurrency wallet companies and cryptocurrency exchanges. They have participated in the development of multiple blockchain projects and have in-depth research and accumulation of blockchain technology. We have developed many dapps based on Ethereum. Due to the limitations of Ethereum itself, many of our ideas cannot be implemented and realized on Ethereum. We have done in-depth research on Polkadot and Substrate technology, Polkadot's cross-chain technology, parachain slot, governance model, etc. We believe that Polkadot is one of the most advanced technologies and concepts at present. What Shadows Network wants to do is to synthesize assets into the blockchain, so that everyone can truly control their assets and realize asset security and asset transaction security."),(0,i.kt)("h3",{id:"project-details"},"Project Details"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/ShadowsNetwork/document/main/images/shadowsExchange.png",alt:null})),(0,i.kt)("p",null,"The Shadows Network architecture design includes: DOS\u3001MintX\u3001Exchanges\u3001Fee Pool\u3001Debt Pool\u3001Liquidation and Off-chain Workers."),(0,i.kt)("img",{src:"https://raw.githubusercontent.com/shadowsnetwork/document/main/images/architecture.jpg",width:"100%"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"DOS")),(0,i.kt)("p",null,"DOS token is a governance token issued by Shadows Network. All synthetic asset are backed by DOS token. synthetic asset are minted when DOS holders stake their DOS as collateral."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"MintX & xUSD")),(0,i.kt)("p",null,"DOS holders can mint xUSD through MintX by stake DOS. MintX is a reactor for synthetic assets. xUSD is a stable currency issued by Shadows Network. xUSD is minted by stake DOS and The mortgage rate of DOS must not be less than 800%. All synthetic asset transactions will be conducted around xUSD."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Exchanges")),(0,i.kt)("p",null,"Shadows.Exchange provides many advantages over centralised exchanges and order book based DEX\u2019s. All trades are executed against the contract, known as P2C (peer-to-contract) trading. Assets are assigned an exchange rate through price feeds supplied by Off-chain workers, and can be converted using the Shadows.Exchange dApp. This provides infinite liquidity up to the total amount of collateral in the system, zero slippage, and permissionless on-chain trading."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Fee Pool")),(0,i.kt)("p",null,"When SyAs are exchanged through the Shadows Exchange, a 0.3% fee is extracted and sent to the fee pool to be claimed by DOS stakers. When claiming fees (also called SyAs exchange rewards) a staker also claims their DOS staking rewards, which reward them with extra DOS for staking the DOS they currently have."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Debt Pool")),(0,i.kt)("p",null,"The system tracks the debt pool (as well as each individual staker\u2019s debt) each time an DOS holder mints or burns Synths. It does this by updating the Cumulative Debt Delta Ratio. This measures the DOS staker\u2019s proportion of the debt pool at the time they last minted or burned, as well as the debt change caused by other stakers entering or leaving the system. The system uses this information to determine the individual debt of each staker at any time in the future, without having to actually record the changing debt of each individual staker."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Liquidation")),(0,i.kt)("p",null,"In order to avoid systemic risks, We introduced the introduced liquidation. When the staker's position is lower than 750%, the system will prompt the liquidation risk. If the position has not been increased for a period of time, the collateral will be liquidated."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Ingester")),(0,i.kt)("p",null,"Ingester is our implementation of Off-chain workers. The prices of all synthetic assets in the Shadows system need to query and/or process off-chain data before it can be included in the on-chain state. The conventional way of doing this is through oracles. But oracle still has several flaws with respect to security, scalability, and infrastructure efficiency."),(0,i.kt)("p",null,"To make the off-chain data integration secure and more efficient, We use Substrate off-chain workers. The off-chain worker subsystem allows execution of long-running and possibly non- deterministic tasks (e.g. web requests, encryption/decryption and signing of data, random number generation, CPU-intensive computations, enumeration/aggregation of on-chain data, etc.) that could otherwise require longer than the block execution time."),(0,i.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,i.kt)("p",null,"We have a deep understanding of many projects in the Polkadot ecology, and found that there are several projects that we think it is necessary to list to make a difference explanation, Acala, Laminar and Coinversation:"),(0,i.kt)("p",null,"The main difference between Shadows Network and Acala Network is that Acala's swap and liquidity mining have the risk of lack of liquidity and the pain points of high slippage. The original \"debt pool\" mechanism of shadows network has the advantages of unlimited liquidity and zero slippage trading. Acala's stablecoin and lending business rely heavily on the third-party oracle chain link, which has some shortcomings in security, scalability, and basic efficiency. The shadows network will use the off-chain workers provided by Substrate to improve this. , Safer and more efficient."),(0,i.kt)("p",null,"Laminar relies heavily on off-chain asset collateral, such as U.S. dollars, which has the shortcomings of inefficiency and inflexibility, while the shadows system uses digital assets such as DOT, DOS, BTC, ETH as collateral, which is more flexible, efficient and safe, and users The options are more extensive."),(0,i.kt)("p",null,"Coinversation is not a parachain and based on the ink! smart contract depends on the existing parachain. The shadows network develops parachains based on substrate. Based on the rust language and Substrate's forkless runtime upgrades, the shadows network is more efficient and flexible."),(0,i.kt)("p",null,'Coinversation currently relies on a centralized oracle, which has the risk of being opaque and easy to operate, while the shadows network parachain is based on the off-chain worker of the substrate, which can achieve little dependence on the oracle, which means that the oracle is brought about The risk is also smaller. We haven\'t seen any "Liquidation" plan in Coinversation, and shadows network has a more complete liquidation mechanism to avoid systemic risks.'),(0,i.kt)("p",null,"From the above analysis and comparison, shadows network has obvious differences from several other products. Shadows has a more complete design and better technical solutions, and we have considered more mature risk control."),(0,i.kt)("h2",{id:"team-"},"Team \ud83d\udc65"),(0,i.kt)("h3",{id:"team-members"},"Team members"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Zoujun Chen:")," Co-Founder. He once worked for the Fortune 500 Amphenol Group. He entered the blockchain industry in 2013. He is the main person in charge of multiple blockchain projects and has many years of industry experience.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Mingchang Lin:")," Co-Founder. Cryptographic System Engineer once worked for Baidu, and participated in the development of multiple blockchain projects since 2014.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Ling Cai:")," Head of commerce and marketing. He once worked in a first-line exchange company.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Xinan Li:")," A traffic expert, with in-depth understanding and practical experience in Internet industry traffic, and very familiar with traffic promotion methods.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Zhuliang Li:")," A financial expert. He once worked for Ping An Bank of China (one of the largest commercial banks in China). He is familiar with the design of financial products, the simulation and calculation of financial models, and financial risk control.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Hehong Wu:")," Front-end engineer, has in-depth research on various front-end technologies.\nGuang Xiao: Senior UI designer, once worked in China's first-line game development company\uff1aNetDragon and Nasdaq:NTES."),(0,i.kt)("p",{parentName:"li"},"We also have several developers from the member companies of Polkadot China Technology Alliance who contributed code to the shadow network. "))),(0,i.kt)("h3",{id:"contact"},"Contact"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Contact Name:")," Polkadot (China) Technology Alliance")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Contact Email:")," ",(0,i.kt)("a",{parentName:"li",href:"mailto:polkachina@163.com"},"polkachina@163.com")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Website\uff1a"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Alliance website\uff1a",(0,i.kt)("a",{parentName:"li",href:"https://polkachina.org"},"https://polkachina.org")),(0,i.kt)("li",{parentName:"ul"},"Shadows Network website: ",(0,i.kt)("a",{parentName:"li",href:"https://www.shadwos.link"},"https://www.shadwos.link")," (Developing)"),(0,i.kt)("li",{parentName:"ul"},"WhitePaper: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/ShadowsNetwork/whitepaper"},"https://github.com/ShadowsNetwork/whitepaper"))))),(0,i.kt)("h3",{id:"legal-structure"},"Legal Structure"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Registered Address:")," Room F01, 3rd Floor, Annex Building, F Zone F, Fuzhou Software Park, No. 89 Software Avenue, Gulou District, Fuzhou City, Fujian Province, China")),(0,i.kt)("h3",{id:"teams-experience"},"Team's experience"),(0,i.kt)("p",null,"Most of the members of our team come from Polkadot (China) Technology Alliance. Most of them have worked in first-line Internet companies, cryptocurrency wallet companies and cryptocurrency exchanges. They have participated in the development of multiple blockchain projects and have in-depth knowledge of blockchain technology. Research and accumulation have also accumulated a lot of blockchain industry resources in China."),(0,i.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/ShadowsNetwork"},"https://github.com/ShadowsNetwork"))),(0,i.kt)("h2",{id:"development-roadmap-"},"Development Roadmap \ud83d\udd29"),(0,i.kt)("p",null,"We expect that the entire project will be split into two grants. The first grant includes the development of parachains and the implementation of core modules. But only documents, test cases and api are provided. But through the API, you can already participate in the casting and trading of synthetic assets. The second grant will include the development of a complete user interface, dapp, and wallet. It will be a complete product that can be experienced by then. Users can directly experience the functions without knowing the technical details."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"-----------------------------------------------------------\n| Substrate chain with MintX & Ingester & Exchange module  |  <---- This grant\n-----------------------------------------------------------\n| User interface with Dapp & Wallet                        |  <---- Future grant\n-----------------------------------------------------------\n| More synthetic Assets (e.g S&P500, TSLA)                 |\n-----------------------------------------------------------\n")),(0,i.kt)("h3",{id:"overview-1"},"Overview"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 3 months"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Full-time equivalent (FTE):"),"  5"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Total Costs:")," 1.35 BTC")),(0,i.kt)("h3",{id:"milestone-1--implement-substrate-mintxingester-module"},"Milestone 1 \u2014 Implement Substrate MintX&Ingester Module"),(0,i.kt)("p",null,"In this milestone, we developed the MintX module and the Ingester module. MintX is used to mint synthetic assets, while Ingester is used to query the price of assets outside the chain. After completing this milestone, we can experience the entire process of casting synthetic assets."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Estimated Duration:")," 1.6 month"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"FTE:"),"  3"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Costs:")," 0.7 BTC")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Number"),(0,i.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,i.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"0."),(0,i.kt)("td",{parentName:"tr",align:null},"License"),(0,i.kt)("td",{parentName:"tr",align:null},"Apache 2.0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1."),(0,i.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,i.kt)("td",{parentName:"tr",align:null},"Instructions and examples for use MintX  and Ingester")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"2."),(0,i.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,i.kt)("td",{parentName:"tr",align:null},"provide test suite (mock and test files) for the MintX and Ingester describing how the module can be tested.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"3."),(0,i.kt)("td",{parentName:"tr",align:null},"Substrate module: MintX"),(0,i.kt)("td",{parentName:"tr",align:null},"We will create a Substrate module MintX. DOS holders can mint xUSD by stake DOS. And Debt Pool is also implemented in the MintX module.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"4."),(0,i.kt)("td",{parentName:"tr",align:null},"Substrate module: Ingester"),(0,i.kt)("td",{parentName:"tr",align:null},"We will create a Ingester module that is a off-chain worker used to query and/or process off-chain data.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"5."),(0,i.kt)("td",{parentName:"tr",align:null},"Tutorial"),(0,i.kt)("td",{parentName:"tr",align:null},"We will write an tutorial about how to use MintX & Ingester.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"6."),(0,i.kt)("td",{parentName:"tr",align:null},"Testing"),(0,i.kt)("td",{parentName:"tr",align:null},"The code will have proper unit-test coverage to ensure functionality and robustness.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"7."),(0,i.kt)("td",{parentName:"tr",align:null},"Docker"),(0,i.kt)("td",{parentName:"tr",align:null},"We will provide a dockerfile to demonstrate the full functionality of our chain with MintX  and Ingester moudle.")))),(0,i.kt)("h3",{id:"milestone-2--implement-substrate-exchange-module"},"Milestone 2 \u2014 Implement Substrate Exchange Module"),(0,i.kt)("p",null,"At this milestone, we developed the exchange module. The first milestone has been able to mint synthetic assets. When this milestone is completed, our synthetic assets will be available for trading."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Estimated Duration:")," 1.4 month"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"FTE:"),"  3"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Costs:")," 0.65 BTC")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Number"),(0,i.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,i.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"0."),(0,i.kt)("td",{parentName:"tr",align:null},"License"),(0,i.kt)("td",{parentName:"tr",align:null},"Apache 2.0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1."),(0,i.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,i.kt)("td",{parentName:"tr",align:null},"Instructions and examples for use Exchange.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"2."),(0,i.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,i.kt)("td",{parentName:"tr",align:null},"provide test suite (mock and test files) for the exchange describing how the module can be tested.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"4."),(0,i.kt)("td",{parentName:"tr",align:null},"Substrate module: Exchange"),(0,i.kt)("td",{parentName:"tr",align:null},"We will create a exchange module that will be used to trade synthetic assets. And Fee Pool is also implemented in the Exchange module.5.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"5."),(0,i.kt)("td",{parentName:"tr",align:null},"Tutorial"),(0,i.kt)("td",{parentName:"tr",align:null},"We will write an tutorial about how to use MintX & Ingester.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"6."),(0,i.kt)("td",{parentName:"tr",align:null},"Testing"),(0,i.kt)("td",{parentName:"tr",align:null},"The code will have proper unit-test coverage to ensure functionality and robustness.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"7."),(0,i.kt)("td",{parentName:"tr",align:null},"Docker"),(0,i.kt)("td",{parentName:"tr",align:null},"We will provide a dockerfile to demonstrate the full functionality of our chain with Exchange module")))),(0,i.kt)("h2",{id:"future-plans"},"Future Plans"),(0,i.kt)("p",null,"There are many different kinds of SyAs that can be added to the system to provide greater utility to Shadows.Exchange. These include leveraged assets that are not available on other platforms as well as indices like the S&P500 and equities like APPLE and TSLA."),(0,i.kt)("h2",{id:"additional-information-"},"Additional Information \u2795"),(0,i.kt)("p",null,"So far we have completed the project possibility verification evaluation, completed the Substrate-based architecture design, and released the project white paper."))}u.isMDXComponent=!0}}]);