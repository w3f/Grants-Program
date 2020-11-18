# Open Grant Proposal
* **Project:** Map Bridge
* **Proposer:**  zcheng9
* **Payment Address:**  1CFM6QDvxwXEV3dUN9x2ftqq4rwAfkxN9W
## Project Overview :page_facing_up:
### Overview
This project deliver a bridge  relay  to connect Polkadot and other PoW chains(Ethereum specific in this proposal). The bridge  relay can provide an non-interactive, succinct proof of POW  of a bridged chain based on ULVP (ultra-light verification protocol) .  And based on such proof,  it can further verify  inner state of certain account or transaction inclusion proof.
### Project Description
+ MAP-Bridge would implement a new data structure called merkle mountain range(MMR) which contain the information of  all confirmed block headers. And the root of MMR would be include in the new mined block somewhere.
+ In order to achieve this, we have to include the most recently MMR root in the new mined blocks in both Ethereum and Map bridge(parachain in Polkadot). For MAP bridge we can simply include it in the block header. For Ethereum, we have three possible way: firstly we could propose a EIP to ensure  block header of Ethereum including MMR root; secondly we could deployed a contract in Ethereum to maintain most recent MMR root; and the last choice is to use CHT root in Ethereum instead of MMR root to do the verification work. In our proposal, we prefer to use the second method. 
+ MAP-Bridge is build on a verification module called Ultra-Light Verification Protocol (ULVP). ULVP origins from the paper ["Flyclient:  Super-Light Clients for Cryptocurrencies"](https://eprint.iacr.org/2019/226.pdf).  Any node could verify the existence of any transaction or the balance of any account with very limited data through ULVP compare to SPV. 
+ The verification mechanism is as following:
+ The verifier connects some randomly selected full node in the destiny chain (at least one of these must be honest) and request them sending their tail blocks and corresponding proofs. Then the verifier validates the proof with the longest tail block. If it is a valid proof, the verifier would select this tail block as his choice and save it for next step. Otherwise he would drop this full node  and check the second-longest tail block. The verifier continues this steps until it finds the tail block with valid proof. Based on our assumption, he connects at least one honest prover. Thus this algorithm would eventually find the honest longest tail block.
+  The verifier connects some other randomly selected full node in the destiny chain and obtains  the block header in specified height and the corresponding MMR branch proof of this header upon to the most recent MMR. The verifier has the root of the most recent MMR which include in the tail block header. He could then validate the MMR branch proof based on it. If he get the valid block header he can save it for next step, otherwise keep doing it for another full node.
+ This step is similar to SPV.  The verifier connects some other randomly selected full node in the destiny chain.  The he could request  them sending the detail of the transaction in specified height with the merkle branch proof up to the transaction root in block header( for state of any account is similar since the state root is stored in the header too). After that he could check the validity of the merkle proof. If the check passed, he could be sure that this transaction is indeed included in the destiny chain. If not, he could try another full node. If none of them could provide valid proof, he would know this transaction is not included in the destiny chain yet. 
+ More details of ULVP could be found [Here](https://medium.com/marcopolo-protocol/marcopolo-protocol-sub-protocol-ultra-light-verification-protocol-ulvp-adc73eccf566).


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
* **Total Costs:** $ 2 BTC.
### Milestone 1 Implement Substrate MMR Module
* **Estimated Duration:**1 month
* **FTE:**  3
* **Costs:** 1 BTC
In this milestone, we will build Substrate-based MMR for MAP bridge and also provide the MMR proof generating and verifying method in runtime module . This is a preliminary for ULVP module which can verify the validity of tail block of a certain blockchain carry heaviest proof of work.  Furthermore, we will implement  the block header storage functionality. This would make the blockchain  could  manage the MMR（such as appending new blocks into blockchain and retrieving the MMR based on the MMR root  in a certain block header, etc. ）. We will provide proper unit-test for this milestone.

| Number | Deliverable                          | Specification                                                |
| ------ | ------------------------------------ | ------------------------------------------------------------ |
| 0a. | License | Apache 2.0 |
| 0b. | Testing | This milestone will have unit-test for MMR trie, MMR proof runtime api and MMR manager. In the guide we will describe how to run these tests. |
| 1.     | MMR Trie Structure | We will implement this MMR Trie based on the exist Library. We will fork this [Repo](https://github.com/tari-project/tari/tree/development/base_layer/mmr) and realize all the functionality we need based on that. Including customlized field in MMR node, customlized merging method and MMR manager. |
| 2.    |  Substrae MMR proof runtime module           | Deliver MMR proof verification in substrate SRML runtime and provide the ability to generate and manage MMR. |
| 3.    |   AppendBlock  | Append the current block as leaf node into MMR. Method signature:  Public bool Appendblock(Header blockheader)     |
| 4.    |   RetrieveMMR | Retrieve the MMR based on the root provide.   Method signature: Public *MMR RetrieveMMR(Hash root)      |
| 5.    |   GenerateProof  | Generate the merkle branch proof in MMR. Method signature: Public *Proof GenerateProof(*MMR mmr, Leafnode leaf)      |
| 6.    |   VerifyProofByRoot  |   Verify if the proof is consistent with root. Method signature: Public bool VerifyBlockByRoot(Hash root, *Proof proof)      |
### Milestone 2 Integrate ULVP module into substrate
* **Estimated Duration:** 2 month
* **FTE:**  3
* **Costs:** $1BTC
In this milestone, we will further implement the ULVP module and some add-on module. This would involving generating and verifying succinct proof,  specifying the cross-chain transaction, implementing the cross-chain transaction pool, building P2P network based on libp2p. Once this milestone is accomplished, the whole feature of ULVP module is complete and could be used to verify inner state of certain account or transaction inclusion proof for other blockchain. We will include proper test and documentation for this milestone

| Number | Deliverable                       | Specification                                                 |
| ------ | --------------------------------- | ------------------------------------------------------------ |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can import the protocol. |
| 0c. | Testing Guide | This milestone will have unit-test for ULVP module to ensure functionality. In the guide we will describe how to run these tests.|
| 1.     |  ULVP module  |  Implement ULVP module to retrieve the transaction or state from another blockchain. We will realize all the three verification steps we mention above using the Substrate MMR module we finished in milestone 1.  |
| 2.     | P2P Relay Substrate module | Implement P2P Relay Substrate module which provide the functionality which could discover ethereum nodes and connect any ethereum node if the peer manager is not full. Once the connection has established, it use gossip to broadcast MAP parachain block announcement and cross chain transactions to ethereum, and receive message from ethereum. which contains ethereum block announcement, cross transactions, MMR Proof and Receipt Proof. |
| 3.     | Cross-chain asset transfer demo | Realized a demo to enable token transfer between Polkadot parachain(MAP bridge) and Ethereum testnet. This need first deployed a contract in Ethereum testnet which maintain the MMR root of Ethereum. Next we need to deployed a mint contract in bridge parachain and a lock contract in Ethereum. If user lock some token in Ethereum to the lock contract, any node in the bridge parachain could verify this lock transaction. And the mint contract would mint the token in parachain if the lock transaction is indeed confirmed in Ethereum testnet. |
## Future Plans
We plan to extend our bridge to most POW and POS type blockchains in the future. Through our bridge we could link more and more other blockchain systems into Polkadot Ecosystem .
