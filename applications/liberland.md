# Liberland Grant Application

```
● Project: Liberland
● Team Name: Liberland (liberland.org)
● Payment Address btc: bc1qh0ejszphu4e8u04h6d6urlrmr2nyujsxhfq2rj
● Status: Open
● Total Estimated Duration: 1 year
● Full-time equivalent (FTE): 5 developers full time
```
## Project Description:

## Introduction:

Liberland is a country established in 2015 ,on a noman’s land( _terranullius_ ) between   
Croatia and Serbia. Liberland’s founders are blockchain and liberty enthusiasts.     
Liberland’s State project could be summarized by two concepts: Minimal state and    
distributive governance.
        
Using substrate,we want to build and enable all e-government services to be available   
to our citizens using our substrate-based blockchain.
     
While working on establishing the physical State in the designated area, Liberland  
is building a virtual representation of that area in its own Metaverse. The governance  
of this “virtual Liberland” shall become the first use case for our system. The Metaverse is   
being built as we speak(World.liberland.org) and the urgency of having the blockchain
built as soon as possible grows with each milestone on that project.


### Scope of the Project:

#### Liberland Blockchain

##### Backend and Frontend

The scope of this project is both our front-end, or more properly said, a set of    
frontends with which Liberlanders will be able to interact; and the backend, including    
the Substrate nodes and the databases interacting with the blockchain. In the advanced    
phases of the project, we will   
create API connections with the Metaverse and its specific    
functions and with other extrinsic services.    


##### Liberland Merit (LLM)

We name our currency and main on-chain token to Liberland Merit (LLM), signifying 
the connection between money and real-life value. LLM will be the governance token
of our blockchain and of Liberland itself. As the blockchain will enable Smart 
Contracts, there will be other tokens, both fungible and non-fungible.
The tokennomics of LLM will be a hard cap of 70 million being distributed over 
a fixed amount of LLM will be minted over a timeframe of 48 years, allowing inflation 
to be fixed (being able to pre calculate future inflation percentages) and controlled over time.  

Please see the details here:
https://docs.google.com/spreadsheets/d/1uBuGNQMuyz9p4_JBbza7Wa8hWCYkGdGjoOI
SF0LPKro/edit#gid=


##### Citizenship

Citizenship and e-residency user statuses and roles shall be held on-chain and
therefore validated along with other transactions. We will implement the identity pallet   
and adapt it to Liberland’s legal system.     

##### Congress

The Congress is a customized pallet, using delegated voting functionality using the
underlaying Democracy pallet. By utilizing this technology we are creating a true
representative democracy. Representative democracy is used to _enact_ laws and other 
regulations, both on-chain (as governance) and o-chain (for the state).  
In the Assembly elections, a Citizen votes _with their tokens_ , producing a   
proof-of-stake-like meritocracy in Liberland’s politics. 
Voters will be allowed to rethink their vote, even mid-term. They can rearrange the  
LLM allotted to the Congressmen based on their performance.   

##### Executive
Our Executive is a fork of modern parachain council’s such as Polkadot’s Council, though   
heavily modified. It is composed of four ministers led by one prime minister. The powers    
of the Executive are to govern directly on-chain within the limits of Congress’s laws   
and off-chain as well in the metaverse and later the real-life state.   



##### Treasury
One of the standing values that Liberland has is that all taxes are paid voluntarily  
by the citizens of Liberland. We fork Polkadot’s Treasury and implement it as a   
multisig wallet held by the on-chain politicians of Liberland. Like Polkadot’s  
Treasury, we will handle funding proposals, mainly initiated by the Executive and the Congress.
To handle day-to-day expenses, the Treasury will be fuelled by transaction fees   
and also by “real estate fees” when we are able to launch our Metaverse.



##### Registers

We will build NFT-fuelled registers of many kinds of entities, starting with virtual real estate for our Metaverse. 
Next will be registers for persons and companies. These registers will be connected to front-end interfaces.

##### Judiciary

