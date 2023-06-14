# Move smart contract Pallet Maintainance

- **Team Name:** Ann
- **Payment Address:** 0x352a7f69df71bda6c51ee7fa938dd76ff2375087 (Ethereum USDC)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

[Move smart contract pallet RFPs](https://github.com/w3f/Grants-Program/blob/master/docs/RFPs/Open/move_smart_contract_pallet.md ).

This Project based in [Pontem MVM pallet](https://github.com/pontem-network/pontem/tree/master/pallets/sp-mvm).[Pontem sp-move-vm](https://github.com/pontem-network/sp-move-vm.git).
In order to  implement Move smart contract Pallet. 
We will migrate api,table extension,u256 functions from **aptos** into it.
 
### Overview

This project will primary enhance  move smart contract pallet :

1. Add json  RPC APIs
 	 - `getModuleABIs`,in order to implement `build bcs transaction with remote ABI`.
 	 - `getResources`.
 	 - `encodeSubmission`.
 	
2. Add Table extension(Move language with large-scale storage tables ).
	 - Add `getTableEntry` get table item json string bytes in Move smart contract pallet rpc.
    - Add table extension  and writeset code logic in sp-move-vm.
    - Add table extension support in Dove.
    - Add `table.move` in pont-stdlib.
   
3. Add U256,U32,U16 support 
	- Add its code in Move smart contract pallet.
	- Add its code in **sp-move-vm**.
	- Add its code in **Move**.

### Maintenance list

1. Move smart contract pallets in [Pontem](https://github.com/pontem-network/pontem):
	- [Pontem MVM pallet](https://github.com/pontem-network/pontem/tree/master/pallets/sp-mvm)
	- [Pontem currencies pallet](https://github.com/pontem-network/pontem/tree/master/pallets/currencies)
	- [Pontem groupsign pallet](https://github.com/pontem-network/pontem/tree/master/pallets/groupsign)
2. [Pontem sp-move-vm](https://github.com/pontem-network/sp-move-vm.git)
3. [Pontem toolset Doc](https://github.com/pontem-network/docs/tree/toolset-docs)
4. [Pontem Dove](https://github.com/pontem-network/dove.git)
5. [Pontem Move](https://github.com/pontem-network/move/tree/release-1.7.1)
6. [Pontem move-stdlib](https://github.com/pontem-network/move-stdlib)
7. [Pontem pont-stdlib](https://github.com/pontem-network/pont-stdlib)

## Team :busts_in_silhouette:

### Team members

- Aric Lee 
- Zen Zhou

### Contact

- **Contact Name:** Aric Lee 
- **Contact Email:** aric0x02@gmail.com
- **Website:** None

### Legal Structure

None

### Team's experience



### Team Code Repos

- https://github.com/aric0x02/

- https://github.com/aric0x02
- https://github.com/ant8ee

### Team LinkedIn Profiles (if available)

None

## Development Status :open_book:

[Move smart contract pallet RFPs](https://github.com/w3f/Grants-Program/blob/master/docs/RFPs/Open/move_smart_contract_pallet.md )

## Maintenance Responsibilities :nut_and_bolt:

Issues we want to fix:

- There's command line paremeter -h conflict issue in Dove.
- There's dove command subcommand and parameter issue in build move lib bash script in sp-move-vm.

Our responsibilities:

- Build Move contracts Node that integrates Move smart contract pallet.
- Add  `getModuleABIs`,`getResources`,`encodeSubmission `,`getTableEntry`  RPC  APIs   in Move smart contract pallet.
- Add Table extension in sp-move-vm, Dove.  
- Add U256,U32,U16 support in Move smart contract pallet,in Move.

### Overview

- **Total Estimated Duration:** 2 month
- **Full-Time Equivalent (FTE):**   1 FTE
- **Total Costs:**  20,000 USD. 

### Milestone 1  — Move smart contract json rpc

- **Estimated duration:** 1 month
- **FTE:**  1.5
- **Costs:** 10,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 and MIT |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1. |'getModuleABIs' rpc method in Move Smart contract pallet rpc | 'GetModuleABIs' rpc method  will implement get move module abi json format version rpc api. It return move module abi json string bytes  |
| 2. |'getResources' rpc method in Move Smart contract pallet rpc |  'GetResources' rpc method  will implement get move struct resource json format version rpc api. It return move struct resource json string bytes |
| 3. | 'encodeSubmission' rpc method in Move Smart contract pallet rpc  | 'encodeSubmission' rpc method  will implement move module public script function call transaction data encoded in BCS , makes it possible to submit transaction to the API from languages that do not have library support for BCS |
| 3. | 'getTableEntry' rpc method in Move Smart contract pallet rpc  | 'getTableEntry' rpc method  will implement move struct table item json string bytes.|
| 4. | Substrate chain | Modules Move Smart contract of our custom chain will interact in such a way, allowing a user to get move module abi json string bytes and get move contract struct resource json string bytes and get bcs transaction data bytes of given move module public script function paremters and get table item json string bytes of given table handle and id. |
| 5. | table-extension in sp-move-vm | We will implement the functionality of TableResolver trait and table write set code logic. |
| 6. | table-extension in dove | We will add table-extension support in dove|
| 7. | Add table.move in pont-lib | We will add table in pont-lib,and remove older config item in Move.toml in pont-lib|
| 8. | Remove older config item in Move.toml in move-lib | We will remove older config item in Move.toml in move-lib|

### Milestone 2 — Move smart contract U256 Support

- **Estimated Duration:** 1 month
- **FTE:**  1
- **Costs:** 10,000 USD


| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 and MIT |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an **article** that explains the usage detail of move contract json rpc api and  table in move contract and view move resource json. |
| 1. | U256,U32,U16 in Move Contract pallet RPC | We will add a U256 Type support in Move struct parser  |
| 2. | U256,U32,U16 in sp-move-vm | We will add a U256 Type support in Move VM |
| 3. | U256,U32,U16 in Move language library | We will add a U256 Type support in Move language library  |
| 4. | Substrate chain | Modules Move Smart contract of our custom chain will interact in such a way, allowing a user to use U256 in move contract,submit include u256 bcs transaction. |
| 5. | convert move file name and module name from pascal case to snake case in pont-lib | We will convert file name and module name from pascal case to snake case in pont-lib|
| 6. | convert move file name and module name from pascal case to snake case in move-lib | We will convert file name and module name from pascal case to snake case in move-lib|

## Future Plans


1. Maintenance Move Smart contract pallet and sp-move-vm
	 - We will continue maintenance move smart contract pallet and sp-move-vm ,keep  Move VM version accord to common function in **Move language** and **Aptos**  Repo.
	 - The function of the Move Smart contract pallet will be enhanced mainly based on application requirements, and the version will be updated in a timely manner according to the **Move language** and **Aptos**  Repo.
2.  Move contract Examples.
	- Implement  commonly used token standards, DEFI, DAO, governance and other typical move contract examples.

3.  Move contract UI 
	- Implement deploying move contract modules or packages, testing contract public interface methods, viewing the on-chain status of structures in contracts, and viewing transaction execution events.
4.  BCS Transaction Builder SDK
	- Typescript SDK.
	- Python SDK.
	- Others based on BCS SDK.
5.  Move vscode IDE Plugin/Move playground
	- Committed to implement a simple, convenient editing, compiling, deploying, testing and development move smart contract environment.


## Additional Information :heavy_plus_sign:

**How did you hear about the Maintenance Grants Program?**  personal recommendation .


