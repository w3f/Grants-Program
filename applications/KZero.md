- **Team Name:** Kzero
- **Payment Details:**
  - **Payment**: 167Y6kiaPzkVhYs9YM1q4bB987D4eHRLPAKgRqJpxby8Rv2f (USDC)
  - **Payment**: 167Y6kiaPzkVhYs9YM1q4bB987D4eHRLPAKgRqJpxby8Rv2f (DOT)
- **Level**: 3

## Project Overview 📄

### Overview

Kzero is a Substrate-based framework that facilitates transaction initiation on the blockchain using a **zkLogin** mechanism, enabling users to access Web3 applications without private keys. By leveraging zkSNARKs and OpenID providers, Kzero ensures seamless onboarding, on-demand key management, and high-security assurance. Any Substrate-based blockchain can easily integrate Kzero to improve user experience and adoption.

### Background

#### Barriers to Web3

- **Wallet Setup Complexity**: Traditional Web3 wallets require users to create and manage blockchain addresses, which is a daunting process for non-technical users.
- **Private Key** **Management**: Losing access to a private key results in permanent loss of funds, making users reluctant to engage with Web3 applications.
- **Mnemonic Phrases Burden**: Users are required to store and secure a 12 or 24-word seed phrase, which introduces the risk of human error and phishing attacks.

It's worth observing that all these features and plans are wallet-related challenges and solutions.

#### Current wallet Solution

There are already various wallet solutions available, each catering to different security and usability needs. For example, hardware wallets offer high security but lack ease of use, while MPC wallets are highly user-friendly but come with certain security risks.

![Wallet Solutions](https://p.ipic.vip/ur1zop.png)

### ZKLogin is the ultimate solution

zkLogin brings several key advantages to blockchain authentication:

- **Enhanced Security**: Unlike traditional private key management, zkLogin ensures authentication without exposing sensitive credentials, reducing phishing and key theft risks.
- **Improved Privacy**: By leveraging zero-knowledge proofs, zkLogin allows users to authenticate without revealing unnecessary personal information to third parties.
- **Seamless User Experience**: zkLogin eliminates complex onboarding processes, enabling users to access Web3 applications with familiar social logins.
- **Interoperability**: zkLogin can be easily integrated with multiple blockchain networks, making it a flexible and scalable authentication solution for the Web3 ecosystem.
- **Resistance to Account Compromise**: Even if an ephemeral key is compromised, the user's main account remains secure, providing an extra layer of protection.

*Leading ecosystems are already actively researching zkLogin.*

|          | Support zkLogin? | Proof                                                        | Solutions                                                    |
| -------- | ---------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| Ethereum | ❓                | https://ethresear.ch/t/zklogin-framework-based-on-4337-contract-wallet/20855 | [Privy](https://x.com/0xJamesXXX/status/1831663721024012621)[Dynamic](https://app.dynamic.xyz/) |
| Sui      | ✅                | https://sui.io/zklogin                                       | [Sui Wallet](https://suiwallet.com/)                         |
| Starknet | ✅                | https://mirror.xyz/xarlabs.eth/kfUf0XyK-sxig3DYBKvVcr836HEyvkqqxU0uN-tjAHo | [zKey](https://www.zkey.org/)                                |
| Aptos    | ✅                | https://github.com/aptos-foundation/AIPs/blob/main/aips/aip-61.md | [Keyless Wallet](https://aptos.dev/en/build/guides/aptos-keyless) |

Some of the products attract millions of people, [like Privy](https://bingx.com/zh-tc/support/articles/36563397225497/), is important to the Polkadot ecosystem as well.



## Highlights of KZero

- **Keyless:** Say goodbye to managing private keys. One-click access to your DAppswithout keys or device dependency. Simple, fast, and frictionless.
- **100% Self-Custodial:** Users maintain complete ownership of their assets — your data stays with you. Maximum security for your assets and identity, always under your control. 
- **Maximum Security Assurance:** Kzero introduces a revolutionary approach to key management, empowering users to seamlessly change their local temporary private keys at their convenience while providing the option to set expiration times for each key. 
- **Simplified Onboarding:** One-click seamless experience. Users can initiate the onboarding process with a single click by choosing to "Login with Google," after that, users can easily start to submit transactions.
- **ZKP-based Social Login.** **Privacy Protected:** Zero-knowledge proof (ZKP) lets users interact with Web3 while keeping their data private. No compromises—access DApps securely and anonymously.
- **Multiple** **JWT** **providers:** Users can login with Google, Twitch, Kakao, Facebook, Apple, Slack and other OpenID Providers.



## Tech Details

### How Kzero works

![zklogin-mechanism](https://p.ipic.vip/9ppk9h.png)

(Step 0) We plan to use Groth16 for our protocol’s zkSNARK instantiation, requiring a singular generation of a structured common reference string (CRS) linked to the circuit. A ceremony is conducted to generate the CRS, which is used to produce the proving key in the ZK Proving Service, the verifying key in Project Authority.

(Step 1-3) The user begins by logging into an OpenID Provider (OP) to obtain a JWT token containing a defined nonce. In particular, the user generates an ephemeral KeyPair (eph_sk, eph_pk), along with expiry times (max_epoch) and randomness (jwt_randomness). Through these three parameters, the Wallet Extension can thus compute the nonce. After the user completes the OAuth login flow with the nonce, an JWT token can be retrieved.

(Step 4-5) The Account Related Module then sends the JWT token to a Salt Backup Service which returns the unique user_salt based on the JWT token.

(Step 6) The Wallet Extension sends the ZK Generation Service with the JWT token and some auxiliary inputs. The proving service generates a Zero-Knowledge Proof that takes these as private inputs and does the following: a) Checks the nonce is derived correctly as defined b) Checks that key claim value matches the corresponding field in the JWT, c) Verifies the RSA signature from OP on the JWT, and d) the address is consistent with the key claim value and user salt.

