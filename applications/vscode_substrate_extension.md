# VSCode Substrate Extension

- **Team Name:** Salih Toruner
- **Payment Details:**
  - **DOT**: 5Cr1v4qJ1MfQ7vL5uZJJDSvghwLxLPJBGhxTepm7L49XyQVj
  - **Payment**: 5Cr1v4qJ1MfQ7vL5uZJJDSvghwLxLPJBGhxTepm7L49XyQVj (USDT)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

### Overview

Substrate developers currently need to switch between multiple terminals, tools, and interfaces to perform essential development tasks. This fragmented workflow creates unnecessary complexity and reduces development efficiency.

`vscode-substrate` plugin is a comprehensive Visual Studio Code extension that aims to improve Substrate development workflow by providing an integrated development environment with powerful tools and features. This extension will significantly improve developer experience by offering node management, runtime development tools, account management, smart contract development, and chain interaction capabilities - all within VSCode. It reduces context switching and provides a unified interface for common substrate development tasks.

There have been two notable VSCode extensions for Substrate development in the past. The first one, developed by Everstake (enfipy.plugin-polkadot), was released in 2019 and garnered 1,600 installs and 27 pull requests before being archived. The second extension, developed by Parity Technologies (paritytech.vscode-substrate), achieved 2,695 installs and maintained active development until December 2020. Despite both extensions being archived and deprecated, they demonstrated significant developer interest with their combined 4,295+ installs. The continued use of these deprecated extensions by developers highlights the strong need for an actively maintained, modern VSCode extension for Substrate development.

My project aims to fill this gap by providing a comprehensive, maintained solution that builds upon the usable features of previous implementations while introducing modern features and better integration with the current Substrate ecosystem. This new extension will not only incorporate the core functionalities that made the previous extensions valuable but also introduce new features that align with current development practices and tooling.

### Project Details

**Core Features**

**1. Node Management & Monitoring**

* Start/stop local node functionality: Control Substrate node processes directly from VSCode. Start, stop, and monitor node status.
* Compile and run node from source: One-click compilation and deployment of Substrate nodes from source code. Includes build output monitoring.
* Chain purging capabilities: Clear chain data and reset to genesis state. Includes options for maintaining or purging keystore.
* Process monitoring and logging: Real-time monitoring of node processes with log aggregation and filtering capabilities.
* Custom node parameters configuration: Configure node startup parameters through a user-friendly interface. Includes preset configurations for common scenarios.
* Multi-node connection management: Connect and manage multiple nodes simultaneously. Switch between nodes seamlessly.
* Remote node connectivity: Connect to remote Substrate nodes with WebSocket support. Monitor remote node status and interact with chain.
* Custom endpoint management: Manage and organize multiple node endpoints. Quick switching between different networks.
* Connection status monitoring: Real-time monitoring of node connection status.
* Network type detection: Automatic detection and configuration for different network types (Substrate/Polkadot/Kusama).

**2. Runtime Development Tools**

* Pallet management and integration: Add, remove, and manage pallets in runtime. 
* Pallet explorer: Browse and inspect pallets. 
* Dependency management: Automatic handling of pallet dependencies and version compatibility.
* Auto-detection of installed pallets: Scan and detect pallets in runtime, providing quick access to their features.
* Pallet documentation integration: Access pallet documentation directly within VSCode. Includes Rust docs integration.
* Installation/removal workflows: Guided workflows for adding or removing pallets from runtime.
* Extrinsic inspection tools: Inspect and analyze extrinsics with parameter details and documentation.
* Metadata decoder and explorer: Decode and explore runtime metadata with search capabilities.
* Chain Spec Editor: Editor for chain specification files with validation and template support. 

**3. Account Management System**

* Account creation with cryptography types: Create accounts with different cryptography types (sr25519, ed25519, ecdsa). Includes key generation and management.
* Account import/export functionality: Import and export accounts in various formats. Support for JSON and raw key imports.
* JSON backup and restore: Secure backup and restore of accounts with encryption support.
* Password protection for accounts: Secure account storage with password protection. Includes key encryption. 
* Address format conversion: Convert between different address formats (Substrate/Polkadot/Kusama).
* Pre-configured test accounts: Quick access to test accounts with predefined balances.
* Transaction signing interface: Sign transactions with account management integration.

**4. Smart Contract Development**

* WASM code upload interface: Upload and manage WASM smart contract code. Includes version management.
* Contract instantiation workflow: Guided workflow for deploying smart contracts with parameter configuration.
* ABI management: Manage and organize contract ABIs with versioning support.
* Method calling interface: Interface for calling contract methods with parameter validation.
* Contract Event tracking: Track contract events with filtering capabilities.
* Contract compilation workflow: Compile ink! contracts directly from VSCode.
* ink! extension bundle: Integrated ink! development environment with syntax highlighting and completion.

