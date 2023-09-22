# Evanesco Network

* **Team Name:** Evanesco Labs
* **Payment Address:** 15wQ831BoNnEMEVsfvF4mS5e94QL4RYGTc

## Project Overview :page_facing_up: 

### Overview

  * Evanesco is based on Polkadot ecology, committed to building the next generation of decentralized new privacy financial ecology protocol family in a fair and reliable way. Relying on the underlying secure privacy network, mainstream cross chain adaptation mechanism, powerful privacy transaction engine, it can build a more equitable ecology network of privacy finance.
  * The open, transparent and difficult-to-tamper characteristics of the block chain have accelerated the emergence of modern decentralized finance, but in some fields these characteristics are not suitable for the development of financial activities, such as transaction information of large encrypted currency. Whether it is in the cryptocurrency or the traditional financial field, it is very sensitive to the transfer of large-value assets. The transfer information of top Exchange`s address can even affect the market direction. For both parties, it is more hoped that the key transaction amount can be concealed. The privacy transaction process reduces the impact on the market. We belive that a complete decentralized financial network must has a privacy layer. Users are concerned about income risks and account transaction privacy the most in using any finance-related application. Especially when DeFi leads modern finance, the privacy layer, will be an item of standard configuration.
  * Evanesco's vision is to build the next generation of financial ecology in a fair and reliable way. Based on  **privacy network** and **privacy transaction** technology, it will be committed to breaking through the protocol stacks of public chains, private transaction and DeFi, breaking the liquidity boundary of encrypted assets, and building a robust DeFi operation platform. With the private P2P network, friendly and standardized trading interfaces will be provided for various encryption ecological access, and the privacy transaction liquidity be shared with Polkadot ecosystem, other public chains, exchanges, wallets, OTC, DAO and other encryption ecology.

### Project Details 

The three main features:

- Privacy Cascade Network
  The bottom layer of EVA runs on the privacy layered network, providing development and privacy communication services for the entire network routing layer. Through the construction of a hierarchical decentralized P2P network, EVA combines the open PoW mining network with the privacy trading network, fairly balancing fairness and privacy security.

- GPoW

  In order to provide a decentralized, more efficient and consistent consensus system for the entire financial ecology, EVA uses GPoW consensus algorithm to perform token mint and final consistency identification. GPoW consensus includes two layers of consensus mechanisms, which are nested, influence each other and play different roles. GPoW algorithm not only provides almost real-time, asynchronous and safe finality similar to GRANDPA algorithm, but also can fairly distribute new tokens according to PoW, enabling a wider range of communities to go in for the construction of the whole ecology.

- Privacy Transaction 

  Evanesco has implemented the balance hiding technology based on Balance account by constructing scope proof, and introduced zero knowledge proof technology into the intelligent contract system, which allows transactions between open accounts and private accounts, and transfer and audit between different accounts. Even if the network miners decrypt the encrypted network layer and view the transaction data Payload, the specific transaction information cannot be decrypted due to the private transaction agreement.

All the documents are opened in https://github.com/Evanesco-Labs/docs, the docs explain the  Evanesco Protocol and associated subsystem, and they will be updated continually.

Developer can try examples from https://github.com/Evanesco-Labs/xv-crypto/, more demos will be listed soon.

### Ecosystem Fit 

Problems such as insufficient liquidity, traceability of transactions and visibility of account book owners during decentralized transactions exist in most standard and non- fungible assets in the current encryption ecology. 

A complete decentralized financial network must has a privacy layer. Users are concerned about income risks and account transaction privacy the most in using any finance-related application. Especially when DeFi leads modern finance, the privacy layer, will be an item of standard configuration.

*Phala* Network is privacy preserving data protocol in web3, and it implement Intel-TEE to handle privacy compute. EVA is totally different, it implement the privacy network protocol to protect the user end  and  a zkp/bulletproof like algorithm to hide the private asset information. 

## Team :busts_in_silhouette:

### Team members

* Name of team leader: Kim Pfeiffer
* Names of team members David Pen, Lily Lin,Willam Wang

### Contact

* **Contact Name:** David Pen
* **Contact Email:** contact@evanesco.org
* https://evanesco.org/

### Legal Structure 

* EVANESCO FOUNDATION LTD, 3 Fraser Street #05-25 Duo Tower Singapore 189352.

### Team's experience

- Kim Pfeiffer:   Systems and Development for Yale University;Financial Software for Multiple Entrepreneurs; PCI Financials and Banking for York & Chapel 

- Willam Wang: Dev for combchain; Served as R&D director and CTO of listed companies such as LeEco and CreditEase; More than ten years of experience in technology research and development and management in large-scale Internet industries;Has rich experience in blockchain and Internet finance business.

- Lily Lin: Senior Visiting Scholar, St. John's University;  Doctor of Technical Economic Management;

  Manager of WPP Group; Technology and finance expert; Investment and financing management expert

- David Pen: Early Bitcoin mining evangelist; Co-founder of a large mining pool; Operating multiple mines in Sichuan and other places with hundreds of thousands of mining machines; Founder of a large community


### Team Code Repos

* https://github.com/Evanesco-Labs

### Team LinkedIn Profiles

* [Willam Wang](https://www.linkedin.com/in/%E6%87%BF-%E7%8E%8B-90590194/)

## Development Roadmap :nut_and_bolt: 

### Overview

* **Total Estimated Duration:** 3 months

* **Full-time equivalent (FTE):** 3

* **Total Costs:** 1 BTC

* In the first milestone, the features for the **private network protocol** will be implemented as a library named P2Private and integrated the API with substrate. After that the substrate node could be deployed like a Tor-network to surpport private communication.

  The **private network protocol** establishment steps are as follows:

  1.	The nodes will establish DHT databases of their adjacent points at the network layer according to the K-bucket algorithm, and set up internal data tunnel routes, which default to 3 hops, in which each node will form routes with other nodes;
  2.	After the client or  node packages the message, it locates the access point of data tunnel routing through DHT table and sends the transaction to the access point node;
  3.	Each data tunnel is established as per TOR protocol.
  4.	The tunnel has a re-planning time. If the planning time arrives and data is being transmitted, the tunnel will be re-planned after a period of delay.

* In the second milestone, we will create a client to communicate with each other based on the testnet setup in the first milestone.

  

  The following components will be included:

  - Sbstrate Node with P2Private API
  - A Message Client
  - The P2Private library and  SDK
  - Tutorial documentation
  - All code written in Rust

### Milestone 1 —  private network node based on substrate

* **Estimated Duration:** 3 months
* **Full-time Equivalent (FTE):** 2
* **Costs:** 0.7 BTC 

| Number | Deliverable          | Specification                                                |
| ------ | -------------------- | ------------------------------------------------------------ |
| 0a.    | License              | Apache 2.0                                                   |
| 0b.    | Documentation        | We will provide both inline documentation of the code and a basic tutorial that explains how a user can running substrate to support private netowork service |
| 0c.	   | Testing Guide	       | The code will have unit-test coverage (min. 70%) to ensure functionality and robustness. In the guide we will describe how to run these tests |
| 0d.	   | Article/Tutorial	    | We will write an article or tutorial that explains the work done as part of the grant. |
| 1.     | P2Private-rust Repo  | We will create a new lib named P2Private written  in rust which can implement the private protocol |
| 2.     | private service node | the substrate node integrate with P2Private-rust module and perform as a Tor-like network |
| 3.     | Test-Net             | A Test-net could be tested by limited users would deployed.  |

### Milestone 2 —  private client based on the P2Private

* **Estimated Duration:** 3 months
* **Full-time Equivalent (FTE):** 1
* **Costs:** 0.3 BTC 

| Number | Deliverable    | Specification                                                |
| ------ | -------------- | ------------------------------------------------------------ |
| 0a.    | License        | Unlicense                                                    |
| 0b.    | Documentation  | The documentation will be provided to show how to integrate the P2Private function in client|
| 0c.	   | Testing Guide	 | The code will have unit-test coverage (min. 70%) to ensure functionality and robustness. In the guide we will describe how to run these tests |
| 0d.	   | Article/Tutorial	    | We will write an article or tutorial that explains the work done as part of the grant. |
| 1.     | P2Private-cli  | It would implemented in  rust. We will create a client to communicate with each other based on the private substrate network |

## Future Plans

After complete the network protocol and privacy transaction,  EVA will 

- start POW miner design and deployment
- Cross-chain cooperation with other project
- start nft privacy and MPC framework development

## Additional Information :heavy_plus_sign: 

* Now we haven`t apply for other grants except for an ongoing general grant which contain the privacy algorithm protocol prototype and miner development .



