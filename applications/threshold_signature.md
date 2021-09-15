# W3F Grant Proposal

> This document will be part of the terms and conditions of your agreement and therefore needs to contain all the required information about the project. Don't remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with a `>` (such as this one) can be removed.
>
> See the [Grants Program Process](https://github.com/w3f/Grants-Program/#pencil-process) on how to submit a proposal.

* **Project Name:** ComingChat
* **Team Name:** PolkaX
* **Payment Address:** 0x006E97e28CAa58D3357d070C9535D6CD06bD875e(DAI)
* **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 3

> ⚠️ *The combination of your GitHub account submitting the application and the payment address above will be your unique identifier during the program. Please keep them safe.*

## Project Overview :page_facing_up:
ComingChat is a privacy social software that supports the signal protocol at the bottom.
 Substrate supports sr25519 and Schnower's multi-signature, but does not support threshold signatures. 
The purpose of this project is to provide a threshold signature wallet for the substrate blockchain that supports the sr25519 protocol.
Implementation categories include: 
  -  End-to-end private encrypted group chat based on ComingChat, which serves as the basis of private communication for each distributed node with threshold signatures.
  -  Implement the MAST protocol of BTC taproot in the form of a module on Substrate, which is used to combine the multisig logic of sr25519 to implement threshold signatures based on aggregate signatures.

### Project Details

#### Key Deliverables

- A threshold signature pallet to generate address and verify
- A wallet to generate aggregate public key and signature

#### Example

```
A, B, and C constitute a 2/3 threshold signature contract.
There are three possibilities for aggregation signature: AB, AC and BC.
                    root
                   /    \
               branch   BC
               /    \
              AB    AC
     （Constructed threshold signature combination Merkel tree）
 Substrate module provide 3 interface.
 1: send_merkel_tree( merkel tree) -> threshold address
 2: approve_tx( signature, merkel_proof, script_hash)
 3: execute_tx(script)
```

For this substrate module, we divide it into two main parts. The first part is the authorization of a transaction, where the parties only need to upload their signature, merkel_proof and the hash of the script, which contains information about the transaction and the sender of the transaction, which looks like the transaction is locked in the script hash. The second part is that the user can execute the transaction through the script by comparing the sender in the script with the user who is currently invoking the transaction, and then constructing the transaction to execute according to the script.In this way, both parties to the transaction can agree while hiding the information about the transaction, and the transaction will only be revealed at the last moment.

~~~
 ComingChat distributed privacy computing network provides the assembly of two functions.
 Shown in the form of ComingChat wallet
 1: construct_merkel_tree( [A,B,C]) -> [AB, AC, BC]
 2: construct_aggregate_signature_tx(msg, AB|AC|BC's signature) -> tx
~~~

As shown in the following figure, a complete transaction process of our threshold signature may be: n individuals participate in a transaction with a threshold of m, and use the offline Musig module to generate all m possible aggregate public keys through the ComingChat distributed encrypted communication network. Then output all the aggregated public keys (for example: `[AB, AC, BC]`) as the input of the pallet's threshold signature interface and return a threshold signature address as the multi-signature address. When the m individual uses the multi-signature address to conduct a transaction, he first uses the ComingChat wallet to generate an aggregate signature, which is used as the input of the pallet verification interface and verifies whether the signature is passed. It is worth noting that in the signature verification process, first verify whether the merkle root is correct, and then whether the aggregated signature satisfies the aggregated public key. If both are successful, the verification passes, otherwise it fails.

### ![img](https://cdn.jsdelivr.net/gh/rjman-ljm/resources@master/assets/1629794873542-threshold_signature-1.png)

In the above process, the process of generating the threshold signature address is carried out on the chain, which can effectively simplify the verification process of our signature. The verification process of the signature requires the merkle proof. Since we store all the data on the chain, we only need to provide the aggregate signature to verify the merkle. Of course the price is the need to take up storage space on the chain. Therefore, a better solution is to place the threshold signature address generation process off-chain. The corresponding merkle tree needs to be persistently stored off-chain. When we verify, we not only need to provide aggregate signatures, but also Need to provide relevant merkle proof.

### ![img](https://cdn.jsdelivr.net/gh/rjman-ljm/resources@master/assets/1629794912297-threshold_signature-2.png)

#### Technology Stack

Threshold signature pallet is a module we will write, mainly used for address generation and verification of threshold signature. For this pallet, we will use the rust language and the substrate framework to write it. Part of the encryption primitives comes from Schnoorkle (such as public keys, private keys), and some need to be written by ourselves (such as MAST). To complete this pallet, we may need to implement the list:

1. Construct an aggregated public key scripts
2. Build the MAST using the aggregated signature scripts
3. Use MAST to generate threshold signature address
4. Construct an aggregated signature
5. Verify that the aggregated signature and the aggregated public key match
6. Use the MAST to verify that the root matches

The wallet is a threshold signature wallet built on the ComingChat distributed network, which is mainly used to generate aggregate public keys and aggregate signatures. Currently, we will use Musig as our multi-signature scheme. We will use Musig implemented in rust language as the basis for the calculation of aggregate public keys and aggregate signatures. Use the ComingChat network as our communication basis. Finally, a threshold signature wallet is constructed. To complete the threshold signature wallet, we may need to implement the list:

1. Generate nonce and calculate commitment
2. Use ComingChat network to deliver commitment
3. Use ComingChat network to pass the nonce and verify the commitment
4. Aggregate nonce to generate R, use the private key, R to generate signature fragments
5. Use ComingChat network to deliver commitment and signature fragments
6. Aggregate signature fragments to generate s
7. Get the aggregate signature (R, s)

[For more details](https://eprint.iacr.org/2018/068)

#### UI

The preliminary design of our **Threshold Signature Wallet** mainly consists of three parts.

- Create a threshold signature address: This step is used to select parties to generate a threshold account.

  ![](https://cdn.jsdelivr.net/gh/AAweidai/PictureBed@master/taproot/1630328549217-WechatIMG19.png)



- Initiate transaction: This step refers to the initial action of initiating a threshold-signature transaction, it’s different from the sign a transaction shown below.

  Entrance 1: Initiate transaction through wallet page:

  ![](https://cdn.jsdelivr.net/gh/AAweidai/PictureBed@master/taproot/1630328784865-WechatIMG21.png)

  Entrance 2: Initiate transaction through group page

  ![](https://cdn.jsdelivr.net/gh/AAweidai/PictureBed@master/taproot/1630328956646-WechatIMG20.png)

- Sign a transaction: This step refers to the action taken by other people to sign a specific transaction which someone had generated before.

  ![](https://cdn.jsdelivr.net/gh/AAweidai/PictureBed@master/taproot/1630329110617-WechatIMG18.png)

### Ecosystem Fit

#### Save transaction fees

At present, the multisig pallet of substrate requires each participant to approve on the chain to complete the multi-signature verification. The transaction weight will increase linearly with the number of participants n, and the complexity is O(n). The idea of our theshold signature pallet is to complete signature aggregation off-chain and submit the corresponding merkle proof on the chain to complete signature verification. The complexity of the transaction weight is O(log(n)). At present, the difference in handling fees for a single multi-signature transaction is negligible, but as the number of transactions increases, the savings in handling fees should still be considerable.

#### Introducing MAST to realize the complex contract

MuSig can help us implement aggregate signatures, but in practice, we use m-of-n threshold signatures more. To this end, we introduced the MAST (Merkelized Abstract Syntax Tree) contract to help us implement a threshold signature based on MuSig. Of course, the implementation of threshold signature is only one of the reasons for introducing MAST. In addition, we will implement similar BTC spending to scripts and achieve script privacy. For specific details, please refer to [Substrate-taproot](https://github.com/chainx-org/Substrate-taproot/blob/main/README.md).

#### Off-chain musig wallet

We use the Musig scheme to implement aggregated signatures off-chain. In order to facilitate the construction of threshold signature wallets on various platforms, we will provide three versions of the Musig interface: swift, java, and js.

In short, we are committed to providing a complete set of substrate threshold signature solutions. Using the three versions of the Musig interface in the plan can help us quickly build threshold signature wallets for various platforms. Use the theshold signature pallet in the solution to help us implement complex privacy scripts and help us cope with different usage scenarios.

## Team :busts_in_silhouette:

* **Members:** Guanghua Guo, Wei Dai, Jiangmang Luo, Bingxiao Liu, Yunhui Du and other PolkaX team members.
* **LinkedIn Profiles:** https://www.linkedin.com/company/68944503/admin/
* **Code Repos:** https://github.com/coming-chat, https://github.com/chainx-org
* **Website:**	https://www.comingchat.com/
* **Legal Structure:** Hangzhou Chainnet Technology Co., Ltd.
* **Team's Experience:** 
- Develop the ChainX network. 
- Received more than 10 million block chain technology funding from the Chinese government. 
- Developed ComingChat software

## Development Roadmap :nut_and_bolt: 

* **Total Estimated Duration:** 8 weeks
* **Full-time equivalent (FTE):** 10
* **Total Costs:** 100 000 DAI

### Milestone 1

- **Estimated Duration:** 4 weeks 
- **FTE:** 7

- **Costs:** 50 000 DAI

| **Number** | **Deliverable**             | **Specification**                                            |
| ---------- | --------------------------- | ------------------------------------------------------------ |
| 0.         | Apache License 2.0          | All code will be published under Apache 2.0                  |
| 1.         | Substrate Module            | Implement threshold signature module                         |
| 1.a        | Interface: Generate Address | Construct a threshold signature address and generate a merkle tree. There are three steps to generate an address: Accept the leaf nodes to construct a merkle tree; Calculate the public key according to the merkle root; Encode the public key to generate an address. |
| 1.b        | Interface: Pass Script      | This interface will verify the threshold signature and upload the script hash.This is an authorized operation, which is equivalent to locking the funds into the script after the threshold signature verification is passed. |
| 1.c        | Interface: Execute Script   | This interface is the real script execution. When the script is authorized to the user and meets the unlocking conditions, the user can actively execute the script. |
| 2.         | Testing Guide               | The test will verify basic functions such as correct generation of addresses and threshold signature verification. 1. The address is correctly generated: the node of the same leaf can generate the threshold signature address uniquely and correctly 2. Threshold signature verification: the submitted transaction with threshold signature can be verified |
| 3.         | Repository                  | Repository including a README that describes the milestone and explains how to run, test and contribute |

### Milestone 2

- **Estimated Duration:** 4 weeks 
- **FTE:** 10

- **Costs:** 50 000 DAI

| **Number** | **Deliverable**                                         | **Specification**                                            |
| ---------- | ------------------------------------------------------- | ------------------------------------------------------------ |
| 0.         | Apache License 2.0                                      | All code will be published under Apache 2.0                  |
| 1.         | Musig interactive interface                             | Various versions of musig interactive interface              |
| 1.a        | Api-swift: Swift version of musig interactive interface | This interface is suitable for the swift platform to help the group quickly build a threshold signature wallet |
| 1.b        | Api-java: Java version of musig interactive interface   | This interface is suitable for the java platform to help the group quickly build a threshold signature wallet |
| 1.c        | Api-js: Js version of musig interactive interface       | This interface is suitable for the js platform to help the group quickly build a threshold signature wallet |
| 3.         | Repository                                              | Repository including a README that describes the milestone and explains how to run, test and contribute |

## Additional Information :heavy_plus_sign: 

* The transaction can be completed without exposing the public key to achieve address privacy
* We are implementing the threshold signature of BTC based on the taproot protocol of BTC, so as to realize the decentralized cross-chain of BTC.
