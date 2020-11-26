# Dwitter Censorship Resistant Microblogging 

* **Project:** Dwitter Censorship resistant Web3 Microblogging and Social Networking service

## Project Overview 
The projects serves a web3 replacement of Twitter, which has become the Internet standard for 330 million active users engaging in the creation of content as well as social interaction, political and journalistic review, news coverage and diplomatic representation of countries.

The platform has made it easy to pursue these means of communication using centralized instrastructure and services owned and operated by Twitter Inc. -- Parity's mission of launching the web3 in a decentralized manner aligns with the goal of including a version of the platform that relies on technology such as Polkadot human readable names and IPFS for self-hosted user content, providing uncensorable social content entirely in the users control.

### Overview

  * *Substrate framework modules and Polkadot-Node Interaction Integration* Dwitter provides a Polkadot Parachain/Parathread for human readable names in a decentralized platform, as well as social currency exchange between users.
  * *Team* The team is experienced in cryptographic technology, distributed systems and shares the security community's and Parity's mission on decentralization.
    It serves experience in international entrepreneurship and is engaged in the security community. Open source value for a web3 and a more open and decentralized Internet has been and is being created.

### Project Details 
The final state of the project renders a Website on Public DNS or browser supported crypto domains, as well as multiple clients for mobile and desktop usage. The user interfaces serves an intuitive frontend proxying social media funcitonality through censorship resistant and purposefully web3 proven Tor hidden services, IPFS/IPNS for user-controlled content delivery and a Polkadot parachain, rendering currency and human readable names.

Previous social networking solutions like Diaspora or Mostadon have either failed to reach social outreach, or have failed in their purpose of censorship resistance for an open and inclusive web3. Current political censorship and changes to the Twitter UI render important issues. The company is subpoenad to testify on post censorship and is highly government survailled. Dwitter is aiming to use proven cryrptographic, distributed precedence in addition to a solid codebase and Substrate integration to fill in the gap. Social payments and incentivation of stars to use the platform is planned. 

