# Open Grant Proposal

> This document is referenced in the terms and conditions and therefore needs to contain all the required information. Don't remove any of the mandatory parts presented in bold letters or as headlines! See the [Open Grants Program Process](https://github.com/w3f/Open-Grants-Program/blob/master/README_2.md) on how to submit a proposal.

* **Project Name:** Remote Signing and Slashing Protection
* **Team Name:** RSSP
* **Payment Address:** 0x146eE71e057e6B10eFB93AEdf631Fde6CbAED5E2 (ETH)

*The above combination of your GitHub account submitting the application and payment address will be your unique identifier during the program. Please keep them safe.*

## Project Overview :page_facing_up:

In this proposal, we aim to design and implement a remote signing process within the Polkadot codebase client for ECDSA, EdDSA, and BLS signature algorithms for Parachains (including a dedicated key management service to be used with the remote signing module). We also aim to provide a remote service which aims to prevent slashings and protect stakers’ funds.

### Overview

The validators play a crucial role on PoS networks due to operating stable, reliable, consistent, and secure operations of their nodes. Therefore, providing an ultimate security is of utmost important, otherwise, the whole system would fail. In this respect, they also manage their account and session keys which are used to staking, resource rental, governance, consensus, and security. However, if a validator is compromised then it can lead to a complete loss of funds of this validator. Therefore, a more secure and robust key management architecture (preferably in a distributed fashion) must be designed and implemented for long term purposes.

The proposed platform has independently separated the storage and the signing services from the validators and has provided a remote signing process through secure gRPC connections. This allows validators to create more robust and flexible operations, while providing additional security measures against possible attacks. Hence, it creates a more resilient solution compared to all other existing solutions, and in case of a compromise or uptime issues of the validator, Stkr can easily migrate to another validator without affecting users’ funds.

We have planned to implement the following architecture for Stkr's Polkadot staking service that utilizes remote signing services:

