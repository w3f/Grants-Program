# Nullifier Prime: Compliant and Programmable Privacy

- **Team Name:** NP Labs
- **Payment Details:**
  - **DOT**: 15mXzKEjNF8mMQA7hprb7MaFRu9iWNsTsr3CsXsG5iryBkbo
  - **Payment**: Fiat, details to be shared upon approval
- **Level:** 3

## Project Overview :page_facing_up:

### Overview

Nullifier Prime is a pragmatic approach to programmable and compliant privacy for blockchain applications. Our solution combines features of the Ethereum Virtual Machine (EVM) with a Zcash-like middleware for protecting assets at rest, automatically shielding and unshielding assets before and after smart contract interactions.

While private transfers on blockchains have been solved through solutions like ZCash since 2016, programmable privacy (maintaining anonymity while using smart contracts) remains a challenge. Current solutions face trade-offs between privacy and composability, with complex technical implementations that are difficult for developers to work with.

Current shielding pools implemented as smart contracts are prohibitively expensive, as they must emulate complex cryptographic primitives through EVM opcodes. More critically, these solutions demand specialized technical expertise from users to maintain privacy guarantees. Users must navigate a cumbersome process of key generation, management, and manual shielding/unshielding of assets, while carefully splitting funds to avoid information leakage.

We're developing the first-ever "no-click privacy" solution, where users can seamlessly interact with smart contracts without managing privacy operations themselves. Our wallet automatically handles the entire privacy lifecycle—shielding assets, unshielding when needed, and implementing randomized fund splitting strategies—all without requiring user intervention or technical knowledge.

Our project integrates with the Polkadot/Substrate ecosystem by forking the Frontier framework to deploy a Substrate-compatible EVM+ parachain. The privacy features will enhance the functionality of Substrate-based chains which can natively interact with Nullifier Prime.

Our team is interested in creating this project because we believe programmable privacy is one of the largest untapped markets in the blockchain space. It enables not only consumer adoption but also opens the door to institutional players for whom compliant privacy is a fundamental requirement.

While we believe that fully permissionless privacy is the future, we believe that the current market is ready for a pragmatic approach that protects the user's activity from the broad public, while revealing it to the relevant authorities. Our goal is not to advocate for any particular authority, but rather build the tooling that enables various use cases, including 1) a single authority (e.g. a KYC provider) that can monitor the activity of its citizens, 2) offchain consortium of regulators that can collectively deanonymize transactions via a multisig, 3) onchain governance of privacy parameters. Long term, we believe that tools like verifiable AML (using zkML) will become a standard part of the blockchain stack, allowing for permissionless privacy for the entire ecosystem.

### Project Details

Our project involves creating an EVM+ chain with customizable middleware enforcing privacy-compliance trade-offs at the middleware layer. The key components include:

