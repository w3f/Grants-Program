# W3F Grant Proposal
- **Project Name:** Native Bitcoin Vaults (NBV)
- **Team Name:** Hashed Systems (Max Gravitt)
- **Payment Address:** bc1qcqzspw5ykm7rv4ph8ahzynvp6jmfdp8hvwevpv6xaqq9wt79vlasygls3w (BTC)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Overview
Native Bitcoin Vaults (NBV) is a composable Substrate application for **native** Bitcoin multisig wallets. NBV does **NOT** use peg tokens, wrapped tokens, synthetics, or any other cross-chain communication or escrow arrangement.

A vault is a [BIP-174](https://github.com/bitcoin/bips/blob/master/bip-0174.mediawiki) multisignature Bitcoin wallet.

Substrate accounts set their [Extended Public Key](https://river.com/learn/terms/x/xpub-extended-public-key/) to their profile on the prebuilt [Identity pallet](https://github.com/paritytech/substrate/blob/master/frame/identity/). These accounts, vault signers, may be selected via any mechanism, usually an election. 

Using [Partially Signed Bitcoin Transactions (PSBT)](https://river.com/learn/what-are-partially-signed-bitcoin-transactions-psbts/) and [output descriptor](https://github.com/bitcoin/bitcoin/blob/master/doc/descriptors.md), NBV facilitates secure receiving address generation and a seamless user experience for managing and executing multisig Bitcoin transactions.

### Background
We believe that Bitcoin is the premiere store of value, and that Bitcoin directly on the native chain is more valuable and easier to use than any wrapped tokens, peg tokens, or synthetics. 

Bitcoin is the premiere store of value. Handling Bitcoin on its native chain via partially-signed-bitcoin-transactions (PSBTs) and cold storage wallets is by far the [most secure](https://btcguide.github.io/) and easiest to use manner.  

NBV allows for Substrate-based governance to establish which accounts should be responsible for a specific vault (usually via election), and provides those treasurers the UI for signing Substrate transactions and multisig Bitcoin transactions. 

NBV also generates verifiable Bitcoin receiving addresses to enhance the security and comfort of donors and investors.

DAOs' native token(s) are nearly always secure and trustless. However, small businesses and DAOs also want to hold Bitcoin in vault. These organizations frequently do not integrate their primary governance chain and Bitcoin, leaving open a significant vulnerability. NBV solves this.
### NBV Use Case Diagram
![Native Bitcoin Vaults Use Cases Diagram](http://www.plantuml.com/plantuml/proxy?src=https://raw.githubusercontent.com/3yekn/hosted/main/nbv-usecases.iuml)
## Project Details
### User Identity Setup
To get started, each account will need at least one [Extended Public Key](https://river.com/learn/terms/x/xpub-extended-public-key/) (`xpub`) [docs.rs](https://docs.rs/bitcoin/0.27.1/bitcoin/util/bip32/struct.ExtendedPubKey.html). This can be used to calculate a nearly infinite number of receiving addresses, and it can be combined with other  `xpubs` to generate [BIP-0174](https://github.com/bitcoin/bips/blob/master/bip-0174.mediawiki) compatible PSBT multisig wallets.

User calls `setIdentity` to specify their `xpub`:
```sh
polkadot-js-api --ws wss://n1.hashed.systems tx.identity.setIdentity '{
    "display": {
        "Raw": "Paul McCartney"
    },
    "additional": [[{
            "Raw": "xpub"
        },{
            "Raw": "[dca67f77/84/1/0/0]tpubDEQ2wZuuDfizT2aThADBimVaDwWb3aK6WtA3VRMoCDog2Gg3PtDa1gHWhZYEiGba5XA2D2opry9MxZVVjgAaGM8MCnvW6kt6v5AURRyLHPh/*"
          }
        ]
    ]
}' --seed "bargain album current caught tragic slab identify squirrel embark black drip imitate"
```
> Note: the above string is too long for the `additional` fields, thus it will likely be stored elsewhere with a hash. Above for illustrative purposes.
### Treasurer Selection
A `treasurer` is any account that is a participant on an NBV wallet.

A set of treasurers may be decided in any manner. In our experience, there is typically a set selected at genesis of a community, and then that set changes based on elections o the application and approval of a badge or assignment. The set is a `BoundedVec` of `AccountIDs`.

Once decided, the `set_signers` extrinsics is called with this list of accounts as well as the `threshold` for the number of signers required to approve a bitcoin transaction.

```rust
pub fn set_signers(
  origin: OriginFor<T>,
  signers: BoundedVec<AccountID, usize>,
  threshold: u8) -> DispatchResultWithPostInfo {
  // ...
}
```
### Bitcoin Output Descriptors
This extrinsic persists enough information to generate the multisig wallet's [output descriptor](https://github.com/bitcoin/bitcoin/blob/master/doc/descriptors.md). *"Output script descriptors are strings that contain all the information necessary to allow a wallet or other program to track payments made to or spent from a particular script or set of related scripts (i.e. an address or a set of related addresses such as in an HD wallet)"* [[1](https://bitcoinops.org/en/topics/output-script-descriptors/)].

Output descriptors are supported in Bitcoin Core and are quickly becoming the preferred portable format for wallets. In particular, they are the cornerstone of the [Bitcoin Development Kit](https://bitcoindevkit.org/), a well-maintained Rust library and *"the simplest way to integrate Bitcoin wallet features into any application"* [[2](https://bitcoindevkit.org/)]. 

Here's an output descriptor for a 3 of 5 multisig wallet:
```
wsh(multi(3,tpubDEQ2wZuuDfizYa8Vxo92Jz96nDhwwHTczsHTpSt4hnSRaWhQbj8Nrb46QitDpeEABLQSHPSyxdCn8gUDE6uZ2TWPLreLzvhFZLPPyrSizBz/1/0/*,
  tpubDEQ2wZuuDfizZR2aCmD5gpHJtsXET1zpYmR1JA9nMp4EWDcnnC957ekfaysjF4T8hSNJj98fEcUocnhds3Gwot8G145AZDsYjpwuJto4DFQ/0/0/*,
  tpubDEQ2wZuuDfizUWke1ZhreeVoybZiYiRept7ifSNSefbmPEM7yeNkbH1Kx4uMBnCtq2bB95oT1YX1ZAFuTfA1LetiTTrYuP6ShXsUUv6Bd8Q/0/0/*,
  tpubDEQ2wZuuDfizT2aThADBimVaDwWb3aK6WtA3VRMoCDog2Gg3PtDa1gHWhZYEiGba5XA2D2opry9MxZVVjgAaGM8MCnvW6kt6v5AURRyLHPh/0/0/*,
  tpubDEQ2wZuuDfizdnKYinDkouHHo7CeDdgScMfPYLMR8cnq3PYj85SccVnXa2Yt9HfVXq1riCkDLQG7R5YwcR8HY5z79M5b6zNsX4pZ12ngu1i/0/0/*))
```

### Generate Receiving Addresses

A common attack with Bitcoin is a man-in-the-middle attack where an attacker's address is injected unbeknowst to the sender, who inadvertently sends coins to the attacker. NBV will generate verifiable single-use receiving addresses to provide to donors and investors that contribute send Bitcoin.

Using BDK-CLI, the addresses are generated as follows: 
```sh
$ bdk-cli wallet --descriptor 'wsh(multi(3,tpubDEQ2wZuuDfizYa8Vxo92Jz96nDhwwHTczsHTpSt4hnSRaWhQbj8Nrb46QitDpeEABLQSHPSyxdCn8gUDE6uZ2TWPLreLzvhFZLPPyrSizBz/1/0/*,
  tpubDEQ2wZuuDfizZR2aCmD5gpHJtsXET1zpYmR1JA9nMp4EWDcnnC957ekfaysjF4T8hSNJj98fEcUocnhds3Gwot8G145AZDsYjpwuJto4DFQ/0/0/*,
  tpubDEQ2wZuuDfizUWke1ZhreeVoybZiYiRept7ifSNSefbmPEM7yeNkbH1Kx4uMBnCtq2bB95oT1YX1ZAFuTfA1LetiTTrYuP6ShXsUUv6Bd8Q/0/0/*,
  tpubDEQ2wZuuDfizT2aThADBimVaDwWb3aK6WtA3VRMoCDog2Gg3PtDa1gHWhZYEiGba5XA2D2opry9MxZVVjgAaGM8MCnvW6kt6v5AURRyLHPh/0/0/*,
  tpubDEQ2wZuuDfizdnKYinDkouHHo7CeDdgScMfPYLMR8cnq3PYj85SccVnXa2Yt9HfVXq1riCkDLQG7R5YwcR8HY5z79M5b6zNsX4pZ12ngu1i/0/0/*))' get_new_address
```
```json
{
  "address": "tb1q433j97374mss5na5eu7f0ja29rx2fsretgs2h4f5p886x5mqg65q74fhzv"
}
```
To calculate the **next** address, the index of the [BIP-32](https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki) derivation is incremented. This index is saved in the pallet state as `u32`. When NBV detects that a UTXO is received on an address, the `index` on-chain is incremented.
### Proposing a Transaction
Any user can propose a Bitcoin transaction. The required input is simply the destination address and the amount to send. This unsigned transaction is saved and the eligible signers see this proposal in their queue for review.

```rust
pub fn propose(
  origin: OriginFor<T>,
  recipient: bitcoin::util::address::Address,
  sats: u32,
  memo: T::Memo) -> DispatchResultWithPostInfo {
    // ...
}
```
Within the user interface, the list of proposed and partially signed transactions will show in a table along with an identifier of which accounts have and have not signed the transaction.
### Signatures
When a treasurer clicks on one of the proposals, it is opened in a customized version of [Spectre Desktop](https://github.com/cryptoadvance/specter-desktop). Spectre Desktop is a web-based, open source Bitcoin transaction coordinator. In the customized version, it will use the information from the pallet to open the wallet and the transaction(s).

Spectre Desktop supports all of the common Bitcoin hardware wallets.

![image](https://user-images.githubusercontent.com/32852271/157713181-061fa126-89be-43e1-8c73-6f7cb6e2d9d3.png)

The unsigned transaction must be signed by a `threshold` number of signers, and then it may be broadcast.

Spectre Desktop requires connecting to a Bitcoin Core node, which will be operated as part of the required stack.
## Tech Stack
### License
Unless W3F has an opinion or there are other factors to consider with the dependencies, all deliverables will be licensed MIT.
### Bitcoin Rust Libraries
The pallet will be built with the premiere Bitcoin Rust libraries, including:
- [rust-bitcoin/rust-bitcoin](https://github.com/rust-bitcoin/rust-bitcoin)
- [rust-bitcoin/rust-miniscript](https://github.com/rust-bitcoin/rust-miniscript/)
- [bitcoindevkit/bdk](https://github.com/bitcoindevkit/bdk)
#### `no_std` Support and Contingency
Of course, the pallet requires compilation to WASM, which means support for `no_std`. This requires changes to all three of the above libraries, each of which already has [open Github issues](https://github.com/bitcoindevkit/bdk/issues/205).

The heavy lifting for this has mostly been completed, but the libraries with the updates have not been released yet. Our first preference is to use them directly with their latest release.

However, if they are not released in time, we will either 
  a) build a custom library, or 
  b) host native Rust services as an [off-chain worker](https://docs.substrate.io/v3/concepts/off-chain-features/). 

Both of these are temporary solutions, and we would later revert to mainline when the release is available.
#### Bitcoin Dev Kit
BDK has an extensible structure that, according to their website, *"developers can implement customized logic for blockchain backends, databases, signers, coin selection, and more, without having to fork and modify th[e] library."*

Our preference is that we will be able to do just this by supporting a Substrate data store as a [`bdk::database::Database`](https://docs.rs/bdk/latest/bdk/database/trait.Database.html). However, we can also use BDK in a stateless manner and manage the information outside of BDK storage.
### Bitcoin Signer: Spectre Desktop and/or Caravan
There are multiple options for the Bitcoin signer. Our first choice is to use Spectre Desktop because of the support for output descriptors, existing user adoption, breadthe of supported hardware wallets, and reputation for high quality and secure software. Spectre Desktop has a python backend and a web client.  

Another option is to use [Caravan - Stateless Multisig Coordinator](https://unchained-capital.github.io/caravan/#/), which is a web client with no backend. Caravan is also highly regarded and supports a number of hardware wallets, namely Trezor, Ledger, and Coldcard. Caravan does not have support for output descriptors. 

In either case, the signer will open the transaction and prompt the user to sign and save the PSBT back to the Substrate node.
### Native Bitcoin Vault (NBV) Web Client
The NBV client will be developed in Vuejs or React, and will support the `polkadot{js}` browser plugin. The user will be able to create, edit, or remove `xpubs` from the `Identity` pallet using the NBV client.

It will also support: 
  - creating and deleting Bitcoin vaults,
  - creating multisig Bitcoin proposals, 
  - viewing a list of open proposals, 
  - viewing past approved and denied proposals, 
  - viewing the details of transactions, and 
  - opening them in the signer.

The client will support create, edit, and delete of Bitcoin vaults. Users will be able to add accounts as a list of treasurers and save it. Our primary use case is for treasurers to be decided via on-chain governance, but manual direct creation will be useful for simple usage and also small businesses, non-profits, etc. 
## Scoping
### In Scope of this Proposal
- **_Features_** - Support for all of the use cases shown in the use case diagram above.
- **_Pallet(s)_** - At least one pallet delivered. As much as reasonable, we will model the prebuilt [multisig pallet](https://github.com/paritytech/substrate/blob/master/frame/multisig/src/lib.rs) to align with comfortable patterns.
- **_Node_** - At least one node, as a reference implementation with the minimum feature set enabled.
- **_Hosted Instance_** - We will host a testnet and mainnet instance of the reference implementation, including Bitcoin Core nodes.
- **_Documentation_** 
  - we will author and host an `mdBook` with an explanation of the mechanics of NBV
  - book will include detailed documentation on all user-facing features
  - source code will be documented in the same manner as Parity's prebuilt pallets
  - video explainer and demonstration of all features will be recorded and published
- **_Support_** - we will provide user and developer support for no less than 2 years
- **_Maintenance_** - we will maintain the components on the mainline releases of Substrate for no less than 2 years
### Out of Scope
- **_Other Coins_** - Substrate is rich with governance and multisig features for native tokens, and we are not attempting to improve upon that per se. The only token supported within the Treasury itself is Bitcoin.
- **_See Future Road Map_** - see below for details about the post-release road map.
## Ecosystem Fit
We believe that Bitcoin is the premiere store of value. Bitcoin handled directly on the native chain is more valuable, safer, and easier to use than any wrapped tokens, peg tokens, or synthetics. 

The initial target audience for NBV is Hashed Chain, a multi-tenant, standalone Substrate blockchain for hosting and operating small businesses or DAOs. I also believe that it will be a useful utility on many chains in many scenarios. These opinions are based on our hands-on and pragmatic experience over the last several years.

Our team has a proven track record with building software for small businesses and DAOs. We built the [Hypha DAO](https://github.com/hypha-dao/) platform (based on [EOSIO](https://github.com/EOSIO) and operating on [Telos](https://telos.net)). That platform has well built treasury, accounting, and financial tools for small business. It has been used for over two years, including support for recurring, payroll-type proposals, multichain redemption processes, and much more. It uses a native USD-peg token paid to members for weekly salary, and the holder may redeem it for Bitcoin or ETH as they desire.

We also built [Hancock Sovereign Organizations](https://hancock.app/), which is a stack similar to Hypha that *"enables organizations and teams to operate with autonomy, freedom, and transparency."* You can find documentation on some of Hancock's features [here](https://hancock.app/docs/platform/introduction/).

Our direct experience, which has been hands-on and highly pragmatic, is what informs the utility and product-market fit for NBV.
### Interlay BTC
The only Bitcoin related project in the Polkadot/Substrate/Kusama landscape that I am familiar with is [Interlay](https://github.com/interlay/interbtc). It uses a peg token that is held in escrow. This is super useful for Defi applications of course. However, small businesses or DAOs that primarily desire to HODL Bitcoin in treasury are more comfortable with native Bitcoin. In the future, we may find synergies that combine functionalities of the same code base or chains.
## Team :busts_in_silhouette:
We are [Hashed](https://hashed.io), an open source blockchain development team. We currently have nine team members, seen below from our 2021 in-person summit. 

<p align="center">
  <img src="https://hashed.io/images/hashed-team-cancun.png" width="800"/>
</p>

### Project Team members
- Max Gravitt - Architect/Lead and Proposal Author
- Sebastian Montero - Blockchain Engineer
- Abel Yanez - Blockchain Engineer
- Alejandro Garcia - UI Developer
- Other team members as needed

Among the other Substrate experience, Max and Sebastian have also completed the [Substrate Runtime Developer Academy](https://www.industryconnect.org/substrate-runtime-developer-academy/).

### Contact
- **Contact Name:** Max Gravitt
- **Contact Email:** max@digitalscarcity.io
- **Website:** https://hashed.io, https://digitalscarcity.io, https://github.com/3yekn

### Legal Structure
- **Registered Address:** 30 N Gould St, Ste R, Sheridan, WY 82801
- **Registered Legal Entity:** Hashed Systems DAO LLC

### Team's Experience
We have significant experience developing and operating blockchain applications across the industry, including in the public domain, enterprise, and banking.
#### Prior Grant on Telos Network
In 2019, we were rewarded a grant to develop a federated profile system for Telos. You can find that proposal [here](https://docs.google.com/document/d/1Po6ZmHK_7Al2meL1XGXdDdPgRTfr5vx-D13a2lzN61E/edit) and the relevant repos are [Telos Account Creator Services](https://gitlab.com/telos-kitchen/telos-account-creator-services) and [People and Profiles Project](https://gitlab.com/telos-kitchen/ppp). 

In a nutshell, it supports free account setup after SMS verification, authentication to off-chain OAuth systems via blockchain signing, saving of profile data on/off chain, and secret, bi-directional masked communication over SMS and email. 

These tools have been operational continuously since release and have supported thousands of users. 
#### Node Operations
Max is enrolled in [Kusama Thousand Validators](https://thousand-validators.kusama.network/#/). The validator has been chilling for quite some time but is coming back online soon.

Max is the founder of [Telos Kitchen](https://telos.kitchen), currently the 6th most-voted-for team on the network. Telos is delegated proof of stake. Unlike Polkadot/Kusama, Telos prohibits payment of block rewards back to voters, ensuring it is based wholly on community contributions, node performance, and reputation. So, in essence, these votes are the community's attestation that we are a trustworthy and high performing team adding long term value to the networks we participate in.

#### Research publications
Max has co-authored a number of papers, including 
- [Blockchain for Organizing Effective Grassroots Actions on a Global Commons: Saving the Planet](https://doi.org/10.3389/fbloc.2020.00033) 
- [Open Platform Concept for Blockchain-Enabled Crowdsourcing of Technology Development and Supply Chains](https://doi.org/10.3389/fbloc.2020.586525).

### Team Code Repos
- **Hashed Systems** - https://github.com/hashed-io
- **Hypha DAO Platform** - https://github.com/hypha-dao
- **Peoples and Profiles Services** - https://gitlab.com/telos-kitchen/ppp
- **Private accounting data on public chains** - https://github.com/eosio-enterprise/chappe 

#### Most Relevant Profile Links
- **Max on Github** - https://github.com/3yekn
- **Max on LinkedIn** - https://www.linkedin.com/in/gravitt
- **Sebastian on Github** - https://github.com/sebastianmontero

### Published Blockchain Videos 
These videos were recorded by Max and feature projects that we developed. 
- Highly regarded [EOSIO Smart Contract Development Tutorial](https://youtu.be/J0SYv-GC3R0)
- [Login with Telos (via OAuth) explainer and demonstration](https://youtu.be/wKtyu_7G_bc)
- [Ethereum Smart Contracts](https://youtu.be/j3LZI3GQ9oc?t=13) tutorial from over 4 years ago :hourglass:
- [Hypha DAO Platform and CLI explainer](https://youtu.be/VvjpKCAVJ2w), which we developed
- Demonstration and explainer for [Private Accounting Transactions on a Public Blockchain](https://youtu.be/PTMG6E79fzQ)

-------------------------------------------
## Development Roadmap :nut_and_bolt:
### Overview
- **Total Estimated Duration:** 3 months
- **Full-Time Equivalent (FTE):**  2 FTE (across 4 developers)
- **Total Costs:** 43,200 USD

#### Languages
- All pallets and any associated backend services will be developed in Rust.
- Primary web app (`Vault Manager`) will likely be in Vuejs, but perhaps React.
- `Spectre Desktop` or `Caravan` customizations 
  - neither of these clients use a UI framework like Vuejs or React
  - our customizations will seek to be as non-disruptive as possible and hopefully remain forward compatible
  - `Spectre Desktop` has a python backend; if changes are required to that, they would be made in python.

### Milestone 1 — Prepare Dependencies and Build Vault Configuration
- **Estimated duration:** 6 weeks
- **FTE:**  2
- **Costs:** 21,600 USD
(project will have 4 developers contributing, blended rate of $50/hour)

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | MIT |
| 0b. | Documentation | We will provide both **inline documentation** of the code, an `mdBook` with an explanation of the mechanics of NBV, detailed explainers for all user-facing features. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Video | We will record and publish a video explainer and demonstration of all features in English and Spanish. |
| 1. | BDK Integration | Preferably, we will build a `no_std` version of BDK, and if not, we will create an off-chain worker for all pertinent functions |  
| 2. | Identity `xpub` | User can set an `xpub` on their Identity- larger than 32 bytes |  
| 3. | Output Descriptors | Generate output descriptor (vault/wallet) based on the selected Vault Signers |  
| 4. | Generate Receiving Addresses | NBV will be able to generate receiving addresses for a vault |  
| 5. | List and View vaults | NBV client will show a list of treasuries/vault, their labels, and the eligible signers |  
| 6. | Pass to Signer | Fork `Spectre Desktop` (or `Caravan`) and enable handing off an output descriptor from the pallet/node to the signer |  

The following Extrinsics or RPC calls, with relevant UI functions, will be included in milestone #1.

- **set_identity** - we may need to create a wrapper Extrinsic to appropriately fit the data into the `Identity` pallet
- **create_vault** - takes a set or `BoundedVec` of accounts as well as the signature `threshold`. (we may also have a `T::ClassId` to categorize vaults similar to the `Uniques` pallet. 🤔 )
- **propose** - this receives the `vault_id`, `recipient_address`, and `amount_in_sats`. This constructs an open unsigned transaction saved within the pallet (or saved and hashed in the pallet), which will be visible in the Vault Manager client and provides a link to the Signer app. This generates a `proposal_id`.
- **generate_new_address** - receives `vault_id`, reads the vault descriptor, calculates `last_used_address` to check for UTXO. If one exists, increment the `derivation_index` and return a new address based on that. If the last address is still empty, simply return that one again (this will likely also have a flag to force incrementing the index). This behavior is similar to many wallets work.

### Milestone 2 — Signing, Broadcasting and a Hosted Release
- **Estimated Duration:** 6 weeks
- **FTE:**  2
- **Costs:** 21,600 USD
(project will have 4 developers contributing, blended rate of $50/hour)

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | MIT |
| 0b. | Documentation | We will provide both **inline documentation** of the code, an `mdBook` with an explanation of the mechanics of NBV, detailed explainers for all user-facing features. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Video & Article | We will author an article, as well as record and publish an updated video explainer and demonstration of all features in English and Spanish. |
| 1. | PSBT Signing | Users will be able to sign transactions using our customized signer (`Spectre Desktop`) and save the output to the Substrate node. |  
| 2. | Transaction Broadcast | When the threshold of signatures has been reached, the node will broadcast the transaction to the Bitcoin network (via integrated Bitcoin core node) |  
| 4. | Hosted Instances | We will host a `testnet` and `mainnet` instance of the full solution (as a standalone Substrate chain) for no less than 2 years |  
| 5. | EZ-Try | The hosted instances will have `EZ-Try`, which is our method of ensuring any level user can easily go to the app with no prerequisites and try it. (e.g. auto-faucet, auto-generate `xpubs`) |  
| 6. | Support & Maintenance | We will provide user support and maintain compatibility with Substrate releases for no less than 2 years |  

The following Extrinsics or RPC calls, with relevant UI functions, will be included in milestone #2.

- **save_psbt** - receives `proposal_id` and the PSBT `payload`. Security here is not really important (only convenience). The intermediary PSBT files will be saved with the node but perhaps on IPFS and hashed on chain. They are all transient by nature and will be erased after they are broadcast or expired, the earlier of the two. PSBT wallets (such as Spectre Desktop/Caravan) typically require users to share the intermediate files through a side channel, like email or chat, so this will be a nice usability upgrade.
- **finalize_tx** - recieves the `proposal_id` - PSBTs require a finalization step before broadcast.
- **broadcast** - receives the `proposal_id` - this will broadcast the transaction to the in-built or configured Bitcoin Core node.
- **save_finalize_broadcast** - the `save_psbt` function will also accept an optional flag for convenience so that if the node detects that the threshold is met with the provided approval, then the node should finalize and broadcast it.
- **erase_vault** - receives `vault_id` - remove vault and any open proposals or PSBTs from storage
- **cancel_trx** - receives `proposal_id` - remove any records and PSBTs associated with the transaction

## Future Plans
### Immediate Use
We will immediately use the functionality for a number of DAOs, communities, and businesses that we work with and participate in. This is a critical feature that these teams desire before they are ready to migrate to the Polkadot ecosystem.
### Greater Context 
In the greater context, we are working towards a Substrate standalone chain and/or parachain/parathread to be used by small and medium-sized businesses. 

Over the last several years, we have established a leading presence in this area of blockchain. For example, last year, we were the first organization to ever tokenize real estate **directly** on chain in a manner where the token represents **FINAL** and **INSTANT** settlement of ownership. This was only possible in Wyoming after the [DAO LLC legislation](https://www.wyoleg.gov/2021/Introduced/SF0038.pdf) became effective in July 2021. In other words, a token holder can show their asset(s) to the Wyoming Supreme Court and they will protect their property rights. The LLC veil also sheilds DAO members from any personal liability. We attend the legislative sessions in person of the [Select Committee for Blockchain and Financial Innovation](https://www.wyoleg.gov/Committees/2022/S19) in Wyoming. 

For a detailed legal explanation and step-by-step review of how we achieved this, please see our [Digitalness Primer article](https://telos.kitchen/articles/digitalness-part-2/) and how [Kitchen Lands DAO LLC Buys 35 Acres in Wyoming](https://telos.kitchen/articles/digitalness-part-3/). In fact, the Chairperson of the Committee, Senator Chris Rothfuss, [tweeted](https://twitter.com/rothfuss/status/1502649720505741315?s=20&t=kKKGCs_isuqJaMI9Yr8AkA) in support of our efforts and legal interpretation.

This project has received much positive feedback and press, including this article from [The Information](https://hashed.systems/2022-01-kitchen-lands-the-information.pdf). 
### Other Small Business/Non-profits Tools
Along these lines, we have and are building several other critical modules for small businesses, including: 
- Double-entry Accounting, with support for Income Statements, Balance Sheets, etc. (This is hard and complex, but unlocks enormous TAM)
- Support for Payroll procedures
- Company governance requirements such as hiring and dividends
- Tools and reports for legal compliance **ONLY IF** user organizations require it. (We are NOT legal or compliance wonks by any stretch (nor do we want to be), but these features can be relatively low complexity and open the ecosystem to a lot of new users.)

### Feature Roadmap
- **_Coin control_** - this will add support for selecting which UTXO(s) should be used for a transaction proposal. For now, this will be decided programmatically.
- **_Taproot_** - with the infrastructure in place, there will be many interesting and useful features to support, such as taproot and time locks. However, the plan is to support simple sends with the initial release.
- **_Labeling_** - we may or may not support address and UTXO labeling in the initial release. It is a useful and important feature, but there are a few ways to achieve it and we don't want to get distracted with that yet.
- **_Smart Contract_** - this can also be developed in an *Ink!* smart contract, and we will likely pursue this in a future release. 
- **_Sweep Proposal_** - when the set of Vault Signers changes, usually with each election, the Bitcoin is typically transferred to a new multisig wallet. In our experience, only one or two Vault Signers change in a single election to maintain stability. In the future, NBV will generate an unsigned transaction proposal for this and populate it into the list of active proposals.
- **_Mobile Experience_** - particularly for viewing proposals and signing PSBTs
- [**_Multiparty Computation_**](https://inpher.io/technology/what-is-secure-multiparty-computation/) - we are reviewing the benefits and requirements to inform if/how we wish to support this 
- **_Privacy_** - privacy preserving features, perhaps using functionality from [Phala](https://phala.network)

## Additional Information :heavy_plus_sign:
**How did you hear about the Grants Program?** 
Web3 Foundation Website

Other relevant info:
- Max is an advisor on the Liberland project, building on Substrate, which I believe may also submit a grant request (not written by me).
- We have developed and deployed (albeit mostly prebuilt) a 5 node testnet to serve as a shell for this and related business features.
- We have significant experience with Bitcoin and some with the Bitcoin Dev Kit.
- Although we have no specific plans as of yet, as we grow our presence and migrate users to Substrate, we may evaluate pursuing a parachain or parathread slot for enhanced security.
- No other teams besides Hashed (us) have contributed financially or otherwise to this project.

## Q&A 
### Do you know of any similar projects on other blockchains?

There are tons and tons of examples of wrapped Bitcoin of course, with various forms of trust, custody, and/or light clients. As referenced above, there is also interlay/interbtc in the Dotsama ecosystem which seems to be trustless and supports insurance for lost Bitcoin.

In a few DAOs we built and participate in on Telos, there's an onchain badge for treasurers as they are elected/assigned, which helps, but certainly falls well short of delivering what NBV does.

Besides that, I have not come across any tools or products that offer this capability, and certainly not with the strength of user experience that non-technical users expect and we intend to build.

### Comparison to Remark pallet
>  What for example is the advantage of your solution compared to having a bitcoin multisig wallet which is controlled by a DAO and signing a remark on substrate that says this multisig account is controlled by the DAO? I guess you could do the same on bitcoin using OP_RETURN.

This would be possible. At a high level, any state trie and state transition function can be summarized to a hash to sign in a remark. As seen with the RMRK NFT project 👍, a lot of functionality can be driven through that capability. The benefit of using remark is that it is compatible with the relay chains.

The trade-offs, IMHO, are mostly around usability, composability, and designing idiomatically, which I find incredibly useful for re-usability by other developers (particularly in initial releases). As an example, the Identity pallet developer chose to store fields, including the registrars' judgments 🧑‍⚖️ , within the pallet rather than hashing them into a remark field. I tend to think of these as "first class" attributes because the architect decided they were worth the space and mind-share of being stored directly on chain. In a similar pattern, I think the xpubs 🔑 are important enough to persist this way also.

In the future, I expect there to be a quite complex many:many relationship between users, DAOs, and vaults. For example, within the Hypha DAO, there are team "circles" or quests (projects) that are allocated a budget to a vault. There may be many circles/quests per DAO. There may also be many DAOs and circles/quests for each user, and they will likely desire different xpubs in their profiles for these scenarios.

We can use the remark pallet, and it would be valuable 'back-end' for NBV that works on the relay chains. I think there are likely privacy preserving benefits to this as well. But the functionality and logic of generating the output descriptors dynamically along with receiving addresses, the user experience, vault handling, managing the user flow, etc, still needs to be developed.

My suggestion would be that we implement the most vanilla, idiomatic way first, and then add compatibility to relay chain/remark as a future step. OP_RETURN compatibility is interesting too. A caution with that is, in my experience, the more complex/obfuscated the persisted state, the harder it is (more tooling/logic) for more casual users to verify and adopt. But there is absolutely value in pursuing these. Let me know what you think, and we would be happy to pivot or add this to the proposal.

