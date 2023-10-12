# Chain Extension Suite

- **Team Name:** Deep Ink Ventures GmbH
- **Payment Address:** Ethereum Mainnet, 0x918a4363C35156c8F85F86795a79189e5A1ef557, USDC
- **Level:** 3

## Overview

Through our work with `pallet_hookpoints`, we've gathered substantial insights into `pallet_contracts` and boilerplate code generation. We also implemented chain extensions in our runtimes, and the process uncovered the repetitive and cumbersome nature of opening extrinsics and custom logic to `ink!` due to a lack of standardization and a significant boilerplate code requirement for doing so.

To address these challenges, we are developing a CLI (Command-Line Interface) tool designed to allow per-pallet configuration of chain extensions. This tool will automate the generation of both the Substrate-side chain extension and the corresponding `ink!`-side implementation. This initiative will not only simplify the process of implementing chain extensions but also contribute to a more standardized and developer-friendly environment within the Substrate ecosystem.

In addition, we propose introducing ready-to-ship chain extensions for selected FRAME pallets, adhering to standards like `PSP-22` for `pallet_assets` and `PSP-34` for `pallet_nft` in `ink!`. This approach aims to reduce boilerplate code and promote standardization.

<p align="center">
  <img src="https://github.com/deep-ink-ventures/Grants-Program/assets/120174523/0f2a0ffd-0a8b-4096-91ac-79ca8cfd61a2">
  <i>Overview of the components involved in this grant</i>
</p>

## Project Details

### Introduction

Traditionally, the creation of chain extensions involves a manual bridging between contracts and the Substrate runtime, predominantly carried out through conventions defined by developers. These conventions often resort to utilizing integers as the medium for data transmission between the two realms. However, this manual setup demands meticulous consistency on both ends, posing a risk of inefficiency and errors.

Addressing this, our initiative encapsulates the development of a CLI (Command-Line Interface) tool aimed at automating this bridging process. The tool is designed to auto-wire extrinsics with pre-generated code, seamlessly linking them to pre-generated smart contracts, all adhering to a common, predefined convention. This automation eradicates the manual toil, ensuring a reliable and consistent communication channel between the Substrate runtime and contracts.

This approach does more than just alleviating the coding workload; it presents a pathway guiding developers to structure their codebase around chain extensions. It also delineates good practices for writing chain extensions, fostering an organized, intuitive, and efficient development environment.

## Components Overview

### CLI Extension

The CLI Extension is devised to be a highly configurable, complexity-abstracted toolkit, written in Rust, offering a user experience akin to the `hookpoints-cli`. This tool is engineered to automate and streamline the process of exposing specified extrinsics from the runtime to smart contracts, simplifying the bridge between Substrate and contract environments.

Here are the core functionalities of the CLI Extension:

- **Runtime Inspection**: The tool scans the runtime for extrinsics and allows developers to selectively specify the methods they wish to expose for chain extension functionality.

- **Auto Generated Chain Extension Setup**:
    - The CLI tool auto-generates a `./chain-extensions/<pallet-name>/` directory, encompassing a complete ChainExtension setup. This setup includes provisions for error handling and managing the call lifecycle, ready to be integrated into Substrate.

- **Auto Generated Contract Components**:
    - Parallelly, it crafts a `./contracts/extensions/<pallet-name>` component. This component houses a ChainExtension trait, tailored to communicate seamlessly with the generated Substrate code.

- **Sample ink! Contract**:
    - To jumpstart the integration, a sample ink! contract is provided. This contract, designed to interact with the aforementioned trait, is ready-to-ship, aiding developers in swift onboarding and testing of the chain extension setup.

- **Configurable Defaults and Code Adjustability**:
    - The CLI tool ships with sensible defaults for the setup to expedite the initial setup. Moreover, the generated code is structured to be easily adjustable, catering to further development and customization needs.

This CLI Extension is envisioned to significantly cut down the manual coding effort, accelerate the setup process, and ensure that the codebase remains organized and in sync with good practices, thereby contributing to a more developer-friendly and efficient Substrate ecosystem.

#### Sample Flow

Here's a breakdown of the sample flow for a better understanding of what the CLI tool will auto-generate for the developer.

##### Chain Extension Code Generation (Substrate Side):

The first snippet illustrates auto-generated code on the Substrate side, specifically within a Chain Extension.

- The function `func_id` is matched to `AssetsFunc::BalanceOf`, which is conventionally mapped to an integer (`105` in this case, as seen in snippet 2).
- Following the match, the parameters `id` and `who` are read from the environment, and the runtime is charged for a database read operation.
- The `pallet_assets::Pallet::<T>::balance(id, who)` function call retrieves the balance of the specified account for the specified asset.
- The balance is then written back to the environment to be relayed to the ink! contract side.

