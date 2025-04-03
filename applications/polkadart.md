# Polkadart 

## Project Overview

[Polkadart](https://polkadart.dev) - A multi-platform library for creating hybrid applications (windows, linux, macOS, android, iOS, web) for any Polkadot-SDK based blockchain.

We have initiated the development of Polkadart through [W3F Grants Program](https://github.com/w3f/Grants-Program/blob/master/applications/Polkadart.md) focusing in making a full replacement implementation of Polkadot-JS in Dart.

Multiple packages were delivered and are being maintaining ever since, those include:
- [polkadart](https://pub.dev/documentation/polkadart/latest/)
- [polkadart_cli](https://pub.dev/documentation/polkadart_cli/latest/)
- [polkadart_keyring](https://pub.dev/documentation/polkadart_keyring/latest/)
- [polkadart_scale_codec](https://pub.dev/documentation/polkadart_scale_codec/latest/)
- [secp256k1_ecdsa](https://pub.dev/documentation/secp256k1_ecdsa/latest/)
- [sr25519](https://pub.dev/documentation/sr25519/latest/)
- [ss58](https://pub.dev/documentation/ss58/latest/)
- [substrate_bip39](https://pub.dev/documentation/substrate_bip39/latest/)
- [substrate_metadata](https://pub.dev/documentation/substrate_metadata/latest/)
- [ink_abi](https://pub.dev/documentation/ink_abi/latest/)
- [ink_cli](https://pub.dev/documentation/ink_cli/latest/)

And our documentation website at https://polkadart.dev

### Project Details

We would like to continue the development of the library proposing some new features and changes that we believe it will be very benefical to the community.
As of April 2nd, polkadart has over 1.33k downloads on [pub.dev](https://pub.dev), 43 stars on github, 401 PRs closed, 179 issues solved, and 12 contributors.
A few projects we know that are using it include: Encointer Wallet, Threefold Connect, WeTEE, Reown/WalletConnect

Now, our team believes that reducing the learning curve of how to develop applications and use Polkadart is one key aspect necessary to increase the adoption of our library
And consequently could result in more mobile and desktop applications being built for the Polkadot ecosystem. With that in mind we are proposing the following changes:

#### Playground

[Code Playground](https://code.polkadart.dev/) is a playground that we are developing to help users to learn and use Polkadart with ease.
It is a web application, compiled in wasm, that works in any platform. It allow users to test and learn concepts about the library and Polkadot
Without the need of setting up a development environment, installing IDEs, SDKs or any other tools.

Our goal with the playground is to make available snippets, examples and tutorials of common use-cases of interactions with Polkadot using our SDK.
We also plan to add support for saving and sharing code snippets, like JSFiddle, CodePen and other JS playgrounds, this ensures that the content in our
Website can grow without the need of the Polkadart team itself to do everything, possibiliting organic grow of our community.

Our playground can also be embedded in other documentation websites to make it more dinamic and interactive the learning process.

#### Metadata V16

The metadata v16 is currently being stabilized and it introduces a few changes to the structure of the metadata along with other faetures like transaction format v5.
We would like to add support for that at all our libraries as early as possible so our users can get its benefits as soon as it is released.


#### Use Typed Metadata on polkadart_cli

With the support of metadata v15 and merkleized metadata, we have prepared our `substrate_metadata` package to be able to provide
Typed extrinsics when generating the types with `polkadart_cli`, this will allow users to have a better experience when working with the library.

In our next version we would like to make the Typed Metadata the default option on `polkadart_cli` and also update the signed extension interface
To use this api directly without the need of instantiating separately.


### Ecosystem Fit

Polkadart is allowing developers to use Dart/Flutter to make any application for the Polkadot ecosystem.
It runs on any platform supported by Flutter, including Windows, Linux, macOS, Android, iOS, and the web.
There is a large number of web dApps for Polkadot but mobile and desktop applications are not that common.
We believe one of the reasons are the limited tools available for mobile and desktop development.
Polkadart tries to fill this gap by providing a set of tools that allow developers to build mobile and desktop applications with the same codebase.

There are a numerous number of libraries available for Polkadot but we are the only complete library for Dart/Flutter.


## Team :busts_in_silhouette:

- Team Name: Snowpine Labs Inovacao Ltda
- Contact Name: Leonardo Custodio
- Contact Email: leonardo@custodio.me
- Website: https://polkadart.dev

### Team members

- Leonardo Custodio (Blockchain Engineer)
- Kawal Singh (Software Engineer)

#### LinkedIn Profiles

- https://www.linkedin.com/in/leogcustodio/
- https://www.linkedin.com/in/singhkawal/

### Team Code Repos

- https://github.com/leonardocustodio/polkadart
- https://github.com/leonardocustodio
- https://github.com/justkawal

### Team's experience

Leonardo Custodio

Leonardo is a Blockchain Engineer with a robust software development background. He has over four years of dedicated experience in Polkadot-related technologies and six years of experience as a Flutter developer and over 10 years of experience in software development. Currently, he is working on PolkaIdentity and creating innovative SDKs tailored for game developers that enables seamless interactions with polkadot based systems.

Kawaljeet Singh

Kawal has extensive hands-on experience in Flutter and has good understanding of Polkadot's stack and protocols. With numerous apps published on iOS and android in Flutter ranging from data-management to live appointment systems and drag-and-drop desktop designing tool, he brings good knowledge and vast skill-sets to the team. In his free time he is focused on developing Flutter tools and libraries like excel useful to ease developers work. On week-ends, he publishes complex UIs made in Flutter to showcase Flutter's use-cases.


## Development Status :open_book:

We have delivered 6 milestones over the past months related to Polkadart. We started the library from scratch and we have recreated a lot of dependencies from scratch as our goal was to have a library that would not be dependent of any rust bindings.
The choice behind that was to keep the library simple enough for any new Dart/Flutter developer to use as bindings makes compiling way more complex and with different actions needed for each platform.

Our documentation is available at https://polkadart.dev at keeps being improved with each new release and we have already started the development of the new playground it can be found at https://code.polkadart.dev

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 6 months
- **Full-Time Equivalent (FTE):**  1 FTE
- **Total Costs:** 30,000 USD

### Milestone 1: Metadata V16 & Transaction Format V5

- **Estimated duration:** 2 months
- **FTE:**  1
- **Costs:** 10,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | We will provide both **inline documentation** of the code as well as **online documentation** related to changes in this milestone on https://polkadart.dev |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| **0e.** | Article | We will publish an **article**/workshop that explains [...] (what was done/achieved as part of the grant). (Content, language, and medium should reflect your target audience described above.) |
| **1.** | Metadata V16 | Parse and interpretate metadata v16 making it backwards compability with previous versions |
| **2.** | Transaction Format V5 | Use the new transaction format v5 to generate extrinsics and keep v4 as fallback  |
| **3.** | New JSON API interfaces | Create new interfaces for the JSON API |

### Milestone 2: Support for new typed metadata across all packages

- **Estimated duration:** 1 month
- **FTE:**  1
- **Costs:** 5,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | We will provide both **inline documentation** of the code as well as **online documentation** related to changes in this milestone on https://polkadart.dev |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| **0e.** | Article | We will publish an **article**/workshop that explains [...] (what was done/achieved as part of the grant). (Content, language, and medium should reflect your target audience described above.) |
| **1.** | Substrate metadata | Use typed metadata as default |
| **2.** | Registry | Adjust registry to work with typed metadata |
| **3.** | Polkadart CLI | Adjust CLI to work with typed metadata |
| **4.** | Polkadart | Adjust Polkadart to work with typed metadata |

### Milestone 3: New Features & Integrations

- **Estimated duration:** 3 months
- **FTE:**  1
- **Costs:** 15,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | We will provide both **inline documentation** of the code as well as **online documentation** related to changes in this milestone on https://polkadart.dev |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| **0e.** | Article | We will publish an **article**/workshop that explains [...] (what was done/achieved as part of the grant). (Content, language, and medium should reflect your target audience described above.) |
| **1.** | Runner | Add support for running code snippet in the browser |
| **2.** | Saving snippets  | Add the possibility of the user to save snippets in the cloud |
| **3.** | Sharing snippets  | Allow users to share their snippets with other users |
| **4.** | Explore snippets | Allow users to explore public snippets available |
| **5.** | Embedded runner  | Add support for running code snippet in other websites |

### Budget Breakdown

| Category | Item | Cost | Amount | Total | Description |
| --- | ---- | --- | --- | --- | ---|
| Personnel | Blockchain Engineer & Team Lead | 15,000 USD | 0.5 FTE | 15,000 USD | lead & developer |
| Personnel | Mobile Software Engineer | 15,000 USD | 0.5 FTE | 15,000 USD | developer |
| --- | --- | --- | **Total** | **30,000 USD** |  |

## Future Plans

We are aiming in increase the adoption of Polkadart through different ways, this might give us an opportunity to find an alternative method for funding for Polkadart
