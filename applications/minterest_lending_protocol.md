# Open Grant Proposal

- **Project Name:** Minterest
- **Team Name:** Minterest Labs OU
- **Payment Address:** 0xBfBCBfaa12888388Ae3273DeE70B6acEb10818be

## Project Overview :page_facing_up:

### Overview

Minterest is a lending protocol built on Rust and Substrate. The Protocol connects to asset providers on block chain networks and allows the supplying or borrowing of these assets. The Minterest Protocol enables the creation of token markets with pools of token assets. Each pool algorithmically determines interest rates to actuate borrowing prices based on the supply and demand of the particular asset. Possible accrued interest incentivizes users to balance the pool state.

Lenders and borrowers of a token asset interact directly with the protocol, earning and paying interest. The rates float as demand and supply dynamics vary, similarly to the way traditional forex markets do, without users having to individually manage aspects of lending like settlement, credit checks, maturity dates, interest rates or lodging collateral with a trusted third party.

Each token market is unique to the token asset, whether on the Ethereum, Polkadot or Bitcoin networks and includes tokens such as Ether, US dollar pegged stablecoins like Dai, or Bitcoin itself. Each market implements a unique and tweakable economy model to balance the pool. Adding new pools on demand requires minor changes in the Protocol code, especially if a bridge application is available. Given the decentralized nature of the protocol, each token market contains a transparent, non-violable and publicly available ledger which records each transaction and the applied interest rates.

The Protocol utilises Polkadot and third party bridges to Ethereum and other off-chain asset sources. There are several main ideas behind the protocol:

- Allow cheaper transactions. Compound, Aave and Maker (three key players on the DeFi market) utilise Ethereum, where Gas price becomes an impediment for trading.
- Provide a user-friendly interface to attract less prepared users to the DeFi domain.
- Support assets which don't belong to the Ethereum network (like Bitcoin or alternative stablecoins) without redundant token-wrapping.
- Implement an advanced economy environment, which incentivizes users to keep the assets in the pool (using SWAPs and automated liquidation where the protocol itself plays a role of a liquidator).

The Protocol is aimed to become decentralized and self-sustaining in one or two years. The Protocol issues governance token (called MNT token) as a reward for transactions done by users. The members may then utilise their right to vote and trigger voting to decide where the Protocol goes. In the end, the platform will become independent from the Minterest Labs OU and fully decentralized.

### Project Details

External API of the Protocol supports several calls:

- Lend an asset to the Protocol.
- Withdraw an asset from the Protocol (partial and full withdraw).
- Borrow an asset from the Protocol.
- Payout the loan to the Protocol (including paying on behalf of another user and partial payout).
- SWAP assets inside the Protocol.

All the endpoints require amount + type of the asset and balance id to operate on as incoming variables. But actual implementation will differ for each asset type and heavily depend on connected bridge logic.

The incoming asset is locked inside a specific Liquidity pool (depending on the asset type), and the Protocol mints wrap tokens (called mTokens) to the user balance. mTokens are ERC-20 standardised tokens. From now on and till the asset is withdrawn from the pool, the Protocol operates with these wrap tokens (mTokens)- accrues interest, uses the liquidity as a Collateral for borrowing etc. In addition, the Protocol rewards users with an amount of governance token for lending and borrowing.

The governance token (MNT token) can be utilised to vote for or suggest new Protocol changes.

Inner structure of the Protocol includes the following modules and their responsibilities:

- The Liquidity pools, which store underlying assets. The pools also calculate exchange rates between an mToken and an underlying asset based on supply and demand (AMM curve).
- The Liquidation pools, which are very similar to Liquidity pools, but contain assets used by the Protocol for automated liquidation. The pools are self-balancing - all extra liquidity is sold on DeXes with a discount to fill exhausted pools.
- User balances store receipts in mTokens to track how many underlying assets are available for this user.
- Controller module calculates interests for lending and borrowing. This one uses several tweakable economy models for different assets. Interest rates are calculated based on utilization rate of the pool and total available cache. Interest accrual happens only when user adds or withdraws liquidity from a pool.
- Automated Liquidation logic is responsible for keeping the pools stable while lending assets to users. The Protocol compensate insolvent positions with liquidity from Liquidation pools, keeping liquidation incentive and fee very small. Liquidation pools are automatically balanced, if the value there drops below a certain level.
- SWAPs module is implemented to support farm yelding while keeping the assets in the system.
- Bridges and connection logic is used to actually communicate with off-chain assets providers. We cooperate with Plasm, Parastate and Aleph Zero to work out the best solution.
- Oracles are utilised to tweak exchange rates inside the Protocol. We utilize several exchange rate providers to get weighted median amounts. This benefits the security of the Protocol.
- Admin panel allows tweaking the Protocol in general and each of the economy models.
- Governance platform is build to distribute MNT governance tokens and conduct community-initiated voting on changes in the Protocol.

