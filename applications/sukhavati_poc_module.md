# Sukhavati PoC Module

* **Team Name:** Sukhavati Labs
* **Payment Address:** 0x4756b4a72Fb08d936a9ee780f36e411B3F9E1873
* **Status:** [Terminated](https://github.com/w3f/Grants-Program/pull/340#issuecomment-937770696)

## Project Overview :page_facing_up: 

### Overview

Sukhavati is a decentralized cloud service network focused on storage. It uses the MASS Proof of Capacity (PoC) protocol as its consensus protocol so that it can reuse existing PoC capacity power and quickly establish a strong consensus layer. The MASS PoC consensus algorithm is very energy efficient. After the initialization operation, it requires only a small amount of computing and IO resource consumption to maintain high security consensus, allowing most resources to be used for other meaningful work.

Currently the MASS PoC network has a total of about 230PB in capacity power, making it the second-largest PoC network. Sukhavati takes PoC as the entry point. After incorporating a wide range of PoC miners into the consensus network, Sukhavati will continue to build the needed infrastructure to serve the Web3.0 ecosystem on these PoC devices, taking full advantage of idle computing and bandwidth resources and truly decentralized network topology. Sukhavati eventually intends to build a decentralized data access gateway that covers both Web3.0 and Web2.0 storage services and that provides unified data storage, retrieval, and management services that can meet various local compliance requirements for Web3.0 applications.

After completing the first version (which is based on the original codebase) and idea validation, Sukhavati plans to migrate to the Substrate framework (planned for Q2). The powerful and flexible features such as off-chain workers, on-chain governance and runtime upgrade provided by Substrate can bring Sukhavati great convenience and enable us to easily develop the storage and content distribution functions in the future steps.

While enjoying all these features, we would like to give back to the community by providing a PoC Module for Substrate based on the MASS PoC consensus protocol, so that any blockchain developed based on Substrate can choose to use this module to implement PoC consensus and be able to reuse existing MASS PoC capacity power. This “piggybacking” allows them to quickly have the same underlying device resources and potential influence as we do, thereby further exploiting the idle resources of the vast number of PoC mining devices. Through the implementation of this module, we hope to establish a connection between the substrate and the PoC ecosystem, giving web3.0 builders more options and room for imagination.

### Project Details 

#### Plot Algorithm and Capacity File Import

The plot algorithm will generate two HashMaps, of which the latter one is kept as the capacity file.

The plot process is as follows:

1. Generate a `root_key` through secp256k1/ECDSA
2.	Using BIP-44 to derive child key pairs `(pk, sk)` from the `root_key`
3.	Set a BitLength and runs Plot algorithm with `pk` and `BL` as follows:
    -	Generate a unique `ID = doubleSHA256(pk)` of the capacity file
    -	For each `x in [0, 2^BL-1]`, calculate `y = SHA256(‘MASS’||ID||x)`. Generate a __HashMap A__ with `y` as the index and `x` as the value
    -	For each index `y` in __HashMap A__, flip each bit of it to get `y’`, use `y’` as the index to find the corresponding `x’`
    -	For each `x in [0, 2^BL-1]` and corresponding `x’`, calculate `z = SHA256(‘MASS’||ID||x||x’)`. Generate the __HashMap B__ with `z` as the index and `(x, x’)` as the value
4.	Use __HashMap B__ as the efficient capacity

The import method can be derived from the above process:

1.	Import the existing root_key from the mass miner
2.	Load the existing capacity file
3.	Derive child keys from root_key and match the public keys with the ID of the capacity files
4.	We can now use these existing capacity files for our own PoC consensus

#### PoC Consensus Engine

##### Block Production

1.	Get challenge `c` from previous block
2.	The miner tries to find `(x, x’)` and its corresponding BitLength and ID from HashMap B that satisfies:
    -	`cuthash(c, bl) == cuthash(SHA256(‘MASS’||ID||x||x’), bl)`
    -	`cuthash(y, bl) == flipped(cuthash(y’, bl))`, where `y = SHA256(‘MASS’||ID||x)` and `y’ = SHA256(‘MASS’||ID||x’)`
3.	If the above proof is found, the miner then calculates `quality = (2^BitLength * BitLength ) / [256 - log2(H)]`, where `H = SHA256(block_timestamp // slot_length, x, x', height)`
4.	If the quality is higher than difficulty, the miner produces the block, creates the proof sig and signs the block.

##### Block Validation

When a node receives a new block, it verifies all the signatures and PoC proof as follows:

1.	Verify the block signature and capacity proof signature
2.	Get PoC proof `(x, x’, bl)`, publickey `pk` and challenge `c` from block header and verify if they satisfy:
    -	`cuthash(c, bl) = cuthash(SHA256(‘MASS’||doubleSHA256(pk)||x||x’), bl)`
    -	`cuthash(SHA256(‘MASS’||doubleSHA256(pk)||x)) = flipped(cuthash(SHA256(‘MASS’|| doubleSHA256(pk)||x’)))`
3.	Calculate quality of the proof, and verify if it’s higher than difficulty

##### Difficulty Adjustment

The desired block time is maintained by the following difficulty adjustment algorithm on every block:

`diff = parent_diff + parent_diff // 2048 * max(1 - (new_block_timestamp – last_block_timestamp) // 10, -99)`

##### Fork Choice

When there is a potential new best chain, the node checks the following rules in sequential order to make the choice:

1.	The one with greater total difficulty
2.	The one with a better proof quality
3.	The one with an earlier block timestamp
4.	If all the above conditions are the same, choose the one with a smaller block hash 

### Ecosystem Fit 

The PoS/PoC consensus mechanism is starting to attract more attention with the rise of Chia. We notice that there are some other teams who are also building PoS/PoC consensus module for substrate, such as Subspace. The main difference between our protocols is that we are not trying to create a new PoC algorithm from scratch. What we want to do is to compatibly reuse the existing PoS/PoC consensus powers to form our own consensus layer and promote our blockchain to these miners, so that we can utilize their idle resources.

In this proposal, we hope to make this capability of reusing PoS/PoC consensus power available as a substrate pallet. We believe some connection can be established between the substrate ecosystem and the PoS/PoC ecosystem, bringing more options and resources to Web3.0 builders.

After establishing the underlying infrastructure, we hope to serve the Polkadot ecosystem as a parachain or parathread and provide a data access gateway for all Web3.0 DApps.


## Team :busts_in_silhouette:

### Team members
* Sukhavati Dev Team

### Contact
* **Contact Name:** Mindaugas Savickas
* **Contact Email:** mindaugas@sukhavati.io
* **Website:** https://sukhavati.io

### Legal Structure 
* **Registered Address:** Vistra corporate Services Centre, Wickhams Cay II, Road Town, Tortola, VG1110, British Virgin Islands.
* **Registered Legal Entity:** Sukhavati Labs Ltd.

### Team's experience
- Rami: Blockchain Hardware Architect and consultant with a PhD in Electrical and Computer Engineering.

- Chen: Expert in blockchain development and crypto economy modeling.

- Hairu: Senior backend developer with over 10 years experience.

### Team Code Repos

https://github.com/Sukhavati-Labs/go-miner

https://github.com/Sukhavati-Labs/go-wallet

https://github.com/Sukhavati-Labs/web-wallet

https://github.com/Sukhavati-Labs/skt-data

https://github.com/Sukhavati-Labs/explorer

## Development Roadmap :nut_and_bolt: 

### Overview
* **Total Estimated Duration:** 3 months
* **Full-Time Equivalent (FTE):**  1.5
* **Total Costs:** 4,000 DAI

### Milestone 1 — Implement Capacity Management Pallet
* **Estimated Duration:** 4 weeks
* **FTE:**  1
* **Costs:** 1,000 DAI

This milestone will provide a PoC capacity management pallet. It allows miners to do the plot operation and import existing MASS PoC keys and capacity files.

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how to plot files and how to import existing capacity files with this module. |
| 0c. | Testing Guide | A guide describing how to run the tests covering the cases in 0b. | 
| 1. | Capacity Management Pallet | This pallet will implement features include: 1) PoC key management, 2) plotting, 3) capacity import. |
| 2. | Test | Unit test and test cases. |  

### Milestone 2 — Implement Sukhavati PoC Consensus Pallet

* **Estimated Duration:** 8 weeks
* **FTE:**  1.5
* **Costs:** 3,000 DAI

This milestone will provide a poc consensus pallet. Together with the capacity managemnt pallet in Milestone 1, developers can easily build their own chain that can reuse the MASS capacity power.

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how to use this PoC consensus engine. |
| 0c. | Testing Guide | A guide describing how to build a PoC blockchain with this module. | 
| 1. | PoC Consensus Pallet | This pallet will implement the Sukhavati PoC Consensus engine including block production, block validation, difficulty adjustment and fork choice. |
| 2. | Test | Unit test and test cases. | 


## Future Plans

1.	Research PoC/PoS power reuse, such as Chia.
2.	Help promote and develop channels of communication between blockchains based on this module and the miner community.


## Additional Information :heavy_plus_sign: 

Sukhavati Labs has raised a seed round of funding. 

We are in contact with several PoC pools and the information we have received so far shows that PoC mining devices have a substantial amount of idle resources available, and most miners are very interested in being able to further upgrade their devices in order to provide real, meaningful use.
