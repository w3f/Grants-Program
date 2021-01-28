# Open Grant Proposal

> This document is referenced in the terms and conditions and therefore needs to contain all the required information. Don't remove any of the mandatory parts presented in bold letters or as headlines! See the [Open Grants Program Process](https://github.com/w3f/Open-Grants-Program/blob/master/README_2.md) on how to submit a proposal.

* **Project Name:** Remote Signing and Slashing Protection
* **Team Name:** RSSP
* **Payment Address:** 0x146eE71e057e6B10eFB93AEdf631Fde6CbAED5E2 (ETH)

*The above combination of your GitHub account submitting the application and payment address will be your unique identifier during the program. Please keep them safe.*

## Project Overview :page_facing_up:

In this proposal, we aim to design and implement a remote signing process within the substrate client for ECDSA, EdDSA, and BLS signature algorithms for Parachains (including a dedicated key management service to be used with the remote signing module). We also aim to provide a remote service which aims to prevent slashings and protect stakers’ funds.

### Overview

The validators play a crucial role on PoS networks due to operating stable, reliable, consistent, and secure operations of their nodes. Therefore, providing an ultimate security is of utmost important, otherwise, the whole system would fail. In this respect, they also manage their account and session keys which are used to staking, resource rental, governance, consensus, and security. However, if a validator is compromised then it can lead to a complete loss of funds of this validator. Therefore, a more secure and robust key management architecture (preferably in a distributed fashion) must be designed and implemented for long term purposes.

The proposed platform has independently separated the storage and the signing services from the validators and has provided a remote signing process through secure gRPC connections. This allows validators to create more robust and flexible operations, while providing additional security measures against possible attacks. Hence, it creates a more resilient solution compared to all other existing solutions, and in case of a compromise or uptime issues of the validator, Stkr can easily migrate to another validator without affecting users’ funds.


### Project Details
* An overview of the technology stack to be used
  * **Blockchain**: Rust/Substrate/Cumulus/Docker

### Ecosystem Fit