```rust
let call_result = match func_id {
    AssetsFunc::BalanceOf => {
        let (id, who): (T::AssetId, T::AccountId) =
            env.read_as()?;

        env.charge_weight(T::DbWeight::get().reads(1_u64))?;

        let balance = pallet_assets::Pallet::<T>::balance(id, who);
        env.write(&balance.encode(), false, None)?;
        Ok(())
    },
}
```

##### Chain Extension Trait Generation (ink! Side):
- The second snippet showcases the auto-generated chain extension trait on the ink! side.
- The trait `AssetExtension` is marked with `#[ink::chain_extension]`, signaling its purpose for chain extension functionality.
- The `balance_of` function is declared with an extension identifier `105`, matching the `func_id` on the Substrate side.

```rust

#[ink::chain_extension]
pub trait AssetExtension {
    type ErrorCode = AssetError;

    #[ink(extension = 105)]
    fn balance_of(
      asset_id: AssetId, account: AccountId
    ) -> Result<u128, AssetError>;
}
```

##### Smart Contract Implementation (ink! Side):
- The third snippet demonstrates an actual smart contract implementation utilizing the auto-generated chain extension trait.
- The `balance_of` method, part of the PSP22 trait implementation, leverages the `AssetExtension` trait to interact with the `balance_of` function on the Substrate side.
- This method essentially invokes the `balance_of` function of the chain extension, passing the `asset_id` and owner as arguments to retrieve the balance.

```rust
/// Implementation of the PSP22 standard for the `AssetContract`.
impl PSP22 for AssetContract {
    
    /// Returns the balance of the `owner` account.
    #[ink(message)]
    fn balance_of(&self, owner: AccountId) -> Balance {
        self.env().extension().balance_of(self.asset_id, owner).unwrap_or(0)
    }
}
```

