# Multi-chain Block Explorer

* **Status:** Open
* **Teams/People that could deliver the RFP:** @clearloop, @carlhong

## Project Description :page_facing_up: 

As parachains become an integral part of the Polkadot and Kusama ecosystems, a cross-chain block & accounts explorer becomes all the more useful.

Some of the functionality that should be covered as part of the development:
- select which chains to view (e.g. default when selecting Kusama is Kusama relay + all its parachains). Should be feasible to select alternative mainnets too.
- input an address and see Tx's on all the selected mainnets, including teleports/XCMs between various parachains
- when a Tx includes a XCM, it should be easy and intuitive to open the relevant block from the other chain(s).
