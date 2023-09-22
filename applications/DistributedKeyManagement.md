# Distributed Key Management

- **Team Name:** Jett Hays (Individual)
- **Payment Address:** 0x33644e4D6bb589854fbb906276147Afd7de86E09 (ERC-20 USDC)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 1

## Project Overview :page_facing_up:

### Overview

This project will explore the security and applications of using secret sharing to distribute wallet ownership.

Public key cryptography has enabled encrypted communication and global computing protocols like Polkadot.
But managing keys is hard. Existing noncustodial key management solutions require memorizing long mnemonic phrases, using network specific smart contracts,
or purchasing complicated hardware wallets. These solutions are insufficient for the majority of users who are looking for a simple way to manage private keys.
This grant will support research on a distributed key management system and an open source reference implementation.
If successful, this project will help make Polkadot hot wallets more secure and simplify online ownership.
With the proposed system, wallets could implement 2fa and authenticate with their existing Google or Apple account.

I believe wallets are the connection point between users and the decentralized web. Making this connection point accessible and secure is incredibly exciting and drives my interest in developing this project.

### Project Details

This is a research project focused on distributed key management. The basic idea involves sharing a secret– in this case, a BIP32 seed phrase–  between a client and remote servers. When the private key is needed, the shares are reassembled on the client and used within a standard key manager. The local key manager can then be used to publish transactions, encrypt data, validate identity, etc. I have already implemented a version of this idea within the open source Kryptik wallet. However, more research is required to answer essential security questions (discussed in the project timeline) and provide a common reference implementation. A skeleton of the distributed key management system, as implemented by the Kryptik wallet, is described below.

##### Client Seedloop

Wallets are derived from a single parent key. This parent key is used as a seed to generate a child key for each blockchain network, in accordance with the BIP 32 specification for hierarchical deterministic wallets. Child keys may produce an array of addresses and have custom methods depending on the network type. This cluster of keyrings is stored on a single seed loop object that contains the parent key. The seedloop can be encrypted with a standard password by the user at any point in time.

##### Local Storage

When a wallet is created, the wallet object is serialized, encrypted, and stored in the browser’s local storage. The random encryption secret is then split with shamir secret sharing into two shares. One share is held locally and one share is sent to the database. When a new user session begins, the service retrieves the database share and combines it locally into the original encryption secret. The wallet can then be decrypted, deserialized, and made available for use. This arrangement results in a two-of-two security scheme, where an attacker must compromise both systems to obtain a user’s private seed.

##### Authentication

Kryptik uses a decentralized authentication provider to generate a user identifier which is passed to the user through a ‘magic’ link sent via email. The ID is then exchanged with the database for an access token and the user session begins.

##### Conclusion

This system has worked well during public testing. However, improvements must be made to generalize beyond a 2 of 2 system– this has potential implications for social recovery– and research must be conducted to understand the security implications of distributed key management as described above. This project will accomplish both of these goals in addition to providing a common reference implementation.

### Ecosystem Fit

Secure and usable key management is an open issue. This project will improve the security of hot wallets– through encryption, 2fa, and distributed secret sharing– and provide users with a simple key management flow: just authenticate like you would for any other app!

The initial research will be used to improve the distributed key management implementation currently used by the Kryptik wallet. However, the research, code, and documentation are designed for the broader developer community to use in their own app that supports Polkadat or Kusama.

## Team :busts_in_silhouette:

### Team members

Leader: Jett Hays
Advisor: Nicolas Christin

### Contact

