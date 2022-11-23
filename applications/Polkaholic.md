# Polkaholic.io's Multi-Chain Substrate Block Explorer

- **Team Name:** Colorful Notion
- **Payment Address:** Polkadot 13rTinCWgc38a2wZzme28dFbViQraCowTRjQqFLEWwdMTvFW
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2
- **Status:** [Terminated](https://github.com/w3f/Grants-Program/pull/1286#pullrequestreview-1188260010)

## Project Overview :page_facing_up:

[Polkaholic.io](https://polkaholic.io) is a Substrate block explorer with high parachain coverage (45+ chains) and is developing multi-chain functionality for the next generation of Polkadot users.  Key new multi-chain features (see [Why Polkaholic?](https://polkaholic.io/features)) not widely available in other block explorers:
* monitoring accounts across chains with asset valuations in real-time
* performing historical analysis across chains
* monitoring XCM transfers across chains

The Polkaholic.io team would like to seek Web3F Level 2 funding for high availability APIs powering the Polkaholic.io UI.  These APIs will support Polkadot parachain and dapp developers, and will be used in the Polkaholic.io UI to support useful multi-chain block explorer features for the next generation of Polkadot users:
* Support Polkadot defi users doing multi-chain transfers in and out of any chain
* Support Polkadot dapp and parachain developers doing real-time multi-chain analysis with standardized asset types
* Support Polkadot wallet developers with multi-chain APIs

It is essential for a public block explorer to be trusted, and while Polkaholic.io code is released under a GPLv3 license at:
* https://github.com/colorfulnotion/polkaholic/
it is difficult to trust that the indexing is 100% correct by simply auditing the above code and spot checking a few representative results.
The approach Polkaholic.io has taken is an "indexing" approach, where all chain activity is analyzed and stored with additional information (e.g. asset values in USD) in Google Cloud's BigTable/BigQuery/mysql.  This is complementary to the approach taken by polkadot.js.org's reference app, where a single endpoint is probed in real-time.

However, for Polkadot users to *trust* Polkaholic.io's index, all indexed data must be *verifiable* to the fullest extent possible, which we propose to do by augmenting every Polkaholic.io page with:
* (a) browser-based JS that _verifies_ the results shown in any page as being the same as the indexed data using  one or more WS endpoints
* (b) server-side JS that continuously (randomly) _verifies_ any key object ( account, block, tx, chain etc. ) returned in any API call against one or more WS Endpoints
Currently, every page on Polkaholic.io shows how to use the Polkaholic.io API to derive the data shown on the page, which we have taken as a design principle.  
We propose to take this further, by publishing the code of (a)+(b) alongside these same API calls.  If any verification fails, the failure can be automatically logged and used to improve the index (rather than, say, waiting for users to report data issues, or for developers to point out bugs with the indexer code).  All chain's random checks can be published as metadata with the chain.  As verifications pass and Polkaholic.io approaches 100% verifiability, users should increase trust in the Polkaholic.io index.

### Project Details

To illustrate Polkaholic.io's fully working multi-chain UI + APIs, we tabulate 5 representative UI / API calls here:

#### Chains

![Chains UI Screenshot](https://cdn.polkaholic.io/screenshots/chains.png)

* [Chains UI URL](https://polkaholic.io/chains)
* [Chains API Sample call](http://api.polkaholic.io/chains)
```
curl -H "Authorization: YOUR-API-KEY" "https://api.polkaholic.io/chains"
```

* [Chains API Docs](https://docs.polkaholic.io/#chains)

#### Account

![Account UI Screenshot](https://cdn.polkaholic.io/screenshots/account.png)

* [Account UI URL](https://polkaholic.io/account/121Rs6fKm8nguHnvPfG1Cq3ctFuNAVZGRmghwkJwHpKxKjbx#extrinsics)
* [Account API Sample call](https://api.polkaholic.io/account/121Rs6fKm8nguHnvPfG1Cq3ctFuNAVZGRmghwkJwHpKxKjbx)
```
curl -H "Authorization: YOUR-API-KEY" "https://api.polkaholic.io/account/extrinsics/0x2c8feeab5bd9a317375e01adb6cb959f1fea78c751936d556fa2e36ede425a47"
```
* [Account API Docs](https://docs.polkaholic.io/#get-account) |

#### Account XCM Transfers

![Account XCM Transfers Screenshot](https://cdn.polkaholic.io/screenshots/accountxcmtransfer.png)

* [Account XCM Transfers UI URL](https://polkaholic.io/account/121Rs6fKm8nguHnvPfG1Cq3ctFuNAVZGRmghwkJwHpKxKjbx#xcmtransfers)
* [Account XCM Transfers API Sample call](https://api.polkaholic.io/account/xcmtransfers/121Rs6fKm8nguHnvPfG1Cq3ctFuNAVZGRmghwkJwHpKxKjbx)
```
curl -H "Authorization: YOUR-API-KEY" "https://api.polkaholic.io/account/xcmtransfers/0x2c8feeab5bd9a317375e01adb6cb959f1fea78c751936d556fa2e36ede425a47"
```
* [Account XCM Transfers API Docs](https://docs.polkaholic.io/#get-account-xcm)

#### Search XCM Transfers

![Search XCM Transfers Screenshot](https://cdn.polkaholic.io/screenshots/searchxcmtransfers.png)

* [Search XCM Transfers UI URL](https://polkaholic.io/search/xcmtransfers)
* Search XCM Transfers API Sample Call:
```
curl -H "Authorization: YOUR-API-KEY" -X POST -H "Content-Type: application/json" -d '{"startDate":"2022-07-03","endDate":"2022-07-06","chainID":"0"}' "https://api.polkaholic.io/search/xcmtransfers"
```
* [Search XCM Transfers API Docs](https://docs.polkaholic.io/#get-xcm-transfers)

#### Search XCM Messages (under development)

![Search XCM Messages Screenshot](https://cdn.polkaholic.io/screenshots/searchxcmmessages.png)

* [Search XCM Messages UI URL](https://polkaholic.io/search/xcmmessages)
* Search XCM Messages API Sample Call:
```
curl -H "Authorization: YOUR-API-KEY" -X POST -H "Content-Type: application/json" -d '{"startDate":"2022-07-03","endDate":"2022-07-06","chainID":"0"}' "https://api.polkaholic.io/search/xcmmessages"
```
* [Search XCM Messages API Docs](https://docs.polkaholic.io/#search-xcm-messages)

#### Polkaholic.io Backend

Briefly, the backend is organized as follows:
* A Google Cloud stack (BigTable, BigQuery, mysql) is used in 3 regions (US/EU/AS) to store blocks, txs, accounts, XCM transfers, and XCM Messages
* Blocks, traces, EVM logs for all chains are crawled/indexed from WS Endpoints in realtime with followup hourly analysis and backfill processes.  A BigTable and mysql table support each chain, 5 BigQuery tables support each major type of object (extrinsics, transfers, xcmtransfers, xcmmessages, evmtxs)
* XCM Transfers are matched in real time, currently based on asset + address matching

### Ecosystem Fit

The Polkadot ecosystem benefits from users being able to transact with their assets on multiple chains easily, through teleporting and the new XCM Messaging system enabling "remote control" over asset states on other parachains.    There are many block explorers in the ecosystem (eg subscan.io) but these were architected for users using interacting with a _single_ parachain rather than the dozens of parachains that exist today which are rapidly adding XCM transfers.  As users use their wallets to manage their assets on a greater number of parachains, users will need a block explorer, dapps, wallets that takes **multi-chain** account views and multi-chain transfers as central to their UI.  Polkaholic.io aims to provide the UI and APIs for the ecosystem to support these multi-chain views.

Currently, there's no easy way to track XCM transfers, messages and do XCM analytics between chains for individual accounts and with parachains in aggregate.  Polkaholic.io proposes to change this, by providing a set of APIs to help Polkadot developers.  We believe a suite of verifiable APIs + UI (concerning XCM Messages, XCM Transfers, XCM Analytics) can be used by:
 * parachain devs + dapp devs and wallet devs (XCM Messages, XCM Analytics) -- API, used in polkaholic.io
 * defi/NFT chain users (XCM Transfers) -- UI
Having a open-source reference implementation can also aid other ecosystem participants in their own development and analytics.  
Furthermore, we believe that supplying the concrete **verifiable** browser-based and server-based code will serve as educationally instructive to the Polkadot ecosystem, and be representative of how multi-chain block explorers should work.

## Team :busts_in_silhouette:

### Team members / Contact

- **Contact Name:** Sourabh Niyogi / Michael Chung
- **Contact Email:** sourabh@colorfulnotion.com / michael@colorfulnotion.com
- **Website:** https://polkaholic.io

### Legal Structure

- **Registered Address:** 55 E 3rd Ave, San Mateo, CA 94401, USA
- **Registered Legal Entity:** Colorful Notion, Inc.

### Team's experience

Key engineers Sourabh Niyogi and Michael Chung have developed Polkaholic.io since Fall 2021.  Prior to building Polkaholic.io, Sourabh and Michael worked in decentralized social networking protocol development + privacy-preserving contact tracing (Wolk),  mobile advertising real-time bidding algorithm design and analytics (CrossChannel/MdotM).  Sourabh has founded social + web advertising startups (Social Media Networks) in the SF Bay and spent time doing computational cognitive science and machine vision research at MIT.  Michael hails from UC Berkeley.

### Team Code Repos

- https://github.com/colorfulnotion/polkaholic
- https://github.com/colorfulnotion/docs.polkaholic.io
- https://github.com/sourabhniyogi https://www.linkedin.com/sourabhniyogi
- https://github.com/mkchungs

## Development Status :open_book:

Polkaholic.io is a fully working block explorer that currently shows initial UI + API implementations, including indexing across 40+ chains and 90+ chain pairs.  We are increasing XCM Transfers coverage (95% coverage) and are developing XCM Messages + Analytics Tools.

## Development Roadmap :nut_and_bolt:

As part of Milestone 1 + 2, the Polkaholic team will:
- Add _verifiability_ to all key Polkaholic.io pages: chain, block, extrinsics/txs, account with (a) browser-based JS and (b) server-side JS  
- Add continuous _verifiability_ using server-side JS and publish % of verification checks per chain as chain-specific metadata
- Extend polkaholic.io functionality with XCM Transfers + Message Tools, with _verifiability_ of DMP, UMP, HRMP XCM transmissions
- Ensure the polkaholic.io repo be started with an empty Google Cloud project
- Publish blog posts on the XCM Transfers and Messages Tooling

### Overview

- **Total Estimated Duration:** 12 weeks
- **Full-Time Equivalent (FTE):** 2.0 FTE
- **Total Costs:** 30,000 USD.

The following sheet details our proposed deliverables, organized by Site Area and Verification Function:

[https://docs.google.com/spreadsheets/d/1w9xIhyHgB05PgXEVDMyazRYkYvBD3ETaIbWb8X2DKYc/edit#gid=323796891](https://docs.google.com/spreadsheets/d/1w9xIhyHgB05PgXEVDMyazRYkYvBD3ETaIbWb8X2DKYc/edit#gid=323796891)

* **Section 1** describes how site areas on polkaholic.io map to a set of verification functions that will verify polkaholic.io web page / API data
* **Section 2** describes how _Verification Functions_ (prioritized based on perceived audience importance) will be delivered in Milestone 1 + 2 + 3

For each *verification function*, there will be two parallel deliverables:
1. _Browser-based code_: UI will have a "Verify" button in the area  (same as "curl" call at the bottom of most pages) showing the code and running the code
2. _Server-side code_: A continuous process will randomly select an object (ie finalized block, extrinsic, event, or account) and run a similar server-side verification function, logging pass/fail results exposed in the UI
The browser-based code can be tested directly on the site, whereas logs of the server-side code will be exposed in the UI (which objects passed vs failed a verification function).

Both forms of code will have almost identical core and rely on the polkadot JS API to do RPC calls like [this](https://github.com/colorfulnotion/polkaholic/blob/main/substrate/test/testGetAuthor.js#L18-L26), which gets the block.


Disclaimer on limitations of verifiability:
* Only chain data can be verified -- asset valuations, TopN account, login information are not feasible.
* Only _observed_ indexed data can be verified -- if the indexer hasn't observed an account (a secret genesis account) through its indexing processes, neither the UI or the continuous verification processes can discover that its missing without specialized reasoning
* Some chain data is incorrect and has been corrected in the polkaholic backend
These are marked "INFEASIBLE".  Otherwise, we have attempted to be as comprehensive as possible, but skip verifiability of EVM chain data (and images) for simplicity / focus reasons, which are marked "NOT ATTEMPTING".
Other practical considerations:
* because traces are computationally expensive, and some verification requires traces (XCM message sending, see Milestone) we cannot run continuous verification except on our own full archive nodes (for which we do 12 or so out of 45+ parachains)
* new parachains often do not expose archival endpoints for some time.

Precise deliverables for each milestone are shown in yellow cells in **Section 2** and are referenced below.

### Milestone 1 — Implement Verifiability for Chain, Block, Extrinsics, Accounts

- **Estimated duration:** 4 weeks
- **FTE:**  2.0 FTE
- **Costs:** 10,000 USD

We will deliver verifiable functions concerning:

* Block Data: `verifyBlockData`, `verifyBlockDataByBlockHash`
* Extrinsics: `verifyExtrinsicParams`
* Events: `verifyEventParams`
* Account Balance: `verifyAccountBalance`
* Account Addresses: `verifyAccountSS58Address`
* Account Transfers: `verifyEventParams_transfer`

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0A. | License | GNUv3 |
| 0B. | Documentation | We will provide: (a) **inline documentation** of the core crawling and indexing processes (b) how to setup polkaholic.io from an empty Google Cloud project |
| 0C.	| Testing Guide	| We will post a Google Doc to show the above verifiable functions in action: (a) For the browser-based Verification functions, this doc will show how each key site area has a "Verify" button which will show the browser-based code and run the check for the key object (block, extrinsic, account for that page), returning whether the test passed or failed; (b) For the server-based Verification functions, we will document how to configure run the continuous verification, how pass/fail are logged in the database and exposed in the UI.
| 1. | UI Augmentation: Browser-based JS for Verifiability | For all site areas shown in Section 2 "Milestone 1" Deliverables, we will add browser-based code to verify results by utilizing Polkadot RPC calls to WS Endpoints.  |  
| 2. | Backend Augmentation: Server-side JS for Verifiability   | For all key pages, we will publish similar server-side code that also verifies results. |  
| 3. | Blog Post | We will publish blog posts that show the results of our UI Augmentations. |  

We expect any observed failures in verification to result in indexing fixes.

### Milestone 2 — Implement Verifiability for Account Rewards, Transfers, Crowdloans (Direct), Proxy + Multisig accounts

- **Estimated duration:** 4 weeks
- **FTE:**  2.0 FTE
- **Costs:** 10,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0A. | License | GNUv3 |
| 0B. | Documentation | We will provide **inline documentation** of the continuous verification processes implemented in Milestone 1 and 2 |
| 0C.	| Testing Guide	| We will augment the Google Doc Testing Guide to show the above verifiable functions in action for the new site areas covered by the verification functions. |
| 1. | UI Augmentation: Browser-based JS for Verifiability | For all site areas shown in Section 2 "Milestone 2" Deliverables, we will add browser-based code to verify results by utilizing Polkadot RPC calls to WS Endpoints.  |  
| 2. | Backend Augmentation: Server-side JS for Verifiability   | For all site areas shown in Section 2 "Milestone 2" Deliverables, we will publish similar server-side code that also verifies results. |  
| 3. | Continuous Testing  | Using the server, Continuous random checks on every chain will be applied, outputting verification rates for each chain indexed. |
| 4. | Blog Post | We will publish blog posts that show the results of our UI Augmentations. |  

Same as above, but executing on a different set of verification functions:
* Rewards - `verifyEventParams_rewards`
* Proxy - `verifyAccountProxy(chainID, pubkey, proxyAddress, proxyType)`
* Multisig accounts - `verifyAccountMultisig`
* Identity information - `verifyAccountIdentity`
* Crowdloans (Direct) - `verifyEventParams_crowdloan`
* EVM Tx - `verifyEVMTx`.
* Trace - `verifyBlockTrace`
* Spec Version - `verifySpecVersion`

Again, we expect any observed failures in verification to result in indexing fixes targeted

### Milestone 3 — Implement Verifiable Timeline UI for XCM Transfers and Messages [UMP, DMP, HRMP]

- **Estimated duration:** 4 weeks
- **FTE:**  2.0 FTE
- **Costs:** 10,000 USD

Similar to the above, in this milestone we develop tooling for XCM Transfers + Messages, which we believe to be central to the success of the Polkadot ecosystem.  We propose to build an XCM Timeline UI with verifiability of XCM transmissions for the 3 "common" XCM protocols (DMP, UMP, HRMP) that are already widely between several dozen parachains.  A prototype timeline can be seen [here](https://polkaholic.io/timeline/0x1102d5d85d5047bcaf61793d7dc6944c813691c1ce9ced54d0b0470ffc475743) and is linked from the [XCM Transfers page](https://polkaholic.io/chains#xcmtransfers) which shows all indexed XCM Transfer.   This XCM Timeline UI and existing XCM Transfer Indexing will be backed by 3 core verification functions that we will develop:

* `verifyXCMMessageDMP`
* `verifyXCMMessageUMP`
* `verifyXCMMessageHRMP`

which each will verify that a extrinsic's XCM message(s) are routed through a relaychain / parachain specific to one of these 3 protocols.  A simple verification process will involve verifying whether the XCM Message from a sending chain has the expected extrinsics/events/traces on receiving and downward chains.   

We will attempt to adapt our XCM Timeline tool to support XCM instructions that contain XCM messages (`transferReserveAsset`, `depositReserveAsset`, `initiateReserveWithdraw`, `initiateTeleport`) within that scope, thus potentially involving more than 2 chains.

We will restrict our XCM timeline tool to DMP, UMP, and HRMP/XCMP and our restrict our scope to existing v2 and v3 messages.

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0A. | License | GNUv3 |
| 0B. | Documentation | We will provide: (a) **inline documentation** of the **XCM Indexer** and how the matching process between sending and receiving chains works for  **XCM Messages**; (b) APIs for retrieving indexed XCM messages + transfers with XCM v2+v3 |
| 0C.	| Testing Guide	| We will augment the Google Doc Testing Guide to (a) explain how the XCM Timeline UI "Verify" functionality can be accessed and used to test each of the 3 XCM protocols in scope; (b) explain how recursive XCM messages within the same scope can be covered. |
| 1. | UI Augmentation: XCM Messages Verifiability | Using the same approach as in Milestone 1 and 2, we will augment the Polkaholic.io with browser-based JS and server-side JS to support verifiability of XCM Results. |
| 2. | Continuous Testing  | Using server-side JS, continuous random checks on recent XCM Messages chain will be applied, outputting verification rates. |
| 3. | Blog Post | We will publish a blog posts that demonstrate the Polkaholic.io XCM Messages and Transfers API and new Timeline functionality. |  

We expect any observed failures in verification and the XCM Timeline tool to result in indexing fixes targeted at XCM specifically.

## Future Plans

Polkaholic.io intends to operate its multi-chain block explorer for Polkadot users long-term, as well as supporting parachain developers and dapp developers with XCM tooling and APIs that just work.  

## Additional Information :heavy_plus_sign:

* Polkaholic directly addresses this RFP for a [Multi-Chain Block Explorer](https://github.com/w3f/Grants-Program/blob/master/rfps/open/multi-chain-block-explorer.md)
* Bill@Web3F recommended we develop a XCM call graph UI, supporting this RFP for [XCM library & tools](https://github.com/w3f/Grants-Program/blob/master/rfps/open/xcm-tool.md)
* We were recommended by Radha to look at the Grants + Treasury Program and through June 2022's Polkadot Decoded event after submitting a polkadot.js PR.
* We welcome active collaborations with parachains, wallet developers, and projects engaged in "remote control" XCM that are interested in XCM Transfers + Messages APIs and related tooling.
