"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[9198],{28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>o});var i=n(96540);const s={},r=i.createContext(s);function l(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(r.Provider,{value:t},e.children)}},54090:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>h});const i=JSON.parse('{"id":"applications/dauth_network","title":"DAuth Network","description":"- Team Name: DAuth","source":"@site/applications/dauth_network.md","sourceDirName":"applications","slug":"/applications/dauth_network","permalink":"/applications/dauth_network","draft":false,"unlisted":false,"editUrl":"https://github.com/w3f/Grants-Program/edit/master/applications/dauth_network.md","tags":[],"version":"current","frontMatter":{}}');var s=n(74848),r=n(28453);const l={},o="DAuth Network",a={},h=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-page_facing_up",level:2},{value:"Overview",id:"overview",level:3},{value:"Background",id:"background",level:4},{value:"Description",id:"description",level:4},{value:"Our solutions",id:"our-solutions",level:4},{value:"Decentralized OAuth",id:"decentralized-oauth",level:5},{value:"Decentralized Email",id:"decentralized-email",level:5},{value:"Project Details",id:"project-details",level:3},{value:"Documentations",id:"documentations",level:4},{value:"POC",id:"poc",level:4},{value:"Technology Stack",id:"technology-stack",level:4},{value:"Scope",id:"scope",level:4},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-busts_in_silhouette",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles (if available)",id:"team-linkedin-profiles-if-available",level:3},{value:"Development Status \ud83d\udcd6",id:"development-status-open_book",level:2},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-nut_and_bolt",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 \u2014 Implement On-chain Modules",id:"milestone-1--implement-on-chain-modules",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information \u2795",id:"additional-information-heavy_plus_sign",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",header:"header",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"dauth-network",children:"DAuth Network"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Team Name:"})," DAuth"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Payment Address:"})," 0x09C08f46d523822cC9D18A077e2e3BDE5BC07a0b (Ethereum (USDC))"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsxs)(t.strong,{children:[(0,s.jsx)(t.a,{href:"https://github.com/w3f/Grants-Program/tree/master#level_slider-levels",children:"Level"}),":"]})," 2"]}),"\n"]}),"\n",(0,s.jsxs)(t.h2,{id:"project-overview-page_facing_up",children:["Project Overview ","\ud83d\udcc4"]}),"\n",(0,s.jsxs)(t.p,{children:["This grant is for the RFP ",(0,s.jsx)(t.a,{href:"https://github.com/w3f/Grants-Program/blob/master/rfps/social-recovery-wallet.md",children:"Social Recovery Wallet"})]}),"\n",(0,s.jsx)(t.h3,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)(t.h4,{id:"background",children:"Background"}),"\n",(0,s.jsxs)(t.p,{children:["As the ",(0,s.jsx)(t.a,{href:"https://github.com/w3f/Grants-Program/blob/master/rfps/social-recovery-wallet.md",children:"RFP"}),' mentioned: "managing private keys is a difficult task." The next billion users who will enter Web3 will have a hard time entering without the empowerment of social accounts. The Web3 ecosystem needs Web2 functionality that keeps the underlying system decentralized.']}),"\n",(0,s.jsx)(t.p,{children:"Most of the current authentication is based on the centralized OAuth and SMTP protocol framework. These protocol frameworks will make the authentication service providers becoming centralized collectors of user Web2-Web3 information (although this is not their intention). This massive collection of user data poses a significant risk of exposing the user's identity and assets, ultimately compromising the security and privacy of Web3."}),"\n",(0,s.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.p,{children:"DAuth is an improved and adapted version of OAuth for the Web3 ecosystem, providing native privacy and trustless social account access for Wallets, Decentralized Identifiers (DIDs), and Decentralized Applications (DApps)."}),"\n",(0,s.jsx)(t.h4,{id:"our-solutions",children:"Our solutions"}),"\n",(0,s.jsx)(t.p,{children:"In contrast to OAuth, SMS, and SMTP protocols, which rely on centralized servers and third-party services to verify user identities and send messages, DAuth uses blockchain and ZK technologies to provide a trustless authentication and verifiable profile aggregation that enhances trust, privacy, and security on the Web3. This means that users can authenticate their social accounts without revealing their identities. Moreover, DApps can send Emails and SMS messages to their subscribed users while keeping the user's email addresses and phone numbers private at the same time, giving the users greater control over their personal data and enhancing their privacy."}),"\n",(0,s.jsx)(t.h5,{id:"decentralized-oauth",children:"Decentralized OAuth"}),"\n",(0,s.jsx)(t.p,{children:"The DAuth adapts the mainstream OAuth service providers such as Google, Github, and Twitter for users to be able to pass the authentication of their social accounts without disclosing any information about it. This is because the whole authentication information is managed by the TEE and then a ZK proof is generated and passed onto the DApp proving that the user has authenticated."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://1856926917-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FZQcs7KxlVGgyCzI42uny%2Fuploads%2Fq04aO4bPez5YK61OqgRI%2Fimage.png?alt=media&token=e1ab8870-a552-4c22-8011-212c1bbd9e99",alt:"doauth"})}),"\n",(0,s.jsx)(t.h5,{id:"decentralized-email",children:"Decentralized Email"}),"\n",(0,s.jsx)(t.p,{children:"This anonymous mechanism is based on the reconstruction of the SMTP protocol. SMTP allows proxy servers to send emails to a given email address. When the DAuth node gets an email request, the enclave will translate the web3 address to the user's email accordingly, and the enclave will establish an SMTP channel with the email service provider. The key point is that the channel will be encrypted with a TLS handshake between the DAuth Enclave and the email service provider, which will keep the user's email address invisible to the DAuth node."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://1856926917-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FZQcs7KxlVGgyCzI42uny%2Fuploads%2FMixRhVaMs0CnRHaN7ueB%2Fimage.png?alt=media&token=809e0d06-b309-4e5a-bd2e-5099f35366b2",alt:"dmail"})}),"\n",(0,s.jsx)(t.h3,{id:"project-details",children:"Project Details"}),"\n",(0,s.jsx)(t.h4,{id:"documentations",children:"Documentations"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Project overview PPT ",(0,s.jsx)(t.a,{href:".com/view/fem479hkgc9hc5ck",children:"here"})]}),"\n",(0,s.jsxs)(t.li,{children:["Project Docs ",(0,s.jsx)(t.a,{href:"https://dauth.gitbook.io/dauth-docs/dauth-network/introduction",children:"here"})]}),"\n"]}),"\n",(0,s.jsx)(t.h4,{id:"poc",children:"POC"}),"\n",(0,s.jsxs)(t.p,{children:["We have completed a proof-of-concept to verify the feasibility of our solutions ",(0,s.jsx)(t.a,{href:"https://demo.dauth.network/auth",children:"here"}),"."]}),"\n",(0,s.jsx)(t.h4,{id:"technology-stack",children:"Technology Stack"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"DAuth Node: A DAuth Node is the basic unit of DAuth Network. DAuth Network will consist of nodes from several institutions in its early stage. In the future, the number of nodes will gradually expand with the increase in the security and stability of the DAuth Network."}),"\n",(0,s.jsx)(t.li,{children:"Secure Enclave: DAuth Enclave uses Trusted Execution Environment (TEE) technology to handle social account authentication in a anonymous way. That is also the part the ZK technology can't do for now. TEE is hardware technology that is leveraged on each DAuth node. The TEE protects the core data of the users from being tampered with by the DAuth nodes."}),"\n",(0,s.jsx)(t.li,{children:"Zero Knowledge Authentication: Zero-Knowledge Proofs are the best way to handle authentication problems since it keeps information private. DAuth uses zero-knowledge as an identity credential generation for users. However, the current ZK technology can not make social account authentication anonymous so we use TEE technology as an add-on module for anonymity protection and use ZK for credential generation."}),"\n"]}),"\n",(0,s.jsx)(t.h4,{id:"scope",children:"Scope"}),"\n",(0,s.jsx)(t.p,{children:"There are a lot of tasks involved to get all of these into a product-ready state which is what we are always aiming for, but it'd be too extensive to fit all of the tasks into this one single open grant. Therefore, we have carved out a scope specifically for this grant, followed by the details of the future tasks."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Grant scope"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Develop TEE module(written in Rust) that supports basic Google OAuth."}),"\n",(0,s.jsx)(t.li,{children:"Develop TEE module(written in Rust) that supports basic Email auth flow."}),"\n",(0,s.jsx)(t.li,{children:"Develop TEE module that generates proofs for user authentication."}),"\n",(0,s.jsx)(t.li,{children:"Develop off-chain node program(written in Rust) that coordinating with TEE module."}),"\n",(0,s.jsx)(t.li,{children:"Develop on-chain protocol (written in ink! smart contract) that organizes all TEE nodes into a functioning network."}),"\n",(0,s.jsx)(t.li,{children:"Contribute SDKs for dApps and wallets in Polkadot ecosystem, such as Clover and zCloak, so that users in Polkaodt ecosystem can  have a trustless and private social login to their Web3 accounts."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Future development"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Implement more functions in TEE, such as ZK proof."}),"\n",(0,s.jsx)(t.li,{children:"Accept nodes endorsed by more organizations."}),"\n",(0,s.jsx)(t.li,{children:"Support more authentication methods such as Twitter and Discord."}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"ecosystem-fit",children:"Ecosystem Fit"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Generally, their are many wallets in Polkadot ecosystem that planning to provide social login functions in the trend of Account Abstraction and MPC wallet. DAuth will make all the wallets trustless, verifiable, private, and fully decentralized."}),"\n"]}),"\n",(0,s.jsxs)(t.h2,{id:"team-busts_in_silhouette",children:["Team ","\ud83d\udc65"]}),"\n",(0,s.jsx)(t.h3,{id:"team-members",children:"Team members"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Name of team leader: Dean Yan"}),"\n",(0,s.jsx)(t.li,{children:"Names of team members: Michael A. Hanono, Scott Zhang"}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"contact",children:"Contact"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Contact Name:"})," Dean Yan"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Contact Email:"})," ",(0,s.jsx)(t.a,{href:"mailto:yyd106@gmail.com",children:"yyd106@gmail.com"})]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Website:"})," ",(0,s.jsx)(t.a,{href:"https://www.linkedin.com/in/dean-yan-717784100/",children:"https://www.linkedin.com/in/dean-yan-717784100/"})]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"legal-structure",children:"Legal Structure"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"No legal entity yet"}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"teams-experience",children:"Team's experience"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Dean is the author of technical whitepaper of ",(0,s.jsx)(t.a,{href:"https://crust.network/",children:"Crust Network"})]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"team-code-repos",children:"Team Code Repos"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/DAuth-Network/dauth-demos",children:"https://github.com/DAuth-Network/dauth-demos"})}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/orgs/DAuth-Network/people/yyd106",children:"https://github.com/orgs/DAuth-Network/people/yyd106"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/orgs/DAuth-Network/people//mike-hanono",children:"https://github.com/orgs/DAuth-Network/people//mike-hanono"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/orgs/DAuth-Network/people/scott0927",children:"https://github.com/orgs/DAuth-Network/people/scott0927"})}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"team-linkedin-profiles-if-available",children:"Team LinkedIn Profiles (if available)"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://www.linkedin.com/in/dean-yan-717784100/",children:"https://www.linkedin.com/in/dean-yan-717784100/"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://www.linkedin.com/in/michael-hanono/",children:"https://www.linkedin.com/in/michael-hanono/"})}),"\n"]}),"\n",(0,s.jsxs)(t.h2,{id:"development-status-open_book",children:["Development Status ","\ud83d\udcd6"]}),"\n",(0,s.jsxs)(t.p,{children:["We completed a ",(0,s.jsx)(t.a,{href:"https://demo.dauth.network/auth/",children:"prototype system"})," to verify technical feasibility.\nThe relevant ",(0,s.jsx)(t.a,{href:"https://github.com/w3f/Grants-Program/blob/master/rfps/social-recovery-wallet.md",children:"RFP is here"})]}),"\n",(0,s.jsxs)(t.h2,{id:"development-roadmap-nut_and_bolt",children:["Development Roadmap ","\ud83d\udd29"]}),"\n",(0,s.jsx)(t.h3,{id:"overview-1",children:"Overview"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Total Estimated Duration:"})," 8 months"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Full-Time Equivalent (FTE):"}),"  3"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Total Costs:"})," $27,000 (payable in Ethereum-USDC)"]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"milestone-1--implement-on-chain-modules",children:"Milestone 1 \u2014 Implement On-chain Modules"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Estimated duration:"})," 6 month"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"FTE:"}),"  3"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Costs:"})," 15,000USD"]}),"\n"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"right"},children:"Number"}),(0,s.jsx)(t.th,{children:"Deliverable"}),(0,s.jsx)(t.th,{children:"Specification"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"0a."}),(0,s.jsx)(t.td,{children:"License"}),(0,s.jsx)(t.td,{children:"Apache 2.0"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"0b."}),(0,s.jsx)(t.td,{children:"Documentation"}),(0,s.jsxs)(t.td,{children:["We will provide both ",(0,s.jsx)(t.strong,{children:"inline documentation"})," of the code and a basic ",(0,s.jsx)(t.strong,{children:"tutorial"})," that explains how a user can use DAuth."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"0c."}),(0,s.jsx)(t.td,{children:"Testing Guide"}),(0,s.jsx)(t.td,{children:"Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"0d."}),(0,s.jsx)(t.td,{children:"Docker"}),(0,s.jsx)(t.td,{children:"We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"1."}),(0,s.jsx)(t.td,{children:"Core Protocol"}),(0,s.jsxs)(t.td,{children:["Implements the ",(0,s.jsx)(t.code,{children:"nodeRegister"})," ",(0,s.jsx)(t.code,{children:"userRegister"})," ",(0,s.jsx)(t.code,{children:"userAuthentication"})," and ",(0,s.jsx)(t.code,{children:"keyRecovery"})," functions for Node program written in Rust."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"2."}),(0,s.jsx)(t.td,{children:"TEE Implementation"}),(0,s.jsxs)(t.td,{children:["Implements the ",(0,s.jsx)(t.code,{children:"nodeRegister"})," ",(0,s.jsx)(t.code,{children:"userRegister"})," ",(0,s.jsx)(t.code,{children:"userAuthentication"})," and ",(0,s.jsx)(t.code,{children:"keyRecovery"})," functions for TEE part written in C++."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"3."}),(0,s.jsx)(t.td,{children:"Smart Contract"}),(0,s.jsxs)(t.td,{children:["Implements and test for the !ink smart contracts used for ",(0,s.jsx)(t.code,{children:"nodeRegister"})," and ",(0,s.jsx)(t.code,{children:"userRegister"}),"."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"4."}),(0,s.jsx)(t.td,{children:"Web Server"}),(0,s.jsx)(t.td,{children:"Provide meta-data management service for DAuth users written in Rust, users can manage keys and authentication methods"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"5."}),(0,s.jsx)(t.td,{children:"Polkadot.js"}),(0,s.jsxs)(t.td,{children:["Add in encryption/decryption functionality to ",(0,s.jsx)(t.code,{children:"@polkadot/keyring"})," and ",(0,s.jsx)(t.code,{children:"@polkadot/extension"})," so that the protocol can run without the needs to read the private key of users."]})]})]})]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Estimated duration:"})," 2 month"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"FTE:"}),"  3"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Costs:"})," 12,000USD"]}),"\n"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"right"},children:"Number"}),(0,s.jsx)(t.th,{children:"Deliverable"}),(0,s.jsx)(t.th,{children:"Specification"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"0a."}),(0,s.jsx)(t.td,{children:"License"}),(0,s.jsx)(t.td,{children:"Apache 2.0"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"0b."}),(0,s.jsx)(t.td,{children:"Documentation"}),(0,s.jsxs)(t.td,{children:["We will provide both ",(0,s.jsx)(t.strong,{children:"inline documentation"})," of the code and a basic ",(0,s.jsx)(t.strong,{children:"tutorial"})," that explains how a project can integrate the DAuth Protocol into their project."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"0c."}),(0,s.jsx)(t.td,{children:"Testing Guide"}),(0,s.jsx)(t.td,{children:"Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"0d."}),(0,s.jsx)(t.td,{children:"Docker"}),(0,s.jsx)(t.td,{children:"We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"1."}),(0,s.jsx)(t.td,{children:"SDK"}),(0,s.jsx)(t.td,{children:"Cooperation with multiple wallet providers, they will integrate DAuth in their authentication flow"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"3."}),(0,s.jsx)(t.td,{children:"Support mainstream authentication methods"}),(0,s.jsx)(t.td,{children:"Provide multiple authentication methods such as Google, Email, Github and other authentication methods."})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"future-plans",children:"Future Plans"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Accept nodes endorsed by more organizations."}),"\n",(0,s.jsx)(t.li,{children:"Support more authentication methods such as Twitter and Discord sign-in."}),"\n",(0,s.jsx)(t.li,{children:"Open DAuth network to public, espacially to Authentication solution providers."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"As a long-term business model, we have following plans to make DAuth powerful and secure:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Implement more functions in TEE, such as ZK proof on the authentication result."}),"\n",(0,s.jsx)(t.li,{children:"We will support more TEE implementations, such as Trusted Zone of ARM, SEV of AMD;"}),"\n"]}),"\n",(0,s.jsxs)(t.h2,{id:"additional-information-heavy_plus_sign",children:["Additional Information ","\u2795"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"How did you hear about the Grants Program?"})," Announcement by another team"]}),"\n",(0,s.jsx)(t.p,{children:"Here you can also add any additional information that you think is relevant to this application but isn't part of it already, such as:"}),"\n",(0,s.jsx)(t.p,{children:"Dean's Crust Network and Mingshi's Astart Network are both projects of Web3 Grants."})]})}function c(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}}}]);