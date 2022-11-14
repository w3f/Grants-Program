# Liberland Grant Proposal

- **Project Name:** Liberland
- **Team Name:** Liberland LLC, Based in Hongkong.
- **Payment Address:** BTC: bc1qh0ejszphu4e8u04h6d6urlrmr2nyujsxhfq2rj
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2


## Project Overview 

Liberland is a country established in 2015, on a noman’s land (_terranullius_) between 
Croatia and Serbia. Liberland’s founders are blockchain and liberty enthusiasts.     
Liberland’s State project could be summarized by two concepts: Minimal state and distributive governance.     
We want to build and enable all e-government services (to be available to our citizens and others) using our substrate-based blockchain (https://github.com/liberland/liberland_substrate). 
During this process we aim to provide the community with the substrate pallets needed to run a nation state on-chain. Besides Liberland, we aim at a wider adoption by blockchain States, metaverse States and real-life States. The pallets, though initially adapted to our constitution, to provide a strong use-case, will be easy to adapt to virtually any modern State-system. 
 
We aim to provide the substrate ecosystem with a number of pallets that can be customized in a modular design pattern. The aim is to build blockchains that have the main purpose of serving nation states and other highly security oriented entities like the enterprise sector; and on-chain governance. These entities have unique requirements which make them currently gravitate towards private blockchains. We see this as an opportunity on the public blockchain market we aim to answer.
 
This blockchain will be the first blockchain specifically aimed at States (and potentially other large organizations) as they function in the current world, as opposed to projects aiming at once at a reform of the political system and at once at obtaining some degree of State adoption. We are the first separation of powers enforcing chain in the space, and that on two axes: 
-  the traditional Montesquiean separation between the executive, legislative and justice
-  the blockchain-centered separation between politics itself and network security/validators


While working on establishing the physical State in the designated real-world area of Gornja Siga, Liberland is building in collaboration with Zaha Hadid Architects a virtual representation of that area in its Metaverse. This “virtual Liberland” governance will become the first use case for our system. The Metaverse is being built as we speak (world.liberland.org).


### Project Details

Liberland's chain will be the home of our pallets, the consensus mechanism will be a version of Nominated Proof of Stake. The goal of our chain is provide a public and safe place where our pallets can be used in production and also tested.
We implement the “division of powers” between politics and network security as a blockchain designed to run States.
We base our backend on the current/Polkadot version of the Substrate and are conservative in implementing this battle-tested system. States require established security solutions instead of highly experimental infrastructure; even modern metaverse-based States, which we envision as our first full adopters. 

##### Metaverse Pallet   
The metaverse pallet will use an offchain worker in order to bridge between our blockchain and the virtual metaverse’s network on a standard tcp application layer.
Our metaverse is running the industry standard "Unreal Engine 4" to power the graphics. Using standarized API's 
We are also creating API connections with our Metaverse and its specific functions and other extrinsic services. Easy to adapt to other Metaverses and systems where State-like polities run or to "virtual States" existing on the internet in a generalized fashion.
     
##### Integrations between the metaverse and our substrate based chain:    
-  Register, Manage and run on-chain companies   
-  Register virtual land, where the land in the metaverse is managed by a pallet      
-  Trade with on-chain assets, NFT's and LLM   
-  e-citizenship, you can apply for an e-citizenship   
 


## Frontend  
The project also has an easy to use Frontend, serving as the Citizen-facing interface for a State. Our system is Liberland branded but made easy to adopt by other States, legacy or otherwise, real-life or metaverse-based. We are building some standard but many new, sought-after features, including and not limited to:
-  wallet, nominator/validator interface (our streamlined design adapted for State purposes);
-  identity management (citizenship, residence) adapted for State, and not just on-chain use;
-  Direct democracy;
-  Representative Democracy and Elections;
-  legislative drafting and legislative extrinsic management; and
-  the E-executive; a portal for the government to rule and regulate with API connection to extrinsic information systems of extant States (including Liberland).




## Backend   
#### LLM Ecosystem  
To set up the required functions for States' running and give developers and end-users the best adaptability, we utilize pallet assets. We use them for
-  Proof of Commitment; enabling citizenship/e-residence functions by utilizing the User Role Pallet; adapted from the Identity Pallet combined with the Assets Pallet for Citizenship and other status NFT tokens;
-  the creation of our governance token, LLM, using the Assets Pallet.
-  the Legislative, as manifested in
    -  the Congress (representative democracy), a new custom pallet, set up to support what States expect of parliaments; and
    -  Direct Democracy, another customization which works closely with the Identity Pallet to provide a one-head-one-vote system of referenda;
-  the Executive, centred on the Cabinet adapted from the Council / the Collective Pallet;
-  an adaptation of the Treasury to serve as the reserves of a State;
-  the Senate, another fork of the Collective pallet, represents the on-chain governance over the Treasury; and
-  the completely new Landownership Pallet & Company Pallet, forking the Assets pallet to create an on-chain property register.
We will describe the function of each of these custom Pallets below.	





## Liberland Merit (LLM Pallet)   
#### Governance Token    
The governance token is the Liberland Merit (LLM), a token minted based on a fixed schedule and having a fixed cap, BTC style. LLM will be the governance token of our blockchain and Liberland itself and is meant to be used in our DeFi ecosystem. The hard cap of LLM will be 70 million.
 
We build the LLM into the system using the underlying [assets pallet](https://paritytech.github.io/substrate/master/pallet_assets/index.html) combined with customized logic. The LLM Pallet will be able to support the following functionality:

#### Treasury Minting and Predefined Max cap   
Using a simple runtime parameter, we allow developers to simplify the printing amount of tokens, the amount of percentage to issue every X amount of time, and the maximum amount of tokens to be minted and sent to the Treasury, allowing the Treasury to manage on-chain assets. 
We are therefore releasing the LLM based on the smart inflation curve of the LLD, connecting the tokens into a single ecosystem or "cell". Other State adopters will be encouraged to create and modify their own "cells" as they see fit.
Cell pairs enable what is crucial for a State adopter: an algorithmic barrier between politics and Validators. We make sure that it is not necessarily the same people who get voted into political functions that count the votes—our system's basic separation of powers.     
In our implementation on the liberland Chain, LLM Pallet mints 0.9x of the total supply each year and gives the treasury the ownership of the LLM. In  
this technical implementation we are using the treasury pallet id as an origin and accountid to hold the funds. An implementation of pallet-asset's that 
has not been adopted by otherchains. Using LLM Pallet the treasury manages the ownership of the minted tokens and there is no need to trust a user.  
The Senate is the only entity that is allowed to request the treasury to transfer LLM to users.

#### Freezing LLM   
Since we have the usecase of utilizing pallet-asset's to freeze the llm when a user vote's on proposals and in elections. Other chains are all using 
their native balance and token for voting, however, we are utilizing our on-chain asset LLM to vote. In order to allow users to vote with LLM we had to  
manually implement freezing functionality, as pallet-asset's do not currently support freezing anything else except for the entire asset class.  
We will be the first chain to roll out politics supported by on-chain assets.


#### Time-Based Minting    
The LLM pallet allows delays in the minting process using a regular DateTime format. LLM pre-calculates time based on block time, allowing us to postpone the execution of issuing tokens. This functionality does not currently exist in the substrate ecosystem. 
LLM will be minted over a timeframe of 48 years, allowing inflation to get fixed (being able to pre-calculate future inflation percentages) and controlled over time. Ninety-five per cent of all LLM get minted on behalf of the Treasury. Still, most of the Tokens typically don't stay there for long - they will be distributed into politics using the Members of Congress by a system described below. Please see the details here: https://docs.google.com/spreadsheets/d/1uBuGNQMuyz9p4_JBbza7Wa8hWCYkGdGjoOISF0LPKro/edit#gid=0. 

#### Senate approved transfers   
We create a special organ, the Senate, adaptable by other adopters as they see fit (see below). One of the main purposes of this organ is to preside over Treasury spending. It is not a political organ per-se; instead, it is composed of the most committed (invested) individuals in the State and the system, providing a game-theory based incentive to make rational decisions.   

#### LLM Currency Trait   
Liberland is the first project that utilize on-chain assets instead of the default currency traits. Allowing on-chain assets to be used by third pallet pallet, such as our LLM integration with Pallet democracy. We aim to build out the functionality for on-chain assets. Driving the path for on-chain assets integration. This allows us to use on-chain assets to be easily adopted by the entire system for governance(currency locks, voting) and custom functionality.



#### Treasury integration  
Unlike other pallet, we trust the on-chain treasury to be the owner of LLM, this design decition allows us to have a safe place to store on-chain assets, while at the same time minimizing trust for any centralized solution such as a multisig or having LLM managed by a regular account key.  


## Legislative Power 1: Representative Democracy   

#### A Tokenized Parliament    
States are internationally expected to run some form of representative democracy. The core of the legislative power implemented on our chain is Congress. We suggest other adopters will keep and adapt it.  
The Congress is a customized pallet, using delegated voting functionality using the underlying Democracy pallet. Where the original Democracy pallet effects direct democracy, we focus on a faithful representation of a Representative democracy. By default, States and State-like actors currently tend towards this type of democracy, but it is underrepresented in current blockchain projects. 
 
Representative democracy enacts laws and other regulations, both on-chain (as governance) and off-chain (for the state), and Congress is the heart of Liberland's political system. 

#### Smart Elections   
We implement an election system where a Citizen votes with their tokens by Liberland's design for a proof-of-stake-like meritocracy. The Citizens are analogous to Nominators. Instead of Validators, one chooses one or more Members of Congress to delegate their political power. 
Members of Congress receive a share of LLM minted into the Treasury, and they are free to incentivize the voters to vote for them. Voters can expect (also) material returns for giving their trust to politicians, further strengthening the nPoS-like mechanics. 
 
However, this system is easily adaptable to "one-citizen-one-vote" if required by more conservative adopters and without the voter incentive. Conversely, more experimental polities can tweak it and add alternative voting or other algorithms. The executive typically keeps the lion's share of the Treasury in those use-cases.
 
In Liberland, Voters will be allowed to rethink their vote, even mid-term. Based on their performance, they can rearrange the LLM allotted to the Congressmen, creating live feedback to keep them loyal to their voter base. All voting is made with the LLM Pallet, allowing use to vote with on-chain assets. 


## Legislative Power 2: Direct democracy
To fit the Liberland specs and enable more widespread adoption by traditional polities, we implement direct democracy. There, the system counts KYCed voters on the regular "one person-one vote" principle to introduce equality and equity between the rich and the poor (in Liberland, those who commit less and those who commit more).     

Direct democracy is our basic check-and-balance: the people can second-guess their representatives in Congress. In Liberland, this is used to strike down unwanted regulations but can be easily adapted for positive democracy or even as the basis for elections. We complement this system with a front end.   

The hitherto unseen benefit is that voting on-chain can stay permanent. An online system's relatively low transaction costs allow a polity to use higher thresholds for adopting a motion. "Paper" referenda as implemented in current States usually rely on artificially low quora, breaking the original assumption of a "majority rule". We hope to be able to unleash the true power of the people by giving them the flexibility and the security of a public blockchain. 


#### Executive Power    
As required by the standards of modern Statehood, the Executive (vested in a central organ, the Cabinet) is voted in and removed by Congress. The standard of a "fully responsible" government requires States to adopt such a system or face criticism as "not fully democratic".    
Our Executive is a fork of modern parachain councils such as Polkadot's Council, though heavily modified. It is composed of four ministers led by one prime minister. Other adoptees can expand the system, designed to handle complex administrative processes such as regulations, making decisions and even dispute resolution.


Connection to extrinsic systems, standard or customized per-state via API will enable the system to integrate seamlessly into an existing State information system. We build e-government for Liberland, partly inspired by Estonia but fully Web-3 based.
The powers of the Executive in Liberland are to govern directly on-chain within the limits of Congress's laws and off-chain as well in the metaverse and later the real-life state.
    
    
More complex State actors might create specialized parachains which would govern their municipalities or even more complex central bureaucracies. Given that States generate traffic as a matter of course, such systems are very interesting for Validators and Nominators and virtually non-existent in the current space.
 

#### Company Registration Pallet    
The company registration pallet works similar to government company registrar authorities. This pallet will handle the registration of companies in a truly decentralized way. Allowing anyone to apply for registering on-chain companies. The Registrar of Companies part of the government will which will  
work similar to an on-chain council will manually approve all requests for registration.  


#### Liberland Identity Pallet   
The sole purpose of this pallet is to perform on-chain account privilege verification. Manage and track users residency status and all identity verification logic that an individual is needed to identity it self. Because we are building an identity system that is tailored for serving a digital nation state, we can not use the default identity pallet from parity and need to build one that serve as a citizen identity record.

####  Senate   
One of the standing values that Liberland has is that all taxes are paid voluntarily by the citizens of Liberland. Liberland uses and enables other adopters to use a system where the biggest investors gain a special status token, that of a Senator. The system mints this token where one vests a considerable amount of LLM, proving an extraordinary commitment.

The Senate is another Collective as per the Collective Pallet. It is a very simple Collective; comprised of all the holders of the Senatorship, the Senate 
-  Can request Treasury spending requests for LLM; 
-  Repeals Regulations, exactly as the Direct Democracy does.   
There are many States with two-chambers systems in their Parliament. Others may create a special “(de-)central bank”-like solution out of the Senate, with an independent body of experts being the co-owners of the multi-sig there.

#### Registers  

We will build NFT-fuelled registers of many kinds of entities, starting with virtual real estate for our Metaverse. Next will come registers for persons and even companies. These registers will connect to front-end interfaces. We base the registers on strong unifying aspects, a universal philosophy, easy to adopt by other actors, States or otherwise.


#### Judiciary   

We intend to form an on-chain judiciary system, working to resolve conflicts both on-chain and in Liberland. You can find more information as to this topic here:
https://docs.google.com/document/d/1UpfN6T3LqfOjUZYGJHvFe2dDahNALzy1qWAQNk9sbGE/edit?usp=sharing

We will build the judiciary around Q1 2023. It is to be more traditional than other blockchain-based justice systems, as we want to follow the expectations of our adopters and their citizens. We also see that innovation and preferring mathematical innovation before tried-and-tested solutions can be detrimental, as seen by the low adoption of blockchain judiciaries in the real world.

## Team   
#### Team Members   
-  Dorian Stern-Vukotic, Frontend developer
-  Filip Kalebo, Rust substrate Team leader and developer; Github: https://github.com/flipchan;
-  Max Gravit, expert advisor on nPoS substrate blockchains; Github: https://github.com/3yekn;
-  Abel Yañez, expert advisor on design patterns and substrate technology;
-  Balazs Magyar, Quality Assurance Engineer with a background in web-development and security audits for crypto projects. Github: https://github.com/balazs091
-  As a backup and to provide a second opinion, we have the possibility of asking a second experienced team of developers, which has a great track record in the development of crypto related projects. Please see their earlier work here:
https://www.mantleblockchain.com/
https://www.masscrypto.io
https://www.hglobal.io
https://www.nftytoken.io

### Team’s Website
https://github.com/liberland/liberland

#### Legal Structure
A Hong Kong-based Limited Liability Company; later a Liberland Company as the entity in charge.
Development Team at Rust Syndicate LLC, Tbilisi, Republic of Georgia.

#### Team’s Experience   
The team has a strong background in Rust and frontend development. On the advisory side, we got Max and Abel; They have a broad knowledge of the substrate ecosystem. Max is the Sole operator of a Kusama Validator enrolled in Kusama’s 1k validator program, Completed Bryan Chen’s substrate course, deployed a 5-node testnet for Hashed Chain.   
Filip has been working with the substrate for nine months. He was one of the first members and builders of what we know today as the Picasso para chain, has a background in IT security and has been working on various enterprise applications in Rust. Holds a strong knowledge in information security and devops.   
 
#### Team linkedin Profiles:
https://www.linkedin.com/in/djstern
https://se.linkedin.com/in/filip-k%C3%A4lebo-479314115


#### Team Code Repositories 
https://github.com/liberland/liberland_backend   
https://github.com/liberland/liberland_frontend   
https://github.com/liberland/liberland_substrate   
https://github.com/liberland/docs/blob/master/Blockchain%20Strategy.md  
https://github.com/flipchan   
https://github.com/3yekn  
 
### Contact:   
justice@liberland.org


### Intended Language of Development   
Rust for the blockchain backend, Javascript and Angular for the Frontend.

## Community   
Liberland’s greatest asset is its name, which opens many doors in the libertarian and blockchain world and the community of enthusiast supporters. We got about 700k (!) applications and have close to 1k citizens.    
We have reliable means of communication and social media by which we will inform “our people” that their main tool for political life has become operational. We expect the adoption to skyrocket after that. Hence we practice a “rolled phaseout”, to ensure maximum system stability.



## Development Status 

We have already started to develop our chain, links:
- https://github.com/liberland/liberland_substrate | Our current chain repository
- https://testnet.liberland.org | Our public frontend with support for the polkadot.js wallet


## Development Roadmap :nut_and_bolt:


### Overview

- **Total Estimated Duration:** 5 months
- **Full-Time Equivalent (FTE):**  3 FTE
- **Total Costs:** 50 000 USD in BTC

We also aim to enrolled in substrate's builders program.

### Milestone 1: Citizens, LLM and Public Veto

- **Estimated duration:** 2 month
- **FTE:**  3
- **Costs:** 20 000 USD

The first milestone aims to provide all citizens with the functionality to have different roles depending on the account, take part of voting for elections and law proposals. We are also implementing the LLM(Liberland Merit) based on a predefined inflation curve that can be found here:
https://docs.google.com/spreadsheets/d/1Q5DnVI4WuQWncMY985xuQ30HB7-bJz6X6EZFr2Vzr38/edit


| Number | Specification | Deliverable |
| -----: | ----------- | ------------- |
| 0a. | License |  MIT |
| 0b. | Documentation | We will provide both inline code documentation as well as user guides that shows how people can interact with our pallets and chain |
| 0c. | Testing Guide | We will have test files for all mayor functions, more about our testing procedure can be found under the testing section  |
| 0d. | Docker | We will provide a Dockerfiles that can be used to run our node and also test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish a detailed article, walking a user through all functionality and features.)
| 1. | LLM Pallet | LLM is a pallet customized to serve custom functionality for onchain Assets managed by the treasury |  
| 2. | Congress Pallet | We are building a substrate pallet handling a tokenized direct democracy; we test it in limited conditions and then deploy it in the production environment |  
| 3. | Voting with on-chain assets | We will create a pallet that will be tailored to serve the voting and approval logic for governance for Nation States using on-chain assets to vote.   |  
| 4. | Liberland Identity Pallet | We set up a substrate pallet that will allow accounts to have different roles. Liberland's on-chain governance is tailored to serve a nation state, therefore we need functionality for users to be citizens, e-residence, assembly members, ministers, and so on. In order to implement user role checks and adopt our chain after https://github.com/liberland/liberland_substrate/blob/main/docs/liberland/identity.md | 
   
   
   



### Milestone 2: Land and Company registration

- **Estimated duration:** 3 months
- **FTE:**  3
- **Costs:** 30 000 USD

This milestone will allow citizens to register companies using our company register pallet, metaverse integration and a custom pallet that will handle land registration and management.

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License |  MIT |
| 0b. | Documentation | We will provide both inline code documentation as well as user guides that shows how people can interact with our pallets and chain |
| 0c. | Testing Guide | We will have test files for all mayor functions, more about our testing procedure can be found under the testing section  |
| 0d. | Docker | We will provide a Docker files that can be used to run our node and also test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish a detailed article, walking a user through all functionality and features.)
| 1. | Land owner Pallet | We make a pallet that will manage on-chain assets for land ownership based on geo coordination. |  
| 2. | Metaverse integration Pallet | We are setting up a new substrate pallet that interacts with our Metaverse|
| 3. | Company Registration Pallet | We are building a pallet that allows anyone to incorporate and manage Liberland companies on-chain | 

