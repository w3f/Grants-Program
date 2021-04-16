# W3F Open Grant Proposal



* **Project Name:** PolkaMusic
* **Team Name:** PolkaMusic
* **Payment Address (BTC):** 3NQASZ1jJHsWVo6xDdAxyzWWu67HpfRr5u

## Project Overview :page_facing_up: 

### Overview

PolkaMusic is a substrate based public chain crafted exclusively for operating decentralized music businesses on blockchain. While PolkaMusic.io is a decentralized streaming platform by itself, it is envisioned as a 360 infrastructure for decentralized music using which music entrepreneurs can not only create their own micro-economy for their music platform, but also leverage the ever growing list of features such as NFT, crowdfunding, decentralized storage and more. PolkaMusic also allows existing music blockchains to connect to the Polkadot ecosystem in order to interconnect siloed music economies and enables interoperability, wherever possible. 

PolkaMusic is trying to solve 3 major problems that is unique to the music industry:

1) Pro Rata Royalty Payment Model: Due to the computation complexity, on Spotify and Apple Music, rights-holders are paid according to market share; how their streams stack up against the most popular songs in a given time period. The pro rata model favors artists/tracks with the biggest amount of played streams, regardless of if they are created by a large number of users with few plays or a smaller number of users who have played them repeatedly. The user centric model favours artists with smaller number of streams, especially when the overall stream count is smaller. Here's a study that compares Pro Rata and User Centric Distribution Models:  [Study](https://www.fim-musicians.org/wp-content/uploads/prorata-vs-user-centric-models-study-2018.pdf)

2) Lack of transparency: You cannot get actual data, especially financial data, from centralized streaming platforms. Data frauds can happen where certain artists are favored to receive fake streams in order to get a favorable position on music ranking charts. This combined with Pro Rata Model puts smaller artists at risk of losing royalty payments to popular artists. With lack of live events due to Covid pandemic, smaller artists, who otherwise are dependent on offline gigs, are increasingly dependent on online platforms for their livelihood. Here's an investigation into a popular platform called "Tidal" for data fraud -> [Link](https://variety.com/2020/digital/global/tidal-jay-z-beyonce-data-fraud-investigation-in-norway-1234631663/)

3) Digital blind spots: Bad metadata have contributed to a "royalty black box" of unpaid money, thought to be somewhere at least in the millions. Every platform and royalty collection agencies have their own proprietary database, and sometimes there's a mismatch of database structure which leads to corruption of meta-data, and organizations do not really know who to pay. Such inefficiencies result in unidentified rights owners and unattributed royalties.

All the above problems can be solved using the blockchain technology with no middlemen. PolkaMusic will enable:

1) User Centric Model: A user's royalty pool allocation will be distributed to the artists she's actually listening to. This way, livelihood of smaller artists are preserved.

2) Transparency: Every stream is reported to the off-chain worker which calculates payments as per the user-centric model and reports to the SSP Smart Contract for further processing. The royalty payments can be verified by anyone via the block explorer. 

3) Smart Record Contracts: Smart Record Contracts are smart versions of legacy "Record Contracts", which consists of all the meta-data about the music, including ownership splits. Smart Record Contracts live on the blockchain, accessible by anyone, solving the "royalty black box" issue. Anybody having any doubts about who to pay for a particular song can always refer to the public database and even send money to it, which will automatically split such payments to constituent copyright holder's wallets. 

In addition to solving the above mentioned fundamental problems in the music industry, PolkaMusic can also process royalties every 24 hours, which is unheard of in the traditional music world due to inefficiencies in the payment infrastructure. 

We want to revolutionize the back-end of the music world, so anybody who wants to imitate the business model of PolkaMusic doesn't have to jump through the hoops of forking and creating own blockchain, but can just initilize the "Smart Streaming Platform" smart contract with custom token name and inflationary properties through an easy GUI, instantly spinning up a new micro-economy for their own streaming business on the blockchain. The new Smart Streaming Platforms can leverage the public "Rights Management" infrastructure of PolkaMusic for payment purposes, though the artist/rights holders have to individually permit the listing of their songs on these SSPs as they'll pay in their own tokens. 

### Project Details 
***Architecture***

<p align="center">
  <img src="https://user-images.githubusercontent.com/76401865/113667186-09fdf600-96ce-11eb-970c-4f70c5895c9f.jpg" width="1500" title="hover text">
</p>

