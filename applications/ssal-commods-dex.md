# Ssal: Ink Commodities Exchange
- **Team Name:** Mansa Capital
- **Product Name:** Ssal
- **Payment Address:** 15JQDAHWTbWju9RWQfP7EQvNV9skCvm5xh69Mb5J5YMxY8Hm (USDT)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 1

## Project Overview :page_facing_up:

Ssal, a blockchain-based commodities exchange, is a new version of our product called Riso, which we are now adapting to run in the Polkadot ecosystem using smart contracts. Since Riso will be mentioned frequently throughout the document, it is important to keep in mind that Ssal is a smart contract based, Substrate-specific version of Riso: Riso is a precursor to Ssal. 

### Overview

Ssal is a blockchain-based commodities exchange platform which leverages the power of distributed ledger technology to address the challenge of transparency and trust in commodity trading while also lowering the barrier to entry for producers and consumers to enter the market. The platform will target burgeoning markets that do not have the advantage of a commodities exchange to hedge crop prices and/or cannot trade at the volumes which traditional exchanges require. 

We built the original version of this project, Riso, on Substrate, but realized that architecting a fully fledged parachain goes out of scope for the purposes of our application. Our team is looking for a grant to build Ssal using smart contracts running on Substrate-based chains. We believe that the technology is ready to be applied to a practical, real-world application. In short, we would like to provide the ecosystem with a user-facing, commercial product, and hopefully, by documenting our process, we can inspire others to do the same.

Our team is driven by a common goal to bring more equitable and efficient financial services to the economies that need them most. We have varied professional experience in blockchain development, financial technologies, and hotel management. Our unifying factor is a strong academic background studying mathematics, data science, and computer science. We have strong ties to the region of West Africa, and a vested interest in its success and the success of web3 technologies as a whole. For us, this project is a perfect marriage between our moral ambition with our technical skills. 

