# Signet - Talisman

- **Team Name:** Paraverse Foundation
- **Payment Address:** 128tk6D5CvYvGFtvjTgZT8yrD2wPWZyczBoj8LzkmGpTNbo9 (USDC/AssetHub)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

### Overview

Signet is blockchain-native financial workflow management software for enterprises. 

The goal of Signet is to enable enterprises to perform blockchain operations such as treasury management, payments, staking and governance in a way that is friendly to non-technical users but include similar "best practice" risk management controls to how they may operate in web2 today.

We believe enterprise adoption will be one of the central narratives of the transition to Polkadot 2.0, and the capabilities of the Signet platform will enable this to happen in Polkadot, enabling enterprises to feel comfortable to inject liquidity into the ecosystem.

Signet is built natively on top of Substrate, including the multisig, proxy, governance and staking pallets, but adds an open-source self-hostable software layer on top that enables configurable workflows for the purpose of internal risk mititgation.

Signet was initially created out of Talisman’s user research, which revealed that teams faced many difficulties and risked mistakes when trying to run their on-chain financial operations, and ended up choosing convenience over security. In mid 2023, the Signet team was formed within Talisman to focus on B2B and enterprise opportunities.

We believe what we are proposing is a great candidate for W3F funding because of two reasons:

1. The common good aspect of a documented, integratable Sign in with Substrate (SIWS) reusable component, coupled with the halo effect it will have on Substrate adoption by providing a new avenue for both existing web2 and current web3 developers to build for the ecosystem.
2. The importance of usability for larger organizations, enterprises and institutional users, who find it difficult today to use overly technical tools such as Polkadot.js. We believe strongly that ease of use and understanding are extremely important when trying to achieve security, in practice, in an enterprise context, and by delivering this, Signet will enable liquidity to flow into the ecosystem.

### Project Details

We will first describe the architecture of the current system, and then the improvements and additions we plan to implement in the course of this grant.

#### Architecture Overview

Signet's architecture provides the ability to manage offchain enterprise workflows along with supporting data like address books in a secure manner. With access controls and the ability to self host the instance, clients can choose the level of security and privacy for their implementation.

