# DID Vault

- **Team Name:** Apillon (Authtrail Pte., Ltd.)
- **Payment Address:** Ethereum address: 0xC6fc286D74e1CF09C2716972Eb2d16Fa1B8dC9dd (USDC)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview

### Overview
With this project, the Apillon team aims to implement DID Vault for the Polkadot ecosystem, a new service within the existing Web3 infrastructure. The DID Vault is designed to provide encrypted storage of DID credentials powered by KILT or any other Polkadot parachain in the future. This fully Web3, end-to-end encrypted way of storing user DID credentials removes the need for local storage and management of DID or usage of a Sporran wallet and opens up the possibility of DID usage in future Web3 applications, both mobile and web.

DID Vault represents a blockchain solution on a layer higher than KILT parachain. KILT's DIDs are generated and managed 100% by the KILT Protocol, but once created, users may store their DID credentials in DID Vault. DID Vault also enables integration to other Web3 services, allowing users to log in with their DID without needing to use a digital wallet or DID.json files, removing the current friction and optimizing user experience.

The Apillon team is heavily motivated to build this project since it complements and upgrades the development of Apillon's own Web3 development platform. Apillon's comprehensive SDKs streamline the process of building apps on top of the KILT, Crust, Phala, and other Polkadot parachains that define the Web3 space. With Apillon, developers will be able to utilize the KILT-powered Web3 Authentication service to generate DIDs for their Web3 app's end users.

To enable and boost adoption, the use of wallets in the authentication and DID management process should be optional while allowing for the full utilization of users' DIDs. According to this goal, we are developing an end-to-end encrypted DID Vault within the Apillon platform and, simultaneously, launching it as a standalone open-source project for anyone to use and speed up Web3 adoption.

### Challenge
KILT Protocol offers top-level Web3 authentication and generation of DID, digital identifiers that power user authentication in an array of Web3 apps. However, apart from the Sporran wallet, there are no frictionless ways for users to utilize KILT-powered credentials.

Even though the Sporran wallet provides integrated DID authentication, it represents yet another wallet in a series of many that Web3 users have to employ using different services. This causes friction in the onboarding process and increases the risk of data loss or loss of access.

Moreover, users who employ digital identities also often store them on centralized servers, like Dropbox or Google Drive. Lastly, mandatory wallets complicate the usage of mobile-native apps.

### Project Details
The DID Vault has been designed and executed to the extent that reflects the intended UI and user flow, the implemented technology stack, and the planned development phases.

#### UI and Flow Design

*Disclaimer: The attached screenshots showcase the preliminary designs for DID Vault UI, designed under the brand of Authtrail, Apillon's predecessor. By the time of launch, the UI of Apillon's DID Vault, both design and copy, will be upgraded to reflect the new brand image.*

