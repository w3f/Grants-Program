# substrate-graphql-api


- **Team Name:** Mert Köklü
- **Payment Details:**
  - **DOT**: 1pZZTE5KDshcy4ZpD6vFvP2WjQ2MFCwuzXN8H7CTTVgnS6Q
  - **Payment**: 1pZZTE5KDshcy4ZpD6vFvP2WjQ2MFCwuzXN8H7CTTVgnS6Q - USDC
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2


## Project Overview :page_facing_up:


### Overview

GraphQL API for seamless Substrate blockchain interactions.

Substrate GraphQL API is a service that provides a GraphQL interface for interacting with blockchain nodes built using Substrate's FRAME framework. This project aims to create a GraphQL counterpart to the existing Substrate REST API (Sidecar), offering developers a more flexible and efficient way to query blockchain data.

This project relates to the Substrate ecosystem by providing an essential tool for developers building on Substrate-based chains. It will integrate directly with Substrate nodes, offering a GraphQL layer that simplifies complex queries and reduces over-fetching of data.

GraphQL's benefits of flexible querying, strong typing, and efficient data fetching will significantly enhance the developer experience in the Substrate ecosystem. This project will make it easier for developers to build sophisticated applications on Substrate-based chains.



### Project Details

**1. Architecture Overview:**

* GraphQL server built with Apollo Server
* TypeScript-based implementation
* Integration with Polkadot.js API for blockchain interaction
* Schema-first design approach
* Local webview UI for configuration management
* Metrics and Prometheus integration
* In-browser GraphQL IDE (similar to GraphiQL) for interactive querying


**2. Core Components:**

* GraphQL schema definition
* Resolvers for each query, and mutation
* Type definitions for Substrate-specific data structures
* Middleware for error handling and performance monitoring
* Configuration manager with local webview UI
* Metrics collection and Prometheus endpoint
* Interactive GraphQL editor for in-browser querying


**3. Key Features:**

* Query support for all major Substrate modules (System, Balances, Staking, etc.)
* Batched queries to minimize network requests
* Automatic type generation from GraphQL schema
* Configuration management through a user-friendly UI
* Prometheus metrics for monitoring
* Support for custom Substrate types
* Logging with configurable levels and output formats
* Interactive in-browser GraphQL IDE for easy exploration and testing of the API


**4. Configuration Manager with Local Webview UI:**

* Implement a configuration manager
* Create a local webview UI for easy configuration of:
  * Express server settings (bind host, port, keep-alive timeout)
  * Substrate node connection URL
  * Custom Substrate types
  * Logging settings
  * Metrics and Prometheus settings
* Allow saving and loading of configuration profiles


**5. Metrics and Prometheus Integration:**

* Implement a metrics collection system
* Include default node metrics and custom GraphQL-specific metrics:
  * Query complexity
  * Resolver timing
* Expose a Prometheus-compatible endpoint for metrics scraping
* Allow configuration of metrics server host and port
* Implement optional query parameter tracking in metrics

**6. Performance Considerations:**

* Implement DataLoader for batching and caching
* Use of persisted queries for common operations
* Intelligent pagination for large result sets
* Query complexity analysis and limitations

**7. Security Measures:**

* Rate limiting on queries that can be configured in the UI
* Query depth and complexity analysis

**8. Testing Strategy:**

* Unit tests for resolvers and utility functions
* Integration tests with a local Substrate node

**9. Documentation:**

* API reference generated from GraphQL schema
* Usage examples and best practices
* Configuration guide for the local webview UI

**10. Initially Supported Chains:**   
1. Acala
2. Asset Hub Kusama
3. Asset Hub Polkadot
4. Asset Hub Westend
5. Astar
6. Bifrost
7. Bifrost Polkadot
8. Calamari
9. Crust
10. Dock Mainnet
11. Dock PoS Mainnet
12. Dock Testnet
13. Heiko
14. Karura
15. KILT
16. Kulupu
17. Kusama
18. Mandala
19. Manta
20. Parallel
21. Polkadot
22. Polymesh
23. Shiden
24. Sora
25. Westend



