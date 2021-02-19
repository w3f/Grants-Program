# Open Grant Proposal

- **Project:** [Sensio Network](https://www.sensio.group/sensio-network)
- **Proposer:** woss
- **Payment Address:** BTC: 3HLaefnngXW515Zr6MDdz3W2XpLojABeBW
- **Keybase** [Sensio](https://keybase.io/sensio)

## Legend

| Acronym | Name                           |
| ------- | ------------------------------ |
| PoE     | Proof-Of-Existence             |
| PoCLO   | Proof-Of-Camera-Lens-Ownership |
| SSI     | Self Sovereign Identities      |
| DID     | Distributed Identifier         |
| IPFS    | Interplanetary file system     |
| PGP     | Pretty Good Privacy            |
| PKI     | Public key infrastructure      |

## Project Description :page_facing_up:

SensioNetwork is a decentralized protocol that empowers content creators to sign, permanently record, and claim statements about their ownerships and copyrights, allowing them to license their work and get [paid](https://www.sensio.group/#people-to-people-marketplace). SensioNetwork is an integral part of a much larger project called [Sensio](https://sensio.group) which consists of two more sub-projects.

SensioNetwork's applications(dApps), [Sensio Photo](https://www.sensio.group/sensio-photo) and [People-2-People marketplace](https://www.sensio.group/#people-to-people-marketplace), have a potential of reaching millions of people and boosting the ecosystem's reputation and adoption.

SensioNetwork will be implemented as a Substrate-based chain with its token, currently named THT.

SensioNetwork is the backbone of the Sensio project. Building the SensioNetwork with Substrate and in the Polkadot, ecosystem matches our principles and views on interoperability and interconnectivity. One of the Sensio's goal is to establish a fair and trustworthy multimedia market, primarily for photography, and we can do that only with a flexible blockchain solution.

## Team :busts_in_silhouette:

- **Members:** Daniel Maricic
- **LinkedIn Profiles:** https://www.linkedin.com/in/danielmaricic/
- **Code Repos:** [https://gitlab.com/sensio_group](https://gitlab.com/sensio_group)
- **Website:** [https://sensio.group/sensio-network](https://sensio.group/sensio-network)
- **Legal Structure:** 7signals Ltd, Sepapaja tn 6, 15551, Tallinn, Estonia
- **Team's Experience:** Daniel has over 12 years of developing experience, mostly in backend development. He has been working in various IT sectors. He has started being involved in blockchain space a little over a year ago when he started researching on a blockchain solution for the Sensio project. He is very quick with acquiring new knowledge and very enthusiastic about Polkadot in general. That is why he applied for the Ambassador program.😎

## Development Roadmap :nut_and_bolt:

- **Total Estimated Duration:** 6 weeks
- **Total Costs:** 0.5 BTC

Building the modules follows a least-dependency approach, which means that we will build the modules that are most dependent on first.

### Milestone 1

In this milestone, we want to build a working Substrate-based chain and PoE runtime module.

PoE is an essential step towards generating any kind of statement. The ruleset in SensioNetwork is based on the flexible implementation of PoE. Each of the `Proof-of-*` modules depend on the information to exist before it can be verified. The structure is slightly different for each of the input types. In the case of the photo, there is more than one identifier since each photo can contain the metadata. Our tasks in this milestone are to define the generic structure and rule-set as well as the rules specific for the `photo` type. The rules should be much interoperable as they can. One potential solution to this is utilising the CID and multihash library.

- **Estimated Duration:** 2 weeks
- **Costs:** 0.5 BTC

| Number | Deliverable           | Specification                                                                 |
| ------ | --------------------- | ----------------------------------------------------------------------------- |
| 1.     | Substrate based chain | Building the substrate based chain                                            |
| 2.     | PoE runtime           | Generic PoE for any kind of data which is using the statement module          |
| 3.     | Unit tests            | Rudimentary tests for both runtime                                            |
| 4.     | Docker image          | Create docker image                                                           |
| 5.     | Tutorial && docs      | Finalise the docs and write a tutorial on how to use the implemented features |

1. Substrate based chain implementation
2. The PoE runtime must record when the specific item was seen for the first time regardless of the copyright and ownership.
3. Rudimentary tests for both runtime modules
4. Self-explanatory
5. Self-explanatory

### Milestone 2 - Canceled via Elements

In this milestone we will start working on PoCLO, implementing the connection to PoE and working on the implementation of the rules and data validations. By the end of this milestone, we will have the working runtime that validates that equipment information already exists in PoE and has never been claimed and can create the ownership statement for a given input.

We have developed the algorithm for PoCLO in nodejs and the workflow is built with different architecture in mind. We must change it to fit the current solution. This module will be in charge of creating records for provable camera/lens ownership statements. The [current implementation](https://gitlab.com/sensio_group/sensio-faas/-/blob/master/client/src/views/Device/Verification.js) is built with React in our Proof-of-Concept webapp. PoCLO is a process that is very similar to what is used in image forensics. It's our first step to registering provable ownership statements. Our current solution uses PKI and CID, which we will keep in the future together with the SSI and DID.

- **Estimated Duration:** 4 weeks
- **Costs:** 0 BTC

| Number | Deliverable          | Specification                                                                  |
| ------ | -------------------- | ------------------------------------------------------------------------------ |
| 1.     | PoCLO runtime module | This part will be dedicated to creating generic structure and defining the API |
| 2.     | UI for showcase      | Create working simple UI which can demo the whole workflow                     |
| 3.     | Unit tests           | Rudimentary tests for both runtime                                             |
| 4.     | Docker image         | Update docker image                                                            |
| 5.     | Tutorial && docs     | Update the docs and tutorial on how to use the implemented features            |

1. The PoCLO must provide the validation rules, validate them and create or revoke the statements. In this milestone, we will focus on creating the working validation rules, storage and API methods.
2. Simple UI to verify the equipment based on the uploaded photo
3. Self-explanatory
4. Self-explanatory
5. Self-explanatory

## Additional Information :heavy_plus_sign:

Gentle overview on the process:

![Ownership and copyright process][statements-claims]

- What work has been done so far?

At the moment we have PoC, web app + Graphql API + naive DAG, that we built as a showcase. We have the core functionality of all three sub-projects (very basic so far), photo upload and editing, claiming ownership and copyrights, selling ( for free, as it's a PoC ) and copyright request with approving and declining outcomes. We truly believe that (D)PKI or its variants are the future, that's why all users are given `ed25519` asymmetric keys and passphrase emailed. That key is used for signing and verification.

- Are there are any teams who have already contributed (financially) to the project?

Only the founders, [Daniel Maricic](https://www.linkedin.com/in/danielmaricic/) and [Elena Tairova](https://www.linkedin.com/in/elena-tairova/).

- Are there any other projects similar to yours? If so, how is your project different?

Some projects share a similar approach, like the majority of PoE/TimeStamping, but none of them does what we are trying to accomplish. Sensio, at the moment, is the only project out there that provides verifiable ownership and copyright claims based on real workflows, not `first came -> first hashed it -> owns it`.

- The team's long-term plans and intentions with this project.

SensioNetwork is the core part of Sensio and its applications which development is underway. First, the Digital Asset Management software for professional photographers will be launched, and later, with this community acting as ambassadors, we can expand to the mass market of smartphone holders. Well-established user-base and strong USP (connectivity, optimal protection of online IPR) will in its turn put Sensio in a position to disrupt the market of stock photography and video. Once launched, [People-2-People marketplace](https://www.sensio.group/#people-to-people-marketplace) will allow publishers, marketers and other creatives to acquire quality content directly from its author. Thus, a fairer and more efficient market for all the actors.

## Signatures

All the assets have been signed with https://keybase.io/woss and standard GPG tools. For GPG, append `.sig` and for keybase `.signed.saltpack` to the end of any image URL within this document.

[statements-claims]: https://sensio-assets.s3-eu-west-1.amazonaws.com/diagrams/Sensio-Network-Statements+%26+Claims.svg
