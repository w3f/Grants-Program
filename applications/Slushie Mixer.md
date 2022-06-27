# W3F Open Grant Proposal

* **Project Name:** [Slushie](https://github.com/4IRE-Labs/Slushie)
* **Team Name:** [4ire](https://github.com/4IRE-Labs)
* **Payment Address:** ERC 20 ADDRESS: 0xbb028626a2f51fd0f7be0ff5587686104dd0f6fe


## Project Overview :page_facing_up:

[Mixer RFP](https://github.com/w3f/Grants-Program/blob/master/rfps/open/mixer.md) implementation.

### Overview

Polkadot uses an account-based Tx model, which easily enables linking activity between accounts.
To preserve on-chain anonymity, the options available to the user at the moment are limited to using centralised exchanges.
It requires transferring their funds to an exchange-controlled account and withdrawing them at a later point in time, to a different account.
While it works to an extent, there are major drawbacks:
* Users need to trust the exchange in the first place
* There is a fee associated with each transaction, usually both withdrawal and deposit, and sometimes also with creating an account
* The entire process is cumbersome
* If the user wants to *mix* the whole amount, analysis tools can still correlate similar-looking values (especially taking the fees into account).

### Project Details

Conceptually, the project is similar to an Ethereum-based [tornado.cash](https://tornado.cash/). We won't describe the mechanics of that project in this application, but rather outline the differences in implementation and how it will translate to a Polkadot deployment.

1. ZK Proof system
Tornado cash uses a Groth16 proving scheme, whereas this proposal will leverage a more modern and efficient scheme Plonk.
The three main advantages of Plonk over Groth16 are:
* Faster prover time
* Smaller number of circuit constraints[^1], leading to smaller program sizes
* Trusted setup, while still required, is universal (not relevant for this project)
[^1]: for a concrete circuit proving leaf knowledge in a Merkle tree, which is essential for any mixer
2. Hash function
The advantage of building an end-product after Tornado is the opportunity to use newer hash functions, too. Specifically, we will be using a Poseidon hash function, which is more suited for ZK proof systems than Pedersen hash used in Tornado, using up to 8x less constraints per message bit [^2].
[^2]: [Poseidon Hash paper](https://eprint.iacr.org/2019/458.pdf)
3. Implementation
While we could build the smart contract with solidity and deploy on an EVM-compatible parachain, we believe that using a rust-based smart contract language brings unquestionable security benefits to the table.
There are Rust-based implementations already available of both [Plonk](https://github.com/dusk-network/plonk) and [Poseidon Hash](https://github.com/dusk-network/Poseidon252/). The challenge will be integrating these into an `ink!` contract.
Most importantly the Dusk lib uses custom data structures, that will need to be:
 - initially for testing, wrapped in local data structures and have the Spread/PackedLayout derive'd on them (due to the orphan rule you can't have non-local both struct and derive macro)
 - later, for optimisation, custom PackedLayout needs to be implemented for taking advantage of efficient storage
Aside from the core protocol (smart contracts), there are two more critical components to make it fully functional:
1. Tx Relayer: the whole idea of a mixer is that the withdrawing account can't be linked to the deposit account. This means withdrawing from an empty account which can't cover its Tx fees. This is where the relayer comes in: a user would generate the proof in the frontend portal with their own payout address and relayer's fee address as parameters, so that the relayer can't steal the funds. The relayer submits the Tx to the smart contract, which, upon verifying the correctness, would pay the amount to the user and a subtract the fee for the relayer.
2. Frontend: users should have a friendly interface (akin to Tornado.cash) to:
  - create commitments and submit them to the mixer. They should be presented with a "note" that allows them to withdraw the amount later
  - select the relayer
  - spend the notes, by submitting the necessary data to the contract for it to verify the ownership of the deposited coin

### Ecosystem Fit
The project closest to ours is [anon](https://github.com/webb-tools/anon). They are building a mixer as a substrate module as opposed to smart contracts. Furthermore, they are utilizing the Bulletproofs system in contrast to Plonk. 

## Development Roadmap :nut_and_bolt:
### Overview
* **Total Estimated Duration:** 5 months
* **Full-Time Equivalent (FTE):**  1

### Milestone 1: MerkleTree implementation and contract template
* **Estimated duration:** 0.5 month
* **FTE:**  1
1. Implement an append-only `MerkleTree` struct on 32-byte arrays as leafs, that can be imported into an `ink!` contract. Use an `ink!` built-in hash function (Blake2x256) for now.
2. Create an `ink!` contract with `deposit` function, that uses the MerkleTree as the underlying data storage and appends the commitments "deposited" to it.
3. Add the signature for the `withdraw` function. Verify that the submitted nullifier hash hasn't been "spent" yet.
4. Emit the `Deposit` and `Withdraw` events.
### Milestone 2: Integrate Poseidon hash
* **Estimated duration:** 0.5 month
* **FTE:**  1
Replace Blake2x256 with [Poseidon](https://github.com/dusk-network/Poseidon252/) hash algorithm.
### Milestone 3: Plonk prover CLI tool (compiles to WASM)
* **Estimated duration:** 1.5 months
* **FTE:**  1
 
Create a CLI tool that takes as inputs:
- the prover key `d_p`(hardcoded for now; later generated from a trusted setup ceremony)
- leaf index `l`
- the merkle tree opening for leaf `l` and a root `R` from history
- nullifier `k`
- randomness `r`
- payout address `A`
- relayer address `t`
- relayer fee `f`
And produces a ZK proof `P`. The tool can be compiled to WASM for future inclusion in the frontend component.
Utilise [Dusk's Plonk implementation](https://github.com/dusk-network/plonk) as much as possible.
### Milestone 4: `withdraw` method & Plonk verifier in `ink!`
* **Estimated duration:** 2 months
* **FTE:**  1
To withdraw a coin, a user needs to submit a proof that they know the randomness & nullifier, i.e. they are the true owners of the coin.
The `withdraw` method of the mixer ensure that the nullifier `k` has not been spent yet (by storing the previously spent nullifier hashes).
Critically, the method delegates the checking of the proof to the verifier (another method), which takes as inputs:
- the verifier key `d_v` (hardcoded for now; later generated from a trusted setup ceremony)
- ZK Proof `P` generated by the prover
- Root `R`
- hash `h` of the nullifier `k`
- payout address `A`
- relayer address `t`
- relayer fee `f`
It returns true if the proof `P` satisfies the public values (the rest of the inputs)
Utilise [Dusk's Plonk implementation](https://github.com/dusk-network/plonk) as much as possible.
### Milestone 5: Relayer
* **Estimated duration:** 0.5 month
* **FTE:**  1
An offline tool (written in Rust) that is pre-funded and accepts incoming requests.
It verifies the validity of the submitted proof & Tx. If correct, it submits the Tx to the `ink!` contract (using `subxt`, `substrate-api-client` or other crates).
Also here we will write out the smart contract logic for paying out the fee `f` to relayer address `t`, once a valid Tx has been submitted. This will fall under the `withdraw` method.

## Future Plans
Frontend application development, Trusted setup ceremony, potential integration with big DeFi ecosystem projects to allow private transactions

## Team :busts_in_silhouette:

### Team members
**Kyrylo Gorokhovskyi** (CTO and Blockchain solution architect)
**Volodymyr Antonov** (Blockchain Rust Engineer)
**Nino Lipartia** (Cryptography Engineer)
**Arthur Torosian** (Backend developer)

### Contact
* **Contact Name:** Kyrylo Gorokhovskyi
* **Contact Email:** k.gorokhovskyi@4irelabs.com
* **Website:** https://4irelabs.com

### Legal Structure
* **Registered Address:** Tallinn, Kesklinna linnaosa, Tuukri tn 19-315, 10152, Estonia
* **Registered Legal Entity:** 4ire DApps OU 

### Team Code Repos
* https://github.com/4IRE-Labs
https://github.com/Kyrylog
https://github.com/azazak123
https://github.com/NinoLipartiia4ire
https://github.com/artur-torosian-4irelabs

### Team LinkedIn Profiles (if available)
https://www.linkedin.com/mwlite/in/kyrylo-gorokhovskyi-9b33701
https://www.linkedin.com/mwlite/in/nino-lipartiia-428302236
https://www.linkedin.com/mwlite/in/artur-torosian-222b64100
## Development Status :open_book:
The project is on internal discovery phase.

## Development Roadmap :nut_and_bolt:

### Overview
**We have decided to describe a full roadmap of the Slushie project here, with estimates.**

* **Total Estimated Duration:** 5 months
* **Full-Time Equivalent (FTE):** 1
* **Total Costs:** 50000 USD

### Milestone 1 - MerkleTree implementation and contract template

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide both inline documentation of the code and a README with the details of our Merkletree implementation. |
| 0c. | Tests | The tests will be presented as unit tests, and instructions on how to run them will be referenced in the README file. |
| 1. | MerkleTree struct | Implement an append-only MerkleTree struct on 32-byte arrays as leafs, that can be imported into an ink! contract. Use an ink! built-in hash function (Blake2x256) for now. |
| 2. | Contract creation | Create an ink! contract with deposit function, that uses the MerkleTree as the underlying data storage and appends the commitments “deposited” to it. |
| 3. | Withdraw function signature | Add the signature for the withdraw function. Verify that the submitted nullifier hash hasn’t been “spent” yet. |
| 4. | Add events | Emit the Deposit and Withdraw events. |

### Milestone 2 - Integrate Poseidon hash

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide both inline documentation of the code and reference the used algorithm in the README. |
| 0c. | Tests | The tests will be presented as unit tests, and instructions on how to run them will be referenced in the README file. |
| 1.  | Replace Blake2x256 hash with the Poseidon hash | Replace Blake2x256 with [Poseidon](https://github.com/dusk-network/Poseidon252/) hash algorithm. |

### Milestone 3 - Plonk prover CLI tool (compiles to WASM)


| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | MPL-2.0 |
| 0b. | Documentation | We will provide both inline documentation of the code. Also, we will provide the documentation for the CLI params, and the usage guide. |
| 0c. | Tests | The tests will be presented as unit tests, and instructions on how to run them will be referenced in the README file. |
| 1.  | The CLI app | Create the CLI app to later include the proof generation logic |
| 2.  | Proof production logic | Create Plonk proofs from the given data (prover key, randomness etc.) |

### Milestone 4: `withdraw` method & Plonk verifier in `ink!`

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | MPL-2.0 |
| 0b. | Documentation | We will provide both inline documentation of the code and reference the used algorithm in the README. |
| 0c. | Tests | The tests will be presented as unit tests, and instructions on how to run them will be referenced in the README file. |
| 1.  | Plonk verifier | Ink! contract logic that verifies provided proofs |
| 2.  | Withdrawal contract logic | Add contract logic for coins withdrawal and saving used nullifier |

### Milestone 5: Relayer

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | MPL-2.0 |
| 0b. | Documentation | We will provide both inline documentation of the code and reference the used algorithm in the README. |
| 0c. | Tests | The tests will be presented as unit tests, and instructions on how to run them will be referenced in the README file. |
| 1.  | Relayer service | Service for validating transactions and proofs and relaying them to a blockchain for a fee |
| 2.  | Fee logic | Change in a contract to pay a fee to the relayer |

### Current work - Scope of this Grant
## Additional Information :heavy_plus_sign:
**How did you hear about the Grants Program?** Substrate Builders Program! 
