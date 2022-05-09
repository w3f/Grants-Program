# W3F Grant Proposal

> This document will be part of the terms and conditions of your agreement and therefore needs to contain all the required information about the project. Don't remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with a `>` (such as this one) can be removed.
>
> See the [Grants Program Process](https://github.com/w3f/Grants-Program/#pencil-process) on how to submit a proposal.

- **Project Name:** Tao: Asynchronous Payment Channels
- **Team Name:** TAOCODAO LLC
- **Payment Address:** bc1qseztg063z7p6kyje4eeqapy5gqkdel4248gsgf BTC, Ethereum (USDT/DAI)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

> ⚠️ *The combination of your GitHub account submitting the application and the payment address above will be your unique identifier during the program. Please keep them safe.*

## Project Overview :page_facing_up

### Overview

Tao is designed to overcome blockchain technology's ultimate challenges: scalability and privacy. The public blockchain, such as Polkadot, has the limited transaction throughput associated with the underlying consensus protocol, which demands that every system participant verifies and stores a replica of the entire history of transactions. Also, blockchain applications require low overhead to be useable, requiring their transaction costs remain low. A bottleneck for this has been on-chain payments, which incur a fee for every transaction, especially when we need many micro-transactions to be sent. Off-chain solutions seem promising since they only use the blockchain as a fail-safe mechanism and move the transaction load offline, where the bottleneck is network speed. Any two parties that interact can set up a joint account on the blockchain, a "channel" through which the two parties can transact off-chain, sending money back and forth. Two parties rely on the blockchain as a fail-safe mechanism in disputes. Current proposals, however, require synchrony assumptions to preserve the channel safety, leaking to an adversary the exact amount of time needed to control the network for a successful attack.

Therefore, we introduce "Tao," an innovative payment channel solution that remains secure under network asynchrony and concurrently provides correct incentives. The core idea is to incorporate the conflict resolution process within the channel by introducing a rational committee of external parties. Hence, if a party wants to close a channel unilaterally, it can only get the committee's approval for the last valid state. Furthermore, to provide sub-second latency, It uses consistent broadcasts to announce updates and close the channel. This lightweight abstraction is powerful enough to preserve safety and liveness to any rational parties.

The system will address three challenges:

#### How to achieve the proactive security check without using a single trusted third party to approve every transaction

The system will employ a group of validators. If there is a dispute, they will make sure the correct state is the only one available for submission on-chain, regardless of its time to make this final state visible.

#### How to reduce the cost

The system will use a lightweight, consistent broadcast protocol to preserve safety and liveness.

#### How to address incentives

We employ both rewards and punishment to design the appropriate incentives such that the honest and rational behavior of Validators aligns. At the same time, no synchrony assumptions are required; the sentence of misbehaving Wardens is not conditional on timing assumptions.

Tao is a plugin-based system to provide low cost micropayment service to the  DAPPs running on the Polkadot network. A plugin is developed using web3.js that allows DAPPs to interact with a Moonbeam node through Ethereum-style JSON RPC invocations. By running the smart contracts deployed on the Moonbeam nodes, an off-chain payment channel can be open between the buyer and seller. Thus Dapps can provide a "pay as it goes" service.

## Project Details

### Architecture Overview

![image] <https://docs.google.com/document/d/1Ta4Zim2uT3sAUIjpVQ_Ie5nhf8pzyoR74ih7vv63DkM/edit?usp=sharing>

1. The Validators commit their identities on the blockchain during the funding transaction of the channel open.
2. Both channel parties agree on a committee of Validators before opening the channel.
3. The channel can only be closed by a transaction published on the blockchain and signed by both parties or one of the parties and a threshold (t) of honest Validators. Thus committee acts as power of attorney for the parties of the channel.
4. Tao employs correct incentives for the t rational Validators to follow the protocol hence it can withstand t = 2f + 1 rational and f Byzantine Validators. Consensus is not necessary for updating transactions, as we only provide guarantees to rational parties (if both parties misbehave, one of them might lose its funds).
When a new update state occurs in the channel, the parties run a consistent broadcast protocol (cost of O(n)) with the committee :
    a)  a party announces to each Validator that a state update has occurred.
    b)  This announcement is a monotonically increasing sequence number to guarantee that the new state is the freshest state, signed by both channel parties to signal that they agree.