### Current Development Status
The current Development status of all the pallets and our main chain, can be found here: https://github.com/liberland/liberland_substrate.

### Ecosystem Fit:   
Liberland seeks to bring substrate up to a new level, running an on-chain Metaverse and an entire sovereign country on it. 
The blockchain world and especially the Substrate/Polkadot environment is a perfect fit for running public administration, as governments are ledgers. They must be secure and transparent; public blockchains provide that.
States, however, tend to use, if any, private blockchains. This must change, and we propose to become the pioneers of this change. 
Current blockchains want to be great projects for the Web3 community first, and State oriented second. We are instead proposing a harmonious connection between the goals, which, in our opinion, aren't mutually exclusive. We have, unlike these other projects, real-life State governance experience. Hence we focus on:
-  being recognized as a "government" project, doing what is expected well and then creating "hip" new ideas;
-  Representative democracy (while not neglecting the awesome potential of direct democracy);
-  division of powers between validators and politics (unseen in the ecosystem) and in the Montesquieu sense;
-  responsibility of the Executive to the Legislative (a basic requirement for a "good" State);
-  conservative code base, auditable, transparent;
-  E-government, APIs, the realization that governments use many tools; and 
-  not wanting to be the Swiss Army Knife which nobody needs but a set of sharp, specialized projects integrated into a whole;
We are following along with Polkadot's future vision of hosting decentralized nation-states: 
https://wiki.polkadot.network/docs/build-pdk#digital-nation-states
As builders of the infrastructure to support a country's digitization, we want to utilize the performance and security of the Rust programming. Parity's vision for substrate aligns with our vision of providing e-services for our citizens.

