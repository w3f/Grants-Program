# sc-simnode

- **Team Name:** Polytope Labs Ltd
- **Payment Address:** 0xC70ac55B07A070743555C5D12B263733eCae9f92 (Ethereum DAI)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

### Overview

![](https://drive.google.com/uc?id=1CrZ55Bleag3yZkSLjueSySEDUkr5gAm6)

From here on out we refer to sc-simnode as simply Simnode,
Simnode aids Parachain teams perform simulation tests over the live chain data, it is a full node with the exclusion of Substrate's signature checking mechanism via [`SignatureVerificationOverride`](https://github.com/polytope-labs/substrate-simnode/blob/e67d84d641d6d117ad6c93b9b48db83195304dc4/src/host_functions.rs#L47) and full control over block production using [`ManualSeal`](https://github.com/paritytech/substrate/pull/4143).

Parachains on Polkadot and Kusama will be able to definitively tell the long and short-term effects of runtime upgrades, migrations and any other changes made, before giving a green light on a major change on-chain either to a Parachain or a standalone Substrate based blockchain. Teams already integrating Simnode in the development pipeline include [Composable](https://github.com/ComposableFi/centauri/blob/master/utils/simnode/src/lib.rs).

### Project Details

#### Technology Stack
- Rust
- Substrate
#### Components

***Traits***

`SimnodeCli` - Cli Extension trait.

`ChainInfo` - Wrapper trait for concrete type required by this testing framework.

`NativeExecutionDispatch` - For Dispatching calls to the runtime and extending the host functions.

#### Setup & Commands
To run Simnode with a parachain runtime;

1. Create a new binary within your project environment(i.e `cargo new simnode-parachain-template`).
   
2. Import the Parachain runtime that needs to be tested.
   
3. Implement the traits described above.
   
4. Call [parachain_node](https://github.com/polytope-labs/sc-simnode/blob/fcfa2dee4ebdd4652375ec9c4b3eba2a63c2d28f/src/client.rs#L373) function within the created binary. 
 
Similarly call [standalone_node](https://github.com/polytope-labs/sc-simnode/blob/fcfa2dee4ebdd4652375ec9c4b3eba2a63c2d28f/src/client.rs#L272) to run Simnode with a standalone runtime.

```bash
# build
cargo build --release -p simnode-parachain-template
# run like so
./target/release/simnode-parachain-template --chain=name # pass all the args you would normally pass to the collator
```

#### Purpose

Simnode spawns a single node testing environment and not a network environment.

#### Architecture
![Simnode Architectural Overview](https://drive.google.com/uc?id=1xEG1oahxWuWhiR3LDUwpZVG42vwIA3Oc)

Simnode comprises of all the components of a Substrate full node with the inclusion of;

**SignatureVerificationOverride** - Overriding Substrate's signature verification mechanism by default.

**ManualSeal** - For manually sealing blocks, swapped in for the block authoring mechanism such as Babe/Aura.

### Ecosystem Fit

#### Related Projects

[Chopsticks](https://medium.com/acalanetwork/acala-engineers-deliver-open-source-chopsticks-client-to-improve-testing-in-polkadot-ecosystem-170cf1e30c6c) is a fairly similar project that has been tested for the Acala runtime while Simnode works for any Substrate based runtime.

## Team :busts_in_silhouette:

### Team members

- Seun Lanlege, David Salami
- Damilare Akinlose, Femi Bankole, Jesse Chejieh

### Contact

- **Contact Name:** Jesse Chejieh
- **Contact Email:** jesse@polytope.technology
- **Website:** [research.polytope.technology](https://research.polytope.technology/)

### Legal Structure
- **Registered Address:** Harneys Fiduciary (Cayman) Limited, 4th Floor, Harbour Place, 103 South Church Street, Cayman Islands
- **Registered Legal Entity:** Polytope Labs Ltd.

### Team's experience

Polytope Labs is a collective of core blockchain engineers, researchers & scientists from varying blockchain protocol backgrounds passionate about the proliferation of networks over platforms and enabling this future through blockchain research & education, tooling and core infrastructure development. We have members actively contributing to the code utilized by the Polkadot ecosystem( [Seun Lanlege](https://github.com/polkadot-fellows/seeding/pull/33), [David Salami](https://github.com/polkadot-fellows/seeding/pull/38), [Damilare Akinlose](https://github.com/polkadot-fellows/seeding/pull/41), [Jesse Chejieh](https://github.com/polkadot-fellows/seeding/pull/25)). 


### Team Code Repos

- [Simnode](https://github.com/polytope-labs/sc-simnode)
- [Prisma Client](https://github.com/polytope-labs/prisma-client-rs)
- [Solidity Merkle Trees](https://github.com/polytope-labs/solidity-merkle-trees)

### Team GitHub Profiles

- [Seun Lanlege](https://github.com/seunlanlege/)
- [David Salami](https://github.com/Wizdave97/)
- [Damilare Akinlose](https://github.com/dharjeezy/)
- [Femi Bankole](https://github.com/iTranscend/)
- [Jesse Chejieh](https://github.com/Doordashcon/)

### Team LinkedIn Profiles

- [Seun Lanlege](https://www.linkedin.com/in/seunlanlege/)
- [David Salami](https://www.linkedin.com/in/david-salami-188aa8170)
- [Damilare Akinlose](https://www.linkedin.com/in/damilare-akinlose-6289b5b8)
- [Femi Bankole](https://www.linkedin.com/in/femibankole)
- [Jesse Chejieh](https://www.linkedin.com/in/jesse-chejieh-47020322a)


## Development Status :open_book:
Originally developed by Seun Lanlege as [Manual Seal](https://www.youtube.com/watch?v=uhkV0jAcWDY) for stand alone runtimes from his time at Parity as requested internally by core developers and now with the added functionality of testing all Substrate based runtimes currently maintained by interns at Polytope Labs.

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 4 Months
- **Full-Time Equivalent (FTE):**  1
- **Total Costs:** 30,000 USD

### Milestone 1 — Development(Retroactive)

- **Costs:** 15,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | We will provide both inline documentation of the Rust code and a basic tutorial that explains how a user can integrate Simnode to a Substrate based runtime using README. |
| **0c.** | Testing and Testing Guide | Integration test with an existing runtime that encompasses the usage of Simnode APIs. In the guide, we will describe how to test Substrate based runtimes using Simnode. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1 | Development | [Simnode](https://github.com/polytope-labs/substrate-simnode) is operational and was featured on [Substrate Seminar](https://www.youtube.com/watch?v=0FvcABti7yk) providing a walk-through on integration into the development pipeline|

### Milestone 2 — Documentation & Video Tutorials

- **Estimated duration:** 1 month
- **FTE:**  1
- **Costs:** 5,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | We will provide explicit scenarios with boiler plate code written in Rust where Simnode is currently applicable, which includes runtime migrations, runtime upgrades & business logic simulations(pallet interactions, smart contract calls) and will be available via [git book](https://www.gitbook.com/). |
| **0c.** | Testing and Testing Guide | Integration test with an existing runtime that encompasses the usage of Simnode APIs. In the guide, we will describe how to test Substrate based runtimes using Simnode. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1 | Video Tutorials | We will provide video tutorials on [Youtube Channel](https://www.youtube.com/@polytopelabs) for the more visual learners going through both integration and usage scenarios. |

### Milestone 3 — Maintenance

- **Estimated Duration:** 3 months
- **FTE:**  1
- **Costs:** 10,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | If required, updates to both inline documentation of the Rust code and the basic tutorial that explains how a user can integrate Simnode to a Substrate based runtime using README . |
| **0c.** | Testing and Testing Guide | If required, an updated integration test with an existing runtime that encompasses the usage of Simnode APIs and a guide describing how to test Substrate based runtimes using Simnode. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e | Article | We will publish an article that explains what was done/achieved as part of the grant.|
| 1 | Maintenance | This includes but not limited to Substrate version upgrades, bug fixes and code optimizations.|

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation Website