**Rights Management Pallet**: The “Rights Management” Pallet is central to the whole PolkaMusic ecosystem and holds the "rights" information of a music in the form of "Smart Record Contract" (SRC). SRCs are accessible publicly and artists can create it via the Rights Management Portal. Whenever any royalty needs to be processed for a song, the SRC's unique identifier (computed multihash of the original music file uploaded) will be used to retrieve the ownership shares. SRCs also doubles up as a copyright for the music as it is timestamped at the time of submission, and such proof on a public blockchain is increasingly being accepted in various jurisdictions across the world. The data structure of a Smart Record Contract is as follows: 
```
album_meta{
album_artist: string
album_producer: string
album_title: string
album_type: string
c_line: string
country_of_origin: string
display_label_name: string
explicit_: boolean
genre_1: int
master_label_name: string
p_line: string
part_of_album: boolean
release_date: int
release_year: int
sales_start_date: int
upc_or_ean: boolean
}

comp_meta{
PRO: string
composition_title: string
publishers: Array
third_party_publishers: boolean
writers: Array
created: timstamp
}

distributions{
distributions_comp: {payee: "username", bp: 10000}
distributions_master: {payee: "username", bp: 10000}
}

track_meta{
ISRC: ""
genre_1: int
genre_2: int
p_line: string
samples: boolean
track_artists: Array
0: {artist: "artist_name", aliases: "alias"}
1: {artist: "artist_name", aliases: "alias"}
track_duration: int
track_no: int
track_producer: string
track_title: string
track_volume: 0
track_title: string
ipfs: "ipfs_hash"
}
```


**Royalty Splitter Pallet**: Any royalty payment that needs to be processed for a song will go through the Royalty Splitter, which retrieves the ownership shares from Smart Record Contracts and splits the payments to multiple stakeholder's wallets based on ownership weights. 

**Quorum Pallet**: In order to deter bad actors and to thwart their efforts, Quorum Pallet will let users vote on SRCs, which will increase/reduce the trust score of an SRC/artist. 

***Smart Streaming Platform Smart Contract*** 
 
**$SSP_Token** - When a Smart Streaming Platform initializes the Smart Contract, the platform can issue its own token that can be used for royalty payments, membership fee, tipping etc.

**Custom Inflation** - In order to pay the artists in $SSP_Token, a daily reward pool must be created that results in inflation of $SSP_Token supply. The inflation percentage can be customized during the initialization. 

**Smart Record Contracts (SRC)** - Artists can create Smart Record Contracts for each song, containing meta data such as song name, license and the wallet information of multiple stakeholders.

**Royalty Dispatcher** - After processing the user-centric royalty computation using stream reports, the off-chain workers will submit a transaction to the Royalty Dispatcher, which, after a fail-safe check, dispatches royalty payment from the inflationary reward pool to the royalty splitter pallet. 

***Off-chain Workers*** 

**Stream Reports** - The stream reports saved in Smart Streaming Platform's (SSP) centralized database will be retrieved for further processing to determine the royalty payments to be made.

**User-Centric Royalty Computation** - Processes the stream reports every 24 hours by autonomously calculating using following metrics:
1) The play_time of a particular Stream Report by the user.
2) The user's total play_time in the last 24 hours
3) The total royalty reward pool available.
4) The total number of full-time listeners on the SSP (a user is considered full-time listener if she streams 3600 sec of music).

The available reward pool (from the inflation) is split between all the listeners on the SSP (as a quota), with 
`max_quota = daily_reward_pool / total_full_time_listeners`. For every stream report, the royalty will be paid from listener's quota, and is calculated as `stream_report_royalty = (stream_report_play_time / total_user_play_time) * assigned_quota`

The current version of PolkaMusic.io hosts a fully functional streaming platform that will connect to the SSP Smart Contract instance. 
We also have an ecosystem of Smart Streaming Platforms & blockchains that are ready to connect to PolkaMusic in the following fashion.

<p align="center">
  <img src="https://user-images.githubusercontent.com/76401865/113570453-fac96a80-9631-11eb-8725-a5c2a0b6c390.png" width="1000" title="hover text">
</p>

### Ecosystem Fit 

The music industry is complex with a lot of revenue streams and middle-men. With PolkaMusic, we will focus on digital streaming, which is the most dominant mode of listening in the current era. The current royalty payment infrastructure is designed for CD-era, with royalty payouts taking about 1-6 months on the optimistic-end to about 2 years in the worse-case scenario, and there's no verifiable transparency. In case the song is registered with a rights society such as ASCAP, digital platforms like Spotify actually fill a spreadsheet in order to report the streams, which is then processed through legacy systems and databases, none of which are efficient. Digital music streaming warrants a reimagined infrastrucutre that is able to process royalties frequently, accurately and transparently, and all this can be done through an autonomous blockchain system. PolkaMusic aims to be the public "foundation" which can be used by anybody to create a transparent music and video streaming service.

