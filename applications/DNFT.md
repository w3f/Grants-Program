# Open Grant Proposal

* **Project:**  DNFT Protocol
* **Proposer:** [DNFT](https://github.com/DNFT-Team)
* **Payment Address:**  1Atc7JjqeSw1PwxCsSr8KPHEKDoRfh5ERF

## Project Overview :page_facing_up:

As we all know, transaction fees is very high in Ethereum-based blockchains or apps, which limits particularly frequent actions. In polkadot system, for the consideration of redundant data on the chain, there is a very ingenious account system to collect useless account.

With the development of blockchain ecology and application, due to large amount of data generation, use and dissemination in the reality, and most of us care less of the owner of the data.

Now, it's time to limit/collect junk data on the blockchain. DNFT is developing an independent Substrate-based blockchain, which will help improving the right confirmation, circulation and privacy protection of data.

### Overview

DNFT includes five key components: DataNFT, DataStorageWithTax, DataSwap, DAO Governance and AI-Kit. The whole system provides the generation, storage, exchange, sharing, dissemination of data. Through the data ETL and data label annotations, we're creating a data framework between personal data and AI models.

### Project Details

#### Architecture

![img](https://github.com/DNFT-Team/dnft-substrate-node/blob/master/img/architecture.png) 

**DataNFT**

NFT is a good way to describe data info, through the NFT, it's easy to make the securitization of data and assets. DNFT adopts ERC721 & ERC1155 protocol.

**DataStorageWithTax**

Unlike one time charge when storing, storage tax will be continuous charged when holding NFT assets.When NFT holders have not charged tax in time, NFT will be collected and to be auctioned. Anyone who wins the auction, will continue to pay the tax.

**DataSwap**

It is an exchange that provides conversion of different synthetic assets and data.

**DAO Governance**

When NFT under unpaid tax are into the collection pool, the DAO will be responsible for the auction, the auction price will be used to DAO Governance, and NFT with failed auction will be burned.

**AI-Kit**

Through the data ETL and data label annotations, we're creating a data framework between personal data and AI models. We will create an AI-friendly mechanism for NFT generation.

## Team :busts_in_silhouette:

### Team Members

* Haiping - Project Lead
* Bleemer - Blockchain Developer
* ZhiXiao - Full-stack Developer
* WangFang - UI & UX



### **Contact**

 **Contact Name:** Haiping
 
 **Contact Email:** lin_haiping@foxmail.com

### Legal Structure

No Legal Entity

### Team Experience

**Haiping**

- Over 8 years of experiences in Development and Management 
- Former Senior Project Manager in Shangtang Technology

**Bleemer**

- Over 3 years of experiences in Blockchain Development

**ZhiXiao**

- Full-stack Developer
- Over 5 years of experiences in PHP,Golang, Vue, JS
- Former Full-stack Developer in Meituan
- Former Full-stack Developer in Alibaba

### Team Code Repos

* DNFT Team: https://github.com/DNFT-Team

## Development Roadmap :nut_and_bolt:

### Overview

* **Total Estimated Duration:** 2 months
* **Full-time equivalent (FTE):** 2
* **Total Costs:** 0.3 BTC


#### Milestone 1 — Implement Substrate Modules and DNFT Chain

* **Estimated Duration:** 2 months
* **Full-time Equivalent (FTE)**: 2
* **Costs:** 0.3 BTC 

| **Number** | **Deliverable** | **Specification**                                            |
| ---------- | --------------- | ------------------------------------------------------------ |
| 0a.        | License         | Apache License 2.0                                           |
| 0b.        | Documentation   | Documents containing the description of whole architecture design for DNFT, an introduce video and a mockup will also been shown  |
| 0c.        | Testing Guide   | We will provide a full test suite and guide for DNFT.And the code will have unit-test coverage (min. 70%) to ensure functionality and robustness.  |
| 0d. | Article/Tutorial | We will write an article or tutorial that explains the work done as part of the grant. 
| 1a.        | Node Repo       | Complete the deployment of the basic public chain            |
| 2a.        | Pallet_nft      | Complete the development of pallet_nft, realize the ERC1155 standard and integrate existing ERC721 standard(eg. https://github.com/danforbes/pallet-nft)|
| 2b.        | Pallet_tax      | Complete the development of pallet_tax and realize the storage tax and collection mechanism |
| 2c.        | Pallet_swap     | Complete the development of pallet_swap and realize the NFT swap mechanism |
| 2d.        | Pallet_dao      | Complete the development of pallet_dao and realize the governance mechanism |
| 3.         | Front End       | Complete the development of the basic interactive page in vue，and the interface will be available in chinese as well as english |
| 4.         | Docker Image    | We will provide a dockerfile to demonstrate the full functionality of our chain |

## Future Plans
* We will improve storage mechanism. 
* We will integrate Cross-chain mechanism, we're ready to become a parachain of Polkadot. 
* We will integrate EVM module into DNFT Chain to support Ethereum System.
* We will implement more type of auctions like lottery auction, social verified auction, etc.



### **Additional Information**

Our project, [the MVP demo](https://hackerlink.io/buidl/53) has won the Second Prize in [Substrate hackathon](https://twitter.com/DoraHacks/status/1339926282797105152) hosted by [DoraHacks](https://twitter.com/DoraHacks) in Hangzhou,China on December 20, 2020, which attracted a lot of [media attention](https://www.8btc.com/article/6578701) in China.

In the [current implementation](https://github.com/DNFT-Team/dnft-substrate-node/tree/master/pallets/nft), we did a Simple implementation, including NFT generation, NFT trade, NFT owner tax & collection in a fixed blocknumber. Most of them were just a fast & simple implementation for the  [Substrate hackathon](https://twitter.com/DoraHacks/status/1339926282797105152).

As methioned in Milestone 1, we will complete and expand the original intention,
1.pallet_nft, we will realize the ERC1155 standard and integrate existing ERC721 standard, rather than a simple generation.
2.Pallet_tax, we will set a customized tax-set stanard towards different NFT colletcions, rather than a simple All-The-Same solution.
3.Pallet_swap, we will add auction, dex, rather than a simple transfer.
4.Pallet_dao, we will add a governance mechanism to lanch proposals.

