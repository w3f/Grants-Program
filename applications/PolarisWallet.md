# Polaris Wallet 

- **Team Name:** Montech Studios
- **Payment Details:**
  - **DOT**: 5G1ShV9Q3ZKrJTfz42iRd4AEuWfhJmp6wFSGwe75RQyBwH3a
- **Level:** Level 3


## Project Overview :page_facing_up:

### Overview

- Polaris Wallet is a custodial wallet integrated with Polkadot’s Asset Hub, designed for non-crypto-native users. It facilitates seamless interactions with multiple parachains, offering functionalities such as yield farming, lending, borrowing, staking, and restaking across the Polkadot ecosystem.
- Key Features
Asset Hub Integration: Support for DOT, USDC, USDT, and other compatible assets.
Parachain Interactions: Participate in DeFi services like yield farming, staking, and borrowing.
Snowbridge Integration: Bridging assets from Ethereum (USDC, USDT) to Polkadot.
Fiat-to-Crypto Conversion: On-ramp for fiat (USD, EUR) to crypto conversion.
Multi-Platform Support: Responsive web application and potential mobile app development.
Security & Compliance: Robust security measures and adherence to global regulations.

Frontend: React
Backend: Typescript, Rust, Substrate, Snowbridge integration
Blockchain: Polkadot Substrate, Polkadot.js API

### Project Details

We expect the teams to already have a solid idea about your project's expected final state. Therefore, we ask the teams to submit (where relevant):

- Mockups/designs: https://www.figma.com/design/MCHgoPbuSiweOuxucSHmyV/Polaris-Wallet?node-id=0-1&node-type=canvas&t=zVKWboFz72Ofh5ft-0
- Data models / API specifications of the core functionality
- Technology Stack: Frontend: React, WalletConnect, Backend: Rust, Substrate, Snowbridge integration, Blockchain: Polkadot Substrate, Polkadot.js API
- Asset Hub Integration:
Enable deposits and management of DOT and native stablecoins.
Provide seamless access to all parachains linked to Polkadot’s Asset Hub.
Actively searching for 3rd party custodial wallet provider within Polkadot ecosystem
https://wiki.polkadot.network/docs/general/dune-analytics/interlay-dashboards
- Snowbridge Integration:
Accept Ethereum-based assets and automate the bridging process to Polkadot.
Ensure the user experience is streamlined, minimizing manual steps.
- Parachain Interaction:
Enable users to participate in DeFi activities such as yield farming, lending, borrowing, and staking on various parachains.
https://wiki.polkadot.network/docs/general/dune-analytics/hydration-dashboards
https://wiki.polkadot.network/docs/general/dune-analytics/interlay-dashboards
https://wiki.polkadot.network/docs/general/dune-analytics/polkadex-dashboards
Create a secure and intuitive interface for interacting with these DeFi services.
- Multi-Platform Support:
Web Interface: Develop a responsive web application for desktop and mobile browsers.
Potential Mobile App: Explore the feasibility of developing a mobile application for enhanced user experience.
Seamless Fiat-to-Crypto Conversion: Users can easily convert traditional fiat currencies (e.g., USD, EUR) into supported crypto assets such as DOT, USDC, USDT directly to there Custodial AssetHub wallet. Integrated with a trusted payment processors, the fiat on-ramp offers multiple payment methods, including credit/debit cards, bank transfers, and third-party payment gateways.
Real-Time Exchange Rates: The on-ramp feature provides real-time exchange rates for accurate and transparent conversions between fiat and cryptocurrency.
- Security and Compliance:
Implement robust security measures to protect user funds and personal information.
Ensure compliance with relevant regulations across different jurisdictions.

- Disclaimers
- What your project is *not* or will *not* provide or implement
  - Montech will Provide seamless access to 15 parachains linked to Polkadot’s Asset Hub in the PoC/MVP

### Ecosystem Fit

Help us locate your project in the Polkadot/Substrate/Kusama landscape and what problems it tries to solve by answering each of these questions:

- Where and how does your project fit into the ecosystem?
    - Polaris Wallet is designed to fit into the Polkadot ecosystem by integrating with Polkadot’s Asset Hub, enabling a seamless custodial management of DOT and stablecoins. It provides multi-parachain support, allowing users to interact with DeFi services such as staking, lending, borrowing, and yield farming. The project leverages Snowbridge to bridge Ethereum-based assets into the Polkadot ecosystem, offering a smooth user experience for non-crypto-native users. By providing a custodial wallet with user-friendly interfaces and fiat on-ramps, Polaris Wallet helps onboard new users to the Polkadot ecosystem who may not have extensive blockchain experience, thereby broadening Polkadot’s user base.
