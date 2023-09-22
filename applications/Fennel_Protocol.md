# Fennel Protocol

- **Team Name:** Fennel Labs
- **Payment Address:** 0xF505894841d53AaBDe6EdeA7C5970fFe3A0240b2 (DAI)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

### Overview

Fennel Labs and Whiteflag Foundation aim to improve the ways that organizations communicate with each other in calamitous situations and austere environments where coordination and deconfliction is vital.

This grant proposal describes the first step of a long-term plan to develop Fennel Protocol, a Substrate chain that will provide the Polkadot ecosystem with the Whiteflag Protocol specification, an open standard for a neutral and trusted messaging network based on blockchain technology.

The background of the Whiteflag specification is as follows:

> Current armed conflicts are highly complex, because of the sheer number of parties involved: regular military forces, armed groups, peacekeeping forces, neutral parties such as journalists and non-governmental human-rights and aid organisations, civilians, refugees etc. Even though parties are opposing forces, or neutral organisations that do not want to show any affiliation, they do require to quickly and directly communicate to one or more other parties involved in the conflict in different situations.
> <br /> <br /> This is not new. The white flag is the original internationally recognized protective sign of truce or ceasefire, and request for negotiation. A white flag signifies to all that an approaching negotiator is unarmed, with an intent to surrender or a desire to communicate.
> <br /> <br /> This standard for a digital white flag protocol, the Whiteflag Protocol, provides a reliable means for both combatant and neutral parties in conflict zones to digitally communicate pre-defined signs and signals using blockchain technology. These sign and signals can also be used to communicate information about natural and man-made disasters, thus creating shared situational awareness beyond conflicts.
> <br /> <br />  All in all, the protocol forms the basis for a neutral and open network, the Whiteflag Network, for trusted real-time messaging between parties in conflicts and disaster response.

One can find more details about the Whiteflag Protocol specification by clicking on these links:

