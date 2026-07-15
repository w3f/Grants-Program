- **Team Name:** Zondax AG
- **Payment Address:**   DOT/AssetHub address 1fN87Fgj5BUhezFgbLiGbXTMrBVggnmYBX9anzMBky8KaJ5
- **[Level]**: 3

## Project Overview :page_facing_up:

### Overview

#### Enhancing Ledger Polkadot Universal App Compatibility for Emerging Substrate Ecosystems

This project expands the compatibility of the  [Polkadot Universal App](https://github.com/Zondax/ledger-polkadot) to support the evolving landscape of Substrate-based blockchain networks, particularly those with specialized configurations. This initiative addresses the growing need for secure hardware wallet support for projects like [Mythical Games](https://mythicalgames.com/)  and the future AssetHub evolution, codenamed "Plaza,".

### Project Details

This upgrade will deliver the following key enhancements:

- **Expanded Cryptographic Support**: Implement alternative cryptographic signature methods, specifically ECDSA and Keccak-256 hashing, to accommodate the requirements of emerging networks. This involves modifications to both the Ledger app and the associated JavaScript (JS) package.
- **Variable Account Identifier Support**: Adapt the application to handle varying account identifier lengths, including the  20-byte address format, which is essential for compatibility with specific networks. This will require changes to both the Ledger app and the JS package.
- **Adaptation of signRaw function** Extend signRaw functionality to support ecdsa
- **Testing and Integration**: Develop comprehensive integration tests and implement Continuous Integration (CI) pipelines to ensure the stability and reliability of the enhanced application.
- **Third Party Security Audit**: Conduct a thorough security audit by an auditor selected from Ledger SAS's approved list. This audit is a requirement for publication on the Ledger Live platform, as per Ledger's established procedures. [Ledger's Third-Party Security Assessment Report Guidelines](https://support.ledger.com/article/Third-party-Security-Assessment-Report)
- **Ledger Release Management**: Manage the submission process and release process through Ledger, ensuring effective communication and coordination. While Zondax will facilitate the review process, Ledger's release timeline remains outside of Zondax's direct control.

Note: This upgrade maintains the existing Polkadot derivation path within the Ledger app; no modifications are required.

#### Technology and Languages

- C, Typescrypt
- Ledger SDK

### Ecosystem Fit

Zondax is a growing and distributed team with experience and projects for more than 50 blockchains. Zondax has been contributing to the Substrate ecosystem since 2018-2019. The team has received and completed a large number of W3F grants and currently maintains most Ledger apps for the ecosystem.

## Team :busts_in_silhouette:

### Team members

- 1x Embedded Engineer 
- 0.3 x Engineering Manager 
- 0.2 x Project Manager

### Contact

- **Contact Name:** Juan Leni and Ainhoa Aldave
- **Contact Email:** juan.leni@zondax.ch / ainhoa.aldave@zondax.ch
- **Website:**  zondax.ch

### Legal Structure

Legal structure
Zondax AG
Dammstrasse 16
Zug 6300
Switzerland
UID CHE-491.796.576

### Team's experience

Over the last few years, Zondax has been involved in a large number of projects for most of the key players in the blockchain industry. Our team includes experts in most blockchain aspects, from cryptography to data and protocol engineering. 

### Team Code Repos

Most of our contributions to the blockchain ecosystem can be found in our GitHub organization [zondax](https://github.com/zondax)


## Development Status :open_book:

Not initiated. 

## Development Roadmap :nut_and_bolt:

## Technical Scope:


### Milestone 1  Extension of compatibility on Polkadot Ledger App + Security Audit 

Complete Ledger Polkadot App Compatibility Extension & Security Audit. Implement enhanced cryptographic and address support, conduct a full security audit, and prepare for Ledger release.

### Overview

- **Total estimated workload:** 1.5 months
- **Delivery time:**: 2 months 
- **Full-Time Equivalent (FTE):** 1.5 FTE
- **Total Costs:** 35'000 USDT
- **DOT %:** Percentage of Total Costs to be paid in (vested) DOT = 50%

### Milestone 1  Extension of compatibility on Polkadot Ledger App + Security Audit 

- **Estimated workload:** 1.5 month 
- **Delivery time:**: 2 months 
- **FTE:**  1.5
- **Costs:** 35'000 USDT

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 / MIT |
| **0b.** | Documentation | We will provide a inline documentation of the code and inline documentation of the code and a basic tutorial |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article/Tutorial |Initial article/tutorial explaining the project and how to use the web application |
| 1. | Code| General structure |
| 2a. | Code| Ledger Application code |
| 2b. | Code| Ts Library Application code |


## Future Plans

No further updates planned in the short term. 

## Additional Information :heavy_plus_sign:

Zondax has been contributing to the Polkadot ecosystem for several years, and has successfully completed several grants. 
