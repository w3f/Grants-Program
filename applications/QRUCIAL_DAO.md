# W3F Grant Proposal

> This document will be part of the terms and conditions of your agreement and therefore needs to contain all the required information about the project. Don't remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with a `>` (such as this one) can be removed.
>
> See the [Grants Program Process](https://github.com/w3f/Grants-Program/#pencil-process) on how to submit a proposal.

- **Project Name:** QRUCIAL DAO
- **Team Name:** QRUCIAL OÜ
- **Payment Address:** BTC - bc1qysscajxdstqzpe3x9x4ftr3y6l5gelggtk8a8g
- **Level:** 2

> ⚠️ *The combination of your GitHub account submitting the application and the payment address above will be your unique identifier during the program. Please keep them safe.*

## Project Overview :page_facing_up:

This is our first time. This is not a follow-up.

### Overview

QRUCIAL DAO is a system for trustless audits, and certification using non-transferable NFTs, exogenous tooling and decentralized Consensus.

To us, it is ironic that web3 and trustless systems are trusting web2 auditors and legacy security companies to protect them from threat actors. This is the reason we want to build a system in which the community and the projects can trust that a security assessment has in fact been done professionally.
Too often, security audits of web3 projects are performed in a way that relies on intransparency and blind trust in a company logo instead of a proof of computation as well as a proof that the auditor is knowledgeable of the task at hand. It seems that many auditing companies are not in security, but the PDF business. We want to change this.

### Project Details

We expect the teams to already have a solid idea about your project's expected final state. Therefore, we ask the teams to submit (where relevant):

- QDAO is a multichain solution which brings security services and tools to the blockchain. Such services include automated smart contract audits and tools like symbolic analyzers.
We are the first connecting defensive as well as offensive security tool execution to the blockchain. A Web3 Security Toolkit is to be built, and the tools inside will be executable on QDAO nodes. In the beginning, we will be focusing on auditing tools. The tooling itself is bundled in a container and is being developed and maintained and voted on by QRUCIAL and the DAO though the nominated proof of stake governance system. The distribution of the containers is done through decentralized means. Runtime upgrades are used to update the toolbox on each node.
- Research and meeting notes to be added and their results
- An overview of the technology stack to be used

- Core components include Substrate, QRUCIAL DAO runtime, pallets and the ExoGlue.
- PoC can be found in the reference QRUCIAL DAO repository below.
- What your project is _not_ or will _not_ provide or implement
  - We won't solve business questions here, though we think our idea fill fit into the Polkadot/Kusama ecosystem.
  - This project won't save all the smart contracts or render manual auditors/hackers useless. Quite the opposite, by providing proven execution, we want to provide work to the manual workers who verify and validate vulnerabilities.

### Ecosystem Fit

- In the Polkadot/Substrate/Kusama landscape, this will be the first security toolkit that can be triggered by extrinsics. QRUCIAL DAO also want to improve the security of the whole ecosystem by providing automated audits and a talent pool through CCTF for manual verification of vulnerabilities/exploits.
- The target audience is all the projects that need a security audit (in a healthy system, it would be all the projects).
- We are already a participant in the web3 security space and want to move on, provide more to it than a security audit product.
- We are not aware of any similar project right now, but heard that someone is trying something similar on Ethereum.

## Team :busts_in_silhouette:

### Team members

- Web3 Architect: six / David Pethes - CTO of QRUCIAL, Founder of CCTF, Polkadot Head Ambassador of Eastern Europe
- Business Architect: ra33it0 / Sebastian Kraus - CEO of QRUCIAL, EFF member
- Runtime Developer: Wigy / - Senior Rust developer, Ex-Parity substrate core developer
- Full-stack Developer: Silur / Ábrahám Endre - Researcher at Hungarian Academy of Sciences (MTA), Ex-Ethereum Foundation developer
- DevOps Engineer: knockoff / Nico Selby - R&D team manager at QRUCIAL

### Contact

- **Contact Name:** six / David Pethes
- **Contact Email:** hello@qrucial.io
- **Website:** qrucial.io

### Legal Structure

- **Registered Address:** Harju maakond, Tallinn, Kesklinna linnaosa, Narva mnt 7-652, 10117
- **Registered Legal Entity:** QRUCIAL OÜ, Registration number: 16357543

### Team's experience

QRUCIAL OÜ is a web3 security company.

This is the first time we apply for a grant.

Six aka David Pethes is a co-founder of QRUCIAL. He is a web3 researcher and security expert and founded the largest crypto hacking competition in the world – CCTF – two years ago. He has more than 9 years experience in IT penetration testing and got several global certifications. Since 2021 he is Regional Head Ambassador for Eastern Europe of Polkadot. Since 2013 he is into blockchain and keeps improving his skills through related projects since then.

ra33it0 aka Sebastian Kraus is a co-founder of QRUCIAL. He is also the founder and strategic mind behind a multitude of companies. His activities range from carbon-neutral real estate with OLYMP to Cryptocurrency Marketing with Elfzntrollz and information security QRUCIAL aiming to make Web3 more secure.
Back in 2016, he became interested in blockchain and hacking and has since refined his skills in the field.

Wigy is an ex-Parity substrate developer. He is proficient in coding in Rust.

Silur is working at the Hungarian Academy of Sciences (MTA) as cryptographer, was an early Ethereum developer and still works on cryptocurrency projects.

knockoff is linux system administrator and junior rust developer.


### Team Code Repos

- https://github.com/Qrucial/QRUCIAL-DAO
- https://github.com/Qrucial/Hacking_Substrate_with_Chaos_Pallet
- https://github.com/Qrucial/SafuDot
- https://github.com/Qrucial/QRUCIAL_Audits

Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine.

- https://github.com/smilingSix
- https://github.com/wigy-opensource-developer
- https://github.com/Silur

### Team LinkedIn Profiles (if available)

- [https://www.linkedin.com/in/david-six-pethes/](https://www.linkedin.com/in/david-six-pethes/)
- [https://www.linkedin.com/in/sebastian-kraus-97a65a1a7/](https://www.linkedin.com/in/sebastian-kraus-97a65a1a7/)

## Development Status :open_book:

We have started the development already, details can be found under this repository:
[https://github.com/Qrucial/QRUCIAL-DAO](https://github.com/Qrucial/QRUCIAL-DAO)

The PoC is working, and we want to move forward in developing a live testnet version.


## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 3 months
- **Full-Time Equivalent (FTE):**  4.5 FTE
- **Total Costs:** 43,000 USD

### Milestone 1 — Implement substrate runtime and core modules

- **Estimated duration:** 1 month
- **FTE:**  2 FTE
- **Costs:** 15,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation v1 | Documentation for the core system, development and basic concepts introduced by QRUCIAL DAO. |
| 0c. | Substrate runtime | The runtime config and compilable code for QRUCIAL DAO. |  
| 0d. | Exogenous connection | Working nodes that connect to each other and execute the requested security tools. |  
| 1. | Substrate module: ExoSys | Core system that handles the extrinsics that request ExoTool execution. |  
| 2. | Substrate module: HackRep | Reputation system for the manual auditors who verify the output recorded by ExoSys. |


### Milestone 2 — Implement ExoTools and hardened proxy/glue system

- **Estimated duration:** 1 month
- **FTE:**  1.5 FTE
- **Costs:** 15,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | ExoGlue | This is the system the listens to events on QRUCIAL DAO and executes the requested tools. |
| 0b. | ExoTool Core | Modular system for exotools with guide on how to create new ones. We plan to use Podman. |
| 0c. | ExoTool - Slither | Implement Slither as an exotool for Solidity contracts. |
| 0d. | ExoTool - Octopus | Implement Octopus as an exotools for bytecodes (WASM and Solidity) |
| 1. | Substrate ExoGlue: ExoTools | Includes the tools exogenous to the Substrate system, it is connected through the glue/proxy. |
| 2. | QRUCIAL DAO Hardening | We test and harden the system against attacks. |


### Milestone 3 — Live test network

- **Estimated Duration:** 1 month
- **FTE:**  1
- **Costs:** 13,000 USD


| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | Unit tests and internal security audit | Code that can be used for testing and an audit conducted against the system created in the 1-2 milestones.|
| 0b. | Public report on security | Report shared publicly about the tests and security audit, including technical details. |
| 0c. | Documentation v2 | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can run her/his own QRUCIAL DAO nodes and send test transactions, which will show how the new functionality works. |
| 0d. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 1. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. Images will also be prepared for the Exogenous tools separately. |
| 2. | Article | We will publish **articles** and conduct workshop that explain QRUCIAL DAO. These will appear on QRUCIAL blog and the workshops will be conducted at Polkadot meetups (e.g. Polkadot Hungary meetup and at hackerspaces).
| 2. | Community building | We will start building a larger community for QRUCIAL DAO and improve our partnership with CCTF.


## Future Plans

- In the short term, we'd like to have the grant, so development goes faster. QRUCIAL as a company will keep funding the project until it becomes self-sustaining (meaning, the governance system keeps the DAO running on its own).
- CCTF (cryptoctf.org) is already a partner, helping to bring the best web3 hackers to the system.
- Elfz'n'Trollz is a marketing partner, so we don't just develop a DAO, but also make it usable and visually acceptable to all audiences.


## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Personal recommendation from Achim Schneider and Jonan.

Here, you can also add any additional information that you think is relevant to this application but isn't part of it already, such as:

- We already have the litepaper: [https://github.com/Qrucial/QRUCIAL-DAO/blob/main/docs/QRUCIAL%20DAO%20Litepaper%202022.pdf](https://github.com/Qrucial/QRUCIAL-DAO/blob/main/docs/QRUCIAL%20DAO%20Litepaper%202022.pdf)
- QRUCIAL OÜ started to pay development fees already, but we need the grant to keep it up.
- This is the first time we request a grant.
