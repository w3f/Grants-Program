# Ortege Interchain messaging protocol 

- **Team Name:** Aegis Labs Pty Ltd 
- **Payment Address:** USDC on Ethereum 0x04bf1305494e49e9319fcde389909ae53d13d376 
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 3 

## Project Overview :page_facing_up: 
Ortege - Bridging Worlds, Enabling Possibilities 

Ortege represents a groundbreaking cross-chain protocol designed to facilitate the seamless transfer of value and information across diverse blockchain networks. 

Our mission with Ortege is to address the pressing issue of blockchain interoperability, specifically by fostering compatibility between ink! based chains and those built on Solidity, Cosmos, and Solana. This innovative solution will empower different blockchain networks to interact and exchange value, thereby unlocking unprecedented opportunities in the realms of Decentralized Finance (DeFi), Non-Fungible Tokens (NFTs), and a myriad of other blockchain applications. 

By bridging these disparate blockchain ecosystems, Ortege aims to enhance liquidity, improve accessibility, and boost efficiency for users, regardless of their chosen blockchain platform. 

We are seeking to construct this as a crucial part of the burgeoning ink! infrastructure. Our vision is to provide an indispensable foundation that will support and accelerate the growth and adoption of the ink! ecosystem, fostering a more interconnected and efficient blockchain landscape 

### Ink! Ecosystem Impact 

By constructing robust infrastructure, we aim to unlock a plethora of use cases that are currently unattainable. A prime example is the integration of Chainlink Oracle data feeds, a highly sought-after feature within new ecosystems. However, the prohibitive costs and extensive launch times often act as deterrents. With Ortege, we intend to revolutionize this process. Any ink! chain will be able to remotely access Chainlink price feeds, reaping the benefits of Chainlink without incurring exorbitant costs. 

Furthermore, Ortege will facilitate the bridging of both fungible and non-fungible tokens across all supported chains, thereby enhancing the fluidity of asset transfer and interaction. 

One of the unique features of Ortege is its ability to allow users to manage interchain accounts from ink! based chains. This means that users can maintain their presence within the ink! ecosystem while remotely controlling accounts on other chains, thereby offering a seamless and integrated user experience. 

Our approach to building Ortege involves leveraging our existing smart contracts, originally developed for Solidity, and implementing them within the ink! framework. This strategy not only capitalizes on our established resources but also ensures a smooth transition and integration within the ink! ecosystem. 

 ### Benefiting the Kusama Ecosystem 

 The deployment of Ortege into the ink! framework is not just an advancement for ink! but also a significant leap forward for the Kusama ecosystem. Kusama, known for its pioneering spirit and its role as a canary network for Polkadot, thrives on innovation and the exploration of new frontiers in the blockchain space. 

Ortege's cross-chain protocol will further solidify Kusama's position as a hub for cutting-edge blockchain projects. By fostering compatibility between ink! based chains and other major platforms, Ortege will attract a broader range of developers and projects to the Kusama ecosystem. This influx of talent and innovation will lead to a richer tapestry of applications and solutions built on Kusama, driving its growth and prominence in the blockchain industry. 

Moreover, as Ortege enhances liquidity and accessibility across chains, it will also bolster Kusama's reputation as a network that prioritizes user experience and inclusivity. The ability to bridge assets and information across diverse networks will make Kusama an even more attractive destination for projects seeking interoperability and cross-chain functionality. 

In essence, Ortege's integration into ink! will not only elevate the ink! infrastructure but will also play a pivotal role in the expansion and evolution of the Kusama ecosystem, making it a beacon for innovation, collaboration, and growth in the decentralized world. 

### Project Details 

 For an overview of the architecture please see the following: 

https://miro.com/app/board/uXjVM4gLfNU=/?share_link_id=987322811617  

From the diagram we can break the major components into off chain agents and on chain smart contracts. The on chain smart contracts are responsible for sending and receiving messages as well as securing the delivery of the network. The off chain agents consist of validators and relayers to relay the messages between chains.  

#### Data Models / API Specifications of the Core Functionality 

The core functionality of Ortege includes several key APIs: 
  
Messaging API: This API allows for the sending and receiving of messages between chains. 

Accounts API: This API enables an account on one chain to make smart contract calls on remote chains. 

Queries API: This API allows an account on one chain to make view calls on remote chains. 

Warp Route API: This API enables the movement of native, ERC20, and ERC721 tokens across chains. 

