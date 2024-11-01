# P2P State Channels

> This document will be part of the terms and conditions of your agreement and, therefore, needs to contain all the required information about the project. Don't remove any of the mandatory parts presented in bold letters or as headlines (except for the title)! Lines starting with a `>` (such as this one) should be removed. Please use markdown instead of HTML (e.g., `![](image.png)` instead of `<img>`).
>
> See the [Grants Program Process](https://github.com/w3f/Grants-Program/#pencil-process) on how to submit a proposal.

- **Team Name:** SIGMA 8 SOLUTIONS
- **Payment Details:**
  - **DOT**: 15ZzLCvcrZXDCddQnUGgzNUcMkSK4PugKdraQp8pFawoDWz1
  - **USDT (Asset Hub)**: 15ZzLCvcrZXDCddQnUGgzNUcMkSK4PugKdraQp8pFawoDWz1
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 3

> :exclamation: *The combination of your GitHub account submitting the application and the payment address above will be your unique identifier during the program. Please keep them safe.*

## Project Overview :page_facing_up:

The tech part (minimal feature set - MFS) of our previous DF proposal - https://docs.google.com/document/d/1DcDFScgeXijnXSGuaa30uOnYNtRm_9OnAsM97igrSwA/

# Overview

### Tagline:
Framework for creating client side peer-to-peer (p2p) state channels for arbitrary state machines with shared security inherited from a distributed ledger (blockchain). All the peer-to-peer networking is done between users’ clients.

### Brief description:
The main goal of the project is to create fully peer-to-peer applications (without any central servers) that are highly scalable, resilient and secure, but also provide the building blocks by solving common problems to enable others to do the same.

Peer-to-peer (p2p) state channels have many benefits—they’re highly scalable and decentralized due to their network topology and tendency to partition state within their group of interaction. They offer real-time communication that’s ‘free’ (no transaction fee) but do not act like a trusted party like blockchains do.

What we aim to achieve is combine the best of both worlds, the decentralized and scalable nature of full p2p systems, while also inheriting full security from a distributed ledger. 

Notice that society works in the exact same way. For most of our lives, we (peers) interact with other peers in small groups (partitions). We (peers) form agreements and commit to faithfully executing on them and in the case where those agreements fail, we go to a court system to dispute one another inorder to enforce those agreements. The courts have limited capacity and their intervention is slow and expensive, but they are trusted by all parties (that freely chose to be in that jurisdiction) to be impartial, objective and faithfully come to a verdict on the agreement/law (state machine).

### How does this relate to Polkadot
The value proposition for Polkadot is improving the user experience by providing a ‘free’ real-time execution environment which all parachains currently lack and expanding the market by onboarding new users and developers into the ecosystem.

# Project Details

This section will be used to expand on the technical solution and the architecture. 

The system is composed of a client side framework/SDK and on-chain smart contracts.

Tech stack:
On-chain: smart contracts (solidity)
Off-chain (p2p) - written in typescript, holepunch for p2p and discovery, ethereumjs for running the EVM on client, ethers for manipulating and signing evm data and everything else is built from scratch (typescript). The entire design is state machine and runtime independent (can support substrate) - it works with native tooling. 

### The main responsibilities of the client side framework are:
1) Networking - establishing direct peer-to-peer connections and discovery over various transports (currently Holepunch),
2) State machine replication - allowing connected peers to commit to state machines and allowing them to progress and replicate those state machines,
3) Agreement tracking - tracking agreements on the order of transactions and state, managing forks, checking and collecting signatures, finalizing state
4) Virtual (logical) clock - Having a local logical clock that’s synced to the DLT clock (timestamp) - allows peers to have a local perception of time that mimics the one of the DLT, but tolerates skewness to a degree. This is of course subjective and peers will never reach consensus on the clock nor with other peers nor with the DLT itself. This is very important and will be discussed further below,
5) Dispute handling - constructing fraud proofs when a peer deviates from the protocol,
6) Observing and notifying on state change - hooks that allow external systems to subscribe and get notified when state changes happen - analogous to on-chain events.

#

1) P2PManager
Manages all peer-to-peer connections - how they’re established, which transport is used, receiving and broadcasting messages (RPCs) to other peers.
The message is interpreted on the RPC level and passed through appropriate pipelines based on the type of RPC. In the case of transactions, they’re forwarded to the StateManager for further processing.


2) StateManger
The central component of the system. It’s responsible for maintaining the correct state. It receives both p2p messages (transactions) and emitted events that happened on-chain. 

