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
    ​

| Number | Deliverable                          | Specification                                                |
| ------ | ------------------------------------ | ------------------------------------------------------------ |
| 1.     | Substrate module: MMR Trie Structure | Implement a Substrate module which implement MMR.            |
| 2.     | Substrate Block proof algorithm      | The latest block proof algorithm based on difficulty change  |
| 3.     | Chain header storage                 | Process block header with MMR and deliver fast storage access |
| 4.     | MMR verification module              | Deliver MMR verification in substrate SRML                   |

### Milestone 2 Integrate ULVP(ultra-light verification protocol) into substrate

* **Estimated Duration:** 1 month
* **FTE:**  3
* **Costs:** $10,000
    ​

| Number | Deliverable                       | Specification                                                 |
| ------ | --------------------------------- | ------------------------------------------------------------ |
| 1.     | Construct cross-chain transaction | Construct special transactions for the ULVP cross-chain protocol. |
| 2.     | Transaction pool                  | Design and implement a cross-chain message management of message caching and ordering |
| 3.     | Asset module                      | Asset management modules for the pledge, release, and destruction functions of cross-chain assets |
| 4.     | P2P network                       | Design and implement the message transmission process based on libp2p. |
| 5.     | Succinct proof                    | Implement manage module to construct and verify the succinct proof.                          |

### Milestone 3 Implement Map Bridge

* **Estimated Duration:** 1 month
* **FTE:**  3
* **Costs:** $10,000
    ​

| Number | Deliverable         | Specification                                         |
| ------ | ------------------- | ----------------------------------------------------- |
| 1.     | ULVP runtime module | Implementation of a runtime module for ULVP                 |
| 2.     | Assert exchange     | Implementation of a runtime module for asset exchange |
| 3.     | Ultra light client  | Implement ultra light client of parachain chain             |
| 4.     | Documentation       | Make document about the map-bridge                    |

