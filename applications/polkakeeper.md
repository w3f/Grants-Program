# Polkakeeper Grant Proposal

![](https://rampdefi.com/polkakeeper/digitalassets/polkakeeperlogo.png)

# Polkakeeper

- **Team Name:** RAMP DEFI
- **BTC Payment Address:** 1DQNr9EyYmoS5hbwRzQkfNrw5DS247cpF8
- **Status:** [Terminated](https://github.com/w3f/Grants-Program/pull/200#issuecomment-897495999)

## Polkakeeper - A Community-Led Value Assurance Protocol Empowering DeFi Markets Efficiency on Polkadot

**Project Overview**

Polkakeeper is a decentralized value assurance underwriter that empowers community creation of keeper strategies on the Polkadot network and bridged chains. On Polkakeeper, Strategists create Keepers (smart contracts), which can be executed by Finders who actively search for keeper execution opportunities. Backers are users who deposit their funds or assets into Vaults to back the deployment of keeper strategies.

Keepers are automated on-chain value assurance strategies that increase overall DeFi market efficiencies, such as liquidating undercollateralized positions in lending / margin trading protocols, or smoothing asset prices through arbitrage strategies across exchanges. We expect that as the Polkadot infrastructure matures, Keepers may deploy assets across chains, which give strategies new dimensions in identifying profit opportunities. A simple example of a liquidator keeper module in action would be a strategy that: (i) Finder discovers liquidation opportunity and calls Keeper function; (ii) Keeper checks profit execution logic for liquidation value less funds deployed > 0; (iii) If profit logic is established, Keeper calls borrow function on Vaults, executes liquidation and return funds to Vaults within one transaction.

Upon successful Keeper execution, the profits is distributed among the Strategist, Finder and Vaults. Where funds or assets in Vaults are not utilized, they are deployed to lending protocols and optimized for the best yields across chains.

The vision for Polkakeeper is to become the leading value assurance protocol and through DAO governance, organizes the Polkadot developer and user communities towards optimizing and maintaining high level of market efficiencies for Polkadot DeFi protocols. Polkakeeper is designed to empower community collaboration for Strategists, Finders and users to act collectively, rather than individually.

Polkakeeper is designed as an independent, composable Substrate component that can be seamlessly integrated and deployed across Polkadot’s multi-chain network.

## Project Details

Overview Diagram of how Polkakeeper works
![](https://rampdefi.com/polkakeeper/digitalassets/technical_diagram_updated.png)

# Sample Scenario

A description of how Polkakeeper Liquidator Module works, by walking through a typical scenario:

## 1\. Installation

1.  Defi product includes Polkakeeper Pallets into the runtime:
    - PolkakeeperVault
    - PolkakeeperLiquidator
    - PolkakeeperLiquidatorAdapter

## 2\. Adaptation

1.  Developers implement functions in PolkakeeperLiquidatorAdapter to fit the destination platform:
    - liquidate
2.  Connect the UserInterface to the extrinsic in the Liquidator runtime.

## 3\. Usage

1.  Backers fund the Vault
2.  Finders execute the Strategy using the extrinsic function or the UI.

# Glossary

- Finder
    
    - A user who identifies opportunities to execute the Keeper strategy against. The finding is done off-chain due to the required computing/network resources needed. The outcome is a transaction that invokes the Keeper which has specific parameters embedded, for example a liquidation.
- Backer
    
    - A user who provides liquidity to the Vaults. By pooling funds, Keepers can execute on liquidation opportunities with leverage. Backers earn from the profits made by the Keeper.
- Vaults
    
    - A pooled user funds module for Backers to add liquidity. Keepers utilize pooled user funds within the Vaults to execute on profit opportunities.
- Strategy: Liquidator.
    
    - Code that executes against a specific DeFi platform to capture liquidation opportunities. For now, this is liquidation extrinsic only. Keeper: Liquidator includes conditional profit-only logic that ensures return of principal back to the Vault.

# Runtime Modules

## Vault

### Methods

```rust
pub fn borrow(asset_id: T::AssetId, amount: T::Balance) -> Result;
pub fn deposit(asset_id: T::AssetId, amount: T::Balance) -> Result;
pub fn withdraw(asset_id: T::AssetId, amount: T::Balance) -> Result;
```

## Liquidator

### Methods

```rust
fn liquidate(
    origin, 
    target_user: T::AccountId, 
    pay_asset_id: T::AssetId, 
    get_asset_id: T::AssetId, 
    pay_asset_amount: T::Balance,
    max_liquidatable: T::Balance,
    borrow_amount: T::Balance
) -> Result;

// liquidate has internal checks for proper valuation of the asset
// using the assetPriceAdapter, so it only executes if 
//     (pay_asset_price * pay_asset_amount) > borrowAmount

```

## LiquidatorAdapter

### Methods

```rust
fn liquidate(
    origin, 
    target_user: T::AccountId, 
    pay_asset_id: T::AssetId, 
    get_asset_id: T::AssetId, 
    pay_asset_amount: T::Balance,
) -> Result;

fn assetPriceAdapter(
    origin,
    asset_id: T::AssetId
) -> Result;

```

# Backend Development

This project has no backend component.

# UI Development

We will implement a basic frontend component in React + Javascript + Polkadot.js. This component can be incorporated into the implementing platform's User Interface.

## UI: User goals

1.  Load the application in the browser
2.  Sign in to a chain with a wallet
3.  Choose Keeper
4.  See Keeper details
5.  Choose Account/Position to act on
6.  See Asset to Pay
7.  See Asset to Get
8.  See needed Amount to pay
9.  Choose Amount to pay
10. Choose whether to Borrow from Vault
11. See available borrowable amount from Vault
12. Execute transaction

# Team

## Team members

**Lawrence Lim**

- Project Lead for RAMP DEFI, a leading DeFi protocol providing cross-chain liquid staking solutions.
- Head of International Growth at IOST, a layer 1 blockchain protocol.
- Global Sales at TradeGecko, an inventory management software company acquired by Intuit.
- Corporate finance and private banking in global financial institutions including JP Morgan, BNP Paribas and KPMG.
- LinkedIn: https://www.linkedin.com/in/lawrencelimhz/

**Loh Zheng Rong**

- Global Marketing Lead for RAMP DEFI overseeing overall project marketing execution and team operations.
- Investments and blockchain advisory at Merkle Ventures.
- COO of Toucan, Payments aggregator platform in S.E.A region.
- LinkedIn: https://www.linkedin.com/in/lohzhengrong/

**Jade Wang**

- Greater China Marketing Lead for RAMP DEFI, focusing on China market growth and development.
- International Marketing Manager for IOST, a layer 1 blockchain protocol with headquarters in Beijing.

**Caspar Oostendorp**

- Technical Lead for RAMP DEFI overseeing technical R&D, multi-chain protocol deployments and multi-chain node operations.
- Co-founder of BlockDevs Asia, a community of DLT/Blockchain tech devs.
- Co-founder of Oost & Voort, specializing in cloud and blockchain solutions.
- LinkedIn: https://www.linkedin.com/in/caspar-oostendorp-7bb82873/

**Anu Nair**

- Blockchain Lead for RAMP DEFI overseeing product R&D, multi-chain protocol integrations and smart contracts development.
- Senior blockchain developer at Propine, a digital asset custodian regulated by the Monetary Authority of Singapore.
- Senior software engineer in leading software companies including Oracle and Manthan.
- LinkedIn: https://www.linkedin.com/in/anu-b-nair-0551763a/

**Jeannette Zhang**

- Operations Lead overseeing business operations and finance.
- Strategy and Finance Manager at Hashed.Labs, a blockchain incubator in partnership with the Singapore government.
- Senior Auditor at Deloitte overseeing audit engagements.
- LinkedIn: https://www.linkedin.com/in/jeanettez/

# Team's Experience

Polkakeeper is conceptualized by RAMP DEFI, a leading DeFi project specializing in cross-chain staked liquidity solutions. The team members collectively have commercial experiences in scaling up decentralized projects and node operations, and have deep technical expertise in blockchain protocol developments in various programming languages including Solidity, Javascript and Python.
RAMP helps users unlock the value of non-ERC20 assets by collateralizing them into fungible liquidity and bridging this liquidity into Ethereum. As of today, RAMP had already created integrations across Ethereum, IOST, Tomochain and Tezos, with more integrations under active development.
RAMP is already building cross-chain keeper solutions, and its suite of DeFi products for staked liquidity and value assurance can similarly be customized and launched for the Polkadot network.

App link: https://app.rampdefi.com/#/

RAMP Vaults TVL: 15.4 Million USDT value
https://app.rampdefi.com/#/vault

![](https://rampdefi.com/polkakeeper/digitalassets/vaults.png)

RAMP DEFI rStake: Cross-chain integrated stake farming with native assets

- https://app.rampdefi.com/#/stake/iost
- https://app.rampdefi.com/#/stake/tomo
- https://app.rampdefi.com/#/stake/tezos

![](https://rampdefi.com/polkakeeper/digitalassets/rstake.png)

**Integration Partners for RAMP DEFI include:**

IOST | TOMOCHAIN | SOLANA | ELROND | NULS | MOONSTAKE | INJECTIVE PROTOCOL | CRUST | STONE FINANCE | ALLIANCE BLOCK

### Team Code Repos

- https://github.com/RAMP-DEFI
- https://github.com/RAMP-DEFI/RAMP_IOST
- https://github.com/RAMP-DEFI/RAMP_TOMOCHAIN
- [https://github.com/RAMP-DEFI/RAMP\_VERSION\_TEZOS](https://github.com/RAMP-DEFI/RAMP_VERSION_TEZOS)
- [https://github.com/RAMP-DEFI/RAMP\_REWARDS\_MANAGER](https://github.com/RAMP-DEFI/RAMP_REWARDS_MANAGER)
- https://github.com/RAMP-DEFI/RAMP_API
- [https://github.com/RAMP-DEFI/RAMP\_WEB\_MAIN](https://github.com/RAMP-DEFI/RAMP_WEB_MAIN)
- https://github.com/RAMP-DEFI/RAMP_wRAMP
- https://github.com/RAMP-DEFI/RAMP_IOSTSWAP
- [https://github.com/RAMP-DEFI/RAMP\_Public\_Sale](https://github.com/RAMP-DEFI/RAMP_Public_Sale)
- [https://github.com/RAMP-DEFI/RAMP\_ERC\_CLAIM_DAPP](https://github.com/RAMP-DEFI/RAMP_ERC_CLAIM_DAPP)
- [https://github.com/RAMP-DEFI/RAMP\_SECURITY\_AUDITS_REWARDS](https://github.com/RAMP-DEFI/RAMP_SECURITY_AUDITS_REWARDS)
- [https://github.com/RAMP-DEFI/RAMP\_SECURITY\_AUDITS_IOST](https://github.com/RAMP-DEFI/RAMP_SECURITY_AUDITS_IOST)
- [https://github.com/RAMP-DEFI/RAMP\_SECURITY\_AUDITS_TOMOCHAIN](https://github.com/RAMP-DEFI/RAMP_SECURITY_AUDITS_TOMOCHAIN)

# Contact

- Contact Name: LOH ZHENG RONG
- Contact Email: zr@rampdefi.com
- Website: https://polkakeeper.com

# Legal Structure

- Registered Address: 14 ROBINSON ROAD #08-01A FAR EAST FINANCE BUILDING S(048545), SINGAPORE
- Registered Legal Entity: Ramp Protocol Pte Ltd
- Country of registration: Singapore

# Ecosystem Fit

**Comparable projects**

- Keep3r.network: https://keep3r.network/ (Ethereum)
- KeeperDao: https://keeperdao.com/ (Ethereum)
- Web3 Guardian : https://github.com/open-web3-stack/guardian (Ethereum)

# Milestones:

### Overview

- **Total Estimated Duration:** 3 Months / POC
- **Full-time equivalent (FTE):** 2.75
- **Total Costs:** 0.55 BTC

### Technical Milestones

#### Milestone 1: Beta Release (0.275 BTC)

| Deliverable | Description |
| --- | --- |
| License | All code will be open-sourced under the MIT license and shared in Github or Gitlab. We welcome contribution and reuse. |
| Source code | Public source code repository containing a Rust codebase based on the Substrate Node Template would be set up. Pallets implemented using Rust, using the Substrate Framework. |
| Source code | Vault, Liquidator and MockLiquidatorAdaptor pallets implemented with initial (<30%) unit test coverage. |
| Source code | Include a Reference runtime for testing locally. |
| Source code | React project for the User Interface Functionality: Feature complete for local execution, with basic documentation on how to run it locally and contribute. Basic layout/styling. |
| Tooling | Docker container build setup that allows developers to get started quickly |
| Community | Opening the codebase and inviting open-source developers to submit PRs. |
| Community | Publish a Medium Article that announces all deliveries and a step by step tutorial for the developer community once evaluation is passed |
| Documentation | Initial public outline of the documentation |

#### Milestone 2: Final Release (0.275 BTC)

| Deliverable | Description |
| --- | --- |
| License | All code will be open-sourced under the MIT license and shared in github or gitlab. We welcome contribution and reuse. |
| Source code | Inline documentation of the code and a guide that explains how to integrate the Vault, Liquidator and LiquidatorAdaptor pallets into other DeFi projects. |
| Source code | All Vault, Liquidator and LiquidatorAdaptor and AssetPriceAdapter components are completed and documented. |
| Source code | Unit tests at 85% coverage. |
| Source code | Includes reference/example code for implementation in other projects and contribution. |
| UI / Functionality | Feature complete (see User Stories) including a reference integration with a real-world (but testnet most likely) chain. |
| UI / Functionality | React App source code available and deployed in working state to an online location for demo purposes. |
| Documentation | Complete, aimed at developers integrating Polkakeeper into DeFi projects. |
| Integration | Adapter pallet templates and example implementations complete and documented |
| Community | Launch of Polkakeeper components in Substrate/Polkadot dev community |

### Technical Stack

- Programming language: Rust
- Framework: Substrate + FRAME
- Project template: Substrate Node Template
- Source control: Github or Gitlab
- CI/CD: Docker container based, with Runners or Actions
- Front-end: React + Polkadot.js

## Marketing and Community Engagement

We will write articles and grow marketing awareness around Polkakeeper’s development and implementation on Polkadot. As RAMP is a leading DeFi project, there is a ready community of DeFi users who can consume this content, and a marketing network for content distribution. They include, but are not limited to:

- Medium Articles on the product design, integration and tutorials for users.
- Twitter posts covering development and other announcements.
- Community engagement by running a range of incentivised testnets to get more feedback from the existing end-users to improve the Polkakeeper solution.
- On-boarding and seeding the Polkakeeper community via the RAMP community.

## Future Plans

Future Developments will focus on the following:

- Collaboration with DeFi partners on Polkadot
- Bug bounties to enhance security for users
- Community developer grants and incentive programs for Strategists and Finders to develop Polkakeeper and scale up network value

## Additional Information

**What work has been done so far?**
Base layer groundwork has been completed with substrate infrastructure planning. Subsequent bottom up construction of the solution would be developed in parts to ensure each running functionality performs as intended.

**Are there any teams who have already contributed (financially) to the project?**
Our R&D expenses have been covered thus far via RAMP DEFI with world class investors who took part in RAMP DEFI’s private sale round such as Alameda Research, Mechanism Capital, Arrington XRP, Parafi Capital, among others.

We have further investment interest for follow-on investment should the need arise between the use of this grant and our next source of funding, whether that be the General Grants program or another VC-led investment.

**Have you applied for other grants so far?**
No.

**How can I get involved?**
Anyone looking to get involved with RAMP DEFI is welcomed to reach out to us at: team@polkakeeper.com
