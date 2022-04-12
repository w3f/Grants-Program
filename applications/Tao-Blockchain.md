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

Blockchain is a revolutionary technology, and the Web3 is the future Internet. Until now, it has not reached its expected disruptive potential. It is relatively easy to create and track transactions, but linking these transactions to real-life assets or rights isn't easy. The business has been struggling to develop relevant use cases for blockchain technology.

We think the major obstacle is that the cryptocurrency world, for the most part, is decoupled from the Fiat currency and the existing financial system. A public blockchain's native crypto-currencies serve as the primary incentive system, are traded in public exchanges, are speculative assets, and are highly volatile in price. Make it impractical to use as a payment/trading currency. For example, in web3, payments are built-in via the native token, ether (ETH). People urgently need money in digital currencies that reflect their native currency to provide a fast, cheap, private exchange between participants. Particularly integrating the existing financial system and local currency with the future DiFi (Decentralice Finance) world will open up an enormous opportunity for leveraging blockchain technology.

To let average users having no ETH should be able to use our Ethereum blockchain-based service seamlessly, we introduce an innovative public + private blockchain On/Off-Chain Hybrid system design without issuing a native cryptocurrency. Instead, the merchants can issue their fiat-pegged stable tokens, openly traded in the public blockchain,  then deploy secure offline payment terminal infrastructure that doesn't require collecting and storing sensitive data. Furthermore, we design a payment protocol that mitigates security threats for all the participants. The maximum loss from gaining full access to any component by an adversary incurs only a limited scope of harm.

We achieve significant enhancements in security, operation efficiency, and cost reduction via polynomial multi-hash chain micropayment channels and blockchain grafting for off-chain channel state transition. A client generates the hash chains and keeps their seeds secret, thus eliminating the use and storage of private keys and avoiding transaction reversals. Each buyer-seller association is represented by smart contracts: one smart contract deployed on the public blockchain (public smart contract) and another deployed on the consortium blockchain (mirrored smart contract). The public smart contract protects the buyer's deposit and sellers' payoff without preexisting trust. In contrast, the mirrored smart contract provides a secure interface and booking to the off-chain micropayment infrastructure with minimum delays and zero fees. The client pays the merchant with a set of hashes and receives a payment token, a tuple of signatures from several token signers that respond to the token request blockchain event.

## Project Details

### Architecture Overview

The Tao-Blockchain network will be built on top of an existing public blockchain such as Ethereum, using the off-chain technology to improve the scalability and performance. We create an offline payment channel and off-chain exchange server running on a private blockchain on our Tao-Framework platform. The major components includes:

1. **Token Issuing and Exchange Server System** which allow user to use their existing Ethereum blockchain accounts to issue their own Asset/Service tokens and then exchange or trade them using a Fiat-Pagged token d_USD.

2. **Offline Payment Channel** includes polynomial multi-hash chain micropayment channels and blockchain grafting( public + private blockchain) for off-chain channel state transition.

3. **Tao-Framework** is the platform we run our private blockchain network, which is scalable in three dimensions: computation, data storage, and transaction throughput.

### Token issuing and exchange Server System

#### Transaction Overflow

![image] <https://docs.google.com/document/d/12vBtGKrZkMgaCSeaTC8JboyKNL_l6zoK1xIs0yzLWQk/edit?usp=sharing>

The user can use public blockchains such as Ethereum accounts as exchange user accounts.
There are three main types of smart contracts:
I) Asset-Share smart contracts, which are created for each listed asset (e.g., real estate, art piece, or Service)
ii) USD token smart contract for managing the trading currency
iii) Exchange (Vault) smart contract for the exchange system.

All trading messages which indicate a user's trading action (Buy-Order, Sell-Order, Cancel-Order, etc.) are cryptographically signed by the private key of that user's Ethereum account on the client-side. User-signed trading messages are sent to the exchange server and, at the same time, published to Private Blockchain in a Merkle DAG data structure.

The exchange server creates a server-generated order-matching (trade) transaction on a first-come, first-serve basis. All order-matching transactions are also cryptographically signed with the private key of an exchange-controlled account registered on the Exchange Vault smart contract. These server-signed 'Trade' messages are published to Private Blockchain storage. All exchange transactions can be fully audited and verified by any external party.

