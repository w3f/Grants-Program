# W3F Grant Proposal

> This document will be part of the terms and conditions of your agreement and therefore needs to contain all the required information about the project. Don't remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with a `>` (such as this one) can be removed.
>
> See the [Grants Program Process](https://github.com/w3f/Grants-Program/#pencil-process) on how to submit a proposal.

- **Project Name:** Tao-Framework- Running smart contract on scable cloud environment
- **Team Name:** TAOCODAO LLC
- **Payment Address:** bc1qseztg063z7p6kyje4eeqapy5gqkdel4248gsgf BTC, Ethereum (USDT/DAI)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

> ⚠️ *The combination of your GitHub account submitting the application and the payment address above will be your unique identifier during the program. Please keep them safe.*

## Project Overview :page_facing_up

### Overview

Tao Framework is designed to overcome the ultimate obstacle faced by blockchain technology which is scalability, especially running smart contact in the public blockchain. The main issue is the unstructured P2P network underline which causes the pubic network to impose hefty fees and per-block resource limits to avoid transaction gridlock. Polkadot as a popular cross-chaining solution, creates a network of interoperable blockchains to improve the transaction throughput but doesn't directly address the storage and computing capacity for running the smart contracts.  

 Our approach is to deploy the decentralized smart contracts in a centralized but scalable cloud environment, so the framework is scalable on computing power, data storage, and transaction throughputs.

The framework will utilize the existing toolchain in Polkadot which is MoonBeam to build a decentralized environment for executing smart contracts on a fixed set of cloud notes synchronized by the proprietary consensus protocol POC ( Proof of Correctness). POC will be empowered by a smart contract deployed into the Eherium public blockchain network with an independent auditing software running to monitor and verify the workflow.

### Project Details

#### Architecture

![image] <https://docs.google.com/document/d/1OZGnH8jOXyX-OhbBdvvAJbO9EfcA8E-Fig2CeXx86xo/edit?usp=sharing>
We will use the MoonBean Unified Accounts to deploy the smart contract into the Ethereum public network.

#### Code Execution

![image] <https://docs.google.com/document/d/1mVlQVd_hEvnRbWzICd21_ihCVA5-JyY0A4HtBnaJUgI/edit?usp=sharing>
The code execution is performed in decentralized TaocoDAO smart contracts called TContracts.
The functions of TContracts are invoked through signed transactions arriving at the network, and the code in TContracts can be executed by appropriate interpreters. We will use the MoonBean Node as the smart contract execution engine.

#### Data Model

All data is openly accessible and managed via custom models implemented in the deployed TContracts. In order to store data as part of TAOCODAO , each TContract must implement two interfaces: data footprinting and data cloning.
**Data Footprinting** is a function that produces a footprint of the TContract’s current state or previously saved state.
**Data cloning** is a function asks the contract to temporarily save its current state of data for subsequent footprinting. Combines all the footprints reported by the TContracts into a single hash called the data snapshot footprint.

#### POC (proof of Correctness) Consensus

![image] <https://docs.google.com/document/d/1nqyskjdRKbw9p8EnkmX3J0muZd2x7u654EYRkri2t0E/edit?usp=sharing>

The core idea of POC consensus is to periodically report the hashes of data snapshots to a dedicated smart contract deployed on an Etherurem public blockchain. Once the report is submitted, it cannot be altered. The node cannot be trusted if the report does not match the publicly available and independently verifiable snapshot. The smart contract is used to check the liveness and integrity of the deployment. POC consensus uses correctness check instead of voting. All incoming transactions are recorded. There is only one correct way to execute them so no two conflicting transactions in different nodes. All transactions are executed immediately, during the open session of the Node, with a pre-defined decision deadline so that no fork will be created in TaoCoDAO blockchain.

The framework provides autonomous but distinct execution environments for each individual TContract. The contracts with mismatched footprints can be excluded from the consensus, thus guarantee timely footprint reports even if some contracts cannot establish consensus within their contexts. The goal of each TContract is to assure each transaction is executed identically across all the nodes. To enforce this, the TContract will produce a footprint of its current data after each transaction. If the footprints do not match, the TContract will be temporarily excluded from the snapshot.

As a result, each transaction entails an identical state transition of each node. If a node becomes irresponsible or fails the verification, it will be excluded from the consensus until the next report cycle.

#### Components

**TaoFramework Auditors**:
The Framework is an open-data system, so all the data is openly available. Auditors run the software to oversee the integrity of the network deployment. It employs a community auditing model commonly used in public blockchains. Nodes in the cloud can perform cross-audit. The auditing process requires only a server and the auditing software to do the snapshot succession audit, which verifies all transactions process and data integrity audit that verifies the snapshot footprints and makes sure the footprints in reports match the actual data in Nodes.

[img] <https://docs.google.com/document/d/1oqSBPgNRoJZSkKLBN2ZjfLyvI7g8kJ-TpVxCV3jSC3s/edit?usp=sharing>

**Scalable Cloud**: The cloud is a predefined set of TaoCoDAO nodes. The number of nodes should be sufficient to guarantee the system's availability, but it should not be too large (less than 10) to avoid performance degradation. Unlike peers in blockchain, multiple nodes in TaoCoDAO are used to achieve accessibility and fault tolerance rather than the consensus. Since clouds allow vertical scalability, which adds resources to existing entities, a large number of nodes (horizontal scalability) is not needed for performance improvement. Therefore, the size of nodes and the set of identities of the participating nodes are the system parameters set before the deployment.

**Network Node** : The network nodes on the cloud, which are sufficient for participating in POC concensus to sync with each other.

**TContracts:**: Tao smart contracts (TContracts), are decentralized programs deployed on the framework. There are two types of TContracts: system TContracts and custom TContracts:
System TContracts are pre-deployed in the framework, and they cannot be removed.
Custom TContracts are developed and deployed by clients.

**Web Interface**: Customers use the web interface to interact with a deployed TContract. The customer do not have to register an account but have a subscription to the Framework through one of the nodes. The subscription, however, does not incur any control over the use of the Framework. The purpose of the subscription is to charge for data transferred or the time period during which the subscription is active. It is different from the fee charged in the public blockchain. Each Node can establish its pricing policies to compete for customers.

**Ethereum Smart Contract:**: Each TaoCoDAO deployment has a smart contract on Ethereum blockchain, storing hashes of the reported snapshots. To avoid retrospective modification, repeated reporting for the same timestamp is prohibited by the smart contract's logic.

#### Report Cycle

System parameters are set before the deployment and are remaining the same  during the lifetime of the system, which includes:
    snapshot report period denoted λ, which is measured in seconds.
    Report deadlines are all timestamps divisible by λ. last report deadline can be calculated as
 td = tc MOD λ, where tc is the current timestamp.
The upcoming report deadline is calculated as tnext = λ+tc MOD λ.
Every data snapshot denoted Si , has serial number i, which is called the reporting cycle, represented as  (td -t0) /   λ .  t0 is the deadline of the very first snapshot in the deployment. Subsequently, the protocol requires that each Node reports the snapshot Si  by the end of cycle i + 1 in order to be treated as valid during cycle i + 2.

#### TaoCoDAO node Architecture

[img] <https://docs.google.com/document/d/1MbwbvpBS0wnmpcl1SOR0zWINTgo7j3Rhq1crv90cX5c/edit?usp=sharing>

**Node Core**:  The Core is responsible for networking, cryptography, synchronization, protocol, process and thread management, signature and authenticity verification, transaction parsing, data encoding and decoding, and communication with the smart contract.

**Uniform RESTful Interface**: There are six vectors of communication:
 client-node, node-node, auditornode, node-blockchain, auditor-blockchain, and client-auditor.
The client-node, node-node, and auditor-node communications have a uniform RESTful interface. Each request is either GET or POST HTTP request with the body
    M = {P = (As, Ar, O, η, τ, t, D ), Sigs(P)},
         P is the payload of the message,
         Sigs is the ECDSA signature calculated via the private key of the sender.
         The tuple P has the following components:
            As is the public address of the sender,
            Ar is the public address of the intended recipient,
            O is the operation code,
        η is a random nonce used as a message ID,
        τ is the ID of the message that M is replying to (if applicable),
        t is the current timestamp,
        D is the data, whose format is determined by O.

**Keys**: Each node uses an MoonBean account to represent itself . The set of public addresses of TaoCoDAO node is fixed for each deployment and is hardcoded in the smart contract.

**System Parameters**: Some parameters of a TaoFramework deployment that remain constant for a lifetime are called the system parameters include :
    unique deployment ID, identities of the nodes,
    reporting period λ,
    initial timestamp t0,
IP addresses of nodes are not part of the system parameters which allows nodes to change location, or network configuration — we assume that these settings are exchanged between nodes.

**System Tcontracts**: The system TContracts are pre-implemented as part of TaoCoDAO, and they cannot be removed. These TContracts deliver essential functionality to the system, and their number can grow as TaoCoDAO framework evolves. The current version of TaoCoDAO includes two system Tcontracts:  custom TContract deployer, and content-addressable storage (CAS).

custom Tcontract deployer serves as an interface for developers to add their custom TContracts to TaoFramework.
    CAS contract has two major functions:
        a) it allows to store large files outside of data models thus significantly improving the   performance of footprinting and cloning
        b) it establishes a secure communication channel between Tcontracts

