# W3F Grant Proposal

> This document will be part of the terms and conditions of your agreement and therefore needs to contain all the required information about the project. Don't remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with a `>` (such as this one) can be removed.
>
> See the [Grants Program Process](https://github.com/w3f/Grants-Program/#pencil-process) on how to submit a proposal.

- **Project Name:** Tao Token - Transfer value in Web3 world
- **Team Name:** TAOCODAO LLC
- **Payment Address:** bc1qseztg063z7p6kyje4eeqapy5gqkdel4248gsgf BTC, Ethereum (USDT/DAI)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

> ⚠️ *The combination of your GitHub account submitting the application and the payment address above will be your unique identifier during the program. Please keep them safe.*

## Project Overview :page_facing_up

### Overview

Blockchain is a revolutionary technology, and the Web3 is the future Internet. But until now, it has far from reached its acclaimed disruptive potential. Although it is relatively easy to create or track the transaction, it isn't easy to link these transactions to real-life assets or rights on a large scale. In other words, the business has been struggling to develop relevant use cases to make blockchain technology meaningful and useful beyond simple cryptocurrency transfer.

Resorting to tokens enables a blockchain system to empower the management and transfer of real-world assets while taking advantage of the benefit of the technology, which allows complete new applications, possibly breaking monopolies of the powerful platforms or companies.

Our goal is to develop a blockchain system and tools that allow merchants or service providers to quickly deploy their secure off-chain and offline payment infrastructure that doesn't require storing or collecting any sensitive data. Our innovative solution includes :

    Using multi-hash chain micropayment channels for off-chain transactions, the client generates the has chains and keeps their seeds in secret thus eliminate the use and storage of private keys and avoiding transaction reversals.

    Using  dual-blockchain structure to manage the  off-chain channel state transitions. Each buyer-seller association is represented by a combination of smart contracts: one smart contract deployed on the public blockchain (public smart contract) and another one deployed on the consortium blockchain (mirrored smart contract). The public smart contract protects the buyer's deposit and sellers' payoff without preexisting trust. In contrast, the mirrored smart contract provides a secure interface and booking to the off-chain micropayment infrastructure with minimum delays and zero fees. The client pays the merchant with a set of hashes and receives a payment token, a tuple of signatures from several token signers that respond to the token request blockchain event.

We want to extend this payment infrastructure to cover all kinds of online and offline services; physical goods, digital assets, etc. On top of that, we will develop a decentralized services allocation system in web3, which allows any node in the network to share its resources. Nodes indicate their preferences for buyers/sellers by stable matching algorithms, a smart contract to discover the service, orchestrate the allocation, and use the off-chain payment network to send the rewards.

### Project Details

#### Payment infrastructure Architecture

![image] <https://docs.google.com/document/d/11BsWtD9M_zw_EHV1u_dMBJ809bWvcGtOuuSskHkAa7g/edit?usp=sharing>

VPOS first delivers the information needed for payment and token requests through the client-VPOS channel.
The client then provides payment and requests payment tokens from the consortium blockchain through the client-blockchain channel.
Token Signers subscribe to the token request event via the signer-blockchain channels. The mirrored smart contract extends the public smart contract through a virtual blockchain-grafting channel.
The client delivers a payment token to OPOS using the client-OPOS channel.

#### Polynomial Multi-Hash Chain Micropayment

We use a hash chain-based micropayment channel instead of traditionally used digital signature schemes to eliminate the use and storage of private keys and avoid transaction reversals. Our innovative polynomial multi-hash chain micropayment scheme which utilize several hash chains to process arbitrary micropayments will significantly increse the performance and descrease the fee.

#### Payment System Components

**Public Blockchain** :
A public blockchain is used for storage, access, execution, and integrity assurance of the public smart contract. We choose MoonBeam Parachain as our Public blockchain since it fits our requirement, which is universally available, trusted by all parties, capable of executing Turing-complete smart contracts with integrated cryptocurrency.

**Public Smart Contract** :
Public smart contract establish an unambiguous and non-repudiable agreement between the buyer and seller. Unlike the deposits in classic electronic payment systems, a smart contract allows the buyer to retain full control over deposited funds irrespective of the seller's trustworthiness. Each buyer-seller pair requires a deployment of at least one separate public smart contract.

**Consortium Blockchain** :
Unlike its public counterpart, the consortium blockchain provides security only for the seller and does not intend to be trusted by the buyer. The blockchain used the MoonBeam Dev Node as the smart contract execution engine and managed under a proof-of authority (PoA) consensus to achieve high levels of security and redundancy at a bit of cost. We can also build the consortium blockchain network based on the Tao-Framework we proposed in another project to incentivize the cloud service provider who runs the nodes.

**Mirrored Smart Contract** :
For each public smart contract, a Mirrored smart contract is deployed on its consortium blockchain. The public smart contract contains an address of the mirroring smart contract. Thus Mirrored Contract can perform secure execution much faster at a lower cost. It provides locally-trusted execution and storage within multiple nodes, such that if one or even several nodes are compromised, the integrity of the ledger remains intact;
the nodes can be added, removed, replaced, or updated without service disruption. The Mirrored Smart Contracts provides the following routines:

1. The set heads routine mirrors its public blockchain counterpart: it sets the hash chain heads to the exactly same values as they are in the public smart contract.
2. The token request routine verifies the legitimacy of the VPOS (Virtual Point of Sales) and client, checks the hashes and payment amount provided by the client, processes the payment, updates the hashes, then triggers a blockchain event that activates the token signers.
3. The one-time deposit routine funds a smart contract only once; the additional deposits are prohibited to avoid tampering with the balance.
4. set Ti routines are used by the signers to store their signatures in the blockchain.

**Token Signers** :
To achieve security redundancy, we define the payment token as a set of M public-key signatures {Γ1(η; δ); ….. ΓM(η, δ)} produced by M out of N signers. The signers' public keys are pre-determined and stored in all VPOS. Each token signer is a process running on physically-separated hardware. All signers are listening to a smart-contract event triggered by the token request function of the private smart contract. This configuration allows the signers to communicate with the blockchain using a pull-only protocol without listening on any ports.

**Virtual Point of Sale(VPOS)** :
 Each VPOS stores its private key and the full list of signers' public keys. In addition, each VPOS has its list of sellers and pricing policies. If the list of signers' keys is modified in the system, e.g., a new signer is added for extra redundancy. If VPOS is compromised or its private key gets stolen, the corresponding public key should be removed or blocklisted in the mirrored smart contract.

#### Communication Channels

**Dual Blockchain Connection Channel** :
The channel virtually links the address spaces of two independent blockchains. Specifically, it connects the public and consortium blockchains by storing the address of the private smart contract in the public smart contract.

**Client-VPOS Channel** :
The client establishes a local bi-directional simplex channel with a VPOS in proximity. We assume the channel has limited capacity, possibly low bandwidth, and is not persistent. For our porotype, a two-way QR-code scanning as Client-VPOS channel. Alternative channels can be established for other use cases.

**Client-Blockchain Channel** :
It allows the VPOS to get necessary updates on the state of the micropayment channel. While VPOS remains offline, the client plays the role of a proxy to the payment infrastructure, through which the VPOS receives a receipt of successful payment in the form of a verifiable token.

**Set of Signer-Blockchain Channels** :
Each signer is an independent network node subscribed to the token request events of all the mirrored smart contracts through a signer-blockchain channel. This arrangement allows the signers not to listen to any ports and remain anonymous, significantly limiting exposure to potential cybersecurity threats. However, to serve multiple clients simultaneously, the signer-blockchain channels must maintain sufficient available bandwidth.

#### Tao Tokens Protcols

**Client Preload the Funding using Fiat Currency**
This protocol includes the following steps:

1. The client requests a contract from the merchant for loading the funding at a specific discount.
2. The client sends the merchant payment in
3. The merchant prepares a pair of smart contracts for the client, including public and mirrored smart contracts, and sends the client the address of the public contract;
4. The client verifies the code of the public smart contract, extracts the address of the private smart contract, and deposits funds on the public smart contract.

**Contract initiation and deposit**
This protocol includes the following steps:

1. The client requests a contract from the merchant or service provider through the  website or using a mobile app, and sends the merchant the heads of hash chains in the set Υ ;
2. The merchant prepares a pair of smart contracts for the client, including public and mirrored smart contracts, and sends the client the address of the public contract;
3. The client verifies the code of the public smart contract, extracts the address of the private smart contract, and deposits funds on the public smart contract.

**Transaction protocol**
The purchase protocol includes the following steps:

1. A client approaches an VPOS and initiates a purchase, e.g., by selecting an item with description D and price P from the list of merchandise
2. The OPOS generates a random unique transaction ID T, and delivers the tuple (T; P; D; K(T; P)) to the client;
3. The client converts the item price P into the τ-adjusted price p', using the variable τ stored in the private smart contract;
4. The client calls the token request function of the private smart contract, providing (R1; R2, .... Rn); T; P, and K((T; P)) as arguments;
5. The merchant's mirrored smart contract first verifies price, payment, balance, and the authenticity of the signature of the VPOS, and then stores the tuple of payment hashes in the smart contract. It updates the smart contract balance, and adds current payment amount to the sum of previous payments p', which is stored in the private smart contract. Finally, it triggers the event E(T; P);
6. Each token signer responds to the event E(T; P) by storing the signature Γi(T; P) in the private smart contract;
7. The client waits until the private smart contract accumulates a minimum required number of signatures, and then it serializes these signatures into a tuple (which is the payment token) and delivers this tuple to the VPOS;
8. The VPOS verifies whether the signatures are distinct, valid, and produced by legitimate token signers and then delivers the purchased item to the client.

**Payoff and refund**
The merchant first verifies the payment hashes in the private smart contract released by the client and then calls a payoff function of the public smart contract with the inputs of payment hashes, payment amount, and optional client's payoff verification signature (as described below). Then, the unused funds deposited in the smart contract can be delivered to the client as a refund. The merchants' policies determine the implementation specifics of payment and reimbursement.

**Payoff verification**
The polynomial multi-hash chain price representation creates a potential caveat for the merchant to learn more hashes from the hash chains than the desirable number of hashes determined by the value of p'.
The correctness of the payoff amount is enforced by adding a payoff verification signature, sig(p'), generated and signed by the client to authorize an exact transaction payment amount. The signature will be stored as an additional variable in the mirrored smart contract and updated after each successful token request. The signature and corresponding p' will be verified by the public smart contract during the payoff process. If the merchant's requested payment deviates from the correct payment on the blockchain, the payoff will be rejected.

#### Service Allocation System

**Types of Allocation**
In an allocation, we assume to have many buysers and sellers. These sellers can offer many different goods, depending on the decentralized application. Two general service types which need fast, scalable, and lightweight service allocation:

1) Services where a seller sells a single instance of a service. This service can be denoted as binary: either it is provided or it is not. It can be modeled as a regular stable marriage problem with incomplete preference lists, ensuring that nodes do not need to submit preference orderings over large sets of users.
2) Services where the seller sells a part of a good within a certain capacity. Sellers have a budget and maximize their revenue by selling in smaller chunks. It can be modeled as the hospital/residents problem, allows for incomplete preference orderings from the client-side, and allows the sellers to define a budget. Clients can be assigned to a seller as long as it has the remaining capacity.

