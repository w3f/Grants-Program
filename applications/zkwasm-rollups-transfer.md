# Zkwasm Rollups Transfer

- **Team Name:** Zkwasm Rollups Transfer
- **Payment Address:** 0x9061b0787D28d0fDaD845d670F7505EAE5F3B01B (USDT)
- **Level:** 3

## Project Overview :page_facing_up:

We would like to implement transfer rollups by **zkwasm**.

This project enables us high speed and cheap gas fee transfer transactions by **zkwasm**. The structure is similar to **zk rollup** but we use **wasm** as execution environment.

### Overview

Through this grant, we would like to implement rollup L2 envorinment for transfer transactions powered by **zkwasm**. The **zk rollup** allows us high speed and cheap gas fee transfer transactions, and to deposit asset safely. We inherit these features and execute transfer transactions on L2 **wasm** environment, and prove the validity of state transition by zero knowledge proof.
The main differences from **zk rollup** are two things.

#### General purpose rollup

The **zk rollup** is application specific and it can only execute transfer transactions. Supporting **wasm** allows us to extend to other functionalities easily as in [zkevm](https://github.com/privacy-scaling-explorations/zkevm-circuits) and we can reuse the circuit which proves the validity of **wasm** instruction set. By implementing all **wasm** ISA, we can finally prove every kind of state transition.

#### Implement verification function as built-in

The **zk rollup** is smart contract project. Users need to deposit their asset to smart contract on mainchain, transfer asset on chain after deposit is confirmed and withdraw asset from smart contract on mainchain. It's complicated process and needed a lot of developer workload. By implementing verification function as built-in, normal node can be L2, aggregate transfer transactions without any customizing and send it to verification on mainchain directly. This has huge usability benefit because users don't care about anything but just transfering asset as usual.

### Project Details

**zkwasm** depends on `cryptography primitive` and `zero knowledge proof library`.

#### Cryptography Primitive

In **zkwasm** scheme, proof generations needs heavy workload. The prover time is latency when users send transaction and verification time is gas cost for miner. We have two approach to resolve this problem. One is the optimization and the other is outsource. We already implemented curve so we would like to optimize and extend it. We are going to implement and optimize as following.

1. implement `RedDSA`
2. optimize jubjub curve
3. implement client wallet

`RedDSA` allows us to generate one time signing key which has same signature with private key. We can outsource the computation when generating proof by generating proof generation key. There are several ways to optimize jubjub so we are going to apply it to our implementation.

Finally, we are going to implement client libraries.

#### Zero Knowledge Proof Library

We generate the proof to prove the validity of **wasm** execution. To prove validity of execution, we use plonk. The main strategy is that writing circuits for each **wasm** instruction set and generate the proof. The transaction can be divided into sequence of instruction set. To prove each sequence of instruction set are executed correctly, we can prove the validity of transaction. Finally, we aggregate these proof and generate one proof. Users attach it with their transaction and blockchain verify the proof. We are going to implement following libraries to realize this scheme.

1. implement `plookup`
2. implement `recursive proof`
3. implement instruction set circuits

`plookup` allows us to reduce the complexity of instruction set by using lookup table and `recursive proof` allows us to generate one proof by aggregating proof for each instruction set.

### Ecosystem Fit

This **zkwasm** allows us to prove the validity of **wasm** state transition. In the future, we can extend it to general purpose rollup as in smart contract executions. This is totally compatible with **wasm** so every project work on **wasm** can use this library and rollup their transaction.

Our project specializes in working with Substrate and Polkadot, and if we implement cryptographic libraries and optimize these, it would be used for whole network developer.

I think this can be applied for XCMP to prove the validity of state transaction.


## Team :busts_in_silhouette:

### Team members

- Ash Whitehat
- Kirill Karbushev

### Contact

- **Contact Name:** Invers Inc
- **Contact Email:** info@invers.tech
- **Website:** [Invers](https://invers.tech/)

### Legal Structure

- **Registered Address:** 2F・3F Emblem Nishiarai, 3-33-6 Umejima, Adachi City, Tokyo-to 121-0816, Japan
- **Registered Legal Entity:** Invers Inc.

### Team's experience

Our company is working on the blockchain scaling and information hiding technologies. We already delivered several grants and implemented cryptographic primitives which are compatible `parity-scale-codec` as described in [Development Status](https://github.com/zero-network/Grants-Program/blob/**zkwasm**-rollups-transfer/applications/**zkwasm**-rollups-transfer.md#development-status-open_book).

  - [zk-rollup](https://github.com/w3f/Grants-Program/blob/master/applications/zk-rollups.md)
  - [zk-plonk](https://github.com/w3f/Grants-Program/blob/master/applications/zk-plonk.md)
  - [zero-network](https://github.com/w3f/Grants-Program/blob/master/applications/zero-network.md)

### Team Code Repos

- [Zero Network](https://github.com/zero-network)
- [Ash Whitehat](https://github.com/NoCtrlZ)
- [Kirill Karbushev](https://github.com/KiriosK)

### Team LinkedIn Profiles

We are not on LinkedIn.

## Development Status :open_book:

We already implemented cryptographic primitives which are compatible with `parity-scale-codec`.

- [zero-crypto](https://github.com/KogarashiNetwork/Kogarashi/tree/master/primitive/crypto) [![crates.io badge](https://img.shields.io/crates/v/zero-crypto.svg)](https://crates.io/crates/zero-crypto)
- [zero-jubjub](https://github.com/KogarashiNetwork/Kogarashi/tree/master/primitive/jubjub) [![crates.io badge](https://img.shields.io/crates/v/zero-jubjub.svg)](https://crates.io/crates/zero-jubjub)
- [zero-bls12-381](https://github.com/KogarashiNetwork/Kogarashi/tree/master/primitive/bls12_381) [![crates.io badge](https://img.shields.io/crates/v/zero-bls12-381.svg)](https://crates.io/crates/zero-bls12-381)
- [zero-elgamal](https://github.com/KogarashiNetwork/Kogarashi/tree/master/primitive/elgamal) [![crates.io badge](https://img.shields.io/crates/v/zero-elgamal.svg)](https://crates.io/crates/zero-elgamal)
- [zero-pairing](https://github.com/KogarashiNetwork/Kogarashi/tree/master/primitive/pairing) [![crates.io badge](https://img.shields.io/crates/v/zero-pairing.svg)](https://crates.io/crates/zero-pairing)
- [zero-plonk](https://github.com/zero-network/dusk-plonk/tree/acffa2e0af43fdaf40c0f1e4d38b6124c57f5a05) [![crates.io badge](https://img.shields.io/crates/v/zero-plonk.svg)](https://crates.io/crates/zero-plonk)

## Development Roadmap :nut_and_bolt:

Through this grant, we are going to implement the **zkwasm** which supports transfer transactions.

### Overview

- **Total Estimated Duration:** 5 months
- **Full-Time Equivalent (FTE):**  2 FTE
- **Total Costs:** 20,000 USDT

### Milestone 1 | Crypto Primitive

- **Estimated duration:** 2 month
- **FTE:**  2
- **Costs:** 10,000 USDT

In `Milestone 1`, we are going to implement `RedDSA`, optimize `Jubjub` curve and client wallet.  These can improve usability.

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide both `inline documentation` of the code and a `basic tutorial` that explains how users use the wallet and delegate proof generation. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide Dockerfiles that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an article/tutorial/workshop that explains |
| 1. | `RedDSA` implementation | We are going to implement `RedDSA`. `RedDSA` implementation allows us to generate one time signing key to encrypt zero knowledge proof witness. One time signing key doesn't have permission to transfer asset. The specification is aligned with zcash [sapling 5.4.6](https://github.com/zcash/zips/blob/main/protocol/sapling.pdf) |
| 2. | `Jubjub` curve optimization | `Jubjub` curve optimization allows us to perform elliptic curve arithmetic quickly. In our scheme, zero-knowledge prover time is latency when users send transaction and verification time is gas cost on chain. Specifically, we implement [Twisted Edwards Curves Revisited](https://iacr.org/archive/asiacrypt2008/53500329/53500329.pdf), [Jacobian Coordinates](https://eprint.iacr.org/2014/1014.pdf) and [wNAF](https://www.scitepress.org/papers/2014/50587/50587.pdf), [pippenger](https://cr.yp.to/papers/pippenger.pdf). |
|3. | Client wallet implementation |We are going to implement client wallet of `RedDSA`. With this wallet, user can generate private key and one time signing key, and delegate their proof generation, in addition to normal wallet functionalities through RPC.|

### Milestone 2 | Nova Folding Recursive Snarks Pallet

- **Estimated duration:** 3 month
- **FTE:**  2
- **Costs:** 10,000 USDT

In `Milestone 2`, we are going to implement [Nova folding scheme](https://eprint.iacr.org/2021/370.pdf) which allows light weight recursive Snarks.

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide both `inline documentation` of the code and a `basic tutorial` that explains how users implement `plookup` circuit and aggregate proofs. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide Dockerfiles that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an article/tutorial/workshop that explains |
| 1. | `bn254/grumpkin` implementation | We are going to implement fully Polkadot compatible `bn254/grumpkin` curve for efficient verifier encoder by [cycle of curves](https://eprint.iacr.org/2023/969.pdf).|
| 2. | `groth16` implementation | We are going to implement fully Polkadot compatible `groth16` for recursive Snarks verifier circuit.|
| 3. | `recursive proof` implementation | We are going to implement `recursive proof` with Nova folding scheme. `recursive proof` allows us to compress multiple statements to prove.|
| 4. | `Nova pallet` implementation | We are going to implement `Nova folding pallet`. `Nova folding pallet` allows us to verify Nova recursive proof which proves multiple statements with a single proof.|

## Timeline

| Milestone | Deliverable | Estimated Duration (month) | Deadline |
| -----: | ----------- | ------------- | ------------- |
| 1 | Crypto Primitive                     |  2  | 2023 7/31 |
| 2 | Nova Folding                         |  3  | 2023 11/30 |

## Future Plans

- Proof for XCMP
- FHE
- Verifiable hardware

## Additional Information :heavy_plus_sign:

- How did you hear about the Grants Program?
  - Announcement by another team
- Work you have already done.
    - [zero-crypto](https://crates.io/crates/zero-crypto)
    - [zero-jubjub](https://crates.io/crates/zero-jubjub)
    - [zero-bls12-381](https://crates.io/crates/zero-bls12-381)
    - [zero-elgamal](https://crates.io/crates/zero-elgamal)
    - [zero-pairing](https://crates.io/crates/zero-pairing)
    - [zero-plonk](https://crates.io/crates/zero-plonk)
    - [pallet-plonk](https://github.com/KogarashiNetwork/Kogarashi/tree/master/pallets/plonk)
    - [pallet-encrypted-balance](https://github.com/KogarashiNetwork/Kogarashi/tree/master/pallets/encrypted_balance)
    - [pallet-confidential-transfer](https://github.com/KogarashiNetwork/Kogarashi/tree/master/pallets/confidential_transfer)
    - [above documentation](https://zero-network.github.io/zero/)
- Wheter there are any other teams who have already contributed (financially) to the project.
  - No.
- Previous grants you may have applied for.
  - [zk-rollup](https://github.com/w3f/Grants-Program/blob/master/applications/zk-rollups.md)
  - [zk-plonk](https://github.com/w3f/Grants-Program/blob/master/applications/zk-plonk.md)
  - [zero-network](https://github.com/w3f/Grants-Program/blob/master/applications/zero-network.md)
