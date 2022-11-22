# Fennel Protocol

* **Team Name:** Fennel Labs
* **Payment Address:** 0xF505894841d53AaBDe6EdeA7C5970fFe3A0240b2 (DAI)
* **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 3

## Project Overview :page_facing_up:

### Preface

The current conflict in Ukraine reminds us that there is not enough protection of civilian lives in conflict areas. Our work provides the Polkadot ecosystem with the tools necessary to build Whiteflag Protocol-based Substrate technologies that could protect civilian lives in conflict and ensure all actors are accountable to International Humanitarian Law (IHL). We are motivated to continue our long-term commitment to researching and developing Fennel Protocol--a Substrate chain built for the unique needs of Whiteflag Protocol's messaging specfication. We are grateful for the Web 3 Foundation's support, which allows us to innovate a timely, impactful, and humanitarian Substrate-based technology that leverages Web 3.0 to bring about a more peaceful future.

### Overview

Fennel Labs and Whiteflag Foundation aim to improve the ways that organizations communicate with each other in calamitous situations and austere environments where coordination and deconfliction is vital.

In Q1 of 2022, we received our first Web 3 Foundation Open Grant. This grant was the first step of a long-term plan to develop Fennel Protocol, a Substrate implementation of Whiteflag Protocol's messaging specification, an open standard for a neutral and trusted messaging network based on blockchain technology; specifically, in Q1 of 2022, we built a Fennel blockchain node and parallel server/client software intended to allow access to Whiteflag messaging features, as well as encrypted, transient messages between identities on the network. Notably, Q1 of 2022 covered only a minimum viable implementation of Whiteflag Protocol messaging.

This proposal is for the second grant needed to further develop the Fennel Protocol in Q2 of 2022. The second grant will fully implement Whiteflag Protocol messaging in Substrate. In addition, we will provide a web-based user interface for interacting with all relevant features of the Fennel Protocol decentralized software distribution. This will include an interface for sending encrypted messages between users of the protocol via the encrypted message server created in the first grant project, and an interface providing access to Whiteflag signal encoding, decoding, submission, and retrieval functionality. Finally, the second grant project will provide IPFS support for Whiteflag Protocol.

The background of the Whiteflag Protocol messaging specification is as follows:

> Current armed conflicts are highly complex, because of the sheer number of parties involved: regular military forces, armed groups, peacekeeping forces, neutral parties such as journalists and non-governmental human-rights and aid organisations, civilians, refugees etc. Even though parties are opposing forces, or neutral organisations that do not want to show any affiliation, they do require to quickly and directly communicate to one or more other parties involved in the conflict in different situations.
> This is not new. The white flag is the original internationally recognized protective sign of truce or ceasefire, and request for negotiation. A white flag signifies to all that an approaching negotiator is unarmed, with an intent to surrender or a desire to communicate.
> This standard for a digital white flag protocol, the Whiteflag Protocol, provides a reliable means for both combatant and neutral parties in conflict zones to digitally communicate pre-defined signs and signals using blockchain technology. These sign and signals can also be used to communicate information about natural and man-made disasters, thus creating shared situational awareness beyond conflicts.
> All in all, the protocol forms the basis for a neutral and open network, the Whiteflag Network, for trusted real-time messaging between parties in conflicts and disaster response.

One can find more details about the Whiteflag Protocol specification by clicking on these links:

