# JUA DEX
* **Team Name:** Jua
* **Payment Address:** Bitcoin Network BTC : 16tic2kCdmE5YKCQSZZxQMABzHVqfu49z2
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 1
## Project Overview :page_facing_up: 
### Overview
​JUA is building the easiest gateway for Africans into web3 through our onramp and offramp solution. We are building an EVM and substrate solution that will allow anyone in Africa to be able to buy, sell, and convert polkadot to any fiat currency using our jua escrow smart contracts. We aim to create the easiest way for any developer to be able to buy, sell, store and utilize Polkadot in AFRICA.  
So far jua managed to build an application that is in beta in 5 African countries on with over 1000 users on EVM. On this project we want to leverage Polkadot parachain Aster that can enable us to convert our EVM platform to interact with Polkadot ecosystem and make it available to our 1000 users. 
**Deployment**
The first phase of the project will be built and deployed on the Astar parachain that will enable us to deploy EVM smart contracts t faciliate the burnt and mint mechanism from Polkadot to wrapped polkatdot on the different networks and also the escrow transactions during onramping and offramping of assets. 
**Polkadot Ecosystem Benefits**
JUA escrow smart contract exchange protocol built on the Polkadot blockchain can contribute to the growth and development of the Polkadot ecosystem in several ways:
1. Increased Adoption: By providing a user-friendly platform for buying and selling cryptocurrencies, the exchange can attract new users to the Polkadot ecosystem. This can drive increased adoption of the Polkadot network and its native token.
2. Liquidity Enhancement: A robust peer-to-peer exchange can improve liquidity within the Polkadot ecosystem. More liquidity attracts traders and investors, ensuring a vibrant marketplace for the exchange of assets built on Polkadot.
3. Seamless Onramping and Offramping: One of the significant advantages of a peer-to-peer exchange built on Polkadot is its ability to facilitate easy onramping and offramping of cryptocurrencies. This functionality makes it simpler for users in Africa to convert fiat currencies into crypto and vice versa, thus expanding the accessibility of the Polkadot ecosystem.
4. Enhanced Interoperability: Polkadot is designed to enable interoperability between multiple blockchains. By integrating with other blockchain platforms through Polkadot's interoperable network, the peer-to-peer exchange can expand its offerings and support trading of assets from different blockchain networks, further enriching the Polkadot ecosystem.
5. Ecosystem Collaboration: The exchange can collaborate with other projects within the Polkadot ecosystem, fostering partnerships and synergies. This collaboration can lead to the integration of various decentralized applications (dApps) and services within the exchange, creating a thriving ecosystem where users can access a wide range of services and functionalities.
Overall, a peer-to-peer crypto exchange built on the Polkadot blockchain that focuses on onramping and offramping of cryptocurrencies can contribute to the growth, adoption, and liquidity of the Polkadot ecosystem while promoting financial inclusivity in Africa.

**Why are we creating this project**
 Polkadot is the best network to build a web3 fintech solution for AFRICA that wants to promote financial inclusion which is the availability and equality of opportunities to access financial services. It refers to a process by which individuals and businesses can access appropriate, affordable, and timely financial products and services. These include banking, loan, equity, and insurance products.
