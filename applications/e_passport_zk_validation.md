# W3F Grant Proposal

- **Project Name:** e-Passport ZK Validation
- **Team Name:** [TDSoftware](https://www.tdsoftware.de/)
- **Payment Address:** 0x8Db0972d9F40357526B879A002d60CCf6B4a8882¸
- **Level:** 3



## Project Overview

This application responds to the [RFP: e-Passport ZK Validation] (https://github.com/w3f/Grants-Program/blob/master/rfps/epassport-zk-validation.md).


### Overview

The issue of verifying identities on-chain and providing proof-of-personhood is a challenging one.

The e-Passport is a standardized solution to identify people electronically in the physical world. 
On the other hand, zero-knowledge describes confirming identity without knowing details about personal data.

The goal of the e-Passport Zero-Knowledge (ZK) Validator is to combine both technologies and enable zero-knowledge identity validation on-chain. E-Passport information can be retreived via a NFC reader app, uploaded to the blockchain thru a Web3 client and anonymised and validated by an on-chain validator. 

This project is divided into three different phases. The first one covers research and a PoC implementation for the NFC reader, the DSO upload and validation logic. In the second phase we will replace the personal data on-chain with zero-knowledge proofs. The personal data (DSO) will be checked beforehand against a Public Key Directory (CSCA). In the last step features will be added, that allow interaction with the blockchain for different use cases. 


### Project Details

In a first phase detailed research is needed to check the specifications of data given by e-Passports. The Document Security Object (DSO) and Document Signer Certificate (DSC) on an e-Passport can be verified against a Country Signing Certificate Authority (CSCA). The main concept here is public key cryptography. So the idea is to have the public keys from the CSCAs on-chain (root) and be able to verify the e-Passport information. 

Whenever a user is uploading e-passport information, a pallet implementation checks the validity of the given DSO. If valid, the data will be stored on chain at the requested account. As the CSCA is stored on-chain too, no off-chain workers are necessary. 

To receive valid DSOs, a NFC reader implementation is necessary. Therefore a native mobile app will be implemented for testing purpose.
The first phase will include a proof of concept (PoC) implementation of all critical parts.

![](https://tdsoftware-dev.de/e-passport/e-passport-flow.png)

In a second phase the final pallet implementation and Web3 client application will be developed. The final zero-knowledge proof implementation will take place and offers proof-of-personhood in different ways without storing the actual personal information on-chain.

Therefore various cryptograhpic proofs will be created whenever DSOs are uploaded. Instead of the personal data, the cryptograhpic proofs will be stored on chain. The cryptograhpic proofs will be based on different combinations of the users data from the e-Passport. E.g. first name, last name and birth date. This provides the flexibility to implement serveral features in phase 3 of the project.

The Web3 client application will be expanded with a basic UI to read and upload e-Passport information. The client app will be a combination of native components, to have access to all native NFC reader features, and an embedded web application to use the polkadot{.js} framework.

In the third phase, the on-chain implementation will be extended with more features. The following features should be implemented:
* Data belonging to expired e-Passports should be deleted automatically.
* Account owners should be able to overwrite existing e-Passport information with a new DSO.
* A search functionality will be implemented to search an account by DSO.
* The pallet implementation should detect duplicates and avoid another upload of the same e-Passport to a different account.
* The Public Key Directory (CSCA) on-chain should be updated automatically.
* On-chain logic can be called to verify account data. E.g. entering account address, first name, last name and birthdate to check if the data corresponds to the accounts DSO.


### Ecosystem Fit

The pallet implementation and Web3 client app code will be open source and provided to the community. All code will be well documented to support other developers.
All substrate based chains should be able to integrate the pallet and so on interact with the Web3 client too.


#### Technology Stack 

Blockchain
- Substrate
- Rust

Web3 Client
- polkadot{.js}
- Vue.js with Vuex and the Vue Router
- TypeScript
- webpack
- Babel - for backward compatibility in older Browsers
- Jest - for unit tests
- ESLint
- SASS (SCSS)

Native Mobiles App
- Swift
- Kotlin



## Team :busts_in_silhouette:

### Team members

- Sascha Dobschal
- Antonio Yang
- Christian Trümper
- Lasse Linnamäki
- Markus Fitzner

The team setup might change depending on the availability at TDSoftware. With 40+ employees, TDSoftware has various developers that might contribute to the project. In all probability the members listed above will attend.

### Contact

- **Contact Name:** Sascha Dobschal
- **Contact Email:** s.dobschal@tdsoftware.de


### Legal Structure

- **Registered Address:** Schlossgasse 20, 07743 Jena, Germany
- **Registered Legal Entity:** TDSoftware GmbH


### Team's experience
We have years of experience bringing ideas to life with a user-centered focus using blockchain and mobile technology. We have worked closely with many customers to implement their solutions and have already gained experience with blockchain technologies.
Our most relevant projects are, among others:
- SubIdentity (W3F Grant), Identity Directory for Substrate Chains
- Exchange for trading digital assets (Customer is a Top 200 Token of CMC)
- Token Swap WebApp (Customer is a Top 200 Token of CMC)
- [Blockchain, NFT Pallets & App](https://artists.niftymarket.com/) (In Development)

We look forward to contributing to the web3 ecosystem with an open-source project next.


### Team Code Repos

Source code will be in:
- https://github.com/TDSoftware

Team profiles:
- https://github.com/dobschal
- https://github.com/yanganto
- https://github.com/markusdent
- https://github.com/lasse78
- https://github.com/Christian-Truemper
  

### Team LinkedIn Profiles

- https://www.linkedin.com/company/tdsoftware-gmbh/mycompany/
- https://www.linkedin.com/in/dobschal/



## Development Status :open_book:

[RFP]

A concept and solution draft was created as part of this application and can be found in the Project Details chapter. 



## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 9 months
- **Full-Time Equivalent (FTE):**  3
- **Total Costs:** 570000 DAI

### Milestone 1 — Research and PoC implementation

- **Estimated duration:** 3 month
- **FTE:**  3
- **Costs:**  190000 DAI

After a first research, the PoC implementation will be developed. The goal of milestone 1, is a fully working round trip (except the zero-knowledge logic): reading an e-Passport, uploading it on-chain, verifying the DSO against CSCA.

 Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 / GPLv3 / MIT / Unlicense |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a developer can re-use the implementation. |
| 0c.    | Testing |    Core functions will be covered by unit tests as far as reasonably applicable to ensure functionality and robustness. In the documentation, we will describe how to run these tests. |
| 1. | Research | Research about CSCA verification process needs to be done. Furthermore research on how to read an e-Passport with a NFC reader is necessary. |  
| 2. | Implement NFC Reader | To get real DSOs from e-Passports, a NFC Reader app will be developed. |
| 3. | Implement DSO Upload | The pallet implemenation will be added, that allows DSO uploads. |  
| 4. | Implement DSO Verification| The pallets logic will be extended to be able to verify DSOs against the CSCA. | 

### Milestone 2 - Zero-Knowledge Functionality and Client UI

- **Estimated Duration:** 3 month
- **FTE:**  3
- **Costs:** 190000 DAI

The goal of the second milestone is a ready to use mobile application to read and upload e-Passports on-chain. The replacement of the real user data with zero-knowledge proof will be done in this milestone too.

 Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 / GPLv3 / MIT / Unlicense |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a developer can re-use the implementation. |
| 0c.    | Testing |    Core functions will be covered by unit tests as far as reasonably applicable to ensure functionality and robustness. In the documentation, we will describe how to run these tests. |
| 1. | Client UI | UI will be designed and developed that allows users to read and upload e-Passports. |  
| 2. | Zero-knowledge logic | The pallet implementation will be extended to use zero-knowledge proofs instead of the real user data |

### Milestone 3 - Features and APIs 

- **Estimated Duration:** 3 month
- **FTE:**  3
- **Costs:** 190000 DAI

The goal of the third milestone is to have several features and APIs that cover potential use cases.

 Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 / GPLv3 / MIT / Unlicense |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a developer can re-use the implementation. |
| 0c.    | Testing |    Core functions will be covered by unit tests as far as reasonably applicable to ensure functionality and robustness. In the documentation, we will describe how to run these tests. |
| 1. | Delete & Overwrite Logic | The e-Passport information can be deleted or overwritten by the account owner. Expired e-Passports will be deleted automatically. |  
| 2. | Avoid Duplicates | Permit users to upload an e-Passport only once. |
| 3. | Verification Logic | Users can enter data for an account and check if the values match. |
| 4. | Search by DSO | With an e-Passport given, user can search for the corresponding account. |
| 5. | Auto Update CSCA | The public key directory should be updated automatically. |



## Additional Information :heavy_plus_sign:

This is our second application for an open-source project to innovate the web3 Ecosystem.