#### Overview of the Technology Stack 

The technology stack for Ortege includes: 

Ink!: The smart contract language for building the core functionality. 

Hyperlane: The interoperability layer that allows for communication between different blockchains. 

Solidity: Will be made compatible with ink! based chains through Ortege. 

#### Documentation of Core Components, Protocols, Architecture 

The core components of Ortege will include: 

Interchain Security Modules: These modules give developers control over their security model, allowing them to configure, compose, and customize security according to the needs of their application. 

Warp Routes: These routes allow native, ERC20, and ERC721 tokens to move seamlessly across chains. 

Interchain Accounts: These accounts allow an account on one chain (e.g., a DAO) to make smart contract calls on remote chains. 

Interchain Queries: These queries allow an account on one chain to make view calls on remote chains. 

The architecture of Ortege is designed for modularity and permissionless interoperability. This architecture allows any blockchain environment, whether it is a layer 1, rollup, or app-chain, to communicate seamlessly with any other chain on which Ortege has been deployed. 

Please note that this is a high-level overview and the actual implementation may involve additional components and technologies. The exact details will depend on the specific requirements of the Ortege protocol and the constraints of the ink! language and the Ortege architecture. 

Our architecture is heavily based on Hyperlane’s and you can find detailed technical documentation here: https://docs.hyperlane.xyz/docs/introduction/readme  

Please note the following out scope elements: 

* Smart contract audits 

* Scaper agent for indexing the chain 

* Explorer 

* Mainnet deployment: The PoC will only be deployed to the Shibuya testnet and connected to the Goerli testnet. The PoC will allow one-way communication from Goerli to Shibuya. 

This focused scope allows us to deliver an effective PoC while setting the stage for more extensive work in the future. The result of this phase will be a functional prototype that demonstrates the interchain communication of Chainlink price feeds. We are confident that the utilization of Chainlink's ISM will eliminate the need for significant adjustments to the validator agent. 

### Ecosystem Fit 

#### Where and how does your project fit into the ecosystem? 
 Our project, an ink! adaptation of Hyperlane, is designed to seamlessly integrate into the Substrate ecosystem. It serves as a high-performance cross-chain communication protocol that facilitates the rapid and secure transfer of data and value across different blockchain networks. By leveraging Substrate's modular framework, our project enhances interoperability, making it easier for various blockchains within the Polkadot and Kusama ecosystems to communicate and collaborate. 

 #### Who is your target audience? 

 Our primary target audience includes parachain developers, dapp creators, and wallet/UI developers within the Substrate, Polkadot, and Kusama ecosystems. Additionally, we aim to serve designers who are looking to create user-friendly interfaces for cross-chain interactions, as well as dapp user bases that require efficient cross-chain functionalities. 

 #### What need(s) does your project meet? 

 Our project addresses the critical need for efficient and secure cross-chain communication within the blockchain ecosystem. As the decentralized world grows, the ability for different blockchains to interact seamlessly becomes paramount. Our ink! version of Hyperlane ensures that data and value transfers across chains are swift, reliable, and secure, thereby eliminating barriers to interoperability and fostering a more interconnected blockchain landscape. 

 ### Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem? 

 While there are several projects within the Substrate, Polkadot, and Kusama ecosystems that focus on cross-chain communication, none offer the unique features and performance capabilities that our adaptation of Hyperlane provides. For example, none can offer remote Chainlink price feeds as well as interchain accounts. We also believe none of them offer the breadth of integrations we will be able to provide to not only EVM networks but also to Cosmos and Solana based chains.  

#### Are there similar projects in related ecosystems?  

In related ecosystems, there are projects like Cosmos' Inter-Blockchain Communication (IBC) that aim to achieve cross-chain communication. In fact, the Interchain accounts feature has been heavily inspired by the Cosmos ideas.   

## Team :busts_in_silhouette: 

 ### Team members 

 - Justin Trollip - CEO 
- Firat Akkan – COO 
- Brandon Mino – Smart contract engineer 
- Sarju Hansaliya - Full stack engineer 
- Bilal Corbacioglu – Smart Contract Engineer  
- Christos Salaforis - Director of Business Development 
- Jose Barato - DevOps Lead 
- Pedro Santos – Full stack engineer 
- Abdullah Bayraklilar - Product Owner 

 ### Contact 

 - **Contact Name:** Justin Trollip 

- **Contact Email:** justin@moitessier.io 

- **Website:** https://ortege.io 

