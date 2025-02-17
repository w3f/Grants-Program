"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[46319],{28453:(e,s,n)=>{n.d(s,{R:()=>l,x:()=>a});var r=n(96540);const i={},t=r.createContext(i);function l(e){const s=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(t.Provider,{value:s},e.children)}},68883:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>a,default:()=>o,frontMatter:()=>l,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"applications/NFTStore_Network","title":"NFTStore","description":"Proposer:* NFTT Studio","source":"@site/applications/NFTStore_Network.md","sourceDirName":"applications","slug":"/applications/NFTStore_Network","permalink":"/applications/NFTStore_Network","draft":false,"unlisted":false,"editUrl":"https://github.com/w3f/Grants-Program/edit/master/applications/NFTStore_Network.md","tags":[],"version":"current","frontMatter":{}}');var i=n(74848),t=n(28453);const l={},a="NFTStore",d={},c=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-page_facing_up",level:2},{value:"Overview",id:"overview",level:3},{value:"Introduction",id:"introduction",level:4},{value:"Project Details",id:"project-details",level:3},{value:"Architecture",id:"architecture",level:4},{value:"Data Structure",id:"data-structure",level:4},{value:"<span>Main pallet storage and method</span>",id:"main-pallet-storage-and-method",level:4},{value:"UI",id:"ui",level:4},{value:"Team \ud83d\udc65",id:"team-busts_in_silhouette",level:2},{value:"Team Members",id:"team-members",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team Experience",id:"team-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-nut_and_bolt",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 \u2014 Verify Production of Concepts (POC) and Implement Substrate Modules",id:"milestone-1--verify-production-of-concepts-poc-and-implement-substrate-modules",level:4},{value:"Future Plans",id:"future-plans",level:2}];function h(e){const s={a:"a",annotation:"annotation",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",math:"math",mi:"mi",mo:"mo",mrow:"mrow",p:"p",semantics:"semantics",span:"span",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.header,{children:(0,i.jsx)(s.h1,{id:"nftstore",children:"NFTStore"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Proposer:"})," ",(0,i.jsx)(s.a,{href:"https://github.com/NFTT-studio",children:"NFTT Studio"})]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Payment Address:"}),"  1AeR4htoGwDRMpw7S2TTrzjJxeGLZsopiE"]}),"\n"]}),"\n",(0,i.jsxs)(s.h2,{id:"project-overview-page_facing_up",children:["Project Overview ","\ud83d\udcc4"]}),"\n",(0,i.jsx)(s.h3,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(s.h4,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsx)(s.p,{children:"NFTStore is an exclusive public chain for managing NFT assets. Users can not only issue their own NFTs, but also trade NFT transactions. The project is developed based on substrate 2.0. In the first phase of the design, we will write the business code at the runtime level. The project actually needs to consider whether to introduce the contract layer. In the economic model, we will fully give the token holders the transaction income on the platform Store. NFT is one of the important ways for the application of blockchain technology to approach life off-chain. We hope that this public chain will provide more possibilities for real-world assets on the chain. In addition, there are members of the team who have rich e-commerce experience. I believe that NFTStore has become the amazon.com of the blockchain and the best trading platform for digital assets in the world."}),"\n",(0,i.jsx)(s.h3,{id:"project-details",children:"Project Details"}),"\n",(0,i.jsx)(s.h4,{id:"architecture",children:"Architecture"}),"\n",(0,i.jsx)(s.p,{children:"NFTStore based on Substrate 2.0 and the Polkadot. Contains NFTStore node, pallet_nft, pallet_store and Front End."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:"https://raw.githubusercontent.com/NFTT-studio/graphics/main/NFTT-Components.png",alt:"img"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"NFTStore Node"})," is the customized chain node built by Substrate 2.0 ."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"pallet_nft"})," is used to create and manage NFT assets."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"pallet_store"})," is responsible for NFT sales."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Front End"})," provides Web UI for everyone to interact with the NFTStore. Front End will be built with React."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsxs)(s.strong,{children:["NFTStore Token ",(0,i.jsxs)(s.span,{className:"katex",children:[(0,i.jsx)(s.span,{className:"katex-mathml",children:(0,i.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(s.semantics,{children:[(0,i.jsxs)(s.mrow,{children:[(0,i.jsx)(s.mi,{children:"N"}),(0,i.jsx)(s.mi,{children:"F"}),(0,i.jsx)(s.mi,{children:"T"}),(0,i.jsx)(s.mi,{children:"T"}),(0,i.jsx)(s.mo,{children:"\u2217"}),(0,i.jsx)(s.mo,{children:"\u2217"}),(0,i.jsx)(s.mi,{children:"i"}),(0,i.jsx)(s.mi,{children:"s"}),(0,i.jsx)(s.mi,{children:"t"}),(0,i.jsx)(s.mi,{children:"h"}),(0,i.jsx)(s.mi,{children:"e"}),(0,i.jsx)(s.mi,{children:"n"}),(0,i.jsx)(s.mi,{children:"a"}),(0,i.jsx)(s.mi,{children:"t"}),(0,i.jsx)(s.mi,{children:"i"}),(0,i.jsx)(s.mi,{children:"v"}),(0,i.jsx)(s.mi,{children:"e"}),(0,i.jsx)(s.mi,{children:"t"}),(0,i.jsx)(s.mi,{children:"o"}),(0,i.jsx)(s.mi,{children:"k"}),(0,i.jsx)(s.mi,{children:"e"}),(0,i.jsx)(s.mi,{children:"n"}),(0,i.jsx)(s.mi,{children:"o"}),(0,i.jsx)(s.mi,{children:"f"}),(0,i.jsx)(s.mi,{children:"t"}),(0,i.jsx)(s.mi,{children:"h"}),(0,i.jsx)(s.mi,{children:"e"}),(0,i.jsx)(s.mi,{children:"N"}),(0,i.jsx)(s.mi,{children:"F"}),(0,i.jsx)(s.mi,{children:"T"}),(0,i.jsx)(s.mi,{children:"S"}),(0,i.jsx)(s.mi,{children:"t"}),(0,i.jsx)(s.mi,{children:"o"}),(0,i.jsx)(s.mi,{children:"r"}),(0,i.jsx)(s.mi,{children:"e"}),(0,i.jsx)(s.mo,{separator:"true",children:","}),(0,i.jsx)(s.mi,{children:"a"}),(0,i.jsx)(s.mi,{children:"n"}),(0,i.jsx)(s.mi,{children:"d"}),(0,i.jsx)(s.mi,{children:"i"}),(0,i.jsx)(s.mi,{children:"t"}),(0,i.jsx)(s.mi,{children:"w"}),(0,i.jsx)(s.mi,{children:"i"}),(0,i.jsx)(s.mi,{children:"l"}),(0,i.jsx)(s.mi,{children:"l"}),(0,i.jsx)(s.mi,{children:"p"}),(0,i.jsx)(s.mi,{children:"l"}),(0,i.jsx)(s.mi,{children:"a"}),(0,i.jsx)(s.mi,{children:"y"}),(0,i.jsx)(s.mi,{children:"t"}),(0,i.jsx)(s.mi,{children:"h"}),(0,i.jsx)(s.mi,{children:"e"}),(0,i.jsx)(s.mi,{children:"r"}),(0,i.jsx)(s.mi,{children:"o"}),(0,i.jsx)(s.mi,{children:"l"}),(0,i.jsx)(s.mi,{children:"e"}),(0,i.jsx)(s.mi,{children:"o"}),(0,i.jsx)(s.mi,{children:"f"}),(0,i.jsx)(s.mi,{children:"g"}),(0,i.jsx)(s.mi,{children:"o"}),(0,i.jsx)(s.mi,{children:"v"}),(0,i.jsx)(s.mi,{children:"e"}),(0,i.jsx)(s.mi,{children:"r"}),(0,i.jsx)(s.mi,{children:"n"}),(0,i.jsx)(s.mi,{children:"a"}),(0,i.jsx)(s.mi,{children:"n"}),(0,i.jsx)(s.mi,{children:"c"}),(0,i.jsx)(s.mi,{children:"e"}),(0,i.jsx)(s.mi,{children:"a"}),(0,i.jsx)(s.mi,{children:"n"}),(0,i.jsx)(s.mi,{children:"d"}),(0,i.jsx)(s.mi,{children:"o"}),(0,i.jsx)(s.mi,{children:"t"}),(0,i.jsx)(s.mi,{children:"h"}),(0,i.jsx)(s.mi,{children:"e"}),(0,i.jsx)(s.mi,{children:"r"}),(0,i.jsx)(s.mi,{children:"u"}),(0,i.jsx)(s.mi,{children:"t"}),(0,i.jsx)(s.mi,{children:"i"}),(0,i.jsx)(s.mi,{children:"l"}),(0,i.jsx)(s.mi,{children:"i"}),(0,i.jsx)(s.mi,{children:"t"}),(0,i.jsx)(s.mi,{children:"i"}),(0,i.jsx)(s.mi,{children:"e"}),(0,i.jsx)(s.mi,{children:"s"}),(0,i.jsx)(s.mi,{mathvariant:"normal",children:"."}),(0,i.jsx)(s.mo,{children:"\u2217"}),(0,i.jsx)(s.mo,{children:"\u2217"})]}),(0,i.jsx)(s.annotation,{encoding:"application/x-tex",children:"NFTT** is the native token of the NFTStore, and it will play the role of governance and other utilities. **"})]})})}),(0,i.jsxs)(s.span,{className:"katex-html","aria-hidden":"true",children:[(0,i.jsxs)(s.span,{className:"base",children:[(0,i.jsx)(s.span,{className:"strut",style:{height:"0.6833em"}}),(0,i.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"NFTT"}),(0,i.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,i.jsx)(s.span,{className:"mbin",children:"\u2217"}),(0,i.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,i.jsxs)(s.span,{className:"base",children:[(0,i.jsx)(s.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,i.jsx)(s.span,{className:"mord",children:"\u2217"}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"i"}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"s"}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"t"}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"h"}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"e"}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"na"}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"t"}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"i"}),(0,i.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"v"}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"e"}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"t"}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"o"}),(0,i.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"k"}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"e"}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"n"}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"o"}),(0,i.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"f"}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"t"}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"h"}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"e"}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"NFTSt"}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"ore"}),(0,i.jsx)(s.span,{className:"mpunct",children:","}),(0,i.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"an"}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"d"}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"i"}),(0,i.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02691em"},children:"tw"}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"i"}),(0,i.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"llpl"}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"a"}),(0,i.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"t"}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"h"}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"ero"}),(0,i.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"l"}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"eo"}),(0,i.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"f"}),(0,i.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"g"}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"o"}),(0,i.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"v"}),(0,i.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"er"}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"nan"}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"ce"}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"an"}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"d"}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"o"}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"t"}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"h"}),(0,i.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"er"}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"u"}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"t"}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"i"}),(0,i.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"l"}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"i"}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"t"}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"i"}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"es"}),(0,i.jsx)(s.span,{className:"mord",children:"."}),(0,i.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,i.jsx)(s.span,{className:"mbin",children:"\u2217"}),(0,i.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,i.jsxs)(s.span,{className:"base",children:[(0,i.jsx)(s.span,{className:"strut",style:{height:"0.4653em"}}),(0,i.jsx)(s.span,{className:"mord",children:"\u2217"})]})]})]}),"NFTT"]})," is necessary to secure and power the chain."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h4,{id:"data-structure",children:"Data Structure"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:"https://raw.githubusercontent.com/NFTT-studio/graphics/main/NFTTT-UML.png",alt:"img"})}),"\n",(0,i.jsx)(s.p,{children:"As shown above,  NFT design adopts ERC721 protocol\u3002"}),"\n",(0,i.jsx)(s.h4,{id:"main-pallet-storage-and-method",children:(0,i.jsx)("span",{id:"interface",children:"Main pallet storage and method"})}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"API-ID"}),(0,i.jsx)(s.th,{children:(0,i.jsx)(s.strong,{children:"Pallet Name"})}),(0,i.jsx)(s.th,{children:(0,i.jsx)(s.strong,{children:"Storage"})}),(0,i.jsx)(s.th,{children:(0,i.jsx)(s.strong,{children:"Public Method"})})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"1"}),(0,i.jsx)(s.td,{children:(0,i.jsx)("span",{id:"nft",children:"pallet_nft "})}),(0,i.jsx)(s.td,{children:"NFTMap get(fn get_nfts ): map hasher(blake2_128_concat) T::AcountId => NFT;"}),(0,i.jsxs)(s.td,{children:[(0,i.jsx)(s.code,{children:"pub fn create_nft(name:Vec<u8>,description:Vec<u8>, imageUrl:Vec<u8>, type:u8, amount:u256 "})," )"]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:"pallet_nft"}),(0,i.jsx)(s.td,{children:"ERC721:"}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"- safeTransferFrom(from:AccountId,to:AccountID,tokenId:u256,data:Vec<u8>)"})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"- safeTransferFrom(from:AccountId,to:AccountID,tokenId:u256) "})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"- transferFrom(from:AccountId,to:AccountID,tokenId:u256)"})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"- approve(approved: AccountId, tokenId:u256) "})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:" - setapproveForAll(approved: AccountId,  approved:bool)"})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"- getApprove( tokenId:u256) "})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"- isApproveForAll(owner: AccountId, operator:AccountId) "})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:" - burn(from: AccountId, tokenId:u256)"})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"2"}),(0,i.jsx)(s.td,{children:(0,i.jsx)("span",{id:"store",children:" pallet_store"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:" StoreMap get(fn get_onsale):map hasher(blake2_128_concat)  u8 =>Vec<NFT>;"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"pub fn sell_setting(contractAddress:Vec<u8>, tokenId:u256,  price:u256 )"})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:" pub fn buy(contractAddress:vec<u8>, tokenId:u256)"})})]})]})]}),"\n",(0,i.jsx)(s.h4,{id:"ui",children:"UI"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:"https://raw.githubusercontent.com/NFTT-studio/graphics/main/nfttt-frontend-mock-up.png",alt:"img"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://www.figma.com/file/o3N4WbUFlBPX8gXpAl4iBN/NFT",children:"https://www.figma.com/file/o3N4WbUFlBPX8gXpAl4iBN/NFT"})}),"\n",(0,i.jsxs)(s.h2,{id:"team-busts_in_silhouette",children:["Team ","\ud83d\udc65"]}),"\n",(0,i.jsx)(s.h3,{id:"team-members",children:"Team Members"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"blackjooohn - CTO/Project Lead"}),"\n",(0,i.jsx)(s.li,{children:"MingMing - Product Director & FE"}),"\n",(0,i.jsx)(s.li,{children:"Dragon - Full-stack Developer"}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"legal-structure",children:"Legal Structure"}),"\n",(0,i.jsx)(s.p,{children:"No Legal Entity"}),"\n",(0,i.jsx)(s.h3,{id:"team-experience",children:"Team Experience"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"blackjooohn"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Over 15 years of experiences in Development and Management"}),"\n",(0,i.jsx)(s.li,{children:"Has plenty of experience in Software Development and Blockchain Development"}),"\n",(0,i.jsx)(s.li,{children:"Currently, focus on Cross-chain technologies"}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"MingMing"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Former Product Manager in Baidu"}),"\n",(0,i.jsx)(s.li,{children:"Former Product Manager in Alibaba"}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Dragon"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Full-stack Developer"}),"\n",(0,i.jsx)(s.li,{children:"Over 20 years of experiences in Product Development and Management"}),"\n",(0,i.jsx)(s.li,{children:"Has plenty of experience in Software Architecture"}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"team-code-repos",children:"Team Code Repos"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["NFTT Studio: ",(0,i.jsx)(s.a,{href:"https://github.com/NFTT-studio",children:"https://github.com/NFTT-studio"})]}),"\n"]}),"\n",(0,i.jsxs)(s.h2,{id:"development-roadmap-nut_and_bolt",children:["Development Roadmap ","\ud83d\udd29"]}),"\n",(0,i.jsx)(s.h3,{id:"overview-1",children:"Overview"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Total Estimated Duration:"})," 2 months"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Full-time equivalent (FTE):"})," 2"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Total Costs:"})," 0.4 BTC"]}),"\n"]}),"\n",(0,i.jsx)(s.h4,{id:"milestone-1--verify-production-of-concepts-poc-and-implement-substrate-modules",children:"Milestone 1 \u2014 Verify Production of Concepts (POC) and Implement Substrate Modules"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Estimated Duration:"})," 2 months"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Full-time Equivalent (FTE)"}),": 2"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Costs:"})," 0.4 BTC"]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"In the first milestone, the features for the POC will be implemented and tested by limited users."}),"\n",(0,i.jsx)(s.p,{children:"The following features will be included:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"NFTStore Node"}),"\n",(0,i.jsx)(s.li,{children:"Pallet_nft"}),"\n",(0,i.jsx)(s.li,{children:"Pallet_store"}),"\n",(0,i.jsx)(s.li,{children:"Front End"}),"\n"]}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:(0,i.jsx)(s.strong,{children:"Number"})}),(0,i.jsx)(s.th,{children:(0,i.jsx)(s.strong,{children:"Deliverable"})}),(0,i.jsx)(s.th,{children:(0,i.jsx)(s.strong,{children:"Specification"})})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"0a."}),(0,i.jsx)(s.td,{children:"License"}),(0,i.jsx)(s.td,{children:"Apache License 2.0"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"0b."}),(0,i.jsx)(s.td,{children:"Documentation"}),(0,i.jsx)(s.td,{children:"Documents containing the description of whole architecture design for NFTStore."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"0c."}),(0,i.jsx)(s.td,{children:"Testing Guide"}),(0,i.jsx)(s.td,{children:"We will provide a full test suite and guide for  NFT ."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"1a."}),(0,i.jsx)(s.td,{children:"Node Repo"}),(0,i.jsx)(s.td,{children:"Complete the deployment of the basic public chain"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"1b."}),(0,i.jsx)(s.td,{children:"NFTStore token"}),(0,i.jsx)(s.td,{children:"$NFTT Complete the design of the economic model"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"2a."}),(0,i.jsx)(s.td,{children:"Pallet_nft"}),(0,i.jsxs)(s.td,{children:["Complete the development of pallet_nft and realize the ERC721 standard. ",(0,i.jsx)(s.a,{href:"#nft",children:"Related nft interfaces"})," that need to be delivered"]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"2b."}),(0,i.jsx)(s.td,{children:"Pallet_store"}),(0,i.jsxs)(s.td,{children:["Complete the development of pallet_store . ",(0,i.jsx)(s.a,{href:"#store",children:"Related store interfaces"})," that need to be delivered"]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"3."}),(0,i.jsx)(s.td,{children:"Front End"}),(0,i.jsxs)(s.td,{children:["Complete the development of the basic interactive page, the specific page can refer to: ",(0,i.jsx)(s.a,{href:"https://www.figma.com/file/o3N4WbUFlBPX8gXpAl4iBN/NFT",children:"https://www.figma.com/file/o3N4WbUFlBPX8gXpAl4iBN/NFT"})]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"4."}),(0,i.jsx)(s.td,{children:"Docker Image"}),(0,i.jsx)(s.td,{children:"The NFTStore Network docker image contains the POC version running anywhere to verify the idea of the NFTStore."})]})]})]}),"\n",(0,i.jsx)(s.h2,{id:"future-plans",children:"Future Plans"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"In phase 1, our goal is to make it easy for users to create NFTs and trade their NFTs."}),"\n",(0,i.jsx)(s.li,{children:"In phase 2, integrate more NFTs from other platforms on NFTStore through Polkadot cross-chain technology."}),"\n",(0,i.jsx)(s.li,{children:"In phase 3, more integration with off-chain, such as holding art exhibitions"}),"\n"]})]})}function o(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}}}]);