- **Contact Name:** Jett Hays
- **Contact Email:** jehays@andrew.cmu.edu
- **Website:** [jetthays.com](https://jetthays.com/)

### Legal Structure

Individual / Sole Proprietor

### Team's experience

Jett Hays is the President of the Carnegie Mellon blockchain club where he helps members build and understand the decentralized future. Previous projects have included a open source key management package[https://github.com/KryptikApp/kryptik-seedloop] and a [multichain web wallet](https://www.kryptik.app/). Both projects have received support from Carnegie Mellon and multiple blockchain foundations.

### Team Code Repos

- <https://github.com/KryptikApp>
- <https://github.com/KryptikApp/kryptikwebapp>
- <https://github.com/KryptikApp/kryptik-seedloop>

- <https://github.com/jettblu>

### Team LinkedIn Profiles (if available)

- <https://www.linkedin.com/in/jett-hays-491b541b7/>

## Development Status :open_book:

The idea of a distributed key manager came to me during a class at Carnegie Mellon on shamir secret sharing. After coming up with a rough interface, I applied for a small undergraduate research grant from CMU, with Professor Nicolas Christin agreeing to be my advisor.
This research led me to create the open source Kryptik wallet, whcih I have been working on for the past year. A short demo of the wallet can be found via [this link](https://vimeo.com/745609041). This wallet uses a simple version of the distributed key management system I described above.

As part of this project, I also released a seedloop manager as an open source NPM package, which can be found [here](https://github.com/KryptikApp/kryptik-seedloop). This package allows developers to easily generate wallets and sign transactions across multiple blockchains.

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 3 months
- **Full-Time Equivalent (FTE):**  .4 FTE
- **Total Costs:** $8,000

### Milestone 1 - Research Paper

- **Estimated duration:** 10 weeks
- **FTE:**  0.4 FTE
- **Costs:** 5,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide regular blog updates that document our discoveries on decentralized key management as we develop the paper. |
| 0c. | Testing and Testing Guide | Since this milestone is focused on creating and publishing a research paper, there is no need for a testing guide. |
| 0d. | Docker | This milestone does not involve explicit software, so no dockerfiles are needed for testing. |
| 0e. | Article | We will publish an article that summarizes the key findings of our distributed key management research for developers (who may not be interested in the nitty gritty technical details or security models). |
| 1. | Formal Investigation | The research period will be spent investigating the following questions about the kryptik key management system. What is the threat model? How can keys be synced across devices? How can the system include more than two shareholders? What is the ideal number of shareholders? Is there any application to social recovery? By the end of this period, I will have organized a sequence of proofs and thoughts that can be shaped into a paper. Each question and associated discovery will be documented via regular blog posts.|
| 2. | Research Paper | This paper will include an in depth analysis of the research questions discussed above. Professor Nicolas Cristin of Carnegie Mellon will help advise the paper– he served as an advisor for my initial research grant from CMU. The paper will be released as an open source document on Github. We expect this open source key management knowledge to provide a strong foundation for future Polkadot/Kusama/Substrate wallet designers.|

### Milestone 2 — Reference Implementation

- **Estimated Duration:** 1 month
- **FTE:**  .4
- **Costs:** 3,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide extensive inline documentation that describes the purpose of functions and parameters. This will help create a 'trail of knowledge' that developers can follow through the key management system.|
| 0c. | Testing and Testing Guide |  We will include a step by step guide that shows the distributed key management system works as intended. Unit tests will be included for critical functions like share generation/ recombination. Unit tests will be executed using vitest. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article |  We will publish an **article** that provides a step by step explanation of the distributed key management system and how each function is implemented in code. This will be published as a blog post.    |
| 1. | Vault Module | The vault module will provide a standard interface for storing a BIP 39 seed and multiple blockchain accounts on the client.|
| 2. | Encryption Module | The encryption module will allow seed vaults to be locked/unlocked via a user provided password. The module will also use a randomly generated encryption key to create ciphertext for the BIP39 seedphrase when persisting vault storage on the client.|
| 3. | Share Module | The share module will generate shamir shares for a given piece of data (in this case the encryption secret). This module will also allow shares to be recombined (according to the k of n secret sharing scheme) to reconstruct the original piece of data. |
| 4. | Sync Module | This module will allow seed vaults to be synced across devices.|
| 5. | Web Deployment | And finally, we will wrap these modules in a nice UI and deploy the interface to a website (likely using NextJs + Vercel). This website will allow developers to create a vault, sync their devices, and sign sample transactions. This will be accomplished via open source React components that developers can reuse in their own application. The deployed app will have Polkadot/Kusama/Substrate specific examples (address generation, signatures, etc) that will benefit future developers.|

## Future Plans

After the grant is completed, I will continue improving the open source Kryptik wallet, which builds upon the distributed key management system described above. Work on the wallet interface– which has been sponsored by other grants–  will necessarily include revisiting the key management system and making improvements (such as adding the ability to sync key shares between devices). Beyond that, the research and published paper are a timeless body of knowledge that will continually benefit production implementations and new research on key management.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** I first heard about the grants program at EthDenver 2022. I then learned more about the program via the Web3 Foundation Website.

The NEAR foundation awarded a $45,000 grant to develop the Kryptik wallet interface. This work wrapped the key management system with software that supports multi chain swaps, collectibles, payments, etc. I also received $20,000 from the Solana Foundation to provide open source documentation and Solana specific examples. Both of these grants are directed towards the Kryptik wallet interface, not the key management system which was devised separately.

Finally, I received $500 from Carnegie Mellon to build the key manager and host the wallet interface.

**How does this project benefit the Polkadot/Kusama/Substrate ecosystem?
Asymmetric key management is an open issue that affects every blockchain ecosystem. An improved key management system will help improve wallet design which, in turn, will help improve the user experience of the Polkadot/Kusama/Substrate ecosystem. The research proposed above will provide foundational knowledge and software that can be integrated into existing Polkadot related wallets and in emerging wallets that have yet to be designed. In summary, successful execution of the grant will result in a simple and more secure way to interact with the Polkadot/Kusama/Substrate ecosystem. This will benefit users, who will have an improved wallet experience, and developers who can build upon a novel approach to key management.