With Africa as the least developed continent, our financial inclusivity rate is the lowest in the world and all this has been under the fiat-based system influence. We believe using crypto asset-based solutions we can improve a number of the available opportunities, especially for emerging African markets and we want to leverage polkadot power to achieve this.
Please see [the product roadmap](https://jua.gitbook.io/welcome-juarian/jua-roadmap) and [Jua DEX Whitepaper](https://jua.gitbook.io/welcome-juarian/) for an overview of the Jua DEX vision.
**This Project is specifically for the Jua DEX Factory which is a foundational component for the Jua DEX**
The Jua Decentralized Peer to Peer  Exchange (DEX) 
**Jua DEX Key Parameters**
#### Jua DEX Overview
Jua DEX is creating an open decentralized financial framework. Jua is building a complete suite of financial tools and non custodial services within a compliant framework . This will be done in a trustless decentralized environment. With the goal of disrupting and streamlining current solutions offered by Centralized Exchanges and International remittances.
**The following information is a short summary of the other features of the protocol**
Jua Bridge is used to create a multi-platform, multi-asset protocol using cryptocurrencies (tokens) as building blocks. We will start with Polkadot parachains, ERC-20 tokens and then other blockchains.
Once the primitives of a multi-platform, multi-asset DEX have been realized, decentralized financial protocols can leverage this for their liquidity needs. 
Jua DEX will then add limit orders, a compliance framework and smart wallet functionality to give cost effective alternatives to Centralized Exchanges and International remittances.
Below are the high level modules that can be integrated into the Jua Ecosystem. A number of these will be implemented by our partners and the community, some of which may be subsidized by Jua DEX grants.
### Ecosystem Fit 
Jua DEX is building an open decentralized framework. This grant application is for the Jua DEX.
An escrow-based DEX depends solely on escrow smart contracts to facilitate trades between buyers and sellers. In an escrow-based DEX, a smart contract is used to hold the assets being traded until certain conditions are met, such as the buyer confirming receipt of the assets or a certain amount of time passing without dispute. Once the conditions are met, the smart contract automatically releases the assets to the buyer and the trade is executed.

Building our apllication on astar will help us utilize different capabilities in the blockchain space, the use of XVM to deploy  smart contracts
where will help us enable the accessibility of different native assets from other blockchains,
the use of precompiles to achieve interoperability between different assets.
Utilisation of XCM to improve user experience in a way that user can access different type of assets in a click of a button
rather than performing a tedious task in the name of migrating of tokens to other applications for bridging and swapping, 
this functionality will be enabled in jua where chain extensions will take a major role in the implementation of the same.
Overall, the minimal DEX pallets designed for our application will provide the necessary functionality,
to create a functional DEX on Astar blockchain. 
The combination of these pallets will allow users to trade different types of tokens, provide liquidity to pools,
and distribute fees in a fair and transparent manner.
The larger vision for Jua can be seen in our [white paper](https://jua.gitbook.io/welcome-juarian/).
### DEX Evolution
The following protocols offer specific functionality and are often leaders in their respective areas.  The points below walk through a chronological evolution of DEX and cross-chain capabilities.
- The first decentralized exchanges (DEXs) were launched on Ethereum in 2015, but these early platforms were not very user-friendly and had limited trading pairs.
- In 2017, Bancor introduced an automated market maker (AMM) system that allowed for decentralized trades without order books, making DEXs more user-friendly.
- Later in 2017, the 0x protocol was launched, which enabled decentralized trades to occur off-chain while still settling on the Ethereum blockchain.
- In 2018, the first escrow-based DEXs emerged, which allowed for peer-to-peer trades without the need for a centralized party to hold funds during the transaction. Examples include Bisq and Hodl Hodl.
- In 2019, Uniswap introduced a new AMM system that allowed for seamless token swaps with low slippage and without the need for order books or off-chain transactions.
- In 2020, the introduction of flash swaps made it possible for traders to borrow tokens for a single transaction without the need for collateral or a credit check, further expanding the capabilities of DEXs.
- In the same year, more advanced escrow-based DEXs emerged, such as Curve and Balancer, which allowed for more sophisticated trading strategies and the ability to earn yield through liquidity provision.
Cross-chain capabilities began to emerge in 2020 as well, with platforms such as Ren and Thorchain allowing for decentralized trading between different blockchains.
- In 2021, Uniswap V3 was released, which introduced concentrated liquidity and allowed liquidity providers to earn more fees by specifying price ranges for trades.
Later in 2021, more cross-chain capabilities were introduced with the launch of the Polygon Bridge, which allowed for assets to be transferred between Ethereum and Polygon with low fees and fast transaction times.
- In 2022, the emergence of Layer-2 solutions, such as Optimism and Arbitrum, made it possible for DEXs to scale and process more transactions, further expanding the capabilities of decentralized trading.
- Jua DEX intends to support Polkadot and Ethereum initially with more platforms to come powered by our integrated bridging technology.
- Reef and PolkaDex are also building on Polkadot which provides the ability to create dedicated parachains.
- A Compliance Framework will be leveraged by Jua DEX to provide cost effective solutions which compete with Centralized Exchanges and International remittances.
- Smart Wallet Functionality will also be provided to simplify the user experience and drive mass adoption.
## Team :Jua Dex:
### Team members
Kariuki Elkanah: Jua co founder Team lead
Renny Langat   : Jua co founder
Brian Gichuhi  : Jua co founder
Antony Mwathi  : Jua co founder
Julius P       : Jua engineer good in rust and solidity
### Contact
* **Contact Name:**  Kariuki Elkanah
* **Contact Email:** kariuki.369.elkanah@gmail.com
* **Contact Name:** Renny langat
* **Contact Email:** rennylngt@gmail.com
* **Contact Name:** Brian  Gichuhi
* **Contact Email:** brianchegegichuhi@gmail.com
* **Contact Name:** Antony Mwathi 
* **Contact Email:** mwathiantonyit@gmail.com
* **Contact Name:** Julius P
* **Contact Email:** julypjulius@gmail.com
### Legal Structure
* **Registered Address:**
JUA LABS LIMITED,
759-00100 Nairobi.
* **Registered Legal Entity:**
JUA LABS LIMITED,
No. PVT-LRUYB23D
### Team's experience
The team all have strong experience building Decentralized Financial Protocols.
Relevant Contributions are
**Elkanah Kariuki:** Elkanah Kariuki has been passionate about software and technology since high school. 
### Team's experience
Our team is made up of African Web3 developers from across East Africa(Kenya and Tanzania) and Asia(Japan). We all believe in decentralization and we are working to leverage this tech to improve the quality of lives of Africans by using crypto asset solutions to improve Africa financial system. Our team is made up of three Rust developers Juluis, Ntiro and Muchiri and three solidity developers who also are fully stack to help us achive our mission.
We are so far the first East,Central and Southern African project to dare leverage fully blockchain solution in our project and in finance and we do believe that crypto will be adopted well in Africa. Our current focus with our project is to onramp and offramp into the web3 ecosystem using crypto asset solution.
### Team Code Repos
https://github.com/jua-labs/p2p-contracts
https://github.com/juliusjulyp/PolkadotHackathon
https://github.com/jua-labs/p2p
### Team LinkedIn Profiles
(https://www.linkedin.com/in/muchiri-elkanah-396670224/
https://www.linkedin.com/in/rennylangat/
https://www.linkedin.com/in/gichuhibrian/
[**Asante Ntiro:** ]https://www.linkedin.com/in/asante-ntiro/
https://www.linkedin.com/in/antony-mwathi/
https://www.linkedin.com/in/julyp-julius-ba831a221/
)
## Development Roadmap :nut_and_bolt: 
This application is specific to the DEX Pallet and lays the foundation for the larger vision which can be seen in our [draft white paper](https://jua.gitbook.io/welcome-juarian/).
### Overview
* **Total Estimated Duration:** 10 Person days
* **Full-time equivalent (FTE):** 1.0
* **Total Costs:** 10,000 USDC
### Milestone 1: Smart Contract Development
The first milestone should be the development and deployment of the smart contracts required for the DEX. This includes the escrow smart contracts and any other smart contracts necessary for the exchange to function.
the use of precompiles to achieve interoperability between different assets.
Utilisation of XCM to improve user experience in a way that user can access different type of assets in a click of a button
rather than performing a tedious task in the name of migrating of tokens to other applications for bridging and swapping, 
this functionality will be enabled in jua where chain extensions will take a major role in the implementation of the same.
Overall, the minimal DEX pallets designed for our application will provide the necessary functionality,
to create a functional DEX on Astar blockchain. 
The combination of these pallets will allow users to trade different types of tokens, provide liquidity to pools,
and distribute fees in a fair and transparent manner.
The larger vision for Jua can be seen in our [white paper](https://jua.gitbook.io/welcome-juarian/).
### DEX Evolution
The following protocols offer specific functionality and are often leaders in their respective areas.  The points below walk through a chronological evolution of DEX and cross-chain capabilities.
- The first decentralized exchanges (DEXs) were launched on Ethereum in 2015, but these early platforms were not very user-friendly and had limited trading pairs.
- In 2017, Bancor introduced an automated market maker (AMM) system that allowed for decentralized trades without order books, making DEXs more user-friendly.
- Later in 2017, the 0x protocol was launched, which enabled decentralized trades to occur off-chain while still settling on the Ethereum blockchain.
- In 2018, the first escrow-based DEXs emerged, which allowed for peer-to-peer trades without the need for a centralized party to hold funds during the transaction. Examples include Bisq and Hodl Hodl.
- In 2019, Uniswap introduced a new AMM system that allowed for seamless token swaps with low slippage and without the need for order books or off-chain transactions.
- In 2020, the introduction of flash swaps made it possible for traders to borrow tokens for a single transaction without the need for collateral or a credit check, further expanding the capabilities of DEXs.
- In the same year, more advanced escrow-based DEXs emerged, such as Curve and Balancer, which allowed for more sophisticated trading strategies and the ability to earn yield through liquidity provision.
Cross-chain capabilities began to emerge in 2020 as well, with platforms such as Ren and Thorchain allowing for decentralized trading between different blockchains.
- In 2021, Uniswap V3 was released, which introduced concentrated liquidity and allowed liquidity providers to earn more fees by specifying price ranges for trades.
Later in 2021, more cross-chain capabilities were introduced with the launch of the Polygon Bridge, which allowed for assets to be transferred between Ethereum and Polygon with low fees and fast transaction times.
- In 2022, the emergence of Layer-2 solutions, such as Optimism and Arbitrum, made it possible for DEXs to scale and process more transactions, further expanding the capabilities of decentralized trading.
- Jua DEX intends to support Polkadot and Ethereum initially with more platforms to come powered by our integrated bridging technology.
- Reef and PolkaDex are also building on Polkadot which provides the ability to create dedicated parachains.
- A Compliance Framework will be leveraged by Jua DEX to provide cost effective solutions which compete with Centralized Exchanges and International remittances.
- Smart Wallet Functionality will also be provided to simplify the user experience and drive mass adoption.
## Team :Jua Dex:
### Team members
Kariuki Elkanah: Jua co founder Team lead
Renny Langat   : Jua co founder
Brian Gichuhi  : Jua co founder
Antony Mwathi  : Jua co founder
Julius P       : Jua engineer good in rust and solidity
### Contact
* **Contact Name:**  Kariuki Elkanah
* **Contact Email:** kariuki.369.elkanah@gmail.com
* **Contact Name:** Renny langat
* **Contact Email:** rennylngt@gmail.com
* **Contact Name:** Brian  Gichuhi
* **Contact Email:** brianchegegichuhi@gmail.com
* **Contact Name:** Antony Mwathi 
* **Contact Email:** mwathiantonyit@gmail.com
* **Contact Name:** Julius P
* **Contact Email:** julypjulius@gmail.com
### Legal Structure
* **Registered Address:**
JUA LABS LIMITED,
759-00100 Nairobi.
* **Registered Legal Entity:**
JUA LABS LIMITED,
No. PVT-LRUYB23D
### Team's experience
The team all have strong experience building Decentralized Financial Protocols.
Relevant Contributions are
**Elkanah Kariuki:** Elkanah Kariuki has been passionate about software and technology since high school. 
### Team's experience
Our team is made up of African Web3 developers from across East Africa(Kenya and Tanzania) and Asia(Japan). We all believe in decentralization and we are working to leverage this tech to improve the quality of lives of Africans by using crypto asset solutions to improve Africa financial system. Our team is made up of three Rust developers Juluis, Ntiro and Muchiri and three solidity developers who also are fully stack to help us achive our mission.
We are so far the first East,Central and Southern African project to dare leverage fully blockchain solution in our project and in finance and we do believe that crypto will be adopted well in Africa. Our current focus with our project is to onramp and offramp into the web3 ecosystem using crypto asset solution.
### Team Code Repos
https://github.com/jua-labs/p2p-contracts
https://github.com/juliusjulyp/PolkadotHackathon
https://github.com/jua-labs/p2p
### Team LinkedIn Profiles
(https://www.linkedin.com/in/muchiri-elkanah-396670224/
https://www.linkedin.com/in/rennylangat/
https://www.linkedin.com/in/gichuhibrian/

)
## Development Roadmap :nut_and_bolt: 
This application is specific to the DEX Pallet and lays the foundation for the larger vision which can be seen in our [draft white paper](https://jua.gitbook.io/welcome-juarian/).
### Overview
* **Total Estimated Duration:** 10 Person days
* **Full-time equivalent (FTE):** 1.0
* **Total Costs:** 10,000 USDC
### Milestone 1: Smart Contract Development
The first milestone should be the development and deployment of the smart contracts required for the DEX. This includes the escrow smart contracts and any other smart contracts necessary for the exchange to function.
| Number | Deliverable | Specification |
| --- | --- | --- |
| 1. | Testing Guide | We will provide a testing guide as well as an already-made test for the same. |
| 2. | Smart Contract Implementation | This involves the actual implementation of the smart contracts. The escrow smart contracts will be the main focus here. It may also involve the implementation of other contracts that are necessary for the DEX to function, such as governance contracts and token contracts. |
| 3. | Testing and Debugging | After implementation, the smart contracts will need to be thoroughly tested to ensure they function as intended. This includes unit testing, integration testing, and functional testing. Any bugs or issues discovered during testing will need to be resolved. |
| 4. | Security Audit | Once the smart contracts have been tested and debugged, a security audit should be conducted to ensure that they are secure and free from vulnerabilities. |
| 5. | Deployment | The final step is to deploy the smart contracts to the Astar parachain. This will involve configuring the smart contracts and deploying them to the blockchain network. |
| 6. | MVP Launch | The next milestone should be the launch of the Minimum Viable Product (MVP) for the DEX on the Astar parachain. This will enable users to access the exchange and purchase cryptocurrencies with their preferred payment method. The MVP should have basic functionality and a user-friendly interface. |
| 2. | Smart Contract Implementation | EVM based contract written in solidity and WASM smart contract written in ink will be connected by the use of precompiles from EVM to WASM to call XVM pallet, then XVM WASM adapter.The use of chain extension from WASM to EVM to call XVM pallet, then XVM EVM adapter to succesfully connect the two(WASM smart contract and EVM smart contract), this is to facilate chross chain capabilities of the assets such as the support of Polkadot in the DEX, of which our escrow smart contract is written in solidity |
| 3. | Testing | The code will have  unit-test  to ensure robustness and functionality. We will also provide a guide on how to run the tests, concerning the DEX we will provide a video how the functionality of the execution of buy and sell of different assets. |
| 5. | Reusability | Our code will be made open source for implementation by other projects, showing how the polkadot ecosystem regarding parachain implementation can make easier the connection of different blockchains and the future of smart contracts using XVM capabilities for interoperability |
| 6. | Security Audit | Once the smart contracts have been tested and debugged, a security audit will be conducted to ensure that they are secure and free from vulnerabilities. |
| 7. | Deployment | The final step is to deploy the smart contracts to the Astar parachain. This will involve configuring the smart contracts and deploying them to the blockchain network. |
| 8. | MVP Launch | The next milestone should be the launch of the Minimum Viable Product (MVP) for the DEX on the Astar parachain. This will enable users to access the exchange and purchase cryptocurrencies with their preferred payment method. The MVP should have basic functionality and a user-friendly interface. |

### Milestone 2: Compliance Framework Integration
| Number | Deliverable | Specification |
| --- | --- | --- |
| 1. | Research and Analysis | This involves researching the various compliance frameworks that can be integrated into the DEX, analyzing their features and benefits, and selecting the most suitable one for the project. This could involve looking into various regulations that impact the crypto industry in Africa. |
| 2. | Compliance Framework Integration Design | The next step is to design how the selected compliance framework will be integrated into the DEX. This involves identifying the components of the framework, their interactions with the DEX, and the necessary data flows. |
### Milestone 3: Limit Orders and Smart Wallet Functionality
The DEX should be expanded to include limit orders and smart wallet functionality. This will help streamline the exchange process and provide cost-effective alternatives to centralized exchanges and international remittances.
### Milestone 3: Full Launch:
The final milestone should be the full launch of the DEX, with all features and functionality in place. This will mark the completion of the project and enable users to fully leverage the Jua Dex ecosystem.
## Future plans
We plan to make our chain one of the leading parachains in the polkadot ecosystem. Thus, there is still a lot of work to be done. Here are a few of them:
1. Support for Multi-Currencies  via INK or EVM.
2. Enhance Deployment capabilities of the Jua DEX for other chains (either as an ORML module or as an INK Contract)
3. Implement SRS Incentivization Functionality
4. Bridging Functionality (XCMP Parachain Integration and Ethereum snowfork like integration)
5. Application Functionality (Jua Dapp, polkadot-js apps, wallet)
6. Parachain Functionality (Launching on Astar initially)
7. Compliance Framework
8. Smart Wallet Functionality
## Additional Information
Work done so far has included research and prototyping.
No other teams have contributed to the project.
This is Jua DEX's first grant application.
For a more comprehensive Jua DEX Vision please read the following
* [The Jua DEX product roadmap](https://jua.gitbook.io/welcome-juarian/jua-roadmap)
* [Jua DEX White Paper](https://jua.gitbook.io/welcome-juarian/)
**Here is an overview of the Jua P2P design**
![Jua Reference Protocols]
| --- | --- | --- |
| 1. | Research and Analysis | This involves researching the various compliance frameworks that can be integrated into the DEX, analyzing their features and benefits, and selecting the most suitable one for the project. This could involve looking into various regulations that impact the crypto industry in Africa. |
| 2. | Compliance Framework Integration Design | The next step is to design how the selected compliance framework will be integrated into the DEX. This involves identifying the components of the framework, their interactions with the DEX, and the necessary data flows. |
### Milestone 3: Limit Orders and Smart Wallet Functionality
The DEX should be expanded to include limit orders and smart wallet functionality. This will help streamline the exchange process and provide cost-effective alternatives to centralized exchanges and international remittances.
### Milestone 3: Full Launch:
The final milestone should be the full launch of the DEX, with all features and functionality in place. This will mark the completion of the project and enable users to fully leverage the Jua Dex ecosystem.
## Future plans
We plan to make our chain one of the leading parachains in the polkadot ecosystem. Thus, there is still a lot of work to be done. Here are a few of them:
1. Support for Multi-Currencies  via INK or EVM.
2. Enhance Deployment capabilities of the Jua DEX for other chains (either as an ORML module or as an INK Contract)
3. Implement SRS Incentivization Functionality
4. Bridging Functionality (XCMP Parachain Integration and Ethereum snowfork like integration)
5. Application Functionality (Jua Dapp, polkadot-js apps, wallet)
6. Parachain Functionality (Launching on Astar initially)
7. Compliance Framework
8. Smart Wallet Functionality
## Additional Information
Work done so far has included research and prototyping.
No other teams have contributed to the project.
This is Jua DEX's first grant application.
For a more comprehensive Jua DEX Vision please read the following
* [The Jua DEX product roadmap](https://jua.gitbook.io/welcome-juarian/jua-roadmap)
* [Jua DEX White Paper](https://jua.gitbook.io/welcome-juarian/)
**Here is an overview of the Jua P2P design**
![Jua Reference Protocols]