If the consistent broadcast protocol succeeds (t Validators acknowledge reception), this can prove to both parties that the state update is safe.
5. Both parties proceed to the execution of the off-chain state.

At the end of the life cycle of a channel, a dispute might occur, leading to the unilateral closing of the channel. The Validator will reply to the party that it can only close at the state represented by the last sequence number. Define a successful closing at the maximum of all proposed states, guaranteeing safety. The closing process is safe because the transactions are already totally ordered and agreed to by the parties of the channel; thus, the committee acts as a shared memory of the last sequence number.

### BACKGROUND AND PRELIMINARIES

#### Blockchain Scalability & Layer 2

One of the major problems of blockchain protocols is the limited transaction throughput associated with the underlying consensus mechanism, which demands that every participant of the system verifies and stores a replica of the entire history of transactions to guarantee safety and liveness of the transaction ledger. However, this requirement leads to limited block size and block creation time for blockchain systems. Furthermore, if we increase size or decrease time, we implicitly enforce participants to verify and store more data, which leads to centralization and additional advantages for participants who invest in more infrastructure. Thus, blockchain systems that use the Nakamoto or similar consensus mechanisms face a scalability problem.

Proposed solutions can be categorized into two groups:

**Onchain solutions** that attempt to create faster blockchain protocols typically require stronger trust assumptions, and they do not apply to existing blockchain systems (without a hard fork)

**Off-chain solutions** that use the blockchain only as a fail-safe mechanism move the transaction load offline, where the bottleneck is the network speed. They are built on top of the consensus layer of the blockchain and operate independently.

Essentially, off-chain solutions allow two parties to create a “channel” on the blockchain through which they can transact fast and secure; this solution is known as “Payment channels”. It allows transactions between two parties to be executed instantly off-chain while maintaining the guarantees of the blockchain. Essentially, the underlying blockchain acts as a “judge” in case of fraud.

#### Various payment channels solution and limitations

The various proposals differ in the way they handle disputes, i.e., the case where one of the parties misbehaves and attempts to close the channel with a transaction that is not the latest update transaction, thus violating the safety property.

Lightning channels penalize the misbehaving party by assigning the money of the channel to the counterparty in case of fraud. To achieve this, each party releases a secret to the counterparty every time an update transaction is signed. That secret enables the counterparty to claim the money of the channel in case the party publishes the previous update transaction (breach remedy). However, this transaction is valid only for a window of time since the party should eventually be able to spend its money from the channel in case of no fraud. Therefore, this dispute period is enforced with a (relative) timelock.

On the other hand, Duplex channels guarantee that the latest update transaction will become valid before any previous update transaction, again utilizing timelocks. In both cases, the liveness of the underlying blockchain and timelocks are crucial to the safety of the payment channel solution. Additionally, both solutions require online participants that frequently monitor the blockchain to ensure safety.

#### Consistent Broadcast

Consistent broadcast is a distributed protocol run by a node that wants to reliably send a message to a set of peers. It is called consistent because it guarantees that if a correct peer delivers a message m with sequence number s and another valid peer delivers message m’ with sequence number s, then m = m’. Thus, the sender will be correctly identified. In other words, the protocol maintains consistency among the delivered messages with the same sender and sequence numbers but makes no provisions that any parties deliver the messages. Our system only cares about the consistency of sequence numbers, as any channel party can be the sender of a message m even after m is correctly broadcast. We allow this to remove the need for parties to share the proof that the transaction is committed, as there is no incentive to do so.

### PROTOCOL OVERVIEW

#### System Model

