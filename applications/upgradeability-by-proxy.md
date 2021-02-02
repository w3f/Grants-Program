# Open Grant Proposal

* **Project Name:** ink! Smart Contract Upgradeability
* **Team Name:** Fractal
* **Payment Address:** 0xAd0E9D4CF6B8F2E0C12c6620791164681c99A9ca

## Project Overview :page_facing_up:

### Overview

The main goal of this project is to bring smart contract upgradeability to ink.

Smart contract upgradeability is an important mechanism to fix security bugs in
contracts. It also enables post-deployment iterative development, by offering
the flexibility of adding new features.

This mechanism should be flexible enough that contract developers may decide if
they want to be able to upgrade their contracts, and specify under what
conditions.

Our team is interested in this because it is very likely that our development
efforts start with smart contracts before moving to a custom Substrate runtime.
Another reason upgradeability is particularly important to us is that we expect
to iterate our logic frequently based on a continuous product discovery process.


### Project Details

Upgrade functionality can be implemented in user-land, or as part of the smart
contracts pallet. We are starting with the first option: it gives us more
flexibility to experiment, and iterate faster towards an adequate soltuion.
When we're happy with the result, we'll see what can be migrated to ink as a
directive to reduce boilerplate.

We're going to start by implementing the proxy pattern. There are a few
concerns that will need to be addressed:

- figure out how to handle the separation between state and code
- design a standard for data migrations on contract upgrade
- design a standard for upgrade authorization
- decide if the contract's public interface can/should be upgradable or static

We want to allow for flexibility when deciding if a smart contract can be
upgradable or not, and under what circumstances. Should we allow upgrades to
the authorization code?

Upgrading the contract's public interface may not be possible when using the
proxy pattern.

Ink's documentation and examples provide us with the delegator pattern. This
contract works by calling `put_code` once for the delegator contract and once
for the "delegated-to" contract. Every method that is delegated must be
explicitly defined in the delegator.

For milestone 1, we will build a template using this pattern with upgrade and
authorization methods. This is a template and not a library/ink directive
because we want to focus on the upgrade pattern mechanism and leave any ink
quality-of-life improvements, like directives or syntax sugar, for the second
milestone.

For milestone 2, we will extract this pattern into an ink directive which will
automatically generate the proxied methods. This brings us ergonomy of use,
making upgradeability easy to opt in to.

Parts of this work may be liftable to the smart contracts pallet. This isn't in
the scope of this proposal, but may be considered for future work. The
advantages of implementing certain features directly in the pallet is that
they'd be more efficient and we could tweak their incentive structure.


### Ecosystem Fit

Since smart contract development is more accessible and less involved than
runtime development, we expect most folks who build on Polkadot to benefit from
this mechanism. Substrate offers a natural development path from smart
contracts to runtime, so it's also likely that this will assist folks getting
started with smart contracts even if they intend to move to a custom runtime in
the future.

We didn't find related ideas in the
https://github.com/w3f/General-Grants-Program or
https://github.com/w3f/Open-Grants-Program repos. We also asked some folks in
the community, none of whom were aware of similar projects.


## Team :busts_in_silhouette:

