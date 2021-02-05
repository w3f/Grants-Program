# DotHacks: a privacy-preserving and fair Security Response Platform on a public blockchain

## Project Description
### Overview (Introduction)
Blockchain world has been suffering from vulnerabilities, e.g.,

1. in centralized exchange: MtGox hack (https://en.wikipedia.org/wiki/Mt._Gox),
2. in cryptography: double-spending in Bytecoin due to small subgroup attack (https://jonasnick.github.io/blog/2017/05/23/exploiting-low-order-generators-in-one-time-ring-signatures/),
3. in smart contracts: The DAO hack (https://en.wikipedia.org/wiki/The_DAO_(organization)).

Moreover, since 1) the market value involved is massive, 2) there is still lacking clearly defined or practical legal protections for cryptocurrency users, and 3) the techniques used in blockchains are still emerging and keeping evolving, which makes Blockchain security specialists become more desired, the security concerns of blockchain systems become significantly crucial.

However, there is no current Security Response Center (SRC) existing in the Polkadot ecosystem to mitigate the loss caused by blockchain vulnerabilities.
 
In this RFP, we propose DotHacks, a SRC platform built on a public blockchain, Polkadot in specific, to enable trustless SRC service. What make it different from conventional ones are: 1) we make use of Polkadot blockchain as the public ledger for persisting records; 2) we use consensus to govern the arbitrations; 3) and we use cryptography to preserve privacy and fairness; 4) we use tokenomics to incentivize the participants.
 
As Polkadot is a project aiming at providing a feasible solution to bridge all other public blockchain projects, we believe that, with its design goal and promising progress, Polkadot is becoming the center of the blockchain world. Thus DotHacks can serve as a comprehensive SRC platform for blockchain projects and achieve its best potential.

### Project Details
Conventional SRC and crowdsourced bug-bounty platforms (e.g., hackerone, bugcrowd) suffer from limitations including:

+ insufficient privacy protection for white-hats
+ insufficient privacy protection for vulnerability reports
+ centralized arbitration mechanism

These are also cases for some decentralized crowdsourced bug-bounty platforms (e.g., https://dvpnet.io/).
 
DotHacks addresses these issues in the following ways:

+ White-hats can choose to submit reports anonymously.
+ DotHacks splits each report into shards and encrypt each shard to mitigate sensitive data leakage. Though a report is sharded, its logic correctness and consistency can still be verified, see section #Sharded report verification for details.
+ DotHacks uses State Channel Network (a layer 2 solution). State channel network enhances report submission privacy by privacy-protected peer-to-peer communication, and the submission can be verified by smart contract once exiting the state channel network and submitted on chain. The submission may comes with a dispute, and DotHacks uses arbitration committee to address disputes.
+ DotHacks uses randomness for an arbitration committee election to improve fairness.
+ On-chain reports are encrypted and each of them comes with a time-lock puzzle. Full vulnerability details will only be disclosed and be public after a set period. Vendors can also choose to keep the full report private.

In specific, DotHacks works as follows:

**Fig.1 Bug-bounty program workflow** (from a Whitehat's perspective):
![](https://github.com/dothacks/dothacks.github.io/raw/main/assets/whitehat.png)

**Fig.2 Bug-bounty program workflow** (from a Vendor's perspective)
![](https://github.com/dothacks/dothacks.github.io/raw/main/assets/vendor.png)

**Fig.3 Bug-bounty program workflow** (from an Arbitrator's perspective)
![](https://github.com/dothacks/dothacks.github.io/raw/main/assets/arbitrator.png)

#### Sharded report verification
To verify a report while mitigating sensitive data leakage, DotHacks shards each report and encrypt them during submission. Common used stage conclusions among shards are extracted, to examine logic consistency and enable cross-shard verification.

![](https://github.com/dothacks/dothacks.github.io/raw/main/assets/sharding.png)

![](https://github.com/dothacks/dothacks.github.io/raw/main/assets/shard2.png)

Arbitration committee are elected by randomness, to ensure fairness. Neither the whitehats nor vendors can predict who are arbitrators and thus cannot bribe them. Arbitrators can neither collude with each other to learn the full report.

## Team & Team experience
We would like to keep our team information private.

## Development Roadmap
We split our milestones into 4 stages.

1. First we plan to implement a bug bounty platform, without dispute resolvings. That is, we consider all parties honest at this stage.
2. We then add layer 2 solution to address dispute resolvings, but with a fixed committee.
3. We add randomness into dispute resolving committee election.
4. Finally, we add decentralized governance for improving vulnerability assessment standards and administration regulations.

However, given the limited budget of an Open Grant Program, we choose to only focus on  the first stage at the moment, future stages are left as follow-ups.

### Development Roadmap (for stage 1)
+ Total Estimated Duration: 6 weeks
+ Full-time equivalent (FTE): 12
+ Costs: $10,000

#### Deliverables
+ Implementation of the runtime modules
    + Bounty management module. A basic user story will be:
        * A vendor can anounce a bug bounty program.
        * Whitehats can apply for it.
        * Whitehats submit reports.
        * The vendor approves the report and the whitehat gets rewarded.
    + Reward module. Vendors lock some assets associated with a bug bounty program, and whitehats can redeem if completing a bug bounty program.
    + Reputation module mainly manage vendors and Whitehats' reputation based on the collaboration remarks.
+ Implementation of frontends (DApp UX).
