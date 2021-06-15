
  

# Open Grant Proposal

  

* **Project Name:** 1OS - BETA - v1

* **Team Name:** 1OS

* **Payment Address:** (DAI Address) 0x67A0228839F68D8d6Be54FabDc8fBe867d21D4C4

  

  

## Project Overview :page_facing_up:

  

### Overview

  

1OS is a Cross-Chain Operating System, providing Web 3.0 users with seamless access to Decentralized Applications, such as DEXs, DeFi Protocols, NFTs / NFT Marketplaces and Blockchain Gaming across all supported Blockchain Networks, via one secure and powerful OS.

  

Mainstream comparable technology would include desktop and mobile operating systems such as Windows, MacOS, Linux, Android and iOS - however, **1OS** is specifically engineered for Blockchain technology.

  

Why 1OS?

  

The main objective and purpose for the 1OS platform, is to resolve current usability issues within the Web 3.0 space, such as:

  

-   Tedious multiple wallet management
-   Fragmented browser-tab-only access to Decentralized Apps
-   A poor and divided overall Web 3.0 user-experience across many different Blockchain ecosystems

  

To rectify these issues, 1OS adds a rich and engaging **Experience Layer** on top of the existing Web 3 Ecosystem's layered architecture and unifies the currently fragmented Web 3.0 user-experience. Essentially, 1OS combines supported Blockchain Ecosystems into one interoperable, seamless Operating System - powered by Polkadot.

  

1OS enables Web 3 **Users** to:

  

* Access and manage D'Apps such as DeFi Protocols, DEXs, Blockchain Gaming, NFTs and Wallets, from all supported Blockchain Network Ecosystems, with a single point of access

* Switch desktop state between any supported Web 3 blockchain ecosystem, via a configurable network selector

* Connect to their 1OS instance via all supported devices (on Mobile, Tablet or Desktop devices)

  

1OS enables Web 3 **Developers** to:

  

* Deploy Native D'Apps, directly to 1OS Mainnet via 1OS Command Line Interface (also known as 1OS CLI)

* Deploy Inclusive D'Apps (pre-existing D'Apps created on 1OS supported blockchain networks), to the 1OS platform

* Implement cross-chain behaviors and design patterns within smart contract logic, enabling communication with other decentralized apps, by consuming available data from the 1OS Interoperable Layer (middleware) API Library

  

### Project Details

  

#### Architecture

