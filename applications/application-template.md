# Name of your Project
Omnipass - light wallet 
> [!NOTE]
> This document will be part of the terms and conditions of your agreement and, therefore, needs to contain all the required information about the project. Don't remove any of the mandatory parts presented in bold letters or as headlines (except for the title)! Lines starting with a `>` (such as this one) should be removed. Please use markdown instead of HTML (e.g., `![](image.png)` instead of `<img>`).
>
> See the [Grants Program Process](https://grants.web3.foundation/docs/process) on how to submit a proposal.

- **Team Name:** swen usa
- **Payment Details:**
  - **DOT**: For the **DOT** "12F4tc8yuGc5pZsbbPNS4TEwpDr7td8rMvnVyPQFxQnskqTk"
  - **Payment**: For the **USDC** "12F4tc8yuGc5pZsbbPNS4TEwpDr7td8rMvnVyPQFxQnskqTk"
- **[Level] 1


## Project Overview :page_facing_up:

If this application is in response to an RFP, please indicate this on the first line of this section.

If this is an application for a follow-up grant (the continuation of an earlier, successful W3F grant), please provide the name and/or pull request of said grant on the first line of this section.

### Overview

Please provide the following:

- If the name of your project is not descriptive, a tagline (one sentence summary).
- A brief description of your project.
- An indication of how your project relates to / integrates into Substrate / Polkadot / Kusama.
- An indication of why your team is interested in creating this project.

- **Tagline:** OmniPass is an embedded light wallet that derives stateless private keys from passkey PRF extensions for seamless, secure onboarding.

- **Description:** OmniPass is an open-source npm package designed to enable developers to quickly integrate an embedded light wallet into their dApps. It leverages WebAuthn passkeys with PRF (Pseudo-Random Function) extensions to generate deterministic, stateless private keys directly from user biometrics or hardware authenticators. This eliminates the need for seed phrases, persistent storage, or complex key management, recreating keys on-demand for each session. The package handles wallet creation, authentication, transaction signing, and integration with Polkadot/Substrate APIs, making it ideal for browser-based web apps.

- **Relation to Substrate / Polkadot / Kusama:** OmniPass integrates directly with Polkadot.js libraries to connect to Substrate-based chains, enabling easy user onboarding for dApps on Polkadot, Kusama, or parachains. It supports testnet interactions out-of-the-box (e.g., signing transactions on Westend or Rococo) and promotes broader adoption by simplifying access to Substrate's runtime and light client features without requiring users to manage traditional wallets.

- **Team Interest:** As a solo developer with a background in web3 authentication, I've been fascinated by passkey-based wallets since discovering PRF extensions for encryption and key derivation. With PRF support expanding in 2025 (e.g., broader adoption in browsers like Chrome and Safari, and integrations in web3 tools), now is the perfect time to build an open-source solution that bridges web2 UX with Substrate's decentralized ecosystem.

### Project Details

We expect the teams to already have a solid idea about your project's expected final state. Therefore, we ask the teams to submit (where relevant):

- Mockups/designs of any UI components
- Data models / API specifications of the core functionality
- An overview of the technology stack to be used
- Documentation of core components, protocols, architecture, etc. to be deployed
- PoC/MVP or other relevant prior work or research on the topic
- What your project is *not* or will *not* provide or implement
  - This is a place for you to manage expectations and clarify any limitations that might not be obvious

  - **Mockups/Designs of UI Components:** Wireframes for key UI elements (e.g., passkey registration modal, transaction signing flow, and wallet dashboard) will be provided in Figma (shared link upon milestone completion). These focus on minimalistic, embeddable components that blend into host dApps.

- **Data Models / API Specifications:** The package exposes a simple API based on WebAuthn standards:
  - `createWallet(options: { rpName: string, userName: string }): Promise<Wallet>` – Registers a passkey and derives a stateless key pair using PRF.
  - `authenticate(): Promise<AuthResult>` – Authenticates via biometrics and recreates the private key.
  - `signTransaction(tx: SubstrateTx): Promise<SignedTx>` – Signs transactions using Polkadot-api integration.

  Reference: Web Authentication API (https://developer.mozilla.org/en-US/docs/Web/API/Web_Authentication_API).

- **Technology Stack:** 
  - Core: Node.js/npm package with TypeScript.
  - Dependencies: @oslojs/webauthn (for WebAuthn handling), @oslojs/encoding (base64/HEX utilities), @oslojs/crypto (cryptographic primitives for PRF), @polkadot-api (for Substrate integration).
  - Testing: Jest for unit/integration tests.

- **Documentation of Core Components:** 
  - **Passkey Registration:** Uses `navigator.credentials.create()` with PRF extension to generate a credential and derive a salt for key generation.
  - **Stateless Key Derivation:** PRF evaluates a pseudo-random function over the passkey's output to recreate Ed25519 or Sr25519 keys deterministically.
  - **Architecture:** Client-side only (browser-embedded), no server dependencies; connects to Substrate nodes via WebSocket (e.g., ws://localhost:9944).
  - Protocols: Compliant with FIDO2/WebAuthn for passkeys; uses Substrate's SCALE codec for transactions.

- **PoC/MVP or Prior Work:** A live PoC is available at https://passkeywallet.fundation.dev/, demonstrating passkey creation, PRF extension check, and basic stateless key recreation. It simulates wallet setup in 4 steps, emphasizing security (no key storage) and speed. Source code is in the repo: https://github.com/swenthebuilder/passkeywallet (initial commits include WebAuthn setup and PRF derivation logic).

- **What the Project is Not:** 
  - Not a full-fledged standalone wallet app (focus on embeddable package).
  - Not handling on-chain deployments or smart contracts (purely client-side for Substrate integration).
  - Not including fiat on-ramps or advanced DeFi features in this milestone (see masterplan for expansions).
  - This is Milestone 1 of the OmniPass project. For the complete roadmap, see the masterplan: https://github.com/swenthebuilder/OmniPassFundingApplication/blob/main/FundingApplication.md.


Things that shouldn’t be part of the application (see also our [FAQ](../docs/faq.md)):

- The (future) tokenomics of your project
- For non-infrastructure projects—deployment and hosting costs, maintenance or audits
- Business-oriented activities (marketing, business planning), events or outreach

### Ecosystem Fit

Help us locate your project in the Polkadot/Substrate/Kusama landscape and what problems it tries to solve by answering each of these questions:

- Where and how does your project fit into the ecosystem?
- Who is your target audience (parachain/dapp/wallet/UI developers, designers, your own user base, some dapp's userbase, yourself)?
- What need(s) does your project meet?
- How did you identify these needs? Please provide evidence in the form of (scientific) articles, forum discussions, case studies, or raw data.
- Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?
  - If so, how is your project different? Please identify and assess any projects addressing the same need and explain how your project is distinct. Feel free to include applicable research data, statistics, or metrics.
  - If not, please indicate why such a project might not have been possible, successful, or attempted. 
- Are there any projects similar to yours in related ecosystems? 

- **Target Audience:** 
  - dApp developers building on Substrate/Polkadot/Kusama who need quick wallet integrations.
  - Retail users seeking simple, seedless crypto management.
  - Enterprises integrating blockchain services with secure, biometric auth.

- **Fit in the Ecosystem:** OmniPass provides vertical integration for user interactions in the Polkadot/Substrate stack, sitting between dApp frontends and Substrate nodes. It simplifies wallet embedding for parachain projects, enhancing accessibility without relying on extensions

- **Needs Met:** Addresses onboarding friction (e.g., seed phrase loss, complex setups) by enabling passwordless, stateless wallets. Improves 
security against phishing and key theft while maintaining non-custodial control.

- **Similar Projects in Substrate/Polkadot/Kusama:** 
  - Apillon Embedded Wallet: Offers passkey login and Substrate support but uses encrypted keys on Oasis Protocol (not fully stateless via PRF).
  - Differentiation: OmniPass is unique in deriving fully stateless private keys from PRF (no encryption/storage), as an MIT-licensed npm package tailored for Substrate light clients. No direct competitors offer this PRF-focused, open-source integration.

- **Similar Projects in Related Ecosystems:** 
  - Dynamic.xyz: Embedded passkey wallets with MPC, but EVM-focused and custodial elements.
  - JoyID: Passkey wallet on Nervos, excels in UX but not stateless or Substrate-compatible.
  - passkeys-4337/smart-wallet: ERC-4337 with passkeys, but Ethereum-only and not PRF-stateless.
  - Why Possible Now: PRF extensions gained widespread support in 2025 (e.g., full iCloud/Google sync), enabling stateless designs that weren't viable earlier.

## Team :busts_in_silhouette:

> [!IMPORTANT]
> Please note that the data provided in this section is for administrative and informational purposes only. All beneficiaries of a grant must also be listed in the KYC/KYB process during the application phase. See our [FAQ](https://grants.web3.foundation/docs/faq#what-is-kyckyb-and-why-do-i-have-to-provide-this-data) for more info.

### Team members

- Name of team leader
swenthebuilder
- Names of team members
swenthebuilder

### Contact

- **Contact Name:** victor stallone peck 
- **Contact Email:** swenpeck@outlook.com
- **Website:** [fundation](https://fundation.dev/)

### Legal Structure

- **Registered Address:** 1389 SW 12th ave , Pompano Beach Fl 33069 USA
- **Registered Legal Entity:** Swen USA llc

### Team's experience

Please describe the team's relevant experience. If your project involves development work, we would appreciate it if you singled out a few interesting projects or contributions made by team members in the past.

If anyone on your team has applied for a grant at the Web3 Foundation previously, please list the name of the project and legal entity here.

### Team Code Repos

- https://github.com/swenthebuilder/passkeywallet

Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine.

- https://github.com/swenthebuilder

### Team LinkedIn Profiles (if available)

- https://www.linkedin.com/{person_1}
- https://www.linkedin.com/{person_2}


## Development Status :open_book:

If you've already started implementing your project or it is part of a larger repository, please provide a link and a description of the code here. In any case, please provide some documentation on the research and other work you have conducted before applying. This could be:

- links to improvement proposals or [RFPs](https://grants.web3.foundation/docs/rfps) (requests for proposal),
- academic publications relevant to the problem,
- links to your research diary, blog posts, articles, forum discussions or open GitHub issues,
- references to conversations you might have had related to this project with anyone from the Web3 Foundation,
- previous interface iterations, such as mock-ups and wireframes.

## Development Roadmap :nut_and_bolt:

This section should break the development roadmap down into milestones and deliverables. To assist you in defining it, we have created a document with examples for some grant categories [here](../docs/Support%20Docs/grant_guidelines_per_category.md). Since these will be part of the agreement, it helps to describe *the functionality we should expect in as much detail as possible*, plus how we can verify and test that functionality. Whenever milestones are delivered, we refer to this document to ensure that everything has been delivered as expected.

Below we provide an **example roadmap**. In the descriptions, it should be clear how your project is related to Substrate, Kusama or Polkadot. We *recommend* that teams structure their roadmap as 1 milestone ≈ 1 month.

> [!CAUTION]
> If any of your deliverables are based on somebody else's work, make sure you work and publish *under the terms of the license* of the respective project and that you **highlight this fact in your milestone documentation** and in the source code if applicable! **Projects that submit other people's work without proper attribution will be immediately terminated.**

### Overview

- **Total Estimated Duration:** 3 months
- **Full-Time Equivalent (FTE):** 0.5
- **Total Costs:** 10,000 USD
- **DOT %:** 25% USD, 75% DOT

### Milestone 1 — Basic Functionality: Embedded Light Wallet npm Package

- **Estimated Duration:** 3 months
- **FTE:** 0.5
- **Costs:** 10,000 USD

> [!NOTE]
> **The default deliverables 0a-0d below are mandatory for all milestones**, and deliverable 0e at least for the last one. All code will be open-sourced on GitHub under the chosen license, with repositories made public upon milestone completion.

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | MIT License. See the [delivery guidelines](https://grants.web3.foundation/docs/Support%20Docs/milestone-deliverables-guidelines#license) for details. The license will be included in the main repository and any sub-repos. |
| **0b.** | Documentation | We will provide both **inline documentation** in the code (e.g., JSDoc comments for APIs) and a basic **tutorial** that explains how a user can integrate the npm package into a web application, create an Embedded Light Wallet using passkeys (via WebAuthn), derive keys with PRF, manage stateless keys, and perform operations like signing test transactions against a Polkadot testnet using Polkadot.js. See the [delivery guidelines](https://grants.web3.foundation/docs/Support%20Docs/milestone-deliverables-guidelines#documentation) for details. Documentation will be hosted in the GitHub repo's README and a dedicated docs folder. |
| **0c.** | Testing and Testing Guide | Core functions (e.g., passkey authentication, PRF key derivation, stateless key storage, transaction signing) will be fully covered by comprehensive unit tests using Jest, ensuring functionality and robustness across browsers. In the guide, we will describe how to run these tests, including setup with npm install and commands like `npm test`. Integration tests will simulate wallet embedding in a sample app. See the [delivery guidelines](https://grants.web3.foundation/docs/Support%20Docs/milestone-deliverables-guidelines#testing-guide) for details. |
| **0d.** | Prototype ready for testing | We will provide an npm package that can be downloaded from the npm registry or GitHub, enabling developers to create and test an Embedded Light Wallet in their web apps. |
| 0e. | Article | We will publish an **article** (e.g., on Medium or Dev.to) or workshop (e.g., GitHub repo with step-by-step guide) that explains the development and achievements of the grant, including the npm package's implementation of passkeys for secure authentication, PRF for deterministic key derivation, stateless keys for browser-based management, integration with Polkadot/Substrate via Polkadot.js, and demonstrations via example projects. Content will be in English, aimed at Polkadot developers and web3 frontend engineers. |
| 1. | Prototype package | We will create and publish a prototype npm package ready for testing, implementing core features of the Embedded Light Wallet: support for passkeys (WebAuthn registration and authentication), PRF-based key derivation for secure, reproducible keys, stateless key management (e.g., using browser APIs without persistence), and basic APIs for wallet creation, balance querying, and transaction signing compatible with Polkadot testnets. The package will be versioned (e.g., v0.1.0) and include TypeScript types for better developer experience. |
| 2. | Two example projects | We will create two example projects demonstrating the package's integration and usage: one built with Next.js (React-based SSR framework) and the other with Vite (lightweight bundler for vanilla JS or Vue/Svelte). Each project will include full source code on GitHub, showing passkey-based wallet setup, stateless operations, and interactions like sending a test transaction to a Polkadot testnet. Examples will handle error cases and cross-browser compatibility. |
| 3. | UI mockups/wireframes | We will provide wireframes or mockups (e.g., in Figma or a shared link) illustrating the Embedded Light Wallet's user interface components, such as passkey registration flows, key management dashboard, and transaction signing modals, to guide implementation and ensure user-friendly design. |


## Future Plans

Please include here

- how you intend to finance the project's long-term maintenance and development,
- how you intend to use, enhance, and promote your project in the short term, 
- the team's long-term plans and intentions in relation to it.

- **Long-Term Maintenance/Development Financing:** Secure follow-up grants from W3F or Polkadot Treasury, pursue partnerships with parachain teams (e.g., for integrations), and launch fundraising via token launches or DAO contributions once expanded.

- **Short-Term Use/Enhancement/Promotion:** Release mini-dApps (e.g., a simple Substrate faucet or NFT minter) using OmniPass as the core wallet. Promote via Polkadot Forum posts, Dev.to articles, and X threads targeting web3 devs. Enhance with community feedback on GitHub issues.

- **Team's Long-Term Plans:** Expand to multi-chain support (e.g., EVM compatibility), add account abstraction features, and build toward a full ecosystem of passkey tools. See masterplan for details: https://github.com/swenthebuilder/OmniPassFundingApplication/blob/main/FundingApplication.md.


## Referral Program (optional) :moneybag:

You can find more information about the program [here](https://grants.web3.foundation/docs/referral-program).

- **Referrer:** N/A
- **Payment Address:** N/A

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation Website.

Here you can also add any additional information that you think is relevant to this application but isn't part of it already, such as:


- **Work Already Done:** Just the PoC linked above, with initial code for WebAuthn/PRF.
- **Other Contributors:** None.
- **Previous Grants:** None.