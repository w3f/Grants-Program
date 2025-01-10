"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[40839],{64971:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"applications/Apron_Network","title":"Apron Network","description":"Team Name:* Apron Labs","source":"@site/applications/Apron_Network.md","sourceDirName":"applications","slug":"/applications/Apron_Network","permalink":"/applications/Apron_Network","draft":false,"unlisted":false,"editUrl":"https://github.com/w3f/Grants-Program/edit/master/applications/Apron_Network.md","tags":[],"version":"current","frontMatter":{}}');var t=r(74848),s=r(28453);const a={},l="Apron Network",o={},c=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-page_facing_up",level:2},{value:"Overview",id:"overview",level:3},{value:"Introduction",id:"introduction",level:4},{value:"Integration",id:"integration",level:4},{value:"Team Interest",id:"team-interest",level:4},{value:"Project Details",id:"project-details",level:3},{value:"Architecture",id:"architecture",level:4},{value:"Substrate / Polkadot Integration",id:"substrate--polkadot-integration",level:4},{value:"Scenarios",id:"scenarios",level:4},{value:"Interface Specification",id:"interface-specification",level:4},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-busts_in_silhouette",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles",id:"team-linkedin-profiles",level:3},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-nut_and_bolt",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 Example \u2014 Implement Substrate Modules",id:"milestone-1-example--implement-substrate-modules",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information \u2795",id:"additional-information-heavy_plus_sign",level:2}];function h(e){const n={a:"a",annotation:"annotation",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",math:"math",mi:"mi",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"apron-network",children:"Apron Network"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Team Name:"})," Apron Labs"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Payment Address:"})," 15tV6rQSwNgWQ1Z5pim2yJmELLvWNm5D4V"]}),"\n"]}),"\n",(0,t.jsxs)(n.h2,{id:"project-overview-page_facing_up",children:["Project Overview ","\ud83d\udcc4"]}),"\n",(0,t.jsx)(n.h3,{id:"overview",children:"Overview"}),"\n",(0,t.jsx)(n.h4,{id:"introduction",children:"Introduction"}),"\n",(0,t.jsx)(n.p,{children:"The Apron Network's vision is to be the entry point of the Web3 World in the future. The goal of the Apron Network is to create the decentralized infrastructure for all the developers who want to build applications on top of the blockchain, the service providers who are running nodes for blockchain, and the users who are using applications based on blockchain."}),"\n",(0,t.jsx)(n.p,{children:"The blockchain infrastructure services are provided by seldom centralized service providers. Those service providers are commercial companies and earn profit by providing these services. In general speaking, there is no problem with such a business model that commercial companies provide infrastructure services and get paid by developers or users in the past ages. But NOT NOW. The main feature of blockchain is decentralization, while all the blockchain infrastructure services are built and maintained by commercial companies, and those systems are centralized, which is against the decentralization of blockchain. There is a potential issue of such a business model that the service providers can steal the blockchain from the community by manipulating the API accesses through their infrastructure services. Once the service providers manipulate the API accesses, there is no real blockchain anymore."}),"\n",(0,t.jsx)(n.p,{children:"Maybe you are still thinking that it sounds terrible but no one can prove it. Let's see the recent accident of infura.io. Almost all of the blockchain applications mainly rely on the API services from infura.io, but none of the builders of blockchain applications can imagine what will happen if infura.io manipulates the API services. Hopefully, infura.io worth our trust according to past services, and there is no manipulation found yet."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"On Nov. 11th, 2020, the API services from infura.io are down, and the idea of Apron Network comes out."})}),"\n",(0,t.jsx)(n.p,{children:"The Apron Network is built by the Apron Labs powered by Substrate. It provides a Cross-chain Decentralized Infrastructure Services Network that will be used by blockchain node runners, DApp developers, the public chain community, and DApp users. Every DApp developer can discover the proper service provider for a specific blockchain through the decentralized infrastructure market on the Apron Network. The Apron Network can be run as a parachain of Polkadot."}),"\n",(0,t.jsx)(n.p,{children:"With the Apron Network,  the DApp developers can find their API endpoint, node runners can provide infrastructure services to get profit and all the infrastructure services will be decentralized on the two-layers infrastructure service network. The Apron Network will guaranty there is no infura.io accident anymore!"}),"\n",(0,t.jsx)(n.h4,{id:"integration",children:"Integration"}),"\n",(0,t.jsx)(n.p,{children:"The Apron Network can be run as a parachain on Polkadot, or an independent chain. The Apron Network contains Apron Node and Apron Market. The Apron Node is built with Substrate 2.0 Framework, and the OCW (Off-chain worker) will be included for API manage records. Apron Market consists of Apron Market Contracts and Apron Market Front End. The contracts will be implemented with Ink!, and the front-end will be built with polkadot.js."}),"\n",(0,t.jsx)(n.h4,{id:"team-interest",children:"Team Interest"}),"\n",(0,t.jsx)(n.p,{children:"Most of the team members are DApp developers who suffer from the lacking of Ethereum API Endpoint and tightly rely on infura.io since we are not able to set up our full node due to funds. As we have known, most of the DApp developers have the same embarrassing situation as us. After shocked by the accident of infura.io, we are willing to build a decentralized infrastructure service network, and we name it the Apron Network."}),"\n",(0,t.jsx)(n.p,{children:"With Substrate 2.0 Framework, we are able to build a customized blockchain network easily, and we have the ability to integrate an API Gateway to manage blockchain API services in Apron Node. With the Apron Network, the blockchain node runners can provide Infrastructure service easily and get profit through this decentralized infrastructure services network."}),"\n",(0,t.jsx)(n.h3,{id:"project-details",children:"Project Details"}),"\n",(0,t.jsx)(n.h4,{id:"architecture",children:"Architecture"}),"\n",(0,t.jsxs)(n.p,{children:["The Apron Network consists of ",(0,t.jsx)(n.strong,{children:"Apron Node"}),", ",(0,t.jsx)(n.strong,{children:"Arpon Market Contracts"}),", ",(0,t.jsx)(n.strong,{children:"Decentralized API Market"}),", and the ",(0,t.jsx)(n.strong,{children:"Apron SDK"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://raw.githubusercontent.com/Apron2050/graphics/main/Apron%20Architecture.jpg",alt:"img"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The Apron Node is the customized chain node for the Apron network built with Substrate 2.0. Besides blockchain-related features, it contains the full features of an API Gateway in the early versions. In future versions, more infrastructure features will be added. It should be run together with the blockchain node and operate by blockchain node runners. For example,  the owner of the Ethereum Full node can set up an Apron Node to interact with his Ethereum Full node through RPC, then the DApp developer can retrieve the information of his Apron Node from the Apron Network, and call the API like calling an API with infura.io."}),"\n",(0,t.jsxs)(n.li,{children:["The Apron Market Contracts manage the API services information, the registration of API services, the registration of API users, and the billing of API usage. All the API information is stored in these contracts. The billing feature is implemented,  the API users have to pay ",(0,t.jsxs)(n.strong,{children:[(0,t.jsxs)(n.span,{className:"katex",children:[(0,t.jsx)(n.span,{className:"katex-mathml",children:(0,t.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(n.semantics,{children:[(0,t.jsxs)(n.mrow,{children:[(0,t.jsx)(n.mi,{children:"A"}),(0,t.jsx)(n.mi,{children:"N"}),(0,t.jsx)(n.mi,{children:"T"}),(0,t.jsx)(n.mo,{children:"\u2217"}),(0,t.jsx)(n.mo,{children:"\u2217"}),(0,t.jsx)(n.mi,{children:"t"}),(0,t.jsx)(n.mi,{children:"o"}),(0,t.jsx)(n.mi,{children:"u"}),(0,t.jsx)(n.mi,{children:"s"}),(0,t.jsx)(n.mi,{children:"e"}),(0,t.jsx)(n.mi,{children:"t"}),(0,t.jsx)(n.mi,{children:"h"}),(0,t.jsx)(n.mi,{children:"e"}),(0,t.jsx)(n.mi,{children:"s"}),(0,t.jsx)(n.mi,{children:"e"}),(0,t.jsx)(n.mi,{children:"A"}),(0,t.jsx)(n.mi,{children:"P"}),(0,t.jsx)(n.mi,{children:"I"}),(0,t.jsx)(n.mi,{children:"s"}),(0,t.jsx)(n.mi,{children:"a"}),(0,t.jsx)(n.mi,{children:"n"}),(0,t.jsx)(n.mi,{children:"d"}),(0,t.jsx)(n.mi,{children:"t"}),(0,t.jsx)(n.mi,{children:"h"}),(0,t.jsx)(n.mi,{children:"e"}),(0,t.jsx)(n.mi,{children:"A"}),(0,t.jsx)(n.mi,{children:"P"}),(0,t.jsx)(n.mi,{children:"I"}),(0,t.jsx)(n.mi,{children:"o"}),(0,t.jsx)(n.mi,{children:"w"}),(0,t.jsx)(n.mi,{children:"n"}),(0,t.jsx)(n.mi,{children:"e"}),(0,t.jsx)(n.mi,{children:"r"}),(0,t.jsx)(n.mi,{children:"s"}),(0,t.jsx)(n.mi,{children:"w"}),(0,t.jsx)(n.mi,{children:"i"}),(0,t.jsx)(n.mi,{children:"l"}),(0,t.jsx)(n.mi,{children:"l"}),(0,t.jsx)(n.mi,{children:"g"}),(0,t.jsx)(n.mi,{children:"e"}),(0,t.jsx)(n.mi,{children:"t"}),(0,t.jsx)(n.mi,{children:"p"}),(0,t.jsx)(n.mi,{children:"a"}),(0,t.jsx)(n.mi,{children:"i"}),(0,t.jsx)(n.mi,{children:"d"}),(0,t.jsx)(n.mi,{children:"b"}),(0,t.jsx)(n.mi,{children:"y"}),(0,t.jsx)(n.mo,{children:"\u2217"}),(0,t.jsx)(n.mo,{children:"\u2217"})]}),(0,t.jsx)(n.annotation,{encoding:"application/x-tex",children:"ANT** to use these APIs and the API owners will get paid by **"})]})})}),(0,t.jsxs)(n.span,{className:"katex-html","aria-hidden":"true",children:[(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"0.6833em"}}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"A"}),(0,t.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"NT"}),(0,t.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,t.jsx)(n.span,{className:"mbin",children:"\u2217"}),(0,t.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,t.jsx)(n.span,{className:"mord",children:"\u2217"}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"t"}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"o"}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"u"}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"se"}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"t"}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"h"}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"ese"}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"A"}),(0,t.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"P"}),(0,t.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.07847em"},children:"I"}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"s"}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"an"}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"d"}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"t"}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"h"}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"e"}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"A"}),(0,t.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"P"}),(0,t.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.07847em"},children:"I"}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"o"}),(0,t.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.02691em"},children:"w"}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"n"}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"ers"}),(0,t.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.02691em"},children:"w"}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"i"}),(0,t.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"ll"}),(0,t.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"g"}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"e"}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"tp"}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"ai"}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"d"}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"b"}),(0,t.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,t.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,t.jsx)(n.span,{className:"mbin",children:"\u2217"}),(0,t.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"0.4653em"}}),(0,t.jsx)(n.span,{className:"mord",children:"\u2217"})]})]})]}),"ANT"]}),". Everything is done through smart contracts. ",(0,t.jsx)(n.strong,{children:"$ANT"})," is the native token in Apron Network."]}),"\n",(0,t.jsx)(n.li,{children:"Decentralized API Market lists all the API services registered and available for developers from the data in smart contracts. DApp developers search the API services according to their needs and choose the one with the proper price."}),"\n",(0,t.jsx)(n.li,{children:"The Apron SDK makes the use of Apron Network easier. DApp developers can integrate this SDK in their app to dynamic switch blockchain entry-point according to their needs."}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"substrate--polkadot-integration",children:"Substrate / Polkadot Integration"}),"\n",(0,t.jsx)(n.p,{children:"The Apron Network can be run as a para-chain of Polkadot, and also can be run as an independent chain apart from Polkadot."}),"\n",(0,t.jsx)(n.p,{children:"The whole network is built on top of the Substate 2.0 Framework, and OCW (off-chain worker) is used to report API usage statistics on which the billing relies."}),"\n",(0,t.jsx)(n.p,{children:"All the contracts will be implemented with Ink!, and the front-end of Decentralized API Market will be on top of polkadot.js."}),"\n",(0,t.jsx)(n.h4,{id:"scenarios",children:"Scenarios"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Node Runners"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://raw.githubusercontent.com/Apron2050/graphics/main/Apron%20Node.jpg",alt:"img"})}),"\n",(0,t.jsxs)(n.p,{children:["The above figure shows the role of each component act from the view of the blockchain node owner. To simply the scenario, we take an example. The para-chain node is running at the beginning, the Apron Node shown above is set up by the owner by staking some ",(0,t.jsx)(n.strong,{children:"$ANT"}),", and the Apron Node is accessible on the internet. The owner can configure Apron Node with the RPC entry point of the para-chain node, API access frequency, API access fee, and other limitations. After everything is configured, the Apron Node will be able to call the RPC interface of para-chain, and DApps will call the API through the Apron Node. The Apron Node calculates the API usage statistics of each caller, then stores this data through OCW (off-chain worker) on the chain for further billing."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"DApp Developers"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://raw.githubusercontent.com/Apron2050/graphics/main/Apron%20Usage.jpg",alt:"img"})}),"\n",(0,t.jsx)(n.p,{children:"For DApp developers, there are two components that will be used. One is the Decentralized API Market, the other one is the Apron SDK. Firstly, DApp developers search the API services in the API service repositories ( which is part of the Decentralized API Market) on the webpage. After finding the proper API service, the DApp developer will generate an API access key with the help of Apron Market Contracts. Finally, the DApp developer develops the DApp with the API access key to use the related API services. Of course, the DApp developer should pay the fee of using the API services according to the fee addressed by the API service provider."}),"\n",(0,t.jsx)(n.h4,{id:"interface-specification",children:"Interface Specification"}),"\n",(0,t.jsx)(n.p,{children:"The function provided by the pallet to report API usage statistics data is reportAPIUsage."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"1. reportAPIUsage\n\n- desc: Report the API usage statistics from API Gateway data.\n- params: API Key\n- return: the calls number\n"})}),"\n",(0,t.jsx)(n.h3,{id:"ecosystem-fit",children:"Ecosystem Fit"}),"\n",(0,t.jsx)(n.p,{children:"Infura.io is the typical infrastructure services provider that is totally centralized."}),"\n",(0,t.jsx)(n.p,{children:"The Apron Network provides exactly the same API services as infura.io but in a decentralized way, thanks to Substrate 2.0 Framework which let us only focused on the logic on top of blockchain rather than re-develop a new blockchain. In the future, the Apron Network will provide a decentralized infrastructure services network."}),"\n",(0,t.jsxs)(n.h2,{id:"team-busts_in_silhouette",children:["Team ","\ud83d\udc65"]}),"\n",(0,t.jsx)(n.h3,{id:"team-members",children:"Team members"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Toney - CTO/Project Lead"}),"\n",(0,t.jsx)(n.li,{children:"Junjun - Full-stack Developer"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"contact",children:"Contact"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://apron.network",children:"https://apron.network"})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"legal-structure",children:"Legal Structure"}),"\n",(0,t.jsx)(n.p,{children:"No Legal Entity"}),"\n",(0,t.jsx)(n.h3,{id:"teams-experience",children:"Team's experience"}),"\n",(0,t.jsx)(n.p,{children:"Toney"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Over 13 years of experiences in Software Development"}),"\n",(0,t.jsx)(n.li,{children:"Software Engineer in MS"}),"\n",(0,t.jsx)(n.li,{children:"Mobile Game Developer"}),"\n",(0,t.jsx)(n.li,{children:"Blockchain Game Developer"}),"\n",(0,t.jsx)(n.li,{children:"The Chief Tech Officier of the team which wins TRON Accelerator 2018 Game Rewards"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Junjun"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Over 15 years of experiences in Software Development"}),"\n",(0,t.jsx)(n.li,{children:"Former Senior Software Engineer in Lucent"}),"\n",(0,t.jsx)(n.li,{children:"DApp Developer"}),"\n",(0,t.jsx)(n.li,{children:"Full-stack Developer"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"team-code-repos",children:"Team Code Repos"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Apron Labs: ",(0,t.jsx)(n.a,{href:"https://github.com/apron-network",children:"https://github.com/apron-network"})]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"team-linkedin-profiles",children:"Team LinkedIn Profiles"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.linkedin.com/in/yi-sui-297a9223/",children:"Toney"})}),"\n"]}),"\n",(0,t.jsxs)(n.h2,{id:"development-roadmap-nut_and_bolt",children:["Development Roadmap ","\ud83d\udd29"]}),"\n",(0,t.jsx)(n.h3,{id:"overview-1",children:"Overview"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Total Estimated Duration:"})," 3 months"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Full-time equivalent (FTE):"})," 4"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Total Costs:"})," 0.73 BTC"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"milestone-1-example--implement-substrate-modules",children:"Milestone 1 Example \u2014 Implement Substrate Modules"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Estimated Duration:"})," 3 months"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Full-time Equivalent (FTE):"})," 4"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Costs:"})," 0.73 BTC"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"In the first milestone, the features for the PoC will be implemented and tested by limited users."}),"\n",(0,t.jsx)(n.p,{children:"The following components will be included:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Apron Node"}),"\n",(0,t.jsx)(n.li,{children:"Apron Market Contracts"}),"\n",(0,t.jsx)(n.li,{children:"Decentralized API Market / Front End"}),"\n",(0,t.jsx)(n.li,{children:"Apron SDK"}),"\n"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Number"}),(0,t.jsx)(n.th,{children:"Deliverable"}),(0,t.jsx)(n.th,{children:"Specification"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"0a."}),(0,t.jsx)(n.td,{children:"License"}),(0,t.jsx)(n.td,{children:"Apache 2.0"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"0b."}),(0,t.jsx)(n.td,{children:"Documentation"}),(0,t.jsx)(n.td,{children:"The documentation will be provided to show the whole achitecture of the Apron Network."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"0c."}),(0,t.jsx)(n.td,{children:"Testing Guide"}),(0,t.jsx)(n.td,{children:"The testing guide will be provided to test each component."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"1."}),(0,t.jsx)(n.td,{children:"Apron Node Repo"}),(0,t.jsx)(n.td,{children:"We will create a customized chain node with Substrate 2.0 Framework, it will contains the OCW module to report API usage statistics on-chain."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"2."}),(0,t.jsx)(n.td,{children:"Apron Market Contracts Repo"}),(0,t.jsx)(n.td,{children:"The contracts will be implemented with Ink!, and it will handle all the API services related functions such as 1) Staking tokens to register API service for node runner, 2) Register and unregister API service for node runner, 3) Define the price of API service for node runner, 4) Apply API service access key for node runner and DApp developers, 5) Billing System of the API usage for node runner and DApp developers, 6)Interface to integrate with a DAO to solve dispute between node runner and DApp developer"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"3."}),(0,t.jsx)(n.td,{children:"Decentralized API Market / Front End Repo"}),(0,t.jsx)(n.td,{children:"It's a webpage working with Arpon Network, it's implemented based on polkadot.js as planned."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"4."}),(0,t.jsx)(n.td,{children:"Docker"}),(0,t.jsx)(n.td,{children:"We will provide a dockerfile to demonstrate the full functionality of our chain"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"5."}),(0,t.jsx)(n.td,{children:"Tutorial"}),(0,t.jsx)(n.td,{children:"We will write an tutorial about how to use Apron Network."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"6."}),(0,t.jsx)(n.td,{children:"Article"}),(0,t.jsx)(n.td,{children:"We will write an article published on media channels."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"7."}),(0,t.jsx)(n.td,{children:"DAO"}),(0,t.jsx)(n.td,{children:"A Apron DAO will be created to handle the governance of the Decentralized API Market."})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"future-plans",children:"Future Plans"}),"\n",(0,t.jsx)(n.p,{children:"Community Plan"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Hire 3 more developers."}),"\n",(0,t.jsx)(n.li,{children:"Hire 1 marketing adviser."}),"\n",(0,t.jsx)(n.li,{children:"Recruit more contributors involved in our project."}),"\n",(0,t.jsx)(n.li,{children:"Join Polkadot related events."}),"\n",(0,t.jsx)(n.li,{children:"Bounty Program."}),"\n",(0,t.jsx)(n.li,{children:"Publish articles on media channels to expose the Apron Network."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Development Plan"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The Apron Network will run as a parachain of the Kusama."}),"\n",(0,t.jsx)(n.li,{children:"Support Kusama Node."}),"\n",(0,t.jsx)(n.li,{children:"In phase 1, our goal is to achieve all the designed functions."}),"\n",(0,t.jsx)(n.li,{children:"In phase 2, improve the stability of the Apron Network."}),"\n",(0,t.jsx)(n.li,{children:"In phase 3, provide decentralized quick node services."}),"\n",(0,t.jsx)(n.li,{children:"Finally, our goal is to provide the infrastructure services network."}),"\n"]}),"\n",(0,t.jsxs)(n.h2,{id:"additional-information-heavy_plus_sign",children:["Additional Information ","\u2795"]}),"\n",(0,t.jsx)(n.p,{children:"Currently we just start the first design of the Apron Network."}),"\n",(0,t.jsxs)(n.p,{children:["The project repo: ",(0,t.jsx)(n.a,{href:"https://github.com/apron-network",children:"https://github.com/apron-network"})]})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>l});var i=r(96540);const t={},s=i.createContext(t);function a(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);