# Odyssey - Momentum

- **Team Name:** Odyssey B.V.
- **Payment Address:** 0x826fde427152d9fc0bf045dd858baa2de06b383b (USDC) 
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

### Overview

#### Tagline: Staking in NFTs

Odyssey is building Momentum, an open source, metaverse for digital societies. 

The Momentum stack enables people to jointly build their own 3D worlds as well as develop and integrate plugins to unlock a wide range of decentralized 3D social action medium use cases. 

The Momentum network enables these different worlds, activities and people to come together, without the need for a middleman or land sales. For this purpose, we built the DRIVE parachain, which has three main functions: 
- On-chain ownership and coordination through NFTs of nodes, 3D worlds, sub-spaces and personal profiles.
- On-chain connections between people, worlds and spaces and social capital allocation through staking in worlds, sub-spaces and people.
- On-chain earning models for example for worlds and plugins.

Momentum sees the metaverse as a novel communications medium and provides the infrastructure for a new user experience, where social, economic and cultural activities, both on-chain and off-chain are intertwined and strengthen each other. With **Kusama (and optionally Polkadot) as its primary digital public infrastructure**, Momentum is co-created, governed and owned by its users. 

DRIVE provides the users in the network with a universal way to turn their connections and activities into social capital and earnings. The goal is to enable users of these digital societies to thrive, by prioritizing resource allocation (e.g. funding, talent, knowledge) in general, optimizing network effects (e.g. connectivity, serendipity, virality), and a better user experience (e.g. search results, timelines and suggestions) based on the user's skin in the game. 

We must build a parachain with on top of that a number of customized Substrate pallets. The functionality subject of this aplication is Staking in NFTs.

1. **Stake Pallet**  
Within Momentum User Profiles, Worlds, Spaces and Subspaces are NFT's. The Stake pallet is going to add a variety of staking options that extend the current Proof of Staking mechanisms. This is done by providing functionality of staking in NFTs (or possibly any asset) in order to incentivize the creators/ owners and reward the stakers.

*For the Stake pallet it is most likely that we would need to write a custom NFT pallet or a pallet that complements the Uniques pallet. As a result our delivery might include mutiple pallets.

### Project Details

### Momentum Stack

