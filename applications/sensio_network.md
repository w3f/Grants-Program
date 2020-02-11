# Open Grant Proposal

- **Project:** [Sensio Network](https://www.sensio.group/sensio-network)
- **Proposer:** woss
- **Payment Address:** BTC : 3HLaefnngXW515Zr6MDdz3W2XpLojABeBW
- **Keybase** [Sensio](https://keybase.io/sensio)

## Project Description :page_facing_up:

SensioNetwork is a decentralized protocol that empowers content creators to sign, permanently record, and claim statements about their ownerships and copyrights, giving them opportunity to license their work and get [paid](https://www.sensio.group/#people-to-people-marketplace). SensioNetwork is an integral part of much larger project called [Sensio](https://sensio.group) which consist of two more sub-projects.

SensioNetwork's applications(dApps) ([Sensio Photo](https://www.sensio.group/sensio-photo) and [People-2-People marketplace](https://www.sensio.group/#people-to-people-marketplace)) have a potential of reaching millions of people and boosting the ecosystem's reputation and adoption.

SensioNetwork will be implemented as a parachain with its own token (THT) using Substrate. We will run several full nodes to help the Kusama/Polkadot networks as well enough collator nodes to secure the SensioNetwork parachain. For the copyright/ownership transfers we will be using smart contracts and which can be extended to use any crypto/fiat currency.

SensioNetwork is the backbone of the Sensio project. Building the SensioNetwork with Substrate and Polkadot ecosystem, matches with the our principles and views on interoperability and interconnectivity. One of the Sensio's goal is to establish fair and trustworthy multimedia market, primarily for photography and video, and we can do that only with flexible blockchain solution.

## Team :busts_in_silhouette:

- **Members:** Daniel Maricic
- **LinkedIn Profiles:** https://www.linkedin.com/in/danielmaricic/
- **Code Repos:** [https://gitlab.com/sensio_group](https://gitlab.com/sensio_group)
- **Website:** [https://sensio.group/sensio-network](https://sensio.group/sensio-network)
- **Legal Structure:** 7signals Ltd, Sepapaja tn 6, 15551, Tallinn, Estonia
- **Team's Experience:** Daniel has over 12 years of developing experience, mostly in backend development. He has been working in various sectors from Fintech to gaming. He has started being involved in blockchain space little over year ago when he started researching on blockchain solution for Sensio project. He is very quick with acquiring new knowledge and very enthusiastic about Polkadot in general. That is why he applied for the Ambassador program.😎

## Development Roadmap :nut_and_bolt:

- **Total Estimated Duration:** 3 months
- **Total Costs:** 3 BTC

### Milestone 1

In this milestone we want to build working parachain and implement two runtime modules. Building the modules follows least-dependency approach.

- **Estimated Duration:** 4 weeks
- **Costs:** 1 BTC

| Number | Deliverable                                          | Specification                                                                                                                                                               |
| ------ | ---------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1.     | Parachain                                            | Building the parachain                                                                                                                                                      |
| 2.     | Proof-Of-Existence runtime module                    | We want to be able to create record of any photo, video prior starting any kind of validation process                                                                       |
| 3.     | Proof-Of-Camera-Lens-Ownership runtime module part 1 | We have developed this algorithm in a different language and for different architecture. This part will be dedicated to creating basic structure and defining the API. This |
| 4.     | Docker image                                         | Create docker image with PoC api for testing purposes.                                                                                                                      |
| 5.     | Tutorial && docs                                     | Finalise the docs and write a tutorial on how to use the implemented features.                                                                                              |

1. Parachain implementation
2. First runtime module will be Proof-Of-Existence where the system must record when the specific item was seen for the first time regardless of the copyright or ownership statement. This module is ran for every new unique item that appears.
3. Second runtime module will be Proof-Of-Camera-Lens-Ownership. This module will be in charge of creating records for provable camera/lens ownership statements.
4. Self-explanatory
5. Self-explanatory

### Milestone 2

Please add additional milestones in the same way. If possible, include a tutorial and a docker image for each milestone to make it easier for us to evaluate your software.

- **Estimated Duration:** 4 weeks
- **Costs:** 1 BTC

| Number | Deliverable                                          | Specification                                                                                                                   |
| ------ | ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| 1.     | Proof-Of-Camera-Lens-Ownership runtime module part 2 | Continuation from the previous milestone. Implementation of the rest of the functionality and the QRcode encoding and decoding. |
| 2.     | Copyright statements runtime module                  |                                                                                                                                 |
| 3.     | Docker image                                         | Update docker image                                                                                                             |
| 4.     | Tutorial && docs                                     | Update the docs and tutorial on how to use the implemented features.                                                            |

### Milestone 3

Please add additional milestones in the same way. If possible, include a tutorial and a docker image for each milestone to make it easier for us to evaluate your software.

- **Estimated Duration:** 4 weeks
- **Costs:** 1 BTC

| Number | Deliverable                         | Specification                                                        |
| ------ | ----------------------------------- | -------------------------------------------------------------------- |
| 1.     | Ownership statements runtime module |                                                                      |
| 2.     | Docker image                        | Update docker image                                                  |
| 3.     | Tutorial && docs                    | Update the docs and tutorial on how to use the implemented features. |

## Additional Information :heavy_plus_sign:

Any additional information that you think is relevant to this application that hasn't already been included.

Possible additional information to include:

- What work has been done so far?

At the moment we have PoC web app + Graphql API + naive DAG that we built as a showcase to everyone who was interested. We have the core functionality of all three sub-projects (very naïvely), photo upload and editing, claiming ownership and copyrights, selling ( for free, because it is a PoC ) and copyright request with approve and decline outcomes. We truly believe that (D)PKI or its variants is the future, that's why all users are given `ed25519` asymmetric keys and passphrase emailed. That key is used for signing and verification.

- Are there are any teams who have already contributed (financially) to the project?

Only the founders, [Daniel Maricic](https://www.linkedin.com/in/danielmaricic/) and [Elena Tairova](https://www.linkedin.com/in/elena-tairova/).

- Are there any other projects similar to yours? If so, how is your project different?

There are project that share similar approache, like majority of PoE/TimeStamping, but none that does what we are trying to do. Sensio, at the moment, is the only project out there that provides verifiable ownership and copyright claims based on real workflows, not `first came -> first hashed it -> owned it`.

- The team's long-term plans and intentions with this project.
