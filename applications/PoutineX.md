# W3F Grant Proposal - PoutineX


* **Project Name:** PoutineX - MVP - phase 1
* **Team Name:** 9396-1183 Québec inc.
* **Payment Address(BTC):** 3EBbjCp9tBgu1d3Lt1NCjvT7MT7PSUJ2JG
* **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 1


## Project Overview


### Overview

We will create an entirely decentralized exchange platform, which will be point-to-point, non-custodial, trust-less, high-frequency-trading-capable, high liquidity, high trading speed and extremely low transaction costs.

Under test condition, we could increase the trading speed up to 500,000 TPS and reduce the latency to the order of magnitude of milliseconds, and that is good enough to compete, in terms of speed, with any centralized exchanges that are currently existing in the market.  

Poutinex as a part of Polkadot / Substrate / Web 3 Ecosystem

* Transactions are processed in parallel on the parachain,so they could be faster. The Polkadot network can aggreate various blockchains together to create a vibrant ecosystem, which is absolutely required by PoutineX. 
* Substrate also allows us to add new features and to expand without having to go through complicated processes including hard forks. 
The Substrate framework allows us to put all our attention on optimizing the network, improving user experience, and achieving high performance. 
* Under test condition, based on a consensus algorithm that is similar to Babe/Grandpa of Substrate, we could increase the trading speed up to 500,000 TPS and reduce the latency to the order of magnitude of milliseconds, and that is good enough to compete, in terms of speed, with any centralized exchanges that are currently existing in the market. 


### Project Details

* Thanks to the mature blockchain technologies and the development of web 3.0 , PoutineX could build an order book based decentralized trading platform. Our architecture is unique because it is a combination of multiple technologies: blockchain, parachain, TEE (Trusted Operating Environment), IPFS and other latest technologies available in the blockchain industry today.

* [system architecture] <br>
<img src="https://poutinex.org/assets/Architecture.png" width="60%" />


### Technologies

1. Trusted Execution Environment (TEE):TEE is a technology invented by Intel Corporation.

2. InterPlanetary File System (IPFS): These web3.0 components help the system to maintain the latest status of fund transfers. 

3. Substrate

4. Go

5. Rust

### Components

1. PoutineX blockchain network: A local blockchain network to ensure the safe operation of Poutine Orderbook.

2. Trusted Execution Environment (TEE):TEE is a technology invented by Intel Corporation, which allows modern CPUs to have an exclusive area, independent of the operating system, BIOS and other core components of the computer. Its main advantage is that the calculations performed in the TEE are verified by the blockchain, and any tampering will be rejected by the blockchain. 

3. Orderbook engine: It is the core component of Poutine DEX. It contains high-performance components that can match, verify and settle transactions.

4. InterPlanetary File System (IPFS): These web3.0 components help the system to maintain the latest status of fund transfers. They also store snapshots of these transaction to protect against network access hardware damage or loss, or even operator failure. When a failure occurs, the order system will reject all new requests and return all of traders' funds to their respective account within 12 seconds, which is the shortest recovery time interval if we compare to all other competitors. 

### Ecosystem Fit

* The value we provide to the Community is,
  * The FASTEST system on Earth.
  * Traders will get a genuine decentralized trading platform. 
  * A fast-responding UI. A better UX that could attract typical traders who are retail investor and who usually trade on short-term. These typical traders usually prefer CEX precisely because of its easy of use and trading speed. 
  * The possibility of free/extremely low fee high-frequency tradings would allow to scale up the trading volume.   
  * full support of customized algorithmic tradings.
  * Open APIs would allow an universal access to consumers and help expanding the market liquidity. 

* The target audience is mostly traders.

* Our project provides one of the best trading systems in the field with the state of art technologies.

* Polkadex is a similar system to our project. But our project is distinct from Polkadex.
  Comparing with Polkadex,
  * We have better AMM+Orderbook smart matching mechanism.
