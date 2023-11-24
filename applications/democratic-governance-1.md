# Democratic Governance 1

- **Team Name:** Solidbit GmbH
- **Payment Address:** CHF (22 November, 2023, 08:57 UTC)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 1


## Project Overview :page_facing_up:

### Overview

Encointer has started the development of a pallet that facilitates democratic voting based on Proof-Of-Personhood. We believe that this work can be a basis for Proof-Of-Personhood based governance protocols for varios applications such as DAOs or parachains, which could benefit from improved legitimacy when using a democratic over a plutocratic design. We are interested in building this project as it builds on top of our expertise with Proof-Of-Personhood and it lays an important foundation to facilitate non-plutocratic governance in Web3.

### Project Details

You can find the PR with the current state of the pallet [here](https://github.com/encointer/pallets/pull/273) and the node side of it [here](https://github.com/encointer/encointer-node/pull/350). There also exists a [documentation of the protocol](https://book.encointer.org/protocol-democracy.html) and a [tracking issue](https://github.com/encointer/pallets/issues/347) that tracks the work still to be done for the democracy pallet.

In this project we will continue building the democracy pallet as well as improve the CLI and integration tests for the protocol. The following tasks will be implemented:

- Decide which matters can be voted on and implement (1.5 days)
- Use timestamps instead of blocks to be consistent with cycles (1.5 days)
- Use reputation commitment pallet for proposals (0.5 days)
- Pass proposal enactment errors to user (0.5 days)
- Lazy proposal update (0.5 days)
- Persist electorate size in proposal (0.5 days)
- Add more events (0.5 days)
- Refactor integrations tests to be independent and systematically cover all potantial voting scenarios  (1 day)
- Extend CLI (Show vote status, make enactments queriable) (1 day)
- Tutorial (0.5 days)

### Ecosystem Fit

This project helps to build the foundation of a One-Person-One-Vote paradigm for varios governance systems in Web3. We believe that Proof-Of-Personhood and demorcatic voting will become essential in many Web3 applications, and thus Dotsama as a whole will profit from having a protocol like this available in the ecosystem.

## Team :busts_in_silhouette:

### Team members

- Piero Guicciardi (Project Lead & Developer)
- Alain Brenzikofer (Advisor Protocol)
- Christian Langenbacher (Advisor Implementation)

### Contact

- **Contact Name:** Piero Guicciardi
- **Contact Email:** pg@solid-bit.com
- **Website:** https://solid-bit.com

### Legal Structure

- **Registered Address:** General Wille Strasse 99, CH-8706 Meilen, Switzerland
- **Registered Legal Entity:** Solidbit GmbH (CHE-267.620.734)

### Team's experience

Piero has been a core protocol developer for [Encointer](https://github.com/encointer) for the last two years and has recently become a member of the Polkadot Technical Fellowship. Among other projects, he designed and implemented a democracy module on top of Encointer's persoonhood reputation system. Please check out the [pull request](https://github.com/encointer/pallets/pull/273) and the [high level documentation](https://book.encointer.org/protocol-democracy.html).

Below you can find a list of other contributions by Piero:

#### Encointer core protocol:
- Design and implement faucet
    -  https://github.com/encointer/book/pull/14
    - https://github.com/encointer/encointer-node/pull/333
    - https://github.com/encointer/pallets/pull/319
    - https://github.com/encointer/pallets/pull/326
    - https://github.com/encointer/encointer-parachain/pull/193
- Design and implement democracy module
    - https://book.encointer.org/protocol-democracy.html
    - https://github.com/encointer/pallets/pull/273
- Redesign participant attestations
    - https://github.com/encointer/pallets/pull/231
    - https://github.com/encointer/pallets/issues/215
- Endorsement after registration 
    - https://github.com/encointer/pallets/pull/202
- Early reward payout 
    - https://github.com/encointer/pallets/pull/233
- Allow for upgrading registrations and unregistering 
    -   https://github.com/encointer/pallets/pull/254
- Allow reputables to endorse
    - https://github.com/encointer/pallets/pull/268
- Geohash location validation algorithm
    - https://github.com/encointer/pallets/pull/55
- Constant time random permutation for meetup assignment
    -  https://github.com/encointer/pallets/pull/68

#### Misc:
- Implement custom RPCs
    - https://github.com/encointer/pallets/pull/196
- Implement storage migrations for Weight V2
    - https://github.com/encointer/pallets/pull/308
- Various polkadot/substrate dependency bumps
    - https://github.com/encointer/pallets/pull/299
    - https://github.com/encointer/encointer-parachain/pull/171
- Fee payment in Encointer community currency
    - https://github.com/encointer/encointer-node/pull/194/files
    - https://github.com/encointer/encointer-node/pull/226
    - https://github.com/encointer/pallets/pull/190
- Integrate try runtime 
    - https://github.com/encointer/encointer-parachain/pull/177/files
    - https://github.com/encointer/encointer-node/pull/312/files

	
#### Non rust contributions:
- Build an indexer using qubquery
    - https://github.com/encointer/subquery (Main author)
- Build an accounting tool for encointer businesses
    - https://github.com/encointer/accounting-frontend (Main author)
    - https://github.com/SolidbitGmbH/encointer-accounting-backend (Main author)
- Build an integration for Encointer personhood in KILT
    - https://github.com/encointer/kilt-personhood (Main author)
- Contributions to encointer js
    - https://github.com/encointer/encointer-js/pull/78


The two project advisors Alain Brenzikofer and Christian Langenbacher both are known figures in the Dotsama ecosystem. Alain is the founder of [Encointer](https://github.com/encointer) and [Integritee](https://github.com/integritee-network) and Chris is the tech-lead of both of those projects.


Encointer has previously received a W3F grant.


### Team Code Repos

- https://github.com/encointer/pallets
- https://github.com/encointer/encointer-parachain
- https://github.com/encointer/encointer-node
- https://github.com/SolidbitGmbH/encointer-accounting-backend

Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine.

- https://github.com/pifragile
- https://github.com/brenzi
- https://github.com/clangenb


### Team LinkedIn Profiles

- https://www.linkedin.com/in/piero-guicciardi-66b939152/
- https://www.linkedin.com/in/alain-brenzikofer-9a4480165/
- https://www.linkedin.com/in/christian-langenbacher-baa629182/


## Development Status :open_book:

You can find the PR with the current state of the pallet [here](https://github.com/encointer/pallets/pull/273) and the node side of it [here](https://github.com/encointer/encointer-node/pull/350). There also exists a [documentation of the protocol](https://book.encointer.org/protocol-democracy.html) and a [tracking issue](https://github.com/encointer/pallets/issues/347) that tracks the work still to be done for the democracy pallet.

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 1 month
- **Full-Time Equivalent (FTE):** 0.4 (8 person days)
- **Total Costs:** 8320 CHF

### Milestone 1 Example — Protocol enhancements

- **Estimated duration:** 1 month
- **FTE:**  0.4 (8 person days)
- **Costs:** 8320 CHF


| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | GPLv3
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an **article** in the Encointer book that explains the functionality of the democracy module.|
| 1. | Democracy Pallet | We will implement the above described tasks in the Encointer democracy pallet. |
| 3. | CLI and Integration Tests | We will implement the above described tasks in the CLI and extend the existing integration tests. |


## Future Plans

We will keep track of all future work in the [tracking issue](https://github.com/encointer/pallets/issues/347). The main vision is to build a protocol where Dotsama users can globally participate in governance using their personhood instead of their tokens. Already defined steps are:

- Limit active proposals per reputable per cycle
- Use generic dispatchables for proposal actions
- Define protocol for inter-community voting

## Referral Program (optional) :moneybag:

- **Referrer:** Alain Brenzikofer: https://github.com/brenzi
- **Payment Address:** 162yvHqgWxzb3rMWvEJyduQ72LHvkQNHVpvpASEWbhE8LwgT

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** I heard about it from Alain Brenzikofer.
