# W3F Grant Proposal

* **Project Name:** Subsembly - Support for GRANDPA 
* **Team Name:** [LimeChain](https://github.com/LimeChain)
* **Payment Address:** `0x6eDf76FD16Bb290A544fDc14fBB4b403D1DEeD9f` (USDT)

## Project Overview :page_facing_up:

LimeChain's team has worked on [Subsembly - Framework for building AssemblyScript Runtimes](https://github.com/w3f/General-Grants-Program/blob/master/grants/rfp-responses/subsembly-assemblyscript_runtime_framework.md) and managed to deliver 4/6 milestones so far. Developers can already checkout/install the [Subsembly CLI](https://github.com/LimeChain/subsembly) and implement Substrate Runtimes using the framework. 

The original goal of Subsembly was to support Aura and BABE consensus algorithms and provide the GRANDPA finality gadget. However, implementing GRANDPA and BABE turned out a harder task than initially estimated/scoped as a result the only consensus algorithm supported is Aura.
We would like to propose a grant amendment that enables LimeChain to continue Subsembly's development, finish the 2 outstanding milestones and propose additional features to be included.

### Overview

In this project we are scoping out the development of GRANDPA and laying down the foundations for the future support of BABE.
For detailed information on GRANDPA, please refer to the original [whitepaper](https://github.com/w3f/consensus/blob/master/pdf/grandpa.pdf) and the [Polkadot Host spec file](https://github.com/w3f/polkadot-spec/releases).

Generally speaking, the GRANDPA work can be divided into 3 components:
1) Implementing the Runtime APIs
2) Having support for the Runtime-to-Consensus Engine Messages 
3) Implementing required modules/pallets (session, offences)

### Project Details

#### Runtime APIs

Subsembly must implement the following Runtime APIs to have full support for GRANDPA:
- `GrandpaApi_grandpa_authorities` - fetches the list of GRANDPA authorities according to the genesis block. Any future authority changes get tracked via Runtime-to-consensus engine messages
- `GrandpaApi_submit_report_equivocation_unsigned_extrinsic` - Called by the Host when validator votes for multiple blocks during one voting subround
- `GrandpaApi_generate_key_ownership_proof` - Generates proof of the membership of a key owner in a specified block state. The returned values are used to report equivocations
- `GrandpaApi_grandpa_pending_change` - Returns information about GRANDPA pending changes