There are currently no other projects in the Substrate ecosystem that are solving this problem. Audius.com is one project on Ethereum that is focused on decentralized music, however, PolkaMusic is being built in a way so that anybody can spin up a project like Audius.com using PolkaMusic as an infrastructure. These "Smart Streaming Platforms" (SSP) will have their own unique micro-economy with their own native token. Developers can come up with innovative economic design to create value on the front-end. In addition to this, the SSPs can also integrate more pallets that will be made available publicly on a regular basis. 

## Team :busts_in_silhouette:

### Team members
* Phalgun Shenoy
* John Fortner
* Suraj Kumar
* Pranshu Rastogi

### Contact
* **Contact Name:** Phalgun Shenoy
* **Contact Email:** shenoy@polkamusic.io
* **Website:** https://polkamusic.io / https://bitcoinmusic.org 
* **Telegram:** @polkashenoy
* **LinkedIn:** https://www.linkedin.com/in/shenoyphalgun/

### Legal Structure 
* **Registered Address:** -
* **Registered Legal Entity:** The team has no legal entity now, however, the foundation is planned to be registered in Singapore.

### Team's experience
### Phalgun Shenoy
* Polkadot Ambassador - India
* Hosting the Polkadot India Hackathon 2021. 
* 4 years of experience in designing blockchain architecture & microeconomy.
* A content creator on YouTube with 20+ million views.
* B.E. Computer Science
* Founder of https://bitcoinmusic.org, an industrial grade NFT protocol for the industry.

### John Fortner
* Former US Air Force Avionics Technician
* Baccalaureate Degree in Computer Science
* Experience in developing music blockchain using Graphene blockchain framework
* Full-stack Developer with Rust, C# and Typescript skills.

### Suraj Kumar
* Computer Science Engineer
* Waves Tech Ambassador
* Specialities: Javascript, Rust, Python & C++
 
### Pranshu Rastogi
* Bachelor of Technology (B.Tech.) Computer Science
* Blockchain developer - Hyperledger Fabric | Ethereum | Polkadot | SSI


### Team Code Repos
* PolkaMusic -> https://github.com/polkamusic/PolkaMusic
* BitcoinMusic -> https://github.com/bitcoinmusicorg/bitcoinmusic-core

### Team LinkedIn Profiles
* https://www.linkedin.com/in/shenoyphalgun/
* https://www.linkedin.com/in/johnfortner/ 
* https://www.linkedin.com/in/s5k0651/
* https://www.linkedin.com/in/rastogipranshu/

## Development Status :open_book: 

