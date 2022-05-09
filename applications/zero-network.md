# W3F Grant Proposal

> See the [Grants Program Process](https://github.com/w3f/Grants-Program/#pencil-process) on how to submit a proposal.

- **Project Name:** Zero Network
- **Team Name:** Zero Network
- **Payment Address:** 0x6fA7BAB5fB3A644af160302de3Badc0958601b44 (DAI)
- **Level:** 2

## Project Overview :page_facing_up:

We would like to implement a `parachain` which specializes in privacy.

This `parachain` supports **confidential transfers** and **privacy preserving smart contracts** on the mainchain based on the `plonk`. To support privacy, the traditional blockchains need to implement L2 solutions, complex contract logic or depend on centralized security assumption. The L2 technologies often sacrifice the usability, the complex contract logic cost too much gas and development workload, and the centralized security assumption force us to believe someone you have never met before. As the solution for these problems, we are going to implement `parachain` supporting privacy on mainchain and depending on only cryptographic hardness assumption. The documentation is [here](https://zero-network.github.io/).

### Overview

Through this grant, we would like to implement confidential transaction functionalities for both transfers and smart contract executions. There are two types of privacy `confidential` and `anonymous`. In this scope, we support the `confidential` transactions which hide the input and output. The `anonymous` hides the users related to the transaction. The `anonymous` is going to be supported in the future. We provide the confidential transactions for both **transfer** and **contract execution**.

### Project Details

This `parachain` privacy preserving protocol relys on the cryptographic hardness assumptions.
There are some components consisting this system and We divide the components as following.

- `primitive`: Basic cryptography libraries necessary for the network.

- `functionality`: Confidential transactions pallets to realize the privacy.

- `module`: Developer tools to develop the confidential smart contracts and output the constraints metadata.

- `client`: Wallet libraries to transfer and execute the confidential smart contracts.

We describe the detail as following.

#### Primitive
The `primitive` provides crypto libraries necessary for `functionality` as pallet.

1. `Lifted-ElGamal` encryption pallet
2. `zk-SNARKs plonk` pallet which supports the plookup and aggregation proof on top of [`ZK-Garage/plonk`](https://github.com/ZK-Garage/plonk)
3. Encrypted balance pallet

#### Functionality
The `functionality` provides the **confidential transfers** and **confidential smart contracts** functions as pallet.

1. `Confidential Transfer` pallet
2. `Condidential Smart Contract` pallet

#### Module
The `module` provides the developer with tools and necessary libraries managing privacy application.

1. Encrypted `ink!`
2. Contract constraint builder
3. Proof generation library
4. Confidential smart contract IDE

#### Client
The `client` provides the transactor client libraries for users.

1. Key generation wallet
2. Decrypt and encrypt transaction and balance
3. Create zero knowledge proof of `plonk`
4. Confidential transfers
5. Confidential smart contracts executor

### Use Case

We explain the use case we assume.

![diagram1](https://user-images.githubusercontent.com/39494661/163749008-3ad6fa47-9771-419b-98de-7a85cedaa2c7.jpg)

### Ecosystem Fit
This is the world's first account based and `plonk` built-in `parachain` which supports confidential transactions for both transfers and contract executions only depending on the cryptographic hardness assumptions.
We can contribute to `Polkadot` network mainly in three ways.

- 1. High performance and `Polkadot` friendly cryptography primitive

Our team has been working on `zk-SNARKs` probjects for long time so we are sure that we can contribute to implement cryptography pallets  **confidential smart contracts**, **homomorphic encryption** and so on which require a high degree of skill and these will be used for many developers. Most parts of them are composed by cutting edge technologies for example `plonk` which supports **plookup** and **proof aggregation**, and encryption library which supports **somewhat homomorphic encryption** so we can catch up them. Especially, we have been working on prover time optimization using speed up algorithm, assembly and parallelize, and also exprienced implementing [`plonk`](https://github.com/AstarNetwork/plonk) as pallet so we can design the fastest encryption primitive which is `Polkadot` friendly `no_std` and [`parity SCALE Codec`](https://github.com/paritytech/parity-scale-codec) compatible.

- 2. Privacy preserving `XCMP`

We are planning to connect this blockchain to `Polkadot` as parachain after redesign and optimization. We will be able to use these blockchain functionalities in the entire network. It means that all parachain in `Polkadot` network can use privacy preserving transactions. We think that this is huge benefit for `Polkadot` network users because they can easily use the confidential transactions whatever parachain they use.

- 3. Research and development

We would like to improve privacy and scaling using cryptographic scheme. We are going to do experiment about rollup transactions and block compression for storage scaling, `Fully Homomorphic Encryption` and `MPC` for privacy. Especially the `Fully Homomorphic Encryption` will be the next hot topic we are going to focus on.

### Similar Project

There are some similar projects. We compare their features.

#### Comparison

![diagram2](https://user-images.githubusercontent.com/39494661/163749080-05ed497c-29ca-480c-a314-c7218279137c.jpg)

The most valuable point is that we implement `zero knowledge` friendly blockchain. The main problem of confidential smart contract projects is the gas limit problem. The additive homomorphic encryption and zk-SNARKs are using heavy arithmetic workload and these processes often exceed the gas limit so it's important to design the blockchain as `zero knowledge` friendly structure. To make it practical, we think that the `Substrate` is suitable for three reasons. The account base blockchain, customizable Wasm and zero knowledge scheme.

The prover side, the more simple structure we generate the zero knowledge proof, the more efficiency we get. The account base blockchain using the key value mapping so it's more efficient than `UTXO`. We can save the prover time with account based structure.

The verifier side, we need to optimize the virtual machine performing the zero knowledge function to define case specific bytecode. We can customize the bytecode and get benefit from efficiency of `Wasm` VM.

Considering both sides, the zero knowledge scheme is related deeply to calculation workload and the `zk-SNARKs` is the most efficient one but has a setup scheme. Previously, the `zk-SNARKs` setup parameters depended on circuit so we needed to setup parameters when we deployed some new contracts. It's hard to ensure that there are enough parties for each deploy contracts so almost contract base confidential smart contract project uses the `bulletproof`. However, we use the `plonk` which can generate the parameters without depending on circuit so once we setup the parameters, we can reuse that parameters for every transaction with getting profit of `zk-SNARKs` efficiency.

## Team :busts_in_silhouette:

### Team members

- Ash Whitehat
- Kirill Karbushev

### Contact

* **Contact Name:** Artree LLC
* **Contact Email:** info@artree.co.jp
* **Website:** [Artree](https://artree.co.jp/)

### Legal Structure

- **Registered Address:** 2F Hamamatutyo Dia Building, 2-2-15 Hamamatsucho, Minato-ku, Tokyo-to 105-0013, Japan
- **Registered Legal Entity:** Artree LLC.

### Team's experience

Our company is working on the blockchain scaling and information hiding technologies. We already delivered several grants with [`Astar Network`](https://github.com/astarnetwork).

- [zk-rollups](https://github.com/w3f/Grants-Program/blob/master/applications/zk-rollups.md)
- [zk-plonk](https://github.com/w3f/Grants-Program/blob/master/applications/zk-plonk.md)

### Team Code Repos

- [Zero Network](https://github.com/zero-network)
- [Ash Whitehat](https://github.com/NoCtrlZ)
- [Kirill Karbushev](https://github.com/KiriosK)

### Team LinkedIn Profiles

We are not on LinkedIn.

## Development Status :open_book:

The information about this project and what we did are following.

- The documentations about this project is [here](https://github.com/zero-network/zero-network.github.io).
- The [plonk pallet](https://github.com/PlasmNetwork/plonk) implementation.
- The [documentation](https://zero-network.github.io/) describing the details.

## Development Roadmap :nut_and_bolt:

Through this grant, we are going to develop the blockchain which supports confidential transactions for both transfers and smart contract executions.

### Overview

- **Total Estimated Duration:** 4.5 months
- **Full-Time Equivalent (FTE):**  2 FTE
- **Total Costs:** 45,000 DAI

### Milestone 1 | Confidential Transfers

- **Estimated duration:** 1.5 month
- **FTE:**  2
- **Costs:** 10,000 DAI

In `Milestone 1`, we are going to implement `confidential transfer` pallet on top of [`balance`](https://github.com/paritytech/substrate/tree/master/frame/balances) pallet. With this pallet, the user can transfer the asset with hiding input and output with `Lifted-ElGamal` encryption.

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 / GPLv3 / MIT / Unlicense |
| 0b. | Documentation | We will provide both `inline documentation` of the code and a `basic tutorial` that explains how users send the `confidential transfers`. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide Dockerfiles that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an article/tutorial/workshop that explains |
| 1. | `Lifted-ElGamal` pallet | We are going to implement `Lifted-ElGamal` pallet which allows our calculation to remain encrypted. The `Lifted-ElGamal` allows us multiple addition and one time multiplication for encrypted number. |
| 2. | `encrypted-balance` pallet | We are going to implement `encrypted-balance` pallet which allows us to store the balance encrypted by `Lifted-ElGamal` encryption. The `encrypted-balance` allows us to hide whole network user's balance. |
| 3. | `plonk` pallet | We are going to implement `plonk` pallet which allows us to use `plonk` on `Substrate`. In confidential smart contracts execution, the `plonk` need to support `lookup` and `aggregation proof`.|
| 4. | `confidential-transfer` pallet | We are going to implement `confidential-transfer` pallet which allows us to send transactions without revealing any information of it. |

### Milestone 2 | Confidential Smart Contract Executions

- **Estimated Duration:** 2 month
- **FTE:**  2
- **Costs:** 25,000 DAI

In `Milestone 2`, we are going to implement `confidential smart contract execution` pallet on top of [`contracts`](https://github.com/paritytech/substrate/tree/master/frame/contracts) pallet and [`ink!`](https://github.com/paritytech/ink).

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 / GPLv3 / MIT / Unlicense |
| 0b. | Documentation | We will provide both `inline documentation` of the code and a `basic tutorial` that explains how users send the `confidential smart contracts`. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide Dockerfiles that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an article/tutorial/workshop that explains |
| 1. | `zk-contracts` pallet | We are going to implement `zk-contracts` pallet which allows us to execute deployed contract WASM binary on top of [`contracts`](https://github.com/paritytech/substrate/tree/master/frame/contracts) pallet. |
| 2. | `zk ink!` eDSL | We are going to implement confidential smart contract `eDSL` on top of [`ink!`](https://github.com/paritytech/ink) which allows developer to develop the confidential smart contract.|
| 3. | `zk ink!` compiler | We are going to implement `zk ink!` compiler on top of [`cargo-contract`](https://github.com/paritytech/cargo-contract) which allows developer to compile and deploy the confidential smart contract.|
| 4. | `zk ink!` metadata | We are going to implement `zk ink!` metadata on top of [`ink_metadata`](https://github.com/paritytech/ink/blob/master/crates/metadata) which generate the contract constraint statement for zk contract used when the user create the proof.|
| 5. | `zk-contracts` pallet | We are going to implement `zk-contracts` on top of [`contract`](https://github.com/paritytech/substrate/tree/master/frame/contracts) pallet which allows runtime to execute deployed contracts.|
| 6. | `zk-contracts-rpc` pallet | We are going to implement `zk-contracts-rpc` pallet on top of [`pallet-contracts-rpc`](https://github.com/paritytech/substrate/tree/master/frame/contracts/rpc) pallet which allows the blockchain to have interface interacting with deployed contracts.|

### Milestone 3 | Confidential Transaction Wallet

- **Estimated Duration:** 1 month
- **FTE:**  2
- **Costs:** 10,000 DAI

In `Milestone 3`, we are going to implement `wallet` which provides the user to interact with blockchain, send transactions and manage the secret on locally.

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 / GPLv3 / MIT / Unlicense |
| 0b. | Documentation | We will provide both `inline documentation` of the code and a `basic tutorial` that explains how users participate network and send transaction. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide Dockerfiles that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an article/tutorial/workshop that explains |
| 1. | Key generation | We are going to implement key generation libraries which allow user to generate key with random and store the secret on locally. |
| 2. | ElGamal crypto utils | We are going to implement `ElGamal` encryption libaries which allow user to decrypt and encrypt transaction and balance. |
| 3. | `plonk` proof generation | We are going to implement `plonk` proof generation which allows user to create proof for circuit constraint. |
| 4. | Confidential transfer | We are going to implement confidential transfer libraries. |
| 5. | Confidential smart contract execution | We are going to implement executing smart contract libraries.|

## Future Plans

- Rollup transactions
- Compress block with zero knowledge proof
- High performance and `Polkadot` friendly `plonk` library
- Anonymous transactions
- Wasm optimization

## Additional Information :heavy_plus_sign:

- How did you hear about the Grants Program?
    - Announcement by another team
- Work you have already done.
    - [plonk pallet](https://github.com/PlasmNetwork/plonk)
- Wheter there are any other teams who have already contributed (financially) to the project.
    - No.
- Previous grants you may have applied for.
    - [zk-rollup](https://github.com/w3f/Grants-Program/blob/master/applications/zk-rollups.md)
    - [zk-plonk](https://github.com/w3f/Grants-Program/blob/master/applications/zk-plonk.md)
