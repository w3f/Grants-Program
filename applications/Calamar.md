# Calamar

- **Team Name:** TopMonks
- **Payment Address:** 32NoFbB4x8bZ7YNvjra1DUYcje2B2XQwP3 (BTC)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

This application is a response to a [Multi-chain Block Explorer](https://github.com/w3f/Grants-Program/blob/master/rfps/under_development/multi-chain-block-explorer.md) RFP

### Overview

Calamar is a block explorer for Polkadot and Kusama relay chains and their parachains, that uses Subsquid API for data fetching.

The idea for another explorer has emerged during the dotsama events in Amsterdam and Prague. The team of TopMonks company's Blockchain Studio has gathered feedback from friendly projects such as HydraDx and KodaDot among others.
We have applied for and won the bounty from Subsquid in the Polkadot Hackaton: North America edition, that requested developing a block explorer. Our submission: https://devpost.com/software/calamar

We call the app Calamar, as it is in line with the Subsquid identity.

It is available here:
[https://calamar.app](https://calamar.app) \
and we manage the code here:
[https://github.com/topmonks/calamar](https://github.com/topmonks/calamar)

Based on the positive feedback we would like to push the project further and bring more valuable features for the users, closely cooperating with the [Subsquid](https://subsquid.io) team and gathering an ongoing feedback from the users.

While developing Calamar, we focus on UI and UX friendliness so that users enjoy dotsama chains exploring, as well as relevance of displayed data.

### Project Details

Calamar explorer will allow users to search and display various items and statistics.

The plan is to have at least these features implemented:

#### Homepage
Homepage with google-like search box and with links to [chain dashboards](#chain-dashboards).

![Home page](https://res.cloudinary.com/topmonks/image/upload/v1661767637/calamar/homepage.png)

#### Universal search
Search where you don't have to know which chain the searched item belongs to. You just put the hash into the search box and the explorer will take care of the determining on which chain it is. This is going to be an addition to the ability to restrict search to a specific chain.

#### Block detail
Display block's data and its extrinsics, transfers, calls and events.
- searchable by hash and height

#### Extrinsic detail
Display extrinsic's data, its calls and events.
- searchable by hash and id

#### Call detail
Display call's data, and its events.
- searchable by id

#### Event detail
Display event's data
- searchable by id

#### Search extrinsics and events by name
Display a list of matching extrinsics and events by name.
- full-text search - doesn't require exact name, substring is sufficient, case insensitive

#### Account detail

As we are gathering feedback, one of the most important features for the users seems to be the account overview where users can find information about their balances and transactions across all chains.

- searchable by public key or chain-specific address
- display
  - account's name if set
  - owned assets accross all listed chains, including dollar values and graphs for visualization.
  - list all chain-specific addresses
  - list all related transfers, XCM transfers, extrinsics and calls

![Account page](https://res.cloudinary.com/topmonks/image/upload/v1672668761/calamar/account2.png)

#### Chain dashboards

Each chain will have own dashboard with statistics and listing of latest blocks, latest transfers, top holders, etc. It makes the explorer more useful even for users who are not searching for specific items.

![Statistics page](https://res.cloudinary.com/topmonks/image/upload/v1661765199/calamar/statistics.png)

#### Cross-chain transfers
Important feature is to create good UI for displaying information about XCM teleports and other cross-chain transfers where you can easily see all involved sides (chains, accounts) and other useful data.

- XCM transfer detail

![XCM transfer page](https://res.cloudinary.com/topmonks/image/upload/v1662492906/calamar/xcm-transfer-detail.png)

- in transfers table

![Transfers table](https://res.cloudinary.com/topmonks/image/upload/v1662492938/calamar/xcm-transfers-list.png)

### Technology stack

Typescript, React, GraphQL

### Ecosystem Fit

- Calamar will help the community keep track of what's happening on the network, including XMC transfers, account overviews and chains statistics.
- Target audience are Dotsama developers, investors and ecosystem users.
- Calamar users will have opensource user-friendly UI prepared to use with Subsquid API.
- There are projects with similar functionality like Subscan or Polkaholic. Instead of trying to reinvent the wheel, we won't build our custom data indexing solution and rather rely on the powerful framework and API from Subsquid which is still evolving and has own dedicated development team. We focus on good UI and UX. Our solution will be aware of multichain environment (XCM transfers, cross-chain search, multichain account view). And the code will be opensource.

## Team :busts_in_silhouette:

### Team members

- Antonina Nesmelova - developer
- Richard Jedlička - developer
- Radek Jakl - designer
- Jan Lopusek - project manager

### Contact

- **Contact Name:** Jan Lopusek
- **Contact Email:** jan.lopusek@topmonks.com
- **Website:** https://topmonks.com/ , https://blockchain.topmonks.com/

### Legal Structure

- **Registered Address:** Struhařovská 2931/9, 141 00, Praha 4, Czech Republic
- **Registered Legal Entity:** TopMonks s.r.o

### Team's experience

All of our team members developed the first version of Calamar explorer.

Antonina Nesmelova is young and enthusiastic web-developer with 3,5 years experience with web applications development, including a year and a half of experience in the world of crypto: development of dApps and smart contracts.

Richard Jedlička has several years of expertise in web applications full-stack development.

Radek Jakl invented the design for Calamar. He has many years of experience in graphics and UI/UX design.

Jan Lopusek co-founded the startup studio for TopMonks software house. He is experienced project manager and business developer

### Team Code Repos

- https://github.com/topmonks
- https://github.com/topmonks/calamar
- https://github.com/uiii
- https://github.com/antonina-nesmelova

### Project references

- https://calamar.app/
- https://about.meetvers.io/, https://app.meetvers.io/
- https://brute.cz/
- http://jaklradek.com/

### Team LinkedIn Profiles

- https://www.linkedin.com/in/antonina-nesmelova-3a8365149
- https://www.linkedin.com/in/richardjedlicka/
- https://www.linkedin.com/in/jaklradek/
- https://www.linkedin.com/in/jan-lopusek/

## Development Status :open_book:

Current version of Calamar is running on https://calamar.app

It is mostly a result of our participation in hackaton as an implementation of the bounty declared by Subsquid team. See [Additional Information](#additional-information-heavy_plus_sign).

For now, it allows users to:
- search block by hash and height display its parameters and extrinsics
- search extrinsic by hash and display its parameters and events
- search account by address and list its extrinsics
- search extrinsics and events by their exact name.

While it may seem to be already working explorer it has only basic features and lacks many of the important or useful ones. See [Milestone 1](#milestone-1--core-functionality) for details.

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 11 weeks
- **Full-Time Equivalent (FTE):** 1
- **Total Costs:** $27,500

### Milestone 1 — Core functionality

- **Estimated duration:** 4 weeks
- **FTE:** 1
- **Costs:** $10,000

Even though we have the already working application, there are still many things missing. Some of them prevent the users from using Calamar fully as the main explorer. We need to first assure the correct core functionality, display all the meaningful data which are retrievable without further complex processing, improve design and UX and integrate more into the Polkadot ecosystem.

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide inline documentation of the code where necessary, technical description of how to run the own instance of Calamar and tutorials how to use the application from the user perspective. |
| 0c. | Testing Guide | We will provide end-to-end tests covering UI functionality. |
| 0d. | Docker | We will provide a Dockerfile(s) for testing and running own Calamar instance. |
| 0e. | Article | We will publish an article that explains what was done as part of the grant. |
| 1. | Fix usage blockers | Fix things which block the app's real usage <ul><li>search results are not shareable due to missing info about the chain in the URL</li><li>extrinsic's args are missing</li></ul> |
| 2. | Add related items listings | Add missing related items listing to detail pages<ul><li>block's extrinsics, call and events</li><li>extrinsic's calls</li></ul>
| 3. | Add call detail page | See [Call detail](#call-detail). |
| 4. | Add event detail page | See [Event detail](#event-detail). |
| 5. | Responsiveness | Improve overall responsiveness for mobile devices especially of item tables and extrinsics/event args. |
| 6. | Extrinsics/event args displaying improvements | Add args display options: raw/json, human readable. Find a better way to show nested properties' data types. |
| 7. | Items count | Current implementation doens't show the total number of searched items. We would like to retrieve the items count and display it properly. |
| 8. | Extrinsic/event case-insensitive search by name | Add ability to search extrinsics and events by their name case-insensitive. |
| 9. | Account address parsing in events args | Detect account address in event args and link it to the account detail (chain detected automatically). |
| 10. | Website polishing | Add useful information to the website (footer with team logos, contact information, terms, etc.). |
| 11. | Polkadot.js integration | Create a PR to integrate links to the Calamar Explorer into Polkadot.js app. |

### Milestone 2 - Account detail & Cross-chain transfers

- **Estimated duration:** 4 weeks
- **FTE:** 1
- **Costs:** $10,000

In this milestone we are going to improve [account detail](#account-detail) page and replace latest extrinsics page with proper [dashboard](#chain-dashboards) page for each chain.

*Subsquid (data provider) might not support each feature for all chains at the time of the implementation, so the features will be implemented universally to support each chain whenever the data are provided in the future.*

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide inline documentation of the code where necessary and user documentation for new features. |
| 0c. | Testing Guide | We will provide end-to-end tests covering UI functionality. |
| 0d. | Docker | *N/A - will be provided by the first milestone.* |
| 0e. | Article | We will publish an article that explains what was done as part of the grant |
| 1. | Account / Balance overview | Overview of owned assets accross all listed chains with chain specific addresses, including dollar values |
| 2. | Account / Balance charts | Chart visualization of balance by assets and by type (reserved, tranferable, ...), including dollar values |
| 3. | Account / Transfers list | Add account's transfers list table |
| 4. | Account / Calls list | Add account's calls list table |
| 5. | Account / Identity info | Add account's identity information if set (name, twitter, ...) |
| 6. | Chain dashboard / Stats | Show chain's stats (blocks count, signed extrinsics count, total issuence, transfers count, holders count, total issuence, staked value, inflation rate, validators count) including USD values |
| 7. | Chain dashboard / Asset value chart | Chart visualization of asset value by type (staked, circulating, other) |
| 8. | Chain dashboard / Latest blocks | Add latest blocks list table |
| 9. | Chain dashboard / Latest transfers | Add latest transfers list table |
| 10. | Chain dashboard / Top holders | Add top holders list table |


### Milestone 3 - Universal search & Chain dashboards

- **Estimated duration:** 3 weeks
- **FTE:** 1
- **Costs:** $7,500

In this milestone we are going to implement [universal search](#universal-search) and one of the most requested features: [cross-chain transfers](#cross-chain-transfers) detection.

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide inline documentation of the code where necessary and tutorials on how to use new features. |
| 0c. | Testing Guide | We will provide end-to-end tests covering UI functionality. |
| 0d. | Docker | *N/A - will be provided by the first milestone.* |
| 0e. | Article | We will publish an article that explains what was done as part of the grant |
| 1. | Universal search | Search items through all the chains without the knowledge where it belongs. See [Universal search](#universal-search). |
| 2. | XCM transfers and teleports | Detect cross-chain transfers and display relevant information of involved chains and accounts: from chain, to chain, relayed at chain (reserve), sender, beneficiary, etc. Also add their listings to account detail and chain dashboard. See [Cross-chain transfers](#cross-chain-transfers) for more. |

## Future Plans

There is a huge potential for future improvements which the Polkadot's community can benefit from.

As developers of most parachains implement their own custom modules/pallets it opens the opportunity to cooperate and customize Calamar explorer with UI/UX components and logic tailored to their needs.

It relates to various XCM transactions which makes it even more complex and the more types will our explorer support the more it makes the users' lives easier.

Another requests which came to us are:
- supporting EVM and WASM smart contracts
- exporting transactions for accounting and taxation purposes
- displaying NFTs collections and crowdloans rich data

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Personal recommendation

- We participated and won a bounty in [Polkadot Hackaton: North America Edition](https://polkadot-na.devpost.com/)
  - bounty: https://github.com/subsquid/bounties/issues/1
  - our submission: https://devpost.com/software/calamar
- We are cooperating with [Subsquid team](https://subsquid.io) that provides us data
