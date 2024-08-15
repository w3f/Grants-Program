# Wasm and EVM Compatible Multi Signature Wallet

- **Team Name:** Invers Inc
- **Payment Details:**
  - **DOT**: 1L3j12S8rmd5GvJsxzBQzFKypYX5yV2kLrPJhacUYVrLvus
  - **Payment**: 1L3j12S8rmd5GvJsxzBQzFKypYX5yV2kLrPJhacUYVrLvus (USDC)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

We implement a **Multi-Signature Wallet** compatible with both **Wasm** and **EVM**.

Multi-Signature Wallets are used to enhance security by mitigating the risk of key theft and accidental money transfers. They also protect against the loss of private keys. When users or organizations manage valuable assets, setting up a Multi-Signature Wallet is essential. However, there is currently no Multi-Signature Wallet available that seamlessly supports both Wasm and EVM, forcing users to manage separate wallets for each platform.

We address this need by implementing a Multi-Signature Wallet that is user-friendly and simplifies the management of crypto assets across both Wasm and EVM.

### Overview

We implement the **Multi Signature Wallet** which can be set up and send the transaction through CLI. The functionalities of the Multi Signature Wallet are as follows.

- Generate key pair
- Construct multi signature wallet
- Send the transaction to both Wasm and EVM
- Import wallet from private key

Users can send transactions for both Wasm and EVM with a single private key.

### Project Details

We present a Multi-Signature Wallet that provides a unified experience for managing crypto assets on both Wasm and EVM platforms. Our wallet simplifies the process of setting up, managing, and sending transactions across these two popular blockchain environments.

#### Key Features

- **Cross-Platform Compatibility**: The wallet seamlessly integrates with both Wasm and EVM chains, eliminating the need for separate wallets.
- **Enhanced Security**: The Multi-Signature Wallet employs a multi-signature mechanism to protect against key theft, accidental transfers, and the loss of private keys.
- **User-Friendly CLI Interface**: The wallet offers a simple command-line interface (CLI) for user interaction, enabling straightforward key generation, wallet construction, and transaction sending.

#### Wallet Architecture

The Multi-Signature Wallet is structured in four key components.

1. **Primitive**: This layer encompasses cryptographic libraries for core operations like elliptic curve calculations, signing algorithms, and multi-signature construction.
2. **Core**: This component focuses on the on-chain functionalities for multi-signature wallet creation and verification. It comprises Substrate pallets for Wasm and Solidity smart contracts for EVM.
3. **Wrapper**: The wrapper provides a unified interface for interacting with the Multi-Signature Wallet, enabling seamless transaction execution on both Wasm and EVM chains.
4. **Client**: This is the user-facing CLI wallet that provides a streamlined interface for managing all multi-signature functionalities.

#### Primitive Functionalities
The Primitive component provides the following functionalities.

- Generate a private key
- Import a private key
- Retrieve the public key from a private key
- Derive the address from a public key
- Sign a message using a private key
- Verify a message using a public key
- Construct a multi-signature wallet
- Sign a message with a multi-signature private key
- Verify a message with a multi-signature public key

These functionalities are implemented as Rust crate libraries compatible with Substrate, ensuring flexibility and extensibility for developers.

#### Core Functionalities
The Core component provides the following functionalities.

- Construct a multi-signature wallet
- Deposit funds to the multi-signature wallet address
- Verify multi-signature transactions
- Send multi-signature transactions

These functionalities are implemented as a Substrate pallet for Wasm and Solidity smart contracts for EVM. The EVM implementation utilizes precompiled contracts for efficient multi-signature verification.

#### Wrapper Functionalities
The Wrapper component provides the following functionalities.

- Send multi signature construction transaction for both Wasm and EVM
- Send multi signature address deposit transaction for both Wasm and EVM
- Send multi signature transfer transaction for both Wasm and EVM

These functionalities are implemented as a Substrate client and Ethereum libraries.

#### Client Functionalities
The Client component provides the following functionalities.

- Generate key pair
- Construct multi signature wallet
- Send the transaction to both Wasm and EVM
- Import wallet from private key

The `Client` provides multi-signature functionality via a command-line interface (CLI). Users can access the following features.

#### Deliverables
We have developed and contributed several key deliverables for this project.

- **Crypto Libraries**: The Primitive component includes robust cryptographic libraries compatible with `parity-scale-codec` for secure and efficient operations.
- **Substrate Pallet**: The Core component implements the multi-signature functionalities as a Substrate pallet for seamless integration with Wasm chains.
- **Solidity Smart Contracts**: The Core component also provides Solidity smart contracts for EVM compatibility.
- **CLI Wallet**: The Client component offers a user-friendly CLI wallet for managing all aspects of the multi-signature wallet.

### Ecosystem Fit

#### Where and how does your project fit into the ecosystem?

A multi-VM, multi-signature wallet will contribute to the Polkadot ecosystem by

