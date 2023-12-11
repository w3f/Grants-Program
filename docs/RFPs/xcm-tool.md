# XCM library & tools

:::caution
This Request for Proposals is currently considered **under development**, meaning one or more grants have been signed to address the topic. We might be interested in additional implementations, but it’s better to double check this with the grants team.
:::

* **Status:** [Implemented](https://github.com/w3f/Grants-Program/blob/master/applications/ParaSpell_follow-up2.md), [Under Development 1](https://github.com/w3f/Grants-Program/blob/master/applications/xcm-tools.md), [Under Development 2](https://github.com/w3f/Grants-Program/blob/master/applications/xcm-domain-service.md)
* **Proposer:** [Bryan Chen](https://github.com/xlc)
* **Projects you think this work could be useful for** : Every parachain.

## Project Description :page_facing_up: 

XCM is the crosschain communication standard that will be used by all the parachains. Currently XCM is still in an early stage, but already supports some main usecases such as crosschain transfer of fungible tokens.

There are currently two major areas of XCM that are still awaiting to be improved:

- Extend & improve [xcm-format](https://github.com/paritytech/xcm-format) to support more use cases
  - We have few issues & PRs so we are on track on getting this done, but of couse more help is as always welcome
- Implement library & tools to ease the development of XCM related code
  - [xtokens](https://github.com/w3f/Open-Grants-Program/blob/master/applications/xtokens.md) handles the fungible asset implementations, and we also need a similar one for NFTs
  - We need some tool to allow developers to test XCM related code: https://github.com/paritytech/polkadot/issues/2544
  - To implement more complicated XCM scenarios, we need some tools to help with async programming

The scope of the new project count be one of:

- Develop tools to help developers to test XCM-related code
- Develop pallets or utility libraries to better handle the async nature of XCM communication
- Develop a pallet to handle crosschain transfers of NFTs ([relevant discussion](https://github.com/paritytech/xcm-format/pull/35)https://github.com/paritytech/xcm-format/pull/35)
