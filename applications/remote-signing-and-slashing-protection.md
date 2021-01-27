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

Ankr also aim to provide staking services for Polkadot. Ankr achieves staking services in Eth 2.0 with providing more than 1000 validators. The signing and slashing protection are successfully achieved in Eth 2.0. However, by default substrate supports availability to implement remote signing but its not implemented in sources.   In this context, with our proposal, to prevent exposing private keys to Polkadot validators we need to implement remote signing protocol which delegates all signing to remote service.

### Techical Discussions

For the first issue everything is transparent because we just need to create proto contract, implement it in substrate codebase and create MR for Polkadot community.

* **Remote Signing**

We plan to implement this proposal in the same way as prysm implemented it: protocol buffer contract with methods for listing public keys and signing, but we need to repeat these methods for every crypto key type (3 times), so we should have at least 6 methods.

* **Slashing Protection**
  
For this issue its a bit more complicated to implement, but we still can do it. To add slashing prevention we need to pass payload details into backend aslo. By defeault sign method passes only message with public key, so we need to implement additional signing method that supports payload and use it for signing, but it should be implement in Polkadot codebase directly (not in substrate).

Polkadot supports next signing payloads:

* **Seconded** (A statement that a validator seconds a candidate) - big structure with a lot of fields contains information about block and other things

* **Valid** (A statement that a validator has deemed a candidate valid) - its just a 256 bit hash

* **Invalid** (A statement that a validator has deemed a candidate invalid) - its also 256 bit hash

Slashing cases:

* **Level 1:** The validator doesn’t pass the health check for the whole epoch (which lasts for  6 hours). As a result, the validator is kicked from the current set of validators and can be punished for up to 0.1% of the stake.

* **Level 2:** Babe produces two or more blocks for the same slot. If a large number of validators go offline along with the culprit. As a result, the validator is marked as inactive for the current era (which lasts for 48 hours) and a penalty of up to 1% of the stake is taken.

* **Level 3:** Grandpa signs multiple votes in the same round or on different chains. There is a concurrent equivocation (Several validator’s Babe produces multiple blocks for the same slot). As a punishment stake of up to 10% is taken along with removing the validator from the active list in the current era and from all the nominators’ lists of trusted candidates.

* **Level 4:** Misconduct that poses serious security or monetary risk to the system, or mass collusion. Punishment repeats the third level, but with more stake penalized (Up to 100%).
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