### Team members
* [Hugo Peixoto](https://github.com/hugopeixoto/)
* [Júlio Santos](https://github.com/juliosantos/)


### Contact
* **Contact Name:** Júlio Santos
* **Contact Email:** julio@fractal.id
* https://trustfractal.com/


### Legal Structure
* **Registered Address:** Wiener Straße 10, 10999 Berlin, Germany
* **Registered Legal Entity:** Trust Fractal GmbH


### Team's experience

* Back in 2017, we've implemented a card game
  ([Baccarat](https://en.wikipedia.org/wiki/Baccarat_(card_game))) in Solidity.
  EVM and Solidity have no primitives to generate random numbers, as there is
  no trustworthy source of entropy available on the blockchain — so we
  described and built a method for provably fair random number generation with
  a non-repudiable commitment scheme. This was implemented using state channels
  for reduced latency and cost. It was built for a client who now owns the IP,
  so we can't share anything else here, but can do in private if needed.
* In 2017-2018 we built and operated an ICO launchpad to help teams building on
  blockchain, such as the [Ocean Protocol](https://oceanprotocol.com/), to
  crowdfund their projects with community support. See [this Medium
  post](https://medium.com/future-energy-ventures/why-we-invested-in-fractal-d98eaf0cdc70)
  from [Innogy](https://www.eon.de/de/innogy.html), an early investor in
  Fractal, for more information.
* In early 2018 we built a prototype of on-chain KYC using the [ERC
  725](https://github.com/ethereum/eips/issues/725) and [ERC
  735](https://github.com/ethereum/eips/issues/735) standards. See [our medium
  post](https://hackernoon.com/first-impressions-with-erc-725-and-erc-735-identity-and-claims-4a87ff2509c9)
  on this for more information.
* In late 2018, we built our first on-chain KYC integration with DIDs and
  verifiable credentials, when working with https://ixo.world/. Once we
  confirmed that a user controlled a certain address (by asking them to sign a
  nonce), we would create their DID on their behalf. Once their KYC
  verification completed, we would ledger the corresponding credential against
  this DID. See [our Medium post on
  this](https://medium.com/hackernoon/decentralized-identity-w3c-standards-and-the-ixo-keysafe-69d7e8d6fd7c)
  for more information.
* We're currently working with [KILT](https://www.kilt.io/) to deliver a
  decentralised KYC solution for [Polkadex](https://www.polkadex.trade/). See
  [KILT's medium post on
  this](https://kilt-protocol.medium.com/fractal-kilt-protocol-and-polkadex-collaborate-to-provide-decentralised-kyc-solution-for-exchange-d9d0f8c18163)
  for more information.


### Team Code Repos

* https://github.com/trustfractal/ink-upgrade-template
* https://github.com/trustfractal/ink
* eventually https://github.com/paritytech/ink, we hope :)


### Team LinkedIn Profiles

* https://www.linkedin.com/in/hugopeixoto
* https://www.linkedin.com/in/jvsantos


## Development Roadmap :nut_and_bolt:

### Overview

* **Total Estimated Duration:** 2~3 months
* **Full-time equivalent (FTE):** 0.5
* **Total Costs:** DAI 19400

### Milestone 1 — Upgradable Ink Smart contract infrastructure

* **Estimated Duration:** 1 month
* **FTE:**  0.5
* **Costs:** DAI 9700

| Number        | Deliverable   | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | Documentation on how to use the smart contract template. This should answer the question "how do I build my contract in a way that lets me upgrade it afterwards?" |
| 0c. | Testing Guide | The code will have unit-test coverage (min. 70%) to ensure functionality and robustness. In the guide we will describe how to run these tests |
| 0d. | Article/Tutorial | We will write an article or tutorial that explains the work done as part of the grant. |
| 1. | An Ink! based upgradeable Smart Contract structure | A collection of Ink! smart contracts that be used as a starting point for people that want to have upgradable smart contracts. This collection will contain upgrade logic (including authorization and data migration calls) and some sample methods that users can adapt when developing their own contracts. |


### Milestone 2 — Ink directive to abstract proxying

* **Estimated Duration:** 1 month
* **FTE:**  0.5
* **Costs:** DAI 9700

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | Inline documentation on how to use the new directive. |
| 0c. | Testing suite | The code will have unit-test coverage (min. 70%) to ensure functionality and robustness. Being part of ink, it should integrate the existing test suite. |
| 0d. | Article/Tutorial | We will write an article or tutorial that explains the work done as part of the grant. |
| 1. | `ink!` feature | We will build an `ink!` directive that generates the proxied methods. Ideally it would detect which methods need proxying by introspection, but it may require method names to be listed explicitly. |


## Future Plans

After milestone 2 is complete, there's the change that some patterns or
functionality would be better implemented directly into the smart contracts
pallet, so that other features, unrelated to upgrades, can take advantage of
them.


## Additional Information :heavy_plus_sign:

This proposal is slightly research oriented. The second milestone may vary
depending on the particular way ink! is implemented.
