# W3F Open Grant Proposal



* **Project Name:** PolkaMusic
* **Team Name:** PolkaMusic
* **Payment Address (BTC):** 3NQASZ1jJHsWVo6xDdAxyzWWu67HpfRr5u

## Project Overview :page_facing_up: 

### Overview

PolkaMusic is a substrate based public chain crafted exclusively for operating decentralized music businesses on blockchain. Envisioned as a 360 infrastructure for decentralized music, music entrepreneurs can not only create their own micro-economy for their music platform, but also leverage the ever growing list of features such as NFT, crowdfunding, decentralized storage and more. PolkaMusic also allows existing music blockchains to connect to the Polkadot ecosystem in order to interconnect siloed music economies. 

### Project Details 
**Architecture**

PolkaMusic is based on Substrate 2.0 and the Polkadot. As a first step, a “Smart Streaming Platform (SSP)” WASM Module will be created that allows music entrepreneurs to initialize an instance of the SSP Module resulting in genesis of a brand new SSP microeconomy that rewards the artists autonomously. While initializing the module, the SSP developer will be able to customize deployment parameters such as token name, initial balance, inflation setting, etc.

<p align="center">
  <img src="https://user-images.githubusercontent.com/76401865/112501546-5896c080-8daf-11eb-90fb-92e2e1b2949e.png" width="700" title="hover text">
</p>

 
**$SSP_Token** - When a Smart Streaming Platform initializes the SSP WASM Module, the platform can issue its own token that can be used for royalty payments, membership fee and internal governance.

**Custom Inflation Logic** - In order to pay the artists in $SSP_Token, a daily reward pool must be created that results in inflation of $SSP_Token supply. 

**Smart Record Contracts (SRC)** - Artists can create Smart Record Contracts for each song, containing meta data such as song name, license and the wallet information of multiple stakeholders.

**Stream Reports** - Every stream on the frontend should be recorded on the blockchain, along with details such as the smart_record_contract_id, play_time and consumer_id.

**Royalty Splitter** - Whenever a payment is made to a Smart Record Contract, the payment is automatically split between the constituent band member’s wallets based on weights assigned during SRC creation.

**Autonomous Royalty Payments** - Processes the stream reports in a rolling 24 hours period by autonomously calculating the play_time against the usage of the whole platform in the past 24 hours and paying out of the reward pool. 

The current version of PolkaMusic.io hosts a fully functional streaming platform that will connect to the SSP WASM Module. 
We also have an ecosystem of Smart Streaming Platforms & blockchains that are ready to connect to PolkaMusic in the following fashion.

<p align="center">
  <img src="https://user-images.githubusercontent.com/76401865/112500045-0b661f00-8dae-11eb-8a24-e9d015e50019.png" width="800" title="hover text">
</p>

### Ecosystem Fit 

The music industry is complex with a lot of revenue streams and middle-men. With PolkaMusic, we will focus on digital streaming, which is the most dominant mode of listening in the current era. The current royalty payment infrastructure is designed for CD-era, with royalty payouts taking about 1-6 months on the lower end to about 2 years on the higher end, and there's no verifiable transparency. In case the song is registered with a rights society such as ASCAP, digital platforms like Spotify actually fill a spreadsheet in order to report the streams, which is then processed through legacy systems and databases, none of which are efficient. Digital music streaming warrants a reimagined infrastrucutre that is able to process royalties frequently, accurately and transparently, and all this can be done through an autonomous blockchain system. PolkaMusic aims to be the public "foundation" which can be used by anybody to create a transparent music and video streaming service.

There are currently no other projects in the Substrate ecosystem that are solving this problem. Audius.com is one project on Ethereum that is focused on decentralized music, however, PolkaMusic is being built in a way so that anybody can spin up a project like Audius.com using PolkaMusic. These "Smart Streaming Platforms" (SSP) will have their own unique micro-economy with its own native token. Developers can come up with innovative economic design to create value on the front-end. In addition to this, the SSPs can also integrate more modules that will be made available publicly on a regular basis. 

## Team :busts_in_silhouette:

### Team members
* Phalgun Shenoy
* John Fortner
* Thandile Nododile

### Contact
* **Contact Name:** Phalgun Shenoy
* **Contact Email:** shenoy@bitcoinmusic.org
* **Website:** www.polkamusic.io / www.bitcoinmusic.org 

### Legal Structure 
* **Registered Address:** -
* **Registered Legal Entity:** The team has no legal entity now, however, the foundation register is in processing in Singapore.

