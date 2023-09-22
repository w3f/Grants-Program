# ECDSA for Polkadot JS

* **Proposer:** @akru
* **Payment Address:** bc1qccvrcny62epea360w0dvy2ynv90vz5luansmg9

## Project Description :page_facing_up: 

Currently Polkadot/Substrate support three kinds of cryptographic primitives as MultiSignature data type:

* Ed25519
* Sr25519
* ECDSA

Unfortunately, right now Polkadot JS support first two only (enhancement issue: https://github.com/polkadot-js/common/issues/506). It's limiting using ECDSA keys for subkey CLI utility only, which makes user experience pipeline a bit difficult.

Main aim of this project is providing comfortable environment for ECDSA key owners (Ethereum/Bitcoin holders) as same as for Sr/Ed25519 keys.

Supporting wide range of cryptographic primitives is powerful side of substrate/polkadot ecosystem. This projects makes this side user-friendly introducing cryptographic primitives support on UI side.

This project planned to be directly integrated into Polkadot JS which is part of Polkadot ecosystem.

Plasm Network(https://plasmnet.io) is a scaling Dapps platform on Substrate. Plasm Network is planned to be a parachain in Polkadot ecosystem. Plasm token distribution model involves the use of a lockdrop approach in Ethereum and Bitcoin networks where Secp256k1 cryptography is a de facto standard. Plasm team is highly interested in making lockdrop participation process smoothly as much as it possible. ECDSA integration into Polkadot ecosystem is one of steps to makes it real.


## Team :busts_in_silhouette:

* **Members:** Aleksandr Krupenkin, Sota Watanabe, Takumi Yamashita, Task Ohmori, Kim Hoon
* **LinkedIn Profiles:** http://linkedin.com/in/krupenkin, https://www.linkedin.com/in/sota-watanabe-b962b3110, http://linkedin.com/in/task-ohmori-604398176
* **Code Repos:** https://github.com/staketechnologies/common, https://github.com/staketechnologies/apps
* **Website:** https://stake.co.jp
* **Legal Structure:** Stake Technologies Inc. Avex EYE Avex Blog 3-1-30 Minamiaoyama Minato-ku Tokyo Japan
* **Team's Experience:**  Stake Technologies is technological company that focus on substrate research and development as same as business application of given results. Aleksandr Krupenkin, main experience as Haskell Web3 library (https://hs-web3.readthedocs.io/en/latest/index.html) owner, including cryptographic functions for Haskell Ethereum client.


## Development Roadmap :nut_and_bolt: 

* **Total Estimated Duration:** 2 weeks
* **Total Costs:** 0.6 BTC

### Milestone 1

* **Estimated Duration:** 2 weeks 
* **Costs:** 0.6 BTC

Main aim of this is providing compatability layer for secp256k1 keypair into Polkadot JS key management system.

| Number | Deliverable | Specification | 
| ------------- | ------------- | ------------- |
| 1. | Polkadot JS ECDSA sign/verify support | Introducing secp256k1 keypair into Polkadot-js/common repository as same as sr25519 type: https://github.com/polkadot-js/common/blob/master/packages/util-crypto/src/types.ts, implementing Sing/Verify interfaces. |
| 2. | Polkadot JS sign/verify tests | Integration tests for secp256k1 keypair. | 
| 3. | Polkadot JS Apps ECDSA support | Introducing secp256k1 key types for Apps account management widget. ECDSA account should be possible to send extrinsics as same as Sr25519 or Ed25519 account. |  
| 4. | Improve documentation | Add ECDSA description paragraph into Polkadot-js documentation. |
| 5. | Polkadot JS Apps demo video | Provide demonstration how Polkadot Apps works with Ethereum (secp256k1) private keys. |
