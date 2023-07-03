"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[17474],{94455:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var n=a(87462),i=(a(67294),a(3905));a(8209);const l={},r="SubIdentity",o={unversionedId:"applications/SubIdentity",id:"applications/SubIdentity",title:"SubIdentity",description:"- Team Name: TDSoftware",source:"@site/applications/SubIdentity.md",sourceDirName:"applications",slug:"/applications/SubIdentity",permalink:"/applications/SubIdentity",draft:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/applications/SubIdentity.md",tags:[],version:"current",frontMatter:{}},s={},d=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Search View",id:"search-view",level:4},{value:"List View",id:"list-view",level:4},{value:"Identity View",id:"identity-view",level:4},{value:"Technology Stack",id:"technology-stack",level:4},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles",id:"team-linkedin-profiles",level:3},{value:"Development Status \ud83d\udcd6",id:"development-status-",level:2},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 \u2014 Design and Implementation of the Basic Application",id:"milestone-1--design-and-implementation-of-the-basic-application",level:3},{value:"Milestone 2 - Offline mode and performance improvement",id:"milestone-2---offline-mode-and-performance-improvement",level:3},{value:"Milestone 3 - Implementation of default plugins and direct interaction",id:"milestone-3---implementation-of-default-plugins-and-direct-interaction",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information \u2795",id:"additional-information-",level:2}],p={toc:d},m="wrapper";function u(t){let{components:e,...a}=t;return(0,i.kt)(m,(0,n.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"subidentity"},"SubIdentity"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Team Name:")," ",(0,i.kt)("a",{parentName:"li",href:"https://www.tdsoftware.de/"},"TDSoftware")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Payment Address:")," 0x8Db0972d9F40357526B879A002d60CCf6B4a8882"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Level:")," 2")),(0,i.kt)("h2",{id:"project-overview-"},"Project Overview \ud83d\udcc4"),(0,i.kt)("p",null,"This application is in response to the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/w3f/Grants-Program/blob/master/rfps/identity-directory.md"},"RFP: Substrate Identity Directory"),"."),(0,i.kt)("h3",{id:"overview"},"Overview"),(0,i.kt)("p",null,"SubIdentity is a fully client-side web application build with Vue.js in Typescript. The application enables searching of on-chain identities by any identity field in a substrate-based chain that implements the identity pallet. Search results are displayed in a list view. By choosing an identity from the list or providing the address of the on-chain account in a link, it is possible to right away see a human readable representation of the identity. A direct interaction with this account, such as sending tokens, is possible."),(0,i.kt)("h3",{id:"project-details"},"Project Details"),(0,i.kt)("p",null,"The project begins with a design and concept phase, which ensures that the greatest possible benefit is achieved with the application. SubIdentity will be component based, flexible and easily extendable. The responsive design ensures high accessibility on different devices such as mobile phones or desktop computers. The focus is on performance and usability to ensure the best possible user experience. The applications theme (color and branding) can be customized easily by configuring parameters. The final project phase includes manual and automated quality assurance (QA) with Selenium and the creation of unit tests."),(0,i.kt)("h4",{id:"search-view"},"Search View"),(0,i.kt)("p",null,"The search view includes an input mask for the search term, the option to select a chain and to connect your own endpoint. After searching for the entered term, the list view is displayed.\n",(0,i.kt)("img",{parentName:"p",src:"https://tdsoftware-dev.de/subidentity/home.png",alt:null})),(0,i.kt)("h4",{id:"list-view"},"List View"),(0,i.kt)("p",null,"The list view displays all identities that the search parameter entered in the search mask matches any of their identity fields. Clicking on an identity in the list view takes the user to the detailed identity view."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://tdsoftware-dev.de/subidentity/search-results.png",alt:null})),(0,i.kt)("h4",{id:"identity-view"},"Identity View"),(0,i.kt)("p",null,"The detailed identity view contains available data of an on-chain identity in a beautiful card design that is adjustable. Cards can be closed and reordered as desired by the user. If provided, an avatar is displayed next to all metadata available in the identity entry. Tokens can be send from the detailed view directly to the on-chain account.\n",(0,i.kt)("img",{parentName:"p",src:"https://tdsoftware-dev.de/subidentity/profile-details.png",alt:null})),(0,i.kt)("h4",{id:"technology-stack"},"Technology Stack"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"polkadot{.js}"),(0,i.kt)("li",{parentName:"ul"},"Vue.js with Vuex and the Vue Router"),(0,i.kt)("li",{parentName:"ul"},"TypeScript"),(0,i.kt)("li",{parentName:"ul"},"webpack"),(0,i.kt)("li",{parentName:"ul"},"Babel - for backwards compatibility in older Browsers"),(0,i.kt)("li",{parentName:"ul"},"Jest - for unit tests"),(0,i.kt)("li",{parentName:"ul"},"ESLint"),(0,i.kt)("li",{parentName:"ul"},"SASS (SCSS)")),(0,i.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,i.kt)("p",null,"This project is meant to provide an Identity Directory for all substrate-based chains, that implement the Identity pallet. "),(0,i.kt)("p",null,"Similar Project"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/Shard-Labs/identity-hub/tree/main/src"},"https://github.com/Shard-Labs/identity-hub/tree/main/src"))),(0,i.kt)("p",null,"What makes us different"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"easily extendible solution as it is component based"),(0,i.kt)("li",{parentName:"ul"},"focus on high performance and usability"),(0,i.kt)("li",{parentName:"ul"},"fully responsive UI"),(0,i.kt)("li",{parentName:"ul"},"manual and with Selenium automated QA during development")),(0,i.kt)("h2",{id:"team-"},"Team \ud83d\udc65"),(0,i.kt)("h3",{id:"team-members"},"Team members"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Sascha Dobschal"),(0,i.kt)("li",{parentName:"ul"},"Anika Oertel"),(0,i.kt)("li",{parentName:"ul"},"Markus Fitzner"),(0,i.kt)("li",{parentName:"ul"},"Toni Frotscher"),(0,i.kt)("li",{parentName:"ul"},"Sosan Neikbeen")),(0,i.kt)("h3",{id:"contact"},"Contact"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Contact Name:")," Sascha Dobschal"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Contact Email:")," ",(0,i.kt)("a",{parentName:"li",href:"mailto:s.dobschal@tdsoftware.de"},"s.dobschal@tdsoftware.de"))),(0,i.kt)("h3",{id:"legal-structure"},"Legal Structure"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Registered Address:")," Schlossgasse 20, 07743 Jena, Germany"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Registered Legal Entity:")," TDSoftware GmbH")),(0,i.kt)("h3",{id:"teams-experience"},"Team's experience"),(0,i.kt)("p",null,"We have years of experience in bringing ideas to life with a user-centered focus using blockchain and mobile technology. We have worked closely with a large number of customers to implement their solutions and therefore have already gained experience with blockchain technologies.\nOur most relevant projects are among others:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Exchange for trading digital assets (Customer is a Top 200 Token of CMC)"),(0,i.kt)("li",{parentName:"ul"},"Token Swap WebApp (Customer is a Top 200 Token of CMC)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://artists.niftymarket.com/"},"Blockchain, NFT Pallets & App")," (In Development)")),(0,i.kt)("p",null,"We look forward to contributing to the web3 ecosystem with an open source project next."),(0,i.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,i.kt)("p",null,"Source code will be in:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/TDSoftware"},"https://github.com/TDSoftware"))),(0,i.kt)("p",null,"Team profiles:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/dobschal"},"https://github.com/dobschal")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/a-oertel"},"https://github.com/a-oertel")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/markusdent"},"https://github.com/markusdent")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/frotscher"},"https://github.com/frotscher")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/sosan-neikbeen"},"https://github.com/sosan-neikbeen"))),(0,i.kt)("h3",{id:"team-linkedin-profiles"},"Team LinkedIn Profiles"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/dobschal/"},"https://www.linkedin.com/in/dobschal/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/anika-oertel-128237223/"},"https://www.linkedin.com/in/anika-oertel-128237223/"))),(0,i.kt)("h2",{id:"development-status-"},"Development Status \ud83d\udcd6"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/w3f/Grants-Program/blob/master/rfps/identity-directory.md"},"RFP")),(0,i.kt)("p",null,"A concept and initial design was created as part of this application and can be found in the Project Details chapter."),(0,i.kt)("h2",{id:"development-roadmap-"},"Development Roadmap \ud83d\udd29"),(0,i.kt)("h3",{id:"overview-1"},"Overview"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 3 months"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Full-Time Equivalent (FTE):"),"  3"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Total Costs:")," 49500 DAI")),(0,i.kt)("h3",{id:"milestone-1--design-and-implementation-of-the-basic-application"},"Milestone 1 \u2014 Design and Implementation of the Basic Application"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Estimated duration:")," 1 month"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"FTE:"),"  3"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Costs:"),"  16500 DAI")),(0,i.kt)("p",null,"A basic application with a responsive design is developed which supports querying by address and identity fields. A user can query identities from Polkadot or Kusama. When a search returns multiple results a list view is displayed. If there is only one search result or one identity is selected from the list view, a detailed identity view is displayed."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,i.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,i.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0a."),(0,i.kt)("td",{parentName:"tr",align:null},"License"),(0,i.kt)("td",{parentName:"tr",align:null},"Apache 2.0 / GPLv3 / MIT / Unlicense")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0b."),(0,i.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,i.kt)("td",{parentName:"tr",align:null},"We will provide both ",(0,i.kt)("strong",{parentName:"td"},"inline documentation")," of the code and a basic ",(0,i.kt)("strong",{parentName:"td"},"tutorial")," that explains how a user can use the application.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0c."),(0,i.kt)("td",{parentName:"tr",align:null},"Testing"),(0,i.kt)("td",{parentName:"tr",align:null},"Core functions will be covered by unit tests as far as reasonably applicable to ensure functionality and robustness. In the documentation, we will describe how to run these tests.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"1."),(0,i.kt)("td",{parentName:"tr",align:null},"Concept and design"),(0,i.kt)("td",{parentName:"tr",align:null},"We will create a high-fidelity, responsive, pixel perfect design for a search, a list view and a detailed identity view")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"2."),(0,i.kt)("td",{parentName:"tr",align:null},"Implement logic for querying identities"),(0,i.kt)("td",{parentName:"tr",align:null},"Implement logic to receive identities from a substrate-based chain implementing the Identity pallet")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"3."),(0,i.kt)("td",{parentName:"tr",align:null},"Implement UI for search and list view"),(0,i.kt)("td",{parentName:"tr",align:null},"Build UI with Vue.js")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"4."),(0,i.kt)("td",{parentName:"tr",align:null},"Implement UI for detailed identity view"),(0,i.kt)("td",{parentName:"tr",align:null},"Build UI with Vue.js")))),(0,i.kt)("h3",{id:"milestone-2---offline-mode-and-performance-improvement"},"Milestone 2 - Offline mode and performance improvement"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Estimated Duration:")," 1 month")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"FTE:"),"  3")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Costs:")," 16500 DAI"),(0,i.kt)("p",{parentName:"li"},"A user can query identities from Polkadot, Kusama or provide his own node endpoint. The application can be hosted on IPFS and a backend is developed in order to improve performance."))),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,i.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,i.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0a."),(0,i.kt)("td",{parentName:"tr",align:null},"License"),(0,i.kt)("td",{parentName:"tr",align:null},"Apache 2.0 / GPLv3 / MIT / Unlicense")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0b."),(0,i.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,i.kt)("td",{parentName:"tr",align:null},"We will provide both ",(0,i.kt)("strong",{parentName:"td"},"inline documentation")," of the code and update the basic ",(0,i.kt)("strong",{parentName:"td"},"tutorial")," that explains how a user can use the application.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0c."),(0,i.kt)("td",{parentName:"tr",align:null},"Testing"),(0,i.kt)("td",{parentName:"tr",align:null},"Core functions will be covered by unit tests as far as reasonably applicable to ensure functionality and robustness. In the documentation, we will describe how to run these tests.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"1."),(0,i.kt)("td",{parentName:"tr",align:null},"Implement offline mode"),(0,i.kt)("td",{parentName:"tr",align:null},"Enable a user to connect to a local node and fetch identities from there")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"2."),(0,i.kt)("td",{parentName:"tr",align:null},"Implement UI for node selection"),(0,i.kt)("td",{parentName:"tr",align:null},"Enable a user to select the node from the UI")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"3."),(0,i.kt)("td",{parentName:"tr",align:null},"Implement URL param logic"),(0,i.kt)("td",{parentName:"tr",align:null},"URL Parameters can specify which cards are visible and in which order")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"4a."),(0,i.kt)("td",{parentName:"tr",align:null},"Performance improvement"),(0,i.kt)("td",{parentName:"tr",align:null},"Focus on improving the web applications performance to maximize usability e.g. by storing fetched information from a local node to IPFS if a users pinata key was provided")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"4b."),(0,i.kt)("td",{parentName:"tr",align:null},"Backend Development"),(0,i.kt)("td",{parentName:"tr",align:null},"Implement backend with e.g. Node.js to increase performance through indexing; Provide an API for frontend")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"4c."),(0,i.kt)("td",{parentName:"tr",align:null},"Consume API"),(0,i.kt)("td",{parentName:"tr",align:null},"Use the provided API in frontend to increase performance")))),(0,i.kt)("h3",{id:"milestone-3---implementation-of-default-plugins-and-direct-interaction"},"Milestone 3 - Implementation of default plugins and direct interaction"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Estimated Duration:")," 1 month"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"FTE:"),"  3"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Costs:")," 16500 DAI")),(0,i.kt)("p",null,"A flexible, expandable and component-based application is developed, that supports the following default plugins: basic info, governance, treasury and validator. It is possible to directly interact with the underlying account by sending tokens to it.  Manual and automated quality assurance is done."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,i.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,i.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0a."),(0,i.kt)("td",{parentName:"tr",align:null},"License"),(0,i.kt)("td",{parentName:"tr",align:null},"Apache 2.0 / GPLv3 / MIT / Unlicense")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0b."),(0,i.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,i.kt)("td",{parentName:"tr",align:null},"We will provide both ",(0,i.kt)("strong",{parentName:"td"},"inline documentation")," of the code and update the basic ",(0,i.kt)("strong",{parentName:"td"},"tutorial")," that explains how a user can use the application.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0c."),(0,i.kt)("td",{parentName:"tr",align:null},"Testing"),(0,i.kt)("td",{parentName:"tr",align:null},"Core functions will be covered by unit tests as far as reasonably applicable to ensure functionality and robustness. In the documentation, we will describe how to run these tests.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0d."),(0,i.kt)("td",{parentName:"tr",align:null},"Article"),(0,i.kt)("td",{parentName:"tr",align:null},"We will publish an article that explains what was done as part of the grant.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"1a."),(0,i.kt)("td",{parentName:"tr",align:null},"Implement logic for default plugins - backend"),(0,i.kt)("td",{parentName:"tr",align:null},"Implement logic to get information for default plugins governance, treasury and validator on backend, provide API for frontend")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"1b."),(0,i.kt)("td",{parentName:"tr",align:null},"Implement logic for default plugins - frontend"),(0,i.kt)("td",{parentName:"tr",align:null},"Implement logic to to get information for default plugins governance, treasury and validator; Consume provided API")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"2."),(0,i.kt)("td",{parentName:"tr",align:null},"Implement components for displaying default plugins"),(0,i.kt)("td",{parentName:"tr",align:null},"Implement UI for displaying default plugins")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"3."),(0,i.kt)("td",{parentName:"tr",align:null},"Implement logic for sending tokens"),(0,i.kt)("td",{parentName:"tr",align:null},"Implement logic to get balance of current account and make a transaction to displayed identity; consider transaction fees; use an open protocol (e.g. wallet connect) to establish a secure connection to a wallet")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"4."),(0,i.kt)("td",{parentName:"tr",align:null},"Implement UI for sending tokens"),(0,i.kt)("td",{parentName:"tr",align:null},"Implement UI for sending tokens, including a button to trigger a transaction, an input field and a display of balances and fees")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"5."),(0,i.kt)("td",{parentName:"tr",align:null},"Quality Assurance"),(0,i.kt)("td",{parentName:"tr",align:null},"Manual and automated QA")))),(0,i.kt)("h2",{id:"future-plans"},"Future Plans"),(0,i.kt)("p",null,"After we have provided a flexible, expandable and component-based application with the above-mentioned functions as part of milestones 1, 2 and 3, the development of further components as plugins could follow, as suggested in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/w3f/Grants-Program/blob/master/applications/substrate-identity-directory.md"},"RFP")," in the Additional Plug-in Ideas chapter.\nIn addition, TDSoftware can undertake maintenance tasks as part of a maintenance grant."),(0,i.kt)("h2",{id:"additional-information-"},"Additional Information \u2795"),(0,i.kt)("p",null,"This is our first application for an open source project to innovate the web3 Ecosystem."))}u.isMDXComponent=!0}}]);