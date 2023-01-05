# ParaSpell

- **Team Name:** ParaSpell✨
- **Payment Address:** 0xB7d45Ef044fD9342e4c03e28D9e9bddA2d4Fe3e1 (USDC)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2 🐤


## Project Overview :page_facing_up:
Previously delivered:
[Proposal 1 for base funding ParaSpell](https://github.com/w3f/Grants-Program/blob/3905f49d0efcd3700670fc3e13c2d92a2f84a7fa/applications/ParaSpell.md)
### Overview
XCM & XCMP related development tool with SDK and UI created for developers.

ParaSpell main advantages can be summarized in the following list:

-   ParaSpell is a platform that allows developers to use specific XCM & XCMP related tasks from a user-friendly interface.
-   ParaSpell focuses on ease of use, broad scale of use cases, and bringing XCM & XCMP utilization & documentation closer to developers.
-   ParaSpell guarantees to be a completely decentralized, open-source platform that does not collect any user data.
- ParaSpell allows other substrate projects to easily implement XCM & XCMP functionality with ParaSpell SDK

One of the ParaSpell main goals is to reduce the time necessary to create XCM calls or open HRMP channels.
Another goal is to make XCM calls as easy as possible to construct via SDK while retaining full customizability of what is transferred through XCM message and where.

![comparison](https://user-images.githubusercontent.com/55763425/198574902-1a9e1c98-9351-4f5d-894f-7e0158eabeaa.jpg)

As we can see in the figure above, the amount of details the user has to fill to transfer the XCM message is drastically reduced. As an example, users do not need to specify a specific route from origin to destination chain. These details are filled for them.

Another goal of ParaSpell is having network installation, compilation & startup done as simply as possible. This is achieved by makefile that groups commands into fewer much more intuitive commands and by network startup configuration file. Together, these two files take care of the network side, and adding new nodes into these files is intuitive. Starting the application is also very simple and done by one command. Communication between application and network is made possible with Polkadot API libraries. This can help future Parachain developers with testing.

ParaSpell focuses mainly on substrate developers. Added value comes from being user friendly SDK for simplifying development by saving time necessary to install & launch network, open HRMP channels or create XCM transfers between nodes available in network.
Another added value comes from SDK that aims to connect entire Substrate ecosystem and in future also EVM with Substrate.

Overall ParaSpell is all about developer experience.

### Project Details
ParaSpell in its current form allows developers to install all dependencies as well as a network consisting of Rococo, Pichiu(Kylin network), Bifrost & Acala nodes with one command. Launching a network is also done by one command. Once the network is installed and started ParaSpell application allows developers to open/close HRMP channels between mentioned parachains. In current progress ParaSpell already has user interface and main functionality almost finished.

The following screen allows the user to open the HRMP channels between list of parachains pulled from Rococo by API call.  
![open channel](https://user-images.githubusercontent.com/55763425/198574223-8444aff5-a3f8-4d15-bf25-0ccf345e2577.png)


Closing HRMP channels is just as simple as opening them. One button click to close the required channel.  
![close channel](https://user-images.githubusercontent.com/55763425/198574247-12a00f37-33a4-467a-aaaa-e83d913af558.png)


If the user decides to transfer funds from Relay chain to Parachain they can do so by filling following details. These required details are way faster to fill than filling a full XCM call which requires a complete route and selection of concrete token.
![relay to para](https://user-images.githubusercontent.com/55763425/198574295-30a4d124-8f72-4931-a3ee-2f3e1375d73b.png)


The opposite, but nearly the same scenario is sending tokens from Parachain to Relay chain. It is just as simple, however. 
![para to relay](https://user-images.githubusercontent.com/55763425/198574386-d3883bfe-54ba-4e74-abcc-f08995a39703.png)


The last transaction scenario is the transfer of funds between Parachain and another Parachain. 
![para to para](https://user-images.githubusercontent.com/55763425/198574413-8ef3714c-f971-4652-ab7f-b8114f8928bb.png)


-   Overview video of application is also available on Youtube  [Link to overview video](https://youtu.be/YKZEa2MaY6Q)

#### Architecture 🏗️
![screenFlow](https://user-images.githubusercontent.com/55763425/198412240-e031d877-c5d8-4952-9048-2e1256ba4469.svg)

UI is purposely designed to be as simple as possible. This guarantees, that all tasks can be done quickly and without extended searching. All necessary screens also feature notifications which will as a milestone explain be callback reactive. The loading screen is only present on the first application & network startup, once accessing the same screen after the application was loaded it will be skipped automatically. The screen serves to register necessary assets in parachain nodes. This is only required to be run once per network startup.

SDK currently handles transfers to 29 compatible Parachains (ones that have xTokens pallet) ([Beta-pre-release ParaSpell SDK](https://github.com/paraspell/sdk/tree/beta-pre-release)) and also can transfer to both Relay chains. It is easy to construct calls as is but we want to make it even easier and more developer friendly. 

#### Technology Stack  💻️
-   Vue.js
-   Node.js
-   Typescript
-   Polkadot api libraries
-   Make
-   Parachain launch
-   Substrate compatible nodes (For now Rococo, Pichiu(Kylin network), Bifrost & Acala)

### Ecosystem Fit  🌳

There are not many XCM & XCMP related development tools released currently. We aim to aid this mostly empty space and help developers to understand XCM & XCMP as the current state-of-the-art technology by providing documentation and a user interface in which they can do development tasks more easily and faster.

In Polkadot and Kusama ecosystem, there are few XCM related tools in development. For example Moonbeam XCM SDK was released only recently. We bring comparison table that compares our ParaSpell SDK to Moonbeam SDK
| Features | ParaSpell XCM SDK | Moonbeam XCM SDK |
| -----: | ----------- | ------------- |
| Number of packages user has to install | User needs to install only 1 package | User needs to install 2 packages |
| Support for Parachains | Already integrated for every with xTokens & will be integrated for all with polkadotXCM pallet (Will be basically implemented for all nodes then) Link to implementation [Beta-pre-release ParaSpell SDK](https://github.com/paraspell/sdk/tree/beta-pre-release)  | Every new node has to be added manually |
| Build pattern | Will be integrated, to be as intuitive as possible | Integrated, not as intuitive to implement however |
| Support for asset pallet operations | Will be integrated  | Not integrated |
| Support for HRMP pallet operations | Integrated users can open & close HRMP channels on their local chain (Useful feature for devs) | Not integrated |
| Support for checking details that do not change | Will be integrated & will also be covered with some error handling eg (too little ammount being sent, not sufficient for XCM transfer) | Integrated in form of small "map" for different Tokens & Node IDs |
| Support for Axelar GMP (General message passing) that will connect Substrate with EVM chains | Planned to be implemented in the future | No data |



Unlike the already mentioned "Moonbeam XCM" platform ParaSpell provides UI enhancement that uses our XCM SDK and users can try/learn technology from it. ParaSpell also includes support for all 29 Substrate Parachains ([Beta-pre-release ParaSpell SDK](https://github.com/paraspell/sdk/tree/beta-pre-release)) that have xTokens pallet compared to Moonbeam XCM to which users have to implement compatible nodes manually. ParaSpell SDK only needs one package compared to Moonbeam XCM which has total of two. Compared to Moonbeam XCM which contains only XCM calls ParaSpell also contains calls that can open or close HRMP channels. We also want to include support for Parachains that have template pallet for XCM called polkadotXCM this pallet is a little harder to work with than xTokens, even more for inexperienced developers.

Another comparison worth mentioning is UI vs Morph which is also enhancement of XCM UI Transfer tool
| Features | ParaSpell XCM UI | Morph |
| -----: | ----------- | ------------- |
| Focus: | Developers & users that wish to try XCM locally first | Users |
| Wiki: | Comprehensive Wiki explaining XCM, how to add assets to UI & Nodes and more implemented | Not implemented |
| Support for transfers: | In three different scenarios | In two scenarios |
| Support for local network configuration: | Fully implemented example network configuration that uses maintained Parachain-launch library | Not implemented |
| Support for HRMP channel opening/closing: | Fully implemented | Not implemented |

Unlike the already mentioned "Morph" platform ParaSpell focuses more on developers. ParaSpell features complete network install and startup configuration in one single command. This automatization ensures, that developers do not need to do any extra tasks when they wish to run development nodes locally. ParaSpell also allows developers to open and close HRMP channels between Parachains they connected. Like "Morph", ParaSpell can also transfer fungible tokens in three scenarios. From Parachains to Relay chain, from Relay chain to Parachains & from Parachains to Parachains.

We are currently in talks with several Parachain teams that like the idea of unified SDK for XCM transfers as much as we do. SDK that unifies XCM can be very helpful for entire ecosystem in our opinion.

Our target audiences are Web3 projects and starting/current blockchain developers.
## Team :busts_in_silhouette:

### Team members

Dušan Morháč - Student, project Core Dev. Faculty of Informatics and Information Technologies STU in Bratislava

Viktor Valaštín - Supervisor, founder of  [KodaDot](https://kodadot.xyz/). Faculty of Informatics and Information Technologies STU in Bratislava

### Contact

- **Contact Name:** Dušan Morháč
- **Contact Email:** xmorhac@stuba.sk


### Legal Structure

- **Registered Address:** Tomášovská 453/2, Kalinovo 98501, Slovak Republic
- **Registered Legal Entity:** Dušan Morháč ml.

### Team's experience

-   Dušan is the programmer & researcher behind this project and has successfully presented it at the international conference ICECET2022 held in Prague from which there is an article regarding XCMP & our project. It is published on [IEEE](https://ieeexplore.ieee.org/document/9872938). Dušan also studies Blockchain technology and had a bachelor thesis about cross-blockchain sharing from which this idea was born. Dušan is actively working on [ParaSpell](https://github.com/paraspell) full-time & have also created project called [MoonDo](https://github.com/dudo50/MoonDo) which he works on & researches during free time, research from it will be used in ParaSpell. MoonDo won second place bounty for Axelar in Moonbeam connected contracts hackathon [link](https://devpost.com/software/moondo).
-   Viktor ([@vikiival](https://twitter.com/vikiival)) is building open-source software in the Polkadot ecosystem since 2019. Viktor is also Dušan's supervisor, Co-Founder of  [KodaDot](https://kodadot.xyz/), and co-author of our XCMP ICECET2022 article publication.

### Team Code Repos

- https://github.com/paraspell
- https://github.com/dudo50/MoonDo
- https://github.com/kodadot/nft-gallery 

### Team Github Profiles 🧑‍🎓

- https://github.com/dudo50  Dušan Morháč
- https://github.com/vikiival  Viktor Valaštín

### Team LinkedIn Profiles 🧑‍🎓

- https://www.linkedin.com/in/dudo50
- https://www.linkedin.com/in/vikival

## Development Status :open_book:

[UI](https://github.com/paraspell/ui) that uses XCM SDK has it's functionality implemented already which was main goal of our first proposal. We will shift it towards new version of Vue which is state of the art during fufillment of this proposal. SDK has [beta pre-release](https://github.com/paraspell/sdk/tree/beta-pre-release) phase released, it features all 29 nodes that implement xTokens pallet, ability to transfer to & from Relay chains, ability to open & close HRMP channels.

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 6 months
- **Full-Time Equivalent (FTE):** 2 FTE
- **Total Costs:** 28 500 USD

### Milestone 1 - Improve ParaSpell UI 1/2 & ParaSpell SDK 1/3

- **Estimated duration:** 2 months ⌛️
- **FTE:**  2
- **Costs:** 9 500 USD 💰️

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | MIT |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a usage explanation in readme.md  |
| 0c. | Testing and Testing Guide | SDK Core UNIT tests will be provided for xTokens Pallet, HRMP pallet, polkadotXCM pallet|
| 0d. | Docker | Docker file that allows to test ParaSpell SDK through ParaSpell UI will be provided. |
| 1. | Create scaffold template for Web3 projects | Create template on Git for Web3 dApps to allow users to start developing and deploying in just minutes, this template will contain different libraries important for Web3 development already preinstalled. Languages planned to be used are `Typescript`. Stack that will be used is `Vue3 (Nuxt 3)`, `pnpm package manager`, `Polkadot API libraries` (Use KodaDot packages if applicable), `ParaSpell SDK`, UI will consist of basic components (address input (checks if address entered is valid), ballance input (no longer necessity to input lenghty amounts, will have sum conversions) etc.. ), wallet management (PolkadotJS, Talisman, Subwallet), all other not mentioned libraries will be mentioned in readme of template and readme will be linked to delivery. |
| 2. | Implement support for checking asset compatibility through `asset pallet`  | Each node, that has ability to check which tokens it supports should be automatically queried for this data and SDK should be able to determine compatibility based on data queried. |
| 3.a | Add support for nodes without xTokens pallet I | We will implement support for transfer scenario Parachain to Relay chain for nodes that do not have xTokens pallet but have `polkadotXCM` prebuilt template pallet. (SDK will be able to determine which pallet to use on which Parachain automatically) |
| 3.b | Add support for nodes without xTokens pallet II | We will implement support for transfer scenario Parachain to Parachain for nodes that do not have xTokens pallet but have `polkadotXCM` prebuilt template pallet. (SDK will be able to determine which pallet to use on which Parachain automatically) |
| 4. | Make SDK easier to use | Merge Parachain to Parachain & Parachain to Relay chain scenarios in SDK into one scenario that will be able to adapt based on details provided (if destination node id not provided, then assume transfer is for relay chain, also if token is compatible with relay chain), this will replace need for calling two functions for each scenario with only one function covering both scenarios eg. `send()` instead `paratopara()` & `paratorelay()`|

### Milestone 2 - Improve ParaSpell SDK 2/3

- **Estimated duration:** 2 months ⌛️
- **FTE:**  2
- **Costs:** 9 500 USD 💰️

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | MIT |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a usage explanation in readme.md  |
| 0c. | Testing and Testing Guide | SDK Core UNIT tests will be provided for pallets mentioned previously, script that checks pallets, functionality to check data that does not change, builder pattern |
| 0d. | Docker | Docker file that allows to test ParaSpell SDK through ParaSpell UI will be provided. |
| 1. | Add support for checking data that does not change | There are things that do not change, such as base token configuration (Polkadot, DOT token, 10 decimals), (Astar, ASTR, 18 decimals) This can be imported from  `@polkadot/network` library to have better support for different transfer scenarios|
| 2. | Rewrite SDK to builder pattern | Best thing we can do to support multiple pallets and make it simplier for developers would be a Builder pattern functionality would look like: `import { Builder } as ‘@paraspell/sdk’` and then building of call would be something in sence: `const call = Builder(api).from(‘bsx’).to(‘ksm’).teleportTokens(‘KSM’).addr('destinationAddr').sum(currencySum).asV3().build()`|
| 3. | Make a map of compatible <chain, pallet> | Before each SDK release there should be a script that connects to the compatible nodes, checks all relevant available pallets `xTokens`, `polkadotXCM`, `asset pallets`, `HRMP` pallets) and saves them to the map.|
| 4. | Use [turborepo](https://turborepo.org/) | Remake package into `monorepo` for easier importing and cleaner use |

### Milestone 3 - Improve ParaSpell UI 2/2 & ParaSpell SDK 3/3

- **Estimated duration:** 2 months ⌛️
- **FTE:**  2
- **Costs:** 9 500 USD 💰️

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | MIT |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a usage explanation in readme.md  |
| 0c. | Testing and Testing Guide | SDK Core UNIT tests will be provided for every scenario that SDK offers. |
| 0d. | Docker | Docker file that allows to test ParaSpell SDK through ParaSpell UI will be provided. |
| 0e. | Article | We will publish Medium article about development of SDK |
| 1. | Release new functionality | Ability to install new version of package from npm |
| 2.a | Update ParaSpell UI I | Update ParaSpell XCM UI Parachain to Parachain Scenario screen to be able to use new SDK (Add or remove some variables according to new requirements from SDK functions)  |
| 2.b | Update ParaSpell UI II | Update ParaSpell XCM UI Relay chain to Parachain Scenario screen to be able to use new SDK (Add or remove some variables according to new requirements from SDK functions)  |
| 2.c | Update ParaSpell UI III | Update ParaSpell XCM UI Parachain to Relay chain Scenario screen to be able to use new SDK (Add or remove some variables according to new requirements from SDK functions)  |
| 3. | Add comprehensive Wiki guide | We will add Wiki guide, that will specify SDK implementation to another dApps, different SDK functionalities & Guide for Parachain creators that wish to add their freshly baked node to the list of compatible nodes. |
| 4. | Use scaffold template from Milestone 1 to update UI | This will update ParaSpell UI from Vue 2 into Vue3 and nuxt. It will also be good demonstration for template usage & it will make UI more compatible with other dApps. | 
| 5. | Integrate suggestions from [evaluation](https://github.com/w3f/Grant-Milestone-Delivery/blob/1343c66d74a1078b2a30972463a614737ed8aa92/evaluations/paraspell_1_keeganquigley.md) | Integrate suggestions regarding Wiki, module for asset conversions to not need to write so many 0s & replace button text `Log in with:` with account name once logged in | 

## Future Plans 🔭

Once everything will be implemented according to the proposed plan application will still be under constant improvement as technology will progress. For example, once the XCMP protocol will be released we wish to deprecate the HRMP protocol we currently use for channels.

In a long run, we also want to improve design of the UI, add new features that can be useful for developers and support for new nodes. 

Project goal is that SDK will serve dApp developers and UI will teach new substrate developers to use XCM and will serve to existing substrate developers to test their freshly baked Parachains.
## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Personal recommendation

##### Project achievements in chronological order  ⌛️

- 📙 Article about project created & presented on international conference ICECET2022 held in Prague (450 out of 1000+ articles accepted) Link to IEEE publication -  [IEEE - Sharing Fungible Assets Across Polkadot Paraverse](https://ieeexplore.ieee.org/document/9872938/)
- 🥈  2nd Prize, Build a XCM related Tool for Moonbeam - Polkadot North America Hackathon  [Hackathon entry](https://devpost.com/software/polkachange-cross-blockchain-transfer-tool)
- 🥉  3rd Prize, EVM+ DApp for aUSD yield - Polkadot North America Hackathon  [Hackathon entry](https://devpost.com/software/polkachange-cross-blockchain-transfer-tool)
- 🎈 Web 3 Foundation base grant funded [link](https://github.com/dudo50/Grants-Program/blob/d182e10ecbd7705aee07edc5f7aa0085d07188e5/applications/ParaSpell.md), [link2](https://medium.com/web3foundation/web3-foundation-grants-wave-15-recipients-5ac4e6406485).
- 🥈 Second place bounty in Moonbeam connected contracts Hackathon - Build Cross-chain application with Axelar [Link to hackathon post](https://devpost.com/software/moondo)
