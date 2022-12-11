# XBI - xcm-based high-level standard and interface (ABI) for smart contracts

> This document will be part of the terms and conditions of your agreement and therefore needs to contain all the required information about the project. Don't remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with a `>` (such as this one) can be removed.
>
> See the [Grants Program Process](https://github.com/w3f/Grants-Program/#pencil-process) on how to submit a proposal.

- **Team Name:** t3rn
- **Payment Address:** 0x343f822207f65fba7cc5325fd76d879528e706f4
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

> ⚠️ *The combination of your GitHub account submitting the application and the payment address above will be your unique identifier during the program. Please keep them safe.*

## Project Overview :page_facing_up:

### Overview

Propose a new Polkadot Standard Proposal for an XCM-based high-level interface for cross-chain smart contract execution - XBI.

#### Brief Description

XBI will be an XCM-based Binary Interface that extends the XCM-protocol to enable smart contracts calls, while receiving execution results back to the source Parachain. The same interface will be used to connect Smart Contract VMs installed on other Parachains, as well as to communicate with remote-to-Polkadot blockchains using the XCM protocol, which will be compatible with the bridges of the most active blockchain ecosystems today (i.e. Ethereum, Solana, Avalanche, Cosmos).

To further the adoption of XBI within the Polkadot ecosystem we specify XBI as a PSP - Polkadot Standard Proposal.

#### Rationale

First and foremost, XBI focuses on usability, as such it will recognise the difference between WASM and EVM, the most popular smart contract byte code in the Polkadot ecosystem, as of today. As a high-level format XBI sets the standard for interfaces implementing interactions between EVM and WASM based contracts.

We propose further propose to implement XBI as part of t3rn, a composable smart contracts platform, alongside selected Substrate-based blockchains that focus heavily on the smart contracts interoperability, such as Moonbeam and Astar. This will be done in order to enable mutual cross-chain smart contract communication between internal-to-Polkadot projects using the same Interface for trust-free communication with remote-to-Polkadot ecosystems.

The XBI interface used by Parchains offers a contingencies against runtime upgrades, while allowing Parachains to define and expose their functionalties.

### Project Details

The XBI cross-chain binary interface for smart contracts is a format extension to XCM that allows Parachain to mutually call and retrieve results from:

- smart contracts VMs,
- pallets
- state queries: on Parachains as well as remote-to-Polkadot ecosystems that have an adapter, for a Pallet XBI Executor, to a Parachain's Runtime. Pallet XBI Executor adapts to a bridge linking a Parachain with selected remote-to-Polkadot ecosystem, defining the necessary interface, while configuring the XCM Executor Pallet to provide status responses on sent queries.

Parachains that use XBI can expect the following functionalities:

- a) Trigger smart contract execution on internal-to-Polkadot Parachains:
  - Pallet Contracts WASM smart contracts
  - Pallet EVM smart contracts
  - Other Pallets

- b) Trigger smart contract execution on external-to-Polkadot Ecosystems:
  - EVM-like smart contracts
  - Generic smart contracts

- c) Reveive responses for both successful and unsuccessful executions on both internal and remote-to-Polkadot ecosystems

- d) Expose customized APIs, specific to a Parachain, decodable via XBI Format.

##### Propose XCM Format Extension

We propose for the XCM format to be extended; standardizing how XCM::Transact is used.

We further propose to introduce two format XCM extensions:

- `XCM::Transact("magicbyte", XCMFE#1, <Scale-encoded-native-call>)` - native runtime dispatch (in case of FRAME - Scale encoded call)
- `XCM::Transact(XCMFE#2, <palletname>::<methodname>, <scale-encoded-args>)` - public Scale-RPC, in case of FRAME - Method name is `<palletname>::<methodname>`.
- `XCM::Transact(XCMFE#3, XBI(<XBI-instance>, XBI-payload))`

## XBI-payload specification

