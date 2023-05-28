# Learning Causal Models of Substrate Pallets for Deep Account Analytics and Dashboards

- **Team Name:** Colorful Notion, Inc.
- **Payment Address** `0xEaf3223589Ed19bcd171875AC1D0F99D31A5969c`
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 3

## Abstract :page_facing_up:

This proposal aims to develop causal models of Substrate pallets and use these to provide specific Advanced Account Analysis datasets and dashboards.

## Project Overview :page_facing_up:

This is in response to the RFP [Data Analysis Tools for Substrate-based Blockchains](https://github.com/w3f/Grants-Program/blob/master/docs/RFPs/Open/data_analysis_tools.md) which seeks to answer causal questions like these:

Account References:
* Which transactions/accounts were responsible for the reserved balance in an account?
* What modules currently depend on consumers, providers, and sufficients reference counters for a certain account, and which transactions introduced/removed those references?
* What are the pallets responsible for reserves/holds and locks/freezes on an account?

Democracy:
* Which accounts have delegated OpenGov votes to an account or to which accounts the account in question has delegated their votes to for each track,  taking into account indirect delegations too (e.g. Account A delegates to Account B which delegates to Account C)?

Staking/Nomination:
* Who are all the nominators that nominated Validator X in Era N? (an inverse mapping basically of staking.nominators from validator -> nominators)
* Who are the top 10 nominators with the highest APR, and which validators do they have in common?
* Which eras had the highest number of tokens and accounts unbonding?

They are _causal questions_ because they concern reasoning about how chain state changes are caused by a block's extrinsics.  They are difficult to answer without going through many pages in a block explorer like Polkaholic.io, and nearly impossible without modeling the detailed state closely.
Every block involves adjusting a tiny number of key-value maps through its extrinsics, which are frequently nested calls (e.g multisig accounts or utility batch operations) and/or run through proxy operations especially common in staking.  This makes the problem even more challenging and unrealistic for humans.  

The goal of this proposal is to:
* develop a causal model of Substrate pallets using well understood Bayesian techniques on top of substrate-etl trace data
* use the model to generate new datasets systematically 
* use these new datasets in Apache Superset dashboards, to support Deep Account Analytics
* improve the above process in the context of 3-5 core pallets in the Polkadot chain from the recent past (7 days) to block 1

### Project Details

At the heart of every blockchain is a state transition function, where the state transitions for any  block are commonly called "traces" in blockchain engineering.  Substrate makes every trace visible through a [state_traceBlock](https://polkadot.js.org/docs/substrate/rpc/#traceblockblock-hash-targets-optiontext-storagekeys-optiontext-methods-optiontext-traceblockresponse) RPC function, which outputs every storage key-value map change in a re-execution of a single block.  This RPC call is considered "unsafe" as it requires compute time to regenerate.

Polkaholic.io's indexer, when traces are available from an internal archive node, fetches traces and exposes them in the block explorer.

For example, here is the trace for [Polkadot Block 15723663](https://polkaholic.io/trace/polkadot/15723663/)

<img src="https://cdn.polkaholic.io/screenshots/polkadot-trace.png">

The raw keys (e.g. `0x26aa394eea5630e0...f1dbd372bbe532b1f8702b2a7e`) and values (e.g. `0x01ab50050...000000000000`) are decoded using the chains type spec into 

```
Key: [ "12xtAYsRUrmbniiWQqJtECiBQrMn8AypQcXhnQAc6RB6XkLW" ]
Value: {
    "nonce": 348331,
    "consumers": 2,
    "providers": 1,
    "sufficients": 0,
    "data": ⊖{
        "free": "0x000000000000000005785a9c9f9ad21b",
        "reserved": 0,
        "miscFrozen": "0x00000000000000000058d15e17628000",
        "feeFrozen": "0x00000000000000000058d15e17628000"
    }
}
```
and loaded into BigQuery as part of a publicly available [substrate-etl](https://console.cloud.google.com/bigquery/analytics-hub/exchanges/projects/974572213039/locations/us/dataExchanges/substrate_18804f88005), recently added to Google BigQuery's Public Datasets in May 2023.

<img src="https://cdn.polkaholic.io/screenshots/substrate-etl-trace.png">

Traces are critical to Colorful Notion's [XCM Indexing](https://polkaholic.io/xcmtransfers?xcmType=xcmtransfer).  As raw trace form a very large dataset, the indexer filters out pallets section/method that and exposes them in `crypto_polkadot.traces0` ([see schema](https://github.com/colorfulnotion/polkaholic/blob/main/substrate/schema/substrateetl/traces.json)) .  In particular, given how central accounts and native and non-native tokens are to blockchain usage, the indexer further decodes accounts and asset state into many additional columns like
free, reserved, ... -- we did not know that consumers, providers, sufficients would be valuable to this problem when designing the schema, but this could be natural to do. 

Missing in these trace, however, is the answer to the atomic causation question:

***Which extrinsic ID caused a particular storage change?***

To answer the above causal question systematically in a large scale index, it is necessary to have a causal model of the state transition function.

```
 extrinsic 15723663-2 =caused=> storage traceID 0x26aa39...2b2a7e concerning 12xtAYsRUrmbniiWQqJtECiBQrMn8AypQcXhnQAc6RB6XkLW consumers to become 2
```

Of course, the above datapoint is causally generated by the Substrate engineer having done an "inc_consumer" in  Rust code, which when compiled into WASM/EVM byte code, 
resulted in the storage change.  But from an analytics engine and a user trying to infer how the above actually changed all we have is the result of state_traceBlock.  It is conceivable that a Substrate pallet engineer could explicitly provide this model for every pallet section method by hand and make it available in chain spec versions, or for a static code analyzer of Rust code to review all potential call graphs,  or for Substrate's state_traceBlock to be reinstrumented to explicitly include which extrinsic ID caused a particular storage map change,
or for ChatGPT to read some subset of that and have deep account analysis, or something else still.  We will assume that all these are unrealistic paths.

This proposal takes a Bayesian causal learning of traces, widely understood in machine learning, simplified as:

1. *training a causal model*: using substrate-etl "traces", build a statistical model (likelihood and priors) of how every pallet's section/method generates
the key observed state variables revealed in decoded state_traceBlock calls:

```
select trace_id, block_number, ts, address_ss58, pv, free, reserved, frozen, misc_frozen, fee_frozen from crypto_polkadot.traces0 where
( section = "System" and storage = "Account" ) or
( section = "Democracy" and storage = "VotingOf" ) 
```

2. *performing causal inference*: for any observed state change, using the above statistical model, generate a set of valid hypothesis about possible causes of the state change, and for each hypothesis, provide a confidence score (posterior probability) of which potential cause (extrinsic/call in a block) could be responsible of observed storage change (or event section/method atom), e.g. "consumers went up", "free went down".

This approach treats blockchains pallet's ability to affect storage maps as coming from a statistical generative process, which is not literally true,
but because the learner does not know the state transition function the learner must use observed statistics to infer the underlying "perfect" process that the actual
Substrate nodes that participate in consensus follow.

In particular, to serve the core Account analysis questions, we will build the causal model to specifically on:

* [System:Account](https://docs.google.com/spreadsheets/d/1jywN--pONmJqmbuASWDLNdBvsB86OuizJnQ72ijAXSU/edit#gid=704412439) holding account reference counters, account balance reserved provenance (see: https://docs.substrate.io/reference/account-data-structures/)

* [Democracy:VotingOf](https://docs.google.com/spreadsheets/d/1hdvW5Kw3gwBnXqFskALX1_szdTf4pYL-SlbOqJ8tlO0/edit#gid=1803912396) -- OpenGov delegations

```
{"direct":{"delegations":{"capital":0,"votes":0},"prior":[0,0],"votes":[[113,{"standard":{"vote":"0x81","balance":10000000000}}],[119,{"standard":{"vote":"0x82","balance":50000000000}}]]}}
```
OR
```
{"delegating":{"balance":15000000000,"conviction":"Locked4x","delegations":{"capital":0,"votes":0},"prior":[0,0],"target":"15ZvLonEseaWZNy8LDkXXj3Y8bmAjxCjwvpy4pXWSL4nGSBs"}}
```

* Staking state, with similar state but with the added complexity of stashing (proxy) controller/accounts.

In each case, causal model development consists of [feature engineering](https://aws.amazon.com/what-is/feature-engineering/) on the state variables of interest, which is almost always an iterative process.   Non-AI practitioners are almost completely unaware of how much preprocessing is required to do this successfully, which almost always involves bringing in additional knowledge of the generative processes of the input.  In blockchain context, such knowledge might be encoded into priors on candidate accounts that could be affected:
* the signer
* any accounts in the call parameters e.g. transfer(Y)
* the treasury, author/validator of a block earning fees
* WASM/EVM contract addresses
and not, for example, the signer of the preceeding or next extrinsic or anything from the previous or next block.  Blocks in a chain and signed extrinsics work completely independent of one another -- in images + language, dependencies are quite different, and transformers to CNNs take advantage of this structure, literally to model what pets look like and to sound like Shakespeare.   Generative models of blockchains should similarly utilize the available internal structure from spec versions in the same way.  Causal inference then requires mapping the source dataset into features based on the types.  

The end result will be a `causaltracer` program:

```
# 1. construct causal model 
./causaltracer train -r polkadot -p 0 -l 2023-05-20 --endDT 2023-05-27

# 2. infer traces: use causal model to load
./causaltracer infer -r polkadot -p 0 -l 2023-05-28 --endDT 2023-05-31
```

1. The result of the first "train" process is to take the observed data (traces0) and potential causes (calls0) over some date range, store statistical summaries in BigQuery necessary to support Bayesian inference.

2. The result of the second "infer" process is to take the summaries, the original "traces0" dataset and generate data added to tables `storage_system_account`, `storage_democracy_votingOf`, ... 

```
select trace_id, block_number, ts, address_ss58, pv, free, reserved, frozen, misc_frozen, fee_frozen, ***producers, consumers, sufficients, extrinsic_id*** from substrate.storage_system_account 

select trace_id, block_number, ts, address_ss58, pv, ***delegating_conviction, delegating_delegations, delegating_target, extrinsic_id*** from substrate.storage_democracy_votingOf 
...
```

Critically, these tables are just like the `traces0` data, but critically have the key [maximum posterior cause](https://www.probabilitycourse.com/chapter9/9_1_8_bayesian_hypothesis_testing.php) -- the `extrinsic_id` as a new column.  

Each of these tables can be filtered by account will be put into an Account Analysis [Apache Superset](https://analytics.polkaholic.io/dashboard/list/) or [Looker](https://cloud.google.com/looker) dashboard.   Here we have a WASM Contract Explorer prototype:

<img src="https://cdn.polkaholic.io/screenshots/deep-account-dashboard.png">

It is straightforward to link these dashboards directly to polkaholic.io based the key (accountID/extrinsicID/...) and add filtering on any column present in the table

We envision 3 or more account tabs:
* "Account References" utilizing `storage_system_account`
* "Democracy" utilizing  `storage_democracy_votingOf`
* "Staking" utilizing  `storage_staking_*` and `storage_nominationPools_*`

Any block explorer (polkaholic.io) can then link to thiis dashboard with the account ID, and the dashboard can link back to a block explorer.
Once the dataset is made available, end users can build charts and dashboards with the same ease as they do in Excel or Google Sheets.

### Ecosystem Fit

If Web3 is to have the kind of success that AI has had in our lives, it is extremely likely that BigData machine learning will be applicable to 
Learning models are already applied to financial forensics with deep account analysis.  This work will attempt to bring a straightforward Bayesian model to Substrate Pallets
and apply it to the most widely used pallet in Polkadot/Substrate: System, Democracy, Staking. 

Substrate's typed metadata system is a rich place to infer block causal models of blockchain.
Unlike extremely high dimensional machine learning, the Bayesian approach taken here results in transparent causal models, which
makes it tractable to pursue.

## Team :busts_in_silhouette:

### Team members / Contact

- **Contact Name:** Sourabh Niyogi / Michael Chung
- **Contact Email:** sourabh@colorfulnotion.com / michael@colorfulnotion.com
- **Website:** https://colorfulnotion.com

### Legal Structure

- **Registered Address:** 55 E 3rd Ave, San Mateo, CA 94401, USA
- **Registered Legal Entity:** Colorful Notion, Inc.

### Team's experience

* Key engineers Sourabh Niyogi and Michael Chung have developed Polkaholic.io since Fall 2021 and substrate-etl since December 2022.

* Prior to building Polkaholic.io, Sourabh and Michael worked in decentralized social networking protocol development + privacy-preserving contact tracing (Wolk),
mobile advertising real-time bidding algorithm design and analytics (CrossChannel/MdotM).

* Sourabh spent time doing computational cognitive science and machine vision research at MIT, including
in [Bayesian learning of verb meaning and causal laws](https://scholar.google.com/citations?user=HHmGYdEAAAAJ&hl=en].

* Michael hails from UC Berkeley with a degree in statistics and economics and leads deep indexing at Colorful Notion.

### Team Code Repos

- [substrate-etl](https://github.com/colorfulnotion/substrate-etl)
- [Polkaholic.io](https://github.com/colorfulnotion/polkaholic)
- [XCM Global Asset Registry](https://github.com/colorfulnotion/xcm-global-registry)
- [Sourabh Niyogi](https://github.com/sourabhniyogi) | [Michael Chung](https://github.com/mkchungs)

## Development Status :open_book:

* Summer 2022: Released Polkaholic.io, a fully working Substrate-first multichain block explorer.
* Fall 2022: Increased XCM Transfers Coverage, Improved UI + API based on feedback from users.  Added EVM/WASM support.
* Winter/Spring 2023: Developed substrate-etl and XCM Global Asset Registry.  Drafted [Bounty Proposal: Substrate + XCM Big Data (SXBD)](https://docs.google.com/document/d/1ryC6dxcd9tiQsB7KiCc2BY_TwBJ5jKloGfCyVAGCkKo/edit).
* May 2023: Google included Polkadot + Kusama in [Google Public Datasets](https://cloud.google.com/bigquery/public-data).

## Development Roadmap :nut_and_bolt:

This proposal aims to do targeted causal model construction in the service of building deep account analysis tools.
Machine learning involves a considerable amount of data preparation and post-processing to be successful, and a few iterations on feature engineering
to have long-term success.

Milestone 1 will set up the entire process of:
* Causal Model / Causal Inference Development
* Feature Engineering
* Dataset Generation
* Dashboard Publication
in the context of `System:Account` related state.

Milestone 2 will largely repeat the same process but with the `Democracy` pallet.

Milestone 3 will largely repeat the same process but with the `Staking` and `NominationPools` pallet.

We will gradually increase the size of the training data and expect to improve our feature engineering for acceptable performance given the amount of time allocated
so that we have more than a proof-of-concept but a usable tool.  This is enabled by dedicated focus to only 1 chain and 4 pallets related.

While we have gained significant experience in building the Polkaholic indexer, we expect to discover gaps in our understanding and limitations of Bayesian
causal modeling through this work, and will record what we learned in each Milestone in the READEME.

### Overview

- **Total Estimated Duration:** 3 months
- **Full-Time Equivalent (FTE):** 480 FTE hours [125 USD/hr]
- **Total Costs:** 60,000 USD

### Milestone 1 — Causal questions on System Account

- **Estimated duration:** 8-12 weeks
- **FTE:**  240 FTE hours [125 USD/hr]
- **Costs:** 30,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | GNUv3 - CausalTracer class within substrate-etl repo  |
| 0b. | Documentation   | Provide README on causaltracer |
| 0c. | Substrate-etl Dataset | crypto_polkadot.{accountreference0, storage_system_account} |
| 0d. | Docker | Docker container |
| 1.  | Causal Model / Causal Inference Development | Development of causaltracer, to model System:Account storage changes |
| 2.  | Feature Engineering   | System:Account |
| 3.  | Dataset Generation       | substrate-etl:substrate.storage_system_account, substrate-etl:substrate.accountreference0   |
| 4.  | Dashboard Publication | Superset dashboard tab: "Account Reference"  |

In addition doing causal modeling/inference on `System:Account` storage changes, we will take this opportunity to do a thorough model of accountreference0, to be able to model the time course of account reference changes.  This must be done with the caveat that only recent traces are available.  With this proposal being approval we will disable the garbage collection policy on the "traces0" dataset.

### Milestone 2 — Causal Models of Democracy Pallets + Causal inference from 2023 traces of Polkadot

- **Estimated duration:** 4-8 weeks
- **FTE:**  120 FTE hours [125 USD/hr]
- **Costs:** 15,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | GNUv3 - CausalTracer class within substrate-etl repo  |
| 0b. | Documentation   | Update README on causaltracer |
| 0c. | Substrate-etl Dataset | crypto_polkadot.{democracy0, storage_democracy_votingOf} |
| 0d. | Docker | Docker container |
| 1.  | Causal Model / Causal Inference Development | Development of causaltracer, to model `Democracy:VotingOf` storage changes|
| 2.  | Feature Engineering   | Democracy:VotingOf |
| 3.  | Dataset Generation       | substrate-etl:substrate.storage_democracy_votingOf  |
| 4.  | Dashboard Publication | Superset dashboard tab: "Democracy" |
| 5.  | 2023 Trace + Audit | Obtain traces for every block since 1/1/2023 |

In addition to doing causal modeling/inference of `
We will take this opportunity to increase trace coverage to 2023.
At present, due to limited applicability of traces and their considerable storage costs, the Polkaholic indexer does not keep more than a week
of trace data.  However, once a restricted set of storage/map combinations are identified, a large tracing job is far more reasonable.
We anticipate that improvements to the causal model / inference procedure will be necessitated as gaps are revealed in the `accountreference0` dataset.

### Milestone 3 — Causal Models of Staking, Nomination Pools Pallets + Full traces of Polkadot

- **Estimated duration:** 4-8 weeks
- **FTE:**  120 FTE hours [125 USD/hr]
- **Costs:** 15,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | GNUv3 - CausalTracer class within substrate-etl repo  |
| 0b. | Documentation   | Update README on causaltracer |
| 0c. | Substrate-etl Dataset | crypto_polkadot.{traces0, storage_staking_*, storage_nominationpools_*} |
| 0d. | Docker | Docker container |
| 2.  | Feature Engineering   | Staking:*, NominationPools:* |
| 3.  | View Generation       | storage_staking_*, storage_nominationpools_*  |
| 4.  | Dashboard Publication | Superset dashboard tab: "Staking/Nomination Pool"  |
| 5.  | Full Trace + Audit | Obtain traces for every Polkadot block since block 1 |

We will take this opportunity to address the complexity of eras, proxy / stashing accounts within `causaltracer` (not Polkaholic.io) by:
* adding additional tables to the `crypto_polkadot` dataset: `proxy0`, `era0`
* using the above tables in the views referencing  `storage_staking_*, storage_nominationpools_*`
* using views in era / proxy Dashboard

We will take this opportunity to develop a full trace back to the first date when none of the 4 pallets considered, and generating a causal inference for all traces thereafter.  It is possible that early time periods have different state models, which will likely result in limiting the scope of the dashboard to start from the first date.  We anticipate that improvements to the causal model / inference procedure will be necessitated so that gaps in accountreference0 are eliminated.     

## Future Plans

This work sets up a foundation for the development of causal models in deeper blockchain analytics in a Substrate context
by focussing on 1 Substrate chain (Polkadot) with handful of pallets (System, Democracy, Staking, NominationPools).

The approach taken here on these pallets is "hand-built" for these pallets but likely could be generalized to all Substrate pallets and chains,
supporting improved Substrate development tools:
* development of causal models events as well as pallet storage
* automatic documentation of substrate pallets based on the inferred causal models
* detecting abnormal / atypical execution of a pallet (bridge risk), or bugginess (failure to decrement)

The same causal modeling to Substrate storage data could be used for EVM chains, for  EVM+WASM Contracts.  While each of the milestones
require significant time investment, it is expected that many new cases will take fewer engineering hours for each of the key steps.

If no feature engineering or view model construction is needed, the hope is that indexing and dashboard engineering accomplishable
with less than 2-3 days of work.  In the future, text-to-SQL methods could be used build dashboards.

## Additional Information :heavy_plus_sign:

This proposal requires special-purpose indexing and model construction, which in turn depends on heavy storage and compute resources from Google Cloud.
This is of limited use except to a small number of non-common users in Web3 Foundation posing questions.  There is no business case for this kind of research.

Despite the obvious utility for the Web3 Foundation, the Web3 Foundation does not support hosting and maintenance as a default policy.  See FAQ.
Given this policy, for this project to have meaningful impact, a secondary sponsor is required to address the ongoing hosting and maintenance.
At present, the clear choice is the [SXBD Parent Bounty](https://docs.google.com/document/d/1ryC6dxcd9tiQsB7KiCc2BY_TwBJ5jKloGfCyVAGCkKo/edit#heading=h.gjdgxs) curated by Parity Data.  

We request that W3F RFP Authors of [Data Analysis Tools for Substrate-based Blockchains](https://github.com/w3f/Grants-Program/blob/master/docs/RFPs/Open/data_analysis_tools.md) and [Analytics Website/Data Platform](https://github.com/w3f/Grants-Program/blob/master/docs/RFPs/Open/analysis-website-and-data-platform.md) be considered as curators of child bounties (one of whom potentially for the parently) for this project and other SXBD bounties to have a long-term maintenance plan.  
