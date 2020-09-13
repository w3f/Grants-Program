# Open Grant Proposal

* **Project:** Polkadex: A fully decentralized, peer-peer, cryptocurrency exchange for DeFi ecosystem in Substrate.
* **Proposer:** [Gauthamastro](https://github.com/Gauthamastro)
* **Payment Address:** BTC payment address. We don't accept payments for the program in other currencies at this stage. 

## Project Overview :page_facing_up: 
### Overview
There are many decentralized exchanges/protocols available in the market for traders but they still prefer to use centralized solutions for their convenience and ease of use knowing very well that their funds are at risk. This is because decentralized solutions are still not user friendly to an average trader. Some of them also have no proper decentralization and also got hacked in the process. We cannot call an exchange decentralized if it can lose or freeze customer funds.

The problems faced by decentralized exchanges are:

* Inadequate UI/UX experience.
* Low liquidity
* Lack of advanced trading features, high-frequency trading, and bots.
* Lack of proper decentralization and interoperability.

To solve the above problems, our goal is to build a fully decentralized, peer-peer, cryptocurrency exchange for the Defi ecosystem in Substrate. The project envisages the creation of a fully decentralized platform for exchanging tokens in a peer-peer, trustless environment, that enables high-frequency trading, high-liquidity, and lightning-fast transaction speed for supporting Defi applications.

In order to address the first problem, we needed to enable features that attract users into the exchange which includes a fast, responsive UI and trading features. It is mainly to attract day traders and retail investors who prefer centralized exchanges due to convenience and speed of execution. The block time of 3s given by the Babe/Grandpa consensus algorithm allows transaction speeds of up to 400/s under test conditions which is more than sufficient to compete with any centralized solutions in the market today. Please check our analysis [here](https://github.com/Polkadex-Substrate/Documentation/tree/master/Analysis).  Since Substrate hot-swapping of Consensus algorithm, we think a platform like Substrate will support the future growth of the exchange by changing consensus to accommodate more transactions per second as better ones emerge.

Secondly, the lack of liquidity is addressed by enabling,

1. High-frequency trading using feeless transactions. 
2. APIs that enable trading/AMM bots to observe market changes and submit trades.
3. Advanced trading features like stop limit, market limit, Stop loss, Fill/Kill, Post only, TWAP, etc.

Finally, proper decentralization and Interoperability are achieved by having a parachain in Polkadot that brings in liquidity from other blockchains and also using ChainBridge protocol that connects directly to the Ethereum network. Hence, traders have two different mechanisms to bring in liquidity.

The value we provide to the Substrate community is,

1. They can build custom UI/UX to connect to our network and create their own custom exchange experience.
2. Traders can contribute their own custom trading algorithms by making use of market data provided by our full nodes.
3. They get a decentralized trading platform to trade Polkadot & Ethereum tokens.
4. This will be one of the first Decentralized exchanges to have High-Frequency Trading bot support using APIs directly from full nodes.

### An indication of how you will integrate this project into Substrate / Polkadot / Kusama.
Polkadex is a decentralized exchange platform. It will have three high-level components. 
* An independent substrate chain for high-speed consensus secured and governed by network participants. 
* A Parachain on Polkadot for bringing liquidity from Polkadot’s interoperability community.
* A set of decentralized relayer set that use Substrate's ChainBridge pallet to allow interoperability with Ethereum. 

### An indication of why your team is interested in creating this project.
We are amused by the plethora of centralized institutions cropping up around the decentralized idea of open, peer to peer, programmable internet of value. Decentralized Exchanges are built on the idea of non-custodial interoperability. Polkadot and Substrate are the most promising blockchain interoperability platforms. We want to provide our users with maximum liquidity, security, and world-class user experience. Hence, we are excited and confident that building a DEX on Substrate, supported by Polkadot’s interoperability, will increase user engagement and overall trading experience when combined with our trading expertise over the years.


### Project Details 

* Mockups of exchange UI Components
    * Login In Page
 ![Login Mockup](https://github.com/Polkadex-Substrate/Documentation/blob/master/images/Login_mockup.png)
    * Dashboard
 ![DashBoard Mockup](https://github.com/Polkadex-Substrate/Documentation/blob/master/images/Dashboard_mockup.png)

* We have created a proof of concept of the idea. [check here](https://github.com/Polkadex-Substrate/Polkadex.git)

### Ecosystem Fit 

We have provided a comparison chart against two famous DEXs

| Features | Polkadex | BinanceDex | BitsharesDex |
| ------------- | ------------- | ------------- | ------------- |
| Decentralized Orderbook | Yes | Yes | Yes |
| Block time | 3 sec | 2 sec | 3 sec |
| Custom Trading bot | Yes | No | No |
| Network Size | Dynamic | 100 | Dynamic |
| Responsive UI | Yes | Yes | No |
| Upgradable State Transition Function | Yes | No | No |
| Automated Market Making Support | Yes | No | No |
| Custom UI/UX Support | Yes | No | Yes |
| Peer-Peer Blockchain Interoperability | Yes | No | No |
| Advanced Order types (Stop limit, Stop loss, etc) | Yes | No | No |
| High Frequency Trading Support | Yes | No | No |
| Margin Trading | Yes | No | No |
 

## Team :busts_in_silhouette:

### Team members

* Vivek Prasannan (Btech Computer Engineering) is passionate about Decentralized computing and has been actively following the crypto/blockchain community since 2013. He has researched and worked on a new [BSIP](https://github.com/bitshares/bsips/pull/119)  for Bitshares that will enable off-chain activities that can be settled transparently on the blockchain, and implicitly enables the creation of savings accounts for the users that are locked a certain time period to enhance fund security. He has successfully exited two startups in cloud computing, infrastructure support, and fintech space.
    - Experience: C++, RUST & Substrate Framework

* Gautham J, a 3rd-year B.Tech undergrad student at National Institute of Technology, Calicut, India. He has been at the forefront of distributed ledger technology by launching his own version of a consensus algorithm known as Pebble using Lamport’s vector clocks which is still in progress. The team received a blockchain innovation award from the BFSI sector by Banking Frontier. He has also co-authored an academic paper for Supply Chain management and predictions using machine learning models and ethereum network which is currently being peer-reviewed.
    - Experienced in GoLang, RUST, Python, C++, and Substrate Framework.

* Deepansh Singh, a 4th-year  B.Tech undergrad student at National Institute of Technology, Calicut, India. worked with multiple early-stage startups for developing business strategies and exited after making those startups a success. One of the startups that he worked got the Best Startup award in the National Institute of Technology Startup Conclave. He is also part of the Innovation Council for universities in Kerala under the Government of India. He along with Gautham received an award for their innovative consensus algorithm that enables high throughput transactions in permissionless networks.

### Team Website	
* https://github.com/Polkadex-Substrate

### Legal Structure 
Individual

### Team Code Repos
* https://github.com/Polkadex-Substrate/Polkadex

### Team LinkedIn Profiles
* https://www.linkedin.com/in/vivek-prasannan-4050489/
* https://www.linkedin.com/in/gautham-j-a4a559133/
* https://www.linkedin.com/in/deepanshconnect/


## Development Roadmap :nut_and_bolt: 

### Overview
* **Total Estimated Duration:** 12 weeks
* **Full-time equivalent (FTE):**  5.5 FTE
* **Total Costs:** 3 BTC 

### Milestone 1 -  Optimize Trading algorithm & Check for data errors
* **Estimated Duration:** 5 weeks
* **FTE:**  2
* **Costs:** 1.2 BTC

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 1. | Refactor Trading Engine in DEX pallet | Refactoring the limit and market order algorithms for efficiency and high-speed trading |
| 2. | Optimize Storage access | Optimize the storage and efficiency of reads and writes to substrate storage. |
| 3. | Check for Data errors | Checking the security for buffer overflows or any other type of data errors that may affect exchange transactions. | 
| 4. | Market Data API | Save closing_bid, closing_ask, and volume for each trading pair at each block on the chain |  
| 5. | Enable Market Data RPC | Implement RPC for retrieving Market data from full nodes for technical analysis |  
| 6. | Unit tests for Limit, Market Orders, and Market Data API | Integration of Unit tests for Limit, Market Orders & Market Data API|  
| 7. | Documentation | Proper documentation to submit Limit, Market orders or retrieve Market Data using Polkadotjs API |  
| 8. | Docker Container | Provide a docker container |

### Milestone 2: Install ChainBridge Pallet, Governance of Relayers and Staking.
* **Estimated Duration:** 5 weeks
* **FTE:**  2
* **Costs:** 1.5 BTC

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 1. | ChainBridge Pallet Installation | Configure the Substrate Chain Runtime to install ChainBridge pallet |  
| 2. | Decentralized Staked relayer set | Extending the ChainBridge pallet to have a decentralized relayer set. The smart contracts and pallet provided by ChainBridge will not have administrative role but instead administrative actions such as updating relayer set will happen using staking. | 
| 3. | Generic Assets pallet Integration | Connecting ChainBridge pallet to generic asset pallet to Mint and Burn tokens from Substrate side during deposit and withdrawal from and to Ethereum mainnet | 
| 4. | Security Audit | Audit the implemented system for faults in configuration | 
| 5. | Unit test | Add test cases for withdrawals and deposits. | 
| 6. | Documentation | Proper documentation for Depositing and Withdrawing from a local Ethereum node. | 

### Milestone 3: Web UI, Documentation & Tutorials
* **Estimated Duration:** 2 weeks
* **FTE:**  1.5
* **Costs:** 0.3 BTC

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 1. | Provide our Web UI | Convert mockups into working websites and connect them to full nodes using polkdotjs API. (Includes Dashboard, Login using Polkadot browser extension) |  
| 2. | Custom Trading Bot Tutorial | A simple implementation trading bot based on moving average enabled using market data from full nodes | 
| 3. | API Documentation | Documentation of APIs provided by a full node for developing custom UI/UX | 
| 4. | Basic Trading Tutorial | Basic trading tutorial for submitting limit & market orders based on our UI design. | 


### Community engagement

The tutorials and Documentation that we provide will be published as articles in Medium and other social media platforms with due mention about Web3 grant.
We also intend to engage community by providing grants in our tokens to add more support and improve our codebase.
## Future Plans
We will be registering a LLC for taking this project ahead.
We intend to host a the Web UI provided here. We will also be developing a cloud service to analyse and aggregate the market data to provide a wide range of technical indicators like Bollinger bands, RSI etc.
We want to provide traders the maximum possible user experience compared to a centralized exchange.
