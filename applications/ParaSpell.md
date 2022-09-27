# W3F Grant Proposal

-   **Project Name:**  ParaSpell
-   **Team Name:**  ParaSpell
-   **Payment Address:**  0xa085190c859eAe92bCCED9CE05b10DDb363FE5Ea (USDC)
-   **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):**  1 🐣

## Project Overview  📄

### Overview 💡

XCM & XCMP related development tool for developers.

ParaSpell main advantages can be summarized in the following list:
- ParaSpell is a platform that allows developers to use specific XCM & XCMP related tasks from a user-friendly interface. 
- ParaSpell focuses on ease of use, broad scale of use cases, and bringing XCM & XCMP utilization & documentation closer to developers. 
- ParaSpell guarantees to be a completely decentralized, open-source platform that does not collect any user data. 

One of the ParaSpell main goals is to reduce the time necessary to create XCM calls or open HRMP channels.

[
![Opening channel screen](https://raw.githubusercontent.com/dudo50/Polkachange/main/img/comparisonImg.jpg)
](https://raw.githubusercontent.com/dudo50/Polkachange/main/img/comparisonImg.jpg)

As we can see in the figure above, the amount of details the user has to fill to transfer the XCM message is drastically reduced. As an example, users do not need to specify a specific route from origin to destination chain. These details are filled for them. 

Another goal of ParaSpell is having network installation, compilation & startup done as simply as possible. This is achieved by makefile that groups commands into fewer much more intuitive commands and by network startup configuration file. Together, these two files take care of the network side, and adding new nodes into these files is intuitive.  Starting the application is also very simple and done by one command. Communication between application and network is made possible with Polkadot API libraries.

ParaSpell focuses mainly on substrate developers. Added value comes from being user friendly SDK for simplifying development by saving time necessary to install & launch network, open HRMP channels or create XCM transfers between nodes available in network.

Overall ParaSpell is all about developer experience.

### Project Details 🎯

ParaSpell in its current form allows developers to install all dependencies as well as a network consisting of Rococo, Pichiu(Kylin network), Bifrost & Acala nodes with one command. Launching a network is also done by one command. Once the network is installed and started ParaSpell application allows developers to open/close HRMP channels between mentioned parachains. In current progress ParaSpell already has user interface and main functionality almost finished.

The following screen allows the user to open the HRMP channels between list of parachains pulled from Rococo by API call.
[
![Opening channel screen](https://raw.githubusercontent.com/dudo50/Polkachange/main/img/Open%20channel.png)
](https://raw.githubusercontent.com/dudo50/Polkachange/main/img/Open%20channel.png)

Closing HRMP channels is just as simple as opening them. One button click to close the required channel.
[
![Closing channel screen](https://raw.githubusercontent.com/dudo50/Polkachange/main/img/close%20channel.png)
](https://raw.githubusercontent.com/dudo50/Polkachange/main/img/close%20channel.png)

If the user decides to transfer funds from Relay chain to Parachain they can do so by filling following details. These required details are way faster to fill than filling a full XCM call which requires a complete route and selection of concrete token.
[
![Relay to para screen](https://raw.githubusercontent.com/dudo50/Polkachange/main/img/relay%20to%20para.png)
](https://raw.githubusercontent.com/dudo50/Polkachange/main/img/relay%20to%20para.png)

The opposite, but nearly the same scenario is sending tokens from Parachain to Relay chain. It is just as simple, however.
[
![Para to relay screen](https://raw.githubusercontent.com/dudo50/Polkachange/main/img/para%20to%20relay.png)
](https://raw.githubusercontent.com/dudo50/Polkachange/main/img/para%20to%20relay.png)

The last transaction scenario is the transfer of funds between Parachain and another Parachain.
[
![Para to para screen](https://raw.githubusercontent.com/dudo50/Polkachange/main/img/para%20to%20para.png)
](https://raw.githubusercontent.com/dudo50/Polkachange/main/img/para%20to%20para.png)


- Overview video of application is also available on Youtube
[Link to overview video](https://youtu.be/YKZEa2MaY6Q)

#### Architecture 🏗
[
![Diagram](https://raw.githubusercontent.com/dudo50/Polkachange/main/img/screenFlow.svg)
](https://raw.githubusercontent.com/dudo50/Polkachange/main/img/screenFlow.svg)

Application is purposely designed to be as simple as possible. This guarantees, that all tasks can be done quickly and without extended searching. All necessary screens also feature notifications which will as a milestone explain be callback reactive. The loading screen is only present on the first application & network startup, once accessing the same screen after the application was loaded it will be skipped automatically. The screen serves to register necessary assets in parachain nodes. This is only required to be run once per network startup.

#### Technology Stack 💻

-   Vue.js
-   Node.js
-   Typescript
-  Polkadot api libraries
-  Make
- Polkadot launch
-  Substrate compatible nodes (For now Rococo, Pichiu(Kylin network), Bifrost & Acala)

### Ecosystem Fit 🌿

There are not many XCM & XCMP related development tools released currently. We aim to aid this mostly empty space and help developers to understand XCM & XCMP as the current state-of-the-art technology by providing documentation and a user interface in which they can do development tasks more easily and faster. 

In Polkadot and Kusama ecosystem, there are few XCM & XCMP related Dapps in development. These rather focus on standard users mostly. One of mentioned type is called "Morph". 

Unlike the already mentioned "Morph" platform ParaSpell focuses more on developers. ParaSpell features complete network install and startup configuration in one single command. This automatization ensures, that developers do not need to do any extra tasks when they wish to run development nodes locally. ParaSpell also allows developers to open and close HRMP channels between Parachains they connected. Like "Morph", ParaSpell can also transfer fungible tokens in three scenarios. From Parachains to Relay chain, from Relay chain to Parachains & from Parachains to Parachains.

Our target audiences can be Web3 projects & starting/current blockchain developers.

## Team  👥

### Team members (In order of joining time)

Dušan Morháč - Student, project Core Dev. Faculty of Informatics and Information Technologies STU in Bratislava

Viktor Valaštín - Supervisor, founder of [KodaDot](https://kodadot.xyz/). Faculty of Informatics and Information Technologies STU in Bratislava

### Contact 📞

-   **Contact Name:**  Dušan Morháč
-   **Contact Email:**  [xmorhac@stuba.sk](mailto:xmorhac@stuba.sk)

### Legal Structure

-   **Registered Address:**  No legal structure yet.
-   **Registered Legal Entity:**  No legal structure yet.

### Team's experience 🔎

- Dušan is the programmer behind this project and has successfully presented it at the international conference ICECET2022 held in Prague from which there is an article regarding XCMP & our project. It will soon be published on IEEE and a link will be provided. Dušan also studies blockchain technology and had a bachelor thesis about cross-blockchain sharing from which this idea was born.
- Viktor ([@vikiival](https://twitter.com/vikiival)) is building open-source software in the Polkadot ecosystem since 2019. Viktor is also Dušan's supervisor, Co-Founder of [KodaDot](https://kodadot.xyz/), and co-author of our XCMP ICECET2022 article publication.

### Team Code Repos 📚

-   [https://github.com/dudo50/ParaSpell](https://github.com/dudo50/ParaSpell)
-   [https://github.com/kodadot/nft-gallery](https://github.com/kodadot/nft-gallery)

#### Team github accounts 🧑‍💻
-   [https://github.com/dudo50](https://github.com/dudo50)  Dušan Morháč
-   [https://github.com/vikiival](https://github.com/vikiival)  Viktor Valaštín

### Team LinkedIn Profiles 🧑‍🎓

-   [https://www.linkedin.com/in/dudo50](https://www.linkedin.com/in/dudo50)
-   [https://www.linkedin.com/in/vikival](https://www.linkedin.com/in/vikival)

## Development Status  📖

-   [https://github.com/dudo50/ParaSpell](https://github.com/dudo50/ParaSpell) This is the repo for ParaSpell and there is already a user interface that can open HRMP channels & transfer fungible tokens between Acala and Rococo. Wallet support from milestone was recently implemented, it only needs to be added to calls.

## Development Roadmap  🔩🛠

### Overview

-   **Total Estimated Duration:**  2 months ⌛️
-   **Full-Time Equivalent (FTE):**  1 FTE
-   **Total Costs:**   10,000 USD 💰

### Milestone 1 — Cross-blockchain application for developers

-   **Estimated duration:**  2 months ⌛️
-   **FTE:**  1 FTE
-   **Costs:**  10,000 USD 💰

| Number | Deliverable                                             | Specification                                                                                                                                                                           |
|--------|---------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 0a.    | License                                                 | MIT                                                                                                                                                                                     |
| 0b.    | Documentation                                           | Inline documentation of code, as well as startup<br>configuration with all necessary commands, included<br>in repository                                                                  |
| 0c.    | Testing Guide                                           | Core functionality & user guide will be covered in <br>repository documentation                                                                                                         |
| 0d.    | Docker                                                  | Frontend Docker file will be ready                                                                                                                                                                                       |
| 0e.    | Article                                                 | Soon to be released on IEEE + Medium article about development of ParaSpell                                                                                                                                                               |
| 1.     | Wallet login                                            | Developers can use their Polkadot js<br>extension wallets to execute transactions XCM<br>from their accounts.                                                                       |
| 2.a     | Full working <br>fund transfer<br>scenario 1            | Fully working transaction<br>scenario 1 - Relay chain to Parachains                                                                                                                     |
| 2.b     | Fully working <br>fund transfer<br>scenario 2            | Fully working transaction<br>scenario 2 - Parachains to Relay chain                                                                                                                          |
| 2.c     | Fully working <br>fund transfer<br>scenario 3            | Fully working transaction <br>scenario 3 - Parachain to Parachain                                                                                                                 |                                                                                                                   |
| 3.a     | Callback support 1                                        | Added callback data support so developers/users<br>can see information about their XCM transactions<br>from UI and in real-time.                                                           |
| 3.b     | Callback support 2                                        | Added callback data support so developers/users<br>can see information about HRMP channel calls<br>from UI and in real-time.                                                           |
| 4.     | ParaSpell SDK                                       | Move calls to separate NPM library                                                                                                                                               |
| 5.     | Guide to add new<br>nodes to application<br>and network | Simplified and user-friendly wiki/guide for <br>users to understand how to add new nodes to <br>network startup configuration as well as to<br>add/understand calls used in application |


## Future Plans 🔭

Once everything will be implemented according to the proposed plan application will still be under constant improvement as technology will progress. For example, once the XCMP protocol will be released we wish to deprecate the HRMP protocol we currently use for channels.

In a long run, we also want to improve design, add new features that can be useful for developers, support for new nodes, and ability to add a new node from the user interface.

## Additional Information  ➕

**How did you hear about the Grants Program?**  Personal recommendation

**About project success so far:**
- Project article was accepted on international conference ICECET2022 ( only 450 out of 1000+ articles got accepted)
[Link to conference physical program - Article 862 ](http://www.icecet.com/program_P.pdf)


- Project won 🥈 second place bounty at Polkadot North America Hackaton in category "Build an XCM Related Tool for Moonbeam"  
[Link to moonbeam winner announcement twitter post](
https://twitter.com/MoonbeamNetwork/status/1555654398658977792)
[Link to hackaton entry post](https://devpost.com/software/polkachange-cross-blockchain-transfer-tool)
