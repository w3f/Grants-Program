# W3F Grant Proposal

- **Project Name:** Sequester
- **Team Name:** Sequester
- **Payment Address:** bc1quup4v5el5s7m6szh24d6sn6cl25yjvr8mlymnt
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview

### Overview

Since Polkadot-based chains are fee-optional, transaction fees currently being used as an anti-spam mechanism can be leveraged to make every transaction on Polkadot carbon negative, without requiring any changes to the user experience. We propose a common good parathread on Polkadot, named Sequester, that provides the functionality of aggregating transaction fees, exchanging them into carbon-backed tokens, and retiring underlying carbon offsets that meet the community’s specifications.

Sequester is a toolkit that will allow any chain in the Polkadot ecosystem to easily buy carbon-backed assets and retire associated carbon credits. By retiring these carbon credits, we aim to incentivize the creation of more high-quality carbon reduction projects by substantially increasing demand and the economic viability of this work.

Due to Polkadot’s shared security model, the network is uniquely positioned to utilize existing network activity to natively power a carbon sink. With the widespread adoption of Sequester across its growing ecosystem, Polkadot has the potential to power one of the largest carbon-offsetting entities worldwide.

For more information, see our full [white paper](https://docs.google.com/document/d/15L7bO8dnx1XvWpS6ZRi4wEmSTV5yEnON_wEhaGJnHpQ/).

### Project Details

To allow chains to sustainably leverage their transaction fees to buy carbon credits on-chain, we will need to handle:

1. Receiving tokens sent from other chains
2. Exchanging those tokens into carbon-backed tokens, and
3. Initiating retirement of the underlying assets for the carbon-backed tokens

This grant addresses step 1. Specifically, we will implement a pallet that will calculate a chain’s transaction fees over a period of time and allow any chain connected to Polkadot or Kusama to send a percentage of them to Sequester.

### Ecosystem Fit

Sequester is building the infrastructure to allow any chain in Dotsama to donate a portion of their transaction fees towards buying and retiring carbon-backed assets.  We aim to provide parachain developers a simple way to integrate Sequester’s functionalities into their chain.  We hope to lead the charge in implementing Polkadot’s environmental strategy. With the widespread adoption of Sequester across its growing ecosystem, Polkadot has the potential to be one of the largest carbon-offsetting entities worldwide. We visualize and explain this process in the diagram below:

<img alt="High-Level Diagram Detailing Sequester’s Role in the Polkadot Ecosystem" src="https://user-images.githubusercontent.com/16585653/167210224-2c3692f0-ec2c-47d5-b7ae-b4df1a1bee11.png" style="display:block;margin-left:auto;margin-right:auto;width:80%">

## Team

### Team members

- Brendan Edelson - Full Stack Developer
- Ethan Brown - Full Stack Developer

### Contact

- **Contact Name:** Sequester Team
- **Contact Email:** sequester.chain@gmail.com
- **Website**: Coming Soon (tbd)

### Legal Structure

- **Registered Address:** UniSearch Inc. 800 N. State Street, Suite 403, Dover, DE 19901, United States
- **Registered Legal Entity:** Sequester Chain LLC.

### Team's experience

- Brendan Edelson - Software Engineer at CTRL-Labs. Bachelor of Science, Computer Science from Stanford University.
- Ethan Brown - Software Engineer at Instagram. Bachelor of Science, Computer Science from Stanford University.

### Team Github Repos

- Code for the pallet will live here: <https://github.com/SequesterChain/pallets>
- Code for the Sequester chain will live here: <https://github.com/SequesterChain/Sequester-node>

### Individual Github Repos

- Brendan: <https://github.com/brendanedelson>
- Ethan: <https://github.com/esbrown>

### Team LinkedIn Profiles (if available)

- Brendan: ​​<https://www.linkedin.com/in/brendanedelson/>
- Ethan: <https://www.linkedin.com/in/ethanbrown2/>

## Development Status

For the past two+ months, we have been fleshing out the technical implementation details and meeting regularly with several members of Web3 Foundation and Parity Technologies: Marta Moranduzzo, Joe Petrowski, Raul Romanutti, Otar Shakarishvili, and a one-off intro meeting with David Hawaig.

The Bitgreen team will be our initial ecosystem partner and will be responsible for bridging Carbon Credits on-chain in a sustainable manner.

We also attended the AmsterDOT conference and established working connections with several parachain teams in the ecosystem.

## Development Roadmap

### Overview

- **Total Estimated duration:** 5 weeks
- **Total Effort:**  2 FTE
- **Total Costs:** $25000

### Milestone 1

- **Estimated duration:** 5 weeks
- **Total Effort:**  2 FTE
- **Costs:** $25000

Goal - Implement a pallet that allows chains to calculate transaction fees used on-chain during a period of time and send those funds from their treasury via XCM to the Sequester chain.

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide documentation on how to add our pallet to a Substrate chain and an overview of the configuration options. |
| 0c. | Testing | Our code will have full unit-test coverage to ensure functionality and robustness. We will also provide documentation describing how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile(s) to run a test node in order to test that our pallet functions correctly. |
| 1. | Calculate Transaction Fees | Inside our pallet, we will create a method that calculates the transaction fees over a period of x blocks. For the fee-calculation, we will be using an off-chain worker to index the transaction fees on a per-block basis and store that calculation in off-chain storage. |  
| 2. | Send to Sequester | Implement a method that will retrieve the sum of transaction fees from offchain-storage and will send a percentage (a configurable variable) of them to Sequester's chain via XCM every x blocks (also a configurable variable). This transfer process will be automated so that no manual transfer will be needed by the parachain through governance. This method will also handle resetting the proper off-chain variables. |  
| 3. | Article/Tutorial | We will provide a full tutorial outlining how to add the pallet to your chain. This will be added to the wiki of the sequester website.
| 4. | Weight estimation | We will provide reasonable weight estimations, e.g., using benchmarking. |

## Future Plans

1. Creation of Common-Good Chain to receive tokens from chains that implement the Transaction Fee pallet
2. Integration with leading ecosystem DEX to swap substrate tokens for carbon credit-backed tokens
3. Auditing and security analysis of Sequester chain and pallet
4. Sequester website to host our documentation and wikis to allow easy onboarding for other chains
5. Onboarding of Sequester onto Kusama
6. Integration with our first parachain partner for initiating carbon retirement functionality
7. Onboarding of partner Parachain teams
8. Onboarding of Sequester onto Polkadot
9. UI for visualizing Sequester’s impact
10. Integration with future partners and increased offerings of ESG tokens

## Additional Information

**How did you hear about the Grants Program?** Personal Recommendation