Only deposit and withdrawal transactions of d USD and Asset-Share tokens to/from the exchange smart contract are executed directly on the Ethereum blockchain. All other transactions such as buy/sell/cancel orders, and order-matching (trade) are executed and securely saved in Private Blockchain and will be used as proof data for the account balance settlement process. After account balance settlement verification and confirmation occur between the exchange server and the user, an actual Ethereum blockchain transaction is executed, transferring d USD /Asset-Share tokens from the Exchange Vault smart contract to the user's Ethereum account and the confirmed.

#### Smart Contracts for Asset-Share Token / Asset Token Registry / dUSD Token / Exchange Vault

For each asset/service listed on the exchange, an Asset -Share Token Ethereum smart contract instance is deployed with functions: the Asset-Share token account balance ledger, token transfer of Asset-Share tokens (used for deposit/withdrawal to exchange), the initial share subscription and shareholder voting. The addresses of the Asset-Share token smart contracts and the crypto hash addresses point to the Asset Token Registry smart contract deployed in the Private Blockchain. Only registered Asset-Share tokens can be deposited and traded on the exchange.The d_USD token Ethereum smart contract includes functions for the d_ USD token account balance ledger, transfer of d USD tokens (used for deposit/withdrawal to exchange), and issuing/redeeming d_USD.

The Exchange Vault smart contract receives d_USD tokens and Asset-Share tokens from the exchange user account as deposits for trading and has a withdrawal function that receives as parameters proof hash of the exchange account balance settlement and the user's signature. d_USD tokens and Asset-Share tokens being traded through the exchange server are held in the Exchange Vault contract and are unlocked when the withdrawal settlement process between the user and exchange system is successfully completed.

A top-priority design goal is that average users having no ETH should be able to use our service seamlessly. For any Ethereum blockchain transaction, gas fees (ETH) should be paid by the transaction sender, including deposit-to-exchange transactions. The Asset-Share/ d USD token smart contracts have implemented a ‘transferDelegated’ function to prevent users from paying this network fee. The exchange server calls this function with a user’s crypto signature, asserting that the user has delegated the Ethereum transaction (a token transfer/deposit to the Exchange Vault contract) to the exchange server on behalf of the user. The exchange server pays the network transaction fees instead of the user, but only with the user’s permission. In such cases, the server will charge the user a tiny portion of d USD from the token amount being deposited or d USD already available on the user’s exchange account as a deposit transaction fee. This feature is possible because we provide the d USD stable token system. With this, average users can use our Ethereum-based exchange service seamlessly without having to purchase any ETH from an external crypto exchange service, and d USD can be used to pay the blockchain gas fee.

#### Exchange Flow Data Structures

All of the transactions in the exchange service should be serially ordered. The exchange system can be viewed as a state-machine whose state is the set of exchange account balances (tradable balances and in-trade/escrowed balances) for d_USD /Asset-Share tokens and open (unfilled) buy/sell orders. Each transaction makes a state-transition from the current exchange system state to the next.
δ : S n ✕ T → S n+1
where S : exchange state, T : input transaction, δ : state transition function
A total order of all exchange transactions is transparently and securely managed on the public Ethereum blockchain and in the Private Blockchain through the exchange server. A complete list of transaction types processed on the exchange system is ‘Buy-Order,’ ‘Sell-Order,’
‘Trade-Buy,’ ‘Trade-Sell,’ ‘Cancel-Buy-Order,’ ‘Cancel-Sell-Order,’ ‘Deposit,’ ‘Withdrawal-Request,’ ‘Cancel-Withdrawal-Request,’ and ‘Withdrawal-Confirm.’ The IPFS storage will be integrated into the CAS (Content Addressable Storage) inside the Tcontract Footprinting interface implementation when developing the Tao-Framework for the Private Blockchain. Therefore, please refer to  "Data Snapshots and footprinting" under TaoFramework Protocol section.

The detail implementation refer to the following link:
<https://docs.google.com/document/d/1wwI8Bpv6eu78S02tgBwyeeNyyfeIMZP3KM9ZynExyGs/edit?usp=sharing>

#### Off-chain Blockchain-like Data Structures with Blockchain Anchoring