**Architecture Overview**
![image] <https://docs.google.com/document/d/1TTQ3Cu5AhfeEq19K6HIb-zdV6ynufDa1b59ManQQmv8/edit?usp=sharing>

1. We use a smart contract to function as a billboard for the allocation, registering participants, and orchestrating the initial phase. This contract takes service discovery into account, as it is public and reachable by all nodes. The complexity of this contract is kept to a minimum to save gas costs and will process execution of the allocation algorithm in the MoonBeam Public Blockchain.

2. We uses an oracle contract, which decouples the price derivation from the allocation computation. This way, we outsource market function based on macro parameters to the smart contract, rather than on a per-item basis, making the process more efficient.

Any node in the network can trigger an allocation, after which interested nodes register either as a client or seller. After a threshold of nodes is reached, the billboard contract picks an execution node and sends them a list of nodes in the allocation, among other parameters. All clients and sellers compile a partial preference list, then submit this to the execution node. The execution node then computes the allocation and returns the solution to the clients and sellers, who unlock their payments.

**Billboard Contract**
The billboard contract orchestrates the beginning phase of the allocation.
First, nodes register in the contract as a client or sellers.
The contract sets parameters to dictate when the allocation is complete; this could be a time interval (in terms of blocks) or a pre-set number of nodes allowed to join.
After registration, the contract must compile a list of participant addresses that the execution node uses to accept user preference lists.
In its most basic implementation, the smart contract can handle this temporary storage, which the execution node can read.

