# Decentralized Security Marketplace

* **Status:** Open
* **Proposer:** [Matteo Casonato](https://github.com/0xCaso), [Bhargav Batt](https://github.com/bhargavbh)

## Project Description :page_facing_up: 

According to the [*Immunefi's 2022 annual report*](https://assets.ctfassets.net/t3wqy70tc3bv/1ObYJk9jzWS4ExHICslYep/e2b5cee51268e47ee164c4dffbd78ad4/Immunefi_Crypto_Losses_2022_Report.pdf), there has been a total loss of ~$3.77B because of hacks in the web3 space. To increase the protocol's security, audits and bug bounties can be a useful tool.

A **decentralized security marketplace** would allow projects to find reviewers/testers/auditors/whitehats, and vice versa. This would benefit everyone:
- **Projects** would increase their security;
- **Developers** would have the possibility to earn while using their skills, improving them;
- The **ecosystem** would be more secure, with more projects being audited and more developers learning about security.

The original thought is to make it as a smart contract platform, deployable on an existing parachain (that supports WASM smart contracts, such as [Astar](https://docs.astar.network/docs/getting-started) or [Watr](https://docs.watr.org/builders/substrate-contracts)) using [ink!](https://paritytech.github.io/ink/) ([here](https://github.com/paritytech/awesome-ink) you can see some examples).

**Note**: This use case can be extended/applied to other areas. The main problem to solve here is to find a way to manage the *delayed* transaction between two parties (i.e., [escrow](https://en.wikipedia.org/wiki/Escrow)), and to ensure fairness and transparency (e.g., a reviewer is not able to deliver all the reports in time, and the project's team would like to decide whether to extend the escrow duration or just to pay a lower percentage of the established bounty).

### Actors :busts_in_silhouette:

To ensure fairness and transparency, the marketplace could have the following actors:
- **Projects** - The projects that want to be reviewed / tested;
- **Auditors** - The developers that want to perform audits / hunt bugs;
- **Arbiters** - The developers that will arbitrate the disputes between projects and auditors (they will be useful if a project opens a dispute for any reason). They could get a small percentage of the bounty.

## Deliverables :nut_and_bolt:


The followings could be the initial deliverables of the project. Of course, improvements and additions are more than welcome.
1) Initial **research and design** of the protocol:
   - You can refer to what [Immunefi](https://immunefi.com/explore/) and [Code4rena](https://code4rena.com/) are doing (but bring that on-chain);
   - How to ensure the trustless interaction (e.g., projects could lock a percentage of the bounty to open the request);
   - What types of disputes could be risen and how to solve them;
   - How to manage time delays;
   - Look for other use cases (in or outside the security field);
2) Development of the **protocol**:
   - Development of the governance smart contract (e.g. to add/remove projects, auditors, arbiters, etc.);
   - Development of the auditing smart contract (e.g. to create audits);
   - Development of the arbitration smart contract (e.g. to create/solve disputes);
3) Development of the **frontend**, that enables the actors to interact with the protocol.