Received transactions pass through a verification pipeline (check signatures, is the signer part of the state channel, is it a duplicate, check timestamp, does it apply to the current state…). If all the checks pass, the transaction is applied to the state machine by invoking the stateTransition function. If everything is executed successfully, the signedTransaction is passed to the AgreementManager. If something fails, a dispute is invoked on-chain (if a cryptographic proof can be created to prove fraud)

Received on-chain events - SetState is emitted when the DLT enforces a correct state of the state machine. This creates a fork (check Agreements and Forks) and sets the genesis state for the fork. This and everything else that’s enforced through the DLT is accepted as correct unconditionally, since the DLT is the single uncontested source of truth and every honest peer continues building on the latest fork. 

Timeout - 
	This is another responsibility of the StateManager. 
There are 3 objective time parameters set for each state machine during creation:
	
p2pTime -  the max amount of time a peer can take to decide, execute and broadcast their Tx to other peers,
agreementTime - accounts for reasonable network delay, execution time and skewness of clocks. All agreements on the Tx (state transition) should happen within this time,
chainFallbackTime - if p2p agreements fail within p2pTime + agreementTime, this is the last resort allowing peers to post on chain.


When a peer fails to produce and broadcast a transaction that will progress the state machine forward within p2pTime + agreementTime in comparison to the previous transaction timestamp (each peer does this calculation in comparison to their local logical clock (this is subjective - see Clock)) - other peers won’t sign the transactionConfirmation even if they receive the transaction later. The peer still has time to invoke their transaction, but is forced to post the transaction on-chain as calldata (lazy execution) within chainFallbackTime. If the peer fails to do so and does not have all N signatures after that time expires (in comparison to the DLT clock), any peer (usually the one(s) that didn’t sign the confirmation) can invoke a dispute to remove the peer from the state channel (see Dispute Logic). The peer that was removed can challenge this dispute by providing all N signatures (confirmations) on the transaction and if successful the removal is reverted and the peer who initiated the dispute is removed and is fully slashed (penalty for byzantine behavior). 

An honest peer can produce and broadcast a Tx that progresses the state machine forward within p2pTime + agreementTime, but another (byzantine) peer can refuse to sign the message confirmation and in such the issuing peer will never have all N signatures and will again be forced to post on-chain inorder to guarantee it won’t be removed from the state channel. In that case the peer will refuse to sign confirmations of transactions from other peers that failed to sign its transaction, forcing them to also post calldata on-chain. Like this, both peers are at an economic disadvantage, since posting on-chain invokes transaction fees, so the optimal move is to cooperate to save on transaction fees, knowing that failure to cooperate results in economic costs. However, the DLT will guarantee correct progression of the state machine even if only 1 peer is honest and all N-1 are byzantine. (see Agreements)
	
Clock
Every peer has a local subjective logical clock. The clock is synced with the DLT 
clock (timestamp) in order to provide a local perception of time that mimics the DLT
time. Peers will never reach consensus on their clocks nor amongst themselves nor     
with the DLT itself. The protocol is designed to tolerate skewness to a degree. Peers use their clock to decide subjectively, how they want to interact with the system and other peers -  are incoming transactions too far in the future, too far in the past or about in time and based on their subjective opinion they come to an agreement or abstain from signing p2p. They use this clock also to invoke Timeout. While the perception of time is subjective and is designed to tolerate skewness to a degree, once measured and recorded as a timestamp, that information is objective and comparable. While each peer will compare it to their local clock and try to form agreements, if such agreements fail p2p and the system falls back on-chain, the DLT clock will prevail as a single uncontested source of truth and its comparison of the tx timestamp to its clock will be final.

3) AgreementManager (Agreements)
The system does NOT implement a variation of a classical BFT (Byzantine Fault Tolerant) consensus algorithm due to lack of large economic security amongst peers in a partition and the strong design principle to allow everyone to connect freely with everyone. As such the system can’t guarantee that within a partition there will not be less than ⅓ byzantine actors as required by all classical BFT consensus algorithms. Since the DLT is used as a top level “supreme court”, we can design an optimistic consensus algorithm that tolerates N-1 byzantine actors - in other words we can design a system that’s Byzantine Fault Tolerant with at least 1 honest (non byzantine) actor by ultimately inheriting security from a DLT.

Before explaining optimistic consensus, it’s important to understand the structure of a Transaction in this system:

A transaction in this system references the exact state (previousStateHash) to which it is an input, and references the expected state post execution (stateHash). This resembles the logic behind UTXOs to a degree.

