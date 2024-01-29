# Pendzl

- **Team Name:** C Forge
- **Payment Address:** 15VHeCpx5SUbRsbiZAfYtERxXPNKNZfc9bNBnGGZ4SvaT2ct (USDT)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

The Pendzl Library represents the evolution of the OpenBrush v4.3.0 smart contract library, taking it to the ink 5.0.0 standard while introducing crucial features like event emission. Our primary focus is to enhance usability and eliminate unnecessary parts of the code (ex. macros) that have historically complicated the OpenBrush library. The mentioned evolution of OpenBrush is necessary due to it becoming too complex & introducing updates that piled up and have had a detrimental effect on development experience.

Pendzl's core principle is simplicity. We aim to minimize the introduction of new code while maximizing utility. Our overarching vision is to establish Pendzl as an open-source project, inviting contributions from the entire ink smart contract developer community.

At C Forge, we have already initiated essential modifications to OpenBrush, stepping in when the Brushfam departed from the ecosystem. We had relied on OpenBrush for the development of the Abax Lending Protocol and various other projects. We believe that Pendzl will become an invaluable resource for ink smart contract developers, aiding in their endeavors and fostering collaborative innovation within the community.
### Overview

#### What is Pendzl?
Pendzl is a smart contract library that facilitates the reuse of commonly used smart contracts and simplifies the process of contract overriding. The primary goal of this library is to allow developers, with the use of a single macro #[pendzl::implementation(PSP22)], to derive a default implementation of a contract (in this case, PSP22). This macro can be considered similar to a #[derive()] macro for ink!. Additionally, Pendzl ensures that default implementation methods can be easily overridden.

#### How does Pendzl relate to Substrate?
Once completed, Pendzl will become an integral part of the ink smart contract developer experience. It will serve as a tool that significantly expedites the development process and promotes best practices in ink smart contract development, ultimately leading to substantial cost reductions in production.

#### Why do we want to develop Pendzl?
Our team is responsible for developing all smart contracts for the Abax Community, including projects like Abax Lending Protocol and Abax Governor. Internally, we have been using a modified version of OpenBrush, which we have named Pendzl. While OpenBrush was useful, it had become complex, and after the Brushfam stopped supporting it, we decided to fork it, making it simpler, more user-friendly, and easier to maintain. Pendzl is already in use by our team for developing complex smart contracts, and we believe that with additional work, it will benefit the entire ecosystem.

### Project Details

Pendzl is a Rust library built on top of ink! It will provide developers with two key macros:

1. `#[pendzl::implementation]`: This macro wraps the contract module and functions similarly to a #[derive] macro, allowing for the derivation of a contract's implementation.

2. `#[pendzl::storage_item]`: This macro wraps struct/enum definitions used in contract storage. It manages the ManualKey of each field, simplifying the creation of upgradable smart contracts.

3. `#[derive(Storage)]`: This derive macro generates a Storage trait required for using `pendzl::implementation`.

As part of the first milestone, we aim to support the following smart contract implementations:

1. PSP22, including extensions such as PSP22Mintable, PSP22Burnable, PSP22Metadata, and an analog of ERC4626.
2. PSP34, including extensions like PSP34Mintable, PSP34Burnable, and PSP34Metadata.
3. Ownable, an analog of ownable from the OpenZeppelin library.
4. AccessControl, an analog of access_control from the OpenZeppelin library.
5. Pausable, an analog of pausable from the OpenZeppelin library.
6. GeneralVester, a contract supporting the creation of a custom vest.

      
  An example of usage should look like this:

    An example of a psp22 contract:
    ```
    // SPDX-License-Identifier: MIT
    #![cfg_attr(not(feature = "std"), no_std, no_main)]

    #[pendzl::implementation(PSP22)]
    #[ink::contract]
    pub mod my_psp22_bare_minimum {
        #[ink(storage)]
        #[derive(Storage)]
        pub struct Contract {
            #[storage_field]
            psp22: PSP22Data,
        }

        impl Contract {
            #[ink(constructor)]
            pub fn new(total_supply: Balance) -> Self {
                let mut instance = Self {
                    psp22: Default::default(),
                };

                instance
                    ._mint_to(&Self::env().caller(), &total_supply)
                    .expect("Should mint");
                instance
            }
        }
    }

    ```

    A general-purpose Vester contract:
    ```
    // SPDX-License-Identifier: MIT
    #![cfg_attr(not(feature = "std"), no_std, no_main)]

    #[pendzl::implementation(Vesting)]
    #[ink::contract]
    pub mod vester_custom {
        #[ink(storage)]
        #[derive(Default, Storage)]
        pub struct Vester {
            #[storage_field]
            vesting: VestingData,
        }

        impl Vester {
            #[ink(constructor)]
            pub fn new() -> Self {
                Default::default()
            }
        }
    }
    ```

    An example of an Ownable PSP22 Contract with restricted mint and burn methods:
    ```
    #[pendzl::implementation(PSP22, Ownable)]
    #[ink::contract]
    pub mod ownable {
        use pendzl::contracts::token::psp22::extensions::{
            burnable::PSP22Burnable, mintable::PSP22Mintable,
        };

        #[ink(storage)]
        #[derive(Default, Storage)]
        pub struct Contract {
            #[storage_field]
            psp22: PSP22Data,
            #[storage_field]
            ownable: OwnableData,
        }

        impl Contract {
            #[ink(constructor)]
            pub fn new() -> Self {
                let mut instance = Contract::default();
                instance._update_owner(&Some(Self::env().caller()));
                instance
            }
        }

        impl PSP22Burnable for Contract {
            #[ink(message)]
            fn burn(&mut self, account: AccountId, amount: Balance) -> Result<(), PSP22Error> {
                self._only_owner()?;
                self._update(Some(&account), None, &amount)
            }
        }

        impl PSP22Mintable for Contract {
            #[ink(message)]
            fn mint(&mut self, account: AccountId, amount: Balance) -> Result<(), PSP22Error> {
                self._only_owner()?;
                self._update(None, Some(&account), &amount)
            }
        }
    }
    ```