**Oracle Contract**
The oracle contract is responsible for a global price derivation. The contract derives its state from the underlying billboard contract and other public parameters. The oracle contract can be deployed for different services and incorporate complex financial rules dictating the price.

The oracle contract updates its price when called by a node. Its pricing mechanism and the parameters derived from the price are transparent. Therefore, any node can see a discrepancy between the current price and what it should be and call the function to update. This is financially incentivized when the price difference will cause more gain than the cost of calling the contract.

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

![image] <https://docs.google.com/document/d/1fjKhFj0BRQxODYddjGafobw6zZFwtGlBbZTHVXuCs5o/edit?usp=sharing>

We will implement a prototype based on a particular use case: A barbershop issuing digital tokens at a 30% discount. So a client goes to the website and pays USD 300 and gets 400 TaoTokens. Then the client goes to the barbershop and has a haircut. After the service, the client use a client app and VPOS in the barbarshop to make the payment for his service.
**Virtual Point of Sale (VPOS)**

 Figure 1 shows a three-step user interface transition of a purchase.

1. Selection of the item: when the user pushes the touchscreen button, the terminal generates a unique transaction ID, and produces a QR-code. The QR-code contains the transaction ID T, item price P in tokens, item description D, and signature of the tuple (T; P).
2. The client scans the QR-code with the Client app, requests a token, produces QR-code for the token, and pushes the \Scan Token" touch button on the screen of VPOS, which activates the QR-code reader.
3.When the QR-code is scanned, the VPOS verifies the signatures, and delivers the item to the client.

