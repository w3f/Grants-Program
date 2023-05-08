
# Pallet Stylograph 

- **Team Name:** GenesisDAO by Deep Ink Ventures GmbH
- **Payment Address:** Ethereum Mainnet, 0x918a4363C35156c8F85F86795a79189e5A1ef557, USDC
- **Level:** 3

## Overview

> **Stylograph** [ stahy-luh-graf, -grahf ]
> 
> *A writing instrument for applying ink to paper.*


Stylograph is a framework aimed at enhancing the functionality of substrate-based chains in the Polkadot ecosystem with plugin-like functionality.

By using the ink! smart-contracting language, it allows third parties to extend core functionality, providing developers the ability to concentrate on domain logic.

The total ask for this proposal is $100,000 and it is planned to have a subsequent development to use this functionality within Genesis DAO (see the last grant, [future plans section](https://github.com/w3f/Grants-Program/blob/master/applications/GenesisDAO.md#future-plans)). 


## Project Details

### Introduction
A group of people surrounding Ken Thompson and Dennis Ritchie were quite busy at Bell Laboratories shaping the world as we know it today. They invented a milestone in programming languages — C, the breakthrough operational system Unix, the first shell, UTF-8 and a long list of others that alone would have been enough to receive a Turing award.

How were they so productive? Of course, the density of talent at Bell Labs was as high as within the Beatles (before John married) — but one tiny detail helped drive them. And that can be summed up in one word: focus; finding out what holds the application together in its innermost folds and excelling at that. It takes writing programs that do one thing and do it well. Today, this set of guiding principles is popularly known as the unix philosophy.

This fundamental building block of system design is what guides substrate development today. The ecosystem of polkadot is a set of domain-specific chains that focus on building the infrastructure for the web3 universe. 

The ink! smart-contracting language can be run on substrate chains either as a [core value proposition](https://use.ink/how-it-works#use-case-1-smart-contracts-as-first-class-citizens) - with the chain being an ecosystem for protocols developed in ink! on top of it - or as [second class citizens](https://use.ink/how-it-works#use-case-2-smart-contracts-as-second-class-citizens) - with protocols being able to build on top of the domain logic. 

*Stylograph* introduces a third use-case by utilizing ink! as configuration language to alter the domain specific language itself by introducing a simple and straightforward framework to inject loosely-coupled hook points into your pallets that will call smart contract functionality in registered contract on the contracts pallet. 


### Motivation
Deep Ink Ventures is building a system parachain for the polkadot ecosystem that is building infrastructure for Decentralized Autonomous Organizations - Genesis DAO. 

At *Genesis DAO* we are committed to the unix philosophy. 

We are focused on the domain of DAO management with the core components of creating and running DAOs, overseeing token issuance and DAO treasury and having a rocksolid proposal and voting infrastructure.

However, DAOs can have small and granular requirements that do require small tweaks and adjustments. Sometimes on-top protocols like Yield Aggregators require additional functionality. Some of those changes may be deal breaking for technical use cases or legal reasons and therefore a hard requirement for newly founded DAOs.

The core team ultimately has to decide what features are reasonably part of an unbloated core and there is no one-size-fits-all solution to a lot of problems. This is where Stylograph comes to the rescue.

### Framework Components Overview

The following is an overview of the architecture we build and is merely to sketch the scope and general concept; implementation details may vary.

#### pallet_stylograph
This pallet acts as an abstraction layer on top of pallet_contracts in order to conveniently create callback based implementations.

The pallet will have initial support for *ink!* The concept is easily extendable though for other languages such as *solidity* or *ask!* that can be added.

![image](https://user-images.githubusercontent.com/120174523/236872194-471198c3-48d8-4acc-842b-0ac450929908.png)


Since substrate does not know about the structure of smart contracts deployed in ink beforehand, substrate developers utilizing Stylograph need to register the function signature they want to support for callbacks.

This is a one-liner in the chain specs:

Stylograph is now aware of a function given by signature, function name or trait definition and knows its associated gas limit.

![image](https://user-images.githubusercontent.com/120174523/236872381-418dacb9-e776-4f5f-af0a-1c133196c2dc.png)

With the callback defined the core developers now can add callback functions into their pallets that extension developers can utilize. 

For example, the function above may alter the original vote in order to come up with a more complex algorithm (and it is therefore valuable to carefully select the arguments for the callback function for extension developers to be flexible).

An example might be something like this:

![image](https://user-images.githubusercontent.com/120174523/236872439-2b1cc9aa-0a5f-4982-9fc2-723828e7cfb5.png)


The next part is the registering of extensions by accounts - the second argument given in the callback above. 

The substrate node implementing can decide how they want to interpret this - e.g. if the extensions are per account or if the account represents an entity on the chain. The latter is true for _Genesis DAO_ where the account needs to be the owner of the dao - each DAO can register its own hookpoints to tweak the core to its needs.

![image](https://user-images.githubusercontent.com/120174523/236872530-d4cd6aec-03f5-4221-8cd8-a67a2b04da5f.png)


The framework now has all the information at hand to execute a fully abstracted _pallet_contracts::bare_call _and to handle errors associated with it:

1. The user calls the extrinsic of the implementing pallet. In the case of GenesisDAO that might be the _dao_votes_ pallet to intercept the voting process in order to alter the majority voting to a different decision system.
2. This pallet executes the callback that takes the information given from the _dao_votes_ panel and looks up the callback definitions registers.
3. It constructs a call to the ink! contract defined.

![image](https://user-images.githubusercontent.com/120174523/236873188-5fc04a21-6d59-41c3-921a-37a8e2ece739.png)

The gas fees are therefore called by the person utilizing the functionality - the user calling the initial extrinsic.


### Runtime Decoder
Currently the calling contracts with the `bare_call` functionality ends up in bytestreams on both ends that require knowledge of the traits and then a manual implementation of the bytestream decoding by the implementing chain. 

We want to generalize this. Fortunately there has been already some research been done on this (https://github.com/paritytech/ink/issues/1674, which as well signals demand), but noone has implemented it so far. We want to change this by implementing the suggested solutions of 


#### ink! Stylograph Facade Builder

The aforementioned information is enough to auto generate a full boilerplate contract as template that substrate chain developers can use to deploy a sample contract and to write a macro that defines the interface that the runtime expects. 

This contract can be released to the extension developer community to use it as a boilerplate template. They can as well import the trait for the contract to be sure that they are compatible with the specs defined by the runtime.

![image](https://user-images.githubusercontent.com/120174523/236872845-248bc23e-a96b-4008-8e9e-6d6cf1756d35.png)

We therefore are building a cli tool to package a versioned ink! crate with installation steps and base documentation that can be published with a new runtime release of the chain to give protocol and extension developers a head start to extension development.

## Ecosystem Fit

While we have drafted this pallet with the next iteration of the Genesis DAO chain in mind ([here are some planned plugins and extensions for inspiration](https://docs.google.com/document/d/1yyEBa43plj-PzlrEnK6JT5CKqyvBDUrYiR1N6984fhk/edit#heading=h.nfot0twi37l)), the presented functionality is carefully abstracted into a reusable component system.

Stylograph is to substrate what plugins and and extensions were for CMS, Shops in web2 - a smooth way for third parties to extend the core functionality for a chain. It gives substrate developers the way to concentrate on doing their domain logic well whilst their users and protocols building on top maximize flexibility and time to market.

You can think of this as the inverse to chain extension. While chain extension gives plugins a way to interact with the underlying core logic, stylograph gives chain developers an easy framework to make their core extendable with plugins and extensions via smart contracts. They can be used by any chain that wants to have a growing extension ecosystem.



## Team

### Contact

- **Contact Name:** Jakob Drzazga
- **Contact Email:** 	admin@deep-ink.ventures

### Legal Structure

- Deep Ink Ventures GmbH, registered with the commercial register at the local court of Berlin, HRB 247342


## Development Roadmap

### Overview

- **Total Estimated Duration:** 3 month
- **Full-Time Equivalent (FTE):**  3-4 FTE
- **Total Costs:** $ 100,000


## Development Status :open_book:

The development will happen on https://github.com/deep-ink-ventures/genesis-dao-node as we test the functionality in a full chain, but the pallet will be released as it's own crate.

## Development Roadmap :nut_and_bolt:
### Milestone 1 

- **Estimated duration:** 2 month
- **FTE:**  3-4
- **Costs:** 50,000

| Number | Deliverable                       | Specification                                                                                                                                                                                                                                 |
| -----: |-----------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **0a.** | License                           | Apache 2.0                                                |                                                                                                                                                                                    
| **0b.** | Documentation                     | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a can integrate the pallet and start working with |
| **0c.** | Testing and Testing Guide         | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.              |            
| 1. | Pallet Development           | Develop the pallet as specified within the `pallet_stylograph` section above.     |
| 2. | Refrence Implementation           |  We will provide a sample implementation alongside with `pallet_contracts` on the Genesis DAO test chain to demonstrate the functionality.    |


### Milestone 2

- **Estimated Duration:** 2 month
- **FTE:**  3-4
- **Costs:** 50,000 USD


| Number | Deliverable                        | Specification                                                                                                                                                                                                                                 |
| -----: |------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **0a.** | License                            | Apache 2.0       |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a can integrate the pallet and start working with |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.  |
| 1. | Convenient value decoding lib | Smoothen the value transfer between Smart Contracts and the runtime as specified above in the `Runtime Decoder` section.   |                                                                                                              |
| 2. | Facade Builder  | Develop the code generator for smart contracts as specified above in the `ink! Stylograph Facade Builder` section.   |


## Future Plans
Our future plan is to include (and therefore maintain and extend) this pallet within our Genesis DAO Chain. The exact game plan is laid out [here](https://docs.google.com/document/d/1yyEBa43plj-PzlrEnK6JT5CKqyvBDUrYiR1N6984fhk/edit).
