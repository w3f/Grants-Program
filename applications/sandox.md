# SanDOx

- **Team Name:** TradeLink
- **Payment Address:** Polkadot (Statemint): 13bUsemARThdmyXNEpvx2t8A5fNo4ttheSRcsXUWgRpqzjfH (USDT)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

This application is in response to the [Alternative javascript console for Polkadot JS API RFP](https://github.com/w3f/Grants-Program/blob/master/docs/RFPs/Open/alternative-polkadot-js-api-console.md).

### Overview

SanDOx is an integrated development environment, that is thought to leverage Polkadot development process by providing ecosystem developers with right and convenient components and tools.
Our team – the TRADELINK TECHNOLOGIES OÜ – is focused mostly on crypto trading tools and lately we have been interested in DEX concepts. Meanwhile we are fascinated by the Polkadot Network and see this SanDOx project as a great opportunity to contribute to the DOT ecosystem and show our skills for future projects.

### Project Details

![Sandox ide pic](https://user-images.githubusercontent.com/130372146/234008638-f55a3bde-3482-41c5-9b40-6828128ee33d.png)

SanDOx is an IDE built as a browser app that consist of tool panels (like JetBrains), this type of UX is common to all developers and we suppose it will be intuitive.
SanDOx IDE will have a built-in base list of tool panels and there will be an ability to add personal panels in the form of plug-ins (different panels, as well as personalization feature will be developed on different stages of the project).
Supposed base list of panels:
Project – shows project structure with catalogues and files.
Console –displays results of the user’s code, “console” native object methods (log, warn, info, etc.)
Network – network choice and connection. A user could switch between Polkadot ecosystem parachains, connection code will be generated automatically.
Examples – examples library. Will include different case examples, which could be imported and run.
Find – search panel. Allows search of documents in a project and make multi autocorrect.
Personal panels – user defined and customized.

Importing libraries from NPM would also be an interesting feature.
Meanwhile, the diverse Polkadot ecosystem could significantly change the classic IDE design and our TradeLink team is passionate about decentralizing processes of storing and running code. There is an opportunity for using Crust and Phala networks’ features and we’d like to do an appropriate research on later stages of the project. 
Till then files and settings storage will be local and user’s code will be run straight in the main thread and/or web workers. 

### Ecosystem Fit

According to the [RFP](https://github.com/w3f/Grants-Program/blob/master/docs/RFPs/Open/alternative-polkadot-js-api-console.md) current polkadot js API console has some limitations, which we offer to overcome by creating the SanDOx IDE.

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

### Team LinkedIn Profiles (if available)

- [Alexander Bogdanov](https://www.linkedin.com/in/alexander-bogdanov-b129877a/);
- [Andrey Lugovskoy](https://www.linkedin.com/in/%D0%B0%D0%BD%D0%B4%D1%80%D0%B5%D0%B9-%D0%BB%D1%83%D0%B3%D0%BE%D0%B2%D1%81%D0%BA%D0%BE%D0%B9-2887b753/)
- [Joseph (Afriyie) Attakorah](https://www.linkedin.com/in/joseph-attakorah-b6028786/);
- [Alena Balakina]( https://www.linkedin.com/in/alena-balakina/)

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 4 months
- **Full-Time Equivalent (FTE):** 4 FTE
- **Total Costs:** 30,000 USDT.

### Milestone 1: IDE app development

- **Estimated duration:** 2 months
- **FTE:**  2,5
- **Costs:** 18,000 USDT

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can execute tests that will show how the functionality works. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 1. | IDE app skeleton | We will develop the browser IDE core, layout, main menu of the IDE, IDE settings. |
| 2. | Project class | We will develop a class with methods for working with projects: files creation, local storage, retrieving/changing structure and file contents |
| 3. | “Panels” feature | We will develop panels content display and panels drag’n’drop feature. |
| 4. | Code editor | We will implement a code editor (based on the Ace editor) with code highlighting and multiple files opening in panels. |
| 5. | Code compiling feature | We will develop code compiling and run feature from a single file (project compilation from multiple files will be added in the second milestone). |
| 6. | “Console” panel | We will develop a “console” panel to display results of user code. |

### Milestone 2 “Project” panel development

- **Estimated Duration:** 1 month
- **FTE:**  1
- **Costs:** 6,000 USDT

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can execute tests that will show how the functionality works. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 1. | “Project” panel | We will develop a Project panel that displays hierarchical project tree and can add/delete a new folder/file. |
| 2. | Polkadot js implementation | We will implement Polkadot js library for interaction with parachains. |
| 3. | Project compiling feature | We will develop code compiling and run feature from all files of a project. |

### Milestone 3 UX development

- **Estimated Duration:** 1 month
- **FTE:**  1
- **Costs:** 6,000 USDT

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can execute tests that will show how the functionality works. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0e. | Article | We will publish an **article** that explains what was achieved, how to use the new app and what are the benefits of using the system |
| 1. | File search | We will develop a search feature in an opened file (case sensitive, by RegExp, etc.) |
| 2. | Hotkeys feature | We will develop a hotkeys handler and implement “events binding hotkeys” to preferences. |
| 3. | Themes support | We will develop IDE themes support and switching functionality. We will deliver two default themes: light & dark. |
| 4. | Settings and projects storage | On this stage of the project we will store all project files and settings locally. The project could be downloaded in a ZIP archive. |

## Future Plans

We have wide plans for SanDOx development. Some of them are:
1)	Polkadot.js authorization with a user’s wallet
2)	Projects and settings storage in an IPFS/blockchain
3)	Examples library, that allows developers to use examples for different cases live in the IDE
4)	Multistack: we will start with Ink! support
5)	Library import from NPM
6)	Import/export of projects, adding projects by drag’n’drop
7)	“Network” panel, connection code autogeneration, chain state
8)	“Find” panel
9)  "Extrinsics" panel
10) "RPC calls" panel
11)	PWA
12)	New IDE themes, themes constructor
13) Plug-ins support for adding features by other teams 

## Referral Program (optional) :moneybag: 

- **Referrer:** [@dsrdrk11a](https://github.com/dsrdrk11a)
- **Payment Address:** Polkadot (Statemint): 16ccCa6P9TwEzMbghTnsj1Z4YMMEgFons6PkmwBRcwLeBEf (USDT)
