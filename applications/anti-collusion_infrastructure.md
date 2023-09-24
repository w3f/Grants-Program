# Anti-Collusion Infrastructure

- **Team Name:** Zrow
- **Payment Address:** 0x49F19FA78C4E766b8C5592e53CC35b1411a5E11f (USDC/DAI)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2 :chicken:

## Project Overview

### Overview

A lot of blockchain applications that involve some kind of voting, like on-chain quadratic funding, can potentially be exploited via collusion and bribery (see [Vitalik’s post about collusion](https://vitalik.ca/general/2019/04/03/collusion.html)). So project is focused to implement an example on substrate blockchain of MACI.

[Noc2 RFP proposal](https://github.com/w3f/Grants-Program/blob/master/docs/RFPs/Open/anti-collusion_infrastructure.md)

### Project Details

I dont expected final version of an project with all alghorithms, but project architecture is looks like:
* implementing an substrate pallet, where we can create a new poll
* implement tool to call substrate pallet and create poll, to calculate result and provide result to substrate pallet using zk-snark
* implement tool for verification of calculation of pool author using zk-snark toolchain
  
Approximate scheme of architecture:

![MACI Scheme](https://github.com/zrowdev/substrate-maci/blob/main/arch.jpg?raw=true)

Coordinator will use MACI Pallet to create a new poll, then coordinator will use voting tool to create a new poll, generate keypair, sign up user in pallet, cast a vote, calculate batch of vote, tallying result of poll, verify tallied result of vote and provide result to substrate pallet using zk-snark.
So coordinator cant censorship, all users can verify result of poll.

### Ecosystem Fit

  * Our project fit to ecosystem by an example of using an a online voting application, that is realised in many blockchains with a resistant to bribery and collisions.
  * Target audience is developers/dapps
  * Our project is a part of substrate ecosystem, so we will use substrate pallets and substrate stack.
  * Different developers can use it as example to use quad vote tallying in their projects, how they can use zk-snark in their projects and etc.
  
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