- [Protocol Specification](https://standard.whiteflagprotocol.org/)
- [Whiteflag Website](https://www.whiteflagprotocol.org/)



### Project Details

Fennel Protocol will be a blockchain implementing the protocol outlined in our specification documents.
As such, the interface will be exposed through Substrate extrinsics, callable through normal RPC execution.
The protocol implementation itself will ship as a standard Substrate executable node.
Docker will be used to generate consistent testing environments, and Github Actions will provide continuous revision checking against a set of tests defined during the development process.

The Protocol will consist of 3 Runtime Modules - `fennel_trust_pallet`, `fennel_keystore_pallet`, and `fennel-signal`.
Documentation for the in-progress development of these modules is located on [GitHub](https://fennellabs.com/Fennel-Protocol/doc/fennel_protocol_runtime/index.html) and is refreshed as changes are accepted into the `main` branch of the source repository.
The high-level project specification is located on [Github](https://raw.githubusercontent.com/fennelLabs/Fennel-Protocol-Paper/master/Paper.pdf) as well and is available as a PDF.

For exact specifications of storage, events, and extrinsics definitions, visit:

- [pallet-keystore](https://fennellabs.com/Fennel-Protocol/doc/pallet_keystore/pallet/struct.Pallet.html)

- [pallet-trust](https://fennellabs.com/Fennel-Protocol/doc/pallet_trust/pallet/struct.Pallet.html)

- [pallet-signal](https://fennellabs.com/Fennel-Protocol/doc/pallet_signal/pallet/struct.Pallet.html)

- [pallet-fennel-identity](https://fennellabs.com/Fennel-Protocol/doc/pallet_fennel_identity/pallet/struct.Pallet.html)

A proof-of-concept for the basic functionality of Fennel Protocol was completed as the winning entry to the Conflict Prevention track of the Odyssey Momentum Hackathon in 2020, under the name Theriak.
The repository for that project is located on [GitHub](https://github.com/fennelLabs/Theriak).
The features for this proof-of-concept included key management, basic trust operations, and a simple, preliminary version of the signaling mechanism.

Fennel Protocol is not a user-facing application.
Though applications are planned, they are beyond scope for this proposal.

![img](https://raw.githubusercontent.com/fennelLabs/FennelBlog/master/arch-overview.png)

![img](https://raw.githubusercontent.com/fennelLabs/FennelBlog/master/detailed-arch.png)

![img](https://raw.githubusercontent.com/fennelLabs/FennelBlog/master/sequence_diagram.svg)

![img](https://raw.githubusercontent.com/fennelLabs/FennelBlog/master/component_diagram.svg)

![img](https://raw.githubusercontent.com/fennelLabs/FennelBlog/master/keytosignal.png)

![img](https://raw.githubusercontent.com/fennelLabs/FennelBlog/master/Whiteflag_on_Fennel.png)

## Team :busts_in_silhouette:

### Team members

- Sean Batzel
- Isaac Adams
- Andre Vanoncini
- Fernando Fonseca-Avalos
- Mateusz Plaza
- Jan Eberle

### Contact

- **Contact Name:** Fennel Labs Core Team
- **Contact Email:** info@fennellabs.com
- **Website:** www.fennellabs.com

### Legal Structure

- **Registered Address:** 1309 Coffeen Avenue Suite 1200, Sheridan, Wyoming 82801
- **Registered Legal Entity:** Fennel Labs, LLC.

### Team's experience

#### Sean Batzel

- Development Team co-lead for Theriak, a project which won the 2020 Odyssey Momentum hackathon's Conflict Prevention track.

- 2 years as lead and only developer of fEMR OnChain, a modular EMR software targeting eventual decentralization.
- 10 years of programming and software development experience
- 5 years of experience as lead/primary developer on expansive projects
- 2 years experience in remote development team coordination
- Graduate-level research experience studying blockchain’s uses in high-level information networks
- Dedicated focus on exploring use cases for blockchain and decentralized consensus beyond cryptocurrency and fusing Web 2 and Web 3 applications in a way that eases the industry’s transition to more decentralized computing

#### Isaac Adams

- Succesfully launched [savvi](https://savvi.com) as tech lead and developed the jwt authentication, sign in/out, cart, and checkout features on the application while helping manage other developers working on the project

- Open source contributions: [added missing rpc method](https://github.com/harmony-one/sdk/pull/82) to harmony-one blockchain's npm package, [json ld transformer](https://github.com/parcel-bundler/parcel/pull/4397) for parcel v2, and extending usage of action-download-artifact to support the [github.ref variable](https://github.com/dawidd6/action-download-artifact/pull/55)
- Published author for [research](https://www.mdpi.com/2571-6182/1/1/1) on the degradation of antibiotics using a plasma apparatus
- 4 years of experience development experience on a wide range of projects, including web applications built using react/angular|.net core|SQL, labview applications for lab experiments, and devops/cloud operations
- 1 year of experience of being tech lead on two successfully launched web projects
- Graduated from Drexel University with a B.S. in Chemical Engineering

#### Andre Vanoncini

- Working with the Google Tango tablet for my master thesis (C++, first in depth steps for me with git and linux)

- Developing and implementing a focussing tool and process in C++ with Qt QML GUI
- Getting Inference working with libtorch (C++) and JNI
- Understanding compilation of C++ with cmake and being able to compile on the command line instead of the green play buttons

#### Fernando Fonseca-Avalos

- Experience with C/C++, Python, JavaScript

- Developing proficiency with Rust.

#### Mateusz Plaza

- Captain for Theriak, a project which won the 2020 Odyssey Momentum hackathon's Conflict Prevention track.

- 8 years of experience working in high performance medical units
- 2 years of experience leading medical humanitarian teams in Central America
- 2012 Fulbright Research Fellow: completed research project on Poland's Solidarity Movement, exploring methods of self-organization and coordination of social movements that leverage symbols as a form of empowerment and that resist the threat of disinformation/active measures/propaganda.
- Published blockchain researcher, with a focus on the epistemic significance of decentralized blockchain ledgers, especially in terms of Self Sovereign Identity, Decentralized Autonomous Organization, and AI Ontology.

#### Jan Eberle

- Experience distinguishing misinformation, disinformation, and combatting the infodemic as a Media Analyst

- Strong communications & usability experience from linguistic studies
- Writing documents for different channels/audiences as a technical writer
- Practical peace keeping experience as a swiss guard in the Vatican

#### Advisors

- Andrew Plaza

- Zbigniew Zielinski

### Team Code Repos

- https://github.com/Romulus10
- https://github.com/isaacadams
- https://github.com/vanandre
- https://github.com/fennelLabs
- https://github.com/Romulus10/infostratus
- https://github.com/Romulus10/blockchain_message
- https://github.com/fennelLabs/Theriak

### Team LinkedIn Profiles (if available)

- https://www.linkedin.com/in/seanbatzel/
- https://www.linkedin.com/in/mateusz-p-6b126424/
- https://www.linkedin.com/in/jan-eberle-553110195/
- https://www.linkedin.com/in/fernando-fonseca-avalos-a0a516224/
- https://www.linkedin.com/in/andreva/
- https://www.linkedin.com/in/isaacdadams/

### Ecosystem Fit

Fennel Protocol's key and identity management functionality is fine-tuned for decentralized communication that makes use of pre-defined signals and signs;
for example, the Whiteflag specification uses predefined signals and signs derived from International Humanitarian Law, the CRED Disaster Category Classification, and the OECD Economic Infrastructure Common Reporting Standard Codes.
Future proposals will build up Fennel Protocol to accomodate the full extent of the Whiteflag Protocol specification.
Substrate's interoperability will provide the Polkadot ecosystem with a shared conception of Whiteflag Protocol's predefined signals and signs;
this will allow users to seemlessly send Whiteflag messages across the decentralized Polkadot ecosystem. Critically, an interoperable Whiteflag Network ensures situational awareness is not siloed but is unified in critical use cases. This helps decision makers receive a full picture of the field of operations.

#### Whiteflag Section 2.5: Minimally Viable Implementation:

Fennel Protocol will implement the minimally viable implementation of the Whiteflag functionality that allows for the sending of Whiteflag messages.
We will implement further components of Whiteflag in further proposals. Whiteflag section 2.5 states: any implementation of the Whiteflag Protocol that sends messages on the Whiteflag Network, must implement at a minimum the following functionality:

- The Whiteflag Authentication message with at least one authentication option. At release, both Shared Secret and External Resource Authentication will be fully supported.

- The possibility to Recall, Update and Discontinue (Whiteflag Reference Codes 1, 2 and 4) any implemented sign or signal, if such Reference Type is valid i.a.w. Reference options. These will be implemented as low-level Fennel messages through the Sign extrinsic call, effectively creating a specialized transaction subtype for each of these.

Fennel Protocol will provide the Substrate infrastructure for two authentication methodologies that abide by Whiteflag Protocol’s specification.

- Method 1, External Resource Authentication: requires the user to declare their identity in some public and trusted place which can be referenced in their activities. This often requires a strong proof, such as a cryptographic signature and public key declaration, that can be verified to prove that a transaction comes from the identity declared.

- Method 2, Shared Secret Authentication:  requires an end user to establish a token known only to themselves and some authentication authority, similar to a password in more Web 2.0-oriented authentication.

Fennel Protocol will support both of these authentication mechanisms at launch, with shared secrets covered by our encrypted channel mechanism and external resources declared and submitted as public transactions through the Identity Update extrinsic.

In terms of a target audience, we have a small established userbase waiting for this protocol to be prepared for launch.
This proposal will set the stage for a greater effort to empower developers to build decentralized applications that allow users to transmit authentic, secure, and timely real-time messages based on pre-defined signals and signs.
Most importantly, we hope this effort will support decision makers working in critical environments in need of such communication, such as first responders, medical professionals, pharmacovigilance scientists, and investigative journalists.

## Development Status :open_book:

The Fennel Protocol source respository is located at https://github.com/fennelLabs/Fennel-Protocol.
Included is the runtime structure for a Substrate node and references to the three main submodules that will implement Fennel Protocol's core functionalities.
The most recent version of this is an updated version of the Theriak project's core functionality, ported to the most recent version of Substrate at the time of writing.
Any blockchain components will be implemented in Rust, with the initial implementations of chain-parallel components written in Python.

The initial Whiteflag implementation will cover AES 256 encryption as outlined in the Whiteflag specification.
Fennel Protocol will also include support for RSA with a minimal key size of 4096 bits.

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 3 months
- **Full-Time Equivalent (FTE):**  3 FTE
- **Total Costs:** 50,000 USD

### Milestone 1 — Implement Substrate Modules

- **Estimated duration:** 1 months
- **FTE:**  3
- **Costs:** 15,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Unlicense |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an **article** that explains the basic structure of our identity management tools and how they can be used at the blockchain level. |
| 1. | Identity Creation | A Substrate extrinsic set will be created for creating an identity. |
| 2. | Identity Mutation | A Substrate extrinsic set will be created and added to the Identity module for updating identity elements to an existing identity structure. |
| 3. | Identity Revocation | A Substrate extrinsic set will be created that will securely declare revocation of an identity or key to the rest of the network. |
| 4. | Identity Signature | The Identity module will be updated with an extrinsic set that will allow for an identity to issue signed certificates and sign existing certificates. |
| 5. | Trust Issuance | We shall create a Substrate Extrinsic to create signed trust connections between identities. |
| 6. | Trust Request | We shall create a Substrate Extrinsic to send an asyncronous message asking an identity to issue trust to the sender. |
| 7. | Trust Revocation | The Trust pallet will be expanded to allow for revoking existing trust transactions. |

### Milestone 2 — Additional features

- **Estimated duration:** 1 months
- **FTE:**  3
- **Costs:** 15,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Unlicense |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an **article** that describes key generation and management with Fennel Protocol. |
| 1. | Keypair Creation | We will integrate system-level key management libraries to provide a collection of non-blockchain key sources. We'll include AES 256 and RSA 4096 at this point. |
| 2. | Public Key Transmission | We will develop a Substrate module that contains public key management extrinsics for broadcasting public keys' existence and locations as a signal. |
| 3. | Public Key Retrieval | We will add an extrinsics set to the Key Management module allowing for simple retrieval of public keys given their location.<br />This will necessarily include a mechanism for verifying that the key retrieved is the key requested. |
| 4. | Encrypted Communciation Channel Negotiation | We will create a Substrate module with extrinsics used to negotiate a three-way key handshake between two parties through cooperation of on- and off-chain compute. |

### Milestone 3 — Additional features

- **Estimated duration:** 1 months
- **FTE:**  3
- **Costs:** 20,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Unlicense |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an **article** overviewing using Fennel Protocol in applications for secure off-chain data-centric messaging and secure on-chain signal mechanisms. |
| 1. | Peer Retrieval | We will construct a Substrate-resident method for applications exposing the same services to identify and locate one another through on-chain signals. |
| 2. | Encrypted Channels for IP Information | A set of off-chain workers and a parallel, scalable server will be constructed allowing for encrypted channels to be created, used, and collapsed to exchange small amounts of sensitive information such as service endpoint IP addresses. |
| 3. | General-Purpose Signal Generation | We will create a Substrate module capable of producing arbitrary signals on-chain, both through broadcast and directly targeted to a single recipient or group of recipients. |
| 4. | Whiteflag Authentication | At grant completion, Fennel Protocol will support the basic authentication message mechanism outlined in section 2.5 of the Whiteflag Specification. This will establish a unified message format for applications authenticating over Fennel and targeting our eventual full Whiteflag implementation. |
| 5. | Whiteflag Reference Codes 1, 2, and 4 | We will create a Minimum Implementation of Whiteflag, fully resident as a component of Fennel Protocol, which will support operations for creating, recalling, updating, and discontinuing Whiteflag signals. |

## Future Plans

Fennel Protocol is intended to be a continuously-developing project.
The basic architecture was designed with extensibility in mind;
identity and signaling applications should be able to easily build on the runtime with expanding available features and continued support for existing features.


## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?**
We heard about the Grants Program from the Web 3 Foundation Website, as well as personal recommendations from Polkadot community members.

Thus far, we've ported our Theriak repository to the most recent version of Substrate as of writing of this application.
Financial contribution has not yet begun for the Fennel Protocol project.
We've also begun writing function and trait stubs to ensure that thorough documentation can be generated.