#### Architecture Mockup
![alt text](https://github.com/goldfink/General-Grants-Program/blob/Web3Foundation-patch-1/grants/Architecture_Mockup.png?raw=true)

#### UI Prototype samples
![alt text](https://github.com/goldfink/General-Grants-Program/blob/Web3Foundation-patch-1/grants/dwitter_electron.png?raw=true)
![alt text](https://github.com/goldfink/General-Grants-Program/blob/Web3Foundation-patch-1/grants/dwitter_timeline.png?raw=true)
![alt text](https://github.com/goldfink/General-Grants-Program/blob/Web3Foundation-patch-1/grants/dwitter_profile.png?raw=true)

The UI mimics the Twitter.com user experience with additional features. 

#### Similiar Projects
* https://app.subsocial.network/ - Polkadot social network, open source with template
* https://www.ethtweet.me/ - Requires geth 2.0 client for use

#### Preliminary Architecture and API Outline
* https://github.com/goldfink/dwitter

The concept of Dwitter, the code base at the start of the implementation holds at its core the concept of an identity. The identity object is where the data about the users posts, the people they "follow", and whatever else they might want to include is stored. An identity object is the fundamental unit that we'll use to create a distributed social graph.

First, we connect to IPFS and retrieve our ID. On first boot, we instantiate a new "Identity" object, which is ultimately saved to disk as a json file.

Most of the identity logic is contained in the Identity class:
`dwitter/modules/identity.js`

Identity object structure:

root level keys:

```
{
    "av": "", // base64 encoded image data for "avatar"
    "aux": {}, // an object for arbitrary, user-defined data. Ex.
    "dn": "", // user-defined display name
    "id": "", // users IPFS ID
    "meta": [""], // list of CIDs that represent meta objects
    "posts": [""], // a list of CIDs that represent post objects
    "following": [""], // a list of ID's the user follows
    "ts": 10000, // UTC adjusted UNIX timestamp of the identities last edit
}
```

aux object:

```
{
    "btc": "",
    "eth": "",
    "website": "",
    "phone": "",
    "email": ""
}
```

post object:

```
{
    "body": "", // the text body of the post
    "publisher": "", // original publisher, will be used for "re-post" functionality
    "magnet": "", // a webtorrent magnet link for redundancy
    "cid": "", // IPFS CID of the root directory of the post
    "files": [], // a list of file paths, relative to the user data directory
    "ts": 0 // UTC adjusted UNIX timestamp of the post
}
```

We cache every post (user and following) object and "post body"(text) to disk for faster load times, and we automatically pin post CIDs to strengthen the network.
ID caches follow a strict directory structure.

Once an identity object has been generated and saved to disk, it is "uploaded" and "pinned" via IPFS.
Then, in an attempt to abide by unix philosophy, we publish the identity CID to IPNS wrapped in a directory, so other things can be stored there as well.

TODO: recursively merge new publication with the "root directory" of previously published record.

The users identity object CID can now be retrieved by querying IPNS with their ID and the object itself can be downloaded.

Once a user "follows" another user, the process of fetching their posts is done automatically. The posts are presented chronologically in a "feed" with the all posts from all the other ID's the user follows.

Identity objects _will_ be automatically re-fetched periodically, followed by their new posts.

#### Technology Stack
The used open source technologies for censorship resistance, decentralization and tokenization, human readable domain names, render as [Tor](https://github.com/TheTorProject),
[IPFS](https://github.com/ipfs/ipfs), [IPNS](https://docs.ipfs.io/concepts/ipns/), and [OpenBazzar tor onion ipfs transport](https://github.com/OpenBazaar/go-onion-transport). 

#### Proof of Concept
* https://github.com/goldfink/dwitter

### Ecosystem Fit 
The Ecosystem fit is proven by purpose, integration of the Polkadot Stack and architectural censorship resistant design of the project. The AutoDapp project seems to align https://raymondcheng.net/projects/decentralization/autodapp-proposal.html with the web3 mission as well.

## Team

### Team members
* goldfink

### Team Website	
* https://github.com/goldfink/dtwitter

### Legal Structure 
The company is registered in London, named Wyvern Intrinsics Ltd. as is owned by Dan Marsollek Zulla <goldfink@wyvern.ch>

### Team's experience
The team is experienced in decentralized technology and security community involvement, contributions to major open source projects and security responsible disclosure
is documented. 

### Team References
* https://bugzilla.mozilla.org/attachment.cgi?id=8623817&action=diff
* https://www.nbcnews.com/id/wbna52112017
* https://github.com/dan_cipher
* https://github.com/goldfink
* https://www.youtube.com/watch?v=7cgWrnPeIKs
* https://www.businessinsider.com/peter-thiel-fellows-2013-2013-5?r=DE&IR=T

### Team Social Profiles
* https://www.linkedin.com/in/goldfink/

## Development Roadmap :nut_and_bolt: 

Below we provide the roadmap of the Dwitter project. The milestones will be executed in parallel and due to research in performance and scalability, censorship resistance and potential improvements and feature merge requests to multiple open source projects involved, as well deciding upon further production features such as prominency social reward, incentivizing the use of the platform.

### Overview
* **Total Estimated Duration:** 2-3 months 30k PoC
* **Full-time equivalent (FTE):**  1.0 Full time work on the project will be pursued.
* **Total Costs:** The request of this proposal for the creation of a Proof-Of-Concept is BTC 1.71 (Unix Timestamp CHF Exchange rate 1604426503.916094 30,000 CHF)

### Milestone 1 — Implement a Dapp with IPFS/IPNS Pinning, and Tor hidden service content delivery in the style and ease of Tor browser in a UI client. Test Rust Implementation of Clients and Current Full-Code Rewrite, But Focus on NodeJS for this. Most of it has already between written in the Follow repository.

* **Estimated Duration:** 1 month
* **FTE:**  1.0
* **Costs:** 0.855 (Unix Timestamp CHF Exchange rate 1606238029.414203 15,000 CHF)

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache License 2.0 | License of the project
| 0b. | Blockchain | Launch a Polkadot Parachain for Social Payments, Naming and Messaging |
| 1. | IPFS/IPNS | Performant content delivery and pinning in the style of Twitter followings in NodeJS with Benchmarks, Consider and Test Rust interfacing and rewrite contributions |
| 2. | TorBrowser like Client | Establish a Tor circuit with ease like TorBrowser or Pivoxy in NodeJS, Test and Research Rust |
| 3. | Substrate | Polkadot Relay chain integration interaction through a Parachain/Parathread from a Substrate Template, Write social payments |
| 4. | Implement Substrate-Names | Polkadot (Parachain/Parathread) Human Readable Names On-Chain test, Off-chain certainly implemented at this Milestone|

### Mileston 2 - Launch a Polkadot parachain for human readable names, social currency and Direct messages, Implement substrate modules
* **Estimated Duration:** 1 month
* **FTE:**  1.0
* **Costs:** 0.855 (Unix Timestamp CHF Exchange rate 1606238029.414203 15,000 CHF)

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 1. | Substrate-Payments | Polkadot (Parachain/Parathread) Social Payments in Multiple Cryptocurrencies in NodeJS |
| 2. | Substrate-Messaging | Polkadot (Parachain/Parathread) Direct Messaging Off-Chain definitely, On-Chain testing, Rust testing, Implementation is happening in NodeJS |
| 4. | Tests for the entire platform including benchmarks for IPFS and the overhead/cost for On-Chain storage of small data chunks such as in the Bitcoin comment header |
| 5. | Documentation & Tests | Finalization of Documentation, Benchmarks and Testing |

### Bitcoin address for funding

* 33TMcnosTWSorEPfFNTKHfYG86sppzjFyt

### Projects under consideration
* Filecoin in IPFS/IPNS replacement or extension https://github.com/filecoin-project

### Further grants under consideration
* https://github.com/filecoin-project/devgrants

### Community engagement

A thourough [Medium](https://medium.com/) article will be written and published upon completion of each milestone.

### Repositories under consideration
* https://github.com/NodeFactoryIo/metamask-snap-polkadot
* https://github.com/paritytech/frontier

## Future Plans
The long-term goal of the project is to fullfill the goal of Bluesky to provide a web3 version of Twitter with a focus on performance and censorship resistance, in the format of a publicly used Internet service instead of a Blockchain and Security Community exclusive project.

## Additional Information :heavy_plus_sign: 
* Work done so far: Architectural setup and drafting, Forking of the "Follow" code and UI for social media messaging and IPFS pinning
* No further grant applications have been made, and no further financial involvement has been present

