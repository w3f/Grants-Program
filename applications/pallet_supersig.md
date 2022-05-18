# W3F Grant Proposal

> This document will be part of the terms and conditions of your agreement and therefore needs to contain all the required information about the project. Don't remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with a `>` (such as this one) can be removed.
>
> See the [Grants Program Process](https://github.com/w3f/Grants-Program/#pencil-process) on how to submit a proposal.

- **Project Name:** Kabocha's "Pallet Supersig"
- **Team Name:** Decentration 
- **Payment Address:** (BTC)37hhQbMnXTrEgFnQUA9xJEeQMW7DuGvxuz
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

> ⚠️ *The combination of your GitHub account submitting the application and the payment address above will be your unique identifier during the program. Please keep them safe.*

## Project Overview :page_facing_up:

"A Supersig is a Multisig with superpowers"

A new pallet that improves on the the very-well-used multisig, but making it fit for functioning more like a larger fund, sub-treasury, DAO, or as we like to call it a DOrg. 

This is Decentration's first grant proposal to Web3. We view this simple, suitable and potentially pervasivaely used pallet as a great opportunity to develop an ongoing relationship with Web3 Foundation, given that we have shared and aligned interests.

These pallets improvements have already created a lot of interest and feedback from people in the community and on twitter, so we believe its a valuable use of resources. 

We also believe in building things people need rather over-engineering without validation. The simplicity of this pallet is a great example of this. 


### Overview

- a _supersig_ is like a _multisig_ but with superpowers. 
- The first version lets you add and remove members, and has simpleMajority voting for all calls. 
- Edgeware and Kabocha networks will use this, but we believe all chains will benefit from it. 
- The pallet will be unit tested and benchmarked.
- Our team is interested in this as we are building out "DGov" (decentralised governance) functionality for Kabocha and Edgeware. "Pallet Supersig" is but one of the multiple pallets we are building, which aims to benefit substrate chains. Our focus is on making Kabocha a grassroots substrate chain that benefits the wider substrate community. 

### Project Details

- Mockups/designs of any UI components: You can also view the diagram [here](https://trello.com/c/qi4Nf2YT)
Or [here](https://github.com/rusty-crewmates/pallet_dorg/blob/e702f1a1b3fc5361dcc17e088e64c537f4211c79/pallet_dorg.drawio). 

- An overview of the technology stack to be used: Simple substrate pallet.
- Documentation of core components, protocols, architecture, etc. to be deployed: pallet_supersig [Trello ticket](https://trello.com/c/qi4Nf2YT)
- - PoC/MVP or other relevant prior work or research on the topic. As a small team we have: 
  - launched [Kabocha crowdloan](https://github.com/kabocha-network/parachain/)
  - developed pallet_mint: where funding proposals that are approved mint new coins, instead of from a treasury. https://github.com/kabocha-network/parachain/pull/6
  - (upcoming) planning on-chain proposal system called "pallet_proposals" which will begin as a level 2 grant.
  - maintaining a community run Rococo fork called [Pop-Art](https://apps.decentration.org/?rpc=wss%3A%2F%2Fpopart1.jelliedowl.com#/explorer)
  - Maintaining and upgrading [Substrate Recipes](https://trello.com/c/YPOPV5U8) for the benefit of the Substrate community. 
  
- What your project is _not_ or will _not_ provide or implement
  - In this grant proposal we are focussing on the first minimimal viable version of the pallet, where threshold is enumerated to various options including simple and superMajority; and add/remove member functionality. We envisage many directions this can go and many features to improve it, but will stick to this simple implementation in the MVP. We also (in the second milestone) be adapting the polkadot-js-ui, as we do envisage visualising members in the Accounts and Address Book section would be very useful. 
  - We wont be creating a brand new UI, but this may be part of another proposal which will encompass various pallets we are working on. 

### Ecosystem Fit
Help us locate your project in the Polkadot/Substrate/Kusama landscape and what problems it tries to solve by answering each of these questions:

- *Where and how does your project fit into the ecosystem?* It gives teams and sub-communities the opportunity to manage more funds, and add and remove members, while having a enum (simpleMajority) quorum that is not fixed x/n. 
- *Who is your target audience?* 
  - Anyone who uses multsigs and desire extra features
  - Edgeware and Kabocha users, especially teams who have raised funds from the community.
  - Groups of people who want to self-bond a validator together.  
- *What need(s) does your project meet?* It helps Edgeware and Kabocha improve the fund management of the teams and projects that get funded by the community treasury. 
- Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?
  - pallet_collective is very similar, but as there are only a limited number of instances available, and such instances needed a general on-chain upgrade to instantiate, it is not useful for our needs.  


## Team :busts_in_silhouette:

### Team members

- *Name of team leader:* Ramsey Ajram
- *Names of team members:* Timothée Delabrouille, Nathan Gardet, Jan Kraus, Eljo Prfiti, Richard Wells

### Contact

- **Contact Name:** Ramsey Ajram 
- **Contact Email:** ramsey@decentration.org
- **Website:** https://kabocha.network

### Legal Structure

- **Registered Address:** Digital Trust Company
- **Registered Legal Entity:** Decentration Trust Company (470-2018-233-GB-001)

### Team's experience

Ramsey (decentration) - Substrate Engineer, Product manager, startup technical founder. Leading [Kabocha's](https://kabocha.network) chain development and launch; Edgeware council member. Designer pallet_mint (done), pallet_proposals (ongoing).
Here is a recent contribution from Ramsey in a [Substrate Seminar](https://www.youtube.com/watch?v=IiAkJAfZsug&t=2299s)

Timothée Delabrouille (tdelabro) - Substrate / Rust Engineer, founder of Rusty Crewmates, contributor to Kabocha

Nathan Gardet-Derc (erudyx) - Substrate / Rust Engineer, contributor to Kabocha, Rusty Crewmate. developer on [pallet_mint](https://github.com/kabocha-network/parachain/pull/6)

Jan Kraus - Edgeware and Kabocha Full stack deveveloper - Javascript / Typescript / React / Node.js / Next.js / Gatsby / Ruby on Rails

Elio - Substrate Engineer - Edgeware and Kabocha - Upgraded Substrate Recipes... https://wiki.kabocha.network/recipes

Richard Wells - Edgeware council member and Kabocha founding steward, key stakeholder and communicator.  


### Team Code Repos

- https://github.com/kabocha-network/parachain/tree/kab-release-v0.1.3
- https://github.com/rusty-crewmates/substrate-tutorials

Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine.

- https://github.com/decentration 
- https://github.com/gdnathan 
- https://github.com/tdelabro
- https://github.com/johny
- https://github.com/herou 

### Team LinkedIn Profiles (if available)
## Development Status :open_book:

pallet started here:
https://github.com/kabocha-network/pallet_supersig/tree/polkadot-v0.9.16

Description in trello ticket: 
https://trello.com/c/qi4Nf2YT

*We are now working on the Supersig pallet (pallet_supersig). This pallet will benefit Edgeware, Kabocha and all Susbtrate based chains

The Supersig pallet is a multisig with super powers. It allows you to add and remove members of the multisig. It extends the capabilities of a multisig so it can be fit for governance of larger funds. 

A multisig transaction acts more like a treasury proposal. And the signatures become votes, with a quorum that can be changed (but in the MVP is fixed to simpleMajority).*



## Development Roadmap :nut_and_bolt:

This section should break the development roadmap down into milestones and deliverables. To assist you in defining it, we have created a document with examples for some grant categories [here](../docs/grant_guidelines_per_category.md). Since these will be part of the agreement, it helps to describe _the functionality we should expect in as much detail as possible_, plus how we can verify and test that functionality. Whenever milestones are delivered, we refer to this document to ensure that everything has been delivered as expected.

Below we provide an **example roadmap**. In the descriptions, it should be clear how your project is related to Substrate, Kusama or Polkadot. We _recommend_ that teams structure their roadmap as 1 milestone ≈ 1 month.

For each milestone,


### pallet_supersig public methods: 

```rust
pub fn create_supersig(
			origin: OriginFor<T>,
			members: Vec<T::AccountId>,
			threshold: u128,
		)
```

```rust
pub fn submit_call(
			origin: OriginFor<T>,
			supersig_id: T::AccountId,
			call: Box<<T as pallet::Config>::Call>,
		)
```
```rust
pub fn submit_encoded_call(
			origin: OriginFor<T>,
			supersig_id: T::AccountId,
			encoded_call: Vec<u8>,
		)
```

```rust
pub fn approve_call(
			origin: OriginFor<T>,
			supersig_id: T::AccountId,
			call_index: CallIndex,
		)
```

```rust
pub fn remove_call(
			origin: OriginFor<T>,
			supersig_id: T::AccountId,
			call_index: CallIndex,
		)
```

**Milestone 1** to make a working, secure and usable pallet_supersig v0.1.0. 

- The pallet will be tested on the Pop-Art, community run relay test network
- The pallet will be well benchmarked. 
- The pallet will be functioning in both Kabocha and Edgware chains at the minimum.
- Unit integration tests
- Easy to spin up node to test pallet 
- Clearly written as Readme and inline documentation

**Milestone 2** will make the Supersig as visible of an experience within the polkadot js UI as Multisig, The PR will be made, and if there is a blocker, then the apps.decentration.org fork will house the feature. 

- Polkadot JS UI will be forked and adapted to show the Supersig IF the chain has the pallet installed.

**Milestone 3** Will get feedback and make some improvements. One improvement is adding a "Super Beneficiary" option that allows a threshold of 2/n only if the Super Beneficiary is involved in the transaction. Else the transactio will default to a superMajority. This allows for greater than the usual 2/3 multisig, but without loss of security. 


> :zap: If any of your deliverables is based on somebody else's work, make sure you work and publish _under the terms of the license_ of the respective project and that you **highlight this fact in your milestone documentation** and in the source code if applicable! **Teams that submit others' work without attributing it will be immediately terminated.**
### Overview

- **Total Estimated Duration:** 5 to 7 weeks
- **Full-Time Equivalent (FTE):**  2
- **Total Costs:** USD 29,000

### Milestone 1 — pallet_supersig MVP

- **Estimated duration:** 3 to 4 weeks
- **FTE:**  2
- **Costs:** 14,000 USD

### Milestone 2 — Supersig for Polkadot JS UI

- **Estimated duration:** 2 to 4 weeks
- **FTE:**  1.5
- **Costs:** 8,000 USD

### Milestone 3 — Testing Feedback and Improvements

- **Estimated duration:** 2 to 3 weeks
- **FTE:**  2
- **Costs:** 7,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0  |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an **article**/workshop that explains [...] (what was done/achieved as part of the grant). (Content, language and medium should reflect your target audience described above.)
| 1. | Substrate module: X | We will create a Substrate pallet that will allow user you to create a "supersig" where users can be added and removed. All extrinsics will require a simpleMajority to approve. The clear difference from multisig is that the supersig address is not a composite of its signatories, therefore it will stay static when adding or removing signatories.   |  





## Future Plans

Improvements:
- make it accessible in Edgeware and Kabocha after testing, then promote the pallet in the Substrate community, and invite other communities to include the pallet;
- feature to change the quorum. Or have different quorums filtered by different categories (like proxy filter) 
- Add Option Master Beneficiary (see [here](https://github.com/rusty-crewmates/pallet_supersig/issues/1))
- We can envisage is making the pallet more compatible in the polkadot-js-apps UI.
- We then aim to improve the functionality of the pallet based on feedback.
  



## Additional Information :heavy_plus_sign:

_Who can vouch for Ramsey(Decentration)?_ Josh Muir (Kusama Council and Dat Dot), Bruno Škvorc, Dan Shields, Will Chevdor, Sacha Lanski... 

