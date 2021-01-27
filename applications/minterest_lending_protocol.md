# Open Grant Proposal

- **Project Name:** Minterest
- **Team Name:** Minterest Labs OU
- **Payment Address:** bc1qf04yy5gfr6v7y0229npmxmtulam4dduxh5qn27

## Project Overview :page_facing_up:

### Overview

Minterest is a DeFi lending protocol built on Rust and Substrate. The Protocol connects to asset providers on block chain networks and allows the supplying or borrowing of these assets. The Minterest Protocol enables the creation of token markets with pools of token assets. Each pool algorithmically determines interest rates to actuate borrowing prices based on the supply and demand of the particular asset. Possible accrued interest incentivizes users to balance the pool state.

Lenders and borrowers of a token asset interact directly with the protocol, earning and paying interest. The rates float as demand and supply dynamics vary, similarly to the way traditional forex markets do, without users having to individually manage aspects of lending like settlement, credit checks, maturity dates, interest rates or lodging collateral with a trusted third party.

Each token market is unique to the token asset, whether on the Ethereum, Polkadot or Bitcoin networks and includes tokens such as Ether, US dollar pegged stablecoins like Dai, or Bitcoin itself. Each market implements a unique and tweakable economics model to balance the pool. Adding new pools on demand requires minor changes in the Protocol code, especially if a bridge application is available. Given the decentralized nature of the protocol, each token market contains a transparent, non-violable and publicly available ledger which records each transaction and the applied interest rates.

The Protocol utilises Polkadot and custom bridges to Ethereum and other off-chain asset sources. There are several main ideas behind the protocol:

- Allow cheaper transactions. Compound, Aave and Maker (three key players on the DeFi market) utilise Ethereum, where Gas price becomes an impediment for trading.
- Provide a user-friendly interface to attract less prepared users to the DeFi domain.
- Support assets which don't belong to the Ethereum network (like Bitcoin or alternative stablecoins) without redundant token-wrapping.
- Implement an advanced economics environment, which incentivizes users to keep the assets in the pool (using SWAPs and automated liquidation where the protocol itself plays a role of a liquidator).

Aside from "traditional" contracts, the Protocol has a designated Flash Trading platform. Users are incentivized to participate as lenders with a fee for each transaction, while borrowers have a tool set of pre-defined contracts and means to create more expensive custom solutions. This toolbelt matches well with SWAPs and bridges to various asset providers.

The Protocol is aimed to become decentralized and self-sustaining in one or two years. The Protocol issues governance token (called MINT token) as a reward for transactions done by users. The members may then utilise their right to vote and trigger voting to decide where the Protocol goes. In the end, the platform will become independent from the Minterest Labs OU and fully decentralized.

### Project Details

External API of the Protocol supports several calls:

- Lend an asset to the Protocol.
- Withdraw an asset from the Protocol (partial and full withdraw).
- Borrow an asset from the Protocol.
- Payout the loan to the Protocol (including paying on behalf of another user and partial payout).
- SWAP assets inside the Protocol.
- Flash Loans end points to trigger chains of actions or customize them.

All the endpoints require amount + type of the asset and balance id to operate on as incoming variables. But actual implementation will differ for each asset type and heavily depend on bridge logic.

The incoming asset is locked inside a specific pool (depending on the asset type), and the Protocol mints wrap tokens (called mTokens) to the user balance. mTokens are ERC-20 standardised tokens. From now on and till the asset is withdrawn from the pool, the Protocol operates with these wrap tokens (mTokens)- accrues interest, uses the liquidity as a Collateral for borrowing etc. In addition, the Protocol rewards users with an amount of governance token for lending and borrowing.

The governance token (MINT token) can be utilised to vote for or suggest new Protocol changes.

Inner structure of the Protocol includes the following modules and their responsibilities:

- The working pools, which store underlying assets. The pools also calculate exchange rates between an mToken and an underlying asset based on supply and demand.
- The liquidation pools, which are very similar to working pools, but contain assets used by the Protocol for automated liquidation.
- User balances store receipts in mTokens to track how many underlying assets are available for this user.
- Controller module calculates interests for lending and borrowing. This one uses several economics models for different assets.
- Liquidation Incentive logic is responsible for keeping the pools stable while lending assets to users. Liquidation automated and the Protocol itself is responsible for closing positions. This allows us to keep the assets inside the pools.
- SWAPs module is implemented to support farm yelding while keeping the assets in the system.
- Bridges and connection logic is used to actually communicate with off-chain assets providers. We cooperate with Plasm and Parastate to work out the best solution at this moment.
- Oracles are utilised to tweak exchange rates inside the Protocol. We utilize several exchange rate providers and to get weighted amounts.
- Admin panel to tweak the Protocol in general and each of the economics models.
- Governance platform to distribute MINT governance tokens and conduct community-initiated voting.
- Flash Trading module with a set of predefined contracts and ability to construct custom chains.

The Protocol is built with Substrate and utilises ORML, specifically ERC-20 token implementation. Plans are to use several oracles (like Kylin and Open Oracle Gateway) and bridges to off-chain assets sources (example Moonbeam or Plasm).

UI is based on React. We have a draft application to facilitate testing. Exact UX design is a WIP.

### Ecosystem Fit

The Minterest Protocol is designed to future proof itself for what is now a rapidly developing DeFi sector and specifically with its cross-chain functionality has the flexibility to support a wide variety of stable coin financial markets, including soon-to-be launched Polkadot based projects like Acala and Equilibrium. As evidenced by other similar protocols like Compound and Aave, Minterest’s value proposition will fundamentally support the creation of liquidity for such offerings and especially so given gas prices and throughoutput on Ethereum. The protocol also acts as a fungible asset for the Polkadot network given its ability to be utilised by the Polkadot dApp community.

The Protocol stays between two groups of projects and can benefit to both of them. 

