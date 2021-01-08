# Open Grant Proposal
* **Project Name:** Injective_Polkadot_bridge
* **Team Name:** Injective Protocol
* **Payment Address:** 0xD1F1A71c6bC5FD994809a141AA79066021A4FFf5

## Project Overview :page_facing_up: 
### Brief Injective Protocol Overview
#### Decentralization
The Injective Chain is a fully-decentralized sidechain relayer network which serves as a layer- 2 derivatives platform,trade execution coordinator (TEC), and decentralized orderbook.The core consensus is Tendermint- based.

#### Speed
The Injective Chain provides a two-way Ethereum peg-zone for Ether and ERC-20 tokens to be transferred to the Injective Chain as well as an EVM-compatible execution environment for DeFi applications. The peg-zone is based off of Peggy and the EVM execution is based off of Ethermint.

#### Orderbook Model
Injective's Orderbook is a fully decentralized 0x-based orderbook, enabling sidechain order relay with on - chain settlement - a decentralized implementation of the traditionally centralized off-chain order relay used by nearly all central limit order book decentralized exchanges.

#### Markets
Market creation is entirely open and permissionless. This enables anyone to create a market using only a price feed and deploy it to the larger Injective ecosystem.

#### Gas fees
Given the unique layer-2 structure, Injective is able to avoid both network congestion and the associated high gas fees. This zero gas fee structure can enable anyone to trade freely without having to worry about high gas fees or network latencies.

### Overview
#### The problem
Many DEXs today claim to be decentralized but are actually centralized in most aspects besides custody. From restricting access to certain user demographics, retaining proprietary control over exchange infrastructure, every central limit orderbook DEX that we have seen has centralized components that allow traders to be subject to the will of an omnipotent authority. This is the fundamental problem that Injective solves.

The common rationale against full decentralization is that efficiency and user experience are sacrificed. We at Injective reject this notion and have committed ourselves to turning the vision of a highly performant, permissionless, and fully-decentralized exchange protocol into reality.

A numeber of DEXes remain in the space but the attention is largely dedicated to Etheruem thus far. However, we believe that in a longer term time span, new robust ecosystems will arise on other layer ones. So being siloed to Ethereum especially given the high gas fees and low throughput isssues is not sustainable for the growth of the decentralized finance sector as a whole. That is why Injective aspires to brdge together popular layer ones in the space today. This will allow us to be the core derivatives exchnage via which distinct asset types can be exchanged with ease. This will also help in reaching our goal of supporting unlimited markets.

Over the past year we have noticed an uptick in development within the Polkadot ecosystems with a number of new assets/DApps launching on Polkadot. This is why we seek to bridge Polkadot to our derivatives exchange in order to integrate its ecosystem with the wider DeFi networks that remain concerntated on Ethereum as of now.

#### The solution
The biggest fundamental difference between Injective Protocol and other exchanges is that we make exchange a decentralized public utility which gives our users and community the resultant value capture from our exchange protocol.

Our technology brings an order of magnitude speedup by scaling trade execution and settlement on layer- 2 all while being fully decentralized.Injective’s fully decentralized nature uniquely allows individuals to permissionlessly create and trade derivative markets that even centralized exchanges cannot support.

A salient challenge that remains in this process is the actual bridging of asset between distinct blockchains. Polkadot is quite compelling in this regard since it consists of different parachains that can easily communicate with one another. So, we seek to bridge the Injective Chain with the Polkadot network in order to unlock the full potenital of borderless finance and decentralized derivatives as a whole. By doing this we can allow for the creation of new markets that utilize DOT and other Polkadot based assets.

#### The application

A bridge for assets between Injective Chain and the Moonbeam parachain, which is part of the Polkadot ecosystem, will greatly ebenfit Polkadot and the larger crypto ecosystem. 

Injective offers limitless trading for both native crypto assets and synthetic products. This also includes the creation of new financial markets as a whole such as indices and other asset types not yet available in crypto.

With this bridge, Polkadot users will be able to easily transfer their assets and take part in cross-chain trading. It will also allow us to create new derivative products that use DOT and other Polkadot based assets. This also enables users of other layer ones to move their assets and earnings back to Polkadot; thereby acclerating the adoption of Polkadot overall. These users can also move their earnings back to Polkadot which can help the rapidly growing DeFi ecosystem on Polkadot by locking up more assets on Polkadot.

To conclude, this application could result in a very interesting win-win situation between Injective  and Polkadot.

### Project Details

Generally, the bridge will allow assets to be transfered to and from Polkadot. That means that tokens will be able to be transferred from their native chain to the other chain as wrapped tokens, but those wrapped assets can also be transferred back to the native chain.  
  
The procedure will be exactly the same for both chains (same smart contracts, same relayer handling).  
  
The bridge will consist of three main components:

1) Smart Contracts  
2) Relayer Software  
3) UI  
  
#### Smart Contracts  
All smart contracts will be written in Solidity, as both Moonbeam and Injective support EVM based smart contract development.  
 
We will create three smart contracts for the bridge's purpose:  
 
a) Depositor smart contract  