### Funds Required   
We ask for level 2 funding. We want to put the Liberland blockchain under the substrate builders program to get technical support from Parity so that we can provide the best possible stability for our chain.


### The Future
#### Outlook
Land in Liberland, both the real and virtual versions thereof, will be tokenized into on-chain assets. 
-  we aim to utilize our substrate-based blockchain for all our currency and e-governance services to all current and future citizens of Liberland;      
-  offer our blockchain and coin to various exchanges;      
-  connect the system to smart contract/DAO generators;    
-  allow developers to create and build DAPPs;    
-  create our judicial system; and   
-  connect the blockchain to the metaverse.      
Regarding the last topic, we have the following milestones, which might become the subject of a consecutive Grant Application:


### Virtual Land and Assets  
Land in Liberland, both the real and virtual versions thereof, will be tokenized into on-chain assets.    
The initial purchase of the land will be by an Initial Land Offering (ILO). After privatizing most land, further purchases will occur using Liberland's blockchain dex virtual marketplaces.     
We will create our own Land ownership pallet, thanks to our implementation of LLM Pallet we want to build on our on-chain asset implementation, using will build a pallet that allows users to own and trade Virtual Land. Liberland's Land ownership pallet will have the same Deed functionality as a current land ownership realestate web2. 
The pallet will use pallet-assets combined with custom functionality to keep an on-chain registry, keeping track of the address, geo locations and owner address.

#### Merging the Real and the Virtual    
Many marketplaces for digital items are currently available on blockchains (primarily the Ethereum blockchain), such as;
http://rarible.com, https://opensea.io and http://marketplace.decentraland.org/.
We will build tools to establish API connections with popular online marketplaces as an integral part of our project.    
We will ensure that users can apply objects to other objects and that, combining those objects, effects that somewhat resemble what one might expect in real life.    


#### A marketplace for virtualized real assets
Answering the call of a widespread demand and seeing that there is no comparable solution currently available and functional/user friendly to the extent which we would find desirable, VR Liberland will feature a marketplace of real-world goods.
We will represent real-world goods:
-  in the virtual world as avatars;   
-  on the blockchain as on-chain assets;  
-  by proof of their real-world existence to the prospective seller.

## Additional Information 

#### How did you hear about the Grants Program?    
Our team is familiar with the Web3 Foundation and the works of Parity due to previous experience in substrates. 

#### Any other grants? 
Liberland's blockchain project has not asked for any previous grants before. We plan to launch another grant application by Parity for the decentralized justice system of Liberland soon.

