# Webb Mixer Extended

* **Team Name:** Webb
* **Payment Address:** 0xAC8E9305dc7AC95685c7D52E759c35aCd9eB90Ff

*The above combination of your GitHub account submitting the application and payment address will be your unique identifier during the program. Please keep them safe.*

## Project Overview :page_facing_up: 

### Overview
- We will extend our zero-knowledge mixer to support Arkworks proving backends
- We will extend our pallets to support multi currency support from ORML and pallet-assets
- We will build out the functionality for integrating this into front-end dApp applications.
- We will build out a CLI and a transaction relayer for using the mixer and securely storing notes in local DBs.
-
### Ecosystem Fit 
With newer projects using both ORML tokens and Substrate using pallet-assets, it makes sense to extend the mixer functionality to include various types of assets so that native tokens aren't the only available token for mixing.

## Team :busts_in_silhouette:

### Team members
Drew Stone
Filip Lazovic
Shady Khalifa
Ahmed Korrim
Nathan Barnavon

### Contact
- Drew Stone
- drew@webb.tools

### Legal Structure 
- 1 World Trade Center, New York City, New York 10007
- Spider Webb Tech

### Team's experience
Our team has deep experience building on Substrate and growing experience building zero-knowledge proof based applications. I have been building on Substrate for 2 years and helped launch Edgeware. We also shipped an initial grant to build out the pallets for native token support using bulletproofs zero-knowledge arguments.

### Team Code Repos
- https://github.com/webb-tools/arkworks-gadgets
- https://github.com/webb-tools/anon

### Team LinkedIn Profiles
- https://www.linkedin.com/in/drewcstone/

## Development Roadmap :nut_and_bolt: 
### Overview
* **Total Estimated Duration:** 4 months
* **Full-time equivalent (FTE):**  5 FTE
* **Total Costs:** $100,000 DAI

### Milestone 1 — Implement multi-currency, multi-backend, multi-hash support in Substrate modules and Arkworks mixer circuits
* **Estimated Duration:** 2 months
* **FTE:** 4
* **Costs:** $60,000

| Number | Deliverable | Specification |
| ------------- | ------------ | ------------- |
| 0a. | License | Apache 2.0 / MIT / Unlicense |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can (for example) spin up one of our Substrate nodes. Once the node is up, it will be possible to send test transactions that will show how the new functionality works. |
| 0c. | Testing Guide | The code will have unit-test coverage (min. 70%) to ensure functionality and robustness. In the guide we will describe how to run these tests | 
| 0d. | Article/Tutorial | We will write an article or tutorial that explains the work done as part of the grant. 
| 1. | Substrate module: Multi-Asset support for mixer | We will extend the mixer for ORML libraries and pallet-assets libraries. |
| 1a. | Substrate module: ORML support | Plug and play functionality for ORML tokens |
| 1b. | Substrate module: Pallet asset support | Plug and play functionality for Asset module |
| 2. | Substrate module: New ZKP backend support | We will add new backends to our pallets to allow users more flexibility over their target ZKP system. |
| 2a. | Substrate module: New ZKP backend support | Groth16 style proofs using BLS381, BN254 |
| 2b. | Substrate module: ZKP backend support | Bulletproof style proofs using Curve25519 |
| 2c. | Substrate module: New ZKP hash function support | More Poseidon configurations, MIMC |
| 3. | Zero-knowledge circuits | We will create new zero-knowledge circuits for mixer functionality using the Arkworks backend, which allows us to plug and play with different elliptic curves and SNARKs. |  
| 3. | Docker | We will provide a dockerfile to demonstrate the full functionality of our chain |

# Additional task details

**Pallet:**

- [ ] Create generalised structure for integrating new zero-knowledge backends into the mixer.
    - [ ]  Add support to the merkle tree pallet for circuit specific setups using arbitrary backends (Groth16, Bulletproofs)
    - [ ]  Augment mixer data structure with setup/backend.
    - [ ]  Tests
- [ ] Add multi-currency support using widely used trait implementations from ORML and pallet-assetst.
    - [ ] Add ORML token style support
    - [ ] Add pallet-asset style support
    - [ ] Augment mixer creation flow to support creation for arbitrary token types and denominations.

**Circuit**

- [ ] A hash preimage circuit
- [ ] A non-zero circuit and bounded number circuit
- [ ] A merkle tree proof verification circuit
- [ ] Support for fees inside these circuits.
- [ ] All using `arkworks`

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

- Public nullifier_hash or serial number ***sn***.
- Merkle tree root

**Private variables to Spend (fixed deposit tree)**

- Randomness
- Nullifier
- Leaf
- Proof path bits
- Proof path elements

### Other public inputs for fee-based system (for relayers)
- Fee
- Relayer
- Recipient

# Tech Stack

- [arkworks](arkworks.rs)

### Milestone 2 — Toolchain: implement relayer and WASM bindings for zero-knowledge gadgets, types API, dApp integration
* **Estimated Duration:** 1 months
* **FTE:** 5
* **Costs:** $40,000

| Number | Deliverable | Specification |
| ------------- | ------------ | ------------- |
| 0a. | License | Apache 2.0 / MIT / Unlicense |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can (for example) spin up one of our Substrate nodes. Once the node is up, it will be possible to send test transactions that will show how the new functionality works. |
| 1. | Relayer in Rust | We will build a transaction relayer that supports the relaying transactions for a fee and add support for these new pallets. |
| ~~2.~~ | ~~CLI in Rust~~ | ~~We will build out a Rust based CLI for interacting with the mixer~~ |
| ~~2a.~~ | ~~CLI Support: Note storage~~ | ~~Creation and storage of deposit notes handled by the CLI~~ |
| ~~2b.~~ | ~~CLI Support: Note spending~~ | ~~Proof generation and transaction submission to relayers or directly to the chain handled by the CLI.~~ |
| 3. | WASM bindings | We will build out necessary WASM compatible proof generation code to be reused in the browser for dApp support. |
| 3a. | WASM bindings: Web Worker support | We will build out a pipeline for integrating this logic into web workers. |
| 4. | UI Support: Multi-Asset support | We will build out multi-asset support in our UI for mixers of arbitrary token types. |
| 4a. | UI Support: Multi-Asset designs | There will be nicely designed interfaces for utilising multi-asset support. |
| 5. | UI Support: Proof generation | We will integrate WASM based proof generation bindings for generating zero-knowledge proofs in the browser application handled inside web workers. |
| 6. | API Support: Types | We will package all new types for supporting these pallest in Substrate chains in a well-documented API |
| 6a. | API Support: Usage examples | We will include examples for connecting to chains with these pallets / types and provide examples for interacting with them. |


## Future Plans
The team's plans are to keep extending the mixer to support newer backends and a variety of elliptic curves for asset based applications, governance applications, and interoperable applications.

## Additional Information :heavy_plus_sign: 
### What work has been done so far?
- We have previously delivered a grant that builds out mixer modules using the bulletproofs zero-knowledge proving system.

### Are there are any teams who have already contributed (financially) to the project?
- W3F
### Have you applied for other grants so far?
- Previous W3F grant and grant from Edgeware to integrate the previously delivered pallets into Edgeware.