![architecture](https://github.com/TalismanSociety/sigdoc/blob/7510061e0b5b4077dc41ee7edb31f1536ab44b09/wwwf/images/sig-arch-hq.jpg?raw=true)

Our system is designed around the idea that a multisig unit is a keyless any proxy controlled by a Substrate multisig. We use a magic link system that encodes the proxy address and the member addresses of the multisig, which can then be shared with other signers to import it into their instance of Signet. The frontend is built in React and Typescript.

Offchain data used to support Enterprise Workflows are stored in a Postgres Database via Hasura, which offers at least 2 levels of authorisation. Requests to access data in the database are authorised using a combination of on-chain and off-chain data to satisfy various business needs, followed by role based access control built into Hasura. Access is restricted so that the Hasura server is the only service that can call the database.

We use Sign in with Substrate (SIWS) to authenticate users. This allows our backend to confirm that whoever claims to own an address and wants resources relevant to that address actually owns the address and is able to sign a challenge message to provide proof. SIWS has been created specifically for Signet, and is run in a nodejs sidecar.

Signet is designed in a modular way, so that specific workflows or extrinsics can be have a custom UI that enables non-technical users to perform blockchain actions.

The initial version of Signet was developed as part of a Polkadot Treasury Proposal and aimed at DAOs and smaller teams in Polkadot. We have since decided to focus on larger enterprises who require more complex workflows and risk mitigation.

#### Key Focus Areas

For the purpose of this grant, we are looking to build on top of the work and architecture presented above and address the following two issues:

1. **No standard for Sign in with Substrate:** While other projects have built custom solutions for logging into an app using Substrate, there are currently no reusable components to make it easy for developers to build apps and services on top of Substrate login.
2. **Improve existing UX for Selecting Validators:** Validator selection is currently difficult and error prone, and users have no easy way to double-check the addresses they are assigning in the process.

The following diagram shows Signet as it is being built out currently (in black), as well as the additions enabled by this grant (in green).

![capabilities](
https://github.com/TalismanSociety/sigdoc/blob/1cdba109e5a8474592611987d550b441bdfddbd4/wwwf/images/sig-capabilities.jpg?raw=true)

SIWS is a building block towards a shared address book for multisigs/organizations, which can enable migration of shared enterprise information from computer to computer or authorized person to authorized person, as well as allows for easier selection of validator addresses for all signers to leverage and is a key part of improving the experience of using Substrate-based proxy-multisigs.

### Ecosystem Fit

The project is built on Substrate, using Substrate native features. The goal of the project is to enable entities (corporations, asset managers, web3 companies etc.) to feel comfortable enough operationally to manage a significant amount of assets on Substrate.

#### Target User
The target audience is enterprises and larger organizations who require workflows and risk management in order to be comfortable to deploy capital into the Polkadot ecosystem. This may include enterprises already operating on-chain in Substrate, enterprises with a large web2 footprint, including, potentially, customers of Mythical Games, Aventus, Peaq, Energy Web, etc, or more traditional organizations evaluating moving into Substrate including, potentially, Deloitte, Sony or Toyota. Signet would allow C-Levels and Finance/Operations departments at these types of companies to feel comfortable integrating blockchain into their workflows.

#### Similar Projects
There are a number of multisig front-ends or multisigs in development in the Polkadot ecosystem, including: Multix, PolkaSafe, Saturn. While ostensibly there is an overlap in functionality related to being a multisig, Signet is designed to sit at a layer above the multisig and aimed at a different target audience:

1. Signet is designed to be self-hostable to enable an organization to manage it's own off-chain data and workflows in a way that meets it's internal devops and security needs. 
2. Signet's main value-add is not simply to provide a more friendly multisig UX, but rather to enable an organization to implement their own workflows on top of the multisig process. It's likely that these workflows require, at least at this time, off-chain operations and data storage that enhance the underlying blockchain. 
3. Signet's direction is to become a platform that integrates with different multisig front-ends or multisig pallets, rather than competing with them.

Regarding Sign in With Substrate, there are a few projects that have implemented bespoke methods of logging in with a Substrate keypair to their own dapps, however we believe these fall short of the user-friendly and developer-friendly needs to truly function as a component that can be reused, as well as to grow an ecosystem of apps and services on top of a Substrate login:

- The messages signed are unintelligble bytes, rather than human readable messages
- The format of the login has not been standardized/structured to enable implementation into wallets/signers
- The component(s) are not packaged, available and deployable in developer-friendly ways
- The documentation doesn't exist that enables a developer to implement the sign-in functionality.

Regarding managing a staking position, most institutional holders still use Polkadot.js, as it is the most longstanding and trusted tool, though due to a confuing UI, using it can easily lead to confusion or potential mistakes.

Alternate methods of managing staking positions, such as Polkadot Staking Dashboard, are available to users, but they are focused on retail usage at the current time, and do not support the more complex needs of institutional or enterprise users.

## Team :busts_in_silhouette:

### Team members

- Team leader: William Chen
- Team members: Nipsey, Glide, Chris Ling

### Contact

- **Contact Name:** William Chen
- **Contact Email:** william@talisman.xyz
- **Website:** https://talisman.xyz

### Legal Structure

- **Registered Address:** 2nd Floor Whitehall House, 238 North Church Street, George Town, PO Box 31489, Cayman Islands KY1-1206
- **Registered Legal Entity:** Paraverse Foundation

### Team's experience

William is the COO of Talisman. He has first hand experience with intricacies of managing fully-on-chain entities, including treasury management, distributed workforce compensation processes and other internal financial and operational processes on both Polkadot and Ethereum.

Nipsey is the co-founder and CTO of Talisman. Nipsey leads the effort around Talisman's nomination pools, which, together, are the largest in Polkadot, containing over 3 million DOT.

Glide has led a number of products in Web3 at Defi projects such as Sushi, DAOs including DeepDAO and on NFTs from 2017 before the ERC-721 standard. She has been a key contributor to Web3 product design community from 2018, speaking at events including Web3 Summit on User Data Design Considerations & Devcon on User testing practices for Mechanism Design. Prior to that, she led new product development and core banking transformations at large Banks and Financial institutions including BNP Paribas, Australian Super and UBS often working with industry regulators, compliance and security. Most recently she has worked in Defi, specialising in tokenomics design and implementing Multisigs on Ethereum to manage token distribution for DAOs and Treasuries.

Chris has been a lead developer at a project in the Ethereum ecosystem, was previously on the identity team at Grab -- the only p0 (e.g. mission critical) team at the company -- and has worked on numerous web2 auth projects. In his spare time, he dabbles in MEV, Geth and Substrate.

Various Talisman contributors will contribute on architecture, design, UX and testing.

We have not previously applied for a grant at the Web3 Foundation.

### Team Code Repos

- https://github.com/TalismanSociety/talisman-web

Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine.

- https://github.com/replghost
- https://github.com/jonathanpdunne
- https://github.com/0xglide
- https://github.com/chrisling-dev

### Team LinkedIn Profiles (if available)

n/a

## Development Status :open_book:

The product is currently being developed as a separate app inside the Talisman Portal repository (https://github.com/TalismanSociety/talisman-web/tree/multisig).

For a UI walkthrough for existing functionality, please see this slideshow:
[Signet UI Walkthrough](https://docs.google.com/presentation/d/1GBEvA8QxKoYKya9iNJfODozwT1JbRP9m_I7-lk-eHEU/edit?usp=sharing)

### Conversations with W3F
We have spoken briefly to David Hawig at the W3F to introduce the project, as well as to inquire about the W3F efforts to bring credit card processing/settlement to Polkadot (ISO20022, ISO8583). We also discussed the difficulty of staking (e.g. nominating or changing validators) today using Polkadot.js, especially as complex proxy and multisig structures come into play, which has informed this proposal.

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 1 month
- **Full-Time Equivalent (FTE):**  1,5 FTE
- **Total Costs:** 26,400 USDC

Talisman uses a blended rate for grants and proposals (see previously funded initiatives [here](https://docs.google.com/document/d/192asiQ13s4EAfXFFDFgKm_W3cqBVPPPxB5VNAig7keE/edit?usp=sharing),  [here](https://docs.google.com/document/d/1OlJB4a2kcgWe-TZTC4ZR5cU9ZEIk8IoC85IJv2_2rdc/edit?usp=sharing) and [here](https://docs.google.com/document/d/1KohKDEYypNw_KJING2_uHXnC0LJwUxpPHMzBRfrH68M/edit?usp=sharing)). This allows us to ensure the needed resources can be allocated to product development as well as running the company, including, as needed, to supplement the FTEs with the expertise of senior Talisman members as needed, with the goal of executing at our product quality standards. In this case, due to the value added program provided by the W3F and to show our support for the W3F mission in helping to bring new products and technologies into existence, we are applying a reduced rate.

### Milestone 1  — Sign in with Substrate (SIWS) Release

We have modeled our substrate login functionality (Sign in with Substrate - SIWS) on Sign in with Ethererum, and we hope this can catalyze the development of applications that build upon Substrate keypairs. We will extract the work that we have in integrating the login with Signet into an independent package that can be integrated by any team, provide website and documentation around the package, and set this on the road to becoming a standard.

Authenticating a user with a Substrate key was initially developed as part of Signet, however we believe it should have a number of improvements before it can be released as a service or component ready for use by third parties:

1. The version as implemented uses the JSON format with minimal payload data and only supports the server-side nonce check. We should augment this by supporting a string field that can contain information such as a welcome message or the terms of service of the dapp. 
2. We will implement both text and JSON formats for the message to be signed, for both the presentation of the message client-side, and verification of the message server-side.
3. We will implement a field for expressing time validity/expiration of the signature, as well as the corresponding server-side check.

We will also create an example “boilerplate” NextJS Dapp that integrates SIWS.

On the frontend: We will prepare 3 pages to demonstrate how SIWS works can protect an app’s data:

- Sign in page with SIWS button to trigger sign in flow
- Signed in page that fetches a secret message from backend
- Unauthorized page that does not have access to get the secret message.

On the backend: We expose 3 API endpoints:

- /api/nonce: To generate a nonce for user to sign on the frontend
- /api/verify: To verify that the signed message is valid and issue a JWT
- /api/secret: A protected endpoint that returns a secret text only if the JWT is valid

The demo app will be in a configuration that enables developers to easily deploy it on Vercel.

We’d like to address these improvements in the course of packaging Sign in With Substrate (SIWS) as a releasable component.

- **Estimated duration:** 0,5 month
- **FTE:**  1,5
- **Costs:** 13,200 USD
- **Relevant Chains:** Polkadot & Kusama

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | GPLv3 |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can spin up a SIWS service and authenticate wallets, which will show how the new functionality works. |
| **0c.** | Testing and Testing Guide | We will include documentation on verifying your SIWS integration is performing correctly. |
| 0d. | Article | We will publish an article that explains how the service works, the work done for this grant, and direction on how to integrate SIWS into other apps |
| 1. | JS Package: Sign in with Substrate | We will extract our Substrate sign-in service into an independent javascript package that is hostable and easily integratable into other projects |
| 2. | Feature: Custom message | We will add the ability to specify a custom message with the payload that can, for example, function as a welcome message from the dapp or specify the terms of service for the dapp |
| 3. | Feature: Expiration | We will add the ability for the front end to specify an expiration time for the signed message |
| 4. | Feature: Message Formats | We will add the ability to create the message payload both as a human-readable string, in addition to the existing JSON format |
| 5. | Feature: Message Verification | We will add the ability to verify the signed message payload in either string or JSON format |
| 6. | Example: Integrate SIWS into Signet | We will integrate the newly created SIWS package back into Signet, replacing the initial implementation from before. This will allow Signet to function as a reference implementation for SIWS, including a front-end and back-end. |
| 7. | Example: Create example dapp for SIWS | We will create an example “boilerplate” NextJS Dapp that integrates SIWS, including a frontend with login functionality and a backend that can verify the login and return data to logged in users. |
| 8. | Public Docs: Sign in with Substrate | We will create a public documentation site/landing page for Sign in with Substrate, in order to catalyze adoption by other projects, as well as eventual standardization. |

### Milestone 2  — Signet Staking Module Improvements re: Validator Selection & Rotation UI

We would like to improve the use cases (a.k.a. modules) enabled by Signet, by enabling user-friendly validator selection. We believe this is a core use cases for organizational and institutional multisigs in Polkadot/Kusama, and would be a foundational aspect of workflows to be built out in future releases. Currently selecting or rotating validators requires complex copy and pasting actions to assemble Polkadot.js Apps extrinsics, and we believe a purpose-built front end would alleviate the pain in performing the following actions:

1. Selection/rotation of validators for a nomination pool where the nomination pool controller is a pure proxy controlled by a multisig
2. Selection/rotation of validators by the stash, where the stash is a pure proxy controlled by a multisig
3. Selection/rotation of validators where the staking proxy is a pure proxy controlled by a multisig.

- **Estimated duration:** 0,5 month
- **FTE:**  1,7
- **Costs:** 13,200 USD
- **Relevant Chains:** Polkadot, Kusama, AssetHub Polkadot, AssetHub Kusama

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | GPLv3 |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can spin up Signet, including the feature improvements here, which will show how the new functionality works. |
| **0c.** | Testing and Testing Guide | We run end to end tests on the application. |
| **0d.** | Git Deployment | We support deployment from git at this point in time, and will have instructions on this in the repository. |
| 0e. | Article | We will publish an article that explains Signet and the work done for this grant |
| 1. | Feature: Nom Pool Validator Selection | This feature enables an intuitive UX around viewing currently selected validators, as well as updating the validators for a nomination pool, using the nominationPools.nominate extrinsic |
| 2. | Feature: Staking Stash Validator Selection | This will build upon the feature above to present an intuitive UX around the selection of validators for a pure proxy stash, using the staking.nominate extrinsic |
| 3. | Feature: Staking Pure Proxy Validator Selection | This will build upon the above features to present an intuitive UX around selection of validators for a staking proxy which is a pure proxy backed by a multisig, using proxy.proxy and staking.nominate extrinsics |

## Future Plans

Talisman initially embarked on the Signet project in order to "scratch its own itch" and bring it's user-friendly approach to multisigs. Signet has grown into its own project focused on larger enterprises and organizations, with the mission to build out a platform that enables institutional liquidity to flow in Polkadot.

For SIWS, we are interested in promoting wider adoption, as we believe that it can unlock a use cases where off-chain data is combined with on-chain data, and this may span enterprise apps/integrations or even consumer apps or games. After this grant, we will take a look at how to garner support/adoption of the technology, and collaborate with others in the ecosystem to put this on the path to becoming a standard. 

## Referral Program (optional) :moneybag:

You can find more information about the program [here](../README.md#moneybag-referral-program).

- **Referrer:** n/a
- **Payment Address:** n/a

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Element

Here you can also add any additional information that you think is relevant to this application but isn't part of it already, such as:

### Financial Support
The Signet team is an independent team within Talisman, and receives financial, development, UI/UX and testing support as necessary.

### Previous Work
Beyond the work in the initial treasury proposal referenced below, we have made a number of significant additions:

1. CSV upload for easier batched sends
2. An initial implementation of SIWS (in progress), *Note - the addition of SIWS will remove the need to use the magic link.*
3. An initial address book implementation (in progress)
4. Refactoring and rearchitecting to meet upcoming needs

### Previous Grants

The initial version of this web app was funded by the Polkadot Treasury in February 2023.

[Polkadot Spending Proposal: Business-Friendly Polkadot Multisig](https://docs.google.com/document/d/1KohKDEYypNw_KJING2_uHXnC0LJwUxpPHMzBRfrH68M/edit#heading=h.v6is2ta0txr1)

>This proposal is for a business-friendly multisig frontend to lower the difficulty for teams and businesses when running their financial operations on Polkadot. Teams currently face many difficulties when trying to perform these operations, risking mistakes along the way, and leading them to choose convenience over security. We will apply Talisman’s UX and design philosophy to create improvements for standard workflows for Polkadot multisig usage (based on the current multisig pallet), and eventually integrate upgrades when improvements to the multisig pallet itself are available.
