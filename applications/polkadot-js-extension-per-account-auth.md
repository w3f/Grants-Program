# Privacy enhancement for Polkadot-js extension

- **Team Name:** ChainSafe
- **Payment Address:** 0x85D81Ab61Fe16CDcaeF2Ca556ED4577A51b9b07C (DAI)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 1


## Project Overview :page_facing_up:

In response to the RFP: https://github.com/w3f/Grants-Program/blob/master/rfps/privacy-enhancement-polkadot-extension.md

### Overview

An increasing number of websites require access to the Polkadot extension with a growing ecosystem. By allowing access to the extension, websites (naturally) can see the addresses that are contained in the extension. This imposes a big risk to privacy, because malicious actors could create lists about which addresses belong to one entity and, in the worst case, even link it to real-world identities (if at least one address is linked to an on-chain identity). A feature to prevent this is currently the "hide" button on single addresses, which prevent websites from seeing that address. However, it is currently cumbersome to handle that feature. The idea of this project is to extend on that feature and include a few QOL functionalities to make it easier for users to protect their privacy.

### Project Details

The project details have been discussed with the Polkadot-js extension's main maintainer here: https://github.com/polkadot-js/extension/issues/1037
- The current authorization screen will be modified to not only let users consent to share their account details with a website requesting it, but also select which accounts will be visible to the website.
- The screeen will allow to select all accounts with one click, such as a "select all checkboxes".
- The current website whitelist screen will be modify to allow users to change what accounts are shared with what website (currently it only allows the blank access to any visible account).
- It was agreed in the above mentioned issue, that to have the highest privacy, no migration of the current website whitelist would be performed. As such, even if a user has granted access to their accounts to a website with the extension version X, they will be prompted in version Y to select what account they whish to share - with version X being the version of the extension prior to this project's merge, and version Y being the version containing the feature developped for this grant. This represents a little UX annoyance, but is worth the trouble considering the privacy enhancement it provides.
- This project will contain a little UI changes as possible, as explained above, it will _not_ contain any group selection or creation. It will _not_ add any additional menu entry. so as to keep the maintenance as low as possible.

### Ecosystem Fit

Help us locate your project in the Polkadot/Substrate/Kusama landscape and what problems it tries to solve by answering each of these questions:

- This projects aims at enhancing any Polkadot-js extension's user privacy by not sharing all their accounts
- The project has been discussed with the main maintainer of the extension [here](https://github.com/polkadot-js/extension/issues/1037), and got a soft approval, e.g it has high chances of being merged.

## Team :busts_in_silhouette:

### Team members

- Thibaut Sardan @tbaut

### Contact

- **Contact Name:** Thibaut Sardan
- **Contact Email:** thibaut@chainsafe.io
- **Website:** chainsafe.io

### Legal Structure

- **Registered Address:** 251 Spadina Ave, Toronto, Ontario, M5T 2E2, Canada
- **Registered Legal Entity:** ChainSafe Systems

### Team's experience

Thibaut worked at Parity for more than 3 years, and has been a key contributor of the Polkadot-js extension, currenly the second largest human commiter afer Jaco, see https://github.com/polkadot-js/extension/graphs/contributors

### Team Code Repos

- https://github.com/ChainSafe
- https://github.com/tbaut

## Development Status :open_book:

An issue was created to validate the idea with the Extension's main maintainer: https://github.com/polkadot-js/extension/issues/1037

## Development Roadmap :nut_and_bolt:

This section should break the development roadmap down into milestones and deliverables. To assist you in defining it, we have created a document with examples for some grant categories [here](../docs/grant_guidelines_per_category.md). Since these will be part of the agreement, it helps to describe _the functionality we should expect in as much detail as possible_, plus how we can verify and test that functionality. Whenever milestones are delivered, we refer to this document to ensure that everything has been delivered as expected.

For each milestone,

- make sure to include a specification of your software. _Treat it as a contract_; the level of detail must be enough to later verify that the software meets the specification.
- include the amount of funding requested _per milestone_.
- include documentation (tutorials, API specifications, architecture diagrams, whatever is appropriate) in each milestone. This ensures that the code can be widely used by the community.
- provide a test suite, comprising unit and integration tests, along with a guide on how to set up and run them.
- commit to providing Dockerfiles for the delivery of your project.
- indicate milestone duration as well as number of full-time employees working on each milestone.
- **Deliverables 0a-0d are mandatory for all milestones**, and deliverable 0e at least for the last one. If you do not intend to deliver one of these, please state a reason in its specification (e.g. Milestone X is research oriented and as such there is no code to test).

> :zap: If any of your deliverables is based on somebody else's work, make sure you work and publish _under the terms of the license_ of the respective project and that you **highlight this fact in your milestone documentation** and in the source code if applicable! **Teams that submit others' work without attributing it will be immediately terminated.**

### Overview

- **Total Estimated Duration:** 1 month between the start of the development and the merge of the PR
- **Full-Time Equivalent (FTE):**  1 FTE
- **Total Costs:** 10000
 
### Milestone 1 Privacy enhancement feature

- **Estimated duration:** 1 month
- **FTE:**  1
- **Costs:** 10000 USD

This feature can only be delivered in 1 Milestone considering its scope and the user needs. E.g we cannot deliver the per website authorization selection without letting the user change this parameter later on.
| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can authorize a Dapp to get access to some accounts, and how a user can change these accesses. |
| 0c. | Testing Guide | This part of the extension does not have tests, because it does not have many moving part, and writing integration tests would be a whole other project. |
| 0d. | Docker | There is no Docker needed. |
| 0e. | Article | We will publish an **article** that explains the new functionnality included in this project and its privacy benefits for all polkadot-js extension's users.
| 1. | new approval screen | Users will be able to see all their accounts, check which one they want to share with the website, and optionnaly select all accounts at once. |
| 2. | new approval back-end | The current system of whitelist will be retired and a new system of authorization per website per account will be implemented. Note that the current account visibility feature (with the eye) will be kept untouched. |
| 3. | website approval enhancement | The current parameter screen "Manage Website Access" will be enhanced where users can select per website what accounts are shared with each website. The account selection component will be re-used here so as to reduce maintenance hurdle. |

## Future Plans

Please include here

- Thibaut has been a regular comtributor of the extension in the past, he's been helping with the curration of the extension's issues as well, and this should continue in the future.


## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Github RFP and personal recommendation
