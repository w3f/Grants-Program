# Multix a simple interface for complex multisigs

- **Team Name:** ChainSafe
- **Payment Address:** 0x85D81Ab61Fe16CDcaeF2Ca556ED4577A51b9b07C (DAI)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2


## Project Overview :page_facing_up:

In response to an ask byt Web3F and Parity.

### Overview

Multiple signature requirements can be attractive to organizations seeking protection against a single signer misappropriating funds in a single-sig wallet.
Polkadot and Kusama both have a `multisig` pallet that all users to submit transactions as part of a multi-sig wallet, however the experience around using it is not great. There are several issues around it. The first and probably most critical one is that the multi-sig address that is created once one selects a set of signatories and a threshold is deterministic. It means that if any of the signatory changes, or if the threshold changes, the address of the wallet will change as a result. In an enterprise level setup, it is not uncommon to add/rotate signatories. Having the wallet address changing as a result is not acceptable. Another annoyance that multisig users need to deal with is the fact that they need to have off-chain communication with other signatories in order for the last signatory to submit the pre-image hash, also called `callData` for the last signer to be able to submit the extrinsic. Finally, there is not today a dedicated interface that is easy to use to allow users to create and manage their multisig accounts. 


### Project Details

The goal of the project is to solve the above mentioned issues, with the use of existing pallets, namely the `utility` pallet, the `proxy` pallet and obviously the `multisig` pallet. Pure proxies, while adding some complexity to the setup, allow for great flexibility. The interface needs to make sure that these are abstracted as much as possible to make the experience as pleasing as possible. 

The interface should:
- Make address generation easy (users need to supply member/threshold)
- Show the user what calls are pending
- Allow users to approve calls and submit the extrinsic for the last signer
- Optionnaly, the UI should allow to make a transfer

The system should:
- Allow signatories to be rotated without changing the wallet address
- Allow threshold to be changed without changing the wallet address

Note that at first, the interface will be minimal and focus on multisig creation and signing. Other feature requests such as the flow to rotate signatories, make more complex extrinsics from the UI or add some proxies to the multisig are no-brainer next steps but are not part of this first proposal.


### Ecosystem Fit

Help us locate your project in the Polkadot/Substrate/Kusama landscape and what problems it tries to solve by answering each of these questions:


- Where and how does your project fit into the ecosystem?
This projects aims at democratizing the use of multisigs in the Polkadot/Kusama ecosystem, which is a safe way of handling funds. Multisigs are a key element to get Enterprises and DAOs onboarded onto the ecosystem.

- Who is your target audience?
Mainly bigger structures, enterprises and DAOs.

- What need(s) does your project meet?
This has been clearly stated above I think, it solves the current shortcommings of what is available using simple multisigs, and brings it into a nice experience.

- Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?
There are many multisig UIs, such as on Subscan or even using the Polkadot-js apps UI but I don't believe that anything like this is available today in the Polkadot ecosystem. In Ethereum however, billions are currently secured by the Safe (formerly gnosis safe) smart contract multisigs.

## Team :busts_in_silhouette:

### Team members

- Thibaut Sardan @tbaut

### Contact

- **Contact Name:** Thibaut Sardan
- **Contact Email:** thibaut@chainsafe.io
- **Website:** chainsafe.io

### Legal Structure

- **Registered Address:** 251 Spadina Ave, Toronto, Ontario, M5T 2E2, Canada
- **Registered Legal Entity:** ChainSafe Systems

### Team's experience

Thibaut worked at Parity for more than 3 years, he has extensive experience in building wallet related UIs and flows, and has been a key contributor to the Polkadot ecosystem accross projects such as Parity Signer, Polkadot-js extension and apps, Polkassembly...

### Team Code Repos

- https://github.com/ChainSafe
- https://github.com/tbaut

## Development Status :open_book:

