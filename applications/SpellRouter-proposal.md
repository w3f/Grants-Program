# SpellRouter - XCM Router by ParaSpell✨

- **Team Name:** ParaSpell✨
- **Payment Address:** FIAT (Shared 22.Dec.2023 14:56 via contact email mentioned in the application)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2 🐤

## Project Overview :page_facing_up:

Previously completed grants:
- [Phase 1](https://github.com/w3f/Grants-Program/pull/1118)
- [Phase 2](https://github.com/w3f/Grants-Program/pull/1245)
- [Phase 3](https://github.com/w3f/Grants-Program/pull/1589)
- [LightSpell](https://github.com/w3f/Grants-Program/pull/1817)

**What we do focus on in ParaSpell✨:**

Our team has focused on the unification of cross-chain communication in the Polkadot and Kusama ecosystems for a while now. Our latest and flagship addition is XCM API also known as LightSpell⚡️. This tool allows you to implement cross-chain interoperability into your application within moments. ParaSpell offers a set of XCM & XCMP Developer tools meant to ease the integration of cross-chain functionality into dApps. As we have learnt by now, cross-chain experience between Parachains can be very diverse. ParaSpell means to unify this experience by doing all the research for developers. We have wrapped all XCM pallets from compatible nodes into simple patterns from which it is easy to create XCM calls. As an example, we provide the image below.

![img1](https://user-images.githubusercontent.com/55763425/218987451-2bfc9526-8f2b-4477-8c42-8c70cbcb6ec4.jpg)

In this image, we can see, that ParaSpell XCM SDK saves much time for developers. Just one call can contain multiple lines of JSON which would otherwise have to be integrated manually by the developer. ParaSpell does it in marginally fewer lines and hides the complex logic of building messages which ensures, that messages are constructed correctly. This call in the end results in the following lengthy extrinsic:

![img2](https://user-images.githubusercontent.com/55763425/218987583-f5fb10b2-2e0c-4f36-b01c-0d610deab1c6.jpg)

This extrinsic can be subscribed to for useful data in front-end applications.

The same call can also be reproduced with the latest addition to our tool pack - XCM API. See the example below.

<img src="https://user-images.githubusercontent.com/55763425/268458206-27e4b2db-adfa-4fb2-8b47-ba29d8c2162a.gif" alt="howapiworks" />

### Overview 🎨

ParaSpell is currently split into three main repositories at the moment. XCM Router, XCM API and XCM SDK will be merged into one monorepo package with the intention of sharing types and saving code:

- XCM ROUTER - TBA: Meant to give developers the ability to exchange and transfer assets in one call in a seamless way that allows them to lift complexity from users.
- [XCM SDK](https://github.com/paraspell/xcm-sdk): Meant to unify cross-chain experience on Polkadot and become a layer 2 protocol that allows for seamless integration of XCM into your dApps.
- [XCM API](https://github.com/paraspell/xcm-api): Meant to ease the integration of XCM interoperability into your dApp, offload your dApp from heavy computing and save you costs.
- [Docs](https://github.com/paraspell/docs): Extensive documentation for an overview of ParaSpell, a guide for SDK and API

#### XCM SDK

Few facts about XCM SDK:
- The core component for XCM API
- Comprehensive unification of XCM from 43 different Parachains
- Allows for creating XCM calls with one-line
- Simple to implement typescript package
- Completely free with an MIT license

XCM SDK allows developers to use XCM in all three available scenarios:
- Parachain to Parachain - HRMP
- Parachain to Relay chain - UMP
- Relay chain to Parachain - DMP

SDK contains many useful features that allow for easier integration:
-  Builder pattern implementation, easy to construct XCM calls, much more used recently for simplicity of implementation.

- Suggestions, SDK contains TYPES that help to guide developers through integration. For example, they show compatible Parachains that can be used in calls.
![1_59xApnboumYhzuRHKx60TA](https://user-images.githubusercontent.com/55763425/219314223-79c31085-2e90-4dc7-ad51-da96de730ea0.png)

- Console printouts, SDK allows for printing into the console so developers can always check if the call they constructed is correct.
![1_2KT6Z1rxxprmE03XWYY-HA](https://user-images.githubusercontent.com/55763425/219314235-1da52511-b4e8-4a41-bdaa-04fa6a9e8a48.png)

- Exporting registered assets for each compatible node in many useful functions

- Exporting supported XCM pallets for each compatible node in useful functions

And more. 

#### XCM API
XCM API currently supports 43 (this number changes a lot) XCM-compatible Parachains. It brings lots of advantages for developers.
The advantages of LightSpell⚡️ XCM API for developers:
- Provides the same functionality as XCM SDK with many benefits
- Built-in user error prevention for seamless operation
- Built-in Token authentication for DDoS prevention
- Easy to use tech stack: Typescript, Nest.js, ParaSpell XCM-SDK
- Completely free with an MIT license
- Also designed for simple private deploy
- API Offloads your server from heavy computing required to construct calls (You receive constructed message already)
- API saves you server costs (Because of the reason mentioned above)
- API features Package-less integration (No need to install anything compared to SDK alternatives)
- API is simple to implement (Constructed to be as dev-friendly as possible)
- API is already live on the following link: https://api.lightspell.xyz

#### Docs
Meet our comprehensive docs covering just about every topic developers will meet with when implementing XCM and our tools into their dAPPs.
<img src="https://user-images.githubusercontent.com/55763425/268457700-ec761625-1963-46c0-8edc-9e7af3b02c4e.gif" alt="docsgif" />


#### Architecture 🏗️
##### Old
The old design had SDK integrated into dApp:

![taskFlow](https://user-images.githubusercontent.com/55763425/198412240-e031d877-c5d8-4952-9048-2e1256ba4469.svg)

The replacement design with XCM API, there is no need for integrating XCM SDK. There is only a need to send the request. No more installing packages. Works way faster and offloads dApp from heavy computing to generate calls.

![diag drawio](https://user-images.githubusercontent.com/55763425/275814797-d0472306-4e57-4bea-9d9b-86fac2afd125.svg)

##### New
The newest architecture is similar to the one before it, however, dApps will now be able to call XCM Router through XCM API or integrate it as an independent package. XCM  Router will benefit users with ease of exchanging and transferring assets to another chain as well as developers who can hide complex logic from users and integrate this feature with ease without the need for extensive research.

![diadg drawio](https://user-images.githubusercontent.com/55763425/275827358-d0cf38cc-48e2-4b25-9853-8c2b59e0424f.svg)

This architecture is only proof of concept architecture. The final architecture may differ a little (Mostly because we want to make this as efficient as possible so if we find a better solution we will instead resort to it.
#### Technology Stack  💻️
-   Vue.js
-   Node.js
-   Typescript
-   Polkadot API libraries
-   Nest.js

### Ecosystem Fit  🌳

#### XCM Router
We strive to bring state-of-the-art technology to the ecosystem with any bright idea we get. SpellRouter XCM Router is no different. The implementation would become the first XCM Router in the Polkadot ecosystem. 

We aim to achieve XCM Router functionality by building a sovereign typescript package (for those who wish to implement it as a package) that will also be implemented in LightSpell XCM API (for those implementing LightSpell XCM API already). The core component for generating XCM calls will be ParaSpell XCM SDK. Other functionality regarding exchanges and logic will be unique to the Router itself. The XCM router will serve ecosystem users to transfer their assets cross-chain while giving them the ability to exchange them into different assets all in just one call (3 signatures). There were numerous suggestions for this tool in the ecosystem. Mainly because it brings the following benefits:

- Ability to transfer assets cross-chain via XCM while being able to exchange them for another asset all within one call.
- Offlift users from the complexity of moving assets to another chain in order to exchange tokens just to send them to another chain later
- Developers able to hide asset exchange complexity and skip multiple implementation steps
- Developers save the time required for complex research
- Complex logic hidden in simple one-line calls

An example of a Router call can be seen below:
![carbon](https://user-images.githubusercontent.com/55763425/275885095-14b21777-ed1f-494e-a524-6b2962271679.png)

The choice of exchange Parachain will be automatic in a later version of XCM Router so users will only have to select exchange Parachain manually if they wish to.

A high overview of Router functionality can be seen below:
![gfds drawio](https://user-images.githubusercontent.com/55763425/275976780-e1d47546-f75c-4788-81f0-388a2c71f183.svg)



#### XCM API
As mentioned in a tweet from Alice&Bob, we need Chain APIs to put XCM on steroids - [link](https://twitter.com/alice_und_bob/status/1664564442456109057?cxt=HHwWgsC9pdGi3JkuAAAA). 

We aim to achieve this by utilizing the XCM-SDK technology we built previously. 
Using XCM API compared to implementing XCM SDK into dApp can bring three main benefits:
- Calls are generated much quicker
- API is much simpler to implement than SDK 
- No need to install anything (Comes with the benefit of saving space and without issues with dependencies)

Why we chose NestJS for XCM API:
By choosing Nest.js as our backend HTTP REST API framework, we can harness the power of Node.js, leverage TypeScript's benefits, ensure maintainability through its modular architecture, and take advantage of its extensive community support. This enabled us to build a reliable, scalable, and well-documented XCM API that seamlessly integrates with the existing XCM SDK. In addition, Nest.js offers a powerful code generation feature that allows us to quickly scaffold boilerplate code for controllers, services, modules, and more. By utilizing the Nest.js code generator, we can significantly reduce development time and effort, ensuring rapid prototyping and efficient implementation of the XCM API endpoints. Compared to other TypeScript frameworks, Nest.js stands out with its modular architecture, seamless integration with Node.js, and strong community support, offering developers a scalable and maintainable solution.

As API is now fully implemented we can observe its metrics for the first month it is deployed:
<img width="1186" alt="Screenshot 2023-10-16 at 21 42 53" src="https://user-images.githubusercontent.com/55763425/275632474-3508207d-884a-4751-8527-7db02cfa5d3d.png"/>

We can see, that API serves between 500 to 1000 requests in a day. API uptime is 100%. API is completely free for everyone to use, implement or privately deploy.
It now features various error prevention mechanisms (Valid wallet address check) and analytic tools to report errors that are not handled by API or report API usage (Strictly without collecting any sensitive user data). 

#### XCM SDK

There are not many XCM & XCMP-related development tools released currently. We aim to aid this mostly empty space and help developers understand XCM & XCMP as the current state-of-the-art technology by providing documentation and a set of tools which help them do development tasks more easily and faster.

In Polkadot and Kusama ecosystems, there are few XCM-related tools in development. For example, Moonbeam XCM SDK and Parity Asset Transfer API. We bring a comparison table that compares them to our ParaSpell XCM SDK.
| Features | ParaSpell XCM SDK | Moonbeam XCM SDK | Parity Asset Transfer API|
| -----: | ----------- | ------------- | -----------|
|UMP Support|Implemented|Implemented|Implemented (only for 2 Chains)|
|DMP Support|Implemented|Implemented|Implemented (only for 2 Chains)|
|HRMP Support|Implemented|Implemented|To be implemented|
|No. of chains implemented|45 incl. Relay chains (To change to more chains with next update)|42 incl. Relay chains|4 incl. Relay chains|
|Support for NFT transfers|Planned to be implemented|Not implemented| Planned to be implemented|
|Multi-asset transfer support|Planned to be implemented|Not implemented|Planned to be  implemented|
|Multi-location specification|Automatic|Automatic|Required in some scenarios|
| Build pattern | Integrated as intuitive as possible | Integrated, not as intuitive to implement however | Only function style call construction|
| Support for asset pallet operations | Integrated  | Not integrated | Not integrated|
| Support for HRMP Channel operations | Integrated users can open & close HRMP channels on their local chain (Useful feature for devs) | Not integrated | Not integrated|
| Support for checking details that do not change | Integrated & also be covered with some error handling eg (too little amount being sent, not sufficient for XCM transfer) | Integrated in the form of a small "map" for different Tokens & Node IDs | Integrated in form of Map|

We are currently in talks with several Parachain teams that like the idea of unified SDK for XCM transfers as much as we do. SDK that unifies XCM can be very helpful for the entire ecosystem in our opinion. With the introduction of XCM API and soon XCM Router this improves even further.

Our target audiences are Web3 projects and starting/current blockchain developers.

As SDK is also fully developed and its metrics are available to the public we can see, that it is still used a lot by developers in the ecosystem (Even after the API release).
<img width="1182" alt="Screenshot 2023-10-16 at 18 50 37" src="https://user-images.githubusercontent.com/55763425/275785456-199b04dc-6423-49c7-a2ac-5fa6b5106426.png"/>

## Team :busts_in_silhouette:

### Team members

Dušan Morháč - Student, project Founder & Core Dev. Faculty of Informatics and Information Technologies STU in Bratislava

Michael Absolon - Student, XCM SDK & XCM API Core Dev. Faculty of Informatics and Information Technologies STU in Bratislava

### Contact

- **Contact Name:** Dušan Morháč
- **Contact Email:** dudo.morhac@gmail.com


### Legal Structure

- **Registered Address:** Tomášovská 453/2 Kalinovo 98501 Slovakia
- **Registered Legal Entity:** Adam Morháč

### Team's experience
-  Dušan is the founder & researcher behind this project and he has successfully presented it at the international conference ICECET2022 held in Prague from which there is an article regarding the XCMP & ParaSpell project. It is published by IEEE - [link](https://ieeexplore.ieee.org/document/9872938). He also successfully presented it at the ICBC 2023 conference held in Dubai. The article was published in [IEEE Enhancing XCMP Interoperability Across Polkadot Paraverse | IEEE Conference Publication](https://ieeexplore.ieee.org/document/10174872). Dušan studies Blockchain technology and had a bachelor's thesis about cross-blockchain sharing from which this idea was born. Dušan continues research on this idea in his Master's thesis. He is actively working on [LightSpell and ParaSpell](https://github.com/paraspell) full-time & has also participated in other ecosystem projects. Recently he attended Polkadot Blockchain Academy 2023 in Buenos Aires which gave him a lot of insight into the ecosystem and he also graduated from the academy successfully. Here is the [NFT that was minted as a certificate by Parity](https://singular.app/collectibles/statemine/20/12).

And here is a certificate in physical form:

<img width="400" alt="certificate" src="https://user-images.githubusercontent.com/55763425/275783335-140792ac-80dd-4e48-92ce-fa630c3f390b.png"/>

- Michael is a dedicated TypeScript developer with 2 years of full-time experience in the Web2 sphere. Michael's expertise in this field was further solidified in 2019 when he won first place in the Junior Internet Web competition for his online multiplayer game, which was written in JavaScript. In addition to his professional background, Michael also achieved a bachelor's degree in the same computer science University as Dušan and he is currently pursuing a master's degree which focuses on Blockchain. His passion for technology led him to explore Blockchain technology in his free time. He was recently offered the opportunity to work on ParaSpell XCM SDK & LightSpell XCM API with Dušan and he delivered many of the key features SDK & API now offer.
### Team Code Repos

- https://github.com/paraspell/xcm-api
- https://github.com/paraspell/xcm-sdk
- https://github.com/paraspell/docs

### Team Github Profiles 🧑‍🎓

- https://github.com/dudo50 Dušan Morháč
- https://github.com/michaeldev5 Michael Absolon

### Team LinkedIn Profiles 🧑‍🎓

- https://www.linkedin.com/in/dudo50/
- https://www.linkedin.com/in/michael--absolon/

## Development Status :open_book:
We are currently finishing maintenance tasks and issues that are open in XCM SDK, XCM API and Docs repositories. After that, we wish to shift our focus to the development of an XCM Router which we already have laid out the structure for and we have basic functionality laid into small steps that will help us achieve making this state-of-the-art technology.

As there are no XCM Routers currently in the ecosystem, this challenging task motivates us to fill the gap once again (Just like with XCM API).

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 5 months
- **Full-Time Equivalent (FTE):** 1 FTE
- **Total Costs:** 22 000 USD

### Milestone 1 - Create XCM Router and move all three tools into Monorepo

- **Estimated duration:** 3 months ⌛️
- **FTE:**  1
- **Costs:** 12 000 USD 💰️

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | MIT |
| 0b. | Documentation | We will provide both readme.md and official docs documentation  |
| 0c. | Testing and Testing Guide | Testing guide will be mentioned in official docs|
| 0e. | Create Medium article about development of early Router | Add article covering early XCM Router version |
| 1.a | Integrate early version of XCM Router I| This version will contain additional detail about exchange Parachain (XCM Router will not select exchange automatically yet, the developer has to select from a provided list). The first version will feature functions like patterns to create calls. [See an example of function pattern](https://paraspell.github.io/docs/sdk/xcmPallet.html#function-pattern-xcm-call-from-relay-chain-to-parachain) |
| 1.b | Integrate early version of XCM Router II| Compared to the first version, this version will feature a Builder pattern to enhance the developer experience. [See an example of builder pattern](https://paraspell.github.io/docs/sdk/xcmPallet.html#builder-pattern-xcm-call-from-relay-chain-to-parachain) |
| 2. | Update docs to cover early XCM Router version| Add comprehensive guide that covers usage of early XCM Router version|
|3.|Create unit tests for XCM Router|Create unit tests for core features in XCM Router|

### Milestone 2 - Enhance XCM Router and feature automatic tool updating

- **Estimated duration:** 2.5 months ⌛️
- **FTE:**  1
- **Costs:** 10 000 USD 💰️

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | MIT |
| 0b. | Documentation | We will provide both readme.md and official docs documentation  |
| 0c. | Testing and Testing Guide | Testing guide will be mentioned in official docs|
| 0e. | Create Medium article about development of latest XCM Router | Add article covering new features & improvements brought with SpellRouter☄️ |
| 1. | Integrate automatic exchange chain selection into XCM Router | Integrate automatic exchange chain selection into the router (If the user wishes they can manually insert it otherwise Router will select automatically). XCM Router will try to select an exchange with the best pool/price. To see the difference between automatic and manual selection feel free to see the [following image](https://user-images.githubusercontent.com/55763425/277431789-cc3892dc-4452-49e1-a201-19edbc6f20d8.png)|
| 2. | Integrate XCM Router into LightSpell XCM API | Integrate core functionality of XCM Router into LightSpell XCM API |
|3.a| Update unit tests for new XCM Router functionalities| Update unit tests for new XCM Router functionalities|
|3.b| Create integration tests for XCM Router|Create integration tests for core features in XCM Router|
|3.c| Update integration, unit and e2e tests for LightSpell XCM API| Add new integration,unit & e2e tests for core LightSpell XCM API XCM Router integration|
| 4.a | Cover latest automatic exchange chain selection in XCM Router section (Docs) | Add comprehensive guide covering automatic selection in XCM Router section |
| 4.b | Cover XCM Router integration in XCM API  section (Docs) | Cover XCM Router integration in LightSpell XCM API Section |

## Future Plans 🔭
- We wish to implement XCM v3 NFT transfer support 
- Once XCMP is out, we deprecate HRMP in SDK in favour of it.
- Continue shaping XCM API to be as developer-friendly as possible
- Continue gaining project integrations
- Make sure XCM API uptime is nearing 100% and API works as should at all times
- Improve XCM Router and add new ways to simplify call constructions

Our focus will always remain on developer experience as well as being open source, completely free, common good and helpful to others.
Another future goal that we try to keep is to continue innovating in the XCM area - bringing new state-of-the-art tech.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Personal recommendation

##### Project achievements in chronological order  ⌛️

- 📙 Article about the project created & presented at international conference ICECET2022 held in Prague (450 out of 1000+ articles accepted) Link to IEEE publication - [IEEE Sharing Fungible Assets Across Polkadot Paraverse](https://ieeexplore.ieee.org/document/9872938/)
- 🥈 2nd Prize, Build an XCM-related Tool for Moonbeam - Polkadot North America Hackathon [Hackathon entry](https://devpost.com/software/polkachange-cross-blockchain-transfer-tool)
- 🥉 3rd Prize, EVM+ DApp for aUSD yield - Polkadot North America Hackathon [Hackathon entry](https://devpost.com/software/polkachange-cross-blockchain-transfer-tool)
- 🎈 Web 3 Foundation base grant [Application](https://github.com/w3f/Grants-Program/pull/1118), [Delivery](https://github.com/w3f/Grant-Milestone-Delivery/pull/584)
- 🐍 [Basilisk](https://bsx.fi/) treasury proposal 2 / 2 Approved [link](https://basilisk.subsquare.io/treasury/proposal/2), [link2](https://basilisk.subsquare.io/treasury/proposal/4)
- 🔭 Web 3 Foundation phase 2 grant Milestone 3 / 3 delivered [Application](https://github.com/w3f/Grants-Program/pull/1245), [Delivery1](https://github.com/w3f/Grant-Milestone-Delivery/pull/670), [Delivery 2 & 3](https://github.com/w3f/Grant-Milestone-Delivery/pull/715) 
- 📕  Article about Polkadot & ParaSpell created & accepted to be presented at international cross-chain conference IEEE ICBC 2023 held in Dubai - [IEEE Enhancing XCMP Interoperability Across Polkadot Paraverse](https://ieeexplore.ieee.org/document/10174872)
- 💼 Kusama Treasury Funding proposal number 1 - Upgrade SDK, [Application](https://kusama.subsquare.io/referenda/referendum/123s), [Delivery](https://docs.google.com/document/d/1lMY_8EtQ41IX7Zn9VIMAiG1k3oLYN0h_lVj8dWDwZ_k/edit?usp=sharing)
- 🏗️ Web 3  Foundation phase 3 grant (Make SDK better) Milestone 1 / 1 delivered [Application](https://github.com/w3f/Grants-Program/pull/1589), [Delivery](https://github.com/w3f/Grant-Milestone-Delivery/pull/836)
- 📘 Article about Polkadot & ParaSpell created & accepted to be presented at international cross-chain conference IEEE BCCA 2023 held in Kuwait [links TBA]
- 🥈 Second place at sponsored prices Polkadot Global Series APAC 2023 Hackathon: Build a Connected Contract With Moonbeam [Linkedin post announcement](https://www.linkedin.com/posts/angelhack_polkadothackathonapac-koreablockchainweek-activity-7097217757724758016-8pJ_?utm_source=share&utm_medium=member_desktop)
- 🥇 First place at Polkadot Global Series APAC 2023 Hackathon Finale [Finalist announcement post](https://www.linkedin.com/posts/angelhack_polkadothackathonapac-koreablockchainweek-activity-7097217757724758016-8pJ_?utm_source=share&utm_medium=member_desktop), [Final result](https://drive.google.com/drive/folders/1YxFJ4NO9_mMyNsXoPKboFfYHwHM1AJHv?usp=sharing), [Final result announcement post](https://www.linkedin.com/posts/angelhack_polkadothackathonapac-activity-7108072292718428160-i1dr?utm_source=share&utm_medium=member_desktop)
- 🚀 Web 3 Foundation phase 4 grant (Build XCM-API) Milestone 1 / 1 delivered [Application](https://github.com/w3f/Grants-Program/pull/1817), [Delivery](https://github.com/w3f/Grant-Milestone-Delivery/pull/972)
- 👷‍♂️ Maintenance funded by Kusama treasury from October 2023 until February 2024 [Referenda link](https://kusama.polkassembly.io/referenda/277)