![image] <https://docs.google.com/document/d/1giBVTOmCf_DFvUa2g87WnzVOBBd8Pnlzfa8kliJ3z5k/edit?usp=sharing>

To ensure immutability and transparency of all exchange data, all total-ordered exchange transactions are “block-chained” or “file-chained” through IPFS files linked to each previous one by hash-links. Those files are published regularly via public Ethereum blockchain, so called blockchain anchoring. It will be implement as the footprinting interface in the private blockchain.

Exchange transactions are grouped at regular time intervals as a ‘Block json file’ stored on IPFS. A Block json file contains.
i) a sequence of transaction message hashes (IPFS file addresses) pointing to each transaction message file immutably stored on IPFS.
ii) the previous file’s IPFS address creating a chain of Blocks. Some IPFS addresses is anchored(or published) on the Exchange Vault smart contract regularly.
With this structure, the total history of exchange transactions can be reconstructed from the public Ethereum blockchain data and public IPFS storage by any 3rd party without reference to the exchange server. This will be integrated into the Tao-Framework reporting process, please refer to Report Cycle section under Tao-Framework.

#### Initial Asset/Service-Share Token Distribution System (for Asset Public Offerings - APOs)

![image]<https://docs.google.com/document/d/1w4jE-wEAKuOlxCAk93GDVHX32h4Oqo-aXOC35z78JIE/edit?usp=sharing>

When an asset is being listed on the Exchange, available Asset-Share tokens will be initially distributed to any user accounts that have sent a share subscription request message indicating the user wants to buy a certain amount of Asset-Share tokens and escrowing a corresponding amount of d_USD for the initial offering.

If a user does not have enough d_USD in the Exchange, that user needs to first deposit an appropriate amount of d_USD to the Exchange Vault smart contract. Each subscription request message is crypto-signed by a user’s Ethereum account.

Immediately after the end of the initial share subscription period, the exchange server executes transactions on the Asset-Share Ethereum smart contract to claim/write the finalized initial token distribution. These transactions include the user’s signature and proof data for their
current d USD exchange balance published on IPFS storage. The accumulated d USD funds are withdrawable by the asset listing account. As with the trading system, the end user does not need to have any ETH for gas fees to participate in initial offerings. For the case of oversubscription, a fair and transparent random distribution of Asset-Share tokens among the subscribed user accounts is implemented. The seed random number is fetched from the public Ethereum blockchain (the block-hash of the Ethereum block data at subscription end time) and is used to generate a sequence of random numbers to decide the winning accounts and allotted amount of shares deterministically. The timestamp-ordered list of requested subscription messages signed by users, random seed number from the blockchain, the pseudo-random number generation method, and the final result of allotted shares among user accounts are all published to IPFS. The IPFS hash address for the file
containing all relevant data is then written to the Asset-Share Ethereum smart contract. Hence, the initial token distribution process is verifiable/auditable as provably fair by any external party.

#### Digital USD - d_USD

The d_USD token is an Ethereum standard token compatible with ERC20 and ERC777. Rather than transacting directly in Ether, we have introduced a fiat-pegged token named Digital USD ( d_USD ) which will act as the primary trading currency on the token exchange platform.
The pegging process is:  1 d_USD is created only when users deposit 1 USD worth of assets and is destroyed when users redeem it for USD. This one-to-one structure ensures the amount of d USD in circulation is less than or equal to the USD held in a reserve bank account of the d USD system. Furthermore, USD balances held in the reserve bank account are regularly published and audited, and the total supply amount of d USD tokens is public information on the Ethereum blockchain. This mechanism prevents the d USD system from arbitrarily issuing or destroying d USD tokens by holding it publicly accountable.

For the detail, please refer to the following link:
<https://docs.google.com/document/d/1RoQBVz4ItGHzYKB_TCPgp3GxlMCvzTjXhfTWy8GB9wY/edit?usp=sharing>

### Virtual Payment Offchain Channel

#### System Design

![image] <https://docs.google.com/document/d/11BsWtD9M_zw_EHV1u_dMBJ809bWvcGtOuuSskHkAa7g/edit?usp=sharing>

