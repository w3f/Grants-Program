# Stardust Grant Proposal

## Project Overview :page_facing_up:

### Overview 

**Tagline:** Distributing unilateral miner power across three independent node networks.

**Brief Description:** 

Our proposal addresses the key vulnerabilities of modern Distributed Ledger Technologies (DLTs) by redesigning the core process to separate the unilateral power a winning node has across three cooperating, coordinated, but independent node networks.

Extant DLT implementations grant a single agent, typically a mining node, full power and visibility over the entire transaction lifecycle. The ability to clearly view all the potential transactions in the mempool, order them for execution freely, and inject one’s own transactions has allowed miners and bots to easily and effectively perform risk-less malicious attacks on users by front- and back-running transactions. These vulnerabilities directly cost the users of the Ethereum decentralized ledger alone over $700M from January 2021- August 2021 and are a growing existential threat. If not solved, these vulnerabilities limit the commercial application of DLTs, particularly their potential to supplant legacy financial infrastructure with distributed solutions such as decentralized exchanges (DEXs). 

Our proposal eliminates these attack vectors by ensuring transaction privacy during origination, increases transaction throughput by specializing node roles, and provides additional security through a series of checks and balances by incorporating the financial principle of segregation of duties.

The proposed distributed ledger is managed and updated by three cooperating node networks, through a decentrally orchestrated process where each node only has enough information as is needed to complete its given role.

To wit, we separate the three main stages of a financial transaction; origination, execution, and settlement, amongst independent trustless node networks that cooperate in tandem with careful checks and balances to make changes to the global state. In our implementation, when a user wants to initiate a transaction of any form, they submit the SHA256 Hash of their transaction details with no plain text details except for a nonce and their transaction fee bid. Our mining node network, whose duty is origination, is able to mine these hashes into a block without those details. Executing these transactions is the responsibility of the clearing nodes who execute and clear the transactions that are in the clearing window as users reveal and append their plain text details to their transaction. 

Users are not required to disclose any details until the transaction is committed to the chain and enters the clearing window. Finally, at the end of the clearing window, these transactions are settled by the commit node network, which orchestrates the global process.

As a key innovation of our blockchain, we use the block height as a trustless, decentralized clock in order to create an unambiguous clearing window. In addition, at all times, the ledger is publicly visible; this allows users to properly assess counterparty risk, as well as enables straight forward smart contract implementation. 

By splitting execution, origination, and settlement across independent networks, our proposal aims to protect end-users by eliminating front-running attack vectors, future-proofing DLTs for more complex financial constructs, and enables higher transaction throughput.

**Substrate Integration:** 

We’re proposing a layer 1 solution that changes how blocks are cleared and committed, a technically complex build. While our team has built the proof-of-concept blockchain from scratch, viewable at https://explorer.stardust.finance, we believe using Substrate can dramatically accelerate our timeline to a production rollout. We've done a deep dive into the technical aspects of Substrate and as of now, we believe the best architecture is to build a custom runtime from scratch, compile it into WASM, and integrate it into Substrate. Specifically, we will be coding our runtime in Swift, another LLVM language, similar to Rust, that can be compiled down into WASM. Based on our understanding of and experience with Substrate, we can then implement this WASM runtime into Substrate CORE.

We are basing our current beliefs on the documentation: "If the runtime can be made to be compatible with the abstract block authoring logic of the Substrate node, then you can simply construct a new genesis block from your WASM blob and launch your chain with the existing Rust-based Substrate client. If not, then you will need to alter the client's block authoring logic, and potentially even alter the header and block serialization formats."

We will obviously need to change the block authoring logic, the header and block serialization formats as our block headers contain commit hashes which finalize a block and are integral to generating the block hash when a new block is added to the chain. However, the documentation isn't clear as to whether Substrate CORE allows this level of customization. We are interested in leveraging the P2P networking, storage management, and other utilities of Substrate CORE as our implementation isn't reinventing that technology.

Due to the complexity of the build, we initially spoke with the Substrate Builder's Program for technical guidance on whether our architecture was compatible with Substrate CORE and they recommended we apply for a level 2 grant for an initial build out. We would love guidance from the committee as well if this is something that they view as technically feasible, or if there are fundamental challenges with integrating our block authoring logic with Substrate CORE. Any guidance would be appreciated.

**Reason for project interest:** 

