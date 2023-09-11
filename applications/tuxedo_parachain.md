# Tuxedo Parachain

- **Team Name:** Off Narrative Labs 
- **Payment Address:** 0x5a335908df9D2C47304338E3b744579Ed7C6a64d (DAI)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 3 :chicken:

## Project Overview :page_facing_up:

Develop Parachain runtimes in the UTXO model. 

### Overview

In a [previous grant](https://github.com/w3f/Grants-Program/blob/master/applications/tuxedo.md) ([PR](https://github.com/w3f/Grants-Program/pull/1517)) we developed Tuxedo, a framework for writing Substrate runtimes in the UTXO model.

Currently, Tuxedo works well for standalone Substrate blockchains, but does not yet work as a Polkadot Parachain.
In this grant, we propose to implement the common infrastructure necessary for a UTXO runtime to fulfill the parachain side of the Polkadot protocol.

We further propose to collect benchmark data profiling Tuxedo in various contexts.

### Project Details

Tuxedo is analogous to FRAME in that they are both frameworks for writing Substrate runtimes.
They are also analogous in that they need additional code to serve as parachain runtimes.

The code that allows a FRAME to work as a parachain is a large part of cumulus.
Specifically, it is in the [Parachain System pallet](https://paritytech.github.io/cumulus/cumulus_pallet_parachain_system/index.html) and the [`generate_validate_block!` macro](https://paritytech.github.io/cumulus/src/cumulus_pallet_parachain_system_proc_macro/lib.rs.html#94-153).
The first two milestones are devoted to adapting and rewriting these two important pieces of code in a UTXO-native way.

This is the crux of the parachain support.

This work will be implemented in a crate called `tuxedo-parachain` in the existing [Tuxedo repository](https://github.com/Off-Narrative-Labs/Tuxedo).
Using the same repository allows runtime developers to easily discover the parachain support, and reference a single set of docs.
Using a separate crate provides a clean separation of concerns while also allowing standalone chain developers to avoid the high compile times associated with cumulus and polkadot.

Our intention is to use the existing cumulus collator client-side code nearly untouched.
This is the same approach we followed in the first grant where we used the existing Substrate node template client-side untouched.
The key observation is that Tuxedo is a runtime framework, and thus the existing clients should work out-of-the-box.

Importantly, this proposal does _not_ include full XCM support.
We estimate that to be a more complex topic, and one that does not need to block the initial goals of participating in Polkadot's shared security, and comparing performance data against existing runtime frameworks.

### Ecosystem Fit

Tuxedo is a framework for writing Substrate runtimes.
Substrate is the toolkit for building virtually all parachain nodes.
Tuxedo provides a richer set of options to runtime developers.
By extending Tuxedo to support Parachain runtimes, we increase the diversity and expressiveness of the Polkadot network's parachains, attracting developers who may have gone elsewhere if limited to the accounts model alone.

The primary users of Tuxedo will be parachain runtime developers who will use Tuxedo directly to structure their chain logic. Of course, the user base will trickle downstream as well to users of those parachains that choose to build with Tuxedo. However, chain users will use Tuxedo only indirectly.

There are no projects like this in the Substrate ecosystem, although they do exist in the broader blockchain space; Cardano being the most notable example.

While it fulfills a similar role, Tuxedo is not intended to compete with FRAME, but rather to compliment it, by welcoming projects that fit naturally with the utxo model into the Substrate ecosystem, as FRAME does for projects that fit the accounts model.

## Team :busts_in_silhouette:

### Team members

- Joshy Orndorff https://github.com/JoshOrndorff
- Off Narrative Labs https://github.com/Off-Narrative-Labs

### Contact

- **Contact Name:** Joshy Orndorff 
- **Contact Email:** joshyorndorff at proton dot me
- **Registered Address:** To be provided in the invoices

### Team's experience

Joshy entered the Substrate ecosystem in 2019 as part of the Substrate Developer Hub team. There he created and hosted the weekly Substrate Seminar, and contributed significantly to the Substrate Recipes. In 2020, he moved to the Moonbeam team where he was a core developer. While at Moonbeam, Joshy wrote the [Nimbus consensus engine](https://github.com/PureStake/nimbus/) which is used in several production parachains, and helped pioneer the technique whereby EVM contracts can interact with native Substrate pallets. In 2022, Joshy began contributing to the Polkadot Blockchain Academy, teaching in all three cohorts: Cambridge, Buenos Aires, and Berkeley.

Joshy met Andrew Burger in Cambridge in 2022 at the first Polkadot Blockchain Academy where Andrew, a student at the time, chose to implement a UTXO Runtime as his final project. Together they revised the UTXO assignment and taught it together at the next PBA. A few months later they worked together on the first Tuxedo grant.

Andrew will not be contributing to this grant directly (although he is still an enthusiastic open source contributor to Tuxedo) due to conflicting employment elsewhere.

### Team Code Repos

* Main Tuxedo Repo - https://github.com/Off-Narrative-Labs/Tuxedo
* Tuxedo Tutorial - https://github.com/Off-Narrative-Labs/Tuxedo-Order-Book-Dex-Tutorial/
* Nimbus Consensus (Prior Work) - https://github.com/moonbeam-foundation/nimbus
* Blockchain From Scratch (Educational) https://github.com/JoshOrndorff/blockchain-from-scratch

## Development Status :open_book:

As mentioned above, the team has done previous work on [Tuxedo](https://github.com/Off-Narrative-Labs/Tuxedo/tree/main).

As we mentioned in our previous grant our next tasks are parachain support (this grant's topic) and zero knowledge UTXOs.

Of course there are also some lingering leftovers in our issue queue mostly centered around the wallet.
We do at some point want to make the wallet more generalizable to be able to craft any generic transaction based on whichever tuxedo runtime is defined.

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 12 weeks
- **Full-Time Equivalent (FTE):**  1 FTE 
- **Total Costs:** $48,000 (USD)

### Milestone 1 — Rewrite Pallet Parachain System to UTXO model 

- **Estimated duration:** 6 weeks
- **FTE:**  1
- **Costs:** 24,000 USD

The bulk of the logic for handling communication with the relay chain lives in [pallet parachain system](https://paritytech.github.io/cumulus/cumulus_pallet_parachain_system/index.html), and consequently, this is the largest milestone in this grant proposal.

We will adapt logic for signaling and enacting runtime upgrades, and providing other [parachain output](https://paritytech.github.io/cumulus/cumulus_primitives_core/relay_chain/struct.CandidateCommitments.html)s.
We will "handle" incoming and outgoing XCM messages (reminder, full xcm support is out of scope, but we still need to report 0 outbound messages and stub the inbound handling logic to satisfy the protocol).
Most importantly, we will process the latest [validation data](https://paritytech.github.io/cumulus/cumulus_primitives_core/struct.PersistedValidationData.html) and make it available to Tuxedo pieces in a standard way.

Because this is already the largest chunk of work, I've chosen to make a milestone here.
Admitedly, there will not be a very sexy thing to "try out" at this stage because without the macro from the next milestone, there will not yet be a fully working parachain runtime.
Nonetheless, we will have a complete well documented test suite analogous to the one used for frame.

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a how the parachain system piece works within Tuxedo as compared to FRAME |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1.  | Tuxedo Parachain Crate | We will publish a crate on github containing all of the relevant reworked code including docs about how to execute the test suite. |

### Milestone 2 — Migration of `register_validate_block!` 

- **Estimated Duration:** 2 weeks
- **FTE:**  1
- **Costs:** 8,000 USD

The `register_validate_block!` macro is responsible for generating the `validate_block` entrypoint function in the runtime wasm. This is the main entrypoint in the runtime from the relay chain validators' perspective.

We will need to migrate the following to a Tuxedo compatible version

```rust
cumulus_pallet_parachain_system::register_validate_block! {
	Runtime = Runtime,
	BlockExecutor = cumulus_pallet_aura_ext::BlockExecutor::<Runtime, Executive>,
	CheckInherents = CheckInherents,
}
```

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains the difference between the FRAME based approach and the Tuxedo based approach to this macro |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile that can be used to test all the functionality delivered with this milestone. |
| 1.  | Tuxedo Parachain Template | If you crossed the standalone Tuxedo Template with the Cumulus Template. This is the main deliverable for the grant. A working template node for a Tuxedo-based parachain runtime and collator node. |


### Milestone 3 — Benchmarking 

- **Estimated Duration:** 4 weeks
- **FTE:**  1
- **Costs:** 16,000 USD

Benchmark common transaction types in standalone and parachain contexts.
Make good faith comparisons to analogous transaction types in FRAME.
We hope that the simplicity of the UTXO model will allow performance increases, but right now that is just a theory.

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can spin up the example node and transfer tokens |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile that can be used to test all the functionality delivered with this milestone. |
| 1.  | Benchmark Report | Full report of throughput for {Transfer, Remark} transactions in {FRAME, Tuxedo} runtimes operated in {Standalone, Parachain} contexts. |


## Future Plans

### Near Term

We have a vision for a Tuxedo parachain that acts as an Atomic Swap hub for DOT ecosystem assets to foreign UTXO chains like Monero, Zcash, Cardano, etc.

The [Farcaster](https://github.com/farcaster-project) provides a Monero Bitcoin atomic swap protocol.
We intend to extend this protocol to support Tuxedo chains.
And thanks to Polkadot's XCM, this would allow atomic swaps between other DOT ecosystem assets and foreign UTXO chains as well.


Following completion of this grant, the path to working Atomic Swaps would be roughly

1. Extend Farcaster to support swaps with Tuxedo.
2. XCM integration with Tuxedo for Cross-chain UTXOS.
3. Testing, auditing, etc.

### Medium Term

Other dreams we have for Tuxedo include:


* Zero-knowledge runtimes a-la zero-cash and zexe.
* UTXO-native Smart Contracts based on the pi-calculus.

## Additional Information :heavy_plus_sign:

As mentioned above, we have completed one previous grant on this topic:
* Application PR: https://github.com/w3f/Grants-Program/pull/1517
* Approved Application: https://github.com/w3f/Grants-Program/blob/master/applications/tuxedo.md
