# Ocelloids: Monitoring SDK

- **Team Name:** SO/DA zone
- **Payment Address:** Fiat 04.05.2023, 16:37
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview

Ocelloids is an open-source software development kit for building monitoring applications for Substrate-based networks. With Ocelloids, you can easily set up complex multi-chain monitoring logic.

## Project Details

The project's features are outlined in the following sections. Three primary features are planned to be delivered as part of the grant:

1. Multi-chain support: configurable multi-chain wrapper for Polkadot.js Promise and Rx APIs to simplify setup for multi-chain monitoring.
2. Core Components: a set of reactive operators for sourcing core Substrate data, such as events and extrinsics, and reactive controls for filtering and transformation over it. The core components will encapsulate common patterns like call batching and multi-signature calls.
3. Domain logic for ink! smart contracts monitoring.

### 1. Multi-chain Support

Ocelloids provides a configurable multi-chain wrapper for Polkadot.js Promise and Rx APIs, simplifying setup for multi-chain monitoring.

Example usage:

```javascript
const substrate = new SubstrateApis(new ConfigFromFile())

const polkadotPipe = substrate.polkadot.pipe(
  // Some monitoring logic
)

// Subscribe to events on one chain
polkadotPipe.subscribe(
  event => console.log("Something happened on Polkadot: ", event)
)

// Pipes for different chains can be merged
const monitorOnManyChains = merge(
  polkadotPipe,
  kusamaPipe,
  statemintPipe
)

monitorOnManyChains.subscribe(
  ({ chain, event }) => console.log(`Something happened on ${chain}: ${event}`)
)
```

### 2. Core Components

