# W3F Grant Proposal

- **Project Name:** Comingchat-wallet-SDK
- **Team Name:** PolkaX
- **Payment Address:** 0xc7F3CEF3D4Da3d01E2a03E7CC047EF705B425452(DAI)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

### Overview
Comingchat-wallet-SDK is a full-environment(Android & IOS) and multi-chain wallet SDK. It mainly includes **Wallet basic methods** and **Generate Tx methods**. Comingchat-wallet-SDK will support all main substrate networks such as Polkadot 、Kusama and so on. Comingchat-wallet-SDK aims to become a common component of the substrate ecological mobile APP, and minimize the threshold for developing the substrate ecological mobile APP.

### Project Details

**Wallet methods**

- generate phrase
- create wallet
    - from phrase
    - from keystore
- get public key from address
- get address from public key
- sign tx data
    - by keystore
    - by signature
- verify signature
- check keystore password

**Generate Tx methods**

- generate tx
    - get metadata
    - get genesishash
    - get nounce
    - get transactionversion
    - get specversion
    - get tx fee

**Workflow**

1. Import mnemonic or private key to generate `wallet` object.
2. Generate a polka `account` object through ss58.
3. Create a `chain` object via rpcUrl.
4. Get metadataString from `chain`, create a `tx` object to construct `transaction`.
5. Call the polka `account` to sign the `transaction` and get the `signature data`.
6. Generate **sendTx** from `transaction` based on polka `account` public key and `signature data`.


### Ecosystem Fit

There is no doubt that the blockchain world is in the process of transitioning from technology-driven to application-driven. During this process, more and more technical teams with non-chain development backgrounds began to enter the web3 world with excellent ideas. But the vast majority of operations on the chain are performed by sending transactions onto the chain. At this time, a complete wallet SDK is urgently needed in the market to lower the threshold for them to realize specific applications, and at the same time accelerate the prosperity of the Polkadot ecosystem

## Team :busts_in_silhouette:
* **Members:** Guanghua Guo, Guiguang Zhang, Zhangjie GU, Ke Li, Yunhui Du and other PolkaX team members.
* **Code Repos:** https://github.com/coming-chat, https://github.com/chainx-org
* **Website:**	https://www.comingchat.com/
* **Legal Structure:** ComingChat Limited
* **Team's Experience:** 
- Develop the ChainX network. 
- Develop the SherpaX network
- Develop the MiniX network
- Received more than 10 million block chain technology funding from the Chinese government. 
- Developed ComingChat software
- Develop the COMFUTURE NFT marketplace


## Development Roadmap :nut_and_bolt: 
### milestone 1
* **Estimated Duration:** 4 weeks 
* **Full-Time Equivalent (FTE):** 2
* **Costs:** 20 000 DAI

| Number | Deliverable            | Specification                                                |
| -----: | ---------------------- | ------------------------------------------------------------ |
|    0a. | License                | GPLv3                                                        |
|    0b. | Documentation          | We will provide **inline documentation** of the code and a basic **tutorial** explaining to users how to use our wallet tool, sign and send transactions to the chain, and query transaction details. |
|    0c. | Testing Guide          | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
|    0d. | Demo                   | We will provide a simple iOS Demo to present the effect of this project running on the mobile client. |
|    0d. | Article                | We will publish an article explaining the details of wallet, signature, transaction implementation. |
|     1. | Node: `cc-wallet`      | We will implement the part of `wallet`, which can generate mnemonics to create a new wallet, support import wallet from `mnemonics` and `keystore`,  obtaining public and private keys, address,  and signing data, etc. |
|     2. | Node: `cc-transaction` | We will implement the part of `transaction`, which could connect with the remote RPC: user can query the wallet balance, transaction fees, get the data necessary for signature, send transactions to the chain, etc. |
|     3. | Node: `cc-detail`      | We currently only support several chains to get transaction details through scan url. |
