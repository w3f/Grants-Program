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
* **Total Costs:** 100 000 DAI

### Milestone 1

* **Estimated Duration:** 4 weeks 
* **Costs:** 50 000 DAI


| Number | Deliverable | Specification | 
| ------------- | ------------- | ------------- |
| 0. | Apache License 2.0 | All code will be published under Apache 2.0 |
| 1. | Substrate Module | Implement threshold signature module |  
| 1.a| Interface: Build a multi-signature |Construct a threshold signature address and generate a verifiable path (merkle tree) |
| 1.b| Interface: Send transaction |Send the transaction that has completed the aggregation signature, pass the verification and comparison of the merkle leaf node, and call the ordinary transaction interface of other non-root permissions on the chain.|
| 2.  | Repository | Repository including a README that describes the milestone and explains how to run, test and contribute | 

### Milestone 2

* **Estimated Duration:** 4 weeks 
* **Costs:** 50 000 DAI


| Number | Deliverable | Specification | 
| ------------- | ------------- | ------------- |
| 0. | Apache License 2.0 | All code will be published under Apache 2.0 |
| 1.  | Wallet| Realize a threshold signature wallet based on a distributed privacy network |  
| 1.a | Interface: Construct merkel tree |Using the aggregate public keys of all possible aggregate signature combinations as leaf nodes, the merkle tree is generated through ComingChat's distributed encrypted communication network. Derive the threshold signature address with merkle root.|
| 1.b| Interface: Build an aggregated signature transaction |Through ComingChat's distributed encryption network, the construction of offline aggregated signature transactions is completed.|
| 3.  | Repository | Repository including a README that describes the milestone and explains how to run, test and contribute| 

### Example
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
     1: construct_merkel_tree( [A,B,C]) -> [AB, AC, BC, root]
     2: construct_aggregate_signature_tx(msg, AB|AC|BC's signature) -> tx 

## Additional Information :heavy_plus_sign: 

* The transaction can be completed without exposing the public key to achieve address privacy
* We are implementing the threshold signature of BTC based on the taproot protocol of BTC, so as to realize the decentralized cross-chain of BTC.
