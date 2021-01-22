# Open Grant Proposal

* **Project Name:** Finvert
* **Proposer:** Geoffrey Ding
* **Payment Address:** BTC：1FRuWdPz6aSbFfSjPsNj9nwrSvP8w8WNBY; Ethereum (DAI) ：0x2a6d204e3236f8a8bc23088a10e3af597f4e13de

## Project Overview :page_facing_up: 

### Overview

### Project Description
* The ultimate vision of DEFI would be the parallel world of traditional finance. But we are still in primary stage that lacks of many financial product, espically Bond, as the largest financial bill assets, may even become the largest asset class in DEFI in the future. 
* Finvert aims to create a new system of bond assets services using Programmable Token Tech (NFT), cross-chain asset synthesis, and yield curve based Automatic trading for expanding the DEFI world, realizing includes the diversified infrastructure from the creation, trading and derivative services of convertible bonds.

### Ecosystem Fit 
* To the best of our knowledge, finvert is the First project focus on Bond Products (Convertible Bond) in DEFI world, combining the NFT and DEFI concept and technology.
* The bonds is a brand new market. When its secondary market is mature, the bond price could affect the value of the underlying mortgage assets eventually.
* Who will be the Bond maker: Exhange, investment insititution, blockchain project teams and individuals. Exchange could issue and sale "subordinated bond" which combine BTC/ETH with low liqudity assets; Investment institution could issue their locked tokens as the bond and sale to the markert before unlocked, accelerating their capital flow and promoting fund utilization rate; The mature Blockchain Project could issue bond to bring the second chance for financing, without any influence to their Token price; Finvert offer the whole bond service for individuals.

## Team :busts_in_silhouette:

### Team members
*  Our team has one full-time developer which is experienced in smart contract development, and several part-time developers. Excepted these, we also has one for financial product desgin and one for marketing. Their information can be provided in private.

### Contact
* **Contact Name:** Geoffrey Ding
* **Contact Email:** finvert@hotmail.com
 
### Website 
* https://finvert.vercel.app/zh

### Team's experience
* The team is experienced in blockchain and finance. Our core developer is the primary  

### Team Code Repos
* Smart contracts: https://github.com/finvert/finvert-contract
* Documentation: https://github.com/finvert/finvert-doc
* Runtime in Substrate: https://github.com/finvert/finvert-runtime
* Web-UI: https://github.com/finvert/finvert-web
* SDK: https://github.com/finvert/finvert-sdk
* API: https://github.com/finvert/finvert-api


## Development Roadmap :nut_and_bolt: 

### Overview
* **Total Estimated Duration:** 5 months
* **Full-time equivalent (FTE):**  2.8 FTE
* **Total Costs:** 0.9BTC(equivalent to $28,000)

### Milestone 1 create Cross-chain NFT-factory (for casting Bonds) in both ecosystems 
* **Estimated Duration:** February-March 2021 (2 Months)
* **FTE:**  1
* **Costs:** 0.35 BTC

* **Task:**
  * NFT Casting smart contracts
      * Build the smart contracts to cast NFT tokens (Bonds) using existing NFT pallet and Oracle pallet in Polkadot.
      * Allows users to create diversified bond crypto assets which could synthesise cross-chain assets in different parachains. 
  * Assets Custody smart contracts
      * Build the specific smart contracts to deposit FT and NFT tokens as mortgage.
      * Allows users to deposit any type of assets in different parachains and make sure the security.
      
* **Test:**
  * Deploy the solidity contract to Substrate public testnet and write test to demonstrate the casting of NFT tokens (Bonds) . 
  * Deploy the solidity contract to Substrate public testnet and write test to test and demonstrate the security level of custody smart contracts.
  
* **Documentation:**
  * Document in detail about casting NFT tokens (Bonds) and custody smart contracts.
  * A demo will be added to show that users could deposit their assets in different parachains safely.

