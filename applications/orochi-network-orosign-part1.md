# Orochi Network's proposal for research and development MPC ECDSA

- **Team Name:** Orochi Network
- **Payment Address:** 167Zj4mv1jBTzJimSe7LngcRS7SBixsx3ZSCFr45Eo1SjWCY (USDT Polkadot)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 1

## Project Overview :page_facing_up:

### Overview

Users are now able to take advantage of the highest security feature similar to a cold storage while experiencing flexibility and convenience of the mobile app at minimal cost. Orosign is a self-managing custodial Mobile App for digital assets/identity that suits all demands of Web3.

### Project Details

Orosign project utilize cryptographic primitives and Multiparty Computation (MPC) to help people manage/secure their digital assets, it could provide highest security meanwhile friendly to end-users. Orosign provides following features:

- **Gasless Multi-signature:** We use ECDSA proofs to perform off-chain voting to manage multi-signature wallet.
- **Gaming & NFT:** Support gaming by providing automation transaction signing for Web3 game, this wallet can manage and display NFTs.
- **ZeroKey:** A MPC based wallet, we build ECDSA on top of MPC to secure the signing process where user can perform the signing without any actual private key.
- **Web3 Passport:** Support Proof of Carrying Data (PCD) for the Web3 authorization.
- **Account Abstraction with MPC:** You could see the raise of Account Abstraction at the smart contract level, we want to take it a bit further with MPC. We want to provide a MPC based account abstraction for the end-users, so they can manage their digital assets in a more secure way.