### Project Details
#### Mockups/designs of any UI components
The following mockups were designed with an AMM in mind. Ssal will be implemented as a mobile app, initially with no AMM features. This means that the marketplace will consist of an organized collection of specific contracts. 
[Check out our repo!](https://github.com/AlejandroSoumah/riso-front-end)
##### Home Page 1
![dmp](https://github.com/MatteoPerona/riso-concept-files/blob/main/riso-frontend-ss01.png)
##### Home Page 2
![dmp](https://github.com/MatteoPerona/riso-concept-files/blob/main/riso-frontend-ss02.png)
##### Home Page 3
![dmp](https://github.com/MatteoPerona/riso-concept-files/blob/main/riso-frontend-ss03.png)
##### Marketplace
![dmp](https://github.com/MatteoPerona/riso-concept-files/blob/main/riso-frontend-ss04.png)
##### Purchase Contract
![dmp](https://github.com/MatteoPerona/riso-concept-files/blob/main/riso-frontend-ss05.png)
This page allows one to add a contract to their cart. It assumes that there is an enderlying AMM which is why one can purchase a broad category of rice at a fixed price rather than sifting through individual contracts. 

#### An overview of the technology stack to be used
Frontend: React JS  
Backend: MongoDB  
Blockchain: Ink!, Rust

#### Documentation of core components, protocols, architecture, etc. to be deployed

**Note: Everything prior to section 2, Transaction Model, is expository and non-technical. Skip to section 2 if you want to only read technical sections.**

**1.1 A Brief Overview of Commodity Exchanges**
A commodity exchange is a marketplace where various agricultural products, precious metals, energies, and other raw materials are traded. These exchanges provide a centralized platform for market participants to buy and sell products while hedging their losses, using standardized contracts, such as options and futures.
Standardized contracts specify the quantity, quality, and delivery terms of the underlying commodities. These contracts are traded through open-outcry or electronic trading, with prices determined by supply and demand.
In addition to providing a platform for trading, commodity exchanges also offer services such as price information, storage facilities, and delivery services. They play a crucial role in the global economy by providing a transparent and efficient market for the exchange of commodities, enabling producers, consumers, and investors to manage their exposure to commodity price fluctuations.

The current commodity trading system lacks transparency which often leads to disputes and inefficiencies in the market. Additionally, the existing system involves several intermediaries such as brokers, clearinghouses, and banks, leading to higher transaction costs and longer settlement times. 

**1.2 A New Model**
Ssal aims to be a fully decentralized, global commodities exchange leveraging blockchain technology to guarantee transparency, data availability, and transaction finality. To understand why Ssal is an improvement over the status quo, one must compare its offerings to the advantages which traditional exchanges provide:

1. Price transparency: Commodity exchanges provide real-time price information on traded commodities, allowing market participants to make informed decisions about buying and selling. However, existing exchanges maintain data ownership. Their order books are locked behind paywalls, and buyers are forced to trust that the exchange is reporting accurate prices. Conversely, Ssal data is transparent and available by nature since its blockchain will necessarily store the entire market history in a publicly accessible format. Additionally, clients do not need to trust the exchange itself, they need only trust the mathematics which govern its functions. Modern exchanges are intermediaries, they own their client’s trades. Ssal provides an upgradeable framework for the free market to govern its own transactions.

2. Price discovery: The exchange provides a platform for buyers and sellers to come together and determine the market-clearing price of the commodity based on supply and demand. Where Ssal improves on this model is by removing trading minimums. Restrictively high minimums, in turn, restrict true price discovery, not to mention, make it impossible for small-scale, local trade to experience the benefits of commodity hedging. Ssal would provide a platform which allows for more complex market interactions where several market niches can form around a single product. Geographically localized markets with relatively small transactions could form economic sub-groups which distinguish themselves from the macro trends which, by and large, govern the social perception of a given commodity. 

3. Risk management: Commodity exchanges offer standardized futures and options contracts, which allow market participants to manage their price risk exposure and hedge against unfavorable price movements. Ssal proposes a less restrictive transactional model which allows for broader financial expression. Instead of restricting contracts to futures and options Ssal defines a contract as a set of upgradeable parameters which can be tuned to the producer’s financial needs (covered in section 3). This open ended financial model allows for a more thorough hedging process which better serves buyers and sellers’ needs. 

4. Liquidity: The exchange provides a central marketplace for trading, which enhances liquidity and reduces transaction costs, making it easier for buyers and sellers to find counterparties to trade with. Ssal takes this a step further by removing intermediaries and minimums driving liquidity further up and transaction costs down. 

5. Quality assurance: Commodity exchanges ensure that the commodities traded meet certain quality standards, which reduces the risk of default and ensures that buyers receive the expected quality of the commodity. This model, functional as it may be, is restrictive. Products must all flow through the same center before they can be shipped off to their final destinations. This is both inefficient and stifling for smaller, localized economies. Ssal proposes a solution in which local businesses which specialize in quality assurance become partners. This allows for trade to happen any time from anywhere, reducing transportation costs. It also stimulates local economies and helps local supply chains grow. 

6. Storage and delivery: Commodity exchanges offer storage facilities and delivery services, which enable market participants to take physical delivery of the commodity if required. Riso takes a different approach: the best commodity exchange will never be the best transportation company or storage facility, because they are different products which face very different sets of challenges. Instead, much like the quality assurance issue, Ssal connects its clients with local transportation companies, which can much better serve their communities. This, in turn, supports small businesses in the underlying economy. 

By lowering barriers to entry, Ssal can bring the benefits of commodities trading to untapped markets; it can bring improvements to existing markets; and can promote a more equitable and globalized economy.

Ssal offers a promising solution to the challenges facing the current commodity trading system. The platform will improve transparency, reduce transaction costs, and enhance trust in the market. By eliminating intermediaries, the platform will enable buyers and sellers to transact directly, leading to faster settlements and improved efficiency. 

Our mission with Ssal is to create a better logistic-financial layer which will help economies retain the profit they generate and flourish. 

**1.3 Design Philosophy**
Ssal is intended to be the best global framework for trading commodities. For a novel product to become the best at what it does it needs to specialize in accordance with a clear vision and offload as much unrelated labor as possible. This is why Ssal will be built such that it only fulfills its core functions, but makes it easy for users to plug in other specialized products to fill in the gaps. By serving only its core functions and leaving the rest to other specialized teams Ssal creates a platform for other companies to thrive. It would allow each component of the ecosystem to perform its function to the best of its ability. Ssal will never be the best storage facility, it will never be the best messaging app, but Ssal will make it easy for buyers and sellers to connect themselves with the solutions that are going to best serve their needs. Ssal serves to transact and record transaction history while allowing communication channels, delivery services, and legal systems to perform at their best where necessary.

**2 Transaction Model**
The central problem for a decentralized commodities exchange is making sure that physical products reliably change hands. Ssal's proposed solution is called the open-lockup model.

The open-lockup model is a method for designing standardized commodity contracts which lets the seller designate custom functionality for their contracts while protecting buyers’ funds from fraudulent transactions. It works by delineating a set of upgradeable contract presets:
1. Cost of purchasing the contract.
2. The price per unit of volume for the commodity. 
3. The volume of product to be traded.
4. Choosing to give the right to purchase or the obligation to purchase a chosen volume of product. 
5. The finality date for the contract. The date by which a physical product legally changes hands (note that this does not mean that the physical product was transported, it simply means that on-chain records will indicate a change in ownership of the supposed product). 
6. Designating which party (the buyer or the seller) is responsible for transportation and its related costs.

This open model allows for markets which better serve the niche requirements of commodity producers and purchasers. It creates an upgradeable set of conventions which allow the market to optimize itself.
The lockup model adds a layer of security for buyers. It freezes the buyer's funds until a contract’s finality date, at which point, the buyer will either verify that the physical product exists, is of good quality, and is changing hands, or they deny the quality/existence of the physical product and their funds are returned. For all transactions, complete or incomplete, there is an on-chain record of the transaction, so either party can use such information to take legal action against the other if they feel compelled to do so. A blockchain provides the ideal paper-trail to build a solid case and would disincentivize fraudulent activity. 

The open-lockup model provides an open-ended model for creating commodity contracts which can act as options, futures, spot deals, and any permutation of the three. It also provides an economic model which disincentivizes fraudulent actors from misappropriating the product. 

In future iterations of this project, we intend on adding a governance system so that transaction participants can call a trial when they have a dispute. The trial would use a random sample of jurors presented with each participant's case to decide whether the locked funds should be sent back to the buyer or transferred to the seller.  

**3 Implementation**
Ssal will start as a very simple application utilizing three core functions:
1. Create contract: a producer lists a contract they want to sell. In storage this is represented by a struct containing an index for the contract, the price of the contract itself, the price per unit of product being sold, the seller’s account id, the buyer’s account id (initialized with a default value), and the finality date of the contract (stored as a block number). Each contract struct is written to a storage map for quick access later. 
2. Purchase contract: the buyer’s account id is written to the respective contract struct and the amount of funds designated by the price of the contract are transferred from the buyer to the seller.  
3. Finalize contract: on the finality date (finality block) the buyer's funds are locked up in an intermediary account. Once the buyer confirms that they have received their product those funds are transferred from the intermediary to the seller. 

In future iterations, decentralized governance features will be added to handle commercial disputes. A system will be implemented where registered parties will vote in a series of trials to determine whether the funds locked in the intermediary will be transferred back to the seller or the buyer’s account. Additionally, we will add a framework for creating customizable AMMs. Each AMM will subscribe to one contract standard and a body of trusted quality assurance companies backing the given AMM. This system would improve transaction throughput and allow for a more seamless user experience on the frontend.


#### PoC/MVP or other relevant prior work or research on the topic
We used a blockchain startup competition held by [Franklin Templeton](https://www.franklintempleton.com/) to prove out our initial concept, Riso. Below we have attached github links containing relevant code and files we produced in the first iteration of this project, Riso. 

Mock frontend https://github.com/AlejandroSoumah/riso-front-end  
Concept substrate chain https://github.com/MatteoPerona/Riso  
Relevant files https://github.com/MatteoPerona/riso-concept-files


#### What your project is _not_ or will _not_ provide or implement
Our project is not and does not intend to be a parachain/developer ecosystem. It is an end-user application.

### Ecosystem Fit
#### Where and how does your project fit into the ecosystem?
The W3F has expressed an interest in funding projects which would expand the use case for ink Smart Contracts. Ssal would introduce a novel set of smart contracts geared towards commodities trading which could be repurposed to fill a wide range of commercial niches. 

#### Who is your target audience (parachain/dapp/wallet/UI developers, designers, your own user base, some dapp's userbase, yourself)?
Our target audience is, first and foremost, our own user base. Our goal is to bring the most cutting edge financial tools to agricultural supply chains in West Africa. That being said, Ssal's source code would be open source, and we strive to build technologies that can inspire other developers to expand on what we've created for the world of decentralized commerce. 


#### What need(s) does your project meet?
By lowering barriers to entry, Riso can bring the benefits of commodities trading to untapped markets; it can bring improvements to existing markets; and can promote a more equitable and globalized economy.
Riso offers a promising solution to the challenges facing the current commodity trading system. The platform will improve transparency, reduce transaction costs, and enhance trust in the market. By eliminating intermediaries, the platform will enable buyers and sellers to transact directly, leading to faster settlements and improved efficiency. 
Our mission with Riso is to create a better logistic-financial layer which will help economies retain the profit they generate and flourish.


#### Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?
The main other project in the ecosystem tackling commodities is Watr. That being said, this project has wildly different goals and implications for the ecosystem. They are focused on building a, "blockchain platform that is open to everyone who wants to build". They take a birds eye view when tackling decentralized commodities, while Ssal focuses on one specific problem in one specific sector. The nature of both projects is in fact symbiotic since the smart contracts developed for Ssal may be deployed to Watr which would further their ambitions. 

## Team :busts_in_silhouette:
### Team members
- Matteo Perona (PBA1 Alum, Fullstack Dev @ Parachains Development Inc., BS Data Science UCSD)
  - Ssal: Leads development of core technology
  - Graduated from the first wave of the Polkadot Blockchain Academy
  - Has been working in the ecosystem ever since with Parachains Development Inc.
    - Projects: FlowStream (previously Sumi), Mission Control
  - Specialties: Cryptography, SWE, Data Science/Engineering
- Alejandro Soumah (Quant @ Goldman Sachs, BA Math & CS UCSD)
  - Ssal: Manages correspondence and implementation of technology
  - Worked as a Quantitative Analyst at Goldman Sachs 
  - Specialties: Financial Systems, SWE, Stochastic Processes
- Taerim Choi (HR Coordinator @ Hyatt Regency, Lead Web Dev @ DP Circle, BA Math & CS UCSD)
  - Ssal: Handles UI/UX and operational logistics
  - Lead Web Development at a startup called DP Circle
  - Worked as an HR Coordinator at Hyatt Regency in Seattle 
  - Specialties: Operations Logic, SWE, Legal

### Contact
- **Contact Name:** Matteo Perona
- **Contact Email:** matteroperona@mansacaptital.us
- **Website:** https://mansacapital.us/

### Legal Structure
- **Registered Address:** 2514 Highland Ave, Altadena, CA, 91001
- **Registered Legal Entity:** Mansa Capital LLC

### Team's experience
As was mentioned before, our team has individual experience in blockchain development, fintech, and corporate management. That being said, we also have plenty of experience working together on the non-profit we founded called [COMPASS](http://www.compassinstitution.com/).

At our non profit, we carry out mathematics/computer science projects geared towards social good. 

In one of our projects, we built a clustering algorithm which takes yelp reviews for a given business as input and creates clusters which relevantly partition semantic patterns in the sample space. We will eventually use our model to survey the homeless population of San Diego and cluster their responses to our questions in order to better understand the general trends within the entire population. We will present our findings to the city government by the end of the year and publish a paper. 

All this to say we have a few years worth of experience managing large projects together and building effective teams.

### Team Code Repos
Original Riso Blockchain https://github.com/MatteoPerona/Riso  
Mock Frontend for Riso https://github.com/AlejandroSoumah/riso-front-end

Matteo Perona https://github.com/MatteoPerona  
Alejandro Soumah https://github.com/AlejandroSoumah  
Taerim Choi https://github.com/cherrytoi 

### Team LinkedIn Profiles (if available)
Matteo Perona https://www.linkedin.com/in/matteo-perona/  
Alejandro Soumah https://www.linkedin.com/in/alejandro-soumah/  
Taerim Choi https://www.linkedin.com/in/taerim-choi/


## Development Status :open_book:
The following files, also attached above, are from the competition we participated in to test out our idea before looking for a grant. 

Mock Frontend https://github.com/AlejandroSoumah/riso-front-end  
Original Blockchain Concept https://github.com/MatteoPerona/Riso  
Files from the competition https://github.com/MatteoPerona/riso-concept-files

The last link attached contains our original concept white paper along with a one-pager and a pitch deck covering our original idea. As was mentioned before, we fleshed out this idea while working in a startup competition, so the materials are less technical and more business minded. The whitepaper was from an iteration of the app for which we built a rudimentary substrate based chain with a commodities pallet. In our next iteration we would like to take the functionality we built into that pallet and reduce it to a set of smart contracts. 

Other resources we used while researching:  
The Watr Whitepaper https://watr.org/wp-content/uploads/2023/06/Watr-Whitepaper-1.pdf  
ADB Sustainable Development Working Paper Series https://www.adb.org/sites/default/files/publication/29972/adb-wp-25-commodities-exchange.pdf  

## Development Roadmap :nut_and_bolt:
### Overview
- **Total Estimated Duration:** 2 Months
- **Full-Time Equivalent (FTE):** 2.5
- **Total Costs:** 10,000 USD

### Milestone 1 Example — Basic Smart Contracts and UI

- **Estimated duration:** 2 months
- **FTE:**  2,5
- **Costs:** 10,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | GPLv3 |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** in our web documentation that explains how a user can interact with our smart contracts through CLI. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an **article** covering everything the team has built and learned. It will act as a compilation of our learnings trying to apply our blockchain application.|
| 1. | Smart Contracts | We will write the requisite ink! smart contracts to create, buy, and sell commodities contracts. **Storage:** The contract storage struct will contain a packed mapping of balances for users on the network and an unpacked mapping containing vecs storing each commodity contract’s data. Additionally, it will store a contract count (u64) and an account id representing an intermediary account used to lock up funds from the buyer after the finality date has passed. **Functions:** The exposed functions will include, buy, create, and finalize. Buy takes a contract index and sender. It transfers the requisite funds from the buyer (sender) to the seller specified on the contract vec in storage. Then, it writes the sender’s account id to the storage vec for the contract. Create takes in all the required commodity contract specifications and stores the data as a vec in the unpacked mapping mentioned above. Finalize can only be called by a buyer for an active contract which they have purchased. It transfers the final price of the contract from the buyer’s account to the seller’s account. In addition to these three functions, another function, lockup, will call at the beginning of each new block. It finds all contracts whose finality date corresponds with the current block and transfers the respective buyer’s funds to the intermediary account. If finalize is called after lockup was called the funds are transferred from the lockup account instead of the buyer’s.|
| 2. | Frontend | We will deliver a simple user interface tailored for mobile devices using React Native. At this stage, it will remain disconnected from any blockchain functions. **Components:** (1) Marketplace view, where users filter through individual contracts displayed as interactable cards. It will also include a menu button which opens the togglable sidebar menu. (2) The menu contains the user’s profile button, contract creation button, and the marketplace button. (3) The purchase view pops up when a contract card is tapped. It displays all contract specifications and allows the user to purchase the given contract. (4) The profile view displays the username, email, and public key for the user along with any active contracts they have bought or sold. (5) The contract creation view opens when the contract creation button is clicked from the menu. This view contains input fields for each contract specification. When finished the user taps a button at the bottom to publish their contract.|


## Future Plans
- Improve infrastructures for continuous integration and maintenance
- Add a customizable AMM to make buying and selling contracts easier for clients
- Add a governance system to resolve disputes between contract participants

## Referral Program (optional) :moneybag: 
- **Referrer:** Brian Teague
- **Payment Address:** 5ComeRmB78wG7C3Xaph7o7GEJzLBAL9wfXrVUyFj9DS4SqCU (USDT)

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** personal recommendation: PBA team, Marta Carlaslake 
