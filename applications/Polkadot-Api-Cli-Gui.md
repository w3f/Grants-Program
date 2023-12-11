# Polkadot Api CLI - GUI

- **Team Name:** YK Labs
- **Payment Address:** [0xa632439DE1592936fbA3368053eaafd491443493](https://etherscan.io/address/0xa632439DE1592936fbA3368053eaafd491443493) (ERC20, USDT)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

### Overview

`Developing user-friendly graphical interface for the Polkadot Api CLI`

**Brief Description**

Polkadot Api CLI supports 5 types, more than 130 modules, 750+ functions and many function parameters for Polkadot network interactions. CLI users need to get help with `--help` command or have to deep dive into the Polkadot Api documentation when they want to use a function. This process is time consuming and requires a lot of effort. Using the CLI with so many modules at this level is truly challenging and requires a lot of time investment to learn, especially for new users.

Polkadot Api CLI GUI is designed to significantly improve the user interaction with the Polkadot Api, targeting both novice and experienced users within the Polkadot ecosystem. Our project focuses on developing a graphical user interface (GUI) that overlays the existing command-line interface (CLI). This interface will simplify the complexities involved in understanding and using the Polkadot Api CLI.

For new users, the GUI will provide a easy-to-use intuitive navigation with the help of Polkadot.js documentation, reducing the time and effort currently needed to understand API functionalities. This approach aims to eliminate the steep learning curve associated with the CLI.

For experienced users, the GUI will offer advanced features to improve daily operation efficieny. These include easy management of different commands with customizable options, such as setting different seeds for various calls, changing WebSocket connections and more. The GUI will maintain the CLI's robustness while adding layers of efficiency and user-friendliness.

**Relationship to Substrate/Polkadot/Kusama**

Our project directly integrates with the Polkadot.js Api, a key component of the Substrate-based Polkadot and Kusama networks. By improving the CLI experience, we aim to enhance the overall efficiency and usability of interacting with Polkadot ecosystem, making it more accessible to a wide range of users and developers.

**Team Interest**

Our team is deeply interested in the Polkadot ecosystem with 3 projects granted by Web3 Foundation. We recognize the potential impact of a more accessible and user-friendly CLI. We believe that by improving the Api interaction, we can significantly lower the entry barrier for new users and increase productivity for experienced users.

### Project Details

**Mockups/designs of any UI components**

![MockUp](https://github.com/tolgayayci/Grants-Program/assets/40897846/eb04ad85-55a9-4d1d-90d9-76dd630cc91b)

**Data models / API specifications of the core functionality**

Project mostly involves the integration of Polkadot API-based data models. There are 5 data types supported by @polkadot/api-CLI and this project will be supporting all of them.

| Type  | Module and Method Count  | URL  |
|---|---|---|
| Query | 48 module & 277 methods | <https://polkadot.js.org/docs/polkadot/storage>   |
| Tx |  42 modules & 283 methods  |  <https://polkadot.js.org/docs/polkadot/extrinsics> |  
| Rpc  | 13 modules & 72 methods   | <https://polkadot.js.org/docs/polkadot/rpc>  |
| Constants  |  31 modules & 112 methods  | <https://polkadot.js.org/docs/polkadot/constants>  |
| Derives  | - | Related modules and methods will be implemented. |

We will use electron-store to store in-app information. In this way, relevant data models will be created for features such as user preferences and command history.
  
**An overview of the technology stack to be used**

![overview_tech](https://github.com/tolgayayci/Grants-Program/assets/40897846/a5f142d2-bd07-47ae-96f0-99fc8ae99331)

- **Frontend (GUI)**
  - Technology: Next.js
  - Purpose: To create a user-friendly graphical interface to interact with polkadot-api-cli.
- **Backend (CLI Interaction Layer)**
  - Technology: Node.js
  - Purpose: To facilitate command execution and data interchange between the GUI and polkadot-api-cli.
- **Desktop Application Wrapper**
  - Technology: Electron
  - Purpose: To convert the web application into a cross-platform desktop application, making it easy to distribute and access locally.
  
**Documentation of core components, protocols, architecture, etc. to be deployed**

You can review the detailed documentation of project implementation here: [Documentation](https://drive.google.com/file/d/1eHzPStpB5eNqPJ67bWWQDvikFDHt2RsV/view?usp=sharing)
  
**What your project is *not* or will *not* provide or implement**

This project does not replace polkadot-api-cli, instead it makes it easier to use by adding a layer on top of it.

### Ecosystem Fit

- **Where and how does your project fit into the ecosystem?**
  - The project aims to make using the polkadot-api-cli more user-friendly. It helps both new and experienced users in the Polkadot ecosystem by providing a simpler way to interact with the CLI, helping more people to interact with the Polkadot network.

- **Who is your target audience (parachain/dapp/wallet/UI developers, designers, your own user base, some dapp's userbase, yourself)?**
  - Polkadot.js Api and polkadot/api-cli users as well as any user who wants to interact with the Polkadot network.

- **What need(s) does your project meet?**
  - For beginners in the Polkadot Ecosystem: Newcomers who find the command-line interface (CLI) of the Polkadot Api challenging will benefit significantly. The GUI simplifies understanding and navigation, making initial interactions less daunting.
  - For experienced polkadot-api-cli Users: Even those familiar with the CLI might prefer a graphical user interface for its convenience and efficiency in managing network interactions.
  - For developers Working with Polkadot: This includes developers of parachains, decentralized applications (dApps), wallets, and user interfaces who interact with the Polkadot network. The GUI offers an easy way to handle tasks that would otherwise require complex CLI commands.

- **Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?**
  - As far as we have observed, there is no such application built on top of the polkadot-api-cli. If we need to give an ecosystem example, you can think like this application would be similar as Github - Github desktop or Docker - Docker desktop relations. While you can get your work done in both ways, some users may prefer to manage their work with the help of a graphical interface.

## Team :busts_in_silhouette:

### Team members

- Tolga Yaycı - Developer
- Mert Köklü - Developer

### Contact

- **Contact Name:** Tolga Yaycı
- **Contact Email:** <tolgayayci@protonmail.com>
- **Website:** <https://www.linkedin.com/tolgayayci>

### Legal Structure

- **Registered Address:** -
- **Registered Legal Entity:** -

### Team's experience

**Tolga Yaycı**

As a full-stack developer with 2 years of experience, I have refined my skills in software development, with a focus on dApp development in the past year. I have a deep interest in the Web3 space and have applied my skills by creating a number of relevant applications. In addition to my experience, I have developed detailed React and Next.js projects, further enhancing my ability to build robust and scalable web applications.

Also, I have experience working with well-known protocols such as Aave, Filecoin, Flow, Solana, Dfinity Foundation, and Web3 Foundation showcasing my ability to handle multiple ecosystems and expertises.

**Mert Köklü**

Worked as Intelligent Video Analytics Team Leader in a NVIDIA distributer company that develops video analytics solutions for 2 years. After diving into Web3 ecosystem, Became a grantee for multiple blockchain ecosystems by developing innovative projects. As a certified NVIDIA instructor, AAVE Turkey Community Co-Manager and ambassador for organizations such as Microsoft and The Graph protocol, have become a trusted voice within the communities.

### Team Code Repos

- **Flowana (W3F Grantee - Name: PolkaFlow):** A protocol aggregator platform - [GitHub](https://github.com/tolgayayci/flowana-frontend/tree/dev) - [Project URL](https://flowana.app/polkadot/projects)
- **Awesome Polka (W3F Grantee):** A social platform for discovering and exploring the projects in protocols - [GitHub](https://github.com/tolgayayci/awesome-polka/tree/dev) - [Project URL](https://awesomepolka.org/)
- **AaveQL:** Aave Grapql documentation with built-in support editor and examples - [GitHub](https://github.com/justmert/aave-graphql-doc) - [Project URL](https://www.aaveql.org/)
- **Peer-CLI:** Swiss army knife for IPFS - [GitHub](https://github.com/justmert/peer-CLI)
- **Aave Telegram Bot:** - [GitHub](https://github.com/justmert/Aave-API-Telegram-Bot) - [Project URL](https://t.me/@aave_api_bot)

**Github Accounts**

- <https://github.com/tolgayayci/>
- <https://github.com/justmert/>

### Team LinkedIn Profiles (if available)

- <https://www.linkedin.com/tolgayayci>
- <https://www.linkedin.com/mertkoklu>

## Development Status :open_book:

We decided on the technical implementation of the project by examining in detail the CLI codebase and the Polkadot JS API used by the CLI. You can find our detailed research on this in the technical documentation we shared above. We haven't started development yet, we have completed our designs and we are excitedly waiting to start.

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 3 months
- **Full-Time Equivalent (FTE):**  2 FTE
- **Total Costs:** 30,000 USD

### Milestone 1

- **Estimated duration:** 1 month
- **FTE:**  2 FTE
- **Costs:** 10,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | MIT |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can use the application on their desktop. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1. | Backend Layer | We will create the skeleton of the project and the all pages mentioned other milestones will be completed in design. Using an electron application built on Nextron, we will create the basis of the frontend with next.js and create the necessary bridges and methods to establish api-cli interaction with the relevant electron modules. In summary, we can define this milestone as a user layout built on Nextron, all pages, ipc handler methods required for api-cli. |
| 2. | Constants Page | Includes the implementation of **31 modules and 112 methods** active in the constants module. Users can make relevant requests via CLI using UI elements and view the results. For methods that require parameters, sample tooltips and document references will be shown. Users can also view a list of the commands they have run on this page and re-run their previous commands with a simple click. |

### Milestone 2

- **Estimated Duration:** 1 month
- **FTE:**  2 FTE
- **Costs:** 10,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | MIT |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can use the application on their desktop. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1. | Extrinsics Page | Includes the implementation of **42 modules and 283 methods** active in the extrinsics module. Users can make relevant requests via CLI using UI elements and view the results. For methods that require parameters, sample tooltips and document references will be shown. Users can also view a list of the commands they have run on this page and re-run their previous commands with a simple click.|
| 2. | Storage Page | Includes the implementation of **48 modules and 277 methods** active in the storage module. Users can make relevant requests via CLI using UI elements and view the results. For methods that require parameters, sample tooltips and document references will be shown. Users can also view a list of the commands they have run on this page and re-run their previous commands with a simple click. |

### Milestone 3

- **Estimated Duration:** 1 month
- **FTE:**  2 FTE
- **Costs:** 10,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | MIT |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can use the application on their desktop. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| **0e.** | Article | We will publish an article that explains the GUI in general. |
| 1. | RPC Page | Includes the implementation of **13 modules and 72 methods** active in the constants module. Users can make relevant requests via CLI using UI elements and view the results. For methods that require parameters, sample tooltips and document references will be shown. Users can also view a list of the commands they have run on this page and re-run their previous commands with a simple click. |
| 2. | Monitor RPC Page | By using **@polkadot/monitor-rpc** in the background, users will be able to monitor the RPCs they want with the help of webhooks. By providing the necessary information about RPC on this page, they will be able to see the latest situation regarding RPC when they visit the application. |
| 3. | Derive Page | Related modules and methods will be implemented. |
| 4. | Cross Platform Bundles| Mac, Linux and Windows bundles will be provided for end users to install application on their devices. |

## Future Plans

- As this application is shared in CLI-related places and docs with the help of the Polkadot team, it will be of great help in attracting users.
- In the long run, signer-cli may also be integrated into this application.
- If there is a change in the polkadot runtime that affects current modules and methods, relevant corrections will be made immediately.

## Referral Program (optional) :moneybag:

- **Referrer:** -
- **Payment Address:** -

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** We are past grantees.

----------
