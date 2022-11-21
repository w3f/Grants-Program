# Webb Mixer

* **Team Name:** Webb
* **Payment Address:** 0xAC8E9305dc7AC95685c7D52E759c35aCd9eB90Ff

*The above combination of your GitHub account submitting the application and payment address will be your unique identifier during the program. Please keep them safe.*

## Project Overview :page_facing_up: 

### Overview
- We will design and develop a zero-knowledge mixer with no trusted setup in a series of pallets.
- We will integrate this to a Substrate node.
- We like zkps and deploying tech.

### Project Details 
https://www.notion.so/hicommonwealth/W3F-Open-Grants-1-4a26651baefb488ba5db3734920f8de0

### Ecosystem Fit 
Everyone else is doing some DeFi stuff (with respect to ZKP). I think the innovations that can be made here are more interesting.

## Team :busts_in_silhouette:

### Team members
Drew Stone
Filip Lazovic
Shady Khalifa
1 other member

### Contact
- Drew Stone
- drew@commonwealth.im
- https://commonwealth.im

### Legal Structure 
- 1 World Trade Center, New York City, New York 10007
- Commonwealth Labs

### Team's experience
Our team has deep experience building on Substrate and growing experience building zero-knowledge proof based applications. I have been building on Substrate for 2 years and helped launch Edgeware. Shady worked on Sunshine Protocol as well.

### Team Code Repos
- https://github.com/edgeware-builders/bulletproofs
- https://github.com/edgeware-builders/anon

### Team LinkedIn Profiles
- https://www.linkedin.com/in/drewcstone/

## Development Roadmap :nut_and_bolt: 
### Overview
* **Total Estimated Duration:** 1 months
* **Full-time equivalent (FTE):**  3-4 FTE
* **Total Costs:** $30,000 DAI/USDC/ETH/DOTS

### Milestone 1 — Implement Substrate Modules and circuits
* **Estimated Duration:** 1 month
* **FTE:**  4
* **Costs:** $30,000

| Number | Deliverable | Specification |
| ------------- | ------------ | ------------- |
| 0a. | License | Apache 2.0 / MIT / Unlicense |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can (for example) spin up one of our Substrate nodes. Once the node is up, it will be possible to send test transactions that will show how the new functionality works. |
| 0c. | Testing Guide | The code will have unit-test coverage (min. 70%) to ensure functionality and robustness. In the guide we will describe how to run these tests | 
| 0d. | Article/Tutorial | We will write an article or tutorial that explains the work done as part of the grant. 
| 1. | Substrate module: SparseMerkleTree (SMT) | We will create a Sparse Merkle Tree module that will support a standard interface for interacting with Merkle Trees |  
| 2. | Substrate module: Mixer | We will create a Mixer module that will facilitate a deposit/withdraw functionality for mixing a token. |  
| 4. | Substrate chain | Modules SMT/Mixer of our custom chain will interact in such a way, allowing a user to deposit native tokens into the mixer and withdraw them with a valid zero-knowledge proof. |  
| 5. | Docker | We will provide a dockerfile to demonstrate the full functionality of our chain |

*Additional details about modules*
# Goal

To build a pallet on top of the zero-knowledge merkle membership pallet that supports the following functionality.

- Deposit - a user can deposit **N** tokens into the pallet and create a leaf in a merkle tree.
- Withdraw - a user can withdraw **N** tokens by providing proof data for a zk-proof.
- Withdraw_with_reward - a user can withdraw **N** tokens by providing proof data of a deposit **at least T** blocks in the past and receive a token reward (tbd how we create the useless asset)

To build a front-end interface for using this that supports creating and storing the secret data in the browsers local storage.

[https://github.com/kobigurk/wasm_proof](https://github.com/kobigurk/wasm_proof)

- Write WASM bindings to rust functions for creating random points on the scalar field for Curve25519.
- Develop simple interface (similar to tornado cash)
- Generate random data for hashing to a leaf and present the user with the byte strings (concatenated) to be saved. Instruct the user that this will not be saved in local storage and losing it will result in losing the ability to withdraw/prove deposits exist.

# Tasks

**Pallet:**

- [ ]  Start new pallet using functions and interfaces defined above @Drew Stone
    - [ ]  Add events to the pallet for the client @Drew Stone
    - [ ]  Create new mixer groups by initialisation @Drew Stone
    - [ ]  Deposit into a mixer group @Drew Stone
    - [ ]  Withdraw from mixer group @Drew Stone
    - [ ]  Add permissions so that actions for mixer groups must occur from mixer pallet @Drew Stone
    - [ ]  Tests
- [ ]  Create a standard Sparse Merkle tree palet
    - [ ]  Standard interface that generalises over the hash function being used
    - [ ]  Standard interface that generalises over the indexing function being used
    - [ ]  Uses pallet storage as backend if selected by tree creator
    - [ ]  Should support standard merkle tree operations (insert, get, verify)

**Circuit**

- [ ]  A hash preimage circuit
- [ ]  A non-zero circuit and bounded number circuit
- [ ]  A merkle tree proof verification circuit
- [ ]  All using `curve25519-dalek`

# Zero-knowledge Circuit

### Merkle Tree

Definitions: Secret Key(S), Public key(P), Nullifier (N), Leaf(L), Hash function(H), Secret Key  (SC), Public Key (PC), Merkle Root (R), Merkle Path (MP), Circuit Proof (ZKP)

- Leaf insert: User calculates L = H(S, N), submits L to the tree (add_member func)
- Proof of creation:
    - User submits L, SC, N, verifier calculates if H(SC, N) == L
    - Public: N
    - Private: S, L (really L gets replaced with path in membership section)
    - Relation: H(S, N)=L
- Proof of membership: User submits the path in zero knowledge
    - Public: R
    - Private: MP - Vec<(Scalar, u8)>
    - Relation: compute_root(H(S,N), MP) = R
- Verify:
    - User submits N, ZKP
    - If N exists, return
    - If N doesn't exist, store it if successful verification

### Commitments (leaves) in merkle trees

**Public variables to Spend (fixed deposit tree)**

- Public nullifier_hash or serial number ***sn***.
- Merkle tree root

**Private variables to Spend (fixed deposit tree)**

- Randomness
- Nullifier
- Leaf
- Proof path bits
- Proof path elements

**Public variables to Spend for each input coin (variable deposit tree)**

- Public nullifier_hash or serial number ***sn***.
- Input serial number
- Merkle tree root

**Private variables to Spend for each input coin (variable deposit tree)**

- inverse value
- value
- rho
- randomness
- nullifier
- Proof path bits
- Proof path elements

**Public variables to Spend for each output coin (variable deposit tree)**

- Output commitment number

**Private variables to Spend for each output coin (variable deposit tree)**

- inverse value
- value
- rho
- randomness
- nullifier

# Tech Stack

- [bulletproofs](https://github.com/edgeware-builders/bulletproofs)

## Future Plans
The team's future plans are to build zero-knowledge products with extensible UIs and composable runtime primitives. We want to explore governance in zero-knowledge and we see mixers as being the core primitives towards this pursuit.

## Additional Information :heavy_plus_sign: 
Nope

### What work has been done so far?
- We have spent a decent amount of time researching available tools, creating sample circuits, and playing around with all the concepts and tools mentioned in this document. Currently, no part is deployable or composable as we would want to get this system to.
### Are there are any teams who have already contributed (financially) to the project?
- No
### Have you applied for other grants so far?
- One very long ago which I don't think we ever proceeded with.
