"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[40900],{28453:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>a});var n=s(96540);const i={},o=n.createContext(i);function r(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(o.Provider,{value:t},e.children)}},62144:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"applications/polkadotjs-ecdsa","title":"ECDSA for Polkadot JS","description":"Proposer:* @akru","source":"@site/applications/polkadotjs-ecdsa.md","sourceDirName":"applications","slug":"/applications/polkadotjs-ecdsa","permalink":"/applications/polkadotjs-ecdsa","draft":false,"unlisted":false,"editUrl":"https://github.com/w3f/Grants-Program/edit/master/applications/polkadotjs-ecdsa.md","tags":[],"version":"current","frontMatter":{}}');var i=s(74848),o=s(28453);const r={},a="ECDSA for Polkadot JS",l={},c=[{value:"Project Description \ud83d\udcc4",id:"project-description-page_facing_up",level:2},{value:"Team \ud83d\udc65",id:"team-busts_in_silhouette",level:2},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-nut_and_bolt",level:2},{value:"Milestone 1",id:"milestone-1",level:3}];function d(e){const t={a:"a",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"ecdsa-for-polkadot-js",children:"ECDSA for Polkadot JS"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Proposer:"})," @akru"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Payment Address:"})," bc1qccvrcny62epea360w0dvy2ynv90vz5luansmg9"]}),"\n"]}),"\n",(0,i.jsxs)(t.h2,{id:"project-description-page_facing_up",children:["Project Description ","\ud83d\udcc4"]}),"\n",(0,i.jsx)(t.p,{children:"Currently Polkadot/Substrate support three kinds of cryptographic primitives as MultiSignature data type:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Ed25519"}),"\n",(0,i.jsx)(t.li,{children:"Sr25519"}),"\n",(0,i.jsx)(t.li,{children:"ECDSA"}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["Unfortunately, right now Polkadot JS support first two only (enhancement issue: ",(0,i.jsx)(t.a,{href:"https://github.com/polkadot-js/common/issues/506",children:"https://github.com/polkadot-js/common/issues/506"}),"). It's limiting using ECDSA keys for subkey CLI utility only, which makes user experience pipeline a bit difficult."]}),"\n",(0,i.jsx)(t.p,{children:"Main aim of this project is providing comfortable environment for ECDSA key owners (Ethereum/Bitcoin holders) as same as for Sr/Ed25519 keys."}),"\n",(0,i.jsx)(t.p,{children:"Supporting wide range of cryptographic primitives is powerful side of substrate/polkadot ecosystem. This projects makes this side user-friendly introducing cryptographic primitives support on UI side."}),"\n",(0,i.jsx)(t.p,{children:"This project planned to be directly integrated into Polkadot JS which is part of Polkadot ecosystem."}),"\n",(0,i.jsxs)(t.p,{children:["Plasm Network(",(0,i.jsx)(t.a,{href:"https://plasmnet.io",children:"https://plasmnet.io"}),") is a scaling Dapps platform on Substrate. Plasm Network is planned to be a parachain in Polkadot ecosystem. Plasm token distribution model involves the use of a lockdrop approach in Ethereum and Bitcoin networks where Secp256k1 cryptography is a de facto standard. Plasm team is highly interested in making lockdrop participation process smoothly as much as it possible. ECDSA integration into Polkadot ecosystem is one of steps to makes it real."]}),"\n",(0,i.jsxs)(t.h2,{id:"team-busts_in_silhouette",children:["Team ","\ud83d\udc65"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Members:"})," Aleksandr Krupenkin, Sota Watanabe, Takumi Yamashita, Task Ohmori, Kim Hoon"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"LinkedIn Profiles:"})," ",(0,i.jsx)(t.a,{href:"http://linkedin.com/in/krupenkin",children:"http://linkedin.com/in/krupenkin"}),", ",(0,i.jsx)(t.a,{href:"https://www.linkedin.com/in/sota-watanabe-b962b3110",children:"https://www.linkedin.com/in/sota-watanabe-b962b3110"}),", ",(0,i.jsx)(t.a,{href:"http://linkedin.com/in/task-ohmori-604398176",children:"http://linkedin.com/in/task-ohmori-604398176"})]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Code Repos:"})," ",(0,i.jsx)(t.a,{href:"https://github.com/staketechnologies/common",children:"https://github.com/staketechnologies/common"}),", ",(0,i.jsx)(t.a,{href:"https://github.com/staketechnologies/apps",children:"https://github.com/staketechnologies/apps"})]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Website:"})," ",(0,i.jsx)(t.a,{href:"https://stake.co.jp",children:"https://stake.co.jp"})]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Legal Structure:"})," Stake Technologies Inc. Avex EYE Avex Blog 3-1-30 Minamiaoyama Minato-ku Tokyo Japan"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Team's Experience:"}),"  Stake Technologies is technological company that focus on substrate research and development as same as business application of given results. Aleksandr Krupenkin, main experience as Haskell Web3 library (",(0,i.jsx)(t.a,{href:"https://hs-web3.readthedocs.io/en/latest/index.html",children:"https://hs-web3.readthedocs.io/en/latest/index.html"}),") owner, including cryptographic functions for Haskell Ethereum client."]}),"\n"]}),"\n",(0,i.jsxs)(t.h2,{id:"development-roadmap-nut_and_bolt",children:["Development Roadmap ","\ud83d\udd29"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Total Estimated Duration:"})," 2 weeks"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Total Costs:"})," 0.6 BTC"]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"milestone-1",children:"Milestone 1"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Estimated Duration:"})," 2 weeks"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Costs:"})," 0.6 BTC"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Main aim of this is providing compatability layer for secp256k1 keypair into Polkadot JS key management system."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Number"}),(0,i.jsx)(t.th,{children:"Deliverable"}),(0,i.jsx)(t.th,{children:"Specification"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"1."}),(0,i.jsx)(t.td,{children:"Polkadot JS ECDSA sign/verify support"}),(0,i.jsxs)(t.td,{children:["Introducing secp256k1 keypair into Polkadot-js/common repository as same as sr25519 type: ",(0,i.jsx)(t.a,{href:"https://github.com/polkadot-js/common/blob/master/packages/util-crypto/src/types.ts",children:"https://github.com/polkadot-js/common/blob/master/packages/util-crypto/src/types.ts"}),", implementing Sing/Verify interfaces."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"2."}),(0,i.jsx)(t.td,{children:"Polkadot JS sign/verify tests"}),(0,i.jsx)(t.td,{children:"Integration tests for secp256k1 keypair."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"3."}),(0,i.jsx)(t.td,{children:"Polkadot JS Apps ECDSA support"}),(0,i.jsx)(t.td,{children:"Introducing secp256k1 key types for Apps account management widget. ECDSA account should be possible to send extrinsics as same as Sr25519 or Ed25519 account."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"4."}),(0,i.jsx)(t.td,{children:"Improve documentation"}),(0,i.jsx)(t.td,{children:"Add ECDSA description paragraph into Polkadot-js documentation."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"5."}),(0,i.jsx)(t.td,{children:"Polkadot JS Apps demo video"}),(0,i.jsx)(t.td,{children:"Provide demonstration how Polkadot Apps works with Ethereum (secp256k1) private keys."})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}}}]);