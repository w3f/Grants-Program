# Anti-Collusion Infrastructure

- **Team Name:** Zrow
- **Payment Address:** 0x49F19FA78C4E766b8C5592e53CC35b1411a5E11f (USDC/DAI)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2 :chicken:

## Project Overview

This application is a response from the [anti-collusion infrastructure RFP](https://github.com/w3f/Grants-Program/blob/master/docs/RFPs/anti-collusion_infrastructure.md).

### Overview

Aims to be a simple MACI implementation for the Polkadot eco-system, similar to the existing one on Ethereum ([MACI](https://github.com/privacy-scaling-explorations/maci))
Project is following this specification [specifications](https://github.com/privacy-scaling-explorations/maci/tree/9b1b1a631090ee89d2bc12f4bcef7763e42caef0/specs) and derived from [this ethresearch post](https://ethresear.ch/t/minimal-anti-collusion-infrastructure/5413). This means that most of the project details are based on the researches done on [MACI](https://ethresear.ch/t/minimal-anti-collusion-infrastructure/5413).

As explained in the RFP, the smart contract aims to allow users to vote on a quadratic voting and avoid/minimize the risk of collusion, keep the votes anonymous and allow the users to change their votes until the voting process ends.

Other developers can use this example, to use quadratic voting, also to implement zk-snark functionality in their own
projects based on this example.

### Project Details

Following the specifications of MACI as linked above, here is an overview of the architecture and core functionalities of project. 

MACI is a substrate pallet that allow its users to vote while making collusion among participant difficult (if the operator is honest) and retain censorship resistance, correct execution and anonymity of votes. 

MACI has two kind of users: one **operator** and 0..n **voter(s)** (also called user here under). 

The operator role is to create a poll (and publish his public key, known by all), start the sign-up period, process all the voters commands, generate the result of each commands, tally the votes and generate a zk-SNARK proof that the result is valid. 

The voter role is to sign-up for a vote and then vote. 

Secrecy of the votes are possible by using cryptographic operations. As described in the MACI specs, each users and the coordinator have a key-pair used to publish encrypted messages and for the coordinator to decrypt those messages.

Approximate scheme of architecture:

![MACI Scheme](https://github.com/zrowdev/substrate-maci/blob/main/arch.jpg?raw=true)

### Ecosystem Fit

MACI can be used by any blockchain that based on a substrate, in next milestone i want to implement also ink! smart contract, that will be support by any blockchain with ink!.

It can be reused - as provided or modified - by any blockchain, dApp, infrastructures, ... that wishes to provide a way to make quadratic votes for its users. 

I'm not aware of any similar project on Substrate that a quadratic, provable, anonymous and anti-collusion voting system.
  
## Team :busts_in_silhouette:

### Team members

- Nikita Orlov https://github.com/stringnick

### Contact

- **Contact Name:** Nikita Orlov 
- **Contact Email:** global@zrow.dev
- **Registered Address:** To be provided in the invoices

### Team's experience

Entered the substrate ecosystem in 2020 as part of the Substrate Developer. ETH Waterloo 2019 hackathon prize-winner, is a engineer with over 8 years of experience in development and integration of fault-tolerant high-loaded SaaS IT solutions including relevant experience in blockchain solutions.


### Team Code Repos

* Sybil resistant chat bot - https://github.com/StringNick/sybil-resistant-chat-bot-substrate-faucet
* Team profile in github - https://github.com/zrowdev/

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 10 weeks
- **Full-Time Equivalent (FTE):**  1 FTE 
- **Total Costs:** $25,000 (USD)

### Milestone 1 - Anti-collusion

| Number | Deliverable      | Specification                                                                                                                                                                                                         |
| ------ | ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0a.    | License          | Apache 2.0 / MIT / Unlicense                                                                                                                                                                                          |
| 0b.    | Documentation    | Inline documentation of the code and a basic tutorial that explains how a developer can use the project                                                                                                               |
| 0c.    | Testing Guide    | The code will have unit-test coverage (min. 70%) to ensure functionality and robustness. In the guide we will describe how to run these tests                                                                         |
| 0d.    | Article/Tutorial | Article or tutorial that explains the work done as part of the grant.                                                                                                                                                 |
| 1.     | Anti-collusion   | Implement MACI pallet for substrate with voting example based on scheme below, stack that i will use: substrate                                                                                                       |
| 2.     | Voting chat tool | Implement a voting tool on golang, voting tool functionality: creating vote, generating keypair, sign up user in pallet, cast a vote, calculate batch of vote, tallying result of poll, verify tallied result of vote |



## Future Plans

Implement ink! smart contract with voting example, maybe another example using this mechanism.