![lander](https://github.com/ninoCookies/did_vault_assets/blob/master/vault_ui_prototype/first_view.png)
![Step 0](https://github.com/ninoCookies/did_vault_assets/blob/master/vault_ui_prototype/view_0.png)
![Step 1](https://github.com/ninoCookies/did_vault_assets/blob/master/vault_ui_prototype/view_1.png)
![Step 2](https://github.com/ninoCookies/did_vault_assets/blob/master/vault_ui_prototype/view_2.png)
![Step 3](https://github.com/ninoCookies/did_vault_assets/blob/master/vault_ui_prototype/view_3.png)
![Step 4](https://github.com/ninoCookies/did_vault_assets/blob/master/vault_ui_prototype/view_4.png)
![Step 5](https://github.com/ninoCookies/did_vault_assets/blob/master/vault_ui_prototype/view_5.png)
![Step 6](https://github.com/ninoCookies/did_vault_assets/blob/master/vault_ui_prototype/view_6.png)
![Step 7](https://github.com/ninoCookies/did_vault_assets/blob/master/vault_ui_prototype/view_7.png)

### User Flow

**DID Creation, Attestation, Encryption, Storage - Diagram 1**
1. A user creates an account using email and password.
2. Hashing and encryption are executed in the browser on the client side.
3. Apillon layer - A user account is created in a central database, while all the data is already encrypted on the client side.
4. Email attestation - Attestation starts with a transactional email sent to the user and passes with the user's confirmation and clicking on the link provided. This is a standard attestation step following the KILT Protocol procedure. Multiple attestation options shall be available, with email attestation provided as the first option.
5. DID - A complete DID is issued by the KILT Protocol, financed by Apillon as the Attester.
6. Attested credentials are sent to the user from the Attester.
7. Once the user receives the file, they encrypt it using a strong password.
8. Once encrypted, the file is sent to the Apillon server and stored centrally.

![did-vault-user-flow-diagram-1](https://github.com/ninoCookies/did_vault_assets/blob/master/tech_diagram_3_1a.png)

**User Login - Diagram 2**
1. A user initiates the login process.
2. The user sends Apillon an email and a hashed password.
3. Apillon checks the match of email and password, following a typical login scenario.
4. If the login credentials match, the encrypted DID is sent to the client.
5. Encrypted DID is decrypted using the user's password.
6. Once decrypted, the user can operate with the DID as expected.
7. The DID Vault's UI and website integration work the same way as Google login.
8. DID is validated and ready for use.

![did-vault-user-flow-diagram-2](https://github.com/ninoCookies/did_vault_assets/blob/master/tech_diagram_3_2a.png)

**Social Account Recovery System (Optional) - Diagram 3**
1. A user who already created DID in the previous step is able to add the recovery system to their DID by logging in with the DID and adding a recovery trustee/buddy account.
2. In this scenario, private and public keys are generated from a strong password, while the public key is stored in the Apillon DID Vault and associated with this specific user.
3. A user may encrypt the password with the public key from the assigned buddy. Apillon DID Vault stores the encrypted password, allowing the original user to recover lost DID using their trustee or buddy previously assigned for DID recovery assistance.

In the case a user forgets the password, the flow would be as follows:
1. A user sends a password renewal request.
2. Apilon DID Vault confirms the identity of the user via customer support.
3. If the user identity is confirmed, the DID public key is unlocked in two steps: the first decryption occurs via Apillon DID Vault keys, and the second from the user's buddy assistance.

![did-vault-user-flow-diagram-3](https://github.com/ninoCookies/did_vault_assets/blob/master/tech_diagram_3_3a.png)

### Technology Stack
The DID Vault technology stack consists of established mainstream web technologies. These would empower a large number of web developers to employ and contribute to the project development in the future. The technology stack includes:

* Javascript (Typescript)
* Rust (Ink)
* Vue.js
* Nuxt

Additionally, the following SDKs and clients will be employed:
* Polkadot SDK
* KILT SDK
* Crust SDK
* IPFS client

For encryption we are considering the flow:
- Using password based PBKDF2 key for deriving AES-GCM key with random salt.
- Encrypting data with AES-GCM and random iv.
- Random salt and iv are needed for decryption and should be stored with encrypted content.

### Two-Phase Development

![technical diagram](https://github.com/ninoCookies/did_vault_assets/blob/master/tech_diagram_1.png)

The DID Vault project development is organized into two phases.

#### Phase 1

In phase 1, the following features will be delivered:
1. DID Vault UI allowing users to encrypt and upload existing DIDs, and store them in the Vault
2. Client-side encryption
3. Transmission of encrypted DIDs to IPFS
4. Functioning "Login with DID Vault" as a proof of concept
5. "Login with DID Vault" functionality pulling encrypted DID from IPFS to the browser/client and decrypting it with user password

The present Grant application is intended only for Phase 1, which develops the DID Vault project to a working proof of concept.

#### Phase 2

Phase 2 is planned as a later upgrade of the DID storage and retrieval through the implementation of the Phala Phat Contract.

In Phase 2, the following upgrades will be delivered:
1. UI upgrade allowing users to generate DIDs and immediately push them to the Vault (Phase 1)
2. Centralized computation power upgrade to Phala Phat Contract (proof of concept already tested)
3. Social recovery methods extending the account recovery options

![technical diagram](https://github.com/ninoCookies/did_vault_assets/blob/master/tech_diagram_2.png)

### Ecosystem Fit

The DID Vault project upgrades the existing DID solution provided by KILT Protocol with a friction-free and fully Web3-compatible solution that simplifies DID usage and speeds up DID authentication for all services using DIDs within the Polkadot ecosystem and their users. By providing simple access to DIDs to a mass of users, the DID Vault directly improves the adoption of all services on Polkadot that require user authentication.

### Target Audience
DID Vault targets all Web3 projects and their users. Anyone developing a Web3 project or a dapp that employs or plans to employ the KILT Protocol (or any other DID standard) for digital identity generation, management, and authentication, will be able to integrate DID Vault to improve the user's authentication experience and accelerate their onboarding.

Apillon also delivers a direct use case with seamless integration of the DID Vault into the Apillon platform infrastructure. The Apillon platform users will be able to utilize DID Vault-based authentication from the first version of their Web3 product and deliver a Web3 means of identity authentication to their app's users.

### Competition
To the team's awareness, the only similar project in the Polkadot ecosystem is the Sporran wallet, which also works with KILT-generated DIDs.

Apillon's DID Vault utilizes the full scope of DID functionality while bypassing the requirement for a Sporran wallet. Currently, the Sporran wallet supports only the DID use case and is not compatible with mobile apps, limiting its general usability.

In related ecosystems, a solution similar to Apillon's DID Vault would be [Kepler](https://www.kepler.xyz/).

## Team

### Key Development Team members
- **Team lead:** Ninoslav Kutnjak ([LinkedIn](https://www.linkedin.com/in/nino-kutnjak/))
- **Other key members:**
	- Tadej Vengust ([LinkedIn](https://www.linkedin.com/in/tadej-vengust/))
	- Luka Golinar ([LinkedIn](https://www.linkedin.com/in/luka-golinar-07b14415b/))
	- Mitja Kjuder ([LinkedIn](https://www.linkedin.com/in/mitja-kjuder-557641146/))

### Contact
- **Contact Name:** Ninoslav Kutnjak
- **Contact Email:** nino.kutnjak@apillon.io
- **Website:** apillon.io

### Legal Structure
- **Registered Address:** 68 Circular Road, #02-01, 049422, Singapore
- **Registered Legal Entity:** AUTHTRAIL Pte., Ltd. 

### Team's Experience
**Tadej Vengust**, the lead architect of Apillon's and DID Vault's project infrastructure, is an experienced Web3 developer and development team leader who has worked on many DLT-based projects since 2017. Some of the most important include:
-   0xcert Framework - Open-source SDK for NFT management ([https://github.com/0xcert/framework](https://github.com/0xcert/framework))
-   Official ERC-721 reference implementation ([https://github.com/nibbstack/erc721](https://github.com/nibbstack/erc721))
-   Genobank - Bio NFTs ([https://github.com/Genobank/biosample-permission-token](https://github.com/Genobank/biosample-permission-token))
-   ERC-721 Contract Validator ([https://github.com/nibbstack/erc721-validator](https://github.com/nibbstack/erc721-validator))
-   Specron - Smart contract testing environment ([https://github.com/specron](https://github.com/specron))
-   Hiveterminal - Factoring platform ([https://hiveterminal.com](https://www.hiveterminal.com/))
-   Credentify - Blockchain-secured stackable ECTS ([https://credentify.eu/](https://credentify.eu/))
-   AVL - Physical product and industrial production data verification
-   Iskratel - Production compliance data verification
-   IBO - Production infrastructure optimization through data traceability
-   ESTIMATEGAS - Smart contracts live testing ([https://github.com/fulldecent/live-testing-with-estimateGas/](https://github.com/fulldecent/live-testing-with-estimateGas/))
-   Apillon platform - Web3 development platform, complete project architecture ([https://github.com/Apillon-web3](https://github.com/Apillon-web3))

**Luka Golinar** is an experienced back-end developer taking care of Apillon's KILT integration from research to implementation.

**Mitja Kjuder** has years of experience in smart contract implementation and back-end development in various DeFi and NFT projects audited by top industry auditors.

## Development Status 

The Apillon team has done initial interviews with several stakeholders within the Polkadot ecosystem to gain feedback on the relevance of the DID Vault for the ecosystem. The common response was very positive and emphasized the need for the proposed solution.

During the initial hand-in-hand research with the KILT team, the project's technical viability was further evaluated. The findings defined [three main user stories](https://github.com/ninoCookies/did_vault_assets/blob/master/vault_technical_diagram.png) and served as a base for the initial [UI wireframes](https://www.figma.com/file/85PjhVTfEUlG9BnxTRoKNE/AT-Wireframes-v0.1?node-id=22%3A2118&t=aV8m9lIf3TPV6fty-0).

### Development Roadmap

#### Overview

- **Total Estimated Duration:** 2 months
- **Full-Time Equivalent (FTE):** 4 FTE
- **Total Costs:** 28,000 USD

#### Milestone 1 — UI, Upload, Encrypt

- **Estimated duration:** 1 month
- **FTE:** 4
- **Costs:** 14,000 USD

| Number | Deliverable | Specification |
| ----- | ----------- | ------------- |
| **0a.** | License | Apache 2.0 / GPLv3 / MIT / Unlicense |
| **0b.** | Documentation | The inline documentation of the code and a basic tutorial will explain how to (for example) spin up one of the Apillon's Substrate nodes and send test transactions, showing the new functionality in action. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. The guide will describe how to run these tests. |
| **0d.** | Docker | The provided Dockerfiles will enable the testing of all the functionality delivered with this milestone. |
| **1a.** | Web app UI | The DID Vault UI will be built and published to enable client-side upload + encryption of DID Vaults. |
| **1b.** | Web app source code | VUE.js (typescript) based UI implementation integrating crypto web api to encrypt client side uploaded credential files and send them to the API. |

#### Milestone 2 - Store to IPFS, Retrieve, Decrypt

- **Estimated duration:** 1 month
- **FTE:** 4
- **Costs:** 14,000 USD

| Number | Deliverable | Specification |
| ----- | ----------- | ------------- |
| **0a.** | License | Apache 2.0 / GPLv3 / MIT / Unlicense |
| **0b.** | Documentation | The inline documentation of the code and a basic tutorial will explain how to (for example) spin up one of the Apillon's Substrate nodes and send test transactions, showing the new functionality in action. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. The guide will describe how to run these tests. |
| **0d.** | Docker | The provided Dockerfiles will enable the testing of all the functionality delivered with this milestone. |
| **0e.** | Article | An online video guide will explain the use of DID Vault for DID encryption and storage for existing DID owners. |
| **1a.** | Fully functional back-end | Apillon Beta-ready DID Vault will be built and deployed, allowing users to upload, encrypt and store DIDs to log in to integrated services. |
| **1b.** | Backend source code | Typescript based (node.js, express, next.js) backend that uploads credentials to IPFS and links them to an account. Also able to retrieve the credentials. |
| **2a.** | Front end javascript | Javascript code snippet that enables website integration of vault credential retrieval and validation. |

#### Future Plans
Once the milestones described in this Grant Application are reached, the DID Vault project is moving into Phase 2, upgrading the Vault to a production-grade standalone product anyone can use.

Through the integration into the Apillon platform, the DID Vault aims to serve as a go-to authentication tool for builders of Web3-based projects and become the primary gate for users entering the Web3 ecosystem and apps.

## Additional Information

The Apillon team learned about the Polkassembly Grants Program at the first Polkadot event in Ljubljana, Slovenia, during the presentation by Urban Osvald, Web3 Foundation Growth Manager.

### Previous relevant experience
Apillon's (then, Authtrail's) first production-ready on-chain solution for large-scale industrial data integrity was released in 2018. It worked as an L2 product, aiming to handle and verify large amounts of structured and unstructured enterprise data. The primary use cases were trusted product traceability and audit trails data integrity.

At first, the solution was built on the Ethereum network but was later upgraded to Moonbeam, recognizing the great potential in the Polkadot ecosystem. The release of the Authtrail data integrity solution proves the team's understanding and knowledge of building encryption-based solutions using distributed technologies.

Authtrail's data integrity solution was successfully implemented by the following companies and their production processes:
- AVL List GmbH (https://www.avl.com)
- S&T Iskratel (https://www.iskratel.com)
- IBO GmbH (https://www.ibo-tec.de/en/)
- Hypex (https://hypex.si/en)

Previously, the Authtrail team has also successfully obtained two open call grants from the European Commission:

- Blockpool: https://blockpool.eu/25-selected-smes/kalmia-2/
- FED4SAE: https://fed4sae.eu/success-stories/betp/
