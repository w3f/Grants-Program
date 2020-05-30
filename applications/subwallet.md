# Open Grant Proposal

* **Project:** subwallet
* **Proposer:** [Faber](https://github.com/yxf)
* **Payment Address:**  1BHAopuz14S7L58oea1e6eTZpXuzYt8Ap9

## Project Description :page_facing_up: 

`subwallet` is a light command line interface wallet for Polkadot/Substrate.  `subwallet` will be like bitcoin-cli, includes address management and extrisinc(transaction) management. It will be implemented with Rust.

## Team :busts_in_silhouette:

* **Members:** Faber
* **LinkedIn Profiles:** -
* **Code Repos:** https://github.com/yxf/subwallet
* **Website:**	https://github.com/yxf/subwallet
* **Legal Structure:** individual
* **Team's Experience:** 

Faber is a backend developer with 10+ years of strong experience. Learned and researched blockchain technology about 3 years. Familiar with Rust and Substrate.




## Development Roadmap :nut_and_bolt: 

* **Total Estimated Duration:** 8 weeks
* **Total Costs:** 0.8 BTC

### Milestone 1

* **Estimated Duration:** 4 weeks 
* **Costs:** 0.3 BTC


| Number | Deliverable | Specification | 
| ------------- | ------------- | ------------- |
| 1. | Command help | `subwallet --help` prints help information |
| 2. | Address generation | `subwallet getnewaddress [label]` will generate a random address and save to local file. |  
| 3. | Address list | `subwallet listaddresses` will list all generated addresses | 
| 4. | Backup | `subwallet backup [address_or_label]` will backup address as json that compatible with `https://polkadot.js.org/apps`| 
| 5. | Restore | `subwallet restore [file]` will restore address from the file that compatible with `https://polkadot.js.org/apps` |
| 6. | Unit Tests | Write unit tests for commands: `getnewaddress`, `listaddresses`, `backup` and `restore`. |
| 7. | Documentation | Usages and demos of every command. |

### Milestone 2

* **Estimated Duration:** 4 weeks 
* **Costs:** 0.5 BTC


| Number | Deliverable | Specification | 
| ------------- | ------------- | ------------- |
| 1.  | Set RPC url | `subwallet setrpcurl [url]` save the RPC url to local file for other commands(transfer/syncextrinsics)|
| 2.  | Display balances | `subwallet getbalances` will also show balances of addresses | 
| 3.  | Balance transfer | `subwallet transfer [from] [to] [amount]` transfer `amount` balances from `from` address to `to` address | 
| 4.  | Sync extrinsics | `subwallet syncextrinsics [address_or_label]` download and save address related extrinsics from remote node to local file through RPC. |  
| 5.  | Extrinsic list | `subwallet listextrinsics [address_or_label]` lists all downloaded extrinsics of address |
| 6.  | Unit Tests  | Write unit tests for every command. |
| 7.  | Documentation | Usages and demos of every command. |

## Additional Information :heavy_plus_sign: 
* This will be version 0.1. In the future, more RPC methods will be implemented and will support other Substrate-based chains.

 
