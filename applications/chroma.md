# Chroma

## Project Overview

**Tagline:** End-to-end testing library for Polkadot wallet integrations

**Project Description:** 
Chroma is an end-to-end (E2E) testing library specifically designed for Polkadot wallet interactions. It enables developers to write automated tests that interact with real wallet extensions, providing a comprehensive testing solution for decentralized applications (dApps) in the Polkadot ecosystem.

**Polkadot Integration:**
Chroma integrates directly with the Polkadot ecosystem by supporting popular wallet extensions like Polkadot.js Extension and Talisman Wallet. It enables testing of wallet connections, account imports, transaction approvals, and authorization flows that are essential for Polkadot dApps. The library is particularly valuable now that PVM (Polkadot Virtual Machine) is live on Kusama, supporting smart contract development.

**Team Interest:**
We identified a significant gap in the Polkadot testing ecosystem - there was no comprehensive E2E testing library that could directly connect with real wallet extensions. This makes it difficult for developers to properly test their dApps' wallet integration, leading to potential bugs and poor user experiences in production.

### Project Details

**Technology Stack:**
- **Playwright**: Primary E2E testing framework providing browser automation capabilities
- **Polkadot.js Extension**: First wallet extension to be supported for Polkadot ecosystem testing
- **Talisman Wallet**: Multi-chain wallet extension support for both Polkadot and Ethereum testing

**Core Architecture:**
The library provides a set of fixtures and utilities that extend Playwright's testing capabilities specifically for wallet interactions. The core components include:

- **Extension Management**: Automated download and setup of wallet extensions
- **Account Management**: Import accounts using seed phrases or private keys
- **Authorization Flows**: Handle wallet permission requests and approvals
- **Transaction Testing**: Approve and reject transaction flows
- **Multi-chain Support**: Support for both Polkadot and Ethereum chains through Talisman

**API Specification:**
```typescript
import { expect, test } from '@avalix/chroma'

test('sign transaction', async ({ page, importAccount, authorize, approveTx, rejectTx }) => {
    // Import web3 account
    await importAccount({
        seed: MNEMONIC_HERE,
        name: 'Account 1'
    })

    // Authorize wallet permission
    await authorize()

    // Approve on-chain transaction
    await approveTx()

    // Reject on-chain transaction
    await rejectTx()
})
```

**Proof of Concept:**
A working proof of concept has been developed and demonstrated, showcasing the core functionality: https://x.com/0xPresc/status/1963458250869018864

**What Chroma is NOT:**
- Not a replacement for unit testing - it focuses specifically on E2E wallet integration testing
- Not a wallet extension itself - it works with existing wallet extensions
- Not limited to headless testing - requires browser UI for reliable wallet interactions
- Currently limited to Chromium-based browsers due to Playwright extension support limitations

### Ecosystem Fit

**Ecosystem Position:**
Chroma fits into the Polkadot developer tooling landscape as a specialized testing infrastructure component. It bridges the gap between dApp development and wallet integration testing, providing developers with the tools needed to ensure their applications work seamlessly with popular Polkadot wallets.

**Target Audience:**
- **Primary**: dApp developers building on Polkadot/Kusama who need to test wallet integrations
- **Secondary**: QA engineers and DevOps teams implementing CI/CD pipelines for Polkadot projects
- **Tertiary**: Wallet developers who want to test their extensions against various dApps

**Needs Addressed:**
- **Automated Wallet Testing**: Currently, developers must manually test wallet integrations, which is time-consuming and error-prone
- **CI/CD Integration**: Enables automated testing of wallet flows in continuous integration pipelines
- **Multi-chain Testing**: Supports testing across different chains supported by wallets like Talisman
- **Real Extension Testing**: Tests against actual wallet extensions rather than mocked implementations