1. improved compatibility and accessibility

- **Access to different chains**: Polkadot employs a para-chain mechanism that connects multiple blockchains. Multi-VM enabled wallets allow seamless management of different chains (Wasm-based parachains, EVM compatible chains, etc.). Users will be able to manage assets from different chains with a single wallet, increasing the accessibility of the entire Polkadot ecosystem.
- **Flexibility for developers**: developers can develop applications that integrate the functionality of different chains by using a multi-VM enabled wallet. This facilitates the development of cross-chain applications and accelerates the growth of the Polkadot ecosystem. 2.

2. improved security

- **Improved asset security**: Multi-signature capability prevents loss of assets due to unauthorized access or mishandling by requiring approval from multiple persons. This is an especially important security measure for users and institutions that handle high-value assets.
- **Increased Trust**: Multi-signature wallets increase confidence in wallet operations by employing a multi-signatory approval process. This can lead to increased trust in the entire Polkadot ecosystem and attract more users and institutions.

3. improved user experience

- **Ease of use**: multi-VM wallets improve ease of use by allowing users to manage assets from different chains from a single interface.
- **Simplified administration**: Eliminates the need to manage multiple wallets, reducing the administrative burden on the user. 4.

4. increased efficiency and scalability

- **Improved cross-chain transaction efficiency**: Multi-VM wallets can efficiently process transactions between different chains. This contributes to improved performance of cross-chain applications.
- **Improved scalability across the Polkadot ecosystem**: Multi-signature wallets can achieve higher throughput than single wallets by employing a multi-person approval process. This contributes to increased scalability of the entire Polkadot ecosystem.

**Conclusion**

Multi-signature wallets with multi-VM support are an important element to improve the compatibility, security, user experience, efficiency, and scalability of the Polkadot ecosystem, and have the potential to contribute significantly to the further development of the Polkadot ecosystem.

#### Who is your target audience?
#### What need(s) does your project meet?

The target audiences for multi-VM, multi-signature wallets are as follows
1. security conscious users
  - Users holding high value virtual currency or digital assets.
  - Users who want to protect their assets from the risk of hacking and theft.
  - Users who want to protect their assets from loss due to mishandling.
2. institutional investors
  - Institutional investors who need to meet strict security standards.
  - Institutions that require a multi-person approval process.
3. corporate
  - Users who own virtual currency or digital assets.
  - Companies that own virtual currency or digital assets and need to securely manage them.
  - Companies that need to utilize multi-signature capabilities for internal controls and fraud prevention.
4. developers
  - Developers who develop cross-chain applications.
  - Developers who develop applications that integrate the functionality of different chains.
5. deFi users
  - Users of decentralized financial applications.
  - Users who want to protect their assets from smart contract vulnerabilities.
6. users in the Polkadot ecosystem
  - Users who need to manage assets on different parachains or EVM compatible chains.
  - Users who want to execute transactions securely and efficiently across the Polkadot ecosystem.

Each of these target audiences has different needs and requirements. Security-conscious users value advanced security features and ease of use. Institutional users value strict security measures, audit capabilities, and regulatory compliance. Enterprises value internal controls, fraud prevention, and asset security.
Developers value access to different chains, flexibility, and ease of use. DeFi users value security, decentralization, and transparency of smart contracts. Users within the Polkadot ecosystem value cross-chain compatibility, efficiency, and scalability. Multi-signature wallets with multi-VM support will address these needs and appeal to a broad user base.

#### How did you identify these needs?

