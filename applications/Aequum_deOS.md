# Aequum deOS

- **Team Name:** Bela Supernova
- **Payment Address:** Polkadot (Statemint):	 15iqY5VMHAbwkPs4ooJJazLND8Z9uPJXRrbwDE1zcPfeYwZJ (USDT)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 3

## Project Overview :page_facing_up:

Blockchain and dApp adoption show a certain level of growth among consumers and developers. However, this growth is slowed down by the lack of an integrated end-user experience and high application development costs. Today, the Web3 application landscape consists of isolated dApps communicating via a wallet. Starting a user journey is less intuitive and requires a certain amount of time and effort, which not everyone is ready to invest. The lack of mutual integration limits dApps application to specific use cases rather than offering a seamless operating environment. Due to the required skills and costs, the Web3 industry has a high entry threshold for both users and developers.

<img width="556" alt="Aequum deOS (as is before)" src="https://github.com/dsrdrk11a/Grants-Program/assets/98888366/fc1c84e7-0d18-48ad-be2e-f6aa8a25df3b">

Aequum deOS is a blockchain-agnostic operating system for decentralized applications that transforms the established operational pattern and presents a new approach to accessing and developing dApps. Aequum deOS connects dApps through a single framework, significantly reducing the existing ecosystem's complexity. The new blockchain workspace provides users with a single window of access to all their favorite dApps and a marketplace to explore new ones. Developers will benefit from a unified toolset and APIs to help them build and deliver solutions faster. Aequum deOS will bring together dApps from multiple blockchains and make them accessible with one click.
 
<img width="463" alt="Aequum deOS (to be after)" src="https://github.com/dsrdrk11a/Grants-Program/assets/98888366/52e6f1a0-0c77-4f47-be51-6c84bef32ced">

Exclusive benefits of the Aequum deOS:
- harmonization of user experience;
- mutual integration of dApps and seamless data flow;
- smooth switching between dApps within a single workspace;
- dApp Marketplace for easy search, extra visibility and representation;
- SDK toolbox for faster and smarter dApp development and delivery.

### Project Details

One of the key benefits of the Aequum deOS for the developer’s community is an ability to make generic API protocols for any dapp functionality and to publish these protocols for dapp to dapp interaction and users will get the ability to manage access rights to user’s data, that is processed by these protocols.
In the core of the Aequum deOS will be a BUS API that will interconnect all low-level browser APIs like camera, disk or sound card access (through DOM or canvas), etc. The BUS API will give dapps an ability to register any used protocols and methods, so that all dapps could interact with each other through the BUS API.
Aequum deOS will be realized as a parachain for several purposes:
	1) for storing and downloading the entire deOS as well as all dapps. All files will be stored in the IPFS (or another storage like Crust network) and the parachain will store URLs, hash sums and search metadata.
	2) for storing protocols manifests. Any user can public an RFC with protocol, methods and data structure description. Any developer can write his version of a protocol as a dApp and publish it in the Aequum marketplace. The system will show users all dApps that can interact with any particular protocol.
On the first stage of the project we will develop base protocols for interaction with wallets, access rights, UI and the Polkadot blockchain. All developers within the Aequum deOS will be able to enrich the ecosystem and develop new protocols for dApps (e.g. protocols for data/files usage or other parachains interaction)