The Momentum stack as displayed in the figure below is already [operational](https://kusama.momentum.xyz/) and completely [open source](https://github.com/momentum-xyz), except for the DRIVE 'node', which is under development.

![Momentum stack layers](https://drive.google.com/uc?id=1y1mrEyELIMRoJzClmhP-V8LCvn1qLzDk)  
*figure 1*

The scope of this project is the development of custom Stake pallets (marked green in figure 1). Besides that, it is most likely that we would need to write a custom NFT pallet or a pallet that complements the Uniques pallet.

*Note: This information below contains an early preview of the Stake Pallet and might be subject to changes.*
 

#### Stake Pallet
The Stake pallet is going to add a variety of staking options that extend the current Proof of staking mechanisms.  
![stake pallet overview](https://drive.google.com/uc?id=1TFgfgSwDOrfrTR4qE-7OoXyOaqQI4DO0)  
*figure 2*

It's not clear at the given time if the Stake Pallet will be one or more pallets. It will take care of the staking on NFT's and making rewards available to the stakers.

**Publicly Exposed Methods**  

```Rust
pub fn stake_on(origin: OriginFor<T>, asset: T::Asset , controller: T::AccountId, stash: T::AccountId, amount: T::Balance) -> DispatchResultWithPostInfo
```   

```Rust
pub fn unstake_on(origin: OriginFor<T>, asset: T::Asset, controller: T::AccountId, stash: T::AccountId, amount: T::Balance) -> DispatchResultWithPostInfo
```

```Rust
pub fn set_controller_of(origin: OriginFor<T>, asset: T::Asset, stash: T::AccountId, controller: T::AccountId, new_controller_wallet: T::AccountId) -> DispatchResultWithPostInfo
```

```Rust
pub fn set_stash_of(origin: OriginFor<T>, asset: T::Asset, controller: T::AccountId, stash: T::AccountId) -> DispatchResultWithPostInfo
```

```Rust
pub fn set_admin(origin: OriginFor<T>, new_admin_addr: T::AccountId) -> DispatchResultWithPostInfo
```

```Rust
pub fn get_rewards(origin: OriginFor<T>, asset: T::Asset, controller: T::AccountId, stash: T::AccountId) -> DispatchResultWithPostInfo
```

```Rust
pub fn expired_rewards(origin: OriginFor<T>) -> DispatchResultWithPostInfo
```

**Runtime Storage**  

*Asset Info*  
Info regarding the asset that is being staked to.  
```Rust
pub type AssetInfos<T> = StorageDoubleMap<_, Twox64Concat, T::AssetCollId, Twox64Concat, T:AssetId, AssetInfo<T::Balance, T::CurrencyId>, ValueQuery>;
```

*Ledger info*  
Ledger with general information about a controller account.  
```Rust
pub type LedgerInfo<T> = StorageMap<_, Twox64Concat, T::AccountId, Ledger<T::Balance, T::CurrencyId>>
```

*Current era*  
Info about the current era.  
```Rust
pub type CurrentEra<T> = StorageValue<_, EraInfo, ValueQuery>
```

*Next era starting block*   
Info about in which block the next era will start  
```Rust
pub type NextEraStartingBlock<T: Config> = StorageValue<_, T::BlockNumber, ValueQuery>
```

*Storage Version*  
Info about the storage version of this pallet.  
```Rust
pub(crate) type StorageVersion<T> = StorageValue<_, Version, ValueQuery>
```

**Use Case Diagram**  
![Use Case Diagram Stake Pallet](https://drive.google.com/uc?id=1Q3fn92yZ0dRwTDG5s9sJPXTN4BU3NYyB)   
*figure 3*

**Out-of-scope**  
This project will not produce a parachain nor any of the non-token related or visual aspects. We have extensive backing from well-known Web3 builders and ecosystem leaders as well as the European Union for this part. 


### Ecosystem Fit
We received two grants of the KSM treasury to build ([1](https://kusama.polkassembly.io/motion/436)) and after succesful launch expand ([2](https://kusama.polkassembly.io/motion/499)) the [Kusamaverse](https://kusama.momentum.xyz/). The Kusamaverse functions as a town hall for the Dotsama ecosystem. **Momentum is the embodiment of an overarching vision** enabling different worlds, activities and people to come together, without the need for a middleman or land sales. Momentum is co-created, governed and owned by its users.
  
- Momentum is using Kusama (and optionally Polkadot) as its primary digital public infrastructure
- Momentum will be launched as a parachain on Kusama (and optionally Polkadot in a later stage)
- Momentum has an extensive community that actively participates in building Momentum. 200 is an estimate of active contributors based on GitHub commits, feedback during sessions and idea generation. Our community is over 7,000 people strong being a mix of web3 and non-web3 participants.
- Momentum provides a new ecosystem with business cases for builder teams, individual developers, hosting companies, and tech- and non-tech entrepreneurs.
- Momentum provides a bridge between the WEB2 and WEB3 community.


What makes us different: 
We see the metaverse as a new social communications medium and the potential driver for mainstream adoption of web3 technologies. The potential is designing and launching entirely new user experiences, rather than doing the web2/2d consumer experience and slapping a 3D background on it (a.k.a. a recorded concert in Fortnite that you can watch/consume or selling land). When unlocking the dotsama/ next generation of on-chain applications we enable consumers to become co-creators.


## Team :busts_in_silhouette:

### Team members
Odyssey  has over 30 people working on Momentum and is still growing. Odyssey works in tracks with dedicated team members. The Token Track Team will be primarily responsible for building the Substrate Pallets. 

OVERALL ARCHITECT: Anton Starikov (CTO)

**TOKEN TRACK TEAM**   
- TRACK LEAD: Dave Hoogendoorn
- RUST DEVELOPER: Denis Cavalli 
- RUST DEVELOPER: Raghuvar Vijayakumar
- WEB3ANALYST: Tim Jansen  

*All team members are solely dedicated to the token Track.*


### Contact

- **Contact Name:** Dave Hoogendoorn
- **Contact Email:** dh@odyssey.org
- **Website:** https://odyssey.org/

### Legal Structure

- **Registered Address:** Westerhaven 13-7, 9718AW Groningen, The Netherlands
- **Registered Legal Entity:** Odyssey B.V. (CoC 66693640)

### Team's experience

*Anton Starikov* has been architecting and leading development of software solutions for over 20 years in academic (computational physics) and industrial (Shell, AVL) settings. In addition, he was working and consulting on the topics of optimization on various levels (from hardware level through software up to the processes). Currently working as CTO of Odyssey, Anton is performing the role of platform architect.

*Dave Hoogendoorn* is an experienced programme manager and has been active in the space for over 5 years. Dave is co-founder of WEB3SCAN ([W3F Grants WAVE 1 participant with Polkascan](https://medium.com/web3foundation/web3-foundation-grants-wave-one-winners-2a9cd39f1fbc)), former Kusama Treasury Council member (Polkascan multi-sig) and previously held a board position at the [Polkascan Foundation](https://polkascan.org/). Dave has been following Substrate and the Dotsama ecosystem from the early beginnings. 

*Denis Cavalli* is a Senior Rust Software Engineer with a background on embedded systems and R&D. Since 2021 engaged with the WEB3 environment, has experimented on Ethereum/Solidity, Solana and worked professionally with Helium in 2022. Now is focused on building the metaverse that will empower people collaboration on the Dotsama ecosystem, using Substrate as the main framework.

*Raghuvar Vijayakumar* is a Rust Software Engineer with  experience in building Custom Substrate Pallets and  optimizing runtime storage. In addition to this Raghuvar has experience in developing smart contracts using solidity.      

*Tim Jansen* is a Polkadot Ambassador and has been working on crypto and blockchain for over 7 years. He has developed smart contracts on Ethereum, implemented decentralized storage solutions such as swarm and IPFS, consulted on blockchain at [ISO](https://www.iso.org/member/2027.html), audited smart contract code of [TNO](https://www.tno.nl/en/about-tno/), launched several live applications using blockchain for auditing, supply chain and SSI at Visma and has a deep understanding of cryptography including zero knowledge proofs. In his free time he researches and experiments with new crypto technologies.


### Team Code Repos

- https://github.com/momentum-xyz
- https://github.com/momentum-xyz/drive (private for now)

GitHub accounts of our team members:

- https://github.com/deniscavalli


### Team LinkedIn Profiles (if available)

Organisation:
- https://www.linkedin.com/company/odysseyprogram

Team:
- https://www.linkedin.com/in/deniscavalli/
- https://www.linkedin.com/in/raghuvarvijayakumar/
- https://www.linkedin.com/in/timjanssen89/
- https://www.linkedin.com/in/antst/
- https://www.linkedin.com/in/dhoogendoorn/

## Development Status :open_book:
Momentum is currently built as can been seen on [GitHub](https://github.com/momentum-xyz). Momentum Release notes are regularly updated and can be found [here](https://momentum.xyz/release-notes). 

Treasury Proposals regarding the Kusamaverse can be found here:
- [#436 Building the Kusamaverse - milestone 1](https://kusama.polkassembly.io/motion/436)
- [#499 Building the Kusamaverse - Milestone 2](https://kusama.polkassembly.io/motion/499)

Our [Discord Channel](https://discord.com/channels/667280778731978753/882923345073541171) and [Twitter Channel](https://twitter.com/MomentumXYZ) are used as general means of communication towards the Momentum and Kusamaverse community. It provides lots of information about community engagement, new developments and improvements.

Academic references:   
- [Odyssey Momentum research project](https://www.rug.nl/society-business/centre-for-entrepreneurship/research/odyssey/odyssey-momentum-research-project?lang=en) by the University of Groningen, researching how teamwork is related to the success of innovative and entrepreneurial projects in context of “Odyssey Momentum”, the world’s biggest online Blockchain & AI Hackathon held in July 2021.

Other channels are [YouTube](https://www.youtube.com/Intobitcoin) and [our foundation website ](https://momentum.xyz/).


## Development Roadmap :nut_and_bolt:

### Overview

- **Estimated duration:** 6 Weeks
- **FTE:**  2,5
- **Costs:** 30,000 USD

_Note: Please follow the disussion [github](https://github.com/w3f/Grants-Program/pull/1221) for details on the costs._   


### Milestone 1 Stake Pallet 

- **Estimated duration:** 6 Weeks
- **FTE:**  2,5
- **Costs:** 30,000 USD

This milestone delivers at least one (but maybe more) pallets to enable staking in Momentum's User Profile, World, Space and Subspace NFTs (or possibly any asset) in order to incentivize the creators/ owners and reward the stakers.

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a.|License|GNU General Public License v3.0.|
| 0b.|Documentation|We will provide both inline documentation of the code and a basic tutorial that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works.|
| 0c.|Testing and Testing Guide|We will provide both inline documentation of the code and a basic tutorial that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works.|
| 0d.|Docker|We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.|
| 1a.|Basic stake pallet | Storage V1 defined and implemented as described in Milestone 1|
| 1b.|Basic stake pallet | Staking / Unstaking on NFTs operational|
| 1c.|Basic stake pallet | Handling Rewards operational|
| 2a.|Extended stake pallet | Storage V2 defined and implemented as succesor of V1|
| 2b.|Extended stake pallet | Fractionalized NFTs implemented|
| 2c.|Extended stake pallet | Configurable parameters and rewards operational. Staking rewards are divided using some formula using configurable parameters per entity, that sets the ratio  between the staker, the entity that has been staked in, and the commission an entity received and the amount received by the Treasury.|
| 2d.|Management pallet | Optional pallet for managing the parameters and rewards and/or managing the payment of the rewards.|
| 3a.| Generalized stake pallet| Enabling data type configuration to enable users to configure their data type at instantiation on the runtime.|
| 4a.| Generalized stake pallet| Delivery of the Stake pallet (maybe more than one) enabling Staking on assets (NFTs) and rewards management including documentation.|
| 4b.| Benchmarking report(s)| Benchmarking reports available|
| 4c.| Pallet(s) in production| Pallet integrated on the parachain runtime as an example of the first implementation of the NFT stake pallet, enabling active maintenance of the repo based on lessons learned.|


## Future Plans

Odyssey is planning a 25+ web3 community teams 4-week hackathon in May 2023, with leading Dotsama parachain and ecosystem parties, as part of a 9 month innovation program. During this program teams are guided to build new user experiences using Momentum and Dotsama tech and test how the DRIVE token strengthens their usecase. In September 2023 we will launch our DRIVE mainnet as a parachain on Kusama. 

In the coming  years we will keep investing in the Kusamaverse and momentum ecosystems, meaning:

- Stimulate and support the creation of plugins. 
- Expand our core stack based on community insights.
- Invest in expanding the number of world node owners, support new initiatives and move to mainstream adoption in the coming years.

Momentum provides a novel social communications medium and provides the infrastructure for a new user experience where social, economic and cultural activities, both on-chain and off-chain are intertwined. In these early beginnings we are only scratching the surface of what is possible. But we are convinced we are at the start of an exciting journey and with Momentum we are in for the long run.


## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?**  
We have Personal recommendations from people at Parity including Raul Romanutti and Daniel Cake-Baly. We also have relations with other parties that have successfully applied for WEB3 Grant 

We have not yet applied for any grants with the WEB3 Foundation.

**Other information**   
Last but not least, we are proud to we have the [Sovereign Nature Initiative](https://sovereignnature.com/) organising a Hackathon in Momentum for the [Kenya Wildlife Trust](https://www.kenyawildlifetrust.org/). Momentum enables true collaboration happening in real-time among 13 teams spread over 5+ countries. SNI has been hosting events in Momentum up to the 9th of November. Check it out on [SNI World](http://sni.momentum.xyz).
