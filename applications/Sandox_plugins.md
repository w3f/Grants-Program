# SanDOx  

- **Team Name:** TRADELINK TECHNOLOGIES OÜ
- **Payment Address:** Polkadot (Statemint): 13bUsemARThdmyXNEpvx2t8A5fNo4ttheSRcsXUWgRpqzjfH (USDT)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

This project is a follow-up grant of the [SanDOx IDE](https://github.com/w3f/Grants-Program/pull/1694), that was first developed in response to the [Alternative javascript console for Polkadot JS API RFP](https://github.com/w3f/Grants-Program/blob/master/docs/RFPs/alternative-polkadot-js-api-console.md).

### Overview

SanDOx is an integrated development environment, that is thought to leverage Polkadot development process by providing ecosystem developers with right and convenient components and tools.
Under the first grant from the W3F we have delivered the main skeleton of the IDE, a feature-rich JS code editor, compilation capabilities and integration with the Polkadot.js library.

We aim to fulfill the [Browser based IDE for ink! Smart Contracts RFP](https://github.com/w3f/Grants-Program/blob/master/docs/RFPs/IDE_for_ink_Smart_Contracts.md) in a future work, but the initial idea of this entire grant is to add a plug-in feature to the SanDOx IDE, so all next improvements, feature add-ons and networks support could be added by our or any other interested team in a form of a plug-in. The Ink! support plug-in, as well as “Polkadot” plug-in with extrinsics & RPC calls, chain state and etc. will be offered in the future follow-up grant application by our team. 

### Project Details

Here're short demo videos, that show current progress on the project:  
The SanDOx IDE app skeleton with some basic features:  
[![ms1 preview](http://i3.ytimg.com/vi/42MsyZh1HRg/hqdefault.jpg)](https://youtu.be/42MsyZh1HRg)

“Project” panel and compiling feature:  
[![2 Demo video](https://img.youtube.com/vi/jkzKwSGnxCg/hqdefault.jpg)](https://youtu.be/jkzKwSGnxCg)

Themes, settings and project local storage:  
[![3 Demo video](http://i3.ytimg.com/vi/feuukkLKpY0/hqdefault.jpg)](https://youtu.be/feuukkLKpY0) 

SanDOx IDE currently has “project” and “console” panels and we will implement an ability to add new panels in the form of plug-ins.
Supposed base list of panels:  
**Project** – shows project structure with catalogues and files - **implemented**.  
**Console** –displays results of the user’s code, “console” native object methods (log, warn, info, etc.) - **implemented**.  
**Network** – network choice and connection. A user could switch between Polkadot ecosystem parachains, connection code will be generated automatically - **to be developed**.  
**Examples** – examples library. Will include different case examples, which could be imported and run - **to be developed**.  
**Find** – search panel. Allows search of documents in a project and make multi autocorrect - **to be developed**.

### Ecosystem Fit

Polkadot, with its vibrant community of nearly 2500 monthly active developers in 2022, has emerged as a leading force in the blockchain space. SanDOx is thought of as a community-used tool that addresses the specific needs of developers within the Polkadot ecosystem. By allowing the development of dedicated features or common tools, the IDE aims to foster collaboration and efficiency across diverse projects within the community.

## Team :busts_in_silhouette:

### Team members
- Sander Bogdanov, CBDO at TRADELINK TECHNOLOGIES OÜ;
- Andrey Lugovskoy, CTO and senior fullstack software developer at TRADELINK TECHNOLOGIES OÜ;
- Joseph (Afriyie) Attakorah, middle frontend developer at TRADELINK TECHNOLOGIES OÜ;
- Alena Balakina, lead QA at TRADELINK TECHNOLOGIES OÜ.

### Contact

- **Contact Name:** Sander Bogdanov
- **Contact Email:** johngalt@tradelink.pro
- **Website:** https://tradelink.pro/

### Legal Structure

- **Registered Address:** Harju maakond, Tallinn, Kesklinna linnaosa, Tartu mnt 6-10, 10145, Estonia
- **Registered Legal Entity:** TRADELINK TECHNOLOGIES OÜ

### Team's experience

Alexander Bogdanov is a serial entrepreneur, expert in IT solutions for smart buildings and smart campuses, visionary of smart technologies for people’s day-to-day life. Alexander is a founder of several crypto initiatives, that lower the entry barrier for new users and help leverage community experience.

Andrey Lugovskoy has over 12 years of experience creating high availability services. Lead software engineer of a first automated interview service with ultra-high load. As a lead architect implemented highly reliable industrial solutions and development of FinTech apps.

Joseph (Afriyie) Attakorah is a frontend developer with 5+ years of experience in high load enterprise applications, interested in solving technological problems by combining Software Engineering and Machine Learning techniques. Recently focused on blockchains and creation of decentralized applications for crypto investments. 

Alena Balakina is a QA test engineer and tech writer with over 7 years of experience. As a QA lead Alena implemented testing processes and documentation to one of the world’s first AI-powered blockchain investment service. Alena is highly experienced in development and execution of test cases, development of test scripts for new features and updates, analysis and documentation of bugs and defects, development and maintenance of automated tests using Selenium, Python and JavaScript, wireframe creation and product prototyping, UX research.

### Team Code Repos

- https://github.com/BEARlogin
- https://github.com/sandoxio

### Team LinkedIn Profiles (if available)

[Alexander Bogdanov](https://www.linkedin.com/in/alexander-bogdanov-b129877a/);  
[Andrey Lugovskoy](https://www.linkedin.com/in/%D0%B0%D0%BD%D0%B4%D1%80%D0%B5%D0%B9-%D0%BB%D1%83%D0%B3%D0%BE%D0%B2%D1%81%D0%BA%D0%BE%D0%B9-2887b753/);  
[Joseph (Afriyie) Attakorah](https://www.linkedin.com/in/joseph-attakorah-b6028786/);  
[Alena Balakina]( https://www.linkedin.com/in/alena-balakina/)

## Development Status :open_book:

The project has been started under the W3f Grant. Here’s the web IDE: https://sandox.io, here’s the project Git repo: https://github.com/sandoxio/sandox

## Development Roadmap :nut_and_bolt:

Sandox is designed as a unified and powerful tool to assist Polkadot ecosystem developers in creating any blockchain applications. We plan to add features like an embedded wallet, automatic contract deployment, setting up custom nodes, saving projects on the blockchain, debugging and tracing, a UI panel for interacting with RPC, storage, and much more. To expedite the development of the IDE, introduce flexibility, and allow different teams to create their own add-ons, enhancements, and various panels for particular parachains we see the necessity to implement a plug-in feature. Therefore, this stage is incredibly important as it will regulate the work and process of creating new features.
To secure user data it is essential that all plug-ins should operate independently. The chosen concept for plug-in operation is WASM, which ensures isolation of a plug-in's executable code, data protection between different plug-ins, and the required performance. Plug-ins could be written in any WASM compiled language (we plan to start from TypeScript SDK and add Rust, Go, Zic or other languages in later stages of the project, if there will be an appropriate request from the community). User’s wallet access will be implemented through an API in such a way that the plug-ins themselves will not have direct access to the user's private key.

![plugin_feature_mockup](https://github.com/TradeLinkEstonia/Grants-Program/assets/130372146/61df55f7-3295-4714-8090-385f1fcaa8f4)

### Overview

- **Total Estimated Duration:** 3,5 months
- **Full-Time Equivalent (FTE):** 4 FTE
- **Total Costs:** 27,500 USDT.

### Milestone 1 Plug-in feature

- **Estimated duration:** 2,5 months
- **FTE:**  3
- **Costs:** 20,600 USDT

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can execute tests that will show how the functionality works. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **1.** | Plug-in builder | This tool will compile the source code of a TypeScript written plugin into WASM and pack it into a single bundle including HTML templates, images and CSS. This bundle could be hosted on any platform (e.g., GitHub). |
| **2.** | Core plug-in support | We will implement: 1. A mechanism for uploading plug-ins from external sources (e.g., GitHub), launching and running plug-ins; 2. A basic API that will allow creation of custom panels, settings, languages support, etc.; 3. A TypeScript SDK for plug-in implementation. |

### Milestone 2 Plug-ins marketplace

- **Estimated duration:** 1 month
- **FTE:**  1
- **Costs:** 6,900 USDT

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |  
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can execute tests that will show how the functionality works. |  
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |  
| **0e.** | Article | We will publish an **article** that explains what was achieved, how to use the new app and what are the benefits of using the system |  
| **1.** | Plug-ins marketplace | We will implement a list/marketplace of available plug-ins, allowing users to install and uninstall needed ones. Users/developers will also have an option to add a plugin via its URL from any source. |

## Future Plans

We have wide plans for SanDOx development. Some of them are:
1)	“Network” panel for Polkadot with with extrinsics & RPC calls, chain state.
2)	Polkadot.js authorization with a user’s wallet
3)	Ink! smart contract language support
4)	Examples library, that allows developers to use examples for different cases live in the IDE
5)	Projects and settings storage in an IPFS/blockchain
6)	Library import from NPM
7)	Import/export of projects, adding projects by drag’n’drop
8)	“Find” panel
9)	PWA
10)	New IDE themes, themes constructor
11)	Autocomplete

## Referral Program (optional) :moneybag: 

- **Referrer:** [@dsrdrk11a](https://github.com/dsrdrk11a)
- **Payment Address:** Polkadot (Statemint): 16ccCa6P9TwEzMbghTnsj1Z4YMMEgFons6PkmwBRcwLeBEf (USDT)
