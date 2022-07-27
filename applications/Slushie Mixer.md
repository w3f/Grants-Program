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
There are Rust-based implementations already available of both [Plonk](https://github.com/dusk-network/plonk) and [Poseidon Hash](https://github.com/dusk-network/Poseidon252/). In the scope of this project, we will reuse those implementations in ink!-based smart contracts to build a usable product.
Aside from the core protocol (smart contracts), there are two more critical components to make it fully functional:
    1. Tx Relayer: the whole idea of a mixer is that the withdrawing account can't be linked to the deposit account. This means withdrawing from an empty account which can't cover its Tx fees. This is where the relayer comes in: a user would generate the proof in the frontend portal with their own payout address and relayer's fee address as parameters, so that the relayer can't steal the funds. The relayer submits the Tx to the smart contract, which, upon verifying the correctness, would pay the amount to the user and a subtract the fee for the relayer.
    2. Frontend: users should have a friendly interface (akin to Tornado.cash) to:
          - create commitments and submit them to the mixer. They should be presented with a "note" that allows them to withdraw the amount later
          - select the relayer
          - spend the notes, by submitting the necessary data to the contract for it to verify the ownership of the deposited coin

The end goal of this grant is a deployed set of smart contracts on some ink!-supporting testnet (like [Shibuya](https://shibuya.subscan.io/)) and a deployed Relayer.
Since this grant only covers smart contracts, CLI & relayer development, we plan to include the frontend into the follow-up grant application, which would turn this set of smart contracts into a user-friendly application.

### Ecosystem Fit
The project closest to ours is [anon](https://github.com/webb-tools/anon). They are building a mixer as a substrate module as opposed to smart contracts. Furthermore, they are utilizing the Bulletproofs system in contrast to Plonk. 

## Development Roadmap :nut_and_bolt:
### Overview
* **Total Estimated Duration:** 3 months
* **Full-Time Equivalent (FTE):**  1

### Milestone 1: ink! contract with Poseidon-based MerkleTree storage
* **Estimated duration:** 0.5 month
* **FTE:**  1
* **Cost:** 5000 USDT 
1. Create an `ink!` contract with `deposit` function, that uses the MerkleTree as the underlying data storage and appends the commitments "deposited" to it. The MerkleTree will use some Poseidon implementation (e.g., [neptune](https://github.com/filecoin-project/neptune), [poseidon252](https://github.com/dusk-network/Poseidon252) or alike).
2. Add the signature for the `withdraw` function. Verify that the submitted nullifier hash hasn't been "spent" yet.
3. Emit the `Deposit` and `Withdraw` events.
### Milestone 2: Plonk prover CLI tool (compiles to WASM)
* **Estimated duration:** 1 month
* **FTE:**  1
* **Cost:** 10000 USDT
 
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
As [Dusk's Plonk implementation](https://github.com/dusk-network/plonk) already compiles to WASM, the only thing left is to write the code that constructs Zero-Knowledge proofs according to our input parameters.
### Milestone 3: `withdraw` method & Plonk verifier in `ink!`
* **Estimated duration:** 1 month
* **FTE:**  1
* **Cost:** 10000 USDT

To withdraw a coin, a user needs to submit a proof that they know the randomness & nullifier, i.e. they are the true owners of the coin.
The `withdraw` method of the mixer ensures that the nullifier `k` has not been spent yet (by storing the previously spent nullifier hashes).
Critically, the method delegates the checking of the proof to the verifier (another method), which takes as inputs:
- the verifier key `d_v` (hardcoded for now; later generated from a trusted setup ceremony)
- ZK Proof `P` generated by the prover
- Root `R`
- hash `h` of the nullifier `k`
- payout address `A`
- relayer address `t`
- relayer fee `f`
It returns true if the proof `P` satisfies the public values (the rest of the inputs)
We will utilise [Dusk's Plonk implementation](https://github.com/dusk-network/plonk) to do the verification for us.
### Milestone 4: Relayer
* **Estimated duration:** 0.5 month
* **FTE:**  1
* **Cost:** 5000 USDT

An offline tool (written in Rust) that is pre-funded and accepts incoming requests.
It verifies the validity of the submitted proof & Tx. If correct, it submits the Tx to the `ink!` contract (using `subxt`, `substrate-api-client` or other crates).
Also here we will write out the smart contract logic for paying out the fee `f` to relayer address `t`, once a valid Tx has been submitted. This will fall under the `withdraw` method.

## Future Plans
Frontend application development, Trusted setup ceremony, potential integration with big DeFi ecosystem projects to allow private transactions

## Team :busts_in_silhouette:

### Team members
**Kyrylo Gorokhovskyi** (CTO and Blockchain solution architect)
**Volodymyr Antonov** (Blockchain Rust Engineer)
**Nino Lipartia** (Cryptography Engineer, Rust Engineer)


### Contact
* **Contact Name:** Kyrylo Gorokhovskyi
* **Contact Email:** k.gorokhovskyi@4irelabs.com
* **Website:** https://4irelabs.com

### Legal Structure
* **Registered Address:** Tallinn, Kesklinna linnaosa, Tuukri tn 19-315, 10152, Estonia
* **Registered Legal Entity:** 4ire DApps OU 

### Team Code Repos
* https://github.com/4IRE-Labs
* https://github.com/Kyrylog
* https://github.com/azazak123
* https://github.com/NinoLipartiia4ire


### Team LinkedIn Profiles (if available)
* https://www.linkedin.com/mwlite/in/kyrylo-gorokhovskyi-9b33701
* https://www.linkedin.com/mwlite/in/nino-lipartiia-428302236

## Development Status :open_book:
The project is on internal discovery phase.

## Development Roadmap :nut_and_bolt:

### Overview
**We have decided to describe a full roadmap of the Slushie project here, with estimates.**

* **Total Estimated Duration:** 3 months
* **Full-Time Equivalent (FTE):** 1
* **Total Costs:** 30000 USDT

### Milestone 1 - ink! contract with Poseidon-based MerkleTree storage
**Duration:** 0.5 months
**Costs:** 5000 USDT
**Programming languages:** ink!, Rust

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | MPL-2.0 |
| 0b. | Documentation | We will provide both inline documentation of the code and a README with the details used libraries & contract structure. |
| 0c. | Tests | The tests will be presented as unit tests, and instructions on how to run them will be referenced in the README file. |
| 1. | ink! contract with MerkleTree storage | Create an ink! contract that stores internal data (commits, nullifiers, etc.) as a Merkle Tree, add signature for "deposit" function |
| 2. | Change hash type of the Merkle Tree to some Poseidon implementation | Change hash type for the Merkle Tree to some Poseidon implementation (Dusk's [Poseidon252](https://github.com/dusk-network/poseidon252), [Neptune](https://github.com/filecoin-project/neptune)) |
| 3. | Withdraw function signature | Add the signature for the withdraw function. Verify that the submitted nullifier hash hasn’t been “spent” yet. |
| 4. | Add events | Emit the Deposit and Withdraw events. |


### Milestone 2 - Plonk prover CLI tool (compiles to WASM)

**Duration:** 1 month
**Costs:** 10000 USDT
**Programming languages:** Rust

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | MPL-2.0 |
| 0b. | Documentation | We will provide both inline documentation of the code. Also, we will provide the documentation for the CLI params, and the usage guide. |
| 0c. | Tests | The tests will be presented as unit tests, and instructions on how to run them will be referenced in the README file. |
| 1.  | The CLI app | Create the CLI app to later include the proof generation logic |
| 2.  | Proof production logic | Create Plonk proofs from the given data (prover key, randomness etc.) |

### Milestone 3: `withdraw` method & Plonk verifier in `ink!`

**Duration:** 1 month
**Costs:** 10000 USDT
**Programming languages:** ink!, Rust

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | MPL-2.0 |
| 0b. | Documentation | We will provide the inline documentation of the code and docs for the verifier separately. |
| 0c. | Tests | The tests will be presented as unit tests, integration tests using `polkadot.js` / `redspot` (TBD) and instructions on how to run them will be referenced in the README file. |
| 1.  | Plonk verifier | ink! contract logic that verifies provided proofs |
| 2.  | Withdrawal contract logic | Add contract logic for withdrawing coins and saving the used nullifier |

### Milestone 4: Relayer

**Duration:** 0.5 months
**Costs:** 5000 USDT
**Programming languages:** Rust


| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | MPL-2.0 |
| 0b. | Documentation | We will provide both inline documentation of the code and quick walk-through of the service. |
| 0c. | Tests | The tests will be presented as unit tests, and instructions on how to run them will be referenced in the README file. |
| 1.  | Relayer service | Service for validating transactions and proofs and relaying them to the blockchain for a fee |
| 2.  | Fee logic | Change in a contract to pay a fee to the relayer from the transferred funds directly |

### Current work - Scope of this Grant
## Additional Information :heavy_plus_sign:
**How did you hear about the Grants Program?** Personal recommendation
