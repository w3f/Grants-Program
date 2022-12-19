# Hardware ECDSA for Polkadot JS

* **Proposer:** @akru
* **Payment Address:** 146iwtFpePG4GqBfNpMTDRgqfwNjj248JpvDKLyFPM1KSsa (Kusama)

## Project Description :page_facing_up: 

Hardware wallets provide for end-user much more hight grade of security than traditional software wallets because of moving the private key out of general using PC. The most popular, Trezor (https://trezor.io/) and Ledger (https://www.ledger.com/), supports Ethereum / Bitcoin cryptography (ECDSA) by default. But ECDSA crypto is native for the Polkadot ecosystem too that makes hardware wallets fully compatible with Polkadot applications without any changes in hardware wallet firmware.

This proposal improves already implemented software ECDSA keyring in PolkadotJS (https://github.com/w3f/Open-Grants-Program/pull/6) and planned to be directly integrated into Polkadot JS which is part of the Polkadot ecosystem.

Plasm Network(https://plasmnet.io) is a scaling Dapps platform on Substrate. Plasm Network is planned to be a parachain in the Polkadot ecosystem. The Plasm token distribution model involves the use of a lockdrop approach in Ethereum and Bitcoin networks where Secp256k1 cryptography is a de facto standard. Plasm team is highly interested in making lockdrop participation process smoothly as much as possible. ECDSA integration into the Polkadot ecosystem is one of the steps to makes it real.


## Team :busts_in_silhouette:

* **Members:** Aleksandr Krupenkin, Sota Watanabe, Takumi Yamashita, Task Ohmori, Hoon Kim
* **LinkedIn Profiles:** http://linkedin.com/in/krupenkin, https://www.linkedin.com/in/sota-watanabe-b962b3110, http://linkedin.com/in/task-ohmori-604398176
* **Code Repos:** https://github.com/AstarNetwork/astar-frame, https://github.com/hoonsubin/apps/tree/page/custom-signature
* **Website:** https://astar.network
* **Legal Structure:** STAKE TECHNOLOGIES PTE. LTD. 105 CECIL STREET #24-02 THE OCTAGON SINGAPORE (069534)
* **Team's Experience:**  Stake Technologies is a technology company that focuses on substrate research and development as same as the business application of given results. Aleksandr Krupenkin, main experience as Haskell Web3 library (https://hs-web3.readthedocs.io/en/latest/index.html) owner, including cryptographic functions for Haskell Ethereum client.


## Development Roadmap :nut_and_bolt: 

* **Total Estimated Duration:** 10 weeks
* **Full-time equivalent (FTE):** 0.6
* **Total Costs:** 10,000 USDT

### Milestone 1

* **Estimated Duration:** 10 weeks 
* **Full-time equivalent (FTE):** 0.6
* **Costs:** 10,000 USDT

Ledger API support for Polkadot JS Apps.

| Number | Deliverable | Specification | 
| ------------- | ------------- | ------------- |
| 1. | Ledger API ECDSA signer | Introducing Ledger API based signed for Polkadot JS. Required API methods already exposed by standard Ledger API: [getPublicKey](https://github.com/LedgerHQ/ledgerjs/blob/96306b2c0d75e1290461fb52b8f69f506a425643/packages/hw-app-btc/src/getWalletPublicKey.js#L16), [signMessage](https://github.com/LedgerHQ/ledgerjs/blob/96306b2c0d75e1290461fb52b8f69f506a425643/packages/hw-app-btc/src/signMessage.js#L6). |
| 2. | Improve documentation | Add Ledger hardware wallet paragraph into Polkadot-js documentation. |
| 3. | Demo video | Provide demo video of Polkadot Apps sign transaction with Trezor wallet. |
