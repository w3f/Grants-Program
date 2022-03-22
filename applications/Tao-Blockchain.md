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

We think the major obstacle is until now, the cryptocurrency world, at the most part, is decoupled from the Fiat currency and existing financial system. A public blockchain's native crypto-currencies serve as the primary incentive system, traded in public exchanges, are a speculative asset, highly volatile in price. Make it impractical to use as a payment/trading currency. Resorting to tokens enables a blockchain system to empower the management and transfer of real-world assets while taking advantage of the benefits of the technology, which allows new applications, possibly breaking monopolies of compelling platforms and companies of today. Particularly integrating the existing financial system and local currency with the future DiFi (Decentralice Finance) world will open up an enormous opportunity for leveraging blockchain technology.

We introduce an innovative public + private blockchain system design without issuing a native cryptocurrency. Instead, any entities can issue their tokens using the built-in ​ Standard Token model, ensuring token interoperability. Furthermore, the elected block producers can select user-created tokens like fiat-pegged stable tokens issued by trusted entities as the Transaction Fee Tokens. A unique consensus mechanism, the TDPOS ( Transaction Delegated Proof-of-Stake will incentivize the application service providers to be elected as block producers. The Public  Blockchain uses the fiat-pegged stable tokens as base currencies that are programmable on custom smart contracts to meet the business needs. It provides the delegable transaction fee payments, the built-in on-chain token exchange, the blockchain account recovery, and the blockchain scalability enabled by the TNPOS(Transaction Nominated Proof Of Stake) consensus with short block time and fast block finality, off-chain state-channel exchange technology, and multi-blockchain architecture.

On top of that, merchants can deploy their own secure offline payment terminal infrastructure that does not require collecting and storing any sensitive data. As a result, it provides a safe, fast, and low-cost alternative payment method to traditional payment such as bank checks and credit cards and a flexible way to open a consumer credit base on future revenue. For example, A barbershop issues membership card at a 20% discount. So a client goes to the website and pays USD 200 and gets 250 TaoTokens.Just like purchasing a prepaid custom loyalty card with 250 points preloaded. Then, later on, they can go to the barbershop and pay for the service by scanning the QR code without carrying the physical card. And the barbershop gets a small loan for 200 USD by guaranteeing the future service.  

We are using the multi-hash chain micropayment channels for off-chain transactions; a client generates the hash chains and keeps their seeds secret, thus eliminating the use and storage of private keys and avoiding transaction reversals. Each buyer-seller association is represented by smart contracts: one smart contract deployed on the public blockchain (public smart contract) and another one deployed on the consortium blockchain (mirrored smart contract). The public smart contract protects the buyer's deposit and sellers' payoff without preexisting trust. In contrast, the mirrored smart contract provides a secure interface and booking to the off-chain micropayment infrastructure with minimum delays and zero fees. The client pays the merchant with a set of hashes and receives a payment token, a tuple of signatures from several token signers that respond to the token request blockchain event.


### Tao-Blockchain Network

#### Architecture Overview

![image] <https://docs.google.com/document/d/18U0J35w7_CiI_16o47qCXx5meSPwqV7dCLBN07mKg-o/edit?usp=sharing>

Our blockchain system Tao-Blockchain is designed as a Parachain of the Polkadot, which relies on a hybrid consensus model. The block finality gadget and the block production mechanism are separate in such a scheme. Consequently, parachains only have to worry about producing blocks and rely on the relay chain to validate the state transitions. Tao Node is based on a full MoonBeam Development Node that runs inside a private network. Tao Collators are the Tao Blockchain network members that maintain the parachains and produce the block. They run a full node (for both Tao parachain and the Polkadot relay chain), and they have the state transition proof for relay chain validators. We use Nimbus Parachain Consensus Framework <https://docs.moonbeam.network/learn/features/consensus/> . It provides a two-step filter to allocate candidates to the active set of collators, then assigns collators to a block production slot:

    • The parachain staking filter selects the top candidates for tokens staked in each network. We use our TNPOS( Transaction Nominated Proof Of Stake) consensus protocol to choose the top candidates.
    • The fixed-size subset filter picks a pseudo-random subset of the previously selected candidates for each block production slot.

#### Smart Contract Based Framework

![image] <https://docs.google.com/document/d/1PiWivCIqCW8S0FW4jOzh6x_Dby0H4pimLuTq9G5hFz4/edit?usp=sharing>

There are two types of smart contracts on the Tao-Blockchain​:

 **​System smart contracts**
 The system smart contracts are privileged smart contracts deployed on special system accounts owned and managed by the elected block producers. The Tao-Blockchain system contract deployed on the special account ​‘Taoblock’ handles system-level blockchain operations such as blockchain account creation, account permission management, block producer-related functions, etc. The ​Tao-Blockchain provides the system identity contract for the blockchain account and the built-in on-chain ​system token exchange contract ​(buy/sell ​Tao-Blockchain Standard Tokens​).​ The ​Tao-Blockchain core implements the ​Standard Token model. Every blockchain account has a token ledger, and everyday token operations are inherently built on blockchain core without a deployed smart contract code.

**User-deployed smart contracts**​.
All smart contracts other than the system smart contracts are user-deployed smart contracts deployed on each user’s blockchain account, implementing user-designed custom blockchain operations. User-deployed smart contracts are fiat-pegged stable token contracts, asset-backed token contracts; token exchange contracts; non-fungible token contracts (unique game items), document notary contracts, loyalty/rewards point contracts, and so on.

#### Token Exchange Plateform

The Tao-Blockchain will also function as a decentralized token exchange platform. A built-in token exchange smart contract is deployed as a system contract managed by the elected block producers. Any token issued as a Tao Standard Token can be easily traded through the transparent on-chain order books and the standardized buy/sell order transactions executed on the system token exchange contract. Using the fiat-pegged stable tokens as the base trading currencies, the investor can easily trade the Asset-backed tokens such as enterprise share, commodity-backed, art-piece, and loyalty/rewards tokens. Due to the Standard Token model enforced on the standard token interface at the blockchain core level, a token exchange smart contract can seamlessly interface with the various types of tokens on the blockchain. Custom token exchange contracts can also be deployed using the standard token interface. Unlike centralized crypto exchange services, buy/sell orders for the token exchange are submitted as blockchain transactions signed by the user’s private keys, order books are on-blockchain, and all the order-matchings are validated and transacted on the smart contacts. The record of the trading transactions is transparently, and immutable thus cannot be manipulated by a centralized actor.

#### Standard Token Model

The TaoBlockchain provides a unique token model in which is every account can mint a Standard Token and run standard token operations. Every blockchain user can make their account act as a Standard Token and freely issue/transfer / redeem (burn) its tokens. The standard token operations such as creating / issuing/redeeming/transferring tokens are built-in on Tao-Blockchain core inherently for every blockchain account. The Tao-Blockchain core determines the Transaction Fee Token amount charged for each transaction according to the block-producer-designated fee amount per operation, the consumed computing resources (CPU, network, storage), and the used weight Transaction Fee Token. The Blockchain core system automatically generates and executes the ‘txfee’ standard token operation, which charges Transaction Fee Tokens to the transaction fee payer for the measured transaction fee amount imposed for conducting blockchain operations in a user-sent original transaction message. Please refer to the following link for detail:

*<https://docs.google.com/document/d/1IaVxgtRV5OKXfV_9SuBz1eHwCnmZ-_iSeCcgyMuKcqA/edit?usp=sharing>

#### Token Backing Depository

A Token Backing Depository is an entity that issues tokens in the Tao-Blockchain and ensures the value of issued tokens by holding assets of equal value to back the issued tokens. Whenever a token holder requests to redeem tokens, the Token Backing Depository burns the requested amount of tokens on the blockchain. Then, it transfers the corresponding amount of the backing asset to the user. The Standard Token interface includes built-in operations for issuing and redeeming (burning) tokens. Token symbols are tagged by the blockchain account name of the Token Backing Depository. Backing Depository whose account name is tagged on the token symbol. For example : BTC/D2 : Bitcoin-backed BTC token issued by the Token Backing Depository D2 holding the private keys controlling the issued amount of actual Bitcoin, only redeemable by D2.
If multiple entities issue USD-pegged tokens, each token tagged by each Token Backing Depository should be redeemed by the corresponding Depository. Any blockchain account owner can issue tokens, but Token Backing Depositories need trust from other blockchain users for their tokens to be accepted by others in the system.

#### Fiat-Pegged Stable Tokens (DFIAT)

Any entity can issue a fiat-pegged stable token backed by a specific fiat currency reserve fund, then maintain it by one-to-one backing of fiat money held in reserve outside the blockchain. The fiat-pegged stable token can also be used as a Transaction Fee Token like a native cryptocurrency on a blockchain. For example, DUSD/TB1 USD-pegged stable token, digital USD, issued by a  trusted bank (BK1), which could serve as a Transaction Fee Token and a base currency for on-chain token exchanges on a blockchain operated in a country where people use USD as currency.DFIAT is only issued when the users deposit their fiat money into the DFIAT Token Backing Depository. If a user sends 200.00 USD worth of fiat money through an existing payment channel to the bank acting as a Token Backing Depository (TBD), then the same amount (200.00) of DUSD/TBD is issued to the user's blockchain account. Please refer to the following link for detail:

*<https://docs.google.com/document/d/1_sTmCFzwm8A718RsPQKh-vJ6xM1p8QrG6kdwsYVflLM/edit?usp=sharing>

#### Asset-Backed Security Tokens ( DAsset)

Depositories can also issue real asset-backed security tokens on the Tao-Blockchain . The real assets can be tokenized through trusted Token Backing Depositories connecting the real assets and the DAssettokens. For example, REAL123/D2 is a real estate backed security token issued for a building managed by a Token Backing Depository D2, and can be used to trade shares of the tokenized building. A Token Backing Depository issuing DAssetis required to securely manage the ownership of the tokenized real assets and keep the real asset safe physically and legally. The asset is owned in its entirety by the Token Backing Depository off-chain, but partial ownership shares of the tokenized asset can be traded on the Tap-Blockchain via the token representing these shares.
Please refer to the following link for detail:

*<https://docs.google.com/document/d/1_jBfUk9hlwkyWM_tz9NDERyEFq1qVIH-EYN_s6m5tLI/edit?usp=sharing>

#### Transaction Fee Model

Tao-Blockchain is a fee-based blockchain system, charging Transaction Fee Tokens for each transaction that might contain multiple operations. Block producers manage the transaction fee table on-chain, transparently specifying the prices of specific blockchain operations, which can be Standard Token operations or custom smart contract specific operations. The transaction fee table is continuously updated with the agreement of ⅔+ of the block producers in a transparent and decentralized fashion, reflecting the blockchain ecosystem's needs. If a smart contract operation whose price is not specified on the fee table is executed, the default transaction fee per operation is charged. User-created custom smart contracts could use many computing resources (cpu time, network bandwidth, storage space). A dynamic transaction fee amount determined by how much computing resources are consumed can also be applied.  Suppose the resource consumption-based dynamic transaction fee measured for an operation is greater than the transaction fee price on the transaction fee table or the default transaction fee per operation. In that case, the dynamic transaction fee is charged for the executed operation.  The calculated transaction fee amount is by default in the base currency units as agreed by the block producers. Suppose a USD pegged Transaction Fee Token is selected with a weight 1.00. In that case, the base currency unit for transaction fee payment is USD), so the weighted amount of Transaction Fee Tokens is to be charged for the transaction fee calculated by applying relative weights (exchange rates) among the selected Transaction Fee Tokens.

#### Transactions Nominated Consensus Mechanism

Transactions generated by the client-side of the blockchain applications can include a vote for a block producer candidate by filling out the " transaction vote " field with the blockchain account name they nominate. The blockchain nodes which receive the most votes from the processed transactions are elected to form the group of block producers that cooperatively make new blocks and collect transaction fees from blockchain activity. The transaction votes for each blockchain account running a blockchain core node are continuously accumulated as transactions are processed on the blockchain. Therefore, the amount of transaction votes acquired represents solid proof of how much that blockchain account has been involved in producing meaningful transactions and creating economic activity in the blockchain ecosystem.

Please refer to the following link for detail:
*<https://docs.google.com/document/d/1nadx_pZdGHSCuRPMiSqhUpxydVSQ5FyA-SaQOq-nXhA/edit?usp=sharing>

### Blockchain Consensus and Transaction Fee Profit Distribution


The Transaction-Nominated-Proof-of-Stake blockchain consensus mechanism has been designed to have ideal properties for a public/permissioned hybrid blockchain​. Any entity can be elected as a block producer and participate in the blockchain consensus process and collect the profits of maintaining the blockchain infrastructure. Block producers participating in the consensus protocol to generate new blocks are elected from the TNPOS Node Pool​. For each new block, the total transaction fee amount collected from the transactions included in the block is distributed to the block producer, TNPoS Nodes, and Seed Trust Nodes. Short block time can be achieved by selecting a fixed number of block producers to cooperate instead of competing during the block producing process, letting each block producer make a new block in its pre-allocated time slot and immediately progressing to the next block production turn without waiting to gather votes for the validity of the new block from more than ⅔ of the elected block producers. The Tao-Blockchain accelerates the block finality time through explicit block validity voting, independent of the block production progress, with a higher network communication cost trade-off.

Please refer to following link for detail:
*<https://docs.google.com/document/d/1fj6W0DAU0wehCkx8IRte4klVQulLe24qdw2vq5VziF8/edit?usp=sharing>

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

#### Payment System Components

**Public Blockchain** :
A public blockchain is used for storage, access, execution, and integrity assurance of the public smart contract. We are using the Tao Blockchain netowrk as our Public blockchain since it fits our requirement, which is universally available, trusted by all parties, capable of executing Turing-complete smart contracts with integrated cryptocurrency.

**Public Smart Contract** :
Public smart contract establish an unambiguous and non-repudiable agreement between the buyer and seller. Unlike the deposits in classic electronic payment systems, a smart contract allows the buyer to retain full control over deposited funds irrespective of the seller's trustworthiness. Each buyer-seller pair requires a deployment of at least one separate public smart contract.

**Consortium Blockchain** :
Unlike its public counterpart, the consortium blockchain provides security only for the seller and does not intend to be trusted by the buyer. The blockchain used the MoonBeam Dev Node as the smart contract execution engine and managed under a proof-of authority (PoA) consensus to achieve high levels of security and redundancy at a bit of cost.

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
2. The OPOS generates a random unique transaction ID T, and delivers the tuple (T, P, D, K(T, P)) to the client;
3. The client converts the item price P into the τ-adjusted price P', using the variable τ stored in the private smart contract;
4. The client calls the token request function of the private smart contract, providing (R1, R2, .... Rn), T; P, and K((T, P)) as arguments;
5. The merchant's mirrored smart contract first verifies price, payment, balance, and the authenticity of the signature of the VPOS, and then stores the tuple of payment hashes in the smart contract. It updates the smart contract balance, and adds current payment amount to the sum of previous payments p', which is stored in the private smart contract. Finally, it triggers the event E(T, P);
6. Each token signer responds to the event E(T, P) by storing the signature Γi(T, P) in the private smart contract;
7. The client waits until the private smart contract accumulates a minimum required number of signatures, and then it serializes these signatures into a tuple (which is the payment token) and delivers this tuple to the VPOS;
8. The VPOS verifies whether the signatures are distinct, valid, and produced by legitimate token signers and then delivers the purchased item to the client.

**Payoff and refund**
The merchant first verifies the payment hashes in the private smart contract released by the client and then calls a payoff function of the public smart contract with the inputs of payment hashes, payment amount, and optional client's payoff verification signature (as described below). Then, the unused funds deposited in the smart contract can be delivered to the client as a refund. The merchants' policies determine the implementation specifics of payment and reimbursement.

**Payoff verification**
The polynomial multi-hash chain price representation creates a potential caveat for the merchant to learn more hashes from the hash chains than the desirable number of hashes determined by the value of p'.
The correctness of the payoff amount is enforced by adding a payoff verification signature, sig(p'), generated and signed by the client to authorize an exact transaction payment amount. The signature will be stored as an additional variable in the mirrored smart contract and updated after each successful token request. The signature and corresponding p' will be verified by the public smart contract during the payoff process. If the merchant's requested payment deviates from the correct payment on the blockchain, the payoff will be rejected.

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
| 0e. | Article 1d | We will publish an article/workshop that explains our advertising workflow as well as technical details.|
| 1. | Payment Infrastrue components 6d|we will build the payment infrastructure components, which include VPOS; Token Signers; Communication Channels, etc. |  
| 2. | Smart contract 6d | We will develop a public smart contract and the supplement mirrored smart contract |  
| 3. | Tao-Blockchain components 6d | We will build all the Tao-blockchain components, including  Standard Token Model; Token Exchange Platform; Fiat-Pagged Stable Token, Transaction Fee model, etc. |  
| 4. | Blockchain consensus protocol 6d | Develop the TNPOS(Transaction Nominated Proof of Stake) consensus protocol, including how to elect the collector, how to produce the block, block finality determination, etc. |  

### Milestone 2 —System integration and running the workflows on the test environment. Final run and performance testing in the pre-production-like environment

- **Estimated duration:** 15 working days
- **FTE:** 2
- **Costs:** $11,200 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 1. | System Integration 4d| We will integrate all the development components, including Tao-Blockchain, Vpos, TaoToken Protocol, Token Signers, Communication Channels etc. |  
| 2. | ProtoType development 4d |We will develop a prototype for a specific use case. |
| 3. | ProtoTpe test run 4d| We will run the prototype in the test environment.|  
| 4. | Performance Evaluation 3d |We will run the performance evaluation, including the Transaction Throughput, Transaction Latency, Communication Overhead, etc.|

## Future Plans

We will use virtual state channel technology to improve blockchain scalability. Explore the possibility of leveraging the extended UXTO model to model the native token. 
