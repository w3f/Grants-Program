# POMP (Proof of My Possession)

- **Team Name:** POMP
- **Payment Address:** 0xfBa1C39f30d6A1D1C35F9551c0f22a0ec6FD30A5 (Ethereum USDC)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

### Overview

Cryptocurrencies are digital coins and tokens that represent real-world value without relying on a central issuer. Instead of going through a bank or a government, cryptocurrencies rely on cryptography, public ledgers, and blockchain technology to verify ownership. It’s playing a more and more important role in the real world. Let's just look at the numbers. Bitcoin had a market capitalization of $510 Billion on June 8, 2023. On the same day, Ethereum had a market capitalization of $220 Billion.

However, it’s not easy to prove that you are the owner of one specific blockchain account. Because you have to import a private key to a wallet and sign a signature to prove that the private key is matching to the account’s public key. Additionally, the more a private key is imported, the more it opens up the threat vector for either intentional or unintentional damage.

Many individuals and companies prefer to have an additional layer of asset proof to keep their privacy. That’s where the POMP(Proof of My Possession) comes to play.

### Project Details

The POMP is a decentralized service that combines zero-knowledge technology, users can easily generate encrypted proof keys while maintaining the privacy of their crypto assets. After generated, the user can prove the ownership of the crypto asset to any third party without inputting any private key.

Here is the basic workflow for generating:

* The user connects the Polkadot.js wallet to the POMP website and selects a Polkadot Parachain.
* The POMP website queries the token balance of the user’s address.
* The user generates zero-knowledge proof using Manta wallet and signs the proof by Polkadot.js.
* The POMP service recovers the user’s address from the signature and queries the token balance again to make sure the params passed are correct, and hashing the zero-knowledge proof as an encrypted key. Last, send the encrypted key + balance amount to the ink! contract and stores it on-chain.
* The user downloads the original zero-knowledge proof as a file. It's just like how mnemonic works.
* The user just needs to input the proof key into any third-party website to prove that he is the owner of a specific account in Polkadot Parachain. Because it’s easy to hash the proof key to query the token amount from the ink! smart contract.

Besides generating, the users can also update/burn the encrypted proof key just to follow the same workflow.

The front-end website:

![](https://raw.githubusercontent.com/pomp-money/pomp-documents/main/designs/mint.png)
![](https://raw.githubusercontent.com/pomp-money/pomp-documents/main/designs/mint-options.png)
![](https://raw.githubusercontent.com/pomp-money/pomp-documents/main/designs/minted.png)


### Ecosystem Fit

To prove ownership of DOT or other Polkadot Parachain cryptocurrencies, we need to prove that we know the private key. However, we would not want to reveal the private key, as revealing even part of the private key or an image of the private key could put our ownership at risk. By having the private key — or even part of it and then using sophisticated software to attempt to guess the rest of it — hackers can steal your cryptocurrency. 

The most reliable way to prove ownership of cryptocurrencies is to sign a specified message with your private key. By doing so, you can prove ownership of your crypto assets without the need to reveal the key or having to engage in a transaction, even a small amount transfer.

The POMP platform enables all crypto token owners of Polkadot Parachain to generate their encrypted proof key through zero knowledge and prove crypto assets without the risk that may be leaking the private key.

## Team :busts_in_silhouette:

### Team members

- Megan
- zqhxuyuan
- Chan

### Contact

- **Contact Name:** Megan
- **Contact Email:** megan.zhang76@gmail.com

### Team's experience

We are a decentralized team focusing on the blockchain industry since 2020. We are deep participants in several technical communities and hackathon winners. 

### Team Code Repos

- https://github.com/zhangjing28
- https://github.com/jincan39
- https://github.com/zqhxuyuan

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 2 months
- **Full-Time Equivalent (FTE):**  3 FTE
- **Total Costs:** 22,000 USD

### Milestone 1 — The POMP platform

- **Estimated duration:** 2 month
- **FTE:**  3
- **Costs:** 22,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user sends test transactions, which will show how the new platform works. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Article | We will publish an **article** that explains what this grant achieved.|
| 1. | Javascript Library | We will deliver a JS library that will implement the functionality described under the "Workflow" part, including recovering the address from the signature, verifying the asset amount, hashing the ZK proof key, and integrating it with the ink!  smart contract functions.|
| 2. | ink! Smart contracts | We will deliver a smart contract that will manage the encrypted proof keys and verified crypto assets. Including Add/Update/Query/Burn encrypted proof key. |
| 3. | Front-end website | We will deliver a Front-end website for crypto asset owners to Generate/Update/Burn/Verify encrypted proof keys.
