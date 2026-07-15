# DKSAP

- **Team Name:** DKSAP
- **Payment Address:** 0xf4f463B9A0ADa68536423121e7Bf9E559ce54fAf(Ethereum ERC20 USDT)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 1

### Overview

The first full working implementation of DKSAP(Dual-Key Stealth Address Protocol) was announced by a developer known as rynomster/sdcoin in 2014 for ShadowSend, a capable, efficient and decentralized anonymous wallet solution.The DKSAP has been implemented in a number of cryptocurrency systems since then, including Monero, Samourai Wallet, and TokenPay, just to name a few. The protocol takes advantage of two pairs of cryptographic keys, namely a ‘scan key’ pair and a ‘spend key’ pair, and computes a one-time payment address per transaction, as detailed below:

* The receiver has two private/public key pairs (s, S) and (b, B), where S = s·G and B = b·G are ‘scan public key’ and ‘spend public key’, respectively. Here G is the base point of an elliptic curve group.

* The sender generates an ephemeral key pair (r, R), where R = r·G and transmits it with the transaction.

* Both the sender and receiver can compute a shared secret c using the ECDH: c = H(r·s·G) = H(r·S) = H(s·R), where H(·) is a cryptographic hash function.

* The sender uses c·G + B as the ephemeral destination address for sending the payment.

* The receiver actively monitors the blockchain and checks whether some transaction has been sent to the purported destination address c·G + B. Depending on whether the wallet is encrypted, the receiver can compute the same destination address in two different ways, i.e., c·G + B = (c + b)·G. If there is a match, the payment can be spent using the corresponding private key c + b. Note that the ephemeral private key c + b can only be computed by the receiver.

In DKSAP, if an auditor or a proxy server exists in the system, the receiver can share the ‘scan private key’ s and the ‘spend public key’ B with the auditor/proxy server so that those entities can scan the blockchain transaction on behalf of the receiver. However, they are not able the compute the ephemeral private key c + b and spend the payment.

I want to develop an anonymous NFT contract based on DKSAP, and all NFT owner address are encrypted by the receiver's scan public key. At the same time, users send transaction through relayer to ensure the anonymity of the transaction.


### Project Details

### Ecosystem Fit

I believe that technical facilities like DKSAP are of great significance in the Polkadot ecosystem.

Many of today’s blockchains, including Bitcoin and Ethereum, are open and public ledgers in the sense that there are no restrictions on participation and all transaction details are visible on the blockchain. In a public ledger, the transaction entities are only identified by their blockchain addresses, which are derived from the corresponding public keys. Public ledgers are generally considered to be “pseudo-anonymous”, which means that an address is linked to one person, but that person is unknown to the public. However, by analyzing the transaction graph and combining with other information, it is possible to reveal the true real world identity behind a blockchain address, as shown by recent research. People and corporations prefer to add privacy-enhancing features to blockchain transactions for various reasons, including but not limited to managing law-enforcement related issues and hiding sensitive, company-specific information.

## Team :busts_in_silhouette:

### Team members

Yahuang Wu

* [Github address](https://github.com/wuyahuang)
* 7 years of internet R&D experience, participated in the development of several APPs with millions of Daily Active Users (Qunar, Snowball, Meiyou)
* Wrote 40 EOS technical articles [list of technical articles](https://github.com/meet-one/documentation/blob/master/meetone-lab-docs.md)
* Selected for the EOS Open Source Community Acknowledgments List [list of selected lists](https://steemit.com/eos/@liondani/eos-acknowledgments-making-it-immutable-via-steemit )
* Multiple EOS open-source repositories that submitted PRs were selected for the GitHub Archive Program
* Has 10 blockchain technology patents [Patent List](http://www1.soopat.com/Home/Result?SearchWord=%E5%90%B4%E4%BA%9A%E7%9A%87&FMZL=Y&SYXX=Y&WGZL=Y&FMSQ=Y)

### Contact

- **Contact Name:** Yahuang Wu
- **Contact Email:** wuyahuang@gmail.com

### Legal Structure

- **Registered Address:** 
- **Registered Legal Entity:** 

### Team's experience

I have 7 years of experience in Internet research and development, focusing on the blockchain industry since 2018. I'm a deep participant in several technical communities, hackathon winners, and node service providers for EOS and PlatON.

#### Team members' repos:

- Yahuang Wu: [https://github.com/wuyahuang](https://github.com/wuyahuang)

## Development Status :open_book:

* [Faster Dual-Key Stealth Address for
Blockchain-Based Internet of Things Systems](https://arxiv.org/pdf/1806.00951.pdf)

* [PDKSAP : Perfected Double-Key Stealth Address Protocol without Temporary Key Leakage in Blockchain
](https://ieeexplore.ieee.org/document/9209929)

* [EDKSAP : Efficient Double-Key Stealth Address Protocol in Blockchain
](https://ieeexplore.ieee.org/document/9724375)

## Development Roadmap :nut_and_bolt:
### Overview

- **Total Estimated Duration:** 6 weeks
- **Full-Time Equivalent (FTE):** 1
- **Total Costs:** 10,000 USD

### Milestone 1 — Implement Substrate Modules & DKSAP

- **Estimated duration:** 6 weeks
- **FTE:**  1
- **Costs:** 10,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | GPLv3
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can send test transactions, which will show how the new functionality works. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 1. | (Node.js)SDK: Client Tool | Development and testing of the basic abilities of the client tool, including computing a shared secret by ECDH, computing encrypted public key of the receiver, computing ephemeral private key(adding points in elliptic curve cryptography), and pushing transactions to relayer through HTTPS.
| 2. | (ink!)Smart contracts: Anonymous NFT | Development and testing of the core functions of the Anonymous NFT smart contract, including minting new NFT, transferring NFT, and burning NFT. In particular, it is important to note that the address of the owner stored in the contract is encrypted by the scan public key of receiver. At the same time, when users need to perform Mint or Transfer operations, smart contract need to verify the signature of the private key corresponding to this address on-chain.
| 3. | HTTPS Service: Node.js Relayer | Build an early-stage HTTPS service relayer including accepts requests from users and pushes transaction to NFT smart contract. 


## Future Plans

* After the ink! implementation of DKSAP is fully tested, I will continue to improve the DKSAP implementation for the Polkadot ecosystems. At the same time, I will help other teams that need to use the DKSAP protocol to reduce development costs.
* Currently, user transactions is sent free of charge by relayer. This is not possible in the production environment, so we need to modify the relayer in the furture version. We can add a deposit function to NFT, so that users can deposit token into contract, and then transfer the token to realyer based on zero-knowledge proof.