- Who is your target audience (parachain/dapp/wallet/UI developers, designers, your own user base, some dapp's userbase, yourself)?
    - Non-Crypto-Native Users: Individuals who are new to cryptocurrencies and are looking for an easy-to-use wallet solution. Parachain Developers: Developers building DeFi applications within Polkadot and parachains. DeFi Users: Users who want to participate in yield farming, lending, borrowing, and staking activities across Polkadot’s parachains.
- What need(s) does your project meet?
    - Polaris Wallet addresses several key needs: Ease of Use: Many non-crypto-native users find existing wallets difficult to use. Polaris simplifies crypto asset management through a custodial solution with a streamlined UI/UX. Cross-Chain Asset Management: Polaris offers bridging solutions (via Snowbridge) to seamlessly transfer assets from Ethereum to Polkadot, reducing the complexity of cross-chain interactions.
      DeFi Access: Users can access staking, yield farming, and other DeFi activities directly from the wallet, making it a one-stop solution for DeFi participation on multiple parachains.
      Fiat-to-Crypto On-Ramp: It simplifies the conversion of fiat to crypto (e.g., USD to DOT or USDT) by integrating trusted payment processors for seamless transactions.
      Security & Compliance: Polaris ensures that users' assets are securely managed and complies with necessary regulations across jurisdictions.
- How did you identify these needs? Please provide evidence in the form of (scientific) articles, forum discussions, case studies, or raw data.
    - 
- Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?
  - Yes, there are a few similar projects:
      Subwallet: A browser extension wallet for managing Polkadot and Kusama assets. However, Subwallet focuses more on non-custodial services, whereas Polaris provides a custodial wallet for non-crypto-native users.
      Polkadot-JS Wallet: A powerful, developer-focused tool for interacting with the Polkadot network, but it lacks the user-friendly custodial and fiat-to-crypto features that Polaris offers.
      
      https://docs.celo.org/developer/build-on-minipay/overview
      https://www.opera.com/products/minipay
      https://medium.com/@velocity-labs/introducing-turtle-a-frictionless-cross-chain-token-transfer-solution-c0b50e1d0a30
    
      How Polaris is Different:
      Polaris differentiates itself by offering a custodial solution with a simple, intuitive interface targeting non-crypto-native users. It also integrates Snowbridge for cross-chain asset management, which is not a feature in other Polkadot-native wallets.
- Are there any projects similar to yours in related ecosystems? 

## Team :busts_in_silhouette:

> Please note that the data provided in this section is for administrative and informational purposes only. All beneficiaries of a grant must also be listed in the KYC/KYB process during the application phase. See our [FAQ](https://grants.web3.foundation/docs/faq#what-is-kyckyb-and-why-do-i-have-to-provide-this-data) for more info.

### Team members

- Technical Lead: Olumide Akinwande
- Chief Architect: Brian Dawson
UI/UX Designer: 1 UIUX designer
Frontend Developers: 2 
Backend/Rust Developers: 2 
QA Engineer: 1 
Support Staff: Post-launch support and maintenance team

### Contact

- **Contact Name:** Olumide Akinwande
- **Contact Email:** Contact email (admin@montech.io)
- **Website:** montech.io

### Legal Structure

- **Registered Address:** Not Registered
- **Registered Legal Entity:** Not Registered

### Team's experience

Here is a list of projects built by the Montech Team  - https://drive.google.com/file/d/14pfbFONKriF7TxTvHwFst-R_Fnp4g61O/view?ts=66bcb99d
We have not applied for a grant before

### Team Code Repos

- https://github.com/Montech-Studios-INC
- Most projects are private

Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine.
Case Study Document
- https://drive.google.com/file/d/14pfbFONKriF7TxTvHwFst-R_Fnp4g61O/view?ts=66bcb99d

### Team LinkedIn Profiles (if available)

- https://www.linkedin.com/in/oluakinwande/
- https://www.linkedin.com/in/bvdawson/


## Development Status :open_book:

If you've already started implementing your project or it is part of a larger repository, please provide a link and a description of the code here. In any case, please provide some documentation on the research and other work you have conducted before applying.
- https://docs.google.com/document/d/11SL_CjCBApTa3UPj9Hii4kLIcXaPO8nwVmraYyw0XHM/edit
- Preliminary Designs - https://www.figma.com/design/MCHgoPbuSiweOuxucSHmyV/Polaris-Wallet?node-id=0-1

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** Duration of the whole project - 6 Months
- **Full-Time Equivalent (FTE):**  6 FTE  
- **Total Costs:** Requested amount in USD for the whole project is 175,000 USD 
- **DOT %:** Percentage of Total Costs to be paid in (vested) DOT (30%)

### Milestone 1  — Research & Planning

- **Estimated duration:** 1 month
- **FTE:**  3
- **Costs:** 43,750 USD

> :exclamation: **The default deliverables 0a-0d below are mandatory for all milestones**, and deliverable 0e at least for the last one.

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0. See the [delivery guidelines](https://grants.web3.foundation/docs/Support%20Docs/milestone-deliverables-guidelines#license) for details. |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. See the [delivery guidelines](https://grants.web3.foundation/docs/Support%20Docs/milestone-deliverables-guidelines#documentation) for details. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. See the [delivery guidelines](https://grants.web3.foundation/docs/Support%20Docs/milestone-deliverables-guidelines#testing-guide) for details. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
|   0e    |We will provide an article summarizing the innovations introduced during the development of Polaris Wallet. This article will be published on Medium.
|   1.a   |Final list of parachains and DeFi services to integrate.
|   1.b   |Architecture and technical approach defined.


### Milestone 2  — Design & Prototyping

- **Estimated Duration:** 1 month
- **FTE:**  5
- **Costs:** 35,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0. See the [delivery guidelines](https://grants.web3.foundation/docs/Support%20Docs/milestone-deliverables-guidelines#license) for details. |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. See the [delivery guidelines](https://grants.web3.foundation/docs/Support%20Docs/milestone-deliverables-guidelines#documentation) for details. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. See the [delivery guidelines](https://grants.web3.foundation/docs/Support%20Docs/milestone-deliverables-guidelines#testing-guide) for details. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
|   0e    |Complete UI wireframes and design prototypes.
|   1.a   |Feedback incorporated. https://www.figma.com/design/MCHgoPbuSiweOuxucSHmyV/Polaris-Wallet?node-id=0-1


### Milestone 3 — Development (Midpoint)

- **Estimated Duration:** 1 month
- **FTE:**  5
- **Costs:** 35,000 USD
| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0. See the [delivery guidelines](https://grants.web3.foundation/docs/Support%20Docs/milestone-deliverables-guidelines#license) for details. |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. See the [delivery guidelines](https://grants.web3.foundation/docs/Support%20Docs/milestone-deliverables-guidelines#documentation) for details. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. See the [delivery guidelines](https://grants.web3.foundation/docs/Support%20Docs/milestone-deliverables-guidelines#testing-guide) for details. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
|   0e    | We will integrate the ability to manage DOT and stablecoins on Polkadot's Asset Hub, providing full support for deposits, transfers, and withdrawals. https://wiki.polkadot.network/docs/general/dune-analytics/assethub-dashboards
|   1.a   | Integrate Snowbridge to enable seamless bridging of assets from Ethereum (e.g., USDC, USDT) to Polkadot’s network. https://docs.snowbridge.network/architecture/components
|   1.b   | Enable users to engage with DeFi services like yield farming, staking, lending, and borrowing across multiple Polkadot parachains. https://wiki.polkadot.network/docs/general/dune-analytics/interlay-dashboards


### Milestone 4 — Development (Completion)

- **Estimated Duration:** 1 month
- **FTE:**  5
- **Costs:** 26,250 USD
| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0. See the [delivery guidelines](https://grants.web3.foundation/docs/Support%20Docs/milestone-deliverables-guidelines#license) for details. |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. See the [delivery guidelines](https://grants.web3.foundation/docs/Support%20Docs/milestone-deliverables-guidelines#documentation) for details. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. See the [delivery guidelines](https://grants.web3.foundation/docs/Support%20Docs/milestone-deliverables-guidelines#testing-guide) for details. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
|   0e    | Implement custodial authentication for users, allowing secure and easy access to their Polaris Wallet accounts.
|   1.a   | Implement non-custodial authentication for advanced users who prefer to maintain full control of their keys and assets.
|   1.b   | Develop a fiat-to-crypto conversion feature, enabling users to convert fiat currencies (e.g., USD, EUR) into supported crypto assets directly into their custodial wallet. https://www.moonpay.com/buy/dot
|   1.c   | Implement real-time exchange rates to provide users with accurate and transparent conversion rates when converting fiat to crypto.
|   1.d   | Comprehensive documentation I | We will provide comprehensive documentation for developers - on how to start the application and different functions overview (Via GitHub pages) |
|   1.e   | Comprehensive documentation II | We will provide comprehensive documentation for users - on how to create a Polkadot wallet, how to use the application, and a basic application overview (Via Github pages) |


### Milestone 5 — Testing & QA

- **Estimated Duration:** 1 month
- **FTE:**  5
- **Costs:** 17,500 USD
| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0. See the [delivery guidelines](https://grants.web3.foundation/docs/Support%20Docs/milestone-deliverables-guidelines#license) for details. |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. See the [delivery guidelines](https://grants.web3.foundation/docs/Support%20Docs/milestone-deliverables-guidelines#documentation) for details. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. See the [delivery guidelines](https://grants.web3.foundation/docs/Support%20Docs/milestone-deliverables-guidelines#testing-guide) for details. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.
|   0e    | Conduct comprehensive unit and integration tests to ensure all functionalities work as intended across various platforms.
|   1.a   | Complete UAT to ensure that the wallet provides a smooth and user-friendly experience for non-crypto-native users.



- ### Milestone 6 — Deployment & Launch

- **Estimated Duration:** 2
- **FTE:**  4
- **Costs:** 17,500 USD
| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0. See the [delivery guidelines](https://grants.web3.foundation/docs/Support%20Docs/milestone-deliverables-guidelines#license) for details. |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. See the [delivery guidelines](https://grants.web3.foundation/docs/Support%20Docs/milestone-deliverables-guidelines#documentation) for details. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. See the [delivery guidelines](https://grants.web3.foundation/docs/Support%20Docs/milestone-deliverables-guidelines#testing-guide) for details. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
|   0e    | Establish Plan for ongoing maintenance


## Future Plans


Polaris Wallet’s long-term maintenance and development will be financed through a combination of the following approaches:
Subscription & Service Fees: The wallet will offer premium services such as advanced DeFi interactions, cross-chain asset management, and staking, which may involve a subscription model for power users or institutions.
Transaction Fees: A small percentage fee will be charged on transactions involving asset bridging, yield farming, and fiat-to-crypto conversions. This will provide a sustainable revenue stream for maintaining and upgrading the wallet.
Enterprise Solutions: Polaris Wallet plans to offer customized solutions for enterprises and financial institutions looking to integrate custodial wallet solutions into their offerings. This B2B revenue model will help finance ongoing development.
Ecosystem Grants: We intend to apply for additional grants from the Polkadot Treasury, Web3 Foundation, and other blockchain ecosystems to support future feature development, security audits, and scaling efforts.
Strategic Partnerships: Partnering with major platforms and projects within the Polkadot and Ethereum ecosystems to develop co-branded features will help finance both maintenance and future upgrades.- how you intend to use, enhance, and promote your project in the short term, and

Expansion of DeFi Services: In the long term, we plan to integrate more DeFi protocols and parachains within the Polkadot ecosystem to provide users with a wider range of investment opportunities and financial services directly from the wallet.
Mobile App Launch: After the web wallet is fully functional, we intend to expand to mobile platforms (iOS and Android), offering users greater flexibility in managing their crypto assets on the go.
Cross-Ecosystem Interoperability: We aim to make Polaris a cross-chain wallet by integrating other leading blockchain ecosystems such as Solana, Avalanche, and Binance Smart Chain, allowing users to manage assets across multiple chains from a single interface.
Compliance & Security: As the platform scales, we will continuously improve our security infrastructure and ensure compliance with global regulations, building trust with institutional users and enterprises.
Global Adoption: Our long-term goal is to position Polaris Wallet as a leading custodial wallet in the blockchain space, onboarding millions of non-crypto-native users globally. This will be achieved through strategic partnerships, product improvements, and expanding into new markets.
## Referral Program (optional) :moneybag:

You can find more information about the program [here](../README.md#moneybag-referral-program).

- **Referrer:** Velocity Labs
- **Payment Address:** NA

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Velocity Labs.
- Work you have already done.
Case Study of Projects built by Montech Studios - https://drive.google.com/file/d/14pfbFONKriF7TxTvHwFst-R_Fnp4g61O/view?ts=66bcb99d

- If there are any other teams who have already contributed (financially) to the project. NA
- Previous grants you may have applied for. NA
