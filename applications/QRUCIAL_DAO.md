# QRUCIAL DAO

> This document will be part of the terms and conditions of your agreement and therefore needs to contain all the required information about the project. Don't remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with a `>` (such as this one) can be removed.
>
> See the [Grants Program Process](https://github.com/w3f/Grants-Program/#pencil-process) on how to submit a proposal.

- **Team Name:** QRUCIAL OÜ
- **Payment Address:** BTC - bc1qwr7awq55z2udjvxj0ar7qfeasf70fasee8fxf2
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
- What your project is *not* or will *not* provide or implement
  - We won't solve business questions here, though we think our idea fill fit into the Polkadot/Kusama ecosystem.
  - This project won't save all the smart contracts or render manual auditors/hackers useless. Quite the opposite, by providing proven execution, we want to provide work to the manual workers who verify and validate vulnerabilities.
- Main programming languages to be used: Rust, Python and JavaScript (for frontend)

<p align="center">
  <img src="https://github.com/Qrucial/QRUCIAL-DAO/blob/main/docs/topology.png" style={{width: "600px"}} />
</p>

#### What is ExoSys?

ExoSys is the system that schedules audit requests and handles ExoTool connections. It is implemented as a combination of a pallet and a daemon, running on the same system as the blockchain node.
ExoSys is also responsible for issuing the Non-Transferrable NFTs and keeps a track record of audit hashes and meta data.

#### What is ExoTool?

Selected set of security auditor tools, packaged and adapted to be executed by the request of ExoSys.

#### What is AuditorRep?

Élő's assumption is that the performance of an auditor in each audit is a random variable following a normal distributed bell curve over time.
An auditor might perform significantly better or worse from one audit to the next.
Using Élő their mean skill level would remain the same.
The assumption here is that the mean skill level of an auditor changes slowly over time.
Each audit can be challenged by other auditors with a high enough score, who can either find other vulnerabilities or remove  false positives the original auditor has missed.
If additional vulnerabilities are found or  false positives are removed, the challenging auditor increase their own score and decrease the score of the original auditor.
The increase and decrease of every individual auditor is relative to the Élő score of the original auditor and the one re-auditing a project.

High ranked auditor wins:

- few points are transferred from the low ranked auditor to the higher rated one.

Low rated auditor wins:

- a lot of points are transferred from the higher rated auditor to the low rated one.

#### What is the CCTF talent pool?

CCTF provides a proven track record of hackers solving challenges and based on their reputation, they are awarded as manual auditors in the QDAO ecosystem.

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

Wigy is an ex-Parity Substrate developer. He is working as a blockchain developer since 2016. His main interests are Rust development, architecture, incentive systems and wallet implementations.

Silur is working at the Hungarian Academy of Sciences (MTA) as cryptographer, was an early Ethereum developer and still works on cryptocurrency projects.

knockoff is linux system administrator and junior rust developer.

### Team Code Repos

- <https://github.com/Qrucial/QRUCIAL-DAO>
- <https://github.com/Qrucial/Hacking_Substrate_with_Chaos_Pallet>
- <https://github.com/Qrucial/SafuDot>
- <https://github.com/Qrucial/QRUCIAL_Audits>

Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine.

- <https://github.com/smilingSix>
- <https://github.com/wigy-opensource-developer>
- <https://github.com/Silur>

### Team LinkedIn Profiles (if available)

- [https://www.linkedin.com/in/david-six-pethes/](https://www.linkedin.com/in/david-six-pethes/)
- [https://www.linkedin.com/in/sebastian-kraus-97a65a1a7/](https://www.linkedin.com/in/sebastian-kraus-97a65a1a7/)

## Development Status :open_book:

We have started the development already, details can be found under this repository:
[https://github.com/Qrucial/QRUCIAL-DAO](https://github.com/Qrucial/QRUCIAL-DAO)

The PoC is working, and we want to move forward in developing a live testnet version.

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 4 months
- **Full-Time Equivalent (FTE):**  0.7 FTE
- **Total Costs:** 40,000 USD

### Milestone 1 — Implement substrate runtime and core modules

- **Estimated duration:** 2 months
- **FTE:**  0.7 FTE
- **Costs:** 20,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1. | Substrate runtime | The runtime config and compilable code for QRUCIAL DAO. |
| 2. | Substrate pallet: ExoSys | Core system that handles the extrinsics that request ExoTool execution. |  
| 3. | Substrate pallet: AuditorRep | Reputation system for the manual auditors who verify the output recorded by ExoSys. |
| 4. | Substrate report storage | Includes the tools exogenous to the Substrate system, it is connected through the glue/proxy. |
| 5. | Substrate pallet: governance | We plan to use a similar governance system as Polkadot, but plan to focus more on a meritocratic side. It needs to be decided if we use the democracy pallet as it is or we modify it to use reputation for weights. |

### Milestone 2 — Implement Exogenous tooling and hardened node system

- **Estimated duration:** 2 months
- **FTE:**  0.7 FTE
- **Costs:** 20,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an **article**/workshop that explains QRUCIAL DAO (what was done/achieved as part of the grant). (Content, language and medium should reflect your target audience described above.)
| 1. | ExoSys Deamon | This is the glue system which listens to events on QRUCIAL DAO and executes the requested tools. |
| 2. | QRUCIAL DAO Frontend | Frontend development for accessing the functionalities. Design will look like [this](https://github.com/Qrucial/QRUCIAL-DAO/blob/main/docs/QRUCIAL%20DAO%20UI.png)|
| 3. | ExoTool - CCA | Implement [Clippy](https://github.com/rust-lang/rust-clippy) and [Cargo Audit](https://docs.rs/cargo-audit/0.15.1/cargo_audit/) as an exotool package for ink!/WASM smart contract audits. |
| 4. | ExoTool - Octopus | Implement [Octopus](https://github.com/pventuzelo/octopus) as an exotool for bytecodes (WASM and Solidity) |

## Future Plans

- In the short term, we'd like to have the grant, so development goes faster. QRUCIAL as a company will keep funding the project until it becomes self-sustaining (meaning, the governance system keeps the DAO running on its own).
- CCTF (cryptoctf.org) is already a partner, helping to bring the best web3 hackers to the system.
- Elfz'n'Trollz is a marketing partner, so we don't just develop a DAO, but also make it usable and visually acceptable to all audiences.
- After final milestone, we will start building a larger community for QRUCIAL DAO and improve our partnership with CCTF.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Personal recommendation from Achim Schneider and Jonan.

Here, you can also add any additional information that you think is relevant to this application but isn't part of it already, such as:

- We already have the litepaper: [https://github.com/Qrucial/QRUCIAL-DAO/blob/main/docs/QRUCIAL%20DAO%20Litepaper%202022.pdf](https://github.com/Qrucial/QRUCIAL-DAO/blob/main/docs/QRUCIAL%20DAO%20Litepaper%202022.pdf)
- QRUCIAL OÜ started to pay development fees already, but we need the grant to keep it up.
- This is the first time we request a grant.