We intend to form an on-chain judiciary system, working to resolve conflicts both   
on-chain and in Liberland. Information about our Judiciary system can be found here:

https://docs.google.com/document/d/1UpfN6T3LqfOjUZYGJHvFe2dDahNALzy1qWAQNk9sbGE/edit?usp=sharing

## Team


#### Team Members

```
● Dorian Stern-Vukotic, Frontend developer
● Filip Kalebo, Rust substrate developer; Github:
https://github.com/flipchan;
● Max Gravit, Rust substrate Developer; Github:https://github.com/3yekn;and
● Balazs Magyar, Quality Assurance Engineer with a background in
web-development and security audits for crypto projects. Github:
https://github.com/balazs
● As a backup and to provide a second opinion, we have the possibility of asking a  
second experienced team of developers, which has a great track record in the  
development of crypto related projects. Please see their earlier work here:
○ https://www.mantleblockchain.com/    
○ https://www.masscrypto.io    
○ https://www.hglobal.io       
○ https://www.nftytoken.io      
```

#### Team’s Website

https://github.com/liberland/liberland

#### Legal Structure

AHong Kong-based Limited Liability Company; later aLiberland Companyas the
entity in charge.

**For production:**

```
● Development Team at Rust Syndicate LLC, Tbilisi, Republic of Georgia.
```
#### Team’s Experience

The team has a strong background in Rust and frontend development. On the substrate  
side we got Max; Max has a broad knowledge of the substrate ecosystem, Soleoperator
of a Kusama Validator enrolled in Kusama’s 1k validator program, Completed Bryan   
Chen’s substrate course, deployed a 5-node testnet for Hashed Chain.  
Filip; Filip has previously been working with substrate for 9 months, he was one of the first  
members and builders of what we know today as Picasso parachain, background in
IT-security and Rust.Holds a
strong knowledge in information security and devops. Balazs Magyar; Has a
backgroundinweb development and code audits, he brings a sharp pair of eyes for
verifying the code quality that the rest of the team commits.

Team linkedin Profiles:
https://www.linkedin.com/in/balazs
https://www.linkedin.com/in/djstern
https://se.linkedin.com/in/filip-k%C3%A4lebo-

#### Team Code Repositories

https://github.com/liberland/liberland_backend

https://github.com/liberland/liberland_frontend

https://github.com/liberland/liberland_node

https://github.com/liberland/docs/blob/master/Blockchain%20Strategy.md

#### Contact:

justice@liberland.org

## Intended Language of Development

Rust for the blockchain backend ,Javascriptfor the Frontend,Angular for centralized
Backend.


## Timeline and Milestones

#### Basic blockchain

**Deadline: Q2 2022**

A basic mainnet blockchain based on Substrate. This is to a large extent already  
built thanks to earlier efforts, but the project must be finished and deployed.

```
● Functional token transactions, send and receive LLM;
● Frontend with on-chain wallet interaction;
● Publicly see and interact with the blockchain;
● Simple node deployment instructions;
● Npos consensus
● stake LLM in PolkaStaking (28 days), i.e. to nominate validators;
● Active testnet; and
● Onboard users.
```
#### Output

We have a simple, functioning blockchain. We will begin with a marketing campaign
and a funding/investor-seekingcampaign. We will give their work some publicity,and
we will also start airdropping their wages.

##### Delivery:   
We will deliver a working blockchain under the MIT license that can be used by anyone and will be avaliable here:
https://github.com/liberland_node


##### Technical information:    
Our team will develop our first iteration of a working testnet style network using. Complete with custom    
pallet's that allow the functionality to send and 
recieve tokens, configure user roles, custom voting functionality: allowing the citizen to vote on petition using the underlaying democracy pallet.
After internal discussion we also decided not to go with the Proof of Authority consense and went with a polkadot inspired Nominated Proof of stake consensus 
algorithm, utilizing the babe pallet for block production.


#### Frontend

**Deadline: Q2 2022**

