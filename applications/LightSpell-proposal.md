# LightSpell XCM API by ParaSpell✨

- **Team Name:** ParaSpell✨
- **Payment Address:** 0xB7d45Ef044fD9342e4c03e28D9e9bddA2d4Fe3e1 (USDC)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 1 🐣


## Project Overview :page_facing_up:

Previously completed grants:
- [Phase 1](https://github.com/w3f/Grants-Program/pull/1118)
- [Phase 2](https://github.com/w3f/Grants-Program/pull/1245)
- [Phase 3](https://github.com/w3f/Grants-Program/pull/1589)

What is ParaSpell:
ParaSpell is an XCM & XCMP Developer tool meant to ease the integration of cross-chain functionality into dApps. As we have learnt by now, cross-chain experience between Parachains can be very diverse. ParaSpell means to unify this experience by doing all the research for developers. We have wrapped all XCM pallets from compatible nodes into simple patterns from which it is easy to create XCM calls. As an example, we provide the image below.


![img1](https://user-images.githubusercontent.com/55763425/218987451-2bfc9526-8f2b-4477-8c42-8c70cbcb6ec4.jpg)

In this image, we can see, that ParaSpell saves much time for developers. Just one call can contain multiple lines of JSON which would otherwise have to be integrated manually by the developer. ParaSpell does it in marginally fewer lines and hides the complex logic of building messages which ensures, that messages are constructed correctly. This call in the end results in the following lengthy extrinsic:

![img2](https://user-images.githubusercontent.com/55763425/218987583-f5fb10b2-2e0c-4f36-b01c-0d610deab1c6.jpg)

The following extrinsic can be subscribed into and we can check for its events on the front end. ParaSpell provides the front end for testing XCM transactions and XCM called [UI-V2](https://github.com/paraspell/ui-v2). This UI is also deployed on Netlify so users only have to run the local network to start testing. UI also provides the ability to open or close HRMP channels or test out XYK pool functionality that was implemented in collaboration with the HydraDX team. In the picture below we provide an overview of the UI.
<img width="1654" alt="Screenshot 2023-02-15 at 10 36 01" src="https://user-images.githubusercontent.com/55763425/218989950-acb681e3-b511-452b-bc3a-c9e5049f7dce.png">


### Overview 🎨

ParaSpell is split into three main repositories at the moment and one new is being added soon:

- [XCM API - TBA](): Meant to provide much faster response than integrating XCM SDK as well as being easier to integrate than XCM-SDK (No install needed) 
- [XCM SDK](https://github.com/paraspell/xcm-sdk): Meant to unify cross-chain experience on Substrate. Can serve any dApp developer that wishes to integrate XCM or other pallets support for they app.
- [UI-V2](https://github.com/paraspell/ui-v2): Allows for launching local network and testing XCM or HRMP channels across that local network
- [Docs](https://github.com/paraspell/docs): Extensive documentary for overview of ParaSpell, guide for SDK and UI



#### SDK
This SDK currently support 46 compatible XCM nodes.  They can transfer XCM messages in three different scenarios. 
- Parachain to Parachain - HRMP
- Parachain to Relay chain - UMP
- Relay chain to Parachain - DMP

SDK contains many useful features that allow for easier inntegration:
-  Builder pattern implementation, easy to construct XCM calls, much more used recently for simplicity of implementation.

- Suggestions, SDK contains TYPES that help to guide developer through integration. For example he get's compatible nodes suggested.
![1_59xApnboumYhzuRHKx60TA](https://user-images.githubusercontent.com/55763425/219314223-79c31085-2e90-4dc7-ad51-da96de730ea0.png)

- Console printouts, SDK allows for printing into console so developer can alway check if call they constructed is correct.
![1_2KT6Z1rxxprmE03XWYY-HA](https://user-images.githubusercontent.com/55763425/219314235-1da52511-b4e8-4a41-bdaa-04fa6a9e8a48.png)

- Exporting registered assets for each compatible node in many useful functions

- Exporting supported XCM pallets for each compatible node in useful functions

And more.. 

#### UI-V2
UI is used as testing tool for Parachain developers, they can simply add their node into network and test it with HRMP channels as well as XCM transfers. UI also allows dApp developers to test and learn XCM before integrating it from our SDK.

UI is made to be as simple to use as possible. It is now also deployed on netlify so developers only have to start local network from configuration file provided by ParaSpell which starts network of Relay chain and 3 different Parachains (Bifrost,Karura & Pichiu)

Below are some examples of UI with running network:
<img width="1341" alt="Screenshot 2023-02-16 at 13 31 06" src="https://user-images.githubusercontent.com/55763425/219366458-8873418e-9487-4762-8327-56c3294accdd.png">

Above we can see open/ close channel screen. It is simple to work with and intuitive. Nodes are pulled from relay chain by query so if network is not running you cannot see any nodes.

<img width="1389" alt="Screenshot 2023-02-16 at 13 31 20" src="https://user-images.githubusercontent.com/55763425/219366638-38ebcdd7-5ff6-4507-8209-fc7f3ccac348.png">

Above we can observe, that UI contains simple Wallet login with test accounts.

<img width="1389" alt="Screenshot 2023-02-16 at 13 31 33" src="https://user-images.githubusercontent.com/55763425/219366771-be566565-8bf1-477b-b7c8-3eacec6f63a0.png">

Above we can see XCM screen which is also very simple to navigate and nodes are pulled from relay chain by query. 

#### Docs
Docs contain important information regarding SDK, UI and other repositories that are in ParaSpell or ParaSpell contributed to / collaborated with.
The key areas are:
- Introduction
<img width="1530" alt="Screenshot 2023-02-16 at 13 44 58" src="https://user-images.githubusercontent.com/55763425/219368826-2bb5474f-a76f-4828-be15-c3274d9ae10a.png">
- Guide on importing SDK
<img width="1530" alt="Screenshot 2023-02-16 at 13 45 09" src="https://user-images.githubusercontent.com/55763425/219368879-8bd4fd5a-a1f5-4417-8620-d8b279c99733.png">

- Guide on launching local network and UI
<img width="1530" alt="Screenshot 2023-02-16 at 13 48 43" src="https://user-images.githubusercontent.com/55763425/219369125-ce0756d7-49ef-437e-98b0-2336aa250137.png">


- Guide on executing operations in UI
<img width="1530" alt="Screenshot 2023-02-16 at 13 45 24" src="https://user-images.githubusercontent.com/55763425/219368943-4115808b-1322-4551-b03a-b693bec285a2.png">

- Guide on implementing SDK
<img width="1530" alt="Screenshot 2023-02-16 at 13 46 01" src="https://user-images.githubusercontent.com/55763425/219369060-1c0c1076-65e5-4997-a1c6-b99da9f33bac.png">


- Important links
<img width="1530" alt="Screenshot 2023-02-16 at 13 45 30" src="https://user-images.githubusercontent.com/55763425/219369013-e147d239-28a2-4701-9c16-2614b975d210.png">

#### Architecture 🏗️
##### Old
The old design had SDK integrated into dApp:

![taskFlow](https://user-images.githubusercontent.com/55763425/198412240-e031d877-c5d8-4952-9048-2e1256ba4469.svg)

UI is purposely designed to be as simple as possible. This guarantees, that all tasks can be done quickly and without extended searching. All necessary screens also feature notifications which will as a milestone explain be callback reactive. The loading screen is only present on the first application & network startup, once accessing the same screen after the application was loaded it will be skipped automatically. The screen serves to register necessary assets in parachain nodes. This is only required to be run once per network startup.

SDK currently handles transfers to 46 compatible Parachains and also can transfer to both Relay chains.

##### New
In the new design with XCM API, there is no need for integrating XCM SDK. There is only a need to send the request. No more installing packages. Works way faster and offloads dApp from heavy computing to generate calls.
![taskFlowNew](https://user-images.githubusercontent.com/55763425/247828546-b16e1a8b-c16d-462b-856a-2546fa1dee00.png)

#### Technology Stack  💻️
-   Vue.js
-   Node.js
-   Typescript
-   Polkadot api libraries
-   Make
-   Parachain launch
-   Substrate compatible nodes (For now Rococo, Pichiu(Kylin network), Bifrost & Acala)
-   Nest.js

### Ecosystem Fit  🌳

#### XCM API
As mentioned in a tweet from Alice&Bob, we need Chain APIs to put XCM on steroids - [link](https://twitter.com/alice_und_bob/status/1664564442456109057?cxt=HHwWgsC9pdGi3JkuAAAA). We aim to achieve this by utilizing the XCM-SDK technology we built previously. Using XCM API compared to implementing XCM SDK into dApp can bring three main benefits:
- Calls are generated much quicker
- API is much simpler to implement than SDK 
- No need to install anything (Comes with the benefit of saving space and without issues with dependencies)

Why we chose NestJS for XCM API:
By choosing Nest.js as our backend HTTP REST API framework, we can harness the power of Node.js, leverage TypeScript's benefits, ensure maintainability through its modular architecture, and take advantage of its extensive community support. This will enable us to build a reliable, scalable, and well-documented XCM API that seamlessly integrates with the existing XCM SDK. In addition, Nest.js offers a powerful code generation feature that allows us to quickly scaffold boilerplate code for controllers, services, modules, and more. By utilizing the Nest.js code generator, we can significantly reduce development time and effort, ensuring rapid prototyping and efficient implementation of the XCM API endpoints. Compared to other TypeScript frameworks, Nest.js stands out with its modular architecture, seamless integration with Node.js, and strong community support, offering developers a scalable and maintainable solution.

#### XCM SDK

There are not many XCM & XCMP-related development tools released currently. We aim to aid this mostly empty space and help developers to understand XCM & XCMP as the current state-of-the-art technology by providing documentation and a user interface in which they can do development tasks more easily and faster.

In Polkadot and Kusama ecosystems, there are few XCM-related tools in development. For example, Moonbeam XCM SDK was released only recently. We bring a comparison table that compares our ParaSpell SDK to Moonbeam SDK
| Features | ParaSpell XCM SDK | Moonbeam XCM SDK |
| -----: | ----------- | ------------- |
| Number of packages user has to install | User needs to install only 1 package | User needs to install 2 packages |
| Support for Parachains | Already integrated for every XCM compatible pallet | Every new node has to be added manually by user |
| Build pattern | Integrated as intuitive as possible | Integrated, not as intuitive to implement however |
| Support for asset pallet operations | Integrated  | Not integrated |
| Support for HRMP pallet operations | Integrated users can open & close HRMP channels on their local chain (Useful feature for devs) | Not integrated |
| Support for checking details that do not change | Integrated & also be covered with some error handling eg (too little amount being sent, not sufficient for XCM transfer) | Integrated in the form of a small "map" for different Tokens & Node IDs |
| Support for Axelar GMP (General message passing) that will connect Substrate with EVM chains | Planned to be implemented in the future | No data |



Unlike the already mentioned "Moonbeam XCM" platform ParaSpell provides UI enhancement that uses our XCM SDK and users can try/learn technology from it. ParaSpell also includes support for 46 Substrate Parachains that have XCM pallets compared to Moonbeam XCM to which users have to implement compatible nodes manually. ParaSpell SDK only needs one package compared to Moonbeam XCM which has a total of two. Compared to Moonbeam XCM which contains only XCM calls ParaSpell also contains calls that can open or close HRMP channels. We also include support for Parachains that have a template pallet for XCM called polkadotXCM this pallet is a little harder to work with than xTokens, even more for inexperienced developers. On top of that, this proposal aims to improve ParaSpell even further with introduction of LightSpell XCM API. We have not yet seen any XCM-API proposals or project and we aim to solve this gap as first team.

Another comparison worth mentioning is UI vs Morph which is also an enhancement of the XCM UI Transfer tool
| Features | ParaSpell XCM UI | Morph |
| -----: | ----------- | ------------- |
| Focus: | Developers & users that wish to try XCM locally first | Users |
| Wiki: | Comprehensive Wiki explaining XCM, how to add assets to UI & Nodes and more implemented | Not implemented |
| Support for transfers: | In three different scenarios | In two scenarios |
| Support for local network configuration: | Fully implemented example network configuration that uses maintained Parachain-launch library | Not implemented |
| Support for HRMP channel opening/closing: | Fully implemented | Not implemented |

Unlike the already mentioned "Morph" platform ParaSpell focuses more on developers. ParaSpell features complete network install and startup configuration in one single command. This automatization ensures, that developers do not need to do any extra tasks when they wish to run development nodes locally. ParaSpell also allows developers to open and close HRMP channels between Parachains they connected. Like "Morph", ParaSpell can also transfer fungible tokens in three scenarios. From Parachains to Relay chain, from Relay chain to Parachains & from Parachains to Parachains.

We are currently in talks with several Parachain teams that like the idea of unified SDK for XCM transfers as much as we do. SDK that unifies XCM can be very helpful for the entire ecosystem in our opinion. With the introduction of XCM API, this improves even further.

Our target audiences are Web3 projects and starting/current blockchain developers.
## Team :busts_in_silhouette:

### Team members

Dušan Morháč - Student, project Founder & Core Dev. Faculty of Informatics and Information Technologies STU in Bratislava

Michael Absolon - Student, XCM SDK & XCM API Core Dev. Faculty of Informatics and Information Technologies STU in Bratislava

### Contact

- **Contact Name:** Dušan Morháč
- **Contact Email:** dudo.morhac@gmail.com


### Legal Structure

- **Registered Address:** TBA later (Switching to the company)
- **Registered Legal Entity:** TBA later (Switching to the company)

### Team's experience
-  Dušan is the founder & researcher behind this project and he has successfully presented it at the international conference ICECET2022 held in Prague from which there is an article regarding XCMP & ParaSpell project. It is published by IEEE [link](https://ieeexplore.ieee.org/document/9872938). He also successfully presented it at ICBC 2023 conference held in Dubai. Dušan also studies Blockchain technology and had a bachelor's thesis about cross-blockchain sharing from which this idea was born. Dušan continues research on this idea in his Master's thesis. He is actively working on ParaSpell https://github.com/paraspell full-time & has also participated in other ecosystem projects. Recently he attended Polkadot Blockchain Academy 2023 in Buenos Aires which gave him a lot of insight into the ecosystem and he also graduated from the academy successfully. Here is NFT that was minted as a certificate by Parity - [link](https://singular.app/collectibles/statemine/20/12)
<img src="https://user-images.githubusercontent.com/55763425/223093342-7d947a57-b114-4260-8999-fd4506adc76e.jpg" width="380" height="280">

- Michael is a dedicated TypeScript developer with 2 years of full-time experience in the Web2 sphere. Michael's expertise in this field was further solidified in 2019 when he won first place in the Junior Internet Web competition for his online multiplayer game, which was written in JavaScript. In addition to his professional background, Michael also achieved a bachelor's degree in the same computer science University as Dušan and he is currently pursuing a master's degree which focuses on Blockchain. His passion for technology led him to explore Blockchain technology in his free time. He was recently offered the opportunity to work on ParaSpell XCM SDK with Dušan and he delivered many of the key features SDK now offers.

### Team Code Repos

- https://github.com/paraspell/xcm-api
- https://github.com/paraspell/xcm-sdk
- https://github.com/paraspell/ui-v2
- https://github.com/paraspell/docs

### Team Github Profiles 🧑‍🎓

- https://github.com/dudo50 Dušan Morháč
- https://github.com/michaeldev5 Michael Absolon

### Team LinkedIn Profiles 🧑‍🎓

- https://www.linkedin.com/in/dudo50/
- https://www.linkedin.com/in/michael--absolon/

## Development Status :open_book:

The new [XCM-API](https://github.com/paraspell/xcm-api) is in development and we are currently searching for the fastest server with the lowest cost requirements.

[SDK](https://github.com/paraspell/xcm-sdk) is currently released into the main and is in a version that is fully operable. There are still some tweaks we plan to add and make, they are not part of this grant however. [UI-V2](https://github.com/paraspell/ui-v2) currently runs on state-of-the-art technology version VueJS 3 and the newest version of Nuxt. It deprecated V1 and introduced a much smoother interface and modules brought from the sub-scaffold template ParaSpell contributed to. [Docs](https://github.com/paraspell/docs) are currently in ready state but there is still some tweaking to do.

**Sidenote**: We have recently developed an article about Polkadot & Paraspell called Enhancing XCMP Interoperability Across Polkadot Paraverse and it was accepted to the International IEEE BCCA 2023 conference held in Kuwait.

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 2 months
- **Full-Time Equivalent (FTE):** 1 FTE
- **Total Costs:** 10 000 USD

### Milestone 1 - Create LightSpell⚡️: XCM-API

- **Estimated duration:** 2 months ⌛️
- **FTE:**  1
- **Costs:** 10 000 USD 💰️

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | MIT |
| 0b. | Documentation | We will provide both readme.md and official docs documentation  |
| 0c. | Testing and Testing Guide | Testing guide will be mentioned in official docs & core unit tests will be provided |
| 0e. | Create Medium article about development of LightSpell | Add article covering new features & improvements brought with LightSpell |
| 1.a | Integrate API for XCM functionality | Use Nest.js to integrate core XCM SDK functionality to send XCM messages |
| 1.b | Integrate API for Asset functionality | Use Nest.js to integrate core XCM SDK functionality to do Asset operations |
| 1.c | Integrate API for XCM Pallets functionality | Use Nest.js to integrate core XCM SDK functionality to query XCM Pallets of different Parachains |
| 1.d | Integrate API for HRMP functionality | Use Nest.js to integrate core XCM SDK functionality to open/close HRMP channels |
| 2. | Integrate token authentification | Integrate token authentification with limited requests to remove the possibility of DDOS (Bigger request limit can be requested for free via email provided in docs)|
| 3.a | Add core Integration tests  | Add core Integration tests to ensure everything is working together as expected |
| 3.b | Add core Endpoint (e2e) tests  | Add core endpoint tests to let the user try to use API without writing any code and also to demonstrate if API works |
| 4. | Integrate LightSpell into ParaSpell docs | Add comprehensive guide for every feature that API will offer [link](https://paraspell.github.io/docs/api/TBA.html) |

## Future Plans 🔭

Once everything will be implemented according to the proposed plan application will still be under constant improvement as technology will progress. For example, once the XCMP protocol will be released we wish to deprecate the HRMP protocol we currently use for channels.

The project goal is that XCM-SDK & XCM-API will serve dApp developers and UI will teach new substrate developers to use XCM and will serve existing substrate developers to test their freshly baked Parachains.

The newly added XCM-API will simplify XCM-SDK integration and will be much faster than integrating XCM-SDK into dAPP directly. Both repositories will remain dependent on  each other. Further maintenance funding for servers and keeping XCM API up to date will be requested from Polkadot treasury.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Personal recommendation

##### Project achievements in chronological order  ⌛️

- 📙 Article about the project created & presented at international conference ICECET2022 held in Prague (450 out of 1000+ articles accepted) Link to IEEE publication - [IEEE Sharing Fungible Assets Across Polkadot Paraverse](https://ieeexplore.ieee.org/document/9872938/)
- 🥈 2nd Prize, Build an XCM-related Tool for Moonbeam - Polkadot North America Hackathon [Hackathon entry](https://devpost.com/software/polkachange-cross-blockchain-transfer-tool)
- 🥉 3rd Prize, EVM+ DApp for aUSD yield - Polkadot North America Hackathon [Hackathon entry](https://devpost.com/software/polkachange-cross-blockchain-transfer-tool)
- 🎈 Web 3 Foundation base grant [Application](https://github.com/w3f/Grants-Program/pull/1118), [Delivery](https://github.com/w3f/Grant-Milestone-Delivery/pull/584)
- 🐍 [Basilisk](https://bsx.fi/) treasury proposal 2 / 2 Approved [link](https://basilisk.subsquare.io/treasury/proposal/2), [link2](https://basilisk.subsquare.io/treasury/proposal/4)
- 🔭 Web 3 Foundation phase 2 grant Milestone 3 / 3 delivered [Application](https://github.com/w3f/Grants-Program/pull/1245), [Delivery1](https://github.com/w3f/Grant-Milestone-Delivery/pull/670), [Delivery 2 & 3](https://github.com/w3f/Grant-Milestone-Delivery/pull/715) 
- 📕  Article about Polkadot & ParaSpell created & accepted to be presented at international cross-chain conference IEEE ICBC 2023 held in Dubai [links TBA]
- 💼 Kusama Treasury Funding proposal number 1 - Upgrade SDK, [Application](https://kusama.subsquare.io/referenda/referendum/123s), [Delivery](https://docs.google.com/document/d/1lMY_8EtQ41IX7Zn9VIMAiG1k3oLYN0h_lVj8dWDwZ_k/edit?usp=sharing)
- 🏗️ Web 3  Foundation phase 3 grant (Make SDK better) Milestone 1 / 1 delivered [Application](https://github.com/w3f/Grants-Program/pull/1589), [Delivery](https://github.com/w3f/Grant-Milestone-Delivery/pull/836)
- 📘 Article about Polkadot & ParaSpell created & accepted to be presented at international cross-chain conference IEEE BCCA 2023 held in Kuwait [links TBA]
