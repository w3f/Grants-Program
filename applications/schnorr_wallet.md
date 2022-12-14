# Schnorr Wallet

- **Team Name:** Schnorr Wallet
- **Payment Address:** 0xf4f463B9A0ADa68536423121e7Bf9E559ce54fAf(Ethereum ERC20 USDT)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

### Overview

The Schnorr Signature has been playing an increasingly important role in the blockchain ecosystem.

It is a simple algorithm leveraging elliptic curve cryptography, it enables several improvements over the existing scheme all while preserving all of its features and security assumptions. Notably, Schnorr signatures support “native multi-sig” which enables the aggregation of multiple signatures into a single one valid for the sum of the keys of their respective inputs. 

Quote from Web3 foundation why Polkadot choose Schnorr signature: We prefer Schnorr signatures because they satisfy the Bitcoin Schnoor wishlist and work fine with extremely secure curves, like the Ed25519 curve or secp256k1.

The Schnorr wallet is an aggregation signature wallet for the Polkadot ecosystem, based on the Schnorr signature.

### Project Details
There are a lot of news reports that the private keys of blockchain users have been leaked and billions of dollars of cryptocurrency stolen.

How to increase the security level of the private key for blockchain users is a challenge for all public blockchains. The Schnorr wallet improves the security of wallets by allowing users to sign one transaction through multiple different wallets.

At this grant, we are going to build a command-line wallet for multi-PC platforms, including macOS, Windows, and Linux.

The wallet contains the following functions:

* Generate keys: The user generates 2 private keys and one public key. The public key is used to receive tokens.
* Import private key: The user import 2 private keys into 2 different wallets. Enter a password for encryption of the private key.
* Sign signature: The user sign transaction in the first wallet, output signature. Then sign the transaction in the second wallet and merge the previous signature.
* Send transaction: The user sends the transaction to the local & remote Polkadot Node.

### Algorithm

Schnorr allows multiple signatures to be merged into a single valid signature, by just summing the keys of the inputs. In performance analysis, Schnorr is slightly faster than ECDSA, but it provides several significant performance improvements. A major advantage is that each of the input signatures does not need to be checked, as only the overall signature is checked. The output also provides a signature of the same size, no matter the number of users who provide their inputs. Another advantage is that this reduction in data will improve the capacity of the Bitcoin infrastructure.

Let's say Bob wants to sign a message:

* Initially Bob generates a private key of x1 and a public key of X1 = x1·G, where G is the base point on the curve. 

* Alice will generate her private key (x2) and a public key of: X2 = x2·G

* Now we can merge their public keys (X) to give: X = X1 + X2

* For Bob's signature, he generates a random value r1 and computes a point on the curve of: R1 = r1·G

* and Alice  computes a point on the curve of R2 = r2·G

* We can then merge these values to get R with: R = R1 + R2

* Bob computes an s value of s1 = r1 + H(X||msg)·x1 and where H(X||msg) is a hash of the merged public key (X) and the message.

* Alice computes her value of: s2 = r2 + H(X||msg)·x2

* We can then merge s1 and s2 to give: s = s1 + s2

* The merged signature of the message is the (R,s). To check we compute:
  v1 = s·G
  v2 = R + H(X||M)·X
  If the two values match, the merged signature has been proven.

This works because s·G = (s1 + s2)·G = (r1 + H(X||msg)·x1 + r2 + H(X||msg)·x2)·G = (r1 + r2)·G + H(X||msg)·(x1 + x2)·G = rG + H(X||msg)·X = R + H(X||M)·X

### Ecosystem Fit

Polkadot has implemented the Schnorr signature a long time ago, but it is currently used as the substrate and ink! level.

As the first multi-sig wallet based on the Schnorr signature of web3 Ecology, we believe the Schnorr wallet will have a positive impact on Polkadot. Blockchain users who value their private key greatly will find it attractive. Especially the whales who have a lot of cryptocurrencies.

## Team :busts_in_silhouette:

### Team members

Yahuang Wu

* [Github address](https://github.com/wuyahuang)
* 🎓 Educated in Xiamen University, master of engineering management
* 📱 Over 7 years of working experience in mobile internet, developer of 3 popular apps (Qunar/Snowball/Meetyou)
* 💻 Over 4 years of working experience in blockchain, full stack developer in web3 (Javascript/Solidity/C++/Rust)
* 🌱 Winner of Polkadot Hackathon 2022 / NEAR MetaBuild I / Avalanche Hacks 2022
* 😀 Technical mentor for the EOS Hackathon in Hongkong
* 🧑‍💼 Head of the technical team of EOS genesis block producer MEET.ONE
* 👨‍💻 Contributed code to several repositories in the 2020 Github Archive Program
* 🧐 Owner of 10 blockchain technology patents


Rick

* Educated in Xiamen University, Computer Science & MBA
* Head of the technical team of Meiyou APP (one of the most famous female health APP in Asia)
* Head of the technical team of EOS wallet (one of the most famous EOS wallets in Asia)

### Contact

- **Contact Name:** Yahuang Wu
- **Contact Email:** wuyahuang@gmail.com
- **Website:** https://github.com/GreenLemonProtocol

### Legal Structure

- **Registered Address:** 
- **Registered Legal Entity:** 

### Team's experience

We have 10 years of experience in Internet research and development, focusing on the blockchain industry since 2018. We are deep participants in several technical communities, hackathon winners, and node service providers for EOS and Platon.

### Team Code Repos

Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine.

- Yahuang Wu: https://github.com/wuyahuang
- Rick: https://github.com/MeetYouDevs

## Development Status :open_book:

[Schnorr signatures](https://bitcoinops.org/en/topics/schnorr-signatures/)

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 12 weeks
- **Full-Time Equivalent (FTE):**  2
- **Total Costs:** 30,000 USD

### Milestone 1 — Implement schnorr signature for the Node.js

- **Estimated duration:** 6 weeks
- **FTE:**  2
- **Costs:** 15,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Article | We will publish **article** that explains How is Schnorr signature works for Polkadot users.
| 1. | Node.js implementation | Develop and test all the functions of Schnorr signatures, including generating two different public and private keys, merging public keys, merging different signatures, and verifying signatures from both off-chain and on-chain.|  


### Milestone 2 — Implement Schnorr wallet(Node.js)

- **Estimated Duration:** 6 weeks
- **FTE:**  2
- **Costs:** 15,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Article | We will publish **article & demo video** that explains How is Schnorr wallet works based on the Schnorr signature.
| 1. | Command-Line wallet | Develop and test the core functions of the Schnorr wallet, including generating keys, importing & encrypting private keys and, signing the transaction by merging signatures, and sending the transaction to the Polkadot Node.|


## Future Plans

Please include here

- Develop Schnorr iOS/Android wallet for blockchain users.


## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation Website