- **Enhanced EVM Engine**: A fork of [Frontier](https://github.com/polkadot-evm/frontier) (including pallet-evm and pallet-ethereum) and its underlying execution engine [SputnikVM](https://github.com/rust-ethereum/evm/) with additional data structures and transaction types specifically for privacy operations:
  - Merkle trees for deposits using Poseidon hash (SNARK-friendly)
  - Nullifier sets for withdrawals using a trie structure 
  - New transaction types: "Shield" and "Unshield"

- **Zero-Knowledge Proof System**: Integration of ZK proof generation and verification:
  - Initially based on Zcash cryptographic primitives
  - Precompiles for verification functions
  - Possible transition to zkSTARKs (using Plonky3) if time permits

- **User Interface**: CLI tools in Rust for:
  - Key management (generation and storage)
  - Creating deposits (commitments) and withdrawals (nullifiers)
  - Automating proof generation
  - Transaction management
  - Viewing account balances (both shielded and public)

- **Token Support**: 
  - Native support for the chain's currency
  - ERC-20 token integration with special account logic

- **Technology Stack**:
  - Rust for the node implementation and CLI tools
  - Modified EVM (SputnikVM) for smart contract execution
  - Zero-knowledge cryptography libraries

The system will automatically shield assets after interactions with smart contracts and unshield them before making transactions. This design abstracts away the complexity of privacy operations from both users and developers.

Our project will not:
- Implement its own consensus mechanism (will use existing Substrate consensus)
- Create a new programming language for privacy applications
- Implement a separate private state within smart contracts
- Compromise on EVM compatibility for existing applications

### Ecosystem Fit

Our project fits into the Polkadot/Substrate ecosystem as an enhanced privacy layer for EVM-compatible parachains and applications. It addresses the lack of privacy features in current implementations while maintaining full compatibility with existing EVM smart contracts, which is becoming a core part of the Polkadot ecosystem.

**Target Audience:**
- Users seeking privacy for their blockchain interactions
- Institutional players requiring compliant privacy solutions

**Needs Met:**
- Enables programmable privacy without requiring developers to learn new languages or paradigms
- Preserves the composability of DeFi applications while adding privacy
- Offers customizable middleware solutions with different privacy-compliance trade-offs
- Provides a pragmatic approach that covers most use cases with a simpler design

**Need Identification:**
The limitations of current privacy solutions are well-documented in academic literature and industry research. Current "programmable privacy" chains like Aleo, Aztec, or Polygon Miden use a private-public state model with significant limitations:
- Private state is owned by a single data owner, making composable apps with shared private state impossible
- The paradigm is unnatural and error-prone even for cryptography engineers
- Developers must navigate complex privacy vs. compliance trade-offs

**Similar Projects in Polkadot/Substrate:**
There are currently no projects in the Polkadot ecosystem offering equivalent programmable privacy features with EVM compatibility.

**Similar Projects in Other Ecosystems:**
- Aztec, Aleo, and Polygon Miden offer programmable privacy but use the private-public state model we aim to improve upon
- Penumbra provides app-specific privacy features but with limited programmability
- Tornado Cash and similar privacy pools offer some privacy features as smart contracts but lack the protocol-level integration we propose

Our solution differentiates itself by providing a more pragmatic approach with better developer and user experience, built directly into the protocol while maintaining full EVM compatibility.

## Team :busts_in_silhouette:

### Team members

- Marcin - CEO & Lead Engineer
- Antonio - Senior Cryptography Engineer
- César - Cryptography Engineer
- Parsa - Cryptography Engineering intern

### Contact

- **Contact Name:** Marcin Górny
- **Contact Email:** marcin@np.engineering
- **Website:** np.engineering

### Legal Structure

- **Registered Address:** Zug, Switzerland
- **Registered Legal Entity:** Hungry Cats Studio AG

### Team's experience

Our team brings extensive experience in cryptography engineering, zero-knowledge systems, and privacy-focused blockchain applications:

**Marcin** participated in the a16z Crypto Startup Accelerator (London '24) and is a core contributor & maintainer for [Arkworks](https://github.com/arkworks-rs/algebra/commits?author=mmagician). Previously worked on the Grants & Research Team at Polkadot, build a GKR-based zkML verifier in halo2, and received a zkGit grant from Ethereum Foundation for [zkGit](https://github.com/NP-Eng/zkGit/blob/main/zkGit.pdf). He has writted about [programmable privacy](https://open.substack.com/pub/nplabs/p/programmable-privacy).

**Antonio** is a Senior Cryptography Engineer with a PhD in Number Theory. He has made multiple arkworks contributions, including 3 Polynomial Commitment Schemes ([Ligero, Brakedown](https://github.com/arkworks-rs/poly-commit/tree/master/poly-commit/src/linear_codes), [Hyrax](https://github.com/arkworks-rs/poly-commit/tree/master/poly-commit/src/hyrax)). His work includes zkML, implementing [STIR in Plonky3](https://github.com/Plonky3/Plonky3/pull/674), Naysayer Proofs implementation, and designing [compliant privacy solutions](https://np.engineering/posts/tornado-anonymity-revoker-design/) like Tornado Cash.

**César** specializes in Cryptography & ML Engineering, with notable work on [zkML](https://np.engineering/posts/zkml-tradeoffs/) and [arithmetic circuits](https://np.engineering/posts/arithmetic-circuits/) and Naysayer Proofs. His recent work includes adding [STIR to Plonky3](https://github.com/Plonky3/Plonky3/pull/674), Naysayer Proofs, and a [compliant Tornado Cash implementation](https://np.engineering/posts/tornado-anonymity-revoker-implementation/).

**Parsa** is a Cryptography Engineering intern who has studied probabilistic proofs at EPFL.

### Team Code Repos

- https://github.com/mmagician
- https://github.com/Antonio95  
- https://github.com/Cesar199999

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 5 months
- **Full-Time Equivalent (FTE):** 2
- **Total Costs:** 100,000 USD
- **DOT %:** 50%

### Milestone 1 — EVM+ Chain with Native Data Structures

- **Estimated duration:** 2 months
- **FTE:** 2
- **Costs:** 40,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 / GPLv3 / MIT / Unlicense |
| **0b.** | Documentation | We will provide both inline documentation of the code and a basic tutorial explaining how to set up and use the shielding features |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by unit tests, including performance metrics for the new data structures |
| **0d.** | Docker | We will provide a Dockerfile for testing the functionality delivered with this milestone |
| 1. | Merkle tree implementation | We will implement Merkle trees for deposits using a Poseidon hash function (or similar SNARK-friendly hash function) with fixed size (e.g. depth 20) |
| 2. | Shield transaction type | We will create a new transaction type "Shield" alongside existing EVM transaction types (Legacy, EIP-1559, etc.), containing a new field for commitments, and no destination address |
| 3. | Block header modification | We will modify the block header to include the commitment root, and add validation logic for this header extension |
| 4. | Modified EVM engine | We will deliver a fork of the EVM engine (SputnikVM) with the above-mentioned structures |
| 5. | Benchmarks | We will provide performance metrics for modifying the new data structures and compare them to relevant existing EVM opcodes |
| 6. | Node template | We will provide a node template that integrates the Frontier framework which calls into the underlying SputnikVM engine |
| 7. | Tests | Add tests which check the functionality of the new transaction types and the Merkle tree implementation. Note, that full shield-unshield lifecycle cannot be tested yet |

### Milestone 2 — Unshield Transaction Type and ZKP Verification

- **Estimated duration:** 1.5 months
- **FTE:** 2
- **Costs:** 30,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 / GPLv3 / MIT / Unlicense |
| **0b.** | Documentation | We will provide inline documentation and extend the tutorial to cover unshielding functionality |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by unit tests with performance metrics for ZKP verification |
| **0d.** | Docker | We will provide a Dockerfile for testing the functionality delivered with this milestone |
| 1. | Unshield transaction type | We will implement a new transaction type "Unshield" that includes a destination (withdrawal) address and a field containing the ZK withdrawal proof |
| 2. | Nullifier set implementation | We will implement a nullifier set for withdrawals using a trie data structure for efficient (non-)membership checks |
| 3. | ZKP verification precompile | We will implement precompiles for ZKP verification based on Zcash (or similar) cryptographic primitives |
| 4. | Integration with EVM | We will ensure backwards compatibility, i.e. CALLs to EVM smart contracts work as expected with the new transaction types |
| 5. | ZKP performance metrics | We will provide detailed performance metrics for the nullifier set updates & ZKP verification algorithms |
| 6. | Security analysis | We will document the information-theoretic guarantees of the zkSNARK system |

### Milestone 3 — Key Management and CLI Tools

- **Estimated duration:** 1.5 months
- **FTE:** 2
- **Costs:** 30,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 / GPLv3 / MIT / Unlicense |
| **0b.** | Documentation | We will provide inline documentation and a comprehensive guide for using the CLI tools |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by unit tests and we will provide end-to-end testing examples |
| **0d.** | Docker | We will provide a Dockerfile for testing the functionality delivered with this milestone |
| **0e.** | Article | We will publish an article explaining the key management system and how users can interact with the privacy features |
| 1. | Key management | We will implement generation and storage of user keys/secrets based on Zcash (or similar) key derivation algorithms |
| 2. | Shielding functions | We will create CLI commands to facilitate creating deposits (commitments) |
| 3. | Unshielding functions | We will create CLI commands to facilitate withdrawals (nullifier management) and automating proof generation |
| 4. | Account management | We will implement functionality to view account balances (both shielded and public) 
| 5. | Transaction management | We will implement functionality to interact with a node and send transactions for deposit/withdraw actions |
| 6. | Performance metrics | We will provide metrics for proof generation time and resources used |

## Future Plans

**Short-term plans:**
- Develop additional middleware solutions offering different privacy-compliance trade-offs. Specifically, our team has already written about a compliant privacy pool solution in [this article](https://np.engineering/posts/tornado-anonymity-revoker-design/). The work done as part of this grant will be a foundation for this solution. We want to allow multiple parallel pools to be deployed on the same chain.
- Create developer documentation and tooling to facilitate adoption
- Collaborate with existing DeFi projects to demonstrate the seamless integration of privacy features
- Launch a testnet to allow developers to experiment with the technology

**Long-term plans:**
- Implement dynamic Merkle structures to support an ever-growing state (e.g. [Merkle Mountain Ranges](https://docs.grin.mw/wiki/chain-state/merkle-mountain-range/) or [Merkle Mountain Belts](https://hackmd.io/@MerkleMountainBelts/MMB-Funding-Proposal-V2#MMB-overview))
- Implement a zkSTARKs-based proof system based on [Plonky3](https://github.com/Plonky3/Plonky3)
- Create an ecosystem of privacy-preserving applications
- Work with regulatory bodies to ensure compliance while maintaining privacy guarantees

**Maintenance and development:**
We plan to finance the project's long-term maintenance and development through:
- This initial grant as a first step towards building a privacy solution for Kusama
- The recently approved Kusama vision initiative ([Referendum #498](https://kusama.subsquare.io/referenda/498)) which aims to support advanced technologies like ZK innovation and position Kusama as an experiment-centric network, which will be our main focus for funding.

In the future, we aim to provide our work as a public good that can be deployed as a common good parachain in the Polkadot ecosystem, making privacy features accessible to the entire network without requiring a token-based economic model.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?**
Recommendation 😃
