# W3F Grant Proposal

- **Project Name:** tDOT
- **Team Name:** NUTS Finance
- **Payment Address:** 0x679824d755B054a2a50358008472a6F400740319(DAI)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

This application is a follow-up of the Stable Asset grant.

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

tDOT is a synthetic DOT-pegged asset built on top of the stable asset protocol.

Stable asset is a synthetic asset based on Curve's stable swap algorithm and is back by a pool of assets with the same peg. It utilizes traders to dynamically rebalance pool composition while maintaining a consistent pool value, thus generating a synthetic asset whose peg is much stronger than any of the underlying assets.

taiKSM is the first stable asset deployed on the Dotsama ecosystem. It aggregates liquidity from KSM and Acala's LKSM to generate unified KSM liquidity in Karura. 

<img width="707" alt="image" src="https://user-images.githubusercontent.com/3374016/158498318-a1a4269c-d93b-42f1-a944-3f663ae99073.png">

tDOT extends the idea of taiKSM to provide unified DOT liquidity over the whole Polkadot network. Its architecture is shown above:

* For each xDOT, a separate xDOT-DOT stable swap pool is created on the parachain where xDOT is native;
* Each xDOT-DOT pool can mint and burn tDOT on parachain A which is tDOT's hosting chain;
* If xDOT is not on parachain A, e.g. cDOT and dDOT, xDOT-DOT pool uses XCM to mint and burn tDOT.

Each xDOT-DOT pool is a trading pair between xDOT and DOT. It allows certain range of price difference between xDOT and DOT but ensures the value of its synthetic asset is pegged to DOT. Each xDOT represents a different form of 1 DOT in Polkadot network. According to the stable asset algorithm, when the prices of xDOT and DOT are equal, the synthetic asset is 100% collateralized and is backed by exactly 1 DOT. When the price of xDOT shifts, the synthetic asset is over collateralized and the collateral ratio increases as price shifts further. Each xDOT-DOT pool can control how fast the collateral ratio increases with its own parameter values.

Since each xDOT-DOT pool can maintain pegging of its own synthetic asset, it's a natural choice to unify these synthetic assets into a single tDOT. This brings extra benefits:

* It ensures a single tDOT and it can be bridged to any parachain;
* It unifies all xDOTs over the Polkadot network. New xDOT assets can be included by deploying new xDOT-DOT pool on their native chains;
* It provides sufficient application scenarios for each xDOT. Other than the xDOT-DOT swap, it allows xDOT holders to mint and use tDOT in DeFi applications;
* It can be used as cross-chain swap medium. Assume that bDOT is native in parachain B and cDOT is native in parachain C. Users can mint tDOT with bDOT and then redeem tDOT to cDOT. This user effectively swaps bDOT on parachain B to cDOT in parachain C.

### Ecosystem Fit

tDOT will be minted on Acala since it's the DeFi hub in the Polkadot ecosystem. Acala provides both staked DOT, namely LDOT and crowdloan DOT, namely LCDOT which are both mainstream DOT assets. LCDOT-DOT and LDOT-DOT will be the first two xDOT-DOT pools as well as the first two minters of tDOT. tDOT unifies all DOT liquidity on Acala and it can be used in Acala's native DeFi applications.

Parachains such as Parallel can deploy xDOT-DOT pools on their own chains and mint tDOT on Acala. Their benefits include:

* The xDOT-DOT pool provides a stable swap between xDOT and DOT;
* The xDOT-DOT liquidity is locked in its original chain while minting tDOT so that their TVL is not lost;
* The minted tDOT can be bridged to other chains other than Acala. For example, the minted tDOT can be bridged back to Parallel and be used as collateral of Parallel's lending applicaiton.

For the whole Polkadot network, a unified DOT asset can promote its DeFi applications since it can provide the largest DOT liquidity over the network. In such case, DeFi application builders can support a single DOT asset instead of managing multiple ones.

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
* https://www.linkedin.com/dingshengda

## Development Status :open_book:

### Overview

- **Total Estimated Duration:** 4 weeks
- **Full-Time Equivalent (FTE):**  2
- **Total Costs:** 20,000 DAI

### Milestone 1 — Cross-Chain Mint and Burn

- **Estimated duration:** 2 weeks
- **FTE:**  2
- **Costs:** 10,000 DAI

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0. | License | Apache 2.0 |
| 1. | Documentation | Provide documentation on the architecture of tDOT and flow diagrams of cross-chain minting and burning process |  
| 2. | Substrate module: Tokens | We will enhance the tokens modules with minter access control and minter cap functionalities. |  
| 3. | Substrate module: Stable Asset | We will enhance the stable asset module with cross-chain minting and burning functionalities. |  
| 4. | Testing | Comprehensive tests that covers the tokens and stable asset Substrate modules. |
| 5. | Docker | Provide a Docker image with Substrate chain that demonstrate this project. |

### Milestone 2 Example — Cross-Chain Fees and Yield Hanlding

- **Estimated Duration:** 2 weeks
- **FTE:**  2
- **Costs:** 10,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0. | License | Apache 2.0 |
| 1. | Documentation | Provide documentation on the how the fees and yields are handled across multiple chains |  
| 2. | Substrate module: Stable Asset | We will enhance the stable asset module with cross-chain fees and yields handling functionalities. |  
| 3. | Testing | Comprehensive tests that covers the stable asset Substrate modules. |
| 4. | Docker | Provide a Docker image with Substrate chain that demonstrate this project. |


## Future Plans

We will support DOT assets in EVM, such as stDOT, in the follow-up grant.
