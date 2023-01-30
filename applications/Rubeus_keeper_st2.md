# Rubeus Keeper stage 2

- **Team Name:** Bela Supernova
- **Payment Address:** Polkadot (Statemint):	 15iqY5VMHAbwkPs4ooJJazLND8Z9uPJXRrbwDE1zcPfeYwZJ (USDT)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

This application is a follow-up grant of the [Rubeus Keeper]( https://github.com/w3f/Grants-Program/pull/1124) project.

### Overview

Remembering passwords from all resources is a challenging task. It doesn’t need any introduction as all Internet users use passwords dozen times a day. The most common, but less reliable way of password managing is using the only password for all resources – not a good idea, but true. The other one, next most popular – using password managers built in your browser. Quite reliable for low critical data, but for privacy critical data this is not the way to store passwords as there are several ways for third parties to obtain passwords from these centralized systems. Users that value privacy usually use offline desktop applications for managing passwords – it’s safe, but has disadvantages as different devices won’t sync, so one has to manage them separately.

The aim of this project is to develop a decentralized password manager that stores data in a blockchain and uses personal Polkadot wallet credentials to access the passwords manager dApp. Saved passwords will be added automatically to appropriate forms on websites after logging in with user’s wallet private key in the browser extension.
Another feature of the Rubeus dApp is storing personal text notes.

### Project Details

In the first stage of the project we’ve delivered:
-	An Ink! smart contract for seсure password storage using a Polkadot or Kusama account. Just log in to your Polkadot wallet and get access to your passwords DB. The smart contract includes methods for writing and getting passwords, as well as categorizing them.
-	A browser extension for password managing: log in, password generation, categorizing, saving, retrieving.
 
![Rubeus schema 3](https://user-images.githubusercontent.com/98888366/207593938-268d7c72-e5bd-46cc-94a6-105466bd233e.png)

In this follow-up grant BSN will improve the functionality of the developed dApp by adding the following features:
1.	Autocomplete functionality for the developed browser extension with password autogeneration feature.
2.	New methods for the Ink! smart contract for secure text notes storage: saving, retrieving, deleting, updating.
3.	Functionality for registering a new wallet (private key) in the dApp, password (seed phrase) recovery mechanism by downloading a JSON file.
 
![Rubeus st2 schema](https://user-images.githubusercontent.com/98888366/207593980-0a71eefa-dd48-4814-93b1-74ffb308eb0b.png)

### Ecosystem Fit

The Rubeus Keeper dApp will be used by all the community and even all Internet users as it simplifies and secures daily interaction with web applications – web2 or web3 – our dApp will be comprehensively useful. The target audience is “a web user”.

If we take a glance at the [Open Source Polkadot Stack](https://wiki.polkadot.network/docs/build-open-source) we see the [Logion network]( https://github.com/logion-network/logion-node) project, that represents a separate parachain with very wide functionality. Unlike Logion we offer a simple Ink! contract and an extension that can be used in any Substrate based parachain with no need for setting nodes and etc. Fast, easy and no need for a separate wallet.

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

Sergey Cymbal is an experienced executive, leader and visioner responsible for the most disruptive innovations initiatives across Oil/Gas, Utilities, and Telcos in Russia. Ex-member of Sochi Olympics HQ, responsible for digitalization, Smart grid evangelist. Blockchain early follower, participates in several crypto initiatives.

Dmitrii Putilov has over 17 years of experience leading the teams creating and maintaining high availability sites. His portfolio contains creation of the robee.io investment platform included in top500 in coinmarketcap.

Ilia Shavrin is a solution architect and full stack software developer with over 12 years of experience in high load enterprise applications. His most recent focus is on blockchain and creation of decentralized applications.

Anton Shramko is an experienced developer with 7 years of experience on various positions, including solution architect in Krypton. Anton active contributor to open source and blockchain communities, he is also a frequent speaker in DevCon conferences. 

Ksenia Baranova is an QA test engineer with over 5 years of experience. Ksenia has exceptional knowledge and skills in the field. She is highly referred within this team, as well as by her former teams.

Alexey Vexin is product owner and project manager with 10+ years of experience in managing complicated telecoms and IT projects in Telco, Utilities and Governmental sectors with deep focus on business process management. Led a dozen of federal scaled projects for IT systems implementation and industry scaled technology development, standardization and implementation.

Anton Borisov is a DevOps Engineer with broad experience. For over 15 years Anton was supporting, administering, and maintaining secure networks, servers, and clusters. He also has versatile experience with CI/CD, IT Infrastructure Monitoring, and Kubernetes on-premise and in Cloud. One of the most recent projects Anton participated in was building a first on chain casino.

Bela Supernova has finished W3f grants earlier:
[OCEX](https://github.com/w3f/Grants-Program/pull/803#issuecomment-1064184965)
[Rubeus Keeper]( https://github.com/w3f/Grants-Program/pull/1124)

BSN also delivers code under successful and active grants from FileCoin, Chainlink and Tgrade communities.

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

## Development Status :open_book:

This application is a follow-up grant of a [Rubeus Keeper]( https://github.com/w3f/Grants-Program/pull/1124) project.
Reps:
[Rubeus Ink! smart contract](https://github.com/bsn-si/rubeus-smartcontract)
[Rubeus client](https://github.com/bsn-si/rubeus-client)

## Development Roadmap :nut_and_bolt:

We plan to execute 3 deliverables in three milestones:
- new methods for the Ink! smart contract for text notes storage;
- an autocomplete feature for the browser extension for passwords autofill (tested under Chrome browser);
- a password generation tool.

The project will be supported by a team of 2 developers, 1 UI/UX designer, 1 DevOps engineer and 1 QA.

### Overview

- **Total Estimated Duration:** 2 months
- **Full-Time Equivalent (FTE):**  2,8 FTE
- **Total Costs:** 25,000 USDT

### Milestone 1 — Design and development of text notes storage methods

- **Estimated duration:** 1 month
- **FTE:**  1,5
- **Costs:** 13,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can send test transactions, which will show how the new functionality works. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure new functionality and robustness. In the guide, we will describe how to run these tests. |
| 1. | Ink! smart-contract | The Rubeus smart-contract supplemented with new methods for text notes storage and use: “add note (title, contents)”, “delete note”, “get notes” and “update note”. |
| 2. | Extension “notes” tab | An MVP for the Chrome browser extension tab for text notes management: notes list (get data from a blockchain, decrypt received data, unzip and get text notes, text notes list render); save a text note (data entry form, data serialization, zip data, data encryption, send transaction), delete a text note, update a note. |

### Milestone 2 — Autocomplete (autofill) feature development

- **Estimated duration:** 1 month
- **FTE:**  1,3
- **Costs:** 12,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can run our smart contract and send test transactions, which will show how the functionality works. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. | 
| 0d. | Article | We will publish an **article** that explains what was achieved, how to use the new Dapp and what benefits what are the benefits of using the system 
| 1. | Browser extension autofill feature | We will develop additional functionality for the browser extension: - registration and authorization forms tracking; - suggestion to generate and save a password; - generation of a random password with user-defined rules; - autofill password forms on websites (tested on 5+ different web sites). To access passwords and manipulate them while the extension pop-up is closed we will rearrange the extension and transfer some logic to the service worker; | 
| 2. | Password generation tool | We will develop a tool for a random password generation with user-defined rules. | 

Sample image of a password generation tool:

<img width="234" alt="Rubeus st2 pswd gen" src="https://user-images.githubusercontent.com/98888366/208406592-efe84a69-e00a-4482-9bd8-a2c30ace95eb.png"/>

## Future Plans

In the future plans for Rubeus we see widening of its functionality: from remembering credit cards credentials to answers for recovery questions. Everything that should be remembered for a personal use and complies with GDPR could be stored with Rubeus. A 2FA feature is also in our plans. All this should be developed under a later stage of the project.
