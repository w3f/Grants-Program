# Aryaverse

- **Team Name:** Aryaverse Team
- **Payment Address:** 15.05.2023, 12:29
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:
### Overview

Aryaverse is a decentralized freelancer platform that allows clients to find and hire freelancers for their projects. It supports Work-contract features b/w clients and freelancers, offers a self-governance system for Conflict resolution, supports Stripe payments, and provides a portal to manage freelancers.

As the demand of freelancers increase we need a blockchain that is more scalable and provides the best security. We know Polkadot can fulfil these requirements.

As IT professionals we understand the need of freelancers as well as their data security that's why Aryaverse wants to work immensely to help the freelancers.

### Project Details

Aryaverse is a decentralized platform that leverages blockchain technology to create a secure and transparent marketplace for freelancers and clients. It allows clients to find and hire freelancers around the world while providing a range of features and benefits for both parties.

#### Self-Governance:
Aryaverse allows for self-governance of the platform, which means that the community of users governs the platform. It ensures that the platform is run in the best interests of all parties involved. For example, if a Conflict arises between a client and a freelancer, the community of users can vote on a resolution that is fair and just for all parties.
members are randomly selected from the conflict-members pool where members stake their tokens to participate in the voting.This process ensures that everyone has a say in the governance of the platform, creating a transparent and democratic system.

#### Work contracts:
Aryaverse utilizes work contracts to ensure that all transactions between clients and freelancers are secure and transparent. work-contracts are self-executing contracts with the terms of the agreement directly written into code. This ensures that both parties are held accountable for their obligations and that Conflicts are resolved quickly and efficiently.

#### Stripe Payments:
Aryaverse supports Stripe payments, which allows clients to pay for services using their credit or debit card. Stripe is a secure and reliable payment gateway that provides clients with peace of mind when making transactions on the platform. This feature allows clients to pay for services quickly and securely, which helps to build trust between clients and freelancers.

#### Portal to Manage Freelancers[optional]:
Aryaverse provides a portal for clients to manage their freelancers. This portal allows clients to keep track of their freelancers, view their work progress, and communicate with them. It ensures that clients are always up-to-date with their freelancer's work and can provide feedback to help improve their performance.
This feature also helps freelancers to stay organized and focused on their work.

#### Escrow:
Aryaverse utilizes an escrow system to ensure that payments are held securely until the work is completed to the client's satisfaction. This ensures that freelancers are paid for their work and clients are satisfied with the final product.



### Technical Overview:

