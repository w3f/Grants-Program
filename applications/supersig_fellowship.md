# Supersig

> This document will be part of the terms and conditions of your agreement and therefore needs to contain all the required information about the project. Don't remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with a `>` (such as this one) can be removed.
>
> See the [Grants Program Process](https://github.com/w3f/Grants-Program/#pencil-process) on how to submit a proposal.

- **Team Name:** Decentration
- **Payment Address:** (BTC)37hhQbMnXTrEgFnQUA9xJEeQMW7DuGvxuz
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

> ⚠️ *The combination of your GitHub account submitting the application and the payment address above will be your unique identifier during the program. Please keep them safe.*

## Project Overview :page_facing_up:

"A Supersig is a Multisig with superpowers"

A new pallet, RPC and UI that enables organisations to benefit from much more flexibility than multisig, where users can add and remove members, as well as optionally add "Master" users that have more power than "Standard" users. see our prior grant phase completion [blog post](https://decentration.medium.com/decentration-completes-supersig-w3f-funded-grant-5e788f858ca8)

This is Decentration's second grant proposal for Web3. Our ethos is to build, simple user friendly products that many would be used by many. Our aim is to see Supersig be used across many chains and communities, rather than used by just one small community in the ecosystem. This second grant core aim is to make changes that enables supersig to go into the Statemine parachain. In order to do this some refactoring needs to take place both in the pallet and in the frontend. This has been based on feedback from two key product owners, Joe from Statemint/mine, and Jaco from polkadot-js. 

To avoid private gatekeeping, the PR into Statemine would require approval from Fellowship members. Therefore we need to make a few changes that will have it in the best state so it is approved, as well as be prepared for any further feedback provided to make any other changes. 

Our frontend app needs some changes in order for Jaco to accept it into the official apps repo after it has been PR'd into Statemine. As well as this we want to build a separate (non polkadot-js) custom user interface. 

### Overview

- a *supersig* is like a *multisig* but with superpowers.
- we want to continue to change and improve to be to a system chain standard.
- make changes to pallet of supersig based on feedback from statemine product owner. 
- make changes to UI based on feedback from polkadot-js apps product owner. 
- You can try out the first version here, see our test [chain](https://apps.decentration.org/?rpc=wss%3A%2F%2Fsoupcan1.jelliedowl.com#/supersig/dashboard) 


### Project Details


- An overview of the technology stack to be used: Substrate, Rust, React/Typescript.
  - - PoC/MVP or other relevant prior work or research on the topic. Decentration has:
    - delivered [Supersig v1](https://github.com/kabocha-network/pallet_supersig). 
    - launched [Kabocha crowdloan](https://github.com/kabocha-network/parachain/)
     - developed pallet_mint: where funding proposals that are approved mint new coins, instead of from a treasury. <https://github.com/kabocha-network/parachain/pull/6>
  
- What your project is *not* or will *not* provide or implement
  - In this grant proposal we are focussing on making iterations to the minimimal viable version of the pallet to make it less prone to bloat due to unbounded call data in the storage, we won't be creating a new pallet. 
  

### Ecosystem Fit

Help us locate your project in the Polkadot/Substrate/Kusama landscape and what problems it tries to solve by answering each of these questions:

- *Where and how does your project fit into the ecosystem?* The aim is for it to be part of system chains on kusama and thereafter polkadot's Statemint. We want to maximise for ubiquitous use, and we believe this is the most effective route to get there. 
- *Who is your target audience?*
  - Multsig users of Substrate chains, who desire more flexibility and create scalable organisations.
- *What need(s) does your project meet?* It helps users of Substrate chains improve the fund management of the teams and projects that get funded by the community treasury.
- Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?
  - pallet_collective is very similar, but as there are only a limited number of instances available, and such instances needed a general on-chain upgrade to instantiate, it is not useful for our needs.  
  - pure proxy in the proxy_pallet has similarities in how addresses are created on-chain. 

## Team :busts_in_silhouette:

### Team members

- *Name of team leader:* Ramsey Ajram
- *Names of team members:* Tsubasa Mori, Nathan Gardet Derc

### Contact

- **Contact Name:** Ramsey Ajram
- **Contact Email:** ramsey@decentration.org
- **Website:** <https://decentration.org>

### Legal Structure

- **Registered Address:** Digital Trust Company
- **Registered Legal Entity:** Decentration Trust Company (470-2018-233-GB-001)

### Team's experience

Ramsey (decentration) - Substrate Engineer, Product manager, startup technical founder. Launched [Kabocha](https://kabocha.network) parachain, chain development and launch; team lead product owner of Supersig. Alumni of Polkadot Blockchain Academy 
Here is a recent contribution from Ramsey in a [Substrate Seminar](https://www.youtube.com/watch?v=IiAkJAfZsug&t=2299s)

Nathan Gardet-Derc (erudyx) - Substrate / Rust Engineer, contributor to Kabocha, Rusty Crewmate. developer on [pallet_supersig](https://github.com/kabocha-network/pallet_supersig). Alumni of Polkadot Blockchain Academy

Tsubasa Mori (KingdomParadise) - Full stack developer - Javascript / Typescript / React / Rust / Node.js / Next.js 


### Team Code Repos

- <https://github.com/decentration/apps/tree/supersig-v1.0.0>
- <https://github.com/kabocha-network/pallet_supersig>

Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine.

- <https://github.com/decentration>
- <https://github.com/KingdomParadise>
- <https://github.com/gdnathan>

### Team LinkedIn Profiles (if available)

## Development Status :open_book:

pallet started here:
<https://github.com/kabocha-network/pallet_supersig/tree/polkadot-v0.9.37>

*Supersig is functional, accessible and usable for developers to integrate and for their end users. 

## Development Roadmap :nut_and_bolt:

This section should break the development roadmap down into milestones and deliverables. To assist you in defining it, we have created a document with examples for some grant categories [here](../docs/grant_guidelines_per_category.md). Since these will be part of the agreement, it helps to describe *the functionality we should expect in as much detail as possible*, plus how we can verify and test that functionality. Whenever milestones are delivered, we refer to this document to ensure that everything has been delivered as expected.

Below we provide an **example roadmap**. In the descriptions, it should be clear how your project is related to Substrate, Kusama or Polkadot. We *recommend* that teams structure their roadmap as 1 milestone ≈ 1 month.

For each milestone,

**Milestone 1** To make changes to `pallet_supersig` and `apps frontend` so that it is up to scratch with system chain level use, accepted by polkadot-js apps, and prepared for Fellowship review. 

- The pallet will be refactored based on feedback from Joe Petrowski, product owner of Statemine, after he is satisfied withe changes we will make the case to the Polkadot Fellowship. 
- Based on feedback from Jaco, product owner of polkadot-js, changes need to be made so that supersig-app is accepted officially into the repo and if it is accepted into Statemine. 
- The pallet will be tested on the Pop-Art, community run relay test network
- The pallet will be well benchmarked.
- The pallet will aim to be on Statemine parachain on kusama. 
- Unit integration tests
- Easy to spin up node to test pallet
- Clearly written as Readme and inline documentation

Details for pallet: 

We will likely be making a limit on call data size and a cap on the number of "live proposals" there can be per chain. 

### Limit Call Data Size

1. Limit call data size: Introduce a maximum call data size limit in the configuration trait. This limit can be set to a reasonable default value, which can be changed as required. Users will be prevented from submitting call data exceeding this limit:

```rust
#[pallet::config]
pub trait Config: frame_system::Config {
    // ...
    /// The maximum size of call data allowed (in bytes).
    #[pallet::constant]
    type MaxCallDataSize: Get<u32>;
    // ...
}
```

2. Check call data size: Before storing the call data in create, approve, and other relevant functions, ensure that its size is within the specified limit.

```rust
// In the `create` function
ensure!(
    call_data.len() <= T::MaxCallDataSize::get() as usize,
    Error::<T>::CallDataTooLarge
);

// Similarly, add checks in the `approve` and other relevant functions.

```

3. Add a new error variant for oversized call data:

```rust
#[pallet::error]
pub enum Error<T> {
    // ...
    /// The call data size exceeds the maximum allowed limit.
    CallDataTooLarge,
    // ...
}
```

### Limit Number of Live Proposals

1. Add the LiveProposalMaximum associated type to the pallet's Config trait:

```rust
pub trait Config: frame_system::Config {
    // ...
    type LiveProposalMaximum: Get<u32>;
    // ...
}
```

2. Add a storage item to track the number of active proposals for each Supersig account:

```rust 
#[pallet::storage]
#[pallet::getter(fn active_proposals)]
pub type ActiveProposals<T: Config> = StorageMap<_, Twox64Concat, SupersigId, u32, ValueQuery>;
```

3. Modify the submit_call extrinsic to check the number of active proposals before allowing a new one:

```rust
#[pallet::weight(T::WeightInfo::submit_call())]
pub fn submit_call(origin: OriginFor<T>, supersig_id: SupersigId, call_data: Vec<u8>) -> DispatchResultWithPostInfo {
    let who = ensure_signed(origin)?;
    // ...

    let current_active_proposals = Self::active_proposals(supersig_id);
    ensure!(current_active_proposals < T::LiveProposalMaximum::get(), Error::<T>::TooManyActiveProposals);

    // ...
}
```

4. Increment the number of active proposals for the Supersig account when a new proposal is submitted:

```rust
ActiveProposals::<T>::mutate(supersig_id, |active_proposals| *active_proposals += 1);
```

5. Add an error variant for the case when there are too many active proposals:

```rust
#[pallet::error]
pub enum Error<T> {
    // ...
    TooManyActiveProposals,
}
```

6. Decrement the number of active proposals when a proposal is approved or rejected. You can do this in the approve and reject extrinsics:

```rust
ActiveProposals::<T>::mutate(supersig_id, |active_proposals| *active_proposals = active_proposals.saturating_sub(1));
```

As a non binding idea to test, we shall also be exploring the idea of enabling off-chain signing, though this will require a lot of refactoring:

### Enable off-chain signing (optional work)

To incorporate off-chain signing in the supersig pallet while maintaining the same features such as adding and removing members, we would need to do the following:

1. Create a CallHash type alias to represent the hash of the call data:

```rust
pub type CallHash<T> = <T as frame_system::Config>::Hash;
```

2. Change the CallData storage item to use the CallHash instead of the actual call data:

```rust 
#[pallet::storage]
#[pallet::getter(fn call_data)]
pub type CallData<T: Config> = StorageMap<_, Twox64Concat, SupersigId, CallHash<T>, OptionQuery>;
```

3. Modify the create and approve functions to accept a call_hash parameter instead of the call data:

```rust
pub fn create(origin: OriginFor<T>, call_hash: CallHash<T>, ...);
pub fn approve(origin: OriginFor<T>, call_hash: CallHash<T>, ...);
```

4. In the create and approve functions, calculate the call hash and ensure it matches the provided call_hash parameter:

```rust
// In the `create` function
let actual_call_hash = T::Hashing::hash_of(&call_data);
ensure!(
    actual_call_hash == call_hash,
    Error::<T>::InvalidCallHash
);
// as well add the check in the `approve` function.
```

5. Add a new error variant for mismatched call hashes:
```rust
#[pallet::error]
pub enum Error<T> {
    // ...
    /// The provided call hash does not match the actual call hash.
    InvalidCallHash,
    // ...
}
```

6. Update the extrinsics and RPCs to work with call hashes instead of call data.

# Refactor Page-Supersig UI for polkadot js fork

- A lot of functions need to be transformed into the hooks that polkadot js apps use as a standard.
- Very strict linting and standards, currently sitting at 300 errors. 

**Milestone 2** Custom UI foundation MVP, and act on feedback from Fellowship. 

- Build a custom interface where the user interacts with their organisation created with supersig. The interface will initially support Statemine, Kabocha, and Soupcan (testnet).
The interface will leverage all the features [here](https://trello.com/1/cards/64197a7bcc843f46bfb0ab2b/attachments/64198bf574e7348c470997bb/download/Screenshot_2023-03-21_at_10.46.20.png), but in a cleaner and bespoke user interface like [this simple mockup](https://trello.com/c/fUTXOuo3/619-create-supersig-ui-for-m2-2). 
- Custom UI will be simpler and more bespoke to organising, initially around supersig. It will begin with similar features to page-supersig on polkadot-js app, however it will be the foundation for then future building blocks, such as: multisig interface, automated payments, and other statemine/mint primitives, XCM apps, etc. We can prioritise on what those will be based on feedback, and in future milestone. With our own interface we have the freedom to create something different and specific to a core set of interrelated tools, rather than abide by polkadot-js which is designed to encompass basically everything.
- Make improvements so that Fellowship member feedback is satisfied (if any).



> :zap: If any of your deliverables is based on somebody else's work, make sure you work and publish *under the terms of the license* of the respective project and that you **highlight this fact in your milestone documentation** and in the source code if applicable! **Teams that submit others' work without attributing it will be immediately terminated.**

### Overview

- **Total Estimated Duration:** 7 to 11 weeks
- **Full-Time Equivalent (FTE):**  2
- **Total Costs:** USD 18,000

### Milestone 1 — pallet_supersig MVP

- **Estimated duration:** 4 to 5 weeks
- **FTE:**  2
- **Costs:** 11,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0  |
| 0b. | Documentation | We will provide inline documentation of the supersig pallet's code, and a basic tutorial that explains how a user can spin up one of our Substrate nodes and send test transactions, which will show how the supersig functionality works. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Article | We will publish an article that explains supersig pallet to developers on a blog post; and a substrate workshop/seminar that explains that shows how the pallet was designed (if there available slot, else a video shared on loom/youtube).
| 1. | Substrate module: pallet_supersig | We will refactor the pallet so that it does not store unbounded call data.  |  
| 2. | Supersig-app: polkadot-js-ui  | We need to make various changes and use a lot of polkadot js hooks in order Jaco to accept the PR: refactoring converting a lot of hooks to be the native polkadot-rs hooks rather than our own hooks; linting; changing augment-types; linting, and 300 errors when building for the polkadot-js PR.  |  
| 3. | Benchmarking | The pallet will be benchmarked and unit tested using worst case weightings. |

### Milestone 2 — Supersig UI and feedback from Fellowship

- **Estimated duration:** 3 to 6 weeks
- **FTE:**  2
- **Costs:** 7,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide inline documentation and a tutorial with a polkadot-js apps fork that guides a developer to simply set up supersig pallet and UI. |
| 0c. | Testing messages | Core functions will be fully covered by e2e testing guide and informative error messages. |
| 0d. | Docker | We will provide a Dockerfile that can be used to test all the functionality delivered with milestone 2. The dockerfile will be a polkadot JS UI fork, it will also be the smallest possible file size (MBs not GBs) |
| 0e. | Article | We will publish an article that explains supersig pallet to the end-user. The article will be on medium and subsocial.
| 1. | React/Typecript: Supersig UI | We will build a custom user interface so that users can interact with supersig.   |  
| 2. | Substrate chain | We will create a custom substrate template that will contain pallet supersig |  
| 3. | Polkadot JS Apps UI Fork | We will add the custom feature to a polkadot JS UI fork (and make a PR to the main repo), so that the user can see the pallet in action, end to end. |  


## Future Plans

- After success with supersig being a system level chain, maintain it, and work on future versions, as well as XCM accesibility. 
  
## Additional Information :heavy_plus_sign:

*Who can vouch for Ramsey(Decentration)?* Josh Muir (Kusama Council and Dat Dot), Dan Shields, Will Chevdor, Sacha Lanski...
