# Analytics Website/Data Platform

* **Status:** Open 
* **Proposer:** [Keegan Quigley](https://github.com/keeganquigley)
* **Teams/People that could deliver the RFP**: @web3go-xyz

## Project Description :page_facing_up: 
On-chain analysis is an important emerging field for the Polkadot & Kusama ecosystems. One can currently use GraphQL to query data via backend services such as [Subquery](https://explorer.subquery.network/) and [Subsquid](https://app.subsquid.io). However, it would be nice to have an easy-to-use front-end with sharable customized dashboards as well. The end result might look similar to [Dune Analytics](https://dune.com/browse/dashboards), a popular data sharing dashboard used in the Ethereum community. Using Dune Analytics, users can quickly create and openly share queries which can then be forked and remixed in a variety of ways by others.

This RFP, based on a [forum post](https://forum.polkadot.network/t/dune-analytics-style-data-service-for-polkadot-kusama/271) by Rob Habermeier, aims to fund a dashboard designed to allow analysts and power-users to interactively query high-quality data, and subsequently create custom charts and visualizations to share metrics with others. Ideally, many projects would create custom dashboards to share data with the Polkadot & Kusama community.

At the moment, building custom dashboards requires quite a bit of effort since the data needs to be fed directly from the parachain via Polkadot.js, or through a custom squid or GraphQL via Subquery. This RFP aims to ease the process of building dashboards and sharing powerful data visualizations.

## Deliverables :nut_and_bolt:
The following items could be potential expected deliverables for the project. Of course, improvements and additions are more than welcome.

- Define a common dataset and data model for Substrate that can be shared for interactive querying use cases such as on Dune Analytics.
- Build a publicly accessible interactive query engine. The platform should allow users to aggregate raw data from relay chains and parachains into SQL databases that can be easily queried. This might include storing data on a postgreSQL database, for example.
- Users should be able to perform simple SQL queries in a matter of minutes, and create visualizations and dashboards using these queries.
- Provide the ability to integrate data from backend services such as Subsquid, Subquery.
- Create UX/UI to make it easier for analysts and power-users to easily query human-readable data and follow key metrics. The front-end could be written in React, AngularJS, Vue, etc.