### Milestone 2 create convertible bonds pricing and trading system in Polkdot ecosystems 
* **Estimated Duration:** April-May 2021 (2 Months)
* **FTE:**  1
* **Costs:** 0.35 BTC

* **Task:**
  * Mainstream auction templates smart contract 
      * The English auction, the Dutch auction and the sealed first and second auctions smart contract will be created, helping Bond Makers to list and price their bonds and investors buy them in a right price.
  * Intital Convertible bond offering
      * Continuing to run the auction of convertible bonds to stimulate market trading enthusiasm, we will desgin a platform to list any Intial Convertible bonds.
  * Automated market maker (AMM) trading mechanism of NFT
      * AMM trading system have not been used in NFT trading, we could bring this technology to DEFI world.
      * Build a easy way to help users create liqudity assets custody smart contracts, being the bridge of other swap-network.   
      
* **Test:**
  * Deploy the solidity contract to Substrate public testnet and write test to demonstrate the four auction smart contract.
  * Deploy the exhibition platform to Substrate public testnet and write test to demonstrate the security and usability.
  * Deploy the contract to Substrate public testnet and write test to make it successful to connect to other swap-network. 
  
* **Documentation:**
  * Document in detail about four auction smart contract, exhibition platform and liqudity assets custody smart contracts.
  * The demo of auction function, exhibition plaform and the AMM bridge. 


### Milestone 3 create convertible bonds pricing and trading system in Polkdot ecosystems 
* **Estimated Duration:** June 2021 (1 Months)
* **FTE:**  0.8
* **Costs:** 0.2 BTC

* **Task:**
  * Web UI: user should be able to cast, trade, transfer and list their bonds through the website on specified network. 
  * SDK: in order to facilitate the third-party integration, SDK will be built to allow developers to easily invoke APIs to cast, trade, transfer and list bonds in their own applications.  
      
* **Test:**
  * Run end-to-end test on Web to demonstrate the casting, trading, transfering and listing their bonds.
  * Build a test project to integrate SDK and verify its functionality
  
* **Documentation:**
  * Add “get-started” tutorial to show end-to-end process of casting and trading bonds with Web UI across network. 
  * Create document of all externally callable APIs. 
  * Create a sample project to demonstrate the way to integrate SDK


## Future Plans
* Except we have stated above, our team would like to make continuous contributions to Substrate and Polkadot DEFI ecosystem. Our future plans are as follow:
  * Expand the scope of Synthesis assets using cross-chain technology. 
  * Establish effective Credit assessment mechanism and Margin system for Bond Makers, including investment insititutions, project teams and individuals.
  * Building the infrastructure and maturing the branding new Bond secondary market which would impact DEFI profoundly

## Additional Information :heavy_plus_sign: 

* Why Bonds product is is important to DEFI world？
   * Bonds product would be a better way to solve Financial Liquidity and Token utilization efficiency.
   * Due to the limitations of existing technology and business model, the bond tools and market construction has not been carried out in DEFI world. Finvert is build to filling the gap of the polkadot and DEFI area.

* Why choose Convertible bonds as the first financial product in bonds filed? What the intrinsic value does it have?
   * Most of bonds in traditional financial market are “credit” such as national debt or enterprise bond, but we don’t have effective “credit system” in DEFI world nowadays. Therefore, based on technical and market considerations, we think that Convertible bonds will be recognized first by users. 
   * Convertible bonds is a "defensive" investment product that can be considered a "bond + call option" portfolio. Lower mortgage interest rates and higher potential returns for investors. 
   * Using Convertible bonds, debt and asstes can be linked to create a new decentralized financial derivative to enrich the investment ecology, meanwhile to increase cross-chain assets liquidity.

* What is the challenge to build the Convertible Bonds product?
   * Creating branding new AMMtrading system for NFTs.
   * Products popularization of Convertible Bonds.

* What work has been done so far?
  * We have done for product design and primary development work.
  
* Are there are any teams who have already contributed (financially) to the project?
  * No

* Have you applied for other grants so far?
  * No
