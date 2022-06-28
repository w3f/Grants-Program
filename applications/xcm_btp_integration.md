# W3F Grant Proposal

- **Project Name:** XCM BTP Integration
- **Team Name:** ICE Network
- **Payment Address:** Ethereum (USDC) 0x5d2e00fd349d70092d7ea8bf82dbd59998d7442a 
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

### Overview

Blockchain Transmission Protocol (BTP) is ICON’s cross-chain interoperability solution. ICON’s BTP facilitates the transfer of information between connected blockchains. In practice, BTP will allow users to move tokens, assets, messages, and more across BTP-enabled chains. Currently, there are a number of blockchains integration with ICON BTP in development and nearly completed and connected to ICON testnet, including Binance Smart Chain, MoonRiver, NEAR, Harmony and Algorand.

ICE is WASM and EVM compatible Substrate blockchain which aims to be DApp hub and cross-chain interoperability parachain powered by BTP bridge with its sister network ICON.

ICE network launched it’s Arctic testnet on Rococo this year, 2022 and aims to join Kusama relaychain in Q3, 2022. Find out more about roadmap [here](https://iconfoundation.notion.site/ICE-SNOW-Roadmap-Milestones-2695a16c77294a42bac5a8e1d45ea399)

### Project Details

Integrate XCM and ICON BTP through a set of standard BTP service handlers smart contracts deployed on both ICE and ICON blockchains, this will enable the use cases of XCM outside the Polkadot ecosystem. Some of these use cases include:

- Cross-chain messaging between Parachains and other chains outside Polkadot
- Multi-assets transfers between blockchains on ICON BTP hub and Polkadot parachains
- Ability of any BTP enabled chain to control sovereign account holding a reserve for its native asset

![BTP XCM diagram1 drawio(1)](https://user-images.githubusercontent.com/1651925/176136973-e051bd63-98b8-4cde-80c0-72a744f5f0ee.png)

BTP is a modular and extensible architecture consisting of relayer software and core smart contracts: 

- **BTP Message Relay (BMR)**: an off-chain process which allows two BTP enabled blockchains to communicate via two uni-directional endpoints. The relay observes block updates for BTP events on source chain and handles the delivery to the designated destination chain via BTP `Message Center`; by design a single or multiple relays can be permissioned to have ownership on the BMC contract, and the relay is written in Golang.

- **BTP Message Center (BMC)**: core smart contract required to be deployed on all connected networks and responsible handling message delivery. The `Message Center` accepts BTP messages from the `Service Handler` on the source chain, and routes these messages to the corresponding service on the destination chain. Message center contracts have implementations in Solidity, JavaSCORE (ICON's smart contract) and WASM (NEAR). 
  
- **BTP Service Handler (BSH)**: provides interface for handling incoming application specific requests and processing logic for messages delivered via BMC. The `Service Handler` maintains services registry which facilitates the ability of new services to be added. Service handler contracts have implementations in Solidity, JavaSCORE (ICON's smart contract) and WASM (NEAR).

![BTP XCM diagram2 drawio](https://user-images.githubusercontent.com/1651925/176136929-74172f80-d352-402d-a53c-b04be52fa3a0.png)

### Ecosystem Fit

Where and how does your project fit into the ecosystem?

- ICE is a brand new addition to Polkadot/Kusama, aims to connect ICON network hub over BTP to further extend Polkadot cross-chain built-in support. While XCM is semantically meaningful in the context of XCVM and `MutliLocation` structure, a logical replica of the XCM message instructions can introduce new interesting use-cases.

Who is your target audience?

- ICE network will draw a substantial number of users who participated in ICON's airdrop snapshot. BTP will help those users to move their assets between ICE and ICON. Broadly speaking the XCM/BTP can benefit other parachains, and enable DotSama developers to develop new service contracts.

Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?

- Mostly, all EVM-compatible parachains realise the power of adapting XCM and Assets interface for Solidity. Acala, Astar and Moonbeam has developed similar modules, however the implementation is intended for local DApps, this proposal is leveraging BTP architecture and described services in the roadmap. We plan to collaborate with any project that finds the proposed integration useful.   

## Team :busts_in_silhouette:

### Team members

  - Mohamed Elshami
  - Catalin Florian Neagu
  - Sabin Chitrakar
 
### Contact

- **Contact Name:** Mohamed Elshami
- **Contact Email:** mo@web3labs.com
- **Website:** www.icenetwork.io

### Legal Structure

- **Registered Address**: Gubelstrasse 11, 6300 Zug, Switzerland
- **Registered Legal Entity**: ICON Foundation 

### Team's experience

Team members have extensive experience in blockchain, smart contracts, and a proven track record in professional software development and technical architecture. Team members include key contributors to the ICE Substrate runtime and BTP development.

### Team Code Repos

- https://github.com/web3labs
- https://github.com/web3labs/ice-substrate
- https://github.com/icon-project
- https://github.com/icon-project/btp

Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine.

- https://github.com/catalinnnn
- https://github.com/mohamedelshami
- https://github.com/ibrizsabin

### Team LinkedIn Profiles

- [Mohamed Elshami](https://www.linkedin.com/in/mohamed-elshami-021b178)
- [Catalin Neagu](https://www.linkedin.com/in/catalinneagu)
- [Sabin Chitrakar](https://www.linkedin.com/in/sabin-chitrakar-2999737a/)

## Development Status :open_book:

This project depends on development work that has been delivered by ICON Foundation and various working groups focused on different chain integrations. Deploying BTP on [Moonriver](https://moonbeam.network/community/projects/icon-foundation/) Testnet was the first entry into Polkadot. 

Due to high gas requirement for on-chain verification contract, BTP team has pushed decentralised version into [BTP 2.0 roadmap](https://icon.community/blog/2022/icon-development-update-may-2022/) for improved design to the protocol which requires some core changes in the ICON blockchain.    

The current scope of this proposal will adapt trusted version of the BTP, known as ICON Bridge. 

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 2 months
- **Full-Time Equivalent (FTE):** 2.5
- **Total Costs:** 27,000 USD

### Milestone 1 — Implement Assets and XCM service contracts

- **Estimated duration:** 6 weeks
- **FTE:**  3
- **Costs:** 19,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 / GPLv3 |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a use components developed in this milestone. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Docker to spin up local ICE parachain and ICON node along with scripts that demonstrates asset transfers and XCM messaging over BTP. |
| 0e. | Article | We will publish an **article** that explains what was achieved in this milestone.
| 1. | Assets Service Handler | Replica contract written in JavaScore language and deployed on ICON network handle Substrate assets transfers requests. | 
| 2. | Assets & Tokens Adapter | A component to encapsulate conversion logic between smart contracts token standards (e.g. ERC-20, ERC-1155) and Substrate assets. |
| 3. | XCM Service Handler | A replica smart contract written in JavaSCORE and deployed on ICON network which handle the common XCM message instructions. |  
| 4. | xTokens Service Handler | A replica smart contract written in JavaSCORE and deployed on ICON network to handle ORML xtokens requests and provide support for MultiAssets transfers. |  
| 5. | Assets Service Handler Contract (Solidity) | Solidity implementation for the asset service handler which will be deployed on ICE Substrate EVM to handle Substrate assets operations. |  
| 6. | Asset Service Handler (Solidity) | Solidity implementation for the asset service handler which will be deployed on ICE Substrate EVM. |
| 7. | XCM Service Handler (Solidity) | Solidity implementation for the XCM service handler which will be deployed on ICE Substrate EVM. |
| 8. | xTokens Service Handler (Solidity) | Service handler implements xtokens functionality and support MulitAssets transfers. |
| 9. | Assets, XCM and xTokens EVM Precompiles | This will provide interfaces for solidity contracts to interact with the assets, XCM and xTokens and pallets. |

### Milestone 2 — Bridge deployment and e2e testing on Arctic Rococo Testnet

- **Estimated Duration:** 3 weeks
- **FTE:**  2.5
- **Costs:** 8,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 / GPLv3 |
| 0b. | Documentation | We will provide inline documentation in the code as a step by step guide for developers and relay operators. As well as tutorial for end users on how to use the ICE <> ICON bridge. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0e. | Article | We will publish an article on outcome of the deployment and testing a number of cross-chain XCM/BTP token transfer scenarios. |
| 1. | Arctic Testnet Deployment| Deploy ICON Bridge and required service contracts on Arctic and ICON network. |
| 2. | Demo | Recorded workshop which will demo to end users cross-chain assets transfers with XCM/BTP on live Arctic Testnet. |

## Future Plans

This proposal is laying out the foundation for a number of use cases and future extensions for further developments. This will include:

 - Deploying XCM / BTP messaging on ICE Parachain upon successful launch on Polkadot and once functionality in this proposal have been tested enough.
 - Multi-chain XCM messaging via ICE and BTP.
 - Migrating over to BTP 2.0 and trustless version of ICON bridge.

## Additional Information :heavy_plus_sign:

- BTP IIP standards: https://github.com/icon-project/IIPs/blob/master/IIPS/iip-25.md
- BTP overview: https://medium.com/helloiconworld/blockchain-transmission-protocol-btp-an-overview-744aaa51334e
- BTP 2.0 lite paper: https://icon.community/assets/btp-litepaper.pd
- SCORE smart contract: https://docs.icon.community/icon-stack/smart-contracts/smart-contract-languages
