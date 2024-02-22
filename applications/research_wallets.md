# User Account Access Security Analysis for Wallets

- **Team Name:** Zondax AG
- **Payment Address:** We prefer a payment in fiat. Bank details will be provided by email. 
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

This application aims to complete [User Account Access Security Analysis for Wallets RFP](https://grants.web3.foundation/docs/RFPs/user-account-access-analysis).

### Overview

This research proposal targets analyzing Polkadot's user-facing security protocols, focusing on complex account generation and access mechanisms, including multi-signatures and proxies. It plans to model and evaluate these processes in popular Polkadot wallets, aiming to identify security loopholes and user lockout scenarios while streamlining authentication and enhancing user experience.

This project will serve as the basis for the Bachelor Thesis of [Carlo Sala](https://github.com/carlosala), who has been working during the last two years at zondax contributing in building and maintaining several Ledger apps in the Polkadot ecosystem. This research will lead him towards completing his degree in Mathematics at [Universtat Autònoma de Barcelona](https://www.uab.cat/).

### Project Details

#### Research Goals

#### 1. Extend and Formalize account access graphs for blockchain:

The proposed research involves expanding the framework outlined in the _User Account Access Graphs_ ([paper](https://people.inf.ethz.ch/rsasse/pub/AccountAccessGraphs-CCS19.pdf)) to accommodate the unique features of blockchain technology, with a specific focus on the Polkadot ecosystem. 

This expansion entails incorporating the distinct aspects of Polkadot, such as multisignature (multisig) accounts, stashing (a mechanism for securing assets), proxy accounts (which allow one account to act on behalf of another), the use of hardware wallets (physical devices that store private keys), and [recovery pallet](https://github.com/paritytech/polkadot-sdk/tree/master/substrate/frame/recovery). The objective is to adapt, refine and extend the account access graph model to accurately represent and analyze the complex and varied ways in which users can interact with and access their assets within the Polkadot blockchain environment. This adaptation will consider the intricate security and operational dynamics of Polkadot's features, ensuring that the model remains relevant and effective in this advanced blockchain context.

The main goal of the project will be to deliver an academic paper allowing anyone interested to extend on our work.

This research will be assisted by a professor from the [Mathematics Department of Universitat Autònoma de Barcelona](https://www.uab.cat/web/maths-department-1210142393255.html), in the area of Discrete Mathematics.

The planned work will contain specially Graphs, used to model the Account Access, among other fields of Discrete Mathematics.


#### 2. Access Security analysis and evaluation

We aim to conduct comprehensive evaluations of User Account Access Security across a range of wallets, including but not limited to:

- [Polkadot-JS](https://polkadot.js.org)
- [SubWallet](https://www.subwallet.app)
- [Talisman](https://www.talisman.xyz)
- [Subkey](https://docs.substrate.io/reference/command-line-tools/subkey/)

Our methodology will incorporate automated and/or manual assessment techniques, the selection of which will be determined based on preliminary findings to ensure the most effective evaluation approach.

Additionally, the scope extends to examining hardware wallets such as:

- [Polkadot Vault](https://signer.parity.io/)
- [Ledger](https://www.ledger.com/)
- [Kampela](https://www.kampe.la/)

and will focus be on identifying potential security vulnerabilities and assessing the risk of user lockouts.

During the security evaluations, we will also try to identify and suggest UX improvements. Our goal is to streamline user access while maintaining the highest security standards.

### What your project is _not_ or will _not_ provide or implement

This project will not: focus on exhaustive pentesting. Our goal is to provide a theoretical framework to assess User Account Access Security in Polkadot ecosystem.

### Ecosystem Fit

User Account Access is a key security concern in any digital environment. Developing a practical model and applying it to top wallet providers within the Polkadot ecosystem can greatly improve both trust and security. This approach aims to make the ecosystem safer and more secure.

## Team :busts_in_silhouette:

### Team members

- Mathematician / Engineer: Carlo Sala
  - GitHub: https://github.com/carlosala
  - LinkedIn: https://linkedin.com/in/carlosalagancho
- 1 x Project Manager

### Contact

- **Contact Name:** Juan Leni and Ainhoa Aldave
- **Contact Email:** juan.leni@zondax.ch / ainhoa.aldave@zondax.ch
- **Website:** [zondax.ch](https://www.zondax.ch/)

### Legal Structure

Zondax AG

Dammstrasse 16

Zug 6300, Switzerland

UID CHE-491.796.576

### Team's experience

Over the last few years, Zondax has been involved in a large number of projects for most of the key players in the blockchain industry.
Our team includes experts in most blockchain aspects, from cryptography to data and protocol engineering.

Carlo Sala is a Mathematics student at [Universtat Autònoma de Barcelona](https://www.uab.cat/) and Software Engineer at Zondax for 2+ years in the Security team. He maintains as well a big OSS project outside of blockchain ecosystem.

Carlo has been working during the last two years building and maintaining several Ledger apps in the Polkadot ecosystem, such as Polkadot, Kusama, Acala, Astar, among others; as well as building tooling to test and improve them.

This project will serve as the basis for his Bachelor Thesis, culminating in the completion of his degree in Mathematics.

### Team Code Repos

Most of our contributions to the blockchain ecosystem can be found in our GitHub organization [zondax](https://github.com/zondax)

## Development Status :open_book:

Not initiated.

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Workload:** 16 weeks
- **Delivery Time:** 18 to 22 weeks
- **Full-Time Equivalent (FTE):** 0.5
- **Total Costs:** 20,800 CHF

### Milestone 1 — User Account Access Security Analysis for Wallets

- **Total Estimated Workload:** 16 weeks
- **Delivery Time:** 18 to 22 weeks
- **Full-Time Equivalent (FTE):** 0.5
- **Total Costs:** 20,800 CHF

|  Number | Deliverable                                                       | Specification                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ------: | ----------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **0a.** | License                                                           | Apache 2.0                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| **0b.** | Documentation                                                     | Document describing the threat model, scope of the analysis, and description of the approach/methodology used.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  **1.** | Research paper                                                    | Academic paper defining and describing User Account Access models used to assess Access Security in next deliverables. It'll include sound proofs for all elements deducted. This will be the main research objective since it'll allow anyone to use and extend our work for other wallets or any other relevant entity to this purpose. We'll build on top of [UAAG paper](https://people.inf.ethz.ch/rsasse/pub/AccountAccessGraphs-CCS19.pdf)                                                                                                                                             |
| **2a.** | Analysis report: detection of unauthorized access vulnerabilities | Applying (1), find (if any) vulnerabilities present in any wallet analyzed across all layers of investigation: account generation, authentication, and restoring mechanisms (we might extend layers of investigation based on prelimiary findings). We'll provide as well minimal reproducible examples for any potential exploit. If no vulnerabilities were to be found, we'll provide sound proofs of it. We'll provide as well a comprehensive study regarding user lockout risk; it'll comprise temporal lockout (eg. time to approve human recovery mechanisms) and definitive lockout. |
| **2b.** | Analysis report: non-critical improvements                        | Applying (1), find (if any) possible improvements in user experience. For example, redundancies in social recovery methods would fit here. If we don't find any improvement, we'll document as well what was assessed.                                                                                                                                                                                                                                                                                                                                                                        |
|  **3.** | Code                                                              | By the end of the project, we'll make any code used public allowing anyone to use/extend our work in combination with (1). NB: this deliverable is optional, since investigation is not yet defined if it'll be automatic and/or manual. In any case, we'll make everything used public.                                                                                                                                                                                                                                                                                                      |
## Future Plans

Zondax long-term vision will always be to investigate and improve every layer of Polkadot ecosystem. 
Upon completion of the project, we are willing to submit the final article for peer review, aiming for publication in a reputable journal.

## Additional Information :heavy_plus_sign:

This project will conform the Bachelor Thesis in Mathematics of Carlo Sala. 