**Custom TContracts**: Custom TContracts are developed and deployed by users of TaoCoDAO. The nodes have no power to modify, censor, or control these contracts. The deployer of a custom TContract can specify the ownership and other parameters of the contract, including the ability to destroy one.

**TContract Interface:**: To create a TContract, the developer should implement a standard TContract interface, which includes smart contract data model, data footprinting, and snapshot cloning. Then write the TContract code for the interpreter specified in the configuration.

#### TaoFramework Protocol

**Data Snapshots and footprinting**:  TaoCoDAO data is stored in TContracts according to the data models. For example, one TContract can store data in binary files, while others may use SQLite. TContracts can upload data blobs to TaoCoDAO CAS and refer to these blobs via their hashes to prevent operations with large data instances. TaoCoDAO performs CAS reference counting, purging CAS entries only when counters reach zero.

**Operation Lifecycle**:

[img] <https://docs.google.com/document/d/1HdeexJJmYOYnjgKj-gTIaA-ZmkgrhBrZgRRKaoI0enw/edit?usp=sharing>

 the lifecycle of TaoCoDAO involves an oscillation of two stages:  main stage and report stage.

    TaoCoDAO actively accepts and processes incoming transactions that shape the current data snapshot in the main stage, which is longer than the report stage. During the main stage, auditors download the previous data snapshot for review and storage.

    In the report stage, TaoCoDAO accepts transactions, but instead of executing them, it queues them in a buffer. Once the current snapshot is footprinted, TaoCoDAO continues executing incoming and queued transactions. Also, as soon as the footprint is ready. However, at this point, the execution of the incoming transactions resumes because the execution inhibition is needed only for calculating the footprint, not for smart contract submission.

 **Transaction workflow**:

 [img] <https://docs.google.com/document/d/1ZQJpcSeAz6Z_LOnO7OKUPk4Vh22m8gGXNTOQxiZEzPk/edit?usp=sharing>

 ❶: Client creates a transaction and commits it to the TaoCoDAO node with which they have an access subscription;
 ❷: the service node verifies the authenticity of the transaction and forwards it to all the other nodes in the cloud;
 ❸: the nodes of the consortium process the transaction and send a signed confirmation back to the service node within a strict deadline;