Ocelloids provides a set of [reactive operators](https://rxjs.dev/guide/operators) for sourcing, transforming and filtering core Substrate data such as events and extrinsics. Additionally, the core components take care of common patterns like call batching and multi-signature calls.

#### **Data Sourcing**

Reusable subscriptions to events and extrinsic calls on Substrate networks. Here are some illustrative code snippets of the main functionalities:

```javascript
import {
  events,
  newExtrinsics, finalisedExtrinsics, pendingExtrinsics,
  flattenBatch, extractMultiSigCall,
  historicEvents
} from '@ocelloids/core'

// Subscribe to new events on Polkadot
substrate.polkadot.pipe(
  events()
).subscribe(
  event => console.log("New event on Polkadot: ", event)
)

// Subscribe to new extrinsics on Polkadot and extract underlying call(s)
substrate.polkadot.pipe(
  newExtrinsics(),
  flattenBatch(), // Flatten batch into individual calls
  extractMultiSigCall(), // Extract underlying call of multisig operations
  ... // some monitoring logic over calls
).subscribe(
  call => console.log("New call on Polkadot: ", call)
)

// Subscribe to new extrinsics on finalised blocks
substrate.polkadot.pipe(
  finalisedExtrinsics()
).subscribe(
  ext => console.log("New finalised extrinsic on Polkadot: ", ext)
)

// Subscribe to pending extrinsics on Polkadot
substrate.polkadot.pipe(
  pendingExtrinsics()
).subscribe(
  exts => console.log("Pending extrinsics on Polkadot: ", exts)
)

// Subscribe to events on Polkadot starting from block 15192447
substrate.polkadot.pipe(
  historicEvents(15192447)
).subscribe(
  event => console.log("New event on Polkadot: ", event)
)
```

#### **Reactive Controls**

The control components allow the system to react to external configuration changes and other on-chain activities.

Example usage of reactive control with JSON filter:

```javascript
import { events, jsonFilter, ControlQuery } from '@ocelloids/core'

// Query for filtering events
const transfersQuery = new ControlQuery({
  $and: [
    { 'event.section': 'balances' },
    { 'event.method': 'Transfer' },
    {
      $or: [
        { 'event.data.from': ALICE },
        { 'event.data.to': ALICE }
      ]
    }
  ]
})

// Subscribe to events of Alice creating a new proxy account
// and update transfersQuery to filter events involving
// the new proxy account instead.
substrate.polkadot.pipe(
  events(),
  jsonFilter(new Query({
    'event.section': 'proxy',
    'event.method': 'ProxyAdded',
    'event.data.who': ALICE
  }))
).subscribe(
  // Change transferQuery to start filtering
  // balance transfer events of Alice's new proxy account
  event => transfersQuery.change({
    $and: [
      { 'event.section': 'balances' },
      { 'event.method': 'Transfer' },
      {
        $or: [
          { 'event.data.from': event.data.delegatee },
          { 'event.data.to': event.data.delegatee }
        ]
      }
    ]
  })
)

// Subscribe to balance transfer events filtered using transfersQuery
// It will first monitor Alice's account for balance transfer events
// After Alice creates a new proxy account, it will switch to monitoring the proxy instead
substrate.polkadot.pipe(
  events(),
  jsonFilter(transfersQuery)
).subscribe(
  event => console.log("Balance transfer event: ", event)
)
```

#### **Substrate Type Conversions**

We will provide type conversions for necessary Substrate objects that retain both key-value mapping and primitive types, i.e. a mix between the human and primitive representation, defaulting to the human one. This conversion allows easy JSON filtering and matching operations.

### 3. Domain Logic Components

The above examples of balance transfer monitoring only involve JSON filtering over events. However, there will be more complex cases where it could be required to query on-chain storage and make some computations over the results along the monitoring stream. Ocelloids SDK aims to extract reusable core logic for FRAME pallets as domain logic components to simplify the development process for these use cases.

#### ink! Smart Contracts Monitoring

The Ocelloids SDK will provide domain logic components for monitoring ink! smart contracts which will take care of:

- filtering Substrate events and extrinsics for contract events and calls
- resolving and loading contract metadata
- decoding contract event and call with ABI metadata
- converting decoded parameters to typed key-value mapping for easy JSON filtering

Example usage of contract components:

```javascript
import { jsonFilter, ControlQuery } from '@ocelloids/core'
import { contractEvents, contractCalls } from '@ocelloids/components/contracts'

const CONTRACT_ADDRESS = "5FCqFC5xdPDv8mCkaiC2hDbRauc3pg15XDEJme98BjyCsqNU"

// Monitor transfer events emitted by the contract
substrate.rococoContracts.pipe(
  contractEvents(CONTRACT_ADDRESS),
  jsonFilter(Query.of({
    'event.name': 'Transfer',
    'event.param.from': ALICE,
    'event.param.value': { $gt: 100000000 }
  }))
).subscribe(
  event => console.log("New transfer event: ", event)
)

// Monitor transfer calls
substrate.rococoContracts.pipe(
  contractCalls(CONTRACT_ADDRESS),
  jsonFilter(Query.of({
    'call.method': 'Transfer',
    'call.param.value': { $gt: 100000000 }
  }))
).subscribe(
  call => console.log("New transfer call: ", call)
)
```

### Tech Stack

We will use Typescript since we are building up upon Polkadot.js API.
We will also use [RxJS](https://rxjs.dev/) under the hood for our reactive operators and data streams.
We are considering [Mingo](https://github.com/kofrasa/mingo) or similar technology for data transformation and filtering operations using MongoDB query language.

## Ecosystem Fit

Ocelloids SDK provides several advantages to the ecosystem:

1. Ocelloids is the first open-source SDK to build complex monitoring applications. Its design provides a smooth experience for developers by abstracting away the underlying complexity of the monitoring logic.
2. It provides reusable components that take care of common patterns for reactive sourcing and filtering, including call batching and multi-signature calls, which can be complex and time-consuming to implement manually.
3. Ocelloids' domain logic for ink! smart contract monitoring will be a valuable addition to the Substrate ecosystem. Smart contract monitoring is an essential infrastructural piece for Dapp developers as seen by the popularity of services such as OpenZeppelin Defender and Forta detection bots. There is currently a lack of similar sophisticated services for ink! contracts and Ocelloids SDK will provide the necessary base to build powerful ink! monitoring applications.

## Team :busts_in_silhouette:

### Team members

- Marc Fornós
- Xueying Wang

### Contact

- **Contact Name:** Marc Fornós
- **Contact Email:** frozen.pomelo@gmail.com

### Legal Structure

N/A

### Team's experience

**Marc Fornós** has been designing and implementing software systems for 20 years. He is an expert in the area of distributed systems and data-intensive applications. His experience ranges from warehouse automation with radio-frequency terminals, to being the technical director of an airline post-sale revenue optimization software-as-a-service platform, generating millions in incremental revenue during eight years of operation. In the recent past, he was in charge of evolving a commercial Ethereum block explorer and bootstrapping an explorer for Substrate-based networks focused on the contracts pallet and ink! smart contracts.

**Xueying Wang** pivoted to software development after completing an MSc. in Aerospace Engineering and has been in the industry for the past eight years. During this time, she pioneered conversational AI assistants for airlines, counting more than 20 assistants in production covering ten languages for customer service, FAQ and in-chat purchases. She also built a scalable publish-subscribe system to trigger actions on flight feed events for the automated agents. She participated in designing a composable Solid POD/RDF data browser and bootstrapping an explorer for Substrate-based networks focused on the contracts pallet and ink! smart contracts.

We applied, implemented and delivered the following grants under our previous employer:
* https://github.com/w3f/Grants-Program/blob/master/applications/epirus_substrate_explorer.md
* https://github.com/w3f/Grants-Program/blob/master/applications/epirus_substrate_phase_2.md

### Team Code Repos

- https://github.com/mfornos
- https://github.com/XY-Wang
- https://github.com/frozenpomelo (shared account)

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 2 months
- **Full-Time Equivalent (FTE):** 2
- **Total Costs:** 28,000 USD

### Milestone 1

- **Estimated duration:** 2 months
- **FTE:** 2
- **Costs:** 28,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | We will provide both inline documentation of the code and a basic guide that explains how to set up and run a monitoring application. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 1. | Core SDK | As described in [Multi-chain Support](#1-multi-chain-support) and [Core Components](#2-core-components). |
| 2. | ink! Contracts Domain Logic | As described in [ink! Smart Contracts Monitoring](#ink-smart-contracts-monitoring). |
| 3. | Example application | A Node.js CLI tool to execute the ink! smart contract monitoring logic and log the alerts.  |


## Future Plans

Our long-term vision is to offer an end-to-end solution accessible as a web application to allow end-users to configure monitoring agents and subscribe to on-chain activities of interest.
The web user interface exposes the domain logic components for monitoring use cases. For notifications, we will integrate with a notification centre solution, like [Novu](https://novu.co/).

We will start with contracts monitoring for parachains and solo chains that integrate `pallet-contracts`. Later, we plan to expand the offering to other pallets and networks, including custom pallets of parachains and solo chains. The key differentiator with existing solutions is the bundling of vertical logic per pallet with complex monitoring patterns.

Additionally, we will explore integrating the core technology into [Forta](https://forta.org/) bots.

Other enhancements:

- We aim to expand the domain-logic components to other FRAME pallets like `multisig`, `xcm` and `staking`.
- We aim to provide a comprehensive collection of [Node-RED](https://nodered.org/) nodes. It will allow for easy integration with thousands of existing building blocks for visual flow programming.
- Finally, we plan to support time series to aggregate data over time. This functionality will help users identify trends, such as when balance transfers exceed 100 DOT within a week.

