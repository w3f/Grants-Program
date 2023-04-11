# XCM library & tools

* **Status:** Open
* **Proposer:** [Bryan Chen](https://github.com/xlc)
* **Projects you think this work could be useful for** : Every parachain.

## Project Description :page_facing_up: 

XCM is the crosschain communication standard that will be used by all the parachains. Currently XCM is still in early stage but is already support some main usecases such as crosschain transfer of fungible tokens.

There are currently two major areas of XCM that are still awaiting to be improved:

- Extend & improve [xcm-format](https://github.com/paritytech/xcm-format) to support more use cases
  - We have few issues & PRs so we are on track on getting this done but of couse more helps as always welcome
- Implement library & tools to ease the development of XCM related code
  - [xtokens](https://github.com/w3f/Open-Grants-Program/blob/master/applications/xtokens.md) handles the fungible asset implementations, and we also need a similar one for NFTs
  - We need some tool to allow developers to test XCM related code: https://github.com/paritytech/polkadot/issues/2544
  - To implement more complicated XCM scenarios, we need some tools to help with async programming

The scope of the new project count be one of:

- Develop tools to help developer to test XCM-related code
- Develop pallets or utility libraries to better handle the async nature of XCM communication
- Develop a pallet to handle crosschain transfers of NFTs