We make the usual cryptographic assumptions: the participants are computationally bounded and cryptographically secure communication channels, hash functions, signatures, and encryption schemes exist. In addition, we assume the underlying blockchain maintains a distributed ledger that has the properties of persistence and liveness. We also assume that any message sent by an honest party will be delivered to any other honest party within a polynomial number of rounds. We do not make any additional assumptions regarding known bounds for message delivery). Furthermore, we do not require a “perfect” blockchain system since our payment channel can tolerate temporary liveness attacks. Specifically, if an adversary temporarily violates the liveness property of the underlying blockchain, this may violate the liveness property of channels but will not affect the safety.

#### Threat Model

We initially assume that at least one party in the channel is honest to simplify the security analysis. However, later, we show that the security analysis holds as long as the “richest” party of the channel is rational and intentionally deviates from the protocol if it can increase its profit (utility function). Regarding the committee, we assume that there are at most f out of n = 3f + 1 Byzantine Validator and we define a threshold t = 2f + 1 to achieve the liveness and safety properties. The non-byzantine part of the committee is assumed rational; we first prove the protocol goals for t honest validators, and subsequently align the rational behavior to this through incentives.

#### Reward Allocation & Collateral

To avoid bribing attacks, we enforce the Validator to lock collateral in the channel. The total amount of collateral is proportional to the value of the channel, meaning that if the committee size is large, then the collateral per Validator is small. Additionally, the committee is incentivized to actively participate in the channel with a small reward that each Warden gets when they acknowledge a state update of the channel. This reward is given with a unidirectional channel, which does not suffer from the problems the system solves. Moreover, the Validators that participate in the closing state of the channel get an additional reward; hence the Validators are incentivized to assist a party when closing in collaboration with the committee is necessary.

#### Audit Function Overview

The audit function is designed to enable payment channels in a permissioned, regulated setting, for example, a centrally-banked cryptocurrency. In such a setting, an auditor will check all the transactions inside a channel as these transactions might be taxable or illegal. In this setting, we assume that the auditor can punish the parties and the committee externally of the system; hence our goal is to enhance transparency even if misbehavior is detected retroactively.
We ensure that
    (a) nothing happens without the committee's approval and
    (b) a sufficient audit trail is left on the chain to stop regulators from misbehaving.
We resolve the first issue by disabling the parties' ability to close the channel without the committee's participation. For the second challenge, the parties generate a hash chain of (blinded) states and sequence numbers, and Validators always remember the head of the hash chain together with the last sequence number. Finally, to prevent the auditor from misbehaving, we force the auditor to post a "lawful access request" on-chain to convince the channel parties to initiate the channel's closing for audit purposes and send the state history to the auditor.

#### Protocol Goals

To define the goals, we first need to define the necessary properties of channel construction. Intuitively, a channel should ensure similar properties with a blockchain system, i.e., a party cannot cheat another party out of its funds, and any party has the prerogative to eventually spend its funds at any point in time.

When applied to channels, the first property means that no party can cheat the channel funds of the counterparty and is encapsulated by **Safety**. The second property for a channel solution is captured by **Liveness**; it translates to any party having the preference to close the channel at any point in time eventually. We say that a channel is completed when the locked funds of the channel are spent on chain, while a channel update refers to the off-chain change of the channel’s state.

In addition, we define **Privacy** which is not guaranteed in many popular blockchains but constitutes an essential practical concern for any functional monetary (cryptocurrency) system. Furthermore, we define another optional property, **Auditability**, which allows authorized external parties to audit the states of the channel, thus making the channel construction suitable for use on a regulated currency.
First, we define some characterizations of the state of the channel, namely, validity and commitment. Later, we define the properties for the channel construction. Each state of the channel has a discrete sequence number that reflects the order of the state. We assume the initial state of the channel has sequence number 1, and every new state has a sequence number one higher than the previous state agreed by both parties. We denote by si the state with sequence number i.

**Definition 1**. A state of the channel, si  is valid if the following hold:
    *Both parties of the channel have signed the state si.
    *The state si is the freshest state, i.e., no subsequent statesi+1 is valid.
    *The committee has not invalidated the state. The committee can invalidate the state si if the channel closes in the state si-1

**Definition 2**. A state of the channel is committed if it was signed by at least 2f + 1 Validators or is valid and part of a block in the persistent part of the blockchain.

