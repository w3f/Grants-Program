# Zondax Support & Maintenance

* **Team Name:** Zondax
* **Payment Address:** DAI (ERC20) 0x64c37c278f4c975e44ffd99b6e5f0832a3e9e981

## Project Overview :page_facing_up:

### Overview

The aim of this proposal is to contribute and support the community in the face of multiple challenges connected to the use of Ledger applications in the Polkadot/Kusama/Substrate ecosystem.

Our previous maintenance contract expired several months ago. Because of our commitment to the community (without funding or a contract), we have still been keeping track of support requests and upgrading applications as new runtimes were being released. In this respect, we are already discussing proposals to the respective treasuries but this process requires a deeper legal assessment on our side that may take several more weeks to get resolved.

Because of the incredible success of substrate based projects, a sizeable amount of new users have recently joined the community. It is important to state that Zondax did not design or operate any web, desktop, mobile or browser extension in the Substrate ecosystem.

Unfortunately, in recent days, changes to the user interface of Polkadot.js have resulted in some users incorrectly sending funds to destination addresses (actually public keys) derived for other networks. Although these funds are not irrecoverable, at the moment, these users cannot recover funds without a deep technical understanding of the problem. Actually, we do not recommend any of these stopgap solutions, and employing them may compromise the secrecy of Ledger’s mnemonics.

For this reason, we would like to propose a series of steps to address and mitigate future similar issues. As previously mentioned, we consider part of this grant as an intermediate step towards a fully treasury based approach. Unfortunately, given the urgency, we believe that in order to respond adequately, an open grant is more appropriate until we analyse in depth some legal uncertainties in the treasury model.

### Project Details

## Team :busts_in_silhouette:

### Legal Structure

* **Registered Legal Entity:** Zondax AG
* **Registered Address:** 6300 Zug. Switzerland

### Contact

* **Contact Name:** Juan Leni
* **Contact Email:** juan.leni@zondax.ch
* zondax.ch

### Team's experience

Our team has very specific experience in this subject matter. Zondax developed both Polkadot and Kusama apps. We have also maintained both applications along all runtime upgrades (more than 50 upgrades) and provided technical support on engineering aspects. Actually, Zondax has developed tens of different Ledger apps for a wide range of blockchain projects. Zondax is also Substrate delivery partner and we have experience in embedded systems, blockchain core and protocol development and applied cryptography.

### Team Code Repos

* https://github.com/Zondax

## Development Roadmap :nut_and_bolt:

### Introduction

*Ledger App Standard Runtime Upgrades*: Along the period of time covered by this grant (16 weeks), we will keep upgrading both the Polkadot and Ledger apps to align with important runtime upgrades, in particular, those that are not backwards compatible because of tx_version changes. We are already aware of some important changes happening in a few weeks.

*Ledger App (Polkadot & Kusama) Recovery Extensions*: We propose creating a special configuration setting that users can enable to allow for cross-chain derivation (multiple BIP44 derivation) on both Kusama and Polkadot apps. This would allow users to retrieve funds that have been sent by mistake to keypairs in other BIP44 paths and that are currently not easy to recover.

*JS key derivation library*: We strongly recommend not using mnemonics anywhere but on the HW wallets themselves. However, we understand the need for a simple tool to independently verify key derivation. For this reason, we propose creating an npm JavaScript and/or Typescript package that can derive keys in the exact same way that Ledger devices do.

*Support*: In Polkadot / Kusama, we do not develop or operate web/desktop/mobile wallets, servers, user interfaces, etc.. However, given our involvement in the community (and the fact that we have developed both Ledger apps in addition to other related grants), we are currently receiving a sizeable amount of requests and support questions.

A large quantity of questions refers to the aforementioned problem (locked funds). In other cases, they are mostly about misusage or lack of training on polkadot.js user interface, connection issues or questions about polkadot and kusama network operations. We believe that newcomers to the ecosystem would definitely profit from a much better support experience and we can contribute to this. We also think that a closer collaboration and joining forces with https://support.polkadot.network would be a major improvement. 

Last but not least, in the following weeks after the release of the "recovery extensions", we understand that adequate and specific guidance and support will be necessary.

In this respect, we propose:

* To reactivate and improve our processes, response times and broadening the range of questions that the team at support@zondax.ch are able to answer.

* To improve coordination with https://support.polkadot.network.

* To develop and expand a Polkadot/Kusama support website with documentation and articles that address a large quantity of the typical support questions that Zondax receives every day.

### Overview

* **Total Estimated Duration:** 16 weeks
* **Total Costs:** 49000 DAI (+VAT when applicable)

### Milestone 1 — Support

* **Estimated Duration:** 8 weeks
* **FTE:**  variable due to different skillset but approximately equivalent to 2.5-3.0 FTEs
* **Costs:** 25000 DAI  (+VAT when applicable)

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will extend our documentation to include this additional features. We will also add more documentation about Ledger key derivation internals |
| 0c. | Testing Guide | The code will have both unit and integration (zemu based) tests as our previous deliverables. |
| 0d. | Article/Tutorial | We will write an article or tutorial that explains the work done as part of the grant.
| 1. | Polkadot App Recovery Extension | We will add a special recovery mode in the Polkadot app. To minimize mistakes, activating this option will require several steps and explicit confirmation. <br/> This option will allow deriving Kusama key pairs. We will also adjust JS libraries and coordinate upgrades and Ledger review and publication process |
| 2. | Kusama App Recovery Extension | We will add a special recovery mode in the Polkadot app. To minimize mistakes, activating this option will require several steps and explicit confirmation. <br/> This option will allow deriving Kusama key pairs. We will also adjust JS libraries and coordinate upgrades and Ledger review and publication process |
| 3. | Ledger-Substrate-js Derivation | We will extend the ledger-substrate-js package to include host-side for Ledger's ed25519+BIP32 derivation. A minimal react site and examples will be provided |
| 4. | Polkadot App - Runtime Support Updates | Due to substrate/scale design requirements, we will make periodic updates to align with changes in the node metadata. In particular, backward incompatible changes (indicated by `tx_version` increases) require adjusting the code base, review and publication of a new Polkadot app. |
| 5. | Kusama App - Runtime Support Updates | Due to substrate/scale design requirements, we will make periodic updates to align with changes in the node metadata. In particular, backward incompatible changes (indicated by `tx_version` increases) require adjusting the code base, review and publication of a new Polkadot app. |
| 6. | Community Support | We will reactivate and improve of our support processes, response times and broaden the range of questions the support team are able to answer even when they are beyond of our original scope. We will initiate a support subdomain with relevant content, material and tutorials to support both the recovery extension as well as to mitigate future community issues. Moreover, we will improve coordination with support@polkadot.network.  |

Notes:

* We will strongly prioritize the release of recovery extensions to both Kusama / Polkadot Ledger apps.

### Milestone 2 — Support

* **Estimated Duration:** 8 weeks
* **FTE:**  variable due to different skillset but approximately equivalent to 2.5-3.0 FTEs
* **Costs:** 24000 DAI  (+VAT when applicable)

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will document any protocol level changes made as part of the runtime support upgrades |
| 0c. | Testing Guide | The code will have both unit and integration (zemu based) tests as our previous deliverables. |
| 0d. | Article/Tutorial | We will write an article or tutorial that explains the work done as part of the grant.
| 1. | Polkadot App - Runtime Support Updates | Similar objective as the previous milestone |
| 2. | Kusama App - Runtime Support Updates | Similar objective as the previous milestone |
| 3. | Community Support |   |
