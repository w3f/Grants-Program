# Open Grant Proposal

- **Project Name:** XP.network Relay Chain Protocol.
- **Team Name:** XP.network.
- **Payment Address:** BTC: bc1qdpx2e6lejre536ph0csskas888ua3pz5p4pkuj.

## Project Overview

### Overview

XP.network is a codeless platform for building blockchain agnostic NFT DApps. XP.network allows non-developers to build their NFT marketplaces, galleries, museums and many more use-cases without coding. We will connect our users's applications to different blockchains via Polkadot.

In order to synchronize communication between different [parachains](https://research.web3.foundation/en/latest/polkadot/XCMP/index.html) we want to build our own protocol which will be used by a network of XP.network pallets, that can be attached to and be used by any parachain.

Since, using the current XCMP protocol, it is hard to trace whether an incoming message is related to any previous transaction or request, we will elaborate a protocol that will enable such tracking by the "TopicId", which is especially useful when multiple transactions(TXs) are executed between two blockchains (Lx, Ly). Besides, when a message is sent from one parachain to another the initiating parachain is not kept updated about the progress of a transaction, while our protocol will take care of that. The XP.network Relay Chain protocol will be supported by a group of pallets, each acting like a “post office” in a post office network.

#### Integration

Any parachain, parathread or bridge can attach our pallet and use its functionality. The pallets will act as a “post office network” supporting the protocol that enables nodes to keep track of the “TopicIds”. Each "TopicId" represents one negotiated transaction (TX) between two parachains (Lx, Ly).

### Project Details

The project is comprised of 2 interdependent deliverables:

1. The XP.network Relay Chain Protocol, which will enable parachains to communicate kepping track of the current state of every transaction.

2. A Substrate Pallet implementing the XP.network Relay Chain protocol.


**XP Relay Chain Protocol** will be supported by a number of pallets, each acting as a “post office” for its parathread. A typical message will include:
```terminal
{
ID:                 id,               //required to identify that the other blockchain’s reply is related to this request,
To:                 dest,             // indicates the destination parachain / parathread,
Payload:            blob              // A binary representation of the "intention"
}
```

The runtime [storage](https://substrate.dev/rustdocs/v3.0.0/frame_support/storage/trait.StorageValue.html#required-methods) & the message inside the binary payload will be structured as follows:

![img](https://github.com/xp-network/w3f_application/blob/main/xp.network%20blob.png)

The **XP.network Decision Tree**, regulating the efficiency of the data flow between the two pallets, will roughly look like this:

![img](https://github.com/xp-network/w3f_application/blob/main/XP.network%20Protocol-3.png)

The above scheme is a work in progress and subject to change.

Apart from standard setup, a pallet implementing XP.network Relay Chain Protocol consists of:

1. **Message Listener** - it listens to the incomming messages and passes them to the Decision Tree.
2. **Message Deserialiser** - it reads the contents of the binary file and populates the fields of the Message struct.
3. **Message Serialiser** - it packs the values of the Message struct into a binary representation.
4. **Message Sender** - it uses the Relay Chain callback mechanism to communicate with the other parachains and parathreads using XP Network protocol.
5. **Runtime Storage** - it stores the binaries with the current state of the corresponding transaction. Each blob can be accessed like so: ```sender[TopicId]```.
6. **Decsision Tree** - it controlls the eficiency of the data flow between the pallets.

#### The XP.network Relay Chain protocol is not:

This protocol is by no means a bridge between the blockchains. However, we have plans of building bridges to a number of blockchains in further projects.

#### Further development

We may add more flags to reflect more states of the negotiated transaction, for example, we can specify the reasons of rejection in the target blockchain, for example, due to lack of gas.

### Ecosystem Fit

- The XP.network protocol allows parachains to communicate in a connectionless but ordered and reliable way. The protocol allows to store the State of the negotiated TX and enables the functionality required to inform the User accordingly.

- All it takes is to attach the XP.network pallet to a parachain.

## Team

### Team members

- Dmitry Brook - CTO, Project Lead.
- Virbal Kint - Expert in Move, Rust & Co-Founder

### Contact

- **Contact Name:** Dmitry Briukhanov

- **Contact Email:** dima@xp.network.com

- [XP.network website](https://xp.network/)

### Legal Structure

- **Registered Address:** HaHAgana, 15, Or Yehuda, Israel
- **Registered Legal Entity:** XP Network

### Team Experience

**Dmitry Briukhanov**

- Over 18 years of experience in Development and Management 
- Former Senior Software Developer in Best Systems, Israel
- Former Team Lead in NLK, Russia

**Verbal Kint**

- Over 5 years of experiences in Blockchain Development 8 years in Rust, 1 year in Move and 15 years of development experience overall


### Team Code Repos (PoC)
[PoC Documentation](https://xp-network.github.io/poc-documentation/) Method names, parameters with types, return types and description.

[XCMP Pallet example](https://github.com/xp-network/xcmp_pallet-poc/tree/master/xmessage)

[Protocol Blob Serialisation example](https://github.com/xp-network/serde_xp_protocol)


### Team LinkedIn Profiles

[Dmitry Bryukhanov](https://www.linkedin.com/in/dmitry-briukhanov-60b2ab45/)

## Development Roadmap

### Overview

- **Total Estimated Duration:** 3 months.
- **Total Effort:** 120 days.
- **Total Costs:** $ 30,000

### Milestone 1 - VM Hub pallet Move bytecode to Solidity bytecode (pre-MVP)

- **Estimated Duration:** 20 working days (1 month)
- Working days **x** ppl. **:** 20 **x** 2
- Effort: 40 days
- **Costs:** $10,000

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Delivery time | Mid June |
| 0c. | Documentation | Documents containing product architecture as well as basic user manuals  |
| 1. | XP.network Protocol | XP.network protocol is developed and documented in textual descriptions and UML diagrams |
| 2. | Message serialiser | The binary Message serialiser is built |
| 3. | Message deserialiser | The binary Message deserialiser is built |
| 4. | Runtime Storage integration | Implementing the message blob CRUD functionality in the runtime storage |

### Milestone 2 — VM Hub pallet Solidity Code to Move bytecode (MVP)

- **Estimated Duration:** 20 working days (1 month)
- Working days **x** ppl. **:** 20 **x** 2
- Effort: 40 days
- **Costs:** $10,000

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Delivery time | Mid July |
| 0c. | Documentation | Documents containing product architecture as well as basic user manuals  |
| 1. | Message Listener | We will develop a module listening to the messages from the Relay Chain XCMP |
| 2. | Message Sender | We will develop a module sending the messages via the Relay Chain XCMP |
| 3. | Decision Tree | We will develop the efficient data flow controllers |
| 4. | Relay Cain Integration | We will establish communication between two pallets implementing the XP.network Relay Chain protocol via the Westend Relay Chain |

### Milestone 3 — VM Hub pallet Move Code & Solidity bytecode to Rust bytecode

- **Estimated Duration:** 20 working days (1 month)
- Working days **x** ppl. **:** 20 **x** 2
- Effort: 40 days
- **Costs:** $10,000

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Delivery time | Mid August |
| 0c. | Documentation | Documents containing product architecture as well as basic user manuals  |
| 1. | Compliance Validator | Developing automated tests for the XP.network protocol interactions between pallets with min 85% code coverage |
| 2. | Documentation | Writing the final documentation with all the amendments 1. XP.Network protocol, 2. XP.network pallets - textual & UML|
| 3. | Tutorials | Preparing tutorials with examples 1. How to use XP.network Protocol, 2. How to attach an XP.Network pallet to a parachain | 
| 4. | Testing in Polkadot Westnet| Testing and debugging Polkadot Westnet till 20 example transactions execute and the results are added to the blockchain | 

## Future Plans

**Community Plan**

Hiring 3-5 more developers

Joining Polkadot related events

Publishing articles in Telegram, medium.com and other channels

**Development Plan**

The XP.network Relay Chain Protocol is a work in progress. Once version 1.0.0 is implemented, we're planning to keep improving the protocol, eliminating yet undiscovered bugs and adding more functionality and flexibility.

## Additional Information 

[The project repo:](https://github.com/xp-network)
