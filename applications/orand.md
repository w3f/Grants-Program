# Orand - Allows randomness to be generated and fed to any smart contracts on any EVM compatible blockchain.

> This document will be part of the terms and conditions of your agreement and therefore needs to contain all the required information about the project. Don't remove any of the mandatory parts presented in bold letters or as headlines (except for the title)! Lines starting with a `>` (such as this one) should be removed. Please use markdown instead of HTML (e.g. `![](image.png)` instead of `<img>`). 
>
> See the [Grants Program Process](https://github.com/w3f/Grants-Program/#pencil-process) on how to submit a proposal.
- **Team Name:** Orochi Network
- **Payment Address:** 0xcCccE1EeCc5176383A515186fDb0442e7ee3EC23 (ETH)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):**  3

> :exclamation: *The combination of your GitHub account submitting the application and the payment address above will be your unique identifier during the program. Please keep them safe.*
## Project Overview :page_facing_up:

If this application is in response to an RFP, please indicate this on the first line of this section.

If this is an application for a follow-up grant (the continuation of an earlier, successful W3F grant), please provide name and/or pull request of said grant on the first line of this section.

### Overview

Orand is an Elliptic Curve Verifiable Random Function (ECVRF: https://datatracker.ietf.org/doc/html/draft-irtf-cfrg-vrf-05) as a service that offers high performance, zero latency and 30 times lower cost than current providers. Orand offers on-chain verification and pseudorandom for projects that seek integrity and transparency in their features with a wide variety of case studies from card games, MMORPG to NFT collectibles

**Verifiable randomness**: We’re using Verifiable Random Function (VRF) to generate randomness the process described here https://www.rfc-editor.org/rfc/rfc6979 . Curve secp256k1 was used to minimizing verification cost for smart contract on Ethereum.

**Dispersity**: A distributed system with many participants/nodes will join to generate randomness by using Multi Party Computation (MPC).

**Unpredictability**: A VRF will perform with the input is previous randomness and it’s also require half of participants to participate in MPC.

**High throughput**: Game/application server could request randomness from the Orochi đRNG system. The result will be provided as soon as half of participants participate in the MPC.

**Fault Proof**: If the game/application server tries to delay the feeding process to manipulate the result, a fault proof will be committed so sue the game server.

**Multi-chain**: All EVM compatible blockchains can be supported.

### Project Details
Demo

<img width="914" alt="image" src="https://i.ibb.co/wCmHFr6/Screen-Shot-2023-04-03-at-5-13-44-PM.png">


### Ecosystem Fit

-This transformation of Web3 Gaming requires that the game's computational processes become verifiable. Every mechanism of the game is built around random numbers, such as rare NFT drop rate, damage ability, item stats...all need randomness. The Verifiable Random Function is therefore an essential component of Web3 Gaming to make Web3 Gaming fairer. https://www.wsgr.com/en/insights/recent-rulings-suggest-defendant-wins-in-loot-box-cases-are-common-appeals-all-pending.html

-Building an ECVRF powered pallet can help Polkadot provide verifiable randomness for most parachains as well as entire ecosystems on parachains.

-MPC ECVRF can be used to secure Polkadot consensus leader selection process.

-Our side provides 2 pallets, 1 pallet for ECVRF in general and 1 pallet for EVM compatible chain. Supporting EVM parachains because there are many technical advantages such as on-chain verfication as well as a large number of dApps. If desired, we can also support Wasm parachains, but need to adjust the total cost of the project. Because we need to implement one more verifier for Wasm parachain.

*What is the benefit of this solution compared to others?
-There aren't many MPC EVRF or Decentralized RNG projects on the market right now. Drand is a MPC VRF development project based on Boneh-Lynn-Shacham (BLS) signatures, but on-chain verifiers are very expensive on Polkadot parachains.

## Team :busts_in_silhouette:

### Team members

- Chiro Hiro - CEO Orochi Network (https://github.com/chiro-hiro)
- Hubert Nguyen - CGO Orochi Network 

### Contact

- **Contact Name:** Hubert Nguyen
- **Contact Email:** hubert@orochi.network
- **Website:** www.orochi.network

### Legal Structure

- **Registered Address:** OROCHI NETWORK PTE. LTD,68 CIRCULAR ROAD , #02-01 , SINGAPORE (049422)
- **Registered Legal Entity:** OROCHI NETWORK PTE. LTD,68 CIRCULAR ROAD , #02-01 , SINGAPORE (049422)

### Team's experience

Chiro Founder of Orochi Network , an R&D and open source lab that utilized ZKP to improve Web3 application. Former R&D Lead in blockchain technology at Cardano Lab, former Solution Architect at HexTrust. 10 years in applied cryptography and cyber security.

### Team Code Repos

-https://github.com/orochi-network/orochimaru



### Team LinkedIn Profiles (if available)

- https://www.linkedin.com/in/chiro8x<Chiro Hiro>
- https://www.linkedin.com/in/hungnguyen88<Hubert Nguyen>


## Development Status :open_book:
https://github.com/orochi-network/orochimaru

## Development Roadmap :nut_and_bolt:

### Overview

* **Total Estimated Duration:** 7
* **Full-time equivalent (FTE):**  9
* **Total Costs:** Amount of Payment in USD for the whole project: USD61,740 ~ 33.14 ETH
### Milestone 1

Please add additional milestones in the same way: 
* **Estimated Duration:** 2 months
* **FTE:**  3
* **Costs:** USD17,640 ~ 9.47 ETH


| Number | Deliverable | Specification | 
| ------------- | ------------- | ------------- |
| 1. | Implement ECVRF | Implement ECVRF based on secp256k1 curve |  

### Milestone 2

Please add additional milestones in the same way: 
* **Estimated Duration:** 3 months
* **FTE:**  3
* **Costs:** USD26,460 ~ 14.2 ETH


| Number | Deliverable | Specification | 
| ------------- | ------------- | ------------- |
| 1. | Transformed ECVRF | Transformed ECVRF to a pallet-ecvrf |  
### Milestone 3

Please add additional milestones in the same way: 
* **Estimated Duration:** 2 months
* **FTE:**  3
* **Costs:** USD17,640 ~ 9.47 ETH

| Number | Deliverable | Specification | 
| ------------- | ------------- | ------------- |
| 1. | Implement precomplie evm | Implement precomplie evm pallet for ECVRF in frontier, to allow smart contract to get ECVRF from pallet |  

## Future Plans

Developer other milestones:
  
 **Milestone 4: ** Research about MPC in ECVRF
  
 **Milestone 5: ** Implement DKG allow validators to genereate secret shares
  
 **Milestone 6: ** Implement distributed ECVRF based on MPC
  
 **Milestone 7: ** Implement pallet-mpc-ecvrf
  
 **Milestone 8: ** Implement precompile evm pallet for MPC ECVRF in frontier

  
  
## Additional Information :heavy_plus_sign:

Here you can also add any additional information that you think is relevant to this application but isn't part of it already, such as:

What work has been done so far?
-This is our first grant as a part of bringing innovation to the web3 Ecosystem.
Are there are any teams who have already contributed (financially) to the project?
-No
Have you applied for other grants so far?
-No
