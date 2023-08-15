# DAuth Network

- **Team Name:** DAuth
- **Payment Address:** 0x09C08f46d523822cC9D18A077e2e3BDE5BC07a0b (Ethereum (USDC))
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

This grant is for the RFP [Social Recovery Wallet](https://github.com/w3f/Grants-Program/blob/master/rfps/social-recovery-wallet.md)

### Overview

#### Background

As the [RFP](https://github.com/w3f/Grants-Program/blob/master/rfps/social-recovery-wallet.md) mentioned: "managing private keys is a difficult task." The next billion users who will enter Web3 will have a hard time entering without the empowerment of social accounts. The Web3 ecosystem needs Web2 functionality that keeps the underlying system decentralized. 

Most of the current authentication is based on the centralized OAuth and SMTP protocol framework. These protocol frameworks will make the authentication service providers becoming centralized collectors of user Web2-Web3 information (although this is not their intention). This massive collection of user data poses a significant risk of exposing the user's identity and assets, ultimately compromising the security and privacy of Web3.

#### Description

DAuth is an improved and adapted version of OAuth for the Web3 ecosystem, providing native privacy and trustless social account access for Wallets, Decentralized Identifiers (DIDs), and Decentralized Applications (DApps).

#### Our solutions

In contrast to OAuth, SMS, and SMTP protocols, which rely on centralized servers and third-party services to verify user identities and send messages, DAuth uses blockchain and ZK technologies to provide a trustless authentication and verifiable profile aggregation that enhances trust, privacy, and security on the Web3. This means that users can authenticate their social accounts without revealing their identities. Moreover, DApps can send Emails and SMS messages to their subscribed users while keeping the user's email addresses and phone numbers private at the same time, giving the users greater control over their personal data and enhancing their privacy. 

##### Decentralized OAuth

The DAuth adapts the mainstream OAuth service providers such as Google, Github, and Twitter for users to be able to pass the authentication of their social accounts without disclosing any information about it. This is because the whole authentication information is managed by the TEE and then a ZK proof is generated and passed onto the DApp proving that the user has authenticated. 

![doauth](https://1856926917-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FZQcs7KxlVGgyCzI42uny%2Fuploads%2Fq04aO4bPez5YK61OqgRI%2Fimage.png?alt=media&token=e1ab8870-a552-4c22-8011-212c1bbd9e99)

##### Decentralized Email

This anonymous mechanism is based on the reconstruction of the SMTP protocol. SMTP allows proxy servers to send emails to a given email address. When the DAuth node gets an email request, the enclave will translate the web3 address to the user's email accordingly, and the enclave will establish an SMTP channel with the email service provider. The key point is that the channel will be encrypted with a TLS handshake between the DAuth Enclave and the email service provider, which will keep the user's email address invisible to the DAuth node.  

![dmail](https://1856926917-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FZQcs7KxlVGgyCzI42uny%2Fuploads%2FMixRhVaMs0CnRHaN7ueB%2Fimage.png?alt=media&token=809e0d06-b309-4e5a-bd2e-5099f35366b2)

### Project Details

#### Documentations

- Project overview PPT [here](.com/view/fem479hkgc9hc5ck)
- Project Docs [here](https://dauth.gitbook.io/dauth-docs/dauth-network/introduction)

#### POC

We have completed a proof-of-concept to verify the feasibility of our solutions [here](https://demo.dauth.network/auth).

#### Technology Stack

* DAuth Node: A DAuth Node is the basic unit of DAuth Network. DAuth Network will consist of nodes from several institutions in its early stage. In the future, the number of nodes will gradually expand with the increase in the security and stability of the DAuth Network.
* Secure Enclave: DAuth Enclave uses Trusted Execution Environment (TEE) technology to handle social account authentication in a anonymous way. That is also the part the ZK technology can't do for now. TEE is hardware technology that is leveraged on each DAuth node. The TEE protects the core data of the users from being tampered with by the DAuth nodes.
* Zero Knowledge Authentication: Zero-Knowledge Proofs are the best way to handle authentication problems since it keeps information private. DAuth uses zero-knowledge as an identity credential generation for users. However, the current ZK technology can not make social account authentication anonymous so we use TEE technology as an add-on module for anonymity protection and use ZK for credential generation. 

#### Scope

There are a lot of tasks involved to get all of these into a product-ready state which is what we are always aiming for, but it'd be too extensive to fit all of the tasks into this one single open grant. Therefore, we have carved out a scope specifically for this grant, followed by the details of the future tasks.

**Grant scope**

- Develop TEE module(written in Rust) that supports basic Google OAuth.
- Develop TEE module(written in Rust) that supports basic Email auth flow.
- Develop TEE module that generates proofs for user authentication.
- Develop off-chain node program(written in Rust) that coordinating with TEE module.
- Develop on-chain protocol (written in ink! smart contract) that organizes all TEE nodes into a functioning network.
- Contribute SDKs for dApps and wallets in Polkadot ecosystem, such as Clover and zCloak, so that users in Polkaodt ecosystem can  have a trustless and private social login to their Web3 accounts.

**Future development**

- Implement more functions in TEE, such as ZK proof.
- Accept nodes endorsed by more organizations.
- Support more authentication methods such as Twitter and Discord.

### Ecosystem Fit

- Generally, their are many wallets in Polkadot ecosystem that planning to provide social login functions in the trend of Account Abstraction and MPC wallet. DAuth will make all the wallets trustless, verifiable, private, and fully decentralized. 

## Team :busts_in_silhouette:

### Team members

- Name of team leader: Dean Yan
- Names of team members: Michael A. Hanono, Scott Zhang

### Contact

- **Contact Name:** Dean Yan
- **Contact Email:** yyd106@gmail.com
- **Website:** https://www.linkedin.com/in/dean-yan-717784100/

### Legal Structure

- No legal entity yet

### Team's experience

- Dean is the author of technical whitepaper of [Crust Network](https://crust.network/)

### Team Code Repos

- https://github.com/DAuth-Network/dauth-demos

Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine.

- https://github.com/orgs/DAuth-Network/people/yyd106
- https://github.com/orgs/DAuth-Network/people//mike-hanono
- https://github.com/orgs/DAuth-Network/people/scott0927

### Team LinkedIn Profiles (if available)

- https://www.linkedin.com/in/dean-yan-717784100/
- https://www.linkedin.com/in/michael-hanono/

## Development Status :open_book:

We completed a [prototype system](https://demo.dauth.network/auth/) to verify technical feasibility.
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
|    0b. | Documentation       | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can use DAuth. |
|    0c. | Testing Guide       | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
|    0d. | Docker     | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1. | Core Protocol | Implements the `nodeRegister` `userRegister` `userAuthentication` and `keyRecovery` functions for Node program written in Rust. |
| 2. | TEE Implementation | Implements the `nodeRegister` `userRegister` `userAuthentication` and `keyRecovery` functions for TEE part written in C++. |
| 3. | Smart Contract | Implements and test for the !ink smart contracts used for `nodeRegister` and `userRegister`. |
| 4. | Web Server | Provide meta-data management service for DAuth users written in Rust, users can manage keys and authentication methods |
| 5. | Polkadot.js | Add in encryption/decryption functionality to `@polkadot/keyring` and `@polkadot/extension` so that the protocol can run without the needs to read the private key of users. |

- **Estimated duration:** 2 month
- **FTE:**  3
- **Costs:** 12,000USD

| Number | Deliverable         | Specification                                                |
| -----: | ------------------- | ------------------------------------------------------------ |
|    0a. | License             | Apache 2.0                                                   |
|    0b. | Documentation       | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a project can integrate the DAuth Protocol into their project. |
|    0c. | Testing Guide       | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
|    0d. | Docker     | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
|    1. | SDK  | Cooperation with multiple wallet providers, they will integrate DAuth in their authentication flow |
|    3. | Support mainstream authentication methods | Provide multiple authentication methods such as Google, Email, Github and other authentication methods. |

## Future Plans

- Accept nodes endorsed by more organizations.
- Support more authentication methods such as Twitter and Discord sign-in.
- Open DAuth network to public, espacially to Authentication solution providers.

As a long-term business model, we have following plans to make DAuth powerful and secure:

- Implement more functions in TEE, such as ZK proof on the authentication result.
- We will support more TEE implementations, such as Trusted Zone of ARM, SEV of AMD;

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Announcement by another team

Here you can also add any additional information that you think is relevant to this application but isn't part of it already, such as:

Dean's Crust Network and Mingshi's Astart Network are both projects of Web3 Grants.
