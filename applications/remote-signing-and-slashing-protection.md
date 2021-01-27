# Open Grant Proposal

> This document is referenced in the terms and conditions and therefore needs to contain all the required information. Don't remove any of the mandatory parts presented in bold letters or as headlines! See the [Open Grants Program Process](https://github.com/w3f/Open-Grants-Program/blob/master/README_2.md) on how to submit a proposal.

* **Project Name:** Remote Signing and Slashing Protection
* **Team Name:** RSSP
* **Payment Address:** 1cpr

*The above combination of your GitHub account submitting the application and payment address will be your unique identifier during the program. Please keep them safe.*

## Project Overview: 


In this proposal, we aim to design and implement a remote signing process within the substrate client for ECDSA, EdDSA, and BLS signature algorithms for Parachains (including a dedicated key management service to be used with the remote signing module). We also aim to provide remote mechanism to prevent slashings and protect stakers’ funds.
### Overview

The validators play a crucial role on PoS networks due to operating stable, reliable, consistent, and secure operations of their nodes. Therefore, providing an ultimate security is of utmost important, otherwise, the whole system would fail. In this respect, they also manage their account and session keys which are used to staking, resource rental, governance, consensus, and security. However, if a validator is compromised then it can lead to a complete loss of funds of this validator. Therefore, a more secure and robust key management architecture (preferably in a distributed fashion) must be designed and implemented for long term purposes.

The proposed platform has independently separated the storage and the signing services from the validators and has provided a remote signing process through secure gRPC connections. This allowed validators to create more robust and flexible operations, while providing additional security measures against possible attacks. Hence, it creates a more resilient solution compared to all other existing solutions, and in case of a compromise or uptime issues of the validator, Stkr can easily migrate to another validator without affecting users’ funds.

  
### Project Details 
* An overview of the technology stack to be used
  * **Blockchain**: Rust/Substrate/Cumulus/Docker
  
### Ecosystem Fit 

Ankr also aim to provide staking services for Polkadot. Ankr achieves staking services in Eth 2.0 with providing more than 1000 validators. The signing and slashing protection are successfully achieved in Eth 2.0. However, Polkadot aim to support remote signing but did not defined specifications.   In this context, with our proposal, we fill the missing part for remote signing and remote slashing protections.
## Team :

### Team members
* Stanley Wu (Lead)
* Dr. Suleyman Kardas (Advisory)
* Dmitry Savonin (Senior Software Developer)
* Felipe Faria (Software Developer)
* Daniel Ichshuk (Software Developer)

### Contact
* **Contact Name:** Stanley Wu
* **Contact Email:** stanley@ankr.com
* Website: https://eth2.ankr.com/

### Legal Structure 
* **Registered Address:** 609 Mission St 2nd floor, San Francisco, CA 94105, United States
* **Registered Legal Entity:** Ankr.com

### Team's experience
* **Stanley Wu:** Based in San Franc
* **Suleyman KARDAS:** Based in San Franc
* **Dmitry Savonin:** Based in San Franc
* **Felipe Faria :** Based in San Franc
* **Daniel Ichshuk :** Based in San Franc

### Team Code Repos
* https://github.com/Ankr-network/stkr-polkadot-signer

## Development Roadmap : 

### Overview
* **Total Estimated Duration:** 2 months
* **Full-time equivalent (FTE):**  2 FTE
* **Total Costs:** 0.9 BTC

### Milestone 1 — Implementation Design Documents for the Whole architecture
* **Estimated Duration:** 1 month
* **FTE:**  2
* **Costs:** 0.5 BTC

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | Providing specification of all the technical requirements and its limitations |
| 0c. | Documentation | Providing the architecture design |
| 0d. | Documentation | Defining all the required functions for remote signing in gRPC proto |

### Milestone 2 — Implementation for Remote Signing Services on Parachains (for both internal Testnet and Kusama)
* **Estimated Duration:** 2 month
* **FTE:**  2
* **Costs:** 1 BTC

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | Code | Providing a crypto library that supports ECDSA, EDDSA and BLS signature algorithms |
| 0b. | Code | Providing a remote server that provides  both signing services and slashing protection mechanism |

### Milestone 3 — Deployment and Test
* **Estimated Duration:** 1/2 month
* **FTE:**  2
* **Costs:** 0.25 BTC

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | Code+Documentation | Running a test parachain with multiple validators on the same remote signing server|
 

## Future Plans
 * We will provide threshold based signature mechanism for remote signing procedures.

## Additional Information : 

Possible additional information to include:
* What work has been done so far?

  We have implemented remote signing and slashing protection for ETH 2.0. 

* Are there are any teams who have already contributed (financially) to the project?

  No

* Have you applied for other grants so far?

  No