VPOS first delivers the information needed for payment and token requests through the client-VPOS channel.
The client then provides payment and requests payment tokens from the consortium blockchain through the client-blockchain channel.
Token Signers subscribe to the token request event via the signer-blockchain channels. The mirrored smart contract extends the public smart contract through a virtual blockchain-grafting channel.
The client delivers a payment token to OPOS using the client-OPOS channel.

#### Polynomial Multi-Hash Chain Micropayment

We use a hash chain-based micropayment channel instead of traditionally used digital signature schemes to eliminate the use and storage of private keys and avoid transaction reversals. Our innovative polynomial multi-hash chain micropayment scheme which utilize several hash chains to process arbitrary micropayments will significantly increse the performance and descrease the fee.
Please refer the following link for detail algorithm and formula:

*<https://docs.google.com/document/d/1nwURMy9z11P67MuaTyq1Jp7prLH_FCmRvX6zyXI5RFc/edit?usp=sharing>

#### Offline Payment System Components

##### Public Blockchain

A public blockchain is used for storage, access, execution, and integrity assurance of the public smart contract. We are using the Etherium Blockchain netowrk as our Public blockchain since it fits our requirement, which is universally available, trusted by all parties, capable of executing Turing-complete smart contracts with integrated cryptocurrency.

##### Public Smart Contract

Public smart contract establish an unambiguous and non-repudiable agreement between the buyer and seller. Unlike the deposits in classic electronic payment systems, a smart contract allows the buyer to retain full control over deposited funds irrespective of the seller's trustworthiness. Each buyer-seller pair requires a deployment of at least one separate public smart contract. The following rountines needs to implemented:
    1. The **set heads routine**, which saves all hash chain heads at once, can only be called by the merchant.
    2. The **payoff routine** exchanges the hashes released by the client into the cryptocurrency funds deposited by the client earlier.
    3. The **refund routine** allows the client to request unclaimed funds after a certain time period.
    4. The **deposit routine** allows the client to fund the smart contract.

##### Private Blockchain

Unlike its public counterpart, the Private Blockchain provides security only for the merchant infrastructure and does not intend to be trusted by the client. The Private Blockchain will be implemented under the Tao-Framework Platform.

##### Private Smart Contract

For each public smart contract, a Private smart contract is deployed on its private blockchain. The public smart contract contains an address of the mirroring smart contract. Thus Mirrored Contract can perform secure execution much faster at a lower cost. It provides locally-trusted execution and storage within multiple nodes, such that if one or even several nodes are compromised, the integrity of the ledger remains intact; the nodes can be added, removed, replaced, or updated without service disruption.
The Mirrored Smart Contracts provides the following routines:

1. The **set heads routine** mirrors its public blockchain counterpart: it sets the hash chain heads to the exactly same values as they are in the public smart contract.
2. The **token request routine** verifies the legitimacy of the VPOS (Virtual Point of Sales) and client, checks the hashes and payment amount provided by the client, processes the payment, updates the hashes, then triggers a blockchain event that activates the token signers.
3. The **one-time deposit routine** funds a smart contract only once; the additional deposits are prohibited to avoid tampering with the balance.
4. **set Ti routines** are used by the signers to store their signatures in the blockchain.

##### Token Signers

To achieve security redundancy, we define the payment token as a set of M public-key signatures {Γ1(η; δ); ….. ΓM(η, δ)} produced by M out of N signers. The signers' public keys are pre-determined and stored in all VPOS. Each token signer is a process running on physically-separated hardware. All signers are listening to a smart-contract event triggered by the token request function of the private smart contract. This configuration allows the signers to communicate with the blockchain using a pull-only protocol without listening on any ports.

##### Virtual Point of Sale(VPOS)

The Virtual Point of Sale (VPOS) stays offline during the normal operation.Each VPOS stores its private key and the full list of signers' public keys. In addition, each VPOS has its own list of sellers and pricing policies. If the list of signers' keys is modified in the system, e.g., a new signer is added for extra redundancy. If VPOS is compromised or its private key gets stolen, the corresponding public key should be removed or blocklisted in the mirrored smart contract.

##### Client

The client is a mobile device, which can establish a client-VPOS channel with an VPOS in proximity. The client also has access to the merchant’s private blockchain through a client-blockchain channel. For purchases, the clients do not access the public blockchain.

#### Communication Channels

##### Blockchain Gafting Connection Channel

