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

As a synthetic asset protocol,Standard protocol heavily depends on the oracle for managing the system. Oracles should be formed in a legit way to be motivated for people to provide computing power.
To reward the network participant, Standard protocol proposes new PoS reward system by splitting block rewards from block validators to oracle providers.

* **Total Estimated Duration:** 2 months
* **Full-time equivalent (FTE):**  1
* **Total Costs:** 1000DAI
* **Payment Address:** `0x6EaD823cfB6d45996b8E413C7bE43282f042A78e`

### Milestone 1 - Rebased stablecoin supply vault 
* **Estimated Duration:** 1 month
* **FTE:**  1
* **Costs:** 500DAI

This milestone focuses on building a oracle provider client for getting block rewards from standard protocol. PoA module for testing connection between oracle provider and the protocol is provided. Standard will use laminar's oracle module then rebases its stablecoin supply from vault module. 

### Oracle provider client 

Oracle provider client is actually a bot that uses [substrate-api-client](https://github.com/scs/substrate-api-client/blob/master/tutorials/api-client-tutorial/src/main.rs) to submit information in oracle module in a certain periods(e.g. 2 hour, 4 hour). For example, to send an oracle xt from an oracle client, 

```rust
#[derive(Encode, Decode, Debug)]
struct Report {
    asset_id: u128,
    price: u128,
}

fn client_walkthrough() {
    let url = "127.0.0.1:9944";

    let signer = AccountKeyring::Alice.pair();

    let api = Api::new(format!("ws://{}", url))
        .map(|api| api.set_signer(signer.clone()))
        .unwrap();

    let xt: UncheckedExtrinsicV4<_> =
        compose_extrinsic!(api, "OracleModule", "report", 1 as u128, 10 as u128);

    println!("[+] Extrinsic: {:?}\n", xt);

    let tx_hash = api
        .send_extrinsic(xt.hex_encode(), XtStatus::Finalized)
        .unwrap()
        .unwrap();
    println!("[+] Transaction got finalized. Hash: {:?}\n", tx_hash);

    // get the asset info for an asset identifier
    let res_str = api
        .get_storage_map("Oracle", "Prices", Some(1u128), None)
        .unwrap()
        .unwrap();

    let res_vec = Vec::from_hex(res_str).unwrap();

    // type annotations are needed here to know that to decode into.
    let report: Report = Decode::decode(&mut res_vec.as_slice()).unwrap();
    println!("[+] Decoded Asset info: {:?}\n", report);
}

```

Now combine this with cronjob like this provided example code from cronjob rust library [here](https://docs.rs/cronjob/0.3.17/cronjob/)

```Rust
extern crate cronjob;
use cronjob::CronJob;

fn main() {
    // Create the `CronJob` object.
    let mut cron = CronJob::new("Test Cron", on_cron);
    // Start the cronjob.
    cron.start_job();
}

// Our cronjob handler.
fn on_cron(name: &str) {
    println!("{}: It's time!", name);
}
```

then you get a client for submitting price information. For the standard's stablecoin price, the stablecoin is not in the market yet, so a constant will be used for testing. 

## Unit tests

Standard protocol applies test driven development(TDD) on building runtime modules for the grant. 
Here are unit tests that will be done along the development.

## Oracle

oracle in milestone 1 should achieve:
- checking whether the sender is the oracle provider in an era
- oracle provider set is changed after an era. In each era, 5 oracle providers will be chosen.
- oracle value is checked in each session to detect outliers using IQR method
- outliers are recorded for an era like `ValidatorSlashInEra` in pallet_staking, in this case it just records whether it was slashed. In this case, we call it `ProviderSlashInEra`.
- oracle providers are rewarded in each era proportional to the points received in each session. 
- checking whether provider recorded a value in each session

To check this, oracle provider module should have these test functions:
- `oracle_provider_set_changes_after_an_era`: using a `start_era`, the function should check the provider set storage whether the account id selected after era progression is different from before.  
- `oracle_provider_is_slashed`: when outlier is detected, oracle module should register the provider to the `ProviderSlashInEra` storage. 
- `outlier_is_detected`: when oracle is provided with array of the asset's price, IQR method should find the intended outlier in the test set.

## Vault 

vault in milestone 1 should achieve:
- In each era, vault module should bring registered stablecoin price from oracle module with its asset id (1) and rebase its total supply to `(circulating supply) / (oracle price)` in order to satisfy the ratio `(circulating supply) : (oracle price) = (total supply) : (1.0(USD) in decimal configured in the substrate chain)`.
- Vault module should burn or mint stablecoin's module account's balance according to rebased balance
- Alert community when total supply cannot be decreased anymore to keep the ratio(in case where decreased total supply exceeds circulating supply) in order to propose emergency shutdown or take further actions(e.g. issuing bonds, using community vault from stability fee to stabilize the ratio) 

To check this, vault module should have these test functions:

- `supply_is_rebased_in_each_era`: Using an oracle module, set an oracle price and start an era so that the vault module can executes rebase mechanism. The total supply of the stablecoin is checked whether it changed to the right amount.
- `report_emergency`: check whether vault module reports when the rebased next total supply is less than the circulating supply. 



| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0|
| 0b. | Oracle provider | A cron job software to periodically receive price and send it to standard protocol |
| 0c. | Documentation | Documentation will introduce how to install the oracle and participate to get block reward | 
| 1. | Oracle client | Oracle client to receive information from external sources then submit information regularly to substrate runtime |
| 2. | Modified Vault module | Vault module to rebase total supply of stablecoin with the ratio between circulating supply and price from oracle module |
| 3. | Unit test codes | Unit test codes in `tests.rs` in each runtime module |
| 4. | Docker | We will provide a dockerfile to demonstrate the full functionality of the oracle provider |

### Milestone 2 - PoS oracle reward distribution  
* **Estimated Duration:** 1 month
* **FTE:**  1
* **Costs:** 500DAI

This milestone focuses on separating staking and phragmen election from block reward logic then apply it on oracle network participants while sharing era information in existing staking module. oracle account will act as validator in staking module, nominators will nominate oracle accounts. Slashes will be applied in each session(approximately 4 hours) when oracle provider submits outliers or does not register value in each session. Outliers are detected with [IQR method](https://online.stat.psu.edu/stat200/lesson/3/3.2). On each session, points are allocated to the elected oracle providers with constant divided by difference between median and the provider's value. Points will be allocated to elected oracle providers, and they will get block reward at the end of an era proportional to the point they made from sessions. Block rewards will be computed separately by being called from a reward module, managing the ratio of block reward in each era like `plasm_reward` runtime module(Credits to plasm network). 

# Unit test 

Standard protocol applies test driven development(TDD) on building runtime modules for the grant. 
Here are unit tests that will be done along the development. 
Milestone 2 is about adding oracle reward logic in `pallet_staking` module.
Current `pallet_staking` module has four features:
1. manage inflation in one year and set total rewards
2. trigger functions regarding election/reward distribution in start and end of an era and record total reward in `end_era` function 
3. record which validator has which nominator and balance
4. record nominator status on each era and payout rewards by executing `payout_stakers` function in a certain era
5. slash validators with spans except `Invulnerables`

Since staking module actually processes reward by claiming to the module then get payout from the total reward recorded in the each era, the staking module's `inflation.rs` file can be separated to a module which focuses on determining total reward amount and record them for each network participant groups in each `end_era` function execution, and staking module can be used for its existing operation by total amount recorded by the separated module. 

`standard-rewards` module will focus on feature 1 and 2, and recording total stake rewards to each network participant modules.

In Standard protocol's `standard-staking` module, `pallet_staking` module removes `end_era` function and let `standard-rewards` module to record the `ErasTotalStakeRewards` storage for an each era. Oracles are also applies the same logic, but `slashing.rs` file is modified not having Slashingspan and slashed 1/3 when outlier is found in each `end_session`.

To check this, `standard-rewards` module have these test functions:

`test_oracle_rewards_computation`: from the `inflation.rs` file in `pallet_staking` module, reward computing function is checked whether the reward splits the right amount with the `ValidatorCount` returned from each network participant module. 

`standard-staking` module have these test functions:

`pallet_staking` test functions without regarding `end_era` function

`standard-oracle` module have these test functions:

`pallet_staking` test funcions witthout regarding `end_era` function


| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0c. | Documentation | Documentation will introduce how to nominate  | 
| 1. | Rewards module | Rewards module to caculate the total amount of rewards to receive with each network participants will be set | 
| 2. | Staking module | `pallet_staking` module without the `end_era` logic function using NPoS Curve | 
| 3. | Oracle module | Modification for phragmen election, slashing on `end_session`, and removing `end_era` function | 
| 4. | Unit test code | Unit test codes in `tests.rs` in each runtime module  |
| 5. | Docker | We will provide a dockerfile to demonstrate the full functionality of Standard protocol chain |



## Future Plans
- Add more prices to add from the oracle (e.g. stock prices, commodities, etc) provider
- Full function test on Kusama/Rococo.
- Full function test on Polkadot.

## Additional Information :heavy_plus_sign: 

- Pitch: [https://whitepaper.standardprotocol.org](https://whitepaper.standardprotocol.org)