(Step 7) A transaction is signed using the ephemeral private key to generate an ephemeral signature. Finally, the user submits the transaction along with the ephemeral signature, ZK proof and other inputs to Chain.

(After Step 7) After submitted on chain, the Kzero framework verifies the ZK proof against the provider JWKs from storage (agreed upon in consensus) and also the ephemeral signature.

### Components

**ZKP Service**

Responsible for generating zero-knowledge proofs. This includes two submodules: the zk circuit and the ZKP generation module.

> The ZK Circuit should contain the following main checks:
>
> ( a ) Checks the nonce is derived correctly as defined
>
> ( b ) Checks that key claim value matches the corresponding field in the JWT,
>
> ( c ) Verifies the RSA signature from OP on the JWT,
>
> ( d ) Check the address is consistent with the key claim value and user salt.

The generation of zero-knowledge proofs will occur on the server side, rather than the client side, to enhance user experience. The service will be accelerated using GPUs.

**Salt Service**

When signing a transaction for an address using Kzero, a **unique salt** value must be provided. This salt value is crucial for ensuring that onchain addresses cannot be traced back to the user’s Web2 credentials. 

**KZero-SDK**

Functionalities:

1. Full-Flow zkLogin Implementation
   1. Handles the complete zkLogin workflow, including:
      - JWT request management
      - Secure salt generation
      - Zero-Knowledge Proof (ZKP) generation (server-side GPU-accelerated)
2. Third-Party Integration Service
   1. Provides out-of-the-box zkLogin support for external applications.
   2. Once integrated, third-party applications can seamlessly enable zkLogin functionality.

**Zklogin-runtime**

This is a Substrate runtime pallet that: 

1. verifies zklogin-format extrinsics
2. verifies zero-knowledger proofs
3. maintains valid JWK sets



### KZero Workflow