The channel virtually links the address spaces of two independent blockchains. Specifically, it connects the public and private blockchains by storing the address of the private smart contract in the public smart contract.

##### Client-VPOS Channel

The client establishes a local bi-directional simplex channel with a VPOS in proximity. We assume the channel has limited capacity, possibly low bandwidth, and is not persistent. For our porotype, a two-way QR-code scanning as Client-VPOS channel. Alternative channels can be established for other use cases.

##### Client-Blockchain Channel

It allows the VPOS to get necessary updates on the state of the micropayment channel. While VPOS remains offline, the client plays the role of a proxy to the payment infrastructure, through which the VPOS receives a receipt of successful payment in the form of a **verifiable token**.

##### Set of Signer-Blockchain Channels

Each signer is an independent network node subscribed to the token request events of all the mirrored smart contracts through a signer-blockchain channel. This arrangement allows the signers not to listen to any ports and remain anonymous, significantly limiting exposure to potential cybersecurity threats. However, to serve multiple clients simultaneously, the signer-blockchain channels must maintain sufficient available bandwidth.

#### Offline Payment Protocols

The Protocols define communication procedures between the participants of the system

##### Contract initiation and deposit

This protocol establishes relationship between client and merchant and includes the following steps:

1. The client requests a contract from the merchant or service provider through the website or using a mobile app, and sends the merchant the heads of hash chains in the set Υ ;
2. The merchant prepares a pair of smart contracts for the client, including public and private smart contracts, and sends the client the address of the public contract;
3. The client verifies the code of the public smart contract, extracts the address of the private smart contract, and deposits funds on the public smart contract.

##### Transaction protocol

The purchase protocol includes the following steps:

1. A client approaches an VPOS and initiates a purchase, e.g., by selecting an item with description D and price P from the list of merchandise
2. The OPOS generates a random unique transaction ID T, and delivers the tuple (T, P, D, K(T, P)) to the client;
3. The client converts the item price P into the τ-adjusted price P', using the variable τ stored in the private smart contract;
4. The client calls the token request function of the private smart contract, providing (R1, R2, .... Rn), T; P, and K((T, P)) as arguments;
5. The merchant's mirrored smart contract first verifies price, payment, balance, and the authenticity of the signature of the VPOS, and then stores the tuple of payment hashes in the smart contract. It updates the smart contract balance, and adds current payment amount to the sum of previous payments p', which is stored in the private smart contract. Finally, it triggers the event E(T, P);
6. Each token signer responds to the event E(T, P) by storing the signature Γi(T, P) in the private smart contract;
7. The client waits until the private smart contract accumulates a minimum required number of signatures, and then it serializes these signatures into a tuple (which is the payment token) and delivers this tuple to the VPOS;
8. The VPOS verifies whether the signatures are distinct, valid, and produced by legitimate token signers and then delivers the purchased item to the client.

##### Payoff and refund

The merchant first verifies the payment hashes in the private smart contract released by the client and then calls a payoff function of the public smart contract with the inputs of payment hashes, payment amount, and optional client's payoff verification signature (as described below). Then, the unused funds deposited in the smart contract can be delivered to the client as a refund. The merchants' policies determine the implementation specifics of payment and reimbursement.

##### Payoff verification

