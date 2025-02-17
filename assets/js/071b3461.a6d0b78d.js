"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[20783],{28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>a});var s=n(96540);const i={},r=s.createContext(i);function l(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(r.Provider,{value:t},e.children)}},69176:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"applications/dot_marketplace-Phase3","title":"Dot Marketplace v3","description":"- Status: Open","source":"@site/applications/dot_marketplace-Phase3.md","sourceDirName":"applications","slug":"/applications/dot_marketplace-Phase3","permalink":"/applications/dot_marketplace-Phase3","draft":false,"unlisted":false,"editUrl":"https://github.com/w3f/Grants-Program/edit/master/applications/dot_marketplace-Phase3.md","tags":[],"version":"current","frontMatter":{}}');var i=n(74848),r=n(28453);const l={},a="Dot Marketplace v3",o={},d=[{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"<strong>Repository Hierarchy</strong>",id:"repository-hierarchy",level:3},{value:"<strong>Ecosystem Fit</strong>",id:"ecosystem-fit",level:3},{value:"<strong>Team \ud83d\udc65</strong>",id:"team-",level:2},{value:"<strong>Team members</strong>",id:"team-members",level:3},{value:"<strong>Contact</strong>",id:"contact",level:3},{value:"<strong>Legal Structure</strong>",id:"legal-structure",level:3},{value:"<strong>Team&#39;s experience</strong>",id:"teams-experience",level:3},{value:"<strong>Team Code Repos</strong>",id:"team-code-repos",level:3},{value:"<strong>Development Status \ud83d\udcd6</strong>",id:"development-status-",level:2},{value:"<strong>Development Roadmap</strong> \ud83d\udd29",id:"development-roadmap-",level:2},{value:"<strong>Milestone 1</strong>",id:"milestone-1",level:3},{value:"<strong>Milestone 2</strong>",id:"milestone-2",level:3},{value:"<strong>Milestone 3</strong>",id:"milestone-3",level:3},{value:"<strong>Additional Project Details</strong>",id:"additional-project-details",level:3},{value:"<strong>Future Plans</strong>",id:"future-plans",level:3},{value:"Additional Information \u2795",id:"additional-information-heavy_plus_sign",level:2}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"dot-marketplace-v3",children:"Dot Marketplace v3"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Status:"})," Open"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Project Name:"})," Dot Marketplace"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Team Name:"})," Wow Labz"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Payment Address:"})," bc1qv954czydwz72egdzhkkuw85jegwrsmlt8a5xs8 (BTC - Bitcoin)"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Level:"})," 2"]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(t.p,{children:"Links To Previous Approved Grants:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/w3f/Grants-Program/blob/master/applications/dot_marketplace.md",children:"Phase 1"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/w3f/Grants-Program/blob/master/applications/dot_marketplace-phase2.md",children:"Phase 2"})}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"This is phase 3 of Dot Marketplace, which is a general-purpose decentralized marketplace created as a Substrate pallet."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Dot Marketplace can be used by any decentralized project to float tasks and invite their community members to execute them for a reward. Its POC was developed during the Polkadot India Buildathon (2021)."}),"\n",(0,i.jsx)(t.li,{children:"In the previous phases we have built a decentralised bounty platform and a decentralised court for dispute resolution. More details can be found on the respective grant proposals shared above."}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"project-details",children:"Project Details"}),"\n",(0,i.jsxs)(t.p,{children:["The current scope of work involves ",(0,i.jsx)(t.strong,{children:"milestone-based submissions"})," in which a project is divided into multiple configurable milestones(min 1 and max 5) to allow parallel or sequential execution."]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Each project must have at least one milestone and can have a maximum of five milestones (configurable)"}),"\n",(0,i.jsx)(t.li,{children:"Each milestone has its independent bidding system where multiple workers can place their bids"}),"\n",(0,i.jsx)(t.li,{children:"The publisher can select a bid as per the requirement and ratings of the worker and other criteria that can be added to a user account."}),"\n",(0,i.jsx)(t.li,{children:"A worker can bid for multiple milestones of a single project based on their expertise."}),"\n",(0,i.jsx)(t.li,{children:"A project reaches completion only if all milestones in the project are completed and approved by the publisher."}),"\n",(0,i.jsx)(t.li,{children:"In our current implementation all milestones are independent, hence they can be completed and approved by the publisher irrespective of the overall project status."}),"\n",(0,i.jsx)(t.li,{children:"Based on the requirements, a publisher can add more milestones to a project even after it is pushed to the market, provided the total number of milestones does not exceed 5 (configurable)"}),"\n",(0,i.jsx)(t.li,{children:"Decentralized IPFS Storage for project materials using NFTStorage Provider. Each material will have a unique CID that can be accessed by both Publisher and Worker."}),"\n",(0,i.jsx)(t.li,{children:"Advance Search by task tags, ids & title."}),"\n",(0,i.jsxs)(t.li,{children:["The ",(0,i.jsx)(t.a,{href:"https://github.com/WowLabz/dot-marketplace-v2",children:"decentralized court"})," implemented in phase 2 is functional for each milestone of a project"]}),"\n",(0,i.jsx)(t.li,{children:"All of the above features will be updated as a new feature for the existing marketplace pallet. Similarly, the selekatal UI will be updated to showcase the same."}),"\n",(0,i.jsx)(t.li,{children:"A new file server written using the rocket framework will be provided for the integration with IPFS (using NftStorage)."}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"The flow of tasking pallet with milestone based submission"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://user-images.githubusercontent.com/66478092/190300655-1d2085b3-b728-4ced-8238-f262a9c5c5f8.png",alt:"Tasking-Court-Flow4 drawio"})}),"\n",(0,i.jsx)(t.h3,{id:"repository-hierarchy",children:(0,i.jsx)(t.strong,{children:"Repository Hierarchy"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"node\n\u251c\u2500\u2500 build.rs\n\u251c\u2500\u2500 Cargo.toml\n\u2514\u2500\u2500 src\n    \u251c\u2500\u2500 chain_spec.rs\n    \u251c\u2500\u2500 cli.rs\n    \u251c\u2500\u2500 command.rs\n    \u251c\u2500\u2500 lib.rs\n    \u251c\u2500\u2500 main.rs\n    \u251c\u2500\u2500 rpc.rs\n    \u2514\u2500\u2500 service.rs\npallets\n\u251c\u2500\u2500 pallet-chat\n\u2502   \u251c\u2500\u2500 Cargo.toml\n\u2502   \u251c\u2500\u2500 README.md\n\u2502   \u2514\u2500\u2500 src\n\u2502       \u251c\u2500\u2500 benchmarking.rs\n\u2502       \u251c\u2500\u2500 lib.rs\n\u2502       \u251c\u2500\u2500 mock.rs\n\u2502       \u2514\u2500\u2500 tests.rs\n\u2514\u2500\u2500 pallet-tasking\n    \u251c\u2500\u2500 Cargo.toml\n    \u251c\u2500\u2500 README.md\n    \u2514\u2500\u2500 src\n        \u251c\u2500\u2500 benchmarking.rs\n        \u251c\u2500\u2500 lib.rs\n        \u251c\u2500\u2500 mock.rs\n        \u251c\u2500\u2500 utils.rs\n        \u2514\u2500\u2500 tests.rs\nruntime\n\u251c\u2500\u2500 build.rs\n\u251c\u2500\u2500 Cargo.toml\n\u2514\u2500\u2500 src\n    \u2514\u2500\u2500 lib.rs\n"})}),"\n",(0,i.jsx)(t.p,{children:"The current focus is to enhance the existing Substrate pallet and allied code base to get a basic yet functional marketplace up and running."}),"\n",(0,i.jsx)(t.h3,{id:"ecosystem-fit",children:(0,i.jsx)(t.strong,{children:"Ecosystem Fit"})}),"\n",(0,i.jsx)(t.p,{children:"We believe this work could be helpful for any Polkadot parachains/parathreads interested in including a marketplace with on-chain dispute resolution."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Almost all parachains/parathreads would find motivation in encouraging their community members to contribute meaningfully to their roadmap. This can be achieved by utilizing a marketplace like Dot Marketplace, where technical, marketing, or governance-centric projects can be published as bounties. And community members are invited to bid for and execute them."}),"\n",(0,i.jsx)(t.li,{children:"A milestone-based submission will enhance the functionality of the marketplace and provide a more comprehensive user experience for both the worker and the publisher."}),"\n",(0,i.jsx)(t.li,{children:"The on-chain court will act as a dispute resolution mechanism between users involved in a project. A set of community members meeting specific criteria get to be a part of the jury for the dispute and cast votes, based on which a decision is reached."}),"\n",(0,i.jsx)(t.li,{children:"To facilitate easier communication between a customer and a worker, a one-to-one chat feature is also created."}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"team-",children:(0,i.jsx)(t.strong,{children:"Team \ud83d\udc65"})}),"\n",(0,i.jsx)(t.h3,{id:"team-members",children:(0,i.jsx)(t.strong,{children:"Team members"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://www.linkedin.com/in/startupamit/",children:(0,i.jsx)(t.strong,{children:"Amit Singh"})})," [ Product Manager ]"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://www.linkedin.com/in/roshit/",children:(0,i.jsx)(t.strong,{children:"Roshit Omanakuttan"})})," [ Technical Architect ]"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://www.linkedin.com/in/loakesh-indiran-8a2282140",children:(0,i.jsx)(t.strong,{children:"Loakesh Indiran"})})," [ Full Stack Developer ]"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"http://www.linkedin.com/in/tejas-vijay-1430a3190",children:(0,i.jsx)(t.strong,{children:"Tejas Gaware"})})," [ Backend Developer ]"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://www.linkedin.com/in/rajat-petwal-947440197/",children:(0,i.jsx)(t.strong,{children:"Rajat Petwal"})})," [ Backend Developer ]"]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"contact",children:(0,i.jsx)(t.strong,{children:"Contact"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Contact Name:"})," Amit Singh"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Contact Email:"})," amit (dot) singh (@) wowlabz.com"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Website:"})," ",(0,i.jsx)(t.a,{href:"https://www.wowlabz.com/",children:"http://www.wowlabz.com"})]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Project Website:"})," ",(0,i.jsx)(t.a,{href:"https://dotmarketplace.co/",children:"Dot marketplace website"})]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"legal-structure",children:(0,i.jsx)(t.strong,{children:"Legal Structure"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Registered Address:"})," Wow Labz, 2Gethr Cowork, Tower B, Mantri Commercio, Outer Ring Rd, Bellandur, Bengaluru, Karnataka, India 560103"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Registered Legal Entity:"})," Wow Internet Labz Private Limited"]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"teams-experience",children:(0,i.jsx)(t.strong,{children:"Team's experience"})}),"\n",(0,i.jsxs)(t.p,{children:["Dot Marketplace is being built by the team at Wow Labz. Wow Labz is one of India's leading turnkey product development companies. The team is also building Socialli - an interoperable metaverse protocol on Polkadot. Additionally the team at Wow Labz has built ",(0,i.jsx)(t.a,{href:"https://www.polkadotindia.org/",children:"Polkadot India"})," - a 15,000+ community of polkadot enthusiasts predominantly from the Indian region. The team has previously built a decentralized storage protocol called Lake Network - ",(0,i.jsx)(t.a,{href:"https://lakenetwork.io/",children:"https://lakenetwork.io/"})," in addition to multiple dApps on Ethereum, Stellar, EOS, and Hyperledger."]}),"\n",(0,i.jsxs)(t.p,{children:["A list of centralized and decentralised apps published can be found ",(0,i.jsx)(t.a,{href:"https://www.wowlabz.com/work/",children:"here"}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"team-code-repos",children:(0,i.jsx)(t.strong,{children:"Team Code Repos"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/orgs/WowLabz/projects",children:"https://github.com/orgs/WowLabz/projects"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/WowLabz/tasking_backend",children:"https://github.com/WowLabz/tasking_backend"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/WowLabz/tasking_frontend",children:"https://github.com/WowLabz/tasking_frontend"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/WowLabz/yoda_creator_economy_node",children:"https://github.com/WowLabz/yoda_creator_economy_node"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/WowLabz/dot-marketplace-v2",children:"https://github.com/WowLabz/dot-marketplace-v2"})}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"development-status-",children:(0,i.jsx)(t.strong,{children:"Development Status \ud83d\udcd6"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Here's a link to the approved grant proposal for the ",(0,i.jsx)(t.a,{href:"https://github.com/w3f/Grants-Program/blob/master/applications/dot_marketplace.md",children:"first phase"})," and ",(0,i.jsx)(t.a,{href:"https://github.com/w3f/Grants-Program/blob/master/applications/dot_marketplace-phase2.md",children:"second phase"})]}),"\n",(0,i.jsx)(t.li,{children:"We are in touch with @takahser and @Rouven from the Web 3 Grants and Treasuries team, respectively."}),"\n"]}),"\n",(0,i.jsxs)(t.h2,{id:"development-roadmap-",children:[(0,i.jsx)(t.strong,{children:"Development Roadmap"})," \ud83d\udd29"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.strong,{children:"Overview"})})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Total Estimated Duration:"})," 2.0 Months"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Full-Time Equivalent (FTE):"})," 2.39"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Total Costs:"})," 29,925 USD"]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"milestone-1",children:(0,i.jsx)(t.strong,{children:"Milestone 1"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Estimated duration:"})," 3.0 weeks"]}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.strong,{children:"FTE: 1"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.strong,{children:"PTE: 2"})}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Costs:"})," 12,725 USD"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"The main deliverable for this milestone is to facilitate the creation of a project that can accommodate multiple milestones that may or may not depend on each other. These functionalities will be implemented as an upgrade to the existing marketplace pallet."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Sr no."}),(0,i.jsx)(t.th,{children:"Deliverable"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"0a"}),(0,i.jsx)(t.td,{children:"License"}),(0,i.jsx)(t.td,{children:"Apache 2.0"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"0b"}),(0,i.jsx)(t.td,{children:"Documentation"}),(0,i.jsx)(t.td,{children:"We will provide both inline documentation of the code and a tutorial that explains how a user can use DOT Marketplace and understand the flow of tasking pallet."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"0c"}),(0,i.jsx)(t.td,{children:"Testing Guide"}),(0,i.jsx)(t.td,{children:"Functions will be covered by unit tests, the documentation will describe how to run these tests. We will also provide scripts to help deploy, run and test the build."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"0d"}),(0,i.jsx)(t.td,{children:"Docker Image"}),(0,i.jsx)(t.td,{children:"Docker image of the build"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"1"}),(0,i.jsx)(t.td,{children:"Project Structure"}),(0,i.jsx)(t.td,{children:"The existing application only allows one milestone per project. Phase 3 modifies it to allow a publisher to add multiple milestones under the same project."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"2"}),(0,i.jsx)(t.td,{children:"Multiple Bidders"}),(0,i.jsx)(t.td,{children:"Multiple bidders can now bid for the same milestone, and the publisher can choose one worker based on the bidder ratings"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"3"}),(0,i.jsx)(t.td,{children:"Escrow"}),(0,i.jsx)(t.td,{children:"Multiple subaccounts are created for a project to account for each milestone and make it easier to store all funds for transfer/exchange."})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"milestone-2",children:(0,i.jsx)(t.strong,{children:"Milestone 2"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Estimated duration:"})," 2.0 weeks"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"FTE:"})," 1"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"PTE:"})," 2"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Costs:"})," 9,225 USD"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"In continuation to previous work, this milestone involves the creation of an on-chain decentralized court to handle dispute resolution. Each milestone can go into a dispute on the same scope as mentioned in the second phase of dot marketplace. The other milestones in a project are not affected by the dispute of one of the milestones. The court pallet will be upgraded to support these new features."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Sr no."}),(0,i.jsx)(t.th,{children:"Deliverable"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"0a"}),(0,i.jsx)(t.td,{children:"License"}),(0,i.jsx)(t.td,{children:"Apache 2.0"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"0b"}),(0,i.jsx)(t.td,{children:"Documentation"}),(0,i.jsx)(t.td,{children:"We will provide both inline documentation of the code and a tutorial that explains how a user can use DOT Marketplace and understand the flow of tasking pallet."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"0c"}),(0,i.jsx)(t.td,{children:"Testing Guide"}),(0,i.jsx)(t.td,{children:"Functions will be covered by unit tests, the documentation will describe how to run these tests. We will also provide scripts to help deploy, run and test the build."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"0d"}),(0,i.jsx)(t.td,{children:"Docker Image"}),(0,i.jsx)(t.td,{children:"Docker image of the build"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"1"}),(0,i.jsx)(t.td,{children:"Decentralized Court Module"}),(0,i.jsx)(t.td,{children:"An on-chain decentralized court for dispute resolution within the ecosystem."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"1a"}),(0,i.jsx)(t.td,{children:"Disapprove Milestone"}),(0,i.jsx)(t.td,{children:"In the case of a customer not being satisfied with the work submitted by the service provider (worker). A set of jurors is shortlisted (court summon) to resolve the dispute and pass a verdict."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"1b"}),(0,i.jsx)(t.td,{children:"Disapprove Rating"}),(0,i.jsx)(t.td,{children:"The customer or the service provider, once they have received their rating for a particular milestone and are not satisfied with it."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"1c"}),(0,i.jsx)(t.td,{children:"General Dispute"}),(0,i.jsx)(t.td,{children:"A general dispute function for cases that do not fall under the categories mentioned in 1a and 1b."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"2"}),(0,i.jsx)(t.td,{children:"Voting module"}),(0,i.jsx)(t.td,{children:"Each juror can review the dispute and cast their vote, which also includes their rating for both the customer and the worker. After two days, all the juror votes are counted, and a winner is identified."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"3"}),(0,i.jsx)(t.td,{children:"Frontend App"}),(0,i.jsx)(t.td,{children:"Supporting frontend UI to test the aforementioned functionality."})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"milestone-3",children:(0,i.jsx)(t.strong,{children:"Milestone 3"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Estimated duration:"})," 3.0 weeks"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"FTE:"})," 1"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"PTE:"})," 2"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Costs:"})," 7975 USD"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"The main deliverables in this milestone are to use decentralized IPFS based storages to store all the files realated to tasks & advanced search. A file server integrated to nft storage will provided, using rocket framework & the search feature will be an update to the makerplace pallet. The skeletal UI will also be updated to showcase all the new features in Phase3."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Sr no."}),(0,i.jsx)(t.th,{children:"Deliverable"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"0a"}),(0,i.jsx)(t.td,{children:"License"}),(0,i.jsx)(t.td,{children:"Apache 2.0"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"0b"}),(0,i.jsx)(t.td,{children:"Documentation"}),(0,i.jsx)(t.td,{children:"We will provide both inline documentation of the code and a tutorial that explains how a user can use DOT Marketplace and understand the flow of tasking pallet."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"0c"}),(0,i.jsx)(t.td,{children:"Testing Guide"}),(0,i.jsx)(t.td,{children:"Functions will be covered by unit tests, the documentation will describe how to run these tests. We will also provide scripts to help deploy, run and test the build."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"0d"}),(0,i.jsx)(t.td,{children:"Docker Image"}),(0,i.jsx)(t.td,{children:"Docker image of the build"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"1"}),(0,i.jsx)(t.td,{children:"Decentralized Storage"}),(0,i.jsx)(t.td,{children:"All tasks related docs will be stored on a decentralized IPFS platform."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"2"}),(0,i.jsx)(t.td,{children:"Advanced Search"}),(0,i.jsx)(t.td,{children:"Search based on task progress, tags, tasks or milestone id's."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"3"}),(0,i.jsx)(t.td,{children:"Frontend App"}),(0,i.jsx)(t.td,{children:"Supporting frontend UI to test the aforementioned functionality."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"4"}),(0,i.jsx)(t.td,{children:"Website"}),(0,i.jsx)(t.td,{children:"Dedicated one-page website for Dot Marketplace."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"5"}),(0,i.jsx)(t.td,{children:"Article"}),(0,i.jsx)(t.td,{children:"Website article showing motivation behind phase 3 of dot marketplace and how to make the best use of it."})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"additional-project-details",children:(0,i.jsx)(t.strong,{children:"Additional Project Details"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Technology stack being used","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Rust, Substrate, React, Python, centralized cloud storage"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"future-plans",children:(0,i.jsx)(t.strong,{children:"Future Plans"})}),"\n",(0,i.jsx)(t.p,{children:"This is the last phase in our current roadmap. Post this we would focus on partnerships with chains on the dotsama ecosystem for integrating DotMarketplace as their native bounty management tool (this work has already started). If future, if the traction is great, we could create a fresh proposal for an excellent UI or integrate DotMarketplace within PolkaJS Apps itself with native support for multiple tokens besides DOT."}),"\n",(0,i.jsx)(t.h3,{id:""}),"\n",(0,i.jsxs)(t.h2,{id:"additional-information-heavy_plus_sign",children:["Additional Information ","\u2795"]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"How did you hear about the Grants Program?"})," Web3 Foundation Website, Polkadot India Buildathon"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"We have been working on this roadmap since we applied for the Web3 grant"}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}}}]);