Under optimistic consensus we can’t force peers to collaborate, but it’s in their best interest to do so, since failure to collaborate at best invokes posting calldata on-chain and paying transaction fees and at worst results in a full slash when provable fraud can be detected. Collaboration includes signing (confirming) all valid transactions without delay (satisfying agreementTime) and producing and broadcasting a transaction when it’s the peers turn to progress the state machine forward before timeout (check Timeout).

Optimistic consensus is reached when all N signatures directly or indirectly (check Virtual Voting) reference the transaction (state). This finalizes the transaction (state). With at least 1 honest peer, an invalid state will never be finalized.

If for any reason a peer doesn’t collect all N signatures on their issued transaction after agreement time, the peer will post their transaction on-chain (see Timeout). The peer will also opt out of signing transaction confirmations from peers that didn’t sign its transaction, forcing them too to post on-chain and too being at an economic disadvantage. Peers can at any time request to exit the state channel directly on the DLT if they don’t want to interact with other peers within the channel (subjective reputation and web of trust can help the peer initially decide with whom they want to connect, but is not required by the core protocol).

Virtual Voting - Same concept as with blocks in a blockchain. Since blocks are cryptographically linked with past blocks through the parent hash, a block at block height K indirectly supports and thus votes for all previous K-1 blocks that precede it. In our case, a transaction issued is connected directly to the previous transaction through the previousStateHash and since this is recursive, it votes for all previous transactions that precede it. This is really practical, since a byzantine actor not wishing to sign confirmations of other peers will at some point have to produce a valid transaction or be removed through Timeout - producing a valid transaction indirectly confirms all previous transactions. This property is very useful especially with round robin leader election (block production / who writes next) and guarantees that at most the last N transactions are enough to finalize a state even if no one wants to directly cooperate peer-to-peer.

Forks - 
Forks ideally never happen and everyone cooperates fully p2p, without the need for the DLT ever to enforce a state, but in the case when the DLT has to step in, it creates a fork and sets the genesis state. The genesis state of a fork doesn’t require N signatures to be considered final since it’s enforced directly on the distributed ledger. Honest (non byzantine) peers always build on the latest fork. 

4) DisputeHandler - 
Whenever a peer detects deviation from the protocl, they initiate a dispute by going through the DisputeHandler, which creates a dispute on-chain asking the DLT to enforce a correct state. To initiate a dispute a peer provides the last known finalized transaction (state) + all the transactions till the latest one the peer signed (confirmed) (this is at most N transactions in total - see Virtual Voting). After initiating a dispute, the peer stops signing transactions for the given fork. Due to the chain not having all the data and ideally not having any, the disputes are not final and have a challenge period where they can be contested. If successfully challenged (by providing more data), the disputter is fully slashed, a correct state is enforced and the challenge window prolonged. All honest peers check the disputed data and without delay challenge it if possible, otherwise they continue building on the fork and let the challenge period expire. More details on Dispute Logic down below when we cover on-chain logic.
 
5) DLTEventListener -
Observes the DLT for relative events and passes them to the StateManager.
In V1 the blockchain interaction will be done through a provider, which the peers trust. In V2 we’ll explore options of making peers ultra light clients so they can access the DLT directly and increase resilience (the bootstrapping problem makes this slight optimization not worth considering in V1, since some node has to always be trusted to provide the data).

6) AStateMachine - 
Abstract state machine that defines the base class/contract of compatible state machines. While any state and state transition can be implemented and thus supporting arbitrary state machines, the system does require a minimal interface with some minimal properties.

7) StateObserver -
Observes the concrete state machine and allows for other systems to subscribe for updates when the state changes. Analogous to on-chain events.

The main responsibilities of on-chain smart contracts are: 
1) Agreement verification - Verifies that all participants agree on a given state,
2) Dispute resolution (shared security) - Enforcing a correct state of the state machine if peer-to-peer agreements fail,
3) Settlement - final settlement of any assets that entered into the state channel,
4) Data Availability - Guaranteeing data availability for both state and transaction calldata if peer-to-peer agreements fail,
5) Liveness guarantees - In the case that the state machine can’t progress peer-to-peer, the DLT can progress it and remove any participants who failed to progress it within timeout,
6) Objective clock - provides a single global clock (timestamp) that’s uncontested and accepted as correct/true unconditionally. Peers sync their local logical clock to the DLT clock to mimic the DLT perception of time,

