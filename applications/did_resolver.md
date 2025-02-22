# Polkadot DID Resolver

- **Team Name:** Snowpine
- **Payment Details:**
    - **DOT**: 5HHJX1Nq3f6QH8HGxnCemyBQ4eAcpUwmKoLMw5AvboavPfrh
    - **Payment**: AssetHub/USDC: 5HHJX1Nq3f6QH8HGxnCemyBQ4eAcpUwmKoLMw5AvboavPfrh
- **Level:** 2

## Project Overview :page_facing_up:

### Overview

A decentralized identity resolver for Polkadot based blockchain following the [W3C DID specification](https://www.w3.org/TR/did-1.0/).

Even though on-chain identities can be queried directly from the identity pallet at People Polkadot parachain,
This requires specialized substrate knowledge and for many developers that are not inserted in the Polkadot ecosystem this might be a challenge.
The Decentralized Identity Foundation proposes a standard and a universal resolver which can be easily used by any entity for resolving on-chain identities, making interoperability possible between different decentralized systems.

As maintainers of one Polkadot Registrar, we are interested in expanding the on-chain identity functionalities from Polkadot to a broader ecosystem.
We believe that the implementation of this standard is one step towards achieving this goal.

### Project Details

The Polkadot DID-Driver project aims to implement a DID (Decentralized Identifier) driver for Polkadot-based addresses and identities. It will adhere to the W3C DID specification and integrate seamlessly with the existing Universal Resolver. By creating a driver that can be adopted by any registrar or username authority, our primary goal is to:
Enable interoperability between Polkadot and a broader ecosystem.
Provide an open-source repository that can serve as a standard reference implementation for Polkadot DIDs.
Enhance trust and security around identity management for Polkadot users by aligning with established global standards.
Once completed, this driver will allow applications, registrars, and username authorities to resolve Polkadot-based DIDs in a decentralized, trustless, and user-friendly manner.

The W3C specification for Decentralized Identities can be found at: https://www.w3.org/TR/did-1.0/
A developer environment of an universal resolver can be found at: https://dev.uniresolver.io/

With this project we aim into implementing the driver, the package that the driver uses to talk with the blockchain and the resolver.
The scope of this project does not include libraries for interacting with the resolver as its return is a JSON which should be easy enough for anyone to use.
Nor any registrar related functionalities as those can all be done using PolkadotJS or PAPI.


![](https://www.w3.org/TR/did-1.0/diagrams/did_brief_architecture_overview.svg)
Source: https://www.w3.org/TR/did-1.0/#architecture-overview


**Technical Architecture**

1. **DID Method Specification for Polkadot**

   A Polkadot-specific DID Method (e.g., did:polkadot:) with a formal method specification covering how DIDs are created, resolved, and managed on Polkadot.
   Clarifies the relationship between Polkadot addresses/accounts and the DID subject.

2. **DID-Resolver Driver**

   A standalone driver (likely in TypeScript) implementing:
   resolve(did:polkadot:xyz) → DIDDocument functionality
   HTTP API endpoints for easy integration with the Universal Resolver and other tools.
   Adherence to the Universal Resolver Driver Interface.

3. **A client package made in typescript**

   This package will be published on npm and will be used by for communication between the driver and the blockchain.

4. **Documentation & Example Integrations**

   Comprehensive documentation for developers, including quickstart guides on how to integrate Polkadot DIDs in their dApps or identity services.
   Sample usage with curl or JS libraries to demonstrate DID resolution.
   Possible reference integration with a Polkadot JS wallet or identity manager.


### Ecosystem Fit

Any system, dApps, wallets and others that uses the identity pallet will benefit from this driver. The standard will reduce the development burden of supporting different identity pallets on multiple parachains. This will also bridge the polkadot ecosystem with all DID ecosystem.
Aligning with the Polkadot's mission to create an interconnected ecosystem and promoting identity solutions that function beyond isolated systems.

The need of this project was identified when working in the development of PolkaIdentity, Kilt has a similar project but their implementation is based on their own custom pallets. Which cannot be used with the standard identity pallet present at People parachain and any other parachain that uses the identity pallet.

## Team :busts_in_silhouette:

### Team members

- Raman Shekhawat
- Leonardo Custodio
- João Pedro Novochadlo
- André dal Negro

### Contact

- **Contact Name:** Raman Shekhawat
- **Contact Email:** raman@snowpine.io
- **Website:** https://snowpine.io

### Legal Structure

- **Registered Address:** R. Cap Souza Franco, 350 - Cj 22 - Curitiba - PR, Brazil
- **Registered Legal Entity:**  Snowpine Labs Inovacao em Tecnologia LTDA

### Team's experience

Raman is a software engineer with years of experience in javascript, typescript, react, vue and other web technologies. He has been working in the polkadot ecosystem for the past 3 years.

Leonardo is a blockchain engineer working in the Polkadot ecosystem for the past 4 years, he worked at Polkadart, a full replacement for Polkadot-JS made in Dart, and is the founder of PolkaIdentity, a Polkadot identity solution.

João Pedro Novochadlo, formely the Head of Marketing at Chiliz/Socios.com and Marketing Director for Club Athletico Paranaense, has led brand expansion and innovation within sports.

André dal Negro is a software engineer specialized in front-end development, he has recently started working on the web3 ecosystem.


### Team Code Repos

- https://github.com/justraman
- https://github.com/leonardocustodio
- https://github.com/icedjaystormy
- https://github.com/wnexous

### Team LinkedIn Profiles (if available)

- https://www.linkedin.com/in/justraman123
- https://www.linkedin.com/in/leogcustodio
- https://www.linkedin.com/in/jpnovochadlo

## Development Status :open_book:

At this moment we have gone only through the research phase, and we have not yet started any development.

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 9 weeks
- **Full-Time Equivalent (FTE):**  2 FTE
- **Total Costs:** 30,000 USD
- **DOT %:** 50%

### Milestone 1

- **Estimated duration:** 3 weeks
- **FTE:**  2
- **Costs:** 10,000 USD

|  Number | Deliverable                 | Specification                                                                                                                                                   |
|--------:|-----------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **0a.** | License                     | Apache 2.0                                                                                                                                                      |
| **0b.** | Documentation               | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can use the driver, resolver and client package     |
| **0c.** | Testing and Testing Guide   | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker                      | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.                                                   |
| **0e.** | Article                     | We will publish an **article/workshop** that explains what was done/achieved as part of the grant.                                                              |
|     1.1 | Specification               | **Written specification** detailing `did:polkadot:` method parameters, structure, and resolution methods.                                                       |
|     2.1 | Client package              | A javascript client module for retrieving information from any Polkadot-based blockchain that implements the Identity pallet.                                             |

### Milestone 2

- **Estimated duration:** 3 weeks
- **FTE:**  2
- **Costs:** 10,000 USD

|  Number | Deliverable                 | Specification                                                                                                                                                   |
|--------:|-----------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **0a.** | License                     | Apache 2.0                                                                                                                                                      |
| **0b.** | Documentation               | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can use the driver, resolver and client package     |
| **0c.** | Testing and Testing Guide   | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker                      | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.                                                   |
| **0e.** | Article                     | We will publish an **article/workshop** that explains what was done/achieved as part of the grant.                                                              |
|     1.1 | Driver implementation       | **Universal Resolver-compatible driver** implementing the resolution of `did:polkadot:` and `did:kusama`.                                                                        |
|     2.1 | Resolution testing tools    | **Basic CLI or HTTP interface** for local resolution testing.                                                                                                   |

### Milestone 3

- **Estimated duration:** 3 weeks
- **FTE:**  2
- **Costs:** 10,000 USD

|  Number | Deliverable                 | Specification                                                                                                                                                   |
|--------:|-----------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **0a.** | License                     | Apache 2.0                                                                                                                                                      |
| **0b.** | Documentation               | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can use the driver, resolver and client package     |
| **0c.** | Testing and Testing Guide   | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker                      | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.                                                   |
| **0e.** | Article                     | We will publish an **article/workshop** that explains what was done/achieved as part of the grant.                                                              |
|     1.1 | Unit tests                  | **Unit tests** ensuring correct DID Document construction from Polkadot addresses.                                                                              |
|     2.1 | Integration & Documentation | **Example application** showcasing how an application can use the Polkadot-based DIDs.                                                                          |
|     3.1 | Marketing & Release         | **Community announcement, tutorials, and best-practice guides** for the final release.                                                                          |

## Future Plans

We plan to use this project to provide DIDs compliant with W3C on PolkaIdentity.
As such we plan to actively maintain the repository even after the grant is completed.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?**

One of the team members (Leonardo) has already participated in other W3F grants.