# Centrifuge Go-Substrate-RPC Client V2

- **Team Name:** Centrifuge
- **Payment Address:** Ethereum(USDC) - tbd
- **Level:** 🐓 3

## Project Overview :page_facing_up:

This is a follow-up grant to keep building on top of this Go Client implementation. In the past we had two grants.

The original grant through w3f:
- https://github.com/w3f/General-Grants-Program/pull/150
- https://github.com/w3f/Grants-Program/blob/master/docs/accepted_grant_applications.md#%EF%B8%8F-wave-3---third-quarter-2019

And a maintenance Grant through Polkadot Treasury:
- https://polkadot.polkassembly.io/post/39
- https://polkadot.polkassembly.io/motion/12 (Executed)

### Overview

Initially Go-Substrate-RPC (GSRPC for short) was designed under the premise of being a low-level, static and strongly typed library, where all the type resolution happen at compilation time.

This approach allowed almost full flexibility to developers to build their own types and events depending on the target chain/s they were connecting to.

On the other hand, since the types are statically defined, this didn’t leave room to, gracefully, deal with parsing errors when a type (defined on the chain runtime) is not defined in the GSRPC client.

### Project Details

#### The problem
For a hypothetical *RuntimeA*, give `TypeA`:
```go=
type TypeA struct {
    AttrA String
    AttrB int
}
```
and `EventA`, that uses `TypeA`:
```go=
type EventA struct {
    Data TypeA
}
```
The *GSRPC* instance should define `TypeA` to be able to decode `EventA`. If the client is defined as such, then there will be no problem parsing it.

Now lets presume that a RuntimeUpgrade is executed and now the target chain is at version B -> `RuntimeB`. In this runtime ugprade attribute `AttrB` of struct `TypeA` has changed to `String`:

```go=
type TypeA struct {
    AttrA String
    AttrB String
}
```
Then when the *GSRPC* client is trying to parse the event, it will fail while trying to decode the *scale* encoded value into the `EventA` struct since the type that is expecting for `AttrB` is an `int` but a `string` has been provided.

This issue gets more critical when we are talking about processes, like bridges, that need to successfully parse every event in a block looking for a relevant event to their business logic.
If due to the above reason, an event can't be parsed then the bridge relayer cannot ensure that a relevant event was or wasn't in that block.
Therefore the only options are to skip that block (hoping that there was no relevant event within) or wait until the client is updated to continue parsing blocks, which disrupts the bridge operations.

#### Solution

With the inclusion of Substrate Metadata 14, we now have a definition of all the types included in a specific runtime.

This means that at bootstrap time (and upon other certain situations) *GSRPC* can build a registry of types based on the data provided by the target chain metadata.

##### Load types into registry from Metadata
###### Example of Metadata 14 type structure for a `Balances.Transfer` Event

Pallet Name and associated type variants index
```
Pallets.5.Name = "Balances"
Pallets.5.Events.Type.UCompact = 28 // Events list type index
```

For event `Balances.Transfer` with index 2 in the variants list there are 3 fields, `from`, `to` & `amount`.

```
Lookup.Types.27.Variant.Variants.2.Name = "Transfer"
Lookup.Types.27.Variant.Variants.2.Fields.0.Name = "from"
Lookup.Types.27.Variant.Variants.2.Fields.0.TypeName = "T::AccountId" // Some types do not have an index reference
Lookup.Types.27.Variant.Variants.2.Fields.1.Name = "to"
Lookup.Types.27.Variant.Variants.2.Fields.1.TypeName = "T::AccountId"
Lookup.Types.27.Variant.Variants.2.Fields.2.Name = "amount"
Lookup.Types.27.Variant.Variants.2.Fields.2.TypeName = "T::Balance"
Lookup.Types.27.Variant.Variants.2.Fields.2.Type.UCompact = 6
```

`from` & `to` have type `T::AccountId` which is a Runtime Primitive, and potentially can have different implementations depending on the runtime connected to. In most of the cases, it would be an `AccountId32`, but that can be changed.

`amount` has a type reference to index `6` so we can navigate to that type:

```
Lookup.Types.6.Type.Def.Primitive = 7 (Si0TypeDefPrimitive)
```

And that tells us that is refering to Rust Primitive number 7, so according to the primitive list (found in polkadotjs/api) for type `Si0TypeDefPrimitive`:

```
0:  readonly isBool: boolean;
1:  readonly isChar: boolean;
2:  readonly isStr: boolean;
3:  readonly isU8: boolean;
4:  readonly isU16: boolean;
5:  readonly isU32: boolean;
6:  readonly isU64: boolean;
7:  readonly isU128: boolean;
8:  readonly isU256: boolean;
9:  readonly isI8: boolean;
10: readonly isI16: boolean;
11: readonly isI32: boolean;
12: readonly isI64: boolean;
13: readonly isI128: boolean;
14: readonly isI256: boolean;
```

