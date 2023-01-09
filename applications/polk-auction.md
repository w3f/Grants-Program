# Polk-Auction Website

* **Team Name:** Cyril Carlier
* **Payment Address:** BTC : 3HDftJCXDAt8Qbk2uSj4ty2xYvdudHsMru

## Project Overview :page_facing_up:

### Overview

The PolkAuction project is a software project aiming at providing Polkadot/Kusama end-users an easy, accessible and understandable overview (in the form of a UI website) of the current auction, the current crowdloans and the running parachains for both the Polkadot and the Kusama chains. The goal is to also provide details of the running parachains and links to official resources of the parachains.

The polkadot-js app already has an overview of auction, parachains and crowdloans, but we'd like to add more functionalities and make it more accessible (easier UI) for users outside of polkadot-js (exchange platform users for example, casual users, etc.).

### Project Details

#### Architecture

![](https://i.imgur.com/R8txfsk.png)

The two main components under development -and thus in the scope of this project- are the Polk-auction-core, an HTTP Rest API in Kotlin, and the Polk-auction-ui, a user-interface application in Typescript/React. The nodes and the sidecar API are only to be configured and deployed - and updated over-time.

The polk-auction core API is an aggregator that expose only relevant information about the chain and add information when necessary from off-chain sources (example, a parachain detail would be its website address).

Ideally, we want the polk-auction core to use our own nodes (see architecture), but we will also provide a configuration where it is possible to use public end-points such as Web3Foundation's endpoint (wss://kusama-rpc.polkadot.io/) for convenience.

#### Mock-up of the website (Polk-acution UI)

Disclaimer : I've always prefer paper UI design (mock-up) for a first version of an UI, so here it is:

(Updated with screenshot of the first UI drafts - see github link below)

General dashboard :
![](https://i.imgur.com/CHSeJSQ.jpg)

On relay chain changed :
![](https://i.imgur.com/8Xeq6rL.jpg)

There is a header with the chains supported. When a chain is selected, colors change to match Chain's colors. 3 inner pages are available, current auction, current crowdloan and parachains.

Current auction page :
![](https://i.imgur.com/x1PD856.jpg)

The auction page provides details about the ongoing auction along with a list of bidders. The user can click on any displayed parachain to access the parachain details page.

Current crowdloan page :
![](https://i.imgur.com/ezSWEdz.jpg)

The crowdloan page display the ongoing crowdlending campaigns as a list. The user can click on any displayed parachain to access the parachain details page.

Current parachains page :
![](https://i.imgur.com/0bdQ0xH.jpg)

The parachains page display the running parachains of the selected chain as a list. This page gathers the on-chain details of the selected parachain with some extra information, such as a link the the official website, a link to the github repository of the blockchain, etc.

Details about the UI (that I cannot render on paper) :

* Color-code will follow Kusama and Polkadot colors (#000000 an #e6007a respectively) for the background of the header (changes when the selected chain changes).
* Look and feel of the overall UI will be similar to Telemetry and polkadot-js app to make unity with the existing applications.
* The UI will evolve with Polkadot new branding.

#### API overview (Polk-auction core)

*End-points*

* GET /current-auction/{chain}

Returns an Auction object (json) containing information about the current state of the auction and the list of parachain candidates of the chain {chain}.

* GET /current-crowdloan/{chain}

Returns a Crowdloan object (json) containing information about the current state of the crowdloan and the list of parachains of the chain {chain}.

* GET /parachains/{chain}

Returns a list of the existing Parachain objects (json) of the chain {chain}.

* GET /parachains/{chain}/{paraId}

Returns a Parachain object (json) of the chain {chain} with details.

Field details :

| Field | Type | Description |
| -----: | ----------- | ------------- |
| chain | string | Name of the relay-chain (values supported are [Kusama, Polkadot])  |
| paraId | integer | Id of the parachain within the {chain}  |

*Other*

While the sidecar API is convenient to use, so information are lacking in order to provide enough information to the UI - for example the duration of a lease period, meta-data about the chain, etc. Usually more detailed or specific information about the state of the chain are lacking in the sidecar-api. That is why it is planned to also communicate directly with a node through a websocket the same way the Polkadot-api would. The existing solution Polkaj has been quickly reviewed, that API could work well. But as we also need a simpler solution and also a bit more easy to use, we will develop our own WS client (in Kotlin) along this project. We will keep things simple and only develop what we do need. It is planned to continue to develop that WS client to provide a complete set of functionalities to access a substrate node. However that last step is not part of this project and will be an independent project later (as well as a new application maybe).

#### Polk-action-core technologies

* Kotlin
* Ktor

Why Kotlin with ktor ? Ktor is a lightweight framework for creating HTTP Rest API, easy to use, easy to understand and to maintain.

#### Polk-auction-ui technologies

* Typescript
* React

#### What Polk-auction is *not* ?

Polk-auction is not an "interactive" website, rather the users can read, consume, inform themselves with the content of the UI, but for now, it is *not* intended to integrate functionalities such as:

* Using the website as a way to participate in crowdloans
* Using the website to participate to the auction

For this project, only Kusama and Polkadot blockchain will be added to the UI. Latter the website may contains Rococo and Westend chains, but the users of these are not the target audience.

The API used (polk-auction core) is not meant to be public (only the UI would be able to query it). This might change if needed, but as the polk-auction core code is open-source, making the API public has little sense.

### Ecosystem Fit

The project fit into the eco-system as a UI app for end-users to easily access the on-chain's parachain related information. As mentioned, the target audience is the users (individuals, associations, companies, etc.) with DOT and KSM that have a technological, financial, etc. interest in the parachains, more specifically in the auction and the crowdloan.

I believe there is a need to have an easy and accessible UI to follow the auction, get information about the current state of the parachains and crowdloans. This project meets that need.

The similar existing projects I know of are the polkadot-ui app that already has UI pages for the auction, parachains and crowdloans and this [proposal](https://kusama.polkassembly.io/treasury/76), which do have some features that have some similarities with this project, but the goals are different. The PLO proposal is oriented to the lease offerings, this project focus more on relay-chains state. Very recently, with the beginning of the crowdloan campaigns on Kusama, multiple similar projects have been released, such as [subvisio](https://subvis.io) or [polkaview's dashboard](https://www.parachains.network/), while both provides some pages similar to this project, there are less pages, thus less information. For now they focus on Kusama and finally, they "look & feel" of the application is not the same as the other applications built for the eco-system (typically, polkassembly, telemetry, the wiki page, etc fits well within the eco-system).

## Team :busts_in_silhouette:

### Team members

* Cyril Carlier

### Contact

* **Contact Name:** Cyril Carlier
* **Contact Email:** cyrilcarlier@hotmail.com

### Legal Structure

Individual / Sole Proprietor

### Team's experience

I'm a software developer with 3+ years of relevant experience in C#/.Net, Java(with Spring/Hibernate), SQL, Typescript, React and Angular, working mainly on DDD projects and lower-level projects (such as background-jobs services, multi-thread related projects). I have a master degree in Computer Science (University of Namur - Belgium). I'm not very involved in open sources projects, so I've no code to show you outside of the few things I have on my github repository (see below).

Here is an overview of different relevant project I've worked / working on at my current and previous jobs :

* Classical DDD project involving the development of two back-end (HTTP API, written with .NetCore and Entity) and three UI apps (web-app), each back-end is using a separate database (Oracle) and both are synchronized (when needed) using a message broker (RabbitMq). UI were developed in Typescript using React and Redux.

* Micro-services PoC : Project aim to show how to migrate from a monolithic software to a micro-services architecture with an event-sourcing mechanism to allow both applications to co-exists until the monolithic application is fully replaced.

* Migration of a legacy (30 years old) application that was running batches (in C, Pro*C, PL/SQL and Perl) to a C# WebAPI.

* Migration of a middleware (Java 1.2) to a multi-thread application (Java 8).

### Team Code Repos

* <https://github.com/CrommVardek>

### Team LinkedIn Profiles

* <https://www.linkedin.com/in/cyril-carlier/>

## Development Status :open_book:

### Polk-auction-core (started)

<https://github.com/CrommVardek/polk-auction-core>
<https://github.com/CrommVardek/polkot-api> (Polkadot client (WebSocket) in kotlin, to be used in polk-auction-core)

### Polk-auction-ui (started)

<https://github.com/CrommVardek/polk-auction-ui>

See overview section for the mock-up

## Development Roadmap :nut_and_bolt:

### Overview

* **Total Estimated Duration:** 10(+3) weeks
* **Full-Time Equivalent (FTE):**  1.7(+0.5)
* **Total Costs:** 6,800 USD

### Milestone 1 Implementation of the HTTP API (Polk-auction-core)

* **Estimated duration:** 4 weeks
* **FTE:**  0.7
* **Costs:** 2,800 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0  |
| 0b. | Documentation | I will provide an API specification of the HTTP end-points. I will also provide a small documentation on how to run the project and how the project structure was done.
| 0c. | Testing Guide | Integration tests will be made, as the project does not have *business* functions, it is more important to ensure the correct data-flow. A guide on how to run the tests will be made |
| 0d. | Docker | We will provide a Dockerfile that can be used to test all the functionality delivered with this milestone. |
| 1. | Current-Auction end-point | The current auction end-point is an HTTP GET end-point to provide the current auction information of the ongoing auction of the specified chain (e.g. GET /auction/Kusama). Behind the end-point, the service query the correct node (chain) through an instance of side-car and complement the missing information with a custom Polkadot Websocket (inspired from both Polkaj and @Polkadot/api) then perform needed mapping.  |  
| 2. | Current-Parachains end-point | The current parachains end-point is an HTTP GET end-point to provide the current auction information of the running parachains (and parathreads) of the specified chain (e.g. GET /parachains/Kusama). Behind the end-point, the service query the correct node (chain) through an instance of side-car and complement the missing information with a custom Polkadot Websocket (inspired from both Polkaj and @Polkadot/api) then perform needed mapping.  |  
| 3. | Current-Crowdloan end-point | The current crowdloan end-point is an HTTP GET end-point to provide the current crowdloan information of the ongoing auction of the specified chain (e.g. GET /crowdloan/Kusama). Behind the end-point, the service query the correct node (chain) through an instance of side-car and complement the missing information with a custom Polkadot Websocket (inspired from both Polkaj and @Polkadot/api) then perform needed mapping.  |

### Milestone 2 Implementation of UI (Polk-auction-ui)

* **Estimated duration:** 6 weeks
* **FTE:**  1
* **Costs:** 4,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0  |
| 0b. | Documentation | I will provide an API specification of the HTTP end-points. I will also provide a small documentation on how to run the project and how the project structure was done.
| 0c. | Testing Guide | Unit tests (code coverage of 60%) will be done to ensure most important functionalities are working as planned. A guide on how to run the tests will be made. |
| 0d. | Docker | We will provide a Dockerfile that can be used to test all the functionality delivered with this milestone. |
| 1. | Current-Auction page | The current auction page will display information from the API end-point /auction for the selected chain. |  
| 2. | Current-Parachains page | The parachains page will display information from the API end-point /parachains for the selected chain. The page will looks like a list of the parachain with its specificities in the network.  |  
| 3. | Current-Crowdloan page | The current crowdload page will display information from the API end-point /crowdloan for the selected chain. |
| 4. | Others pages | Some other pages will be included such as a FAQ section and an About section (describing the website/project). |
| 5. | Header | The header of the website will contain the list of the relay-chains (for now Kusama and Polkadot) and some external links to the github page, the Polkadot website (network), etc. |

### Milestone 3 Deployment of the website

* **Estimated duration:** 3 weeks
* **FTE:**  0.5
* **Costs:** 0 USD (costs for web-hosting are not covered)

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | NA  |
| 0b. | Documentation | NA |
| 0c. | Testing Guide | NA |
| 0d. | Docker | NA |
| 0e. | Article | A Medium article or a Reddit post will be written to advertise the website and another article/post targeting the developer community will be written to present the project. |
| 1. | Deployment of nodes | Deployment on a dedicated VPS of a Kusama running node and a Polkadot running node in respective Docker containers (from parity/polkadot:latest image).  |  
| 2. | Deployment of sidecar-api | Deployment on the same dedicated VPS of two side-car API in respective Docker containers (each one connected to one running node).  |
| 3. | Deployment of polk-auction-core | Deployment on the same dedicated VPS of the polk-auction-core API.  |
| 4. | Deployment of polk-auction-ui | Deployment on the same dedicated VPS of the polk-auction UI website.  |

## Future Plans

Futur plans are :

* The website, once up and running, will be promoted through some social-media (Reddit, LinkedIn and Facebook)
* Adapting the polk-auction-core API depending on side-car's changes - as their parachain endpoint is subject to changes, it is most likely the polk-auction-core API will need to be updated a few times in the mid and long-term.
* Complete the WS client (kotlin) for Substrate nodes to be used the same way @polkadot/api works. Will probably be part of another project, but it will be used by Polkauction-core in order to remove sidecar from the architecture.
* Add chains if the developer community find it useful to have Rococo and/or Westend on the website. Add chains when (long-term) nested relay-chain will be fully operational.
* The suggestion to communicate polkadot.js-extension directly from the UI will be considered to allow users to directly participate in the crowdloans.
* As I'm very open to ideas, suggestions and advices, it is very likely that the code, the architecture, the UI and the functionalities will evolve with the community feed-backs.

## Additional Information :heavy_plus_sign:

**Why do the FTE and duration do not match ?**
I have a full-time job as a developer, I'll take some days off for this project, however I won't take 10(+3) weeks of days off for the project, so I won't be able to work as 1FTE/month on this project. I'll work on evening and week-end to meet the milestones and deliveries.

**How did you hear about the Grants Program?** Web3 Foundation Website and Reddit (/r/Polkadot, /r/Kusama and /r/dot) mainly.

**Additional information**
I've started to work in the back-end (polk-auction-core) as well as deployed two running nodes (one on Polkadot, one on Kusama) and their respective side-car API instances. I've applied to no previous grants neither received contribution for this project.
