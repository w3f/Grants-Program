# Open Grant Proposal

- **Project:** [Sensio Network](https://www.sensio.group/sensio-network)
- **Proposer:** woss
- **Payment Address:** BTC : 3HLaefnngXW515Zr6MDdz3W2XpLojABeBW
- **Keybase** [Sensio](https://keybase.io/sensio)

## Legend

| Acronym | Name                           |
| ------- | ------------------------------ |
| PoE     | Proof-Of-Existence             |
| PoCLO   | Proof-Of-Camera-Lens-Ownership |
| PoC     | Proof-of-Copyright             |

## Project Description :page_facing_up:

SensioNetwork is a decentralized protocol that empowers content creators to sign, permanently record, and claim statements about their ownerships and copyrights, allowing them to license their work and get [paid](https://www.sensio.group/#people-to-people-marketplace). SensioNetwork is an integral part of a much larger project called [Sensio](https://sensio.group) which consists of two more sub-projects.

SensioNetwork's applications(dApps), [Sensio Photo](https://www.sensio.group/sensio-photo) and [People-2-People marketplace](https://www.sensio.group/#people-to-people-marketplace), have a potential of reaching millions of people and boosting the ecosystem's reputation and adoption.

SensioNetwork will be implemented as a Substrate based chain with its token currently named THT.

SensioNetwork is the backbone of the Sensio project. Building the SensioNetwork with Substrate and Polkadot ecosystem matches our principles and views on interoperability and interconnectivity. One of the Sensio's goal is to establish a fair and trustworthy multimedia market, primarily for photography, and we can do that only with a flexible blockchain solution.

## Team :busts_in_silhouette:

- **Members:** Daniel Maricic
- **LinkedIn Profiles:** https://www.linkedin.com/in/danielmaricic/
- **Code Repos:** [https://gitlab.com/sensio_group](https://gitlab.com/sensio_group)
- **Website:** [https://sensio.group/sensio-network](https://sensio.group/sensio-network)
- **Legal Structure:** 7signals Ltd, Sepapaja tn 6, 15551, Tallinn, Estonia
- **Team's Experience:** Daniel has over 12 years of developing experience, mostly in backend development. He has been working in various sectors from fintech to gaming. He has started being involved in blockchain space little over a year ago when he started researching on a blockchain solution for Sensio project. He is very quick with acquiring new knowledge and very enthusiastic about Polkadot in general. That is why he applied for the Ambassador program.😎

## Development Roadmap :nut_and_bolt:

- **Total Estimated Duration:** 3 months
- **Total Costs:** 3 BTC

### Milestone 1

In this milestone, we want to build a working substrate-based chain with proof of existence and start working on PoCLO runtime.
POE is an essential first step towards generating the statements. When a user uploads the photo through a DApp (currently sensio.photo) the API system is communicating with the SensioNetwork's POE runtime to check does the uploaded photo exists or not. If it exists and creation time is earlier than it's recorded in the SensioNetwork, POE must create a new statement with current data and revoke the previous one, if it doesn't exist POE will create the statement signed by the system and reference to the account that uploaded the photo. Even this simple process poses quite a complex problem. What happens if the photo has a copyright statement claimed and it's discovered now with the original creation time earlier than recorded POE statement? This will be iterated upon in the future but for now, we are preparing the ground by using technologies like CID, PGP and IPFS.
We have developed the algorithm for PoCLO in nodejs and the workflow is built with different architecture in mind. We must change it to fit the current solution. This module will be in charge of creating records for provable camera/lens ownership statements. [Current implementation](https://gitlab.com/sensio_group/sensio-faas/-/blob/master/client/src/views/Device/Verification.js) is built with React in our PoC app. PoCLO is a process that is very similar to what is used in image forensics. It is our first step to registering a provable ownership statement. Our current solution uses PKI and CID, which we will keep in the future together with the Self Sovereign Identities(SSI) and Distributed Identifiers(DID).

Building the modules follows a least-dependency approach which means that we will build the modules that are most dependent on.

- **Estimated Duration:** 4 weeks
- **Costs:** 1 BTC

| Number | Deliverable                     | Specification                                                                  |
| ------ | ------------------------------- | ------------------------------------------------------------------------------ |
| 1.     | Substrate based chain           | Building the substrate based chain                                             |
| 2.     | PoE runtime module              | POE is an essential first step towards generating the statements.              |
| 3.     | PoCLO runtime module **part 1** | This part will be dedicated to creating basic structure and defining the API   |
| 4.     | Unit tests                      | Rudamentary tests for both runtimes                                            |
| 5.     | Docker image                    | Create docker image                                                            |
| 6.     | Tutorial && docs                | Finalise the docs and write a tutorial on how to use the implemented features. |

1. Substrate based chain implementation
2. The PoE runtime must record when the specific item was seen for the first time regardless of the copyright and ownership.
3. The PoCLO must provide the validation rules, validate them and create or revoke the statements. In this milestone, we will focus on creating the basic validation rules, storage and API methods.
4. Rudimentary tests for both runtimes
5. Self-explanatory
6. Self-explanatory

### Milestone 2

- **Estimated Duration:** 4 weeks
- **Costs:** 1 BTC

| Number | Deliverable                     | Specification                                                        |
| ------ | ------------------------------- | -------------------------------------------------------------------- |
| 1.     | PoCLO runtime module **part 2** | Continuation from the previous milestone.                            |
| 2.     | Unit tests                      | Rudamentary tests for both runtimes                                  |
| 3.     | Docker image                    | Update docker image                                                  |
| 4.     | Tutorial && docs                | Update the docs and tutorial on how to use the implemented features. |

1. Connecting POE runtime for the existence check and finalising the validation and the rules.
2. Self-explanatory
3. Self-explanatory
4. Self-explanatory

### Milestone 3

This milestone is mostly about the creation of the provable copyright statements or claims based on PoCLO and PoE. At the moment we have a very simple copyright statement structure which is ok for now. [Here](https://gitlab.com/sensio_group/sensio-faas/-/blob/master/sp-api/src/plugins/photos/index.ts#L295) you can see the code that collects the needed data and invokes the [function that generates](https://gitlab.com/sensio_group/sensio-faas/-/blob/master/sp-api/src/plugins/copyright/helpers.ts#L28) the copyright statement for a given photo. Naive DAG is implemented with the generation of [genesis copyright](https://gitlab.com/sensio_group/sensio-faas/-/blob/master/sp-api/src/plugins/copyright/helpers.ts#L28) which is revoked by every single initial copyright of the photo. Each photo that claims the copyright creates its own branch starting from the genesis statement. This is similar to what DAG-based blockchains do. A single item, like video or photo, can have multiple copyright holders in a total of 100%, which means that copyrights can have proportions different for each of the users, that increases the complexity of licensing implementation and usage but more on that some other time. [Here](https://gitlab.com/sensio_group/sensio-faas/-/tree/master/sp-api/src/plugins) is a directory that contains all the source code for copyright statement generation and signing together with photo data collecting.

- **Estimated Duration:** 4 weeks
- **Costs:** 1 BTC

| Number | Deliverable        | Specification                                                        |
| ------ | ------------------ | -------------------------------------------------------------------- |
| 1.     | PoC runtime module | Create working copyright statement runtime with signing              |
| 2.     | Docker image       | Update docker image                                                  |
| 3.     | Tutorial && docs   | Update the docs and tutorial on how to use the implemented features. |

1. Rewrite the previous implementation in nodejs and make changes to work without users PGP keys but leave the space for an upgrade
2. Self-explanatory
3. Self-explanatory

## Additional Information :heavy_plus_sign:

- What work has been done so far?

At the moment we have PoC, web app + Graphql API + naive DAG, that we built as a showcase. We have the core functionality of all three sub-projects (very basic so far), photo upload and editing, claiming ownership and copyrights, selling ( for free, as it's a PoC ) and copyright request with approving and declining outcomes. We truly believe that (D)PKI or its variants are the future, that's why all users are given `ed25519` asymmetric keys and passphrase emailed. That key is used for signing and verification.

- Are there are any teams who have already contributed (financially) to the project?

Only the founders, [Daniel Maricic](https://www.linkedin.com/in/danielmaricic/) and [Elena Tairova](https://www.linkedin.com/in/elena-tairova/).

- Are there any other projects similar to yours? If so, how is your project different?

Some projects share a similar approach, like the majority of PoE/TimeStamping, but none of them does what we are trying to accomplish. Sensio, at the moment, is the only project out there that provides verifiable ownership and copyright claims based on real workflows, not `first came -> first hashed it -> owns it`.

- The team's long-term plans and intentions with this project.

SensioNetwork is the core part of Sensio and its applications which development is underway. First, the Digital Asset Management software for professional photographers will be launched, and later, with this community acting as ambassadors, we can expand to the mass market of smartphone holders. Well-established user-base and strong USP (connectivity, optimal protection of online IPR) will in its turn put Sensio in a position to disrupt the market of stock photography and video. Once launched, [People-2-People marketplace](https://www.sensio.group/#people-to-people-marketplace) will allow publishers, marketers and other creatives to acquire quality content directly from its author. Thus, a fairer and more efficient market for all the actors.
