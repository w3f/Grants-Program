# Name of your Project

- **Team Name:** Green Lemon
- **Payment Address:** 0xf4f463B9A0ADa68536423121e7Bf9E559ce54fAf(Ethereum ERC20 USDT)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

[Proposal: Green Lemon Protocol🍋 - An anonymous NFT solution](https://github.com/w3f/Grants-Program/pull/1096)

### Overview

Many of today’s blockchains, including Bitcoin and Ethereum, are open and public ledgers in the sense that there are no restrictions on participation and all transaction details are visible on the blockchain. In a public ledger, the transaction entities are only identified by their blockchain addresses, which are derived from the corresponding public keys. Public ledgers are generally considered to be “pseudo-anonymous”, which means that an address is linked to one person, but that person is unknown to the public. However, by analyzing the transaction graph and combining it with other information, it is possible to reveal the true real-world identity behind a blockchain address, as shown by recent research. 

The Green Lemon Protocol is an anonymous decentralized application platform based on zero-knowledge proof and dual-key stealth address protocol. Anyone can deploy their anonymous smart contract and integrate it with our relayer service. Or use our template contract as well. ERC-721(NFT) is supported, and ERC-20 is under development.

Quick facts:

* Send anonymous transactions based on zero-knowledge proof
* Encrypt the asset owner based on dual-key stealth address protocol

### Project Details

Green Lemon Protocol is a service like coin mixers that allows users to obfuscate the origin and destination of transactions, and submit transactions to third contracts anonymously. Because of the logic of the blockchain, every transaction is public. If you have some DOT on your account, you cannot transfer it anonymously, because anybody can follow your transaction history on the blockchain. Coin mixers, like Tornado Cash, can solve this privacy problem by breaking the on-chain link between the source and the destination address by using ZKP. Most importantly, we can trigger a third-party contract when we submit the zero-knowledge proof, and pay transaction fees to the relayer service. If the transaction fees you paid can cover the cost of calling a third-party contract. Then the whole logic makes sense.

If you want to anonymize one of your transactions, you have to deposit a small amount of DOT on the Green Lemon Protocol contract (ex.: 1 DOT). After a little while, you can transfer this 1 DOT to the account of relayer service with a different account and submit a transaction to the third contract. The trick is that nobody can create a link between the depositor account and the transferer account. If hundreds of accounts deposit 1 DOT on one side and the other hundreds of accounts transfer 1 DOT on the other side, then nobody will be able to follow the path where the transaction moves.

One of the technical challenges is that smart contract transactions are also public like any other transaction on the Polkadot network. This is the point where zero-knowledge proof will be relevant. For more details about zero-knowledge proof, please [click me](https://betterprogramming.pub/understanding-zero-knowledge-proofs-through-the-source-code-of-tornado-cash-41d335c5475f).

Another technical challenge is how to encrypt asset owners. This is the point where dual-key stealth address protocol will be relevant. For more details about DKSAP, please [click me](https://github.com/GreenLemonProtocol/dksap-polkadot).

### Work Flow
![workflow.jpg](https://raw.githubusercontent.com/GreenLemonProtocol/ink/main/docs/workflow.jpg)

### Ecosystem Fit

NFT sales reached $17.7 billion in 2021, up from $82.5 million in 2020 — a jump of more than 200 times. Total NFT profits when reselling or buying also skyrocketed from $12 million in 2020 to $5.4 billion in 2021.

Sotheby's - a renowned auction house with a history of nearly 300 years - generated $7.3 billion in sales in 2021, of which 10% was in private transactions. 

This gives us confidence that anonymous trading, the act of buying and selling without revealing the identity of the trader, is just as strongly demanded in the NFT ecosystem. 

The anonymous ERC20 token is also a strong market demand. There is a lot of ERC20 mixing service, such as Tornado.Cash, zk.money, 0xMonero, UniJoin.

As the first anonymous decentralized application platform of web3 Ecology, we believe Green Lemon will have a positive impact on Polkadot.

## Team :busts_in_silhouette:

### Team members

Yahuang Wu

* [Github address](https://github.com/wuyahuang)
* 🎓 Educated in Xiamen University, master of engineering management
* 📱 Over 7 years of working experience in mobile internet, developer of 3 popular apps (Qunar/Snowball/MeetYou)
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
- **Website:** http://0xgreenlemon.com

### Legal Structure

- **Registered Address:** 
- **Registered Legal Entity:** 

### Team's experience

We have 10 years of experience in Internet research and development, focusing on the blockchain industry since 2018. We are deep participants in several technical communities, hackathon winners, and node service providers for EOS and Platon.

### Team Code Repos

- Green Lemon Protocol: https://github.com/GreenLemonProtocol

Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine.

- Yahuang Wu: https://github.com/wuyahuang
- Rick: https://github.com/MeetYouDevs

## Development Status :open_book:

[Milestone Delivery: Dual-Key Stealth Address Protocol](https://github.com/w3f/Grant-Milestone-Delivery/pull/504)

[Milestone Delivery: Green Lemon Protocol🍋 Milestone 1](https://github.com/w3f/Grant-Milestone-Delivery/pull/543)

[Milestone Delivery: Green Lemon Protocol🍋 Milestone 2](https://github.com/w3f/Grant-Milestone-Delivery/pull/604)

## Development Roadmap :nut_and_bolt:

### Overview

- **Estimated duration:** 12 weeks
- **FTE:**  2
- **Costs:** 30,000 USD

### Milestone 1 — Anonymous ERC20

- **Estimated duration:** 6 weeks
- **FTE:**  2
- **Costs:** 15,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Article | We will publish **article & demo video** that explains How is anonymous ERC20 contract hidden owner works based on dual-key stealth address protocol.
| 1. | (ink!)Smart contracts: Anonymous ERC20 | Development and testing of the core functions of the anonymous ERC20 smart contract, hiding owner based on dual-key stealth address protocol, sending the transaction to the ERC20 contract through the relayer. As mentioned above, anonymous transactions are based on zero-knowledge proof. Additionally, we need to add an extra param into the message before hashing, which is the account nonce. When an ERC20 token is operated once, its previous owner nonce is automatically added by 1. The account nonce can prevent replay attacks for signatures already sent to the blockchain.|  

### Milestone 2 — Add MiMCSponge Hash and verify zero-knowledge proof on-chain into the Contract Pallet

- **Estimated Duration:** 6 weeks
- **FTE:**  2
- **Costs:** 15,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Article | We will publish **article & demo video** that explain How is new Contract pallet for Substrate works.
| 1. | (ink!)Smart contracts: Anonymous NFT | Development and testing of the MiMCSponge Hash and verifying zero-knowledge proof on-chain. Green Lemon platform uses MiMCSponge Hash to hash the Merkle tree leaves and stores the commitment on-chain. And the zero-knowledge proof is used to prove that the transaction caller is the correct previous coin depositor. If anyone else wants to use the same method, they have to implement their version. This is an inefficient solution. We believe these 2 APIs should be put into the `Contract Pallet`. So any other smart contract can use it as a contract `runtime` level API.

## Future Plans

- Develop a PC website and Google chrome extension wallet based on Green Lemon Protocol, lower the threshold for Polkadot users

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation Website