![photo_2023-04-27_09-41-04](https://github.com/dsrdrk11a/Grants-Program/assets/98888366/3bf9079e-1f6f-4c28-a498-4caffbf600fc)

### Ecosystem Fit

The Polkadot XCM and Moonbeam’s [cross-chain connected contracts](https://moonbeam.network/builders/connected-contracts/) are technologies that help to embody the benefits of the Polkadot architecture and rise user experience bringing Polkadot ecosystem dapps much closer to what users have used to in their off-chain or single-chain experience, however complicated infrastructure (wallets with dozens of networks, address formats, cross-chain transfers and assets on-/off-ramping complexities) could still be confusing for inexperienced users and hinder the mass adoption. Aequum deOS will contribute to the mass adoption development and bring to Polkadot ecosystem dapps the ability of mutual interaction by providing an opportunity to exchange not only assets and messages, but any other information and files in a secure way through common protocols and APIs of the decentralized operating system. As an example: files stored in a decentralized storage could be run/opened straight by dapps without downloading or copying them to a local or centralized cloud storage.

## Team :busts_in_silhouette:

### Team members

- Sergey Cymbal, MBA, CEO at Bela Supernova d.o.o
- Alexey Vexin, CPO & Head of Delivery at Bela Supernova d.o.o
- Dmitrii Putilov, CTO at Bela Supernova d.o.o
- Dmitrii Shevchenko, Lead developer at Bela Supernova d.o.o
- Ilia Shavrin, Full stack software developer at Bela Supernova d.o.o
- Anton Shramko, Full stack software developer at Bela Supernova d.o.o
- Ksenia Baranova, QA Lead at Bela Supernova d.o.o

### Contact

- **Contact Name:** Alexey Vexin
- **Contact Email:** av@bsn.si
- **Website:** https://www.bsn.si

### Legal Structure

- **Registered Address:** Tabor 5a, 1380 Cerknica, Slovenia
- **Registered Legal Entity:** BELA SUPERNOVA, sistemske rešitve d.o.o.

### Team's experience

Sergey Cymbal is an experienced executive, entrepreneur, implemented IT and technology innovations at Oil&Gas, Utilities, Supply Chain Management and Telco. Automation, IOT and Blockchain evangelist. Launched several AI initiatives. Ex-CIO of nation-wide grids company responsible for digital transformation, made the world's first multi-thousand rollouts of smart meters on open communication protocols, built the company to over $500M in sales. Established and automated Life Insurance, the main business line of the Aviva insurance company. Ex-member of national winter Olympics HQ responsible for digitalization. MSc in Physics, EMBA.

Alexey Vexin is a product owner and a project manager with 10+ years of experience in managing complicated telecoms and IT projects in Telco, Utilities, Social insurance and Governmental sectors with deep focus on business process management. Ex-deputy CIO of a national Pension Fund, ex-telecoms director of nation-wide grid company responsible for telecoms, PMS, DMS and technical support services. As a product owner implemented 100K+ users DMS system in the vertically integrated national Pension Fund with 3K+ companies. As a tech lead created the national grids technical policy and telecoms infrastructure core design and pushed through industry's legislative changes to ensure digital transformation in dispatching and grids management. Recently as a project director leads the world's first project for implementing electronic health records with a blockchain to push the final step of the Health industry towards a true client-centric approach.

Dmitrii Putilov has over 17 years of experience leading teams that create and maintain highly loaded and high availability web2 & web3 services. The ETHWaterloo 2019 hackathon winner, ex-team lead of the Roobee.io investment platform included in the top500 on Coinmarketcap. Ex-lead software engineer of a nation-wide TV channel, responsible for architecture and development of streaming services with ultra-high load (up to 100K requests per second). As a lead architect led development of a highly loaded Service Desk for a nation-wide grid company with 200K+ corporate users and hundreds of field tech teams.

Dmitrii Shevchenko is a TechLead engineer with 10+ years of experience in developing and integrating IT, networking, security and blockchain solutions. Involved in implementation of highly reliable industrial solutions and development of FinTech and DeFi applications. Ex-deputy CIO of a regional grids company, responsible for development of FinTech services, implemented the first ever in the national history DeFi roobee.finance in the Utilites sector that gathered over $2M of investments. Led the OMS/DMS implementations for the first ever national PoC on open communication protocols.

Ilia Shavrin is a solution architect and full stack software developer with over 12 years of experience in high load enterprise applications. His most recent focus is on blockchain and creation of decentralized applications.

Anton Shramko is an experienced developer with 7 years of experience on various positions, including solution architect in Krypton. Anton active contributor to open source and blockchain communities, he is also a frequent speaker in DevCon conferences. 

Ksenia Baranava is a QA test engineer with over 7 years of experience. Ksenia worked on Unreal Engine 5 which is the number one game engine where 9K+ companies, developers, and users create video games, movies, and VFX/CGI effects using code or visual programming. As a QA lead Kseniya implemented testing processes and documentation to projects with actively 2M+ users daily. Also has experience with API, frontend and backend and micro services testing, implementing reports and KPI's.

Bela Supernova has finished W3f grants earlier: [OCEX](https://github.com/w3f/Grants-Program/pull/803); [Rubeus Keeper (st.1)](https://github.com/w3f/Grants-Program/pull/1124); [Rubeus Keeper (st.2)](https://github.com/w3f/Grants-Program/pull/1361)

BSN also delivers code under successful grants from [FileCoin, Chainlink](https://github.com/filecoin-project/devgrants/issues/418) and [Tgrade](https://github.com/bsn-si/figaro-contract) communities.

### Team Code Repos

- https://github.com/orgs/bsn-si/repositories
- https://github.com/ManageIQ/manageiq-providers-amazon/commits?author=aiperon
- https://github.com/ManageIQ/manageiq/commits/?author=aiperon
- https://github.com/friktor?tab=repositories
- https://github.com/dsputilov
- https://github.com/friktor
- https://github.com/aiperon
- https://github.com/1db1


### Team LinkedIn Profiles (if available)

- [Sergey Cymbal] (https://www.linkedin.com/in/sergecymbal/)
- [Alexey Vexin] (https://www.linkedin.com/in/alexey-vexin-800a4068/)
- [Dmitrii Putilov] (https://www.linkedin.com/in/dmitri-p-96b0a140/)
- [Ilia Shavrin] (https://www.linkedin.com/in/ilia-shavrin-716552228/)
- [Anton Shramko] (https://www.linkedin.com/in/anton-shramko-25971b162/)
- [Ksenia Baranova] (https://www.linkedin.com/in/mayawotson/)

## Development Roadmap :nut_and_bolt:

On this first stage of the project we plan to execute several deliverables in six milestones, the main of which are:
- an Aequum deOS loader with a bundle assembly tool;
- an Aequum deOS core & BUS API;
- libraries and APIs;
- a windows manager & a task bar;
- a Substrate pallet.

The project will be supported by a team of 3 developers, 1 UI/UX designer, 1 DevOps engineer and 1 QA.

### Overview

- **Total Estimated Duration:** 4,5 months
- **Full-Time Equivalent (FTE):** 12 FTE
- **Total Costs:** 98,000 USDT

### Milestone 1 — Design and development of the Aequum deOS loader

- **Estimated duration:** 1,5 months
- **FTE:**  3
- **Costs:** 24,000 USDT

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how the developed features work. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure new functionality and robustness. In the guide, we will describe how to run these tests. |
| 1. | Bundle assembly tool |We will develop a tool (written with JS) that will be used for assembling a dapp/OS into one bundle, that includes all needed resources, libraries, dependencies for correct functionality. We will also deliver a resource extractor (css and images) and html samples compilation to virtual DOM. Aequuum deOS like all other dapps will be packed into one bundle and it’s code will be uploaded to IPFS and a blockchain. On the user side there will be just one light loader that will download the deOS from the blockchain. |
| 2. | Aequum deOS loader (written with JS) | On this stage of the project deOS loading will be implemented from a local source (via https). After completing the Aequum parachain an ability to download deOS from the blockchain will be added. This deliverable also includes https bundle download in dev mode; Aequum deOS run process (on this stage “a stub” will be run to test the boot & run processes). |
| 3. | User keys storage| The keys storage (developed with JS) will store user keys and provide API for using these keys by the system and dapps. The API will be implemented on later stages of the project. |
| 4. | Registration / authorization pages (written in JS) | Authorization page (Aequum deOS login with Polkadot wallet credentials); Registration page (adding new account/wallet). |

### Milestone 2 — Aequum deOS core

- **Estimated duration:** 1,5 months
- **FTE:**  5
- **Costs:** 40,000 USDT

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how the new dapp works. 	|
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. | 
| 1. | Aequum deOS core & BUS API | This deliverable will be developed using JS. We will develop the BUS API that will interconnect all low-level browser APIs like camera or sound card access (through DOM or canvas), etc. BUS API will grant dapps abilities to register any used protocols and methods and thus interact with each other with these protocols. Meanwhile, a user will be able to control all access rights (approve or decline access to APIs for chosen dapps). | 
| 2. | RUST lib | We will deliver a RUST library, that allows to register protocol handlers and call methods of any protocol. | 
| 3. | WASM loader | WASM app loader (developed with RUST) to load and run applications from a local source (for “dev” mode). Loading of dapps from a blockchain will be delivered on later stages of the project, after delivering a Substrate parachain pallet and of publishing tools. | 
| 4. | PROCESS API | We will develop a PROCESS API (written with JS) for process (dapps) management. PROCESS API will be used in the “task manager” app. This deliverable will include: API and it’s documentation; API implementation. | 
| 5. | KEY API | We will deliver a KEY API (written with JS) that will provide access to user keys, that were used by the user for authentication. This API will be used for wallet dapps. This deliverable will include: API and it’s documentation; API implementation. | 

### Milestone 3 — Base APIs & test app

- **Estimated duration:** 1,5 months
- **FTE:**  4
- **Costs:** 34,000 USDT

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how the new dapp works. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. | 
| 0e. | Article | We will publish an **article** that explains what was achieved, how to use the new Dapp and what are the benefits of using the system |  
| 1. | DISPLAY API (JS, RUST) | We will develop a DISPLAY API that will allow all WASM dapps to show UIs and make databinding. This deliverable will include: API and it’s documentation; API implementation (RUST SDK, JS rendering). | 
| 2. | KEYBOARD API (JS) | We will develop a KEYBOARD API that will allow all dapps to get data from a keyboard. |
| 3. | MOUSE API (JS) | We will develop a MOUSE API that will allow all dapps to get data from a mouse pointer. |
| 4. | Polkadot.js API | We will develop and implement an API for interaction of dapps with Polkadot parachains. Using this API dapps could get access to a parachain storage and call methods. |
| 5. | JS test app example | We will deliver a test app, that will show all functionality, that is developed in this milestone. | 

## Future Plans

We see these future steps for delivering the Aequum deOS MVP. These milestones are planned to be delivered in next stages of the project under separate grant applications:

### Future milestones

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 1. | Windows manager & task bar | We will develop a windows manager & a task bar using RUST. Using DISPLAY API deOS windows manager will make its GUI, that can manage dapps (windows, settings, tasks bar). The purpose of the deOS windows manager will be dapps windows management. It will allow users to move, resize, minimize dapps and put them on the screen in a desired order. DeOS windows manager will also allow to arrange virtual desktops, which can be used for arranging dapps. | 
| 2. | GUI API | We will develop GUI API (in RUST) as a separate dapp, it will use low-level DISPLAY API from the deOS and provide a high-level API to other dapps, which they will use to build UI. | 
| 3. | RUST lib | We will develop a RUST library with UI API implementation. | 
| 4. | Aequum deOS Substrate pallet | We will develop a Substrate pallet with defined functionality: saving dapps in the marketplace, searching for dapps in the marketplace by parameters, register protocols (for dapp custom features), get protocols. | 
| 5. | Access rights management | We will develop an 'ACCESS API' – access rights management system for access to APIs/data/hardware (e.g.: assets, sound, camera, push notifications & etc. |
| 6. | Upload tool | We will deliver a tool for compiling dapps into WASM, packing resources to bundles (using bundle assembly tool), uploading bundles to IPFS/blockchain, registering a dapp in the marketplace. | 
| 7. | Dapps marketplace | Dapp marketplace will be delivered as a separate dapp, built into the system. It will provide a list of available dapps with search functionality by categories and other parameters. | 
| 8. | Blockchain API | We will deliver and implement an API for interaction of dapps with Polkadot parachains. | 
| 9. | HTTP API | An API (written in JS) for dapps for making https requests to servers and nodes. |
| 10. | WS API | An API (written in JS) for dapps for making and using WebSocket connections with servers and nodes. |
| 11. | WEBRTC API | A WebRTC API (written in JS) for dapps for making p2p connections and exchanging of streaming data. |
| 12. | Aequum wallet | This dapp will request access to user’s keys (using the KEYS API) and provide functionality of a crypto wallet. Also we will deliver a "Wallet" protocol, that will describe access. Here, on this stage, the deOS will get abilities to get and manage user’s assets. This dapp won’t be built in the system, so other teams could develop other wallets for the Aequum deOS. We plan to implement code audit for all dapps, that get access to user’s keys and put particular badges in the marketplace, that has passed such security audits, so users could evaluate these dapps higher. | 
| 13. | deOS loader browser extension | Aequum deOS is a decentralized solution, so it shouldn’t be downloaded from any centralized web site. We plan to develop an Aequum deOS loader as a browser extension, this loader is planned to be built only once and shouldn’t be changed. After running it will download the latest version of the Aequum deOS from the blockchain and run it in the browser. |
