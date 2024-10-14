# ISO20022 Ecosystem Research and Technical Design

- **Team Name:** Solidbit GmbH
- **Payment Address:** CHF (22 November, 2023, 08:57 UTC)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 1


## Project Overview :page_facing_up:

### Overview

This proposal is a response to [this RFP](https://github.com/w3f/Grants-Program/blob/master/docs/RFPs/ISO_20022.md).


ISO20022 is the future standard of financial transactions of all kinds including payments, foreign exchange and securities trading. Many blockchain ecosystems like [Ripple](https://ripple.com/), [Cardano](https://cardano.org/) and [Stellar](https://stellar.org/) are already ISO20022 compliant. In order to make Polkadot ISO20022 compatible as well, it is necessary to start designing how such an integration would look like in pratice.

### Project Details

If Polkadot wants to become compatible with the traditional finance industry, an ISO20022 integration will be the right place to start.
The goal of this project is to get an overview of how other blockchain ecosystems approach the ISO20022 integration, outline challenges and opportunities of such an integration and provide technical designs of how Polkadot could become ISO20022 compatible.

## Team :busts_in_silhouette:

### Team members

- Piero Guicciardi (Project Lead & Developer)

### Contact

- **Contact Name:** Piero Guicciardi
- **Contact Email:** pg@solid-bit.com
- **Website:** https://solid-bit.com

### Legal Structure

- **Registered Address:** General Wille Strasse 99, CH-8706 Meilen, Switzerland
- **Registered Legal Entity:** Solidbit GmbH (CHE-267.620.734)

### Team's experience

Piero has been a core protocol developer for [Encointer](https://github.com/encointer) for the last two years, has recently become a member of the Polkadot Technical Fellowship and was granted a [W3F Grant](https://github.com/w3f/Grants-Program/pull/2123).

Below you can find a list of contributions by Piero:

#### Big Tip for LiteScan
- Referenda: https://polkadot.polkassembly.io/referenda/970
- Repo: https://github.com/pifragile/litescan


#### W3F Grant Democratic Governance
- Application: https://github.com/w3f/Grants-Program/pull/2123
- Submission: https://github.com/w3f/Grant-Milestone-Delivery/pull/1101 

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


Piero has previously received a W3F grant for a different project(see above).


### Team Code Repos

- https://github.com/pifragile
- https://github.com/SolidbitGmbH

Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine.

- https://github.com/pifragile


### Team LinkedIn Profiles

- https://www.linkedin.com/in/piero-guicciardi-66b939152/


## Development Status :open_book:
This project has not started yet, but there has been some previous related work in the ecosystem (see references), which we studied and will build upon.


## Development Roadmap :nut_and_bolt:

### Overview

- **Estimated duration:** 1 month
- **FTE:**  0.25 (5 person days)
- **Total Costs:** 5200 CHF (5850 USD)



### Milestone 1 — Ecosystem Research and Technical Design

- **Estimated duration:** 1 month
- **FTE:**  0.25 (5 person days)
- **Costs:** 5200 CHF (5850 USD)


| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0c.** | Methodology | Description of how the information was sourced. |
| **0e.** | Bibliography | List of sources |
| 1. | Article | We will publish an **article** that outlines the current state of other blockchain's ISO20022 development as well as technical designs how to solve this for Polkadot.|

## Future Plans

The next step will be to implement a POC of the proposed soution.

## References
- [ISO 20022 Message Catalogue](https://www.iso20022.org/iso-20022-message-definitions?business-domain=1)
- [Nice website describing payment flows](https://www.iso20022payments.com/)
- [Book ISO20022 For Dummies](https://www.swift.com/campaign/iso-20022/iso-20022-dummies)
- [ISO20022 example messages](https://developer.gs.com/docs/services/transaction-banking/pain001sample/)

### Previous Related W3F Grants

ISO20022 Research:
- https://github.com/w3f/Grants-Program/blob/master/applications/ISO20022.md
- https://github.com/w3f/Grant-Milestone-Delivery/blob/master/deliveries/ISO20022-milestone1.md


ISO8583 Research:
- https://github.com/w3f/Grants-Program/blob/master/applications/Integrating-ISO8583.md
- https://github.com/w3f/Grant-Milestone-Delivery/blob/master/deliveries/ISO8583-milestone-1.md


ISO8583 Implementation:
- https://github.com/w3f/Grants-Program/pull/2184
- https://github.com/w3f/Grants-Program/pull/1809
- https://github.com/w3f/Grants-Program/blob/master/applications/ISO-8583-implementation.md
- https://github.com/w3f/Grant-Milestone-Delivery/blob/master/deliveries/iso_8583_PoC_milestone_1.md