* [Protocol Specification](https://standard.whiteflagprotocol.org/)
* [Whiteflag Website](https://www.whiteflagprotocol.org/)

### Project Details

The second grant project will have two phases; these phases will build off the first grant project.

The first phase will encompass development of a user interface geared toward using the on- and off-chain resources created during the first grant project for secure communication features connecting the people and organizations using our Protocol. This will include functions for storing keys locally, sending and receiving messages, and issuing calls to Fennel Protocol extrinsics.

The second phase will build on the functionalities completed in the first grant project, specifically a Substrate pallet with extrinsics for emitting general-purpose, a storage-independent on-chain messages, and a Rust implementation of Whiteflag Protocol's authentication mechanisms. These will cooperate with the existing identity and key management features of Fennel Protocol (completed during our first grant project) to support the encryption and authentication features required for Whiteflag Protocol's security. The second phase implements the complete array of predefined signs and signals that are standardized according to the Whiteflag Protocol messaging specification; namely, the second phase will create Substrate implementations of the functional messages Protective Signs, Emergency Siginals, Danger Signs, Status Signals, Infrastructure Signs, Mission Signals, Resource messages, and FreeText messages.

During the course of our first grant project, we began the minimum implementation of Whiteflag Protocol. The off-chain logic used to generate Whiteflag messages suitable for submission to the blockchain is under development on [Github](https://github.com/fennelLabs/fennel-lib/tree/whiteflag/src/whiteflag).

In the following diagram, Whiteflag exists as a component of the Trust-Aware Signal Transaction Layer.
![img](https://raw.githubusercontent.com/fennelLabs/FennelBlog/master/arch-overview.png)

The following key management scheme, along with Diffie-Hellman key negotiation, is used to enable secure on- and off-chain communications between users of the protocol.
![img](https://raw.githubusercontent.com/fennelLabs/FennelBlog/master/detailed-arch.png)

Whiteflag operates with a lexicon of message codes indicating the purpose and intent of the transmitted message:

| Code | Name | Description |
| ---- | ---- | ----------- |
| P | ProtectiveSign | Sign to mark objects under the protection of international law |
| E | EmergencySignal | Signal to send an emergency signal when in need of assistance |
| D | DangerSign | Sign to mark a location or area of imminent danger, e.g. an area under attack, land mines, disaster, etc.
| S | StatusSignal | Signal to provide the status of an object, or specifically for persons: give a proof of life |
| I | InfrastructureSign | Sign to mark critical infrastructure, e.g. roads, utilities, water treatment, hospitals, power plants etc. |
| M | MissionSignal | Signal to provide information on activities undertaken during a mission |
| Q | RequestSignal | Signal to perform requests to other parties |
| R | Resource | Message to point to an internet resource |
| F | FreeText | Message to send a free text string |

![img](https://raw.githubusercontent.com/fennelLabs/FennelBlog/master/sequence_diagram.svg)

![img](https://raw.githubusercontent.com/fennelLabs/FennelBlog/master/component_diagram.svg)

![img](https://raw.githubusercontent.com/fennelLabs/FennelBlog/master/keytosignal.png)

![img](https://raw.githubusercontent.com/fennelLabs/FennelBlog/master/Whiteflag_on_Fennel.png)

## Team :busts_in_silhouette:

### Team members

* Sean Batzel
* Isaac Adams
* Ed Hertzog
* Jan Eberle
* Mateusz Plaza

### Contact

* **Contact Name:** Fennel Labs Core Team
* **Contact Email:** info@fennellabs.com
* **Website:** www.fennellabs.com

### Legal Structure

* **Registered Address:** 1309 Coffeen Avenue Suite 1200, Sheridan, Wyoming 82801
* **Registered Legal Entity:** Fennel Labs, LLC.

### Team's experience

#### Sean Batzel

* Development Team Lead for the Fennel Protocol grant started in January 2022.
* Development Team co-lead for Theriak, a project which won the 2020 Odyssey Momentum hackathon's Conflict Prevention track.
* 2 years as lead and only developer of fEMR OnChain, a modular EMR software targeting eventual decentralization.
* 10 years of programming and software development experience
* 5 years of experience as lead/primary developer on expansive projects
* 2 years experience in remote development team coordination
* Graduate-level research experience studying blockchain’s uses in high-level information networks
* Dedicated focus on exploring use cases for blockchain and decentralized consensus beyond cryptocurrency and fusing Web 2 and Web 3 applications in a way that eases the industry’s transition to more decentralized computing

#### Isaac Adams

* Blockchain developer on the Fennel Protocol grant filed in January 2022.
* Succesfully launched [savvi](https://savvi.com) as tech lead and developed the jwt authentication, sign in/out, cart, and checkout features on the application while helping manage other developers working on the project
* Open source contributions: [added missing rpc method](https://github.com/harmony-one/sdk/pull/82) to harmony-one blockchain's npm package, [json ld transformer](https://github.com/parcel-bundler/parcel/pull/4397) for parcel v2, and extending usage of action-download-artifact to support the [github.ref variable](https://github.com/dawidd6/action-download-artifact/pull/55)
* Published author for [research](https://www.mdpi.com/2571-6182/1/1/1) on the degradation of antibiotics using a plasma apparatus
* 4 years of experience development experience on a wide range of projects, including web applications built using react/angular|.net core|SQL, labview applications for lab experiments, and devops/cloud operations
* 1 year of experience of being tech lead on two successfully launched web projects
* Graduated from Drexel University with a B.S. in Chemical Engineering

#### Ed Hertzog

* Cloud Architect and full-stack developer with 20+ total years of professional technology experience
* 10+ years of UI/UX engineering and digital product development experience
* 2+ years of experience teaching programming and web development at the University of the Arts in Philadelphia
* Co-author and presenter of "Disrupting the Social Meaning of Money in a Bitcoin-Based Economy" at the ACM CHI Conference on Human Factors in Computing Systems in Toronto in 2014
* Graduated from University of Maryland Global Campus with a Masters of Science in Cloud Computing Architecture in 2021
* Graduated from Pennsylvania State University with a B.S. in Political Science in 1997

#### Mateusz Plaza

* Blockchain researcher of decentralized semiotics and communications on the Fennel Protocol grant filed in January 2022.
* Captain for Theriak, a project which won the 2020 Odyssey Momentum hackathon's Conflict Prevention track.
* 8 years of experience working in high performance medical units
* 2 years of experience leading medical humanitarian teams and clinics in Central America
* 2012 Fulbright Research Fellow: completed research project on Poland's Solidarity Movement, exploring methods of self-organization and coordination of social movements that leverage symbols as a form of empowerment and that resist the threat of disinformation/active measures/propaganda.
* Published blockchain researcher, with a focus on the epistemic significance of decentralized blockchain ledgers, especially in terms of Self Sovereign Identity, Decentralized Autonomous Organization, and AI Ontology.

#### Jan Eberle

* Experience distinguishing misinformation, disinformation, and combatting the infodemic as a Media Analyst
* Strong communications & usability experience
* Writing documents for different channels/audiences as a technical writer
* Practical peace keeping experience as a swiss guard in the Vatican

#### Advisors

* Andrew Plaza
* Zbigniew Zielinski

### Team Code Repos

* <https://github.com/Romulus10>
* <https://github.com/isaacadams>
* <https://github.com/fennelLabs>
* <https://github.com/Romulus10/infostratus>
* <https://github.com/Romulus10/blockchain_message>
* <https://github.com/fennelLabs/Theriak>

### Team LinkedIn Profiles (if available)

* <https://www.linkedin.com/in/seanbatzel/>
* <https://www.linkedin.com/in/mateusz-p-6b126424/>
* <https://www.linkedin.com/in/isaacdadams/>
* <https://www.linkedin.com/in/ed-hertzog-ms-a855213/>

### Ecosystem Fit

Fennel Protocol's key and identity management functionality is fine-tuned for decentralized communication that makes use of pre-defined signals and signs; for example, the Whiteflag specification uses predefined signals and signs derived from International Humanitarian Law, the CRED Disaster Category Classification, and the OECD Economic Infrastructure Common Reporting Standard Codes. Future proposals will build up Fennel Protocol to accomodate the full extent of the Whiteflag Protocol specification. Substrate's interoperability will provide the Polkadot ecosystem with a shared conception of Whiteflag Protocol's predefined signals and signs; this will allow users to seemlessly send Whiteflag messages across the decentralized Polkadot ecosystem. Critically, an interoperable Whiteflag Network ensures situational awareness is not siloed but is unified in critical use cases. This helps decision makers receive a full picture of the field of operations. These predefined signs and signals provide an encoding standard for a wide range of protective signs, danger signs, and mission-critical signals. Uses for these signals include markers for indicating locations of hospitals, schools, and other protected locations, or indications of active hazards such as minefields.

Code     Name                                  Description

P     ProtectiveSign      Sign to mark objects under the protection of international law
E     EmergencySignal      Signal to send an emergency signal when in need of assistance
D     DangerSign          Sign to mark a location or area of imminent danger, e.g. an area under attack, land mines, disaster, etc.
S     StatusSignal      Signal to provide the status of an object, or specifically for persons: give a proof of life
I     InfrastructureSign  Sign to mark critical infrastructure, e.g. roads, utilities, water treatment, hospitals, power plants etc.
M     MissionSignal      Signal to provide information on activities undertaken during a mission
Q     RequestSignal       Signal to perform requests to other parties
R     Resource          Message to point to an internet resource
F      FreeText          Message to send a free text string

In terms of a target audience, we have a small established userbase waiting for this protocol to be prepared for launch. This proposal will set the stage for a greater effort to empower developers to build decentralized applications that allow users to transmit authentic, secure, and timely real-time messages based on pre-defined signals and signs. Most importantly, we hope this effort will support decision makers working in critical environments in need of such communication, such as NGO coordinators working in war zones, first responders, medical professionals, pharmacovigilance scientists, and investigative journalists.

## Development Status :open_book:

This proposal outlines the second step in the development of Fennel Protocol, a Substrate implementation of Whiteflag Protocol's messaging specification. We began implementation of the Whiteflag protocol during the first grant project. At the end of our first grant project's 3rd milestone, our Whiteflag implementation will fully support creating, revoking, and updating authentication messages according to the Whiteflag specification. In addition, Fennel Protocol provides Whiteflag with basic identity and key management features based on the web of trust concept. The second grant project will expand our Whiteflag implementation beyond the minimally viable implementation, aiming to fully implement Whiteflag Protocol's messaging specification in Substrate; more concretely, the second grant project will implement Whiteflag Protocol's functional messages. Additionally, the second grant project will create a full set of web-based interface tools and IPFS Support that will allow for more streamlined access to Whiteflag Protocol's messaging.

## Development Roadmap :nut_and_bolt:

### Overview

* **Total Estimated Duration:** 3 months
* **Full-Time Equivalent (FTE):**  2 FTE
* **Total Costs:** 90,000 USD

### Milestone 1 — Fennel/Whiteflag Web Application

* **Estimated duration:** 1 months
* **FTE:**  2
* **Costs:** 25,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Unlicense |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an **article** that describes the interface we've designed and the experience of Fennel Protocol it conveys. |
| 0f. | User-Facing Article | We will publish a user-facing article including a step-by-step guide for how to set up and use the tools created in this milestone. |
| 1. | Encryption and Message Tie-Ins | Support for Fennel Protocol’s off-chain encryption, key generation, and message passing features will be wrapped with a more user-friendly web app-based interface. This will specifically enable interactions with the encryption and key management features of the existing server/client _excluding RPC interactions_. |
| 2. | Fennel Protocol Tie-Ins | Using the Fennel Protocol RPC and polkadot.js directly, we’ll add support for interacting directly with the blockchain from the web interface. This will include account management, balance readouts, extrinsics calls, and on-chain storage access. |
| 3. | Whiteflag Message Support | Using fennel-lib, we will integrate Whiteflag Protocol with the Fennel Protocol interface. This will also support other location-based signaling mechanisms, through full support for Fennel Protocol's `signal` pallet. |

### Milestone 2 — Full Whiteflag

* **Estimated duration:** 2 months
* **FTE:**  3
* **Costs:** 65,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Unlicense |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an **article** that describes the interface design process and gives further background on the full features of Whiteflag beyond those already discussed in our first grant application. |
| 1. | Implementation of Whiteflag Protocol | Following the Whiteflag specification, we will expand our existing Whiteflag message generation/parsing to include all elements of the Protocol. This will include support for encoding and decoding all message classes, as well as JSON support for serialization of already-decoded messages between off-chain Whiteflag resources. <br /><br />This deliverable encompasses achieving full testing parity with github.com/WhiteflagProtocol/whiteflag-java and will therefore be a large portion of the time taken by this grant project. |
| 2. | Whiteflag Integration - fennel-cli | The Fennel command line client will be updated with full support for the full range of features provided by the Whiteflag Protocol. At the conclusion of the first grant, fennel-lib included encode/decode support for authentication messages and the basic set of Whiteflag message reference codes. This expansion will include all reference codes as command-line options for all message classes with some intelligent automation (e.g., if an authentication message has already been sent the interface will disallow another authenciation message from being sent until the previous is revoked), as well as full integration of fennel-lib's cryptography functions with our Whiteflag implementation. |
| 3. | IPFS Support | Up until now, the Fennel Protocol Keystore Pallet relied on users publishing keys and announcing their locations to the chain. We shall update the fennel-lib repository with IPFS integration to allow applications to publish keys in one command. Besides key publication, decentralized storage will be required for larger blocks of content (images, etc) which may be included in Whiteflag messages or similar on-chain signals, in an effort to avoid using on-chain storage in ways that might prove detrimental to the chain, network, and consensus as a whole. The CLI and web-based frontend will be adjusted to support committing these large objects to IPFS and anchoring their location to a transaction on-chain.<br /><br /> This expansion will include a self-hosted IPFS node in our current Docker setup. |

## Future Plans

Fennel Protocol is intended to be a continuously-developing project.
The basic architecture was designed with extensibility in mind;
identity and signaling applications should be able to easily build on the runtime with expanding available features and continued support for existing features.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?**
We heard about the Grants Program from the Web 3 Foundation Website, as well as personal recommendations from Polkadot community members.

Our first grant was completed in the first quarter of 2022 and built out the basis for our blockchain and the first set of Whiteflag features.
