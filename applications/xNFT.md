# xNFT Pallet

- **Team Name:** Antier Solutions
- **Payment Address:** 1XhNxALoCmXF86aiwZtdDJspjWZBiRX9UfbJ4jQsWN15eSu (DOT)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 1

## Project Overview :page_facing_up:

This application is in response to the open RFP [xcm-tools](https://github.com/w3f/Grants-Program/blob/master/docs/RFPs/Open/xcm-tool.md)

### Overview

- The Crosschain NFT Pallet is a project aimed at enabling the seamless transfer of NFTs across different blockchain networks using the XCM protocol. By leveraging XCM, this pallet allows users to exchange NFTs from one parachain to other parachain , from relay chain to parachain and from parachain to relay chain.

### Project Details

#### The xNFT Pallet provides the following extrinsics (functions):

1. transferSingle(nft_id, dest, dest_weight_limit) —> DispatchResult ; transfer an NFT with the NFT ID 

2. transferMulti(nfts, dest, dest_weight_limit) —> DispatchResult ; transfer multiple non-fungible tokens, defined by their multilocation

3. transferSingleWithFee(nft_id, dest_fee, dest, dest_weight_limit) —> DispatchResult ; transfer a non-fungible tokens, but it allows the sender to pay the fee with a different asset, defined by its multilocation

4. transferMultiWithFees(nfts, dest_fee, dest, dest_weight_limit) —> DispatchResult ; transfer several non-fingible tokens, but it allows the sender to pay the fee with a different asset, defined by their multilocation

#### Parameters that need to be provided can be defined as:

- nft_id/nfts — the ID/IDs of the NFT/NFTs being sent via XCM. Different runtimes have different ways to define the NFT identifiers.

- dest — a multilocation to define the destination address for the tokens being sent via XCM. It supports different address formats, such as 20 or 32-byte addresses (Ethereum or Substrate)

- dest_weight_limit — an enum that represents the maximum amount of execution time you want to provide in the destination chain to execute the XCM message being sent.

- dest_fee — a multilocation to define the asset used to pay for the XCM execution in the target chain

![Flow Diagram](https://github.com/lawmeskiviahs/Grants-Program/assets/60818312/fff7a37b-0acc-476a-8a3a-4551859ccd9f)

#### A feature will be added to the XCM VM for minting NFt on target chain using the encoded data from source chain.
#### This xNFT pallet will be tightly coupled with the NFT pallet in Substrate

#### Project does not include:
- This pallet facilitates the crosschain transfer of NFTs and there are no mint, create or burn functionality other than the XCM features.

### Ecosystem Fit

- The xNFT pallet would bring enhanced interoperability, expanded use cases, increased liquidity, and flexibility to the Substrate ecosystem. It would contribute to the growth and vibrancy of the community while facilitating the seamless exchange and utilization of NFTs across different Substrate-based blockchains.

- Interoperability: The xNFT pallet would enable seamless transfer of NFTs across different blockchains within the Substrate ecosystem. This interoperability would enhance the connectivity and compatibility between Substrate-based chains, fostering a more integrated and interconnected ecosystem.
- Expanded Use Cases: Cross-chain NFT transfers would unlock new use cases and possibilities for NFTs within the Substrate ecosystem. Developers and users would be able to leverage NFTs from different chains, opening up opportunities for cross-chain collaborations, marketplace integrations, and enhanced utility for NFT-based applications.
- Enhanced NFT Liquidity: By enabling cross-chain transfers, the xNFT pallet would enhance liquidity for NFTs within the Substrate ecosystem. NFTs from different chains could be freely traded and utilized, increasing their market reach and providing more avenues for value creation and exchange.
- Flexibility and Choice: The xNFT pallet would offer developers and users the flexibility to choose the most suitable blockchain for their NFT needs. They could mint, transfer, and interact with NFTs on various Substrate chains, ensuring compatibility with specific requirements or preferences.
- Ecosystem Growth: The introduction of the xNFT pallet would contribute to the growth of the Substrate ecosystem. It would attract developers and projects looking to build NFT-related applications or platforms, fostering innovation and expanding the range of offerings within the ecosystem.
- Adoption of XCM: By leveraging XCM for cross-chain NFT transfers, the xNFT pallet would contribute to the wider adoption of the Cross-Chain Messaging protocol within the Substrate ecosystem. This would reinforce the importance of interoperability and cross-chain communication, encouraging other projects and pallets to integrate XCM for various use cases.
- Community Engagement: The xNFT pallet would attract interest from developers, NFT enthusiasts, and users within the Substrate community. It would encourage collaboration, knowledge sharing, and participation in building cross-chain NFT solutions, further strengthening the community bonds and ecosystem growth.


## Team :busts_in_silhouette:

### Team members

- **Team lead:** [Shubham Gupta](https://github.com/s-h-ubham)
- **Team member:** [Ipsa Gupta](https://github.com/Ipsa11)
- **Team member:** [Nakul Amate](https://github.com/nakul1010)
- **Team member:** [Arunjot](https://github.com/arunjot12)

### Contact

- **Contact Name:** Karan Chopra
- **Contact Email:** karan.chopra@antiersolutions.com

### Legal Structure

- **Registered Address:** E-221, Phase 8B, Industrial Area, Sector 74, Sahibzada Ajit Singh Nagar, Punjab 160059
- **Registered Legal Entity:** Antier Solutions Pvt. Ltd.

### Team's experience

- Antier is a thought-to-finish partner for customers in their blockchain journey. We advise and consult our clients on blockchain technologies and tailor solutions utilising our powerful blockchain ecosystem. We help customers experiment and deploy proof-of-concepts on blockchain technologies and incrementally expand to scale to production releases. Our thought leaders regularly educate customers, partners, CXOs on the power of blockchain for today and tomorrow.
- Workdone by Antier in Substrate ecosystem
1. Antier worked on the validator and nominator apps for substrate based blockchains to offer a unique and better user experience .
2. We have also worked on creating an optimised and homogenised design focused on improving the navigation, information architecture, user flow tasks, content design and graphic elements for a seamless and easy browsing experience.
3. We have customised the default reward mechanism in the staking pallet of the substrate chain by integrating the sustainability and reliability score(which is calculated by ESG scores and Uptime of the validators repectively) of the validators in the current reward system.
4. We were able to run EVM and WASM machines natively in the substrate chain so that the chain will be able to support both EVM(Metamask, Remix, Web3.js, etc) and WASM(WebAssembly target, INK framework, etc) tooling.
5. We were able to replicate the whole polkadot ecosystem(Relay chain, Parachains, XCM), Where parachains are use case specific chains and communicate through XCM protocol with each other.

- Our team has been proactively participating in the Substrate Stack exchange and we ask/answer question related to ink!, Substrate, parachain. We rank in the top 6% people in the Substrate Stack Exchange. 

- Profiles of our team:
1. https://substrate.stackexchange.com/users/2372/arunjot-singh
2. https://substrate.stackexchange.com/users/2281/amit-kumar-yadav
3. https://substrate.stackexchange.com/users/354/shubham-gupta

- Our organisation is the technical partner for 5ire chain: https://5ire.org/

- Our team has worked on multiple IDE which include an EVM compatible IDE for solidity, IDE for WASM contracts for ink! based smart contracts. The EVM IDE is live and the link is : https://ide.5ire.network/

- https://github.com/arunjot12
- https://github.com/Ipsa11
- https://github.com/nakul1010
- https://github.com/Amit22antier

## Development Status :open_book:

If you've already started implementing your project or it is part of a larger repository, please provide a link and a description of the code here. In any case, please provide some documentation on the research and other work you have conducted before applying. This could be:

- links to improvement proposals or [RFPs](https://github.com/w3f/Grants-Program/tree/master/docs/RFPs) (requests for proposal),
- academic publications relevant to the problem,
- links to your research diary, blog posts, articles, forum discussions or open GitHub issues,
- references to conversations you might have had related to this project with anyone from the Web3 Foundation,
- previous interface iterations, such as mock-ups and wireframes.

## Development Roadmap :nut_and_bolt:

### Overview

### Milestone 1 — xNFT Pallet

* **Total Estimated Duration:** 6 weeks
* **Total Costs:** 9800 USD
- **FTE:**  2

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 / GPLv3 / MIT / Unlicense |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can transfer nft across chains |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an **article**/workshop that explains [...] (what was done/achieved as part of the grant). (Content, language and medium should reflect your target audience described above.) |
| 1. | xNFT | xNFT is the pallet which leverages XCM for cross chain NFT transfer |

## Future Plans

Currently this project is solely to transfer NFT between Substrate based chains. In future we plan to extend this functionality to non-substrate chains like Ethereum, Solana etc. We also plan to extend the functionality of this pallet to substrate based solo-chains as well(solo to solo).

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** through the RFP portal