![KZero workflow](https://p.ipic.vip/5vptx2.png)

In short, the Kzero process can be broken down into the following steps

1. The user generates an ephemeral keypair locally, ensuring that it has a set expiration time for higher security. This keypair is used for signing the zkLogin transaction later.
2. The user authenticates their identity via a social account, after which they retrieve a signed JSON Web Token (JWT) as proof of authentication.
3. Utilizing the salt service, the user communicates with the salt server. After verifying their identity through the JWT, they obtain the unique salt associated with their zkAccount, which is essential for the ZKP Generation process and on-chain address calculation.
4. Utilizing ZKP generation service to efficiently and securely generate zero-knowledge proof, ensuring privacy and security without exposing sensitive information.
5. Finally, the user assembles the zkLogin transaction, signs it using the ephemeral keypair generated earlier, and then sends the signed transaction to the blockchain for verification, ensuring a secure and seamless login process.



### Recovery Mechanisms

There are currently two potential, optional recovery mechanisms available:

1. **Built-in recovery mechanism in zklogin-pallet**: Each zklogin address can designate a recoverer. Under specific conditions, such as when a zklogin address has been inactive for N hours, the recoverer can send transactions and manage assets on behalf of the zklogin address.
2. **zklogin + proxy**: Through the proxy pallet, a zklogin address can set up 'delegate' or 'delayed-delegate' accounts. At any time when assets in the zklogin address face potential threats, users can immediately handle their assets securely through the proxy module.

mechanism 1 will be implemented within the scope of this grant.


## Security and Privacy

**Ephemeral Private Key**

The ephemeral private key remains valid only before the expiration time. If this key is lost, users can simply generate a new ephemeral private key for signing transactions, along with a new ZK proof. However, in cases where the temporary private key is compromised, attackers would still need both the user's salt and a valid ZK proof to access and transfer funds.

The ephemeral private key is stored in the browser's **session storage**, which means that:

- Maintains data only for the duration of a browser session
- Automatically clears when the browser tab or window is closed
- Is isolated to a single browser tab/window
- Provides better security compared to Local Storage for sensitive data
- Data is never transferred to the server



**User Salt**

The user salt plays a vital role in both:

- generating ZK proofs
- deriving zkLogin addresses

While a compromised user salt alone doesn't directly threaten funds, it does create privacy implications. An attacker with access to the user salt could link a user's subject identifier (sub) to their zkLogin address.



**Salt Server**

The salt server leverages a master seed along with the user's JSON Web Token (JWT) to derive a reproducible salt value for each user and application. The security of the master seed and the derivation algorithm is critical, so the entire computation is executed in a secure environment, such as a Trusted Execution Environment (TEE). This setup ensures that the master seed, which is critically important, is generated within a trusted environment, preventing even administrators from accessing it.

To address potential disaster scenarios, the master seed is divided into multiple encrypted shards. These shards are distributed to a Salt Value Committee, which may consist of community-selected members or esteemed entities like Parity Technologies, the Web3 Foundation, and others. This approach enhances resilience and ensures that no single entity has complete control over the master seed, thus maintaining the integrity and security of the identity-to-address separation.



## Ecosystem Fit

Kzero provides significant advantages to the Polkadot and Kusama ecosystems by improving accessibility, security, and usability. Key benefits include:

- **Enhanced User Adoption**: By eliminating the need for complex private key management, Kzero lowers the entry barrier for new users, driving higher adoption across Polkadot and Kusama projects.
- **Improved UX for DApps**: Web3 applications can integrate Kzero to offer seamless authentication without sacrificing decentralization.
- **Security and Compliance**: The use of zero-knowledge proofs ensures that user authentication remains private and verifiable, aligning with Polkadot’s principles of security and interoperability.
- **Compatibility** **with Multiple Chains**: Any Substrate-based chain can integrate this pallet to provide a social login feature, making it a valuable addition to the ecosystem.



# Team 👥

### Team members

- Leader: Liam Xu
- Members: Suvi Dong(Runtime Engineer), Jarvan Zhang(Full-Stack), Tiny Liu(PM)

### Contact

- **Contact Name:** Dev team
- **Contact Email:** dev@kzero.xyz
- **Website:** https://kzero.xyz/

### Legal Structure

- Start up team

### Team's experience

**Liam Xu**: Math and computer science background. Over four years of research experience in the zero-knowledge field, familiar with various zk algorithms and tools. Translated and analyzed multiple zk-related articles. Worked in the blockchain industry for 3+ years, with expertise in ecosystems such as Ethereum, Solana, Polkadot, etc. Good at Rust, Solidity, Node.js, and Anchor development.

**Suvi** **Dong**: Suvi previously worked with Darwinia team as smart contract developer and runtime developer, currently serving as a graduate-level blockchain course lecturer at NUAA (Nanjing University of Aeronautics and Astronautics, ranked top 30 in China).

**Jarvan Zhang:** Jarvan with five years of experience in the blockchain industry, has served as a front-end development engineer at 8BTC and a full-stack development engineer at Patract.

**Tiny Liu:** Tiny previously worked with the Darwinia team as the project lead for a blockchain game helping the project achieve a DAU (Daily Active Users) breakthrough.

### Team Code Repos

Team github:

- [https://github.com/kzero-xyz](https://github.com/kzero-xyz)

# Development Status 📖

- ✅ Complete the ZK circuit design. 
- ✅ Complete the on-chain rule design. 

# Development Roadmap 🔩

## Overview

- **Total Estimated Duration:** 2 Months
- **Full-Time Equivalent** (FTE): 4 FTE
- **Total Costs:** 50,000 USD
- **DOT %**: 50%

Milestone 1: ZKP Service

> The ZKP-related tasks include the **ZK** **Circuit Code** (written in Circom), the **ZKP witness service**, and the **ZKP generation service**. The key logic for the circuit can be found in the "component" section. To generate the zero-knowledge proof based on the ZK circuit, the process starts with witness generation(https://docs.circom.io/background/background/#witness), followed by the generation of the zero-knowledge proof via the witness. To enhance performance and provide a better experience, the **ZKP generation service** will utilize a **GPU-based** version.

- **Estimated duration:** 1 month
- **FTE**: 4
- **Costs:** 20,000 USD

| Number | Deliverable               | Specification                                                |
| ------ | ------------------------- | ------------------------------------------------------------ |
| 0a.    | License                   | GPLv3                                                        |
| 0b.    | Documentation             | We will provide technical documentation for the code, as well as deployment and testing guides, explaining key function calls and how users can start and test our ZKP-related server, which will demonstrate how it works. |
| 0c.    | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d.    | Docker                    | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1      | Kzero Circuit Code        | We will provide an open-source repository, release the circuit code, and offer comments, design insights, and documentation to help with understanding. We will also provide test code for the circuit and usage documentation to allow users to perform local testing. |
| 2      | ZKP Witness Service       | We will provide the repository for the ZKP Witness Service, along with service guide and testing documentation. |
| 3      | ZKP service (GPU)         | We will provide the repository for the ZKP Generation Service(GPU-Version), along with service guide and testing documentation. |

## Milestone 2: kzero-runtime

- **Estimated Duration:** 1 month
- **FTE**: 4
- **Costs:** 20,000 USD

This part serves as substrate runtime pallets, consists of two main components:

1. pallet-zklogin
   1. Transaction entry points for ZK operations
   2. Transaction verification workflow
   3. Maintenance of valid JWK (JSON Web Key) set
   4. Recovery mechanism
2. primitive-zklogin
   1. Core type definitions for zkLogin
   2. Zero-knowledge proof verification components
   3. Utility functions and helpers

| Number | Deliverable               | Specification                                                |
| ------ | ------------------------- | ------------------------------------------------------------ |
| 0a.    | License                   | GPLv3                                                        |
| 0b.    | Documentation             | We will provide both inline documentation of the code and a basic tutorial that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| 0c.    | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d.    | Docker                    | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1      | kzero-runtime             | open source repo                                             |
| 2      | Tests                     | tests on pallet-zklogin and primitive-zklogin                |
| 3      | docs                      | A tutorial for how to integrate Kzero into a substrate-based blockchain |

## Milestone 3: Salt Service

> The architecture of the Salt Server is critical, as it introduces a value to unlink the OAuth identifier from the on-chain address. We have chosen to implement a Trusted Execution Environment (TEE), running the Salt Server in an isolated environment to ensure that only the user can access their salt, preventing any unauthorized access.

- **Estimated Duration:** 0.5 month
- **FTE**: 2
- **Costs:** 5,000 USD

| Number | Deliverable               | Specification                                                |
| ------ | ------------------------- | ------------------------------------------------------------ |
| 0a.    | License                   | GPLv3                                                        |
| 0b.    | Documentation             | We will provide both inline documentation of the code and a basic tutorial that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| 0c.    | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d.    | Docker                    | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1      | Salt Service Code         | We will provide the repository for the Salt Service, along with service guide and testing documentation. |
| 2      | docs                      | A tutorial for how to use the Salt Service.                  |

## Milestone 4: KZero-SDK

> Milestone Focus:
>
> In this milestone, we will deliver the basic functionalities of the kZero-SDK, including:
>
> - A demo website that offers an experiential zkLogin service.
> - Note: This milestone does not include the module for integration with third-party applications.

- **Estimated Duration:** 0.5 month
- **FTE**: 2
- **Costs:** 5,000 USD

| Number | Deliverable               | Specification                                                |
| ------ | ------------------------- | ------------------------------------------------------------ |
| 0a.    | License                   | GPLv3                                                        |
| 0b.    | Documentation             | We will provide technical documentation for the SDK.         |
| 0c.    | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d.    | Docker                    | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e.    | Article                   | We will publish an article overviewing using Fennel Protocol in applications for secure off-chain data-centric messaging and secure on-chain signal mechanisms. |
| 1      | Kzero-SDK                 | We will provide an SDK repository that covers all functionalities, from account creation to transaction submission using Kzero, along with detailed comments and documentation for better understanding. |
| 2      | Kzero-Website             | We will provide a demo website for Kzero, which will include essential account and transaction features. |

## Future Plans

1. Third-Party Integration SDK
   1. Release a comprehensive SDK for seamless third-party application integration.
2. Enhanced KZero Runtime
   1. Expand and optimize the KZero runtime to support eth-compatible transaction formats, enabling compatibility with the Asset Hub.
3. KZero Developer Platform 
   1. Securely serves third-party applications, and provide detailed user data analytics and insights to support apps' needs.
4. zkLogin Notification Service
   1. A notification service for third-party applications based on zklogin.

## Additional Information ➕

**How did you hear about the Grants Program?** 

Hear from Seraya.

**Demo Website:**

https://demo.kzero.xyz/