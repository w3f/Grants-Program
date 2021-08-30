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
 Substrate module provide 2 interface.
 1: send_merkel_tree( merkel tree) -> threshold address
 2: send_threshold_tx( tx) -> bool
 
 ComingChat distributed privacy computing network provides the assembly of two functions.
 Shown in the form of ComingChat wallet
 1: construct_merkel_tree( [A,B,C]) -> [AB, AC, BC]
 2: construct_aggregate_signature_tx(msg, AB|AC|BC's signature) -> tx
```

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

Under the current threshold signature scheme, multi-signature verification requires the submitted data to change from the original signature and public key to the submitted merkle proof, and the data level changes from O(n) to O(log n).

#### Introducing MAST to realize the complex contract

MuSig can help us achieve aggregate signatures, but in practice, we use m-of-n threshold signatures more. To this end, we introduced the MAST (Merkelized Abstract Syntax Tree) contract to help us implement threshold signatures based on MuSig. The idea of MAST is to use a Merkle tree to encode branches in a script. Users may provide only the branches they are executing, and hashes that connect the branches to the fixed size Merkel root when spending. This reduces the size of the redemption stack from O(n) to O(log n) (n as the number of branches). This enables complicated redemption conditions that are currently not possible due to the script size and opcode limit, improves privacy by hiding unexecuted branches, and allows the inclusion of non-consensus enforced data with very low or no additional cost.

#### Privacy communication based on Coming Chat

In addition, an end-to-end private encrypted group chat based on Coming-Chat is used as the basis of private communication for each distributed node. ComingChat helps us realize the two-round communication process of MuSig quickly, efficiently, and safely.

In short, our ultimate goal is to use ComingChat as the basis of communication, MuSig as a multi-signature scheme, and introduce MAST to finally realize threshold signatures. 

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

* **Estimated Duration:** 4 weeks 
* **FTE:** 7
* **Costs:** 50 000 DAI

| Number | Deliverable                                        | Specification                                                |
| ------ | -------------------------------------------------- | ------------------------------------------------------------ |
| 0.     | Apache License 2.0                                 | All code will be published under Apache 2.0                  |
| 1.     | Substrate Module                                   | Implement threshold signature module                         |
| 1.a    | Interface: Construct a threshold signature address | Construct a threshold signature address and generate a merkle tree. There are three steps to generate an address: Accept the leaf nodes to construct a merkle tree; Calculate the public key according to the merkle root; Encode the public key with bech32m to generate an address. |
| 1.b    | Interface: Send transaction and verify             | Send the transaction that has completed the aggregation signature, pass the verification and comparison of the merkle leaf node, and call the ordinary transaction interface of other non-root permissions on the chain. There are two steps to verify: verify the existence of the leaf node according to the merkle proof; verify that the script submitted to the branch is passed correctly |
| 2.     | Testing Guide                                      | The test will verify basic functions such as correct generation of addresses and threshold signature verification. 1. The address is correctly generated: the node of the same leaf can generate the threshold signature address uniquely and correctly 2. Threshold signature verification: the submitted transaction with threshold signature can be verified |
| 3.     | Repository                                         | Repository including a README that describes the milestone and explains how to run, test and contribute |

### Milestone 2

* **Estimated Duration:** 4 weeks 
* **FTE:** 10
* **Costs:** 50 000 DAI


| Number | Deliverable | Specification | 
| ------------- | ------------- | ------------- |
| 0. | Apache License 2.0 | All code will be published under Apache 2.0 |
| 1.  | Wallet| Realize a threshold signature wallet based on a distributed privacy network |  
| 1.a | Interface: Construct merkel tree |Using the aggregate public keys of all possible aggregate signature combinations as leaf nodes, the merkle tree is generated through ComingChat's distributed encrypted communication network. Derive the threshold signature address with merkle root.|
| 1.b| Interface: Build an aggregated signature transaction |Through ComingChat's distributed encryption network, the construction of offline aggregated signature transactions is completed.|
| 3.  | Repository | Repository including a README that describes the milestone and explains how to run, test and contribute| 

## Additional Information :heavy_plus_sign: 

* The transaction can be completed without exposing the public key to achieve address privacy
* We are implementing the threshold signature of BTC based on the taproot protocol of BTC, so as to realize the decentralized cross-chain of BTC.
