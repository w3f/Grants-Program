"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[2833],{90882:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var n=a(87462),i=(a(67294),a(3905));a(95657);const l={},r="SubVT Telegram Bot for Kusama and Polkadot",o={unversionedId:"applications/subvt-telegram-bot",id:"applications/subvt-telegram-bot",title:"SubVT Telegram Bot for Kusama and Polkadot",description:"- Team Name: Helikon Labs",source:"@site/applications/subvt-telegram-bot.md",sourceDirName:"applications",slug:"/applications/subvt-telegram-bot",permalink:"/Grants-Program/applications/subvt-telegram-bot",draft:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/applications/subvt-telegram-bot.md",tags:[],version:"current",frontMatter:{}},s={},m=[{value:"\ud83d\udce3 <em>10th of May, 2022 Development Update</em>",id:"-10th-of-may-2022-development-update",level:4},{value:"Project Overview \ud83d\udcc4",id:"project-overview-",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Helikon Labs",id:"helikon-labs",level:4},{value:"Team Members",id:"team-members-1",level:4},{value:"Team LinkedIn Profiles (if available)",id:"team-linkedin-profiles-if-available",level:3},{value:"Development Status \ud83d\udcd6",id:"development-status-",level:2},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 \u2014 Migration to the SubVT Services, Extended Support and Initial Fixes",id:"milestone-1--migration-to-the-subvt-services-extended-support-and-initial-fixes",level:3},{value:"Milestone 2 \u2014 New features",id:"milestone-2--new-features",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information \u2795",id:"additional-information-",level:2}],d={toc:m},p="wrapper";function u(t){let{components:e,...a}=t;return(0,i.kt)(p,(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"subvt-telegram-bot-for-kusama-and-polkadot"},"SubVT Telegram Bot for Kusama and Polkadot"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Team Name:")," Helikon Labs"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Payment Address:")," ",(0,i.kt)("inlineCode",{parentName:"li"},"bc1qxjy7sw0ffvpq86t6hj3mmqhnfz2hxt6pk7zdz0")," (BTC)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Level:")," \ud83d\udc23 1")),(0,i.kt)("hr",null),(0,i.kt)("h4",{id:"-10th-of-may-2022-development-update"},"\ud83d\udce3 ",(0,i.kt)("em",{parentName:"h4"},"10th of May, 2022 Development Update")),(0,i.kt)("p",null,"Despite the initial plan to upgrade the existing 1KV Telegram Bot, SubVT Telegram Bot has been rewritten from scratch in Rust and is fully integrated with the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/helikon-labs/subvt-backend"},"SubVT Backend"),". You may find the Telegram bot ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/helikon-labs/subvt-backend/tree/development/subvt-telegram-bot"},"crate")," in the SubVT Backend repository."),(0,i.kt)("p",null,"Release and submission date for the bot including all milestones is the ",(0,i.kt)("strong",{parentName:"p"},"19th of May 2022"),". It's going to be an overdelivery with the following additional features on top of the complete initial promises:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Extra commands:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/referenda"),": Lists the open on-chain referenda for the network, and the user can click on one of them to view the contextual information fetched from Polkassembly, and the information also shows the votes of the validators on the chat for the selected referendum."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/nfts"),": Displays a paged list of the NFTs on the stash account of a selected validator. User can then select an NFT and get redirected to its web URL. This command uses the ",(0,i.kt)("a",{parentName:"li",href:"https://sub.id"},"sub.id")," API."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/networkstatus"),": This command was included under Future Plans in the initial proposal. It is implemented and is going to be available on the release."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/contact"),": Lets the user to post bug reports and feature requests directly from the bot to the dev team."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/summary"),": Summary information of all the validators on the chat. Useful to get an overall view of the validators such as which ones are active, which ones are active next session, their nominator count and active/inactive nomination amounts etc."))),(0,i.kt)("li",{parentName:"ul"},"Extra notifications when:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"A validator is going to be active/inactive next session (early notification for possible preparation or checks)."),(0,i.kt)("li",{parentName:"ul"},"A validator has outstanding payouts."),(0,i.kt)("li",{parentName:"ul"},"A validator votes for a referendum."),(0,i.kt)("li",{parentName:"ul"},"There's a new referendum open for vote."),(0,i.kt)("li",{parentName:"ul"},"Referendum passed / not passed / cancelled."),(0,i.kt)("li",{parentName:"ul"},"There's a new democracy proposal."),(0,i.kt)("li",{parentName:"ul"},"A validator has delegated or undelegated its votes.")))),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"project-overview-"},"Project Overview \ud83d\udcc4"),(0,i.kt)("h3",{id:"overview"},"Overview"),(0,i.kt)("p",null,"SubVT Telegram Bot is an upgrade for the existing Helikon ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/helikon-labs/polkadot-kusama-1kv-telegram-bot"},"Polkadot/Kusama 1KV Telegram Bot")," to support all validators on Kusama and Polkadot with increased functionality and performance."),(0,i.kt)("p",null,"Future upgrades aim for adding support for other proof-of-stake (PoS) Substrate-based networks such as HydraDX, Darwinia (Crab), Edgeware and more, and Telemetry data access to support more real-time node data and notifications."),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/helikon-labs/polkadot-kusama-1kv-telegram-bot"},"1KV Bot")," currently serves 221 out of 359 valid nodes on Kusama and 90 out of 129 valid nodes on Polkadot. Relatively high adoption rates (61% on Kusama and 69% on Polkadot) with very little announcement have resulted in our interest in extending the bot's support to all Kusama and Polkadot validators, and other Substrate-based PoS networks in the future."),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{width:"750",src:"https://raw.githubusercontent.com/helikon-labs/Grants-Program/subvt-telegram-bot/applications/subvt-telegram-bot-files/01-overview.jpg"})),(0,i.kt)("p",null,"This upgrade consists of migrating the bot to use the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/helikon-labs/subvt-backend"},"backend services")," and storage of SubVT (Substrate Validator Toolkit), which is an under-development native mobile application project for iOS and Android phones, tablets and wearables, ",(0,i.kt)("a",{parentName:"p",href:"https://kusama.polkassembly.io/treasury/99"},"supported by")," the Kusama Treasury."),(0,i.kt)("h3",{id:"project-details"},"Project Details"),(0,i.kt)("p",null,"The 1KV Bot currently has a number of issues such as:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"No support for validators outside the 1KV. It's also not possible for it to support networks other than Kusama and Polkadot in its current state."),(0,i.kt)("li",{parentName:"ul"},"New nomination notification doesn't work for nested calls such as multi-sigs, batch calls and proxied calls. It only works for top-level ",(0,i.kt)("inlineCode",{parentName:"li"},"nominate")," extrinsics."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/stakinginfo")," command displays only an overview of the nominations backing the validator. The command response is slow on Kusama and even slower on Polkadot since it fetches and indexes the nomination data for the validator after every command call."),(0,i.kt)("li",{parentName:"ul"},"No account age information."),(0,i.kt)("li",{parentName:"ul"},"No chart for 1KV rating history."),(0,i.kt)("li",{parentName:"ul"},"No 1KV score information."),(0,i.kt)("li",{parentName:"ul"},"Missing notifications for:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Lost nominations."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"validate")," extrinsic."),(0,i.kt)("li",{parentName:"ul"},"On-chain identity change."),(0,i.kt)("li",{parentName:"ul"},"Payouts.")))),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{width:"430",src:"https://raw.githubusercontent.com/helikon-labs/Grants-Program/subvt-telegram-bot/applications/subvt-telegram-bot-files/02-details_00.jpg"}),(0,i.kt)("br",null),(0,i.kt)("i",null,"Current state of the 1KV Bot")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/helikon-labs/subvt-backend"},"SubVT backend"),", under development for the SubVT mobile applications, is near its first-phase completion and can provide very fast data access required by the current 1KV Bot functionality and more. Below is a diagram of the proposed upgrade for the 1KV bot to utilize the SubVT backend services."),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{width:"850",src:"https://raw.githubusercontent.com/helikon-labs/Grants-Program/subvt-telegram-bot/applications/subvt-telegram-bot-files/02-details_01.jpg"}),(0,i.kt)("br",null),(0,i.kt)("i",null,"Proposed upgrade")),(0,i.kt)("p",null,"SubVT backend is being developed in Rust. Proposed upgrade for the bot is going to improve and re-structure the current Javascript ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/helikon-labs/polkadot-kusama-1kv-telegram-bot"},"codebase")," to have the following modules:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Telegram Bot API communication component."),(0,i.kt)("li",{parentName:"ol"},"Information services component, which serves the commands sent from the user device."),(0,i.kt)("li",{parentName:"ol"},"Notifier component, which delivers notifications as Telegram messages to the user's phone through the Telegram Bot API.")),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{width:"350",src:"https://raw.githubusercontent.com/helikon-labs/Grants-Program/subvt-telegram-bot/applications/subvt-telegram-bot-files/02-details_02.jpg"}),(0,i.kt)("br",null),(0,i.kt)("i",null,"SubVT Telegram Bot components")),(0,i.kt)("p",null,"Below is a list of commands that the bot will have after the upgrade."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Command"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"/validator-info")),(0,i.kt)("td",{parentName:"tr",align:null},"Complete chain data and (optional) 1KV data about the validator.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"/nominations")),(0,i.kt)("td",{parentName:"tr",align:null},"An overview of the active and inactive nomination data. Number of nominators and total amounts.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"/nomination-details")),(0,i.kt)("td",{parentName:"tr",align:null},"Breakdown of all active and inactive nominations. Includes nominator addresses and identities and number of other nominees per each nomination.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"/rewards")),(0,i.kt)("td",{parentName:"tr",align:null},"A chart that displays the total rewards earned by the validator per month and the total amount earned.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"/payouts")),(0,i.kt)("td",{parentName:"tr",align:null},"A chart that displays the total rewards paid out by the validator to nominators per month and the total paid-out amount.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"/settings")),(0,i.kt)("td",{parentName:"tr",align:null},"Notification settings.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"/add")),(0,i.kt)("td",{parentName:"tr",align:null},"Add a new validator to the chat.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"/remove")),(0,i.kt)("td",{parentName:"tr",align:null},"Remove an existing validator from the chat.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"/help")),(0,i.kt)("td",{parentName:"tr",align:null},"A list of commands and their descriptions.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"/about")),(0,i.kt)("td",{parentName:"tr",align:null},"Development, codebase and contribution details.")))),(0,i.kt)("p",null,"And below are the list of notifications after the upgrade:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"New notifications:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"New nominations in batch, multi-sig and proxy calls."),(0,i.kt)("li",{parentName:"ul"},"Nomination lost."),(0,i.kt)("li",{parentName:"ul"},"New ",(0,i.kt)("inlineCode",{parentName:"li"},"validate")," extrinsic."),(0,i.kt)("li",{parentName:"ul"},"Identity or parent identity changed."),(0,i.kt)("li",{parentName:"ul"},"Payout call for an era, or multiple eras in a batch call."))),(0,i.kt)("li",{parentName:"ul"},"Existing notifications:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Active set inclusion and exclusion."),(0,i.kt)("li",{parentName:"ul"},"Block(s) authored."),(0,i.kt)("li",{parentName:"ul"},"Validator chilled."),(0,i.kt)("li",{parentName:"ul"},"Offline offence committed."),(0,i.kt)("li",{parentName:"ul"},"Commission changed."),(0,i.kt)("li",{parentName:"ul"},"Controller changed."),(0,i.kt)("li",{parentName:"ul"},"1KV-related.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Validity changed."),(0,i.kt)("li",{parentName:"ul"},"Rank changed."),(0,i.kt)("li",{parentName:"ul"},"Binary version changed.")))))),(0,i.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,i.kt)("p",null,"There are currently two more bots for the Polkadot and Kusama validators, both production-level and robust. One is by ",(0,i.kt)("a",{parentName:"p",href:"https://www.cryptolab.network/"},"CryptoLab"),", and the other by ",(0,i.kt)("a",{parentName:"p",href:"https://ryabina.io/"},"Ryabina"),", both with Kusama and Polkadot versions."),(0,i.kt)("p",null,"Ryabina bot is a more generalized one that supports configurable alerts for all extrinsics and events, yet it doesn't provide more validator-specific functionality such as in-chat reward reports, and the configuration is not very user-friendly due to the generalized nature of the solution. It also doesn't support 1KV data."),(0,i.kt)("p",null,"CryptoLab bot is a validator bot with the strength of Telemetry support, yet it's also missing the in-chat reports and 1KV data."),(0,i.kt)("h2",{id:"team-"},"Team \ud83d\udc65"),(0,i.kt)("h3",{id:"team-members"},"Team members"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Kutsal Kaan Bilgin")),(0,i.kt)("h3",{id:"contact"},"Contact"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Contact Name:")," Kutsal Kaan Bilgin"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Contact Email:")," ",(0,i.kt)("a",{parentName:"li",href:"mailto:kutsal@helikon.tech"},"kutsal@helikon.tech")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Website:")," ",(0,i.kt)("a",{parentName:"li",href:"https://helikon.tech"},"helikon.tech")," (Under Construction)")),(0,i.kt)("h3",{id:"legal-structure"},"Legal Structure"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Registered Address:")," Omer Avni Mah. Balcik Sok. 4/4 34427 Beyoglu Istanbul Turkey"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Registered Legal Entity:")," Helikon Teknoloji ve Medya Tic. Ltd. Sti.")),(0,i.kt)("h3",{id:"teams-experience"},"Team's experience"),(0,i.kt)("p",null,"I am a software developer with a bachelor's degree in Computer Science and 20 years of experience in development and leading. After a series of positions mostly in enterprise software development settings, I focused on native mobile development for iOS and Android between 2012 and 2019, in which year I was introduced to the world of blockchain and cryptocurrencies when I got hired by ",(0,i.kt)("a",{parentName:"p",href:"https://tari.com"},"Tari"),". For a duration of 1 year and 8 months I led the development of ",(0,i.kt)("a",{parentName:"p",href:"https://aurora.tari.com"},"Aurora"),", the Tari cryptocurrency wallet for Android and iOS. The app got received very well by the Tari community thanks to its lean, eye-pleasing design and simple UX. I learned a lot at Tari about how blockchain systems work and the cryptocurrency ecosystem in general. Working with a product management team that\u2019s super-focused on usability and simplification gave me a perspective on the value of good UX and UI in a field that\u2019s notorious for its technical difficulties for the not-so-technical users."),(0,i.kt)("p",null,"After my time at Tari I got interested in Polkadot and Kusama ecosystems and started running a Kusama validator enrolled in 1KV. I developed the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/helikon-labs/polkadot-kusama-1kv-telegram-bot"},"Kusama 1KV Bot")," just to scratch my own itch, then ported it to Polkadot. After experimenting a bit with Substrate storage and RPC interface, I developed the idea of SubVT and prepared a treasury spending proposal for the project, which got accepted by the Kusama council. I have been working with ",(0,i.kt)("a",{parentName:"p",href:"https://www.klad.design/"},"Klad"),", supervising the UX and UI design for the project, which is now complete. I've also been working on the SubVT backend, which is also near completion, bringing SubVT to its second stage: Android and iOS applications development."),(0,i.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,i.kt)("h4",{id:"helikon-labs"},"Helikon Labs"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/helikon-labs"},"github.com/helikon-labs")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/helikon-labs/polkadot-kusama-1kv-telegram-bot"},"github.com/helikon-labs/polkadot-kusama-1kv-telegram-bot")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/helikon-labs/subvt"},"github.com/helikon-labs/subvt")," (in progress)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/helikon-labs/subvt-backend"},"github.com/helikon-labs/subvt-backend")," (in progress)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/helikon-labs/subvt-landing-page"},"github.com/helikon-labs/subvt-landing-page"))),(0,i.kt)("h4",{id:"team-members-1"},"Team Members"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/kukabi"},"github.com/kukabi"))),(0,i.kt)("h3",{id:"team-linkedin-profiles-if-available"},"Team LinkedIn Profiles (if available)"),(0,i.kt)("p",null,"N/A"),(0,i.kt)("h2",{id:"development-status-"},"Development Status \ud83d\udcd6"),(0,i.kt)("p",null,"The original ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/helikon-labs/polkadot-kusama-1kv-telegram-bot"},"1KV Bot")," for Kusama and Polkadot has been running successfully for nearly 9 months. ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/helikon-labs/subvt-backend"},"SubVT backend")," is near completion with the deadline of the 13th of December with complete tests and documentation."),(0,i.kt)("h2",{id:"development-roadmap-"},"Development Roadmap \ud83d\udd29"),(0,i.kt)("h3",{id:"overview-1"},"Overview"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 3 months"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Full-Time Equivalent (FTE):"),"  0.33"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Total Costs:")," 9,600 USD")),(0,i.kt)("h3",{id:"milestone-1--migration-to-the-subvt-services-extended-support-and-initial-fixes"},"Milestone 1 \u2014 Migration to the SubVT Services, Extended Support and Initial Fixes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Estimated duration:")," 1.5 months"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"FTE:"),"  0.33"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Costs:")," 4,800 USD")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,i.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,i.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0a."),(0,i.kt)("td",{parentName:"tr",align:null},"License"),(0,i.kt)("td",{parentName:"tr",align:null},"GPLv3")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0b."),(0,i.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,i.kt)("td",{parentName:"tr",align:null},"Milestone progress report and inline code documentation. GitHub README that explains how to run an instance.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0c."),(0,i.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,i.kt)("td",{parentName:"tr",align:null},"Separate markdown in the GitHub repository that documents the complete test cases and how to run them.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0d."),(0,i.kt)("td",{parentName:"tr",align:null},"Docker"),(0,i.kt)("td",{parentName:"tr",align:null},"A Dockerfile that can be used to test all the functionality delivered with this milestone.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0e."),(0,i.kt)("td",{parentName:"tr",align:null},"Article"),(0,i.kt)("td",{parentName:"tr",align:null},"An article that documents the development process and the outcome.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"1."),(0,i.kt)("td",{parentName:"tr",align:null},"SubVT Services Migration"),(0,i.kt)("td",{parentName:"tr",align:null},"Migrate the bot to use the SubVT backend services.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"2."),(0,i.kt)("td",{parentName:"tr",align:null},"Support for All Validators"),(0,i.kt)("td",{parentName:"tr",align:null},"Extend the bot to support not just 1KV validators but all Kusama and Polkadot validators.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"3."),(0,i.kt)("td",{parentName:"tr",align:null},"Notification Fixes"),(0,i.kt)("td",{parentName:"tr",align:null},"Fix the notification logic so that the bot supports ",(0,i.kt)("inlineCode",{parentName:"td"},"nominate")," notifications for multi-sig, batch and proxy calls.")))),(0,i.kt)("h3",{id:"milestone-2--new-features"},"Milestone 2 \u2014 New features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Estimated Duration:")," 1.5 months"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"FTE:"),"  0.33"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Costs:")," 4,800 USD")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,i.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,i.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0a."),(0,i.kt)("td",{parentName:"tr",align:null},"License"),(0,i.kt)("td",{parentName:"tr",align:null},"GPLv3")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0b."),(0,i.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,i.kt)("td",{parentName:"tr",align:null},"Milestone progress report and inline code documentation. GitHub README that explains how to run an instance.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0c."),(0,i.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,i.kt)("td",{parentName:"tr",align:null},"Separate markdown in the GitHub repository that documents the complete test cases and how to run them.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0d."),(0,i.kt)("td",{parentName:"tr",align:null},"Docker"),(0,i.kt)("td",{parentName:"tr",align:null},"A Dockerfile that can be used to test all the functionality delivered with this milestone.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0e."),(0,i.kt)("td",{parentName:"tr",align:null},"Article"),(0,i.kt)("td",{parentName:"tr",align:null},"An article that documents the development process and the outcome.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"1."),(0,i.kt)("td",{parentName:"tr",align:null},"Improve Validator Info Message"),(0,i.kt)("td",{parentName:"tr",align:null},"Include account age and optional 1KV score data in the validator info message.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"2."),(0,i.kt)("td",{parentName:"tr",align:null},"Implement New Notifications"),(0,i.kt)("td",{parentName:"tr",align:null},"Extend the bot with new notifications for lost nominations, on-chain identity change, ",(0,i.kt)("inlineCode",{parentName:"td"},"validate")," extrinsic and payouts calls for a single era or multiple eras in a batch call.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"3."),(0,i.kt)("td",{parentName:"tr",align:null},"Implement New Commands"),(0,i.kt)("td",{parentName:"tr",align:null},"Implement the new ",(0,i.kt)("inlineCode",{parentName:"td"},"/nomination-details")," and ",(0,i.kt)("inlineCode",{parentName:"td"},"/payouts")," commands.")))),(0,i.kt)("h2",{id:"future-plans"},"Future Plans"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Telemetry integration.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Notifications for peer count and bandwidth thresholds, and possibly others related to the Telemetry data"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/network-info")," command.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Displays a summary of the network's status and overall staking data."))),(0,i.kt)("li",{parentName:"ul"},"Support for additional Substrate-based PoS networks."),(0,i.kt)("li",{parentName:"ul"},"Score spider chart for 1KV members.")),(0,i.kt)("h2",{id:"additional-information-"},"Additional Information \u2795"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"How did you hear about the Grants Program?")),(0,i.kt)("p",null,"I read about the program when I was initially researching into the Polkadot ecosystem in early 2021."),(0,i.kt)("p",null,"In October 2021 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mmagician"},"Marcin G\xf3rny")," kindly offered support for the extension of the 1KV Bot to all Kusama and Polkadot validators in an ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/helikon-labs/polkadot-kusama-1kv-telegram-bot/issues/9"},"issue he posted")," to the 1KV Bot repository."))}u.isMDXComponent=!0}}]);