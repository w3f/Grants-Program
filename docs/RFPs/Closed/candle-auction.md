# Candle auction smart contract

* **Status:** [Implemented](https://github.com/agryaznov/candle-auction-ink/tree/master)
* **Proposer:** [mmagician](https://github.com/mmagician)


## Project Description :page_facing_up:

Auctions will come in handy for various types of applications, but especially for NFTs.

The idea behind this proposal is to create an `ink!` smart contract that is able to run a candle auction mechanism. This will be known to Polkadot followers from the [parachain auction mechanism](https://wiki.polkadot.network/docs/en/learn-auction). One of the advantages of the candle mechanism is that it incentivises bidders to submit their true bids early, thus leading to more optimal market.

Rather than restricting the use of candle auctions to parachain slot allocation only, users should be able to utilise it for other needs, e.g. auctioning off their NFTs.

Such a smart contract could have specific call logic embedded and give the winner the right to execute that logic (with supplied parameters). For example, the smart contract could own an asset, and such call logic could transfer such asset to whichever account the winners supplies.

## Deliverables :nut_and_bolt:

* **Total Estimated Duration:** 1 month
* **Full-time equivalent (FTE):** 1

### Milestone 1 - Basic auction

* **Estimated Duration:** 3 weeks
* **Costs:** 7500 DAI


| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 1. | Start & close period | Create an auction mechanism that has a fixed start and end period |
| 2.  | Accept bids | Any user can call the contract with a bid that is higher than the last highest bid |
| 3.  | Find winner | Determine a winner at the close period |
| 4.  | Embed reward logic | The contract creator should set logic that will be executable by the winner. Such call logic should accept optional parameters. This logic should be set at the start and be immutable henceforth |
| 5.  | Payout | A winner should be able to make a call, with an arbitrary number of parameters, to the reward/payout method. The contract would then pass the arguments to whichever logic is encoded as the reward (and e.g. send tokens) |

### Milestone 2 - Random close

* **Estimated Duration:** 1 weeks
* **Costs:** 2500 DAI


| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 1. | Retroactive close | At the close block, rather than announcing the highest bidder at that point, the contract should randomly determine a block in the past (between start & end blocks) and calculate the highest bidder at that block to be the winner |
| 2. | Randomness source (optional) | Randomness source should be configurable (e.g. from hash of the block in the relay chain, from a randomness beacon parachain etc.)

