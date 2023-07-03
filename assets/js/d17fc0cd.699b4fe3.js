"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[29654],{98923:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=a(87462),l=(a(67294),a(3905));a(8209);const i={},r="Tip or Donate KSM Embeddable Button",o={unversionedId:"applications/KSM-embeddable-tip-or-donate-button",id:"applications/KSM-embeddable-tip-or-donate-button",title:"Tip or Donate KSM Embeddable Button",description:"- Proposer//github.com/Shard-Labs",source:"@site/applications/KSM-embeddable-tip-or-donate-button.md",sourceDirName:"applications",slug:"/applications/KSM-embeddable-tip-or-donate-button",permalink:"/applications/KSM-embeddable-tip-or-donate-button",draft:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/applications/KSM-embeddable-tip-or-donate-button.md",tags:[],version:"current",frontMatter:{}},p={},s=[{value:"Project Overview",id:"project-overview",level:2},{value:"Overview",id:"overview",level:3},{value:"Team",id:"team",level:2},{value:"Team members",id:"team-members",level:3},{value:"Team Website",id:"team-website",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles",id:"team-linkedin-profiles",level:3},{value:"Development Roadmap",id:"development-roadmap",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1",id:"milestone-1",level:3},{value:"Milestone 2",id:"milestone-2",level:3},{value:"Additional Information",id:"additional-information",level:2}],m={toc:s},d="wrapper";function u(e){let{components:t,...a}=e;return(0,l.kt)(d,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"tip-or-donate-ksm-embeddable-button"},"Tip or Donate KSM Embeddable Button"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Proposer:")," ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/Shard-Labs"},"https://github.com/Shard-Labs")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Payment Address:")," bc1q5njhr3r0mgd398yvma75nv48g69c590a0f0zcx")),(0,l.kt)("h2",{id:"project-overview"},"Project Overview"),(0,l.kt)("p",null,"This application is in response to following RFP ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/w3f/General-Grants-Program/blob/master/rfp-proposal/ksm-tipping-button.md"},"https://github.com/w3f/General-Grants-Program/blob/master/rfp-proposal/ksm-tipping-button.md")),(0,l.kt)("h3",{id:"overview"},"Overview"),(0,l.kt)("p",null,'As proposed in the RFP we will make a standalone embedded "Tip or Donate KSM" button with customizable text by the website owner. The button\'s embedded code will sanitize the current URL, check if the tip for the same URL already exists and is active. If available and once clicked button will ask for permission to connect to PolkadotJS extension, offer to Propose Tip or Donate directly. If proposing a tip, it will inform the user of the funds needed to propose a tip (transaction fee and deposit), check if the user is a Council member and optionally allow him to attach a message. Only Council members are allowed to propose the amount once the tip has been created. Once the tip is proposed the button will be disabled. If donating directly it will ask for an amount and allow visitor to enter a custom note.'),(0,l.kt)("p",null,"Considering the request for this implementation not slowing down the websites and several performance tests from different sources exhibiting Svelte as the optimal choice performance-wise we are strongly considering using Svelte as a development framework. Before committing to that decision we will conduct the performance tests ourselves and decide if it is the optimal solution. We will be using polkadot.js API."),(0,l.kt)("p",null,"Mockups:"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://i.imgur.com/ige90GF.png",alt:"Connect to Polkadot"})),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://i.imgur.com/pQ1yaAE.png",alt:"Select a wallet"})),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://i.imgur.com/6TJircc.png",alt:"Propose a tip/Donate"})),(0,l.kt)("h2",{id:"team"},"Team"),(0,l.kt)("h3",{id:"team-members"},"Team members"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Darko Ma\u010de\u0161i\u0107"),(0,l.kt)("li",{parentName:"ul"},"Ana Mili\u0107-\u0160trkalj")),(0,l.kt)("h3",{id:"team-website"},"Team Website"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://shardlabs.io"},"https://shardlabs.io"))),(0,l.kt)("h3",{id:"legal-structure"},"Legal Structure"),(0,l.kt)("p",null,"SHARD LABS d.o.o., Kroz Smrde\u010dac 19 Split, Croatia"),(0,l.kt)("h3",{id:"teams-experience"},"Team's experience"),(0,l.kt)("p",null,"We have experience in several private and open source projects. Most notable and relatable to the proposal:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Ink! Remix plugin ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/Shard-Labs/ink-remix-plugin"},"https://github.com/Shard-Labs/ink-remix-plugin")),(0,l.kt)("li",{parentName:"ul"},"Zokrates ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/Zokrates/ZoKrates"},"https://github.com/Zokrates/ZoKrates")," ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/Shard-Labs/zokrates-remix-plugin"},"https://github.com/Shard-Labs/zokrates-remix-plugin")),(0,l.kt)("li",{parentName:"ul"},"Sourcify ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/ethereum/sourcify"},"https://github.com/ethereum/sourcify"))),(0,l.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/Shard-Labs"},"https://github.com/Shard-Labs")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/dark64"},"https://github.com/dark64")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/anamst"},"https://github.com/anamst"))),(0,l.kt)("h3",{id:"team-linkedin-profiles"},"Team LinkedIn Profiles"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/darko-macesic/"},"https://www.linkedin.com/in/darko-macesic/")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/ana-mili%C4%87-%C5%A1trkalj-473b28192/"},"https://www.linkedin.com/in/ana-mili%C4%87-%C5%A1trkalj-473b28192/"))),(0,l.kt)("h2",{id:"development-roadmap"},"Development Roadmap"),(0,l.kt)("h3",{id:"overview-1"},"Overview"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 2 months"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Full-time equivalent (FTE):")," 4 weeks"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Total Costs:")," 0.75 BTC")),(0,l.kt)("h3",{id:"milestone-1"},"Milestone 1"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Estimated Duration:")," 3 weeks"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Costs:")," 0.25 BTC")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Number"),(0,l.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,l.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1."),(0,l.kt)("td",{parentName:"tr",align:null},"Embedded code"),(0,l.kt)("td",{parentName:"tr",align:null},"Removing the UTM, hashes, converting URL to bytes, checking if a tip for the same URL already exists and is active, if not the button is available.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2."),(0,l.kt)("td",{parentName:"tr",align:null},"Connecting to PolkadotJS extension"),(0,l.kt)("td",{parentName:"tr",align:null},"If none is present, offer to install it. If allowed, a popup asking to select an account. If denied, cancel all. Offer two options: propose a tip or donate directly (text is customizable).")))),(0,l.kt)("h3",{id:"milestone-2"},"Milestone 2"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Estimated Duration:")," 1 month and 1 week"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Costs:")," 0.5 BTC")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Number"),(0,l.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,l.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1."),(0,l.kt)("td",{parentName:"tr",align:null},"Propose tip"),(0,l.kt)("td",{parentName:"tr",align:null},"Inform user of the funds needed for tip proposal (deposit and transaction fee). If a user is a Council member ask for the amount and create a new Tip. If a user is not a Council member, create a new Tip entry without specifying the amount (only Council members are allowed to do so). Allow user to attach a message. Disable button and link to tips page in treasury after Tip is created.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2."),(0,l.kt)("td",{parentName:"tr",align:null},"Donate directly"),(0,l.kt)("td",{parentName:"tr",align:null},"Ask the user for an amount to donate and allow him to enter a custom note.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3."),(0,l.kt)("td",{parentName:"tr",align:null},"Testing"),(0,l.kt)("td",{parentName:"tr",align:null},"We will conduct testing of the developed functionalities on Westend testnet.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4."),(0,l.kt)("td",{parentName:"tr",align:null},"Article on Medium"),(0,l.kt)("td",{parentName:"tr",align:null},"After finishing with development and testing we will publish an article on Medium describing our work done for the project, and a tutorial on how to integrate it into existing websites.")))),(0,l.kt)("h2",{id:"additional-information"},"Additional Information"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Are there are any teams who have already contributed (financially) to the project? No."),(0,l.kt)("li",{parentName:"ul"},"Have you applied for other grants so far? We have received funding and completed Ink! Remix plugin.")))}u.isMDXComponent=!0}}]);