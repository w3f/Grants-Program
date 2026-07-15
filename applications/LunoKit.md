# LunoKit

- **Team Name:** LunoLab
- **Payment Details:**
  - **DOT**: 14pGVuuBxbN9dVNGh2a6dNqAEP7f48z7ks5vH9WNXKakUm7Z
  - **Payment**: 14pGVuuBxbN9dVNGh2a6dNqAEP7f48z7ks5vH9WNXKakUm7Z (USDC).
- **Level:** 2

## Project Overview :page_facing_up:

### Overview
LunoKit is the core open-source product developed by the Lunolab team, aiming to build a customizable UI-themed, developer-friendly Web3 account connection infrastructure for the Polkadot ecosystem. It unifies wallet connection state management, account abstraction, chain switching, and session recovery, while also providing a rich set of UI components and multi-chain account support, greatly reducing the integration threshold for DApps built on Polkadot SDK chains.  
As a frontend development library based on React + TypeScript, LunoKit also provides over 20 Hooks, including account state management, chain switching, connection control, and on-chain data subscription, with support for data caching. Developers can focus on core business logic while LunoKit handles the account module.

### Project Details

#### 1. User Interface Component Design
LunoKit will provide a set of React UI components for account connection, covering common functionalities such as connect button, wallet selection modal, account details modal, network switcher, and asset display panel. All components are responsive, adapting to both mobile and desktop, and support custom themes.  
![ui](https://github.com/user-attachments/assets/d6c555ca-4ec6-4952-844f-ea3cbb157d8c)

#### 2. Architecture Design and Core Modules

LunoKit adopts a clear three-layer modular architecture, handling connection logic, React integration, and UI presentation respectively:

#### `@luno-kit/core`  
Encapsulates wallet connectors, chain configuration, and account management underlying logic, providing unified connection states and signer interfaces.

#### `@luno-kit/react`  
The integration layer built with React, providing over 20 composable Hooks for managing connection states, chain switching, and on-chain data subscriptions.

Common Hooks examples:

- `useAccount()` / `useAccounts()`
- `useConnect()` / `useDisconnect()`
- `useChains()` / `useSwitchChain()`
- `useSubscription()` / `useBalance()` / `useBlockNumber()`
- `useSendTransaction()` / `useSignMessage()` / `useSigner()`

#### `@luno-kit/ui`  
Provides plug-and-play components such as connect buttons, account panels, and network switchers, supporting style and theme customization.

### Tech Stack Overview
| Technology              | Purpose                                    | Module                     |
|--------------------------|--------------------------------------------|----------------------------|
| TypeScript               | Type safety, improved development efficiency | All modules               |
| React 18                 | Building UI and lifecycle logic             | @luno-kit/react, @luno-kit/ui |
| Zustand                  | Centralized state management (connection state, accounts, chain) | @luno-kit/react |
| TanStack React Query     | On-chain data subscription, cache updates   | @luno-kit/react, @luno-kit/ui  |
| Dedot                    | Lightweight and modern Polkadot API alternative, better performance and smaller bundle size | @luno-kit/core, @luno-kit/react |
| Tailwind CSS 4.x         | Responsive component styling                | @luno-kit/ui               |
| Radix UI                 | Accessible interactive component foundation | @luno-kit/ui               |

### Ecosystem Fit

#### Target Audience of LunoKit:
- **Parachain development teams**: Need to quickly integrate account connection modules into chain websites, governance platforms, or marketing pages.  
- **DApp development teams**: Teams building DeFi, NFT, DAO, GameFi, etc., often facing challenges of multi-wallet compatibility and connection state management.  
- **UI developers**: Seeking accessible, theme-customizable, componentized wallet connection UIs.  
- **Polkadot hackathon participants / startups**: Strong demand for "out-of-the-box" components to achieve high-quality connection experiences within limited time.  

#### What real needs does LunoKit address?

In Polkadot/Substrate frontend development, developers have long faced issues such as inconsistent wallet access logic, complex state management, and lack of standardized UI. LunoKit systematically addresses the following key needs:

- **Unified multi-wallet connection**  
  Supports major injected wallets such as polkadot.js, Talisman, SubWallet, and NovaWallet. Provides a unified connector abstraction and type system to avoid high costs and errors caused by wallet interface differences.  

- **Standardized account & connection state management**  
  Encapsulates connection state, current account, wallet source, chain info, and authorization state into a unified state model. Combined with React Hooks, provides highly composable integration and avoids repetitive logic in DApps.  

- **Multi-chain adaptability**  
  Supports custom chain configuration and inter-chain switching, compatible with multi-parachain scenarios, suitable for multi-chain deployment applications.  

- **Plug-and-play connection UI components**  
  Provides customizable connect buttons, account panels, network switchers, and asset lists. Fully a11y compliant, improves UI consistency and efficiency, reduces repetitive implementation. Components are responsive, mobile-friendly, and support Deeplink-based flows for wallet apps like SubWallet.  

- **On-chain data subscription & caching**  
  Integrates Dedot and TanStack Query, encapsulates derive/storage query logic, supports auto-caching, state updates, and error recovery for efficiency and stability.  

- **Modern development process & framework support**  
  Offers integration templates for CRA, Vite, Next.js, combined with TypeScript-first experience, Hooks system, and modular architecture.  

- **Custom UI system, decoupling components & logic**  
  Core logic is provided as Hooks, enabling developers to skip default UI components and fully customize connect buttons, modals, etc., for diverse product styles and UX designs.  

- **PolkaVM Support**  
  After completing Substrate support, LunoKit will support PolkaVM, enabling simultaneous connections to Substrate and EVM accounts, boosting efficiency for Solidity DApp developers on PolkaHub chains.  

#### Similar attempts in Substrate/Polkadot/Kusama ecosystem:

- **SubConnect**: It has not been updated for nearly a year, with multiple issues left unanswered by developers and the project in a stagnant state ([reference link](https://github.com/Koniverse/SubConnect-v2/issues)). We tested and found that some of its functions are no longer usable. In addition, it is built on top of web3-onboard, with the core library heavily dependent on web3-onboard, which limits its long-term maintainability.
- **Talisman Connect**: Officially deprecated ([issue](https://github.com/TalismanSociety/talisman-connect/issues/56))  
- **Dot-Connect**: The functionality is relatively limited, only supporting basic wallet connection features and lacking a complete account module. The range of components is limited, and the UI and user experience quality are relatively weak. For development teams.


#### Key Advantages of LunoKit:

- TypeScript-first type system, clear interface specifications.  
- React Hooks-based modular encapsulation for state, accounts, chain switching, and subscriptions.  
- Decoupled state management and connection logic—developers can skip official UI and still use Hooks to build custom UIs.  
- Built-in customizable, responsive UI components (buttons, modals, switchers) with a11y compliance.  
- Complete examples & docs to reduce learning curve.  
- The core library is fully self-developed, does not rely on external repositories, and ensures controllable long-term maintenance and strong ecosystem adaptability.


In the broader Web3 ecosystem, comparable tools include:

- **wagmi (Ethereum)**: React Hooks for wallet connection and state.  
- **RainbowKit (Ethereum)**: Customizable wallet connection UI, designed to pair with wagmi.  

These are standards in Ethereum, but Polkadot lacks equivalents. LunoKit integrates both functionalities to fill this gap.

## Team :busts_in_silhouette:
### Team members

- Leader: Cris Sun  
- Member: Brain (WBH)  

### Contact

- **Contact Name:** Cris Sun  
- **Contact Email:** lunolab1@gmail.com  
- **Website:** https://www.lunolab.xyz/  

### Legal Structure

- **Registered Address:** -  
- **Registered Legal Entity:** -  

### Team's experience

**Lunolab** is composed of two core members with extensive blockchain development backgrounds. Since joining the **ChainX team** in 2020, they have been active in the Web3 field, participating in the incubation and development of multiple public chains and application projects. Cris has over 5 years of Web3 product experience, focusing on cross-chain protocol design and user experience optimization. He led the product design of ChainX, worked as a product manager responsible for OmniBTC’s frontend product design and project management, and from 2023–2025 served as the product lead of BEVM/GEB, overseeing chain-level functionality design and developer tool planning. Brain is a senior blockchain frontend developer. He joined the ChainX frontend team in 2020, began leading the frontend system development of OmniBTC in 2022 (including OmniSwap and OmniLending), and from 2023–2025 was fully responsible for the frontend architecture of BEVM/GEB, covering explorer, wallet, and developer tools, accumulating deep experience in blockchain frontend development.

- **2020 – ChainX Team**  

- **June 2022 – OmniBTC (incubated within ChainX, now closed, social media [X](https://x.com/OmniBTC))**  
  OmniBTC was a cross-chain DeFi platform that included two core products:  
  - **OmniSwap**: A cross-chain trading aggregator supporting **40+ public chains** and **20+ cross-chain bridges**, with a cumulative trading volume exceeding **$2 billion**.  
  - **OmniLending**: A cross-chain lending platform with peak TVL of over **$10 million**.  

- **June 2023 – June 2025, BEVM (incubated within ChainX, later renamed [GEB](https://www.geb.network/))**  
  BEVM was a public chain developed with the Substrate technology stack, aiming to be a Bitcoin Layer 2 compatible with EVM smart contracts, with over **990,000 on-chain addresses**.

### Team Code Repos

- https://github.com/Luno-lab/LunoKit  

- https://github.com/wbh1328551759 (many non-open-sourced repos for GEB, contribution proof: [screenshot1](https://github.com/user-attachments/assets/de190fa2-3cff-486f-bcf0-4042cb8f1945), [screenshot2](https://github.com/user-attachments/assets/e8ef35ba-5a30-4345-a870-6b7f0989d47c))  

- https://github.com/Gintma (Cris also has a certain development background and will be responsible for part of the UI-related code implementation)  

## Development Status :open_book:

LunoKit has completed its initial version and has officially released a usable version.

- **Demo Site**  
  https://demo.lunolab.xyz  

- **GitHub Repo**  
  https://github.com/Luno-lab/LunoKit  

- **Developer Docs**  
  https://docs.lunolab.xyz/  


## Development Roadmap :nut_and_bolt:
### Overview

- **Total Estimated Duration:** 3 months  
- **Full-Time Equivalent (FTE):** 2  
- **Total Costs:** 30,000 USD  
- **DOT %:** 50%  

### Milestone 1  

- **Estimated duration:** 1.5 months  
- **FTE:** 2  
- **Costs:** 15,000 USD  

| No.  | Deliverable | Specification |
|------|-------------|---------------|
| 0a.  | License | MIT |
| 0b.  | Documentation | Provide a complete online documentation site, including installation guide, quick start, API reference, and integration examples. The documentation should cover core concepts, connector usage, and configuration options. |
| 0c.  | Tests & Test Guide | Core functionality is ensured through Vitest unit tests; covering connectors, utility functions, and configuration system. |
| 0d.  | Build System | Complete monorepo build; TypeScript compiled using tsup, supporting both ESM and CJS outputs. |
| 0e.  | Package Management | Use pnpm workspace and Changesets for version management and package publishing, supporting automated NPM publishing. |
| 1.   | Core Module: `@luno-kit/core` | Implement core connector abstraction (`BaseConnector`), configuration system (`createConfig`), chain definitions (`Chain` type), and storage system; support custom API options and type definitions. |
| 2.   | Wallet Connectors Collection | Implement 6 connectors: Polkadot.js Extension, SubWallet, Talisman, Polkagate, Nova Wallet, WalletConnect. Each connector supports account discovery, connection management, and signing. |
| 3.   | Chain Configuration System | Pre-configure 6 chains: Polkadot, Kusama, Westend, Paseo,Polkadot AssetHub, Paseo AssetHub including RPC endpoints, SS58, token info, and icons; support custom Substrate chain configurations. |
| 4.   | Utility Functions Library | Implement essential utility functions such as address format conversion, SS58 encoding/decoding, balance formatting, and device detection. |
| 5.   | Type System | Provide full TS types (`Account`, `Chain`, `Config`, `Connector`, `Signer`, etc.) to ensure type safety. |
| 6.   | UI Components: `@luno-kit/ui` | Implement 10 complete UI components: ConnectButton, ConnectModal, AccountDetailsModal, etc. |
| 7.   | Demo Website | Provide a fully functional demo website. |


---

### Milestone 2  
- **Estimated Duration:** 1.5 months  
- **FTE:** 2  
- **Costs:** 15,000 USD  

| No.  | Deliverable | Specification |
|------|-------------|---------------|
| 0a.  | License | MIT |
| 0b.  | Documentation | Documentation expansion, including React Hooks API reference, UI component documentation, theme customization guide, and advanced usage tutorials. |
| 0c.  | Tests & Test Guide | Provide comprehensive tests for React components and Hooks: components tested with React Testing Library, Hooks tested with Vitest; cover all core functionalities. |
| 0d.  | Example Applications | Provide **4** complete examples: `with-vite` (Vite integration), `with-nextjs-app` (Next.js App Router), `with-nextjs-pages` (Next.js Pages Router), `with-cra` (Create React App). |
| 0e.  | CSS Styling System | Complete styling system based on Tailwind CSS, providing `@luno-kit/ui/styles.css` and CSS variable support. |
| 1.   | React Hooks: `@luno-kit/react` | Implement **22** Hooks. |
| 2.   | State Management System | Lightweight state management based on Zustand, supporting connection state persistence, account management, and config caching; exposed through `LunoKitProvider` for app-level state. |
| 3.   | Mobile Adaptation: `@luno-kit/ui` | Implement mobile wallet connection via Deeplink technology; includes device detection, UI adaptation, and auto-redirect logic. |
| 4.   | Theme System | Theme system based on CSS variables, supporting custom themes. |
| 5.   | API Integration Layer | Type-safe API layer based on Dedot; supports custom RPC calls and runtime version detection. |
| 6.   | Development Tools Configuration | Complete engineering setup: ESLint, TypeScript, Vitest, pnpm workspace, tsup build, etc. |


## Future Plans :crystal_ball:

In the short term, our focus will be on both enhancing LunoKit’s functionality and promoting it across the Polkadot ecosystem:

- **More UI Components**: Add richer UI components, including advanced asset lists with NFT support and on-chain transaction history for addresses.
- **PolkaVM Support**: Continue developing support for PolkaVM, enabling developers to connect both Substrate-based accounts and EVM-based accounts simultaneously. This will significantly improve efficiency for those deploying Solidity DApps on PolkaHub chains.  
- **Extended Wallet Support**: Integrate additional wallets such as Ledger, OneKey, Mimir, Fearless, and Polkadot Vault.  
- **Multi-framework Frontend Support**: Extend beyond React to support frameworks such as **Vue** and **Svelte**, broadening accessibility for developers.  
- **Web2 Social Login Exploration**: Explore embedded wallet solutions with Web2 social login (Google, GitHub, email) for smoother onboarding.  
- **Ecosystem Promotion**: Increase exposure within the Polkadot ecosystem through collaboration with **OneBlock, OpenGuild, and PolkaWorld**, including launching tutorials, publishing technical articles, and conducting developer-focused courses.

In the long term, our goal is to establish **LunoKit as the de facto wallet connection standard** for the Polkadot ecosystem, much like **wagmi + RainbowKit** in the EVM ecosystem. We aim to provide a unified developer experience across Substrate and EVM, multiple wallets, and frontend frameworks, making LunoKit the go-to infrastructure for DApp developers.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?**  
### PolkaWorld