**11. Schema Design (Partial, Work in Progress):**
```graphql
type Query {
  block(height: Int): Block
  blocks(range: String): [Block!]!
  blockHash(height: Int!): String!
  chainHead: Block!
  account(address: String!): Account!
  accounts(addresses: [String!]!): [Account!]!
  extrinsic(blockHeight: Int!, index: Int!): Extrinsic
  events(blockHeight: Int): [Event!]!
  runtime: Runtime!
  metadata: Metadata!
  networkState: NetworkState!
  nodeVersion: String!
  systemHealth: SystemHealth!
  parachainInfo: ParachainInfo
}


type Mutation {
  submitExtrinsic(extrinsic: String!): ExtrinsicResult!
}

type Block {
  number: Int!
  hash: String!
  parentHash: String!
  stateRoot: String!
  extrinsicsRoot: String!
  author: String
  timestamp: String!
  extrinsics: [Extrinsic!]!
  events: [Event!]!
  logs: [Log!]!
  onInitialize: BlockHooks
  onFinalize: BlockHooks
}

type BlockHooks {
  events: [Event!]!
}

type Extrinsic {
  index: Int!
  hash: String!
  method: String!
  section: String!
  args: JSON
  signer: String
  nonce: Int
  tip: String
  era: Era
  signature: String
  success: Boolean!
  paysFee: Boolean!
}

type Era {
  immortal: Boolean
  mortal: [Int!]
}

type Event {
  index: Int!
  section: String!
  method: String!
  data: JSON!
  topics: [String!]!
  block: Block!
}

type Log {
  type: String!
  index: Int!
  value: JSON!
}

type Account {
  address: String!
  balance: Balance!
  nonce: Int!
  identity: Identity
  locks: [Lock!]!
  reserved: String!
  nominees: [String!]
  stakingInfo: StakingInfo
}

type Balance {
  free: String!
  reserved: String!
  miscFrozen: String!
  feeFrozen: String!
}

type Identity {
  display: String
  legal: String
  web: String
  riot: String
  email: String
  twitter: String
}

type Lock {
  id: String!
  amount: String!
  reasons: String!
}

type StakingInfo {
  stash: String!
  controller: String
  rewardDestination: RewardDestination!
  nextSessionKeys: String
  electionStatus: JSON
  validatorPrefs: ValidatorPrefs
}

type RewardDestination {
  staked: Boolean
  stash: Boolean
  controller: Boolean
  account: String
}

type ValidatorPrefs {
  commission: Int!
  blocked: Boolean!
}

type Runtime {
  spec: RuntimeSpec!
  metadata: String!
}

type RuntimeSpec {
  specName: String!
  implName: String!
  authoringVersion: Int!
  specVersion: Int!
  implVersion: Int!
  transactionVersion: Int!
}

type Metadata {
  magicNumber: Int!
  metadata: String!
}

type NetworkState {
  peerId: String!
  listenedAddresses: [String!]!
  externalAddresses: [String!]!
  connectedPeers: [Peer!]!
  notConnectedPeers: [Peer!]!
}

type Peer {
  peerId: String!
  roles: String!
  bestHash: String!
  bestNumber: Int!
}

type SystemHealth {
  isSyncing: Boolean!
  peers: Int!
  shouldHavePeers: Boolean!
}

type ParachainInfo {
  parachainId: Int!
  relayChain: String!
}

type ExtrinsicResult {
  hash: String!
  included: Boolean!
  block: Block
}

type BalanceChange {
  address: String!
  free: String!
  reserved: String!
  total: String!
}


scalar JSON
```


This project will not:

* Handle private key management or transaction signing




### Ecosystem Fit

