# Open Grant Proposal

* **Project Name:** MathComitia
* **Team Name:** MATH team
* **Payment Address:** Ethereum address: 0x00f57c080d7746b607708699bc9c3af289a0b56a

## Project Overview :page_facing_up:

### Overview

  * MathComitia is a decentralized discussion board and light-weight community voting system based polkadot address and identity.
  * MathComitia is open source project which can be used by all substrate based chain as community discussion and voting system.
  * MathComitia is based polkadot address and identity system, and will use NFT on Kusama as reward system.
  * MathComitia is helpful to dappstore such as MathDappStore and PolkaProject etc which will allow community vote on legitimate contact, webpages and infos of projects. It can also be used as a light-weight voting system for product features and proposal discussions for substrate based chains such as MathChain.

### Project Details

MathComitia is a dapp based on VueJS frontend / PHP backend, and can be connected to any substrate based chains.

#### Design Overview

<img src="http://qiniu.eth.fm/2021-04-15-MathComitia-202104.png" width="900">

#### Mockups/designs of UI components

1) Homepage

This page will display all in-progress items, and also allow user to login / submit / search / filter / order / vote.
If the login address is space admin, he/she can also confirm / ignore the item.
All status change operations need user submit signed messages and will be verified by the server backend.

<img src="http://qiniu.eth.fm/2021-04-15-1-index.jpg" width="900">

2) Closed Items

This page will display all closed items and the status (confirmed or ignored). It will also show the contributors list who are the submitter whose submit item has been confirmed. They will be rewarded a NFT issued from RMRK system which will also be displayed aside.

<img src="http://qiniu.eth.fm/2021-04-15-2-closed.jpg" width="900">

3) Detail

The page will show the details of the submitted item including title / details / submitter. It also allows login user to leave comment, and will display all comments in the below which will order by identity and create date.
User can also vote on this page.
On the right side will display all votes, and will link to the block explorer of the address.

<img src="http://qiniu.eth.fm/2021-04-15-3-detail.jpg" width="900">

4) Submit

The page allow user fill in the title and details for a new item. It will also allow URL params so that widget from pages outside the system and pass title or details to this form directly. This is helpful when someone need to report legitimate information from other site.

<img src="http://qiniu.eth.fm/2021-04-15-4-submit.jpg" width="900">

The static content on the system will support multi-languages.

#### Overview of the technology stack to be used

We will try to keep the technology stack simple so that it can be easily setup.

  * Frontend: VueJS
  * Wallet Connection: PolkadotJS
  * Backend: PHP
  * Database: MySQL

#### What your project is not or will not provide or implement

  * This project will not store user information. All user account is address based.
  * This project will not target for on-chain governance integration.

### Ecosystem Fit

* Where and how does your project fit into the ecosystem?
  It will be used as polkaproject.org legitimate information report and vote system at the first version. Any user has polkadot wallet can participate the system.

* Who is your target audience (parachain/dapp/wallet/UI developers, designers, your own user base, some dapp's userbase, yourself)?
  At the first stage it will target to solve the needs of PolkaProject and MathDappStore as legitimate information report system, and for MathChain as community feature requesting voting system. But in a long term we think it is useful to all parachain communities and dapp communities.

* What need(s) does your project meet?
  Light-weight voting system based on polkadot address.

* Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?
  To the best of our knowledge, there is no project similar to this project in Polkadot ecosystem. In Ethereum there is Snapshot project, but we think combine with Polkadot multi-chain and identity system, MathComitia will be more useful than Snapshot.

## Team :busts_in_silhouette:

### Team members

* Eric Yu: team lead, product manager
* PK Zhao: backend developer
* Y Tang: frontend developer

### Contact

* **Contact Name:** Eric Yu
* **Contact Email:** ericyu@mathwallet.org
* Website https://mathchain.org

### Legal Structure

* **Registered Address:** 3 FRASER STREET #05-25 DUO TOWER SINGAPORE
* **Registered Legal Entity:** MATH GLOBAL FOUNDATION LTD.

### Team's experience

MATH team is the team building MathWallet and MathChain.

MathWallet is a multi-platform (mobile/desktop/hardware) universal crypto wallet that enables token storage of 60+ chains including BTC, ETH, Polkadot, Filecoin, EOS, Solana, BinanceChain, Cosmos etc, supports cross-chain token exchange, multi-chain dApp store and operates nodes for POS chain. Our investors includes Fenbushi Capital, Alameda Research, Binance Labs, FundamentalLabs, Multicoin Capital, NGC Ventures. Visit mathwallet.org for more information.

MathChain is the Layer 2 blockchain based on Substrate.
Based on the 1M+ MathWallet users, MathChain is focusing on smart wallet, massive adoption, go-to-market and inclusive blockchain applications and will be a decentralized permissionless parachain powered L2. MathChain has been selected as one of the ‘Parity Substrate Builders Program’ projects. Visit mathchain.org for more information.

### Team Code Repos

* https://github.com/mathwallet/MathComitia

## Development Roadmap :nut_and_bolt:

### Overview
* **Total Estimate Duration:** 1 month
* **Full-time Equivalent(FTE):** 2.5
* **Total cost:** 5000 USD

### Milestone 1 - create fundamental environment for ELC
* **Estimated Duration:** 1 month
* **FTE:**  2.5
* **Costs:** 5000 USD

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | GNU General Public License v3.0 / Apache 2.0 |
| 0b. | Documentation | We will provide both inline documentation of the code and a tutorial of deployment of the system. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. |
| 0d. | Article/Tutorial | In the guide, we will describe explains how a user can use MathComitia. |
| 1. |  UI | Complete the UI design of the dapp. |
| 2a. | Frontend | Develop frontend based on VueJS. |
| 2b. | Backend | Develop backend based on PHP and MySQL |
| 3. |  Deploy | Launch the site and complete deployment steps documentation. |

## Future Plans

* We will work with PolkaProject to demonstrate the power of the system, collect feedback and refine.
* In a long term, we will make this system open to all protocols in Polkadot ecosystem, and allows anyone can create a light-weight voting system based on polkadot address (or substrate based chains) in 1 min.

## Additional Information :heavy_plus_sign:

How did you hear about the Grants Program? Web3 Foundation Website / Medium / Twitter / Element / Announcement by another team / personal recommendation / etc.

* Twitter