**5. Chain Interaction & Monitoring**

* Extrinsic builder: Build and submit/execute extrinsics with parameter configuration.
* Transaction status tracking: Track transaction status from submission to finalization.
* Storage subscription system: Subscribe to storage changes with real-time updates.



**Technical Architecture**

**1. Extension Core**


* Built using VS Code Extension API
* TypeScript/JavaScript based implementation
* Event-driven architecture for real-time updates
* WebSocket communication for node interaction


**2. Node Integration Layer**


* Integration with Substrate node binary
* Process management using Node.js child_process
* WebSocket client for node communication
* Docker integration for containerized development


**3. Runtime Development Tools**


* Abstract Syntax Tree (AST) parsing for Rust code analysis
* Integration with Rust analyzer
* Metadata parsing and decoding


**4. Account Management System**


* Secure key storage using VSCode SecretStorage API
* Cryptographic operations using polkadot-js/keyring
* JSON parsing and validation for account import/export


**5. Smart Contract Integration**


* ink! language support with ink! extension
* WebAssembly compilation pipeline integration
* Contract ABI parsing and generation
* Integration with cargo contract


**6. Chain Interaction Layer**


* Integration with polkadot-js/api
* Custom WebSocket client for chain interaction
* Transaction building and signing




**Technology Stack**

* TypeScript for extension development
* VSCode Extension API: https://code.visualstudio.com/api
* @polkadot/api for chain interaction
* @polkadot/keyring for account management
* @polkadot/util for utilities
* Rest of Polkadot.js packages for various functionalities
* WebAssembly for runtime interaction
* React for webview-based UIs
* WebSocket for real-time communication
* Docker integration for development environments




**Limitations**

The extension will NOT:

* Handle production key management
* Include wallet functionality beyond development needs


### Ecosystem Fit

**Target Audience**

Primary target audiences include:

* **Substrate Chain Developers:** Teams and individuals building Substrate-based chains, parachain developers, and runtime developers working with FRAME pallets.
* **Smart Contract Developers:** ink! smart contract developers, dApp teams, and contract auditors requiring integrated development and testing environments.
* **Infrastructure Teams:** Node operators during development/testing phases and teams managing multiple development networks.
* **Technical Integration Teams:** Developers working on chain integrations, bridges, and cross-chain applications requiring multi-chain development environments.
* **Runtime Developers:** Teams focusing on runtime development, pallet creation, and chain upgrades needing simplified testing and deployment workflows.
* **Parachain Teams:** Development teams building and maintaining parachains requiring efficient development and testing environments.



**Ecosystem Needs**

Below are the key needs and addressed by the project:

**a. Problem**: Currently, developers need to manage multiple terminal instances for different tasks
* *Solution*: Unified terminal management through VSCode's integrated terminal system

**b. Problem**: Switching between various tools breaks development flow
- *Solution*: All tools accessible through a single VSCode command palette and sidebar

**c. Problem**: Configuration management across different tools is error-prone
- *Solution*: Centralized configuration management with validation

**d. Problem**: Time lost in context switching between tools
- *Solution*: Single interface for all development tasks within VSCode


**e. Problem**: Complex setup requirements for new developers
- *Solution*: One-click setup through VSCode's integrated development containers

**f. Problem**: Steep learning curve for Substrate development tools
- *Solution*: Guided workflows and integrated documentation for common development tasks

**g. Problem**: Lack of integrated development environments
- *Solution*: Complete IDE integration with all necessary Substrate development tools

**Similar projects**

There isn't any actively maintained VSCode extension for Substrate development currently. Previous VSCode extensions (both outdated) are listed below:

`Substrate plugin` plugin by `enfipy`
  - Github: https://github.com/everstake/vscode-plugin-substrate
  - VSCode Marketplace: https://marketplace.visualstudio.com/items?itemName=enfipy
  - Features: https://github.com/everstake/vscode-plugin-substrate/blob/master/docs/FEATURES.md#export-account
  - Last update: 9/25/2019
  - Installs: 1,600+

`VSCode Substrate` plugin by `Parity Technologies`
  - Github: 
  - VSCode Marketplace: https://marketplace.visualstudio.com/items?itemName=paritytech.vscode-substrate
  - Features: https://github.com/paritytech/vscode-substrate/blob/master/docs/features.md#21-compile---run-a-node
  - Last update: 12/14/2020
  - Installs: 2,695+

My plugin aims to build upon the features of these extensions while introducing new functionalities and modern development practices.



## Team :busts_in_silhouette:

### Team members

- Salih Toruner

### Contact

