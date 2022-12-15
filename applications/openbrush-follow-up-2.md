# OpenBrush

* **Project Name:** [OpenBrush](https://github.com/727-Ventures/openbrush-contracts)
- **Team Name:** [727.ventures](https://github.com/727-Ventures)
* **Payment Address:** ERC 20 (DAI): 0x352F779203202c99699CdA8cc95adF06CcC8abEf
* **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 3, It is follow-up grant for [first grant](https://github.com/w3f/Grants-Program/pull/497) and for [second grant](https://github.com/w3f/Grants-Program/pull/621).

## Project Overview :page_facing_up:

It is an application for a follow-up grant. The [initial grant](https://github.com/w3f/Grants-Program/pull/497) covered the first and second milestones:
* [Openbrush Milestone 1 delivery report](https://github.com/w3f/Grant-Milestone-Delivery/pull/249)
* [Openbrush Milestone 2 delivery report](https://github.com/w3f/Grant-Milestone-Delivery/pull/261)

The [second grant](https://github.com/w3f/Grants-Program/pull/621) covered the 3-5 milestones:
* [Openbrush Milestone 3 delivery report](https://github.com/w3f/Grant-Milestone-Delivery/pull/315)
* [Openbrush Milestone 4 delivery report](https://github.com/w3f/Grant-Milestone-Delivery/pull/385)
* [Openbrush Milestone 5 delivery report](-)

This grant aims to cover milestones 6-7.

### Overview

The mission of this project is to make ink! usable and facilitate WASM ecosystem adoption.

To be successful with this mission, we have outlined several steps that would need to be taken.

1. OpenBrush is a library for secure smart contract development on ink!, same as
   [OpenZeppelin](https://github.com/OpenZeppelin/openzeppelin-contracts) on Ethereum.
2. OpenBrush should serve as a starting point for every developer entering a Polkadot(ink!) ecosystem.
3. In addition to having a standard implementation, Openbrush should also have macroses to simplify and abstract up applications(smart contracts) development.
4. For Openbrush to fulfill its purpose, several changes must be made & several blockers to be overcome in `ink!` and in Substrate's `pallet-contracts`. We are committed to doing that in the context of this project.

This project is important to us as it's our strategic goal to accelerate Polkadot ecosystem development. Applications on Ink! are a considerable part of it.

### Project Details

OpenBrush should serve as a starting point for every smart contract developer coming from Ethereum. The extended documentation will cover several topics:
the differences between ink! and Solidity, how developers should change their mindset, how to design their project,
how to deploy contracts and test them, etc.

The library will provide the default implementation of standard contracts, which
can be customized by developers. Also, the library will provide additional
features useful for development that are not available in ink! yet(the plan is to integrate them to ink! itself at a later point within Openbrush scope),
but which can be useful for development.

Our team aims to improve the smart-contract development experience,
and wants to improve ink!, make it more user-friendly and to popularize it.

### Ecosystem Fit

* Where and how does your project fit into the ecosystem?

The necessity of a solution like this seemed rather urgent to us when we started to work with ink!. We quickly realized that we strategically would like to become the company that builds in the ecosystem. We decided that we wanted to commit and help ink! become widely used. Right now usability of ink! can be easily improved. OpenBrush is dedicated to change that.

* Who is your target audience (parachain/dapp/wallet/UI developers, designers, your own user base, some dapp's userbase, yourself)?

Our target audience is smart contract developers on ink!.

* What need(s) does your project meet?

Our project is the starting point for smart contract developers coming from other ecosystems like Ethereum, and it aims to improve smart contract development on ink!.

* Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?

We are only aware about one project [metis](https://github.com/patractlabs/metis). We partnered with them to collaborate on the ecosystem as we have the same common goal.

* If so, how is your project different?

Our project isn't restricted to only providing the base implementation of contracts.
Objectively speaking, based on what we know and what was listed in their proposal, here are key differences:
* At the moment, OpenBrush is in far more advanced stage, Developer Experience of our library is significantly higher.
* OpenBrush aims to propose and take care of standards for ink! (We've already created [PSP](https://github.com/w3f/PSPs/pull/25) for fungible tokens, and we plan to continue doing so)
* OpenBrush aims to be a starting point for any smart contract developer by providing documentation.
* Contribute to ink! and Substrate `contract-pallet` to improve the smart-contract development experience(add new features, fix bugs, etc.).

## Team :busts_in_silhouette:

### Team members

**Markian Ivanichok** (CEO | 727.ventures)  
**Fedor Lebed** (Head of Operations | 727.ventures)  
**Green Baneling** (Blockchain Core Rust Engineer | 727.ventures)  
**Dominik Krížo** (Head of Engineering | 727.ventures)
**Varex Silver** (Blockchain developer | 727.ventures)
**Artem Lech** (Blockchain developer | 727.ventures)
**Nameless Endless** (Blockchain developer | 727.ventures)
**Maria Nevska** (Marketing specialist | 727.ventures)  

### Contact

* **Contact Name:** Fedor Lebed
* **Contact Email:** fedeor.lebed@727.ventures
* **Website:** [727.ventures](727.ventures)

### Legal Structure

* **Registered Address:** The registered office shall be in Coastal Building, Wickham’s
Cay II, P. O. Box 2221, Road Town, Tortola, VG1110, British Virgin Islands.
* **Registered Legal Entity:** Seven2seven Ventures Ltd

### Team's experience

**Markian Ivanichok**  
CEO of 727.ventures, Blockchain entrepreneur, Software Engineer. Started my engineering career back when I was 15. Since then, I developed and got a lot of experience in engineering and leadership. Gained entrepreneur experience by founding a couple of startups. Inspired, co-founded and invested in Sector F, one of the top consulting companies in Ukraine that helps entrepreneurs to move faster.

**Fedor Lebed**  
Head of Operations
Fedor is the head of operations at Brushfam, a portfolio company of 727. ventures which is developing the ink! Smart contracts tools.
Fedor invested in mining pools from 15 years old. He has a background in product management, working with international software products for Tier-1 markets.

**Green Baneling**  
Rust Blockchain Core Developer  
Primary programming languages are: C++, Go, Rust
Finished the faculty of applied mathematics(Master degree). Participated in programming competitions during education. Has worked as a programmer for around 6 years.
Was a freelancer the first year, creating an application for IOS(Swift), creating modules for the desktop application on C++. After that, spent 2 years in a company which created software for TV devices(C++/ Haxe).  After which, for 3 years, worked on different blockchain projects(C++/Go/Rust/Solidity/Js).

**Dominik Krížo**  
Head of Engineering
Started programming own games at age of 15 as a hobby, then went to University studying informatics and object oriented programming, becoming an Android developer in 2018. In 2017 he started his crypto venture by investing in BTC and Ethereum and getting more knowledge regarding smart contracts and DeFi protocols during DeFi summer 2020. As a programmer, he wanted to know more behind the scenes of smart contracts, so he started to develop his own smart contract applications for Ethereum and then becoming a Rust and Ink! developer in , since he believes that WASM with its benefits over EVM is the future of smart contract applications.

**Varex Silver**  
Blockchain Developer  
Student of Computer Science at the Kyiv National University of Taras Shevchenko. Participated in programming competitions of different stages in school since 2017 (C++). Was a Backend developer(Go), Solidity developer(Solidity, Hardhat, Typescript), and now Blockchain developer(Rust, Typescript).

**Artem Lech**  
Blockchain Developer  
Student of Applied Mathematics at the Kyiv National University of Taras Shevchenko. Started programming in 2016 and participated in a lot of Ukrainian and international competitions of competitive programming. Worked as a lecturer of algorithms at the school of competitive programming and as Intern Backend Engineer (Rust). Now works as Blockchain Developer on Polkadot Blockchain (Rust, Typescript).

**Nameless Endless**  
Blockchain Developer  
Became interested in programming at the age of 16. At this time, he tried web development and created a website. Then decided to go to University to study system programming and object-oriented programming. Most often, he used C and C++ languages. Nameless likes innovations of web3 technologies and believes in the potential of Rust language and WASM standard for smart contracts.

**Maria Nevska**  
Marketing specialist
PR&Marketing specialist with global brands work experience since 2018. Master degree Business Economics. Has worked with global international beauty brands: Lancôme, Biotherm, Yves Saint Laurent, Kerastase, Valentino Beauty for 3 years. Blockchain PR&Marketing since 2021.

### Team Code Repos

* https://github.com/727-Ventures


Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine.

* <https://github.com/xgreenx>
* <https://github.com/varex83>
* <https://github.com/Artemka374>
* <https://github.com/coreggon11>
* <https://github.com/o-tsaruk>

### Team LinkedIn Profiles (if available)

* <https://www.linkedin.com/in/mivanichok/>
* <https://www.linkedin.com/in/fedor-lebed-b8520b1a8/>
* <https://www.linkedin.com/in/aostesymskyi/>
* <https://www.linkedin.com/in/bogdan-ogorodniy/>
* <https://www.linkedin.com/in/artem-fomiuk-31249b226/>
* <https://www.linkedin.com/in/dominik-krizo/>
* <https://www.linkedin.com/in/tsaruk-olexandr/>

## Development Status :open_book:

[The project](https://github.com/727-Ventures/openbrush-contracts) is already in release `1.6.0`.

PSP22 - <https://github.com/w3f/PSPs/pull/25>

PSP34 - <https://github.com/w3f/PSPs/pull/34>

PSP37 - <https://github.com/w3f/PSPs/pull/37>

## Development Roadmap :nut_and_bolt:

### Overview

**We have decided to describe a full roadmap of an OpenBrush here, with estimates. However, the funding we request at this stage is for milestones 6-7.**

* **Total Estimated Duration:** 13 weeks
* **Full-Time Equivalent (FTE):** 3
* **Total Costs:** 99 999 USD

### Previous work

#### Milestone 1 - Implement reusable basic contracts in ink!, similar to Openzeppelin

* **Estimated duration:** 2 weeks
* **FTE:**  2.5
* **Costs:** ~~10,000 USD~~ (this cost is covered by Supercolony)
* **Delivery status:** [Delivered](https://github.com/w3f/Grant-Milestone-Delivery/pull/249)

| Number | Deliverable                      | Specification                                                                                                                                                    |
| -----  | -----------                      |------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 0a.    | License                          | MIT                                                                                                                                                              |
| 0b.    | Documentation                    | We will enhance inline documentation, and create a tutorial on how to import/customize contracts.                                                                |
| 0c.    | Testing Guide                    | We will add unit tests to cover all basic logic and integration tests with Redspot, to verify that all works via `contract-pallet`                               |
| 1a.    | Fungible token(Erc20)            | We will implement reusable [Erc20](https://github.com/OpenZeppelin/openzeppelin-contracts/tree/master/contracts/token/ERC20) analog on ink!                      |
| 1b.    | Non Fungible token(Erc721)       | We will implement reusable [Erc721](https://github.com/OpenZeppelin/openzeppelin-contracts/tree/master/contracts/token/ERC721) analog on ink!                    |
| 1b.    | Multi token(Erc1155)             | We will implement reusable [Erc1155](https://github.com/OpenZeppelin/openzeppelin-contracts/tree/master/contracts/token/ERC1155) analog on ink!                  |
| 2a.    | AccessControl                    | We will implement reusable [AccessControl](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/AccessControl.sol) analog on ink! |
| 2b.    | Ownable                          | We will implement reusable [Ownable](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/Ownable.sol) analog on ink!             |

#### Milestone 2 - Simplify usage of library. Add a new features which extend ink!. Provide macroses that will allow creation of your own base implementation

* **Estimated duration:** 7 weeks
* **FTE:**  2.5
* **Costs:** 29,999 USD(covered by grant) + 5,000 USD which is covered by Supercolony
* **Delivery status:** [Delivered](https://github.com/w3f/Grant-Milestone-Delivery/pull/261)

| Number | Deliverable                                         | Specification                                                                                                                                                                                                                                                                                   |
| -----  | -----------                                         |-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 0a.    | License                                             | MIT                                                                                                                                                                                                                                                                                             |
| 0b.    | Documentation                                       | We will enhance inline documentation, update previous documentation based on simplifications, documentation for new features.                                                                                                                                                                   |
| 0c.    | Testing Guide                                       | We will test macros, update tests according to new features, simplifications.                                                                                                                                                                                                                   |
| 1.     | Remove boilerplate code                             | We will provide a macro which will allow to remove boilerplate during usage of library(Library provides implementation on rust level in internal trait. User must reuse internal implementation with ink! messages. Our macro will simplify it). It will simplify the code structure and usage. |
| 2.     | Derive for storages                                 | We will provide a derive macro to generate implementation for storage's structs. It will simplify integration of fields inside of struct and implementation of storage's traits for that fields.                                                                                                |
| 3.     | Support default implementation in external traits   | We will add mnemonic support of default implementations inside of trait definition(traits defined via `#[ink::trait_definition]`). It is mnemonic, because under the hood we will generate internal trait with default implementation that will be used in external trait.                      |
| 4.     | Support of modifiers                                | We will add support of modifiers, like in Solidity. User will be able to mark some function to use modifiers and it will simplify the code.                                                                                                                                                     |
| 5.     | ReentrancyGuard                                     | We will add implementation of [ReentrancyGuard](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/security/ReentrancyGuard.sol)                                                                                                                                      |
| 6.     | Implement additional useful contract                | We will implement [PaymentSplitter](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/finance/PaymentSplitter.sol), [TimelockController](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/governance/TimelockController.sol) and etc.    |

#### Milestone 3. Reduce the size of Erc20 contract

* **Estimated Duration:** 4 weeks
* **FTE:**  1.5
* **Costs:** 12,000 USD
  * * **Delivery status:** [Delivered](https://github.com/w3f/Grant-Milestone-Delivery/pull/315)

| Number | Deliverable                                              | Specification                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| -----  | -----------                                              |----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 0a.    | License                                                  | MIT                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 0b.    | Documentation                                            | We will provide a report of how much each optimization reduced the size.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 1.     | Reduce the size of Erc20 contract                        | Now the most critical moment with ink! is the huge size of contracts. [This issue](https://github.com/paritytech/substrate/issues/9354) described the problem very well. The parity team works in this direction, and we want to help with ink! side. The ink! team created issue [906](https://github.com/paritytech/ink/issues/906), [916](https://github.com/paritytech/ink/issues/916) and [910](https://github.com/paritytech/ink/issues/910). We want to briefly(not full change, only minimal changes to reduce the size) implement them and provide a report(re-working data structure, reducing monomorphization, using dynamic dispatch in some cases). Based on this report, the ink! team can decide how better to implement them and which part is more critical. During the implementation, we will build examples with our version of ink! (also maybe we will modify some sub-crates). So the output of this work is a report and custom version of ink!. The code can be reused, or if ink! team agrees we can try to implement these issues by ourselves later as separate work. |

#### Milestone 4. Pre-release - Standardization of tokens contracts. Implement extensions for contracts. Documentation

* **Estimated Duration:** 4.5 weeks(+ time for PSP approving)
* **FTE:**  2.5
* **Costs:** 22,500 USD
  * * **Delivery status:** [Delivered](https://github.com/w3f/Grant-Milestone-Delivery/pull/385)

| Number | Deliverable                                                         | Specification                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|--------|---------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 0a.    | License                                                             | MIT                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 0b.    | Documentation                                                       | We will provide inline documentation for macros, create a tutorial on how to use macros in your own project, with a detailed description of how it works inside.                                                                                                                                                                                                                                                                                                                                                                                                         |
| 0c.    | Testing Guide                                                       | We will add more tests to cover all macros, update tests according to new changes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 1.     | Create Proposal for Fungible token                                  | We will create a proposal for standardization of Erc20 token in case of ink! and `contract-pallet`. Based on the final decision regarding the proposal update the implementation in library.                                                                                                                                                                                                                                                                                                                                                                             |
| 2.     | Implement extensions for tokens                                     | We will implement extensions for Erc20, Erc721 and Erc1155 tokens.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 3.     | Create Proposal for Non Fungible token and Multi token              | We will create proposals for NFT and multi token, when proposal for FT token will be approved. Based on the decisions of these approves, we will update implementation in library.                                                                                                                                                                                                                                                                                                                                                                                       |
| 4.     | Use original ink! instead of our own                                | We will use ink! `3.0-rc6` version(or a new one if it will be compatible) instead of our own version of ink!.                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 5.     | Refactor the contracts to be compatible with PSPs                   | We will refactor the contracts according to the PSP.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 6.     | Refactor the structure of the OpenBrush to provide agnostic traits  | We will refactor the structure of the OpenBrush to provide traits for each implementation of the contract without restriction and implementation related information:<br/> - Traits will be defined in a separate module.<br/> - The default implementation of that trait for a contract will be provided via unstable feature `#![feature(min_specialization)]`.<br/> - We will provide a new macro to generate a wrapper around a trait. That wrapper can be used for cross-contract calls. So the user is enough of the trait definition to do a cross contract call. |

#### Milestone 5. Release - Contribution to ink

* **Estimated Duration:** 4 weeks(time depends on conversations in ink! repository)
* **FTE:**  2
* **Costs:** 15,000 USD

| Number | Deliverable                                          | Specification                                                                              |
| -----  |------------------------------------------------------|--------------------------------------------------------------------------------------------|
| 0a.    | License                                              | MIT                                                                                        |
| 0b.    | Documentation                                        | We will provide inline documentation, example of usage of extensions.                      |
| 0c.    | Testing Guide                                        | We will add tests for extensions and for a new changes from ink! side.                     |
| 1.     | Contribute to ink! with fixing of events             | We will help to fix the [issue](https://github.com/paritytech/ink/issues/809) with events. |
| 2.     | Re-work the storage of contracts                     | We want to resolve the [issue](https://github.com/paritytech/ink/issues/1134).             |
| 3.     | Refactor of implementation according changes in ink! | After changes in ink! we will refactor the code of library.                                |

### Current work - Scope of this Grant

#### Milestone 6. Upgradable contracts

* **Estimated Duration:** 6 weeks
* **FTE:**  3
* **Costs:** 50 000 USD

| Number | Deliverable                                               | Specification                                                                                                                                                                                                                                                                                                                                                                                         |
|--------|-----------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 0a.    | License                                                   | MIT                                                                                                                                                                                                                                                                                                                                                                                                   |
| 0b.    | Documentation                                             | We will provide a documentation of how to write upgradable contracts                                                                                                                                                                                                                                                                                                                                  |
| 1.     | Implement `delegate_call` in contract-pallet              | The ethereum has a [`delegatecall`](https://docs.soliditylang.org/en/v0.8.10/introduction-to-smart-contracts.html#delegatecall-callcode-and-libraries) function that helps to achieve upgradable functionality in contracts. We will add the support of that function into the `contract-pallet`. With that function the OpenBurhs will provide the implementation fo `Proxy` and `Diamond` patterns. |
| 2.     | Implement `set_code_hash` in contract-pallet              | The usage of `Proxy` pattern adds overhead during each execution of the contract. It increase the cost of execution, and size of the proof of verification. Instead of `delegate_call` the `contract-pallet` can provide a separate function to change the source code fo the contract. It simplifies the flow and allow to easy upgrade the contract in the future.                                  |
| 3.     | Import `delegate_call` in ink! and update `Proxy` example | Support of `delegate_call` on ink! level and providing a user-friendly abstraction. The ink! already provides an abstraction for cross-contract communication, we will extend it to support `delegate_call`.                                                                                                                                                                                          |
| 4.     | Implement Diamond Standard in OpenBrush with ink!         | We will provide the implementation of the [Diamond standard](https://eips.ethereum.org/EIPS/eip-2535) in OprnBrush. Anyone can easily reuse the implementation or use traits to interact with contracts.                                                                                                                                                                                              |
| 5.     | Implement Diamond Standard on raw Rust without ink!       | Right now the ink! adds a lot of overhead and increases the size of the contract. Implementation of the Diamond standard with raw rust will show the overhead impact and will provide an additional example for WASM developers on how to write contracts without ink!.                                                                                                                               |
| 6.     | Create an upgradable analog of each contract in OpenBursh | OpenBrush provides many implementations of different contracts. With upgradability, we also need to provide an upgradable version of each contract.                                                                                                                                                                                                                                                   |
| 7a.    | Marketing - Write down article about OpenBrush            | We are going to write the article abot the importance of OpenBrush and applied usage of it. Moreover, 727.ventures team will promote it in Twitter, Medium etc.                                                                                                                                                                                                                                        |
| 7b.    | Marketing - Create 2 educational video for OpenBrush      | We are going to work on educational video materials for OpenBrush and ink! Community. We see a huge gap in knowledge, understanding, and vision for the whole community in that sphere. Moreover, 727.ventures team will promote it in Twitter, Medium etc. We will create a lower entry threshold for newcomers by this educational program.                                                          |

#### Milestone 7. AssetPallet chains extension

* **Estimated Duration:** 8 weeks
* **FTE:**  2.5
* **Costs:** 57 000 USD

| Number | Deliverable                                                                                        | Specification                                                                                                                                                                                                                                                                                                                                                                                                     |
|--------|----------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 0a.    | License                                                                                            | MIT                                                                                                                                                                                                                                                                                                                                                                                                               |
| 0b.    | Documentation                                                                                      | We will provide a report of how to transition from PSP22 on contract level to PSP22 on pallet level. Add documentation about the workflow of PSP22 and Statemint parachain.                                                                                                                                                                                                                                       |
| 1.     | Implement `AssetPallet` chain extension on substrate level to work with `pallet-assets` in runtime | We will implement a chain extension on the `substrate` level that allows interaction of contract with `pallet-assets`. Any network with that chain extension allows developing contracts that store information regarding fungible tokens on the `pallet-assets` level instead of the contract level. That allows to reduce the size of `PSP22` contracts and provide SCM support by default for fungible tokens. |
| 2.     | Implement `AssetPallet` chain extension in OpenBrush                                               | Usage of chain extension requires implementation on the level of the contract too, so we will implement it in OpenBrush. Anyone will be able to reuse chain extension.                                                                                                                                                                                                                                            |
| 3.     | Implement PSP22 with that chain extension in OpenBrush                                             | The OpenBrush will provide a default implementation for `PSP22` implemented via `AssetPallet` extension. It will behave in the same way as `PSP22` but the information will be stored on the level of `pallet-assets`.                                                                                                                                                                                            |
| 4.     | Create standards for `AssetPallet` Chain Extension and for `PSP22Asset` extension                  | The `AssetPallet` extension can be used by anyone and on any network. It requires the standardization of the methods and data types that are supported. We will create standards for that in the PSP repository.                                                                                                                                                                                                  |
| 5.     | Advanced ink! unit testing framework                                                               | Add support to the contract deployment, chain extension registration, and smart contract cross-contract calls into the ink! unit test framework.                                                                                                                                                                                                                                                                  |
| 6.     | Support of XCM and cross transferring of `PSP22` tokens                                            | If the support of XCM by the `pallet-assets` is not ready, we will participate in the development process to speed up it. The final step is that anyone will be able to transfer assets of `pallet-assets`, that are managed by the contract, between parachains freely.                                                                                                                                          |
| 7.     | Add support for ink! 4.0 | We will update OpenBrush to be compatible with ink! 4.0 releases |
| 8a.    | Marketing - Create 2 educational video for OpenBrush/ink!                                          | We are going to work on educational video materials for OpenBrush and ink! Community. We see a huge gap in knowledge, understanding, and vision for the whole community in that sphere. Moreover, 727.ventures team will promote it in Twitter, Medium etc. We will create a lower entry threshold for newcomers by this educational program.                                                                      |
| 8b.    | Marketing - The website upgrade                                                                    | We are going to update out current website and add more specific things to improve the search for OpenBrush website in Google.                                                                                                                                                                                                                                                                                    |

### Future work

#### Milestone 8. `UniquePallet`/`RMRKPallet` chain extension

* **Estimated Duration:** 7 weeks
* **FTE:**  2.5
* **Costs:** 52 500 USD

| Number | Deliverable                                                  | Specification                                                                                                                                                                                                                                                                                                                                |
|--------|--------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 0a.    | License                                                      | MIT                                                                                                                                                                                                                                                                                                                                          |
| 0b.    | Documentation                                                | We will provide a report regarding size reductions. We will create documentation and standards to describe the workflow of Non-Fungible token chain extension, how to reuse it and how it works.                                                                                                                                             |
| 1.     | Create PSP for NFT on RMRK                                   | We plan to create a new standard for NFT tokens based on RMRK. We will work with the RMRK team on the finalization of the standard. We will try to be compatible with `PSP34`. Based on the result of the work we will decide to create the chain extension for the `unique-pallet` or for the `rmrk-pallet`.                                |
| 2.     | Implement chain extension for NFT on substrate level         | In the same way as for the `AssetPallet` extension, we plan to implement `UniquePallet`/`RMRKPallet` chain extensions on the substrate level. Based on the cooperation with the RMRK team we will decide how better implement Non-Fungible tokens.                                                                                           |
| 3.     | Implement chains extension in OpenBrush                      | Implementation of contract versions of the `UniquePallet`/`RMRKPallet` chain extension. Anyone will be able to call the logic of pallets from the contract.                                                                                                                                                                                  |
| 4.     | Implement NFT contract via chain extensions                  | OpenBrush will provide a default implementation of contracts that are implemented via according chains extensions.                                                                                                                                                                                                                           |
| 5.     | Refactoring of trait system in the ink!                      | Refactoring of trait system in the ink! to support default implementation inside of traits. It should improve the developer's experience with traits and simplify its usage.                                                                                                                                                                 |
| 6.     | Marketing - Create 4 educational video for OpenBrush/ink!    | We are going to work on educational video materials for OpenBrush and ink! Community. We see a huge gap in knowledge, understanding, and vision for the whole community in that sphere. Moreover, 727.ventures team will promote it in Twitter, Medium etc. We will create a lower entry threshold for newcomers by this educational program. |

#### Milestone 9. Multi token chain extension

* **Estimated Duration:** 4 weeks
* **FTE:**  2.5
* **Costs:** 30 000 USD

| Number | Deliverable                                                             | Specification                                                                                                                                                                                                                                                              |
|--------|-------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 0a.    | License                                                                 | MIT                                                                                                                                                                                                                                                                        |
| 0b.    | Documentation                                                           | We will provide a report regarding size reductions. We will create documentation and standards to describe the workflow of Multi token chain extension, how to reuse it and how it works.                                                                                  |
| 1.     | Implement chain extension for Multi token in substrate level            | In the same way as for the `AssetPallet` extension, we plan to implement `MultiPallet` extension on the substrate level. We hope that [Paratoken Standard](https://github.com/w3f/PSPs/pull/32) will be accepted and implemented and we will be able to integrate with it. |
| 2.     | Implement chains extension in OpenBrush                                 | Implementation of contract versions of the `MultiPallet` chain extension. Anyone will be able to call the logic of multi asset pallet from the contract.                                                                                                                   |
| 3.     | Implement multi token contracts via chain extensions                    | OpenBrush will provide a default implementation of contracts that are implemented via according chain extension.                                                                                                                                                           |
| 4.     | Reduce the size of the contracts more(investigation and implementation) | After the support of main chain extensions, we plan to focus on the contract size reduction of all contracts in OpenBrush. We plan to contribute to ink! and participate in according issue.                                                                               |
| 5.     | Advanced documentation                                                  | For the better understanding, we will post on the OpenBrush website - the clear technical checklist to become an ink!/OpenBrush engineer. It will attract more developers and builders in the ecosystem                                                                    |

NOTES:
During each milestone, we also will maintain OpenBrush to be compatible with a new version of ink! and contract-pallet:

* Update of the code
* Bug reporting and maybe help with resolving of bugs
* Suggest/help with new features
* Actualizing of the OpenBrush documentation
* Analyzing the code to report ideas regarding size-reduction
* Help to evolve community: answer questions, share knowledge.

## Future Plans

After, this Grant, we will create a grant related to upgradable contracts.

We're going to make a strong impact in the community, making ink! simple and convenient for developers.
* Expertise sharing
  * Covering all crypto-related news websites, creating workshops online, handling all relevant forums and social networks
* Becoming an entry point for a developer starting in ink!/Wasm
  * Nonstop updating our FAQ and knowledge base, creating educational content (text\video)
* Marketing and PR strategy
  * Organizing hackathons, Developing growth hacking strategy for involving developers from different channels

## Additional Information :heavy_plus_sign:

In the roadmap, you can see what was already done. Currently, we're on the 5th milestone.
The 5th milestone depends on review from ink! team so we started 6th milestone in parallel.

We`re organising the first WASM conference in the whole Polkadot ecosystem. This event is a part of Open Brush marketing strategy.

**How did you hear about the Grants Program?** Web3 Foundation Website / Medium / Twitter / Element / Announcement by another team / personal recommendation / etc.

Personal recommendation.