The Protocol is built with Substrate and utilises [ORML](https://github.com/open-web3-stack/open-runtime-module-library), specifically ERC-20 token implementation.

UI is based on React and TypeScript. We have a basic application to facilitate testing. But exact UI/UX design is in progress.

### Ecosystem Fit

The Minterest Protocol is designed to future proof itself for what is now a rapidly developing DeFi sector and specifically with its cross-chain functionality has the flexibility to support a wide variety of stable coin financial markets, including soon-to-be launched Polkadot based projects like Acala and Equilibrium. As evidenced by other similar protocols like Compound and Aave, Minterest’s value proposition will fundamentally support the creation of liquidity for such offerings and especially so given gas prices and throughoutput on Ethereum. The protocol also acts as a fungible asset for the Polkadot network given its ability to be utilised by the Polkadot dApp community.

The Protocol operates between two key groups in the Polkadot ecosystem and its operation and growth strongly benefit both of them.

First group are the applications which provide their own stable coin. Example, [Laminar](https://github.com/laminar-protocol/laminar-chain) and specifically the Flow and the Collateralized Synthetic Asset protocols are designed to turn fiat funds into synthetic tokens - fTokens. [Acala](https://github.com/AcalaNetwork/Acala) mints aUSD in exchange for different types of assets. [Centrifuge](https://github.com/centrifuge/) allows turning real-world assets like mortgages into stable coins. [Stafi](https://docs.stafi.io/) wraps stacked assets into a tradable form (rToken) - enabling both getting interest from the main net and trading at the same time. [Bandot](https://github.com/bandotorg/Bandot) transforms assets to stable coin. Same goes for [Equilibrium](https://github.com/equilibrium-eosdt) - which has a credit market and its own stable coin. 

Minterest protocol will create financial markets for stable coins like these through its enablement of lending and borrowing of stable coin token assets. Users of the protocol will therefore have added tokens for yield farming and accruing interest and this activity supports liquidity for such stable coins.

The second group of applications are DeXes. [Zenlink Protocol](https://github.com/zenlinkpro/pallet-zenlink), [Polkadex](https://github.com/Polkadex-Substrate/Polkadex/tree/master), [SubDEX](https://github.com/subdarkdex), [HydraDX](https://github.com/galacticcouncil/hack.HydraDX-node) are decentralized exchanges, which will be utilized by the Protocol in two key ways. Minterest will interact with a suite of DeXes as part of its token distribution model, whereby the protocol’s operating surplus is distributed via its native token to users who stake their liquidity and tokens in the protocol’s DAO. Further, the Protocol will sell and buy liquidity of its specific token markets using such DeXes to continually balance its liquidation pools and therefore will be a significant provider of liquidity for the DeXes themselves.

A bit apart are infrastructure projects like [OAX Parrot](https://github.com/OAXFoundation/parrot), [Plasm](https://www.plasmnet.io/) and [Moonbeam](https://github.com/PureStake/moonbeam). Our plan is to partner with Plasm, as an example, to have access to Compound-based liquidity.

Last but not the least, we build the Protocol valuing user experience. Our aim is to make DeFi available for average person with close to none knowledge about crypto assets.

## Team :busts_in_silhouette:

### Team members

- Josh Rogers
- Joeri van Geelen
- Matthew Niemerg
- Mark Fitzgibbon
- Kyn Chaturvedi
- Mari Haki
- Margarita Tarraste
- Denis Romanovsky
- Polina Liutsko
- Alexandr Liutsko
- Eugeni Peniaz
- Pavlo Horbonos

### Contact

**Contact Name:** Josh Rogers
**Contact Email:** josh@minterest.finance

**Contact Name:** Denis Romanovsky
**Contact Email:** denis@minterest.finance

# Website

[Minterst lending page](http://minterest.finance)

### Legal Structure

- **Registered Address:** Kentmanni 6, Apt 68, Tallinn 10116, Estonia
- **Registered Legal Entity:** Minterest Labs OU

### Team's experience

A pool of highly talented, committed people passionate about our business and the impact it will make on the FinTech sector with broad and deep expertise in building apps and dApps across a wide variety of fields including FinTech and banking.

**Josh Rogers**, Founder and CEO of Minterest, has 2 decades experience in developing, architecting, advising and investing in digital platforms, including marketplaces, dApps, FinTech, social media, gaming, streaming video and video content, travel, employment, recruitment and freelancing/GIG. Notable startups in which he was a founding team member include Freelancer.com, the world’s largest freelancer marketplace and HeyYou, Australia’s largest café sector app.

**Joeri Van Geelen**, Co-founder and Director – Business Development has extensive experience in executive blockchain marketing and business development roles. He was previously Managing Partner APAC at Prysm Group, an economic consulting firm led by Harvard PhD economists specialising in distributed ledger and blockchain technology, and currently consults in blockchain economy, acts as an advisor to various blockchain startups and is an active speaker and contributor for numerous blockchain conferences.

**Matthew Niemerg Ph.D**, Co-Founder and Director of Application Mathematics, holds a Doctorate in Mathematics, is Co-Founder of Cardinal Cryptography, a mathematics, cryptography and software development consultancy for DLT oriented businesses, is Co-Founder and President of Aleph Zero, a Swiss non-profit foundation developing a decentralized DAG-based platform offering scalable, smart contract infrastructure for enterprise-grade applications, is a Scientific Advisory Board Member for Helix Cognitive Computing GmbH and Tech Lead at Hardfork Entertainment Inc.

**Denis Romanovsky**, Chief Technology Officer, has a Fintech and banking focused software engineering career holding senior roles, including tech lead, for a variety of development agencies, including EPAM Systems Inc. (NYSE: EPAM) a recognised market leading engineering and product design agency and ranked Top IT services Company on Fortune’s 100 Fastest-Growing Companies in 2019 and 2020.

**Margus Poola**, Legal Counsel, has a Masters Degree in Law, was an Attorney at Law with the prestigious LEXAL Law Firm for 14 years, is a Co-founder and CFO of Agrello, a cryptography and digital identity verification company and was a co-founder of Oblicity providing crypto asset compliance and token and blockchain investment solutions and was a lecturer in law at both the University of Tartu and the Tallinn University of Technology.

**Mark Fitzgibbon**, Operations Manager, has 2 decades in operational management, is a Solidity developer and previously worked in a variety of research roles for blockchain investment groups, most recently undertaking research and due diligence of blockchain, utility tokens and cryptocurrency projects for Cluster Capital, one of the world’s largest blockchain VCs.

**Kyn Chaturvedi**, acting as a COO, is an experienced Strategist across multiple verticals in digital technology with a demonstrated history of working in the gaming industry. Skilled in developing and implementing Go-to-Market strategies, Partnership Development, and Product Management.

**Eugeni Peniaz**, Senior Engineer, coding in Rust, with deep experience and understanding of cryptography and blockchain within the FinTech and e-commerce sectors plus Ethereum based blockchain projects.

**Alexandr Liutsko**, Senior Engineer, coding in Rust, Solidity, Python/Django for both apps and dApps plus React and product and intuitive user interface design.

**Pavlo Horbonos**, is a Rust and Solidity developer and technical consultant with extensive experience in building manifold DeFi applications and supports the backend engineering team.

**Polina Liutsko**, Engineer, a front-end developer in JavaScript and React focused on coding user experiences for FinTech products plus UI/UX design experience in delivering intuitive interfaces.

**Mari Haki**, Project Manager, an experienced crypto ops manager, mostly recently acting as project COO for an iGaming business managing business development, regulatory compliance, new markets entry, identifying and building out an industry expert team plus managing the marketing team to meet target expectations.

**Margarita Tarraste**, Admin Manager, an experienced manager and coordinator of app and dApp projects in the iGaming sector, additionally supporting the project with HR capability.

### Team Code Repos

- [Chain Node Code](https://github.com/minterest-finance/minterest-chain-node)
- [Front End Code](https://github.com/minterest-finance/minterest-frontend)

### Team LinkedIn Profiles

- [Josh Rogers](https://www.linkedin.com/in/josh-rogers-at-minterest/)
- [Joeri Van Geelen](https://www.linkedin.com/in/joerivangeelen/)
- [Matthew Niemerg](https://www.linkedin.com/in/matthew-niemerg/)
- [Mark Fitzgibbon](https://www.linkedin.com/in/mark-f-0b3031164/)
- [Kyn Chaturvedi](https://www.linkedin.com/in/kynchaturvedi/)
- [Mari Haki](https://www.linkedin.com/in/mari-haki-686b40b4/)
- [Margarita Tarraste](https://www.linkedin.com/in/margarita-tarraste-295a92139/)
- [Denis Romanovsky](https://www.linkedin.com/in/denis-romanovsky-1677a2123/)
- [Polina Liutsko](https://www.linkedin.com/in/polina-liutsko/)
- [Alexandr Liutsko](https://www.linkedin.com/in/alexandr-liutsko/)
- [Eugeni Peniaz](https://www.linkedin.com/in/eugeni-peniaz-93b0341a4/)
- [Pavlo Horbonos](https://www.linkedin.com/in/pavelmidvel/)
- [Margus Poola](https://www.linkedin.com/in/margus-poola-0a7069102/)

## Development Status :open_book:

The Protocol development is in progress - we have an MVP written on Rust/Substrate with economy model and prototype of automated liquidation. Liquidity Pool, User Balance and Controller modules are already implemented (though subject to changes and updates).
No UI mockups available at this stage. The React based UI currently contains only a minimal set of features to manipulate the Protocol. UI/UX design work is in progress.
We are in the process of deploying a test staging 

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 5 months
- **Full-time equivalent (FTE):** 10 FTE tech team for the busiest periods
- **Total Costs:** 30000$

### Milestone 1 — Implement functional economy model on Substrate.

- **Estimated Duration:** 3 months (the milestone is a WIP, to be finished in the beginning of February)
- **FTE:** 4
- **Costs:** 15000$

| Number | Deliverable                      | Specification                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ------ | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0a.    | License                          | Apache 2.0                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 0b.    | Documentation                    | The team keeps up to date internal Protocol documentation, which will be used as a basis for public protocol overview. There are inline code comments on all functions and logical blocks. We have a Make file included, which allows users to deploy a local copy of the node and run some test transactions using Polkadot.js app or our own UI.                                                                                                                                                                                                                                                                     |
| 0c.    | Testing Guide                    | The test coverage is 100% (both unit and integration tests). The Make file has a command to run them. The tests cover all use cases: lending assets, accruing interest, borrowing assets, paying for the loan, redeem assets and payout a loan. Admin side is also covered with tests, like disabling specific operations on a pool, adding reserve liquidity etc.                                                                                                                                                                                                                                                                                      |
| 0d.    | Article/Tutorial                 | The team is ready to write an article describing basic economy implemented to verify the work done for the grant milestone.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 1.     | Substrate module: Liquidity Pool | The Liquidity Pool module is responsible for storing underlying assets and calculating interest rates based on the asset supply and demand (AMM curve with corrections based on kink value). Currently we have one economy model (tweakable based on variables set) and plan to extend it to cope better with volatile and stable assets.                                                                                                                                                                                                                                                                                                               |
| 2.     | Substrate module: Controller     | The Controller module is responsible for interest accrual (based on stubbed Oracles data for currency exchanges). This module also calculates utilization rates and interest rates for Liquidity Pools. The economy model is done based on current Compound economy with several changes, defined by Substrate specifics and business needs. For example, we do not store Insurance and transfer all surplus to Liquidations pools to be able to re-invest.                                                                                                                                                                                                  |
| 3.     | Substrate module: User Balance   | This module is responsible for storing wrap token receipts of users (both lend and borrow receipts). It is based on [ORML](https://github.com/open-web3-stack/open-runtime-module-library) implementation of ERC-20 token and allows to keep track of current user balance across the pools, transfer tokens between users.                                                                                                                                                                                                                                                                                                                             |
| 4.     | Substrate module: Admin Panel    | The Protocol should be maintained by a set of admin users. This module gives a toolset for tweaking economy models of different pools, enabling or disabling operations, managing admins list, treasuries etc.                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 5.     | React-base UI                    | This is a front end application, developed for users to be able to interact with the Protocol. At this point it emulates a wallet work and allows to call all supported extrinsics as both an admin and non-admin user. No fancy UX yet though.                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 6.     | Substrate chain                  | The chain supports calls to do 4 main operations - lend assets, withdraw assets, borrow and payout assets. Each call goes to a Controller, which first validates it and updates all current rates and accrues interest for the signed user. This is done invoking User Balance and Liquidity Pool modules. When the update is done, the Controller executes required functions on Pool and User Balance to store incoming changes - adding or removing liquidity from the protocol. The Admin Panel stays a bit aside as contains mostly independent Extrinsics, which allow to store flags and values ruling the economy of a specific Liquidity pool. |
| 5.     | Docker                           | We will provide a dockerfile as an alternative to the Make file to make the local deployment easier.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |

### Milestone 2 — Automated Liquidation Model and Governance token.

- **Estimated Duration:** 2 months (The timeframe is February-March)
- **FTE:** 6
- **Costs:** 15000$

| Number | Deliverable                  | Specification                                                                                                                                                                                                                                                                                                                                                |
| ------ | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 0a.    | License                      | Apache 2.0                                                                                                                                                                                                                                                                                                                                                   |
| 0b.    | Documentation                | We will update internal documentation and start working on the public version of the Protocol description.                                                                                                                                                                                                                                                   |
| 0c.    | Testing Guide                | The test coverage is 100% (both unit and integration tests). The Make file has a command to run them. The tests cover distribution logic of the MNT token (governance token) between lenders and borrowers. Oracles pallet is covered with tests while network connections are stubbed. The economy tests are tweaked to work with stubbed Oracles pallet (based on [ORML](https://github.com/open-web3-stack/open-runtime-module-library/tree/master/oracle)). |
| 0d.    | Article/Tutorial             | The team is ready to write an article describing our Oracles system and distribution of the governance tokens.                                                                                                                                                                                                                                               |
| 1.     | Substrate module: Oracles    | The idea behind this module is to create a system, which takes exchange rates from several providers and stores a weighted median value to minimize chances of possible attacks on the Protocols. The incoming values from Oracles should be stored in the chain, but pass validation before actually being used in calculations. The exchange rates are to be used in Controller module, as an example - when calculating collateral.                                                    |
| 2.     | Substrate module: MNT token | This module is responsible for daily minting and distribution of the governance token, called MNT token. The daily amount is distributed between lenders and borrowers depending on the amount of liquidity transferred, while borrowers are incentivized with more MNT tokens given for the loans taken.                                                  |
| 3.     | React-base UI                | The UI should be updated to display the MNT token balance. At this point we may start a renovation of the front end with a UX specialist to improve usability and user experience.                                                                                                                                                                          |
| 4.     | Substrate chain              | The chain should now do two more things - take aggregated prices from the outer world to be used in calculations and also distribute MNT tokens for between users.                                                                                                                                                                                          |
| 5.     | Docker                       | We will provide a dockerfile to demonstrate the full functionality of our chain                                                                                                                                                                                                                                                                              |

## Future Plans

Current plan is to go Live in July-August 2021 with working integrations to BTC and Ethtereum and Polkadot networks, complex Oracles system and reasonable set of supported wallets.
Further work will be aimed at enlisting more popular assets (including those which are not yet public) in the Protocol and also providing more tools for trading, like SWAPs.
One of the priorities is to make the Protocol fully independent in the end.

A short roadmap of further the Protocol development:

|                                                 Feature                                                  | Details                                                                                                                                                                                      |  Timeframe   |
| :------------------------------------------------------------------------------------------------------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------: |
|                                         SWAPs logic                                          | Oracles system is designed to monitor DeXes and provide the Protocol correct prices on assets in use. This enables SWAPs - a mechanism which allows on the spot exchange of assets inside the Protocol.  |    April     |
| Integrate with third party bridges to Ethereum, Bitcoin, other networks. Support top 15 popular wallets. | We need to bridge to other networks to get access to liquidity. A list of networks and partners still to be defined. Enlisting DOT, Compound-based assets and Bitcoin is the first priority. | May - August |
|                                                Governance                                                | The Protocol needs a governance platform for the community and stakeholders.                                                                                                                 |  September   |

## Additional Information :heavy_plus_sign:

We negotiate with Plasm and Moonbeam as part of our efforts in finding bridges to other networks.
