# Standard Protocol


## Project Overview :page_facing_up: 

### Overview

Standard Protocol is a collaterized algorithmic stablecoin protocol for synthetic assets.

### Problems of current algorithmic stablecoins

#### 1. Too much focus on price stability, no sustainable use case for interoperability
Current algorithmic stablecoins focus only on automated price stability. Although they provide some interoperability between tokens with initial distribution in yield farming, but currently there is no sustainable way for them to interoperate with financial activities without the reward. Also, other algorithmic stablecoins which uses incentives in cases regarding circulating supply(e.g. contractionary, expansionary cases) are not showing sustainability to preserve 1 dollar peg.

#### 2. Oracles are centralized, and there is no decentralized ecosystem to reward them 
One can be dependant to dexes, but they are prone to flash loans, making arbitrage data compared to centralized exchange. In order to provide aggregated and balanced data, oracle providers must be rewarded.  

#### 3. Auctions are hard to track and centralized 
Auctions after liquidation are hard to track and participate, leaving only hardcore traders to take advantage of arbitrage. More decentralized way to provide liquidation must be considered. Auction orders come in high volume of collateral, and this can lead to plutocracy.

### Solutions

#### 1. Elastic supply

As Amplforth(AMPL) used elastic supply to rebase its total supply of stablecoin, Standard rebases its stablecoin supply in each era, and it uses overcollaterization to mint its stablecoin, meter(MTR).

#### 2. Decentralized oracles

Oracle client from various sources  (e.g. binance, coinbase, hydra dx, etc) can provide aggregated price information so that the price cannot be manipulated from one source.

#### 3. Democratization of auction via automated market maker

Instead of hosting an auction for liquidating collaterals, Standard protocol deposits liquidated collateral to its amm pair so that meter(MTR) holders can purchase other digital assets from liquidation.

### Documentation