![](https://orochi.network/assets/images/orosign.png)

### Ecosystem Fit

- **Non-custodial** Users are holding their own digital asset that meant the encrypted private keys is stored in their crypto wallet and hold the major secret shares in MPC wallet. Orosign was design to make sure no one able to touch people digital asset even Orochi Network.
- **High Customizability** In gasless Multi-signature Wallet and MPC Wallet, user can customize number of participants and the threshold to perform signing process.
- **Highest Level of Security** Orosign can be provide the first MPC Wallet on Polkadot.
- **NFT & games optimization** Automatic showcase for all NFT collectibles, and support automation transaction signing for Web3 game.

**What is the benefit of this solution compared to others?**

- Multi-signature and MPC Wallet enable highest level of security in co-ownership for vast majority of Polkadot's users.
- Providing the first MPC Wallet as a mobile application on Polkadot
- Orosign is building toward the vision of Web3 passport, it allos user to manage their digital identity and assets in one place.

**Is this meant to be an enterprise-grade security wallet such as this SaaS wallet?**

- Orosign is a self-custodian wallet, we offer enterprise-grade security for retail and semi-retail users.

**Will it be cross-chain compatible or is it only meant for substrate chains?**

- In the budget of this proposal we only able to support Polkadot's chain and its parachains. We will consider to support other chains in the future.

**Can you further expand on the technical details of the wallet in the deliverables?**

- We implement DKG to generate secret shares that will be used to perform signing process without actual private key.
- User will hold let's say 3 shares (2 sign shares and 1 backup) of 5 shares (Orochi Network hold 2). We created a threshold signature 3 of 5, it's required at least 1 share from user to perform transaction co-signing.
  - Orochi Network can't perform the signing process.
  - User can perform the signing process with or without Orochi Network.

## Team :busts_in_silhouette:

### Team members

- Chiro Hiro - CEO Orochi Network [Github](https://github.com/chiro-hiro)
- Hubert Nguyen - CGO Orochi Network [Github](https://github.com/hubertnguyen88)
- Minh - R&D Specialist [Github](https://github.com/phamnhatminh1292001)
- James - Front-end Developer [Github](https://github.com/seawish369)
- Kevin - Back-end Developer [Github](https://github.com/dqtkien)
- Trang - Business Analysis

### Contact

- **Contact Name:** Hubert Nguyen
- **Contact Email:** hubert@orochi.network
- **Website:** www.orochi.network

### Legal Structure

- **Registered Address:** Orochi Network LLC, Suite 305, Griffith Corporate Centre, Beachmont, Kingstown, Saint Vincent and the Grenadines (Postal code: VC0284)
- **Registered Legal Entity:** Orochi Network LLC (ID: 1416 LLC 2021)

### Team's experience

We are focusing in cryptography and especially ZKP, we want to utilize cryptography to provide **Verifiable Computation**.

- Our technical blog [https://docs.orochi.network/](https://docs.orochi.network/)
- Our Github repo [https://github.com/orochi-network](https://github.com/orochi-network)
- Our proposal for zkMemory [https://hackmd.io/@chiro-hiro/SkqNGtcW2](https://hackmd.io/@chiro-hiro/SkqNGtcW2)

### Team Code Repos

- https://github.com/orochi-network

### Team LinkedIn Profiles (if available)

- [Chiro Hiro](https://www.linkedin.com/in/chiro8x)
- [Hubert Nguyen](https://www.linkedin.com/in/hungnguyen88)

## Development Status :open_book:

[https://github.com/orochi-network](https://github.com/orochi-network)

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 2
- **Full-time equivalent (FTE):** 2
- **Total Costs:** $10,000

### Milestone 1

In this milestone, our team use cryptography to build a bridge from Digital Signature Algorithm (DSA especially ECDSA, EdDSA, Schnorr Signature) to Multi-Party Computation (MPC) allow the signing process to be performed without actual private key. There are 3 DSAs were used by Polkadot: `secp256k1`, `ed25519`, `sr25519`. Before we can build a MPC based DSA, we need to research the algorithm and figure out how we could fit MPC into it. You may notice that each curve have different parameters and different field, after the research we can specify how MPC should be implement without harm its security.

- **Estimated Duration:** 2 months
- **FTE:** 2
- **Costs:** $10,000

| Number  | Deliverable | Specification                                                                                                                                              |
| ------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **0a.** | License     | CC0 1.0                                                                                                                                                    |
| **0b.** | Research    | Researching about Polkadot signature system and research their compatibility with MPC by which we can be fully comptabile with Polkadot and its parachains |
| **0c.** | Research    | Public technical report for every research we made, everything published under [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/)               |
| **1.**  | Research    | Researching about MPC in ECDSA (all supported signatures by Polkadot)                                                                                      |
| **2.**  | Research    | Researching MPC for `secp256k1` and providing the document that describe how the MPC will be built and its security consideration                          |
| **3.**  | Research    | Researching MPC for `ed25519` and providing the document that describe how the MPC will be built and its security consideration                            |
| **4.**  | Research    | Researching MPC in `sr25519` and providing the document that describe how the MPC will be built and its security consideration                             |

## Future Plans

- Implement MPC as a Rust crate that supports `secp256k1`, `ed25519`, `sr25519`, supporting multiparty computation to perform transaction/message signing with mentioned DSA. This module will implement with Rust programing language and compile to Wasm opcode or native lib for React Native app.
- Implement a node of MPC's distributed network to perform MPC.
- Implement API interface for distributed system, allow Wallet API to connect to MPC nodes.
- Integrate wallet API with node's RPC, provide back-end for Orosign front-end.
- Integrate wallet API with Orosign front-end, allow users to use MPC wallet.
- Integrate MPC in both front-end and back-end of Orosign, allow user to perform transaction signing with mobile device.
- Support PCD (Proof of Carrying Data)

## Additional Information :heavy_plus_sign:

We do research about MPC, especially ECDSA threshold signature for 1 year, publish several articles on our blog ([docs.orochi.network](https://docs.orochi.network)). Drafting the paper to consider right method to Implement threshold signature (ECDSA), considering different methods to for implementation. Have some related work on MPC [ECVRF](https://github.com/orochi-network/orochimaru/tree/main/libecvrf) which is shared some similar primitives to ECDSA.

- Are there are any teams who have already contributed (financially) to the project?
  - No, our project is self funded till now
- Have you applied for other grants so far?
  - No
