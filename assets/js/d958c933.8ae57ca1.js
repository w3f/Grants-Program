"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[62349],{8470:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var n=a(87462),l=(a(67294),a(3905));a(8209);const i={},r="Galaxy: Three-dimensional Web for Polkadot Users",o={unversionedId:"applications/galaxy",id:"applications/galaxy",title:"Galaxy: Three-dimensional Web for Polkadot Users",description:"- Team Name: Galaxy.Do",source:"@site/applications/galaxy.md",sourceDirName:"applications",slug:"/applications/galaxy",permalink:"/applications/galaxy",draft:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/applications/galaxy.md",tags:[],version:"current",frontMatter:{}},s={},d=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"1. Frontend - Excalidraw",id:"1-frontend---excalidraw",level:4},{value:"2. Networking - Polkadot",id:"2-networking---polkadot",level:4},{value:"3. Backend - Chisel",id:"3-backend---chisel",level:4},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Development Status \ud83d\udcd6",id:"development-status-",level:2},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 \u2014 Proof of Concept",id:"milestone-1--proof-of-concept",level:3},{value:"Milestone 2 \u2014 Minimal Valuable Product",id:"milestone-2--minimal-valuable-product",level:3},{value:"Next Milestones",id:"next-milestones",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Referral Program (optional) \ud83d\udcb0",id:"referral-program-optional-",level:2},{value:"Additional Information \u2795",id:"additional-information-",level:2}],p={toc:d},m="wrapper";function c(e){let{components:t,...a}=e;return(0,l.kt)(m,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"galaxy-three-dimensional-web-for-polkadot-users"},"Galaxy: Three-dimensional Web for Polkadot Users"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Team Name:")," Galaxy.Do"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Payment Address:")," 0xF1dcdA1C9E76BBf32791da01e464A3F55bd7000c (USDC)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("a",{parentName:"strong",href:"https://github.com/w3f/Grants-Program/tree/master#level_slider-levels"},"Level"),":")," 1")),(0,l.kt)("h2",{id:"project-overview-"},"Project Overview \ud83d\udcc4"),(0,l.kt)("h3",{id:"overview"},"Overview"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/4569866/228949639-f89bb602-59c5-4b30-917e-8a8b3cdebc20.png",alt:"image"})),(0,l.kt)("p",null,"Web has revolutionized the way we organize and explore knowledge."),(0,l.kt)("p",null,"Although web pages digitalized physical documents, they also inherited some of limitations."),(0,l.kt)("p",null,"That's the reason most web pages are vertically scrollable, in one dimension only, imitating physical predecessor."),(0,l.kt)("p",null,"Whiteboards expanding it's space into second dimension leverage human ability of spatial awareness to enhance the understanding."),(0,l.kt)("p",null,"As hyper text links navigate user in between of web site pages, same way whiteboards can be also inter-linked to expand information into a third dimension."),(0,l.kt)("p",null,"Then multiple related whiteboards can be rendered as layers on the same canvas with seamless transition in between the layers, thus expanding the knowledge into a third dimension."),(0,l.kt)("p",null,"That's the quintessence of Stretch Text concept, which makes it possible to express interconnectedness of all knowledge (intertwingularity)"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Current grant is offering to develop canvas-based browser which allows polkadot users to create, organize, and share knowledge leveraging three-dimensional Stretch Text space.")),(0,l.kt)("h3",{id:"project-details"},"Project Details"),(0,l.kt)("h4",{id:"1-frontend---excalidraw"},"1. Frontend - Excalidraw"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/4569866/228949713-8de6ff8c-fdde-41ab-8ae9-d895ab3e7b02.png",alt:"image"})),(0,l.kt)("p",null,"The scene is represented as an object; it contains UI State, list of elements, and files cache."),(0,l.kt)("p",null,"Whenever the elements on the scene updated, it triggers rendering of the canvas."),(0,l.kt)("p",null,"Each element is represented as an object too: text, images, shapes."),(0,l.kt)("p",null,"If given element object has a text field, then each line of the text passed to fillText canvas method."),(0,l.kt)("p",null,"If given element is an image though, it's content is fetched from files cache, and then passed to drawImage canvas method.\nFiles cache is simply a mapping from image content hash to the blob content."),(0,l.kt)("p",null,"UI implemented in React rendering on top of the canvas allows to seamlessly create and manipulate the elements on the canvas."),(0,l.kt)("p",null,"Selected elements can be joined into groups, and then selected groups can be serialized and saved as a separate layers."),(0,l.kt)("p",null,"As user navigates across an infinite canvas, the layers outside of viewport can be unloaded and relevant layers appear."),(0,l.kt)("h4",{id:"2-networking---polkadot"},"2. Networking - Polkadot"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/4569866/228949758-62d6cc1e-ed11-493e-800d-846857aaebcb.png",alt:"image"})),(0,l.kt)("p",null,"Each layer can be serialized into JSON file and then saved to IPFS."),(0,l.kt)("p",null,"User who created the layer, then makes a transaction to claim ownership of it."),(0,l.kt)("p",null,"In the transaction, user is passing IPFS link and chosen Layer Name."),(0,l.kt)("p",null,"The smart contract deployed on the pallete, maintains the mapping from Layer Link to IPFS Link."),(0,l.kt)("p",null,"Layer Link is represented as deep link in format of ",(0,l.kt)("inlineCode",{parentName:"p"},"galaxy://<wallet address/<layer name>"),"."),(0,l.kt)("h4",{id:"3-backend---chisel"},"3. Backend - Chisel"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/4569866/228949811-b22de278-3e80-4cf1-8b45-c1e8dcb31879.png",alt:"image"})),(0,l.kt)("p",null,"Galaxy Browser consist of frontend app, backend server, and database."),(0,l.kt)("p",null,"REST API implemented in Rust is running a Deno runtime to handle the network requests in between frontend and database."),(0,l.kt)("p",null,"When user opens a deep link, layer loading will be handled by backend endpoint which returns the scene object in response to frontend request."),(0,l.kt)("p",null,"Same endpoint will first resolve Layer Link to IPFS link through polkadot as described above, then fetch content of IPFS link,\nperform validation of deserialized content to ensure it corresponds scene schema, then save every element as a separate object\nin the database, then fetch images and save them to database as well, and then consturct a scene object."),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"The proposed architecture also allows to implement more advanced features: search across different layers, tagging and versioning, recommendations, parallel tranclusion, and microtransactions.")),(0,l.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,l.kt)("p",null,"Here open for suggestions. Specifically to consider partnerships with: wallets, storage solutions, content sharing platforms and social networks, copyright and microtransaction services."),(0,l.kt)("h2",{id:"team-"},"Team \ud83d\udc65"),(0,l.kt)("h3",{id:"team-members"},"Team members"),(0,l.kt)("h3",{id:"contact"},"Contact"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Contact Name:")," Igor Berlenko"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Contact Email:")," ",(0,l.kt)("a",{parentName:"li",href:"mailto:igorberlenko7@gmail.com"},"igorberlenko7@gmail.com")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Website:")," ",(0,l.kt)("a",{parentName:"li",href:"https://galaxy.do"},"https://galaxy.do"))),(0,l.kt)("h3",{id:"legal-structure"},"Legal Structure"),(0,l.kt)("p",null,"Opensource Code. Governance with DHO (Hypha DAO)."),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/hypha-dao/hypha-substrate"},"https://github.com/hypha-dao/hypha-substrate")),(0,l.kt)("h3",{id:"teams-experience"},"Team's experience"),(0,l.kt)("p",null,"My profile:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/7flash"},"https://github.com/7flash"))),(0,l.kt)("p",null,"Relevant repositories I have contributed to:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/excalidraw/excalidraw"},"https://github.com/excalidraw/excalidraw")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/chiselstrike/chiselstrike"},"https://github.com/chiselstrike/chiselstrike")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/zsviczian/obsidian-excalidraw-plugin"},"https://github.com/zsviczian/obsidian-excalidraw-plugin")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/JoinSeeds/seeds_light_wallet"},"https://github.com/JoinSeeds/seeds_light_wallet")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/ColdStack-Network/blockchain"},"https://github.com/ColdStack-Network/blockchain"))),(0,l.kt)("h2",{id:"development-status-"},"Development Status \ud83d\udcd6"),(0,l.kt)("p",null,'The Galaxy Browser is all inspired by Xanadu Spaces, and particularly the architecture described above solves the problem of "Browser Law" articulated by Ted Nelson in following video:'),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=kV_vYkSmkxk"},"https://www.youtube.com/watch?v=kV_vYkSmkxk")),(0,l.kt)("p",null,"In the next video I showed a short demo of Galaxy Browser with additional features such as layers transitions, command palletes, contextual GPT, and StableDiffusion-bookmarks."),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=8Y7_gvmMyKY"},"https://www.youtube.com/watch?v=8Y7_gvmMyKY")),(0,l.kt)("p",null,"The demo implementation is made possible because of Zsolt work on his Obsidian plugin excalibrain."),(0,l.kt)("p",null,"These might be relevant discussions in Excalidraw:"),(0,l.kt)("p",null,"Layers: ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/excalidraw/excalidraw/issues/6266#issuecomment-1439488787"},"https://github.com/excalidraw/excalidraw/issues/6266#issuecomment-1439488787")),(0,l.kt)("p",null,"Pinned Anchors: ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/excalidraw/excalidraw/issues/3276#issuecomment-1246985074"},"https://github.com/excalidraw/excalidraw/issues/3276#issuecomment-1246985074")),(0,l.kt)("h2",{id:"development-roadmap-"},"Development Roadmap \ud83d\udd29"),(0,l.kt)("h3",{id:"overview-1"},"Overview"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 1 month"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Full-Time Equivalent (FTE):")," 1"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Total Costs:")," 10,000 USD")),(0,l.kt)("h3",{id:"milestone-1--proof-of-concept"},"Milestone 1 \u2014 Proof of Concept"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Estimated duration:")," 1 week"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Costs:")," 2,500 USD"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"First Milestone is PoC implements following scenario:"))),(0,l.kt)("p",null,"User opens Galaxy Web App, connects Polkadot Wallet, draws some elements, clicks button to save layer to IPFS and shares a link.\nAnother user opens the app, choose to load layer from IPFS, inserts the received link, and can see the elements created by first user appear on his canvas."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,l.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,l.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},(0,l.kt)("strong",{parentName:"td"},"0a.")),(0,l.kt)("td",{parentName:"tr",align:null},"License"),(0,l.kt)("td",{parentName:"tr",align:null},"MIT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},(0,l.kt)("strong",{parentName:"td"},"0b.")),(0,l.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,l.kt)("td",{parentName:"tr",align:null},"We will provide both ",(0,l.kt)("strong",{parentName:"td"},"inline documentation")," of the code and a basic ",(0,l.kt)("strong",{parentName:"td"},"tutorial"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},(0,l.kt)("strong",{parentName:"td"},"0c.")),(0,l.kt)("td",{parentName:"tr",align:null},"Testing and Testing Guide"),(0,l.kt)("td",{parentName:"tr",align:null},"Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},(0,l.kt)("strong",{parentName:"td"},"0d.")),(0,l.kt)("td",{parentName:"tr",align:null},"Docker"),(0,l.kt)("td",{parentName:"tr",align:null},"We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"1."),(0,l.kt)("td",{parentName:"tr",align:null},"Frontend: Galaxy Web App"),(0,l.kt)("td",{parentName:"tr",align:null},"A new repository which integrates Excalidraw whiteboard with Polkadot wallet and IPFS storage")))),(0,l.kt)("h3",{id:"milestone-2--minimal-valuable-product"},"Milestone 2 \u2014 Minimal Valuable Product"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Estimated Duration:")," 3 weeks"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Costs:")," 7,500 USD"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Second Milestone is MVP implements following scenario:"))),(0,l.kt)("p",null,'User installs desktop Galaxy App, opens "galaxy://" deep link which is resolved to IPFS, scene is rendered on canvas. User adds other elements on the scene and saves them into a new layer. User closes and reopens the app. He can see both layers with images loaded from database instantly.'),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,l.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,l.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},(0,l.kt)("strong",{parentName:"td"},"0a.")),(0,l.kt)("td",{parentName:"tr",align:null},"License"),(0,l.kt)("td",{parentName:"tr",align:null},"MIT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},(0,l.kt)("strong",{parentName:"td"},"0b.")),(0,l.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,l.kt)("td",{parentName:"tr",align:null},"We will provide both ",(0,l.kt)("strong",{parentName:"td"},"inline documentation")," of the code and a basic ",(0,l.kt)("strong",{parentName:"td"},"tutorial"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},(0,l.kt)("strong",{parentName:"td"},"0c.")),(0,l.kt)("td",{parentName:"tr",align:null},"Testing and Testing Guide"),(0,l.kt)("td",{parentName:"tr",align:null},"Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},(0,l.kt)("strong",{parentName:"td"},"0d.")),(0,l.kt)("td",{parentName:"tr",align:null},"Docker"),(0,l.kt)("td",{parentName:"tr",align:null},"We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"0e."),(0,l.kt)("td",{parentName:"tr",align:null},"Article"),(0,l.kt)("td",{parentName:"tr",align:null},"We will publish an ",(0,l.kt)("strong",{parentName:"td"},"article")," and ",(0,l.kt)("strong",{parentName:"td"},"video")," that explains how to setup and use the Galaxy Browser.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"1."),(0,l.kt)("td",{parentName:"tr",align:null},"Galaxy Browser"),(0,l.kt)("td",{parentName:"tr",align:null},"Complete App to organize, share and explore knowledge")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"2."),(0,l.kt)("td",{parentName:"tr",align:null},"Smart contract"),(0,l.kt)("td",{parentName:"tr",align:null},"It will allow users to claim ownership over layers and resolve Layer Links into IPFS Links")))),(0,l.kt)("h3",{id:"next-milestones"},"Next Milestones"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Transclusion scenario")," might be beyond the scope of testing promised deliverables but still might be implemented within a timeline:"),(0,l.kt)("p",null,"User is loading two layers from different wallets into his scene, then saves the whole scene into a new layer with tranclusion of two non-changed layers.\nCreators of original two layers receives notification of forked version.\nCreator of first layer opens the forked version, only second layer is loaded. It happens because first layer already exist in his database.\nCreator of second layer makes changes in some elements which is reflected in combined layer without any actions from creator of combined layer.\nIt works because during tranclusion, the elements are not copied, and because Layer Link of the original layer remains the same whilst referencing to a different IPFS link."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Microtransactions scenarios")," will be implemented later. Though worth mentioning here as the most exciting future/feature:"),(0,l.kt)("p",null,"Different artists publishing their paintings, each painting as a separate Galaxy Layer.\nAnother user creates a gallery layer with automated script taking the highest ranked paintings into it.\nViewers have to subscribe into the gallery layer to view it.\nThe subscription payments are distributed in between all of the authors included in the gallery, as well with gallery curators.\nEven though viewers can have direct view access to each individual paintings for free, but there is a reason which makes the gallery worth to pay for. That's important to notice, how rearrangement of images on the whiteboard, brings in additional value.\nAlso notice, how curators managing the gallery are being rewarded along with actual painting authors.\nThe same mechanics can be applied to any other type of information: news, expert opinions, financial forecasts, etc.\nContent Explorers, who rearrange and recommend the most relevant pieces of information in the Web, will be financially incentivized along with actual content creators."),(0,l.kt)("h2",{id:"future-plans"},"Future Plans"),(0,l.kt)("p",null,"I believe in opensource community to drive the long term development of the project, and of course can see myself leading it as long as needed."),(0,l.kt)("h2",{id:"referral-program-optional-"},"Referral Program (optional) \ud83d\udcb0"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Referrer:")," github.com/n13"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Payment Address:")," bc1q7axtazzhsdttextp0qspueaagv4pgfm5l9ne64 (BTC)")),(0,l.kt)("h2",{id:"additional-information-"},"Additional Information \u2795"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"How did you hear about the Grants Program?")," personal recommendation"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Previous grants you may have applied for: ",(0,l.kt)("a",{parentName:"li",href:"https://pomelo.io/grants/galaxy"},"https://pomelo.io/grants/galaxy"))))}c.isMDXComponent=!0}}]);