The polynomial multi-hash chain price representation creates a potential caveat for the merchant to learn more hashes from the hash chains than the desirable number of hashes determined by the value of p'.
The correctness of the payoff amount is enforced by adding a payoff verification signature, sig(p'), generated and signed by the client to authorize an exact transaction payment amount. The signature will be stored as an additional variable in the mirrored smart contract and updated after each successful token request. The signature and corresponding p' will be verified by the public smart contract during the payoff process. If the merchant's requested payment deviates from the correct payment on the blockchain, the payoff will be rejected.

### Tao-Framework

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

The core idea of POC consensus is to periodically report the hashes of data snapshots to a dedicated smart contract deployed on an MoonBeam public blockchain. Once the report is submitted, it cannot be altered. The node cannot be trusted if the report does not match the publicly available and independently verifiable snapshot. The smart contract is used to check the liveness and integrity of the deployment. POC consensus uses correctness check instead of voting. All incoming transactions are recorded. There is only one correct way to execute them so no two conflicting transactions in different nodes. All transactions are executed immediately, during the open session of the Node, with a pre-defined decision deadline so that no fork will be created in TaoCoDAO blockchain.

The framework provides autonomous but distinct execution environments for each individual TContract. The contracts with mismatched footprints can be excluded from the consensus, thus guarantee timely footprint reports even if some contracts cannot establish consensus within their contexts. The goal of each TContract is to assure each transaction is executed identically across all the nodes. To enforce this, the TContract will produce a footprint of its current data after each transaction. If the footprints do not match, the TContract will be temporarily excluded from the snapshot.

As a result, each transaction entails an identical state transition of each node. If a node becomes irresponsible or fails the verification, it will be excluded from the consensus until the next report cycle.

#### Components

##### TaoFramework Auditors

The Framework is an open-data system, so all the data is openly available. Auditors run the software to oversee the integrity of the network deployment. It employs a community auditing model commonly used in public blockchains. Nodes in the cloud can perform cross-audit. The auditing process requires only a server and the auditing software to do the snapshot succession audit, which verifies all transactions process and data integrity audit that verifies the snapshot footprints and makes sure the footprints in reports match the actual data in Nodes.

[img] <https://docs.google.com/document/d/1oqSBPgNRoJZSkKLBN2ZjfLyvI7g8kJ-TpVxCV3jSC3s/edit?usp=sharing>

##### Scalable Cloud

The cloud is a predefined set of TaoCoDAO nodes. The number of nodes should be sufficient to guarantee the system's availability, but it should not be too large (less than 10) to avoid performance degradation. Unlike peers in blockchain, multiple nodes in TaoCoDAO are used to achieve accessibility and fault tolerance rather than the consensus. Since clouds allow vertical scalability, which adds resources to existing entities, a large number of nodes (horizontal scalability) is not needed for performance improvement. Therefore, the size of nodes and the set of identities of the participating nodes are the system parameters set before the deployment.

##### Network Node

The network nodes on the cloud, which are sufficient for participating in POC concensus to sync with each other.

##### TContracts

Tao smart contracts (TContracts), are decentralized programs deployed on the framework. There are two types of TContracts: system TContracts and custom TContracts:
System TContracts are pre-deployed in the framework, and they cannot be removed.
Custom TContracts are developed and deployed by clients.

##### Web Interface

Customers use the web interface to interact with a deployed TContract. The customer do not have to register an account but have a subscription to the Framework through one of the nodes. The subscription, however, does not incur any control over the use of the Framework. The purpose of the subscription is to charge for data transferred or the time period during which the subscription is active. It is different from the fee charged in the public blockchain. Each Node can establish its pricing policies to compete for customers.

##### Ethereum Smart Contract

Each TaoCoDAO deployment has a smart contract on Ethereum blockchain, storing hashes of the reported snapshots. To avoid retrospective modification, repeated reporting for the same timestamp is prohibited by the smart contract's logic.

#### Report Cycle

System parameters are set before the deployment and are remaining the same  during the lifetime of the system, which includes:
    snapshot report period denoted λ, which is measured in seconds.
    Report deadlines are all timestamps divisible by λ. last report deadline can be calculated as
 td = tc MOD λ, where tc is the current timestamp.
The upcoming report deadline is calculated as tnext = λ+tc MOD λ.
Every data snapshot denoted Si , has serial number i, which is called the reporting cycle, represented as  (td -t0) /   λ .  t0 is the deadline of the very first snapshot in the deployment. Subsequently, the protocol requires that each Node reports the snapshot Si  by the end of cycle i + 1 in order to be treated as valid during cycle i + 2.

#### TaoCoDAO Node Architecture

[img] <https://docs.google.com/document/d/1MbwbvpBS0wnmpcl1SOR0zWINTgo7j3Rhq1crv90cX5c/edit?usp=sharing>

##### Node Core

The Core is responsible for networking, cryptography, synchronization, protocol, process and thread management, signature and authenticity verification, transaction parsing, data encoding and decoding, and communication with the smart contract.

##### Uniform RESTful Interface

There are six vectors of communication:
 client-node, node-node, auditor-node, node-blockchain, auditor-blockchain, and client-auditor.

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

##### Keys

 Each node uses an MoonBean account to represent itself . The set of public addresses of TaoCoDAO node is fixed for each deployment and is hardcoded in the smart contract.

##### System Parameters

Some parameters of a TaoFramework deployment that remain constant for a lifetime are called the system parameters include :
    unique deployment ID, identities of the nodes,
    reporting period λ,
    initial timestamp t0,
IP addresses of nodes are not part of the system parameters which allows nodes to change location, or network configuration — we assume that these settings are exchanged between nodes.

##### System Tcontracts

 The system TContracts are pre-implemented as part of TaoCoDAO, and they cannot be removed. These TContracts deliver essential functionality to the system, and their number can grow as TaoCoDAO framework evolves. The current version of TaoCoDAO includes two system Tcontracts:  custom TContract deployer, and content-addressable storage (CAS).

custom Tcontract deployer serves as an interface for developers to add their custom TContracts to TaoFramework.
    CAS contract has two major functions:
        a) it allows to store large files outside of data models thus significantly improving the   performance of footprinting and cloning
        b) it establishes a secure communication channel between Tcontracts

