# DOT & KSM mixer

* **Status:** [Under Development 1](https://github.com/w3f/Grants-Program/blob/master/applications/MIXERv2.md), [Slushie](https://github.com/w3f/Grants-Program/blob/master/applications/Slushie%20Mixer.md)

## Project Overview :page_facing_up:

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

* **Total Estimated Duration:** 6.5 months
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

* **Estimated duration:** 2 months
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

* **Estimated duration:** 2 month
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

An offline tool (written in Rust or TypeScript, TBD) that is pre-funded and accepts incoming requests.
It verifies the validity of the submitted proof & Tx. If correct, it submits the Tx to the `ink!` contract.

Also here we will write out the smart contract logic for paying out the fee `f` to relayer address `t`, once a valid Tx has been submitted. This will fall under the `withdraw` method.

### Milestone 6: Frontend

* **Estimated duration:** 1 month
* **FTE:**  1

### Milestone 7: Trusted setup ceremony (optional)

* **Estimated duration:** 0.5 month
* **FTE:**  1

## Future Plans

1. Supporting arbitrary tokens
2. ?? Wallet ??
3. Incentive layer with a token: This is akin to Tornado.cash's TORN token. This is not strictly necessary for the functioning of the project, but it serves in users' best interest. The longer they keep the tokens in the smart contract (a.k.a anonymity pool), the more tokens they accumulate, thus keeping a high anonymity set and preserving privacy. This is also the most likely way to monetize the project, e.g.:
  - 10% allocated to the founding team
  - 20% for early investors
  - 20% for public sale
  - 50% for anonymity pool
