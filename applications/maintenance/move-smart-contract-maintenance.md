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

1. Add  'GetModuleABI' json string bytes format version RPC APIs,
 	'GetResource' json string bytes format verion.In order to implement [`build bcs transaction with remote ABI` in aptos](https://github.com/aptos-labs/aptos-core/blob/09359aa961e909699939783bd438e967ca381bdb/ecosystem/typescript/sdk/src/tests/e2e/aptos_client.test.ts#L188).(refer to [aptos-core api](https://github.com/aptos-labs/aptos-core/tree/main/api)).
 	
2. Add Table extension( Move language with large-scale storage tables ).
	 - Add `getTableEntry` get table item json string bytes in Move smart contract pallet[MVM pallet](https://github.com/pontem-network/pontem/blob/master/pallets/sp-mvm/rpc/src/lib.rs).
    - Add table extension  and writeset code logic in [Pontem sp-move-vm](https://github.com/pontem-network/sp-move-vm.git).(refer to **aptos**).
    - Add table extension support in [Pontem Dove](https://github.com/pontem-network/dove.git).
    - Add `table.move` in [Pontem pont-stdlib](https://github.com/pontem-network/pont-stdlib)((migrate from **aptos**).
   
3. Add U256,U32,U16 support 
	
	- Add its code in [Pontem MVM pallet](https://github.com/pontem-network/pontem/tree/master/pallets/sp-mvm)
	- Add its code in [Pontem sp-move-vm](https://github.com/pontem-network/sp-move-vm.git)
	- Add its code in [Pontem Move](https://github.com/pontem-network/move/tree/release-1.7.1)

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

This section should specify what kind of tasks and responsibilities the maintainer team will cover during future development. If you have already outlined a list of issues/bugs or pull requests that need further development - you can specify them here to provide more context on what tasks you will close.

Also, make sure the current project owners are willing to review/accept your contributions (a note here: if you're fully taking over the project, it will make more sense for the current owners to transfer the repository to your organization. If you can't get in touch with them, you may, of course, work on a fork).

Below we provide **example maintenance responsibilities**.

Issues we want to fix:

- There's command line paremeter -h conflict issue in [Pontem Dove](https://github.com/pontem-network/dove.git).
- There's dove command subcommand and parameter issue in build move lib bash script in [Pontem sp-move-vm](https://github.com/pontem-network/sp-move-vm.git).

Our responsibilities:

- Move [Pontem MVM pallet](https://github.com/pontem-network/pontem/tree/master/pallets/sp-mvm),[Pontem currencies pallet](https://github.com/pontem-network/pontem/tree/master/pallets/currencies),[Pontem groupsign pallet](https://github.com/pontem-network/pontem/tree/master/pallets/groupsign) into   substrate-node-template (https://github.com/substrate-developer-hub/substrate-node-template) as Move contract Node.
- Add  (get resource,get module abi,get table entry)  rpc  apis (return json string bytes)   in Move smart contract pallet([Pontem MVM pallet](https://github.com/pontem-network/pontem/tree/master/pallets/sp-mvm)).
- Add Table extension in [Pontem sp-move-vm](https://github.com/pontem-network/sp-move-vm.git) , [Pontem Dove](https://github.com/pontem-network/dove.git).  
- Add U256,U32,U16 support in [Pontem MVM pallet](https://github.com/pontem-network/pontem/tree/master/pallets/sp-mvm), in [Pontem sp-move-vm](https://github.com/pontem-network/sp-move-vm.git),in [Pontem Move](https://github.com/pontem-network/move.git).

### Overview

- **Start Date:** 2023/06/01.
- **Sprint/Period Duration:** 4 weeks
- **Total Duration:** 8 weeks
- **Full-Time Equivalent (FTE):**  1 FTE
- **Max budget per sprint/period:** 10,000 USD.
- **Hourly rate:** 150 USD.


## Future Plans

- Move contract Examples(migrate from [aptos move examples](https://github.com/aptos-labs/aptos-core/tree/main/aptos-move/move-examples)).
- Move contract UI (based in [aptos ecosystem typescript sdk](https://github.com/aptos-labs/aptos-core/tree/main/ecosystem/typescript/sdk) and [paritytech contracts-ui](https://github.com/paritytech/contracts-ui.git))
- BCS Transaction Builder SDK in Python(migrate from [aptos ecosystem python sdk](https://github.com/aptos-labs/aptos-core/tree/main/ecosystem/python/sdk))
- Move vscode ide plugin/Move playground(based in [move vscode plugin](https://github.com/pontem-network/vscode-move-ide.git))


## Additional Information :heavy_plus_sign:

**How did you hear about the Maintenance Grants Program?**  personal recommendation .