##### Custom TContracts

Custom TContracts are developed and deployed by users of TaoCoDAO. The nodes have no power to modify, censor, or control these contracts. The deployer of a custom TContract can specify the ownership and other parameters of the contract, including the ability to destroy one.

##### TContract Interface

To create a TContract, the developer should implement a standard TContract interface, which includes smart contract data model, data footprinting, and snapshot cloning. Then write the TContract code for the interpreter specified in the configuration.

#### TaoFramework Protocol

##### Data Snapshots and footprinting

In Tao-Framework, data is stored in TContracts according to the data models. For example, All the Token Exchange Transaction TContracts can store data in IPFS storage. Tcontract can upload the data file to TaoCoDAO CAS and refer to them via their hashes to prevent operations with large data instances. TaoCoDAO performs CAS reference counting, purging CAS entries only when counters reach zero.

##### Operation Lifecycle

[img] <https://docs.google.com/document/d/1HdeexJJmYOYnjgKj-gTIaA-ZmkgrhBrZgRRKaoI0enw/edit?usp=sharing>

 the lifecycle of TaoCoDAO involves an oscillation of two stages:  main stage and report stage.

    TaoCoDAO actively accepts and processes incoming transactions that shape the current data snapshot in the main stage, which is longer than the report stage. During the main stage, auditors download the previous data snapshot for review and storage.

    In the report stage, TaoCoDAO accepts transactions, but instead of executing them, it queues them in a buffer. Once the current snapshot is footprinted, TaoCoDAO continues executing incoming and queued transactions. Also, as soon as the footprint is ready. However, at this point, the execution of the incoming transactions resumes because the execution inhibition is needed only for calculating the footprint, not for smart contract submission.

##### Transaction workflow

 [img] <https://docs.google.com/document/d/1ZQJpcSeAz6Z_LOnO7OKUPk4Vh22m8gGXNTOQxiZEzPk/edit?usp=sharing>

 ❶: Client creates a transaction and commits it to the TaoCoDAO node with which they have an access subscription;
 ❷: the service node verifies the authenticity of the transaction and forwards it to all the other nodes in the cloud;
 ❸: the nodes of the consortium process the transaction and send a signed confirmation back to the service node within a strict deadline;
❹: the service node executes the transaction, serializes the confirmations into an aggregated receipt, and sends it to the client as a reply to the initial commit request

##### Transactions

1. Create a transaction message M, which is signed and sent to the TaoCoDAO node, called the Service Node, with which the client has an access subscription.
2. Service node first authenticates the transaction by confirming that the user signed the transaction message with the same identity (public address) as the one found in the transaction message.
3. Service node forwards the transaction to all the nodes in the cloud.
4. nodes verify and execute the transaction and send a signed confirmation back to the service node within a pre-determined short time frame.
5. If all nodes do not process the forwarded transaction until the established deadline, the transaction reverts.
6. If a node misses the deadline more often than a pre-determined threshold, it is temporarily excluded from the consensus upon mutual agreement with the other nodes.
7. The service node verifies the footprints of the resulting data snapshots reported by the other nodes and executes the transaction by itself.
8. If the execution result matches the footprints reported by the other nodes, the service node serializes the confirmations into an aggregated receipt. It sends it to the client as a reply to the initial commit request, which constitutes the transaction confirmation event with multi-signature cryptographic proof.

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