First, there are applications which provide their own stable coin. [Laminar](https://github.com/laminar-protocol/laminar-chain) and specifically the Flow and the Collateralized Synthetic Asset protocols are designed to turn fiat funds into synthetic tokens - fTokens. [Acala](https://github.com/AcalaNetwork/Acala) mints aUSD in exchange for different types of assets. [Centrifuge](https://github.com/centrifuge/) allows turning real-world assets like mortgages into stable coins. [Stafi](https://docs.stafi.io/) wraps stacked assets into a tradable form (rToken) - enabling both getting interest from the main net and trading at the same time. [Bandot](https://github.com/bandotorg/Bandot) transforms assets to stable coin. The Minterest protocol may enlist these stable coins and support lending and borrowing. Users of the network will have more tools for farm yeilding and accruing interest.

The second group of applications are DEXes. [Zenlink Protocol](https://github.com/zenlinkpro/pallet-zenlink), [Polkadex](https://github.com/Polkadex-Substrate/Polkadex/tree/master), [SubDEX](https://github.com/subdarkdex), [HydraDX](https://github.com/galacticcouncil/hack.HydraDX-node) are a decentralized exchanges, which will be utilized by the Protocol in two ways. First of all, the Minterest will monitor several DEXes for price changes, providing security for the protocol and fare rates for users. Second, the Protocol will sell and buy liquidity to balance liquidation logic.

A bit apart stay infrastructure projects like [OAX Parrot](https://github.com/OAXFoundation/parrot), [Plasm](https://www.plasmnet.io/) and [Moonbeam](https://github.com/PureStake/moonbeam). Our plan is to patner with Plasm, as an example, to have access to Compound-based liquidity. 

## Team :busts_in_silhouette:

### Team members

- Josh Rogers
- Joeri van Geelen
- Matthew Niemerg
- Mark Fitzgibbon
- Mari Haki
- Margarita Tarraste
- Denis Romanovsky
- Polina Liutsko
- Alexandr Liutsko
- Eugeni Peniaz
- Pavlo Horbonos

### Contact

- **Contact Name:** Josh Rogers
- **Contact Email:** josh@minterest.finance

- **Contact Name:** Denis Romanovsky
- **Contact Email:** denis@minterest.finance

# Website

[Minterst lending page](http://minterest.finance)

### Legal Structure

- **Registered Address:** Kentmanni 6, Apt 68, Tallinn 10116, Estonia
- **Registered Legal Entity:** Minterest Labs OU

### Team's experience

A pool of highly talented, committed people passionate about our business and the impact it will make on the FinTech sector with broad and deep expertise in building apps and dApps across a wide variety of fields including FinTech and banking.

**Josh Rogers**, Founder and CEO of Minterest, has 2 decades experience in developing, architecting, advising and investing in digital platforms, including marketplaces, dApps, FinTech, social media, gaming, streaming video and video content, travel, employment, recruitment and freelancing/GIG. Notable startups in which he was a founding team member include Freelancer.com, the world’s largest freelancer marketplace and HeyYou, Australia’s largest café sector app.

**Joeri Van Geelen**, Co-founder and Director – Business Development has extensive experience in executive blockchain marketing and business development roles. He was previously Managing Partner APAC at Prysm Group, an economic consulting firm led by Harvard PhD economists specialising in distributed ledger and blockchain technology, and currently consults in blockchain economics, acts as an advisor to various blockchain startups and is an active speaker and contributor for numerous blockchain conferences.

**Matthew Niemerg Ph.D**, Co-Founder and Director of Application Mathematics, holds a Doctorate in Mathematics, is Co-Founder of Cardinal Cryptography, a mathematics, cryptography and software development consultancy for DLT oriented businesses, is Co-Founder and President of Aleph Zero, a Swiss non-profit foundation developing a decentralized DAG-based platform offering scalable, smart contract infrastructure for enterprise-grade applications, is a Scientific Advisory Board Member for Helix Cognitive Computing GmbH and Tech Lead at Hardfork Entertainment Inc.

**Denis Romanovsky**, Chief Technology Officer, has a Fintech and banking focused software engineering career holding senior roles, including tech lead, for a variety of development agencies, including EPAM Systems Inc. (NYSE: EPAM) a recognised market leading engineering and product design agency and ranked Top IT services Company on Fortune’s 100 Fastest-Growing Companies in 2019 and 2020.

**Margus Poola**, Legal Counsel, has a Masters Degree in Law, was an Attorney at Law with the prestigious LEXAL Law Firm for 14 years, is a Co-founder and CFO of Agrello, a cryptography and digital identity verification company and was a co-founder of Oblicity providing crypto asset compliance and token and blockchain investment solutions and was a lecturer in law at both the University of Tartu and the Tallinn University of Technology.

**Mark Fitzgibbon**, Operations Manager, has 2 decades in operational management, is a Solidity developer and previously worked in a variety of research roles for blockchain investment groups, most recently undertaking research and due diligence of blockchain, utility tokens and cryptocurrency projects for Cluster Capital, one of the world’s largest blockchain VCs.

**Eugeni Peniaz**, Senior Engineer, coding in Rust, with deep experience and understanding of cryptography and blockchain within the FinTech and e-commerce sectors plus Ethereum based blockchain projects.

**Alexandr Liutsko**, Senior Engineer, coding in Rust, Solidity, Python/Django for both apps and dApps plus React and product and intuitive user interface design.

**Pavlo Horbonos**, is a Rust and Solidity developer and technical consultant with extensive experience in building manifold DeFi applications and supports the backend engineering team.

**Polina Liutsko**, Engineer, a front-end developer in JavaScript and React focused on coding user experiences for FinTech products plus UI/UX design experience in delivering intuitive interfaces.

**Mari Haki**, Project Manager, an experienced crypto ops manager, mostly recently acting as project COO for an iGaming business managing business development, regulatory compliance, new markets entry, identifying and building out an industry expert team plus managing the marketing team to meet target expectations.

**Margarita Tarraste**, Admin Manager, an experienced manager and coordinator of app and dApp projects in the iGaming sector, additionally supporting the project with HR capability.

### Team Code Repos

- [Node Code](https://github.com/minterest-defi/minterest-chain-node)
- [Front End Code](https://github.com/minterest-defi/minterest-frontend)

### Team LinkedIn Profiles

- [Josh Rogers](https://www.linkedin.com/in/josh-rogers-at-minterest/)
- [Joeri Van Geelen](https://www.linkedin.com/in/joerivangeelen/)
- [Matthew Niemerg](https://www.linkedin.com/in/matthew-niemerg/)
- [Mark Fitzgibbon](https://www.linkedin.com/in/mark-f-0b3031164/)
- [Mari Haki](https://www.linkedin.com/in/mari-haki-686b40b4/)
- [Margarita Tarraste](https://www.linkedin.com/in/margarita-tarraste-295a92139/)
- [Denis Romanovsky](https://www.linkedin.com/in/denis-romanovsky-1677a2123/)
- [Polina Liutsko](https://www.linkedin.com/in/polina-liutsko/)
- [Alexandr Liutsko](https://www.linkedin.com/in/alexandr-liutsko/)
- [Eugeni Peniaz](https://www.linkedin.com/in/eugeni-peniaz-93b0341a4/)
- [Pavlo Horbonos](https://www.linkedin.com/in/pavelmidvel/)
- [Margus Poola](https://www.linkedin.com/in/margus-poola-0a7069102/)

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 1 year
- **Full-time equivalent (FTE):** 10 FTE tech team for the busiest periods
- **Total Costs:** 3 BTC

### Milestone 1 — Implement functional economics model on Substrate.

- **Estimated Duration:** 3 months (the milestone is a WIP)
- **FTE:** 3
- **Costs:** 0.43 BTC

| Number | Deliverable                    | Specification                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ------ | ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0a.    | License                        | Apache 2.0                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 0b.    | Documentation                  | We have a Make file included, which allows users to deploy a local copy of the node and run some test transactions using Polkadot.js app or our own UI. The team keeps up to date internal Protocol documentation, which will be used as a basis for public protocol overview. The plan is to have a full protocol description in public.                                                                                                                                                                                                                                                                                                                                                            |
| 0c.    | Testing Guide                  | The test coverage is around 100% (both unit and integration tests). The Make file has a command to run them. The tests cover all use cases: lending assets, accruing interest, borrowing assets, paying for the loan, redeem assets and payout a loan. Admin side is also covered with tests, like disabling specific operations on a pool, adding reserve liquidity etc.                                                                                                                                                                                                                                                                                                                            |
| 0d.    | Article/Tutorial               | The team is ready to write an article describing basic economics implemented to verify the work done for the grant milestone.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 1.     | Substrate module: Pool         | We have a Pool module, which is responsible for storing underlying assets and calculating interest rates based on the asset supply and demand.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 2.     | Substrate module: Controller   | We have a Controller module, which is in charge of interest rates accrual (based on stubbed oracles data for currency exchanges.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 3.     | Substrate module: User Balance | This module is responsible for storing wrap token receipts of users.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 4.     | Substrate module: Admin Panel  | The Protocol should be maintained by a set of admin users. This module gives a toolset for tweaking economics models of different pools, enabling or disabling operations, managing insurance liquidity, treasuries etc.                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 5.     | Substrate module: Math         | This module contains math formulas, used by the Controller to build up an exact economics model of a specified pool.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 6.     | React-base UI                  | This is a front end application, developed for users to be able to interact with the Protocol. At this point it emulates a wallet work and allows to call all supported extrinsics as both an admin and non-admin user.                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 7.     | Substrate chain                | The chain will support calls to do 4 main operations - lend assets, withdraw assets, borrow and payout assets. Each call goes to a Controller, which first validates it and updates all current rates and accrues interest for the signed user. This is done through invoking the Math module for formulas, Pool and User Balance modules for data and support functions. When this is done, the Controller invokes required functions on Pool and User Balance to store incoming changes - adding or removing liquidity from the protocol. The Admin Panel stays a bit aside as it is mostly independent Extrinsics, which allow to store flags and values ruling the economics of a specific pool. |
| 5.     | Docker                         | We will provide a dockerfile as an alternative to the Make file to make the local deployment easier.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |

### Milestone 2 — Oracles and Governance token.

- **Estimated Duration:** 2 months
- **FTE:** 3
- **Costs:** 0.4 BTC

| Number | Deliverable                  | Specification                                                                                                                                                                                                                                                                                                                                                |
| ------ | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 0a.    | License                      | Apache 2.0                                                                                                                                                                                                                                                                                                                                                   |
| 0b.    | Documentation                | We will update internal documentation and start working on the public version of the Protocol description.                                                                                                                                                                                                                                                   |
| 0c.    | Testing Guide                | The test coverage is around 100% (both unit and integration tests). The Make file has a command to run them. The tests cover distribution logic of the MINT token (governance token) between lenders and borrowers. Oracles pallet is covered with tests while network connections are stubbed. The economics tests are tweaked to work with Oracles pallet. |
| 0d.    | Article/Tutorial             | The team is ready to write an article describing our Oracles system and distribution of the governance tokens.                                                                                                                                                                                                                                               |
| 1.     | Substrate module: Oracles    | The idea behind this module is to create a system, which takes exchange rates from several providers and stores a weighted value to minimize chances of possible attacks on the Protocols. The exchange rates are to be used in Controller and Math modules, as an example - when calculating collateral.                                                    |
| 2.     | Substrate module: MINT token | This module is responsible for daily minting and distribution of the governance token, called MINT token. The daily amount is distributed between lenders and borrowers depending on the amount of liquidity transferred, while borrowers are incentivized with more MINT tokens given for the loans taken.                                                  |
| 3.     | React-base UI                | The UI should be updated to display the MINT token balance. At this point we may start a renovation of the front end with a UX specialist to improve usability and user experience.                                                                                                                                                                          |
| 4.     | Substrate chain              | The chain should now do two more things - take aggregated prices from the outer world to be used in calculations and also distribute MINT tokens for between users.                                                                                                                                                                                          |
| 5.     | Docker                       | We will provide a dockerfile to demonstrate the full functionality of our chain                                                                                                                                                                                                                                                                              |

### Milestone 3 — Automated Liquidation Model, SWAPs.

- **Estimated Duration:** 1 month
- **FTE:** 10
- **Costs:**

| Number | Deliverable                   | Specification                                                                                                                                                                                                                                                                                                                                |
| ------ | ----------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0a.    | License                       | Apache 2.0                                                                                                                                                                                                                                                                                                                                   |
| 0b.    | Documentation                 | We will update the public Protocol description with related data.                                                                                                                                                                                                                                                                            |
| 0c.    | Testing Guide                 | The test coverage is around 100% (both unit and integration tests). The Make file has a command to run them. The tests cover SWAPs use cases based on stubbed Oracles data and Liquidation cases, caused by fluctuation of assets (both the collateral and the borrowed part).                                                               |
| 0d.    | Article/Tutorial              | The team is ready to write an article describing the automated liquidation flows.                                                                                                                                                                                                                                                            |
| 1.     | Substrate module: SWAPs       | This module will allow users to swap assets inside the Protocol (with no need to get the liquidity out of the system). Currently the team envisions this feature based on a separate pool of liquidity, which supports swaps. The Protocol will require automated ways of keeping the pool stable (which includes communication with DeXes). |
| 2.     | Substrate module: Liquidation | The Protocol will utilise the Liquidation module to track and liquidate insolvent positions. The liquidity will be bought by the Protocol itself using a designated liquidity pool. DeXes will be utilised again to keep a relevant pool of liquidity stable.                                                                                |
| 3.     | React-based UI                | The UI should now support SWAPs actions and display relevant info about liquidations.                                                                                                                                                                                                                                                        |
| 4.     | Substrate chain               | The chain should now track and liquidate relevant positions automatically. SWAPs module should communicate with Oracles and Pools and User Balances to exchange assets.                                                                                                                                                                      |
| 5.     | Docker                        | We will provide a dockerfile to demonstrate the full functionality of our chain                                                                                                                                                                                                                                                              |

### Milestone 4 — A bridge to Ethereum , Wallets integration.

- **Estimated Duration:** 2 months
- **FTE:** 10
- **Costs:** 0.5 BTC

| Number | Deliverable                       | Specification                                                                                                                                                                                                                                                                 |
| ------ | --------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0a.    | License                           | Apache 2.0                                                                                                                                                                                                                                                                    |
| 0b.    | Documentation                     | We will update the public Protocol description with related data.                                                                                                                                                                                                             |
| 0c.    | Testing Guide                     | The test coverage is around 100% (both unit and integration tests) and covers use cases of Ethereum bridge - transfer liquidity of different types back and forth from the Protocol. Front end tests cover main user flows and integrations of the wallets with stubbed data. |
| 0d.    | Article/Tutorial                  | The team is ready to write an article describing the bridge solution and wallet integrations.                                                                                                                                                                                 |
| 1.     | Substrate module: Ethereum Bridge | We are planning to partner with Plasm or Parastate (to be decided yet) to get a reliable, cheap and fast bridge to Ethereum, to enable liquidity transfers.                                                                                                                   |
| 2.     | React-based UI                    | React applications should have integration of top 10 wallets on the market. The list to be decided.                                                                                                                                                                           |
| 3.     | Substrate chain                   | The chain should now be connected to a real (test net for a beginning) Compound instance and transfer liquidity from and to it (using a wallet).                                                                                                                              |
| 4.     | Docker                            | We will provide a dockerfile to demonstrate the full functionality of our chain                                                                                                                                                                                               |

### Milestone 5 — DOT bridge, Bitcoin bridge, more Wallets.

- **Estimated Duration:** 2 months
- **FTE:** 10
- **Costs:** 0.5 BTC

| Number | Deliverable                      | Specification                                                                                                                                                                                                                                                    |
| ------ | -------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0a.    | License                          | Apache 2.0                                                                                                                                                                                                                                                       |
| 0b.    | Documentation                    | We will update the public Protocol description with related data.                                                                                                                                                                                                |
| 0c.    | Testing Guide                    | The test coverage is around 100% (both unit and integration tests) and covers use cases of Bitcoin and DOT bridges - transfer liquidity of different types back and forth from the Protocol. Front end test coverage is supplemented with cases for new wallets. |
| 0d.    | Article/Tutorial                 | The team is ready to write an article describing the bridge solution and wallet integrations.                                                                                                                                                                    |
| 1.     | Substrate module: Bitcoin bridge | We are in search of a bridge provider to enable direct Bitcoin transfers in the Protocol (no need for WBTC).                                                                                                                                                     |
| 2.     | Substrate module: DOT bridge     | Considering achieving a Polkadot parachain as our main goal, we expect this module to take care of DOT liquidity transfers. We will require it to both enlist DOT as an asset on the market and to actually pay for transactions.                                |
| 3.     | React-based UI                   | The React application should have integration of more crypto wallets. The list is to be decided.                                                                                                                                                                 |
| 4.     | Substrate chain                  | The chain should now be connected to Polkadot and Bitcoin testnet with an ability to switch to production networks.                                                                                                                                              |
| 5.     | Docker                           | We will provide a dockerfile to demonstrate the full functionality of our chain                                                                                                                                                                                  |

### Milestone 6 — Flash Loans Platform, Governance.

- **Estimated Duration:** 2 months
- **FTE:** 10
- **Costs:** 0.5 BTC

| Number | Deliverable                           | Specification                                                                                                                                                                                                                                                                                                                                 |
| ------ | ------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0a.    | License                               | Apache 2.0                                                                                                                                                                                                                                                                                                                                    |
| 0b.    | Documentation                         | We will update the public Protocol description with related data.                                                                                                                                                                                                                                                                             |
| 0c.    | Testing Guide                         | The test coverage is around 100% (both unit and integration tests) and covers use cases of Governance usage. Example - voting or voting supplied with liquidity. Same for the Flash Loans platform - tests should cover triggering of one specific action or a chain of actions.                                                              |
| 0d.    | Article/Tutorial                      | The team is ready to write an article describing the Flash Loans Platform and our modification of Governance pallet.                                                                                                                                                                                                                          |
| 1.     | Substrate module: Governance          | This module most probably would be a variation or a modification of one of Substrate governance pallets.                                                                                                                                                                                                                                      |
| 2.     | Substrate module: Flash Loan Platform | This module will include an incentivized (by a fee from Flash Loans users) pool of liquidity, provided by the Protocol lenders, and a set of predefined actions (like going to a specific DeEx and exchanging a defined amount of one asset to another). Second part is an ability to create custom chains of actions for interested clients. |
| 3.     | React-based UI                        | The React application should now support Flash Loans Platform tools and Governance flow.                                                                                                                                                                                                                                                      |
| 4.     | Substrate chain                       | The chain should now be able to process Flash Loans requests and rollback loans, if a request takes too much time. Governance module stays aside from the main Protocol flows, since we are not going to incorporate 'code suggestion', rather do polling and implement the changes with the help of an internal team.                        |
| 5.     | Docker                                | We will provide a dockerfile to demonstrate the full functionality of our chain                                                                                                                                                                                                                                                               |

## Future Plans

Our plan is to enlist more popular assets (including those which are not yet public) in the Protocol.
Minterest should later on become fully decentralized and governed by the community.

## Additional Information :heavy_plus_sign:

The team has an MVP with basic working token economics. It is not yet deployed, but available for an internal demo.

Our partners:

- Plasm
- Parastate