### Legal Structure 
- **Registered Address:** 2/131 Morala Avenue, Runaway Bay, Gold Coast, Queensland, Australia, 4216 
- **Registered Legal Entity:** Aegis Labs Pty Ltd 

### Team's experience 
 Our team is composed of seasoned professionals who have been actively involved in the Decentralized Finance (DeFi) sector for over two years, primarily through our work with Pangolin Exchange. During this period, we have facilitated approximately 18 billion USD in volume, a testament to our expertise and the trust placed in us by the community. 

 While Pangolin Exchange continues to be a significant project for some of our team members, a dedicated subset of our team is now channeling their expertise and passion into the development of Ortege. This new venture leverages our extensive experience in DeFi and our deep understanding of the challenges and opportunities in the blockchain space. 

 Over the years, we have developed numerous production-grade smart contracts, which are the backbone of any DeFi application. These smart contracts have been rigorously tested and audited to ensure their security and reliability. We understand the intricacies of smart contract development and are well-versed in best practices for coding, testing, and auditing. 

 In addition to our smart contract expertise, we have also built open-source UI libraries and frameworks. These tools have been used to create user-friendly interfaces for DeFi applications, making them accessible and easy to use for both experienced users and newcomers to the space. Our commitment to open-source development reflects our belief in transparency and community collaboration. 

 Furthermore, our team has extensive experience with backend infrastructure deployments. We have built and maintained the infrastructure necessary to support a high-volume DEX like Pangolin Exchange. This includes setting up and managing servers, databases, and other backend systems, as well as implementing robust security measures to protect user data and funds. 

 In summary, our team brings a wealth of experience and a proven track record in DeFi development. We are confident that we have the skills, knowledge, and passion necessary to make Ortege a success 

 ### Team Code Repos 

 - https://github.com/pangolindex/exchange-contracts 
- https://github.com/pangolindex/interface 
- https://github.com/pangolindex/components  
- https://github.com/pangolindex/sdk 

 Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine. 

- https://github.com/SarjuHansaliya 
- https://github.com/HariSeldon23 
- https://github.com/bmino 
- https://github.com/prodesert22 
- https://github.com/josedev-union 

### Team LinkedIn Profiles (if available) 

 - https://www.linkedin.com/in/shane-mccann-394a8425/ 
- https://www.linkedin.com/in/justintrollip/ 
- https://www.linkedin.com/in/firat-akkan/ 

 ## Development Status :open_book: 
 Our project, Ortege, has made significant strides in its development phase. We have successfully deployed our backend system in a Kubernetes environment, which includes the operation of validators and relayers. This robust infrastructure ensures the smooth and secure functioning of our protocol. 

In the spirit of decentralization and resilience, we have designed our system to allow for the deployment of additional validators by any party. This feature enhances the security and reliability of our protocol by preventing any single point of failure and promoting a more distributed network. 

We have also made substantial progress on the smart contract front. Our team has deployed smart contracts onto EVM chains and achieved key milestones, including the successful transmission of interchain messages, the creation of a bridge for tokens, and the ability to remotely read state on smart contracts. These accomplishments demonstrate our technical prowess and the functional capabilities of our protocol. 

To provide transparency and traceability, we have deployed an explorer that can track the entire lifecycle of a message. This tool allows users to monitor the status of their transactions and provides valuable insights into the operation of the protocol. 

Lastly, we have integrated WalletConnect 2 to enable the remote control of an interchain account on another chain. This feature enhances the user experience by allowing users to manage their assets across different chains from a single interface. 

In summary, while there is still work to be done, we are proud of the progress we have made so far and are excited about the potential of Ortege to revolutionize blockchain interoperability. 

## Development Roadmap :nut_and_bolt: 
 ### Overview 
- **Total Estimated Duration:** 5 months 

- **Full-Time Equivalent (FTE):**  4 FTE (Milestones will be worked on concurrently) 

- **Total Costs:** $95,000 

  

### Milestone 1 Ink! Smart Contracts 

We will begin by developing smart contracts in the ink! language. These contracts will form the backbone of our protocol, enabling the core functionality of cross-chain communication. We will leverage the design principles and specifications provided by Hyperlane to ensure our contracts are robust, secure, and efficient. This will involve creating contracts for managing the protocol's state, handling message routing, and facilitating the transfer of value across chains. 
 
- **Estimated duration:** 4 months 
- **FTE:**  2.5 
- **Costs:** 60,000 USD 

