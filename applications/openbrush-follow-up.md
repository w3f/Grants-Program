# OpenBrush

* **Team Name:** [SuperColony](https://github.com/Supercolony-net)
* **Payment Address:** ERC 20 ADDRESS: 0xE1B19cE32866cDE87F8f59C7C2C5f90E093A6942
* **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2, It is follow-up grant for [first grant](https://github.com/w3f/Grants-Program/pull/497).
- **Status:** [Terminated](https://github.com/w3f/Grants-Program/pull/621#issuecomment-1611059800)

## Project Overview :page_facing_up:

It is an application for a follow-up grant. The [initial grant](https://github.com/w3f/Grants-Program/pull/497) covered the first and second milestones:

* [Openbrush Milestone 1 delivery report](https://github.com/w3f/Grant-Milestone-Delivery/pull/249)
* [Openbrush Milestone 2 delivery report](https://github.com/w3f/Grant-Milestone-Delivery/pull/261)

This grant aims to cover milestones 3-5.

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

**Markian Ivanichok** (Founder & Blockchain Engineer)  
**Ian Arden** (Advisor)  
**Green Baneling** (Blockchain Core Rust Engineer)  
**Sven Seven** (Fullstack Rust Engineer)  
**Pierre Ossun** (Rust Engineer)  
**Dmitry Kryshtal** (Marketing)  
**Varg Vikernes** (Blockchain Rust Engineer)  
**Vasyl Novak** (Researcher)  
**Lera Laricheva** (Designer)

### Contact

* **Contact Name:** Dmitry Kryshtal
* **Contact Email:** dmitry.kryshtal@supercolony.net
* **Website:** [supercolony.net](supercolony.net)

### Legal Structure

* **Registered Address:** Dubai Silicon Oasis, DDP, Building A2, Dubai, UAE.
* **Registered Legal Entity:** Mempool Ventures FZCO, operating under Supercolony brand

### Team's experience

**Markian Ivanichok**  
CEO of Supercolony,
Blockchain entrepreneur, Software Engineer.
Started my engineering career back when I was 15. Since then, I developed and got a lot of experience in engineering and leadership. Gained entrepreneur experience by founding a couple of startups. Inspired, co-founded and invested in Sector F, one of the top consulting companies in Ukraine that helps entrepreneurs to move faster.
Since the beginning of this year, co-founded and led Supercolony, a Polkadot venture studio that is dedicated to building and creating of Polkadot’s ecosystem.

**Dmitry Kryshtal**  
Head of Marketing
8 years experienced T-Shaped marketer with a deeper understanding of analytics, creativity and strategy. Opinion leader in the cryptocurrency environment since 2017. Co-owner of the creative agency Citadel. Host of his own program on the biggest crypto-related YouTube channel in CIS – S3XYBTC.

**Green Baneling**  
Blockchain Core Developer  
Primary programming languages are: C++, Go, Rust

Finished the faculty of applied mathematics(Master degree). Participated in programming competitions during education. Has worked as a programmer for around 6 years.

Was a freelancer the first year, creating an application for IOS(Swift), creating modules for the desktop application on C++. After that, spent 2 years in a company which created software for TV devices(C++/ Haxe).  After which, for 3 years, worked on different blockchain projects(C++/Go/Rust/Solidity/Js).

**Varg Vikernes**
Junior Blockchain Engineer,
Worked in Big Data prior to blockchain, has now switched to developing on Polkadot and doesn't regret it one bit.

**Sven Seven**  
Fullstack Developer  
Software engineer with prod experience since 2015. Master degree Information Security. Has worked in finance, e-commerce, networking domains as full-stack dev. Programming languages are JS, Java, Python, Rust, C++ . Blockchain dev since 2021.

**Vasyl Novak**  
Researcher
BS in economics, MS in Quantitative Finance & Actuarial Science, experienced in, operations management,  IB, financial and strategy consulting, including crypto, passed CFA II level

**Lera Laricheva**  
Creative Designer  
"In 2019 I started to get involved in the IT area. At first, I tried myself as a developer, and eventually I went away from that, to design. At first, I tried myself in design, then when I saw the result, and understood that I liked it, so I found courses and got a diploma. Then I tried freelancing, like many other beginners, but came to the conclusion that the working for a company is much better, and that is where a person can get a tremendous amount of experience, while constantly evolving, because you have to keep up with the tasks, and most importantly to understand them and try to implement them correctly. At the same time, it is my third year studying in Karazin, specialty marketing."

### Team Code Repos

* <https://github.com/Supercolony-net>

Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine.

* <https://github.com/VargSupercolony>
* <https://github.com/sventime>
* <https://github.com/xgreenx>
* <https://github.com/PierreOssun>

### Team LinkedIn Profiles (if available)

* <https://www.linkedin.com/in/mivanichok/>
* <https://www.linkedin.com/in/ian-arden/>
* <https://www.linkedin.com/in/hartej/>
* <https://www.linkedin.com/in/dmitry-kryshtal/>
* <https://www.linkedin.com/in/valeria-laricheva/>

## Development Status :open_book:

[The project](https://github.com/Supercolony-net/openbrush-contracts) is already in release `1.0.0`.

PSP - <https://github.com/w3f/PSPs/pull/25>

## Development Roadmap :nut_and_bolt:

### Overview

**We have decided to describe a full roadmap of an OpenBrush here, with estimates. However, the funding we request at this stage is for milestones 3-5.**

* **Total Estimated Duration:** 12.5 weeks(+ time for approving changes in ink! and PSP repositories)
* **Full-Time Equivalent (FTE):** 2.5
* **Total Costs:** 49,500 USD

### Previous work

#### Milestone 1 - Implement reusable basic contracts in ink!, similar to Openzeppelin

* **Estimated duration:** 2 weeks
* **FTE:**  2.5
* **Costs:** ~~10,000 USD~~ (this cost is covered by Supercolony)
* **Delivery status:** [Delivered](https://github.com/w3f/Grant-Milestone-Delivery/pull/249)

| Number | Deliverable                      | Specification                                                                                                                                                                                                    |
| -----  | -----------                      | -------------                                                                                                                                                                                                    |
| 0a.    | License                          | MIT                                                                                                                                                                                                              |
| 0b.    | Documentation                    | We will enhance inline documentation, and create a tutorial on how to import/customize contracts.                                                                                                      |
| 0c.    | Testing Guide                    | We will add unit tests to cover all basic logic and integration tests with Redspot, to verify that all works via `contract-pallet`                                            |
| 1a.    | Fungible token(Erc20)            | We will implement reusable [Erc20](https://github.com/OpenZeppelin/openzeppelin-contracts/tree/master/contracts/token/ERC20) analog on ink! |
| 1b.    | Non Fungible token(Erc721)       | We will implement reusable [Erc721](https://github.com/OpenZeppelin/openzeppelin-contracts/tree/master/contracts/token/ERC721) analog on ink!                                                                                                         |
| 1b.    | Multi token(Erc1155)             | We will implement reusable [Erc1155](https://github.com/OpenZeppelin/openzeppelin-contracts/tree/master/contracts/token/ERC1155) analog on ink!                                                                                                         |
| 2a.    | AccessControl                    | We will implement reusable [AccessControl](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/AccessControl.sol) analog on ink!                                                                                                         |
| 2b.    | Ownable                          | We will implement reusable [Ownable](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/Ownable.sol) analog on ink!                                                                                     |

#### Milestone 2 - Simplify usage of library. Add a new features which extend ink!. Provide macroses that will allow creation of your own base implementation

* **Estimated duration:** 7 weeks
* **FTE:**  2.5
* **Costs:** 29,999 USD(covered by grant) + 5,000 USD which is covered by Supercolony
* **Delivery status:** [Delivered](https://github.com/w3f/Grant-Milestone-Delivery/pull/261)

| Number | Deliverable                                         | Specification                                                                                                                                                                                    |
| -----  | -----------                                         | -------------                                                                                                                                                                                    |
| 0a.    | License                                             | MIT                                                                                                                                                                                              |
| 0b.    | Documentation                                       | We will enhance inline documentation, update previous documentation based on simplifications, documentation for new features.                                                                                        |
| 0c.    | Testing Guide                                       | We will test macros, update tests according to new features, simplifications.                                                                                               |
| 1.     | Remove boilerplate code                             | We will provide a macro which will allow to remove boilerplate during usage of library(Library provides implementation on rust level in internal trait. User must reuse internal implementation with ink! messages. Our macro will simplify it). It will simplify the code structure and usage. |
| 2.     | Derive for storages                                 | We will provide a derive macro to generate implementation for storage's structs. It will simplify integration of fields inside of struct and implementation of storage's traits for that fields. |
| 3.     | Support default implementation in external traits   | We will add mnemonic support of default implementations inside of trait definition(traits defined via `#[ink::trait_definition]`). It is mnemonic, because under the hood we will generate internal trait with default implementation that will be used in external trait.  |
| 4.     | Support of modifiers                                | We will add support of modifiers, like in Solidity. User will be able to mark some function to use modifiers and it will simplify the code. |
| 5.     | ReentrancyGuard                                     | We will add implementation of [ReentrancyGuard](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/security/ReentrancyGuard.sol) |
| 6.     | Implement additional useful contract                | We will implement [PaymentSplitter](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/finance/PaymentSplitter.sol), [TimelockController](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/governance/TimelockController.sol) and etc. |

### Current work - Scope of this Grant

#### Milestone 3. Reduce the size of Erc20 contract

* **Estimated Duration:** 4 weeks
* **FTE:**  1.5
* **Costs:** 12,000 USD

| Number | Deliverable                                              | Specification                                                                                                                             |
| -----  | -----------                                              | -------------                                                                                                                             |
| 0a.    | License                                                  | MIT                                                                                                                                       |
| 0b.    | Documentation                                            | We will provide a report of how much each optimization reduced the size. |
| 1.     | Reduce the size of Erc20 contract                        | Now the most critical moment with ink! is the huge size of contracts. [This issue](https://github.com/paritytech/substrate/issues/9354) described the problem very well. The parity team works in this direction, and we want to help with ink! side. The ink! team created issue [906](https://github.com/paritytech/ink/issues/906), [916](https://github.com/paritytech/ink/issues/916) and [910](https://github.com/paritytech/ink/issues/910). We want to briefly(not full change, only minimal changes to reduce the size) implement them and provide a report(re-working data structure, reducing monomorphization, using dynamic dispatch in some cases). Based on this report, the ink! team can decide how better to implement them and which part is more critical. During the implementation, we will build examples with our version of ink! (also maybe we will modify some sub-crates). So the output of this work is a report and custom version of ink!. The code can be reused, or if ink! team agrees we can try to implement these issues by ourselves later as separate work.             |

#### Milestone 4. Pre-release - Standardization of tokens contracts. Implement extensions for contracts. Documentation

* **Estimated Duration:** 4.5 weeks(+ time for PSP approving)
* **FTE:**  2.5
* **Costs:** 22,500 USD

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

In the roadmap, you can see what was already done. Currently, we're on the 3-rd milestone.

We have applied and got the [grant](https://github.com/w3f/Grants-Program/pull/497) to cover 1 and 2 milestones. This grant is a follow-up grant.

**How did you hear about the Grants Program?** Web3 Foundation Website / Medium / Twitter / Element / Announcement by another team / personal recommendation / etc.

Personal recommendation.