The Substrate GraphQL API fits into the ecosystem by providing a modern, efficient querying layer for Substrate-based blockchains. It targets developers building dApps, wallets, block explorers, and other services that need to interact with Substrate chains.

The primary needs this project addresses are:
* Efficient data fetching with reduced over-fetching
* Strongly typed schema for improved developer experience
* Flexible querying capabilities for complex data requirements
* Easy configuration through a user-friendly interface

Similar projects in the Substrate / Polkadot / Kusama ecosystem:

* Substrate API Sidecar (REST API)

My project differs from Substrate API Sidecar in several key ways:

**1. GraphQL vs REST:**
* The GraphQL API allows clients to request exactly the data they need, reducing over-fetching and under-fetching of data.
* It provides a strongly typed schema, improving developer experience and enabling better tooling support.


**2. Query Flexibility:**
* GraphQL allows for more complex, nested queries in a single request, which can be more efficient than multiple REST API calls.
* The schema can be easily extended without breaking existing queries, providing better backwards compatibility.


**3. Interactive API Explorer:**
* The included GraphQL IDE allows developers to interactively explore and test the API directly in their browser, improving the developer experience.


**4. Performance Optimizations:**
* Implementation of DataLoader for efficient batching and caching of database queries.
Su* pport for persisted queries to optimize common operations.


**5. Type Generation:**
* Automatic type generation from the GraphQL schema, which can be used in client applications for type-safe API interactions.


**6. Configuration UI:**
* While Substrate API Sidecar uses environment variables for configuration, this project provides a user-friendly local webview UI for easier setup and management.


## Team :busts_in_silhouette:


### Team members

- Mert Köklü

### Contact

- **Contact Name:** Mert Köklü
- **Contact Email:** kklumert@gmail.com
- **Website:** https://github.com/justmert

### Legal Structure

- **Registered Address:** N/A
- **Registered Legal Entity:** Individual

### Team's experience

**Mert Köklü - Developer**

Mert holds a degree in Computer Science and worked as the Intelligent Video Analytics Team Leader at an NVIDIA distributor company for two years, developing AI solutions. He has since contributed to multiple Web3 protocols through innovative projects. Mert is a certified NVIDIA instructor and ambassador for organizations like Microsoft and The Graph protocol.

Notable grantee projects included in `Team Code Repos` section.

### Team Code Repos

- https://github.com/justmert/substrate-graphql-api
- https://github.com/justmert/arbitrum-python-sdk
- https://github.com/ApeWorX/ape-cairo

**Github Account**

- https://github.com/justmert

### Team LinkedIn Profiles (if available)

- https://www.linkedin.com/in/mertkoklu/


## Development Status :open_book:

While this is a new project, it builds upon the concepts and learnings from:

* Substrate API Sidecar: https://github.com/paritytech/substrate-api-sidecar
* Polkadot.js API: https://github.com/polkadot-js/api

I have conducted initial research and created a partial schema design for the GraphQL API. 

## Development Roadmap :nut_and_bolt:


### Overview

- **Total Estimated Duration:** 13 weeks
- **Full-Time Equivalent (FTE):**  1 FTE
- **Total Costs:** 30,000 USD
- **DOT %:** 50%

### Milestone 1 - Core API Implementation and Configuration Manager

- **Estimated duration:** 5 weeks
- **FTE:**  1
- **Costs:** 11,000 USD