The elaborated flow aims to provide a glimpse into the comprehensive code structure generated through the CLI Extension tool. This automated setup significantly simplifies the interaction between the Substrate runtime and ink! contract environments. By referring to the demonstrated approach in the [Genesis DAO Chain Link extension](https://github.com/deep-ink-ventures/genesis-dao-node/blob/main/chain-extensions/pallet-dao-assets/src/lib.rs), one can further grasp the level of automation and streamlined code management that we aim to achieve with this tool.

### `pallet_assets_extensions` and `pallet_nft_extensions`

The Substrate framework's FRAME provides `pallet_assets` for fungible tokens and `pallet_nft` for non-fungible tokens (NFTs), aligning with the prevalent token standards in the blockchain domain. On the smart contract side, ink! adheres to PSP-22 for fungible tokens and PSP-34 for NFTs.

Within the objective of this grant we develop `pallet_assets_extensions` and `pallet_nft_extensions`. These extensions aim to expose chain extension functionality for `pallet_assets` and `pallet_nft`, thereby creating a bridge for enhanced interaction between the Substrate runtime and the smart contract environment of ink!.

The envisioned extensions will include ready-to-go contracts for the ink! ecosystems, facilitating a seamless integration and interaction between the substrate runtime and smart contracts, adhering to the respective token standards. This initiative seeks to automate and standardize the chain extension process for fungible and non-fungible tokens within the Substrate ecosystem, thereby fostering an environment of ease and efficiency for developers working across these platforms.

It specifically includes:
- **PSP22 & PSP34 chain extensions** for `pallet_asset` and `pallet_nft`, ready to add to the `pallet_contract` runtime config type `ChainExtension`.
- **PSP22 & PSP34 traits** written in ink.
- **An asset and an NFT chain-extension** for ink! satisfying the full feature set of the respective standard alongside with actual implementation of the smart contracts in ink!.


```rust

/// Sample of the final PSP22 code …. 
impl PSP22 for AssetContract {

  /// Transfer tokens from the caller to the `to` account.
  #[ink(message)]
  fn transfer(
    &mut self, 
    to: AccountId, 
    value: Balance,
    _data: Vec<u8>
  ) -> Result<(), PSP22Error> {
     let result = self
       .env()
       .extension()
       .transfer(self.asset_id, to, value)
       .map_err(PSP22Error::from);
    
     if result.is_ok() {
       self.env().emit_event(Transfer {
         from: Some(self.env().caller()),
         to: Some(to),
        value,
       });
     }
     result
  }
}
```

### ink! v5 Upgrade

The forthcoming release of ink! v5 is anticipated to bring about enhanced features and optimizations. Being at the forefront of these developments, the Chain Extension Suite is designed to be compatible with ink! v5 right out of the gates.

Additionally, this grant encompasses the upgrade of `pallet_hookpoints` to be compatible with ink! v5. This proactive upgrade signifies a commitment to keeping the toolset current and aligned with the latest advancements in the ink! ecosystem.

## Ecosystem Fit

ink! has been carving out its space within the blockchain community as an adept smart contracting language. Its ease of use, coupled with the familiar Rust domain-specific language (DSL), makes it a favorable choice for developers venturing into the Substrate-based blockchain development.

However, despite its growing popularity, developers often find themselves entangled in the intricacies of low-level communication when integrating ink! into their runtimes. This level of complexity could potentially deter or slow down developers, especially those new to the Substrate ecosystem. The lack of higher-level abstractions and streamlined tooling often necessitates a deeper dive into the underlying communication protocols between the runtime and smart contracts, which could be quite daunting.

Addressing this gap, the Chain Extension Suite, in harmony with the [Hookpoints Suite](https://github.com/deep-ink-ventures/pallet_hookpoints), is envisioned to significantly ease the developer's journey. By abstracting away the low-level communication and boilerplate code, these suites allow developers to focus more on the business logic and less on the underlying plumbing. The auto-generating CLI tool within the Chain Extension Suite is particularly aimed at simplifying the process of exposing runtime methods to smart contracts, thereby accelerating the development process. Together, these suites aim to foster a more developer-friendly ecosystem, enabling developers to kickstart their projects swiftly, and contribute to the flourishing Substrate ecosystem with lesser hurdles.


## Team

### Contact

- **Contact Name:** Jakob Drzazga
- **Contact Email:** 	admin@deep-ink.ventures

### Legal Structure

Registered Address: Solmsstraße 11 10961 Berlin - Kreuzberg
Registered Legal Entity: Deep Ink Ventures GmbH


- Deep Ink Ventures GmbH, registered with the commercial register at the local court of Berlin, HRB 247342


## Development Roadmap

### Overview

- **Total Estimated Duration:** 5-6 month
- **Full-Time Equivalent (FTE):**  3 FTE
- **Total Costs:** $ 100,000


## Development Status :open_book:

### Milestone 1

- **Estimated Duration:** 2 month
- **FTE:** 3
- **Costs:** $35,000

| Number | Deliverable          | Specification |
| ------ | -------------------- | ------------- |
| **0a.**| License              | Apache 2.0    |
| **0b.**| Documentation        | Comprehensive documentation for each pallet extension and the upgrade, including tutorials and guides on how to integrate and utilize the extensions. |
| **0c.**| Testing Guide        | A detailed guide on how to run the test suites for each extension and the upgraded pallet_hookpoints, along with a demonstration of the testing coverage. |
| **1.** | `pallet_nft_extensions` | Development and implementation of the `pallet_nft_extensions`, providing chain extension functionality for `pallet_nft` in both ink! and EVM ecosystems. |
| **2.** | `pallet_assets_extension` | Development and implementation of the `pallet_assets_extension`, providing chain extension functionality for `pallet_assets` in both ink! and EVM ecosystems. |
| **3.** | `pallet_hookpoints` v5 extension | Upgrading `pallet_hookpoints` to be compatible with ink! v5, ensuring its functionality aligns with the latest advancements in ink!. |
| **4.** | Medium Article | A Medium article detailing and announcing the new pallet extensions and the upgrade of `pallet_hookpoints` to ink! v5. |

---

### Milestone 2

- **Estimated Duration:** 3-4 month
- **FTE:**  3
- **Costs:** $65,000

| Number | Deliverable          | Specification |
| ------ | -------------------- | ------------- |
| **0a.**| License              | Apache 2.0    |
| **0b.**| Documentation        | Comprehensive documentation covering the CLI Extension tool, its features, and how to use it for generating chain extensions. |
| **0c.**| Testing Guide        | A detailed guide on how to run the test suites for the CLI Extension tool and a demonstration of the testing coverage. |
| **1.** | CLI Extension Tool - Part 1: Setup   | Establishing the CLI tool to inspect the Substrate runtime and enable code generation capabilities. |
| **2.** | CLI Extension Tool - Part 2: Substrate-side Chain Extensions Generation | Auto-generation of the Substrate-side chain extension code based on the inspected runtime methods. |
| **3.** | CLI Extension Tool - Part 3: ink!-side Chain Extension Traits Generation | Auto-generation of ink!-side chain extension traits to facilitate communication with the generated Substrate-side chain extensions. |
| **4.** | CLI Extension Tool - Part 4: Reference Smart Contract Generation | Generation of a reference smart contract in ink! that interacts with the generated chain extension traits and Substrate-side chain extensions. |
| **5.** | Medium Article | A Medium article detailing and announcing the CLI Extension tool, explaining how it simplifies the generation of chain extensions and enhances the developer experience within the Substrate ecosystem. |