* Our reference Smart Streaming Platform front-end is live on https://polkamusic.io
* PolkaMusic substrate testnet is currently being run for development 
* The Rights Management Pallet is in the process of being built and public on [PolkaMusic Repo](https://github.com/polkamusic/PolkaMusic/blob/master/pallets/rmp/src/lib.rs)

## Development Roadmap :nut_and_bolt: 

### Overview
* **Total Estimated Duration:**  8 weeks
* **Full-Time Equivalent (FTE):**  4 
* **Total Costs:** 12000 USD

### Milestone 1 Creation of *Rights Management Pallet* and *Rights Management Portal* 
* **Estimated Duration:** 4 weeks
* **FTE:**  2
* **Costs:** 6000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 / MIT / Unlicense |
| 0b. | Documentation | Documents containing the data structure and guide to operate Rights Management Portal (RMP) in order to create a Smart Record Contract. |
| 0c. | Testing Guide | We will provide a guide wherein a user can create a SRC through the RMP and verify the data on the blockchain  | 
| 1. | Rights Management Pallet | Rights Management Pallet will have the data structure to store all the info regarding a music composition. SRC can be created through the extrinsic `rightsMgmtPortal.registerMusic(album_artist, album_producer, album_title .....)`. The complete list of arguments would be as per the [SRC data structure](https://github.com/polkamusic/PolkaMusic/blob/master/src_data_struct)|  
| 2. | Rights Management Portal | A GUI that lets the user enter the data and submit to the Rights Management Pallet in order to create a Smart Record Contract.  |  

The Rights Management Portal will have 2 modes and the mockups are linked below:

Simple Mode -> [Link](https://github.com/polkamusic/PolkaMusic/raw/master/RMP%20simple%20mode.pdf)

Advanced Mode -> [Link](https://github.com/polkamusic/PolkaMusic/raw/master/RMP%20advanced%20mode.pdf)

### Milestone 2 Creation of *Royalty Splitter Pallet* and *Front-end integration* 
* **Estimated Duration:** 4 Weeks
* **FTE:**  2
* **Costs:** 6000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 / MIT / Unlicense |
| 0b. | Documentation | Documents explaining the structure of Royalty Splitter Pallet and the streaming platform |
| 0c. | Testing Guide | We will provide a guide to test by streaming a song on the front end and have the royalty processed through the Royalty Splitter Pallet, and verify the result on the block explorer. | 
| 1. | Royalty Splitter Pallet | `royaltySplitter(to:src_ipfs,amount:u256,tokenId:u256)` For every request, Royalty Splitter Pallet will retrieve the SRC data, and split the incoming currency to its constituent owners based on the the ownership weights. |  
| 2. | Front-end | For every stream on the prototype frontend hosted on polkamusic.io, tokens are dispatched from the reward pool (a contract with $POLM tokens) to the Royalty Splitter, which will pay the artists as per the payment details in the SRC. |    
| 3. | Quorum Pallet Specification | A document outlining our mechanism to weed out the bad actors by introducing democratic trust scoring on submitted content |    

...


## Future Plans

After the milestones are completed, we plan to apply grants for Web3 Foundation General Grant or Substrate Builders Program during which we will be developing the following tems:

1) Off-chain worker which processes the stream reports from the front-end database to generate user-centric royalty payouts.
2) Smart Streaming Platform contract using which anybody will be able to issue a coin with its own inflationary properties, and payout artists accurately using that.
3) Permissioned File Storage (using NFTs for granting permission) to distribute content to various SSPs.

We plan to make PolkaMusic the go-to protocol for music businesses wanting to adopt blockchain technology, or existing music blockchains to connect with Polkadot ecosystem and leverage the interoperability of music economies.

In the immediate short term, we have the following 3rd party SSPs/blockchains integrating into PolkaMusic once we are live:
* https://OneMusic.space - Works similar to soundcloud, tokenized via ONEM tokens.
* https://kuting.club - A Chinese Smart Streaming Platform with KUTING tokens.
* https://BitcoinMusic.org - An industrial grade NFT platform for the Music industry, connecting to PolkaMusic to leverage PolkaBTC. 

The long term features would include:

* Integrate traditional digital streaming platforms such as Spotify, Youtube etc to communicate accurate data (from SRCs), publish music and collect royalties on blockchain through cryptocurrency, paid out to the SRC which will split the currency automatically to the constituent rights holders. 
* A fundraising platform that collects the royalties from mainstream platforms and distributes to the artist and the fundraiser participants.
* Artist Coins / NFTs - Artists can create their own coins/NFTs for their own creative usecases.
* Store - A store contract to sell merchandise/products with Artist Coins as payment. 


## Additional Information :heavy_plus_sign: 

Storage: When a user creates a Smart Record Contract, she will be asked for the music file as well as the album cover. These files are saved on a centralized storage at the moment as anybody can download the files from ipfs with no benefit to the artist. Artist can individually choose the SSPs she would like to distribute the songs to, or can upload with them directly, and refer to the SRC Address for royalty payment purposes. In the future, we will implement decentralized file storage through IPFS with Access Control List, a permissioned version of IPFS where access is controlled by programmable smart contracts that contain an Access Control List (ACL). The modified ipfs client will serve files to the requestor only if the permission is approved in the ACL. This offers transparent, public and verifiable access without a central controller. Control is always in the hands of the data owner, the smart contract author. Every SSP will be required to run a ACL-IPFS node of their own.

It must be noted that the above mentioned file storage mechanisms are based on high latency storage solutions and is for data transfer between the artist and the SSPs. The SSPs will have to maintain a local cache in order to serve files to the end user. 

Traditional Performing Rights Organizations: Every country has multiple local performing rights organizations who are running inefficient softwares with very high licensing costs. Such PROs can use a SSP Smart Contract instance to calculate royalties and send payments on the blockchain using currency of their choice. 

* Polkadot Buildathon Participation: 
PolkaMusic team will be participating in the Polkadot Buildathon event, during which we are implementing an NFT incentivization program where PolkaMusic streamers will receive free NFTs for the duration they listen for. The goals of the buildathon don't overlap with any of the milestones of the open-grant application. We will be transparent regarding the open-grant and the organizers/judges will be notified about this.

* Are there any teams who have already contributed (financially) to your project?

No. This is currently a self-funded project.

* Do you have a community of users or open-source developers who are contributing to your project?

We have attracted 3 open-source developers. Apart from this, we are well connected in the music industry and we have 100+ artists willing to upload their songs.  
