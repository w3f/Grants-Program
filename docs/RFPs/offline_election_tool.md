# Offline election tool

* **Status:** [Under Development 1](https://github.com/antiers-solutions/polkadot-staking-miner/tree/feat/offline-election-prediction-tool), [Under Development 2](https://github.com/bilinearlabs/offline-election-tool)
* **Proposer:** @michalisFr
* **Projects you think this work could be useful for**: Decentralized Nodes, Staking providers
* **Teams/People that could deliver the RFP**: Rust developers (with some Node.js knowledge)

## Project Description :page_facing_up: 

The purpose of this tool is to accurately predict the outcome of the election algorithm that determines the validators in the active set each era and the distribution of nominations. 
This is particularly useful for the Decentralized Nodes program as it helps us determine how many validators we can nominate and how to best distribute the nominations.
There is already [such a script](https://github.com/paritytech/substrate-debug-kit/tree/master/offline-election) but it is very old and not always accurate, plus it has some limitations. This script can be used as the basis for this new tool.

## Deliverables :nut_and_bolt:

The new tool should be offer the below functionality:
1. Accurately predict the result of the on-chain election (validators in the active set, their total stake, and the distribution of nominations), as if the actual election were to happen at that time. If the tool is run during the actual election window, the results should be effectively the same as with the actual election.
2. Take into consideration all the various election algorithms 
3. Allow all the parameterization of the original script, e.g. arbitrary active set size, custom voters and candidates, etc.
4. Allow for voters and candidates accounts that may not have bonded amount or may not even exist on-chain (this is a limitation of the original script)
5. Be usable both as a CLI tool but also expose an API through which parameters can be set and results digested 

* **Total Estimated Duration:** 4 weeks
* **Full-time equivalent (FTE):**  1
* **Total Costs:** 5,000

### Milestone 1

* **Estimated Duration:** 2 weeks
* **FTE:**  1
* **Costs:** 2,500 USD

### Milestone 2

* **Estimated Duration:** 1 week
* **FTE:**  1
* **Costs:** 1,250 USD

### Milestone 3

* **Estimated Duration:** 1 week
* **FTE:**  1
* **Costs:** 1,250 USD


| Number | Deliverable | Specification | 
| ------------- | ------------- | ------------- |
| 1. | Updating the original script | Update the original script to produce accurate results (points 1-3 above) |  
| 2. | Allow non-existent voters and candidates | Point 4 above | 
| 3. | API development | Create an API and allow usage of the tool through it (point 5 above) |