![Overall Architecture](https://firebasestorage.googleapis.com/v0/b/test-sensor-veri.appspot.com/o/Polkadot%20Design.png?alt=media&token=5ea6c795-52b1-48fd-aabe-22cda97d383e)

* **Key Management:** Keys are securely and remotely generated and stored in a distributed manner.
* **Key Agent:** It securely storer partial keys and partially signs incoming data.
* **Sidecar:** It is an agent that initiate the Polkadot validator node with credentials, url and etc. 
* **Sidecar Management:** It manages sidecar, their task and keys
* **Sidecar Gateway:** It routes sidecar in a secure way.
* **Slashing Prevention Service:** Check for whether the incoming data cause slashing or not. If not update the state of the node.
* **Message Bus:** Event streaming platform for high-performance data pipelines.


In this proposal, we will provide similar architecture for remote server that handles signing and protection against slashing.
### Project Details
* An overview of the technology stack to be used
  * **Blockchain**: Polkadot Codebase.  

### Ecosystem Fit

Ankr also aims to provide staking services for Polkadot. Ankr (https://eth2.ankr.com/) achieves staking services in Ethereum 2.0 with providing more than 1000 validators. The underlying signing and slashing protection mechanism have been successfully achieved in Etherum 2.0. However, some interfaces under the Polkadot codebase modules are available to implement remote signing but the modules are empty and have not been implemented yet. Therefore, it is crucial to implement remote signing protocol which delegates all signing to a remote service. With this proposal, we aim to provide a service to prevent exposing private keys to Polkadot validators while validating remotely.

### Open Source/License

This work is licensed under the Apache License 2.0, which means that you are free to get and use it for commercial and non-commercial purposes.

### Technical Discussions

First, we will define API specifications for remote signing ans slashing protections. Then, for API services, we will create proto contract and implement it in Polkadot codebase and finally create MR for the Polkadot community.

* **Why we need Payload**

The Polkadot nodes have already provided the local slashing prevention. However, in case of using container such as Kubernetes for making high availability of the nodes, this protection would not be sufficient because during restart of the node, two images of the same node can be available and may sign the same or different data that would cause slashing. Therefore, we propose to use remote signing services where all incoming data are checked against slashing status before being signed. In this respect, we need to provide the payload data that generates the signing data. Namely, for each signing request, the necessary metadata that generates the request should also be given. This data will also be stored in a persistence database for future slashing prevention.  Before storing the data, a microservice checks that whether signing this data causes slashing or not. For example, (i) the health check for the whole epoch. (ii) Check that producing two or more blocks for the same slot.  (iii) Check that signing multiple votes in the same round or on different chains. Although Polkadot nodes themselves have protection mechanisms against slashing, our proposal brings additional security protection against that kind of issue.


* **Remote Signing Service**

We plan to implement this proposal similar to Ethereum 2.0 staking service (i.e., Prysm). For each signing algorithm, a protocol buffer contract with methods for listing public keys and signing will be implemented. Still, Polkadot supports three different signature algorithms and we need to repeat these methods for every crypto type, hence we should have at least 6 methods for remote signing.

Following proto methods in RemoteKeystore service would be implemented:

```
syntax = "proto3";
package parity.polkadot.signer;

option go_package = ".;proto";

enum RemoteKeystoreError {
  REMOTE_KEYSTORE_ERROR_UNKNOWN = 0;
  REMOTE_KEYSTORE_ERROR_KEY_NOT_SUPPORTED = 1;
  REMOTE_KEYSTORE_ERROR_PAIR_NOT_FOUND = 2;
  REMOTE_KEYSTORE_ERROR_VALIDATION_ERROR = 3;
  REMOTE_KEYSTORE_ERROR_UNAVAILABLE = 4;
  REMOTE_KEYSTORE_ERROR_OTHER = 5;
}

/**
 * Possible Key Types:
 * - /// Key type for Babe module, built-in. Identified as `babe`.
 * - pub const BABE: KeyTypeId = KeyTypeId(*b"babe");
 * - /// Key type for Grandpa module, built-in. Identified as `gran`.
 * - pub const GRANDPA: KeyTypeId = KeyTypeId(*b"gran");
 * - /// Key type for controlling an account in a Substrate runtime, built-in. Identified as `acco`.
 * - pub const ACCOUNT: KeyTypeId = KeyTypeId(*b"acco");
 * - /// Key type for Aura module, built-in. Identified as `aura`.
 * - pub const AURA: KeyTypeId = KeyTypeId(*b"aura");
 * - /// Key type for ImOnline module, built-in. Identified as `imon`.
 * - pub const IM_ONLINE: KeyTypeId = KeyTypeId(*b"imon");
 * - /// Key type for AuthorityDiscovery module, built-in. Identified as `audi`.
 * - pub const AUTHORITY_DISCOVERY: KeyTypeId = KeyTypeId(*b"audi");
 * - /// Key type for staking, built-in. Identified as `stak`.
 * - pub const STAKING: KeyTypeId = KeyTypeId(*b"stak");
 * - /// Key type for equivocation reporting, built-in. Identified as `fish`.
 * - pub const REPORTING: KeyTypeId = KeyTypeId(*b"fish");
 * - /// A key type ID useful for tests.
 * - pub const DUMMY: KeyTypeId = KeyTypeId(*b"dumy");
 */

message RemoteKeystoreSignature {
  bytes signature = 1;
  string crypto_type = 2; /* type of crypto, might be `sr25519`, `ed25519` or `ecdsa` */
  bytes public_key = 3; /* 32-bytes SR/ED/EC public key */
  RemoteKeystoreError error = 4;
}

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

message Sr25519PublicKeysRequest {
  string key_type = 1; /* 4 bytes string */
}
message Sr25519PublicKeysReply {
  repeated bytes public_keys = 1; /* 32-bytes SR public keys */
}

message Sr25519GenerateNewRequest {
  string key_type = 1; /* 4 bytes string */
  string seed = 2; /* [optional] */
}
message Sr25519GenerateNewReply {
  bytes public_key = 1; /* 32-bytes SR public key */
  RemoteKeystoreError error = 2;
}

message Sr25519VrfSignRequest {
  string key_type = 1; /* 4 bytes string */
  bytes public_key = 2; /* 32-bytes SR public key */
  message VrfTranscriptValue {
    oneof value {
      bytes bytes_value = 100;
      uint64 uint64_value = 101;
    }
  }
  message VrfTranscriptData {
    string label = 1; /* label of data, like `slot number` or `chain randomness` */
    repeated VrfTranscriptValue values = 2;
  }
  VrfTranscriptData transcript_data = 3;
}
message Sr25519VrfSignReply {
  message VrfSignature {
    bytes output = 1; /* 32-bytes VRF output */
    bytes challenge = 2; /* 32-bytes challenge */
    bytes proof = 3; /* 32-bytes Schnorr proof */
  }
  VrfSignature signature = 1;
  RemoteKeystoreError error = 2;
}

message Ed25519PublicKeysRequest {
  string key_type = 1; /* 4 bytes string */
}
message Ed25519PublicKeysReply {
  repeated bytes public_keys = 1; /* 32-bytes ED public keys */
}

message Ed25519GenerateNewRequest {
  string key_type = 1; /* 4 bytes string */
  string seed = 2; /* [optional] */
}
message Ed25519GenerateNewReply {
  bytes public_key = 1; /* 32-bytes ED public key */
  RemoteKeystoreError error = 2;
}

message EcdsaPublicKeysRequest {
  string key_type = 1; /* 4 bytes string */
}
message EcdsaPublicKeysReply {
  repeated bytes public_keys = 1; /* 32-bytes EC public keys */
}

message EcdsaGenerateNewRequest {
  string key_type = 1; /* 4 bytes string */
  string seed = 2; /* [optional] */
}
message EcdsaGenerateNewReply {
  bytes public_key = 1; /* 32-bytes EC public key */
  RemoteKeystoreError error = 2;
}

message SignWithAnyRequest {
  string key_type = 1; /* 4 bytes string */
  string crypto_type = 2; /* might be `sr25519`, `ed25519` or `ecdsa` */
  repeated bytes public_keys = 3; /* 32-bytes SR/ED/EC public key */
  bytes message = 4; /* raw message to be signed */
  RemoteKeystorePayload payload = 5;
}
message SignWithAnyReply {
  RemoteKeystoreSignature signature = 1;
}

message SignWithRequest {
  string key_type = 1; /* 4 bytes string */
  string crypto_type = 2; /* might be `sr25519`, `ed25519` or `ecdsa` */
  bytes public_key = 3; /* 32-bytes SR/ED/EC public key */
  bytes message = 4; /* raw message to be signed */
  RemoteKeystorePayload payload = 5;
}
message SignWithReply {
  RemoteKeystoreSignature signature = 1;
}

message SignWithAllRequest {
  string key_type = 1; /* 4 bytes string */
  string crypto_type = 2; /* might be `sr25519`, `ed25519` or `ecdsa` */
  repeated bytes public_keys = 3; /* 32-bytes SR/ED/EC public key */
  bytes message = 4; /* raw message to be signed */
  RemoteKeystorePayload payload = 5;
}
message SignWithAllReply {
  repeated RemoteKeystoreSignature signatures = 1;
}
```
* **Slashing Protection Service**

To add slashing prevention we also need to pass payload details into backend. By default, the signing method passes only one message with public key, therefore we need to implement an additional signing method that supports payload and use it for signing. However, it should also be implemented in Polkadot codebase directly (i.e., not in Substrate). 

The payloads for signing have been already implemented in Polkadot codease sources and Polkadot does sign_with method calls. We plan to modify substrate by adding additional sign_with_payload method then we will also modify polkadot sources as well.


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
  /* Babe Messages */
  message BlockProposal {
    bytes parent_hash = 1; /* bytes32 */
    string number = 2; /* uint256 */
    bytes state_root = 3; /* bytes32 */
    bytes extrinsics_root = 4; /* bytes32 */
    bytes digest = 5; /* ? */
  }
  /* Grandpa Messages */
  message GrandpaPreVote {
    bytes target_hash = 1;
    bytes target_number = 2;
  }
  message GrandpaPreCommit {
    bytes target_hash = 1;
    bytes target_number = 2;
  }
  message GrandpaPrimaryPropose {
    bytes target_hash = 1;
    bytes target_number = 2;
  }
  message GrandpaMessage {
    oneof message {
        GrandpaPreVote pre_vote = 100;
        GrandpaPreCommit pre_commit = 101;
        GrandpaPrimaryPropose primary_propose = 102;
    }
    uint64 round_number = 1;
    uint64 set_id = 2;
  }
  /* Validator Messages */
  message AvailabilityBitfield {
    bytes bits = 1;
  }
  message CommittedCandidateReceipt {
    message CandidateDescriptor {
      uint32 para_id = 1;
      bytes relay_parent = 2;
      bytes collator = 3;
      bytes persisted_validation_data_hash = 4;
      bytes pov_hash = 5;
      bytes erasure_root = 6;
      bytes signature = 7;
      bytes para_head = 8;
    }
    CandidateDescriptor descriptor = 1;
    message CandidateCommitments {
      repeated bytes upward_messages = 1;
      message OutboundHrmpMessage {
        uint32 recipient = 1;
        bytes data = 2;
      }
      repeated OutboundHrmpMessage horizontal_messages = 2;
      bytes new_validation_code = 3;
      bytes head_data = 4;
      uint32 processed_downward_messages = 5;
      uint32 hrmp_watermark = 6;
    }
    CandidateCommitments commitments = 2;
  }
  message CandidateHash {
    bytes hash = 1;
  }
  oneof message {
    AvailabilityBitfield availability_bitfield = 100;
    CommittedCandidateReceipt seconded = 101;
    CandidateHash valid = 102;
    CandidateHash invalid = 103;
  }
  uint32 session_index = 1;
  bytes parent_hash = 2;
  uint32 validator_index = 3;
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

### Milestone 1 — Implementation for Remote Signing Services and Deployment and Test
* **Estimated Duration:** 2.5 month
* **FTE:**  10
* **Costs:** 30000 USDT

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. |	License| License	Apache 2.0 / MIT / Unlicense|
| 0b. | Documentation | Running a test parachain with multiple validators on the same remote signing server|
| 0c. | Testing Guide | The code will have unit-test coverage (min. 70%) to ensure functionality and robustness. In the guide we will describe how to run these tests | 
| 0d. | Article/Tutorial | We will write an article or tutorial that explains the work done as part of the grant.
| 0e. | Code | Proto files that will be used to in both Polkadot codebase and Remote server.|
| 0f. | Code | Crypto service that imlements (a) with the use of Polkadot crypto library (ECDSA, EDDSA, sr25519).|
| 0g. | Code | Providing a remote server that gives both signing services and slashing protection mechanisms. This server will contain several microservices that consume metadata and do their operation. On the top of them, Kafka will be used to handle large number request and pipelining.|


## Future Plans
* We will provide a threshold based signature mechanism for remote signing procedures. Moreover, we may extend keymanager part to use HSMs in order for providing high level of security.

## Additional Information :heavy_plus_sign:

Possible additional information to include:
* What work has been done so far?

  We have implemented remote signing and slashing protection for ETH 2.0.

* Are there are any teams who have already contributed (financially) to the project?

  No

* Have you applied for other grants so far?

  No