### Tao-Framework Development

 Refer to <https://docs.google.com/document/d/1wDyPcazULS7TwKM6L0iwdzD_XVFNvPyKmm9aLW0NR38/edit?usp=sharing> for detail

### Exchange Server Development

Refer to <https://docs.google.com/document/d/1BMW0y6hxiBQcLa5-SypvjpHRheM_xLg0NacN3MWUU4E/edit?usp=sharing> for detail

### Offline Payment Infrastructure Development

Refer to <https://docs.google.com/document/d/1-ebWPoWI4fQgJfifLP8PRTMUxONLGjyc11r-37yQDXE/edit?usp=sharing> for detail


## EcoSystem Fit

Blockchain applications require low overhead and minimal transaction cost to be useable. Unfortunately, the bottleneck has been on-chain payments since it incurs a fee for every transaction. The price will quickly become unmanageable, especially when it involves many microtransactions. In the web3 world, the payment is built-in using the native token, which is ETH which incur high transaction fees.

Tao-Token payment framework leverage the Blockchain Grafting technology (Public Blockchain + Private Blockchain) to provide other Dapps running in the web3 world with  "virtual off-chain micro-payment channels." Thus these applications within our ecosystem can provide their service in the "pay-as-it-goes" manner or better incentive mechanism for the resources they have consumed.

Our Private Blockchain is running on the Tao Framework, which is designed to encourage cooperation between the nodes in the P2P network instead of competing with each other like other consensus protocols such as POW. Since the size of the network nodes is fixed, the execution is processed synchronously, openly, and transparent, and the payment model is separated from the consensus. Thus, the nodes have no incentive to cheat. Moreover, each Node benefits from the fast and successful execution of transactions by all other nodes in the system. The consensus protocol used to synchronize the network nodes will be implemented as a smart contract deployed through Polkadot network toolchains such as MooBeam. Compared to similar Polkadot smart contract chains such as moonbeam, Edgeware, EVM Module, ParaState, gear,  Tao Framework can provide better scalability on computing power, data storage, and transaction output. Also, it will give a better incentive to encourage more cloud providers to participate in the Polkadot network by running as nodes.

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
| 0e. | Article 1d | We will publish an article/workshop that explains our advertising workflow as well as technical details.|
| 1. | Payment Infrastrue components 6d|we will build the payment infrastructure components, which include VPOS; Token Signers; Communication Channels |  
| 2. | Exchange Server Components 6d | We will develop Token Exchange Smart Contract, Transaction Data Structure |  
| 3. | Tao-Framework components 6d | We will create a Substrate module that works as a network node on the cloud, which is sufficient for participating in POC (proof of correctness) protocol. The core is responsible for networking, cryptography, synchronization, protocol, process and thread management, signature and authenticity verification, transaction parsing, data encoding and decoding, and communication with the smart contract  |  
| 4. | Blockchain consensus protocol 6d | Develop the TNPOS(Transaction Nominated Proof of Stake) consensus protocol, including how to elect the collector, how to produce the block, block finality determination |  

### Milestone 2 —System integration and running the workflows on the test environment. Final run and performance testing in the pre-production-like environment

- **Estimated duration:** 15 working days
- **FTE:** 2
- **Costs:** $11,200 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | Documentation 1d| We will provide  a basic tutorial that explains what an use case looks like and how to run a test case |
| 0b. | Testing Guide 2d | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0c. | Docker 1d| We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0d. | Article 1d | We will publish an article/workshop that explains our advertising workflow as well as technical details.|
| 1. | System Integration 4d| We will integrate all the development components, including Tao-Blockchain, Vpos, TaoToken Protocol, Token Signers, Communication Channels |  
| 2. | ProtoType development 4d |We will develop a prototype for a specific use case. |
| 3. | ProtoTpe test run 4d| We will run the prototype in the test environment.|  
| 4. | Performance Evaluation 3d |We will run the performance evaluation, including the Transaction Throughput, Transaction Latency, Communication Overhead |

## Future Plans

We will use virtual state channel technology to improve blockchain scalability. Explore the possibility of leveraging the extended UXTO model to model the native token.