We have built a peer-powered wealth management system that uses your peers to benchmark your returns and how much you're paying in fees. We've launched our platform but through our engagements with the community noticed that high fees and attacks on DEXs are increasingly becoming an issue for users. Our team has a very unique depth of experience. Adit's been a banking analyst for 5 years and is a full-stack developer. Theresa has been trading crypto since 2017 and has watched the space grow and seen the challenges it's faced. Our users are paying exorbitant fees and being attacked by malicious bots. We founded Stardust to help all users better manage their finances, whether crypto or traditional. It's core to the mission of our company that we build a better solution for the millions of crypto investors today, and the millions more in the future. 

### Project Details

We will summarize below, however, if you wish for additional details, our White Paper can be viewed here: https://stardust.finance/whitepaper

In addition, if you would like to see an implementation of this blockchain in action, you can check out our early testnet here: https://explorer.stardust.finance/. Its code can be viewed here (written in Ruby): https://github.com/adit313/NovelBlockchainRailsImplementation.

In summary, we split the life-cycles of a transaction into origination, clearing, and settlement. Origination is the initial sourcing of financial transactions for execution. In extant blockchains, this is done by the miner from the mempool which store transactions with full plain text details. These details are necessary in extant implementations because the miner also needs to be able to execute the transaction. Clearing is a financial term which 'denotes all activities from the time a commitment is made for a transaction until it is settled'. For a blockchain implementation, clearing involves several processes. First is transaction validation, which includes checking formatting and ensuring that the party has the funds to complete the transaction. Next is execution, which in many blockchains involves the resolution of either a script hash or running a smart contract and all the preparations to make changes to the global state and the relevant databases. Finally, these changes are made official by committing the changes to the databases and the global state, in traditional finance this is known as settlement. 