#### Runtime-to-Consensus Engine Messages
GRANDPA utilises consensus digest items for various events. The following is a list of the digest items emitted related to GRANDPA:
![Untitled (20)](https://user-images.githubusercontent.com/12232750/128009365-e5943a13-f115-4c88-8205-e67c23920748.png)

**Scheduled Change & Forced Change**

Every pallet/module has an `on_finalize` hook that is called whenever a block is finalised. In the case of GRANDPA, once the `on_finalize` is called, the Runtime must check whether there is a `PendingChange` (forced or scheduled) that must be deposited. If there is - a new `DigestItem` of type `Consensus` with the `GRANDPA_ENGINE_ID` must be added in the block.

**On Disabled**

The ConsensusLog is deposited once the Session module calls the on_disabled method. The GRANDPA module must simply deposit the log whenever it is called from the Session module.

#### Public Functions

The following public functions, eligible for calling from the client side are:

- `report_equivocation` - must be a signed extrinsic
- `report_equivocation_unsigned` - this extrinsic may not be signed. It is called by the block producer

#### Dependencies & Prerequisites

It is important to note that GRANDPA relies on the Session, Offence and minimal Staking modules. The Session module is configured to have a certain range of blocks and every time `on_initialize` is called, the module checks whether the `session` should end. If it has to end, the module `rotates` the session changing the validators.

The offences module tracks reported offences and the Staking module must provide the implementation of the offence - slashing the users for their misbehaviour.

### Ecosystem Fit

Subsembly provides an alternative way for developers to build Runtimes. More specifically, it enables developers with TypeScript/JavaScript knowledge to build on top of the Substrate ecosystem. 

## Team :busts_in_silhouette:

### Team members

* Daniel Ivanov
* Dastanbek Samatov
* Martin Petkov

### Contact

* **Contact Name:** Daniel Ivanov
* **Contact Email:** daniel@limechain.tech
* **Website:** https://limechain.tech

### Legal Structure

* **Registered Address:** Bulgaria, Dragan Tsankov 23A, 1113, Sofia, Bulgaria
* **Registered Legal Entity:** LimeLabs Ltd.

### Team's experience

LimeChain is a blockchain development company with 100+ completed projects and strong focus on blockchain development infrastructure. LimeChain has built tools for different protocols and networks such as Ethereum, The Graph, Polkadot, EOS, Aeternity and Corda. Some of the projects LimeChain has worked with are Celo, P&G, Universe.xyz, The Graph, Dapper Labs, Hedera and Maker among others. LimeChain is also embedded into the Polkadot developer ecosystem, particularly with building AssemblyScript developer tools. The team has built a SCALE Codec implementation, Account-based AssemblyScript Runtime PoC and the Subsembly framework.

### Team Code Repos

LimeChain's Substrate related repositories:
* https://github.com/LimeChain/subsembly
* https://github.com/LimeChain/subsembly-core
* https://github.com/LimeChain/as-scale-codec
* https://github.com/LimeChain/as-substrate-runtime

Team's GitHub profiles:
* https://github.com/LimeChain
* https://github.com/Daniel-K-Ivanov
* https://github.com/dastanbeksamatov
* https://github.com/themartto

### Team LinkedIn Profiles (if available)

- https://www.linkedin.com/in/daniel-k-ivanov/
- https://www.linkedin.com/in/dastanbek-samatov-30ab71128/


## Development Status :open_book:

The team already spend time on implementing GRANDPA, by updating the Subsembly CLI and spec builder to support GRANDPA authorities configuration. [Reference](https://github.com/LimeChain/subsembly/blob/main/cli/src/commands/spec/builder/src/modules/grandpa.js)

## Development Roadmap :nut_and_bolt:

Described below is a practical approach to the implementation of the GRANDPA module along with the the other auxiliary modules that are required.

1. Session
    1. Implement session period configuration (`n` number of blocks)
    1. Implement an `on_initialize` hook called when the block is initialized. It must check whether the session must end; if it ends, `rotate_session` is called.
    2. Implement a service for tracking the Historical changes of session keys in order to verify proofs
    3. Implement `rotate_session`
2. GRANDPA - Session
    1. Implement `on_new_session` handler
    2. Implement `schedule_change`
    3. Implement `on_finalize` hook
        1. Pending changes added in the state from `schedule_change` must be deposited as logs.
3. Session
    1. Implement `set_keys` method. The extrinsic must be signed. The caller gets their provided `keys` set into storage for eventual usage in the next sessions
    2. Implement `purge_keys` method. Removes the session keys of the function caller. Takes effect after the next session starts
4. GRANDPA - Consensus Messages
    1. Add `on_finalize` hook - If the current block is X, pending scheduled authority changes for the same block must be executed and an event must be deposited
 
At this point, the following features should be supported by the module:
- Setting/changing/removing keys through the Session module
- Rotating sessions on every `n` blocks
- Changing authorities if required on session rotation
- Depositing `Scheduled Change`, `Forced Change` and `Disable` consensus logs

The last part is to add support for `equivocations`.

5. Equivocations - Reporting voter misbehaviour. The reporting of equivocations results in offences and slashe
    1. Implement a service for verifying the `equivocation_proofs` - verifying the offender keys against the proof
    2. Implement a method for verifying the equivocation proof by making sure that both votes target different blocks and the signatures are valid
    3. Implement Reporting Service for offences that reward the sender
    4. Implement Offences module that tracks offences
    5. Implement minimal Staking module that provides an implementation for slashing `on_offence` as `OffenceHandler`

### Overview

* **Total Estimated Duration:** 69 working days
* **Full-Time Equivalent (FTE):**  1.5
* **Total Costs:** $45,540

### Milestone 1 — Session 
* **Estimated duration:** 28 working days
* **FTE:**  1.5
* **Costs:** $18,480

| Number | Deliverable                    | Specification                                                                                                                                                                                                                                                                                                                            |
| -----: | ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|    0a. | License                        | Apache 2.0 license                                                                                                                                                                                                                                                                                                                       |
|    0b. | Documentation                  | We will provide both **inline documentation** of the module as-well as update the official [documentation](https://subsembly.gitbook.io/subsembly/) of Subsembly.                                                                                                                                                                        |
|    0c. | Testing Guide                  | Due to the complex nature of testing AS code, functions that have the ability to be unit tested will be fully covered to ensure functionality and robustness. In the guide, we will describe how to run these tests. We will provide testing information as-well - how one can set keys, purge them and verify that the session rotates. |
|    0d. | Docker                         | We will provide a Dockerfile(s) that can be used to test the functionality delivered with this milestone.                                                                                                                                                                                                                                |
|     1. | Session `period`               | We will start the work on Subsembly `session` module. The end-users will be able to configure the session period configuration through the module. The period will be represented in `n` number of blocks.                                                                                                                               |
|     2. | `on_initialize` hook           | We will extend the `on_initialize` hook to be calling the session's `on_initialize` logic.                                                                                                                                                                                                                                               |
|     3. | Historical session service     | We will implement a Historical session service for storing new sessions, starting sessions and ending sessions. The service will have a mechanism for proving that a given validator was part of a session at a given index.                                                                                                             |
|     4. | `rotate_session`               | We will implement the logic for rotating the session in the context of GRANDPA.                                                                                                                                                                                                                                                          |
|     5. | Session `set_keys` extrinsic   | We will implement the `set_keys` extrinsic. The extrinsic must be signed. The caller gets the provided `keys` set in to the sotrage for the eventual usage in next the sessions                                                                                                                                                          |
|     6. | Session `purge_keys` extrinsic | We will implement the `purge_keys` extrinsic. Removes the session keys of the function caller. Takes effect after the next session starts.                                                                                                                                                                                               |

### Milestone 2 GRANDPA I

* **Estimated Duration:** 19 working days
* **FTE:**  1.5
* **Costs:** $12,540

| Number | Deliverable           | Specification                                                                                                                                                                                                                                                                                                                                                                          |
| -----: | --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|    0a. | License               | Apache 2.0 license                                                                                                                                                                                                                                                                                                                                                                     |
|    0b. | Documentation         | We will provide both **inline documentation** of the module as-well as update the official [documentation](https://subsembly.gitbook.io/subsembly/) of Subsembly.                                                                                                                                                                                                                      |
|    0c. | Testing Guide         | Due to the complex nature of testing AS code, functions that have the ability to be unit tested will be fully covered to ensure functionality and robustness. In the guide, we will describe how to run these tests. We will provide testing information as-well -  how someone can verify that sessions are being changed, as-well as verify that consensus logs are being deposited. |
|    0d. | Docker                | We will provide a Dockerfile(s) that can be used to test the functionality delivered with this milestone.                                                                                                                                                                                                                                                                              |
|     1. | `on_new_session` hook | We will create a new GRANDPA module that will implement the `on_new_session` handler.                                                                                                                                                                                                                                                                                                  |
|     2. | `schedule_change`     | We will implement the `schedule_change` logic that adds a Pending Change into the state.                                                                                                                                                                                                                                                                                               |
|     3. | `on_finalize` hook    | We will implement the `on_finalize` hook that will be called once a block is finalized and will check whether there are pending changes that must be set deposited as consensus logs.                                                                                                                                                                                                  |

### Milestone 3 GRANDPA II - Equivocations

* **Estimated Duration:** 22 working days
* **FTE:**  1.5
* **Costs:** $14,520

| Number | Deliverable                           | Specification                                                                                                                                                                                                                                                                                                                                                        |
| -----: | ------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|    0a. | License                               | Apache 2.0 license                                                                                                                                                                                                                                                                                                                                                   |
|    0b. | Documentation                         | We will provide both **inline documentation** of the module as-well as update the official [documentation](https://subsembly.gitbook.io/subsembly/) of Subsembly.                                                                                                                                                                                                    |
|    0c. | Testing Guide                         | Due to the complex nature of testing AS code, functions that have the ability to be unit tested will be fully covered to ensure functionality and robustness. In the guide, we will describe how to run these tests. We will provide testing information as-well -  how someone can cause equivocation by a malicious node and verify that he is receiving a reward. |
|    0d. | Docker                                | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.                                                                                                                                                                                                                                                        |
|    0e. | Article                               | We will publish a **guide** in the Subsembly docs file, how one can run their Substrate node that uses Subsembly Runtime having GRANDPA enabled.                                                                                                                                                                                                                     |
|     1. | GRANDPA `equivocation_proofs` service | We will implement a services for verifying the `equivocation_proofs` - verifying the offender keys against the proof. Method for verifying the equivocation proof by making sure that both votes target different blocks and the signatures are valid.                                                                                                               |
|     2. | `reporting` service                   | We will implementa reporting service for offences that reward the sender.                                                                                                                                                                                                                                                                                            |
|     3. | `offences` module                     | We will implement an `offences` module that tracks offences.                                                                                                                                                                                                                                                                                                         |
|     3. | Minimal `staking` module              | We will implement a minimal `staking` module that provides an implementation for slashing `on_offence` as `OffenceHandler`                                                                                                                                                                                                                                           |

## Future Plans

LimeChain will be resolving any critical bugs that may arise. We would like to extend the framework by adding new pallets in the future. Our plan is to continue the development of the framework with support for BABE and after that, having support for Parachains. The end goal of Subsembly is to support the full set of foundational features that enable developers to create Substrate networks (with the option for both Aura and BABE + GRANDPA's finality) as-well as Polkadot parathreads and parachains. 


## Additional Information :heavy_plus_sign:

LimeChain has been a long time contributor to the Substrate ecosystem mainly focused on developer tooling. Due to our involvement in the space we are working with various clients, developing smart contracts and working on parachains.