**Definition 3 (Safety)**. A Tao payment channel will only close in the freshest committed state.

**Definition 4 (Liveness)**. Any valid operation (update, close) on the state of the channel will eventually be committed (or invalidated).

**Definition 5 (Privacy)**. No unauthorized  external (to the channel) party learns about the state of the channel (e.g., the current distribution of funds between the parties of a payment channel) unless at least one of the parties initiate the closing of the channel.

**Definition 6 (Auditability)**. All committed states of the channel are verifiable by an authorized third party

### Design Algorithm

The payment channel consists of three phases: Open, Update, and Close. The smart contract has two functions, Open and Close, that receive the inputs of the protocols and verify that they adhere to the abstractly defined protocols specified below.

![image] <https://docs.google.com/document/d/1Ta4Zim2uT3sAUIjpVQ_Ie5nhf8pzyoR74ih7vv63DkM/edit?usp=sharing>

#### Phase I Open

![image] <https://docs.google.com/document/d/1oIx6F1qgJw-TejSLeJY37cLJ0vJUx28K1RGRgttw7Tc/edit?usp=sharing>

**Open** is the opening of a channel between two parties with three additional parameters:  the hashes of the public keys of the Validators of the channel, denoted by V1; V2 ,....,  Vn; the threshold t, and a closing fee F. The closing fee will be awarded to the responsive Validators in the last phase, Close, if and only if the channel's closing is done in collaboration with the committee. In this case, the first t Validators that assisted in closing the channel will be rewarded with the amount F=t. In addition, each Validator locks collateral in the BRICK smart contract, which will be claimed by the parties of the channel during phase Close if a Validator misbehaves (e.g., receives a bribe).

#### Phase II: Update and Consistent Broadcast

![image] <https://docs.google.com/document/d/1fpYEbLjUGvUZseF2kLcyjqVN2Fdt1yyUZ3A8RUiDSHo/edit?usp=sharing>

 Both algorithms are executed consecutively every time an update occurs when the state of the channel changes. During Update, the channel parties agree on a new state and create an announcement to the committee using Consistent Broadcast. To agree on a new state, both parties sign the hash of the new state. On the other hand, the announcement is the new sequence number signed by both parties of the channel. Furthermore, if a party wants to close the channel unilaterally, the Validators can provide a signature on the stored announcement σWi(M; close).

In Protocol 3, each party sends the announcement for every state update to all Validators, including a small update fee for watching the channel. Then, each Validator replies to every party that sent the announcement by signing the announcement. The Validator’s signature can be used later to penalize the Validator .(a party can claim the Validator’s collateral) in case the Validator colludes with a party and signs a previous state to close the channel.

#### Phase III: Close

![image] <https://docs.google.com/document/d/1NUxjesEalelTIG4eSDIf46t4BU6rs2G1QBbN_x8LImg/edit?usp=sharing>

Both parties collectively sign the freshest state (closing transaction) and publish it on-chain. However, in case a channel party is not responding to new state updates or closing requests, the counterparty can unilaterally close the channel in collaboration with the committee of the channel

### Incentivizing Honest Behavior

The system works without the fees if we assume one honest party and t honest Validators. However, our goal is to have no honest assumptions and instead align rational behavior to honest through incentives. There are three incentive mechanisms :

#### 1) Update Fee (r)

The parties establish a one-way channel with each Validator where they send a small payment every time they want a signature for a state update. Note that the update fee is awarded to the Validators at step 1 of Protocol 3.

#### 2) Closing Fee (F)

During phase Open (Protocol 1), the parties lock a closing fee F in the channel, which is split only among the first t Validators that participate in Protocol 5. If the channel closes optimistically (Protocol 4), the closing fee returns to the parties.

#### 3) Validator Collateral

During phase Open, each Validator locks collateral at least equal to the amount locked in the channel v divided by f. The collateral is either returned to the Validator at the closing of the channel or claimed by a channel party that provides a proof-of-fraud. A proof-of-fraud consists of two conflicting messages signed by the same Validator:
    (a) a signature on an announcement on a state update of the channel, 
    (b) a signature on an announcement for closing on a previous state of the Channel