The depositor smart contract will be responsible for accepting the deposits of the assets that users would like to bridge.  
Once the assets are deposited in this smart contract, they will be locked until an order from a multisig smart contract to unlock is given.  
 
b) Handler smart contract 

A handler smart contract will be actually the opposite of the depositor smart contract. When a deposit of an asset (native or wrapped) is happening on one chain, the handler will be responsible for minting the same asset (wrapped or native) on the destination chain.  
 
c) Multisig smart contract

A multisig smart contract will actually act as a voting contract for the validators and as the owner of the handler. Validators, the number of which is yet to be determined, will need to reach consensus about the validity of a deposit to provide permission for the handler smart contract to mint.  
  
#### Relayer Software
The relayer software will be responsible for the smooth functioning of the bridge, as it will handle event listening and provide permissions. 
 
The main relayers will actually be responsible for listening to the deposit events of the entry chain and transfer the data on the mMltisig of the destination chain. 

There will be two main relayers one for each chain. 
 
There will be other relayers, called validators which will listen to the OpenVote event of Multisig. When such an event occurs it means that validators will need to vote about the validity of the deposit. Validators will then need to sign their vote with their private keys and pass it to the Multisig.

The last validator to reach the Multisig will also trigger the vote result. 
 
If there is no consensus, a VoteFailed event is triggered and the main relayer of the respective chain unlocks the deposit, so that the can withdraw it. 
 
If there is consensus, assets will appear on the destination chain of the wallet that the depositor passed as input on the deposit function.

There will be also other features added, like cancellation of a deposit in case a transaction is taking too long to execute (because of low gas fees etc).

Those features will certainly be provided alongside the Relayer Software milestone because it is widely known that some edge cases cannot be considered before the real development starts. 

#### UI
Through the intuitive UI, users will be able to interact with the bridge we implement. It will contain a web3 connection to both chains and the essential deposit tab.

### Ecosystem Fit 
As described above, bridging Polkadot assets with Injective will be a robust addition to the polkadot ecosystem as a whole. This will enable the creation and trading of limitless cross-chain derivatives. This will be greatly beneficial to the Polkadot community as a whole and introduce new users to Polkadot based assets.

## Team :busts_in_silhouette:

### Team members
* Eric Chen (CEO)
* Albert Chon (CTO)
* Mirza Uddin (Head of Business Development)
* Maxim Kupriianov (Principal Engineer)
* Michael Siedlecki (Product Manager)
* Markus Waas (Blockchain Engineer)
* Bojan Angjelkoski (Frontend Engineer)
* Alexandros Athanasopoulos (Blockchain Engineer)

### Contact
* **Contact Name:** Mirza Uddin
* **Contact Email:** mirza@injectiveprotocol.com
* https://injectiveprotocol.com/

### Legal Structure 
* **Registered Address:** P.O. Box 1350
Clifton House
75 Fort Street
Grand Cayman KY1-1008
Cayman Islands
* **Registered Legal Entity:** Injective Network Ltd.

### Team's experience
Eric Chen (CEO)-  Eric previously attended NYU Stern where he studied finance and computer science. Before founding Injective, he worked as a cryptography researcher and trader at Innovating Capital where he led innovative market neutral trading efforts in the blockchain space as well as investments into prominent companies such as 0x, ChainLink and Cosmos. Eric has extensive knowledge about blockchain protocols and traditional finance along with a native understanding of both eastern and western blockchain based protocols and communities. 

Albert Chon (CTO) - Albert previously attended Stanford University where he studied computer science and was involved in applied cryptography research advised under Dan Boneh (prominent Stanford cryptography Professor). Before founding Injective, he worked at Amazon as a software developer as well as Open Zeppelin. Albert invented the ERC-1178 token standard which was adopted by Loom Network for NFTs. Having lived in South Korea, Albert also has a keen understanding of the retail trading community in South Korea as well as relationships with key strategic partners in the region.

Mirza Uddin (Head of Business Development) - Mirza was previously on the investment team at Two Sigma (one of the largest hedge funds in the world), where he focused on investments into blockchain based technologies. He also was part of the investment team at Index Ventures. Prior to his work in VC and startups, Mirza held roles in management consulting at BCG and in investment banking. Mirza graduated with a BA from Harvard.

Maxim Kupriianov (Principal Engineer) - Maxim has 11 years of programming experience and has a diverse set of experience building back-end infrastructure at numerous startups. Prior to joining Injective, he was the lead blockchain engineer at Atlant where he led development of a real estate tokenization platform on top of Ethereum and authored the ERC-1462 security token standard. He notably also has 3 years of experience using Tendermint/Cosmos-SDK which he used in its early days to design an in-game blockchain based reward system for a distributed MMORPG at Gamma Innovations (acquired). Maxim is also an avid open-source contributor and is an expert in the Go programming language. 

Michael Siedlecki (Software Engineer) - Michael has 10 years of programming experience and was an early/founding-engineer at several Y-Combinator funded startups. He worked for 2 years at EMX where he worked full-stack on the company’s centralized crypto derivatives exchange. Coming from a centralized exchange that went head-to-head with FTX, Michael spearheaded multiple derivatives trading competitions and has a very good understanding of product and growth-hacking.