![](https://1os.io/assets/img/1os-architecture-01.jpg)
**Note**: Please see *Components* section later in spec for details on each 1OS Architectural Layer
  

#### Technologies

1. [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

2. [NodeJS](https://nodejs.org/en/about/) is an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications.

3. [ReactJS](https://reactjs.org/) makes it painless to create interactive UIs. Design simple (or complex) views for each state in your application, and React will efficiently update and render just the right components when your data changes. React allows developers to build encapsulated components that manage their own state, then compose them to make complex UIs.

4. [TypeScript](https://www.typescriptlang.org/) is an open-source language which builds on JavaScript, one of the world’s most used tools, by adding static type definitions. Types provide a way to describe the shape of an object, providing better documentation, and allowing TypeScript to validate that your code is working correctly.

5. [Amazon Elastic Container Service (Amazon ECS)](https://ecs.aws/) is a highly scalable, fast container management service that makes it easy to run, stop, and manage containers on a cluster. Your containers are defined in a task definition which you use to run individual tasks or as a service.

6. [Python / Python Flask](https://flask.palletsprojects.com/en/2.0.x/) as a Middleware framework. Flask protects you against one of the most common security problems of modern web applications: cross-site scripting (XSS). In addition, Flask uses Python version 3.6+
7. Substrate

  

#### Components

1. **Experience Layer**

The introduction of an Experience Layer creates a new paradigm within the Web3 ecosystem architecture. User's will be able to manage their own 1OS desktop instance, with one desktop instance available per supported Blockchain Network. User’s may also discover new D'Apps for each supported Blockchain Network, via the 1OS D'Appstore where D'Apps are installed to the respective desktop instance. The Experience Layer consists of a modular, componentized architecture with re-usable components and sub-components written in HTML5, CSS3, JavaScript / NodeJS, ReactJS and AWS (Amazon Web Services) for clustered hosting environments (clustering via Kubernetes) and CI/CD Pipeline w/ an end-to-end continuous delivery. The 1OS Experience Layer will be crafted with fully mobile responsive design (mobile, tablet and desktop compatible) - and will render with full modern cross-browser support (Brave, Chrome, Safari, Microsoft Edge, Firefox and Opera).

  

2. **Interoperable Layer**

  

The Interoperable Layer is a middleware layer, which will be created with Python (programming language) and will utilize Python Flask as a middleware framework. This specific layer, will be available to smart contracts / D’Apps across the entire Web 3.0 spectrum. The Interoperable Layer will consist of a pre-defined Library sub-set of API Services which will be readily available and allow for any D’App to communicate with other D’Apps via their publicly available API Services - through the **1OS API Library**. Such functionality will be invoked (and thus, data exchanged) in the form of API Requests. Reliable Live Price Data will be made readily available to D’App smart contracts with Substrate’s iteration of Chainlink Oracle Pallets (via Polkadot parachain). Overall, similar technology to the 1OS Interoperable Layer (specifically the 1OS API Library) would include: The Graph - [https://thegraph.com/](https://thegraph.com/)

  

Example Usage:

  

**Example A -** D’App A is an Inclusive D’App (see Native Deployments vs Inclusive Deployments in point 3, “1OS CLI” in later documentation for further details), on the Ethereum Mainnet - it has been deployed to 1OS, via 1OS CLI’s `1os --deploy -i` command, and therefore subsequently is compiled, packaged and now available within the 1OS D’Appstore for desktop installation. D’App A’s API Library (pre-defined API endpoints and micro services, accessible to other Applications) was also compiled, packaged and deployed as a part of the original `1os --deploy -i` command package (within D’App A’s “api” directory - found within the root folder), and has now successfully been made publicly available to all other D’Apps via the 1OS Interoperable Layer.

**Example B -**  D’App B is a Native D’App, due to the fact it was directly deployed to 1OS Mainnet (Native = smart contract(s) deployed directly to 1OS Mainnet, as opposed to an Inclusive D’App, which has had its respective smart contract(s) previously deployed to Ethereum Mainnet, or Neo or EOS etc.). It has been deployed to the 1OS platform via 1OS CLI’s `1os --deploy -n` command, and thus is also made available within the D’Appstore for installation in users 1OS Desktop Instance. D’App B’s smart contract logic, contains POST and GET requests to D’App A's API endpoints, sending and retrieving relevant data between D'Apps - across supported ecosystems, with ease.

  

3. **1OS CLI (Command Line Interface)**

  

The 1OS Command Line Interface is a powerful command line tool which will allow developers not only to deploy D’Apps / Smart Contracts, but to also configure and gain advanced controls over their 1OS environment, specifically for development purposes. In terms of implementation of the command line interface, development will primarily take place utilizing NodeJS, JavaScript ES6+, HTML5 and CSS3. 1OS CLI will be bespoke and purpose built, however, specific open-source Node libraries to be integrated as additional building blocks in the dev process will include:

  

Terminal Kit - a comprehensive, detailed & robust terminal interface library - [https://github.com/cronvel/terminal-kit](https://github.com/cronvel/terminal-kit)

![](https://1os.io/assets/img/1os-cli-lib-tk.gif)

Observatory - a beautiful UI for displaying tasks running on command line - [https://github.com/dylang/observatory](https://github.com/dylang/observatory)

![](https://1os.io/assets/img/1os-cli-lib-ob.gif)

  
  With 1OS CLI, developers are able to deploy D’Apps to the 1OS Ecosystem, with two types of deployments which are initialized by varied command flags (`-n` / `-native` OR `-i` / `-inclusive`):

  

A) **Native D'App Deployment** - Deploy Native D'Apps, directly to 1OS Mainnet by running:

 `1os --deploy -n [local-path/to-project-root/directory-here]` 
 
![](https://1os.io/assets/img/1os-cli-native.jpg)

B) **Inclusive D'App Deployment**  - Deploy Inclusive D'Apps (pre-existing D'Apps created on 1OS supported blockchain networks), to 1OS by running:
 
`1os --deploy -i [local-path/to-project-root/directory-here]` 

![](https://1os.io/assets/img/1os-cli-inclusive.jpg)

Upon running the relevant deployment commands, the 1OS compiler will package all related assets found within the project's root and sub-directories and will deploy the newly created 1OS D'App to a dedicated cloud server (AWS) securely via SSH. Each D'App deployed will require a `manifest.txt` file consisting of configurable settings, metadata (object w/ attributes as properties / keys) and paths to D'App logo and related assets. 

If the newly deployed D'App is of the **Inclusive** type - then its metadata attributes must include reference to the parent blockchain network, D'App URL and categorization tags in order for the D'App to appear under the relative network / category, available to install in the 1OS D'Appstore. Client-side (and server-side) validation measures will be implemented to ensure available D'Apps render under the appropriate D'Appstore categorization.
  

### Ecosystem Fit

1OS is the first of its kind within the Web 3 Ecosystem, serving the wider community as an engaging Experience Layer, enabling users to manage their entire Web 3 experience from a single point of entry. Due to the Cross-Chain and Interoperable nature of 1OS, coupled with the world's widespread familiarity with the format of an Operating System to map user-interactions such as inputs and outputs, mouse / keyboard behaviors and various engagements with mainstream technology - such factors may likely prove to be highly influential in driving mainstream adoption for Web 3.0 and Blockchain Technology.

  

Similar projects - 

The following projects are relatively similar to 1OS in some aspects (technical crossovers) - however may differ  in terms of overall objectives, team ambitions, long-term scope, value added and vision for the Web 3 Ecosystem:

* https://github.com/reef-defi

* https://github.com/clover-network

  

## Team :busts_in_silhouette:

  

### Team members

* Kristopher Ian Leo C - Founder, Lead Full-Stack Software Engineer (NodeJS, JavaScript, ReactJS, Angular, TypeScript, Solidity, Java, PHP), UI / UX Consultant

* Art House - Operations Manager

* Dan Omo - Community Manager

  

We are preparing to source both a Python / Full-Stack Developer (w/ DevOps experience a bonus) and additional NodeJS Developer to finalize our initial core team.

  

### Contact

* **Contact Name:** Kristopher Ian Leo C

* **1st Contact Email:** founder@1os.io
* **2nd Contact Email:** support@1os.io

* **Website:** https://1os.io

  

### Legal Structure

* **Registered Address:**

Ever Software Limited

20-22 Wenlock Road, London, England, United Kingdom N1 7GU

* **Registered Legal Entity:**

Ever Software Limited

Company number **12559077**

### Team's experience

* **Kristopher Ian Leo C** - Founder

Kristopher Ian Leo C, simply known as "Leo", has operated as the Director of a highly commercially experienced, independent Software Engineering and Solution Architecture consultancy which has delivered complex software solutions for large global investment banks, digital consultancies and insurance firms, including Goldman Sachs, Deloitte LLP, BNP Paribas and CACI Ltd. Prior to this, over 10 years of experience was gained utilizing programming languages and frameworks such as JavaScript (Angular, ReactJS, VueJS, Native JS), Java, PHP, .NET, Perl with the likes of large commercial brands, such as Apple, Vodafone, Emirates, Bosch, H&M and more.

  

Leo's full technology stack experience, includes:

  

-CSS, CSS3, SASS, BEM, HTML, HTML5, XHTML, XML, Mustache, Bootstrap, Responsive Design, Responsive Development, AA/AAA (WCAG) Accessibility, W3C Coding Standards

-JavaScript Frameworks, Vue JS, AngularJS 1 & Angular 2/4, React JS, Ionic Mobile App Development (iOS & Android), JSON / JSP, Cross-Browser, Node JS, Solidity, NPM / Bower, Webpack, Gulp, Grunt, jQuery, JavaScript, TypeScript, Karma, Jasmine, Mocha, Unit Testing, End-to-end Testing (E2E)

-AJAX Programming, APIs / API Design and Web Services, including; SOAP and RESTful

-Object-Oriented Programming (software design pattern)

-PHP, LAMP, WAMP, XAMPP, Perl, CodeIgniter, Zend, Smarty, Apache Maven, FreeMarker (Java), MVC .NET

-MySQL Databases, PHPMyAdmin, Linux Command Line / PuTTY

-Hybris, Adobe Target, Adobe AEM / CQ5 Front End (and basic JAVA) Experience

-Adobe Photoshop / Adobe Creative Suite, Sketch, Zepplin, Affinity Designer

-BitBucket, SVN, SourceTree, GIT
  

* **Art House** - Operations Manager

Art has supported the previous iteration of the 1OS project (Visor) for over a 2 year period, and has been able to help with pushing the development of new deliverables - such as platform launches, Whitepaper publishing as well as promptly supporting the 1OS Community with any general queries they may have or general help they may need.

Art's contributions and skillset include:
  

-**Product Delivery**

Ensuring the product features are completed and delivered within expected timeframes

-**Community Management**

Overseeing the Community Management function of the 1OS Project

-**Project Support**

Adhoc contributions towards various 1OS aspects and tasks

  

* **Dan Omo** - Community Manager

Dan is an experienced Community Manager with over 2 years of experience. Having served within the Community Management space with successful projects such as Swipe and currently lends his services to new and upcoming project Litentry, with a community of over 10,000+ members.

Dan's strengths and expertise include:


-**Member Support**

Guiding and supporting 1OS Community members with general platform related queries and frequently asked questions

-**Anti-Spam / Anti-Scam Security**

Protects the 1OS community from potential malicious content or users

-**Airdrops and Promotions**

Assists with the delivery of new 1OS Airdrops and 1OS Community Promotions

  

### Team Code Repos

Source codes will reside in

* https://github.com/1OSio


### Team Profiles

* Kristopher Ian Leo C - https://www.linkedin.com/in/kristopher-ian/

* Art House - See bio above

* Dan Omo - See bio above

  

## Development Roadmap :nut_and_bolt:

  

### Overview

* **Description** 1OS - BETA - v1

* **Total Estimated Duration:** 12 Weeks

* **Full-time equivalent (FTE):**  2 FTE

* **Total Costs:** 28,500 DAI

  

### Milestone 1 — Experience Layer

* **Estimated Duration:** 4 Weeks

* **FTE:**  2

* **Costs:** 9,500 DAI


  
| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | Inline Code Documentation, Wiki Documentation, User Guide, Local Setup Guide, Readme file |
| 0c. | Testing Guide | Code will have a minimum unit-test coverage of 50%, to ensure functionality and robustness. How to run unit-tests will be described within guide | | 
| 0d. | Article | A blog post will be published which will share a detailed depiction of the 1OS Experience Layer architecture. Experience Layer nuances such as: the psychological factors and importance of an Operating System UI, best practices, keyboard gestures and other useful knowledge and guidance will be shared
| 1. | Design Document | Detailed description of Experience Layer architecture and all common custom components|
| 2. | `components` | Initial implementation of modular common components library inline with ReactJS framework project structure |
| 3. | `components/DappLauncher` | Re-useable component, which resembles D'App Icon and launches D'App within a new `DAppWindow` instance |
| 4. | `components/DappWindow` | A window component for full rendering of arbitrary D'App user-interface | 
| 5. | `components/DappDock` | Dock component, used as container for all installed or pre-installed D'Apps configured by the user. Will appear with D'Apps specific to each network the component renders within |
| 6. | `components/MainMenuBar` | Main Menu Bar will serve as a parent container / wrapper for important sub-components, such as `StartMenu`, `DappDock` and `NetworkSwitcher` |
| 7. | `components/UserActionsMenu` | A contextually-driven (contextual to `DappWindow` "in focus") user actions menu to be found horizontally oriented, and located at the vertically highest point of each user's device viewport  |
| 8. | `components/NotificationsFeed` | Feed which renders various notifications - some notifications are user-specific, other notifications may include New D'App releases, Featured D'Apps, Newly Supported Ecosystem launches / announcements etc. |
| 9. | `views` | Base folder which will contain all future view templates and related styles across the 1OS platform | 
| 10. | `views/SetupWizard` | A view which contains the 1OS Setup Wizard, including all steps as sub-components and all relevant styles |
| 11. | `views/Desktop` | The Desktop view provides a "parent" template which will contain all other components as sub-components |
| 12. | `views/DappStore` | The D'Appstore view essentially allows 1OS users to discover (categorically), share and install new D'Apps to their 1OS instance |
| 13. | `views/Settings` | Settings view enables users to configure their 1OS options. Options include: theme, default network, D'app icon size, Text size etc. |
| 14. | `views/NotificationCentre` | Full-view version of `NotificationsFeed` component for accessing latest notifications news feed. Example notification: User's will occasionally be prompted to backup and export their desktop setup for later import  |
| 15. | User Authentication | Implementation of user authentication, enabling secure access to 1OS via 3rd party Web3 Wallet client(s) |
| 16. | Export Backups | Each exportable backup consists of a nested JSON dataset. Backup properties define a full snapshot of the entire OS state, including: current D'App installations, layout formation, theme customizations etc. selected by the user. Users can configure the export functionality to be scheduled every 12hrs, daily, weekly, monthly or as annual backups. Backups may be imported, however, users will be made aware the import will override the current OS state for the connected user |
| 17. | LocalStorage Cache | Client-side cacheing of user settings, preferences and multi-ecosystem desktop setup(s), via localStorage. Last 6 characters of initially signed/registered user wallet address (regardless of ecosystem) will be used as unique user identifier. All subsequent addresses used by user to access other ecosystems, will be deemed secondary  |
  
  

### Milestone 2 — Interoperable Layer

* **Estimated Duration:** 4 Weeks

* **FTE:**  2

* **Costs:** 9,500 DAI

  


| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | Inline Code Documentation, Wiki Documentation, Local Setup Guide, Readme file |
| 0c. | Testing Guide | Code coverage will include integration tests, providing coverage for higher-level functionality. How to run the integration tests will be described within guide | | 
| 0d. | Article | A blog post will be published which will give a deeper understanding of the 1OS Interoperable Layer architecture and its integration of Substrate for interoperability. A detailed diagram will illustrate the way in which Substrate Chainlink Oracle Pallets will be utilized as live feed / source of real-time price data. The **1OS API Library** interface will also be highlighted and how it compares with **The Graph**
| 1. | Design Document | Detailed description of Interoperable Layer architecture and its use of Substrate (for interoperability) and Python Flask for the 1OS API Library / middleware layer implementation|
| 2. | `intereoperable-layer` | Setup root level of Interoperable Layer project, in accordance with Python Flask documentation best practices |
| 3. | Routing | Initialization of Routing, including required Variable Rules for sections of API URLs (or URIs) |
| 4. | Redirection Behavior | Define all initial Redirectional Behaviors following Python Flask middleware framework standards as reference | 
| 5. | `interoperate/` | Create `interoperate/` Route as base URI component for all Interoperable Layer API Service endpoints |
| 6. | `interoperate/api-lib` | Extend the `interoperate/` URI with `api-lib` sub-component as appropriate naming convention for 1OS API Library. Syntax for endpoints will follow query string param pattern of `https://1os.io/interoperate/api-lib?dapp=dapp-name&data_source=data-source-name` |
| 7. | `interoperate/price-feed` | Implement API Service for requesting live price data from Substrate's Chainlink Oracle Pallets. Syntax for endpoints will follow query string param pattern `https://1os.io/interoperate/price-feed?pair=abc-cba`. Routing will ensure price data will be returned via the relevant Polkadot parachain |
  

### Milestone 3 — 1OS CLI (Command Line Interface)

* **Estimated Duration:** 4 Weeks

* **FTE:** 2

* **Costs:** 9,500 DAI
  


| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | All available CLI commands, including `1os --help` shall be documented, outlining all optional flags and specific syntaxes for each command |
| 0c. | Testing Guide | Unit-test coverage will be provided to ensure security and robustness of CLI NodeJS logic | 
| 0d. | Article | Blog post to be published sharing full extent of available CLI commands including various flags, configs and options |
| 1. | CLI Default Directory Setup | Set-up of the default CLI Directory, using the`.cwd(uri)` method from Terminal-Kit library |
| 2. | CLI Window Title | Implement auto-assign of CLI window title, with `.windowTitle(str)` method (Terminal-Kit library) on launch of the CLI terminal |
| 3. | CLI Window Theme | Configure bespoke CLI theme, with future-proofed approach for multiple theme options  |
| 4. | `commands` | Initialize the `commands` directory as root folder for all CLI command definitions and their related task executions |
| 5. | Command Definitions | Define each command and their respective task, within the `commands` directory (created in #4) |
| 6. | Command Executions | Full implementation of all executable tasks which have pre-defined commands (as per definitions in #5) |
| 7. | Task Progress Display | Depiction of all CLI tasks and statuses in progress at any given time, using Observatory library for tasks / statuses including that of `parsing`, `downloading` and `done`|
| 8. | Initialize `compiler`, `packager` and `auto_deployer` | Initial development for compiler, packager and deployer features which `compile > package > deploy` Native and Inclusive D'App deployments| 


## Future Plans
  

Short to Mid-Term Roadmap Objectives include:

* Complete development of **1OS Compiler, Packager and Auto-Deployer** (compiles arbitrary D’Apps as packages prior to deployment as a part of the 1OS CLI “--deploy” command)
* Implement **1OS Testnet** (secure blockchain network, high TPS rate, low gas fees, smart contract ready), potential initial parachain - built in parallel with Polkadot
* Develop **1OS SDK** (Software Development Kit)

  

Longer-Term Roadmap Objectives include:
* Develop **1Wallet**, enabling a single interface for management of all supported Web 3.0 ecosystem wallets and NFT vaults within the 1OS platform
* Implement and Launch **1OS Mainnet** (refined, secure, powerful, fast, smart contract deployable network) - built in parallel with Polkadot
* Build **1OS Desktop App** (fully-comprehensive, partitioned Operating System served as an App for MacOS, Windows, and Linux)
* Build **1OS Governance** model and interface - 1OS will be a highly community driven platform, therefore a voting interface for propositions will be vital in driving decision making process for: Adding support for new Web 3.0 ecosystems, New D'Appstore releases / removals, New 1OS Features

  

## Additional Information :heavy_plus_sign:

  

* What work has been implemented so far?

The 1OS project is in the earliest stage of product development due to more focus having been placed on planning, software design and team recruitment - as team fit is of high importance to building a strong project core. However, in the upcoming weeks and months we plan to strive towards achieving our objectives and goals in high anticipation of the 1OS BETA v1 launch. 

We also intend to increase the use and inclusion of Substrate for increasingly powerful Cross-Chain interoperability - and in a very high innovation aspect. Ideas and concepts around Substrate usage will be revealed in our upcoming detailed Roadmap release.

* Are there are any teams who have already contributed (financially) to the project?
No
* Have you applied for other grants so far?
No
