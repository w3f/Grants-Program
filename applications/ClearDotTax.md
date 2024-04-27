# ClearDotTax

- **Team Name:** Find Signal Studio PTE. LTD.
- **Payment Address:** `1vF2bTVStU4M4s4JBsgfTHy1NXQfqRxepvJkLQeyBRhAdEW`
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

### Overview

#### Tagline: One-click crypto tax computation for Polkadot, Kusama and their parachains.

#### A brief description of your project

Calculating and filing taxes for Polkadot/Kusama and its parachains is a strenuous and time-consuming process. Existing solutions don't fully solve it, and offer a poor user experience. ClearDotTax aims to give users their Polkadot tax report for their jurisdiction in one click.

#### Relation to Substrate / Polkadot / Kusama

Substrate/Dotsama is a challenging ecosystem to track transactions and estimate tax liability using existing crypto tax tools. While solutions like subscan track all transactions across parachains, they don't track accrued income such as lending/staking/yield farm rewards. More details [here](#what-needs-does-your-project-meet-how-did-you-identify-these-needs-please-provide-evidence-in-the-form-of-scientific-articles-forum-discussions-case-studies-or-raw-data).

| ![polkadot tax tools](https://i.imgur.com/xkirp2k.png) |
| ------------------------------------------------------ |

#### Team Motivation

Our team has been both, users, as well as builders in the Polkadot ecosystem for almost 3 years. We have found it really hard to calculate our taxes, especially as power-users having a lot of transactions in multiple protocols. After exploring the community forums and discord, we found that a lot of users are facing the same problem. This is where our team has a unique experience, having spent time building tools to reduce information asymmetry across blockchain networks (including Polkadot).

### Ecosystem Fit

#### Where and how does your project fit into the ecosystem?

We simplify tax computation for users of Polkadot/Kusama and their parachains.

#### Who is your target audience (parachain/dapp/wallet/UI developers, designers, your own user base, some dapp's userbase, yourself)?

Users of Polkadot/Kusama and their parachains who want to file their taxes/see their taxable income in the Dotsama ecosystem (for now, users based in the US, UK, Germany, and Switzerland).

#### What need(s) does your project meet? How did you identify these needs? Please provide evidence in the form of (scientific) articles, forum discussions, case studies, or raw data.

| ![polkadot tax tool needs](https://i.imgur.com/f7tGMXh.png) |
| ----------------------------------------------------------- |

_The above screenshots are discussions from the official Polkadot Discord server and the [Polkadot Forum](https://forum.polkadot.network/t/best-tools-for-polkadot-taxes-staking-multi-chain-portfolio-etc/2642)._

#### Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?

- [Polkalytics](https://www.polkalytics.io)
  - [you still need to hire a tax consultant](https://grillapp.net/10716/polkalytics-a-google-scale-analytics-service-for-polkadot-37079)
  - the [reports generated](https://drive.google.com/drive/folders/14WqTKlAR6bfb2zr5VqxOEn0WWdPsc1j1) don't tell us our total tax liability, and have complex labels, making it hard to understand for end-users.
- [cointracking_polka](https://github.com/TheGoldenEye/cointracking_polka) and [staking-rewards-collector](https://github.com/w3f/staking-rewards-collector) help calculate income from staking. However, they don't provide an easy-to-use UX and don't support income from any other category.
- [polkadot-portfolio](https://github.com/substrate-portfolio/polkadot-portfolio) and [Polkaholic](https://twitter.com/polkaholic_io) fetch account balances from `frame-system`. However, it doesn't work for custom pallets and accrued rewards/fees from custom protocols.

#### Are there any projects similar to yours in related ecosystems?

- [CoinTracker](https://www.cointracker.io/)
- [Koinly](https://app.koinly.io/)
- [Netrunner](https://www.netrunner.tax/) - on Solana

However, the above tools don't have support for Polkadot/Kusama and their Parachains (except EVM based ones).

## Team :busts_in_silhouette:

### Team members

- Team Lead: Rajdeep (https://twitter.com/rajgoesout)
  - Building in the Polkadot ecosystem since ~2.5 years - led engineering at [YieldBay](https://github.com/yield-bay)
  - Web3 Researcher/Rust Engineer
  - Prev built products to solve for blockchain information asymmetry in the Filecoin ecosystem
- Product Engineer: 0xDeep (https://twitter.com/0xDeep)
  - Rust/Full-Stack Engineer
  - Smart contract Auditor
  - Prev wrote systems to process real-time data at a HFT firm
- Product Designer: Axshay (https://twitter.com/axshay613)
  - Designer [@polynomialfi](https://twitter.com/polynomialfi)
  - Prev worked at a web3 game studio

### Contact

- **Contact Name:** Rajdeep Bharati
- **Contact Email:** rajdeep@findsignal.studio
- **Website:** https://www.findsignal.studio

### Legal Structure

- **Registered Address:** 3 Fraser Street, \#05-25 Duo Tower, Singapore (189352)
- **Registered Legal Entity:** Find Signal Studio PTE. LTD.

### Team's experience

We've been building within the Polkadot ecosystem since 2020:

- https://twitter.com/YieldScan - Staking dashboard for Polkadot and Kusama
  - funded by Web3 Foundation Grants
  - did 9 figures in transaction volume
- https://twitter.com/yield_bay - Yield farming hub for Dotsama
  - funded by the Polkadot Treasury
  - tracks over 159 farms, 17 protocols, across 9 parachains

### Team Code Repos

- https://github.com/yield-bay/bay-watcher
- https://github.com/yieldscan/yieldscan-frontend
- https://github.com/yield-bay/bay-xcm-autocompound
- https://github.com/yield-bay/bay-web

**GitHub accounts of all team members:**

- https://github.com/rajgoesout (yieldbay alt: https://github.com/JackSparrowYB)
- https://github.com/0xdeepmehta

### Team LinkedIn Profiles

- https://www.linkedin.com/in/rajgoesout
- https://twitter.com/0xDeep
- https://twitter.com/axshay613

### Project Details

#### Key Deliverables

- ##### Backend API
  To fetch users' transactions across Polkadot and Kusama relay chains; and all major parachains of Polkadot & Kusama (ones supported by Subscan).
- ##### [Transactions Dashboard](#milestone-1--transactions-dashboard)
  To view and filter all transactions/income.
- ##### Advanced transactions module

  To track users' accrued income (fees/rewards) across the supported protocols:

  1.  Lending Protocols<br/>
      a. Moonwell
  2.  Staking Protocols<br/>
      a. Native DOT<br/>
      b. Manta<br/>
      c. Astar<br/>
      d. Hydradx<br/>
      e. Acala & Karura
  3.  Yield Farms<br/>
      a. Stellaswap
  4.  Liquidity Pools<br/>
      a. Stellaswap<br/>
      b. Acala & Karura

- ##### Wallet Connection UX
  To connect your wallet(s) or paste wallet address.
- ##### One-click Tax Report UX
  To view/download tax report for your jurisdiction (starting with the US, UK, Germany, and Switzerland) in a selected time period.

#### Data Models

##### transactions:

|         field |           type |
| ------------: | -------------: |
|        amount |          float |
|      currency |        varchar |
|     value_usd |          float |
|         gains |          float |
|           fee |          float |
|      category | IncomeCategory |
|          time |      timestamp |
|           tag |        varchar |
|     src_chain |        varchar |
|    dest_chain |        varchar |
|   sender_addr |        varchar |
| receiver_addr |        varchar |

##### custom types:

|      type name |                   type |
| -------------: | ---------------------: |
| IncomeCategory | enum (ACCRUED, DIRECT) |

#### Technology Stack

The backend service would be written in a mix of Rust and TypeScript; GraphQL API in TypeScript; and the frontend using Next.js. We will use MongoDB to store any transactions/tax report/user data.

#### Non-Goals

- Our platform will not provide tax advice/ways to reduce tax liability. We will simply show the tax liability of the user in the supported jurisdictions, and the supported protocols, as mentioned in [Key Deliverables](#key-deliverables).

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 2.5 months
- **Full-Time Equivalent (FTE):** 1.5
- **Total Costs:** 30,000 USD

### Milestone 1 — Transactions Dashboard

- **Estimated duration:** 1 month
- **FTE:** 1.5
- **Costs:** 12,000 USD

|  Number | Deliverable                                            | Specification                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ------: | ------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **0a.** | License                                                | GPLv3                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| **0b.** | Documentation                                          | We will provide both **inline documentation** of the code and a basic **markdown doc** that explaining how to run the backend and frontend service.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| **0c.** | Testing and Testing Guide                              | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| **0d.** | Docker                                                 | We will provide Dockerfile(s) that can be used to test all the functionality for the backend service, GraphQL API, and frontend.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|     0e. | Article                                                | We will publish an **article** detailing the progress update for this milestone.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|      1. | Design & Development of Minimal Transactions Dashboard | The user should be able to connect/paste their Polkadot wallet address, and then sync all their historical transactions (for Polkadot & Kusama relay chains; and all their parachains that are supported by Subscan).<br/>This would include:<br/>- Taxes from each transaction done directly via the wallet<br/>&nbsp;&nbsp;&nbsp;&nbsp;- Wallet \<\> wallet<br/>&nbsp;&nbsp;&nbsp;&nbsp;- Wallet \<\> smart contract/pallet<br/>- Capital gains<br/>- Airdrops<br/>- Gas fees<br/><br/>Provide a tag to each transaction - the tags could be one of the following:<br/>`Add Liquidity/Airdrop/Borrow/Bridge/Buy/Donation/Fork/Gift/Interest Expense/Interest payment/Lending Deposit/Lending Withdrawal/Loan Repayment/Lost/Margin/Margin gain/Margin fee/Margin loss/Margin rebate/Mined/Mint/Other income/Payment/Rebate/Receive/Remove Liquidity/Sell/Send/Stake/Staking reward/Trade/Transfer/Royalty/Unstake/Wrap`<br/><br/>Implementation of:<br/>- Figma Hi-fi Designs for Dashboard (for tracking both, minimal and advanced transactions)<br/>- Backend service<br/>- GraphQL API<br/>- Frontend dashboard<br/><br/>The design would be similar to [Cointracker dashboard](https://www.cointracker.io):<br/><br/>![](https://i.imgur.com/VeIVSF2.png)<br/><br/>There would be the following additional columns:<br/>- Transaction Type (Accrued/Direct)<br/>- Sender Chain (can be incorporated in the `Sent` column)<br/>- Receiver Chain (can be incorporated in the `Received` column) |
|      2. | Algorithm Spec for Advanced Transactions               | Accrued income (ones which don't directly get deposited in the wallet) from the protocols mentioned in [Advanced transactions module](#advanced-transactions-module).<br/><br/>The algorithm spec would also contain references to data sources (subgraph/APIs/pallet RPC calls) needed for the above advanced transactions.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |

### Milestone 2 — Advanced Transactions & Tax Report Algorithm

- **Estimated Duration:** 1 month
- **FTE:** 1.5
- **Costs:** 12,000 USD

|  Number | Deliverable                                    | Specification                                                                                                                                                                                                                                                                                                  |
| ------: | ---------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **0a.** | License                                        | GPLv3                                                                                                                                                                                                                                                                                                          |
| **0b.** | Documentation                                  | We will provide both inline documentation of the code and a basic markdown doc that explaining how to run the backend and frontend service.                                                                                                                                                                    |
| **0c.** | Testing and Testing Guide                      | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.                                                                                                                                                |
| **0d.** | Docker                                         | We will provide Dockerfile(s) that can be used to test all the functionality for the backend service, GraphQL API, and frontend.                                                                                                                                                                               |
|     0e. | Article                                        | We will publish an **article** detailing the progress update for this milestone.                                                                                                                                                                                                                               |
|      1. | Support for Advanced Transactions              | The user should be able to connect/paste their Polkadot wallet address, and then sync all their historical transactions.<br/>This would include<br/>1. All the transaction types mentioned in Milestone 1.<br/>2. Accrued income from protocols mentioned in the [key deliverables](#key-deliverables).           |
|      2. | Support for Changing Transaction Type/Category | The user should be able to edit the transaction type/category in the dashboard. We will refer the Cointracker designs for inspiration:<br/><br/><img src="https://i.imgur.com/WNrmojI.png" alt="change category" width="250"/>&nbsp;&nbsp;<img src="https://i.imgur.com/cGoYZAA.png" alt="drawing" width="300"/> |
|      3. | Tax Report Algorithm                           | Research team designs an algorithm based on the tax laws for the different types of transactions in the following jurisdictions<br/>1. United States<br/>2. United Kingdom<br/>3. Germany<br/>4. Switzerland                                                                                                       |
|      4. | Designs for One-click Tax Report UX            | Product designer creates Hi-fi Figma designs and prototype for the one-click Tax Report generator.                                                                                                                                                                                                             |

### Milestone 3 - Tax Report UX & Instruction video

- **Estimated Duration:** 0.5 month
- **FTE:** 1.5
- **Costs:** 6,000 USD

|  Number | Deliverable                               | Specification                                                                                                                                                                                                                          |
| ------: | ----------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **0a.** | License                                   | GPLv3                                                                                                                                                                                                                                  |
| **0b.** | Documentation                             | We will provide both inline documentation of the code and a basic markdown doc that explaining how to run the backend and frontend service. We'll also write a small guide to help people use the platform.                            |
| **0c.** | Testing and Testing Guide                 | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.                                                                        |
| **0d.** | Docker                                    | We will provide Dockerfile(s) that can be used to test all the functionality for the backend service, GraphQL API, and frontend.                                                                                                       |
|     0e. | Article                                   | We will publish an **article** detailing the progress update for this milestone.                                                                                                                                                       |
|      1. | Implementation of One-click Tax Report UX | Users should be able to view and download tax reports based on their selected jurisdiction (US/UK/Germany/Switzerland)<br/>Implementation of:<br/>- Tax report algorithm in the backend API<br/>- One-click tax report UX in the frontend |
|      2. | Demo/Instruction Video                    | A video demonstrating how to use the platform.                                                                                                                                                                                         |

## Future Plans

- **How we intend to finance the project's long-term maintenance and development:**
  - We plan to charge a small fee for helping users compute their taxes. It would follow a freemium model - one trial run, and subsequent runs would be charged/require a subscription to our platform. This will help cover our infrastructure costs and reduce our reliance on grants.
- **How we intend to use, enhance, and promote your project in the short term:**
  - We plan to build a discord community for users to ask crypto tax related questions. This will help promote our project organically.
  - We intend to onboard our first 100 users within one month of the grant's conclusion.
- **The team's long-term plans and intentions in relation to it:**
  - In the long-term, we want to make the Polkadot/Substrate ecosystem more easier to use for end-users.
  - Add support for more jurisdictions.
  - Make adapters like [DefiLlama](https://github.com/DefiLlama/DefiLlama-Adapters) to make it easy for anyone to add support for new protocols/chains.

## Additional Information :heavy_plus_sign:

- **If there are any other teams who have already contributed (financially) to the project:**
  - None
- **Previous grants you may have applied for:**
  - None for this project. Our team has taken w3f grants earlier to build [YieldScan](https://twitter.com/YieldScan)
