# W3F Grant Proposal

- **Project Name:** Rubeus Keeper
- **Team Name:** Bela Supernova
- **Payment Address:** 0xC0d28794eA40Ce9b9F4B62a1B2Bb42FD34b7d305 (USDT)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:
This application is not in response to an RFP, but it fully complies with a potentially interesting project “Sign-in with your Polkadot, Kusama, etc. account” mentioned in [Open Source Polkadot Stack](https://wiki.polkadot.network/docs/build-open-source) page in the “ browser extensions” section.

### Overview

Remembering passwords from all resources is a challenging task. It doesn’t need any introduction as all Internet users use passwords dozen times a day. The most common, but less reliable way of password managing is using the only password for all resources – not a good idea, but true. The other one, next most popular – using password managers built in your browser. Quite reliable for low critical data, but for privacy critical data this is not the way to store passwords as there are several ways for third parties to obtain passwords from these centralized systems. Users that value privacy usually use offline desktop applications for managing passwords – it’s safe, but has disadvantages as different devices won’t sync, so one has to manage them separately.

The aim of this project is to develop a decentralized password manager that stores data in a blockchain and uses personal Polkadot wallet credentials to access the passwords manager dApp. Saved passwords will be added automatically to appropriate forms on websites after logging in with user’s wallet private key in the browser extension.

### Project Details

The Rubeus Keeper dApp will consist of two functional modules:
1.	An Ink! smart contract for seсure password storage using a Polkadot or Kusama account. Just log in to your Polkadot wallet and get access to your passwords DB. The smart contract will includes methods for writing and getting passwords, as well as categorizing.
2.	A browser extension for password managing: registration, log in, password generation, categorizing, saving, retrieving, autocomplete functionality.

Under this MVP we consider security in the next attack vectors:
 1. Transferred data unauthorized interception and decryption (categories, URLs/logins, passwords).
 2. Malicious data substitution by a node.
To solve the above mentioned tasks the data will be encrypted using the ChaCha20-Poly1305 streaming algorithm with message authentication. The protocol is standardized by IETF in RFC 7539, in software implementations it is much more efficient and faster than AES.

![Rubeus schema 3](https://user-images.githubusercontent.com/98888366/184879468-bb14b061-7e32-4f89-bc15-8d753d66f236.png)

### Ecosystem Fit

The Rubeus Keeper dApp will be used by all the community and even all Internet users as it simplifies and secures daily interaction with web applications – web2 or web3 – our dApp will be comprehensively useful. The target audience is “a web user”.

In the [Open Source Polkadot Stack](https://wiki.polkadot.network/docs/build-open-source) we see the [Logion network]( https://github.com/logion-network/logion-node) project, that represents a separate parachain with very wide functionality. Unlike Logion we offer a simple Ink! contract and an extension that can be used in any Substrate based parachain with no need for setting nodes and etc. Fast, easy and no need for a separate wallet.

## Team :busts_in_silhouette:

### Team members

- Sergey Cymbal, MBA, CEO at Bela Supernova d.o.o
- Dmitrii Putilov, Blockchain Department Director at Bela Supernova d.o.o
- Ilia Shavrin, Full stack software developer at Bela Supernova d.o.o
- Anton Shramko, Full stack software developer at Bela Supernova d.o.o
- Ksenia Baranova, QA Lead at Bela Supernova d.o.o
- Alexey Vexin, Project Manager at Bela Supernova d.o.o
- Anton Borisov, DevOps Engineer at Bela Supernova d.o.o

### Contact

- **Contact Name:** Alexey Vexin
- **Contact Email:** av@bsn.si
- **Website:** https://www.bsn.si

### Legal Structure

- **Registered Address:** Cesta v Mestni log 55, Ljubljana 1000, Slovenia
- **Registered Legal Entity:** BELA SUPERNOVA, sistemske rešitve d.o.o.

### Team's experience

Sergey Cymbal is an experienced executive, leader and visioner responsible for the most disruptive innovations initiatives across Oil/Gas, Utilities, and Telcos. Ex-member of winter Olympics HQ, responsible for digitalization, Smart grid evangelist. Blockchain early follower, participates in several crypto initiatives.

Dmitrii Putilov has over 17 years of experience leading the teams creating and maintaining high availability sites. His portfolio contains creation of the robee.io investment platform included in top500 in coinmarketcap.

Ilia Shavrin is a solution architect and full stack software developer with over 12 years of experience in high load enterprise applications. His most recent focus is on blockchain and creation of decentralized applications.

Anton Shramko is an experienced developer with 7 years of experience on various positions, including solution architect in Krypton. Anton active contributor to open source and blockchain communities, he is also a frequent speaker in DevCon conferences. 

Ksenia Baranova is an QA test engineer with over 5 years of experience. Ksenia has exceptional knowledge and skills in the field. She is highly referred within this team, as well as by her former teams.

Alexey Vexin is a product owner and a project manager with 15+ years of experience in managing complicated telecoms and IT projects in Telco, Utilities and Governmental sectors with deep focus on business process management. Led a dozen of national scaled projects for IT systems implementation and industry scaled technology development, standardization and implementation.

Anton Borisov is a DevOps Engineer with broad experience. For over 15 years Anton was supporting, administering, and maintaining secure networks, servers, and clusters. He also has versatile experience with CI/CD, IT Infrastructure Monitoring, and Kubernetes on-premise and in Cloud. One of the most recent projects Anton participated in was building a first on chain casino.

Bela Supernova has delivered a W3f grant earlier: [OCEX](https://github.com/w3f/Grants-Program/pull/803#issuecomment-1064184965)

BSN also has 2 active projects under FileCoin, Chainlink and Tgrade grants.

### Team Code Repos

- https://github.com/orgs/bsn-si/repositories
- https://github.com/ManageIQ/manageiq-providers-amazon/commits?author=aiperon
- https://github.com/ManageIQ/manageiq/commits/?author=aiperon
- https://github.com/friktor?tab=repositories
- https://github.com/dsputilov
- https://github.com/friktor
- https://github.com/aiperon

### Team LinkedIn Profiles (if available)

- [Sergey Cymbal] (https://www.linkedin.com/in/sergecymbal/)
- [Dmitrii Putilov] (https://www.linkedin.com/in/dmitri-p-96b0a140/)
- [Ilia Shavrin] (https://www.linkedin.com/in/ilia-shavrin-716552228/)
- [Anton Shramko] (https://www.linkedin.com/in/anton-shramko-25971b162/)
- [Ksenia Baranova] (https://www.linkedin.com/in/mayawotson/)
- [Alexey Vexin] (https://www.linkedin.com/in/alexey-vexin-800a4068/)
- [Anton Borisov]

## Development Roadmap :nut_and_bolt:

We plan to execute 2 deliverables in two milestones:
- an Ink! smart contract for password storage;
- a browser extension for password management (tested under Chrome browser).

The project will be supported by a team of 2 developers, 1 UI/UX designer, 1 DevOps engineer and 1 QA.

### Overview

- **Total Estimated Duration:** 2,5 months
- **Full-Time Equivalent (FTE):**  3 FTE
- **Total Costs:** 30,000 USDT

### Milestone 1 — Design and development of a smart-contract and a testing page

- **Estimated Duration:** 1,5 months
- **FTE:**  2 FTE
- **Costs:** 22,000 USDT

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can run our smart contract and send test transactions, which will show how the functionality works. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 1. | Ink! smart-contract | An Ink! smart-contract for password storage and use: “add password (title, url, username, password, comment)”, “delete password”, “get password”, “add category”, “delete category”, “get categories”. Stored data will be encrypted using the ChaCha20-Poly1305 streaming algorithm with message authentication. |  
| 2. | Test page | A test page for running functional tests: categories (get data from a blockchain, decrypt received data, unzip and get passwords, categories list render, passwords list render by categories); save password (data entry form, data serialization, zip data, data encryption, send transaction); show balance. The test page will be developed using JavaScript. |  

### Milestone 2 — Design and development of a browser extension

- **Estimated Duration:** 1 month
- **FTE:**  1 FTE
- **Costs:** 8,000 USDT

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can run our smart contract and send test transactions, which will show how the functionality works. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness under the Chrome browser. In the guide, we will describe how to run these tests. |
| 0d. | Article | We will publish an **article** that explains what was achieved, how to use the new Dapp and what are the benefits of using the system |  
| 1. | Browser extension | A Chrome browser extension MVP for password management: a registration page (login with a Polkadot wallet private key and set a master-password); login page (using master-password); categories (get data from a blockchain, decrypt received data, unzip and get passwords, categories list render, passwords list render by categories); save password (data entry form, data serialization, zip data, data encryption, send transaction); password generation window, show balance. The extension will be developed using JavaScript. |  