- **Contact Name:** Salih Toruner
- **Contact Email:** salihtrnr@gmail.com
- **Website:** https://www.linkedin.com/in/salih-toruner-4919b3212/

### Legal Structure

- **Registered Address:** -
- **Registered Legal Entity:** -

### Team's experience

I'm Salih Touner, a Linux Administrator in a private company with a degree in Electrical and Electronics Engineering. I’ve been working on private software projects for the past two months and have a strong interest in blockchain solutions. 

Recently, I've developed a solution for Stellar ecosystem and development of project is about to finish. It helps you to real-time monitoring and visualization system for Soroban CLI commands on the Stellar network, powered by the ELK stack.

- Soroban Command Insights: https://communityfund.stellar.org/project/soroban-command-insights-sci  

### Team Code Repos

- https://github.com/bearstore333

### Team LinkedIn Profiles (if available)

- https://www.linkedin.com/in/salih-toruner-4919b3212/

## Development Status :open_book:

I haven't started the actual development of the VSCode Substrate Extension yet, but I've spent considerable time exploring VSCode extension development and understanding what Substrate developers really need in their daily workflow by studying existing tools and previous plugins. I've identified the key pain points and opportunities for improving the development experience. I've outlined a clear roadmap for building this extension, which I'll detail in the Development Roadmap section below.

## Development Roadmap :nut_and_bolt:

The development roadmap for this project is as planned 2 milestones for the next 3 months.

### Overview

- **Total Estimated Duration:** 3 months
- **Full-Time Equivalent (FTE):** 1
- **Total Costs:** 30,000 USD
- **DOT %:** 50%

### Milestone 1 — Core Infrastructure 
- **Duration:** 1.5 month
- **FTE:** 1
- **Costs:** 15,000 USD

| Number | Deliverable | Specification |
| ------ | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | Detailed inline code comments, a README.md file with setup instructions, and a step-by-step tutorial |
| **0c.** | Testing | Comprehensive unit tests for following functionalities. A guide will describe how to execute tests and validate features |
| **0d.** | Docker | Provide a development container with all dependencies for extension testing. |
| 1. | Extension Framework | Setup of the VSCode extension framework with TypeScript, sidebar, and basic UI structure |
| 2. | Node Management | Implement start/stop node functionality, compile nodes from source, purge chain data, and configure node parameters with real-time logging and network type detection. |
| 3. | Runtime Development Tools | Add pallet management, a basic pallet explorer, dependency handling, and runtime metadata decoding. |
| 4. | Chain Interaction | Implement extrinsic builder, transaction status tracking, storage subscriptions. |
| 5. | Node Connectivity | Connect and manage Substrate nodes with WebSocket support. |

### Milestone 2 — Advanced Features  
- **Duration:** 1.5 month
- **FTE:** 1  
- **Costs:** 15,000 USD

| Number | Deliverable | Specification |
| ------ | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | Final documentation covering all extension features and integrations. |
| **0c.** | Testing | Complete test suite covering all functionality. Updated testing guide. |
| **0d.** | Docker | Final Docker container(s) with all extension features. |
| 1. | Smart Contract Tools | Implement WASM code upload, contract instantiation, ABI management, method calling, event tracking, and integration with cargo-contract. |  
| 2. | Account Management | Add account creation, import/export, backup/restore, password-protected storage, address conversion, and transaction signing. |
| 3. | ink! Extension Integration | Integrated ink! development environment with syntax highlighting and code completion. |
| 4. | Custom Endpoint Management | Allow users to add, edit, manage, and switch between multiple custom node endpoints. |
| 5. | Contract Compilation Workflow | Integrate with cargo contract for seamless ink! contract compilation. |


## Future Plans

After completing the above milestones, I will release the extension on the VSCode Marketplace and promote it through various channels, including Substrate developer forums, Discord, and developer communities. I will actively maintain the extension by addressing user feedback (Github issues), fixing bugs, and adding new features based on community requests (Github PRs). I will also create PRs in archived Substrate extension repositories to redirect users to the new extension and ensure a smooth transition.

My long-term plan is to establish the extension as the go-to tool for Substrate development, with a large developer base. After 1 year, I will share the extension's adoption metrics (download count from the VSCode marketplace), dev feedbacks, and future plans with the Substrate community to gather input and suggestions for further improvements. After that, if there are enough interests and support with good list of features to be added, I will consider for follow-up application or treasury proposal for further development and maintenance.

## Referral Program (optional) :moneybag:

- **Referrer:** -
- **Payment Address:** -

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation Website

I have not received financial contributions from anyone for this project. Additionally, I have not applied for any previous grants related to this initiative, just applied Stellar Community Fund for a monitoring tool for Soroban CLI commands on the Stellar network.
