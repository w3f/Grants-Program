[1mdiff --git a/applications/cryptex.md b/applications/cryptex.md[m
[1mindex c3811a3..1b598ac 100644[m
[1m--- a/applications/cryptex.md[m
[1m+++ b/applications/cryptex.md[m
[36m@@ -6,7 +6,11 @@[m
 [m
 ## Project Overview :page_facing_up:[m
 [m
[31m-This proposal presents a blockchain that uses a modified Aura that seals blocks using identity based signatures (BLS). We then implement an encryption-to-the-future (EtF) scheme, where messages can be encrypted for arbitrary slots and epochs in the future. Our proposal consists of a runtime, which modifies Aura and introduces a new pallet to enable the identity based cryptosystem (IBC), a light client, and an SDK which handles synchronization with the blockchain, slot scheduling, and offchain encryption and decryption functionality. In essence, this presents a simplified flavor of 'timelock encryption', though sacrifices full-decentralization for ease of implementation and feasibility (for the time being). [m
[32m+[m[32mThis is an EtF (encryption-to-the-future) network based on Aura. This proposal adds identity based signature (IBS) block seals to Aura and enables an EtF network, wherein messages can be encrypted to a slot in the future.[m
[32m+[m
[32m+[m[32m### Overview[m
[32m+[m
[32m+[m[32mThis proposal presents a blockchain that uses a modified Aura in which blocks are sealed . We then implement an encryption-to-the-future (EtF) scheme, where messages can be encrypted for arbitrary slots and epochs in the future. Our proposal consists of a runtime, which modifies Aura and introduces a new pallet to enable the identity based cryptosystem (IBC), a light client, and an SDK which handles synchronization with the blockchain, slot scheduling, and offchain encryption and decryption functionality. In essence, this presents a simplified flavor of 'timelock encryption', though sacrifices full-decentralization for ease of implementation and feasibility (for the time being).[m[41m [m
 [m
 Being the first EtF network in the ecosystem, Cryptex introduces several new cryptographic primitives which would be useful to others as well. This proposal lays the foundation for a more robust system later on, using a proof of stake consensus (Sassafras) and more sophisticated cryptographic primitives for EtF, such as [McFly](http://fc23.ifca.ai/preproceedings/189.pdf) or based on [commitment witness encryption](https://eprint.iacr.org/2021/1423.pdf). An EtF network can enable randomness beacons, sealed-bid auctions, non-interactive secret sharing, and many other use cases.[m
 [m
[36m@@ -15,13 +19,13 @@[m [mWe want to build more extensive and secure decentralized data tools, for which t[m
 ### Project Details[m
 [m
 The major pieces:[m
[31m-1. [IBS Block Seal](#ibe-block-seal-in-aura)[m
[32m+[m[32m1. [IBE Block Seals](#ibe-block-seal-in-aura)[m
 2. [Encryption-to-Future](#encryption-to-future-slots)[m
 [m
 For a more in-depth (informal) look at the mathematics behind this, look at [etf_aura.pdf](https://github.com/ideal-lab5/Grants-Program/blob/ibe/applications/etf_aura.pdf)[m
 [m
 #### What this is not[m
[31m-- this does not use a proof of stake consensus. For the scope of the proposal, we are assuming a static, well defined validator set using PoA consensus based on Aura. [m
[32m+[m[32m- For the scope of the proposal, we are assuming a static, well defined validator set using PoA consensus based on Aura.[m
 - the proposal does not highlight any specific privacy preserving tools nor does it use threshold signatures or any specific MPC protocols [m
 - most of that is scoped for the future though[m
 [m
[36m@@ -39,13 +43,9 @@[m [mFor the following, assume that we are using curve BLS12-381. As such, we will re[m
 [m
   We will use the [Boneh-Franklin identity based encryption scheme](https://crypto.stanford.edu/~dabo/papers/bfibe.pdf) (BF IBE) in this proposal in order to encrypt messages to future slots. [m
 [m
[31m-#### IBS Block Seal in Aura[m
[31m-[m
[31m-The goal of this is to introduce an IBS-BLS block seal in Aura, where each slot has a unique role associated with it that we can encrypt to. In the future, we intend to migrate to [Sassafras](https://eprint.iacr.org/2023/031.pdf). This is the first step to building encryption to the future.[m
[32m+[m[32m#### Block Seals in Aura[m
 [m
[31m-https://docs.rs/sc-consensus-aura/latest/sc_consensus_aura/[m
[31m-[m
[31m-We will create a fork of Aura, wherein blocks are sealed using identity based signatures, where each slot has a role associated with it.[m
[32m+[m[32mThe goal of this is to introduce an IBE-BLS block seal in Aura, where each slot has a unique role associated with it that we can encrypt to. In the future, we intend to migrate to [Sassafras](https://eprint.iacr.org/2023/031.pdf). This is the first step to building encryption to the future.  We will do this by creating a fork of Aura where we create a DLEQ proof of a BLS signature, which is then used to sign the block using a Fiat-Shamir transform.[m
 [m
 Assume there is a static set of validators defined on network genesis. In Aura, each validator defined in the validator set authors a block in sequential (round robin) order. More concretely, let $A = \{A_1, ..., A_n\}$ be the well defined set of authorites. For now, we'll assume that this set is static. In Aura slots are divided into discrete slots of $t$ seconds each. For any slot $s$, the winner of the slot is determined by A[s % |A|], where $A$ is the set of authorities defined on genesis. Note that this implies, in most cases, that a validator will author more than one block during an epoch.[m
 [m
[36m@@ -70,12 +70,10 @@[m [mOur implementation makes use of the [SessionManager](https://paritytech.github.i[m
   Each slot in any given epoch has a unique role associated with it, which is calculated from the slot schedule. For any given address, epoch, and slot number, we calculate a unique role by hashing the address, epoch, and slot number. Later on when encrypting, we will use this value to verify signatures. That is, the public key is $\hat{Q}_i = H(ID_i = (A_i || e_k || sl_r))$.[m
 [m
 **Block Sealing**[m
[31m-  The winner of a slot $s$ calculates a secret key corresponding to $Q_i$ and uses it to sign the block. The winner calculates a signature as $S = s_i \hat{Q}_i + r H(M)$ and $T = r P$, where $M$ is the block hash, $s_i$ is the secret distributed by the coordinator, and $r$ is randomly selected from $\mathbb{Z}_p$. We implement this within the Aura client code.[m
[32m+[m[32m  The winner of a slot $s$ calculates a secret key corresponding to the slot seed and uses it to sign the block. This operation aligns with the extract phase of the IBE.  We implement this within the Aura client code. This works by computing a DLEQ proof $\pi = (c, r)$ where $r$ is randomly selected from the scalar field and $c = H(R_1, R_2, \hat{Q}_i, S_{slot}, b)$ where $R_1 = r G_1$, $R_2 = r G_2$ (for $G_1$, $G_2$ generators of $\mathbb{G}_1$, $\mathbb{G}_2$ resp.), and $b$ is the block hash. We then use the output to produce a proof of knowledge $pok = c s_i + r$.[m
 [m
 **Validation**[m
[31m-  When other nodes import the block, they validate it by  calculating the ID for the slot and calculating the public key $Q_i$ and verifying the signature. We verify the signature by checking the pairings: $e(S, P) = e(Q_i, P_{pub}) + e(H(M), T)$. This validation logic will be executed each time a new block queued for import is validated.[m
[31m-[m
[31m-  Note: See [here](https://www.researchgate.net/publication/334001157_Extending_the_BLS_Scheme_to_Identity_Based_Signatures) for more details and proofs regarding the signatures and verification.[m
[32m+[m[32m  When other nodes import the block, they validate it by obtaining the ID for the slot and calculating the public key $Q_i$ and verifying the signature. We verify the signature by using the DLEQ proof to verify that the secret key used to seal the block was constructed by the proper slot winner.[m
 [m
 #### Encryption-to-Future-Slots[m
 [m
[36m@@ -89,7 +87,6 @@[m [mThe high level idea for encrypting to a specific slot is that given a duration o[m
 [m
 As can be seen, it will be paramount that all participants agree on the same 'time'.[m
 [m
[31m-[m
 The second type of EtF that we enable uses the threshold scheme setup in the IBS Block seal section to decrypt data. We build this off of the previous result (encryption to a slot). Here, we aggregate the public keys $\hat{Q}$ derived from each authority's identity and use the same BF IBE scheme to encrypt a message for the aggregated public key. Subsequently, using the same decryption approach as BF IBE, once at least at threshold of validators have release their key share, any messages encrypted for $\hat{Q}$ can be decrypted. [m
 [m
 ##### Implementation Details[m
[36m@@ -243,9 +240,10 @@[m [mGoal: Implement the IBS block seal in Aura. We do this by creating a new pallet[m
 [m
 | Number | Deliverable | Specification |[m
 | -----: | ----------- | ------------- |[m
[31m-| 1. | Substrate module: IBE Pallet/IBC Setup | We create a new pallet responsible for storing parameters needed for the identity based cryptosystem as detailed above. This includes param generation and distribution of secret shares for the TSS scheme. The outcome of the deliverable is the pallet capable of storing system params for the IBC, including the keygen phase managed by the SessionManager. |[m
[31m-| 2. | Substrate module: Aura Client | We modify the Aura client to sign blocks with its secret key generated with the identity based cryptosystem as detailed above. We also modify the signature validation phase of consensus to verify the IBS signatures properly. For the sake of ease, the block author will publish its secret along with the block. |[m
[31m-| 3. | Substrate Module: Validator Rewards | We ensure that validators are rewarded when they participate honestly within the protocol (i.e. publish a secret). We do this by making our token inflationary, where each block author is rewarded in additional tokens when they correctly output a secret. |[m
[32m+[m[32m| 1. | Substrate module: IBE Pallet/IBC Setup | We create a new pallet responsible for storing parameters needed for the identity based cryptosystem as detailed above. This includes param generation and distribution of the msk to authorities. The outcome of the deliverable is the pallet capable of storing system params for the IBC, including the keygen phase managed by the SessionManager. |[m
[32m+[m[32m| 2. | Substrate module: Aura Pallet | We modify the Aura pallet to be able to calculate epk's for each known session validator. Pubkeys will be calculated *on session planning* and encoded in runtime storage. |[m
[32m+[m[32m| 3. | Substrate module: Aura Client | We modify the Aura client to sign blocks with its secret key generated with the identity based cryptosystem as detailed above. We also modify the signature validation phase of consensus to verify the signature/DLEQ proof. For the sake of ease, the block author will publish its secret along with the block. |[m
[32m+[m[32m| 4. | Substrate Module: Validator Incentives | We ensure that validators are rewarded when they participate honestly within the protocol (i.e. publish a secret). We do this by making our token inflationary, where each block author is rewarded in additional tokens when they correctly output a secret. |[m
 [m
 ### Milestone 2 — Encryption to Future Slots[m
 [m
[36m@@ -259,9 +257,9 @@[m [mGoal: We want to enable encryption to future slots, including slot scheduling, e[m
 | -----: | ----------- | ------------- |[m
 | 1. | Light Client | We implement a light client (based on smoldot) with the added functionality that it: a. can open connections to specific nodes b. ensure clocks are properly set, otherwise return an error. This is to ensure proper synchronization, so that slot scheduling can be reliable/accurate. |[m
 | 2 | User Interface: setup | We introduce a user interface which will act as a testbed for integrations between the light client and the SDK. The user interface will be a React project, will connect to the network via the light client, and will interface with IPFS (for storage and retrieval of ciphertexts). This intention is to integrated both light client and SDK and also to ensure that interactions with the chain function as intended. |[m
[31m-| 3. | SDK: Slot Scheduling | We implement logic to identify a future slot based on some future 'time' and derive its inputs and to calculate the aggregated public keys so we can encrypt 'to an epoch'. |[m
[31m-| 4. | SDK: Encryption | Using an identity, the user agent will be able to encrypt to a future slot or epoch. Ciphertexts will be stored offchain in IPFS, and we will refer to stored ciphertexts by their CID. |[m
[31m-| 5. | SDK: Decryption | We implement the BF IBE decryption logic and make it callable from the SDK. |[m
[32m+[m[32m| 3. | SDK: Slot Scheduling | We implement slot scheduling logic to identify a future slot based on some future 'time' and derive its inputs. |[m
[32m+[m[32m| 4. | SDK: Encryption | Using the output of the slot scheduler, the user agent will be able to encrypt to a future slot or epoch. Ciphertexts will be stored offchain in IPFS, and we will refer to stored ciphertexts by their CID. |[m
[32m+[m[32m| 5. | SDK: Decryption | After a block is authored for the specified future slot, we can decrypt the secret by fetching the secret published with the block (if encrypted to a slot)  or a threshold of published secrets (encrypted to epoch) and using it to decrypt the ciphertext created previously. |[m
  [m
 ### Milestone 3: Putting it all together - Sealed-Bid NFT Auction PoC[m
 [m