Ankr also aims to provide staking services for Polkadot. Ankr (https://eth2.ankr.com/) achieves staking services in Ethereum 2.0 with providing more than 1000 validators. The underlying signing and slashing protection mechanism have been successfully achieved in Etherum 2.0. However, some interfaces under the substrate modules are available to implement remote signing but the modules are empty and have not been implemented yet. Therefore, it is crucial to implement remote signing protocol which delegates all signing to a remote service. With this proposal, we aim to provide a service to prevent exposing private keys to Polkadot validators while validating remotely.

### Techical Discussions

First of all, we will define API specifications for remote signing ans slashing protections. Then, for API services, we will create proto contract and implement it in substrate codebase and finally create MR for the Polkadot community.

* **Remote Signing**

We plan to implement this proposal similar to Ethereum 2.0 staking service (i.e., Prysm). For each signing algorithm, a protocol buffer contract with methods for listing public keys and signing will be implemented. Still, Polkadot supports three different signature algorithms and we need to repeat these methods for every crypto type, hence we should have at least 6 methods for remote signing.

Following proto methods in RemoteKeystore service would be implemented:

```
service RemoteKeystore {
  rpc Sr25519PublicKeys(Sr25519PublicKeysRequest) returns (Sr25519PublicKeysReply);
  rpc Sr25519GenerateNew(Sr25519GenerateNewRequest) returns (Sr25519GenerateNewReply);
  rpc Sr25519VrfSign(Sr25519VrfSignRequest) returns (Sr25519VrfSignReply);
  rpc Ed25519PublicKeys(Ed25519PublicKeysRequest) returns (Ed25519PublicKeysReply);
  rpc Ed25519GenerateNew(Ed25519GenerateNewRequest) returns (Ed25519GenerateNewReply);
  rpc EcdsaPublicKeys(EcdsaPublicKeysRequest) returns (EcdsaPublicKeysReply);
  rpc EcdsaGenerateNew(EcdsaGenerateNewRequest) returns (EcdsaGenerateNewReply);

  /* do we need `insert_unknown`, `supported_keys` and `keys` methods to be implemented? */

  rpc SignWithAny(SignWithAnyRequest) returns (SignWithAnyReply);
  rpc SignWith(SignWithRequest) returns (SignWithReply);
  rpc SignWithAll(SignWithAllRequest) returns (SignWithAllReply);
}
```
* **Slashing Protection**

To add slashing prevention we also need to pass payload details into backend. By default, the signing method passes only one message with public key, therefore we need to implement an additional signing method that supports payload and use it for signing. However, it should also be implemented in Polkadot codebase directly (i.e., not in Substrate).

Polkadot supports next signing payloads:

* **Seconded** (A statement that a validator seconds a candidate) - big structure with a lot of fields contains information about block and other things

* **Valid** (A statement that a validator has deemed a candidate valid) - it is just a 256 bit hash

* **Invalid** (A statement that a validator has deemed a candidate invalid) - it is also 256 bit hash

Slashing cases:

* **Level 1:** The validator does not pass the health check for the whole epoch (which lasts 6 hours). As a result, the validator is kicked from the current set of validators and can be punished for up to 0.1% of the stake.

* **Level 2:** Babe produces two or more blocks for the same slot. If a large number of validators go offline along with the culprit. As a result, the validator is marked as inactive for the current era (which lasts for 48 hours) and a penalty of up to 1% of the stake is taken.

* **Level 3:** Grandpa signs multiple votes in the same round or on different chains. There is a concurrent equivocation (several validator’s Babe produces multiple blocks for the same slot). As a punishment stake of up to 10% is taken along with removing the validator from the active list in the current era and from all the nominators’ lists of trusted candidates.

* **Level 4:** Misconduct that poses serious security or monetary risk to the system, or mass collusion. Punishment repeats the third level, but with more stake penalized (up to 100%).

Following an example of message buffer would be used for protection:

```
message RemoteKeystorePayload {
  /* TODO: "we should also support signing payload" */
}

message SignWithAnyRequest {
  string key_type = 1; /* 4 bytes string */
  string crypto_type = 2; /* might be `sr25519`, `ed25519` or `ecdsa` */
  repeated bytes public_keys = 3; /* 32-bytes SR/ED/EC public key */
  bytes message = 4; /* raw message to be signed */
  RemoteKeystorePayload payload = 5;
}
```

## Team :

### Team members
* Stanley Wu (Lead)
* Dr. Suleyman Kardas (Advisory)
* Dmitry Savonin (Software Architect)
* Felipe Faria (Software Developer)
* Daniel Ichshuk (Software Developer)
* Khasan Khafizov (Software Developer)

### Contact
* **Contact Name:** Stanley Wu
* **Contact Email:** stanley@ankr.com
* Website: https://eth2.ankr.com/

### Legal Structure
* **Registered Address:** 609 Mission St 2nd floor, San Francisco, CA 94105, United States
* **Registered Legal Entity:** Ankr.com

### Team LinkedIn Profiles
* **Stanley Wu:** https://www.linkedin.com/in/stanley-w-5714a4163/
* **Suleyman KARDAS:** https://www.linkedin.com/in/suleyman-kardas-76a23711/
* **Dmitry Savonin:**  https://www.linkedin.com/in/dmitry123/
* **Felipe Faria :** https://www.linkedin.com/in/felipe-faria-28371637/
* **Daniel Ichshuk :**  https://www.linkedin.com/in/danielimkk/
* **Khasan Khafizov:**  https://www.linkedin.com/in/khafizov-khasan/

### Team Code Repos
* https://github.com/Ankr-network/stkr-polkadot-signer

## Development Roadmap :nut_and_bolt:

### Overview
* **Total Estimated Duration:** 2.5 months
* **Full-time equivalent (FTE):**  10 FTE
* **Total Costs:** 30000 USDT

### Milestone 1 — Implementation Design Documents for the Whole architecture
* **Estimated Duration:** 1/2 month
* **FTE:**  1.5
* **Costs:** 4500 USDT

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | Providing a specification which covers all the technical requirements and its limitations |
| 0c. | Documentation | Providing an architectural design |
| 0d. | Documentation | Defining all the required functions for remote signing in gRPC proto |

### Milestone 2 — Implementation for Remote Signing Services on Parachains (for both internal Testnet and Kusama)
* **Estimated Duration:** 2 month
* **FTE:**  6
* **Costs:** 18000 USDT

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | Code | Providing a crypto library that supports ECDSA, Ed25519, and sr25519 signature algorithms |
| 0b. | Code | Providing a remote server that gives both signing services and slashing protection mechanisms |

### Milestone 3 — Deployment and Test
* **Estimated Duration:** 1 month
* **FTE:**  2.5
* **Costs:** 7500 USDT

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | Code+Documentation | Running a test parachain with multiple validators on the same remote signing server|


## Future Plans
* We will provide a threshold based signature mechanism for remote signing procedures.

## Additional Information :heavy_plus_sign:

Possible additional information to include:
* What work has been done so far?

  We have implemented remote signing and slashing protection for ETH 2.0.

* Are there are any teams who have already contributed (financially) to the project?

  No

* Have you applied for other grants so far?

  No