Fraud proofs - fraud proofs in our system vastly differ from the ones of Optimistic Rollups such as Arbitrum/Optimism. The fraud proofs in their system are designed to work for servers that are handling transactions on behalf of other users and as such they have to post all the calldata on-chain for everyone to see and verify correctness or detect fraud. This is more expensive and less scalable, since more of the on-chain limited resources are being used. There are also no liveness guarantees, if the sequencer stops producing blocks.

In our system, all the transactions being executed within the channel belong solely to the participants of the channel and as such they don't need to guarantee data availability for external parties. Data Availability comes into play only when peers fail to cooperate and as such its main goal is to guarantee data availability to other peers and provide a way to progress the state without cooperation or remove peers through Timeout.

ADisputeManager (Dispute Logic):
ADisputeManager is an abstract contract that implements all the dispute logic and provides an interface that the StateChannelManager contract must implement.

When a peer detects fraud locally, they initiate a dispute on-chain. In order to do so, they have to provide a proof of the last finalized state and all the transactions up to the last one the peer confirmed (this all can be done with at most the last N transactions and ideally with just 1 or 2). The peer also has to provide a fraud proof.

StateChannelManager:
There can exist many state channels in parallel (open channels) and as such this contract manages all state channels - opening/closing the channel, keeping track of state (bytes) without interpreting it, allowing multiple state machines to be linked and invoking the correct one when needed, allowing peers to post their Tx as calldata and guaranteeing Data Availability to all.

AStateMachine:
Abstract interface of a concrete state machine that only bears the state machine logic. Derived contracts execute p2p and when p2p agreements fail the same logic is used to enforce a correct state on-chan.

### Ecosystem Fit

Even though it will be built on top of the EVM, it's needed more in Polkadot than in Ethereum, since Ethereum rollups offer 'instant finality' to their users (they don't wait for L1 finality). It's compatible and built on top of native tooling. It's designed to be state machine and runtime agnostic, meaning that substrate can be supported in the future, when we have more resources to build the nesessary tooling to support it. For now the focus is on the user experience, that all parachains currently lack by having a real-time execution environmet without transaction fees. 

Where and how does your project fit into the ecosystem?
- On the core tech it fits as a public good / infrastructure by allowing everyone to build secure real-time p2p dApps. On the concrete state machines that we do/build, those are clearly dApps and provide a direct benefit to the end user. On the governance and upgrade side, Polkadot is the best fit by a long shot considering how it handles upgrades in contrast to others.