**Need Identification:**
The need was identified through direct experience in dApp development where manual wallet testing proved to be time-consuming and error-prone. The proof of concept demonstrates the technical feasibility of the approach (https://x.com/0xPresc/status/1963458250869018864).

**Similar Projects in Polkadot Ecosystem:**
Currently, there is no comprehensive E2E testing library specifically designed for Polkadot wallet integrations. After thorough research of the Polkadot Forum, Tech Stack documentation, and OpenGov proposals, no similar project was found addressing this specific need.

**Similar Projects in Related Ecosystems:**
The closest comparable project is [@chainsafe/cypress-polkadot-wallet](https://www.npmjs.com/package/@chainsafe/cypress-polkadot-wallet), which provides Cypress-based testing for Polkadot wallets. However, through direct testing experience with this package on a real dApp (https://polkadot-starter-vue-dedot.vercel.app/), several limitations were discovered that Chroma addresses:

- **Framework Choice**: Uses Playwright instead of Cypress, offering better extension support and performance
- **Implementation Approach**: Does not modify wallet internals like `injectedWeb3`, maintaining compatibility with real wallet behavior. The ChainSafe package requires dApps to adapt their implementation to work with the modified `injectedWeb3`, which can be problematic for existing applications
- **Multi-chain Support**: Native support for both Polkadot and Ethereum chains through Talisman integration
- **Real Extension Testing**: Works with actual wallet extensions rather than modified implementations
- **Embedded Wallet Compatibility**: For dApps implementing embedded wallets (e.g., using Privy.io), Chroma recommends maintaining both web2 and web3 login options on the login page, as E2E testing with wallet extensions is more reliable and stable compared to testing with web2 credential systems like Google login

This approach makes Chroma particularly suitable for the current ecosystem where PVM is live on Kusama, enabling comprehensive testing for smart contract dApps without requiring modifications to existing dApp implementations. 

## Team

- **Contact Name:** Preschian Febryantara
- **Contact Email:** preschian27@gmail.com

### Team members

- Preschian Febryantara

#### LinkedIn Profiles (if available)

- https://www.linkedin.com/in/preschian-febryantara/

### Team Code Repos

- https://github.com/preschian/create-dot-app
- https://github.com/avalix-labs/chroma (open-source repository coming soon)

Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere are also fine.

- https://github.com/preschian

### Team's experience

Preschian is a full-stack developer with extensive experience in web3 and blockchain development. Key relevant experience includes:

- **Polkadot Ecosystem Development**: Active contributor to the Polkadot development community with experience in building dApps and developer tools
- **Create Dot App**: Developed and maintains a boilerplate template for rapid Polkadot dApp development (https://github.com/preschian/create-dot-app)
- **Web3 Testing Expertise**: Deep understanding of wallet integration challenges and testing requirements in decentralized applications

For more detailed information about experience and background, please visit: https://preschian.com/about/

## Development Status

**Current Status:** Chroma is currently in active development with a working proof of concept that demonstrates the core functionality.

**Proof of Concept:**
A functional proof of concept has been developed and publicly demonstrated, showing the library's ability to interact with real wallet extensions for automated testing. The demonstration can be viewed at: https://x.com/0xPresc/status/1963458250869018864

**Development Progress:**
- ✅ Core architecture designed and implemented
- ✅ Basic Playwright integration with wallet extensions
- ✅ Account import functionality working
- ✅ Transaction approval/rejection flows functional
- ✅ Initial release available on NPM: https://www.npmjs.com/package/@avalix/chroma
- 🔄 Open-source repository coming soon at: https://github.com/avalix-labs/chroma
- ✅ Integration testing with Create Dot App project completed

**Testing and Validation:**
The library has been successfully integrated and tested with the Create Dot App repository to ensure real-world applicability:

- **Integration Implementation**: Successfully integrated Chroma into Create Dot App via pull request: https://github.com/preschian/create-dot-app/pull/146/files
- **CI/CD Validation**: The integration runs smoothly in GitHub Actions, demonstrating reliability in automated environments: https://github.com/preschian/create-dot-app/actions/runs/17754583058/job/50455331711

This real-world integration validates the library's effectiveness and demonstrates its readiness for broader adoption in the Polkadot ecosystem.

**Known Limitations:**
- **Browser Support**: Currently limited to Chromium-based browsers due to Playwright's extension support constraints
- **Headless Mode**: May require non-headless mode to avoid flaky tests and ensure reliable wallet interactions
- **Extension Dependency**: Relies on open-source wallet extensions for implementation


## Development Roadmap

This section breaks down the development roadmap into milestones and deliverables. The functionality will be described in detail to enable proper verification and testing.

### Overview

- **Estimated Duration:** 3 months
- **Full-Time Equivalent (FTE):** 1 FTE
- **Total Costs:** 30,000 USD

### Milestone 1: Core Library and Polkadot.js Extension Support — 1 month — $10,000

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | MIT License will be applied to the project |
| 0b. | Documentation | We will provide comprehensive inline documentation of the code and a detailed README with setup instructions, API reference, and basic tutorial explaining how developers can integrate Chroma into their testing workflows |
| 0c. | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests and integration tests. The testing guide will describe how to run tests and validate functionality across different scenarios |
| 0d. | Docker | We will provide a Dockerfile that can be used to test all the functionality delivered with this milestone, including browser automation and extension management |
| 0e. | Article | We will publish an article/tutorial explaining how to implement E2E wallet testing for Polkadot dApps using Chroma, targeting dApp developers and QA engineers |
| 1. | NPM Package Setup | Complete NPM package distribution with proper versioning, dependency management, and automated publishing pipeline |
| 2. | Polkadot.js Extension Context | Automated download, installation, and management of Polkadot.js Extension within the testing environment |
| 3. | Account Import Fixtures | Implementation of `importAccount` fixture that allows importing accounts using seed phrases or private keys |
| 4. | Authorization Fixtures | Implementation of `authorize` fixture that handles wallet permission requests and approvals |
| 5. | Transaction Management Fixtures | Implementation of `approveTx` and `rejectTx` fixtures for handling transaction approval and rejection flows |

### Milestone 2: Talisman Wallet Support and Multi-chain Features — 2 months — $20,000

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 1. | Talisman Wallet Context | Automated download, installation, and management of Talisman wallet extension within the testing environment |
| 2. | Talisman Account Import (Polkadot) | Implementation of account import fixtures using seed phrases for Polkadot chains within Talisman wallet |
| 3. | Talisman Authorization (Polkadot) | Implementation of authorization handling fixtures for Polkadot dApp connections and permissions within Talisman wallet |
| 4. | Talisman Transaction Management (Polkadot) | Implementation of transaction approval and rejection fixtures for Polkadot chains within Talisman wallet |
| 5. | Talisman Account Import (Ethereum) | Implementation of account import fixtures using seed phrases or private keys for Ethereum chains within Talisman wallet |
| 6. | Talisman Authorization (Ethereum) | Implementation of authorization handling fixtures for Ethereum dApp connections and permissions within Talisman wallet |
| 7. | Talisman Transaction Management (Ethereum) | Implementation of transaction approval and rejection fixtures for Ethereum chains within Talisman wallet |
| 8. | Multi-chain Testing Utilities | Helper functions and utilities for switching between different chains and managing multi-chain testing scenarios |
| 9. | Documentation/Landing Page Website | Creation of a dedicated documentation/landing page website with comprehensive guides, examples, and API references |

### Budget Breakdown
 **Category:** Budget Breakdown positions are split within the following categories: 
 
- Personnel
- Equipment
- Subcontracts/Subscriptions

| Category | Milestone | Duration | FTE | Cost | Description |
| --- | ---- | --- | --- | --- | ---|
| Personnel | Milestone 1: Core Library and Polkadot.js Extension Support | 1 month | 1 FTE | 10,000 USD | Core library development, Polkadot.js Extension integration, fixtures implementation, documentation, and testing |
| Personnel | Milestone 2: Talisman Wallet Support and Multi-chain Features | 2 months | 1 FTE | 20,000 USD | Talisman wallet integration, EVM chain support, multi-chain utilities, documentation website, and extended testing |
| --- | --- | --- | **Total** | **30,000 USD** |  |


## Future Plans

**Long-term Maintenance and Development:**
- **Additional Funding**: Seek additional funding opportunities to support advanced features such as additional open source wallets in the Polkadot ecosystem and other E2E testing frameworks (Cypress, WebDriver, Vitest browser mode)

**Short-term Enhancement and Promotion:**
- **Community Engagement**: Actively engage with the Polkadot developer community through forums, Discord, and social media
- **Integration Examples**: Create comprehensive examples and case studies showing Chroma integration with popular Polkadot dApps
- **Framework Expansion**: Begin research and development for supporting additional wallet extensions (limited to open-source wallets)
- **Performance Optimization**: Continuously improve test execution speed and reliability based on user feedback

**Long-term Vision:**
- **Standard Testing Tool**: Establish Chroma as the standard E2E testing solution for Polkadot ecosystem wallet integrations
- **Comprehensive Polkadot Support**: Expand support to cover all major open-source wallets and testing scenarios within the Polkadot ecosystem
- **Advanced Testing Features**: Develop advanced features such as parallel test execution, test result analytics, and integration with popular CI/CD platforms
- **Developer Ecosystem Growth**: Contribute to the overall growth of the Polkadot developer ecosystem by reducing friction in dApp development and testing

## Additional Information

**Work Already Completed:**
- Proof of concept development demonstrating core functionality with both Polkadot.js Extension and basic transaction handling
- Initial architecture design and implementation approach validation
- Research and analysis of existing solutions in the ecosystem

**Financial Contributions:**
No other teams or entities have contributed financially to this project. This is an independent development effort.

**Other Funding Applications:**
This project has not been submitted for funding to any other entities. This is the first formal funding application for the Chroma project.

**Technical Considerations:**
- The project will be developed using TypeScript for better type safety and developer experience
- All code will be open-source under MIT license to encourage community contributions
- The library will follow semantic versioning for predictable updates and compatibility
- Comprehensive CI/CD pipeline will be implemented to ensure code quality and automated testing

**Project Impact:**
The project addresses a real need in the Polkadot ecosystem by providing a comprehensive E2E testing solution for wallet integrations. The library will significantly reduce the barrier to entry for proper dApp testing and improve the overall quality of applications in the Polkadot ecosystem.
