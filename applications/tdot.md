# tDOT

- **Team Name:** NUTS Finance
- **Payment Address:** 0x679824d755B054a2a50358008472a6F400740319(DAI)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2
- **Status:** [Terminated](https://github.com/w3f/Grants-Program/pull/872#issuecomment-1424407082)

## Project Overview :page_facing_up:

This application is a follow-up of the [Stable Asset grant](https://github.com/w3f/Grants-Program/blob/master/applications/stable-asset.md).

### Overview

DOT serves three distinct purposes in Polkadot: governance, staking and bonding. These critical functions have increased DOT's demand but also segregated DOT's liquidity across multiple applications.

Several parachains and protocols arise to enhance DOT's capital efficiency, which includes:

- Staked DOT, e.g. Acala's LDOT and Parallel's xDOT
- Crowdloan DOT, e.g. Acala's LCDOT and Moonbeam's stDOT

These DOT derivatives, which represents different forms of DOT across the Polkadot network, further spread out DOT's liquidity. DOT's liquidity fragementation has caused several crucial issues:

- Each DOT derivative need to bootstrap their own liquidity and find a stable pricing
- Polkadot application builders need to support multiple forms of DOT assets

These hurdles are extremely difficult to overcome, given Polkadot network liquidity is still relatively low. tDOT aims at solving these issues by generating unified DOT liquidity across Polkadot applications.

### Project Details

tDOT is a DOT-pegged derivative built on top of the stable asset protocol.

Stable asset is based on Curve's stable swap algorithm and is back by a pool of assets with the same peg. It utilizes traders to dynamically rebalance pool composition while maintaining a consistent pool value, thus generating a synthetic asset whose peg is much stronger than any of the underlying assets.

taiKSM is the first KSM-pegged derivative deployed on the Dotsama ecosystem. It aggregates liquidity from KSM and Acala's LKSM to generate unified KSM liquidity in Karura.

<img width="707" alt="image" src="https://user-images.githubusercontent.com/3374016/158498318-a1a4269c-d93b-42f1-a944-3f663ae99073.png" />

tDOT extends the idea of taiKSM to provide unified DOT liquidity over the whole Polkadot network. Its architecture is shown above:

- For each xDOT, a separate xDOT-DOT stable swap pool is created on the parachain where xDOT is native;
- Each xDOT-DOT pool can mint and burn tDOT on parachain A which is tDOT's hosting chain;
- If xDOT is not on parachain A, e.g. cDOT and dDOT, xDOT-DOT pool uses XCM to mint and burn tDOT.

Each xDOT-DOT pool is a trading pair between xDOT and DOT. It allows a dynamic trading range between xDOT and DOT but ensures the value of pool derivative is pegged to DOT. Each xDOT represents a different form of 1 DOT in Polkadot network. According to the stable asset algorithm, when the exchange rate between xDOT and DOT trades at 1:1, tDOT is 100% collateralized and is backed by exactly 1 DOT. When the exchange rate shifts, tDOT is over-collateralized and the collateral ratio increases as the exchange rate shifts further. Each xDOT-DOT pool can control how fast the collateral ratio increases with its own parameter values.

Since each xDOT-DOT pool can maintain pegging of its own pool derivative, it's a natural choice to unify these pool derivatives into a single tDOT. This brings extra benefits:

- It ensures a single tDOT and it can be bridged to any parachain;
- It unifies all xDOTs over the Polkadot network. New xDOT assets can be included by deploying new xDOT-DOT pool on their native chains;
- It provides sufficient application scenarios for each xDOT. Other than the xDOT-DOT swap, it allows xDOT holders to mint and use tDOT in DeFi applications;
- It can be used as cross-chain swap medium. Assume that bDOT is native in parachain B and cDOT is native in parachain C. Users can mint tDOT with bDOT and then redeem tDOT to cDOT. This user effectively swaps bDOT on parachain B to cDOT in parachain C.

### Ecosystem Fit

tDOT will be minted on a single parachain which is the hosting parachain for tDOT. It can be migrated to a different parachain or even a dedicated parachain. The hosting parachain can deploy its own xDOT-DOT pools so that tDOT is minted locally.

Any other parachains such as Acala and Parallel which have their own native DOT derivatives can deploy xDOT-DOT pools on their own chains and mint tDOT on the hosting chain as remote minters. Their benefits include:

- The xDOT-DOT pool provides a stable swap between xDOT and DOT;
- The xDOT-DOT liquidity is locked in its original chain while minting tDOT so the parachains can retain its TVL;
- The minted tDOT can be bridged to other chains other than the hosting parachain. For example, the minted tDOT can be bridged back to Parallel and be used as collateral of Parallel's lending applicaiton.

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
- https://www.linkedin.com/in/terry-lam-80a71927
- https://www.linkedin.com/in/dingshengda

## Development Status :open_book:

### Overview

- **Total Estimated Duration:** 4 weeks
- **Full-Time Equivalent (FTE):**  2
- **Total Costs:** 14,000 DAI

### Milestone 1 — Stable Asset XCM Pallet

- **Estimated duration:** 1 week
- **FTE:**  2
- **Costs:** 4,000 DAI

Stable Asset XCM pallet is a new module which will be deployed in the host chain only. It manages balances and limits for each individual stable asset pools and acts as the portal to mint and redeem tDOT.

Stable asset LPs will be divided into two layers:

- Local LP, which is the LP of individual stable asset pools and managed by stable asset pallet;
- Aggregate LP, which is the LP generated by local LPs and managed by stable asset XCM pallet.

![image](https://user-images.githubusercontent.com/3374016/179861856-ffeaf4f8-2501-4cd2-b0b1-f0ea6a998c52.png)


| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | Provide documentation on the architecture of tDOT. |  
| 0c. | Testing | Provide comprehensive tests that covers stable asset pool management functionalities. |
| 0d. | Docker | Provide a Docker image with Substrate chain that demonstrate this project. |
| 1. | Substrate module: Stable Asset XCM | The stable asset XCM module tracks and manages individual stable asset pools across multiple parachains. It tracks balances of each stable asset pools in each parachain and sets mint limits for each pool. |  

### Milestone 2 — tDOT Minting

- **Estimated duration:** 2 weeks
- **FTE:**  2
- **Costs:** 5,000 DAI

This milestone implements minting tDOT both locally on the host chain and remotely on the guest chains. In either case, minting is triggered in the stable asset pallet.

![image](https://user-images.githubusercontent.com/3374016/179863159-9f130f5b-3ff6-4f06-a85e-3d243c6d5c39.png)

![image](https://user-images.githubusercontent.com/3374016/179863205-7258e9a9-26f4-4a46-9b76-e0773fa8fbed.png)


| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | Provide documentation on the architecture of tDOT and flow diagrams of tDOT minting process. |  
| 0c. | Testing | Provide comprehensive tests that covers minting tDOT locally in host chain and remotely in guest chain.  |
| 0d. | Docker | Provide a Docker image with Substrate chain that demonstrate this project. |
| 1. | Substrate module: Stable Asset Pallet | Users can mint tDOT on stable asset pallet with underlying asset or with local LP. If minting fails in host chain, the whole extrinsic is reverted. If minting fails in guest chain, user will get local LP.  |
| 2. | Substrate module: Stable Asset XCM Pallet | Handles the actual aggregate LP minting. It accepts XCM mint request from guest chain with local LP, and sends back XCM message if minting fails due to mint limit exceeds. |


### Milestone 3 — tDOT Redeeming

- **Estimated duration:** 2 weeks
- **FTE:**  2
- **Costs:** 5,000 DAI

This milestone implements redeeming tDOT on host chain.

![image](https://user-images.githubusercontent.com/3374016/179863963-5bee9e99-f4a1-42c8-a274-50f2c81420d3.png)


| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | Provide documentation on the architecture of tDOT and flow diagrams of tDOT redeeming process. |
| 0c. | Testing | Provide comprehensive tests that covers redeeming tDOT to host chain or to guest chains.  |
| 0d. | Docker | Provide a Docker image with Substrate chain that demonstrate this project. |
| 0e. | Article | We will publish an article that explains the architecture of tDOT and how minting and redeeming tDOT works. The article will discuss potential attack vectors of tDOT and how does tDOT addresses it. |
| 1. | Substrate module: Stable Asset XCM Pallet | Handles the aggregate LP redeeming request, eitehr in proportion or to a single asset. If redeeming to a local stable asset pool fails, the whole extrinsic is reverted. If redeeming to a remote stable asset pool fails, users will get local asset on the guest chain instead. |


## Future Plans

We will upgrade taiKSM to tKSM with similar architecture shortly after the launch of tDOT.
