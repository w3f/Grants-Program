# Open Grant Proposal

* **Project:** Map Bridge
* **Proposer:**  zcheng9 
* **Payment Address:**  1MEu8JrsSMAF7v8vg7bSu1iPsgZKXXW1nA 

## Project Overview :page_facing_up: 
### Overview

This project deliver a bridge  relay  to connect Polkadot and other PoW chains. The bridge  relay can provide an non-interactive, succinct proof of POW  of a bridged chain based on ULVP(ultra-light verification protocol) .  And based on such proof,  it can further verify  inner state of certain account or transaction inclusion proof. 


### Project Description 
+ MAP-Bridge would implement a new data structure called merkle mountain range(MMR) which contain the information of  all confirmed block headers. And the root of MMR would be include in the header of  new mined block.
+ Map-Bridge would use ULVP to acquire  non-interactive proof of  POW verification of the bridged chain. ULVP is a flyclient-type verification module to verify the validity of tail block of a certain blockchain carry heaviest proof of work.  The size of proof  grows sub-linearly as the length of the bridged chain. 
+ Once the header of tail block in a certain blockchain can be confirmed, any block header in this blockchain can be determined through the MMR branch proof,  with the fact that the header of tail block contain the root of MMR including all headers.
+ Furthermore  if any block header can be determined, any transaction or inner state of certain account could be verified through merkle branch proof similar to SPV(simplified payment verification).

### Ecosystem Fit 
## Team :busts_in_silhouette:

### Team members
* Chan
* Seabook
* LYU.L

### Team Website	
* https://www.maplabs.io/

### Legal Structure 
MAP labs

### Team's experience
* Dr. Chan received the Ph.D. degree in applied mathematics from Illinois Institute of Technology, Illinois, USA in 2017. His research interests include consensus algorithms, P2P protocol, cryptography, blockchain interoperbility. 
* Dr. Seabook is  based in Australia and get his Blockchain PhD. from Australian Deakin University. He has more than 15 years of professional software design, architecture and development experiences. He has worked as Chief Technology Officer and Senior Architect in Telstra, Accenture, Qantas, eBay and Citibank. 
* LYU.L holds a master degree from Tsinghua University and also a member of China national blockchain and distributed ledger committee. He has more than 13 years of experience inlarge-scale computing and algorithm, with many patents such as consensus algorithm and blockchain transaction. 

### Team Code Repos
* https://github.com/Philasande-map/mapbridge



## Development Roadmap :nut_and_bolt: 

### Overview

* **Total Estimated Duration:** 3 month
* **Full-time equivalent (FTE):** 3
* **Total Costs:** $30k.
    ​

### Milestone 1 Implement Substrate MMR Module

* **Estimated Duration:** 1 month
* **FTE:**  3
* **Costs:** $10,000

In this milestone, we will build Substrate-based MMR for MAP bridge and also provide the MMR proof generating and verifying method in runtime module . This is a preliminary for ULVP module which can verify the validity of tail block of a certain blockchain carry heaviest proof of work.  Furthermore, we will implement  the block header storage functionality. This would make the blockchain  could  manage the MMR（such as writing the MMR root in the new generating block header, retrieving the MMR based on the MMR root  in a certain block header, etc. ）. We will provide proper unit-test for this milestone.
    

| Number | Deliverable                          | Specification                                                |
| ------ | ------------------------------------ | ------------------------------------------------------------ |
| 0a. | License | Apache 2.0 |
| 0b. | Testing | This milestone will have unit-test for MMR trie, MMR proof runtime api and MMR manager.In the guide we will describe how to run these tests. |
| 1.     | MMR Trie Structure | Implement core data structure which implement MMR trie. |
| 2.    |  Substrae MMR proof runtime module           |Deliver MMR proof verification in substrate SRML runtime   |
| 3.    | Blockchain MMR manager |   Provide blochain the ability to generate and manage MMR. |

### Milestone 2 Integrate ULVP module into substrate

* **Estimated Duration:** 1 month
* **FTE:**  3
* **Costs:** $10,000

In this milestone, we will further implement the ULVP module and some add-on module. This would involving generating and verifying succinct proof,  specifying the cross-chain transaction, implementing the cross-chain transaction pool, building P2P network based on libp2p. Once this milestone is accomplished, the whole feature of ULVP module is complete and could be used to verify inner state of certain account or transaction inclusion proof for other blockchain. We will include proper test and documentation for this milestone


| Number | Deliverable                       | Specification                                                 |
| ------ | --------------------------------- | ------------------------------------------------------------ |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can import the protocol. |
| 0c. | Testing Guide | This milestone will have unit-test for ULVP module to ensure functionality. In the guide we will describe how to run these tests.|
| 1.     | Succinct proof                    | Implement manage module to generate and verify the succinct proof.                          |
| 2.     | Cross-chain transaction specification | Construct special transactions for the ULVP cross-chain protocol. |
| 3.     | Transaction pool                  | Design and implement a cross-chain message management of message caching and ordering |
| 4.     | Asset module                      | Asset management modules for the pledge, release, and destruction functions of cross-chain assets |
| 5.     | P2P network                       | Design and implement the message transmission process based on libp2p. |


### Milestone 3 Implement Map Bridge
In this milestone,  we will integrate the MAP bridge into runtime module, build a cross-chain asset exchange demo and realize an ultra light client for para-chain based on ULVP. Also we will provide the complete documentation and test for MAP bridge. 


* **Estimated Duration:** 1 month
* **FTE:**  3
* **Costs:** $10,000
    ​

| Number | Deliverable         | Specification                                         |
| ------ | ------------------- | ----------------------------------------------------- |
| 0a. | License | Apache 2.0 / MIT / Unlicense |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can establish the bridge. |
| 0c. | Testing Guide | This milestone will have integration tests for MAP-bridge to ensure functionality and robustness. In the guide we will describe how to run these tests. |
| 1.     | MAP-bridge runtime module | Implementation of a runtime module for MAP-bridge                 |
| 2.     | Asset exchange     | Implementation of a demo for cross-chain asset exchange using MAP-bridge|
| 3.     | Ultra light client  | Implement ultra light client of para-chain |