![The Stardust Node Network](https://stardust.finance/img/NodeGraphic.png)

Beginning in reverse, we have our Commit Node Network, which functions as both the gateway to the blockchain and is the node network that commits any changes to the global state. Commit nodes are chiefly responsible for orchestrating the closing process where blocks are finalized and added to the network, but they also are where users submit transactions to be disseminated throughout the network. They also store a full copy of the blockchain and can be queried for balance/nonce/block information.

Our blocks are overall similar to a traditional block, however, our header has two additional fields. First is a "commit hash" which is the Merkle root of the transaction objects appended with their associated transaction status. The second is a "solution hash" which is the solution that satisfies the consensus mechanism. In Bitcoin, for example, this would be the hash that satisfies the difficulty of the proof-of-work requirement, and is known as the block hash in that implementation. Our block hashes are different, they are a composite of a block's solution hash and the commit hash of a specific previous block. The distance between this block's solution hash and the specific block used for the commit hash is referred to as the "clearing window", for reasons that will be detailed later.

Our transaction objects are similar to extant implementations as well, however, their plain-text details don't have to be disclosed when they are submitted to the blockchain. Instead, they are hashed as usual, but can be submitted with only the hash and no plain-text details about the transaction destination or amount. These are submitted to the commit node network which verifies the transaction for formatting, a signature, and that the sender has a reserve of funds to pay the mining fee at a minimum. Once a commit node verifies the transaction is valid, it broadcasts it to the mining node network. One additional detail is that every valid transaction in the system has an associated status flag.

In the mining network, nodes maintain the classic mempool of transactions in order to mine them into a block. At this point, because some or potentially all of the transactions don't have plain-text details, miners are forced to prioritize based solely on the transaction fees. This eliminates front-running or MEV as miners or malicious bots can no longer read any sensitive transactions as users will not provide those plain-text details. However, the lack of plain-text detail also means the miner can't clear the block. That role is now the sole responsibility of the clearing node network. In fact, this newly mined block has all its transactions statuses, whether they have plain-text details appended or not, set as 'waiting'.

After a block has been successfully mined, whether through proof-of-work, proof-of-stake, or any other consensus mechanism, the block solution hash is appended and submitted to the commit node network. The commit node network now begins the process of closing the block. A process we will detail in length later. For now though, after this closing process, the newly mined block has a block hash making it a valid addition to the chain, but it still lacks a commit hash. This new, valid block is broadcast out by the commit node to the full network which notifies clearing nodes to begin their work clearing the transactions, and for users to start submitting their plain-text details. 

A user can now confirm that their transaction has been immutably added to the chain. Once they validate the block, they are now free to publish their plain-text details associated with the hashed transaction. These sensitive details, such as the destination contract or address and amount, are sent to the commit node. The commit node verifies that the transaction hash matches the hashed plain-text details and that the associated transaction is still open as it belongs to an open block. Blocks are considered open if they are within the "clearing window". This is a time period denoted by a number of blocks that a user has to publish the details of their transactions. We use blocks as our fundamental time-keeping unit as it is impossible to establish the reliability of any clock or timestamp in a decentralized system. The unpredictability of the clock also makes timing-based attacks difficult to execute.

Once the plain-text details and transaction are validated by the commit node, they are broadcast to the clearing node network. Here the clearing node network does its own validation and then begins to clear the transaction. This involves executing any smart contracts or scripts, reading and updating the global state and databases, and validating that a user has sufficient funds. If the transaction validates, its status is set to 'Pre-Clear'. If the transaction fails, its status is updated accordingly with the associated failure mode e.g. "Failed - Insufficient Funds" or "Failed - Invalid Destination".

This newly cleared block is broadcast to the commit node network. The commit node quickly validates the block and evaluates the number of cleared transactions. A commit node always keeps in storage a copy of the MOST cleared block it received first. I.e. a commit node will only replace their block if a clearing node can submit a valid block with more cleared transactions than the block it has stored in memory. In the case that it has the same number cleared, it retains the copy it received first.

It is important that the commit node retain a copy of this cleared block as they are the only ones capable of settling the block through the closing process. When a commit node receives a newly mined block, that is its signal to close the block at the end of a clearing window. All transactions that are waiting for plain-text transaction details are failed and the block commit hash, which is the Merkle tree of the transactions appended with their statuses, is now written to the block header. This commit hash is used in conjunction with the solution hash of the newly mined block to generate its block header hash. This ties the chain together immutably and doesn't allow a user to disclose plain-text details at a later date in a "submarine attack".

The commit node now broadcasts out the newly formed chain. The network's responsibility is to now drive a consensus on the current state. All nodes default to the longest chain in the event of a conflict. If there is a conflict of similar length chains amongst the commit nodes, the mining nodes are responsible for resolving and driving consensus. They randomly sample either all or a sufficient and odd number of commit nodes for their most recent block. The mining nodes then adopt the majority winner and begin to mine on that chain. We utilize mining nodes as they are best incentivized to generate an honest consensus as they do not want to waste resources mining on top of a dishonest commit node's chain, which is likely to be rejected by the network.

At this point, the clearing nodes and mining nodes confirm the new block and begin the process of mining and clearing of the new blocks all over again.

### Ecosystem Fit

Miner extractable value's (MEV) economic harm to everyday users and its impact on the integrity and security of the DeFi ecosystem is becoming increasingly apparent. Tens to hundreds of millions of dollars are taken from unassuming users every month. There have been many attempts to solve these challenges through layer 2 solutions (Archer, Eden Network, Automata’s Conveyor, Mangata), however they don’t address the fundamental problem of a public mempool and potentially malicious miners. To expedite our solution to market, our project will make use of the framework provided by Substrate CORE. We envision the primary use case for our DLT to be for sensative transactions where revealing your transaction details before they are committed to the chain opens a user or institution to attack. Currently the primary extant use case is with DEXs, however we believe in the coming years this issue will only increase as more complex financial constructs are implemented through smart contracts.

## Team :busts_in_silhouette:

### Team members

* Team Lead: Adit Patel
* Team Member: Theresa Garcia 

### Contact

* **Contact Name:** Theresa Garcia
* **Contact Email:** theresa@stardustfunds.com
* **Website:** https://stardust.finance/

### Team's experience

Adit has a BSc in Applied Physics from Columbia University, during which he selected coursework with a heavy focus on building technical skills across the broad background of statistics, cryptography, computer programing and applied mathematics. After graduating he spent 5 years as a banking analyst for Capital One primarily focused on developing and launching consumer and institutional financial products. He then spent 3 years in corporate strategy for RedBubble, a billion-dollar tech startup located in Melbourne Australia before quitting to co-found Stardust Wealth. He is a full-stack developer who single-handedly built the codebase of Stardust Wealth’s native iOS app. He has experience coding in Swift, Java, JavaScript, SQL, Python, and Ruby, dev ops experience on AWS, and frameworks including React, React Native, XCode, Rails, and TensorFlow.

Theresa has a degree in Industrial Engineering and started her career working as a Safety Engineer at ExxonMobil, assisting in developing new safety protocols and writing proposals for new global safety and reporting standards. She then worked with the former co-founder of Cramster (which later sold to Chegg) in developing new business lines in online education and film distribution before leaving to start her own successful e-commerce business, building an international team to support sales globally. She's been invested in the crypto ecosystem since 2017 and is the other cofounder of Stardust Wealth, responsible for product growth, research and design.

Stardust Wealth iOS App: https://stardust.finance/app


### Team Code Repos
* https://github.com/adit313/ (primary developer)
* https://github.com/enteraether

### Previous Projects:
* https://youtu.be/Sa4dJ7k-11c
* https://youtu.be/9R4jsNgl0zE
* http://stardust.finance/app (link to the Stardust App)

### Team LinkedIn Profiles (if available)

* https://www.linkedin.com/in/the-theresa-garcia/
* https://www.linkedin.com/in/adit-patel/

## Development Status :open_book:

* Stardust White Paper: https://stardust.finance/whitepaper
* Proof of concept in Ruby: https://explorer.stardust.finance/
* Code for POC: https://github.com/adit313/NovelBlockchainRailsImplementation

In order to rapidly deploy a prototype to prove the technical feasibility of this architecture, we've built a proof-of-concept of our blockchain in Ruby on Rails. The fastest way to understand how transcactions work is to play with the block explorer to see how they move through the node network. The associated code for those node networks are located in the GitHub repository. This is a simplified implementation that processes p2p transactions with no support for smart contracts, but demonstrates the functionality of the network, and illustrates the communication and responsibilities of the nodes.

Academic publications relevant to the problem

* https://github.com/flashbots/pm <- Research Organization that tracks the impact of miner extractable value
* https://arxiv.org/pdf/1902.05164.pdf
* https://arxiv.org/pdf/2009.14021.pdf
* https://arxiv.org/pdf/1904.05234.pdf

MEV is a topic that has been covered at length by several well-respected authorities in the crypto community. In case you are not familiar with the issues, here are a few blog posts:

* https://research.paradigm.xyz/MEV
* https://www.coindesk.com/tech/2021/05/10/why-ethereums-miner-extractable-value-problem-is-way-worse-than-you-think/
* https://hackmd.io/@flashbots/MEV-1559

## Development Roadmap :nut_and_bolt:

### Overview

* **Total Estimated Duration:** 2 Months
* **Full-Time Equivalent (FTE):** 2 FTE
* **Total Costs:** 0.30 BTC

### Milestone 1 — Implement Mining Nodes

* **Estimated duration:** 2 month
* **FTE:**  2
* **Costs:** 0.30 BTC

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | GPLv3 |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a **video tutorial** that explains how a user can download and setup a Mining Node. |
| 0c. | Testing Guide | In order to ensure functionality, the Substrate based mining nodes will communicate and be tested with the current Ruby on Rails implementation. |
| 0e. | Article | While we have published materials specific to our implementation, we will further publish **articles** that not only explain the core functioning of the mining node and how it differs from extant implementations, but also our experience deploying and developing it with Substrate. These articles will be on the rather technical nature of compiling Swift code into WASM and then integrating it into the Substrate CORE platform. |
| 0f. | Why Mining Nodes? | The mining nodes are the closest to extant implementations and have the least complicated functionality. For our first milestone we aim to build a production binary with Substrate that users can download. While the other two node networks will not exist at this time, this mining node will be able to communicate with our other two node networks in our Rails implementation. |   
| **1a.** | Swift Program | We will write a custom Swift implementation of our Mining Nodes with Substrate compatible functions. |   
| **1b.** | WASM Compilation and Implementation into Substrate CORE | This code will be compiled into a WASM runtime which we will then integrate into Substrate Core. |   
| **1c.** | Full Substrate CORE Integration | Fully integrate the WASM runtime into Substrate CORE and ensure functionality and communication between our WASM and Substrate utilities. |   


## Future Plans

Based on the outcome of the mining node, we'll identify pain points and challenges and optimize for the development of the more complex commit and clearing nodes in a subsequent proposal.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Due to the complexity of our proposal, we had intially reached out to Substrate's Builders Program for technical assistance. In those conversations, they recommended we apply for a level 2 grant.


**Work you have already done:**
*   White Paper: https://stardust.finance/whitepaper
*   POC Node Explorer: https://explorer.stardust.finance/
