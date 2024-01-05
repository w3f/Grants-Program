# DOT Login

- **Team Name:** DOT Login
- **Payment Address:** TODO
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 3

## Project Overview :page_facing_up:

### Overview

This project aims to integrate OAuth2 with Substrate, enabling users to sign into their wallets using familiar Web2 authentication methods like Google, Twitter, Facebook, and Microsoft OAuth. Our goal is to lower the entry barrier to the Web3 world and make it more accessible to everyday users.

### Project Details

- **Technology Stack:**
    - Rust for Substrate pallets,
    - TypeScript/ReactJS for the wallet logic,
    - A Material Design lib for the wallet UI/UX,
    - OAuth2 integration libraries,
    - Polkadot.js/API or PAPI libraries,
    - RxJS for reactive programming.

### Ecosystem Fit

- **Target Audience:** New and existing Web2 users transitioning to Web3, developers looking for user-friendly authentication methods.
- **Needs Met:** Simplifying the transition from Web2 to Web3 and enhancing the overall user experience in the Polkadot/Kusama ecosystem.

## Team :busts_in_silhouette:

### Team members

- Mickael Luangkhot (Project Lead)
- Ahmed Abouzi (Lead Developer)
- Avraam Makmhudov (Software Developer)

### Contact

- **Contact Name:** Mickael Luangkhot
- **Contact Email:** (provided privately)

### Legal Structure

- **Registered Address:** (provided privately)
- **Registered Legal Entity:** (provided privately)

### Team's experience

- **Mickael Luangkhot:** TODO
- **Ahmed Abouzi:** TODO
- **Avraam Makmhudov:** TODO

### Team Code Repos

- TODO

### Team LinkedIn Profiles

- TODO

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 2 months
- **Full-Time Equivalent (FTE):**  3.5 FTE
- **Total Costs:** 40,800 USD

### Milestone 1 — Wallet Creation Flow
6800
- **Estimated Duration:** 1 month
- **FTE:**  2.5
- **Costs:** 17,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | Inline code documentation and basic user guide. |
| 0c. | Testing Guide | Comprehensive unit tests. |
| 0d. | Docker | Docker setup for testing. |
| 1. | `zkEphemeralKeys` Pallet | Substrate pallet for ephemeral key registration with zk-SNARKs proof validation. |
| 2. | `address` Pallet | Substrate pallet for deriving wallet addresses from OAuth2 JWT. |
| 3. | `jwtValidation` Pallet | Substrate pallet for JWT validation. |
| 4. | `JWK Registry` Pallet | Pallet that stores JWK registries of supported OAuth2 providers continuously. |
| 5. | Off-Chain worker | Off-chain worker that queries the JWK registry endpoints of OAuth providers continuously and integrates with `JWK Registry` pallet. |
| 6. | OAuth Integrations | Integrate Google, Twitter, Facebook, and Microsoft OAuth providers with `JWK Registry` pallet. |

### Milestone 2 — Transaction Creation Flow

- **Estimated Duration:** 1 month
- **FTE:**  2
- **Costs:** 13600 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | Detailed documentation of the transaction flow. |
| 0c. | Testing Guide | Updated testing guide with transaction flow tests. |
| 0d. | Docker | Updated Docker setup. |
| 0e. | Article | Write an article that covers the implementation of the two modules, how to use them, how this development is significant for the ecosystem and mainstream adoption as well as our long-term vision for this project |
| 1. | Transaction Signature Verification Mechanism | Develop a mechanism in zkEphemeralKeys to verify the signatures of transactions against the registered ephemeral keys. A `SIGNATURE_VERIFIED` (or similar) event will be emitted upon successful verification. |
| 2. | Implement `execute_transfer` Extrinsic | Develop the `execute_transfer` extrinsic within the `zkEphemeralKeys`` pallet. It will  accept all necessary parameters for a transfer, including an ephemeral key signature. |
| 3. | `zkEphemeralKeys`-internal Transfer Functionality | Develop an internal function within the `zkEphemeralKeys` pallet to handle the actual token transfer. This function will replicate the essential checks and logic of the balances pallet’s transfer mechanism and has to be updated, if the the balances pallet changes. While this dependency is not perfect, we think that's the best trade-off, because the alternative would be to change the balances pallet which is something we'd like to avoid. We might propose a change on the balances pallet at a later stage, to make this more flexible. Note that this deliverable will also include the handling and emitting of events to broadcast the success or failure of the transfer. |

### Milestone 3 — Wallet

The goal of this milestone is to implement a web-based wallet that allows users to create addresses, receive and send transactions to other dot-login users as well as web3-native wallets in the ecosystem.

- **Estimated Duration:** 1 month
- **FTE:**  1.5
- **Costs:** 10200 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | Detailed UI documentation and user guides. |
| 0c. | Testing Guide | Comprehensive testing guide for UI. |
| 0d. | Docker | Final Docker setup for UI. |
| 1. | dot login TypeScript library | Implement a reactive, TypeScript-based library that encapsulates the functionality specific to dot login, such as creating ephemeral keypairs, sending any supported transactions to extrinsics implemented in M1 & M2 and generating zk-SNARKs. |
| 2. | web-based ui | Implement a web-based UI that supports the following basic wallet actions: derive and display addresses, use QR codes to request payments, show balances and past transactions (cached in web storage for the first stage), send transactions, receive transactions, in-browser notifications for transactions. |

## Future Plans

- **Long-Term Maintenance:** Continued development and maintenance funded by community contributions and potential revenue from partnerships.
- **Short-Term Use:** Promoting adoption through collaborations with Web3 projects and communities.
- **Long-Term Vision:** Expand Web2 integrations, enhance multi-chain interoperability, and establish a robust ecosystem for Web2 to Web3 transitions.

## Additional Information :heavy_plus_sign:

**Discovery:**

- Discovered the Grants Program through Web3 Foundation workshops and community forums.