[https://docs.standardprotocol.org](https://docs.standardprotocol.org)

### Core Runtime Modules

#### token regisrty `/token`

Token manages asset that flows in and out with xcmp in polkadot ecosystem. assets are managed with unique identifier. 

#### oracle reward module `/oracle`

Oracles in standard protocol are rewarded in each era on each block reward.
prices are stored in the state, and oracle providers are updated in each era.

#### market module `/market`

Market module in standard protocol manages pair for automated market maker(AMM) between collateral and its stablecoin meter(MTR).

#### vault module `/vault`

Vault module in standard protocol is a collateral debt position engine where 

### Ecosystem Fit 

Standard protocol will act as the catalyst for other parachain's financial activities for enabling leverage trading and Arbitrage in AMM created from liquidation. It will also open a protocol for synthetic asset market with decentralized oracle ecosystem.

## Team :busts_in_silhouette:

### Team members

Hyungsuk Kang, team leader

### Legal Structure
Standard protocol is being made with Apache 2.0 license. Legal entity is being built in Singapore right now.

### Team's experience
Hyungsuk is Plasm network's core developer. He developed Subswap, AMM in substrate, and he wants to extend it to make the next finance in Polkadot ecosytem using XCM module and collateral debt position. He is also kernel and tendermint fellow. 

### Team Code Repos
* https://github.com/digitalnativeinc/standard-substrate


### Team LinkedIn Profiles
* https://www.linkedin.com/in/hyungsukkang

## Development Roadmap :nut_and_bolt: 

### Overview

As a synthetic asset protocol,Standard protocol heavily depends on the oracle for maintaining the system. Oracles should be formed in a sustainable way to be motivated for people to provide computing power.
To reward the network participant, Standard protocol proposes new PoS reward system by splitting block rewards from block validators to oracle providers.

* **Total Estimated Duration:** 2 months
* **Full-time equivalent (FTE):**  1
* **Total Costs:** 1000DAI
* **Payment Address:** `0xd2234E506862991ADA75f930c6D79B4236e3E265`
* **Status:** [Terminated](https://github.com/w3f/Grants-Program/pull/244#issuecomment-1014764739)

### Milestone 1 - Middleware for data submission and runtime integration
* **Estimated Duration:** 1 month
* **FTE:**  1
* **Costs:** 500DAI

This milestone focuses on building a oracle provider client middleware which submits off-chain data to the blockchain. An authoritive module for testing connection between oracle provider and the protocol is provided in this phase. Then, Standard will extend the oracle module to distribute reward from session callback connected between `pallet_session` and `pallet_staking`. When oracle provider submits outliers or does not submit values that are out of sync from other oracle providers, a slash can be applied from anyone to report. Outliers are detected with [IQR method](https://online.stat.psu.edu/stat200/lesson/3/3.2).

### Oracle provider client

As chainlink and other oracle solution has a middleware or submitting client from off-chain, Standard also has its oracle client. Oracle provider client is actually a bot that uses [polkadot-js api](https://github.com/scs/substrate-api-client/blob/master/tutorials/api-client-tutorial/src/main.rs) to submit information in oracle module in a certain periods(e.g. 2 hour, 4 hour). For example, to send an oracle xt from an oracle client, 

```javascript=
// Loads config
import LumenConfig from "@digitalnative/lumen-config";
// Fetch functions for acquiring off-chain data
import fetchData from "@digitalnative/lumen-fetch";
// Submit function for submitting data to on-chain
import submitData from "@digitalnative/lumen-submit";
// Async Apis for polkadot
import { ApiPromise, WsProvider } from "@polkadot/api";

const runClient = async (dir) => {
  const cron = require("node-cron");
  const config = LumenConfig.default({ dir });
  const { events } = config;
  events.emit("client:start");
  const api = await polkadotApi(config);
  // register cron job to execute in every minute
  cron.schedule("*/90 * * * * *", async function() {
    events.emit("client:next");
    // fetch data
    const data = await fetchData(false, config);
    // Submit data
    await submitData(data, config, api);
  });
  // Declare cron job has been set
  events.emit("client:init");
};

export default runClient;

async function polkadotApi(config: LumenConfig) {
  const provider = new WsProvider(config.rpc);
  const definitions = require("@digitalnative/type-definitions/opportunity");
  let types = definitions.types[0].types;
  const api = await new ApiPromise({
    provider,
    types,
  });
  await api.isReady;
  return api;
}
```

Here is the overall workflow for the client operation, and add-ons and options are expected to be added in each function in the library.

## Unit tests

Standard protocol applies test driven development(TDD) on building runtime modules for the grant. 
Here are unit tests that will be done along the development in the runtime module.

## Oracle

oracle in milestone 1 should achieve:
- Only Root account can register oracle providers for slots to submit off-chain data
- If slots are not open for an entity in the storage, a new oracle provider initializes the slot with the oracle provider count.
- When the provider is designated for a slot, it can only submit data for a designated slot
- If one reports slashing for the slot, runtime validates the slot data with iqr rule and remove provider and set the value as zero if the value violates it. 
- zero values are excluded and the median is calculated in both even and odd cases

To check this, oracle provider module should have these test functions:
- `add_oracle_provider_works`: Oracle should be added by the root account for now until the module includes session callback between `pallet-staking` and `pallet-session` as a impl of `SessionManager`.  
- `oracle_report_works`: Oracle provider should only be able to submit data only in designated slot, and create new batch if the price data has not been reported yet. 
- `oracle_slash_works`: when one reports slashing for oracle provider in a slot, the runtime should run iqr rule to find out whether the slot value violates the rule from the collected oracle data batch. 
- `oracle_excludes_zeros_and_return_median`: Oracle runtime should exclude zero-values since it means the data is empty or not available due to violation. median should be returned from the remainder of filtered batch.
- `oracle_excludes_zeros_and_return_median_even`: the purpose is also same with the previous test function, but the batch length is even.




| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0|
| 0b. | Documentation | Documentation will introduce how to install the oracle and participate to get block reward | 
| 1. | Oracle client | Oracle client to receive information from external sources then submit information regularly to substrate runtime |
| 2. | Modified Oracle module | Oracle module to register operators and batch |
| 3. | Unit test codes | Unit test codes in `tests.rs` in each runtime module |
| 4. | Npm binary | We will provide a npm binary for oracle providers to install and run an oracle client |
| 5. | Dockerfile | Dockerfile for running Standard protocol binary will be provided |

### Milestone 2 - PoS oracle reward distribution  
* **Estimated Duration:** 1 month
* **FTE:**  1
* **Costs:** 500DAI

This milestone focuses on including session callbacks related to sessions in implementations of `SessionManager` trait in `pallet-staking` module, and all related module will be tested with its separate implementation of `SessionManager` connected to `pallet-session` in a mock environment. 

## Vault 

Vault in milestone 2 should have a trait for dependency Injection:

```rust=
pub trait RebaseCallback {
    fn rebase(); // where it initiates rebase in the session
}
```

The dependency injection will take place in the `pallet-staking`'s config as well as the oracle

```rust=
impl pallet_custom_staking::Config for Runtime{
    ...
    type Rebase = RebaseCallback; // for vault rebase
    type Oracle = OracleCallback; // for oracle callback used as same as staking callbacks
}
```

where the it will be included in `pallet-staking` module's `SessionManager` trait implementation in `end_session` function like:

```rust=
/// In this implementation `new_session(session)` must be called before `end_session(session-1)`
/// i.e. the new session must be planned before the ending of the previous session.
///
/// Once the first new_session is planned, all session must start and then end in order, though
/// some session can lag in between the newest session planned and the latest session started.
impl<T: Config> pallet_session::SessionManager<T::AccountId> for Module<T> {
	fn new_session(new_index: SessionIndex) -> Option<Vec<T::AccountId>> {
		frame_support::debug::native::trace!(
			target: LOG_TARGET,
			"[{}] planning new_session({})",
			<frame_system::Module<T>>::block_number(),
			new_index
		);
		Self::new_session(new_index)
	}
	fn start_session(start_index: SessionIndex) {
		frame_support::debug::native::trace!(
			target: LOG_TARGET,
			"[{}] starting start_session({})",
			<frame_system::Module<T>>::block_number(),
			start_index
		);
		Self::start_session(start_index)
	}
	fn end_session(end_index: SessionIndex) {
		frame_support::debug::native::trace!(
			target: LOG_TARGET,
			"[{}] ending end_session({}) with rebase",
			<frame_system::Module<T>>::block_number(),
			end_index
		);
                T::Rebase::rebase();
		Self::end_session(end_index)
	}
}
```


vault in milestone 2 should achieve:
- In each era, vault module should bring registered stablecoin price from oracle module with its asset id (1) and rebase its total supply to `(circulating supply) / (oracle price)` in order to satisfy the ratio `(circulating supply) : (oracle price) = (total supply) : (1.0(USD) in decimal configured in the substrate chain)`.
- Vault module should burn or mint stablecoin's module account's balance according to rebased balance
- Alert community when total supply cannot be decreased anymore to keep the ratio(in case where decreased total supply exceeds circulating supply) in order to propose emergency shutdown or take further actions(e.g. issuing bonds, using community vault from stability fee to stabilize the ratio) 

To check this, vault module should have these test functions:

- `supply_is_rebased_in_each_era`: Using an oracle module, set an oracle price and start an era so that the vault module can executes rebase mechanism. The total supply of the stablecoin is checked whether it changed to the right amount.
- `report_emergency`: check whether vault module reports when the rebased next total supply is less than the circulating supply.


## Oracle

oracle will replicate the `pallet-staking` module regarding election of the oracle provider and the reward logic. However, there will be difference in how the elected provider(or validator) is allocated to the slot. The module only accepts the stash account to submit oracle data once `validate()` tx has been finalized.

For example, there will be addition in the `select_and_update_validators` function code 

```rust=
/// Select the new validator set at the end of the era.
	///
	/// Runs [`try_do_phragmen`] and updates the following storage items:
	/// - [`EraElectionStatus`]: with `None`.
	/// - [`ErasStakers`]: with the new staker set.
	/// - [`ErasStakersClipped`].
	/// - [`ErasValidatorPrefs`].
	/// - [`ErasTotalStake`]: with the new total stake.
	/// - [`SnapshotValidators`] and [`SnapshotNominators`] are both removed.
	///
	/// Internally, [`QueuedElected`], snapshots and [`QueuedScore`] are also consumed.
	///
	/// If the election has been successful, It passes the new set upwards.
	///
	/// This should only be called at the end of an era.
	fn select_and_update_validators(current_era: EraIndex) -> Option<Vec<T::AccountId>> {
		if let Some(ElectionResult::<T::AccountId, BalanceOf<T>> {
			elected_stashes,
			exposures,
			compute,
		}) = Self::try_do_election() {
			// Totally close the election round and data.
			Self::close_election_window();

			// Populate Stakers and write slot stake.
			let mut total_stake: BalanceOf<T> = Zero::zero();
			exposures.into_iter().for_each(|(stash, exposure)| {
				total_stake = total_stake.saturating_add(exposure.total);
				<ErasStakers<T>>::insert(current_era, &stash, &exposure);

				let mut exposure_clipped = exposure;
				let clipped_max_len = T::MaxNominatorRewardedPerValidator::get() as usize;
				if exposure_clipped.others.len() > clipped_max_len {
					exposure_clipped.others.sort_by(|a, b| a.value.cmp(&b.value).reverse());
					exposure_clipped.others.truncate(clipped_max_len);
				}
				<ErasStakersClipped<T>>::insert(&current_era, &stash, exposure_clipped);
			});

			// Insert current era staking information
			<ErasTotalStake<T>>::insert(&current_era, total_stake);

			// collect the pref of all winners
			for (i, stash) in elected_stashes.iter().enumerate() {
                <Slots<T>>::insert(i, stash.clone()); // allocating slots for elected oracle provider
				let pref = Self::validators(stash);
				<ErasValidatorPrefs<T>>::insert(&current_era, stash, pref);
			}
            

			// emit event
			Self::deposit_event(RawEvent::StakingElection(compute));

			log!(
				info,
				"💸 new validator set of size {:?} has been elected via {:?} for era {:?}",
				elected_stashes.len(),
				compute,
				current_era,
			);

			Some(elected_stashes)
		} else {
			None
		}
	}
```

Also, slash module function should include verifier from milestone 1.

```rust=
/// Slash the validator for a given amount of balance. This can grow the value
	/// of the slash in the case that the validator has less than `minimum_balance`
	/// active funds. Returns the amount of funds actually slashed.
	///
	/// Slashes from `active` funds first, and then `unlocking`, starting with the
	/// chunks that are closest to unlocking.
	fn slash(
		&mut self,
		mut value: Balance,
		minimum_balance: Balance,
        slot: SlotIndex,
	) -> Balance {
		let batch = Prices::get(_id).unwrap();
		let value = batch[_slot as usize];
		let det = Self::determine_outlier(batch, value);
		ensure!(det, Error::<T>::NotOutlier);
		let pre_total = self.total;
		let total = &mut self.total;
		let active = &mut self.active;

		let slash_out_of = |
			total_remaining: &mut Balance,
			target: &mut Balance,
			value: &mut Balance,
		| {
			let mut slash_from_target = (*value).min(*target);

			if !slash_from_target.is_zero() {
				*target -= slash_from_target;

				// don't leave a dust balance in the staking system.
				if *target <= minimum_balance {
					slash_from_target += *target;
					*value += sp_std::mem::replace(target, Zero::zero());
				}

				*total_remaining = total_remaining.saturating_sub(slash_from_target);
				*value -= slash_from_target;
			}
		};

		slash_out_of(total, active, &mut value);

		let i = self.unlocking.iter_mut()
			.map(|chunk| {
				slash_out_of(total, &mut chunk.value, &mut value);
				chunk.value
			})
			.take_while(|value| value.is_zero()) // take all fully-consumed chunks out.
			.count();

		// kill all drained chunks.
		let _ = self.unlocking.drain(..i);

		pre_total.saturating_sub(*total)
	}
}
```

# Unit test 

Unit tests are all identical with the staking module's test in that all logics are identical regarding slash, reward and validation. 



| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0c. | Documentation | Documentation will introduce how to nominate  | 
| 1. | Vault module | Vault module will declare dependancy injection trait to use session callback in `pallet-staking` module and the test code with separate `SessionManager` implementation will be provided | 
| 2. | Modified Staking module | `pallet_staking` module which has two config trait for rebase callback and oracle staking callback will be provided | 
| 3. | Oracle module | same as staking module including curve integration but difference in slot allocation and separate slashing verifier will be included | 
| 4. | Unit test code | Unit test codes in `tests.rs` in each runtime module with separate `SessionManager` implementation  |
| 5. | Docker | We will provide a dockerfile to demonstrate the full functionality of Standard protocol chain |



## Future Plans
- Add more prices to add from the oracle (e.g. stock prices, commodities, etc) provider
- Full function test on Kusama/Rococo.
- Full function test on Polkadot.

## Additional Information :heavy_plus_sign: 

- Pitch: [https://whitepaper.standardprotocol.org](https://whitepaper.standardprotocol.org)
