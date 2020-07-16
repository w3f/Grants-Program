#                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  Open Grant Proposal

* **Project:** Hybrid NFT

* **Proposer:** [KK](https://www.linkedin.com/in/kaikai-yang)

* **Payment Address:** 

  ​	BTC: 12q2NigsthG7YdxUBRbAaZPTHYj1xuEjCx



## Project Description :page_facing_up:

Dipole is an award-winning clean-tech company that brings blockchain technology into distributed energy resource management. Our aim is to provide service for the massive and fragmented distributed energy assets that will emerge in the near future, as well as facilitate the decarbonization of the energy system. 

Our EMS platform allows secure and reliable energy trading, where users can access a customized energy management module and trace their energy consumption in real-time. 

Working alongside the UN Environment Programme (UNEP), Dipole Tech already has been implementing regional energy allocation projects in communities in Manila and Bangkok, providing decentralized tools that allow customers to monitor, manage, and buy electricity in local markets.

**Hybrid NFT**

In reality, asset can be seen as portfolio. We put forward Hybrid NFT by combining the existing NFT solutions to better describe the condition of some complicated portfolios. We provide solutions to couple some exits NFT assets into a new hybrid NFT(namely NFT Set), and decouple a hybrid NFT into some low granularity NFT assets.

Hybrid NFT mainly includes three basic statistical structures:

![](https://github.com/DipoleTech/Hybrid-NFT/blob/master/img/nft.png)

- NFT: non-fungible Token 
- NFT Collection：same genre of NFTs
- NFT Set：different genres of NFTs

Hybrid  NFT combined [ERC721](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md)and[ERC1155](https://eips.ethereum.org/EIPS/eip-1155), and improved features as follows:

- [x] Bring DID in, achieve global unique ID, which friendly to cross chain assets;
- [x] Bring lifecycle field identification, which considered time and consume characters of real world assets ;
- [x] Abstract concept of Collection and Set, which based on multiple NFT combination of real world assets;
- [ ] Support cross chain transfer based on [XCMP](https://research.web3.foundation/en/latest/polkadot/XCMP.html)(Plan to do);

**Advantage**

- have capacity to better describe some complicated conditions of portfolios
- help clean energy organizations to quickly recognize the sole certificate issued to individual
- convenient to manage certificate trading
- boost the generalization of different kinds of NFT

- lower user’s cost of having and using different kinds of NFT

- lower the collision of setting prices in the progress of using NFT by combining the module of coverting estimated value of NFT in the future





## Team :busts_in_silhouette:

* **Members:** Richard, Jat, Mc Liu, gsxhnd
* **LinkedIn Profiles:** https://www.linkedin.com/company/dipoletech
* **Code Repos:** https://github.com/DipoleTech/Hybrid-NFT.git
* **Website:**	https://www.dipole.tech
* **Legal Structure:** Shanghai Fenwei Information Technology Co., Ltd.
* **Team's Experience:** 4 years of blockchain experience，3 years of golang experience


## Development Roadmap :nut_and_bolt:

* **Total Estimated Duration:** 6 weeks
* **Full-time equivalent (FTE):** 3
* **Total Costs:** 2.4 BTC 

### Milestone 

* **Estimated Duration:** 6 weeks
* **FTE:** 3
* **Costs:** 2.4 BTC 


| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 1. | Hybrid NFT | Including Hybrid NFT main parts:NFT, NFT Collection and NFT Set; Feature complete for traits, pallets and utilities;complete benchmarking, weight annotation, test coverage and code linting<br /> |
| 2.  | Backend Client | Backend client  example in the programming language nodejs, which shows how to use Hybrid NFT |
| 3.  | Documentation | Documentation, examples and tutorials will be provided for using Hybrid NFT |

**Hybrid NFT Features**





- LifeStage

  ```
   "LifeStage":{
          "name",
          "period"
      },
  ```

- NFT Collection

  ```
   "Collection":{
          "name",
          "symbol",
          "info_url",
          "total_supply",
          "life_stage",
          "issuer"
      },
  ```

- NFT Collection function
  ```
  	fn issue_collection() ;
  
  	fn get_collection() ;
  ```

  

- NFT

  ```
   "NFT":{
          "collection_id",
          "collection_index",
          "info_url",
          "owner",
          "price",
          "status",
          "approvers"
      },
  ```

- NFT function

  ```
  	fn mint_nft();
  
  	fn get_nft();
  
  	fn get_nft_by_index();
  
  	fn owned_collections();
  	
  	fn transfer_single_nft();
  
  	fn transfer_batch_nft();
  
  	fn approve_single_nft();
  
  	fn approve_batch_nft();
  
  	fn destroy_single_nft();
  
  	fn destroy_batch_nft();
  ```

  

- NFT Source

  ```
   "NFTSource":{
          "collection_id",
          "amount",
          "collection_indexs"
      }
  ```

  

- NFT Set

  ```
   "Set":{
          "name",
          "symbol",
          "info_url",
          "owner",
          "price",
          "nft_source_info",
          "status",
          "approvers"
      }
  ```

- NFT Set function

  ```
  	fn coupled_set();
  
  	fn get_set();
  
  	fn owned_sets();
  
  	fn decoupled_set();
  	
  	fn transfer_set();
  
  	fn destroy_set();
  
  	fn approve_set();
  
  	fn set_approval_for_all();
  ```

  

​       














## Additional Information :heavy_plus_sign:

* We're currently implementing a Substrate-based chain, which provides blockchain services for clean energy ecosystem, including energy-based oracle, energy traceability, distributed energy trading, Hybrid NFT,  etc. Hybrid NFT is a very important part of the ecosystem. 
* This project was born out of genuine needs from clean energy evolution based on blockchain. Our intention is to develop a clean energy ecosystem and accelerate the growth of Substrate and Polkadot community.
* Currently it's all coming out of Dipole's own development cost
* We were rewarded 2020 Asia Pacific Low Carbon Lifestyle Challenge Prize issued by the United Nations Environment Programme (UNEP)

## About Dipole
Dipole Tech is a Distributed Energy Resource aggregator, providing services for the massive amount of distributed energy assets that will emerge in the future and facilitating the decarbonization of the energy system. Dipole Tech develops an independent Substrate-based blockchain which records all stages within the industry and enables interoperability from DER assets. Learn more by visiting the Dipole Tech website  or following them on Twitter.

