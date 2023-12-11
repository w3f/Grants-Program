# Aisland Docsig

- **Team Name:** AISLAND DAO
- **Payment Address:** 0x78A4C8624Ba26dD5fEC90a8Dc9B75B4E3D630035 USDC/Ethereum
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 1
## Project Overview :page_facing_up:

### Overview

Aisland DocSig allows to e-sign documents, exchange easily and store permanently on chain as legal proof. 
POC/MVP is available at [https://docsig.aisland.io](https://docsig.aisland.io)  
Faucet for testing: [https://testnet.aisland.io:8443](https://testnet.aisland.io:8443)  

Aisland DocSig (in short ADC) solves the problem of exchanging signed agreements and storing them permanently with legal validity.  The user can authenticate using his/her own wallet, create a blank document and edit, or clone a public template or upload a document.
ADC keeps a copy of the different drafts till the first signature is applied.  
A secret link is generated to request the signing to the counterpart.  
The workflow provide visibility on the different status of the documents: Draft, Waiting (for signing), Completed (all parties have signed), Rejected (one party rejected it).  

  
There is no e-signing documents solution in the Polkadot/Kusama echo-system, instead there are all the layers to create something better of commercial services. In the web2 world, https://docusign.com declares about 200 million paying user and > 1 billion users who used their platform. 

[Aisland Dao](https://aisland.io) is an experimental micro-nation with a small territory of 14000 square feet. Aisland is based on a deck barge floating in international waters since 22 December 2022 in the Arabian Gulf.  
The current small territory can be increased with additional barges properly interconnected.  
The main purpose of Aisland Dao is to give full sovereignty to the individual and a real place where the wider principles of freedom are  applied.  
The decentralized e-signing of documents is one of the many tools that every free and sovereign person should have the right to use.  


### Project Details

Preface:  
We have already developed a minimum viable product (MVP) that is available at [https://docsig.aisland.io](https://docsig.aisland.io). The current MVP is offering the following features:

- Dashboard to manage the workflow
- Create/Edit a document on-line using the block editor (editor.js).  
- Clone a public Template and Edit.  
- Upload a document in different formats.
- Sign the document.
- Generate unique link to allow the signing of the counterpart.
- View on-line the documents
- Delete the document in drafts
- Rejects the signature on proposed documents for signing.
Here the workflow:
![Workflow](https://github.com/aisland-dao/docsig/blob/main/img-docs/docusign-workflow.png)

Here a few screenshots:
![Dashboard](https://github.com/aisland-dao/docsig/blob/main/img-docs/docusign-dashboard.png)  
![Operations](https://github.com/aisland-dao/docsig/blob/main/img-docs/docusign-operations.png)  
![Blank Document](https://github.com/aisland-dao/docsig/blob/main/img-docs/docusign-blankdocument.png)
![Signing](https://github.com/aisland-dao/docsig/blob/main/img-docs/docusign-signing.png)  

  
The project proposal consists in adding a new set of features to make a production ready version, comparable to the best WEB2 solution offering like https://docusign.com.  Here is the list of the new features to be added:  
  
1) Standard Signatures Management to allow the user to set his own standard signature image.  
2) Signature Marker, to allow the placing of signatures on the document for a visual improvement.  
3) Document Encrytion, to manage the privacy of the documents even when saved on chain.  
4) PDF output of the signed agreement with verifiable QR code.  
5) Storage of the encrypted documents on the blockchain.  
6) Enhanced link sharing, to forward the signing link by different communication channel.
7) Multiple Counter Parties, to manage the signature of > 2 parties on the same document.
8) Enhanced templates, to manage also private templates.  

Technology Stack:
- The blockhain side is based on a custom pallet named [docsign](https://github.com/aisland-dao/aisland-node/tree/main/pallets/docsig).

- The [Dapp](https://github.com/aisland-dao/docsig) is built on HTML,CSS and vanilla javascript for the client side. It's built with Javascript/Nodejs for the Server component. It's working with Polkdatot Extension and Subwallet.

Requirements:  
- Nodejs  
- Mariadb Server  
  
The MARIADB will be used to store only the workflow data and the signed documents will be encrypted and stored on chain for permanent storage.  

### Details of the Proposal
Here is the list of deliverables new features in much more details:  

1) Standard Signature Image - Manage the setting of the standard signature image, selecting from multiple auto-generated signatures or one uploaded. The Dapp shwillould auto-generate multiple style of signatures starting from a text using cursive fonts.  
We will use a set of 50 cursive fonts to generate the signature image. A considerable selection of free cursive fonts are available here: [https://www.1001fonts.com/cursive+signature-fonts.html](https://www.1001fonts.com/cursive+signature-fonts.html).  
The upload of a scanned image in png/jpg/webp or svg format is not a challenge.  
Here is an example:
![Signature Example](https://github.com/aisland-dao/docsig/blob/main/img-docs/docusign-standardsignatures.png)  


2) Signature Marker - We will create a plugin for editor.js to mark the place where the signatures shall be placed. Once the document is signed, the selected signatures will be shown in the document.
[https://editorjs.io/](https://editorjs.io/) is a free block editor for javascript that is composable by plugins. We used such editor in the current MVP. It save the document in a clean json format.  
Here is an example:
![Signature Example](https://github.com/aisland-dao/docsig/blob/main/img-docs/docusign-signatureexample.png)  


3) Encryption - For enhanced privacy the documents and other metadata shall be encrypted as follows:
- The files will be encrypted using AES256-GCM and Chacha20 as symmetric cyphers in cascade and a random private key of 512 bit.  The symmetric private key will be encrypted by the asymmetric public key of the user. The user will be able to decrypt using his/her own asymmetric public key.
- The documents to be signed from the counter part shall be encrypted with a random private key and the same shall be encrypted with the public key of the recipient. The recipient will be able to decrypt using his/her own asymmetric private key.
- The Dapp must manage the settings of the initial asymmetric public/private keys.
- The open source library that we will use is libsodium which offers the necessary primitives:  
[https://doc.libsodium.org/](https://doc.libsodium.org/)  
[https://www.npmjs.com/package/libsodium](https://www.npmjs.com/package/libsodium)  

4) Documents Storage - We will optionally store on-chain the signed contracts. We wish to give immutability of whole document even if it's little bit more expensive. Actually the MVP is storing only the hash of the document and keeping the document in the server storage. The pallet will be modified to accept the storage of an encrypted binary blob with some limitations in size to be configured in the pallet itself.
We will add 2 functions to the current pallet: newBlob(id,documentdata), deleteBlob(id)  

5) Pdf Output - The dapp should be able to generate a contract with the visual signatures and a QR code to verify on chain the validity of the contract. This is a legal requirement to let use the document in court.  
  
6) Link Sharing - The dapp shall allow the sharing of the signing link by: email, Matrix, Whatsapp, and Telegram.  
  
7) Multiple Counter Parties - The current MVP does support only 2 signing parties, we will refactor the Dapp to manage multiple signing parties.  
  
8) Enhanced Templates - The MVP allows to select a template from a system list. We wish to allow the user to create his/her own private templates.  

### Ecosystem Fit  

- Where and how does your project fit into the ecosystem?
The proposal creates a general purpose utility for the wide public in using Substrate technology.

- Who is your target audience (parachain/dapp/wallet/UI developers, designers, your own user base, some dapp's userbase, yourself)?
Any web3 user or legala entity have to exchange contracts during the course of life.
- What need(s) does your project meet?
E-signing of documents, permanently storage and easy exchange of the same.
- Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?
We have not been able to find something similar in the echo system.
  - If so, how is your project different?
  - If not, are there similar projects in related ecosystems?
  [https://www.sign.co/](https://www.sign.co/)
  [https://www.jsign.com](https://www.jsign.com)
  [https://www.cygnature.io](https://www.cygnature.io)
  [https://www.corposign.net/](https://www.corposign.net/)

## Team :busts_in_silhouette:

### Team members

- Name of team leader
Achille Landi
- Names of team members
Samuele Landi

### Contact

- **Contact Name:** Achille Landi
- **Contact Email:** admin@aisland.io
- **Website:** [https://aisland.io](https://aisland.io)

### Legal Structure

- **Registered Address:** Unit No: 1508,DMCC Business Centre, Dubai - United Arab Emirates
- **Registered Legal Entity:** Samra Consulting dmcc

### Team's experience

Achille Landi is the lead developer of Aisland with experience in Rust and Javascript
Samuele Landi is a long term developer for secure communications and web3 projects.

### Team Code Repos

- [https://github.com/aisland-dao/aisland-node](https://github.com/aisland-dao/aisland-node)
- [https://github.com/aisland-dao/dex](https://github.com/aisland-dao/dex)
- [https://github.com/aisland-dao/docsig](https://github.com/aisland-dao/docsig)
- [https://github.com/aisland-dao/aisland-store-web-server](https://github.com/aisland-dao/aisland-store-web-server) (private repo we can give access)

Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine.

- https://github.com/poseidon-aisland
- https://github.com/samuelelandi

### Team LinkedIn Profiles (if available)

- not available
- not available


## Development Status :open_book:

We have already developed a POC/MVP with a dedicate pallet on Substrate:  
[https://github.com/aisland-dao/aisland-node/tree/main/pallets/docsig](https://github.com/aisland-dao/aisland-node/tree/main/pallets/docsig)  
  
and a Dapp:  
[https://github.com/aisland-dao/docsig](https://github.com/aisland-dao/docsig)  

An live demo is available at:  
[https://docsig.aisland.io](https://docsig.aisland.io)  


## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 2 months
- **Full-Time Equivalent (FTE):**  1.5 FTE
- **Total Costs:** 9000 USD

### Milestone 1 Example — Basic functionality

- **Estimated duration:** 1 month
- **FTE:**  1.5
- **Costs:** 4500 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how to start the node and run the Dapp |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an **article**/workshop that explains what was done/achieved as part of the grant. The language will be English and it will be published also in our media channels |
| 1. | Substrate module: pallet-docsig | We will implement the current pallet-docsig to allow the storage on chain of the documents within certain size limits |
| 2. | Dapp Feature: Standard Signature Image |We will add the new feature to manage the standard signatures as described at the point 1 of "Details of the Proposal"|
| 3. | Dapp Feature: Signature Marker | We will create a plugin for editor.js to allow the placing of the signature marker as described at the point 2 of "Details of the Proposal"|
| 4. | Dapp Feature: Encryption | We will implement the encryption as described at the point 3 of "Details of the Proposal"|


### Milestone 2 - Additional Features

- **Estimated Duration:** 1 month
- **FTE:**  1.5
- **Costs:** 4500 USD
    
| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how to start the node and run the Dapp |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an **article**/workshop that explains what was done/achieved as part of the grant. The language will be English and it will be published also in our media channels |
| 1. | Dapp Feature: Pdf Output|We will add the new feature to generate a pdf output as described at the point 5 of "Details of the Proposal"|
| 2. | Dapp Feature: Link Sharing  | We will add a function to share the link for signature as described at the point 6 of "Details of the Proposal"|
| 3. | Dapp Feature: Multiple Counter Parties | We will reafactor the Dapp to allow the signature from different parties as described at the point 7 of "Details of the Proposal"|
| 4. | Dapp Feature: Enhanced Templates | We will add the feature to create/manage private templates into the Dapp as described at the point 8 of "Details of the Proposal"|


## Future Plans

- We will add the possibility to make escrow payments in the execution of the agreements signed.  
- We will add a decentralized arbitration service in case of litigations to be settled.
- We wil promote the docsig within the Web3 and Seasteader community. Aisland has signed an agreement with Liberland to develop a bigger floating city from this outpost and we will push to let become DocSig the standard method to sign agreements: [https://liberland.org/en/news/434-memorandum-of-understanding-with-aisland](https://liberland.org/en/news/434-memorandum-of-understanding-with-aisland)  
Aisland Dao will develop other Dapp to help the transiction from web2 to web3.  

## Referral Program (optional) :moneybag: 

Not applicable

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation Website