The Liberland frontend environment, our DAPP must betested and audited,and
connected firmly to the now-functioning backend. It should be:

```
● running;
● connective with the wallet extensions used (initially Polka JS);
● without overt bugs;
● giving all the necessary messages and feedback to the users;
```

```
● the blockchain actions performed fromthe frontend shouldbe 100 percent
explainable from the Polka JS and the Terminal Blockchain explorers;
● enabling the proof of stake functionality, that is
○ nominating; and
○ validating.
● be linked to our Liberland.org website
```
##### Subprojects:

Auditing

1. Compile and deploy the contents of the frontend repository;
2. Test it whether it has the following functionalities:
● function as a wallet environment [like Terra Station or YOLO wallet for
    Cardano];
● sending, receiving transactions;
● Benchmarking in order to set the transaction costs right;
● transaction history incl. senders and recipients (KYCed entities where
    applicable);
● having at this stage one account only per wallet connection;
● it should have a fully functioning (polka) staking function;
● there must not be overt bugs;
● all action in the frontend should one on one match the action in the PolkaJS
    wallet; and
● Test it for seamless integration with the backend.

Implementing new functionality

Next, comes the improvements. The following is the list of _core_ features our system does
not yet have but should finish at this stage. It should:   

```
● show a list of available validators;
● list of their rewards and risk parameters(how long have they been validating,
how many slashing incidents);
```

```
● enablea validator to set themselves up in the system and say how much they
reward their nominators;
● there should be a nominate function;
● there should be an overview for the validator (rewards list, uptime, etc.);
● there should also be an overview for the nominator(rewardslist, ability to claim
rewards); and
● the rewards system should work fully with the front end.
```
Your sources of inspiration are TerraStation, Exodus Wallet,YoloWallet, Phantom
Wallet, and the Polka JS environment (although that is not exactly user-friendly).

Polishing

This phase will end with testing and adding new features that are largely cosmetic but  
necessary so that the product won't be seen as half-done by the client. Those include:

```
● Having all popups functioning,i.e.that users know when a transactio nfails,for
what reasons, etc.;
● No major frontend and backend bugs that interact with user functionality;
● Seamless working with the Polka JS extension;
● integration with our Liberland.org website; meaning: the E-Residency login will
result in Liberland blockchain login,matching a wallet to the corresponding
login;
● Having LLM from Liberland.org visible as mainnet LLM and vice versa;
● Setting up a mobile version (in a browser, Google Chrome at first); and
● Anything else the testers might find necessary,instead of including "merely nice
to have".
```
Optional

Provided there is developmenttime, work can begin on a Liberand Android app,
followed by an iOS app.

Make it a wallet application; inspirations: Trust Wallet, Mycelium, Blue Wallet;
Phantom Wallet (for the staking features; that one is not yet mobile).


Basic functionality for starters-send, receive, show, stake,see your stake,nominate
stake to yourself or another validator, claim rewards.

##### Output

We will now have a functioning and marketable frontend. Our e-residents will login  
from their PCs and maybe from their smartphone. Staking will become easy and  
transparent,enabling us to market it as a source of passive income and a usecasefor
our token.


##### Delivery:   
We will deliver an internet facing frontend that can interact with our blockchain. This     
frontend will be programmed in angular js and interact with our    
backend blockchain using our chains websocket that is listening for active websocket connections.  
The public frontend will allow all users to interact with the liberland blockchain, being able to transact, vote and stake tokens.


##### Technical information:    
The frontend is written in angular js and utilizes substrate's built in listening websocket. Thanks to this functionality our frontend  
can communicate and call pallet functions. We are implementing the frontend to communicate with both the websocket of the chain as well as  
polkadot.js browser plugin wallet. Allowing anyone to use our frontend that has a working browser.


### State Governance

**Deadline: Q3 2022**

We split the governance by State powers (Montesquieu: Legislative, Executive, Judicial), and    
each power has a different priority. The highest priority is assigned to the Legislative Branch.  
The reason for that is that the Legislative Branch is the most citizen-facing. We    
need our citizens and supporters to find themselves in our system - ASAP. This is    
why we have a burning need to implement the Legislative Branch first, far ahead of all the others.    


