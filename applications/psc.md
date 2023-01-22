# Name of your Project

- **Team Name:** OmniBTC
- **Payment Address:** 0xBC9C045476F5A85A920EF8F8745631CEC687a4e8 (USDC - Ethereum network)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 1

## Project Overview :page_facing_up:

### Overview

Polkadot Smart Chain (PSC) is an Ethereum-compatible smart contract parachain which uses directly Polkadot Native Currency as the native gas fee.

Almost all parachains now are custom native currencies. 
For Polkadot community users holding Polkadot Native Currency, these currencies are redundant. 
While maintaining the security of the Polkadot network (Reserve-Based-Transfer), 
PSC have brought an evm parachain that supports rich Dapps to Polkadot Native Currency holders.

### Project Details

- Transfer Polkadot Native Currency from Polkadot to PSC by DMP
  ![dmp](https://github.com/OmniBTC/PSC/blob/main/docs/dmp.png)
- Transfer Polkadot Native Currency from PSC to Polkadot by UMP
  ![ump](https://github.com/OmniBTC/PSC/blob/main/docs/ump.png)
- **[pallet-assets](https://github.com/OmniBTC/PSC/tree/main/pallets/assets)**:
  
  WASM assets can be sent/received by XCMP. 

- **[AssetsBridgeErc20.sol](https://github.com/OmniBTC/PSC/blob/main/contracts/AssetsBridgeErc20.sol)**:
  
  Erc20 tokens can be sent/received by ethereum bridges.

- **[pallet-assets-bridge](https://github.com/OmniBTC/PSC/tree/main/pallets/assets-bridge)**: 
  
  Bind EVM address and Substrate account, bind WASM assets and Erc20 tokens, deposit and withdraw fungible assets between WASM and EVM

- Deploy EVM contracts with Polkadot Native Currency by truffle/remix/metamask.

### Ecosystem Fit

- (1) PSC uses Polkadot Native Currency as the original gas to directly empower Polkadot Native Currency, allowing Polkadot community users who 
      hold Polkadot Native Currency to cross-chain to PSC through XCMP, deploy and call EVM defi contracts on PSC.

- (2) Our target audience is most users who hold Polkadot Native Currency, as well as potential parachain teams in the future 
      (providing them with technical references)

- (3) The parachain community provides various applications, but they use their own native currency as transaction fee, 
      and users holding Polkadot Native Currency can only use those applications by selling their Polkadot Native Currency in exchange for their currency.
      PSC directly brings these DEFI applications to Polkadot Native Currency users.

- (4) We are the first team to eat crabs. We directly empower Polkadot Native Currency to make the Polkadot community more united.

- (5) [Acala](https://github.com/AcalaNetwork/Acala) only uses evm and does not support ethereum api. PSC, [Astar](https://github.com/AstarNetwork/Astar), and [Moonbeam](https://github.com/PureStake/moonbeam) are all based on frontier and fully support ethereum api.
      Both Astar and Moonbeam are committed to being an evm contract platform. Although PSC has the same potential, the early goal is to empower Polkadot Native Currency.
      Before using the functions of the Acala/Astar/Moonbeam chain, Polkadot Native Currency users must purchase their Native Currencies, and the Native Curreny of PSC is the Polkadot Native Currency transferred from the relay chain, no need to purchase any assets.
      
## Team :busts_in_silhouette:

### Team members

- *Name of team leader:* Tianling
- *Names of team members:* Jianbing Zhao, AAweidai, LiMing Sun

### Contact

- **Contact Name:** Jianbing Zhao
- **Contact Email:** icodezjb@gmail.com
- **Website:** https://omnibtc.finance/

### Legal Structure

- **Registered Address:** 24 RAFFLES PLACE #17-04 CLIFFORD CENTRE Singapore 048621
- **Registered Legal Entity:** OMNIBTC PTE. LTD.
- **UEN:** 202226651M

### Team's experience
The team is made up of many experienced professionals in the blockchain industry.

Tianling(0xhelloweb3) was a former senior expert of Alibaba. After leaving it, he joined a blockchain company as the core developer for 6 years. He is familiar with the underlying blockchain design and substrate development and also was in charge of the architecture design. Now, he is the team leader of OmniBTC team.

Jianbing Zhao(icodezjb) is a Substrate / Rust Engineer with 5 years blockchain experience, He is also the core developer of ChainX. Now he is the principal blockchain expert of OmniBTC team.

Wei Dai(AAweidai) is a Substrate / Rust Engineer with 2 years blockchain experience, He is also the core developer of ChainX. Now He is the leader of our DOLA-Protocol which is the core application protocol on PSC.

LiMing Sun has rich experience in product design and management. He has built many nice and user-friendly internet application. Now he is the senior product manager of OmniBTC team.

### Team Code Repos

- https://github.com/OmniBTC/PSC

Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine.

- https://github.com/0xhelloweb3
- https://github.com/icodezjb
- https://github.com/AAweidai

### Team LinkedIn Profiles (if available)

We are not on LinkedIn.


## Development Status :open_book:

We have completed the [Testnet demo](https://github.com/OmniBTC/PSC/blob/main/zombienet/psc-small-network.toml#L4) version of PSC.
The first version is ready to be launch on polkadot as 2053 parachain.


## Development Roadmap :nut_and_bolt:


### Overview

- **Total Estimated Duration:** 6 weeks
- **Full-Time Equivalent (FTE):**  1.5-2 FTE
- **Total Costs:** 8000 USDC

### Milestone 1 — Basic functionality

- **Estimated duration:** 6 weeks
- **FTE:**  1.5-2
- **Costs:** 8,000 USDC


|  Number | Deliverable                            | Specification                                                                                                                                                                                                                                 |
|--------:|----------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **0a.** | License                                | GPLv3                                                                                                                                                                                                                                         |
| **0b.** | Documentation                          | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how to complete the Native Currency transfer between relaychain and PSC through DMP/UMP, and how to deploy and call the evm contracts on PSC |
| **0c.** | Testing and Testing Guide              | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.                                                                               |
| **0d.** | Docker                                 | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.                                                                                                                                 |
|     0e. | Article                                | We will publish an **article** that explains how are ethereum address and substrste account related.                                                                                                                                          |
|      1. | Substrate module: pallet-assets-bridge | We will create a Substrate module that is a bridge from substrate assets(wasm) into ERC20 tokens(evm).                                                                                                                                        |
|      2. | Polkadot Smart Chain                   | pallet-assets-bridge of PSC will interact in such a way: Bind EVM address and Substrate account, bind WASM assets and Erc20 tokens, deposit and withdraw fungible assets between WASM and EVM                                                 |
|      3. | Smart contracts: AssetsBridgeErc20     | We will deliver a set of evm smart contracts that are Erc20 contracts adapted to pallet-assets-bridge.                                                                                                                                        |


## Future Plans

- PSC will run as a parachain of the Polkadot.
- In phase 1, we first support Polkadot Native Currency's asset cross-chain(through DMP/UMP) and wasm-evm asset bridge.
- In phase 2, receive other parachain native currency through XCMP.
- In phase 3, implement the DOLA protocol, allowing the assets on the PSC to circulate freely to other mainstream chains.
- Finally, our goal is to expand the liquidity of Polkadot ecosystem assets.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?**  
Web3 Foundation Website.

Here you can also add any additional information that you think is relevant to this application but isn't part of it already, such as:

- [DOLA-Protocol](https://github.com/OmniBTC/DOLA-Protocol)