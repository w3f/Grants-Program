# e-Passport ZK Validation

- **Team Name:** Talentica Software
- **Payment Address:** 0x8bd54ec34A35f3A2f668A33d9578b5C3A6b730dE
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 3

## Project Overview :
Proposal for the RFP titled [e-Passport ZK Validation](https://github.com/w3f/Grants-Program/blob/master/docs/RFPs/Open/epassport-zk-validation.md).

### Overview
The issue of verifying identities on-chain and providing proof of personhood is a challenging one.

e-Passport provides a way to electronically identify individuals. Meanwhile, zero-knowledge technology offers a means to confirm identity without revealing personal data. The e-Passport Zero-Knowledge (ZK) validator project aims to provide zero-knowledge identity validation on the blockchain. 

The NFC reader app will read e-Passport information, which can be uploaded to the blockchain via a Web3 client and anonymized and validated by an on-chain validator.

The project consists of three milestones. The first milestone involves research and a PoC implementation for the NFC reader, DSO upload, and validation logic. The DSO will be validated against a master list of CSCA certificates. In the second milestone, personal data on-chain will be replaced with zero-knowledge proofs. In the final step, additional features will be added to support updates to the master list of certificates.

With this proposal we are targetting for the Milestone 1 of the RFP.

### Project Details
The project aims to verify the data specifications of e-Passports through detailed research. To begin, sample ePassport data will be collected to analyze its structure and content, which will help determine the necessary data to be stored on-chain for verification purposes.

The verification process will involve using public key cryptography to check the Document Security Object (DSO) and Document Signer Certificate (DSC) against the Country Signing Certificate Authority (CSCA). Once the sample data is analyzed, further verifications will be determined. The project proposes storing the public keys of CSCAs on-chain (root) to enable e-Passport information verification.

To validate the DSO of e-passport information uploaded by users, an ink smart contract implementation will be utilized. If valid, the data will be stored on-chain in the requested account, and since the CSCA will also be stored on-chain, there will be no need for off-chain workers.

An NFC reader implementation will be required to read data from an ePassport. This NFC reader will be part of a web3 client app, most likely a native mobile app, which will submit the read data to the ink smart contract for storage. The first phase of the project will focus on implementing a proof of concept (PoC) for all critical components. Future proposals will address the second and third milestones, which concerns with zk proof implementation and additional features.

![](https://drive.google.com/uc?id=1ukEHMtYbxjfU6pl7KhddlWZDYkrigXml)

### Team Members
- Amit Singh - Blockchain Developer https://github.com/iamit-singh
- Ankit Wasnik - Blockchain Developer https://github.com/Ankitwasnik
- Pankaj Mendki -Blockchain expert
- Debasish Ray Chawdhuri - Blockchain and Cryptography Researcher
- Nikhil Desai - Blockchain Developer https://github.com/Nikhil-Desai-Talentica

### Contact
- **Contact Name:** Amit Singh
- **Contact Email:** amit.singh1@talentica.com
- **Website:** https://www.talentica.com/

### Legal Structure
- **Registered Address:** B-7/8, Anmol Pride, Baner Road, Baner, Pune, Maharashtra 411045, India
- **Registered Legal Entity:** Talentica Software India Pvt. Ltd.

### Team Code Repos
- [substrate-node-template-benchmarking](https://github.com/Nikhil-Desai-Talentica/substrate-node-template-benchmarking/tree/contracts-benchmarking)
- [provenance-usecase](https://github.com/TalenticaSoftware/provenance-usecase)
- [simpleblockchain](https://github.com/Talentica/simpleblockchain)

### Team LinkedIn Profiles (if available)
- Amit Singh - https://www.linkedin.com/in/amit-singh-3637a898/
- Ankit Wasnik - https://www.linkedin.com/in/ankit-wasnik-834858143/
- Debasish Ray Chawdhuri - https://www.linkedin.com/in/debasish-ray-chawdhuri-4b444316/
- Pankaj Mendki - https://www.linkedin.com/in/pankaj-mendki-8576363/
- Nikhil Desai - https://www.linkedin.com/in/nikhil-desai-1209a38b/

## Development Status :
In our intitial research we found the stored data within the ePassport DSO and the required verification steps. Based on our research, below are some verification that must be done to confirm validity of an ePassport:
- EF.SOD signature verification: The structure of EF.SOD is defined as a SignedData structure and we MUST verify its signature
- DS Certificate verification: Verification of the certificate chain up to a known trusted certificate
- Certificate validity period check 
- DS certificate revocation status 
- Comparison between EF.SOD and EF.COM: Compare the content of EF.COM with EF.SOD to make sure that each DG listed in EF.SOD is also contained in EF.COM and vice versa.
- Datagroup integrity check 
- Issuing country comparison (DG1 vs. DS certificate) 

We did a simple PoC on ink smart contract for signature and certificate verification. As a part of PoC, we have verified the signature using the ink built-in ecdsa recover function. Integrated [barebones-x509](https://crates.io/crates/barebones-x509) crate to verify that a certificate is issued by the certificate authority(CA).
 
## Development Roadmap :
| Number | Objective | Time Estimate |
| -----: | --------- | -------- | 
| 1. | Research on epassports | 3 weeks | 
| 2. | Develop web3 client app | 8 weeks |
| 3. | Write ink smart contract for storing CSCA certificates on-chain | 1 week |
| 4. | Extending smart contract to accept DSO and DSC | 3 week | 
| 5. | Writing unit test cases for the smart contract & client app | 2 week |
| 6. | Deployment and end-to-end testing | 1 week |

### Overview
- **Total Estimated Duration:** 18 weeks
- **Full-Time Equivalent (FTE):**  2 
- **Total Costs:** 60,000 DAI

#### Languages & Frameworks
- Smart Contract
    - Rust
    - Ink
- Client Mobile App 
    - Platform - android, ios
    - Development framework - Ionic, React (Provisional)

## Milestones
### Milestone 1 — Transparent solution PoC on substrate
- **Estimated duration:** 18 weeks
- **FTE:** 2
- **Costs:** 60,000 DAI

Once initial research is completed, the proof-of-concept (PoC) implementation will be created. The objective of milestone 1 is to establish a complete working process that involves reading an e-Passport, uploading it onto the blockchain, and validating the Document Security Object (DSO) against the Certificate Authority Public Key (CSCA), with the exception of zero-knowledge logic.

 Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 / GPLv3 / MIT / Unlicense |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a developer can re-use the implementation. |
| 0c. | Testing Guide |    Core functions will be covered by unit tests as far as reasonably applicable to ensure functionality and robustness. In the documentation, we will describe how to run these tests. |
| 0d. | **Article** | We will publish an **article** that explains working of the app. |
| 1. | Research on epassports | Research about data stored within ePassport, DSO, DSC, sample ePassport data and the verification process. |
| 1a. | Find CSCA master list | Find out all the countries issuing epassports and their respective CSCA certificates  |
| 1b. | Research on DSO | Research on data stored within ePassport |
| 1c. | Getting sample ePassport data | Getting sample ePassport for testing and verification |
| 2. | Develop web3 client app | Develop an app to read ePassport data and submit the read data to the chain |
| 2a. | Implement NFC reader module | This module will read and process data from epasssport |
| 2b. | Implement smart contract interaction module | This module will receive data from NFC reader module and submit a transaction on chain for ePassport data verification and storage |
| 3. | Implement smart contract | The ink smart contract for storing and verifying ePassport |  
| 3a. | Storing CSCA certificates| Store master list CSCA certificates on-chain |  
| 3b. | Verify ePassport data | Perform detailed verification of ePassport DSO and the certificates within|
| 3c. | Storing ePassport DSO | Store verified DSO on chain |  
| 4. | Testing | Writing unit test cases for smart contract and client app |
| 5. | Deployment | Deployment of smart contract and mobile app |

## Future Plans
This proposal only concerns with the Milestone 1 of the RFP. After completion of this phase we will plan and prepare for the next milestones which deals with the zk proof and additional features.