The Legislative Branch also can work on its own without the other branches.    

##### Basic representative democracy

```
● running full elections into the Congressional Assembly, our parliament;
● onboarding new Representatives (elected ocials);
● ending their term when the election cycle is over;
● work with a special algorithm that allocates votes(you vote with your Staked
LLM);
● Representatives can vote in the Prime Minister and Ministers;
● they can fire the Prime Minister or Ministers.
```

##### Basic legislative process

```
● Congress users can propose laws;
● They can vote for these laws with the LLM they had been voted in during the   
elections (the popular political power) + their LLM;   
● Laws can be accepted or rejected by the Assembly; and
● Accepted Laws are written into the Blockchain and shown in the front end.
```
##### Basic Public Veto (direct democracy)

```
● Citizens can propose the(binding,unlike with petitions)motion for the removal  
of a Law;
● they can vote for it, one citizen, one vote ; and
● the VetoProposal(referendum) stays open until 50 percent plus one citizen vote
yea or nay.   
```

##### Delivery:   
Liberland's blockchain will be released with the mentioned features on our public    
liberland_node repository on github. This release will focus mostly on   
expanding voting functionality introducing anyone to propose and vote on laws. 


##### Technical information:    
By utilizing pallet-democracy from Parity, we will implement custom functionality to allow our users  
to vote on different referendum and proposals depending on a users role, a user has   
can be a regular user without roles, e-residence or a citizen. Then we have assembly members, an assembly member is either a e-residence  
or a citizen that also has more privledges and is allowed to have more of an authority when voting. If you are familiar with unix based operating system  
you can see the Assembly member as a Linux or a BSD user that's added to the "staff" group.  
Our frontend will be able to query these custom pallets for processing highlevel voting functionality   
in order to give the end-user a more smoother experience.


#### Smart Contracts

**Deadline: Q3/Q**

The final task in the Q4 to Q1 scope is to prepare the Smart Contract pallet.This pallet 
will enable others to write and run smart contracts,enabling functionality to
Ethereumor BSC-DEXes and DAPPs. We do not expect this tobe _completely_ finished  
before the end of Q4, but significant work should already be done by then.  
 
Deadline: The end of Q2 2022.

##### Subprojects

Prepare the Pallet

1. Take a similar pallet from Polkadot or other open source. ;
2. Make sure it works in our system.
3. Test it with a sample smart contract or smart contracts.
4. Prepare a demonstration, run it in a meeting with us.


Launch of public block explorer

1. Smart contracts require a blockchain explorer capable of monitoring the action;
2. Take the opensource software of a similar blockchain explorer such as subscan
    clone it.
3. Make minimal changes so that it is _barely_ usable.
4. It needs not to be _perfect_ by the end of Q4 - thisis a monumental task in scope!

Set up guidelines to write Smart Contracts on Liberland

1. Please copy a similar guideline from the source material.
2. Make a Wiki explaining how it works.

Citizenship NFT

This will be the first Smart Contract we create on our new pallet.The purpose will be
to represent the citizenship of every citizen.

Citizenship token will contain

```
● a picture of the citizenship ID;
● link to the owner's Liberland account(this will be the holder of that account,a  
citizen will be for the system this token!)
```

```
● the number of LLM staked into the citizenship;
● the history of this particular citizenship token,i.e.who was the previous holder
and holders of this NFT, creating a potentially "collectable" NFT.
```
##### Output

We will be able to build smart contracts on our chain, which will create attractivity and 
use cases, which will also enable us to take our governance to the next level. We will be 
able to setup more government processes as smartcontracts. We will provide every 
citizen with their tokenized citizenship right in their wallet.  


##### Delivery:   
The public release of this be able for everyone to download and use from our public liberland_node github.   

