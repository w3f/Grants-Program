# W3F Grant Proposal

- **Project Name:** tDOT
- **Team Name:** NUTS Finance
- **Payment Address:** 0x679824d755B054a2a50358008472a6F400740319(DAI)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

This application is a follow-up of the [Stable Asset grant](https://github.com/w3f/Grants-Program/blob/master/applications/stable-asset.md).

### Overview

DOT serves three distinct purposes in Polkadot: governance, staking and bonding. These critical functions have increased DOT's demand but also segregated DOT's liquidity across multiple applications.

Several parachains and protocols arise to enhance DOT's capital efficiency, which includes:

* Staked DOT, e.g. Acala's LDOT and Parallel's xDOT
* Crowdloan DOT, e.g. Acala's LCDOT and Moonbeam's stDOT

These DOT derivatives, which represents different forms of DOT across the Polkadot network, further spread out DOT's liquidity. DOT's liquidity fragementation has caused several crucial issues:

* Each DOT derivative need to bootstrap their own liquidity and find a stable pricing
* Polkadot application builders need to support multiple forms of DOT assets

These hurdles are extremely difficult to overcome, given Polkadot network liquidity is still relatively low. tDOT aims at solving these issues by generating unified DOT liquidity across Polkadot applications.

### Project Details

tDOT is a DOT-pegged derivative built on top of the stable asset protocol.

Stable asset is based on Curve's stable swap algorithm and is back by a pool of assets with the same peg. It utilizes traders to dynamically rebalance pool composition while maintaining a consistent pool value, thus generating a synthetic asset whose peg is much stronger than any of the underlying assets.

taiKSM is the first KSM-pegged derivative deployed on the Dotsama ecosystem. It aggregates liquidity from KSM and Acala's LKSM to generate unified KSM liquidity in Karura. 

<img width="707" alt="image" src="https://user-images.githubusercontent.com/3374016/158498318-a1a4269c-d93b-42f1-a944-3f663ae99073.png">

tDOT extends the idea of taiKSM to provide unified DOT liquidity over the whole Polkadot network. Its architecture is shown above:

* For each xDOT, a separate xDOT-DOT stable swap pool is created on the parachain where xDOT is native;
* Each xDOT-DOT pool can mint and burn tDOT on parachain A which is tDOT's hosting chain;
* If xDOT is not on parachain A, e.g. cDOT and dDOT, xDOT-DOT pool uses XCM to mint and burn tDOT.

Each xDOT-DOT pool is a trading pair between xDOT and DOT. It allows a dynamic trading range between xDOT and DOT but ensures the value of pool derivative is pegged to DOT. Each xDOT represents a different form of 1 DOT in Polkadot network. According to the stable asset algorithm, when the exchange rate between xDOT and DOT trades at 1:1, tDOT is 100% collateralized and is backed by exactly 1 DOT. When the exchange rate shifts, tDOT is over-collateralized and the collateral ratio increases as the exchange rate shifts further. Each xDOT-DOT pool can control how fast the collateral ratio increases with its own parameter values.

Since each xDOT-DOT pool can maintain pegging of its own pool derivative, it's a natural choice to unify these pool derivatives into a single tDOT. This brings extra benefits:

* It ensures a single tDOT and it can be bridged to any parachain;
* It unifies all xDOTs over the Polkadot network. New xDOT assets can be included by deploying new xDOT-DOT pool on their native chains;
* It provides sufficient application scenarios for each xDOT. Other than the xDOT-DOT swap, it allows xDOT holders to mint and use tDOT in DeFi applications;
* It can be used as cross-chain swap medium. Assume that bDOT is native in parachain B and cDOT is native in parachain C. Users can mint tDOT with bDOT and then redeem tDOT to cDOT. This user effectively swaps bDOT on parachain B to cDOT in parachain C.

### Ecosystem Fit

tDOT will be minted on a single parachain which is the hosting parachain for tDOT. It can be migrated to a different parachain or even a dedicated parachain. The hosting parachain can deploy its own xDOT-DOT pools so that tDOT is minted locally.

Any other parachains such as Acala and Parallel which have their own native DOT derivatives can deploy xDOT-DOT pools on their own chains and mint tDOT on the hosting chain as remote minters. Their benefits include:

* The xDOT-DOT pool provides a stable swap between xDOT and DOT;
* The xDOT-DOT liquidity is locked in its original chain while minting tDOT so the parachains can retain its TVL;
* The minted tDOT can be bridged to other chains other than the hosting parachain. For example, the minted tDOT can be bridged back to Parallel and be used as collateral of Parallel's lending applicaiton.

For the whole Polkadot network, a standardized DOT derivative can service the entire Polkadot ecosystem; it can unify all forms of DOT liquidity and unleash maximum usability for DOT across Parachains.

## Team :busts_in_silhouette:

### Team members

- Daniel Tang, Co-founder
- Terry Lam, Co-founder
- Shengda Ding, Co-founder

### Contact

- **Contact Name:** Shengda Ding
- **Contact Email:** shengda@nuts.finance
- **Website:** [https://nuts.finance](https://nuts.finance)

### Legal Structure

- **Registered Address:** PO Box 309, Ugland House, Grand Cayman, KY1-1104, Cayman Islands
- **Registered Legal Entity:** ACoconut

### Team's experience

NUTS Finance is a blockchain development DAO. Our team is composed of experienced developers, financiers and serial entrepreneurs. We build open source, secure and composable technology solutions to empower developers and financial services providers to launch decentralized financial applications on the blockchain.

### Team Code Repos
* https://github.com/nutsfinance

### Team LinkedIn Profiles
* https://www.linkedin.com/in/joeztang
* https://www.linkedin.com/in/terry-lam-80a71927
* https://www.linkedin.com/in/dingshengda

## Development Status :open_book:

### Overview

- **Total Estimated Duration:** 4 weeks
- **Full-Time Equivalent (FTE):**  2
- **Total Costs:** 16,000 DAI

### Milestone 1 — Cross-Chain Mint

- **Estimated duration:** 1 week
- **FTE:**  2
- **Costs:** 4,000 DAI

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | Provide documentation on the architecture of tDOT and flow diagrams of cross-chain minting process. |  
| 0c. | Testing | Provide comprehensive tests that covers both stable asset local minter and stable asset remote minter. Test for remote minter must cover the case the minting fails due to minter access or minter cap. The underlying asset used to mint remotely must return to the user. |
| 0d. | Docker | Provide a Docker image with Substrate chain that demonstrate this project. |
| 1. | Substrate module: Stable Asset | The stable asset module will be enhanced with minter access control and minter cap functionalities. |  
| 2. | Substrate module: Stable Asset Local Minter | The stable asset local minter module is deployed in the stable asset hosting parachain. It uses local method calls to mint stable asset. |
| 3. | Substrate module: Stable Asset Remote Minter | The stable asset local minter module is deployed on parachains other than the stable asset hosting parachain. It relies on XCM v3 to mint stable asset remotely. Slippage control for remote minter is handled locally. Underlying assets used to mint stable asset remotely are locked until receiving XCM acknowledgement that stable asset is minted successfully. |

### Milestone 2 — Cross-Chain Redeem

- **Estimated duration:** 1 weeks
- **FTE:**  2
- **Costs:** 4,000 DAI

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | Provide documentation on the architecture of tDOT and flow diagrams of cross-chain redeem process. |  
| 0c. | Testing | Provide comprehensive tests that covers proportion, single and multi asset redeem.  |
| 0d. | Docker | Provide a Docker image with Substrate chain that demonstrate this project. |
| 1. | Substrate module: Stable Asset Local Minter | Proportion and single asset redeem are invoked in stable asset local minter which is deployed on the hosting parachain. If slippage fails on the receiving parachain, the locked stable asset is returned to the user.  |
| 2. | Substrate module: Stable Asset Remote Minter | Multi asset redeem is invoked in stable asset remote minter which is not deployed on the hosting parachain. If slippage fails on the hosting parachain, the locked multi assets are returned to the user. |


### Milestone 3 — Cross-Chain Swap

- **Estimated duration:** 1 week
- **FTE:**  2
- **Costs:** 4,000 DAI

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | Provide documentation on the architecture of tDOT and flow diagrams of cross-chain swap process. | 
| 0c. | Testing | Provide comprehensive tests that covers cross-chain swap process. The test must cover the case when there are insufficient liquidity on target parachain, or slippage fails.  |
| 0d. | Docker | Provide a Docker image with Substrate chain that demonstrate this project. |
| 0e. | Article | We will publish an article that explains the architecture of tDOT and how does cross-chain mint/redeem/swap works. The article will discuss potential attack vectors of tDOT and how does tDOT addresses it. |
| 1. | Substrate module: Stable Asset Remote Minter | Swap can be seen as a combination of cross-chain mint and single asset redeem. Stable asset remote minter will consolidate the process and handles slippage. |

### Milestone 4 — Cross-Chain Fees and Yield Hanlding

- **Estimated Duration:** 1 week
- **FTE:**  2
- **Costs:** 4,000 DAI

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | Provide documentation on the how the fees and yields are handled across multiple parachains. |  
| 0c. | Testing | Comprehensive tests that covers the Stable Asset Substrate modules on fees and yields handling. |
| 0d. | Docker | Provide a Docker image with Substrate chain that demonstrate this project. |
| 0e. | Article | We will publish an article that explains why and how tDOT maintains its peg to DOT, despite there are multiple forms of underlying DOT assets. |
| 1. | Substrate module: Stable Asset | The Stable Asset module will bookkeep all fees and yields locally until an explicit collect method is invoked. |
| 2. | Substrate module: Stable Asset Minters | The Stable Asset Local/Remote minters module will mint fees and yield explicitly. |


## Future Plans

We will upgrade taiKSM to tKSM with similar architecture shortly after the launch of tDOT. 
