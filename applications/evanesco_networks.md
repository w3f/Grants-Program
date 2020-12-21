# Open Grant Proposal

* **Project Name:** Evanesco Network
* **Team Name:** Evanesco Labs
* **Payment Address:** 15wQ831BoNnEMEVsfvF4mS5e94QL4RYGTc

## Project Overview :page_facing_up: 
### Overview

  * Evanesco is based on Polkadot ecology, committed to building the next generation of decentralized new privacy financial ecology protocol family in a fair and reliable way. Relying on the underlying secure privacy network, mainstream cross chain adaptation mechanism, powerful privacy transaction engine, it can build a more equitable ecology network of privacy finance.
  * The open, transparent and difficult-to-tamper characteristics of the block chain have accelerated the emergence of modern decentralized finance, but in some fields these characteristics are not suitable for the development of financial activities, such as transaction information of large encrypted currency. Whether it is in the cryptocurrency or the traditional financial field, it is very sensitive to the transfer of large-value assets. The transfer information of top Exchange`s address can even affect the market direction. For both parties, it is more hoped that the key transaction amount can be concealed. The privacy transaction process reduces the impact on the market. We belive that a complete decentralized financial network must has a privacy layer. Users are concerned about income risks and account transaction privacy the most in using any finance-related application. Especially when DeFi leads modern finance, the privacy layer, will be an item of standard configuration.

### Project Details 

All the documents are opened in https://github.com/Evanesco-Labs/docs, the docs explain the  Evanesco Protocol and associated subsystem, and they will be updated continually.

Developer can try examples from https://github.com/Evanesco-Labs/xv-crypto/, more demos will be listed soon.

### Ecosystem Fit 
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
* Zhejiang Ruishi Technology Co., Ltd; Room 401, building 3, xixixin building, Xihu District, Hangzhou City, Zhejiang Province

### Team's experience
- Systems and Development for Yale University 
- Financial Software for Multiple Entrepreneurs 
- PCI Financials and Banking for York & Chapel 
- Dev for combchain

### Team Code Repos
* https://github.com/Evanesco-Labs

### Team LinkedIn Profiles
* [Willam Wang](https://www.linkedin.com/in/%E6%87%BF-%E7%8E%8B-90590194/)

## Development Roadmap :nut_and_bolt: 

### Overview

* **Total Estimated Duration:** 3 months
* **Full-time equivalent (FTE):** 3
* **Total Costs:** 1 BTC

### Milestone 1 —  private network node with substrate

* **Estimated Duration:** 3 months
* **Full-time Equivalent (FTE):** 2
* **Costs:** 0.7 BTC 
* In the first milestone, the features for the private network protocol will be implemented and integrated with substrate
* more design information about the network protocol is on p9-p11 in the [whitepaper](https://evanesco.org/whitepaper.pdf).

| Number | Deliverable          | Specification                                                |
| ------ | -------------------- | ------------------------------------------------------------ |
| 0a.    | License              | Apache 2.0                                                   |
| 0b.    | Documentation        | We will provide both inline documentation of the code and a basic tutorial that explains how a user can running substrate to support private netowork service |
| 1.     | Libpp2p-rust Repo    | We will create a new p2p lib named Libpp2p written  in rust which can implement the private protocol |
| 2.     | private service node | the substrate node integrate with Libpp2p-rust module and perform as a Tor-like network |
| 3.     | Test-Net             | A Test-net could be tested by limited users would deployed.  |

### Milestone 2 —  private client based on the substrate node

* **Estimated Duration:** 3 months
* **Full-time Equivalent (FTE):** 1
* **Costs:** 0.3 BTC 

| Number | Deliverable    | Specification                                                |
| ------ | -------------- | ------------------------------------------------------------ |
| 0a.    | License        | Unlicense                                                    |
| 0b.    | Testing Guiden | The documentation will be provided to show the how to use the client |
| 1.     | pp2p-cli       | We will create a client to communicate with each other based on the private substrate network |

## Future Plans

After complete the network protocol and privacy transaction,  EVA will 

- start POW miner design and deployment
- Cross-chain cooperation with other project
- start nft privacy and MPC framework development

## Additional Information :heavy_plus_sign: 
* Now we haven`t apply for other grants except for a general grant which contain the privacy algorithm protocol prototype and miner .