**Client App**
We will implement a client app using Android SDK and Web3j.
Figure 2 shows the screen of the Android client right after obtaining a payment token from the private blockchain.

**MoonBeam smart contract**
We use MoonBeam test network for prototype to simulate the consortium blockchain.
. The requestToken() function validates client identity, the authenticity of the OPOS, the validity of the payment, and the available balance. If all the parameters are verified, the private smart contract decreases the balance of the smart contract, updates the base price τ, updates the payment hashes, and emits a signer-activation event.

**The signers**
Our prototype requires 5 valid signatures to form a payment token. The event listeners are written in JavaScript using Web3.js library. When the smart contracts issue the token request event, all the ten signers respond by signing the serialized tuple of transaction ID and item price and writing the signatures in the smart contract.

### Link to source Code

- <https://github.com/taocodao/moonbeam> This the Tao Framework nodes implementation , we have started with taking the moonBeam development node as the template, and use it as the smart contract engine

## Development Roadmap :nut_and_bolt

### Overview

- **Total Estimated Duration:** 45 working days
- **Full-Time Equivalent (FTE):**  2 FTE)
- **Total Costs:** $49,760 USD

### Milestone 1 Implement core functionality

- **Estimated duration:** 30 working days
- **FTE:**  2
- **Costs:** $38,760 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License 2d| we will apply for the Apache 2.0 license  |
| 0b. | Documentation 2d| We will provide both inline documentation of the code and a basic tutorial that explains how a developer can create nodes and run the nodes in the test network |
| 0c. | Testing Guide 2d | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker 1d| We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article 1d | We will publish an **article**/workshop that explains our advertising workflow as well as technical details.|
| 1. | Payment Infrastrue components 6d|we will build the payment infrastructure components, which include VPOS; Token Signers; Communication Channels etc. |  
| 2. | Smart contract 6d | We will develop a public smart contract and the supplement mirrored smart contract |  
| 3. | Substrate module: Service Allocation Infrastructure 6d | We will build the create an auditing process to do the snapshot succession audit, which verifies all transactions process and data integrity audit that verifies the snapshot footprints and makes sure the footprints in reports match the actual data in Nodes. |  
| 4. | Consortium Network 6d | We will develop create a Substrate module that works as a network node on the cloud, which is sufficient to build the consortium network that runs the public smart contract and the mirrored smart contracts  |  

### Milestone 2 —System integration and running the workflows on the test environment. Final run and performance testing in the pre-production-like environment

- **Estimated duration:** 15 working days
- **FTE:** 2
- **Costs:** $11,200 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 1. | System Integration 4d| We will integrate all the development components, including Vpos, TaoToken Protocol, Token Signers, Communication Channels etc. |  
| 2. | ProtoType development 4d |We will develop a prototype for a specific use case. |
| 3. | ProtoTpe test run 4d| We will run the prototype in the test environment.|  
| 4. | Performance Evaluation 3d |We will run the performance evaluation, including the Transaction Throughput, Transaction Latency, Communication Overhead, etc.|

## Future Plans

The next step will be to extend the Payment Infrastructure into all kinds of on-line off-line services.
