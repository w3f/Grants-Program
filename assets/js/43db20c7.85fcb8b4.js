"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[67766],{2511:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var t=i(74848),s=i(28453);const r={},o="Ocelloids XCM Transfer Monitoring Service",a={id:"applications/ocelloids_xcm_monitoring_service",title:"Ocelloids XCM Transfer Monitoring Service",description:"- Team Name: SO/DA zone",source:"@site/applications/ocelloids_xcm_monitoring_service.md",sourceDirName:"applications",slug:"/applications/ocelloids_xcm_monitoring_service",permalink:"/applications/ocelloids_xcm_monitoring_service",draft:!1,unlisted:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/applications/ocelloids_xcm_monitoring_service.md",tags:[],version:"current",frontMatter:{}},l={},c=[{value:"Project Overview",id:"project-overview",level:2},{value:"Project Details",id:"project-details",level:2},{value:"Notifications",id:"notifications",level:3},{value:"Service Configuration",id:"service-configuration",level:3},{value:"Subscriptions API",id:"subscriptions-api",level:3},{value:"API Methods",id:"api-methods",level:4},{value:"Supported Substrate Clients",id:"supported-substrate-clients",level:3},{value:"Storage",id:"storage",level:3},{value:"Catch-up Mechanism",id:"catch-up-mechanism",level:3},{value:"Management Tools",id:"management-tools",level:3},{value:"Tech Stack",id:"tech-stack",level:3},{value:"Ecosystem Fit",id:"ecosystem-fit",level:2},{value:"Team \ud83d\udc65",id:"team-busts_in_silhouette",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-nut_and_bolt",level:2},{value:"Overview",id:"overview",level:3},{value:"Milestone 1",id:"milestone-1",level:3},{value:"Future Plans",id:"future-plans",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"ocelloids-xcm-transfer-monitoring-service",children:"Ocelloids XCM Transfer Monitoring Service"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Team Name:"})," SO/DA zone"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Payment Address:"})," Fiat 04.05.2023, 16:37"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsxs)(n.strong,{children:[(0,t.jsx)(n.a,{href:"https://github.com/w3f/Grants-Program/tree/master#level_slider-levels",children:"Level"}),":"]})," 2"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"project-overview",children:"Project Overview"}),"\n",(0,t.jsxs)(n.p,{children:["This grant proposal is a follow-up to the Ocelloids Monitoring SDK, previously delivered and available here: ",(0,t.jsx)(n.a,{href:"https://github.com/w3f/Grant-Milestone-Delivery/pull/934",children:"https://github.com/w3f/Grant-Milestone-Delivery/pull/934"})]}),"\n",(0,t.jsx)(n.p,{children:"The objective of this grant is to develop an open-source monitoring service using the Ocelloids SDK. This service will monitor XCM transfers across selected parachains. The primary purpose is to offer service providers integrating with a single chain (Asset Hub as starting point) and monitoring effects on other chains that are connected via HRMP and that use XCM as their message format. The service will support connecting to the configured networks through light clients in order to reduce infrastructure overhead for service providers. Users will have access to a self-hosted HTTP API to subscribe to XCM transfers and manage their subscriptions. A public Docker image will be published to facilitate service deployment."}),"\n",(0,t.jsx)(n.h2,{id:"project-details",children:"Project Details"}),"\n",(0,t.jsx)(n.p,{children:"The service will support bidirectional XCM transfers, namely asset teleports and reserve-based transfers, between selected parachains."}),"\n",(0,t.jsx)(n.p,{children:"The flow of the monitoring will work as follows:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["The service will monitor on the origin chain for the event ",(0,t.jsx)(n.code,{children:"xcmpqueue.xcmpMessageSent"})," associated to the extrinsic sent by accounts of interest. The service will extract the XCM message hash from this event."]}),"\n",(0,t.jsxs)(n.li,{children:["The service will query the storage in ",(0,t.jsx)(n.code,{children:"parachainSystem.hrmpOutboundMessages"})," at the block of the event to get all outbound messages and filter for recipient chain IDs that are supported. Subsequently it will decode the message data to get the set of XCM instructions to filter for combinations of instructions related to asset teleports or reserve-based transfers (i.e. ",(0,t.jsx)(n.code,{children:"ReserveAssetDeposited"}),", ",(0,t.jsx)(n.code,{children:"ReceiveTeleportedAsset"}),", ",(0,t.jsx)(n.code,{children:"WithdrawAsset"}),", and ",(0,t.jsx)(n.code,{children:"DepositAsset"}),"). Then, it will get the ",(0,t.jsx)(n.code,{children:"blake2-256"})," hash of the message data to match it with the message hash obtained in Step 1. The service will store a persistent task to be matched in subsequent steps."]}),"\n",(0,t.jsxs)(n.li,{children:["At the destination chain, the service will monitor for the events ",(0,t.jsx)(n.code,{children:"xcmpqueue.success"})," and ",(0,t.jsx)(n.code,{children:"xcmpqueue.fail"}),". It will match the message hash extracted from these events with the message hash of the origin."]}),"\n",(0,t.jsxs)(n.li,{children:["It will send a notification to the configured webhook to inform of the status of the XCM transfer along with contextual information. See section ",(0,t.jsx)(n.a,{href:"#notifications",children:"Notifications"})," for details."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Before using the service, users will need to configure the supported networks and connection providers. An example configuration can be found in the section ",(0,t.jsx)(n.a,{href:"#service-configuration",children:"Service Configuration"}),". We will support connections to the network using both RPC clients and light clients. Further details on supported Substrate clients can be found in the ",(0,t.jsx)(n.a,{href:"#supported-substrate-clients",children:"Supported Substrate Clients"})," section."]}),"\n",(0,t.jsxs)(n.p,{children:["The service will expose an HTTP API for users to add subscriptions, specifying the channels they want to monitor and the accounts involved. Users can create multiple subscriptions and modify or delete them as needed. Users can also set up webhook endpoints to receive notifications related to their transfers. Detailed information about the API will be provided in the ",(0,t.jsx)(n.a,{href:"#subscriptions-api",children:"Subscriptions API"})," section."]}),"\n",(0,t.jsx)(n.p,{children:"To keep the project manageable, the current scope includes support for Asset Hub, Astar and Acala. In the future, we plan to expand support to include more chains."}),"\n",(0,t.jsx)(n.h3,{id:"notifications",children:"Notifications"}),"\n",(0,t.jsx)(n.p,{children:"As previously mentioned, the monitoring service will accept webhook endpoints for delivering notifications. Initially, notifications will be provided for XCM message reception."}),"\n",(0,t.jsx)(n.p,{children:"The following types of notifications correspond to different scenarios:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"XCM Execution Success"})}),"\n",(0,t.jsx)(n.p,{children:'The XCM message sent from the origin chain was received and executed successfully. In this case, we will send an "XCM Transfer Success" notification, including contextual data such as the XCM message hash, block numbers of the XCM message on the origin and destination chains, sender account, beneficiary account, transferred asset and amount.'}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"XCM Execution Fail"})}),"\n",(0,t.jsx)(n.p,{children:'The XCM message was received at the destination chain but failed to execute correctly. In this case, an "XCM Transfer Fail" notification will be sent, including the XCM error returned in the event and additional contextual data.'}),"\n",(0,t.jsx)(n.h3,{id:"service-configuration",children:"Service Configuration"}),"\n",(0,t.jsx)(n.p,{children:"The service will load a configuration file at startup, similar to the example provided below:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "networks": [\n    {\n      "name": "assethub",\n      "id": 1000,\n      "relay": "polkadot",\n      "provider": {\n        "type": "ws",\n        "url": "wss://asethub-rpc"\n      }\n    },\n    {\n      "name": "parallel",\n      "id": 2012,\n      "relay": "polkadot",\n      "provider": {\n        "type": "smoldot"\n      }\n    }\n  ]\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"Other common service options, such as the listening port for the Subscriptions API, will be configurable using environment variables."}),"\n",(0,t.jsx)(n.h3,{id:"subscriptions-api",children:"Subscriptions API"}),"\n",(0,t.jsx)(n.h4,{id:"api-methods",children:"API Methods"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"POST /api/subscriptions/{id}"})}),"\n",(0,t.jsxs)(n.p,{children:["Creates a new subscription document. To avoid the need for the client to store a server generated identifier, we will require the client to provide a unique subscription identifier. This will also allow the client to use meaningful identifiers e.g. ",(0,t.jsx)(n.code,{children:"1000-2004-cohort1"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Example request body:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "subject": "xcm-hrmp-transfers",\n  "args":{ \n    "origin": {\n      "network": "assethub",\n      "senders": [\n        {\n          "accountId": "5GEWco3EGfM27Z9cAmVnzFnZ6Y7vkqNVvWM4NgQZj4n84Wh6",\n          "type": "AccountId32"\n        }\n      ]\n    },\n    "destination": {\n      "network": "moonbeam"\n    },\n  },\n  "notification": {\n    "type": "webhook",\n    "url": "https://my-callback",\n    "maxRetries": 50\n  }\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"PATCH /api/subscriptions/{id}"})}),"\n",(0,t.jsxs)(n.p,{children:["Accepts a JSON Patch operations array according to ",(0,t.jsx)(n.a,{href:"https://datatracker.ietf.org/doc/html/rfc6902",children:"RFC6902"})]}),"\n",(0,t.jsx)(n.p,{children:"Example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'[\n  {\n    "op": "add",\n    "path": "/args/origin/senders/1",\n    "value": {\n      "accountId": "5HWSEZr3DQXaN4Tk2Y9pYyAPKWeu28P94qeWWgUZ4k2mrbGB",\n      "type": "AccountId32"\n    }\n  }\n]\n'})}),"\n",(0,t.jsx)(n.p,{children:"The resulting patched document will be validated against the subscription document schema."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"DELETE /api/subscriptions/{id}"})}),"\n",(0,t.jsx)(n.p,{children:"Removes a subscription by ID."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"GET /api/subscriptions"})}),"\n",(0,t.jsx)(n.p,{children:"Returns the list of subscriptions."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"GET /api/subscriptions/{id}"})}),"\n",(0,t.jsx)(n.p,{children:"Returns the subscription document under the specified ID."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"PUT /api/subscription/{id}"})}),"\n",(0,t.jsx)(n.p,{children:"Replaces an existing subscription document by ID."}),"\n",(0,t.jsx)(n.h3,{id:"supported-substrate-clients",children:"Supported Substrate Clients"}),"\n",(0,t.jsx)(n.p,{children:"We will support WebSocket RPC endpoints and light clients. However, please note that light client support may be limited due to its experimental nature."}),"\n",(0,t.jsx)(n.p,{children:"During preliminary testing, we identified some limitations:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Using the Smoldot through Subtrate-Connect only support bootnodes configured with secure WebSocket connection. In our exploration, we've seen that only Astar and Acala have bootnodes with secure WebSocket connections. However, it is easy to overcome this limitation since Smoldot supports all the connection types. Reference: ",(0,t.jsx)(n.a,{href:"https://github.com/paritytech/substrate-connect/issues/1543",children:"Github issue"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Some runtimes, such as Moonbeam, currently cannot be compiled by the light client. Reference: ",(0,t.jsx)(n.a,{href:"https://github.com/smol-dot/smoldot/issues/1152",children:"Github issue"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"We will prioritize chains that are light client ready."}),"\n",(0,t.jsx)(n.h3,{id:"storage",children:"Storage"}),"\n",(0,t.jsxs)(n.p,{children:["We will provide persistent storage for operational data, including subscription configurations, processed block number and hashes, XCM messages and notifications. We will use ",(0,t.jsx)(n.a,{href:"https://github.com/Level/level",children:"Level"})," as the database abstraction backed by LevelDB."]}),"\n",(0,t.jsx)(n.h3,{id:"catch-up-mechanism",children:"Catch-up Mechanism"}),"\n",(0,t.jsx)(n.p,{children:"We will implement a mechanism to process missed blocks in case the monitoring service experiences downtime. For each processed block, its hash and block height will be saved in the database. When the service restarts, it will begin following the current finalized blocks. If the parent hash of the finalized block does not match the last-known hash stored in the database, the service will start processing the missing parent hash blocks until all missing ones are processed."}),"\n",(0,t.jsx)(n.h3,{id:"management-tools",children:"Management Tools"}),"\n",(0,t.jsx)(n.p,{children:"Since notifications and XCM message matching tasks are stored in the database and retried until success, we will provide a method to clear pending states. This is crucial to prevent indefinite retries of pending tasks. For example, if a webhook endpoint is changed while a notification is pending, it may never succeed."}),"\n",(0,t.jsx)(n.p,{children:"We will supply a script enabling administrators to inspect and remove XCM message matching and notification tasks from the database."}),"\n",(0,t.jsx)(n.h3,{id:"tech-stack",children:"Tech Stack"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Typescript"}),"\n",(0,t.jsx)(n.li,{children:"Node.js"}),"\n",(0,t.jsx)(n.li,{children:"Polkadot.js API"}),"\n",(0,t.jsx)(n.li,{children:"Smoldot"}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/fastify/fastify",children:"Fastify"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/Level/level",children:"Level"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"ecosystem-fit",children:"Ecosystem Fit"}),"\n",(0,t.jsx)(n.p,{children:"This project aligns well with the growing demand for robust tooling and infrastructure necessary to fulfill Asset Hub's vision of becoming the main place for asset management within the Polkadot ecosystem. To expand its user base, Asset Hub must provide a solution that abstracts away the technical intricacies of cross-chain transfers and enhances the user experience for managing assets across the expansive Polkadot ecosystem."}),"\n",(0,t.jsxs)(n.p,{children:["The Integrations Team at Parity is already taking initial steps toward achieving this goal by working on the Assets Transfer API and the NoS launch script. These efforts target custodians, exchanges, and institutions, simplifying integration with Asset Hub and the construction of XCM messages. The importance of these tools, along with the overarching vision for Asset Hub, is comprehensively outlined in Iker's ",(0,t.jsx)(n.a,{href:"https://forum.polkadot.network/t/new-tooling-and-infrastructure-to-facilitate-the-statemint-roadmap/1997",children:"Polkadot forum post"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:['The addition of the Ocelloids XCM monitoring service will enhance this toolkit, providing institutions with a straightforward method to track their cross-chain transfers. This corresponds to step 4 of the "Withdrawals User Journey Example" in Iker\'s post, as detailed ',(0,t.jsx)(n.a,{href:"https://forum.polkadot.network/t/new-tooling-and-infrastructure-to-facilitate-the-statemint-roadmap/1997#withdrawals-user-journey-example-5",children:"here"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"With the inclusion of support for light clients in the service, institutions will experience a substantial reduction in infrastructure overhead since they will no longer need to run parachain nodes to monitor their transfers."}),"\n",(0,t.jsxs)(n.p,{children:["Furthermore, the demand for a generalized monitoring solution with XCM support has been highlighted in discussions within the Polkadot community, as illustrated in this Polkadot forum post: ",(0,t.jsx)(n.a,{href:"https://forum.polkadot.network/t/generalized-multichain-monitoring-solution/1297",children:"Generalized multichain monitoring solution"}),"."]}),"\n",(0,t.jsxs)(n.h2,{id:"team-busts_in_silhouette",children:["Team ","\ud83d\udc65"]}),"\n",(0,t.jsx)(n.h3,{id:"team-members",children:"Team members"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Marc Forn\xf3s"}),"\n",(0,t.jsx)(n.li,{children:"Xueying Wang"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"contact",children:"Contact"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Contact Name:"})," Marc Forn\xf3s"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Contact Email:"})," ",(0,t.jsx)(n.a,{href:"mailto:frozen.pomelo@gmail.com",children:"frozen.pomelo@gmail.com"})]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"legal-structure",children:"Legal Structure"}),"\n",(0,t.jsx)(n.p,{children:"N/A"}),"\n",(0,t.jsx)(n.h3,{id:"teams-experience",children:"Team's experience"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Marc Forn\xf3s"})," has been designing and implementing software systems for 20 years. He is an expert in the area of distributed systems and data-intensive applications. His experience ranges from warehouse automation with radio-frequency terminals, to being the technical director of an airline post-sale revenue optimization software-as-a-service platform, generating millions in incremental revenue during eight years of operation. In the recent past, he was in charge of evolving a commercial Ethereum block explorer and bootstrapping an explorer for Substrate-based networks focused on the contracts pallet and ink! smart contracts."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Xueying Wang"})," pivoted to software development after completing an MSc. in Aerospace Engineering and has been in the industry for the past eight years. During this time, she pioneered conversational AI assistants for airlines, counting more than 20 assistants in production covering ten languages for customer service, FAQ and in-chat purchases. She also built a scalable publish-subscribe system to trigger actions on flight feed events for the automated agents. She participated in designing a composable Solid POD/RDF data browser and bootstrapping an explorer for Substrate-based networks focused on the contracts pallet and ink! smart contracts."]}),"\n",(0,t.jsx)(n.h3,{id:"team-code-repos",children:"Team Code Repos"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/sodazone",children:"https://github.com/sodazone"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/mfornos",children:"https://github.com/mfornos"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/XY-Wang",children:"https://github.com/XY-Wang"})}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/frozenpomelo",children:"https://github.com/frozenpomelo"})," (shared account)"]}),"\n"]}),"\n",(0,t.jsxs)(n.h2,{id:"development-roadmap-nut_and_bolt",children:["Development Roadmap ","\ud83d\udd29"]}),"\n",(0,t.jsx)(n.h3,{id:"overview",children:"Overview"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Total Estimated Duration:"})," 2 months"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Full-Time Equivalent (FTE):"})," 2"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Total Costs:"})," 28,000 EUR"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"milestone-1",children:"Milestone 1"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Estimated duration:"})," 2 months"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"FTE:"})," 2"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Costs:"})," 28,000 EUR"]}),"\n"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{style:{textAlign:"right"},children:"Number"}),(0,t.jsx)(n.th,{children:"Deliverable"}),(0,t.jsx)(n.th,{children:"Specification"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"right"},children:(0,t.jsx)(n.strong,{children:"0a."})}),(0,t.jsx)(n.td,{children:"License"}),(0,t.jsx)(n.td,{children:"Apache 2.0"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"right"},children:(0,t.jsx)(n.strong,{children:"0b."})}),(0,t.jsx)(n.td,{children:"Documentation"}),(0,t.jsx)(n.td,{children:"We will provide both inline documentation of the code and a basic guide that explains how to set up and run the monitoring service."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"right"},children:(0,t.jsx)(n.strong,{children:"0c."})}),(0,t.jsx)(n.td,{children:"Testing and Testing Guide"}),(0,t.jsx)(n.td,{children:"Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"right"},children:(0,t.jsx)(n.strong,{children:"0d."})}),(0,t.jsx)(n.td,{children:"Docker"}),(0,t.jsx)(n.td,{children:"We will provide a Dockerfile to ease the deployment and execution of the service. A Docker image of the service will be published in Docker Hub and Github Container Repository."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"right"},children:"1."}),(0,t.jsx)(n.td,{children:"XCM Monitoring Service"}),(0,t.jsxs)(n.td,{children:["The XCM monitoring service that supports asset teleports and reserve-based transfers between the following parachains: Asset Hub, Astar and Acala. The service will feature what was described in ",(0,t.jsx)(n.a,{href:"#project-details",children:"Project Details"}),"."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"right"},children:"2."}),(0,t.jsx)(n.td,{children:"Management Tools"}),(0,t.jsxs)(n.td,{children:["Administrator scripts to inspect and delete pending XCM messages matching and notification tasks, as described in ",(0,t.jsx)(n.a,{href:"#management-tools",children:"Management Tools"}),"."]})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"future-plans",children:"Future Plans"}),"\n",(0,t.jsx)(n.p,{children:"For the XCM monitoring service, we have plans to expand its capabilities and reach which include:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Support for More Networks:"})," We plan to broaden the range of networks supported by the XCM monitoring service, enabling a more extensive and inclusive monitoring ecosystem."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Support for More XCM Protocols:"})," We will add support for XCMP when ready."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Enhanced Notifications:"})," Depending on user requirements and community feedback, we will extend our notification capabilities. This may involve providing notifications for asset transfers' initiation, such as when the block containing the XCM transfer is finalized on the origin chain. We are also considering notifications for when XCM messages sent through HRMP are processed on intermediate chains."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Our long-term vision for Ocelloids extends beyond just monitoring XCM transfers. We aim to create a hassle-free, comprehensive monitoring portal for Substrate networks and smart contracts within the ecosystem. This portal will offer a set of advanced features, including:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Ready-to-use monitoring logic, i.e. monitoring programs, for the entire ecosystem. The XCM monitoring logic built through this grant could be one such monitoring program available."}),"\n",(0,t.jsx)(n.li,{children:"Marketplace for monitoring programs where users can subscribe to the programs that correspond to their needs."}),"\n",(0,t.jsx)(n.li,{children:"Advanced capabilities: anomaly and attack detection, machine learning, and forecasting."}),"\n",(0,t.jsx)(n.li,{children:"Real-time actionable insights on network, contract performance, compliance, and security."}),"\n",(0,t.jsx)(n.li,{children:"Multiple data centres for global, high-availability monitoring."}),"\n",(0,t.jsx)(n.li,{children:"Seamless integration with existing systems like Prometheus and SIEM."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"In summary, our future plans encompass not only expanding the technical capabilities of the XCM monitoring service but also positioning as a central hub for monitoring and managing Substrate networks and smart contracts within the broader multi-chain ecosystem."})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>a});var t=i(96540);const s={},r=t.createContext(s);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);