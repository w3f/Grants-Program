# Open Grant Proposal

* **Project:** pallet-maci
* **Proposer:** MVP Workshop - https://github.com/MVPWorkshop
* **Payment Address:** 0x57bc8af36A7E900C438B0652ff2EEb24954a3e6d
* **Status:** [Terminated](https://github.com/w3f/Grants-Program/pull/232#issuecomment-942292877)

## Project Overview 📄

This application is a response to [On-chain Quadratic Funding RfP](https://github.com/w3f/General-Grants-Program/blob/master/rfp-proposal/on-chain-quadratic-funding.md)

## Overview

Please provide the following:

* A brief description of the project.

There are numerous crowdfunding platforms dedicated to boosting the development and growth of different blockchains and their communities. One of the most famous ones is Gitcoin.co, which has had a significant influence on the Ethereum ecosystem's development.

Some of them are based on the quadratic funding mechanism, which became one of the fairest and most efficient ways to allocate funds to a sufficient number of projects that contribute to the ecosystem. 

However, a similar solution hasn't been developed for the substrate-based blockchains. Thus, we want to create one. Moreover, we want to create a package that will include quadratic funding, user registry, and maci pallets and in addition to that first substrate-based crowdfunding platform. Thereby we will offer a finished solution that anyone can use to collect and allocate funds among different projects within their ecosystems.

This proposal is the first step as we primarily want to create a "MACI" (Minimal Anti Collusion Infrastructure) pallet that will help us to prevent collusion. Once we are finished with this pallet, we will move to the next step that will be pallet-user-registry.

More information about our long term plan you can find in the [document](https://docs.google.com/document/d/1ogj8S1NpsdqgGKP9dF4rinQEgfk3BH5IoOVKvFaPOjM/edit#heading=h.dydg2sazp5h8).

* An indication of how you will integrate this project into Substrate / Polkadot / Kusama.

This is a regular pallet that can be merged into any substrate-based blockchain.
In the long run, once we develop the crowdfunding platform,  we aim to integrate this solution into Kusama and potentially Polkadot, so a portion of treasury funds can be allocated to the projects chosen by the community through this platform. 

* An indication of why your team is interested in creating this project.

We have been developing numerous products on the other blockchain infrastructures such as Ethereum and Stellar. Starting from last year, we decided to focus our time and efforts more on the substrate ecosystem. Hence, we became a member of the Substrate Delivery Partners program, and a few of our team members became Polkadot ambassadors. Also, we hosted an online Substrate event - [link](https://www.youtube.com/watch?v=dJLUO7s-n3M&t=2s)

Recently we finished another web3 grant that we had been working on - Substrate Blockchain Starter Kit - [link](https://substrate-starterkit.mvpworkshop.co/#/).

This year, we aim to dedicate even more time to substrate-based projects, especially those that can benefit the community. That’s why we got interested in creating the first substrate crowdfunding platform. 

Also, we find it interesting to work on the solution (pallet) that will prevent collusion.
 
# Project details

### Technology Stack
`pallet-maci`  
**Preventing collusion:**

There are various problems in any kind of democratic environment, such as bribery, private key selling, physically threatening, and similar. To prevent, or at least make it very hard to do so, the platform will implement a MACI (Minimum Anti-Collusion Infrastructure) solution very similar to the one found on the Ethereum ecosystem. It will be implemented in the form of another pallet which will be plugged into the main quadratic funding pallet.

The MACI pallet, as presented in the roadmap of the application, is the first step in building the Quadratic funding platform. One of the first problems we have to solve, before a trustless, fair and decentralized crowdfunding platform leveraging CLR algorithm are vote bribery and user collusion.

The pallet's main task is tracking the state of user votes in anonymous and secure way while making sure the zk proofs are correct and cannot be compromised by any party.

We are going to need to limit the possibility, effectiveness and reliability of any methods used to "buy" a "vote".  
To do that, the pallet will have to utilize zero knowledge proofs.  
Mostly based on the design originating from [this thread](https://ethresear.ch/t/minimal-anti-collusion-infrastructure/5413), the pallet will use zk-SNARKs. The most similar contender for you to see what we're going to build would be the Ethereum [implementation](https://github.com/appliedzkp/maci) of the MACI design.

**Pallet interface**

Rough glimpse of how the public methods of the pallet will look like. The interactions of all actors and guide to function usage can be seen on [this diagram](https://www.websequencediagrams.com/cgi-bin/cdraw?lz=dGl0bGUgcGFsbGV0IG1hY2kKCmFjdG9yIFVzZXIKcGFydGljaXBhbnQAHAhNQUNJAAsNQ29vcmRpbmF0bwAiDk9mZmNoYWluIGNvbXB1dGVyCgpub3RlIGxlZnQgb2YAWwZUaGUgY29udHJpYnV0b3Igd2hpY2ggaXMgCmdvaW5nIHRvIG1ha2UgYSB2b3RlCmVuZCBub3RlAEQHb3ZlcgBzDUVudGl0eQA_B2MAgREIZXMKdm90aW5nIHJvdW5kcyBhbmQgZ2VuZXJhdGVkIHprcHMATwsAgUULLT4AgWoLOiBuZXdWAEMFUm91bmQoKQoKb3B0IElmAGAKb3Igd2FudHMgdG8gY2hhbmdlIHRoZSBwdWJsaWMga2V5AEMbdXBkYXRlAIJDCygpAIFrBW9wdAoKVXNlAH4Qc2lnblVwKCkKCmxvb3AAgysFcwCCIAYAgx8LLS0-VXNlcjogZ2V0AIMeC1AAgQwFS2V5KCkARxR2b3RlKCkAgykGcmlnaACDJgpVc2VyIGNhbgCBVghoaQBuBiBhdCBhbnkgdGltZQphbmQgdGh1cyBjaGVhdACBfQVicmliZXIAgzYKZW5kIGxvb3AAglMcZW5kAIJhDgCDXxUsAIUMDVRoZSAAg2UHaGFzIGVuZGVkAIQtCSAKCgCFBBEtLT4AhTYLOiBwcm9jZXNzVm90ZXMoKQCDchsAg08Fc2hOZXdNZXNzYWdlU3RhAIIsCgCFFQUAhicLLACFfBMAhi4LAG8IZWQgbQBIBgCFHwYAXgdlZCBuZXcgc3RhAIV3DQCBLCF0YWxseQCBIilWb3RlVGFsbHkAgRksVm90ZQBiBgCBIwoAhxwLAIRJFGVyaWYAgQ0JAIVGE3RvdGFsAIJ5CACHXgoAhHIObm93AEMHAIZdBXZhbGlkaXR5IG9mAIglBXMgAIUBBWNoZWNrIG91AIR_Bm51bWJlcgAZCmV2ZXJ5b25lIGdvdACIUQo&s=rose).

*Functions:*  
Used for creating a new voting round
`newVotingRound(coordinator): roundId`

Used to end an active voting round
`endVotingRound(roundId)`

Coordinator address can be updated
`updateCoordinator(roundId)`

Used to signup users to current round
`signUp(roundId)`

Used by users to vote
`vote(roundId, optionId)`

Used by coordinator after generating a zero knowledge proof of
genuinity of vote state
`publishNewMessageState(roundId, stateRoot, proof)`

Used by coordinator to prove which party got how many votes
`publishVoteTally(roundId, proof)`

Used to verify the genuinity of the proof
`verifyVotes(roundId)`

Used to check the total number of votes of parties
`totalVotes(roundId)`

Getter functions
`getCoordinatorPublicKey(roundId)`
`getTallyHash(roundId)`

*Config:*  
Origins which will be allowed to interact with certain functions of the pallet. This allows some implementations to levearge another pallet such as collective and have democratic processes of signup, coordination and such.  
`SignupOrigin`
`VoteOrigin`
`CoordinatorOrigin`

*State:*   
Merkle trees containing data about votes  
`MessageTree` // This one is updated by the users  
`StateTree` // This one is updated by the coordinator

### Ecosystem fit

- Are there any other projects similar to yours? If so, how is your project different?  
There is no such pallet that supports Minimal anti collusion infrastructure.

# Team 👥

### Team members
- Name of team leader: Filip Pajic
- Names of team members: Vuksan Simunovic, Filip Pajic, Andrej Rakic.

### Contact
Contact Name: Filip Pajic  
Contact Email: filip.pajic@mvpworkshop.co  
Website: https://mvpworkshop.co/

### Legal Structure
Registered Address: Cara Dušana 51 Zemun, Republic of Serbia  
Registered Legal Entity: MVP Workshop doo

### Team's experience 
The team consists of Blockchain pioneers who worked on various blockchain projects throughout the years and contributed to the community through education.
Some of the most notable publications, projects, and technologies that the team members worked on, we will list below.

Publications:
- [The Kusama Approach](https://mvpworkshop.co/blog/the-kusama-approach/)
- [Moonbase Alpha Deploy](https://mvpworkshop.co/blog/moonbase-alpha-deployment/)
- [Exploring Rust](https://mvpworkshop.co/blog/exploring-rust-5-reasons-why-you-should-check-it-out/)
- [ERC20 Tokens](https://blockonomi.com/create-ethereum-token/)
- [Introduction to Solidity](https://blockonomi.com/solidity-tutorial/)
- [Custom POS](https://medium.com/mvp-workshop/electionr-1d141c45d3eb)
- [Blockchain Developer resources](https://github.com/andrejrakic/100-blockchain-developer-resources)
- [Trustless notary](https://mvpworkshop.co/blog/introducing-timestampphy-trustless-photo-timestamping-tool/)

Projects:
- [Zero-Knowledge demo](https://github.com/andrejrakic/zokrates-demo)
- [Substrate Blockchain builder](https://github.com/MVPWorkshop/substrate-startkit-gui-api)
- [Substrate pallet - Quadratic democracy](https://github.com/MVPWorkshop/substrate-quadratic-democracy)

Technologies:
- Rust
- Typescript
- Substrate
- Ethereum
- Solidity

Substrate related experience:
- Moonbeam - we have partnered with Moonbeam and we are currently working on a project that should be deployed on the Moonbeam in the near future. Due to privacy and confidentiality, we can not share the name of the project.
- [Substrate Blockchain builder](https://github.com/MVPWorkshop/substrate-startkit-gui-api)
- [Substrate pallet - Quadratic democracy](https://github.com/MVPWorkshop/substrate-quadratic-democracy)

### Team code repos
- [https://github.com/andrejrakic](https://github.com/andrejrakic)
- [https://github.com/Vuksan](https://github.com/Vuksan)
- [https://github.com/pajicf](https://github.com/pajicf)
- [https://github.com/MVPWorkshop](https://github.com/MVPWorkshop) - All the code will be stored in the MVP Workshop repository

### Team LinkedIn Profiles
- [https://www.linkedin.com/in/vuksansimunovic/](https://www.linkedin.com/in/vuksansimunovic/)
- [https://www.linkedin.com/in/andrejrakic/](https://www.linkedin.com/in/andrejrakic/)
- [https://www.linkedin.com/in/pajicf/](https://www.linkedin.com/in/pajicf/)

# Development roadmap

### Overview
Total Estimated Duration: 4 months  
Full-time equivalent (FTE): 2.5 FTE  
Total Costs: 27.000 DAI

### Milestone 1 - Pallet logic
- Estimated duration: 2 months
- FTE: 2.5
- Costs: 12.000 DAI
- Description: Pallet written in Rust for Substrate 2.0 based blockchains. The pallet will be the implementation of Minimal Anti-Collusion Infrastructure (MACI) which leverages ZKPs

| Number | Deliverable | Specification | 
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 / MIT / Unlicense |  
| 0b. | Documentation | Code documentation, API reference |  
| 0c. | Usage example | Example of how to use the pallet inside code |  
| 1. | Tests | The code will have unit-test coverage (min. 70%) to ensure functionality and robustness. In the guide, we will describe how to run these tests |  
| 2. | Merkle tree handling | messageTree (submitted by users) and stateTree (mapping keys and votes) maintenance and update |
| 3. | Cryptographic operations | To sign and encrypt a message: Generate an ECDH shared key, hash and sign EdDSA private key, Signatures validation mechanism |
| 4. | Voice credit management | Determination of user voice credit amount assignment, weight of credits for vote calculations |
| 5. | Voting mechanism | Vote publishing, Message processing and publishing (It verifies the proof, updates the processed message counter, and updates the state root in storage with newStateRoot), vote tally verification |
| 6. | Account management | Participant registration, Coordinator origin update | 
| 7. | ZeroPool integration | Integrate ZeroPool Substrate pallet for verifying circuits |

### Milestone 2 - ZK Circuits
- Estimated duration: 1 months
- FTE: 2.5
- Costs: 9.000 DAI

| Number | Deliverable | Specification | 
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 / MIT / Unlicense |  
| 0b. | Documentation | Documentation explaining the circuits and their purpose |  
| 1. | State tree update | Circuit to prove the correctness of each state root, define public/private inputs, write circuits pseudocode |
| 2. | Vote tally | Circuit which proves that they have correctly tallied all the votes, define public/private inputs, write circuits pseudocode |

### Milestone 3 - CLI and Promotion
- Estimated duration: 1 months
- FTE: 2.5
- Costs: 6.000 DAI

| Number | Deliverable | Specification | 
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 / MIT / Unlicense |  
| 0b. | Documentation | Explanation how to use the CLI |  
| 1. | Operation tools | Scripts written in Typescript used to perform offchain tasks needed to operate the platform and interface with the pallet. (Coordinator: newElection, generateProofs, submitProofs; User: register, vote )  |
| 2. | Pallet showcase | Code repo with the node-template which contains the pallet implementation used to showcase the pallet and its usage |  
| 3. | Blog post | The blog post that explains what and how we built |

### Community engagement
We will create a blog post as a part of the milestone we submit, explaining what and how we built it.

### Future plans
As we mentioned, this is only the beginning and the first step in the process of creating a first substrate-based crowdfunding platform. After we finish with the maci-pallet, we will move to the pallet-user-registry and after that to the pallet-quadratic-funding and finally work platform (UI).

<br/>

`pallet-user-registry`  
**Preventing pseudonymous identities (Sybil resistance):**

For the platform to be credible and for funds to be matched fairly, no user should be able to fund some good more than once. It should be easy for a user to create his identity but very hard to create a pseudo-identity.

The quadratic funding pallet will be agnostic of verified user identities. Those will be plugged in the form of another pallet that implements specific interfaces.
This registry will be implemented in one of these 2 forms:
- Some collectively managed registry of whitelisted users
- Some permissionless registry that uses a 3rd party service such as **BrightID**

<br/>

`pallet-quadratic-funding`  
**Algorithm for calculating funds:**

As explained by Vitalik B. in [this](https://vitalik.ca/general/2019/12/07/quadratic.html) blog post, some voting methods will favor plutocracy while some others will neglect the range of support or disproving of creating good.
Quadratic funding seems like the best fit for aggregating people's preferences for funding some public goods, so the platform will implement the **Constrained Liberal Radicalism algorithm** (Quadratic funding) for calculating the funds for a specific project.

Bellow are all the components that have to be developed before the platform is ready for use:

_Components overview_  

| Component name | Description |  
| ------------- | ------------- |  
| Web App | The GUI used to present funding data to the users in an easy way. |  
| pallet-quadratic-funding | The pallet will contain business logic and data of the funding campaigns and be used to operate the platform. |  
| pallet-user-registry | Pallet used to manage verified users of the platform to prevent any potential Sybil attacks. |  
| pallet-maci | Minimum Anti-Collusion Infrastructure implementation for substrate-based chains  |  

# Additional information
Any additional information that you think is relevant to this application that hasn't already been included.

Possible additional information to include:
- **Are there are any teams who have already contributed (financially) to the project?**  
There are no other teams that have already contributed to this project.

- **Have you applied for other grants so far?**  
We haven’t applied for other grants. 
