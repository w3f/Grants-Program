# Open Grant Proposal
* **Project:** CipherEX
* **Proposer:**  Pawn
* **Payment Address:**  DAI: 0x450b7251B9c1dBA8b16056558E445F8bc179Cc11
## Project Overview :page_facing_up:
### Overview
This project deliver a privacy preserving data sharing pallet(CipherEX) based on proxy re-encryption technology in Polkadot Ecosystem. 

 If someone want to send a secret data to another, the tradition solution is using Diffie-Hellman Key exchange to generate a shared key and then they can encode the secret data using the shared key with symmetric encryption scheme such AES. 

Instead of  Diffie-Hellman Key exchange, in our proposal we will use a threshold proxy re-encryption technology to transport the symmetric key which used for symmetric encryption. The idea comes from this [paper](https://github.com/nucypher/umbral-doc/blob/master/umbral-doc.pdf) .  And based on this ,we could design a "fair exchange" of secret data under a "Proxy-exist" setting.



### Project Description
+ Suppose Alice want to sell a piece of secret data to Bob in exchange of Dot in Polkadot Ecosystem. Alice first encapsulate  his public key(pk_a) to generate a symmetric key(Skey) and a Capsule. After that she could use Skey to encode his secret into EncData using symmetric encryption scheme. And once this preparation is done she could upload EncData and Capsule in a storage layer, say IPFS.
+ Now if Bob want to purchase this secret data, he need to send a Lock transaction in parachain. This lock transaction would include Bob's public key(pk_b) and lock some token from Bob. This lock transaction could be unlocked once it accumulate enough unlock transactions from collator(also proxy in our setting) .
+ When Alice see Bob's lock transaction, she would generate re-encrypt key using Bob's Public key. Here we use Shamir's secret sharing to divide the key into N pieces(key_1,key_2,...key_N), and later Bob need m pieces to recover Skey. And Alice need to send these key to N randomly select collator(could use Follow-The-Satoshi algorithm to select collator here).
+ The collator need to  Re-Encapsulate key_i and capsule into cipher_i and send a unlock transaction in parachain. The unlock transaction contain the information of cipher_i and his signature. 
+ When there are enough unlock transaction in the parachain ,the locked token would be issue to Alice and at the same time Bob would be able to collect enough cipher_i(at least m).
+ Bob first download the EncData and Capsule from IPFS.  Then he could recover Skey using his private key (sk_b), Capsule and m pieces of cipher_i. Once Bob recover Skey, he could use it to decode EncData. Finally, Bob get the secret data from Alice. And Alice get token from Bob.
+ The description figure of the whole procedure is here:
 ![dci](https://github.com/pawnz0/Documentation/blob/2cead2c261fc4c6930319e8684bc8b509608ab82/Figures/exchange.png?raw=true)

+ We plan to choose the sr25519 curve for our EC curve since it's a pairing-friendly curve and compatible with Polkadot system. And we would choose the AES-256-GCM scheme for the symmetric-key encryption scheme. 


### Ecosystem Fit
## Team :busts_in_silhouette:
### Team members
* Pawn
* Terence

### Team's experience
* Pawn: current pursuing PHD degree in cryptography from UCAS. Familiar with most cryptographic technology such as Fully Homomorphic Encryption,  Zero Knowledge Proof and Secure Multi-party Computation. 
* Terence: over five years coding experience, proficient in blockchain development. Familiar with Go and Rust blockchain related implementation. 

### Team Code Repos
* https://github.com/pawnz0/CipherEX
## Development Roadmap :nut_and_bolt:
### Overview
* **Total Estimated Duration:** 3 month
* **Full-time equivalent (FTE):** 2
* **Total Costs:** $ 20000 DAI.

### Milestone 1 Implement Proxy Re-encryption Library in Rust
* **Estimated Duration :**1 month
* **FTE :**  2
* **Costs:** 5000 DAI

| Number | Deliverable                          | Specification                                                |
| ------ | ------------------------------------ | ------------------------------------------------------------ |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide both documentation of the code and a basic tutorial that explains how a user can use the library. |
| 0c. | Testing Guide | This milestone will have unit-test for each function to ensure functionality. In the guide we will describe how to run these tests.|
| 1.     | Key Generation | This function would take a random seed as input and output a pair of private and public keys(sk_a,pk_a). |
| 2.     | Re-encryption key generation | This function would take the private key of the sender(sk_a), the public key of the receiver(pk_b), total number(N) of key fragments and a minimal threshold (t) required for recovering the plain-text as input, it can generate N key fragments(K1,K2,K3...KN) |
| 3.     | Encapsulate   | This function would take the public key of the sender(pk_a) as input, and it can output a symmetric key(SKey) which can be used for DEM encryption later and a Capsule that allows to decapsulate the symmetric key. |
| 4.     | Decapsulate | This function would take the private key(sk_a) of the sender and the Capsule as input, and it would output the symmetric key (SKey). |
| 5.     | Re-Encapsulate | This function would take the one key fragments(key_i) and capsule as input, and it would generate one piece of re-encrypted cipher-text (cipher_i) |
| 6.     | Re-Decapsulate | This function would take the any t pieces of re-encrypt cipher-text (c1,c2,..ct), Capsule and private key of receiver(sk_b) as input, and it would output the symmetric key (SKey) |
| 7.     | Encode   | This function would take a symmetric key(SKey) and the shared data(Secret) as input, it would output an encode data(EncData) |
| 8.     | Decode   | This function would take a symmetric key(SKey) and the encode data(EncData) as input, it would output the shared data(Secret). |


### Milestone 2 Implement CipherEX Pallet
* **Estimated Duration :**2 month
* **FTE :**  2
* **Costs:** 15000 DAI

| Number | Deliverable                          | Specification                                                |
| ------ | ------------------------------------ | ------------------------------------------------------------ |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide both documentation of the code and a basic tutorial that explains how a user can use the pallet. |
| 0c. | Testing Guide | This milestone will have unit-test for each module to ensure functionality. In the guide we will describe how to run these tests.|
| 1.     | Data Seller module | This module would include all the functionality which Alice needed. 1. Encapsulate 2. Encode 3. KeyGen 4. Upload EncData and Capsule 5. Send key_i |
| 2.     | Proxy module | This module would include all the functionality which proxy/collator needed. 1. ReEncapsulate 2. Send Unlock transaction |
| 3.     | Data Buyer module  | This module would include all the functionality which Bob needed. 1. Send Lock transaction 2. Collect Cipher_i  3. Download EncData and Capsule  4. ReDecapsulate 5. Decode |

## Future Plans

We would need design Economic incentive mechanism for proxy in the future as well as some slash rules for Proxy if they misbehave. Also we need to involve zero-knowledge proof to ensure Alice and Proxy not cheat. Besides, we plan to use FHE(Fully Homomorphic Encryption) in the future to let Bob do some computation based on Alice's data while keep the data a secret from Bob. 