**Flow chart:** ![img](http://aryaverse.io/wp-content/uploads/2023/05/flowchart.png)

#### Work Contract:

The Work-Contract pallet works closely with escrow pallet.
1. This pallet will create a new contract b/w freelancer and employer.
2. This will have a function in which freelancers have option to choose a particular contract or not.
3. After choosing the contract, this pallet start the escrow pallet in which employer have to deposit some amount in the escrow account.
4. This pallet gives the functionality that After completing the tasks, Freelancer confirm the completion.
5. If there is any conflict b/w freelancer and employer then freelancer can raise a conflict so for that this pallet works with the conflict pallet.
6. If client accepts the work done by freelancer, then the payment will be done and this pallet will call escrow pallet release the escrow amount.

#### Escrow:
It is a new account which holds the escrow amount.
This pallet will have several functionalities like:
- This pallet will create a new escrow.
- This pallet will be used to release the payment
- This is also helpful for slashing.
- This pallet is also have refund functionalities (if required).

#### Conflict
If there is any disagreement b/w employer and freelancers then this pallet comes into picture.
This pallet have several features like:
- Create a new Conflict of a particular contract.
- This is responsible to create a Conflict committee.
- Select some members from the Conflict committee to vote on this Conflict.
- These member should have stake some tokens inorder to vote.
- Slashing will happen according to the result.
- This is also responsible for voting on a conflict.
- Only selected members are allowed to vote on a particular conflict.
- Members are selected randomly from the conflict-committee every-time.

### Technology Stack
Rust, Substrate, Polkadot.js Wallet, IPFS/Filecoin

### Ecosystem Fit

As far as we know, there are no similar projects in Polkadot ecosystem.

Aryaverse is a decentralized platform that leverages blockchain technology to create a secure and transparent marketplace for freelancers and clients. It allows clients to find and hire freelancers worldwide while providing a range of features and benefits for both parties.
As the demand of freelancers increase we need a blockchain that is more scalable and provides the best security.

As we all know Polkadot offers flexible cross-chain interoperation functionality with a large user base and volume expectation.

## Team: Aryaverse Team

### Team members

- Pankaj Chaudhary
- Krishna Singh
- Deepak Chaudhary

### Contact

- **Contact Name:** Pankaj Chaudhary
- **Contact Email:** pankajchaudhary172@gmail.com
- **Website:** https://aryaverse.io/

### Legal Structure

- **Registered Address:** 830, Durga Puram, Bulandshahr, UttarPradesh, India - 203001
- **Registered Legal Entity:** Aryaverse Technologies llp

### Team's experience

#### Pankaj Chaudhary
- 5 year of development experience in rust.
- 3 year of experience as lead/primary developer in Polkadot/substrate projects.
- 5 years experience in remote development team coordination
- Successfully deployed projects as parachains, as solo chains and on roccoco testnet.

#### Krishna Singh
- 3.5 year of development experience in rust.
- 2.5 year of experience as developer in Polkadot/substrate projects.


#### Deepak Chaudhary
- 4 years of programming experience.
- 2 year of experience as developer on expansive polkadot related projects.
- Experience with C/C++, Javascript, React

### Team Code Repos

- https://github.com/Polkaverse
- https://github.com/zktony
- https://github.com/Aideepakchaudhary

### Team LinkedIn Profiles (if available)

- https://www.linkedin.com/in/thepankajchaudhary/
- https://www.linkedin.com/in/krishna-singh-b37671170/
- https://www.linkedin.com/in/deepak--chaudhary/


## Development Roadmap :nut_and_bolt:
### Overview

- **Total Estimated Duration:** 4-5 months
- **Full-Time Equivalent (FTE):**  4
- **Total Costs:** 30,000 USD

### Milestone 1 Basic functionality

- **Estimated duration:** 1.5 month
- **FTE:**  4
- **Costs:** 10,000 USD

|  Number | Deliverable          | Specification                                                                                                                                                                                                          |
|--------:|----------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **0a.** | License              | Apache 2.0 / GPLv3 / MIT / Unlicense                                                                                                                                                                                   |
| **0b.** | Documentation        | We will provide both **inline documentation** of the code.                                                                                                                                                             |
|      1. | Documentation        | We'll make a document which demonstrate the whole technical flow.                                                                                                                                                      |
|      2. | Work-Contract pallet | We'll make the structure of Work-Contract pallet. |
|      3. | Implementation       | We'll implement the Work-Contract pallet                                                                                                                                                                             |


### Milestone 2 - Implementation of pallets

- **Estimated Duration:** 1.5 month
- **FTE:**  4
- **Costs:** 12,000 USD



|  Number | Deliverable            | Specification                                                     |
|--------:|------------------------|-------------------------------------------------------------------|
| **0a.** | License                | Apache 2.0 / GPLv3 / MIT / Unlicense                              |
| **0b.** | Documentation          | We will provide both **inline documentation** of the code. 
| **0c.** | Docker                 | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.                                                                                                                                 |
|  1.    |      Structure | We'll make a structure for escrow pallet.                                                                                                                                                                                                     |
| 2.  | Implementation | We'll implement the functionalities of escrow pallet.                                                                                                                                                                                         |
|      3. | Implementation | We'll release our project on rococo testnet.                                                                                                                                                                                                  |


### Milestone 3  Additional features

- **Estimated Duration:** 1.5 month
- **FTE:**  4
- **Costs:** 8,000 USD

|  Number | Deliverable            | Specification                                                     |
|--------:|------------------------|-------------------------------------------------------------------|
| **0a.** | License                | Apache 2.0 / GPLv3 / MIT / Unlicense                              |
| **0b.** | Documentation          | We will provide both **inline documentation** of the code. 
| **0c.** | Docker                 | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.                                                                                                                                 |
|      1. |     Structure | We'll make structure for Conflict pallet.                                                                                                                                                                                                      |
|      2. | Implementation | We'll implement the Conflict pallet.                                                                                                                                                                                                      |

...


## Future Plans

Aryaverse Protocol is intended to be a continuously-developing project. We'll implement all the remaining features listed in project description like Conflict, payments, slashing etc.
After that, We will launch our chain as a parachain on polkadot.


## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** We heard about the Grants Program from the Web 3 Foundation Website, as well as personal recommendations from Polkadot community members.
