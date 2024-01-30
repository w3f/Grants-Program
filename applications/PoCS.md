# Proof of Contract Stake (Pallet)

- **Team Name:** Auguth Tech
- **Payment Address:** BTC (bc1qdajpxy5wc6kcsdaaa4e760977nd03g86khay9g)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):**  2

## Project Overview :page_facing_up:

### Overview

#### One Sentence Summary

*Forging Secure Public Networks through Staking Smart Contracts*

#### Brief Description

Blockchain technology, with the introduction of Ethereum protocol, impacted the ecosystem by introducing the concept of smart contracts. These self-executing contracts have enhanced the functionality and versatility of blockchain networks, opening up a wide array of decentralized applications and use cases. However, despite this pivotal development, there is absence of a consensus mechanism that places smart contracts at its core. Recognizing this critical gap, we present Proof of Contract Stake (PoCS) – The First Developer Centric Consensus. 

PoCS is an innovative staking system that leverages *contract gas history* to select block producers. PoCS integrates elements of both proof-of-work and proof-of-stake. We have introduced a novel concept of **'code-mining'** that incentivizes developers to actively participate in securing the network. By aligning the interests of developers with the network's security, PoCS introduces a dynamic where smart contract creators play a vital role in consensus. In addition, PoCS implements a system of *'stake scoring'*, taking into account factors such as contract age, reputation, and gas utilization. This design not only fortifies the network against collusion type attacks but also ensures a fair and secure environment for all participants. It also addresses a longstanding concern in blockchain consensus models – the 'nothing at stake' attacks . By introducing a non-fungible, non-transferable unit of scarcity for staking, PoCS effectively mitigates this vulnerability, making it a secure and reliable network. In addition, the stake accumulation attack in PoCS is time constraint and patterned which can be easily detected. This escalates costs over time and cannot be expedited with any external resources.

#### Substrate Integration

We have chosen Substrate as the foundation for our project's development due to a multitude of compelling reasons. Substrate provides a modular framework for blockchain development platform. By leveraging Substrate's extensive capabilities, we could design our consensus mechanism effectively as it aligns perfectly with our goal of creating a dynamic and adaptable blockchain network. Additionally, our project envisions a future where cross-chain interoperability is a key component. This vision closely resonates with the Polkadot ecosystem, which provides of parachains ecosystem. The parachain ecosystem would help us design a robust implementation and test its interoperability. While this part is still under active research, we foresee our consensus mechanism being well-suited for integration into the broader Polkadot network. Besides, one of the most noteworthy features of Substrate is its native support for WebAssembly (Wasm) built contracts. Considering the research and future extensions, we wanted to develop the consensus on Wasm built contracts. 


#### Team Interest

Our interest in this project was sparked by a genuine enthusiasm for blockchain technology. Initially, we began as web3 developers, participating in hackathons and exploring dapp development. However, during one of these hackathons, we encountered notable limitations with the Ethereum Virtual Machine (EVM). Recognizing the need for a more robust solution, our research head, Joby Reuben, who has been researching blockchain for over 4 years, began to delve into various consensus mechanisms. Proof of Contract Stake (PoCS) stemmed out from his previous research and emerged as a promising avenue, and we've been dedicated to refining this concept for the past eight months.As we conducted our research, we identified the need for a WebAssembly (Wasm) environment to effectively implement this mechanism. This led us to the Polkadot ecosystem, which provided a suitable environment for our vision. 

In this landscape of ever-evolving blockchain technology we are poised to reshape the way we approach smart contracts and network security. The grants will help us validate our research and make it more robust with the para chain ecosystem. Thus, through this support, we aim to bring our vision to delivering a practical tool to the community and contributing to the ongoing evolution of blockchain technology. 

### Project Details

#### Prior work - Research

