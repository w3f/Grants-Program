# ISO20022 Strategic Positioning

- **Team Name:** Solidbit GmbH
- **Payment Address:** CHF (22 November, 2023, 08:57 UTC)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 1
- **DOT Address:** 12q1U7fTp1GGP5HLbhTCUTPJFUvFhBAMZvVM26tyDU5bg1KV

## Project Overview :page_facing_up:

### Overview

This proposal is a response to [this RFP](https://github.com/w3f/Grants-Program/blob/master/docs/RFPs/ISO_20022.md).

TL;DR: Integrating blockchains with the traditional financial world will take time and it does not make too much sense to blindly implement technical features without clear benefit but rather to invest in stategic long-term positioning.

In a previous [article](https://hackmd.io/@pifragile/BkQKiNJqA) published by the applicant and funded by the W3F, we gave an overview of how other blockchain ecosystems comply with the ISO20022 standard and how Polkadot could integrate with the standard itself. The bottomline of the research was that such an integration is a huge step as a seemingly unbrigeable gap between a protocol designed for communication between trusted third parties via private channels and a permissionless, transparent, decentralized blockchain. We understand that in order to request for further funding, the W3F asked to present a plausible business case for such a project.

After an extensive outreach on LinkedIn to 60+ representatives of all major swiss bank's innovation labs and having conversations with various representatives in the banking and blockchain industry, we failed to come up with a concrete business case for such an integration due to the issues stated above. Nevertheless we see potential in observing the landscape of banks, ISO20022 compatible players, central bank digital currencies and other blockchain ecosystems, as to us it obvious that in the long run the two now seemingly incompatible paradigms of doing financial transactions will move closer together and therefore it will be valuable for Polkadot to be strategically well positioned in this game.


### Project Details

After an extensive outreach campaign to various representatives of swiss banks and market research, we did not find any immediate business opportunities in integrating Polkadot with the ISO20022 standard.
We think that the gap between blockchains and the traditional financial world is still large and bridging it will require time.
What I would suggest is a slow, strategic positioning of the Polkadot ecosystem with regards to ISO2022, CBDCs and on-chain settlement systems.

Therefore we are asking for a yearly budget of CHF 14'400 in order to:

- Keep up to date regarding development of ISO20022 integrations with other blockchain ecosystems
- Observe the progress of projects like [Project Helvetia](https://www.snb.ch/en/publications/communication/speeches/2024/ref_20240506_tjn), [Project Agora](https://www.bis.org/about/bisih/topics/fmis/agora.htm), innovations in interbank clearing systems like [SIC](https://www.six-group.com/en/products-services/banking-services/interbank-clearing/sic.html) and similar
- Identify opportunities for the Polkadot ecosystem regarding integration with the traditional financial system
- When action is required, create actionable tasks and coordinate execution
- Report on findings every 6 months


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

#### W3F Grant ISO20022 Ecosystem Research and Technical Design
- Application: https://github.com/w3f/Grants-Program/blob/master/applications/ISO20022-Implementation-POC.md
- Submission: https://github.com/w3f/Grant-Milestone-Delivery/blob/master/deliveries/iso20022-ecosystem-research-and-technical-strategy.md

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

- **Estimated duration:** 6 months
- **FTE:**  6 person days
- **Total Costs:** 7200 CHF



### Milestone 1

- **Estimated duration:** 6 months
- **FTE:**  6 person days
- **Costs:** 7200 CHF


| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0c.** | Methodology | Description of how the information was sourced. |
| **0e.** | Bibliography | List of sources |
| 1. | Article | Every 6 months, we will publish an **article** that outlines the current state of blockchain integrations with ISO20022, current developments in CBDCs and interbank clearing systems such as SIC and identify opportunities for the Polkadot ecosystem with regard to integrate with the traditional financial world.|

## Future Plans

Whenever we see opportunities for Polkadot arise, we will propose concrete actions and coordinate execution.

## References
- [Previous Research by the applicant](https://hackmd.io/@pifragile/BkQKiNJqA)
- [ISO 20022 Message Catalogue](https://www.iso20022.org/iso-20022-message-definitions?business-domain=1)
- [Nice website describing payment flows](https://www.iso20022payments.com/)
- [Book ISO20022 For Dummies](https://www.swift.com/campaign/iso-20022/iso-20022-dummies)
- [ISO20022 example messages](https://developer.gs.com/docs/services/transaction-banking/pain001sample/)

### Previous Related W3F Grants


ISO20022 Ecosystem Research and Technical Design:
- Application: https://github.com/w3f/Grants-Program/blob/master/applications/ISO20022-Implementation-POC.md
- Submission: https://github.com/w3f/Grant-Milestone-Delivery/blob/master/deliveries/iso20022-ecosystem-research-and-technical-strategy.md


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