| Number | Deliverable                 | Specification |
| -----: | ----------- | ------------- |
| **0a**     | License                     | Apache 2.0       |
| **0b**     | Documentation | I will provide both inline documentation of the code and a basic tutorial that explains how a user can spin up the GraphQL API and interact with it using GraphQL IDE. |
| **0c**     | Testing Guide  | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, I will describe how to run these tests.            |
| **0d**     | Docker                      | I will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.                                   |
| 0e     | Article                     | I will publish an **article** that explains the benefits of using GraphQL with Substrate and provides an overview of the API's core functionality. |
| 1      | GraphQL Schema              | I will design and implement a comprehensive GraphQL schema covering core Substrate concepts (blocks, accounts, extrinsics, events).                        |
| 2      | Query Resolvers             | I will implement resolvers for all queries defined in the schema, integrating with Polkadot.js API to fetch data from a Substrate node.                    |
| 4      | Configuration Manager       | I will develop a configuration manager with a local webview UI for easy setup of API parameters                 |
| 5      | In-browser GraphQL IDE      | I will integrate an interactive GraphQL IDE (similar to GraphiQL) that allows users to explore and test the API directly from their web browser.                 |
| 6      | Error Handling              | I will implement robust error handling and informative error messages for various failure scenarios.                                                       |


### Milestone 2 Advanced Features and Performance Optimization

- **Estimated Duration:** 5 weeks
- **FTE:**  1
- **Costs:** 11,000 USD

| Number | Deliverable | Specification  | 
| -----: | ----------- | ------------- |
| **0a**     | License                       | Apache 2.0            |
| **0b**     | Documentation      | I will provide both inline documentation of the code and a basic tutorial that explains how a user can use the advanced features implemented in this milestone.       |
| **0c**     | Testing Guide        | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, I will describe how to run these tests.                       |
| **0d**     | Docker                  | I will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.                         |
| 0e     | Article                       | I will publish an article showcasing the advanced features implemented in this milestone and providing performance benchmarks.     |
| 1      | Advanced Querying             | Implement support for complex queries involving multiple related entities (e.g., querying an account's transactions with associated events).   |
| 2      | Pagination                    | Implement cursor-based pagination for large result sets.            |
| 3      | Filtering and Sorting         | Add support for filtering and sorting options on applicable queries.                        |
| 4      | Persisted Queries             | Implement support for persisted queries to optimize performance for common operations.                         |
| 5      | Performance Optimization      | Implement DataLoader for batching and caching frequently accessed data.                                   |


### Milestone 3 - Metrics, Documentation, and Polishing


- **Estimated Duration:** 3 weeks
- **FTE:**  1
- **Costs:** 8,000 USD

| Number | Deliverable                    | Specification   |
| -----: | ----------- | ------------- |
| **0a**     | License                        | Apache 2.0   |
| **0b**     | Documentation                  | I will provide comprehensive documentation including API reference, integration guides, and best practices for using the configuration manager.    |
| **0c**     | Testing Guide                  | In addition to unit tests, I will provide integration tests and performance benchmarks. The guide will describe how to run these tests and interpret the results.|
| **0d**     | Docker                         | I will provide a production-ready Dockerfile for easy deployment of the Substrate GraphQL API.                                                                  |
| 0e     | Article                        | I will publish a comprehensive guide on integrating and using the Substrate GraphQL API in various scenarios (dApp development, block explorers, etc.).    |
| 1      | Metrics and Prometheus Integration | Implement a metrics collection system and Prometheus-compatible endpoint. |
| 2      | Security Enhancements          | Implement query rate limiting, and depth limitation.                                                                       |
| 3      | Custom Types Support           | Add support for custom Substrate types, allowing easy configuration through the webview UI.                                                                     |
| 4      | Logging Enhancements           | Implement configurable logging with various output formats and levels.                                                                                           |
| 5      | Performance Benchmarks         | Conduct and document performance benchmarks comparing the GraphQL API to REST-based alternatives.                                                                |


## Future Plans

Future Plans

- Ready-to-use Graphana integration
- Long-term maintenance and support for the Substrate GraphQL API
- Regular updates to support new Substrate features and runtime upgrades
- Expansion of query capabilities based on community feedback
- Potential development of client-side libraries for popular programming languages but I need to see the demand for this feature. Since there are already great client-side libraries for Substrate.


## Referral Program (optional) :moneybag:


- **Referrer:** N/A
- **Payment Address:** N/A

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation Website

