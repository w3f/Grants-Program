# Maki

- **Team Name:** Cyril Carlier (Individual)
- **Payment Address:** 0x7e575d2140aa4b723ac2014d5627330a7ed514d4 (ERC-20 USDC)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 1

## Project Overview :page_facing_up:

This application is a response from the [anti-collusion infrastructure RFP](https://github.com/w3f/Grants-Program/blob/master/rfps/open/anti-collusion_infrastructure.md).

### Overview

Maki aims to be a simple MACI implementation for the Polkadot eco-system, similar to the existing one on Ethereum ([MACI](https://github.com/privacy-scaling-explorations/maci))

Maki is an ink! smart contract that implements a minimal anti-collusion infrastructure as specified in the following [specifications](https://github.com/privacy-scaling-explorations/maci/tree/9b1b1a631090ee89d2bc12f4bcef7763e42caef0/specs) and derived from [this ethresearch post](https://ethresear.ch/t/minimal-anti-collusion-infrastructure/5413). This means that most of the project details are based on the researches done on [MACI](https://ethresear.ch/t/minimal-anti-collusion-infrastructure/5413) and the specifications. Things may differ by making Maki a more simple version of MACI. 

As explained in the RFP, the smart contract aims to allow users to vote on a quadratic voting and avoid/minimize the risk of collusion, keep the votes anonymous and allow the users to change their votes until the voting process ends.

Governance is an important part of Polkadot and (even more for now I'd say) Kusama, while a a lot of use cases of governance mechanisms are already implemented and running on the ecosystems (via pallets and smart contracts), a voting system for quadratic voting, anonymous voting and anti-collusion is not available yet.
That is why the project fits well for Polkadot and Kusama.

I'm interested in this project because governance is a major component in decentralized ecosystems and adding more needed possibilities to the panel of voting mechanism of Polkadot and Kusama seems important to me.
While for now I'm unsure the current projects on Polkadot/Kusama needs such mechanism, it is obvious some will need such anti-collusion and anonymous voting for its users.

### Project Details


Following the specifications of MACI as linked above, here is an overview of the architecture and core functionalities of Maki. 

Maki is a smart contract that allow its users to vote while making collusion among participant difficult (if the operator is honest) and retain censorship resistance, correct execution and anonymity of votes. 

Maki has two kind of users: one **operator** and 0..n **voter(s)** (also called user here under). 

The operator role is to deploy the contract (and publish his public key, known by all), start the sign-up period (which is done when the contract is deployed), process all the voters commands, generate the result of each commands, tally the votes and generate a zk-SNARK proof that the result is valid. 

The voter role is to sign-up for a vote and then vote. 

Secrecy of the votes are possible by using cryptographic operations. As described in the MACI specs, each users and the coordinator have a key-pair used to publish encrypted messages and for the coordinator to decrypt those messages.

#### Overview :

![](https://i.imgur.com/n4tmk6p.png)

#### Maki's Functions : 

`signUp` allows a user to register for voting by sending his public key to the contract. There is no need for a given user to call this function multiple times.

`publishMessage` allows a user to vote. A voter may use this multiple time to change his vote options, as long as the vote in not ended.

`processMessages` function called by the coordinator to process all the users' messages, update the state root and provide a zk-snark proof. 

`proveVoteTally` to publish the vote result and the zk-snark proof of it. Called by the coordinator. Can only be called once the vote ended.

`verifyVoteTally` to verify that the generated zkSnark proof is valid.

Public functions are needed for the coordinator to process the votes off-chain (basically the contract's state such as stateTree, messageTree, etc.) and the voter to get the coordinator's key.

Besides the contract, we will provide two circuits to build the zk-Snark proof off-chain, one for the correctness of message processing (`proveStateCorrectness`) and one for the vote tallying (`proveVoteTallyCorrectness`). The circuits will be written in [circom](https://docs.circom.io/) and it will be used through a script that build and execute the compiled circuit. This is needed for the coordinator's functions `processMessages` and `proveVoteTally`.

Maki has two merkle roots, one for the `messageTree` (which gathers submitted messages) and one for the `stateTree` (which gathers the mapping between the user public keys and the votes).  

Maki will be implemented as an ink! smart contract, so it will be developed in Rust with ink! library.

Maki will _not_ provide out-of-the-box choices of circuits used for zk-SNARK proof (as it may vary depending on the nature of the voting system), nor choices of the type of voting mechanism (non-quadratic votes, conviction votes, different tallying (such as what can be found on Polkadot and Kusama referenda), etc.). However this could be part of a maintenance program, a future plan, and/or another team may develop these features to meet their needs.

The goal being to have a functioning contract, the circuit is not my main concern here.Therefore, an existing circuit will be reused (in Typescript) - most likely one that is implemented by [MACI](https://github.com/privacy-scaling-explorations/maci). I'll give full credits to their implementation, even if this requires some adaptations on my end. 

### Ecosystem Fit

Maki can be used in any blockchain that supports ink! smart contracts. 

It can be reused - as provided or modified - by any blockchain, dApp, infrastructures, ... that wishes to provide a way to make quadratic votes for its users. 

I'm not aware of any similar project on Substrate. Despite that there are different existing voting mechanisms on Polkadot/Kusama, this one is the only one that would provide a quadratic, provable, anonymous and anti-collusion voting system.

## Team :busts_in_silhouette:

### Team members

- Cyril Carlier

### Contact

- **Contact Name:** Cyril Carlier
- **Contact Email:** cyrilcarlier@hotmail.com

### Legal Structure

Individual / Sole Proprietor

### Team's experience

I'm a software developer with 5 years of relevant experience in C#/.Net, Java(with Spring/Hibernate), Typescript, React, C++, SQL and Angular, working mainly on DDD projects and lower-level projects (such as background-jobs services, multi-thread related projects). I have a master degree in Computer Science (University of Namur - Belgium). 

Here is an overview of different relevant project I've worked / working on :

* [Polk-auction](http://www.polkauction.io/): A project funded by this program ([polk-auction application](https://github.com/w3f/Grants-Program/blob/2606f01f2fed14bb358560c8ececc9ad05e40bb8/applications/polk-auction.md)) which is a project that allow Polkadot and Kusama end-users to have a concise, simple an easy to understand view of the parachain, auction and crowdloan state of the Dotsama's ecosystem. Focused on on-chain data with some useful and relevant off-chain information surrounding the state of Polkadot / Kusama. While the project is online, I don't consider it "finished" as there is still a lot of things to add and enhance on Polk-auction.

* Project with background processing of files and websocket messaging for communication between multiple applications.

* Different DDD projects with back-end(s) (HTTP API, written with .NetCore and Entity) and UI app(s) (web-app), multiple databases and mechanisms for back-end communication if/when needed.

* Multiple other projects and PoC, mostly with backend technologies (Java, C++, C#)

If anyone on your team has applied for a grant at the Web3 Foundation previously, please list the name of the project and legal entity here.

### Team Code Repos

* https://github.com/CrommVardek

### Team LinkedIn Profiles

* https://www.linkedin.com/in/cyril-carlier/

## Development Status :open_book:

As mentioned, this application is a response from the [anti-collusion infrastructure RFP](https://github.com/w3f/Grants-Program/blob/master/rfps/open/anti-collusion_infrastructure.md)

## Development Roadmap :nut_and_bolt:


### Overview

- **Total Estimated Duration:** 6 months
- **Full-Time Equivalent (FTE):**  0.3 FTE
- **Total Costs:** $9,000

### Milestone 1 — Implement Voter functions

- **Estimated duration:** 2 months
- **FTE:**  0.3 FTE
- **Costs:** 3,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | MIT |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can deploy the contract and use its functions. References, such as the MACI research page or the specs of MACI implementation, will be provided. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 1. | Maki: constructor and internal state | Contract internal state needed to work properly and its constructor |  
| 2. | Maki: signUp function | User function to register for the vote (ink!) |   
| 3. | Maki: publishMessage function | User function to vote (ink!) |  
| 4. | Maki: processMessage function | Coordinator function to proves that the messages have been correctly processed |    

Note: 0d. not included, because it would be overkill to setup a whole environment on a docker image just to deploy the contract while other resources already exist for that.

Note: As the implementation is based on others work (research and specification), we will give credits and link the needed parts of it.

### Milestone 2 — Coordinator's functions

- **Estimated Duration:** 4 months
- **FTE:**  0.3 FTE
- **Costs:** 6,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | MIT |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can deploy the contract and use its functions. References, such as the MACI research page or the specs of MACI implementation, will be provided. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0e. | Article | We will publish a Medium **article** and the same article on SubSocial to explain what is Maki. The articles will be referenced on Reddit (/r/Kusama and /r/Polkadot) and on diverse Discord Server related to Polkadot (mostly the important and official ones).
| 1. | Maki: proveVoteTally function | Coordinator function to prove the result of the vote tally on-chain (ink!) |   
| 2. | Maki: verifyVoteTally function | Function to verify the result of the vote tally and the proof of it (ink!) | 
| 3. | Circuits | Circuit used to generate the zk-Snark (in TypeScript and Circom)  - this will be based (if not reused) on this work [MACI](https://github.com/privacy-scaling-explorations/maci/tree/master/circuits/ts) and [MACI](https://github.com/privacy-scaling-explorations/maci/tree/master/circuits/circom). One circuit for proveStateCorrectness and one for proveVoteTallyCorrectness functions. |   
| 4. | Votes Verifier | Verifier contract/function (in Rust/ink!) to verify that the proof is correct - this will be based on this work [MACI](https://github.com/privacy-scaling-explorations/maci/tree/master/circuits/ts). The verifier will be used by Maki|   

Note: 0d. not included, because it would be overkill to setup a whole environment on a docker image just to deploy the contract while other resources already exist for that.

Note: As the implementation is based on others work (research and specification), we will give credits and link the needed parts of it.

## Future Plans

I plan to deploy this contract on one of the parachain (for example on Shiden) of Kusama to ask the community what would be their preferred choice for the next development/feature/changes of Maki.

Which led us to the long-term plan... That would be: 
- Add a simple UI/library (in Typescript) to interact with the contract easily.
Please include here.
- Provide different circuits for the proof
- Provide a way to configure the contract to allow non-quadratic votes, or for example conviction votes

These are just ideas. I would also like for the community (developers) to participate, re-use, enhance or create their own version of Maki. 

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** 
I've been part of the program once ([polk-auction application](https://github.com/w3f/Grants-Program/blob/2606f01f2fed14bb358560c8ececc9ad05e40bb8/applications/polk-auction.md))