| Number | Deliverable | Specification | 
| ------ | ----------- | ------------- | 
| **0a.** | License | Apache 2.0 | 
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can query, call or post an interchain message. | 
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. | 
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. | 
| **0e.** | Article | We will publish an **article**/workshop that explains [...] (what was done/achieved as part of the grant). | 
| **1.** | Ink! Contract: MerkleTree | We will create an ink! MerkleTree implementation and will submit to OpenBrush for inclusion in their standards | 
| **2.** | Ink! Contract: Interchain security module | The ISM contract will provide modular security for the Ortege system, accommodating use-case-specific security requirements. | 
| **3.** | Ink! Contract: Mailbox | The Mailbox contract will facilitate the sending and receiving of messages between chains. | 
| **4.** | Ink! Contract: Interchain Gas Paymaster | This contract will store exchange rates between gas tokens, thus ensuring enough gas for successful message execution. | 
| **5.** | Ink! Contract: Chainlink ISM and Price Aggregator | These are the smart contracts that will allow dApp developers to query Chainlink’s prices and also cover the security of the queries | 
| **6.** | Smart contract integration testing | All internal testing of the smart contracts and writing of unit tests | 

### Milestone 2 Agents compatible with Substrate RPC endpoints 
 - **Estimated Duration:** 2 month 
- **FTE:**  2 
- **Costs:** 22,000 USD 

| Number | Deliverable | Specification | 
| ------ | ----------- | ------------- | 
| **0a.** | License | Apache 2.0 | 
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can query, call or post an interchain message. | 
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. | 
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. | 
| **0e.** | Article | We will publish an **article**/workshop that explains [...] (what was done/achieved as part of the grant). | 
| **1.** | Substrate Connect | We will add a Substrate Connect client to our Helm and Kubernetes backend | 
| **2.** | Agent: Validator | We will adjust our validator in order to validate and confirm Merkle tree’s created in inK!| 
| **3.** | Agent: Relayer | We will adjust our relayers so that they are able to send messages from ink! Based chains to EVM chains and vice versa | 
| **6.** | Full End 2 End Integration testing | Writing the full E2E integration tests | 

### Milestone 3 Chainlink Proof of Concept 
 - **Estimated Duration:** 2 months 
- **FTE:**  1 
- **Costs:** 10,000 USD   

| Number | Deliverable | Specification | 
| ------ | ----------- | ------------- | 
| **0a.** | License | Apache 2.0 | 
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can query, call or post an interchain message. | 
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. | 
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. | 
| **0e.** | Article | We will publish an **article**/workshop that explains [...] (what was done/achieved as part of the grant). | 
| **1.** | Agent scheduler | We will create a scheduler that pushes a new Chainlink price feed (BTC/USD) anytime it’s updated on Goerli to Shibuya | 
| **2.** | Monitoring | We will have a monitoring system and metrics system built on Grafana and Prometheus so that we can track the progress | 

## Future Plans 
As we continue to innovate and expand the capabilities of Ortege, our roadmap is set with ambitious milestones that align with the evolving needs of the blockchain community. 

Deployment to Kusama's ink-based Chains: Recognizing the potential and dynamism of the Kusama network, one of our primary objectives is to deploy Ortege to ink-based chains on Kusama. This strategic move will not only enhance the interoperability within the Kusama ecosystem but also foster a more interconnected and efficient blockchain landscape. By integrating with Kusama's ink-based chains, we aim to bring the benefits of seamless cross-chain communication to a broader audience, further solidifying Ortege's position as a leading cross-chain protocol.   

Launching Ortege Warp: In our pursuit to bridge the gap between different blockchain ecosystems, we are excited to introduce Ortege Warp. This specialized bridge is designed to facilitate the smooth transfer of ERC20 tokens and NFTs between networks. With the increasing prominence of NFTs and the ubiquity of ERC20 tokens, Ortege Warp will play a pivotal role in ensuring that these digital assets can move freely and securely across chains. This will not only enhance liquidity and accessibility for users but also open up new avenues for cross-chain collaborations and innovations. 


Our commitment to these future endeavors reflects our vision for a more cohesive and integrated blockchain world. Through Ortege and its subsequent developments, we aim to be at the forefront of blockchain interoperability, driving change and setting new standards for cross-chain communication.  
## Additional Information :heavy_plus_sign: 

**How did you hear about the Grants Program?** Web3 Foundation Website   