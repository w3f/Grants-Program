# Tellor

- **Team Name:** Tellor Inc
- **Payment Address:** Ethereum 0x1B8E06E7133B89ea5A799Bf2bF0221aE71959190 (USDC)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 3
- **Status:** [Terminated](https://github.com/w3f/Grants-Program/pull/1532#issuecomment-1781959568)

## Project Overview :page_facing_up:

The Tellor oracle system is a fully decentralized community focused on securely placing data on-chain. The oracle mechanism works by using simple crypto-economic incentives to secure data through staking and dispute mechanisms, while the community is bound by a token which utilizes an anonymous governance system and monetary policy to reward and motivate adoption and development of the network.

### Overview

Oracles are a key piece of infrastructure for any blockchain ecosystem.  Whether it’s the ability to query price data for defi applications, connect to chains outside of their own system, or make governance decisions based on real world input, oracles make the future of a chain not only exciting, but relevant to the real world. 

Polkadot builders need robust tooling to leverage the full potential of Polkadot’s multichain environment. To realize a fully functional Polkadot ecosystem, there is a need to integrate a reliable and flexible oracle solution for accessing secure data on any parachain.

The Tellor Proposal:

Tellor plans to implement an oracle pallet along with a deployment of controller smart contracts on a to-be-selected EVM parachain that will handle the staking, governance, and reward system. This will enable parachains across the ecosystem to read, and/or request a push of oracle data. 

This integration supports the many smart contract applications and parachain pallets requesting truly decentralized oracles across Polkadot’s environment:
oracle consumer smart contracts deployed on the same EVM parachain will use the existing Tellor oracle system as is,
while oracle consumer parachains will interact with the controller contracts via XCM. EVM/WASM smart contracts on any other smart contract parachain could also consume oracle data via the oracle pallet once installed there.

The controller smart contracts will interact with the oracle pallet via Solidity precompiles, precompiled contracts which handle the call translation from Solidity to native Substrate pallets, and XCM. 
The XCM pallets then handle cross-chain messaging, effectively enabling the smart contracts to invoke dispatchable functions within the oracle pallet installed on other parachains, as well as allow the pallet to invoke functions available within the controller smart contracts.

### Project Details

The Tellor oracle system is currently deployed to various EVM chains as a set of Solidity smart contracts. The existing solution has been translated into one that ensures minimal changes to the existing smart contracts, whilst enabling parachains to make use of Tellor oracle functionality via a native Substrate pallet and cross-chain messaging.

The modified smart contracts will be deployed to an EVM smart contract parachain and the pallet incorporated within any parachain requiring oracle functionality, classified as an oracle consumer parachain.

**Oracle Solution Components**

The major components have been identified as follows, along with a description of the adaptations/implementation required.

![PolkaTellor design](https://github.com/tellor-io/PolkaTellor/blob/main/public/PolkaTellorDesign.png)


**Oracle  Contract**
The main oracle contract which handles staking, reporting and slashing, which is controlled by the Governance contract. Oracle reporters are required to stake a token to ensure data integrity before reporting oracle data. Data is reported on-chain using a query identifier, a hash of an off-chain data specification, and a simple byte array representing the data. The Oracle contract also uses its own functionality to be provided with a current staking token price, which is used to dynamically adjust the minimum stake amount (to guarantee a minimum amount of security).

The existing smart contract will need to be adapted to support staking by parachain, so that corresponding staking events/balances can be reported from the contract to oracle consumer parachains, effectively unlocking oracle reporters to begin reporting data to these consumer parachains directly.

The revised Oracle contract will continue to provide existing functionality to the local smart contract parachain on which it is deployed, enabling other smart contracts deployed on the same chain to use the oracle solution as-is.

**Governance Contract**
Used to handle oracle data disputes, where a successful dispute results in the corresponding oracle data reporter having their stake slashed and distributed to the dispute initiator via the Oracle contract. Governance votes are split equally between the staking token holders, reporters, users and the Tellor team: the staking token holders are weighted by on-chain token balances, active reporters by non-transferrable ‘reporter tokens’ earned for each report they provide, users by the number of tips and the team as a tie-breaker.

Data disputes for an oracle consumer parachain will originate on said parachain and then be reported into the Governance contract for dispute resolution. The existing Governance smart contract will therefore need to be adapted to support disputes by parachain, so that the result of disputes can be reported back to the corresponding oracle consumer parachain to take additional action.

Vote weighting will also need to take parachain state into account, as the oracle users and reporters are now spread out across parachains in the ecosystem. Each consumer parachain could be notified of a new round of dispute voting, along with an expected duration. The oracle users and reporters of each parachain could then cast their votes on their respective parachains, acting as proxies by collating votes until finally submitting them before the voting deadline, along with additional information used to weight the votes (total submitted data points for reporters, total tips for oracle users).

**AutoPay Contract**
This smart contract is responsible for the creation and funding of data feeds by an oracle data consumer, as well as the payment to oracle reporters. It keeps track of data submissions and user tips, allowing reporters to claim rewards as required. A percentage of the claim is taken as fees, which goes towards staking rewards.

This functionality will need to be ported to a native Substrate pallet, so that an oracle consumer parachain can create and fund feeds as well as pay reporters locally using its own token. A reporter will earn local staking rewards based on their percentage of the overall parachain stake locked in the Oracle contract.

**Consumer (Using Tellor) Contract**
The Using Tellor contract is incorporated into consumer smart contracts to access reported oracle data.The functionality and APIs exposed here will need to be ported to a native Substrate pallet, so that a parachain can make use of available oracle data stored within its own chain state.

**Parachain Integration Contract**
A new lightweight smart contract to handle parachain registration and ease parachain integration from the Oracle and Governance contracts. Registration provides parachain-specific configuration and ensures that sensitive functionality can only be called by the corresponding consumer parachain ‘owner’ accounts. Helper functions will abstract the necessary call encodings for remote execution, keeping cross-chain messaging functionality separate from oracle and governance logic.

Parachain registration could also require additional staking within the Oracle contract, further adding to the economic security of the oracle solution.

**Tellor Pallet**
An amalgamation of aspects of the functionality from the Oracle, AutoPay and Consumer contracts, enabling oracle functionality on any parachain secured by stake within the Oracle contract. Allows oracle data feed setup and funding as well as oracle data reporting and consumption, ensuring that all oracle data for a particular parachain is stored within its own local state.

Oracle reporters must have staked the necessary tokens for a parachain via the Oracle contract before they are able to start reporting on a consumer parachain. Oracle reporters earn rewards for reporting oracle data in the token of the parachain.

Data disputes originate via the pallet on the consumer chain and require a dispute fee, typically 10% of stake amount and increasing with each round, to be locked before being reported to the Governance contract where they are voted on, locking an oracle reporter from reporting to the parachain until resolution.

*Tellor core architecture:* 
The underlying oracle design will follow the same structure as Tellor on other chains, namely a game theoretic design where data is put on-chain by staked reporters who are liable to lose their stake if disputed.  The system can be as fast as participants desire, but like other blockchain architectures, is more secure the slower the oracle use is since it allows more time for disputes.

Tellor architecture of the smart contracts can be found in the [TellorFlex github repository](https://github.com/tellor-io/tellorFlex) or in our [whitepaper](https://tellor.io/whitepaper/).  Information on the Tellor Reporter (node) software can be found in the [Tellor Docs](https://docs.tellor.io/tellor/reporting-data/introduction).

*Prior work or research on the topic:*
The team received an Ethereum foundation grant for researching bridges as the team was initially designing a cross-chain decentralized derivative protocol. There were no available decentralized oracles at the time and that prompted the team to design and build a decentralized oracle, which soon was dubbed Tellor.  Tellor has been live on Ethereum mainnet since August 2019 and the team has continued to iterate to increase decentralization, token dependency, and improve upon governance. We have launched on several chains as of May 2022, including Ethereum, Polygon, Arbitrum, Algorand, and corresponding testnets. 

*What your project is not or will not provide or implement:*
Tellor will launch the system and help design/solve any specific integration for users in the substrate ecosystem.  We will initially help bootstrap a network of reporters, however Tellor is a system that is designed to run without any team intervention.  Being crypto-economically incentivized, reporters will stay in networks that provide enough incentives/rewards for them to provide data. Tellor can provide the software for reporters to run, however the size of the network will largely depend on whether users are active in the system and funding oracle reporters.  It is important for the web3 ecosystem and tellor to work together to ensure enough usage and monitoring is enabled on the system once it is launched.



### Ecosystem Fit

Ecosystem Needs and Fit - For a long time the Tellor team has been fans of the Polkadot ecosystem and their pursuit of decentralization.  The values of security, transparency, and truly open and decentralized networks is something that Tellor was built upon and lines up perfectly with the ecosystem built here.  Oracles are a necessity for decentralized applications to meet their full potential and to expand the interoperability between chains.  Although there are competitors, Tellor is an oracle built on the values which align with projects built on Polkadot. We provide the needed infrastructure for chains’ use cases to expand, while at the same time remaining uncompromising in our approach towards censorship resistance and decentralization. 

Target Audience - The target audience is developers needing connections to off-chain data.  Whether it’s connections to other non-XCM connected chains, or even straight web2 off-chain data, Tellor can provide the ecosystem with a general purpose oracle that can handle any data, at any speed, for any use case. The initial goal is for the Tellor oracle pallet to be included/added to parachains so that developers can use it to access off-chain data in any smart contract structure on the ecosystem. 

Similar projects - A similar project to Tellor is the Chainlink Substrate oracle pallet. Tellor also provides off chain data however, Tellor’s design differs greatly in areas where it matters.  Mainly, the Tellor oracle has a greater (actual) degree of decentralization, is crypto economically incentivized versus reputation based, and is completely flexible for the needs of any data type or frequency.  In addition, once the network of reporters is bootstrapped, there is minimal team intervention needed. Anyone can become a reporter by staking, anyone can dispute the validity of the data for a fee, and the user can incentivize reporters to quickly add or replace the data they need by posting a reward. The system is permissionless, as well as sybil and censorship resistant. 


## Team :busts_in_silhouette:

### Team members

Our team consists of 7 developers and 3 non-technical team members.  3 of us are cofounders - Brenda Loya CEO, Nick Fett CTO, and Michael Zemrose CSO.   

The developers of Tellor have years of blockchain specific coding experience.  


### Contact

- **Contact Name:** Brenda Loya
- **Contact Email:** brenda@tellor.io
- **Website:** www.Tellor.io

### Legal Structure

- **Registered Address:** 118 N. Market Street Suite 110,  Frederick, MD 21701
- **Registered Legal Entity:** Tellor Inc

### Team's experience

The Tellor team has broad experience working in blockchain technology.  The founders have been in the space for a decade now and have authored research papers, performed audits, been active members of DAO’s, and worked on several L1 paradigms over the years.  The main Tellor repo has most of our work, however individual achievements of those in the company are their own. 

### Team Code Repos

- https://github.com/tellor-io/


Github profiles of our dev team:

- https://github.com/themandalore - Nick Fett CTO
- https://github.com/brendaloya - Brenda Loya CEO 
- https://github.com/tkernell  -   Integrations Engineer
- https://github.com/orgs/tellor-io/people/akremstudy - Developer
- https://github.com/tallywiesenberg - Developer
- https://github.com/oraclown - Developer

### Team LinkedIn Profiles (if available)

- https://www.linkedin.com/in/brendaloya/ 
- https://www.linkedin.com/in/nicholas-fett/
- https://www.linkedin.com/in/zemrose
- https://www.linkedin.com/in/timothy-kernell-27b213102/
- https://www.linkedin.com/in/tally-wiesenberg/ 
- https://www.linkedin.com/in/owenburton22/

## Development Status :open_book:

The smart contract structure for Tellor is finished for most EVM chains, but will need specific changes. Initial design discussions have been had with Robin, Frank Bell, and Guatam and we have specifications and even some base work done around the design.  

- Medium Articles - https://medium.com/@tellor 
- Research - ​​https://vc.bridgew.edu/cgi/viewcontent.cgi?article=1037&context=ijcic 
- Smart Contract repository - https://github.com/tellor-io/tellorFlex 
- Reporter (Node) repository - https://github.com/tellor-io/telliot-feeds  

## Development Roadmap :nut_and_bolt:

| Milestone | Description                                                                      | Stack                 | Resources | Funding |
| --------- | -------------------------------------------------------------------------------- | --------------------- | --------- | ------- |
| 1         | Develop and launch Tellor core contracts on an EVM parachain                     | Solidity / javascript | 2 devs    | 20,000  |
| 2         | Create and test oracle pallet and complete documentation with usage examples     | Rust / Solidity       | 2 devs    | 20,000  |





### Overview

- **Total Estimated Duration:** 4 months
- **Full-Time Equivalent (FTE):**  2 
- **Total Costs:** 40,000 USD


### Milestone 1 — Launch Tellor core contracts on an EVM parachain


- **Estimated duration:** 2 month
- **FTE:**  2
- **Costs:** 20,000 USD


| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License |  MIT|
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial**. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1 | Develop Controller contracts | We will provide a set of solidity smart contracts with the functionality described above in the [Project Details](#project-details)  |
| 2 | Develop Parachain integration contract| We will provide an integration contract |


### Milestone 2 — Create and test oracle pallet and complete documentation with usage examples

- **Estimated Duration:** 2 months
- **FTE:**  2
- **Costs:** 20,000 USD

Details:  A new Substrate pallet will be required which includes the core oracle data reporting and querying logic as well as staking rewards and payment logic, ported from the existing tellorFlex (oracle), AutoPay and UsingTellor (consumer) smart contracts. All the logic within the pallet will simply use the token of the parachain. Any parachain user can create and fund feeds, which are fulfilled by oracle reporters which have deposited a stake to the Oracle contract on the smart contract parachain.  Once completed, integrating and testing the pallet and the controller contracts will take significant work and documentation in order to make a robust and user-friendly oracle module.  

| Number | Deliverable | Specification                                                                                                                                                   |
| -----: | ----------- | ------------- |
| **0a.** | License | MIT                                                                                                                                                             |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial**.                                                                             |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1 | Substrate Oracle pallet design and integration | We will provide the Substrate oracle pallet |
| 2 | Tests and a guide for testing functionallity of the the pallet with integration of a mock project on selected parachains| We will provide tests and a guide to test cross functionality of the system for interactions between the EVM chain and consumer chain and oracle pallet (meaning test the functinallity between milestone 1 and 2 delivarable 1 -  solidity contracts, pallet, XCM)|
| 3 | Documentation/ Usage Examples| We will provide documenatation and usage examples for the system.                                                                                               |



## Future Plans

Tellor plans to work with the Polkadot ecosystem as they grow to identify new and better set-ups for the oracle structure on the system.  Another key piece to the ongoing support is working directly with builders to get them integrated and create a large set of sample code and existing users that can help make Tellor the secure choice of oracle on the network.  We’ll accomplish this by:

- Becoming further engaged with the Polkadot ecosystem (hackathons, events, podcasts, etc.)
- Working on more specific documentation and builder engagement (stack questions, more sample repos through tellor)
- Direct outreach to projects  (working closely with existing projects on Polkadot to increase the security and capabilities of their current codebase)


## Referral Program (optional) :moneybag: 

You can find more information about the program [here](../README.md#moneybag-referral-program).
- **Referrer:** Name of the Polkadot Ambassador or GitHub account of the Web3 Foundation grantee
- **Payment Address:** BTC, Ethereum (USDT/USDC/DAI) or Polkadot/Kusama (aUSD) payment address. Please also specify the currency. (e.g. 0x8920... (DAI))

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** 

We talked to Rohan at a few events about building on Polkadot and he recommended we apply!  We’ve been in touch with Robin Ejsmond-Frey, Frank Bell, and Guatam from Parity who have done significant work with us in developing the specifications and design for the build. 
