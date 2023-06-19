# Web3 Foundation Deep Account Analytics in Three Tiers for the Polkadot Data Alliance

- **Team Name:** Colorful Notion, Inc.
- **Payment Address** `0xEaf3223589Ed19bcd171875AC1D0F99D31A5969c`
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Abstract :page_facing_up:

This proposal addresses outstanding [deep account analytics problems for the Web3 Foundation](https://github.com/w3f/Grants-Program/blob/master/docs/RFPs/Open/data_analysis_tools.md).
We propse 3-tier solution:

 - Tier 1. _raw indexing_: Google BigQuery Public Datasets
 - Tier 2. _deep indexing_: shared datasets delivered with Google Analytics Hub
 - Tier 3. _dashboards_: the above indexed data in Apache Superset

This proposal seeks to develop the above solution with the support of a Web3 Foundation grant, but critically addresses 
future maintainance a [Polkadot Data Alliance Bounty](https://docs.google.com/document/d/1fA5ARHy-frzgZC66rniKZ5o7CSbDvCTkS--kWaMzuMs/edit#)
that can support work on all 3 tiers with _child bounties_ for Polkadot Data Alliance contributors.

## Project Overview :page_facing_up:

This proposal is in response to the RFP [Data Analysis Tools for Substrate-based Blockchains](https://github.com/w3f/Grants-Program/blob/master/docs/RFPs/Open/data_analysis_tools.md)
which seeks to answer deep account analytics questions of:

**Account References**:
* Which transactions/accounts were responsible for the reserved balance in an account?
* What modules currently depend on consumers, providers, and sufficients reference counters for a certain account, and which transactions introduced/removed those references?
* What are the pallets responsible for reserves/holds and locks/freezes on an account?

**Democracy**:
* Which accounts have delegated OpenGov votes to an account or to which accounts the account in question has delegated their votes to for each track?

**Staking/Nomination Pools**:
* Who are all the nominators that nominated Validator X? (an inverse mapping basically of staking.nominators from validator -> nominators)
* Who are the top 10 nominators with the highest APR, and which validators do they have in common?

We call these _deep analytics_ questions because to answer them requires significant "deep indexing" beyond "raw indexing", which cannot be done without intricate knowledge of Substrate.  Currently, these questions are difficult to answer without going through many pages in a block explorer like Polkaholic.io, and nearly impossible without doing some amount of data engineering.  The answers to the above questions _could_ be treated as new features to be developed in the context of block explorer like Polkaholic, or within special purpose UIs like polkassembly or staking.polkadot.network.

We propose a different style of solution that we believe properly factorizes the following _three_ tiers:
* Tier 1. raw indexing - raw indexing of decoded blocks (blocks, extrinsics/calls, events, traces)
* Tier 2. deep indexing - post-processing of raw indexed data 
* Tier 3. dashboards - situating the above with BI tools -- speci that does not require deep knowledge of the structure of the indexed data

Typically, a block explorer or special purpose UI concerning chain
data blends all of these three tiers together -- and the maintainer of
the block explorer enjoys a community following (etherscan.io ).  But
often when new deep analytics questions arise are not directly
available in an explorer, users with deep account analytics questions
are left struggling and need custom answers only provided by data
engineers and analytics engines -- covered by dashboard systems like
Dune Analytics.  In Dune Analytics, Tier 2 is covered by Dune Wizards
and Tier 3 is covered with a customized front-end.  

The solution we develop here is _not_ to make a long list of feature
requests for either block explorers or special purpose UIs to answer
with new functionality.

Instead, our solution to this problem is to separate the THREE TIERS within a _genuinely collaborative_ Polkadot Data Alliance:

* Tier 1: raw indexing results in all blocks, extrinsics, events, traces delivered in Google Bigquery Public Datasets.  In May 2023, Colorful Notion, under the curation of Parity Data, onboarded a complete index of 70+ chains of Polkadot+Kusama into Google Public Datasets.  This is in the "crypto_polkadot" and "crypto_kusama" dataset, which anyone can access with this Analytics Hub link [here](https://console.cloud.google.com/bigquery/analytics-hub/exchanges/projects/974572213039/locations/us/dataExchanges/substrate_18804f88005/listings/polkadot_188057df28c?project=github-integration-295917) and [here](https://console.cloud.google.com/bigquery/analytics-hub/exchanges/projects/974572213039/locations/us/dataExchanges/substrate_18804f88005/listings/kusama_1880581b627?project=github-integration-295917).

* Tier 2: deep indexing can then be done by doing some amount of data engineering with the above raw deata, resulting in tables, views or materialized views that can also be shared with new datasets, which can also be shared with Analytics Hub.

* Tier 3: front-end engineering: given the above dataset, an open source BI tool (Apache Superset) can access _multiple_ datasets contributed by _multiple_ Polkadot Data Alliance members.  Recently, Parity Data shared this dataset of _their_ index of Polkadot, which enables a simple comparison between Parity Data's index and Colorful Notions' index.

We consider our approach a _genuinely collaborative_ approach, because anyone can contribute at any of the 3 tiers -- providing raw indexes, deep indexes, or dashboards.  All dataset deliverables are public and the data processing itself is also reproducible in a "ETL" flow.  This should be contrast to a _non-collaborative_ approach where dataset is kept locked away unshared with the community, closed source and thus irreproducible.
 
However, because all three tiers involve a certain amount of storage, compute and data engineering/data analyst man power, it is critical to not _just_ build the above three tiered solution,
but recognize that it needs **maintainence**.  The Web3 Foundation supports maintainence, but does not support the considerable cloud computing costs that Tier 1 and 2 require, nor the sort of solution that Tier 3 requires.  We thus propose that the above three tier architecture be situated _in conjunction with_ a [Polkadot Data Alliance bounty](https://docs.google.com/document/d/1fA5ARHy-frzgZC66rniKZ5o7CSbDvCTkS--kWaMzuMs/edit#), not just for ourselves at Colorful Notion, but for everyone equally commited to genuine collaboration a Polkadot Data Alliance.  

It is believed that this collaborative framework can address many different problems other than deep analytics, and result in a more efficient allocation of Treasury funds and parachain resources: including an industry-wide multichain block explorer, ecosystem-wide XCM indexing, tracing tools, to name a few that our team has explored with some depth of seriousness.

Much Tier 1 foundation has already been laid through our work and other indexers (Subquery, Subsquid, Subscan, web3go) in the ecosystem, who we hope will be able to contribute at Tier 1 [ideally within BigQuery so as to be directly usable as another source for Tier 2 and Tier 3].

But Tier 1 is not enough -- it is necessary to address Tier 2 and Tier 3 as well, and the Web3 Foundation RFP questions clearly illustrate the inadequacy of stopping with raw indexes and the need for deep indexing.  We believe a strong collaborative mindset is required to fully address these questions and numerous others the Substrate ecosystem asks comprehensively.

The goal of this proposal is to:
* address the Web3 Foundation's specific deep account analytics questions fully, specifically with three-tiered deliverables at Tier 1+2+3, using widely used tools of Google BigQuery and Apache Superset
* demonstrate a viable financial path for our own maintainence for the above solution within the Web3 Foundation grant structure and the structure of the Polkadot Treasury using the Polkadot Data Bounty system
* form an alternate kind of deliverable for Web3 Foundation other than code that everyone can use: _datasets_ and _dashboards_ that everyone can use

### Project Details

The "Account References" questions of
* Which transactions/accounts were responsible for the reserved balance in an account?
* What modules currently depend on consumers, providers, and sufficients reference counters for a certain account, and which transactions introduced/removed those references?
* What are the pallets responsible for reserves/holds and locks/freezes on an account?

are largely answerable through traces.  At the heart of every
blockchain is a state transition function, where the state transitions
for any block are commonly called "traces" in blockchain engineering.
Substrate makes every trace visible through a
[state_traceBlock](https://polkadot.js.org/docs/substrate/rpc/#traceblockblock-hash-targets-optiontext-storagekeys-optiontext-methods-optiontext-traceblockresponse)
RPC function, which outputs every storage key-value map change in a
re-execution of a single block.  This RPC call is considered "unsafe"
as it requires compute time to regenerate.

Polkaholic.io's indexer, when traces are available from an internal archive node, fetches traces and exposes them in the block explorer.
For example, here is the trace for [Polkadot Block 15723663](https://polkaholic.io/trace/polkadot/15723663/)

<img src="https://cdn.polkaholic.io/screenshots/polkadot-trace.png"/>

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

<img src="https://cdn.polkaholic.io/screenshots/substrate-etl-trace.png"/>

In Milestone 1, we will provide a 3 tier solution to deep account analytics on Account References.  Here is how the 3 tiers:

* Tier 1 requires *raw indexing* of traces.  Traces are critical to Colorful Notion's [XCM Indexing](https://polkaholic.io/xcmtransfers?xcmType=xcmtransfer) and are important for parachain engineers to understand how the execution of a block, and are critical to the model producers, consumers and sufficients.   As raw traces form a very large dataset, to keep storage costs low, the indexer filters out pallets section/method that and exposes them in `crypto_polkadot.traces0` ([see schema](https://github.com/colorfulnotion/polkaholic/blob/main/substrate/schema/substrateetl/traces.json)).  In particular, given how central accounts and native and non-native tokens are to blockchain usage, the indexer further decodes accounts and asset state into many additional columns like free, reserved and frozen.  

* Tier 2 requires *deep indexing* of the above trace data, to analyze how certain attributes changed in [System:Account](https://docs.google.com/spreadsheets/d/1jywN--pONmJqmbuASWDLNdBvsB86OuizJnQ72ijAXSU/edit#gid=704412439) holding account reference counters, account balance reserved provenance (see: https://docs.substrate.io/reference/account-data-structures/).  We have some preliminary work on this (see [this sheet](https://docs.google.com/spreadsheets/d/1gZZOvH4BYk2QYlhzz9AvRxiR6mcYtgRz9VZluz1lwuU/edit#gid=1313769699)) and proved that, yes, it is indeed possible to uniquely identify the extrinsic id (but not call id) for every trace, and that the changes can be identified to build a new dataset every day.

* Tier 3 requires situating the above dataset into an Account Analysis Dashboard of [Apache Superset](https://analytics.polkaholic.io/dashboard/list/).   Here we have a WASM Contract Explorer prototype:

<img src="https://cdn.polkaholic.io/screenshots/deep-account-dashboard.png"/>

We envision Milestone 1 focussed on Account References and then extended in Milestone 2 to Democracy+Staking deep analysis.  This will result in an Account Analysis Dashboard, with 3 or more account tabs exploring:

* "Account References" concerning deep indexing developed in Milestone 1

* "Democracy" concerning deep indexing about [Democracy:VotingOf](https://docs.google.com/spreadsheets/d/1hdvW5Kw3gwBnXqFskALX1_szdTf4pYL-SlbOqJ8tlO0/edit#gid=1803912396) developed in Milestone 2

```
{"direct":{"delegations":{"capital":0,"votes":0},"prior":[0,0],"votes":[[113,{"standard":{"vote":"0x81","balance":10000000000}}],[119,{"standard":{"vote":"0x82","balance":50000000000}}]]}}
```

OR

```
{"delegating":{"balance":15000000000,"conviction":"Locked4x","delegations":{"capital":0,"votes":0},"prior":[0,0],"target":"15ZvLonEseaWZNy8LDkXXj3Y8bmAjxCjwvpy4pXWSL4nGSBs"}}
```

* "Staking" concerning deep indexing about Staking and Nomination Pools, with the added complexity of stashing controller/accounts, developed in Milestone 2.

It is straightforward to link these dashboards directly to polkaholic.io based the key (accountID/extrinsicID/...) and add filtering on any column present in the table with Apache Superset.

Any UI can then link to this dashboard with the account ID, and the dashboard can link back to a block explorer.

Once the dataset is made available, end users can build charts and dashboards with the same ease as they do in Excel or Google Sheets.

The community dashboard can be used in the same way as Dune Analytics dashboards serves the EVM community.


### Ecosystem Fit

While this proposal does not explicitly require collaboration on any of the 3 tiers, our intention is to:
1. set up a foundation where the Web3 Foundation could ask other teams to contribute datasets (Tier 2) and build dashboards (Tier 3) in the same way.
2. set up a repeatable model between Web3 Foundation and a Polkadot Data Alliance support data-oriented research (W3F) and ongoing maintenance ([Polkadot Data Bounty](https://docs.google.com/document/d/1fA5ARHy-frzgZC66rniKZ5o7CSbDvCTkS--kWaMzuMs/edit#)) with child bounties 

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
* Winter/Spring 2023: Developed substrate-etl and XCM Global Asset Registry.
* May 2023: Google included Polkadot + Kusama in [Google Public Datasets](https://cloud.google.com/bigquery/public-data).

## Development Roadmap :nut_and_bolt:

This proposal aims to deliver on the three-tier architecture outlined in two milestones:

* Milestone 1 will develop `System:Account` deep analytics.
* Milestone 2 will develop `Democracy`, `Staking` and `NominationPools` deep analytics.

For each Milestone, there are 3 kinds of deliverables corresponding to the 3 tiers:
- 1. Raw indexes, in the form of BigQuery datasets which are delivered 
- 2. Deep indexes, in the form of BigQuery dataset
- 3. Dashboard publication, in the form of Apache Superset Dashboard

All raw and deep indexing code will be made open source within the polkaholic and substrate-etl repo.

### Overview

- **Total Estimated Duration:** 4 months
- **Full-Time Equivalent (FTE):**  300 FTE hours [100 USD/hr]
- **Total Costs:** 30,000 USD

### Milestone 1 — Three Tier Deep Account Analytics on Account References

- **Estimated duration:** 8 weeks (ending 8/31/23) 
- **FTE:**  150 FTE hours [100 USD/hr]
- **Costs:** 15,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | GNUv3 - polkaholic + substrate-etl repo  |
| 0b. | Documentation   | Provide README on construction of 1+2+3 |
| 0c. | Manual Testing Guide | Manual testing guide with steps for using the application, with examples including expected inputs and outputs |
| 1.  | Raw Indexing       | substrate-etl:crypto_polkadot.traces0 for 7/1/23 - 8/31/23  |
| 2.  | Deep Indexing      |  substrate-etl:substrate.accountreference0 and supporting datasets  |
| 3.  | Dashboard Publication | Superset dashboard tab: "Account Reference"  |

We will take this opportunity to deliver raw indexes on traces, deep indexes on account references and a dashboard on Account References hosted at https://analytics.polkaholic.io.

Indexing + Dashboard Publication must be able to support deep analysis of **Account References**:
* Which transactions/accounts were responsible for the reserved balance in an account?
* What modules currently depend on consumers, providers, and sufficients reference counters for a certain account, and which transactions introduced/removed those references?
* What are the pallets responsible for reserves/holds and locks/freezes on an account?


### Milestone 2 — Three Tier Deep Account Analysis of Democracy+Staking+Nomination Pools 

- **Estimated duration:** 8 weeks (ending 10/31/23)
- **FTE:**  150 FTE hours [100 USD/hr]
- **Costs:** 15,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | GNUv3 - polkaholic + substrate-etl repo  |
| 0b. | Documentation   | Document substrate-etl README on 1+2+3  |
| 0c. | Manual Testing Guide | Manual testing guide with steps for using the application, with examples including expected inputs and outputs |
| 1.  | Raw Indexing          | BigQuery Index substrate-etl.crypto_polkadot.traces0 9/1/2023-10/31/23 -- stashing accounts |
| 2.  | Deep Indexing         | BigQuery substrate-etl:substrate.democracy_* substrate-etl:substrate.staking_* substrate-etl:substrate.nomination_pools_*  |
| 3.  | Dashboard Publication | Superset dashboard tabs: "Democracy", "Staking", "Nomination Pools" |

We will take this opportunity to address the complexity of stashing accounts by:
* Deep Indexing.  Using the above tables in the views referencing  `storage_staking_*, storage_nominationpools_*` tables
* Dashboard Publication.  Using the above, we can develop dashboards for Democracy+Staking+Nomination Pools

Indexing + Dashboard Publication must be able to support deep analysis of Democracy and Staking/Nomination Pools pallets:
* Democracy: Which accounts have delegated OpenGov votes to an account or to which accounts the account in question has delegated their votes to for each track?
* Staking/Nomination Pools: Who are all the nominators that nominated Validator X? (an inverse mapping basically of staking.nominators from validator -> nominators)  Who are the top 10 nominators with the highest APR, and which validators do they have in common?

## Future Plans

Broadly, this proposal sets up a path for the Web3 Foundation to have Polkadot Data Alliance contributors deliver results for the Web3 Foundation itself and the community in the following ways:

1. within the three-tier architecture, Polkadot Data Alliance contibutors can collaborate with Web3 Foundation and others in the Substrate community using raw indexes, published deep indexes, or building and extending dashboards.  Our technical choice for collaboration is BigQuery and Apache Superset but other choices may be equally viable or appropriate, by other teams.  

2. with the [Polkadot Data Alliance Bounty](https://docs.google.com/document/d/1fA5ARHy-frzgZC66rniKZ5o7CSbDvCTkS--kWaMzuMs/edit#) and the [Web3 Foundation Maintance Grants](https://github.com/w3f/Grants-Program#hammer_and_wrench-maintenance-grants), there is a clear path to support both software maintainence _and_ hosting / data indexing infrastructure 

In followup work, we would expect to address the 3 tiers:
* raw indexing: cover traces on a regular basis defined in child bounties
* deep indexing: support the dataset deliverables on a regular basis 
* dashboards: maintain published dashboards developed, and host the Apache Superset

We would welcome the challenge of doing followon high impact work, but hope that others in the Polkadot Data Alliance can follow this model as well.

We propose a child bounty to host Apache Superset instance at https://analytics.polkadot.network or transfer this responsibility to a parent bounty curator.

## Additional Information :heavy_plus_sign:

We request suitable Web3 Foundation members be identified as parent
and child bounty curator candidates, and that the charter for the
Polkadot Data Alliance be developed in a collaboration with Parity.
The Polkadot Data Alliance charter is [here](https://docs.google.com/document/d/1fA5ARHy-frzgZC66rniKZ5o7CSbDvCTkS--kWaMzuMs/edit#).

We do not believe our participation (or anyone else's participation)
in a Polkadot Data Alliance in providing deliverables at any of the
three tiers eliminates the possibility of doing further data
processing for other sources of additional revenue.  Our goal is to be
self-sufficient and not dependent on W3F Grants or Treasury funding,
but we hope our value and commitment to sharing and collaboration is
recognized by the community so we can be productive high impact
contributors.



