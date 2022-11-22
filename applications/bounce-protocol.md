# Bounce Protocol

> This document is referenced in the terms and conditions and therefore needs to contain all the required information. Don't remove any of the mandatory parts presented in bold letters or as headlines! See the [Open Grants Program Process](https://github.com/w3f/Open-Grants-Program/blob/master/README_2.md) on how to submit a proposal.

* **Team Name:** Bounce
* **Payment Address:** bc1qwm44hpv8qyvmwpcupqwn4rx52xzt5qr9lremhz
* **Status:** [Terminated](https://github.com/w3f/Open-Grants-Program/pull/159#issuecomment-830110107)

*The above combination of your GitHub account submitting the application and payment address will be your unique identifier during the program. Please keep them safe.*

## Project Overview :page_facing_up:

### Overview

Bounce is a decentralized auction platform, incorporating liquidity mining, decentralized governance and staking mechanisms. The first principle of Bounce is scarcity of resources, which creates a competitive swap environment.

The idea of “swap” originated from Uniswap, where infinite liquidity is provided for participants. While this is a great and concept, Bounce focusses on the opposite scenario instead.

Bounce provides a competitive environment, for a limited supply of tokens or other assets like NFT's. The assets can be auctioned off in various ways, such as:

* **Token sales**: Various types of auctions  where a limited amount of tokens are auctioned off with different auction principles and time limits, such as fixed price (fixed swap auction), decreasing price (Dutch auction) or  hidden price (sealed-bid auction)

* **NFT auctions**: NFT's are auctioned off with similar auction principles as token sales. However, there is usually a lower number of NFT's (or only a unique piece) for sale.

We will run Bounce chain as standalone chain first, then join in Kusama/Polkadot network when parachain mechanism is ready.

### Ethereum contracts vs Substrate modules

| Number | Ethereum contracts | Substrate modules |
| ------------- | ------------- | ------------- |
| 1.  | high gas fee | low tx fee |
| 2.  | hard to upgrade | easy and seamless module upgrade |
| 3.  | poor governance | strong governance |
| 4.  | payout manually by user | payout automatically by call on_finalize() or offchain_worker() |
| 5.  | hard to prevent scam auction pools | introduce social module to prevent scam auction pools |

### Project Details

* An overview of the technology stack to be used
  * **Blockchain**: Rust/Substrate/Cumulus/Docker
  * **Frontend**: Javascript/React/polkadot.js
* Documentation of core components, protocols, architecture etc. to be deployed
  * **Fixed Swap Auction**: <https://docs.bounce.finance/bounce-auction-types/fixed-swap-auction>
  * **Sealed Bid Auction**: <https://docs.bounce.finance/bounce-auction-types/sealed-bid-auction>
  * **Dutch Auction**: <https://docs.bounce.finance/bounce-auction-types/dutch-auction>
* PoC/MVP or other relevant prior work or research on the topic
  * Our products have launched on Ethereum and Binance Smart Chain: <https://app.bounce.finance/>

### Ecosystem Fit

Bounce is currently only viable decentralized auction protocol that is live on Ethereum and Binance Smart Chain

## Team :busts_in_silhouette:

### Team members

* Jack Lu
* seiya1192

### Contact

* **Contact Name:** Jack Lu
* **Contact Email:** jack@bounce.community
* Website: <https://bounce.finance>

### Legal Structure

* **Registered Address:** Three Embarcadero Center, Promenade Level Suite P5, San Francisco, CA 94111
* **Registered Legal Entity:** Bounce DAO Limited

### Team's experience

**Jack Lu:** Based in San Francisco, Haozheng "Jack" Lu is the investment director at NGC and founder of Bounce Finance. Jack specializes in researching blockchain mechanisms for generating decentralized consensus and real-world implications provided by blockchain. Jack’s invaluable presence at the company is defined by his abilities to analyze economic and social models behind projects, while also exploring the game theoretical topics including incentive provisions, industrial organization and market microstructure on blockchain and smart contract. Jack is an Economics support to NGC portfolio projects , helping with research in economics of information and economics of cloud computing.

### Team Code Repos

* <https://github.com/bouncefinance/bounce-network>

## Development Roadmap :nut_and_bolt:

### Overview

* **Total Estimated Duration:** 2 months
* **Full-time equivalent (FTE):**  2 FTE
* **Total Costs:** 0.9 BTC

### Milestone 1 — Implement Substrate Modules and Bounce Chain

* **Estimated Duration:** 2 month
* **FTE:**  2
* **Costs:** 0.9 BTC

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can (for example) spin up one of our Substrate nodes. Once the node is up, it will be possible to send test transactions that will show how the new functionality works. |
| 0c. | Testing Guide | The code will have unit-test coverage (min. 70%) to ensure functionality and robustness. In the guide we will describe how to run these tests |
| 0d. | Article/Tutorial | We will write an article or tutorial that explains the work done as part of the grant.
| 1. | Substrate module: fixed-swap-auction | Implement the core function of fixed swap auction |
| 2. | Substrate module: sealed-bid-auction | Implement the core function of sealed bid auction |
| 3. | Substrate module: dutch-auction | Implement the core function of dutch auction |
| 4. | Substrate module: english-auction | Implement the core function of english auction |
| 5. | Substrate module: nft | Implement an ERC1155-like asset module |
| 6. | Bounce chain | Implement a blockchain based on Substrate and include ERC20 & NFT asset and auctions modules |  
| 7. | Docker | We will provide a dockerfile to demonstrate the full functionality of our chain |

## Future Plans

* We will integrate EVM module into Bounce Chain to support Ethereum ERC20 tokens.
* We will implement more type of auctions like lottery auction, social verified auction, etc.

## Additional Information :heavy_plus_sign:

Possible additional information to include:

* What work has been done so far?

  Bounce dApp product on Ethereum and Binance Smart Chain.

* Are there are any teams who have already contributed (financially) to the project?

  No

* Have you applied for other grants so far?

  No
