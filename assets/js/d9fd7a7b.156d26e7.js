"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[75111],{28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>o});var t=i(96540);const s={},a=t.createContext(s);function r(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(a.Provider,{value:n},e.children)}},33996:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"docs/RFPs/uptane-for-substrate-design-and-scope","title":"Designing Upchain: A framework for securing Substrate software update systems","description":"This Request for Proposals is closed, meaning we are not looking for any more proposals on this topic at the moment.","source":"@site/docs/RFPs/uptane-for-substrate-design-and-scope.md","sourceDirName":"docs/RFPs","slug":"/docs/RFPs/uptane-for-substrate-design-and-scope","permalink":"/docs/RFPs/uptane-for-substrate-design-and-scope","draft":false,"unlisted":false,"editUrl":"https://github.com/w3f/Grants-Program/edit/master/docs/RFPs/uptane-for-substrate-design-and-scope.md","tags":[],"version":"current","frontMatter":{},"sidebar":"docs","previous":{"title":"Uncollateralized Stablecoin Research","permalink":"/docs/RFPs/uncollateralized-stablecoin-research"},"next":{"title":"User Account Access Security Analysis for Wallets","permalink":"/docs/RFPs/user-account-access-analysis"}}');var s=i(74848),a=i(28453);const r={},o="Designing Upchain: A framework for securing Substrate software update systems",l={},d=[{value:"Project Description \ud83d\udcc4",id:"project-description-page_facing_up",level:2},{value:"Context",id:"context",level:3},{value:"Motivation",id:"motivation",level:3},{value:"Deliverables \ud83d\udd29",id:"deliverables-nut_and_bolt",level:2},{value:"Scope",id:"scope",level:3},{value:"Milestone 1",id:"milestone-1",level:3},{value:"Milestone 2",id:"milestone-2",level:3}];function c(e){const n={a:"a",admonition:"admonition",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"designing-upchain-a-framework-for-securing-substrate-software-update-systems",children:"Designing Upchain: A framework for securing Substrate software update systems"})}),"\n",(0,s.jsx)(n.admonition,{type:"danger",children:(0,s.jsxs)(n.p,{children:["This Request for Proposals is ",(0,s.jsx)(n.em,{children:"closed"}),", meaning we are not looking for any more proposals on this topic at the moment."]})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Status:"})," Closed"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Proposer:"})," taqtiqa-mark"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Your Project(s):"})," N.A."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Projects you think this work could be useful for"})," ",(0,s.jsx)(n.a,{href:"https://docs.substrate.io/build/upgrade-the-runtime/",children:"Substrate runtime upgrades"})," and ",(0,s.jsx)(n.a,{href:"https://docs.substrate.io/tutorials/get-started/upgrade-a-running-network/",children:"Substrate network upgrades"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Teams/People that could deliver the RFP"})," Parity, William Freudenberger (KILT), Albrecht Weiche"]}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"project-description-page_facing_up",children:["Project Description ","\ud83d\udcc4"]}),"\n",(0,s.jsx)(n.p,{children:"The Upchain Specification, a framework for securing Substrate runtime upgrades and Substrate network upgrades, by extending The Update Framework and modeled on Uptane (The Update Framework Specification extended for automobiles)."}),"\n",(0,s.jsx)(n.p,{children:"This RFP seeks W3F Grant applications addressing/proposing how TUF can be integrated into Substrate."}),"\n",(0,s.jsx)(n.p,{children:"The UpChain specification should serve as an outline of the requirements a chain must implement in order to be described as integrating UpChain."}),"\n",(0,s.jsxs)(n.p,{children:["The UpChain specification should allow for Parachin scaling, see for example ",(0,s.jsx)(n.a,{href:"https://forum.polkadot.network/t/parachain-scaling-by-parablock-splitting/341",children:"Parachain scaling by Parablock splitting"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"The target audience is authors of the Substrate relay and parachain upgrade logic. The specification should be followed by default in all Substrate runtime upgrades and Substrate network upgrades.\nDevelopers using Substrate would be oblivious until an upgrade failed - at which point they would notice their legacy logic is still in place."}),"\n",(0,s.jsx)(n.p,{children:"There is considerable prior art to inform and guide the initial specification.\nA greenfield design should not be accepted."}),"\n",(0,s.jsx)(n.p,{children:"Rather, the Milestone 2 document accompanying the design specification should reference:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://uptane.github.io/papers/uptane-standard.2.0.0.html",children:"The Uptane Standard for Design and Implementation 2.0.0"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://theupdateframework.github.io/specification/latest/",children:"The Update Framework Specification"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Articulating:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Deviations","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The section number and title in the Uptane and TUF specification that Upchain should deviate from."}),"\n",(0,s.jsx)(n.li,{children:"The Relay-parachain functionality lost or gained by this deviation, described in terms of TUF/Uptane functionality"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Extensions","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The section number and title in the Uptane and TUF specification that should be extended by Upchain"}),"\n",(0,s.jsx)(n.li,{children:"The Relay-parachain functionality removed or added by this extension, described in terms of TUF/Uptane functionality"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Omissions","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The section number and title in the Uptane and TUF specification that should be omitted from Upchain"}),"\n",(0,s.jsx)(n.li,{children:"The Relay-parachain functionality lost or gained by this omission, described in terms of TUF/Uptane functionality"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Specifically, elements of these two specifications should not silently vanish."}),"\n",(0,s.jsx)(n.h3,{id:"context",children:"Context"}),"\n",(0,s.jsx)(n.p,{children:"The Uptane (ECU update framework for automotives) is chosen as the template to begin with and contrast UpChain for a couple of reasons:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The specification should explicitly address Parachain scaling, see for example ",(0,s.jsx)(n.a,{href:"https://forum.polkadot.network/t/parachain-scaling-by-parablock-splitting/341",children:"Parachain scaling by Parablock splitting"}),"."]}),"\n",(0,s.jsx)(n.li,{children:"While ECU updates have client-server model where centrally managed updates are pushed to clients, and upgrade failures must leave a vehicle in a safe and usable state.  Substrate upgrades have a single source of truth that also must be pushed to nodes, and upgrade failures must leave a node in a safe and usable state."}),"\n",(0,s.jsx)(n.li,{children:"Further, there are implementations of the Uptane spec that are not trivial and that experience could be expected to inform the design of how UpChain protects Parachain scaling e.g. motivate any deviations or extensions."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"motivation",children:"Motivation"}),"\n",(0,s.jsx)(n.p,{children:"I\u2019ve come across several reports of a para-relay chain update/upgrade going awry and a chain is bricked, unable to produce blocks - hi-jinx ensue, and everyone lives happily ever after."}),"\n",(0,s.jsxs)(n.p,{children:["One such case is discussed here: ",(0,s.jsx)(n.a,{href:"https://forum.polkadot.network/t/how-to-recover-a-parachain/673",children:"How to recover a parachain"}),". The consensus appears to be: Automatic rollback is not possible, and a Parachain being inoperable for some period is the way things will be (hi-jinx required)."]}),"\n",(0,s.jsxs)(n.p,{children:["Potential utility for the wider community is evidenced by the ",(0,s.jsx)(n.a,{href:"https://forum.polkadot.network/t/polkadot-summit-barcamp-submit-agenda-topics-30-nov-1-dec/669/8",children:"Polkadot Summit: Barcamp (30 Nov, 1 Dec) topic Parachain Emergency Recovery"})]}),"\n",(0,s.jsxs)(n.h2,{id:"deliverables-nut_and_bolt",children:["Deliverables ","\ud83d\udd29"]}),"\n",(0,s.jsx)(n.p,{children:"Upchain Standard for Design and Implementation 1.0.0"}),"\n",(0,s.jsx)(n.h3,{id:"scope",children:"Scope"}),"\n",(0,s.jsx)(n.p,{children:'The scope of "Designing UpChain" is limited to creating a spec which aims at mitigating/avoiding such upgrade failures.'}),"\n",(0,s.jsx)(n.p,{children:"Guidelines to triage and recover after the issue occurred will likely depend on the detail of an implementation, hence should be deferred to the implementation phase."}),"\n",(0,s.jsx)(n.p,{children:"Scope includes providing recommendations and changes at the protocol level.\nIt also include analysis of performance overheads (e.g., overheads on the blockspace).\nThis may entail involving teams at parity/w3f."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Total Estimated Duration:"})," Duration of the whole project"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Full-time equivalent (FTE):"}),"  Amount of time (in days) required for a single person to complete this project (",(0,s.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Full-time_equivalent",children:"see"}),")"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Total Costs:"})," Amount of Payment in USD for the whole project."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"milestone-1",children:"Milestone 1"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Estimated Duration:"})," Duration of milestone 1"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"FTE:"}),"  Amount of time (in days) required for a single person to complete this milestone"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Costs:"})," Amount of Payment in USD for milestone 1"]}),"\n"]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Number"}),(0,s.jsx)(n.th,{children:"Deliverable"}),(0,s.jsx)(n.th,{children:"Specification"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"1."}),(0,s.jsx)(n.td,{children:"Upchain Standard for Design and Implementation 1.0.0"}),(0,s.jsx)(n.td,{children:"The Update Framework Specification extended for Substrate Relay and Parachains"})]})})]}),"\n",(0,s.jsxs)(n.p,{children:["This deliverable can be valuated by comparing the list of (sub-)sections with those from ",(0,s.jsx)(n.a,{href:"https://theupdateframework.github.io/specification/latest",children:"The Update Framework"})," - there should be no omissions."]}),"\n",(0,s.jsx)(n.h3,{id:"milestone-2",children:"Milestone 2"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Estimated Duration:"})," Duration of milestone 1"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"FTE:"}),"  Amount of time (in days) required for a single person to complete this milestone"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Costs:"})," Amount of Payment in USD for milestone 1"]}),"\n"]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Number"}),(0,s.jsx)(n.th,{children:"Deliverable"}),(0,s.jsx)(n.th,{children:"Specification"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"1."}),(0,s.jsx)(n.td,{children:"Upchain: Deviations, Extensions and Omissions from The Update Framework"}),(0,s.jsx)(n.td,{children:"As detailed above, a document setting out all deviations, extensions and omissions from The Update Framework"})]})})]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}}}]);