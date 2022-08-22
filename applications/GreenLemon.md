# W3F Grant Proposal

- **Project Name:** Green Lemon
- **Team Name:** Green Lemon
- **Payment Address:** 0xf4f463B9A0ADa68536423121e7Bf9E559ce54fAf(Ethereum ERC20 USDT)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

[Proposal: Dual-Key Stealth Address Protocol](https://github.com/w3f/Grants-Program/pull/997)

[Milestone Delivery: Dual-Key Stealth Address Protocol](https://github.com/w3f/Grant-Milestone-Delivery/pull/504)

### Overview

Many of today’s blockchains, including Bitcoin and Ethereum, are open and public ledgers in the sense that there are no restrictions on participation and all transaction details are visible on the blockchain. In a public ledger, the transaction entities are only identified by their blockchain addresses, which are derived from the corresponding public keys. Public ledgers are generally considered to be “pseudo-anonymous”, which means that an address is linked to one person, but that person is unknown to the public. However, by analyzing the transaction graph and combining it with other information, it is possible to reveal the true real-world identity behind a blockchain address, as shown by recent research. 

The Green Lemon protocol is an anonymous NFT solution for the Polkadot ecosystem based on zero-knowledge proof and dual-key stealth address protocol: users deposit DOT to an anonymous NFT contract and then anonymously send mint, transfer, and other ERC721 functions to that contract via relayer.

### Project Details

The protocol implements the function of initiating anonymous transactions through zero-knowledge proofs and the function of hiding NFT owners through DKSAP.

Currently, a large number of anonymous transaction projects use zero-knowledge proofs, such as Monero and ZCash based on the UXTO model, and Zether and Tornado based on the account model.

Zether comes to our attention with its unique implementation, which uses the Σ-Bullets protocol, does not require the generation of public parameters for the initiation ceremony, and uses the Elgamal encryption algorithm for homomorphic encryption and decryption of account balance, which are excellent features. But the Gas for anonymous transfers involving 64 accounts verified amounted to 36,152,558 on Ethereum virtual machine.

Meanwhile, Tornado, based on zk-SNARK, performed well in terms of Gas, with a Gas consumption of 1,088,354 for deposits and 301,233 for withdrawals. After comparison, we decided to develop a zero-knowledge proof module based on zk-SNARK.

DKSAP is a new privacy transaction protocol invented by rynomster/sdcoin in 2014. Since its announcement, it has landed in numerous blockchain projects (Monero, Samourai Wallet, TokenPay, etc.). It is characterized by the fact that the account needs to generate two sets of public and private key pairs, "scan key pair", and "spend key pair", the recipient of each transaction is encrypted and cannot be associated with a particular blockchain account.

The protocol contains the following functions:

* Deposit: The user generates a random note and deposits a coin to the NFT anonymous contract, so that can pay the relayer fees for anonymous transactions.

* Withdrawal: The user will get back the DOT previously deposited, and nullifier the corresponding note.

* Registration: The user registers the Scan public key and Spend public key to the NFT contract, and if the relayer sends the transaction to the chain, the user needs to pay the fee for the relayer.

* Mint: The user generates the encrypted public key address ePub1(encrypted pub key) based on his scan pub and anonymously mint NFT through the relayer, the owner of this NFT is ePub1, and the user needs to pay the gas fee to the relayer.

* Transfer: The user generates the encrypted public key address ePub2 based on the scan pub of the recipient and uses the private key signature corresponding to ePub1 to anonymously transfer the NFT, and the owner of the NFT is ePub2, and the user needs to pay a fee to the relayer.

* Burn: The user pays the fee to relayer to burn NFT.

* Other functions supported by ERC721, including Approval, ApprovalForAll, clear_approval, and set_approval_for_all.


### Ecosystem Fit

NFT sales reached $17.7 billion in 2021, up from $82.5 million in 2020 — a jump of more than 200 times. Total NFT profits when reselling or buying also skyrocketed from $12 million in 2020 to $5.4 billion in 2021.

Sotheby's - a renowned auction house with a history of nearly 300 years - generated $7.3 billion in sales in 2021, of which 10% was in private transactions. 

This gives us confidence that anonymous trading, the act of buying and selling without revealing the identity of the trader, is just as strongly demanded in the NFT ecosystem. 

As the first anonymous NFT application of web3 Ecology, we believe Green Lemon will have a positive impact on Polkadot. Users of NFT who value their privacy greatly will find it attractive.


## Team :busts_in_silhouette:

### Team members

Yahuang Wu

* [Github address](https://github.com/wuyahuang)
* Educated in Xiamen University, MEM
* 7 years of internet R&D experience, participated in the development of several apps with millions of Daily Active Users (Qunar, Snowball, Meiyou)
* Head of the technical team of EOS genesis block producer
* Author of 40 EOS technical articles [list of technical articles](https://github.com/meet-one/documentation/blob/master/meetone-lab-docs.md)
* Selected into the EOS Open Source Community Acknowledgments List [list of selected lists](https://steemit.com/eos/@liondani/eos-acknowledgments-making-it-immutable-via-steemit)
* EOS Hongkong Hackathon tech mentor
* Contributed code to several repositories in the 2020 GitHub Archive Program
* 10 blockchain technology patents [Patent List](http://www1.soopat.com/Home/Result?SearchWord=%E5%90%B4%E4%BA%9A%E7%9A%87&FMZL=Y&SYXX=Y&WGZL=Y&FMSQ=Y)


Rick

* Educated in Xiamen University, Computer Science & MBA
* Head of the technical team of Meiyou APP (one of the most famous female health APP in Aisa)
* Head of the technical team of EOS wallet (one of the most famous EOS wallets in Asia)

### Contact

- **Contact Name:** Yahuang Wu
- **Contact Email:** wuyahuang@gmail.com
- **Website:** https://github.com/GreenLemonProtocol

### Legal Structure

- **Registered Address:** 
- **Registered Legal Entity:** 

### Team's experience

We have 10 years of experience in Internet research and development, focusing on the blockchain industry since 2018. We are deep participants in several technical communities, hackathon winners, and node service providers for EOS and PlatON.

### Team Code Repos

- Green Lemon Protocol: https://github.com/GreenLemonProtocol

Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine.

- Yahuang Wu: https://github.com/wuyahuang
- Rick: https://github.com/MeetYouDevs

## Development Status :open_book:

[Milestone Delivery: Dual-Key Stealth Address Protocol](https://github.com/w3f/Grant-Milestone-Delivery/pull/504)

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 12 weeks
- **Full-Time Equivalent (FTE):**  2
- **Total Costs:** 30,000 USD

### Milestone 1 — Implement anonymous NFT based on ERC721

- **Estimated duration:** 3 weeks
- **FTE:**  2
- **Costs:** 8,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Article | We will publish **article & demo video** that explains How is anonymous NFT contract hidden owner works based on dual-key stealth address protocol.
| 1. | (ink!)Smart contracts: Anonymous NFT | [Milestone Delivery: Dual-Key Stealth Address Protocol](https://github.com/w3f/Grant-Milestone-Delivery/pull/504) only implements mint, transfer, and burn. Based on the current version, we will continue to develop other ERC721 protocol methods and related test cases, such as approve, approve_for, get_approved, base_uri, and token_uri. Additionally, we need to add an extra param into the message before hashing, which is the token nonce. Account nonce is unfit due to each token owner being a unique and one-time encrypted address. When an NFT is operated once, its corresponding token nonce is automatically added by 1. We think that token nonce can prevent replay attacks for signatures already sent to the blockchain.|  



### Milestone 2 — Implement anonymous transaction

- **Estimated Duration:** 9 weeks
- **FTE:**  2
- **Costs:** 22,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Article | We will publish **article & demo video** that explain How is anonymous NFT solution works based on zero-knowledge proof.
| 1. | (ink!)Smart contracts: Anonymous NFT | Development and testing of the core functions of the Anonymous NFT smart contract, including deposit/withdraw DOT from the contract, sending the transaction to the NFT contract through the relayer, and paying the transaction fee to the relayer on-chain. As mentioned above, anonymous transactions are based on zero-knowledge proof.|
| 2. | (Node.js)Relayer service | Development and testing of the relayer service. As mentioned above, All user transactions are sent by the relayer service, and users need to transfer token to the relayer based on zero-knowledge proof.|



## Future Plans

Please include here

- Develop PC website and Google chrome extension wallet based on Green Lemon Protocol, lower the threshold for blockchain users
- Add Merkle tree to store notes on-chain, so users can verify that transactions are mined by the blockchain network.


## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation Website

Here you can also add any additional information that you think is relevant to this application but isn't part of it already, such as:

[Proposal: Dual-Key Stealth Address Protocol](https://github.com/w3f/Grants-Program/pull/997)