[MULTISIGNATURE WALLETS MARKET REPORT OVERVIEW](https://www.businessresearchinsights.com/market-reports/multisignature-wallets-market-113519)

#### Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?

There is no wallet which has multi signature functionality and Wasm / EVM compatible. Substrate supports [four signing algorithm](https://github.com/paritytech/polkadot-sdk/blob/ebf4f8d2d590f41817d5d38b2d9b5812a46f2342/substrate/primitives/keystore/src/lib.rs#L398).

| Signing Algorithm | Multi Signature | EVM Compatibility |
| ---- | ---- | ---- |
| **This Proposal** | ✅ | ✅ |
| sr25519 | ✅ | ❌ |
| ed25519 | ❌ | ❌ |
| ecdsa | ❌ | ✅ |
| bandersnatch | ❌ | ❌ |
| bls381 | ✅ | ❌ |

## Team :busts_in_silhouette:

### Team members

- Ash Whitehat

### Contact

- **Contact Name:** Invers Inc
- **Contact Email:** info@invers.tech
- **Website:** [Invers](https://invers.tech/)

### Legal Structure

- **Registered Address:** 2F・3F Emblem Nishiarai, 3-33-6 Umejima, Adachi City, Tokyo-to 121-0816, Japan
- **Registered Legal Entity:** Invers Inc.

### Team's experience

We have been working on scaling and privacy projects. We delivered several grants and crypto libraries compatible with `parity-scale-codec`. The leader of this project has extensive experience in open-source development, with contributions to projects such as Microsoft, Zcash, Ethereum PSE, and RustCrypto.

#### Past Grant Projects

- [Confidential Transfer Pallet](https://github.com/w3f/Grants-Program/blob/master/applications/zero-network.md)
- [Plonk Pallet](https://github.com/w3f/Grants-Program/blob/master/applications/zk-plonk.md)
- [Nova Folding Pallet](https://github.com/w3f/Grants-Program/blob/master/applications/zkwasm-rollups-transfer.md)

#### Substrate Compatible Libraries

- [zkstd: Zero Knowlege Proof Starndard](https://github.com/KogarashiNetwork/zkstd)
- [jubjub: Jubjub Curve](https://github.com/KogarashiNetwork/jubjub)
- [bls12_381: Pairing Friendly Bls12 381 Curve](https://github.com/KogarashiNetwork/bls12_381)
- [ec_pairing: Elliptic Curve Pairing](https://github.com/KogarashiNetwork/pairing)
- [she_elgamal: Elgamal Encryption](https://github.com/KogarashiNetwork/elgamal)
- [poly_commit: Kate Polynomial Commitment](https://github.com/KogarashiNetwork/polynomial)
- [red_jubjub: RedDSA on Jubjub Curve](https://github.com/KogarashiNetwork/redjubjub)

### Team Code Repos

- [Kogarashi Network](https://github.com/KogarashiNetwork/Kogarashi)
- [Ash Whitehat](https://github.com/ashWhiteHat)

## Development Status :open_book:

We started to implement the Wasm and EVM compatible elliptic curve library as follows.
https://github.com/KogarashiNetwork/bn254-bls-signature-wallet

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 3 months
- **Full-Time Equivalent (FTE):**  3 FTE
- **Total Costs:** 24,000 USD
- **DOT %:** 100%

<img width="919" alt="gant" src="https://github.com/user-attachments/assets/1cb1f8a8-ac93-46cd-8b43-9a12e2841243">

### Milestone 1 — Multi Signature Wallet Functionalities on Wasm and EVM

In this milestone, we implement [Primitive](#primitive), [Core](#core) and [Wrapper](#wrapper) as we describe above.

- **Estimated duration:** 2 month
- **FTE:**  2
- **Costs:** 16,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish a developer documentation that explains how to import multi signature pallet and test it. |
| 1. | [Multi signature crypto primitive](#primitive) | We will create a multi signature crypto primitives that `generate private key`, `import private key`, `get public key from private key`, `get address from public key`, `sign message with private key` and `verify message with public key`, `construct multi signature wallet`, `sign message with multi signature private key`, `verify message with multi signature public key`. |
| 2. | Multi signature EVM functionalities | We will create a multi signature on-chain Solidity contracts that `construct multi signature wallet`, `deposit multi signature wallet address` and `verify multi signature`, `send multi signature transaction` on EVM through precompiled contracts operations. |
| 3. | Multi signature Wasm functionalities | We will create a multi signature on-chain Substrate pallets that `construct multi signature wallet`, `deposit multi signature wallet address` and `verify multi signature`, `send multi signature transaction` on Wasm. |
| 4. | Multi signature transaction libraries | We will create a multi signature transaction libraries that `send multi signature construction transaction`, `send multi signature address deposit transaction` and `send multi signature transfer transaction`. |

### Milestone 2 — Integration Test and Developer Tutorial

- **Estimated Duration:** 1 month
- **FTE:**  1
- **Costs:** 8,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish a developer documentation that explains how to import multi signature pallet and test it. |
| 1. | [Multi signature wallet CLI](#primitive) | We will create a multi signature wallet CLI that `generates key pair`, `constructs multi signature wallet` and `sends the transaction to both Wasm and EVM`, `imports wallet from private key`. |
| 2. | Multi signature integration test | We will do a multi signature wallet functionalities integration test for Substrate and Ganache environment through Github Actions. |
| 3. | Multi signature wallet developer tutorial | We will create a multi signature tutorial that explain how to `generate key pair`, `construct multi signature wallet` and `send the transaction to both Wasm and EVM`, `import wallet from private key`. |

## Future Plans

- Zero Knowledge friendly signing algorithm
- ID based encryption

## Additional Information :heavy_plus_sign:

- **How did you hear about the Grants Program?**
    - Announcement by another team
- **Wheter there are any other teams who have already contributed (financially) to the project.**
  - No.
- **Previous grants you may have applied for**
    - [zk-rollup](https://github.com/w3f/Grants-Program/blob/master/applications/zk-rollups.md)
    - [zk-plonk](https://github.com/w3f/Grants-Program/blob/master/applications/zk-plonk.md)
    - [zero-network](https://github.com/w3f/Grants-Program/blob/master/applications/zero-network.md)