### Ecosystem Fit

#### Where and how does your project fit into the ecosystem?
Pendzl emerges as a vital solution within the ink ecosystem following Brushfam's departure, which left ink developers without a dedicated smart contract library. Our project is poised to bridge this critical gap.

#### Who is your target audience?
Our primary audience consists of ink! smart contract developers.

#### What need(s) does your project meet?
Pendzl serves the essential purpose of simplifying and expediting smart contract development, resulting in increased efficiency and cost-effectiveness.

#### How did you identify these needs?
Our insights into these needs stem from our extensive experience as ink smart contract developers spanning over two years. Furthermore, our observations within the Telegram chat group "Aleph Zero ecosystem builders" reinforced the demand for a robust smart contract library.

#### Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?
Yes, our project is rooted in the OpenBrush library. However, OpenBrush encountered its set of challenges and is no longer actively maintained.

## Team :busts_in_silhouette:
### Team members

- Konrad Wierzbik
- Łukasz Łakomy
- Igor Cieślar

### Contact

- **Contact Name:** Konrad Wierzbik
- **Contact Email:** konrad.wierzbik@gmail.com
- **Website:** ---

### Legal Structure

- **Registered Address:** aleja Powstania Warszawskiego 15, 31-539 Kraków, POLAND
- **Registered Legal Entity:** C Forge sp. z.o.o

### Team's Experience

We take pride in the extensive experience of our team members, Konrad Wierzbik and Łukasz Łakomy, who are well-versed in the development of ink! smart contracts. Their expertise spans over two years in this domain, making them seasoned professionals in the field.

Furthermore, their recognition by the Aleph Zero Ecosystem Founding Program underscores their dedication and recognition within the ecosystem. They were among the very first to be accepted into this prestigious program, solidifying their commitment to the growth and advancement of the ink! smart contract ecosystem.


### Team Code Repos
- https://github.com/Pendzl/pendzl
- https://github.com/AbaxFinance/Governance
- https://github.com/AbaxFinance/abax-liquidator
- https://github.com/Nradko/StableCoinProject

### Team Github Profiles

- https://github.com/Nradko
- https://github.com/WookashWackomy

### Team LinkedIn Profiles (if available)

- https://www.linkedin.com/in/konrad-wierzbik/
- https://www.linkedin.com/in/%C5%82ukasz-%C5%82akomy-901b75145/


## Development Status :open_book:
The state of the Pendzl atm:
- https://github.com/Pendzl/pendzl



## Development Roadmap :nut_and_bolt:
### Overview

- **Total Estimated Duration:** 3 months
- **Full-Time Equivalent (FTE):**  1,66
- **Total Costs:** $30,000

### Milestone 1 Library

- **Estimated duration:** 1 month
- **FTE:**  2,5
- **Costs:** 19,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License |  MIT |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a developer can use Pendzl to easily write smart contracts. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1. | Implementation macro | We will make #implementation macro work as shown in Project Details |
| 2. | Smart contract implementation | We will write our own smart contract implementations that are more customizable and allow developers for much more! |
| 3. | ink 5.0.0-rc support | We will make the library work with ink 5.0.0-RC (and with ink 5.0.0 if it will be already released) |
| 4. | Event emission | Our smart contract implementations will, by default, emit appropriate events |


### Milestone 2 Examples and Finalization

- **Estimated Duration:** 1 month
- **FTE:**  1,5
- **Costs:** 11,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License |  MIT |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a developer can use Pendzl to easily write smart contracts. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an article that explains what Pendzl is, how it benefits the Polkadot ecosystem, how it improves the developer experience, and how it accelerates the onboarding of new projects. |
| 1. | Examples | We will provide examples of usage. |
| 2. | Finalizing code | We will meticulously refine the codebase to meet state-of-the-art standards, ensuring it is audit-ready. |


## Future Plans

We anticipate that once the library demonstrates its value, ongoing maintenance will be sustained through contributions from projects that benefit from it. As part of Abax, we are committed to maintaining the library, but we also welcome and encourage other smart contract developers to join us in the development of this open-source initiative.


## Referral Program (optional) :moneybag:

none

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?**  personal recommendation

## Additionally

We want to explicitly acknowledge that the concept and previous groundwork were established by the OpenBrush team. At Abax, we relied on OpenBrush to develop our smart contracts and recognized the absolute necessity of a sophisticated smart contract library for crafting non-trivial smart contracts. Subsequently, we took over the maintenance of OpenBrush for internal purposes when their team discontinued the project. After consulting with developers across the ecosystem, it became evident that many perceived OpenBrush as intricately complex under the hood.

With our commitment to advancing smart contract development, we decided to create a new library inspired by the OpenBrush concept. However, our objective is to simplify and enhance its adaptability. This project builds upon the foundation laid by OpenBrush, aiming to provide a more accessible and versatile tool for the ink smart contract community.