Who is your target audience (parachain/dapp/wallet/UI developers, designers, your own user base, some dapp's users, yourself)?
- The end user that uses the dApps is the target audience. That’s where the business model is.

What need(s) does your project meet?
- Web2 user experience through real time communication that’s ‘free’, with web3 security guarantees. 

Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?
- Not that we’re aware of, not only in Polkadot / Kusama, but web3 in general since the state channels that are adopted are mostly payment channels and those are servers and in general all the scaling in web3 has been done on the ‘server’ side, while we focus fully on the client side.

## Team :busts_in_silhouette:

> Please note that the data provided in this section is for administrative and informational purposes only. All beneficiaries of a grant must also be listed in the KYC/KYB process during the application phase. See our [FAQ](https://grants.web3.foundation/docs/faq#what-is-kyckyb-and-why-do-i-have-to-provide-this-data) for more info.

# Team members

### Partially grant supported:

Founder - Luka Stanisic
https://github.com/lukastanisic99
https://www.linkedin.com/in/luka-stanisic-712907251/

Engineer - Dragan Basta
https://github.com/thepeaknick
https://www.linkedin.com/in/dragan-basta/

Designer - Aleksa Krstic
https://www.linkedin.com/in/aleksa-krstic-124880112/

Business development - Aleksa Gradinski
https://www.linkedin.com/in/aleksa-gradinski/

Business development - Gerard Murphy
https://www.linkedin.com/in/gerard-murphy-8939b520/

### Advisors / Not grant supported:

Cryptography - Jeffrey Burdges
https://github.com/burdges
https://www.linkedin.com/in/jeffreyburdges/

Economics & legal - Kasper Mai Jørgensen
https://www.linkedin.com/in/kmjoergensen/

Engineering - Andrew Burger
https://github.com/coax1d
https://www.linkedin.com/in/andrew-b-8a628870


# Contact

- **Contact Name:** Luka Stanisic
- **Contact Email:** lukastanisic2@gmail.com

### Legal Structure

- **Registered Address:** Beogradska 55, 11194 Rusanj, Serbia
- **Registered Legal Entity:** SIGMA 8 SOLUTIONS (LLC)

# Team's experience

Luka - Background in engineering, protocol level of different DLTs (DAGs and blockchains), distributed systems at Microsoft Azure, Polkadot Blockchain Academy alumni with distinction.

Dragan - Software engineer with 10+ years of experience.

Aleksa Krstic - Senior UX/UI designer at another major DLT.

Aleksa Gradinski - In crypto since 2017, CEO of Agroblock ($1M annual profit), helped in negotiations and expansion of leading web3 companies in Serbia.

Gerard - Engineering degree holder with over a decade in high-end business development, overseeing multiple offices in the London property market. 15 years of professional poker playing and game theory expertise, bringing a strategic and analytical approach to business growth and a specific understanding of peer-to-peer commercial opportunities.

Jeff - Applied cryptographer and mathematician at the Web3 Foundation. One of the lead protocol designers behind Polkadot and Kusama.

Kasper - ex CFO Web3 Foundation and co-founder Polimec.

Andrew - Researcher/Engineer at the Web3 Foundation

## Development Status :open_book:

In progress.

## Development Roadmap :nut_and_bolt:

Provide an SDK with a minimal set of features for alpha testing as soon as possible.

# Overview

- **Total Estimated Duration:** 3 months
- **Full-Time Equivalent (FTE):** Currently 1 person 24/7 and many part time with the team target going forward being 7 FTE
- **Total Costs:** $100000 - this covers the scope of this implementation
- **DOT %:** 50% (we're open to taking 100% in DOT, with 50% being vested over 2 years)

# Milestone 1 and budget — Minimal feature set (MFS) - Blockchain components
- **Estimated duration:** 1.5 month
- **Costs:** 50000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | MIT |
| **0b.** | Documentation | We'll provide examples and documentation on how to use the system. We'll also provide a video tutorial. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile that can be used to test all the functionality delivered with this milestone. |
| 1. | Channel Opening | All the logic required to open channels. Commitment to arbitrary state machine logic (bytecode) as defined in the document above. Performs all composable operations on the global state as required by the user specific state machine (depositing assets, interacting with other contracts). Atomic success or failure. |
| 2. | Cryptography | Cryptographic primitives to support threshold signature verification. Algorithm: ECDSA as used in Ethereum. Working with vanila EVM opcodes (no precompiles). Simple treshold algorithm. Base algorithm uses a highly audited library (openzeppelin).  |
| 3. | Liveness | Liveness logic to progress the state channel even when peer-to-peer agreements fail. Part of the dispute resolution as defined in the document above. Posting calldata, invoking timeout logic and challenge when needed. Described in great detail above in timeout logic and optimistic consensus. |

# Milestone 2 and budget — Minimal feature set (MFS) - Client side components (sdk/framework)
- **Estimated duration:** 1.5 month
- **Costs:** 50000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | MIT |
| **0b.** | Documentation | We'll provide examples and documentation on how to use the system. We'll also provide a video tutorial. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an **article** that explains what was done as part of the grant |
| 1. | Networking and Discovery | Establishing p2p connections and discovery over holepunch. Using a permissionless DHT (distributed hash table) for peers to discover one another and using the holepunch algorithm to establish a direct peer-to-peer connection. |
| 2. | P2P State Machine | Running native smart contracts fully p2p. |
| 3. | Agreement Tracking | Tracking agreement on the state machine's state. Described in great detail above under agreement tracking |
| 4. | Dispute Handling | Invoking liveness logic when p2p state progression fails. Described in details above under disputes and timeout. |
| 5. | Virtual Clock | Using the DLT clock as the single source of truth in regards to time. Described in detail above under virtual clock. |
| 6. | Observing & Notifying | Hooks that allow external systems to subscribe and get notified when state changes happen. Described in detail above under observing and notifying on state change. |

## Future Plans

Everything we build, we build with resiliency, decentralization and scalability in mind. We never want to introduce a centralized server in our design or run any infrastructure. This offers a clear benefit to our users, but also to us, since we don’t have to maintain servers and our operational costs converge to 0 overtime. Our only long term costs should be development of new state machines and improving existing ones. We plan on picking and developing state machines that provide real utility, without any ponzi (unsustainable) economics. We want them to be useful and a better alternative to existing solutions today. We believe the systems we create can offer the good user experience of web2 (centralized) systems, with all of the web3 (decentralized) security and permissionless guarantees.   

While the core infrastructure will always remain free as a public good and accessible to everyone, the concrete state machines will have a business model that’s sustainable. 



## Additional Information :heavy_plus_sign:

** Continuation of our DF proposal - Web3 Foundation
