# Liberland Grant Proposal

- **Project Name:** Liberland
- **Team Name:** Liberland LLC, Based in Hongkong.
- **Payment Address:** BTC: bc1qh0ejszphu4e8u04h6d6urlrmr2nyujsxhfq2rj
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2


## Project Overview 

Liberland is a country established in 2015, on a noman’s land (_terranullius_) between 
Croatia and Serbia. Liberland’s founders are blockchain and liberty enthusiasts.     
Liberland’s State project could be summarized by two concepts: Minimal state and distributive governance. Our goal is to put Liberland's e-governance services on a substrate-based chain, being the first nation-state in the world to serve our citizens in a truly web3 decentralized way.


### Overview

Our team is working on this project because this is the first web3 digitization of a country's constitution and government e-services. Liberland's blockchain will be a substrate-based blockchain that will serve the citizen of Liberland, taking part in the legal system such as participating in public veto elections and voting. As well as expanding beyond that, and allowing our chain to serve on-chain company registrations, land registration and a lot more!


### Project Details

Liberland chain's main functionality will be:

##### Liberland Merit (LLM)

We name our currency and main on-chain token to Liberland Merit (LLM), signifying 
the connection between money and real-life value. LLM will be the governance token
of our blockchain and of Liberland itself. 
LLM will have a hard cap of 70 million tokens, being distributed at the rate of 0.9% per year, over a timeframe of 48 years, allowing inflation 
to be pre-calculated and controlled over time.  

Based on a time based block production formula. This will allow the pallet to have time limits between the minting processes, allowing us to precalculate the circulating supply and the inflation curve. 

Please see more details here:
https://docs.google.com/spreadsheets/d/1uBuGNQMuyz9p4_JBbza7Wa8hWCYkGdGjoOISF0LPKro/edit#gid=

Note: 
The most important colums to notice is the Reserve, Merits in circulation and State budget columns that our LLM pallet will use in order to limit the distribution/minting of LLM tokens, the rest of the columns may change in a near future.

We will create our own custom LLM-pallet, Liberland's chain will automatically mint the 0.9% per year and sends the minted tokens to the treasury, using a pre-calculated blocktime. We are using pallet-assets minting functionality in order to make LLM an easy to adopt on-chain asset for thirdparty integration.


##### Citizenship

Citizenship and e-residency user statuses and roles shall be held on-chain and
therefore validated along with other transactions. We will implement the identity pallet   
and adapt it to Liberland’s legal system.     

##### Congress

The Congress is part of the Public Veto pallet, using delegated voting functionality using the
underlying Democracy pallet from parity. By utilizing this technology we are creating a true
representative democracy. Representative democracy is used to _enact_ laws and other 
regulations, both on-chain (as governance) and o-chain (for the state).  
In the Assembly elections, a Citizen votes _with their tokens_ , producing a   
proof-of-stake-like meritocracy in Liberland’s politics. 
Voters will be allowed to rethink their vote, even mid-term. They can rearrange the  
LLM allotted to the Congressmen based on their performance.   


##### Executive
Our Executive is a fork of modern parachain council’s implementations such as Polkadot’s Council, though   
heavily modified. It is composed of four ministers led by one prime minister. The powers    
of the Executive are to govern directly on-chain within the limits of Congress’s laws   
and off-chain as well in the metaverse and later the real-life state.   



##### Treasury
One of the standing values that Liberland has is that all taxes are paid voluntarily  
by the citizens of Liberland. Liberland's chain will have an on-chain treasure, that will be used to fund projects and government budges in a fully transparent way.  
Treasury, we will handle funding proposals, mainly initiated by the Executive and the Congress.
The Treasury will be fueled by transaction fees and staking as well as by “real estate fees”, when we are able to launch our Metaverse integration in Milestone 2.



## Project comparison 
Several projects such as "bit.country", are trying to be an incubator for the metaverse. We, on the other hand,
have been here for 7 years now, with a clear vision of being a real state both in the real physical world  
as well as in the virtual Metaverse. Our chain will manage registration for both the physical land in Liberland as well as the virtual metaverse.
Liberland's on-chain governance systems stands out from current existing systems. Our system is  
designed and built with the sole purpose of serving as a nation-state. Allow the users to vote differently based on their role, in accordance to Liberland's governance system. 

