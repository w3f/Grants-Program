# W3F Grant Proposal

- **Project Name:** Candle Auctions on Ink!
- **Team Name:** [@agryaznov](https://github.com/agryaznov)
- **Payment Address:** (DAI) 0x3ef892235Ca80B537f5916E208d8C612EA55aC69
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 1

## Project Overview :page_facing_up:

This application is submitted in response to the **[following RFP](rfps/candle-auction.md)**.

### Overview

- **An `Ink!` smart contract that handles a [candle auction](https://wiki.polkadot.network/docs/learn-auction#mechanics-of-a-candle-auction) mechanism.**
- I follow up the Substrate & Polkadot technology from the first `sub0` conference back then in 2019.  
  (_See my [blogpost](https://agryaznov.com/reports/2019/05/06/sub-0-highlights/) on that topic btw_)
- Started getting my hands dirty with it some time ago.
- Just want to implement some useful stuff. 

### Project Details
Project is a *Work in Progress*.  
Please have a look at the project's [Github repo](https://github.com/agryaznov/candle-auction-ink) for details and `cargo doc` documentation.  

Main **design considerations** to date are following:  

- Contract logic is heavily inspired by [parachain auction](https://github.com/paritytech/polkadot/blob/master/runtime/common/src/auctions.rs) implementation.
- Auction is initialized by setting Opening\Ending periods in block numbers.   
  ```rust
  // example of an auction schedule:
  //  [1][2][3][4][5][6][7][8][9][10][11][12][13]
  //     | opening  |        ending         |   
  ```
- The contract accepts payments and records participants` balances.
- Bids storage is a *HashMap* which stores only a top bid per user, therefore serving as users` balances ledger.  
- In order to make *candle* logic possible, we also store `winning_data` in featured *StorageVec* which holds bids for every *sample*.
- *Sample* is a number of consequent blocks identifying a time interval inside Ending Period.  
  In *PoC* version, sample equals to a single block. This will be enhanced later to be a configurable parameter.  
- The *winning sample* (i.e. in which candle "went out") will be randomly selected retrospectively after Ending period ends.  
- Bids are made by transferring an amount to increment current bidder's balance which effectively equals her top bid at any point of time.  
  > E.g. Alice making calls:  
  > 1. `bid()` with `101` `<Balance>` <- Alice' top bid is 101   
  > some time later, she calls 
  > 2. `bid()` again, with `1000` `<Balance>` <- Alice' top bid now is 1101 (*not 1000*)


See current project status [below](#development-status-open_book).

### Ecosystem Fit
> (*quote from the [RFP](rfps/candle-auction.md)*):
>   
> Auctions will come in handy for various types of applications, but especially for NFTs.
>
> The idea behind this proposal is to create an `ink!` smart contract that is able to run a candle auction mechanism. This will be known to Polkadot followers from the [parachain auction mechanism](https://wiki.polkadot.network/docs/en/learn-auction). One of the advantages of the candle mechanism is that it incentivises bidders to submit their true bids early, thus leading to more optimal market.
>
> Rather than restricting the use of candle auctions to parachain slot allocation only, users should be able to utilise it for other needs, e.g. auctioning off their NFTs.


## Team :busts_in_silhouette:

### Team members

- Alexander Gryaznov ([@agryaznov](https://github.com/agryaznov))

### Contact

- **Contact Email:** `hi` 🐶 `agryaznov.com`
- **Website:** [agryaznov.com](https://agryaznov.com)

### Team's experience

I do programming for the most part of my life.  
My professional career started at Intel in 2007 with implementing icc compiler benchmarking tools. 
A lot of projects have been done since then, including an 
[academic course](https://innopolis.university/ects/decentralized_applications_on_ethereum_platform/) on Decentralized Applications on Ethereum platform at Innopolis University in 2017.

### Team Code Repos

- https://github.com/agryaznov

### Team LinkedIn Profiles

- https://www.linkedin.com/in/agryaznovcom

## Development Status :open_book:

:heavy_check_mark: **PoC is implemented** (~75% completeness of the [Milestone-1](https://github.com/w3f/Grants-Program/blob/master/rfps/candle-auction.md#milestone-1---basic-auction)).  
Please see the project's [Github repo](https://github.com/agryaznov/candle-auction-ink) :point_left:  
which contains both sources and documentation.


## Development Roadmap :nut_and_bolt:
> *(This is taken as_is from the [RFP](rfps/candle-auction.md), as I agree with it)*

* **Total Estimated Duration:** 1 month
* **Full-time equivalent (FTE):** 1

### Milestone 1 - Basic auction

* **Estimated Duration:** 3 weeks
* **Costs:** 7500 DAI


| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 | 
| 0b. | Documentation | Inline documentation (builds to *cargo doc*) + basic *How-Tos* explaining installation, deployment and usage of the contract |
| 0c. | Testing | Core functions are covered by unit tests, which serve both sustainability of code and providing another way of explaining its logic |
| 0d. | Docker | `N/A` for smart contracts |
| 1. :white_check_mark: | Start & close period | Create an auction mechanism that has a fixed start and end period |
| 2. :white_check_mark: | Accept bids | Any user can call the contract with a bid that is higher than the last highest bid |
| 3. :white_check_mark: | Find winner | Determine a winner at the close period |
| 4.  | Embed reward logic | The contract creator should set logic that will be executable by the winner. Such call logic should accept optional parameters. This logic should be set at the start and be immutable henceforth |
| 5.  | Payout | A winner should be able to make a call, with an arbitrary number of parameters, to the reward/payout method. The contract would then pass the arguments to whichever logic is encoded as the reward (and e.g. send tokens) |

### Milestone 2 - Random close

* **Estimated Duration:** 1 weeks
* **Costs:** 2500 DAI


| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 | 
| 0b. | Documentation | Inline documentation (builds to *cargo doc*) + basic *How-Tos* explaining installation, deployment and usage of the contract |
| 0c. | Testing | Core functions are covered by unit tests, which serve both sustainability of code and providing another way of explaining its logic |
| 0d. | Docker | `N/A` for smart contracts |
| 0e. | Article | A blogpost and\or a workshop showing the smart contract features will be published | 
| 1. | Retroactive close | At the close block, rather than announcing the highest bidder at that point, the contract should randomly determine a block in the past (between start & end blocks) and calculate the highest bidder at that block to be the winner |
| 2. | Randomness source (optional) | Randomness source should be configurable (e.g. from hash of the block in the relay chain, from a randomness beacon parachain etc.)

## Future Plans

+ I would be happy to gather feedback from folks using the contract and to enhance it to better fit the real needs.  
+ Specific UI template for delaing with this contract could be implemented.
+ Probably making a tutorial out of this project would be valuable to be added to the [substrate.dev](https://docs.substrate.io/) portal.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** 

I came across its repository while surfing Parity's and W3F resources on Github. 
