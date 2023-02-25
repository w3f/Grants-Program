# Keysafe Network

- **Team Name:** Keysafe
- **Payment Address:** 0x09C08f46d523822cC9D18A077e2e3BDE5BC07a0b (Ethereum (USDC))
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

This grant is for the RFP [Social Recovery Wallet](https://github.com/w3f/Grants-Program/blob/master/rfps/social-recovery-wallet.md)

### Overview

#### Background

As the [RFP](https://github.com/w3f/Grants-Program/blob/master/rfps/social-recovery-wallet.md) mentioned: "managing private keys is a difficult task." A secure, simple and user-friendly private key management solution has not yet appeared in the Web3 world. Most typical Web3 users do not have the ability to properly safeguard and manage private keys to their crypto assets and Web3 identities. Based on a latest research by ChainAnalysis, the number of lost bitcoins due to account loss has reached 3.79 million($150 billion).

We are thus inspired and encouraged by this initiatives and create Keysafe, a decentralized key custody network together with its underlying protocols, to offer a solution that aims to keep private keys safe and 'alive' in a user-friendly way for all Web3 users.

#### Description

Keysafe is a decentralized protocol for private key backup, retrieval, and access management. Keysafe allows users to register their keys with multiple authentications (SMS, email, etc.) and access their keys from anywhere in the world securely without carrying specific devices that store them.

#### Our solution

![architecture](https://raw.githubusercontent.com/keysafe-protocol/documents/main/network_structure.png)

Keysafe Protocol uses Secure Multi-party Computation (MPC), Threshold BLS Signatures, and Trusted Execution Environment (TEE) technology to manage private keys and allows owners to access with a customized combination of Web2 third-party authentication services including SMS, email, Google Auth, and even another Web3 address.

When a private key is registered in Keysafe Network, the key will be divided into multiple fragments by a threshold secret sharing scheme on user's local device and then sent to randomly appointed TEE nodes in encrypted forms. Each fragment is bound to an authentication condition set by the user, i.e. SMS, email, Google authentication, etc. The private key fragments and the corresponding authentication info will be safely stored in Keysafe's decentralized network of TEE nodes - even the TEE enclave are not allowed to read the data.

When a user wants to access his or her registered private keys from Keysafe Network, the TEE nodes who are in charge of each fragment will initiate an authentication task, i.e. sending a verification SMS or email, according to the authentication info bound to the fragment. After passing the authentication process, the user is allowed to access his or her private keys, which can be a key retrieval, a remote Sig generation, a remote Tx generation, or a modification on the registered data.

### Project Details

#### Documentations

- Project overview PPT [here](https://docsend.com/view/b9yhcs36z2i33755)
- Technical whitepaper [here](https://docsend.com/view/bsb8xf4hbrw422gy)
- API specifications [here](https://docs.google.com/document/d/1DuewxMxVOSB9H6i45FzP71ALR5c6LeDE4Zzg8svlWcw/edit?usp=sharing)

#### POC

We have completed a proof-of-concept to verify the feasibility of our solutions [here](https://demo.keysafe.network).

#### Technology Stack

- The TEE (Trusted Execution Environment) technology: TEE guarantees secrets to be protected with respect to confidentiality and integrity from a hardware level.
- Secret Sharing algorithm: Based on the M-of-N Threshold Secret Sharing algorithm, privates key can be divided into N shares, and can be later restored as long as M shares are obtained.
- BLS-MPC: Based on MPC and BLS algorithms, users can manage nodes to complete threshold signatures with their stored private key fragments.
- The Node: Keysafe Network is made up of many distributed Nodes with TEE inside. Private key fragments are stored safely in the node's TEE enclave.
- Web2 + Web3 authentications: The user can authenticate through Web2 or/and Web3 methods (including SMS, emails, social media accounts and Web3 accounts) to access his or her registered private keys.

#### Scope

There are a lot of tasks involved to get all of these into a product-ready state which is what we are always aiming for, but it'd be too extensive to fit all of the tasks into this one single open grant. Therefore, we have carved out a scope specifically for this grant, followed by the details of the future tasks.

**Grant scope**

- Develop TEE module(written in C++) that supports basic private key transfer and management functions.
- Develop off-chain node program(written in Rust) that coordinating with TEE module.
- Develop on-chain protocol (written in ink! smart contract) that organizes all TEE nodes into a functioning network.
- Develop a key management tool with Web-UI (written in JS) that supports Ethereum and Polkadot accounts.
- Implement a hybrid authentication mode that includes mailbox, password, Google 2FA, and Polkadot account.
- Contribute SDKs for polkadot-js or polkadot-apps, so that polkadot users can use Keysafe Network to backup, recover and manage their substrate-based keys.

**Future development**

- Implement more functions in TEE, such as MPC signature and access delegation.
- Accept nodes endorsed by more organizations.
- Support more authentication methods such as google sign-in
- Develop more Adapter SDKs, compatible with all users of the Substrate ecosystem.

### Ecosystem Fit

- Generally, Keysafe Network provides decentralized and distributed private key custody with recovery and remote access compatibility with multi-factor auth for all potential web3 users.
- By integrating Polkadot-JS and other libraries if needed, Keysafe Network provides key management for all kinds of accounts/address in the Substrate/Polkadot ecosystem.
- Dapps and their users will greatly benefit from the decentralized key custody service from Keysafe Network:
  - No more worrying about losing private keys and corresponding crypto assets for their accounts;
  - They can now easily migrate their private keys to new devices without copying private keys or seedphrases in plaintext and risking themselves of accidentally exposing them to attackers.
  - They can remotely access their accounts and generate signatures/transactions with multi-factor social auths, from devices that don't have private keys stored locally.
- Futhermore, as long as Keysafe Network integrates libraries/SDKs from other ecosystem/blockchains, our users enjoy one-stop cross-platform management for their keys, accounts as well as assets held by the accounts.
- Keysafe Network can be easily integrated into all kinds of Dapps (i.e. wallets, De-Fi protocols, GameFi projects) so that they can offer their users with a 'Log in with Keysafe' option inside their user interface. Since Keysafe's login style is significantly more friendly to new web3 users who are expectedly much familier with social auth, both Dapps and Keysafe Network realize a win-win situation from these integrations.

## Team :busts_in_silhouette:

### Team members

- Name of team leader: Dean Yan
- Names of team members: Mingshi Song, Yan Jiang

### Contact

- **Contact Name:** Dean Yan
- **Contact Email:** yyd106@gmail.com
- **Website:** https://www.linkedin.com/in/dean-yan-717784100/

### Legal Structure

- No legal entity yet

### Team's experience

- Dean is the author of technical whitepaper of [Crust Network](https://crust.network/)
- Mingshi is the incubation program leader of [Astar Network](https://astar.network/)
- We once won the third prize at [Web3-hackathon](https://web3-hackathon.com/) with the idea of ​​Keysafe

### Team Code Repos

- https://github.com/keysafe-protocol
- https://github.com/keysafe-protocol/keysafe-front
- https://github.com/keysafe-protocol/ks-sgx

Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine.

- https://github.com/orgs/keysafe-protocol/people/yyd106
- https://github.com/orgs/keysafe-protocol/people/jarodzz
- https://github.com/orgs/keysafe-protocol/people/newnewsms

### Team LinkedIn Profiles (if available)

- https://www.linkedin.com/in/dean-yan-717784100/
- https://www.linkedin.com/in/yan-jiang-97512455/

## Development Status :open_book:

We completed a [prototype system](https://demo.keysafe.network/) to verify technical feasibility.
The relevant [RFP is here](https://github.com/w3f/Grants-Program/blob/master/rfps/social-recovery-wallet.md)

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 8 months
- **Full-Time Equivalent (FTE):**  3
- **Total Costs:** $27,000 (payable in Ethereum-USDC)

### Milestone 1 — Implement On-chain Modules

- **Estimated duration:** 6 month
- **FTE:**  3
- **Costs:** 15,000USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
|    0a. | License             | Apache 2.0                                                   |
|    0b. | Documentation       | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can use Keysafe. |
|    0c. | Testing Guide       | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
|    0d. | Docker     | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1. | Core Protocol | Implements the `nodeRegister` `userRegister` `userAuthentication` and `keyRecovery` functions for Node program written in Rust. |
| 2. | TEE Implementation | Implements the `nodeRegister` `userRegister` `userAuthentication` and `keyRecovery` functions for TEE part written in C++. |
| 3. | Smart Contract | Implements and test for the !ink smart contracts used for `nodeRegister` and `userRegister`. |
| 4. | Web Server | Provide meta-data management service for Keysafe users written in Rust, users can manage keys and authentication methods |
| 5. | Polkadot.js | Add in encryption/decryption functionality to `@polkadot/keyring` and `@polkadot/extension` so that the protocol can run without the needs to read the private key of users. |

- **Estimated duration:** 2 month
- **FTE:**  3
- **Costs:** 12,000USD

| Number | Deliverable         | Specification                                                |
| -----: | ------------------- | ------------------------------------------------------------ |
|    0a. | License             | Apache 2.0                                                   |
|    0b. | Documentation       | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a project can integrate the Keysafe Protocol into their project. |
|    0c. | Testing Guide       | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
|    0d. | Docker     | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
|    1. | MPMC(Multi-Party-Multi-Cloud)  | Cooperation with multiple institutions, different institutions run Keysafe nodes on different cloud vendors. Decentralizing the Keysafe Network. |
|    2. | Keysafe SDK    | Develop the Keysafe SDK and the corresponding Adapters written in JS, so that the projects in Polkadot ecosystem can integrate Keysafe to provide users with a secured private key backup and recovery function. |
|    3. | Support mainstream authentication methods | Provide multiple authentication methods for user key recovery, such as Ethereum wallet, Polkadot wallet, email and other authentication methods. |

## Future Plans

- Implement more functions in TEE, such as MPC signature and access delegation
- Accept nodes endorsed by more organizations
- Support more authentication methods such as google sign-in
- Develop more Adapter SDKs, compatible with all users of the Substrate ecosystem

As a long-term business model, we have following plans to make Keysafe powerful and secure:

- We will support more TEE implementations, such as Trusted Zone of ARM, SEV of AMD;
- We will explore more possibilities as Keysafe Lego, including AML integrations, Web3 social graph, and decentralized access management;

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Announcement by another team

Here you can also add any additional information that you think is relevant to this application but isn't part of it already, such as:

Dean's Crust Network and Mingshi's Astart Network are both projects of Web3 Grants.