No designer is involved in a first step, to validate the flows and start small. Here are mocks of the creation flow.
![Selection_1150](https://user-images.githubusercontent.com/33178835/213197827-24473adb-965e-4951-92cd-4a55f7e31608.png)

Upon cration, a proxy will be created and signatories will need to approve it.
![Selection_1151](https://user-images.githubusercontent.com/33178835/213197846-289176da-0364-4665-9fe3-ebd3ce55d8df.png)

Once the first proposal approved, the multisig and its (abstracted) proxy are ready to use.
![Selection_1152](https://user-images.githubusercontent.com/33178835/213197862-f3e562e8-a12f-40a8-a694-ccb5c42e8c3d.png)

## Development Roadmap :nut_and_bolt:

This section should break the development roadmap down into milestones and deliverables. To assist you in defining it, we have created a document with examples for some grant categories [here](../docs/grant_guidelines_per_category.md). Since these will be part of the agreement, it helps to describe _the functionality we should expect in as much detail as possible_, plus how we can verify and test that functionality. Whenever milestones are delivered, we refer to this document to ensure that everything has been delivered as expected.

For each milestone,

- make sure to include a specification of your software. _Treat it as a contract_; the level of detail must be enough to later verify that the software meets the specification.
- include the amount of funding requested _per milestone_.
- include documentation (tutorials, API specifications, architecture diagrams, whatever is appropriate) in each milestone. This ensures that the code can be widely used by the community.
- provide a test suite, comprising unit and integration tests, along with a guide on how to set up and run them.
- commit to providing Dockerfiles for the delivery of your project.
- indicate milestone duration as well as number of full-time employees working on each milestone.
- **Deliverables 0a-0d are mandatory for all milestones**, and deliverable 0e at least for the last one. If you do not intend to deliver one of these, please state a reason in its specification (e.g. Milestone X is research oriented and as such there is no code to test).

> :zap: If any of your deliverables is based on somebody else's work, make sure you work and publish _under the terms of the license_ of the respective project and that you **highlight this fact in your milestone documentation** and in the source code if applicable! **Teams that submit others' work without attributing it will be immediately terminated.**

### Overview

- **Total Estimated Duration:** 1 month for an engineer full time + finance department
- **Full-Time Equivalent (FTE):**  1.5 FTE
- **Total Costs:** 30000
 
### Milestone 1 - Create and manage multisig calls

- **Estimated duration:** 1 month
- **FTE:**  1.5
- **Costs:** 30000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can create a multisig. The steps should be self explanatory for anyone having basic multisig knowledges. |
| 0c. | Testing Guide | The scope of this project being too small, no testing will be done in a first step. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.. |
| 0e. | Article | We will publish an **article** that explains the basics of multisigs and show the benefits of using this interface to create more complex multisigs.
| 1. | creation screen | Users will be able to create a multisig based on a list of signatories and a threashold. |
| 2. | indexer | To provide a smooth user experience, a subsquid indexer will make sure to track multisig interractions. The Docker will be made available |
| 3. | home screen | The home screen will allow to select the available multisig and see the signatories, the threshold along any pending request |
| 4. | request approval | Upon reviewing pending approvals, users are able to approve pending approvals and submit the final extrinsic without any external communication with other signatories. |
| 5. | pallet support | The multisig will be based on the `[mutlisig](https://github.com/paritytech/substrate/tree/master/frame/multisig)` pallet, also using `[proxy](https://github.com/paritytech/substrate/tree/master/frame/proxy)` and `[utility](https://github.com/paritytech/substrate/tree/master/frame/utility)` pallets to handle the different flows.|
| 6. | stack | Both front-end and back-end are using Typescript. The front-end is built using React, it will connect to a blockchain node for live information such as the pending proposals, and to user wallets such as Polkadot-js extension to allow users to sign extrinsics. The backend is made of a subsquid indexer that is tracking multisig interractions.|

## Future Plans

As mentioned above, this is requesting the funding to get things started with a functionnal UI, wihout too many bells and whisles. Many needs have already been identified for institutions and DAOs. Chainsafe is dedicated to make this the stepping stone of a long road. 
Other features such as the flow to rotate signatories, make more complex extrinsics from the UI or add some proxies to the multisig can be added at next steps.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** At W3F and Parity's request
