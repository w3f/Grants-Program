# Infimum

- **Team Name:** Apollos Collective
- **Payment Address:** 0x9c10EbAEB989CFd239679d47B9100dc4ad57A536 (ERC20 USDC)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

This application is in response to the [anti-collusion infrastructure RFP](https://github.com/w3f/Grants-Program/blob/master/docs/RFPs/Open/anti-collusion_infrastructure.md).

### Overview

Helping to empower the realization of trust in, and verification of, voting systems within Substrate parachains.

The goal of this proposal is to provide a minimum viable implementation of Vitalik Buterin’s [“Minimal Anti-Collusion Infrastructure”](https://ethresear.ch/t/minimal-anti-collusion-infrastructure/5413) as a substrate pallet and CLI (for performing off-chain work,  i.e. encrypting votes, processing messages, and generating proofs). 

The scope of this proposal is intended to be a proof of concept, of which contributes to the development of a genuine *minimal* anti-collusion infrastructure within the Substrate ecosystem. 

Governance, and by extension voting systems, are critical facets of society at large and have become a crucial value proposition of many blockchain applications. It is therefore imperative to develop systems which not only promote a sense of underlying trust, but also can intrinsically verify their own integrity.

The team is interested in cryptographic voting as a research domain. They would like to further explore this area in order to provide a meaningful contribution to the community. Refer to “Future Plans” section to preview how we’d like to see this project evolve.

### Project Details

There are two primary deliverables outlined in this proposal: 

1. A Substrate pallet which facilitates the voting apparatus and on-chain verification of poll results, and;

2. A CLI tool to facilitate the generation of arguments passed to the methods exposed by the pallet. 
 
The goal of this system is to deincentivize collusion between participants given that any participant can secretly change or nullify their vote.

![Use case diagram](https://cdn.rhys.tech/infimum-ucd.png) 

<ins>Deliverables:</ins>

1. Substrate pallet
    1. Description
        1. Facilitates transparency and provenance of poll interactions and outcome. Users can register as either coordinators or participants, create polls, and interact with polls. On-chain verification of zero-knowledge proofs (which have been generated off-chain) that establish the correctness of the poll tallying computations (which have been performed off-chain) must occur prior to the acceptance of, and publishing of poll outcome. 
    2. Public methods 
        1. `registerAsCoordinator` Permits the caller to create polls, and stores their (public) keys. 
        2. `rotatePublicKey` Permits a coordinator to rotate their public,private keypair. Rejected if called during an ongoing poll.
        3. `rotateVerifyKey` Permits a coordinator to rotate their verification key. Rejected if called during an ongoing poll.
        4. `registerAsParticipant` Permits a user to participate in a poll. Rejected if called after voting period. 
        5. `createPoll` Instantiates a new poll object with the caller as the designated coordinator. Emits an event with the poll data.
        6. `interactWithPoll` Inserts a message into the message tree for future processing by the coordinator. Valid messages include: a vote, and a key rotation. Rejected if sent outside of the timeline specified by the poll config. Participants may secretly call this method (i.e. from a different address) to override their vote, thereby deincentivizing bribery.
        7. `mergePollState` Used by the coordinator to compute roots of message state tree, which is used as a commitment value by the proof verification logic. Rejected if called prior to poll end.
        8. `commitProcessedMessages` Verifies the proof that the current batch of messages have been correctly processed and, if successful, updates the current verification state. Rejected if called prior to the merge of poll state.
        9. `commitTallyResult` Verifies the proof that the current batch of votes has been correctly tallied and, if successful, updates the current verification state. On verification of the final batch the poll result is recorded in storage and an event is emitted containing the result. Rejected if called before messages have been processed.
    3. Runtime storage 
        1. Public key store: mapping between coordinators and their public keys (which are used by participants to encrypt their votes)
        2. Verifying key store: mapping between coordinators and their verifying keys used in the on-chain verification of proofs
        3. Poll store: mapping between poll id and the current state of the poll
        4. Poll message state: mapping between poll id and a merkle tree of secret participant messages (i.e. votes and/or nullifiers)
        5. Poll Result: mapping between poll id and outcome
    4. Dependencies
        1. We will rely on the [Groth16](https://eprint.iacr.org/2016/260.pdf) verifier provided by [bellman](https://github.com/zkcrypto/bellman/blob/main/src/groth16/verifier.rs) under the [MIT license](https://github.com/zkcrypto/bellman/blob/main/LICENSE-MIT).
2. CLI tool
    1. Description
        1. Facilitates off-chain computations performed by participants and trusted operators. In particular, generating the values (e.g. encryption keys, proofs) required by the function signatures specified in the first deliverable (1.Susbtrate Pallet). This will be provided as a TypeScript library (in order to serve as a starting point for future integration into dApps) with a simple CLI wrapper.
    2. Technologies used
        1. Circom
        2. Typescript 
        3. Node.js
        4. snarkjs
    3. Commands available to users 
        1. `generateKeypair` Used by both participants and coordinator. Outputs a keypair used for encrypting and decrypting the messages which represent poll interactions. 
        2. `generateProof` Used by the coordinator. Generates a proof of correctness for the current batch of message processing computations (including final vote tally).
        3. `encodeMessage` Used by participants. Accepts their vote as input, and outputs an encoded message which may only be decrypted and read by the coordinator.


<ins>Poll lifecycle:</ins>

1. Poll is created (by a coordinator). Prior to the start time of the poll:
    1. The coordinator may perform any permitted alterations to the poll configuration, or close the poll
    2. Individuals can begin to register as participants in the poll
2. Poll starts:
    1. Coordinator may no longer preform any alterations to the poll (e.g. update signing key) 
    2. Participants may interact with the poll (vote, revote, nullify vote, switch keys) 
3. Poll ends:
    1. Participants may no longer sign up or interact with the poll
    2. Coordinator may start to compute the outcome of the poll
4. Poll result becomes “finalized” once:
    1. The coordinator publishes the result of the poll alongside proofs of the computations
    2. The result of the poll is committed to storage if and only if every proof passes verification
    3. At this point it is sensible for external actions to be taken in response to the outcome of the poll

<ins>Constraints and limitations of the deliverables to be aware of:</ins>

- A coordinator may only manage a single poll at a time (there may be multiple coordinators each with their own poll at any given time)
- Users can only cast a vote of weight 1
- Votes must be processed, and tallied, in batches
- Non-transparent proof system (Groth16); requires a trusted setup

We intend to improve upon these limitations in future work (see the section below).

### Ecosystem Fit

- Useful in governance schemes, e.g. crowd funding applications.
- The target audience is parachain developers, e.g. a candidate integration could be the [imbue network](https://github.com/ImbueNetwork/imbue).
- The overall intended trajectory is to help establish a sense of integrity within democratized systems. Participants in these systems are empowered to verify by default.
- The team is not aware of any projects in the Substrate/Polkadot/Kusama which are currently attempting to achieve feature parity (or beyond) with MACI in the Ethereum ecosystem.

## Team :busts_in_silhouette:

### Team members

- Rhys Balevicius

### Contact

- **Contact Name:** Rhys Balevicius
- **Contact Email:** rhys@apollos.tech
- **Website:** [https://rhys.tech](https://rhys.tech)

### Legal Structure

- **Registered Address:** 173 Presidial Avenue, Oshawa, ON Canada
- **Registered Legal Entity:** Apollos Web3 Collective Inc.

### Team's experience

Rhys Balevicius is a software developer with over half a decade of professional experience in full-stack development, software design, and software architecture in various industries, of which include blockchain technologies and fintech. He is also currently studying Mathematics and Computer Science at University of Toronto. 

He is a founding software engineer at Dropverse, which is a gamified blockchain-based app where users can collect tokens, participate in drops, etc. in the real world. It is primarily integrated with the Ethereum ecosystem (in particular, there is currently support for any EVM compatible chain). Major achievements in this role include building a microservice that relay meta-transactions originating from user custodial wallets. 

Rhys also has previous experience in research and development, and some of this work has been patented. In particular, he designed and implemented a novel algorithm which utilized sequential image recognition in order to synchronize secondary content with the current timestamp of a video. The patent can be found here: [https://patents.google.com/patent/US11082679B1/en?oq=US11082679B1](https://patents.google.com/patent/US11082679B1/en?oq=US11082679B1) 

### Team Code Repos

The majority of Rhys’ work has been client-based work and is closed-source. His interest in other projects has led him to also contribute to various open-source projects, some of which can be found here: 

- [https://github.com/cytoscape/cytoscape.js](https://github.com/cytoscape/cytoscape.js)
- [https://github.com/rhysbalevicius/huh](https://github.com/rhysbalevicius/huh)
- [https://github.com/rhysbalevicius/lipsync](https://github.com/rhysbalevicius/lipsync)

GitHub profile: [https://github.com/rhysbalevicius](https://github.com/rhysbalevicius)


### Team LinkedIn Profiles (if available)

- **Rhys Balevicius:** [https://www.linkedin.com/in/rhys-balevicius/](https://www.linkedin.com/in/rhys-balevicius/)


## Development Status :open_book:

This application is in response to the [anti-collusion infrastructure RFP](https://github.com/w3f/Grants-Program/blob/master/docs/RFPs/Open/anti-collusion_infrastructure.md).

Development status will be found over at [https://github.com/rhysbalevicius/infimum](https://github.com/rhysbalevicius/infimum). This is empty at the time of submission.

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 6 months
- **Full-Time Equivalent (FTE):**  0,5 FTE
- **Total Costs:** $27,000

### Milestone 1 — Voting apparatus without verification

- **Estimated duration:** 2 months
- **FTE:**  0,5
- **Costs:** 9,000 USD

| Number | Deliverable | Specification |
| --- | --- | --- |
| 0a. | License | MIT |
| 0b. | Documentation | Inline documentation. Basic guide explaining how to interact with the pallet will be provided in the README.  |
| 0c. | Testing | Unit tests, GitHub actions CI workflow, and brief guide for running tests locally |
| 0d. | Docker | Dockerfiles and docker-compose.yml for running a development environment which locally spins up a node and frontend template for observing events, calling pallet extrinsics, and performing state queries. |
| 1. | Substrate pallet | Methods 1.ii.a to 1.ii.i (listed under deliverables in the project overview) without verification functionality provided by Groth16 proving system.  |

### Milestone 2 — On-chain verification logic and circuits

- **Estimated Duration:** 2 months
- **FTE:**  0,5
- **Costs:** 9,000 USD

| Number | Deliverable | Specification |
| --- | --- | --- |
| 0a. | License | MIT |
| 0b. | Documentation | Inline documentation. Amendment to the original guide explaining the requirements for satisfying the verification logic. |
| 0c. | Testing | Unit tests for methods added. Updated unit tests for amended methods. |
| 1a. | Pallet: verification methods | Private methods for verifying proofs which have been generated off-chain by the CLI delivered in Milestone 3. Relies on the verification logic provided by bellman (https://github.com/zkcrypto/bellman). |
| 1b. | Pallet: method modifications | Modifications to methods 1.ii.h and 1.ii.i (listed under deliverables in the project overview) to call the private verification methods defined in Milestone 2.1.a — these modifications will guard against storage updates in the case that verification fails, and publish the final poll outcome in the case of success. |
| 2. | Circom circuits  | Fork of MACI circuits defined here (https://github.com/privacy-scaling-explorations/maci/tree/master/circuits/circom) and licensed under MIT, amended as necessary for consumption within our off-chain proof generation pipeline. |

### Milestone 3 — CLI tool and docsite

- **Estimated Duration:** 2 months
- **FTE:**  0,5
- **Costs:** 9,000 USD

| Number | Deliverable | Specification |
| --- | --- | --- |
| 0a. | License | MIT |
| 0b. | Documentation | Inline documentation. Instructions for setting up and interacting with the CLI will be provided in the README. |
| 0c. | Testing | Integration test scripts will be provided. |
| 0e. | Article | We will provide an article directed towards parachain developers detailing: the motivation and general use case, an overview of the individual components of the system, the poll lifecycle, limitations and trust assumptions of the system, as well as an open invitation to contribute to the project. |
| 1a. | TypeScript library | A library which exposes the functionality described in 2.iii.a to 2.iii.c (listed under deliverables in the project overview), as well as all related helper functions. |
| 1b. | CLI for operators | CLI wrapper around 1a. Provides command line accessibility to the functionality required by operators to successfully interact with the pallet. |
| 1c. | CLI for participants | CLI wrapper around 1a. Provides command line accessibility to the functionality required by participants to successfully interact with the pallet. |
| 2a. | Docsite | We will package the article in 0e., all documentation, and all necessary setup and usage instructions into a readable and user friendly docsite. This will be hosted and associated with the project under the URL section of the repository as well as linked to in the README. |
| 2b. | Voting Example | The docker-compose.yml will be updated to (optionally) provision a simple coordinator script (using Node.js and TypeScript) which manages an example poll. |
| 2c. | Voting Tutorial | We will provide a tutorial which provides explicit step-by-step instructions on how to setup and interact with the voting example. |


## Future Plans

1. Experimentation with alternative architectures 
    1. In particular, we are interested in architectures which support on-chain tallying utilizing partial or fully homomorphic encryption, and verifiable computation schemes such as [Rinnochio](https://eprint.iacr.org/2021/322.pdf?ref=blog.icme.io). 
    2. Secure multi-party computation architecture which relies on multiple coordinators; this would enable complete secrecy of individual voter preferences. Ideally this would be combined with (1.i).
2. Features and enhancements to deliverables
    1. Integration of transparent zk-SNARKS
    2. Reduce number of extrinsic calls required in the tallying phase, e.g. with [Nova](https://github.com/microsoft/Nova)
    3. Support for different voting schemes, e.g. quadratic, ranked choice
3. Additional systems and example integrations
    1. Off-chain worker (and potentially a backend service) to automatically perform the message processing, tallying, and proof generation computations
    2. dApp which provides a rich user interface for creating and participating in polls
    3. Example ink! smart contract demonstrating how to interface with the pallet, e.g. a fungible-token contract wherein the voting power of a single participant corresponds to the number of tokens they own
4. Outreach 
    1. Obtain a security audit of infrastructure
    2. Network with faculty and peers with the aim of collaborating on research goals
    3. Seek out possible integrations with a parachain, e.g. [imbue](https://github.com/ImbueNetwork/imbue)

Where appropriate, we would like to deliver some subset of these in follow up proposals.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Personal recommendation from a colleague. 