❹: the service node executes the transaction, serializes the confirmations into an aggregated receipt, and sends it to the client as a reply to the initial commit request

**Transactions**:

1. Create a transaction message M, which is signed and sent to the TaoCoDAO node, called the Service Node, with which the client has an access subscription.
2. Service node first authenticates the transaction by confirming that the user signed the transaction message with the same identity (public address) as the one found in the transaction message.
3. Service node forwards the transaction to all the nodes in the cloud.
4. nodes verify and execute the transaction and send a signed confirmation back to the service node within a pre-determined short time frame.
5. If all nodes do not process the forwarded transaction until the established deadline, the transaction reverts.
6. If a node misses the deadline more often than a pre-determined threshold, it is temporarily excluded from the consensus upon mutual agreement with the other nodes.
7. The service node verifies the footprints of the resulting data snapshots reported by the other nodes and executes the transaction by itself.
8. If the execution result matches the footprints reported by the other nodes, the service node serializes the confirmations into an aggregated receipt. It sends it to the client as a reply to the initial commit request, which constitutes the transaction confirmation event with multi-signature cryptographic proof.

### Ecosystem Fit

Tao Framework is designed to encourage cooperation between the nodes in the P2P network instead of competing with each other like other consensus protocols such as POW. Since the size of the network nodes is fixed, the execution is processed synchronously, openly, and transparent, the payment model is separated from the consensus. Thus, the nodes have no incentive to cheat. Moreover, each Node benefits from the fast and successful execution of transactions by all other nodes in the system. The consensus protocol used to synchronize the network nodes will be implemented as a smart contract deployed through Polkadot network toolchains such as MooBeam. Compared to similar Polkadot smart contract chains such as moonbeam, Edgeware, EVM Module, ParaState, gear,  Tao Framework can provide better scalability on computing power, data storage, and transaction output. Also, it will give a better incentive to encourage more cloud providers to participate in the Polkadot network by running as nodes.

