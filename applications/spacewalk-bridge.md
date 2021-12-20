# W3F Grant Proposal

- **Project Name:** Spacewalk: a Stellar bridge
- **Team Name:** Pendulum
- **Payment Address:** [0x41826C59a853969DA6B819130E1c32A9fd7c94ba](https://etherscan.io/address/0x41826C59a853969DA6B819130E1c32A9fd7c94ba#tokentxns) (DAI)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2


## Project Overview :page_facing_up:

### Overview

Spacewalk is a bridge between Substrate-based parachains and [Stellar](https://stellar.org) which enables asset transfers to and from Stellar. This grant application is for developing the *Spacewalk protocol and pallet*. The Spacewalk bridge is built by the team behind the [Pendulum](http://pendulumchain.org) network (an upcoming parachain that connects fiat tokens from across multiple blockchain ecosystems).

### Project Details

Spacewalk bridge is developed to be a decentralized and trustless bridge to Stellar. This bridge enables two main activities:

- **Deposit**: bridge any Stellar asset to Substrate-based chains. The tokens of the source asset are transferred to some dedicated **bridge account** in Stellar where they are locked. The bridge then mints wrapped tokens in the target chain and transfers them to the recipient account.
- **Withdrawal**: bridge wrapped tokens in Substrate-based chains to Stellar. First, the user instructs the bridge to burn wrapped tokens in the Substrate-based chain. Afterwards, the bridge unlocks tokens held in the bridge account in Stellar and transfers them to some target account.

Stellar is not smart contract capable – therefore we follow the recommendation laid out in the [Polkadot documentation](https://wiki.polkadot.network/docs/learn-bridges#via-higher-order-protocols) and base our bridge design on XCLAIM. In XCLAIM, the bridge account is called a **vault**. XCLAIM is based on the following four core features:

- Implement a chain relay for Stellar in the bridge pallet
- Employ collateralization in order to ensure that the vault exhibits good behavior
- Ensure that the economic value of the collateral exceeds the value of the vault
- Enable a decentralized network of vaults

Our bridge differs from XCLAIM in some details as follows:

- Implementing a full chain relay for Stellar is out of scope of this web3 grant proposal as this requires an update to the Stellar consensus protocol. Instead the Spacewalk protocol assumes that a light Stellar node is co-located for every node of the Substrate-based chain and uses the Stellar nodes as an oracle.
- We will employ a single vault instead of a network of vaults because according to Section V.E. of [Xclaim: Trustless, interoperable, cryptocurrency-backed assets](https://eprint.iacr.org/2018/643.pdf), the latter version leads to non-fungible wrapped tokens which is not a desirable condition.

**Architecture**

![Stellar Bridge Web3 Grant(3)](https://user-images.githubusercontent.com/52105313/146759286-01810328-a383-4306-9ad2-61515913b7fb.png)

The architecture of the bridge consists of the following components:

- **Bridge accounts**: this is a set of escrow accounts used to lock assets. They are completely and only controlled by the bridge nodes. The Spacewalk bridge potentially requires multiple bridge accounts instead of a single bridge accounts because in Stellar a single account is limited to hold up to 1000 distinct assets. Every bridge account is associated with a maximum of 1000 distinct Stellar assets and will be used whenever one of its associated assets is used in a deposit or withdrawal operation. Stellar users initiate a deposit by sending tokens to the appropriate bridge account, which they request from the bridge pallet prior to the deposit. Likewise bridge nodes will instruct the bridge accounts to unlock and send tokens back the users during a withdrawal.
- **Bridge Pallet**: this is the main component of the Spacewalk bridge that implements all logic on the side of the Substrate-based chain. It is particularly responsible for minting tokens during deposits and burning tokens during withdrawals. The storage of the bridge pallet maintains the complete state that is required for the bridge to work correctly. This state contains (among others): the account ids of the Stellar bridge accounts, the association of bridge accounts to Stellar assets, book keeping information about the state of the Stellar network and assets locked in the bridge accounts. It also maintains the collateral of the bridge nodes and slashes it in case one of the bridge nodes misbehaves.
- **Bridge Nodes**: these are privately owned nodes that watch changes in the storage of the bridge and create, sign and submit Stellar transactions that a) unlock tokens during a withdrawal and b) maintain the set of bridge accounts and its signers. Each bridge nodes contains some secret value. Together these secrets can be used to sign transactions for the bridge accounts. The bridge nodes use a t-out-of-n threshold signing scheme for the bridge accounts. For n ≤ 20 this is achieved through multisignature accounts that are directly supported through the Stellar protocol and for n > 20 this is achieved through key aggregation for Schnorr signatures (see [Maxwell, Gregory, et al. "Simple schnorr multi-signatures with applications to bitcoin"](https://eprint.iacr.org/2018/068.pdf)). Every bridge node needs to lock a certain amount of PEN tokens as a collateral in the bridge pallet. These tokens are slashed in case the bridge node misbehaves.
- **Stellar Oracle**: is a system that provides information about the state of the Stellar network to the bridge pallet. In XCLAIM this is implemented through a chain relay in the bridge pallet. However, we will aim for a solution where every node of the Substrate-based chain is co-located with a Stellar validator node, which it uses as an oracle.

**Out of scope**

The following aspects are out of scope of the current proposal and subject to future applications:

- Stellar protocol updates that are required to implement a chain relay/light client/simplified payment verification for Stellar as a Substrate pallet
- Stellar protocol updates that allow to use key aggregation for ed25519 signature schemes

### Ecosystem Fit

The Spacewalk bridge is the first bridge between the Stellar network and the Polkadot / Kusama ecosystem, which opens up a flow of stable tokens from the Stellar network into the Polkadot / Kusama ecosystem and, simultaneously, allow any Substrate-based blockchains to implement a direct Stellar bridge.

As part of the Pendulum goal of bringing as much fiat-based token liquidity to the parachain ecosystems, Spacewalk plays a central role. Furthermore, the entire community can benefit from this bridge by innovating on the open source code.

Currently, we are not aware of any projects in the Substrate / Polkadot / Kusama ecosystem that are building a bridge to the Stellar network, but similar bridges are being built for Ethereum layer 2 networks, such as the [Newscrypto](https://bridge.newscrypto.io/) bridge between Polygon and Stellar.

## Team :busts_in_silhouette:

### Team members

- Meinhard Benn, CEO
- Dr. Torsten Stüber, CTO
- Gonza Montiel, Full stack engineer

### Contact

- **Contact Name:** Erasmus Hagen
- **Contact Email:** erasmus@satoshipay.io
- **Website:** [pendulumchain.org](https://pendulumchain.org/)

### Legal Structure

- **Registered Address:** The Sotheby Building, Rodney Village, Rodney Bay, Gros-Islet, St. Lucia.
- **Registered Legal Entity:** Pendulum Development Ltd.

### Team’s experience

Meinhard Benn

- Involved in blockchain since 2011
- One of the first miners of the Ethereum network
- SatoshiPay developed one of the first payment channels in Bitcoin

Dr. Torsten Stüber

- Ph.D. in theoretical Computer Science
- 7 year academic researcher and lecturer in
    - formal languages, automata theory, complexity theory, computational logic, natural language processing, machine learning, cryptography
- author of a [WASM cryptography library](https://github.com/TorstenStueber/TweetNacl-WebAssembly)

Eng. Gonzalo Montiel

- Computer Science Engineer
- Degree orientation in production systems and automation
- 10 years in the software industry as: Core/backend developer, technical Leader, team manager
- 1 year as researcher in computer vision

### Team Code Repos

- [https://github.com/pendulum-chain](https://github.com/pendulum-chain)
- [https://github.com/pendulum-chain/pendulum-prototype](https://github.com/pendulum-chain/pendulum-prototype)

Members:

- [https://github.com/gonzamontiel](https://github.com/gonzamontiel)
- [https://github.com/TorstenStueber](https://github.com/TorstenStueber)

### Team LinkedIn Profiles (if available)

- [https://www.linkedin.com/in/meinhard/](https://www.linkedin.com/in/meinhard/)
- [https://www.linkedin.com/in/torstenstueber/](https://www.linkedin.com/in/torstenstueber/)
- [https://www.linkedin.com/in/gonzamontiel/](https://www.linkedin.com/in/gonzamontiel/)

## Development Status :open_book:

A single-node prototype of the bridge has been developed. See links:

- [Prototype bridge GitHub repo](https://github.com/pendulum-chain/pendulum-prototype)
- [Prototype bridge UI](https://playground.pendulumchain.org/bridge)

A detailed bridge concept is currently being researched (described in this grant application)

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 6 Months
- **Full-Time Equivalent (FTE):** 1
- **Total Costs:** 48,000 USD

### Milestone 1 – Protocol for single bridge account and bridge node

- **Estimated duration:** 1 month
- **FTE:** 1
- **Costs:** 8,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 / GPLv3 / MIT / Unlicense |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can employ the bridge pallet and the Spacewalk protocol to build a working bridge. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Article | We will publish an article that explains the phase 1 Spacewalk protocol and will give an overview of the upcoming phases of the protocol.
| 1. | Phase 1 bridge protocol specification | We will define phase 1 of the Spacewalk protocol. In this phase we take the assumption that there is (a) only one bridge node (b) one bridge account and (c) one node of the Substrate chain. |  
| 1a. | Add trustlines | Protocol specification of how the bridge node adds trustlines for new Stellar assets to the bridge account. |  
| 2a. | Off-chain worker to watch deposits | The off-chain worker of the bridge pallet regularly queries a Stellar node to detect incoming deposits. |  
| 2b. | Prepare deposit | An extrinsic of the bridge pallet to register a deposit and to associate a target address in the Substrate chain. |  
| 2c. | Mint tokens | The pallet will mint wrapped tokens and send them to a target account whenever there is an incoming deposit. |  
| 2d. | Withdraw | An extrinsic of the bridge pallet to initiate a withdrawal. It will burn tokens in the Substrate chain. |  


### Milestone 2 – Fixed set of multiple bridge nodes

- **Estimated duration:** 1 month
- **FTE:** 1
- **Costs:** 8,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 / GPLv3 / MIT / Unlicense |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can employ the bridge pallet and the Spacewalk protocol to build a working bridge. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 1   | Phase 2 bridge protocol specification | We will define phase 2 of the Spacewalk protocol. In this phase we take the assumption that there are (a) multiple bridge nodes – but the set of nodes is fixed (b) one bridge account and (c) one node of the Substrate chain. |  
| 1.1 | Bridge account cosigning | Protocol specification of how the bridge nodes cosign the bridge account. Uses Stellar t-out-of-n multi-signature accounts. |  
 

### Milestone 3 – Advanced Stellar oracle

- **Estimated duration:** 1 month
- **FTE:** 1
- **Costs:** 8,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 / GPLv3 / MIT / Unlicense |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can employ the bridge pallet and the Spacewalk protocol to build a working bridge. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 1. | Phase 3 bridge protocol specification | We will define phase 3 of the Spacewalk protocol. In this phase we take the assumption that there are (a) multiple bridge nodes – but the set of nodes is fixed (b) one bridge account and (c) multiple nodes of the Substrate chain – but this set is fixed. |  
| 2. | Stellar oracle with consensus | The off-chain worker of the bridge pallet regularly queries a Stellar node to detect incoming deposits. The bridge nodes will find consensus about the state of the Stellar through voting. |  


### Milestone 4 – Dynamic set of bridge nodes

- **Estimated duration:** 2 month
- **FTE:** 2
- **Costs:** 16,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 / GPLv3 / MIT / Unlicense |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can employ the bridge pallet and the Spacewalk protocol to build a working bridge. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 1. | Phase 4 bridge protocol specification | We will define phase 4 of the Spacewalk protocol. In this phase we take the assumption that there is (a) dynamic set of multiple bridge nodes – but limited to 20 nodes (b) one bridge account and (c) multiple nodes of the Substrate chain – but this set is fixed. Bridge nodes need to stake collateral to disincentivize misbehaviour. |  
| 1.1 | Change cosigners of bridge account | Protocol specification of how the bridge nodes dynamically redefine the cosigners of the bridge account. |  
| 2a. | Collateral staking | Pallet function that allows bridge nodes to stake collateral. |  
| 2b. | Collateral slashing | Detect misbehaviour of bridge nodes and slash their collateral. |  
| 2c. | Add bridge nodes | Pallet function to add a new bridge node to the set of registered bridge nodes. |  
| 2d. | Remove bridge node | Pallet function to remove a bridge node from the set of registered bridge nodes. |  


### Milestone 5 – Dynamic set of bridge accounts

- **Estimated duration:** 1 month
- **FTE:** 1
- **Costs:** 8,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 / GPLv3 / MIT / Unlicense |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can employ the bridge pallet and the Spacewalk protocol to build a working bridge. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Article | We will publish an article that explains the phase Spacewalk protocol and pallet that we built as part of the grant.
| 1. | Phase 5 bridge protocol specification | We will define phase 5 of the Spacewalk protocol. In this phase we take the assumption that there is (a) dynamic set of multiple bridge nodes – but limited to 20 nodes (b) dynamic set of bridge accounts and (c) multiple nodes of the Substrate chain – but this set is fixed. Bridge nodes need to stake collateral to disincentivize misbehaviour. |  
| 1.1 | Add new bridge accounts | Protocol specification of how the bridge nodes create a new bridge account and set up appropriate cosigners. |  
| 2a. | Query bridge accounts | Pallet function to query the set of bridge accounts and Stellar assets associated with each bridge accounts. |  
| 2b. | Set up new bridge account | Pallet function(s) to create a new bridge account if the current set of bridge account already reached their trustline limits. |  


## Future Plans

This application covers the open source Spacewalk pallet and API/protocol definition. A fully functioning instance of a Spacewalk bridge will be implemented in parallel for Pendulum. With close connections in the Stellar ecosystem, Pendulum will encourage participation in the bridge network through key partnerships.

The Spacewalk project grows beyond the first version alongside the community of users and open source contributors, as we have seen interest in both the Stellar and Substrate communities for such a bridge. Pendulum itself will be the first use case for the bridge and will naturally justify further investment in maintenance and expansion.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation Website

**Any other grants?** The Pendulum prototype was supported with a grant from the Stellar Development Foundation.
