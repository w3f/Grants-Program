"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[71341],{36110:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(87462),i=(a(67294),a(3905));a(8209);const o={},r="On-chain cash exchange",l={unversionedId:"applications/on-chain-cash",id:"applications/on-chain-cash",title:"On-chain cash exchange",description:"- Team Name: Bela Supernova",source:"@site/applications/on-chain-cash.md",sourceDirName:"applications",slug:"/applications/on-chain-cash",permalink:"/applications/on-chain-cash",draft:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/applications/on-chain-cash.md",tags:[],version:"current",frontMatter:{}},s={},p=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles (if available)",id:"team-linkedin-profiles-if-available",level:3},{value:"Development Status \ud83d\udcd6",id:"development-status-",level:2},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 \u2014 Design and development of an Ink! smart contract",id:"milestone-1--design-and-development-of-an-ink-smart-contract",level:3},{value:"Milestone 2 \u2014 Design and development of system management tools",id:"milestone-2--design-and-development-of-system-management-tools",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information \u2795",id:"additional-information-",level:2}],m={toc:p},c="wrapper";function d(e){let{components:t,...a}=e;return(0,i.kt)(c,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"on-chain-cash-exchange"},"On-chain cash exchange"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Team Name:")," Bela Supernova"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Payment Address:")," 0xC0d28794eA40Ce9b9F4B62a1B2Bb42FD34b7d305 (USDT)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://github.com/w3f/Grants-Program/tree/master#level_slider-levels"},"Level"),":")," 2")),(0,i.kt)("h2",{id:"project-overview-"},"Project Overview \ud83d\udcc4"),(0,i.kt)("h3",{id:"overview"},"Overview"),(0,i.kt)("p",null,"Bela Supernova and BitIns propose to develop a universal payment service for Polkadot ecosystem that supports private and confidential payments in relevant crypto currencies as well as real-time on-ramp for cash payments, that can convert fiat in to crypto \u201con the fly\u201d."),(0,i.kt)("p",null,"On the current market a user has to set up his personal crypto wallet or even a few for buying and using crypto currencies or to set up smart-contracts in different blockchains. This seems too complicated for non-crypto inspired users, that hinders the mass development of crypto-assured services and also brings overheads for multiple transaction fees."),(0,i.kt)("p",null,"At the same time Bitins represents the simplest way to crypto that is currently available: a simple POS transaction or an SMS message are enough to purchase a coupon that is redeemable as Bitcoins. Through a partnership with Kraken exchange and leading Slovenian companies \u2013 Petrol and Telekom Slovenije, Bitins became a widely used ramp to crypto that doesn\u2019t include the need for a crypto-wallet or even a banking account."),(0,i.kt)("p",null,"Vouchers or coupons remain a specific financial instrument that is regulated in a particular manner. Similar rules have evolved for limited digital payments, used by telecoms, FinTech startups and banks. Bitins was able to explore and integrate both opportunities into a unique platform."),(0,i.kt)("p",null,"While the current model is locally profitable and ready for internationalization, as it does provide both the maximal simplicity and services to unbanked/underbanked segments within a growing crypto market, we believe that additional work on the platform would facilitate this route and further enable the envisioned global expansion"),(0,i.kt)("h3",{id:"project-details"},"Project Details"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/98888366/152210061-f2784234-6712-413f-8fe9-41ba0306f5cf.png",alt:"DOT coupons"})),(0,i.kt)("p",null,"Coupons are technically utility tokens by definition. While efficient by current centralized exchanged based standards, BSN together with Bitins sit on the opportunity to widely improve efficiency and reduce system complexity. Direct exchange of coupons to tokens does not only improve the efficiency of the system, but due to existing utility it complies with most legal frameworks by design."),(0,i.kt)("p",null,"While this is a robust and logical expansion of Bitins, probably the most lucrative route of further development lies within the future expansion of services on top of the token platform. While integration with existing DeFi systems is logical, there might be enough traction within the basic platform for the development of an own exchange/DeFi platform."),(0,i.kt)("p",null,"The system itself as it seen by BSN will have five functional modules:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Ink! smart contract, that executes all logic for cashflows and coupons operations;"),(0,i.kt)("li",{parentName:"ol"},"Centralized system management module for stakeholders (coupons generation, invalidation and financial management);"),(0,i.kt)("li",{parentName:"ol"},"Centralized system management module for service provider (commissions management and stats) with front-end service for new off-chain users: all-in-one service for wallet generation and immediate transaction with gas charged from service provider\u2019s pool;"),(0,i.kt)("li",{parentName:"ol"},"Management apps;"),(0,i.kt)("li",{parentName:"ol"},"User apps.")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/98888366/155559730-166ed4da-8712-48a3-941f-168f825d1649.png",alt:"Architecture 2 drawio"})),(0,i.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,i.kt)("p",null,"In the entire BitIns service each coupon has a code that is issued by a centralized backend and printed on a POS terminal upon payment. A user redeems a coupon using this code.\nUnder this project the main idea of the service will be redeveloped in a confidential and trustless manner using a smart-contract in a blockchain: each coupon will get two keys (codes) - a private and a personal one: the public one will be stored in the smart contract and the private key will be known only to a buyer/user from the entire coupon (it may be encrypted in a QR-code on the coupon or written in any other safe manner). The destination wallet address for the transaction will be signed by the private key so that no destination wallet spoofing could be done by scams."),(0,i.kt)("p",null,"The new proposed smart-contract will become an on-ramp for fiat currencies: a native or non-native token of choice could be issued/exchanged for fiat within a coupon redemption. Some of anticipated ways of fiat-to-crypto exchange:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"issue a native stablecoin upon coupon redemption;"),(0,i.kt)("li",{parentName:"ul"},"on-line exchange of the coupon value for native Polkadot or parachain tokens (e.g. DOT, LINK, COMP etc.) or stablecoins like aUSD using Polkadex or other DEX projects in the ecosystem;"),(0,i.kt)("li",{parentName:"ul"},"on-line exchange of the coupon value for native assets from other blockchains like BTC using 3rd party EX like Kraken.")),(0,i.kt)("p",null,"As the token natively represents the bridge from fiat to crypto it can also enable an integration with a DeFi/CeFi environment on top and development of the same further down the road: further parts of the project include developing of a payment widget, that can make a transaction to a target wallet with a crypto-currency of choice without even issuing a personal wallet \u2013 straight coupon-to-crypto payments."),(0,i.kt)("p",null,"Immediate benefits of the token system would be the integration with global FinTech platforms and NFT markets and potentially expansion of the coupon system to using coupon-issued stablecoins for all transactions.\nThe key benefits are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Enhance payment options for DeFi projects with a fiat-to-crypto ramp;"),(0,i.kt)("li",{parentName:"ul"},"Propose a reliable but private and confidential state of payment with crypto assets.")),(0,i.kt)("h2",{id:"team-"},"Team \ud83d\udc65"),(0,i.kt)("h3",{id:"team-members"},"Team members"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Gregor Knafelc, CEO at BitIns Ltd."),(0,i.kt)("li",{parentName:"ul"},"Andrej Muzevic, member of the Board at Bela Supernova d.o.o"),(0,i.kt)("li",{parentName:"ul"},"Sergey Cymbal, MBA, CEO at Bela Supernova d.o.o"),(0,i.kt)("li",{parentName:"ul"},"Sergey Zolotukhin, CTO at Bela Supernova d.o.o"),(0,i.kt)("li",{parentName:"ul"},"Dmitrii Putilov, Blockchain Department Director at Bela Supernova d.o.o"),(0,i.kt)("li",{parentName:"ul"},"Dmitrii Volodin, COO at Bela Supernova d.o.o"),(0,i.kt)("li",{parentName:"ul"},"Ilia Shavrin, Full stack software developer at Bela Supernova d.o.o"),(0,i.kt)("li",{parentName:"ul"},"Anton Shramko, Full stack software developer at Bela Supernova d.o.o"),(0,i.kt)("li",{parentName:"ul"},"Ksenia Baranova, QA Lead at Bela Supernova d.o.o"),(0,i.kt)("li",{parentName:"ul"},"Alexey Vexin, Project Manager at Bela Supernova d.o.o"),(0,i.kt)("li",{parentName:"ul"},"Anton Borisov, DevOps Engineer at Bela Supernova d.o.o")),(0,i.kt)("h3",{id:"contact"},"Contact"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Contact Name:")," Sergey Cymbal"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Contact Email:")," ",(0,i.kt)("a",{parentName:"li",href:"mailto:sc@bsn.si"},"sc@bsn.si")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Website:")," ",(0,i.kt)("a",{parentName:"li",href:"https://www.bsn.si"},"https://www.bsn.si"),", ",(0,i.kt)("a",{parentName:"li",href:"https://bitins.net/"},"https://bitins.net/"))),(0,i.kt)("h3",{id:"legal-structure"},"Legal Structure"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Registered Address:")," Cesta v Mestni log 55, Ljubljana 1000, Slovenia"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Registered Legal Entity:")," BELA SUPERNOVA, sistemske re\u0161itve d.o.o.")),(0,i.kt)("h3",{id:"teams-experience"},"Team's experience"),(0,i.kt)("p",null,"Our team has extensive expertise on multiple levels starting from progressive vision all the way down to software and solution development. This blend of knowledge and skills ensure we tackle the most ambitious challenges and come up with commercially successful solutions in FinTech industry. Natural ability of some of the team member to navigate and predict future technological trends combined with technical experience and project management skills of other members translates into the clear roadmap. "),(0,i.kt)("p",null,"Gregor Knafelc is a trailblazer who developed a unique business model and software for selling crypto vouchers on POS. He built one of the most recognized regional brands serving regional bluechip companies and established a strategic partnership with the state oil company Petrol and a national Telecom. Gregor\u2019s company disrupted the crypto market being the first to start selling crypto through ATMs."),(0,i.kt)("p",null,"Andrej Muzevic for the last 25 years acts as an Advisor and Investor for high tech businesses empowering and mentoring bright minds who build technologies of the future. He has the most experience in Blockchain, CeFi, DeFi, Data and other knowledge intensive areas. Andrej is also a very active member of Etherium Community."),(0,i.kt)("p",null,"Sergey Cymbal is an experienced executive, leader and visioner responsible for the most disruptive innovations initiatives across Oil/Gas, Utilities, and Telcos in Russia. Ex-member of Sochi Olympics HQ, responsible for digitalization, Smart grid evangelist. Blockchain early follower, participates in several crypto initiatives."),(0,i.kt)("p",null,"Sergey Zolotukhin has over 20 years of experience in R&D and software development with a deep focus on Machine Learning, Neural Networks and Mobile solutions design in Telcos and Pension Funds. Led several enterprise machine learning project, has various experience in crypto and blockchain development."),(0,i.kt)("p",null,"Dmitrii Putilov has over 17 years of experience leading the teams creating and maintaining high availability sites. His portfolio contains creation of the robee.io investment platform included in top500 in coinmarketcap."),(0,i.kt)("p",null,"Dmitrii Volodin has a background in IT. For over 15 years he has been helping customers build, implement, and maximize value of their critical IT infrastructure and solutions across Enterprise, Manufacturing and Healthcare industries."),(0,i.kt)("p",null,"Ilia Shavrin is a solution architect and full stack software developer with over 12 years of experience in high load enterprise applications. His most recent focus is on blockchain and creation of decentralized applications."),(0,i.kt)("p",null,"Anton Shramko is an experienced developer with 7 years of experience on various positions, including solution architect in Krypton. Anton active contributor to open source and blockchain communities, he is also a frequent speaker in DevCon conferences. "),(0,i.kt)("p",null,"Ksenia Baranova is an QA test engineer with over 5 years of experience. Ksenia has exceptional knowledge and skills in the field. She is highly referred within this team, as well as by her former teams."),(0,i.kt)("p",null,"Alexey Vexin is product owner and project manager with 10+ years of experience in managing complicated telecoms and IT projects in Telco, Utilities and Governmental sectors with deep focus on business process management. Led a dozen of federal scaled projects for IT systems implementation and industry scaled technology development, standardization and implementation."),(0,i.kt)("p",null,"Anton Borisov is a DevOps Engineer with broad experience. For over 15 years Anton was supporting, administering, and maintaining secure networks, servers, and clusters. He also has versatile experience with CI/CD, IT Infrastructure Monitoring, and Kubernetes on-premise and in Cloud. One of the most recent projects Anton participated in was building a first on chain casino."),(0,i.kt)("p",null,"Bela Supernova has already apllied for a grant ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/filecoin-project/devgrants/issues/418"},"OpenEHR Integration")),(0,i.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/ManageIQ/manageiq-providers-amazon/commits?author=aiperon"},"https://github.com/ManageIQ/manageiq-providers-amazon/commits?author=aiperon")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/ManageIQ/manageiq/commits/?author=aiperon"},"https://github.com/ManageIQ/manageiq/commits/?author=aiperon")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/friktor?tab=repositories"},"https://github.com/friktor?tab=repositories"))),(0,i.kt)("h3",{id:"team-linkedin-profiles-if-available"},"Team LinkedIn Profiles (if available)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"[Gregor Knafelc]"," (",(0,i.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/gregorknafelc/"},"https://www.linkedin.com/in/gregorknafelc/"),")"),(0,i.kt)("li",{parentName:"ul"},"[Andrej Muzevic]"," (",(0,i.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/andrej-muzevic-075b674a/"},"https://www.linkedin.com/in/andrej-muzevic-075b674a/"),")"),(0,i.kt)("li",{parentName:"ul"},"[Sergey Cymbal]"," (",(0,i.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/sergecymbal/"},"https://www.linkedin.com/in/sergecymbal/"),")"),(0,i.kt)("li",{parentName:"ul"},"[Sergey Zolotukhin]"),(0,i.kt)("li",{parentName:"ul"},"[Dmitrii Putilov]"," (",(0,i.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/dmitri-p-96b0a140/"},"https://www.linkedin.com/in/dmitri-p-96b0a140/"),")"),(0,i.kt)("li",{parentName:"ul"},"[Dmitrii Volodin]"," (",(0,i.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/dm1tr11-volodin/"},"https://www.linkedin.com/in/dm1tr11-volodin/"),")"),(0,i.kt)("li",{parentName:"ul"},"[Ilia Shavrin]"," (",(0,i.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/ilia-shavrin-716552228/"},"https://www.linkedin.com/in/ilia-shavrin-716552228/"),")"),(0,i.kt)("li",{parentName:"ul"},"[Anton Shramko]"," (",(0,i.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/anton-shramko-25971b162/"},"https://www.linkedin.com/in/anton-shramko-25971b162/"),")"),(0,i.kt)("li",{parentName:"ul"},"[Ksenia Baranova]"," (",(0,i.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/mayawotson/"},"https://www.linkedin.com/in/mayawotson/"),")"),(0,i.kt)("li",{parentName:"ul"},"[Alexey Vexin]"," (",(0,i.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/alexey-vexin-800a4068/"},"https://www.linkedin.com/in/alexey-vexin-800a4068/"),")"),(0,i.kt)("li",{parentName:"ul"},"[Anton Borisov]")),(0,i.kt)("h2",{id:"development-status-"},"Development Status \ud83d\udcd6"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://bitins.net/en/"},"BitIns")," is a company that since 2016 has provided the fastest and easiest access to Bitcoin via buying a Bitcoin coupon, which is sold in Slovenia through partner shops and via SMS messages."),(0,i.kt)("h2",{id:"development-roadmap-"},"Development Roadmap \ud83d\udd29"),(0,i.kt)("p",null,"At this stage we\u2019ll execute three deliverables:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"an Ink! smart contract with main functional logic;"),(0,i.kt)("li",{parentName:"ul"},"centralized management back-end MVP;"),(0,i.kt)("li",{parentName:"ul"},"Buyer's UI MVP.")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/98888366/157524704-713d8b35-0d99-46e2-9248-139b2660582c.png",alt:"Milestones 3"})),(0,i.kt)("p",null,"The project will be split in 2 milestones that will be supported by a group of 2 developers, 1 UI/UX designer, 1 PO and 1 QA."),(0,i.kt)("h3",{id:"overview-1"},"Overview"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 2 months"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Full-Time Equivalent (FTE):"),"  4 FTE"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Total Costs:")," 36,100 USD")),(0,i.kt)("h3",{id:"milestone-1--design-and-development-of-an-ink-smart-contract"},"Milestone 1 \u2014 Design and development of an Ink! smart contract"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Estimated duration:")," 1 month"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"FTE:"),"  2 FTE"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Costs:")," 17,400 USD")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,i.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,i.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0a."),(0,i.kt)("td",{parentName:"tr",align:null},"License"),(0,i.kt)("td",{parentName:"tr",align:null},"Apache 2.0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0b."),(0,i.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,i.kt)("td",{parentName:"tr",align:null},"We will provide both ",(0,i.kt)("strong",{parentName:"td"},"inline documentation")," of the code and a basic ",(0,i.kt)("strong",{parentName:"td"},"tutorial")," that explains how a user can run our smart contract and send test transactions, which will show how the functionality works.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0c."),(0,i.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,i.kt)("td",{parentName:"tr",align:null},"Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"1."),(0,i.kt)("td",{parentName:"tr",align:null},"Liquidity pool management methods"),(0,i.kt)("td",{parentName:"tr",align:null},"We will create methods for keeping and managing main liquidity pool, withdraw/top-up assets from/to main liquidity pool (service provider's pool)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"2."),(0,i.kt)("td",{parentName:"tr",align:null},"Coupon data storage"),(0,i.kt)("td",{parentName:"tr",align:null},"We will create a method for storing issued and sold coupons in the smart contract")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"3."),(0,i.kt)("td",{parentName:"tr",align:null},"Coupon registration"),(0,i.kt)("td",{parentName:"tr",align:null},"We will create a coupon registration method (for each registered coupon code an appropriate assets volume will be locked in the liquidity pool) and coupon code ZK-validation method (to prove to a coupon seller, that the coupon is registered and there\u2019s enough liquidity locked for it without showing the private key)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"5."),(0,i.kt)("td",{parentName:"tr",align:null},"Coupon liquidation"),(0,i.kt)("td",{parentName:"tr",align:null},"We will create a coupon burn method upon it\u2019s redemption and corresponding transaction")))),(0,i.kt)("h3",{id:"milestone-2--design-and-development-of-system-management-tools"},"Milestone 2 \u2014 Design and development of system management tools"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Estimated Duration:")," 1 month"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"FTE:"),"  2 FTE"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Costs:")," 18,700 USD")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,i.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,i.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0a."),(0,i.kt)("td",{parentName:"tr",align:null},"License"),(0,i.kt)("td",{parentName:"tr",align:null},"Apache 2.0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0b."),(0,i.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,i.kt)("td",{parentName:"tr",align:null},"We will provide both ",(0,i.kt)("strong",{parentName:"td"},"inline documentation")," of the code and a basic ",(0,i.kt)("strong",{parentName:"td"},"tutorial")," that explains how a user can run our smart contract and send test transactions, which will show how the functionality works.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0c."),(0,i.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,i.kt)("td",{parentName:"tr",align:null},"Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0d."),(0,i.kt)("td",{parentName:"tr",align:null},"Docker"),(0,i.kt)("td",{parentName:"tr",align:null},"We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0e."),(0,i.kt)("td",{parentName:"tr",align:null},"Article"),(0,i.kt)("td",{parentName:"tr",align:null},"We will publish an ",(0,i.kt)("strong",{parentName:"td"},"article")," that explains what was achieved, how to use the new Dapp and what benefits what are the benefits of using the system")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"1."),(0,i.kt)("td",{parentName:"tr",align:null},"Centralized management back-end"),(0,i.kt)("td",{parentName:"tr",align:null},"We will develop service provider\u2019s CLI tools for coupon lifecycle management including: coupon generation algorithm implementation, coupon storage DB, coupon registration in a blockchain. Also it will include tools for liquidity pool management \u2013 assets top-up or withdrawal, get balance. Each coupon will consist of a public and a private key. Public keys will be delivered to the smart contract for operations. Private keys will be accessible only to buyers and will validate the transaction upon coupon redemption. Upon registration of a coupon in the smart contract the appropriate sum of tokens will be locked in the service provider\u2019s pool as a collateral for the coupon balance.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"2."),(0,i.kt)("td",{parentName:"tr",align:null},"Buyer's web interface"),(0,i.kt)("td",{parentName:"tr",align:null},"We will develop a web UI for coupons' redemption for users that already have an existing wallet with non-zero balance. Validation of the coupon will be made straight by the smart contract with gas taken from the user\u2019s wallet.")))),(0,i.kt)("h2",{id:"future-plans"},"Future Plans"),(0,i.kt)("p",null,"Above defined deliverables are just a start position for future development of the product \u2013 a unified platform for users for easiest exchange of their fiat assets to crypto and with a personal wallet that can be used for payments in the ecosystem without excessive transactions and gas fees. Also, this is going to be a service for sellers and service providers to add straight fiat-to-crypto payments to their apps and smart contracts. The easiest way to perform a reliable yet confidential way of payments."),(0,i.kt)("p",null,"Our future plans for the project:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Developing a user\u2019s mobile app for \u201con-the-fly\u201d coupon redemption by scanning a QR-code on the coupon \u2013 private key will be coded with a QR-code;"),(0,i.kt)("li",{parentName:"ul"},"Algorithmic stablecoin development for using as a native service asset;"),(0,i.kt)("li",{parentName:"ul"},"Payment widget and APIs development for straight coupon-to-crypto payments in 3rd party Dapps;"),(0,i.kt)("li",{parentName:"ul"},"Fiat off-ramp development: a converse coupon technology to withdraw cash on sales partners POS terminals.")),(0,i.kt)("h2",{id:"additional-information-"},"Additional Information \u2795"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"How did you hear about the Grants Program?"),"\nOur team includes blockchain enthusiasts who have strong hi-tech experience and strive to implement their ideas and give maximum value to emerging blockchain and crypto markets. That's why the Grants Program is a self-evident knowledge for our team."))}d.isMDXComponent=!0}}]);