In case, a party submits the closing announcements and at most f proofs-of-fraud, to close the channel we execute a second closing process excluding the Validators that committed fraud. Then, the channel closes in the state with the maximum sequence number of the announcements submitted by a total of t non-excluded Validators. 

### Security Analysis

#### Security Analysis under one Honest Participant and t Honest Validators

**The system achieves safety under asynchrony, assuming one byzantine party and f byzantine Validators.**

**Proof:** Both parties agree on closing the channel in a specific state in the Optimistic Channel Close. As long as this valid state is published in a block in the persistent part of the blockchain, it is considered to be committed. Thus, safety is guaranteed.
In the Pessimistic Channel Close case, a party has decided to close the channel unilaterally in collaboration with the committee. The smart contract verifies that the state is valid, i.e., the signatures of both parties are present, and the sequence number of that state is the maximum from the submitted announcements. Given the validity of the closing state, it is enough to show that the channel cannot close in a state with a sequence number smaller than the one in the freshest committed state. This holds because even if the channel closes in a valid but not yet committed state with a sequence number larger than the freshest committed state, this state will eventually become the freshest committed state.

We note that safety is guaranteed even if both parties crash. This holds because a state update requires unanimous agreement between the channel parties, i.e., both parties sign the hash of the new state.

**The system achieves liveness under asynchrony, assuming one byzantine party and f byzantine Validators.**

**Proof:** We will show that every possible valid operation is either committed or invalidated. There are two distinct operations: close and update. We say that operation close applies in a state s if this state was published on-chain either in collaboration of both parties or unilaterally by a channel party as the closing state. If the operation is close and not committed, either the parties did not agree on this operation (Optimistic Close), or verification of the smart contract failed (Pessimistic Close). In both cases, the operation is not valid.

Suppose now the operation is close and never invalidated. Then, if it is an optimistic close, all the channel parties have signed the closing state since it is valid. Since at least one party is honest, the transaction will be broadcast to the blockchain. Assuming the blockchain has liveness, the state will be eventually included in a block in the persistent part of the blockchain and thus will be eventually committed. On the other hand, if it is a pessimistic close and not invalidated, the smart contact verifications were successful; therefore, the state was committed.

Suppose the operation is a valid update and it was never committed. Since the operation is valid and at least one party of the channel is honest, the Validators eventually received the state update (Consistent Broadcast). However, the new state was never committed; therefore, at least f + 1 Validators did not sign the update state. We assumed at most f Byzantine Validators; hence at least one honest Warden did not sign the valid update state. An honest Validator does specific verifications, and if the verifications hold, the Warden signs the new state. Thus, one of the verifications failed for the honest Validator that did not sign. If the first verification fails, then a signature from the channel parties is missing; thus, the state is not valid.

The second verification concerns the sequence number and cannot fail, assuming at least one honest channel party. Thus, the Validator has previously published a closing announcement on-chain and ignores the state update. In this case, either.
    (a) the closing state of the channel is the new state - submitted by another Warden that received the update before the closing request
    (b) the closing state had a smaller sequence number from the new state.
In the first case (a), the new state is committed eventually (on-chain), while in the second case (b), the new state is invalidated as the channel closed in a previous state.

Suppose the operation is a valid update for the last case and it was never invalidated. We will show the state update was eventually committed. Suppose the negation of the argument towards contradiction. We want to prove that an updated state that is not committed is either not valid or invalidated. The reasoning of the proof is similar to the previous case.

Lastly, the system achieves privacy even against byzantine Validators since they only receive the sequence number of each state update in a channel. Therefore, as long as parties do not intentionally reveal any information to anyone external, privacy is maintained. However, we note that in a network with multiple channels, each channel needs to maintain a unique id that will be included in the announcement to avoid replay attacks.

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

Our team has extensive expertise on multiple levels, from software development to system analysis. With knowledge and skills, we can tackle the challenges and develop solutions in the blockchain technology. Moreover, the natural ability of some of the team members to navigate and predict future technological trends combined with the technical experience and project management skills of other members translates into a clear roadmap.

