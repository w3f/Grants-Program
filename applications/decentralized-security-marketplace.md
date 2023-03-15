# Decentralized Security Marketplace - escrow protocol


- **Team Name:** Magic Powered Inc,
- **Payment Address:** Magicpowered.eth (0x85f9c38a44EfB45CeF47cBf510e6e18cDdf2a78A), USDC, Ethereum
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 3

## Project Overview :page_facing_up:

This application is a response to an [RFP: Decentralized Security Marketplace](https://github.com/0xCaso/Grants-Program/blob/604d506591ea57eef4fee04aa2cfdf2010e8772c/docs/RFPs/Open/decentralized-security-marketplace.md)

### Overview

#### Tagline: Decentralized Security Marketplace

This project aims to build a universal escrow protocol on !ink to let other developer build their own marketplaces or manage their payments in transparent and fair way. This project derives an idea of decentralised security marketplace proposed by the grants team, so the use-case described below respect an idea about security audits. However this project may be used in many other ways.    

Actors:

- Projects - The projects that want to be reviewed/tested;
- Engineers - Community engineers: Developers, QA, Security experts. - People who apply for a bounty and do the audition work.
- Judges - Top performing auditors chosen from the community with recorded credentials on the platform. Judges validate reports posted by Auditors to ensure fairness and transparency of the contest.

The protocol provides rewards lock and release (escrow) functionality to reward engineers submitting their audit reports.

As mentioned, the system has three actors: Projects, Engineers, and Judges.

Projects can submit their bounties by defining the following:

- Project description
- Scope boundaries of the audits (list of files and/or links that are inside and out of scope)
- Rewards pool size
- Rewards percentage or levels for each serenity category of issues found
- Description of the serenity levels of the problems that may be found
- List of known issues that are out of scope for the bounty
- Instructions on how to compile, build, and run tests, if applicable

Then, the project admin has to move rewards funds to the bounty pool smart contract. The bounty pool smart contract will have all the necessary information to make automatic payments for each issue found:

- Kinds of issues
- The size of payment for each issue is found in each category.

![Bounty creation flow](https://github.com/magic-powered/decentralised-security-marketplace-architecture/blob/main/img/create-bounty.png?raw=true)

Engineers submit their issues reports as proposals for the rewards pool.

![Report submission](https://github.com/magic-powered/decentralised-security-marketplace-architecture/blob/main/img/submit-report.png?raw=true)

Judges then review all report submissions and verify them. After validation, they vote for the proposal. When the consensus of judges accepts the proposal, it executes by sending rewards to the engineers.

![Successfull report](https://github.com/magic-powered/decentralised-security-marketplace-architecture/blob/main/img/successfull-report.png?raw=true)

The judge can change the reward size in the proposal and the serenity of found issues at any time by consensus mechanism together with other judges.

![Change report submission](https://github.com/magic-powered/decentralised-security-marketplace-architecture/blob/main/img/change-proposal.png?raw=true)

Any eligible community member can become a judge. Judges are rewarded from the same rewards pool with a percent of rewards to be distributed by the proposals they review.

The eligibility criteria for a community member to become a judge will be provided during the protocol design phase.

### Project Details

The central piece of the platform will be the smart contracts:

- **Rewards pool contract**: Lock and release rewards funds for developers that make audits.
- **Governance contract**: Control and verify audit reports submissions
- **Souldbound NFT**: Help identify if a community member is a Judge and can vote for audits reports. - the protocol is not aiming to implement this, the protocol will support standard nft

![Smart contract composition](https://github.com/magic-powered/decentralised-security-marketplace-architecture/blob/main/img/architecture/smart-contracts.png?raw=true)

#### Preliminary interface of the smart contracts

* Note that this list preliminary interface is hacky and dirty. It is provided to show what our team has in mind

##### Rewards Pool

```rust
mod rewardspool {
    pub type ProjectId = u32;
    pub type ProposalId = u32;

    pub struct RewardsPool {
        /// TODO
    }
    
    pub enum Error {
        /// TODO
    }
    
    pub enum BountyType {
        /// TODO
    }
    
    pub enum ProjectStatus {
        Pending,
        Started,
        Completed
    }
    
    pub enum ProjectPolicy {
        AdminOnly,
        JudgesOnly,
        AdminAndJudges
    }
    
    impl RewardsPool {
        /// create an empty project. Recently created project will have a status: Pending
        pub fn create_project(&mut self, id: ProjectId) -> ProjectId {}
        /// defines whatever who can vote for rewards proposals
        pub fn set_project_policy(&mut self, id: ProjectId, policy: ProjectPolicy, numberOfVotes: u8) -> Result<(), Error> {}
        /// get project policy. Called mainly by governance contract 
        pub fn get_project_policy(&mut self, id: ProjectId) -> (ProjectPolicy, u8) {}
        /// append bounty for specific job type. job type later can be used to create proposal for reward
        pub fn append_bounty(&mut self, id: ProjectId, bountyType: BountyType, reward: u32) -> Result<(), Error> {}
        /// when all bounties appended - start the project. The project can be started only when rewards funds are moved to the contract address 
        pub fn start_project(&mut self, id: ProjectId) -> Result<(), Error> {} 
        /// get list of bounty types and amounts of rewards for each bounty type
        pub fn get_bounties(&self, id: ProjectId) -> Mapping<BountyType, u32> {}
        /// Governance will call this function to release rewards from the pool in benefit of recevier
        pub fn release_reward(&mut self, id: ProjectId, amount: u32, receiver: AccountId, proposalId: ProposalId) -> Result<(), Error> {}
        /// receiver call this to claim rewards for their work
        pub fn claim(&mut self, id: ProjectId, proposalId: ProposalId) -> Result<(), Error> {}
    }
}
```

```rust
mod governance {
    pub type ProjectId = u32;
    pub type ProposalId = u32;
    pub type ChangeProposalRequestId = u32;
    /// correspond to the id of IPFS uploaded report file
    pub type ReportId = u32;

    pub struct Governance {
        /// TODO
    }
    
    pub enum BountyType {
        /// TODO
    }
    
    pub enum Error {
        /// TODO
    }
    
    impl Governance {
        /// Called by RewardsPool contract to start accepting proposals
        pub fn start_governance(&mut self, id: ProjectId) -> Result<(), Error> {}
        /// Called by engineer to create proposal for rewards
        pub fn create_proposal(&mut self, id: ProjectId, bounties: Vec<BountyType>, report: ReportId) -> ProposalId {}
        /// called by someone who was defined in project policy. if necessary number of votes reached it calls release_reward function of RewardsPool contract
        pub fn vote(&mut self, proposalId: ProposalId) -> Result<(), Error> {}
        /// when report validation is done and it was found that the list of bounties in the proposal need to be changed. Called by project admin or judge 
        pub fn create_change_proposal_request(&mut self, proposalId: ProposalId, bounties: Vec<BountyType>) -> ChangeProposalRequestId {}
        /// confirm proposal changes
        pub fn vote_for_proposal_change(&mut self, id: ChangeProposalRequestId) -> Result<(), Error> {} 
    }
}
```

Technical stack:

1. **!ink** for smart contracts

### Ecosystem Fit

 - an open-source escrow protocol can help other builders build their own marketplaces later
 - any other business can deploy escrow protocol for their own internal needs, such as paying for any other work to their contractors

## Team :busts_in_silhouette:

### Team members

Team lead:
- Petrovskyi Anatolii - Technical Lead, Solutions Architect

Developer:
- Andrii Sologor - Smart contract developer

Consultant:
- Denis Krasovskyi - MagicPowered CTO, Frontend Architect

*MagicPowered is a big and flexible developer community. At any point of time we can onboard any developer we see required for the project. Current team composition is minimal required we see right now, it might change later during implementation phase

### Contact

- **Contact Name:** Max Kudinov
- **Contact Email:** max@magicpowered.io
- **Website:** https://magicpowered.io

### Legal Structure

- **Registered Address:** 3520 Spruce Hill Rd, Ottsville, PA 18942
- **Registered Legal Entity:** Magic Powered Inc

### Team's experience

Our community has wide experience building successful web3 products in different ecosystems and areas. 
Here is some of them:

- [Astro DAO](https://astrodao.com) - Is a DAO factory Platform where anyone can create and run their own DAO in couple clicks.
- [The Auction](https://the-auction.io) - A decentralised NFT auction where anyone can put their NFT on sale or bid others NFTs. This project is a winner of several grants in Near ecosystem, including the main grant from Near Foundation
- [Membrane Bot](http://membranebot.com) - Multi chain token gating for discord. Bot can grant Discord roles based on tokens users has on their wallets.
- [Staking Platform](https://staking-platform.io) - The Staking Platform is a decentralized crowdfunding protocol that will make it possible for people to launch and fund projects using proof-of-stake blockchains. This project is a winner of several grants programs.
- [Near JS client library](https://github.com/magic-powered/near.js) - SDK for Near blockchain API 

See more projects done by our community here: https://magicpowered.io


## Development Status :open_book:

Currently, the project is under technical design phase 

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 5 months
- **Full-Time Equivalent (FTE):**  1.5 FTE
- **Total Costs:** 59,000 USD

### Milestone 1 — Design Phase

- **Estimated duration:** 1 month
- **FTE:**  1
- **Costs:** 15,000 USD

|  Number | Deliverable               | Specification                                                                                                                                                                                                                                                                            |
|--------:|---------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **0a.** | License                   | MIT                                                                                                                                                                                                                                                                                      |
| **0b.** | Documentation             | Inline code documentation for public interface                                                                                                                                                                                                                                           |
| **0c.** | Testing and Testing Guide | Tests for each public function on the smart contract                                                                                                                                                                                                                                     |
| **0d.** | Docker                    | N/A                                                                                                                                                                                                                                                                                      |
|  **1.** | Smart contract API Mock   | Complete interface for both smart contracts without implementation yet: **Pool**: Create project, define types of work inside the bounty, send funds to the rewards pool, create governance space, **Governance**: create proposal, approve proposal, call pool to reward propose author |

### Milestone 2 — Implementation of Pool smart contract

- **Estimated Duration:** 1 month
- **FTE:**  1.5 
- **Costs:** 22,000 USD


|   Number | Deliverable                 | Specification                                                                                                                                                               |
|---------:|-----------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|  **0a.** | License                     | MIT                                                                                                                                                                         |
|  **0b.** | Documentation               | Markdown documents describing user flow and details on how to run RewardsPool contract and call it from the cli                                                             |
|  **0c.** | Testing and Testing Guide   | N/A                                                                                                                                                                         |
|  **0d.** | Docker                      | N/A                                                                                                                                                                         |
|   **1.** | Rewards Pool implementation | Rewards pool contract implemented: Create project, define types of work inside the bounty, send funds to the rewards pool, create governance space functions implementation |

### Milestone 3 — Implementation of Governance smart contract

- **Estimated Duration:** 1 month
- **FTE:**  1.5
- **Costs:** 22,000 USD

|  Number | Deliverable                 | Specification                                                                                                  |
|--------:|-----------------------------|----------------------------------------------------------------------------------------------------------------|
| **0a.** | License                     | MIT                                                                                                            |
| **0b.** | Documentation               | Markdown documents describing user flow and details on how to run Governance contract and call it from the cli |
| **0c.** | Testing and Testing Guide   | N/A                                                                                                            |
| **0d.** | Docker                      | N/A                                                                                                            |
|  **1.** | Rewards Pool implementation | Governance contract implemented: create proposal, approve proposal, call pool to reward propose author         |

## Future Plans

In the future we want to build decentralised security marketplace on top of the implemented escrow protocol with:
- Engineers leaderboard
- Judges leaderboard and statistics
- Projects list
- etc

we want to build security audit marketplace and community around it to be able to contribute to the general web3 security at massive scale 

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** - personal recommendation