Based on the AMM market-making mechanism, through the off-chain Orderbook matching mechanism and the TEE security environment, it will bring higher TPS and better trading experience.
PoutineX will use a hybrid system: switching between AMM liquidity pool and Orderbook system,to realize unlimited liquidity. We could do it without sacrificing the trading experience. (If we rely only on AMM, there would be higher transaction fees, and impermanent losses, etc.) We call this hybrid system the FSP (Fluid Swith Protocol).
  * We have a more open D-ROME (decentralized ROME) real-time trading engine, through third-party trading robots, could bring more advanced trading capabilities to DEX. 


## Team PoutineX

### Team members

* Ken Zhang, CEO and founder
* Ralph Moreau, CTO
* Philippe Lahaie, Head of R&D

### Contact

* **Contact Name:** Ken Jian Zhang
* **Contact Email:** poutinex.trade@gmail.com
* **Website:** https://www.poutinex.org/

### Legal Structure

* **Registered Address:** 10639 rue Waverly Montréal (Québec) H3L2W5 Canada
* **Registered Legal Entity:** 9396-1183 Québec inc.

### Team's experience

Ken Zhang
* Holds a bachelor of pure mathematics from Université de Montréal. 
* A member of Canadian Securities Institute
* A member of Society of Actuaries
* Have spent over 15 years in the finance industry: securities, corporate finance, asset management and related compliance. 
* Previous work experience:
  * HSBC Securities (Canada) -- Business Dev assistant manager
  * CIBC Global Asset Management -- Compliance officer
  * UPS Logistics (Canada) -- Finance assistant director

Ralph Moreau
* Holds a bachelor of computer science from University of Quebec at Montreal
* More than 10 years of experience in IT 
* Currently works as an expert to improve web traffic for one of the most viewed websites (Alexa rank #72)

Phillipe Lahaie
* Self-taught programmer
* Holds a bachelor and a master degree from Université de Montréal, both are of mathematics 
* Currently works as a documentation specialist for Deloitte (Canada) 



Our team has created FWallet, a cutting-edge digital wallet (blockchain-based) project with a token named DC/EP and DID (Decentralized Identifiers) capability and a DApp browser.


### Team Code Repos

* https://github.com/jerichoECKOS/FWallet  

Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine.

* https://github.com/jerichoECKOS/FWallet  

### Team LinkedIn Profiles

* https://www.linkedin.com/in/ken-jian-c-zhang-77660b25/

* https://www.linkedin.com/in/ralph-moreau-a5997013a/


## Development Roadmap 


### Overview

* **Description:** Development of Project PoutineX  - MVP - Phase 1 (Milestone 1)
* **Total Estimated Duration:**  Four weeks
* **Full-Time Equivalent (FTE):**  3
* **Total Costs:** 0.65 BTC

### Milestone 1 — At this milestone stage, we will release version 1.0 of the testnet and invite users to conduct internal testing.
* **Estimated duration:** Four weeks
* **FTE:**  3
* **Costs:** 0.65 BTC

| Number | Deliverable | Specification |
| ----- | ----------- | ------------- |
| 1 | Official website launch | Publish a complete project official website, creating online communities |
| 2 | Publish white papers & technical documents | Publish a complete project white paper and launch technical specification documents |
| 3 | OrderBook module | Implement the Intelligent OrderMatching model and the OrderMatching robot |
| 4 | Contract management module | Implement Contract Management functions & leveraged smart contract function |
| 5 | IPFS storage and backup recovery module | Continuously interact with IPFS to store transaction snapshots, relying on IPFS to achieve rapid recovery |
| 6 | Internal testing | Internal testing by developers and related personnel, to ensure the validity of business logic, to discover potential user experience issues |  
| 7 | MVP online testing | Invite community users to participate in the MVP test, collect feedback, and prepare for further optimization |  


## Future Plans


* After a successful MVP testing, we will go for milestone 2 and further grants. 
* In the long run, we will promote ourselves through communities interaction, airdrop, etc. 


## Additional Information

**How did you hear about the Grants Program?** 
We have stumbled across the grant by browsing through the Web3 Foundation Website. 