Markus Waas (Blockchain Engineer) - Markus has 10 years of programming experience and has over 8 years of crypto-specific experience. He began mining Bitcoin in 2012 and has worked at several blockchain companies/projects in the past. Before joining Injective, Markus was a smart contract engineer at Laminar/Acala where he created a Forex CFD margin trading platform on Ethereum. Markus also worked at Juri where he designed and implemented a new type of staking pool as well as a fully decentralized oracle system. Markus graduated from Humboldt University in Berlin where he wrote his master’s thesis on randomness on the blockchain and has won awards at numerous Ethereum hackathons including ETHBerlin and Blockstack Berlin. He is a Solidity expert and is the author of https://soliditydeveloper.com.

Bojan Angjelkoski (Front-end Engineer) - Bojan has 8 years of programming experience and has experience at multiple startups as a full-stack engineer. He has also previously worked at the prestigious World Trade Organization (WTO) as a full-stack engineer. Bojan holds both a B.S. and M.S. degree in Computer Science.

Alexandros Athanasopoulos (Blockchain Engineer) - Alex has 5 years of programming experience and has been developing on Ethereum for 3 years. Alex has a plethora of experience building decentralized applications and games on top of Ethereum. Some projects he worked prior to joining Injective include Global Crypto Alliance (a blockchain reputation-based incentivized news platform), Aries Blockchain (a no-code dApp startup) as well as numerous other projects involving escrows, insurance, and gaming. He is a graduate of the National Technical University of Athens where he wrote his masters thesis on decentralized finance.

### Team Code Repos
* https://github.com/InjectiveLabs

### Team LinkedIn Profiles
* https://www.linkedin.com/in/ericchenmelt/
* https://www.linkedin.com/in/albertchon/
* https://www.linkedin.com/in/themirzauddin/
* https://www.linkedin.com/in/mkupriianov/
* https://www.linkedin.com/in/michaelsiedlecki/
* https://www.linkedin.com/in/markuswaas/
* https://www.linkedin.com/in/bangjelkoski/
* https://www.linkedin.com/in/alexandros-athanasopoulos-gr/

## Development Roadmap :nut_and_bolt: 

### Overview
* **Total Estimated Duration:** 3 months
* **Full-time equivalent (FTE):**  3 FTE
* **Total Costs:** 20000 DAI

### Milestone 1 Implementation of Smart Contracts 
* **Estimated Duration:** 1 month
* **FTE:**  1
* **Costs:** 7000 DAI

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 / MIT / Unlicense |
| 0b. | Documentation | Documentation will be provided on how smart contracts for the bridge will be designed. |
| 0c. | Testing Guide | The smart contract code will be tested in a local environment. | 
| 1. | Depositor Smart Contract | A depositor smart contract will be created, which will be responsible for locking the assets. |  
| 2. | Handler Smart Contract | A handler smart contract will be created, which will be responsible for executing on deposit. |  
| 3. | Multisig Smart Contract | A multisig smart contract will be created, which will be responsible for validating the bridging. |  
| 4. | Smart Contract tests | Tests for all smart contracts and the interconnection between them will be delivered. |  
| 5. | README | A README.md file will be added to the repo, which will describe the steps to migrate and test the smart contracts flow. |

### Milestone 2 Implementation of relayer code
* **Estimated Duration:** 1 month
* **FTE:**  1
* **Costs:** 7000 DAI

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 / MIT / Unlicense |
| 0b. | Documentation | Documentation will be provided on how relayers are designed to interact with the bridging smart contracts. |
| 0c. | Testing Guide | The relayers' workflow will be tested. | 
| 1. | Relayer Software | The software on how relayers will interact with the bridge on the two different chains. |  
| 2. | Relayer Tests | Tests for relayers and the interconnection between them and smart contracts will be delivered. |  
| 3. | README | A README.md file will be added to the repo, which will describe the steps to run the entire bridge in a local environment. |


### Milestone 3 UI implementation
* **Estimated Duration:** 1 month
* **FTE:**  1
* **Costs:** 6000 DAI

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 / MIT / Unlicense |
| 0b. | Documentation | Documentation and/or article will be provided on how everyone can test the bridge in real time between the Moonbeam testnet and the Injective testnet. |
| 0c. | Testing Guide | The entire bridge workflow will be tested between Moonbeam's and Injective's testnet. | 
| 1. | FrontEnd Software | The software for the frontend will be developed. |  
| 2. | Interaction Website | The Frontend will be deployed and everyone will be able to interact with it. |  
| 3. | Interaction Page | The frontend will be deployed. |  
| 4. | Article | A step by step guide and/or video will be published to help others interact with the bridge. |

## Future Plans
Our entire project, which includes the entire exchange and native chain will be launch its mainnet in Q2 of 2021, so that is when the bridge will begin to help bridge real tokens.

## Additional Information :heavy_plus_sign:   
There are no teams that have contributed financially to this bridge implementation at the moment. We are planning to work with Moonbeam but there was no financial contribution. 

We have not submitted other grant applications for this project.