The underlying type is `U128`

*Challenges to solve:*
- **How to load Runtime Primitive types into the registry so looking up from `TypeName` results in the underlaying encodable/decodable type.**
  - Maybe follow similar logic as default as: https://github.com/polkadot-js/api/blob/master/packages/types/src/interfaces/runtime/types.ts

##### New generic type registry encoder/decoder
The next step is to build a generic encoder/decoder that works for all discovered types based on underlaying primitive types.

In theory, once the types are loaded, and we built generic encoders for basic primitive types, we should be able to encode & decode all types and events.

*Challenges to solve:*
- **Build generic encoder/decoder** for any type loaded in the registry
- **Support custom encoder/decoder** for irregular struct serialization and deserialization

### Ecosystem Fit

Help us locate your project in the Polkadot/Substrate/Kusama landscape and what problems it tries to solve by answering each of these questions:

- Where and how does your project fit into the ecosystem?
- Who is your target audience (parachain/dapp/wallet/UI developers, designers, your own user base, some dapp's userbase, yourself)?
- What need(s) does your project meet?
- Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?
  - If so, how is your project different?
  - If not, are there similar projects in related ecosystems?

## Team :busts_in_silhouette:

### Team members

- *Team Lead & Protocol Developer*: Miguel Hervas (mikiquantum)
- *Main Protocol Developer*: Cosmin Damian 

### Contact

- **Contact Name:** Miguel Hervas 
- **Contact Email:** miguel@centrifuge.io
- **Website:** https://centrifuge.io

### Legal Structure

- **Registered Address:** Address of your registered legal entity, if available. Please keep it in a single line. (e.g. High Street 1, London LK1 234, UK)
- **Registered Legal Entity:** Name of your registered legal entity, if available. (e.g. Duo Ltd.)

### Team's experience

The Centrifuge team has built a decentralized platform for the financial supply chain (invoices, purchase orders, warehouse receipts) comprising of a P2P network and Ethereum smart contracts over the last 2 years.

The platform allows tokenization of any digital assets. A strong team in the DeFi movement, they are now building a Centrifuge-specific chain with Substrate, integrated their existing Go application with the Substrate chain.

The Centrifuge team also developed the Go Substrate RPC client supported by a Web3 Foundation grant.

The Centrifuge team also developed, along side with ChainSafe, the ChainBridge supported by Web3 Foundation grant.

The Centrifuge team has deep knowledge in distributed/decentralized applications, libp2p, Golang, Solidity and Ethereum overall, zkSNARKs, and tokenization of assets with NFTs and has been developing with Substrate since Summer 2019.

### Team Code Repos

- https://github.com/centrifuge/go-substrate-rpc-client
- https://github.com/centrifuge/centrifuge-chain
- https://github.com/centrifuge/go-centrifuge
- https://github.com/centrifuge/fudge

### Team LinkedIn Profiles (if available)

- https://www.linkedin.com/in/mhervas/
- https://www.linkedin.com/in/cosmin-damian-a634b0166

## Development Status :open_book:

V1 version implemented at https://github.com/centrifuge/go-substrate-rpc-client

V2 will be implemented as part of this grant

## Development Roadmap :nut_and_bolt:

### Milestone 1 - Dynamic Type Loader from metadata
- Understanding metadata structure and parsing metadata into registry - 40h
- How to implement with generics & reflection - 80h
- Actual implementation + testing - 80h

*Estimated hours: 200*
*Estimated budget: $150/h x 200h = $30,000*

### Milestone 2 - New generic type registry encoder/decoder
- Use the registry for parsing simple and complex structs - 80h
- Adapt current event & storage processing to new model - 60h
- Adapt current Types Test to decode events from the latest X blocks of popular chains - 20h

*Estimated hours: 160*
*Estimated budget: $150/h x 160h = $24,000*

### Maintenance
After this work is done, maintenance should be reduced to 5 hours a week for one engineer.
We believe that one year of maintenance is enough for now.

*Estimated hours: 52 weeks / year * 5 hours / week = 260 hours*
*Estimated budget: $150/h x 260h = $39,000*

### Budget Summary
This table provides a cost breakdown based on the milestones and deliverables above.

| |  |    |  Estimates |
| --------  | -------- |----|--- |
| **MS**  | **Deliverable**     | **Hours**| **Budget** |
| 1 | Dynamic Type Loader| 200 | $30,000     |
||**Subtotal Milestone 1**| **200**| **$30,000**|
|2| Generic type registry Encoder/Decoder | 160 | $24,000| 
||**Subtotal Milestone 2**|**160**|**$24,000**|
|3| 1 year Maintenance | 260 | $39,000| 
||**Totals**|**620**|**$93,000**|


## Future Plans

Centrifuge is an active user of the GSRPC library and will always want to maintain it in a timely manner. 