Our [PoCS research](https://jobyreuben.in/JOURNALS/pocs) is documented. We have also included [simulations](https://jobyreuben.in/JOURNALS/pocs#pocs-simulations-ethereum-pocs) on the research document to show how PoCS would behave if Ethereum used PoCS from its genesis block.

#### Substrate implementation Design

To implement PoCS on substrate we will be modifying `pallet-contracts` and  `pallet-staking` under APACHE 2.0 license. We decided to proceed with this approach since both of these pallets provide the primary required functionalities. In addition to this substrate also provides a elaborate user interface for integrating contracts which will ease out our implementation. Since we will be implementing PoCS as a staking mechanism, we will be using `pallet-staking` with BABE + GRANDPA protocols to modify proof of stake. 

#### Outline of Core functionality 

1. **Fields to be added to Pallet-contracts**
Every newly deployed contract will have three extra storage fields: 
* `AccountStakeInfo` (struct) : Struct maintainted for each contract call. It is updated everytime a contract is called. 
    * `owner` (AccountId) - Owner of the contract
    * `delegateTo` (AccountId) - Set by the deployer and for the consensus to know who is the deployer.  Only deployer can change this field
    * `delegateAt` (Blocknumber) - The field is the current block height when the delegateTo field is updated
* `ContractScarcityInfo` (struct field) -  This field will be used to calculate the PoCS stake score. It will be updated anytime a transaction executes which corresponds to that contract. To calculate this we will use 
    * `reputation` (u64) - a parameter we assign to calculate the reputation of contract which depends on number of times it is called by a user or any other contract  
    * `recent_blockheight` (BlockNumberFor) - This is introduced to prevent vulnerabilities like DDoS attack


2. Staking mechanism: <br />
In the context of Substrate, the integration of Babe and Grandpa protocols, alongside the Staking Pallet, complements the PoCS mechanism 
*  Babe's deterministic block production process aligns with PoCS's commitment to security. Validators with higher reputation and weight history, as determined by the scarcity mapping, are incentivized to actively participate in proposing and validating blocks
* Staking Pallet (Validator Selection): The Staking Pallet integrates with PoCS as validators selected based on their scarcity scores, are entrusted with the responsibility of proposing and validating blocks. This delegation ensures that validators with a proven track record of actively participating in the network are granted the authority to contribute to the consensus process.
* Validator Reward Contract : Validator reward contract will act as a general middleware contract, which could be reusable across different apps/chains built over PoCS. We will build a validator contract which will not be a definitive but a reference contract which can be modified with a custom logic to implement custom reward distribution mechanisms.<br />
Outline of some basic functionalities:
    1. Claim Rewards: `claimRewards(address devAddress)`
This function allows a developer to claim their rewards from the Validator Reward. For this it will verify that the caller is the owner of the contract calling the function and ensure that the contract is delegated to the validator.
    2. Calculate Reward Percentage: `calculateRewardPercentage(address contractAddress)`: This function calculates the percentage of rewards that the developer is eligible to claim based on the stake score of the associated contract.
    3. Transfer Rewards: `transferRewards(address devAddress, uint256 rewardAmount)`
: This function transfers the calculated rewards to the developer from the contract. It ensures that the reward amount is valid and available in the contract.


<b> Protocol design </b> <br />
<p align="center">
  <img src="https://jobyreuben.in/assets/pocs/pocs.jpeg" />
</p>

#### What your project is not or will not provide or implement
We have structured our implementation into 3 milestones. In this grant our focus is to develop a first version which would implement pallet-contract to calculate the  staking score in simplistic yet efficient way with above mentioned fields. It would handle 
* Stake score update when deployer deploys contract 
* Stake score update when a user calls contract function or other contracts call the contract function
* Integration with proof of stake in substrate.

We will continue to research as we implement, not all vulnerabilities might be handled in the very first version with above functionalities. But we will extend it to our future plans or extend the grants after accomplishing the milestones and scope in this proposal.

### Ecosystem Fit
Our project integrates with the Substrate framework, providing a modular and adaptable foundation for our innovative consensus mechanism. This positions us for potential integration into the broader Polkadot ecosystem, aligning with the vision of cross-chain interoperability through parachains.


#### Target Audience
Our primary target audience includes developers within the blockchain space, particularly those focused on Polkadot ink! ecosystem and its developers. Additionally, our project aims to serve the broader community of blockchain enthusiasts seeking to engage with a dynamic and secure consensus mechanism.

#### What need(s) does your project meet?
Our project addresses the critical need for a consensus mechanism that is developer-centric and tailored to the nuances of smart contract interactions. By incentivizing developers through our Proof of Contract Stake (PoCS) model, we empower them to actively participate in securing the network. This not only enhances network security but also fosters a more collaborative and inclusive blockchain ecosystem. Furthermore, our integration with Substrate and potential linkage to the Polkadot network addresses the need for cross-chain interoperability, opening up a realm of possibilities for decentralized applications and services.

#### Similar Projects (How it is different)
There are no similar projects in polkadot as well as other blockchains as of now since its proposing a new staking consensus. 

## Team :busts_in_silhouette:

### Team members

- Team Leader: Purva Chaudhari
- Team Members : Ajay Joshua (Development) , Joby Reuben (Research)


### Contact

- **Contact Name:** Purva Chaudhari
- **Contact Email:** puc7@pitt.edu

### Legal Structure

- **Registered Address:** Tamil Nadu, India - 624619
- **Registered Legal Entity:** Auguth Tech Pvt Ltd (CIN : U72900TZ2019PTC033024)

### Team's experience

- **Purva Chaudhari**: Purva is a Masters Student in Computer Science at University of Pittsburgh. Her coursework is primarily includes on subjects of systems and cryptography. Her thesis is focused in blockchain (decentralised voting system). Prior to it, she has over 2 years of experience in working as a blockchain developer. After completing her bachelers in CS, she worked at Witness Chain for an year as backend blockchain engineer. She has experience in ethereum and solana development. She has also been part of Nethermind and Summer of Bitcoin internships during her bachelors.

- **Ajay Joshua**: Ajay is a B.Tech graduate in Robotics and Automation. He is well-versed in Solidity with three years of practical experience in developing various web3 projects. During his coursework, Ajay has also worked on various projects, in brain-computer interface, AI-based power management system and distributed node-based space communication. His skills span across blockchain development and cybersecurity.

- **Joby Reuben**: Joby is a the research lead. He is a dedicated researcher and has been delving deep in blockchains for over 2 years. He has profound understanding of Layer 1 protocols and is passionate to design Layer 1 consensus protocols. Currently he rewriting Ethereum yellow paper for developers as an open contribution. His elaborate research experience and realization of current shortcomings of blockchain has led to the idea of developing first developer incentivising consensus which we look forward to bring into reality.

Overall we are a team of 6 members, 3 of which are core developers as mentioned above, one assists on basis of task and other 2 handle the non-technical work.

### Team Code Repos

- https://github.com/Purva-Chaudhari
- https://github.com/I-Corinthian
- https://github.com/jobyreuben 

### Team LinkedIn Profiles

- https://www.linkedin.com/in/purva-chaudhari-02b12b178/
- https://www.linkedin.com/in/ajay-joshua-a8a250176/
- https://www.linkedin.com/in/jobyreuben
  
## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:**  15 weeks
- **Full-Time Equivalent (FTE):**  3-3.5
- **Total Costs:**  BTC equivalent to 25,000 USD

### Milestone 1 - Pallet Contract Update

- **Estimated duration:** 4 weeks
- **FTE:**  3-3.5
- **Costs:** BTC equivalent to 7,000 USD

| Number |        Deliverable        |                                                                                                             Specification                                                                                                             |
|--------|:-------------------------:|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| 0a.    | License                   | Apache 2.0 |
| 0b.    | Documentation             | We will provide both inline documentation of the code and a basic tutorial to test out the additions |
| 0c.    | Testing | Unit testing and testing tutorial                               |     
| 0d.    | Docker | Create docker image with updated pallets   
| 0e.    | Article | Publish article for  delineating the additions and workflow of consensus |                                                                                                                   |
| 1.     | Modified Substrate pallet-contracts for PoCS   |  1. Try tight coupling of pallet-contracts with pallet-staking for interoperability of the pallets for PoCS consensus. <br /> 2. Add attributes to PoCS pallet and derive them. (eg: Contract scarcity struct, its related mappings etc )                                         |

### Milestone 2 — Pallet staking Update

- **Estimated duration:** 6 weeks
- **FTE:**  3-3.5
- **Costs:** BTC equivalent to 10,000 USD

| Number |        Deliverable        |                                                                                                             Specification                                                                                                             |
|--------|:-------------------------:|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| 0a.    | License                   | Apache 2.0     |
| 0b.    | Documentation             | Inline documentation of the code and a basic tutorial |
| 0c.    | Testing and Testing Guide | Unit testing and testing tutorial|
| 0d.    | Docker | Create docker image with updated pallets   
| 0e.    | Article | Publish article for integrations and additions of new pallet logic|  
| 1.     | Modify pallet staking for PoCS   | Add custom functions and modify some existing functions of pallet staking and pallet contract to implement our attributes and make the pallets interact accordingly  |

### Milestone 3 — Validator Reward Contract, Testing and Documentation

- **Estimated duration:** 5 weeks
- **FTE:**  3
- **Costs:**  BTC equivalent to 8,000 USD

| Number |        Deliverable        | Specification   |
|--------|:-------------------------:|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| 0a.    | License                   | MIT license   |
| 0b.    | Documentation             | Inline documentation of the code and a external contract documentation <br /> We will publish an article/workshop that explains inner workings of PoCS and developer guide to build a PoCS enabled Substrate chain|
| 0c.    | Testing and Testing Guide | Unit testing with our validator reward ink! contract |
| 0d.    | Docker | Create docker image for entire consensus  
| 0e.    | Article | Publish lite paper for the consensus |  
| 1    | Contract development | Design and implement a validator reward contract. (i.e Co-ordinator contract for rewarding). <br />Integrate it with PoCS consensus |
| 2. | Alpha testing and publish paper | Alpha testing of entire consensus. Since it is a new consensus design, we have a separate milestone for analyzation of results over conducting an end to end test of the protocol <br /><br />Standalone yellow paper|

            
## Future Plans

Once completed with this grant milestones, 
- Further research on democracy and validator penalty conditions
- Moving towards testnet launch as a sister chain to Polkadot. Since it is first of its kind we will be actively discussing our future plans and research directions with the community.
- We will be focussing more on making PoCS pallets interoperable with current popular Substrate pallets.

## Referral Program :moneybag: 

- **Referrer:** muddlebee(Anwesh)
- **Payment Address:** 0x92c856ef2e7c8c443030e2cc9e1739662ed3e8b1

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** 

Through recommendation from [Builders Tribe](https://buidlerstribe.com/) to apply for W3F grants

**If there are any other teams who have already contributed (financially) to the project.**

No, Self Funded

**Previous grants you may have applied for**

No