#### Liberland's Metaverse  
We currently have a beta version of our metaverse that has been designed by [Zaha Hadid Architects](https://en.wikipedia.org/wiki/Zaha_Hadid_Architects), developed by [Mytaverse](https://www.mytaverse.com/) and cordinated by [Arch Agenda](https://archagenda.com/).   
Our metaverse is currently being used for internal meetings and conferences, such as our 7th anniversary, that can be viewed here:

[![IMAGE ALT TEXT](http://img.youtube.com/vi/G_1m8ZwqKMw/0.jpg)](http://www.youtube.com/watch?v=G_1m8ZwqKMw "Liberland MetaVerse")

Our metaverse is not currently public, however, we are more then happy to provide a guided private tour of it, if requested.
If so, please email justice@liberland.org and we shall set up a scheduled session.


##### Voting   
We will make our own pallet, where we adopt the voting functionality from pallet democracy to interact with our public veto governance system.   
Allowing citizens to vote on laws, assembly members to vote on government funding proposals(who is going to build a new road and so on).   
Our voting pallet will interact with our identity pallet to serve our governance system. Unlike previous chains, we have customized the voting  
to be limited to voting on the creation and removal of laws and not allow non-assembly members to vote on government treasury funding proposals.   


##### Land Registry

Using a custom substrate pallet with pallet-assets integration we aim to allow users to register land, based on geographical coordinates. Digitizing land ownership. 


##### Judiciary

We intend to form an on-chain judiciary system, working to resolve conflicts both   
on-chain and in Liberland. Information about our Judiciary system can be found here:

https://docs.google.com/document/d/1UpfN6T3LqfOjUZYGJHvFe2dDahNALzy1qWAQNk9sbGE/edit?usp=sharing

We aim to bring Liberland's Judiciary system on-chain using our Identity and Public Veto Pallet.


### Ecosystem Fit

Liberland blockchain is the first blockchain to serve a nation state in a decentralized way. This is a new innovation and giant step for the web3 ecosystem. With the help of the web3 foundation we can make the first digital state, similar to what is described on polkadot's wiki:
https://wiki.polkadot.network/docs/build-pdk#digital-nation-states
This is a perfect ecosystem match, we want to make Liberland's e-governance services to be substrate based!

## Team 

### Team members

- Filip Kalebo, Rust Developer
> Github: https://github.com/flipchan
- Max Gravit, Rust Developer
> Github: https://github.com/3yekn
- Dorian Stern-Vukotic, Frontend developer

#### Team’s Website
https://liberland.org   
https://github.com/liberland/liberland   


### Contact

- **Contact Name:** Michal Placnik, Liberland's Minister of Justice.
- **Contact Email:** justice@liberland.org
- **Website:** https://liberland.org

### Legal Structure

- **Registered Address:** 14/F, Manning House, 38-48 Queen’s Road Central, Central, Hong Kong
- **Registered Legal Entity:** Liberland LLC

### Team's experience

Our team has worked on several substrate based projects such as Picasso and hashed-chain. The team has demonstrated knowledge of the substrate ecosystem and now we aim to build the first on-chain constitution and nation state on a substrate based chain.

The team has started to develop the liberland chain on github:
https://github.com/liberland/liberland_substrate


### Team LinkedIn Profiles 

- https://www.linkedin.com/in/balazs
- https://www.linkedin.com/in/djstern
- https://se.linkedin.com/in/filip-k%C3%A4lebo-

## Development Status 

We have already started to develop our chain, links:
- https://github.com/liberland/liberland_substrate | Our current chain repository
- https://testnet.liberland.org | Our public frontend with support for the polkadot.js wallet


## Development Roadmap :nut_and_bolt:

We aim to have a production ready system in 5 months, our chain will have the functionality to serve 


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


| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License |  MIT |
| 0b. | Documentation | We will provide both inline code documentation as well as user guides that shows how people can interact with our pallets and chain |
| 0c. | Testing Guide | We will have test files for all mayor functions, more about our testing procedure can be found under the testing section  |
| 0d. | Docker | We will provide a Dockerfiles that can be used to run our node and also test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish a detailed article, walking a user through all functionality and features.)
| 1. | Substrate chain | We will customize a substrate based code base and add our custom pallets |  
| 2. | LLM module | We will create substrate pallet to handle the distribution and inflation of the LLM currency |  
| 3. | Public Veto Module | We want our users to utilize our chain to have election and vote using a pallet  |  
| 4. | Liberland Identity Pallet | We will create a substrate pallet that will allow accounts to have different account roles | 
   
   
   
#### Liberland Identity Pallet  
Liberland's on-chain governance is tailor to serve a nation state, therefor we need functionality for users to be citizen, e-residence, assembly member, minister and so on. We will fork the identity pallet from Parity and rewrite it to fit our custom needs, in order to properly take part of the governance system.
More documentation about Liberland's identity pallet can be found here:           
https://github.com/liberland/liberland_substrate/blob/main/docs/liberland/identity.md    



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
| 1. | Land owner Pallet | We will create a pallet that will manage on-chain assets for land ownership |  
| 2. | Metaverse integration Pallet | We will create a substrate pallet that interacts with our Metaverse|
| 3. | Company Registration Pallet | We will create a substrate pallet that allows anyone that is holding LLM to incorporate a company | 


We have currently had a very talented architect firm design and create our metaverse, that you can find more information about here:
https://world.liberland.org/

Our metaverse is currently being used for Virtual Reality Based conferences and social gatherings.



## Future Plans

Liberland blockchain will be the first candidate for digital decentralized nation states. Allowing the government to execute very similar to how a modern a voting based DAO(Decentralized autonomous organization) is.

### Long term vision

The Liberland blockchain is a project for the long term. We aim to onboard our current user base, which is currently over half a million users to use our chain for the majority of Liberland's e-government services.

## Additional Information  

**How did you hear about the Grants Program?** Our team members are familiar with both the Web3 Foundation and Parity's amazing work.

Liberland's blockchain has not applied for any other grants at current moment.

Read more about Liberland here:
- https://liberland.org   
- https://en.wikipedia.org/wiki/Liberland   

