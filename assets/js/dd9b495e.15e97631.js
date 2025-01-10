"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[38977],{3284:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"applications/cryptolab-staking-reward-collector-front-end","title":"CryptoLab Staking Reward Collector","description":"Team Name:* CryptoLab","source":"@site/applications/cryptolab-staking-reward-collector-front-end.md","sourceDirName":"applications","slug":"/applications/cryptolab-staking-reward-collector-front-end","permalink":"/applications/cryptolab-staking-reward-collector-front-end","draft":false,"unlisted":false,"editUrl":"https://github.com/w3f/Grants-Program/edit/master/applications/cryptolab-staking-reward-collector-front-end.md","tags":[],"version":"current","frontMatter":{}}');var s=n(74848),i=n(28453);const a={},l="CryptoLab Staking Reward Collector",o={},d=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-page_facing_up",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-busts_in_silhouette",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles (if available)",id:"team-linkedin-profiles-if-available",level:3},{value:"Development Status \ud83d\udcd6",id:"development-status-open_book",level:2},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-nut_and_bolt",level:2},{value:"Milestone 1 (Implementation)",id:"milestone-1-implementation",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information \u2795",id:"additional-information-heavy_plus_sign",level:2}];function c(e){const t={a:"a",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"cryptolab-staking-reward-collector",children:"CryptoLab Staking Reward Collector"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Team Name:"})," CryptoLab"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Payment Address:"})," 0x064530BBA1ea3aaE6cC68207Ec75EEa6a7C0c78b (DAI)"]}),"\n"]}),"\n",(0,s.jsxs)(t.h2,{id:"project-overview-page_facing_up",children:["Project Overview ","\ud83d\udcc4"]}),"\n",(0,s.jsxs)(t.p,{children:["This application is in response to ",(0,s.jsx)(t.a,{href:"https://github.com/w3f/General-Grants-Program/blob/master/rfps/staking-rewards-collector-front-end.md",children:"https://github.com/w3f/General-Grants-Program/blob/master/rfps/staking-rewards-collector-front-end.md"})]}),"\n",(0,s.jsx)(t.h3,{id:"overview",children:"Overview"}),"\n",(0,s.jsxs)(t.p,{children:["The Staking Rewards Collector requests us to make a front-end UI so that non-technical-background people can utilize the tool in a simple way. As the requested features are quite similar to what we have done recently, We intend to implement the requests from the rfps on ",(0,s.jsx)(t.a,{href:"https://www.cryptolab.network",children:"https://www.cryptolab.network"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"project-details",children:"Project Details"}),"\n",(0,s.jsxs)(t.p,{children:["We plan to utilize the current Staking Reward webpage (",(0,s.jsx)(t.a,{href:"https://www.cryptolab.network/tools/dotSR",children:"https://www.cryptolab.network/tools/dotSR"}),") on CryptoLab as the design base. However, we will change the data source from our DB to Staking Rewards Collector, retrieving rewards from the subscan because the subscan stores all rewards data."]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Mockup UI"}),"\n"]}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Staking Reward Dashboard"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://user-images.githubusercontent.com/5772463/120571225-3fb02880-c44c-11eb-89b3-59328790e19f.png",alt:"image"})}),"\n",(0,s.jsx)(t.p,{children:"See the image above, CryptoLab already have a similar page for users to query their rewards. We are going to enhance the followings"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Filter as requested"}),"\n",(0,s.jsx)(t.li,{children:"Export to CSV or JSON"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://user-images.githubusercontent.com/5772463/120603398-920a3d00-c47e-11eb-9b0e-4541fecc89b5.png",alt:"image"})}),"\n",(0,s.jsx)(t.p,{children:"The table content would also be re-worked to the Staking Rewards Collector one, mockup as below."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://user-images.githubusercontent.com/5772463/120638628-f0e1ad80-c4a2-11eb-8297-911efdb9aa20.png",alt:"image"})}),"\n",(0,s.jsx)(t.p,{children:"One thing needs to discuss is that is the Tax column necessary? As it is not an input variable, users cannot enter their rates in their countries. We intend to remove the column from the webpage if you're ok."}),"\n",(0,s.jsxs)(t.ol,{start:"2",children:["\n",(0,s.jsx)(t.li,{children:"Staking Reward Filter"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Upon clicking the filter icon, a dialog would appear and provide the following options as requested. A help button would be in this dialog to give users hints of how to use it."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://user-images.githubusercontent.com/5772463/120784731-fc92aa00-c55e-11eb-9dee-f71f5b3ba49c.png",alt:"image"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Tech Stack"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Front End: Vue.js"}),"\n",(0,s.jsx)(t.p,{children:"Back End: Rust, NodeJS"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Architecture"}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["Currently, CryptoLab is served on a single VPS, thus the Staking Rewards Collector would be an application on it. When a user want to see the rewards, the website would call an API on the ",(0,s.jsx)(t.em,{children:"cryptolab-web-backend"}),", and it then spawns a thread to call the Staking Rewards Collector and parse the responses in files. The image below show the concept of architecture of the service."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://user-images.githubusercontent.com/5772463/120573135-b0a50f80-c44f-11eb-912a-d625ba4112fd.png",alt:"image"})}),"\n",(0,s.jsxs)(t.p,{children:["The modules in white blocks are what we have now. We plan to call Staking Rewards Collector from the ",(0,s.jsx)(t.em,{children:"cryptolab-web-backend"})," and parse the json output to respond to the query from the website."]}),"\n",(0,s.jsx)(t.h3,{id:"ecosystem-fit",children:"Ecosystem Fit"}),"\n",(0,s.jsx)(t.p,{children:"The staking-rewards-collector is a tool for gathering staking rewards for given addresses and cross-referencing those with daily price data. It is a handy tool for every validator and nominator in the ecosystem. However, since it currently has a CLI and requires technical knowledge to set up (git, nodejs, yarn). A front-end hosted on a website could help many users reach this tool and enjoy the benefits."}),"\n",(0,s.jsxs)(t.h2,{id:"team-busts_in_silhouette",children:["Team ","\ud83d\udc65"]}),"\n",(0,s.jsx)(t.h3,{id:"team-members",children:"Team members"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Yu-Kai Tseng ",(0,s.jsx)(t.a,{href:"https://github.com/yktseng",children:"GitHub"})," has a master's degree in Computer Science. He also had 9-year working experience in developing Industrial Network Management Softwares/Services and is now a freelancer. Yu-kai is familiar with backend service development and had experience in leading large distributed system design and development."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Yao-Hsin Chen ",(0,s.jsx)(t.a,{href:"https://github.com/iisaint",children:"GitHub"})," has a Ph.D. in Computer Science focusing on information security. He is a big believer in blockchain and is a co-founder of a blockchain-based solar technology company in Taiwan. Currently, he is organizing a small start-up to deliver services in the Polkadot ecosystem."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"contact",children:"Contact"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Contact Name:"})," Yu-kai Tseng"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Contact Email:"})," ",(0,s.jsx)(t.a,{href:"mailto:tanistseng@gmail.com",children:"tanistseng@gmail.com"})]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Website:"})," ",(0,s.jsx)(t.a,{href:"https://www.cryptolab.network",children:"https://www.cryptolab.network"})]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"legal-structure",children:"Legal Structure"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Registered Address:"})," N/A"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Registered Legal Entity:"})," N/A"]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"teams-experience",children:"Team's experience"}),"\n",(0,s.jsxs)(t.p,{children:["We have already developed the ",(0,s.jsx)(t.a,{href:"https://www.cryptolab.network",children:"Cryptolab.Network"})," website and telegram bots for both Kusama and Polkadot validators, which were tipped from both chain's councils."]}),"\n",(0,s.jsx)(t.h3,{id:"team-code-repos",children:"Team Code Repos"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/cryptolab-network/polkadot-staking-site",children:"https://github.com/cryptolab-network/polkadot-staking-site"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/cryptolab-network/cryptolab-web-server",children:"https://github.com/cryptolab-network/cryptolab-web-server"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/cryptolab-network/chain-data-collector",children:"https://github.com/cryptolab-network/chain-data-collector"})}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/yktseng",children:"https://github.com/yktseng"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/iisaint",children:"https://github.com/iisaint"})}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"team-linkedin-profiles-if-available",children:"Team LinkedIn Profiles (if available)"}),"\n",(0,s.jsx)(t.p,{children:"N/A"}),"\n",(0,s.jsxs)(t.h2,{id:"development-status-open_book",children:["Development Status ","\ud83d\udcd6"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Original ",(0,s.jsx)(t.a,{href:"https://github.com/w3f/General-Grants-Program/blob/master/rfps/staking-rewards-collector-front-end.md",children:"RFP"})," (requests for proposal)"]}),"\n"]}),"\n",(0,s.jsxs)(t.h2,{id:"development-roadmap-nut_and_bolt",children:["Development Roadmap ","\ud83d\udd29"]}),"\n",(0,s.jsx)(t.h3,{id:"milestone-1-implementation",children:"Milestone 1 (Implementation)"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Estimated Duration:"})," 15 days"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"FTE:"}),"  1"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Costs:"})," 4000 USD"]}),"\n"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Number"}),(0,s.jsx)(t.th,{children:"Deliverable"}),(0,s.jsx)(t.th,{children:"Specification"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"0a."}),(0,s.jsx)(t.td,{children:"License"}),(0,s.jsx)(t.td,{children:"GPLv3"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"0b."}),(0,s.jsx)(t.td,{children:"Documentation"}),(0,s.jsxs)(t.td,{children:["We will provide both ",(0,s.jsx)(t.strong,{children:"inline documentation"})," of the code and a basic ",(0,s.jsx)(t.strong,{children:"tutorial"})," that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. (1 day)"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"0c."}),(0,s.jsx)(t.td,{children:"Testing Guide"}),(0,s.jsx)(t.td,{children:"Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. (2 days)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"0d."}),(0,s.jsx)(t.td,{children:"Docker"}),(0,s.jsx)(t.td,{children:"We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. (3 days)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"1."}),(0,s.jsx)(t.td,{children:"Integrate Staking Rewards Collector to CryptoLab"}),(0,s.jsx)(t.td,{children:"Develop CryptoLab backend so that it can call the Staking Rewards Collector and parse the output files. (2 days)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"2."}),(0,s.jsx)(t.td,{children:"Integrate Staking Rewards Collector to CryptoLab Website"}),(0,s.jsx)(t.td,{children:"Add RESTful APIs to allow parameter input and retrieve the output files. (1 day)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"3."}),(0,s.jsx)(t.td,{children:"UI for filter"}),(0,s.jsx)(t.td,{children:"Develop a dialog to allow user input necessary parameters. (1 day)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"4."}),(0,s.jsx)(t.td,{children:"UI for data visualizer"}),(0,s.jsx)(t.td,{children:"Modify the table on our current Staking Reward Viewer to fit the requested one. (1 day)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"5."}),(0,s.jsx)(t.td,{children:"Drop-down List for download report"}),(0,s.jsx)(t.td,{children:"Modify the download button to allow users select either CSV or JSON. (0.5 day)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"6."}),(0,s.jsx)(t.td,{children:"Help page"}),(0,s.jsx)(t.td,{children:"Implement help texts and descriptions for users. (0.5 day)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"7."}),(0,s.jsx)(t.td,{children:"Deployment"}),(0,s.jsx)(t.td,{children:"Deploy the code on CryptoLab. (1 day)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"8."}),(0,s.jsx)(t.td,{children:"Test live environment"}),(0,s.jsx)(t.td,{children:"Test on both Chrome and Firefox and provide a report (1 day)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"9."}),(0,s.jsx)(t.td,{children:"Polishing"}),(0,s.jsx)(t.td,{children:"Reach out for feedback to the Grants Team. Integrate final feedback on functional, as well as cosmetic changes like font size, colors, typos etc. (TBD days)"})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"future-plans",children:"Future Plans"}),"\n",(0,s.jsxs)(t.p,{children:["Ask users to enter the ",(0,s.jsx)(t.em,{children:"Start Balance"})," is bothersome. To further enhance the Staking Rewards Collector, it is technically possible to auto fill the ",(0,s.jsx)(t.em,{children:"Start Balance"})," of the start date by recording the block number at 12:00 am each day and then collecting the balances during the block number from Polkascan. However, it requires specific works and would not be included in the planned 3-week duration. We may do it if feedbacks from users are positive."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://user-images.githubusercontent.com/5772463/120570179-18f0f280-c44a-11eb-9ec6-3a68e91803b3.png",alt:"image"})}),"\n",(0,s.jsxs)(t.h2,{id:"additional-information-heavy_plus_sign",children:["Additional Information ","\u2795"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"How did you hear about the Grants Program?"})}),"\n",(0,s.jsx)(t.p,{children:"We see the RFP on the github and think it is very similar to what we have already done. We think we are suitable for working on it because CryptoLab has provided tools for both validators and nominators. Thus current CryptoLab users can enjoy the benefit from the Staking Rewards Collector. The CryptoLab can also attract more Staking Rewards Collector users to use the site."})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>l});var r=n(96540);const s={},i=r.createContext(s);function a(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);