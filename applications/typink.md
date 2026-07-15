# typink

- **Team Name:** Coong Crafts
- **Payment Details:**
  - **DOT**: 1nfu5pgjDzn2ozcBHVdAbGCvVyWRshVhtSixo61vx9sLrvD
  - **Payment**: USDC - 1nfu5pgjDzn2ozcBHVdAbGCvVyWRshVhtSixo61vx9sLrvD
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

### Overview

[ink!](https://use.ink/) has long been a vital component of the Polkadot ecosystem, serving as a key technology for building smart contracts within this decentralized network. As the Polkadot ecosystem continues to evolve, ink! is now maintained by a dedicated community with plans for exciting future developments. Despite its pivotal role, interacting with ink! contracts presents a significant challenge, particularly for new developers. This difficulty largely stems from the absence of a fully type-safe API at the message level and the lack of type-safe support for working with contract events. As a result, developers often struggle with reliability and efficiency when integrating ink! smart contracts into their decentralized applications (dApps).

We propose to build `typink`, a fully type-safe React hooks library designed to accelerate ink! dApp development and enable seamless interaction with ink! smart contracts. `typink` simplifies contract integration by providing a robust API, ensuring reliable and efficient handling of contract messages and events.

### The limitations of current toolings

Current tooling, such as `use-inkathon`, offers valuable functionality for interacting with ink! contracts, but there are areas where further improvements can enhance the developer experience. For instance, `use-inkathon` does not yet provide a fully type-safe API at the contract message level, nor does it offer type-safe features for managing contract events. Additionally, its tight coupling of wallet/account authentication with API/client connections can limit flexibility for developers looking to integrate with different wallet solutions (e.g., [Sub Connect](https://github.com/Koniverse/SubConnect-v2), [Talisman Connect](https://github.com/TalismanSociety/talisman-connect)). Expanding these capabilities could provide developers with greater control and ease of use when interacting with contracts.

Similarly, `typechain-polkadot` addresses some of these gaps by focusing on type safety, but its code generation approach can lead to increased bundle sizes, adding overhead to the dApp. A solution that combines type safety with lightweight integration could further optimize development workflows and improve performance.

### Design Goals

The primary goal of the `typink` project is to provide a robust set of React hooks and providers that offer a fully type-safe API for interacting with ink! contract messages and events. Built on top of Dedot’s powerful type system for [ink! smart contracts](https://docs.dedot.dev/ink-smart-contracts), `typink` will significantly enhance the developer experience by making contract interactions more reliable and efficient.

A key feature of `typink` is its decoupled architecture, which separates wallet connectors from client connections. This loose coupling will allow developers to use external wallet-connector solutions, such as Subconnect or Talisman Connect, while also supporting existing API or client initialization processes. Furthermore, `typink` will efficiently manage multiple chain connections through lazy initialization, meaning connections are established only when necessary. This approach minimizes resource consumption and allows for handling multiple contract deployments and interactions.

`typink` will also include a CLI tool designed to help developers quickly create boilerplate projects, making it easier and faster for teams to start building their dApps on top of `typink`.

### General API Design

`typink`’s API design revolves around the below core components that enable flexible, scalable contract interactions:

#### Providers

- `ClientProvider` supports multiple clients and implements lazy initialization, ensuring connections to the network are established only when in use and are closed when no longer needed. This approach reduces resource consumption and optimizes performance.
- `WalletProvider` acts as a wallet connector, providing access to connected accounts and supporting integration with external wallet connectors.
- `TypinkProvider` serves as a wrapper provider for both `ClientProvider` and `WalletProvider`, streamlining the integration process and offering a single context for managing client and wallet connections.

#### Hooks

Typink provides a set of powerful hooks that simplify the development process for interacting with ink! contracts. These hooks include:
- `useTypink`: Core hook for interacting with ink! contracts.
- `useConnectedAccount`: Access the currently connected wallet account.
-	`useWallets`: Manage wallet connections and access available wallets.
-	`useClient`: Get client API instance.
-	`useContract`: Initialize & get a [Contract](https://docs.dedot.dev/ink-smart-contracts/queries) instance.
-	`useContractDeployer`: Initialize & get a [ContractDeployer](https://docs.dedot.dev/ink-smart-contracts/images-and-media#initialize-contractdeployer) instance
-	`useContractQuery`: Perform contract queries, decode & manage their results.
-	`useWatchContractQuery`: Watch contract query changes in real-time.
-	`useContractTx`: Submit contract transactions with dry-run & fee estimation
-	`useContractDeployerTx`: Submit contract deployment transactions with dry-run & fee estimation
-	`useWatchContractEvent`: Watch/listen to contract events.
-	`useBalance`: Fetch native Substrate balances.
-	`usePsp22Balance`: Retrieve balances for PSP22 tokens with watching for changes option.

#### Helpers & Utilities

In addition to the core hooks and providers, `typink` will include various helper functions and utilities to further assist developers. These will include: 
- Utility for formatting balances for display purposes
- Retrieving human-readable error messages for DispatchError (ModuleError) or LangError
- List of ink!-contracts supported networks for configuration (rpc endpoints, decimals ...) & display purposes (name, logo ...)

`typink` will also feature a notification system that tracks transaction status, providing real-time feedback to users during the transaction lifecycle.

#### CLI & boilerplate/starter project template

`typink` also comes with a built-in CLI that simplifies starting a new project from a pre-configured template, similar to creating a new React project using `create-react-app` or `vite`.

### Technical Stack

- [React](https://react.dev/)
- [Dedot](http://dedot.dev/)

### Ecosystem Fit

`typink` addresses a crucial gap in the Polkadot and ink! ecosystem by providing a fully type-safe React hooks library for seamless interaction with ink! smart contracts. Unlike existing tools such as `use-inkathon` and `typechain-polkadot`, `typink` offers a highly reliable and developer-friendly API for interacting with contract messages and events. By leveraging Dedot for type-safe contract interaction, `typink` ensures that developers can confidently integrate smart contracts with fewer errors and improved maintainability.

`typink` also boosts developer productivity by offering flexible wallet integration and simplifying multi-chain connections with lazy initialization. Its built-in CLI and boilerplate template provide an easy starting point for new projects, allowing developers to focus on building rather than configuration. By prioritizing type safety, reliability, and efficiency, `typink` enhances the overall developer experience and contributes to the growth and robustness of the Polkadot ecosystem.

## Team :busts_in_silhouette:

### Team members

- Thang X. Vu (Team Leader) - https://github.com/sinzii
- Tung Vu - https://github.com/1cedrus

### Contact

- Contact Name: Thang X. Vu
- Contact Email: thang@coongcrafts.io

### Legal Structure

- N/A

### Team's experience

Coong Crafts is a small team set out with a mission to bring Web3 closer to the world. We previously completed grants to build open source projects for Polkadot ecosystem:
- [Dedot](https://grants.web3.foundation/applications/delightfuldot): a next generation Javascript Client for Polkadot & Substrate.
- [Coong Wallet](https://grants.web3.foundation/applications/coong_wallet): a website-based wallet solution to address the inconsistent wallet experience on mobile & desktop and bring a new approach to onboard new users to Polkadot & Kusama ecosystem.

### Team Code Repos

Project repositories will be hosted at https://github.com/dedotdev/dedot

## Development Status :open_book:

We have developed a demo application during the research phase of this project, which highlighted the significant potential of this tool for wider adoption. We believe it could greatly benefit the developer community if introduced on a larger scale. You can explore the demo and find more details in [this repository](https://github.com/dedotdev/typink-app).

![typink-hooks](https://github.com/user-attachments/assets/64d3102f-f702-4772-9ef6-df131ffa1f02)

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 3 months
- **Full-Time Equivalent (FTE):**  1.5
- **Total Costs:** 30.000 USD
- **DOT %:** 50%

### Milestone 1: Hooks, providers & basic documentation

- **Estimated duration:** 1.5 month
- **FTE:**  1,5
- **Costs:** 15.000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | MIT |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a developer can start using `typink` for their existing project or set up a new project |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 1. | Core providers | We'll build the core providers described in the [General API Design / Providers](#providers) |
| 2. | Core hooks | We'll build the core hooks described in the [General API Design / Hooks](#hooks) |
| 3. | Publish to npm | We'll package and publish the library to npm, so developers can install and start using it.  |

### Milestone 2: Utilities & helpers, CLI to generate boilerplate project, example & documentation

- **Estimated Duration:** 1 month
- **FTE:**  1,5
- **Costs:** 15.000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | MIT |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **documentation** that explains how a developer can start utilities, helpers & CLI to start building/setup new project |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Article | We will publish an article to introduce `typink` features & instructions on how to getting started | 
| 1. | Helpers & Utilities | We'll build the utilities & helpers described in the [General API Design / Helpers & Utilities](#helpers--utilities) |
| 2. | CLI & boilerplate template project | We'll build the boilerplate template project & CLI to generate/setup a new project |
| 3. | Example dapp | We'll build an example dapp using `typink` and document the process of using `typink` features to build it as a show-case |


## Future Plans

Next steps for `typink`:
- Supports Vue, React Native
- More project templates with different configuration, setup
- Adopt ink! latest changes/updates
