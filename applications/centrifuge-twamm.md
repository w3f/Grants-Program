# Centrifuge On-Chain Automated Treasury Management

- **Team Name:** k/factory (former Centrifuge Development Team)
- **Payment Address:** Ethereum(USDC) - 0x2B8A956BF807E22d858dc9AD2eFc30cccc3Ea676
- **Level:** 🐓 3

## Project Overview :page_facing_up:

### Problem Statement

The [ongoing discussion](https://forum.polkadot.network/t/statemint-update-roadmap/1200/) about automated market makers (AMMs) in the Statemint roadmap is mainly focused on improving the user and custodian experience by allowing small atomic swaps natively and making Statemint a central hub for asset deposits. This addresses important pain points by enabling transaction fees to be paid in non-native tokens and facilitating interaction with the entire asset variety of the ecosystem without requiring to run custom nodes or infrastructure.

However, we believe that one aspect has been overlooked: the slow swaps of large volumes, which can be easily front-run or sandwiched. This is particularly relevant in the context of trades proposed through governance for use cases such as
1. Paying out treasury grants, bounties or even [salaries](https://github.com/paritytech/substrate/pull/13378) in less volatile currencies (ie. stablecoins).
2. Enabling parachains to build a DOT reserve which can be used to acquire a parachain lease, pay XCM fees, or [increase availability cores](https://forum.polkadot.network/t/parachain-scaling-by-parablock-splitting/341) during times of high demand (once supported).
3. Governance deciding to invest part of the treasury into a token to diversify their treasury

What we need is the opposite of what a traditional AMM provides: atomic swaps with immediate execution, even in relatively illiquid assets. A governance vote is unable to time the market and is highly predictable. Therefore, executing such a transaction as a market order on an AMM is problematic, as it will be guaranteed to be front-run. A better solution is to "dollar-cost-average" over a long period of time making it harder for price manipulation to affect the purchase.


### Solution

At Centrifuge, we have researched distinct approaches of how to achieve hard-to-front-run slower transactions. In our opinion, the most elegant solution is [TWAMM (Time Weighted Automated Market Maker](https://www.paradigm.xyz/2021/07/twamm). We are of the firm conviction that the implementation of this model represents the most efficacious approach for executing token swaps in the context of slower and passive procedures, such as governance.

#### Time Weighted Average Market Maker

The TWAMM protocol represents a sophisticated advancement of the conventional constant product (Uniswap-v2 style) automated market maker (AMM) framework. It introduces a novel feature wherein users can split their orders into infinitely small fractions and execute them at each block interval. This feature addresses a significant shortcoming of traditional AMMs that encounter severe slippage issues when processing sizable orders, leaving them vulnerable to front-running tactics.

Furthermore, the inherent risk associated with executing transactions within a single block is nullified by the TWAMM protocol. By segmenting orders into hundreds of small units spread over a prolonged time frame, the slippage rate of the embedded AMM is markedly reduced, and the cost of price manipulation is exponentially elevated. Artificially manipulating prices over multiple blocks creates an opportunity for other traders to exploit the price-inflation tactic, which ultimately undermines the manipulative effort. This innovative solution offers an elegant means of executing large orders even in relatively illiquid markets. It is particularly well-suited for slow automated processes, such as governance-controlled treasury operations, that can effectively implement a dollar-cost averaging strategy over extended periods.

### Project Details

This proposal does not aim to build an alternative DEX. Instead, TWAMM will be a feature on top of the Statemine/t DEX, whose logic was renamed to **`pallet-asset-conversion`** ([Substrate PR #12984](https://github.com/paritytech/substrate/pull/12984)) as a result of discussions on the Polkadot forum. While **`pallet-asset-conversion`** will remain independent of our TWAMM pallets, TWAMM expects an embedded AMM interface via the pallet's **`Config`** trait, which will be based on **`pallet-asset-conversion`**, making it easy for any chain implementing **`pallet-asset-conversion`** to add TWAMM to their runtime with minimal overhead.

To handle the accounting, distribution and claiming of sale proceeds, `pallet-twamm` will use a `Rewards` trait implemented by `pallet-rewards`. The latter trait and pallet is not part of the application we have already developed that under GNU General Public License v3.0.

![](https://www.plantuml.com/plantuml/svg/VLF1Rjim3BthAtXSYwKVK0H1rnrs6T2XFHP5mCYq8LWI1KbUDXJzzr9ociYhiOjXYEyzFZvATobZp9EpIgNH-80H7MXsWJtv3AyAu1xrE4IUVFUTBSVjLa0Pk8SGEN12kzl1BxJqWsr7_f6xDSxJT4WvOYO1Fur_x-r4wgtjcJ9776Yj8voLOSc9f3FwmQwp7gBKQfSB3ftR6tXMOiLaOIIZlpa7NupF57lKT2L20EeQqXG2ovpfY24OFq0joDIPH_8GqCGaCFeZ4P14OJI1yJqtPynsFdffBKGwOknIO-DnFbbpWLhBG1bwcKTRDAw4hea4NI5zP0UM_I14oL2saFvXJOcYX8iZIOC2s9SjN5riLbayM3fBB_tcupAqdwTk3x4JvVybDnsSoLco-mfJwB3yLGpw3ZHwJTQMO2LJBbgfuLPJfTXwKiy1hQMygPPUOFKcOfeTdy6dl0lSSuProWbq9c5AyjNiVuilmxwmsoiib0hPNo2WL6qCcyskMV9jsK1gIdEQduu_Ohu5uu8b9wylgOlCzkRcGtG9cLcb_CdG0gVko7VbdRy3)

Please note the following draft spec is subject to change during the implementation.

#### pallet_twamm

##### Structs
```rust
/// Exposes information about an existing longterm order.
struct Order<AccountId, AssetId, AssetBalance, BlockNumber, OrderId> {
    id: OrderId,
    owner: AccountId,
    expiration_block: BlockNumber,
    sell_rate: AssetBalance,
    asset_in: AssetId,
    asset_out: AssetId,
}
```

##### Storage
```rust
/// Tracks next available order identifier.
type NextOrderId = StorageValue<OrderId>;

/// Tracks longterm order details.
type LongtermOrders =
    StorageMap<Blake2_128Concat, OrderId, Order<AccountId, AssetId, AssetBalance, BlockNumber, OrderId>>;

/// Tracks order ids per account.
type OrdersOf =
    StorageMap<Blake2_128Concat, AccountId, BoundedVec<OrderId, MaxOrdersPerAccount>>;

/// Tracks orders to be executed at a specific block.
type OrdersAt =
    StorageMap<Blake2_128Concat, BlockNumber, BoundedVec<OrderId, MaxOrdersPerBlock>>;
```

##### Extrinsics

```rust
/// Submit a new longterm order.
///
/// Noop if pool (asset_in, asset_out) does not exist in the configured [`EmbeddedAmm`].
fn submit_order(origin: Origin, asset_in: CurrencyId, asset_out: CurrencyId, sell_rate: AssetBalance, expiration_block: BlockNumber) -> DispatchResult;

/// Cancel an existing order.
/// Cleans all storage associated to the order and claims proceeds.
///
/// Expects origin to be owner of order.
fn cancel_order(origin: Origin, id: OrderId) -> DispatchResult;

/// Update the `sale_rate` of an existing order.
///
/// Expects origin to be owner of order.
fn update_order(origin: Origin, id: OrderId, new_rate: AssetBalance) -> DispatchResult;

/// Withdraw proceeds for the specified account from an order.
///
/// Can be called anytime after order submission until the order
/// terminated and all proceeds were claimed.
fn withdraw_proceeds_for(origin: Origin, owner: AccountId, id: OrderId) -> DispatchResult;
```

#### AMM Traits
```rust
/// Basic AMM trait which exposes buy and sell functionality
trait BasicAmm<AccountId, AssetId, AssetBalance, Balance> {
    type MaxSwapPathLength;
    
    /// Swap the exact amount of `asset1` into `asset2`.
    /// `amount_out_min` param allows you to specify the min amount of the `asset2`
    /// you're happy to receive.
    ///
    /// [`AssetConversionApi::quote_price_exact_tokens_for_tokens`] runtime call can be called
    /// for a quote.
    ///
    /// NOTE: Implemented by `pallet_conversion_rate::Pallet::<T>`
    fn swap_exact_tokens_for_tokens(
        path: BoundedVec<AssetId, Self::MaxSwapPathLength>,
        amount_in: AssetBalance,
        amount_out_min: AssetBalance,
        send_to: AccountId,
        keep_alive: bool,
    ) -> DispatchResult;

    /// Swap any amount of `asset1` to get the exact amount of `asset2`.
    /// `amount_in_max` param allows to specify the max amount of the `asset1`
    /// you're happy to provide.
    ///
    /// [`AssetConversionApi::quote_price_tokens_for_exact_tokens`] runtime call can be called
    /// for a quote.
    ///
    /// NOTE: Implemented by `pallet_conversion_rate::Pallet::<T>`
    fn swap_tokens_for_exact_tokens(
        path: BoundedVec<AssetId, Self::MaxSwapPathLength>,
        amount_out: AssetBalance,
        amount_in_max: AssetBalance,
        send_to: AccountId,
        keep_alive: bool,
    ) -> DispatchResult;
}
```
```rust
/// Basic AMM API trait which exposes current prices.
///
/// NOTE: Implemented by pallet_conversion_rate::Pallet::<T>
trait AssetConversionApi<AssetId, AssetBalance> {
    /// Provides a quote for [`Pallet::swap_tokens_for_exact_tokens`].
    fn quote_price_tokens_for_exact_tokens(asset1: AssetId, asset2: AssetId, amount: AssetBalance, include_fee: bool) -> Option<Balance>;

    /// Provides a quote for [`Pallet::swap_exact_tokens_for_tokens`].
    fn quote_price_exact_tokens_for_tokens(asset1: AssetId, asset2: AssetId, amount: AssetBalance, include_fee: bool) -> Option<Balance>;

    /// Returns the size of the liquidity pool for the given asset pair.
    fn get_reserves(asset1: AssetId, asset2: AssetId) -> Option<(Balance, Balance)>; 
}
```

#### Rewards (for claiming proceeds)

This interface is based on paper ["Scalable Reward Distribution on Ethereum Blockchain"](https://uploads-ssl.webflow.com/5ad71ffeb79acc67c8bcdaba/5ad8d1193a40977462982470_scalable-reward-distribution-paper.pdf) paper which presents a pull based reward distribution in `O(1)` per staking group, e.g. staked asset. In the context of TWAMM, stakes correspond to the sale rates and rewards to the sale proceeds. The paper assumes static stakes but the idea can be extended for dynamic ones.

In order to keep the efficient constant proceeds accounting, we envision to map each trading pair `(asset_in, asset_out)` to its unique group such that the overall complexity for accounting rewards is linearly dependent on the sum of sold and bought assets, e.g.  `O(#assets_in + assets_out)` which is much lower than `O(#orders)`. Within each of these groups, the accounting is still in `O(1)` and thus independent of the number of stakers.

##### `Rewards` Trait
```rust
trait Rewards<Group, Account, Currency, Balance> {
    /// Check if the group is ready to be rewarded.
    /// Most of the cases it means that the group has stake that should be
    /// rewarded.
    fn is_ready(group: &Group) -> bool;

    /// Reward the group mutating the group entity.
    fn reward_group(
        group: &mut Group,
        amount: Balance,
    ) -> Result<Balance, DispatchError>;

    /// Add stake to the account by mutating the currency and group to achieve
    /// that.
    fn deposit_stake(
        account: &mut Account,
        currency: &mut Currency,
        group: &mut Group,
        amount: Balance,
    ) -> DispatchResult;

    /// Remove stake from the account by mutating the currency and group to achieve
    /// that.
    fn withdraw_stake(
        account: &mut Account,
        currency: &mut Currency,
        group: &mut Group,
        amount: Balance,
    ) -> DispatchResult;

    /// Compute the reward for the account.
    fn compute_reward(
        account: &Account,
        currency: &Currency,
        group: &Group,
    ) -> Result<Balance, DispatchError>;

    /// Claim the reward, mutating the account to reflect this action.
    /// Once a reward is claimed, next calls will return 0 until the group will
    /// be rewarded again.
    fn claim_reward(
        account: &mut Account,
        currency: &Currency,
        group: &Group,
    ) -> Result<Balance, DispatchError>;

    /// Return the balance of an account.
    fn account_stake(account: &Account) -> Balance;

    /// Return the balance of a group.
    fn group_stake(group: &Group) -> Balance;
}
```

##### Reward Structs
```rust
struct Group<Balance, Rate> {
    total_stake: Balance,
    rpt: Rate
}

struct StakeAccount<Balance, IBalance> {
    stake: Balance,
    reward_tally: IBalance,
}
```

##### Reward Storage
```rust    
/// Maps a staked currency to its corresponding proceeds group id and out currency.
type Currencies = StorageMap<Blake2_128Concat, CurrencyId, (GroupId, CurrencyId)>

/// Maps group identifiers to their [`Group`].
type Groups = StorageMap<Blake2_128Concat, GroupId, Group>

/// Maps the pair of a staking account and their staked currency to their current stake and reward tally.
type StakeAccounts = StorageDoubleMap<Blake2_128Concat, AccountId, Blake2_128Concat, CurrencyId, StakeAccount>
```

### Ecosystem Fit

> #### Where and how does your project fit into the ecosystem?

We believe that a comprehensive response to this question can be found in our aforementioned sections on the [Problem Statement](#Problem-Statement) and [Solution](#Solution). In essence, our solution presents a seamless opt-in extension to the pallet-asset-conversion, which can be implemented across various Substrate chains, including the relaychain, to facilitate the operation of a simplified Uniswap V2 decentralized exchange. The proposed TWAMM extension effectively addresses challenges associated with executing large orders, even within relatively illiquid markets. It particularly suits gradual automated procedures, such as treasury operations under governance control, allowing for the efficient implementation of a dollar-cost averaging strategy over extended timeframes.

> #### Who is your target audience (parachain/dapp/wallet/UI developers, designers, your own user base, some dapp's userbase, yourself)?

The target audience can be categorized into two distinct groups. Firstly, it caters to Parachain developers seeking to seamlessly integrate the extension on top of pallet-asset-conversion. Secondly, it also appeals to Governance participants of any chain that implements TWAMM. 

> #### What need(s) does your project meet?

By optimizing the process of diversifying the native treasury in the context of a Multi Asset one, TWAMM empowers parachains to establish a DOT reserve. This reserve can be utilized for various purposes, such as acquiring a parachain lease, covering XCM fees, or enhancing availability cores during periods of high demand (once supported). Furthermore, it facilitates the disbursement of treasury grants, bounties, or even salaries in currencies with lower volatility, such as stablecoins.

The presence of these features serves as the driving force behind the ongoing endeavor to develop a Multi Asset Treasury. In fact, the significance of this effort was underscored by a dedicated offsite meeting held in March 2023, which involved notable participants such as Gav, Parity developers, and @wischli. During the discussions, a key insight emerged - the inclusion of TWAMM within Multi Asset Treasuries would be a highly advantageous enhancement. This addition would streamline the execution of sizable orders while ensuring a robust level of security, effectively mitigating the risks associated with front-running vulnerabilities.

> #### Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem? If so, how is your project different?

The primary contributor to HydraDX, the Galactic Council, is currently developing a tailored version of TWAMM called [DCA](https://github.com/galacticcouncil/HydraDX-node/tree/381182f714b2f7257cced7f2d73a0a93f5239579/pallets/dca) (dollar-cost averaging) within their Omnipool protocol. However, their solution is closely intertwined with Omnipool and is only compatible with it. 

Furthermore, their existing approach involves the execution of trades at regular intervals using the `on_initialize` hook. However, this method faces limitations when it comes to accommodating a significant volume of orders efficiently. In contrast, the TWAMM concept is founded on the principle that long-term orders do not need to be executed periodically. This is because such orders can be calculated effortlessly based on the most recent execution and are ensured to be executed before the regular orders of the embedded AMM. By adopting this approach, the need for frequent periodic executions is eliminated, allowing for streamlined and optimized processing of orders.

Consequently, integrating their solution into Substrate parachains would involve substantial complexities and overhead. One of our USPs is the seamless and plug-and-play integration we offer for any Substrate chain that implements the straightforward `BasicAmm` interface. This integration can be achieved by utilizing pallet-asset-conversion or any other customized AMM.

Additionally, Joe Petrowski, the leader of the System Parachain team, envisions our TWAMM solution being incorporated into the Asset Hub, thereby extending the functionalities of both relay chain treasuries. Otherwise, it is highly probable that `pallet-asset-conversion` alone would be utilized, even for slow swaps involving substantial volumes, as a means to diversify the Multi-Asset Treasury of the Relaychain, which is currently under development. Considering that significant swaps involving non-System Parachains by the Polkadot Treasury are unlikely to occur in the foreseeable future (prior to the launch of `SPREE`), we strongly believe that implementing a comprehensive TWAMM solution within the Asset Hub would be a substantial improvement for the ecosystem. Parties with a keen interest in a more efficient implementation may choose to execute transactions through alternative parachains, as discussed in the various [DEX deliberations](https://forum.polkadot.network/t/statemint-update-roadmap/1200). If we dare to dream, we envision our proposed pallets being integrated into the `frame` in the future.




## Team :busts_in_silhouette:

### Team members

- *TWAMM Project Lead & Rust Developer*: William Freudenberger (@wischli)
- *CTO*: Jeroen Offerijns (@offerijns)
- *Technical Product Manager & Rust Developer*: Frederik Gartenmeister (@mustermeiszer)

### Contact

- **Contact Name:** William Freudenberger
- **Contact Email:** william@k-f.co
- **Website:** https://k-f.co/
- **Protocol website**: https://centrifuge.io/

### Legal Structure

- **Registered Address:** k-f dev AG, Grafenauweg 8, 6300 ZUG SWITZERLAND
- **Registered Legal Entity:** k-f dev AG

### Team's experience

This grant is proposed by k/factory, a core development contributing to the [Centrifuge](http://centrifuge.io/) project. A team made of experienced Substrate builders and  a well established project in the Polkadot/Kusama ecosystem.

We have already received and successfully delivered multiple grants: 

1. We developed a Go-based RPC library for interacting with Substrate nodes ([GSRPC](https://github.com/centrifuge/go-substrate-rpc-client/)) as a Web3 Foundation grant in [Q3 2019](https://github.com/w3f/Grants-Program/blob/master/applications/index.md#%EF%B8%8F-wave-3---q3-2019) and maintenance coverage as one of the first [Polkadot treasury proposals](https://polkadot.polkassembly.io/motion/12) in Q3 2020.
2. We also built [an early bridge](https://github.com/ChainSafe/ChainBridge) together with ChainSafe in [Q1 2019](https://github.com/w3f/Grants-Program/blob/master/applications/index.md#%EF%B8%8F-wave-1---q1-2019) and [Q1 2020](https://github.com/w3f/Grants-Program/blob/master/applications/index.md#%EF%B8%8F-wave-5---q1-2020) which was funded by a Web3 Foundation grant.
3. Last but not least, [FUDGE](https://github.com/centrifuge/fudge) received a [Polkadot treasury grant](https://polkadot.polkassembly.io/treasury/184) In Q4 2022. This tool provides a simple and generic way to interact with and manipulate the database of a Substrate-based blockchain.

Moreover, the k/f team has contributed to the Substrate and other related repositories in numerous [pull requests](https://github.com/search?q=user%3Aparitytech+author%3Awischli+author%3Amustermeiszer+author%3Abranan+author%3Anunoalexande+author%3Alemunozm+author%3Amikiquantum+author%3Alucasvo+author%3Aofferijns+author%3Acdamian&type=pullrequests), [new issues](https://github.com/search?q=user%3Aparitytech+author%3Awischli+author%3Amustermeiszer+author%3Abranan+author%3Anunoalexande+author%3Alemunozm+author%3Amikiquantum+author%3Alucasvo+author%3Aofferijns+author%3Acdamian&type=issues) and [discussions](https://forum.polkadot.network/search?expanded=true&q=%40mustermeiszer). We have deep knowledge in distributed/decentralized applications, libp2p, Golang, Solidity and Ethereum overall, zkSNARKs, and tokenization of assets with NFTs and has been developing with Substrate since Summer 2019.

### Team Code Repos

- https://github.com/centrifuge/centrifuge-chain
- https://github.com/centrifuge/go-substrate-rpc-client
- https://github.com/centrifuge/go-centrifuge
- https://github.com/centrifuge/fudge

### Team LinkedIn Profiles (if available)

- https://www.linkedin.com/in/william-freudenberger/
- https://www.linkedin.com/in/jofferijns/
- https://www.linkedin.com/in/frederik-gartenmeister/

## Development Status :open_book:

Our recent collaboration on the [development of a Multi Asset Treasury](https://github.com/paritytech/polkadot/issues/5293) (e.g. Substrate [#13602,](https://github.com/paritytech/substrate/issues/13602) Substrate [#13608](https://github.com/paritytech/substrate/pull/13608)) has highlighted the necessity of having a non-attackable long-term tokenswap mechanism like TWAMM (e.g. see the [draft for Multi Asset Treasury](https://hackmd.io/@tonyalaribe/SJcR5MTTj#Unresolved-Questions)). Within this context, we have engaged in discussions with the System Parachain team, particularly Joe, who has expressed support for the inclusion of our proposed TWAMM extension onto the Asset Hub. Specifically, the extension would be built upon the existing pallet-asset-conversion implementation. These conversations have provided positive reinforcement for our vision and reinforced the potential value that our solution can bring to the Asset Hub.

We would like to bring to your attention that we recently presented a similar, albeit more extensive and expansive, proposal to the Polkadot Treasury, which unfortunately did not succeed ([Motion #408](https://polkadot.polkassembly.io/motion/408)). However, we firmly believe that the broader ecosystem would greatly benefit from the availability of a simple, plug-and-play TWAMM extension integrated with the `pallet-asset-conversion`. This would offer an alternative to exclusively routing such trades to specialized chains like HydraDX. Interested parties seeking a more efficient implementation may choose to execute transactions through HydraDX, as extensively discussed in various DEX deliberations. Additionally, Joe Petrowski's endorsement has reaffirmed our belief in this perspective, prompting us to refine our approach. Consequently, we have focused on reducing the overall scope and placing emphasis on developing the minimum required functionality. This approach aims to create a valuable addition to the Asset Hub, as well as an extension for other parachains that adopt the `pallet-asset-conversion` framework or have their own version of a simple constant product formula DEX.

### About TWAMM in general
* [Original Paper](https://www.paradigm.xyz/2021/07/twamm) 
* [Reference implementation in Python](https://github.com/para-dave/twamm)
* [Reference implementation in Solidity](https://github.com/FrankieIsLost/TWAMM)
* [Mathematical details](https://docs.pulsarswap.com/advanced-topics/mathematical-principle-of-twamm) 

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 7.5 weeks (286 hours)
- **Full-Time Equivalent (FTE):**  1.5 FTE
- **Total Costs:** 75,000 USD

### Milestone 1 - TWAMM Pallet

We anticipate the project's inception to be in the second quarter of 2024.

- **Estimated duration:** 7.5 weeks (286 hours)
- **FTE:**  1.5
- **Costs:** 75,000 USD

|  Number | Deliverable                | Specification                                                                                                                                                   |
| ------: | -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **0a.** | License                    | Apache 2.0                                                                                                                                                      |
| **0b.** | Documentation              | We will provide both **inline documentation** of the code and a basic **tutorial** on how to load any metadata into its own registry of chain types.            |
| **0c.** | Testing and Testing Guide  | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker                     | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.                                                   |
|  **1.** | `pallet_twamm`             | Config using `pallet-conversion-rate` as implementor of [`BasicAmm`](#AMM-Traits) trait, [Structs](Structs), [Storage](#Storage) as [above](#pallet_twamm).     |
|  **2.** | `pallet_twamm` Extrinsics  | [Extrinsics](#Extrinsics) as described [above](#pallet_twamm).                                                                                                  |
|  **3.** | `pallet_twamm` runtime API | Define trait and expose Claimable proceeds for an order as well as aggregated order data for a given asset.                                                     |
|  **4.** | Benchmark `pallet_twamm`   | Add required mocks for `Rewards` and `BasicAmm` and do runtime benchmarks.                                                                                      |
|  **5.** | TWAMM 2.0 article          | Outline spec and implementation improvements over original version.                                                                                             |

## Future Plans

The Centrifuge Protocol aims to be an active user of the TWAMM protocol. If we dare to dream, we envision our proposed pallets being integrated into `frame` in the future.
