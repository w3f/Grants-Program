# Polkadot Protocol Conformance Tests

* **Status:** Open
* **Proposer:** [Bhargav Bhatt](https://github.com/bhargavbh), [David Hawig](https://github.com/Noc2)
* **Objectives:** Create and maintain a comprehensive test-suite for conformance of core functionalities of Polkadot Host.

## Project Description :page_facing_up:  
The reliability and security of the Polkadot network crucially depends on bug-free implementation of Hosts/Nodes. Currently, Substrate and Smoldot (in Rust) are implementations in production, while [Gossamer (in Go)](https://github.com/ChainSafe/gossamer) and [Kagome (in C++)](https://github.com/soramitsu/kagome/) are in advanced stages of development. This RFP invites teams to create and maintain a comprehensive test-suite to check conformance of Host implementations against the official [Polkadot Protocol Specification](https://spec.polkadot.network/). 

The objectives are multifold. The test-suite can:
-  be used to objectively evaluate the conformance of a Host Implementation against the Spec. 
-  help implementers in early stages and steer their development efforts. 
-  complement the specifications to clarify corner cases and intricacies of the Spec. In several scenarios, precise tests are highly valuable in clarifying the inevitable ambiguities in the Spec. 

Initially, the focus would be on unit tests with tests designed and generated at the right layer of abstraction to accommodate the existing implementations. The scope of the test-suite covers all the components/protocols described in the Specification but we would like to prioritise the following:

- Mapping the consensus attack surface and producing fuzzing targets accordingly. Indicative, non-exhaustive list of potential targets can be seen below:
    - Host API: 
        - sequences of storage and child-storage operations
        - cryptography primitives, particularly those exposed in the Host API
        - trie root
    - BABE
        - Block import
        - block validation
        - next/current validators aka VRF/block lottery
        - secondary slot verification
    - GRANDPA
        - block import
        - block validation
        - justification import & validation/verification
- trie proof verification
- scale encoding and decoding, for specific message types, and randomly generated ones
- parachain candidate validation

The goal of the initial grant should be to develop a PoC. The long-term goal should be to develop a comprehensive test suite that is funded by the on-chain treasury. 

**Useful resources:**
- [Polkadot Protocol Specification](https://spec.polkadot.network/)
- [GitHub polkadot-tests](https://github.com/w3f/polkadot-tests)
- [Chopsticks](https://github.com/AcalaNetwork/chopsticks)
- [Zombienet](https://github.com/paritytech/zombienet) 
- [try-runtime](https://docs.substrate.io/reference/command-line-tools/try-runtime/) 

## Deliverables

The structure of the grant and the milestones depends highly on the project itself and the goal of the initial PoC. It’s therefore up to the applying team to come up with a milestone and delivery structure. 


