# Sub-consensus mechanism

- **Team Name:** Massa Labs
- **Payment Address:** 13zRBDBEYWGBZAiCeqMqefPCZ7cXS4GCmizt93NqWoTattpZ (USDT)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

This application is in response to the first milestone of the following RFP: [Sub-consensus mechanism](https://grants.web3.foundation/docs/RFPs/sub-consensus).

### Overview

This project is focused on conducting research to develop the specifications for an advanced, speculative consensus mechanism specifically designed for the collators within a Parachain context.
As noted in the related RFP, a significant challenge facing parachain dApps is the prolonged confirmation times, which are a direct consequence of the time it takes for the Relay Chain to complete on-chain verification of parachain blocks.
Our initiative is directed at introducing an opt-in based, probabilistic sub-consensus mechanism aimed at offering parachain users a more efficient option.

At Massa Labs, we position ourselves at the cutting edge of blockchain technological advancement.
Our team is comprised of individuals who are not only proficient in Rust and blockchain technologies but also include academic professionals recognized in blockchain research, demonstrating an ability to solve complex challenges and improve blockchain functionality significantly.
With a profound interest in the Polkadot/Parachains landscape, this initial response to the RFP represents our formal introduction to the ecosystem, underscoring our commitment to contributing towards ongoing efforts to augment the network's usability and effectiveness.

### Project Details

In our research, we intend to present a framework whereby collators within a parachain may opt to engage with this consensus mechanism
Blocks identified through this mechanism would be quickly quasi-finalized, although they remain subject to discard in the event that subsequent relay chain finalizations necessitate a parachain reorganization (reorg).
Consequently, applications leveraging this functionality should not depend on quasi-finalized blocks for critical operations without incorporating safeguards against potential reorg scenarios.

The deliverable will be a comprehensive document covering the following aspects:

- An examination of the present technical framework and its constraints.
- A detailed technical proposal that includes a complete specification of any required pallets, along with any necessary modifications to the upstream Substrate/Cumulus repositories.
- A security assessment of the proposed approach.
- A set of guidelines for any parachain team working with Cumulus to implement this sub-consensus mechanism.

Furthermore, our solution is anticipated to:

- Introduce a runtime module responsible for managing the sub-consensus logic, encompassing staking, block selection, and slashing protocols.
- Necessitate adjustments to Cumulus to define the sub-consensus parameters for a specific parachain.
- Exert minimal, if any, influence on the existing Collator protocol.

This project is not aimed at delivering a Proof of Concept (PoC) or a Minimum Viable Product (MVP). Our proposal is strictly limited to achieving the objectives set out in the first milestone of the RFP.
Additionally, our team will not account for possible constraints within the current Collator Protocol framework, such as differences between synchronous or asynchronous backing processes.
Therefore, our approach will not presuppose the causes of parachain reorganizations.

### Ecosystem Fit

- **Where and how does your project fit into the ecosystem?**
    - Our project seeks to enhance the flexibility of parachains by introducing a mechanism that achieves rapid quasi-finality within parachains, thereby enabling the emergence of new use cases.
- **Who is your target audience (parachain/dapp/wallet/UI developers, designers, your own user base, some dapp's userbase, yourself)?**
    - Our primary target audience consists of parachain developers.
- **What need(s) does your project meet?**
    - We address the critical need for a swift pseudo-consensus mechanism within parachains, as the current finality times hinder certain applications.
- **How did you identify these needs? Please provide evidence in the form of (scientific) articles, forum discussions, case studies, or raw data.**
    - This need was identified in line with the RFP’s mention that parachain dApps experience delayed confirmation times due to the relay chain’s verification process. Data from [https://telemetry.polkadot.io](https://telemetry.polkadot.io/) indicates that block finalization may take several seconds.
- **Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?**
    - In the current ecosystem, parachain consensus mechanisms are dependent on the Polkadot Relay Chain for finality, thereby lacking in rapid finality solutions. They mainly serve to submit block candidates for relay chain validation, resulting in inherent delays.
    - The `collator-selection` pallet offered by Cumulus aims at managing collator coordination to prevent collation congestion. However, this pallet is not designed as a robust consensus mechanism but rather as a coordination tool for collators to enhance efficiency.
    - Our project proposes a supplementary consensus mechanism designed to facilitate fast quasi-finality. This means creating a system where actors are economically discouraged from initiating  reorgs, thereby expecting a reduction in their occurrence if collators are adequately motivated to maintain honesty.
- **Are there any projects similar to yours in related ecosystems?**
    - No, this is a pioneering research project aimed directly at addressing core functionalities within the Polkadot ecosystem.

## Team :busts_in_silhouette:

### Team members

- Name of team leader: Aurélien Foucault
- Names of team members: Aurélien Foucault, Léo Besançon PhD, Léonard Lys PhD

### Contact

- **Contact Name:** Aurélien Foucault (Lead of Development Partnership and Team leader)
- **Contact Email:** af@massa.net
- **Website:** https://massa.net/

### Legal Structure

- **Registered Address:** 226 BD VOLTAIRE 75011 PARIS, FRANCE
- **Registered Legal Entity:** MASSA LABS

### Team's experience

Our team's expertise is grounded in the successful development of Massa, a fully decentralized, Rust-built Layer 1 blockchain. This platform has been rigorously audited by Certik, highlighting our emphasis on security and reliability. It currently operates in Mainnet with over 1500 active nodes participating in network security through staking, underscoring the robustness and community trust in our system.

The breadth of experience within Massa Labs spans both academic research and practical application in blockchain technology. Aurélien Foucault, a developer specialized in Rust, has been instrumental in the construction of our Layer 1 blockchain, demonstrating our team's capability in developing high-performance blockchain infrastructure.
Furthermore, Dr. Léo Besançon and Dr. Léonard Lys, both holding PhDs in blockchain technology, enrich our team with a profound theoretical understanding and research capacity.
Their academic and research achievements are complemented by tangible contributions to significant blockchain projects, including Starknet (https://github.com/keep-starknet-strange/bonsai-trie),  illustrating our team's ability to contribute valuable innovations to the blockchain community.

This combination of hands-on development experience, academic insight, and a demonstrable commitment to advancing blockchain technology makes Massa Labs a suitable candidate to undertake the Polkadot Foundation's project. We are dedicated to delivering a sub-consensus system that not only meets the current requirements of the Polkadot ecosystem but is also designed with foresight into its future evolution.

### Team Code Repos

Relevant team code repos:

- https://github.com/massalabs/massa

GitHub accounts of all team members:

- https://github.com/AurelienFT
- https://github.com/Leo-Besancon
- https://github.com/leoloco

### Team LinkedIn Profiles

- https://www.linkedin.com/in/aurelien-foucault/
- https://www.linkedin.com/in/leo-besancon/
- https://www.linkedin.com/in/leonard-lys-0033a486/

### Team academic publications

We have academic researchers with blockchain publications in the team, and all are familiar with BFT consensus algorithms:

Léo Besançon: https://scholar.google.com/citations?user=NmXfn2cAAAAJ&hl=en&authuser=1&oi=ao

Léonard Lys: https://scholar.google.com/citations?hl=en&authuser=1&user=NdEcgP8AAAAJ

But also, as part of the Massa team:

- https://scholar.google.com/citations?user=OUeoziEAAAAJ
- https://scholar.google.com/citations?user=kWScejIAAAAJ

## Development Status :open_book:

While we familiarized ourselves with the current polkadot architecture and related mechanisms, we have not yet started the research phase for this project. While we haven't discussed our approach with others, we have examined:

- The current implementation of the Collator protocol
- Various research related to BFT / PoS based consensus algorithms. In particular, one of our team members thoroughly analyzed consensus algorithms in the context of a thesis on cross-chain interoperability, with a brief focus on polkadot network: https://theses.hal.science/tel-03847642/file/LYS_Leonard_2022.pdf. We have thoroughly studied consensus algorithms and we have even imagined, designed, theorized, proven and implemented our own innovative PoS consensus algorithm from scratch that is now running in production: https://arxiv.org/pdf/1803.09029.pdf. We also designed a hybrid BFT and Nakamoto pseudo-consensus algorithm to improve the security of our original proposal: https://arxiv.org/abs/2302.10009.
- We are also familiar with Substrate. For example we have worked in collaboration with Starknet on substantially modifying the Substrate runtime for their purposes in the Madara sequencer: https://twitter.com/Starknet/status/1755267691890225356 (in particular the second link).

We will familiarize ourselves with the particularities of Polkadot in order to ensure that our implementation is correctly integrated to the rest of the codebase. We are quick learners in that regard, but if you have references of Polkadot core developers that might provide guidance and review, it will accelerate the process further.

We are very confident in our ability to tackle this topic, and our track record will show you that we thrive at complex tasks.

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 2 months
- **Full-Time Equivalent (FTE):** 1
- **Total Costs:** 20,000 USD

### Milestone 1 **- Research and technical specification**

- **Estimated duration:** 2 months
- **FTE:** 1
- **Costs:** 20,000 DAI

| Number | Deliverable | Specification |
| --- | --- | --- |
| 0a. | License | MIT |
| 0b. | Documentation | We will document the limitations of the current approach. |
| 0c. | Testing and Testing Guide | This research will not lead to any testing. |
| 0d. | Docker | We do not plan to modify the existing deployment infrastructure. |
| 0e. | Article | We will write an article that explains our research and the defined specifications |
| 1. | Technical specifications | We will provide a document containing: an overview of the architecture changes, functional specifications for new pallets, and functional specifications for changes on the polkadot/cumulus repositories. |
| 2. | Security analysis | We will provide a security report containing: detailed hypotheses on the different actors (underlying hypotheses on the Relay Chain), risk/reward analysis to break the underlying choosen consensus mechanism, and impact on the expected usage for parachains. |
| 3. | Implementation guide for parachains | We will provide a guide containing: a brief overview of our solution and general guidelines of what the parachain will have to adopt our solution |

The research outlined in deliverables 1. and 2. will be reviewed by the Polkadot team, and any concerns raised by the team will be taken into account.

## Future Plans

In this application, we only focus on the first milestone of the linked RFP, in order to familiarize ourselves with the Polkadot ecosystem.
We plan to apply to the second milestone once this research phase is validated.

In this case, we would actively develop The detailed specifications of the planned Proof of Concept will depend on the results of the research phase, but would include the implementation of the sub consensus mechanism for at least one existing parachain, along with testing and benchmarks.

More generally, once the team is more familiar with the Polkadot ecosystem, we could provide additional assistance in core development on other subjects.

## Additional Information :heavy_plus_sign:

N/A