- `call(instance_id/bridge_id)`: `modifications`
  - `call_native`: `trigger Scale encoded native call`
    - `payload: Bytes`
  - `call_evm`:  `trigger smart contract call`
    - `caller: AccountId`
    - `dest: AccountId`
    - `value: Balance`
    - `input: Bytes`
    - `gas_limit: Balance`
    - `max_fee_per_gas: Option<Balance>`
    - `max_priority_fee_per_gas: Option<Balance>`
    - `nonce: Option<u32>`
    - `access_list: Option<Bytes>`
  - `call_wasm`: `trigger smart contract call`
    - `caller: AccountId`
    - `dest: MultiAddress<AccountId, ()>`
    - `value: Balance`
    - `input: Bytes`
    - `additional_params: Option<Vec<ABIType>>`
  - `call_custom`
    - `caller: AccountId`
    - `dest: MultiAddress<AccountId, ()>`
    - `value: Balance`
    - `input: Bytes`
    - `additional_params: Option<Vec<ABIType>>`
- `query`: `access state / read-only` // worth making a batch/related call.
  - `query_evm`:
    - `address: AccountId`
    - `storage_key: Bytes`
  - `query_wasm`:
    - `address: AccountId`
    - `storage_key: Bytes`
- `result`: `(success|failure, <output|failruedetails>, <dest_parachain_witness>)`
- `metadata`: `Lifecycle status notifications`
  - `Sent (action timeout, notification timeout)`
  - `Delivered (action timeout, notification timeout)`
  - `Executed (action timeout, notification timeout)`
  - `Destination / Bridge security guarantees (e.g. in confirmation no for PoW, finality proofs)`
  - `max_exec_cost`: `Balance` : `Maximal cost / fees for execution of delivery`
  - `max_notification_cost`: `Balance` : `Maximal cost / fees per delivering notification`

Each XBI Executor's instance will need to implement the XCM Format for the underlying bridge it connects with.

## XBI Executor

Executers will be responsible for tracking the lifecycle of sent XBI payloads.

Getting the result should trigger a XCM-message back to the original sender of the XBI payload (if the sender subscribed to execution lifecycle status notification).

The XCM-message will look like this `XCM::Extended|Transact(XCMFE#3, XBI::result(...))`.

### General introduction to proving with XBI Executor

Upon receiving an XBI request, an XBI Executor will generate the associated ID and stores in the state map. This entry to the state map gets updated as soon as the Executor receives the response from one of the Runtime's VM (Default Executor) or an installed Runtime Bridge.
The state entry is updated with the output response to the requested XBI Payload. As such, it is available for trust-free validation on the requesting Parachain side by sending back the Witness that includes the dispatched call alongside accompanying bytes, which can be decoded to derive the status of the call after the inclusion has already been confirmed. We propose a form of Witness that should work with most external-to-Polkadot ecosystems; suitability will be assessed as part of the first Development Milestone.

```rust
struct Witness {
    encoded_message: Vec<u8>, // Encoded message containing the call dispatch   
    trie_pointer: TriePointer, // Enum pointer, to a merkle tree in that block: state, transaction or logs   
    block_hash: Vec<u8>, // Pointer to a block including the message   
    merkle_path_proof: Vec<Vec<u8>> // Proof - a merkle path including message into block 
}
```

## Location of XBI in the stack

XBI Format is a standard over XCM, enabling Parachains with effective communication to use the same interface with various smart contract VMs, installed both at local-to-Polkadot as well remote-to-Polkadot Consensus Systems.

Communication using XCM Format traverses as follows:

- `(trigger) XCM -> (send) XCM>XBI> -> (receive) XBI>DispatchableCall ->  (execute) -> (send) Result->XBI::result -> (receive) XBI result`

The above examples readability could also be enhances with the following example:
``
(send XBIDefaultExecutor::call_custom) Moonbeam -> t3rn (send XBIRemoteExecutor::call_custom) -> Cosmos Bridge -> (native-to-Cosmos execution) Cosmos Chain  -> Cosmos Bridge -> (send XBIExecutor::result) t3rn -> (receive XBIExecutor::result) Moonbeam
``

### XBI payload lifecycle

XBI payload lifecycle can be directed by developers using metadata. XBI Executors implement the functionalities allowing to handle the lifecycle:

#### Metadata