### Team Code Repos

- [https://github.com/taocodao] (https;//github.com)

### Team LinkedIn Profiles (if available)

- <https://www.linkedin.com/in/eric-huang-85600513/>>
- <https://www.linkedin.com/company/taocodao>>

## EcoSystem Fit

Tao payment channel is designed to provide scalable, low-cost, secure micro-payment service to the Polkadot/MoonBeam ecosystem. As a layer2 offline solution, Tao is built on top of the blockchain's consensus layer and operates independently. Therefore, it only uses the blockchain as a fail-safe mechanism and moves the transaction load offline. Furthermore, it supports cryptocurrency and Fiat Currency since the channel construction is also suitable for regulated environments.

Similar Projects:

- <https://github.com/perun-network/perun-polkadot-pallet>

- <https://github.com/perun-network/perun-polkadot-demo>

What makes us different is:

As a part of web3/MoonBeam Community and Ecosystem

- The first payment channel that remains secure under the network Asynchrony and concurrently provides correct incentives.

- The first incentive-compatible off-chain construction that operates securely with offline channel participants under full asynchrony with subsecond latency

- Built on top of the MoonBeam network, the DAPP that runs on the MoonBeam can directly use it by embedding the payment channel inside their DAPP code.

## Development Status :open_book:

### Link to Document 

Below is the link to an illustration of the detailed process. 

-<https://docs.google.com/document/d/15pOrIl6cI2gj2cJWrOHOFEd-m0x49ZjrHbXXnhZfYGw/edit?usp=sharing>  


### Link to source Code

- <https://github.com/taocodao/moonbeam>

This the Tao Framework nodes implementation , we have started with taking the moonBeam development node as the template, and use it as the smart contract engine

- <https://docs.google.com/document/d/1uJDEuZDMij0Pu63XEMM-PRSYU_opuQsRBjJJBLWhiCA/edit?usp=sharing>

This is the smart contract experimental implementation for open, update, and close channels. The final implementation will be in ink!. 


### Link to source Code

- <https://github.com/taocodao/moonbeam> This the Tao Framework nodes implementation , we have started with taking the substrate development node as the template, and use it as the smart contract engine. 

## Development Roadmap :nut_and_bolt

### Overview

- **Total Estimated Duration:**30 working days
- **Full-Time Equivalent (FTE):**  2 FTE)
- **Total Costs:** $38,760 USD

### Milestone 1 Implement core functionality

- **Estimated duration:** 30 working days
- **FTE:**  2
- **Costs:** $38,760 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License 2d| we will apply for the Apache 2.0 license  |
| 0b. | Documentation 1d| We will provide both inline documentation of the code and a basic tutorial that explains how a developer can create nodes and run the nodes in the test network |
| 0c. | Testing Guide 1d | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Article 1d | We will publish an article/workshop that explains our advertising workflow and technical details.|
| 1a. | MoonBean Dev Node 1d|Set up the MoonBeam Dev node as the Development Test Environment|
| 1b. | Payment channel phase I 2d| Develop the smart contracts in ink! for Channel Open, then deploy them into the Substrate Node. |
| 1c. | Payment channel phase II 2d| Develop the smart contracts in ink! for Channel Update, then deploy them into the Substrate Node. |
| 1d. | Payment channel phase III 2d| Develop the smart contracts in ink! for Channel close, then deploy them into the Substrate Node. |
| 2a. | Consistent Broadcast 5d | We will implement the consistent Braoadcastimg communication protocol on smart contract in ink!  |
| 2b. | Substrate Private Network 2d | We will create a substrate private network base on the consistent broadcasting communication protocol |
| 3a. | Validator node  2d |  Build the validator nodes base on moonbeam dev nodes.|
|3b.| Incentive Mechanisms |Develop the Fee mechanism, including  Update Fee, Closing Fee, Validator collateral.|





## Future Plans

We will develop a payment channel-based HEX(hybrid Exchange), which extends existing solutions by adding a new payment channel layer to benefit frequent traders and alleviate the pending transaction congestion.