##### Technical information:    
This release will add functionality for users to run and interact with smart contracts. We will utilize substrate's own smart contract   
framework "!ink". Liberland has gained a lot traction and interest since our start in 2015. Thanks to our larger userbase we expect to have a larger amount.  


References:
https://paritytech.github.io/ink-docs/   
https://docs.substrate.io/v3/runtime/smart-contracts/   
https://e-residency.liberland.org/   

#### Current Development Status

There have been about 7 full months of development spent on the project by various   
developers outside of the current team.

Th ecurrent node implementation of Liberland’s blockchain has started and we have a   
early beta version that you can find and download here:     
https://github.com/liberland/liberland_node

## Ecosystem Fit:

Liberland seeks to bring substrate up to a new level,running a non-chain Metaverse as
well as an entire sovereign country on it.  

The blockchain world and especially the Substrate/Polkadot environment is a perfect 
fit for running public administration,as governments are ledgers.They must be secure  
and transparent, public blockchains provide that.

States,however, tend to use,if any,private blockchains.This must *change* and we
propose to become the pioneers of this change.   

This is following along with polkadot’s future vision of hosting decentralized nation
states:    

https://wiki.polkadot.network/docs/build-pdk#digital-nation-states


As builders for the infrastructure to support the digitization of a country, we want to utilize  
the formance and security of the Rust programming. 
Parity’s vision for substrate aligns with our vision of providing e-services for our citizens.


## Funds Required

We ask for a level 2 funding, we want to put the liberland blockchain under the
substrate builders program so that we can get technical support from Parity,so that we
can provide the best possible stability for our chain.

## The Future

#### Outlook

Land in Liberland, both the real and virtual versions thereof, will be tokenized into   
on-chain assets such as NFT’s.
● We aim to utilize our substrate-based blockchain for allour currency and
e-governance services to all current and future citizens of Liberland.
● Oer our blockchain and coin to various exchanges;
● Connect the system to smart contract/DAO generators;
● Allow developers to create and build DAPPs.
● Create our judicial system;
● Connect the blockchain to the metaverse.
Regardingthe lasttopic,we have the following milestones,which might become the
subject of a consecutive Grant Application:

#### Virtual Land and Assets

Land in Liberland, both the real and virtual versions there of, will be tokenized into    
on-chain assets such as NFT’s.   
The initial purchase of the land will be made by an Initial Land Offering(ILO). After the   
land is privatized,further purchases will be made using Liberland's blockcha index   
virtual marketplaces.


#### Merging the Real and the Virtual

Many marketplaces for digital items are currently available on blockchains(primarily
the Ethereum blockchain), such as;
[http://rarible.com](https://rarible.com), [https://opensea.io](https://opensea.io)    
and [http://marketplace.decentraland.org/](http://marketplace.decentraland.org/).   
We will build tools to establish API connections with popular online marketplaces as an 
integral part of our project.
We will ensure that users can apply objects to other objects and that,combining those
objects, eects that somewhat resemble what one might expect in real life will be    
achieved.

#### A marketplace for virtualized real assets

Answering the call of a widespread demand and seeing that there is no comparable
solution currently available and functional/user friendly to the extent which we would   
find desirable, VR Liberland will feature a marketplace of real-world goods.
The real-world goods will be represented:
● In the virtual world as avatars;
● On the blockchain as NFTs;
● By proof of their real-world existence to the prospective seller.
         
         
We envision the first iteration of this project to be a ‘market of markets’. This 
means that people will be allowed and encouraged to place their producton eBay,Amazon,
etc., where the oer goes through the checks of those trustworthy services with
worldwide availability. We will oer an API connection between those more traditional 
services and an NFT token generator, accepting the standards of trust which apply to  
the underlying commercial services.

```
## Additional Information

**How did you hear about the Grants Program?**
Our team is familiar with the Web3 Foundation and the works of Parity due to previous
experience with substrate.


**Any other grants?**
Liberland’s blockchain project has not been granted any previous grants before.We
plan to launch another grant for the decentralized justice system of Liberland in the
near future.


