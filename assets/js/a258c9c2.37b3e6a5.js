"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[41358],{28453:(e,t,i)=>{i.d(t,{R:()=>r,x:()=>o});var n=i(96540);const s={},a=n.createContext(s);function r(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(a.Provider,{value:t},e.children)}},99311:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"applications/signet","title":"Signet - Talisman","description":"- Team Name: Paraverse Foundation","source":"@site/applications/signet.md","sourceDirName":"applications","slug":"/applications/signet","permalink":"/applications/signet","draft":false,"unlisted":false,"editUrl":"https://github.com/w3f/Grants-Program/edit/master/applications/signet.md","tags":[],"version":"current","frontMatter":{}}');var s=i(74848),a=i(28453);const r={},o="Signet - Talisman",l={},d=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-page_facing_up",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Architecture Overview",id:"architecture-overview",level:4},{value:"Key Focus Areas",id:"key-focus-areas",level:4},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Target User",id:"target-user",level:4},{value:"Similar Projects",id:"similar-projects",level:4},{value:"Team \ud83d\udc65",id:"team-busts_in_silhouette",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles (if available)",id:"team-linkedin-profiles-if-available",level:3},{value:"Development Status \ud83d\udcd6",id:"development-status-open_book",level:2},{value:"Conversations with W3F",id:"conversations-with-w3f",level:3},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-nut_and_bolt",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1  \u2014 Sign in with Substrate (SIWS) Release",id:"milestone-1---sign-in-with-substrate-siws-release",level:3},{value:"Milestone 2  \u2014 Signet Staking Module Improvements re: Validator Selection &amp; Rotation UI",id:"milestone-2---signet-staking-module-improvements-re-validator-selection--rotation-ui",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Referral Program (optional) \ud83d\udcb0",id:"referral-program-optional-moneybag",level:2},{value:"Additional Information \u2795",id:"additional-information-heavy_plus_sign",level:2},{value:"Financial Support",id:"financial-support",level:3},{value:"Previous Work",id:"previous-work",level:3},{value:"Previous Grants",id:"previous-grants",level:3}];function h(e){const t={a:"a",blockquote:"blockquote",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"signet---talisman",children:"Signet - Talisman"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Team Name:"})," Paraverse Foundation"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Payment Address:"})," 16mJFuy5t1YzWdjTqU5LKzp9SarANLgbvWHSPiEM9v8BSoxJ (USDC/AssetHub)"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsxs)(t.strong,{children:[(0,s.jsx)(t.a,{href:"https://github.com/w3f/Grants-Program/tree/master#level_slider-levels",children:"Level"}),":"]})," 2"]}),"\n"]}),"\n",(0,s.jsxs)(t.h2,{id:"project-overview-page_facing_up",children:["Project Overview ","\ud83d\udcc4"]}),"\n",(0,s.jsx)(t.h3,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)(t.p,{children:"Signet is blockchain-native financial workflow management software for enterprises."}),"\n",(0,s.jsx)(t.p,{children:'The goal of Signet is to enable enterprises to perform blockchain operations such as treasury management, payments, staking and governance in a way that is friendly to non-technical users but include similar "best practice" risk management controls to how they may operate in web2 today.'}),"\n",(0,s.jsx)(t.p,{children:"We believe enterprise adoption will be one of the central narratives of the transition to Polkadot 2.0, and the capabilities of the Signet platform will enable this to happen in Polkadot, enabling enterprises to feel comfortable to inject liquidity into the ecosystem."}),"\n",(0,s.jsx)(t.p,{children:"Signet is built natively on top of Substrate, including the multisig, proxy, governance and staking pallets, but adds an open-source self-hostable software layer on top that enables configurable workflows for the purpose of internal risk mititgation."}),"\n",(0,s.jsx)(t.p,{children:"Signet was initially created out of Talisman\u2019s user research, which revealed that teams faced many difficulties and risked mistakes when trying to run their on-chain financial operations, and ended up choosing convenience over security. In mid 2023, the Signet team was formed within Talisman to focus on B2B and enterprise opportunities."}),"\n",(0,s.jsx)(t.p,{children:"We believe what we are proposing is a great candidate for W3F funding because of two reasons:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"The common good aspect of a documented, integratable Sign in with Substrate (SIWS) reusable component, coupled with the halo effect it will have on Substrate adoption by providing a new avenue for both existing web2 and current web3 developers to build for the ecosystem."}),"\n",(0,s.jsx)(t.li,{children:"The importance of usability for larger organizations, enterprises and institutional users, who find it difficult today to use overly technical tools such as Polkadot.js. We believe strongly that ease of use and understanding are extremely important when trying to achieve security, in practice, in an enterprise context, and by delivering this, Signet will enable liquidity to flow into the ecosystem."}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"project-details",children:"Project Details"}),"\n",(0,s.jsx)(t.p,{children:"We will first describe the architecture of the current system, and then the improvements and additions we plan to implement in the course of this grant."}),"\n",(0,s.jsx)(t.h4,{id:"architecture-overview",children:"Architecture Overview"}),"\n",(0,s.jsx)(t.p,{children:"Signet's architecture provides the ability to manage offchain enterprise workflows along with supporting data like address books in a secure manner. With access controls and the ability to self host the instance, clients can choose the level of security and privacy for their implementation."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://github.com/TalismanSociety/sigdoc/blob/7510061e0b5b4077dc41ee7edb31f1536ab44b09/wwwf/images/sig-arch-hq.jpg?raw=true",alt:"architecture"})}),"\n",(0,s.jsx)(t.p,{children:"Our system is designed around the idea that a multisig unit is a keyless any proxy controlled by a Substrate multisig. We use a magic link system that encodes the proxy address and the member addresses of the multisig, which can then be shared with other signers to import it into their instance of Signet. The frontend is built in React and Typescript."}),"\n",(0,s.jsx)(t.p,{children:"Offchain data used to support Enterprise Workflows are stored in a Postgres Database via Hasura, which offers at least 2 levels of authorisation. Requests to access data in the database are authorised using a combination of on-chain and off-chain data to satisfy various business needs, followed by role based access control built into Hasura. Access is restricted so that the Hasura server is the only service that can call the database."}),"\n",(0,s.jsx)(t.p,{children:"We use Sign in with Substrate (SIWS) to authenticate users. This allows our backend to confirm that whoever claims to own an address and wants resources relevant to that address actually owns the address and is able to sign a challenge message to provide proof. SIWS has been created specifically for Signet, and is run in a nodejs sidecar."}),"\n",(0,s.jsx)(t.p,{children:"Signet is designed in a modular way, so that specific workflows or extrinsics can be have a custom UI that enables non-technical users to perform blockchain actions."}),"\n",(0,s.jsx)(t.p,{children:"The initial version of Signet was developed as part of a Polkadot Treasury Proposal and aimed at DAOs and smaller teams in Polkadot. We have since decided to focus on larger enterprises who require more complex workflows and risk mitigation."}),"\n",(0,s.jsx)(t.h4,{id:"key-focus-areas",children:"Key Focus Areas"}),"\n",(0,s.jsx)(t.p,{children:"For the purpose of this grant, we are looking to build on top of the work and architecture presented above and address the following two issues:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"No standard for Sign in with Substrate:"})," While other projects have built custom solutions for logging into an app using Substrate, there are currently no reusable components to make it easy for developers to build apps and services on top of Substrate login."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Improve existing UX for Selecting Validators:"})," Validator selection is currently difficult and error prone, and users have no easy way to double-check the addresses they are assigning in the process."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"The following diagram shows Signet as it is being built out currently (in black), as well as the additions enabled by this grant (in green)."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://github.com/TalismanSociety/sigdoc/blob/1cdba109e5a8474592611987d550b441bdfddbd4/wwwf/images/sig-capabilities.jpg?raw=true",alt:"capabilities"})}),"\n",(0,s.jsx)(t.p,{children:"SIWS is a building block towards a shared address book for multisigs/organizations, which can enable migration of shared enterprise information from computer to computer or authorized person to authorized person, as well as allows for easier selection of validator addresses for all signers to leverage and is a key part of improving the experience of using Substrate-based proxy-multisigs."}),"\n",(0,s.jsx)(t.h3,{id:"ecosystem-fit",children:"Ecosystem Fit"}),"\n",(0,s.jsx)(t.p,{children:"The project is built on Substrate, using Substrate native features. The goal of the project is to enable entities (corporations, asset managers, web3 companies etc.) to feel comfortable enough operationally to manage a significant amount of assets on Substrate."}),"\n",(0,s.jsx)(t.h4,{id:"target-user",children:"Target User"}),"\n",(0,s.jsx)(t.p,{children:"The target audience is enterprises and larger organizations who require workflows and risk management in order to be comfortable to deploy capital into the Polkadot ecosystem. This may include enterprises already operating on-chain in Substrate, enterprises with a large web2 footprint, including, potentially, customers of Mythical Games, Aventus, Peaq, Energy Web, etc, or more traditional organizations evaluating moving into Substrate including, potentially, Deloitte, Sony or Toyota. Signet would allow C-Levels and Finance/Operations departments at these types of companies to feel comfortable integrating blockchain into their workflows."}),"\n",(0,s.jsx)(t.h4,{id:"similar-projects",children:"Similar Projects"}),"\n",(0,s.jsx)(t.p,{children:"There are a number of multisig front-ends or multisigs in development in the Polkadot ecosystem, including: Multix, PolkaSafe, Saturn. While ostensibly there is an overlap in functionality related to being a multisig, Signet is designed to sit at a layer above the multisig and aimed at a different target audience:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Signet is designed to be self-hostable to enable an organization to manage it's own off-chain data and workflows in a way that meets it's internal devops and security needs."}),"\n",(0,s.jsx)(t.li,{children:"Signet's main value-add is not simply to provide a more friendly multisig UX, but rather to enable an organization to implement their own workflows on top of the multisig process. It's likely that these workflows require, at least at this time, off-chain operations and data storage that enhance the underlying blockchain."}),"\n",(0,s.jsx)(t.li,{children:"Signet's direction is to become a platform that integrates with different multisig front-ends or multisig pallets, rather than competing with them."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Regarding Sign in With Substrate, there are a few projects that have implemented bespoke methods of logging in with a Substrate keypair to their own dapps, however we believe these fall short of the user-friendly and developer-friendly needs to truly function as a component that can be reused, as well as to grow an ecosystem of apps and services on top of a Substrate login:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"The messages signed are unintelligble bytes, rather than human readable messages"}),"\n",(0,s.jsx)(t.li,{children:"The format of the login has not been standardized/structured to enable implementation into wallets/signers"}),"\n",(0,s.jsx)(t.li,{children:"The component(s) are not packaged, available and deployable in developer-friendly ways"}),"\n",(0,s.jsx)(t.li,{children:"The documentation doesn't exist that enables a developer to implement the sign-in functionality."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Regarding managing a staking position, most institutional holders still use Polkadot.js, as it is the most longstanding and trusted tool, though due to a confuing UI, using it can easily lead to confusion or potential mistakes."}),"\n",(0,s.jsx)(t.p,{children:"Alternate methods of managing staking positions, such as Polkadot Staking Dashboard, are available to users, but they are focused on retail usage at the current time, and do not support the more complex needs of institutional or enterprise users."}),"\n",(0,s.jsxs)(t.h2,{id:"team-busts_in_silhouette",children:["Team ","\ud83d\udc65"]}),"\n",(0,s.jsx)(t.h3,{id:"team-members",children:"Team members"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Team leader: Nobyte"}),"\n",(0,s.jsx)(t.li,{children:"Team members: Nipsey, Glide, Chris Ling"}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"contact",children:"Contact"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Contact Name:"})," Nobyte"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Contact Email:"})," ",(0,s.jsx)(t.a,{href:"mailto:t@talisman.xyz",children:"t@talisman.xyz"})]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Website:"})," ",(0,s.jsx)(t.a,{href:"https://talisman.xyz",children:"https://talisman.xyz"})]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"legal-structure",children:"Legal Structure"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Registered Address:"})," 2nd Floor Whitehall House, 238 North Church Street, George Town, PO Box 31489, Cayman Islands KY1-1206"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Registered Legal Entity:"})," Paraverse Foundation"]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"teams-experience",children:"Team's experience"}),"\n",(0,s.jsx)(t.p,{children:"Nipsey is the co-founder and CTO of Talisman. Nipsey leads the effort around Talisman's nomination pools, which, together, are the largest in Polkadot, containing over 3 million DOT."}),"\n",(0,s.jsx)(t.p,{children:"Glide has led a number of products in Web3 at Defi projects such as Sushi, DAOs including DeepDAO and on NFTs from 2017 before the ERC-721 standard. She has been a key contributor to Web3 product design community from 2018, speaking at events including Web3 Summit on User Data Design Considerations & Devcon on User testing practices for Mechanism Design. Prior to that, she led new product development and core banking transformations at large Banks and Financial institutions including BNP Paribas, Australian Super and UBS often working with industry regulators, compliance and security. Most recently she has worked in Defi, specialising in tokenomics design and implementing Multisigs on Ethereum to manage token distribution for DAOs and Treasuries."}),"\n",(0,s.jsx)(t.p,{children:"Chris has been a lead developer at a project in the Ethereum ecosystem, was previously on the identity team at Grab -- the only p0 (e.g. mission critical) team at the company -- and has worked on numerous web2 auth projects. In his spare time, he dabbles in MEV, Geth and Substrate."}),"\n",(0,s.jsx)(t.p,{children:"Various Talisman contributors will contribute on architecture, design, UX and testing."}),"\n",(0,s.jsx)(t.p,{children:"We have not previously applied for a grant at the Web3 Foundation."}),"\n",(0,s.jsx)(t.h3,{id:"team-code-repos",children:"Team Code Repos"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/TalismanSociety/talisman-web",children:"https://github.com/TalismanSociety/talisman-web"})}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/0byt",children:"https://github.com/0byt"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/jonathanpdunne",children:"https://github.com/jonathanpdunne"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/0xglide",children:"https://github.com/0xglide"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/chrisling-dev",children:"https://github.com/chrisling-dev"})}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"team-linkedin-profiles-if-available",children:"Team LinkedIn Profiles (if available)"}),"\n",(0,s.jsx)(t.p,{children:"n/a"}),"\n",(0,s.jsxs)(t.h2,{id:"development-status-open_book",children:["Development Status ","\ud83d\udcd6"]}),"\n",(0,s.jsxs)(t.p,{children:["The product is currently being developed as a separate app inside the Talisman Portal repository (",(0,s.jsx)(t.a,{href:"https://github.com/TalismanSociety/talisman-web/tree/multisig",children:"https://github.com/TalismanSociety/talisman-web/tree/multisig"}),")."]}),"\n",(0,s.jsxs)(t.p,{children:["For a UI walkthrough for existing functionality, please see this slideshow:\n",(0,s.jsx)(t.a,{href:"https://docs.google.com/presentation/d/1GBEvA8QxKoYKya9iNJfODozwT1JbRP9m_I7-lk-eHEU/edit?usp=sharing",children:"Signet UI Walkthrough"})]}),"\n",(0,s.jsx)(t.h3,{id:"conversations-with-w3f",children:"Conversations with W3F"}),"\n",(0,s.jsx)(t.p,{children:"We have spoken briefly to David Hawig at the W3F to introduce the project, as well as to inquire about the W3F efforts to bring credit card processing/settlement to Polkadot (ISO20022, ISO8583). We also discussed the difficulty of staking (e.g. nominating or changing validators) today using Polkadot.js, especially as complex proxy and multisig structures come into play, which has informed this proposal."}),"\n",(0,s.jsxs)(t.h2,{id:"development-roadmap-nut_and_bolt",children:["Development Roadmap ","\ud83d\udd29"]}),"\n",(0,s.jsx)(t.h3,{id:"overview-1",children:"Overview"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Total Estimated Duration:"})," 1 month"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Full-Time Equivalent (FTE):"}),"  1,5 FTE"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Total Costs:"})," 26,400 USDC"]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["Talisman uses a blended rate for grants and proposals (see previously funded initiatives ",(0,s.jsx)(t.a,{href:"https://docs.google.com/document/d/192asiQ13s4EAfXFFDFgKm_W3cqBVPPPxB5VNAig7keE/edit?usp=sharing",children:"here"}),",  ",(0,s.jsx)(t.a,{href:"https://docs.google.com/document/d/1OlJB4a2kcgWe-TZTC4ZR5cU9ZEIk8IoC85IJv2_2rdc/edit?usp=sharing",children:"here"})," and ",(0,s.jsx)(t.a,{href:"https://docs.google.com/document/d/1KohKDEYypNw_KJING2_uHXnC0LJwUxpPHMzBRfrH68M/edit?usp=sharing",children:"here"}),"). This allows us to ensure the needed resources can be allocated to product development as well as running the company, including, as needed, to supplement the FTEs with the expertise of senior Talisman members as needed, with the goal of executing at our product quality standards. In this case, due to the value added program provided by the W3F and to show our support for the W3F mission in helping to bring new products and technologies into existence, we are applying a reduced rate."]}),"\n",(0,s.jsx)(t.h3,{id:"milestone-1---sign-in-with-substrate-siws-release",children:"Milestone 1  \u2014 Sign in with Substrate (SIWS) Release"}),"\n",(0,s.jsx)(t.p,{children:"We have modeled our substrate login functionality (Sign in with Substrate - SIWS) on Sign in with Ethererum, and we hope this can catalyze the development of applications that build upon Substrate keypairs. We will extract the work that we have in integrating the login with Signet into an independent package that can be integrated by any team, provide website and documentation around the package, and set this on the road to becoming a standard."}),"\n",(0,s.jsx)(t.p,{children:"Authenticating a user with a Substrate key was initially developed as part of Signet, however we believe it should have a number of improvements before it can be released as a service or component ready for use by third parties:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"The version as implemented uses the JSON format with minimal payload data and only supports the server-side nonce check. We should augment this by supporting a string field that can contain information such as a welcome message or the terms of service of the dapp."}),"\n",(0,s.jsx)(t.li,{children:"We will implement both text and JSON formats for the message to be signed, for both the presentation of the message client-side, and verification of the message server-side."}),"\n",(0,s.jsx)(t.li,{children:"We will implement a field for expressing time validity/expiration of the signature, as well as the corresponding server-side check."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"We will also create an example \u201cboilerplate\u201d NextJS Dapp that integrates SIWS."}),"\n",(0,s.jsx)(t.p,{children:"On the frontend: We will prepare 3 pages to demonstrate how SIWS works can protect an app\u2019s data:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Sign in page with SIWS button to trigger sign in flow"}),"\n",(0,s.jsx)(t.li,{children:"Signed in page that fetches a secret message from backend"}),"\n",(0,s.jsx)(t.li,{children:"Unauthorized page that does not have access to get the secret message."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"On the backend: We expose 3 API endpoints:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"/api/nonce: To generate a nonce for user to sign on the frontend"}),"\n",(0,s.jsx)(t.li,{children:"/api/verify: To verify that the signed message is valid and issue a JWT"}),"\n",(0,s.jsx)(t.li,{children:"/api/secret: A protected endpoint that returns a secret text only if the JWT is valid"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"The demo app will be in a configuration that enables developers to easily deploy it on Vercel."}),"\n",(0,s.jsx)(t.p,{children:"We\u2019d like to address these improvements in the course of packaging Sign in With Substrate (SIWS) as a releasable component."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Estimated duration:"})," 0,5 month"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"FTE:"}),"  1,5"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Costs:"})," 13,200 USD"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Relevant Chains:"})," Polkadot & Kusama"]}),"\n"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"right"},children:"Number"}),(0,s.jsx)(t.th,{children:"Deliverable"}),(0,s.jsx)(t.th,{children:"Specification"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"right"},children:(0,s.jsx)(t.strong,{children:"0a."})}),(0,s.jsx)(t.td,{children:"License"}),(0,s.jsx)(t.td,{children:"GPLv3"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"right"},children:(0,s.jsx)(t.strong,{children:"0b."})}),(0,s.jsx)(t.td,{children:"Documentation"}),(0,s.jsxs)(t.td,{children:["We will provide both ",(0,s.jsx)(t.strong,{children:"inline documentation"})," of the code and a basic ",(0,s.jsx)(t.strong,{children:"tutorial"})," that explains how a user can spin up a SIWS service and authenticate wallets, which will show how the new functionality works."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"right"},children:(0,s.jsx)(t.strong,{children:"0c."})}),(0,s.jsx)(t.td,{children:"Testing and Testing Guide"}),(0,s.jsx)(t.td,{children:"We will include documentation on verifying your SIWS integration is performing correctly."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"0d."}),(0,s.jsx)(t.td,{children:"Article"}),(0,s.jsx)(t.td,{children:"We will publish an article that explains how the service works, the work done for this grant, and direction on how to integrate SIWS into other apps"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"1."}),(0,s.jsx)(t.td,{children:"JS Package: Sign in with Substrate"}),(0,s.jsx)(t.td,{children:"We will extract our Substrate sign-in service into an independent javascript package that is hostable and easily integratable into other projects"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"2."}),(0,s.jsx)(t.td,{children:"Feature: Custom message"}),(0,s.jsx)(t.td,{children:"We will add the ability to specify a custom message with the payload that can, for example, function as a welcome message from the dapp or specify the terms of service for the dapp"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"3."}),(0,s.jsx)(t.td,{children:"Feature: Expiration"}),(0,s.jsx)(t.td,{children:"We will add the ability for the front end to specify an expiration time for the signed message"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"4."}),(0,s.jsx)(t.td,{children:"Feature: Message Formats"}),(0,s.jsx)(t.td,{children:"We will add the ability to create the message payload both as a human-readable string, in addition to the existing JSON format"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"5."}),(0,s.jsx)(t.td,{children:"Feature: Message Verification"}),(0,s.jsx)(t.td,{children:"We will add the ability to verify the signed message payload in either string or JSON format"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"6."}),(0,s.jsx)(t.td,{children:"Example: Integrate SIWS into Signet"}),(0,s.jsx)(t.td,{children:"We will integrate the newly created SIWS package back into Signet, replacing the initial implementation from before. This will allow Signet to function as a reference implementation for SIWS, including a front-end and back-end."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"7."}),(0,s.jsx)(t.td,{children:"Example: Create example dapp for SIWS"}),(0,s.jsx)(t.td,{children:"We will create an example \u201cboilerplate\u201d NextJS Dapp that integrates SIWS, including a frontend with login functionality and a backend that can verify the login and return data to logged in users."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"8."}),(0,s.jsx)(t.td,{children:"Public Docs: Sign in with Substrate"}),(0,s.jsx)(t.td,{children:"We will create a public documentation site/landing page for Sign in with Substrate, in order to catalyze adoption by other projects, as well as eventual standardization."})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"milestone-2---signet-staking-module-improvements-re-validator-selection--rotation-ui",children:"Milestone 2  \u2014 Signet Staking Module Improvements re: Validator Selection & Rotation UI"}),"\n",(0,s.jsx)(t.p,{children:"We would like to improve the use cases (a.k.a. modules) enabled by Signet, by enabling user-friendly validator selection. We believe this is a core use cases for organizational and institutional multisigs in Polkadot/Kusama, and would be a foundational aspect of workflows to be built out in future releases. Currently selecting or rotating validators requires complex copy and pasting actions to assemble Polkadot.js Apps extrinsics, and we believe a purpose-built front end would alleviate the pain in performing the following actions:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Selection/rotation of validators for a nomination pool where the nomination pool controller is a pure proxy controlled by a multisig"}),"\n",(0,s.jsx)(t.li,{children:"Selection/rotation of validators by the stash, where the stash is a pure proxy controlled by a multisig"}),"\n",(0,s.jsx)(t.li,{children:"Selection/rotation of validators where the staking proxy is a pure proxy controlled by a multisig."}),"\n"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Estimated duration:"})," 0,5 month"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"FTE:"}),"  1,7"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Costs:"})," 13,200 USD"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Relevant Chains:"})," Polkadot, Kusama, AssetHub Polkadot, AssetHub Kusama"]}),"\n"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"right"},children:"Number"}),(0,s.jsx)(t.th,{children:"Deliverable"}),(0,s.jsx)(t.th,{children:"Specification"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"right"},children:(0,s.jsx)(t.strong,{children:"0a."})}),(0,s.jsx)(t.td,{children:"License"}),(0,s.jsx)(t.td,{children:"GPLv3"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"right"},children:(0,s.jsx)(t.strong,{children:"0b."})}),(0,s.jsx)(t.td,{children:"Documentation"}),(0,s.jsxs)(t.td,{children:["We will provide both ",(0,s.jsx)(t.strong,{children:"inline documentation"})," of the code and a basic ",(0,s.jsx)(t.strong,{children:"tutorial"})," that explains how a user can spin up Signet, including the feature improvements here, which will show how the new functionality works."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"right"},children:(0,s.jsx)(t.strong,{children:"0c."})}),(0,s.jsx)(t.td,{children:"Testing and Testing Guide"}),(0,s.jsx)(t.td,{children:"We run end to end tests on the application."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"right"},children:(0,s.jsx)(t.strong,{children:"0d."})}),(0,s.jsx)(t.td,{children:"Git Deployment"}),(0,s.jsx)(t.td,{children:"We support deployment from git at this point in time, and will have instructions on this in the repository."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"0e."}),(0,s.jsx)(t.td,{children:"Article"}),(0,s.jsx)(t.td,{children:"We will publish an article that explains Signet and the work done for this grant"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"1."}),(0,s.jsx)(t.td,{children:"Feature: Nom Pool Validator Selection"}),(0,s.jsx)(t.td,{children:"This feature enables an intuitive UX around viewing currently selected validators, as well as updating the validators for a nomination pool, using the nominationPools.nominate extrinsic"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"2."}),(0,s.jsx)(t.td,{children:"Feature: Staking Stash Validator Selection"}),(0,s.jsx)(t.td,{children:"This will build upon the feature above to present an intuitive UX around the selection of validators for a pure proxy stash, using the staking.nominate extrinsic"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"3."}),(0,s.jsx)(t.td,{children:"Feature: Staking Pure Proxy Validator Selection"}),(0,s.jsx)(t.td,{children:"This will build upon the above features to present an intuitive UX around selection of validators for a staking proxy which is a pure proxy backed by a multisig, using proxy.proxy and staking.nominate extrinsics"})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"future-plans",children:"Future Plans"}),"\n",(0,s.jsx)(t.p,{children:'Talisman initially embarked on the Signet project in order to "scratch its own itch" and bring it\'s user-friendly approach to multisigs. Signet has grown into its own project focused on larger enterprises and organizations, with the mission to build out a platform that enables institutional liquidity to flow in Polkadot.'}),"\n",(0,s.jsx)(t.p,{children:"For SIWS, we are interested in promoting wider adoption, as we believe that it can unlock a use cases where off-chain data is combined with on-chain data, and this may span enterprise apps/integrations or even consumer apps or games. After this grant, we will take a look at how to garner support/adoption of the technology, and collaborate with others in the ecosystem to put this on the path to becoming a standard."}),"\n",(0,s.jsxs)(t.h2,{id:"referral-program-optional-moneybag",children:["Referral Program (optional) ","\ud83d\udcb0"]}),"\n",(0,s.jsxs)(t.p,{children:["You can find more information about the program ",(0,s.jsx)(t.a,{href:"../README.md#moneybag-referral-program",children:"here"}),"."]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Referrer:"})," n/a"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Payment Address:"})," n/a"]}),"\n"]}),"\n",(0,s.jsxs)(t.h2,{id:"additional-information-heavy_plus_sign",children:["Additional Information ","\u2795"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"How did you hear about the Grants Program?"})," Element"]}),"\n",(0,s.jsx)(t.p,{children:"Here you can also add any additional information that you think is relevant to this application but isn't part of it already, such as:"}),"\n",(0,s.jsx)(t.h3,{id:"financial-support",children:"Financial Support"}),"\n",(0,s.jsx)(t.p,{children:"The Signet team is an independent team within Talisman, and receives financial, development, UI/UX and testing support as necessary."}),"\n",(0,s.jsx)(t.h3,{id:"previous-work",children:"Previous Work"}),"\n",(0,s.jsx)(t.p,{children:"Beyond the work in the initial treasury proposal referenced below, we have made a number of significant additions:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"CSV upload for easier batched sends"}),"\n",(0,s.jsxs)(t.li,{children:["An initial implementation of SIWS (in progress), ",(0,s.jsx)(t.em,{children:"Note - the addition of SIWS will remove the need to use the magic link."})]}),"\n",(0,s.jsx)(t.li,{children:"An initial address book implementation (in progress)"}),"\n",(0,s.jsx)(t.li,{children:"Refactoring and rearchitecting to meet upcoming needs"}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"previous-grants",children:"Previous Grants"}),"\n",(0,s.jsx)(t.p,{children:"The initial version of this web app was funded by the Polkadot Treasury in February 2023."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://docs.google.com/document/d/1KohKDEYypNw_KJING2_uHXnC0LJwUxpPHMzBRfrH68M/edit#heading=h.v6is2ta0txr1",children:"Polkadot Spending Proposal: Business-Friendly Polkadot Multisig"})}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"This proposal is for a business-friendly multisig frontend to lower the difficulty for teams and businesses when running their financial operations on Polkadot. Teams currently face many difficulties when trying to perform these operations, risking mistakes along the way, and leading them to choose convenience over security. We will apply Talisman\u2019s UX and design philosophy to create improvements for standard workflows for Polkadot multisig usage (based on the current multisig pallet), and eventually integrate upgrades when improvements to the multisig pallet itself are available."}),"\n"]})]})}function c(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}}}]);