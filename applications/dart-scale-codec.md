# Open Grant Proposal

> This document is referenced in the terms and conditions and therefore needs to contain all the required information. Don't remove any of the mandatory parts presented in bold letters or as headlines! See the [Open Grants Program Process](https://github.com/w3f/Open-Grants-Program/blob/master/README_2.md) on how to submit a proposal.

* **Project:** dart-scale-codec 
* **Proposer:** [NBLTrust](https://github.com/nbltrust)
* **Payment Address:** 1LcdMwwiG1Vt8UmMqUk1RLAd2MUpbeoyba 



## Project Overview :page_facing_up: 
A Dart implementation of  the SCALE (Simple Concatenated Aggregate Little-Endian) Codec. We are building a wallet app called [**Jadewallet**](https://github.com/w3f/General-Grants-Program/pull/338) which will support DOT/KSM, this project is a component of it.

**Jadewallet** is making a new paradigm of self-custody, which uses **multi-party computation (MPC)** and **threshold signature scheme (TSS)** technology. **MPC based Threshold Signatures** gives clients total autonomy over whose digital assets and multisignature ability with keyless cryptographic security.

We are building **Jadewallet** with Flutter, although there are Rust, C++ implementations of the SCALE Codec, we think the Dart implementation is the first choice.  And we hope the project will also help the Polkadot developer community.



## Team :busts_in_silhouette:

### Team members
* Alex Xu
* Hilbert Zhou

### Team Website	
* https://www.nbltrust.com/#/en/team

### Legal Structure 
Tuolian (Shanghai) Co., Ltd.

### Team's experience
- Alex Xu: Co-Founder and CTO in NBLTrust for 4 years, core developer in our three custody products. IT Consultant in IBM for 9 years. **Polkadot Ambassador China**. Worked as TA in two training courses hold by Parity in China.
- Hilbert Zhou: 2 years ops experience on AIX, websphere and Power. 7+ years backend service development experience including HFT, CTA and blockchain.

Founded in 2017 and headquartered in Shanghai, China, Tuolian(Shanghai) Co., Ltd. is a high-tech company specializing in the field of digital asset custody.

Tuolian has secure custody softwares based on self-developed high-strength classical cryptographic algorithm, hot & cold wallet and hardware wallet products that meet the bank's security level requirements, to provide overall solutions and related technical services for digital asset custody.

Tuolian provides a full range of custody services for well-known companies or organizations such as Math Wallet and HashQuark.

### Team Code Repos
* https://github.com/nbltrust
* https://github.com/alexxuyang



## Development Roadmap :nut_and_bolt: 

* **Total Estimated Duration:** 1 month
* **Full-time equivalent (FTE):**  1.5
* **Total Costs:** 0.85 BTC.

### Milestone 1 — Dart Implementation 
* **Estimated Duration:** 1 month
* **FTE:**  1.5
* **Costs:** 0.85 BTC

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | Delivering document in dart supported format, and publish the package to pub.dev |
| 0c. | Testing Guide | Delivering Unit tests.<br/>Delivering an example of fetching and analyzing binary metadata from chain's runtime.<br/>Delivering an example of sending extrinsics to substrate based chain. |
| 1. | Implementing the Library | Delivering a library that support converting between object/json/binary of following types: MetadataV11 & 12, u8, u16, u32, u64, u256, bool, fixed length array, dynamic length array, bytes, address, String, Compact, Hash256, Balance, Extrinsic, Generalized structure, Generalized Enum |



## Future Plans
We are planning to make our dart-substrate-sdk open source.



## Additional Information :heavy_plus_sign: 
### Are there are any teams who have already contributed (financially) to the project?

No.

### Have you applied for other grants so far?

[**Jadewallet**](https://github.com/w3f/General-Grants-Program/pull/338)