- Lifecycle status notifications
  - Sent (action timeout, notification timeout)
  - Delivered (action timeout, notification timeout)
  - Executed (action timeout, notification timeout)
- Destination / Bridge security guarantees (e.g. in confirmation no )
- Timeout for every lifecycle step.
- Maximal cost / fees
- Notification payment / stipend

#### Lifecycle

- Successfully sent across the bridge (no execution yet)
- Delivery on the other side
- Execution status on the other side
- Execution result / Notification stream

#### Expectations

- Propose XBI Format to be used by t3rn and Parachains, factored in feedback and discussion with selected teams building smart contracts VMs.
- Conclude the work on XBI specification as a PSP - Polkadot Specification Proposal
- Set the stage for the XBI grant follow-up that focuses solely on its implementation for both local and remote to Polkadot ecosystems

### Ecosystem Fit

t3rn is a cross-chain smart contracts registry that enable smart contracts execution on mulitple blockchians. The XCM-based Interface will come in a form of a FRAME pallet and will be used by t3rn and any other Substrate-based project that wishes to use it.

The XBI Format and XBI Executors for cross-chain smart contracts will be tested live in a XCM Environment, such as the Rococo network with other selected Substrate builders.

## Team :busts_in_silhouette:

### Team members

- Maciej Baj (team lead)
- t3rn team members: 7 developers

### Contact

- **Contact Name:** Jacob Kowalewski
- **Contact Email:** jacob@t3rn.io, maciej@t3rn.io (CC)
- **Website:** <https://www.t3rn.io/>

### Legal Structure

- **Registered Address:** Quijano Chambers, Road Town, Tortola, British Virgin Islands, BVI, BC No. 2062235
- **Registered Legal Entity:** t3rn Ltd.

### Team's experience

t3rn team - succesfully completed one Web3 Foundation grant to establish and implement the prototype of t3rn's cross-chain gateways and is now building as part of Substrate Builders Program.

### Team Code Repos

- <https://github.com/t3rn>

Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine.

- <https://github.com/MaciejBaj>

### Team LinkedIn Profiles (if available)

- <https://www.linkedin.com/in/maciej-baj/>
- <https://www.linkedin.com/in/pauletscheit/>
- <https://www.linkedin.com/in/jacobkowalewski/>
- select members of the [t3rn team](https://www.linkedin.com/company/t3rn-io) - TBD

## Development Roadmap :nut_and_bolt:

### Milestone 1 — Produce PSP as a result of collaboration with Selected partners which sets requirements for XBI Format and XBI Executors Interface

- **Estimated duration:** 6 weeks
- **FTE:**  2
- **Costs:** $25.000 in DAI (Ethereum)

| Number | Deliverable   | Specification                                                                                                                                                                                                                                                                                                                                                                                    |
|-------:|---------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|    1a. | License       | Apache 2.0                                                                                                                                                                                                                                                                                                                                                                                       |
|    1b. | Documentation | Provide both **inline documentation** of the code and a basic **tutorial** that establishes XBI Format. This assumes a series of consulations and feedback loops enhancing the XBI Format usability with min. 2 selected partnered Parachain teams. Tutorials will be done to show how to access the XBI-Executor interface and interact with XBI Format with it as a Substrate-based blockchain. |                                                     |
|    1c. | PSP           | Transform the XBI Format documentation into Polkadot Standard Proposal. Detail both the Metadata and all of the XBI execution orders of the format, as a consistent and unambiguous specification.                                                                                                                                                                                |                                                     |

## Future Plans

This is the research-focused grant proposal on XBI which is assumed to be followed up with the grant focused solely on its implementation.

XBI will help contribute to the t3rn vision of a fully connected cross-chain ecosystem, rooted in Polkadot. For the context, t3rn is building a cross-chain smart contract hosting platform that enable smart contracts execution on mulitple blockchians.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?**
This is our second Web3 Foundation grant, having delivered on our first grant back in December 2020. We having been working tirelessly within the Polkadot ecosystem ever since, as part of the Substrate Builders Program and intend to launch as a Polkadot parachain in summer 2022.