### Team's experience
### Phalgun Shenoy
* B.E. Computer Science
* 4 years of experience in designing blockchain architecture & microeconomy.
* A content creator on YouTube with 20+ million views.
* Founder of bitcoinmusic.org, an industrial grade NFT protocol for the industry.
* Hosting the Polkadot India Hackathon 2021. 

### John Fortner
* Former US Air Force Avionics Technician
* Baccalaureate Degree in Computer Science
* Experience in developing music blockchain using Graphene blockchain framework
* Full-stack Developer with Rust, C# and Typescript skills.
 
### Thandile Nododile
* Polkadot Ambassador - South Africa
* BSc. Mathematics & Statistical Sciences with Computer Sciences 
* Experimenting with substrate framework through PolkaMusic
* Rust language enthusiast.


### Team Code Repos
* PolkaMusic -> https://github.com/polkamusic/PolkaMusic
* BitcoinMusic -> https://github.com/bitcoinmusicorg/bitcoinmusic-core/tree/testnet

### Team LinkedIn Profiles
* https://www.linkedin.com/in/shenoyphalgun/
* https://www.linkedin.com/in/johnfortner/ 
* https://github.com/nododile 

## Development Status :open_book: 

* Our reference Smart Streaming Platform front-end is live on www.polkamusic.io
* PolkaMusic substrate testnet is currently being run for development 

## Development Roadmap :nut_and_bolt: 

### Overview
* **Total Estimated Duration:**  6 weeks
* **Full-Time Equivalent (FTE):**  4 
* **Total Costs:** 25000 USD

### Milestone 1 Creation of Smart Streaming Platform WASM Module and integrating with reference front-end on PolkaMusic.io
* **Estimated Duration:** 6 weeks
* **FTE:**  4
* **Costs:** 25000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 / MIT / Unlicense |
| 0b. | Documentation | Documents containing the description of whole architecture design for SSP WASM Module. |
| 0c. | Testing Guide | We will provide a full test guide for SSP WASM Module. | 
| 1. | Node Repo | Complete the deployment of the basic public PolkaMusic Substrate chain. |  
| 2a. | SSP Token | Sub module of the SSP Module that's responsible for creation of a new token for SSP, to be used for royalty payment, membership and governance.  |  
| 2b. | Custom Inflation Logic | The $SSP_Token will be inflationary, and the inflation rules can be set using this sub-module |  
| 2c. | Smart Record Contracts | Every song that is uploaded to the SSP will be referenced to a Smart Record Contract on-chain, containing meta data such as song name, singer, writers and the payment information of the band members. |  
| 2d. | Stream Reports | Every stream on the frontend will be reported to the blockchain via API with details including smart_record_contract_id, play_time and consumer_id. |
| 2e. | Royalty Splitter | Whenever a payment is made to a Smart Record Contract, the payment is automatically split between constituent band member’s wallets based on weights assigned during SRC creation. |
| 2f. | Autonomous Royalty Payments | This submodule will continuously process stream reports 24hrs from the reporting time by calculating the play_time against the global play_time of the SSP and pay out appropriate amount of $SSP_Token to the SRC. |
| 3. | API | The front-end of SSP will send stream reports to the blockchain via API |



...


## Future Plans

We plan to make PolkaMusic the go-to protocol for music businesses wanting to adopt blockchain technology, or existing music blockchains to connect with Polkadot ecosystem and leverage the interoperability of music economies.
In the immediate short term, we have the following 3rd party SSPs/blockchains integrating into PolkaMusic once we are live:
* OneMusic.space - Works similar to soundcloud, tokenized via ONEM tokens.
* Kuting.club - A Chinese Smart Streaming Platform with KUTING tokens.
* BitcoinMusic.org - An industrial grade NFT platform for the Music industry, connecting to PolkaMusic to leverage PolkaBTC. 

The long term features would include:

* Build bridges to traditional digital streaming platforms such as Spotify, Youtube. 
* A fundraising platform that distributes royalties to the fundraising participants via the bridge.
* Artist Coins - Artists can create their own coins for their own creative usecases.
* Store - A store contract to sell products with Artist Coins as payment. 


## Additional Information :heavy_plus_sign: 

* Are there are any teams who have already contributed (financially) to your project?

No. This is currently a self-funded project.

* Do you have a community of users or open-source developers who are contributing to your project?

We have attracted 3 open-source developers. Apart from this, we are well connected in the music industry and we have 100+ artists willing to upload their songs.  