## Team :busts_in_silhouette

### Team members

- Name of team leader : Eric Huang
- Names of team members: Eric Huang; Bo Hu ; Ray Huang ; Eugene Kuzznim; Jack Xue

### Contact

- **Contact Name:** Eric Huang
- **Contact Email:** eric@taocodao.com
- **Website:** <http://www.taocodao.com>

### Legal Structure

- **Registered Address:** 151-58 24th rd, whitestone, NY 11357
- **Registered Legal Entity:** TAOCODAO LLC

### Team's experience

This project has been developed for more than a year. We have partnered with Beijing University in China and have done the primary research and the proof of the concept development. But all the developers lack hands-on experience in substrate development. So we are hiring the developers for the project implementation, or we can use the developer recommended by the Grant Committee.

### Team Code Repos

- [https://github.com/taocodao] (https;//github.com)

### Team LinkedIn Profiles (if available)

- <https://www.linkedin.com/in/eric-huang-85600513/>>
- <https://www.linkedin.com/company/taocodao>>

## Development Status :open_book

- <https://github.com/taocodao/moonbeam> This the Tao Framework nodes implementation , we have started with taking the moonBeam development node as the template, and use it as the smart contract engine

- <https://github.com/taocodao/edgekv> This is the decentarlize storage systme implementation, we have started by developing a key-value base edge nodes.

- <https://github.com/taocodao/Caterpillar> This is the business process mangement system implementation that accept as input a process model and generates a set of smart contracts that captures the uderlying behavior.  

## Development Roadmap :nut_and_bolt

### Overview

- **Total Estimated Duration:** 1.5 months
- **Full-Time Equivalent (FTE):**  2 FTE)
- **Total Costs:** 1.7 BTC

### Milestone 1 Implement core functionality

- **Estimated duration:**1 month
- **FTE:**  2
- **Costs:** 1 BTC

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | we will apply for the Apache 2.0 license  |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a developer can create nodes and run the nodes in the test network |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an **article**/workshop that explains our advertising workflow as well as technical details.)
| 1. | Substrate module: Node Core| We will create a Substrate module that works as a network node on the cloud, which is sufficient for participating in POC (proof of correctness) protocol. The core is responsible for networking, cryptography, synchronization, protocol, process and thread management, signature and authenticity verification, transaction parsing, data encoding and decoding, and communication with the smart contract  |  
| 2. | Smart contract | We will develop a smart contract and deploy it through MooBeam into the Etherum public blockchain network |  
| 3. | Substrate module: Auditor | We will create an auditing process to do the snapshot succession audit, which verifies all transactions process and data integrity audit that verifies the snapshot footprints and makes sure the footprints in reports match the actual data in Nodes. |  
| 4. | Uniform RESTful Interface| We will develop a uniform RESTful interface to do the client-node, node-node, and auditor-node communication |  

## Milestone 2 —System integration and running the workflows on the test environment. Final run and performance testing in the pre-production-like environment

- **Estimated duration:** 0.5 month
- **FTE:** 2
- **Costs:** 0.7 BTC

## Future Plans

The next step will be to develop a process to allow individuals to create their own smart contract to map to the business process.
